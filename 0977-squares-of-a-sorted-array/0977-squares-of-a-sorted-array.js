/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let output = nums.map(x => x ** 2);
  return output.sort((a, b) => a - b);
};