// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=196)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.prototype.toString,i={isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":r(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return i.env.isWeb()?"undefined"!=typeof window&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):i.env.isIOS()&&2436===e},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isPlainObject:function(e){return"[object Object]"===o.call(e)},makeClassList:function(e){return this.isWeb()||Array.isArray(e)?e:Object.keys(e).filter(function(t){return e[t]})}};t.default=i},10:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.type?n("text",{staticClass:["am-icon"],class:e.iconClass,style:e.iconStyle},[e._v(e._s(e.Icon[e.type]||e.type))]):e._e()},staticRenderFns:[]}},11:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["am-nav-bar","am-nav-bar-"+e.mode]},[n("div",{staticClass:["am-nav-bar-left"]},[e._t("left",e._l(e.left,function(t,r){return n("div",{key:r,class:["am-nav-bar-btn","am-nav-bar-"+e.mode+"-btn"],on:{click:function(n){e.handleClick(t)}}},["icon"===t.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+e.mode+"-btn-icon"],attrs:{type:t.type}}):"text"===t.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+e.mode+"-btn-text"]},[e._v(e._s(t.text))]):e._e()],1)}))],2),e._t("title",[n("text",{class:["am-nav-bar-title","am-nav-bar-"+e.mode+"-title"],on:{click:function(t){e.handleClick({key:"title"})}}},[e._v(e._s(e.title))])]),n("div",{staticClass:["am-nav-bar-right"]},[e._t("right",e._l(e.right,function(t,r){return n("div",{key:r,class:["am-nav-bar-btn","am-nav-bar-"+e.mode+"-btn"],on:{click:function(n){e.handleClick(t)}}},["icon"===t.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+e.mode+"-btn-icon"],attrs:{type:t.type}}):"text"===t.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+e.mode+"-btn-text"]},[e._v(e._s(t.text))]):e._e()],1)}))],2)],2)},staticRenderFns:[]}},116:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(117);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},117:function(e,t,n){var r,o,i=[];i.push(n(118)),r=n(119);var a=n(120);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-1b327270",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r},118:function(e,t){e.exports={"am-segment":{flexDirection:"row",height:"54",opacity:1},"am-segment-disabled":{opacity:.5},"am-segment-item":{flex:1,textAlign:"center",color:"#108ee9",fontSize:"28",lineHeight:"54",borderColor:"#108ee9",borderRightWidth:1,borderBottomWidth:1,borderTopWidth:1},"am-segment-item-first":{borderLeftWidth:1,borderTopLeftRadius:"10",borderBottomLeftRadius:"10"},"am-segment-item-last":{borderTopRightRadius:"10",borderBottomRightRadius:"10"},"am-segment-item-selected":{backgroundColor:"#108ee9",color:"#ffffff"}}},119:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o);t.default={name:"am-segmented-control",model:{prop:"selected",event:"change"},props:{values:{type:Array,default:function(){return[]}},selected:{type:Number,default:0},disabled:{type:Boolean,default:!1},tintColor:{type:String,default:null}},computed:{segmentClass:function(){return i.default.makeClassList({"am-segment":!0,"am-segment-disabled":this.disabled})}},methods:{getItemClass:function(e){return i.default.makeClassList({"am-segment-item":!0,"am-segment-item-first":0===e,"am-segment-item-last":e===this.values.length-1,"am-segment-item-selected":this.selected===e})},getSegmentItemStyle:function(e){var t={};return this.tintColor&&(t.borderColor=this.tintColor,this.selected===e?(t.backgroundColor=this.tintColor,t.color="#ffffff"):t.color=this.tintColor),t},handleClick:function(e,t){this.disabled||this.$emit("change",e,t)}}}},120:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.segmentClass},e._l(e.values,function(t,r){return n("text",{key:r,class:e.getItemClass(r),style:e.getSegmentItemStyle(r),on:{click:function(n){e.handleClick(r,t)}}},[e._v(e._s(t))])}))},staticRenderFns:[]}},196:function(e,t,n){var r,o,i=[];i.push(n(197)),r=n(198);var a=n(199);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-2c41d562",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r,e.exports.el="true",new Vue(e.exports)},197:function(e,t){e.exports={demo:{backgroundColor:"#f5f5f9"}}},198:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(33),i=r(o),a=n(28),s=r(a),c=n(116),l=r(c),f=n(2),u=r(f),d=weex.requireModule("modal");t.default={components:{AmNavBar:u.default,AmSegmentedControl:l.default,AmWhiteSpace:s.default,AmWingBlank:i.default},data:function(){return{selected:0}},methods:{change:function(e,t){d.toast({message:"index:"+e+",value:"+t})}}}},199:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["demo"]},[n("am-nav-bar",{attrs:{title:"分段器"}}),n("scroller",[n("am-wing-blank",[n("am-white-space"),n("am-segmented-control",{attrs:{values:["Segment1","Segment2","Segment3"]},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("am-wing-blank",[n("am-white-space"),n("am-segmented-control",{attrs:{disabled:"",values:["Segment1","Segment2","Segment3"]},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("am-wing-blank",[n("am-white-space"),n("am-segmented-control",{attrs:{tintColor:"#ff0000",values:["Segment1","Segment2","Segment3"]},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("am-wing-blank",[n("am-white-space"),n("am-segmented-control",{style:{width:"500px"},attrs:{values:["Segment1","Segment2","Segment3"]},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)],1)},staticRenderFns:[]}},2:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},28:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(29);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},29:function(e,t,n){var r,o,i=[];i.push(n(30)),r=n(31);var a=n(32);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-ed673070",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={search:"",reload:"","arrow-down":"","arrow-up":"","arrow-right":"","arrow-left":"",down:"",up:"",right:"",left:"","warning-circle":"","warning-circle-o":"","close-circle":"","close-circle-o":"","check-circle":"","check-circle-o":"",check:"","clock-circle":"","clock-circle-o":"",ellipsis:"",loading:""};t.default=r},30:function(e,t){e.exports={"am-white-space-xs":{height:"6"},"am-white-space-sm":{height:"12"},"am-white-space-md":{height:"18"},"am-white-space-lg":{height:"30"},"am-white-space-xl":{height:"42"}}},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"am-white-space",props:{size:{type:String,default:"md"}}}},32:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:["am-white-space-"+e.size]})},staticRenderFns:[]}},33:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(34);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},34:function(e,t,n){var r,o,i=[];i.push(n(35)),r=n(36);var a=n(37);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-b0f0e0fc",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r},35:function(e,t){e.exports={"am-wing-blank-sm":{marginLeft:"10",marginRight:"10"},"am-wing-blank-md":{marginLeft:"16",marginRight:"16"},"am-wing-blank-lg":{marginLeft:"30",marginRight:"30"}}},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"am-wing-blank",props:{size:{type:String,default:"lg"}}}},37:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:["am-wing-blank-"+e.size]},[e._t("default")],2)},staticRenderFns:[]}},4:function(e,t,n){var r,o,i=[];i.push(n(5)),r=n(6);var a=n(11);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-49b3ea8f",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r},5:function(e,t){e.exports={"am-nav-bar":{alignItems:"stretch",height:"90",backgroundColor:"#108ee9",flexDirection:"row"},"am-nav-bar-left":{flex:1,alignItems:"stretch",flexDirection:"row"},"am-nav-bar-title":{flex:1,alignItems:"stretch",flexDirection:"row",textAlign:"center",alignSelf:"center",fontSize:"36",whiteSpace:"nowrap",color:"#ffffff"},"am-nav-bar-right":{flex:1,alignItems:"stretch",flexDirection:"row",justifyContent:"flex-end"},"am-nav-bar-btn":{minWidth:"90",paddingLeft:"23",paddingRight:"23",alignItems:"center",justifyContent:"center","backgroundColor:active":"#0e80d2"},"am-nav-bar-btn-icon":{color:"#ffffff"},"am-nav-bar-btn-text":{fontSize:"32",color:"#ffffff"},"am-nav-bar-light":{backgroundColor:"#ffffff"},"am-nav-bar-light-title":{color:"#000000"},"am-nav-bar-light-btn":{"backgroundColor:active":"#dddddd"},"am-nav-bar-light-btn-icon":{color:"#108ee9"},"am-nav-bar-light-btn-text":{color:"#108ee9"}}},6:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=weex.requireModule("navigator");t.default={name:"am-nav-bar",props:{mode:{type:String,default:"dark"},title:{type:String,default:null},leftBtn:{type:Array,default:function(){return[{is:"icon",type:"left",onClick:function(){a.pop({},function(e){})}}]}},rightBtn:{type:Array,default:function(){return[]}}},components:{AmIcon:i.default},computed:{navBarClass:function(){return["am-nav-bar-"+this.mode]},titleClass:function(){return["am-nav-bar-"+this.mode+"-title"]},left:function(){return this.makeBtn(this.leftBtn)},right:function(){return this.makeBtn(this.rightBtn)}},methods:{makeBtn:function(e){return e.map(function(e){var t=e;return"string"==typeof e&&(t={is:"icon",type:e}),t})},handleClick:function(e){"function"==typeof e.onClick?e.onClick():this.$emit("click",e.key||e.type||e.text||e.src)}}}},7:function(e,t,n){var r,o,i=[];i.push(n(8)),r=n(9);var a=n(10);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-cc094c2e",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r},8:function(e,t){e.exports={"am-icon-xxs":{fontSize:"30",lineHeight:"30"},"am-icon-xs":{fontSize:"36",lineHeight:"36"},"am-icon-sm":{fontSize:"42",lineHeight:"42"},"am-icon-md":{fontSize:"44",lineHeight:"44"},"am-icon-lg":{fontSize:"72",lineHeight:"72"}}},9:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=r(o),a=weex.requireModule("dom");t.default={name:"am-icon",props:{type:{type:String,default:null},size:{type:[String,Number],default:"md"},color:{type:String,default:null},fontFamily:{type:String,default:"AMUIIconFont"}},data:function(){return{Icon:i.default}},computed:{iconClass:function(){return isNaN(this.size)?["am-icon-"+this.size]:null},iconStyle:function(){var e={color:this.color,fontFamily:this.fontFamily};return isNaN(this.size)||(e.fontSize=this.size+"px",e.lineHeight=this.size+"px"),e}},beforeCreate:function(){a.addRule("fontFace",{fontFamily:"AMUIIconFont",src:"url('https://at.alicdn.com/t/font_666184_6i47o5l7pbiysyvi.ttf')"})}}}});