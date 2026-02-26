import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Sahrdaya-Smart-Kiosk/",   // 👈 must match repo name
})