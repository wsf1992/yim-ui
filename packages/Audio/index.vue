<template>
    <div class="mi-audio-box flex-cross-center">
        <div class="opear-btn" :class="[paused ? 'play' : 'pause']" @click="playOrPause"></div>
        <track-slider class="m-l-10" :isCanplay="isCanplay" ref="trackslider"></track-slider>
        <speed class="m-l-12"></speed>
        <tract class="m-l-12" v-if="isDual" :tractData="tractData"></tract>
        <volume class="m-l-12"></volume>
        <download class="m-l-12" :customDownLoad="customDownLoad" :downloadFn="downloadFn" @download-error="$emit('download-error')"></download>
    </div>
</template>

<script>
import PopoverSelect from './components/PopoverSelect.vue'
import TrackSlider from './components/TrackSlider.vue'
import Speed from './components/Speed.vue'
import Volume from './components/Volume.vue'
import Tract from './components/Tract.vue'
import Download from './components/Download.vue'

export default {
    name: 'MiAudio',
    provide() {
        return {
            audioElement: this.audioElement
        }
    },
    components: {
        PopoverSelect,
        TrackSlider,
        Speed,
        Volume,
        Tract,
        Download
    },
    props: {
        src: String,
        loop: Boolean,
        autoplay: Boolean,
        beforePlay: {
            type: Function,
            default: () => Promise.resolve()
        },
        tractData: {
            type: Array,
            default: () => [
                { label: '全部声道', value: 'all' },
                { label: '坐席声道', value: 'left' },
                { label: '客户声道', value: 'right' }
            ]
        },
        isDual: Boolean,
        close: Boolean,
        customDownLoad: Boolean,
        downloadFn: Function
    },
    data() {
        return {
            audioElement: new Audio(),
            paused: true,
            isCanplay: false,
            afterPause: false
        }
    },
    watch: {
        src: {
            handler() {
                this.init()
            },
            immediate: true
        },
        close: {
            handler(val) {
                if (val) {
                    this.audioElement.pause()
                }
            },
            immediate: true
        }
    },
    methods: {
        init() {
            if (!this.src) {
                this.isCanplay = false
                this.$refs.trackslider?.initValue()
                return
            }
            this.audioElement.src = this.src
            this.audioElement.crossOrigin = 'anonymous'
            this.audioElement.load()
        },
        async playOrPause() {
            if (!this.isCanplay) {
                await this.beforePlay()
                if (this.audioElement.paused) {
                    this.afterPause = false
                } else {
                    this.afterPause = true
                }
                return
            }
            if (this.audioElement.paused) {
                this.audioElement.play()
            } else {
                this.audioElement.pause()
            }
        },
        refAudioElement() {
            this.$emit('audio-element', this.audioElement)
        },
        onCanplay() {
            this.isCanplay = true
            if (this.afterPause) {
                this.audioElement.pause()
            } else {
                this.audioElement.play()
            }
        },
        onPlay() {
            this.paused = false
        },
        onPause() {
            this.paused = true
        },
        onError(event) {
            this.isCanplay = false
            this.paused = true
            this.$emit('error', event)
        }
    },
    mounted() {
        this.audioElement.loop = this.loop
        this.audioElement.autoplay = this.autoplay
        this.refAudioElement()
        this.audioElement.addEventListener('canplay', this.onCanplay)
        this.audioElement.addEventListener('play', this.onPlay)
        this.audioElement.addEventListener('pause', this.onPause)
        this.audioElement.addEventListener('error', this.onError)
    },
    beforeDestroy() {
        this.audioElement.pause()
        this.audioElement.removeEventListener('canplay', this.onCanplay)
        this.audioElement.removeEventListener('play', this.onPlay)
        this.audioElement.removeEventListener('pause', this.onPause)
        this.audioElement.removeEventListener('error', this.onError)
    }
}
</script>

<style scoped lang="scss">
.mi-audio-box {
    display: inline-flex;
    height: 34px;
    background-color: #fafafa;
    border-radius: 20px;
    padding: 0 13px;

    .opear-btn {
        width: 10px;
        height: 10px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: contain;

        &.play {
            background-image: url('./image/icon-play.png');
        }

        &.pause {
            background-image: url('./image/icon-pause.png');
        }
    }
}
.flex-cross-center {
    align-items: center !important;
}
</style>

<style>
.m-l-12 {
    margin-left: 12px !important;
}
.m-l-10 {
    margin-left: 10px !important;
}
</style>