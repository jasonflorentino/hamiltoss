import type { SpecialPickupDetail } from './types';

export const TITLE = 'Hamiltoss';

export const SEARCH_SUGGESTIONS = [
	'Balloons',
	'Batteries',
	'Candles',
	'Cardboard Boxes',
	'Coffee Cups',
	'Crayons',
	'Face Masks',
	'Foam',
	'Glass',
	'Glow Sticks',
	'Ice Packs',
	'Kitty Litter',
	'License Plats',
	'Light Bulbs',
	'Mail',
	'Milk Cartons',
	'Paint',
	'Paper Towel',
	'Pizza Boxes',
	'Plants',
	'Styrofoam',
	'Take-out Containers',
	'Wood',
];

/**
 * NOTE current implementation can only handle
 * showing one notice banner at a time! --
 * First match wins
 */
export const PICKUP_CHANGES: SpecialPickupDetail[] = [
	{
		name: 'Family Day',
		date: '2023-02-20',
		affectedPeriod: 'week',
	},
	{
		name: 'Yard Waste',
		date: '2023-03-06',
		affectedPeriod: 'yard',
	},
	{
		name: 'Good Friday',
		date: '2023-04-07',
		affectedPeriod: 'day',
	},
	{
		name: 'Victoria Day',
		date: '2023-05-22',
		affectedPeriod: 'week',
	},
	{
		name: 'Canada Day',
		date: '2023-07-01',
		affectedPeriod: 'day',
	},
	{
		name: 'Civic Holiday',
		date: '2023-08-07',
		affectedPeriod: 'week',
	},
	{
		name: 'Labour Day',
		date: '2023-09-04',
		affectedPeriod: 'week',
	},
	{
		name: 'Thanksgiving',
		date: '2023-10-09',
		affectedPeriod: 'week',
	},
	{
		name: 'Boxing Day',
		date: '2023-12-26',
		affectedPeriod: 'none',
	},
];
