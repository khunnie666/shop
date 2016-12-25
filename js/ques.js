
define(['jquery'],function($){
	
	function ques(){
		$.ajax({
		 type: "get",
		 url: 'http://boss.shopcmd.com/boss/website/getFaqInfoList.do',
		 dataType: "jsonp",
		 jsonp: "callback",
		 success: function(json){
			var html0='<li><a href="#"><p class="t_icon_1"><span></span></p><div class="t_content"><h3>开始使用</h3>',
				html1='<li><a href="#"><p class="t_icon_1"><span></span></p><div class="t_content"><h3>营销开放平台</h3>',
				html2='<li><a href="#"><p class="t_icon_1"><span></span></p><div class="t_content"><h3>媒体合作</h3>',
				html3='<li><a href="#"><p class="t_icon_1"><span></span></p><div class="t_content"><h3>品牌综合商城</h3>',
				html4='<li><a href="#"><p class="t_icon_1"><span></span></p><div class="t_content"><h3>官网商城</h3>',
				html5='<li><a href="#"><p class="t_icon_1"><span></span></p><div class="t_content"><h3>多用户商城</h3>',
				html6='</div></a></li>';
			for(var i=0;i<json.data.length;i++){

				if(json.data[i].category==0){
					html0+='<span>'+json.data[i].title+'</span>';
				}else if(json.data[i].category==2){
					html1+='<span>'+json.data[i].title+'</span>';
				}else if(json.data[i].category==3){
					html2+='<span>'+json.data[i].title+'</span>';
				}else if(json.data[i].category==4){
					html3+='<span>'+json.data[i].title+'</span>';
				}else if(json.data[i].category==5){
					html4+='<span>'+json.data[i].title+'</span>';
				}else if(json.data[i].category==6){
					html5+='<span>'+json.data[i].title+'</span>';
				}
			}
			$(".t_icon").append(html0+html6);
			$(".t_icon").append(html1+html6);
			$(".t_icon").append(html2+html6);
			$(".t_icon").append(html3+html6);
			$(".t_icon").append(html4+html6);
			$(".t_icon").append(html5+html6); 
			 
		 },
		 error: function(){
			 alert('fail2');
		 }
	 });
	}
	ques();
})