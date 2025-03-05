import{v as n,n as r}from"./index-25f401ba.js";const l={},F=n.defineComponent({__name:"me",setup(e,{expose:u}){return u({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:l,excerpt:void 0}}}),a=""+new URL("image-f9150e54.png",import.meta.url).href;var _=function(){var u=this;return u._self._c,u._self._setupProxy,u._m(0)},s=[function(){var e=this,u=e._self._c;return e._self._setupProxy,u("div",{staticClass:"markdown-body"},[u("h1",[e._v("title")]),u("p",[e._v("该组件是文件上传，主要用于统一样式、简化上传流程，可用于 Form 表单")]),u("h2",[e._v("样式")]),u("p",[u("img",{attrs:{src:a,alt:"alt text"}})]),u("h2",[e._v("Attributes")]),u("table",[u("thead",[u("tr",[u("th",[e._v("参数")]),u("th",[e._v("说明")]),u("th",[e._v("类型")]),u("th",[e._v("require")]),u("th",[e._v("默认值")])])]),u("tbody",[u("tr",[u("td",[e._v("value/v-model")]),u("td",[e._v("绑定值")]),u("td",[e._v("string、object")]),u("td",[e._v("true")]),u("td",[e._v("‘’")])]),u("tr",[u("td",[e._v("width")]),u("td",[e._v("组件宽度")]),u("td",[e._v("String、Number")]),u("td",[e._v("false")]),u("td",[e._v("320")])])])]),u("h2",[e._v("slot")]),u("table",[u("thead",[u("tr",[u("th",[e._v("参数")]),u("th",[e._v("说明")])])]),u("tbody",[u("tr",[u("td",[e._v("default")]),u("td",[e._v("自定义内容")])])])]),u("h2",[e._v("Example")]),u("pre",{pre:!0},[u("code",{pre:!0,attrs:{class:"language-JavaScript"}},[e._v(`<template>
    <div>
        <mi-upload v-model="fileName" width="500"> slot-default </mi-upload>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileName: ''
        }
    }
}
<\/script>

`)])]),u("h2",[e._v("特别说明")]),u("h3",[e._v("Form表单:")]),u("h5",[e._v("通过 v-model 绑定值进行判断是上传文件还是编辑（未修改）")]),u("h5",[e._v("1、上传文件：v-model 可获取 上传的文件（Object）")]),u("h5",[e._v("2、编辑文件：v-model 传入文件名称即可 (String)")]),u("h5",[e._v("3、当文件发生改变时，会触发 Form 表单的 change 事件 进行校验")]),u("h5",[e._v("4、下面提供校验示例：")]),u("pre",{pre:!0},[u("code",{pre:!0,attrs:{class:"language-JavaScript"}},[e._v(`const fileValidator = (rule, value, callback) => {
    if (typeof value === 'object') {  // 文件上传
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
    } else { // 文件编辑
        if (value === '') {
            callback(new Error('请上传文件'))
        } else {
            callback()
        }
    }
}

`)])])])}],v=r(F,_,s,!1,null,null,null,null);const c=v.exports,o={components:{Me:c}};var E=function(){var u=this,t=u._self._c;return t("me")},i=[],d=r(o,E,i,!1,null,null,null,null);const f=d.exports;export{f as default};
