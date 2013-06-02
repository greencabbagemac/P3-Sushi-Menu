$(document).ready(function() {
	
	$('#menu-list').hide();
	
	$('#menu').click(function(){
		$('#menu-list').toggle();
	});
	
	$('.dropdown-toggle').dropdown()
	
	$('.price').hide();
	
	//$('.thumbnail > p').hover(function(){
		//$('.price').fadeToggle();
		//});
	$('#slick-hide-raw').click(function() {
		$('.veg').hide('slow');
		$('.spicy').hide('slow');
		$('.reg').hide('slow');
		$('.raw').show('fast');
		return false;
	});
	
	$('#slick-hide-veg').click(function() {
		$('.spicy').hide('slow');
		$('.reg').hide('slow');
		$('.raw').hide('slow');
		$('.veg').show('fast');

		return false;
	});
	
	$('#slick-hide-spicy').click(function() {
		$('.veg').hide('slow');
		$('.reg').hide('slow');
		$('.raw').hide('slow');
		$('.spicy').show('fast');		
		return false;
	});
	
});