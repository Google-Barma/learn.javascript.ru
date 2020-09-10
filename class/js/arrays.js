'use strict';

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) {
//     // для каждого элемента массива
//     partialSum += item; // добавляем значение элемента к partialSum
//     maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//     if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//   }

//   return maxSum;
// }

// alert(getMaxSubSum([-1, 2, 3, -9])); // 5
// alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// alert(getMaxSubSum([-2, -1, 1, 2])); // 3
// alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
// alert(getMaxSubSum([1, 2, 3])); // 6
// alert(getMaxSubSum([-1, -2, -3])); // 0

// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1),
//     )
//     .join('');
// }

// console.log(camelize('background-color')); //== 'backgroundColor';
// console.log(camelize('list-style-image')); //== 'listStyleImage';
// console.log(camelize('-webkit-transition')); // == 'WebkitTransition';

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// function filterRange(arr, a, b) {
//   return arr.filter(item => a <= item && item <= b);
// }

// console.log(filtered); // 3,1 (совпадающие значения)

// console.log(arr); // 5,3,8,1 (без изменений)

// function Calculator() {
//   this.methods = {
//     '-': (a, b) => a - b,
//     '+': (a, b) => a + b,
//     // '*': (a, b) => a * b,
//     // '/': (a, b) => a / b,
//     // '**': (a, b) => a ** b,
//   };

//   this.calculate = function (str) {
//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }

// const calc = new Calculator();

// console.log(calc.calculate('1 + 2'));
// console.log(calc.calculate('17 - 12'));

// let powerCalc = new Calculator();
// powerCalc.addMethod('*', (a, b) => a * b);
// powerCalc.addMethod('/', (a, b) => a / b);
// powerCalc.addMethod('**', (a, b) => a ** b);

// console.log(powerCalc.calculate('2 ** 3'));
// console.log(powerCalc.calculate('2 * 3'));
// console.log(powerCalc.calculate('6 / 3'));

// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map(item => item.name);
// /* ... ваш код */

// console.log(names.toString());

//Трансформировать в объекты
// let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
// let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
// let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((name, indx) => ({
//   fullName: `${name.name} ${name.surname}`,
//   id: indx,
// }));

// console.table(usersMapped);
// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // Вася Пупкин

//Отсортировать пользователей по возрасту
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let arr = [vasya, petya, masha];

// const sortByAge = users => users.sort((a, b) => a.age - b.age);

// console.log(sortByAge(arr));

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

//Перемешайте массив
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// подсчёт вероятности для всех возможных вариантов
// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3];
// shuffle(arr);
// console.log(arr);
// console.log(Math.random() + 10.1);

//средний возраст
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 29 };

// let arr = [vasya, petya, masha];

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// function getAverageAge(users) {
//   return users.reduce((acc, user) => acc + user.age, 0) / users.length;
// }

// function unique(arr) {
//   let newArr = [];
//   arr.forEach(name => {
//     if (!newArr.includes(name)) {
//       newArr.push(name);
//     }
//   });
//   return newArr;
// }

// let strings = [
//   'кришна',
//   'кришна',
//   'харе',
//   'харе',
//   'харе',
//   'харе',
//   'кришна',
//   'кришна',
//   ':-O',
// ];

// console.log(unique(strings));

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  console.log(num); // 1, затем 2, 3, 4, 5
}

// for (let char of 'test') {
//   // срабатывает 4 раза: по одному для каждого символа
//   console.log(char); // t, затем e, затем s, затем t
// }

// let arr = Array.from(range);
// console.log(arr);

let bigStr = 'привет, как делал';
let arrFromStr = Array.from(bigStr);
console.log(arrFromStr);
