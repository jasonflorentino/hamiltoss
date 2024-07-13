import dayjs from 'dayjs';
import { replace } from 'lodash-es';
import type { DayName, SpecialPickupDetail } from './types';
import { Utils } from '$lib';

function toDays(ms: number) {
	return ms / 1000 / 60 / 60 / 24;
}

/**
 * only does days for now
 */
export function toRelativeDateString(durationMs: number) {
	const time = Math.floor(toDays(durationMs));
	return `${time} day${time === 1 ? '' : 's'} ago`;
}

export function toPickupNoticeText(
	affectedPeriod: SpecialPickupDetail['affectedPeriod'],
	date: SpecialPickupDetail['date']
) {
	if (Array.isArray(affectedPeriod)) {
		return `${Utils.toListOfDays(affectedPeriod)} pickups will happen one day later this week.`;
	} else if (affectedPeriod === 'week') {
		return 'Pickup is one day later this week.';
	} else if (affectedPeriod === 'none') {
		return 'No change to the regular schedule.';
	} else if (affectedPeriod === 'day') {
		return 'For this day only pickup will be on the following day instead.';
	} else if (affectedPeriod === 'yard') {
		return `Leaf and yard waste pickup ${
			dayjs(date).isBefore(dayjs().month(6)) ? 'resumes' : 'ends'
		}.`;
	}
}

export function toListOfDays(days: DayName[]): string {
	const DAYS = {
		sun: 'Sunday',
		mon: 'Monday',
		tue: 'Tuesday',
		wed: 'Wednesday',
		thu: 'Thursday',
		fri: 'Friday',
		sat: 'Saturday',
	};
	const out = days.map((day) => DAYS[day]);
	if (out.length === 1) {
		return out.join('');
	} else if (out.length === 2) {
		return out.join(' and ');
	} else {
		const outStr = out.reduce((o, d, i, a) => {
			if (i + 1 === a.length) {
				//last one
				return `${o} and ${d}`;
			} else {
				return `${o} ${d},`;
			}
		}, '');
		return outStr.trim();
	}
}

export function sanitize(s: string) {
	return replace(s, /[<>]/g, '');
}

/**
 * Return the details of a special pickup event
 * if it occurs soon, today, or recently.
 *
 * Note this returns the first special date.
 * If two happen close together, we'll only display
 * the first match.
 */
export function getSpecialPickupDetail(specialPickups: SpecialPickupDetail[]) {
	const now = dayjs();
	// Reversing the array lets newer events take precedence
	// one day sooner when the events are close together
	// (like xmas and new years)
	for (const pickupDetail of specialPickups.slice().reverse()) {
		const diffDays = dayjs(pickupDetail.date).diff(now, 'days');
		// dont show this pickup if its more than 4 days ago
		if (diffDays < -5) continue;
		// dont show this pickup if its more than 2 days away
		if (diffDays > 2) continue;
		// this special pickup is coming in the next 2 days
		// or is within the last 4 days
		if (pickupDetail.affectedPeriod === 'day') {
			// This pickup is only affects one day, only show it
			// if it is upcoming, otherwise continue searching
			if (diffDays >= -1) return pickupDetail;
			else continue;
		}
		// return first matched pickup
		return pickupDetail;
	}
	return null;
}
