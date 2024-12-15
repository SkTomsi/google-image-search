import Footer from "@/components/home/footer";
import GoogleLogo from "@/components/home/google-logo";
import LanguageBar from "@/components/home/language-bar";
import SearchBox from "@/components/home/search-box";
import TopHeader from "@/components/home/top-header";

export default function Page() {
	return (
		<div className="flex h-screen flex-col items-center justify-start bg-[#202125]">
			<TopHeader />
			<GoogleLogo />
			<SearchBox />
			<LanguageBar />
			<Footer />
		</div>
	);
}
