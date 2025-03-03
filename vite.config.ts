import { resolve } from 'node:path';
import nodeExternals from 'rollup-plugin-node-externals';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/private-ip-address.ts'),
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    dts({
      exclude: ['**/__tests__/**'],
    }),
    {
      ...nodeExternals(),
      enforce: 'pre',
      apply: 'build',
    },
  ],
  test: {
    globals: true,
  },
});
