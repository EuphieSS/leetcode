/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let fives = 0;
  let tens = 0;
  
  for (const bill of bills) {
    if (bill === 5) {
      fives++;
    }
    if (bill === 10) {
      fives--;
      tens++;
    }
    if (bill === 20) {
      tens > 0 ? (fives--, tens--) : fives -=3;
    }
    if (fives < 0) {
      return false;
    }
  }
  
  return true;
};