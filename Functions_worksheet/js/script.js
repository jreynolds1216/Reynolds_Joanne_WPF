//Joanne Reynolds August 27, 2013 Functions worksheet

//Problem #1 Circumference
//Function to calculate the circumference of a circle.

//Declared total as variable.
var total = totalCirc (12);

//Created totalCirc function to calculate circumference.
function totalCirc(radius){
    var circ = (radius * 2) * 3.14;
    return circ;
}
//Printed message with the answer to the console.
console.log("The circumference of the circle is" + " " + total);



//Problem #2 Stung!
//Calculate the number of bee stings it takes to kill a human.

//Declared beeStings as variable.
var beeStings = totalStings(75);

//Created function to calculate problem.
function totalStings(pounds){
    var stings = pounds * 8.666666667;
    return stings;
}

//Printed message to the console with the answer.
console.log("It takes" + " " + beeStings + " " + "to kill a human.");


