<template>
    <el-checkbox :label="value" :disabled="disabled" v-model="isCheck">
        <slot>{{ label }}</slot>
    </el-checkbox>
</template>

<script>
export default {
    name: 'MiExOption',
    componentsName: 'MiExOption',
    inject: ['export'],
    props: {
        label: [String, Number],
        value: [String, Number],
        disabled: Boolean
    },
    data() {
        return {}
    },
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root,
                name = parent.$options.componentsName
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent
                if (parent) {
                    name = parent.$options.componentsName
                }
            }
            if (parent) {
                parent.$emit.call(parent, eventName, params)
            }
        }
    },
    computed: {
        isCheck() {
            return this['export'].form.field.includes(this.value)
        }
    },
    created() {
        this['export'].options.push(this)
    },
    destroyed() {
        this['export'].optionsDestroty(this['export'].options.indexOf(this))
    }
}
</script>