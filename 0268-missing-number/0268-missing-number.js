/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums.sort((a,b) => a - b);
  let output;
  let i = 0;
  while (i < nums.length + 1) {
    if (nums[i] !== i) {
      return output = i;
    }
    i++;
  }
};