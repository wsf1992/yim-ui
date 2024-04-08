# Throttled

Throttled 用于节流，主要场景：接口节流、方法节流

## 方法详解

```JavaScript
// 1、引入 throttled
import { throttled } from 'yim-ui/utils'

// 2、注册 myThrottled 函数
const myThrottled = throttled(uniqueFn, fn, delay, reply)

// 3、调用 myThrottled ：接受两个参数，均为数组。参数1： uniqueFn arguments， 参数2： fn arguments
myThrottled(['params1'], ['params2'])

```

## Example

```JavaScript
import { throttled } from 'yim-ui/utils'

const myThrottled = throttled((uparams1, uparmas2) => uparams1 + uparmas2
, (fnParams) => {
    console.log('I executed it', fnParams)
})

// 3、调用 myThrottled ：接受两个参数，均为数组。参数1： uniqueFn arguments， 参数2： fn arguments
myThrottled([1,2], ['hello'])
myThrottled([1,2], ['hello'])
myThrottled([3,1], ['world'])

```

## params

| 参数          | 说明           | 类型          | require | 默认值 |
| ------------- | -------------- | ------------- | ------- | ------ |
| uniqueFn |    返回唯一标识，用于标记 不同的 fn     | Function | true    | --     |
| fn          | 主函数，符合条件时会被调用 | Function         | true    | --   |
| delay          | fn 调用间隔,单位毫秒 | Number         | false    | 1000   |
| reply          | 是否获取 fn 的返回结果，设置为 false 仅调用 fn，设置为 true，会返回 fn 结果（未调用会返回缓存） | Booean         | false    |  false  |


