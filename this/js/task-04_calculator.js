'use strict';

let calculator = {
  read() {
    this.one = prompt('Введите первую цифру');
    this.two = prompt('Введите вторую цифру');
  },
  sum() {
    return +this.one + +this.two;
  },
  mul() {
    return this.one * this.two;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

console.log(calculator);
