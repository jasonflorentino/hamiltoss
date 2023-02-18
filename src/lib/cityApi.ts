// Types

export type DepotDetail = {
	drop_depot_id: number;
	depot_nm: string;
	display_addr: string;
	geo_lat: number;
	geo_lng: number;
};

export type DepotResponse = {
	header: {
		success: boolean;
	};
	content: {
		response: {
			context: {
				mat_id: number;
				mat_nm: string;
				distanceOrigin: string; // eg. "locality"
			};
			results: DepotDetail[];
		};
	};
};

// Lib 

export const CITY_ROOT = `https://api.recyclecoach.com/ws-p520-dHAM/`;
