/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  s = s.split(' ');
  let i = 0;
  let num = -1;
  while (i < s.length) {
    if (Number(s[i])) {
      if (Number(s[i]) > num) {
        num = Number(s[i]);
      } else {
        return false;
      }
    }
    i++;
  }
  return true;
};