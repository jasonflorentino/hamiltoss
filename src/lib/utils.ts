import dayjs from 'dayjs';
import { replace } from 'lodash-es';
import type { SpecialPickupDetail } from './types';

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
	for (const pickupDetail of specialPickups) {
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
