/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const sArray = s.split("");
  let numbers = [];
  for (const symbol of sArray) {
    switch (symbol) {
      case "M":
        numbers.push(1000);
        break;
      case "D":
        numbers.push(500);
        break;
      case "C":
        numbers.push(100);
        break;
      case "L":
        numbers.push(50);
        break;
      case "X":
        numbers.push(10);
        break;
      case "V":
        numbers.push(5);
        break;
      case "I":
        numbers.push(1);
    }
  }
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1]) {
      numbers[i] = -numbers[i];
    }
  }
  
  const output = numbers.reduce(
    (accu, currentValue) => accu + currentValue, 0
  );
  
  return output;
};