import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        products: resolve(__dirname, 'src/pages/products.html'),
        pricing: resolve(__dirname, 'src/pages/pricing.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
        login: resolve(__dirname, 'src/pages/login.html'),
        dashboard: resolve(__dirname, 'src/pages/dashboard.html'),
        docs: resolve(__dirname, 'src/pages/docs.html'),
      }
    }
  },
  server: {
    port: 3000,
    allowedHosts: ['.monkeycode-ai.online'],
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'mixed-decls', 'color-functions', 'global-builtin'],
      },
    },
  },
})
