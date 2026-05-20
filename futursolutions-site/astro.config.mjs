// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	env: {
		schema: {
			OPENAI_API_KEY: envField.string({ context: 'server', access: 'secret' }),
		},
	},
});
