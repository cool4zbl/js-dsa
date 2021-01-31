const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const matrix1 = [
  [1, 2],
  [4, 5],
  [7, 8],
]

const matrix2 = [[1, 2, 3, 4, 5]]

const matrix3 = [
  [2, 5, 8],
  [4, 0, -1],
]

function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length
  const n = matrix[0].length

  let row = 0,
    col = 0
  let count = 1
  const maxNumber = m * n
  console.log(maxNumber)

  const result = []

  while (row < m && col < n) {
    const rowMax = m - 1 - row
    const colMax = n - 1 - col

    for (let j = col; j <= colMax; j++) {
      result.push(matrix[row][j])
      count++
    }

    if (row > rowMax - 1) break
    for (let i = row + 1; i <= rowMax; i++) {
      result.push(matrix[i][colMax])
      count++
    }

    if (col > colMax - 1) break
    for (let j = colMax - 1; j > col; j--) {
      result.push(matrix[rowMax][j])
      count++
    }

    for (let i = rowMax; i > row; i--) {
      result.push(matrix[i][col])
      count++
    }

    row++
    col++
  }
  return result
}

console.log(spiralOrder(matrix))
console.log(spiralOrder(matrix1))
console.log(spiralOrder(matrix2))
console.log(spiralOrder(matrix3))
