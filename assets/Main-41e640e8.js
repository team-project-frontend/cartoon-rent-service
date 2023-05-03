import{s as y,r as M,c as Fe,j as p,F as Y,a as s,u as qe,R as Ye,b as ee}from"./index-017bf511.js";const He=y.div`
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
`,Ve=y.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
`,Qe=y.div`
  background-color: #169EF9;
  width: 100%;
  height: 466px;
  border-radius: 150px 0px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Xe=y.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`,Ze=y.div`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 1440px;
  padding: 50px 20px;
  height: 860px;
  display: flex;
  justify-content: center;
`,Je=y.div`
  flex-basis: 360px;
  display: flex;
  flex-direction: column;
`,Ge=y.div`
  font-size: 40px;
  padding: 20px 0 0 20px;
  height: 262px;
`,et=y.div`
  display: flex;
  margin: 0 0 20px 20px;
  height: 100%;
  flex-wrap: wrap;
  align-content: space-between;
  & > button {
    width: 176px;
    height: 69px;
    border-radius: 15px;
    font-size: 29px;
  }
`,tt=y.div`
  background-color: #F2F9FF;
  height: 798px;
`,nt=y.div`
  height: 398px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > h1 {
    font-size: 40px;
    font-weight: 700;
    font-style: normal
  }
  & > h1 > select {
    color: #169EF9;
    border: none;
    outline: 0;
    background-color: #F2F9FF;
    font-size: 40px;
    font-weight: 700;
    text-align: right;
  }
`,it=y.div`
  margin-top: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > button {
    border: 2px solid #169EF9;
    border-radius: 15px;
    width: 213px;
    height: 46px;
  }
  & > button > h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
`;var Ue={},fe={},Pe={},ve={},se={},rt={get exports(){return se},set exports(t){se=t}},ge,Ie;function ot(){if(Ie)return ge;Ie=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ge=t,ge}var ye,Ce;function at(){if(Ce)return ye;Ce=1;var t=ot();function n(){}function r(){}return r.resetWarningCache=n,ye=function(){function i(a,l,c,m,v,w){if(w!==t){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}i.isRequired=i;function e(){return i}var o={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:e,element:i,elementType:i,instanceOf:e,node:i,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:n};return o.PropTypes=o,o},ye}var ke;function st(){return ke||(ke=1,rt.exports=at()()),se}var Me;function lt(){return Me||(Me=1,function(t){(function(n,r){r(t,M,st())})(Fe,function(n,r,i){Object.defineProperty(n,"__esModule",{value:!0}),n.setHasSupportToCaptureOption=T;var e=a(r),o=a(i);function a(f){return f&&f.__esModule?f:{default:f}}var l=Object.assign||function(f){for(var g=1;g<arguments.length;g++){var x=arguments[g];for(var u in x)Object.prototype.hasOwnProperty.call(x,u)&&(f[u]=x[u])}return f};function c(f,g){var x={};for(var u in f)g.indexOf(u)>=0||Object.prototype.hasOwnProperty.call(f,u)&&(x[u]=f[u]);return x}function m(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")}var v=function(){function f(g,x){for(var u=0;u<x.length;u++){var A=x[u];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(g,A.key,A)}}return function(g,x,u){return x&&f(g.prototype,x),u&&f(g,u),g}}();function w(f,g){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:f}function R(f,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);f.prototype=Object.create(g&&g.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(f,g):f.__proto__=g)}var _=!1;function T(f){_=f}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){T(!0)}}))}catch{}function J(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return _?f:f.capture}function me(f){if("touches"in f){var g=f.touches[0],x=g.pageX,u=g.pageY;return{x,y:u}}var A=f.screenX,I=f.screenY;return{x:A,y:I}}var U=function(f){R(g,f);function g(){var x;m(this,g);for(var u=arguments.length,A=Array(u),I=0;I<u;I++)A[I]=arguments[I];var b=w(this,(x=g.__proto__||Object.getPrototypeOf(g)).call.apply(x,[this].concat(A)));return b._handleSwipeStart=b._handleSwipeStart.bind(b),b._handleSwipeMove=b._handleSwipeMove.bind(b),b._handleSwipeEnd=b._handleSwipeEnd.bind(b),b._onMouseDown=b._onMouseDown.bind(b),b._onMouseMove=b._onMouseMove.bind(b),b._onMouseUp=b._onMouseUp.bind(b),b._setSwiperRef=b._setSwiperRef.bind(b),b}return v(g,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,J({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,J({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(u){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(u))}},{key:"_onMouseMove",value:function(u){this.mouseDown&&this._handleSwipeMove(u)}},{key:"_onMouseUp",value:function(u){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(u)}},{key:"_handleSwipeStart",value:function(u){var A=me(u),I=A.x,b=A.y;this.moveStart={x:I,y:b},this.props.onSwipeStart(u)}},{key:"_handleSwipeMove",value:function(u){if(this.moveStart){var A=me(u),I=A.x,b=A.y,G=I-this.moveStart.x,Te=b-this.moveStart.y;this.moving=!0;var $e=this.props.onSwipeMove({x:G,y:Te},u);$e&&u.cancelable&&u.preventDefault(),this.movePosition={deltaX:G,deltaY:Te}}}},{key:"_handleSwipeEnd",value:function(u){this.props.onSwipeEnd(u);var A=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-A?this.props.onSwipeLeft(1,u):this.movePosition.deltaX>A&&this.props.onSwipeRight(1,u),this.movePosition.deltaY<-A?this.props.onSwipeUp(1,u):this.movePosition.deltaY>A&&this.props.onSwipeDown(1,u)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(u){this.swiper=u,this.props.innerRef(u)}},{key:"render",value:function(){var u=this.props;u.tagName;var A=u.className,I=u.style,b=u.children;u.allowMouseEvents,u.onSwipeUp,u.onSwipeDown,u.onSwipeLeft,u.onSwipeRight,u.onSwipeStart,u.onSwipeMove,u.onSwipeEnd,u.innerRef,u.tolerance;var G=c(u,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return e.default.createElement(this.props.tagName,l({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:A,style:I},G),b)}}]),g}(r.Component);U.displayName="ReactSwipe",U.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,innerRef:o.default.func,tolerance:o.default.number.isRequired},U.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},n.default=U})}(ve)),ve}(function(t){(function(n,r){r(t,lt())})(Fe,function(n,r){Object.defineProperty(n,"__esModule",{value:!0});var i=e(r);function e(o){return o&&o.__esModule?o:{default:o}}n.default=i.default})})(Pe);var V={},be={},ut={get exports(){return be},set exports(t){be=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var n={}.hasOwnProperty;function r(){for(var i=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var a=typeof o;if(a==="string"||a==="number")i.push(o);else if(Array.isArray(o)){if(o.length){var l=r.apply(null,o);l&&i.push(l)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){i.push(o.toString());continue}for(var c in o)n.call(o,c)&&o[c]&&i.push(c)}}}return i.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r})()})(ut);Object.defineProperty(V,"__esModule",{value:!0});V.default=void 0;var W=ct(be);function ct(t){return t&&t.__esModule?t:{default:t}}function ft(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var pt={ROOT:function(n){return(0,W.default)(ft({"carousel-root":!0},n||"",!!n))},CAROUSEL:function(n){return(0,W.default)({carousel:!0,"carousel-slider":n})},WRAPPER:function(n,r){return(0,W.default)({"thumbs-wrapper":!n,"slider-wrapper":n,"axis-horizontal":r==="horizontal","axis-vertical":r!=="horizontal"})},SLIDER:function(n,r){return(0,W.default)({thumbs:!n,slider:n,animated:!r})},ITEM:function(n,r,i){return(0,W.default)({thumb:!n,slide:n,selected:r,previous:i})},ARROW_PREV:function(n){return(0,W.default)({"control-arrow control-prev":!0,"control-disabled":n})},ARROW_NEXT:function(n){return(0,W.default)({"control-arrow control-next":!0,"control-disabled":n})},DOT:function(n){return(0,W.default)({dot:!0,selected:n})}};V.default=pt;var Q={},pe={};Object.defineProperty(pe,"__esModule",{value:!0});pe.outerWidth=void 0;var dt=function(n){var r=n.offsetWidth,i=getComputedStyle(n);return r+=parseInt(i.marginLeft)+parseInt(i.marginRight),r};pe.outerWidth=dt;var B={};Object.defineProperty(B,"__esModule",{value:!0});B.default=void 0;var ht=function(n,r,i){var e=n===0?n:n+r,o=i==="horizontal"?[e,0,0]:[0,e,0],a="translate3d",l="("+o.join(",")+")";return a+l};B.default=ht;var X={};Object.defineProperty(X,"__esModule",{value:!0});X.default=void 0;var mt=function(){return window};X.default=mt;Object.defineProperty(Q,"__esModule",{value:!0});Q.default=void 0;var C=yt(M),F=de(V),vt=pe,Le=de(B),gt=de(Pe),te=de(X);function de(t){return t&&t.__esModule?t:{default:t}}function Be(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return Be=function(){return t},t}function yt(t){if(t&&t.__esModule)return t;if(t===null||$(t)!=="object"&&typeof t!="function")return{default:t};var n=Be();if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var o=i?Object.getOwnPropertyDescriptor(t,e):null;o&&(o.get||o.set)?Object.defineProperty(r,e,o):r[e]=t[e]}return r.default=t,n&&n.set(t,r),r}function $(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$=function(r){return typeof r}:$=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},$(t)}function xe(){return xe=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},xe.apply(this,arguments)}function wt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function De(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function St(t,n,r){return n&&De(t.prototype,n),r&&De(t,r),t}function bt(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&Ae(t,n)}function Ae(t,n){return Ae=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},Ae(t,n)}function xt(t){var n=_t();return function(){var i=le(t),e;if(n){var o=le(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return At(this,e)}}function At(t,n){return n&&($(n)==="object"||typeof n=="function")?n:O(t)}function O(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _t(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function le(t){return le=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},le(t)}function P(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var Rt=function(n){return n.hasOwnProperty("key")},Oe=function(t){bt(r,t);var n=xt(r);function r(i){var e;return wt(this,r),e=n.call(this,i),P(O(e),"itemsWrapperRef",void 0),P(O(e),"itemsListRef",void 0),P(O(e),"thumbsRef",void 0),P(O(e),"setItemsWrapperRef",function(o){e.itemsWrapperRef=o}),P(O(e),"setItemsListRef",function(o){e.itemsListRef=o}),P(O(e),"setThumbsRef",function(o,a){e.thumbsRef||(e.thumbsRef=[]),e.thumbsRef[a]=o}),P(O(e),"updateSizes",function(){if(!(!e.props.children||!e.itemsWrapperRef||!e.thumbsRef)){var o=C.Children.count(e.props.children),a=e.itemsWrapperRef.clientWidth,l=e.props.thumbWidth?e.props.thumbWidth:(0,vt.outerWidth)(e.thumbsRef[0]),c=Math.floor(a/l),m=c<o,v=m?o-c:0;e.setState(function(w,R){return{itemSize:l,visibleItems:c,firstItem:m?e.getFirstItem(R.selectedItem):0,lastPosition:v,showArrows:m}})}}),P(O(e),"handleClickItem",function(o,a,l){if(!Rt(l)||l.key==="Enter"){var c=e.props.onSelectItem;typeof c=="function"&&c(o,a)}}),P(O(e),"onSwipeStart",function(){e.setState({swiping:!0})}),P(O(e),"onSwipeEnd",function(){e.setState({swiping:!1})}),P(O(e),"onSwipeMove",function(o){var a=o.x;if(!e.state.itemSize||!e.itemsWrapperRef||!e.state.visibleItems)return!1;var l=0,c=C.Children.count(e.props.children),m=-(e.state.firstItem*100)/e.state.visibleItems,v=Math.max(c-e.state.visibleItems,0),w=-v*100/e.state.visibleItems;m===l&&a>0&&(a=0),m===w&&a<0&&(a=0);var R=e.itemsWrapperRef.clientWidth,_=m+100/(R/a);return e.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(T){e.itemsListRef.style[T]=(0,Le.default)(_,"%",e.props.axis)}),!0}),P(O(e),"slideRight",function(o){e.moveTo(e.state.firstItem-(typeof o=="number"?o:1))}),P(O(e),"slideLeft",function(o){e.moveTo(e.state.firstItem+(typeof o=="number"?o:1))}),P(O(e),"moveTo",function(o){o=o<0?0:o,o=o>=e.state.lastPosition?e.state.lastPosition:o,e.setState({firstItem:o})}),e.state={selectedItem:i.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},e}return St(r,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(e){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,te.default)().addEventListener("resize",this.updateSizes),(0,te.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,te.default)().removeEventListener("resize",this.updateSizes),(0,te.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(e){var o=e;return e>=this.state.lastPosition&&(o=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(o=this.state.firstItem),e<this.state.firstItem&&(o=e),o}},{key:"renderItems",value:function(){var e=this;return this.props.children.map(function(o,a){var l=F.default.ITEM(!1,a===e.state.selectedItem),c={key:a,ref:function(v){return e.setThumbsRef(v,a)},className:l,onClick:e.handleClickItem.bind(e,a,e.props.children[a]),onKeyDown:e.handleClickItem.bind(e,a,e.props.children[a]),"aria-label":"".concat(e.props.labels.item," ").concat(a+1),style:{width:e.props.thumbWidth}};return C.default.createElement("li",xe({},c,{role:"button",tabIndex:0}),o)})}},{key:"render",value:function(){var e=this;if(!this.props.children)return null;var o=C.Children.count(this.props.children)>1,a=this.state.showArrows&&this.state.firstItem>0,l=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,c={},m=-this.state.firstItem*(this.state.itemSize||0),v=(0,Le.default)(m,"px",this.props.axis),w=this.props.transitionTime+"ms";return c={WebkitTransform:v,MozTransform:v,MsTransform:v,OTransform:v,transform:v,msTransform:v,WebkitTransitionDuration:w,MozTransitionDuration:w,MsTransitionDuration:w,OTransitionDuration:w,transitionDuration:w,msTransitionDuration:w},C.default.createElement("div",{className:F.default.CAROUSEL(!1)},C.default.createElement("div",{className:F.default.WRAPPER(!1),ref:this.setItemsWrapperRef},C.default.createElement("button",{type:"button",className:F.default.ARROW_PREV(!a),onClick:function(){return e.slideRight()},"aria-label":this.props.labels.leftArrow}),o?C.default.createElement(gt.default,{tagName:"ul",className:F.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:c,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):C.default.createElement("ul",{className:F.default.SLIDER(!1,this.state.swiping),ref:function(_){return e.setItemsListRef(_)},style:c},this.renderItems()),C.default.createElement("button",{type:"button",className:F.default.ARROW_NEXT(!l),onClick:function(){return e.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),r}(C.Component);Q.default=Oe;P(Oe,"displayName","Thumbs");P(Oe,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var he={};Object.defineProperty(he,"__esModule",{value:!0});he.default=void 0;var Pt=function(){return document};he.default=Pt;var E={};Object.defineProperty(E,"__esModule",{value:!0});E.setPosition=E.getPosition=E.isKeyboardEvent=E.defaultStatusFormatter=E.noop=void 0;var Ot=M,Et=Tt(B);function Tt(t){return t&&t.__esModule?t:{default:t}}var It=function(){};E.noop=It;var Ct=function(n,r){return"".concat(n," of ").concat(r)};E.defaultStatusFormatter=Ct;var kt=function(n){return n?n.hasOwnProperty("key"):!1};E.isKeyboardEvent=kt;var Mt=function(n,r){if(r.infiniteLoop&&++n,n===0)return 0;var i=Ot.Children.count(r.children);if(r.centerMode&&r.axis==="horizontal"){var e=-n*r.centerSlidePercentage,o=i-1;return n&&(n!==o||r.infiniteLoop)?e+=(100-r.centerSlidePercentage)/2:n===o&&(e+=100-r.centerSlidePercentage),e}return-n*100};E.getPosition=Mt;var Lt=function(n,r){var i={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(e){i[e]=(0,Et.default)(n,"%",r)}),i};E.setPosition=Lt;var L={};Object.defineProperty(L,"__esModule",{value:!0});L.fadeAnimationHandler=L.slideStopSwipingHandler=L.slideSwipeAnimationHandler=L.slideAnimationHandler=void 0;var je=M,Dt=Nt(B),D=E;function Nt(t){return t&&t.__esModule?t:{default:t}}function Ne(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,i)}return r}function H(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Ne(Object(r),!0).forEach(function(i){Wt(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ne(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Wt(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var zt=function(n,r){var i={},e=r.selectedItem,o=e,a=je.Children.count(n.children)-1,l=n.infiniteLoop&&(e<0||e>a);if(l)return o<0?n.centerMode&&n.centerSlidePercentage&&n.axis==="horizontal"?i.itemListStyle=(0,D.setPosition)(-(a+2)*n.centerSlidePercentage-(100-n.centerSlidePercentage)/2,n.axis):i.itemListStyle=(0,D.setPosition)(-(a+2)*100,n.axis):o>a&&(i.itemListStyle=(0,D.setPosition)(0,n.axis)),i;var c=(0,D.getPosition)(e,n),m=(0,Dt.default)(c,"%",n.axis),v=n.transitionTime+"ms";return i.itemListStyle={WebkitTransform:m,msTransform:m,OTransform:m,transform:m},r.swiping||(i.itemListStyle=H(H({},i.itemListStyle),{},{WebkitTransitionDuration:v,MozTransitionDuration:v,OTransitionDuration:v,transitionDuration:v,msTransitionDuration:v})),i};L.slideAnimationHandler=zt;var Ft=function(n,r,i,e){var o={},a=r.axis==="horizontal",l=je.Children.count(r.children),c=0,m=(0,D.getPosition)(i.selectedItem,r),v=r.infiniteLoop?(0,D.getPosition)(l-1,r)-100:(0,D.getPosition)(l-1,r),w=a?n.x:n.y,R=w;m===c&&w>0&&(R=0),m===v&&w<0&&(R=0);var _=m+100/(i.itemSize/R),T=Math.abs(w)>r.swipeScrollTolerance;return r.infiniteLoop&&T&&(i.selectedItem===0&&_>-100?_-=l*100:i.selectedItem===l-1&&_<-l*100&&(_+=l*100)),(!r.preventMovementUntilSwipeScrollTolerance||T||i.swipeMovementStarted)&&(i.swipeMovementStarted||e({swipeMovementStarted:!0}),o.itemListStyle=(0,D.setPosition)(_,r.axis)),T&&!i.cancelClick&&e({cancelClick:!0}),o};L.slideSwipeAnimationHandler=Ft;var Ht=function(n,r){var i=(0,D.getPosition)(r.selectedItem,n),e=(0,D.setPosition)(i,n.axis);return{itemListStyle:e}};L.slideStopSwipingHandler=Ht;var Ut=function(n,r){var i=n.transitionTime+"ms",e="ease-in-out",o={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:e,msTransitionTimingFunction:e,MozTransitionTimingFunction:e,WebkitTransitionTimingFunction:e,OTransitionTimingFunction:e};return r.swiping||(o=H(H({},o),{},{WebkitTransitionDuration:i,MozTransitionDuration:i,OTransitionDuration:i,transitionDuration:i,msTransitionDuration:i})),{slideStyle:o,selectedStyle:H(H({},o),{},{opacity:1,position:"relative"}),prevStyle:H({},o)}};L.fadeAnimationHandler=Ut;Object.defineProperty(fe,"__esModule",{value:!0});fe.default=void 0;var S=Kt(M),Bt=Z(Pe),N=Z(V),jt=Z(Q),ne=Z(he),ie=Z(X),K=E,ue=L;function Z(t){return t&&t.__esModule?t:{default:t}}function Ke(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return Ke=function(){return t},t}function Kt(t){if(t&&t.__esModule)return t;if(t===null||q(t)!=="object"&&typeof t!="function")return{default:t};var n=Ke();if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var o=i?Object.getOwnPropertyDescriptor(t,e):null;o&&(o.get||o.set)?Object.defineProperty(r,e,o):r[e]=t[e]}return r.default=t,n&&n.set(t,r),r}function q(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?q=function(r){return typeof r}:q=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},q(t)}function _e(){return _e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},_e.apply(this,arguments)}function We(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,i)}return r}function k(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?We(Object(r),!0).forEach(function(i){d(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):We(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function $t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function ze(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function qt(t,n,r){return n&&ze(t.prototype,n),r&&ze(t,r),t}function Yt(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&Re(t,n)}function Re(t,n){return Re=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},Re(t,n)}function Vt(t){var n=Xt();return function(){var i=ce(t),e;if(n){var o=ce(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return Qt(this,e)}}function Qt(t,n){return n&&(q(n)==="object"||typeof n=="function")?n:h(t)}function h(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Xt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function ce(t){return ce=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},ce(t)}function d(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var Ee=function(t){Yt(r,t);var n=Vt(r);function r(i){var e;$t(this,r),e=n.call(this,i),d(h(e),"thumbsRef",void 0),d(h(e),"carouselWrapperRef",void 0),d(h(e),"listRef",void 0),d(h(e),"itemsRef",void 0),d(h(e),"timer",void 0),d(h(e),"animationHandler",void 0),d(h(e),"setThumbsRef",function(a){e.thumbsRef=a}),d(h(e),"setCarouselWrapperRef",function(a){e.carouselWrapperRef=a}),d(h(e),"setListRef",function(a){e.listRef=a}),d(h(e),"setItemsRef",function(a,l){e.itemsRef||(e.itemsRef=[]),e.itemsRef[l]=a}),d(h(e),"autoPlay",function(){S.Children.count(e.props.children)<=1||(e.clearAutoPlay(),e.props.autoPlay&&(e.timer=setTimeout(function(){e.increment()},e.props.interval)))}),d(h(e),"clearAutoPlay",function(){e.timer&&clearTimeout(e.timer)}),d(h(e),"resetAutoPlay",function(){e.clearAutoPlay(),e.autoPlay()}),d(h(e),"stopOnHover",function(){e.setState({isMouseEntered:!0},e.clearAutoPlay)}),d(h(e),"startOnLeave",function(){e.setState({isMouseEntered:!1},e.autoPlay)}),d(h(e),"isFocusWithinTheCarousel",function(){return e.carouselWrapperRef?!!((0,ne.default)().activeElement===e.carouselWrapperRef||e.carouselWrapperRef.contains((0,ne.default)().activeElement)):!1}),d(h(e),"navigateWithKeyboard",function(a){if(e.isFocusWithinTheCarousel()){var l=e.props.axis,c=l==="horizontal",m={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},v=c?m.ArrowRight:m.ArrowDown,w=c?m.ArrowLeft:m.ArrowUp;v===a.keyCode?e.increment():w===a.keyCode&&e.decrement()}}),d(h(e),"updateSizes",function(){if(!(!e.state.initialized||!e.itemsRef||e.itemsRef.length===0)){var a=e.props.axis==="horizontal",l=e.itemsRef[0];if(l){var c=a?l.clientWidth:l.clientHeight;e.setState({itemSize:c}),e.thumbsRef&&e.thumbsRef.updateSizes()}}}),d(h(e),"setMountState",function(){e.setState({hasMount:!0}),e.updateSizes()}),d(h(e),"handleClickItem",function(a,l){if(S.Children.count(e.props.children)!==0){if(e.state.cancelClick){e.setState({cancelClick:!1});return}e.props.onClickItem(a,l),a!==e.state.selectedItem&&e.setState({selectedItem:a})}}),d(h(e),"handleOnChange",function(a,l){S.Children.count(e.props.children)<=1||e.props.onChange(a,l)}),d(h(e),"handleClickThumb",function(a,l){e.props.onClickThumb(a,l),e.moveTo(a)}),d(h(e),"onSwipeStart",function(a){e.setState({swiping:!0}),e.props.onSwipeStart(a)}),d(h(e),"onSwipeEnd",function(a){e.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),e.props.onSwipeEnd(a),e.clearAutoPlay(),e.state.autoPlay&&e.autoPlay()}),d(h(e),"onSwipeMove",function(a,l){e.props.onSwipeMove(l);var c=e.props.swipeAnimationHandler(a,e.props,e.state,e.setState.bind(h(e)));return e.setState(k({},c)),!!Object.keys(c).length}),d(h(e),"decrement",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;e.moveTo(e.state.selectedItem-(typeof a=="number"?a:1))}),d(h(e),"increment",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;e.moveTo(e.state.selectedItem+(typeof a=="number"?a:1))}),d(h(e),"moveTo",function(a){if(typeof a=="number"){var l=S.Children.count(e.props.children)-1;a<0&&(a=e.props.infiniteLoop?l:0),a>l&&(a=e.props.infiniteLoop?0:l),e.selectItem({selectedItem:a}),e.state.autoPlay&&e.state.isMouseEntered===!1&&e.resetAutoPlay()}}),d(h(e),"onClickNext",function(){e.increment(1)}),d(h(e),"onClickPrev",function(){e.decrement(1)}),d(h(e),"onSwipeForward",function(){e.increment(1),e.props.emulateTouch&&e.setState({cancelClick:!0})}),d(h(e),"onSwipeBackwards",function(){e.decrement(1),e.props.emulateTouch&&e.setState({cancelClick:!0})}),d(h(e),"changeItem",function(a){return function(l){(!(0,K.isKeyboardEvent)(l)||l.key==="Enter")&&e.moveTo(a)}}),d(h(e),"selectItem",function(a){e.setState(k({previousItem:e.state.selectedItem},a),function(){e.setState(e.animationHandler(e.props,e.state))}),e.handleOnChange(a.selectedItem,S.Children.toArray(e.props.children)[a.selectedItem])}),d(h(e),"getInitialImage",function(){var a=e.props.selectedItem,l=e.itemsRef&&e.itemsRef[a],c=l&&l.getElementsByTagName("img")||[];return c[0]}),d(h(e),"getVariableItemHeight",function(a){var l=e.itemsRef&&e.itemsRef[a];if(e.state.hasMount&&l&&l.children.length){var c=l.children[0].getElementsByTagName("img")||[];if(c.length>0){var m=c[0];if(!m.complete){var v=function _(){e.forceUpdate(),m.removeEventListener("load",_)};m.addEventListener("load",v)}}var w=c[0]||l.children[0],R=w.clientHeight;return R>0?R:null}return null});var o={initialized:!1,previousItem:i.selectedItem,selectedItem:i.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:i.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return e.animationHandler=typeof i.animationHandler=="function"&&i.animationHandler||i.animationHandler==="fade"&&ue.fadeAnimationHandler||ue.slideAnimationHandler,e.state=k(k({},o),e.animationHandler(i,o)),e}return qt(r,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(e,o){!e.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!e.autoFocus&&this.props.autoFocus&&this.forceFocus(),o.swiping&&!this.state.swiping&&this.setState(k({},this.props.stopSwipingHandler(this.props,this.state))),(e.selectedItem!==this.props.selectedItem||e.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),e.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var e=this;this.bindEvents(),this.state.autoPlay&&S.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var o=e.getInitialImage();o&&!o.complete?o.addEventListener("load",e.setMountState):e.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,ie.default)().addEventListener("resize",this.updateSizes),(0,ie.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,ne.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,ie.default)().removeEventListener("resize",this.updateSizes),(0,ie.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,ne.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var e;(e=this.carouselWrapperRef)===null||e===void 0||e.focus()}},{key:"renderItems",value:function(e){var o=this;return this.props.children?S.Children.map(this.props.children,function(a,l){var c=l===o.state.selectedItem,m=l===o.state.previousItem,v=c&&o.state.selectedStyle||m&&o.state.prevStyle||o.state.slideStyle||{};o.props.centerMode&&o.props.axis==="horizontal"&&(v=k(k({},v),{},{minWidth:o.props.centerSlidePercentage+"%"})),o.state.swiping&&o.state.swipeMovementStarted&&(v=k(k({},v),{},{pointerEvents:"none"}));var w={ref:function(_){return o.setItemsRef(_,l)},key:"itemKey"+l+(e?"clone":""),className:N.default.ITEM(!0,l===o.state.selectedItem,l===o.state.previousItem),onClick:o.handleClickItem.bind(o,l,a),style:v};return S.default.createElement("li",w,o.props.renderItem(a,{isSelected:l===o.state.selectedItem,isPrevious:l===o.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var e=this,o=this.props,a=o.showIndicators,l=o.labels,c=o.renderIndicator,m=o.children;return a?S.default.createElement("ul",{className:"control-dots"},S.Children.map(m,function(v,w){return c&&c(e.changeItem(w),w===e.state.selectedItem,w,l.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?S.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,S.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||S.Children.count(this.props.children)===0?null:S.default.createElement(jt.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var e=this;if(!this.props.children||S.Children.count(this.props.children)===0)return null;var o=this.props.swipeable&&S.Children.count(this.props.children)>1,a=this.props.axis==="horizontal",l=this.props.showArrows&&S.Children.count(this.props.children)>1,c=l&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,m=l&&(this.state.selectedItem<S.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,v=this.renderItems(!0),w=v.shift(),R=v.pop(),_={className:N.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},T={};if(a){if(_.onSwipeLeft=this.onSwipeForward,_.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var J=this.getVariableItemHeight(this.state.selectedItem);T.height=J||"auto"}}else _.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,_.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,_.style=k(k({},_.style),{},{height:this.state.itemSize}),T.height=this.state.itemSize;return S.default.createElement("div",{"aria-label":this.props.ariaLabel,className:N.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},S.default.createElement("div",{className:N.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,c,this.props.labels.leftArrow),S.default.createElement("div",{className:N.default.WRAPPER(!0,this.props.axis),style:T},o?S.default.createElement(Bt.default,_e({tagName:"ul",innerRef:this.setListRef},_,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&R,this.renderItems(),this.props.infiniteLoop&&w):S.default.createElement("ul",{className:N.default.SLIDER(!0,this.state.swiping),ref:function(U){return e.setListRef(U)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&R,this.renderItems(),this.props.infiniteLoop&&w)),this.props.renderArrowNext(this.onClickNext,m,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),r}(S.default.Component);fe.default=Ee;d(Ee,"displayName","Carousel");d(Ee,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:K.noop,onClickThumb:K.noop,onChange:K.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(n,r,i){return S.default.createElement("button",{type:"button","aria-label":i,className:N.default.ARROW_PREV(!r),onClick:n})},renderArrowNext:function(n,r,i){return S.default.createElement("button",{type:"button","aria-label":i,className:N.default.ARROW_NEXT(!r),onClick:n})},renderIndicator:function(n,r,i,e){return S.default.createElement("li",{className:N.default.DOT(r),onClick:n,onKeyDown:n,value:i,key:i,role:"button",tabIndex:0,"aria-label":"".concat(e," ").concat(i+1)})},renderItem:function(n){return n},renderThumbs:function(n){var r=S.Children.map(n,function(i){var e=i;if(i.type!=="img"&&(e=S.Children.toArray(i.props.children).find(function(o){return o.type==="img"})),!!e)return e});return r.filter(function(i){return i}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):r},statusFormatter:K.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:ue.slideSwipeAnimationHandler,stopSwipingHandler:ue.slideStopSwipingHandler});var Zt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Carousel",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"CarouselProps",{enumerable:!0,get:function(){return r.CarouselProps}}),Object.defineProperty(t,"Thumbs",{enumerable:!0,get:function(){return i.default}});var n=e(fe),r=Zt,i=e(Q);function e(o){return o&&o.__esModule?o:{default:o}}})(Ue);const z="/cartoon-rent-service/assets/images/ponyo.24b26677.png",Jt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAYCAYAAAC7v6DJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKmSURBVHgB7ZlNbtNAFMffm2mD4sawgErEC5ZRus4FegBgnwukB+AA0D09AL0GB0AcIOsEL5FiI7ECJ2mVdObx3iROnDTOh9Qigea3cEZje/Lm7/l48x7CnNH3fiS/wRgybDYzeECo3w/HAYRBlWrTKYRSNyUTHdgMKKszraHUNmMgtMqExTqNuu7uEbj/Uwh1IgoJZnagwhoQhPdsJkoRWAvEzBKkGiGxSmdVbbp4eha7d+VyM+h9IITXZUZJQwoxkUbKnhGj8rIlirYZ9i+DCNnwF7495QHmxJNRh5o+QUEAzypIEFuEq+A3xvnMVHI5edVMyOCFqAqezbA2wfHqkqbyggjI0zIGz0Z4jWxNDLSKdUd5YZT0OjyHW+DZCIt38eTlWbdY50beeBC3WbgOeMqIT6JV4QQnHhn7lcXrgqeMxm3a+/iTXa5i5WLDsHd4CZ5SeD84DwK4L54gAoKnFBbqel2jhXijQe8NeEphHy8c/4jbt0m82BsWuy37MX7kbYOgzZsDWHDu3LVULact7ybeSd6NnHfzsiresJaG4NkKFY6wyzVPzreI/my7C47O5C7LcuRJYMCzFy+ekxtkS/EQPoNnL/KYpALPYXBMszI/qqlCpffz9kBV4N2iLJc8BO/ZjZnA1STpuegTitfMzl/nfwuXPzZEcIk3ae8LeeEORg4UKJmt4TNquSwTUQvInsMjMstKYQZKJWTtkHMDmVKQSWaKzGTFSUddqSlrQmv542pVZy8+QiXZr7/3sZ29Sn8TW10GLbfF2BTXH3br3xG9n705y5ZJB+FIJ65zqBO4Q1evq8c1M52EcmiWTq63JYIoeXf+/ENFblwq8yk1eLmJ5KNbVA0iG3JPI8UZOypJJW5sjLOCiCrLxTFkUmf3FONd9v4B3gIwD4e2dJkAAAAASUVORK5CYII=",Gt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgBpZOBDYIwEEWvTOAIHYEN1A3cwDoBOoF0AmWDjuAG4gYdgRG6gf4jd8agTbC85OeAto+mHIaE52V3RFkjNZKQiHgZbhCHrOR5Z063oGuNCO4oG/omSeyPsQDRgS8qCFxGQPJmmxlzsnuqkD2V06ikpnKsShbDkkTlRJVEKuehko7KuY4SfOsetaf/8Vg76E4YbpqB5hMhaPVmlIhxO1MUZe4bM52BLmxRzhmB/9xBViIii8KT+Yfk1ufDD3oGU17pgTMR3Aou6QAAAABJRU5ErkJggg==",en="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAERSURBVHgBlVON0cFAEN0zXwFfCdGBEqhAVBAqMCpwKggViApEBaiAEq4D6YD3xjNOJoidebPZ33t7e3EmueZpHyoDErk2wAGogCkwlj8w5mZlQcOpeB0lxBKkk4aYR5OFQzEL10peAWfgH8ijQvpmykkVowzY4ISPHjB50BIrNrnI7CIWopiHmnPEjoopZcwPBZx9osbhlb0tpft/tQKrNSnss1RkUEWU28qDdWCDs4zU2ksmfWSDnYx5GxbISey58mUHc/JCgt1Xlrco3stc8HJdFOA6yYAjjeo3jxzOvdVBAfEu/a6heyJXwVPs+ZS9/C8HuAaKTMysWfhSfbxyZ+9n9cBQLv5YJQoP9qt828wNNLFnxQ4QaPMAAAAASUVORK5CYII=",tn=()=>{const[t,n]=M.useState([{id:0,data:[{imgid:"0",imgUrl:z,title:"1번데이터",status:"연체중",like:!1},{imgid:"1",imgUrl:z,title:"2번데이터",status:"대기중",like:!0},{imgid:"2",imgUrl:z,title:"3번데이터",status:"대여중",like:!1},{imgid:"3",imgUrl:z,title:"4번데이터",status:"연체중",like:!1}]},{id:1,data:[{imgid:"4",imgUrl:z,title:"5번데이터",status:"대여중",like:!1},{imgid:"5",imgUrl:z,title:"6번데이터",status:"대기중",like:!1},{imgid:"6",imgUrl:z,title:"7번데이터",status:"연체중",like:!1},{imgid:"7",imgUrl:z,title:"8번데이터",status:"대기중",like:!1}]}]),[r,i]=M.useState(0),e=M.useCallback((a,l)=>{l===a.currentTarget.dataset.id&&(console.log(a.currentTarget.dataset.id,"클릭데이터 아이디"),console.log(l,"클릭 아이디"))},[t.data]),o=M.useCallback(a=>{i(a)},[r]);return p(Y,{children:[p(He,{props:Jt,style:{height:"740px"},children:[s("h1",{className:"sectionTitle",style:{padding:"0 60px"},children:"내 예약 현황"}),p("div",{className:"navigation",style:{padding:"0 60px 50px 60px"},children:[s("p",{className:"subTitle",children:s("span",{style:{borderBottom:"2px solid #ff8f50",paddingBottom:"5px"},children:"👀한 눈에 보기"})}),p("select",{children:[s("option",{value:"1",children:"전체보기"}),s("option",{value:"2",children:"최근어쩌고"})]})]}),s("div",{children:s(Ue.Carousel,{autoPlay:!1,infiniteLoop:!0,showThumbs:!1,emulateTouch:!0,swipeable:!0,showIndicators:!1,showStatus:!1,onChange:o,children:t.map(a=>s("div",{className:"con",style:{display:"flex",justifyContent:"space-between",padding:"20px 60px"},children:a.data.map(l=>p("div",{className:"box",style:{border:"1px solid"},children:[s("img",{src:l.imgUrl,alt:"이미지",style:{padding:"20px"}}),p("p",{style:{fontWeight:"700",fontSize:"18px",lineHeight:"25px"},children:["<",l.status,">"]}),p("p",{"data-id":l.imgid,onClick:c=>{e(c,l.imgid)},style:{cursor:"pointer",display:"inline-block"},children:[s("span",{children:s("img",{src:l.like?Gt:en,style:{width:"14px",height:"12px"}})}),p("span",{children:[" ",l.title]})]})]},l.imgid))},a.id))})})]}),s("div",{className:"paperBg"})]})},nn=y.nav`
  margin-bottom: 30px;
`,rn=y.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`,re=y.div`
  display: block;
  margin-right: 40px;
`,oe=y.li`
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
`,ae=y.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #bebebe;
  margin-top: 10px;
  margin: auto;
`;function on({onChangeFilter:t}){const[n,r]=M.useState("all"),i=e=>{r(e),t(e)};return s(nn,{children:p(rn,{children:[p(re,{children:[p(oe,{className:`navigation__item ${n==="available"?"navigation__item--active":""}`,onClick:()=>i("available"),children:["대여 가능한",s("br",{})," 책만 보기"]}),s(ae,{})]}),p(re,{children:[p(oe,{className:`navigation__item ${n==="comment"?"navigation__item--active":""}`,onClick:()=>i("comment"),children:["댓글순",s("br",{}),"내림차순"]}),s(ae,{})]}),p(re,{children:[p(oe,{className:`navigation__item ${n==="like"?"navigation__item--active":""}`,onClick:()=>i("like"),children:["좋아요순",s("br",{}),"내림차순"]}),s(ae,{})]}),p(re,{children:[p(oe,{className:`navigation__item ${n==="view"?"navigation__item--active":""}`,onClick:()=>i("view"),children:["조회순",s("br",{}),"내림차순"]}),s(ae,{})]})]})})}const an="/cartoon-rent-service/assets/images/webtoonImg.53511647.png",sn=y.div`
  width: 270px;
  height: 465px;
  background: #ffffff;
`,ln=y.div``,un=y.div`
  display: flex;
  width: 280px;
  height: 186px;
  //   background: red;
  justify-content: space-between;
  padding-top: 75px;
  //   margin-right:10px;
  //   margin-left:10px
  background-image: url(${an});
  border-radius: 15px;
`,cn=y.span`
  font-family: "Cafe24 Ssurround";
  margin-left: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 113px;
  color: #ff8f50;
`,fn=y.button`
  width: 39px;
  height: 36px;
  background: #ff8f50;
  border: 3px solid #ff8f50;
  margin-top: 40px;
  margin-right: 20px;
`,pn=y.span`
  font-family: "Cafe24 Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;

  color: #ffffff;
`,dn=y.div`
  width: 100%;
  //   margin-right: 20px;
  //   margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,hn=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`,mn=y.span`
  font-family: "Cafe24 Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 34px;
  text-align: center;
  color: #555555;
`,vn=y.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  /* identical to box height */

  color: #ff8f50;
`,gn=y.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`,yn=y.div`
  display: flex;
  justify-content: space-between;

  //   align-items: center;
`,wn=y.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  padding-left: 10px;
  /* identical to box height */

  color: #222222;
`,Sn=y.span`
  padding-right: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  color: #000000;
`,bn=y.span`
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
`,we=()=>s(Y,{children:p(sn,{children:[s(ln,{children:p(un,{children:[s(cn,{children:"1"}),s(fn,{children:s(pn,{children:"110"})})]})}),p(dn,{children:[p(hn,{children:[s(mn,{children:"기다린 것에 비해서..."}),s(vn,{children:"[도서관의 주인]"})]}),p(gn,{children:[p(yn,{children:[s(wn,{children:"HEeeeeee"}),s(Sn,{children:"댓글(3)"})]}),s(bn,{children:"내용이 뭔소린지 모르겠음..... 근데 너무너무 재미있음....왜 이렇게 많은지는 잘 모르겠음...."})]})]})]})}),xn=y.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  margin-top: 50px;
`,An=()=>s(Y,{children:p(xn,{children:[s(we,{}),s(we,{}),s(we,{})]})});y.span`
  /* h1 */
  font-family: "Cafe24 Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: #222222;
`;y.span`
  /* h2 gothic */

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 39px;

  /* sub txt */

  color: #555555;
`;y.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
`;const _n=()=>s(Y,{children:p(He,{children:[s("h1",{className:"sectionTitle",children:"취향 공유하기"}),p("div",{className:"navigation",children:[s("p",{className:"subTitle",children:s("span",{children:"👀한 눈에 보기"})}),s(on,{})]}),s("div",{className:"slide",children:s(An,{})})]})});function Rn(t){const n=qe();function r(i){n(`${i}`)}return p(Ve,{children:[p(Qe,{id:"top-area",children:[s("div",{style:{fontSize:"40px",flexBasis:"60px"},children:"당신의 취향은?"}),s("div",{style:{fontSize:"18px",flexBasis:"30px"},children:"취향별로 골라보는 만화책! 최고 👏👏😀😀👏"}),p(Xe,{id:"list",children:[s("div",{id:"icon",children:"판타지"}),s("div",{id:"icon",children:"액션"}),s("div",{id:"icon",children:"로맨스"}),s("div",{id:"icon",children:"미스터리"}),s("div",{id:"icon",children:"코미디"})]})]}),s(Ze,{id:"wrapper",children:p(Je,{id:"side-area",children:[p(Ge,{id:"sideTitle",children:[s("p",{children:"카테고리별"}),s("p",{children:"인기 순위"})]}),p(et,{id:"sideButtonList",children:[s("button",{style:{backgroundColor:"#169EF9",color:"white",border:"none"},onClick:()=>r("/"),children:"#작품별 🎨"}),s("button",{style:{backgroundColor:"white",border:"2px solid #169EF9"},onClick:()=>r("/bybookstore"),children:"#책방별 🏰"}),s("button",{style:{backgroundColor:"white",border:"2px solid #169EF9"},onClick:()=>r("/byauthor"),children:"#작가별 🖊️"})]})]})}),p(tt,{id:"bottom-area",children:[p(nt,{id:"bottom-content",children:[p("h1",{children:[p("select",{children:[s("option",{value:"박진감 넘치는",children:"박진감 넘치는"}),s("option",{value:"시간 가는줄 모르는",children:"시간 가는줄 모르는"})]}),"분위기의"]}),p("h1",{style:{marginTop:"20px"},children:[p("select",{children:[s("option",{value:"판타지",children:"판타지"}),s("option",{value:"액션",children:"액션"}),s("option",{value:"로맨스",children:"로맨스"}),s("option",{value:"미스터리",children:"미스터리"}),s("option",{value:"코미디",children:"코미디"})]}),"만화책이 읽고싶어요."]}),p(it,{children:[s("button",{style:{backgroundColor:"white",margin:"0 18px"},children:s("h3",{style:{color:"#169EF9"},children:"키워드별 랭킹 보기"})}),s("button",{style:{backgroundColor:"#169EF9"},children:s("h3",{style:{color:"#C6E8FF"},children:"키워드로 검색하기"})})]})]}),s("div",{id:"slider",style:{height:"400px",backgroundColor:"pink",fontSize:"60px"},children:"slider 영역"})]}),s("div",{className:"paperBg"})]})}function j({no:t,imgSrc:n}){return p("div",{style:{backgroundColor:"#F2F9FF",margin:t==1?"0":"0 15px",width:t==1?"401px":"189.5px",height:t==1?"620px":"300px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[s("div",{id:"number",style:{width:"35px",height:"35px",left:"20px",top:"20.22px",backgroundColor:"#FFFFFF",boxShadow:"inset 3px 4px 4px #EBEBEB",borderRadius:"150px",color:"#169EF9",fontSize:"18px",fontWeight:"700",lineHeight:"35px"},children:t}),s("img",{src:n,style:{width:t==1?"200px":"100px",height:t==1?"300px":"150px"}})]})}function Se(){return p("div",{id:"content-area",style:{backgroundColor:"yellow",flexBasis:"840px"},children:[s(j,{no:"1",imgSrc:"src/assets/images/귀칼.jpg"}),s(j,{no:"2",imgSrc:"src/assets/images/슬램덩크.jpg"}),s(j,{no:"3",imgSrc:"src/assets/images/원펀맨.jpg"}),s(j,{no:"4",imgSrc:"src/assets/images/원피스.jpg"}),s(j,{no:"5",imgSrc:"src/assets/images/치인트.jpg"})]})}const On=()=>s(Y,{children:p("div",{className:"mainWrap",children:[s("div",{style:{width:"100%",height:"500px",background:" #ddd",textAlign:"center",lineHeight:"250px",fontSize:"36px",borderRadius:"0px 0px 150px 0px"},children:"배너영역"}),s(tn,{}),s(Ye,{children:p(ee,{path:"/",element:s(Rn,{}),children:[s(ee,{path:"/",element:s(Se,{})}),s(ee,{path:"/bybookstore",element:s(Se,{})}),s(ee,{path:"/byauthor",element:s(Se,{})})]})}),s(_n,{})]})});export{On as default};
