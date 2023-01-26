import type { PageServerLoad } from './$types';
import type { MaterialDetails } from '$lib/materialsApi';
import { CITY_ROOT } from '$lib/cityApi';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const res = await fetch(`${CITY_ROOT}/material/${params.matId}.json`);
	const payload = await res.json();

	if (payload?.content?.response?.materialDetails) {
		return payload.content.response.materialDetails as MaterialDetails;
	}

	throw error(404, 'Not found');
};
