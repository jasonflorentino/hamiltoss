<script lang="ts">
	import type { PageData } from './$types';
	import { sortBy } from 'lodash-es';
	export let data: PageData;

	$: title = document.title + ' | All Materials';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="p-5">
	<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-300">
		All Materials<span class="text-xs  md:text-sm align-top font-medium text-cyan-300">
			{data.items.length}
		</span>
	</h1>
	<p class="mt-1 text-sm font-medium">This list was last pulled on 2022-01-16</p>

	<ul class="mt-5 divide-emerald-400 divide-y">
		{#each sortBy(data.items, ['mat_nm']) as item}
			<li class="py-3">
				<a href="/materials/{item.mat_id}" class="text-lg">{item.mat_nm}</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	:global(body) {
		@apply bg-gray-900 text-slate-200 mx-auto max-w-7xl selection:bg-emerald-200 selection:text-cyan-700;
	}
</style>
