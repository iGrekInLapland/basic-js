//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mat) {
 
  let counter = 0;
  mat = [].concat(...mat).forEach(element => {
      if(element==='^^') counter++
    });
  
  
  return counter;
};
