//console.log("js file connected");

var paras = document.querySelectorAll("p");
//var para = document.getElementsByTagName("p");
//console.log(paras);

paras.forEach(para=>{
   // console.log(para);
})

var err = document.querySelector("div.error");
//console.log(err);
//console.log(err.innerHTML);
err.innerHTML = '<h2>this ias a new error text</h2>'
// err.forEach(er=>{
//     er.innerHTML = '<h2>this ias a new error text</h2>'
// })

var errs = document.querySelectorAll(".error");

errs.forEach(para=>{
    // console.log(para);
 })

 //==========//

 var hello = document.getElementById('hello');

 //console.log(hello.style);
 hello.style.color = "green";
 hello.style.margin = "200px"

 console.log(hello.innerText);
 hello.innerText += " very happy :)"

 console.log(hello.innerHTML);

 var errr = document.getElementsByClassName("error");
 //console.log(errr);
//  errr.forEach(tag=>{
//     console.log(tag);
// })

 var tags = document.getElementsByTagName("p");
 //console.log(tag);

//  tags.forEach(tag=>{
//      console.log(tag);
//  })


 var arr2 = ["ammy","tanny","jimmy"];

//  arr2.forEach(arr=>{
//      content.innerHTML += `<p>${arr}</p>`;
//  })

