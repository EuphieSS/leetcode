/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  const output = accounts.map(account => {
    const sum = account.reduce(
      (accu, cVal) => accu + cVal, 0
    );
    return sum;
  });
  const sorted = output.sort((a, b) => b - a);
  return sorted[0];
};
