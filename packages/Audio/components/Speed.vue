<template>
    <popover-select v-model="speed" :data="speedData" class="m-l-12"></popover-select>
</template>

<script>
import PopoverSelect from './PopoverSelect.vue'

export default {
    name: 'MiAudioSpeed',
    inject: ['audioElement'],
    props: {
        defaultValue: {
            type: Number,
            default: 1
        },
    },
    components: {
        PopoverSelect
    },
    data() {
        return {
            speed: 1,
            speedData: [
                { label: '0.5X', value: 0.5 },
                { label: '1.0X', value: 1 },
                { label: '1.5X', value: 1.5 },
                { label: '2.0X', value: 2 }
            ]
        }
    },
    watch: {
        speed: {
            handler() {
                this.audioElement.playbackRate = this.speed
            },
            immediate: true
        }
    },
    mounted() {
        this.speed = Number(this.defaultValue)
    }

}
</script>