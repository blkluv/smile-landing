<script>
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import Benefits from '$lib/components/Benefits.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import About from '$lib/components/About.svelte';

	import { event_id } from '$lib/store/store';
	export let data;
	$event_id = data.eid;

	const seoProps = {
		title: 'Smile Design | Dr. John Doe',
		description: 'Get Back Your Confidence With Your Best Smile',
		language: 'en-us',
		keywords: 'smile design, veneers treatment',
		type: 'website'
	};
</script>

<SEO {...seoProps} />
<Hero />
<HowItWorks />
<Benefits />
<Testimonials />
<Pricing />
<About />
