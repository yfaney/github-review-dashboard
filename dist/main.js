!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){e.exports=r(4)()},function(e,t,r){"use strict";e.exports=r(2)},function(e,t,r){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,u,i,c){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[r,n,o,u,i,c],l=0;(e=Error(t.replace(/%s/g,function(){return a[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_={};function O(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||g}function S(){}function j(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=O.prototype;var w=j.prototype=new S;w.constructor=j,n(w,O.prototype),w.isPureReactComponent=!0;var P={current:null},R={current:null},x=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n=void 0,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:R.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var $=/\/+/g,T=[];function q(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var a=!1;if(null===t)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case i:a=!0}}if(a)return n(o,t,""===r?"."+A(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+A(c=t[l],l);a+=e(c,f,n,o)}else if(f=null===t||"object"!=typeof t?null:"function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(c=t.next()).done;)a+=e(c=c.value,f=r+A(c,l++),n,o);else"object"===c&&h("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return a}(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,function(e){return e}):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace($,"$&/")+"/"),M(e,N,t=q(t,u,n,o)),I(t)}function F(){var e=P.current;return null===e&&h("321"),e}var L={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,U,t=q(null,null,t,r)),I(t)},count:function(e){return M(e,function(){return null},null)},toArray:function(e){var t=[];return D(e,t,null,function(e){return e}),t},only:function(e){return k(e)||h("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:c,StrictMode:a,Suspense:d,createElement:E,cloneElement:function(e,t,r){null==e&&h("267",e);var o=void 0,i=n({},e.props),c=e.key,a=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,l=R.current),void 0!==t.key&&(c=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)x.call(t,o)&&!C.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];i.children=f}return{$$typeof:u,type:e.type,key:c,ref:a,props:i,_owner:l}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:k,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentOwner:R,assign:n}},V={default:L},B=V&&L||V;e.exports=B.default||B},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,c,a=i(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(a[f]=r[f]);if(n){c=n(r);for(var s=0;s<c.length;s++)u.call(r,c[s])&&(a[c[s]]=r[c[s]])}}return a}},function(e,t,r){"use strict";var n=r(5);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),u=r.n(o),i=function(e){var t=e.label,r=e.text,n=e.type,o=e.id,u=e.value,i=e.handleChange;return React.createElement("div",{className:"form-group"},React.createElement("label",{htmlFor:t},r),React.createElement("input",{type:n,className:"form-control",id:o,value:u,onChange:i,required:!0}))};i.propTypes={label:u.a.string.isRequired,text:u.a.string.isRequired,type:u.a.string.isRequired,id:u.a.string.isRequired,value:u.a.string.isRequired,handleChange:u.a.func.isRequired};var c=i;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){var e,r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(e=!(n=f(t).call(this))||"object"!==a(n)&&"function"!=typeof n?s(r):n).state={seo_title:""},e.handleChange=e.handleChange.bind(s(e)),e}var r,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,n["Component"]),r=t,(o=[{key:"handleChange",value:function(e){var t,r,n;this.setState((t={},r=e.target.id,n=e.target.value,r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t))}},{key:"render",value:function(){var e=this.state.seoTitle;return React.createElement("form",{id:"article-form"},React.createElement(c,{text:"SEO title",label:"seo_title",type:"text",id:"seo_title",value:e,handleChange:this.handleChange}))}}])&&l(r.prototype,o),u&&l(r,u),t}(),d=document.getElementById("create-article-form");d&&ReactDOM.render(React.createElement(y,null),d)}]);