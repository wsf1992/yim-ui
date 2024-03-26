<template>
    <el-menu default-active="/" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
        <el-menu-item index="/">
            <span slot="title">组件使用说明</span>
        </el-menu-item>
        <el-submenu index="1">
            <template slot="title">
                <span>基础组件</span>
            </template>
            <el-menu-item-group title="basic">
                <el-menu-item index="/link">文字link</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Form">
                <el-menu-item index="/select">select</el-menu-item>
                <el-menu-item index="/title">title</el-menu-item>
                <el-menu-item index="/content">content</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="others">
                <el-menu-item index="dialog">Dialog</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="page">
                <el-menu-item index="1-3">tab Page</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/export">
            <span slot="title">导出列表</span>
        </el-menu-item>
        <el-menu-item index="/upload">
            <span slot="title">导入文件</span>
        </el-menu-item>
        <el-menu-item index="/listdisplay">
            <span slot="title">列表展示</span>
        </el-menu-item>
        <el-menu-item index="/card">
            <span slot="title">卡片</span>
        </el-menu-item>
        <el-menu-item index="/tabs">
            <span slot="title">标签页</span>
        </el-menu-item>
        <el-menu-item index="/test">
            <span slot="title">测试</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    methods: {
        handleOpen() {},
        handleClose() {}
    }
}
</script>
