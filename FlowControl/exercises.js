/* function evenOrOdd (num) {
  if(typeof num === 'number') {
    return num % 2 === 0 ? `${num} is even`: `${num} is odd`;
  } else {
    return `Sorry, ${num} in not an integer`;
  }
  
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(9));
console.log(evenOrOdd('16')); */



/* function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113'); */

/* Since the case clauses of the switch statement lack break statements, 
control falls through from the matching case '113' 
clause and executes the code in the case '142' and default clauses as well.  */

/* function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); */

/* function capsLong(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(capsLong('hello world'));
console.log(capsLong('goodbye'));
console.log(capsLong("Sue Smith"));     // => Sue Smith
console.log(capsLong("Sue Robertson")); // => SUE ROBERTSON
console.log(capsLong("Joe Thomas"));    // => Joe Thomas
console.log(capsLong("Joe Stevens"));   // => JOE STEVENS */

function numberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  }
  else if (num <= 50) {
    console.log(`${num} between 0 and 50`);
  }
  else if (num <= 100) {
    console.log(`${num} between 51 and 100`);
  }
  else {
    console.log(`${num} greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);