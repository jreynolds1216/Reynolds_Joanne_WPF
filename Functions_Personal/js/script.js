//Joanne Reynolds August 28, 2013 Functions Personal

//We are going to calculate how many sandwiches we need for each day on a road trip depending on the # of sandwiches each person will eat per day and how many days we will be on the trip.

//Created a function with three parameters. Prompted the user to enter the # of people on the trip, the # of sandwiches they will eat per day, and the # of days we will be on the trip. Multiplied the # of people by the amount they will each per day and then divided that # by the # of days the trip will last. Returned the answer in the variables sandwiches.
var trip = function(people, perDay, days){
    var people = prompt("We are going to be calculating how many sandwiches total we need per day on our road trip. Please enter how many people will be going on the trip:");
    var perDay = prompt("How many sandwiches will each person eat per day?");
    var days = prompt("How many days will the road trip last?");
    var sandwiches = people * perDay / days;
    return sandwiches;
}

//Created a variable for my function. Same thing as last problem. I could not get it to work without doing this?
var vacationTrip = trip();

//Created a message for the console letting the user know how many sandwiches we will need per day on the trip.
console.log("We will need" + " " + vacationTrip + " " + "sandwiches per day for the trip.");

//Created an alert so user can immediately have the answer instead of viewing the console.
alert("We will need" + " " + vacationTrip + " " + "sandwiches per day for the trip.");
