<template>
    <div class="list-display-options">
        <el-checkbox v-model="isCheck" :label="value" :disabled="disabled">
            <slot>{{ label }}</slot>
        </el-checkbox>
    </div>
</template>
<script>
export default {
    name: 'MiListOption',
    inject: ['mi-list-display'],
    props: {
        label: [String, Number],
        value: [String, Number],
        disabled: Boolean
    },
    data() {
        return {}
    },
    computed: {
        isCheck() {
            return this['mi-list-display'].checked.includes(this.value)
        }
    },
    created() {
        this['mi-list-display'].options.push(this)
    },
    destroyed() {
        this['mi-list-display'].optionsDestroty(this['mi-list-display'].options.indexOf(this))
    },
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root
            let name = parent.$options.componentsName
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent
                if (parent) {
                    name = parent.$options.componentsName
                }
            }
            if (parent) {
                // eslint-disable-next-line no-useless-call
                parent.$emit.call(parent, eventName, params)
            }
        }
    }
}
</script>
<style scoped>
.list-display-options {
    margin: 0 20px;
    padding: 5px 0;
}
</style>
