/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  const output = [];
  let i = 0;
  let num_candies = 1;
  while (candies > 0) {
    if (candies < num_candies) {
      output[i] ? output[i] += candies : output.push(candies);
      break;
    }
    output[i] ? output[i] += num_candies : output.push(num_candies);
    candies -= num_candies;
    num_candies++;
    i === num_people - 1 ? i = 0 : i++;
  }
  if (output.length < num_people) {
    while (output.length < num_people) {
      output.push(0);
      i++;
    }
  }
  return output;
};