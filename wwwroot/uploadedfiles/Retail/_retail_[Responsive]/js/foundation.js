var libFuncName=null;if(typeof jQuery==="undefined"&&typeof Zepto==="undefined"&&typeof $==="function"){libFuncName=$}else if(typeof jQuery==="function"){libFuncName=jQuery}else if(typeof Zepto==="function"){libFuncName=Zepto}else{throw new TypeError}(function(e,t,n,r){"use strict";e("head").append('<meta class="foundation-mq-small">');e("head").append('<meta class="foundation-mq-medium">');e("head").append('<meta class="foundation-mq-large">');t.matchMedia=t.matchMedia||function(e,t){"use strict";var n,r=e.documentElement,i=r.firstElementChild||r.firstChild,s=e.createElement("body"),o=e.createElement("div");o.id="mq-test-1";o.style.cssText="position:absolute;top:-100em";s.style.background="none";s.appendChild(o);return function(e){o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>';r.insertBefore(s,i);n=o.offsetWidth===42;r.removeChild(s);return{matches:n,media:e}}}(n);if(!Array.prototype.filter){Array.prototype.filter=function(e){"use strict";if(this==null){throw new TypeError}var t=Object(this),n=t.length>>>0;if(typeof e!=="function"){return}var r=[],i=arguments[1];for(var s=0;s<n;s++){if(s in t){var o=t[s];if(e&&e.call(i,o,s,t)){r.push(o)}}}return r}}if(!Function.prototype.bind){Function.prototype.bind=function(e){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")}var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},i=function(){return n.apply(this instanceof r&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};r.prototype=this.prototype;i.prototype=new r;return i}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e){"use strict";if(this==null){throw new TypeError}var t=Object(this);var n=t.length>>>0;if(n===0){return-1}var r=0;if(arguments.length>1){r=Number(arguments[1]);if(r!=r){r=0}else if(r!=0&&r!=Infinity&&r!=-Infinity){r=(r>0||-1)*Math.floor(Math.abs(r))}}if(r>=n){return-1}var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++){if(i in t&&t[i]===e){return i}}return-1}}e.fn.stop=e.fn.stop||function(){return this};t.Foundation={name:"Foundation",version:"4.3.2",cache:{},media_queries:{small:e(".foundation-mq-small").css("font-family").replace(/\'/g,""),medium:e(".foundation-mq-medium").css("font-family").replace(/\'/g,""),large:e(".foundation-mq-large").css("font-family").replace(/\'/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,init:function(t,n,r,i,s,o){var u,a=[t,r,i,s],f=[],o=o||false;if(o)this.nc=o;this.rtl=/rtl/i.test(e("html").attr("dir"));this.scope=t||this.scope;if(n&&typeof n==="string"&&!/reflow/i.test(n)){if(/off/i.test(n))return this.off();u=n.split(" ");if(u.length>0){for(var l=u.length-1;l>=0;l--){f.push(this.init_lib(u[l],a))}}}else{if(/reflow/i.test(n))a[1]="reflow";for(var c in this.libs){f.push(this.init_lib(c,a))}}if(typeof n==="function"){a.unshift(n)}return this.response_obj(f,a)},response_obj:function(e,t){for(var n=0,r=t.length;n<r;n++){if(typeof t[n]==="function"){return t[n]({errors:e.filter(function(e){if(typeof e==="string")return e})})}}return e},init_lib:function(e,t){return this.trap(function(){if(this.libs.hasOwnProperty(e)){this.patch(this.libs[e]);return this.libs[e].init.apply(this.libs[e],t)}else{return function(){}}}.bind(this),e)},trap:function(e,t){if(!this.nc){try{return e()}catch(n){return this.error({name:t,message:"could not be initialized",more:n.name+" "+n.message})}}return e()},patch:function(e){this.fix_outer(e);e.scope=this.scope;e.rtl=this.rtl},inherit:function(e,t){var n=t.split(" ");for(var r=n.length-1;r>=0;r--){if(this.lib_methods.hasOwnProperty(n[r])){this.libs[e.name][n[r]]=this.lib_methods[n[r]]}}},random_str:function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");if(!e){e=Math.floor(Math.random()*t.length)}var n="";for(var r=0;r<e;r++){n+=t[Math.floor(Math.random()*t.length)]}return n},libs:{},lib_methods:{set_data:function(e,t){var n=[this.name,+(new Date),Foundation.random_str(5)].join("-");Foundation.cache[n]=t;e.attr("data-"+this.name+"-id",n);return t},get_data:function(e){return Foundation.cache[e.attr("data-"+this.name+"-id")]},remove_data:function(t){if(t){delete Foundation.cache[t.attr("data-"+this.name+"-id")];t.attr("data-"+this.name+"-id","")}else{e("[data-"+this.name+"-id]").each(function(){delete Foundation.cache[e(this).attr("data-"+this.name+"-id")];e(this).attr("data-"+this.name+"-id","")})}},throttle:function(e,t){var n=null;return function(){var r=this,i=arguments;clearTimeout(n);n=setTimeout(function(){e.apply(r,i)},t)}},data_options:function(t){function u(e){return!isNaN(e-0)&&e!==null&&e!==""&&e!==false&&e!==true}function a(t){if(typeof t==="string")return e.trim(t);return t}var n={},r,i,s=(t.attr("data-options")||":").split(";"),o=s.length;for(r=o-1;r>=0;r--){i=s[r].split(":");if(/true/i.test(i[1]))i[1]=true;if(/false/i.test(i[1]))i[1]=false;if(u(i[1]))i[1]=parseInt(i[1],10);if(i.length===2&&i[0].length>0){n[a(i[0])]=a(i[1])}}return n},delay:function(e,t){return setTimeout(e,t)},scrollTo:function(n,r,i){if(i<0)return;var s=r-e(t).scrollTop();var o=s/i*10;this.scrollToTimerCache=setTimeout(function(){if(!isNaN(parseInt(o,10))){t.scrollTo(0,e(t).scrollTop()+o);this.scrollTo(n,r,i-10)}}.bind(this),10)},scrollLeft:function(e){if(!e.length)return;return"scrollLeft"in e[0]?e[0].scrollLeft:e[0].pageXOffset},empty:function(e){if(e.length&&e.length>0)return false;if(e.length&&e.length===0)return true;for(var t in e){if(hasOwnProperty.call(e,t))return false}return true},addCustomRule:function(e,t){if(t===r){Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length)}else{var n=Foundation.media_queries[t];if(n!==r){Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }")}}}},fix_outer:function(e){e.outerHeight=function(e,t){if(typeof Zepto==="function"){return e.height()}if(typeof t!=="undefined"){return e.outerHeight(t)}return e.outerHeight()};e.outerWidth=function(e,t){if(typeof Zepto==="function"){return e.width()}if(typeof t!=="undefined"){return e.outerWidth(t)}return e.outerWidth()}},error:function(e){return e.name+" "+e.message+"; "+e.more},off:function(){e(this.scope).off(".fndtn");e(t).off(".fndtn");return true},zj:e};e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){Foundation.init.apply(Foundation,[this].concat(e));return this})}})(libFuncName,this,this.document)