/**
Jana Nash-Siegle
9/24/2014
 WPF Section 01
Assignment: Functions - Wacky */

//alert("testing testing 1, 2 3");



var userInput = prompt("Input a number between 1 and 6");
rollDie();
var ranRoll = rollDie();




function rollDie() {
    var die = Math.floor(Math.random() * 6) + 1;
    console.log("You rolled " + die);


}

console.log("This is our random number " + ranRoll  + "but you picked " + userInput);


//var returnDie = rollDie();



