module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/risk/4c/",e(e.s="QfWi")}({GFNa:function(t,n,e){},H4m1:function(t,n,e){"use strict";e.d(n,"f",(function(){return r})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return a})),e.d(n,"a",(function(){return s})),e.d(n,"e",(function(){return u}));var r={age:{scores:{"18-49":0,"50-59":2,"60-69":4,"70-79":6,"⩾80":7},name:"Age (years)"},sex:{scores:{Female:0,Male:1},name:"Sex at birth"},comorbidities:{scores:{0:0,1:1,"⩾2":2},name:"Number of comorbidities",help:"Chronic cardiac disease; chronic respiratory disease (excluding asthma); chronic renal disease (estimated\nglomerular filtration rate ≤30); mild-to-severe liver disease; dementia; chronic neurological conditions;\nconnective tissue disease; diabetes mellitus (diet, tablet or insulin-controlled); HIV/AIDS;\nmalignancy; clinician-defined obesity."},respiratory_rate:{scores:{"<20":0,"20-29":1,"⩾30":2},name:"Respiratory rate (breaths/minutes)"},oxygen_saturation:{scores:{"<92":2,"⩾92":0},name:"Peripheral oxygen saturation on room air (%)"},gcs:{scores:{"<15":2,15:0},order:["<15","15"],name:"Glasgow Coma Scale"},urea:{scores:{"⩽7":0,"7-14":1,">14":3},name:"Urea (mmol/L)",altScores:{"⩽19.6":0,"19.6-39.2":1,">39.2":3},altName:"BUN (mg/dL)"},crp:{scores:{"<50":0,"50-99":1,"⩾100":2},name:"CRP (mg/L)",altScores:{"<5":0,"5-9.9":1,"⩾10":2},altName:"CRP (mg/dL)"}},i=[{name:"Low",min:0,max:3,color:"#fee5d9",mortality:"1.2%"},{name:"Intermediate",min:4,max:8,color:"#fcae91",mortality:"9.9%"},{name:"High",min:9,max:14,color:"#fb6a4a",mortality:"31.4%"},{name:"Very High",min:15,max:21,color:"#cb181d",mortality:"61.5%"}],o=[160,329,485,645,759,759,919,1097,1308,1620,1864,2050,2185,2118,1780,1455,1109,725,455,223,101,33],a=[0,.2976190476190476,.8064516129032258,2.3112480739599386,4.805194805194805,7.474226804123711,7.783783783783784,11.695376246600182,14.448669201520913,19.164619164619165,22.899946495452113,26.91561590688652,32.90793072014585,40.13188883655205,44.57494407158837,51.63934426229508,59.10313901345292,66.12244897959184,75.80993520518359,77.3913043478261,82.88288288288288,87.5],s=Array.apply(null,Array(22)).map((function(t,n){return n})),u=[];for(var l in i)for(var c=i[l],h=c.min;h<=c.max;h++)u[h]=c.color},HteQ:function(t,n){t.exports=require("preact")},NBGV:function(t,n,e){"use strict";var r=Math.PI,i=2*r,o=i-1e-6;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new a}a.prototype=s.prototype={constructor:a,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,i,o){t=+t,n=+n,e=+e,i=+i,o=+o;var a=this._x1,s=this._y1,u=e-t,l=i-n,c=a-t,h=s-n,f=c*c+h*h;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(f>1e-6)if(Math.abs(h*u-l*c)>1e-6&&o){var _=e-a,p=i-s,m=u*u+l*l,d=_*_+p*p,y=Math.sqrt(m),g=Math.sqrt(f),b=o*Math.tan((r-Math.acos((m+f-d)/(2*y*g)))/2),v=b/g,x=b/y;Math.abs(v-1)>1e-6&&(this._+="L"+(t+v*c)+","+(n+v*h)),this._+="A"+o+","+o+",0,0,"+ +(h*_>c*p)+","+(this._x1=t+x*u)+","+(this._y1=n+x*l)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,a,s,u){t=+t,n=+n,u=!!u;var l=(e=+e)*Math.cos(a),c=e*Math.sin(a),h=t+l,f=n+c,_=1^u,p=u?a-s:s-a;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+h+","+f:(Math.abs(this._x1-h)>1e-6||Math.abs(this._y1-f)>1e-6)&&(this._+="L"+h+","+f),e&&(p<0&&(p=p%i+i),p>o?this._+="A"+e+","+e+",0,1,"+_+","+(t-l)+","+(n-c)+"A"+e+","+e+",0,1,"+_+","+(this._x1=h)+","+(this._y1=f):p>1e-6&&(this._+="A"+e+","+e+",0,"+ +(p>=r)+","+_+","+(this._x1=t+e*Math.cos(s))+","+(this._y1=n+e*Math.sin(s))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var u=s,l=(Array.prototype.slice,function(t){return function(){return t}});function c(t){this._context=t}c.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var h=function(t){return new c(t)};function f(t){return t[0]}function _(t){return t[1]}n.a=function(t,n){var e=l(!0),r=null,i=h,o=null;function a(a){var s,l,c,h=(a=function(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}(a)).length,f=!1;for(null==r&&(o=i(c=u())),s=0;s<=h;++s)!(s<h&&e(l=a[s],s,a))===f&&((f=!f)?o.lineStart():o.lineEnd()),f&&o.point(+t(l,s,a),+n(l,s,a));if(c)return o=null,c+""||null}return t="function"==typeof t?t:void 0===t?f:l(t),n="function"==typeof n?n:void 0===n?_:l(n),a.x=function(n){return arguments.length?(t="function"==typeof n?n:l(+n),a):t},a.y=function(t){return arguments.length?(n="function"==typeof t?t:l(+t),a):n},a.defined=function(t){return arguments.length?(e="function"==typeof t?t:l(!!t),a):e},a.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),a):i},a.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),a):r},a}},OQCi:function(t,n,e){"use strict";e.d(n,"a",(function(){return Et}));var r=Math.sqrt(50),i=Math.sqrt(10),o=Math.sqrt(2);function a(t,n,e){var a=(n-t)/Math.max(0,e),s=Math.floor(Math.log(a)/Math.LN10),u=a/Math.pow(10,s);return s>=0?(u>=r?10:u>=i?5:u>=o?2:1)*Math.pow(10,s):-Math.pow(10,-s)/(u>=r?10:u>=i?5:u>=o?2:1)}var s=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},u=function(t){var n=t,e=t;function r(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){var o=r+i>>>1;e(t[o],n)<0?r=o+1:i=o}return r}return 1===t.length&&(n=function(n,e){return t(n)-e},e=function(t){return function(n,e){return s(t(n),e)}}(t)),{left:r,center:function(t,e,i,o){null==i&&(i=0),null==o&&(o=t.length);var a=r(t,e,i,o-1);return a>i&&n(t[a-1],e)>-n(t[a],e)?a-1:a},right:function(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){var o=r+i>>>1;e(t[o],n)>0?i=o:r=o+1}return r}}};var l=u(s),c=l.right,h=(l.left,u((function(t){return null===t?NaN:+t})).center,c),f=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t};function _(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function p(){return(p=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function m(){}var d="\\s*([+-]?\\d+)\\s*",y="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",g="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",b=/^#([0-9a-f]{3,8})$/,v=new RegExp("^rgb\\("+[d,d,d]+"\\)$"),x=new RegExp("^rgb\\("+[g,g,g]+"\\)$"),w=new RegExp("^rgba\\("+[d,d,d,y]+"\\)$"),M=new RegExp("^rgba\\("+[g,g,g,y]+"\\)$"),k=new RegExp("^hsl\\("+[y,g,g]+"\\)$"),N=new RegExp("^hsla\\("+[y,g,g,y]+"\\)$"),S={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function O(){return this.rgb().formatHex()}function j(){return this.rgb().formatRgb()}function A(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=b.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?H(n):3===e?new T(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?P(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?P(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=v.exec(t))?new T(n[1],n[2],n[3],1):(n=x.exec(t))?new T(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=w.exec(t))?P(n[1],n[2],n[3],n[4]):(n=M.exec(t))?P(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=k.exec(t))?R(n[1],n[2]/100,n[3]/100,1):(n=N.exec(t))?R(n[1],n[2]/100,n[3]/100,n[4]):S.hasOwnProperty(t)?H(S[t]):"transparent"===t?new T(NaN,NaN,NaN,0):null}function H(t){return new T(t>>16&255,t>>8&255,255&t,1)}function P(t,n,e,r){return r<=0&&(t=n=e=NaN),new T(t,n,e,r)}function E(t){return t instanceof m||(t=A(t)),t?new T((t=t.rgb()).r,t.g,t.b,t.opacity):new T}function C(t,n,e,r){return 1===arguments.length?E(t):new T(t,n,e,null==r?1:r)}function T(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function I(){return"#"+L(this.r)+L(this.g)+L(this.b)}function q(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function L(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function R(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Q(t,n,e,r)}function F(t){if(t instanceof Q)return new Q(t.h,t.s,t.l,t.opacity);if(t instanceof m||(t=A(t)),!t)return new Q;if(t instanceof Q)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,s=o-i,u=(o+i)/2;return s?(a=n===o?(e-r)/s+6*(e<r):e===o?(r-n)/s+2:(n-e)/s+4,s/=u<.5?o+i:2-o-i,a*=60):s=u>0&&u<1?0:a,new Q(a,s,u,t.opacity)}function Q(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function D(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function z(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}f(m,A,{copy:function(t){return p(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:O,formatHex:O,formatHsl:function(){return F(this).formatHsl()},formatRgb:j,toString:j}),f(T,C,_(m,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new T(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new T(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:I,formatHex:I,formatRgb:q,toString:q})),f(Q,(function(t,n,e,r){return 1===arguments.length?F(t):new Q(t,n,e,null==r?1:r)}),_(m,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Q(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Q(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new T(D(t>=240?t-240:t+120,i,r),D(t,i,r),D(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var $=function(t){return function(){return t}};function V(t,n){return function(e){return t+e*n}}function B(t){return 1==(t=+t)?G:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):$(isNaN(n)?e:n)}}function G(t,n){var e=n-t;return e?V(t,e):$(isNaN(t)?n:t)}var U=function t(n){var e=B(n);function r(t,n){var r=e((t=C(t)).r,(n=C(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=G(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1);function W(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),s=new Array(i);for(e=0;e<i;++e)r=C(n[e]),o[e]=r.r||0,a[e]=r.g||0,s[e]=r.b||0;return o=t(o),a=t(a),s=t(s),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=s(t),r+""}}}W((function(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,s=r<n-1?t[r+2]:2*o-i;return z((e-r/n)*n,a,i,o,s)}})),W((function(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],s=t[(r+2)%n];return z((e-r/n)*n,i,o,a,s)}}));var Z=function(t,n){n||(n=[]);var e,r=t?Math.min(n.length,t.length):0,i=n.slice();return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o;return i}};function K(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function X(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=it(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}}var Y=function(t,n){var e=new Date;return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}},J=function(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}},tt=function(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=it(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}},nt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,et=new RegExp(nt.source,"g");var rt=function(t,n){var e,r,i,o=nt.lastIndex=et.lastIndex=0,a=-1,s=[],u=[];for(t+="",n+="";(e=nt.exec(t))&&(r=et.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),s[a]?s[a]+=i:s[++a]=i),(e=e[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,u.push({i:a,x:J(e,r)})),o=et.lastIndex;return o<n.length&&(i=n.slice(o),s[a]?s[a]+=i:s[++a]=i),s.length<2?u[0]?function(t){return function(n){return t(n)+""}}(u[0].x):function(t){return function(){return t}}(n):(n=u.length,function(t){for(var e,r=0;r<n;++r)s[(e=u[r]).i]=e.x(t);return s.join("")})},it=function(t,n){var e,r=typeof n;return null==n||"boolean"===r?$(n):("number"===r?J:"string"===r?(e=A(n))?(n=e,U):rt:n instanceof A?U:n instanceof Date?Y:K(n)?Z:Array.isArray(n)?X:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?tt:J)(t,n)},ot=function(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}},at=function(t){return+t},st=[0,1];function ut(t){return t}function lt(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:(e=isNaN(n)?NaN:.5,function(){return e});var e}function ct(t,n,e){var r=t[0],i=t[1],o=n[0],a=n[1];return i<r?(r=lt(i,r),o=e(a,o)):(r=lt(r,i),o=e(o,a)),function(t){return o(r(t))}}function ht(t,n,e){var r=Math.min(t.length,n.length)-1,i=new Array(r),o=new Array(r),a=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<r;)i[a]=lt(t[a],t[a+1]),o[a]=e(n[a],n[a+1]);return function(n){var e=h(t,n,1,r)-1;return o[e](i[e](n))}}function ft(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function _t(){var t,n,e,r,i,o,a=st,s=st,u=it,l=ut;function c(){var t,n,e,u=Math.min(a.length,s.length);return l!==ut&&(t=a[0],n=a[u-1],t>n&&(e=t,t=n,n=e),l=function(e){return Math.max(t,Math.min(n,e))}),r=u>2?ht:ct,i=o=null,h}function h(n){return isNaN(n=+n)?e:(i||(i=r(a.map(t),s,u)))(t(l(n)))}return h.invert=function(e){return l(n((o||(o=r(s,a.map(t),J)))(e)))},h.domain=function(t){return arguments.length?(a=Array.from(t,at),c()):a.slice()},h.range=function(t){return arguments.length?(s=Array.from(t),c()):s.slice()},h.rangeRound=function(t){return s=Array.from(t),u=ot,c()},h.clamp=function(t){return arguments.length?(l=!!t||ut,c()):l!==ut},h.interpolate=function(t){return arguments.length?(u=t,c()):u},h.unknown=function(t){return arguments.length?(e=t,h):e},function(e,r){return t=e,n=r,c()}}function pt(){return _t()(ut,ut)}function mt(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}var dt=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function yt(t){if(!(n=dt.exec(t)))throw new Error("invalid format: "+t);var n;return new gt({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function gt(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}yt.prototype=gt.prototype,gt.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};function bt(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}var vt,xt,wt,Mt,kt=function(t){return(t=bt(Math.abs(t)))?t[1]:NaN},Nt=function(t,n){var e=bt(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")},St={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Nt(100*t,n)},r:Nt,s:function(t,n){var e=bt(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(vt=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+bt(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},Ot=function(t){return t},jt=Array.prototype.map,At=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];xt=function(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?Ot:(n=jt.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],a=0,s=n[0],u=0;i>0&&s>0&&(u+s+1>r&&(s=Math.max(1,r-u)),o.push(t.substring(i-=s,i+s)),!((u+=s+1)>r));)s=n[a=(a+1)%n.length];return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",s=void 0===t.numerals?Ot:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(jt.call(t.numerals,String)),u=void 0===t.percent?"%":t.percent+"",l=void 0===t.minus?"−":t.minus+"",c=void 0===t.nan?"NaN":t.nan+"";function h(t){var n=(t=yt(t)).fill,e=t.align,h=t.sign,f=t.symbol,_=t.zero,p=t.width,m=t.comma,d=t.precision,y=t.trim,g=t.type;"n"===g?(m=!0,g="g"):St[g]||(void 0===d&&(d=12),y=!0,g="g"),(_||"0"===n&&"="===e)&&(_=!0,n="0",e="=");var b="$"===f?i:"#"===f&&/[boxX]/.test(g)?"0"+g.toLowerCase():"",v="$"===f?o:/[%p]/.test(g)?u:"",x=St[g],w=/[defgprs%]/.test(g);function M(t){var i,o,u,f=b,M=v;if("c"===g)M=x(t)+M,t="";else{var k=(t=+t)<0||1/t<0;if(t=isNaN(t)?c:x(Math.abs(t),d),y&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),k&&0==+t&&"+"!==h&&(k=!1),f=(k?"("===h?h:l:"-"===h||"("===h?"":h)+f,M=("s"===g?At[8+vt/3]:"")+M+(k&&"("===h?")":""),w)for(i=-1,o=t.length;++i<o;)if(48>(u=t.charCodeAt(i))||u>57){M=(46===u?a+t.slice(i+1):t.slice(i))+M,t=t.slice(0,i);break}}m&&!_&&(t=r(t,1/0));var N=f.length+t.length+M.length,S=N<p?new Array(p-N+1).join(n):"";switch(m&&_&&(t=r(S+t,S.length?p-M.length:1/0),S=""),e){case"<":t=f+t+M+S;break;case"=":t=f+S+t+M;break;case"^":t=S.slice(0,N=S.length>>1)+f+t+M+S.slice(N);break;default:t=S+f+t+M}return s(t)}return d=void 0===d?6:/[gprs]/.test(g)?Math.max(1,Math.min(21,d)):Math.max(0,Math.min(20,d)),M.toString=function(){return t+""},M}return{format:h,formatPrefix:function(t,n){var e=h(((t=yt(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(kt(n)/3))),i=Math.pow(10,-r),o=At[8+r/3];return function(t){return e(i*t)+o}}}}({thousands:",",grouping:[3],currency:["$",""]}),wt=xt.format,Mt=xt.formatPrefix;var Ht=function(t,n,e,a){var s,u=function(t,n,e){var a=Math.abs(n-t)/Math.max(0,e),s=Math.pow(10,Math.floor(Math.log(a)/Math.LN10)),u=a/s;return u>=r?s*=10:u>=i?s*=5:u>=o&&(s*=2),n<t?-s:s}(t,n,e);switch((a=yt(null==a?",f":a)).type){case"s":var l=Math.max(Math.abs(t),Math.abs(n));return null!=a.precision||isNaN(s=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(kt(n)/3)))-kt(Math.abs(t)))}(u,l))||(a.precision=s),Mt(a,l);case"":case"e":case"g":case"p":case"r":null!=a.precision||isNaN(s=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,kt(n)-kt(t))+1}(u,Math.max(Math.abs(t),Math.abs(n))))||(a.precision=s-("e"===a.type));break;case"f":case"%":null!=a.precision||isNaN(s=function(t){return Math.max(0,-kt(Math.abs(t)))}(u))||(a.precision=s-2*("%"===a.type))}return wt(a)};function Pt(t){var n=t.domain;return t.ticks=function(t){var e=n();return function(t,n,e){var r,i,o,s,u=-1;if(e=+e,(t=+t)===(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(s=a(t,n,e))||!isFinite(s))return[];if(s>0)for(t=Math.ceil(t/s),n=Math.floor(n/s),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*s;else for(s=-s,t=Math.ceil(t*s),n=Math.floor(n*s),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)/s;return r&&o.reverse(),o}(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return Ht(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,i,o=n(),s=0,u=o.length-1,l=o[s],c=o[u],h=10;for(c<l&&(i=l,l=c,c=i,i=s,s=u,u=i);h-- >0;){if((i=a(l,c,e))===r)return o[s]=l,o[u]=c,n(o);if(i>0)l=Math.floor(l/i)*i,c=Math.ceil(c/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,c=Math.floor(c*i)/i}r=i}return t},t}function Et(){var t=pt();return t.copy=function(){return ft(t,Et())},mt.apply(t,arguments),Pt(t)}},QRet:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var r,i,o,a=e("HteQ"),s=0,u=[],l=a.options.__r,c=a.options.diffed,h=a.options.__c,f=a.options.unmount;function _(t,n){a.options.__h&&a.options.__h(i,t,s||n),s=0;var e=i.__H||(i.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function p(t){return s=1,function(t,n,e){var o=_(r++,2);return o.t=t,o.__c||(o.__c=i,o.__=[e?e(n):b(void 0,n),function(t){var n=o.t(o.__[0],t);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}]),o.__}(b,t)}function m(){u.some((function(t){if(t.__P)try{t.__H.__h.forEach(y),t.__H.__h.forEach(g),t.__H.__h=[]}catch(n){return t.__H.__h=[],a.options.__e(n,t.__v),!0}})),u=[]}a.options.__r=function(t){l&&l(t),r=0;var n=(i=t.__c).__H;n&&(n.__h.forEach(y),n.__h.forEach(g),n.__h=[])},a.options.diffed=function(t){c&&c(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==u.push(n)&&o===a.options.requestAnimationFrame||((o=a.options.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),d&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);d&&(n=requestAnimationFrame(e))})(m))},a.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(y),t.__h=t.__h.filter((function(t){return!t.__||g(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],a.options.__e(e,t.__v)}})),h&&h(t,n)},a.options.unmount=function(t){f&&f(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(y)}catch(t){a.options.__e(t,n.__v)}};var d="function"==typeof requestAnimationFrame;function y(t){"function"==typeof t.u&&t.u()}function g(t){t.u=t.__()}function b(t,n){return"function"==typeof n?n(t):n}},QfWi:function(t,n,e){"use strict";e.r(n);e("GFNa");var r=e("ugae");n.default=r.a},SSiR:function(t,n,e){"use strict";Math.abs,Math.atan2,Math.cos,Math.max,Math.min,Math.sin,Math.sqrt,Math.PI;function r(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function i(t,n){this._context=t,this._k=(1-n)/6}i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:r(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:r(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};(function t(n){function e(t){return new i(t,n)}return e.tension=function(n){return t(+n)},e})(0);function o(t,n){this._context=t,this._alpha=n}o.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:!function(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>1e-12){var s=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,u=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*s-t._x0*t._l12_2a+t._x2*t._l01_2a)/u,i=(i*s-t._y0*t._l12_2a+t._y2*t._l01_2a)/u}if(t._l23_a>1e-12){var l=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,c=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*l+t._x1*t._l23_2a-n*t._l12_2a)/c,a=(a*l+t._y1*t._l23_2a-e*t._l12_2a)/c}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};n.a=function t(n){function e(t){return n?new o(t,n):new i(t,0)}return e.alpha=function(n){return t(+n)},e}(.5)},kPb2:function(t,n,e){"use strict";(function(t,r){var i=e("H4m1"),o=e("OQCi"),a=e("NBGV"),s=e("SSiR"),u=function(n){var e=n.score,o=n.rectHeight,a=n.marginLeft,s=function(t){return 20*t};return t(r,null,t("g",{transform:"translate("+a+",5)"},t("text",{x:10-a,y:o+60,"text-anchor":"start","font-weight":"bold"},"Risk"),i.b.map((function(n){return t("text",{x:(s(n.min)+s(n.max))/2,y:o+60,"text-anchor":"middle","font-weight":e>=n.min&&e<=n.max?"bold":"normal"},n.name)}))),t("g",{transform:"translate("+a+",30)"},t("text",{x:10-a,y:o+60,"text-anchor":"start","font-weight":"bold"},"Mortality"),i.b.map((function(n){return t("text",{x:(s(n.min)+s(n.max))/2,y:o+60,"text-anchor":"middle"},n.mortality)}))),t("g",{transform:"translate("+a+",25)"},i.b.map((function(n){return t("rect",{x:s(n.min),width:s(n.max)-s(n.min),y:0,height:o,fill:n.color})})),i.a.map((function(n){return t("line",{x1:s(n),x2:s(n),y1:0,y2:o,stroke:"grey"})})),i.b.map((function(n){return t("text",{x:s(n.min),y:o+20,"text-anchor":"middle"},n.min)})),i.b.map((function(n){return t("line",{x1:s(n.min),x2:s(n.min),y1:o,y2:o+6,stroke:"black"})})),i.b.map((function(n){return t("text",{x:s(n.max),y:o+20,"text-anchor":"middle"},n.max)})),i.b.map((function(n){return t("line",{x1:s(n.max),x2:s(n.max),y1:o,y2:o+6,stroke:"black"})})),t("circle",{cy:10,cx:s(e),r:5,fill:"black"})))},l=function(n){var e,u=n.score,l=n.maxBarHeight,c=n.marginLeft,f=Math.max.apply(Math,i.d),_=Object(o.a)().range([l,0]).domain([0,f]),p=function(t){return 20*t},m=Object(a.a)().curve(s.a.alpha(.5))(i.d.map((function(t,n){return[p(n),_(t)]})));return t("g",null,t("g",{transform:"translate("+c+",0)"},t(h,{y:_,ticks:[0,20,40,60,80,100]})),t("g",{transform:"translate("+c+",0)"},t("path",{d:m,stroke:"lightgrey",fill:"none"}),i.a.map((function(n){return t("circle",{cx:p(n),cy:_(i.d[n]),r:2,fill:"lightgrey"})})),t("circle",{cx:p(u),cy:_(i.d[u]),r:4,fill:"black"}),t("line",{x1:p(0),x2:p(u),y1:_(i.d[u]),y2:_(i.d[u]),stroke:"black","stroke-dasharray":"2,2"}),t("line",{x1:p(u),x2:p(u),y1:_(0)+l+60,y2:_(i.d[u]),stroke:"black","stroke-dasharray":"2,2"}),t("text",{x:p(u)/2,y:_(i.d[u])-5,"text-anchor":"middle"},u>0&&t(r,null,(e=i.d[u],Math.round(10*(e+Number.EPSILON))/10),"%")),t("text",{"text-anchor":"start",transform:"translate(15, 0)rotate(90)"},"In-hospital mortality/%")))},c=function(n){var e=n.score,a=n.maxBarHeight,s=n.marginLeft,u=Math.max.apply(Math,i.c),l=Object(o.a)().range([a,0]).domain([0,u]),c=function(t){return 20*t};return t(r,null,t("g",{transform:"translate("+s+",0)"},t(h,{y:l})),t("g",{transform:"translate("+s+",0)"},i.c.map((function(n,r){return t("rect",{x:c(r)-4,width:8,y:l(n),height:a-l(n),fill:"grey",opacity:r===e?1:.4})})),t("text",{"text-anchor":"start",transform:"translate(15, 0)rotate(90)"},"Number of patient in study")))},h=function(n){var e=n.y,r=n.ticks;r||(r=e.ticks(6));return t("g",null,t("line",{y1:e(r[0]),y2:e(r.slice(-1)[0]),x1:0,x2:0,stroke:"black","stroke-width":"1px"}),r.map((function(n){return t("text",{y:e(n),x:-16,style:{textAnchor:"end"},key:n},n)})),r.map((function(n){return t("line",{y1:e(n),y2:e(n),x1:0,x2:-10,stroke:"black","stroke-width":"2px",key:n})})))};n.a=function(n){var e=n.score;return t("div",{style:{"max-width":"100%"}},t("svg",{viewBox:"0 0 510 685"},t("g",{transform:"translate(0,50)"},t(l,{score:e,maxBarHeight:250,marginLeft:80}),t("g",{transform:"translate(0, 270)"},t(c,{score:e,maxBarHeight:250,marginLeft:80})),t("g",{transform:"translate(0, 520)"},t(u,{score:e,rectHeight:20,marginLeft:80})))))}}).call(this,e("HteQ").h,e("HteQ").Fragment)},ugae:function(t,n,e){"use strict";(function(t,r){e.d(n,"a",(function(){return m}));var i=e("HteQ"),o=e("QRet"),a=e("kPb2"),s=e("H4m1");function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var h=function(n){var e=n.score;return null!==e?t(r,null,t("p",{class:"centered",style:{border:"solid 4px "+s.e[e]}},t("span",{style:{fontSize:"4em"}},t("b",null,e),"/21")," ",t("br",null),"(higher is worse)"),t(a.a,{score:e})):t("p",null,t("b",null,"Please select a value for every variable to calculate a mortality score."))},f=function(){return t(r,null,t("p",null,"The 4C Mortality Score is a risk stratification score that predicts in-hospital mortality for hospitalised COVID-19 patients, produced by the"," ",t("a",{href:"https://isaric4c.net/"},"ISARIC 4C consortium"),"."," ",t("b",null,"It is intended for use by clinicians.")),t("p",null,"It is designed to be easy-to-use, and require only parameters that are commonly available at hospital presentation."),t("p",null,"It is based on a UK cohort of patients, and should not be adopted for routine clinical use in other settings until it has been appropriately validated."),t("p",null,"For full details, see",t("a",{href:"https://doi.org/10.1136/bmj.m3339"}," the paper")," introducing the score."),t("p",null,"This is an infographic that visualises risk, based on observed mortality among hospitalised adult COVID19 patients recruited into the ISARIC 4C study in the UK."))},_=function(){return t("div",null,t("h2",null,"What you should do"),t("p",null,"It is important that ",t("i",null,"everyone")," follows the Government's advice on"," ",t("a",{href:"https://www.gov.uk/government/publications/staying-alert-and-safe-social-distancing"},"Staying alert and safe (social distancing)"),", and on"," ",t("a",{href:"https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance"},"self-isolating")," ","if they or someone in their household has symptoms of COVID-19. This is important not only to protect yourself, but also to prevent you from accidentally infecting more vulnerable people."),t("p",null,"People who are defined as extremely vulnerable on medical grounds should also follow the government's"," ",t("a",{href:"https://www.gov.uk/government/publications/guidance-on-shielding-and-protecting-extremely-vulnerable-persons-from-covid-19"},"advice on shielding"),"."),t("p",null,"If you think that you might have COVID-19, you should stay at home and consult the"," ",t("a",{href:"https://www.nhs.uk/conditions/coronavirus-covid-19/check-if-you-have-coronavirus-symptoms/"},"NHS Website")," ","for advice."))},p=function(n){var e=n.short_name,i=n.f,a=n.selection,s=n.handleSelection,u=Object(o.a)(!1),l=u[0],c=u[1],h=l?i.altScores:i.scores,f=i.order?i.order:Object.keys(h),_=l?i.altName:i.name,p=i.help;return t(r,null,t("label",{for:e},_,":",function(n){return n&&t("details",null,t("summary",null,"Definition"),n)}(p)),t("div",{id:e,role:"group",class:"btn-group"},f.map((function(n){return t("button",{class:a[e]===n?"btn btn-secondary":"btn btn-outline-secondary",onclick:function(){return s(n,h[n])}},n)}))),t((function(){return i.altName?t("button",{onClick:function(){return c(!l)},class:"units-button"},"Use ",l?i.name:i.altName):null}),null))},m=function(n){var e,r;function i(){return n.apply(this,arguments)||this}return r=n,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,i.prototype.render=function(){var n=Object(o.a)({selection:{},scoreContribution:{}}),e=n[0],r=n[1],i=Object.keys(s.f),a=i.map((function(t){return s.f[t]})),u=0;return Object.keys(e.selection).length<a.length?(u=null,console.log("Score not set")):u=Object.values(e.scoreContribution).reduce((function(t,n){return t+n}),0),t("div",{id:"app"},t("base",{target:"_parent"}),t("h1",null,"4C Mortality Score"),t(f,null),t("div",{style:{"max-width":"max-content",margin:"auto auto 2em 0"}},a.map((function(n,o){var a=i[o];return t("div",{class:"measurement"},t(p,{f:n,short_name:a,selection:e.selection,handleSelection:function(t,n){var i,o;r({selection:l(l({},e.selection),{},(i={},i[a]=t,i)),scoreContribution:l(l({},e.scoreContribution),{},(o={},o[a]=n,o))})}}))}))),t(h,{score:u}),t("br",null),t(_,null))},i}(i.Component)}).call(this,e("HteQ").h,e("HteQ").Fragment)}});
//# sourceMappingURL=ssr-bundle.js.map