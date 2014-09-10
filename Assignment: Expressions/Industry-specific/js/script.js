/**
 * Jana Nash-Siegle
 * 9/10/2014
 * WPF
 * Expression: Assignment - Industry Specific
 *
 * **/


/*How can we help you today? Web Design, Mobile Apps, Hosting
So we can contact you regarding your request, what is your name?
What is your email?
Thank you, we shall be in touch with you shortly.
 */
var services = ["SEO"];             //array listing of services to pull into prompts and console

 services[1] = "web design";
 services[2] = "mobile apps";
 services[3] = "hosting";

//Offer Services

var userInput = prompt("Welcome, how may we help you today?  \n We offer the best in " + services[0] + ", " +
    services[1] +  ", "    + services[2]    + ", and " + services[3] + ".\n Please type the " +
    "service you would like more information on.");

console.log("Welcome, how may we help you today?  \n We offer the best in " + services[0] + ", " + services[1] +  ", "
    + services[2] + ", and " + services[3] + ". \n Please type the service you would like more information on.");
console.log("You would like more information on " + userInput + ".");

//for mathematical equations in console.log ONLY

var ageCompany = prompt("Please take a small survey for us. \n How old is your company?");
var empHire = prompt("How many employees do you hire a year?");
var currentEmp = prompt("How many employees do you currently employ?");
var hoursWork = prompt("How many hours a week do they work?");
var years = 20;

var futureCompany = Number(ageCompany) + years;
console.log("In " +  years +  " years your company will be " + futureCompany + " years old.");

var newHire = Number(empHire) * years;
console.log("In " + years + " years you will hire " + newHire + " new employees." );

var currentHours = Number(currentEmp) * Number(hoursWork);
console.log("Your " + currentEmp + " employees currently work " + currentHours + " hours a week.");

//end console.log ONLY questions



var userName = prompt("So we may contact you, please give us your name");

var userEmail = prompt("What is your email address?");

console.log("Your name is " + userName + "." + "  Your email address is " + userEmail);

alert("Thank you, " + userName + ".  We will soon be in touch.");

console.log("Thank you, " + userName + ".  We will soon be in touch using " + userEmail + ".");


