// Populates progress sections with appropriate awards and progress bars

(function() {
	var progress;
	$(document).ready(function(){
		setUp();
		progress = JSON.parse(localStorage["userProgress"]);
		caller();
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

	// Populate respective ribbon and trophy areas with unearned awards and progress bars
	function caller() {
		var source = gov.green.awards;
		populator(source, 'trophies', '#trophies', 'trophy');
		populator(source, 'ribbons', '#ribbons', 'ribbon');
	}

	function populator(source, prize, division, single) {
		for (var i = 0; i < source[prize].length; i++) {
			// Check if award has been earned
			if (!(progress[prize].hasOwnProperty(source[prize][i].id.toString()))) {
				var soFar = progress["distinct" + source[prize][i].tags[0]];
				var threshold = source[prize][i].requirement;
				var bar = (soFar / threshold).toFixed(2) * 100;
				var nameLevel = source[prize][i].name.split(" - ");
				$(division).append("<figure></figure>");
				$(division + ' figure').last().append("<a href='" + single + ".html?id=" + source[prize][i].id + 
					"'><img src='images/" + source[prize][i].image + "' alt='" + source[prize][i].name + 
					"'><figcaption>" + nameLevel[0] + "<br />" + nameLevel[1] + "<br />" + soFar + " of " + threshold + 
					" badges</figcaption><div class='progress'><div class='progress-bar' " + 
					"role='progressbar' aria-valuenow='" + progress["distinct" + source[prize][i].tags[0]] + 
					"' aria-valuemin='0' aria-valuemax='" + threshold + "' style='width: " + bar + "%;'>" + 
					"<span class='sr-only'>" + soFar + "/" + threshold + "</span></div></div></a>");	  
			}
		};
		if (!($(division).children().length)) {
			$(division).prev().hide();
		};
	}
}());