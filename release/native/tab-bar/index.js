// { "framework": "Vue"} 

!function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=204)}({0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(7);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(a).default}})},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.type?n("text",{staticClass:["am-icon"],class:t.iconClass,style:t.iconStyle},[t._v(t._s(t.Icon[t.type]||t.type))]):t._e()},staticRenderFns:[]}},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["am-nav-bar","am-nav-bar-"+t.mode]},[n("div",{staticClass:["am-nav-bar-left"]},[t._t("left",t._l(t.left,function(e,i){return n("div",{key:i,class:["am-nav-bar-btn","am-nav-bar-"+t.mode+"-btn"],on:{click:function(n){t.handleClick(e)}}},["icon"===e.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+t.mode+"-btn-icon"],attrs:{type:e.type}}):"text"===e.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+t.mode+"-btn-text"]},[t._v(t._s(e.text))]):t._e()],1)}))],2),t._t("title",[n("text",{class:["am-nav-bar-title","am-nav-bar-"+t.mode+"-title"],on:{click:function(e){t.handleClick({key:"title"})}}},[t._v(t._s(t.title))])]),n("div",{staticClass:["am-nav-bar-right"]},[t._t("right",t._l(t.right,function(e,i){return n("div",{key:i,class:["am-nav-bar-btn","am-nav-bar-"+t.mode+"-btn"],on:{click:function(n){t.handleClick(e)}}},["icon"===e.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+t.mode+"-btn-icon"],attrs:{type:e.type}}):"text"===e.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+t.mode+"-btn-text"]},[t._v(t._s(e.text))]):t._e()],1)}))],2)],2)},staticRenderFns:[]}},121:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(122);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(a).default}})},122:function(t,e,n){var i,a,r=[];r.push(n(123)),i=n(124);var o=n(125);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-27f2fe34",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},123:function(t,e){t.exports={"am-tab-bar-item":{flex:1,alignItems:"center",justifyContent:"center"},"am-tab-bar-item-wrap":{alignItems:"center",paddingLeft:"8",paddingRight:"8"},"am-tab-bar-item-image":{height:"44",width:"44"},"am-tab-bar-item-title":{fontSize:"24",marginTop:"6",lineHeight:"24"},"am-tab-bar-item-dot":{position:"absolute",right:0,top:0,backgroundColor:"#ff5b05",width:"16",height:"16",borderRadius:"16"}}},124:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=i(a);e.default={name:"am-tab-bar-item",components:{AmIcon:r.default},props:{selected:{type:Boolean,default:!1},icon:{type:String,default:null},iconSize:{type:[Number,String],default:null},iconFontFamily:{type:String,default:null},image:{type:String,default:null},imageActive:{type:String,default:null},imageSize:{type:[Number,Array],default:null},title:{type:String,default:null},tintColor:{type:String,default:null},unselectedTintColor:{type:String,default:null},dot:{type:Boolean,default:!1}},computed:{textStyle:function(){return{color:this.selected?this.tintColor||this.$parent.tintColor:this.unselectedTintColor||this.$parent.unselectedTintColor}},iconProps:function(){var t={type:this.icon,color:this.textStyle.color};return(this.iconFontFamily||this.$parent.iconFontFamily)&&(t.fontFamily=this.iconFontFamily||this.$parent.iconFontFamily),(this.iconSize||this.$parent.iconSize)&&(t.size=this.iconSize||this.$parent.iconSize),t},imageStyle:function(){var t={};if(this.imageSize||this.$parent.imageSize){var e=this.imageSize||this.$parent.imageSize;Array.isArray(e)?(t.width=e[0]+"px",t.height=e[1]+"px"):(t.width=e+"px",t.height=e+"px")}return t}},methods:{handelClick:function(t){this.$emit("click",t)}}}},125:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["am-tab-bar-item"],on:{click:t.handelClick}},[n("div",{staticClass:["am-tab-bar-item-wrap"]},[t.icon?n("am-icon",t._b({staticClass:["am-tab-bar-item-icon"]},"am-icon",t.iconProps,!1)):t.image?n("image",{staticClass:["am-tab-bar-item-image"],style:t.imageStyle,attrs:{src:t.selected&&t.imageActive?t.imageActive:t.image}}):t._e(),t.dot?n("div",{staticClass:["am-tab-bar-item-dot"]}):t._e()],1),t.title?n("text",{staticClass:["am-tab-bar-item-title"],style:t.textStyle},[t._v(t._s(t.title))]):t._e(),t._t("default")],2)},staticRenderFns:[]}},126:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(127);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(a).default}})},127:function(t,e,n){var i,a,r=[];r.push(n(128)),i=n(129);var o=n(130);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-288ad181",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},128:function(t,e){t.exports={"am-tab-bar":{height:"100",borderColor:"#dddddd",borderTopWidth:1,flexDirection:"row",justifyContent:"space-around",alignItems:"stretch"}}},129:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"am-tab-bar",props:{barTintColor:{type:String,default:"white"},tintColor:{type:String,default:"#108ee9"},unselectedTintColor:{type:String,default:"#888888"},iconSize:{type:[Number,String],default:null},iconFontFamily:{type:String,default:null},imageSize:{type:[Number,Array],default:null}},computed:{style:function(){var t={};return this.barTintColor&&(t.backgroundColor=this.barTintColor),t}}}},130:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:["am-tab-bar"],style:t.style},[t._t("default")],2)},staticRenderFns:[]}},2:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(4);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(a).default}})},204:function(t,e,n){var i,a,r=[];r.push(n(205)),i=n(206);var o=n(207);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-365f0eca",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i,t.exports.el="true",new Vue(t.exports)},205:function(t,e){t.exports={main:{flex:1,justifyContent:"center",backgroundColor:"#f5f5f9"},text:{fontSize:"32",textAlign:"center"},"other-demo":{marginTop:"20"}}},206:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(28),r=i(a),o=n(2),c=i(o),s=n(121),l=i(s),u=n(126),f=i(u),d=weex.requireModule("dom");e.default={components:{AmTabBar:f.default,AmTabBarItem:l.default,AmNavBar:c.default,AmWhiteSpace:r.default},data:function(){return{selected:"首页",tabBar:[{icon:"",title:"首页"},{icon:"",title:"钱包"},{icon:"",title:"心"},{icon:"",title:"我"}],selected2:"首页",tabBar2:[{title:"首页",image:"https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png",activeImage:"https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png"},{title:"特别推荐",image:"https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png",activeImage:"https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png"},{title:"消息中心",image:"https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png",activeImage:"https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png",badge:5},{title:"我的主页",image:"https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png",activeImage:"https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png",dot:!0}]}},beforeCreate:function(){d.addRule("fontFace",{fontFamily:"testIcon",src:"url('https://at.alicdn.com/t/font_666154_scqtwgh1e27kqpvi.ttf')"})}}},207:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["demo"]},[n("am-nav-bar",{attrs:{title:"am-tab-bar"}}),n("div",{staticClass:["main"]},[n("text",{staticClass:["text"]},[t._v(t._s(t.selected))]),n("div",{staticClass:["other-demo"]},[n("text",{staticClass:["text"]},[t._v("只显示icon")]),n("am-tab-bar",{attrs:{iconFontFamily:"testIcon"}},t._l(t.tabBar,function(e){return n("am-tab-bar-item",{key:e.title,attrs:{icon:e.icon,selected:t.selected===e.title},on:{click:function(n){t.selected=e.title}}})})),n("am-white-space",{attrs:{size:"lg"}}),n("text",{staticClass:["text"]},[t._v("图标用图片")]),n("am-tab-bar",{attrs:{imageSize:60}},t._l(t.tabBar2,function(e){return n("am-tab-bar-item",{key:e.title,attrs:{image:e.image,imageActive:e.activeImage,title:e.title,selected:t.selected2===e.title},on:{click:function(n){t.selected2=e.title}}})}))],1)]),n("am-tab-bar",{attrs:{iconFontFamily:"testIcon"}},t._l(t.tabBar,function(e){return n("am-tab-bar-item",{key:e.title,attrs:{icon:e.icon,title:e.title,selected:t.selected===e.title},on:{click:function(n){t.selected=e.title}}})}))],1)},staticRenderFns:[]}},28:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(29);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(a).default}})},29:function(t,e,n){var i,a,r=[];r.push(n(30)),i=n(31);var o=n(32);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-ed673070",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={search:"",reload:"","arrow-down":"","arrow-up":"","arrow-right":"","arrow-left":"",down:"",up:"",right:"",left:"","warning-circle":"","warning-circle-o":"","close-circle":"","close-circle-o":"","check-circle":"","check-circle-o":"",check:"","clock-circle":"","clock-circle-o":"",ellipsis:"",loading:""};e.default=i},30:function(t,e){t.exports={"am-white-space-xs":{height:"6"},"am-white-space-sm":{height:"12"},"am-white-space-md":{height:"18"},"am-white-space-lg":{height:"30"},"am-white-space-xl":{height:"42"}}},31:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"am-white-space",props:{size:{type:String,default:"md"}}}},32:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["am-white-space-"+t.size]})},staticRenderFns:[]}},4:function(t,e,n){var i,a,r=[];r.push(n(5)),i=n(6);var o=n(11);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-49b3ea8f",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},5:function(t,e){t.exports={"am-nav-bar":{alignItems:"stretch",height:"90",backgroundColor:"#108ee9",flexDirection:"row"},"am-nav-bar-left":{flex:1,alignItems:"stretch",flexDirection:"row"},"am-nav-bar-title":{flex:1,alignItems:"stretch",flexDirection:"row",textAlign:"center",alignSelf:"center",fontSize:"36",whiteSpace:"nowrap",color:"#ffffff"},"am-nav-bar-right":{flex:1,alignItems:"stretch",flexDirection:"row",justifyContent:"flex-end"},"am-nav-bar-btn":{minWidth:"90",paddingLeft:"23",paddingRight:"23",alignItems:"center",justifyContent:"center","backgroundColor:active":"#0e80d2"},"am-nav-bar-btn-icon":{color:"#ffffff"},"am-nav-bar-btn-text":{fontSize:"32",color:"#ffffff"},"am-nav-bar-light":{backgroundColor:"#ffffff"},"am-nav-bar-light-title":{color:"#000000"},"am-nav-bar-light-btn":{"backgroundColor:active":"#dddddd"},"am-nav-bar-light-btn-icon":{color:"#108ee9"},"am-nav-bar-light-btn-text":{color:"#108ee9"}}},6:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=i(a),o=weex.requireModule("navigator");e.default={name:"am-nav-bar",props:{mode:{type:String,default:"dark"},title:{type:String,default:null},leftBtn:{type:Array,default:function(){return[{is:"icon",type:"left",onClick:function(){o.pop({},function(t){})}}]}},rightBtn:{type:Array,default:function(){return[]}}},components:{AmIcon:r.default},computed:{navBarClass:function(){return["am-nav-bar-"+this.mode]},titleClass:function(){return["am-nav-bar-"+this.mode+"-title"]},left:function(){return this.makeBtn(this.leftBtn)},right:function(){return this.makeBtn(this.rightBtn)}},methods:{makeBtn:function(t){return t.map(function(t){var e=t;return"string"==typeof t&&(e={is:"icon",type:t}),e})},handleClick:function(t){"function"==typeof t.onClick?t.onClick():this.$emit("click",t.key||t.type||t.text||t.src)}}}},7:function(t,e,n){var i,a,r=[];r.push(n(8)),i=n(9);var o=n(10);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-cc094c2e",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},8:function(t,e){t.exports={"am-icon-xxs":{fontSize:"30",lineHeight:"30"},"am-icon-xs":{fontSize:"36",lineHeight:"36"},"am-icon-sm":{fontSize:"42",lineHeight:"42"},"am-icon-md":{fontSize:"44",lineHeight:"44"},"am-icon-lg":{fontSize:"72",lineHeight:"72"}}},9:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),r=i(a),o=weex.requireModule("dom");e.default={name:"am-icon",props:{type:{type:String,default:null},size:{type:[String,Number],default:"md"},color:{type:String,default:null},fontFamily:{type:String,default:"AMUIIconFont"}},data:function(){return{Icon:r.default}},computed:{iconClass:function(){return isNaN(this.size)?["am-icon-"+this.size]:null},iconStyle:function(){var t={color:this.color,fontFamily:this.fontFamily};return isNaN(this.size)||(t.fontSize=this.size+"px",t.lineHeight=this.size+"px"),t}},beforeCreate:function(){o.addRule("fontFace",{fontFamily:"AMUIIconFont",src:"url('https://at.alicdn.com/t/font_666184_6i47o5l7pbiysyvi.ttf')"})}}}});