/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  arr.sort((a, b) => a - b);
  const fivePercent = arr.length * 0.05;
  const fivePercentRemoved = arr.slice(fivePercent, -fivePercent);
  const output = fivePercentRemoved.reduce((acc, cV) => acc + cV, 0);
  return Number((output / fivePercentRemoved.length).toFixed(5));
};