!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=a(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function a(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var a=n(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(a[i]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function a(e){for(var t=0;t<e.length;t++){var n=e[t],a=u[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(i(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var o=[],r=0;r<n.parts.length;r++)o.push(i(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:o}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,a=document.querySelector("style["+x+'~="'+e.id+'"]');if(a){if(v)return h;a.parentNode.removeChild(a)}if(g){var i=p++;a=f||(f=r()),t=o.bind(null,a,i,!1),n=o.bind(null,a,i,!0)}else a=r(),t=s.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}function o(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,a=t.media,r=t.sourceMap;if(a&&e.setAttribute("media",a),m.ssrId&&e.setAttribute(x,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(9),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},m=null,x="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){v=n,m=r||{};var i=l(e,t);return a(i),function(t){for(var n=[],r=0;r<i.length;r++){var o=i[r],s=u[o.id];s.refs--,n.push(s)}t?(i=l(e,t),a(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,a,r){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),a&&(c._scopeId=a);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,d=u?c.render:c.beforeCreate;u?c.render=function(e,t){return l.call(t),d(e,t)}:c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:i,exports:o,options:c}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(4),i=a(r);a(n(5)).default.init(i.default);var o=n(6);new i.default(i.default.util.extend({el:"#root"},o))},function(e,t){e.exports=Vue},function(e,t){e.exports=weex},function(e,t,n){function a(e){n(7)}var r=n(2)(n(10),n(30),a,"data-v-c9146050",null);e.exports=r.exports},function(e,t,n){var a=n(8);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(1)("2cd2ab86",a,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".text[data-v-c9146050]{font-size:.4rem;padding-top:.13333rem;padding-left:.2rem}",""])},function(e,t){e.exports=function(e,t){for(var n=[],a={},r=0;r<t.length;r++){var i=t[r],o=i[0],s=i[1],c=i[2],l=i[3],u={id:e+":"+r,css:s,media:c,sourceMap:l};a[o]?a[o].parts.push(u):n.push(a[o]={id:o,parts:[u]})}return n}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=a(r),o=n(17),s=a(o);t.default={components:{AmNavBar:s.default,AmImage:i.default},methods:{handleLoad:function(e){}}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(12);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},function(e,t,n){function a(e){n(13)}var r=n(2)(n(15),n(16),a,"data-v-05a3a3be",null);e.exports=r.exports},function(e,t,n){var a=n(14);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(1)("77fa34e2",a,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".am-icon-xxs[data-v-05a3a3be]{font-size:.4rem;line-height:.4rem}.am-icon-xs[data-v-05a3a3be]{font-size:.48rem;line-height:.48rem}.am-icon-sm[data-v-05a3a3be]{font-size:.56rem;line-height:.56rem}.am-icon-md[data-v-05a3a3be]{font-size:.58667rem;line-height:.58667rem}.am-icon-lg[data-v-05a3a3be]{font-size:.96rem;line-height:.96rem}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=weex.requireModule("dom");t.default={name:"am-image",props:{autoWidth:{type:Boolean,default:!1},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:null},resize:{type:String,default:"stretch",validator:function(e){return["cover","contain","stretch"].indexOf(e)>=0}},src:{type:String,default:""},imageStyle:{type:Object,default:function(){return{}}}},data:function(){return{loaded:!1,widht:null,height:null}},computed:{props:function(){var e={src:this.src,resize:this.resize};return this.placeholder&&(e.placeholder=this.placeholder),e},style:function(){var e=a({width:"0.1px",height:"0.1px"},this.imageStyle);return this.loaded&&(e.width=this.width?this.width+"px":e.width,e.height=this.height?this.height+"px":e.height),e}},methods:{handleLoad:function(e){var t=this;e.success&&(this.autoWidth||this.autoHeight)&&r.getComponentRect(this.$refs.image,function(n){n.result&&(t.autoWidth?t.width=n.size.height/e.size.naturalHeight*e.size.naturalWidth:t.height=n.size.width/e.size.naturalWidth*e.size.naturalHeight,t.loaded=!0)})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("figure",{directives:[{name:"weex-resize",rawName:"v-weex-resize",value:e.resize,expression:"resize"}],ref:"image",staticClass:" weex-el weex-image",style:e._px2rem(e.style,75),attrs:{src:e.src,resize:e.resize,placeholder:e.placeholder,"data-img-src":e.src,"weex-type":"image","data-evt-load":""},on:{load:e.handleLoad}})},staticRenderFns:[]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(18);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},function(e,t,n){function a(e){n(19)}var r=n(2)(n(21),n(29),a,"data-v-0c7fa168",null);e.exports=r.exports},function(e,t,n){var a=n(20);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(1)("685b3db0",a,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".am-nav-bar[data-v-0c7fa168]{align-items:stretch;height:1.2rem;background-color:#108ee9;flex-direction:row}.am-nav-bar-left[data-v-0c7fa168],.am-nav-bar-right[data-v-0c7fa168]{flex:1;align-items:stretch;flex-direction:row}.am-nav-bar-title[data-v-0c7fa168]{flex:2;text-align:center;align-self:center;font-size:.48rem;white-space:nowrap;color:#fff}.am-nav-bar-right[data-v-0c7fa168]{justify-content:flex-end}.am-nav-bar-btn[data-v-0c7fa168]{min-width:1.2rem;padding-left:.30667rem;padding-right:.30667rem;align-items:center;justify-content:center}.am-nav-bar-btn[data-v-0c7fa168]:active{background-color:#0e80d2}.am-nav-bar-btn-icon[data-v-0c7fa168]{color:#fff}.am-nav-bar-btn-text[data-v-0c7fa168]{font-size:.42667rem;color:#fff}.am-nav-bar-light[data-v-0c7fa168]{background-color:#fff}.am-nav-bar-light-title[data-v-0c7fa168]{color:#000}.am-nav-bar-light-btn[data-v-0c7fa168]:active{background-color:#ddd}.am-nav-bar-light-btn-icon[data-v-0c7fa168],.am-nav-bar-light-btn-text[data-v-0c7fa168]{color:#108ee9}",""])},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(22),i=a(r),o=weex.requireModule("navigator");t.default={name:"am-nav-bar",props:{mode:{type:String,default:"dark"},title:{type:String,default:null},leftBtn:{type:Array,default:function(){return[{is:"icon",type:"left",onClick:function(){o.pop({},function(e){})}}]}},rightBtn:{type:Array,default:function(){return[]}}},components:{AmIcon:i.default},computed:{navBarClass:function(){return["am-nav-bar-"+this.mode]},titleClass:function(){return["am-nav-bar-"+this.mode+"-title"]},left:function(){return this.makeBtn(this.leftBtn)},right:function(){return this.makeBtn(this.rightBtn)}},methods:{makeBtn:function(e){return e.map(function(e){var t=e;return"string"==typeof e&&(t={is:"icon",type:e}),t})},handleClick:function(e){"function"==typeof e.onClick?e.onClick():this.$emit("click",e.key||e.type||e.text||e.src)}}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(23);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},function(e,t,n){function a(e){n(24)}var r=n(2)(n(26),n(28),a,"data-v-17fad368",null);e.exports=r.exports},function(e,t,n){var a=n(25);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(1)("5c8f2aee",a,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".am-icon-xxs[data-v-17fad368]{font-size:.4rem;line-height:.4rem}.am-icon-xs[data-v-17fad368]{font-size:.48rem;line-height:.48rem}.am-icon-sm[data-v-17fad368]{font-size:.56rem;line-height:.56rem}.am-icon-md[data-v-17fad368]{font-size:.58667rem;line-height:.58667rem}.am-icon-lg[data-v-17fad368]{font-size:.96rem;line-height:.96rem}",""])},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(27),i=a(r),o=weex.requireModule("dom");t.default={name:"am-icon",props:{type:{type:String,default:null},size:{type:[String,Number],default:"md"},color:{type:String,default:null},fontFamily:{type:String,default:"AMUIIconFont"}},data:function(){return{Icon:i.default}},computed:{iconClass:function(){return isNaN(this.size)?["am-icon-"+this.size]:null},iconStyle:function(){var e={color:this.color,fontFamily:this.fontFamily};return isNaN(this.size)||(e.fontSize=this.size+"px",e.lineHeight=this.size+"px"),e}},beforeCreate:function(){o.addRule("fontFace",{fontFamily:"AMUIIconFont",src:"url('https://at.alicdn.com/t/font_666184_6i47o5l7pbiysyvi.ttf')"})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={search:"",reload:"","arrow-down":"","arrow-up":"","arrow-right":"","arrow-left":"",down:"",up:"",right:"",left:"","warning-circle":"","warning-circle-o":"","close-circle":"","close-circle-o":"","check-circle":"","check-circle-o":"",check:"","clock-circle":"","clock-circle-o":"",ellipsis:"",loading:""};t.default=a},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.type?n("p",{staticClass:"am-icon weex-el weex-text",class:e.iconClass,style:e._processExclusiveStyle(e.iconStyle,75,"text"),attrs:{"weex-type":"text"}},[e._v(e._s(e.Icon[e.type]||e.type))]):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" weex-ct weex-div",class:["am-nav-bar","am-nav-bar-"+e.mode],attrs:{"weex-type":"div"}},[n("div",{staticClass:"am-nav-bar-left weex-ct weex-div",attrs:{"weex-type":"div"}},[e._t("left",e._l(e.left,function(t,a){return n("div",{key:a,staticClass:" weex-ct weex-div",class:["am-nav-bar-btn","am-nav-bar-"+e.mode+"-btn"],attrs:{"weex-type":"div","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(n){n.stopPropagation(),e.handleClick(t)}}},["icon"===t.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+e.mode+"-btn-icon"],attrs:{type:t.type}}):"text"===t.is?n("p",{staticClass:" weex-el weex-text",class:["am-nav-bar-btn-text","am-nav-bar-"+e.mode+"-btn-text"],attrs:{"weex-type":"text"}},[e._v(e._s(t.text))]):e._e()],1)}),{})],2),e._v(" "),e._t("title",[n("p",{staticClass:" weex-el weex-text",class:["am-nav-bar-title","am-nav-bar-"+e.mode+"-title"],attrs:{"weex-type":"text","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(t){t.stopPropagation(),e.handleClick({key:"title"})}}},[e._v(e._s(e.title))])],{}),e._v(" "),n("div",{staticClass:"am-nav-bar-right weex-ct weex-div",attrs:{"weex-type":"div"}},[e._t("right",e._l(e.right,function(t,a){return n("div",{key:a,staticClass:" weex-ct weex-div",class:["am-nav-bar-btn","am-nav-bar-"+e.mode+"-btn"],attrs:{"weex-type":"div","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(n){n.stopPropagation(),e.handleClick(t)}}},["icon"===t.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+e.mode+"-btn-icon"],attrs:{type:t.type}}):"text"===t.is?n("p",{staticClass:" weex-el weex-text",class:["am-nav-bar-btn-text","am-nav-bar-"+e.mode+"-btn-text"],attrs:{"weex-type":"text"}},[e._v(e._s(t.text))]):e._e()],1)}),{})],2)],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" weex-ct weex-div",attrs:{"weex-type":"div"}},[n("am-nav-bar",{attrs:{title:"am-image"}}),e._v(" "),n("scroller",{staticStyle:{"-webkit-box-flex":"1","-webkit-flex":"1",flex:"1"},attrs:{}},[n("p",{staticClass:"text weex-el weex-text",attrs:{"weex-type":"text"}},[e._v("自动高")]),e._v(" "),n("am-image",{attrs:{"image-style":{width:"200px"},"auto-height":"",src:"https://gw.alicdn.com/tfs/TB1KF_ybRTH8KJjy0FiXXcRsXXa-890-1186.png"}}),e._v(" "),n("p",{staticClass:"text weex-el weex-text",attrs:{"weex-type":"text"}},[e._v("自动宽")]),e._v(" "),n("am-image",{attrs:{"image-style":{height:"500px"},"auto-width":"",src:"https://gw.alicdn.com/tfs/TB1KF_ybRTH8KJjy0FiXXcRsXXa-890-1186.png","data-evt-load":""},nativeOn:{load:function(t){return e.handleLoad(t)}}})],1)],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=index.web.js.map