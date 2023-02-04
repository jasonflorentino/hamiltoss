<script>
	import { TITLE } from '$lib';

	let hamiltonUrl =
		'https://www.hamilton.ca/home-neighbourhood/garbage-recycling/blue-box-recycling/recycling';

	let title = TITLE + ' | About';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="p-5">
	<h1 class="mb-4 text-4xl font-bold text-emerald-300 md:text-5xl lg:text-6xl">About</h1>

	<div class="max-w-3xl text-2xl font-light md:text-3xl lg:text-4xl">
		<p class="leading-relaxed">
			Easily find if something is recyclable in Hamilton. More information, and the source of this
			data, can be found on
			<a
				href={hamiltonUrl}
				target="_blank"
				rel="noreferrer"
				class="underline decoration-emerald-300 underline-offset-4"
				>The City of Hamilton's website.</a
			>
		</p>
	</div>
</main>

<style>
	:global(body) {
		@apply mx-auto max-w-7xl bg-gray-900 text-slate-200 selection:bg-emerald-200 selection:text-cyan-700;
	}
</style>
