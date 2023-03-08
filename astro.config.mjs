import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://curier.dev',
    routes : [
        { path: '/', src: 'pages/index.astro' },
        { path: '/contact', src: 'pages/contact.astro' },
        { path: '/projects', src: 'pages/projectsastro' },
    ],
});