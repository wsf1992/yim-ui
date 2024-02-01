<template>
    <div class="page-container flex-dir-column bg-fff" :class="[basePageContainerClass]">
        <!-- 本页title -->
        <div v-if="!noHeader" class="cr-91A1A9 fz-18 fw-500 l-h-1 page-header">
            <slot name="header"></slot>
        </div>
        <div class="flex flex-dir-column flex-auto">
            <!-- 第一行 -->
            <div class="flex-auto over-auto position-re">
                <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0">
                    <slot name="default"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiBasePage',
    props: {
        noHeader: {
            type: Boolean,
            default: function () {
                return false
            }
        },
        basePageContainerClass: {
            type: String,
            default: function () {
                return ''
            }
        }
    },
    data() {
        return {}
    },
    created() {},
    methods: {}
}
</script>
<style scoped>
.page-container {
    height: 100%;
    overflow-y: hidden;
    box-sizing: border-box;
}
.page-header {
    border-bottom: 1px solid #edeef0;
    min-height: 20px;
    background-color: #fff;
    padding: 31px 0 17px;
    margin: 0 40px;
}
.h-100pre {
    height: 100%;
}
.flex-dir-column {
    display: flex;
    flex-direction: column;
}
.bg-fff {
    background-color: #fff;
}
.cr-91A1A9 {
    color: #91a1a9;
}
.fz-18 {
    font-size: 18px;
}
.fw-500 {
    font-weight: 500;
}
.l-h-1 {
    line-height: 1;
}
.flex {
    display: flex;
}
.flex-auto {
    flex: 1 1 auto;
}
.over-auto {
    overflow: auto;
}
.position-re {
    position: relative;
}
</style>
