import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import prism from 'vite-plugin-prismjs'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_debugger: true,
      },
    },
  },
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: 'bundle-visualization.html'
    }),
    prism({
      languages: ['csharp'],
      theme: 'tomorrow',
      css: true,
    }),
  ],
})
