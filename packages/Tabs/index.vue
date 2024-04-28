<template>
    <div class="mi-tabs-box">
        <el-tabs v-model="active" @tab-click="handleClick" class="mi-tabs">
            <el-tab-pane v-for="it in panes" :key="it.name" :label="it.label" :name="it.name"></el-tab-pane>
        </el-tabs>
        <div>
            <slot name="right"></slot>
        </div>
        <div class="mi-fgx"></div>
    </div>
</template>
<script>
export default {
    name: 'MiTabs',
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        panes: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        active: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
                this.$nextTick(() => {
                    this.$emit('change', val)
                })
            }
        }
    },
    methods: {
        handleClick(tab) {
            this.active = tab.name
        }
    }
}
</script>

<style scoped>
.mi-tabs-box {
    display: flex;
    justify-content: space-between;
    position: relative;
}
.mi-fgx {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #edeef0;
}
.mi-tabs {
    flex: 1 1 auto;
}
.mi-tabs >>> .el-tabs__nav-scroll {
    padding: 0 !important;
}
.mi-tabs >>> .el-tabs__item {
    font-size: 18px;
    color: #91a1a9;
    font-weight: 400 !important;
    line-height: 1;
    height: 32px !important;
}
.mi-tabs >>> .el-tabs__item.is-active {
    color: #229dff;
    font-weight: 500 !important;
}

.mi-tabs >>> .el-tabs__nav-wrap::after {
    height: 0px !important;
}
.mi-tabs >>> .el-tabs__header {
    margin: 0 !important;
}
</style>