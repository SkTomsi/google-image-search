import { useSearchBoxStore } from "@/store/use-seach-box";
import { X } from "lucide-react";
import ImageUploader from "./image-input";

export default function ImageSearchBox() {
	const { setImageSearchOpen } = useSearchBoxStore();

	return (
		<div className="absolute z-50 flex h-[362px] w-full flex-col gap-3 rounded-[24px] bg-[#303135] p-5">
			<div className="flex items-center justify-center">
				{/* <div className="invisible cursor-pointer p-1">
					<X className="" />
				</div> */}
				<div className="size-[28px]" />
				<p className="mx-auto">Search any image with Google Lens</p>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className="cursor-pointer p-1"
					onClick={() => setImageSearchOpen(false)}
				>
					<X className="h-5 w-5" />
				</div>
			</div>
			<ImageUploader />
		</div>
	);
}
