import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        https: false,
        host: 'pantheon.test'
    },
    plugins: [
        laravel({
            input: ["resources/ts/app.tsx"],
            refresh: true,
        }),
    ],
});
