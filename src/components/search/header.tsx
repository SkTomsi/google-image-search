import { Grip, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
	return (
		<div className="flex h-[64px] items-center justify-between p-2 text-black">
			<Link href={"/"}>
				<Image
					src={"/google-color-logo.png"}
					alt="Google Logo"
					width={74}
					height={24}
					className="ml-3 h-[24px] w-auto"
				/>
			</Link>
			<div className="flex items-center">
				<Button variant={"ghost"} className="">
					<Upload /> Upload
				</Button>
				<Link
					href={"/"}
					className="flex h-12 w-12 items-center justify-center rounded-full p-[4px] transition-colors hover:bg-zinc-100/50"
				>
					<Grip className="h-[20px] w-[20px] text-[#5f6368]" />
				</Link>
				<div className="flex h-12 w-12 items-center justify-center p-1">
					<p className="flex h-full w-full items-center justify-center rounded-full bg-muted/10">
						T
					</p>
				</div>
			</div>
		</div>
	);
}
