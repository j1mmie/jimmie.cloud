import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  build: {
    terserOptions: {
      compress: {
        drop_debugger: false, // Prevent removal of debugger
      },
    },
  },
  plugins: [react()],
})
