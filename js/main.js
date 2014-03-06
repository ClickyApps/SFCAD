$(function(){

	/* Explore: Wheel */
	
	
	// Clicking On Triangles
	$('.explore .wheel .triangles a').click(function(e){
		e.preventDefault();
		// Deal with wheel
		$('.explore .wheel div').removeClass('selected');
		$(this).parent().addClass('selected');
		// Deal with content
		var colorSelected = $(this).parent().attr('id');
		var contentID = '#content-' + colorSelected;
		$('.explore .contentArea > div').removeClass('show');
		$(contentID).addClass('show');
	});
	
	
	// Next Button
	$('.explore .wheel .controls #next').click(function(e){
		e.preventDefault();
		// Deal with wheel
		if ( $('.explore .wheel .triangles .selected').hasClass('grey') )
		{
			var nextTriangle = $('.explore .wheel .triangles .red');
		} else {
			var nextTriangle = $('.explore .wheel .triangles .selected').next();
		}
		$('.explore .wheel .triangles .selected').removeClass('selected');
		$(nextTriangle).addClass('selected');
		// Deal with content
		if ( $('.explore .contentArea #content-grey').hasClass('show') )
		{
			var nextContent = $('.explore .contentArea #content-red');
		} else {
			var nextContent = $('.explore .contentArea > div.show').next();
		}
		$('.explore .contentArea > div').removeClass('show');
		$(nextContent).addClass('show');
	});
	
	// Previous Button
	$('.explore .wheel .controls #prev').click(function(e){
		e.preventDefault();
		// Deal with wheel
		if ( $('.explore .wheel .triangles .selected').hasClass('red') )
		{
			var prevTriangle = $('.explore .wheel .triangles .grey');
		} else {
			var prevTriangle = $('.explore .wheel .triangles .selected').prev();
		}
		$('.explore .wheel .triangles .selected').removeClass('selected');
		$(prevTriangle).addClass('selected');
		// Deal with content
		if ( $('.explore .contentArea #content-red').hasClass('show') )
		{
			var nextContent = $('.explore .contentArea #content-grey');
		} else {
			var nextContent = $('.explore .contentArea > div.show').prev();
		}
		$('.explore .contentArea > div').removeClass('show');
		$(nextContent).addClass('show');
	});
	
	// Email Functionality
	
        // Show Email
		$('#showEmail').click(function(e){
			e.preventDefault();
			$('#emailOverlay').fadeIn('fast');
		});
		// Save Notes
		$('#cancel').click(function(e){
			e.preventDefault();
			$('#emailOverlay').fadeOut('fast');
		});
		// AJAX Processing
		$('#emailPDF').submit(function(e){
			e.preventDefault();
			var email = $('#emailAddress').val();
			$.ajax({
			  type: "POST",
			  url: 'http://dev.clickymedia.co.uk/sfcad/process-pdf.php',
			  data: { email : email },
			  success: function(returnData){
			  	if ( returnData == 'Error' ) {
				  	$('#emailOverlay').removeClass('callback-success');
				  	$('#emailOverlay').addClass('callback-error');
			  	} else {
				  	$('#emailOverlay').removeClass('callback-error');
				  	$('#emailOverlay').addClass('callback-success');
			  	}
		      },
		      error:function(returnData){
			  	$('#emailOverlay').removeClass('callback-success');
			  	$('#emailOverlay').addClass('callback-error');
		      }
			});
		});
			
});