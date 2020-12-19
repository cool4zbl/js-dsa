/*
 * 62. implement BigInt addition
 * @see https://bigfrontend.dev/problem/add-BigInt-string
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  // your code here
  if (!num1 || !num2) {
    return num1 || num2;
  }

  if (num1.length > num2.length) {
    num2 = leftPad(num2, '0', num1.length);
  } else if (num1.length < num2.length) {
    num1 = leftPad(num1, '0', num2.length);
  }

  const arr1 = num1.split('');
  const arr2 = num2.split('');

  const len = num1.length;
  const sumArr = '0'.repeat(len + 1).split('');

  for (let i = len + 1; i--; ) {
    let result = (+arr1[i - 1] || 0) + (+arr2[i - 1] || 0) + +sumArr[i];
    if (result > 9) {
      result = result % 10;
      sumArr[i - 1] = 1;
    }
    sumArr[i] = result;
  }
  if (sumArr[0] === 0) {
    return sumArr.join('').slice(1);
  }
  return sumArr.join('');
}

function leftPad(str, padSymbol, len) {
  while (len > str.length) {
    str = `${padSymbol}${str}`;
  }
  return str;
}

console.log(add('999999999999999999', '1'));
console.log(add('0', '1'));
console.log(add('0', '0'));
console.log(add('1', '0'));
console.log(add('123456789123456789123456789', '123456789123456789123456789'));
