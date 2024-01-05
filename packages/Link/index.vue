<template>
    <el-link type="primary" class="mi-link">
        <slot>主要链接</slot>
    </el-link>
</template>

<script>
import { Link } from 'element-ui'
export default {
    name: 'MiLink',
    components: {
        ElLink: Link
    }
}
</script>

<style scoped>
.mi-link >>> .el-link--inner {
    line-height: 1 !important;
}
</style>