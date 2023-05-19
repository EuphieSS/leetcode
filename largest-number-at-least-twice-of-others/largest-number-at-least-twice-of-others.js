/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let numsCopy = [...nums];
  numsCopy.sort((a, b) => b - a);
  if (numsCopy[0] >= (numsCopy[1] * 2)) {
    console.log(nums);
    return nums.indexOf(numsCopy[0]);
  } else {
    return -1;
  }
};