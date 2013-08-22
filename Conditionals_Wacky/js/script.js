//Joanne Reynolds August 22, 2013 Conditionals Wacky

//We will be calculating how much food you should give your dog based on his age and weight.

//Added a prompt asking the user to input the age of the dog and explaining what we will be calculating.
var age = prompt("We will be calculating how much you need to feed your dog in cups. Please enter your dog's age in years:");

//Added a  prompt for the user to input the dog's weight in pounds.
var weight = prompt("Please enter your dog's weight in pounds:");

//Added food as a string so that I can use it in my ternary.
var food;

//Added a ternary in which if the dog is 7 or less OR weighs 50 or more pounds then he needs two cups of food per day. If not, the dog only needs one cup of food.
food = (age <= 7 || weight >= 50) ? "Your dog needs 2 cups of food per day." : "Your dog needs only 1 cup of food per day.";
