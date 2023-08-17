/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
  nums.sort((a, b) => a - b);
  const output = nums.filter(num => num !== nums[0] && num !== nums[nums.length - 1])
  return output.length;
};