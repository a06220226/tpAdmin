/**
 * @author lx
 * @date 2017/10/11 15:55
 * @Description：
 **/

/*
 * 接口请求
 * fun 要请求的方法  param 参数
 * 返回：status 1 请求成功 -1请求失败 -100登陆失效 -404未知的方法调用
 */
function proxy(fun,param){
    var postData={
        user:{name:"test"},
        fun:fun,
        param:param
    };
    $.post(
        GOLBEL_CONFIG.API_URL,
        postData,
        function(res){
            console.log(res);
            if($res.status==-100){
                lostLoginCache();
            }
        }
    ).error(function(){
        layer.msg('数据请求失败!');
    })
}

//保存用户信息
function saveUserInfo(){
    window.sessionStorage.setItem("test",111);
}
//清除用户信息
function clearUserInfo(){

}
//用户session失效   清除本地缓存跳转登陆界面
function lostLoginCache(){
    clearUserInfo();
    layer.open({
        content:"登陆状态失效，请重新登陆！",
        yes:function(){
            window.location.href=GOLBEL_CONFIG.login_page;
        }
    })
}