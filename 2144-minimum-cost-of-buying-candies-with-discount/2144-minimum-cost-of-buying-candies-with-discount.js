/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
  cost.sort((a, b) => b - a);
  const candies = [];
  let i = 0;
  while (i < cost.length) {
    candies.push(cost[i]);
    if (typeof cost[i + 1] === 'number') {
      candies.push(cost[i + 1]);
    }
    i += 3;
  }
  const totalCost = candies.reduce((acc, cV) => acc + cV, 0);
  return totalCost;
};