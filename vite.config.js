import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pancake-framework/',
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  }
})
