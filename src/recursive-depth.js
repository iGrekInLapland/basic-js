const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) {
      return 1;
    }

    let max = 1;
    for (const key of arr) {
      
          if(Array.isArray(key)) {
        const depth = this.calculateDepth(key) + 1;
        if(max < depth) {max = depth;}
      }
    };
    
    return max;
  }
};
