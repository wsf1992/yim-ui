import{v as _,n as r}from"./index-25f401ba.js";const n={},s=_.defineComponent({__name:"me",setup(t,{expose:u}){return u({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:n,excerpt:void 0}}}),l=""+new URL("image-c3ff0e51.png",import.meta.url).href;var v=function(){var u=this;return u._self._c,u._self._setupProxy,u._m(0)},o=[function(){var t=this,u=t._self._c;return t._self._setupProxy,u("div",{staticClass:"markdown-body"},[u("h1",[t._v("对话框")]),u("p",[t._v("该组件是对话框，使用时只需要在该组件内部插入需要的内容即可,主要用于统一样式")]),u("h2",[t._v("样式")]),u("p",[u("img",{attrs:{src:l,alt:"Alt text"}})]),u("h2",[t._v("Attributes")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("类型")]),u("th",[t._v("require")]),u("th",[t._v("默认值")])])]),u("tbody",[u("tr",[u("td",[t._v("value/v-model")]),u("td",[t._v("绑定值")]),u("td",[t._v("Boolean")]),u("td",[t._v("true")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("width")]),u("td",[t._v("弹窗宽度")]),u("td",[t._v("String")]),u("td",[t._v("false")]),u("td",[t._v("500px")])]),u("tr",[u("td",[t._v("title")]),u("td",[t._v("标题")]),u("td",[t._v("String")]),u("td",[t._v("true")]),u("td",[t._v("title")])])])]),u("h2",[t._v("Events")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("回调参数")])])]),u("tbody",[u("tr",[u("td",[t._v("before-close")]),u("td",[t._v("弹窗关闭时的回调函数")]),u("td",[t._v("–")])])])]),u("h2",[t._v("Example")]),u("pre",{pre:!0},[u("code",{pre:!0,attrs:{class:"language-JavaScript"}},[t._v(`<template>
    <div>
        <button @click="visible = true">点我打开弹窗</button>
        <mi-dialog v-model="visible" title="这是一个标题" @before-close="closeHandle"> 这里是一些文本内容... </mi-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    methods: {
        closeHandle() {
            console.log('弹窗关闭了')
        }
    }
}
<\/script>

`)])])])}],a=r(s,v,o,!1,null,null,null,null);const d=a.exports,c={components:{Me:d}};var i=function(){var u=this,e=u._self._c;return e("me")},p=[],f=r(c,i,p,!1,null,null,null,null);const E=f.exports;export{E as default};
