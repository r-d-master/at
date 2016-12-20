
	$(document).ready(function(){

		

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
