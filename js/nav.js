
define(['jquery'],function($){
    $('.z_nav > ul > li:last').hover(function(){
		$(this).find('.z_subnav').stop().animate().slideToggle();
	});  
});