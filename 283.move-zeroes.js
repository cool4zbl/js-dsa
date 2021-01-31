/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastNonZeroPos = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroPos++] = nums[i]
    }
  }

  for (let i = lastNonZeroPos; i < nums.length; i++) {
    nums[i] = 0
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Time Complexity: O(n^2)
var moveZeroesBruce = function (nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[j] === 0) {
      nums.splice(j, 1)
      nums.push(0)
    } else {
      j++
    }
  }
}
// @lc code=end
