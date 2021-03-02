//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mat) {
 
  let counter = 0;
   mat = [].concat(...mat);
  let j = mat.length; 
  for (let i = 0; i < j; i++) {
      if(mat[i]==='^^') ++counter;
  };
  return counter;
};

   
