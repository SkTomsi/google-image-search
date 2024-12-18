"use client";
import { useSearchBoxStore } from "@/store/use-seach-box";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import ImageSearchBox from "./image-search-box";
import SearchInput from "./search-input";

export default function SearchBox() {
	const containerRef = useRef<HTMLDivElement>(null);

	const { imageSearchOpen, suggestionBoxOpen, setSuggestionBoxOpen } =
		useSearchBoxStore();

	useEffect(() => {
		if (suggestionBoxOpen) {
			document.addEventListener("click", (e) => {
				if (!containerRef.current?.contains(e.target as Node)) {
					setSuggestionBoxOpen(false);
				}
			});
		}
	}, [suggestionBoxOpen, setSuggestionBoxOpen]);

	return (
		<div
			ref={containerRef}
			className="z-10 flex w-full max-w-[584px] flex-col items-center px-4 py-5 sm:px-0"
		>
			<div
				className={`relative mx-auto flex min-h-11 w-full justify-start rounded-full border border-transparent shadow-none ${suggestionBoxOpen || imageSearchOpen ? "bg-transparent" : "bg-[#4d5156]"}`}
			>
				{!imageSearchOpen ? <SearchInput /> : <ImageSearchBox />}
			</div>
			<div className="-z-50 flex gap-1 pt-5">
				<Button variant={"google"}>Google Search</Button>
				<Button variant={"google"}>I'm Feeling Lucky</Button>
			</div>
		</div>
	);
}
