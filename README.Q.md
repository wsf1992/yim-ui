这里主要记录 该项目开发过程中遇到的问题

## element-ui 按需引入

element-ui 官方文档介绍，引入 `babel-plugin-component`，然后可以按需引入，但实际操作过程中，发现打包之后文件在 1000k 以上（打包了所有内容）

这里采用另外一种方式进行按需引入：（暂时未发现该方式问题）

1、element-ui lib 目录下 有单个组件的打包版本，

2、element-ui lib/theme-chalk 目录下，有组件对应的 css 文件

```JavaScript
// 以 YmPopover 组件为例使用了 element Popover 组件，这么引入
import Popover from "element-ui/lib/popover";
import "element-ui/lib/theme-chalk/popover.css";

```

## vite 打包器的不足

vite 的优点不需要赘述，这里记录下使用过程中 感觉不足的地方

1、vite 不适用于需要兼容低版本浏览器的应用：主要问题在于调试，低版本浏览器需要打包后调试，比较麻烦

2、vite 开发过程中，无法知晓整体项目是否有错误：浏览器请求源码时，只导入屏幕上实际需要使用的部分代码

##
