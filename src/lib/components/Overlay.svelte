<script>
	import { fade } from 'svelte/transition';
	import { isOverlayOpen } from '$lib/store/store';
	import Form from '$lib/components/Form.svelte';

	import Logo1Avif from '$lib/images/logo.png?width=300&format=avif&srcset';
	import Logo1Webp from '$lib/images/logo.png?width=300&format=webp&srcset';
	import Logo1Png from '$lib/images/logo.png?width=192&format=png';
</script>

<!-- Buttons used in the clickable area for this reason 👉 https://github.com/sveltejs/svelte/issues/8001 -->
<button
	type="button"
	on:click={() => isOverlayOpen.set(false)}
	class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-800 bg-opacity-90 z-10"
	transition:fade
>
	<button
		type="button"
		on:click|stopPropagation
		class="max-w-lg px-4 sm:px-16 py-2 sm:py-10 bg-white  rounded-md relative opacity-100"
	>
		<div class="max-w-xs py-5">
			<button
				type="button"
				aria-label="Close"
				class="absolute top-2 right-3 text-4xl text-gray-300 hover:-translate-y-0.5 transition-transform"
				on:click={() => isOverlayOpen.set(false)}
			>
				&times;
			</button>
			<header class="flex flex-col items-center  pb-4">
				<div class="text-center w-24">
					<picture>
						<source srcset={Logo1Avif} type="image/avif" />
						<source srcset={Logo1Webp} type="image/webp" />
						<img
							class="w-24 h-24"
							loading="lazy"
							decoding="async"
							src={Logo1Png}
							alt="Persona con tratamiento"
						/>
					</picture>
				</div>

				<p
					class="text-secondary text-3xl font-bold w-[clamp(15ch,15ch,15ch)] text-center leading-10"
				>
					We will get back to you!
				</p>
			</header>
			<div class="px-2">
				<Form />
			</div>
		</div>
	</button>
</button>
