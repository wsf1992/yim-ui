<template>
    <div class="mi-audio-track-box">
        <!-- 默认范围是 0 - 100 -->
        <el-slider v-model="miValue" style="width: 100px" :show-tooltip="false" class="mi-audio-track-slider" @change="valueChange" @input="valueInput" :disabled="!isCanplay"></el-slider>
        <div class="duration-display">{{ formatTime(currentTime) }}/{{ formatTime(duration) }}</div>
    </div>
</template>

<script>
export default {
    name: 'MiAudioTrackSlider',
    inject: ['audioElement'],
    props: {
        isCanplay: Boolean
    },
    data() {
        return {
            miValue: 0,
            duration: 0,
            currentTime: 0,
            beforePause: false,
            lastValue: 0,
        }
    },
    methods: {
        formatTime(time) {
            let min = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)
            let sec = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60)
            return `${min}:${sec}`
        },
        valueChange() {
            this.beforePause = this.audioElement.paused
            this.audioElement.pause()
            this.$nextTick(() => {
                this.audioElement.currentTime = Math.floor((this.lastValue / 100) * this.audioElement.duration)
                if (!this.beforePause) {
                    this.audioElement.play()
                }
            })
        },
        valueInput(val) {
            if(val.toString().indexOf(".") === -1) {
                this.lastValue = val
            }
            
        }
    },
    mounted() {
        this.audioElement.addEventListener('canplay', () => {
            this.duration = this.audioElement.duration
        })
        this.audioElement.addEventListener('timeupdate', () => {
            this.currentTime = this.audioElement.currentTime
            this.miValue = (this.audioElement.currentTime / this.audioElement.duration) * 100
        })
        this.audioElement.addEventListener('error', () => {
            this.miValue = 0
            this.duration = 0 
            this.currentTime = 0
        })
        this.audioElement.addEventListener('loadstart ', () => {
            this.miValue = 0
            this.duration = 0 
            this.currentTime = 0
        })
    },
    beforeDestroy() {
        this.audioElement.removeEventListener('timeupdate')
    }
}
</script>

<style scoped lang="scss">
.mi-audio-track-box {
    display: flex;
    align-items: center;

    .duration-display {
        line-height: 10px;
        font-family: NotoSansHans, NotoSansHans;
        font-weight: 400;
        font-size: 10px;
        color: #909399;
        margin-left: 10px;
    }
}
</style>

<style lang="scss">
.mi-audio-track-slider {
    .el-slider__button {
        width: 8px;
        height: 8px;
        background-color: #54a8ff;
        border-width: 0px;
    }
    .el-slider__runway {
        height: 4px !important;

        .el-slider__bar {
            height: 4px !important;
        }

        .el-slider__button-wrapper {
            width: 10px;
            height: 10px;
            top: -8px !important;
        }

        &.disabled {
            .el-slider__button {
                background-color: #c0c4cc;
            }
        }
    }
}
</style>
