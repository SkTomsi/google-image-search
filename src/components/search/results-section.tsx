import { RESULTS } from "@/lib/mock-results";
import { memo } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Card } from "../ui/card";

export const ResultsList = memo(function ResultsSection() {
	return (
		<div className="h-full p-5 sm:w-[50%] sm:overflow-y-auto">
			<ResponsiveMasonry>
				<Masonry gutter="16px" columnsCount={3} className="border-none">
					{RESULTS?.map((result) => (
						<Card
							key={result.position}
							className="flex h-fit w-full flex-col gap-2 overflow-hidden border-none bg-white p-2 shadow-none"
						>
							<div>
								<img
									src={result.thumbnail}
									alt="search-image"
									className="w-full rounded-xl "
								/>
							</div>
							<div className="flex flex-col gap-2 px-1">
								<div className="flex w-full items-center gap-1 ">
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
					))}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
});
