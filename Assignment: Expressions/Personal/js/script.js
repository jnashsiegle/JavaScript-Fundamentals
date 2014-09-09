/**
 * Jana Nash-Siegle 9/9/2014 Personal**/


//How much dog food will I need in order to feed one dog for one year and how much will it cost?
//The dog food comes in 15 pound bags, the serving size is 2 cups and it costs $29.99 per bag.
    //There are 4 cups to the pound

var userInput = prompt("How many pounds of dog food do I use a month?");

var result = userInput/15;
var total = result * 12;

var cost = total * 29.99;

alert("If I use " + userInput + " pounds of dog food a month, then I buy " + result + " bag(s) a month or " + total +
    " bags " + " per year. \n Each bag costs $29.99 so I spend $" + cost + " a year on dog food.");

console.log(result, total, cost);





