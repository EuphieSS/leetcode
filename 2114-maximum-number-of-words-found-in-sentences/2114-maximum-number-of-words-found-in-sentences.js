/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let max = 0;
  sentences.forEach(sentence => {
    const temp = sentence.split(' ');
    if (temp.length > max) {
      max = temp.length;
    }
  })
  return max;
};