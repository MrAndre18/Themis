!function(e){function t(t){for(var r,l,a=t[0],c=t[1],u=t[2],s=0,p=[];s<a.length;s++)l=a[s],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var f=c;i.push([1,1,2]),n()}([,function(e,t,n){"use strict";n.r(t),function(e){n(0),n(2);e((function(){n(3),n(4),n(5)}))}.call(this,n(0))},function(e,t,n){},function(e,t,n){(function(e,t){e("img.svg").each((function(){var n=t(this),r=n.attr("src"),o=n.prop("attributes");e.get(r,(function(r){var i=t(r).find("svg");i=i.removeAttr("xmlns:a"),e.each(o,(function(){i.attr(this.name,this.value)})),n.replaceWith(i)}),"xml")}))}).call(this,n(0),n(0))},function(e,t,n){(function(e){if(e(".header")){var t=e(".header");e(window).on("scroll",(function(){e(window).scrollTop()>100?t.addClass("scrolled"):t.removeClass("scrolled")}))}}).call(this,n(0))},function(e,t,n){(function(e){if(e(".index"))new Swiper(".first-screen__slider",{speed:600,slidesPerView:1,effect:"fade",autoplay:{delay:1e4,disableOnInteraction:!1,waitForTransition:!1}})}).call(this,n(0))}]);