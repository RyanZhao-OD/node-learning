var module_person = require('./person.js');  //require是同步的

console.log(module_person); // { Person: [Function: Person] }

var Person = module_person.Person;
// console.log(Person());
var person = new Person();
console.log(person);    // Person { name: 'ryanzhao' }
