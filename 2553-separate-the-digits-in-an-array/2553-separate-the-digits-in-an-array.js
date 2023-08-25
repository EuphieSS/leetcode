/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
  const output = [];
  nums.forEach(num => {
    output.push(Array.from(String(num), Number));
  })
  return output.flat();
};