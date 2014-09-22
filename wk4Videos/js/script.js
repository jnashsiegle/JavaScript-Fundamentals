/**
 * Created by jsiegle on 9/21/14 for Video Assignments Week 4
 */

//alert("testing testing");


//Functions - Function Execution
function outptMsg(){
    console.log("Hello World");
}
var width = 5;  //try to not duplicate variables, but will use one in function

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}
console.log(width);  //this one is scoped within the document, will not pull into function
calcArea();
outptMsg();
calcArea();
outptMsg();
calcArea();

//parameters and arguments & Returning Values

//Originally calcArea1(30, 20); but now for return it will be:
var total = calcArea1(40, 20);  //arguments, this gets stored in parameters


function calcArea1(w, h){  //these are the params, or bins, that hold the arguments
    var area1 = w * h;
    return area1; //spits information out but it goes to calcArea so change to total
//how to get rid of redundancy of area1?
}
console.log(total + " is a mighty fine number.");  //used to be area is now total


//__________________________________________

function dogYears(age){  //generic bin for defined value later in code

    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.");
}
var age2 = 8; //this also will work
dogYears(age2);  //redefines the argument
dogYears(4);  //defines what age is.  passes value 4 to argument age
dogYears(6);

//______________________

//This is a function
function calcAreaF(width, height){  //functions RETURN values
    var area = width * height;
    return area;
}

//This is a procedure
function calcAreaP(width, height){   //list of instructions
    var area = width * height;
    console.log(area);  //no return)
}


//Anonymous Functions

var functionName = function(){
    //code to run
}
functionName();

var calcArea = function(width, height){
    //code the function runs
    var area = width * height;
    return area;
}
var a = calcArea(50,60);
console.log(a + " is huge!")        //anonymous functions have to be declared before they can be called

//Define, then Invoke, Define then Invoke, Define then Invoke on anonymous functions

//anonymous functions are used for code brevity, they also scope better, are easier to limit to certain blocks of code.
//it's a style choice.
//named functions are a more traditional/classical way of doing it
//Important to know both styles