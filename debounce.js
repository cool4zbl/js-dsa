// debounce
// @see https://bigfrontend.dev/problem/implement-basic-debounce

/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  let timer

  return function () {
    clearTimeout(timer)

    timer = setTimeout(() => {
      func(...arguments)
    }, wait)
  }
}
