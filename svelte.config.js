import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');
const base = dev ? '' : '/migrazioni';

export default {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    paths: {
      base
    }
  }
};
