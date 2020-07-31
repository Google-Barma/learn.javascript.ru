'use strict';

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Вы согласны?',
//   () => alert('Вы согласились.'),
//   () => alert('Вы отменили выполнение.'),
// );

// let fruit = prompt('Какой фрукт купить?', 'apple');

// let bag = {
//   [fruit]: 5,
// };

// console.log(bag[fruit]);

// let fruit = prompt('Какой фрукт купить?', 'apple');

// let bag = {};
// bag[fruit] = 10;

// console.log(bag);
// console.log(bag[fruit]);

let fruit = 'apple';
let bag = {
  [fruit + ' toster']: 23,
};

console.log(bag);
