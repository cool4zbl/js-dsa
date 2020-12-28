function shuffle(arr) {
  let current = arr.length
  let count = 0

  while (--current > 0) {
    const pos = Math.floor(Math.random() * (current + 1))
    ;[arr[pos], arr[current]] = [arr[current], arr[pos]]
  }
  return arr
}

const arr = [1, 2, 3, 4]
console.log(shuffle(arr))
