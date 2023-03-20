<script lang="ts">
	export let recentSearches: string[];
</script>

{#if recentSearches.length}
	<div>
		{#each recentSearches as search}
			<a
				href={`/?query=${search}`}
				class="mr-3 mb-2 inline-block rounded-lg bg-emerald-300 py-1 px-3 text-sm text-emerald-800 hover:bg-emerald-200"
			>
				{search}
			</a>
		{/each}
	</div>
{/if}
