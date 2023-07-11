/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const obj = {};
  let majority = 0;
  let output;
  for (const num of nums) {
    num in obj ? obj[num]++ : (obj[num] = 1);
  }
  for (const count in obj) {
    if (obj[count] > majority) {
      majority = obj[count];
      output = count;
    }
  }
  return Number(output);
};