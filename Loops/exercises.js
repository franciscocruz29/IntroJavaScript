/* let counter = 1;
while(counter <= 10){
  console.log(counter);
  counter ++;
} */

/* let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
} */

/* function factorial(num) {
  let result = 1;
  for (let counter = 1; counter <= num; counter += 1) {
    result *= counter;
  }
  return result;
} */

/* function factorial(num) {
  let result = 1;
  for (let counter = num; counter > 0; counter -= 1) {
    result *= counter;
  }
  return result;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8)); */

/* let counter = 0;

while (counter = 1) { // The problem occurs on this line where we assign 1 to counter, the loop condition never becomes false
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
 */

/* for (let i = 0; i < 5;) { // all 3 components of the for loop are optional
  console.log(i += 1);
}
 */

/* function randomNumbersBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumbersBetween(1,6);
tries += 1;

while (result <= 2) {
  result = randomNumbersBetween(1,6);
  tries += 1;
}

let tries = 0;
let result;

do {
  result = randomNumbersBetween(1,6);
  tries += 1;
} while (result <= 2);

console.log('I took ' + String(tries) + ' tries to get a number greater than 2'); */

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));