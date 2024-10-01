import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            runtime: 'nodejs18.x' // or 'nodejs20.x' if using Node 20
        }),
        alias: {
            $components: 'src/lib/components'
        }
    }
};

export default config;

