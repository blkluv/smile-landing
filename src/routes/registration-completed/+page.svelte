<script>
	import { confetti } from '@neoconfetti/svelte';

	import Logo1Avif from '$lib/assets/logo.png?width=400;800;1200&format=avif&srcset';
	import Logo1Webp from '$lib/assets/logo.png?width=400;800;1200&format=webp&srcset';
	import Logo1Png from '$lib/assets/logo.png?width=1200&format=png';
</script>

<div class="flex justify-center items-center flex-1">
	<div class="max-w-sm sm:max-w-xl md:max-w-2xl">
		<div class="flex justify-center">
			<div use:confetti />
		</div>
		<a href="/" class="flex w-56 aspect-square mx-auto" aria-label="Logo">
			<picture>
				<source srcset={Logo1Avif} type="image/avif" />
				<source srcset={Logo1Webp} type="image/webp" />
				<img loading="lazy" decoding="async" src={Logo1Png} alt="Persona con tratamiento" />
			</picture>
		</a>
		<p class="font-bold text-2xl text-center mt-4">¡Thank You!</p>
		<p class="text-md mt-6 md:w-[560px] text-center mb-20">
			We will get back to you as soon as possible.
		</p>
	</div>
</div>
