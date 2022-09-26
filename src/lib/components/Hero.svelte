<script>
	//script
	import Slideshow from '$lib/components/Slideshow.svelte';
	import Form from '$lib/components/Form.svelte';
	let Check =
		"<svg viewBox='0 0 14 14' focusable='false' class='w-4 h-4 text-current mr-2' role='presentation'> <g fill='currentColor'><polygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039' /></g></svg>";
</script>

<section class="container mx-auto pb-10">
	<div class="flex flex-col md:flex-row justify-end items-center md:items-start py-4 sm:py-10">
		<div class="relative w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw]">
			<div class="absolute top-0 md:right-0 right-1/2 translate-x-1/2 md:translate-x-0">
				<Slideshow />
			</div>
		</div>
		<div class="flex flex-col gap-5 px-12 max-w-lg">
			<div class="flex flex-col  font-extrabold">
				<p class="mt-5 md:mt-0 text-base text-secondary uppercase tracking-widest">Treatment</p>
				<h1 class="text-gray-900 text-4xl xl:text-4xl">SMILE MAKEOVER</h1>
			</div>
			<div class="flex flex-col gap-2 font-bold text-md">
				<p class="rounded-[0_6.25rem_6.25rem_0] border-0 bg-gray-900 text-white py-2 px-4 w-fit ">
					Smile Design
				</p>
				<p class="rounded-[0_6.25rem_6.25rem_0] border-0 bg-gray-900 text-white py-1 px-4 w-fit ">
					Starting at <span class="text-lg font-extrabold">28€/Mo</span>
				</p>
				<p class="rounded-[0_6.25rem_6.25rem_0] border-0 bg-gray-900 text-white py-2 px-4 w-fit ">
					Request your FREE APPOINTMENT
				</p>
			</div>
			<ul class="list-none flex flex-col gap-2">
				<li class="flex">
					<div class="mt-1">
						{@html Check}
					</div>
					<p class="text-base">Your smile in <strong>just one week</strong>.</p>
				</li>
				<li class="flex">
					<div class="mt-1">
						{@html Check}
					</div>
					<p class="text-base">
						Design the <strong>shape, size, and color</strong> of your teeth.
					</p>
				</li>
				<li class="flex">
					<div class="mt-1">
						{@html Check}
					</div>
					<p class="text-base">
						Financing available <strong>without interest</strong>.
					</p>
				</li>
				<li class="flex">
					<div class="mt-1">
						{@html Check}
					</div>
					<p class="text-base">
						You can see the final result <strong>before making your decision</strong>.
					</p>
				</li>
			</ul>
			<Form />
		</div>
	</div>
</section>
