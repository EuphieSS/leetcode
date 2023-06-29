/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let output = 0;
  stones.split('').map(stone => jewels.includes(stone) ? output++ : output);
  return output;
};