/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let output = [];
  
  for (let i = 0; i < nums.length; i++) {
    let secondValue = target - nums[i];
    if (nums.slice(i + 1).includes(secondValue)) {
      output.push(i, nums.lastIndexOf(secondValue));
      break;
    }
  }
  
  return output;
};