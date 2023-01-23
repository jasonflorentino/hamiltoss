<script lang="ts">
	import { replace } from 'lodash-es';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	let query = $page.url.searchParams.get('query') || '';
	let loading = false;

	const sanitize = (s: string) => replace(s, /[<>]/g, '');

	/**
	 * synchronously updates the input field
	 */
	function updateDisplay(e: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		if (e.target !== null) {
			const target = e.target as HTMLInputElement;
			query = sanitize(target.value);
		}
	}
	/**
	 * Handle doing the search by making a new request
	 * to our app server by updating url query string.
	 * Our server will then handle reaching out to Hamilton's
	 * api for search results.
	 *
	 * Debounce these updates to avoid hitting their api too often.
	 */
	let scheduledCall: ReturnType<typeof setTimeout>;
	const delayMs = 500;
	const debouncedSearch = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		clearTimeout(scheduledCall);
		loading = true;
		scheduledCall = setTimeout(() => {
			if (e.target !== null) {
				const target = e.target as HTMLInputElement;
				if (target.value) {
					window.location.assign(`?query=${encodeURIComponent(sanitize(target.value))}`);
				} else {
					window.location.assign('/');
				}
			}
			loading = false;
		}, delayMs);
	};
</script>

<main class="p-5">
	<h1 class="text-6xl mb-5 font-black text-emerald-400">🗑 Hamiltoss</h1>
	<p class="font-medium text-cyan-400 text-lg">Find out if something is compostable, recyclable, or bin-able in Hamilton.</p>

	<form class="my-6">
		<label for="search-query" class='block mb-2 text-sm'>
			What do you want to toss?
		</label>
		<input
			autofocus
			type="text"
			id="search-query"
			value={query}
			on:input={updateDisplay}
			on:input={debouncedSearch}
			class="bg-gray-800 border border-solid border-emerald-100 max-w-lg px-3 py-2 rounded-md text-lg w-full"
		/>
	</form>

	{#if query}
		<p class="text-gray-300 font-regular mb-3 text-sm">Searching for: <span class="text-cyan-400 font-bold">{query}</span></p>
		{#if loading}
			<p>Loading...</p>
		{:else if data.results && data.results.length}
			<ul class="divide-emerald-400 divide-y">
				{#each data.results as result}
					<li class="py-3">
						<a href="/materials/{result.id}" class="text-xl text-cyan-400">
							<p>{result.name} <span class="text-lg text-gray-400">{result.synonym ? `(${result.synonym})` : ''}</span></p>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p>No results</p>
		{/if}
	{/if}
</main>

<style>
	:global(body) {
		@apply bg-gray-900 text-slate-200;
	}
</style>
