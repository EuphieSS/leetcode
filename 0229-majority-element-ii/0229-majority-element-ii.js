/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const obj = {};
  let output = [];
  const constraint = nums.length / 3;
  for (const num of nums) {
    num in obj ? obj[num]++ : (obj[num] = 1);
  }
  for (const count in obj) {
    if (obj[count] > constraint) {
      output.push(Number(count));
    }
  }
  return output;
};