<template>
    <el-link type="primary">
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