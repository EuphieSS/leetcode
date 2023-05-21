/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  const sorted = [...nums].sort((a, b ) => a - b);
  let maxSum = 0;
  
  for (let i = 0; i < sorted.length; i += 2) {
    const pair = [];
    pair.push(sorted[i], sorted[i + 1]);
    maxSum += (Math.min(...pair));
  }
  
  return maxSum;
};