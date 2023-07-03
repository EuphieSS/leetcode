/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  s = s.split('');
  const goalArr = goal.split('');
  const indices = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goalArr[i]) {
      indices.push(i);
    }
  }
  
  if (indices.length === 0) {
    s.sort();
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) {
        return true;
      }
      if (i === s.length - 1) {
        return false;
      }
    }
  }
  
  if (indices.length !== 2) {
    return false;
  }
  
  if (indices.length === 2) {
    if (indices[0] === indices[1]) {
      return true;
    }
    s[indices[1]] = [s[indices[0]], s[indices[0]] = s[indices[1]]][0];
    s = s.join('');
    if (s !== goal) {
      return false;
    }
    return true;
  }
};