<script>
	import { isOverlayOpen } from '$lib/store/store';
	import Overlay from '$lib/components/Overlay.svelte';

	let Check =
		"<svg viewBox='0 0 14 14' focusable='false' class='w-4 h-4 text-current mr-2' role='presentation'> <g fill='currentColor'><polygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039' /></g></svg>";
</script>

<section class="px-5">
	<div class="py-20 space-y-8 md:space-y-12">
		<div class="text-center space-y-2 max-w-2xl mx-auto">
			<p class="text-base font-bold text-secondary">PERFECT SMILE</p>
			<h2 class="text-4xl font-extrabold mx-auto md:w-auto">SMILE DESIGN</h2>
			<div>
				<p class="max-w-sm md:max-w-4xl mx-auto mt-6">
					Smile design is an artistic approach to creating beautiful smiles. It involves one or more
					cosmetic dental treatments that correct worn down, misaligned, or gap teeth, restoring
					your oral health and creating a more attractive smile.
				</p>
			</div>
		</div>
		<div
			class="md:grid md:grid-cols-2 md:gap-12 space-y-8 md:space-y-0 max-w-sm md:max-w-xl lg:md:max-w-2xl mx-auto"
		>
			<div>
				<div class="md:ml-0">
					<div class="mt-1 inline-block">
						{@html Check}
					</div>
					<h3 class="mb-2 text-xl font-bold inline-block">Refresh your smile</h3>
					<p class="text-gray-500 text-sm">
						Recover the appearance of your smile from the effects of wear and aging on your teeth.
					</p>
				</div>
			</div>
			<div>
				<div class="md:ml-0">
					<div class="mt-1 inline-block">
						{@html Check}
					</div>
					<h3 class="mb-2 text-xl font-bold inline-block">Natural-looking</h3>
					<p class="text-gray-500 text-sm">
						It fits perfectly with the teeth, adapted smoothly to the gums and are virtually
						indistinguishable from a natural tooth.
					</p>
				</div>
			</div>
			<div>
				<div class="md:ml-0">
					<div class="mt-1 inline-block">
						{@html Check}
					</div>
					<h3 class="mb-2 text-xl font-bold inline-block">Cosmetic details</h3>
					<p class="text-gray-500 text-sm">
						Since they are attached to the front surfaces of the teeth, small problems that would
						normally require orthodontics can go unnoticed.
					</p>
				</div>
			</div>
			<div>
				<div class="md:ml-0">
					<div class="mt-1 inline-block">
						{@html Check}
					</div>
					<h3 class="mb-2 text-xl font-bold inline-block">Damaged tooth enamel</h3>
					<p class="text-gray-500 text-sm">
						According to the American Academy of Cosmetic Dentistry, veneers are an excellent
						treatment for teeth with abraded or eroded enamel, while also being pleasing to the eye.
					</p>
				</div>
			</div>
		</div>
		<div class="flex justify-center">
			<button class="brandButton" on:click={() => isOverlayOpen.set(true)}>BOOK NOW</button>
		</div>
	</div>
</section>
{#if $isOverlayOpen}
	<Overlay />
{/if}
