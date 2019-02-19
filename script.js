$(function(){
	// Move Arrows on Hover
	$('.button5').on('mouseover',function(){
		$(this).find('i').css('transform','translateX(10px)')
	});
	$('.button5').on('mouseout',function(){
		$(this).find('i').css('transform','translateX(0px)')
	});

	// Change Text Control
	var buttonText = $('#buttonText').val();
	$('#buttonText').on('input',function(){
		var buttonText = $('#buttonText').val();
		$('.btn').find('a').html(buttonText);

		// Replace arrows on 5th button.
		$('.btn:nth-of-type(5)').find('a').append(' <i class="fa fa-angle-double-right"></i>')

	});
	
	// Font Weight Control
	$('#font-weight').on('change',function(){
		var fontWeight = $('#font-weight').val();
		$('.btn').find('a').css('font-weight',fontWeight);
	});

	// Border Radius Control
	$('#border-radius').on('input',function(){
		var borderRadius = $('#border-radius').val();
		$('.btn').find('a').css('border-radius',borderRadius+'px');

		$('.slider-value').html(borderRadius + 'px');
	});
	

});