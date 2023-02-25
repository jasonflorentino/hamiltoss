<script lang="ts">
	import type { SpecialPickupDetail } from '$lib/types';
	import dayjs from 'dayjs';

	export let date = '';
	export let name = '';
	export let affectedPeriod: SpecialPickupDetail['affectedPeriod'] = 'none';
</script>

<div
	class="flex w-full flex-col items-center justify-center rounded-b-xl bg-cyan-900 px-2 py-2 sm:flex-row lg:py-3"
>
	<span class="mr-2 rounded bg-cyan-200 py-px px-1 text-xs font-semibold uppercase text-cyan-700"
		>{name} {dayjs(date).format('YYYY')}</span
	>
	<p class="text-sm font-medium text-cyan-50">
		{#if affectedPeriod === 'week'}
			Pickup is one day later this week.
		{:else if affectedPeriod === 'none'}
			No change to the regular schedule.
		{:else if affectedPeriod === 'day'}
			Pickup will be the next day instead.
		{:else if affectedPeriod === 'yard'}
			{`Leaf and yard waste pickup ${dayjs(date).isBefore(dayjs().month(6)) ? 'resumes' : 'ends'}.`}
		{/if}
	</p>
</div>
