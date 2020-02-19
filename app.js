console.log("=====app.js page===========");

///
for(var i =1; i<30;i+=2){
  //  console.log(i);
    }


    //////


    var nested = [[1,2,3],[3,4,5,6,7],[1,6,3]];
    //console.log(nested[0][2]);
for(var i = 0; i <nested.length;i++){
    //console.log(i);
    //console.log(nested[i]);
   // console.log(nested[i].length);
    var l2=nested[i];

    for(var j = 0;j<l2.length;j++){
      //  console.log(nested[i][j]);
     // console.log(l2[j]);
    }
}

////
for(var nest of nested){
   // console.log(nest);

   for(var nn of nest){
     //  console.log(nn);
   }
   //console.log("/////");
}

//////

var dd = 20;
while(dd>0){
   // console.log(dd);
    dd--;
}


/////////////////

const target = Math.floor(Math.random()*10);
//console.log(target);

/////

var char = "123wjebffn";
var arr = ["xyz",2,3,"hhd"];

for(var rr of arr){
   // console.log(rr);
}


for(var lttr of char){
   // console.log(lttr);
}

////

////looping over a object
var reviews = {
    name:"hahaha",
    ratting:20,
    release:2018,
    categorie:"history"
}

for(var xx of Object.keys(reviews)){
    //console.log(xx,reviews[xx]);
   // console.log(Object.values(reviews));
}

// console.log(Object.keys(reviews));
// console.log(Object.values(reviews));


var revv = {
    name:21,
    rattng:20,
    release:18,
    categorie:2
}

var values = Object.values(revv);
var total = 0;
for(var re of values){
    //console.log(re);
    total += re;
}
console.log(total);