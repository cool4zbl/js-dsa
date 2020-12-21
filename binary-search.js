function generateArr(length, min, max) {
  if (min === 0) {
    min = 0;
  }
  if (max === 0) {
    max = 20;
  }
  const result = [];
  while (length--) {
    result.push(Math.round(Math.random() * (max - min)));
  }
  return result;
}

function binarySearch(arr, key) {
  arr = arr.sort((a, b) => a - b);

  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);

    if (key < arr[mid]) {
      hi = mid - 1;
    } else if (key > arr[mid]) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
// const a = generateArr(10);
// const col = binarySearch(a, 5);
var a = [10, 20, 11, 21, 5, 6, 8, 2, 1];
var col = binarySearch(a, 5);
console.log('col', col);
