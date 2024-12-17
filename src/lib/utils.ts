import { type ClassValue, clsx } from "clsx";
import { centerCrop, makeAspectCrop } from "react-image-crop";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function GetInitialCrop({
	width,
	height,
}: { width: number; height: number }) {
	const initialCrop = centerCrop(
		makeAspectCrop(
			{
				// You don't need to pass a complete crop into
				// makeAspectCrop or centerCrop.
				unit: "%",
				width: 90,
				height: 90,
			},
			1,
			width,
			height,
		),
		width,
		height,
	);

	return initialCrop;
}
