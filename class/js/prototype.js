'use strict';

// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true
// console.log(animal);
// console.log(dog);

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

// console.log(mango);

// Guest.prototype.showRoomNumber = function () {
//   console.log(`Your room number is ${this.room}`);
// };

// mango.showRoomNumber();

// Guest.prototype = {
//   constructor: Guest,
// };

// console.dir(Guest);

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

/*
 * Теперь у нас есть конструктор базового класса героя,
 * добавим в prototype какой-то метод.
 */
Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const mango = new Hero('Mango', 1000);
console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
mango.gainXp(500); // Mango gained 500 experience points
console.log(mango); // Hero { name: 'Mango', xp: 1500 }

const Warrior = function (name, xp, weapon) {
  Hero.call(this, name, xp);

  // Тут добавляем новое свойство - оружие
  this.weapon = weapon;
};

Warrior.prototype = Object.create(Hero.prototype);

// Не забываем добавить в Warrior.prototype свойство constructor
Warrior.prototype.constructor = Warrior;

// Добавим метод для атаки
Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior('Poly', 300, 'sword');
// Попробуем теперь
poly.gainXp(300); // Poly gained 300 experience points
console.log(poly);

class Student {
  constructor() {}
}
console.log(typeof Student === 'function');

const obj = {};
console.log(obj);
