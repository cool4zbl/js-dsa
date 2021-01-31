/**
 * Reduce util
 */
const reduce = (arr, func, initial) => {
  let result = initial

  for (let i = 0; i < arr.length; i++) {
    result = func(result, arr[i])
  }
  return result
}

const add = (a, b) => a + b
const summed = reduce([1, 2, 3], add, 0)
summed
