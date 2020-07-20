'use strict';
let n = 21;
next: for (let i = 2; i <= n; i += 1) {
  for (let j = 2; j < i; j += 1) {
    if (i % j == 0) {
      continue next;
    }
  }
  console.log(i);
}
