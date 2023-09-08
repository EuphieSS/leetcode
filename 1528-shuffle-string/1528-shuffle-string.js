/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  const output = [];
  for (let i = 0; i < s.length; i++) {
    let index = indices.indexOf(i);
    output.push(s[index]);
  }
  return output.join('');
};