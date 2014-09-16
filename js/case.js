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
	var badgeKeys = Object.keys(progress.badges);
	var earned = $.grep(source.badges, function(obj) {
		return badgeKeys.indexOf(obj.id.toString()) > -1;
	})
	for (var i = 0; i < earned.length; i++) {
		$('#badges').append("<figure><a href='badge.html?id=" + earned[i].id + "'><img alt='" + earned[i].name + "' src='images/" + earned[i].image + "'><figcaption>" + earned[i].name	+ "<br /><em>Earned " + progress.badges[earned[i].id.toString()] + "</em></figcaption></a></figure>");  
	};
	var trophyKeys = Object.keys(progress.trophies);
	var earned = $.grep(source.trophies, function(obj) {
		return trophyKeys.indexOf(obj.id.toString()) > -1;
	})
	for (var i = 0; i < earned.length; i++) {
		$('#trophies').append("<figure><a href='trophy.html?id=" + earned[i].id + "'><img alt='" + earned[i].name + "' src='images/" + earned[i].image + "'><figcaption>" + earned[i].name	+ "<br /><em>Earned " + progress.trophies[earned[i].id.toString()] + "</em></figcaption></a></figure>");  
	};
	var ribbonKeys = Object.keys(progress.ribbons);
	var earned = $.grep(source.ribbons, function(obj) {
		return ribbonKeys.indexOf(obj.id.toString()) > -1;
	})
	for (var i = 0; i < earned.length; i++) {
		$('#ribbons').append("<figure><a href='ribbon.html?id=" + earned[i].id + "'><img alt='" + earned[i].name + "' src='images/" + earned[i].image + "'><figcaption>" + earned[i].name	+ "<br /><em>Earned " + progress.ribbons[earned[i].id.toString()] + "</em></figcaption></a></figure>");  
	};
}