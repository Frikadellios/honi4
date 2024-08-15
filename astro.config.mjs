import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/astro'
import { remarkReadingTime } from './src/lib/readTime'
import rehypeExternalLinks from 'rehype-external-links'
import { SITE } from './src/site.config.ts'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssMinify: 'lightningcss'
		}
	},
	site: SITE,
	prefetch: {
		defaultStrategy: 'viewport',
		prefetchAll: true
	},
	integrations: [
		AutoImport({
			defaultExportByFilename: false,
			include: [/\.[tj]sx?$/, /\.md$/],
			packagePresets: ['detect-browser-es'],
			imports: ['react', 'react-router'],
			viteOptimizeDeps: true,
			injectAtEnd: true,
			dirs: ['./src/utils/*.ts', './src/hooks'],
			dts: './src/auto-imports.d.ts'
		}),react()],
        markdown: {
            rehypePlugins: [
                [
                    rehypeExternalLinks,
                    {
                        content: {
                            type: 'text',
                            value: ' 🔗'
                        },
                        target: '_blank',
                        rel: ['nofollow', 'noreferrer']
                    }
                ]
            ],
            remarkPlugins: [remarkReadingTime],
            shikiConfig: {
                theme: 'github-dark-dimmed',
                wrap: true
            },
            gfm: true
        }
    });
