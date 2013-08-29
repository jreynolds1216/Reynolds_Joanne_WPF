//Joanne Reynolds August 28, 2013 Functions Industry

//We are going to be creating a function in which we determine if we can service your car based on what type of car you have and what year it is.

var service = serviceDept();

function serviceDept(typeOfCar, year){
    var typeOfCar = prompt("We are going to find out if we can service your car. First, please enter if your car is foreign or american:");
    var year = prompt("Please enter what year your car is:");
    var car;
    car = (typeOfCar == "american" && year >= 1990) ? "We would be happy to service your car.":"Sorry, we do not service foreign cars and/or your car is too old.";
    return car;

}
console.log(service);
alert(service);
