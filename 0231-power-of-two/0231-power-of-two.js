/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  const power = Math.log2(n);
  return Number.isInteger(power) ? true : false;
};