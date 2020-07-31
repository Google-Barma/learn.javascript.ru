'use strict';

let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(schedule), 'пустой');

schedule.time = '6:30';

console.log(isEmpty(schedule), 'не пустой');
console.log(schedule.time);
