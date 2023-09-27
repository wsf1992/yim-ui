<template>
    <div class="dis-i-b ver-ali-mid">
        <el-popover placement="bottom-start" trigger="click" v-model="show_dropdown" width="230">
            <template slot="reference">
                <div :class="['display-box', 'my-select','select-size-' +size, {'theme-color':themeColor, 'not-click': disabled}]" :style="{'width' : width }">
                    <div class="display-content" v-if="hardReset">{{selctLabel}}</div>
                    <i class="display-icon el-icon-caret-bottom" v-show="!displayText"></i>
                </div>
            </template>
            <div :class="{'hide' : !show_dropdown}">
                <div class="padd-all-10" v-if="isQuery">
                    <el-input class="input-34" v-model.trim="query_" v-bind="$attrs"></el-input>
                </div>
                <div>
                    <div style="height:260px;overflow:auto;">
                        <div v-show="!query_">
                            <div class="content_option" :key="alldeFault_.key" @click.stop="handler(alldeFault_)" v-if="Object.keys(alldeFault).length">
                                <span class="ellipsis" :style="value === alldeFault_.key ? 'color: #229DFF' : 'color: #333'" :title="alldeFault_.label">{{alldeFault_.label}}</span>
                                <i class="el-icon-check" style="color: #229DFF;line-height: 28px;" v-show="value == alldeFault_.key"></i>
                            </div>
                        </div>
                        <div v-for="(item,index) in data_" :key="index">
                            <div class="content_option" :key="item.key" @click.stop="handler(item)">
                                <span class="ellipsis" :style="value === item.key ? 'color: #229DFF' : 'color: #333'" :title="item.label">{{item.label}}</span>
                                <i class="el-icon-check" style="color: #229DFF;line-height: 28px;" v-show="value === item.key"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-popover>
    </div>
</template>

<style scoped>
.display-box {
    border: 1px solid #ddd;
    border-radius: 2px;
    position: relative;
    box-sizing: border-box;
}
.display-box .display-content {
    position: absolute;
    right: 26px;
    left: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.display-box .display-icon {
    position: absolute;
    width: 25px;
    right: 0;
    height: 100%;
    border-left: 1px solid #ddd;
    text-align: center;
}
.select-size-small {
    height: 34px;
}
.select-size-small .display-content {
    line-height: 34px;
}
.select-size-small .display-icon {
    line-height: 32px;
}
.select-size-middle {
    height: 40px;
}
.select-size-middle .display-content {
    line-height: 40px;
}
.select-size-middle .display-icon {
    line-height: 38px;
}
.theme-color {
    color: #91a1a9;
    background-color: #f6f6f6;
}
.content_option {
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
}
.content_option span {
    max-width: 170px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 9px;
}
.content_option:hover {
    background: #e2f2ff;
}
.content_option.active {
    background: #dbebf9;
}
.content_option:hover span,
.content_option.active span {
    color: #229dff !important;
}
.dis-i-b {
    display: inline-block;
}
.ver-ali-mid {
    vertical-align: bottom;
}
.not-click {
    pointer-events: none;
    color: #c0c4cc;
}
.hide {
    display: none;
}
.el-form-item.is-error .my-select {
    border-color: #f56c6c;
}
</style>
<script>
export default {
    name: 'YmSelect',
    inheritAttrs: false,
    props: {
        isQuery: {
            //是都需要搜索
            type: Boolean,
            default: false
        },
        dataList: {
            //展示的列表
            type: Array,
            default: function() {
                return []
            }
        },
        alldeFault: {
            //全选的默认Object
            type: Object,
            require: false,
            default: function() {
                return {}
            }
        },
        value: {
            type: [String, Number],
            require: true,
            default: ''
        },
        width: {
            type: String,
            default: '150px'
        },
        themeColor: {
            // 自定义 筛选框颜色：false 为白色，true为灰色
            type: Boolean,
            default: false
        },
        prop: {
            //自定义prop
            type: Object,
            default: function() {
                return { key: 'id', label: 'name' }
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'small'
        }
    },
    data() {
        return {
            show_dropdown: false,
            selctId: '',
            timer: null,
            //以下字段用于和prop字段做区分
            data_: [],
            query_: '',
            loading_: false,
            busy_: false,
            keyValue_: {},
            hardReset: true,
            alldeFault_: {},
            prop_: {}
        }
    },
    watch: {
        query_(n, o) {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.data_ = this.dataList
                    .map(v => ({
                        key: v[this.prop_.key],
                        label: v[this.prop_.label]
                    }))
                    .filter(v => {
                        if (n) {
                            return v.label.indexOf(n) != '-1'
                        } else {
                            return true
                        }
                    })
            }, 300)
        },
        dataList(n, o) {
            if (n) {
                this.get_data()
            }
        }
    },
    methods: {
        handler(item) {
            this.show_dropdown = false
            this.$emit('input', item.key)
            this.$nextTick(() => {
                this.$emit('change', item)
                // 以下代码可以触发  el-form-item 的change 校验
                if(this.$parent) {
                    this.$parent.validate('change')
                }
            })
        },
        getkeyValue(e) {
            //获取 key: value关系表

            //该方法为 keyValue_ 提供新的 指针（解决  keyValue_  发生变化，但是computer 不更新的 问题）
            this.keyValue_ = Object.assign({}, this.keyValue_)

            let type = Object.prototype.toString.call(e)
            if (type === '[object Array]') {
                e.forEach(ele => {
                    this.keyValue_[ele.key] = ele.label
                })
            } else if (type === '[object Object]') {
                this.keyValue_[e.key] = e.label
            }
        },
        reSet() {
            this.hardReset = false
            this.$nextTick(() => {
                this.hardReset = true
            })
        },
        get_alldeFault() {
            if (!Object.keys(this.alldeFault).length) return
            let { key = '', label = '-全选-' } = this.alldeFault
            this.alldeFault_ = { key: key, label: label }
        },
        get_prop() {
            let { key = 'id', label = 'name' } = this.prop
            this.prop_ = { key: key, label: label }
        },
        get_data() {
            this.data_ = this.dataList.map(v => ({
                key: v[this.prop_.key],
                label: v[this.prop_.label]
            }))
            this.getkeyValue(this.data_)
        }
    },
    created() {
        // 自定义变量初始化
        this.get_alldeFault()
        this.get_prop()
        if (Object.keys(this.alldeFault).length) {
            //是否有 全选项
            this.getkeyValue(this.alldeFault_)
        }
        if (this.dataList.length) {
            this.get_data()
        }
    },
    computed: {
        selctLabel: function() {
            return this.keyValue_[this.value]
        }
    }
}
</script>