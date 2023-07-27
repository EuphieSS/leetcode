/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let numArr = n.toString().split('');
  numArr = numArr.map(x => Number(x));
  const sum = numArr.reduce(
  (accu, cV) => accu + cV, 0);
  const product = numArr.reduce(
  (accu, cV) => accu * cV, 1);
  return product - sum;
};