/**
 * Jana Nash-Siegle
 * 9/17/2014
 * WPF
 * Conditionals: Assignment - Industry Specific
 *
 * **/


//alert("testing")

alert("Welcome to ABC Web Development.  A series of prompts will follow this notice, simply answer yes or no if it" +
    " is a service you would like us to offer you.  An estimate will follow.");

var cDomainName = 10;
var cHostSite = 50;
var cWebPDM = 500;


var domainName = prompt("Would you like to register a domain name?"); // ask if service they want, 10.00 charge
if( domainName === "yes"){
    console.log("You would like us to register a domain name for you. \n That will cost " + cDomainName + " dollars.");
}else{
    console.log("Let's move on to something else.")
}
var hostSite = prompt("Are you interested in hosting services?"); // 50.00 year if yes to hosting
if(hostSite === "yes"){
    console.log("You would like us to host a site for you. \n That will cost " + cHostSite + " dollars.");
}else{
    console.log("Let's move on to something else.")
}
var webPDM = prompt("Would you like us to design, develop and maintain a website for you?"); // $500 a year if yes
if(webPDM === "yes"){
    console.log("You would like us to design, develop and maintain a website for you.  Great! \n Our package costs "
        + cWebPDM + " dollars.");
}else{
    console.log("Let's move on to something else.")
}
//if(domainName = "yes" ||  hostSite = "yes" || webPDM = "yes");
//    how to add up cDomainName, cHostSite, cWebPDM?
