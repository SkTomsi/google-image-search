"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useState, type SyntheticEvent } from "react";
import ReactCrop, {
	centerCrop,
	makeAspectCrop,
	type Crop,
} from "react-image-crop";
import { Button } from "../ui/button";
import { GlowingStars } from "./glowing-stars";
import "./react-crop.css";

export function ImageCropper({ isLoading }: { isLoading: boolean }) {
	const [crop, setCrop] = useState<Crop>();
	const [_croppedImage, setCroppedImage] = useState<string | null>();
	const imageRef = useRef<HTMLImageElement>(null);

	const searchParams = useSearchParams();
	const imageUrl = searchParams.get("p");

	function onImageLoad(e: SyntheticEvent<HTMLImageElement>) {
		const { width, height } = e.currentTarget;

		const initialCrop = GetInitialCrop({ width, height });

		setCrop(initialCrop);

		const url = getProcessedImage(initialCrop, imageRef.current);

		setCroppedImage(url);
	}

	function getProcessedImage(crop: Crop, image: HTMLImageElement | null) {
		if (!image) {
			return;
		}
		const canvas = document.createElement("canvas");
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;

		canvas.width = crop.width * scaleX;
		canvas.height = crop.height * scaleY;

		const ctx = canvas.getContext("2d");

		if (ctx) {
			ctx.imageSmoothingEnabled = false;

			ctx.drawImage(
				image,
				crop.x * scaleX,
				crop.y * scaleY,
				crop.width * scaleX,
				crop.height * scaleY,
				0,
				0,
				crop.width * scaleX,
				crop.height * scaleY,
			);
		}

		return canvas.toDataURL("image/png", 1.0);
	}

	async function onImageCropComplete(crop: Crop) {
		const url = await getProcessedImage(crop, imageRef.current);

		

		setCroppedImage(url);
	}

	function GetInitialCrop({
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

	return (
		<div className=" relative flex h-full flex-col items-center justify-center bg-[#202125] p-10 sm:w-[50%] sm:flex-grow sm:p-10 lg:p-24">
			<Button className="-translate-x-[50%] absolute top-12 left-1/2 transform rounded-full border border-muted-foreground/40 bg-transparent p-0 px-4 py-2 text-base text-white hover:bg-muted-foreground/10">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					enableBackground="new 0 0 24 24"
					height="18"
					viewBox="0 0 24 24"
					width="18"
					focusable="false"
					className=""
				>
					<rect fill="none" height="24" width="24" />
					<path
						d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"
						fill="white"
					/>
				</svg>
				Find image source
			</Button>
			<div className="relative flex h-full w-full select-none items-center justify-center p-2">
				<ReactCrop
					className="h-full"
					aspect={undefined}
					onChange={(_crop, percentCrop) => setCrop(percentCrop)}
					crop={crop}
					onComplete={(c) => onImageCropComplete(c)}
				>
					{imageUrl && (
						<img
							ref={imageRef}
							src={imageUrl}
							alt="search-image"
							style={{
								objectFit: "contain",
								height: "100%",
							}}
							className="hidden select-none "
							onLoad={onImageLoad}
							crossOrigin="anonymous"
						/>
					)}
					{isLoading && (
						<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-[99999] h-full w-full transform overflow-hidden">
							<GlowingStars />
						</div>
					)}
				</ReactCrop>
			</div>
		</div>
	);
}
