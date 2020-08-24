'use strict';

let user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

// демонстрация результатов преобразований:
// alert(user);
// console.log(user); // hint: string -> {name: "John"}
// alert(+user);
// console.log(+user); // hint: number -> 1000
alert(user + 500);
// console.log(user + 500); // hint: default -> 1500
