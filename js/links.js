
define(['jquery'],function($){
	
	function links(){
		$.ajax({
			type: "get",
			url: 'http://boss.shopcmd.com/boss/website/websiteCase.do?site=3',
			//data:"site=3",
			dataType: "jsonp",
			jsonp: "callback",
			success: function(json){
				$.each( json.data.content, function(i, n){
					var aLi2 = '<li><a href="'+json.data.content[i].webAddress+'"><img _src="http://hycloudshop.img-cn-hangzhou.aliyuncs.com/'+json.data.content[i].logo+'" alt="'+json.data.content[i].webName+'"></a></li>';
					$(aLi2).appendTo('.t_hz ol');
				});
			},
			error: function(){
				alert('fail3');
			}
		});
	}
	links();
})