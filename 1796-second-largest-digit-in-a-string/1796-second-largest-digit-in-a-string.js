/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  const nums = [];
  for (const num of s) {
    if (!isNaN(Number(num)) && !nums.includes(Number(num))) {
      nums.push(Number(num));
    }
  }
  nums.sort((a, b) => b - a);
  return nums.length > 1 ? nums[1] : -1;
};