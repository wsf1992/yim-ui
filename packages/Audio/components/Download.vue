<template>
 <div class="mi-audio-download" @click="download"></div> 
</template>

<script>
export default {
    name: 'Download',
    inject: ['audioElement'],
    methods: {
        download() {
            const a = document.createElement('a')
            if (!this.audioElement.src) return this.$emit('download-error')
            a.href = this.audioElement.src
            a.download = this.audioElement.src
            a.click()
        }
    }
}
</script>

<style scoped lang="scss">
.mi-audio-download {
    width: 12px;
    height: 12px;
    background-image: url('../image/icon-download.png');
    cursor: pointer;

    &:hover {
        background-image: url('../image/icon-download-active.png');
    }
}
</style>