
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

$(".submit").click(function(){
	return false;
})
	

	});
