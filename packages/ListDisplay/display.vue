<template>
    <el-popover v-model="visible" placement="bottom-end" width="240" trigger="click">
        <div slot="reference" title="列表展示" class="list-display-icon pointer">
            <i class="el-icon-setting"></i>
        </div>

        <div class="flex-dir-column bg-fff bor-ra-4">
            <p class="list-display-title">列表展示</p>
            <div style="padding: 10px 0">
                <el-checkbox v-model="checkAll" label="全选" style="margin-left: 20px; margin-bottom: 5px"></el-checkbox>
                <el-checkbox-group v-model="checked">
                    <div class="list-display-box">
                        <slot></slot>
                    </div>
                </el-checkbox-group>
            </div>
            <div class="fgx"></div>
            <div class="list-display-footer">
                <el-button size="medium" @click="reset">重置</el-button>
                <el-button size="medium" type="primary" @click.native="submit">确定</el-button>
            </div>
        </div>
    </el-popover>
</template>

<script>
export default {
    name: 'MiListDisplay',
    provide() {
        return {
            'mi-list-display': this
        }
    },
    props: {
        value: {
            type: Array,
            require: true,
            default: function () {
                return []
            }
        }
    },
    data() {
        return {
            options: [],
            visible: false
        }
    },
    computed: {
        checkAll: {
            get: function () {
                return this.options.length === this.checked.length
            },
            set: function (n) {
                if (n) {
                    this.checked = this.options.map(v => v.value)
                } else {
                    this.checked = this.options.filter(v => v.disabled).map(v => v.value)
                }
            }
        },
        checked: {
            get: function () {
                return [...this.value]
            },
            set: function (val) {
                this.$emit('input', val)
                this.$nextTick(() => {
                    this.$emit('change', val)
                })
            }
        }
    },
    methods: {
        reset() {
            this.visible = false
            this.$emit('reset', this.checked)
        },
        submit() {
            this.visible = false
            this.$emit('submit', this.checked)
        },
        optionsDestroty(index) {
            if (index > 0) {
                const checkValue = this.options[index].value
                this.delChecked(this.checked.indexOf(checkValue))
                this.options.splice(index, 1)
            }
        },
        delChecked(index) {
            if (index > 0) {
                this.checked.splice(index, 1)
            }
        }
    }
}
</script>

<style scoped>
.list-display-icon {
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 2px;
    background-color: #fafafa;
    font-size: 20px;
    color: #abb7bd;
    border: 1px solid #d7dadf;
    box-sizing: border-box;
}
.list-display-icon:hover,
.list-display-icon:active {
    color: #c6e5ff;
    background-color: #229dff;
}
.list-display-title {
    border-bottom: 1px solid #f2f2f2;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    padding: 0 20px;
    color: #333;
    justify-content: space-between;
    font-size: 16px;
}
.list-display-box {
    max-height: 338px;
    overflow: auto;
}
.fgx {
    border-bottom: 1px solid #f2f2f2;
}
.list-display-footer {
    margin: 15px auto;
}
.flex-dir-column {
    display: flex;
    flex-direction: column;
}
.bg-fff {
    background-color: #fff;
}
.bor-ra-4 {
    border-radius: 4px;
}
</style>

<!--
 /**
  * 该组件用于 列表展示
  * value 初始值
  * reset 重置按钮触发
  * submit 确定按钮触发
  *
  * list-display-option 仅支持三个属性 
  * label  展示的值
  * value  选中状态的值
  * disabled   是否不可取消
  */
<base-list-display v-model="value" @reset="reset" @submit="submit">
    <base-list-option label="111" value="111" disabled></base-list-option>
</<base-list-display>
-->
