<script lang="ts">
	import dayjs from 'dayjs';
	import { Constants, Utils } from '$lib';
	import { MainHeading } from '$lib/components';

	let title = Constants.TITLE + ' | Data';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="p-5">
	<MainHeading>Important Dates</MainHeading>

	<p class="mt-1 text-sm font-medium">
		We'll remember these so you don't have to. (Today is {dayjs().format('dddd, MMMM D')}.)
	</p>

	<ul class="mt-5 divide-y divide-emerald-400">
		{#each Constants.PICKUP_CHANGES as { date, name, affectedPeriod }}
			<li class="py-3 {dayjs().isAfter(dayjs(date)) ? 'opacity-50' : ''}">
				<div class="flex items-baseline justify-between">
					<h3 class="text-xl xl:text-2xl">{name}</h3>
					<p class="text-xs font-medium tracking-wide text-cyan-300">
						{dayjs(date).format('MMM D, YYYY').toUpperCase()}
					</p>
				</div>
				<p class="text-sm font-normal text-gray-400">
					{Utils.toPickupNoticeText(affectedPeriod, date)}
				</p>
			</li>
		{/each}
	</ul>
</main>
