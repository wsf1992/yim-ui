<template>
    <div>
        <div class="flex flex-cross-center">
            <el-input v-model="fileName" readonly :style="`width:${width}px;`" size="small">
                <el-button size="medium" slot="append" class="fz-14" @click="selectFile" type="primary">选择文件</el-button>
            </el-input>
            <slot></slot>
        </div>
        <p class="mar-t-10" :style="`line-height:normal;color:#C0C4CC;letter-spacing:0;width: ${width}px`">备注：仅支持csv格式，文件大小不超过5M</p>
        <el-upload ref="upload" accept=".csv" action="" :limit="1" :on-change="handleChange" :auto-upload="false" style="display: none">
            <el-button size="medium" type="primary" ref="selectFile"> 选择文件 </el-button>
        </el-upload>
    </div>
</template>

<script>
export default {
    name: 'MiUpload',
    props: {
        value: {
            type: [Object, String],
            default: ''
        },
        width: {
            type: [Number, String],
            default: 320
        }
    },
    data() {
        return {
            fileLise: []
        }
    },
    computed: {
        file: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        },
        fileName() {
            return typeof this.file === 'object' ? this.file.name : this.file
        }
    },
    methods: {
        selectFile() {
            this.$refs.upload.clearFiles()
            this.$refs.selectFile.$el.click()
            this.file = ''
        },
        handleChange(file) {
            this.file = file
            try {
                this.$parent.validate('change')
            } catch (error) {}
        }
    }
}

export const fileValidator = (rule, value, callback) => {
    if (typeof value === 'object') {
        let isCsv = null,
            size = 0
        if (value) {
            let fileExc = value.raw.type.split('/')[1]
            isCsv = fileExc === 'csv'
            size = value.raw.size
        }
        if (value === '') {
            callback(new Error('请上传文件'))
        } else if (!isCsv) {
            callback(new Error('文件格式错误'))
        } else if (size >= 5 * 1024 * 1024) {
            callback(new Error('文件大小不超过5M'))
        } else {
            callback()
        }
    } else {
        if (value === '') {
            callback(new Error('请上传文件'))
        } else {
            callback()
        }
    }
}
</script>

<style scoped>
.flex {
    display: flex;
}
.flex-cross-center {
    align-items: center;
}
.fz-14 {
    font-size: 14px;
}
.mar-t-10 {
    margin-top: 10px;
}
</style>
