import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 1805
  },
  // css: {
  //   devSourcemap: true
  // },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@mock': path.resolve(__dirname, './src/_mock')
    }
  }
})
