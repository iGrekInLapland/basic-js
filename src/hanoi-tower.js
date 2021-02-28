const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(d, t) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let sol = {};
  sol.turns = (2**d)-1;
  sol.seconds = Math.floor((sol.turns/t)*3600)
  return sol;
};
