/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const vowelsInS = [];
  for (const char of s) {
    if (vowels.includes(char)) {
      vowelsInS.push(char);
    }
  }
  vowelsInS.sort();
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      s[i] = vowelsInS[0];
      vowelsInS.shift();
    }
  }
  return s.join('');
};