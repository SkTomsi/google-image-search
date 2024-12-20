"use server";

export async function searchImages(imageUrl: string | null) {
	if (!imageUrl) {
		return;
	}

	const api_key = process.env.SERP_API_KEY;

	if (!api_key) {
		return;
	}

	try {
		const response = await fetch(
			`https://serpapi.com/search.json?engine=google_lens&url=${imageUrl}&api_key=${api_key}`,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			},
		);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
}
