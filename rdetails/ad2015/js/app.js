(function(k,g,H){k.fullpage=function(Ja,d){function x(a,b){for(var c in b)b.hasOwnProperty(c)&&null!==c&&(a.style[c]=b[c]);return a}function e(a,b){b=b||g;return b.querySelector(a)}function m(a,b){b=b||g;return b.querySelectorAll(a)}function h(a){for(var b=0;a=a.previousSibling;)3==a.nodeType&&/^\s*$/.test(a.data)||b++;return b}function ka(a,b){a.style.display="undefined"!==typeof b?b?"block":"none":"block"==a.style.display?"none":"block";return a}function v(a,b){return!!a.className.match(new RegExp("(\\s|^)"+
b+"(\\s|$)"))}function z(a,b){a&&v(a,b)&&(a.className=a.className.replace(new RegExp("(\\s|^)"+b+"(\\s|$)"),""))}function q(a,b){a&&!v(a,b)&&(a.className+=" "+b)}function I(a,b){return a&&(b(a)?a:I(a.parentNode,b))}function X(){return"innerHeight"in k?k.innerHeight:g.documentElement.offsetHeight}function J(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function y(a){var b={};return a&&"[object Function]"===b.toString.call(a)}function Y(a,b,c){b=b.split(" ");for(var d=0,e=b.length;d<e;d++)g.addEventListener?
a.addEventListener(b[d],c,!1):a.attachEvent(b[d],c,!1)}function P(a,b,c,d){var e=Ka(a),g=b-e,l=0;Q=!0;var m=function(){if(Q){l+=20;var b=Math.easeInOutCubic(l,e,g,c);la(a,b);l<c?setTimeout(m,20):"undefined"!==typeof d&&d()}};m()}function Z(){var a=g.documentElement;return(k.pageYOffset||a.scrollTop)-(a.clientTop||0)}function Ka(a){return v(a,"fp-slides")?a.scrollLeft:!d.autoScrolling||d.scrollBar?Z():a.offsetTop}function la(a,b){!d.autoScrolling||d.scrollBar||v(a,"fp-slides")?v(a,"fp-slides")?a.scrollLeft=
b:a.scrollTo(0,b):a.style.top=b+"px"}function ma(a){for(a=a.nextSibling;a&&1!=a.nodeType;)a=a.nextSibling;return a}function na(a){for(a=a.previousSibling;a&&1!=a.nodeType;)a=a.previousSibling;return a}function aa(){var a=na(e(".fp-section.active"));a&&B(a,null,!0)}function oa(){var a=ma(e(".fp-section.active"));a&&B(a,null,!1)}function pa(a,b){var c="",c=isNaN(a)?e('[data-anchor="'+a+'"]'):m(".fp-section")[a-1];"undefined"!==typeof b?ba(a,b):0<c.length&&B(c)}function qa(a){if(!v(r,"fp-destroyed")){A=
!0;ra=X();for(var b=m(".fp-section"),c=0;c<b.length;++c){var f=b[c],p=e(".fp-slides",f),f=m(".fp-slide",f);p&&f.length&&K(p,e(".fp-slide.active",p))}b=e(".fp-section.active");h(b)&&L(b.offsetTop);A=!1;y(d.afterResize)&&a&&d.afterResize.call(r);y(d.afterReBuild)&&!a&&d.afterReBuild.call(r)}}function La(){var a=g.createElement("div");a.setAttribute("id","fp-nav");var b=g.createElement("ul");a.appendChild(b);g.body.appendChild(a);n=e("#fp-nav");n.style.color=d.navigationColor;q(n,d.navigationPosition);
d.showActiveTooltip&&q(n,"fp-show-active");a="";for(b=0;b<m(".fp-section").length;b++){var c="";d.anchors.length&&(c=d.anchors[b]);a=a+'<li><a href="#'+c+'"><span></span></a>';c=d.navigationTooltips[b];typeof c!==H&&""!==c&&(a+='<div class="fp-tooltip '+d.navigationPosition+'">'+c+"</div>");a+="</li>"}b=e("ul",n);b.innerHTML+=a;a=m(".fp-slidesNav a");for(b=0;b<a.length;b++)Y(a[b],"click onclick touchstart",function(a){a=k.event||a||a.originalEvent;J(a);a=h(this.parentNode);B(m(".fp-section")[a],null,
!1)})}function Ma(){var a;if(!d.autoScrolling||d.scrollBar){for(var b=Z(),c=0,f=Math.abs(b-m(".fp-section")[0].offsetTop),p=m(".fp-section"),g=0;g<p.length;++g){var l=Math.abs(b-p[g].offsetTop);l<f&&(c=g,f=l)}a=m(".fp-section")[c]}if(!d.autoScrolling||d.scrollBar){if(!v(a,"active")){ca=!0;b=e(".fp-section.active");c=h(b)+1;f=sa(a);p=a.getAttribute("data-anchor");g=h(a)+1;if(l=e(".fp-slide.active",a))var k=l.getAttribute("data-anchor"),r=h(l);l=e(".fp-section.active");z(l,"active");C&&(q(a,"active"),
y(d.onLeave)&&d.onLeave.call(b,c,g,f),y(d.afterLoad)&&d.afterLoad.call(a,p,g),R(p,0),d.anchors.length&&(D=p,da(r,k,p,g)));clearTimeout(ta);ta=setTimeout(function(){ca=!1},100)}d.fitToSection&&(clearTimeout(ua),ua=setTimeout(function(){C&&(h(e(".fp-section.active"))==h(a)&&(A=!0),B(a),A=!1)},1E3))}}function S(a){"down"==a?oa():aa()}function Na(a){var b=a.originalEvent;ea(b)&&(d.autoScrolling&&J(a),a=e(".fp-section.active"),a=m(".fp-slides",a),C&&!E&&(b=va(b),M=b.y,T=b.x,a&&Math.abs(U-T)>Math.abs(N-
M)?Math.abs(U-T)>k.offsetWidth/100*d.touchSensitivity&&(U>T?F("next"):F("prev")):d.autoScrolling&&Math.abs(N-M)>k.offsetHeight/100*d.touchSensitivity&&(N>M?S("down"):M>N&&S("up"))))}function ea(a){return"undefined"===typeof a.pointerType||"mouse"!=a.pointerType}function Oa(a){a=a.originalEvent;d.fitToSection&&(Q=!1);ea(a)&&(a=va(a),N=a.y,U=a.x)}function wa(a,b){for(var c=0,d=a.slice(Math.max(a.length-b,1)),e=0;e<d.length;e++)c+=d[e];return Math.ceil(c/b)}function Pa(a){var b=(new Date).getTime();
if(d.autoScrolling){a=k.event||a||a.originalEvent;var c=a.wheelDelta||-a.deltaY||-a.detail,f=Math.max(-1,Math.min(1,c));149<G.length&&G.shift();G.push(Math.abs(c));d.scrollBar&&J(a);a=b-xa;xa=b;200<a&&(G=[]);C&&(b=wa(G,10),a=wa(G,70),b>=a&&(0>f?S("down"):S("up")));return!1}d.fitToSection&&(Q=!1)}function F(a){var b=e(".fp-section.active");if((b=e(".fp-slides",b))&&!E){var c=e(".fp-slide.active",b),f=null,f="prev"===a?na(c):ma(c);if(!f){if(!d.loopHorizontal)return;for(var f=c.parentNode.firstChild,
g=[];f;f=f.nextSibling)1==f.nodeType&&f!=c&&g.push(f);f="prev"===a?g[g.length-1]:g[0]}E=!0;K(b,f)}}function B(a,b,c){if(null!==a&&(b={element:a,callback:b,isMovementUp:c,dtop:a.offsetTop,yMovement:sa(a),anchorLink:a.getAttribute("data-anchor"),sectionIndex:h(a),activeSlide:e(".fp-slide.active",a),activeSection:e(".fp-section.active"),leavingSection:h(e(".fp-section.active"))+1,localIsResizing:A},!(h(b.activeSection)==b.sectionIndex&&!A||d.scrollBar&&Z()===b.dtop))){if(b.activeSlide)var f=b.activeSlide.getAttribute("data-anchor"),
g=h(b.activeSlide);c=m(".fp-section");for(var k=0;k<c.length;k++)z(c[k],"active");q(a,"active");C=!1;da(g,f,b.anchorLink,b.sectionIndex);y(d.onLeave)&&!b.localIsResizing&&d.onLeave.call(b.activeSection,b.leavingSection,b.sectionIndex+1,b.yMovement);Qa(b);D=b.anchorLink;R(b.anchorLink,b.sectionIndex)}}function Qa(a){if(d.css3&&d.autoScrolling&&!d.scrollBar)ya("translate3d(0px, -"+a.dtop+"px, 0px)",!0),setTimeout(function(){za(a)},d.scrollingSpeed);else{var b=V(a.dtop);P(b.element,b.options,d.scrollingSpeed,
function(){za(a)})}}function V(a){var b={};d.autoScrolling&&!d.scrollBar?(b.options=-a,b.element=e(".fullpage-wrapper")):(b.options=a,b.element=k);return b}function za(a){y(d.afterLoad)&&!a.localIsResizing&&d.afterLoad.call(a.element,a.anchorLink,a.sectionIndex+1);C=!0;setTimeout(function(){y(a.callback)&&a.callback.call(this)},600)}function Ra(){var a=k.location.hash.replace("#","").split("/"),b=a[0],a=a[1];b&&ba(b,a)}function Sa(){v(this,"fp-prev")?F("prev"):F("next")}function Aa(){if(!ca){var a=
k.location.hash.replace("#","").split("/"),b=a[0],a=a[1];if(b.length){var c="undefined"===typeof D,d="undefined"===typeof D&&"undefined"===typeof a&&!E;(b&&b!==D&&!c||d||!E&&fa!=a)&&ba(b,a)}}}function K(a,b){var c=h(b),f=I(a,function(a){return v(a,"fp-section")}),g=h(f),k=f.getAttribute("data-anchor"),l=e(".fp-slidesNav",f),t=b.getAttribute("data-anchor"),r=A;if(d.onSlideLeave){var u=e(".fp-slide.active",f),w=h(u),n;n=w==c?"none":w>c?"left":"right";r||"none"===n||y(d.onSlideLeave)&&d.onSlideLeave.call(u,
k,g+1,w,n)}u=m(".fp-slide",f);for(w=0;w<u.length;w++)z(u[w],"active");q(b,"active");"undefined"===typeof t&&(t=c);!d.loopHorizontal&&d.controlArrows&&(ka(e(".fp-controlArrow.fp-prev",f),0!==c),ka(e(".fp-controlArrow.fp-next",f),!b.is(":last-child")));v(f,"active")&&da(c,t,k,g);var x=function(){r||y(d.afterSlideLoad)&&d.afterSlideLoad.call(b,k,g+1,t,c);E=!1};d.css3?(f="translate3d(-"+b.offsetLeft+"px, 0px, 0px)",u=e(".fp-slidesContainer",a),Ba(u,0<d.scrollingSpeed),Ca(u,f),setTimeout(function(){x()},
d.scrollingSpeed,d.easing)):P(a,b.offsetLeft,d.scrollingSpeed,function(){x()});d.slidesNavigation&&(z(e(".active",l),"active"),l=m("li",l)[c],l=e("a",l),q(l,"active"))}function Ta(){if(ga){if("text"!==g.activeElement.getAttribute("type")){var a=X();Math.abs(a-ha)>20*Math.max(ha,a)/100&&(qa(!0),ha=a)}}else clearTimeout(Da),Da=setTimeout(function(){qa(!0)},500)}function Ba(a){var b="all "+d.scrollingSpeed+"ms "+d.easingcss3;z(a,"fp-notransition");x(a,{"-webkit-transition":b,transition:b});return a}
function R(a,b){if(d.menu){var c=e(d.menu);c&&(z(e(".active",c),"active"),q(e('[data-menuanchor="'+a+'"]',c),"active"))}d.navigation&&(z(e(".active",n),"active"),a?q(e('a[href="#'+a+'"]',n),"active"):(c=m("li",n)[b],q(e("a",c),"active")))}function sa(a){var b=h(e(".fp-section.active"));a=h(a);return b==a?"none":b>a?"up":"down"}function ya(a,b){b?Ba(r):q(r,"fp-notransition");Ca(r,a);setTimeout(function(){z(r,"fp-notransition")},10)}function ba(a,b){var c;"undefined"===typeof b&&(b=0);c=isNaN(a)?e('[data-anchor="'+
a+'"]'):m(".fp-section")[0][a-1];a===D||v(c,"active")?Ea(c,b):B(c,function(){Ea(c,b)})}function Ea(a,b){if("undefined"!=typeof b){var c=m(".fp-slides",a),d=e('.fp-slide[data-anchor="'+b+'"]',a);null===d&&(d=m(".fp-slide",a)[b]);d&&K(c,d)}}function da(a,b,c,f){var e="";d.anchors.length?(a?("undefined"!==typeof c&&(e=c),"undefined"===typeof b&&(b=a),fa=b,Fa(e+"/"+b)):("undefined"!==typeof a&&(fa=b),Fa(c)),W(location.hash)):"undefined"!==typeof a?W(f+"-"+a):W(String(f))}function Fa(a){if(d.recordHistory)location.hash=
a;else if(ga||ia)history.replaceState(H,H,"#"+a);else{var b=k.location.href.split("#")[0];k.location.replace(b+"#"+a)}}function W(a){a=a.replace("/","-").replace("#","");g.body.className=g.body.className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g"),"");q(g.body,"fp-viewing-"+a)}function ja(a,b,c,d,e){a.addEventListener?(a.addEventListener(c,b,!1),"undefined"!==typeof e&&a.addEventListener(e,b,!1)):a.attachEvent(d,b)}function va(a){var b=[];b.y="undefined"!==typeof a.pageY&&(a.pageY||a.pageX)?
a.pageY:a.touches[0].pageY;b.x="undefined"!==typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX;ia&&ea(a)&&(b.y=a.touches[0].pageY,b.x=a.touches[0].pageX);return b}function Ga(a){O("scrollingSpeed",0,"internal");var b=I(a,function(a){return v(a,"fp-slides")});K(b,a);O("scrollingSpeed",Ha.scrollingSpeed,"internal")}function L(a){d.scrollBar?(a=V(a),la(a.element,a.options,0)):d.css3?ya("translate3d(0px, -"+a+"px, 0px)",!1):r.style.top=-a}function Ca(a,b){x(a,{"-webkit-transform":b,"-moz-transform":b,
"-ms-transform":b,transform:b})}function O(a,b,c){d[a]=b;"internal"!==c&&(Ha[a]=b)}d=function(a,b){"object"!==typeof b&&(b={});for(var c in b)a.hasOwnProperty(c)&&(a[c]=b[c]);return a}({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,easingcss3:"ease",loopHorizontal:!0,touchSensitivity:5,keyboardScrolling:!0,
recordHistory:!0,controlArrows:!0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},d);Math.easeInOutCubic=function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b};var E=!1,ga=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),ia="ontouchstart"in k||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,
r=e(Ja),ra=X(),A=!1,D,fa,C=!0,G=[],n,Q,Ha=function(a){if(null===a||"object"!==typeof a)return a;var b=a.constructor(),c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}(d);z(r,"fp-destroyed");(function(){for(var a=0;a<d.anchors.length;a++){var b=d.anchors[a];(g.getElementById("#"+b)||m('[name="'+b+'"]').length)&&console&&console.error&&console.error("fullPage: data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")}})();(function(a){ja(g,Pa,
"mousewheel","onmousewheel","wheel");if(ga||ia){var b;b=k.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"};g.removeEventListener("touchstart "+b.down);g.removeEventListener("touchmove "+b.move);g.addEventListener("touchstart "+b.down,Oa);g.addEventListener("touchmove "+b.move,Na)}ja(k,Ta,"resize","onresize");ja(k,Ma,"scroll","onscroll","onscroll");if(d.css3){b=d;var c=g.createElement("p"),f,p={webkitTransform:"-webkit-transform",OTransform:"-o-transform",
msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};g.body.insertBefore(c,null);for(var h in p)c.style[h]!==H&&(c.style[h]="translate3d(1px,1px,1px)",f=k.getComputedStyle(c).getPropertyValue(p[h]));g.body.removeChild(c);b.css3=f!==H&&0<f.length&&"none"!==f}null!==r?(x(r,{height:"100%",position:"relative"}),q(r,"fullpage-wrapper")):console&&console.error&&console.error("fullPage: Error! Fullpage.js needs to be initialized with a selector. For example: fullpage('#fullpage');");
h=m(d.sectionSelector);for(f=0;f<h.length;++f)q(h[f],"fp-section");h=m(d.slideSelector);for(f=0;f<h.length;++f)q(h[f],"fp-slide");d.navigation&&La();h=m(".fp-section");for(f=0;f<h.length;f++){p=f;c=h[f];b=m(".fp-slide",c);var l=b.length;p||null!==e(".fp-section.active")||q(c,"active");"undefined"!==typeof d.anchors[p]&&(c.setAttribute("data-anchor",d.anchors[p]),v(c,"active")&&R(d.anchors[p],p));if(1<l){var t=100*l,p=100/l;c.innerHTML='<div class="fp-slides"><div class="fp-slidesContainer">'+c.innerHTML+
"</div></div>";b=m(".fp-slide",c);e(".fp-slidesContainer",c).style.width=t+"%";if(d.controlArrows){var t=c,n=g.createElement("div");n.className="fp-controlArrow fp-prev";var u=g.createElement("div");u.className="fp-controlArrow fp-next";var w=e(".fp-slides",t);"#fff"!=d.controlArrowColor&&(u.style["border-color"]="transparent transparent transparent "+d.controlArrowColor,n.style["border-color"]="transparent "+d.controlArrowColor+" transparent transparent");w.parentNode.appendChild(n);w.parentNode.appendChild(u);
d.loopHorizontal||(e(".fp-controlArrow.fp-prev",t).style.display="none")}if(d.slidesNavigation){t=c;n=g.createElement("div");n.className="fp-slidesNav";u=g.createElement("ul");n.appendChild(u);t.appendChild(n);t=e(".fp-slidesNav",t);n=e("ul",t);q(t,d.slidesNavPosition);u="";for(w=0;w<l;w++)u+='<li><a href="#"><span></span></a></li>';n.innerHTML+=u;l="-"+t.offsetWidth()/2+"px";t.style["margin-left"]=l;l=m("li",t)[0];q(e("a",l),"active")}for(l=0;l<b.length;l++)b[l].style.width=p+"%";c=e(".fp-slide.active",
c);null!==typeof c?q(b[0],"active"):Ga(c)}}a()})(function(){for(var a=m(".fp-controlArrow"),b=0;b<a.length;b++)Y(a[b],"click touchstart",Sa);O("autoScrolling",d.autoScrolling,"internal");a=e(".fp-section.active");d.autoScrolling&&!d.scrollBar?(x(g.body,{overflow:"hidden",height:"100%"}),x(g.getElementsByTagName("html")[0],{overflow:"hidden",height:"100%"}),O("recordHistory",d.recordHistory,"internal"),x(r,{"-ms-touch-action":"none","touch-action":"none"}),a&&L(a.offsetTop)):(x(g.body,{overflow:"visible",
height:"100%"}),x(g.getElementsByTagName("html")[0],{overflow:"visible",height:"100%"}),O("recordHistory",!1,"internal"),x(r,{"-ms-touch-action":"","touch-action":""}),L(0),a=V(a.offsetTop),P(a.element,a.options,0));var a=e(".fp-section.active"),b=e(".fp-slide.active",a),c=h(e(".fp-section.active"));b&&(0!==c||0===c&&0!==h(b))&&Ga(b);d.navigation&&(n.style["margin-top"]="-"+n.offsetHeight/2+"px",b=m("li",n)[h(e(".fp-section.active"))],q(e("a",b),"active"));y(d.afterRender)&&d.afterRender.call(r);
b=k.location.hash.replace("#","").split("/")[0];if(b.length&&(c=e('[data-anchor="'+b+'"]'),!d.animateAnchor&&c.length)){if(d.autoScrolling)L(c.offsetTop);else{L(0);W(b);var f=V(c.offsetTop);P(f.element,f.options,0)}R(b,null);y(d.afterLoad)&&d.afterLoad.call(c,b,h(c)+1);z(a,"active");q(c,"active")}g.body.addEventListener("load",Ra,!1)});var ta,ua,ca=!1,N=0,U=0,M=0,T=0,xa=(new Date).getTime();g.addEventListener?k.addEventListener("hashchange",Aa,!1):k.attachEvent("onhashchange",Aa);var Ia;g.onkeydown=
function(a){clearTimeout(Ia);var b=g.activeElement.tagName;if("SELECT"!==b&&"INPUT"!==b&&d.keyboardScrolling&&d.autoScrolling){a=k.event||a||a.originalEvent;for(var b=a.charCode||a.keyCode,c=[40,38,32,33,34],e=0;e<c.length;e++)c[e]==b&&J(a);Ia=setTimeout(function(){var b=a.shiftKey;switch(a.which){case 38:case 33:aa();break;case 32:if(b){aa();break}case 40:case 34:oa();break;case 36:pa(1);break;case 35:pa(m(".fp-section").length);break;case 37:F("prev");break;case 39:F("next")}},150)}};null!==e(".fp-slidesNav a")&&
Y(e(".fp-slidesNav a"),"click touchstart",function(a){J(a);a=I(this,function(a){return v(e1,"fp-section")});a=e(".fp-slides",a);var b=I(this,function(a){return"li"===a.tagName}),b=h(b),b=m(".fp-slide",a)[b];K(a,b)});var ha=ra,Da}})(window,document);
