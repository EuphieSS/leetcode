/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
  let output = 0;
  const smallerNum = a > b ? b : a;
  let i = 1;
  while (i <= smallerNum) {
    if (a % i === 0 && b % i === 0) {
      output++;
    }
    i++;
  }
  return output;
};