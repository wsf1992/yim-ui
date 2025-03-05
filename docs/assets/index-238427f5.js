import{v as u,n as r}from"./index-25f401ba.js";const _={},l=u.defineComponent({__name:"me",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:_,excerpt:void 0}}}),s=""+new URL("image-73cca5e9.png",import.meta.url).href;var a=function(){var t=this;return t._self._c,t._self._setupProxy,t._m(0)},o=[function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"markdown-body"},[t("h1",[e._v("title")]),t("p",[e._v("该组件是title，主要用于统一样式")]),t("h2",[e._v("样式")]),t("p",[t("img",{attrs:{src:s,alt:"alt text"}})]),t("h2",[e._v("Attributes")]),t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("require")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("title")]),t("td",[e._v("title标题")]),t("td",[e._v("String/number")]),t("td",[e._v("false")]),t("td",[e._v("“”")])])])]),t("h2",[e._v("slot")]),t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")])])]),t("tbody",[t("tr",[t("td",[e._v("right")]),t("td",[e._v("自定义左侧内容")])]),t("tr",[t("td",[e._v("right")]),t("td",[e._v("自定义右侧内容")])])])]),t("h2",[e._v("Example")]),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"language-JavaScript"}},[e._v(`<template>
    <div>
        <mi-title title="123">
            <template v-slot:left>
                <span style="margin-left: 20px;">leftcontent</span>
            </template>
            <template v-slot:right>rightcontent</template>
        </mi-title>
    </div>
</template>

`)])])])}],v=r(l,a,o,!1,null,null,null,null);const i=v.exports,c={components:{Me:i}};var p=function(){var t=this,n=t._self._c;return n("me")},m=[],d=r(c,p,m,!1,null,null,null,null);const h=d.exports;export{h as default};
