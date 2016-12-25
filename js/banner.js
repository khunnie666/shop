
define(['jquery'],function($){
    $('.t_tab ul li').css({width:$(window).width()});
		//ul*2
		var ulInner = $('.t_tab ul').html();
		$('.t_tab ul').html(ulInner+ulInner) ;
		//ul加宽
		var ulW = $('.t_tab ul li').length*$('.t_tab ul li').outerWidth();
		$('.t_tab ul').css('width',ulW);
		var iNow=0;
		var l=$('.t_tab ul li').length;
		$('.t_tab ol li').each(function(index,ele){
			$(ele).click(function(){
				if(iNow>=0&&iNow<l/2){
					iNow=index;
				}else{
					iNow=index+l/2;
				}
				tab();
			})
		});
		$('.t_tab ol li').eq(0).addClass('active')
		function tab(){
			$('.t_tab ol li').eq(iNow%(l/2)).addClass('active').siblings().removeClass('active');
			$('.t_tab ul').stop().animate({left:-iNow*$('.t_tab ul li').outerWidth()})
		}
		setInterval(function(){
			iNow++;
			if(iNow==l){
				iNow=l/2
			}
			$('.t_tab ul').css({left:-(iNow-1)*$('.t_tab ul li').outerWidth()});
			tab();
		},3000) 
});