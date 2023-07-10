/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const sorted = [...heights];
  sorted.sort((a, b) => a - b);
  let output = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) {
      output++;
    }
  }
  return output;
};