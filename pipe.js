// 11. what is Composition? create a pipe()
// @see https://bigfrontend.dev/problem/what-is-composition-create-a-pipe

/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  // your code here
  /*
  return function (x) {
    let re = x
    while (funcs.length) {
      let func = funcs.shift()
      re = func(re)
    }
    return re
  }
  */
  return arg => funcs.reduce((result, func) => func(result), arg)
}
