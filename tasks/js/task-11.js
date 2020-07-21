'use strict';

let age;

function inputAge() {
  return (age = prompt('Введи возраст'));
}
inputAge();

// function checkAge(age) {
//   return age > 18 ? true : confirm('Родители разрешили?');
// }
function checkAge(age) {
  return age > 18 || confirm('Родители разрешают?');
}

checkAge();
