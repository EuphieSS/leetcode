/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.split(" ");
  const output = [];
  s.forEach(str => {
    output.push(str.split("").reverse().join(""));
  })
  return output.join(" ");
};