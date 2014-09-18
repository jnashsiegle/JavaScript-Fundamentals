/**
Jana Nash-Siegle
 Sept 17, 2014
 WPF Section 01
Assignment: Conditionals - Wacky */

//alert("testing testing 1, 2 3");
var badGuess;

var playGame = prompt("Welcome!  Do you want to play the Random Number Game?"); //Greet and ask if want to play
while(playGame === "") {
    playGame = prompt("You forgot to input something!");  //checking for empty string
}

if(playGame.toLowerCase() === "yes"  || playGame.toLowerCase() === "y"){  //making any input compatible
    console.log("Great!  Let's go!");
    var randomNumber=Math.floor(Math.random()*101);  //Have game choose a random number
    console.log(randomNumber);

    var userInput = prompt("Guess a number between 1 and 100."); // have user guess a number
    console.log("You guessed " + userInput + ".");



    if(userInput === randomNumber) {
       console.log("Fantastic!  " + userInput + " is correct!  You got it right!");
        alert("Fantastic!  You got it right!");



    }else(badGuess = ("Try Again! You guess too " ? (userInput < randomNumber) : " low." ? (userInput > randomNumber) :
    " high."));
    {
        console.log(badGuess);
    }



 }else{
    console.log("Awww I'm sorry to see you go!");  //How to stop here if no, with no further script execution
}

