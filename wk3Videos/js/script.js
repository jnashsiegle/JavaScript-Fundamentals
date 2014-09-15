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
} */

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