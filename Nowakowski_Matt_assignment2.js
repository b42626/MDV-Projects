//alert("JavaScript works!");

// Matt Nowakowski
// Project 2
// SDI 1302
// Story

// variables
var soldier = "Commander"
var wars = true
var air = "DuckaDucka"
var numOfPlanes = "20"
var squad1 = "Alpha",
	squad2 = "Bravo",
	squad3 = "Charlie",
	squad4 = "and Delta"
;
var squads = [
	"Alpha",
	"Bravo",
	"Charlie", 
	"and Delta"
];

// function
var planes = function(firstNumber,secondNumber){
	var outcome = firstNumber-secondNumber;
	
	return outcome;

}
var say = function(message) { console.log(message); };

var onePost = function(){
var postNames = [ "north ridge", "south ridge", "east ridge", "west ridge"],
	minPerPost = [10,10,10,10];
for (var postNumber = 0; postNumber < postNames.length; postNumber++){
	var postName = postNames[postNumber],
		minThisPost = minPerPost[postNumber];
		say("starting to clear " + postName + " for " + minThisPost + " minutes.");
for (var min = 0; min < minThisPost; min += 5) {
	var minRemain = minThisPost - min;
	say(min + " done, we have " + minRemain + " to go " + soldier);
	}
	say(postName + " all clear " + soldier + " moving on.");
 }

};

var attack = function(soldier, squad3) {
	say(soldier + squad3 + " team can't make it base they're engaging the enemy.");
	};
var help = function(squad2, air) {
	say("Send " + squad2 + " and 2 " + air + " to cover them from the air");
	};



	
// main code

if (wars === true){
 true;say(soldier + " are planes are dropping like flies." + squads + " teams need to hurry back and take out the AA cannons.");
	} else {
   false;("none of the planes have gone down and " + squads + " team are playing volleyball.");
}

var planesLeft = planes(20,7);

say(soldier + " we have lost " + planesLeft + " since " + squads + " team left to clear the posts");

if (numOfPlanes === "20"){
	say("Thats ok 7 planes should be more than enough to win this war with " + squads + " team.");
	} else {
	say ("we won't have enough resources to win even with " + squads + " team.");
	
}
	say (soldier + " the squads are out clearing posts. get a sitrep and have them report in every 5 min.");
onePost();
say("all posts are clear " + soldier + " we're heading back to base");
attack("Commander,"," Charlie");
help("Bravo" , "DuckaDucka");
say("to be continued");