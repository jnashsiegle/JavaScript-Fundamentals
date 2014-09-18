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
    console.log(Number(randomNumber));


    var userInput = prompt("Guess a number between 1 and 100."); // have user guess a number
    console.log("You guessed " + Number(userInput) + ".");

    {


        if (Number(userInput) === Number(randomNumber)) {
            console.log("Fantastic!  " + Number(userInput) + " is correct!  You got it right!");  //This block is for correct answer
            alert("Fantastic!  " + Number(userInput) + " is correct!  You got it right!");

        } else(badGuess = ("Try Again! Your guess is to " + ((Number(userInput) < Number(randomNumber)) ? " low." :
            " high.")));
        {//This ternary evaluates incorrect guess as to whether it is too low or high

            console.log(badGuess);
            prompt(badGuess);
        }
    }


 }else{
    console.log("Awww I'm sorry to see you go!");
}

