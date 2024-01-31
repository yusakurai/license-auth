import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['@pandacss/dev', '@license-auth/styled-system'],
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [react()],
})
