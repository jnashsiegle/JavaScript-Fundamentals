/**
 * Jana Nash-Siegle
 * 9/24/2014
 * WPF
 * Assignment: Functions - Personal
 *
 * **/


//alert("testing, testing");

console.log("We have two cars available for use. \n How many family members are traveling will \n determine how many cars we use.");

var passengers = prompt("How many family members are going on the trip? \n Input a number between 1-10");
while(passengers === ""  || isNaN(passengers)){   //validate prompt

    //reprompt user
    passengers = prompt("Please don't leave blank or type in anything but numbers. \n Please type in a number");

}

var returnCar;
carCount();

function carCount() {
    if (passengers <= 5) {
        console.log("We will take one car");
    }

    if (passengers > 5) {

            console.log("We will take two cars");
    }

    return returnCar;
}

console.log(passengers);



