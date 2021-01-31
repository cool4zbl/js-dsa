function LCS0(arr0: string[], arr1: string[]) {
  /* 数组元素c[i,j]的值仅由c[i-1,j-1]，c[i-1,j]和c[i,j-1]三个值之一确定, 只需额外两行 */
  /* TODO */
}

function LCS(arr0: string[], arr1: string[]) {
  const m = arr0.length
  const n = arr1.length
  const result = new Array(n + 1)

  for (let i = 0; i < n + 2; i++) {
    if (i === 0) result[0] = [0, 0].concat(arr0)
    else result[i] = new Array(m + 2).fill(0)
  }
  for (let i = 2; i < n + 2; i++) {
    result[i][0] = arr1[i - 2]
  }

  for (let i = 2; i < n + 2; i++) {
    for (let j = 2; j < m + 2; j++) {
      if (arr1[i - 2] === arr0[j - 2]) {
        result[i][j] = result[i - 1][j - 1] + 1
      } else {
        result[i][j] = Math.max(result[i][j - 1], result[i - 1][j])
      }
    }
  }
  console.log(result)
  return result[n + 1][m + 1]
}

const ar = 'program'.split('')
const ar1 = 'algorithm'.split('')
const s = LCS(ar, ar1)
