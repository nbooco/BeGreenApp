$(document).ready(function() {
	$('#alphabetical').hide();
	$('.starter-template button').on('click', function() {
		$('.starter-template button').removeClass('active');
		$(this).addClass('active');
		$('#categories, #alphabetical').slideUp();
		$('#' + $(this).attr('name')).slideDown();
	})
	catPopulator();
	azPopulator();
})

function catPopulator() {
	var cats = $('#categories .factor').get();
	for (var i = 0; i < cats.length; i++) {
		var list = [];
		var tag = $(cats[i]).find('h2').text();
		for (var j = 0; j < gov.green.awards.badges.length; j++) {
			if (gov.green.awards.badges[j].tags.indexOf(tag) != -1) {
				list.push(gov.green.awards.badges[j]);
			};
		};
		list.sort(function(a, b) {
			return a.name > b.name;
		})
		for (var k = 0; k < list.length; k++) {
			$(cats[i]).find('.list-group').append("<a href='badge.html?id=" + list[k].id + "' class='list-group-item'>" + list[k].name + "</a>");
		};
	};
}

function azPopulator() {
	var letters = $('#alphabetical .factor').get();
	for (var i = 0; i < letters.length; i++) {
		var list = [];
		var start = $(letters[i]).find('h2').text();
		for (var j = 0; j < gov.green.awards.badges.length; j++) {
			if (gov.green.awards.badges[j].name.substr(0, 1) == start) {
				list.push(gov.green.awards.badges[j]);
			};
		};
		list.sort(function(a, b) {
			return a.name > b.name;
		})
		for (var k = 0; k < list.length; k++) {
			$(letters[i]).find('.list-group').append("<a href='badge.html?id=" + list[k].id + "' class='list-group-item'>" + list[k].name + "</a>");
		};
		if ($(letters[i]).find('.list-group').html() == "") {
			$(letters[i]).hide();
		};
	};
}