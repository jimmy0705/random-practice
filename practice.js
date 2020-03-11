//===========javascript practice=========//

let str1= "xyzz";

for(let i =0;i<str1.length;i++){
   // console.log(str1[i]);
}

//======//
let num1= 20;
let i =0;
while(i<num1){
    //console.log(i);
    i++;

}
//=============//

let arr1= [10,20,30,100,80];

for(let i =0;i<arr1.length-1;i++){
    //console.log(arr1[i]);
    if(arr1[i]===100){
       // console.log("got 100");
        break;
    }
}
//=======function witgh default paramaters=========//

var testing =function (name = "jimmy",age="26"){
   // console.log(name,age);

}

testing();
testing("john","20");

//======================//

function practice(name){
    let j = name;
   // console.log(j);
   return j;
}
//console.log(j);
const answ=practice("jimmyyy");
//console.log(answ);


