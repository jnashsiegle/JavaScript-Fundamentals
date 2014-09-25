/**
Jana Nash-Siegle
9/24/2014
 WPF Section 01
Assignment: Functions - Wacky */

//alert("testing testing 1, 2 3");


var min = 2;
userInput = prompt("Input a number between 1 and 12");
rollDie(min, userInput);





function rollDie(min, userInput) {


    var die1 = Math.floor(Math.random() * 6) + min;
    var die2 = Math.floor(Math.random() * 6) + min;
    var dieTotal = die1 + die2;


    var response = (userInput == dieTotal)? "Win"  : "Lose" ;
    alert(response);

    //console.log("You rolled " + dieTotal);



    console.log("The dice rolled a total number of " + dieTotal  + " and you picked " + userInput);


}







