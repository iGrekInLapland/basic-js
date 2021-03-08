const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(x) {
   if(typeof(x) !== 'string'){
    return false;
  }
  if(Number.isFinite(+x) || Number.isNaN(+x)){
    return false;
  }

  return Math.log(MODERN_ACTIVITY / x) / (Math.LN2 / HALF_LIFE_PERIOD);
};
