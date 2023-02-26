<script lang="ts">
	import type { PageData } from './$types';
	import { sortBy } from 'lodash-es';
	import { Constants, Utils } from '$lib';
	import { MainHeading } from '$lib/components';
	export let data: PageData;

	let title = Constants.TITLE + ' | All Materials';
	let lastFetchedDate = '2023-01-16';
	let relativeLastFetched = Utils.toRelativeDateString(
		Date.now() - new Date(lastFetchedDate).getTime()
	);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="p-5">
	<MainHeading>
		All Materials<span class="align-top  text-xs font-medium text-cyan-300 md:text-sm">
			{data.items.length}
		</span>
	</MainHeading>

	<p class="mt-1 text-sm font-medium">
		This list was last pulled {relativeLastFetched} ({lastFetchedDate})
	</p>

	<ul class="mt-5 divide-y divide-emerald-400">
		{#each sortBy(data.items, ['mat_nm']) as item}
			<li class="py-3 hover:text-gray-400">
				<a href="/materials/{item.mat_id}" class="text-lg">{item.mat_nm}</a>
			</li>
		{/each}
	</ul>
</main>
