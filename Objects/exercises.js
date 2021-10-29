  /* let person = {
  name: 'Bob',
  occupation: 'web developer',
  hobbies: 'painting',
};

console.log(person.name); // dot notation
console.log(person['name']); // bracket notation */

/* let myObj = {
  true: 'hello',
  'true': 'world', // Note, though, that JavaScript coerces the non-string key values to strings; true and 'true' represent the same key.
};

console.log(myObj['true']); */

/* // Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement.
let myArray = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c',
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
} */

/* let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keyArray = Object.keys(obj).map(key => key.toUpperCase());
console.log(keyArray);

let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys); */

/* let myProtoObj = {
  foo: 1,
  bar: 2,
};
// The static method Object.create provides a simple way to create a new object that inherits from an existing object
let myObj = Object.create(myProtoObj);
console.log(myObj.bar); */

/* "foo" primitive string
3.1415 primitive number
[ 'a', 'b', 'c' ] (arrays are objects)
false primitive boolean
foo is an identifier. Identifiers are used to name things that have values, such as variables and functions, but they are not values by themselves.
function bar() { return "bar"; } (functions are objects)
undefined primitive
{ a: 1, b: 2 } object */

/* 
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;
// iterates solely over myObj's "own" properties - that is, those defined directly on the object, not its prototype.
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
// for..in iterates over all of the object's keys, including those in the prototype object, myProtoObj.
for (let key in myObj) {
  console.log(key);
} */

/* function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(key => destinationObject[key] = sourceObject[key]);
    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject)
  }
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 } */

/* let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // hi
console.log(qux); // hello */

/* 
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj['bar'][3]['xyz'] = 606; 

console.log(obj); */