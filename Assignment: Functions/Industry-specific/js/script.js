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
    var element = 0;

    while(colorName[element] != userChoice){
        element = element +1;
    }

    return hexCode[element];


}

var userChoice = prompt("Choose a color:  " + " Red, Blue, Green, White, or Black.");

while(userChoice === ""){
    userChoice = prompt("Please don't leave blank.  \n Choose a color:  " + " Red, Blue, Green, White, or Black.")
}
console.log("Choose a color:  " + " Red, Blue, Green, White, or Black.");
var hexNum = findHex(userChoice);

console.log("The hexcode for " + userChoice + " is " + hexNum + ".");

