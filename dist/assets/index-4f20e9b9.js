import{v as r,n as _}from"./index-25f401ba.js";const v={},l=r.defineComponent({__name:"me",setup(t,{expose:u}){return u({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:v,excerpt:void 0}}}),a=""+new URL("image-24f4fcd5.png",import.meta.url).href;var n=function(){var u=this;return u._self._c,u._self._setupProxy,u._m(0)},d=[function(){var t=this,u=t._self._c;return t._self._setupProxy,u("div",{staticClass:"markdown-body"},[u("h1",[t._v("选择器输入框")]),u("p",[t._v("该组件是选择器输入框，主要用于统一样式")]),u("h2",[t._v("样式")]),u("p",[u("img",{attrs:{src:a,alt:"alt text"}})]),u("h2",[t._v("Attributes")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("类型")]),u("th",[t._v("require")]),u("th",[t._v("默认值")]),u("th",[t._v("备注")])])]),u("tbody",[u("tr",[u("td",[t._v("value/v-model")]),u("td",[t._v("绑定值")]),u("td",[t._v("String/Array")]),u("td",[t._v("true")]),u("td",[t._v("“”")]),u("td",[t._v("当包含 下拉框时，传入数组([‘下拉框选中值’, ‘输入框默认值’])。不包含时传入 字符串")])]),u("tr",[u("td",[t._v("placeholder")]),u("td",[t._v("输入框占位文本")]),u("td",[t._v("String")]),u("td",[t._v("false")]),u("td",[t._v("“”")]),u("td",[t._v("–")])]),u("tr",[u("td",[t._v("selectWidth")]),u("td",[t._v("下拉框宽度")]),u("td",[t._v("String/Number")]),u("td",[t._v("false")]),u("td",[t._v("132")]),u("td",[t._v("–")])]),u("tr",[u("td",[t._v("width")]),u("td",[t._v("组件宽度")]),u("td",[t._v("String/Number")]),u("td",[t._v("false")]),u("td",[t._v("321")]),u("td",[t._v("–")])]),u("tr",[u("td",[t._v("selectList")]),u("td",[t._v("下拉框列表数据")]),u("td",[t._v("Array")]),u("td",[t._v("false")]),u("td",[t._v("[]")]),u("td",[t._v("不传入该值，不展示 下拉框；数组项格式如下： { label: ‘选项1’， value: ‘1’}")])])])]),u("h2",[t._v("Events")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("回调参数")]),u("th",[t._v("备注")])])]),u("tbody",[u("tr",[u("td",[t._v("change")]),u("td",[t._v("选中值发生变化时触发")]),u("td",[t._v("目前的选中值")]),u("td",[t._v("以下操作会触发该操作：下拉框选项更改、点击搜索按钮、清空输入框")])])])]),u("h2",[t._v("Example")]),u("pre",{pre:!0},[u("code",{pre:!0,attrs:{class:"language-JavaScript"}},[t._v(`<template>
    <mi-select-input 
        v-model="value" 
        placeholder="请输入" 
        selectWidth="150" 
        :selectList="selectList" 
        width="400" 
        @change="handleChange"
    ></mi-select-input>
</template>
<script>
export default {
    data() {
        return {
            selectList: [
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
            ],
            value: ['1', '']
        }
    },
    methods: {
        handleChange(val) {
            console.log('handleChange', val)
        }
    }
}
<\/script>

`)])])])}],s=_(l,n,d,!1,null,null,null,null);const E=s.exports,c={components:{Me:E}};var o=function(){var u=this,e=u._self._c;return e("me")},F=[],C=_(c,o,F,!1,null,null,null,null);const p=C.exports;export{p as default};
