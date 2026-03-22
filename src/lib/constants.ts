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
 * affectedPeriod:
 * 'day' means only one day is affected.
 * 'week' means pickups for the whole week are affected.
 * 'none' menas there is no change to pickups.
 * 'yard' refers to a yard waste pickup change.
 * If a list of day names is given they will be called out as specifically
 * affected on the banner.
 */
export const PICKUP_CHANGES: SpecialPickupDetail[] = [
	{
		name: 'Good Friday',
		date: '2026-04-03',
		affectedPeriod: 'day',
	},
	{
		name: 'Easter Monday',
		date: '2026-04-06',
		affectedPeriod: 'none',
	},
	{
		name: 'Victoria Day',
		date: '2026-05-18',
		affectedPeriod: 'week',
	},
	{
		name: 'Canada Day',
		date: '2026-07-01',
		affectedPeriod: ['wed', 'thu', 'fri'],
	},
	{
		name: 'Civic Holiday',
		date: '2026-08-03',
		affectedPeriod: 'week',
	},
	{
		name: 'Labour Day',
		date: '2026-09-07',
		affectedPeriod: 'week',
	},
	{
		name: 'Thanksgiving',
		date: '2026-10-12',
		affectedPeriod: 'week',
	},
	{
		name: 'Yard Waste',
		date: '2026-12-07',
		affectedPeriod: 'yard',
	},
	{
		name: 'Christmas Day',
		date: '2026-12-25',
		affectedPeriod: 'day',
	},
	{
		name: 'New Years Day',
		date: '2027-01-01',
		affectedPeriod: 'day',
	},
	{
		name: 'Family Day',
		date: '2027-02-15',
		affectedPeriod: 'week',
	},
	{
		name: 'Yard Waste',
		date: '2027-03-08',
		affectedPeriod: 'yard',
	},
	{
		name: 'Good Friday',
		date: '2027-03-26',
		affectedPeriod: 'day',
	},
];
