'use strict';

// let user = {
//   name: 'Джон',
//   age: 30,
// };

// user.sayHi = function () {
//   console.log('Привет!');
// };

// user.sayHi(); // Привет!

// console.dir(user);

// let user = {
//   name: 'Джон',
//   hi() {
//     alert(this.name);
//   },
//   bye() {
//     alert('Пока');
//   },
// };

// user.hi(); // Джон (простой вызов метода работает хорошо)

// // теперь давайте попробуем вызывать user.hi или user.bye
// // в зависимости от имени пользователя user.name
// (user.name == 'Джон' ? user.hi : user.bye)(); // Ошибка!

// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name);

