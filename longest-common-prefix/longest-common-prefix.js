/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const sorted = [...strs].sort();
  const firstWord = sorted[0];
  const lastWord = sorted[strs.length - 1];
  
  let prefix = "";
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] === lastWord[i]) {
      prefix += firstWord[i];
    } else {
      return prefix;
    }
  }
  
  return prefix;
};