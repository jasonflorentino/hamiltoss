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
				window.location.assign(`?query=${encodeURIComponent(sanitize(target.value))}`);
			}
			loading = false;
		}, delayMs);
	};
</script>

<h1>Where does this go?</h1>
<p>Find out if something is recyclable in Hamilton</p>

<form>
	<input type="text" value={query} on:input={updateDisplay} on:input={debouncedSearch} />
	<button>Search</button>
</form>

{#if query}
	<p>Searching for: {query}</p>
	{#if loading}
		<p>Loading...</p>
	{:else if data.results && data.results.length}
		<ul>
			{#each data.results as result}
				<li>
					<a href="/materials/{result.id}">
						<p>{result.name} {result.synonym ? `(${result.synonym})` : ''}</p>
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No results</p>
	{/if}
{/if}
