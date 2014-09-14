/**
 * Jana Nash-Siegle
 * WPF
 * Textbook Tryouts
 * 9/14/14.
 */

var myFirstVariable;

myFirstVariable = "Hello";
alert(myFirstVariable);

myFirstVariable = 54321;
alert(myFirstVariable);
/* ________________________________________*/

var string1 = "Hello";
var string2 = "Goodbye";

alert(string1);
alert(string2);

string2 = string1;  //makes string2 the same variable as string1 "Hello"

alert(string1);
alert(string2);

string1 = "Now for something different";  //resets string 1 from Hello to goodbye but string2 will still maintain hello
//not it's original variable of good bye

alert(string1);
alert(string2);

//Calculations

var firstNumber = 15;
var secondNumber = 10;
var answer;
answer = 15 / 10;
alert(answer);

answer = firstNumber / secondNumber;
alert(answer);

//Equation is °C = 5/9 (°F - 32).
var degFahren = prompt("Enter the degrees in Fahrenheit", 50);
var degCent;

degCent = 5/8 * (degFahren - 32);

alert(degCent);

//Concatenating Strings

var greetingString = "Hello";
var myName = prompt("Please enter your name", "");
var concatString;

document.write(greetingString + " " + myName + "<br>");          //2 ways of writing the hello name..
concatString = greetingString + " " + myName + "<br>";

document.write(concatString);

//User Friendly Temperature Converter

var degFahren1 = prompt("Enter the degrees in Fahrenheit.", 50);
var degCent1;
degCent1 = 5/8 * (degFahren1 - 32);

alert(degFahren1 + "\xB0 Fahrenheit is " + degCent1 + "\xB0 centigrade");

//Converting Strings to numbers

var myString = "56.02 degrees centigrade";
var myInt;
var myFloat;
document.write("\" " + myString + "\" is " + parseInt(myString) + " as an integer" + "<br>");

myInt = parseInt(myString);
document.write("\" " + myString + "\" when converted to an integer equals " + myInt + "<br />");

myFloat = parseFloat(myString);
document.write("\" " + myString + "\" when converted to a floating point number equals "
     + myFloat + "<br />");

//test

var myString1 = "I am a name, not a number. ";
var myInt1;
var myFloat1;
document.write("\" " + myString1 + "\" is " + parseInt(myString1) + " as an integer" + "<br>");

myInt1 = parseInt(myString1);
document.write("\" " + myString1 + "\" when converted to an integer equals " + myInt1 + "<br />");

myFloat1 = parseFloat(myString1);
document.write("\" " + myString1 + "\" when converted to a floating point number equals "
     + myFloat1 + "<br />");

//Arrays

var myArray = new Array();
myArray[0] = "Bob";
myArray[1] = "Pete";
myArray[2] = "Paul";

document.write("myArray[0] = " + myArray[0] + "<br />");
document.write("myArray[2] = " + myArray[2] + "<br />");
document.write("myArray[1] = " + myArray[1] + "<br />");

myArray[1] = "Mike";
document.write("myArray[1] changed to " + myArray[1]);
