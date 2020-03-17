//console.log("js file connected");

// var paras = document.querySelectorAll("p");
// //var para = document.getElementsByTagName("p");
// //console.log(paras);

// paras.forEach(para=>{
//    // console.log(para);
// })

// var err = document.querySelector("div.error");
// //console.log(err);
// //console.log(err.innerHTML);
// err.innerHTML = '<h2>this ias a new error text</h2>'
// err.forEach(er=>{
//     er.innerHTML = '<h2>this ias a new error text</h2>'
// // })

// var errs = document.querySelectorAll(".error");

// errs.forEach(para=>{
//     // console.log(para);
//  })

 //==========//

//  var hello = document.getElementById('hello');

//  //console.log(hello.style);
//  hello.style.color = "green";
//  hello.style.margin = "200px"

//  console.log(hello.innerText);
//  hello.innerText += " very happy :)"

//  console.log(hello.innerHTML);

//  var errr = document.getElementsByClassName("error");
//  //console.log(errr);
// //  errr.forEach(tag=>{
// //     console.log(tag);
// // })

//  var tags = document.getElementsByTagName("p");
//  //console.log(tag);

// //  tags.forEach(tag=>{
// //      console.log(tag);
// //  })


//  var arr2 = ["ammy","tanny","jimmy"];

// //  arr2.forEach(arr=>{
// //      content.innerHTML += `<p>${arr}</p>`;
// //  })

//===//

var x = 1;
//console.log(x);

function scope1 (){
   console.log(x);
   x=2;
   console.log(x);
   var jj = "jimmy";
   console.log(jj);

}
//scope1();
//console.log(jj);

//console.log(x);

//console.log("==================let=========");



let xx = 1;
//console.log(xx);

function scope2 (){
   
 //  console.log(xx);
   //let xx = 22;
   xx=3;
  console.log(xx);

}
//scope2();

//console.log(xx);

//===================================reference type=======================//
console.log("//===================================reference type=======================//");

var obj1 = {
  name:"jimmy",
  age:27,
  testing: function(){
    console.log(`${this.name} is ${this.age} years old .`);
  }
}


var obj2 = obj1;
//console.log(obj2["name"]);
obj2.testing = function(){
  console.log("tu tu tu tutu tara");
}



var obj3 = {...obj1};

//console.log(obj3);

obj3.name = "john";
//console.log(obj3);
//console.log(obj1);

//===========================================//

var jjj = {
  name:"jimmy",
  job:"developer",
  testing: function(){
    console.log(`${this.name} is a ${this.job}`);

  },
  testing1: function(name,job){
    console.log(`${name} is a ${job}`);

  }
}


// console.log(jjj.testing());


// console.log(jjj.testing1("john","designer"));

var kkk = {
  name:"dimitri",
  job:"devops"
  
}

//===call ====//

jjj.testing1.call(kkk,"name","job");

//=== we use apply for passing arrays====//