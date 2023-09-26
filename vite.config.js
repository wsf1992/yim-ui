import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import babel from '@rollup/plugin-babel';

import path from 'path';

const HOST = "0.0.0.0"
const REPLACEMENT = `${path.resolve(__dirname, './src')}/`

export default (/** if you want to use mode : { mode }*/) => {
  return defineConfig({
    base: "./",
    server: {
      host: HOST,
      port: process.env.PORT,
    },
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: REPLACEMENT,
        },
      ],
    },
    build: {
      target: ['es2015'],
      lib: {
        entry: path.resolve(__dirname, './src/components/main.ts'),
        formats: ['es', 'cjs'],
        fileName: 'main'
      },
      rollupOptions: {
        external: ['vue']
      },
    },
    plugins: [
      babel({babelHelpers: 'bundled'}),
      vue(/* options */),
    ],
  })
}


