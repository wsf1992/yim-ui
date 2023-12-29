<template>
    <base-dia-log v-model="visible" title="导出配置" :width="dialogWidth" :before-close="closeHandle" class="export-dialog">
        <el-form ref="exportForm" label-position="right" :rules="exportRule" :model="exportForm" style="padding: 30px 26px 21px 0">
            <el-form-item label="文件名称" label-width="104px" prop="name">
                <el-input v-model.trim="exportForm.name" class="input-w-287" maxlength="50" size="small"></el-input>
            </el-form-item>

            <el-form-item label="导出数据" label-width="104px" prop="type">
                <el-radio v-model="exportForm.type" label="1">{{ selectAllName }}</el-radio>
                <el-radio v-show="currSelectShow" v-model="exportForm.type" label="2" :disabled="selectLines.length === 0 ? true : false">{{ currSelectName }}</el-radio>
            </el-form-item>

            <el-form-item v-if="fieldShow" label="导出字段" label-width="104px" prop="field">
                <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" class="f-l" @change="handleCheckAllChange">全选</el-checkbox>
                <el-checkbox-group v-model="exportForm.field" class="field-list" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="field in allFields" :key="field.prop" :label="field.prop" :disabled="field.disabled">
                        {{ field.label }}
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
        </el-form>

        <div class="flex-justify-center form-footer">
            <el-button size="small" @click="closeHandle">取消</el-button>
            <el-button size="small" type="primary" class="mar-l-20" :loading="btnLoading" @click="saveHandle">确认导出</el-button>
        </div>
    </base-dia-log>
</template>

<script>
import dayjs from 'dayjs'

export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        currColumn: {
            // 当前展示的字段，若列表不可配置则不需要传入
            type: Array,
            default: function () {
                return []
            }
        },
        selectLines: {
            // 选中的行
            type: Array,
            default: function () {
                return []
            }
        },
        fieldShow: {
            // 是否展示导出字段
            type: Boolean,
            default: true
        },
        currSelectShow: {
            // 是否展示 ---  导出当前选择
            type: Boolean,
            default: true
        },
        selectAllName: {
            // "导出全部筛选"  ------文字提示
            type: String,
            default: '导出全部筛选'
        },
        currSelectName: {
            // "导出当前选择"   ----文字提示
            type: String,
            default: '导出当前选择'
        },
        postMsg: {
            type: Object,
            default: function () {
                return {}
            }
        },
        dialogWidth: {
            type: String,
            default: '760px'
        },
        allFields: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    data() {
        return {
            exportForm: {
                name: '',
                type: '1',
                field: []
            },
            useData: [],
            checkAll: true,
            isIndeterminate: true,
            exportRule: {
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
            }
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
    },
    watch: {
        visible(newVal) {
            if (newVal) {
                this.visibleTrue()
            } else {
                this.visibleFalse()
            }
        }
    },
    methods: {
        getRandom(len) {
            len = len || 4
            const data = len === '4' ? '0123456789qwertyuioplkjhgfdsazxcvbnm' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            let retStr = ''
            for (let i = 0; i < len; i++) {
                const index = Math.floor(Math.random() * 35)
                retStr += data.substr(index, 1)
            }
            return retStr
        },
        closeHandle() {
            // 关闭弹窗
            this.visible = false
        },
        saveHandle() {
            // 确认导出
            this.$refs.exportForm.validate(valid => {
                if (valid) {
                    if (this.exportForm.field && this.exportForm.field.length) {
                        this.exportForm.field = this.allFields.filter(v => this.exportForm.field.includes(v.prop)).map(v => v.prop)
                    }
                    this.$emit('callbackHandle', this.exportForm) // 执行回调
                } else {
                    return false
                }
            })
        },
        visibleTrue() {
            // 打开执行的方法
            this.exportForm.type = '1'

            this.useData = this.postMsg

            // 设置文件名称
            this.exportForm.name = `${this.useData.Title}_${dayjs().format('YYYYMMDD')}_${this.getRandom()}`

            // 设置选中字段
            if (this.useData.isConf) {
                if (this.currColumn.length === '0') {
                    console.log('未传入当前展示字段：currColumn')
                } else {
                    this.exportForm.field = this.currColumn
                    if (this.currColumn.length === this.allFields.length) {
                        this.isIndeterminate = false
                    }
                }
            } else {
                this.exportForm.field = this.allFields.map(v => v.prop)
                this.isIndeterminate = false
            }
        },
        visibleFalse() {
            // 关闭执行的方法
            this.checkAll = true
            this.isIndeterminate = true
            setTimeout(() => {
                this.$refs.exportForm.resetFields()
            }, 500)
        },
        handleCheckAllChange(val) {
            const curNoCheField = this.allFields.filter(v => v.disabled).map(v => v.prop)
            this.exportForm.field = val ? this.allFields.map(v => v.prop) : curNoCheField
            if (!val) {
                if (curNoCheField.length === '0') {
                    this.isIndeterminate = false
                } else {
                    this.isIndeterminate = true
                }
            } else {
                this.isIndeterminate = false
            }
        },
        handleCheckedCitiesChange(value) {
            const checkedCount = value.length
            this.checkAll = checkedCount === this.allFields.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.allFields.length
        }
    }
}
</script>

<style scoped>
.input-w-287 {
    width: 287px;
}

.field-list {
    background: #f7f7f7;
    border-radius: 2px;
}
.field-list .el-checkbox:nth-child(1) {
    margin-left: 30px;
}
.field-list .el-checkbox:nth-child(4n) {
    margin-left: 16px;
}
.f-l {
    float: left;
    margin-left: 16px;
}

.form-footer {
    padding-top: 11px;
    padding-bottom: 12px;
    border-top: 1px solid #f2f2f2;
    margin-top: 6px;
}
.export-dialog >>> .el-dialog__body {
    padding: 0 !important;
}

.export-dialog .el-checkbox {
    width: 120px;
}
.export-dialog >>> .el-form-item__label {
    padding: 0 20px 0 0 !important;
    font-family: NotoSansHans-Regular;
    font-size: 14px;
    color: #91a1a9;
    letter-spacing: 0;
}
.export-dialog >>> .el-form-item {
    margin-bottom: 9px;
}
.export-dialog >>> .el-radio + .el-radio {
    margin-left: 64px;
}
</style>
