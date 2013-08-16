//Joanne Reynolds August 16th, 2013 Expressions_Wacky

//Calculate the average time your dog spent outside for three days.

//Created prompts for the user to enter how long the dog was outside for three different days.
var one = prompt("We are calculating the average time your dog spent outside in 3 days. \nPlease enter the number of minutes for Day 1:")*1;

var two = prompt("Please enter the number of minutes for Day 2:")*1;

var three = prompt("Please enter the number of minutes for Day 3:")*1;

//Added all three days together first then divided by 3 to get the average.
var totalMinutes = (one+two+three)/3;

//Created an alert for the user to see the average number of minutes.
alert("Your dog spent an average of" + " " + totalMinutes + " " + "minutes outside in three days.")

//Created a message with answer for the console.
console.log("Your dog spent an average of" + " " + totalMinutes + " " + "minutes outside in three days.");