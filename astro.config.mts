import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// For GitHub Pages
	site: 'https://ticocodes.github.io',
	base: '/astro-photography-portfolio',
	
	// For S3 (comment out when using GitHub Pages)
	// site: 'http://alex-perez-mp4.s3-website-us-west-1.amazonaws.com',
	// base: '/',
	
	vite: {
		plugins: [tailwindcss()],
	},
});
