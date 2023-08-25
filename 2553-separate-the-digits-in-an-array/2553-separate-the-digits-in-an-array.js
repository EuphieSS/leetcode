/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
  const output = [];
  nums.forEach(num => {
    output.push(String(num).split('').map(Number));
  })
  return output.flat();
};