//template ;literals

var a = 10;
var b = 10;
function sum(x,y){
return x+y
}
function multi(x,y){
return x*y
}
console.log(`Sum is ${sum(a,b)} and Multiplication
would be ${multi(a,b)}.`);

//breaking a line with \n

console.log("This is line one \n" + "and this is line two");



function arr(x){
   return x*(x+1)/2;
}

var t1 = performance.now();
console.log(t1);
console.log(arr(100000));

var t2 = performance.now();
console.log(t2);
console.log(`time elapsed:${(t2-t1)/1000} seconds`);


///////////////////

 var a = [1, "two", false, null, undefined];
 a;
[1, "two", false, null, undefined]
 a[5] = [1, 2, 3];
[1, 2, 3]
 a;
[1, "two", false, null, undefined, Array[3]]
// The Array[3] in the result is clickable in the console and it expands the array values. Let's look
// at an example where you have an array of two elements, both of them being other arrays:
 var a = [[1, 2, 3], [4, 5, 6]];
 a;
[Array[3], Array[3]]