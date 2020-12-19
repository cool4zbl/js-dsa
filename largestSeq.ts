function generateArr(length: number, min = 0, max = 20) {
  const result = [];
  while (length--) {
    result.push(Math.round(Math.random() * (max - min) + min));
  }
  return result;
}

/**
 * find largest sequence
 * @param arr arrays
 */
function gsLS(arr: number[]) {
  const n = arr.length;
  if (!n) return 0;

  let i = n,
    j = n;
  let sum = 0,
    gs = arr[0];

  while (0 < i--) {
    i;
    j;
    sum += arr[i];

    if (gs < sum) gs = sum;
    if (sum <= 0) {
      sum = 0;
      j = i;
    }
  }
  return gs;
}

const a = generateArr(5, -10, 12);
a;

const b = gsLS(a);
b;
