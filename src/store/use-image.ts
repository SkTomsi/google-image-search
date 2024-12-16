import { create } from "zustand";

interface ImageState {
	image: File[];
	setImage: (image: File[]) => void;
}

export const useImageStore = create<ImageState>((set) => ({
	image: [],
	setImage: (image: File[]) => set({ image }),
}));
