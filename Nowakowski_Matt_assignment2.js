//alert("JavaScript works!");

// Matt Nowakowski
// Project 2
// SDI 1302
// Story

// variables
var soldier = "Lt. Smith"
var numOfPlanes = "20"
var squad1 = "Alpha",
	squad2 = "Bravo",
	squad3 = "Charlie",
	squad4 = "Delta"
;
var squads = [
	"Alpha",
	"Bravo",
	"Charlie", 
	"Delta"
];

// function
var planes = function(firstNumber,secondNumber){
	var outcome = firstNumber-secondNumber;
	
	return outcome;

}
// main code
var planesLost = planes(20,7);

console.log(soldier + " we have lost " + planesLost + " planes since this war started.");
