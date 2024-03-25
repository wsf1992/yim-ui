<template>
    <div class="mi-content" :style="{ width: width }">
        <div class="mi-content-left">
            <div class="title">{{ title }}</div>
            <div>
                <slot name="left"></slot>
            </div>
        </div>
        <div>
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MiContent',
    props: {
        title: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '277px'
        }
    }
}
</script>

<style scoped>
.mi-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
}
.mi-content-left {
    display: flex;
    align-items: center;
}
.mi-content-left .title {
    font-size: 14px;
    color: #606266;
    line-height: 1;
}
</style>