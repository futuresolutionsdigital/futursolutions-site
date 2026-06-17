// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://futuresolutions.io',
	adapter: vercel(),
	redirects: {
		'/seo': '/services/local-visibility',
		'/backend': '/services/growth-systems',
		'/snapshot': '/audit',
	},
	integrations: [
		sitemap({
			filter: (page) =>
				!page.includes('/api/') && !page.includes('/demos/association/portal'),
		}),
	],
	env: {
		schema: {
			OPENAI_API_KEY: envField.string({ context: 'server', access: 'secret' }),
		},
	},
});
