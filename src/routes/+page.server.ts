import type { PageServerLoad } from './$types';
import type { MaterialDetails } from '$lib/materialsApi';
import type { SearchResponse, SearchResultType, DecoratedSearchResultType } from '$lib/searchApi';

import { error } from '@sveltejs/kit';
import { map } from 'lodash-es';
import { searchRoute } from '$lib/searchApi';
import { DisposalCache } from '$lib/materialsApi';
import { CITY_ROOT } from '$lib/cityApi';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const query = url.searchParams.get('query') || '';
	let results: DecoratedSearchResultType[] = [];

	if (query) {
		try {
			const res = await fetch(searchRoute + encodeURIComponent(query));
			const payload: SearchResponse = await res.json();
			let hasFetchOne = false;
			if (payload?.content?.results) {
				results = [
					...(await Promise.all(
						map(payload.content.results, async (result: SearchResultType) => {
							let disposal_header = null;
							if (DisposalCache.get(String(result.id))) {
								disposal_header = DisposalCache.get(String(result.id));
							} else {
								if (!hasFetchOne) {
									hasFetchOne = true;
									const res = await fetch(`${CITY_ROOT}/material/${result.id}.json`);
									const payload = await res.json();
									if (payload?.content?.response?.materialDetails) {
										const detail = payload.content.response.materialDetails as MaterialDetails;
										DisposalCache.set(String(result.id), detail.disposal_header);
										disposal_header = detail.disposal_header;
									}
								}
							}
							return {
								...result,
								disposal_header
							};
						})
					))
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
		results,
		DisposalCache
	};
};
