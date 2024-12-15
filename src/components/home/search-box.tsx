"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBox() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [suggestionBoxOpen, setSuggestionBoxOpen] = useState<boolean>(false);
	const [imageSearchOpen, setImageSearchOpen] = useState<boolean>(false);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.onclick = () => {
				setSuggestionBoxOpen(true);
			};
		}

		//set state to false when clicked outside the searchbox container

		document.addEventListener("click", (e) => {
			if (!inputRef.current?.contains(e.target as Node)) {
				setSuggestionBoxOpen(false);
			}
		});
	}, []);

	return (
		<div
			id="searchbox-container"
			className="z-10 flex w-full flex-col items-center p-5"
		>
			<div
				className={`relative mx-auto flex min-h-11 w-full max-w-[584px] justify-start rounded-[24px] border border-transparent bg-[#4d5156] shadow-none ${suggestionBoxOpen ? "bg-transparent" : ""}`}
			>
				<div
					className={`flex h-fit w-full items-center rounded-[24px] pr-[8px] ${!suggestionBoxOpen ? "hover:bg-[#e8e8e8]/10" : ""} `}
				>
					<div className="flex h-[46px] items-center pr-[13px] pl-[14px]">
						<Image
							src={"/google-search.svg"}
							width={20}
							height={20}
							alt="google search"
							className="opacity-50"
						/>
					</div>
					<div className="flex flex-1 flex-wrap overflow-hidden">
						<Input
							title="Search"
							className="m-0 border-transparent bg-transparent p-0 shadow-md outline-none"
							ref={inputRef}
						/>
					</div>
					<div className="flex space-x-5 px-4">
						<Image
							src={"/google-voice.png"}
							width={24}
							height={24}
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

				{suggestionBoxOpen && (
					<div className="-z-20 absolute top-0 flex h-[400px] w-full flex-col items-center rounded-[24px] bg-[#303135] px-5 shadow-lg">
						<div className="h-1 w-full border-white/20 border-b pt-12" />
						<ul className="h-full w-full py-4 ">
							<li>हिंदी</li>
							<li>বাংলা</li>
							<li>मराठी</li>
						</ul>
						{suggestionBoxOpen && (
							<div className="z-40 flex gap-2 pb-5">
								<Button variant={"google-secondary"}>Google Search</Button>
								<Button variant={"google-secondary"}>I'm Feeling Lucky</Button>
							</div>
						)}
					</div>
				)}
			</div>
			<div className="-z-50 flex gap-1 pt-5">
				<Button variant={"google"}>Google Search</Button>
				<Button variant={"google"}>I'm Feeling Lucky</Button>
			</div>
		</div>
	);
}
