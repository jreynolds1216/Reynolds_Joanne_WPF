//Joanne Reynolds August 16th, 2013 Expressions_Personal

//Calculate how many cans of cat food you will need to feed your cats for a certain number of days.

//Added a prompt explaining what we are calculating and asking the user to input the number of cats.
var cats = prompt("We are calculating the number of cans of cat food needed to feed your cats for a certain number of days. \nPlease enter the number of cats you are feeding:");

//Added a prompt to input how many cans of food each cat eats per day.
var cansOfFood = prompt("Please enter the number of cans each cat eats per day:");

//Added a prompt asking for user to input number of days cats will need food.
var numberOfDays = prompt("Please enter the number of days for which food is needed:");

//Multiplied the number of cats times the number of food then times the number of days to get the total number of cans needed.
var numberOfCansNeeded = cats*cansOfFood*numberOfDays;

//Added an alert showing the user the total number of cans needed.
alert("You need" + " " + numberOfCansNeeded + " " + "cans of food to feed the cats for" + " " + numberOfDays + " " + "days.")

//Added a message with the answer for the console.
console.log("You need" + " " + numberOfCansNeeded + " " + "cans of food to feed the cats for" + " " + numberOfDays + " " + "days.")
