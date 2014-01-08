$(document).ready(function(){

	$(".navIcon").mouseenter(function(){

		$(this).animate({width: '80px',height: '80px',opacity: '1'},500);

	});

	$(".navIcon").mouseleave(function(){

		$(this).animate({width: '60px',height: '60px',opacity:'0.5'},500);


	});

});