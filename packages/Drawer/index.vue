<template>
    <el-drawer
        :append-to-body="appendToBody"
        :before-close="beforeClose"
        :close-on-press-escape="closeOnPressEscape"
        :custom-class="customClass"
        :destroy-on-close="destroyOnClose"
        :modal="modal"
        :modal-append-to-body="modalAppendToBody"
        :direction="direction"
        :show-close="showClose"
        :title="title"
        :visible.sync="visibleDrawer"
        :size="size"
        :wrapperClosable="wrapperClosable"
        :withHeader="withHeader"
        ref="drawer"
        @open="$emit('open')"
        @opened="$emit('opened')"
        @close="$emit('close')"
        @closed="$emit('closed')"
    >
        <template v-slot:title>
            <slot name="title"></slot>
        </template>
        <slot></slot>
    </el-drawer>
</template>

<script>
export default {
    name: 'MiDrawer',
    inheritAttrs: false,
    computed: {
        visibleDrawer: {
            get() {
                return this.visible
            },
            set(val) {
                this.$emit('update:visible', val)
            }
        }
    },
    props: {
        appendToBody: Boolean,
        beforeClose: Function,
        closeOnPressEscape: {
            type: Boolean,
            default: true
        },
        customClass: String,
        destroyOnClose: Boolean,
        modal: {
            type: Boolean,
            default: true
        },
        modalAppendToBody: {
            type: Boolean,
            default: true
        },
        direction: {
            type: String,
            default: 'rtl'
        },
        showClose: {
            type: Boolean,
            default: true
        },
        size: {
            type: [String, Number],
            default: '30%'
        },
        title: String,
        visible: {
            type: Boolean,
            default: true
        },
        wrapperClosable: {
            type: Boolean,
            default: true
        },
        withHeader: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        closeDrawer() {
            this.$refs.drawer.closeDrawer()
        }
    }
}
</script>