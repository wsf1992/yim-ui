export default function throttled(delay = 1000) {
    const set = new Set()
    return async function (uniqueId, fn, failFn) {
        if (!set.has(uniqueId)) {
            set.add(uniqueId)
            try {
                await fn()
            } catch (error) { }
            setTimeout(() => {
                set.delete(uniqueId)
            }, delay)
        } else {
            failFn && failFn()
        }
    }
}