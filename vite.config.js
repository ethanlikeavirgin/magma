import { defineConfig } from 'vite'
import path from 'path'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  root: './', // Make sure this is correct for your setup
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "web/assets/_tailwind.scss";`
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'web/assets'),
    },
  },
  build: {
    rollupOptions: {
      input: 'web/assets/app.scss',
    },
    outDir: 'web/dist', // or wherever Vite is outputting
    emptyOutDir: true,
  },
  plugins: [
    FullReload(['templates/**/*.twig']),
  ]
})
