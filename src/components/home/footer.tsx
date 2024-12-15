import Link from "next/link";

export default function Footer() {
	const links = {
		bottomL: ["Advertising", "Business", "How Search works"],
		bottomR: ["Privacy", "Terms", "Settings"],
	};

	return (
		<div className="mt-auto flex h-fit w-full flex-col bg-[#171717]">
			<div className="border-white/20 border-b px-[30px] py-[12px] text-[15px]">
				India
			</div>
			<div className="flex flex-col items-center px-5 lg:flex-row lg:items-start lg:justify-between">
				<div className="flex ">
					{links.bottomL.map((link) => (
						<Link
							key={link}
							href={"/"}
							className="cursor-pointer p-[15px] font-medium text-[14px] hover:underline"
						>
							{link}
						</Link>
					))}
				</div>
				<div className="flex ">
					{links.bottomR.map((link) => (
						<Link
							key={link}
							href={"/"}
							className="cursor-pointer p-[15px] font-medium text-[14px] hover:underline"
						>
							{link}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
