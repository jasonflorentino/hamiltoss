import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { searchRoute } from '$lib/searchApi';
import type { SearchResponse, SearchResultType } from '$lib/searchApi';

export const load: PageLoad = async ({ fetch, url }) => {
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
			throw error(500, `Couldn't get this info: ${e instanceof Error ? e.message : 'Unknown error'}`);
		}
	}

	return {
		results
	};
};