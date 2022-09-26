<script>
	import { PUBLIC_GOOGLE_ANALYTICS } from '$env/static/public';
	import { page } from '$app/stores';
	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', PUBLIC_GOOGLE_ANALYTICS, {
				page_path: $page.url.pathname
			});
		}
	}
</script>
