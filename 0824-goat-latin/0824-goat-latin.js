/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const output = [];

  for (let word of sentence.split(' ')) {
    if (vowels.includes(word[0].toLowerCase())) {
      output.push(word + 'ma');
    } else {
      word = word.split('');
      const firstLetter = word.shift();
      word.push(firstLetter);
      output.push(word.join('') + 'ma');
    }
  }
  
  let goat = 'a';
  for (let i = 0; i < output.length; i++) {
    output[i] += goat;
    goat += 'a';
  }
  
  return output.join(' ');
};