import Image from "next/image";
export default function GoogleLogo() {
	return (
		<div className="flex w-full items-center justify-center">
			<Image
				src={"/google.png"}
				width={272}
				height={92}
				alt="google logo"
				className="mt-12"
			/>
		</div>
	);
}
