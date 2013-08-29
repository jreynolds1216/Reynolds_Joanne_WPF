//Joanne Reynolds August 28, 2013 Functions Personal

//We are going to calculate how many sandwiches we need for each day on a road trip depending on the # of sandwiches each person will eat per day and how many days we will be on the trip.

var trip = function(people, perDay, days){
    var people = prompt("We are going to be calculating how many sandwiches total we need per day on our road trip. Please enter how many people will be going on the trip:");
    var perDay = prompt("How many sandwiches will each person eat per day?");
    var days = prompt("How many days will the road trip last?");
    var sandwiches = people * perDay / days;
    return sandwiches;
}


