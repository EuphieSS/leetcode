/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
      const cIndices = [];
  const output = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      cIndices.push(i);
    }
  }
  cIndices.push(99999)
  
  let i = 0;
  let j = 0
  while (i < s.length) {
    if (i < cIndices[0]) {
      output.push(cIndices[j] - i);
    }
    else if (i === cIndices[j]) {
      output.push(0);
      j++;
    } else {

      let smallest = Math.min(Math.abs(cIndices[j] - i), Math.abs(cIndices[j-1] -i));
      output.push(smallest)
    }
    i++;
  }

  return output;
};