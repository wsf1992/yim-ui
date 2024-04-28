<template>
    <el-popover :placement="placement" :width="width" trigger="manual" v-model="visible" ref="ymPopover" popper-class="ym-popover">
        <slot></slot>
        <template v-slot:reference>
            <slot name="reference"></slot>
        </template>
    </el-popover>
</template>

<style scoped>
.ym-popover {
    background: #ffffff;
    box-shadow: 2px 4px 20px 1px rgba(167, 167, 167, 0.35);
    border-radius: 6px;
}
</style>

<script>
export default {
    name: 'MiPopover',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: '500'
        },
        placement: {
            type: String,
            default: 'bottom'
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
    watch: {
        value: {
            handler(val) {
                this.handleValueChange(val)
            }
        }
    },
    methods: {
        handleValueChange(val) {
            if (val) {
                const pop = this.$refs.ymPopover
                pop.referenceElm = window.event.target
                pop.createPopper()
                pop.doShow()
            } else {
                this.doClose()
            }
        },
        doClose(event) {
            try {
                const target = event.target
                const popover = this.$refs.ymPopover.popperElm
                if (!popover.contains(target)) {
                    this.visible = false
                }
            } catch (error) {}
        }
    },
    created() {
        document.addEventListener('click', this.doClose, true)
    },
    destroyed() {
        document.removeEventListener('click', this.doClose, true)
    }
}
</script>
