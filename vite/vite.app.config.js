import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import commonjs from '@rollup/plugin-commonjs'
import Markdown from 'vite-plugin-md'

import path from 'path'
const REPLACEMENT = `${path.resolve(__dirname, '../src')}/`

export default (/** if you want to use mode : { mode }*/) => {
    return defineConfig({
        mode: 'production',
        base: '/',
        root: path.resolve(__dirname, '../'),
        resolve: {
            alias: [
                {
                    find: '@/',
                    replacement: REPLACEMENT
                },
                {
                    find: 'vue',
                    replacement: 'vue/dist/vue.js'
                }
            ],
            extensions: ['.js', '.ts', '.vue', '.json']
        },
        build: {
            target: ['es2015'],
            outDir: 'dist'
        },
        plugins: [
            vue({
                include: [/\.vue$/, /\.md$/]
            }),
            Markdown()
        ]
    })
}
