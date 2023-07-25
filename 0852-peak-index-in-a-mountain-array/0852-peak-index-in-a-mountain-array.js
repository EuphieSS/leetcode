/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i !== j) {
    if (arr[i] < arr[i + 1]) {
      i++;
    }
    if (arr[j] < arr[j - 1]) {
      j--;
    }
  }
  return i;
};