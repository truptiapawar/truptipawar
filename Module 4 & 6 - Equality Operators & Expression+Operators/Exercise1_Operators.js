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