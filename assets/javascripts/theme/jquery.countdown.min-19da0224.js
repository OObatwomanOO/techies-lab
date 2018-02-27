/*!
 * The Final Countdown for jQuery v2.0.2 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2013 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){"use strict";function e(t){if(t instanceof Date)return t;if(String(t).match(a))return String(t).match(/^[0-9]*$/)&&(t=Number(t)),new Date(t);throw new Error("Couldn't cast `"+t+"` to a date object.")}function s(t){return function(e){var s=e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(s)for(var i=0,o=s.length;o>i;++i){var a=s[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),h=new RegExp(a[0]),l=a[1]||"",c=a[3]||"",u=null;a=a[2],r.hasOwnProperty(a)&&(u=r[a],u=Number(t[u])),null!==u&&("!"===l&&(u=n(c,u)),""===l&&10>u&&(u="0"+u.toString()),e=e.replace(h,u.toString()))}return e=e.replace(/%%/,"%")}}function n(t,e){var s="s",n="";return t&&(t=t.replace(/(:|;|\s)/gi,"").split(/\,/),1===t.length?s=t[0]:(n=t[0],s=t[1])),1===Math.abs(e)?n:s}var i=100,o=[],a=[];a.push(/^[0-9]*$/.source),a.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),a.push(/[0-9]{4}(\/[0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),a=new RegExp(a.join("|"));var r={Y:"years",m:"months",w:"weeks",d:"days",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},h=function(e,s,n){this.el=e,this.$el=t(e),this.interval=null,this.offset={},this.setFinalDate(s),this.instanceNumber=o.length,o.push(this),this.$el.data("countdown-instance",this.instanceNumber),n&&(this.$el.on("update.countdown",n),this.$el.on("stoped.countdown",n),this.$el.on("finish.countdown",n)),this.start()};t.extend(h.prototype,{start:function(){if(null!==this.interval)throw new Error("Countdown is already running!");var t=this;this.update(),this.interval=setInterval(function(){t.update.call(t)},i)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},pause:function(){this.stop.call(this)},resume:function(){this.start.call(this)},remove:function(){this.stop(),delete o[this.instanceNumber]},setFinalDate:function(t){this.finalDate=e(t)},update:function(){return 0===this.$el.closest("html").length?void this.remove():(this.totalSecsLeft=this.finalDate.valueOf()-(new Date).valueOf(),this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3),this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)},void(0===this.totalSecsLeft?(this.stop(),this.dispatchEvent("finish")):this.dispatchEvent("update")))},dispatchEvent:function(e){var n=t.Event(e+".countdown");n.finalDate=this.finalDate,n.offset=t.extend({},this.offset),n.strftime=s(this.offset),this.$el.trigger(n)}}),t.fn.countdown=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){var s=t(this).data("countdown-instance");if(void 0!==s){var n=o[s],i=e[0];h.prototype.hasOwnProperty(i)?n[i].apply(n,e.slice(1)):null===String(i).match(/^[$A-Z_][0-9A-Z_$]*$/i)?n.setFinalDate.call(n,i):t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,i))}else new h(this,e[0],e[1])})}});