/*
 * 62. implement BigInt addition
 * @see https://bigfrontend.dev/problem/add-BigInt-string
 */

/**
 * time: O(max(num1.length, num2.length))
 * space: O(num1.length + num2.length)
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  // your code here
  if (!num1 || !num2) {
    return num1 || num2
  }

  const arr1 = Array.from(num1)
  const arr2 = Array.from(num2)

  const result = []
  let carry = 0

  while (arr1.length || arr2.length || carry) {
    let sum = (+arr1.pop() || 0) + (+arr2.pop() || 0) + carry
    carry = Math.floor(sum / 10)
    sum %= 10
    result.unshift(sum)
  }

  return result.join('')
}

/**
 * time: O(max(num1.length, num2.length))
 * space: O(max(num1.length, num2.length))
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add2(num1, num2) {
  if (!num1 || !num2) {
    return num1 || num2
  }

  let i = num1.length - 1
  let j = num2.length - 1
  const result = []

  let carry = 0

  while (i >= 0 || j >= 0 || carry) {
    let sum = (+num1[i--] || 0) + (+num2[j--] || 0) + carry
    result.unshift(sum % 10)
    carry = Math.floor(sum / 10)
  }
  return result.join('')
}

console.log(add('999999999999999999', '1'))
console.log(add('0', '1'))
console.log(add('0', '0'))
console.log(add('1', '0'))
console.log(add('123456789123456789123456789', '123456789123456789123456789'))

console.log(add2('999999999999999999', '1'))
console.log(add2('0', '1'))
console.log(add2('0', '0'))
console.log(add2('1', '0'))
console.log(add2('123456789123456789123456789', '123456789123456789123456789'))
