//Jana Nash-Siegle 9/21/2014
// Functions Worksheet

/*

*/
/* Example
 //Calculate the Area of a Rectangle
 var width = 5;
 var height = 6;
 var area = calculateArea(width, height);
 console.log(“The Area of the Rectangle is “ + area);

 function calculateArea(w, h )
 {
 return w *h;
 }
 */

//Circumference of a circle



function calCircumference(){
    var radius = 10;    //length of the radius
    var circum = 2 * Math.PI * radius;    //formula to figure out circumference

   return circum;
}

console.log("The circumference of the circle is " + calCircumference().toFixed(2));

alert("The circumference of the circle is " + calCircumference().toFixed(2));


//Stung

var beeStingPerPound = 8.666666667.toFixed(0);   //how many stings per pound it takes to kill an animal
vicWeight = 210;      //vic's weight
 var totalStings = vicWeight * beeStingPerPound;



function numBeeSting(){

    return totalStings;
}

console.log("It takes " + numBeeSting() + " stings to kill an animal that weighs " + vicWeight + " pounds.");