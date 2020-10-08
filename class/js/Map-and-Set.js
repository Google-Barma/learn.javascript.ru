let recipeMap = new Map([
  ['огурец', 500],
  ['помидор', 350],
  ['лук', 50],
  [true, 40],
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) {
  // то же самое, что и recipeMap.entries()
  console.log(entry); // огурец,500 (и так далее)
}

recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
  console.log(map);
});

function removeUrlAnchor(str) {
  const index = str.indexOf('#');
  return index !== -1 ? str.slice(0, index) : str;
}

// returns 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com#about'));

// returns 'www.codewars.com?page=1'
console.log(removeUrlAnchor('www.codewars.com?page=1'));

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values));

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(array) {
  let map = new Map();

  for (let word of array) {
    let sorted = word.toLowerCase().split('').sort().join('');

    map.set(sorted, word);
  }

  return Array.from(map.values());
}

console.log(aclean(arr));

let map = new Map();

map.set('name', 'John');

let keys = Array.from(map.keys());

keys.push('more');
console.log(keys);

let visitsCountMap = new Map(); // map: пользователь => число визитов

// увеличиваем счётчик
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  console.log(count);
  visitsCountMap.set(user, count + 1);
}

let john = { name: 'John' };

countUser(john);

const func = function () {
  return 2009;
};

const result = 262 && func();

console.log(result);

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[2]);

console.log(readMessages);

let readMap = new WeakMap();

readMap.set(messages[0], Date.now());
readMap.set(messages[2], Date.now());
console.log(readMap);
