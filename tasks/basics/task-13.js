'use strict';

function pow() {
  let x = prompt('Введите число, которое нужно возвести в степень');
  let n = prompt('Введите степень числа');
  if (n < 1) {
    alert('Число должно быть больше нуля');
    return pow();
  }
  return x ** n;
}

console.log(pow());
