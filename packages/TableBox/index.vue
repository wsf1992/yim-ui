<template>
    <div class="table-box">
        <div class="table-second-box">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiTableBox',
    componentsName: 'MiTableBox'
}
</script>

<style scoped>
.table-box {
    position: relative;
}
.table-second-box {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>