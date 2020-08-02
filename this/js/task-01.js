'use strict';

// let user = {
//   name: 'Джон',
//   go: function () {
//     alert(this.name);
//   },
// };
// user.go();

// let obj, method;

// obj = {
//   go: function () {
//     alert(this);
//   },
// };

// obj.go(); // (1) [object Object]

// obj.go(); // (2) [object Object]

// (method = obj.go)(); // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined

let calculator = {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
