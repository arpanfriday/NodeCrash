// Module Wrapper Function
// function(exports, require, module, __filename, __dirname) {
// } 

console.log(__dirname);
console.log(__filename);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

module.exports = Person;