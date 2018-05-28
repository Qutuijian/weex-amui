// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=140)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.prototype.toString,i={isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":o(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return i.env.isWeb()?"undefined"!=typeof window&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):i.env.isIOS()&&2436===e},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isPlainObject:function(e){return"[object Object]"===r.call(e)},makeClassList:function(e){return this.isWeb()||Array.isArray(e)?e:Object.keys(e).filter(function(t){return e[t]})}};t.default=i},10:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.type?n("text",{staticClass:["am-icon"],class:e.iconClass,style:e.iconStyle},[e._v(e._s(e.Icon[e.type]||e.type))]):e._e()},staticRenderFns:[]}},11:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["am-nav-bar","am-nav-bar-"+e.mode]},[n("div",{staticClass:["am-nav-bar-left"]},[e._t("left",e._l(e.left,function(t,o){return n("div",{key:o,class:["am-nav-bar-btn","am-nav-bar-"+e.mode+"-btn"],on:{click:function(n){e.handleClick(t)}}},["icon"===t.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+e.mode+"-btn-icon"],attrs:{type:t.type}}):"text"===t.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+e.mode+"-btn-text"]},[e._v(e._s(t.text))]):e._e()],1)}))],2),e._t("title",[n("text",{class:["am-nav-bar-title","am-nav-bar-"+e.mode+"-title"],on:{click:function(t){e.handleClick({key:"title"})}}},[e._v(e._s(e.title))])]),n("div",{staticClass:["am-nav-bar-right"]},[e._t("right",e._l(e.right,function(t,o){return n("div",{key:o,class:["am-nav-bar-btn","am-nav-bar-"+e.mode+"-btn"],on:{click:function(n){e.handleClick(t)}}},["icon"===t.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+e.mode+"-btn-icon"],attrs:{type:t.type}}):"text"===t.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+e.mode+"-btn-text"]},[e._v(e._s(t.text))]):e._e()],1)}))],2)],2)},staticRenderFns:[]}},140:function(e,t,n){var o,r,i=[];i.push(n(141)),o=n(142);var a=n(143);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-32148e59",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o,e.exports.el="true",new Vue(e.exports)},141:function(e,t){e.exports={}},142:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(57),i=o(r),a=n(2),c=o(a),s=n(43),l=o(s);t.default={components:{Placeholder:l.default,AmNavBar:c.default,AmCheckbox:i.default}}},143:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("am-nav-bar",{attrs:{title:"am-checkbox"}}),n("scroller",{staticClass:["scroller"]},[n("category",{attrs:{title:"类型样式"}}),n("div",{staticStyle:{padding:"30px"}},[n("div",{staticStyle:{marginBottom:"20px",flexDirection:"row"}},[n("am-checkbox"),n("text",{staticStyle:{fontSize:"30px",marginLeft:"10px"}},[e._v("default")])],1),n("div",{staticStyle:{marginBottom:"20px",flexDirection:"row"}},[n("am-checkbox",{attrs:{checked:""}}),n("text",{staticStyle:{fontSize:"30px",marginLeft:"10px"}},[e._v("checked")])],1),n("div",{staticStyle:{marginBottom:"20px",flexDirection:"row"}},[n("am-checkbox",{attrs:{checked:"",color:"red"}}),n("text",{staticStyle:{fontSize:"30px",marginLeft:"10px"}},[e._v("checked & color=red")])],1),n("div",{staticStyle:{marginBottom:"20px",flexDirection:"row"}},[n("am-checkbox",{attrs:{checked:"",disabled:""}}),n("text",{staticStyle:{fontSize:"30px",marginLeft:"10px"}},[e._v("checked & disabled")])],1)])],1)],1)},staticRenderFns:[]}},2:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={search:"",reload:"","arrow-down":"","arrow-up":"","arrow-right":"","arrow-left":"",down:"",up:"",right:"",left:"","warning-circle":"","warning-circle-o":"","close-circle":"","close-circle-o":"","check-circle":"","check-circle-o":"",check:"","clock-circle":"","clock-circle-o":"",ellipsis:"",loading:""};t.default=o},4:function(e,t,n){var o,r,i=[];i.push(n(5)),o=n(6);var a=n(11);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-49b3ea8f",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},43:function(e,t,n){var o,r,i=[];i.push(n(44)),o=n(45);var a=n(46);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-53c9a3f1",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},44:function(e,t){e.exports={block:{height:"100",lineHeight:"100",backgroundColor:"#dddddd",textAlign:"center",fontSize:"32"}}},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},46:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:["block"]},[e._v("block")])},staticRenderFns:[]}},5:function(e,t){e.exports={"am-nav-bar":{alignItems:"stretch",height:"90",backgroundColor:"#108ee9",flexDirection:"row"},"am-nav-bar-left":{flex:1,alignItems:"stretch",flexDirection:"row"},"am-nav-bar-title":{flex:1,alignItems:"stretch",flexDirection:"row",textAlign:"center",alignSelf:"center",fontSize:"36",whiteSpace:"nowrap",color:"#ffffff"},"am-nav-bar-right":{flex:1,alignItems:"stretch",flexDirection:"row",justifyContent:"flex-end"},"am-nav-bar-btn":{minWidth:"90",paddingLeft:"23",paddingRight:"23",alignItems:"center",justifyContent:"center","backgroundColor:active":"#0e80d2"},"am-nav-bar-btn-icon":{color:"#ffffff"},"am-nav-bar-btn-text":{fontSize:"32",color:"#ffffff"},"am-nav-bar-light":{backgroundColor:"#ffffff"},"am-nav-bar-light-title":{color:"#000000"},"am-nav-bar-light-btn":{"backgroundColor:active":"#dddddd"},"am-nav-bar-light-btn-icon":{color:"#108ee9"},"am-nav-bar-light-btn-text":{color:"#108ee9"}}},57:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(61);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},6:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=o(r),a=weex.requireModule("navigator");t.default={name:"am-nav-bar",props:{mode:{type:String,default:"dark"},title:{type:String,default:null},leftBtn:{type:Array,default:function(){return[{is:"icon",type:"left",onClick:function(){a.pop({},function(e){})}}]}},rightBtn:{type:Array,default:function(){return[]}}},components:{AmIcon:i.default},computed:{navBarClass:function(){return["am-nav-bar-"+this.mode]},titleClass:function(){return["am-nav-bar-"+this.mode+"-title"]},left:function(){return this.makeBtn(this.leftBtn)},right:function(){return this.makeBtn(this.rightBtn)}},methods:{makeBtn:function(e){return e.map(function(e){var t=e;return"string"==typeof e&&(t={is:"icon",type:e}),t})},handleClick:function(e){"function"==typeof e.onClick?e.onClick():this.$emit("click",e.key||e.type||e.text||e.src)}}}},61:function(e,t,n){var o,r,i=[];i.push(n(62)),o=n(63);var a=n(64);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-65a55233",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},62:function(e,t){e.exports={"am-checkbox":{overflow:"hidden",width:"44",height:"44",borderWidth:"2",borderColor:"#cccccc",borderRadius:50},"am-checkbox-checked":{backgroundColor:"#108ee9",borderColor:"#108ee9"},"am-checkbox-disabled":{opacity:.3,borderColor:"#888888",backgroundColor:"rgba(0,0,0,0)"},"am-checkbox-inner":{position:"relative",flex:1},"am-checkbox-icon-checked":{position:"absolute",top:"4",right:"13",width:"13",height:"26",borderStyle:"solid",borderRightWidth:"2",borderBottomWidth:"2",borderColor:"#ffffff",transform:"rotate(45deg)"},"am-checkbox-icon-disabled":{borderColor:"#888888"}}},63:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r);t.default={name:"am-checkbox",props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},color:{type:String,default:null}},data:function(){return{test:!1}},computed:{wrapClass:function(){return i.default.makeClassList({"am-checkbox":!0,"am-checkbox-checked":this.checked,"am-checkbox-disabled":this.disabled})},iconClass:function(){return i.default.makeClassList({"am-checkbox-icon-checked":this.checked,"am-checkbox-icon-disabled":this.disabled})},style:function(){var e={};return this.color&&(this.checked&&!this.disabled?(e.backgroundColor=this.color,e.borderColor=this.color):e.borderColor="#ccc"),e}}}},64:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.wrapClass,style:e.style},[e.checked?n("div",{staticClass:["am-checkbox-inner"]},[n("div",{class:e.iconClass})]):e._e()])},staticRenderFns:[]}},7:function(e,t,n){var o,r,i=[];i.push(n(8)),o=n(9);var a=n(10);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-cc094c2e",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},8:function(e,t){e.exports={"am-icon-xxs":{fontSize:"30",lineHeight:"30"},"am-icon-xs":{fontSize:"36",lineHeight:"36"},"am-icon-sm":{fontSize:"42",lineHeight:"42"},"am-icon-md":{fontSize:"44",lineHeight:"44"},"am-icon-lg":{fontSize:"72",lineHeight:"72"}}},9:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=o(r),a=weex.requireModule("dom");t.default={name:"am-icon",props:{type:{type:String,default:null},size:{type:[String,Number],default:"md"},color:{type:String,default:null},fontFamily:{type:String,default:"AMUIIconFont"}},data:function(){return{Icon:i.default}},computed:{iconClass:function(){return isNaN(this.size)?["am-icon-"+this.size]:null},iconStyle:function(){var e={color:this.color,fontFamily:this.fontFamily};return isNaN(this.size)||(e.fontSize=this.size+"px",e.lineHeight=this.size+"px"),e}},beforeCreate:function(){a.addRule("fontFace",{fontFamily:"AMUIIconFont",src:"url('https://at.alicdn.com/t/font_666184_6i47o5l7pbiysyvi.ttf')"})}}}});