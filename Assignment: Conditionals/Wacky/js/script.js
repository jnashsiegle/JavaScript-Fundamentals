/**
Jana Nash-Siegle
 Sept 17, 2014
 WPF Section 01
Assignment: Conditionals - Wacky */

//alert("testing testing 1, 2 3");

var playGame = prompt("Welcome!  Do you want to play the Random Number Game?"); //Greet and ask if want to play
while(playGame === "") {
    playGame = prompt("You forgot to input something!");  //checking for empty string
}

if(playGame.toLowerCase() === "yes"  || playGame.toLowerCase() === "y"){  //making any input compatible
    console.log("Great!  Let's go!");
 }else{
    console.log("Awww I'm sorry to see you go!");  //How to stop here if no, with no further script execution
}