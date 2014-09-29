// Script for populating ribbon pages

(function() {
	var progress;
	var current = {};
	$(document).ready(function(){
		setUp();
		progress = JSON.parse(localStorage["userProgress"]);
		finder();
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

	// Finds the information for the displayed ribbon using the id passed as a parameter in the URL
	function finder() {
		var num = location.search.substring(4); // ?id=[4]
		var ribbons = gov.green.awards.ribbons;
		current = findAndStop(ribbons, num);
		// Hide bonus content if ribbon has not yet been earned
		if (!(current.id.toString() in progress.ribbons)) {
			$('.extra').hide();
		};
	}

	// Searches ribbon data until it finds ribbon with passed id
	function findAndStop(arr, value) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].id == value) {
				return arr[i];
			}
		};
	}

	// Adds content to appropriate page sections
	function populator() {
		$('title').prepend(current.name + " ");
		$('#name').text(current.name);
		$('#badge').attr('src', 'images/' + current.image);
		$('#badge').attr('alt', current.altText);
		$('#badgeText').html(current.desc);
		for (var j = 0; j < current.tags.length; j++) {
			$('#tags').append('<a href="guide.html#' + current.tags[j] + '">' + ' ' + current.tags[j] + ' </a>' );
		};
		$('#goal').html(current.earn);
		$('#bonus').attr('src', 'images/' + current.bonus);
		$('#bonus').attr('alt', current.bonusAlt);
	}
}());