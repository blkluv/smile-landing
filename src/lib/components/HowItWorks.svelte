<script>
	import { isOverlayOpen } from '$lib/store/store';
	import Overlay from '$lib/components/Overlay.svelte';

	import How1Avif from '$lib/images/howitworks1.png?width=144;288;432;&format=avif&srcset';
	import How1Webp from '$lib/images/howitworks1.png?width=144;288;432&format=webp&srcset';
	import How1Png from '$lib/images/howitworks1.png?width=432&format=png';

	import How2Avif from '$lib/images/howitworks2.png?width=176;352;528;&format=avif&srcset';
	import How2Webp from '$lib/images/howitworks2.png?width=176;352;528&format=webp&srcset';
	import How2Png from '$lib/images/howitworks2.png?width=528&format=png';

	import How3Avif from '$lib/images/howitworks3.png?width=144;288;432;&format=avif&srcset';
	import How3Webp from '$lib/images/howitworks3.png?width=144;288;432&format=webp&srcset';
	import How3Png from '$lib/images/howitworks3.png?width=432&format=png';
</script>

<section class="brandGradient bg-[rgb(249,249,249)]">
	<div class="container mx-auto py-20 space-y-12">
		<div class="text-center space-y-2 max-w-2xl mx-auto">
			<p class="text-base font-bold">TREATMENT TIMELINE</p>
			<h2 class="text-3xl font-extrabold w-[clamp(15ch,15ch,15ch)] mx-auto md:w-auto">
				YOUR TREATMENT IN 1 WEEK
			</h2>
		</div>
		<div class="flex flex-col space-y-10 max-w-2xl mx-auto items-center md:items-stretch">
			<div class="flex flex-col-reverse md:flex-row justify-around ml-8 md:ml-0">
				<div class="mt-8 md:mt-0 min-w-[16rem]">
					<picture>
						<source srcset={How1Avif} type="image/avif" />
						<source srcset={How1Webp} type="image/webp" />
						<img
							loading="lazy"
							decoding="async"
							src={How1Png}
							alt="Step 1"
							class="object-cover w-36 ml-8 mr-auto md:ml-0 md:relative md:top-6"
						/>
					</picture>
				</div>
				<div class="flex flex-col self-end min-w-[16rem]">
					<p
						class="relative left-5 md:left-0 text-3xl font-bold
							 before:content-['1'] before:block before:absolute before:w-12 before:h-12 before:-left-16 before:text-white before:text-center before:bg-primary before:rounded-full before:pt-2 before:text-3xl before:z-10
							 md:after:block md:after:absolute md:after:top-8 md:after:-left-10 md:after:border-[1px] md:after:border-primary md:after:h-56 md:after:border-opacity-60 
							 max-w-[15rem]
							 "
					>
						VIRTUAL CONSULTATION
					</p>
					<ul class="list-disc whitespace-nowrap">
						<li class="ml-6">Consultation with a doctor</li>
						<li class="ml-6">Take photos</li>
						<li class="ml-6">Explore financing options</li>
						<li class="ml-6">Book surgery date</li>
					</ul>
				</div>
			</div>
			<div class="flex flex-col-reverse md:flex-row-reverse justify-around ml-8 md:ml-0">
				<div class="mt-8 md:mt-0 min-w-[16rem]">
					<picture>
						<source srcset={How2Avif} type="image/avif" />
						<source srcset={How2Webp} type="image/webp" />
						<img
							loading="lazy"
							decoding="async"
							src={How2Png}
							alt="Step 2"
							class="object-cover w-44 ml-6 mr-auto"
						/>
					</picture>
				</div>
				<div class="flex flex-col self-end min-w-[16rem]">
					<p
						class="relative left-4 md:left-0 text-3xl font-bold
						 		before:content-['2'] before:block before:absolute before:w-12 before:h-12  before:right-[15.5rem] md:before:-right-20 before:text-white before:text-center before:bg-primary before:rounded-full before:pt-2 before:text-3xl before:z-10
							 	md:after:block md:after:absolute md:after:top-8 md:after:-right-[3.6rem] md:after:border-[1px] md:after:border-primary md:after:h-48 md:after:border-opacity-60 
								max-w-[15rem]
								"
					>
						VENEERS CONSULTATION
					</p>
					<ul class="list-disc whitespace-nowrap">
						<li class="ml-6 ">In-depth examination</li>
						<li class="ml-6 ">X-rays</li>
						<li class="ml-6 ">Digital Images</li>
						<li class="ml-6 ">Temporary Veneers</li>
					</ul>
				</div>
			</div>
			<div class="flex flex-col-reverse md:flex-row justify-around ml-8 md:ml-0">
				<div class="mt-8 md:mt-0 min-w-[16rem]">
					<picture>
						<source srcset={How3Avif} type="image/avif" />
						<source srcset={How3Webp} type="image/webp" />
						<img
							loading="lazy"
							decoding="async"
							src={How3Png}
							alt="Step 3"
							class="object-cover w-36 mr-auto ml-14 md:mx-auto"
						/>
					</picture>
				</div>
				<div class="flex flex-col self-end min-w-[16rem]">
					<p
						class="relative w-full mx-auto pr-8 sm:pr-0 pl-10 md:pl-10 text-3xl font-bold
							 before:content-['3'] before:block before:absolute before:w-12 before:h-12 before:-left-[1.5rem] md:before:-left-[1.8rem] before:text-white before:text-center before:bg-primary before:rounded-full before:pt-2 before:text-3xl before:z-10
							 max-w-[18rem]"
					>
						SMILE MAKEOVER DAY
					</p>
					<ul class="list-disc whitespace-nowrap">
						<li class="ml-6 sm:ml-10 md:ml-20">
							You’ll have a custom-fit <br /> smile with permanent veneers!
						</li>
					</ul>
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
