/**
Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array.
Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.

Example 1:
Input: [3, 1, 4, 1, 5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.

Example 2:
Input:[1, 2, 3, 4, 5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = (nums, k) => {
  const obj = {}
  let count = 0

  nums.forEach(n => {
    if (obj[n] === undefined) obj[n] = 1
  })

  Object.keys(obj).forEach(num => {
    // const diff = Math.abs(num - k);
    const diff = Number(num) + k

    if (obj[diff] === 1) {
      count++
      // obj[diff] = 0;
    }
  })

  return count
}

/**
 * test case 0
 */

// console.log(findPairs([1, 2, 3, 4, 5], 1));

/**
 * test case 1
 */

// console.log(findPairs([9, 5, 6, 8, 1, 3, 4], 3));
// console.log(findPairs([3, 1, 4, 1, 5], 2));
console.log(findPairs([1, 3, 4, 1, 5], 2))
