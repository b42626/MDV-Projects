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
var say = function(message) { console.log(message); };

var handleData = function (json) {
	for (var i = 0; i < json.loadouts.length; i++){
		var loadouts = json.loadouts[i];
		//say("job: " + loadouts.job + ", weapon: " + loadouts.weapon + ", perk " + loadouts.perk );
	};
};
handleData(json2);
// Main Code

