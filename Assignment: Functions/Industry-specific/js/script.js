/**
 * Jana Nash-Siegle
 * 9/24/2014
 * WPF
 * Assignment: Functions - Industry Specific
 *
 * **/

//Basic Color Converter


function findHex(userChoice){


    var colorName = ["Red", "Blue", "Green", "White", "Black"];  //color choices
    var hexCode = ["#FF0000", "#0000FF", "008000", "#FFFFFF", "#000000"];  //matching hex codes
    var element = 0;  //default color element to 0

    while(colorName[element] != userChoice){ //this compares the colorName to user Input
        element = element +1;
    }                             // AND

    return hexCode[element];   //and returns the hexcode


}

var userChoice = prompt("Choose a color:  " + " Red, Blue, Green, White, or Black.");  //prompt user for color

while(userChoice === ""){
    userChoice = prompt("Please don't leave blank.  \n Choose a color:  " + " Red, Blue, Green, White, or Black.")
}     //VALIDATION

console.log("Choose a color:  " + " Red, Blue, Green, White, or Black.");   //print out of prompt to console
var hexNum = findHex(userChoice);      // This equates hexnum to findHex function

console.log("The hexcode for " + userChoice + " is " + hexNum + ".");   //prints out statement to console.

