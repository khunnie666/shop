
define(['jquery'],function($){
    $('.z_product li .z_move').hover(
        function(){
            $(this).stop().animate({
                'margin-left':'-260px'
            },300)
        },
        function(){
            $(this).stop().animate({
                'margin-left':'0px'
            },300)
        })  
});