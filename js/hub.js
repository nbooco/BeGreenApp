// Defines saving and loading functionality on Hub page

(function() {		
	var progress;
	$(document).ready(function(){
		var featured;
		setUp();
		progress = JSON.parse(localStorage["userProgress"]);
		populator();
		botd();
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

	// Defines save and load functions
	function populator() {
		// Encodes current data
		var oldData = window.btoa(JSON.stringify(progress));
		// Presents encoded data for saving
		$('#save').text(oldData);
		// Defines load functionality
		$('#gogogo').on('click', function() {
			var word = $('#load').val();
			// Removes whitespace from load data
			word = word.replace(/\s/g, '');
			// Check if entered text is viable 64-bit encoding
			try {
				// Decode data
				var newData = window.atob($('#load').val());
				console.log(newData)
				var given;
				// Check if data is valid JSON
				try { 
					given = JSON.parse(newData);
				} catch (exception) {
					given = null;
				}
				if (given) {
					console.dir(given);
					var goodToGo = true;
					var oldKeys = Object.keys(progress);
					var newKeys = Object.keys(given);
					for (var i = 0; i < newKeys.length; i++) {
						if (oldKeys[i] !== newKeys[i] || typeof progress[oldKeys[i]] !== typeof given[newKeys[i]]) {
							goodToGo = false;
						};
					};
					// Check if data matches app format
					if (goodToGo) {
						// Save loaded data, show success alert
						localStorage.setItem("userProgress", JSON.stringify(given));
						$('#gogogo').parent().after("<div class='alert alert-success alert-dismissible' role='alert'>" +  
							"<button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>" + 
							"&times;</span><span class='sr-only'>Close</span></button><strong>Success!</strong> " + 
							"Your data was loaded successfully. <a class='alert-link' href='guide.html'>Keep earning " + 
							"awards!</a></div>");
					} else {
						// All below: show failure alert
						$('#gogogo').parent().after("<div class='alert alert-danger alert-dismissible' role='alert'>" + 
							"<button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>" + 
							"&times;</span><span class='sr-only'>Close</span></button><strong>Sorry!</strong> We " + 
							"couldn't read your data. Try again, or feel free to <a class='alert-link' " + 
							"href='guide.html'>recreate your progress</a>.</div>");
					};
				} else {
					$('#gogogo').parent().after("<div class='alert alert-danger alert-dismissible' role='alert'>" + 
						"<button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;" + 
						"</span><span class='sr-only'>Close</span></button><strong>Sorry!</strong> We couldn't read " + 
						"your data. Try again, or feel free to <a class='alert-link' href='guide.html'>recreate your " + 
						"progress</a>.</div>");
				};
			} catch (e) {
				$('#gogogo').parent().after("<div class='alert alert-danger alert-dismissible' role='alert'><button " + 
					"type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span " + 
					"class='sr-only'>Close</span></button><strong>Sorry!</strong> We couldn't read your data. Try " + 
					"again, or feel free to <a class='alert-link' href='guide.html'>recreate your progress</a>.</div>");
			}
		})
	}

	function botd() {
		featured = picker();
		$('#badge').attr('src', 'images/' + featured.image);
		$('#badge').attr('alt', featured.altText);
		$('#name').text(featured.name);
		$('#text').html(featured.desc);
		for (var j = 0; j < featured.tags.length; j++) {
			$('#tags').append('<a href="guide.html#' + featured.tags[j] + '">' + ' ' + featured.tags[j] + ' </a>' );
		};
		$('#goal').html(featured.earn);
		$('#link').html('<a href="badge.html?id=' + featured.id + '">Learn more</a>')
	}

	function picker() {
		var options = gov.green.awards.badges;
		var possible = options.length;
		return options[Math.floor((Math.random() * possible))];
	}
}());