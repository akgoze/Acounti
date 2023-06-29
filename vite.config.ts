import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents(
      {
        // relative paths to the directory to search for components.
        dirs: ['src/components/UI'],
        // valid file extensions for components.
        extensions: ['vue'],
        // search for subdirectories
        deep: false,
      }
    )
  ],
    
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
