'use strict';

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const getSumSalaries = values => {
  let sum = 0;
  for (let key in values) {
    sum += values[key];
  }
  return sum;
};

console.log(getSumSalaries(salaries));
