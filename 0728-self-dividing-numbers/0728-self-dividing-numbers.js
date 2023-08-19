/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const output = [];
  let i = left;
  while (i < 10) {
    output.push(i);
    i++;
  }
  while (i <= right) {
    let temp = i;
    if (temp % 10 === 0) {
      i++;
    } else {
      temp = Array.from(String(temp), Number);
      let selfDiving = true;
      temp.forEach(num => {
        if (i % num !== 0) {
          selfDiving = false;
        }
      })
      if (selfDiving) {
        output.push(i);
      }
      i++;
    }
  }
  return output;
};