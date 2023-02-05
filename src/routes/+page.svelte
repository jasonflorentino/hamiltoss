<script lang="ts">
	import { replace } from 'lodash-es';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { DisposalHeader } from '$lib/components';

	export let data: PageData;

	// Use this for controlled input
	// initialize with query from URL
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
					// User has cleared the input
					window.location.assign('/');
				}
			}
			loading = false;
		}, delayMs);
	};
</script>

<main class="mb-10 p-5">
	<h1 class="mb-5 text-6xl font-black md:text-7xl lg:text-8xl">
		🗑 <span class="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent"
			>Hamiltoss</span
		>
	</h1>
	<p class="text-lg font-medium text-cyan-400 md:text-xl lg:text-2xl">
		Find out if something is compostable, recyclable, or bin-able in Hamilton.
	</p>

	<!-- Search Input -->
	<form class="my-6">
		<label for="search-query" class="mb-2 block text-sm md:text-base lg:text-lg">
			What do you want to toss?
		</label>
		<input
			type="text"
			id="search-query"
			value={query}
			on:input={updateDisplay}
			on:input={debouncedSearch}
			class="w-full max-w-lg rounded-md border border-solid border-emerald-100 bg-gray-800 px-3 py-2 text-lg"
		/>
	</form>

	<!-- Results List -->
	{#if query}
		<p class="font-regular mb-3 text-sm text-gray-300">
			{#if !loading && data.results && data.results.length}
				<span>{data.results.length} result{data.results.length === 1 ? '' : 's'} for: </span>
			{:else}
				<span>Searching for:</span>
			{/if}
			<span class="font-bold text-cyan-400">{query}</span>
		</p>
		{#if loading}
			<p>Loading...</p>
		{:else if data.results && data.results.length}
			<ul class="divide-y divide-emerald-400">
				{#each data.results as result}
					<li class="py-3">
						<a href="/materials/{result.id}" class="text-xl text-cyan-400">
							<p>
								{result.name}
								<span class="text-base text-gray-400">
									{result.synonym ? `(${result.synonym})` : ''}
								</span>
								{#if result.disposal_header}
									<DisposalHeader class="ml-1">
										{result.disposal_header}
									</DisposalHeader>
								{/if}
							</p>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p>No results</p>
		{/if}
	{/if}
</main>
