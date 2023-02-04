export const searchRoute = `https://api.recyclecoach.com/8/material-list.json?q=`;

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
