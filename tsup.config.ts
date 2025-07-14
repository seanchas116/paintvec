import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  treeshake: true,
  splitting: false,
  outDir: 'dist',
  target: 'es2020',
  external: [],
  noExternal: [],
  platform: 'neutral',
  shims: false,
})