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
		date: '2025-04-18',
		affectedPeriod: 'day',
	},
	{
		name: 'Easter Monday',
		date: '2025-04-21',
		affectedPeriod: 'none',
	},
	{
		name: 'Victoria Day',
		date: '2025-05-19',
		affectedPeriod: 'week',
	},
	{
		name: 'Canada Day',
		date: '2025-07-01',
		affectedPeriod: ['tue', 'wed', 'thu', 'fri'],
	},
	{
		name: 'Civic Holiday',
		date: '2025-08-04',
		affectedPeriod: 'week',
	},
	{
		name: 'Labour Day',
		date: '2025-09-01',
		affectedPeriod: 'week',
	},
	{
		name: 'Thanksgiving',
		date: '2025-10-13',
		affectedPeriod: 'week',
	},
	{
		name: 'Yard Waste',
		date: '2025-12-01',
		affectedPeriod: 'yard',
	},
	{
		name: 'Christmas & Boxing Day',
		date: '2025-12-25',
		affectedPeriod: ['thu', 'fri'],
	},
	{
		name: 'New Years Day',
		date: '2026-01-01',
		affectedPeriod: ['thu', 'fri'],
	},
	{
		name: 'Family Day',
		date: '2026-02-16',
		affectedPeriod: 'week',
	},
	{
		name: 'Yard Waste',
		date: '2026-03-02',
		affectedPeriod: 'yard',
	},
];
