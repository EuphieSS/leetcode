/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  const soldierCount = mat.map(row => {
    const count = row.reduce(
    (accu, currentValue) => accu + currentValue, 0);
    return count;
  });
  
  const object = Object.assign({}, soldierCount);
  
  const countWithIndex = Object.entries(object);
  
  const sortedCount = countWithIndex.sort((a, b) => a[1] - b[1]);
  
  let output = [];
  for (let i = 0; i < k; i++) {
    output.push(Number(sortedCount[i][0]));
  }

  return output;
};