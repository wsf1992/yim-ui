import{v as _,n as r}from"./index-25f401ba.js";const n={},a=_.defineComponent({__name:"me",setup(t,{expose:u}){return u({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:n,excerpt:void 0}}}),v=""+new URL("image-4c3505b0.png",import.meta.url).href;var s=function(){var u=this;return u._self._c,u._self._setupProxy,u._m(0)},F=[function(){var t=this,u=t._self._c;return t._self._setupProxy,u("div",{staticClass:"markdown-body"},[u("h1",[t._v("Datetimespicker")]),u("p",[t._v("该组件是Datetimespicker，提供日期时间 或 日期的选择")]),u("p",[t._v("组件基于 element 用到的组件有：Popover 弹出框 && DatePicker 日期选择器 && InputNumber 计数器 && Button 按钮")]),u("p",[t._v("组件用到的外部库： dayjs")]),u("h2",[t._v("样式")]),u("p",[u("img",{attrs:{src:v,alt:"alt text"}})]),u("h2",[t._v("Attributes")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("类型")]),u("th",[t._v("require")]),u("th",[t._v("默认值")])])]),u("tbody",[u("tr",[u("td",[t._v("v-model")]),u("td",[t._v("绑定值（初始值给定 [] 即可，组件会自动赋初始值）,初始值格式：YYYY-MM-DD 00:00")]),u("td",[t._v("Array")]),u("td",[t._v("true")]),u("td",[t._v("[]")])]),u("tr",[u("td",[t._v("themeColor")]),u("td",[t._v("组件主题颜色：false 为白色，true为灰色")]),u("td",[t._v("Boolea")]),u("td",[t._v("false")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("removeTime")]),u("td",[t._v("移除时间选择")]),u("td",[t._v("Boolea")]),u("td",[t._v("false")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("infiniteDate")]),u("td",[t._v("日期选择器可选择任意日期")]),u("td",[t._v("Boolea")]),u("td",[t._v("false")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("pickerOptionsProp")]),u("td",[t._v("日期选择器配置项")]),u("td",[t._v("Object")]),u("td",[t._v("false")]),u("td",[t._v("{disabledDate(time) {return moment(time).format(‘YYYY-MM-DD’) < moment(‘2000-01-01 00:00:00’).format(‘YYYY-MM-DD’)")])])])]),u("h2",[t._v("Events")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("回调参数")])])]),u("tbody",[u("tr",[u("td",[t._v("change")]),u("td",[t._v("点击确认时，触发")]),u("td",[t._v("callback（[开始时间，结束时间]）")])])])]),u("h2",[t._v("Example")]),u("pre",{pre:!0},[u("code",{pre:!0,attrs:{class:"language-JavaScript"}},[t._v(`<template>
       <mi-date-times-picker v-model="dateTime" @change="save"></mi-date-times-picker>
</template>
<script>
export default {
    data() {
        return {
            dateTime: []
        }
    },
    methods: {
        save(val) {
            console.log(val)
        }
    }
}
<\/script>

`)])])])}],o=r(a,s,F,!1,null,null,null,null);const d=o.exports,l={components:{Me:d}};var c=function(){var u=this,e=u._self._c;return e("me")},m=[],E=r(l,c,m,!1,null,null,null,null);const p=E.exports;export{p as default};
