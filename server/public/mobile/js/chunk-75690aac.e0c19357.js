(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75690aac"],{"0a2a":function(t,e,i){},"5f66":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pay-result"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"commit-order-box bg-white"},[t._m(0),i("div",{staticStyle:{height:"80px"}}),i("div",{staticClass:"info mt10"},[i("div",{staticClass:"row-between info-item"},[i("div",[t._v("订单编号")]),i("div",t._l(t.payInfo.order_sn,(function(e,a){return i("div",{key:a,staticClass:"mb5"},[t._v(t._s(e))])})),0)]),i("div",{staticClass:"row-between info-item"},[i("div",[t._v("付款时间")]),i("div",[t._v(t._s(t.payInfo.pay_time))])]),i("div",{staticClass:"row-between info-item"},[i("div",[t._v("支付方式")]),i("div",[t._v(t._s(t.payInfo.pay_way))])]),i("div",{staticClass:"row-between info-item"},[i("div",[t._v("支付金额")]),i("div",[t._v("￥"),i("price-slice",{attrs:{price:t.payInfo.order_amount}})],1)])]),i("div",{staticClass:"opt-btn-contain"},[i("div",{staticClass:"bg-primary btn white row-center lg",on:{click:function(e){return t.goPage("userOrder")}}},[t._v("查看订单")]),i("div",{staticClass:"btn primary row-center lg",style:"border:1px solid"+t.primaryColor,on:{click:function(e){return t.goPage("home")}}},[t._v("返回首页")])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commit-order-header column-center"},[a("div",[a("img",{staticClass:"order-img",attrs:{src:i("e6c1")}})]),a("div",{staticClass:"xl"},[t._v("订单支付成功")])])}],n=(i("ac1f"),i("5319"),{name:"payResult",data:function(){return{payStatus:"",payInfo:{},isShow:!1}},created:function(){var t=this.$route.query,e=t.id,i=t.type;this.id=e,this.type=i},methods:{$getOrderResult:function(){var t=this;getOrderResult({id:this.id,type:this.type}).then((function(e){1==e.code&&(t.isShow=!0,t.payInfo=e.data,t.payStatus=e.data.pay_status)}))},goPage:function(t){this.$router.replace({name:t})}}}),r=n,o=(i("ea64"),i("2877")),c=Object(o["a"])(r,a,s,!1,null,"5d1895be",null);e["default"]=c.exports},e6c1:function(t,e,i){t.exports=i.p+"img/icon_paySuccess.fcff8445.png"},ea64:function(t,e,i){"use strict";var a=i("0a2a"),s=i.n(a);s.a}}]);
//# sourceMappingURL=chunk-75690aac.e0c19357.js.map