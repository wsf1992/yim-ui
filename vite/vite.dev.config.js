import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import commonjs from '@rollup/plugin-commonjs'
import Markdown from 'vite-plugin-md'
import path from 'path'
import Components from 'unplugin-vue-components/vite'

import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
const HOST = '0.0.0.0'
const REPLACEMENT = `${path.resolve(__dirname, '../src')}/`
export default (/** if you want to use mode : { mode }*/) => {
    return defineConfig({
        base: '/',
        root: path.resolve(__dirname, '../'),
        server: {
            open: true,
            host: HOST,
            port: process.env.PORT
        },
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
            Components({
                resolvers: [ElementUiResolver()],
            }),
            commonjs(),
            vue({
                include: [/\.vue$/, /\.md$/]
            }),
            Markdown(),
        ]
    })
}
