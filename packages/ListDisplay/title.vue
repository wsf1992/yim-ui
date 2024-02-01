<template>
    <div class="list-display-title">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MiListTitle',
    data() {
        return {}
    }
}
</script>
<style scoped>
.list-display-title {
    margin: 15px 0 15px 20px;
    background: #f5f5f5;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    color: #606266;
    text-indent: 25px;
}
</style>
