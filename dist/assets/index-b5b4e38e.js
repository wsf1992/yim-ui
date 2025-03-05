import{v as r,n}from"./index-25f401ba.js";const _={},o=r.defineComponent({__name:"me",setup(t,{expose:u}){return u({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:_,excerpt:void 0}}});var l=function(){var u=this;return u._self._c,u._self._setupProxy,u._m(0)},d=[function(){var t=this,u=t._self._c;return t._self._setupProxy,u("div",{staticClass:"markdown-body"},[u("h1",[t._v("Throttled")]),u("p",[t._v("Throttled 用于节流：单位时间只执行一次主函数")]),u("h2",[t._v("方法详解")]),u("pre",{pre:!0},[u("code",{pre:!0,attrs:{class:"language-JavaScript"}},[t._v(`// 1、引入 throttled
import { throttled } from 'yim-ui/util/main'

// 2、注册 myThrottled 函数
const myThrottled = throttled(delay)

// 3、调用 myThrottled ：接受三个参数。参数1：uniqueId  参数2： fn； 参数3: failFn
myThrottled(() => 1 , () => {
    // fn： 主函数
}, () => {
    // failFn: 节流成功后 调用的函数
})

`)])]),u("h2",[t._v("Example")]),u("pre",{pre:!0},[u("code",{pre:!0,attrs:{class:"language-JavaScript"}},[t._v(`import { throttled } from 'yim-ui/util/main'

const myThrottled = throttled()
myThrottled(1, () => {
    console.log('主函数执行了')
},() => {
    console.log('节流成功，执行该函数')
})

`)])]),u("h2",[t._v("params")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("类型")]),u("th",[t._v("require")]),u("th",[t._v("默认值")])])]),u("tbody",[u("tr",[u("td",[t._v("uniqueId")]),u("td",[t._v("唯一ID")]),u("td",[t._v("string/number")]),u("td",[t._v("true")]),u("td",[t._v("–")])]),u("tr",[u("td",[t._v("fn")]),u("td",[t._v("主函数，符合条件时会被调用")]),u("td",[t._v("Function")]),u("td",[t._v("true")]),u("td",[t._v("–")])]),u("tr",[u("td",[t._v("failFn")]),u("td",[t._v("节流成功后 会被调用")]),u("td",[t._v("Function")]),u("td",[t._v("true")]),u("td",[t._v("–")])]),u("tr",[u("td",[t._v("delay")]),u("td",[t._v("fn 调用间隔,单位毫秒")]),u("td",[t._v("Number")]),u("td",[t._v("false")]),u("td",[t._v("1000")])])])])])}],s=n(o,l,d,!1,null,null,null,null);const a=s.exports,v={components:{Me:a}};var F=function(){var u=this,e=u._self._c;return e("me")},c=[],i=n(v,F,c,!1,null,null,null,null);const f=i.exports;export{f as default};
