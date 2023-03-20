<script lang="ts">
	/**
	 * Renders the home page route.
	 */
	import type { PageData } from './$types';

	import { sample, lowerCase, filter } from 'lodash-es';
	import { Constants, Utils } from '$lib';
	import { DisposalHeader, RecentSearches } from '$lib/components';
	import { localstorage } from '$lib/stores/localstorage';
	import { page } from '$app/stores';

	export let data: PageData;

	const MAX = 4;
	const KEY = 'recentSearches';

	$: query = $page.url.searchParams.get('query');
	$: inputValue = query || '';

	$: recentSearches = JSON.parse($localstorage?.getItem(KEY) || '[]').slice(0, MAX);

	// Handle updating recent searches in localstorage
	$: {
		if (query) {
			recentSearches = [
				query,
				...filter(recentSearches, (word: string) => lowerCase(word) !== lowerCase(query || '')),
			];
			$localstorage?.setItem(KEY, JSON.stringify(recentSearches));
		}
	}

	function handleInput(e: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		if (e.target !== null) {
			const target = e.target as HTMLInputElement;
			inputValue = Utils.sanitize(target.value);
		}
	}
</script>

<svelte:head>
	<title>{Constants.TITLE}</title>
</svelte:head>

<main class="mb-10 p-5 lg:p-10">
	<!-- Hero Content -->
	<div class="md:my-10">
		<h1 class="mb-5 text-6xl font-black md:text-center md:text-7xl lg:text-8xl">
			🗑 <span class="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent"
				>Hamiltoss</span
			>
		</h1>
		<p class="text-lg font-medium text-cyan-400 md:text-center md:text-xl lg:text-2xl">
			Find out if something is compostable, recyclable, or bin-able in Hamilton.
		</p>
	</div>

	<div class="md:mx-auto md:mb-10 md:max-w-xl">
		<form method="GET" action="/" data-sveltekit-noscroll class="mt-6">
			<label for="query" class="mb-2 block text-sm md:text-base lg:text-lg">
				What do you want to toss?
			</label>
			<!-- Recent Searches mobile -->
			<div class="mb-1 md:hidden">
				<RecentSearches {recentSearches} />
			</div>
			<!-- Search Input -->
			<div class="md:flex">
				<input
					type="text"
					id="query"
					name="query"
					value={inputValue}
					on:input|preventDefault={handleInput}
					placeholder={sample(Constants.SEARCH_SUGGESTIONS)}
					class="blur:border-emerald-300 w-full rounded-md border-2 border-solid border-emerald-800 bg-gray-800 px-3 py-2 text-lg hover:border-emerald-700 focus:outline-emerald-500 md:max-w-lg"
				/>
				<button
					disabled={!inputValue}
					class="mt-3 w-full rounded-md bg-emerald-300 px-3 py-2 text-lg font-bold text-emerald-800 hover:bg-emerald-200 disabled:bg-gray-700 disabled:text-gray-500 md:mt-0 md:ml-3 md:w-[200px]"
				>
					Search
				</button>
			</div>
		</form>

		<!-- Recent Searches tablet/desktop -->
		<div class="mt-3 hidden md:block">
			<RecentSearches {recentSearches} />
		</div>
	</div>

	<!-- Search Results -->
	{#if query}
		<div class="mt-6">
			<!-- Search metadata -->
			<p class="font-regular mb-3 text-sm text-gray-300">
				{#if data.results && data.results.length}
					<span>{data.results.length} result{data.results.length === 1 ? '' : 's'} for: </span>
				{:else}
					<span>Searching for:</span>
				{/if}
				<span class="font-bold text-cyan-400">{query}</span>
			</p>
			<!-- List of results -->
			{#if data.results && data.results.length}
				<ul class="divide-y divide-emerald-400">
					{#each data.results as result}
						<li class="py-3">
							<a href="/materials/{result.id}" class="text-xl text-cyan-400 hover:text-cyan-300">
								<p>
									{result.name}
									<span class="text-base text-gray-400">
										{result.synonym ? `(${result.synonym})` : ''}
									</span>
									{#if result.disposal_header}
										<DisposalHeader text={result.disposal_header} class="ml-1" />
									{/if}
								</p>
							</a>
						</li>
					{/each}
				</ul>
			{:else}
				<p>No results</p>
			{/if}
		</div>
	{/if}
</main>
