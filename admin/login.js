
var verifyObj=$('#verify');
loadVerfiyCode(verifyObj[0]);		//初始化验证码
//video背景
$(window).resize(function(){
	if($(".video-player").width() > $(window).width()){
		$(".video-player").css({"height":$(window).height(),"width":"auto","left":-($(".video-player").width()-$(window).width())/2});
	}else{
		$(".video-player").css({"width":$(window).width(),"height":"auto","left":-($(".video-player").width()-$(window).width())/2});
	}
}).resize();

//登录按钮事件
form.on("submit(login)",function(data){
	proxy('doLogin',data.field);
	//window.location.href = "./index.html";
	return false;
});

verifyObj.click(function(){
	loadVerfiyCode($(this)[0]);
});


//加载验证码图片
function loadVerfiyCode(obj){
	obj.src=GOLBEL_CONFIG.VERIFY_CODE+'?rand='+Math.random();
}

