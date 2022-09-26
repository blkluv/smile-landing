<script>
	import { browser, dev } from '$app/environment';
	import { event_id, PRODUCT_NAME } from '$lib/store/store';

	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';

	const trackFacebookEvent = (eid) => {
		fbq && fbq('track', 'ViewContent', { content_name: PRODUCT_NAME }, { eventID: eid });
	};

	$: $event_id, browser && !dev && $event_id !== '' && trackFacebookEvent($event_id);
</script>

<div class="flex flex-col min-h-screen">
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>

<GoogleAnalytics />
