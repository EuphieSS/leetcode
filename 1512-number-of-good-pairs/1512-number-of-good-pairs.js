/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let goodPairs = 0;
  let i = 0;
  while(i < nums.length - 1) {
    let j = i + 1;
    while (j < nums.length) {
      if (nums[i] === nums[j]) {
        goodPairs++;
      }
      j++;
    }
    i++;
  }
  return goodPairs;
};