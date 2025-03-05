import{v as _,n as r}from"./index-25f401ba.js";const s={},v=_.defineComponent({__name:"me",setup(u,{expose:t}){return t({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:s,excerpt:void 0}}}),l=""+new URL("image-17e6f856.png",import.meta.url).href;var n=function(){var t=this;return t._self._c,t._self._setupProxy,t._m(0)},a=[function(){var u=this,t=u._self._c;return u._self._setupProxy,t("div",{staticClass:"markdown-body"},[t("h1",[u._v("列表展示")]),t("p",[u._v("该组件用于配置列表展示项")]),t("h2",[u._v("样式")]),t("p",[t("img",{attrs:{src:l,alt:"Alt text"}})]),t("h2",[u._v("MiListDisplay Attributes")]),t("table",[t("thead",[t("tr",[t("th",[u._v("参数")]),t("th",[u._v("说明")]),t("th",[u._v("类型")]),t("th",[u._v("require")]),t("th",[u._v("默认值")])])]),t("tbody",[t("tr",[t("td",[u._v("value/v-model")]),t("td",[u._v("绑定值")]),t("td",[u._v("Array")]),t("td",[u._v("true")]),t("td",[u._v("[]")])])])]),t("h2",[u._v("MiListDisplay Events")]),t("table",[t("thead",[t("tr",[t("th",[u._v("参数")]),t("th",[u._v("说明")]),t("th",[u._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[u._v("reset")]),t("td",[u._v("点击重置按钮时触发")]),t("td",[u._v("–")])]),t("tr",[t("td",[u._v("submit")]),t("td",[u._v("点击确定按钮时触发")]),t("td",[u._v("目前的选中值")])])])]),t("h2",[u._v("MiListOption Attributes")]),t("table",[t("thead",[t("tr",[t("th",[u._v("参数")]),t("th",[u._v("说明")]),t("th",[u._v("类型")]),t("th",[u._v("require")]),t("th",[u._v("默认值")])])]),t("tbody",[t("tr",[t("td",[u._v("label")]),t("td",[u._v("选项的标签")]),t("td",[u._v("string/number")]),t("td",[u._v("true")]),t("td",[u._v("–")])]),t("tr",[t("td",[u._v("value")]),t("td",[u._v("选项的值")]),t("td",[u._v("string/number")]),t("td",[u._v("true")]),t("td",[u._v("–")])]),t("tr",[t("td",[u._v("disabled")]),t("td",[u._v("是否禁用该选项")]),t("td",[u._v("Boolean")]),t("td",[u._v("false")]),t("td",[u._v("false")])])])]),t("h2",[u._v("Example")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"language-JavaScript"}},[u._v(`<template>
    <div style="margin-left: 500px">
        <mi-list-display v-model="value" @reset="reset" @submit="submit">
            <mi-list-option label="111" value="a" disabled></mi-list-option>
            <mi-list-option label="222" value="b"></mi-list-option>
        </mi-list-display>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: ['a']
        }
    },
    methods: {
        reset() {
            console.log('重置')
        },
        submit() {
            console.log('确定')
        }
    }
}
<\/script>

`)])])])}],i=r(v,n,a,!1,null,null,null,null);const o=i.exports,d={components:{Me:o}};var m=function(){var t=this,e=t._self._c;return e("me")},p=[],c=r(d,m,p,!1,null,null,null,null);const E=c.exports;export{E as default};
