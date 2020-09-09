'use strict';

const styles = ['Jazz', 'Blues'];
styles.push("Roch'n'Roll");
console.log(styles);
styles[Math.floor(styles.length / 2)] = 'Classic';
console.log(styles);
const delEl = styles.shift('jazz');
console.log(delEl);
console.log(styles);
styles.unshift('Rap', 'Raggy');
console.log(styles);

let arr = ['a', 'b'];

arr.push(function () {
  console.log(this);
});

arr[2]();

function sumInput() {
  const num = +prompt('Введите число');
  let sum = 0;

  if (isNaN(num) || num === null || num === '') {
    const arrNumbers = [];
    arrNumbers.push(num);
  } else {
    return console.log(arrNumbers);
  }

  return sumInput();
}

sumInput();
