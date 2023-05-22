/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const strArray = s.split(' ');
  const reversed = [];
  
  strArray.forEach(str => {
    if (str.trim().length > 0) {
      reversed.unshift(str);
    }
  });
  
  return reversed.join(' ');
};