<template>
    <div class="flex mi-select-input" :style="{ width: `${width}px` }">
        <mi-select v-if="hasSelect" v-model="sValue" :width="`${selectWidth}px`" :data="selectList" @change="selectChange"></mi-select>

        <el-input
            v-model="iValue"
            :placeholder="_placeholder"
            size="small"
            clearable
            :class="['flex-auto', 'self-input', hasSelect ? 'self-input-prepend' : '']"
            @clear="clear"
            @keyup.enter.native="handleChange"
        >
            <el-button slot="append" icon="el-icon-search" size="small" @click="handleChange"></el-button>
        </el-input>
    </div>
</template>

<script>
export default {
    name: 'MiSelectInput',
    componentsName: 'MiSelectInput',
    props: {
        // 单搜索框传入字符串：数据框值，双搜索框传入数组 [下拉框值，输入框值]
        value: {
            type: [Array, String],
            require: true,
            default: function () {
                return ''
            }
        },
        selectWidth: {
            // 筛选框宽度
            type: [Number, String],
            default: 132
        },
        width: {
            // 组件整体宽度
            type: [Number, String],
            default: 321
        },
        placeholder: {
            type: String,
            require: false,
            default: ''
        },
        selectList: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    data() {
        return {}
    },
    async fetch() {},
    computed: {
        sValue: {
            get() {
                if (!this.hasSelect) {
                    return ''
                }
                return this.value[0]
            },
            set(val) {
                this.$emit('input', [val, this.value[1]])
            }
        },
        iValue: {
            get() {
                if (!this.hasSelect) {
                    return this.value
                }
                return this.value[1]
            },
            set(val) {
                if (!this.hasSelect) {
                    this.$emit('input', val)
                } else {
                    this.$emit('input', [this.value[0], val])
                }
            }
        },
        hasSelect() {
            return this.selectList.length
        },
        _placeholder() {
            if (!this.hasSelect) {
                return this.placeholder
            } else {
                const target = this.selectList.find(item => item.value === this.sValue)
                return `请输入${target?.label}进行搜索`
            }
        }
    },
    methods: {
        handleChange() {
            if (this.hasSelect) {
                this.$emit('change', [this.sValue, this.iValue])
            } else {
                this.$emit('change', this.iValue)
            }
        },
        selectChange(val) {
            this.iValue = ''
            this.$nextTick(() => {
                this.handleChange()
            })
        },
        clear() {
            this.$nextTick(() => {
                this.handleChange()
            })
        }
    }
}
</script>

<style scoped>
.flex {
    display: flex;
}
.flex-auto {
    flex: 1 1 auto;
}
.mi-select-input {
    height: 34px;
}
/* 调整 placeholder 文字被遮住 */
.mi-select-input >>> .el-input__inner {
    padding-right: 20px;
    padding-left: 10px;
}
/* 调整清除图标被遮住 */
.mi-select-input >>> .el-input__suffix {
    right: 0;
}
.self-input >>> .el-input__inner {
    line-height: 34px;
    height: 34px;
    padding-left: 19px;
    border-color: #ddd !important;
}
.self-input-prepend >>> .el-input__inner {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left-width: 0px;
}
</style>
