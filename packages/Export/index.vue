<template>
    <mi-dialog :title="title" :width="dialogWidth" :before-close="closeHandle" v-model="visible">
        <el-form label-position="right" ref="form" :rules="rules" :model="form" @submit.native.prevent class="mi-export" style="padding: 30px 26px 21px 0px">
            <el-form-item label="文件名称" label-width="104px" prop="name">
                <el-input class="input-34 input-w-287" v-model.trim="form.name" maxlength="50"></el-input>
            </el-form-item>

            <el-form-item label="导出数据" label-width="104px" prop="type">
                <el-radio v-model="form.type" label="1">{{ selectAllName }}</el-radio>
                <el-radio v-show="currSelectShow" v-model="form.type" label="2" :disabled="selectLines.length == '0' ? true : false">{{ currSelectName }}</el-radio>
            </el-form-item>

            <el-form-item label="导出字段" label-width="104px" prop="field" v-if="fieldShow">
                <div class="field-box">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="f-l" style="margin-left: 16px; margin-right: 14px">全选</el-checkbox>
                    <el-checkbox-group v-model="form.field" @change="handleCheckedChange" class="field-list">
                        <slot></slot>
                    </el-checkbox-group>
                </div>
            </el-form-item>
        </el-form>
        <div class="flex-justify-center form-footer">
            <el-button size="small" @click="closeHandle" :loading="btnLoading">取 消</el-button>
            <el-button size="small" type="primary" @click="saveHandle" :loading="btnLoading" class="mar-l-20">确认导出</el-button>
        </div>
    </mi-dialog>
</template>

<script>
export default {
    name: 'MiExport',
    componentsName: 'MiExport',
    provide() {
        return {
            export: this
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        selectFields: {
            //当前选中的的字段，若列表不可配置则不需要传入
            type: Array,
            default: function () {
                return []
            }
        },
        selectLines: {
            //选中的行
            type: Array,
            default: function () {
                return []
            }
        },
        currSelectShow: {
            //是否展示 ---  导出当前选择
            type: Boolean,
            default: true
        },
        selectAllName: {
            //"导出全部筛选"  ------文字提示
            type: String,
            default: '导出全部筛选'
        },
        currSelectName: {
            //"导出当前选择"   ----文字提示
            type: String,
            default: '导出当前选择'
        },
        dialogWidth: {
            type: String,
            default: '755px'
        },
        loading: {
            type: Boolean,
            default: false
        },
        fileName: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: '导出配置'
        },
        fieldShow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            form: {
                name: '',
                type: '1',
                field: []
            },
            checkAll: true,
            isIndeterminate: true,
            rules: {
                name: [
                    {
                        required: true,
                        message: '文件名不能为空',
                        trigger: 'blur'
                    },
                    {
                        min: 1,
                        max: 50,
                        message: '请输入1-50个字符',
                        trigger: 'blur'
                    }
                ],
                field: [
                    {
                        type: 'array',
                        required: true,
                        message: '请至少选择一个字段',
                        trigger: 'blur'
                    }
                ]
            },
            options: []
        }
    },
    watch: {
        visible(n) {
            if (n) {
                this.visibleTrue()
            } else {
                this.visibleFalse()
            }
        }
    },
    methods: {
        getRandom(len = 4) {
            const data = len === '4' ? '0123456789qwertyuioplkjhgfdsazxcvbnm' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            let retStr = ''
            for (let i = 0; i < len; i++) {
                const index = Math.floor(Math.random() * 35)
                retStr += data.substr(index, 1)
            }
            return retStr
        },
        getCurrentDate() {
            const date = new Date()
            const year = date.getFullYear()
            const month = (date.getMonth() + 1).toString().padStart(2, '0') // Months are 0-based in JavaScript
            const day = date.getDate().toString().padStart(2, '0')
            return `${year}${month}${day}`
        },
        closeHandle() {
            this.visible = false
        },
        saveHandle() {
            //确认导出
            this.$refs['form'].validate(valid => {
                if (valid) {
                    const sortFields = this.options.filter(v => this.form.field.includes(v.value)).map(v => v.value)

                    this.$emit('submit', {
                        name: this.form.name,
                        type: this.form.type,
                        field: sortFields
                    })
                    this.btnLoading = true
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        visibleTrue() {
            //打开执行的方法
            this.btnLoading = false
            //设置文件名称
            this.form.name = `${this.fileName}_${this.getCurrentDate()}_${this.getRandom()}`

            //设置选中字段
            if (this.selectFields.length) {
                this.$nextTick(() => {
                    this.form.field = this.options.filter(v => v.disabled || this.selectFields.includes(v.value)).map(v => v.value)
                    if (this.selectFields.length == this.options.length) {
                        this.isIndeterminate = false
                    }
                })
            } else {
                this.$nextTick(() => {
                    this.form.field = this.options.map(v => v.value)
                    this.isIndeterminate = false
                })
            }
        },
        visibleFalse() {
            //关闭执行的方法
            this.checkAll = true
            this.isIndeterminate = true
            this.btnLoading = false
            setTimeout(() => {
                this.$refs['form'].resetFields()
            }, 500)
        },
        handleCheckAllChange(val) {
            const disabledFields = this.options.filter(v => v.disabled).map(v => v.value)

            this.form.field = val ? this.options.map(v => v.value) : disabledFields
            if (!val) {
                if (disabledFields.length === 0) {
                    this.isIndeterminate = false
                } else {
                    this.isIndeterminate = true
                }
            } else {
                this.isIndeterminate = false
            }
        },
        handleCheckedChange(value) {
            const checkedCount = value.length
            this.checkAll = checkedCount === this.options.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length
        }
    },
    computed: {
        visible: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        },
        btnLoading: {
            get() {
                return this.loading
            },
            set(val) {
                this.$emit('update:loading', val)
            }
        }
    }
}
</script>

<style scoped>
.input-w-287 {
    width: 287px;
}
.mi-export >>> .el-checkbox {
    width: 120px;
    margin-right: 14px !important;
    overflow: ellipsis;
}
.field-list {
    background: #f7f7f7;
    border-radius: 2px;
}
.field-list >>> .el-checkbox {
    margin-left: 16px;
}
.field-list >>> .el-checkbox .el-checkbox__label {
    max-width: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: text-top;
}
.f-l {
    float: left;
}
.mi-export >>> .el-form-item__label {
    padding: 0 20px 0 0 !important;
    font-family: NotoSansHans-Regular;
    font-size: 14px;
    color: #91a1a9;
    letter-spacing: 0;
}
.mi-export >>> .el-dialog__title {
    font-family: NotoSansHans-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
}
.mi-export >>> .el-form-item {
    margin-bottom: 9px;
}
.mi-export >>> .el-radio + .el-radio {
    margin-left: 64px;
}
.input-34 >>> .el-input__inner {
    height: 34px;
    line-height: 34px;
}
.mar-l-20 {
    margin-left: 20px;
}
.form-footer {
    padding-top: 11px;
    padding-bottom: 12px;
    border-top: 1px solid #f2f2f2;
    margin-top: 6px;
}
.flex-justify-center {
    display: flex;
    justify-content: center;
}
.field-box {
    max-height: 400px;
    overflow-y: auto;
}
</style>
