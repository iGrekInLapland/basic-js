//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(array)) return false;
  let arr = [];
  for (let i = 0; i < array.length; i++) {
     if( typeof (array[i]) === "string"){
      a = array[i];
      a = a.trim();
      
      arr.push(a[0].toUpperCase())
     } 
   }
   return arr.sort().join('');
 };
