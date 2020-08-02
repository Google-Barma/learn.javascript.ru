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

// let fruit = 'apple';
// let bag = {
//   [fruit + ' toster']: 23,
// };

// console.log(bag);

// let user = { noSuchProperty: 5 };

// alert(user.noSuchProperty === undefined);

// let user = {
//   name: 'John',
//   age: 39,
//   face: 'scary',
// };

// console.log('agee' in user);

let user = { name: 'John', age: 23 };

let userClone = {};

for (let key in user) {
  userClone[key] = user[key];
}

console.log(userClone === user);
console.log(userClone);

userClone.name = 'Vadym';
console.log(userClone);

let permissions1 = { canView: true };
let permissions2 = { canEdit: true, name: 'Dima' };

Object.assign(userClone, permissions1, permissions2);

console.log(userClone);

let twoUserClone = Object.assign({}, userClone);

console.log(twoUserClone.age++);
console.log(twoUserClone, 'twoUserClone');
