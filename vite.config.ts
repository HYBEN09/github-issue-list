import path from 'path';
import { defineConfig } from 'vite';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';
import react from '@vitejs/plugin-react-swc';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('src') }],
  },
  plugins: [
    react(),
    viteImagemin({
      plugins: {
        svg: imageminSvgo(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp(),
        },
      },
    }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          reactRouter: ['react-router', 'react-router-dom'],
          recoil: ['recoil'],
          styled: ['styled-components'],
        },
      },
    },
  },
});
