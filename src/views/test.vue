<template>
    <div>
        <mi-select v-model="sId" :data="list" isQuery placeholder="占位文本"></mi-select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sId: '',
            list: [
                {
                    label: '未选择',
                    value: ''
                },
                {
                    label: '选项11111111111111111111111111111111111111111111111111111111111111111111',
                    value: '1'
                },
                {
                    label: '选项2',
                    value: '2'
                },
                {
                    label: '选项3',
                    value: '3'
                }
            ]
        }
    }
}
</script>
