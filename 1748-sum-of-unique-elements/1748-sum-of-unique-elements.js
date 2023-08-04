/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let output = 0;
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
      output += nums[i];
    }
    if (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return output;
};