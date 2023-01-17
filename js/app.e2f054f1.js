(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return i.p+"js/"+({groupedChunk:"groupedChunk"}[e]||e)+"."+{"chunk-2d21a3d2":"581113ea","chunk-6a669ad4":"184aee1c",groupedChunk:"bf6860e2"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var l=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"051f":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=(n("96cf"),n("1e5c")),o=(n("99af"),{formatTime:function(e){var t=Math.floor(e/60)||0,n=Math.round(e-60*t||0);return"".concat(t,":").concat(n<10?0:"").concat(n)}});t["default"]={state:{currentSong:{},sound:{},seek:"00:00",duration:"00:00",playerProgress:"0%"},getters:{playing:function(e){return!!e.sound.playing&&e.sound.playing()}},mutations:{newSong:function(e,t){e.sound instanceof a["Howl"]&&e.sound.unload(),e.currentSong=t,e.sound=new a["Howl"]({src:[t.url],html5:!0})},updatePosition:function(e){e.seek=o.formatTime(e.sound.seek()),e.duration=o.formatTime(e.sound.duration()),e.playerProgress="".concat(e.sound.seek()/e.sound.duration()*100,"%")}},actions:{newSong:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,a=e.state,o=e.dispatch,r("newSong",t),a.sound.play(),a.sound.on("play",(function(){requestAnimationFrame((function(){o("progress")}))}));case 4:case"end":return n.stop()}}),n)})))()},toggleAudio:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.state,n.sound.playing){t.next=3;break}return t.abrupt("return");case 3:n.sound.playing()?n.sound.pause():n.sound.play();case 4:case"end":return t.stop()}}),t)})))()},progress:function(e){var t=e.commit,n=e.state,r=e.dispatch;t("updatePosition"),n.sound.playing()&&requestAnimationFrame((function(){r("progress")}))},updateSeek:function(e,t){var n=e.state,r=e.dispatch;if(n.sound.playing){var a=t.currentTarget.getBoundingClientRect(),o=a.x,c=a.width,i=t.clientX-o,s=i/c,l=n.sound.duration()*s;n.sound.seek(l),n.sound.once("seek",(function(){r("progress")}))}}}}},"0dda":function(e,t,n){var r={"./Button.vue":"d084"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="0dda"},"2a74":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("159b"),n("ddb0"),n("ac1f"),n("5319");var r=n("bba4"),a=n.n(r),o=n("d307"),c={};o.keys().forEach((function(e){if("./index.js"!==e&&"./dummy.js"!==e){var t=o(e),n=a()(e.replace(/(\.\/|\.js)/g,""));c[n]=t.default||t}})),t["default"]=c},"49f8":function(e,t,n){var r={"./en.json":"edd4","./fr.json":"f693"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="49f8"},"4fa8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,c){var i=Object(r["G"])("app-header"),s=Object(r["G"])("router-view"),l=Object(r["G"])("app-player"),u=Object(r["G"])("auth-modal");return Object(r["A"])(),Object(r["h"])(r["a"],null,[Object(r["k"])(i),Object(r["k"])(s,null,{default:Object(r["S"])((function(e){var t=e.Component;return[Object(r["k"])(r["c"],{name:"fade",mode:"out-in"},{default:Object(r["S"])((function(){return[(Object(r["A"])(),Object(r["f"])(Object(r["I"])(t)))]})),_:2},1024)]})),_:1}),Object(r["k"])(l),Object(r["k"])(u)],64)}var o={class:"fixed bottom-0 left-0 bg-white p-5 pb-4 text-left align-top w-full h-16"},c={class:"relative"},i={class:"float-left w-7 h-7 leading-3"},s={class:"float-left w-7 h-7 leading-3 text-gray-400 mt-0 text-lg w-14 ml-5 mt-1"},l={class:"player-currenttime"},u={class:"float-left w-7 h-7 leading-3 ml-7 mt-2 player-scrub"},d={key:0,class:"absolute left-0 right-0 text-lg text-center mx-auto player-song-info"},b={class:"song-title"},f={class:"song-artist"},m=Object(r["i"])("i",{class:"fas fa-circle"},null,-1),p=[m],g={class:"float-left w-7 h-7 leading-3 text-gray-400 mt-0 text-lg w-14 ml-8 mt-1"},h={class:"player-duration"};function j(e,t,n,a,m,j){return Object(r["A"])(),Object(r["h"])("div",o,[Object(r["i"])("div",c,[Object(r["i"])("div",i,[Object(r["i"])("button",{type:"button",onClick:t[0]||(t[0]=Object(r["U"])((function(){return e.toggleAudio&&e.toggleAudio.apply(e,arguments)}),["prevent"]))},[Object(r["i"])("i",{class:Object(r["t"])(["fa text-gray-500 text-xl",{"fa-play":!e.playing,"fa-pause":e.playing}])},null,2)])]),Object(r["i"])("div",s,[Object(r["i"])("span",l,Object(r["K"])(e.seek),1)]),Object(r["i"])("div",u,[e.currentSong.modified_name?(Object(r["A"])(),Object(r["h"])("div",d,[Object(r["i"])("span",b,Object(r["K"])(e.currentSong.modified_name),1),Object(r["i"])("span",f,"(Uploaded by "+Object(r["K"])(e.currentSong.display_name)+")",1)])):Object(r["g"])("",!0),Object(r["i"])("span",{class:"block w-full h-2 rounded m-1 mt-2 bg-gray-200 relative cursor-pointer",onClick:t[1]||(t[1]=Object(r["U"])((function(){return e.updateSeek&&e.updateSeek.apply(e,arguments)}),["prevent"]))},[Object(r["i"])("span",{class:"absolute top-neg-8 text-gray-800 text-lg",style:Object(r["u"])({left:e.playerProgress})},p,4),Object(r["i"])("span",{class:"block h-2 rounded bg-gradient-to-r from-green-500 to-green-400",style:Object(r["u"])({width:e.playerProgress})},null,4)])]),Object(r["i"])("div",g,[Object(r["i"])("span",h,Object(r["K"])(e.duration),1)])])])}var O=n("5530"),v=n("5502"),y={name:"Player",computed:Object(O["a"])(Object(O["a"])({},Object(v["c"])(["playing"])),Object(v["e"])({seek:function(e){return e.player.seek},duration:function(e){return e.player.duration},playerProgress:function(e){return e.player.playerProgress},currentSong:function(e){return e.player.currentSong}})),methods:Object(O["a"])({},Object(v["b"])(["toggleAudio","updateSeek"]))},x=n("d959"),w=n.n(x);const k=w()(y,[["render",j]]);var _=k,A={id:"header",class:"bg-gray-700"},S={class:"container mx-auto flex justify-start items-center py-5 px-4"},M=Object(r["j"])(" Music "),P={class:"flex flex-grow items-center"},C={class:"flex flex-row mt-1"},E=Object(r["j"])(" About "),z={key:0},T=Object(r["j"])(" Manage "),L={class:"flex flex-row mt-1 ml-auto"},U=["value"];function R(e,t,n,a,o,c){var i=Object(r["G"])("router-link");return Object(r["A"])(),Object(r["h"])("header",A,[Object(r["i"])("nav",S,[Object(r["k"])(i,{class:"text-white font-bold uppercase text-2xl mr-4",to:{name:"home"},"exact-active-class":"no-active"},{default:Object(r["S"])((function(){return[M]})),_:1}),Object(r["i"])("div",P,[Object(r["i"])("ul",C,[Object(r["i"])("li",null,[Object(r["k"])(i,{class:"px-2 text-white",to:{name:"about"}},{default:Object(r["S"])((function(){return[E]})),_:1})]),e.userLoggedIn?(Object(r["A"])(),Object(r["h"])(r["a"],{key:1},[Object(r["i"])("li",null,[Object(r["k"])(i,{class:"px-2 text-white",to:{name:"manage"}},{default:Object(r["S"])((function(){return[T]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])("a",{class:"px-2 text-white",href:"#",onClick:t[1]||(t[1]=Object(r["U"])((function(){return c.signout&&c.signout.apply(c,arguments)}),["prevent"]))},"Logout")])],64)):(Object(r["A"])(),Object(r["h"])("li",z,[Object(r["i"])("a",{class:"px-2 text-white",href:"#",onClick:t[0]||(t[0]=Object(r["U"])((function(){return e.toggleAuthModal&&e.toggleAuthModal.apply(e,arguments)}),["prevent"]))}," Login / Register ")]))]),Object(r["i"])("ul",L,[Object(r["i"])("li",null,[Object(r["T"])(Object(r["i"])("select",{class:"px-2 text-white bg-transparent","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.$i18n.locale=t})},[(Object(r["A"])(!0),Object(r["h"])(r["a"],null,Object(r["F"])(o.locales,(function(e,t){return Object(r["A"])(),Object(r["h"])("option",{key:"Locale".concat(t),value:e},Object(r["K"])(e),9,U)})),128))],512),[[r["N"],e.$i18n.locale]])])])])])])}var q={name:"Header",data:function(){return{locales:["en","fr"]}},computed:Object(O["a"])({},Object(v["e"])({userLoggedIn:function(e){return e.auth.userLoggedIn}})),methods:Object(O["a"])(Object(O["a"])({},Object(v["d"])(["toggleAuthModal"])),{},{signout:function(){this.$store.dispatch("signout"),this.$route.meta.requiresAuth&&this.$router.push({name:"home"})}})};const F=w()(q,[["render",R]]);var G=F,D={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},I=Object(r["i"])("div",{class:"fixed inset-0 transition-opacity"},[Object(r["i"])("div",{class:"absolute inset-0 bg-gray-800 opacity-75"})],-1),N=Object(r["i"])("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"},"​",-1),K={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},$={class:"py-4 text-left px-6"},Y={class:"flex justify-between items-center pb-4"},B={class:"text-2xl font-bold"},H=Object(r["i"])("i",{class:"fas fa-times"},null,-1),V=[H],W={class:"flex flex-wrap mb-4"},J={class:"flex-auto text-center"},Z={class:"flex-auto text-center"};function X(e,t,n,a,o,c){var i=Object(r["G"])("app-login-form"),s=Object(r["G"])("app-register-form");return Object(r["A"])(),Object(r["h"])("div",{class:Object(r["t"])(["fixed z-10 inset-0 overflow-y-auto",{hidden:!e.authModalShow}]),id:"modal"},[Object(r["i"])("div",D,[I,N,Object(r["i"])("div",K,[Object(r["i"])("div",$,[Object(r["i"])("div",Y,[Object(r["i"])("p",B,Object(r["K"])(e.$t("auth.account")),1),Object(r["i"])("div",{class:"modal-close cursor-pointer z-50",onClick:t[0]||(t[0]=Object(r["U"])((function(){return e.toggleAuthModal&&e.toggleAuthModal.apply(e,arguments)}),["prevent"]))},V)]),Object(r["i"])("ul",W,[Object(r["i"])("li",J,[Object(r["i"])("a",{class:Object(r["t"])(["block rounded py-3 px-4 transition",{"hover:text-white text-white bg-blue-600":"login"===o.tab,"hover:text-blue-600":"register"===o.tab}]),href:"#",onClick:t[1]||(t[1]=Object(r["U"])((function(e){return o.tab="login"}),["prevent"]))},Object(r["K"])(e.$t("auth.login")),3)]),Object(r["i"])("li",Z,[Object(r["i"])("a",{class:Object(r["t"])(["block rounded py-3 px-4 transition",{"hover:text-white text-white bg-blue-600":"register"===o.tab,"hover:text-blue-600":"login"===o.tab}]),href:"#",onClick:t[2]||(t[2]=Object(r["U"])((function(e){return o.tab="register"}),["prevent"]))},Object(r["K"])(e.$t("auth.register")),3)])]),"login"===o.tab?(Object(r["A"])(),Object(r["f"])(i,{key:0})):(Object(r["A"])(),Object(r["f"])(s,{key:1}))])])])],2)}var Q={class:"mb-3"},ee=Object(r["i"])("label",{class:"inline-block mb-2"},"Email",-1),te={class:"mb-3"},ne=Object(r["i"])("label",{class:"inline-block mb-2"},"Password",-1),re=["disabled"];function ae(e,t,n,a,o,c){var i=Object(r["G"])("vee-field"),s=Object(r["G"])("ErrorMessage"),l=Object(r["G"])("vee-form");return Object(r["A"])(),Object(r["h"])(r["a"],null,[o.login_show_alert?(Object(r["A"])(),Object(r["h"])("div",{key:0,class:Object(r["t"])(["text-white text-center font-bold p-4 mb-4",o.login_alert_variant])},Object(r["K"])(o.login_alert_msg),3)):Object(r["g"])("",!0),Object(r["k"])(l,{"validation-schema":o.loginSchema,onSubmit:c.login},{default:Object(r["S"])((function(){return[Object(r["i"])("div",Q,[ee,Object(r["k"])(i,{type:"email",name:"email",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Email"}),Object(r["k"])(s,{class:"text-red-600",name:"email"})]),Object(r["i"])("div",te,[ne,Object(r["k"])(i,{type:"password",name:"password",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Password"}),Object(r["k"])(s,{class:"text-red-600",name:"email"})]),Object(r["i"])("button",{type:"submit",disabled:o.login_in_submission,class:"block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"}," Submit ",8,re)]})),_:1},8,["validation-schema","onSubmit"])],64)}var oe=n("1da1"),ce=(n("96cf"),{name:"LoginForm",data:function(){return{loginSchema:{email:"required|min:3|max:100|email",password:"required|min:3|max:100"},login_in_submission:!1,login_show_alert:!1,login_alert_variant:"bg-blue-500",login_alert_msg:"Please wait! We are logging you in."}},methods:{login:function(e){var t=this;return Object(oe["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.login_show_alert=!0,t.login_in_submission=!0,t.login_alert_variant="bg-blue-500",t.login_alert_msg="Please wait! We are logging you in.",n.prev=4,n.next=7,t.$store.dispatch("login",e);case 7:n.next=15;break;case 9:return n.prev=9,n.t0=n["catch"](4),t.login_in_submission=!1,t.login_alert_variant="bg-red-500",t.login_alert_msg="Invalid login details",n.abrupt("return");case 15:t.login_alert_variant="bg-green-500",t.login_alert_msg="Success! You are now logged in.",window.location.reload();case 18:case"end":return n.stop()}}),n,null,[[4,9]])})))()}}});const ie=w()(ce,[["render",ae]]);var se=ie,le={class:"mb-3"},ue=Object(r["i"])("label",{class:"inline-block mb-2"},"Name",-1),de={class:"mb-3"},be=Object(r["i"])("label",{class:"inline-block mb-2"},"Email",-1),fe={class:"mb-3"},me=Object(r["i"])("label",{class:"inline-block mb-2"},"Age",-1),pe={class:"mb-3"},ge=Object(r["i"])("label",{class:"inline-block mb-2"},"Password",-1),he={class:"mb-3"},je=Object(r["i"])("label",{class:"inline-block mb-2"},"Confirm Password",-1),Oe={class:"mb-3"},ve=Object(r["i"])("label",{class:"inline-block mb-2"},"Country",-1),ye=Object(r["i"])("option",{value:"USA"},"USA",-1),xe=Object(r["i"])("option",{value:"Mexico"},"Mexico",-1),we=Object(r["i"])("option",{value:"Germany"},"Germany",-1),ke=Object(r["i"])("option",{value:"Antarctica"},"Antarctica",-1),_e={class:"mb-3"},Ae=Object(r["i"])("label",{class:"inline-block mb-2"},"Reason for Registration",-1),Se=Object(r["i"])("option",{value:"Listener"},"Listerer",-1),Me=Object(r["i"])("option",{value:"Artist"},"Artist",-1),Pe={class:"mb-3 pl-6"},Ce={href:"#"},Ee=["disabled"];function ze(e,t,n,a,o,c){var i=Object(r["G"])("vee-field"),s=Object(r["G"])("ErrorMessage"),l=Object(r["G"])("i18n-t"),u=Object(r["G"])("vee-form");return Object(r["A"])(),Object(r["h"])("main",null,[o.reg_show_alert?(Object(r["A"])(),Object(r["h"])("div",{key:0,class:Object(r["t"])(["text-white text-center font-bold p-4 mb-4",o.reg_alert_variant])},Object(r["K"])(o.reg_alert_msg),3)):Object(r["g"])("",!0),Object(r["k"])(u,{"validation-schema":o.registerSchema,onSubmit:c.register,"initial-values":o.userData},{default:Object(r["S"])((function(){return[Object(r["i"])("div",le,[ue,Object(r["k"])(i,{type:"text",name:"name",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Name"}),Object(r["k"])(s,{class:"text-red-600",name:"name"})]),Object(r["i"])("div",de,[be,Object(r["k"])(i,{type:"email",name:"email",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Email"}),Object(r["k"])(s,{class:"text-red-600",name:"email"})]),Object(r["i"])("div",fe,[me,Object(r["k"])(i,{type:"number",name:"age",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"}),Object(r["k"])(s,{class:"text-red-600",name:"age"})]),Object(r["i"])("div",pe,[ge,Object(r["k"])(i,{name:"password",bails:!1},{default:Object(r["S"])((function(e){var t=e.field,n=e.errors;return[Object(r["i"])("input",Object(r["r"])({type:"password",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Password"},t),null,16),(Object(r["A"])(!0),Object(r["h"])(r["a"],null,Object(r["F"])(n,(function(e){return Object(r["A"])(),Object(r["h"])("div",{class:"text-red-600",key:e},Object(r["K"])(e),1)})),128))]})),_:1})]),Object(r["i"])("div",he,[je,Object(r["k"])(i,{type:"password",name:"confirm_password",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Confirm Password"}),Object(r["k"])(s,{class:"text-red-600",name:"confirm_password"})]),Object(r["i"])("div",Oe,[ve,Object(r["k"])(i,{as:"select",name:"country",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"},{default:Object(r["S"])((function(){return[ye,xe,we,ke]})),_:1}),Object(r["k"])(s,{class:"text-red-600",name:"country"})]),Object(r["i"])("div",_e,[Ae,Object(r["k"])(i,{as:"select",name:"reason",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"},{default:Object(r["S"])((function(){return[Se,Me]})),_:1}),Object(r["k"])(s,{class:"text-red-600",name:"reason"})]),Object(r["i"])("div",Pe,[Object(r["k"])(i,{type:"checkbox",name:"tos",value:"1",class:"w-4 h-4 float-left -ml-6 mt-1 rounded"}),Object(r["k"])(s,{class:"text-red-600 block",name:"tos"}),Object(r["k"])(l,{class:"inline-block",keypath:"register.accept",tag:"label"},{default:Object(r["S"])((function(){return[Object(r["i"])("a",Ce,Object(r["K"])(e.$t("register.TOS")),1)]})),_:1})]),Object(r["i"])("button",{type:"submit",disabled:o.reg_in_submission,class:"block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"}," Submit ",8,Ee)]})),_:1},8,["validation-schema","onSubmit","initial-values"])])}var Te={name:"RegisterForm",data:function(){return{registerSchema:{name:"required|min:3|max:100|alpha_spaces",email:"required|min:3|max:100|email",age:"required|min_value:18|max_value:120",password:"required|min:6|max:100",confirm_password:"passwords_mismatch:@password",country:"required|country_excluded:Antarctica",reason:"required",tos:"tos"},userData:{country:"USA",reason:"Listener"},reg_in_submission:!1,reg_show_alert:!1,reg_alert_variant:"bg-blue-500",reg_alert_msg:"Please wait! Your account is being created."}},methods:{register:function(e){var t=this;return Object(oe["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.reg_show_alert=!0,t.reg_in_submission=!0,t.reg_alert_variant="bg-blue-500",t.reg_alert_msg="Please wait! Your account is being created.",n.prev=4,n.next=7,t.$store.dispatch("register",e);case 7:n.next=15;break;case 9:return n.prev=9,n.t0=n["catch"](4),t.reg_in_submission=!1,t.reg_alert_variant="bg-red-500",t.reg_alert_msg="An unexpected error occured. Please try again later.",n.abrupt("return");case 15:t.reg_alert_variant="bg-green-500",t.reg_alert_msg="Success! Your account has been created.",window.location.reload();case 18:case"end":return n.stop()}}),n,null,[[4,9]])})))()}}};const Le=w()(Te,[["render",ze]]);var Ue=Le,Re={name:"Auth",components:{AppLoginForm:se,AppRegisterForm:Ue},data:function(){return{tab:"login"}},computed:Object(O["a"])({},Object(v["e"])({authModalShow:function(e){return e.auth.authModalShow}})),methods:Object(O["a"])({},Object(v["d"])(["toggleAuthModal"]))};const qe=w()(Re,[["render",X]]);var Fe=qe,Ge={name:"App",components:{AppHeader:G,AuthModal:Fe,AppPlayer:_},created:function(){this.$store.dispatch("init_login")}};n("ed12");const De=w()(Ge,[["render",a]]);var Ie=De,Ne=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),Ke=n("2a74"),$e=Object(v["a"])({modules:Ke["default"]}),Ye=function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},Be=function(){return n.e("chunk-6a669ad4").then(n.bind(null,"f820"))},He=function(){return n.e("groupedChunk").then(n.bind(null,"f74b"))},Ve=function(){return n.e("groupedChunk").then(n.bind(null,"8dc3"))},We=[{name:"home",path:"/",component:Ye},{name:"about",path:"/about",component:Be},{name:"manage",path:"/manage-music",meta:{requiresAuth:!0},component:He,beforeEnter:function(e,t,n){n()}},{path:"/manage",redirect:{name:"manage"}},{name:"song",path:"/song/:id",component:Ve},{path:"/:catchAll(.*)*",redirect:{name:"home"}}],Je=Object(Ne["a"])({history:Object(Ne["b"])("/"),routes:We,linkExactActiveClass:"text-yellow-500"});Je.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?$e.state.auth.userLoggedIn?n():n({name:"home"}):n()}));var Ze=Je,Xe=(n("b0c0"),n("7bb1")),Qe=n("3aa8"),et={install:function(e){e.component("VeeForm",Xe["c"]),e.component("VeeField",Xe["b"]),e.component("ErrorMessage",Xe["a"]),Object(Xe["e"])("required",Qe["i"]),Object(Xe["e"])("tos",Qe["i"]),Object(Xe["e"])("min",Qe["f"]),Object(Xe["e"])("max",Qe["d"]),Object(Xe["e"])("alpha_spaces",Qe["a"]),Object(Xe["e"])("email",Qe["c"]),Object(Xe["e"])("min_value",Qe["g"]),Object(Xe["e"])("max_value",Qe["e"]),Object(Xe["e"])("passwords_mismatch",Qe["b"]),Object(Xe["e"])("excluded",Qe["h"]),Object(Xe["e"])("country_excluded",Qe["h"]),Object(Xe["d"])({generateMessage:function(e){var t={required:"The field ".concat(e.field," is required."),min:"The field ".concat(e.field," is too short."),max:"The field ".concat(e.field," is too long."),alpha_spaces:"The field ".concat(e.field," may only contain alphabetical characters and spaces."),email:"The field ".concat(e.field," must be a valid email."),min_value:"The field ".concat(e.field," is too low."),max_value:"The field ".concat(e.field," is too high."),excluded:"You are not allowed to use this value for the field ".concat(e.field,"."),country_excluded:"Due to restrictions, we do not accept users from this location.",passwords_mismatch:"The passwords don't match.",tos:"You must accept the Terms of Service."},n=t[e.rule.name]?t[e.rule.name]:"The field ".concat(e.field," is invalid.");return n},validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0})}},tt=n("b79f"),nt={beforeMount:function(e,t){var n="fa fa-".concat(t.value," text-xl");"full"===t.arg&&(n=t.value),t.modifiers.right&&(n+=" float-right"),t.modifiers.yellow?n+=" text-yellow-400":n+=" text-green-400",e.innerHTML+='<i class="'.concat(n,'"></i>')}},rt=(n("ba8c"),n("845f"),n("159b"),n("ac1f"),n("466d"),n("47e2"));function at(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var a=r[1];t[a]=e(n).default}})),t}var ot=Object(rt["a"])({locale:"en",fallbackLocale:"en",messages:at(),numberFormats:{en:{currency:{style:"currency",currency:"USD"}},ja:{currency:{style:"currency",currency:"JPY"}}}}),ct=n("9483");Object(ct["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("5319");var it,st=n("2ef0"),lt=n.n(st),ut={install:function(e){var t=n("0dda");t.keys().forEach((function(n){var r=t(n),a=lt.a.upperFirst(lt.a.camelCase(n.replace(/^\.\//,"").replace(/\.\w+$/,"")));e.component("Base".concat(a),r.default||r)}))}},dt=n("323e"),bt=n.n(dt),ft=function(e){e.beforeEach((function(e,t,n){bt.a.start(),n()})),e.afterEach(bt.a.done)};n("a5d8");ft(Ze),tt["a"].onAuthStateChanged((function(){it||(it=Object(r["e"])(Ie).use(ot),it.use($e),it.use(Ze),it.use(et),it.use(ut),it.directive("icon",nt),it.mount("#app"))}))},"75a0":function(e,t,n){"use strict";n.r(t),t["default"]={state:{foo:"bar"}}},"845f":function(e,t,n){},b79f:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return i}));var r=n("260b"),a=(n("ea7b"),n("e71f"),n("588e"),{apiKey:"AIzaSyDMitS7VjxmzNuMR0GZumKE_o3tuDA9WDM",authDomain:"music-9ca17.firebaseapp.com",projectId:"music-9ca17",storageBucket:"music-9ca17.appspot.com",appId:"1:522963475139:web:4ad8ce6bd57af36e552076"});r["a"].initializeApp(a);var o=r["a"].auth(),c=r["a"].firestore(),i=r["a"].storage();c.enablePersistence().catch((function(e){console.log("Firebase persistance error ".concat(e.code))}));var s=c.collection("users"),l=c.collection("songs"),u=c.collection("comments")},ba8c:function(e,t,n){},c7d4:function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=(n("96cf"),n("b0c0"),n("b79f"));t["default"]={state:{authModalShow:!1,userLoggedIn:!1},mutations:{toggleAuthModal:function(e){e.authModalShow=!e.authModalShow},toggleAuth:function(e){e.userLoggedIn=!e.userLoggedIn}},actions:{register:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,a["a"].createUserWithEmailAndPassword(t.email,t.password);case 3:return o=n.sent,n.next=6,a["e"].doc(o.user.uid).set({name:t.name,email:t.email,age:t.age,country:t.country,reason:t.reason});case 6:return n.next=8,o.user.updateProfile({displayName:t.name});case 8:r("toggleAuth");case 9:case"end":return n.stop()}}),n)})))()},login:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,a["a"].signInWithEmailAndPassword(t.email,t.password);case 3:r("toggleAuth");case 4:case"end":return n.stop()}}),n)})))()},init_login:function(e){var t=e.commit,n=a["a"].currentUser;n&&t("toggleAuth")},signout:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,a["a"].signOut();case 3:n("toggleAuth");case 4:case"end":return t.stop()}}),t)})))()}}}},d084:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={type:"button"};function o(e,t){return Object(r["A"])(),Object(r["h"])("button",a,"Press me!")}var c=n("d959"),i=n.n(c);const s={},l=i()(s,[["render",o]]);t["default"]=l},d307:function(e,t,n){var r={"./auth.js":"c7d4","./dummy.js":"75a0","./index.js":"2a74","./player.js":"051f"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="d307"},ed12:function(e,t,n){"use strict";n("4fa8")},edd4:function(e,t,n){"use strict";n.r(t),t["default"]={about:{description:e=>{const{normalize:t}=e;return t(["This is an about page"])}},auth:{account:e=>{const{normalize:t}=e;return t(["Your Account"])},login:e=>{const{normalize:t}=e;return t(["Login"])},register:e=>{const{normalize:t}=e;return t(["Register"])}},home:{listen:e=>{const{normalize:t}=e;return t(["Listen to Great Music!"])}},manage:{my_songs:e=>{const{normalize:t}=e;return t(["My songs"])}},register:{TOS:e=>{const{normalize:t}=e;return t(["Terms of Service"])},accept:e=>{const{normalize:t,interpolate:n,list:r}=e;return t(["I accept Music's ",n(r(0))])}},song:{comment_count:e=>{const{normalize:t,interpolate:n,named:r,plural:a}=e;return a([t(["No Comments"]),t(["1 Comment"]),t([n(r("count"))," Comments"])])}},upload:{dropbox:e=>{const{normalize:t}=e;return t(["Drop your files here"])},title:e=>{const{normalize:t}=e;return t(["Upload"])}}}},f693:function(e,t,n){"use strict";n.r(t),t["default"]={about:{description:e=>{const{normalize:t}=e;return t(["Ceci est une page à propos"])}},auth:{account:e=>{const{normalize:t}=e;return t([" Votre compte"])},login:e=>{const{normalize:t}=e;return t(["Login"])},register:e=>{const{normalize:t}=e;return t(["S'inscrire"])}},home:{listen:e=>{const{normalize:t}=e;return t(["Écoutez de la bonne musique!"])}},manage:{my_songs:e=>{const{normalize:t}=e;return t(["Mes chansons"])}},register:{TOS:e=>{const{normalize:t}=e;return t([])},accept:e=>{const{normalize:t}=e;return t([])}},upload:{dropbox:e=>{const{normalize:t}=e;return t(["Déposez vos fichiers ici"])},title:e=>{const{normalize:t}=e;return t(["Titre"])}}}}});
//# sourceMappingURL=app.e2f054f1.js.map