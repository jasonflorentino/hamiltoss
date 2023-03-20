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
		date: '2023-04-07',
		affectedPeriod: 'day',
	},
	{
		name: 'Easter Monday',
		date: '2023-04-10',
		affectedPeriod: 'none',
	},
	{
		name: 'Victoria Day',
		date: '2023-05-22',
		affectedPeriod: 'week',
	},
	{
		name: 'Canada Day',
		date: '2023-07-01',
		affectedPeriod: 'none',
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
		name: 'Yard Waste',
		date: '2023-12-08',
		affectedPeriod: 'yard',
	},
	{
		name: 'Christmas & Boxing Day',
		date: '2023-12-25',
		affectedPeriod: 'week',
	},
	{
		name: 'New Years Day',
		date: '2024-01-01',
		affectedPeriod: 'week',
	},
	{
		name: 'Family Day',
		date: '2024-02-19',
		affectedPeriod: 'week',
	},
	{
		name: 'Yard Waste',
		date: '2024-03-04',
		affectedPeriod: 'yard',
	},
	{
		name: 'Good Friday',
		date: '2024-03-29',
		affectedPeriod: 'day',
	},
];
