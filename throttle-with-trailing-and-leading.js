// 5. implement throttle() with leading & trailing option
// @see https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option

function throttle(func, wait, options = { leading: true, trailing: true }) {
  const { leading, trailing } = options
  let isCooling = false
  let lastArgs

  return function () {
    if (isCooling) {
      lastArgs = arguments
      return
    }

    if (leading) {
      func(...arguments)
    } else {
      lastArgs = arguments
    }

    const timeup = () => {
      // 如果可以调用, 有之前缓存的参数
      if (trailing && lastArgs) {
        func(...lastArgs)
        lastArgs = null
        isCooling = setTimeout(timeup, wait)
      } else {
        // 不能调用则直接清空会原始状态
        isCooling = null
      }
    }

    isCooling = setTimeout(timeup, wait)
  }
}
