/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let i = 0;
  let j = s.length - 1;
  let counter = 0;
  while (i < j) {
    if (vowels.includes(s[i])) {
      counter++;
    }
    if (vowels.includes(s[j])) {
      counter--;
    }
    i++;
    j--;
  }
  return counter === 0 ? true : false;
};