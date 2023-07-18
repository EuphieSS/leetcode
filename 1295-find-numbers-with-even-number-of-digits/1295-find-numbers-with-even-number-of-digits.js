/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  const strings = nums.map(num => num.toString());
  let counter = 0;
  strings.forEach(x => {if (x.length % 2 === 0) counter++});
  return counter;
};