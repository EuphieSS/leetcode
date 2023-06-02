/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0;
  while (n--) {
    nums1.splice(m, 1, nums2[i]);
    i++;
    m++;
  }
  return nums1.sort((a, b) => a - b);
};