
define(['jquery'],function($){
    $('#log').click(function(){
		$.ajax({
			 url: 'http://passport.shopcmd.com/passport/login',
			 data: "username="+$('#user').val()+"&password="+$('#pass').val()+"&code=yg68&_=1482478177825",
			 dataType: "jsonp",
			 jsonp: "callback",

			 jsonpCallback:"flightHandler",
			 success: function(json){
				$('.t_msg').css('display','block').html(json.detail)
			 },
			 error: function(json){
				alert('登录失败')
			 }
		 });
	})
});