//The logical AND operator : Let's say you're tasked with coming up with some code that will check if the currentTime variable is between 9 a.m. and 5 p.m. The code needs to console.log true if currentTime > 9 and if currentTime < 17.
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);  // Used Logical operator && 

//The logical OR operator : You need to write a program in JavaScript which will return true if the value of the currentTime variable is not between 9 and 17. Put differently, your code needs to console.log true if the value of the variable currentTime is either less than 9 or greater than 17.
var currentTime = 7;  // less than 9 case
console.log(currentTime > 9 || currentTime < 17);
var currentTime = 20; // greater than 17 case
console.log(currentTime > 9 || currentTime > 17); 
console.log(currentTime < 9 || currentTime < 17); // output False case 

//The modulus operator(%): a small restaurant that has 4 chairs per table, and a total of 5 tables, suddenly receives 22 guests.How many guests will not be able to sit down in the restaurant?
console.log(22%5); //2

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

/*
You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.
Create a variable named  score and set it to  8
Use console.log() that includes the string "Mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator
The expected output in the console should be: "Mid-level skills: true".
*/
var score = 8;
console.log("Mid-level skills:", (score > 0 && score < 10)); //Mid-level skills: true

/*
Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.
You need to code a new variable named timeRemaining and set it to 0. You also need to code a new variable named energy and set it to 10.
Next, you should write a piece of code that could be used to determine if the game is over, based on whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.
*/
var timeRemaining= 0;
var energy= 10;
console.log("Game over:", (timeRemaining == 0 || energy == 0)); //Game over: true

/*Console log the result of adding two numbers, 5 and 10, using the + operator*/
console.log(5+10); //15

/* 
Code three variables:
The first variable should be a string with the following value: "Now in ". Name the variable now.
The second variable should be a number with the value: 3. Name the variable three.
The third variable should a string with the following value: "D!". Name the variable d.
Console log the following code: now + three + d.
*/
var now = "Now in ";
var three = 3;
var d = "D!";
console.log (now + three + d); // Now in 3D!

/*
Code a new variable and name it counter, assigning it to the value of 0.
On the next line, use the += operator to increase the value of counter by 5.
On the next line, use the += operator to increase the value of counter by 3.
On the fourth line, console log the value of the counter variable.
 */
var counter =0;
counter += 5;
counter += 3;
console.log (counter); // 8

/*
You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).
To achieve this task, you need to declare six variables, as follows:
The first variable, named num1,  should be assigned a number value of 2.
The second variable, named num2, should be assigned a number value of 5.
The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.
The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.
The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.
The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.
Run console log two times after you've set the variables:
The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1
The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2
 */
var num1= 2;
var num2 = 5;
var test1 = num1 %2;//0
var test2 = num2 %2;//1
var result1 = (test1 == 0); // true
var result2 = (test2 == 0); // False
console.log("Is", num1, "an even number?", result1);
console.log ("Is", num2, "an even number?", result2);

//You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).
var num1= 0;
var num2= -2;
var result1 = ((num1%2) == 0);
var result2 = ((num2%2) == 0);
console.log("Is", num1, "an even number?", result1);
console.log ("Is", num2, "an even number?", result2);

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
