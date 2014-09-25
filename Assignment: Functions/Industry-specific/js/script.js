/**
 * Jana Nash-Siegle
 * 9/24/2014
 * WPF
 * Assignment: Functions - Industry Specific
 *
 * **/

//Basic Color Converter

/*var colorNames = ["Red", "Blue", "Green", "White", "Black"];  //color choices
var element = 0;


var userChoice = prompt("Choose a color:  " + colorNames);

var returnHex = colorConverter();
colorConverter();


function colorConverter(){

    return

    console.log("You chose " + userChoice + " and the correct hex code is");
}

console.log("The color is " + colorNames[0] + " so the hex code is " + hexArray[0]);*/


var hexNum = ["#FF0000", "#0000FF", "008000", "#FFFFFF", "#000000"];  //matching hex codes

function findHex(userChoice){


    var colorName = ["Red", "Blue", "Green", "White", "Black"];  //color choices


    var element = 0;


    while(colorName[element] != userChoice){
        element = element +1;
    }

    return colorName[element];


}

var userChoice = prompt("Choose a color:  " + " Red, Blue, Green, White, or Black.");

var hexNum = findHex(userChoice);

console.log("The hexcode for " + userChoice + " is " + hexNum + ".");
//console.log(userChoice + " is the code of " + colorName[element]);
