//alert("JavaScript works!");

// Matt Nowakowski
// Project 3
// SDI 1302
// War Game

// local variables
var game = "King of the Hill"
var win = "true"
var score = "100"





// functions

var numToWin = function(firstNumber,secondNumber){
	var outcome = firstNumber-secondNumber;
	
	return outcome;
	};
	var points = numToWin(100,30);

var say = function(message) { console.log(message); };
// json data

var handleData = function (json) {
	for (var i = 0; i < json.loadouts.length; i++){
		var loadouts = json.loadouts[i];
		say("job: " + loadouts.job + ", weapon: " + loadouts.weapon + ", perk " + loadouts.perk );
	};
};

// functions
var oneHill = function(){
var hillNames = [ "mid center", "southern hill", "data center", "radio tower"],
	secPerHill = [10,10,10,10];
for (var hillNumber = 0; hillNumber < hillNames.length; hillNumber++){
	var hillName = hillNames[hillNumber],
		secThisHill = secPerHill[hillNumber];
		say(hillName + " will be captured in " + secThisHill + " seconds.");
for (var sec = 0; sec < secThisHill; sec += 5) {
	var secRemain = secThisHill - sec;
	say(sec + " captured " + secRemain + " to go ");
	}
	say(hillName + " captured, hill moved.");
 }

};

var kit = function (name) {
	var kitChange = [];
	var perk = [];
	var changeKit = function(item) {
	if (item !=="rockets"){
	
		kitChange.push(item);
		} else {
		say("Can't equip choose support class or select a different weapon.")
	}	
};
var getName = function () { return name; };
	return {
		"name": getName,
		"weapon": kitChange,
		"perk": perk,
		"changeKit": changeKit
		
	};
};
var sniper = kit("sniper");
var support = kit("support");
var assault = kit("assault");

var airAttack = {

	"attack": "hell storm",
	"radius": 10,
	"pi": 3.14,
	"area": function(){
	var totalArea = this.radius * this.pi;
	return totalArea;
	},
	"setRadius": function(newRadius){
	this.radius = newRadius;
	}
};	
// conditionals


// Main Code
