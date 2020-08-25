'use strict';

// console.log((123456).toString(36)); //2n9c так же можно привести к шеснадцатиричным числам

// console.log(9999999999999999); // покажет 10000000000000000

// let num = +prompt('Enter a number', '');

// // вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
// alert(isFinite(num));

// console.log(Object.is(NaN, NaN) === true);

// console.log(parseInt('FF', 16)); парсит из шеснадцатиричного в десятичное число

// function readNumber() {
//   let number;
//   do {
//     number = prompt('Введите число!');
//   } while (isNaN(number));
//   if (number === '' || number === null) return null;
//   else return +number;
// }

// console.log(readNumber());

// console.log((0.2).toFixed(20));

//ВЕЧНЫЙ ЦИКЛ
// let i = 0;
// while (i != 10) {
//   i += 0.2;
//   console.log(i);
// }

//РАНДОМНОЕ ЧИСЛО В ИНТЕРВАЛЕ ЧИСЕЛ
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));

//СЛУЧАЙНОЕ ЦЕЛОЕ ЧИСЛО

//НЕ ВЕРНОЕ РЕШЕНИЕ
function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

alert(randomInteger(1, 3));

//ПРАВИЛЬНОЕ РЕШЕНИЕ
function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert(randomInteger(1, 3));

//ДРУГОЕ ПРАВИЛЬНОЕ РЕШЕНИЕ
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(randomInteger(1, 3));
