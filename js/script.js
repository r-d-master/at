
	$(document).ready(function(){

		$(".owl-carousel").owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    responsive:{
		        0:{
		            items:1,
		            /*nav:true*/
		        },
		        600:{
		            items:1,
		            nav:false
		        },
		        1000:{
		            items:1,
		            nav:false,
		            /*loop:false*/
		        }
		    }
		});

		function toggleChevron(e) {
		  $(e.target)
		    .prev('.panel-heading')
		    .find("i")
		    .toggleClass('fa fa-minus fa fa-plus');
		}
		$('#accordion').on('hidden.bs.collapse', toggleChevron);
		$('#accordion').on('shown.bs.collapse', toggleChevron);

		$('.click-fr').click(function(){
			$('.fr').show();
			$('.en').hide();
		});
		$('.click-en').click(function(){
			$('.en').show();
			$('.fr').hide();
		});

		$(".nextBtn").click(function(){
	
	
	current_fs = $(this).parent().parent().parent().parent();
	next_fs = $(this).parent().parent().parent().parent().next();	

	//show the next fieldset
	next_fs.show();

	next_fs.show(); 
	current_fs.hide();
	
});

$(".previous").click(function(){
	
	current_fs = $(this).parent().parent().parent().parent();
	previous_fs = $(this).parent().parent().parent().parent().prev();
	
	//de-activate current step on progressbar
	//$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	current_fs.hide();
	//hide the current fieldset with style
	
});
$(".previouss").click(function(){
	
	current_fs = $(this).parent().parent().parent().parent().parent();
	previous_fs = $(this).parent().parent().parent().parent().parent().prev();
	
	//de-activate current step on progressbar
	//$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	current_fs.hide();
	//hide the current fieldset with style
	
});

$(".nextBtnp").click(function(){
	
	
	current_fs = $(this).parent().parent().parent();
	next_fs = $(this).parent().parent().parent().next();	

	//show the next fieldset
	next_fs.show();

	next_fs.show(); 
	current_fs.hide();
	
});

$(".previousp").click(function(){
	
	current_fs = $(this).parent().parent().parent();
	previous_fs = $(this).parent().parent().parent().prev();
	
	//de-activate current step on progressbar
	//$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	current_fs.hide();
	//hide the current fieldset with style
	
});
$(".previoussp").click(function(){
	
	current_fs = $(this).parent().parent().parent().parent().parent();
	previous_fs = $(this).parent().parent().parent().parent().parent().prev();
	
	//de-activate current step on progressbar
	//$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	current_fs.hide();
	//hide the current fieldset with style
	
});
$('input:radio[name="property-in-mind"]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == 'Yes') {
            $('.p-in-mind-yes').show();
            $('.p-in-mind-no').hide();
        }
        else {
        	$('.p-in-mind-no').show();
            $('.p-in-mind-yes').hide();
        }
    });

$(".submit").click(function(){
	return false;
})
	

	});
