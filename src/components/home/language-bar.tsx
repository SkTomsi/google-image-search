import Link from "next/link";

export default function LanguageBar() {
	return (
		<div className="flex h-full w-full flex-wrap items-start justify-center gap-x-4 gap-y-2 px-1 text-[#bfbfbf] text-[13px]">
			Google offered in:
			<Link
				href={"/"}
				className="cursor-pointer font-medium text-[#99c3ff] hover:underline"
			>
				हिंदी
			</Link>
			<Link
				href={"/"}
				className="cursor-pointer font-medium text-[#99c3ff] hover:underline"
			>
				বাংলা
			</Link>
			<Link
				href={"/"}
				className="cursor-pointer font-medium text-[#99c3ff] hover:underline"
			>
				मराठी
			</Link>
			<Link
				href={"/"}
				className="cursor-pointer font-medium text-[#99c3ff] hover:underline"
			>
				தமிழ்
			</Link>
			<Link
				href={"/"}
				className="cursor-pointer font-medium text-[#99c3ff] hover:underline"
			>
				ગુજરાતી
			</Link>
			<Link
				href={"/"}
				className="cursor-pointer font-medium text-[#99c3ff] hover:underline"
			>
				తెలుగు
			</Link>
			<Link
				href={"/"}
				className="cursor-pointer font-medium text-[#99c3ff] hover:underline"
			>
				മലയാളം
			</Link>
			<Link
				href={"/"}
				className="cursor-pointer font-medium text-[#99c3ff] hover:underline"
			>
				ಕನ್ನಡ
			</Link>
		</div>
	);
}
