function generateArr(length: number, min = 0, max = 20) {
  const result = [];
  while (length--) {
    result.push(Math.round(Math.random() * (max - min)));
  }
  return result;
}

function binarySearch(arr: number[], element: number) {
  arr = arr.sort((a, b) => a - b);
  console.log('arr ', arr);

  let low = 0,
    high = arr.length - 1,
    mid;

  while (low < high) {
    mid = Math.floor((low + high) >> 1);
    if (arr[mid] === element) return mid;
    if (arr[mid] > element) {
      high = mid;
      continue;
    }
    low = mid;
  }
  return false;
}

// const a = generateArr(10);
// const col = binarySearch(a, 5);
const a = [10, 20, 11, 21, 5, 6, 8, 2, 1];
const col = binarySearch(a, 5);
console.log('col', col);

// const b = [10, 20, 30, 40, 11];

// const br = binarySearch(b, 10);
// console.log('br', br);
// a
