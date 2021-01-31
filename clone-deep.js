// 63. create `_.cloneDeep()`
// https://bigfrontend.dev/problem/create-cloneDeep

/**
 * cloneDeep
 * for primitive types, plain Objects with all enumerable properties, and Array
 * NOTES:
 *  1. `Symbol` prop in objects: use `Object.getOwnPropertySymbols(data)`;
 *  2. Circular reference: use a cached map/stack to track the data
 * @param data
 * @param map cached clone result, for avoiding circular case
 */
function cloneDeep(data, map = new Map()) {
  if (data === null || typeof data !== 'object') return data

  if (map.has(data)) {
    return map.get(data)
  }

  const result = Array.isArray(data) ? [] : {}
  map.set(data, result)

  const keys = [...Object.getOwnPropertySymbols(data), ...Object.keys(data)]

  keys.forEach(key => {
    result[key] = cloneDeep(data[key], map)
  })

  return result
}

/** Test Cases */
console.log(cloneDeep([1, [2, 3], { a: { b: { c: 3 }, d: 4 } }]))
const obj = {
  a: { b: {} },
}
obj.a.b.c = obj.a
console.log(cloneDeep(obj))
const arr = [1, 3]
arr[2] = arr
console.log(cloneDeep(arr))
