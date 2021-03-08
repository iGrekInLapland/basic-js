  const CustomError = require("../extensions/custom-error");

      class VigenereCipheringMachine {
        constructor(directly = true) {
          this.directly = directly;
          this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        }

        encrypt(str, key) {
          const msg = str.toUpperCase().split("");
          const keys = key.toUpperCase().split("");
          let pos = 0;

          let result = msg.map((item) => {
            if (this.alphabet.includes(item)) {
              let i =
                (this.alphabet.indexOf(keys[pos]) +
                  this.alphabet.indexOf(item)) %
                this.alphabet.length;
              pos = (pos + 1) % keys.length;
              return this.alphabet[i];
            }
            return item;
          });
          return this.directly ? result.join("") : result.reverse().join("");
        }

        decrypt(str, key) {
          const msg = str.toString().toUpperCase().split("");
          const keys = key.toString().toUpperCase().split("");
          let pos = 0;

          let result = msg.map((item) => {
            if (this.alphabet.includes(item)) {
              let i =
                this.alphabet.indexOf(item) - this.alphabet.indexOf(keys[pos]);
              if (i < 0) i += this.alphabet.length;
              pos = (pos + 1) % keys.length;
              return this.alphabet[i];
            }
            return item;
          });
          return this.directly ? result.join("") : result.reverse().join("");
        }
      }

      module.exports = VigenereCipheringMachine;
