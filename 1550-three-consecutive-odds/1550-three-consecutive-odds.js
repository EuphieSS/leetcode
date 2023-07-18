/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  let counter = 0;
  let i = 0;
  while (counter < 3 && i < arr.length) {
    arr[i] % 2 !== 0 ? counter++ : counter = 0;
    i++;
  }
  return counter === 3 ? true : false;
};