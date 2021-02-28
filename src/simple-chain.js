const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains: '',
  getLength() {
   return this.chains.length;
  },
  addLink(value) {
    if(value===undefined) link = '( )';
    link = `( ${value} )`;
    if(this.chains.length > 0) this.chains+="~~";
    this.chains+=link;
    return this;
  },
  removeLink(position) {
    try {
       if (isNaN(position)||position%1!==0||(0 > position || position > this.getLength())){
        chains= ''; 
        this.chains = [];
        throw new Error('something is wrong')
       }  
    }catch(e){
      throw e
    }
    this.chains=this.chains.split('~~');
      this.chains.splice(position-1,1);
      this.chains=this.chains.join('~~');
    
    return this;
    
  },
  reverseChain() {
      if(this.chains.length>1)
      this.chains=this.chains.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let r = this.chains;
    this.chains='';
    return r;
  }
};
