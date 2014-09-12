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
		for (var t = 0; t < gov.green.awards.trophies.length; t++) {
			if (gov.green.awards.trophies[t].tags.indexOf(tag) != -1) {
				list.push(gov.green.awards.trophies[t]);
			};
		};
		for (var r = 0; r < gov.green.awards.ribbons.length; r++) {
			if (gov.green.awards.ribbons[r].tags.indexOf(tag) != -1) {
				list.push(gov.green.awards.ribbons[r]);
			};
		};
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
		for (var k = 0; k < list.length; k++) {
			if (list[k].tags[1] == 'Trophies') {
				$(cats[i]).find('.list-group').append("<a href='trophy.html?id=" + list[k].id + "' class='list-group-item'>" + list[k].name + "</a>");
			} else if (list[k].tags[1] == 'Ribbons') {
				$(cats[i]).find('.list-group').append("<a href='ribbon.html?id=" + list[k].id + "' class='list-group-item'>" + list[k].name + "</a>");
			} else {
				$(cats[i]).find('.list-group').append("<a href='badge.html?id=" + list[k].id + "' class='list-group-item'>" + list[k].name + "</a>");
			}	
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
		for (var t = 0; t < gov.green.awards.trophies.length; t++) {
			if (gov.green.awards.trophies[t].name.substr(0, 1) == start) {
				list.push(gov.green.awards.trophies[t]);
			};
		};
		for (var r = 0; r < gov.green.awards.ribbons.length; r++) {
			if (gov.green.awards.ribbons[r].name.substr(0, 1) == start) {
				list.push(gov.green.awards.ribbons[r]);
			};
		};
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
		for (var k = 0; k < list.length; k++) {
			if (list[k].tags[1] == 'Trophies') {
				$(letters[i]).find('.list-group').append("<a href='trophy.html?id=" + list[k].id + "' class='list-group-item'>" + list[k].name + "</a>");
			} else if (list[k].tags[1] == 'Ribbons') {
				$(letters[i]).find('.list-group').append("<a href='ribbon.html?id=" + list[k].id + "' class='list-group-item'>" + list[k].name + "</a>");
			} else {
				$(letters[i]).find('.list-group').append("<a href='badge.html?id=" + list[k].id + "' class='list-group-item'>" + list[k].name + "</a>");
			}	
		};
		if ($(letters[i]).find('.list-group').html() == "") {
			$(letters[i]).hide();
		};
	};
}