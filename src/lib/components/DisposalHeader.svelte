<script lang="ts">
	let propClasses = '';
	export { propClasses as class };

	let el: HTMLSpanElement;
	let colorClasses = 'bg-cyan-400 text-gray-800';
	$: {
		if (el) {
			switch (el.innerText) {
				case 'Bulk Items':
				case 'Bulky Items':
					colorClasses = 'bg-rose-700 text-rose-200';
					break;
				case 'Construction and Renovation Waste':
					colorClasses = 'bg-yellow-300 text-zinc-800';
					break;
				case 'Electronic Waste':
					colorClasses = 'bg-amber-400 text-zinc-900';
					break;
				case 'Garbage':
					colorClasses = 'bg-zinc-600 text-zinc-200';
					break;
				case 'Hazardous Waste':
				case 'Household Hazardous Waste':
					colorClasses = 'bg-red-500 text-red-100';
					break;
				case 'Household Organics':
					colorClasses = 'bg-emerald-400 text-emerald-900';
					break;
				case 'Recyclable':
					colorClasses = 'bg-blue-600 text-sky-100';
					break;
				case 'Reusable':
					colorClasses = 'bg-amber-100 text-yellow-900';
					break;
				case 'Special Items':
					colorClasses = 'bg-violet-700 text-violet-200';
					break;
			}
		}
	}
</script>

<span
	bind:this={el}
	class={`w-fit rounded-md py-1 px-2 text-sm font-bold ${colorClasses} ${propClasses}`}
>
	<slot />
</span>
