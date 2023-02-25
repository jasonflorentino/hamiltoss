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
 * Note this returns the first special date.
 * If two happen close together, we'll only display 
 * the first match.
 */
export function getSpecialPickupDetail(specialPickups: SpecialPickupDetail[]) {
	const now = dayjs();
	for (const pickupDetail of specialPickups) {
		const diffDays = dayjs(pickupDetail.date).diff(now, 'days');
		if (diffDays <= 2 && diffDays >= -4) {
			// special pickup is coming in the next 2 days 
			// or is within 4 days ago
			if (pickupDetail.affectedPeriod === 'day') {
				// Only show notice if special pickup is coming.
				// Stop showing as soon as the special day as past.
				if (diffDays >= -1) {
					return pickupDetail
				} else {
					return null
				};
			}
			return pickupDetail;
		}
	}
	return null;
}
