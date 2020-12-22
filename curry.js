// 1. Implement curry()
// @see https://bigfrontend.dev/problem/implement-curry

/**
  Implement curry
  The key points are:
    1. knowing when to execute the curried function;
    2. if not the execution time now, what is to return
  So, we can see the execution time is when the number of `arguments` of the new curried function equal to or greater than the original function we input before.
  And if the number of `arguments` is not enough, we only need to return the curried function with current arguments bound and wait for the execution time.
 */

/**
 * @param { Function } func
 */
function curry(func) {
  const actualArgsLen = func.length

  return function curried() {
    if (arguments.length >= actualArgsLen) {
      return func.call(this, ...arguments)
    }
    // the same two methods.
    // return curry(func.bind(null, ...arguments))
    return curried.bind(this, ...arguments)
  }
}

const join = (a, b, c) => `${a}_${b}_${c}`

const curryJoin = curry(join)

console.log(curryJoin(1)(2, 3))
console.log(curryJoin(1, 2, 3))
console.log(curryJoin(1, 2, 3, 4))
console.log(curryJoin(1, 2)(3))
console.log(curryJoin(1)(2)(3))
