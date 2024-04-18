# Throttled

Throttled 用于节流：单位时间只执行一次主函数

## 方法详解

```JavaScript
// 1、引入 throttled
import { throttled } from 'yim-ui/util/main'

// 2、注册 myThrottled 函数
const myThrottled = throttled(delay)

// 3、调用 myThrottled ：接受三个参数。参数1：uniqueId  参数2： fn； 参数3: failFn
myThrottled(() => 1 , () => {
    // fn： 主函数
}, () => {
    // failFn: 节流成功后 调用的函数
})

```

## Example

```JavaScript
import { throttled } from 'yim-ui/util/main'

const myThrottled = throttled()
myThrottled(1, () => {
    console.log('主函数执行了')
},() => {
    console.log('节流成功，执行该函数')
})

```

## params

| 参数          | 说明           | 类型          | require | 默认值 |
| ------------- | -------------- | ------------- | ------- | ------ |
| uniqueId |    唯一ID    | string/number | true    | --     |
| fn          | 主函数，符合条件时会被调用 | Function         | true    | --   |
| failFn          | 节流成功后 会被调用 | Function         | true    | --   |
| delay          | fn 调用间隔,单位毫秒 | Number         | false    | 1000   |


