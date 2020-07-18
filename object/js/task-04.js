'use strict';

let menu = {
  title: 'My menu',
  width: 200,
  height: 300,
};

const multiplyNumeric = menu => {
  for (const key in menu) {
    if (typeof menu[key] === 'number') {
      menu[key] = menu[key] * 2;
    }
  }
};
multiplyNumeric(menu);
console.log(menu);
