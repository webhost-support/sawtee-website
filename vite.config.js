import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.jsx',
      ssr: 'resources/js/ssr.jsx',
      refresh: true,
    }),
    react(),
  ],
  ssr: {
    noExternal: [
      'lodash',
      'laravel-precognition',
      'laravel-precognition-react',
      'laravel-precognition-react-inertia',
    ],
  },
});
