<script>
	import '../app.postcss';
	import { page } from '$app/stores';
	import { TITLE } from '$lib';

	let title = TITLE;

	const links = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'All Materials',
			href: '/materials'
		},
		{
			label: 'About',
			href: '/about'
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Easily find if something is recyclable in Hamilton." />
</svelte:head>

<!-- main navigation -->
<nav
	class="m-2 grid grid-cols-3 place-content-center divide-x-2 divide-emerald-400 rounded-md bg-emerald-500 font-medium text-emerald-50 lg:m-4"
>
	{#each links as { href, label }}
		<div>
			<a
				{href}
				class="lg:h-18 text-md flex h-12 items-center justify-center lg:text-lg  {href ===
				$page.route.id
					? 'underline underline-offset-4'
					: ''}  transition ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
				>{label}</a
			>
		</div>
	{/each}
</nav>

<slot />

<style>
	:global(body) {
		@apply mx-auto max-w-7xl bg-gradient-to-b from-slate-900 to-gray-900 text-slate-200 selection:bg-emerald-200 selection:text-cyan-700;
	}
</style>
