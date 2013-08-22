//Joanne Reynolds August 22, 2013 Conditionals Industry

//We are going to determine whether or not a vehicle can go on the lift in the service department. We will determine this by using the weight and length(in feet) of the vehicle.

//Create a prompt for the user to enter how heavy the car is(in pounds).

var weight = prompt("We are going to determine if your vehicle can go on the lift in our service department. Enter your vehicle's weight in pounds:");

//Create a prompt for the user to enter how long the car is(in feet).

var length = prompt("Please enter your vehicle's length in feet:");

//Added a string for your vehicle so that I can make the conditional into a ternary.
var vehicle;

//Added a ternary in which if the customer's vehicle weights less than 4000 pounds and the length is less than 20 feet they get a message saying their car can go on the lift. If one or both of the pieces are false then they get a message saying they must service their vehicle elsewhere.
vehicle = (weight < 4000 && length < 20) ? "Your car can go on the lift." : "Sorry, you must service your vehicle elsewhere.";
console.log(vehicle);

