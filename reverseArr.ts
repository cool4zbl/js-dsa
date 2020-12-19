/**
 * Reverse an arry.
 * @param arr array to be reversed
 * @param a low index
 * @param b high index
 */
function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function reverse(arr, lo, hi) {
  if (lo > hi) return;
  swap(arr, lo, hi);
  return reverse(arr, ++lo, --hi);
}

const a = [1, 2, 3, 4, 5];
reverse(a, 0, a.length - 1);
