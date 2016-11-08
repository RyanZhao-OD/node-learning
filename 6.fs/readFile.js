const fs = require('fs');
const EventEmitter = require('events');

let person = {};
let emitter = new EventEmitter();

const KEY = 'out';
function out() {
    if(Object.keys(person).length === 2) {
        console.log(person);
    }
}

fs.readFile('./data.txt', 'utf8', function (error, data) {
    person.name = data;
    emitter.emit(KEY);
});

fs.readFile('./data1.txt', 'utf8', function (error, data) {
    person.age = data;
    emitter.emit(KEY);
});

emitter.on(KEY, out);