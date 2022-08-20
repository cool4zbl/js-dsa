let i = 0
let start = Date.now()
function count() {
  do {
    i++
  } while (i % 1e6 !== 0)

  if (i === 1e9) {
    console.log('Count spend time: ', Date.now() - start)
  } else {
    setTimeout(count)
  }
}
count()

let i2 = 0
let start2 = Date.now()
function count2() {
  for (let j = 0; j < 1e9; j++) {
    i2++
  }
  console.log('Count2 spend time: ', Date.now() - start2)
}
count2()

let i3 = 0
let start3 = Date.now()

function count3() {
  // move the scheduling to the beginning
  if (i3 < 1e9 - 1e6) {
    queueMicrotask(count3) // schedule the new call
  }

  do {
    i3++
  } while (i3 % 1e6 !== 0)

  if (i3 === 1e9) {
    console.log('Count3 spend time: ' + (Date.now() - start3))
  }
}

count3()
