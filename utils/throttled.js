export default function (uniqueFn, fn, delay = 1000, reply = false) {
    const map = new Map()
    return async function (arg1, arg2) {
        const id = uniqueFn.apply(this, arg1)
        if (!map.has(id)) {
            let result = null
            if (reply) {
                result = await fn.apply(this, arg2)
            } else {
                fn.apply(this, arg2)
            }
            map.set(id, result)
            setTimeout(() => {
                map.delete(id)
            }, delay)
        }
        if (reply) return map.get(id)
    }
}