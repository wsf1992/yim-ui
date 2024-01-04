<template>
    <div class="box" :style="{ height: height }">
        <div class="flex-justify-between flex-cross-bottom">
            <div class="dis-flex flex-cross-center">
                <div class="box-title dis-flex">
                    {{ title }}
                </div>
                <slot name="header-left"></slot>
            </div>
            <slot name="header-right"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'MiCard',
    props: {
        title: {
            type: String,
            default: 'title'
        },
        height: {
            type: String,
            default: 'auto'
        }
    }
}
</script>
<style scoped>
.box {
    background: #ffffff;
    box-shadow: 2px 4px 20px 0px rgba(150, 150, 150, 0.3);
    border-radius: 6px;
    border: 1px solid #edeef0;
    padding: 30px;
}
.box-title {
    font-size: 20px;
    font-family: NotoSansHans, NotoSansHans;
    font-weight: 400;
    color: #333333;
    line-height: 20px;
}
.box-title::before {
    content: '';
    display: block;
    width: 3px;
    height: 20px;
    background: #229dff;
    margin-right: 6px;
}
.flex-justify-between {
    display: flex;
    justify-content: space-between;
}
.flex-cross-bottom {
    align-items: flex-end;
}
.dis-flex {
    display: flex;
}
.flex-cross-center {
    align-items: center !important;
}
</style>
