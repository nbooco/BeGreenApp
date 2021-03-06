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
		// Set up tweet buttons for each award type, unless no awards of that type have been earned.
		if (Object.keys(progress.trophies).length == 1) {
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
		};
		var source = gov.green.awards;
		var badgeKeys = Object.keys(progress.badges);
		// Find all earned badges
		var earned = $.grep(source.badges, function(obj) {
			return badgeKeys.indexOf(obj.id.toString()) > -1;
		})
		// Add earned badges to badge case
		for (var i = 0; i < earned.length; i++) {
			$('#badges').append("<figure><a href='badge.html?id=" + earned[i].id + "'><img alt='" + earned[i].name + 
				"' src='images/" + earned[i].image + "'><figcaption>" + earned[i].name	+ "<br /><em>Earned " + 
				progress.badges[earned[i].id.toString()] + "</em></figcaption></a></figure>");  
		};
		var trophyKeys = Object.keys(progress.trophies);
		// Find all earned trophies
		var earned = $.grep(source.trophies, function(obj) {
			return trophyKeys.indexOf(obj.id.toString()) > -1;
		})
		// Add earned trophies to trophy case
		for (var i = 0; i < earned.length; i++) {
			var nameLevel = earned[i].name.split(" - ");
			$('#trophies').append("<figure><a href='trophy.html?id=" + earned[i].id + "'><img alt='" + earned[i].name + 
				"' src='images/" + earned[i].image + "'><figcaption>" + nameLevel[0] + "<br />" + nameLevel[1] + "<br /><em>Earned " + 
				progress.trophies[earned[i].id.toString()] + "</em></figcaption></a></figure>");  
		};
		var ribbonKeys = Object.keys(progress.ribbons);
		// Find earned ribbons
		var earned = $.grep(source.ribbons, function(obj) {
			return ribbonKeys.indexOf(obj.id.toString()) > -1;
		})
		// Add earned ribbons to ribbon case
		for (var i = 0; i < earned.length; i++) {
			var nameLevel = earned[i].name.split(" - ");
			$('#ribbons').append("<figure><a href='ribbon.html?id=" + earned[i].id + "'><img alt='" + earned[i].name + 
				"' src='images/" + earned[i].image + "'><figcaption>" + nameLevel[0] + "<br />" + nameLevel[1] + "<br /><em>Earned " + 
				progress.ribbons[earned[i].id.toString()] + "</em></figcaption></a></figure>");  
		};
		var stickerKeys = Object.keys(progress.stickers);
		// Find earned stickers
		var earned = $.grep(source.stickers, function(obj) {
			return stickerKeys.indexOf(obj.id.toString()) > -1;
		})
		// Add earned stickers to sticker case
		for (var i = 0; i < earned.length; i++) {
			$('#stickers').append("<figure><a href='sticker.html?id=" + earned[i].id + "'><img alt='" + earned[i].name + 
				"' src='images/" + earned[i].image + "'><figcaption>" + earned[i].name	+ "<br /><em>Earned " + 
				progress.stickers[earned[i].id.toString()] + "</em></figcaption></a></figure>");  
		};
	}
}());