<template>
    <div class="container" :style="{ 'padding-bottom': paddingBottom, 'border-width': borderWidth }">
        <div class="mar-b-20 flex-justify-between">
            <div class="fz-16 fw-400 cr-424242 l-h-1">
                <slot name="title">{{ title }}</slot>
            </div>
            <slot name="header-right"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiBox',
    props: {
        title: {
            type: String,
            default: 'title'
        },
        paddingBottom: {
            type: String,
            default: '30px'
        },
        borderWidth: {
            type: String,
            default: '1px'
        }
    }
}
</script>

<style scoped>
.container {
    border-bottom: 1px solid #edeef0;
    padding-top: 28px;
}
.mar-b-20 {
    margin-bottom: 20px;
}
.flex-justify-between {
    display: flex;
    justify-content: space-between;
}
.fz-16 {
    font-size: 16px;
}
.fw-400 {
    font-weight: 400;
}
.cr-424242 {
    color: #424242;
}
.l-h-1 {
    line-height: 1;
}
</style>
