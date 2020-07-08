
///===========================BUBBLE SORT =========================///

 var xx = [1,5,8,3,6,7,8,1,11,10];

var N = xx.length;

 for( let i =0; i <N;i++){

    for(let j =0; j <N-i-1;j++){
        if(xx[j] >xx[j+1]){

            var temp = xx[j+1];
            xx[j+1] = xx[j];
            xx[j]= temp;
        }else{

        }
    }
 }

 //console.log(xx);


 ///===========================SELECTION SORT =========================///
 var x = [1,5,8,3,6,7,1,8,11,10];

var n = x.length;


for(let i =0; i<n;i++){
     var minIndex = i;

     var temp = x[i];

     for(let j = i+1;j<n;j++){
        if(x[j] < x[minIndex]){

            minIndex = j;
        }else{

        }
     }

     //swapping 

     x[i] = x[minIndex];
    x[minIndex] = temp;
}

console.log(x);