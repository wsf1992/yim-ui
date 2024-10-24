<template>
    <popover-select v-model="tract" :data="tractData" :popoverWidth="66"></popover-select>
</template>

<script>
import PopoverSelect from './PopoverSelect.vue'

export default {
    name: 'MiAudioTract',
    inject: ['audioElement'],
    props: {
        defaultValue: {
            type: String,
            default: 'all'
        },
        tractData: {
            type: Array,
            default: () => [
                { label: '全部声道', value: 'all' },
                { label: '坐席声道', value: 'left' },
                { label: '客户声道', value: 'right' }
            ]
        }
    },
    components: {
        PopoverSelect
    },
    data() {
        return {
            tract: 'all',
            context: new AudioContext(),
            lGain: null, // 左声道
            rGain: null, // 右声道
        }
    },
    watch: {
        tract: {
            handler() {
                this.tractChange()
            },
            immediate: true
        }
    },
    methods: {
        init() {
            const context = this.context
            var media = context.createMediaElementSource(this.audioElement), // 从元素创建媒体节点
                splitter = context.createChannelSplitter(2), // 分离器
                merger = context.createChannelMerger(2) // 合成器

            this.lGain = context.createGain() // 左声道
            this.rGain = context.createGain() // 右声道
            this.lGain.gain.value = 1
            this.rGain.gain.value = 1
            media.crossOrigin = 'anonymous'
            media.connect(splitter)
            splitter.connect(this.lGain, 0)
            splitter.connect(this.rGain, 1)
            this.lGain.connect(merger, 0, 0)
            this.rGain.connect(merger, 0, 1)
            merger.connect(this.context.destination) //音频输出
        },
        tractChange() {
            if (!this.lGain) return
            if (this.tract === 'all') {
                this.lGain.gain.value = 1
                this.rGain.gain.value = 1
            } else if (this.tract === 'left') {
                this.lGain.gain.value = 1
                this.rGain.gain.value = 0
            } else if (this.tract === 'right') {
                this.lGain.gain.value = 0
                this.rGain.gain.value = 1
            }
            this.context.resume()
        }
    },
    mounted() {
        this.audioElement.addEventListener('canplay', () => {
           this.tractChange()
        })
        this.audioElement.addEventListener('error', () => {
            this.lGain = null
            this.rGain = null
        })
        this.init()
        this.tract = Number(this.defaultValue)
    }
}
</script>