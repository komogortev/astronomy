// *. 'vitest/config' extends import { defineConfig } from 'vite' (https://www.angularfix.com/2022/05/vitest-defineconfig-does-not-exist-in.html)
// import { defineConfig } from 'vitest/config'
// **. alternative
/// <reference types="vitest" />
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/astronomy/',
  test: {
    reporters: ["json", "verbose"],
    globals: true
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
