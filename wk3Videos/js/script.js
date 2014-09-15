/**
 * Created by jsiegle on 9/8/14 for Video Assignments Week 2
 */

//alert("testing testing");

/*sunny = "true";

if (sunny) {
    goToBeach();
}
else {
    goToMovies();
}*/

//__________________

//Comparison

var temp =  prompt("please tell us your temperature");

if(temp > 70) {
       alert("Then let's go to the beach");
}


//________________

//Conditional Logic

var oldEnough = false;

//if the child is old enough, print to the console "you can ride!"

if(oldEnough){
   //code performed if condition is true
    console.log("You can ride the coaster!");

}
console.log("What comes after");//prints out if oldEnough is false

//Relational Expressions

var kidHeight = 45;
var minHeight = 48;
//if kid is over 48 inches in height
if(kidHeight > minHeight){
    //code performed if true
    console.log("You can ride the coaster!");
}
else{
    console.log("Sorry, you need to get taller, be sure to eat your spinach!")
}


//Logical Operators

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;
var paycheck = 300;

// if price of phone is less than budget AND if our paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){
    console.log("We can buy the phone!");

}else{
    console.log("No phone for you!!");
}

//or ||  only one variable needs to be true to make pair true
if(iPhonePrice < budget || wonLottery === true ){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}

//Ternary

/*
if(condition){
    do if true;
}else{
    do if false:
}

(condition) ? do if true : do if false;  - the ternary
 */

var gpa = 1.2;

//if gpa is over the min 2.0 score, this student can graduate
if( gpa > 2.0){
    console.log("You can graduate!");
}else{
    console.log("GPA is too low!");
}


(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA too low");


//Dr. Suess

var age = 11;
var book;

//if the child is under 10, they get green eggs and ham
//otherwise they get the Time Machine

if(age < 10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}
console.log(book);

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);