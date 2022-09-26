<script>
	import { isOverlayOpen } from '$lib/store/store';
	import Overlay from '$lib/components/Overlay.svelte';
</script>

<div class="bg-white text-primary">
	<div class="container mx-auto py-20 space-y-10">
		<div class="text-center space-y-0 md:space-y-4">
			<p class="text-lg text-secondary font-bold md:leading-6 uppercase">cosmetic dentistry</p>
			<h2 class="text-4xl font-extrabold md:leading-5 mx-auto w-[18ch] md:w-auto uppercase">
				Choose the plan that suits you best
			</h2>
		</div>
		<div
			class="flex flex-col lg:flex-row w-80 mx-auto space-y-10 lg:space-y-0 space-x-0 lg:space-x-10 justify-center items-center"
		>
			<div class="brandGradientVariant min-w-[18rem] px-12 py-8 text-center space-y-8">
				<div class="flex flex-col items-center space-y-4">
					<p class="font-extrabold text-base">6 Veneers</p>
					<h2 class="text-5xl font-extrabold">28€</h2>
					<p class="text-base text-textAccent">36 months</p>
					<p
						class="px-12 py-1.5 font-extrabold  text-3xl text-white rounded-[6.25rem_6.25rem_6.25rem_6.25rem] bg-gray-900"
					>
						990€
					</p>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<p class="font-extrabold text-base ">Free First Appointment</p>
					<ul>
						<li class="text-base font-normal">Consultation</li>
						<li class="">Intraoral Scanner</li>
					</ul>
				</div>
				<div class="space-y-4">
					<p class="font-extrabold text-base uppercase">-15% students</p>
					<button
						class="brandButton px-12 whitespace-nowrap"
						on:click={() => isOverlayOpen.set(true)}>BOOK NOW</button
					>
				</div>
			</div>
			<div class="brandGradientVariant min-w-[18rem] px-12 py-8 text-center space-y-8">
				<div class="flex flex-col items-center space-y-4">
					<p class="font-extrabold text-base">8 Veneers</p>
					<h2 class="text-5xl font-extrabold">35€</h2>
					<p class="text-base text-textAccent">36 months</p>
					<p
						class="px-12 py-1.5 font-extrabold  text-3xl text-white rounded-[6.25rem_6.25rem_6.25rem_6.25rem] bg-gray-900"
					>
						1.249€
					</p>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<p class="font-extrabold text-base ">Free First Appointment</p>
					<ul>
						<li class="text-base font-normal">Consultation</li>
						<li class="">Intraoral Scanner</li>
					</ul>
				</div>
				<div class="space-y-4">
					<p class="font-extrabold text-base uppercase">-15% students</p>
					<button
						class="brandButton px-12 whitespace-nowrap"
						on:click={() => isOverlayOpen.set(true)}>BOOK NOW</button
					>
				</div>
			</div>
			<div class="brandGradientVariant min-w-[18rem] px-12 py-8 text-center space-y-8">
				<div class="flex flex-col items-center space-y-4">
					<p class="font-extrabold text-base">10 Veneers</p>
					<h2 class="text-5xl font-extrabold">31€</h2>
					<p class="text-base text-textAccent">48 months</p>
					<p
						class="px-12 py-1.5 font-extrabold  text-3xl text-white rounded-[6.25rem_6.25rem_6.25rem_6.25rem] bg-gray-900"
					>
						1.495€
					</p>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<p class="font-extrabold text-base ">Free First Appointment</p>
					<ul>
						<li class="text-base font-normal">Consultation</li>
						<li class="">Intraoral Scanner</li>
					</ul>
				</div>
				<div class="space-y-4">
					<p class="font-extrabold text-base uppercase">-15% students</p>
					<button
						class="brandButton px-12 whitespace-nowrap"
						on:click={() => isOverlayOpen.set(true)}>BOOK NOW</button
					>
				</div>
			</div>
		</div>
		<div class="text-center">
			<p class="font-extrabold text-2xl">SMILING IS COOL. 😉</p>
		</div>
	</div>
</div>
{#if $isOverlayOpen}
	<Overlay />
{/if}
