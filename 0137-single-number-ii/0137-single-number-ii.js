/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if (nums.slice(i + 1).includes(nums[i])) {
      i += 2;
    } else {
      return nums[i];
    }
  }
};