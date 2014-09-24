/**
 * Jana Nash-Siegle
 * 9/24/2014
 * WPF
 * Assignment: Functions - Personal
 *
 * **/


//alert("testing, testing");

var passengers = prompt("How many people will be going on the trip?", "enter a value between 1-10");  //How many people are going?
while(passengers === "") {
    passengers = prompt("You forgot to input something!");
}
var carCount = function(passengers){
    if(passengers <= 5){
        carCount("one car");
    }
}




