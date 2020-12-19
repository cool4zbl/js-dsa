function generateArr(length: number, min = 0, max = 20) {
  const result = [];
  while (length--) {
    result.push(Math.round(Math.random() * (max - min)));
  }
  return result;
}

/**
 * calculate Sum [lo, hi], 记住左右闭合
 * entry: sum(A, 0, n - 1), n = arr.length
 * @param arr
 * @param lo low index
 * @param hi high index
 */
function sum(arr, lo, hi) {
  if (lo == hi) return arr[lo];
  const mid = Math.floor((lo + hi) >> 1));
  return sum(arr, lo, mid) + sum(arr, mid + 1, hi);
}

/**
 * calculate Sum [lo, hi), 记住左闭右开
 * entry: sum(A, 0, n), n = arr.length
 * @param arr
 * @param lo low index
 * @param hi high index
 */
function sum1(arr, lo, hi) {
  if (hi - lo < 2) return arr[lo];
  const mid = Math.floor((lo + hi) >> 1);
  return sum1(arr, lo, mid) + sum1(arr, mid, hi);
}

// const a = generateArr(3);
// const r = sum(a, 0, a.length - 1);
// r
// const r1 = sum1(a, 0, a.length);
// r1