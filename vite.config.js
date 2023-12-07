import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), WindiCSS()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true
  }
})
