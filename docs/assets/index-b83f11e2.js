import{v as a,n as r}from"./index-25f401ba.js";const _={},l=a.defineComponent({__name:"me",setup(t,{expose:u}){return u({frontmatter:{},excerpt:void 0}),{__sfc:!0,frontmatter:_,excerpt:void 0}}}),o=""+new URL("image-1b29cc4d.png",import.meta.url).href;var d=function(){var u=this;return u._self._c,u._self._setupProxy,u._m(0)},v=[function(){var t=this,u=t._self._c;return t._self._setupProxy,u("div",{staticClass:"markdown-body"},[u("h1",[t._v("音频播放器 Audio")]),u("p",[t._v("该组件是音频播放器 Audio，主要用于在各浏览器中统一样式")]),u("h2",[t._v("样式")]),u("p",[u("img",{attrs:{src:o,alt:"Alt text"}})]),u("h2",[t._v("Attributes")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("类型")]),u("th",[t._v("require")]),u("th",[t._v("默认值")])])]),u("tbody",[u("tr",[u("td",[t._v("src")]),u("td",[t._v("音频的URL")]),u("td",[t._v("String")]),u("td",[t._v("true")]),u("td",[t._v("‘’")])]),u("tr",[u("td",[t._v("loop")]),u("td",[t._v("循环播放音频")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("autoplay")]),u("td",[t._v("自动播放")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("close")]),u("td",[t._v("当前播放器关闭，会触发音频暂停")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("isDual")]),u("td",[t._v("是否双规：设为true时，会显示声道切换按钮")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("customDownLoad")]),u("td",[t._v("是否自定义下载方法")]),u("td",[t._v("Boolean")]),u("td",[t._v("false")]),u("td",[t._v("false")])]),u("tr",[u("td",[t._v("tractData")]),u("td",[t._v("双规声道定义：label可以自定义，value中的值不可修改")]),u("td",[t._v("Array")]),u("td",[t._v("false")]),u("td",[t._v("[{ label: ‘全部声道’, value: ‘all’ },{ label: ‘坐席声道’, value: ‘left’ },{ label: ‘客户声道’, value: ‘right’ }]")])]),u("tr",[u("td",[t._v("beforePlay")]),u("td",[t._v("组件没有传入src时，点击播放按钮触发")]),u("td",[t._v("Function")]),u("td",[t._v("false")]),u("td",[t._v("() => Promise.resolve()")])])])]),u("h2",[t._v("Events")]),u("table",[u("thead",[u("tr",[u("th",[t._v("参数")]),u("th",[t._v("说明")]),u("th",[t._v("回调参数")])])]),u("tbody",[u("tr",[u("td",[t._v("error")]),u("td",[t._v("音频加载失败时触发")]),u("td",[t._v("event")])]),u("tr",[u("td",[t._v("download-fn")]),u("td",[t._v("当customDownLoad为true时，调应该方法")]),u("td",[t._v("–")])]),u("tr",[u("td",[t._v("download-error")]),u("td",[t._v("音频下载失败时触发")]),u("td",[t._v("–")])]),u("tr",[u("td",[t._v("audio-element")]),u("td",[t._v("组件创建时触发，调用该方法可以拿到 audioElement 对象")]),u("td",[t._v("audioElement")])])])]),u("h2",[t._v("Example")]),u("pre",{pre:!0},[u("code",{pre:!0,attrs:{class:"language-JavaScript"}},[t._v(`<template>
    <mi-audio 
        :src="src"
        loop
        autoplay
        isDual
        :beforePlay="beforePlay"
        :tractData="tractData"
        @audio-element="audioElement"
        @download-error="downloadError"
        @error="error"
    >
    </mi-audio>
</template>

<script>
export default {
    data() {
        return {
            src: 'https://123.456.789',
            tractData: [
                { label: '立体声', value: 'all' },
                { label: '左声道', value: 'left' },
                { label: '右声道', value: 'right' }
            ]
        }
    },
    methods: {
        beforePlay() {
            this.src = 'https://456.789.10'
        },
        audioElement(ele) {
            console.log('audioElement is ', ele)
        },
        downloadError() {
            console.log('下载失败')
        },
        error(event) {
            console.log('音频文件加载失败', event)
        }
    }
}
<\/script>

`)])])])}],n=r(l,d,v,!1,null,null,null,null);const s=n.exports,F={components:{Me:s}};var E=function(){var u=this,e=u._self._c;return e("me")},c=[],i=r(F,E,c,!1,null,null,null,null);const D=i.exports;export{D as default};
