<template>
    <el-popover placement="top" width="26" v-model="visible" popper-class="pop-select-class">
        <div class="popover-select-volume-content">
            <el-slider v-model="miValue" vertical height="41px" :show-tooltip="false" class="popover-select-volume-slider" @change="valueChange"></el-slider>
            <span class="tips">{{ miValue }}</span>
        </div>
        <div slot="reference" class="popover-select-volume" :class="[{ active: visible }]"></div>
    </el-popover>
</template>

<script>
export default {
    name: 'MiAudioVolume',
    inject: ['audioElement'],
    props: {
        defaultValue: {
            type: Number,
            default: 100
        }
    },
    data() {
        return {
            visible: false,
            miValue: 100
        }
    },
    watch: {
        miValue: {
            handler(val) {
                this.audioElement.volume = val / 100
            },
            immediate: true
        }
    },
    methods: {
        valueChange() {
            this.visible = false
        }
    },
    mounted() {
        this.miValue = this.defaultValue
    }
}
</script>

<style scoped lang="scss">
.popover-select-volume {
    width: 12px;
    height: 12px;
    background-image: url('../image/icon-volume.png');
    cursor: pointer;

    &:hover,
    &.active {
        background-image: url('../image/icon-volume-active.png');
    }
}
.popover-select-volume-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px 0 3px;

    .tips {
        font-family: NotoSansHans, NotoSansHans;
        font-weight: 400;
        font-size: 8px;
        color: #606266;
        line-height: 8px;
        margin-top: 6px;
    }
}
</style>

<style lang="scss">
.pop-select-class {
    min-width: 10px !important;
    padding: 0px !important;
}
.popover-select-volume-slider {
    .el-slider__button {
        width: 6px;
        height: 6px;
        background-color: #54a8ff;
        border-width: 0px;
    }
     .el-slider__runway {
        width: 4px !important;

        .el-slider__bar {
            width: 4px !important;
        }

        .el-slider__button-wrapper {
            left: -16px !important;
        }
    }
}
</style>