const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  if (!Array.isArray(members)) return false;
  return members.map((item) => {
    return typeof item == 'string' ? item.trim().toUpperCase()[0] :  ' '
  }).sort().join("").trim().split("").reduce((previous, item) => {
    return previous + item;
  }, '')
};
