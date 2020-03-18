
function first(){
    setTimeout(()=>{
        console.log("callback");
    },3000);
}


function second(){
    console.log("ddd");
    first();

    console.log("fhfhfh");
}


second();