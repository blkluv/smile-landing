<script>
	import { page } from '$app/stores';
	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-7G4D5LM10Z', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-7G4D5LM10Z"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-7G4D5LM10Z');
	</script>
</svelte:head>
