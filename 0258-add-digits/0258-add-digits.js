/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while (num >= 10) {
    const numArr = Array.from(String(num), Number);
    num = numArr.reduce(
      (acc, cV) => acc + cV, 0
    );
  }
  return num;
};