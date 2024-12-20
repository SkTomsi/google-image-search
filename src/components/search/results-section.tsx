import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface ImageSearchResult {
	thumbnail: string;
	title: string;
	link: string;
	source_icon: string;
	position: number;
}

export const ResultsList = ({
	url,
	data,
	isLoading,
}: { url: string; data: ImageSearchResult[]; isLoading: boolean }) => {
	if (isLoading || !url) {
		return <ResultsSkeleton />;
	}

	return (
		<ResponsiveMasonry
			columnsCountBreakPoints={{ 350: 3, 750: 3, 900: 3, 1200: 4 }}
		>
			<Masonry gutter="8px" className="border-none">
				{data?.map((result: ImageSearchResult) => (
					<a
						href={result.link}
						key={result.position}
						target="_blank"
						rel="noreferrer"
					>
						<Card
							key={result.position}
							className="flex h-fit w-full flex-col gap-2 overflow-hidden border-none bg-white p-2 shadow-none"
						>
							<div>
								<img
									src={result.thumbnail}
									alt="search-image"
									className="w-full rounded-xl"
								/>
							</div>
							<div className="flex flex-col gap-2 px-1">
								<div className="flex w-full items-center gap-1">
									<img
										src={result.source_icon}
										alt="favicon"
										className="h-4 w-4 rounded-full"
									/>
									<p className="text-[14px] text-[rgb(95,99,104)]">
										{new URL(result.link).hostname.replace("www.", "")}
									</p>
								</div>
								<p className="font-sans font-semibold text-[14px] text-[rgb(60,64,67)]">
									{result.title.length > 40
										? `${result.title.slice(0, 40)}...`
										: result.title}
								</p>
							</div>
						</Card>
					</a>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
};

export const ResultsSkeleton = () => {
	return (
		<div className="flex h-full w-full flex-col gap-20 overflow-hidden">
			<div className="flex h-full w-full flex-col gap-4">
				<div className="flex h-full flex-col gap-2">
					<Skeleton className="h-5 w-1/3 " />
					<Skeleton className="h-5 w-1/4" />
				</div>
				<div className="flex h-full w-full gap-2">
					<Skeleton className="aspect-square h-[200px] w-full rounded-md" />
					<div className="flex w-full flex-col gap-2 pr-40">
						<Skeleton className="h-4 " />
						<Skeleton className="h-4 " />
						<Skeleton className="h-4 " />
						<Skeleton className="h-4 " />
					</div>
				</div>
			</div>
			<div className="flex h-full w-full flex-col gap-5">
				<Skeleton className="h-4 w-1/5" />
				<div className="grid h-full w-full grid-cols-4 gap-5">
					{Array.from({ length: 8 }).map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Skeleton key={i} className="aspect-square w-full rounded-sm" />
					))}
				</div>
			</div>
		</div>
	);
};
