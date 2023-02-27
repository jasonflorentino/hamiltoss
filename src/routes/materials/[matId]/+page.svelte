<script lang="ts">
	/**
	 * Display info for a particular material
	 */
	import type { PageData } from './$types';
	import { compact, head, map, replace, split } from 'lodash-es';
	import { API } from '$lib';
	import { MainHeading, DisposalHeader } from '$lib/components';
	import { Constants } from '$lib';

	export let data: PageData;
	/**
	 * Body text comes as HTML from their API,
	 * but lets format this ourselves. Also, I'd
	 * prefer to not blindly put external HTML
	 * in the document.
	 *
	 * Split lines based on <p> tags and remove
	 * any tags left inside:
	 */
	$: bodyText = compact(
		map(split(data.disposal_body, /<\/?p>/), (line: string) => replace(line, /<[^<]+>/g, ''))
	);
	/**
	 * Images comes as an array. Usually there's only one
	 * element, and even if not, the one we need is the first.
	 */
	$: imageData = head(data.images);

	let title = Constants.TITLE + ` | ${data.name}`;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="mb-10 p-5">
	<MainHeading>{data.name}</MainHeading>

	<div class="lg:flex lg:pt-4">
		{#if imageData}
			<div class="mb-5 ">
				<img
					src={API.IMG_ROOT + imageData.path}
					alt={`${data.name} Credit: ${imageData.credits}`}
					class="rounded-xl border-4 border-emerald-300 bg-gray-100"
				/>
				<span class="text-xs text-gray-400">Image: {imageData.credits}</span>
			</div>
		{/if}

		<div class="lg:ml-8 lg:pt-2">
			<section class="max-w-2xl">
				<h2 class="mb-3 rounded-md md:rounded-lg lg:rounded-xl">
					<DisposalHeader
						text={data.disposal_header}
						class="py-1 px-3 text-xl font-bold md:py-2 md:px-3 lg:py-2 lg:px-4"
					/>
				</h2>

				{#each bodyText as line}
					<p class="mb-3 text-lg font-medium text-gray-100">{line}</p>
				{/each}
			</section>

			<!-- Related Materials -->
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
		</div>
	</div>
</main>
