import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { searchRoute } from '$lib/searchApi';
import type { SearchResponse, SearchResultType } from '$lib/searchApi';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const query = url.searchParams.get('query') || '';
	let results: SearchResultType[] = [];
  
	if (query) {
		try {
			const res = await fetch(searchRoute + encodeURIComponent(query));
			const payload: SearchResponse = await res.json();
			if (payload?.content?.results) {
				results = payload.content.results;
			}
		} catch (e) {
			throw error(500, `Couldn't get this info: ${e.message}`);
		}
	}

	return {
		results
	};
};
