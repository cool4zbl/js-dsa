/*
Description
给一个长度为2<=n<=10^5的deque，每次操作取出队首两个元素，将较大的放到队尾，较小的放到队首，求第1<=m<=10^18次操作时取出的元素。
*/

function run(deque, n) {
  const len = deque.length

  if (len > n) {
    loop(deque, n)
    return [deque[0], deque[1]]
  } else {
    loop(deque, len - 1)
    const pos = n % (len - 1)
    deque
    return [deque[0], deque[pos + 1]]
  }
}

function loop(deque, count) {
  while (count--) {
    const a1 = deque.shift()
    const a2 = deque.shift()

    if (a1 < a2) {
      deque.unshift(a1)
      deque.push(a2)
    } else {
      deque.unshift(a2)
      deque.push(a1)
    }
  }
}

const deque = [4, 3, 1, 2]

console.log(run(deque, 8))
