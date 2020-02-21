//==============scope==============//
//xyz();
function xyz (){
    console.log("hhhh");
}

//xyz();


//==function constructor==//
//hi();


const hi = new Function('console.log("Hi World!");');
// console.log(hi);
// hi();

//////////////// lexical scope===/////

function outer(){
    let movie="jumanzi";

    function inner(){
       // var jj =2;
       // console.log(movie);

        function inner2(){
            console.log(movie);
        }
        inner2();
    }

    inner();
    //console.log(jj);
}

//outer();


////

let add =function (x,y){
    console.log(x+y);
};

let mutiply=function (x,y){
    console.log(x*y);
};

let arr=[add,mutiply]
// console.log("////");
// console.log(arr[1](1,2))
// let arr2=[add(),mutiply()];
// console.log(arr2[2]);

let obj = {
    value1:add,
    value2:mutiply
}

//console.log(obj.value1(1,2));

/////////////////HIGHER ORDER FUNCTION /////////////////

//=====function as an argument =========//

function argument(f){
    f();
    f();
}

function smile(){
    console.log("hahaha");
}

//argument(smile);


function repeat(func,n){
    for(let i =0;i<n;i++){
        func();
    }
}


function sad(){
    console.log(":(((");
}

//repeat(sad,3);

//======function as returned values===//


function sss(num){
    console.log(num)
   return function(x){
        console.log(num*x);
    }
}

var triple = sss(3);
var double = sss(2);

// triple(5);
// double(5);
//sss(3)(2);

//=======callbacks========//






