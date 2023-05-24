/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    if (!output.includes(nums[i])) {
      output.push(nums[i]);
    } else {
      nums[i] = undefined;
    }
  }
  nums.sort((a, b) => a - b);
  return output.length;
};