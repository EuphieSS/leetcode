/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
  const output = [];
  let i = 0;
  let j = k;
  while (i < s.length) {
    output.push(s.slice(i, j));
    i = j;
    j += k;
  }
  while (output[output.length - 1].length < k) {
    output[output.length - 1] += fill;
  }
  return output;
};