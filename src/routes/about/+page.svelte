<script>
	import { Constants } from '$lib';
	import { MainHeading } from '$lib/components';

	let hamiltonUrl =
		'https://www.hamilton.ca/home-neighbourhood/garbage-recycling/blue-box-recycling/recycling';

	let title = Constants.TITLE + ' | About';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="p-5">
	<MainHeading>About</MainHeading>

	<section class="max-w-3xl text-2xl font-light md:text-3xl lg:text-4xl">
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
	</section>
	<section>
		<p class="mt-5 max-w-sm text-xs font-medium leading-relaxed text-cyan-400">
			This site was created and is maintained by some guy who lives in Hamilton. It is in no way
			affiliated with the City of Hamilton, or their keeper of recycle sorting data.
		</p>
	</section>
</main>
