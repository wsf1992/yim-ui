<template>
    <div class="relative">
        <el-popover
            v-model="visible"
            placement="bottom-start"
            width="200"
            trigger="click"
            :popper-class="`padd-0 ${popperClass}`"
            @after-leave="popLeave"
            :appendToBody="false"
        >
            <ul class="p-t-10 p-b-10">
                <el-input v-if="isQuery" v-model="query" :placeholder="placeholder" class="search-input" clearable size="small"></el-input>
                <div id="popoverContent" ref="popoverContent" v-infinite-scroll="load_l_d" class="drop-ul" infinite-scroll-distance="10">
                    <li v-for="item in l_d_s" :key="item.value" class="flex flex-cross-center" :class="{ active: item.value === _value }" @click="handleOptionClick(item)">
                        <span class="flex-auto li-label" :title="item.label">{{ item.label }}</span>
                        <i v-if="item.value === _value" class="el-icon-check mar-l-10"></i>
                    </li>
                </div>
            </ul>
            <template slot="reference">
                <div :class="['flex', 'flex-cross-center', 'select-box', { 'is-focus': visible, 'bg-white': whiteTheme }]" :style="{ width: width }">
                    <div class="flex-auto display-label fz-13">
                        {{ label }}
                    </div>
                    <i class="el-icon-arrow-down caret" :class="{ trans: visible }"></i>
                </div>
            </template>
        </el-popover>
    </div>
</template>

<script>
export default {
    name: 'MiSelect',
    componentsName: 'MiSelect',
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        isQuery: Boolean,
        placeholder: {
            type: String,
            require: false,
            default: ''
        },
        width: {
            type: String,
            default: '132px'
        },
        data: {
            required: true,
            type: Array,
            default: () => []
        },
        popperClass: {
            type: String,
            default: ''
        },
        whiteTheme: {
            type: Boolean,
            default: false
        },
        defaultValue: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            query: '',
            visible: false,
            l_d_s: [],
            step: 10,
            setTop0: false
        }
    },
    computed: {
        _value: {
            get: function () {
                return this.value || this.defaultValue || ''
            },
            set: function (val) {
                this.$emit('input', val)
                this.$nextTick(() => {
                    this.$emit('change', val)
                })
            }
        },
        label() {
            const target = this.data.find(item => item.value === this._value)
            if (target) {
                return target.label
            } else {
                return this._value
            }
        },
        l_d() {
            if (this.query) {
                return [...this.data].filter(v => v.label.includes(this.query))
            }
            return [...this.data]
        }
    },
    watch: {
        l_d: {
            handler() {
                this.l_d_s = []
                this.load_l_d()
            },
            immediate: true
        },
        query() {
            this.scrollTop()
        },
        visible(n) {
            if (n) {
                if (this.setTop0) {
                    this.scrollTop()
                }
            }
        }
    },
    methods: {
        handleOptionClick(option) {
            this._value = option.value
            this.visible = false
        },
        popLeave() {
            // 清空搜索， scrollTop = 0 失败，实际是 40
            if (this.query) {
                this.setTop0 = true
            } else {
                this.setTop0 = false
            }
            this.query = ''
        },
        load_l_d() {
            const start = this.l_d_s.length
            const end = Math.min(start + this.step, this.l_d.length)
            ;[...this.l_d].slice(start, end).forEach(e => {
                this.l_d_s.push(e)
            })
        },
        scrollTop() {
            this.$nextTick(() => {
                const popoverContent = this.$refs.popoverContent
                if (popoverContent) {
                    popoverContent.scrollTop = 0
                }
            })
        }
    }
}
</script>
<style>
.padd-0 {
    padding: 0px !important;
}
</style>
<style scoped>
.select-box {
    border: 1px solid #ddd;
    height: 34px;
    color: #909399;
    background-color: #f5f7fa;
    box-sizing: border-box;
    border-radius: 2px;
}
.bg-white {
    background-color: #fff !important;
}
.select-box.is-focus {
    /* border-color: #409eff; */
}
.caret {
    display: block;
    width: 26px;
    text-align: center;
    color: #c0c4cc;
    font-size: 14px;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 34px;
    transition: transform 0.3s;
    flex: none;
}
.trans {
    transform: rotateZ(180deg);
}
.drop-ul {
    max-height: 300px;
    min-width: 160px;
    overflow-y: auto;
}
.display-label {
    padding-left: 15px;
    padding-right: 6px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 34px;
    border-right: 1px solid #ddd;
}
.select-box.is-focus .display-label {
    /* border-right-color: #409eff; */
}
.search-input {
    margin: 0 10px 10px;
    width: unset;
}
.input-34 .el-input__inner {
    height: 34px;
    line-height: 34px;
}
li {
    line-height: 34px;
    color: #333333;
    padding-left: 16px;
    padding-right: 10px;
}
li:hover {
    background-color: #e2f2ff;
    color: #229dff;
}
.li-label {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
li.active {
    color: #229dff;
}
.p-t-10 {
    padding-top: 10px;
}
.p-b-10 {
    padding-bottom: 10px;
}
.flex {
    display: flex;
}
.flex-cross-center {
    align-items: center !important;
}
.flex-auto {
    flex: 1 1 auto;
}
.relative {
    position: relative;
}
</style>
