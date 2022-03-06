import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess({})],

  kit: {
    prerender: {
      default: true
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),

    vite: {
      plugins: [
        imagetools()
      ]
    },
  },
};

export default config;
