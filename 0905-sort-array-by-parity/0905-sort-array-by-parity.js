/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      const temp = nums.splice(i, 1);
      nums.unshift(...temp);
    }
  }
  return nums;
};
