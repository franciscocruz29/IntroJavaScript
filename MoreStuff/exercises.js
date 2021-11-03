/* let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); 
// [1, 4, 3]
// This result demonstrates that array1 and array2 reference the same array: 
// if we change an element using array1, it also changes that element in array2. 
// The opposite is also true: if we change an element in array2, that also changes the element in array1.

// This code also demonstrates that assignment of an array to another array doesn't create a new array, 
// but instead copies a reference from the original array (array1 above) into the target array (array2). */

// console.log(Math.sqrt(37));

/* function findMax(list){
  return list.reduce(function(a, b){
    return Math.max(b, a);
  })
}

function findMax2(list){
  return Math.max(...list);
}

console.log(findMax([1, 6, 3, 2]));
console.log(findMax([-1, -6, -3, -2]));
console.log(findMax([2, 2]));

console.log(findMax2([1, 6, 3, 2]));
console.log(findMax2([-1, -6, -3, -2]));
console.log(findMax2([2, 2])); */

/* function doSomething(string) {
  // This code converts a string into an array of words, reverses that array, 
  // and then returns a new array that contains the lengths of the words. 
  // It assumes that a single space character delimits the words in the original string.
  return string.split(' ').reverse().map((value) => value.length);
}

console.log(doSomething('welcome to the world')); // [ 5, 3, 2, 7 ] */

/* function allMatches(list, regex){
  let results = [];
  list.forEach(word => {
    if(regex.test(word)) {
      results.push(word)
    }
  });
  return results;
}

function allMatches(word, pattern) {
  return words.filter((word) => pattern.test(word));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate'] */

/* function isNotANumber(value){
  return value !== value; // This works since NaN is the only JS value that is not === to itself.
}

console.log(isNotANumber(NaN)); */