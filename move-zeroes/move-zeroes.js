/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = nums.length;
  let i = 0;
  while (count > 0) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    }
    i++;
    count--;
  }
  return nums;
};