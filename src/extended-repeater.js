//const CustomError = require("../extensions/custom-error");

module.exports =    function repeater(str, ob) {
  let res, a, b;
  b = [];
  a = [];
 
  
  if (typeof str !== "string") str = String(str);
  if (!ob.repeatTimes) ob.repeatTimes = 1;
  if (!ob.separator ) ob.separator = "+";
  if (!ob.additionRepeatTimes ) ob.additionRepeatTimes = 1;
  if (!ob.additionSeparator) ob.additionSeparator = "|";
  
  
  if(ob.addition !== undefined){
    if(typeof ob.addition !== "string") ob.addition = String(ob.addition);
    
    for (let i = 0; i < ob.additionRepeatTimes; i++) {
      a[i] = ob.addition;
    }
    
    if(a.length > 1) {
      a = a.join(ob.additionSeparator);
    }else{ 
      a = a.join('')
    }
   
    res = str + a;
  }else{
    res = str;
  }
  
  for (let i = 0; i< ob.repeatTimes; i++) {
    b[i] = res;
  }
  return b = b.join(ob.separator)
    
  }
