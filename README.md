# yim-ui

yim-ui 是在 Vue2.7 版本上，基于 element-ui 开发的组件库，该项目使用 vite 开发和打包。

项目目的：解决开发过程中 页面混乱、组件样式不一致、页面臃肿等问题。

项目包含：项目后期将包含至少三部分内容，组件、公共方法、公用的css

项目打包后将在 `dist` 目录下生成三个文件：`main.cjs`、`main.js`、`style.css`。

- main.cjs commomjs 格式的组件

- main.js module 格式的组件

- style.css 组件的样式

## Installation

For node.js, you can use this command to install:

    npm install yim-ui -D

## Usage

你可以引入整个 YimUi:

```JavaScript
import YimUi from 'yim-ui'
import 'yim-ui/dist/style.css'
Vue.use(YimUi)
```

你也可以按需引入部分组件:(然后进行全局或局部注册)

```JavaScript
import { YmButton } from 'yim-ui';
```

## Example

```JavaScript

```

## License

The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact

Author: Wang, Shao-feng (741987899@qq.com)
