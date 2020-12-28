// debounce-with-trailing-and-leading

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  // your code here

  let timer

  const startTimer = function (args) {
    timer = setTimeout(() => {
      if (option.trailing && args) {
        func.apply(this, args)
        clearTimeout(timer)
      }
    }, wait)
  }

  return function (...args) {
    if (option.leading) {
      if (!timer) {
        func(...args)
      }
      startTimer()
      return
    }

    if (timer) {
      clearTimeout(timer)
    }
    startTimer(args)
  }
}
