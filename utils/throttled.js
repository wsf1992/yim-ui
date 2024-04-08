export default function (delay = 1000) {
    const map = new Map()
    return async function (uniqueFn, fn, failFn) {
        const id = uniqueFn()
        if (!map.has(id)) {
            await fn()
            map.set(id, true)
            setTimeout(() => {
                map.delete(id)
            }, delay)
        } else {
            failFn && failFn()
        }
    }
}