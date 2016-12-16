
	$(document).ready(function(){
		/*var current = 1;
		
		widget      = $(".step");
		btnnext     = $(".nxtBtn");
		btnback     = $(".back"); 
		btnsubmit   = $(".btnsubmit");

		// Init buttons and UI
		widget.not(':eq(0)').hide();
		hideButtons(current);
		setProgress(current);

		// Next button click action
		btnnext.click(function(){
			if(current < widget.length){
				widget.show();
				widget.not(':eq('+(current++)+')').hide();
				setProgress(current);
			}
			hideButtons(current);
		})

		// Back button click action
		btnback.click(function(){
			if(current > 1){
				current = current - 2;
				btnnext.trigger('click');
			}
			hideButtons(current);
		})*/

		$(".nextBtn").click(function(){
	//if(animating) return false;
	//animating = true;
	
	current_fs = $(this).parent().parent().parent().parent();
	next_fs = $(this).parent().parent().parent().parent().next();	

	//show the next fieldset
	next_fs.show();

	next_fs.show(); 
	current_fs.hide();
	//hide the current fieldset with style
	/*current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});*/
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})
	

	});

	// Change progress bar action
	setProgress = function(currstep){
		var percent = parseFloat(100 / widget.length) * currstep;
		percent = percent.toFixed();
		$(".progress-bar").css("width",percent+"%").html(percent+"%");		
	}

	// Hide buttons according to the current step
	hideButtons = function(current){
		var limit = parseInt(widget.length); 

		$(".action").hide();

		if(current < limit) btnnext.show();
		if(current > 1) btnback.show();
		if (current == limit) { btnnext.hide(); btnsubmit.show(); }
	}