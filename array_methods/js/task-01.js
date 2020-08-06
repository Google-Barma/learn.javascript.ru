'use strict';

const users = [
  { name: 'Mango', daysActive: 15 },
  { name: 'Poly', daysActive: 4 },
  { name: 'Ajax', daysActive: 27 },
  { name: 'Chelsey', daysActive: 2 },
];

const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

console.log(users.sort(sortByActiveDays));

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.filter(num => num > 5));

// console.log(numbers.filter(num => num < 5));

// console.log(numbers.filter(num => num === 5));

// const numbers = [1, 2, 3];

// console.table(numbers);
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// var THRESHOLD = 12;
// var v = [5, 2, 16, 4, 3, 18, 20];
// var res;

// res = v.every(function (element, index, array) {
//   console.log('element:', element);
//   if (element >= THRESHOLD) {
//     return false;
//   }

//   return true;
// });
// console.log('res:', res);
// // логи:
// // element: 5
// // element: 2
// // element: 16
// // res: false

// res = v.some(function (element, index, array) {
//   console.log('element:', element);
//   if (element >= THRESHOLD) {
//     return true;
//   }

//   return false;
// });

// console.log('res:', res);
