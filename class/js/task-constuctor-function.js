'use strict';

// function User() {
//   alert(new.target);
// }

// // без "new":
// User(); // undefined

// // с "new":
// new User(); // function User { ... }
// let obj = {};

// function A() {
//   return obj;
// }
// function B() {
//   return obj;
// }

// let a = new A();
// let b = new B();

// console.log(a === b);

function Calculator() {
  this.read = function () {
    this.a = +prompt('enter a:', 0);
    this.b = +prompt('enter b:', 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

const calculator = new Calculator();

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt('number?:');
  };
}

const accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator.value);
