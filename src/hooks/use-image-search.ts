"use client";

import { useState } from "react";

export function useImageSearch() {
	const [isLoading, setIsLoading] = useState(false);

	const searchResults = async () => {
		setIsLoading(true);

		try {
			await new Promise((resolve) => {
				setTimeout(() => {
					resolve(true);
				}, 3000);
			});
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return { searchResults, isLoading };
}
