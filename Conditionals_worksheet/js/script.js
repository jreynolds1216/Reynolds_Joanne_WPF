//Joanne Reynolds August 21, 2013 Conditionals Worksheet

//Problem #1: Stuff Your Face

//Competitor must weight 250 pounds or more to compete in heavyweight. If yes, console says "The competitor qualifies for the heavyweight division." If no, console says "The competitor needs to gain some weight!"

var weight = 220;

if (weight >= 250) {
    console.log("The competitor qualifies for the heavyweight division.");
}else{
    console.log("The competitor needs to gain some weight!");
}


//Problem #2 Celsius to Fahrenheit Converter

//Givens= degrees (in F or C) & unit= a string holding an F or a C
//Message for console "The temperature is x degrees Fahrenheit."  OR  "The temperature is x degrees Celsius."

var degrees = prompt("Please enter the degrees.");

var degreeType = prompt("Enter f to convert to Fahrenheit or c to convert to Celsius.");

var f = degrees * 9/5 + 32;
var c = (degrees - 32) * 5/9;


if (degreeType === f){
    console.log("The temperature is" + " " + f + " " + "degrees Fahrenheit.");
}else{
    console.log("The temperature is" + " " + c + " " + "degrees Celsius.");
}



//Problem #3 Check the login

var username = "Joanne";
var username = prompt("Please enter your username.");

var password = "Reynolds";
var password = prompt("Please enter your password.");

if (username == "Joanne" && password == "Reynolds"){
    console.log("Welcome" + " " + username);
}else if (! username == "Joanne"){
    console.log("User not found. Try again");
}else{
    console.log("Password does not match our records.");
}