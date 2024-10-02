import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true // Add PostCSS support (if needed)
    })
  ],
  kit: {
    adapter: adapter({
      // runtime: 'nodejs18.x' // You can explicitly set the Node.js runtime if needed
    }),
    alias: {
      $components: 'src/lib/components'
    }
  }
};

export default config;
