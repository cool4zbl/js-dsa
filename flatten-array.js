// 3. implment array prototype flat
// @see https://bigfrontend.dev/problem/implement-Array-prototype.flat

/**
 * Recursive
 * @param {Array} arr
 * @param {number} depth
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  if (depth === 0 || !Array.isArray(arr)) return arr

  let result = []
  arr.forEach((elm) => {
    result = result.concat(flat(elm, depth - 1))
  })
  return result
}

function flatIterative(arr, depth = 1) {
  if (depth === 0 || !Array.isArray(arr)) return arr

  const result = [...arr]
  let isAllFlatten = true

  do {
    result.forEach((elm, i) => {
      if (Array.isArray(elm)) {
        isAllFlatten = false
        result.splice(i, 1, ...elm)
      } else {
        isAllFlatten = true
      }
    })
  } while (--depth && !isAllFlatten)

  return result
}

const arr = [1, [2], [3, [4]]]

console.log(flat(arr))
console.log(flat(arr, 1))
console.log(flat(arr, 2))
console.log(flat(arr, Infinity))
console.log(flatIterative(arr))
console.log(flatIterative(arr, 1))
console.log(flatIterative(arr, 2))
console.log(flatIterative(arr, Infinity))
