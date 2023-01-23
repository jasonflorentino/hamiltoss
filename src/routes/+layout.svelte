<script>
	import '../app.postcss';
	import { page } from '$app/stores'

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

<nav class="bg-emerald-500 divide-emerald-400 divide-x-2 font-medium grid grid-cols-3 m-2 place-content-center rounded-md text-emerald-50">
	{#each links as { href, label }}
		<a {href} class="flex justify-center items-center h-12 text-md  {href === $page.route.id ? 'underline underline-offset-4' : ''}">{label}</a>
	{/each}
</nav>

<slot />