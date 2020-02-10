//===CONSTRUCTURE /INSTANCE / INHERTENCE IN OBJECT===//

//constructure function
var Person = function(name,yearOfBirth,job){
this.name = name;

this.yearOfBirth=yearOfBirth;
this.job = job;
// this.age = function (){
//   console.log(2020-this.yearOfBirth);
// }

}
//inheritance
Person.prototype.calculate = function (){
  console.log(2020-this.yearOfBirth);
};

Person.prototype.lastName = "cena";


//creating instance
var john = new Person('john',1990,'teacher');
var jimmy = new Person('jimmy',1980,'banker');
var ttt = new Person();
// console.log(john);
// console.log(jimmy);
// console.log(john.lastName);
// console.log(jimmy.lastName);
//jimmy.calculate();


var Wallet = function (num1,num2){
  this.money = num1;
  this.spend = num2
}

Wallet.prototype.remain= function(){
  console.log(this.money-this.spend);
}


var x1 = new Wallet(2000,178);


// console.log(x1);
// x1.remain();

///////object.create methods etc. ///////

var personProto = {
  calculateAge : function(){
    console.log(2020- this.yearOfBirth);
  }
}

var bharat = Object.create(personProto);
//console.log(bharat);
bharat.name = "bharat";
bharat.yearOfBirth = 1989;

// console.log(bharat);
// bharat.calculateAge();

//proper objet.create way==//
var ravi = Object.create(personProto,{
 name:{value:'ravi'},
 yearOfBirth:{value:1978}

});

console.log(ravi);