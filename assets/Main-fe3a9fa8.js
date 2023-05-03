import{s as _,r as k,c as Ce,j as b,F as Y,a as c}from"./index-222e1305.js";var me={},Ue={get exports(){return me},set exports(t){me=t}},Be="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Fe=Be,je=Fe;function Me(){}function ke(){}ke.resetWarningCache=Me;var Ke=function(){function t(r,e,o,a,s,u){if(u!==je){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}t.isRequired=t;function n(){return t}var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:ke,resetWarningCache:Me};return i.PropTypes=i,i};Ue.exports=Ke();const Le=_.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 50px 20px;
  & .box {
    position: relative;
  }
  & .box::before {
    content: "";
    background: ${t=>`url(${t.props}) center no-repeat`};
    width: 81px;
    height: 24px;
    display: inline-block;
    position: absolute;
    z-index: 2;
    transform: rotate(-45deg);
    left: -12px;
    top: 12px;
  }
  & .box > img {
    padding: 20px;
    position: relative;
    transform: rotate(4.03deg);
  }
  /* 테이프 기울기 */
  & .box:nth-child(1):before {
    content: "";
    transform: rotate(-45deg);
    left: -12px;
    top: 12px;
  }

  & .box:nth-child(2):before {
    content: "";
    transform: rotate(0deg);
    left: 70px;
    top: 10px;
  }
  & .box:nth-child(3)::after {
    content: "";
    background: ${t=>`url(${t.props}) center no-repeat`};
    width: 81px;
    height: 24px;
    display: inline-block;
    position: absolute;
    z-index: 2;
    transform: rotate(-45deg);
    right: -12px;
    bottom: 50px;
  }
  & .box:nth-child(4):before {
    content: "";
    transform: rotate(0deg);
    left: 80px;
    top: 10px;
  }
  /* 이미지 기울기 */
  & .box:nth-child(2) > img {
    transform: rotate(0deg);
  }
  /* 이미지 기울기 */
  & .box:nth-child(3) > img {
    transform: rotate(0deg);
  }
  & .box:nth-child(4) > img {
    transform: rotate(0deg);
  }

  /*  */
  & > .navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  & > .slide {
    margin-top: 45px;
    margin-bottom: 25px;
    border: 1px solid;
    height: 525px;
  }

  & .carousel-root .carousel.carousel-slider .control-arrow {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 1px solid#FF8F50;
    background: #fff !important;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;var De={},le={},be={},de={},Pe;function $e(){return Pe||(Pe=1,function(t){(function(n,i){i(t,k,me)})(Ce,function(n,i,r){Object.defineProperty(n,"__esModule",{value:!0}),n.setHasSupportToCaptureOption=I;var e=a(i),o=a(r);function a(f){return f&&f.__esModule?f:{default:f}}var s=Object.assign||function(f){for(var m=1;m<arguments.length;m++){var S=arguments[m];for(var l in S)Object.prototype.hasOwnProperty.call(S,l)&&(f[l]=S[l])}return f};function u(f,m){var S={};for(var l in f)m.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(f,l)&&(S[l]=f[l]);return S}function p(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}var v=function(){function f(m,S){for(var l=0;l<S.length;l++){var A=S[l];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(m,A.key,A)}}return function(m,S,l){return S&&f(m.prototype,S),l&&f(m,l),m}}();function y(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:f}function P(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}var O=!1;function I(f){O=f}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){I(!0)}}))}catch{}function Z(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return O?f:f.capture}function pe(f){if("touches"in f){var m=f.touches[0],S=m.pageX,l=m.pageY;return{x:S,y:l}}var A=f.screenX,T=f.screenY;return{x:A,y:T}}var B=function(f){P(m,f);function m(){var S;p(this,m);for(var l=arguments.length,A=Array(l),T=0;T<l;T++)A[T]=arguments[T];var w=y(this,(S=m.__proto__||Object.getPrototypeOf(m)).call.apply(S,[this].concat(A)));return w._handleSwipeStart=w._handleSwipeStart.bind(w),w._handleSwipeMove=w._handleSwipeMove.bind(w),w._handleSwipeEnd=w._handleSwipeEnd.bind(w),w._onMouseDown=w._onMouseDown.bind(w),w._onMouseMove=w._onMouseMove.bind(w),w._onMouseUp=w._onMouseUp.bind(w),w._setSwiperRef=w._setSwiperRef.bind(w),w}return v(m,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,Z({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,Z({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(l){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(l))}},{key:"_onMouseMove",value:function(l){this.mouseDown&&this._handleSwipeMove(l)}},{key:"_onMouseUp",value:function(l){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(l)}},{key:"_handleSwipeStart",value:function(l){var A=pe(l),T=A.x,w=A.y;this.moveStart={x:T,y:w},this.props.onSwipeStart(l)}},{key:"_handleSwipeMove",value:function(l){if(this.moveStart){var A=pe(l),T=A.x,w=A.y,J=T-this.moveStart.x,Oe=w-this.moveStart.y;this.moving=!0;var He=this.props.onSwipeMove({x:J,y:Oe},l);He&&l.cancelable&&l.preventDefault(),this.movePosition={deltaX:J,deltaY:Oe}}}},{key:"_handleSwipeEnd",value:function(l){this.props.onSwipeEnd(l);var A=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-A?this.props.onSwipeLeft(1,l):this.movePosition.deltaX>A&&this.props.onSwipeRight(1,l),this.movePosition.deltaY<-A?this.props.onSwipeUp(1,l):this.movePosition.deltaY>A&&this.props.onSwipeDown(1,l)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(l){this.swiper=l,this.props.innerRef(l)}},{key:"render",value:function(){var l=this.props;l.tagName;var A=l.className,T=l.style,w=l.children;l.allowMouseEvents,l.onSwipeUp,l.onSwipeDown,l.onSwipeLeft,l.onSwipeRight,l.onSwipeStart,l.onSwipeMove,l.onSwipeEnd,l.innerRef,l.tolerance;var J=u(l,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return e.default.createElement(this.props.tagName,s({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:A,style:T},J),w)}}]),m}(i.Component);B.displayName="ReactSwipe",B.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,innerRef:o.default.func,tolerance:o.default.number.isRequired},B.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},n.default=B})}(de)),de}(function(t){(function(n,i){i(t,$e())})(Ce,function(n,i){Object.defineProperty(n,"__esModule",{value:!0});var r=e(i);function e(o){return o&&o.__esModule?o:{default:o}}n.default=r.default})})(be);var q={},ve={},Ye={get exports(){return ve},set exports(t){ve=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var n={}.hasOwnProperty;function i(){for(var r=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=i.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var u in o)n.call(o,u)&&o[u]&&r.push(u)}}}return r.join(" ")}t.exports?(i.default=i,t.exports=i):window.classNames=i})()})(Ye);Object.defineProperty(q,"__esModule",{value:!0});q.default=void 0;var W=qe(ve);function qe(t){return t&&t.__esModule?t:{default:t}}function Ve(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}var Qe={ROOT:function(n){return(0,W.default)(Ve({"carousel-root":!0},n||"",!!n))},CAROUSEL:function(n){return(0,W.default)({carousel:!0,"carousel-slider":n})},WRAPPER:function(n,i){return(0,W.default)({"thumbs-wrapper":!n,"slider-wrapper":n,"axis-horizontal":i==="horizontal","axis-vertical":i!=="horizontal"})},SLIDER:function(n,i){return(0,W.default)({thumbs:!n,slider:n,animated:!i})},ITEM:function(n,i,r){return(0,W.default)({thumb:!n,slide:n,selected:i,previous:r})},ARROW_PREV:function(n){return(0,W.default)({"control-arrow control-prev":!0,"control-disabled":n})},ARROW_NEXT:function(n){return(0,W.default)({"control-arrow control-next":!0,"control-disabled":n})},DOT:function(n){return(0,W.default)({dot:!0,selected:n})}};q.default=Qe;var V={},ue={};Object.defineProperty(ue,"__esModule",{value:!0});ue.outerWidth=void 0;var Xe=function(n){var i=n.offsetWidth,r=getComputedStyle(n);return i+=parseInt(r.marginLeft)+parseInt(r.marginRight),i};ue.outerWidth=Xe;var F={};Object.defineProperty(F,"__esModule",{value:!0});F.default=void 0;var Ze=function(n,i,r){var e=n===0?n:n+i,o=r==="horizontal"?[e,0,0]:[0,e,0],a="translate3d",s="("+o.join(",")+")";return a+s};F.default=Ze;var Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.default=void 0;var Je=function(){return window};Q.default=Je;Object.defineProperty(V,"__esModule",{value:!0});V.default=void 0;var C=tt(k),H=fe(q),Ge=ue,Re=fe(F),et=fe(be),G=fe(Q);function fe(t){return t&&t.__esModule?t:{default:t}}function Ne(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return Ne=function(){return t},t}function tt(t){if(t&&t.__esModule)return t;if(t===null||K(t)!=="object"&&typeof t!="function")return{default:t};var n=Ne();if(n&&n.has(t))return n.get(t);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var o=r?Object.getOwnPropertyDescriptor(t,e):null;o&&(o.get||o.set)?Object.defineProperty(i,e,o):i[e]=t[e]}return i.default=t,n&&n.set(t,i),i}function K(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?K=function(i){return typeof i}:K=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},K(t)}function ye(){return ye=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},ye.apply(this,arguments)}function nt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function xe(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function it(t,n,i){return n&&xe(t.prototype,n),i&&xe(t,i),t}function rt(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&ge(t,n)}function ge(t,n){return ge=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r},ge(t,n)}function ot(t){var n=st();return function(){var r=oe(t),e;if(n){var o=oe(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return at(this,e)}}function at(t,n){return n&&(K(n)==="object"||typeof n=="function")?n:x(t)}function x(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function st(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function oe(t){return oe=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},oe(t)}function R(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}var lt=function(n){return n.hasOwnProperty("key")},Ae=function(t){rt(i,t);var n=ot(i);function i(r){var e;return nt(this,i),e=n.call(this,r),R(x(e),"itemsWrapperRef",void 0),R(x(e),"itemsListRef",void 0),R(x(e),"thumbsRef",void 0),R(x(e),"setItemsWrapperRef",function(o){e.itemsWrapperRef=o}),R(x(e),"setItemsListRef",function(o){e.itemsListRef=o}),R(x(e),"setThumbsRef",function(o,a){e.thumbsRef||(e.thumbsRef=[]),e.thumbsRef[a]=o}),R(x(e),"updateSizes",function(){if(!(!e.props.children||!e.itemsWrapperRef||!e.thumbsRef)){var o=C.Children.count(e.props.children),a=e.itemsWrapperRef.clientWidth,s=e.props.thumbWidth?e.props.thumbWidth:(0,Ge.outerWidth)(e.thumbsRef[0]),u=Math.floor(a/s),p=u<o,v=p?o-u:0;e.setState(function(y,P){return{itemSize:s,visibleItems:u,firstItem:p?e.getFirstItem(P.selectedItem):0,lastPosition:v,showArrows:p}})}}),R(x(e),"handleClickItem",function(o,a,s){if(!lt(s)||s.key==="Enter"){var u=e.props.onSelectItem;typeof u=="function"&&u(o,a)}}),R(x(e),"onSwipeStart",function(){e.setState({swiping:!0})}),R(x(e),"onSwipeEnd",function(){e.setState({swiping:!1})}),R(x(e),"onSwipeMove",function(o){var a=o.x;if(!e.state.itemSize||!e.itemsWrapperRef||!e.state.visibleItems)return!1;var s=0,u=C.Children.count(e.props.children),p=-(e.state.firstItem*100)/e.state.visibleItems,v=Math.max(u-e.state.visibleItems,0),y=-v*100/e.state.visibleItems;p===s&&a>0&&(a=0),p===y&&a<0&&(a=0);var P=e.itemsWrapperRef.clientWidth,O=p+100/(P/a);return e.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(I){e.itemsListRef.style[I]=(0,Re.default)(O,"%",e.props.axis)}),!0}),R(x(e),"slideRight",function(o){e.moveTo(e.state.firstItem-(typeof o=="number"?o:1))}),R(x(e),"slideLeft",function(o){e.moveTo(e.state.firstItem+(typeof o=="number"?o:1))}),R(x(e),"moveTo",function(o){o=o<0?0:o,o=o>=e.state.lastPosition?e.state.lastPosition:o,e.setState({firstItem:o})}),e.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},e}return it(i,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(e){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,G.default)().addEventListener("resize",this.updateSizes),(0,G.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,G.default)().removeEventListener("resize",this.updateSizes),(0,G.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(e){var o=e;return e>=this.state.lastPosition&&(o=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(o=this.state.firstItem),e<this.state.firstItem&&(o=e),o}},{key:"renderItems",value:function(){var e=this;return this.props.children.map(function(o,a){var s=H.default.ITEM(!1,a===e.state.selectedItem),u={key:a,ref:function(v){return e.setThumbsRef(v,a)},className:s,onClick:e.handleClickItem.bind(e,a,e.props.children[a]),onKeyDown:e.handleClickItem.bind(e,a,e.props.children[a]),"aria-label":"".concat(e.props.labels.item," ").concat(a+1),style:{width:e.props.thumbWidth}};return C.default.createElement("li",ye({},u,{role:"button",tabIndex:0}),o)})}},{key:"render",value:function(){var e=this;if(!this.props.children)return null;var o=C.Children.count(this.props.children)>1,a=this.state.showArrows&&this.state.firstItem>0,s=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,u={},p=-this.state.firstItem*(this.state.itemSize||0),v=(0,Re.default)(p,"px",this.props.axis),y=this.props.transitionTime+"ms";return u={WebkitTransform:v,MozTransform:v,MsTransform:v,OTransform:v,transform:v,msTransform:v,WebkitTransitionDuration:y,MozTransitionDuration:y,MsTransitionDuration:y,OTransitionDuration:y,transitionDuration:y,msTransitionDuration:y},C.default.createElement("div",{className:H.default.CAROUSEL(!1)},C.default.createElement("div",{className:H.default.WRAPPER(!1),ref:this.setItemsWrapperRef},C.default.createElement("button",{type:"button",className:H.default.ARROW_PREV(!a),onClick:function(){return e.slideRight()},"aria-label":this.props.labels.leftArrow}),o?C.default.createElement(et.default,{tagName:"ul",className:H.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:u,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):C.default.createElement("ul",{className:H.default.SLIDER(!1,this.state.swiping),ref:function(O){return e.setItemsListRef(O)},style:u},this.renderItems()),C.default.createElement("button",{type:"button",className:H.default.ARROW_NEXT(!s),onClick:function(){return e.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),i}(C.Component);V.default=Ae;R(Ae,"displayName","Thumbs");R(Ae,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var ce={};Object.defineProperty(ce,"__esModule",{value:!0});ce.default=void 0;var ut=function(){return document};ce.default=ut;var E={};Object.defineProperty(E,"__esModule",{value:!0});E.setPosition=E.getPosition=E.isKeyboardEvent=E.defaultStatusFormatter=E.noop=void 0;var ft=k,ct=pt(F);function pt(t){return t&&t.__esModule?t:{default:t}}var dt=function(){};E.noop=dt;var ht=function(n,i){return"".concat(n," of ").concat(i)};E.defaultStatusFormatter=ht;var mt=function(n){return n?n.hasOwnProperty("key"):!1};E.isKeyboardEvent=mt;var vt=function(n,i){if(i.infiniteLoop&&++n,n===0)return 0;var r=ft.Children.count(i.children);if(i.centerMode&&i.axis==="horizontal"){var e=-n*i.centerSlidePercentage,o=r-1;return n&&(n!==o||i.infiniteLoop)?e+=(100-i.centerSlidePercentage)/2:n===o&&(e+=100-i.centerSlidePercentage),e}return-n*100};E.getPosition=vt;var yt=function(n,i){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(e){r[e]=(0,ct.default)(n,"%",i)}),r};E.setPosition=yt;var L={};Object.defineProperty(L,"__esModule",{value:!0});L.fadeAnimationHandler=L.slideStopSwipingHandler=L.slideSwipeAnimationHandler=L.slideAnimationHandler=void 0;var We=k,gt=wt(F),D=E;function wt(t){return t&&t.__esModule?t:{default:t}}function Ee(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function U(t){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Ee(Object(i),!0).forEach(function(r){St(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Ee(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function St(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}var bt=function(n,i){var r={},e=i.selectedItem,o=e,a=We.Children.count(n.children)-1,s=n.infiniteLoop&&(e<0||e>a);if(s)return o<0?n.centerMode&&n.centerSlidePercentage&&n.axis==="horizontal"?r.itemListStyle=(0,D.setPosition)(-(a+2)*n.centerSlidePercentage-(100-n.centerSlidePercentage)/2,n.axis):r.itemListStyle=(0,D.setPosition)(-(a+2)*100,n.axis):o>a&&(r.itemListStyle=(0,D.setPosition)(0,n.axis)),r;var u=(0,D.getPosition)(e,n),p=(0,gt.default)(u,"%",n.axis),v=n.transitionTime+"ms";return r.itemListStyle={WebkitTransform:p,msTransform:p,OTransform:p,transform:p},i.swiping||(r.itemListStyle=U(U({},r.itemListStyle),{},{WebkitTransitionDuration:v,MozTransitionDuration:v,OTransitionDuration:v,transitionDuration:v,msTransitionDuration:v})),r};L.slideAnimationHandler=bt;var At=function(n,i,r,e){var o={},a=i.axis==="horizontal",s=We.Children.count(i.children),u=0,p=(0,D.getPosition)(r.selectedItem,i),v=i.infiniteLoop?(0,D.getPosition)(s-1,i)-100:(0,D.getPosition)(s-1,i),y=a?n.x:n.y,P=y;p===u&&y>0&&(P=0),p===v&&y<0&&(P=0);var O=p+100/(r.itemSize/P),I=Math.abs(y)>i.swipeScrollTolerance;return i.infiniteLoop&&I&&(r.selectedItem===0&&O>-100?O-=s*100:r.selectedItem===s-1&&O<-s*100&&(O+=s*100)),(!i.preventMovementUntilSwipeScrollTolerance||I||r.swipeMovementStarted)&&(r.swipeMovementStarted||e({swipeMovementStarted:!0}),o.itemListStyle=(0,D.setPosition)(O,i.axis)),I&&!r.cancelClick&&e({cancelClick:!0}),o};L.slideSwipeAnimationHandler=At;var _t=function(n,i){var r=(0,D.getPosition)(i.selectedItem,n),e=(0,D.setPosition)(r,n.axis);return{itemListStyle:e}};L.slideStopSwipingHandler=_t;var Ot=function(n,i){var r=n.transitionTime+"ms",e="ease-in-out",o={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:e,msTransitionTimingFunction:e,MozTransitionTimingFunction:e,WebkitTransitionTimingFunction:e,OTransitionTimingFunction:e};return i.swiping||(o=U(U({},o),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:o,selectedStyle:U(U({},o),{},{opacity:1,position:"relative"}),prevStyle:U({},o)}};L.fadeAnimationHandler=Ot;Object.defineProperty(le,"__esModule",{value:!0});le.default=void 0;var g=xt(k),Pt=X(be),N=X(q),Rt=X(V),ee=X(ce),te=X(Q),j=E,ae=L;function X(t){return t&&t.__esModule?t:{default:t}}function ze(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return ze=function(){return t},t}function xt(t){if(t&&t.__esModule)return t;if(t===null||$(t)!=="object"&&typeof t!="function")return{default:t};var n=ze();if(n&&n.has(t))return n.get(t);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var o=r?Object.getOwnPropertyDescriptor(t,e):null;o&&(o.get||o.set)?Object.defineProperty(i,e,o):i[e]=t[e]}return i.default=t,n&&n.set(t,i),i}function $(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$=function(i){return typeof i}:$=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},$(t)}function we(){return we=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},we.apply(this,arguments)}function Ie(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function M(t){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Ie(Object(i),!0).forEach(function(r){d(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Ie(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function Et(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Te(t,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function It(t,n,i){return n&&Te(t.prototype,n),i&&Te(t,i),t}function Tt(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&Se(t,n)}function Se(t,n){return Se=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r},Se(t,n)}function Ct(t){var n=kt();return function(){var r=se(t),e;if(n){var o=se(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Mt(this,e)}}function Mt(t,n){return n&&($(n)==="object"||typeof n=="function")?n:h(t)}function h(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function kt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function se(t){return se=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},se(t)}function d(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}var _e=function(t){Tt(i,t);var n=Ct(i);function i(r){var e;Et(this,i),e=n.call(this,r),d(h(e),"thumbsRef",void 0),d(h(e),"carouselWrapperRef",void 0),d(h(e),"listRef",void 0),d(h(e),"itemsRef",void 0),d(h(e),"timer",void 0),d(h(e),"animationHandler",void 0),d(h(e),"setThumbsRef",function(a){e.thumbsRef=a}),d(h(e),"setCarouselWrapperRef",function(a){e.carouselWrapperRef=a}),d(h(e),"setListRef",function(a){e.listRef=a}),d(h(e),"setItemsRef",function(a,s){e.itemsRef||(e.itemsRef=[]),e.itemsRef[s]=a}),d(h(e),"autoPlay",function(){g.Children.count(e.props.children)<=1||(e.clearAutoPlay(),e.props.autoPlay&&(e.timer=setTimeout(function(){e.increment()},e.props.interval)))}),d(h(e),"clearAutoPlay",function(){e.timer&&clearTimeout(e.timer)}),d(h(e),"resetAutoPlay",function(){e.clearAutoPlay(),e.autoPlay()}),d(h(e),"stopOnHover",function(){e.setState({isMouseEntered:!0},e.clearAutoPlay)}),d(h(e),"startOnLeave",function(){e.setState({isMouseEntered:!1},e.autoPlay)}),d(h(e),"isFocusWithinTheCarousel",function(){return e.carouselWrapperRef?!!((0,ee.default)().activeElement===e.carouselWrapperRef||e.carouselWrapperRef.contains((0,ee.default)().activeElement)):!1}),d(h(e),"navigateWithKeyboard",function(a){if(e.isFocusWithinTheCarousel()){var s=e.props.axis,u=s==="horizontal",p={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},v=u?p.ArrowRight:p.ArrowDown,y=u?p.ArrowLeft:p.ArrowUp;v===a.keyCode?e.increment():y===a.keyCode&&e.decrement()}}),d(h(e),"updateSizes",function(){if(!(!e.state.initialized||!e.itemsRef||e.itemsRef.length===0)){var a=e.props.axis==="horizontal",s=e.itemsRef[0];if(s){var u=a?s.clientWidth:s.clientHeight;e.setState({itemSize:u}),e.thumbsRef&&e.thumbsRef.updateSizes()}}}),d(h(e),"setMountState",function(){e.setState({hasMount:!0}),e.updateSizes()}),d(h(e),"handleClickItem",function(a,s){if(g.Children.count(e.props.children)!==0){if(e.state.cancelClick){e.setState({cancelClick:!1});return}e.props.onClickItem(a,s),a!==e.state.selectedItem&&e.setState({selectedItem:a})}}),d(h(e),"handleOnChange",function(a,s){g.Children.count(e.props.children)<=1||e.props.onChange(a,s)}),d(h(e),"handleClickThumb",function(a,s){e.props.onClickThumb(a,s),e.moveTo(a)}),d(h(e),"onSwipeStart",function(a){e.setState({swiping:!0}),e.props.onSwipeStart(a)}),d(h(e),"onSwipeEnd",function(a){e.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),e.props.onSwipeEnd(a),e.clearAutoPlay(),e.state.autoPlay&&e.autoPlay()}),d(h(e),"onSwipeMove",function(a,s){e.props.onSwipeMove(s);var u=e.props.swipeAnimationHandler(a,e.props,e.state,e.setState.bind(h(e)));return e.setState(M({},u)),!!Object.keys(u).length}),d(h(e),"decrement",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;e.moveTo(e.state.selectedItem-(typeof a=="number"?a:1))}),d(h(e),"increment",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;e.moveTo(e.state.selectedItem+(typeof a=="number"?a:1))}),d(h(e),"moveTo",function(a){if(typeof a=="number"){var s=g.Children.count(e.props.children)-1;a<0&&(a=e.props.infiniteLoop?s:0),a>s&&(a=e.props.infiniteLoop?0:s),e.selectItem({selectedItem:a}),e.state.autoPlay&&e.state.isMouseEntered===!1&&e.resetAutoPlay()}}),d(h(e),"onClickNext",function(){e.increment(1)}),d(h(e),"onClickPrev",function(){e.decrement(1)}),d(h(e),"onSwipeForward",function(){e.increment(1),e.props.emulateTouch&&e.setState({cancelClick:!0})}),d(h(e),"onSwipeBackwards",function(){e.decrement(1),e.props.emulateTouch&&e.setState({cancelClick:!0})}),d(h(e),"changeItem",function(a){return function(s){(!(0,j.isKeyboardEvent)(s)||s.key==="Enter")&&e.moveTo(a)}}),d(h(e),"selectItem",function(a){e.setState(M({previousItem:e.state.selectedItem},a),function(){e.setState(e.animationHandler(e.props,e.state))}),e.handleOnChange(a.selectedItem,g.Children.toArray(e.props.children)[a.selectedItem])}),d(h(e),"getInitialImage",function(){var a=e.props.selectedItem,s=e.itemsRef&&e.itemsRef[a],u=s&&s.getElementsByTagName("img")||[];return u[0]}),d(h(e),"getVariableItemHeight",function(a){var s=e.itemsRef&&e.itemsRef[a];if(e.state.hasMount&&s&&s.children.length){var u=s.children[0].getElementsByTagName("img")||[];if(u.length>0){var p=u[0];if(!p.complete){var v=function O(){e.forceUpdate(),p.removeEventListener("load",O)};p.addEventListener("load",v)}}var y=u[0]||s.children[0],P=y.clientHeight;return P>0?P:null}return null});var o={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return e.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&ae.fadeAnimationHandler||ae.slideAnimationHandler,e.state=M(M({},o),e.animationHandler(r,o)),e}return It(i,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(e,o){!e.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!e.autoFocus&&this.props.autoFocus&&this.forceFocus(),o.swiping&&!this.state.swiping&&this.setState(M({},this.props.stopSwipingHandler(this.props,this.state))),(e.selectedItem!==this.props.selectedItem||e.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),e.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var e=this;this.bindEvents(),this.state.autoPlay&&g.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var o=e.getInitialImage();o&&!o.complete?o.addEventListener("load",e.setMountState):e.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,te.default)().addEventListener("resize",this.updateSizes),(0,te.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,ee.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,te.default)().removeEventListener("resize",this.updateSizes),(0,te.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,ee.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var e;(e=this.carouselWrapperRef)===null||e===void 0||e.focus()}},{key:"renderItems",value:function(e){var o=this;return this.props.children?g.Children.map(this.props.children,function(a,s){var u=s===o.state.selectedItem,p=s===o.state.previousItem,v=u&&o.state.selectedStyle||p&&o.state.prevStyle||o.state.slideStyle||{};o.props.centerMode&&o.props.axis==="horizontal"&&(v=M(M({},v),{},{minWidth:o.props.centerSlidePercentage+"%"})),o.state.swiping&&o.state.swipeMovementStarted&&(v=M(M({},v),{},{pointerEvents:"none"}));var y={ref:function(O){return o.setItemsRef(O,s)},key:"itemKey"+s+(e?"clone":""),className:N.default.ITEM(!0,s===o.state.selectedItem,s===o.state.previousItem),onClick:o.handleClickItem.bind(o,s,a),style:v};return g.default.createElement("li",y,o.props.renderItem(a,{isSelected:s===o.state.selectedItem,isPrevious:s===o.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var e=this,o=this.props,a=o.showIndicators,s=o.labels,u=o.renderIndicator,p=o.children;return a?g.default.createElement("ul",{className:"control-dots"},g.Children.map(p,function(v,y){return u&&u(e.changeItem(y),y===e.state.selectedItem,y,s.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?g.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,g.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||g.Children.count(this.props.children)===0?null:g.default.createElement(Rt.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var e=this;if(!this.props.children||g.Children.count(this.props.children)===0)return null;var o=this.props.swipeable&&g.Children.count(this.props.children)>1,a=this.props.axis==="horizontal",s=this.props.showArrows&&g.Children.count(this.props.children)>1,u=s&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,p=s&&(this.state.selectedItem<g.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,v=this.renderItems(!0),y=v.shift(),P=v.pop(),O={className:N.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},I={};if(a){if(O.onSwipeLeft=this.onSwipeForward,O.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var Z=this.getVariableItemHeight(this.state.selectedItem);I.height=Z||"auto"}}else O.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,O.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,O.style=M(M({},O.style),{},{height:this.state.itemSize}),I.height=this.state.itemSize;return g.default.createElement("div",{"aria-label":this.props.ariaLabel,className:N.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},g.default.createElement("div",{className:N.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,u,this.props.labels.leftArrow),g.default.createElement("div",{className:N.default.WRAPPER(!0,this.props.axis),style:I},o?g.default.createElement(Pt.default,we({tagName:"ul",innerRef:this.setListRef},O,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&P,this.renderItems(),this.props.infiniteLoop&&y):g.default.createElement("ul",{className:N.default.SLIDER(!0,this.state.swiping),ref:function(B){return e.setListRef(B)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&P,this.renderItems(),this.props.infiniteLoop&&y)),this.props.renderArrowNext(this.onClickNext,p,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),i}(g.default.Component);le.default=_e;d(_e,"displayName","Carousel");d(_e,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:j.noop,onClickThumb:j.noop,onChange:j.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(n,i,r){return g.default.createElement("button",{type:"button","aria-label":r,className:N.default.ARROW_PREV(!i),onClick:n})},renderArrowNext:function(n,i,r){return g.default.createElement("button",{type:"button","aria-label":r,className:N.default.ARROW_NEXT(!i),onClick:n})},renderIndicator:function(n,i,r,e){return g.default.createElement("li",{className:N.default.DOT(i),onClick:n,onKeyDown:n,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(e," ").concat(r+1)})},renderItem:function(n){return n},renderThumbs:function(n){var i=g.Children.map(n,function(r){var e=r;if(r.type!=="img"&&(e=g.Children.toArray(r.props.children).find(function(o){return o.type==="img"})),!!e)return e});return i.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):i},statusFormatter:j.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:ae.slideSwipeAnimationHandler,stopSwipingHandler:ae.slideStopSwipingHandler});var Lt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Carousel",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"CarouselProps",{enumerable:!0,get:function(){return i.CarouselProps}}),Object.defineProperty(t,"Thumbs",{enumerable:!0,get:function(){return r.default}});var n=e(le),i=Lt,r=e(V);function e(o){return o&&o.__esModule?o:{default:o}}})(De);const z="/cartoon-rent-service/assets/images/ponyo.24b26677.png",Dt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAYCAYAAAC7v6DJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKmSURBVHgB7ZlNbtNAFMffm2mD4sawgErEC5ZRus4FegBgnwukB+AA0D09AL0GB0AcIOsEL5FiI7ECJ2mVdObx3iROnDTOh9Qigea3cEZje/Lm7/l48x7CnNH3fiS/wRgybDYzeECo3w/HAYRBlWrTKYRSNyUTHdgMKKszraHUNmMgtMqExTqNuu7uEbj/Uwh1IgoJZnagwhoQhPdsJkoRWAvEzBKkGiGxSmdVbbp4eha7d+VyM+h9IITXZUZJQwoxkUbKnhGj8rIlirYZ9i+DCNnwF7495QHmxJNRh5o+QUEAzypIEFuEq+A3xvnMVHI5edVMyOCFqAqezbA2wfHqkqbyggjI0zIGz0Z4jWxNDLSKdUd5YZT0OjyHW+DZCIt38eTlWbdY50beeBC3WbgOeMqIT6JV4QQnHhn7lcXrgqeMxm3a+/iTXa5i5WLDsHd4CZ5SeD84DwK4L54gAoKnFBbqel2jhXijQe8NeEphHy8c/4jbt0m82BsWuy37MX7kbYOgzZsDWHDu3LVULact7ybeSd6NnHfzsiresJaG4NkKFY6wyzVPzreI/my7C47O5C7LcuRJYMCzFy+ekxtkS/EQPoNnL/KYpALPYXBMszI/qqlCpffz9kBV4N2iLJc8BO/ZjZnA1STpuegTitfMzl/nfwuXPzZEcIk3ae8LeeEORg4UKJmt4TNquSwTUQvInsMjMstKYQZKJWTtkHMDmVKQSWaKzGTFSUddqSlrQmv542pVZy8+QiXZr7/3sZ29Sn8TW10GLbfF2BTXH3br3xG9n705y5ZJB+FIJ65zqBO4Q1evq8c1M52EcmiWTq63JYIoeXf+/ENFblwq8yk1eLmJ5KNbVA0iG3JPI8UZOypJJW5sjLOCiCrLxTFkUmf3FONd9v4B3gIwD4e2dJkAAAAASUVORK5CYII=",Nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgBpZOBDYIwEEWvTOAIHYEN1A3cwDoBOoF0AmWDjuAG4gYdgRG6gf4jd8agTbC85OeAto+mHIaE52V3RFkjNZKQiHgZbhCHrOR5Z063oGuNCO4oG/omSeyPsQDRgS8qCFxGQPJmmxlzsnuqkD2V06ikpnKsShbDkkTlRJVEKuehko7KuY4SfOsetaf/8Vg76E4YbpqB5hMhaPVmlIhxO1MUZe4bM52BLmxRzhmB/9xBViIii8KT+Yfk1ufDD3oGU17pgTMR3Aou6QAAAABJRU5ErkJggg==",Wt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAERSURBVHgBlVON0cFAEN0zXwFfCdGBEqhAVBAqMCpwKggViApEBaiAEq4D6YD3xjNOJoidebPZ33t7e3EmueZpHyoDErk2wAGogCkwlj8w5mZlQcOpeB0lxBKkk4aYR5OFQzEL10peAWfgH8ijQvpmykkVowzY4ISPHjB50BIrNrnI7CIWopiHmnPEjoopZcwPBZx9osbhlb0tpft/tQKrNSnss1RkUEWU28qDdWCDs4zU2ksmfWSDnYx5GxbISey58mUHc/JCgt1Xlrco3stc8HJdFOA6yYAjjeo3jxzOvdVBAfEu/a6heyJXwVPs+ZS9/C8HuAaKTMysWfhSfbxyZ+9n9cBQLv5YJQoP9qt828wNNLFnxQ4QaPMAAAAASUVORK5CYII=",zt=()=>{const[t,n]=k.useState([{id:0,data:[{imgid:"0",imgUrl:z,title:"1번데이터",status:"연체중",like:!1},{imgid:"1",imgUrl:z,title:"2번데이터",status:"대기중",like:!0},{imgid:"2",imgUrl:z,title:"3번데이터",status:"대여중",like:!1},{imgid:"3",imgUrl:z,title:"4번데이터",status:"연체중",like:!1}]},{id:1,data:[{imgid:"4",imgUrl:z,title:"5번데이터",status:"대여중",like:!1},{imgid:"5",imgUrl:z,title:"6번데이터",status:"대기중",like:!1},{imgid:"6",imgUrl:z,title:"7번데이터",status:"연체중",like:!1},{imgid:"7",imgUrl:z,title:"8번데이터",status:"대기중",like:!1}]}]),[i,r]=k.useState(0),e=k.useCallback((a,s)=>{s===a.currentTarget.dataset.id&&(console.log(a.currentTarget.dataset.id,"클릭데이터 아이디"),console.log(s,"클릭 아이디"))},[t.data]),o=k.useCallback(a=>{r(a)},[i]);return b(Y,{children:[b(Le,{props:Dt,style:{height:"740px"},children:[c("h1",{className:"sectionTitle",style:{padding:"0 60px"},children:"내 예약 현황"}),b("div",{className:"navigation",style:{padding:"0 60px 50px 60px"},children:[c("p",{className:"subTitle",children:c("span",{style:{borderBottom:"2px solid #ff8f50",paddingBottom:"5px"},children:"👀한 눈에 보기"})}),b("select",{children:[c("option",{value:"1",children:"전체보기"}),c("option",{value:"2",children:"최근어쩌고"})]})]}),c("div",{children:c(De.Carousel,{autoPlay:!1,infiniteLoop:!0,showThumbs:!1,emulateTouch:!0,swipeable:!0,showIndicators:!1,showStatus:!1,onChange:o,children:t.map(a=>c("div",{className:"con",style:{display:"flex",justifyContent:"space-between",padding:"20px 60px"},children:a.data.map(s=>b("div",{className:"box",style:{border:"1px solid"},children:[c("img",{src:s.imgUrl,alt:"이미지",style:{padding:"20px"}}),b("p",{style:{fontWeight:"700",fontSize:"18px",lineHeight:"25px"},children:["<",s.status,">"]}),b("p",{"data-id":s.imgid,onClick:u=>{e(u,s.imgid)},style:{cursor:"pointer",display:"inline-block"},children:[c("span",{children:c("img",{src:s.like?Nt:Wt,style:{width:"14px",height:"12px"}})}),b("span",{children:[" ",s.title]})]})]},s.imgid))},a.id))})})]}),c("div",{className:"paperBg"})]})},Ht=_.nav`
  margin-bottom: 30px;
`,Ut=_.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`,ne=_.div`
  display: block;
  margin-right: 40px;
`,ie=_.li`
  font-family: "Noto Sans";
  cursor: pointer;
  font-size: 13px;
  text-align: center;
  color: #bebebe;
  margin-bottom: 5px;
  ${({active:t})=>t&&`
    font-weight: bold;
    text-decoration: underline;
  `};
`,re=_.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #bebebe;
  margin-top: 10px;
  margin: auto;
`;function Bt({onChangeFilter:t}){const[n,i]=k.useState("all"),r=e=>{i(e),t(e)};return c(Ht,{children:b(Ut,{children:[b(ne,{children:[b(ie,{className:`navigation__item ${n==="available"?"navigation__item--active":""}`,onClick:()=>r("available"),children:["대여 가능한",c("br",{})," 책만 보기"]}),c(re,{})]}),b(ne,{children:[b(ie,{className:`navigation__item ${n==="comment"?"navigation__item--active":""}`,onClick:()=>r("comment"),children:["댓글순",c("br",{}),"내림차순"]}),c(re,{})]}),b(ne,{children:[b(ie,{className:`navigation__item ${n==="like"?"navigation__item--active":""}`,onClick:()=>r("like"),children:["좋아요순",c("br",{}),"내림차순"]}),c(re,{})]}),b(ne,{children:[b(ie,{className:`navigation__item ${n==="view"?"navigation__item--active":""}`,onClick:()=>r("view"),children:["조회순",c("br",{}),"내림차순"]}),c(re,{})]})]})})}const Ft="/cartoon-rent-service/assets/images/webtoonImg.53511647.png",jt=_.div`
  width: 270px;
  height: 465px;
  background: #ffffff;
`,Kt=_.div``,$t=_.div`
  display: flex;
  width: 280px;
  height: 186px;
  //   background: red;
  justify-content: space-between;
  padding-top: 75px;
  //   margin-right:10px;
  //   margin-left:10px
  background-image: url(${Ft});
  border-radius: 15px;
`,Yt=_.span`
  font-family: "Cafe24 Ssurround";
  margin-left: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 113px;
  color: #ff8f50;
`,qt=_.button`
  width: 39px;
  height: 36px;
  background: #ff8f50;
  border: 3px solid #ff8f50;
  margin-top: 40px;
  margin-right: 20px;
`,Vt=_.span`
  font-family: "Cafe24 Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;

  color: #ffffff;
`,Qt=_.div`
  width: 100%;
  //   margin-right: 20px;
  //   margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Xt=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`,Zt=_.span`
  font-family: "Cafe24 Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 34px;
  text-align: center;
  color: #555555;
`,Jt=_.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  /* identical to box height */

  color: #ff8f50;
`,Gt=_.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`,en=_.div`
  display: flex;
  justify-content: space-between;

  //   align-items: center;
`,tn=_.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  padding-left: 10px;
  /* identical to box height */

  color: #222222;
`,nn=_.span`
  padding-right: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  color: #000000;
`,rn=_.span`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  /* sub txt */

  color: #555555;
`,he=()=>c(Y,{children:b(jt,{children:[c(Kt,{children:b($t,{children:[c(Yt,{children:"1"}),c(qt,{children:c(Vt,{children:"110"})})]})}),b(Qt,{children:[b(Xt,{children:[c(Zt,{children:"기다린 것에 비해서..."}),c(Jt,{children:"[도서관의 주인]"})]}),b(Gt,{children:[b(en,{children:[c(tn,{children:"HEeeeeee"}),c(nn,{children:"댓글(3)"})]}),c(rn,{children:"내용이 뭔소린지 모르겠음..... 근데 너무너무 재미있음....왜 이렇게 많은지는 잘 모르겠음...."})]})]})]})}),on=_.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  margin-top: 50px;
`,an=()=>c(Y,{children:b(on,{children:[c(he,{}),c(he,{}),c(he,{})]})});_.span`
  /* h1 */
  font-family: "Cafe24 Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: #222222;
`;_.span`
  /* h2 gothic */

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 39px;

  /* sub txt */

  color: #555555;
`;_.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
`;const sn=()=>c(Y,{children:b(Le,{children:[c("h1",{className:"sectionTitle",children:"취향 공유하기"}),b("div",{className:"navigation",children:[c("p",{className:"subTitle",children:c("span",{children:"👀한 눈에 보기"})}),c(Bt,{})]}),c("div",{className:"slide",children:c(an,{})})]})}),un=()=>c(Y,{children:b("div",{className:"mainWrap",children:[c("div",{style:{width:"100%",height:"500px",background:" #ddd",textAlign:"center",lineHeight:"250px",fontSize:"36px",borderRadius:"0px 0px 150px 0px"},children:"배너영역"}),c(zt,{}),c(sn,{})]})});export{un as default};
