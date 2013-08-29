//Joanne Reynolds August 28, 2013 Functions Wacky


//We are going to create a function to determine whether or not you can drink your milk based on the date and the freshness.

//Created a function named milk with two parameters(milkDate and milkOpened). Prompted the user to answer two questions to determine whether or not the milk was drinkable. Created and else if statement that gives different alerts and console messages depending on what the user answered in the prompts.
function milk(milkDate, milkOpened){
    var milkDate = prompt("We are going to determine whether or not you can drink your milk. Has the date on the milk passed? Please enter yes or no:");
    var milkOpened = prompt("Was the milk opened more than 7 days ago? Please enter yes or no:");

    if(milkDate === "yes"){
        console.log("Ew, throw the milk away. You cannot drink it.");
        alert("Ew, throw the milk away. You cannot drink it");
    }else if(milkOpened === "yes"){
        console.log("This milk probably isn't fresh. I would advise you not to drink it.");
        alert("This milk probably isn't fresh. I would advise you not to drink it.");
    }else{
        console.log("The milk is fresh and the date is current. Pour yourself a giant glass!");
        alert("The milk is fresh and the date is current. Pour yourself a giant glass!");
    }
}

//Invoked my function so that it runs through the prompts and gives the user the appropriate alerts and message in the console.
milk();
