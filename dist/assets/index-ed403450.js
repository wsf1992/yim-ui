import{v as _,n as r}from"./index-25f401ba.js";const n={},a=_.defineComponent({__name:"me",setup(t,{expose:u}){return u({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:n,excerpt:void 0}}}),v=""+new URL("image-265493c5.png",import.meta.url).href;var l=function(){var u=this;return u._self._c,u._self._setupProxy,u._m(0)},c=[function(){var t=this,u=t._self._c;return t._self._setupProxy,u("div",{staticClass:"markdown-body"},[u("h1",[t._v("Pagination")]),u("p",[t._v("该组件是分页，主要用于统一样式")]),u("h2",[t._v("样式")]),u("p",[u("img",{attrs:{src:v,alt:"alt text"}})]),u("h2",[t._v("Attributes")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("类型")]),u("th",[t._v("require")]),u("th",[t._v("默认值")])])]),u("tbody",[u("tr",[u("td",[t._v("total")]),u("td",[t._v("总条目数")]),u("td",[t._v("Number")]),u("td",[t._v("true")]),u("td",[t._v("0")])]),u("tr",[u("td",[t._v("current-page")]),u("td",[t._v("当前页数，需要使用 .sync 修饰符")]),u("td",[t._v("Number")]),u("td",[t._v("true")]),u("td",[t._v("1")])]),u("tr",[u("td",[t._v("page-size")]),u("td",[t._v("每页显示个数选择器的选项设置")]),u("td",[t._v("Number")]),u("td",[t._v("true")]),u("td",[t._v("10")])]),u("tr",[u("td",[t._v("jumper")]),u("td",[t._v("是否展示跳页元素")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("false")])])])]),u("h2",[t._v("Events")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("回调参数")])])]),u("tbody",[u("tr",[u("td",[t._v("size-change")]),u("td",[t._v("pageSize 改变时会触发")]),u("td",[t._v("每页条数")])]),u("tr",[u("td",[t._v("current-change")]),u("td",[t._v("currentPage 改变时会触发")]),u("td",[t._v("当前页")])]),u("tr",[u("td",[t._v("prev-click")]),u("td",[t._v("用户点击上一页按钮改变当前页后触发")]),u("td",[t._v("当前页")])]),u("tr",[u("td",[t._v("next-click")]),u("td",[t._v("用户点击下一页按钮改变当前页后触发")]),u("td",[t._v("当前页")])])])]),u("h2",[t._v("slot")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")])])]),u("tbody",[u("tr",[u("td",[t._v("default")]),u("td",[t._v("自定义左侧内容")])])])]),u("h2",[t._v("Example")]),u("pre",{pre:!0},[u("code",{pre:!0,attrs:{class:"language-JavaScript"}},[t._v(`<template>
    <mi-pagination 
        :total="total" 
        :current-page.sync="currentPage" 
        :page-size.sync="pageSize"
        @prevClick="prevClick" 
        @nextClick="nextClick" 
        @sizeChange="sizeChange" 
        @currentChange="currentChange"
        jumper
        >solt:left</mi-pagination>
</template>

<script>
export default {
    data() {
        return {
            total: 100,
            currentPage: 1,
            pageSize: 10
        }
    },
    methods: {
        prevClick(val) {
            console.log('prevClick', val)
        },
        nextClick(val) {
            console.log('nextClick', val)
        },
        sizeChange(val) {
            console.log('sizeChange', val)
        },
        currentChange(val) {
            console.log('currentChange', val)
        }
    }
}
<\/script>

`)])])])}],s=r(a,l,c,!1,null,null,null,null);const o=s.exports,d={components:{Me:o}};var i=function(){var u=this,e=u._self._c;return e("me")},p=[],E=r(d,i,p,!1,null,null,null,null);const m=E.exports;export{m as default};
