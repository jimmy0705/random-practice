//=======foreach=========//

const numbers = [1,2,3,4,5,6,7,8];
numbers.forEach(function(num,x){ // second parameter is for index
   // console.log(x,num);
   if(num >=5){
     //  console.log(num);
   }
})

//====map===//

var nos = [1,2,3,4,5,6,7,8,9];

const even=nos.map(function(no){
  return no*2;
  
})



//console.log(even);


//===arrow function ===//


const even1=nos.map(no=>{
    return no*2;
  })

 // console.log(even1);

//=======fiind=======//

var arrys=  ["mrs x","mr y","md z","dr ss","eng cs","etc etc"];
//var xx = arrys.sort();
//console.log(xx);

const finding = arrys.find(arr=>{ 
    return arr.includes("mrs");})



//console.log(finding);
//====sort=======//


//==========filter=========//

const fltr = arrys.filter(arr=>{
    return arr.includes("m");
})

// console.log(fltr);
// console.log(arrys);


//==============reduce==============//

var qq = [1,2,3,4,5,6];

var q2 = qq.reduce((accumulator,num)=>{
    return accumulator +num;
})


//console.log(q2);


///===========promises ||||  async await============///

function bread(){
  return false;
}

function egg(){
  return false;
}

function bringBread(){
  return new Promise((resolve,reject)=>{
    if(bread()){
      resolve("hear is your bread");
    }
    else if(egg()){
      resolve("here is your egg")
    }
    else{
      reject("nothing is available")
    }
  })
}

// bringBread().then(data=>{
//   console.log(data);
// }).catch(err=>{
//   console.log(err);
// })

//===========asyyync await=======//

async function final(){
  try{
    const data = await bringBread();
    console.log("getting data after waiting "+data);
    return data;
  } catch(e){
   // console.log(e);
     return Promise.reject(e);
  }
  
}

final().then(data=>{
  console.log(data);
}).catch(err=>{
  console.log(err);
})
///////

