import{v as r,n as _}from"./index-25f401ba.js";const v={},a=r.defineComponent({__name:"me",setup(t,{expose:u}){return u({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:v,excerpt:void 0}}}),l=""+new URL("image-494f7247.png",import.meta.url).href,d=""+new URL("image-1-2e1b6cef.png",import.meta.url).href;var s=function(){var u=this;return u._self._c,u._self._setupProxy,u._m(0)},n=[function(){var t=this,u=t._self._c;return t._self._setupProxy,u("div",{staticClass:"markdown-body"},[u("h1",[t._v("选择器")]),u("p",[t._v("该组件是选择器，因为使用了 滚动加载，所以支持数据量较大的情况。组件为 块级 元素，建议搭配 flex 使用")]),u("h2",[t._v("样式")]),u("p",[u("img",{attrs:{src:l,alt:"Alt text"}}),u("img",{attrs:{src:d,alt:"alt text"}})]),u("h2",[t._v("Attributes")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("类型")]),u("th",[t._v("require")]),u("th",[t._v("默认值")])])]),u("tbody",[u("tr",[u("td",[t._v("value/v-model")]),u("td",[t._v("绑定值")]),u("td",[t._v("String/number")]),u("td",[t._v("true")]),u("td",[t._v("“”")])]),u("tr",[u("td",[t._v("isQuery")]),u("td",[t._v("是否可搜索")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("placeholder")]),u("td",[t._v("输入框占位文本")]),u("td",[t._v("String")]),u("td",[t._v("false")]),u("td",[t._v("“”")])]),u("tr",[u("td",[t._v("width")]),u("td",[t._v("组件宽度")]),u("td",[t._v("String")]),u("td",[t._v("false")]),u("td",[t._v("132px")])]),u("tr",[u("td",[t._v("data")]),u("td",[t._v("下拉框列表数据")]),u("td",[t._v("Array")]),u("td",[t._v("true")]),u("td",[t._v("[]")])]),u("tr",[u("td",[t._v("whiteTheme")]),u("td",[t._v("是否展示白色主题")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("popperClass")]),u("td",[t._v("为 popper 添加类名")]),u("td",[t._v("String")]),u("td",[t._v("false")]),u("td",[t._v("“”")])]),u("tr",[u("td",[t._v("defaultValue")]),u("td",[t._v("占位符，当value 为空时展示")]),u("td",[t._v("String")]),u("td",[t._v("false")]),u("td",[t._v("“”")])])])]),u("h2",[t._v("Events")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("回调参数")])])]),u("tbody",[u("tr",[u("td",[t._v("change")]),u("td",[t._v("选中值发生变化时触发")]),u("td",[t._v("目前的选中值")])])])]),u("h2",[t._v("Example")]),u("pre",{pre:!0},[u("code",{pre:!0,attrs:{class:"language-JavaScript"}},[t._v(`<template>
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
<\/script>

`)])])])}],o=_(a,s,n,!1,null,null,null,null);const c=o.exports,i={components:{Me:c}};var p=function(){var u=this,e=u._self._c;return e("me")},E=[],F=_(i,p,E,!1,null,null,null,null);const m=F.exports;export{m as default};
