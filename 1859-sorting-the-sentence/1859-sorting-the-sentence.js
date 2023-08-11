/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  s = s.split(' ');
  const output = [];
  let i = 1;
  while (i < s.length + 1) {
    const temp = s.filter(word => word.includes(i.toString()));
    output.push(temp[0].slice(0, -1));
    i++;
  }
  return output.join(' ');
};