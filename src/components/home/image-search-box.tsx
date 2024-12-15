import { useSearchBoxStore } from "@/store/use-seach-box";
import { X } from "lucide-react";

export default function ImageSearchBox() {
	const { setImageSearchOpen } = useSearchBoxStore();

	return (
		<div className="absolute z-50 h-[362px] w-full rounded-[24px] bg-[#303135] p-5">
			<div className="flex items-center justify-center">
				<p className="ml-auto">Search any image with Google Lens</p>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className="ml-auto cursor-pointer p-1"
					onClick={() => setImageSearchOpen(false)}
				>
					<X className="" />
				</div>
			</div>
		</div>
	);
}
