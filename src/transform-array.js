const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let arr = [];
  try {
 
    if (!Array.isArray(array)) {
      throw new Error("something is wrong"); // (*)
    }
arr = array.slice(0)
  for(let i = 0; i < array.length; i++){
       
    switch (arr[i]) {
    case '--discard-next' :
      if (i==array.length-1) {
      arr.splice(i, 1, ' ');
      break;
    }
      arr.splice(i, 2, ' ', ' ');
      break;
    case '--discard-prev' : 
      if ((i-1)<0) {
        arr.splice(i, 1, ' ');
        break;
      }
      arr.splice(i-1, 2, ' ', ' ');
      break;
    case '--double-next' : 
      if (i==array.length-1) {
        arr.splice(i, 1);
        break;
      }
      arr.splice(i, 1, arr[i+1]);
      break;
    case '--double-prev' :
      if ((i-1) < 0) {
        arr.splice(i, 1);
        break;
      }
      arr.splice(i, 1, arr[i-1])
      break;
    }
   
  }
  for (let i = 0; i < arr.length; i++){
    if(arr[i]===' '|| arr[i] == undefined){
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
  }catch(e) {
    throw e
   }
}
