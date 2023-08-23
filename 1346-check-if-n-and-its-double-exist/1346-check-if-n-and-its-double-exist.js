/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  arr.sort((a, b) => a - b);
  let i = 0;
  while (i < arr.length - 1) {
    if (arr.includes(arr[i] * 2) && arr.lastIndexOf(arr[i] * 2) !== i) {
      return true;
    }
    i++;
  }
  return false;
};