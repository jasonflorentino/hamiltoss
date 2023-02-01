import type { PageServerLoad } from './$types';
import type { MaterialDetails } from '$lib/materialsApi';
import { DisposalCache } from '$lib/materialsApi';
import { CITY_ROOT } from '$lib/cityApi';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const res = await fetch(`${CITY_ROOT}/material/${params.matId}.json`);
	const payload = await res.json();

	if (payload?.content?.response?.materialDetails) {
		const { materialDetails } = payload.content.response;
		DisposalCache.set(params.matId, materialDetails.disposal_header);
		return materialDetails as MaterialDetails;
	}

	throw error(404, 'Not found');
};
