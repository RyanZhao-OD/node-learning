var module_person = require('./person.js');  //require是同步的

console.log(module_person); // { Person: [Function: Person] }

var PersonFunc = module_person.Person;

var person = new PersonFunc();
console.log(person);    // Person { name: 'ryanzhao' }
