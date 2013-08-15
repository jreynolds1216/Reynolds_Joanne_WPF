//Joanne Reynolds August 15th, 2013 Expressions Worksheet

//Calculate Sparky's age in dog years

var ageInHumanYears = 2;
//Multiply age in humans years times 7.
var ageInDogYears = ageInHumanYears * 7;

//Print the output age.
console.log("Sparky is" + " " + ageInHumanYears + " " + "human years old which is" + " " + ageInDogYears + " " + "in dog years.")



//Calculate the number of slices of pizza each person can have at the party.

var slicesPerPizza = 10;
var numberOfPeople = 5;
var numberOfPizzas = 5;

//Multiply the number of pizzas by the number of slices then divide by the number of people at the party.
var numberOfSlicesPerPerson = numberOfPizzas * slicesPerPizza / numberOfPeople;

//Print the output.
console.log("Each person ate" + " " + numberOfSlicesPerPerson + " " + "slices of pizza at the party.")




//Calculate the number of slices Sparky gets after the slices are divided up evenly among the human guests.

var slicesPerPizza = 10;
var numberOfPeople = 9;
var numberOfPizzas = 5;

//Multiply the number of pizzas by the number of slices then use modulo to show the remainder that Sparky will get.
var numberOfSlicesForSparky = numberOfPizzas * slicesPerPizza % numberOfPeople;

//Print the output number of slices Sparky will get.
console.log("Sparky got" + " " + numberOfSlicesForSparky + " " + "slices of pizza.")



//Calculate the average you have spent on groceries over the last 5 weeks.
var groceryBills = [220, 175, 193, 216, 202];
//Add all of the bills from the last 5 weeks together to get a total.
var total = groceryBills[0] + groceryBills[1] +groceryBills[2] + groceryBills[3] + groceryBills[4];
//Divide the total from the last 5 weeks by 5 to get the average.
var average = total / 5;

//Calculate the output total of the 5 weeks of grocery bills and the average of grocery bills over the last 5 weeks.
console.log("You have spent a total of $" + total + " " + "on groceries over 5 weeks. That is an average of $" + average + " " + "per week.")




//Calculate the price of an item with and without tax after a discount is applied.

var originalPrice = 20;
var discountPercentage = 20;
var itemName = "Dining" + " " + "Table";
var salesTax = 20;

//Multiply discount by original price to get amount of discount.
var itemDiscount = originalPrice * (discountPercentage * 0.01);
//Subtract amount of discount from original price to get discounted price.
var priceAfterDiscount = originalPrice - itemDiscount;
//Multiply sales tax by price after discount to get amount of sales tax.
var totalSalesTax = priceAfterDiscount * (salesTax * 0.01);
//Add sales tax to discounted price to get total price with sales tax. You can skip this step for price without sales tax.
var finalItemPrice = priceAfterDiscount + totalSalesTax;

console.log("Your" + " " + itemName + " " + "was originally $" + originalPrice + "," + " " + "but after a" + " " + discountPercentage + "%" + " " + "discount, it is now $" + priceAfterDiscount + " " + "without tax, and $" + finalItemPrice + " " + "with tax.");


