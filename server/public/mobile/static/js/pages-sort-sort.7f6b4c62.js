(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sort-sort"],{"09bd":function(t,e,i){"use strict";var n=i("6d06"),a=i.n(n);a.a},"183b":function(t,e,i){"use strict";i.r(e);var n=i("640e"),a=i("7381");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("4864");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"97fb8282",null,!1,n["a"],o);e["default"]=c.exports},4538:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{src:{type:String},round:Boolean,width:{type:null},height:{type:null},radius:null,lazyLoad:Boolean,useErrorSlot:Boolean,useLoadingSlot:Boolean,showMenuByLongpress:Boolean,mode:{type:String,default:"fill"},showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0}},data:function(){return{error:!1,loading:!0,viewStyle:{}}},created:function(){this.setStyle()},methods:{setStyle:function(){var t=this.width,e=this.height,i=this.radius,n={};t&&(n.width=t),e&&(n.height=e),i&&(n["overflow"]="hidden",n["border-radius"]=i),this.viewStyle=n},onLoaded:function(t){this.loading=!1,this.$emit("load",t.detail)},onError:function(t){this.error=!1,this.loading=!0,this.$emit("error",t.detail)},onClick:function(t){this.$emit("click",t.detail)}},watch:{src:function(){this.error=!1,this.loading=!0},width:function(){this.setStyle()},height:function(){this.setStyle()}}};e.default=n},4864:function(t,e,i){"use strict";var n=i("c6fd"),a=i.n(n);a.a},5357:function(t,e,i){"use strict";i.r(e);var n=i("a4db"),a=i("f56f");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("5960");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"6b2a5c07",null,!1,n["a"],o);e["default"]=c.exports},"54c4":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */uni-page-body[data-v-97fb8282]{background-color:#fff}uni-page-body .sort .header[data-v-97fb8282]{box-sizing:border-box;height:%?94?%;border-bottom:1px solid #e5e5e5}uni-page-body .sort .content[data-v-97fb8282]{height:calc(100vh - %?94?% - var(--window-top) - var(--window-bottom))}uni-page-body .sort .content .aside[data-v-97fb8282]{width:%?200?%;-webkit-box-flex:0;-webkit-flex:none;flex:none;height:100%}uni-page-body .sort .content .aside .one-item[data-v-97fb8282]{position:relative;text-align:center;padding:%?26?% %?10?%}uni-page-body .sort .content .aside .one-item.active[data-v-97fb8282]{color:#ff2c3c;font-size:%?26?%;font-weight:700}uni-page-body .sort .content .aside .one-item .active-line[data-v-97fb8282]{position:absolute;width:%?6?%;height:%?30?%;left:%?4?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}uni-page-body .sort .content .main[data-v-97fb8282]{height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1}uni-page-body .sort .content .main .main-wrap[data-v-97fb8282]{padding:0 %?24?%}uni-page-body .sort .content .main .main-wrap .two-item[data-v-97fb8282]{border-radius:%?10?%}uni-page-body .sort .content .main .main-wrap .two-item .title[data-v-97fb8282]{height:%?90?%}uni-page-body .sort .content .main .main-wrap .two-item .title .line[data-v-97fb8282]{width:%?40?%;height:1px;background-color:#bbb}uni-page-body .sort .content .main .main-wrap .two-item .three-list[data-v-97fb8282]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}uni-page-body .sort .content .main .main-wrap .two-item .three-list .three-item[data-v-97fb8282]{width:33%}uni-page-body .sort .content .main .main-wrap .two-item .three-list .three-item .text[data-v-97fb8282]{text-align:center}.sort .header .search[data-v-97fb8282]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?60?%}.sort .header .search uni-input[data-v-97fb8282]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%}body.?%PAGE?%[data-v-97fb8282]{background-color:#fff}',""]),t.exports=e},5960:function(t,e,i){"use strict";var n=i("baaa"),a=i.n(n);a.a},"640e":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniSearchBar:i("5866").default,swipers:i("a400").default,customImage:i("5357").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"sort"},[i("v-uni-navigator",{staticClass:"header",attrs:{"hover-class":"none",url:"/pages/goods_search/goods_search"}},[i("uni-search-bar",{attrs:{disabled:!0,radius:60,"bg-color":"#F4F4F4","cancel-button":"none"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.input.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"content row"},[i("v-uni-view",{staticClass:"aside"},[i("v-uni-scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":"true","scroll-top":t.leftScrollTop,"scroll-with-animation":"true"}},[t._l(t.sortList,(function(e,n){return[i("v-uni-view",{key:n+"_0",class:"one-item sm "+(n==t.leftIndex?"active":""),on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeActive(n)}}},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(e.name))]),n==t.leftIndex?i("v-uni-view",{staticClass:"active-line bg-primary"}):t._e()],1)]}))],2)],1),i("v-uni-view",{staticClass:"main bg-body"},[i("v-uni-scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":"true","scroll-into-view":"scroll-item-"+t.rightIndex,"scroll-with-animation":"true"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.onScroll.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchStart.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"main-wrap"},[i("v-uni-view",{staticClass:"mb20",staticStyle:{"border-radius":"10rpx"}},[i("swipers",{attrs:{pid:5,height:"160rpx",padding:"20rpx 0 0",radius:"5rpx"}})],1),t._l(t.sortList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"one-item-wrap",attrs:{id:"scroll-item-"+n}},t._l(e.sons,(function(e,n){return i("v-uni-view",{key:n,staticClass:"two-item bg-white mb20"},[i("v-uni-view",{staticClass:"title row-center"},[i("v-uni-text",{staticClass:"line mr20"}),i("v-uni-text",{staticClass:"name bold sm"},[t._v(t._s(e.name))]),i("v-uni-text",{staticClass:"line ml20"})],1),i("v-uni-view",{staticClass:"three-list row wrap"},t._l(e.sons,(function(e,n){return i("v-uni-navigator",{key:n,staticClass:"three-item column-center mb20",attrs:{"hover-class":"none",url:"/pages/goods_search/goods_search?id="+e.id+"&name="+e.name+"&type="+e.type}},[i("custom-image",{attrs:{mode:"aspectFit",width:"140rpx",height:"140rpx","lazy-load":!0,src:e.image}}),i("v-uni-view",{staticClass:"text mt20 xs"},[t._v(t._s(e.name))])],1)})),1)],1)})),1)}))],2),i("v-uni-view",{staticStyle:{height:"50rpx"}})],1)],1)],1)],1)},r=[]},"6d06":function(t,e,i){var n=i("ae20");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7fb1dbda",n,!0,{sourceMap:!1,shadowMode:!1})},7381:function(t,e,i){"use strict";i.r(e);var n=i("fc65"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},a400:function(t,e,i){"use strict";i.r(e);var n=i("f156"),a=i("e880");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("09bd");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5a16d5ab",null,!1,n["a"],o);e["default"]=c.exports},a4db:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("f4f1").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:{"custom-image":!0,"image-round":t.round},style:[t.viewStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.error?t._e():i("v-uni-image",{staticClass:"image",attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoaded.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.onError.apply(void 0,arguments)}}}),t.loading&&t.showLoading?i("v-uni-view",{staticClass:"loading-wrap image"},[t.useLoadingSlot?t._t("loading"):i("uni-icons",{attrs:{color:"#999",type:"image",size:"22"}})],2):t._e(),t.error&&t.showError?i("v-uni-view",{staticClass:"error-wrap image"},[t.useErrorSlot?t._t("error"):i("uni-icons",{attrs:{color:"#999",type:"image",size:"22"}}),i("v-uni-text",{staticClass:"sm"},[t._v("加载失败")])],2):t._e()],1)},r=[]},a744:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */.custom-image[data-v-6b2a5c07]{position:relative;display:block;width:100%;height:100%}.custom-image.image-round[data-v-6b2a5c07]{overflow:hidden;border-radius:50%}.custom-image .image[data-v-6b2a5c07]{display:block;width:100%;height:100%}.custom-image .loading-wrap[data-v-6b2a5c07],\r\n.custom-image .error-wrap[data-v-6b2a5c07]{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:%?28?%;background-color:#f7f8fa}',""]),t.exports=e},ae20:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */.swiper[data-v-5a16d5ab]{position:relative;overflow:hidden}.swiper uni-swiper[data-v-5a16d5ab]{width:100%;height:100%;position:relative}.swiper uni-swiper .slide-image[data-v-5a16d5ab]{width:100%;height:100%}.swiper .dots[data-v-5a16d5ab]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex}.swiper .dots .dot[data-v-5a16d5ab]{width:%?8?%;height:%?8?%;border-radius:50%;margin-right:%?10?%;background-color:#fff}.swiper .dots .dot.active[data-v-5a16d5ab]{width:%?16?%;border-radius:%?8?%;background-color:#ff2c3c}',""]),t.exports=e},b8e9:function(t,e,i){"use strict";var n=i("4ea4");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r=i("1cf2"),o=i("d0b4"),s={data:function(){return{lists:[],currentSwiper:0}},components:{},props:{pid:{type:Number},circular:{type:Boolean,default:!0},autoplay:{type:Boolean,default:!0},height:{type:String},radius:{type:String,default:"10rpx"},padding:{type:String,default:"0rpx"}},created:function(){this.getAdListFun()},watch:{pid:function(t){this.getAdListFun()}},methods:{getAdListFun:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getAdList)({client:2,pid:t.pid});case 2:i=e.sent,n=i.code,a=i.data,1==n&&(t.lists=a);case 6:case"end":return e.stop()}}),e)})))()},swiperChange:function(t){this.currentSwiper=t.detail.current},goPage:function(t){var e=t.link,i=t.link_type,n=(t.params,t.is_tab);switch(i){case 1:case 2:n?uni.switchTab({url:e}):uni.navigateTo({url:e+(0,o.paramsToStr)(args)});break;case 3:uni.navigateTo({url:"/pages/webview/webview?url="+e});break}}}};e.default=s},baaa:function(t,e,i){var n=i("a744");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("de930ed0",n,!0,{sourceMap:!1,shadowMode:!1})},c6fd:function(t,e,i){var n=i("54c4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1f949553",n,!0,{sourceMap:!1,shadowMode:!1})},e880:function(t,e,i){"use strict";i.r(e);var n=i("b8e9"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},f156:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.lists.length?i("v-uni-view",{staticClass:"swiper",style:{height:t.height,padding:t.padding,"border-radius":t.radius}},[i("v-uni-swiper",{attrs:{autoplay:t.autoplay,circular:t.circular},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.lists,(function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-view",{staticStyle:{width:"100%",height:"100%"},attrs:{"data-item":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(e)}}},[i("v-uni-image",{staticClass:"slide-image",style:{"border-radius":t.radius},attrs:{fit:"cover",src:e.image}})],1)],1)})),1),t.lists.length>1?i("v-uni-view",{staticClass:"dots"},t._l(t.lists,(function(e,n){return i("v-uni-view",{key:n,class:"dot "+(n==t.currentSwiper?"active":"")})})),1):t._e()],1):t._e()},r=[]},f56f:function(t,e,i){"use strict";i.r(e);var n=i("4538"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},fc65:function(t,e,i){"use strict";var n=i("4ea4");i("4de4"),i("d81d"),i("4e82"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),r=i("1cf2"),o=i("d0b4"),s={data:function(){return{leftScrollTop:0,sortList:[],isTouchScrollView:!1,rightIndex:0,leftIndex:0,nodeRightList:[],nodeLeftList:[],asideH:0,headerH:0}},components:{},onLoad:function(t){this.getCatrgoryFun()},onShow:function(){},methods:{onTouchStart:function(){this.isTouchScrollView=!0},init:function(){var t=this;(0,o.getRect)(".one-item-wrap",!0).then((function(e){t.nodeRightList=e})),(0,o.getRect)(".one-item",!0).then((function(e){t.nodeLeftList=e})),(0,o.getRect)(".aside").then((function(e){t.asideH=e.height})),(0,o.getRect)(".header").then((function(e){t.headerH=e.height}))},changeActive:function(t){(this.isTouchScrollView||this.rightIndex!=t)&&(this.isTouchScrollView=!1,this.rightIndex==t&&(this.rightIndex=-1),this.$nextTick((function(){this.rightIndex=t,this.leftIndex=t})))},onScroll:function(t){var e=this;if(this.isTouchScrollView){var i=this.scrollTop=t.detail.scrollTop,n=this.nodeRightList.map((function(t,e){return(0,a.default)({index:e},t)})).filter((function(t){return t.top<=i+e.headerH}));if(n.length){var r=n.sort((function(t,e){return e.top-t.top}))[0].index;if(this.leftIndex==r)return;this.leftScrollTop=parseInt(this.nodeLeftList[r].top/this.asideH)*this.asideH,this.leftIndex=r}}},getCatrgoryFun:function(){var t=this;(0,r.getCatrgory)().then((function(e){1==e.code&&(t.sortList=e.data,t.$nextTick((function(){t.init()})))}))}}};e.default=s}}]);