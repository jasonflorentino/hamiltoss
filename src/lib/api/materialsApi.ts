// Imports

import type { Fetch } from '$lib/types'

import { API } from '$lib';

// Constants

const NATIVE_FETCH = fetch;

// Types

export type LinkType =
	| 'remote' // subpath to be prefixed by the CITY endpoint (swap .path with .json)
	| 'external'; // full url to an extenal site

type MaterialDetailsImage = {
	path: string;
	thumb: string;
	credits: string;
};

type RelatedMaterial = {
	mat_id: number;
	mat_nm: string;
};

type MaterialDetailsLink = {
	drawer_title: string;
	sphere?: string;
	type: string;
	href?: string; // api link? eg. drop-depot-list.page?matId=572 NOTE: '.page'
	hrefPart: string;
};

export type MaterialDetails = {
	id: number;
	coll_id: number;
	name: string;
	hasEvents: boolean;
	hasDepots: boolean;
	density: string;
	disposal_header: string;
	disposal_body: string; // HTML string, usually <p> tag
	images: MaterialDetailsImage[];
	related_materials: RelatedMaterial[];
	collId: number;
	coll_symbol_shape: string;
	coll_symbol_colour: string; // hex number, no hash
	what_happens_next: null | string; // HTML string, usually <p> tag
	links: MaterialDetailsLink[]; // User configured?
};

// Lib

export const IMG_ROOT = 'https://cdn.recyclecoach.com/gallery/';

/**
 * Use this global object as an in memory cache
 * for the disposal_headers. We'll use it to augment
 * search results without making multiple subsequent
 * requests to their api.
 */
export const DisposalCache = new Map<string, string>();

export async function fetchMaterialDetails({
	fetch = NATIVE_FETCH,
	id,
}: {
	fetch?: Fetch
	id: number;
}) {
	const res = await fetch(`${API.CITY_ROOT}/material/${id}.json`);
	const payload = await res.json();
	let details: MaterialDetails | null = null;
	if (payload?.content?.response?.materialDetails) {
		details = payload.content.response.materialDetails as MaterialDetails;
	}
	return details;
}
