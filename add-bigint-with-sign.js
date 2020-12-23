// 76. implement add-bigint-with-sign
// @see https://bigfrontend.dev/problem/implement-BigInt-addition-with-sign

// Looks a bit messy now, finding a better way...

/**
 *
 * @param {*} num1
 * @param {*} num2
 *
  ```
    '-' + '+' = - ('+' + '-')
    '-' + '-' = - ('+' + '+')
  ```
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  if (!num1 || !num2) return num1 || num2

  if (num1 == 0) return num2
  if (num2 == 0) return num1

  num1 = addSign(num1)
  num2 = addSign(num2)

  const sign1 = num1[0]
  const sign2 = num2[0]

  const op = sign1 === sign2 ? '+' : '-'
  const isNegative = sign1 === '-'

  let i = num1.length - 1
  let j = num2.length - 1

  let carry = 0
  let result = []

  while (i >= 1 || j >= 1 || carry) {
    const digit1 = +num1[i--] || 0
    const digit2 = +num2[j--] || 0

    let sum
    if (op === '-') {
      sum = digit1 - digit2 - carry + 10
      carry = Math.floor(sum / 10) > 0 ? 0 : 1
    } else {
      sum = digit1 + digit2 + carry
      carry = Math.floor(sum / 10)
    }
    result.unshift(sum % 10)
  }

  while (result.length > 1 && +result[0] === 0) {
    result.shift()
  }

  if (isNegative) {
    result.unshift('-')
  }

  return result.join('')
}

function addSign(str) {
  if (['-', '+'].includes(str[0])) {
    return str
  }
  return `+${str}`
}

console.log(add('-999999999999999999', '-1'))
// '-1000000000000000000'

console.log(add('-999999999999999999', '+1'))
// '-999999999999999998'

console.log(add('9', '-1'))
console.log(add('19', '1'))
console.log(add('+1', '-1'))
console.log(add('-1', '-1'))
console.log(add('0', '10000'))
console.log(add('0', '-10000'))
// `0 === -0` is true in JS...
console.log(add('0', '-0'))
console.log(add('0', '-9'))
console.log(add('-10', '9'))
console.log(add('10', '-9'))
console.log(add('100', '-9'))
