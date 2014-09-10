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


    var userInput1 =  prompt("Do you own a dog?");

        userInput1.toLowerCase();
        console.log("Thank you for your answer of " + userInput1);

if (userInput1.toLowerCase() == "no") {
    alert("I'm sorry we can't help you");

    skip();                                      //stops script from running on a no reply.  There has to be a better way
                                                //of doing this, but it's working for this assignment despite error.
                                       }
else if (userInput1.toLowerCase() == "yes") {
    var userInput = prompt("How many pounds of dog food do you use a month?");

}
var result = userInput/15;
var total = result * 12;
var cost = total * 29.99;
{
alert("If you use " + userInput + " pounds of dog food a month, then you buy " + result + " bag(s) a month or " + total +
    " bags " + " per year. \n Each bag costs $29.99 so you spend $" + cost + " a year on dog food.");
}
console.log(result + " bags a month.  ", total + " bags per year.  ", "You spend $" + cost + " a year on dog food.");





