/**
 * @author lx
 * @date 2017/10/11 15:55
 * @Description：基础配置及全局设置，需先加载layui.all.js
 **/
const GOLBEL_CONFIG={
    VERSION:'v1.0',
    API_URL:"/jxtAdmin/Api/public/index.php",   //接口入口
    VERIFY_CODE:"/jxtAdmin/Api/public/index.php/index/index/verify",   //验证码地址
    home_page:"/jxtAdmin/admin/index.html",     //项目首页
    login_page:"/jxtAdmin/admin/login.html"     //登陆页面
};

const $=layui.jquery;
const form=layui.form();

$(function(){
    //全局ajax设置
    var load;
    $(document).ajaxSend(function(){
        load=layer.load();
    });

    $(document).ajaxComplete(function(){
        layer.close(load);
    });

});