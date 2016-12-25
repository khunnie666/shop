
define(['jquery'],function($){
	//案例轮播图
	return function casemove(){   
		var left=$('.t_anli ol li').eq(0).width() + 40;
		var index=0;
		var lg=$('.t_anli ol li').length;
		if(lg<=3){
			$('.t_btn2 a:last').addClass('t_next2').removeClass('t_next')
		}
		function Next() {
			if(lg%3==1){
				index+=3;
				z_move();
				if(index==lg-1){
					$('.t_anli ol').stop().animate({
						left:-left*(index-2)
					});
					$('.t_btn2 a:last').addClass('t_next2').removeClass('t_next')
				}
				$('.t_btn2 a:first').addClass('t_prev2').removeClass('t_prev')
			}
			else if(lg%3==2){
				index+=3;
				z_move();
				if(index==lg-2){
					$('.t_anli ol').stop().animate({
						left:-left*(index-1)
					});
					$('.t_btn2 a:last').addClass('t_next2').removeClass('t_next')
				}
				$('.t_btn2 a:first').addClass('t_prev2').removeClass('t_prev')
			}
			else{
				index+=3;
				z_move();
				if(index==lg-3) {
					$('.t_btn2 a:last').addClass('t_next2').removeClass('t_next')
				}
				$('.t_btn2 a:first').addClass('t_prev2').removeClass('t_prev')
			}
		}
		function z_move(){
			$('.t_anli ol').stop().animate({
				left:-left*index
			});
		}
		function prev() {
			if(lg%3==0){
				index-=3;
				z_move();
				if(index==3) {
					$('.t_btn2 a:last').addClass('t_next').removeClass('t_next2')
				}
				if(index==0){
					$('.t_btn2 a:first').addClass('t_prev').removeClass('t_prev2')
					$('.t_btn2 a:last').addClass('t_next').removeClass('t_next2')
				}
			}
			else{
				index-=3;
				z_move();
				if(index==0){
					z_move();
					$('.t_btn2 a:first').addClass('t_prev').removeClass('t_prev2')
				}
				$('.t_btn2 a:last').addClass('t_next').removeClass('t_next2')
			}
		}
		$('.t_next').on('click',function(){
			if (index<=lg-4){
				Next();
			}
		})
		$('.t_prev').on('click',function(){
			if (index>=3){
				prev();
			}
		})
	}
});