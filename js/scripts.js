$(document).ready(function() {
	
	$('#menu-list').hide();
	
	$('#menu').click(function(){
		$('#menu-list').toggle();
	});
	
	$('.dropdown-toggle').dropdown()
	
	$('.price').hide();
	
	$('.thumbnail').hover(function() {
		$('.price').toggle(1000);
		});
	
	$('#slick-hide-raw').click(function() {
		$('.veg').hide('slow');
		$('.spicy').hide('slow');
		$('.reg').hide('slow');
		$('.raw').fadeIn(500);
		return false;
	});
	
	$('#slick-hide-veg').click(function() {
		$('.spicy').hide('slow');
		$('.reg').hide('slow');
		$('.raw').hide('slow');
		$('.veg').fadeIn(500);

		return false;
	});
	
	$('#slick-hide-spicy').click(function() {
		$('.veg').hide('slow');
		$('.reg').hide('slow');
		$('.raw').hide('slow');
		$('.spicy').fadeIn(500);		
		return false;
	});
	
	
	
});