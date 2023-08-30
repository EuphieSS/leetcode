/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
  const validNums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      validNums.push(i);
    }
  }
  const sum = validNums.reduce((acc, cV) => acc + cV, 0);
  return sum;
};