/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let output = [];
  let i = 1;
  
  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else {
    output.push(i.toString());      
    }
    i++;
  }
  
  return output;
};