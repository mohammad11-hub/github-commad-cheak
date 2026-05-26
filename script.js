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
console.log(typeof +My_name);

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

// ==========
// trip question
// =========

// var temp = 1;
// if(temp >= 30){
//     console.log("dariya mu nava joi hu");
// }else if(temp>= 15 && temp < 30){
//     console.log("hotel per TV jovoy");
// }
// else {
//     console.log("nake gerjato roy");
// }


// ==========
// votting task
// =========

// let userAge = 18;
// let isCitizen = true;

// let isRegistered = true;

// if (userAge >= 18) {
//   if (isCitizen) {
//     if (isRegistered) {
//       console.log("You are eligible to vote.");
//     } else {
//       console.log("You are not eligible to vote due to registration status.");
//     }
//   } else {
//     console.log("You are not eligible to vote due to citizenship status.");
//   }
// } else {
//   console.log("You are not old enough to vote.");
// }


// ==========
// interview question
// ==========


// let number = 2;

// if (number % 2 === 0) {
//   console.log("even number");
// } else {
//   console.log("odd number");
// }


// =========
// switch case
// ==========


// var day = "wednesday";
// switch (day) {
//   case "monday":
//     console.log("today is monday"); 
//     break;
//   case "tuesday":
//     console.log("today is tuesday");
//     break;
//   case "wednesday":
//     console.log("today is wednesday");
//     break;
//   case "thursday":
//     console.log("today is thursday");
//     break;
//   case "friday":
//     console.log("today is friday");
//     break;
//   case "saturday":
//     console.log("today is saturday");
//     break;
//   case "sunday":
//     console.log("today is sunday");
//     break;
//   default:
//     console.log("invalid day");
// }


// ================
// finsh the area of circle, square and rectangle using switch case
// ================


// var areofcircle = "square";
// var a=5;
// var b=10;

// switch (areofcircle) {
// case "square":
//   console.log("area of square is " + (a * a));
//   break;
// case "rectangle":
//   console.log("area of rectangle is " + (a * b));
//   break;
// case "circle":
//   console.log("area of circle is " + (3.14 * a * a));
//   break;
// default:
//   console.log("invalid shape");
// }

// ================
//  for loop 
// ================
// var enteredNumber = 59;

// for (var i = 1; i <= 10; i++) {
//   var result = enteredNumber * i;
//   console.log(enteredNumber + " x " + i + " = " + result);
// }
// ================
// while loop
// ================
// var i = 1;
// while (i <= 10) {
//   var result = enteredNumber * i;
//   console.log(enteredNumber + " x " + i + " = " + result);
//   i++;
// }

//===============
// do while loop
// ===============

// var userInput;
// var postiveNumber;

// do {
//   userInput = prompt("Please enter a positive number:");
//   postiveNumber = parseFloat(userInput);
// } while (isNaN(postiveNumber) || postiveNumber <= 0);

// console.log("You entered a valid positive number: " + postiveNumber); 

// ================
// prime number with for loop
// ================

// var num = prompt("enter a number");
// var isprime = true;

// for (var i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isprime = false;
//     break;
//   }
// }

// if (isprime) {
//   console.log(num + " is  a prime number.");
// } else {
//   console.log(num + " is not a prime number.");
// }

// ================
//prime nubr find 1 to 100
// ================

// var limit = 1000;

// console.log("Prime numbers between 1 and " + limit + ":");

// for (var num = 2; num <= limit; num++) {
//   var isprime = true;
//   for (var i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isprime = false;
//       break;
//     }
//   }
//   if (isprime) {
//     console.log(num);
//   }
// }


// ================
// leP YEAR FIND
// ================

// var year = 2028;

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//   console.log(year + " is a leap year.");
// }else {
//   console.log(year + " is not a leap year.");
// }

// // ================
// // draw the pattern
// // ================

// for (var i = 1; i <= 5; i++) {
//   var pattern = "";
//   for (var j = 5; j >= i; j--) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

// ================
// funaction
// ================

function sun(a, b) {
  return a + b;
}
console.log(sun(5, 10));
console.log(sun(20, 30));
console.log(sun(15, 25));

function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("mohammad husain"));


// ================
// perameter and argument
// ================

function studName(name ,age , marks ) {
  return "student name is " + name + " and age is " + age + " and marks is " + marks;
}
console.log(studName("satyarth", 20, 85));

// ================
//calculate the area of circle using function
// ================

// function areaOfCircle(radius) {
//   return 3.14 * radius * radius;
// }
// console.log(areaOfCircle(5));

// ================
// factorial 
// ================ 

// var fact = 6;
// var factorial = 1;
// for (var i = 1; i <= fact; i++) {
//   factorial *= i;
// }
// console.log(factorial);

//` ================
// fact arrow function
// ================

const sum = (a, b) => console.log(`the sum is    ${a + b}`);
sum(5, 10);