export type SpecialPickupDetail = {
	date: string;
	name: string;
	affectedPeriod: 'day' | 'week' | 'none' | 'yard';
};

export type Fetch = (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>;