/*!
 * Vue-intercom v0.0.4
 * (c) 2019-2020 Mathieu Stanowski
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],e):e((t=t||self).VueIntercom={},t.Vue)}(this,(function(t,e){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var n=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t};var r=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r};var o=function(t){if(Array.isArray(t))return r(t)};var i=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)};var c=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}};var u=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var a=function(t){return o(t)||i(t)||c(t)||u()};function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=arguments,r=1;r<arguments.length;r++){var o=null!=e[r]?e[r]:{};r%2?f(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function d(t,e){return e instanceof t||null!=e&&e.constructor===t}function p(){var t;if(window.Intercom)return(t=window).Intercom.apply(t,arguments)}function l(t,e){t.isBooted=!0,p("boot",e)}function y(t,e){var r=e.appId,o=new t({data:function(){return{ready:!1,isBooted:!1,visible:!1,unreadCount:0}}}),i={app_id:r},c={_vm:o,_call:p,_init:function(){return function(t){t.ready=!0,p("onHide",(function(){return t.visible=!1})),p("onShow",(function(){return t.visible=!0})),p("onUnreadCountChange",(function(e){return t.unreadCount=e}))}(o)},boot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return l(o,Object.assign({},i,t))},shutdown:function(){return function(t){t.isBooted=!1,p("shutdown")}(o)},update:function(){for(var t=arguments,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=t[r];return p.apply(void 0,["update"].concat(n))},show:function(){return p("show")},hide:function(){return p("hide")},showMessages:function(){return p("showMessages")},showNewMessage:function(t){return p.apply(void 0,["showNewMessage"].concat(a(d(String,t)?[t]:[])))},trackEvent:function(t){for(var e=arguments,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=e[o];return p.apply(void 0,["trackEvent"].concat([t].concat(r)))},startTour:function(t){for(var e=arguments,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=e[o];return p.apply(void 0,["startTour"].concat([t].concat(r)))},getVisitorId:function(){return p("getVisitorId")}};return Object.defineProperties(c,function(t,e){return e.reduce((function(e,r){return s(s({},e),{},n({},r,{get:function(){return t[r]}}))}),{})}(o,["ready","isBooted","visible","unreadCount"])),c}function v(t,e){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.intercom.io/widget/".concat(t);var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r),n.onload=e}function w(t,e){if(window&&document){var n=function(){return v(t,e)};"complete"===document.readyState?v(t,e):window.attachEvent?window.attachEvent("onload",n):window.addEventListener("load",n,!1)}}var b=!1;var O={version:"0.0.4",install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e!==t&&console.error("Multiple instances of Vue detected.");var r=n.appId;if(d(String,r)){var o=y(t,{appId:r});Object.defineProperty(t.prototype,"$intercom",{get:function(){return o}}),t.mixin({beforeCreate:function(){var t=this;if(!b){if("function"==typeof window.Intercom)this.$intercom._init(),this.$intercom._call("reattach_activator"),this.$intercom.update();else{var e=function t(){for(var e=arguments,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=e[o];return t.c(r)};e.q=[],e.c=function(t){return e.q.push(t)},window.Intercom=e,w(r,(function(){return t.$intercom._init()}))}b=!0}}})}else console.warn("You didn't specified Intercom appId. Please check your configuration.")}};function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var h=O.install;O.install=function(t,e){h.call(O,t,function(t){for(var e=arguments,r=1;r<arguments.length;r++){var o=null!=e[r]?e[r]:{};r%2?g(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},e))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(O),t.default=O,Object.defineProperty(t,"__esModule",{value:!0})}));
