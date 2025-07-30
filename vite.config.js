import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/app.js',
                'resources/css/portofolio/home.css', 
                'resources/js/portofolio/home.js',
                'resources/css/portofolio/about.css',
                'resources/js/portofolio/about.js',
                'resources/css/portofolio/project.css',
                'resources/js/portofolio/project.js',
                'resources/css/portofolio/contact.css',
                'resources/js/portofolio/contact.js',  
            ],
            refresh: true,
        }),
    ],
});