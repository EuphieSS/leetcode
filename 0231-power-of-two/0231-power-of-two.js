/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  const power = Math.log2(n);
  return Number.isInteger(Math.log2(n)) ? true : false;
};