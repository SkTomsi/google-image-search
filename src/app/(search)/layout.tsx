import Header from "@/components/search/header";

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
