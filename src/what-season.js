//const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(dat) {
    // throw new CustomError('Not implemented');
     // remove line with error and write your code here
     if (!dat) { 
      return 'Unable to determine the time of year!';
    }
  
    try {
      dat.getTime();
    } catch(err) {
      throw new Error(err);
    }
     let b
     let a = dat.getMonth();
     switch (true) {
       case 2 <= a && a <= 4:
         b = 'spring';
         break;
       case 5 <= a && a <= 7:  
         b = 'summer';
         break
       case 8 <= a && a <= 10:
         b = 'autumn';
         break;
       case 11==a:
       case 0===a:
       case 1===a:
         b = 'winter';
         break 
     }
   
       return b 
     
   };
   
