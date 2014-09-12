var progress;
var current = {};
$(document).ready(function(){
	setUp();
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
	var ribbons = gov.green.awards.ribbons;
	for (var i = 0; i < ribbons.length; i++) {
		if (ribbons[i].id == num) {
			current = ribbons[i];
		}
	}
	if (!(current.id.toString() in progress.ribbons)) {
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
}
	
