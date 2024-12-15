import keywords from "@/lib/keywords";
import { useMemo } from "react";
import { useDebounce } from "./use-debounce";

export default function useSearchService({ query }: { query: string }) {
	const searchTerm = useDebounce(query, 300);

	const suggestions = useMemo(() => {
		if (!searchTerm) {
			return [];
		}

		return keywords
			.filter((keyword) =>
				keyword.toLowerCase().includes(searchTerm.toLowerCase()),
			)
			.slice(0, 9);
	}, [searchTerm]);

	return { suggestions };
}
