var progress;
var current = {};
$(document).ready(function(){
	setUp();
	progress = JSON.parse(localStorage["userProgress"]);
	populator();
});
	
function setUp() {
	//console.dir(JSON.stringify(localStorage));
	if (!localStorage.hasOwnProperty("userProgress")) {
		var myProgress = {
			"total": 0,
			"totalAir": 0,
			"distinctAir": 0,
			"totalCommunity": 0,
			"distinctCommunity": 0,
			"totalDocument": 0,
			"distinctDocument": 0,
			"totalDrainage": 0,
			"distinctDrainage": 0,
			"totalFoodAndYard": 0,
			"distinctFoodAndYard": 0,
			"totalPower": 0,
			"distinctPower": 0,
			"totalRecycling": 0,
			"distinctRecycling": 0,
			"totalReuse": 0,
			"distinctReuse": 0,
			"totalSolidWaste": 0,
			"distinctSolidWaste": 0,
			"totalTransportation": 0,
			"distinctTransportation": 0,
			"totalWater": 0,
			"distinctWater": 0,
			"totalWebTool": 0,
			"distinctWebTool": 0,
			"badges": {},
			"trophies": {},
			"ribbons": {},
			"stickers": {}
		};
		localStorage.setItem("userProgress", JSON.stringify(myProgress));
	};
}

function populator() {
	var source = gov.green.awards;
	for (var i = 0; i < source.trophies.length; i++) {
		console.log(i);
		if (!(progress.trophies.hasOwnProperty(source.trophies[i].id.toString()))) {
			var soFar = progress["distinct" + source.trophies[i].tags[0]];
			var threshold = source.trophies[i].requirement;
			var bar = (soFar / threshold).toFixed(2) * 100;
			$('#trophies').append("<figure></figure>");
			$('#trophies figure').last().append("<img src='images/" + source.trophies[i].image + "' alt='" + source.trophies[i].name + "'><figcaption>" + source.trophies[i].name + "<br />" + soFar + " of " + threshold + " badges</figcaption>");
			$('#trophies figure').last().append("<div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='" + progress["distinct" + source.trophies[i].tags[0]] + "' aria-valuemin='0' aria-valuemax='" + threshold + "' style='width: " + bar + "%;'><span class='sr-only'>" + soFar + "/" + threshold + "</span></div></div>");	  
		}
	};
	for (var i = 0; i < source.ribbons.length; i++) {
		console.log(i);
		if (!(progress.ribbons.hasOwnProperty(source.ribbons[i].id.toString()))) {
			var soFar = progress["distinct" + source.ribbons[i].tags[0]];
			var threshold = source.ribbons[i].requirement;
			var bar = (soFar / threshold).toFixed(2) * 100;
			$('#ribbons').append("<figure></figure>");
			$('#ribbons figure').last().append("<img src='images/" + source.ribbons[i].image + "' alt='" + source.ribbons[i].name + "'><figcaption>" + source.ribbons[i].name + "<br />" + soFar + " of " + threshold + " badges</figcaption>");
			$('#ribbons figure').last().append("<div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='" + progress["distinct" + source.ribbons[i].tags[0]] + "' aria-valuemin='0' aria-valuemax='" + threshold + "' style='width: " + bar + "%;'><span class='sr-only'>" + soFar + "/" + threshold + "</span></div></div>");	  
		}
	};
}