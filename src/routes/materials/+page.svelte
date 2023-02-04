<script lang="ts">
	import type { PageData } from './$types';
	import { sortBy } from 'lodash-es';
	import { TITLE, toRelativeDateString } from '$lib';
	export let data: PageData;

	let title = TITLE + ' | All Materials';
	let lastFetchedDate = '2023-01-16';
	let relativeLastFetched = toRelativeDateString(Date.now() - new Date(lastFetchedDate).getTime());
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="p-5">
	<h1 class="text-4xl font-bold text-emerald-300 md:text-5xl lg:text-6xl">
		All Materials<span class="align-top  text-xs font-medium text-cyan-300 md:text-sm">
			{data.items.length}
		</span>
	</h1>
	<p class="mt-1 text-sm font-medium">
		This list was last pulled {relativeLastFetched} ({lastFetchedDate})
	</p>

	<ul class="mt-5 divide-y divide-emerald-400">
		{#each sortBy(data.items, ['mat_nm']) as item}
			<li class="py-3">
				<a href="/materials/{item.mat_id}" class="text-lg">{item.mat_nm}</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	:global(body) {
		@apply mx-auto max-w-7xl bg-gray-900 text-slate-200 selection:bg-emerald-200 selection:text-cyan-700;
	}
</style>
