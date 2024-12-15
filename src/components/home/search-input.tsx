import useSearchService from "@/hooks/use-search-service";
import { useSearchBoxStore } from "@/store/use-seach-box";
import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchInput() {
	const { suggestionBoxOpen, setImageSearchOpen, setSuggestionBoxOpen } =
		useSearchBoxStore();

	const [searchTerm, setSearchTerm] = useState<string>("");

	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const query = e.target.value;

			if (query.length === 0) {
				setSuggestionBoxOpen(false);
				setSearchTerm(query);
				return;
			}

			setSearchTerm(query);
			setSuggestionBoxOpen(true);
		},
		[setSuggestionBoxOpen],
	);

	const { suggestions } = useSearchService({ query: searchTerm });

	return (
		<>
			<div
				className={`flex h-fit w-full items-center rounded-full ${!suggestionBoxOpen ? "hover:bg-[#e8e8e8]/10" : ""} `}
			>
				<div className="flex h-[46px] items-center pr-[13px] pl-[14px]">
					<Image
						src={"/google-search.svg"}
						width={20}
						height={20}
						alt="google search"
						className="opacity-50"
						onClick={() => setSuggestionBoxOpen(true)}
					/>
				</div>
				<div className="flex flex-1 flex-wrap overflow-hidden">
					<Input
						title="Search"
						value={searchTerm}
						className="m-0 border-transparent bg-transparent p-0 shadow-md outline-none"
						onChange={handleInputChange}
					/>
				</div>
				<div className="flex space-x-3 px-4">
					{searchTerm && (
						<X
							className="h-10 w-10 cursor-pointer border-muted border-r pr-3"
							onClick={() => setSearchTerm("")}
						/>
					)}
					<Image
						src={"/google-voice.png"}
						width={24}
						height={24}
						className="aspect-square object-contain"
						alt="google voice"
					/>
					<Image
						src={"/google-lens.svg"}
						width={24}
						height={24}
						alt="google voice"
						className="cursor-pointer"
						onClick={() => setImageSearchOpen(true)}
					/>
				</div>
			</div>

			{suggestionBoxOpen ? (
				<div className="-z-20 -top-[2px] absolute flex min-h-[200px] w-full flex-col items-center rounded-[24px] bg-[#303135] px-4 shadow-lg">
					<div className="h-1 w-full border-white/20 border-b pt-14" />
					<ul className="flex h-full w-full flex-col gap-2 py-4">
						{suggestions?.map((suggestion) => (
							<li key={suggestion} className="flex gap-2">
								<Image
									src={"/google-search.svg"}
									width={20}
									height={20}
									alt="google search"
								/>
								{suggestion}
							</li>
						))}
					</ul>
					{suggestionBoxOpen && (
						<div className="z-40 mt-auto flex gap-2 pb-5">
							<Button variant={"google-secondary"}>Google Search</Button>
							<Button variant={"google-secondary"}>I'm Feeling Lucky</Button>
						</div>
					)}
				</div>
			) : null}
		</>
	);
}
