//==============scope==============//
xyz();
function xyz (){
    console.log("hhhh");
}

xyz();


//==function constructor==//
//hi();


const hi = new Function('console.log("Hi World!");');
console.log(hi);
hi();