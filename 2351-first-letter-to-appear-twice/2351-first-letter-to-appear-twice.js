/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      return s[i];
    }
    let temp;
    temp = s.slice(0, i);
    if (temp.includes(s[i])) {
      return s[i];
    }
  }
};