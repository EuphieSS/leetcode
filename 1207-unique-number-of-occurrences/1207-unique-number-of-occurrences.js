/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const counts = {};
  arr.forEach(x => counts[x] ? counts[x] += 1 : counts[x] = 1);
  const temp = [];
  for (const count in counts) {
    if (!temp.includes(counts[count])) {
      temp.push(counts[count]);
    } else {
      return false;
    }
  }
  return true;
};