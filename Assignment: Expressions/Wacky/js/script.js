/**
Jana Nash-Siegle
 Sept 10, 2014
 WPF Section 01
Assignment: Expression - Wacky */

//alert("testing testing 1, 2 3");

//Wisdom of the ages number game - Simply follow the steps of the game and convert it into js

var birthMonth = prompt("Input the month (by number) of when you were born.");  //gather month born
console.log("You were born in the " + birthMonth + "(th or nd or rd) month.");  //print response to console

var result = Number(birthMonth) * 4;  //multiply by 4
console.log("Multiplied by four gives us " + result + ".");  //print response to console

var result1 = result + Number(13);  //add 13
console.log("Then we add 13 to " + result + " and we get " + result1 + "." );  //print response to console

var result2 = result1 * 25;  //multiply by 25
console.log("Next we multiply " + result1 + " by 25 and get " + result2 + ".");  //print response to console

var result3 = result2 - Number(200);  //subtract 200
console.log("Subtracting 200 from " + result2 + " gives us " + result3 + ".");  //print response to console

var dayBirth = prompt("Enter the day of the month you were born.");  //gather day of month born
var result4 = result3 + Number(dayBirth);  //add to result3
console.log("Taking the " + dayBirth + " and adding it to " + result3 + " gives us " + result4 + ".");  //print response to console

var result5 = result4 * 2;  //multiply by 2
console.log("Multiplying " + result4 + " by two gives us " + result5 + ".");  //print response to console

var result6 = result5 - 40;  //subtract 40
console.log("Now we subtract 40 from " + result5 + " and it gives us " + result6 + ".");  //print response to console

var result7 = result6 * 50;  //multiply by 50
console.log("Again, we multiply, this time we take 50 times " + result7 + " arriving at " + result7 + ".");
//print response to console

var endYear = prompt("What are the last two digits of the year of your birth?");  //gather information
var result8 = result7 + Number(endYear);  //add year to running total
console.log("Adding the last two digits of your birth year to " + result7 + " gives us " + result8 + ".");
//print response to console

var result9 = result8 - Number(10500);  //subtract 10500
console.log("Finally we take " + result8 + " and subtract 10,500" + " reaching the number " + result9 + ".");
//print response to console

console.log(result9 + " will reflect the month, day and last two digits of your birth year."); //print response to console

