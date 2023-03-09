import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createLocalStorageStore() {
	const { subscribe, set } = writable<null | typeof localStorage>(null);

	if (browser) {
		set(localStorage);
	}

	return {
		subscribe,
		load: () => set(browser ? localStorage : null),
	};
}

export const localstorage = createLocalStorageStore();
