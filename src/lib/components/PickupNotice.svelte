<script lang="ts">
	import type { SpecialPickupDetail } from '$lib/types';
	import dayjs from 'dayjs';
	import { Utils } from '$lib';

	export let date = '';
	export let name = '';
	export let affectedPeriod: SpecialPickupDetail['affectedPeriod'] = 'none';

	const text = Utils.toPickupNoticeText(affectedPeriod, date);
</script>

<div
	class="flex w-full flex-col items-center justify-center rounded-b-xl bg-cyan-900 px-2 py-2 text-center sm:flex-row lg:py-3"
>
	<span class="mr-2 rounded bg-cyan-200 py-px px-1 text-xs font-semibold uppercase text-cyan-700"
		>{name} {dayjs(date).format('YYYY')}</span
	>
	<p class="mt-1 text-center text-sm font-medium leading-tight text-cyan-50 sm:mt-0">
		{text}
	</p>
</div>

<style>
	p {
		text-align: center;
	}
</style>
