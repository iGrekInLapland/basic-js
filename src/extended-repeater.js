   const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  let res = [];
  let add = [];

  while (add.length < (options.additionRepeatTimes || 1)) {
    add.push(options.addition || options.addition === null || options.addition === false ? String(options.addition) : '' );
  }

  while (res.length < (options.repeatTimes || 1)) {
    res.push(str + add.join(options.additionSeparator || '|'));
  }

  return res.join(options.separator || '+');
};
