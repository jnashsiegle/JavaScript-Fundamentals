//Jana Nash-Siegle 9/8/2014 Conditionals Worksheet

/*
 or each solution you will need the following:
 Label the section of code appropriately
 Write the givens as variables
 The result should be calculated using variables, not literal values when possible.
 Create code that will make decisions based on the value of the givens
 Print the result of the decision-making to the console.
 Use only code and techniques learned in this class.
 Example:
 Problem: If the temperature is less than 75 degrees we will go to the beach, otherwise we will go to the movies.
 Answer:
 //Hot Enough?<br> //Is it hot enough to go to the beach?<br> var temp = 80;<br> //if the temperature is less than 75..

 <br> if(temp < 75){<br>      //if its less than 75<br>      console.log(“We will go to the beach!”);<br> }else{<br>
       //if it’s greater or equal to 75<br>      console.log(“We will go to the movies.”);<br> }

 Example:
 Stuff your face I

 To get in the heavyweight division of the Strawberry Festival’s pie eating contest you must weigh 250 lbs or more.
  Determine whether an entrant qualifies based on his weight.

 Given:
 Competitor’s weight.
 Result:
 “The competitor qualifies for the heavyweight division.” Or  “ The competitor needs to gain some weight!”

*/

//Example

var qualWeight = 250;



if(qualWeight >= "250"){
    console.log("The competitor qualifies for the heavyweight division.")

}else {
    console.log("The competitor needs to gain some weight!");
}

//Temperature Converter

var degTemp = prompt("What is the temperature?", 32);  //ask user for temperature to convert
var unitTemp = prompt("Is it F or C?");  //find out if input temp is F or C

if(unitTemp.toUpperCase() ===  "F"){  //if Temp is F to begin with the results will convert to C
    var result = ((degTemp - 32) * 5 / 9);
    console.log("The temperature is " + result +  " degrees Celsius.");
 }else{
    var result1 = (degTemp * (9 / 5) + 32);
    console.log("The temperature is " + result1 + " degrees Fahrenheit.");
}

//Login Verification

var userName = prompt("What is your User Name?"); //prompts user for user name
var password = prompt("What is your password?"); // prompts user for password
var cUserName = "John Doe";  //verification for correct name
var cPassword = "abc123";  //verification for correct password

if (userName === cUserName && password === cPassword) {  //checks input username and password against correct ones
        console.log("Welcome " + userName);  //welcomes user if all is correct

 }  else if(password != cPassword){
        console.log("Password does not match our records.");  //pops this error message if password does not match
}else{
        console.log("User not found. Try again.") ; //pops this error message if user name is not correct

}

//Movie Time

var cusAge = prompt("What is your age?"); // get age of movie goer
var movieTime = prompt("What time will you be attending the movie?", 1); //check movie time attending
var tickPrice = 12;
var dTickPrice = 7;

//if(cusAge >= 55 || cusAge < 10 && movieTime > 2 || movieTime < 6){  //determining age eligibility and movie time
if((cusAge >= 55 || cusAge < 10) || (movieTime >=3 && movieTime <= 5)){  //a better way of writing the above line
    console.log("The ticket price is " + dTickPrice + " dollars.");   //eligibility for discounted ticket

}else{
    console.log("The ticket price is " + tickPrice + " dollars.");  //then charge regular price
}