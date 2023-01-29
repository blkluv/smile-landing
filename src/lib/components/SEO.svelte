<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let keywords: string;
	export let type: string = 'website';

	const url = $page.url.toString();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<!-- https://ogp.me -->
	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<!-- <meta property="og:image" content="https://www.example.com/{image}" /> -->
</svelte:head>
