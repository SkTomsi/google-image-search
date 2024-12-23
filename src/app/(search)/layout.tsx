import Header from "@/components/search/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gooogle Lens Clone",
	description: "Google Lens Clone built using nextjs and tailwindcss",
};

export default function SearchLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen w-full flex-col bg-white">
			<Header />
			{children}
		</div>
	);
}
