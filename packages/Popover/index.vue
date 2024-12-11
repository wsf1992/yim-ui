<template>
    <el-popover :placement="placement" :width="width" trigger="manual" v-model="visible" ref="miPopover" popper-class="mi-popover">
        <slot></slot>
    </el-popover>
</template>

<style scoped>
.mi-popover {
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
    data() {
        return {
            frameId: null,
            lastPosition: { x: 0, y: 0 },
            targetElement: null
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
                const pop = this.$refs.miPopover
                pop.referenceElm = window.event.target
                pop.createPopper()
                pop.doShow()
                this.targetElement = window.event.target
                this.lastPosition = this.getPosition(this.targetElement)
                this.checkPosition()
            } else {
                this.doClose()
            }
        },
        doClose(event) {
            try {
                const target = event.target
                const popover = this.$refs.miPopover.popperElm
                if (!popover.contains(target)) {
                    this.visible = false
                }
                cancelAnimationFrame(this.frameId)
            } catch (error) {}
        },
        checkPosition() {
            const currentPosition = this.getPosition(this.targetElement)
            if (
                this.lastPosition.x !== currentPosition.x ||
                this.lastPosition.y !== currentPosition.y
            ) {
                this.updatePopoverPosition()
            }
            this.lastPosition = currentPosition
            this.frameId = requestAnimationFrame(this.checkPosition)
        },
        getPosition(el) {
            const rect = el.getBoundingClientRect()
            return { x: rect.left, y: rect.top }
        },
        updatePopoverPosition() {
            if (this.visible) {
                this.$refs.ymPopover.updatePopper()
            }
        }
    },
    created() {
        document.addEventListener('click', this.doClose, true)
    },
    destroyed() {
        document.removeEventListener('click', this.doClose, true)
        cancelAnimationFrame(this.frameId)
    }
}
</script>
