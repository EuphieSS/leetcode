/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.split("");
  s = s.reverse().join("");
  return s.split(" ").reverse().join(" ");
};