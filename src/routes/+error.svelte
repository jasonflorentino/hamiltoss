<script>
	import { page } from '$app/stores';
</script>

<main class="mb-10 flex flex-col items-center justify-center p-5">
	<h1
		class="w-fit bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-[120px] font-bold text-transparent md:text-[160px] lg:text-[200px] lg:font-black"
	>
		{$page.status}
	</h1>
	<pre class="mb-1 inline rounded bg-gray-700 py-px px-2 text-sm text-zinc-300 lg:text-base">{$page
			.url.pathname}</pre>
	<h2 class="text-base text-zinc-400 lg:text-xl">Sorry, but we couldn't find this page.</h2>
</main>
