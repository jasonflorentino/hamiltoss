<script>
	import { Constants } from '$lib';
	import { MainHeading } from '$lib/components';

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
				href="https://www.hamilton.ca/home-neighbourhood/garbage-recycling/blue-box-recycling/recycling"
				target="_blank"
				rel="noreferrer"
				class="underline decoration-emerald-300 underline-offset-4 hover:text-emerald-200"
				>The City of Hamilton's website.</a
			>
		</p>
	</section>

	<section class="max-w-sm text-xs font-medium leading-relaxed text-cyan-400 md:max-w-lg">
		<p class="mt-5">
			This site was created and is maintained by some guy who lives in Hamilton. It is in no way
			affiliated with the City of Hamilton, or their keeper of recycle sorting data.
		</p>
		<p class="mt-2">
			It's also just a simple website. You don't need to make an account to use it! You also don't
			need to provide personal information like your email or your home address. Sure, it means we
			can't provide smart services like notifying you on your pickup date. But it also means that
			your information stays yours.
		</p>
		<p class="mt-2">
			The source code for this site is publicly available on
			<a
				href="https://github.com/jasonflorentino/hamiltoss"
				class="text-cyan-200 hover:text-cyan-400"
				target="_blank"
				rel="noreferrer">GitHub.</a
			>
			Feel free to open a new
			<a
				href="https://github.com/jasonflorentino/hamiltoss/issues"
				class="text-cyan-200 hover:text-cyan-400"
				target="_blank"
				rel="noreferrer">Issue</a
			> if you find any errors or bugs. Thanks for stopping by!
		</p>
	</section>
</main>
