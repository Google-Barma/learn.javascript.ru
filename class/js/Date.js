// 'use strict';

// // const date = new Date();
// // console.log('Date: ' + date);

// // console.log(' возвращает день месяца от 1 до 31');
// // console.log('getDate(): ' + date.getDate());

// // console.log(' возвращает день недели от 0 до 6');
// // console.log('getDay(): ' + date.getDay());

// // console.log(' возвращает месяц от 0 до 11');
// // console.log('getMonth(): ' + date.getMonth());

// // console.log(' возвращает год из 4 цифр');
// // console.log('getFullYear(): ' + date.getFullYear());

// // console.log(' возвращает час');
// // console.log('getHours(): ' + date.getHours());

// // console.log(' возвращает минуты');
// // console.log('getMinutes(): ' + date.getMinutes());

// // console.log(' возвращает секунды');
// // console.log('getSeconds(): ' + date.getSeconds());

// // console.log(' возвращает миллисекунды');
// // console.log('getMilliseconds(): ' + date.getMilliseconds());

// // console.log(' возвращает кол-во миллисекунд прошедших со старта эпохи Unix');
// // console.log('getTime(): ' + date.getTime());

// let date = new Date();

// // формат вывода
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
// };

// // Украина
// const localeUk = date.toLocaleString('Uk-uk', options);
// console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42

// // USA
// const localeUs = date.toLocaleString('en-US', options);
// console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// let Jan01_1970 = new Date(1000000000000);

// let date = new Date(2020, 11, 3);

// console.log(date);

// const millisecDate = new Date();
// console.log(millisecDate.getTime());

// console.log(new Date().getTimezoneOffset());

// let start = new Date(); // начинаем отсчёт времени

// // выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date(); // заканчиваем отсчёт времени

// console.log(`Цикл отработал за ${end - start} миллисекунд`);

// let start1 = Date.now(); // количество миллисекунд с 1 января 1970 года

// // выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end1 = Date.now(); // заканчиваем отсчёт времени

// console.log(`Цикл отработал за ${end1 - start1} миллисекунд`);

// // function diffSubtract(date1, date2) {
// //   return date2 - date1;
// // }

// // function diffGetTime(date1, date2) {
// //   return date2.getTime() - date1.getTime();
// // }

// // function bench(f) {
// //   let date1 = new Date(0);
// //   let date2 = new Date();

// //   let start = Date.now();
// //   for (let i = 0; i < 100000; i++) f(date1, date2);
// //   return Date.now() - start;
// // }

// // let time1 = 0;
// // let time2 = 0;

// // // bench(upperSlice) и bench(upperLoop) поочерёдно запускаются 10 раз
// // for (let i = 0; i < 10; i++) {
// //   time1 += bench(diffSubtract);
// //   time2 += bench(diffGetTime);
// // }

// // console.log('Итоговое время diffSubtract: ' + time1);
// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;

// // bench(upperSlice) и bench(upperLoop) поочерёдно запускаются 10 раз
// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }

// console.log('Итоговое время diffSubtract: ' + time1);
// console.log('Итоговое время diffGetTime: ' + time2);

// console.log('Итоговое время diffGetTime: ' + time2);
// console.log('Итоговое время diffSubtract: ' + time1);

// let date2 = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));

// console.log(date2);

// performance.now();

// const date = new Date('2020.02.20 15:30');
// console.log(date);

// let date = new Date(2012, 0, 3); // 3 января 2012 года

// function getWeekDay(date) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return days[date.getDay()];
// }

// console.log(getWeekDay(date));

// let date = new Date(2012, 0, 3);

// function getLocalDay(date) {
//   let day = date.getDay();

//   // if (day == 0) {
//   //   // день недели 0 (воскресенье) в европейской нумерации будет 7
//   //   day = 7;
//   // }

//   return day;
// }

// console.log(getLocalDay(date));

// function getSecondsToTomorrow() {
//   let now = new Date();

//   // завтрашняя дата
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//   let diff = tomorrow - now; // разница в миллисекундах
//   return Math.round(diff / 1000); // преобразуем в секунды
// }

// console.log(getSecondsToTomorrow());
