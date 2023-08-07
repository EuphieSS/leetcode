/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let output = "";
  let i = 0;
  while (i !== word1.length || i !== word2.length) {
    if (i === word1.length - 1) {
      output += word1[i];
      return output += word2.slice(i);
    }
    if (i === word2.length - 1) {
      output += word1[i];
      output += word2[i];
      return output += word1.slice(i + 1);
    }
    output += word1[i] + word2[i];
    i++;
  }
};