<template>
    <div style="width: 800px">
        <mi-card title="卡片标题" height="200px">
            <div slot="header-left" style="color: red">卡片header左侧自定会议内容</div>
            <div slot="header-right" style="color: green">卡片header右侧自定会议内容</div>
            <p style="color: blue">这里是卡片content1</p>
            <p style="color: blue">这里是卡片content2</p>
        </mi-card>
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
                    label: '选项1',
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
