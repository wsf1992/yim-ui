<template>
    <div class="mi-pagination-box">
        <div>
            <slot></slot>
        </div>
        <el-pagination
            class="mi-pagination"
            background
            layout="total, slot, prev, pager, next"
            :total="total"
            :page-size="size"
            @current-change="currentHandle"
            @prev-click="$emit('prevClick', $event)"
            @next-click="$emit('nextClick', $event)"
            :current-page="currentPage"
        >
            <el-select size="small" v-model="size" class="mi-pagination-size" @change="sizeChange">
                <el-option label="10条/页" :value="10"> </el-option>
                <el-option label="20条/页" :value="20"> </el-option>
                <el-option label="50条/页" :value="50"> </el-option>
                <el-option label="100条/页" :value="100"> </el-option>
            </el-select>
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'MiPagination',
    props: {
        total: {
            type: Number,
            default: 0
        },
        currentPage: {
            type: Number,
            default: 1
        },
        PageSize: {
            type: Number,
            default: 10
        }
    },
    computed: {
        size: {
            get() {
                return this.PageSize
            },
            set(val) {
                this.$emit('update:PageSize', val)
            }
        }
    },
    methods: {
        currentHandle(val) {
            this.$emit('update:currentPage', val)
            this.$emit('currentChange', val)
        },
        sizeChange(val) {
            this.$emit('sizeChange', val)
        }
    }
}
</script>


<style scoped>
.mi-pagination-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.mi-pagination {
    padding: 0 !important;
}
.mi-pagination >>> .el-pagination__total {
    height: 32px;
    line-height: 32px;
    color: #91a1a9;
}
.mi-pagination >>> .btn-prev,
.mi-pagination >>> .btn-next,
.mi-pagination >>> .el-pager li {
    height: 32px;
    line-height: 32px;
    min-width: 32px;
}
.mi-pagination-size >>> .el-input {
    width: 95px;
}
.mi-pagination-size >>> .el-input .el-input__inner {
    background-color: #f4f4f4;
    color: #838990;
    font-size: 14px;
    line-height: 32px;
    padding-left: 10px;
}
</style>