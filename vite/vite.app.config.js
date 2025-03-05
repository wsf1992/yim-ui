import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Markdown from 'vite-plugin-md'
import Components from 'unplugin-vue-components/vite'

import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
const REPLACEMENT = `${path.resolve(__dirname, '../src')}/`

export default (/** if you want to use mode : { mode }*/) => {
    return defineConfig({
        mode: 'production',
        base: './',
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
            outDir: 'docs'
        },
        plugins: [
            Components({
                resolvers: [ElementUiResolver()]
            }),
            vue({
                include: [/\.vue$/, /\.md$/]
            }),
            Markdown()
        ]
    })
}
