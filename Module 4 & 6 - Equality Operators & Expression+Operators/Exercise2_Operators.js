//The addition assignment operator, += : You are counting the number of overtime hours worked in a week.
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 4;
console.log(overtime); // 10

// The concatenation assignment operator, += 
var longString = "Once";
//longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..." 

//Arithmetic Operators Example
let a = 3;
let value = (100 + 50) * a;
console.log(value); // 450

//Exponentiation Operator
let x = 5;
let z = x ** 2; // 25
let s = 5;
let l = Math.pow(s,2); // 25
// Exponentiation Assignment
let y = 5;
y **=2; // 25
//JavaScript Array includes()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // True

// Conditional (Ternary) Operator :Print if person is young/old enough to vote 
// syntax: variablename = (condition) ? value1:value2 
let age = 10;
let voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable, "to vote");