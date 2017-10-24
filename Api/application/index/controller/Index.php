<?php
namespace app\index\controller;

class Index {
    public function index() {
        sleep(1);
        $data=request()->post();
        if(empty($data['user']))
        return json($data);
    }

    public function verify() {
        $config=[
            'length'=>4,
        ];
        return  captcha('',$config);
    }

    private static function throwRes($res,$status=1,$msg='请求数据成功'){
        return json([
            'status'=>$status,
            'msg'=>$msg,
            'row'=>count($res),
            'data'=>$res
        ]);
    }

    private static  function throwErrRes($res,$msg='请求数据失败'){
        return  self::throwRes($res,-1,$msg);
    }

    private static function throwSuccessRes($res,$msg='请求成功失败'){
        return  self::throwRes($res,$msg);
    }

}
