/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  const numsArr = num.toString().split('');
  numsArr.sort((a, b) => a - b);
  const pairs = [];
  let i = 0;
  let j = numsArr.length - 1;
  while (i < j) {
    pairs.push(Number(numsArr[i] + numsArr[j]));
    i++;
    j--;
  }
  const sum = pairs.reduce((acc, cV) => acc + cV, 0);
  return sum;
};