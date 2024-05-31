import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/users': 'http://localhost:5000'
    },

    host: "0.0.0.0"
  },
  plugins: [react()],
})
