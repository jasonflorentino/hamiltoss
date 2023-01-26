<script lang="ts">
	import type { PageData } from './$types';
	import { compact, head, map, replace, split } from 'lodash-es';
	import { IMG_ROOT } from '$lib/materialsApi';

	export let data: PageData;
	$: bodyText = compact(
		map(split(data.disposal_body, /<\/?p>/), (line: string) => replace(line, /<[^<]+>/g, ''))
	);
	$: imageData = head(data.images);
</script>

<main class="p-5">
	<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-300">{data.name}</h1>

	{#if imageData}
		<img src={IMG_ROOT + imageData.path} alt={`${data.name} Credit: ${imageData.credits}`} />
	{/if}

	<section class="max-w-2xl">
		<h2 class="bg-cyan-400 rounded py-1 px-3 font-bold text-xl text-gray-800 w-fit mb-3">
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
