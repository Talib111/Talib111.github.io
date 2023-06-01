var nm=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var s7=nm((Ge,Qe)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var rm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Os(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var P2={exports:{}},Fs={},$2={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl=Symbol.for("react.element"),lm=Symbol.for("react.portal"),sm=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),am=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),um=Symbol.for("react.context"),cm=Symbol.for("react.forward_ref"),dm=Symbol.for("react.suspense"),mm=Symbol.for("react.memo"),fm=Symbol.for("react.lazy"),Mu=Symbol.iterator;function pm(e){return e===null||typeof e!="object"?null:(e=Mu&&e[Mu]||e["@@iterator"],typeof e=="function"?e:null)}var O2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F2=Object.assign,D2={};function br(e,t,n){this.props=e,this.context=t,this.refs=D2,this.updater=n||O2}br.prototype.isReactComponent={};br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I2(){}I2.prototype=br.prototype;function oo(e,t,n){this.props=e,this.context=t,this.refs=D2,this.updater=n||O2}var uo=oo.prototype=new I2;uo.constructor=oo;F2(uo,br.prototype);uo.isPureReactComponent=!0;var Eu=Array.isArray,z2=Object.prototype.hasOwnProperty,co={current:null},R2={key:!0,ref:!0,__self:!0,__source:!0};function V2(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)z2.call(t,r)&&!R2.hasOwnProperty(r)&&(l[r]=t[r]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var u=Array(o),c=0;c<o;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:wl,type:e,key:i,ref:a,props:l,_owner:co.current}}function hm(e,t){return{$$typeof:wl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mo(e){return typeof e=="object"&&e!==null&&e.$$typeof===wl}function xm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tu=/\/+/g;function Ci(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xm(""+e.key):t.toString(36)}function ql(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case wl:case lm:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Ci(a,0):r,Eu(l)?(n="",e!=null&&(n=e.replace(Tu,"$&/")+"/"),ql(l,t,n,"",function(c){return c})):l!=null&&(mo(l)&&(l=hm(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Tu,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Eu(e))for(var o=0;o<e.length;o++){i=e[o];var u=r+Ci(i,o);a+=ql(i,t,n,u,l)}else if(u=pm(e),typeof u=="function")for(e=u.call(e),o=0;!(i=e.next()).done;)i=i.value,u=r+Ci(i,o++),a+=ql(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function El(e,t,n){if(e==null)return e;var r=[],l=0;return ql(e,r,"","",function(i){return t.call(n,i,l++)}),r}function gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Yl={transition:null},vm={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:co};q.Children={map:El,forEach:function(e,t,n){El(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return El(e,function(){t++}),t},toArray:function(e){return El(e,function(t){return t})||[]},only:function(e){if(!mo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=br;q.Fragment=sm;q.Profiler=am;q.PureComponent=oo;q.StrictMode=im;q.Suspense=dm;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vm;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=F2({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=co.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)z2.call(t,u)&&!R2.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){o=Array(u);for(var c=0;c<u;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:wl,type:e.type,key:l,ref:i,props:r,_owner:a}};q.createContext=function(e){return e={$$typeof:um,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:om,_context:e},e.Consumer=e};q.createElement=V2;q.createFactory=function(e){var t=V2.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:cm,render:e}};q.isValidElement=mo;q.lazy=function(e){return{$$typeof:fm,_payload:{_status:-1,_result:e},_init:gm}};q.memo=function(e,t){return{$$typeof:mm,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Yl.transition;Yl.transition={};try{e()}finally{Yl.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return Fe.current.useCallback(e,t)};q.useContext=function(e){return Fe.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};q.useEffect=function(e,t){return Fe.current.useEffect(e,t)};q.useId=function(){return Fe.current.useId()};q.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Fe.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};q.useRef=function(e){return Fe.current.useRef(e)};q.useState=function(e){return Fe.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Fe.current.useTransition()};q.version="18.2.0";$2.exports=q;var j=$2.exports;const Ve=Os(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=j,bm=Symbol.for("react.element"),wm=Symbol.for("react.fragment"),Cm=Object.prototype.hasOwnProperty,Nm=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jm={key:!0,ref:!0,__self:!0,__source:!0};function B2(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Cm.call(t,r)&&!jm.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:bm,type:e,key:i,ref:a,props:l,_owner:Nm.current}}Fs.Fragment=wm;Fs.jsx=B2;Fs.jsxs=B2;P2.exports=Fs;var s=P2.exports,na={},U2={exports:{}},Je={},Z2={exports:{}},H2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,M){var A=N.length;N.push(M);e:for(;0<A;){var Z=A-1>>>1,H=N[Z];if(0<l(H,M))N[Z]=M,N[A]=H,A=Z;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],A=N.pop();if(A!==M){N[0]=A;e:for(var Z=0,H=N.length,J=H>>>1;Z<J;){var fe=2*(Z+1)-1,je=N[fe],Te=fe+1,He=N[Te];if(0>l(je,A))Te<H&&0>l(He,je)?(N[Z]=He,N[Te]=A,Z=Te):(N[Z]=je,N[fe]=A,Z=fe);else if(Te<H&&0>l(He,A))N[Z]=He,N[Te]=A,Z=Te;else break e}}return M}function l(N,M){var A=N.sortIndex-M.sortIndex;return A!==0?A:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var u=[],c=[],x=1,h=null,f=3,b=!1,C=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=N)r(c),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(c)}}function y(N){if(w=!1,g(N),!C)if(n(u)!==null)C=!0,B(k);else{var M=n(c);M!==null&&L(y,M.startTime-N)}}function k(N,M){C=!1,w&&(w=!1,p(D),D=-1),b=!0;var A=f;try{for(g(M),h=n(u);h!==null&&(!(h.expirationTime>M)||N&&!Y());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,f=h.priorityLevel;var H=Z(h.expirationTime<=M);M=e.unstable_now(),typeof H=="function"?h.callback=H:h===n(u)&&r(u),g(M)}else r(u);h=n(u)}if(h!==null)var J=!0;else{var fe=n(c);fe!==null&&L(y,fe.startTime-M),J=!1}return J}finally{h=null,f=A,b=!1}}var P=!1,O=null,D=-1,U=5,E=-1;function Y(){return!(e.unstable_now()-E<U)}function Ne(){if(O!==null){var N=e.unstable_now();E=N;var M=!0;try{M=O(!0,N)}finally{M?R():(P=!1,O=null)}}else P=!1}var R;if(typeof m=="function")R=function(){m(Ne)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,T=$.port2;$.port1.onmessage=Ne,R=function(){T.postMessage(null)}}else R=function(){_(Ne,0)};function B(N){O=N,P||(P=!0,R())}function L(N,M){D=_(function(){N(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){C||b||(C=!0,B(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var A=f;f=M;try{return N()}finally{f=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var A=f;f=N;try{return M()}finally{f=A}},e.unstable_scheduleCallback=function(N,M,A){var Z=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?Z+A:Z):A=Z,N){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=A+H,N={id:x++,callback:M,priorityLevel:N,startTime:A,expirationTime:H,sortIndex:-1},A>Z?(N.sortIndex=A,t(c,N),n(u)===null&&N===n(c)&&(w?(p(D),D=-1):w=!0,L(y,A-Z))):(N.sortIndex=H,t(u,N),C||b||(C=!0,B(k))),N},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(N){var M=f;return function(){var A=f;f=M;try{return N.apply(this,arguments)}finally{f=A}}}})(H2);Z2.exports=H2;var km=Z2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W2=j,Xe=km;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q2=new Set,Jr={};function $n(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(Jr[e]=t,e=0;e<t.length;e++)q2.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ra=Object.prototype.hasOwnProperty,Sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_u={},Au={};function Mm(e){return ra.call(Au,e)?!0:ra.call(_u,e)?!1:Sm.test(e)?Au[e]=!0:(_u[e]=!0,!1)}function Em(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tm(e,t,n,r){if(t===null||typeof t>"u"||Em(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var fo=/[\-:]([a-z])/g;function po(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fo,po);Ee[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fo,po);Ee[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fo,po);Ee[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function ho(e,t,n,r){var l=Ee.hasOwnProperty(t)?Ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tm(t,n,l,r)&&(n=null),r||l===null?Mm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=W2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),xo=Symbol.for("react.strict_mode"),la=Symbol.for("react.profiler"),Y2=Symbol.for("react.provider"),G2=Symbol.for("react.context"),go=Symbol.for("react.forward_ref"),sa=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),vo=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Q2=Symbol.for("react.offscreen"),Lu=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=Lu&&e[Lu]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Ni;function Ir(e){if(Ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ni=t&&t[1]||""}return`
`+Ni+e}var ji=!1;function ki(e,t){if(!e||ji)return"";ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,o=i.length-1;1<=a&&0<=o&&l[a]!==i[o];)o--;for(;1<=a&&0<=o;a--,o--)if(l[a]!==i[o]){if(a!==1||o!==1)do if(a--,o--,0>o||l[a]!==i[o]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=o);break}}}finally{ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ir(e):""}function _m(e){switch(e.tag){case 5:return Ir(e.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 2:case 15:return e=ki(e.type,!1),e;case 11:return e=ki(e.type.render,!1),e;case 1:return e=ki(e.type,!0),e;default:return""}}function aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Wn:return"Portal";case la:return"Profiler";case xo:return"StrictMode";case sa:return"Suspense";case ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case G2:return(e.displayName||"Context")+".Consumer";case Y2:return(e._context.displayName||"Context")+".Provider";case go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vo:return t=e.displayName||null,t!==null?t:aa(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return aa(e(t))}catch{}}return null}function Am(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return aa(t);case 8:return t===xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function K2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lm(e){var t=K2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _l(e){e._valueTracker||(e._valueTracker=Lm(e))}function X2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=K2(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function as(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oa(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function J2(e,t){t=t.checked,t!=null&&ho(e,"checked",t,!1)}function ua(e,t){J2(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ca(e,t.type,n):t.hasOwnProperty("defaultValue")&&ca(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ca(e,t,n){(t!=="number"||as(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function da(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(zr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function e0(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function t0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ma(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?t0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Al,n0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Al.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function el(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pm=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){Pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function r0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function l0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=r0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var $m=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(e,t){if(t){if($m[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ha=null;function yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xa=null,ir=null,ar=null;function Du(e){if(e=jl(e)){if(typeof xa!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Vs(t),xa(e.stateNode,e.type,t))}}function s0(e){ir?ar?ar.push(e):ar=[e]:ir=e}function i0(){if(ir){var e=ir,t=ar;if(ar=ir=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function a0(e,t){return e(t)}function o0(){}var Si=!1;function u0(e,t,n){if(Si)return e(t,n);Si=!0;try{return a0(e,t,n)}finally{Si=!1,(ir!==null||ar!==null)&&(o0(),i0())}}function tl(e,t){var n=e.stateNode;if(n===null)return null;var r=Vs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var ga=!1;if(Ft)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){ga=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{ga=!1}function Om(e,t,n,r,l,i,a,o,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(x){this.onError(x)}}var Ur=!1,os=null,us=!1,va=null,Fm={onError:function(e){Ur=!0,os=e}};function Dm(e,t,n,r,l,i,a,o,u){Ur=!1,os=null,Om.apply(Fm,arguments)}function Im(e,t,n,r,l,i,a,o,u){if(Dm.apply(this,arguments),Ur){if(Ur){var c=os;Ur=!1,os=null}else throw Error(S(198));us||(us=!0,va=c)}}function On(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function c0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Iu(e){if(On(e)!==e)throw Error(S(188))}function zm(e){var t=e.alternate;if(!t){if(t=On(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Iu(l),e;if(i===r)return Iu(l),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,o=l.child;o;){if(o===n){a=!0,n=l,r=i;break}if(o===r){a=!0,r=l,n=i;break}o=o.sibling}if(!a){for(o=i.child;o;){if(o===n){a=!0,n=i,r=l;break}if(o===r){a=!0,r=i,n=l;break}o=o.sibling}if(!a)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function d0(e){return e=zm(e),e!==null?m0(e):null}function m0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=m0(e);if(t!==null)return t;e=e.sibling}return null}var f0=Xe.unstable_scheduleCallback,zu=Xe.unstable_cancelCallback,Rm=Xe.unstable_shouldYield,Vm=Xe.unstable_requestPaint,de=Xe.unstable_now,Bm=Xe.unstable_getCurrentPriorityLevel,bo=Xe.unstable_ImmediatePriority,p0=Xe.unstable_UserBlockingPriority,cs=Xe.unstable_NormalPriority,Um=Xe.unstable_LowPriority,h0=Xe.unstable_IdlePriority,Ds=null,jt=null;function Zm(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Ds,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:qm,Hm=Math.log,Wm=Math.LN2;function qm(e){return e>>>=0,e===0?32:31-(Hm(e)/Wm|0)|0}var Ll=64,Pl=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ds(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~l;o!==0?r=Rr(o):(i&=a,i!==0&&(r=Rr(i)))}else a=n&~l,a!==0?r=Rr(a):i!==0&&(r=Rr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),l=1<<n,r|=e[n],t&=~l;return r}function Ym(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-xt(i),o=1<<a,u=l[a];u===-1?(!(o&n)||o&r)&&(l[a]=Ym(o,t)):u<=t&&(e.expiredLanes|=o),i&=~o}}function ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function x0(){var e=Ll;return Ll<<=1,!(Ll&4194240)&&(Ll=64),e}function Mi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Qm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-xt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function wo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var K=0;function g0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var v0,Co,y0,b0,w0,ba=!1,$l=[],Qt=null,Kt=null,Xt=null,nl=new Map,rl=new Map,Ht=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ru(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":nl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(t.pointerId)}}function _r(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=jl(t),t!==null&&Co(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Xm(e,t,n,r,l){switch(t){case"focusin":return Qt=_r(Qt,e,t,n,r,l),!0;case"dragenter":return Kt=_r(Kt,e,t,n,r,l),!0;case"mouseover":return Xt=_r(Xt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return nl.set(i,_r(nl.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,rl.set(i,_r(rl.get(i)||null,e,t,n,r,l)),!0}return!1}function C0(e){var t=yn(e.target);if(t!==null){var n=On(t);if(n!==null){if(t=n.tag,t===13){if(t=c0(n),t!==null){e.blockedOn=t,w0(e.priority,function(){y0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ha=r,n.target.dispatchEvent(r),ha=null}else return t=jl(n),t!==null&&Co(t),e.blockedOn=n,!1;t.shift()}return!0}function Vu(e,t,n){Gl(e)&&n.delete(t)}function Jm(){ba=!1,Qt!==null&&Gl(Qt)&&(Qt=null),Kt!==null&&Gl(Kt)&&(Kt=null),Xt!==null&&Gl(Xt)&&(Xt=null),nl.forEach(Vu),rl.forEach(Vu)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,ba||(ba=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,Jm)))}function ll(e){function t(l){return Ar(l,e)}if(0<$l.length){Ar($l[0],e);for(var n=1;n<$l.length;n++){var r=$l[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Ar(Qt,e),Kt!==null&&Ar(Kt,e),Xt!==null&&Ar(Xt,e),nl.forEach(t),rl.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)C0(n),n.blockedOn===null&&Ht.shift()}var or=Rt.ReactCurrentBatchConfig,ms=!0;function ef(e,t,n,r){var l=K,i=or.transition;or.transition=null;try{K=1,No(e,t,n,r)}finally{K=l,or.transition=i}}function tf(e,t,n,r){var l=K,i=or.transition;or.transition=null;try{K=4,No(e,t,n,r)}finally{K=l,or.transition=i}}function No(e,t,n,r){if(ms){var l=wa(e,t,n,r);if(l===null)Di(e,t,r,fs,n),Ru(e,r);else if(Xm(l,e,t,n,r))r.stopPropagation();else if(Ru(e,r),t&4&&-1<Km.indexOf(e)){for(;l!==null;){var i=jl(l);if(i!==null&&v0(i),i=wa(e,t,n,r),i===null&&Di(e,t,r,fs,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Di(e,t,r,null,n)}}var fs=null;function wa(e,t,n,r){if(fs=null,e=yo(r),e=yn(e),e!==null)if(t=On(e),t===null)e=null;else if(n=t.tag,n===13){if(e=c0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fs=e,null}function N0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bm()){case bo:return 1;case p0:return 4;case cs:case Um:return 16;case h0:return 536870912;default:return 16}default:return 16}}var qt=null,jo=null,Ql=null;function j0(){if(Ql)return Ql;var e,t=jo,n=t.length,r,l="value"in qt?qt.value:qt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Ql=l.slice(e,1<r?1-r:void 0)}function Kl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ol(){return!0}function Bu(){return!1}function et(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ol:Bu,this.isPropagationStopped=Bu,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=et(wr),Nl=ue({},wr,{view:0,detail:0}),nf=et(Nl),Ei,Ti,Lr,Is=ue({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Ei=e.screenX-Lr.screenX,Ti=e.screenY-Lr.screenY):Ti=Ei=0,Lr=e),Ei)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),Uu=et(Is),rf=ue({},Is,{dataTransfer:0}),lf=et(rf),sf=ue({},Nl,{relatedTarget:0}),_i=et(sf),af=ue({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),of=et(af),uf=ue({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cf=et(uf),df=ue({},wr,{data:0}),Zu=et(df),mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pf[e])?!!t[e]:!1}function So(){return hf}var xf=ue({},Nl,{key:function(e){if(e.key){var t=mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(e){return e.type==="keypress"?Kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=et(xf),vf=ue({},Is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=et(vf),yf=ue({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),bf=et(yf),wf=ue({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cf=et(wf),Nf=ue({},Is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jf=et(Nf),kf=[9,13,27,32],Mo=Ft&&"CompositionEvent"in window,Zr=null;Ft&&"documentMode"in document&&(Zr=document.documentMode);var Sf=Ft&&"TextEvent"in window&&!Zr,k0=Ft&&(!Mo||Zr&&8<Zr&&11>=Zr),Wu=String.fromCharCode(32),qu=!1;function S0(e,t){switch(e){case"keyup":return kf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Mf(e,t){switch(e){case"compositionend":return M0(t);case"keypress":return t.which!==32?null:(qu=!0,Wu);case"textInput":return e=t.data,e===Wu&&qu?null:e;default:return null}}function Ef(e,t){if(Yn)return e==="compositionend"||!Mo&&S0(e,t)?(e=j0(),Ql=jo=qt=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return k0&&t.locale!=="ko"?null:t.data;default:return null}}var Tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tf[e.type]:t==="textarea"}function E0(e,t,n,r){s0(r),t=ps(t,"onChange"),0<t.length&&(n=new ko("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,sl=null;function _f(e){z0(e,0)}function zs(e){var t=Kn(e);if(X2(t))return e}function Af(e,t){if(e==="change")return t}var T0=!1;if(Ft){var Ai;if(Ft){var Li="oninput"in document;if(!Li){var Gu=document.createElement("div");Gu.setAttribute("oninput","return;"),Li=typeof Gu.oninput=="function"}Ai=Li}else Ai=!1;T0=Ai&&(!document.documentMode||9<document.documentMode)}function Qu(){Hr&&(Hr.detachEvent("onpropertychange",_0),sl=Hr=null)}function _0(e){if(e.propertyName==="value"&&zs(sl)){var t=[];E0(t,sl,e,yo(e)),u0(_f,t)}}function Lf(e,t,n){e==="focusin"?(Qu(),Hr=t,sl=n,Hr.attachEvent("onpropertychange",_0)):e==="focusout"&&Qu()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zs(sl)}function $f(e,t){if(e==="click")return zs(t)}function Of(e,t){if(e==="input"||e==="change")return zs(t)}function Ff(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Ff;function il(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ra.call(t,l)||!vt(e[l],t[l]))return!1}return!0}function Ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xu(e,t){var n=Ku(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ku(n)}}function A0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?A0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function L0(){for(var e=window,t=as();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=as(e.document)}return t}function Eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Df(e){var t=L0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&A0(n.ownerDocument.documentElement,n)){if(r!==null&&Eo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Xu(n,i);var a=Xu(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var If=Ft&&"documentMode"in document&&11>=document.documentMode,Gn=null,Ca=null,Wr=null,Na=!1;function Ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Na||Gn==null||Gn!==as(r)||(r=Gn,"selectionStart"in r&&Eo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&il(Wr,r)||(Wr=r,r=ps(Ca,"onSelect"),0<r.length&&(t=new ko("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function Fl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},Pi={},P0={};Ft&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Rs(e){if(Pi[e])return Pi[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in P0)return Pi[e]=t[n];return e}var $0=Rs("animationend"),O0=Rs("animationiteration"),F0=Rs("animationstart"),D0=Rs("transitionend"),I0=new Map,ec="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){I0.set(e,t),$n(t,[e])}for(var $i=0;$i<ec.length;$i++){var Oi=ec[$i],zf=Oi.toLowerCase(),Rf=Oi[0].toUpperCase()+Oi.slice(1);un(zf,"on"+Rf)}un($0,"onAnimationEnd");un(O0,"onAnimationIteration");un(F0,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(D0,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function tc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Im(r,t,void 0,e),e.currentTarget=null}function z0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],u=o.instance,c=o.currentTarget;if(o=o.listener,u!==i&&l.isPropagationStopped())break e;tc(l,o,c),i=u}else for(a=0;a<r.length;a++){if(o=r[a],u=o.instance,c=o.currentTarget,o=o.listener,u!==i&&l.isPropagationStopped())break e;tc(l,o,c),i=u}}}if(us)throw e=va,us=!1,va=null,e}function re(e,t){var n=t[Ea];n===void 0&&(n=t[Ea]=new Set);var r=e+"__bubble";n.has(r)||(R0(t,e,2,!1),n.add(r))}function Fi(e,t,n){var r=0;t&&(r|=4),R0(n,e,r,t)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function al(e){if(!e[Dl]){e[Dl]=!0,q2.forEach(function(n){n!=="selectionchange"&&(Vf.has(n)||Fi(n,!1,e),Fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dl]||(t[Dl]=!0,Fi("selectionchange",!1,t))}}function R0(e,t,n,r){switch(N0(t)){case 1:var l=ef;break;case 4:l=tf;break;default:l=No}n=l.bind(null,t,n,e),l=void 0,!ga||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Di(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;o!==null;){if(a=yn(o),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}o=o.parentNode}}r=r.return}u0(function(){var c=i,x=yo(n),h=[];e:{var f=I0.get(e);if(f!==void 0){var b=ko,C=e;switch(e){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":b=gf;break;case"focusin":C="focus",b=_i;break;case"focusout":C="blur",b=_i;break;case"beforeblur":case"afterblur":b=_i;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=bf;break;case $0:case O0:case F0:b=of;break;case D0:b=Cf;break;case"scroll":b=nf;break;case"wheel":b=jf;break;case"copy":case"cut":case"paste":b=cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Hu}var w=(t&4)!==0,_=!w&&e==="scroll",p=w?f!==null?f+"Capture":null:f;w=[];for(var m=c,g;m!==null;){g=m;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,p!==null&&(y=tl(m,p),y!=null&&w.push(ol(m,y,g)))),_)break;m=m.return}0<w.length&&(f=new b(f,C,null,n,x),h.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==ha&&(C=n.relatedTarget||n.fromElement)&&(yn(C)||C[Dt]))break e;if((b||f)&&(f=x.window===x?x:(f=x.ownerDocument)?f.defaultView||f.parentWindow:window,b?(C=n.relatedTarget||n.toElement,b=c,C=C?yn(C):null,C!==null&&(_=On(C),C!==_||C.tag!==5&&C.tag!==6)&&(C=null)):(b=null,C=c),b!==C)){if(w=Uu,y="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=Hu,y="onPointerLeave",p="onPointerEnter",m="pointer"),_=b==null?f:Kn(b),g=C==null?f:Kn(C),f=new w(y,m+"leave",b,n,x),f.target=_,f.relatedTarget=g,y=null,yn(x)===c&&(w=new w(p,m+"enter",C,n,x),w.target=g,w.relatedTarget=_,y=w),_=y,b&&C)t:{for(w=b,p=C,m=0,g=w;g;g=Zn(g))m++;for(g=0,y=p;y;y=Zn(y))g++;for(;0<m-g;)w=Zn(w),m--;for(;0<g-m;)p=Zn(p),g--;for(;m--;){if(w===p||p!==null&&w===p.alternate)break t;w=Zn(w),p=Zn(p)}w=null}else w=null;b!==null&&nc(h,f,b,w,!1),C!==null&&_!==null&&nc(h,_,C,w,!0)}}e:{if(f=c?Kn(c):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var k=Af;else if(Yu(f))if(T0)k=Of;else{k=Pf;var P=Lf}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=$f);if(k&&(k=k(e,c))){E0(h,k,n,x);break e}P&&P(e,f,c),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&ca(f,"number",f.value)}switch(P=c?Kn(c):window,e){case"focusin":(Yu(P)||P.contentEditable==="true")&&(Gn=P,Ca=c,Wr=null);break;case"focusout":Wr=Ca=Gn=null;break;case"mousedown":Na=!0;break;case"contextmenu":case"mouseup":case"dragend":Na=!1,Ju(h,n,x);break;case"selectionchange":if(If)break;case"keydown":case"keyup":Ju(h,n,x)}var O;if(Mo)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Yn?S0(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(k0&&n.locale!=="ko"&&(Yn||D!=="onCompositionStart"?D==="onCompositionEnd"&&Yn&&(O=j0()):(qt=x,jo="value"in qt?qt.value:qt.textContent,Yn=!0)),P=ps(c,D),0<P.length&&(D=new Zu(D,e,null,n,x),h.push({event:D,listeners:P}),O?D.data=O:(O=M0(n),O!==null&&(D.data=O)))),(O=Sf?Mf(e,n):Ef(e,n))&&(c=ps(c,"onBeforeInput"),0<c.length&&(x=new Zu("onBeforeInput","beforeinput",null,n,x),h.push({event:x,listeners:c}),x.data=O))}z0(h,t)})}function ol(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ps(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=tl(e,n),i!=null&&r.unshift(ol(e,i,l)),i=tl(e,t),i!=null&&r.push(ol(e,i,l))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nc(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var o=n,u=o.alternate,c=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&c!==null&&(o=c,l?(u=tl(n,i),u!=null&&a.unshift(ol(n,u,o))):l||(u=tl(n,i),u!=null&&a.push(ol(n,u,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Bf=/\r\n?/g,Uf=/\u0000|\uFFFD/g;function rc(e){return(typeof e=="string"?e:""+e).replace(Bf,`
`).replace(Uf,"")}function Il(e,t,n){if(t=rc(t),rc(e)!==t&&n)throw Error(S(425))}function hs(){}var ja=null,ka=null;function Sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,Zf=typeof clearTimeout=="function"?clearTimeout:void 0,lc=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof lc<"u"?function(e){return lc.resolve(null).then(e).catch(Wf)}:Ma;function Wf(e){setTimeout(function(){throw e})}function Ii(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),ll(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);ll(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Cr,ul="__reactProps$"+Cr,Dt="__reactContainer$"+Cr,Ea="__reactEvents$"+Cr,qf="__reactListeners$"+Cr,Yf="__reactHandles$"+Cr;function yn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sc(e);e!==null;){if(n=e[Nt])return n;e=sc(e)}return t}e=n,n=e.parentNode}return null}function jl(e){return e=e[Nt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Vs(e){return e[ul]||null}var Ta=[],Xn=-1;function cn(e){return{current:e}}function se(e){0>Xn||(e.current=Ta[Xn],Ta[Xn]=null,Xn--)}function ne(e,t){Xn++,Ta[Xn]=e.current,e.current=t}var an={},Pe=cn(an),Be=cn(!1),En=an;function fr(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ue(e){return e=e.childContextTypes,e!=null}function xs(){se(Be),se(Pe)}function ic(e,t,n){if(Pe.current!==an)throw Error(S(168));ne(Pe,t),ne(Be,n)}function V0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,Am(e)||"Unknown",l));return ue({},n,r)}function gs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,En=Pe.current,ne(Pe,e),ne(Be,Be.current),!0}function ac(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=V0(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,se(Be),se(Pe),ne(Pe,e)):se(Be),ne(Be,n)}var Lt=null,Bs=!1,zi=!1;function B0(e){Lt===null?Lt=[e]:Lt.push(e)}function Gf(e){Bs=!0,B0(e)}function dn(){if(!zi&&Lt!==null){zi=!0;var e=0,t=K;try{var n=Lt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,Bs=!1}catch(l){throw Lt!==null&&(Lt=Lt.slice(e+1)),f0(bo,dn),l}finally{K=t,zi=!1}}return null}var Jn=[],er=0,vs=null,ys=0,lt=[],st=0,Tn=null,Pt=1,$t="";function hn(e,t){Jn[er++]=ys,Jn[er++]=vs,vs=e,ys=t}function U0(e,t,n){lt[st++]=Pt,lt[st++]=$t,lt[st++]=Tn,Tn=e;var r=Pt;e=$t;var l=32-xt(r)-1;r&=~(1<<l),n+=1;var i=32-xt(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Pt=1<<32-xt(t)+l|n<<l|r,$t=i+e}else Pt=1<<i|n<<l|r,$t=e}function To(e){e.return!==null&&(hn(e,1),U0(e,1,0))}function _o(e){for(;e===vs;)vs=Jn[--er],Jn[er]=null,ys=Jn[--er],Jn[er]=null;for(;e===Tn;)Tn=lt[--st],lt[st]=null,$t=lt[--st],lt[st]=null,Pt=lt[--st],lt[st]=null}var Ke=null,Ye=null,ie=!1,ht=null;function Z0(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function oc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Ye=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Pt,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Ye=null,!0):!1;default:return!1}}function _a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Aa(e){if(ie){var t=Ye;if(t){var n=t;if(!oc(e,t)){if(_a(e))throw Error(S(418));t=Jt(n.nextSibling);var r=Ke;t&&oc(e,t)?Z0(r,n):(e.flags=e.flags&-4097|2,ie=!1,Ke=e)}}else{if(_a(e))throw Error(S(418));e.flags=e.flags&-4097|2,ie=!1,Ke=e}}}function uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function zl(e){if(e!==Ke)return!1;if(!ie)return uc(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sa(e.type,e.memoizedProps)),t&&(t=Ye)){if(_a(e))throw H0(),Error(S(418));for(;t;)Z0(e,t),t=Jt(t.nextSibling)}if(uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Ke?Jt(e.stateNode.nextSibling):null;return!0}function H0(){for(var e=Ye;e;)e=Jt(e.nextSibling)}function pr(){Ye=Ke=null,ie=!1}function Ao(e){ht===null?ht=[e]:ht.push(e)}var Qf=Rt.ReactCurrentBatchConfig;function ft(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var bs=cn(null),ws=null,tr=null,Lo=null;function Po(){Lo=tr=ws=null}function $o(e){var t=bs.current;se(bs),e._currentValue=t}function La(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ur(e,t){ws=e,Lo=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(Lo!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(ws===null)throw Error(S(308));tr=e,ws.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var bn=null;function Oo(e){bn===null?bn=[e]:bn.push(e)}function W0(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Oo(t)):(n.next=l.next,l.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,It(e,n)}return l=r.interleaved,l===null?(t.next=t,Oo(r)):(t.next=l.next,l.next=t),r.interleaved=t,It(e,n)}function Xl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wo(e,n)}}function cc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Cs(e,t,n,r){var l=e.updateQueue;Zt=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var u=o,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var x=e.alternate;x!==null&&(x=x.updateQueue,o=x.lastBaseUpdate,o!==a&&(o===null?x.firstBaseUpdate=c:o.next=c,x.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;a=0,x=c=u=null,o=i;do{var f=o.lane,b=o.eventTime;if((r&f)===f){x!==null&&(x=x.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var C=e,w=o;switch(f=t,b=n,w.tag){case 1:if(C=w.payload,typeof C=="function"){h=C.call(b,h,f);break e}h=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=w.payload,f=typeof C=="function"?C.call(b,h,f):C,f==null)break e;h=ue({},h,f);break e;case 2:Zt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=l.effects,f===null?l.effects=[o]:f.push(o))}else b={eventTime:b,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},x===null?(c=x=b,u=h):x=x.next=b,a|=f;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;f=o,o=f.next,f.next=null,l.lastBaseUpdate=f,l.shared.pending=null}}while(1);if(x===null&&(u=h),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);An|=a,e.lanes=a,e.memoizedState=h}}function dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var Y0=new W2.Component().refs;function Pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),l=nn(e),i=Ot(r,l);i.payload=t,n!=null&&(i.callback=n),t=en(e,i,l),t!==null&&(gt(t,e,l,r),Xl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),l=nn(e),i=Ot(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=en(e,i,l),t!==null&&(gt(t,e,l,r),Xl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=nn(e),l=Ot(n,r);l.tag=2,t!=null&&(l.callback=t),t=en(e,l,r),t!==null&&(gt(t,e,r,n),Xl(t,e,r))}};function mc(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!il(n,r)||!il(l,i):!0}function G0(e,t,n){var r=!1,l=an,i=t.contextType;return typeof i=="object"&&i!==null?i=ot(i):(l=Ue(t)?En:Pe.current,r=t.contextTypes,i=(r=r!=null)?fr(e,l):an),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Us,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function fc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function $a(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=Y0,Fo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=ot(i):(i=Ue(t)?En:Pe.current,l.context=fr(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Pa(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Us.enqueueReplaceState(l,l.state,null),Cs(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var o=l.refs;o===Y0&&(o=l.refs={}),a===null?delete o[i]:o[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Rl(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pc(e){var t=e._init;return t(e._payload)}function Q0(e){function t(p,m){if(e){var g=p.deletions;g===null?(p.deletions=[m],p.flags|=16):g.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function l(p,m){return p=rn(p,m),p.index=0,p.sibling=null,p}function i(p,m,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<m?(p.flags|=2,m):g):(p.flags|=2,m)):(p.flags|=1048576,m)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,m,g,y){return m===null||m.tag!==6?(m=Wi(g,p.mode,y),m.return=p,m):(m=l(m,g),m.return=p,m)}function u(p,m,g,y){var k=g.type;return k===qn?x(p,m,g.props.children,y,g.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ut&&pc(k)===m.type)?(y=l(m,g.props),y.ref=Pr(p,m,g),y.return=p,y):(y=ls(g.type,g.key,g.props,null,p.mode,y),y.ref=Pr(p,m,g),y.return=p,y)}function c(p,m,g,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=qi(g,p.mode,y),m.return=p,m):(m=l(m,g.children||[]),m.return=p,m)}function x(p,m,g,y,k){return m===null||m.tag!==7?(m=jn(g,p.mode,y,k),m.return=p,m):(m=l(m,g),m.return=p,m)}function h(p,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Wi(""+m,p.mode,g),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Tl:return g=ls(m.type,m.key,m.props,null,p.mode,g),g.ref=Pr(p,null,m),g.return=p,g;case Wn:return m=qi(m,p.mode,g),m.return=p,m;case Ut:var y=m._init;return h(p,y(m._payload),g)}if(zr(m)||Er(m))return m=jn(m,p.mode,g,null),m.return=p,m;Rl(p,m)}return null}function f(p,m,g,y){var k=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:o(p,m,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tl:return g.key===k?u(p,m,g,y):null;case Wn:return g.key===k?c(p,m,g,y):null;case Ut:return k=g._init,f(p,m,k(g._payload),y)}if(zr(g)||Er(g))return k!==null?null:x(p,m,g,y,null);Rl(p,g)}return null}function b(p,m,g,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(g)||null,o(m,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Tl:return p=p.get(y.key===null?g:y.key)||null,u(m,p,y,k);case Wn:return p=p.get(y.key===null?g:y.key)||null,c(m,p,y,k);case Ut:var P=y._init;return b(p,m,g,P(y._payload),k)}if(zr(y)||Er(y))return p=p.get(g)||null,x(m,p,y,k,null);Rl(m,y)}return null}function C(p,m,g,y){for(var k=null,P=null,O=m,D=m=0,U=null;O!==null&&D<g.length;D++){O.index>D?(U=O,O=null):U=O.sibling;var E=f(p,O,g[D],y);if(E===null){O===null&&(O=U);break}e&&O&&E.alternate===null&&t(p,O),m=i(E,m,D),P===null?k=E:P.sibling=E,P=E,O=U}if(D===g.length)return n(p,O),ie&&hn(p,D),k;if(O===null){for(;D<g.length;D++)O=h(p,g[D],y),O!==null&&(m=i(O,m,D),P===null?k=O:P.sibling=O,P=O);return ie&&hn(p,D),k}for(O=r(p,O);D<g.length;D++)U=b(O,p,D,g[D],y),U!==null&&(e&&U.alternate!==null&&O.delete(U.key===null?D:U.key),m=i(U,m,D),P===null?k=U:P.sibling=U,P=U);return e&&O.forEach(function(Y){return t(p,Y)}),ie&&hn(p,D),k}function w(p,m,g,y){var k=Er(g);if(typeof k!="function")throw Error(S(150));if(g=k.call(g),g==null)throw Error(S(151));for(var P=k=null,O=m,D=m=0,U=null,E=g.next();O!==null&&!E.done;D++,E=g.next()){O.index>D?(U=O,O=null):U=O.sibling;var Y=f(p,O,E.value,y);if(Y===null){O===null&&(O=U);break}e&&O&&Y.alternate===null&&t(p,O),m=i(Y,m,D),P===null?k=Y:P.sibling=Y,P=Y,O=U}if(E.done)return n(p,O),ie&&hn(p,D),k;if(O===null){for(;!E.done;D++,E=g.next())E=h(p,E.value,y),E!==null&&(m=i(E,m,D),P===null?k=E:P.sibling=E,P=E);return ie&&hn(p,D),k}for(O=r(p,O);!E.done;D++,E=g.next())E=b(O,p,D,E.value,y),E!==null&&(e&&E.alternate!==null&&O.delete(E.key===null?D:E.key),m=i(E,m,D),P===null?k=E:P.sibling=E,P=E);return e&&O.forEach(function(Ne){return t(p,Ne)}),ie&&hn(p,D),k}function _(p,m,g,y){if(typeof g=="object"&&g!==null&&g.type===qn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Tl:e:{for(var k=g.key,P=m;P!==null;){if(P.key===k){if(k=g.type,k===qn){if(P.tag===7){n(p,P.sibling),m=l(P,g.props.children),m.return=p,p=m;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ut&&pc(k)===P.type){n(p,P.sibling),m=l(P,g.props),m.ref=Pr(p,P,g),m.return=p,p=m;break e}n(p,P);break}else t(p,P);P=P.sibling}g.type===qn?(m=jn(g.props.children,p.mode,y,g.key),m.return=p,p=m):(y=ls(g.type,g.key,g.props,null,p.mode,y),y.ref=Pr(p,m,g),y.return=p,p=y)}return a(p);case Wn:e:{for(P=g.key;m!==null;){if(m.key===P)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(p,m.sibling),m=l(m,g.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=qi(g,p.mode,y),m.return=p,p=m}return a(p);case Ut:return P=g._init,_(p,m,P(g._payload),y)}if(zr(g))return C(p,m,g,y);if(Er(g))return w(p,m,g,y);Rl(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(p,m.sibling),m=l(m,g),m.return=p,p=m):(n(p,m),m=Wi(g,p.mode,y),m.return=p,p=m),a(p)):n(p,m)}return _}var hr=Q0(!0),K0=Q0(!1),kl={},kt=cn(kl),cl=cn(kl),dl=cn(kl);function wn(e){if(e===kl)throw Error(S(174));return e}function Do(e,t){switch(ne(dl,t),ne(cl,e),ne(kt,kl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ma(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ma(t,e)}se(kt),ne(kt,t)}function xr(){se(kt),se(cl),se(dl)}function X0(e){wn(dl.current);var t=wn(kt.current),n=ma(t,e.type);t!==n&&(ne(cl,e),ne(kt,n))}function Io(e){cl.current===e&&(se(kt),se(cl))}var ae=cn(0);function Ns(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ri=[];function zo(){for(var e=0;e<Ri.length;e++)Ri[e]._workInProgressVersionPrimary=null;Ri.length=0}var Jl=Rt.ReactCurrentDispatcher,Vi=Rt.ReactCurrentBatchConfig,_n=0,oe=null,pe=null,be=null,js=!1,qr=!1,ml=0,Kf=0;function _e(){throw Error(S(321))}function Ro(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Vo(e,t,n,r,l,i){if(_n=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jl.current=e===null||e.memoizedState===null?t3:n3,e=n(r,l),qr){i=0;do{if(qr=!1,ml=0,25<=i)throw Error(S(301));i+=1,be=pe=null,t.updateQueue=null,Jl.current=r3,e=n(r,l)}while(qr)}if(Jl.current=ks,t=pe!==null&&pe.next!==null,_n=0,be=pe=oe=null,js=!1,t)throw Error(S(300));return e}function Bo(){var e=ml!==0;return ml=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?oe.memoizedState=be=e:be=be.next=e,be}function ut(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=be===null?oe.memoizedState:be.next;if(t!==null)be=t,pe=e;else{if(e===null)throw Error(S(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},be===null?oe.memoizedState=be=e:be=be.next=e}return be}function fl(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=ut(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=pe,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var o=a=null,u=null,c=i;do{var x=c.lane;if((_n&x)===x)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:x,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(o=u=h,a=r):u=u.next=h,oe.lanes|=x,An|=x}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=o,vt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,oe.lanes|=i,An|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ui(e){var t=ut(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);vt(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function J0(){}function e1(e,t){var n=oe,r=ut(),l=t(),i=!vt(r.memoizedState,l);if(i&&(r.memoizedState=l,Re=!0),r=r.queue,Uo(r1.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,pl(9,n1.bind(null,n,r,l,t),void 0,null),we===null)throw Error(S(349));_n&30||t1(n,t,l)}return l}function t1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function n1(e,t,n,r){t.value=n,t.getSnapshot=r,l1(t)&&s1(e)}function r1(e,t,n){return n(function(){l1(t)&&s1(e)})}function l1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function s1(e){var t=It(e,1);t!==null&&gt(t,e,1,-1)}function hc(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fl,lastRenderedState:e},t.queue=e,e=e.dispatch=e3.bind(null,oe,e),[t.memoizedState,e]}function pl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function i1(){return ut().memoizedState}function es(e,t,n,r){var l=Ct();oe.flags|=e,l.memoizedState=pl(1|t,n,void 0,r===void 0?null:r)}function Zs(e,t,n,r){var l=ut();r=r===void 0?null:r;var i=void 0;if(pe!==null){var a=pe.memoizedState;if(i=a.destroy,r!==null&&Ro(r,a.deps)){l.memoizedState=pl(t,n,i,r);return}}oe.flags|=e,l.memoizedState=pl(1|t,n,i,r)}function xc(e,t){return es(8390656,8,e,t)}function Uo(e,t){return Zs(2048,8,e,t)}function a1(e,t){return Zs(4,2,e,t)}function o1(e,t){return Zs(4,4,e,t)}function u1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function c1(e,t,n){return n=n!=null?n.concat([e]):null,Zs(4,4,u1.bind(null,t,e),n)}function Zo(){}function d1(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ro(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function m1(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ro(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function f1(e,t,n){return _n&21?(vt(n,t)||(n=x0(),oe.lanes|=n,An|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Xf(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Vi.transition;Vi.transition={};try{e(!1),t()}finally{K=n,Vi.transition=r}}function p1(){return ut().memoizedState}function Jf(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},h1(e))x1(t,n);else if(n=W0(e,t,n,r),n!==null){var l=Oe();gt(n,e,r,l),g1(n,t,r)}}function e3(e,t,n){var r=nn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(h1(e))x1(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,o=i(a,n);if(l.hasEagerState=!0,l.eagerState=o,vt(o,a)){var u=t.interleaved;u===null?(l.next=l,Oo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=W0(e,t,l,r),n!==null&&(l=Oe(),gt(n,e,r,l),g1(n,t,r))}}function h1(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function x1(e,t){qr=js=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function g1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wo(e,n)}}var ks={readContext:ot,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},t3={readContext:ot,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:xc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,es(4194308,4,u1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){return es(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jf.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:hc,useDebugValue:Zo,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=hc(!1),t=e[0];return e=Xf.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,l=Ct();if(ie){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),we===null)throw Error(S(349));_n&30||t1(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,xc(r1.bind(null,r,i,e),[e]),r.flags|=2048,pl(9,n1.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ct(),t=we.identifierPrefix;if(ie){var n=$t,r=Pt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ml++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},n3={readContext:ot,useCallback:d1,useContext:ot,useEffect:Uo,useImperativeHandle:c1,useInsertionEffect:a1,useLayoutEffect:o1,useMemo:m1,useReducer:Bi,useRef:i1,useState:function(){return Bi(fl)},useDebugValue:Zo,useDeferredValue:function(e){var t=ut();return f1(t,pe.memoizedState,e)},useTransition:function(){var e=Bi(fl)[0],t=ut().memoizedState;return[e,t]},useMutableSource:J0,useSyncExternalStore:e1,useId:p1,unstable_isNewReconciler:!1},r3={readContext:ot,useCallback:d1,useContext:ot,useEffect:Uo,useImperativeHandle:c1,useInsertionEffect:a1,useLayoutEffect:o1,useMemo:m1,useReducer:Ui,useRef:i1,useState:function(){return Ui(fl)},useDebugValue:Zo,useDeferredValue:function(e){var t=ut();return pe===null?t.memoizedState=e:f1(t,pe.memoizedState,e)},useTransition:function(){var e=Ui(fl)[0],t=ut().memoizedState;return[e,t]},useMutableSource:J0,useSyncExternalStore:e1,useId:p1,unstable_isNewReconciler:!1};function gr(e,t){try{var n="",r=t;do n+=_m(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Zi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var l3=typeof WeakMap=="function"?WeakMap:Map;function v1(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ms||(Ms=!0,Ha=r),Oa(e,t)},n}function y1(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Oa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Oa(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function gc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new l3;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=v3.bind(null,e,t,n),t.then(e,e))}function vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yc(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var s3=Rt.ReactCurrentOwner,Re=!1;function $e(e,t,n,r){t.child=e===null?K0(t,null,n,r):hr(t,e.child,n,r)}function bc(e,t,n,r,l){n=n.render;var i=t.ref;return ur(t,l),r=Vo(e,t,n,r,i,l),n=Bo(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(ie&&n&&To(t),t.flags|=1,$e(e,t,r,l),t.child)}function wc(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Xo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,b1(e,t,i,r,l)):(e=ls(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:il,n(a,r)&&e.ref===t.ref)return zt(e,t,l)}return t.flags|=1,e=rn(i,r),e.ref=t.ref,e.return=t,t.child=e}function b1(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(il(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,zt(e,t,l)}return Fa(e,t,n,r,l)}function w1(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(rr,We),We|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(rr,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(rr,We),We|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(rr,We),We|=r;return $e(e,t,l,n),t.child}function C1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fa(e,t,n,r,l){var i=Ue(n)?En:Pe.current;return i=fr(t,i),ur(t,l),n=Vo(e,t,n,r,i,l),r=Bo(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(ie&&r&&To(t),t.flags|=1,$e(e,t,n,l),t.child)}function Cc(e,t,n,r,l){if(Ue(n)){var i=!0;gs(t)}else i=!1;if(ur(t,l),t.stateNode===null)ts(e,t),G0(t,n,r),$a(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=ot(c):(c=Ue(n)?En:Pe.current,c=fr(t,c));var x=n.getDerivedStateFromProps,h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||u!==c)&&fc(t,a,r,c),Zt=!1;var f=t.memoizedState;a.state=f,Cs(t,r,a,l),u=t.memoizedState,o!==r||f!==u||Be.current||Zt?(typeof x=="function"&&(Pa(t,n,x,r),u=t.memoizedState),(o=Zt||mc(t,n,o,r,f,u,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,q0(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:ft(t.type,o),a.props=c,h=t.pendingProps,f=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=ot(u):(u=Ue(n)?En:Pe.current,u=fr(t,u));var b=n.getDerivedStateFromProps;(x=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==u)&&fc(t,a,r,u),Zt=!1,f=t.memoizedState,a.state=f,Cs(t,r,a,l);var C=t.memoizedState;o!==h||f!==C||Be.current||Zt?(typeof b=="function"&&(Pa(t,n,b,r),C=t.memoizedState),(c=Zt||mc(t,n,c,r,f,C,u)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,C,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,C,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),a.props=r,a.state=C,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Da(e,t,n,r,i,l)}function Da(e,t,n,r,l,i){C1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&ac(t,n,!1),zt(e,t,i);r=t.stateNode,s3.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=hr(t,e.child,null,i),t.child=hr(t,null,o,i)):$e(e,t,o,i),t.memoizedState=r.state,l&&ac(t,n,!0),t.child}function N1(e){var t=e.stateNode;t.pendingContext?ic(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ic(e,t.context,!1),Do(e,t.containerInfo)}function Nc(e,t,n,r,l){return pr(),Ao(l),t.flags|=256,$e(e,t,n,r),t.child}var Ia={dehydrated:null,treeContext:null,retryLane:0};function za(e){return{baseLanes:e,cachePool:null,transitions:null}}function j1(e,t,n){var r=t.pendingProps,l=ae.current,i=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ne(ae,l&1),e===null)return Aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=qs(a,r,0,null),e=jn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=za(n),t.memoizedState=Ia,e):Ho(t,a));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return i3(e,t,a,r,o,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,o=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=rn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?i=rn(o,i):(i=jn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?za(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ia,r}return i=e.child,e=i.sibling,r=rn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ho(e,t){return t=qs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vl(e,t,n,r){return r!==null&&Ao(r),hr(t,e.child,null,n),e=Ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i3(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Zi(Error(S(422))),Vl(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=qs({mode:"visible",children:r.children},l,0,null),i=jn(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hr(t,e.child,null,a),t.child.memoizedState=za(a),t.memoizedState=Ia,i);if(!(t.mode&1))return Vl(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(S(419)),r=Zi(i,r,void 0),Vl(e,t,a,r)}if(o=(a&e.childLanes)!==0,Re||o){if(r=we,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,It(e,l),gt(r,e,l,-1))}return Ko(),r=Zi(Error(S(421))),Vl(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=y3.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ye=Jt(l.nextSibling),Ke=t,ie=!0,ht=null,e!==null&&(lt[st++]=Pt,lt[st++]=$t,lt[st++]=Tn,Pt=e.id,$t=e.overflow,Tn=t),t=Ho(t,r.children),t.flags|=4096,t)}function jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),La(e.return,t,n)}function Hi(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function k1(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if($e(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n,t);else if(e.tag===19)jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ae,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ns(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Hi(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ns(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Hi(t,!0,n,null,i);break;case"together":Hi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ts(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function a3(e,t,n){switch(t.tag){case 3:N1(t),pr();break;case 5:X0(t);break;case 1:Ue(t.type)&&gs(t);break;case 4:Do(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ne(bs,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?j1(e,t,n):(ne(ae,ae.current&1),e=zt(e,t,n),e!==null?e.sibling:null);ne(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return k1(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ne(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,w1(e,t,n)}return zt(e,t,n)}var S1,Ra,M1,E1;S1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ra=function(){};M1=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,wn(kt.current);var i=null;switch(n){case"input":l=oa(e,l),r=oa(e,r),i=[];break;case"select":l=ue({},l,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":l=da(e,l),r=da(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hs)}fa(n,r);var a;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var o=l[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(o=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==o&&(u!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&re("scroll",e),i||o===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};E1=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function o3(e,t,n){var r=t.pendingProps;switch(_o(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ue(t.type)&&xs(),Ae(t),null;case 3:return r=t.stateNode,xr(),se(Be),se(Pe),zo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Ya(ht),ht=null))),Ra(e,t),Ae(t),null;case 5:Io(t);var l=wn(dl.current);if(n=t.type,e!==null&&t.stateNode!=null)M1(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Ae(t),null}if(e=wn(kt.current),zl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Nt]=t,r[ul]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(l=0;l<Vr.length;l++)re(Vr[l],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Pu(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":Ou(r,i),re("invalid",r)}fa(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];a==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&Il(r.textContent,o,e),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Il(r.textContent,o,e),l=["children",""+o]):Jr.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&re("scroll",r)}switch(n){case"input":_l(r),$u(r,i,!0);break;case"textarea":_l(r),Fu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=hs)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=t0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Nt]=t,e[ul]=r,S1(e,t,!1,!1),t.stateNode=e;e:{switch(a=pa(n,r),n){case"dialog":re("cancel",e),re("close",e),l=r;break;case"iframe":case"object":case"embed":re("load",e),l=r;break;case"video":case"audio":for(l=0;l<Vr.length;l++)re(Vr[l],e);l=r;break;case"source":re("error",e),l=r;break;case"img":case"image":case"link":re("error",e),re("load",e),l=r;break;case"details":re("toggle",e),l=r;break;case"input":Pu(e,r),l=oa(e,r),re("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ue({},r,{value:void 0}),re("invalid",e);break;case"textarea":Ou(e,r),l=da(e,r),re("invalid",e);break;default:l=r}fa(n,l),o=l;for(i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="style"?l0(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&n0(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&el(e,u):typeof u=="number"&&el(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Jr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&re("scroll",e):u!=null&&ho(e,i,u,a))}switch(n){case"input":_l(e),$u(e,r,!1);break;case"textarea":_l(e),Fu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?sr(e,!!r.multiple,i,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=hs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)E1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=wn(dl.current),wn(kt.current),zl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(i=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:Il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Il(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return Ae(t),null;case 13:if(se(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ye!==null&&t.mode&1&&!(t.flags&128))H0(),pr(),t.flags|=98560,i=!1;else if(i=zl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Nt]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else ht!==null&&(Ya(ht),ht=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?he===0&&(he=3):Ko())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return xr(),Ra(e,t),e===null&&al(t.stateNode.containerInfo),Ae(t),null;case 10:return $o(t.type._context),Ae(t),null;case 17:return Ue(t.type)&&xs(),Ae(t),null;case 19:if(se(ae),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)$r(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ns(e),a!==null){for(t.flags|=128,$r(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ae,ae.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>vr&&(t.flags|=128,r=!0,$r(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ns(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ie)return Ae(t),null}else 2*de()-i.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,$r(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,n=ae.current,ne(ae,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Qo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function u3(e,t){switch(_o(t),t.tag){case 1:return Ue(t.type)&&xs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),se(Be),se(Pe),zo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Io(t),null;case 13:if(se(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ae),null;case 4:return xr(),null;case 10:return $o(t.type._context),null;case 22:case 23:return Qo(),null;case 24:return null;default:return null}}var Bl=!1,Le=!1,c3=typeof WeakSet=="function"?WeakSet:Set,F=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Va(e,t,n){try{n()}catch(r){ce(e,t,r)}}var kc=!1;function d3(e,t){if(ja=ms,e=L0(),Eo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,o=-1,u=-1,c=0,x=0,h=e,f=null;t:for(;;){for(var b;h!==n||l!==0&&h.nodeType!==3||(o=a+l),h!==i||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(b=h.firstChild)!==null;)f=h,h=b;for(;;){if(h===e)break t;if(f===n&&++c===l&&(o=a),f===i&&++x===r&&(u=a),(b=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=b}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ka={focusedElem:e,selectionRange:n},ms=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var w=C.memoizedProps,_=C.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:ft(t.type,w),_);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){ce(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return C=kc,kc=!1,C}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Va(t,n,i)}l=l.next}while(l!==r)}}function Hs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ba(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function T1(e){var t=e.alternate;t!==null&&(e.alternate=null,T1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[ul],delete t[Ea],delete t[qf],delete t[Yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _1(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hs));else if(r!==4&&(e=e.child,e!==null))for(Ua(e,t,n),e=e.sibling;e!==null;)Ua(e,t,n),e=e.sibling}function Za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Za(e,t,n),e=e.sibling;e!==null;)Za(e,t,n),e=e.sibling}var Se=null,pt=!1;function Bt(e,t,n){for(n=n.child;n!==null;)A1(e,t,n),n=n.sibling}function A1(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Ds,n)}catch{}switch(n.tag){case 5:Le||nr(n,t);case 6:var r=Se,l=pt;Se=null,Bt(e,t,n),Se=r,pt=l,Se!==null&&(pt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(pt?(e=Se,n=n.stateNode,e.nodeType===8?Ii(e.parentNode,n):e.nodeType===1&&Ii(e,n),ll(e)):Ii(Se,n.stateNode));break;case 4:r=Se,l=pt,Se=n.stateNode.containerInfo,pt=!0,Bt(e,t,n),Se=r,pt=l;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Va(n,t,a),l=l.next}while(l!==r)}Bt(e,t,n);break;case 1:if(!Le&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){ce(n,t,o)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Bt(e,t,n),Le=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function Mc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new c3),t.forEach(function(r){var l=b3.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:Se=o.stateNode,pt=!1;break e;case 3:Se=o.stateNode.containerInfo,pt=!0;break e;case 4:Se=o.stateNode.containerInfo,pt=!0;break e}o=o.return}if(Se===null)throw Error(S(160));A1(i,a,l),Se=null,pt=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){ce(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)L1(t,e),t=t.sibling}function L1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),bt(e),r&4){try{Yr(3,e,e.return),Hs(3,e)}catch(w){ce(e,e.return,w)}try{Yr(5,e,e.return)}catch(w){ce(e,e.return,w)}}break;case 1:ct(t,e),bt(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(ct(t,e),bt(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var l=e.stateNode;try{el(l,"")}catch(w){ce(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&J2(l,i),pa(o,a);var c=pa(o,i);for(a=0;a<u.length;a+=2){var x=u[a],h=u[a+1];x==="style"?l0(l,h):x==="dangerouslySetInnerHTML"?n0(l,h):x==="children"?el(l,h):ho(l,x,h,c)}switch(o){case"input":ua(l,i);break;case"textarea":e0(l,i);break;case"select":var f=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?sr(l,!!i.multiple,b,!1):f!==!!i.multiple&&(i.defaultValue!=null?sr(l,!!i.multiple,i.defaultValue,!0):sr(l,!!i.multiple,i.multiple?[]:"",!1))}l[ul]=i}catch(w){ce(e,e.return,w)}}break;case 6:if(ct(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){ce(e,e.return,w)}}break;case 3:if(ct(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ll(t.containerInfo)}catch(w){ce(e,e.return,w)}break;case 4:ct(t,e),bt(e);break;case 13:ct(t,e),bt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Yo=de())),r&4&&Mc(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(c=Le)||x,ct(t,e),Le=c):ct(t,e),bt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!x&&e.mode&1)for(F=e,x=e.child;x!==null;){for(h=F=x;F!==null;){switch(f=F,b=f.child,f.tag){case 0:case 11:case 14:case 15:Yr(4,f,f.return);break;case 1:nr(f,f.return);var C=f.stateNode;if(typeof C.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(w){ce(r,n,w)}}break;case 5:nr(f,f.return);break;case 22:if(f.memoizedState!==null){Tc(h);continue}}b!==null?(b.return=f,F=b):Tc(h)}x=x.sibling}e:for(x=null,h=e;;){if(h.tag===5){if(x===null){x=h;try{l=h.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=r0("display",a))}catch(w){ce(e,e.return,w)}}}else if(h.tag===6){if(x===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){ce(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;x===h&&(x=null),h=h.return}x===h&&(x=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ct(t,e),bt(e),r&4&&Mc(e);break;case 21:break;default:ct(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_1(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(el(l,""),r.flags&=-33);var i=Sc(e);Za(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Sc(e);Ua(e,o,a);break;default:throw Error(S(161))}}catch(u){ce(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function m3(e,t,n){F=e,P1(e)}function P1(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var l=F,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Bl;if(!a){var o=l.alternate,u=o!==null&&o.memoizedState!==null||Le;o=Bl;var c=Le;if(Bl=a,(Le=u)&&!c)for(F=l;F!==null;)a=F,u=a.child,a.tag===22&&a.memoizedState!==null?_c(l):u!==null?(u.return=a,F=u):_c(l);for(;i!==null;)F=i,P1(i),i=i.sibling;F=l,Bl=o,Le=c}Ec(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,F=i):Ec(e)}}function Ec(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Hs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&dc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dc(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var x=c.memoizedState;if(x!==null){var h=x.dehydrated;h!==null&&ll(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Le||t.flags&512&&Ba(t)}catch(f){ce(t,t.return,f)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Tc(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function _c(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hs(4,t)}catch(u){ce(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){ce(t,l,u)}}var i=t.return;try{Ba(t)}catch(u){ce(t,i,u)}break;case 5:var a=t.return;try{Ba(t)}catch(u){ce(t,a,u)}}}catch(u){ce(t,t.return,u)}if(t===e){F=null;break}var o=t.sibling;if(o!==null){o.return=t.return,F=o;break}F=t.return}}var f3=Math.ceil,Ss=Rt.ReactCurrentDispatcher,Wo=Rt.ReactCurrentOwner,at=Rt.ReactCurrentBatchConfig,G=0,we=null,me=null,Me=0,We=0,rr=cn(0),he=0,hl=null,An=0,Ws=0,qo=0,Gr=null,ze=null,Yo=0,vr=1/0,_t=null,Ms=!1,Ha=null,tn=null,Ul=!1,Yt=null,Es=0,Qr=0,Wa=null,ns=-1,rs=0;function Oe(){return G&6?de():ns!==-1?ns:ns=de()}function nn(e){return e.mode&1?G&2&&Me!==0?Me&-Me:Qf.transition!==null?(rs===0&&(rs=x0()),rs):(e=K,e!==0||(e=window.event,e=e===void 0?16:N0(e.type)),e):1}function gt(e,t,n,r){if(50<Qr)throw Qr=0,Wa=null,Error(S(185));Cl(e,n,r),(!(G&2)||e!==we)&&(e===we&&(!(G&2)&&(Ws|=n),he===4&&Wt(e,Me)),Ze(e,r),n===1&&G===0&&!(t.mode&1)&&(vr=de()+500,Bs&&dn()))}function Ze(e,t){var n=e.callbackNode;Gm(e,t);var r=ds(e,e===we?Me:0);if(r===0)n!==null&&zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zu(n),t===1)e.tag===0?Gf(Ac.bind(null,e)):B0(Ac.bind(null,e)),Hf(function(){!(G&6)&&dn()}),n=null;else{switch(g0(r)){case 1:n=bo;break;case 4:n=p0;break;case 16:n=cs;break;case 536870912:n=h0;break;default:n=cs}n=V1(n,$1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $1(e,t){if(ns=-1,rs=0,G&6)throw Error(S(327));var n=e.callbackNode;if(cr()&&e.callbackNode!==n)return null;var r=ds(e,e===we?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ts(e,r);else{t=r;var l=G;G|=2;var i=F1();(we!==e||Me!==t)&&(_t=null,vr=de()+500,Nn(e,t));do try{x3();break}catch(o){O1(e,o)}while(1);Po(),Ss.current=i,G=l,me!==null?t=0:(we=null,Me=0,t=he)}if(t!==0){if(t===2&&(l=ya(e),l!==0&&(r=l,t=qa(e,l))),t===1)throw n=hl,Nn(e,0),Wt(e,r),Ze(e,de()),n;if(t===6)Wt(e,r);else{if(l=e.current.alternate,!(r&30)&&!p3(l)&&(t=Ts(e,r),t===2&&(i=ya(e),i!==0&&(r=i,t=qa(e,i))),t===1))throw n=hl,Nn(e,0),Wt(e,r),Ze(e,de()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:xn(e,ze,_t);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Yo+500-de(),10<t)){if(ds(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ma(xn.bind(null,e,ze,_t),t);break}xn(e,ze,_t);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-xt(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*f3(r/1960))-r,10<r){e.timeoutHandle=Ma(xn.bind(null,e,ze,_t),r);break}xn(e,ze,_t);break;case 5:xn(e,ze,_t);break;default:throw Error(S(329))}}}return Ze(e,de()),e.callbackNode===n?$1.bind(null,e):null}function qa(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Ts(e,t),e!==2&&(t=ze,ze=n,t!==null&&Ya(t)),e}function Ya(e){ze===null?ze=e:ze.push.apply(ze,e)}function p3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!vt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~qo,t&=~Ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Ac(e){if(G&6)throw Error(S(327));cr();var t=ds(e,0);if(!(t&1))return Ze(e,de()),null;var n=Ts(e,t);if(e.tag!==0&&n===2){var r=ya(e);r!==0&&(t=r,n=qa(e,r))}if(n===1)throw n=hl,Nn(e,0),Wt(e,t),Ze(e,de()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,ze,_t),Ze(e,de()),null}function Go(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(vr=de()+500,Bs&&dn())}}function Ln(e){Yt!==null&&Yt.tag===0&&!(G&6)&&cr();var t=G;G|=1;var n=at.transition,r=K;try{if(at.transition=null,K=1,e)return e()}finally{K=r,at.transition=n,G=t,!(G&6)&&dn()}}function Qo(){We=rr.current,se(rr)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zf(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(_o(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xs();break;case 3:xr(),se(Be),se(Pe),zo();break;case 5:Io(r);break;case 4:xr();break;case 13:se(ae);break;case 19:se(ae);break;case 10:$o(r.type._context);break;case 22:case 23:Qo()}n=n.return}if(we=e,me=e=rn(e.current,null),Me=We=t,he=0,hl=null,qo=Ws=An=0,ze=Gr=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}bn=null}return e}function O1(e,t){do{var n=me;try{if(Po(),Jl.current=ks,js){for(var r=oe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}js=!1}if(_n=0,be=pe=oe=null,qr=!1,ml=0,Wo.current=null,n===null||n.return===null){he=1,hl=t,me=null;break}e:{var i=e,a=n.return,o=n,u=t;if(t=Me,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,x=o,h=x.tag;if(!(x.mode&1)&&(h===0||h===11||h===15)){var f=x.alternate;f?(x.updateQueue=f.updateQueue,x.memoizedState=f.memoizedState,x.lanes=f.lanes):(x.updateQueue=null,x.memoizedState=null)}var b=vc(a);if(b!==null){b.flags&=-257,yc(b,a,o,i,t),b.mode&1&&gc(i,c,t),t=b,u=c;var C=t.updateQueue;if(C===null){var w=new Set;w.add(u),t.updateQueue=w}else C.add(u);break e}else{if(!(t&1)){gc(i,c,t),Ko();break e}u=Error(S(426))}}else if(ie&&o.mode&1){var _=vc(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),yc(_,a,o,i,t),Ao(gr(u,o));break e}}i=u=gr(u,o),he!==4&&(he=2),Gr===null?Gr=[i]:Gr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=v1(i,u,t);cc(i,p);break e;case 1:o=u;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(tn===null||!tn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=y1(i,o,t);cc(i,y);break e}}i=i.return}while(i!==null)}I1(n)}catch(k){t=k,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function F1(){var e=Ss.current;return Ss.current=ks,e===null?ks:e}function Ko(){(he===0||he===3||he===2)&&(he=4),we===null||!(An&268435455)&&!(Ws&268435455)||Wt(we,Me)}function Ts(e,t){var n=G;G|=2;var r=F1();(we!==e||Me!==t)&&(_t=null,Nn(e,t));do try{h3();break}catch(l){O1(e,l)}while(1);if(Po(),G=n,Ss.current=r,me!==null)throw Error(S(261));return we=null,Me=0,he}function h3(){for(;me!==null;)D1(me)}function x3(){for(;me!==null&&!Rm();)D1(me)}function D1(e){var t=R1(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?I1(e):me=t,Wo.current=null}function I1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=u3(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,me=null;return}}else if(n=o3(n,t,We),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);he===0&&(he=5)}function xn(e,t,n){var r=K,l=at.transition;try{at.transition=null,K=1,g3(e,t,n,r)}finally{at.transition=l,K=r}return null}function g3(e,t,n,r){do cr();while(Yt!==null);if(G&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qm(e,i),e===we&&(me=we=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ul||(Ul=!0,V1(cs,function(){return cr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=at.transition,at.transition=null;var a=K;K=1;var o=G;G|=4,Wo.current=null,d3(e,n),L1(n,e),Df(ka),ms=!!ja,ka=ja=null,e.current=n,m3(n),Vm(),G=o,K=a,at.transition=i}else e.current=n;if(Ul&&(Ul=!1,Yt=e,Es=l),i=e.pendingLanes,i===0&&(tn=null),Zm(n.stateNode),Ze(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ms)throw Ms=!1,e=Ha,Ha=null,e;return Es&1&&e.tag!==0&&cr(),i=e.pendingLanes,i&1?e===Wa?Qr++:(Qr=0,Wa=e):Qr=0,dn(),null}function cr(){if(Yt!==null){var e=g0(Es),t=at.transition,n=K;try{if(at.transition=null,K=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,Es=0,G&6)throw Error(S(331));var l=G;for(G|=4,F=e.current;F!==null;){var i=F,a=i.child;if(F.flags&16){var o=i.deletions;if(o!==null){for(var u=0;u<o.length;u++){var c=o[u];for(F=c;F!==null;){var x=F;switch(x.tag){case 0:case 11:case 15:Yr(8,x,i)}var h=x.child;if(h!==null)h.return=x,F=h;else for(;F!==null;){x=F;var f=x.sibling,b=x.return;if(T1(x),x===c){F=null;break}if(f!==null){f.return=b,F=f;break}F=b}}}var C=i.alternate;if(C!==null){var w=C.child;if(w!==null){C.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}F=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,F=a;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,F=p;break e}F=i.return}}var m=e.current;for(F=m;F!==null;){a=F;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,F=g;else e:for(a=m;F!==null;){if(o=F,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Hs(9,o)}}catch(k){ce(o,o.return,k)}if(o===a){F=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,F=y;break e}F=o.return}}if(G=l,dn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Ds,e)}catch{}r=!0}return r}finally{K=n,at.transition=t}}return!1}function Lc(e,t,n){t=gr(n,t),t=v1(e,t,1),e=en(e,t,1),t=Oe(),e!==null&&(Cl(e,1,t),Ze(e,t))}function ce(e,t,n){if(e.tag===3)Lc(e,e,n);else for(;t!==null;){if(t.tag===3){Lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=gr(n,e),e=y1(t,e,1),t=en(t,e,1),e=Oe(),t!==null&&(Cl(t,1,e),Ze(t,e));break}}t=t.return}}function v3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Me&n)===n&&(he===4||he===3&&(Me&130023424)===Me&&500>de()-Yo?Nn(e,0):qo|=n),Ze(e,t)}function z1(e,t){t===0&&(e.mode&1?(t=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):t=1);var n=Oe();e=It(e,t),e!==null&&(Cl(e,t,n),Ze(e,n))}function y3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),z1(e,n)}function b3(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),z1(e,n)}var R1;R1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,a3(e,t,n);Re=!!(e.flags&131072)}else Re=!1,ie&&t.flags&1048576&&U0(t,ys,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ts(e,t),e=t.pendingProps;var l=fr(t,Pe.current);ur(t,n),l=Vo(null,t,r,e,l,n);var i=Bo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,gs(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Fo(t),l.updater=Us,t.stateNode=l,l._reactInternals=t,$a(t,r,e,n),t=Da(null,t,r,!0,i,n)):(t.tag=0,ie&&i&&To(t),$e(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ts(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=C3(r),e=ft(r,e),l){case 0:t=Fa(null,t,r,e,n);break e;case 1:t=Cc(null,t,r,e,n);break e;case 11:t=bc(null,t,r,e,n);break e;case 14:t=wc(null,t,r,ft(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),Fa(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),Cc(e,t,r,l,n);case 3:e:{if(N1(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,l=i.element,q0(e,t),Cs(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=gr(Error(S(423)),t),t=Nc(e,t,r,n,l);break e}else if(r!==l){l=gr(Error(S(424)),t),t=Nc(e,t,r,n,l);break e}else for(Ye=Jt(t.stateNode.containerInfo.firstChild),Ke=t,ie=!0,ht=null,n=K0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===l){t=zt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return X0(t),e===null&&Aa(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Sa(r,l)?a=null:i!==null&&Sa(r,i)&&(t.flags|=32),C1(e,t),$e(e,t,a,n),t.child;case 6:return e===null&&Aa(t),null;case 13:return j1(e,t,n);case 4:return Do(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hr(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),bc(e,t,r,l,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,ne(bs,r._currentValue),r._currentValue=a,i!==null)if(vt(i.value,a)){if(i.children===l.children&&!Be.current){t=zt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){a=i.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ot(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var x=c.pending;x===null?u.next=u:(u.next=x.next,x.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),La(i.return,n,t),o.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),La(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}$e(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,ur(t,n),l=ot(l),r=r(l),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,l=ft(r,t.pendingProps),l=ft(r.type,l),wc(e,t,r,l,n);case 15:return b1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),ts(e,t),t.tag=1,Ue(r)?(e=!0,gs(t)):e=!1,ur(t,n),G0(t,r,l),$a(t,r,l,n),Da(null,t,r,!0,e,n);case 19:return k1(e,t,n);case 22:return w1(e,t,n)}throw Error(S(156,t.tag))};function V1(e,t){return f0(e,t)}function w3(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new w3(e,t,n,r)}function Xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function C3(e){if(typeof e=="function")return Xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===go)return 11;if(e===vo)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ls(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Xo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qn:return jn(n.children,l,i,t);case xo:a=8,l|=8;break;case la:return e=it(12,n,t,l|2),e.elementType=la,e.lanes=i,e;case sa:return e=it(13,n,t,l),e.elementType=sa,e.lanes=i,e;case ia:return e=it(19,n,t,l),e.elementType=ia,e.lanes=i,e;case Q2:return qs(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y2:a=10;break e;case G2:a=9;break e;case go:a=11;break e;case vo:a=14;break e;case Ut:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=it(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function jn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function qs(e,t,n,r){return e=it(22,e,r,t),e.elementType=Q2,e.lanes=n,e.stateNode={isHidden:!1},e}function Wi(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function qi(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function N3(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Jo(e,t,n,r,l,i,a,o,u){return e=new N3(e,t,n,o,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(i),e}function j3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function B1(e){if(!e)return an;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ue(n))return V0(e,n,t)}return t}function U1(e,t,n,r,l,i,a,o,u){return e=Jo(n,r,!0,e,l,i,a,o,u),e.context=B1(null),n=e.current,r=Oe(),l=nn(n),i=Ot(r,l),i.callback=t??null,en(n,i,l),e.current.lanes=l,Cl(e,l,r),Ze(e,r),e}function Ys(e,t,n,r){var l=t.current,i=Oe(),a=nn(l);return n=B1(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(l,t,a),e!==null&&(gt(e,l,a,i),Xl(e,l,a)),a}function _s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function eu(e,t){Pc(e,t),(e=e.alternate)&&Pc(e,t)}function k3(){return null}var Z1=typeof reportError=="function"?reportError:function(e){console.error(e)};function tu(e){this._internalRoot=e}Gs.prototype.render=tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ys(e,t,null,null)};Gs.prototype.unmount=tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Ys(null,e,null,null)}),t[Dt]=null}};function Gs(e){this._internalRoot=e}Gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=b0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&C0(e)}};function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $c(){}function S3(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=_s(a);i.call(c)}}var a=U1(t,r,e,0,null,!1,!1,"",$c);return e._reactRootContainer=a,e[Dt]=a.current,al(e.nodeType===8?e.parentNode:e),Ln(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var c=_s(u);o.call(c)}}var u=Jo(e,0,!1,null,null,!1,!1,"",$c);return e._reactRootContainer=u,e[Dt]=u.current,al(e.nodeType===8?e.parentNode:e),Ln(function(){Ys(t,u,n,r)}),u}function Ks(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var o=l;l=function(){var u=_s(a);o.call(u)}}Ys(t,a,e,l)}else a=S3(n,t,e,l,r);return _s(a)}v0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(wo(t,n|1),Ze(t,de()),!(G&6)&&(vr=de()+500,dn()))}break;case 13:Ln(function(){var r=It(e,1);if(r!==null){var l=Oe();gt(r,e,1,l)}}),eu(e,1)}};Co=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=Oe();gt(t,e,134217728,n)}eu(e,134217728)}};y0=function(e){if(e.tag===13){var t=nn(e),n=It(e,t);if(n!==null){var r=Oe();gt(n,e,t,r)}eu(e,t)}};b0=function(){return K};w0=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};xa=function(e,t,n){switch(t){case"input":if(ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Vs(r);if(!l)throw Error(S(90));X2(r),ua(r,l)}}}break;case"textarea":e0(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};a0=Go;o0=Ln;var M3={usingClientEntryPoint:!1,Events:[jl,Kn,Vs,s0,i0,Go]},Or={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},E3={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=d0(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||k3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Ds=Zl.inject(E3),jt=Zl}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M3;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nu(t))throw Error(S(200));return j3(e,t,null,n)};Je.createRoot=function(e,t){if(!nu(e))throw Error(S(299));var n=!1,r="",l=Z1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Jo(e,1,!1,null,null,n,!1,r,l),e[Dt]=t.current,al(e.nodeType===8?e.parentNode:e),new tu(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=d0(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return Ln(e)};Je.hydrate=function(e,t,n){if(!Qs(t))throw Error(S(200));return Ks(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!nu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=Z1;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=U1(t,null,e,1,n??null,l,!1,i,a),e[Dt]=t.current,al(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Gs(t)};Je.render=function(e,t,n){if(!Qs(t))throw Error(S(200));return Ks(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!Qs(e))throw Error(S(40));return e._reactRootContainer?(Ln(function(){Ks(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};Je.unstable_batchedUpdates=Go;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qs(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ks(e,t,n,!1,r)};Je.version="18.2.0-next-9e3b772b8-20220608";function H1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H1)}catch(e){console.error(e)}}H1(),U2.exports=Je;var T3=U2.exports,Oc=T3;na.createRoot=Oc.createRoot,na.hydrateRoot=Oc.hydrateRoot;const _3="/assets/react-35ef61ed.svg";var A3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const L3=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ie=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:a,children:o,...u},c)=>j.createElement("svg",{ref:c,...A3,width:l,height:l,stroke:r,strokeWidth:a?Number(i)*24/Number(l):i,className:`lucide lucide-${L3(e)}`,...u},[...t.map(([x,h])=>j.createElement(x,h)),...(Array.isArray(o)?o:[o])||[]]));return n.displayName=`${e}`,n},P3=Ie("ArrowLeft",[["line",{x1:"19",x2:"5",y1:"12",y2:"12",key:"9fu2vq"}],["polyline",{points:"12 19 5 12 12 5",key:"1ksm0z"}]]),Kr=Ie("ArrowRight",[["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["polyline",{points:"12 5 19 12 12 19",key:"sfr3i6"}]]),$3=Ie("ArrowUpRight",[["line",{x1:"7",x2:"17",y1:"17",y2:"7",key:"11kluq"}],["polyline",{points:"7 7 17 7 17 17",key:"blehsp"}]]),Fr=Ie("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]),wt=Ie("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),O3=Ie("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),F3=Ie("ChevronDown",[["polyline",{points:"6 9 12 15 18 9",key:"1do0m2"}]]),D3=Ie("ChevronRight",[["polyline",{points:"9 18 15 12 9 6",key:"1rtp27"}]]),I3=Ie("ChevronUp",[["polyline",{points:"18 15 12 9 6 15",key:"1uugdp"}]]),z3=Ie("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),Nr=Ie("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),R3=Ie("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),V3=Ie("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),B3=Ie("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),jr=Ie("X",[["line",{x1:"18",x2:"6",y1:"6",y2:"18",key:"15jfxm"}],["line",{x1:"6",x2:"18",y1:"6",y2:"18",key:"d1lma3"}]]),W1=j.createContext("");var q1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fc=Ve.createContext&&Ve.createContext(q1),ln=globalThis&&globalThis.__assign||function(){return ln=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},ln.apply(this,arguments)},U3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function Y1(e){return e&&e.map(function(t,n){return Ve.createElement(t.tag,ln({key:n},t.attr),Y1(t.child))})}function mn(e){return function(t){return Ve.createElement(Z3,ln({attr:ln({},e.attr)},t),Y1(e.child))}}function Z3(e){var t=function(n){var r=e.attr,l=e.size,i=e.title,a=U3(e,["attr","size","title"]),o=l||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Ve.createElement("svg",ln({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:ln(ln({color:e.color||n.color},n.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),i&&Ve.createElement("title",null,i),e.children)};return Fc!==void 0?Ve.createElement(Fc.Consumer,null,function(n){return t(n)}):t(q1)}function H3(e){return mn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(e)}function W3(e){return mn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"}}]})(e)}function ge(e){const[t,n]=j.useState(!1),[r,l]=j.useState(0),{showCodeButton:i}=j.useContext(W1),a=()=>{navigator.clipboard.writeText(e==null?void 0:e.code).then(()=>{console.log("Text copied to clipboard"),l(o=>o+1)}).catch(o=>{console.error("Failed to copy text: ",o)})};return s.jsxs(s.Fragment,{children:[i&&s.jsx("button",{onClick:()=>n(!t),type:"button",className:"rounded-full w-12 h-12 bg-white border-2 border-black px-3 py-2 font-bold text-black shadow-lg hover:text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black fixed top-10 right-10 flex justify-center items-center text-lg",style:{zIndex:1e4},children:"</>"}),t&&s.jsxs("div",{className:"bg-gray-600 mt-10 p-10 text-white relative rounded-lg",children:[s.jsxs("span",{onClick:a,className:"absolute top-2 right-2 cursor-pointer",children:[s.jsx(H3,{className:"hover:scale-110 text-4xl"}),r!==0&&s.jsx("span",{className:"absolute top-0 -left-4 text-xl",children:r})]}),s.jsx("pre",{children:e==null?void 0:e.code})]})]})}function q3(){return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`<button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Button text
      </button>`}),s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})}/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xl.apply(this,arguments)}var Gt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gt||(Gt={}));const Dc="popstate";function Y3(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:a,hash:o}=r.location;return Ga("",{pathname:i,search:a,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:G1(l)}return Q3(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ru(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function G3(){return Math.random().toString(36).substr(2,8)}function Ic(e,t){return{usr:e.state,key:e.key,idx:t}}function Ga(e,t,n,r){return n===void 0&&(n=null),xl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kr(t):t,{state:n,key:t&&t.key||r||G3()})}function G1(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Q3(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,a=l.history,o=Gt.Pop,u=null,c=x();c==null&&(c=0,a.replaceState(xl({},a.state,{idx:c}),""));function x(){return(a.state||{idx:null}).idx}function h(){o=Gt.Pop;let _=x(),p=_==null?null:_-c;c=_,u&&u({action:o,location:w.location,delta:p})}function f(_,p){o=Gt.Push;let m=Ga(w.location,_,p);n&&n(m,_),c=x()+1;let g=Ic(m,c),y=w.createHref(m);try{a.pushState(g,"",y)}catch{l.location.assign(y)}i&&u&&u({action:o,location:w.location,delta:1})}function b(_,p){o=Gt.Replace;let m=Ga(w.location,_,p);n&&n(m,_),c=x();let g=Ic(m,c),y=w.createHref(m);a.replaceState(g,"",y),i&&u&&u({action:o,location:w.location,delta:0})}function C(_){let p=l.location.origin!=="null"?l.location.origin:l.location.href,m=typeof _=="string"?_:G1(_);return xe(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let w={get action(){return o},get location(){return e(l,a)},listen(_){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Dc,h),u=_,()=>{l.removeEventListener(Dc,h),u=null}},createHref(_){return t(l,_)},createURL:C,encodeLocation(_){let p=C(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:b,go(_){return a.go(_)}};return w}var zc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zc||(zc={}));function K3(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?kr(t):t,l=X1(r.pathname||"/",n);if(l==null)return null;let i=Q1(e);X3(i);let a=null;for(let o=0;a==null&&o<i.length;++o)a=ap(i[o],cp(l));return a}function Q1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,a,o)=>{let u={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(xe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=kn([r,u.relativePath]),x=n.concat(u);i.children&&i.children.length>0&&(xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Q1(i.children,t,x,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:sp(c,i.index),routesMeta:x})};return e.forEach((i,a)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))l(i,a);else for(let u of K1(i.path))l(i,a,u)}),t}function K1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let a=K1(r.join("/")),o=[];return o.push(...a.map(u=>u===""?i:[i,u].join("/"))),l&&o.push(...a),o.map(u=>e.startsWith("/")&&u===""?"/":u)}function X3(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ip(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J3=/^:\w+$/,ep=3,tp=2,np=1,rp=10,lp=-2,Rc=e=>e==="*";function sp(e,t){let n=e.split("/"),r=n.length;return n.some(Rc)&&(r+=lp),t&&(r+=tp),n.filter(l=>!Rc(l)).reduce((l,i)=>l+(J3.test(i)?ep:i===""?np:rp),r)}function ip(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function ap(e,t){let{routesMeta:n}=e,r={},l="/",i=[];for(let a=0;a<n.length;++a){let o=n[a],u=a===n.length-1,c=l==="/"?t:t.slice(l.length)||"/",x=op({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},c);if(!x)return null;Object.assign(r,x.params);let h=o.route;i.push({params:r,pathname:kn([l,x.pathname]),pathnameBase:xp(kn([l,x.pathnameBase])),route:h}),x.pathnameBase!=="/"&&(l=kn([l,x.pathnameBase]))}return i}function op(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=up(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],a=i.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:r.reduce((c,x,h)=>{if(x==="*"){let f=o[h]||"";a=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}return c[x]=dp(o[h]||"",x),c},{}),pathname:i,pathnameBase:a,pattern:e}}function up(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ru(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,o)=>(r.push(o),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function cp(e){try{return decodeURI(e)}catch(t){return ru(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dp(e,t){try{return decodeURIComponent(e)}catch(n){return ru(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function X1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?kr(e):e;return{pathname:n?n.startsWith("/")?n:fp(n,t):t,search:gp(r),hash:vp(l)}}function fp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Yi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hp(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=kr(e):(l=xl({},e),xe(!l.pathname||!l.pathname.includes("?"),Yi("?","pathname","search",l)),xe(!l.pathname||!l.pathname.includes("#"),Yi("#","pathname","hash",l)),xe(!l.search||!l.search.includes("#"),Yi("#","search","hash",l)));let i=e===""||l.pathname==="",a=i?"/":l.pathname,o;if(r||a==null)o=n;else{let h=t.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;l.pathname=f.join("/")}o=h>=0?t[h]:"/"}let u=mp(l,o),c=a&&a!=="/"&&a.endsWith("/"),x=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||x)&&(u.pathname+="/"),u}const kn=e=>e.join("/").replace(/\/\/+/g,"/"),xp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const J1=["post","put","patch","delete"];new Set(J1);const bp=["get",...J1];new Set(bp);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function As(){return As=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},As.apply(this,arguments)}const lu=j.createContext(null),wp=j.createContext(null),Xs=j.createContext(null),Js=j.createContext(null),Sr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),ed=j.createContext(null);function ei(){return j.useContext(Js)!=null}function su(){return ei()||xe(!1),j.useContext(Js).location}function td(e){j.useContext(Xs).static||j.useLayoutEffect(e)}function nd(){let{isDataRoute:e}=j.useContext(Sr);return e?$p():Cp()}function Cp(){ei()||xe(!1);let e=j.useContext(lu),{basename:t,navigator:n}=j.useContext(Xs),{matches:r}=j.useContext(Sr),{pathname:l}=su(),i=JSON.stringify(pp(r).map(u=>u.pathnameBase)),a=j.useRef(!1);return td(()=>{a.current=!0}),j.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){n.go(u);return}let x=hp(u,JSON.parse(i),l,c.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:kn([t,x.pathname])),(c.replace?n.replace:n.push)(x,c.state,c)},[t,n,i,l,e])}function Np(e,t){return jp(e,t)}function jp(e,t,n){ei()||xe(!1);let{navigator:r}=j.useContext(Xs),{matches:l}=j.useContext(Sr),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let u=su(),c;if(t){var x;let w=typeof t=="string"?kr(t):t;o==="/"||(x=w.pathname)!=null&&x.startsWith(o)||xe(!1),c=w}else c=u;let h=c.pathname||"/",f=o==="/"?h:h.slice(o.length)||"/",b=K3(e,{pathname:f}),C=Tp(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:kn([o,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?o:kn([o,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),l,n);return t&&C?j.createElement(Js.Provider,{value:{location:As({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Gt.Pop}},C):C}function kp(){let e=Pp(),t=yp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:l},n):null,i)}const Sp=j.createElement(kp,null);class Mp extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?j.createElement(Sr.Provider,{value:this.props.routeContext},j.createElement(ed.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ep(e){let{routeContext:t,match:n,children:r}=e,l=j.useContext(lu);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Sr.Provider,{value:t},r)}function Tp(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let o=i.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));o>=0||xe(!1),i=i.slice(0,Math.min(i.length,o+1))}return i.reduceRight((o,u,c)=>{let x=u.route.id?a==null?void 0:a[u.route.id]:null,h=null;n&&(h=u.route.errorElement||Sp);let f=t.concat(i.slice(0,c+1)),b=()=>{let C;return x?C=h:u.route.Component?C=j.createElement(u.route.Component,null):u.route.element?C=u.route.element:C=o,j.createElement(Ep,{match:u,routeContext:{outlet:o,matches:f,isDataRoute:n!=null},children:C})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?j.createElement(Mp,{location:n.location,revalidation:n.revalidation,component:h,error:x,children:b(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):b()},null)}var Qa;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Qa||(Qa={}));var gl;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(gl||(gl={}));function _p(e){let t=j.useContext(lu);return t||xe(!1),t}function Ap(e){let t=j.useContext(wp);return t||xe(!1),t}function Lp(e){let t=j.useContext(Sr);return t||xe(!1),t}function rd(e){let t=Lp(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function Pp(){var e;let t=j.useContext(ed),n=Ap(gl.UseRouteError),r=rd(gl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function $p(){let{router:e}=_p(Qa.UseNavigateStable),t=rd(gl.UseNavigateStable),n=j.useRef(!1);return td(()=>{n.current=!0}),j.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,As({fromRouteId:t},i)))},[e,t])}function ee(e){xe(!1)}function Op(e){let{basename:t="/",children:n=null,location:r,navigationType:l=Gt.Pop,navigator:i,static:a=!1}=e;ei()&&xe(!1);let o=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:o,navigator:i,static:a}),[o,i,a]);typeof r=="string"&&(r=kr(r));let{pathname:c="/",search:x="",hash:h="",state:f=null,key:b="default"}=r,C=j.useMemo(()=>{let w=X1(c,o);return w==null?null:{location:{pathname:w,search:x,hash:h,state:f,key:b},navigationType:l}},[o,c,x,h,f,b,l]);return C==null?null:j.createElement(Xs.Provider,{value:u},j.createElement(Js.Provider,{children:n,value:C}))}function ld(e){let{children:t,location:n}=e;return Np(Ka(t),n)}var Vc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Vc||(Vc={}));new Promise(()=>{});function Ka(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,l)=>{if(!j.isValidElement(r))return;let i=[...t,l];if(r.type===j.Fragment){n.push.apply(n,Ka(r.props.children,i));return}r.type!==ee&&xe(!1),!r.props.index||!r.props.children||xe(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ka(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fp(e){let{basename:t,children:n,window:r}=e,l=j.useRef();l.current==null&&(l.current=Y3({window:r,v5Compat:!0}));let i=l.current,[a,o]=j.useState({action:i.action,location:i.location});return j.useLayoutEffect(()=>i.listen(o),[i]),j.createElement(Op,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i})}var Bc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Bc||(Bc={}));var Uc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Uc||(Uc={}));function Dp(){return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:` <div className="space-x-6">
            <img
                className="inline-block h-6 w-6 rounded-full"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
            />
            <img
                className="inline-block h-8 w-8 rounded-full"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
            />
            <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
            />
            <img
                className="inline-block h-12 w-12 rounded-full"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
            />
            <img
                className="inline-block h-14 w-14 rounded-full"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
            />
        </div>`}),s.jsxs("div",{className:"space-x-6",children:[s.jsx("img",{className:"inline-block h-6 w-6 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),s.jsx("img",{className:"inline-block h-8 w-8 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),s.jsx("img",{className:"inline-block h-10 w-10 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),s.jsx("img",{className:"inline-block h-12 w-12 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),s.jsx("img",{className:"inline-block h-14 w-14 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"})]})]})}function Zc(){return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:` <div className="w-[300px] rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          About Macbook <ArrowUpRight className="ml-2 h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Macbook
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Apple
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Laptop
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>`}),s.jsxs("div",{className:"w-[300px] rounded-md border",children:[s.jsx("img",{src:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",alt:"Laptop",className:"h-[200px] w-full rounded-t-md object-cover"}),s.jsxs("div",{className:"p-4",children:[s.jsxs("h1",{className:"inline-flex items-center text-lg font-semibold",children:["About Macbook ",s.jsx($3,{className:"ml-2 h-4 w-4"})]}),s.jsx("p",{className:"mt-3 text-sm text-gray-600",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Macbook"}),s.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Apple"}),s.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Laptop"})]}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Read"})]})]})]})}function Ip(){return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`<section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-md object-cover object-top"
                src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="relative">
              <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                <h3 className="text-4xl font-bold text-white">
                  Now you dont have to rely on your designer to create a new page
                </h3>
                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white"> Commercial License </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white"> Unlimited Exports </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white"> 120+ Coded Blocks </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white"> Design Files Included </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?{' '}
                <a
                  href="#"
                  title=""
                  className="font-medium text-black transition-all duration-200 hover:underline"
                >
                  Sign In
                </a>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-base font-medium text-gray-900">
                      {' '}
                      Full Name{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Full Name"
                        id="name"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                      {' '}
                      Email address{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                        id="email"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-base font-medium text-gray-900">
                        {' '}
                        Password{' '}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                        id="password"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Create Account <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </span>
                  Sign up with Google
                </button>
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-[#2563EB]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </span>
                  Sign up with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>`}),s.jsx("section",{children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[s.jsxs("div",{className:"relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24",children:[s.jsx("div",{className:"absolute inset-0",children:s.jsx("img",{className:"h-full w-full rounded-md object-cover object-top",src:"https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:""})}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),s.jsx("div",{className:"relative",children:s.jsxs("div",{className:"w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24",children:[s.jsx("h3",{className:"text-4xl font-bold text-white",children:"Now you dont have to rely on your designer to create a new page"}),s.jsxs("ul",{className:"mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2",children:[s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Commercial License "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Unlimited Exports "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" 120+ Coded Blocks "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Design Files Included "})]})]})]})})]}),s.jsx("div",{className:"flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",children:s.jsxs("div",{className:"xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",children:[s.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl",children:"Sign up"}),s.jsxs("p",{className:"mt-2 text-base text-gray-600",children:["Already have an account?"," ",s.jsx("a",{href:"#",title:"",className:"font-medium text-black transition-all duration-200 hover:underline",children:"Sign In"})]}),s.jsx("form",{action:"#",method:"POST",className:"mt-8",children:s.jsxs("div",{className:"space-y-5",children:[s.jsxs("div",{children:[s.jsxs("label",{htmlFor:"name",className:"text-base font-medium text-gray-900",children:[" ","Full Name"," "]}),s.jsx("div",{className:"mt-2",children:s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Full Name",id:"name"})})]}),s.jsxs("div",{children:[s.jsxs("label",{htmlFor:"email",className:"text-base font-medium text-gray-900",children:[" ","Email address"," "]}),s.jsx("div",{className:"mt-2",children:s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email",id:"email"})})]}),s.jsxs("div",{children:[s.jsx("div",{className:"flex items-center justify-between",children:s.jsxs("label",{htmlFor:"password",className:"text-base font-medium text-gray-900",children:[" ","Password"," "]})}),s.jsx("div",{className:"mt-2",children:s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"password",placeholder:"Password",id:"password"})})]}),s.jsx("div",{children:s.jsxs("button",{type:"button",className:"inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",children:["Create Account ",s.jsx(Kr,{className:"ml-2",size:16})]})})]})}),s.jsxs("div",{className:"mt-3 space-y-3",children:[s.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[s.jsx("span",{className:"mr-2 inline-block",children:s.jsx("svg",{className:"h-6 w-6 text-rose-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"})})}),"Sign up with Google"]}),s.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[s.jsx("span",{className:"mr-2 inline-block",children:s.jsx("svg",{className:"h-6 w-6 text-[#2563EB]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"})})}),"Sign up with Facebook"]})]})]})})]})})]})}function zp(){return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`<section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-md object-cover object-top"
                src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="relative">
              <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                <h3 className="text-4xl font-bold text-white">
                  Now you dont have to rely on your designer to create a new page
                </h3>
                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white"> Commercial License </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white"> Unlimited Exports </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white"> 120+ Coded Blocks </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white"> Design Files Included </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
              <p className="mt-2 text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <a
                  href="#"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </a>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Email address{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="" className="text-base font-medium text-gray-900">
                        {' '}
                        Password{' '}
                      </label>
                      <a
                        href="#"
                        title=""
                        className="text-sm font-semibold text-black hover:underline"
                      >
                        {' '}
                        Forgot password?{' '}
                      </a>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Get started <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </span>
                  Sign in with Google
                </button>
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-[#2563EB]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </span>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>`}),s.jsx("section",{children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[s.jsxs("div",{className:"relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24",children:[s.jsx("div",{className:"absolute inset-0",children:s.jsx("img",{className:"h-full w-full rounded-md object-cover object-top",src:"https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",alt:""})}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),s.jsx("div",{className:"relative",children:s.jsxs("div",{className:"w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24",children:[s.jsx("h3",{className:"text-4xl font-bold text-white",children:"Now you dont have to rely on your designer to create a new page"}),s.jsxs("ul",{className:"mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2",children:[s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Commercial License "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Unlimited Exports "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" 120+ Coded Blocks "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Design Files Included "})]})]})]})})]}),s.jsx("div",{className:"flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",children:s.jsxs("div",{className:"xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",children:[s.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl",children:"Sign in"}),s.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["Don't have an account?"," ",s.jsx("a",{href:"#",title:"",className:"font-semibold text-black transition-all duration-200 hover:underline",children:"Create a free account"})]}),s.jsx("form",{action:"#",method:"POST",className:"mt-8",children:s.jsxs("div",{className:"space-y-5",children:[s.jsxs("div",{children:[s.jsxs("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Email address"," "]}),s.jsx("div",{className:"mt-2",children:s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"})})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Password"," "]}),s.jsxs("a",{href:"#",title:"",className:"text-sm font-semibold text-black hover:underline",children:[" ","Forgot password?"," "]})]}),s.jsx("div",{className:"mt-2",children:s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"password",placeholder:"Password"})})]}),s.jsx("div",{children:s.jsxs("button",{type:"button",className:"inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",children:["Get started ",s.jsx(Kr,{className:"ml-2",size:16})]})})]})}),s.jsxs("div",{className:"mt-3 space-y-3",children:[s.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[s.jsx("span",{className:"mr-2 inline-block",children:s.jsx("svg",{className:"h-6 w-6 text-rose-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"})})}),"Sign in with Google"]}),s.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[s.jsx("span",{className:"mr-2 inline-block",children:s.jsx("svg",{className:"h-6 w-6 text-[#2563EB]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"})})}),"Sign in with Facebook"]})]})]})})]})})]})}const Hc=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],Rp=[{category:"Design",title:"10 Tips for Crafting the Perfect UX Portfolio",description:"Learn how to showcase your design skills and stand out in a crowded job market.",author:"Emily Lee",date:"3 April 2023",avatar:"https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg",poster:"https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"},{category:"Technology",title:"The Future of Mobile App Development",description:"Discover the latest trends and techniques that will shape the future of mobile app development.",author:"John Smith",date:"1 April 2023",avatar:"https://randomuser.me/api/portraits/men/32.jpg",poster:"https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"},{category:"Business",title:"How to Launch a Successful Startup",description:"Learn the essential steps to launch a successful startup and make your dreams a reality.",author:"Sarah Brown",date:"28 March 2023",avatar:"https://randomuser.me/api/portraits/women/44.jpg",poster:"https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Health",title:"The Benefits of Mindfulness Meditation",description:"Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.",author:"David Kim",date:"25 March 2023",avatar:"https://randomuser.me/api/portraits/men/46.jpg",poster:"https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Education",title:"Why Learning a Second Language is Important",description:"Explore the benefits of learning a second language and how it can improve your cognitive abilities.",author:"Maria Rodriguez",date:"22 March 2023",avatar:"https://randomuser.me/api/portraits/men/97.jpg",poster:"https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Travel",title:"The Best Places to Visit in Europe",description:"Discover the top destinations in Europe and plan your dream vacation.",author:"Alex Johnson",date:"19 March 2023",avatar:"https://randomuser.me/api/portraits/men/99.jpg",poster:"https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Food",title:"How to Make the Perfect Cup of Coffee",description:"Learn the secrets to making the perfect cup of coffee and impress your friends and family.",author:"Thomas Lee",date:"16 March 2023",avatar:"https://randomuser.me/api/portraits/women/63.jpg",poster:"https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80"},{category:"Fashion",title:"The Latest Fashion Trends for Spring 2023",description:"Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.",author:"Jessica Kim",date:"13 March 2023",avatar:"https://randomuser.me/api/portraits/women/47.jpg",poster:"https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Sports",title:"The Benefits of Yoga for Athletes",description:"Learn how practicing yoga can improve your athletic performance and prevent injuries.",author:"Michael Johnson",date:"10 March 2023",avatar:"https://randomuser.me/api/portraits/men/86.jpg",poster:"https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"}];function Vp(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`//Source - Dev UI
    'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
{
  name: 'Home',
  href: '#',
},
{
  name: 'About',
  href: '#',
},
{
  name: 'Contact',
  href: '#',
},
]

const posts = [
{
  category: 'Design',
  title: '10 Tips for Crafting the Perfect UX Portfolio',
  description: 'Learn how to showcase your design skills and stand out in a crowded job market.',
  author: 'Emily Lee',
  date: '3 April 2023',
  avatar: 'https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg',
  poster:
    'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
},
{
  category: 'Technology',
  title: 'The Future of Mobile App Development',
  description:
    'Discover the latest trends and techniques that will shape the future of mobile app development.',
  author: 'John Smith',
  date: '1 April 2023',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  poster:
    'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
},
{
  category: 'Business',
  title: 'How to Launch a Successful Startup',
  description:
    'Learn the essential steps to launch a successful startup and make your dreams a reality.',
  author: 'Sarah Brown',
  date: '28 March 2023',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  poster:
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
},
{
  category: 'Health',
  title: 'The Benefits of Mindfulness Meditation',
  description:
    'Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.',
  author: 'David Kim',
  date: '25 March 2023',
  avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  poster:
    'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
},
{
  category: 'Education',
  title: 'Why Learning a Second Language is Important',
  description:
    'Explore the benefits of learning a second language and how it can improve your cognitive abilities.',
  author: 'Maria Rodriguez',
  date: '22 March 2023',
  avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
  poster:
    'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
},
{
  category: 'Travel',
  title: 'The Best Places to Visit in Europe',
  description: 'Discover the top destinations in Europe and plan your dream vacation.',
  author: 'Alex Johnson',
  date: '19 March 2023',
  avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
  poster:
    'https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
},
{
  category: 'Food',
  title: 'How to Make the Perfect Cup of Coffee',
  description:
    'Learn the secrets to making the perfect cup of coffee and impress your friends and family.',
  author: 'Thomas Lee',
  date: '16 March 2023',
  avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
  poster:
    'https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80',
},
{
  category: 'Fashion',
  title: 'The Latest Fashion Trends for Spring 2023',
  description:
    'Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.',
  author: 'Jessica Kim',
  date: '13 March 2023',
  avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
  poster:
    'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
},
{
  category: 'Sports',
  title: 'The Benefits of Yoga for Athletes',
  description:
    'Learn how practicing yoga can improve your athletic performance and prevent injuries.',
  author: 'Michael Johnson',
  date: '10 March 2023',
  avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
  poster:
    'https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
},
]

export function BlogPage() {
const [isMenuOpen, setIsMenuOpen] = React.useState(false)

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen)
}

return (
  <>
    <div>
      <header className="relative w-full border-b bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="font-bold">DevUI</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Button text
            </button>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 50 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span className="font-bold">DevUI</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Button text
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Resources and insights
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
          <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search Topics"
            ></input>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Search
            </button>
          </div>
        </div>
        <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <div className="flex w-full items-end border-b border-gray-300">
            {['Design', 'Product', 'Software Engineering', 'Customer Success'].map(
              (filter, index) => (
                <div
                  className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black"
                  key={filter}
                >
                  {filter}
                </div>
              )
            )}
          </div>
        </div>
        {/* posts */}
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="border">
              <img src={post.poster} className="aspect-video w-full rounded-md" alt="" />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #{post.category}
                </p>
                <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{post.title}</p>
                <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                  {post.description}
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <img className="h-full w-10 rounded-lg" src={post.avatar} alt={post.author} />
                  <div>
                    <p className="text-sm font-semibold leading-tight text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-sm leading-tight text-gray-600">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full border-t border-gray-300">
          <div className="mt-2 flex items-center justify-between">
            <div className="hidden md:block">
              <p>
                showing <strong>1</strong> to <strong>10</strong> of <strong>20</strong> results
              </p>
            </div>
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="mx-auto mt-12 max-w-7xl bg-gray-50">
        <footer className="px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <span>
              <svg
                width="40"
                height="46"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <div className="mt-4 grow md:ml-12 md:mt-0">
              <p className="text-base font-semibold text-gray-700">
                © 2023 DevUI Component Library
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Company</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Our Stores</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Washington</li>
                <li>New Hampshire</li>
                <li>Maine</li>
                <li>Texas</li>
                <li>Indiana</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Services</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>UI / UX Design</li>
                <li>App Development</li>
                <li>API reference</li>
                <li>API status</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
                <li>Media Policy</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Social Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
</>
)
}`}),s.jsxs("div",{children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:Hc.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(Nr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(jr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:Hc.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsxs("div",{className:"mx-auto max-w-7xl px-2",children:[s.jsxs("div",{className:"flex flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[s.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Resources and insights"}),s.jsx("p",{className:"max-w-4xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"}),s.jsxs("div",{className:"mt-6 flex w-full items-center space-x-2 md:w-1/3",children:[s.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Search Topics"}),s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Search"})]})]}),s.jsx("div",{className:"mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row",children:s.jsx("div",{className:"flex w-full items-end border-b border-gray-300",children:["Design","Product","Software Engineering","Customer Success"].map((r,l)=>s.jsx("div",{className:"cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black",children:r},r))})}),s.jsx("div",{className:"grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3",children:Rp.map(r=>s.jsxs("div",{className:"border",children:[s.jsx("img",{src:r.poster,className:"aspect-video w-full rounded-md",alt:""}),s.jsxs("div",{className:"min-h-min p-3",children:[s.jsxs("p",{className:"mt-4 w-full text-xs font-semibold leading-tight text-gray-700",children:["#",r.category]}),s.jsx("p",{className:"mt-4 flex-1 text-base font-semibold text-gray-900",children:r.title}),s.jsx("p",{className:"mt-4 w-full text-sm leading-normal text-gray-600",children:r.description}),s.jsxs("div",{className:"mt-4 flex space-x-3 ",children:[s.jsx("img",{className:"h-full w-10 rounded-lg",src:r.avatar,alt:r.author}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-semibold leading-tight text-gray-900",children:r.author}),s.jsx("p",{className:"text-sm leading-tight text-gray-600",children:r.date})]})]})]})]},r.title))}),s.jsx("div",{className:"w-full border-t border-gray-300",children:s.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[s.jsx("div",{className:"hidden md:block",children:s.jsxs("p",{children:["showing ",s.jsx("strong",{children:"1"})," to ",s.jsx("strong",{children:"10"})," of ",s.jsx("strong",{children:"20"})," results"]})}),s.jsxs("div",{className:"space-x-2",children:[s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"← Previous"}),s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Next →"})]})]})})]}),s.jsx("div",{className:"mx-auto mt-12 max-w-7xl bg-gray-50",children:s.jsxs("footer",{className:"px-4 py-10",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[s.jsx("span",{children:s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:s.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),s.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"About us"}),s.jsx("li",{children:"Company History"}),s.jsx("li",{children:"Our Team"}),s.jsx("li",{children:"Our Vision"}),s.jsx("li",{children:"Press Release"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Washington"}),s.jsx("li",{children:"New Hampshire"}),s.jsx("li",{children:"Maine"}),s.jsx("li",{children:"Texas"}),s.jsx("li",{children:"Indiana"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"UI / UX Design"}),s.jsx("li",{children:"App Development"}),s.jsx("li",{children:"API reference"}),s.jsx("li",{children:"API status"}),s.jsx("li",{children:"Documentation"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Privacy Policy"}),s.jsx("li",{children:"Terms of Service"}),s.jsx("li",{children:"Cookie Policy"}),s.jsx("li",{children:"Disclaimer"}),s.jsx("li",{children:"Media Policy"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Facebook"}),s.jsx("li",{children:"Twitter"}),s.jsx("li",{children:"Instagram"}),s.jsx("li",{children:"Linkedin"}),s.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}var Wc=Array.isArray,qc=Object.keys,Bp=Object.prototype.hasOwnProperty,Up=typeof Element<"u";function Xa(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Wc(e),r=Wc(t),l,i,a;if(n&&r){if(i=e.length,i!=t.length)return!1;for(l=i;l--!==0;)if(!Xa(e[l],t[l]))return!1;return!0}if(n!=r)return!1;var o=e instanceof Date,u=t instanceof Date;if(o!=u)return!1;if(o&&u)return e.getTime()==t.getTime();var c=e instanceof RegExp,x=t instanceof RegExp;if(c!=x)return!1;if(c&&x)return e.toString()==t.toString();var h=qc(e);if(i=h.length,i!==qc(t).length)return!1;for(l=i;l--!==0;)if(!Bp.call(t,h[l]))return!1;if(Up&&e instanceof Element&&t instanceof Element)return e===t;for(l=i;l--!==0;)if(a=h[l],!(a==="_owner"&&e.$$typeof)&&!Xa(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var Zp=function(t,n){try{return Xa(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const gn=Os(Zp);var Hp=function(t){return Wp(t)&&!qp(t)};function Wp(e){return!!e&&typeof e=="object"}function qp(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Qp(e)}var Yp=typeof Symbol=="function"&&Symbol.for,Gp=Yp?Symbol.for("react.element"):60103;function Qp(e){return e.$$typeof===Gp}function Kp(e){return Array.isArray(e)?[]:{}}function Ls(e,t){return t.clone!==!1&&t.isMergeableObject(e)?vl(Kp(e),e,t):e}function Xp(e,t,n){return e.concat(t).map(function(r){return Ls(r,n)})}function Jp(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(l){r[l]=Ls(e[l],n)}),Object.keys(t).forEach(function(l){!n.isMergeableObject(t[l])||!e[l]?r[l]=Ls(t[l],n):r[l]=vl(e[l],t[l],n)}),r}function vl(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||Xp,n.isMergeableObject=n.isMergeableObject||Hp;var r=Array.isArray(t),l=Array.isArray(e),i=r===l;return i?r?n.arrayMerge(e,t,n):Jp(e,t,n):Ls(t,n)}vl.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,l){return vl(r,l,n)},{})};var Ja=vl,eh=typeof global=="object"&&global&&global.Object===Object&&global;const sd=eh;var th=typeof self=="object"&&self&&self.Object===Object&&self,nh=sd||th||Function("return this")();const Mt=nh;var rh=Mt.Symbol;const on=rh;var id=Object.prototype,lh=id.hasOwnProperty,sh=id.toString,Dr=on?on.toStringTag:void 0;function ih(e){var t=lh.call(e,Dr),n=e[Dr];try{e[Dr]=void 0;var r=!0}catch{}var l=sh.call(e);return r&&(t?e[Dr]=n:delete e[Dr]),l}var ah=Object.prototype,oh=ah.toString;function uh(e){return oh.call(e)}var ch="[object Null]",dh="[object Undefined]",Yc=on?on.toStringTag:void 0;function Fn(e){return e==null?e===void 0?dh:ch:Yc&&Yc in Object(e)?ih(e):uh(e)}function ad(e,t){return function(n){return e(t(n))}}var mh=ad(Object.getPrototypeOf,Object);const iu=mh;function Dn(e){return e!=null&&typeof e=="object"}var fh="[object Object]",ph=Function.prototype,hh=Object.prototype,od=ph.toString,xh=hh.hasOwnProperty,gh=od.call(Object);function Gc(e){if(!Dn(e)||Fn(e)!=fh)return!1;var t=iu(e);if(t===null)return!0;var n=xh.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&od.call(n)==gh}function vh(){this.__data__=[],this.size=0}function ud(e,t){return e===t||e!==e&&t!==t}function ti(e,t){for(var n=e.length;n--;)if(ud(e[n][0],t))return n;return-1}var yh=Array.prototype,bh=yh.splice;function wh(e){var t=this.__data__,n=ti(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():bh.call(t,n,1),--this.size,!0}function Ch(e){var t=this.__data__,n=ti(t,e);return n<0?void 0:t[n][1]}function Nh(e){return ti(this.__data__,e)>-1}function jh(e,t){var n=this.__data__,r=ti(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Vt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Vt.prototype.clear=vh;Vt.prototype.delete=wh;Vt.prototype.get=Ch;Vt.prototype.has=Nh;Vt.prototype.set=jh;function kh(){this.__data__=new Vt,this.size=0}function Sh(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Mh(e){return this.__data__.get(e)}function Eh(e){return this.__data__.has(e)}function Sl(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Th="[object AsyncFunction]",_h="[object Function]",Ah="[object GeneratorFunction]",Lh="[object Proxy]";function cd(e){if(!Sl(e))return!1;var t=Fn(e);return t==_h||t==Ah||t==Th||t==Lh}var Ph=Mt["__core-js_shared__"];const Gi=Ph;var Qc=function(){var e=/[^.]+$/.exec(Gi&&Gi.keys&&Gi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function $h(e){return!!Qc&&Qc in e}var Oh=Function.prototype,Fh=Oh.toString;function In(e){if(e!=null){try{return Fh.call(e)}catch{}try{return e+""}catch{}}return""}var Dh=/[\\^$.*+?()[\]{}|]/g,Ih=/^\[object .+?Constructor\]$/,zh=Function.prototype,Rh=Object.prototype,Vh=zh.toString,Bh=Rh.hasOwnProperty,Uh=RegExp("^"+Vh.call(Bh).replace(Dh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Zh(e){if(!Sl(e)||$h(e))return!1;var t=cd(e)?Uh:Ih;return t.test(In(e))}function Hh(e,t){return e==null?void 0:e[t]}function zn(e,t){var n=Hh(e,t);return Zh(n)?n:void 0}var Wh=zn(Mt,"Map");const yl=Wh;var qh=zn(Object,"create");const bl=qh;function Yh(){this.__data__=bl?bl(null):{},this.size=0}function Gh(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Qh="__lodash_hash_undefined__",Kh=Object.prototype,Xh=Kh.hasOwnProperty;function Jh(e){var t=this.__data__;if(bl){var n=t[e];return n===Qh?void 0:n}return Xh.call(t,e)?t[e]:void 0}var e4=Object.prototype,t4=e4.hasOwnProperty;function n4(e){var t=this.__data__;return bl?t[e]!==void 0:t4.call(t,e)}var r4="__lodash_hash_undefined__";function l4(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=bl&&t===void 0?r4:t,this}function Pn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pn.prototype.clear=Yh;Pn.prototype.delete=Gh;Pn.prototype.get=Jh;Pn.prototype.has=n4;Pn.prototype.set=l4;function s4(){this.size=0,this.__data__={hash:new Pn,map:new(yl||Vt),string:new Pn}}function i4(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ni(e,t){var n=e.__data__;return i4(t)?n[typeof t=="string"?"string":"hash"]:n.map}function a4(e){var t=ni(this,e).delete(e);return this.size-=t?1:0,t}function o4(e){return ni(this,e).get(e)}function u4(e){return ni(this,e).has(e)}function c4(e,t){var n=ni(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function fn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}fn.prototype.clear=s4;fn.prototype.delete=a4;fn.prototype.get=o4;fn.prototype.has=u4;fn.prototype.set=c4;var d4=200;function m4(e,t){var n=this.__data__;if(n instanceof Vt){var r=n.__data__;if(!yl||r.length<d4-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new fn(r)}return n.set(e,t),this.size=n.size,this}function Mr(e){var t=this.__data__=new Vt(e);this.size=t.size}Mr.prototype.clear=kh;Mr.prototype.delete=Sh;Mr.prototype.get=Mh;Mr.prototype.has=Eh;Mr.prototype.set=m4;function f4(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var p4=function(){try{var e=zn(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Kc=p4;function dd(e,t,n){t=="__proto__"&&Kc?Kc(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var h4=Object.prototype,x4=h4.hasOwnProperty;function md(e,t,n){var r=e[t];(!(x4.call(e,t)&&ud(r,n))||n===void 0&&!(t in e))&&dd(e,t,n)}function ri(e,t,n,r){var l=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var o=t[i],u=r?r(n[o],e[o],o,n,e):void 0;u===void 0&&(u=e[o]),l?dd(n,o,u):md(n,o,u)}return n}function g4(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var v4="[object Arguments]";function Xc(e){return Dn(e)&&Fn(e)==v4}var fd=Object.prototype,y4=fd.hasOwnProperty,b4=fd.propertyIsEnumerable,w4=Xc(function(){return arguments}())?Xc:function(e){return Dn(e)&&y4.call(e,"callee")&&!b4.call(e,"callee")};const C4=w4;var N4=Array.isArray;const Ml=N4;function j4(){return!1}var pd=typeof Ge=="object"&&Ge&&!Ge.nodeType&&Ge,Jc=pd&&typeof Qe=="object"&&Qe&&!Qe.nodeType&&Qe,k4=Jc&&Jc.exports===pd,e2=k4?Mt.Buffer:void 0,S4=e2?e2.isBuffer:void 0,M4=S4||j4;const hd=M4;var E4=9007199254740991,T4=/^(?:0|[1-9]\d*)$/;function _4(e,t){var n=typeof e;return t=t??E4,!!t&&(n=="number"||n!="symbol"&&T4.test(e))&&e>-1&&e%1==0&&e<t}var A4=9007199254740991;function xd(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=A4}var L4="[object Arguments]",P4="[object Array]",$4="[object Boolean]",O4="[object Date]",F4="[object Error]",D4="[object Function]",I4="[object Map]",z4="[object Number]",R4="[object Object]",V4="[object RegExp]",B4="[object Set]",U4="[object String]",Z4="[object WeakMap]",H4="[object ArrayBuffer]",W4="[object DataView]",q4="[object Float32Array]",Y4="[object Float64Array]",G4="[object Int8Array]",Q4="[object Int16Array]",K4="[object Int32Array]",X4="[object Uint8Array]",J4="[object Uint8ClampedArray]",e6="[object Uint16Array]",t6="[object Uint32Array]",le={};le[q4]=le[Y4]=le[G4]=le[Q4]=le[K4]=le[X4]=le[J4]=le[e6]=le[t6]=!0;le[L4]=le[P4]=le[H4]=le[$4]=le[W4]=le[O4]=le[F4]=le[D4]=le[I4]=le[z4]=le[R4]=le[V4]=le[B4]=le[U4]=le[Z4]=!1;function n6(e){return Dn(e)&&xd(e.length)&&!!le[Fn(e)]}function au(e){return function(t){return e(t)}}var gd=typeof Ge=="object"&&Ge&&!Ge.nodeType&&Ge,Xr=gd&&typeof Qe=="object"&&Qe&&!Qe.nodeType&&Qe,r6=Xr&&Xr.exports===gd,Qi=r6&&sd.process,l6=function(){try{var e=Xr&&Xr.require&&Xr.require("util").types;return e||Qi&&Qi.binding&&Qi.binding("util")}catch{}}();const yr=l6;var t2=yr&&yr.isTypedArray,s6=t2?au(t2):n6;const i6=s6;var a6=Object.prototype,o6=a6.hasOwnProperty;function vd(e,t){var n=Ml(e),r=!n&&C4(e),l=!n&&!r&&hd(e),i=!n&&!r&&!l&&i6(e),a=n||r||l||i,o=a?g4(e.length,String):[],u=o.length;for(var c in e)(t||o6.call(e,c))&&!(a&&(c=="length"||l&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||_4(c,u)))&&o.push(c);return o}var u6=Object.prototype;function ou(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||u6;return e===n}var c6=ad(Object.keys,Object);const d6=c6;var m6=Object.prototype,f6=m6.hasOwnProperty;function p6(e){if(!ou(e))return d6(e);var t=[];for(var n in Object(e))f6.call(e,n)&&n!="constructor"&&t.push(n);return t}function yd(e){return e!=null&&xd(e.length)&&!cd(e)}function uu(e){return yd(e)?vd(e):p6(e)}function h6(e,t){return e&&ri(t,uu(t),e)}function x6(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var g6=Object.prototype,v6=g6.hasOwnProperty;function y6(e){if(!Sl(e))return x6(e);var t=ou(e),n=[];for(var r in e)r=="constructor"&&(t||!v6.call(e,r))||n.push(r);return n}function cu(e){return yd(e)?vd(e,!0):y6(e)}function b6(e,t){return e&&ri(t,cu(t),e)}var bd=typeof Ge=="object"&&Ge&&!Ge.nodeType&&Ge,n2=bd&&typeof Qe=="object"&&Qe&&!Qe.nodeType&&Qe,w6=n2&&n2.exports===bd,r2=w6?Mt.Buffer:void 0,l2=r2?r2.allocUnsafe:void 0;function C6(e,t){if(t)return e.slice();var n=e.length,r=l2?l2(n):new e.constructor(n);return e.copy(r),r}function wd(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function N6(e,t){for(var n=-1,r=e==null?0:e.length,l=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[l++]=a)}return i}function Cd(){return[]}var j6=Object.prototype,k6=j6.propertyIsEnumerable,s2=Object.getOwnPropertySymbols,S6=s2?function(e){return e==null?[]:(e=Object(e),N6(s2(e),function(t){return k6.call(e,t)}))}:Cd;const du=S6;function M6(e,t){return ri(e,du(e),t)}function Nd(e,t){for(var n=-1,r=t.length,l=e.length;++n<r;)e[l+n]=t[n];return e}var E6=Object.getOwnPropertySymbols,T6=E6?function(e){for(var t=[];e;)Nd(t,du(e)),e=iu(e);return t}:Cd;const jd=T6;function _6(e,t){return ri(e,jd(e),t)}function kd(e,t,n){var r=t(e);return Ml(e)?r:Nd(r,n(e))}function A6(e){return kd(e,uu,du)}function L6(e){return kd(e,cu,jd)}var P6=zn(Mt,"DataView");const eo=P6;var $6=zn(Mt,"Promise");const to=$6;var O6=zn(Mt,"Set");const no=O6;var F6=zn(Mt,"WeakMap");const ro=F6;var i2="[object Map]",D6="[object Object]",a2="[object Promise]",o2="[object Set]",u2="[object WeakMap]",c2="[object DataView]",I6=In(eo),z6=In(yl),R6=In(to),V6=In(no),B6=In(ro),vn=Fn;(eo&&vn(new eo(new ArrayBuffer(1)))!=c2||yl&&vn(new yl)!=i2||to&&vn(to.resolve())!=a2||no&&vn(new no)!=o2||ro&&vn(new ro)!=u2)&&(vn=function(e){var t=Fn(e),n=t==D6?e.constructor:void 0,r=n?In(n):"";if(r)switch(r){case I6:return c2;case z6:return i2;case R6:return a2;case V6:return o2;case B6:return u2}return t});const mu=vn;var U6=Object.prototype,Z6=U6.hasOwnProperty;function H6(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&Z6.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var W6=Mt.Uint8Array;const d2=W6;function fu(e){var t=new e.constructor(e.byteLength);return new d2(t).set(new d2(e)),t}function q6(e,t){var n=t?fu(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Y6=/\w*$/;function G6(e){var t=new e.constructor(e.source,Y6.exec(e));return t.lastIndex=e.lastIndex,t}var m2=on?on.prototype:void 0,f2=m2?m2.valueOf:void 0;function Q6(e){return f2?Object(f2.call(e)):{}}function K6(e,t){var n=t?fu(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var X6="[object Boolean]",J6="[object Date]",e9="[object Map]",t9="[object Number]",n9="[object RegExp]",r9="[object Set]",l9="[object String]",s9="[object Symbol]",i9="[object ArrayBuffer]",a9="[object DataView]",o9="[object Float32Array]",u9="[object Float64Array]",c9="[object Int8Array]",d9="[object Int16Array]",m9="[object Int32Array]",f9="[object Uint8Array]",p9="[object Uint8ClampedArray]",h9="[object Uint16Array]",x9="[object Uint32Array]";function g9(e,t,n){var r=e.constructor;switch(t){case i9:return fu(e);case X6:case J6:return new r(+e);case a9:return q6(e,n);case o9:case u9:case c9:case d9:case m9:case f9:case p9:case h9:case x9:return K6(e,n);case e9:return new r;case t9:case l9:return new r(e);case n9:return G6(e);case r9:return new r;case s9:return Q6(e)}}var p2=Object.create,v9=function(){function e(){}return function(t){if(!Sl(t))return{};if(p2)return p2(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const y9=v9;function b9(e){return typeof e.constructor=="function"&&!ou(e)?y9(iu(e)):{}}var w9="[object Map]";function C9(e){return Dn(e)&&mu(e)==w9}var h2=yr&&yr.isMap,N9=h2?au(h2):C9;const j9=N9;var k9="[object Set]";function S9(e){return Dn(e)&&mu(e)==k9}var x2=yr&&yr.isSet,M9=x2?au(x2):S9;const E9=M9;var T9=1,_9=2,A9=4,Sd="[object Arguments]",L9="[object Array]",P9="[object Boolean]",$9="[object Date]",O9="[object Error]",Md="[object Function]",F9="[object GeneratorFunction]",D9="[object Map]",I9="[object Number]",Ed="[object Object]",z9="[object RegExp]",R9="[object Set]",V9="[object String]",B9="[object Symbol]",U9="[object WeakMap]",Z9="[object ArrayBuffer]",H9="[object DataView]",W9="[object Float32Array]",q9="[object Float64Array]",Y9="[object Int8Array]",G9="[object Int16Array]",Q9="[object Int32Array]",K9="[object Uint8Array]",X9="[object Uint8ClampedArray]",J9="[object Uint16Array]",ex="[object Uint32Array]",te={};te[Sd]=te[L9]=te[Z9]=te[H9]=te[P9]=te[$9]=te[W9]=te[q9]=te[Y9]=te[G9]=te[Q9]=te[D9]=te[I9]=te[Ed]=te[z9]=te[R9]=te[V9]=te[B9]=te[K9]=te[X9]=te[J9]=te[ex]=!0;te[O9]=te[Md]=te[U9]=!1;function ss(e,t,n,r,l,i){var a,o=t&T9,u=t&_9,c=t&A9;if(n&&(a=l?n(e,r,l,i):n(e)),a!==void 0)return a;if(!Sl(e))return e;var x=Ml(e);if(x){if(a=H6(e),!o)return wd(e,a)}else{var h=mu(e),f=h==Md||h==F9;if(hd(e))return C6(e,o);if(h==Ed||h==Sd||f&&!l){if(a=u||f?{}:b9(e),!o)return u?_6(e,b6(a,e)):M6(e,h6(a,e))}else{if(!te[h])return l?e:{};a=g9(e,h,o)}}i||(i=new Mr);var b=i.get(e);if(b)return b;i.set(e,a),E9(e)?e.forEach(function(_){a.add(ss(_,t,n,_,e,i))}):j9(e)&&e.forEach(function(_,p){a.set(p,ss(_,t,n,p,e,i))});var C=c?u?L6:A6:u?cu:uu,w=x?void 0:C(e);return f4(w||e,function(_,p){w&&(p=_,_=e[p]),md(a,p,ss(_,t,n,p,e,i))}),a}var tx=4;function g2(e){return ss(e,tx)}function Td(e,t){for(var n=-1,r=e==null?0:e.length,l=Array(r);++n<r;)l[n]=t(e[n],n,e);return l}var nx="[object Symbol]";function pu(e){return typeof e=="symbol"||Dn(e)&&Fn(e)==nx}var rx="Expected a function";function hu(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(rx);var n=function(){var r=arguments,l=t?t.apply(this,r):r[0],i=n.cache;if(i.has(l))return i.get(l);var a=e.apply(this,r);return n.cache=i.set(l,a)||i,a};return n.cache=new(hu.Cache||fn),n}hu.Cache=fn;var lx=500;function sx(e){var t=hu(e,function(r){return n.size===lx&&n.clear(),r}),n=t.cache;return t}var ix=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ax=/\\(\\)?/g,ox=sx(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ix,function(n,r,l,i){t.push(l?i.replace(ax,"$1"):r||n)}),t});const ux=ox;var cx=1/0;function dx(e){if(typeof e=="string"||pu(e))return e;var t=e+"";return t=="0"&&1/e==-cx?"-0":t}var mx=1/0,v2=on?on.prototype:void 0,y2=v2?v2.toString:void 0;function _d(e){if(typeof e=="string")return e;if(Ml(e))return Td(e,_d)+"";if(pu(e))return y2?y2.call(e):"";var t=e+"";return t=="0"&&1/e==-mx?"-0":t}function fx(e){return e==null?"":_d(e)}function Ad(e){return Ml(e)?Td(e,dx):pu(e)?[e]:wd(ux(fx(e)))}var px=!0;function hx(e,t){if(!px){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}var Ld={exports:{}},X={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,xu=Ce?Symbol.for("react.element"):60103,gu=Ce?Symbol.for("react.portal"):60106,li=Ce?Symbol.for("react.fragment"):60107,si=Ce?Symbol.for("react.strict_mode"):60108,ii=Ce?Symbol.for("react.profiler"):60114,ai=Ce?Symbol.for("react.provider"):60109,oi=Ce?Symbol.for("react.context"):60110,vu=Ce?Symbol.for("react.async_mode"):60111,ui=Ce?Symbol.for("react.concurrent_mode"):60111,ci=Ce?Symbol.for("react.forward_ref"):60112,di=Ce?Symbol.for("react.suspense"):60113,xx=Ce?Symbol.for("react.suspense_list"):60120,mi=Ce?Symbol.for("react.memo"):60115,fi=Ce?Symbol.for("react.lazy"):60116,gx=Ce?Symbol.for("react.block"):60121,vx=Ce?Symbol.for("react.fundamental"):60117,yx=Ce?Symbol.for("react.responder"):60118,bx=Ce?Symbol.for("react.scope"):60119;function tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xu:switch(e=e.type,e){case vu:case ui:case li:case ii:case si:case di:return e;default:switch(e=e&&e.$$typeof,e){case oi:case ci:case fi:case mi:case ai:return e;default:return t}}case gu:return t}}}function Pd(e){return tt(e)===ui}X.AsyncMode=vu;X.ConcurrentMode=ui;X.ContextConsumer=oi;X.ContextProvider=ai;X.Element=xu;X.ForwardRef=ci;X.Fragment=li;X.Lazy=fi;X.Memo=mi;X.Portal=gu;X.Profiler=ii;X.StrictMode=si;X.Suspense=di;X.isAsyncMode=function(e){return Pd(e)||tt(e)===vu};X.isConcurrentMode=Pd;X.isContextConsumer=function(e){return tt(e)===oi};X.isContextProvider=function(e){return tt(e)===ai};X.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xu};X.isForwardRef=function(e){return tt(e)===ci};X.isFragment=function(e){return tt(e)===li};X.isLazy=function(e){return tt(e)===fi};X.isMemo=function(e){return tt(e)===mi};X.isPortal=function(e){return tt(e)===gu};X.isProfiler=function(e){return tt(e)===ii};X.isStrictMode=function(e){return tt(e)===si};X.isSuspense=function(e){return tt(e)===di};X.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===li||e===ui||e===ii||e===si||e===di||e===xx||typeof e=="object"&&e!==null&&(e.$$typeof===fi||e.$$typeof===mi||e.$$typeof===ai||e.$$typeof===oi||e.$$typeof===ci||e.$$typeof===vx||e.$$typeof===yx||e.$$typeof===bx||e.$$typeof===gx)};X.typeOf=tt;Ld.exports=X;var wx=Ld.exports,$d=wx,Cx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Od={};Od[$d.ForwardRef]=Cx;Od[$d.Memo]=Nx;function ke(){return ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ke.apply(this,arguments)}function Fd(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}var dt=function(t){return typeof t=="function"},pi=function(t){return t!==null&&typeof t=="object"},jx=function(t){return String(Math.floor(Number(t)))===t},Ki=function(t){return Object.prototype.toString.call(t)==="[object String]"},Xi=function(t){return pi(t)&&dt(t.then)};function rt(e,t,n,r){r===void 0&&(r=0);for(var l=Ad(t);e&&r<l.length;)e=e[l[r++]];return e===void 0?n:e}function Sn(e,t,n){for(var r=g2(e),l=r,i=0,a=Ad(t);i<a.length-1;i++){var o=a[i],u=rt(e,a.slice(0,i+1));if(u&&(pi(u)||Array.isArray(u)))l=l[o]=g2(u);else{var c=a[i+1];l=l[o]=jx(c)&&Number(c)>=0?[]:{}}}return(i===0?e:l)[a[i]]===n?e:(n===void 0?delete l[a[i]]:l[a[i]]=n,i===0&&n===void 0&&delete r[a[i]],r)}function Dd(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var l=0,i=Object.keys(e);l<i.length;l++){var a=i[l],o=e[a];pi(o)?n.get(o)||(n.set(o,!0),r[a]=Array.isArray(o)?[]:{},Dd(o,t,n,r[a])):r[a]=t}return r}var hi=j.createContext(void 0);hi.displayName="FormikContext";hi.Provider;hi.Consumer;function kx(){var e=j.useContext(hi);return e||hx(!1),e}function Sx(e,t){switch(t.type){case"SET_VALUES":return ke({},e,{values:t.payload});case"SET_TOUCHED":return ke({},e,{touched:t.payload});case"SET_ERRORS":return gn(e.errors,t.payload)?e:ke({},e,{errors:t.payload});case"SET_STATUS":return ke({},e,{status:t.payload});case"SET_ISSUBMITTING":return ke({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return ke({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return ke({},e,{values:Sn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return ke({},e,{touched:Sn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return ke({},e,{errors:Sn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return ke({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return ke({},e,{touched:Dd(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return ke({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return ke({},e,{isSubmitting:!1});default:return e}}var pn={},Hl={};function Mx(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,l=r===void 0?!0:r,i=e.validateOnMount,a=i===void 0?!1:i,o=e.isInitialValid,u=e.enableReinitialize,c=u===void 0?!1:u,x=e.onSubmit,h=Fd(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=ke({validateOnChange:n,validateOnBlur:l,validateOnMount:a,onSubmit:x},h),b=j.useRef(f.initialValues),C=j.useRef(f.initialErrors||pn),w=j.useRef(f.initialTouched||Hl),_=j.useRef(f.initialStatus),p=j.useRef(!1),m=j.useRef({});j.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var g=j.useReducer(Sx,{values:f.initialValues,errors:f.initialErrors||pn,touched:f.initialTouched||Hl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),y=g[0],k=g[1],P=j.useCallback(function(v,I){return new Promise(function(z,V){var W=f.validate(v,I);W==null?z(pn):Xi(W)?W.then(function(Q){z(Q||pn)},function(Q){V(Q)}):z(W)})},[f.validate]),O=j.useCallback(function(v,I){var z=f.validationSchema,V=dt(z)?z(I):z,W=I&&V.validateAt?V.validateAt(I,v):Tx(v,V);return new Promise(function(Q,ye){W.then(function(){Q(pn)},function(Tt){Tt.name==="ValidationError"?Q(Ex(Tt)):ye(Tt)})})},[f.validationSchema]),D=j.useCallback(function(v,I){return new Promise(function(z){return z(m.current[v].validate(I))})},[]),U=j.useCallback(function(v){var I=Object.keys(m.current).filter(function(V){return dt(m.current[V].validate)}),z=I.length>0?I.map(function(V){return D(V,rt(v,V))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(z).then(function(V){return V.reduce(function(W,Q,ye){return Q==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||Q&&(W=Sn(W,I[ye],Q)),W},{})})},[D]),E=j.useCallback(function(v){return Promise.all([U(v),f.validationSchema?O(v):{},f.validate?P(v):{}]).then(function(I){var z=I[0],V=I[1],W=I[2],Q=Ja.all([z,V,W],{arrayMerge:_x});return Q})},[f.validate,f.validationSchema,U,P,O]),Y=nt(function(v){return v===void 0&&(v=y.values),k({type:"SET_ISVALIDATING",payload:!0}),E(v).then(function(I){return p.current&&(k({type:"SET_ISVALIDATING",payload:!1}),k({type:"SET_ERRORS",payload:I})),I})});j.useEffect(function(){a&&p.current===!0&&gn(b.current,f.initialValues)&&Y(b.current)},[a,Y]);var Ne=j.useCallback(function(v){var I=v&&v.values?v.values:b.current,z=v&&v.errors?v.errors:C.current?C.current:f.initialErrors||{},V=v&&v.touched?v.touched:w.current?w.current:f.initialTouched||{},W=v&&v.status?v.status:_.current?_.current:f.initialStatus;b.current=I,C.current=z,w.current=V,_.current=W;var Q=function(){k({type:"RESET_FORM",payload:{isSubmitting:!!v&&!!v.isSubmitting,errors:z,touched:V,status:W,values:I,isValidating:!!v&&!!v.isValidating,submitCount:v&&v.submitCount&&typeof v.submitCount=="number"?v.submitCount:0}})};if(f.onReset){var ye=f.onReset(y.values,Bn);Xi(ye)?ye.then(Q):Q()}else Q()},[f.initialErrors,f.initialStatus,f.initialTouched]);j.useEffect(function(){p.current===!0&&!gn(b.current,f.initialValues)&&(c&&(b.current=f.initialValues,Ne()),a&&Y(b.current))},[c,f.initialValues,Ne,a,Y]),j.useEffect(function(){c&&p.current===!0&&!gn(C.current,f.initialErrors)&&(C.current=f.initialErrors||pn,k({type:"SET_ERRORS",payload:f.initialErrors||pn}))},[c,f.initialErrors]),j.useEffect(function(){c&&p.current===!0&&!gn(w.current,f.initialTouched)&&(w.current=f.initialTouched||Hl,k({type:"SET_TOUCHED",payload:f.initialTouched||Hl}))},[c,f.initialTouched]),j.useEffect(function(){c&&p.current===!0&&!gn(_.current,f.initialStatus)&&(_.current=f.initialStatus,k({type:"SET_STATUS",payload:f.initialStatus}))},[c,f.initialStatus,f.initialTouched]);var R=nt(function(v){if(m.current[v]&&dt(m.current[v].validate)){var I=rt(y.values,v),z=m.current[v].validate(I);return Xi(z)?(k({type:"SET_ISVALIDATING",payload:!0}),z.then(function(V){return V}).then(function(V){k({type:"SET_FIELD_ERROR",payload:{field:v,value:V}}),k({type:"SET_ISVALIDATING",payload:!1})})):(k({type:"SET_FIELD_ERROR",payload:{field:v,value:z}}),Promise.resolve(z))}else if(f.validationSchema)return k({type:"SET_ISVALIDATING",payload:!0}),O(y.values,v).then(function(V){return V}).then(function(V){k({type:"SET_FIELD_ERROR",payload:{field:v,value:V[v]}}),k({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),$=j.useCallback(function(v,I){var z=I.validate;m.current[v]={validate:z}},[]),T=j.useCallback(function(v){delete m.current[v]},[]),B=nt(function(v,I){k({type:"SET_TOUCHED",payload:v});var z=I===void 0?l:I;return z?Y(y.values):Promise.resolve()}),L=j.useCallback(function(v){k({type:"SET_ERRORS",payload:v})},[]),N=nt(function(v,I){var z=dt(v)?v(y.values):v;k({type:"SET_VALUES",payload:z});var V=I===void 0?n:I;return V?Y(z):Promise.resolve()}),M=j.useCallback(function(v,I){k({type:"SET_FIELD_ERROR",payload:{field:v,value:I}})},[]),A=nt(function(v,I,z){k({type:"SET_FIELD_VALUE",payload:{field:v,value:I}});var V=z===void 0?n:z;return V?Y(Sn(y.values,v,I)):Promise.resolve()}),Z=j.useCallback(function(v,I){var z=I,V=v,W;if(!Ki(v)){v.persist&&v.persist();var Q=v.target?v.target:v.currentTarget,ye=Q.type,Tt=Q.name,bi=Q.id,wi=Q.value,em=Q.checked,i7=Q.outerHTML,Su=Q.options,tm=Q.multiple;z=I||Tt||bi,V=/number|range/.test(ye)?(W=parseFloat(wi),isNaN(W)?"":W):/checkbox/.test(ye)?Lx(rt(y.values,z),em,wi):Su&&tm?Ax(Su):wi}z&&A(z,V)},[A,y.values]),H=nt(function(v){if(Ki(v))return function(I){return Z(I,v)};Z(v)}),J=nt(function(v,I,z){I===void 0&&(I=!0),k({type:"SET_FIELD_TOUCHED",payload:{field:v,value:I}});var V=z===void 0?l:z;return V?Y(y.values):Promise.resolve()}),fe=j.useCallback(function(v,I){v.persist&&v.persist();var z=v.target,V=z.name,W=z.id,Q=z.outerHTML,ye=I||V||W;J(ye,!0)},[J]),je=nt(function(v){if(Ki(v))return function(I){return fe(I,v)};fe(v)}),Te=j.useCallback(function(v){dt(v)?k({type:"SET_FORMIK_STATE",payload:v}):k({type:"SET_FORMIK_STATE",payload:function(){return v}})},[]),He=j.useCallback(function(v){k({type:"SET_STATUS",payload:v})},[]),Et=j.useCallback(function(v){k({type:"SET_ISSUBMITTING",payload:v})},[]),ve=nt(function(){return k({type:"SUBMIT_ATTEMPT"}),Y().then(function(v){var I=v instanceof Error,z=!I&&Object.keys(v).length===0;if(z){var V;try{if(V=Un(),V===void 0)return}catch(W){throw W}return Promise.resolve(V).then(function(W){return p.current&&k({type:"SUBMIT_SUCCESS"}),W}).catch(function(W){if(p.current)throw k({type:"SUBMIT_FAILURE"}),W})}else if(p.current&&(k({type:"SUBMIT_FAILURE"}),I))throw v})}),yt=nt(function(v){v&&v.preventDefault&&dt(v.preventDefault)&&v.preventDefault(),v&&v.stopPropagation&&dt(v.stopPropagation)&&v.stopPropagation(),ve().catch(function(I){console.warn("Warning: An unhandled error was caught from submitForm()",I)})}),Bn={resetForm:Ne,validateForm:Y,validateField:R,setErrors:L,setFieldError:M,setFieldTouched:J,setFieldValue:A,setStatus:He,setSubmitting:Et,setTouched:B,setValues:N,setFormikState:Te,submitForm:ve},Un=nt(function(){return x(y.values,Bn)}),Yd=nt(function(v){v&&v.preventDefault&&dt(v.preventDefault)&&v.preventDefault(),v&&v.stopPropagation&&dt(v.stopPropagation)&&v.stopPropagation(),Ne()}),Gd=j.useCallback(function(v){return{value:rt(y.values,v),error:rt(y.errors,v),touched:!!rt(y.touched,v),initialValue:rt(b.current,v),initialTouched:!!rt(w.current,v),initialError:rt(C.current,v)}},[y.errors,y.touched,y.values]),Qd=j.useCallback(function(v){return{setValue:function(z,V){return A(v,z,V)},setTouched:function(z,V){return J(v,z,V)},setError:function(z){return M(v,z)}}},[A,J,M]),Kd=j.useCallback(function(v){var I=pi(v),z=I?v.name:v,V=rt(y.values,z),W={name:z,value:V,onChange:H,onBlur:je};if(I){var Q=v.type,ye=v.value,Tt=v.as,bi=v.multiple;Q==="checkbox"?ye===void 0?W.checked=!!V:(W.checked=!!(Array.isArray(V)&&~V.indexOf(ye)),W.value=ye):Q==="radio"?(W.checked=V===ye,W.value=ye):Tt==="select"&&bi&&(W.value=W.value||[],W.multiple=!0)}return W},[je,H,y.values]),yi=j.useMemo(function(){return!gn(b.current,y.values)},[b.current,y.values]),Xd=j.useMemo(function(){return typeof o<"u"?yi?y.errors&&Object.keys(y.errors).length===0:o!==!1&&dt(o)?o(f):o:y.errors&&Object.keys(y.errors).length===0},[o,yi,y.errors,f]),Jd=ke({},y,{initialValues:b.current,initialErrors:C.current,initialTouched:w.current,initialStatus:_.current,handleBlur:je,handleChange:H,handleReset:Yd,handleSubmit:yt,resetForm:Ne,setErrors:L,setFormikState:Te,setFieldTouched:J,setFieldValue:A,setFieldError:M,setStatus:He,setSubmitting:Et,setTouched:B,setValues:N,submitForm:ve,validateForm:Y,validateField:R,isValid:Xd,dirty:yi,unregisterField:T,registerField:$,getFieldProps:Kd,getFieldMeta:Gd,getFieldHelpers:Qd,validateOnBlur:l,validateOnChange:n,validateOnMount:a});return Jd}function Ex(e){var t={};if(e.inner){if(e.inner.length===0)return Sn(t,e.path,e.message);for(var l=e.inner,n=Array.isArray(l),r=0,l=n?l:l[Symbol.iterator]();;){var i;if(n){if(r>=l.length)break;i=l[r++]}else{if(r=l.next(),r.done)break;i=r.value}var a=i;rt(t,a.path)||(t=Sn(t,a.path,a.message))}}return t}function Tx(e,t,n,r){n===void 0&&(n=!1),r===void 0&&(r={});var l=lo(e);return t[n?"validateSync":"validate"](l,{abortEarly:!1,context:r})}function lo(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(l){return Array.isArray(l)===!0||Gc(l)?lo(l):l!==""?l:void 0}):Gc(e[r])?t[r]=lo(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function _x(e,t,n){var r=e.slice();return t.forEach(function(i,a){if(typeof r[a]>"u"){var o=n.clone!==!1,u=o&&n.isMergeableObject(i);r[a]=u?Ja(Array.isArray(i)?[]:{},i,n):i}else n.isMergeableObject(i)?r[a]=Ja(e[a],i,n):e.indexOf(i)===-1&&r.push(i)}),r}function Ax(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Lx(e,t,n){if(typeof e=="boolean")return!!t;var r=[],l=!1,i=-1;if(Array.isArray(e))r=e,i=e.indexOf(n),l=i>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!l?r.concat(n):l?r.slice(0,i).concat(r.slice(i+1)):r}var Px=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?j.useLayoutEffect:j.useEffect;function nt(e){var t=j.useRef(e);return Px(function(){t.current=e}),j.useCallback(function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t.current.apply(void 0,r)},[])}var $x=j.forwardRef(function(e,t){var n=e.action,r=Fd(e,["action"]),l=n??"#",i=kx(),a=i.handleReset,o=i.handleSubmit;return j.createElement("form",Object.assign({onSubmit:o,ref:t,onReset:a,action:l},r))});$x.displayName="Form";function Rn(e){this._maxSize=e,this.clear()}Rn.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Rn.prototype.get=function(e){return this._values[e]};Rn.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var Ox=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Id=/^\d+$/,Fx=/^\d/,Dx=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Ix=/^\s*(['"]?)(.*?)(\1)\s*$/,yu=512,b2=new Rn(yu),w2=new Rn(yu),C2=new Rn(yu),Mn={Cache:Rn,split:so,normalizePath:Ji,setter:function(e){var t=Ji(e);return w2.get(e)||w2.set(e,function(r,l){for(var i=0,a=t.length,o=r;i<a-1;){var u=t[i];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;o=o[t[i++]]}o[t[i]]=l})},getter:function(e,t){var n=Ji(e);return C2.get(e)||C2.set(e,function(l){for(var i=0,a=n.length;i<a;)if(l!=null||!t)l=l[n[i++]];else return;return l})},join:function(e){return e.reduce(function(t,n){return t+(bu(n)||Id.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){zx(Array.isArray(e)?e:so(e),t,n)}};function Ji(e){return b2.get(e)||b2.set(e,so(e).map(function(t){return t.replace(Ix,"$2")}))}function so(e){return e.match(Ox)||[""]}function zx(e,t,n){var r=e.length,l,i,a,o;for(i=0;i<r;i++)l=e[i],l&&(Bx(l)&&(l='"'+l+'"'),o=bu(l),a=!o&&/^\d+$/.test(l),t.call(n,l,o,a,i,e))}function bu(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function Rx(e){return e.match(Fx)&&!e.match(Id)}function Vx(e){return Dx.test(e)}function Bx(e){return!bu(e)&&(Rx(e)||Vx(e))}const Ux=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,xi=e=>e.match(Ux)||[],gi=e=>e[0].toUpperCase()+e.slice(1),wu=(e,t)=>xi(e).join(t).toLowerCase(),zd=e=>xi(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),Zx=e=>gi(zd(e)),Hx=e=>wu(e,"_"),Wx=e=>wu(e,"-"),qx=e=>gi(wu(e," ")),Yx=e=>xi(e).map(gi).join(" ");var ea={words:xi,upperFirst:gi,camelCase:zd,pascalCase:Zx,snakeCase:Hx,kebabCase:Wx,sentenceCase:qx,titleCase:Yx},Cu={exports:{}};Cu.exports=function(e){return Rd(Gx(e),e)};Cu.exports.array=Rd;function Rd(e,t){var n=e.length,r=new Array(n),l={},i=n,a=Qx(t),o=Kx(e);for(t.forEach(function(c){if(!o.has(c[0])||!o.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)l[i]||u(e[i],i,new Set);return r;function u(c,x,h){if(h.has(c)){var f;try{f=", node was:"+JSON.stringify(c)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!o.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!l[x]){l[x]=!0;var b=a.get(c)||new Set;if(b=Array.from(b),x=b.length){h.add(c);do{var C=b[--x];u(C,o.get(C),h)}while(x);h.delete(c)}r[--n]=c}}}function Gx(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var l=e[n];t.add(l[0]),t.add(l[1])}return Array.from(t)}function Qx(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var l=e[n];t.has(l[0])||t.set(l[0],new Set),t.has(l[1])||t.set(l[1],new Set),t.get(l[0]).add(l[1])}return t}function Kx(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var Xx=Cu.exports;const Jx=Os(Xx),e5=Object.prototype.toString,t5=Error.prototype.toString,n5=RegExp.prototype.toString,r5=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",l5=/^Symbol\((.*)\)(.*)$/;function s5(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function N2(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return s5(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return r5.call(e).replace(l5,"Symbol($1)");const r=e5.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+t5.call(e)+"]":r==="RegExp"?n5.call(e):null}function dr(e,t){let n=N2(e,t);return n!==null?n:JSON.stringify(e,function(r,l){let i=N2(this[r],t);return i!==null?i:l},2)}function Vd(e){return e==null?[]:[].concat(e)}let i5=/\$\{\s*(\w+)\s*\}/g;class qe extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(i5,(l,i)=>dr(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,l){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=l,this.errors=[],this.inner=[],Vd(t).forEach(i=>{qe.isError(i)?(this.errors.push(...i.errors),this.inner=this.inner.concat(i.inner.length?i.inner:i)):this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,qe)}}let At={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const l=r!=null&&r!==n?` (cast from the value \`${dr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${dr(n,!0)}\``+l:`${e} must match the configured type. The validated value was: \`${dr(n,!0)}\``+l}},mt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},a5={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},io={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},o5={isValue:"${path} field must be ${value}"},ao={noUnknown:"${path} field has unspecified keys: ${unknown}"},u5={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:At,string:mt,number:a5,date:io,object:ao,array:u5,boolean:o5});const Nu=e=>e&&e.__isYupSchema__;class Ps{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:l,otherwise:i}=n,a=typeof r=="function"?r:(...o)=>o.every(u=>u===r);return new Ps(t,(o,u)=>{var c;let x=a(...o)?l:i;return(c=x==null?void 0:x(u))!=null?c:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),l=this.fn(r,t,n);if(l===void 0||l===t)return t;if(!Nu(l))throw new TypeError("conditions must return a schema object");return l.resolve(n)}}const Wl={context:"$",value:"."};class Vn{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Wl.context,this.isValue=this.key[0]===Wl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Wl.context:this.isValue?Wl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Mn.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let l=this.isContext?r:this.isValue?t:n;return this.getter&&(l=this.getter(l||{})),this.map&&(l=this.map(l)),l}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Vn.prototype.__isYupRef=!0;const Cn=e=>e==null;function Hn(e){function t({value:n,path:r="",options:l,originalValue:i,schema:a},o,u){const{name:c,test:x,params:h,message:f,skipAbsent:b}=e;let{parent:C,context:w,abortEarly:_=a.spec.abortEarly}=l;function p(E){return Vn.isRef(E)?E.getValue(n,C,w):E}function m(E={}){const Y=Object.assign({value:n,originalValue:i,label:a.spec.label,path:E.path||r,spec:a.spec},h,E.params);for(const R of Object.keys(Y))Y[R]=p(Y[R]);const Ne=new qe(qe.formatError(E.message||f,Y),n,Y.path,E.type||c);return Ne.params=Y,Ne}const g=_?o:u;let y={path:r,parent:C,type:c,from:l.from,createError:m,resolve:p,options:l,originalValue:i,schema:a};const k=E=>{qe.isError(E)?g(E):E?u(null):g(m())},P=E=>{qe.isError(E)?g(E):o(E)},O=b&&Cn(n);if(!l.sync){try{Promise.resolve(O?!0:x.call(y,n,y)).then(k,P)}catch(E){P(E)}return}let D;try{var U;if(D=O?!0:x.call(y,n,y),typeof((U=D)==null?void 0:U.then)=="function")throw new Error(`Validation test of type: "${y.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(E){P(E);return}k(D)}return t.OPTIONS=e,t}function c5(e,t,n,r=n){let l,i,a;return t?(Mn.forEach(t,(o,u,c)=>{let x=u?o.slice(1,o.length-1):o;e=e.resolve({context:r,parent:l,value:n});let h=e.type==="tuple",f=c?parseInt(x,10):0;if(e.innerType||h){if(h&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);l=n,n=n&&n[f],e=h?e.spec.types[f]:e.innerType}if(!c){if(!e.fields||!e.fields[x])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);l=n,n=n&&n[x],e=e.fields[x]}i=x,a=u?"["+o+"]":"."+o}),{schema:e,parent:l,parentPath:i}):{parent:l,parentPath:t,schema:e}}class $s extends Set{describe(){const t=[];for(const n of this.values())t.push(Vn.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new $s(this.values())}merge(t,n){const r=this.clone();return t.forEach(l=>r.add(l)),n.forEach(l=>r.delete(l)),r}}function lr(e,t=new Map){if(Nu(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=lr(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,l]of e.entries())n.set(r,lr(l,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(lr(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,l]of Object.entries(e))n[r]=lr(l,t)}else throw Error(`Unable to clone ${e}`);return n}class St{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new $s,this._blacklist=new $s,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(At.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=lr(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const l=Object.assign({},n.spec,r.spec);return r.spec=l,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(a=>{i.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((l,i)=>i.resolve(l,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,l;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(l=t.recursive)!=null?l:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),l=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(l&&Cn(i))return i;let a=dr(t),o=dr(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(o!==a?`result of cast: ${o}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((l,i)=>i.call(this,l,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,l){let{path:i,originalValue:a=t,strict:o=this.spec.strict}=n,u=t;o||(u=this._cast(u,Object.assign({assert:!1},n)));let c=[];for(let x of Object.values(this.internalTests))x&&c.push(x);this.runTests({path:i,value:u,originalValue:a,options:n,tests:c},r,x=>{if(x.length)return l(x,u);this.runTests({path:i,value:u,originalValue:a,options:n,tests:this.tests},r,l)})}runTests(t,n,r){let l=!1,{tests:i,value:a,originalValue:o,path:u,options:c}=t,x=w=>{l||(l=!0,n(w,a))},h=w=>{l||(l=!0,r(w,a))},f=i.length,b=[];if(!f)return h([]);let C={value:a,originalValue:o,path:u,options:c,schema:this};for(let w=0;w<i.length;w++){const _=i[w];_(C,x,function(m){m&&(b=b.concat(m)),--f<=0&&h(b)})}}asNestedTest({key:t,index:n,parent:r,parentPath:l,originalParent:i,options:a}){const o=t??n;if(o==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof o=="number";let c=r[o];const x=Object.assign({},a,{strict:!0,parent:r,value:c,originalValue:i[o],key:void 0,[u?"index":"key"]:o,path:u||o.includes(".")?`${l||""}[${c?o:`"${o}"`}]`:(l?`${l}.`:"")+t});return(h,f,b)=>this.resolve(x)._validate(c,x,f,b)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((l,i)=>r._validate(t,n,(a,o)=>{qe.isError(a)&&(a.value=o),i(a)},(a,o)=>{a.length?i(new qe(a,o)):l(o)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),l;return r._validate(t,Object.assign({},n,{sync:!0}),(i,a)=>{throw qe.isError(i)&&(i.value=a),i},(i,a)=>{if(i.length)throw new qe(i,t);l=a}),l}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(qe.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(qe.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this):lr(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Hn({message:n,name:"nullable",test(l){return l===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Hn({message:n,name:"optionality",test(l){return l===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=At.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=At.notNull){return this.nullability(!1,t)}required(t=At.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=At.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),l=Hn(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(i||a.OPTIONS.test===l.OPTIONS.test))),r.tests.push(l),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),l=Vd(t).map(i=>new Vn(i));return l.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new Ps(l,n):Ps.fromOptions(l,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Hn({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=At.oneOf){let r=this.clone();return t.forEach(l=>{r._whitelist.add(l),r._blacklist.delete(l)}),r.internalTests.whiteList=Hn({message:n,name:"oneOf",skipAbsent:!0,test(l){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(l)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),r}notOneOf(t,n=At.notOneOf){let r=this.clone();return t.forEach(l=>{r._blacklist.add(l),r._whitelist.delete(l)}),r.internalTests.blacklist=Hn({message:n,name:"notOneOf",test(l){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(l)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:l,optional:i,nullable:a}=n.spec;return{meta:l,label:r,optional:i,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,c,x)=>x.findIndex(h=>h.name===u.name)===c)}}}St.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])St.prototype[`${e}At`]=function(t,n,r={}){const{parent:l,parentPath:i,schema:a}=c5(this,t,n,r.context);return a[e](l&&l[i],Object.assign({},r,{parent:l,path:t}))};for(const e of["equals","is"])St.prototype[e]=St.prototype.oneOf;for(const e of["not","nope"])St.prototype[e]=St.prototype.notOneOf;let d5=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,m5=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,f5=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,p5=e=>Cn(e)||e===e.trim(),h5={}.toString();function Bd(){return new Ud}class Ud extends St{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const l=t!=null&&t.toString?t.toString():t;return l===h5?t:l})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||At.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=mt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=mt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=mt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,l,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:l,name:i}=n:l=n),this.test({name:i||"matches",message:l||mt.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=mt.email){return this.matches(d5,{name:"email",message:t,excludeEmptyString:!0})}url(t=mt.url){return this.matches(m5,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=mt.uuid){return this.matches(f5,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=mt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:p5})}lowercase(t=mt.lowercase){return this.transform(n=>Cn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Cn(n)||n===n.toLowerCase()})}uppercase(t=mt.uppercase){return this.transform(n=>Cn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Cn(n)||n===n.toUpperCase()})}}Bd.prototype=Ud.prototype;var x5=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function g5(e){var t=[1,4,5,6,7,10,11],n=0,r,l;if(l=x5.exec(e)){for(var i=0,a;a=t[i];++i)l[a]=+l[a]||0;l[2]=(+l[2]||1)-1,l[3]=+l[3]||1,l[7]=l[7]?String(l[7]).substr(0,3):0,(l[8]===void 0||l[8]==="")&&(l[9]===void 0||l[9]==="")?r=+new Date(l[1],l[2],l[3],l[4],l[5],l[6],l[7]):(l[8]!=="Z"&&l[9]!==void 0&&(n=l[10]*60+l[11],l[9]==="+"&&(n=0-n)),r=Date.UTC(l[1],l[2],l[3],l[4],l[5]+n,l[6],l[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let v5=new Date(""),y5=e=>Object.prototype.toString.call(e)==="[object Date]";class vi extends St{constructor(){super({type:"date",check(t){return y5(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=g5(t),isNaN(t)?vi.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Vn.isRef(t))r=t;else{let l=this.cast(t);if(!this._typeCheck(l))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=l}return r}min(t,n=io.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(l){return l>=this.resolve(r)}})}max(t,n=io.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(l){return l<=this.resolve(r)}})}}vi.INVALID_DATE=v5;vi.prototype;function b5(e,t=[]){let n=[],r=new Set,l=new Set(t.map(([a,o])=>`${a}-${o}`));function i(a,o){let u=Mn.split(a)[0];r.add(u),l.has(`${o}-${u}`)||n.push([o,u])}for(const a of Object.keys(e)){let o=e[a];r.add(a),Vn.isRef(o)&&o.isSibling?i(o.path,a):Nu(o)&&"deps"in o&&o.deps.forEach(u=>i(u,a))}return Jx.array(Array.from(r),n).reverse()}function j2(e,t){let n=1/0;return e.some((r,l)=>{var i;if((i=t.path)!=null&&i.includes(r))return n=l,!0}),n}function Zd(e){return(t,n)=>j2(e,t)-j2(e,n)}const w5=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function is(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=is(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=is(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(is)}):"optional"in e?e.optional():e}const C5=(e,t)=>{const n=[...Mn.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),l=Mn.getter(Mn.join(n),!0)(e);return!!(l&&r in l)};let k2=e=>Object.prototype.toString.call(e)==="[object Object]";function N5(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const j5=Zd([]);function Hd(e){return new Wd(e)}class Wd extends St{constructor(t){super({type:"object",check(n){return k2(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=j5,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let l=super._cast(t,n);if(l===void 0)return this.getDefault(n);if(!this._typeCheck(l))return l;let i=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,o=[].concat(this._nodes,Object.keys(l).filter(h=>!this._nodes.includes(h))),u={},c=Object.assign({},n,{parent:u,__validating:n.__validating||!1}),x=!1;for(const h of o){let f=i[h],b=h in l;if(f){let C,w=l[h];c.path=(n.path?`${n.path}.`:"")+h,f=f.resolve({value:w,context:n.context,parent:u});let _=f instanceof St?f.spec:void 0,p=_==null?void 0:_.strict;if(_!=null&&_.strip){x=x||h in l;continue}C=!n.__validating||!p?f.cast(l[h],c):l[h],C!==void 0&&(u[h]=C)}else b&&!a&&(u[h]=l[h]);(b!==h in u||u[h]!==l[h])&&(x=!0)}return x?u:l}_validate(t,n={},r,l){let{from:i=[],originalValue:a=t,recursive:o=this.spec.recursive}=n;n.from=[{schema:this,value:a},...i],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(u,c)=>{if(!o||!k2(c)){l(u,c);return}a=a||c;let x=[];for(let h of this._nodes){let f=this.fields[h];!f||Vn.isRef(f)||x.push(f.asNestedTest({options:n,key:h,parent:c,parentPath:n.path,originalParent:a}))}this.runTests({tests:x,value:c,originalValue:a,options:n},r,h=>{l(h.sort(this._sortErrors).concat(u),c)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[l,i]of Object.entries(this.fields)){const a=r[l];r[l]=a===void 0?i:a}return n.withMutation(l=>l.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var l;const i=this.fields[r];let a=t;(l=a)!=null&&l.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(a):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=b5(t,n),r._sortErrors=Zd(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let l=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),l=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),l)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return is(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let l=Mn.getter(t,!0);return this.transform(i=>{if(!i)return i;let a=i;return C5(i,t)&&(a=Object.assign({},i),r||delete a[t],a[n]=l(i)),a})}json(){return this.transform(w5)}noUnknown(t=!0,n=ao.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(l){if(l==null)return!0;const i=N5(this.schema,l);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=ao.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const l of Object.keys(n))r[t(l)]=n[l];return r})}camelCase(){return this.transformKeys(ea.camelCase)}snakeCase(){return this.transformKeys(ea.snakeCase)}constantCase(){return this.transformKeys(t=>ea.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[l,i]of Object.entries(this.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[l]})),n.fields[l]=i.describe(a)}return n}}Hd.prototype=Wd.prototype;function k5(){let e=Hd({mobileNo:Bd().required("Enter khat no.")});const t=Mx({initialValues:{mobileNo:""},onSubmit:(l,i)=>{},validationSchema:e}),n=(l,i,a=null)=>l.length>a?i:l===""||/^[0-9\b]+$/.test(l)?l:i,r=l=>{let i=l.target.name,a=l.target.value;i=="mobileNo"&&t.setFieldValue("mobileNo",n(a,t.values.mobileNo,10))};return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`export const returnCapitalize = (currentValue) => {
    let capitalizeValue = currentValue.toUpperCase()
    return capitalizeValue
}
export const allowFloatInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^d*.?d*$/;  //number + one dot
    if (currentValue === '' || re.test(currentValue)) //test for float input only one dot allowed
        return currentValue
    else
        return oldValue
}
export const allowNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b]+$/;     //number
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}
export const allowNumberCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b,]+$/;     //number + comma
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}
export const allowCharacterCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b,]+$/;     //number + comma
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}

export const allowCharacterSpecialInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[a-zA-Z0-9! ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowNumberCharacterInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[a-zA-Z0-9! ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[a-zA-Zs]*$/;  //character + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterSpaceCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[a-zA-Z,! ]*$/; //character + space + comma
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[a-zA-Z0-9!]*$/;    //character + number 
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowMailInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[a-zA-Z0-9@.!]*$/;    //character + number 
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberSpaceInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[a-zA-Z0-9! ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberSpaceCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[a-zA-Z0-9!, ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const nullToNA = (value) => {
    if (value === undefined || value === null || typeof value === "undefined" || value === "") {
        return "NA";
    } else if (value === true) {
        return 'Yes';
    } else if (value === false) {
        return 'No'
    } else {
        return value
    }

}
export const nullToZero = (value) => {

    if (value === undefined || value === null || typeof value === "undefined" || value === "") {
        return "0";
    } else {
        return parseFloat(value).toLocaleString("en-IN")
    }

}`}),s.jsx("form",{onSubmit:t.handleSubmit,onChange:r,children:s.jsxs("div",{className:"form-group w-60 mb-6 md:px-4",children:[s.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Mobile No.",s.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s.jsx("input",{...t.getFieldProps("mobileNo"),type:"text",className:"cypress_mobileNo form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md ",placeholder:"Enter mobile no."}),s.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.mobileNo&&t.errors.mobileNo?t.errors.mobileNo:null})]})}),s.jsx(ge,{code:`// Source - Me
            import { useFormik } from 'formik'
import * as yup from 'yup'

let validationSchema = yup.object({
                mobileNo: yup.string().required('Enter khat no.'),
            })
        
            const formik = useFormik({
                initialValues: {
                    mobileNo: '',
                },
                onSubmit: (values, resetForm) => {
                }
                , validationSchema
            })
         const handleChange = (e) => {
                let name = e.target.name
                let value = e.target.value
        
                { name == 'mobileNo' && formik.setFieldValue("mobileNo", allowNumberInput(value, formik.values.mobileNo, 10)) }
            }
            
            
            <form onSubmit={formik.handleSubmit} onChange={handleChange}>
                <div className="form-group w-60 mb-6 md:px-4">
                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Mobile No.<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
                    <input   {...formik.getFieldProps('mobileNo')} type="text" className={'cypress_mobileNo form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md '}
                        placeholder="Enter mobile no." />
                    <span className="text-red-600 absolute text-xs">{formik.touched.mobileNo && formik.errors.mobileNo ? formik.errors.mobileNo : null}</span>
                </div>
            </form>`}),s.jsx("div",{className:"text-xl font-semibold mt-10",children:"# Powerups"})]})}function S5(){return s.jsx("aside",{className:"w-64 bg-gray-200 h-screen",children:s.jsx("nav",{className:"p-10",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("span",{children:"Home"})}),s.jsx("li",{children:s.jsx("span",{children:"About"})}),s.jsx("li",{children:s.jsx("span",{children:"Details"})}),s.jsx("li",{children:s.jsx("span",{children:"Settings"})})]})})})}function M5(){return s.jsx("header",{className:"bg-gray-200 p-4",children:s.jsx("h1",{className:"text-2xl font-bold text-right",children:"Header"})})}function E5(){return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`import {BrowserRouter, Route, Routes } from 'react-router-dom'
      
      <BrowserRouter>
        <div className="flex">
        <BareSidebar />
        <div className="flex flex-col w-full">
          <BareHeader />
          <main className="p-20">
            <Routes>
              <Route exact path="/" element={<h1>Dummy direct</h1>} />
              <Route path="/about" element={<h1>Dummy about</h1>} />
              <Route path="/contact" element={<h1>Dummy contact</h1>} />
            </Routes>

          </main>
        </div>
      </div>
      </BrowserRouter>`}),s.jsxs("div",{className:"flex",children:[s.jsx(S5,{}),s.jsxs("div",{className:"flex flex-col w-full",children:[s.jsx(M5,{}),s.jsx("main",{className:"p-20",children:s.jsxs(ld,{children:[s.jsx(ee,{exact:!0,path:"/",element:s.jsx("h1",{children:"Dummy direct"})}),s.jsx(ee,{path:"/about",element:s.jsx("h1",{children:"Dummy about"})}),s.jsx(ee,{path:"/contact",element:s.jsx("h1",{children:"Dummy contact"})})]})})]})]})]})}function T5(){return s.jsx("div",{children:"Demo"})}function _5(e){return mn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(e)}function ta(e){const t=nd(),n=su(),r=l=>{if(e==null||e.setshowSidebar(),n.pathname===e.path){window.location.reload();return}t(e.path)};return s.jsx(s.Fragment,{children:e.subMenuStatus?s.jsx("li",{className:"cursor-pointer",style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},children:e.title}):s.jsx("div",{className:"cursor-pointer",onClick:()=>r(e==null?void 0:e.menuId),children:s.jsx("li",{style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},href:e.path,children:e.title})})})}function A5(e){return mn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"}}]}]})(e)}function L5(e){return mn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"}}]}]})(e)}function S2(e){return mn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 5v11h16V5H4zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2V4.007zM1 19h22v2H1v-2z"}}]}]})(e)}function P5(e){const[t,n]=j.useState("h-0"),r=()=>{t=="h-0"?n("h-auto"):n("h-0")};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"block",children:[e.path!=null&&s.jsxs("li",{className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-indigo-500",style:{width:"250px"},children:[s.jsx("div",{className:"flex-none ",children:s.jsx(S2,{})}),s.jsx("div",{className:"flex-initial w-40",children:s.jsx(ta,{setshowSidebar:e==null?void 0:e.setshowSidebar,subMenuStatus:e.subMenuStatus,path:e.path,title:e.title})})]}),e.path==null&&s.jsxs("li",{onClick:r,className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-indigo-500",style:{width:"250px"},children:[s.jsx("div",{className:"flex-none ",children:s.jsx(S2,{})}),s.jsx("div",{className:"flex-initial w-40",children:s.jsx(ta,{subMenuStatus:e==null?void 0:e.subMenuStatus,path:e.path,title:e.title})}),(e==null?void 0:e.subMenuStatus)&&s.jsxs("div",{className:"flex-none ",children:[t=="h-0"&&s.jsx(W3,{size:18}),t=="h-auto"&&s.jsx(_5,{size:18})]})]}),e.path==null&&s.jsx("div",{className:`transition-all duration-1000 ${t} overflow-hidden bg-gray-200`,children:e==null?void 0:e.subMenu.map(l=>s.jsx("div",{className:"flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer",style:{width:"250px"},children:s.jsx("div",{className:"flex-initial w-40",children:s.jsx(ta,{setshowSidebar:e==null?void 0:e.setshowSidebar,path:l.path,title:l.menuName,menuId:l==null?void 0:l.id})})}))})]})})}function $5(e){return mn({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#CFD8DC",points:"35,36 39,36 39,22 26,22 26,13 22,13 22,22 9,22 9,36 13,36 13,26 22,26 22,36 26,36 26,26 35,26"}},{tag:"rect",attr:{x:"17",y:"6",fill:"#3F51B5",width:"14",height:"10"}},{tag:"rect",attr:{x:"32",y:"32",fill:"#00BCD4",width:"10",height:"10"}},{tag:"rect",attr:{x:"6",y:"32",fill:"#00BCD4",width:"10",height:"10"}},{tag:"rect",attr:{x:"19",y:"32",fill:"#00BCD4",width:"10",height:"10"}}]})(e)}function O5(){return s.jsxs(s.Fragment,{children:[s.jsx("div",{children:"AxiosInterceptors"}),s.jsx(ge,{code:`import axios from 'axios';

// Create an instance of Axios
const AxiosInterceptors = axios.create();
// Add a response interceptor
AxiosInterceptors.interceptors.response.use(
    (response) => {
        // window.location.href='/property/'
        console.log('data from axios interceptors....', response?.data?.authenticated)
        if (response?.data?.authenticated === false) {
            console.log('not authenticated')
        }
        // Check if the response condition is met
        if (response.status === 200 && response.data.success) {
            // Modify the response data
            response.data.message = 'Response modified!';
        }

        return response;
    },
    (error) => {
        // Handle error cases
        return Promise.reject(error);
    }
);

export default AxiosInterceptors

`})]})}function F5(){return s.jsxs(s.Fragment,{children:[s.jsx("div",{children:"PowerupFunctions"}),s.jsx(ge,{code:`export const returnCapitalize = (currentValue) => {
    let capitalizeValue = currentValue.toUpperCase()
    return capitalizeValue
}
export const allowFloatInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^d*.?d*$/;  //number + one dot
    if (currentValue === '' || re.test(currentValue)) //test for float input only one dot allowed
        return currentValue
    else
        return oldValue
}
export const allowNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b]+$/;     //number
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}
export const allowNumberCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b,]+$/;     //number + comma
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}
export const allowCharacterCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b,]+$/;     //number + comma
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}

export const allowCharacterSpecialInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[a-zA-Z0-9! ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowNumberCharacterInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[a-zA-Z0-9! ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[a-zA-Zs]*$/;  //character + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterSpaceCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[a-zA-Z,! ]*$/; //character + space + comma
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[a-zA-Z0-9!]*$/;    //character + number 
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowMailInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[a-zA-Z0-9@.!]*$/;    //character + number 
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberSpaceInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[a-zA-Z0-9! ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberSpaceCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[a-zA-Z0-9!, ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}

export const nullToNA = (value) => {
    // null
    // undefined
    // not defined

    if (value === undefined || value === null || typeof value === "undefined" || value === "") {
        return "NA";
    } else if (value === true) {
        return 'Yes';
    } else if (value === false) {
        return 'No'
    } else {
        return value
    }

}
export const nullToZero = (value) => {

    if (value === undefined || value === null || typeof value === "undefined" || value === "") {
        return "0";
    } else {
        return parseFloat(value).toLocaleString("en-IN")
    }

}

`})]})}function D5(){const e=[{icon:_3,techName:"React",version:1}];return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Technologies"}),s.jsxs("table",{class:"min-w-full leading-normal",children:[s.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:s.jsxs("tr",{className:"text-lg",children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Tech"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Version"})]})}),s.jsx("tbody",{children:e==null?void 0:e.map((t,n)=>s.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[s.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s.jsx("img",{className:"inline",src:t==null?void 0:t.icon,alt:""}),s.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:t==null?void 0:t.techName})]}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.version})]}))})]})]})}function ju(e){return mn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(e)}function ku(e){return s.jsx(s.Fragment,{children:s.jsx("div",{className:"bg-gray-800 shadow-xl text-white absolute top-10 right-10 px-2 rounded-lg",children:e==null?void 0:e.url})})}function I5(){const[e,t]=j.useState(null),n=[{icon:null,techName:"Flaticons",use:"Collection of png icons",version:1,url:"https://www.flaticon.com/"},{icon:null,techName:"Lotte Animations",use:"Pre made animations",version:1,url:"https://lottiefiles.com/"}],r=l=>{window.open(l,"_blank")};return s.jsxs(s.Fragment,{children:[s.jsx(ku,{url:e}),s.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Resources"}),s.jsxs("table",{class:"min-w-full leading-normal",children:[s.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:s.jsxs("tr",{className:"text-lg",children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Resource"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Url"})]})}),s.jsx("tbody",{children:n==null?void 0:n.map((l,i)=>s.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[s.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s.jsx("img",{className:"inline",src:l==null?void 0:l.icon,alt:""}),s.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:l==null?void 0:l.techName})]}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l==null?void 0:l.use}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.jsx(ju,{onMouseEnter:()=>t(l==null?void 0:l.url),onMouseLeave:()=>t(null),onClick:()=>r(l==null?void 0:l.url),className:"inline cursor-pointer text-2xl hover:scale-105 font-semibold"})})]}))})]})]})}function z5(){const[e,t]=j.useState(null),n=[{icon:null,techName:"React Router Dom",use:"To handle page routing",version:1,url:"https://reactrouter.com/en/main"},{icon:null,techName:"Formik",use:"This library is use to handle forms in a very smart way",version:1,url:"https://formik.org/"},{icon:null,techName:"Axios",use:"This library is use to handle API calls",version:1,url:"https://axios-http.com/docs/intro"},{icon:null,techName:"React-Icons",use:"Icon library, Easy to use",version:1,url:"https://react-icons.github.io/react-icons/"},{icon:null,techName:"React-Modal",use:"Popup libary",version:1,url:"https://github.com/reactjs/react-modal"},{icon:null,techName:"React-Toastify",use:"Toast libary",version:1,url:"https://www.npmjs.com/package/react-toastify"},{icon:null,techName:"Yup",use:"Libary for validation schema, best works with formik",version:1,url:"https://www.npmjs.com/package/yup"}],r=l=>{window.open(l,"_blank")};return s.jsxs(s.Fragment,{children:[s.jsx(ku,{url:e}),s.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Libraries"}),s.jsxs("table",{class:"min-w-full leading-normal",children:[s.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:s.jsxs("tr",{className:"text-lg",children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Doc Url"})]})}),s.jsx("tbody",{children:n==null?void 0:n.map((l,i)=>s.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[s.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s.jsx("img",{className:"inline",src:l==null?void 0:l.icon,alt:""}),s.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:l==null?void 0:l.techName})]}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l==null?void 0:l.use}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.jsx(ju,{onMouseEnter:()=>t(l==null?void 0:l.url),onMouseLeave:()=>t(null),onClick:()=>r(l==null?void 0:l.url),className:"inline cursor-pointer text-2xl hover:scale-105 font-semibold"})})]}))})]})]})}function R5(){const[e,t]=j.useState(null),n=[{icon:null,techName:"Login Authentication",use:"This library is use to handle forms in a very smart way"},{icon:null,techName:"Protected Routes",use:"This library is use to handle API calls"},{icon:null,techName:"404 Page",use:"This library is use to handle API calls"},{icon:null,techName:"Secure Localstorage",use:"This library is use to handle API calls"},{icon:null,techName:"Url Encryption",use:"This library is use to handle API calls"}];return s.jsxs(s.Fragment,{children:[s.jsx(ku,{url:e}),s.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Essentials"}),s.jsxs("table",{class:"min-w-full leading-normal",children:[s.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:s.jsxs("tr",{className:"text-lg",children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"})]})}),s.jsx("tbody",{children:n==null?void 0:n.map((r,l)=>s.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[s.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s.jsx("img",{className:"inline",src:r==null?void 0:r.icon,alt:""}),s.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:r==null?void 0:r.techName})]}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.use})]}))})]})]})}const M2=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],V5=[{title:"Bengaluru office",timings:"Mon-Sat 9am to 5pm.",address:"100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN"},{title:"Head office",timings:"Mon-Sat 9am to 5pm.",address:"12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN"},{title:"Karnataka office",timings:"Mon-Sat 9am to 5pm.",address:"42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN"}],B5=[{name:"Gabrielle Fernandez",image:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",position:"Marketing Lead"},{name:"Victória Silva",image:"https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",position:"Back-end developer"},{name:"Gabrielle Fernandez",image:"https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Sales"},{name:"Sadie Lewis",image:"https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Sales"},{name:"Thilde Olaisen",image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600",position:"Marketing Lead"},{name:"Deepika Ramesh",image:"https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg",position:"Front-end developer"},{name:"Jordi Santiago",image:"https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",position:"Front-end developer"},{name:"Kerim Fahri",image:"https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Back-end developer"}];function U5(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`//Source - Dev UI
     'use client'

     import React from 'react'
     import { Menu, X, MapPin } from 'lucide-react'
     import CodeView from '../Components/Common/CodeView'
     
     const menuItems = [
         {
             name: 'Home',
             href: '#',
         },
         {
             name: 'About',
             href: '#',
         },
         {
             name: 'Contact',
             href: '#',
         },
     ]
     
     const locations = [
         {
             title: 'Bengaluru office',
             timings: 'Mon-Sat 9am to 5pm.',
             address: '100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN',
         },
         {
             title: 'Head office',
             timings: 'Mon-Sat 9am to 5pm.',
             address: '12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN',
         },
         {
             title: 'Karnataka office',
             timings: 'Mon-Sat 9am to 5pm.',
             address: '42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN',
         },
     ]
     
     const users = [
         {
             name: 'Gabrielle Fernandez',
             image:
                 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
             position: 'Marketing Lead',
         },
         {
             name: 'Victória Silva',
             image:
                 'https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg',
             position: 'Back-end developer',
         },
         {
             name: 'Gabrielle Fernandez',
             image:
                 'https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
             position: 'Sales',
         },
         {
             name: 'Sadie Lewis',
             image:
                 'https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
             position: 'Sales',
         },
         {
             name: 'Thilde Olaisen',
             image:
                 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600',
             position: 'Marketing Lead',
         },
         {
             name: 'Deepika Ramesh',
             image:
                 'https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg',
             position: 'Front-end developer',
         },
         {
             name: 'Jordi Santiago',
             image:
                 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
             position: 'Front-end developer',
         },
         {
             name: 'Kerim Fahri',
             image:
                 'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
             position: 'Back-end developer',
         },
     ]
     
     export function AboutUsPage() {
         const [isMenuOpen, setIsMenuOpen] = React.useState(false)
     
         const toggleMenu = () => {
             setIsMenuOpen(!isMenuOpen)
         }
     
         return (
     
             <>
       < div >
                     <header className="relative w-full border-b bg-white pb-4">
                         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
                             <div className="inline-flex items-center space-x-2">
                                 <span>
                                     <svg
                                         width="30"
                                         height="30"
                                         viewBox="0 0 50 56"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg"
                                     >
                                         <path
                                             d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                                             fill="black"
                                         />
                                     </svg>
                                 </span>
                                 <span className="font-bold">DevUI</span>
                             </div>
                             <div className="hidden lg:block">
                                 <ul className="inline-flex space-x-8">
                                     {menuItems.map((item) => (
                                         <li key={item.name}>
                                             <a
                                                 href={item.href}
                                                 className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                                             >
                                                 {item.name}
                                             </a>
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                             <div className="hidden lg:block">
                                 <button
                                     type="button"
                                     className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                 >
                                     Button text
                                 </button>
                             </div>
                             <div className="lg:hidden">
                                 <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                             </div>
                             {isMenuOpen && (
                                 <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                                     <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                         <div className="px-5 pb-6 pt-5">
                                             <div className="flex items-center justify-between">
                                                 <div className="inline-flex items-center space-x-2">
                                                     <span>
                                                         <svg
                                                             width="30"
                                                             height="30"
                                                             viewBox="0 0 50 56"
                                                             fill="none"
                                                             xmlns="http://www.w3.org/2000/svg"
                                                         >
                                                             <path
                                                                 d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                                                                 fill="black"
                                                             />
                                                         </svg>
                                                     </span>
                                                     <span className="font-bold">DevUI</span>
                                                 </div>
                                                 <div className="-mr-2">
                                                     <button
                                                         type="button"
                                                         onClick={toggleMenu}
                                                         className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                     >
                                                         <span className="sr-only">Close menu</span>
                                                         <X className="h-6 w-6" aria-hidden="true" />
                                                     </button>
                                                 </div>
                                             </div>
                                             <div className="mt-6">
                                                 <nav className="grid gap-y-4">
                                                     {menuItems.map((item) => (
                                                         <a
                                                             key={item.name}
                                                             href={item.href}
                                                             className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                                         >
                                                             <span className="ml-3 text-base font-medium text-gray-900">
                                                                 {item.name}
                                                             </span>
                                                         </a>
                                                     ))}
                                                 </nav>
                                             </div>
                                             <button
                                                 type="button"
                                                 className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                             >
                                                 Button text
                                             </button>
                                         </div>
                                     </div>
                                 </div>
                             )}
                         </div>
                     </header>
     
                     <div className="mx-auto max-w-7xl px-4">
                         {/* Hero Map */}
                         <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
                             <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
                                 <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
                             </div>
                             <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
                                 Made with love, right here in India
                             </p>
                             <p className="max-w-4xl text-base text-gray-600 md:text-xl">
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
                                 neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
                             </p>
                         </div>
                         <div className="w-full space-y-4">
                             <img
                                 className="h-[200px] w-full rounded-xl object-cover md:h-full"
                                 src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
                                 alt=""
                             />
                         </div>
                         {/* locations */}
                         <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
                             {locations.map((location) => (
                                 <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
                                     <MapPin className="h-5 w-5" />
                                     <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                                     <p className="w-full text-base text-gray-700">{location.timings}</p>
                                     <p className="text-sm font-medium">{location.address}</p>
                                 </div>
                             ))}
                         </div>
                         <hr className="mt-20" />
                         {/* greetings */}
                         <div className="mt-16 flex items-center">
                             <div className="space-y-6 md:w-3/4">
                                 <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
                                     <p className="text-xs font-semibold leading-normal md:text-sm">Join Us &rarr;</p>
                                 </div>
                                 <p className="text-3xl font-bold text-gray-900 md:text-4xl">Meet our team</p>
                                 <p className="max-w-4xl text-base text-gray-700 md:text-xl">
                                     Our philosophy is simple — hire a team of diverse, passionate people and foster a
                                     culture that empowers you to do your best work.
                                 </p>
                                 <div></div>
                             </div>
                         </div>
                         {/* TEAM */}
                         <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
                             {users.map((user) => (
                                 <div className="rounded-md border" key={user.name}>
                                     <img
                                         src={user.image}
                                         alt={user.name}
                                         className="h-[300px] w-full rounded-lg object-cover "
                                     />
                                     <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
                                     <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                                         {user.position}
                                     </p>
                                 </div>
                             ))}
                         </div>
                         {/* Hiring Banner */}
                         <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
                             <div className="space-y-6">
                                 <p className="text-sm font-semibold md:text-base">Join our team &rarr;</p>
                                 <p className="text-3xl font-bold md:text-4xl">We&apos;re just getting started</p>
                                 <p className="text-base text-gray-600 md:text-lg">
                                     Our philosophy is simple — hire a team of diverse, passionate people and foster a
                                     culture that empowers you to do your best work.
                                 </p>
                                 <button
                                     type="button"
                                     className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                 >
                                     Join Now
                                 </button>
                             </div>
                             <div className="md:mt-o mt-10 w-full">
                                 <img
                                     src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                                     alt="Getting Started"
                                     className="rounded-lg"
                                 />
                             </div>
                         </div>
                     </div>
                     <hr className="mt-6" />
                     {/* footer */}
                     <div className="mx-auto max-w-7xl">
                         <footer className="px-4 py-10">
                             <div className="flex flex-col md:flex-row md:items-center">
                                 <span>
                                     <svg
                                         width="40"
                                         height="46"
                                         viewBox="0 0 50 56"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg"
                                     >
                                         <path
                                             d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                                             fill="black"
                                         />
                                     </svg>
                                 </span>
                                 <div className="mt-4 grow md:ml-12 md:mt-0">
                                     <p className="text-base font-semibold text-gray-700">
                                         © 2023 DevUI Component Library
                                     </p>
                                 </div>
                             </div>
                             <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                                 <div className="mb-8 lg:mb-0">
                                     <p className="mb-6 text-lg font-semibold text-gray-700">Company</p>
                                     <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                                         <li>About us</li>
                                         <li>Company History</li>
                                         <li>Our Team</li>
                                         <li>Our Vision</li>
                                         <li>Press Release</li>
                                     </ul>
                                 </div>
                                 <div className="mb-8 lg:mb-0">
                                     <p className="mb-6 text-lg font-semibold text-gray-700">Our Stores</p>
                                     <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                                         <li>Washington</li>
                                         <li>New Hampshire</li>
                                         <li>Maine</li>
                                         <li>Texas</li>
                                         <li>Indiana</li>
                                     </ul>
                                 </div>
                                 <div className="mb-8 lg:mb-0">
                                     <p className="mb-6 text-lg font-semibold text-gray-700">Services</p>
                                     <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                                         <li>UI / UX Design</li>
                                         <li>App Development</li>
                                         <li>API reference</li>
                                         <li>API status</li>
                                         <li>Documentation</li>
                                     </ul>
                                 </div>
                                 <div className="mb-8 lg:mb-0">
                                     <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
                                     <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                                         <li>Privacy Policy</li>
                                         <li>Terms of Service</li>
                                         <li>Cookie Policy</li>
                                         <li>Disclaimer</li>
                                         <li>Media Policy</li>
                                     </ul>
                                 </div>
                                 <div className="mb-8 lg:mb-0">
                                     <p className="mb-6 text-lg font-semibold text-gray-700">Social Links</p>
                                     <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                                         <li>Facebook</li>
                                         <li>Twitter</li>
                                         <li>Instagram</li>
                                         <li>Linkedin</li>
                                         <li>YouTube</li>
                                     </ul>
                                 </div>
                             </div>
                         </footer>
                     </div>
                 </div >
             </>
         )
     }
     `}),s.jsxs("div",{children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:M2.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(Nr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(jr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:M2.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsxs("div",{className:"mx-auto max-w-7xl px-4",children:[s.jsxs("div",{className:"flex flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[s.jsx("div",{className:"max-w-max rounded-full border bg-gray-50 p-1 px-3",children:s.jsx("p",{className:"text-xs font-semibold leading-normal md:text-sm",children:"About the company"})}),s.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Made with love, right here in India"}),s.jsx("p",{className:"max-w-4xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"})]}),s.jsx("div",{className:"w-full space-y-4",children:s.jsx("img",{className:"h-[200px] w-full rounded-xl object-cover md:h-full",src:"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg",alt:""})}),s.jsx("div",{className:"my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around",children:V5.map(r=>s.jsxs("div",{className:"flex flex-col space-y-3 md:w-2/4 lg:w-1/5",children:[s.jsx(z3,{className:"h-5 w-5"}),s.jsx("p",{className:"w-full text-xl font-semibold  text-gray-900",children:r.title}),s.jsx("p",{className:"w-full text-base text-gray-700",children:r.timings}),s.jsx("p",{className:"text-sm font-medium",children:r.address})]},r.title))}),s.jsx("hr",{className:"mt-20"}),s.jsx("div",{className:"mt-16 flex items-center",children:s.jsxs("div",{className:"space-y-6 md:w-3/4",children:[s.jsx("div",{className:"max-w-max rounded-full border bg-gray-50 p-1 px-3",children:s.jsx("p",{className:"text-xs font-semibold leading-normal md:text-sm",children:"Join Us →"})}),s.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-4xl",children:"Meet our team"}),s.jsx("p",{className:"max-w-4xl text-base text-gray-700 md:text-xl",children:"Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."}),s.jsx("div",{})]})}),s.jsx("div",{className:"grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4",children:B5.map(r=>s.jsxs("div",{className:"rounded-md border",children:[s.jsx("img",{src:r.image,alt:r.name,className:"h-[300px] w-full rounded-lg object-cover "}),s.jsx("p",{className:"mt-6 w-full px-2 text-xl  font-semibold text-gray-900",children:r.name}),s.jsx("p",{className:"w-full px-2 pb-6 text-sm font-semibold text-gray-500",children:r.position})]},r.name))}),s.jsxs("div",{className:"flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row",children:[s.jsxs("div",{className:"space-y-6",children:[s.jsx("p",{className:"text-sm font-semibold md:text-base",children:"Join our team →"}),s.jsx("p",{className:"text-3xl font-bold md:text-4xl",children:"We're just getting started"}),s.jsx("p",{className:"text-base text-gray-600 md:text-lg",children:"Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."}),s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Join Now"})]}),s.jsx("div",{className:"md:mt-o mt-10 w-full",children:s.jsx("img",{src:"https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"Getting Started",className:"rounded-lg"})})]})]}),s.jsx("hr",{className:"mt-6"}),s.jsx("div",{className:"mx-auto max-w-7xl",children:s.jsxs("footer",{className:"px-4 py-10",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[s.jsx("span",{children:s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:s.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),s.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"About us"}),s.jsx("li",{children:"Company History"}),s.jsx("li",{children:"Our Team"}),s.jsx("li",{children:"Our Vision"}),s.jsx("li",{children:"Press Release"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Washington"}),s.jsx("li",{children:"New Hampshire"}),s.jsx("li",{children:"Maine"}),s.jsx("li",{children:"Texas"}),s.jsx("li",{children:"Indiana"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"UI / UX Design"}),s.jsx("li",{children:"App Development"}),s.jsx("li",{children:"API reference"}),s.jsx("li",{children:"API status"}),s.jsx("li",{children:"Documentation"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Privacy Policy"}),s.jsx("li",{children:"Terms of Service"}),s.jsx("li",{children:"Cookie Policy"}),s.jsx("li",{children:"Disclaimer"}),s.jsx("li",{children:"Media Policy"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Facebook"}),s.jsx("li",{children:"Twitter"}),s.jsx("li",{children:"Instagram"}),s.jsx("li",{children:"Linkedin"}),s.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const E2=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}];function Z5(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`'use client'

import React from 'react'
import { Menu, X, Check, ArrowRight, ArrowLeft } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

export function ErrorPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
      <header className="relative w-full border-b bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="font-bold">DevUI</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Button text
            </button>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 50 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span className="font-bold">DevUI</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Button text
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="mx-auto my-12 flex max-w-6xl flex-col px-2 md:my-24 lg:my-32 lg:flex-row lg:items-center">
        <div>
          <div>
            <p className="text-sm font-semibold text-black">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              We can&apos;t find that page
            </h1>
            <p className="mt-4 text-gray-500">
              Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="mt-6 flex items-center gap-x-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ArrowLeft size={16} className="mr-2" />
                Go back
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact us
              </button>
            </div>
          </div>
          <div className="mt-10 space-y-6">
            <div>
              <a
                href="#"
                className="hover:underlin inline-flex items-center gap-x-2 text-sm font-semibold text-black"
              >
                <span>Documentation</span>
                <ArrowRight size={16} />
              </a>
              <p className="mt-2 text-sm text-gray-500">Dive in to learn all about our product.</p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline"
              >
                <span>Our blog</span>
                <ArrowRight size={16} />
              </a>
              <p className="mt-2 text-sm text-gray-500">Read the latest posts on our blog.</p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline"
              >
                <span>Chat to support</span>
                <ArrowRight size={16} />
              </a>
              <p className="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="404"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
      <hr className="mt-6" />
      {/* footer */}
      <div className="mx-auto max-w-7xl">
        <footer className="px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <span>
              <svg
                width="40"
                height="46"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <div className="mt-4 grow md:ml-12 md:mt-0">
              <p className="text-base font-semibold text-gray-700">
                © 2023 DevUI Component Library
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Company</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Our Stores</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Washington</li>
                <li>New Hampshire</li>
                <li>Maine</li>
                <li>Texas</li>
                <li>Indiana</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Services</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>UI / UX Design</li>
                <li>App Development</li>
                <li>API reference</li>
                <li>API status</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
                <li>Media Policy</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Social Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
`}),s.jsxs("div",{className:"mx-auto w-full max-w-7xl px-2 md:px-4",children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:E2.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(Nr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(jr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:E2.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsxs("div",{className:"mx-auto my-12 flex max-w-6xl flex-col px-2 md:my-24 lg:my-32 lg:flex-row lg:items-center",children:[s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-semibold text-black",children:"404 error"}),s.jsx("h1",{className:"mt-3 text-2xl font-semibold text-gray-800 md:text-3xl",children:"We can't find that page"}),s.jsx("p",{className:"mt-4 text-gray-500",children:"Sorry, the page you are looking for doesn't exist or has been moved."}),s.jsxs("div",{className:"mt-6 flex items-center gap-x-3",children:[s.jsxs("button",{type:"button",className:"inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx(P3,{size:16,className:"mr-2"}),"Go back"]}),s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Contact us"})]})]}),s.jsxs("div",{className:"mt-10 space-y-6",children:[s.jsxs("div",{children:[s.jsxs("a",{href:"#",className:"hover:underlin inline-flex items-center gap-x-2 text-sm font-semibold text-black",children:[s.jsx("span",{children:"Documentation"}),s.jsx(Kr,{size:16})]}),s.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Dive in to learn all about our product."})]}),s.jsxs("div",{children:[s.jsxs("a",{href:"#",className:"inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline",children:[s.jsx("span",{children:"Our blog"}),s.jsx(Kr,{size:16})]}),s.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Read the latest posts on our blog."})]}),s.jsxs("div",{children:[s.jsxs("a",{href:"#",className:"inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline",children:[s.jsx("span",{children:"Chat to support"}),s.jsx(Kr,{size:16})]}),s.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Our friendly team is here to help."})]})]})]}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("img",{src:"https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:"404",className:"h-full w-full rounded-md object-cover"})})]}),s.jsx("hr",{className:"mt-6"}),s.jsx("div",{className:"mx-auto max-w-7xl",children:s.jsxs("footer",{className:"px-4 py-10",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[s.jsx("span",{children:s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:s.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),s.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"About us"}),s.jsx("li",{children:"Company History"}),s.jsx("li",{children:"Our Team"}),s.jsx("li",{children:"Our Vision"}),s.jsx("li",{children:"Press Release"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Washington"}),s.jsx("li",{children:"New Hampshire"}),s.jsx("li",{children:"Maine"}),s.jsx("li",{children:"Texas"}),s.jsx("li",{children:"Indiana"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"UI / UX Design"}),s.jsx("li",{children:"App Development"}),s.jsx("li",{children:"API reference"}),s.jsx("li",{children:"API status"}),s.jsx("li",{children:"Documentation"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Privacy Policy"}),s.jsx("li",{children:"Terms of Service"}),s.jsx("li",{children:"Cookie Policy"}),s.jsx("li",{children:"Disclaimer"}),s.jsx("li",{children:"Media Policy"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Facebook"}),s.jsx("li",{children:"Twitter"}),s.jsx("li",{children:"Instagram"}),s.jsx("li",{children:"Linkedin"}),s.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const T2=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"},{name:"Blogs",href:"#"}];function H5(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`'use client'

import React from 'react'
import { CheckCircle, ChevronDown, ChevronUp, Menu, Star, X } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
  {
    name: 'Blogs',
    href: '#',
  },
]

export function LandinngPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="w-full">
      <header className="relative w-full border-b bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="font-bold">DevUI</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Button text
            </button>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 50 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span className="font-bold">DevUI</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Button text
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Hero Section */}
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">We&apos; hiring</p>
              </div>
              <p className="text-sm font-medium">Join our team &rarr;</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              People who care about your growth
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi blanditiis
              dolores quasi eaque explicabo!
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                ></input>
                <p className="mt-2 text-sm text-gray-500">We care about your privacy</p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-9 w-9 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <svg
                className="h-9 w-9 text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-9 w-9 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-9 w-9 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
            <p className="mt-4 text-sm text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
      {/* FAQs */}
      <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">How do I get started?</span>

                <ChevronUp className="h-5 w-5 text-gray-500" />
              </button>
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                  iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
                </p>
              </div>
            </div>
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                >
                  <span className="flex text-start text-lg font-semibold text-black">
                    What is the difference between a free and paid account?
                  </span>
                  <ChevronDown className="hidden h-5 w-5 text-gray-500 md:block" />
                </button>
              </div>
            ))}
          </div>
          <p className="textbase mt-6 text-center text-gray-600">
            Can&apos;t find what you&apos;re looking for?{' '}
            <a href="#" title="" className="font-semibold text-black hover:underline">
              Contact our support
            </a>
          </p>
        </div>
      </section>
      {/* Pricing Section */}
      <div className="mx-auto my-12 max-w-7xl md:my-24 lg:my-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className="px-4 py-10 lg:col-span-5 lg:px-0">
            <span className="mb-8 inline-block rounded-full border p-1 px-3 text-xs font-semibold">
              Pricing that fits your budget
            </span>
            <h1 className="text-3xl font-bold md:text-5xl">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="mt-8 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni, rem sed
              sint neque doloribus saepe veniam minima quaerat minus.
            </p>
            <div className="mt-8 flex w-full max-w-sm items-center space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
            <div className="w-full p-5 md:w-1/2">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className=" border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">Standard</h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consect etur adipiscing maror.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <p className="mb-6 font-medium leading-relaxed text-gray-600">
                    Features included:
                  </p>
                  <ul className="mb-11">
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">3 Team Members</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">1200+ UI Blocks</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">10 GB Cloud Storage</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">Individual Email Account</p>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">Premium Support</p>
                    </li>
                  </ul>
                  <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                    <span>Starting from</span>
                    <span className="ml-2 text-gray-900">$49/mo</span>
                  </p>
                  <div className="md:inline-block">
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Start your free trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 md:w-1/2">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className=" border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">Standard</h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consect etur adipiscing maror.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <p className="mb-6 font-medium leading-relaxed text-gray-600">
                    Features included:
                  </p>
                  <ul className="mb-11">
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">3 Team Members</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">1200+ UI Blocks</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">10 GB Cloud Storage</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">Individual Email Account</p>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">Premium Support</p>
                    </li>
                  </ul>
                  <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                    <span>Starting from</span>
                    <span className="ml-2 text-gray-900">$49/mo</span>
                  </p>
                  <div className="md:inline-block">
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Start your free trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NewsLetter */}
      <div className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 lg:px-2">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-3xl font-bold text-black">Sign up for our weekly newsletter</h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
              commodo posuere et sit amet ligula.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800">
                Trusted by over 100,000+ businesses and individuals
              </p>
              <div className="mt-2 flex items-center">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 inline-block">
                  <span className="text-sm font-semibold text-gray-800">4.8/5 . 3420 Reviews</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
            <form className="flex lg:justify-center">
              <div className="flex w-full max-w-md flex-col space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                ></input>
                <button
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-2 lg:text-center">
              <span className="text-sm text-gray-600">
                By signing up, you agree to our terms of service and privacy policy.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="mx-auto mt-12 max-w-7xl">
        <footer className="px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <span>
              <svg
                width="40"
                height="46"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <div className="mt-4 grow md:ml-12 md:mt-0">
              <p className="text-base font-semibold text-gray-700">
                © 2023 DevUI Component Library
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Company</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Our Stores</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Washington</li>
                <li>New Hampshire</li>
                <li>Maine</li>
                <li>Texas</li>
                <li>Indiana</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Services</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>UI / UX Design</li>
                <li>App Development</li>
                <li>API reference</li>
                <li>API status</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Legal</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
                <li>Media Policy</li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700">Social Links</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
`}),s.jsxs("div",{className:"w-full",children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:T2.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(Nr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(jr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:T2.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsx("div",{className:"relative w-full bg-white",children:s.jsxs("div",{className:"mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8",children:[s.jsxs("div",{className:"flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6",children:[s.jsxs("div",{className:"mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1",children:[s.jsx("div",{className:"rounded-full bg-white p-1 px-2",children:s.jsx("p",{className:"text-sm font-medium",children:"We' hiring"})}),s.jsx("p",{className:"text-sm font-medium",children:"Join our team →"})]}),s.jsx("h1",{className:"mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl",children:"People who care about your growth"}),s.jsx("p",{className:"mt-8 text-lg text-gray-700",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi blanditiis dolores quasi eaque explicabo!"}),s.jsxs("form",{action:"",className:"mt-8 flex items-start space-x-2",children:[s.jsxs("div",{children:[s.jsx("input",{className:"flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Enter your email",id:"email"}),s.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"We care about your privacy"})]}),s.jsx("div",{children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})})]})]}),s.jsx("div",{className:"relative lg:col-span-5 lg:-mr-8 xl:col-span-6",children:s.jsx("img",{className:"aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]",src:"https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:""})})]})}),s.jsx("div",{className:"mx-auto my-32 max-w-7xl px-2 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4",children:[s.jsxs("div",{children:[s.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100",children:s.jsx("svg",{className:"h-9 w-9 text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})})}),s.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Secured Payments"}),s.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),s.jsxs("div",{children:[s.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100",children:s.jsx("svg",{className:"h-9 w-9 text-orange-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),s.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Fast & Easy to Load"}),s.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),s.jsxs("div",{children:[s.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100",children:s.jsx("svg",{className:"h-9 w-9 text-green-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),s.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Light & Dark Version"}),s.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),s.jsxs("div",{children:[s.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100",children:s.jsx("svg",{className:"h-9 w-9 text-red-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})})}),s.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Filter Blocks"}),s.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]})]})}),s.jsx("section",{className:"mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0",children:s.jsxs("div",{children:[s.jsxs("div",{className:"mx-auto max-w-2xl lg:text-center",children:[s.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl",children:"Frequently Asked Questions"}),s.jsx("p",{className:"mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda"})]}),s.jsxs("div",{className:"mx-auto mt-8 max-w-3xl space-y-4 md:mt-16",children:[s.jsxs("div",{className:"cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200",children:[s.jsxs("button",{type:"button",className:"flex w-full items-center justify-between px-4 py-5 sm:p-6",children:[s.jsx("span",{className:"flex text-lg font-semibold text-black",children:"How do I get started?"}),s.jsx(I3,{className:"h-5 w-5 text-gray-500"})]}),s.jsx("div",{className:"px-4 pb-5 sm:px-6 sm:pb-6",children:s.jsx("p",{className:"text-gray-500",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"})})]}),Array.from({length:2}).map((r,l)=>s.jsx("div",{className:"cursor-pointer rounded-md border border-gray-400 transition-all duration-200",children:s.jsxs("button",{type:"button",className:"flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center",children:[s.jsx("span",{className:"flex text-start text-lg font-semibold text-black",children:"What is the difference between a free and paid account?"}),s.jsx(F3,{className:"hidden h-5 w-5 text-gray-500 md:block"})]})},l))]}),s.jsxs("p",{className:"textbase mt-6 text-center text-gray-600",children:["Can't find what you're looking for?"," ",s.jsx("a",{href:"#",title:"",className:"font-semibold text-black hover:underline",children:"Contact our support"})]})]})}),s.jsx("div",{className:"mx-auto my-12 max-w-7xl md:my-24 lg:my-32",children:s.jsxs("div",{className:"lg:grid lg:grid-cols-12 lg:gap-x-6",children:[s.jsxs("div",{className:"px-4 py-10 lg:col-span-5 lg:px-0",children:[s.jsx("span",{className:"mb-8 inline-block rounded-full border p-1 px-3 text-xs font-semibold",children:"Pricing that fits your budget"}),s.jsx("h1",{className:"text-3xl font-bold md:text-5xl",children:"Lorem ipsum dolor sit amet consectetur."}),s.jsx("p",{className:"mt-8 font-medium",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni, rem sed sint neque doloribus saepe veniam minima quaerat minus."}),s.jsxs("div",{className:"mt-8 flex w-full max-w-sm items-center space-x-2",children:[s.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})]})]}),s.jsxs("div",{className:"flex flex-col items-center justify-center md:flex-row lg:col-span-7",children:[s.jsx("div",{className:"w-full p-5 md:w-1/2",children:s.jsxs("div",{className:"rounded-md border bg-white bg-opacity-90",children:[s.jsx("div",{className:" border-b",children:s.jsxs("div",{className:"px-9 py-7",children:[s.jsx("h3",{className:"mb-3 text-xl font-bold leading-snug text-gray-900",children:"Standard"}),s.jsx("p",{className:"font-medium leading-relaxed text-gray-500",children:"Lorem ipsum dolor sit amet, consect etur adipiscing maror."})]})}),s.jsxs("div",{className:"px-9 pb-9 pt-8",children:[s.jsx("p",{className:"mb-6 font-medium leading-relaxed text-gray-600",children:"Features included:"}),s.jsxs("ul",{className:"mb-11",children:[s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(wt,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"3 Team Members"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(wt,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"1200+ UI Blocks"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(wt,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"10 GB Cloud Storage"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(wt,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"Individual Email Account"})]}),s.jsxs("li",{className:"flex items-center",children:[s.jsx(wt,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"Premium Support"})]})]}),s.jsxs("p",{className:"mb-6 text-lg font-semibold leading-normal text-gray-600",children:[s.jsx("span",{children:"Starting from"}),s.jsx("span",{className:"ml-2 text-gray-900",children:"$49/mo"})]}),s.jsx("div",{className:"md:inline-block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Start your free trial"})})]})]})}),s.jsx("div",{className:"w-full p-5 md:w-1/2",children:s.jsxs("div",{className:"rounded-md border bg-white bg-opacity-90",children:[s.jsx("div",{className:" border-b",children:s.jsxs("div",{className:"px-9 py-7",children:[s.jsx("h3",{className:"mb-3 text-xl font-bold leading-snug text-gray-900",children:"Standard"}),s.jsx("p",{className:"font-medium leading-relaxed text-gray-500",children:"Lorem ipsum dolor sit amet, consect etur adipiscing maror."})]})}),s.jsxs("div",{className:"px-9 pb-9 pt-8",children:[s.jsx("p",{className:"mb-6 font-medium leading-relaxed text-gray-600",children:"Features included:"}),s.jsxs("ul",{className:"mb-11",children:[s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(wt,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"3 Team Members"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(wt,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"1200+ UI Blocks"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(wt,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"10 GB Cloud Storage"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(wt,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"Individual Email Account"})]}),s.jsxs("li",{className:"flex items-center",children:[s.jsx(wt,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"Premium Support"})]})]}),s.jsxs("p",{className:"mb-6 text-lg font-semibold leading-normal text-gray-600",children:[s.jsx("span",{children:"Starting from"}),s.jsx("span",{className:"ml-2 text-gray-900",children:"$49/mo"})]}),s.jsx("div",{className:"md:inline-block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Start your free trial"})})]})]})})]})]})}),s.jsx("div",{className:"mx-auto max-w-7xl bg-gray-50 px-2 py-10 lg:px-2",children:s.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between",children:[s.jsxs("div",{className:"w-full md:w-2/3 lg:w-1/2",children:[s.jsx("h2",{className:"text-3xl font-bold text-black",children:"Sign up for our weekly newsletter"}),s.jsx("p",{className:"mt-4 text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."}),s.jsxs("div",{className:"mt-4",children:[s.jsx("p",{className:"font-semibold text-gray-800",children:"Trusted by over 100,000+ businesses and individuals"}),s.jsxs("div",{className:"mt-2 flex items-center",children:[s.jsx("div",{className:"flex space-x-1",children:Array.from({length:5}).map((r,l)=>s.jsx(B3,{className:"h-5 w-5 text-yellow-400"},l))}),s.jsx("span",{className:"ml-2 inline-block",children:s.jsx("span",{className:"text-sm font-semibold text-gray-800",children:"4.8/5 . 3420 Reviews"})})]})]})]}),s.jsxs("div",{className:"mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2",children:[s.jsx("form",{className:"flex lg:justify-center",children:s.jsxs("div",{className:"flex w-full max-w-md flex-col space-y-4",children:[s.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),s.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})]})}),s.jsx("p",{className:"mt-2 lg:text-center",children:s.jsx("span",{className:"text-sm text-gray-600",children:"By signing up, you agree to our terms of service and privacy policy."})})]})]})}),s.jsx("div",{className:"mx-auto mt-12 max-w-7xl",children:s.jsxs("footer",{className:"px-4 py-10",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[s.jsx("span",{children:s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:s.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),s.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"About us"}),s.jsx("li",{children:"Company History"}),s.jsx("li",{children:"Our Team"}),s.jsx("li",{children:"Our Vision"}),s.jsx("li",{children:"Press Release"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Washington"}),s.jsx("li",{children:"New Hampshire"}),s.jsx("li",{children:"Maine"}),s.jsx("li",{children:"Texas"}),s.jsx("li",{children:"Indiana"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"UI / UX Design"}),s.jsx("li",{children:"App Development"}),s.jsx("li",{children:"API reference"}),s.jsx("li",{children:"API status"}),s.jsx("li",{children:"Documentation"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Privacy Policy"}),s.jsx("li",{children:"Terms of Service"}),s.jsx("li",{children:"Cookie Policy"}),s.jsx("li",{children:"Disclaimer"}),s.jsx("li",{children:"Media Policy"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Facebook"}),s.jsx("li",{children:"Twitter"}),s.jsx("li",{children:"Instagram"}),s.jsx("li",{children:"Linkedin"}),s.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const _2=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],W5=[{name:"Basic plan",price:"$10/mth",features:["Access to all basic features ","Basic reporting and analytics","Up to 10 individual users","20GB individual data each user","Basic chat and email support"]},{name:"Business plan",price:"$20/mth",features:["200+ integrations","Advanced reporting and analytics","Up to 20 individual users","40GB individual data each user","Priority chat and email support"]},{name:"Enterprise plan",price:"$40/mth",features:["Advanced custom fields","Audit log and data history","Unlimited individual users","Unlimited individual data","Personalized+priority service"]}],q5=[{question:"Is there a free trial available?",answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},{question:"Can I change my plan later?",answer:"Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."},{question:"What is your cancellation policy?",answer:"We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid."},{question:"Can other info be added to an invoice?",answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},{question:"How does billing work?",answer:"Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."},{question:"How do I change my account email?",answer:"You can change the email address associated with your account by going to account from a laptop or desktop."}];function Y5(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`'use client'

import React from 'react'
import { Menu, X, Check, MinusCircle, PlusCircle, ChevronRight } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

const plans = [
  {
    name: 'Basic plan',
    price: '$10/mth',
    features: [
      'Access to all basic features ',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each user',
      'Basic chat and email support',
    ],
  },
  {
    name: 'Business plan',
    price: '$20/mth',
    features: [
      '200+ integrations',
      'Advanced reporting and analytics',
      'Up to 20 individual users',
      '40GB individual data each user',
      'Priority chat and email support',
    ],
  },
  {
    name: 'Enterprise plan',
    price: '$40/mth',
    features: [
      'Advanced custom fields',
      'Audit log and data history',
      'Unlimited individual users',
      'Unlimited individual data',
      'Personalized+priority service',
    ],
  },
]

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.',
  },

  {
    question: 'Can other info be added to an invoice?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.',
  },
  {
    question: 'How do I change my account email?',
    answer:
      'You can change the email address associated with your account by going to account from a laptop or desktop.',
  },
]

export function PricingPageTwo() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="mx-auto max-w-7xl px-2 md:px-4">
      <header className="relative w-full border-b bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="font-bold">DevUI</span>
          </div>
          <div className="hidden grow px-12 lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Button text
            </button>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 50 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span className="font-bold">DevUI</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Button text
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <div>
        {/* Hero Section */}
        <div className="mx-auto flex max-w-5xl flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Simple, transparent pricing
          </p>
          <p className="max-w-3xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
        </div>
        <div className="mt-8 space-y-4 md:mt-12">
          <div className="grid space-y-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:space-x-8">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-lg border border-gray-200 bg-white">
                <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
                  <p className="text-4xl font-bold leading-10">{plan.price}</p>
                  <div className="flex w-full flex-col items-start justify-start space-y-1">
                    <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                      {plan.name}
                    </p>
                    <p className="w-full text-base leading-normal text-gray-600">
                      Billed annually.
                    </p>
                  </div>
                </div>
                <div className="flex w-full max-w-sm flex-col px-8 py-8">
                  <div className="flex w-full flex-col items-start justify-start space-y-3">
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Get Started
                    </button>
                    <button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start px-8 pb-8">
                  <div className="flex w-full flex-col space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="inline-flex w-full space-x-3">
                        <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                          <Check className="h-4 w-4" />
                        </div>
                        <p className="w-full text-base leading-normal text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* FAQs */}
        <div className="mt-12 space-y-16 bg-gray-50 py-16">
          <div className="mx-auto  flex max-w-7xl items-center justify-center  px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 md:w-3/4">
              {/* faq title */}
              <div className="space-y-4 justify-self-center">
                <p className="text-center text-3xl font-bold leading-10 text-gray-900">
                  Frequently asked questions
                </p>
                <p className="text-center text-lg leading-loose text-gray-600">
                  Everything you need to know about the product and billing.
                </p>
              </div>
              {/*  */}
              <div className="divide-y divide-gray-300">
                {faqs.map((faq, index) => (
                  <div key={faq.question} className="flex justify-between space-x-6 py-6">
                    <div className="inline-flex flex-col items-start justify-start space-y-2">
                      <p className="text-lg font-medium leading-7 text-gray-900">{faq.question}</p>
                      {index === 0 ? (
                        <p className="text-base leading-normal text-gray-600">{faq.answer}</p>
                      ) : null}
                    </div>
                    <div>
                      {index === 0 ? (
                        <MinusCircle className="h-6 w-6 text-gray-600" />
                      ) : (
                        <PlusCircle className="h-6 w-6 text-gray-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* --- */}
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="w-full pb-8 pt-12 md:mt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
          <div className="w-full px-4 md:w-1/2 lg:px-0">
            <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
            <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
              <input
                className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="mb-8 lg:mb-0">
                <p className="mb-6 text-lg font-semibold text-gray-700 ">Company</p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>About us</li>
                  <li>Company History</li>
                  <li>Our Team</li>
                  <li>Our Vision</li>
                  <li>Press Release</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-8" />
        <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
          <div className="inline-flex items-center">
            <svg
              width="40"
              height="46"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="black"
              />
            </svg>
            <span className="ml-4 text-lg font-bold">DevUI</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm font-medium text-gray-500">© 2023 DevUI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
`}),s.jsxs("div",{className:"mx-auto max-w-7xl px-2 md:px-4",children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden grow px-12 lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:_2.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(Nr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(jr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:_2.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsxs("div",{children:[s.jsxs("div",{className:"mx-auto flex max-w-5xl flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[s.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Simple, transparent pricing"}),s.jsx("p",{className:"max-w-3xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"})]}),s.jsx("div",{className:"mt-8 space-y-4 md:mt-12",children:s.jsx("div",{className:"grid space-y-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:space-x-8",children:W5.map(r=>s.jsxs("div",{className:"rounded-lg border border-gray-200 bg-white",children:[s.jsxs("div",{className:"flex w-full flex-col justify-start space-y-4 px-8 pt-10",children:[s.jsx("p",{className:"text-4xl font-bold leading-10",children:r.price}),s.jsxs("div",{className:"flex w-full flex-col items-start justify-start space-y-1",children:[s.jsx("p",{className:"w-full text-xl font-semibold leading-loose text-gray-900",children:r.name}),s.jsx("p",{className:"w-full text-base leading-normal text-gray-600",children:"Billed annually."})]})]}),s.jsx("div",{className:"flex w-full max-w-sm flex-col px-8 py-8",children:s.jsxs("div",{className:"flex w-full flex-col items-start justify-start space-y-3",children:[s.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Get Started"}),s.jsx("button",{type:"button",className:"w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Contact Us"})]})}),s.jsx("div",{className:"flex w-full flex-col items-start justify-start px-8 pb-8",children:s.jsx("div",{className:"flex w-full flex-col space-y-4",children:r.features.map(l=>s.jsxs("div",{className:"inline-flex w-full space-x-3",children:[s.jsx("div",{className:"flex items-center justify-center rounded-full p-1 lg:bg-gray-100",children:s.jsx(O3,{className:"h-4 w-4"})}),s.jsx("p",{className:"w-full text-base leading-normal text-gray-600",children:l})]},l))})})]},r.name))})}),s.jsx("div",{className:"mt-12 space-y-16 bg-gray-50 py-16",children:s.jsx("div",{className:"mx-auto  flex max-w-7xl items-center justify-center  px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"flex flex-col items-center space-y-6 md:w-3/4",children:[s.jsxs("div",{className:"space-y-4 justify-self-center",children:[s.jsx("p",{className:"text-center text-3xl font-bold leading-10 text-gray-900",children:"Frequently asked questions"}),s.jsx("p",{className:"text-center text-lg leading-loose text-gray-600",children:"Everything you need to know about the product and billing."})]}),s.jsx("div",{className:"divide-y divide-gray-300",children:q5.map((r,l)=>s.jsxs("div",{className:"flex justify-between space-x-6 py-6",children:[s.jsxs("div",{className:"inline-flex flex-col items-start justify-start space-y-2",children:[s.jsx("p",{className:"text-lg font-medium leading-7 text-gray-900",children:r.question}),l===0?s.jsx("p",{className:"text-base leading-normal text-gray-600",children:r.answer}):null]}),s.jsx("div",{children:l===0?s.jsx(R3,{className:"h-6 w-6 text-gray-600"}):s.jsx(V3,{className:"h-6 w-6 text-gray-600"})})]},r.question))})]})})})]}),s.jsxs("footer",{className:"w-full pb-8 pt-12 md:mt-16",children:[s.jsxs("div",{className:"mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row",children:[s.jsxs("div",{className:"w-full px-4 md:w-1/2 lg:px-0",children:[s.jsx("h1",{className:"max-w-sm text-3xl font-bold",children:"Subscribe to our Newsletter"}),s.jsxs("form",{action:"",className:"mt-4 inline-flex w-full items-center md:w-3/4",children:[s.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),s.jsx("button",{type:"button",className:"ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:s.jsx(D3,{className:"h-4 w-4"})})]})]}),s.jsx("div",{className:"mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3",children:Array.from({length:3}).map((r,l)=>s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700 ",children:"Company"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"About us"}),s.jsx("li",{children:"Company History"}),s.jsx("li",{children:"Our Team"}),s.jsx("li",{children:"Our Vision"}),s.jsx("li",{children:"Press Release"})]})]},l))})]}),s.jsx("hr",{className:"my-8"}),s.jsxs("div",{className:"mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0",children:[s.jsxs("div",{className:"inline-flex items-center",children:[s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})}),s.jsx("span",{className:"ml-4 text-lg font-bold",children:"DevUI"})]}),s.jsx("div",{className:"mt-4 md:mt-0",children:s.jsx("p",{className:"text-sm font-medium text-gray-500",children:"© 2023 DevUI. All rights reserved."})})]})]})]})]})}const A2=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],G5=[{title:"Bengaluru office",timings:"Mon-Sat 9am to 5pm.",address:"100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN"},{title:"Head office",timings:"Mon-Sat 9am to 5pm.",address:"12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN"},{title:"Karnataka office",timings:"Mon-Sat 9am to 5pm.",address:"42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN"}];function Q5(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`'use client'

import React from 'react'
import { Menu, X, MapPin } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

const locations = [
  {
    title: 'Bengaluru office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN',
  },
  {
    title: 'Head office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN',
  },
  {
    title: 'Karnataka office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN',
  },
]

export function ContactPageTwo() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <header className="relative w-full border-b bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="font-bold">DevUI</span>
          </div>
          <div className="hidden grow px-12 lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Button text
            </button>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 50 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span className="font-bold">DevUI</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Button text
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                <form action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="Leave us a message"
                      cols={3}
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </div>
      </div>
      {/* Address */}
      <div className="rounded-lg bg-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="w-full text-4xl font-bold text-gray-900">Our Offices</p>
                <p className="w-full text-lg text-gray-600">Find us at these locations.</p>
              </div>
              <div className="space-y-4 divide-y-2">
                {locations.map((location) => (
                  <div
                    key={location.title}
                    className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                  >
                    <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                    <p className="w-full text-base  text-gray-600">{location.timings}</p>
                    <p className="text-sm font-semibold text-gray-600">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      {/* footer */}
      <section className="relative overflow-hidden bg-white py-8">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap items-center justify-between">
            <div className="w-auto p-8">
              <a href="#">
                <div className="inline-flex items-center">
                  <svg
                    width="40"
                    height="46"
                    viewBox="0 0 50 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                      fill="black"
                    />
                  </svg>
                  <span className="ml-4 text-lg font-bold">DevUI</span>
                </div>
              </a>
            </div>
            <div className="w-auto p-8">
              <ul className="-m-5 flex flex-wrap items-center">
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Terms of Service
                  </a>
                </li>
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Return Policy
                  </a>
                </li>
                <li className="p-5">
                  <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-auto p-8">
              <div className="-m-1.5 flex flex-wrap">
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                          fill="#27272A"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                          fill="#27272A"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z"
                          fill="#27272A"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
`}),s.jsxs("div",{children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden grow px-12 lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:A2.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(Nr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(jr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:A2.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsx("div",{className:"mx-auto max-w-7xl px-4",children:s.jsx("div",{className:"mx-auto max-w-7xl py-12 md:py-24",children:s.jsxs("div",{className:"grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2",children:[s.jsx("div",{className:"flex items-center justify-center",children:s.jsxs("div",{className:"px-2 md:px-12",children:[s.jsx("p",{className:"text-2xl font-bold text-gray-900 md:text-4xl",children:"Get in touch"}),s.jsx("p",{className:"mt-4 text-lg text-gray-600",children:"Our friendly team would love to hear from you."}),s.jsxs("form",{action:"",className:"mt-8 space-y-4",children:[s.jsxs("div",{className:"grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2",children:[s.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[s.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"first_name",children:"First Name"}),s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"first_name",placeholder:"First Name"})]}),s.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[s.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"last_name",children:"Last Name"}),s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"last_name",placeholder:"Last Name"})]})]}),s.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[s.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"email",children:"Email"}),s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"email",placeholder:"Email"})]}),s.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[s.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"phone_number",children:"Phone number"}),s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"tel",id:"phone_number",placeholder:"Phone number"})]}),s.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[s.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"message",children:"Message"}),s.jsx("textarea",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",id:"message",placeholder:"Leave us a message",cols:3})]}),s.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Send Message"})]})]})}),s.jsx("img",{alt:"Contact us",className:"hidden max-h-full w-full rounded-lg object-cover lg:block",src:"https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"})]})})}),s.jsx("div",{className:"rounded-lg bg-gray-100",children:s.jsx("div",{className:"mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"py-20",children:s.jsxs("div",{className:"grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("p",{className:"w-full text-4xl font-bold text-gray-900",children:"Our Offices"}),s.jsx("p",{className:"w-full text-lg text-gray-600",children:"Find us at these locations."})]}),s.jsx("div",{className:"space-y-4 divide-y-2",children:G5.map(r=>s.jsxs("div",{className:"flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full",children:[s.jsx("p",{className:"w-full text-xl font-semibold  text-gray-900",children:r.title}),s.jsx("p",{className:"w-full text-base  text-gray-600",children:r.timings}),s.jsx("p",{className:"text-sm font-semibold text-gray-600",children:r.address})]},r.title))})]})})})}),s.jsx("hr",{className:"mt-6"}),s.jsx("section",{className:"relative overflow-hidden bg-white py-8",children:s.jsx("div",{className:"container relative z-10 mx-auto px-4",children:s.jsxs("div",{className:"-m-8 flex flex-wrap items-center justify-between",children:[s.jsx("div",{className:"w-auto p-8",children:s.jsx("a",{href:"#",children:s.jsxs("div",{className:"inline-flex items-center",children:[s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})}),s.jsx("span",{className:"ml-4 text-lg font-bold",children:"DevUI"})]})})}),s.jsx("div",{className:"w-auto p-8",children:s.jsxs("ul",{className:"-m-5 flex flex-wrap items-center",children:[s.jsx("li",{className:"p-5",children:s.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Privacy Policy"})}),s.jsx("li",{className:"p-5",children:s.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Terms of Service"})}),s.jsx("li",{className:"p-5",children:s.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Return Policy"})}),s.jsx("li",{className:"p-5",children:s.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Contact Us"})})]})}),s.jsx("div",{className:"w-auto p-8",children:s.jsxs("div",{className:"-m-1.5 flex flex-wrap",children:[s.jsx("div",{className:"w-auto p-1.5",children:s.jsx("a",{href:"#",children:s.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:s.jsx("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z",fill:"#27272A"})})})})}),s.jsx("div",{className:"w-auto p-1.5",children:s.jsx("a",{href:"#",children:s.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:s.jsx("svg",{width:"14",height:"11",viewBox:"0 0 14 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z",fill:"#27272A"})})})})}),s.jsx("div",{className:"w-auto p-1.5",children:s.jsx("a",{href:"#",children:s.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:s.jsx("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z",fill:"#27272A"})})})})})]})})]})})})]})]})}const K5="/assets/tlogo-b011959f.png";function X5(){const e=[{name:"College",desc:"Dummy college",workStatus:"active",filterBy:"College",imgUrl:'src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"'},{name:"School",desc:"Dummy school",workStatus:"disabled",filterBy:"College",imgUrl:'src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"'}],t=r=>{navigate(`/documentation/${r}`)},n=r=>{navigate(`/modules-desc/${r}`)};return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`import React from 'react'
import CodeView from '../Components/Common/CodeView'
import { FiExternalLink } from 'react-icons/fi'


export function TablePage() {

  const tableRow = [
    { name: 'College', desc: 'Dummy college', workStatus: 'active', filterBy: 'College', imgUrl: tlogo },
    { name: 'School', desc: 'Dummy school', workStatus: 'disabled', filterBy: 'College', imgUrl: tlogo },
  ]

  return ( <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='font-bold text-lg mb-4 pr-10 flex-1'># College </div>
        <div className={'form-group col-span-12 md:col-span-3 mb-4 md:px-2 flex-1 text-right pr-20'}>
          <select  className={'cypress_transferMode px-4  border rounded-md shadow-xl text-lg cursor-pointer'}>
            <option className='cursor-pointer' value={'All'} >All</option>
            <option className='cursor-pointer' value={'1'} >Phase-1</option>
            <option className='cursor-pointer' value={'2'} >Phase-2</option>
            <option className='cursor-pointer' value={'3'} >Phase-3</option>
          </select>

        </div>
      </div>

      {/* DATA TABLE */}
      <div className='h-[80vh] overflow-y-scroll'>
        <table class="min-w-full leading-normal" >
          <thead className='font-bold text-left text-sm bg-gray-50'>
            <tr className='text-md'>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>#</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Name</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Description</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Work Status</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Action</th>
              <th className='px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize'>Link</th>
            </tr>
          </thead>
          <tbody>
            {tableRow?.map((data, index) => (
              <tr className='bg-white border-b border-gray-200'>
                <td className='px-2 py-2 text-sm text-left'>{index + 1}</td>
                <td className='px-2 py-2 text-sm text-left'>
                  <div className='w-12 h-12 inline-block rounded-full shadow-xl border p-2'>
                    <img className='inline w-10 rounded' src={data?.imgUrl} alt="" />
                  </div>
                  <span className='pl-2 inline font-semibold text-md text-gray-700'>{data?.name}
                  </span>
                </td>
                <td className='px-2 py-2 text-sm text-left'>{data?.desc}</td>
                <td className={'px-2 py-2 text-sm text-left font-semibold'}>{data?.workStatus}</td>
                <td className='px-2 py-2 text-sm text-left'
                ><button 
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white"
                >
                    View
                  </button>
                </td>
                <td className='px-2 py-2 text-sm text-left'><FiExternalLink onMouseEnter={() => settooltipData(data?.filterBy)} onMouseLeave={() => settooltipData(null)} onClick={() => redirectUrl(data?.filterText)} className="inline cursor-pointer text-2xl hover:scale-105 font-semibold" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )
}
`}),s.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center",children:[s.jsx("div",{className:"font-bold text-lg mb-4 pr-10 flex-1",children:"# College "}),s.jsx("div",{className:"form-group col-span-12 md:col-span-3 mb-4 md:px-2 flex-1 text-right pr-20",children:s.jsxs("select",{className:"cypress_transferMode px-4  border rounded-md shadow-xl text-lg cursor-pointer",children:[s.jsx("option",{className:"cursor-pointer",value:"All",children:"All"}),s.jsx("option",{className:"cursor-pointer",value:"1",children:"Phase-1"}),s.jsx("option",{className:"cursor-pointer",value:"2",children:"Phase-2"}),s.jsx("option",{className:"cursor-pointer",value:"3",children:"Phase-3"})]})})]}),s.jsx("div",{className:"h-[80vh] overflow-y-scroll",children:s.jsxs("table",{class:"min-w-full leading-normal",children:[s.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:s.jsxs("tr",{className:"text-md",children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"#"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Description"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Work Status"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Action"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Link"})]})}),s.jsx("tbody",{children:e==null?void 0:e.map((r,l)=>s.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l+1}),s.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s.jsx("div",{className:"w-12 h-12 inline-block rounded-full shadow-xl border p-2",children:s.jsx("img",{className:"inline w-10 rounded",src:K5,alt:""})}),s.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:r==null?void 0:r.name})]}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.desc}),s.jsx("td",{className:`px-2 py-2 text-sm text-left font-semibold 
                            ${(r==null?void 0:r.workStatus)==="disabled"&&"text-red-600"}
                            ${(r==null?void 0:r.workStatus)==="active"&&"text-green-600"}
                            `,children:r==null?void 0:r.workStatus}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.jsx("button",{onClick:()=>n(r==null?void 0:r.filterBy),type:"button",className:"rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white",children:"View"})}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.jsx(ju,{onMouseEnter:()=>settooltipData(r==null?void 0:r.filterBy),onMouseLeave:()=>settooltipData(null),onClick:()=>t(r==null?void 0:r.filterText),className:"inline cursor-pointer text-2xl hover:scale-105 font-semibold"})})]}))})]})})]})}function J5(){return s.jsxs(s.Fragment,{children:[s.jsx("div",{children:"ScrollHandleCss"}),s.jsx(ge,{code:`/*App.css*/
::-webkit-scrollbar {
    width: 2px;
  }
  
  ::-webkit-scrollbar-track {
    background: white;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: gray;
    /* border: 3px solid transparent; */
    border-radius: 9px;
    background-clip: content-box;
  }
`})]})}var qd={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(rm,function(){var n=1e3,r=6e4,l=36e5,i="millisecond",a="second",o="minute",u="hour",c="day",x="week",h="month",f="quarter",b="year",C="date",w="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var $=["th","st","nd","rd"],T=R%100;return"["+R+($[(T-20)%10]||$[T]||$[0])+"]"}},g=function(R,$,T){var B=String(R);return!B||B.length>=$?R:""+Array($+1-B.length).join(T)+R},y={s:g,z:function(R){var $=-R.utcOffset(),T=Math.abs($),B=Math.floor(T/60),L=T%60;return($<=0?"+":"-")+g(B,2,"0")+":"+g(L,2,"0")},m:function R($,T){if($.date()<T.date())return-R(T,$);var B=12*(T.year()-$.year())+(T.month()-$.month()),L=$.clone().add(B,h),N=T-L<0,M=$.clone().add(B+(N?-1:1),h);return+(-(B+(T-L)/(N?L-M:M-L))||0)},a:function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},p:function(R){return{M:h,y:b,w:x,d:c,D:C,h:u,m:o,s:a,ms:i,Q:f}[R]||String(R||"").toLowerCase().replace(/s$/,"")},u:function(R){return R===void 0}},k="en",P={};P[k]=m;var O=function(R){return R instanceof Y},D=function R($,T,B){var L;if(!$)return k;if(typeof $=="string"){var N=$.toLowerCase();P[N]&&(L=N),T&&(P[N]=T,L=N);var M=$.split("-");if(!L&&M.length>1)return R(M[0])}else{var A=$.name;P[A]=$,L=A}return!B&&L&&(k=L),L||!B&&k},U=function(R,$){if(O(R))return R.clone();var T=typeof $=="object"?$:{};return T.date=R,T.args=arguments,new Y(T)},E=y;E.l=D,E.i=O,E.w=function(R,$){return U(R,{locale:$.$L,utc:$.$u,x:$.$x,$offset:$.$offset})};var Y=function(){function R(T){this.$L=D(T.locale,null,!0),this.parse(T)}var $=R.prototype;return $.parse=function(T){this.$d=function(B){var L=B.date,N=B.utc;if(L===null)return new Date(NaN);if(E.u(L))return new Date;if(L instanceof Date)return new Date(L);if(typeof L=="string"&&!/Z$/i.test(L)){var M=L.match(_);if(M){var A=M[2]-1||0,Z=(M[7]||"0").substring(0,3);return N?new Date(Date.UTC(M[1],A,M[3]||1,M[4]||0,M[5]||0,M[6]||0,Z)):new Date(M[1],A,M[3]||1,M[4]||0,M[5]||0,M[6]||0,Z)}}return new Date(L)}(T),this.$x=T.x||{},this.init()},$.init=function(){var T=this.$d;this.$y=T.getFullYear(),this.$M=T.getMonth(),this.$D=T.getDate(),this.$W=T.getDay(),this.$H=T.getHours(),this.$m=T.getMinutes(),this.$s=T.getSeconds(),this.$ms=T.getMilliseconds()},$.$utils=function(){return E},$.isValid=function(){return this.$d.toString()!==w},$.isSame=function(T,B){var L=U(T);return this.startOf(B)<=L&&L<=this.endOf(B)},$.isAfter=function(T,B){return U(T)<this.startOf(B)},$.isBefore=function(T,B){return this.endOf(B)<U(T)},$.$g=function(T,B,L){return E.u(T)?this[B]:this.set(L,T)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(T,B){var L=this,N=!!E.u(B)||B,M=E.p(T),A=function(Et,ve){var yt=E.w(L.$u?Date.UTC(L.$y,ve,Et):new Date(L.$y,ve,Et),L);return N?yt:yt.endOf(c)},Z=function(Et,ve){return E.w(L.toDate()[Et].apply(L.toDate("s"),(N?[0,0,0,0]:[23,59,59,999]).slice(ve)),L)},H=this.$W,J=this.$M,fe=this.$D,je="set"+(this.$u?"UTC":"");switch(M){case b:return N?A(1,0):A(31,11);case h:return N?A(1,J):A(0,J+1);case x:var Te=this.$locale().weekStart||0,He=(H<Te?H+7:H)-Te;return A(N?fe-He:fe+(6-He),J);case c:case C:return Z(je+"Hours",0);case u:return Z(je+"Minutes",1);case o:return Z(je+"Seconds",2);case a:return Z(je+"Milliseconds",3);default:return this.clone()}},$.endOf=function(T){return this.startOf(T,!1)},$.$set=function(T,B){var L,N=E.p(T),M="set"+(this.$u?"UTC":""),A=(L={},L[c]=M+"Date",L[C]=M+"Date",L[h]=M+"Month",L[b]=M+"FullYear",L[u]=M+"Hours",L[o]=M+"Minutes",L[a]=M+"Seconds",L[i]=M+"Milliseconds",L)[N],Z=N===c?this.$D+(B-this.$W):B;if(N===h||N===b){var H=this.clone().set(C,1);H.$d[A](Z),H.init(),this.$d=H.set(C,Math.min(this.$D,H.daysInMonth())).$d}else A&&this.$d[A](Z);return this.init(),this},$.set=function(T,B){return this.clone().$set(T,B)},$.get=function(T){return this[E.p(T)]()},$.add=function(T,B){var L,N=this;T=Number(T);var M=E.p(B),A=function(J){var fe=U(N);return E.w(fe.date(fe.date()+Math.round(J*T)),N)};if(M===h)return this.set(h,this.$M+T);if(M===b)return this.set(b,this.$y+T);if(M===c)return A(1);if(M===x)return A(7);var Z=(L={},L[o]=r,L[u]=l,L[a]=n,L)[M]||1,H=this.$d.getTime()+T*Z;return E.w(H,this)},$.subtract=function(T,B){return this.add(-1*T,B)},$.format=function(T){var B=this,L=this.$locale();if(!this.isValid())return L.invalidDate||w;var N=T||"YYYY-MM-DDTHH:mm:ssZ",M=E.z(this),A=this.$H,Z=this.$m,H=this.$M,J=L.weekdays,fe=L.months,je=function(ve,yt,Bn,Un){return ve&&(ve[yt]||ve(B,N))||Bn[yt].slice(0,Un)},Te=function(ve){return E.s(A%12||12,ve,"0")},He=L.meridiem||function(ve,yt,Bn){var Un=ve<12?"AM":"PM";return Bn?Un.toLowerCase():Un},Et={YY:String(this.$y).slice(-2),YYYY:this.$y,M:H+1,MM:E.s(H+1,2,"0"),MMM:je(L.monthsShort,H,fe,3),MMMM:je(fe,H),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:je(L.weekdaysMin,this.$W,J,2),ddd:je(L.weekdaysShort,this.$W,J,3),dddd:J[this.$W],H:String(A),HH:E.s(A,2,"0"),h:Te(1),hh:Te(2),a:He(A,Z,!0),A:He(A,Z,!1),m:String(Z),mm:E.s(Z,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:M};return N.replace(p,function(ve,yt){return yt||Et[ve]||M.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(T,B,L){var N,M=E.p(B),A=U(T),Z=(A.utcOffset()-this.utcOffset())*r,H=this-A,J=E.m(this,A);return J=(N={},N[b]=J/12,N[h]=J,N[f]=J/3,N[x]=(H-Z)/6048e5,N[c]=(H-Z)/864e5,N[u]=H/l,N[o]=H/r,N[a]=H/n,N)[M]||H,L?J:E.a(J)},$.daysInMonth=function(){return this.endOf(h).$D},$.$locale=function(){return P[this.$L]},$.locale=function(T,B){if(!T)return this.$L;var L=this.clone(),N=D(T,B,!0);return N&&(L.$L=N),L},$.clone=function(){return E.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},R}(),Ne=Y.prototype;return U.prototype=Ne,[["$ms",i],["$s",a],["$m",o],["$H",u],["$W",c],["$M",h],["$y",b],["$D",C]].forEach(function(R){Ne[R[1]]=function($){return this.$g($,R[0],R[1])}}),U.extend=function(R,$){return R.$i||(R($,Y,U),R.$i=!0),U},U.locale=D,U.isDayjs=O,U.unix=function(R){return U(1e3*R)},U.en=P[k],U.Ls=P,U.p={},U})})(qd);var e7=qd.exports;const L2=Os(e7);function t7(e){return s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"flex-1 flex",children:(e==null?void 0:e.index)%2===0&&s.jsxs(s.Fragment,{children:[s.jsx("img",{className:"inline h-10 w-10 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),s.jsxs("div",{className:"inline-block text-sm bg-[#D1D5DB] text-gray-700 p-2 rounded-lg shadow-xl",children:[s.jsx("div",{children:e==null?void 0:e.message}),s.jsx("div",{className:"block text-xs relative top-8 text-gray-600",children:L2(e==null?void 0:e.createdAt).format("DD-MM-YYYY hh:mm:ss A")})]})]})}),s.jsx("div",{className:"flex-1 flex",children:(e==null?void 0:e.index)%2!==0&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"inline-block text-sm bg-green-500 text-white p-2 rounded-lg shadow-xl",children:[s.jsx("div",{children:e==null?void 0:e.message}),s.jsx("div",{className:"block text-xs relative top-8 text-gray-600",children:L2(e==null?void 0:e.createdAt).format("DD-MM-YYYY hh:mm:ss A")})]}),s.jsx("img",{className:"inline h-10 w-10 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"})]})})]})}function n7(){const e=[{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."}];return s.jsxs(s.Fragment,{children:[s.jsx(ge,{code:`import React from 'react'
import CodeView from './Common/CodeView'
import { RiChatSmile2Line, RiSendPlane2Fill } from 'react-icons/ri'
import dayjs from 'dayjs'

// CARD COMPONENT
function ChatCard(props) {
  return (
    <div className='flex'>
      <div className='flex-1 flex'>
        {props?.index % 2 === 0 && <>
          <img
            className="inline h-10 w-10 rounded-full"
            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan_Abromov"
          />
          {/* <div className='inline-block text-sm bg-green-500 text-white p-2 rounded-lg shadow-xl'> */}
          <div className='inline-block text-sm bg-[#D1D5DB] text-gray-700 p-2 rounded-lg shadow-xl'>

            <div>{props?.message}</div>
            <div className='block text-xs relative top-8 text-gray-600'>{dayjs(props?.createdAt).format('DD-MM-YYYY hh:mm:ss A')}</div>

          </div>

        </>}
      </div>
      <div className='flex-1 flex'>
        {props?.index % 2 !== 0 && <>
          {/* <div className='inline-block text-sm bg-[#D1D5DB] text-gray-700 p-2 rounded-lg shadow-xl'> */}
          <div className='inline-block text-sm bg-green-500 text-white p-2 rounded-lg shadow-xl'>

            <div>{props?.message}</div>
            <div className='block text-xs relative top-8 text-gray-600'>{dayjs(props?.createdAt).format('DD-MM-YYYY hh:mm:ss A')}</div>

          </div>
          <img
            className="inline h-10 w-10 rounded-full"
            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan_Abromov"
          />
        </>}
      </div>
    </div>
  )
}


function Chat() {

  const dataList = [
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
    { createdAt: '10-02-2022', message: 'This is a simple dummy message to show the default behaviour of the message.' },
  ]

  return (
    <><div className=' h-auto w-auto fixed bottom-10 right-10' >
    <dialog className='relative h-4/5 w-1/2' id="d">
      <div className='sticky top-0'>
        <button onClick={() => d.close()} className='absolute top-2 right-3 text-xl p-2 w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center'>x</button>
        <div className='flex'>
          <div className='font-serif'>Message</div>
        </div>
      </div>
      <div className='mt-10'></div>
      {
        dataList?.map((data, index) => (
          <>
            <ChatCard message={data?.message} from={data?.from} index={index} />
            <div className='mt-10'></div>
          </>
        ))
      }
      <form className="mt-2 sticky bottom-0">
        <input

          className="flex h-10 w-full rounded-md border bg-[#eff0f1] border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="enter message"
        ></input>
        <button type='submit' className='absolute top-0 right-0 text-gray-500 h-10 flex justify-center items-center px-2 rounded-md cursor-pointer hover:scale-105'><RiSendPlane2Fill className="inline ml-1 text-2xl hover:scale-105" /></button>
        {/* <button type='submit' className='absolute top-0 right-0 bg-green-500 text-white h-10 flex justify-center items-center px-2 rounded-md cursor-pointer hover:scale-105'>Send <RiSendPlane2Fill className="inline ml-1" /></button> */}
      </form>
    </dialog>

    {/* QUICK ACCESS BUTTON */}
    <div onClick={() => d.showModal()}
      className={'bg-green-500 fixed bottom-10 right-10 h-16 w-16 rounded-full  flex flex-col justify-center items-center cursor-pointer shadow-2xl text-white font-semibold border-2 border-white'}
      href="" >
      <RiChatSmile2Line className='text-4xl' />
    </div>
  </div>


</>
)
}

export default Chat`}),s.jsxs("div",{className:" h-auto w-auto fixed bottom-10 right-10",children:[s.jsxs("dialog",{className:"relative h-4/5 w-1/2",id:"d",children:[s.jsxs("div",{className:"sticky top-0",children:[s.jsx("button",{onClick:()=>d.close(),className:"absolute top-2 right-3 text-xl p-2 w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-red-500 font-semibold flex justify-center items-center",children:"x"}),s.jsx("div",{className:"flex",children:s.jsx("div",{className:"font-serif",children:"Message"})})]}),s.jsx("div",{className:"mt-10"}),e==null?void 0:e.map((t,n)=>s.jsxs(s.Fragment,{children:[s.jsx(t7,{message:t==null?void 0:t.message,from:t==null?void 0:t.from,index:n}),s.jsx("div",{className:"mt-10"})]})),s.jsxs("form",{className:"mt-2 sticky bottom-0",children:[s.jsx("input",{className:"flex h-10 w-full rounded-md border bg-[#eff0f1] border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"enter message"}),s.jsx("button",{type:"submit",className:"absolute top-0 right-0 text-gray-500 h-10 flex justify-center items-center px-2 rounded-md cursor-pointer hover:scale-105",children:s.jsx(A5,{className:"inline ml-1 text-2xl hover:scale-105"})})]})]}),s.jsx("div",{onClick:()=>d.showModal(),className:"bg-green-500 fixed bottom-10 right-10 h-16 w-16 rounded-full  flex flex-col justify-center items-center cursor-pointer shadow-2xl text-white font-semibold border-2 border-white",href:"",children:s.jsx(L5,{className:"text-4xl"})})]})]})}function r7(){const[e,t]=j.useState(!1);nd();const n=[{icon:s.jsx(Fr,{size:14}),menuName:"Components",path:null,subMenuStatus:!0,subMenu:[{menuName:"Button",path:"/button",subMenu:[]},{menuName:"Avatar",path:"/avatar",subMenu:[]},{menuName:"Card",path:"/card",subMenu:[]},{menuName:"Signup",path:"/signup",subMenu:[]},{menuName:"Signin",path:"/signin",subMenu:[]},{menuName:"Input",path:"/input",subMenu:[]},{menuName:"Chat",path:"/chat",subMenu:[]}]},{icon:s.jsx(Fr,{size:14}),menuName:"Pages",path:null,subMenuStatus:!0,subMenu:[{menuName:"Blog Page",path:"/blog-page",subMenu:[]},{menuName:"AboutUs Page",path:"/aboutus-page",subMenu:[]},{menuName:"404 Page",path:"/error404-page",subMenu:[]},{menuName:"Landing Page",path:"/landing-page",subMenu:[]},{menuName:"Pricing Page",path:"/pricing-page",subMenu:[]},{menuName:"Contact Page",path:"/contact-page",subMenu:[]},{menuName:"Table Page",path:"/table-page",subMenu:[]}]},{icon:s.jsx(Fr,{size:14}),menuName:"Layout",path:null,subMenuStatus:!0,subMenu:[{menuName:"Bare Layout",path:"/bare-layout",subMenu:[]}]},{icon:s.jsx(Fr,{size:14}),menuName:"Functions",path:null,subMenuStatus:!0,subMenu:[{menuName:"Axio Interceptors",path:"/axiosinterceptors",subMenu:[]},{menuName:"PowerUps",path:"/powerups",subMenu:[]},{menuName:"ScrollHandle",path:"/scroll-handle",subMenu:[]}]},{icon:s.jsx(Fr,{size:14}),menuName:"Meta Data",path:null,subMenuStatus:!0,subMenu:[{menuName:"Technologies",path:"/technologies",subMenu:[]},{menuName:"Resources",path:"/resources",subMenu:[]},{menuName:"Libraries",path:"/libraries",subMenu:[]},{menuName:"Essentials",path:"/essentials",subMenu:[]}]}];return s.jsxs("div",{children:[s.jsxs("div",{className:"md:hidden",children:[!e&&s.jsx("button",{onClick:()=>t(!0),type:"button",className:"inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ",children:s.jsx("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})}),e&&s.jsx("button",{onClick:()=>t(!1),type:"button",className:"inline-flex items-center  mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:s.jsx("span",{className:"px-4 py-2 rounded-lg  font-semibold hover:bg-gray-100",children:"X"})})]}),s.jsx("div",{className:"p-4 sm:ml-64 h-screen overflow-x-hidden overflow-y-auto",children:s.jsxs(ld,{children:[s.jsx(ee,{path:"/test/:id",element:s.jsx(T5,{})}),s.jsx(ee,{path:"/",element:s.jsx(Zc,{})}),s.jsx(ee,{path:"/button",element:s.jsx(q3,{})}),s.jsx(ee,{path:"/avatar",element:s.jsx(Dp,{})}),s.jsx(ee,{path:"/card",element:s.jsx(Zc,{})}),s.jsx(ee,{path:"/signup",element:s.jsx(Ip,{})}),s.jsx(ee,{path:"/signin",element:s.jsx(zp,{})}),s.jsx(ee,{path:"/input",element:s.jsx(k5,{})}),s.jsx(ee,{path:"/chat",element:s.jsx(n7,{})}),s.jsx(ee,{path:"/blog-page",element:s.jsx(Vp,{})}),s.jsx(ee,{path:"/aboutus-page",element:s.jsx(U5,{})}),s.jsx(ee,{path:"/error404-page",element:s.jsx(Z5,{})}),s.jsx(ee,{path:"/landing-page",element:s.jsx(H5,{})}),s.jsx(ee,{path:"/pricing-page",element:s.jsx(Y5,{})}),s.jsx(ee,{path:"/contact-page",element:s.jsx(Q5,{})}),s.jsx(ee,{path:"/table-page",element:s.jsx(X5,{})}),s.jsx(ee,{path:"/bare-layout",element:s.jsx(E5,{})}),s.jsx(ee,{path:"/axiosinterceptors",element:s.jsx(O5,{})}),s.jsx(ee,{path:"/powerups",element:s.jsx(F5,{})}),s.jsx(ee,{path:"/scroll-handle",element:s.jsx(J5,{})}),s.jsx(ee,{path:"/technologies",element:s.jsx(D5,{})}),s.jsx(ee,{path:"/resources",element:s.jsx(I5,{})}),s.jsx(ee,{path:"/libraries",element:s.jsx(z5,{})}),s.jsx(ee,{path:"/essentials",element:s.jsx(R5,{})})]})}),s.jsxs("aside",{className:`absolute left-0 top-10 transition-all z-2 flex w-screen md:w-64 md:h-screen md:px-5 md:py-8 ${e?"h-[80vh]":"h-0"} flex-col  border-r bg-gray-200 ${e&&"px-5 py-8"} overflow-hidden`,children:[s.jsx("a",{href:"#",children:s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("div",{className:"mt-6 flex flex-1 flex-col justify-between",children:s.jsx("nav",{className:"-mx-3 space-y-6 ",children:s.jsx("div",{className:"space-y-3 ",children:n==null?void 0:n.map((r,l)=>{var i;return s.jsx(P5,{setshowSidebar:t,title:r.menuName,path:r==null?void 0:r.path,subMenu:r==null?void 0:r.subMenu,subMenuStatus:((i=r==null?void 0:r.subMenu)==null?void 0:i.length)!=0,icon:s.jsx($5,{size:14})},`sidebar_menu${l}`)})})})})]})]})}function l7(){const[e,t]=j.useState(!0),n={showCodeButton:e,setshowCodeButton:t};return s.jsx(s.Fragment,{children:s.jsx(W1.Provider,{value:n,children:s.jsx("div",{onDoubleClick:()=>t(!e),children:s.jsx(Fp,{children:s.jsx(r7,{})})})})})}na.createRoot(document.getElementById("root")).render(s.jsx(Ve.StrictMode,{children:s.jsx(l7,{})}))});export default s7();
