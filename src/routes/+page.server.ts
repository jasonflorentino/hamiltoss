import type { PageServerLoad } from './$types';
import type { SearchResultType, DecoratedSearchResultType } from '$lib/api/searchApi';

import { error } from '@sveltejs/kit';
import { map } from 'lodash-es';

import { API } from '$lib';

/**
 * Load the home page.
 * If we've been provided a search query in the URL params,
 * handle fetching search results and subsequently adding
 * info about sorting those items.
 */
export const load: PageServerLoad = async ({ fetch, url }) => {
	const query = url.searchParams.get('query') || '';
	let results: DecoratedSearchResultType[] | SearchResultType[] = [];

	if (query) {
		try {
			results = await API.fetchSearchResults({ fetch, query });
			if (results.length) {
				// Decorate results with their `disposal_header`:
				// First check if we have the disposal_header already cached in memory.
				// If not, request ONE of them to add on, and store it in cache.
				// This lets us be nice and avoid making a spike of requests their api
				// in the case we have a long list of search results.
				// Make sure to get/set the IDs as strings in the cache Map!
				// (We'll also be populating this as clients hit the material pages)
				let fetchedDisposalHeaders = 0;
				results = (await Promise.all(
					map(results, async (result: SearchResultType) => {
						let disposal_header = null;
						if (API.DisposalCache.has(String(result.id))) {
							disposal_header = API.DisposalCache.get(String(result.id));
						} else {
							if (fetchedDisposalHeaders < 1) {
								++fetchedDisposalHeaders;
								const details = await API.fetchMaterialDetails({ fetch, id: result.id });
								if (details !== null) {
									API.DisposalCache.set(String(result.id), details.disposal_header);
									disposal_header = details.disposal_header;
								}
							}
						}
						return {
							...result,
							disposal_header,
						};
					})
				)) as DecoratedSearchResultType[];
			}
		} catch (e) {
			throw error(
				500,
				`Couldn't get this info: ${e instanceof Error ? e.message : 'Unknown error'}`
			);
		}
	}

	return {
		results,
	};
};
