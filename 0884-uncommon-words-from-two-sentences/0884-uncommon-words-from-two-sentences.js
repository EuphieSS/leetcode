/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const combined = s1.split(' ').concat(s2.split(' '));
  const output = [];
  
  for (const word of combined) {
    if (combined.indexOf(word) === combined.lastIndexOf(word)) {
      output.push(word);
    }
  }
  
  return output;
};