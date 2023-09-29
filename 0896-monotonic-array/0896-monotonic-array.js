/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  let i = 0;
  if (nums[i] > nums[nums.length - 1]) {
    nums.reverse();
  }
  while (i < nums.length) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
    i++;
  }
  return true;
};