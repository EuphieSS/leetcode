/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  s = s.split(' ').slice(0, k);
  return s.join(' ');
};