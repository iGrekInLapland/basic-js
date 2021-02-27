//const CustomError = require("../extensions/custom-error");

const MODER= 15; 
const HALF= 5730;

module.exports = function dateSample(sampl) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
 
  let t;
  let x = Number(sampl);
  if(typeof sampl !== 'string' || typeof x !== 'number' )return false;
  if( x < 15 && x > 0 ){
    t = Math.ceil((Math.log(MODER/sampl))/(0.693/5730));
    return t;
  }
  return false
};
