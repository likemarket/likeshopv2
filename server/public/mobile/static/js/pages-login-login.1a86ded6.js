(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"15fc":function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("d4cd")),a={name:"u-input",mixins:[o.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$u.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("u-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=a},1920:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-countdown"},[t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?n("v-uni-view",{style:{fontSize:t.fontSize+"rpx"}},[t._v(t._s(t.d))]):t._e(),t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?n("v-uni-view",{style:{fontSize:t.separatorSize+"rpx","margin-right":"6rpx"}},[t._v("天")]):t._e(),t.showHours?n("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[n("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.h))])],1):t._e(),t.showHours?n("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"时"))]):t._e(),t.showMinutes?n("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[n("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.i))])],1):t._e(),t.showMinutes?n("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"分"))]):t._e(),t.showSeconds?n("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[n("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.s))])],1):t._e(),t.showSeconds&&"zh"==t.separator?n("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v("秒")]):t._e()],1)},a=[]},"1de4":function(t,e,n){var i=n("2be9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("f08b8524",i,!0,{sourceMap:!1,shadowMode:!1})},"2be9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.u-countdown[data-v-d47f9d56]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-countdown-item[data-v-d47f9d56]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?2?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.u-countdown-time[data-v-d47f9d56]{margin:0;padding:0}.u-countdown-colon[data-v-d47f9d56]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?5?%;line-height:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?4?%}.u-countdown-scale[data-v-d47f9d56]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},5198:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */uni-page-body[data-v-47687956]{background-color:#fff;text-align:center}uni-page-body .login[data-v-47687956]{height:100vh}uni-page-body .login .mpwx-login[data-v-47687956]{height:100%}uni-page-body .login .mpwx-login .avatar[data-v-47687956]{display:inline-block;width:%?120?%;height:%?120?%;border-radius:50%;border:1px solid #eee;overflow:hidden}uni-page-body .login .mpwx-login .avatar .user-name[data-v-47687956]{margin-bottom:%?40?%;height:%?40?%}uni-page-body .login .mpwx-login .image[data-v-47687956]{width:%?50?%;height:%?50?%}uni-page-body .login .mpwx-login .btn[data-v-47687956]{background-color:#09bb07;width:%?580?%;margin:%?80?% auto 0}uni-page-body .login .h5-login[data-v-47687956]{padding-top:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;box-sizing:border-box}uni-page-body .login .h5-login .logo[data-v-47687956]{width:%?280?%;height:%?80?%;margin-bottom:%?50?%}uni-page-body .login .h5-login .input[data-v-47687956]{width:%?670?%;border-bottom:1px solid #e5e5e5;margin-top:%?30?%}uni-page-body .login .h5-login .sms-btn[data-v-47687956]{border:1px solid #ff2c3c;width:%?176?%;height:%?60?%;box-sizing:border-box}uni-page-body .login .h5-login .wx-login[data-v-47687956]{margin-top:%?60?%}uni-page-body .login .h5-login .wx-login .image[data-v-47687956]{margin-top:%?40?%;width:%?80?%;height:%?80?%}body.?%PAGE?%[data-v-47687956]{background-color:#fff}',""]),t.exports=e},5440:function(t,e,n){"use strict";var i=n("da11"),o=n.n(i);o.a},"59a6":function(t,e,n){"use strict";n.r(e);var i=n("6380"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},6380:function(t,e,n){"use strict";var i=n("4ea4");n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("5530"));n("96cf");var a=i(n("1da1")),r=n("4aee"),s=n("2f62"),l=n("408f"),u=n("8c4f"),c=i(n("2a40")),d=n("f30f"),p=n("01eb"),f=i(n("c15d")),h=n("3336"),v={ACCOUNT_LOGIN:0,SMS_CODE_LOGIN:1},g={data:function(){return{password:"",account:"",code:"",isWeixin:"",loginType:0,smsCode:"",time:59,canSendSms:!0,telephone:"",text:""}},onLoad:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isWeixin=(0,d.isWeixinClient)(),!e.isLogin){n.next=4;break}return uni.switchTab({url:"/pages/index/index"}),n.abrupt("return");case 4:if(!e.isWeixin){n.next=14;break}if(i=t.code,!i){n.next=13;break}return n.next=9,c.default.authLogin(i);case 9:o=n.sent,e.loginHandle(o),n.next=14;break;case 13:c.default.getWxUrl();case 14:console.log(d.client,"client");case 15:case"end":return n.stop()}}),n)})))()},methods:(0,o.default)((0,o.default)((0,o.default)({},(0,s.mapMutations)(["LOGIN"])),(0,s.mapActions)(["getUser"])),{},{getUserInfo:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i,o,a,s,l,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.detail.userInfo){n.next=2;break}return n.abrupt("return");case 2:return uni.showLoading({title:"登录中...",mask:!0}),i=t.detail,o=i.encryptedData,a=i.iv,n.next=6,(0,r.wxLogin)({encrypted_data:o,iv:a});case 6:s=n.sent,l=s.code,u=s.data,uni.hideLoading(),1==l?e.loginHandle(u):e.$toast({title:"登录失败，请稍后再试"});case 11:case"end":return n.stop()}}),n)})))()},countDownFinish:function(){this.canSendSms=!0},loginFun:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i,o,a,r,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.account,i=t.password,o=t.telephone,a=t.smsCode,0!=t.loginType){e.next=10;break}return e.next=4,(0,l.accountLogin)({account:n,password:i,client:d.client});case 4:r=e.sent,s=r.code,u=r.data,1==s&&t.loginHandle(u),e.next=17;break;case 10:if(o){e.next=13;break}return t.$toast({title:"请填写手机号"}),e.abrupt("return");case 13:if(a){e.next=16;break}return t.$toast({title:"请填写手机验证码"}),e.abrupt("return");case 16:(0,l.smsCodeLogin)({account:o,code:a}).then((function(e){1==e.code&&t.loginHandle(e.data)}));case 17:case"end":return e.stop()}}),e)})))()},loginHandle:function(t){this.LOGIN(t),this.getUser();var e=f.default.get("INVITE_CODE");e&&(0,u.inputInviteCode)({code:e}),location.replace("/mobile"+(f.default.get(h.BACK_URL)||"/")),f.default.remove(h.BACK_URL)},changeLoginType:function(){this.loginType==v.ACCOUNT_LOGIN?this.loginType=v.SMS_CODE_LOGIN:this.loginType==v.SMS_CODE_LOGIN&&(this.loginType=v.ACCOUNT_LOGIN)},$sendSms:function(){var t=this;0!=this.canSendSms&&(this.telephone?(0,l.sendSms)({mobile:this.telephone,key:p.SMSType.LOGIN}).then((function(e){1==e.code&&(t.canSendSms=!1,t.$refs.countDown.start(),t.$toast({title:e.msg}))})):this.$toast({title:"请填写手机号信息～"}))},appWxLogin:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.login({provider:"weixin",success:function(e){var n=e.authResult,i=n.openid,o=n.access_token;(0,l.opLogin)({openid:i,access_token:o}).then((function(e){1==e.code&&t.loginHandle(e.data)}))}});case 1:case"end":return e.stop()}}),e)})))()}}),computed:(0,o.default)({},(0,s.mapGetters)(["appConfig"]))};e.default=g},"71b0":function(t,e,n){"use strict";n.r(e);var i=n("1920"),o=n("941c");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("f9e3");var r,s=n("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"d47f9d56",null,!1,i["a"],r);e["default"]=l.exports},"941c":function(t,e,n){"use strict";n.r(e);var i=n("ef07"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},aa03:function(t,e,n){"use strict";n.r(e);var i=n("15fc"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},bf4c:function(t,e,n){"use strict";n.r(e);var i=n("f0fe"),o=n("59a6");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c98e");var r,s=n("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"47687956",null,!1,i["a"],r);e["default"]=l.exports},c98e:function(t,e,n){"use strict";var i=n("fa6a"),o=n.n(i);o.a},d4cd:function(t,e,n){"use strict";function i(t,e,n){this.$children.map((function(o){t===o.$options.name?o.$emit.apply(o,[e].concat(n)):i.apply(o,[t,e].concat(n))}))}n("99af"),n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={methods:{dispatch:function(t,e,n){var i=this.$parent||this.$root,o=i.$options.name;while(i&&(!o||o!==t))i=i.$parent,i&&(o=i.$options.name);i&&i.$emit.apply(i,[e].concat(n))},broadcast:function(t,e,n){i.call(this,t,e,n)}}};e.default=o},d5b0:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("dc82").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},a=[]},da11:function(t,e,n){var i=n("e303");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("80d811d0",i,!0,{sourceMap:!1,shadowMode:!1})},e000:function(t,e,n){"use strict";n.r(e);var i=n("d5b0"),o=n("aa03");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("5440");var r,s=n("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"1203163a",null,!1,i["a"],r);e["default"]=l.exports},e303:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.u-input[data-v-1203163a]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n}.u-input__input[data-v-1203163a]{font-size:%?28?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input__textarea[data-v-1203163a]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input--border[data-v-1203163a]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-1203163a]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-1203163a]{margin-left:%?10?%}.u-input__right-icon--select[data-v-1203163a]{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-1203163a]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},ef07:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-count-down",props:{timestamp:{type:[Number,String],default:0},autoplay:{type:Boolean,default:!0},separator:{type:String,default:"colon"},separatorSize:{type:[Number,String],default:30},separatorColor:{type:String,default:"#303133"},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:30},bgColor:{type:String,default:"#fff"},height:{type:[Number,String],default:"auto"},showBorder:{type:Boolean,default:!1},borderColor:{type:String,default:"#303133"},showSeconds:{type:Boolean,default:!0},showMinutes:{type:Boolean,default:!0},showHours:{type:Boolean,default:!0},showDays:{type:Boolean,default:!0},hideZeroDay:{type:Boolean,default:!1}},watch:{timestamp:function(t,e){this.clearTimer(),this.start()}},data:function(){return{d:"00",h:"00",i:"00",s:"00",timer:null,seconds:0}},computed:{itemStyle:function(){var t={};return this.height&&(t.height=this.height+"rpx",t.width=this.height+"rpx"),this.showBorder&&(t.borderStyle="solid",t.borderColor=this.borderColor,t.borderWidth="1px"),this.bgColor&&(t.backgroundColor=this.bgColor),t},letterStyle:function(){var t={};return this.fontSize&&(t.fontSize=this.fontSize+"rpx"),this.color&&(t.color=this.color),t}},mounted:function(){this.autoplay&&this.timestamp&&this.start()},methods:{start:function(){var t=this;this.clearTimer(),this.timestamp<=0||(this.seconds=Number(this.timestamp),this.formatTime(this.seconds),this.timer=setInterval((function(){if(t.seconds--,t.$emit("change",t.seconds),t.seconds<0)return t.end();t.formatTime(t.seconds)}),1e3))},formatTime:function(t){t<=0&&this.end();var e=0,n=0,i=0,o=0;e=Math.floor(t/86400),n=Math.floor(t/3600)-24*e;var a=null;a=this.showDays?n:Math.floor(t/3600),i=Math.floor(t/60)-60*n-24*e*60,o=Math.floor(t)-24*e*60*60-60*n*60-60*i,a=a<10?"0"+a:a,i=i<10?"0"+i:i,o=o<10?"0"+o:o,e=e<10?"0"+e:e,this.d=e,this.h=a,this.i=i,this.s=o},end:function(){this.clearTimer(),this.$emit("end",{})},reset:function(){this.clearTimer(),this.seconds=Number(this.timestamp),this.s=this.timestamp,console.log(this.s)},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}};e.default=i},f0fe:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uInput:n("e000").default,uCountDown:n("71b0").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"login"},[t.isWeixin?t._e():n("v-uni-view",{staticClass:"h5-login"},[n("v-uni-image",{staticClass:"logo",attrs:{src:t.appConfig.shop_login_logo}}),0==t.loginType?n("v-uni-view",[n("v-uni-view",{staticClass:"input"},[n("u-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入账户","input-border":!1},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),n("v-uni-view",{staticClass:"input row",staticStyle:{padding:"15rpx 0"}},[n("u-input",{staticStyle:{flex:"1"},attrs:{type:"password","password-icon":!1,placeholder:"请输入密码","input-border":!1},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("v-uni-navigator",{staticStyle:{width:"132rpx","border-left":"1rpx solid #CCC"},attrs:{url:"/pages/forget_pwd/forget_pwd","hover-class":"none"}},[t._v("忘记密码")])],1)],1):t._e(),1==t.loginType?n("v-uni-view",[n("v-uni-view",{staticClass:"input"},[n("u-input",{staticStyle:{width:"100%"},attrs:{placeholder:"手机号","input-border":!1},model:{value:t.telephone,callback:function(e){t.telephone=e},expression:"telephone"}})],1),n("v-uni-view",{staticClass:"input row",staticStyle:{padding:"15rpx 0"}},[n("u-input",{staticStyle:{flex:"1"},attrs:{placeholder:"请输入验证码","input-border":!1},model:{value:t.smsCode,callback:function(e){t.smsCode=e},expression:"smsCode"}}),n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"sms-btn primary sm row-center br60",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$sendSms.apply(void 0,arguments)}}},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.canSendSms,expression:"canSendSms"}]},[t._v("获取验证码")]),n("u-count-down",{directives:[{name:"show",rawName:"v-show",value:!t.canSendSms,expression:"!canSendSms"}],ref:"countDown",attrs:{"show-days":!1,timestamp:t.time,showColon:!1,separator:"zh",color:"#FF2C3C","separator-color":"#FF2C3C","show-hours":!1,"show-minutes":!1,autoplay:!1},on:{end:function(e){arguments[0]=e=t.$handleEvent(e),t.countDownFinish()}}})],1)],1)],1)],1):t._e(),n("v-uni-button",{staticClass:"br60",staticStyle:{margin:"80rpx 0 50rpx",width:"680rpx"},attrs:{size:"lg",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginFun.apply(void 0,arguments)}}},[t._v("登录")]),n("v-uni-view",{staticClass:"row-between",staticStyle:{width:"680rpx"}},[n("v-uni-view",{staticClass:"lighter",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLoginType.apply(void 0,arguments)}}},[t._v(t._s(0==t.loginType?"短信验证码登录":"账号登录"))]),n("v-uni-navigator",{staticClass:"lighter",attrs:{url:"/pages/register/register","hover-class":"none"}},[t._v("注册账号")])],1),n("v-uni-view",{staticClass:"flex1 wx-login"}),n("v-uni-view",{staticClass:"mb20 sm row"},[t._v("已阅读并同意"),n("v-uni-navigator",{staticClass:"primary",attrs:{"hover-class":"none",url:"/pages/bundle/server_explan/server_explan?type=0"}},[t._v("《服务协议》")]),t._v("和"),n("v-uni-navigator",{staticClass:"primary",attrs:{"hover-class":"none",url:"/pages/bundle/server_explan/server_explan?type=1"}},[t._v("《隐私协议》")])],1)],1)],1)},a=[]},f9e3:function(t,e,n){"use strict";var i=n("1de4"),o=n.n(i);o.a},fa6a:function(t,e,n){var i=n("5198");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("454bb1b5",i,!0,{sourceMap:!1,shadowMode:!1})}}]);