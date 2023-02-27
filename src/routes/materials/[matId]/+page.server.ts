import type { PageServerLoad } from './$types';
import { API } from '$lib';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const materialDetails = await API.fetchMaterialDetails({
		fetch,
		id: Number(params.matId),
	});

	if (materialDetails) {
		// Since we're getting the details anyway, cache the
		// disposal_header so that we can use it to augment
		// future search results.
		API.DisposalCache.set(params.matId, materialDetails.disposal_header);
		return materialDetails;
	}

	throw error(404, 'Not found');
};
