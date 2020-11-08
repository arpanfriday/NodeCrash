const Person = require('./person');
const Logger = require('./logger');

const Person1 = new Person("Arpan", 12);
Person1.display();

const logger = new Logger();

logger.on('fire', (data) => {
    console.log('Called Listener: ', data);
})

logger.log('Hello world');