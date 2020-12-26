// throttle

function throttle(func, wait) {
  let isCalled = false
  let lastArgs

  return function throttleInner() {
    if (!isCalled) {
      isCalled = true
      func(...arguments)

      setTimeout(() => {
        isCalled = false
        if (lastArgs) {
          func(...lastArgs)
        }
      }, wait)
    } else {
      lastArgs = arguments
    }
  }
}
