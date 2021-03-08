  const CustomError = require("../extensions/custom-error");

  module.exports = function transform(array) {
    if (!Array.isArray(array)) throw new Error ('Error');
    if (array.filter(item => item == '--discard-next' || item == '--discard-prev' ||
    item == '--double-prev' || item == '--double-next').length == 0) return array;
  
  
  
    
    let result = [];
    for (let i = 0; i < array.length; i++){
          if (typeof array[i] == 'string'){
            switch(array[i]){
              case '--discard-next': 
                if (i == array.length - 1) break;
                i++; break;
              case '--discard-prev': 
                if (i == 0) break;
                if (array[i - 2] != '--discard-next'){
                result.pop(); 
                }break;
              case '--double-next': 
                if (i == array.length - 1) break;
                result.push(array[i+1]); break;
              case '--double-prev': 
                if (i == 0) break;
                if (array[i - 2] != '--discard-next'){
                result.push(array[i-1]); 
              }break;
              default: result.push(array[i]); break;
            }
          } else result.push(array[i]);
    }
    return result;  
  };
