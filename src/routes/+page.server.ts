import type { Actions, PageServerLoad } from './$types';
import type { MaterialDetails } from '$lib/materialsApi';
import type { SearchResponse, SearchResultType, DecoratedSearchResultType } from '$lib/searchApi';

import { error } from '@sveltejs/kit';
import { map } from 'lodash-es';

import { CITY_ROOT } from '$lib/cityApi';
import { DisposalCache } from '$lib/materialsApi';
import { searchRoute } from '$lib/searchApi';

export const load: PageServerLoad = async (event) => {
	console.log('load event', event)
	// const query = url.searchParams.get('query') || '';
	let results: DecoratedSearchResultType[] = [{name: 'load name', id: 0, score: 1, disposal_header: 'dheader'}];

	// if (query) {
	// 	try {
	// 		const res = await fetch(searchRoute + encodeURIComponent(query));
	// 		const payload: SearchResponse = await res.json();
	// 		let hasFetchedOne = false;
	// 		if (payload?.content?.results) {
	// 			// Decorate results with their `disposal_header`:
	// 			// First check if we have the disposal_header already cached in memory.
	// 			// If not, request ONE of them to add on, and store it in cache.
	// 			// This lets us be nice and avoid  making a spike of request their api
	// 			// in the case we have a long list of search results.
	// 			// Make sure to get/set the IDs as strings in the cache Map!
	// 			// (We'll also be populating this as clients hit individual pages)
	// 			results = [
	// 				...(await Promise.all(
	// 					map(payload.content.results, async (result: SearchResultType) => {
	// 						let disposal_header = null;
	// 						if (DisposalCache.get(String(result.id))) {
	// 							disposal_header = DisposalCache.get(String(result.id));
	// 						} else {
	// 							if (!hasFetchedOne) {
	// 								hasFetchedOne = true;
	// 								const res = await fetch(`${CITY_ROOT}/material/${result.id}.json`);
	// 								const payload = await res.json();
	// 								if (payload?.content?.response?.materialDetails) {
	// 									const detail = payload.content.response.materialDetails as MaterialDetails;
	// 									DisposalCache.set(String(result.id), detail.disposal_header);
	// 									disposal_header = detail.disposal_header;
	// 								}
	// 							}
	// 						}
	// 						return {
	// 							...result,
	// 							disposal_header,
	// 						};
	// 					})
	// 				)),
	// 			] as DecoratedSearchResultType[];
	// 		}
	// 	} catch (e) {
	// 		throw error(
	// 			500,
	// 			`Couldn't get this info: ${e instanceof Error ? e.message : 'Unknown error'}`
	// 		);
	// 	}
	// }

	return {
		results,
	};
};

export const actions = {
	search: async ({ request }) => {
		console.log('actions request', request)
		const data = await request.formData();
    const searchQuery = data.get("query") as string;
		let results: DecoratedSearchResultType[] = [{name: 'action name', id: 0, score: 1, disposal_header: 'dheader'}];
		if (searchQuery) {
			try {
				console.log('actions searchQuery', searchQuery)
				// const res = await fetch(searchRoute + encodeURIComponent(searchQuery));
				// const payload: SearchResponse = await res.json();
				// let hasFetchedOne = false;
				// if (payload?.content?.results) {
				// 	// Decorate results with their `disposal_header`:
				// 	// First check if we have the disposal_header already cached in memory.
				// 	// If not, request ONE of them to add on, and store it in cache.
				// 	// This lets us be nice and avoid  making a spike of request their api
				// 	// in the case we have a long list of search results.
				// 	// Make sure to get/set the IDs as strings in the cache Map!
				// 	// (We'll also be populating this as clients hit individual pages)
				// 	results = [
				// 		...(await Promise.all(
				// 			map(payload.content.results, async (result: SearchResultType) => {
				// 				let disposal_header = null;
				// 				if (DisposalCache.get(String(result.id))) {
				// 					disposal_header = DisposalCache.get(String(result.id));
				// 				} else {
				// 					if (!hasFetchedOne) {
				// 						hasFetchedOne = true;
				// 						const res = await fetch(`${CITY_ROOT}/material/${result.id}.json`);
				// 						const payload = await res.json();
				// 						if (payload?.content?.response?.materialDetails) {
				// 							const detail = payload.content.response.materialDetails as MaterialDetails;
				// 							DisposalCache.set(String(result.id), detail.disposal_header);
				// 							disposal_header = detail.disposal_header;
				// 						}
				// 					}
				// 				}
				// 				return {
				// 					...result,
				// 					disposal_header,
				// 				};
				// 			})
				// 		)),
				// 	] as DecoratedSearchResultType[];
				// }
			} catch (e) {
				throw error(
					500,
					`Couldn't get this info: ${e instanceof Error ? e.message : 'Unknown error'}`
				);
			}
		}
		return {
			results
		}
	}
} satisfies Actions;
