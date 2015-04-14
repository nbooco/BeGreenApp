// Script for populating the case with earned awards

(function() {		
	var progress;
	$(document).ready(function(){
		setUp();
		progress = JSON.parse(localStorage["userProgress"]);
		populator();
	});
	
	// Initializes an empty user data file if none exists	
	function setUp() {
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

	// Populate case sections
	function populator() {
		var source = gov.green.awards;
		findPlace(source, 'badges', '#badges', 'badge');
		findPlace(source, 'trophies', '#trophies', 'trophy');
		findPlace(source, 'ribbons', '#ribbons', 'ribbon');
		findPlace(source, 'stickers', '#stickers', 'sticker');
	}

	function findPlace(source, prizes, division, single) {
		var keys = Object.keys(progress[prizes]);
		// Find earned awards
		var earned = $.grep(source[prizes], function(obj) {
			return keys.indexOf(obj.id.toString()) > -1;
		});
		// Add earned awards to ribbon case
		for (var i = 0; i < earned.length; i++) {
			var nameLevel = earned[i].name.split(" - ");
			$(division).append("<figure><a href='" + single + ".html?id=" + earned[i].id + "'><img alt='" + earned[i].name + 
				"' src='images/" + earned[i].image + "'><figcaption>" + nameLevel[0] + "<br />" + nameLevel[1] + "<br /><em>Earned " + 
				progress[prizes[earned[i].id.toString()]] + "</em></figcaption></a></figure>");  
		};
	}

	/*	function socialButtons(buttonId, singular, plural) {
		if (Object.keys(progress[plural]).length == 1) {
			$(buttonId).attr("data-text", "I've earned " + Object.keys(progress[plural]).length + singular + " on the Seattle Big Green Challenge!");
		} else if (Object.keys(progress[plural]).length > 1) {
			$(buttonId).attr("data-text", "I've earned " + Object.keys(progress[plural]).length + plural + " on the Seattle Big Green Challenge!");
		} else {
			$(buttonId).parent().hide();
		};
	}*/

	// Set up tweet buttons for each award type, unless no awards of that type have been earned.
		/* if (Object.keys(progress.trophies).length == 1) {
			$("#tweetTrophy").attr("data-text", "I've earned " + Object.keys(progress.trophies).length + " trophy on the Seattle Big Green Challenge!");
		} else if (Object.keys(progress.trophies).length > 1) {
			$("#tweetTrophy").attr("data-text", "I've earned " + Object.keys(progress.trophies).length + " trophies on the Seattle Big Green Challenge!");
		} else {
			$("#tweetTrophy").parent().hide();
		};
		if (Object.keys(progress.ribbons).length == 1) {
			$("#tweetRibbon").attr("data-text", "I've earned " + Object.keys(progress.ribbons).length + " ribbon on the Seattle Big Green Challenge!");
		} else if (Object.keys(progress.ribbons).length > 1) {
			$("#tweetRibbon").attr("data-text", "I've earned " + Object.keys(progress.ribbons).length + " ribbons on the Seattle Big Green Challenge!");
		} else {
			$("#tweetRibbon").parent().hide();
		};
		if (Object.keys(progress.stickers).length == 1) {
			$("#tweetSticker").attr("data-text", "I've earned " + Object.keys(progress.stickers).length + " sticker on the Seattle Big Green Challenge!");
		} else if (Object.keys(progress.stickers).length > 1) {
			$("#tweetSticker").attr("data-text", "I've earned " + Object.keys(progress.stickers).length + " stickers on the Seattle Big Green Challenge!");
		} else {
			$("#tweetSticker").parent().hide();
		};
		if (Object.keys(progress.badges).length == 1) {
			$("#tweetBadge").attr("data-text", "I've earned " + Object.keys(progress.badges).length + " badge on the Seattle Big Green Challenge!");
		} else if (Object.keys(progress.badges).length > 1) {
			$("#tweetBadge").attr("data-text", "I've earned " + Object.keys(progress.badges).length + " badges on the Seattle Big Green Challenge!");
		} else {
			$("#tweetBadge").parent().hide();
		};*/
}());