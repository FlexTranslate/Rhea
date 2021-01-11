"use strict";
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop() > $(".description button").offset().top) {
			$(".button_up").css('display', 'block');
		}
		if ($(window).scrollTop() < $(".description button").offset().top) {
			$(".button_up").css('display', 'none');
		}		
	});

	$(".button_up").click(function(){
		$("body, html").animate({scrollTop: 0}, 1000)
		return false;
	});
	
	$("body").mousemove(function(e){
		let value_sideways = e.pageX / 50;
		let value_top = e.pageY / 50;		
		$("#image_women-car").css('right', `${value_sideways-45}px`);
		$("#image_women-car").css('top', `${value_top+100}px`);	
		$("#image_bush").css('left', `${value_sideways-60}px`);
		$("#image_bush").css('top', `${value_top+90}px`);		
	});

	$("#button_buy_ticket").click(function(e){
		$("body").css('overflow-y', 'hidden');
		$(".form").css('display', 'flex');
		e.stopPropagation();
	});

	$(".button_close").click(function(e){
		$('.form').css('display', 'none');
		$("body").css('overflow-y', 'scroll');
		e.stopPropagation();
	});

	let trigger = 0;
	$(".mobile_menu").slideUp();
	$(".button_menu").click(function(){
		$(".mobile_menu").slideToggle();
		if (trigger === 0) {
			$(".button_menu_line1, .button_menu_line2, .button_menu_line3").css('background-color', 'white');
			trigger = 1;
		}
		else {
			$(".button_menu_line1, .button_menu_line2, .button_menu_line3").css('background-color', '#3984F3');
			trigger = 0;
		}
		
	});

});





