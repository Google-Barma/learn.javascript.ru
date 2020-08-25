'use strict';

let zero = new Number(0);

if (zero) {
  // zero возвращает "true", так как является объектом
  alert('zero имеет «истинное» значение?!?');
}

console.log(typeof zero);
