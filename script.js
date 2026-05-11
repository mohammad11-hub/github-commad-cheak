// const thirdbutton = document.querySelector(".thirdbutton");
// thirdbutton.addEventListener("click", () => {
//   alert("thanks for the click third button❤️");
// });

console.log("hello world");
// it is the variable and values

var My_name = "10";

// challange no 1

// var _name$ = "satyarth";
// var 123name = "satyarth";
// var $name = "satyarth";
// var my@email = "satyarth";
console.log( typeof +My_name);

// expession and statement
// assigmrnt operator
// var a = 10;
// var b = 20;
// var c = a + b;
// console.log(c);

// challange no 2

// var numebr ="hello " /2;
// console.log(numebr);

// var result = 0.1 + 0.2;
// console.log(result);

// trip question

// var temp = 1;
// if(temp >= 30){
//     console.log("dariya mu nava joi hu");
// }else if(temp>= 15 && temp < 30){
//     console.log("hotel per TV jovoy");
// }
// else {
//     console.log("nake gerjato roy");
// }

// votting task 

let userAge = 18;
let isCitizen = true;

let isRegistered = true;

if (userAge >= 18) {
  if (isCitizen) {
    if (isRegistered) {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote due to registration status.");
    }
  } else {
    console.log("You are not eligible to vote due to citizenship status.");
  }
} else {
  console.log("You are not old enough to vote.");
}