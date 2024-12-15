import { Grip } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
	return (
		<div className="flex h-16 w-full items-center justify-between p-2 text-[14px]">
			<div className="flex ">
				<Link href={"/"} className="mr-[5px] ml-[15px] p-[5px] hover:underline">
					About
				</Link>
				<Link href={"/"} className="mx-[5px] p-[5px] hover:underline">
					Store
				</Link>
			</div>
			<div className="flex items-center justify-between pl-[15px] text-[13px] ">
				<div className="pr-[15px]">
					<Link href={"/"} className="p-[5px] pl-[15px] hover:underline">
						Gmail
					</Link>
					<Link href={"/"} className="p-[5px] pl-[15px] hover:underline">
						Images
					</Link>
				</div>
				<Link
					href={"/"}
					className="flex h-12 w-12 items-center justify-center rounded-full p-[4px] transition-colors hover:bg-zinc-100/10"
				>
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						className="gb_D"
						focusable="false"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#fff"
					>
						<path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z" />{" "}
					</svg>
				</Link>
				<Link
					href={"/"}
					className="flex h-12 w-12 items-center justify-center rounded-full p-[4px] transition-colors hover:bg-zinc-100/10 "
				>
					<Grip className="h-[20px] w-[20px] " />
				</Link>
				<div className="flex h-12 w-12 items-center justify-center p-1">
					<p className="flex h-full w-full items-center justify-center rounded-full bg-muted">
						T
					</p>
				</div>
			</div>
		</div>
	);
}
