/* let bar = 1;
function foo() {
  let bar = 2;
}
foo();
console.log(bar); // 1

let bar = 1;
function foo() {
  bar = 2;
}
foo();
console.log(bar); // 2 */

/* function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return Number(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`); */

/* function scream(words) {
  words = words + '!!!!';
  return; // It doesn't log anything. The return on line 3 terminates the function before it can log anything.
  console.log(words);
}

scream('Yipeee'); */

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee'); // The function returns a value, Yipeee!!!!
