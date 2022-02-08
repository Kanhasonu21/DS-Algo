/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = [];
  for (let i of s) {
    if (i === '[' || i === '(' || i === '{') {
      arr.push(i);
      continue;
    }
    if (arr.length > 0) {
      let lastele = arr.pop();
      let isSame = checkParenthesis(i, lastele);
      if (isSame) continue;
      else return false;
    } else {
      return false;
    }
  }
  
  function checkParenthesis(i, j) {
    if (
      (i === ']' && j === '[') ||
      (i === ')' && j === '(') ||
      (i === '}' && j === '{')
    ) {
      return true;
    }
    return false;
  }
};
