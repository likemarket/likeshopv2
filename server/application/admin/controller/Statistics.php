<?php

namespace app\admin\controller;

use app\admin\logic\StatisticsLogic;

class Statistics extends AdminBase
{
    /**
     * 会员统计
     */
    public function member()
    {
        if ($this->request->isAjax()) {
            $post = $this->request->post();
            $this->success('', StatisticsLogic::member($post));
        }
        $this->assign('res', StatisticsLogic::default());
        return $this->fetch();
    }

    /**
     * 商品统计
     */
    public function goods()
    {
        if ($this->request->isAjax()) {
            $post = $this->request->post();
            $this->success('', StatisticsLogic::goods($post));
        }
        $this->assign('res', StatisticsLogic::default());
        return $this->fetch();
    }

    /**
     * 访问
     */
    public function visit()
    {
        if ($this->request->isAjax()) {
            $post = $this->request->post();
            $this->success('', StatisticsLogic::visit($post));
        }
        $this->assign('res', StatisticsLogic::default());
        return $this->fetch();
    }

    /**
     * 交易
     */
    public function deal()
    {
        if ($this->request->isAjax()) {
            $post = $this->request->post();
            $this->success('', StatisticsLogic::deal($post));
        }
        $this->assign('res', StatisticsLogic::default());
        return $this->fetch();
    }


    /**
     * 起始默认值
     */
    public function default()
    {
        $this->success('', StatisticsLogic::default());
        return $this->fetch();
    }
}