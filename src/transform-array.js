const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error('Error')
  }
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && typeof arr[i] == 'string' && arr[i].trim() == discardNext) {
      if (i + 1 == arr.length) {
        arr = arr.slice(0, i);
        continue;
      }
      arr = arr.slice(0, i) + arr.slice(i + 2);
      i--;
    } else if (arr[i] && typeof arr[i] == 'string'  && arr[i].trim() == discardPrev) {
      if (i == 0) {
        arr = arr.slice(1);
        i--;
        continue;
      }
      arr = arr.slice(0, i - 1) + arr.slice(i + 1);
      i--;
    } else if (arr[i] && typeof arr[i] == 'string'  && arr[i].trim() == doubleNext) {
      if (i + 1 == arr.length) {
        arr = arr.slice(0, i);
        continue;
      }
      arr = arr.slice(0, i) + arr[i + 1] + arr.slice(i + 1);
    } else if (arr[i] && typeof arr[i] == 'string' && arr[i].trim() == doublePrev) {
      if (i == 0) {
        arr = arr.slice(1);
        i--;
        continue;
      }
      arr = arr.slice(0, i) + arr[i - 1] + arr.slice(i + 1);
    }
  }
  return arr;
};
