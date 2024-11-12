<template>
    <el-popover placement="top" :width="popoverWidth" v-model="visible" popper-class="pop-select-class">
        <ul class="popover-select-content">
            <li v-for="it in data" :key="it.value" @click="change(it.value)" :class="[{'active': miValue == it.value}]">{{ it.label }}</li>
        </ul>
        <div slot="reference" class="popover-select-btn" :class="[{ active: visible }]">{{ miLabel }}</div>
    </el-popover>
</template>

<script>
export default {
    name: 'MiPopoverSelect',
    props: {
        value: [String, Number],
        popoverWidth: {
            type: Number,
            default: 34
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            visible: false
        }
    },
    computed: {
        miValue: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        },
        miLabel() {
            return this.data.find(it => it.value === this.miValue)?.label || this.miValue || ''
        }
    },
    methods: {
        change(val) {
            this.miValue = val
            this.visible = false
        }
    }
}
</script>

<style scoped lang="scss">
.popover-select-btn {
    font-family: NotoSansHans, NotoSansHans;
    font-weight: 400;
    font-size: 12px;
    color: #606266;
    line-height: 12px;
    cursor: pointer;

    &:hover,
    &.active {
        color: #409eff;
    }
}

.popover-select-content {
    padding: 0;
    margin: 0;
    list-style: none;
    padding: 11px 0 8px;
    li {
        font-family: NotoSansHans, NotoSansHans;
        font-weight: 400;
        font-size: 12px;
        color: #909299;
        line-height: 12px;
        padding: 4px 0;
        text-align: center;
        cursor: pointer;

        &:hover, &.active {
            color: #409eff;
        }
    }
}
</style>

<style>
.pop-select-class {
    min-width: 10px !important;
    padding: 0px !important
}
</style>