const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.repeatTimes) {
    result += str;
    if (options.additionRepeatTimes) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        result += options.addition;
        result = j + 1 == options.additionRepeatTimes ? result : result + options.additionSeparator;
      }
    } else {
      result += options.addition;
    }
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;
    if (options.additionRepeatTimes) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        result += options.addition;
        result = j + 1 == options.additionRepeatTimes ? result : result + options.additionSeparator;
      }
    }
    result = i + 1 == options.repeatTimes ? result : result + options.separator;
  }
  return result;
};