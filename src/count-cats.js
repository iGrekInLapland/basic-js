const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mat) {
  let res = []

  for(let i = 0; i < mat.length; i++) {
     for(let j = 0; j < mat[i].length; j++) {
       res.push(mat[i][j])
    }
  }
  res = res.filter((item) => item === '^^')
  return res.length
};
   
