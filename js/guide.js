// Populates progress sections with appropriate awards and progress bars

(function() {
	$(document).ready(function() {
		setUp();
		$('#alphabetical').hide();
		// Defines functionality for switching between category and alphabetical views
		$('.starter-template button').on('click', function() {
			$('.starter-template button').removeClass('active');
			$(this).addClass('active');
			$('#categories, #alphabetical').slideUp();
			$('#' + $(this).attr('name')).slideDown();
		})
		catPopulator();
		azPopulator();
	})

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

	// Populates categories with links to related awards
	function catPopulator() {
		var cats = $('#categories .factor').get();
		// Find awards for each category
		for (var i = 0; i < cats.length; i++) {
			var list = [];
			var tag = $(cats[i]).find('h2').text();
			// Find badges in category
			for (var j = 0; j < gov.green.awards.badges.length; j++) {
				if (gov.green.awards.badges[j].tags.indexOf(tag) != -1) {
					list.push(gov.green.awards.badges[j]);
				};
			};
			// Find trophies in category
			for (var t = 0; t < gov.green.awards.trophies.length; t++) {
				if (gov.green.awards.trophies[t].tags.indexOf(tag) != -1) {
					list.push(gov.green.awards.trophies[t]);
				};
			};
			// Find ribbons in category
			for (var r = 0; r < gov.green.awards.ribbons.length; r++) {
				if (gov.green.awards.ribbons[r].tags.indexOf(tag) != -1) {
					list.push(gov.green.awards.ribbons[r]);
				};
			};
			// Sort alphabetically within category
			list.sort(function(a, b) {
				if (a.name > b.name) {
	   				return 1;
			    }
			    if (a.name < b.name) {
			        return -1;
			    }
			    // a must be equal to b
			        return 0;
			})
			// Add links to respective section
			for (var k = 0; k < list.length; k++) {
				if (list[k].tags[1] == 'Trophies') {
					$(cats[i]).find('.list-group').append("<a href='trophy.html?id=" + list[k].id + 
						"' class='list-group-item'>" + list[k].name + "</a>");
				} else if (list[k].tags[1] == 'Ribbons') {
					$(cats[i]).find('.list-group').append("<a href='ribbon.html?id=" + list[k].id + 
						"' class='list-group-item'>" + list[k].name + "</a>");
				} else {
					$(cats[i]).find('.list-group').append("<a href='badge.html?id=" + list[k].id + 
						"' class='list-group-item'>" + list[k].name + "</a>");
				}	
			};
		};
	}

	// Populates letter sections with appropriate awards
	function azPopulator() {
		var letters = $('#alphabetical .factor').get();
		// Find awards beginning with each letter
		for (var i = 0; i < letters.length; i++) {
			var list = [];
			var start = $(letters[i]).find('h2').text();
			// Find badges that begin with this letter
			for (var j = 0; j < gov.green.awards.badges.length; j++) {
				if (gov.green.awards.badges[j].name.substr(0, 1) == start) {
					list.push(gov.green.awards.badges[j]);
				};
			};
			// Find trophies that begin with this letter
			for (var t = 0; t < gov.green.awards.trophies.length; t++) {
				if (gov.green.awards.trophies[t].name.substr(0, 1) == start) {
					list.push(gov.green.awards.trophies[t]);
				};
			};
			// Find ribbons that begin with this letter
			for (var r = 0; r < gov.green.awards.ribbons.length; r++) {
				if (gov.green.awards.ribbons[r].name.substr(0, 1) == start) {
					list.push(gov.green.awards.ribbons[r]);
				};
			};
			// Sort alphabetically within letter
			list.sort(function(a, b) {
				if (a.name > b.name) {
	   				return 1;
			    }
			    if (a.name < b.name) {
			        return -1;
			    }
			    // a must be equal to b
			        return 0;
			})
			// Add links to respective div
			for (var k = 0; k < list.length; k++) {
				if (list[k].tags[1] == 'Trophies') {
					$(letters[i]).find('.list-group').append("<a href='trophy.html?id=" + list[k].id + 
						"' class='list-group-item'>" + list[k].name + "</a>");
				} else if (list[k].tags[1] == 'Ribbons') {
					$(letters[i]).find('.list-group').append("<a href='ribbon.html?id=" + list[k].id + 
						"' class='list-group-item'>" + list[k].name + "</a>");
				} else {
					$(letters[i]).find('.list-group').append("<a href='badge.html?id=" + list[k].id + 
						"' class='list-group-item'>" + list[k].name + "</a>");
				}	
			};
			// Hide empty letter sections
			if ($(letters[i]).find('.list-group').html() == "") {
				$(letters[i]).hide();
			};
		};
	}
}());