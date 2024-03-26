<template>
    <el-link type="primary" class="mi-link" v-bind="$attrs" @click="$emit('click')" :href="href">
        <slot>主要链接</slot>
    </el-link>
</template>

<script>
export default {
    name: 'MiLink',
    inheritAttrs: false,
    props: {
        href: {
            type: String,
            default: 'javascript:;'
        }
    }
}
</script>

<style scoped>
.mi-link >>> .el-link--inner {
    line-height: 1 !important;
}
</style>