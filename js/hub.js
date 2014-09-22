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
	console.dir(progress);
	console.dir(JSON.stringify(progress));
	var oldData = window.btoa(JSON.stringify(progress));
	$('#save').text(oldData);
	console.log($('#save').val());
	$('#gogogo').on('click', function() {
		var word = $('#load').val();
		word = word.replace(/\s/g, '');
		try {
			var newData = window.atob($('#load').val());
			console.log(newData)
			var given;
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
				if (goodToGo) {
					localStorage.setItem("userProgress", JSON.stringify(given));
					$('#gogogo').parent().after("<div class='alert alert-success alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button><strong>Success!</strong> Your data was loaded successfully. <a class='alert-link' href='guide.html'>Keep earning awards!</a></div>");
				} else {
					$('#gogogo').parent().after("<div class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button><strong>Sorry!</strong> We couldn't read your data. Try again, or feel free to <a class='alert-link' href='guide.html'>recreate your progress</a>.</div>");
				};
			} else {
				$('#gogogo').parent().after("<div class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button><strong>Sorry!</strong> We couldn't read your data. Try again, or feel free to <a class='alert-link' href='guide.html'>recreate your progress</a>.</div>");
			};
		} catch (e) {
			$('#gogogo').parent().after("<div class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button><strong>Sorry!</strong> We couldn't read your data. Try again, or feel free to <a class='alert-link' href='guide.html'>recreate your progress</a>.</div>");
		}
	})
}