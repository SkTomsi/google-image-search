"use client";

import Header from "@/components/search/header";

export default function ImageSearchPage() {
	return (
		<div className="flex h-full max-h-screen w-full flex-col bg-white">
			<Header />
			<div className="relative flex h-[calc(100vh-10vh)] w-full flex-col flex-nowrap overflow-x-hidden text-black sm:flex-row">
				<div className="flex h-full flex-grow items-center justify-center bg-[#202125] sm:w-[50%]">
					<div className="aspect-square size-[458px] rounded-[24px] bg-white">
						1
					</div>
				</div>
				<div className="h-full overflow-y-auto bg-yellow-500/10 p-5 sm:w-[50%]">
					<div className="grid h-fit grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<div className="h-[300px] w-full bg-muted object-contain">1</div>
						<div className="h-[200px] w-full bg-muted object-contain">1</div>
						<div className="h-[100px] w-full bg-muted object-contain">1</div>
						<div className="h-[500px] w-full bg-muted object-contain">1</div>
						<div className="h-[700px] w-full bg-muted object-contain">1</div>
						<div className="h-[100px] w-full bg-muted object-contain">1</div>
					</div>
				</div>
			</div>
		</div>
	);
}
