const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(link) {
    if (link === undefined) {
      link = ' ';
    }
    this.chain.push(String(link));
    return this;
  },
  removeLink(pos) {
    if (pos <= 0 || pos > (this.getLength() - 1) || typeof pos != "number") {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(pos - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return res;
  }

};

module.exports = chainMaker;
