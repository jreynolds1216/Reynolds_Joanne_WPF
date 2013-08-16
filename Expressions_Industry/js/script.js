//Joanne Reynolds August 16th, 2013 Expressions_Industry


//Calculate the number of service jobs that need to be done per hour by the service technicians at our dealership.

//First we need to know how many techs are working so I added a prompt for that.
var numberOfTechs = prompt("We are calculating the number of jobs the technicians need to do per hour to get all jobs done in the allotted number of hours. Please enter the number of technicians working:");

//I added a prompt to enter how many jobs we need to get done.
var numberOfJobs = prompt("Please enter the number of jobs that need to be done:");

//I added a prompt to enter how many hours the techs have to get all of the jobs done.
var numberOfHours = prompt("Please enter the number of hours the technicians have to get the jobs done:");

//I added a line to calculate the number of jobs each tech needs to do per hour. It is the number of jobs divided by number of hours they have then divided by the number of techs available.
var numberOfJobsPerHour = numberOfJobs/numberOfHours/numberOfTechs;

//I added an alert that gives the user the answer for how many jobs the techs need to do per hour.
alert("The technicians need to do" + " " + numberOfJobsPerHour + " " + "jobs per hour.");





