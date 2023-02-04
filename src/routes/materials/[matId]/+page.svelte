<script lang="ts">
	import type { PageData } from './$types';
	import { compact, head, map, replace, split } from 'lodash-es';
	import { IMG_ROOT } from '$lib/materialsApi';
	import { TITLE } from '$lib/constants';

	export let data: PageData;
	$: bodyText = compact(
		map(split(data.disposal_body, /<\/?p>/), (line: string) => replace(line, /<[^<]+>/g, ''))
	);
	$: imageData = head(data.images);

	let title = TITLE + ` | ${data.name}`
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="p-5 mb-10">
	<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-300 mb-4">{data.name}</h1>

	{#if imageData}
		<img src={IMG_ROOT + imageData.path} alt={`${data.name} Credit: ${imageData.credits}`} class='mb-5'/>
	{/if}

	<section class="max-w-2xl">
		<h2 class="bg-cyan-400 rounded-md lg:rounded-lg py-1 lg:py-2 px-3 lg:px-4 font-bold text-xl text-gray-800 w-fit mb-3">
			{data.disposal_header}
		</h2>

		{#each bodyText as line}
			<p class="text-lg font-medium">{line}</p>
		{/each}
	</section>

	{#if data.related_materials.length}
		<h2 class="mt-10 mb-2 text-xs font-bold uppercase text-emerald-200">Related Materials</h2>
		<ul>
			{#each data.related_materials as mat}
				<li>
					<a
						href="/materials/{mat.mat_id}"
						class="text-lg underline underline-offset-4 decoration-emerald-300">{mat.mat_nm}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</main>

<style>
	:global(body) {
		@apply bg-gray-900 text-slate-200 mx-auto max-w-7xl selection:bg-emerald-200 selection:text-cyan-700;
	}
</style>
