import{v as _,n as l}from"./index-25f401ba.js";const v={},i=_.defineComponent({__name:"me",setup(t,{expose:u}){return u({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:v,excerpt:void 0}}}),d=""+new URL("image-42fe088b.png",import.meta.url).href;var r=function(){var u=this;return u._self._c,u._self._setupProxy,u._m(0)},o=[function(){var t=this,u=t._self._c;return t._self._setupProxy,u("div",{staticClass:"markdown-body"},[u("h1",[t._v("导出列表数据")]),u("p",[t._v("该组件用于导出列表数据")]),u("h2",[t._v("样式")]),u("p",[u("img",{attrs:{src:d,alt:"alt text"}})]),u("h2",[t._v("MiExport Attributes")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("类型")]),u("th",[t._v("require")]),u("th",[t._v("默认值")])])]),u("tbody",[u("tr",[u("td",[t._v("value/v-model")]),u("td",[t._v("绑定值")]),u("td",[t._v("Boolean")]),u("td",[t._v("true")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("fileName")]),u("td",[t._v("导出文件名称")]),u("td",[t._v("String")]),u("td",[t._v("true")]),u("td",[t._v("‘’")])]),u("tr",[u("td",[t._v("selectFields")]),u("td",[t._v("当前选中的字段")]),u("td",[t._v("Array")]),u("td",[t._v("false")]),u("td",[t._v("[]")])]),u("tr",[u("td",[t._v("selectFields")]),u("td",[t._v("列表中选中的行")]),u("td",[t._v("Array")]),u("td",[t._v("false")]),u("td",[t._v("[]")])]),u("tr",[u("td",[t._v("dialogWidth")]),u("td",[t._v("对话框宽度")]),u("td",[t._v("String")]),u("td",[t._v("false")]),u("td",[t._v("755px")])]),u("tr",[u("td",[t._v("currSelectShow")]),u("td",[t._v("是否展示 【导出当前选择】")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("true")])]),u("tr",[u("td",[t._v("selectAllName")]),u("td",[t._v("【导出全部筛选】重命名")]),u("td",[t._v("String")]),u("td",[t._v("false")]),u("td",[t._v("导出全部筛选")])]),u("tr",[u("td",[t._v("currSelectName")]),u("td",[t._v("【导出当前选择】重命名")]),u("td",[t._v("String")]),u("td",[t._v("false")]),u("td",[t._v("导出当前选择")])]),u("tr",[u("td",[t._v("fieldShow")]),u("td",[t._v("是否展示 【导出字段】")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("true")])]),u("tr",[u("td",[t._v("loading")]),u("td",[t._v("按钮loading状态控制")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("false")])])])]),u("h2",[t._v("MiExport Events")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("回调参数")])])]),u("tbody",[u("tr",[u("td",[t._v("submit")]),u("td",[t._v("点击确认导出触发")]),u("td",[t._v("{name：‘文件名称’, type: ‘导出数据类型：1-导出全部筛选， 2-导出当前选择’， field： ‘选中字段数组’}")])])])]),u("h2",[t._v("MiExOption Attributes")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("类型")]),u("th",[t._v("require")]),u("th",[t._v("默认值")])])]),u("tbody",[u("tr",[u("td",[t._v("value")]),u("td",[t._v("选项的值")]),u("td",[t._v("String/Number")]),u("td",[t._v("true")]),u("td",[t._v("–")])]),u("tr",[u("td",[t._v("label")]),u("td",[t._v("选项的标签")]),u("td",[t._v("String/Number")]),u("td",[t._v("true")]),u("td",[t._v("–")])]),u("tr",[u("td",[t._v("disabled")]),u("td",[t._v("是否禁用该选项")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("false")])])])]),u("h2",[t._v("Example")]),u("pre",{pre:!0},[u("code",{pre:!0,attrs:{class:"language-JavaScript"}},[t._v(`<template>
    <div>
        <mi-export
            v-model="visible"
            fileName="测试"
            :selectFields="select"
            @submit="submit"
            :loading.sync="loading"
            :selectLines="[1, 2, 3]"
            :currSelectShow="true"
            selectAllName="全部导出"
            currSelectName="导出选中的数据"
            dialogWidth="800px"
        >
            <mi-ex-option value="1" label="字段1"></mi-ex-option>
            <mi-ex-option value="2" label="字段2"></mi-ex-option>
            <mi-ex-option value="3" label="字段3" disabled></mi-ex-option>
            <mi-ex-option value="4" label="字段4"></mi-ex-option>
            <mi-ex-option value="5" label="字段5" disabled></mi-ex-option>
            <mi-ex-option value="6" label="字段6"></mi-ex-option>
            <mi-ex-option value="7" label="字段7"></mi-ex-option>
            <mi-ex-option value="8" label="字段8" disabled></mi-ex-option>
            <mi-ex-option value="9" label="字段9111"></mi-ex-option>
            <mi-ex-option value="10" label="字段10"></mi-ex-option>
        </mi-export>
        <button @click="visible = !visible">点我打开</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            select: ['1', '2', '3'],
            loading: false
        }
    },
    methods: {
        submit(val) {
            console.log('submit', val)
            setTimeout(() => {
                this.loading = false
                this.visible = false
            }, 2000)
        }
    }
}
<\/script>

`)])])])}],a=l(i,r,o,!1,null,null,null,null);const n=a.exports,s={components:{Me:n}};var B=function(){var u=this,e=u._self._c;return e("me")},m=[],F=l(s,B,m,!1,null,null,null,null);const c=F.exports;export{c as default};
