<script>
	import SEO from '$components/SEO.svelte';
	import Hero from '$components/Hero.svelte';
	import HowItWorks from '$components/HowItWorks.svelte';
	import Benefits from '$components/Benefits.svelte';
	import Testimonials from '$components/Testimonials.svelte';
	import Pricing from '$components/Pricing.svelte';
	import About from '$components/About.svelte';

	import { event_id } from '$lib/store/store';
	export let data;
	$event_id = data.eid;

	const seoProps = {
		title: 'Smile Design | Dr. John Doe',
		description: 'Get Back Your Confidence With Your Best Smile',
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
