/* // final length values for the arrays
let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5; // If you change an array's length property to a new, larger value, the array expands to the new size

let array3 = []
array3[-1] = [1]; // These elements aren't true elements; they are properties on the array object.

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = []; 
array5[100] = 3; // [ <100 empty items>, 3 ] The length is the highest index position that has a value, plus 1.

console.log(array1.length); // 4
console.log(array2.length); // 5 [ 1, <4 empty items> ]                         
console.log(array3.length); // 0
console.log(array4.length); // 3 [1, 2, 3]
console.log(array5.length); // 101 */

/* let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value);
  }
};

let result = myArray.filter(num => num % 2 === 0);

result.forEach(num => console.log(num)); */

// let myArray = [[1, 3, 6, 11], [4, 2, 4], [9, 17, 16, 0]];

// for (let i = 0; i < myArray.length; i += 1) {
//   for (let j = 0; j < myArray[i].length; j += 1) {
//     let value = myArray[i][j];
//     if (value % 2 === 0) {
//       console.log(value);
//     }
//   }
// };

// myArray.forEach(function(nestedArray){
//   nestedArray.forEach(function(value){
//     if (value % 2 === 0) {
//       console.log(value);
//     }
//   });
// });

/* let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let result = myArray.map(num => num % 2 === 0 ? 'even' : 'odd');

console.log(result); */

/* function findIntegers(array) {
  return array.filter(value => Number.isInteger(value));
};

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); */

/* function oddLenghts(arr) {
  let lengths = arr.map(value => value.length);
  return lengths.filter(num => num % 2 !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLenghts(arr)); */

/* function sumOfSquares(array) {
 return array.reduce((accumulator, number) => number ** 2 + accumulator, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); */

/* function oddLenghts(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }
    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLenghts(arr)); */

/* function check3(arr) {
  return arr.includes(3);
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(check3(numbers1));
console.log(check3(numbers2));
console.log(check3(numbers3)); */

