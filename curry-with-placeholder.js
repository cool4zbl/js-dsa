// 2. implement curry() with placeholder support
// @see https://bigfrontend.dev/problem/implement-curry-with-placeholder

/**
 * curry with placeholder
 * @param {Function} func
 */
function curry(func) {
  return function curried(...args) {
    const truncateArgs = args.slice(0, func.length)
    const hasPlaceholder = truncateArgs.some((arg) => arg === curry.placeholder)

    if (!hasPlaceholder && truncateArgs.length >= func.length) {
      return func(...truncateArgs)
    }

    // Need to use the next function's `newArgs` to determine the whole arguments,
    // (replace the placeholder symbols in `args` with elements in `newArgs`)
    // so there is need to return an obvious function rather `curried.bind(null, arguments)` directly.
    return function (...newArgs) {
      // replace placeholders in args with values from newArgs
      const res = args.map((arg) =>
        arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg
      )
      return curried(...res, ...newArgs)
    }
  }
}

curry.placeholder = Symbol()

const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

console.log(curriedJoin(1, 2, 3)) // '1_2_3'
console.log(curriedJoin(1)(2)(3))
console.log(curriedJoin(1, 2)(3)) // '1_2_3'
console.log(curriedJoin(_, 2)(1, 3)) // '1_2_3'
console.log(curriedJoin(_, _, _)(1)(_, 3)(2)) // '1_2_3'
console.log(curriedJoin(_, _, _, _)(_, 2, _)(_, 3)(1))
