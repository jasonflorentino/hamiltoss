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
	'License Plates',
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
 *
 * 'day' means only one day is affected.
 * 'week' means pickups for the whole week are affected.
 * 'none' menas there is no change to pickups.
 * 'yard' refers to a yard waste pickup change.
 */
export const PICKUP_CHANGES: SpecialPickupDetail[] = [
	{
		name: 'Good Friday',
		date: '2024-03-29',
		affectedPeriod: 'day',
	},
	{
		name: 'Easter Monday',
		date: '2024-04-01',
		affectedPeriod: 'none',
	},
	{
		name: 'Victoria Day',
		date: '2024-05-20',
		affectedPeriod: 'week',
	},
	{
		name: 'Canada Day',
		date: '2024-07-01',
		affectedPeriod: 'week',
	},
	{
		name: 'Civic Holiday',
		date: '2024-08-05',
		affectedPeriod: 'week',
	},
	{
		name: 'Labour Day',
		date: '2024-09-02',
		affectedPeriod: 'week',
	},
	{
		name: 'Thanksgiving',
		date: '2024-10-14',
		affectedPeriod: 'week',
	},
	{
		name: 'Yard Waste',
		date: '2024-12-06',
		affectedPeriod: 'yard',
	},
	{
		name: 'Christmas & Boxing Day',
		date: '2024-12-25',
		// TODO: one day later if normally wed,thu,fri
		affectedPeriod: 'week',
	},
	{
		name: 'New Years Day',
		date: '2025-01-01',
		// TODO: one day later if normally wed,thu,fri
		affectedPeriod: 'week',
	},
	{
		name: 'Family Day',
		date: '2025-02-17',
		affectedPeriod: 'week',
	},
	{
		name: 'Yard Waste',
		date: '2025-03-03',
		affectedPeriod: 'yard',
	},
	{
		name: 'Good Friday',
		date: '2025-04-18',
		affectedPeriod: 'day',
	},
];
