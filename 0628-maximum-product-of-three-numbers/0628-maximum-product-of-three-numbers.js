/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums = nums.sort((a,b) => a - b)
  if (nums[0] > 0 || nums[nums.length - 1] < 0 ) {
    return nums[nums.length - 3] * nums[nums.length - 2] * nums[nums.length - 1];
  } else {
    return nums[0] * nums [1] * nums[nums.length - 1] > nums[nums.length - 3] * nums[nums.length - 2] * nums[nums.length - 1] ? nums[0] * nums [1] * nums[nums.length - 1] : nums[nums.length - 3] * nums[nums.length - 2] * nums[nums.length - 1];
  }
};