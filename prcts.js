//"use strict";

//ddd = "jajaja";

//console.log(ddd);

// console.log(age);
// var age = 26;


//var age;
//console.log(age); // undefined
var age = 26;

//===================//
//if and else
const response = "Reed";

let username;

if (response) {
  username = response;
} else {
  username = "guest";
}

//console.log(username);
// terinary
const terinary = response? response :"guest";
//console.log(terinary);

///==Short-circuiting

const result = response || 'yooo';
//console.log(result);


const result1 = true && false;
//console.log(result1);

////===================================================================================///

/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */

const karma = 143;
const isModerator = true;

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
let hasEnoughKarma;

//  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
let canUpvote;

// console.log("canUpvote:", canUpvote);


/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

// set canDelete to true if both hasEnoughKarma and isModerator is true
let canDelete;

// console.log("canDelete:", canDelete);


// Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to false? What if the response is empty?

const response = "JohnDoe";
const hasValidEmail = true;
const user = hasValidEmail && (response || "guest");
// console.log("user: ", user);


//====================================================================================//

function countdown(num1,num2) {
  // write your code here
  
  return function(){
    return num1+num2;
  }
}

const countingDown = countdown(3,8);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());


const x = ()=>{console.log("hhd");};