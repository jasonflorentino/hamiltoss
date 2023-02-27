// Imports

import type { Fetch } from '$lib/types';

// Constants

const NATIVE_FETCH = fetch;

// Types

export type SearchResultType = {
	id: number;
	name: string;
	synonym?: string;
	score: number;
};

export type SearchResponse = {
	header: {
		success: boolean;
	};
	content: {
		drawCount: null | unknown; // possibly a number?
		results: SearchResultType[];
		response_key: string; // pretty sure it's a UUID
	};
};

export type DecoratedSearchResultType = SearchResultType & {
	disposal_header: string | null;
};

// Lib

export const searchRoute = `https://api.recyclecoach.com/8/material-list.json?q=`;

export async function fetchSearchResults({
	fetch = NATIVE_FETCH,
	query,
}: {
	fetch?: Fetch;
	query: string;
}) {
	const res = await fetch(searchRoute + encodeURIComponent(query));
	const payload: SearchResponse = await res.json();
	let results: SearchResultType[] = [];
	if (payload?.content?.results) {
		results = payload.content.results;
	}
	return results;
}
