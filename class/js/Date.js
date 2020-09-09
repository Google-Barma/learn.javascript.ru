'use strict';

// const date = new Date();
// console.log('Date: ' + date);

// console.log(' возвращает день месяца от 1 до 31');
// console.log('getDate(): ' + date.getDate());

// console.log(' возвращает день недели от 0 до 6');
// console.log('getDay(): ' + date.getDay());

// console.log(' возвращает месяц от 0 до 11');
// console.log('getMonth(): ' + date.getMonth());

// console.log(' возвращает год из 4 цифр');
// console.log('getFullYear(): ' + date.getFullYear());

// console.log(' возвращает час');
// console.log('getHours(): ' + date.getHours());

// console.log(' возвращает минуты');
// console.log('getMinutes(): ' + date.getMinutes());

// console.log(' возвращает секунды');
// console.log('getSeconds(): ' + date.getSeconds());

// console.log(' возвращает миллисекунды');
// console.log('getMilliseconds(): ' + date.getMilliseconds());

// console.log(' возвращает кол-во миллисекунд прошедших со старта эпохи Unix');
// console.log('getTime(): ' + date.getTime());

let date = new Date();

// формат вывода
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

// Украина
const localeUk = date.toLocaleString('Uk-uk', options);
console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42

// USA
const localeUs = date.toLocaleString('en-US', options);
console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
