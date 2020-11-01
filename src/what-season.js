const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!date) {
    return 'Unable to determine the time of year!'
  }
  Date.prototype.toString.call(date);
  
  let month = date.toString().split(" ");
  let months = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  if (date instanceof Date) {

    month = month[1];

    let result = '';

    switch (month) {
      case 'Dec':
      case 'Jan':
      case 'Feb':
        result = 'winter';
        break;
      case 'Mar':
      case 'Apr':
      case 'May':
        result = 'spring';
        break;
      case 'Jun':
      case 'Jul':
      case 'Aug':
        result = 'summer';
        break;
      default:
        result = 'autumn';
    }
    return result;
  } else {
    throw new Error('Error');
  }
};
