# title

该组件是title，主要用于统一样式

## 样式

![alt text](./image.png)

## Attributes

| 参数          | 说明           | 类型          | require | 默认值 |
| ------------- | -------------- | ------------- | ------- | ------ |
| title| title标题         | String/number | false    | ""     |


## slot

| 参数   | 说明                 | 
| ------ | -------------------- | 
| right | 自定义左侧内容 |
| right | 自定义右侧内容 |

## Example

```JavaScript
<template>
    <div>
        <mi-title title="123">
            <template v-slot:left>
                <span style="margin-left: 20px;">leftcontent</span>
            </template>
            <template v-slot:right>rightcontent</template>
        </mi-title>
    </div>
</template>

```
