/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
  nums.sort((a, b) => a - b);
  const validNums = nums.filter(num => num !== nums[0] && num !== nums[nums.length - 1]);
  return validNums.length ? validNums[0] : -1;
};