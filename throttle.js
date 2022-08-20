// implement basic throttle
// @see https://bigfrontend.dev/problem/implement-basic-throttle

function throttle(func, wait) {
  // 1. 如果不是 cool time , 则调用 func, 并且重置冷却时间
  //    1.2 冷却时间过了后，检查是否有额外的缓存 `arguments`, 如果有，则直接调用
  // 2. 如果是 cool time, 则把当前 `arguments` 缓存起来

  let isCooling = false
  let lastArgs

  return function throttleInner() {
    if (!isCooling) {
      isCooling = true
      func(...arguments)

      setTimeout(() => {
        isCooling = false
        if (lastArgs) {
          func(...lastArgs)
        }
      }, wait)
    } else {
      lastArgs = arguments
    }
  }
}
