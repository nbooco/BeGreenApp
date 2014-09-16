var progress;
var current = {};
$(document).ready(function(){
	setUp();
	console.log(localStorage["userProgress"]);
	console.log(typeof localStorage["userProgress"]);
	progress = JSON.parse(localStorage["userProgress"]);
	finder();
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

function finder() {
	var num = location.search.substring(4);
	var badges = gov.green.awards.badges;
	for (var i = 0; i < badges.length; i++) {
		if (badges[i].id == num) {
			current = badges[i];
		}
	}
	if (!(current.id.toString() in progress.badges)) {
		$('.extra').hide();
	};
}

function populator() {
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
	console.log(progress);
	$('#claim').on('click', function() {
		for (var k = 0; k < current.tags.length; k++) {
			progress['total' + current.tags[k]] += 1;			
			if (!(current.id.toString() in progress.badges)) {
				progress['distinct' + current.tags[k]] += 1;
			};
		}
		var d = new Date();
		console.log((current.id.toString() in Object.keys(progress.badges)));
		if (!(progress.badges.hasOwnProperty(current.id.toString()))) {
			progress.badges[current.id.toString()] = d.getMonth() + '/' + d.getDay() + '/' + (d.getFullYear() % 100);
			progress['total'] += 1;
		};
		shiny = gov.green.awards.trophies;
		for (var t = 0; t < shiny.length; t++) {
			if (!(progress.trophies.hasOwnProperty(shiny[t].id.toString())) && (progress['distinct' + shiny[t].tags[0]] == shiny[t].requirement)) {
				progress.trophies[shiny[t].id.toString()] = d.getMonth() + '/' + d.getDay() + '/' + (d.getFullYear() % 100);
				progress['total'] += 1;
				$('p.extra').prepend("<div class='alert alert-warning alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button><strong>Congratulations!</strong> You've earned the <a class='alert-link' href='trophy.html?id=" + shiny[t].id + "'>" + shiny[t].name + " Trophy</a>!</div>");
			}
		};
		fancy = gov.green.awards.ribbons;
		for (var r = 0; r < fancy.length; r++) {
			if (!(progress.ribbons.hasOwnProperty(fancy[r].id.toString())) && (progress['total' + fancy[r].tags[0]] == fancy[r].requirement)) {
				progress.ribbons[fancy[r].id.toString()] = d.getMonth() + '/' + d.getDay() + '/' + (d.getFullYear() % 100);
				progress['total'] += 1;
				$('p.extra').prepend("<div class='alert alert-info alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button><strong>Congratulations!</strong> You've earned the <a class='alert-link' href='ribbon.html?id=" + fancy[r].id + "'>" + fancy[r].name + " Ribbon</a>!</div>");
			}
		};
		$('.extra').fadeIn();
		console.log(progress);
		localStorage.setItem('userProgress', JSON.stringify(progress));
	})
}