//Jana Nash-Siegle 9/8/2014 Expressions Worksheet

/*
 Criteria:
 For each solution you will need the following:

 Label the section of code appropriately with comments
 Write the givens as appropriately named variables or constants.
 Declare a variable for your result.
 Use the variables to calculate the result (NOT the literal values or numbers)
 Calculate the result using the variables in an expression
 Assign the calculation to the resulting variable.
 Make sure to print the result in the console (Remember to include units like “feet” and “slices of pizza”)
 Comment every line of code (describe what each line is doing in English)

 Don't forget!
 Test your code! Do the calculations on your own calculator. Check that the computer is producing the same result.
 Commit often!
 A "given" is a variable that is part of the initial set up of a formula. You should write your code so anyone can
 change the values of the givens and the result of the calculation should still be accurate.


/* Dog Years
 Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”
   Calculate how old Sparky the pit bull is in dog years based on his actual age.
 */


/*
//Givens are Sparky's age and dog years
var sparkyAge = 5;
var dogYears = 7;

//Result variable - multiply Sparky's age times 7 to get dog years age
x = sparkyAge * dogYears;

//output to console the correct sentence

console.log("Sparky is " + sparkyAge + " " + "human years old which is " + x + " " +  "in dog years.");



// Slice of Pizza pt 1
 A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza
  each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing
   the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)
*/

/*
   // Givens of people and pizza

   var slicePizza = 8;
   var people = 40;
   var wholePizza = 10;

//Result variable - Multiply slices per pizza times the amount of pizza pies divided by the amount of people at the
// party.

x = (slicePizza * wholePizza) / people;

//output to console the correct sentence

console.log("Each person ate " + x + " slices of pizza at the party." );
*/

//Slice of Pizza pt 2

//Givens from pt 1.

/*

var slicePizza = 8;
var people = 40;
var wholePizza = 10;

//Results Variable - use Modulo to find the remaining slices of pizza for Sparky.

x = (slicePizza * wholePizza) % people

console.log("Sparky got " + x + " slices of pizza.");
*/
//poor sparky


// Average Shopping Bill

//Given for Average Shopping Bill

var monShopping = [125, 76, 243, 59, 116];

//Result Variable for Total Amount Spent on Groceries

var total = monShopping[0] + monShopping[1] + monShopping[2] + monShopping[3] + monShopping[4];

//write to console the total 5 weeks shopping
console.log(total);

//Result Variable for Average weekly grocery shopping
x = total / 5;


// write to console the average
console.log(x);

//write to console the average in a sentence
console.log("You have spent a total of " + "$"+ total + " on groceries over 5 weeks." + "\n" + "That is an average of " + "$" + (x) + " per week.");

//how to round the x to two decimal places?  Math.round?  but where/how?  *try to come back to








