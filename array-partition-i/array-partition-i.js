/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  const sorted = [...nums].sort((a, b ) => a - b);
  const pairings = [];
  
  for (let i = 0; i < sorted.length; i += 2) {
    const pair = [];
    pair.push(sorted[i], sorted[i + 1]);
    pairings.push(Math.min(...pair));
  }
  
  const maxSum = pairings.reduce(
    (accu, currentValue) => accu + currentValue, 0
  );
  
  return maxSum;
};