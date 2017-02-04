$(function(){
	$('#web_loading div').animate({width:"100%"},800,
		function(){
			$('#web_loading div').fadeOut(500);
		})
})
$('.header_nav li a').click(function(e){
	// e.preventDefault();
	$(this).addClass('active');	
})