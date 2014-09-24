/**
 * Created by jsiegle on 9/24/14 for Video Assignments Week 4
 */

//alert("testing testing");


console.log('----------Loops-----------');

var b = 10;  //sets up the index or starting point

if ( b > 0) {
    console.log("if loop " + b);
}

while ( b > 0){   //checks the condition
    console.log("while loop " + b); //right now will cause infinite loop so we need to change it to b--; to decrement (can also increment with ++; (watch for infinite loops with no ending specified)
    b--;
}

//do while loop  (they will always run even when condition is not met or is false)

var c = 10;

do{
    console.log(" do while loop " + c + ' kegs on the wall');
    c--;
}
while(c >0);

//For Loop  //also known as shorthand code of loops

for (var i = 10; i > 0; i--){
    console.log("For Loop " + i + ' kegs on the wall');
}