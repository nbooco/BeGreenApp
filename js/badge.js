$(document).ready(function(){
	var current = {};
	$('.extra').hide();
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
	/*  if(typeof(Storage) !== "undefined") {
			 */

}
	
