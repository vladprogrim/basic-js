const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n, k) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


  let max = -Infinity;
  const strNum = n.toString();
  for (let i = 0; i < strNum.length; i++) {
    const numArr = strNum.split('');
    numArr.splice(i, 1);
    const newNum = parseInt(numArr.join(''));
    if (newNum > max) {
      max = newNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
