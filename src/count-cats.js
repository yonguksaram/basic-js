const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  return matrix.reduce((sum, item) => {
    if (!Array.isArray(item)) return sum;
    return item.reduce((localSum, localItem) => {
      return localItem == '^^' ? ++localSum : localSum;
    }, 0) + sum;
  }, 0)
};