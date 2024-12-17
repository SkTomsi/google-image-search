import { create } from "zustand";

interface ImageState {
	image: string;
	setImage: (image: string) => void;
}

export const useImageStore = create<ImageState>((set) => ({
	image: "",
	setImage: (image: string) => set({ image }),
}));
