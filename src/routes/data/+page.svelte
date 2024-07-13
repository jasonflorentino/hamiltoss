<script lang="ts">
	import { Constants } from '$lib';
	import { MainHeading } from '$lib/components';

	let title = Constants.TITLE + ' | Data';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="p-5">
	<MainHeading>Data</MainHeading>

	<p class="mt-1 text-sm font-medium">An index of the data this site uses</p>

	<nav>
		<ul class="mt-5 divide-y divide-emerald-400">
			<li class="py-3 hover:text-gray-400">
				<a href="/data/dates" class="text-xl xl:text-2xl">Important Dates</a>
			</li>
			<li class="py-3 hover:text-gray-400">
				<a href="/materials" class="text-xl xl:text-2xl">All Materials</a>
			</li>
		</ul>
	</nav>
</main>
