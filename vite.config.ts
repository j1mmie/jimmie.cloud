import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: 'inline',
    terserOptions: {
      compress: {
        drop_debugger: false, // Prevent removal of debugger
      },
    },
  },
  plugins: [react()],
})
