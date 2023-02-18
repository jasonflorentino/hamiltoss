import { replace } from 'lodash-es';

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

export 	function sanitize(s: string) {
	return replace(s, /[<>]/g, '');
}