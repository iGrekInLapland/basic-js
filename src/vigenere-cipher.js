const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(directly){
    this.directly = directly
  }
  encrypt(m, k) {
    
   // if(!!m || !!k) throw new Error('something is wrong');
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = [];
    m = m.toUpperCase();
    k = k.toUpperCase();
    let j = 0; 
    for(let i = 0; i < m.length; i++){
     
      let s;
      if( a.indexOf(m[i]) === -1){
        res.push(m[i]);
        j--
      }else{
        s = a.indexOf(m[i]) + a.indexOf(k[((j < k.length) ? j : j%k.length )]);
      res.push(a[((s<a.length) ? s : s%a.length )])
      }   
      j++
    }
    if(this.directly === true ||this.directly === undefined) return res = res.join(''); 
    return res.reverse().join('')
  }    
  decrypt(m, k){
   // if(!!m || !!k) throw new Error("something is wrong");
      let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let res = [];
      m = m.toUpperCase();
      k = k.toUpperCase();
      let j = 0; 
      for(let i = 0; i < m.length; i++){
       
        let s;
        if( a.indexOf(m[i]) === -1){
          res.push(m[i]);
          j--
        }else{
          s = a.indexOf(m[i]) - a.indexOf(k[((j < k.length) ? j : j%k.length )]);
          (s < 0)? s = s + a.length : s;
        res.push(a[((s<a.length) ? s : s%a.length )])
        }   
        j++
      }
      if(this.directly === true ||this.directly === undefined) return res = res.join(''); 
    return res.reverse().join('')
    }
  }


module.exports = VigenereCipheringMachine;

