// Script for populating and defining functionality of badge pages

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

	// Finds the information for the displayed badge using the id passed as a parameter in the URL
	function finder() {
		var num = location.search.substring(4); // id=[4]
		var badges = gov.green.awards.badges;
		current = findAndStop(badges, num);
		// Hide bonus content if badge has not yet been claimed
		if (!(current.id.toString() in progress.badges)) {
			$('.extra').hide();
		};
	}

	// Searches badges data until it finds badge with passed id
	function findAndStop(arr, value) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].id == value) {
				return arr[i];
			}
		};
	}

	// Adds content to appropriate page sections and defines claim functionality
	function populator() {
		// Populates page sections
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
		$('#claim').on('click', function() {
			// Increments totals for each attached tag
			for (var k = 0; k < current.tags.length; k++) {
				progress['total' + current.tags[k]] += 1;			
				if (!(current.id.toString() in progress.badges)) {
					progress['distinct' + current.tags[k]] += 1;
				};
			}
			var d = new Date();
			// Adds badge with earn date if not previously earned; increments total award counter
			if (!(progress.badges.hasOwnProperty(current.id.toString()))) {
				progress.badges[current.id.toString()] = (d.getMonth() + 1) + '/' + d.getDate() + '/' + (d.getFullYear() % 100);
				progress['total'] += 1;
			// Notifies user that they have earned points towards totals
			} else {
				$('p.extra').prepend("<div class='alert alert-success alert-dismissible' role='alert'><button " + 
					"type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span " + 
					"class='sr-only'>Close</span></button><strong>Nice Job!</strong> You've gained points towards " + 
					"earning <a class='alert-link' href='guide.html#Ribbons'>Ribbons</a>!</div>");
			};
			playful = gov.green.awards.stickers;
			// Checks whether any unearned stickers have been earned
			for (var s = 0; s < playful.length; s++) {
				// Checks if sticker has been earned
				if (!(progress.stickers.hasOwnProperty(playful[s].id.toString()))) {
					var worthy = true;
					// Checks whether all component badges have been earned
					for (var i = 0; i < playful[s].components.length; i++) {
						if (!(progress.badges.hasOwnProperty(playful[s].components[i].toString()))) {
							worthy = false;
						};
					};
					// Notifies user that they have earned a sticker
					if (worthy) {
						progress.stickers[playful[s].id.toString()] = (d.getMonth() + 1) + '/' + d.getDate() + '/' + (d.getFullYear() % 100);
						progress['total'] += 1;
						$('p.extra').prepend("<div class='alert alert-success alert-dismissible' role='alert'><button " + 
							"type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span>" + 
							"<span class='sr-only'>Close</span></button><strong>Congratulations!</strong> You've " + 
							"earned the <a class='alert-link' href='sticker.html?id=" + playful[s].id + "'>" + 
							playful[s].name + " Sticker</a>!</div>");
					}
				}
			}
			fancy = gov.green.awards.ribbons;
			// Checks whether any unearned ribbons have been earned
			for (var r = 0; r < fancy.length; r++) {
				if (!(progress.ribbons.hasOwnProperty(fancy[r].id.toString())) && (progress['total' + fancy[r].tags[0]] == fancy[r].requirement)) {
					progress.ribbons[fancy[r].id.toString()] = (d.getMonth() + 1) + '/' + d.getDate() + '/' + (d.getFullYear() % 100);
					progress['total'] += 1;
					$('p.extra').prepend("<div class='alert alert-success alert-dismissible' role='alert'><button " + 
						"type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span>" + 
						"<span class='sr-only'>Close</span></button><strong>Congratulations!</strong> You've " + 
						"earned the <a class='alert-link' href='ribbon.html?id=" + fancy[r].id + "'>" + 
						fancy[r].name + " Ribbon</a>!</div>");
				}
			};
			shiny = gov.green.awards.trophies;
			// Checks whether any unearned trophies have beem earned
			for (var t = 0; t < shiny.length; t++) {
				if (!(progress.trophies.hasOwnProperty(shiny[t].id.toString())) && (progress['distinct' + shiny[t].tags[0]] == shiny[t].requirement)) {
					progress.trophies[shiny[t].id.toString()] = (d.getMonth() + 1) + '/' + d.getDate() + '/' + (d.getFullYear() % 100);
					progress['total'] += 1;
					$('p.extra').prepend("<div class='alert alert-success alert-dismissible' role='alert'><button " + 
						"type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span>" + 
						"<span class='sr-only'>Close</span></button><strong>Congratulations!</strong> You've " + 
						"earned the <a class='alert-link' href='trophy.html?id=" + shiny[t].id + "'>" + 
						shiny[t].name + " Trophy</a>!</div>");
				}
			};
			// Reveals bonus content
			$('.extra').fadeIn();
			// Updates saved progress
			localStorage.setItem('userProgress', JSON.stringify(progress));
		})
	}
}());