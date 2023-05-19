/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const numArr = [...x + ''];
  const original = numArr.join();
  const reversed = numArr.reverse().join();
  
  if (original === reversed) {
    return true;
  } else {
    return false;
  }
};