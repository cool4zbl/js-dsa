/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let lo = 0
    let hi = n

    while (lo <= hi) {
      const mid = Math.floor(lo + (hi - lo) / 2)
      if (isBadVersion(mid)) {
        hi = mid - 1
      } else {
        lo = mid + 1
      }
    }

    return lo > n ? -1 : lo
  }
}
// @lc code=end
