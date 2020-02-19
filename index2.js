// var Wallet = function (num1,num2){
//   this.money = num1;
//   this.spend = num2
// }


// var x1 = new Wallet(2000,178);


// // console.log(x1);


var a = 1;
var result = '';
if (a === 1) {
result = "a is one";
} else {
result = "a is not one";
}

//if alternative syntax (terenary operator)

 var a = 1;
 //var result = (a === 1) ? "a is one" : "a is not one";
 var result = (a === 1) ? console.log("a is one") : console.log("a is not one");

////////////switch case /////////

function testing(N){
  
  switch (N) {
    case 4:
    console.log('You rolled a four');
    break;
    case 5:
    console.log('You rolled a five');
    break;
    case 6:
    console.log('You rolled a six');
    break;
    default:
    console.log('You rolled a number less than four');
    break;
    }

}


testing(5);

//////////////////////

var xxx = 1;
undefined
switch(xxx){
    case "1":
console.log("hahaha");
break;

    case 1:
console.log("number");
break;

    default:
console.log("ulalala");
break;





}

////////////////////while loop

var i = 0;
while (i < 10) {
console.log(i);
i++;}

/////////


var res = '';
for (var i = 0; i < 10; i++) {
for (var j = 0; j <=i; j++) {
res += '* ';
}
res += '\n';
}
//////////////////


var res = '\n', i, j;
for (i = 1; i <= 7; i++) {
for (j = 1; j <= 15; j++) {
res += (i * j) % 8 ? ' ' : '*';
}
res += '\n';
}

/////

var res = '\n', i, j;
for (i = 1; i <= 7; i++) {
for (j = 1; j <= 15; j++) {
//res += (i * j) % 8 ? ' ' : '*';
if((i*j)%8){
    res+= ' ';
}else{
    res+= '*';
}
}
res += '\n';
}

/////////for in

var rr = [1,2,3,4,5,6];

for(var i in rr){

    console.log(rr[i]);
    }


////////////    set

var ss = new Set()
//undefined

ss.add(1)

///// Default parameters



function render(fog_level=0, spark_level=100){
console.log(`Fog Level: ${fog_level} and spark_level:
${spark_level}`)
}
render(10); //Fog Level: 10 and spark_level: 100


///////////////////

x=[ 1, 2, 3, 4 ];

var z =["fff","jhah"];


var s = x.concat(z)
// [ 1, 2, 3, 4, "fff", "jhah" ]