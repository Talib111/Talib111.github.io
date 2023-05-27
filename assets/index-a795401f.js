var Jd=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var qx=Jd((De,$e)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function no(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var M2={exports:{}},Ms={},_2={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),e3=Symbol.for("react.portal"),t3=Symbol.for("react.fragment"),n3=Symbol.for("react.strict_mode"),r3=Symbol.for("react.profiler"),l3=Symbol.for("react.provider"),s3=Symbol.for("react.context"),i3=Symbol.for("react.forward_ref"),a3=Symbol.for("react.suspense"),o3=Symbol.for("react.memo"),u3=Symbol.for("react.lazy"),Nu=Symbol.iterator;function c3(e){return e===null||typeof e!="object"?null:(e=Nu&&e[Nu]||e["@@iterator"],typeof e=="function"?e:null)}var T2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P2=Object.assign,L2={};function dr(e,t,n){this.props=e,this.context=t,this.refs=L2,this.updater=n||T2}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function F2(){}F2.prototype=dr.prototype;function ro(e,t,n){this.props=e,this.context=t,this.refs=L2,this.updater=n||T2}var lo=ro.prototype=new F2;lo.constructor=ro;P2(lo,dr.prototype);lo.isPureReactComponent=!0;var ju=Array.isArray,I2=Object.prototype.hasOwnProperty,so={current:null},A2={key:!0,ref:!0,__self:!0,__source:!0};function O2(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)I2.call(t,r)&&!A2.hasOwnProperty(r)&&(l[r]=t[r]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var u=Array(o),c=0;c<o;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:ml,type:e,key:i,ref:a,props:l,_owner:so.current}}function d3(e,t){return{$$typeof:ml,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function io(e){return typeof e=="object"&&e!==null&&e.$$typeof===ml}function f3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ku=/\/+/g;function xi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f3(""+e.key):t.toString(36)}function Rl(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ml:case e3:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+xi(a,0):r,ju(l)?(n="",e!=null&&(n=e.replace(ku,"$&/")+"/"),Rl(l,t,n,"",function(c){return c})):l!=null&&(io(l)&&(l=d3(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(ku,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",ju(e))for(var o=0;o<e.length;o++){i=e[o];var u=r+xi(i,o);a+=Rl(i,t,n,u,l)}else if(u=c3(e),typeof u=="function")for(e=u.call(e),o=0;!(i=e.next()).done;)i=i.value,u=r+xi(i,o++),a+=Rl(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function wl(e,t,n){if(e==null)return e;var r=[],l=0;return Rl(e,r,"","",function(i){return t.call(n,i,l++)}),r}function m3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Vl={transition:null},p3={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Vl,ReactCurrentOwner:so};$.Children={map:wl,forEach:function(e,t,n){wl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wl(e,function(){t++}),t},toArray:function(e){return wl(e,function(t){return t})||[]},only:function(e){if(!io(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=dr;$.Fragment=t3;$.Profiler=r3;$.PureComponent=ro;$.StrictMode=n3;$.Suspense=a3;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p3;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=P2({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=so.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)I2.call(t,u)&&!A2.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){o=Array(u);for(var c=0;c<u;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:ml,type:e.type,key:l,ref:i,props:r,_owner:a}};$.createContext=function(e){return e={$$typeof:s3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l3,_context:e},e.Consumer=e};$.createElement=O2;$.createFactory=function(e){var t=O2.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:i3,render:e}};$.isValidElement=io;$.lazy=function(e){return{$$typeof:u3,_payload:{_status:-1,_result:e},_init:m3}};$.memo=function(e,t){return{$$typeof:o3,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Vl.transition;Vl.transition={};try{e()}finally{Vl.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return je.current.useCallback(e,t)};$.useContext=function(e){return je.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return je.current.useDeferredValue(e)};$.useEffect=function(e,t){return je.current.useEffect(e,t)};$.useId=function(){return je.current.useId()};$.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return je.current.useMemo(e,t)};$.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};$.useRef=function(e){return je.current.useRef(e)};$.useState=function(e){return je.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return je.current.useTransition()};$.version="18.2.0";_2.exports=$;var C=_2.exports;const Te=no(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h3=C,x3=Symbol.for("react.element"),g3=Symbol.for("react.fragment"),v3=Object.prototype.hasOwnProperty,y3=h3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b3={key:!0,ref:!0,__self:!0,__source:!0};function D2(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)v3.call(t,r)&&!b3.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:x3,type:e,key:i,ref:a,props:l,_owner:y3.current}}Ms.Fragment=g3;Ms.jsx=D2;Ms.jsxs=D2;M2.exports=Ms;var s=M2.exports,Qi={},$2={exports:{}},Ve={},z2={exports:{}},R2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,A){var O=S.length;S.push(A);e:for(;0<O;){var K=O-1>>>1,ne=S[K];if(0<l(ne,A))S[K]=A,S[O]=ne,O=K;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var A=S[0],O=S.pop();if(O!==A){S[0]=O;e:for(var K=0,ne=S.length,Je=ne>>>1;K<Je;){var ut=2*(K+1)-1,nn=S[ut],ct=ut+1,rn=S[ct];if(0>l(nn,O))ct<ne&&0>l(rn,nn)?(S[K]=rn,S[ct]=O,K=ct):(S[K]=nn,S[ut]=O,K=ut);else if(ct<ne&&0>l(rn,O))S[K]=rn,S[ct]=O,K=ct;else break e}}return A}function l(S,A){var O=S.sortIndex-A.sortIndex;return O!==0?O:S.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var u=[],c=[],p=1,h=null,f=3,y=!1,w=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(S){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=S)r(c),A.sortIndex=A.expirationTime,t(u,A);else break;A=n(c)}}function v(S){if(b=!1,x(S),!w)if(n(u)!==null)w=!0,Fn(N);else{var A=n(c);A!==null&&In(v,A.startTime-S)}}function N(S,A){w=!1,b&&(b=!1,m(P),P=-1),y=!0;var O=f;try{for(x(A),h=n(u);h!==null&&(!(h.expirationTime>A)||S&&!R());){var K=h.callback;if(typeof K=="function"){h.callback=null,f=h.priorityLevel;var ne=K(h.expirationTime<=A);A=e.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(u)&&r(u),x(A)}else r(u);h=n(u)}if(h!==null)var Je=!0;else{var ut=n(c);ut!==null&&In(v,ut.startTime-A),Je=!1}return Je}finally{h=null,f=O,y=!1}}var M=!1,_=null,P=-1,Z=5,L=-1;function R(){return!(e.unstable_now()-L<Z)}function Ee(){if(_!==null){var S=e.unstable_now();L=S;var A=!0;try{A=_(!0,S)}finally{A?Xe():(M=!1,_=null)}}else M=!1}var Xe;if(typeof d=="function")Xe=function(){d(Ee)};else if(typeof MessageChannel<"u"){var bl=new MessageChannel,di=bl.port2;bl.port1.onmessage=Ee,Xe=function(){di.postMessage(null)}}else Xe=function(){k(Ee,0)};function Fn(S){_=S,M||(M=!0,Xe())}function In(S,A){P=k(function(){S(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Fn(N))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(S){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var O=f;f=A;try{return S()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var O=f;f=S;try{return A()}finally{f=O}},e.unstable_scheduleCallback=function(S,A,O){var K=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?K+O:K):O=K,S){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=O+ne,S={id:p++,callback:A,priorityLevel:S,startTime:O,expirationTime:ne,sortIndex:-1},O>K?(S.sortIndex=O,t(c,S),n(u)===null&&S===n(c)&&(b?(m(P),P=-1):b=!0,In(v,O-K))):(S.sortIndex=ne,t(u,S),w||y||(w=!0,Fn(N))),S},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(S){var A=f;return function(){var O=f;f=A;try{return S.apply(this,arguments)}finally{f=O}}}})(R2);z2.exports=R2;var w3=z2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V2=C,Re=w3;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B2=new Set,Hr={};function kn(e,t){rr(e,t),rr(e+"Capture",t)}function rr(e,t){for(Hr[e]=t,e=0;e<t.length;e++)B2.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ki=Object.prototype.hasOwnProperty,C3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Su={},Eu={};function N3(e){return Ki.call(Eu,e)?!0:Ki.call(Su,e)?!1:C3.test(e)?Eu[e]=!0:(Su[e]=!0,!1)}function j3(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k3(e,t,n,r){if(t===null||typeof t>"u"||j3(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var ao=/[\-:]([a-z])/g;function oo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ao,oo);xe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ao,oo);xe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ao,oo);xe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function uo(e,t,n,r){var l=xe.hasOwnProperty(t)?xe[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(k3(t,n,l,r)&&(n=null),r||l===null?N3(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=V2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cl=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),co=Symbol.for("react.strict_mode"),Xi=Symbol.for("react.profiler"),U2=Symbol.for("react.provider"),Z2=Symbol.for("react.context"),fo=Symbol.for("react.forward_ref"),Ji=Symbol.for("react.suspense"),ea=Symbol.for("react.suspense_list"),mo=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),H2=Symbol.for("react.offscreen"),Mu=Symbol.iterator;function br(e){return e===null||typeof e!="object"?null:(e=Mu&&e[Mu]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,gi;function Tr(e){if(gi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gi=t&&t[1]||""}return`
`+gi+e}var vi=!1;function yi(e,t){if(!e||vi)return"";vi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,o=i.length-1;1<=a&&0<=o&&l[a]!==i[o];)o--;for(;1<=a&&0<=o;a--,o--)if(l[a]!==i[o]){if(a!==1||o!==1)do if(a--,o--,0>o||l[a]!==i[o]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=o);break}}}finally{vi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function S3(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=yi(e.type,!1),e;case 11:return e=yi(e.type.render,!1),e;case 1:return e=yi(e.type,!0),e;default:return""}}function ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case Dn:return"Portal";case Xi:return"Profiler";case co:return"StrictMode";case Ji:return"Suspense";case ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Z2:return(e.displayName||"Context")+".Consumer";case U2:return(e._context.displayName||"Context")+".Provider";case fo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mo:return t=e.displayName||null,t!==null?t:ta(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return ta(e(t))}catch{}}return null}function E3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ta(t);case 8:return t===co?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function W2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function M3(e){var t=W2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nl(e){e._valueTracker||(e._valueTracker=M3(e))}function q2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W2(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function na(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _u(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function G2(e,t){t=t.checked,t!=null&&uo(e,"checked",t,!1)}function ra(e,t){G2(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?la(e,t.type,n):t.hasOwnProperty("defaultValue")&&la(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function la(e,t,n){(t!=="number"||es(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pr=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Pr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function Y2(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Q2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ia(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Q2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jl,K2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jl=jl||document.createElement("div"),jl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_3=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){_3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function X2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function J2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=X2(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var T3=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(e,t){if(t){if(T3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function oa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ua=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ca=null,Kn=null,Xn=null;function Fu(e){if(e=xl(e)){if(typeof ca!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Fs(t),ca(e.stateNode,e.type,t))}}function e0(e){Kn?Xn?Xn.push(e):Xn=[e]:Kn=e}function t0(){if(Kn){var e=Kn,t=Xn;if(Xn=Kn=null,Fu(e),t)for(e=0;e<t.length;e++)Fu(t[e])}}function n0(e,t){return e(t)}function r0(){}var bi=!1;function l0(e,t,n){if(bi)return e(t,n);bi=!0;try{return n0(e,t,n)}finally{bi=!1,(Kn!==null||Xn!==null)&&(r0(),t0())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Fs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var da=!1;if(St)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){da=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{da=!1}function P3(e,t,n,r,l,i,a,o,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Ar=!1,ts=null,ns=!1,fa=null,L3={onError:function(e){Ar=!0,ts=e}};function F3(e,t,n,r,l,i,a,o,u){Ar=!1,ts=null,P3.apply(L3,arguments)}function I3(e,t,n,r,l,i,a,o,u){if(F3.apply(this,arguments),Ar){if(Ar){var c=ts;Ar=!1,ts=null}else throw Error(j(198));ns||(ns=!0,fa=c)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Iu(e){if(Sn(e)!==e)throw Error(j(188))}function A3(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Iu(l),e;if(i===r)return Iu(l),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,o=l.child;o;){if(o===n){a=!0,n=l,r=i;break}if(o===r){a=!0,r=l,n=i;break}o=o.sibling}if(!a){for(o=i.child;o;){if(o===n){a=!0,n=i,r=l;break}if(o===r){a=!0,r=i,n=l;break}o=o.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function i0(e){return e=A3(e),e!==null?a0(e):null}function a0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=a0(e);if(t!==null)return t;e=e.sibling}return null}var o0=Re.unstable_scheduleCallback,Au=Re.unstable_cancelCallback,O3=Re.unstable_shouldYield,D3=Re.unstable_requestPaint,le=Re.unstable_now,$3=Re.unstable_getCurrentPriorityLevel,ho=Re.unstable_ImmediatePriority,u0=Re.unstable_UserBlockingPriority,rs=Re.unstable_NormalPriority,z3=Re.unstable_LowPriority,c0=Re.unstable_IdlePriority,_s=null,ht=null;function R3(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(_s,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:U3,V3=Math.log,B3=Math.LN2;function U3(e){return e>>>=0,e===0?32:31-(V3(e)/B3|0)|0}var kl=64,Sl=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ls(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~l;o!==0?r=Lr(o):(i&=a,i!==0&&(r=Lr(i)))}else a=n&~l,a!==0?r=Lr(a):i!==0&&(r=Lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),l=1<<n,r|=e[n],t&=~l;return r}function Z3(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H3(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-it(i),o=1<<a,u=l[a];u===-1?(!(o&n)||o&r)&&(l[a]=Z3(o,t)):u<=t&&(e.expiredLanes|=o),i&=~o}}function ma(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function d0(){var e=kl;return kl<<=1,!(kl&4194240)&&(kl=64),e}function wi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function W3(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-it(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function xo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var B=0;function f0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var m0,go,p0,h0,x0,pa=!1,El=[],Rt=null,Vt=null,Bt=null,Gr=new Map,Yr=new Map,At=[],q3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(t.pointerId)}}function Cr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=xl(t),t!==null&&go(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function G3(e,t,n,r,l){switch(t){case"focusin":return Rt=Cr(Rt,e,t,n,r,l),!0;case"dragenter":return Vt=Cr(Vt,e,t,n,r,l),!0;case"mouseover":return Bt=Cr(Bt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Gr.set(i,Cr(Gr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Yr.set(i,Cr(Yr.get(i)||null,e,t,n,r,l)),!0}return!1}function g0(e){var t=cn(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=s0(n),t!==null){e.blockedOn=t,x0(e.priority,function(){p0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ua=r,n.target.dispatchEvent(r),ua=null}else return t=xl(n),t!==null&&go(t),e.blockedOn=n,!1;t.shift()}return!0}function Du(e,t,n){Bl(e)&&n.delete(t)}function Y3(){pa=!1,Rt!==null&&Bl(Rt)&&(Rt=null),Vt!==null&&Bl(Vt)&&(Vt=null),Bt!==null&&Bl(Bt)&&(Bt=null),Gr.forEach(Du),Yr.forEach(Du)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,pa||(pa=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Y3)))}function Qr(e){function t(l){return Nr(l,e)}if(0<El.length){Nr(El[0],e);for(var n=1;n<El.length;n++){var r=El[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&Nr(Rt,e),Vt!==null&&Nr(Vt,e),Bt!==null&&Nr(Bt,e),Gr.forEach(t),Yr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)g0(n),n.blockedOn===null&&At.shift()}var Jn=Tt.ReactCurrentBatchConfig,ss=!0;function Q3(e,t,n,r){var l=B,i=Jn.transition;Jn.transition=null;try{B=1,vo(e,t,n,r)}finally{B=l,Jn.transition=i}}function K3(e,t,n,r){var l=B,i=Jn.transition;Jn.transition=null;try{B=4,vo(e,t,n,r)}finally{B=l,Jn.transition=i}}function vo(e,t,n,r){if(ss){var l=ha(e,t,n,r);if(l===null)Pi(e,t,r,is,n),Ou(e,r);else if(G3(l,e,t,n,r))r.stopPropagation();else if(Ou(e,r),t&4&&-1<q3.indexOf(e)){for(;l!==null;){var i=xl(l);if(i!==null&&m0(i),i=ha(e,t,n,r),i===null&&Pi(e,t,r,is,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Pi(e,t,r,null,n)}}var is=null;function ha(e,t,n,r){if(is=null,e=po(r),e=cn(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=s0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return is=e,null}function v0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($3()){case ho:return 1;case u0:return 4;case rs:case z3:return 16;case c0:return 536870912;default:return 16}default:return 16}}var Dt=null,yo=null,Ul=null;function y0(){if(Ul)return Ul;var e,t=yo,n=t.length,r,l="value"in Dt?Dt.value:Dt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Ul=l.slice(e,1<r?1-r:void 0)}function Zl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ml(){return!0}function $u(){return!1}function Be(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ml:$u,this.isPropagationStopped=$u,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Be(fr),hl=te({},fr,{view:0,detail:0}),X3=Be(hl),Ci,Ni,jr,Ts=te({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Ci=e.screenX-jr.screenX,Ni=e.screenY-jr.screenY):Ni=Ci=0,jr=e),Ci)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),zu=Be(Ts),J3=te({},Ts,{dataTransfer:0}),ef=Be(J3),tf=te({},hl,{relatedTarget:0}),ji=Be(tf),nf=te({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),rf=Be(nf),lf=te({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=Be(lf),af=te({},fr,{data:0}),Ru=Be(af),of={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function df(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cf[e])?!!t[e]:!1}function wo(){return df}var ff=te({},hl,{key:function(e){if(e.key){var t=of[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wo,charCode:function(e){return e.type==="keypress"?Zl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mf=Be(ff),pf=te({},Ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vu=Be(pf),hf=te({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wo}),xf=Be(hf),gf=te({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=Be(gf),yf=te({},Ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bf=Be(yf),wf=[9,13,27,32],Co=St&&"CompositionEvent"in window,Or=null;St&&"documentMode"in document&&(Or=document.documentMode);var Cf=St&&"TextEvent"in window&&!Or,b0=St&&(!Co||Or&&8<Or&&11>=Or),Bu=String.fromCharCode(32),Uu=!1;function w0(e,t){switch(e){case"keyup":return wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Nf(e,t){switch(e){case"compositionend":return C0(t);case"keypress":return t.which!==32?null:(Uu=!0,Bu);case"textInput":return e=t.data,e===Bu&&Uu?null:e;default:return null}}function jf(e,t){if(zn)return e==="compositionend"||!Co&&w0(e,t)?(e=y0(),Ul=yo=Dt=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return b0&&t.locale!=="ko"?null:t.data;default:return null}}var kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kf[e.type]:t==="textarea"}function N0(e,t,n,r){e0(r),t=as(t,"onChange"),0<t.length&&(n=new bo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dr=null,Kr=null;function Sf(e){I0(e,0)}function Ps(e){var t=Bn(e);if(q2(t))return e}function Ef(e,t){if(e==="change")return t}var j0=!1;if(St){var ki;if(St){var Si="oninput"in document;if(!Si){var Hu=document.createElement("div");Hu.setAttribute("oninput","return;"),Si=typeof Hu.oninput=="function"}ki=Si}else ki=!1;j0=ki&&(!document.documentMode||9<document.documentMode)}function Wu(){Dr&&(Dr.detachEvent("onpropertychange",k0),Kr=Dr=null)}function k0(e){if(e.propertyName==="value"&&Ps(Kr)){var t=[];N0(t,Kr,e,po(e)),l0(Sf,t)}}function Mf(e,t,n){e==="focusin"?(Wu(),Dr=t,Kr=n,Dr.attachEvent("onpropertychange",k0)):e==="focusout"&&Wu()}function _f(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ps(Kr)}function Tf(e,t){if(e==="click")return Ps(t)}function Pf(e,t){if(e==="input"||e==="change")return Ps(t)}function Lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Lf;function Xr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ki.call(t,l)||!ot(e[l],t[l]))return!1}return!0}function qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gu(e,t){var n=qu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qu(n)}}function S0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?S0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function E0(){for(var e=window,t=es();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=es(e.document)}return t}function No(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ff(e){var t=E0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&S0(n.ownerDocument.documentElement,n)){if(r!==null&&No(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Gu(n,i);var a=Gu(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var If=St&&"documentMode"in document&&11>=document.documentMode,Rn=null,xa=null,$r=null,ga=!1;function Yu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ga||Rn==null||Rn!==es(r)||(r=Rn,"selectionStart"in r&&No(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Xr($r,r)||($r=r,r=as(xa,"onSelect"),0<r.length&&(t=new bo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rn)))}function _l(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vn={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},Ei={},M0={};St&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function Ls(e){if(Ei[e])return Ei[e];if(!Vn[e])return e;var t=Vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in M0)return Ei[e]=t[n];return e}var _0=Ls("animationend"),T0=Ls("animationiteration"),P0=Ls("animationstart"),L0=Ls("transitionend"),F0=new Map,Qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){F0.set(e,t),kn(t,[e])}for(var Mi=0;Mi<Qu.length;Mi++){var _i=Qu[Mi],Af=_i.toLowerCase(),Of=_i[0].toUpperCase()+_i.slice(1);Xt(Af,"on"+Of)}Xt(_0,"onAnimationEnd");Xt(T0,"onAnimationIteration");Xt(P0,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(L0,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Df=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,I3(r,t,void 0,e),e.currentTarget=null}function I0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],u=o.instance,c=o.currentTarget;if(o=o.listener,u!==i&&l.isPropagationStopped())break e;Ku(l,o,c),i=u}else for(a=0;a<r.length;a++){if(o=r[a],u=o.instance,c=o.currentTarget,o=o.listener,u!==i&&l.isPropagationStopped())break e;Ku(l,o,c),i=u}}}if(ns)throw e=fa,ns=!1,fa=null,e}function q(e,t){var n=t[Ca];n===void 0&&(n=t[Ca]=new Set);var r=e+"__bubble";n.has(r)||(A0(t,e,2,!1),n.add(r))}function Ti(e,t,n){var r=0;t&&(r|=4),A0(n,e,r,t)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Tl]){e[Tl]=!0,B2.forEach(function(n){n!=="selectionchange"&&(Df.has(n)||Ti(n,!1,e),Ti(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tl]||(t[Tl]=!0,Ti("selectionchange",!1,t))}}function A0(e,t,n,r){switch(v0(t)){case 1:var l=Q3;break;case 4:l=K3;break;default:l=vo}n=l.bind(null,t,n,e),l=void 0,!da||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Pi(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;o!==null;){if(a=cn(o),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}o=o.parentNode}}r=r.return}l0(function(){var c=i,p=po(n),h=[];e:{var f=F0.get(e);if(f!==void 0){var y=bo,w=e;switch(e){case"keypress":if(Zl(n)===0)break e;case"keydown":case"keyup":y=mf;break;case"focusin":w="focus",y=ji;break;case"focusout":w="blur",y=ji;break;case"beforeblur":case"afterblur":y=ji;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=xf;break;case _0:case T0:case P0:y=rf;break;case L0:y=vf;break;case"scroll":y=X3;break;case"wheel":y=bf;break;case"copy":case"cut":case"paste":y=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Vu}var b=(t&4)!==0,k=!b&&e==="scroll",m=b?f!==null?f+"Capture":null:f;b=[];for(var d=c,x;d!==null;){x=d;var v=x.stateNode;if(x.tag===5&&v!==null&&(x=v,m!==null&&(v=qr(d,m),v!=null&&b.push(el(d,v,x)))),k)break;d=d.return}0<b.length&&(f=new y(f,w,null,n,p),h.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==ua&&(w=n.relatedTarget||n.fromElement)&&(cn(w)||w[Et]))break e;if((y||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?cn(w):null,w!==null&&(k=Sn(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(b=zu,v="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=Vu,v="onPointerLeave",m="onPointerEnter",d="pointer"),k=y==null?f:Bn(y),x=w==null?f:Bn(w),f=new b(v,d+"leave",y,n,p),f.target=k,f.relatedTarget=x,v=null,cn(p)===c&&(b=new b(m,d+"enter",w,n,p),b.target=x,b.relatedTarget=k,v=b),k=v,y&&w)t:{for(b=y,m=w,d=0,x=b;x;x=An(x))d++;for(x=0,v=m;v;v=An(v))x++;for(;0<d-x;)b=An(b),d--;for(;0<x-d;)m=An(m),x--;for(;d--;){if(b===m||m!==null&&b===m.alternate)break t;b=An(b),m=An(m)}b=null}else b=null;y!==null&&Xu(h,f,y,b,!1),w!==null&&k!==null&&Xu(h,k,w,b,!0)}}e:{if(f=c?Bn(c):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var N=Ef;else if(Zu(f))if(j0)N=Pf;else{N=_f;var M=Mf}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=Tf);if(N&&(N=N(e,c))){N0(h,N,n,p);break e}M&&M(e,f,c),e==="focusout"&&(M=f._wrapperState)&&M.controlled&&f.type==="number"&&la(f,"number",f.value)}switch(M=c?Bn(c):window,e){case"focusin":(Zu(M)||M.contentEditable==="true")&&(Rn=M,xa=c,$r=null);break;case"focusout":$r=xa=Rn=null;break;case"mousedown":ga=!0;break;case"contextmenu":case"mouseup":case"dragend":ga=!1,Yu(h,n,p);break;case"selectionchange":if(If)break;case"keydown":case"keyup":Yu(h,n,p)}var _;if(Co)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else zn?w0(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(b0&&n.locale!=="ko"&&(zn||P!=="onCompositionStart"?P==="onCompositionEnd"&&zn&&(_=y0()):(Dt=p,yo="value"in Dt?Dt.value:Dt.textContent,zn=!0)),M=as(c,P),0<M.length&&(P=new Ru(P,e,null,n,p),h.push({event:P,listeners:M}),_?P.data=_:(_=C0(n),_!==null&&(P.data=_)))),(_=Cf?Nf(e,n):jf(e,n))&&(c=as(c,"onBeforeInput"),0<c.length&&(p=new Ru("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=_))}I0(h,t)})}function el(e,t,n){return{instance:e,listener:t,currentTarget:n}}function as(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=qr(e,n),i!=null&&r.unshift(el(e,i,l)),i=qr(e,t),i!=null&&r.push(el(e,i,l))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var o=n,u=o.alternate,c=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&c!==null&&(o=c,l?(u=qr(n,i),u!=null&&a.unshift(el(n,u,o))):l||(u=qr(n,i),u!=null&&a.push(el(n,u,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var $f=/\r\n?/g,zf=/\u0000|\uFFFD/g;function Ju(e){return(typeof e=="string"?e:""+e).replace($f,`
`).replace(zf,"")}function Pl(e,t,n){if(t=Ju(t),Ju(e)!==t&&n)throw Error(j(425))}function os(){}var va=null,ya=null;function ba(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wa=typeof setTimeout=="function"?setTimeout:void 0,Rf=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(Bf)}:wa;function Bf(e){setTimeout(function(){throw e})}function Li(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),pt="__reactFiber$"+mr,tl="__reactProps$"+mr,Et="__reactContainer$"+mr,Ca="__reactEvents$"+mr,Uf="__reactListeners$"+mr,Zf="__reactHandles$"+mr;function cn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tc(e);e!==null;){if(n=e[pt])return n;e=tc(e)}return t}e=n,n=e.parentNode}return null}function xl(e){return e=e[pt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Fs(e){return e[tl]||null}var Na=[],Un=-1;function Jt(e){return{current:e}}function Q(e){0>Un||(e.current=Na[Un],Na[Un]=null,Un--)}function W(e,t){Un++,Na[Un]=e.current,e.current=t}var Qt={},be=Jt(Qt),Pe=Jt(!1),yn=Qt;function lr(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Le(e){return e=e.childContextTypes,e!=null}function us(){Q(Pe),Q(be)}function nc(e,t,n){if(be.current!==Qt)throw Error(j(168));W(be,t),W(Pe,n)}function O0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(j(108,E3(e)||"Unknown",l));return te({},n,r)}function cs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,yn=be.current,W(be,e),W(Pe,Pe.current),!0}function rc(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=O0(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,Q(Pe),Q(be),W(be,e)):Q(Pe),W(Pe,n)}var Ct=null,Is=!1,Fi=!1;function D0(e){Ct===null?Ct=[e]:Ct.push(e)}function Hf(e){Is=!0,D0(e)}function en(){if(!Fi&&Ct!==null){Fi=!0;var e=0,t=B;try{var n=Ct;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,Is=!1}catch(l){throw Ct!==null&&(Ct=Ct.slice(e+1)),o0(ho,en),l}finally{B=t,Fi=!1}}return null}var Zn=[],Hn=0,ds=null,fs=0,We=[],qe=0,bn=null,Nt=1,jt="";function sn(e,t){Zn[Hn++]=fs,Zn[Hn++]=ds,ds=e,fs=t}function $0(e,t,n){We[qe++]=Nt,We[qe++]=jt,We[qe++]=bn,bn=e;var r=Nt;e=jt;var l=32-it(r)-1;r&=~(1<<l),n+=1;var i=32-it(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Nt=1<<32-it(t)+l|n<<l|r,jt=i+e}else Nt=1<<i|n<<l|r,jt=e}function jo(e){e.return!==null&&(sn(e,1),$0(e,1,0))}function ko(e){for(;e===ds;)ds=Zn[--Hn],Zn[Hn]=null,fs=Zn[--Hn],Zn[Hn]=null;for(;e===bn;)bn=We[--qe],We[qe]=null,jt=We[--qe],We[qe]=null,Nt=We[--qe],We[qe]=null}var ze=null,Oe=null,X=!1,st=null;function z0(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Oe=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:Nt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Oe=null,!0):!1;default:return!1}}function ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ka(e){if(X){var t=Oe;if(t){var n=t;if(!lc(e,t)){if(ja(e))throw Error(j(418));t=Ut(n.nextSibling);var r=ze;t&&lc(e,t)?z0(r,n):(e.flags=e.flags&-4097|2,X=!1,ze=e)}}else{if(ja(e))throw Error(j(418));e.flags=e.flags&-4097|2,X=!1,ze=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Ll(e){if(e!==ze)return!1;if(!X)return sc(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ba(e.type,e.memoizedProps)),t&&(t=Oe)){if(ja(e))throw R0(),Error(j(418));for(;t;)z0(e,t),t=Ut(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=ze?Ut(e.stateNode.nextSibling):null;return!0}function R0(){for(var e=Oe;e;)e=Ut(e.nextSibling)}function sr(){Oe=ze=null,X=!1}function So(e){st===null?st=[e]:st.push(e)}var Wf=Tt.ReactCurrentBatchConfig;function rt(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ms=Jt(null),ps=null,Wn=null,Eo=null;function Mo(){Eo=Wn=ps=null}function _o(e){var t=ms.current;Q(ms),e._currentValue=t}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){ps=e,Eo=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(Eo!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(ps===null)throw Error(j(308));Wn=e,ps.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var dn=null;function To(e){dn===null?dn=[e]:dn.push(e)}function V0(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,To(t)):(n.next=l.next,l.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function Po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Mt(e,n)}return l=r.interleaved,l===null?(t.next=t,To(r)):(t.next=l.next,l.next=t),r.interleaved=t,Mt(e,n)}function Hl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xo(e,n)}}function ic(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hs(e,t,n,r){var l=e.updateQueue;It=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var u=o,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var p=e.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=c:o.next=c,p.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;a=0,p=c=u=null,o=i;do{var f=o.lane,y=o.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:y,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,b=o;switch(f=t,y=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){h=w.call(y,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,f=typeof w=="function"?w.call(y,h,f):w,f==null)break e;h=te({},h,f);break e;case 2:It=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=l.effects,f===null?l.effects=[o]:f.push(o))}else y={eventTime:y,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(c=p=y,u=h):p=p.next=y,a|=f;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;f=o,o=f.next,f.next=null,l.lastBaseUpdate=f,l.shared.pending=null}}while(1);if(p===null&&(u=h),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=p,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Cn|=a,e.lanes=a,e.memoizedState=h}}function ac(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(j(191,l));l.call(r)}}}var U0=new V2.Component().refs;function Ea(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var As={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),l=Wt(e),i=kt(r,l);i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,l),t!==null&&(at(t,e,l,r),Hl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),l=Wt(e),i=kt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,l),t!==null&&(at(t,e,l,r),Hl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Wt(e),l=kt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Zt(e,l,r),t!==null&&(at(t,e,r,n),Hl(t,e,r))}};function oc(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Xr(n,r)||!Xr(l,i):!0}function Z0(e,t,n){var r=!1,l=Qt,i=t.contextType;return typeof i=="object"&&i!==null?i=Qe(i):(l=Le(t)?yn:be.current,r=t.contextTypes,i=(r=r!=null)?lr(e,l):Qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=As,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function uc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&As.enqueueReplaceState(t,t.state,null)}function Ma(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=U0,Po(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Qe(i):(i=Le(t)?yn:be.current,l.context=lr(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ea(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&As.enqueueReplaceState(l,l.state,null),hs(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var o=l.refs;o===U0&&(o=l.refs={}),a===null?delete o[i]:o[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Fl(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cc(e){var t=e._init;return t(e._payload)}function H0(e){function t(m,d){if(e){var x=m.deletions;x===null?(m.deletions=[d],m.flags|=16):x.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function l(m,d){return m=qt(m,d),m.index=0,m.sibling=null,m}function i(m,d,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<d?(m.flags|=2,d):x):(m.flags|=2,d)):(m.flags|=1048576,d)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function o(m,d,x,v){return d===null||d.tag!==6?(d=Ri(x,m.mode,v),d.return=m,d):(d=l(d,x),d.return=m,d)}function u(m,d,x,v){var N=x.type;return N===$n?p(m,d,x.props.children,v,x.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ft&&cc(N)===d.type)?(v=l(d,x.props),v.ref=kr(m,d,x),v.return=m,v):(v=Kl(x.type,x.key,x.props,null,m.mode,v),v.ref=kr(m,d,x),v.return=m,v)}function c(m,d,x,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==x.containerInfo||d.stateNode.implementation!==x.implementation?(d=Vi(x,m.mode,v),d.return=m,d):(d=l(d,x.children||[]),d.return=m,d)}function p(m,d,x,v,N){return d===null||d.tag!==7?(d=hn(x,m.mode,v,N),d.return=m,d):(d=l(d,x),d.return=m,d)}function h(m,d,x){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ri(""+d,m.mode,x),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Cl:return x=Kl(d.type,d.key,d.props,null,m.mode,x),x.ref=kr(m,null,d),x.return=m,x;case Dn:return d=Vi(d,m.mode,x),d.return=m,d;case Ft:var v=d._init;return h(m,v(d._payload),x)}if(Pr(d)||br(d))return d=hn(d,m.mode,x,null),d.return=m,d;Fl(m,d)}return null}function f(m,d,x,v){var N=d!==null?d.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return N!==null?null:o(m,d,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Cl:return x.key===N?u(m,d,x,v):null;case Dn:return x.key===N?c(m,d,x,v):null;case Ft:return N=x._init,f(m,d,N(x._payload),v)}if(Pr(x)||br(x))return N!==null?null:p(m,d,x,v,null);Fl(m,x)}return null}function y(m,d,x,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(x)||null,o(d,m,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cl:return m=m.get(v.key===null?x:v.key)||null,u(d,m,v,N);case Dn:return m=m.get(v.key===null?x:v.key)||null,c(d,m,v,N);case Ft:var M=v._init;return y(m,d,x,M(v._payload),N)}if(Pr(v)||br(v))return m=m.get(x)||null,p(d,m,v,N,null);Fl(d,v)}return null}function w(m,d,x,v){for(var N=null,M=null,_=d,P=d=0,Z=null;_!==null&&P<x.length;P++){_.index>P?(Z=_,_=null):Z=_.sibling;var L=f(m,_,x[P],v);if(L===null){_===null&&(_=Z);break}e&&_&&L.alternate===null&&t(m,_),d=i(L,d,P),M===null?N=L:M.sibling=L,M=L,_=Z}if(P===x.length)return n(m,_),X&&sn(m,P),N;if(_===null){for(;P<x.length;P++)_=h(m,x[P],v),_!==null&&(d=i(_,d,P),M===null?N=_:M.sibling=_,M=_);return X&&sn(m,P),N}for(_=r(m,_);P<x.length;P++)Z=y(_,m,P,x[P],v),Z!==null&&(e&&Z.alternate!==null&&_.delete(Z.key===null?P:Z.key),d=i(Z,d,P),M===null?N=Z:M.sibling=Z,M=Z);return e&&_.forEach(function(R){return t(m,R)}),X&&sn(m,P),N}function b(m,d,x,v){var N=br(x);if(typeof N!="function")throw Error(j(150));if(x=N.call(x),x==null)throw Error(j(151));for(var M=N=null,_=d,P=d=0,Z=null,L=x.next();_!==null&&!L.done;P++,L=x.next()){_.index>P?(Z=_,_=null):Z=_.sibling;var R=f(m,_,L.value,v);if(R===null){_===null&&(_=Z);break}e&&_&&R.alternate===null&&t(m,_),d=i(R,d,P),M===null?N=R:M.sibling=R,M=R,_=Z}if(L.done)return n(m,_),X&&sn(m,P),N;if(_===null){for(;!L.done;P++,L=x.next())L=h(m,L.value,v),L!==null&&(d=i(L,d,P),M===null?N=L:M.sibling=L,M=L);return X&&sn(m,P),N}for(_=r(m,_);!L.done;P++,L=x.next())L=y(_,m,P,L.value,v),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?P:L.key),d=i(L,d,P),M===null?N=L:M.sibling=L,M=L);return e&&_.forEach(function(Ee){return t(m,Ee)}),X&&sn(m,P),N}function k(m,d,x,v){if(typeof x=="object"&&x!==null&&x.type===$n&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Cl:e:{for(var N=x.key,M=d;M!==null;){if(M.key===N){if(N=x.type,N===$n){if(M.tag===7){n(m,M.sibling),d=l(M,x.props.children),d.return=m,m=d;break e}}else if(M.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ft&&cc(N)===M.type){n(m,M.sibling),d=l(M,x.props),d.ref=kr(m,M,x),d.return=m,m=d;break e}n(m,M);break}else t(m,M);M=M.sibling}x.type===$n?(d=hn(x.props.children,m.mode,v,x.key),d.return=m,m=d):(v=Kl(x.type,x.key,x.props,null,m.mode,v),v.ref=kr(m,d,x),v.return=m,m=v)}return a(m);case Dn:e:{for(M=x.key;d!==null;){if(d.key===M)if(d.tag===4&&d.stateNode.containerInfo===x.containerInfo&&d.stateNode.implementation===x.implementation){n(m,d.sibling),d=l(d,x.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Vi(x,m.mode,v),d.return=m,m=d}return a(m);case Ft:return M=x._init,k(m,d,M(x._payload),v)}if(Pr(x))return w(m,d,x,v);if(br(x))return b(m,d,x,v);Fl(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,d!==null&&d.tag===6?(n(m,d.sibling),d=l(d,x),d.return=m,m=d):(n(m,d),d=Ri(x,m.mode,v),d.return=m,m=d),a(m)):n(m,d)}return k}var ir=H0(!0),W0=H0(!1),gl={},xt=Jt(gl),nl=Jt(gl),rl=Jt(gl);function fn(e){if(e===gl)throw Error(j(174));return e}function Lo(e,t){switch(W(rl,t),W(nl,e),W(xt,gl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ia(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ia(t,e)}Q(xt),W(xt,t)}function ar(){Q(xt),Q(nl),Q(rl)}function q0(e){fn(rl.current);var t=fn(xt.current),n=ia(t,e.type);t!==n&&(W(nl,e),W(xt,n))}function Fo(e){nl.current===e&&(Q(xt),Q(nl))}var J=Jt(0);function xs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ii=[];function Io(){for(var e=0;e<Ii.length;e++)Ii[e]._workInProgressVersionPrimary=null;Ii.length=0}var Wl=Tt.ReactCurrentDispatcher,Ai=Tt.ReactCurrentBatchConfig,wn=0,ee=null,ie=null,ce=null,gs=!1,zr=!1,ll=0,qf=0;function ge(){throw Error(j(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,l,i){if(wn=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wl.current=e===null||e.memoizedState===null?Kf:Xf,e=n(r,l),zr){i=0;do{if(zr=!1,ll=0,25<=i)throw Error(j(301));i+=1,ce=ie=null,t.updateQueue=null,Wl.current=Jf,e=n(r,l)}while(zr)}if(Wl.current=vs,t=ie!==null&&ie.next!==null,wn=0,ce=ie=ee=null,gs=!1,t)throw Error(j(300));return e}function Do(){var e=ll!==0;return ll=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?ee.memoizedState=ce=e:ce=ce.next=e,ce}function Ke(){if(ie===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ce===null?ee.memoizedState:ce.next;if(t!==null)ce=t,ie=e;else{if(e===null)throw Error(j(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ce===null?ee.memoizedState=ce=e:ce=ce.next=e}return ce}function sl(e,t){return typeof t=="function"?t(e):t}function Oi(e){var t=Ke(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ie,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var o=a=null,u=null,c=i;do{var p=c.lane;if((wn&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(o=u=h,a=r):u=u.next=h,ee.lanes|=p,Cn|=p}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=o,ot(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ee.lanes|=i,Cn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Di(e){var t=Ke(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);ot(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function G0(){}function Y0(e,t){var n=ee,r=Ke(),l=t(),i=!ot(r.memoizedState,l);if(i&&(r.memoizedState=l,_e=!0),r=r.queue,$o(X0.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,il(9,K0.bind(null,n,r,l,t),void 0,null),de===null)throw Error(j(349));wn&30||Q0(n,t,l)}return l}function Q0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function K0(e,t,n,r){t.value=n,t.getSnapshot=r,J0(t)&&e1(e)}function X0(e,t,n){return n(function(){J0(t)&&e1(e)})}function J0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function e1(e){var t=Mt(e,1);t!==null&&at(t,e,1,-1)}function dc(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:e},t.queue=e,e=e.dispatch=Qf.bind(null,ee,e),[t.memoizedState,e]}function il(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function t1(){return Ke().memoizedState}function ql(e,t,n,r){var l=mt();ee.flags|=e,l.memoizedState=il(1|t,n,void 0,r===void 0?null:r)}function Os(e,t,n,r){var l=Ke();r=r===void 0?null:r;var i=void 0;if(ie!==null){var a=ie.memoizedState;if(i=a.destroy,r!==null&&Ao(r,a.deps)){l.memoizedState=il(t,n,i,r);return}}ee.flags|=e,l.memoizedState=il(1|t,n,i,r)}function fc(e,t){return ql(8390656,8,e,t)}function $o(e,t){return Os(2048,8,e,t)}function n1(e,t){return Os(4,2,e,t)}function r1(e,t){return Os(4,4,e,t)}function l1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function s1(e,t,n){return n=n!=null?n.concat([e]):null,Os(4,4,l1.bind(null,t,e),n)}function zo(){}function i1(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function a1(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ao(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function o1(e,t,n){return wn&21?(ot(n,t)||(n=d0(),ee.lanes|=n,Cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function Gf(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Ai.transition;Ai.transition={};try{e(!1),t()}finally{B=n,Ai.transition=r}}function u1(){return Ke().memoizedState}function Yf(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},c1(e))d1(t,n);else if(n=V0(e,t,n,r),n!==null){var l=Ne();at(n,e,r,l),f1(n,t,r)}}function Qf(e,t,n){var r=Wt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(c1(e))d1(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,o=i(a,n);if(l.hasEagerState=!0,l.eagerState=o,ot(o,a)){var u=t.interleaved;u===null?(l.next=l,To(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=V0(e,t,l,r),n!==null&&(l=Ne(),at(n,e,r,l),f1(n,t,r))}}function c1(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function d1(e,t){zr=gs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function f1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xo(e,n)}}var vs={readContext:Qe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Kf={readContext:Qe,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:fc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ql(4194308,4,l1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ql(4194308,4,e,t)},useInsertionEffect:function(e,t){return ql(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yf.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:dc,useDebugValue:zo,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=dc(!1),t=e[0];return e=Gf.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,l=mt();if(X){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),de===null)throw Error(j(349));wn&30||Q0(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,fc(X0.bind(null,r,i,e),[e]),r.flags|=2048,il(9,K0.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=mt(),t=de.identifierPrefix;if(X){var n=jt,r=Nt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ll++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xf={readContext:Qe,useCallback:i1,useContext:Qe,useEffect:$o,useImperativeHandle:s1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:a1,useReducer:Oi,useRef:t1,useState:function(){return Oi(sl)},useDebugValue:zo,useDeferredValue:function(e){var t=Ke();return o1(t,ie.memoizedState,e)},useTransition:function(){var e=Oi(sl)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:G0,useSyncExternalStore:Y0,useId:u1,unstable_isNewReconciler:!1},Jf={readContext:Qe,useCallback:i1,useContext:Qe,useEffect:$o,useImperativeHandle:s1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:a1,useReducer:Di,useRef:t1,useState:function(){return Di(sl)},useDebugValue:zo,useDeferredValue:function(e){var t=Ke();return ie===null?t.memoizedState=e:o1(t,ie.memoizedState,e)},useTransition:function(){var e=Di(sl)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:G0,useSyncExternalStore:Y0,useId:u1,unstable_isNewReconciler:!1};function or(e,t){try{var n="",r=t;do n+=S3(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function $i(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _a(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var em=typeof WeakMap=="function"?WeakMap:Map;function m1(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bs||(bs=!0,za=r),_a(e,t)},n}function p1(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_a(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_a(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function mc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new em;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=pm.bind(null,e,t,n),t.then(e,e))}function pc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hc(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var tm=Tt.ReactCurrentOwner,_e=!1;function Ce(e,t,n,r){t.child=e===null?W0(t,null,n,r):ir(t,e.child,n,r)}function xc(e,t,n,r,l){n=n.render;var i=t.ref;return er(t,l),r=Oo(e,t,n,r,i,l),n=Do(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,_t(e,t,l)):(X&&n&&jo(t),t.flags|=1,Ce(e,t,r,l),t.child)}function gc(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!qo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,h1(e,t,i,r,l)):(e=Kl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xr,n(a,r)&&e.ref===t.ref)return _t(e,t,l)}return t.flags|=1,e=qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function h1(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Xr(i,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,_t(e,t,l)}return Ta(e,t,n,r,l)}function x1(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Gn,Ie),Ie|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Gn,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(Gn,Ie),Ie|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(Gn,Ie),Ie|=r;return Ce(e,t,l,n),t.child}function g1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ta(e,t,n,r,l){var i=Le(n)?yn:be.current;return i=lr(t,i),er(t,l),n=Oo(e,t,n,r,i,l),r=Do(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,_t(e,t,l)):(X&&r&&jo(t),t.flags|=1,Ce(e,t,n,l),t.child)}function vc(e,t,n,r,l){if(Le(n)){var i=!0;cs(t)}else i=!1;if(er(t,l),t.stateNode===null)Gl(e,t),Z0(t,n,r),Ma(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qe(c):(c=Le(n)?yn:be.current,c=lr(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||u!==c)&&uc(t,a,r,c),It=!1;var f=t.memoizedState;a.state=f,hs(t,r,a,l),u=t.memoizedState,o!==r||f!==u||Pe.current||It?(typeof p=="function"&&(Ea(t,n,p,r),u=t.memoizedState),(o=It||oc(t,n,o,r,f,u,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,B0(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:rt(t.type,o),a.props=c,h=t.pendingProps,f=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Qe(u):(u=Le(n)?yn:be.current,u=lr(t,u));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==u)&&uc(t,a,r,u),It=!1,f=t.memoizedState,a.state=f,hs(t,r,a,l);var w=t.memoizedState;o!==h||f!==w||Pe.current||It?(typeof y=="function"&&(Ea(t,n,y,r),w=t.memoizedState),(c=It||oc(t,n,c,r,f,w,u)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Pa(e,t,n,r,i,l)}function Pa(e,t,n,r,l,i){g1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&rc(t,n,!1),_t(e,t,i);r=t.stateNode,tm.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ir(t,e.child,null,i),t.child=ir(t,null,o,i)):Ce(e,t,o,i),t.memoizedState=r.state,l&&rc(t,n,!0),t.child}function v1(e){var t=e.stateNode;t.pendingContext?nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nc(e,t.context,!1),Lo(e,t.containerInfo)}function yc(e,t,n,r,l){return sr(),So(l),t.flags|=256,Ce(e,t,n,r),t.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function y1(e,t,n){var r=t.pendingProps,l=J.current,i=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),W(J,l&1),e===null)return ka(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=zs(a,r,0,null),e=hn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fa(n),t.memoizedState=La,e):Ro(t,a));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return nm(e,t,a,r,o,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,o=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=qt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?i=qt(o,i):(i=hn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Fa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=La,r}return i=e.child,e=i.sibling,r=qt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ro(e,t){return t=zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Il(e,t,n,r){return r!==null&&So(r),ir(t,e.child,null,n),e=Ro(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nm(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=$i(Error(j(422))),Il(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=zs({mode:"visible",children:r.children},l,0,null),i=hn(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ir(t,e.child,null,a),t.child.memoizedState=Fa(a),t.memoizedState=La,i);if(!(t.mode&1))return Il(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(j(419)),r=$i(i,r,void 0),Il(e,t,a,r)}if(o=(a&e.childLanes)!==0,_e||o){if(r=de,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Mt(e,l),at(r,e,l,-1))}return Wo(),r=$i(Error(j(421))),Il(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=hm.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Oe=Ut(l.nextSibling),ze=t,X=!0,st=null,e!==null&&(We[qe++]=Nt,We[qe++]=jt,We[qe++]=bn,Nt=e.id,jt=e.overflow,bn=t),t=Ro(t,r.children),t.flags|=4096,t)}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function zi(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function b1(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(J,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&xs(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),zi(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&xs(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}zi(t,!0,n,null,i);break;case"together":zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rm(e,t,n){switch(t.tag){case 3:v1(t),sr();break;case 5:q0(t);break;case 1:Le(t.type)&&cs(t);break;case 4:Lo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;W(ms,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?y1(e,t,n):(W(J,J.current&1),e=_t(e,t,n),e!==null?e.sibling:null);W(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return b1(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,x1(e,t,n)}return _t(e,t,n)}var w1,Ia,C1,N1;w1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ia=function(){};C1=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,fn(xt.current);var i=null;switch(n){case"input":l=na(e,l),r=na(e,r),i=[];break;case"select":l=te({},l,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":l=sa(e,l),r=sa(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=os)}aa(n,r);var a;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var o=l[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(o=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==o&&(u!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&q("scroll",e),i||o===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};N1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lm(e,t,n){var r=t.pendingProps;switch(ko(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Le(t.type)&&us(),ve(t),null;case 3:return r=t.stateNode,ar(),Q(Pe),Q(be),Io(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ll(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Ba(st),st=null))),Ia(e,t),ve(t),null;case 5:Fo(t);var l=fn(rl.current);if(n=t.type,e!==null&&t.stateNode!=null)C1(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return ve(t),null}if(e=fn(xt.current),Ll(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[tl]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(l=0;l<Fr.length;l++)q(Fr[l],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":_u(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":Pu(r,i),q("invalid",r)}aa(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];a==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&Pl(r.textContent,o,e),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Pl(r.textContent,o,e),l=["children",""+o]):Hr.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&q("scroll",r)}switch(n){case"input":Nl(r),Tu(r,i,!0);break;case"textarea":Nl(r),Lu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=os)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Q2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[pt]=t,e[tl]=r,w1(e,t,!1,!1),t.stateNode=e;e:{switch(a=oa(n,r),n){case"dialog":q("cancel",e),q("close",e),l=r;break;case"iframe":case"object":case"embed":q("load",e),l=r;break;case"video":case"audio":for(l=0;l<Fr.length;l++)q(Fr[l],e);l=r;break;case"source":q("error",e),l=r;break;case"img":case"image":case"link":q("error",e),q("load",e),l=r;break;case"details":q("toggle",e),l=r;break;case"input":_u(e,r),l=na(e,r),q("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=te({},r,{value:void 0}),q("invalid",e);break;case"textarea":Pu(e,r),l=sa(e,r),q("invalid",e);break;default:l=r}aa(n,l),o=l;for(i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="style"?J2(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&K2(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wr(e,u):typeof u=="number"&&Wr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Hr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&q("scroll",e):u!=null&&uo(e,i,u,a))}switch(n){case"input":Nl(e),Tu(e,r,!1);break;case"textarea":Nl(e),Lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)N1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=fn(rl.current),fn(xt.current),Ll(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Pl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return ve(t),null;case 13:if(Q(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Oe!==null&&t.mode&1&&!(t.flags&128))R0(),sr(),t.flags|=98560,i=!1;else if(i=Ll(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[pt]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else st!==null&&(Ba(st),st=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ae===0&&(ae=3):Wo())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return ar(),Ia(e,t),e===null&&Jr(t.stateNode.containerInfo),ve(t),null;case 10:return _o(t.type._context),ve(t),null;case 17:return Le(t.type)&&us(),ve(t),null;case 19:if(Q(J),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Sr(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=xs(e),a!==null){for(t.flags|=128,Sr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&le()>ur&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304)}else{if(!r)if(e=xs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!X)return ve(t),null}else 2*le()-i.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,n=J.current,W(J,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Ho(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function sm(e,t){switch(ko(t),t.tag){case 1:return Le(t.type)&&us(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ar(),Q(Pe),Q(be),Io(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fo(t),null;case 13:if(Q(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(J),null;case 4:return ar(),null;case 10:return _o(t.type._context),null;case 22:case 23:return Ho(),null;case 24:return null;default:return null}}var Al=!1,ye=!1,im=typeof WeakSet=="function"?WeakSet:Set,E=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Aa(e,t,n){try{n()}catch(r){re(e,t,r)}}var wc=!1;function am(e,t){if(va=ss,e=E0(),No(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,o=-1,u=-1,c=0,p=0,h=e,f=null;t:for(;;){for(var y;h!==n||l!==0&&h.nodeType!==3||(o=a+l),h!==i||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===e)break t;if(f===n&&++c===l&&(o=a),f===i&&++p===r&&(u=a),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ya={focusedElem:e,selectionRange:n},ss=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,k=w.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:rt(t.type,b),k);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(v){re(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return w=wc,wc=!1,w}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Aa(t,n,i)}l=l.next}while(l!==r)}}function Ds(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function j1(e){var t=e.alternate;t!==null&&(e.alternate=null,j1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[tl],delete t[Ca],delete t[Uf],delete t[Zf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function k1(e){return e.tag===5||e.tag===3||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||k1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=os));else if(r!==4&&(e=e.child,e!==null))for(Da(e,t,n),e=e.sibling;e!==null;)Da(e,t,n),e=e.sibling}function $a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($a(e,t,n),e=e.sibling;e!==null;)$a(e,t,n),e=e.sibling}var pe=null,lt=!1;function Lt(e,t,n){for(n=n.child;n!==null;)S1(e,t,n),n=n.sibling}function S1(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(_s,n)}catch{}switch(n.tag){case 5:ye||qn(n,t);case 6:var r=pe,l=lt;pe=null,Lt(e,t,n),pe=r,lt=l,pe!==null&&(lt?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(lt?(e=pe,n=n.stateNode,e.nodeType===8?Li(e.parentNode,n):e.nodeType===1&&Li(e,n),Qr(e)):Li(pe,n.stateNode));break;case 4:r=pe,l=lt,pe=n.stateNode.containerInfo,lt=!0,Lt(e,t,n),pe=r,lt=l;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Aa(n,t,a),l=l.next}while(l!==r)}Lt(e,t,n);break;case 1:if(!ye&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){re(n,t,o)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Lt(e,t,n),ye=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function Nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new im),t.forEach(function(r){var l=xm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:pe=o.stateNode,lt=!1;break e;case 3:pe=o.stateNode.containerInfo,lt=!0;break e;case 4:pe=o.stateNode.containerInfo,lt=!0;break e}o=o.return}if(pe===null)throw Error(j(160));S1(i,a,l),pe=null,lt=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){re(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)E1(t,e),t=t.sibling}function E1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),dt(e),r&4){try{Rr(3,e,e.return),Ds(3,e)}catch(b){re(e,e.return,b)}try{Rr(5,e,e.return)}catch(b){re(e,e.return,b)}}break;case 1:et(t,e),dt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(et(t,e),dt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var l=e.stateNode;try{Wr(l,"")}catch(b){re(e,e.return,b)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&G2(l,i),oa(o,a);var c=oa(o,i);for(a=0;a<u.length;a+=2){var p=u[a],h=u[a+1];p==="style"?J2(l,h):p==="dangerouslySetInnerHTML"?K2(l,h):p==="children"?Wr(l,h):uo(l,p,h,c)}switch(o){case"input":ra(l,i);break;case"textarea":Y2(l,i);break;case"select":var f=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Qn(l,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?Qn(l,!!i.multiple,i.defaultValue,!0):Qn(l,!!i.multiple,i.multiple?[]:"",!1))}l[tl]=i}catch(b){re(e,e.return,b)}}break;case 6:if(et(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(j(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(b){re(e,e.return,b)}}break;case 3:if(et(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(b){re(e,e.return,b)}break;case 4:et(t,e),dt(e);break;case 13:et(t,e),dt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Uo=le())),r&4&&Nc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(c=ye)||p,et(t,e),ye=c):et(t,e),dt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(E=e,p=e.child;p!==null;){for(h=E=p;E!==null;){switch(f=E,y=f.child,f.tag){case 0:case 11:case 14:case 15:Rr(4,f,f.return);break;case 1:qn(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){re(r,n,b)}}break;case 5:qn(f,f.return);break;case 22:if(f.memoizedState!==null){kc(h);continue}}y!==null?(y.return=f,E=y):kc(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{l=h.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=X2("display",a))}catch(b){re(e,e.return,b)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(b){re(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:et(t,e),dt(e),r&4&&Nc(e);break;case 21:break;default:et(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(k1(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wr(l,""),r.flags&=-33);var i=Cc(e);$a(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Cc(e);Da(e,o,a);break;default:throw Error(j(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function om(e,t,n){E=e,M1(e)}function M1(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Al;if(!a){var o=l.alternate,u=o!==null&&o.memoizedState!==null||ye;o=Al;var c=ye;if(Al=a,(ye=u)&&!c)for(E=l;E!==null;)a=E,u=a.child,a.tag===22&&a.memoizedState!==null?Sc(l):u!==null?(u.return=a,E=u):Sc(l);for(;i!==null;)E=i,M1(i),i=i.sibling;E=l,Al=o,ye=c}jc(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,E=i):jc(e)}}function jc(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Ds(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ac(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ac(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Qr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ye||t.flags&512&&Oa(t)}catch(f){re(t,t.return,f)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function kc(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Sc(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ds(4,t)}catch(u){re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){re(t,l,u)}}var i=t.return;try{Oa(t)}catch(u){re(t,i,u)}break;case 5:var a=t.return;try{Oa(t)}catch(u){re(t,a,u)}}}catch(u){re(t,t.return,u)}if(t===e){E=null;break}var o=t.sibling;if(o!==null){o.return=t.return,E=o;break}E=t.return}}var um=Math.ceil,ys=Tt.ReactCurrentDispatcher,Vo=Tt.ReactCurrentOwner,Ye=Tt.ReactCurrentBatchConfig,z=0,de=null,se=null,he=0,Ie=0,Gn=Jt(0),ae=0,al=null,Cn=0,$s=0,Bo=0,Vr=null,Me=null,Uo=0,ur=1/0,bt=null,bs=!1,za=null,Ht=null,Ol=!1,$t=null,ws=0,Br=0,Ra=null,Yl=-1,Ql=0;function Ne(){return z&6?le():Yl!==-1?Yl:Yl=le()}function Wt(e){return e.mode&1?z&2&&he!==0?he&-he:Wf.transition!==null?(Ql===0&&(Ql=d0()),Ql):(e=B,e!==0||(e=window.event,e=e===void 0?16:v0(e.type)),e):1}function at(e,t,n,r){if(50<Br)throw Br=0,Ra=null,Error(j(185));pl(e,n,r),(!(z&2)||e!==de)&&(e===de&&(!(z&2)&&($s|=n),ae===4&&Ot(e,he)),Fe(e,r),n===1&&z===0&&!(t.mode&1)&&(ur=le()+500,Is&&en()))}function Fe(e,t){var n=e.callbackNode;H3(e,t);var r=ls(e,e===de?he:0);if(r===0)n!==null&&Au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Au(n),t===1)e.tag===0?Hf(Ec.bind(null,e)):D0(Ec.bind(null,e)),Vf(function(){!(z&6)&&en()}),n=null;else{switch(f0(r)){case 1:n=ho;break;case 4:n=u0;break;case 16:n=rs;break;case 536870912:n=c0;break;default:n=rs}n=O1(n,_1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _1(e,t){if(Yl=-1,Ql=0,z&6)throw Error(j(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=ls(e,e===de?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cs(e,r);else{t=r;var l=z;z|=2;var i=P1();(de!==e||he!==t)&&(bt=null,ur=le()+500,pn(e,t));do try{fm();break}catch(o){T1(e,o)}while(1);Mo(),ys.current=i,z=l,se!==null?t=0:(de=null,he=0,t=ae)}if(t!==0){if(t===2&&(l=ma(e),l!==0&&(r=l,t=Va(e,l))),t===1)throw n=al,pn(e,0),Ot(e,r),Fe(e,le()),n;if(t===6)Ot(e,r);else{if(l=e.current.alternate,!(r&30)&&!cm(l)&&(t=Cs(e,r),t===2&&(i=ma(e),i!==0&&(r=i,t=Va(e,i))),t===1))throw n=al,pn(e,0),Ot(e,r),Fe(e,le()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:an(e,Me,bt);break;case 3:if(Ot(e,r),(r&130023424)===r&&(t=Uo+500-le(),10<t)){if(ls(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wa(an.bind(null,e,Me,bt),t);break}an(e,Me,bt);break;case 4:if(Ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-it(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*um(r/1960))-r,10<r){e.timeoutHandle=wa(an.bind(null,e,Me,bt),r);break}an(e,Me,bt);break;case 5:an(e,Me,bt);break;default:throw Error(j(329))}}}return Fe(e,le()),e.callbackNode===n?_1.bind(null,e):null}function Va(e,t){var n=Vr;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=Cs(e,t),e!==2&&(t=Me,Me=n,t!==null&&Ba(t)),e}function Ba(e){Me===null?Me=e:Me.push.apply(Me,e)}function cm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!ot(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ot(e,t){for(t&=~Bo,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Ec(e){if(z&6)throw Error(j(327));tr();var t=ls(e,0);if(!(t&1))return Fe(e,le()),null;var n=Cs(e,t);if(e.tag!==0&&n===2){var r=ma(e);r!==0&&(t=r,n=Va(e,r))}if(n===1)throw n=al,pn(e,0),Ot(e,t),Fe(e,le()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Me,bt),Fe(e,le()),null}function Zo(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(ur=le()+500,Is&&en())}}function Nn(e){$t!==null&&$t.tag===0&&!(z&6)&&tr();var t=z;z|=1;var n=Ye.transition,r=B;try{if(Ye.transition=null,B=1,e)return e()}finally{B=r,Ye.transition=n,z=t,!(z&6)&&en()}}function Ho(){Ie=Gn.current,Q(Gn)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rf(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(ko(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&us();break;case 3:ar(),Q(Pe),Q(be),Io();break;case 5:Fo(r);break;case 4:ar();break;case 13:Q(J);break;case 19:Q(J);break;case 10:_o(r.type._context);break;case 22:case 23:Ho()}n=n.return}if(de=e,se=e=qt(e.current,null),he=Ie=t,ae=0,al=null,Bo=$s=Cn=0,Me=Vr=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}dn=null}return e}function T1(e,t){do{var n=se;try{if(Mo(),Wl.current=vs,gs){for(var r=ee.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}gs=!1}if(wn=0,ce=ie=ee=null,zr=!1,ll=0,Vo.current=null,n===null||n.return===null){ae=1,al=t,se=null;break}e:{var i=e,a=n.return,o=n,u=t;if(t=he,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=o,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=pc(a);if(y!==null){y.flags&=-257,hc(y,a,o,i,t),y.mode&1&&mc(i,c,t),t=y,u=c;var w=t.updateQueue;if(w===null){var b=new Set;b.add(u),t.updateQueue=b}else w.add(u);break e}else{if(!(t&1)){mc(i,c,t),Wo();break e}u=Error(j(426))}}else if(X&&o.mode&1){var k=pc(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),hc(k,a,o,i,t),So(or(u,o));break e}}i=u=or(u,o),ae!==4&&(ae=2),Vr===null?Vr=[i]:Vr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=m1(i,u,t);ic(i,m);break e;case 1:o=u;var d=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ht===null||!Ht.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=p1(i,o,t);ic(i,v);break e}}i=i.return}while(i!==null)}F1(n)}catch(N){t=N,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function P1(){var e=ys.current;return ys.current=vs,e===null?vs:e}function Wo(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(Cn&268435455)&&!($s&268435455)||Ot(de,he)}function Cs(e,t){var n=z;z|=2;var r=P1();(de!==e||he!==t)&&(bt=null,pn(e,t));do try{dm();break}catch(l){T1(e,l)}while(1);if(Mo(),z=n,ys.current=r,se!==null)throw Error(j(261));return de=null,he=0,ae}function dm(){for(;se!==null;)L1(se)}function fm(){for(;se!==null&&!O3();)L1(se)}function L1(e){var t=A1(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?F1(e):se=t,Vo.current=null}function F1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sm(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,se=null;return}}else if(n=lm(n,t,Ie),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ae===0&&(ae=5)}function an(e,t,n){var r=B,l=Ye.transition;try{Ye.transition=null,B=1,mm(e,t,n,r)}finally{Ye.transition=l,B=r}return null}function mm(e,t,n,r){do tr();while($t!==null);if(z&6)throw Error(j(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(W3(e,i),e===de&&(se=de=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ol||(Ol=!0,O1(rs,function(){return tr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ye.transition,Ye.transition=null;var a=B;B=1;var o=z;z|=4,Vo.current=null,am(e,n),E1(n,e),Ff(ya),ss=!!va,ya=va=null,e.current=n,om(n),D3(),z=o,B=a,Ye.transition=i}else e.current=n;if(Ol&&(Ol=!1,$t=e,ws=l),i=e.pendingLanes,i===0&&(Ht=null),R3(n.stateNode),Fe(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(bs)throw bs=!1,e=za,za=null,e;return ws&1&&e.tag!==0&&tr(),i=e.pendingLanes,i&1?e===Ra?Br++:(Br=0,Ra=e):Br=0,en(),null}function tr(){if($t!==null){var e=f0(ws),t=Ye.transition,n=B;try{if(Ye.transition=null,B=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,ws=0,z&6)throw Error(j(331));var l=z;for(z|=4,E=e.current;E!==null;){var i=E,a=i.child;if(E.flags&16){var o=i.deletions;if(o!==null){for(var u=0;u<o.length;u++){var c=o[u];for(E=c;E!==null;){var p=E;switch(p.tag){case 0:case 11:case 15:Rr(8,p,i)}var h=p.child;if(h!==null)h.return=p,E=h;else for(;E!==null;){p=E;var f=p.sibling,y=p.return;if(j1(p),p===c){E=null;break}if(f!==null){f.return=y,E=f;break}E=y}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}E=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,E=a;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Rr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,E=m;break e}E=i.return}}var d=e.current;for(E=d;E!==null;){a=E;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,E=x;else e:for(a=d;E!==null;){if(o=E,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ds(9,o)}}catch(N){re(o,o.return,N)}if(o===a){E=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,E=v;break e}E=o.return}}if(z=l,en(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(_s,e)}catch{}r=!0}return r}finally{B=n,Ye.transition=t}}return!1}function Mc(e,t,n){t=or(n,t),t=m1(e,t,1),e=Zt(e,t,1),t=Ne(),e!==null&&(pl(e,1,t),Fe(e,t))}function re(e,t,n){if(e.tag===3)Mc(e,e,n);else for(;t!==null;){if(t.tag===3){Mc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=or(n,e),e=p1(t,e,1),t=Zt(t,e,1),e=Ne(),t!==null&&(pl(t,1,e),Fe(t,e));break}}t=t.return}}function pm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(he&n)===n&&(ae===4||ae===3&&(he&130023424)===he&&500>le()-Uo?pn(e,0):Bo|=n),Fe(e,t)}function I1(e,t){t===0&&(e.mode&1?(t=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):t=1);var n=Ne();e=Mt(e,t),e!==null&&(pl(e,t,n),Fe(e,n))}function hm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),I1(e,n)}function xm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),I1(e,n)}var A1;A1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,rm(e,t,n);_e=!!(e.flags&131072)}else _e=!1,X&&t.flags&1048576&&$0(t,fs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gl(e,t),e=t.pendingProps;var l=lr(t,be.current);er(t,n),l=Oo(null,t,r,e,l,n);var i=Do();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(i=!0,cs(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Po(t),l.updater=As,t.stateNode=l,l._reactInternals=t,Ma(t,r,e,n),t=Pa(null,t,r,!0,i,n)):(t.tag=0,X&&i&&jo(t),Ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=vm(r),e=rt(r,e),l){case 0:t=Ta(null,t,r,e,n);break e;case 1:t=vc(null,t,r,e,n);break e;case 11:t=xc(null,t,r,e,n);break e;case 14:t=gc(null,t,r,rt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:rt(r,l),Ta(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:rt(r,l),vc(e,t,r,l,n);case 3:e:{if(v1(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,l=i.element,B0(e,t),hs(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=or(Error(j(423)),t),t=yc(e,t,r,n,l);break e}else if(r!==l){l=or(Error(j(424)),t),t=yc(e,t,r,n,l);break e}else for(Oe=Ut(t.stateNode.containerInfo.firstChild),ze=t,X=!0,st=null,n=W0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===l){t=_t(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return q0(t),e===null&&ka(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,ba(r,l)?a=null:i!==null&&ba(r,i)&&(t.flags|=32),g1(e,t),Ce(e,t,a,n),t.child;case 6:return e===null&&ka(t),null;case 13:return y1(e,t,n);case 4:return Lo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:rt(r,l),xc(e,t,r,l,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,W(ms,r._currentValue),r._currentValue=a,i!==null)if(ot(i.value,a)){if(i.children===l.children&&!Pe.current){t=_t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){a=i.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=kt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Sa(i.return,n,t),o.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Sa(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,er(t,n),l=Qe(l),r=r(l),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,l=rt(r,t.pendingProps),l=rt(r.type,l),gc(e,t,r,l,n);case 15:return h1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:rt(r,l),Gl(e,t),t.tag=1,Le(r)?(e=!0,cs(t)):e=!1,er(t,n),Z0(t,r,l),Ma(t,r,l,n),Pa(null,t,r,!0,e,n);case 19:return b1(e,t,n);case 22:return x1(e,t,n)}throw Error(j(156,t.tag))};function O1(e,t){return o0(e,t)}function gm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new gm(e,t,n,r)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vm(e){if(typeof e=="function")return qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fo)return 11;if(e===mo)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kl(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")qo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case $n:return hn(n.children,l,i,t);case co:a=8,l|=8;break;case Xi:return e=Ge(12,n,t,l|2),e.elementType=Xi,e.lanes=i,e;case Ji:return e=Ge(13,n,t,l),e.elementType=Ji,e.lanes=i,e;case ea:return e=Ge(19,n,t,l),e.elementType=ea,e.lanes=i,e;case H2:return zs(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U2:a=10;break e;case Z2:a=9;break e;case fo:a=11;break e;case mo:a=14;break e;case Ft:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ge(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function hn(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function zs(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=H2,e.lanes=n,e.stateNode={isHidden:!1},e}function Ri(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function Vi(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ym(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wi(0),this.expirationTimes=wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Go(e,t,n,r,l,i,a,o,u){return e=new ym(e,t,n,o,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ge(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Po(i),e}function bm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function D1(e){if(!e)return Qt;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Le(n))return O0(e,n,t)}return t}function $1(e,t,n,r,l,i,a,o,u){return e=Go(n,r,!0,e,l,i,a,o,u),e.context=D1(null),n=e.current,r=Ne(),l=Wt(n),i=kt(r,l),i.callback=t??null,Zt(n,i,l),e.current.lanes=l,pl(e,l,r),Fe(e,r),e}function Rs(e,t,n,r){var l=t.current,i=Ne(),a=Wt(l);return n=D1(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(l,t,a),e!==null&&(at(e,l,a,i),Hl(e,l,a)),a}function Ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yo(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function wm(){return null}var z1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qo(e){this._internalRoot=e}Vs.prototype.render=Qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Rs(e,t,null,null)};Vs.prototype.unmount=Qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){Rs(null,e,null,null)}),t[Et]=null}};function Vs(e){this._internalRoot=e}Vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=h0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&g0(e)}};function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tc(){}function Cm(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Ns(a);i.call(c)}}var a=$1(t,r,e,0,null,!1,!1,"",Tc);return e._reactRootContainer=a,e[Et]=a.current,Jr(e.nodeType===8?e.parentNode:e),Nn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var c=Ns(u);o.call(c)}}var u=Go(e,0,!1,null,null,!1,!1,"",Tc);return e._reactRootContainer=u,e[Et]=u.current,Jr(e.nodeType===8?e.parentNode:e),Nn(function(){Rs(t,u,n,r)}),u}function Us(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var o=l;l=function(){var u=Ns(a);o.call(u)}}Rs(t,a,e,l)}else a=Cm(n,t,e,l,r);return Ns(a)}m0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(xo(t,n|1),Fe(t,le()),!(z&6)&&(ur=le()+500,en()))}break;case 13:Nn(function(){var r=Mt(e,1);if(r!==null){var l=Ne();at(r,e,1,l)}}),Yo(e,1)}};go=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Ne();at(t,e,134217728,n)}Yo(e,134217728)}};p0=function(e){if(e.tag===13){var t=Wt(e),n=Mt(e,t);if(n!==null){var r=Ne();at(n,e,t,r)}Yo(e,t)}};h0=function(){return B};x0=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};ca=function(e,t,n){switch(t){case"input":if(ra(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Fs(r);if(!l)throw Error(j(90));q2(r),ra(r,l)}}}break;case"textarea":Y2(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};n0=Zo;r0=Nn;var Nm={usingClientEntryPoint:!1,Events:[xl,Bn,Fs,e0,t0,Zo]},Er={findFiberByHostInstance:cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jm={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=i0(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||wm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{_s=Dl.inject(jm),ht=Dl}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nm;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ko(t))throw Error(j(200));return bm(e,t,null,n)};Ve.createRoot=function(e,t){if(!Ko(e))throw Error(j(299));var n=!1,r="",l=z1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Go(e,1,!1,null,null,n,!1,r,l),e[Et]=t.current,Jr(e.nodeType===8?e.parentNode:e),new Qo(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=i0(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return Nn(e)};Ve.hydrate=function(e,t,n){if(!Bs(t))throw Error(j(200));return Us(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Ko(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=z1;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=$1(t,null,e,1,n??null,l,!1,i,a),e[Et]=t.current,Jr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Vs(t)};Ve.render=function(e,t,n){if(!Bs(t))throw Error(j(200));return Us(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!Bs(e))throw Error(j(40));return e._reactRootContainer?(Nn(function(){Us(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Ve.unstable_batchedUpdates=Zo;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bs(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Us(e,t,n,!1,r)};Ve.version="18.2.0-next-9e3b772b8-20220608";function R1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R1)}catch(e){console.error(e)}}R1(),$2.exports=Ve;var km=$2.exports,Pc=km;Qi.createRoot=Pc.createRoot,Qi.hydrateRoot=Pc.hydrateRoot;const Sm="/assets/react-35ef61ed.svg";var Em={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Mm=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Se=(e,t)=>{const n=C.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:a,children:o,...u},c)=>C.createElement("svg",{ref:c,...Em,width:l,height:l,stroke:r,strokeWidth:a?Number(i)*24/Number(l):i,className:`lucide lucide-${Mm(e)}`,...u},[...t.map(([p,h])=>C.createElement(p,h)),...(Array.isArray(o)?o:[o])||[]]));return n.displayName=`${e}`,n},_m=Se("ArrowLeft",[["line",{x1:"19",x2:"5",y1:"12",y2:"12",key:"9fu2vq"}],["polyline",{points:"12 19 5 12 12 5",key:"1ksm0z"}]]),Ur=Se("ArrowRight",[["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["polyline",{points:"12 5 19 12 12 19",key:"sfr3i6"}]]),Tm=Se("ArrowUpRight",[["line",{x1:"7",x2:"17",y1:"17",y2:"7",key:"11kluq"}],["polyline",{points:"7 7 17 7 17 17",key:"blehsp"}]]),Mr=Se("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]),ft=Se("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Pm=Se("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),Lm=Se("ChevronDown",[["polyline",{points:"6 9 12 15 18 9",key:"1do0m2"}]]),Fm=Se("ChevronRight",[["polyline",{points:"9 18 15 12 9 6",key:"1rtp27"}]]),Im=Se("ChevronUp",[["polyline",{points:"18 15 12 9 6 15",key:"1uugdp"}]]),Am=Se("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),pr=Se("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Om=Se("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),Dm=Se("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),$m=Se("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),hr=Se("X",[["line",{x1:"18",x2:"6",y1:"6",y2:"18",key:"15jfxm"}],["line",{x1:"6",x2:"18",y1:"6",y2:"18",key:"d1lma3"}]]),V1=C.createContext("");var B1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Lc=Te.createContext&&Te.createContext(B1),Gt=globalThis&&globalThis.__assign||function(){return Gt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Gt.apply(this,arguments)},zm=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function U1(e){return e&&e.map(function(t,n){return Te.createElement(t.tag,Gt({key:n},t.attr),U1(t.child))})}function xr(e){return function(t){return Te.createElement(Rm,Gt({attr:Gt({},e.attr)},t),U1(e.child))}}function Rm(e){var t=function(n){var r=e.attr,l=e.size,i=e.title,a=zm(e,["attr","size","title"]),o=l||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Te.createElement("svg",Gt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:Gt(Gt({color:e.color||n.color},n.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),i&&Te.createElement("title",null,i),e.children)};return Lc!==void 0?Te.createElement(Lc.Consumer,null,function(n){return t(n)}):t(B1)}function Vm(e){return xr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(e)}function Bm(e){return xr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"}}]})(e)}function we(e){const[t,n]=C.useState(!1),[r,l]=C.useState(0),{showCodeButton:i}=C.useContext(V1),a=()=>{navigator.clipboard.writeText(e==null?void 0:e.code).then(()=>{console.log("Text copied to clipboard"),l(o=>o+1)}).catch(o=>{console.error("Failed to copy text: ",o)})};return s.jsxs(s.Fragment,{children:[i&&s.jsx("button",{onClick:()=>n(!t),type:"button",className:"rounded-full w-12 h-12 bg-white border-2 border-black px-3 py-2 font-bold text-black shadow-lg hover:text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black fixed top-10 right-10 flex justify-center items-center text-lg",style:{zIndex:1e4},children:"</>"}),t&&s.jsxs("div",{className:"bg-gray-600 mt-10 p-10 text-white relative rounded-lg",children:[s.jsxs("span",{onClick:a,className:"absolute top-2 right-2 cursor-pointer",children:[s.jsx(Vm,{className:"hover:scale-110 text-4xl"}),r!==0&&s.jsx("span",{className:"absolute top-0 -left-4 text-xl",children:r})]}),s.jsx("pre",{children:e==null?void 0:e.code})]})]})}function Um(){return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:`<button
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
 */function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ol.apply(this,arguments)}var zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zt||(zt={}));const Fc="popstate";function Zm(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:a,hash:o}=r.location;return Ua("",{pathname:i,search:a,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:Z1(l)}return Wm(t,n,null,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hm(){return Math.random().toString(36).substr(2,8)}function Ic(e,t){return{usr:e.state,key:e.key,idx:t}}function Ua(e,t,n,r){return n===void 0&&(n=null),ol({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gr(t):t,{state:n,key:t&&t.key||r||Hm()})}function Z1(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wm(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,a=l.history,o=zt.Pop,u=null,c=p();c==null&&(c=0,a.replaceState(ol({},a.state,{idx:c}),""));function p(){return(a.state||{idx:null}).idx}function h(){o=zt.Pop;let k=p(),m=k==null?null:k-c;c=k,u&&u({action:o,location:b.location,delta:m})}function f(k,m){o=zt.Push;let d=Ua(b.location,k,m);n&&n(d,k),c=p()+1;let x=Ic(d,c),v=b.createHref(d);try{a.pushState(x,"",v)}catch{l.location.assign(v)}i&&u&&u({action:o,location:b.location,delta:1})}function y(k,m){o=zt.Replace;let d=Ua(b.location,k,m);n&&n(d,k),c=p();let x=Ic(d,c),v=b.createHref(d);a.replaceState(x,"",v),i&&u&&u({action:o,location:b.location,delta:0})}function w(k){let m=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof k=="string"?k:Z1(k);return oe(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let b={get action(){return o},get location(){return e(l,a)},listen(k){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Fc,h),u=k,()=>{l.removeEventListener(Fc,h),u=null}},createHref(k){return t(l,k)},createURL:w,encodeLocation(k){let m=w(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:y,go(k){return a.go(k)}};return b}var Ac;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ac||(Ac={}));function qm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?gr(t):t,l=q1(r.pathname||"/",n);if(l==null)return null;let i=H1(e);Gm(i);let a=null;for(let o=0;a==null&&o<i.length;++o)a=rp(i[o],ip(l));return a}function H1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,a,o)=>{let u={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=xn([r,u.relativePath]),p=n.concat(u);i.children&&i.children.length>0&&(oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),H1(i.children,t,p,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:tp(c,i.index),routesMeta:p})};return e.forEach((i,a)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))l(i,a);else for(let u of W1(i.path))l(i,a,u)}),t}function W1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let a=W1(r.join("/")),o=[];return o.push(...a.map(u=>u===""?i:[i,u].join("/"))),l&&o.push(...a),o.map(u=>e.startsWith("/")&&u===""?"/":u)}function Gm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:np(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ym=/^:\w+$/,Qm=3,Km=2,Xm=1,Jm=10,ep=-2,Oc=e=>e==="*";function tp(e,t){let n=e.split("/"),r=n.length;return n.some(Oc)&&(r+=ep),t&&(r+=Km),n.filter(l=>!Oc(l)).reduce((l,i)=>l+(Ym.test(i)?Qm:i===""?Xm:Jm),r)}function np(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function rp(e,t){let{routesMeta:n}=e,r={},l="/",i=[];for(let a=0;a<n.length;++a){let o=n[a],u=a===n.length-1,c=l==="/"?t:t.slice(l.length)||"/",p=lp({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},c);if(!p)return null;Object.assign(r,p.params);let h=o.route;i.push({params:r,pathname:xn([l,p.pathname]),pathnameBase:fp(xn([l,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(l=xn([l,p.pathnameBase]))}return i}function lp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=sp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],a=i.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:r.reduce((c,p,h)=>{if(p==="*"){let f=o[h]||"";a=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}return c[p]=ap(o[h]||"",p),c},{}),pathname:i,pathnameBase:a,pattern:e}}function sp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,o)=>(r.push(o),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ip(e){try{return decodeURI(e)}catch(t){return Xo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ap(e,t){try{return decodeURIComponent(e)}catch(n){return Xo(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function q1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function op(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?gr(e):e;return{pathname:n?n.startsWith("/")?n:up(n,t):t,search:mp(r),hash:pp(l)}}function up(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Bi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dp(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=gr(e):(l=ol({},e),oe(!l.pathname||!l.pathname.includes("?"),Bi("?","pathname","search",l)),oe(!l.pathname||!l.pathname.includes("#"),Bi("#","pathname","hash",l)),oe(!l.search||!l.search.includes("#"),Bi("#","search","hash",l)));let i=e===""||l.pathname==="",a=i?"/":l.pathname,o;if(r||a==null)o=n;else{let h=t.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;l.pathname=f.join("/")}o=h>=0?t[h]:"/"}let u=op(l,o),c=a&&a!=="/"&&a.endsWith("/"),p=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const xn=e=>e.join("/").replace(/\/\/+/g,"/"),fp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const G1=["post","put","patch","delete"];new Set(G1);const xp=["get",...G1];new Set(xp);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},js.apply(this,arguments)}const Jo=C.createContext(null),gp=C.createContext(null),Zs=C.createContext(null),Hs=C.createContext(null),vr=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Y1=C.createContext(null);function Ws(){return C.useContext(Hs)!=null}function eu(){return Ws()||oe(!1),C.useContext(Hs).location}function Q1(e){C.useContext(Zs).static||C.useLayoutEffect(e)}function K1(){let{isDataRoute:e}=C.useContext(vr);return e?Tp():vp()}function vp(){Ws()||oe(!1);let e=C.useContext(Jo),{basename:t,navigator:n}=C.useContext(Zs),{matches:r}=C.useContext(vr),{pathname:l}=eu(),i=JSON.stringify(cp(r).map(u=>u.pathnameBase)),a=C.useRef(!1);return Q1(()=>{a.current=!0}),C.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){n.go(u);return}let p=dp(u,JSON.parse(i),l,c.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:xn([t,p.pathname])),(c.replace?n.replace:n.push)(p,c.state,c)},[t,n,i,l,e])}function yp(e,t){return bp(e,t)}function bp(e,t,n){Ws()||oe(!1);let{navigator:r}=C.useContext(Zs),{matches:l}=C.useContext(vr),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let u=eu(),c;if(t){var p;let b=typeof t=="string"?gr(t):t;o==="/"||(p=b.pathname)!=null&&p.startsWith(o)||oe(!1),c=b}else c=u;let h=c.pathname||"/",f=o==="/"?h:h.slice(o.length)||"/",y=qm(e,{pathname:f}),w=kp(y&&y.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:xn([o,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?o:xn([o,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,n);return t&&w?C.createElement(Hs.Provider,{value:{location:js({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:zt.Pop}},w):w}function wp(){let e=_p(),t=hp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:l},n):null,i)}const Cp=C.createElement(wp,null);class Np extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(vr.Provider,{value:this.props.routeContext},C.createElement(Y1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jp(e){let{routeContext:t,match:n,children:r}=e,l=C.useContext(Jo);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(vr.Provider,{value:t},r)}function kp(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let o=i.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));o>=0||oe(!1),i=i.slice(0,Math.min(i.length,o+1))}return i.reduceRight((o,u,c)=>{let p=u.route.id?a==null?void 0:a[u.route.id]:null,h=null;n&&(h=u.route.errorElement||Cp);let f=t.concat(i.slice(0,c+1)),y=()=>{let w;return p?w=h:u.route.Component?w=C.createElement(u.route.Component,null):u.route.element?w=u.route.element:w=o,C.createElement(jp,{match:u,routeContext:{outlet:o,matches:f,isDataRoute:n!=null},children:w})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?C.createElement(Np,{location:n.location,revalidation:n.revalidation,component:h,error:p,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var Za;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Za||(Za={}));var ul;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ul||(ul={}));function Sp(e){let t=C.useContext(Jo);return t||oe(!1),t}function Ep(e){let t=C.useContext(gp);return t||oe(!1),t}function Mp(e){let t=C.useContext(vr);return t||oe(!1),t}function X1(e){let t=Mp(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function _p(){var e;let t=C.useContext(Y1),n=Ep(ul.UseRouteError),r=X1(ul.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Tp(){let{router:e}=Sp(Za.UseNavigateStable),t=X1(ul.UseNavigateStable),n=C.useRef(!1);return Q1(()=>{n.current=!0}),C.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,js({fromRouteId:t},i)))},[e,t])}function G(e){oe(!1)}function Pp(e){let{basename:t="/",children:n=null,location:r,navigationType:l=zt.Pop,navigator:i,static:a=!1}=e;Ws()&&oe(!1);let o=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:o,navigator:i,static:a}),[o,i,a]);typeof r=="string"&&(r=gr(r));let{pathname:c="/",search:p="",hash:h="",state:f=null,key:y="default"}=r,w=C.useMemo(()=>{let b=q1(c,o);return b==null?null:{location:{pathname:b,search:p,hash:h,state:f,key:y},navigationType:l}},[o,c,p,h,f,y,l]);return w==null?null:C.createElement(Zs.Provider,{value:u},C.createElement(Hs.Provider,{children:n,value:w}))}function J1(e){let{children:t,location:n}=e;return yp(Ha(t),n)}var Dc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Dc||(Dc={}));new Promise(()=>{});function Ha(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,l)=>{if(!C.isValidElement(r))return;let i=[...t,l];if(r.type===C.Fragment){n.push.apply(n,Ha(r.props.children,i));return}r.type!==G&&oe(!1),!r.props.index||!r.props.children||oe(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ha(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lp(e){let{basename:t,children:n,window:r}=e,l=C.useRef();l.current==null&&(l.current=Zm({window:r,v5Compat:!0}));let i=l.current,[a,o]=C.useState({action:i.action,location:i.location});return C.useLayoutEffect(()=>i.listen(o),[i]),C.createElement(Pp,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i})}var $c;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})($c||($c={}));var zc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zc||(zc={}));function Fp(){return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:` <div className="space-x-6">
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
        </div>`}),s.jsxs("div",{className:"space-x-6",children:[s.jsx("img",{className:"inline-block h-6 w-6 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),s.jsx("img",{className:"inline-block h-8 w-8 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),s.jsx("img",{className:"inline-block h-10 w-10 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),s.jsx("img",{className:"inline-block h-12 w-12 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),s.jsx("img",{className:"inline-block h-14 w-14 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"})]})]})}function Rc(){return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:` <div className="w-[300px] rounded-md border">
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
    </div>`}),s.jsxs("div",{className:"w-[300px] rounded-md border",children:[s.jsx("img",{src:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",alt:"Laptop",className:"h-[200px] w-full rounded-t-md object-cover"}),s.jsxs("div",{className:"p-4",children:[s.jsxs("h1",{className:"inline-flex items-center text-lg font-semibold",children:["About Macbook ",s.jsx(Tm,{className:"ml-2 h-4 w-4"})]}),s.jsx("p",{className:"mt-3 text-sm text-gray-600",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"}),s.jsxs("div",{className:"mt-4",children:[s.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Macbook"}),s.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Apple"}),s.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Laptop"})]}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Read"})]})]})]})}function Ip(){return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:`<section>
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
      </section>`}),s.jsx("section",{children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[s.jsxs("div",{className:"relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24",children:[s.jsx("div",{className:"absolute inset-0",children:s.jsx("img",{className:"h-full w-full rounded-md object-cover object-top",src:"https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:""})}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),s.jsx("div",{className:"relative",children:s.jsxs("div",{className:"w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24",children:[s.jsx("h3",{className:"text-4xl font-bold text-white",children:"Now you dont have to rely on your designer to create a new page"}),s.jsxs("ul",{className:"mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2",children:[s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Commercial License "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Unlimited Exports "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" 120+ Coded Blocks "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Design Files Included "})]})]})]})})]}),s.jsx("div",{className:"flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",children:s.jsxs("div",{className:"xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",children:[s.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl",children:"Sign up"}),s.jsxs("p",{className:"mt-2 text-base text-gray-600",children:["Already have an account?"," ",s.jsx("a",{href:"#",title:"",className:"font-medium text-black transition-all duration-200 hover:underline",children:"Sign In"})]}),s.jsx("form",{action:"#",method:"POST",className:"mt-8",children:s.jsxs("div",{className:"space-y-5",children:[s.jsxs("div",{children:[s.jsxs("label",{htmlFor:"name",className:"text-base font-medium text-gray-900",children:[" ","Full Name"," "]}),s.jsx("div",{className:"mt-2",children:s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Full Name",id:"name"})})]}),s.jsxs("div",{children:[s.jsxs("label",{htmlFor:"email",className:"text-base font-medium text-gray-900",children:[" ","Email address"," "]}),s.jsx("div",{className:"mt-2",children:s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email",id:"email"})})]}),s.jsxs("div",{children:[s.jsx("div",{className:"flex items-center justify-between",children:s.jsxs("label",{htmlFor:"password",className:"text-base font-medium text-gray-900",children:[" ","Password"," "]})}),s.jsx("div",{className:"mt-2",children:s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"password",placeholder:"Password",id:"password"})})]}),s.jsx("div",{children:s.jsxs("button",{type:"button",className:"inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",children:["Create Account ",s.jsx(Ur,{className:"ml-2",size:16})]})})]})}),s.jsxs("div",{className:"mt-3 space-y-3",children:[s.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[s.jsx("span",{className:"mr-2 inline-block",children:s.jsx("svg",{className:"h-6 w-6 text-rose-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"})})}),"Sign up with Google"]}),s.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[s.jsx("span",{className:"mr-2 inline-block",children:s.jsx("svg",{className:"h-6 w-6 text-[#2563EB]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"})})}),"Sign up with Facebook"]})]})]})})]})})]})}function Ap(){return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:`<section>
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
      </section>`}),s.jsx("section",{children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[s.jsxs("div",{className:"relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24",children:[s.jsx("div",{className:"absolute inset-0",children:s.jsx("img",{className:"h-full w-full rounded-md object-cover object-top",src:"https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",alt:""})}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),s.jsx("div",{className:"relative",children:s.jsxs("div",{className:"w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24",children:[s.jsx("h3",{className:"text-4xl font-bold text-white",children:"Now you dont have to rely on your designer to create a new page"}),s.jsxs("ul",{className:"mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2",children:[s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Commercial License "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Unlimited Exports "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" 120+ Coded Blocks "})]}),s.jsxs("li",{className:"flex items-center space-x-3",children:[s.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:s.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),s.jsx("span",{className:"text-lg font-medium text-white",children:" Design Files Included "})]})]})]})})]}),s.jsx("div",{className:"flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",children:s.jsxs("div",{className:"xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",children:[s.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl",children:"Sign in"}),s.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["Don't have an account?"," ",s.jsx("a",{href:"#",title:"",className:"font-semibold text-black transition-all duration-200 hover:underline",children:"Create a free account"})]}),s.jsx("form",{action:"#",method:"POST",className:"mt-8",children:s.jsxs("div",{className:"space-y-5",children:[s.jsxs("div",{children:[s.jsxs("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Email address"," "]}),s.jsx("div",{className:"mt-2",children:s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"})})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Password"," "]}),s.jsxs("a",{href:"#",title:"",className:"text-sm font-semibold text-black hover:underline",children:[" ","Forgot password?"," "]})]}),s.jsx("div",{className:"mt-2",children:s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"password",placeholder:"Password"})})]}),s.jsx("div",{children:s.jsxs("button",{type:"button",className:"inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",children:["Get started ",s.jsx(Ur,{className:"ml-2",size:16})]})})]})}),s.jsxs("div",{className:"mt-3 space-y-3",children:[s.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[s.jsx("span",{className:"mr-2 inline-block",children:s.jsx("svg",{className:"h-6 w-6 text-rose-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"})})}),"Sign in with Google"]}),s.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[s.jsx("span",{className:"mr-2 inline-block",children:s.jsx("svg",{className:"h-6 w-6 text-[#2563EB]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"})})}),"Sign in with Facebook"]})]})]})})]})})]})}const Vc=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],Op=[{category:"Design",title:"10 Tips for Crafting the Perfect UX Portfolio",description:"Learn how to showcase your design skills and stand out in a crowded job market.",author:"Emily Lee",date:"3 April 2023",avatar:"https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg",poster:"https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"},{category:"Technology",title:"The Future of Mobile App Development",description:"Discover the latest trends and techniques that will shape the future of mobile app development.",author:"John Smith",date:"1 April 2023",avatar:"https://randomuser.me/api/portraits/men/32.jpg",poster:"https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"},{category:"Business",title:"How to Launch a Successful Startup",description:"Learn the essential steps to launch a successful startup and make your dreams a reality.",author:"Sarah Brown",date:"28 March 2023",avatar:"https://randomuser.me/api/portraits/women/44.jpg",poster:"https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Health",title:"The Benefits of Mindfulness Meditation",description:"Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.",author:"David Kim",date:"25 March 2023",avatar:"https://randomuser.me/api/portraits/men/46.jpg",poster:"https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Education",title:"Why Learning a Second Language is Important",description:"Explore the benefits of learning a second language and how it can improve your cognitive abilities.",author:"Maria Rodriguez",date:"22 March 2023",avatar:"https://randomuser.me/api/portraits/men/97.jpg",poster:"https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Travel",title:"The Best Places to Visit in Europe",description:"Discover the top destinations in Europe and plan your dream vacation.",author:"Alex Johnson",date:"19 March 2023",avatar:"https://randomuser.me/api/portraits/men/99.jpg",poster:"https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Food",title:"How to Make the Perfect Cup of Coffee",description:"Learn the secrets to making the perfect cup of coffee and impress your friends and family.",author:"Thomas Lee",date:"16 March 2023",avatar:"https://randomuser.me/api/portraits/women/63.jpg",poster:"https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80"},{category:"Fashion",title:"The Latest Fashion Trends for Spring 2023",description:"Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.",author:"Jessica Kim",date:"13 March 2023",avatar:"https://randomuser.me/api/portraits/women/47.jpg",poster:"https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Sports",title:"The Benefits of Yoga for Athletes",description:"Learn how practicing yoga can improve your athletic performance and prevent injuries.",author:"Michael Johnson",date:"10 March 2023",avatar:"https://randomuser.me/api/portraits/men/86.jpg",poster:"https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"}];function Dp(){const[e,t]=Te.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:`//Source - Dev UI
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
}`}),s.jsxs("div",{children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:Vc.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(pr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(hr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:Vc.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsxs("div",{className:"mx-auto max-w-7xl px-2",children:[s.jsxs("div",{className:"flex flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[s.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Resources and insights"}),s.jsx("p",{className:"max-w-4xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"}),s.jsxs("div",{className:"mt-6 flex w-full items-center space-x-2 md:w-1/3",children:[s.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Search Topics"}),s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Search"})]})]}),s.jsx("div",{className:"mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row",children:s.jsx("div",{className:"flex w-full items-end border-b border-gray-300",children:["Design","Product","Software Engineering","Customer Success"].map((r,l)=>s.jsx("div",{className:"cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black",children:r},r))})}),s.jsx("div",{className:"grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3",children:Op.map(r=>s.jsxs("div",{className:"border",children:[s.jsx("img",{src:r.poster,className:"aspect-video w-full rounded-md",alt:""}),s.jsxs("div",{className:"min-h-min p-3",children:[s.jsxs("p",{className:"mt-4 w-full text-xs font-semibold leading-tight text-gray-700",children:["#",r.category]}),s.jsx("p",{className:"mt-4 flex-1 text-base font-semibold text-gray-900",children:r.title}),s.jsx("p",{className:"mt-4 w-full text-sm leading-normal text-gray-600",children:r.description}),s.jsxs("div",{className:"mt-4 flex space-x-3 ",children:[s.jsx("img",{className:"h-full w-10 rounded-lg",src:r.avatar,alt:r.author}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-semibold leading-tight text-gray-900",children:r.author}),s.jsx("p",{className:"text-sm leading-tight text-gray-600",children:r.date})]})]})]})]},r.title))}),s.jsx("div",{className:"w-full border-t border-gray-300",children:s.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[s.jsx("div",{className:"hidden md:block",children:s.jsxs("p",{children:["showing ",s.jsx("strong",{children:"1"})," to ",s.jsx("strong",{children:"10"})," of ",s.jsx("strong",{children:"20"})," results"]})}),s.jsxs("div",{className:"space-x-2",children:[s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"← Previous"}),s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Next →"})]})]})})]}),s.jsx("div",{className:"mx-auto mt-12 max-w-7xl bg-gray-50",children:s.jsxs("footer",{className:"px-4 py-10",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[s.jsx("span",{children:s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:s.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),s.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"About us"}),s.jsx("li",{children:"Company History"}),s.jsx("li",{children:"Our Team"}),s.jsx("li",{children:"Our Vision"}),s.jsx("li",{children:"Press Release"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Washington"}),s.jsx("li",{children:"New Hampshire"}),s.jsx("li",{children:"Maine"}),s.jsx("li",{children:"Texas"}),s.jsx("li",{children:"Indiana"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"UI / UX Design"}),s.jsx("li",{children:"App Development"}),s.jsx("li",{children:"API reference"}),s.jsx("li",{children:"API status"}),s.jsx("li",{children:"Documentation"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Privacy Policy"}),s.jsx("li",{children:"Terms of Service"}),s.jsx("li",{children:"Cookie Policy"}),s.jsx("li",{children:"Disclaimer"}),s.jsx("li",{children:"Media Policy"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Facebook"}),s.jsx("li",{children:"Twitter"}),s.jsx("li",{children:"Instagram"}),s.jsx("li",{children:"Linkedin"}),s.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}var Bc=Array.isArray,Uc=Object.keys,$p=Object.prototype.hasOwnProperty,zp=typeof Element<"u";function Wa(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Bc(e),r=Bc(t),l,i,a;if(n&&r){if(i=e.length,i!=t.length)return!1;for(l=i;l--!==0;)if(!Wa(e[l],t[l]))return!1;return!0}if(n!=r)return!1;var o=e instanceof Date,u=t instanceof Date;if(o!=u)return!1;if(o&&u)return e.getTime()==t.getTime();var c=e instanceof RegExp,p=t instanceof RegExp;if(c!=p)return!1;if(c&&p)return e.toString()==t.toString();var h=Uc(e);if(i=h.length,i!==Uc(t).length)return!1;for(l=i;l--!==0;)if(!$p.call(t,h[l]))return!1;if(zp&&e instanceof Element&&t instanceof Element)return e===t;for(l=i;l--!==0;)if(a=h[l],!(a==="_owner"&&e.$$typeof)&&!Wa(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var Rp=function(t,n){try{return Wa(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const on=no(Rp);var Vp=function(t){return Bp(t)&&!Up(t)};function Bp(e){return!!e&&typeof e=="object"}function Up(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Wp(e)}var Zp=typeof Symbol=="function"&&Symbol.for,Hp=Zp?Symbol.for("react.element"):60103;function Wp(e){return e.$$typeof===Hp}function qp(e){return Array.isArray(e)?[]:{}}function ks(e,t){return t.clone!==!1&&t.isMergeableObject(e)?cl(qp(e),e,t):e}function Gp(e,t,n){return e.concat(t).map(function(r){return ks(r,n)})}function Yp(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(l){r[l]=ks(e[l],n)}),Object.keys(t).forEach(function(l){!n.isMergeableObject(t[l])||!e[l]?r[l]=ks(t[l],n):r[l]=cl(e[l],t[l],n)}),r}function cl(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||Gp,n.isMergeableObject=n.isMergeableObject||Vp;var r=Array.isArray(t),l=Array.isArray(e),i=r===l;return i?r?n.arrayMerge(e,t,n):Yp(e,t,n):ks(t,n)}cl.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,l){return cl(r,l,n)},{})};var qa=cl,Qp=typeof global=="object"&&global&&global.Object===Object&&global;const ed=Qp;var Kp=typeof self=="object"&&self&&self.Object===Object&&self,Xp=ed||Kp||Function("return this")();const vt=Xp;var Jp=vt.Symbol;const Kt=Jp;var td=Object.prototype,e4=td.hasOwnProperty,t4=td.toString,_r=Kt?Kt.toStringTag:void 0;function n4(e){var t=e4.call(e,_r),n=e[_r];try{e[_r]=void 0;var r=!0}catch{}var l=t4.call(e);return r&&(t?e[_r]=n:delete e[_r]),l}var r4=Object.prototype,l4=r4.toString;function s4(e){return l4.call(e)}var i4="[object Null]",a4="[object Undefined]",Zc=Kt?Kt.toStringTag:void 0;function En(e){return e==null?e===void 0?a4:i4:Zc&&Zc in Object(e)?n4(e):s4(e)}function nd(e,t){return function(n){return e(t(n))}}var o4=nd(Object.getPrototypeOf,Object);const tu=o4;function Mn(e){return e!=null&&typeof e=="object"}var u4="[object Object]",c4=Function.prototype,d4=Object.prototype,rd=c4.toString,f4=d4.hasOwnProperty,m4=rd.call(Object);function Hc(e){if(!Mn(e)||En(e)!=u4)return!1;var t=tu(e);if(t===null)return!0;var n=f4.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&rd.call(n)==m4}function p4(){this.__data__=[],this.size=0}function ld(e,t){return e===t||e!==e&&t!==t}function qs(e,t){for(var n=e.length;n--;)if(ld(e[n][0],t))return n;return-1}var h4=Array.prototype,x4=h4.splice;function g4(e){var t=this.__data__,n=qs(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():x4.call(t,n,1),--this.size,!0}function v4(e){var t=this.__data__,n=qs(t,e);return n<0?void 0:t[n][1]}function y4(e){return qs(this.__data__,e)>-1}function b4(e,t){var n=this.__data__,r=qs(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Pt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pt.prototype.clear=p4;Pt.prototype.delete=g4;Pt.prototype.get=v4;Pt.prototype.has=y4;Pt.prototype.set=b4;function w4(){this.__data__=new Pt,this.size=0}function C4(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function N4(e){return this.__data__.get(e)}function j4(e){return this.__data__.has(e)}function vl(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var k4="[object AsyncFunction]",S4="[object Function]",E4="[object GeneratorFunction]",M4="[object Proxy]";function sd(e){if(!vl(e))return!1;var t=En(e);return t==S4||t==E4||t==k4||t==M4}var _4=vt["__core-js_shared__"];const Ui=_4;var Wc=function(){var e=/[^.]+$/.exec(Ui&&Ui.keys&&Ui.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function T4(e){return!!Wc&&Wc in e}var P4=Function.prototype,L4=P4.toString;function _n(e){if(e!=null){try{return L4.call(e)}catch{}try{return e+""}catch{}}return""}var F4=/[\\^$.*+?()[\]{}|]/g,I4=/^\[object .+?Constructor\]$/,A4=Function.prototype,O4=Object.prototype,D4=A4.toString,$4=O4.hasOwnProperty,z4=RegExp("^"+D4.call($4).replace(F4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function R4(e){if(!vl(e)||T4(e))return!1;var t=sd(e)?z4:I4;return t.test(_n(e))}function V4(e,t){return e==null?void 0:e[t]}function Tn(e,t){var n=V4(e,t);return R4(n)?n:void 0}var B4=Tn(vt,"Map");const dl=B4;var U4=Tn(Object,"create");const fl=U4;function Z4(){this.__data__=fl?fl(null):{},this.size=0}function H4(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var W4="__lodash_hash_undefined__",q4=Object.prototype,G4=q4.hasOwnProperty;function Y4(e){var t=this.__data__;if(fl){var n=t[e];return n===W4?void 0:n}return G4.call(t,e)?t[e]:void 0}var Q4=Object.prototype,K4=Q4.hasOwnProperty;function X4(e){var t=this.__data__;return fl?t[e]!==void 0:K4.call(t,e)}var J4="__lodash_hash_undefined__";function e6(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fl&&t===void 0?J4:t,this}function jn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}jn.prototype.clear=Z4;jn.prototype.delete=H4;jn.prototype.get=Y4;jn.prototype.has=X4;jn.prototype.set=e6;function t6(){this.size=0,this.__data__={hash:new jn,map:new(dl||Pt),string:new jn}}function n6(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Gs(e,t){var n=e.__data__;return n6(t)?n[typeof t=="string"?"string":"hash"]:n.map}function r6(e){var t=Gs(this,e).delete(e);return this.size-=t?1:0,t}function l6(e){return Gs(this,e).get(e)}function s6(e){return Gs(this,e).has(e)}function i6(e,t){var n=Gs(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function tn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tn.prototype.clear=t6;tn.prototype.delete=r6;tn.prototype.get=l6;tn.prototype.has=s6;tn.prototype.set=i6;var a6=200;function o6(e,t){var n=this.__data__;if(n instanceof Pt){var r=n.__data__;if(!dl||r.length<a6-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new tn(r)}return n.set(e,t),this.size=n.size,this}function yr(e){var t=this.__data__=new Pt(e);this.size=t.size}yr.prototype.clear=w4;yr.prototype.delete=C4;yr.prototype.get=N4;yr.prototype.has=j4;yr.prototype.set=o6;function u6(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var c6=function(){try{var e=Tn(Object,"defineProperty");return e({},"",{}),e}catch{}}();const qc=c6;function id(e,t,n){t=="__proto__"&&qc?qc(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var d6=Object.prototype,f6=d6.hasOwnProperty;function ad(e,t,n){var r=e[t];(!(f6.call(e,t)&&ld(r,n))||n===void 0&&!(t in e))&&id(e,t,n)}function Ys(e,t,n,r){var l=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var o=t[i],u=r?r(n[o],e[o],o,n,e):void 0;u===void 0&&(u=e[o]),l?id(n,o,u):ad(n,o,u)}return n}function m6(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var p6="[object Arguments]";function Gc(e){return Mn(e)&&En(e)==p6}var od=Object.prototype,h6=od.hasOwnProperty,x6=od.propertyIsEnumerable,g6=Gc(function(){return arguments}())?Gc:function(e){return Mn(e)&&h6.call(e,"callee")&&!x6.call(e,"callee")};const v6=g6;var y6=Array.isArray;const yl=y6;function b6(){return!1}var ud=typeof De=="object"&&De&&!De.nodeType&&De,Yc=ud&&typeof $e=="object"&&$e&&!$e.nodeType&&$e,w6=Yc&&Yc.exports===ud,Qc=w6?vt.Buffer:void 0,C6=Qc?Qc.isBuffer:void 0,N6=C6||b6;const cd=N6;var j6=9007199254740991,k6=/^(?:0|[1-9]\d*)$/;function S6(e,t){var n=typeof e;return t=t??j6,!!t&&(n=="number"||n!="symbol"&&k6.test(e))&&e>-1&&e%1==0&&e<t}var E6=9007199254740991;function dd(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=E6}var M6="[object Arguments]",_6="[object Array]",T6="[object Boolean]",P6="[object Date]",L6="[object Error]",F6="[object Function]",I6="[object Map]",A6="[object Number]",O6="[object Object]",D6="[object RegExp]",$6="[object Set]",z6="[object String]",R6="[object WeakMap]",V6="[object ArrayBuffer]",B6="[object DataView]",U6="[object Float32Array]",Z6="[object Float64Array]",H6="[object Int8Array]",W6="[object Int16Array]",q6="[object Int32Array]",G6="[object Uint8Array]",Y6="[object Uint8ClampedArray]",Q6="[object Uint16Array]",K6="[object Uint32Array]",Y={};Y[U6]=Y[Z6]=Y[H6]=Y[W6]=Y[q6]=Y[G6]=Y[Y6]=Y[Q6]=Y[K6]=!0;Y[M6]=Y[_6]=Y[V6]=Y[T6]=Y[B6]=Y[P6]=Y[L6]=Y[F6]=Y[I6]=Y[A6]=Y[O6]=Y[D6]=Y[$6]=Y[z6]=Y[R6]=!1;function X6(e){return Mn(e)&&dd(e.length)&&!!Y[En(e)]}function nu(e){return function(t){return e(t)}}var fd=typeof De=="object"&&De&&!De.nodeType&&De,Zr=fd&&typeof $e=="object"&&$e&&!$e.nodeType&&$e,J6=Zr&&Zr.exports===fd,Zi=J6&&ed.process,eh=function(){try{var e=Zr&&Zr.require&&Zr.require("util").types;return e||Zi&&Zi.binding&&Zi.binding("util")}catch{}}();const cr=eh;var Kc=cr&&cr.isTypedArray,th=Kc?nu(Kc):X6;const nh=th;var rh=Object.prototype,lh=rh.hasOwnProperty;function md(e,t){var n=yl(e),r=!n&&v6(e),l=!n&&!r&&cd(e),i=!n&&!r&&!l&&nh(e),a=n||r||l||i,o=a?m6(e.length,String):[],u=o.length;for(var c in e)(t||lh.call(e,c))&&!(a&&(c=="length"||l&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||S6(c,u)))&&o.push(c);return o}var sh=Object.prototype;function ru(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||sh;return e===n}var ih=nd(Object.keys,Object);const ah=ih;var oh=Object.prototype,uh=oh.hasOwnProperty;function ch(e){if(!ru(e))return ah(e);var t=[];for(var n in Object(e))uh.call(e,n)&&n!="constructor"&&t.push(n);return t}function pd(e){return e!=null&&dd(e.length)&&!sd(e)}function lu(e){return pd(e)?md(e):ch(e)}function dh(e,t){return e&&Ys(t,lu(t),e)}function fh(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var mh=Object.prototype,ph=mh.hasOwnProperty;function hh(e){if(!vl(e))return fh(e);var t=ru(e),n=[];for(var r in e)r=="constructor"&&(t||!ph.call(e,r))||n.push(r);return n}function su(e){return pd(e)?md(e,!0):hh(e)}function xh(e,t){return e&&Ys(t,su(t),e)}var hd=typeof De=="object"&&De&&!De.nodeType&&De,Xc=hd&&typeof $e=="object"&&$e&&!$e.nodeType&&$e,gh=Xc&&Xc.exports===hd,Jc=gh?vt.Buffer:void 0,e2=Jc?Jc.allocUnsafe:void 0;function vh(e,t){if(t)return e.slice();var n=e.length,r=e2?e2(n):new e.constructor(n);return e.copy(r),r}function xd(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function yh(e,t){for(var n=-1,r=e==null?0:e.length,l=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[l++]=a)}return i}function gd(){return[]}var bh=Object.prototype,wh=bh.propertyIsEnumerable,t2=Object.getOwnPropertySymbols,Ch=t2?function(e){return e==null?[]:(e=Object(e),yh(t2(e),function(t){return wh.call(e,t)}))}:gd;const iu=Ch;function Nh(e,t){return Ys(e,iu(e),t)}function vd(e,t){for(var n=-1,r=t.length,l=e.length;++n<r;)e[l+n]=t[n];return e}var jh=Object.getOwnPropertySymbols,kh=jh?function(e){for(var t=[];e;)vd(t,iu(e)),e=tu(e);return t}:gd;const yd=kh;function Sh(e,t){return Ys(e,yd(e),t)}function bd(e,t,n){var r=t(e);return yl(e)?r:vd(r,n(e))}function Eh(e){return bd(e,lu,iu)}function Mh(e){return bd(e,su,yd)}var _h=Tn(vt,"DataView");const Ga=_h;var Th=Tn(vt,"Promise");const Ya=Th;var Ph=Tn(vt,"Set");const Qa=Ph;var Lh=Tn(vt,"WeakMap");const Ka=Lh;var n2="[object Map]",Fh="[object Object]",r2="[object Promise]",l2="[object Set]",s2="[object WeakMap]",i2="[object DataView]",Ih=_n(Ga),Ah=_n(dl),Oh=_n(Ya),Dh=_n(Qa),$h=_n(Ka),un=En;(Ga&&un(new Ga(new ArrayBuffer(1)))!=i2||dl&&un(new dl)!=n2||Ya&&un(Ya.resolve())!=r2||Qa&&un(new Qa)!=l2||Ka&&un(new Ka)!=s2)&&(un=function(e){var t=En(e),n=t==Fh?e.constructor:void 0,r=n?_n(n):"";if(r)switch(r){case Ih:return i2;case Ah:return n2;case Oh:return r2;case Dh:return l2;case $h:return s2}return t});const au=un;var zh=Object.prototype,Rh=zh.hasOwnProperty;function Vh(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&Rh.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var Bh=vt.Uint8Array;const a2=Bh;function ou(e){var t=new e.constructor(e.byteLength);return new a2(t).set(new a2(e)),t}function Uh(e,t){var n=t?ou(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Zh=/\w*$/;function Hh(e){var t=new e.constructor(e.source,Zh.exec(e));return t.lastIndex=e.lastIndex,t}var o2=Kt?Kt.prototype:void 0,u2=o2?o2.valueOf:void 0;function Wh(e){return u2?Object(u2.call(e)):{}}function qh(e,t){var n=t?ou(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Gh="[object Boolean]",Yh="[object Date]",Qh="[object Map]",Kh="[object Number]",Xh="[object RegExp]",Jh="[object Set]",e9="[object String]",t9="[object Symbol]",n9="[object ArrayBuffer]",r9="[object DataView]",l9="[object Float32Array]",s9="[object Float64Array]",i9="[object Int8Array]",a9="[object Int16Array]",o9="[object Int32Array]",u9="[object Uint8Array]",c9="[object Uint8ClampedArray]",d9="[object Uint16Array]",f9="[object Uint32Array]";function m9(e,t,n){var r=e.constructor;switch(t){case n9:return ou(e);case Gh:case Yh:return new r(+e);case r9:return Uh(e,n);case l9:case s9:case i9:case a9:case o9:case u9:case c9:case d9:case f9:return qh(e,n);case Qh:return new r;case Kh:case e9:return new r(e);case Xh:return Hh(e);case Jh:return new r;case t9:return Wh(e)}}var c2=Object.create,p9=function(){function e(){}return function(t){if(!vl(t))return{};if(c2)return c2(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const h9=p9;function x9(e){return typeof e.constructor=="function"&&!ru(e)?h9(tu(e)):{}}var g9="[object Map]";function v9(e){return Mn(e)&&au(e)==g9}var d2=cr&&cr.isMap,y9=d2?nu(d2):v9;const b9=y9;var w9="[object Set]";function C9(e){return Mn(e)&&au(e)==w9}var f2=cr&&cr.isSet,N9=f2?nu(f2):C9;const j9=N9;var k9=1,S9=2,E9=4,wd="[object Arguments]",M9="[object Array]",_9="[object Boolean]",T9="[object Date]",P9="[object Error]",Cd="[object Function]",L9="[object GeneratorFunction]",F9="[object Map]",I9="[object Number]",Nd="[object Object]",A9="[object RegExp]",O9="[object Set]",D9="[object String]",$9="[object Symbol]",z9="[object WeakMap]",R9="[object ArrayBuffer]",V9="[object DataView]",B9="[object Float32Array]",U9="[object Float64Array]",Z9="[object Int8Array]",H9="[object Int16Array]",W9="[object Int32Array]",q9="[object Uint8Array]",G9="[object Uint8ClampedArray]",Y9="[object Uint16Array]",Q9="[object Uint32Array]",H={};H[wd]=H[M9]=H[R9]=H[V9]=H[_9]=H[T9]=H[B9]=H[U9]=H[Z9]=H[H9]=H[W9]=H[F9]=H[I9]=H[Nd]=H[A9]=H[O9]=H[D9]=H[$9]=H[q9]=H[G9]=H[Y9]=H[Q9]=!0;H[P9]=H[Cd]=H[z9]=!1;function Xl(e,t,n,r,l,i){var a,o=t&k9,u=t&S9,c=t&E9;if(n&&(a=l?n(e,r,l,i):n(e)),a!==void 0)return a;if(!vl(e))return e;var p=yl(e);if(p){if(a=Vh(e),!o)return xd(e,a)}else{var h=au(e),f=h==Cd||h==L9;if(cd(e))return vh(e,o);if(h==Nd||h==wd||f&&!l){if(a=u||f?{}:x9(e),!o)return u?Sh(e,xh(a,e)):Nh(e,dh(a,e))}else{if(!H[h])return l?e:{};a=m9(e,h,o)}}i||(i=new yr);var y=i.get(e);if(y)return y;i.set(e,a),j9(e)?e.forEach(function(k){a.add(Xl(k,t,n,k,e,i))}):b9(e)&&e.forEach(function(k,m){a.set(m,Xl(k,t,n,m,e,i))});var w=c?u?Mh:Eh:u?su:lu,b=p?void 0:w(e);return u6(b||e,function(k,m){b&&(m=k,k=e[m]),ad(a,m,Xl(k,t,n,m,e,i))}),a}var K9=4;function m2(e){return Xl(e,K9)}function jd(e,t){for(var n=-1,r=e==null?0:e.length,l=Array(r);++n<r;)l[n]=t(e[n],n,e);return l}var X9="[object Symbol]";function uu(e){return typeof e=="symbol"||Mn(e)&&En(e)==X9}var J9="Expected a function";function cu(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(J9);var n=function(){var r=arguments,l=t?t.apply(this,r):r[0],i=n.cache;if(i.has(l))return i.get(l);var a=e.apply(this,r);return n.cache=i.set(l,a)||i,a};return n.cache=new(cu.Cache||tn),n}cu.Cache=tn;var e5=500;function t5(e){var t=cu(e,function(r){return n.size===e5&&n.clear(),r}),n=t.cache;return t}var n5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r5=/\\(\\)?/g,l5=t5(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(n5,function(n,r,l,i){t.push(l?i.replace(r5,"$1"):r||n)}),t});const s5=l5;var i5=1/0;function a5(e){if(typeof e=="string"||uu(e))return e;var t=e+"";return t=="0"&&1/e==-i5?"-0":t}var o5=1/0,p2=Kt?Kt.prototype:void 0,h2=p2?p2.toString:void 0;function kd(e){if(typeof e=="string")return e;if(yl(e))return jd(e,kd)+"";if(uu(e))return h2?h2.call(e):"";var t=e+"";return t=="0"&&1/e==-o5?"-0":t}function u5(e){return e==null?"":kd(e)}function Sd(e){return yl(e)?jd(e,a5):uu(e)?[e]:xd(s5(u5(e)))}var c5=!0;function d5(e,t){if(!c5){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}var Ed={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=typeof Symbol=="function"&&Symbol.for,du=fe?Symbol.for("react.element"):60103,fu=fe?Symbol.for("react.portal"):60106,Qs=fe?Symbol.for("react.fragment"):60107,Ks=fe?Symbol.for("react.strict_mode"):60108,Xs=fe?Symbol.for("react.profiler"):60114,Js=fe?Symbol.for("react.provider"):60109,ei=fe?Symbol.for("react.context"):60110,mu=fe?Symbol.for("react.async_mode"):60111,ti=fe?Symbol.for("react.concurrent_mode"):60111,ni=fe?Symbol.for("react.forward_ref"):60112,ri=fe?Symbol.for("react.suspense"):60113,f5=fe?Symbol.for("react.suspense_list"):60120,li=fe?Symbol.for("react.memo"):60115,si=fe?Symbol.for("react.lazy"):60116,m5=fe?Symbol.for("react.block"):60121,p5=fe?Symbol.for("react.fundamental"):60117,h5=fe?Symbol.for("react.responder"):60118,x5=fe?Symbol.for("react.scope"):60119;function Ue(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case du:switch(e=e.type,e){case mu:case ti:case Qs:case Xs:case Ks:case ri:return e;default:switch(e=e&&e.$$typeof,e){case ei:case ni:case si:case li:case Js:return e;default:return t}}case fu:return t}}}function Md(e){return Ue(e)===ti}U.AsyncMode=mu;U.ConcurrentMode=ti;U.ContextConsumer=ei;U.ContextProvider=Js;U.Element=du;U.ForwardRef=ni;U.Fragment=Qs;U.Lazy=si;U.Memo=li;U.Portal=fu;U.Profiler=Xs;U.StrictMode=Ks;U.Suspense=ri;U.isAsyncMode=function(e){return Md(e)||Ue(e)===mu};U.isConcurrentMode=Md;U.isContextConsumer=function(e){return Ue(e)===ei};U.isContextProvider=function(e){return Ue(e)===Js};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===du};U.isForwardRef=function(e){return Ue(e)===ni};U.isFragment=function(e){return Ue(e)===Qs};U.isLazy=function(e){return Ue(e)===si};U.isMemo=function(e){return Ue(e)===li};U.isPortal=function(e){return Ue(e)===fu};U.isProfiler=function(e){return Ue(e)===Xs};U.isStrictMode=function(e){return Ue(e)===Ks};U.isSuspense=function(e){return Ue(e)===ri};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Qs||e===ti||e===Xs||e===Ks||e===ri||e===f5||typeof e=="object"&&e!==null&&(e.$$typeof===si||e.$$typeof===li||e.$$typeof===Js||e.$$typeof===ei||e.$$typeof===ni||e.$$typeof===p5||e.$$typeof===h5||e.$$typeof===x5||e.$$typeof===m5)};U.typeOf=Ue;Ed.exports=U;var g5=Ed.exports,_d=g5,v5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},y5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Td={};Td[_d.ForwardRef]=v5;Td[_d.Memo]=y5;function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}function Pd(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}var tt=function(t){return typeof t=="function"},ii=function(t){return t!==null&&typeof t=="object"},b5=function(t){return String(Math.floor(Number(t)))===t},Hi=function(t){return Object.prototype.toString.call(t)==="[object String]"},Wi=function(t){return ii(t)&&tt(t.then)};function He(e,t,n,r){r===void 0&&(r=0);for(var l=Sd(t);e&&r<l.length;)e=e[l[r++]];return e===void 0?n:e}function gn(e,t,n){for(var r=m2(e),l=r,i=0,a=Sd(t);i<a.length-1;i++){var o=a[i],u=He(e,a.slice(0,i+1));if(u&&(ii(u)||Array.isArray(u)))l=l[o]=m2(u);else{var c=a[i+1];l=l[o]=b5(c)&&Number(c)>=0?[]:{}}}return(i===0?e:l)[a[i]]===n?e:(n===void 0?delete l[a[i]]:l[a[i]]=n,i===0&&n===void 0&&delete r[a[i]],r)}function Ld(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var l=0,i=Object.keys(e);l<i.length;l++){var a=i[l],o=e[a];ii(o)?n.get(o)||(n.set(o,!0),r[a]=Array.isArray(o)?[]:{},Ld(o,t,n,r[a])):r[a]=t}return r}var ai=C.createContext(void 0);ai.displayName="FormikContext";ai.Provider;ai.Consumer;function w5(){var e=C.useContext(ai);return e||d5(!1),e}function C5(e,t){switch(t.type){case"SET_VALUES":return me({},e,{values:t.payload});case"SET_TOUCHED":return me({},e,{touched:t.payload});case"SET_ERRORS":return on(e.errors,t.payload)?e:me({},e,{errors:t.payload});case"SET_STATUS":return me({},e,{status:t.payload});case"SET_ISSUBMITTING":return me({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return me({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return me({},e,{values:gn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return me({},e,{touched:gn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return me({},e,{errors:gn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return me({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return me({},e,{touched:Ld(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return me({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return me({},e,{isSubmitting:!1});default:return e}}var ln={},$l={};function N5(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,l=r===void 0?!0:r,i=e.validateOnMount,a=i===void 0?!1:i,o=e.isInitialValid,u=e.enableReinitialize,c=u===void 0?!1:u,p=e.onSubmit,h=Pd(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=me({validateOnChange:n,validateOnBlur:l,validateOnMount:a,onSubmit:p},h),y=C.useRef(f.initialValues),w=C.useRef(f.initialErrors||ln),b=C.useRef(f.initialTouched||$l),k=C.useRef(f.initialStatus),m=C.useRef(!1),d=C.useRef({});C.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var x=C.useReducer(C5,{values:f.initialValues,errors:f.initialErrors||ln,touched:f.initialTouched||$l,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),v=x[0],N=x[1],M=C.useCallback(function(g,T){return new Promise(function(F,I){var D=f.validate(g,T);D==null?F(ln):Wi(D)?D.then(function(V){F(V||ln)},function(V){I(V)}):F(D)})},[f.validate]),_=C.useCallback(function(g,T){var F=f.validationSchema,I=tt(F)?F(T):F,D=T&&I.validateAt?I.validateAt(T,g):k5(g,I);return new Promise(function(V,ue){D.then(function(){V(ln)},function(yt){yt.name==="ValidationError"?V(j5(yt)):ue(yt)})})},[f.validationSchema]),P=C.useCallback(function(g,T){return new Promise(function(F){return F(d.current[g].validate(T))})},[]),Z=C.useCallback(function(g){var T=Object.keys(d.current).filter(function(I){return tt(d.current[I].validate)}),F=T.length>0?T.map(function(I){return P(I,He(g,I))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(F).then(function(I){return I.reduce(function(D,V,ue){return V==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||V&&(D=gn(D,T[ue],V)),D},{})})},[P]),L=C.useCallback(function(g){return Promise.all([Z(g),f.validationSchema?_(g):{},f.validate?M(g):{}]).then(function(T){var F=T[0],I=T[1],D=T[2],V=qa.all([F,I,D],{arrayMerge:S5});return V})},[f.validate,f.validationSchema,Z,M,_]),R=Ze(function(g){return g===void 0&&(g=v.values),N({type:"SET_ISVALIDATING",payload:!0}),L(g).then(function(T){return m.current&&(N({type:"SET_ISVALIDATING",payload:!1}),N({type:"SET_ERRORS",payload:T})),T})});C.useEffect(function(){a&&m.current===!0&&on(y.current,f.initialValues)&&R(y.current)},[a,R]);var Ee=C.useCallback(function(g){var T=g&&g.values?g.values:y.current,F=g&&g.errors?g.errors:w.current?w.current:f.initialErrors||{},I=g&&g.touched?g.touched:b.current?b.current:f.initialTouched||{},D=g&&g.status?g.status:k.current?k.current:f.initialStatus;y.current=T,w.current=F,b.current=I,k.current=D;var V=function(){N({type:"RESET_FORM",payload:{isSubmitting:!!g&&!!g.isSubmitting,errors:F,touched:I,status:D,values:T,isValidating:!!g&&!!g.isValidating,submitCount:g&&g.submitCount&&typeof g.submitCount=="number"?g.submitCount:0}})};if(f.onReset){var ue=f.onReset(v.values,wu);Wi(ue)?ue.then(V):V()}else V()},[f.initialErrors,f.initialStatus,f.initialTouched]);C.useEffect(function(){m.current===!0&&!on(y.current,f.initialValues)&&(c&&(y.current=f.initialValues,Ee()),a&&R(y.current))},[c,f.initialValues,Ee,a,R]),C.useEffect(function(){c&&m.current===!0&&!on(w.current,f.initialErrors)&&(w.current=f.initialErrors||ln,N({type:"SET_ERRORS",payload:f.initialErrors||ln}))},[c,f.initialErrors]),C.useEffect(function(){c&&m.current===!0&&!on(b.current,f.initialTouched)&&(b.current=f.initialTouched||$l,N({type:"SET_TOUCHED",payload:f.initialTouched||$l}))},[c,f.initialTouched]),C.useEffect(function(){c&&m.current===!0&&!on(k.current,f.initialStatus)&&(k.current=f.initialStatus,N({type:"SET_STATUS",payload:f.initialStatus}))},[c,f.initialStatus,f.initialTouched]);var Xe=Ze(function(g){if(d.current[g]&&tt(d.current[g].validate)){var T=He(v.values,g),F=d.current[g].validate(T);return Wi(F)?(N({type:"SET_ISVALIDATING",payload:!0}),F.then(function(I){return I}).then(function(I){N({type:"SET_FIELD_ERROR",payload:{field:g,value:I}}),N({type:"SET_ISVALIDATING",payload:!1})})):(N({type:"SET_FIELD_ERROR",payload:{field:g,value:F}}),Promise.resolve(F))}else if(f.validationSchema)return N({type:"SET_ISVALIDATING",payload:!0}),_(v.values,g).then(function(I){return I}).then(function(I){N({type:"SET_FIELD_ERROR",payload:{field:g,value:I[g]}}),N({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),bl=C.useCallback(function(g,T){var F=T.validate;d.current[g]={validate:F}},[]),di=C.useCallback(function(g){delete d.current[g]},[]),Fn=Ze(function(g,T){N({type:"SET_TOUCHED",payload:g});var F=T===void 0?l:T;return F?R(v.values):Promise.resolve()}),In=C.useCallback(function(g){N({type:"SET_ERRORS",payload:g})},[]),S=Ze(function(g,T){var F=tt(g)?g(v.values):g;N({type:"SET_VALUES",payload:F});var I=T===void 0?n:T;return I?R(F):Promise.resolve()}),A=C.useCallback(function(g,T){N({type:"SET_FIELD_ERROR",payload:{field:g,value:T}})},[]),O=Ze(function(g,T,F){N({type:"SET_FIELD_VALUE",payload:{field:g,value:T}});var I=F===void 0?n:F;return I?R(gn(v.values,g,T)):Promise.resolve()}),K=C.useCallback(function(g,T){var F=T,I=g,D;if(!Hi(g)){g.persist&&g.persist();var V=g.target?g.target:g.currentTarget,ue=V.type,yt=V.name,pi=V.id,hi=V.value,Kd=V.checked,Gx=V.outerHTML,Cu=V.options,Xd=V.multiple;F=T||yt||pi,I=/number|range/.test(ue)?(D=parseFloat(hi),isNaN(D)?"":D):/checkbox/.test(ue)?M5(He(v.values,F),Kd,hi):Cu&&Xd?E5(Cu):hi}F&&O(F,I)},[O,v.values]),ne=Ze(function(g){if(Hi(g))return function(T){return K(T,g)};K(g)}),Je=Ze(function(g,T,F){T===void 0&&(T=!0),N({type:"SET_FIELD_TOUCHED",payload:{field:g,value:T}});var I=F===void 0?l:F;return I?R(v.values):Promise.resolve()}),ut=C.useCallback(function(g,T){g.persist&&g.persist();var F=g.target,I=F.name,D=F.id,V=F.outerHTML,ue=T||I||D;Je(ue,!0)},[Je]),nn=Ze(function(g){if(Hi(g))return function(T){return ut(T,g)};ut(g)}),ct=C.useCallback(function(g){tt(g)?N({type:"SET_FORMIK_STATE",payload:g}):N({type:"SET_FORMIK_STATE",payload:function(){return g}})},[]),rn=C.useCallback(function(g){N({type:"SET_STATUS",payload:g})},[]),bu=C.useCallback(function(g){N({type:"SET_ISSUBMITTING",payload:g})},[]),fi=Ze(function(){return N({type:"SUBMIT_ATTEMPT"}),R().then(function(g){var T=g instanceof Error,F=!T&&Object.keys(g).length===0;if(F){var I;try{if(I=Zd(),I===void 0)return}catch(D){throw D}return Promise.resolve(I).then(function(D){return m.current&&N({type:"SUBMIT_SUCCESS"}),D}).catch(function(D){if(m.current)throw N({type:"SUBMIT_FAILURE"}),D})}else if(m.current&&(N({type:"SUBMIT_FAILURE"}),T))throw g})}),Ud=Ze(function(g){g&&g.preventDefault&&tt(g.preventDefault)&&g.preventDefault(),g&&g.stopPropagation&&tt(g.stopPropagation)&&g.stopPropagation(),fi().catch(function(T){console.warn("Warning: An unhandled error was caught from submitForm()",T)})}),wu={resetForm:Ee,validateForm:R,validateField:Xe,setErrors:In,setFieldError:A,setFieldTouched:Je,setFieldValue:O,setStatus:rn,setSubmitting:bu,setTouched:Fn,setValues:S,setFormikState:ct,submitForm:fi},Zd=Ze(function(){return p(v.values,wu)}),Hd=Ze(function(g){g&&g.preventDefault&&tt(g.preventDefault)&&g.preventDefault(),g&&g.stopPropagation&&tt(g.stopPropagation)&&g.stopPropagation(),Ee()}),Wd=C.useCallback(function(g){return{value:He(v.values,g),error:He(v.errors,g),touched:!!He(v.touched,g),initialValue:He(y.current,g),initialTouched:!!He(b.current,g),initialError:He(w.current,g)}},[v.errors,v.touched,v.values]),qd=C.useCallback(function(g){return{setValue:function(F,I){return O(g,F,I)},setTouched:function(F,I){return Je(g,F,I)},setError:function(F){return A(g,F)}}},[O,Je,A]),Gd=C.useCallback(function(g){var T=ii(g),F=T?g.name:g,I=He(v.values,F),D={name:F,value:I,onChange:ne,onBlur:nn};if(T){var V=g.type,ue=g.value,yt=g.as,pi=g.multiple;V==="checkbox"?ue===void 0?D.checked=!!I:(D.checked=!!(Array.isArray(I)&&~I.indexOf(ue)),D.value=ue):V==="radio"?(D.checked=I===ue,D.value=ue):yt==="select"&&pi&&(D.value=D.value||[],D.multiple=!0)}return D},[nn,ne,v.values]),mi=C.useMemo(function(){return!on(y.current,v.values)},[y.current,v.values]),Yd=C.useMemo(function(){return typeof o<"u"?mi?v.errors&&Object.keys(v.errors).length===0:o!==!1&&tt(o)?o(f):o:v.errors&&Object.keys(v.errors).length===0},[o,mi,v.errors,f]),Qd=me({},v,{initialValues:y.current,initialErrors:w.current,initialTouched:b.current,initialStatus:k.current,handleBlur:nn,handleChange:ne,handleReset:Hd,handleSubmit:Ud,resetForm:Ee,setErrors:In,setFormikState:ct,setFieldTouched:Je,setFieldValue:O,setFieldError:A,setStatus:rn,setSubmitting:bu,setTouched:Fn,setValues:S,submitForm:fi,validateForm:R,validateField:Xe,isValid:Yd,dirty:mi,unregisterField:di,registerField:bl,getFieldProps:Gd,getFieldMeta:Wd,getFieldHelpers:qd,validateOnBlur:l,validateOnChange:n,validateOnMount:a});return Qd}function j5(e){var t={};if(e.inner){if(e.inner.length===0)return gn(t,e.path,e.message);for(var l=e.inner,n=Array.isArray(l),r=0,l=n?l:l[Symbol.iterator]();;){var i;if(n){if(r>=l.length)break;i=l[r++]}else{if(r=l.next(),r.done)break;i=r.value}var a=i;He(t,a.path)||(t=gn(t,a.path,a.message))}}return t}function k5(e,t,n,r){n===void 0&&(n=!1),r===void 0&&(r={});var l=Xa(e);return t[n?"validateSync":"validate"](l,{abortEarly:!1,context:r})}function Xa(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(l){return Array.isArray(l)===!0||Hc(l)?Xa(l):l!==""?l:void 0}):Hc(e[r])?t[r]=Xa(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function S5(e,t,n){var r=e.slice();return t.forEach(function(i,a){if(typeof r[a]>"u"){var o=n.clone!==!1,u=o&&n.isMergeableObject(i);r[a]=u?qa(Array.isArray(i)?[]:{},i,n):i}else n.isMergeableObject(i)?r[a]=qa(e[a],i,n):e.indexOf(i)===-1&&r.push(i)}),r}function E5(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function M5(e,t,n){if(typeof e=="boolean")return!!t;var r=[],l=!1,i=-1;if(Array.isArray(e))r=e,i=e.indexOf(n),l=i>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!l?r.concat(n):l?r.slice(0,i).concat(r.slice(i+1)):r}var _5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?C.useLayoutEffect:C.useEffect;function Ze(e){var t=C.useRef(e);return _5(function(){t.current=e}),C.useCallback(function(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t.current.apply(void 0,r)},[])}var T5=C.forwardRef(function(e,t){var n=e.action,r=Pd(e,["action"]),l=n??"#",i=w5(),a=i.handleReset,o=i.handleSubmit;return C.createElement("form",Object.assign({onSubmit:o,ref:t,onReset:a,action:l},r))});T5.displayName="Form";function Pn(e){this._maxSize=e,this.clear()}Pn.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Pn.prototype.get=function(e){return this._values[e]};Pn.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var P5=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Fd=/^\d+$/,L5=/^\d/,F5=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,I5=/^\s*(['"]?)(.*?)(\1)\s*$/,pu=512,x2=new Pn(pu),g2=new Pn(pu),v2=new Pn(pu),vn={Cache:Pn,split:Ja,normalizePath:qi,setter:function(e){var t=qi(e);return g2.get(e)||g2.set(e,function(r,l){for(var i=0,a=t.length,o=r;i<a-1;){var u=t[i];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;o=o[t[i++]]}o[t[i]]=l})},getter:function(e,t){var n=qi(e);return v2.get(e)||v2.set(e,function(l){for(var i=0,a=n.length;i<a;)if(l!=null||!t)l=l[n[i++]];else return;return l})},join:function(e){return e.reduce(function(t,n){return t+(hu(n)||Fd.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){A5(Array.isArray(e)?e:Ja(e),t,n)}};function qi(e){return x2.get(e)||x2.set(e,Ja(e).map(function(t){return t.replace(I5,"$2")}))}function Ja(e){return e.match(P5)||[""]}function A5(e,t,n){var r=e.length,l,i,a,o;for(i=0;i<r;i++)l=e[i],l&&($5(l)&&(l='"'+l+'"'),o=hu(l),a=!o&&/^\d+$/.test(l),t.call(n,l,o,a,i,e))}function hu(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function O5(e){return e.match(L5)&&!e.match(Fd)}function D5(e){return F5.test(e)}function $5(e){return!hu(e)&&(O5(e)||D5(e))}const z5=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,oi=e=>e.match(z5)||[],ui=e=>e[0].toUpperCase()+e.slice(1),xu=(e,t)=>oi(e).join(t).toLowerCase(),Id=e=>oi(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),R5=e=>ui(Id(e)),V5=e=>xu(e,"_"),B5=e=>xu(e,"-"),U5=e=>ui(xu(e," ")),Z5=e=>oi(e).map(ui).join(" ");var Gi={words:oi,upperFirst:ui,camelCase:Id,pascalCase:R5,snakeCase:V5,kebabCase:B5,sentenceCase:U5,titleCase:Z5},gu={exports:{}};gu.exports=function(e){return Ad(H5(e),e)};gu.exports.array=Ad;function Ad(e,t){var n=e.length,r=new Array(n),l={},i=n,a=W5(t),o=q5(e);for(t.forEach(function(c){if(!o.has(c[0])||!o.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)l[i]||u(e[i],i,new Set);return r;function u(c,p,h){if(h.has(c)){var f;try{f=", node was:"+JSON.stringify(c)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!o.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!l[p]){l[p]=!0;var y=a.get(c)||new Set;if(y=Array.from(y),p=y.length){h.add(c);do{var w=y[--p];u(w,o.get(w),h)}while(p);h.delete(c)}r[--n]=c}}}function H5(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var l=e[n];t.add(l[0]),t.add(l[1])}return Array.from(t)}function W5(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var l=e[n];t.has(l[0])||t.set(l[0],new Set),t.has(l[1])||t.set(l[1],new Set),t.get(l[0]).add(l[1])}return t}function q5(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var G5=gu.exports;const Y5=no(G5),Q5=Object.prototype.toString,K5=Error.prototype.toString,X5=RegExp.prototype.toString,J5=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",ex=/^Symbol\((.*)\)(.*)$/;function tx(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function y2(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return tx(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return J5.call(e).replace(ex,"Symbol($1)");const r=Q5.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+K5.call(e)+"]":r==="RegExp"?X5.call(e):null}function nr(e,t){let n=y2(e,t);return n!==null?n:JSON.stringify(e,function(r,l){let i=y2(this[r],t);return i!==null?i:l},2)}function Od(e){return e==null?[]:[].concat(e)}let nx=/\$\{\s*(\w+)\s*\}/g;class Ae extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(nx,(l,i)=>nr(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,l){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=l,this.errors=[],this.inner=[],Od(t).forEach(i=>{Ae.isError(i)?(this.errors.push(...i.errors),this.inner=this.inner.concat(i.inner.length?i.inner:i)):this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,Ae)}}let wt={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const l=r!=null&&r!==n?` (cast from the value \`${nr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${nr(n,!0)}\``+l:`${e} must match the configured type. The validated value was: \`${nr(n,!0)}\``+l}},nt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},rx={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},eo={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},lx={isValue:"${path} field must be ${value}"},to={noUnknown:"${path} field has unspecified keys: ${unknown}"},sx={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:wt,string:nt,number:rx,date:eo,object:to,array:sx,boolean:lx});const vu=e=>e&&e.__isYupSchema__;class Ss{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:l,otherwise:i}=n,a=typeof r=="function"?r:(...o)=>o.every(u=>u===r);return new Ss(t,(o,u)=>{var c;let p=a(...o)?l:i;return(c=p==null?void 0:p(u))!=null?c:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),l=this.fn(r,t,n);if(l===void 0||l===t)return t;if(!vu(l))throw new TypeError("conditions must return a schema object");return l.resolve(n)}}const zl={context:"$",value:"."};class Ln{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===zl.context,this.isValue=this.key[0]===zl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?zl.context:this.isValue?zl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&vn.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let l=this.isContext?r:this.isValue?t:n;return this.getter&&(l=this.getter(l||{})),this.map&&(l=this.map(l)),l}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Ln.prototype.__isYupRef=!0;const mn=e=>e==null;function On(e){function t({value:n,path:r="",options:l,originalValue:i,schema:a},o,u){const{name:c,test:p,params:h,message:f,skipAbsent:y}=e;let{parent:w,context:b,abortEarly:k=a.spec.abortEarly}=l;function m(L){return Ln.isRef(L)?L.getValue(n,w,b):L}function d(L={}){const R=Object.assign({value:n,originalValue:i,label:a.spec.label,path:L.path||r,spec:a.spec},h,L.params);for(const Xe of Object.keys(R))R[Xe]=m(R[Xe]);const Ee=new Ae(Ae.formatError(L.message||f,R),n,R.path,L.type||c);return Ee.params=R,Ee}const x=k?o:u;let v={path:r,parent:w,type:c,from:l.from,createError:d,resolve:m,options:l,originalValue:i,schema:a};const N=L=>{Ae.isError(L)?x(L):L?u(null):x(d())},M=L=>{Ae.isError(L)?x(L):o(L)},_=y&&mn(n);if(!l.sync){try{Promise.resolve(_?!0:p.call(v,n,v)).then(N,M)}catch(L){M(L)}return}let P;try{var Z;if(P=_?!0:p.call(v,n,v),typeof((Z=P)==null?void 0:Z.then)=="function")throw new Error(`Validation test of type: "${v.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(L){M(L);return}N(P)}return t.OPTIONS=e,t}function ix(e,t,n,r=n){let l,i,a;return t?(vn.forEach(t,(o,u,c)=>{let p=u?o.slice(1,o.length-1):o;e=e.resolve({context:r,parent:l,value:n});let h=e.type==="tuple",f=c?parseInt(p,10):0;if(e.innerType||h){if(h&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);l=n,n=n&&n[f],e=h?e.spec.types[f]:e.innerType}if(!c){if(!e.fields||!e.fields[p])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);l=n,n=n&&n[p],e=e.fields[p]}i=p,a=u?"["+o+"]":"."+o}),{schema:e,parent:l,parentPath:i}):{parent:l,parentPath:t,schema:e}}class Es extends Set{describe(){const t=[];for(const n of this.values())t.push(Ln.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Es(this.values())}merge(t,n){const r=this.clone();return t.forEach(l=>r.add(l)),n.forEach(l=>r.delete(l)),r}}function Yn(e,t=new Map){if(vu(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=Yn(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,l]of e.entries())n.set(r,Yn(l,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(Yn(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,l]of Object.entries(e))n[r]=Yn(l,t)}else throw Error(`Unable to clone ${e}`);return n}class gt{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Es,this._blacklist=new Es,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(wt.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Yn(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const l=Object.assign({},n.spec,r.spec);return r.spec=l,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(a=>{i.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((l,i)=>i.resolve(l,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,l;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(l=t.recursive)!=null?l:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),l=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(l&&mn(i))return i;let a=nr(t),o=nr(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(o!==a?`result of cast: ${o}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((l,i)=>i.call(this,l,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,l){let{path:i,originalValue:a=t,strict:o=this.spec.strict}=n,u=t;o||(u=this._cast(u,Object.assign({assert:!1},n)));let c=[];for(let p of Object.values(this.internalTests))p&&c.push(p);this.runTests({path:i,value:u,originalValue:a,options:n,tests:c},r,p=>{if(p.length)return l(p,u);this.runTests({path:i,value:u,originalValue:a,options:n,tests:this.tests},r,l)})}runTests(t,n,r){let l=!1,{tests:i,value:a,originalValue:o,path:u,options:c}=t,p=b=>{l||(l=!0,n(b,a))},h=b=>{l||(l=!0,r(b,a))},f=i.length,y=[];if(!f)return h([]);let w={value:a,originalValue:o,path:u,options:c,schema:this};for(let b=0;b<i.length;b++){const k=i[b];k(w,p,function(d){d&&(y=y.concat(d)),--f<=0&&h(y)})}}asNestedTest({key:t,index:n,parent:r,parentPath:l,originalParent:i,options:a}){const o=t??n;if(o==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof o=="number";let c=r[o];const p=Object.assign({},a,{strict:!0,parent:r,value:c,originalValue:i[o],key:void 0,[u?"index":"key"]:o,path:u||o.includes(".")?`${l||""}[${c?o:`"${o}"`}]`:(l?`${l}.`:"")+t});return(h,f,y)=>this.resolve(p)._validate(c,p,f,y)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((l,i)=>r._validate(t,n,(a,o)=>{Ae.isError(a)&&(a.value=o),i(a)},(a,o)=>{a.length?i(new Ae(a,o)):l(o)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),l;return r._validate(t,Object.assign({},n,{sync:!0}),(i,a)=>{throw Ae.isError(i)&&(i.value=a),i},(i,a)=>{if(i.length)throw new Ae(i,t);l=a}),l}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Ae.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Ae.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this):Yn(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=On({message:n,name:"nullable",test(l){return l===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=On({message:n,name:"optionality",test(l){return l===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=wt.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=wt.notNull){return this.nullability(!1,t)}required(t=wt.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=wt.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),l=On(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(i||a.OPTIONS.test===l.OPTIONS.test))),r.tests.push(l),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),l=Od(t).map(i=>new Ln(i));return l.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new Ss(l,n):Ss.fromOptions(l,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=On({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=wt.oneOf){let r=this.clone();return t.forEach(l=>{r._whitelist.add(l),r._blacklist.delete(l)}),r.internalTests.whiteList=On({message:n,name:"oneOf",skipAbsent:!0,test(l){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(l)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),r}notOneOf(t,n=wt.notOneOf){let r=this.clone();return t.forEach(l=>{r._blacklist.add(l),r._whitelist.delete(l)}),r.internalTests.blacklist=On({message:n,name:"notOneOf",test(l){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(l)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:l,optional:i,nullable:a}=n.spec;return{meta:l,label:r,optional:i,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,c,p)=>p.findIndex(h=>h.name===u.name)===c)}}}gt.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])gt.prototype[`${e}At`]=function(t,n,r={}){const{parent:l,parentPath:i,schema:a}=ix(this,t,n,r.context);return a[e](l&&l[i],Object.assign({},r,{parent:l,path:t}))};for(const e of["equals","is"])gt.prototype[e]=gt.prototype.oneOf;for(const e of["not","nope"])gt.prototype[e]=gt.prototype.notOneOf;let ax=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ox=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,ux=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,cx=e=>mn(e)||e===e.trim(),dx={}.toString();function Dd(){return new $d}class $d extends gt{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const l=t!=null&&t.toString?t.toString():t;return l===dx?t:l})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||wt.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=nt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=nt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=nt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,l,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:l,name:i}=n:l=n),this.test({name:i||"matches",message:l||nt.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=nt.email){return this.matches(ax,{name:"email",message:t,excludeEmptyString:!0})}url(t=nt.url){return this.matches(ox,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=nt.uuid){return this.matches(ux,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=nt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:cx})}lowercase(t=nt.lowercase){return this.transform(n=>mn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>mn(n)||n===n.toLowerCase()})}uppercase(t=nt.uppercase){return this.transform(n=>mn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>mn(n)||n===n.toUpperCase()})}}Dd.prototype=$d.prototype;var fx=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function mx(e){var t=[1,4,5,6,7,10,11],n=0,r,l;if(l=fx.exec(e)){for(var i=0,a;a=t[i];++i)l[a]=+l[a]||0;l[2]=(+l[2]||1)-1,l[3]=+l[3]||1,l[7]=l[7]?String(l[7]).substr(0,3):0,(l[8]===void 0||l[8]==="")&&(l[9]===void 0||l[9]==="")?r=+new Date(l[1],l[2],l[3],l[4],l[5],l[6],l[7]):(l[8]!=="Z"&&l[9]!==void 0&&(n=l[10]*60+l[11],l[9]==="+"&&(n=0-n)),r=Date.UTC(l[1],l[2],l[3],l[4],l[5]+n,l[6],l[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let px=new Date(""),hx=e=>Object.prototype.toString.call(e)==="[object Date]";class ci extends gt{constructor(){super({type:"date",check(t){return hx(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=mx(t),isNaN(t)?ci.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Ln.isRef(t))r=t;else{let l=this.cast(t);if(!this._typeCheck(l))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=l}return r}min(t,n=eo.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(l){return l>=this.resolve(r)}})}max(t,n=eo.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(l){return l<=this.resolve(r)}})}}ci.INVALID_DATE=px;ci.prototype;function xx(e,t=[]){let n=[],r=new Set,l=new Set(t.map(([a,o])=>`${a}-${o}`));function i(a,o){let u=vn.split(a)[0];r.add(u),l.has(`${o}-${u}`)||n.push([o,u])}for(const a of Object.keys(e)){let o=e[a];r.add(a),Ln.isRef(o)&&o.isSibling?i(o.path,a):vu(o)&&"deps"in o&&o.deps.forEach(u=>i(u,a))}return Y5.array(Array.from(r),n).reverse()}function b2(e,t){let n=1/0;return e.some((r,l)=>{var i;if((i=t.path)!=null&&i.includes(r))return n=l,!0}),n}function zd(e){return(t,n)=>b2(e,t)-b2(e,n)}const gx=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Jl(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Jl(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Jl(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Jl)}):"optional"in e?e.optional():e}const vx=(e,t)=>{const n=[...vn.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),l=vn.getter(vn.join(n),!0)(e);return!!(l&&r in l)};let w2=e=>Object.prototype.toString.call(e)==="[object Object]";function yx(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const bx=zd([]);function Rd(e){return new Vd(e)}class Vd extends gt{constructor(t){super({type:"object",check(n){return w2(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=bx,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let l=super._cast(t,n);if(l===void 0)return this.getDefault(n);if(!this._typeCheck(l))return l;let i=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,o=[].concat(this._nodes,Object.keys(l).filter(h=>!this._nodes.includes(h))),u={},c=Object.assign({},n,{parent:u,__validating:n.__validating||!1}),p=!1;for(const h of o){let f=i[h],y=h in l;if(f){let w,b=l[h];c.path=(n.path?`${n.path}.`:"")+h,f=f.resolve({value:b,context:n.context,parent:u});let k=f instanceof gt?f.spec:void 0,m=k==null?void 0:k.strict;if(k!=null&&k.strip){p=p||h in l;continue}w=!n.__validating||!m?f.cast(l[h],c):l[h],w!==void 0&&(u[h]=w)}else y&&!a&&(u[h]=l[h]);(y!==h in u||u[h]!==l[h])&&(p=!0)}return p?u:l}_validate(t,n={},r,l){let{from:i=[],originalValue:a=t,recursive:o=this.spec.recursive}=n;n.from=[{schema:this,value:a},...i],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(u,c)=>{if(!o||!w2(c)){l(u,c);return}a=a||c;let p=[];for(let h of this._nodes){let f=this.fields[h];!f||Ln.isRef(f)||p.push(f.asNestedTest({options:n,key:h,parent:c,parentPath:n.path,originalParent:a}))}this.runTests({tests:p,value:c,originalValue:a,options:n},r,h=>{l(h.sort(this._sortErrors).concat(u),c)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[l,i]of Object.entries(this.fields)){const a=r[l];r[l]=a===void 0?i:a}return n.withMutation(l=>l.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var l;const i=this.fields[r];let a=t;(l=a)!=null&&l.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(a):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=xx(t,n),r._sortErrors=zd(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let l=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),l=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),l)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Jl(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let l=vn.getter(t,!0);return this.transform(i=>{if(!i)return i;let a=i;return vx(i,t)&&(a=Object.assign({},i),r||delete a[t],a[n]=l(i)),a})}json(){return this.transform(gx)}noUnknown(t=!0,n=to.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(l){if(l==null)return!0;const i=yx(this.schema,l);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=to.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const l of Object.keys(n))r[t(l)]=n[l];return r})}camelCase(){return this.transformKeys(Gi.camelCase)}snakeCase(){return this.transformKeys(Gi.snakeCase)}constantCase(){return this.transformKeys(t=>Gi.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[l,i]of Object.entries(this.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[l]})),n.fields[l]=i.describe(a)}return n}}Rd.prototype=Vd.prototype;function wx(){let e=Rd({mobileNo:Dd().required("Enter khat no.")});const t=N5({initialValues:{mobileNo:""},onSubmit:(l,i)=>{},validationSchema:e}),n=(l,i,a=null)=>l.length>a?i:l===""||/^[0-9\b]+$/.test(l)?l:i,r=l=>{let i=l.target.name,a=l.target.value;i=="mobileNo"&&t.setFieldValue("mobileNo",n(a,t.values.mobileNo,10))};return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:`export const returnCapitalize = (currentValue) => {
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

}`}),s.jsx("form",{onSubmit:t.handleSubmit,onChange:r,children:s.jsxs("div",{className:"form-group w-60 mb-6 md:px-4",children:[s.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Mobile No.",s.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s.jsx("input",{...t.getFieldProps("mobileNo"),type:"text",className:"cypress_mobileNo form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md ",placeholder:"Enter mobile no."}),s.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.mobileNo&&t.errors.mobileNo?t.errors.mobileNo:null})]})}),s.jsx(we,{code:`// Source - Me
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
            </form>`}),s.jsx("div",{className:"text-xl font-semibold mt-10",children:"# Powerups"})]})}function Cx(){return s.jsx("aside",{className:"w-64 bg-gray-200 h-screen",children:s.jsx("nav",{className:"p-10",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("span",{children:"Home"})}),s.jsx("li",{children:s.jsx("span",{children:"About"})}),s.jsx("li",{children:s.jsx("span",{children:"Details"})}),s.jsx("li",{children:s.jsx("span",{children:"Settings"})})]})})})}function Nx(){return s.jsx("header",{className:"bg-gray-200 p-4",children:s.jsx("h1",{className:"text-2xl font-bold text-right",children:"Header"})})}function jx(){return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:`import {BrowserRouter, Route, Routes } from 'react-router-dom'
      
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
      </BrowserRouter>`}),s.jsxs("div",{className:"flex",children:[s.jsx(Cx,{}),s.jsxs("div",{className:"flex flex-col w-full",children:[s.jsx(Nx,{}),s.jsx("main",{className:"p-20",children:s.jsxs(J1,{children:[s.jsx(G,{exact:!0,path:"/",element:s.jsx("h1",{children:"Dummy direct"})}),s.jsx(G,{path:"/about",element:s.jsx("h1",{children:"Dummy about"})}),s.jsx(G,{path:"/contact",element:s.jsx("h1",{children:"Dummy contact"})})]})})]})]})]})}function kx(){return s.jsx("div",{children:"Demo"})}function Sx(e){return xr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(e)}function Yi(e){const t=K1(),n=eu(),r=l=>{if(e==null||e.setshowSidebar(),n.pathname===e.path){window.location.reload();return}t(e.path)};return s.jsx(s.Fragment,{children:e.subMenuStatus?s.jsx("li",{className:"cursor-pointer",style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},children:e.title}):s.jsx("div",{className:"cursor-pointer",onClick:()=>r(e==null?void 0:e.menuId),children:s.jsx("li",{style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},href:e.path,children:e.title})})})}function C2(e){return xr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 5v11h16V5H4zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2V4.007zM1 19h22v2H1v-2z"}}]}]})(e)}function Ex(e){const[t,n]=C.useState("h-0"),r=()=>{t=="h-0"?n("h-auto"):n("h-0")};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"block",children:[e.path!=null&&s.jsxs("li",{className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-indigo-500",style:{width:"250px"},children:[s.jsx("div",{className:"flex-none ",children:s.jsx(C2,{})}),s.jsx("div",{className:"flex-initial w-40",children:s.jsx(Yi,{setshowSidebar:e==null?void 0:e.setshowSidebar,subMenuStatus:e.subMenuStatus,path:e.path,title:e.title})})]}),e.path==null&&s.jsxs("li",{onClick:r,className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-indigo-500",style:{width:"250px"},children:[s.jsx("div",{className:"flex-none ",children:s.jsx(C2,{})}),s.jsx("div",{className:"flex-initial w-40",children:s.jsx(Yi,{subMenuStatus:e==null?void 0:e.subMenuStatus,path:e.path,title:e.title})}),(e==null?void 0:e.subMenuStatus)&&s.jsxs("div",{className:"flex-none ",children:[t=="h-0"&&s.jsx(Bm,{size:18}),t=="h-auto"&&s.jsx(Sx,{size:18})]})]}),e.path==null&&s.jsx("div",{className:`transition-all duration-1000 ${t} overflow-hidden bg-gray-200`,children:e==null?void 0:e.subMenu.map(l=>s.jsx("div",{className:"flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer",style:{width:"250px"},children:s.jsx("div",{className:"flex-initial w-40",children:s.jsx(Yi,{setshowSidebar:e==null?void 0:e.setshowSidebar,path:l.path,title:l.menuName,menuId:l==null?void 0:l.id})})}))})]})})}function Mx(e){return xr({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#CFD8DC",points:"35,36 39,36 39,22 26,22 26,13 22,13 22,22 9,22 9,36 13,36 13,26 22,26 22,36 26,36 26,26 35,26"}},{tag:"rect",attr:{x:"17",y:"6",fill:"#3F51B5",width:"14",height:"10"}},{tag:"rect",attr:{x:"32",y:"32",fill:"#00BCD4",width:"10",height:"10"}},{tag:"rect",attr:{x:"6",y:"32",fill:"#00BCD4",width:"10",height:"10"}},{tag:"rect",attr:{x:"19",y:"32",fill:"#00BCD4",width:"10",height:"10"}}]})(e)}function _x(){return s.jsxs(s.Fragment,{children:[s.jsx("div",{children:"AxiosInterceptors"}),s.jsx(we,{code:`import axios from 'axios';

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

`})]})}function Tx(){return s.jsxs(s.Fragment,{children:[s.jsx("div",{children:"PowerupFunctions"}),s.jsx(we,{code:`export const returnCapitalize = (currentValue) => {
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

`})]})}function Px(){const e=[{icon:Sm,techName:"React",version:1}];return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Technologies"}),s.jsxs("table",{class:"min-w-full leading-normal",children:[s.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:s.jsxs("tr",{className:"text-lg",children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Tech"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Version"})]})}),s.jsx("tbody",{children:e==null?void 0:e.map((t,n)=>s.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[s.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s.jsx("img",{className:"inline",src:t==null?void 0:t.icon,alt:""}),s.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:t==null?void 0:t.techName})]}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.version})]}))})]})]})}function Bd(e){return xr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(e)}function yu(e){return s.jsx(s.Fragment,{children:s.jsx("div",{className:"bg-gray-800 shadow-xl text-white absolute top-10 right-10 px-2 rounded-lg",children:e==null?void 0:e.url})})}function Lx(){const[e,t]=C.useState(null),n=[{icon:null,techName:"Flaticons",use:"Collection of png icons",version:1,url:"https://www.flaticon.com/"},{icon:null,techName:"Lotte Animations",use:"Pre made animations",version:1,url:"https://lottiefiles.com/"}],r=l=>{window.open(l,"_blank")};return s.jsxs(s.Fragment,{children:[s.jsx(yu,{url:e}),s.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Resources"}),s.jsxs("table",{class:"min-w-full leading-normal",children:[s.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:s.jsxs("tr",{className:"text-lg",children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Resource"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Url"})]})}),s.jsx("tbody",{children:n==null?void 0:n.map((l,i)=>s.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[s.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s.jsx("img",{className:"inline",src:l==null?void 0:l.icon,alt:""}),s.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:l==null?void 0:l.techName})]}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l==null?void 0:l.use}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.jsx(Bd,{onMouseEnter:()=>t(l==null?void 0:l.url),onMouseLeave:()=>t(null),onClick:()=>r(l==null?void 0:l.url),className:"inline cursor-pointer text-2xl hover:scale-105 font-semibold"})})]}))})]})]})}function Fx(){const[e,t]=C.useState(null),n=[{icon:null,techName:"React Router Dom",use:"To handle page routing",version:1,url:"https://reactrouter.com/en/main"},{icon:null,techName:"Formik",use:"This library is use to handle forms in a very smart way",version:1,url:"https://formik.org/"},{icon:null,techName:"Axios",use:"This library is use to handle API calls",version:1,url:"https://axios-http.com/docs/intro"},{icon:null,techName:"React-Icons",use:"Icon library, Easy to use",version:1,url:"https://react-icons.github.io/react-icons/"},{icon:null,techName:"React-Modal",use:"Popup libary",version:1,url:"https://github.com/reactjs/react-modal"},{icon:null,techName:"React-Toastify",use:"Toast libary",version:1,url:"https://www.npmjs.com/package/react-toastify"},{icon:null,techName:"Yup",use:"Libary for validation schema, best works with formik",version:1,url:"https://www.npmjs.com/package/yup"}],r=l=>{window.open(l,"_blank")};return s.jsxs(s.Fragment,{children:[s.jsx(yu,{url:e}),s.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Libraries"}),s.jsxs("table",{class:"min-w-full leading-normal",children:[s.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:s.jsxs("tr",{className:"text-lg",children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Doc Url"})]})}),s.jsx("tbody",{children:n==null?void 0:n.map((l,i)=>s.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[s.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s.jsx("img",{className:"inline",src:l==null?void 0:l.icon,alt:""}),s.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:l==null?void 0:l.techName})]}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l==null?void 0:l.use}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s.jsx(Bd,{onMouseEnter:()=>t(l==null?void 0:l.url),onMouseLeave:()=>t(null),onClick:()=>r(l==null?void 0:l.url),className:"inline cursor-pointer text-2xl hover:scale-105 font-semibold"})})]}))})]})]})}function Ix(){const[e,t]=C.useState(null),n=[{icon:null,techName:"Login Authentication",use:"This library is use to handle forms in a very smart way"},{icon:null,techName:"Protected Routes",use:"This library is use to handle API calls"},{icon:null,techName:"404 Page",use:"This library is use to handle API calls"},{icon:null,techName:"Secure Localstorage",use:"This library is use to handle API calls"},{icon:null,techName:"Url Encryption",use:"This library is use to handle API calls"}];return s.jsxs(s.Fragment,{children:[s.jsx(yu,{url:e}),s.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Essentials"}),s.jsxs("table",{class:"min-w-full leading-normal",children:[s.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:s.jsxs("tr",{className:"text-lg",children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"})]})}),s.jsx("tbody",{children:n==null?void 0:n.map((r,l)=>s.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[s.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s.jsx("img",{className:"inline",src:r==null?void 0:r.icon,alt:""}),s.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:r==null?void 0:r.techName})]}),s.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.use})]}))})]})]})}const N2=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],Ax=[{title:"Bengaluru office",timings:"Mon-Sat 9am to 5pm.",address:"100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN"},{title:"Head office",timings:"Mon-Sat 9am to 5pm.",address:"12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN"},{title:"Karnataka office",timings:"Mon-Sat 9am to 5pm.",address:"42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN"}],Ox=[{name:"Gabrielle Fernandez",image:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",position:"Marketing Lead"},{name:"Victória Silva",image:"https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",position:"Back-end developer"},{name:"Gabrielle Fernandez",image:"https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Sales"},{name:"Sadie Lewis",image:"https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Sales"},{name:"Thilde Olaisen",image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600",position:"Marketing Lead"},{name:"Deepika Ramesh",image:"https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg",position:"Front-end developer"},{name:"Jordi Santiago",image:"https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",position:"Front-end developer"},{name:"Kerim Fahri",image:"https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Back-end developer"}];function Dx(){const[e,t]=Te.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:`//Source - Dev UI
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
     `}),s.jsxs("div",{children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:N2.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(pr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(hr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:N2.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsxs("div",{className:"mx-auto max-w-7xl px-4",children:[s.jsxs("div",{className:"flex flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[s.jsx("div",{className:"max-w-max rounded-full border bg-gray-50 p-1 px-3",children:s.jsx("p",{className:"text-xs font-semibold leading-normal md:text-sm",children:"About the company"})}),s.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Made with love, right here in India"}),s.jsx("p",{className:"max-w-4xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"})]}),s.jsx("div",{className:"w-full space-y-4",children:s.jsx("img",{className:"h-[200px] w-full rounded-xl object-cover md:h-full",src:"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg",alt:""})}),s.jsx("div",{className:"my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around",children:Ax.map(r=>s.jsxs("div",{className:"flex flex-col space-y-3 md:w-2/4 lg:w-1/5",children:[s.jsx(Am,{className:"h-5 w-5"}),s.jsx("p",{className:"w-full text-xl font-semibold  text-gray-900",children:r.title}),s.jsx("p",{className:"w-full text-base text-gray-700",children:r.timings}),s.jsx("p",{className:"text-sm font-medium",children:r.address})]},r.title))}),s.jsx("hr",{className:"mt-20"}),s.jsx("div",{className:"mt-16 flex items-center",children:s.jsxs("div",{className:"space-y-6 md:w-3/4",children:[s.jsx("div",{className:"max-w-max rounded-full border bg-gray-50 p-1 px-3",children:s.jsx("p",{className:"text-xs font-semibold leading-normal md:text-sm",children:"Join Us →"})}),s.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-4xl",children:"Meet our team"}),s.jsx("p",{className:"max-w-4xl text-base text-gray-700 md:text-xl",children:"Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."}),s.jsx("div",{})]})}),s.jsx("div",{className:"grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4",children:Ox.map(r=>s.jsxs("div",{className:"rounded-md border",children:[s.jsx("img",{src:r.image,alt:r.name,className:"h-[300px] w-full rounded-lg object-cover "}),s.jsx("p",{className:"mt-6 w-full px-2 text-xl  font-semibold text-gray-900",children:r.name}),s.jsx("p",{className:"w-full px-2 pb-6 text-sm font-semibold text-gray-500",children:r.position})]},r.name))}),s.jsxs("div",{className:"flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row",children:[s.jsxs("div",{className:"space-y-6",children:[s.jsx("p",{className:"text-sm font-semibold md:text-base",children:"Join our team →"}),s.jsx("p",{className:"text-3xl font-bold md:text-4xl",children:"We're just getting started"}),s.jsx("p",{className:"text-base text-gray-600 md:text-lg",children:"Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."}),s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Join Now"})]}),s.jsx("div",{className:"md:mt-o mt-10 w-full",children:s.jsx("img",{src:"https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"Getting Started",className:"rounded-lg"})})]})]}),s.jsx("hr",{className:"mt-6"}),s.jsx("div",{className:"mx-auto max-w-7xl",children:s.jsxs("footer",{className:"px-4 py-10",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[s.jsx("span",{children:s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:s.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),s.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"About us"}),s.jsx("li",{children:"Company History"}),s.jsx("li",{children:"Our Team"}),s.jsx("li",{children:"Our Vision"}),s.jsx("li",{children:"Press Release"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Washington"}),s.jsx("li",{children:"New Hampshire"}),s.jsx("li",{children:"Maine"}),s.jsx("li",{children:"Texas"}),s.jsx("li",{children:"Indiana"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"UI / UX Design"}),s.jsx("li",{children:"App Development"}),s.jsx("li",{children:"API reference"}),s.jsx("li",{children:"API status"}),s.jsx("li",{children:"Documentation"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Privacy Policy"}),s.jsx("li",{children:"Terms of Service"}),s.jsx("li",{children:"Cookie Policy"}),s.jsx("li",{children:"Disclaimer"}),s.jsx("li",{children:"Media Policy"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Facebook"}),s.jsx("li",{children:"Twitter"}),s.jsx("li",{children:"Instagram"}),s.jsx("li",{children:"Linkedin"}),s.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const j2=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}];function $x(){const[e,t]=Te.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:`'use client'

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
`}),s.jsxs("div",{className:"mx-auto w-full max-w-7xl px-2 md:px-4",children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:j2.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(pr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(hr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:j2.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsxs("div",{className:"mx-auto my-12 flex max-w-6xl flex-col px-2 md:my-24 lg:my-32 lg:flex-row lg:items-center",children:[s.jsxs("div",{children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-semibold text-black",children:"404 error"}),s.jsx("h1",{className:"mt-3 text-2xl font-semibold text-gray-800 md:text-3xl",children:"We can't find that page"}),s.jsx("p",{className:"mt-4 text-gray-500",children:"Sorry, the page you are looking for doesn't exist or has been moved."}),s.jsxs("div",{className:"mt-6 flex items-center gap-x-3",children:[s.jsxs("button",{type:"button",className:"inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx(_m,{size:16,className:"mr-2"}),"Go back"]}),s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Contact us"})]})]}),s.jsxs("div",{className:"mt-10 space-y-6",children:[s.jsxs("div",{children:[s.jsxs("a",{href:"#",className:"hover:underlin inline-flex items-center gap-x-2 text-sm font-semibold text-black",children:[s.jsx("span",{children:"Documentation"}),s.jsx(Ur,{size:16})]}),s.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Dive in to learn all about our product."})]}),s.jsxs("div",{children:[s.jsxs("a",{href:"#",className:"inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline",children:[s.jsx("span",{children:"Our blog"}),s.jsx(Ur,{size:16})]}),s.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Read the latest posts on our blog."})]}),s.jsxs("div",{children:[s.jsxs("a",{href:"#",className:"inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline",children:[s.jsx("span",{children:"Chat to support"}),s.jsx(Ur,{size:16})]}),s.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Our friendly team is here to help."})]})]})]}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("img",{src:"https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:"404",className:"h-full w-full rounded-md object-cover"})})]}),s.jsx("hr",{className:"mt-6"}),s.jsx("div",{className:"mx-auto max-w-7xl",children:s.jsxs("footer",{className:"px-4 py-10",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[s.jsx("span",{children:s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:s.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),s.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"About us"}),s.jsx("li",{children:"Company History"}),s.jsx("li",{children:"Our Team"}),s.jsx("li",{children:"Our Vision"}),s.jsx("li",{children:"Press Release"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Washington"}),s.jsx("li",{children:"New Hampshire"}),s.jsx("li",{children:"Maine"}),s.jsx("li",{children:"Texas"}),s.jsx("li",{children:"Indiana"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"UI / UX Design"}),s.jsx("li",{children:"App Development"}),s.jsx("li",{children:"API reference"}),s.jsx("li",{children:"API status"}),s.jsx("li",{children:"Documentation"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Privacy Policy"}),s.jsx("li",{children:"Terms of Service"}),s.jsx("li",{children:"Cookie Policy"}),s.jsx("li",{children:"Disclaimer"}),s.jsx("li",{children:"Media Policy"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Facebook"}),s.jsx("li",{children:"Twitter"}),s.jsx("li",{children:"Instagram"}),s.jsx("li",{children:"Linkedin"}),s.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const k2=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"},{name:"Blogs",href:"#"}];function zx(){const[e,t]=Te.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:`'use client'

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
`}),s.jsxs("div",{className:"w-full",children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:k2.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(pr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(hr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:k2.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsx("div",{className:"relative w-full bg-white",children:s.jsxs("div",{className:"mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8",children:[s.jsxs("div",{className:"flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6",children:[s.jsxs("div",{className:"mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1",children:[s.jsx("div",{className:"rounded-full bg-white p-1 px-2",children:s.jsx("p",{className:"text-sm font-medium",children:"We' hiring"})}),s.jsx("p",{className:"text-sm font-medium",children:"Join our team →"})]}),s.jsx("h1",{className:"mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl",children:"People who care about your growth"}),s.jsx("p",{className:"mt-8 text-lg text-gray-700",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi blanditiis dolores quasi eaque explicabo!"}),s.jsxs("form",{action:"",className:"mt-8 flex items-start space-x-2",children:[s.jsxs("div",{children:[s.jsx("input",{className:"flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Enter your email",id:"email"}),s.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"We care about your privacy"})]}),s.jsx("div",{children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})})]})]}),s.jsx("div",{className:"relative lg:col-span-5 lg:-mr-8 xl:col-span-6",children:s.jsx("img",{className:"aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]",src:"https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:""})})]})}),s.jsx("div",{className:"mx-auto my-32 max-w-7xl px-2 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4",children:[s.jsxs("div",{children:[s.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100",children:s.jsx("svg",{className:"h-9 w-9 text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})})}),s.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Secured Payments"}),s.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),s.jsxs("div",{children:[s.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100",children:s.jsx("svg",{className:"h-9 w-9 text-orange-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),s.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Fast & Easy to Load"}),s.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),s.jsxs("div",{children:[s.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100",children:s.jsx("svg",{className:"h-9 w-9 text-green-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),s.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Light & Dark Version"}),s.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),s.jsxs("div",{children:[s.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100",children:s.jsx("svg",{className:"h-9 w-9 text-red-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})})}),s.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Filter Blocks"}),s.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]})]})}),s.jsx("section",{className:"mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0",children:s.jsxs("div",{children:[s.jsxs("div",{className:"mx-auto max-w-2xl lg:text-center",children:[s.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl",children:"Frequently Asked Questions"}),s.jsx("p",{className:"mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda"})]}),s.jsxs("div",{className:"mx-auto mt-8 max-w-3xl space-y-4 md:mt-16",children:[s.jsxs("div",{className:"cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200",children:[s.jsxs("button",{type:"button",className:"flex w-full items-center justify-between px-4 py-5 sm:p-6",children:[s.jsx("span",{className:"flex text-lg font-semibold text-black",children:"How do I get started?"}),s.jsx(Im,{className:"h-5 w-5 text-gray-500"})]}),s.jsx("div",{className:"px-4 pb-5 sm:px-6 sm:pb-6",children:s.jsx("p",{className:"text-gray-500",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"})})]}),Array.from({length:2}).map((r,l)=>s.jsx("div",{className:"cursor-pointer rounded-md border border-gray-400 transition-all duration-200",children:s.jsxs("button",{type:"button",className:"flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center",children:[s.jsx("span",{className:"flex text-start text-lg font-semibold text-black",children:"What is the difference between a free and paid account?"}),s.jsx(Lm,{className:"hidden h-5 w-5 text-gray-500 md:block"})]})},l))]}),s.jsxs("p",{className:"textbase mt-6 text-center text-gray-600",children:["Can't find what you're looking for?"," ",s.jsx("a",{href:"#",title:"",className:"font-semibold text-black hover:underline",children:"Contact our support"})]})]})}),s.jsx("div",{className:"mx-auto my-12 max-w-7xl md:my-24 lg:my-32",children:s.jsxs("div",{className:"lg:grid lg:grid-cols-12 lg:gap-x-6",children:[s.jsxs("div",{className:"px-4 py-10 lg:col-span-5 lg:px-0",children:[s.jsx("span",{className:"mb-8 inline-block rounded-full border p-1 px-3 text-xs font-semibold",children:"Pricing that fits your budget"}),s.jsx("h1",{className:"text-3xl font-bold md:text-5xl",children:"Lorem ipsum dolor sit amet consectetur."}),s.jsx("p",{className:"mt-8 font-medium",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni, rem sed sint neque doloribus saepe veniam minima quaerat minus."}),s.jsxs("div",{className:"mt-8 flex w-full max-w-sm items-center space-x-2",children:[s.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})]})]}),s.jsxs("div",{className:"flex flex-col items-center justify-center md:flex-row lg:col-span-7",children:[s.jsx("div",{className:"w-full p-5 md:w-1/2",children:s.jsxs("div",{className:"rounded-md border bg-white bg-opacity-90",children:[s.jsx("div",{className:" border-b",children:s.jsxs("div",{className:"px-9 py-7",children:[s.jsx("h3",{className:"mb-3 text-xl font-bold leading-snug text-gray-900",children:"Standard"}),s.jsx("p",{className:"font-medium leading-relaxed text-gray-500",children:"Lorem ipsum dolor sit amet, consect etur adipiscing maror."})]})}),s.jsxs("div",{className:"px-9 pb-9 pt-8",children:[s.jsx("p",{className:"mb-6 font-medium leading-relaxed text-gray-600",children:"Features included:"}),s.jsxs("ul",{className:"mb-11",children:[s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(ft,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"3 Team Members"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(ft,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"1200+ UI Blocks"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(ft,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"10 GB Cloud Storage"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(ft,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"Individual Email Account"})]}),s.jsxs("li",{className:"flex items-center",children:[s.jsx(ft,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"Premium Support"})]})]}),s.jsxs("p",{className:"mb-6 text-lg font-semibold leading-normal text-gray-600",children:[s.jsx("span",{children:"Starting from"}),s.jsx("span",{className:"ml-2 text-gray-900",children:"$49/mo"})]}),s.jsx("div",{className:"md:inline-block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Start your free trial"})})]})]})}),s.jsx("div",{className:"w-full p-5 md:w-1/2",children:s.jsxs("div",{className:"rounded-md border bg-white bg-opacity-90",children:[s.jsx("div",{className:" border-b",children:s.jsxs("div",{className:"px-9 py-7",children:[s.jsx("h3",{className:"mb-3 text-xl font-bold leading-snug text-gray-900",children:"Standard"}),s.jsx("p",{className:"font-medium leading-relaxed text-gray-500",children:"Lorem ipsum dolor sit amet, consect etur adipiscing maror."})]})}),s.jsxs("div",{className:"px-9 pb-9 pt-8",children:[s.jsx("p",{className:"mb-6 font-medium leading-relaxed text-gray-600",children:"Features included:"}),s.jsxs("ul",{className:"mb-11",children:[s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(ft,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"3 Team Members"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(ft,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"1200+ UI Blocks"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(ft,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"10 GB Cloud Storage"})]}),s.jsxs("li",{className:"mb-4 flex items-center",children:[s.jsx(ft,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"Individual Email Account"})]}),s.jsxs("li",{className:"flex items-center",children:[s.jsx(ft,{className:"mr-2",size:16}),s.jsx("p",{className:"font-semibold leading-normal",children:"Premium Support"})]})]}),s.jsxs("p",{className:"mb-6 text-lg font-semibold leading-normal text-gray-600",children:[s.jsx("span",{children:"Starting from"}),s.jsx("span",{className:"ml-2 text-gray-900",children:"$49/mo"})]}),s.jsx("div",{className:"md:inline-block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Start your free trial"})})]})]})})]})]})}),s.jsx("div",{className:"mx-auto max-w-7xl bg-gray-50 px-2 py-10 lg:px-2",children:s.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between",children:[s.jsxs("div",{className:"w-full md:w-2/3 lg:w-1/2",children:[s.jsx("h2",{className:"text-3xl font-bold text-black",children:"Sign up for our weekly newsletter"}),s.jsx("p",{className:"mt-4 text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."}),s.jsxs("div",{className:"mt-4",children:[s.jsx("p",{className:"font-semibold text-gray-800",children:"Trusted by over 100,000+ businesses and individuals"}),s.jsxs("div",{className:"mt-2 flex items-center",children:[s.jsx("div",{className:"flex space-x-1",children:Array.from({length:5}).map((r,l)=>s.jsx($m,{className:"h-5 w-5 text-yellow-400"},l))}),s.jsx("span",{className:"ml-2 inline-block",children:s.jsx("span",{className:"text-sm font-semibold text-gray-800",children:"4.8/5 . 3420 Reviews"})})]})]})]}),s.jsxs("div",{className:"mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2",children:[s.jsx("form",{className:"flex lg:justify-center",children:s.jsxs("div",{className:"flex w-full max-w-md flex-col space-y-4",children:[s.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),s.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})]})}),s.jsx("p",{className:"mt-2 lg:text-center",children:s.jsx("span",{className:"text-sm text-gray-600",children:"By signing up, you agree to our terms of service and privacy policy."})})]})]})}),s.jsx("div",{className:"mx-auto mt-12 max-w-7xl",children:s.jsxs("footer",{className:"px-4 py-10",children:[s.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[s.jsx("span",{children:s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:s.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),s.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"About us"}),s.jsx("li",{children:"Company History"}),s.jsx("li",{children:"Our Team"}),s.jsx("li",{children:"Our Vision"}),s.jsx("li",{children:"Press Release"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Washington"}),s.jsx("li",{children:"New Hampshire"}),s.jsx("li",{children:"Maine"}),s.jsx("li",{children:"Texas"}),s.jsx("li",{children:"Indiana"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"UI / UX Design"}),s.jsx("li",{children:"App Development"}),s.jsx("li",{children:"API reference"}),s.jsx("li",{children:"API status"}),s.jsx("li",{children:"Documentation"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Privacy Policy"}),s.jsx("li",{children:"Terms of Service"}),s.jsx("li",{children:"Cookie Policy"}),s.jsx("li",{children:"Disclaimer"}),s.jsx("li",{children:"Media Policy"})]})]}),s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"Facebook"}),s.jsx("li",{children:"Twitter"}),s.jsx("li",{children:"Instagram"}),s.jsx("li",{children:"Linkedin"}),s.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const S2=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],Rx=[{name:"Basic plan",price:"$10/mth",features:["Access to all basic features ","Basic reporting and analytics","Up to 10 individual users","20GB individual data each user","Basic chat and email support"]},{name:"Business plan",price:"$20/mth",features:["200+ integrations","Advanced reporting and analytics","Up to 20 individual users","40GB individual data each user","Priority chat and email support"]},{name:"Enterprise plan",price:"$40/mth",features:["Advanced custom fields","Audit log and data history","Unlimited individual users","Unlimited individual data","Personalized+priority service"]}],Vx=[{question:"Is there a free trial available?",answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},{question:"Can I change my plan later?",answer:"Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."},{question:"What is your cancellation policy?",answer:"We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid."},{question:"Can other info be added to an invoice?",answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},{question:"How does billing work?",answer:"Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."},{question:"How do I change my account email?",answer:"You can change the email address associated with your account by going to account from a laptop or desktop."}];function Bx(){const[e,t]=Te.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:`'use client'

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
`}),s.jsxs("div",{className:"mx-auto max-w-7xl px-2 md:px-4",children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden grow px-12 lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:S2.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(pr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(hr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:S2.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsxs("div",{children:[s.jsxs("div",{className:"mx-auto flex max-w-5xl flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[s.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Simple, transparent pricing"}),s.jsx("p",{className:"max-w-3xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"})]}),s.jsx("div",{className:"mt-8 space-y-4 md:mt-12",children:s.jsx("div",{className:"grid space-y-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:space-x-8",children:Rx.map(r=>s.jsxs("div",{className:"rounded-lg border border-gray-200 bg-white",children:[s.jsxs("div",{className:"flex w-full flex-col justify-start space-y-4 px-8 pt-10",children:[s.jsx("p",{className:"text-4xl font-bold leading-10",children:r.price}),s.jsxs("div",{className:"flex w-full flex-col items-start justify-start space-y-1",children:[s.jsx("p",{className:"w-full text-xl font-semibold leading-loose text-gray-900",children:r.name}),s.jsx("p",{className:"w-full text-base leading-normal text-gray-600",children:"Billed annually."})]})]}),s.jsx("div",{className:"flex w-full max-w-sm flex-col px-8 py-8",children:s.jsxs("div",{className:"flex w-full flex-col items-start justify-start space-y-3",children:[s.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Get Started"}),s.jsx("button",{type:"button",className:"w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Contact Us"})]})}),s.jsx("div",{className:"flex w-full flex-col items-start justify-start px-8 pb-8",children:s.jsx("div",{className:"flex w-full flex-col space-y-4",children:r.features.map(l=>s.jsxs("div",{className:"inline-flex w-full space-x-3",children:[s.jsx("div",{className:"flex items-center justify-center rounded-full p-1 lg:bg-gray-100",children:s.jsx(Pm,{className:"h-4 w-4"})}),s.jsx("p",{className:"w-full text-base leading-normal text-gray-600",children:l})]},l))})})]},r.name))})}),s.jsx("div",{className:"mt-12 space-y-16 bg-gray-50 py-16",children:s.jsx("div",{className:"mx-auto  flex max-w-7xl items-center justify-center  px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"flex flex-col items-center space-y-6 md:w-3/4",children:[s.jsxs("div",{className:"space-y-4 justify-self-center",children:[s.jsx("p",{className:"text-center text-3xl font-bold leading-10 text-gray-900",children:"Frequently asked questions"}),s.jsx("p",{className:"text-center text-lg leading-loose text-gray-600",children:"Everything you need to know about the product and billing."})]}),s.jsx("div",{className:"divide-y divide-gray-300",children:Vx.map((r,l)=>s.jsxs("div",{className:"flex justify-between space-x-6 py-6",children:[s.jsxs("div",{className:"inline-flex flex-col items-start justify-start space-y-2",children:[s.jsx("p",{className:"text-lg font-medium leading-7 text-gray-900",children:r.question}),l===0?s.jsx("p",{className:"text-base leading-normal text-gray-600",children:r.answer}):null]}),s.jsx("div",{children:l===0?s.jsx(Om,{className:"h-6 w-6 text-gray-600"}):s.jsx(Dm,{className:"h-6 w-6 text-gray-600"})})]},r.question))})]})})})]}),s.jsxs("footer",{className:"w-full pb-8 pt-12 md:mt-16",children:[s.jsxs("div",{className:"mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row",children:[s.jsxs("div",{className:"w-full px-4 md:w-1/2 lg:px-0",children:[s.jsx("h1",{className:"max-w-sm text-3xl font-bold",children:"Subscribe to our Newsletter"}),s.jsxs("form",{action:"",className:"mt-4 inline-flex w-full items-center md:w-3/4",children:[s.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),s.jsx("button",{type:"button",className:"ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:s.jsx(Fm,{className:"h-4 w-4"})})]})]}),s.jsx("div",{className:"mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3",children:Array.from({length:3}).map((r,l)=>s.jsxs("div",{className:"mb-8 lg:mb-0",children:[s.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700 ",children:"Company"}),s.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[s.jsx("li",{children:"About us"}),s.jsx("li",{children:"Company History"}),s.jsx("li",{children:"Our Team"}),s.jsx("li",{children:"Our Vision"}),s.jsx("li",{children:"Press Release"})]})]},l))})]}),s.jsx("hr",{className:"my-8"}),s.jsxs("div",{className:"mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0",children:[s.jsxs("div",{className:"inline-flex items-center",children:[s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})}),s.jsx("span",{className:"ml-4 text-lg font-bold",children:"DevUI"})]}),s.jsx("div",{className:"mt-4 md:mt-0",children:s.jsx("p",{className:"text-sm font-medium text-gray-500",children:"© 2023 DevUI. All rights reserved."})})]})]})]})]})}const E2=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],Ux=[{title:"Bengaluru office",timings:"Mon-Sat 9am to 5pm.",address:"100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN"},{title:"Head office",timings:"Mon-Sat 9am to 5pm.",address:"12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN"},{title:"Karnataka office",timings:"Mon-Sat 9am to 5pm.",address:"42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN"}];function Zx(){const[e,t]=Te.useState(!1),n=()=>{t(!e)};return s.jsxs(s.Fragment,{children:[s.jsx(we,{code:`'use client'

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
`}),s.jsxs("div",{children:[s.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"hidden grow px-12 lg:block",children:s.jsx("ul",{className:"inline-flex space-x-8",children:E2.map(r=>s.jsx("li",{children:s.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),s.jsx("div",{className:"hidden lg:block",children:s.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),s.jsx("div",{className:"lg:hidden",children:s.jsx(pr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&s.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:s.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:s.jsxs("div",{className:"px-5 pb-6 pt-5",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"inline-flex items-center space-x-2",children:[s.jsx("span",{children:s.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("span",{className:"font-bold",children:"DevUI"})]}),s.jsx("div",{className:"-mr-2",children:s.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx(hr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),s.jsx("div",{className:"mt-6",children:s.jsx("nav",{className:"grid gap-y-4",children:E2.map(r=>s.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:s.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),s.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),s.jsx("div",{className:"mx-auto max-w-7xl px-4",children:s.jsx("div",{className:"mx-auto max-w-7xl py-12 md:py-24",children:s.jsxs("div",{className:"grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2",children:[s.jsx("div",{className:"flex items-center justify-center",children:s.jsxs("div",{className:"px-2 md:px-12",children:[s.jsx("p",{className:"text-2xl font-bold text-gray-900 md:text-4xl",children:"Get in touch"}),s.jsx("p",{className:"mt-4 text-lg text-gray-600",children:"Our friendly team would love to hear from you."}),s.jsxs("form",{action:"",className:"mt-8 space-y-4",children:[s.jsxs("div",{className:"grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2",children:[s.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[s.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"first_name",children:"First Name"}),s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"first_name",placeholder:"First Name"})]}),s.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[s.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"last_name",children:"Last Name"}),s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"last_name",placeholder:"Last Name"})]})]}),s.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[s.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"email",children:"Email"}),s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"email",placeholder:"Email"})]}),s.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[s.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"phone_number",children:"Phone number"}),s.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"tel",id:"phone_number",placeholder:"Phone number"})]}),s.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[s.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"message",children:"Message"}),s.jsx("textarea",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",id:"message",placeholder:"Leave us a message",cols:3})]}),s.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Send Message"})]})]})}),s.jsx("img",{alt:"Contact us",className:"hidden max-h-full w-full rounded-lg object-cover lg:block",src:"https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"})]})})}),s.jsx("div",{className:"rounded-lg bg-gray-100",children:s.jsx("div",{className:"mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"py-20",children:s.jsxs("div",{className:"grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("p",{className:"w-full text-4xl font-bold text-gray-900",children:"Our Offices"}),s.jsx("p",{className:"w-full text-lg text-gray-600",children:"Find us at these locations."})]}),s.jsx("div",{className:"space-y-4 divide-y-2",children:Ux.map(r=>s.jsxs("div",{className:"flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full",children:[s.jsx("p",{className:"w-full text-xl font-semibold  text-gray-900",children:r.title}),s.jsx("p",{className:"w-full text-base  text-gray-600",children:r.timings}),s.jsx("p",{className:"text-sm font-semibold text-gray-600",children:r.address})]},r.title))})]})})})}),s.jsx("hr",{className:"mt-6"}),s.jsx("section",{className:"relative overflow-hidden bg-white py-8",children:s.jsx("div",{className:"container relative z-10 mx-auto px-4",children:s.jsxs("div",{className:"-m-8 flex flex-wrap items-center justify-between",children:[s.jsx("div",{className:"w-auto p-8",children:s.jsx("a",{href:"#",children:s.jsxs("div",{className:"inline-flex items-center",children:[s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})}),s.jsx("span",{className:"ml-4 text-lg font-bold",children:"DevUI"})]})})}),s.jsx("div",{className:"w-auto p-8",children:s.jsxs("ul",{className:"-m-5 flex flex-wrap items-center",children:[s.jsx("li",{className:"p-5",children:s.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Privacy Policy"})}),s.jsx("li",{className:"p-5",children:s.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Terms of Service"})}),s.jsx("li",{className:"p-5",children:s.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Return Policy"})}),s.jsx("li",{className:"p-5",children:s.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Contact Us"})})]})}),s.jsx("div",{className:"w-auto p-8",children:s.jsxs("div",{className:"-m-1.5 flex flex-wrap",children:[s.jsx("div",{className:"w-auto p-1.5",children:s.jsx("a",{href:"#",children:s.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:s.jsx("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z",fill:"#27272A"})})})})}),s.jsx("div",{className:"w-auto p-1.5",children:s.jsx("a",{href:"#",children:s.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:s.jsx("svg",{width:"14",height:"11",viewBox:"0 0 14 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z",fill:"#27272A"})})})})}),s.jsx("div",{className:"w-auto p-1.5",children:s.jsx("a",{href:"#",children:s.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:s.jsx("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z",fill:"#27272A"})})})})})]})})]})})})]})]})}function Hx(){const[e,t]=C.useState(!1);K1();const n=[{icon:s.jsx(Mr,{size:14}),menuName:"Components",path:null,subMenuStatus:!0,subMenu:[{menuName:"Button",path:"/button",subMenu:[]},{menuName:"Avatar",path:"/avatar",subMenu:[]},{menuName:"Card",path:"/card",subMenu:[]},{menuName:"Signup",path:"/signup",subMenu:[]},{menuName:"Signin",path:"/signin",subMenu:[]},{menuName:"Input",path:"/input",subMenu:[]},{menuName:"Bare Layout",path:"/bare-layout",subMenu:[]}]},{icon:s.jsx(Mr,{size:14}),menuName:"Pages",path:null,subMenuStatus:!0,subMenu:[{menuName:"Blog Page",path:"/blog-page",subMenu:[]},{menuName:"AboutUs Page",path:"/aboutus-page",subMenu:[]},{menuName:"404 Page",path:"/error404-page",subMenu:[]},{menuName:"Landing Page",path:"/landing-page",subMenu:[]},{menuName:"Pricing Page",path:"/pricing-page",subMenu:[]},{menuName:"Contact Page",path:"/contact-page",subMenu:[]}]},{icon:s.jsx(Mr,{size:14}),menuName:"Layout",path:null,subMenuStatus:!0,subMenu:[{menuName:"Bare Layout",path:"/bare-layout",subMenu:[]}]},{icon:s.jsx(Mr,{size:14}),menuName:"Functions",path:null,subMenuStatus:!0,subMenu:[{menuName:"Axio Interceptors",path:"/axiosinterceptors",subMenu:[]},{menuName:"PowerUps",path:"/powerups",subMenu:[]}]},{icon:s.jsx(Mr,{size:14}),menuName:"Meta Data",path:null,subMenuStatus:!0,subMenu:[{menuName:"Technologies",path:"/technologies",subMenu:[]},{menuName:"Resources",path:"/resources",subMenu:[]},{menuName:"Libraries",path:"/libraries",subMenu:[]},{menuName:"Essentials",path:"/essentials",subMenu:[]}]}];return s.jsxs("div",{children:[s.jsxs("div",{className:"md:hidden",children:[!e&&s.jsx("button",{onClick:()=>t(!0),type:"button",className:"inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ",children:s.jsx("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})}),e&&s.jsx("button",{onClick:()=>t(!1),type:"button",className:"inline-flex items-center  mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:s.jsx("span",{className:"px-4 py-2 rounded-lg  font-semibold hover:bg-gray-100",children:"X"})})]}),s.jsx("div",{className:"p-4 sm:ml-64",children:s.jsxs(J1,{children:[s.jsx(G,{path:"/test/:id",element:s.jsx(kx,{})}),s.jsx(G,{path:"/",element:s.jsx(Rc,{})}),s.jsx(G,{path:"/button",element:s.jsx(Um,{})}),s.jsx(G,{path:"/avatar",element:s.jsx(Fp,{})}),s.jsx(G,{path:"/card",element:s.jsx(Rc,{})}),s.jsx(G,{path:"/signup",element:s.jsx(Ip,{})}),s.jsx(G,{path:"/signin",element:s.jsx(Ap,{})}),s.jsx(G,{path:"/input",element:s.jsx(wx,{})}),s.jsx(G,{path:"/blog-page",element:s.jsx(Dp,{})}),s.jsx(G,{path:"/aboutus-page",element:s.jsx(Dx,{})}),s.jsx(G,{path:"/error404-page",element:s.jsx($x,{})}),s.jsx(G,{path:"/landing-page",element:s.jsx(zx,{})}),s.jsx(G,{path:"/pricing-page",element:s.jsx(Bx,{})}),s.jsx(G,{path:"/contact-page",element:s.jsx(Zx,{})}),s.jsx(G,{path:"/bare-layout",element:s.jsx(jx,{})}),s.jsx(G,{path:"/axiosinterceptors",element:s.jsx(_x,{})}),s.jsx(G,{path:"/powerups",element:s.jsx(Tx,{})}),s.jsx(G,{path:"/technologies",element:s.jsx(Px,{})}),s.jsx(G,{path:"/resources",element:s.jsx(Lx,{})}),s.jsx(G,{path:"/libraries",element:s.jsx(Fx,{})}),s.jsx(G,{path:"/essentials",element:s.jsx(Ix,{})})]})}),s.jsxs("aside",{className:`absolute left-0 top-10 transition-all z-2 flex w-screen md:w-64 md:h-screen md:px-5 md:py-8 ${e?"h-[80vh]":"h-0"} flex-col  border-r bg-gray-200 ${e&&"px-5 py-8"} overflow-hidden`,children:[s.jsx("a",{href:"#",children:s.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),s.jsx("div",{className:"mt-6 flex flex-1 flex-col justify-between",children:s.jsx("nav",{className:"-mx-3 space-y-6 ",children:s.jsx("div",{className:"space-y-3 ",children:n==null?void 0:n.map((r,l)=>{var i;return s.jsx(Ex,{setshowSidebar:t,title:r.menuName,path:r==null?void 0:r.path,subMenu:r==null?void 0:r.subMenu,subMenuStatus:((i=r==null?void 0:r.subMenu)==null?void 0:i.length)!=0,icon:s.jsx(Mx,{size:14})},`sidebar_menu${l}`)})})})})]})]})}function Wx(){const[e,t]=C.useState(!0),n={showCodeButton:e,setshowCodeButton:t};return s.jsx(s.Fragment,{children:s.jsx(V1.Provider,{value:n,children:s.jsx("div",{onDoubleClick:()=>t(!e),children:s.jsx(Lp,{children:s.jsx(Hx,{})})})})})}Qi.createRoot(document.getElementById("root")).render(s.jsx(Te.StrictMode,{children:s.jsx(Wx,{})}))});export default qx();
