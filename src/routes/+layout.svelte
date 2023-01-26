<script>
	import '../app.postcss';
	import { page } from '$app/stores';

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

<nav
	class="bg-emerald-500 divide-emerald-400 divide-x-2 font-medium grid grid-cols-3 m-2 lg:m-4 place-content-center rounded-md text-emerald-50"
>
	{#each links as { href, label }}
		<div>
			<a
				{href}
				class="flex justify-center items-center h-12 lg:h-18 text-md lg:text-lg  {href ===
				$page.route.id
					? 'underline underline-offset-4'
					: ''}  transition ease-in-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
				>{label}</a
			>
		</div>
	{/each}
</nav>

<slot />
