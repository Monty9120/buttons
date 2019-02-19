$(function(){
	

	$('.dropdown').hide();
	$('.row').on('click',function(){
		var sState = $(this).data('state');
		if (sState == 'close'){
			//open
			$(this).next().slideDown(function(){
				$(this).prev()
				.find('i')
				.removeClass('fa fa-check')
				.addClass('fa fa-minus')


			});
		//update
		$(this).data('state','open')
		}else{
			//close
			$(this).next().slideUp(function(){
				$(this).prev()
				.find('i')
				.removeClass('fa fa-minus')
				.addClass('fa fa-check')
			});

			$(this).data('state','close');

		}
	});

	$('.dropdown [type=checkbox]').on('change',function(){

		var unchecked = $(this).parent().parent().find('input:not(:checked)');

		if(unchecked.length == 0){
			console.log('all checked');
			$(this).parent().parent().slideUp(function(){
				$(this)
				.find('i')
				.removeClass('fa fa-minus')
				.addClass('fa fa-check')

				$(this).prev().addClass('step-complete');
				$(this).prev()
				.find('.step')


			});





		}else{
			console.log('not ready');
		}
	});


	$('.button5').on('mouseover',function(){
		$(this).find('i').css('transform','translateX(10px)')
	});
	$('.button5').on('mouseout',function(){
		$(this).find('i').css('transform','translateX(0px)')
	});

	


	
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