/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (k > nums.length) {
    nums.unshift(...nums.splice(nums.length - k % nums.length, k % nums.length));
  } else {
    nums.unshift(...nums.splice(nums.length - k, k));
  }
  return nums;
}

// below exceeds time limit
// var rotate = function(nums, k) {
//   while (k--) {
//     nums.unshift(nums.pop());
//   }
//   return nums;
// };