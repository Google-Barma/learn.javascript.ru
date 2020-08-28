'use strict';

console.log('\u{1F63A}');
console.log('\u{2026}');

// let str = `Hello`;

// получаем первый символ
// alert(str[0]); // H
// alert(str.charAt(0)); // H

// получаем последний символ
// alert(str[str.length - 4]); // o

// console.log(str[0] === str.charAt(0));

// let str = 'Ослик Иа-Иа посмотрел на виадук';
// let target = 'Иа';

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert(pos);
// }

// let str = '';

// for (let i = 0; i <= 1000; i++) {
//   str += String.fromCodePoint(i);
// }

// console.log(str.split(''));
// alert('𝒳'[0]); // странные символы…
// alert('𝒳'[1]); // …части суррогатной па

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('Вася'));
console.log(ucFirst('Даня'));

function checkSpam(str) {
  return (
    str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')
  );
}

console.log(checkSpam('buy ViAgRA now')); // == true;
console.log(checkSpam('free xxxxx')); // == true;
console.log(checkSpam('innocent rabbit')); // == false;

function truncate(str, maxlength) {
  return str.length > maxlength
    ? str.slice(0, maxlength - 1) + '\u{2026}'
    : str;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)); //= 'Вот, что мне хотело…';
console.log(truncate('Всем привет!', 20)); //= 'Всем привет!';

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue('$120') === 120);
