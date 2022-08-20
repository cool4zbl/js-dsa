// substraction-bigint
// 75. implement BigInt subtraction
// @see https://bigfrontend.dev/problem/implement-BigInt-subtraction

function subtract(num1, num2) {
  if (!num1 || !num2) return num1 || num2

  let i = num1.length - 1
  let j = num2.length - 1

  let carry = 0
  const result = []

  while (i >= 0 || j >= 0 || carry) {
    let sum = (+num1[i--] || 0) - (+num2[j--] || 0) + carry + 10

    carry = Math.floor(sum / 10) > 0 ? 0 : -1
    result.unshift(sum % 10)
  }

  while (result.length > 1 && result[0] === 0) {
    result.shift()
  }

  return result.join('')
}

console.log(subtract('1000000000000000000000', '999999999999999999999'))
console.log(subtract('0', '0'))
