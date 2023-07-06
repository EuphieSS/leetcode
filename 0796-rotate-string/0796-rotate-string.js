/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  s = s.split('');
  goal = goal.split('');
  
  let i = 0;
  while (i < s.length) {
    s.push(s.shift());
    if (s.join('') === goal.join('')) {
      return true;
    }
    i++;
  }
  
  return false;
};