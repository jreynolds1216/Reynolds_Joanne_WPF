//Joanne Reynolds August 28, 2013 Functions Wacky



function milk(milkDate, milkOpened){
    var milkDate = prompt("We are going to determine whether or not you can drink your milk. Has the date on the milk passed? Please enter yes or no:");
    var milkOpened = prompt("Was the milk opened more than 7 days ago? Please enter yes or no:");

    if(milkDate === "yes"){
        console.log("Ew, throw the milk away. You cannot drink it.");
    }else if(milkOpened === "yes"){
        console.log("This milk probably isn't fresh. I would advise you not to drink it.");
    }else{
        console.log("The milk is fresh and the date is current. Pour yourself a giant glass!");
    }
}

var drinkingMilk = milk();
console.log(drinkingMilk);
