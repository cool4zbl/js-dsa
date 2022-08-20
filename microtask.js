/**
 * `Promise` will be in a microtask queue
 * `setTimeout` will be in a macrotask queue
 */
console.log(1)
const promise = new Promise((resolve) => {
  console.log(2)
  resolve()
  console.log(3)
})

console.log(4)

promise
  .then(() => {
    console.log(5)
  })
  .then(() => {
    console.log(6)
  })

console.log(7)

setTimeout(() => {
  console.log(8)
}, 10)

setTimeout(() => {
  console.log(9)
}, 0)

const messageQueue = []

const sendMessage = (msg) => {
  messageQueue.push(msg)

  if (messageQueue.length === 1) {
    queueMicrotask(() => {
      const json = JSON.stringify(msg)
      messageQueue.length = 0
      // fetch('https://google.com', json)
      console.log('send json: ', json)
    })
  }
}

sendMessage('haha')
sendMessage('zbl')
sendMessage('bye')
