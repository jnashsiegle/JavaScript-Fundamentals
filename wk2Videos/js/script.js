/**
 * Created by jsiegle on 9/8/14 for Video Assignments Week 2
 */

/*var yearBorn = 1962;

console.log("Hello World!");
console.log(yearBorn);

alert(yearBorn);*/



// Defining Variables
/*
var age;  //declaration
age =  52;  //definition

var yearOfBirth = 1980;  //declaring and defining on same line
*/

//Variables of Different Types, Numbers, Booleans and Strings


/*
var age = 38; // Number Variable

var isStudent = false; //Boolean Variable (on or off, true or false

var firstName = "Kermit";

var phrase = 'I don\'t know \n You\'ll have to speak with the Professor'; //using escape operators (I'd just use double quotes all the time for consistency)
*/

//Arrays

/*var muppetNames = ["Kermit" , "Miss Piggy"]; //could also be 38 or firstName (var) ];  0, 1 , 2 , 3 etc are index numbers for the array

muppetNames[1] = "Rizzo";
muppetNames[2] = "Fozzy";

//var num = 1;

//Adding Concatenating from below partially answered my question
var result = muppetNames[1] + "," +" " +  muppetNames[2] + "," + " " + "Miss Piggy" ;

console.log(result); //how would you include Kermit, Miss Piggy?or how would you list 1 and 2?

*/




//Expressions - Age Example

/* var yearBorn = 1962;


2014 - yearBorn;
var age = 2014 - yearBorn;

console.log(age);
*/

/*Area of a triangle is 1/2W * H

var width = 8;
var height = 7;
var area = width/2 * height;

console.log(area)
*/

/*Modulo

var remainder = 211 % 2;  //replace division / with % sign for Modulo to get remainder only; useful for determining even/odd numbers.

console.log(remainder);
*/

//Expressions - PEMDAS - The Order of Operations Please Excuse My Aunt Daisy
// Parentheses, Exponents, Multiplication, Division, Addition, Subtraction
/*
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

//the average is the sum of the items divided by the number of items

var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;

console.log(average);
*/

/*var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
console.log(perimeter)

//Don't overuse parentheses...just use them if Order of Operations effects outcome.
*/
//Using Arrays in Expressions
/*
var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2];

console.log(total);

*/

//Concatenating

/*var firstName = "Jana";
var lastName = "Nash-Siegle";
var fullName = firstName + " " + lastName;

console.log(fullName);*/
/*
var a = "6";
var b = "7";

var result = a + b;
console.log(result);

*/

//Casting

/*
var stringVar = "6";
 /*
var result = 7 + Number(stringVar);
console.log(result);


var areaCode = 407;
var firstPart = 203;
var secPart = 4529;

//(407) 203-4529
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);
console.log(phoneNo);

*/
//Assignment Operators
/*
var a = 3;
//a += 4;  //same as a = a + 4;
//a *= 4;
//a /= 4;  //  *=  and /=  and -= all work the same as +=
//a -= 4;

//a ++ ;  //a = a + 1 // a += 1

a --; //a = a -1 //a -=1

console.log(a);
*/

// Alerts and Prompts
/*
var userInput = prompt("Enter your year of birth:");
console.log(userInput);

*/

//Calculate area of rectangle

var width = prompt("We are calculating the area of a rectangle. \nPlease enter the width.")
;
var height = prompt("Please enter the height.");
var area = width * height;
//console.log(area);

var result = "The area of your rectangle is " + area + " sq feet";

alert(result);




