/**
 * Jana Nash-Siegle
 * 9/24/2014
 * WPF
 * Assignment: Functions - Personal
 *
 * **/


//alert("testing, testing");

//How many cars do we need to take?

console.log("We have two cars available for use. \n How many family members are traveling will \n determine how many cars we use.");

var passengers = prompt("How many family members are going on the trip? \n Input a number between 1-10");
while(passengers === ""  || isNaN(passengers)){   //validate prompt

    //reprompt user
    passengers = prompt("Please don't leave blank or type in anything but numbers. \n Please type in a number");

}

var returnCar;  //return function data
carCount();

function carCount() {
    if (passengers <= 5) {  //determining if one car or two will be used
        console.log("We will take one car.");  //print out response
    }
    else{

        console.log("We will take two cars.");  //print out response
    }

    return returnCar;  //returns function to variable returnCar
}

console.log("We have " + passengers + " family members going.");   //how many family members are going?



var cashCredit = prompt("Will we pay for gas with cash or credit?");  //find out if gas pay will be cash or credit

while (cashCredit === "") {
    cashCredit = prompt("You forgot to answer the question or used a number. \n Please say cash or credit.");  //validate
}

if(cashCredit == "cash"){
    console.log("We will pay with cash and be eligible for the cash discount.");  //report which payment method
}
else{
    console.log("We will pay with the credit card.");  //report which payment method
}


