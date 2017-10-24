layui.config({
	base : "js/"
}).use(['form','layer','element'],function(){

	var form = layui.form(),
		element=layui.element(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		$ = layui.jquery;
	$('#verify')[0].src='/jxtAdmin/Api/public/index.php/index/index/verify?rand='+Math.random();
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
		proxy();
		//window.location.href = "../../index.html";
		return false;
	});

	$('#verify').click(function(){
		console.log($(this));
		console.log(GOLBEL_CONFIG.API_URL);
		$(this)[0].src=GOLBEL_CONFIG.VERIFY_CODE+'?rand='+Math.random();
	});
})
