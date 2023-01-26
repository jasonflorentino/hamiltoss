<script>
	let hamiltonUrl =
		'https://www.hamilton.ca/home-neighbourhood/garbage-recycling/blue-box-recycling/recycling';
</script>

<main class="p-5">
	<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-300 mb-4">About</h1>

	<div class="text-3xl md:text-4xl font-light max-w-3xl">
		<p class="leading-relaxed">
			Easily find if something is recyclable in Hamilton. More information, and the source of this
			data, can be found at
			<a href={hamiltonUrl} target="_blank" rel="noreferrer" class="underline underline-offset-4 decoration-emerald-300">The City of Hamilton's website.</a>
		</p>
	</div>
</main>

<style>
	:global(body) {
		@apply bg-gray-900 text-slate-200 mx-auto max-w-7xl selection:bg-emerald-200 selection:text-cyan-700;
	}
</style>