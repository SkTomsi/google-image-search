"use client";

import Header from "@/components/search/header";
import { ResultsList } from "@/components/search/results-section";
import { GetInitialCrop } from "@/lib/utils";
import { useImageStore } from "@/store/use-image";
import { type SyntheticEvent, useRef, useState } from "react";
import { type Crop, ReactCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function ImageSearchPage() {
	const { image } = useImageStore();
	const [crop, setCrop] = useState<Crop>();
	const [croppedImage, setCroppedImage] = useState<string | null>();
	const imageRef = useRef<HTMLImageElement>(null);

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

	function onImageCropComplete(crop: Crop) {
		const url = getProcessedImage(crop, imageRef.current);

		setCroppedImage(url);
	}

	return (
		<div className="flex h-full max-h-screen w-full flex-col bg-white">
			<Header />
			<div className="relative flex h-full w-full flex-col flex-nowrap overflow-x-hidden text-black sm:h-[calc(100vh-10vh)] sm:flex-row">
				<div className="flex h-full items-center justify-center bg-[#202125] p-10 sm:w-[50%] sm:flex-grow sm:p-10 lg:p-32">
					<div className="flex h-full w-full items-center justify-center p-2">
						<ReactCrop
							className="h-full"
							aspect={undefined}
							onChange={(_crop, percentCrop) => setCrop(percentCrop)}
							crop={crop}
							onComplete={(c) => onImageCropComplete(c)}
						>
							{image && (
								<img
									ref={imageRef}
									src={image}
									alt="search-image"
									style={{
										objectFit: "contain",
										height: "100%",
									}}
									className="hidden select-none "
									onLoad={onImageLoad}
								/>
							)}
						</ReactCrop>
					</div>
				</div>
				<ResultsList />
			</div>
		</div>
	);
}
