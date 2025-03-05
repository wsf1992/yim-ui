import{v as n,n as r}from"./index-25f401ba.js";const _={},o=n.defineComponent({__name:"me",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:_,excerpt:void 0}}}),v=""+new URL("image-292a5f05.png",import.meta.url).href;var s=function(){var t=this;return t._self._c,t._self._setupProxy,t._m(0)},a=[function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"markdown-body"},[t("h1",[e._v("Popover")]),t("p",[e._v("该组件是 弹出框，与 ELEMENT-UI 中 Popover 组件的不同之处在于，可以不指定 reference,该组件目前只能通过指定 value 值来显示和隐藏")]),t("h2",[e._v("样式")]),t("p",[t("img",{attrs:{src:v,alt:"alt text"}})]),t("h2",[e._v("Attributes")]),t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("require")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value/v-model")]),t("td",[e._v("绑定值")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("width")]),t("td",[e._v("宽度")]),t("td",[e._v("String, Number")]),t("td",[e._v("false")]),t("td",[e._v("最小宽度 150px")])]),t("tr",[t("td",[e._v("placement")]),t("td",[e._v("出现位置")]),t("td",[e._v("String")]),t("td",[e._v("top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end")]),t("td",[e._v("bottom")])])])]),t("h2",[e._v("Slot")]),t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")])])]),t("tbody",[t("tr",[t("td",[e._v("—")]),t("td",[e._v("Popover 内嵌 HTML 文本")])]),t("tr",[t("td",[e._v("reference")]),t("td",[e._v("触发 Popover 显示的 HTML 元素")])])])]),t("h2",[e._v("Example")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"language-JavaScript"}},[e._v(`<template>
    <div>
        <button @click="visible = true">click</button>

        <mi-popover v-model="visible" width="100">
            hello world
        </mi-popover>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    methods: {}
}
<\/script>

`)])])])}],l=r(o,s,a,!1,null,null,null,null);const d=l.exports,i={components:{Me:d}};var p=function(){var t=this,u=t._self._c;return u("me")},c=[],m=r(i,p,c,!1,null,null,null,null);const f=m.exports;export{f as default};
