/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const output = [];
  let i = 0;
  let j = nums.length - 1;
  let counter = 0;
  while (i < nums.length) {
    if (nums[i] > nums[j]) {
      counter++;
    }
    j--;
    if (j < 0) {
      output.push(counter);
      j = nums.length - 1;
      counter = 0;
      i++;
    }
  }
  return output;
};