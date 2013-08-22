//Joanne Reynolds August 22, 2013 Conditionals Personal

//We will be trying to determine if we need to cut our grass today. If it is more than 5 inches and not raining we will cut it. If it is raining or less than 5 inches we won't cut it.

//Added a prompt explaining what we are calculating to the user and asking them how tall their grass is in inches.
var grass = prompt("We are going to determine if we need to cut the grass today or not. Enter the height of the grass in inches:");

//Added a prompt asking the user to enter whether or not it is raining.
var rain = prompt("Is it raining today? Enter yes or no.");

//Added a conditional for if the grass is greater than or equal to 5 inches and it isn't raining. The user will get a message saying they need to cut the grass.
if (grass >= 5 && rain === "no"){
    console.log("You need to cut the grass today! Your yard looks like a jungle.");
}
