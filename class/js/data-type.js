const prices = {
  banana: 2,
  qiwi: 3,
  apple: 5,
};

const doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2]),
);

console.log(doublePrices);

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salariesArray) {
//   return Object.keys(salariesArray).length > 0
//     ? Object.values(salariesArray).reduce((acc, value) => acc + value)
//     : 0;
// }

// console.log(sumSalaries(salaries));

function count(obj) {
  return Object.entries(obj).length;
}

let [firstName, lastName] = 'Vadym Yevlanov'.split(' ');

console.log(firstName);

let [a, b, c] = 'abc';

console.log(a);

let userData = { name: 'John', years: 30 };

let { name, years, isAdmin = false } = userData;

console.log(name);
console.log(isAdmin);

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
  Vadym: 3500,
};

function topSalaries(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

console.log(topSalaries(salaries));
