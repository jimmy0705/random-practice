//===CONSTRUCTURE /INSTANCE / INHERTENCE IN OBJECT===//

//constructure function
var Person = function(name,yearOfBirth,job){
this.name = name;

this.yearOfBirth=yearOfBirth;
this.job = job
}


//creating instance
var john = new Person('john',1990,'teacher');
var jimmy = new Person('jimmy',1990,'banker');

console.log(john);
console.log(jimmy);


