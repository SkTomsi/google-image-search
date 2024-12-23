import { create } from "zustand";

interface SearchBoxState {
	suggestionBoxOpen: boolean;
	setSuggestionBoxOpen: (open: boolean) => void;
	imageSearchOpen: boolean;
	setImageSearchOpen: (open: boolean) => void;
}

export const useSearchBoxStore = create<SearchBoxState>((set) => ({
	suggestionBoxOpen: false,
	setSuggestionBoxOpen: (open) => set({ suggestionBoxOpen: open }),
	imageSearchOpen: false,
	setImageSearchOpen: (open) => set({ imageSearchOpen: open }),
}));
