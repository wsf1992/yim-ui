<template>
    <el-dialog :close-on-click-modal="false" :title="title" :width="width" class="dialog-border ym-dialog" :before-close="closeHandle" :visible.sync="visible" append-to-body top="8vh">
        <slot></slot>
    </el-dialog>
</template>

<script>
export default {
    name: 'MiDialog',
    inheritAttrs: false,
    props: {
        value: Boolean,
        width: {
            type: String,
            default: '500px'
        },
        title: {
            type: String,
            default: 'title'
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
        }
    },
    methods: {
        closeHandle(done) {
            this.$emit('before-close')
            if (typeof done === 'function') {
                done()
            }
        }
    }
}
</script>

<style scoped>
.ym-dialog {
    display: block;
}
.ym-dialog >>> .el-dialog {
    border-radius: 6px;
    box-shadow: 2px 4px 20px 1px rgba(167, 167, 167, 0.35);
}
.ym-dialog >>> .el-dialog__body {
    padding: 0 !important;
}
.ym-dialog >>> .el-dialog__title {
    font-family: NotoSansHans-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
}
</style>

<!-- 
*  该组件用于规范弹窗的样式，使用时只需要在该组件内部插入需要的内容即可
*  使用方法：
*  <base-dialog v-model="visible" width="700px" title="批量设置外呼权限" @before-close="closeHandle">
*      <call-permission @close="visible = false" ref="childrenCom"></call-permission>
*  </base-dialog>
*  说明：
*  1. v-model="visible" 用于控制弹窗的显示与隐藏
*  2. width="700px" 用于控制弹窗的宽度
*  3. title="批量设置外呼权限" 用于控制弹窗的标题
*  4. @before-close="closeHandle" 用于控制弹窗关闭时的回调函数
*  5. <call-permission @close="visible = false" ref="childrenCom"></call-permission> 用于插入弹窗的内容
*  6. @close="visible = false" 用于控制弹窗内部的关闭按钮的回调函数
*  7. ref="childrenCom" 用于控制弹窗内部的关闭按钮的回调函数
*  8. <slot></slot> 用于插入弹窗的内容
 -->
