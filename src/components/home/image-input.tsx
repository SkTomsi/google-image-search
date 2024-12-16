import { useImageSearch } from "@/hooks/use-image-search";
import { useImageStore } from "@/store/use-image";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export default function ImageUploader() {
	const [isDragging, setIsDragging] = useState(false);

	const { isLoading } = useImageSearch();
	const { setImage } = useImageStore();

	const router = useRouter();

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	function handleFileUpload(e: any) {
		setImage(e.target.files);
		router.push("/search");
	}

	return (
		<div className="relative flex h-full w-full flex-col rounded-[8px] border border-[rgb(60,64,67)] border-dashed bg-[#202125]">
			{isDragging && (
				<div className="absolute z-40 flex h-full w-full items-center justify-center rounded-[8px] border border-[rgb(138,180,248)] border-dashed bg-[#313e53]">
					<p className="text-[#93969b] text-base">Drop an image here</p>
				</div>
			)}
			{isLoading && (
				<div className="absolute z-40 flex h-full w-full flex-col items-center justify-center gap-4 rounded-[8px] border border-[rgb(138,180,248)] border-dashed bg-[#313e53]">
					<Loader2 className="h-10 w-10 animate-spin" />
					<p className="text-[#93969b] text-base">Uploading</p>
				</div>
			)}
			<input
				type="file"
				className="absolute z-50 h-full w-full border opacity-0"
				onDragEnter={() => setIsDragging(true)}
				onDragLeave={() => setIsDragging(false)}
				onDragOver={() => setIsDragging(true)}
				onDrop={() => setIsDragging(false)}
				onChange={handleFileUpload}
			/>
			<div className="z-10 h-full ">
				<div className="relative flex h-full w-full items-center justify-center border-yellow-500">
					<div className="absolute flex h-full w-full items-center justify-center gap-5">
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							width="59"
							height="45"
							viewBox="0 0 59 45"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M40.3332 13.747L1.58323 13.747L1.58323 43.4553L40.3332 43.4553L40.3332 13.747Z"
								className="ArIAXb"
								fill="rgb(60,64,67)"
							/>
							<path
								d="M40.3332 13.747L17.0832 13.747L17.0832 33.122L40.3332 33.122L40.3332 13.747Z"
								fill="rgb(60,64,67)"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0.614479 12.7783L6.74988 12.7783L6.74988 14.7158L2.55198 14.7158L2.55198 18.9137L0.614479 18.9137L0.614479 12.7783Z"
								fill="#BDC1C6"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M39.3644 42.4866L39.3644 38.2887L41.3019 38.2887L41.3019 44.4241L35.1665 44.4241L35.1665 42.4866L39.3644 42.4866Z"
								fill="#BDC1C6"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0.614479 38.2887L2.55198 38.2887L2.55198 42.4866L6.74987 42.4866L6.74987 44.4241L0.614479 44.4241L0.614479 38.2887Z"
								fill="#BDC1C6"
							/>
							<path
								d="M19.6665 30.2531H58.4165L58.4165 0.544722H19.6665L19.6665 30.2531Z"
								fill="#AECBFA"
							/>
							<path
								d="M19.6665 21.8429L19.6665 30.2525L58.4168 30.2525L58.4168 19.7406L49.6667 12.4069C48.6234 11.5342 47.2931 11.0699 45.9272 11.1018C44.5614 11.1337 43.2547 11.6596 42.2542 12.5801L33.4166 20.7918L28.4166 17.2548C27.7332 16.7781 26.9013 16.5563 26.0684 16.6288C25.2354 16.7012 24.4554 17.0632 23.8666 17.6505L19.6665 21.8429Z"
								fill="#669DF6"
							/>
							<path
								d="M30.0056 12.9386C31.7315 12.9386 33.1306 11.5395 33.1306 9.8136C33.1306 8.08773 31.7315 6.68863 30.0056 6.68863C28.2798 6.68863 26.8807 8.08773 26.8807 9.8136C26.8807 11.5395 28.2798 12.9386 30.0056 12.9386Z"
								fill="#E8F0FE"
							/>
						</svg>

						<p className="text-[#93969b]">
							Drag an image here or{" "}
							<span className="cursor-pointer text-[rgb(138,180,248)] underline">
								upload a file
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="flex w-full flex-col items-center justify-between gap-[14px] p-5 pt-0">
				<div className="flex w-full items-center">
					<Separator className=" bg-[rgb(60,64,67)]/50" />
					<p className="mx-5 text-[#919c95] text-[14px]">OR</p>
					<Separator className=" bg-[rgb(60,64,67)]/50" />
				</div>
				<div className="flex w-full items-center gap-2">
					<Input
						placeholder="Paste image link"
						className="h-10 rounded-full border border-[rgb(60,64,67)] bg-[#303134] px-6 text-[14px] text-[rgb(241,243,244)] outline-none"
					/>
					<Button className="rounded-full border border-[rgb(60,64,67)] bg-[#303135] px-6 py-2 text-[14px] text-[rgb(138,180,248)] hover:bg-[rgba(136,170,187,0.04)] hover:text-[rgb(210,227,252)]">
						Search
					</Button>
				</div>
			</div>
		</div>
	);
}
