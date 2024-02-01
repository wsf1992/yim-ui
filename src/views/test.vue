<template>
    <div style="margin-left: 500px">
        <mi-list-display v-model="value" @reset="reset" @submit="submit">
            <mi-list-option label="111" value="a" disabled></mi-list-option>
            <mi-list-title>111</mi-list-title>
            <mi-list-option label="222" value="b"></mi-list-option>
        </mi-list-display>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: ['a']
        }
    },
    methods: {
        reset() {
            console.log('重置')
        },
        submit() {
            console.log('确定')
        }
    }
}
</script>
