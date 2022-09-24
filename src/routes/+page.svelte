<script>
	import SEO from '$lib/components/SEO.svelte';

	const seoProps = {
		title: 'Smile Design by Dr. John Doe',
		description: 'Smile and Get Back Your Confidence',
		language: 'en-us',
		keywords: 'smile design, veneers treatment',
		type: 'website'
	};
</script>

<SEO {...seoProps} />

<h1 class="text-3xl font-bold underline bg-orange-500 text-white">Hello world!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
