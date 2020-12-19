/**
 * Fib
 */

function fib(n) {
  let g = 0;
  let f = 1;

  while (n--) {
    g = g + f;
    f = g - f;
  }
  return g;
}
