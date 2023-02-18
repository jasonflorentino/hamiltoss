import type { PageServerLoad } from './$types';
import type { SearchResultType, DecoratedSearchResultType } from '$lib/searchApi';

import { error } from '@sveltejs/kit';
import { map } from 'lodash-es';

import { DisposalCache, fetchMaterialDetails } from '$lib/materialsApi';
import { fetchSearchResults } from '$lib/searchApi';

export const load: PageServerLoad = async ({url}) => {
	const query = url.searchParams.get('query') || '';
	let results: DecoratedSearchResultType[] | SearchResultType[] = [];

	if (query) {
		try {
			let hasFetchedOne = false;
			results = await fetchSearchResults(query)
			if (results.length) {
				// Decorate results with their `disposal_header`:
				// First check if we have the disposal_header already cached in memory.
				// If not, request ONE of them to add on, and store it in cache.
				// This lets us be nice and avoid  making a spike of request their api
				// in the case we have a long list of search results.
				// Make sure to get/set the IDs as strings in the cache Map!
				// (We'll also be populating this as clients hit individual pages)
				results = [
					...(await Promise.all(
						map(results, async (result: SearchResultType) => {
							let disposal_header = null;
							if (DisposalCache.get(String(result.id))) {
								disposal_header = DisposalCache.get(String(result.id));
							} else {
								if (!hasFetchedOne) {
									hasFetchedOne = true;
									const details = await fetchMaterialDetails(result.id)
									if (details !== null) {
										DisposalCache.set(String(result.id), details.disposal_header);
										disposal_header = details.disposal_header;
									}
								}
							}
							return {
								...result,
								disposal_header,
							};
						})
					)),
				] as DecoratedSearchResultType[];
			}
		} catch (e) {
			throw error(
				500,
				`Couldn't get this info: ${e instanceof Error ? e.message : 'Unknown error'}`
			);
		}
	} 

	return {
		results
	};
};
