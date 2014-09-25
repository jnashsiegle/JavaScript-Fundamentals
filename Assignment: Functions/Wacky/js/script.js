/**
Jana Nash-Siegle
9/24/2014
 WPF Section 01
Assignment: Functions - Wacky */

//alert("testing testing 1, 2 3");


var min = 1;
userInput = prompt("Input a number between 1 and 36");
rollDie(min, userInput);





function rollDie(min, userInput) {


    var die1 = Math.floor(Math.random() * 6) + min;
    var die2 = Math.floor(Math.random() * 6) + min;
    var dieTotal = die1 + die2;

    console.log("You rolled " + dieTotal);

    if(userInput === dieTotal){
        alert("You Win!");

    }
    else{
        alert("I'm sorry, you did not win this time");
    }

    //dieTotal = rollDie(min, userInput);
    console.log("This is our random number " + dieTotal  + " but you picked " + userInput);


}



//var returnDie = rollDie();



