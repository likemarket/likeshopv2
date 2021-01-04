<?php
// +----------------------------------------------------------------------
// | LikeShop有特色的全开源社交分销电商系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 商业用途务必购买系统授权，以免引起不必要的法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 微信公众号：好象科技
// | 访问官网：http://www.likemarket.net
// | 访问社区：http://bbs.likemarket.net
// | 访问手册：http://doc.likemarket.net
// | 好象科技开发团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | Author: LikeShopTeam
// +----------------------------------------------------------------------
namespace app\api\controller;

use app\api\logic\UserLogic;

class User extends ApiBase{
    
    /**
     * note 个人中心
     * create_time 2020/10/23 14:29
     */
    public function center(){
        $info = UserLogic::center($this->user_id);
        $this->success('获取成功',$info);
    }
    /**
     * note 获取用户的基本资料
     * create_time 2020/11/17 15:22
     */
    public function info()
    {
        $this->success('获取成功', UserLogic::getUserInfo($this->user_id));
    }

    /**
     * note 设置用户的基本资料
     * create_time 2020/11/17 15:22
     */
    public function setInfo()
    {
        $data = $this->request->post();
        $check = $this->validate($data, 'app\api\validate\UpdateUser.set');
        if (true !== $check) {
            $this->error($check);
        }
        $res = UserLogic::setUserInfo($this->user_id, $data);
        if ($res){
            $this->success('操作成功');
        }
        $this->error('操作失败');
    }

    public function accountLog(){
        $source = $this->request->get('source');
        $type = $this->request->get('type',0);
        $list = [];
        if($source){
            $list = UserLogic::accountLog($this->user_id, $source,$type, $this->page_no, $this->page_size);
        }
        $this->success('获取成功',$list);
    }


    //更换手机号
    public function changeMobile()
    {
        $data = $this->request->post();
        $data['message_key'] = 'BGSJHM';
        $data['user_id'] = $this->user_id;
        $check = $this->validate($data, 'app\api\validate\ChangeMobile.change');
        if (true !== $check) {
            $this->error($check);
        }
        $res = UserLogic::changeMobile($this->user_id, $data);
        if($res){
            $this->success('操作成功');
        }
        $this->error('操作失败');
    }


    //获取微信手机号
    public function getMobile()
    {
        $post = $this->request->post();
        $check = $this->validate($post, 'app\api\validate\WechatMobile');
        if (true !== $check) {
            $this->error($check);
        }
        return UserLogic::getMobileByMnp($post);
    }


    //我的粉丝
    public function fans()
    {
        $get = $this->request->get();
        $page = $this->request->get('page_no', $this->page_no);
        $size = $this->request->get('page_size', $this->page_size);
        $this->success('', UserLogic::fans($this->user_id, $get, $page, $size));
    }

    /**
     * note 我的钱包
     * create_time 2020/11/27 16:58
     */
    public function myWallet(){
        $info = UserLogic::myWallet($this->user_id);
        $this->success('获取成功',$info);
    }
}