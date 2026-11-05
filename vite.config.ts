import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: false,
    // Manual chunk splitting: separate vendor code from app code for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split React and React DOM into a vendor chunk
          if (id.includes('react') || id.includes('react-dom')) {
            return 'vendor-react'
          }
          // Split lucide-react icons into a vendor chunk
          if (id.includes('lucide-react')) {
            return 'vendor-lucide'
          }
        },
      },
    },
  },
})
