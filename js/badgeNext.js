console.log(localStorage["userProgress"]);
var progress = JSON.parse(localStorage["userProgress"]);
var current = {};
$(document).ready(function(){	
	finder();
	populator();
});
	

function finder() {
	var num = location.search.substring(4);
	var badges = gov.green.awards.badges;
	for (var i = 0; i < badges.length; i++) {
		if (badges[i].id == num) {
			current = badges[i];
		}
	}
	console.log(current.id.toString());
	console.log(current.id.toString() in progress.badges);
	console.log(Object.keys(progress.badges));
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
	$('#claim').on('click', function() {
		$('.extra').fadeIn();
		for (var k = 0; k < current.tags.length; k++) {
			progress['total' + current.tags[k]] += 1;
			if (!(current.id.toString() in progress.badges)) {
				progress['distinct' + current.tags[k]] += 1;
			};
		}
		if (!(current.id.toString() in Object.keys(progress.badges))) {
			var d = new Date();
			progress.badges[current.id.toString()] = d.getMonth() + '/' + d.getDay() + '/' + (d.getFullYear() % 100);
			progress['total'] += 1;
		};
		localStorage.setItem('userProgress', JSON.stringify(progress));
	})
}
	
