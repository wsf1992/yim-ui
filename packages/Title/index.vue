<template>
    <div class="mi-title">
        <div class="mi-title-left">
            <div class="icon"></div>
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
    name: 'MiTitle',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.mi-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.mi-title-left {
    display: flex;
    align-items: center;
}
.mi-title-left .icon {
    width: 2px;
    height: 14px;
    background-color: #229dff;
    margin-right: 8px;
}
.mi-title-left .title {
    font-size: 16px;
    color: #333;
    line-height: 1;
}
</style>