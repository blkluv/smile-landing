<script>
	import { isOverlayOpen } from '$lib/store/store';
	import Overlay from '$lib/components/Overlay.svelte';

	import DoctorFallback from '$lib/assets/dr-john-doe.png?width=375&format=jpg&srcset';
	import DoctorWebp from '$lib/assets/dr-john-doe.png?width=375&format=webp&srcset';
	import DoctorAvif from '$lib/assets/dr-john-doe.png?width=375&format=avif&srcset';

	import Facility1Fallback from '$lib/assets/facilities1.jpg?width=1024;768;640&format=jpg&srcset';
	import Facility1Webp from '$lib/assets/facilities1.jpg?width=1024;768;640&format=webp&srcset';
	import Facility1Avif from '$lib/assets/facilities1.jpg?width=1024;768;640&format=avif&srcset';

	import Facility2Fallback from '$lib/assets/facilities2.jpg?width=1024;768;640&format=jpg&srcset';
	import Facility2Webp from '$lib/assets/facilities2.jpg?width=1024;768;640&format=webp&srcset';
	import Facility2Avif from '$lib/assets/facilities2.jpg?width=1024;768;640&format=avif&srcset';

	import Facility3Fallback from '$lib/assets/facilities3.jpg?width=1024;768;640&format=jpg&srcset';
	import Facility3Webp from '$lib/assets/facilities3.jpg?width=1024;768;640&format=webp&srcset';
	import Facility3Avif from '$lib/assets/facilities3.jpg?width=1024;768;640&format=avif&srcset';

	let Check =
		"<svg viewBox='0 0 14 14' focusable='false' class='w-4 h-4 text-current mr-2' role='presentation'> <g fill='currentColor'><polygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039' /></g></svg>";
</script>

<section class="bg-gray-100">
	<div class=" flex flex-col py-20 space-y-8 md:space-y-12">
		<div
			class="flex flex-col md:flex-row  space-y-8 md:space-y-0 max-w-sm md:max-w-2xl lg:md:max-w-5xl mx-auto space-x-0 md:space-x-8"
		>
			<div class="">
				<picture>
					<source srcset={DoctorAvif} type="image/avif" />
					<source srcset={DoctorWebp} type="image/webp" />
					<img
						loading="lazy"
						decoding="async"
						src={DoctorFallback}
						alt="Dr. John Doe"
						class="w-96 aspect-square"
					/>
				</picture>
			</div>
			<div class="text-center space-y-2 flex flex-col justify-evenly">
				<div class="">
					<p class="text-base font-bold text-secondary uppercase">Cosmetic Dentist</p>
					<h2 class="text-4xl font-extrabold mx-auto md:w-auto">Dr. John Doe</h2>
					<p class="max-w-sm md:max-w-4xl mx-auto mt-6 text-justify ">
						Dr. John Doe passion for creating natural-looking smiles motivated him to complete
						advanced training in dental aesthetics at Seattle Institute for Advanced Dental
						Education. Additionally, he has received advanced training in occlusion to ensure you
						have a perfect smile and a perfect bite.
					</p>
				</div>
				<div class="flex justify-center">
					<button class="brandButton mt-5 md:mt-0" on:click={() => isOverlayOpen.set(true)}
						>BOOK NOW</button
					>
				</div>
			</div>
		</div>
		<div class="flex flex-col space-y-8 md:space-y-12">
			<h2 class="text-2xl font-extrabold mx-auto md:w-auto text-secondary">DENTAL OFFICE</h2>

			<div
				class="flex flex-col md:flex-row mx-auto  max-w-sm md:max-w-2xl lg:md:max-w-5xl space-y-12 md:space-y-0 space-x-0 md:space-x-12"
			>
				<picture class="flex-1">
					<source srcset={Facility1Avif} type="image/avif" />
					<source srcset={Facility1Webp} type="image/webp" />
					<img
						loading="lazy"
						decoding="async"
						src={Facility1Fallback}
						alt="Dental Office"
						class="w-72 aspect-square"
					/>
				</picture>
				<picture class="flex-1">
					<source srcset={Facility2Avif} type="image/avif" />
					<source srcset={Facility2Webp} type="image/webp" />
					<img
						loading="lazy"
						decoding="async"
						src={Facility2Fallback}
						alt="Dental Office"
						class="w-72 aspect-square"
					/>
				</picture>
				<picture class="flex-1">
					<source srcset={Facility3Avif} type="image/avif" />
					<source srcset={Facility3Webp} type="image/webp" />
					<img
						loading="lazy"
						decoding="async"
						src={Facility3Fallback}
						alt="Dental Office"
						class="w-72 aspect-square"
					/>
				</picture>
			</div>
		</div>
		<div class="text-center">
			<h3 class="text-md italic mx-auto md:w-auto text-gray-800">
				75 North Fictional Street, Roselle, IL 60172.
			</h3>
		</div>
		<div class="h-[400px] w-full md:w-[42rem] lg:w-[64rem] aspect-auto mx-auto">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380513.71601068694!2d-88.01214949906408!3d41.833392500803214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sve!4v1664207929827!5m2!1sen!2sve"
				width="100%"
				height="100%"
				style="border:0;"
				title="Dental office location on the map"
				class="mx-auto"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
	</div>
</section>
{#if $isOverlayOpen}
	<Overlay />
{/if}
