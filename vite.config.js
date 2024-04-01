import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  publicDir: 'assets',
  base: './',
  plugins: [
    {
      name: 'copy-assets',
      writeBundle() {
        const assetsDir = path.resolve(__dirname, 'assets');
        const distDir = path.resolve(__dirname, 'dist', 'assets');

        // Create the dist/assets directory if it doesn't exist
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true });
        }

        // Copy the assets directory to dist/assets
        fs.cpSync(assetsDir, distDir, { recursive: true });
      },
    },
  ],
});