//Joanne Reynolds August 28, 2013 Functions Industry

//We are going to be creating a function in which we determine if we can service your car based on what type of car you have and what year it is.

//Created variable service for my function. I tried to just call on function service department but couldn't get it to work? This did though so I stuck with it.
var service = serviceDept();

//Created function with two parameters(typeOfCar and year). I made prompts for user to enter both pieces of information then created a ternary that figured out whether or not we could service the car.
function serviceDept(typeOfCar, year){
    var typeOfCar = prompt("We are going to find out if we can service your car. First, please enter if your car is foreign or american:");
    var year = prompt("Please enter what year your car is:");
    var car;
    car = (typeOfCar == "american" && year >= 1990) ? "We would be happy to service your car.":"Sorry, we do not service foreign cars and/or your car is too old.";
    return car;

}
//Created message with the answer for the console.
console.log(service);
//Also created alert so user can see answer right away instead of looking at the console.
alert(service);
