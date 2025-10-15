import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GDBComponentLibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
        assetFileNames: 'style.css',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    cssCodeSplit: false,
  },
})
