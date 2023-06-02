/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  s = s.split("").sort();
  t = t.split("").sort();
  let i = 0;
  while (i < t.length) {
    if (s[i] !== t[i]) {
      return t[i];
    }
    i++;
  }
};