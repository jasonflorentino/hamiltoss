<script lang="ts">
	import type { PageData } from './$types';
	import { compact, head, split } from 'lodash-es';
	import { IMG_ROOT } from '$lib/materialsApi';

	export let data: PageData;
	$: bodyText = compact(split(data.disposal_body, /<\/?p>/));
	$: imageData = head(data.images);
</script>

<h1>{data.name}</h1>

{#if imageData}
	<img src={IMG_ROOT + imageData.path} alt={`${data.name} Credit: ${imageData.credits}`} />
{/if}

<h2>{data.disposal_header}</h2>

{#each bodyText as line}
	<p>{line}</p>
{/each}

{#if data.related_materials.length}
	<h2>Related Materials</h2>
	<ul>
		{#each data.related_materials as mat}
			<li>
				<a href="/materials/{mat.mat_id}">{mat.mat_nm}</a>
			</li>
		{/each}
	</ul>
{/if}
