/**
 * Jana Nash-Siegle
 * 9/9/2014
 * WPF
 * Expression: Assignment - Personal
 *
 * **/


//How much dog food will I need in order to feed one dog for one year and how much will it cost?
//The dog food comes in 15 pound bags, the serving size is 2 cups and it costs $29.99 per bag.
    //There are 4 cups to the pound

//find out if they own a dog
    var wantDog =  prompt("Do you own a dog?  Yes or no?");

        //wantDog.toLowerCase();
        console.log("Thank you for your answer of " + wantDog);

//find out how many pounds of dog food they buy a month

if (wantDog.toLowerCase() === "yes") {
    var userInput = prompt("How many pounds of dog food do you use a month?");
    var result = userInput/15;
    var total = result * 12;
    var cost = total * 29.99;

    //tell user the calculations
    {
        alert("If you use " + userInput + " pounds of dog food a month, then you buy " + result + " bag(s) a month or "
            + total + " bags " + " per year. \n Each bag costs $29.99 so you spend $" + cost + " a year on dog food.");
    }
    console.log(result + " bag(s) a month.  ", total + " bag(s) per year.  ", "You spend $" + cost + " a year on dog " +
        "food.");

    //find out what type of dog they own

var breedDog = prompt("What type of dog do you own?");
    alert("The " + breedDog + " is a very cute dog.");
    console.log("The " + breedDog + " is a very cute dog.")
                                       }
else {

    alert("I'm sorry we can't help you as you don't buy dog food.");
    console.log("I'm sorry we can't help you as you don't buy dog food.");
       }



