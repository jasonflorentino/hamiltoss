export type DayName = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';

export type SpecialPickupDetail = {
	date: string;
	name: string;
	affectedPeriod: 'day' | 'week' | 'none' | 'yard' | DayName[];
};

export type Fetch = (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>;
