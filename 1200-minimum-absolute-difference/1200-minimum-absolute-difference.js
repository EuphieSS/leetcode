/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b);
  let difference = arr[1] - arr[0];
  let i = 0;
  let j = 1;
  let output = [];
  while (j < arr.length) {
    if (arr[j] - arr[i] === difference) {
      output.push([arr[i], arr[j]]);
    }
    if (arr[j] - arr[i] < difference) {
      difference = arr[j] - arr[i];
      output = [[arr[i], arr[j]]];
    }
    i++;
    j++;
  }
  return output;
};