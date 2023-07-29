/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  s = s.split('');
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!vowels.includes(s[i])) {
      i++;
    }
    if (!vowels.includes(s[j])) {
      j--;
    }
    if (vowels.includes(s[i]) && vowels.includes(s[j])) {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      i++;
      j--;
    }
  }
  return s.join('');
};