"use client";
import { ImageCropper } from "@/components/search/image-cropper";
import { ResultsList } from "@/components/search/results-section";
import { useQuery } from "@tanstack/react-query";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import "react-image-crop/dist/ReactCrop.css";
import { searchImages } from "../../actions/search";

function Search() {
	const searchParams = useSearchParams();
	const url = searchParams.get("p");

	if (!url) {
		redirect("/");
	}

	const { data, isLoading } = useQuery({
		queryKey: ["image-search", url],
		queryFn: async () => {
			const imageUrl = await searchImages(url);
			return imageUrl;
		},
	});

	return (
		<div className="relative flex h-full w-full flex-col flex-nowrap overflow-x-hidden text-black sm:h-[calc(100vh-64px)] sm:flex-row">
			<ImageCropper isLoading={isLoading} />
			<div className="h-full p-5 sm:w-[50%] sm:overflow-y-auto">
				<ResultsList
					url={url}
					data={data?.visual_matches}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
}

export default function ImageSearchPage() {
	<Suspense>
		<Search />
	</Suspense>;
}
