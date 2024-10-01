import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    imagetools({
      force: true, // Optional: uncomment if needed
    }),
  ],
  build: {
    outDir: 'dist', // Ensure this matches Vercel/Netlify expectations
  },
  // Add any other configurations you may need
};

export default config;
