const path = require('path');

//Basename - gets the ase file name
console.log(path.basename(__filename));

//Directoryname
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));

//Concatinate path
// ../test/hello/html
console.log(path.join(__dirname, 'test', 'hello.html'));