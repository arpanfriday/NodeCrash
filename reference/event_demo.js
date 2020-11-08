const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter {

}

//Init onject
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('hi', () => {
    console.log("Event fired!!!");
})

//Event Init
myEmitter.emit('hi');