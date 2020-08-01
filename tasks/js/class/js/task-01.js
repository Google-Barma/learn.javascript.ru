'use strict';

class Hero {
  static description = 'Это базовый класс героя';

  static showStats(hero) {
    console.dir('Logging stats from Hero.showStats', hero);
  }

  constructor(name, exp) {
    this.name = name;
    this.exp = exp;
  }

  changeName(name) {
    this.name = name;
  }

  gainExp(amount) {
    console.log(`${this.name} получил ${amount} опыта.`);
    this.exp += amount;
    console.log(`Теперь у него ${this.exp} опыта.`);
  }
}

const mango = new Hero('Barma', 1000);

console.dir(Hero);
console.log(mango);

mango.gainExp(300);

Hero.showStats(mango);
