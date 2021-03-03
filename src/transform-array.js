const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let arr = [];
  
    if (!Array.isArray(array)) {
      throw new Error("something is wrong"); // (*)
    }
arr = array.slice(0)
  for(let i = 0; i < array.length; i++){
       
    switch (arr[i]) {
    case '--discard-next' :
        arr[i+1]=undefined;
        arr[i]=undefined;
        i++;
      break;
    case '--discard-prev' : 
        arr[i-1]=undefined;
        arr[i]=undefined;
      break;
    case '--double-next' : 
        arr[i] = arr[i+1];
        i++
      break;
    case '--double-prev' :
      arr[i] = arr[i-1];
      break;
    }
  }
  return arr.filter(item => item !==undefined);
}
