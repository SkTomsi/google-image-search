import { create } from "zustand";

interface SearchBoxState {
	searchText: string;
	setSearchText: (text: string) => void;
	suggestionBoxOpen: boolean;
	setSuggestionBoxOpen: (open: boolean) => void;
	imageSearchOpen: boolean;
	setImageSearchOpen: (open: boolean) => void;
}

export const useSearchBoxStore = create<SearchBoxState>((set) => ({
	searchText: "",
	setSearchText: (text) => set({ searchText: text }),
	suggestionBoxOpen: false,
	setSuggestionBoxOpen: (open) => set({ suggestionBoxOpen: open }),
	imageSearchOpen: false,
	setImageSearchOpen: (open) => set({ imageSearchOpen: open }),
}));
