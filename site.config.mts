import type { AstroInstance } from 'astro';
import { Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'AP',
	favicon: 'favicon.ico',
	owner: 'Alex Perez',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/alexperez.mp4/',
			icon: Instagram,
		} as SocialLink,
	],
};
