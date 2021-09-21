let rlSync = require('readline-sync');

let firstName = rlSync.question("What's your first name? ");
let lastName = rlSync.question("What is your last name? ");

console.log(`Hello, ${firstName} ${lastName}!`);