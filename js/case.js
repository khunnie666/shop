
define(['jquery','casemove'],function($,casemove){
    $.ajax({
		 type: "get",
		 url: 'http://boss.shopcmd.com/boss/website/websiteCase.do',
		 data:"site=1",
		 dataType: "jsonp",
		 jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
		 //jsonpCallback:"flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
		 success: function(json){
			$.each( json.data.content, function(i, n){
			  var aLi = '<li><a href="json.data.content[i].webAddress"><img _src="http://hycloudshop.img-cn-hangzhou.aliyuncs.com/'+json.data.content[i].logo+'" alt=""><h4>'+json.data.content[i].webName+'</h4><span><i></i></span></a></li>'
				
				$(aLi).appendTo('.t_anli ol')
			});			 
		 },
		 complete :function(){
			casemove()
		} ,
		 error: function(){
			 alert('fail');
		 }
	 });
	
});