/**
Jana Nash-Siegle
9/24/2014
 WPF Section 01
Assignment: Functions - Wacky */

//alert("testing testing 1, 2 3");

    //Roll Dice Game

var min = 1;  //minimal number die can total
var userInput = prompt("Input a number between 2 and 12");  //prompt for user guess
while(userInput === ""  || isNaN(userInput )) {   //validate user response to number's only no blanks


    //reprompt user
    userInput = prompt("Please don't leave blank or type in anything but numbers. \n Please type in a number");
}

rollDie(min, userInput);  //invoke function





function rollDie(min, userInput) {  //function to calculate total of two rolled die and compare to user number


    var die1 = Math.floor(Math.random() * 6) + min;   //first die roll
    var die2 = Math.floor(Math.random() * 6) + min;   //second die roll
    var dieTotal = die1 + die2;    //total of two die


    var response = (userInput == dieTotal)? "Win"  : "Lose" ;  //alert to win or lose
    alert(response);  //send alert
    console.log(response);  //send via console.log





    console.log("The dice rolled a total number of " + dieTotal  + " and you picked " + userInput);
    //summarize number picked and number rolled


}




