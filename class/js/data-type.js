const prices = {
  banana: 2,
  qiwi: 3,
  apple: 5,
};

const doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2]),
);

console.log(doublePrices);

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salariesArray) {
  return Object.keys(salariesArray).length > 0
    ? Object.values(salariesArray).reduce((acc, value) => acc + value)
    : 0;
}

console.log(sumSalaries(salaries));

let user = {
  name: 'John',
  age: 30,
};

alert(count(user));
