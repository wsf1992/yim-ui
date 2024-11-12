<template>
    <div class="date-times-picker">
        <el-popover placement="bottom" :width="removeTime ? '265' : '460'" trigger="click" v-model="visible" @after-leave="hideHandle">
            <div class="date-times-picker-box">
                <div class="date-times-line">
                    <span class="date-times-line__label flex-none">开始时间：</span>
                    <el-date-picker
                        class="date-times-line__date flex-none"
                        :clearable="false"
                        :picker-options="pickerOptionsProp"
                        @change="changeDateHandle('start')"
                        value-format="yyyy-MM-dd"
                        v-model="date1"
                        type="date"
                        placeholder="选择日期"
                        size="medium"
                    >
                    </el-date-picker>
                    <template v-if="!removeTime">
                        <el-input-number
                            v-model="num1"
                            size="medium"
                            @change="changeTimeHandle('start')"
                            controls-position="right"
                            :min="0"
                            :max="23"
                            class="mar-l-10 date-times-line__ms flex-none"
                        ></el-input-number>
                        <el-input-number
                            v-model="num2"
                            size="medium"
                            @change="changeTimeHandle('start')"
                            controls-position="right"
                            :min="0"
                            :max="59"
                            class="mar-l-10 date-times-line__ms flex-none"
                        ></el-input-number>
                    </template>
                </div>
                <div class="date-times-line">
                    <span class="date-times-line__label flex-none">结束时间：</span>
                    <el-date-picker
                        class="date-times-line__date flex-none"
                        :clearable="false"
                        :picker-options="pickerOptionsProp"
                        @change="changeDateHandle('end')"
                        value-format="yyyy-MM-dd"
                        v-model="date2"
                        type="date"
                        placeholder="选择日期"
                        size="medium"
                    >
                    </el-date-picker>
                    <template v-if="!removeTime">
                        <el-input-number
                            v-model="num3"
                            @change="changeTimeHandle('end')"
                            controls-position="right"
                            :min="0"
                            :max="23"
                            size="medium"
                            class="mar-l-10 date-times-line__ms flex-none"
                        ></el-input-number>
                        <el-input-number
                            v-model="num4"
                            @change="changeTimeHandle('end')"
                            controls-position="right"
                            :min="0"
                            :max="59"
                            size="medium"
                            class="mar-l-10 date-times-line__ms flex-none"
                        ></el-input-number>
                    </template>
                </div>
                <div class="date-times-line__submitbox">
                    <el-button type="primary" size="medium" @click="submit">确定</el-button>
                </div>
            </div>
            <el-button slot="reference" size="small" :class="{ 'theme-color': themeColor }">{{ displayDate }}</el-button>
        </el-popover>
    </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
    name: 'MiDateTimesPicker',
    props: {
        value: Array,
        themeColor: {
            // 自定义 筛选框颜色：false 为白色，true为灰色
            type: Boolean,
            default: false
        },
        removeTime: Boolean,
        infiniteDate: {
            type: Boolean,
            default: () => false
        },
        pickerOptionsProp: {
            type: Object,
            default: function () {
                return {
                    // 最小值为2000-1-1 00:00:00
                    disabledDate(time) {
                        return dayjs(time).format('YYYY-MM-DD') < dayjs('2000-01-01 00:00:00').format('YYYY-MM-DD') || dayjs(time).format('YYYY-MM-DD') > dayjs().format('YYYY-MM-DD')
                    }
                }
            }
        }
    },
    data() {
        return {
            date1: '',
            date2: '',
            num1: 10,
            num2: 10,
            num3: 23,
            num4: 59,
            visible: false
        }
    },
    methods: {
        submit() {
            let retDates = [`${this.startTime}`, `${this.endTime}`]
            this.$emit('input', retDates)
            this.$nextTick(() => {
                this.$emit('change', retDates)
            })
            this.visible = false
        },
        inintDate() {
            let retDates = []
            if (!this.removeTime) {
                retDates = [dayjs().format('YYYY-MM-DD 00:00'), dayjs().format('YYYY-MM-DD 23:59')]
            } else {
                retDates = [dayjs().format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')]
            }
            this.$emit('input', retDates)
        },
        hideHandle() {
            this.date1 = this.value[0].slice(0, 10)
            this.date2 = this.value[1].slice(0, 10)
            if (!this.removeTime) {
                this.$nextTick(() => {
                    this.num1 = Number(this.value[0].slice(11, 13))
                    this.num2 = Number(this.value[0].slice(14, 16))
                    this.num3 = Number(this.value[1].slice(11, 13))
                    this.num4 = Number(this.value[1].slice(14, 16))
                })
            }
        },
        changeDateHandle(type) {
            let startUnix = dayjs(`${this.startTime}:00`).unix()
            let endUnix = dayjs(`${this.endTime}:00`).unix()
            if (this.removeTime) {
                startUnix = dayjs(`${this.startTime} 00:00:00`).unix()
                endUnix = dayjs(`${this.endTime} 00:00:00`).unix()
            }
            if (endUnix < startUnix) {
                //结束时间小于开始时间
                switch (type) {
                    case 'start':
                        ;[this.date2, this.num3, this.num4] = [this.date1, '23', '59']
                        break
                    case 'end':
                        ;[this.date1, this.num1, this.num2] = [this.date2, '0', '0']
                        break
                }
            } else if (endUnix - startUnix > 90 * 24 * 60 * 60) {
                switch (type) {
                    case 'start':
                        ;[this.date2, this.num3, this.num4] = [dayjs.unix(startUnix).add(3, 'M').format('YYYY-MM-DD'), this.num1, this.num2]
                        break
                    case 'end':
                        ;[this.date1, this.num1, this.num2] = [dayjs.unix(endUnix).subtract(3, 'M').format('YYYY-MM-DD'), this.num3, this.num4]
                        break
                }
            }
        },
        changeTimeHandle(type) {
            let startUnix = dayjs(`${this.startTime}:00`).unix()
            let endUnix = dayjs(`${this.endTime}:00`).unix()
            if (endUnix < startUnix) {
                this.$nextTick(() => {
                    if (type === 'start') {
                        ;[this.num3, this.num4] = [this.num1, this.num2]
                    } else {
                        ;[this.num1, this.num2] = [this.num3, this.num4]
                    }
                })
            }
        }
    },
    computed: {
        startTime() {
            if (!this.removeTime) {
                return `${this.date1} ${this.num1 > 9 ? this.num1 : `0${this.num1}`}:${this.num2 > 9 ? this.num2 : `0${this.num2}`}`
            } else {
                return `${this.date1}`
            }
        },
        endTime() {
            if (!this.removeTime) {
                return `${this.date2} ${this.num3 > 9 ? this.num3 : `0${this.num3}`}:${this.num4 > 9 ? this.num4 : `0${this.num4}`}`
            } else {
                return `${this.date2}`
            }
        },
        displayDate() {
            if (!this.value.length) {
                //若传入 []
                this.inintDate()
                return ''
            } else {
                this.hideHandle()
                return this.value.join(' - ')
            }
        },
        pickerOptions() {
            if (this.infiniteDate) {
                return {
                    disabledDate(time) {
                        return dayjs(time).format('YYYY-MM-DD') > dayjs().format('YYYY-MM-DD')
                    }
                }
            } else {
                return this.pickerOptionsProp
            }
        }
    },
    mounted() {}
}
</script>

<style scoped>
.date-times-picker {
    display: inline-block;
}
.date-times-picker-box {
    padding: 20px 30px;
}
.date-times-line {
    display: flex;
    margin-top: 10px;
}
.date-times-line__label {
    width: 72px;
    line-height: 35px;
}
.date-times-line__date {
    width: 135px;
}
.date-times-line__ms {
    width: 85px;
}
.date-times-line__submit {
    display: block;
    margin-top: 10px;
}
.date-times-line__submitbox {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}
.flex-none {
    flex: none;
}
.theme-color {
    color: #91a1a9;
    background-color: #f6f6f6;
    border: 1px solid #ddd;
    height: 34px;
    padding: 0 15px;
    line-height: 34px;
    vertical-align: middle;
}
.mar-l-10 {
    margin-left: 10px;
}
</style>