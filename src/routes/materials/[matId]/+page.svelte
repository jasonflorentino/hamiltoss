<script lang="ts">
	import type { PageData } from './$types';
	import { compact, head, map, replace, split } from 'lodash-es';
	import { IMG_ROOT } from '$lib/materialsApi';
	import { MainHeading, DisposalHeader } from '$lib/components';
	import { Constants } from '$lib';

	export let data: PageData;
	$: bodyText = compact(
		map(split(data.disposal_body, /<\/?p>/), (line: string) => replace(line, /<[^<]+>/g, ''))
	);
	$: imageData = head(data.images);

	let title = Constants.TITLE + ` | ${data.name}`;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="mb-10 p-5">
	<MainHeading>{data.name}</MainHeading>

	{#if imageData}
		<img
			src={IMG_ROOT + imageData.path}
			alt={`${data.name} Credit: ${imageData.credits}`}
			class="mb-5"
		/>
	{/if}

	<section class="max-w-2xl">
		<h2 class="mb-3 rounded-md md:rounded-lg lg:rounded-xl">
			<DisposalHeader
				text={data.disposal_header}
				class="py-1 px-3 text-xl font-bold md:py-2 md:px-3 lg:py-2 lg:px-4"
			/>
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
						class="text-lg underline decoration-emerald-300 underline-offset-4">{mat.mat_nm}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</main>
