const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let arr = [];
  try {
 
    if (!Array.isArray(array)) {
      throw new Error("something is wrong"); // (*)
    }
arr = array.slice(0)
  for(let key = 0; key < array.length; key++){
       
    switch (arr[key]) {
    case '--discard-next' :
      if (key==array.length-1) {
      arr.splice(key, 1, ' ');
      }else{
      arr.splice(key, 2, ' ', ' ');
      }
      break;
    case '--discard-prev' : 
      if ((key-1)<0) {
        arr.splice(key, 1, ' ');
      }else{
      arr.splice(key-1, 2, ' ', ' ');
      }
      break;
    case '--double-next' : 
      if (key==array.length-1) {
        arr.splice(key, 1);
      }else{
      arr.splice(key, 1, arr[key+1]);
      }
      break;
    case '--double-prev' :
      if ((key-1) < 0) {
        arr.splice(key, 1);
      }else{
      arr.splice(key, 1, arr[key-1])
      }
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

