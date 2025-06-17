import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactSWC from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactSWC({
      plugins: [['@swc/plugin-emotion', {}]],
    }),
  ],
})
