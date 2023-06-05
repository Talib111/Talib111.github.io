var rm=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var bg=rm((Qe,Ke)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var z0={exports:{}},Ds={},F0={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),sm=Symbol.for("react.portal"),im=Symbol.for("react.fragment"),am=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),cm=Symbol.for("react.provider"),um=Symbol.for("react.context"),dm=Symbol.for("react.forward_ref"),mm=Symbol.for("react.suspense"),fm=Symbol.for("react.memo"),pm=Symbol.for("react.lazy"),_c=Symbol.iterator;function hm(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var D0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O0=Object.assign,I0={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=I0,this.updater=n||D0}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function R0(){}R0.prototype=Nr.prototype;function co(e,t,n){this.props=e,this.context=t,this.refs=I0,this.updater=n||D0}var uo=co.prototype=new R0;uo.constructor=co;O0(uo,Nr.prototype);uo.isPureReactComponent=!0;var Tc=Array.isArray,V0=Object.prototype.hasOwnProperty,mo={current:null},B0={key:!0,ref:!0,__self:!0,__source:!0};function U0(e,t,n){var r,s={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)V0.call(t,r)&&!B0.hasOwnProperty(r)&&(s[r]=t[r]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)s[r]===void 0&&(s[r]=o[r]);return{$$typeof:Nl,type:e,key:i,ref:a,props:s,_owner:mo.current}}function xm(e,t){return{$$typeof:Nl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nl}function gm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ac=/\/+/g;function ji(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gm(""+e.key):t.toString(36)}function ql(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Nl:case sm:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+ji(a,0):r,Tc(s)?(n="",e!=null&&(n=e.replace(Ac,"$&/")+"/"),ql(s,t,n,"",function(u){return u})):s!=null&&(fo(s)&&(s=xm(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Ac,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",Tc(e))for(var o=0;o<e.length;o++){i=e[o];var c=r+ji(i,o);a+=ql(i,t,n,c,s)}else if(c=hm(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=r+ji(i,o++),a+=ql(i,t,n,c,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _l(e,t,n){if(e==null)return e;var r=[],s=0;return ql(e,r,"","",function(i){return t.call(n,i,s++)}),r}function vm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Yl={transition:null},ym={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:mo};G.Children={map:_l,forEach:function(e,t,n){_l(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _l(e,function(){t++}),t},toArray:function(e){return _l(e,function(t){return t})||[]},only:function(e){if(!fo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Nr;G.Fragment=im;G.Profiler=om;G.PureComponent=co;G.StrictMode=am;G.Suspense=mm;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ym;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=O0({},e.props),s=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=mo.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)V0.call(t,c)&&!B0.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Nl,type:e.type,key:s,ref:i,props:r,_owner:a}};G.createContext=function(e){return e={$$typeof:um,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cm,_context:e},e.Consumer=e};G.createElement=U0;G.createFactory=function(e){var t=U0.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:dm,render:e}};G.isValidElement=fo;G.lazy=function(e){return{$$typeof:pm,_payload:{_status:-1,_result:e},_init:vm}};G.memo=function(e,t){return{$$typeof:fm,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Yl.transition;Yl.transition={};try{e()}finally{Yl.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return Fe.current.useCallback(e,t)};G.useContext=function(e){return Fe.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};G.useEffect=function(e,t){return Fe.current.useEffect(e,t)};G.useId=function(){return Fe.current.useId()};G.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Fe.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};G.useRef=function(e){return Fe.current.useRef(e)};G.useState=function(e){return Fe.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Fe.current.useTransition()};G.version="18.2.0";F0.exports=G;var j=F0.exports;const Ve=Fs(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=j,wm=Symbol.for("react.element"),Nm=Symbol.for("react.fragment"),jm=Object.prototype.hasOwnProperty,Cm=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,km={key:!0,ref:!0,__self:!0,__source:!0};function H0(e,t,n){var r,s={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)jm.call(t,r)&&!km.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:wm,type:e,key:i,ref:a,props:s,_owner:Cm.current}}Ds.Fragment=Nm;Ds.jsx=H0;Ds.jsxs=H0;z0.exports=Ds;var l=z0.exports,ra={},Z0={exports:{}},et={},W0={exports:{}},G0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,M){var A=C.length;C.push(M);e:for(;0<A;){var H=A-1>>>1,Z=C[H];if(0<s(Z,M))C[H]=M,C[A]=Z,A=H;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var M=C[0],A=C.pop();if(A!==M){C[0]=A;e:for(var H=0,Z=C.length,ee=Z>>>1;H<ee;){var pe=2*(H+1)-1,Ce=C[pe],_e=pe+1,We=C[_e];if(0>s(Ce,A))_e<Z&&0>s(We,Ce)?(C[H]=We,C[_e]=A,H=_e):(C[H]=Ce,C[pe]=A,H=pe);else if(_e<Z&&0>s(We,A))C[H]=We,C[_e]=A,H=_e;else break e}}return M}function s(C,M){var A=C.sortIndex-M.sortIndex;return A!==0?A:C.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var c=[],u=[],x=1,h=null,p=3,b=!1,N=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=C)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function y(C){if(w=!1,g(C),!N)if(n(c)!==null)N=!0,B(k);else{var M=n(u);M!==null&&L(y,M.startTime-C)}}function k(C,M){N=!1,w&&(w=!1,m(D),D=-1),b=!0;var A=p;try{for(g(M),h=n(c);h!==null&&(!(h.expirationTime>M)||C&&!q());){var H=h.callback;if(typeof H=="function"){h.callback=null,p=h.priorityLevel;var Z=H(h.expirationTime<=M);M=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(c)&&r(c),g(M)}else r(c);h=n(c)}if(h!==null)var ee=!0;else{var pe=n(u);pe!==null&&L(y,pe.startTime-M),ee=!1}return ee}finally{h=null,p=A,b=!1}}var $=!1,z=null,D=-1,U=5,E=-1;function q(){return!(e.unstable_now()-E<U)}function je(){if(z!==null){var C=e.unstable_now();E=C;var M=!0;try{M=z(!0,C)}finally{M?R():($=!1,z=null)}}else $=!1}var R;if(typeof f=="function")R=function(){f(je)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,T=P.port2;P.port1.onmessage=je,R=function(){T.postMessage(null)}}else R=function(){_(je,0)};function B(C){z=C,$||($=!0,R())}function L(C,M){D=_(function(){C(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){N||b||(N=!0,B(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var A=p;p=M;try{return C()}finally{p=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,M){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var A=p;p=C;try{return M()}finally{p=A}},e.unstable_scheduleCallback=function(C,M,A){var H=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?H+A:H):A=H,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,C={id:x++,callback:M,priorityLevel:C,startTime:A,expirationTime:Z,sortIndex:-1},A>H?(C.sortIndex=A,t(u,C),n(c)===null&&C===n(u)&&(w?(m(D),D=-1):w=!0,L(y,A-H))):(C.sortIndex=Z,t(c,C),N||b||(N=!0,B(k))),C},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(C){var M=p;return function(){var A=p;p=M;try{return C.apply(this,arguments)}finally{p=A}}}})(G0);W0.exports=G0;var Sm=W0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0=j,Je=Sm;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y0=new Set,el={};function zn(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(el[e]=t,e=0;e<t.length;e++)Y0.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,Mm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lc={},$c={};function Em(e){return la.call($c,e)?!0:la.call(Lc,e)?!1:Mm.test(e)?$c[e]=!0:(Lc[e]=!0,!1)}function _m(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tm(e,t,n,r){if(t===null||typeof t>"u"||_m(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,s,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var po=/[\-:]([a-z])/g;function ho(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(po,ho);Ee[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(po,ho);Ee[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(po,ho);Ee[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function xo(e,t,n,r){var s=Ee.hasOwnProperty(t)?Ee[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tm(t,n,s,r)&&(n=null),r||s===null?Em(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),go=Symbol.for("react.strict_mode"),sa=Symbol.for("react.profiler"),Q0=Symbol.for("react.provider"),K0=Symbol.for("react.context"),vo=Symbol.for("react.forward_ref"),ia=Symbol.for("react.suspense"),aa=Symbol.for("react.suspense_list"),yo=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),X0=Symbol.for("react.offscreen"),Pc=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Ci;function Ir(e){if(Ci===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ci=t&&t[1]||""}return`
`+Ci+e}var ki=!1;function Si(e,t){if(!e||ki)return"";ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,o=i.length-1;1<=a&&0<=o&&s[a]!==i[o];)o--;for(;1<=a&&0<=o;a--,o--)if(s[a]!==i[o]){if(a!==1||o!==1)do if(a--,o--,0>o||s[a]!==i[o]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=o);break}}}finally{ki=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ir(e):""}function Am(e){switch(e.tag){case 5:return Ir(e.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case qn:return"Portal";case sa:return"Profiler";case go:return"StrictMode";case ia:return"Suspense";case aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case K0:return(e.displayName||"Context")+".Consumer";case Q0:return(e._context.displayName||"Context")+".Provider";case vo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yo:return t=e.displayName||null,t!==null?t:oa(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return oa(e(t))}catch{}}return null}function Lm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oa(t);case 8:return t===go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function J0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $m(e){var t=J0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Al(e){e._valueTracker||(e._valueTracker=$m(e))}function e2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=J0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function t2(e,t){t=t.checked,t!=null&&xo(e,"checked",t,!1)}function ua(e,t){t2(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?da(e,t.type,n):t.hasOwnProperty("defaultValue")&&da(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function da(e,t,n){(t!=="number"||os(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rr=Array.isArray;function ar(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ma(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Rr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function n2(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function r2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?r2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ll,l2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ll=Ll||document.createElement("div"),Ll.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ll.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pm=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){Pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function s2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function i2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=s2(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var zm=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,t){if(t){if(zm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,or=null,cr=null;function Ic(e){if(e=kl(e)){if(typeof ga!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Bs(t),ga(e.stateNode,e.type,t))}}function a2(e){or?cr?cr.push(e):cr=[e]:or=e}function o2(){if(or){var e=or,t=cr;if(cr=or=null,Ic(e),t)for(e=0;e<t.length;e++)Ic(t[e])}}function c2(e,t){return e(t)}function u2(){}var Mi=!1;function d2(e,t,n){if(Mi)return e(t,n);Mi=!0;try{return c2(e,t,n)}finally{Mi=!1,(or!==null||cr!==null)&&(u2(),o2())}}function nl(e,t){var n=e.stateNode;if(n===null)return null;var r=Bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var va=!1;if(Dt)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){va=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{va=!1}function Fm(e,t,n,r,s,i,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(x){this.onError(x)}}var Hr=!1,cs=null,us=!1,ya=null,Dm={onError:function(e){Hr=!0,cs=e}};function Om(e,t,n,r,s,i,a,o,c){Hr=!1,cs=null,Fm.apply(Dm,arguments)}function Im(e,t,n,r,s,i,a,o,c){if(Om.apply(this,arguments),Hr){if(Hr){var u=cs;Hr=!1,cs=null}else throw Error(S(198));us||(us=!0,ya=u)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rc(e){if(Fn(e)!==e)throw Error(S(188))}function Rm(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Rc(s),e;if(i===r)return Rc(s),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a){for(o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function f2(e){return e=Rm(e),e!==null?p2(e):null}function p2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=p2(e);if(t!==null)return t;e=e.sibling}return null}var h2=Je.unstable_scheduleCallback,Vc=Je.unstable_cancelCallback,Vm=Je.unstable_shouldYield,Bm=Je.unstable_requestPaint,de=Je.unstable_now,Um=Je.unstable_getCurrentPriorityLevel,wo=Je.unstable_ImmediatePriority,x2=Je.unstable_UserBlockingPriority,ds=Je.unstable_NormalPriority,Hm=Je.unstable_LowPriority,g2=Je.unstable_IdlePriority,Os=null,kt=null;function Zm(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Os,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:qm,Wm=Math.log,Gm=Math.LN2;function qm(e){return e>>>=0,e===0?32:31-(Wm(e)/Gm|0)|0}var $l=64,Pl=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ms(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~s;o!==0?r=Vr(o):(i&=a,i!==0&&(r=Vr(i)))}else a=n&~s,a!==0?r=Vr(a):i!==0&&(r=Vr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),s=1<<n,r|=e[n],t&=~s;return r}function Ym(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-gt(i),o=1<<a,c=s[a];c===-1?(!(o&n)||o&r)&&(s[a]=Ym(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}}function ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function v2(){var e=$l;return $l<<=1,!($l&4194240)&&($l=64),e}function Ei(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Km(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-gt(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function No(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var X=0;function y2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var b2,jo,w2,N2,j2,wa=!1,zl=[],Xt=null,Jt=null,en=null,rl=new Map,ll=new Map,Gt=[],Xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bc(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":rl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(t.pointerId)}}function Lr(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=kl(t),t!==null&&jo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Jm(e,t,n,r,s){switch(t){case"focusin":return Xt=Lr(Xt,e,t,n,r,s),!0;case"dragenter":return Jt=Lr(Jt,e,t,n,r,s),!0;case"mouseover":return en=Lr(en,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return rl.set(i,Lr(rl.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ll.set(i,Lr(ll.get(i)||null,e,t,n,r,s)),!0}return!1}function C2(e){var t=bn(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=m2(n),t!==null){e.blockedOn=t,j2(e.priority,function(){w2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ql(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xa=r,n.target.dispatchEvent(r),xa=null}else return t=kl(n),t!==null&&jo(t),e.blockedOn=n,!1;t.shift()}return!0}function Uc(e,t,n){Ql(e)&&n.delete(t)}function ef(){wa=!1,Xt!==null&&Ql(Xt)&&(Xt=null),Jt!==null&&Ql(Jt)&&(Jt=null),en!==null&&Ql(en)&&(en=null),rl.forEach(Uc),ll.forEach(Uc)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,wa||(wa=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,ef)))}function sl(e){function t(s){return $r(s,e)}if(0<zl.length){$r(zl[0],e);for(var n=1;n<zl.length;n++){var r=zl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&$r(Xt,e),Jt!==null&&$r(Jt,e),en!==null&&$r(en,e),rl.forEach(t),ll.forEach(t),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)C2(n),n.blockedOn===null&&Gt.shift()}var ur=Vt.ReactCurrentBatchConfig,fs=!0;function tf(e,t,n,r){var s=X,i=ur.transition;ur.transition=null;try{X=1,Co(e,t,n,r)}finally{X=s,ur.transition=i}}function nf(e,t,n,r){var s=X,i=ur.transition;ur.transition=null;try{X=4,Co(e,t,n,r)}finally{X=s,ur.transition=i}}function Co(e,t,n,r){if(fs){var s=Na(e,t,n,r);if(s===null)Oi(e,t,r,ps,n),Bc(e,r);else if(Jm(s,e,t,n,r))r.stopPropagation();else if(Bc(e,r),t&4&&-1<Xm.indexOf(e)){for(;s!==null;){var i=kl(s);if(i!==null&&b2(i),i=Na(e,t,n,r),i===null&&Oi(e,t,r,ps,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Oi(e,t,r,null,n)}}var ps=null;function Na(e,t,n,r){if(ps=null,e=bo(r),e=bn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=m2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ps=e,null}function k2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Um()){case wo:return 1;case x2:return 4;case ds:case Hm:return 16;case g2:return 536870912;default:return 16}default:return 16}}var Yt=null,ko=null,Kl=null;function S2(){if(Kl)return Kl;var e,t=ko,n=t.length,r,s="value"in Yt?Yt.value:Yt.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[i-r];r++);return Kl=s.slice(e,1<r?1-r:void 0)}function Xl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fl(){return!0}function Hc(){return!1}function tt(e){function t(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fl:Hc,this.isPropagationStopped=Hc,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=tt(jr),Cl=ce({},jr,{view:0,detail:0}),rf=tt(Cl),_i,Ti,Pr,Is=ce({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(_i=e.screenX-Pr.screenX,Ti=e.screenY-Pr.screenY):Ti=_i=0,Pr=e),_i)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),Zc=tt(Is),lf=ce({},Is,{dataTransfer:0}),sf=tt(lf),af=ce({},Cl,{relatedTarget:0}),Ai=tt(af),of=ce({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),cf=tt(of),uf=ce({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=tt(uf),mf=ce({},jr,{data:0}),Wc=tt(mf),ff={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hf[e])?!!t[e]:!1}function Mo(){return xf}var gf=ce({},Cl,{key:function(e){if(e.key){var t=ff[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mo,charCode:function(e){return e.type==="keypress"?Xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=tt(gf),yf=ce({},Is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=tt(yf),bf=ce({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mo}),wf=tt(bf),Nf=ce({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jf=tt(Nf),Cf=ce({},Is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kf=tt(Cf),Sf=[9,13,27,32],Eo=Dt&&"CompositionEvent"in window,Zr=null;Dt&&"documentMode"in document&&(Zr=document.documentMode);var Mf=Dt&&"TextEvent"in window&&!Zr,M2=Dt&&(!Eo||Zr&&8<Zr&&11>=Zr),qc=String.fromCharCode(32),Yc=!1;function E2(e,t){switch(e){case"keyup":return Sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function Ef(e,t){switch(e){case"compositionend":return _2(t);case"keypress":return t.which!==32?null:(Yc=!0,qc);case"textInput":return e=t.data,e===qc&&Yc?null:e;default:return null}}function _f(e,t){if(Qn)return e==="compositionend"||!Eo&&E2(e,t)?(e=S2(),Kl=ko=Yt=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return M2&&t.locale!=="ko"?null:t.data;default:return null}}var Tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tf[e.type]:t==="textarea"}function T2(e,t,n,r){a2(r),t=hs(t,"onChange"),0<t.length&&(n=new So("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wr=null,il=null;function Af(e){V2(e,0)}function Rs(e){var t=Jn(e);if(e2(t))return e}function Lf(e,t){if(e==="change")return t}var A2=!1;if(Dt){var Li;if(Dt){var $i="oninput"in document;if(!$i){var Kc=document.createElement("div");Kc.setAttribute("oninput","return;"),$i=typeof Kc.oninput=="function"}Li=$i}else Li=!1;A2=Li&&(!document.documentMode||9<document.documentMode)}function Xc(){Wr&&(Wr.detachEvent("onpropertychange",L2),il=Wr=null)}function L2(e){if(e.propertyName==="value"&&Rs(il)){var t=[];T2(t,il,e,bo(e)),d2(Af,t)}}function $f(e,t,n){e==="focusin"?(Xc(),Wr=t,il=n,Wr.attachEvent("onpropertychange",L2)):e==="focusout"&&Xc()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rs(il)}function zf(e,t){if(e==="click")return Rs(t)}function Ff(e,t){if(e==="input"||e==="change")return Rs(t)}function Df(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Df;function al(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!la.call(t,s)||!yt(e[s],t[s]))return!1}return!0}function Jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var n=Jc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jc(n)}}function $2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function P2(){for(var e=window,t=os();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=os(e.document)}return t}function _o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Of(e){var t=P2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$2(n.ownerDocument.documentElement,n)){if(r!==null&&_o(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=eu(n,i);var a=eu(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var If=Dt&&"documentMode"in document&&11>=document.documentMode,Kn=null,ja=null,Gr=null,Ca=!1;function tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ca||Kn==null||Kn!==os(r)||(r=Kn,"selectionStart"in r&&_o(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&al(Gr,r)||(Gr=r,r=hs(ja,"onSelect"),0<r.length&&(t=new So("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kn)))}function Dl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionend:Dl("Transition","TransitionEnd")},Pi={},z2={};Dt&&(z2=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Vs(e){if(Pi[e])return Pi[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in z2)return Pi[e]=t[n];return e}var F2=Vs("animationend"),D2=Vs("animationiteration"),O2=Vs("animationstart"),I2=Vs("transitionend"),R2=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){R2.set(e,t),zn(t,[e])}for(var zi=0;zi<nu.length;zi++){var Fi=nu[zi],Rf=Fi.toLowerCase(),Vf=Fi[0].toUpperCase()+Fi.slice(1);dn(Rf,"on"+Vf)}dn(F2,"onAnimationEnd");dn(D2,"onAnimationIteration");dn(O2,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(I2,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Im(r,t,void 0,e),e.currentTarget=null}function V2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==i&&s.isPropagationStopped())break e;ru(s,o,u),i=c}else for(a=0;a<r.length;a++){if(o=r[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==i&&s.isPropagationStopped())break e;ru(s,o,u),i=c}}}if(us)throw e=ya,us=!1,ya=null,e}function re(e,t){var n=t[_a];n===void 0&&(n=t[_a]=new Set);var r=e+"__bubble";n.has(r)||(B2(t,e,2,!1),n.add(r))}function Di(e,t,n){var r=0;t&&(r|=4),B2(n,e,r,t)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function ol(e){if(!e[Ol]){e[Ol]=!0,Y0.forEach(function(n){n!=="selectionchange"&&(Bf.has(n)||Di(n,!1,e),Di(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ol]||(t[Ol]=!0,Di("selectionchange",!1,t))}}function B2(e,t,n,r){switch(k2(t)){case 1:var s=tf;break;case 4:s=nf;break;default:s=Co}n=s.bind(null,t,n,e),s=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Oi(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;o!==null;){if(a=bn(o),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}o=o.parentNode}}r=r.return}d2(function(){var u=i,x=bo(n),h=[];e:{var p=R2.get(e);if(p!==void 0){var b=So,N=e;switch(e){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":b=vf;break;case"focusin":N="focus",b=Ai;break;case"focusout":N="blur",b=Ai;break;case"beforeblur":case"afterblur":b=Ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=wf;break;case F2:case D2:case O2:b=cf;break;case I2:b=jf;break;case"scroll":b=rf;break;case"wheel":b=kf;break;case"copy":case"cut":case"paste":b=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Gc}var w=(t&4)!==0,_=!w&&e==="scroll",m=w?p!==null?p+"Capture":null:p;w=[];for(var f=u,g;f!==null;){g=f;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,m!==null&&(y=nl(f,m),y!=null&&w.push(cl(f,y,g)))),_)break;f=f.return}0<w.length&&(p=new b(p,N,null,n,x),h.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",p&&n!==xa&&(N=n.relatedTarget||n.fromElement)&&(bn(N)||N[Ot]))break e;if((b||p)&&(p=x.window===x?x:(p=x.ownerDocument)?p.defaultView||p.parentWindow:window,b?(N=n.relatedTarget||n.toElement,b=u,N=N?bn(N):null,N!==null&&(_=Fn(N),N!==_||N.tag!==5&&N.tag!==6)&&(N=null)):(b=null,N=u),b!==N)){if(w=Zc,y="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Gc,y="onPointerLeave",m="onPointerEnter",f="pointer"),_=b==null?p:Jn(b),g=N==null?p:Jn(N),p=new w(y,f+"leave",b,n,x),p.target=_,p.relatedTarget=g,y=null,bn(x)===u&&(w=new w(m,f+"enter",N,n,x),w.target=g,w.relatedTarget=_,y=w),_=y,b&&N)t:{for(w=b,m=N,f=0,g=w;g;g=Zn(g))f++;for(g=0,y=m;y;y=Zn(y))g++;for(;0<f-g;)w=Zn(w),f--;for(;0<g-f;)m=Zn(m),g--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=Zn(w),m=Zn(m)}w=null}else w=null;b!==null&&lu(h,p,b,w,!1),N!==null&&_!==null&&lu(h,_,N,w,!0)}}e:{if(p=u?Jn(u):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var k=Lf;else if(Qc(p))if(A2)k=Ff;else{k=Pf;var $=$f}else(b=p.nodeName)&&b.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=zf);if(k&&(k=k(e,u))){T2(h,k,n,x);break e}$&&$(e,p,u),e==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&da(p,"number",p.value)}switch($=u?Jn(u):window,e){case"focusin":(Qc($)||$.contentEditable==="true")&&(Kn=$,ja=u,Gr=null);break;case"focusout":Gr=ja=Kn=null;break;case"mousedown":Ca=!0;break;case"contextmenu":case"mouseup":case"dragend":Ca=!1,tu(h,n,x);break;case"selectionchange":if(If)break;case"keydown":case"keyup":tu(h,n,x)}var z;if(Eo)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Qn?E2(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(M2&&n.locale!=="ko"&&(Qn||D!=="onCompositionStart"?D==="onCompositionEnd"&&Qn&&(z=S2()):(Yt=x,ko="value"in Yt?Yt.value:Yt.textContent,Qn=!0)),$=hs(u,D),0<$.length&&(D=new Wc(D,e,null,n,x),h.push({event:D,listeners:$}),z?D.data=z:(z=_2(n),z!==null&&(D.data=z)))),(z=Mf?Ef(e,n):_f(e,n))&&(u=hs(u,"onBeforeInput"),0<u.length&&(x=new Wc("onBeforeInput","beforeinput",null,n,x),h.push({event:x,listeners:u}),x.data=z))}V2(h,t)})}function cl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hs(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=nl(e,n),i!=null&&r.unshift(cl(e,i,s)),i=nl(e,t),i!=null&&r.push(cl(e,i,s))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lu(e,t,n,r,s){for(var i=t._reactName,a=[];n!==null&&n!==r;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&u!==null&&(o=u,s?(c=nl(n,i),c!=null&&a.unshift(cl(n,c,o))):s||(c=nl(n,i),c!=null&&a.push(cl(n,c,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Uf=/\r\n?/g,Hf=/\u0000|\uFFFD/g;function su(e){return(typeof e=="string"?e:""+e).replace(Uf,`
`).replace(Hf,"")}function Il(e,t,n){if(t=su(t),su(e)!==t&&n)throw Error(S(425))}function xs(){}var ka=null,Sa=null;function Ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ea=typeof setTimeout=="function"?setTimeout:void 0,Zf=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,Wf=typeof queueMicrotask=="function"?queueMicrotask:typeof iu<"u"?function(e){return iu.resolve(null).then(e).catch(Gf)}:Ea;function Gf(e){setTimeout(function(){throw e})}function Ii(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),sl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);sl(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Cr,ul="__reactProps$"+Cr,Ot="__reactContainer$"+Cr,_a="__reactEvents$"+Cr,qf="__reactListeners$"+Cr,Yf="__reactHandles$"+Cr;function bn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=au(e);e!==null;){if(n=e[Ct])return n;e=au(e)}return t}e=n,n=e.parentNode}return null}function kl(e){return e=e[Ct]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Bs(e){return e[ul]||null}var Ta=[],er=-1;function mn(e){return{current:e}}function se(e){0>er||(e.current=Ta[er],Ta[er]=null,er--)}function ne(e,t){er++,Ta[er]=e.current,e.current=t}var cn={},$e=mn(cn),Be=mn(!1),_n=cn;function hr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ue(e){return e=e.childContextTypes,e!=null}function gs(){se(Be),se($e)}function ou(e,t,n){if($e.current!==cn)throw Error(S(168));ne($e,t),ne(Be,n)}function U2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(S(108,Lm(e)||"Unknown",s));return ce({},n,r)}function vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,_n=$e.current,ne($e,e),ne(Be,Be.current),!0}function cu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=U2(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,se(Be),se($e),ne($e,e)):se(Be),ne(Be,n)}var $t=null,Us=!1,Ri=!1;function H2(e){$t===null?$t=[e]:$t.push(e)}function Qf(e){Us=!0,H2(e)}function fn(){if(!Ri&&$t!==null){Ri=!0;var e=0,t=X;try{var n=$t;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$t=null,Us=!1}catch(s){throw $t!==null&&($t=$t.slice(e+1)),h2(wo,fn),s}finally{X=t,Ri=!1}}return null}var tr=[],nr=0,ys=null,bs=0,st=[],it=0,Tn=null,Pt=1,zt="";function xn(e,t){tr[nr++]=bs,tr[nr++]=ys,ys=e,bs=t}function Z2(e,t,n){st[it++]=Pt,st[it++]=zt,st[it++]=Tn,Tn=e;var r=Pt;e=zt;var s=32-gt(r)-1;r&=~(1<<s),n+=1;var i=32-gt(t)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Pt=1<<32-gt(t)+s|n<<s|r,zt=i+e}else Pt=1<<i|n<<s|r,zt=e}function To(e){e.return!==null&&(xn(e,1),Z2(e,1,0))}function Ao(e){for(;e===ys;)ys=tr[--nr],tr[nr]=null,bs=tr[--nr],tr[nr]=null;for(;e===Tn;)Tn=st[--it],st[it]=null,zt=st[--it],st[it]=null,Pt=st[--it],st[it]=null}var Xe=null,Ye=null,ie=!1,xt=null;function W2(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Pt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ye=null,!0):!1;default:return!1}}function Aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function La(e){if(ie){var t=Ye;if(t){var n=t;if(!uu(e,t)){if(Aa(e))throw Error(S(418));t=tn(n.nextSibling);var r=Xe;t&&uu(e,t)?W2(r,n):(e.flags=e.flags&-4097|2,ie=!1,Xe=e)}}else{if(Aa(e))throw Error(S(418));e.flags=e.flags&-4097|2,ie=!1,Xe=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Rl(e){if(e!==Xe)return!1;if(!ie)return du(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ma(e.type,e.memoizedProps)),t&&(t=Ye)){if(Aa(e))throw G2(),Error(S(418));for(;t;)W2(e,t),t=tn(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Xe?tn(e.stateNode.nextSibling):null;return!0}function G2(){for(var e=Ye;e;)e=tn(e.nextSibling)}function xr(){Ye=Xe=null,ie=!1}function Lo(e){xt===null?xt=[e]:xt.push(e)}var Kf=Vt.ReactCurrentBatchConfig;function pt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ws=mn(null),Ns=null,rr=null,$o=null;function Po(){$o=rr=Ns=null}function zo(e){var t=ws.current;se(ws),e._currentValue=t}function $a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){Ns=e,$o=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if($o!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(Ns===null)throw Error(S(308));rr=e,Ns.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var wn=null;function Fo(e){wn===null?wn=[e]:wn.push(e)}function q2(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Fo(t)):(n.next=s.next,s.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,It(e,n)}return s=r.interleaved,s===null?(t.next=t,Fo(r)):(t.next=s.next,s.next=t),r.interleaved=t,It(e,n)}function Jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,No(e,n)}}function mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function js(e,t,n,r){var s=e.updateQueue;Zt=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var x=e.alternate;x!==null&&(x=x.updateQueue,o=x.lastBaseUpdate,o!==a&&(o===null?x.firstBaseUpdate=u:o.next=u,x.lastBaseUpdate=c))}if(i!==null){var h=s.baseState;a=0,x=u=c=null,o=i;do{var p=o.lane,b=o.eventTime;if((r&p)===p){x!==null&&(x=x.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var N=e,w=o;switch(p=t,b=n,w.tag){case 1:if(N=w.payload,typeof N=="function"){h=N.call(b,h,p);break e}h=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=w.payload,p=typeof N=="function"?N.call(b,h,p):N,p==null)break e;h=ce({},h,p);break e;case 2:Zt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[o]:p.push(o))}else b={eventTime:b,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},x===null?(u=x=b,c=h):x=x.next=b,a|=p;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(1);if(x===null&&(c=h),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=x,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Ln|=a,e.lanes=a,e.memoizedState=h}}function fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(S(191,s));s.call(r)}}}var Q2=new q0.Component().refs;function Pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),s=ln(e),i=Ft(r,s);i.payload=t,n!=null&&(i.callback=n),t=nn(e,i,s),t!==null&&(vt(t,e,s,r),Jl(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),s=ln(e),i=Ft(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=nn(e,i,s),t!==null&&(vt(t,e,s,r),Jl(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=ln(e),s=Ft(n,r);s.tag=2,t!=null&&(s.callback=t),t=nn(e,s,r),t!==null&&(vt(t,e,r,n),Jl(t,e,r))}};function pu(e,t,n,r,s,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!al(n,r)||!al(s,i):!0}function K2(e,t,n){var r=!1,s=cn,i=t.contextType;return typeof i=="object"&&i!==null?i=ct(i):(s=Ue(t)?_n:$e.current,r=t.contextTypes,i=(r=r!=null)?hr(e,s):cn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function hu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function za(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=Q2,Do(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=ct(i):(i=Ue(t)?_n:$e.current,s.context=hr(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Pa(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Hs.enqueueReplaceState(s,s.state,null),js(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var o=s.refs;o===Q2&&(o=s.refs={}),a===null?delete o[i]:o[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Vl(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xu(e){var t=e._init;return t(e._payload)}function X2(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function s(m,f){return m=sn(m,f),m.index=0,m.sibling=null,m}function i(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function o(m,f,g,y){return f===null||f.tag!==6?(f=Gi(g,m.mode,y),f.return=m,f):(f=s(f,g),f.return=m,f)}function c(m,f,g,y){var k=g.type;return k===Yn?x(m,f,g.props.children,y,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&xu(k)===f.type)?(y=s(f,g.props),y.ref=zr(m,f,g),y.return=m,y):(y=ss(g.type,g.key,g.props,null,m.mode,y),y.ref=zr(m,f,g),y.return=m,y)}function u(m,f,g,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=qi(g,m.mode,y),f.return=m,f):(f=s(f,g.children||[]),f.return=m,f)}function x(m,f,g,y,k){return f===null||f.tag!==7?(f=kn(g,m.mode,y,k),f.return=m,f):(f=s(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Gi(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Tl:return g=ss(f.type,f.key,f.props,null,m.mode,g),g.ref=zr(m,null,f),g.return=m,g;case qn:return f=qi(f,m.mode,g),f.return=m,f;case Ht:var y=f._init;return h(m,y(f._payload),g)}if(Rr(f)||Tr(f))return f=kn(f,m.mode,g,null),f.return=m,f;Vl(m,f)}return null}function p(m,f,g,y){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:o(m,f,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tl:return g.key===k?c(m,f,g,y):null;case qn:return g.key===k?u(m,f,g,y):null;case Ht:return k=g._init,p(m,f,k(g._payload),y)}if(Rr(g)||Tr(g))return k!==null?null:x(m,f,g,y,null);Vl(m,g)}return null}function b(m,f,g,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(g)||null,o(f,m,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Tl:return m=m.get(y.key===null?g:y.key)||null,c(f,m,y,k);case qn:return m=m.get(y.key===null?g:y.key)||null,u(f,m,y,k);case Ht:var $=y._init;return b(m,f,g,$(y._payload),k)}if(Rr(y)||Tr(y))return m=m.get(g)||null,x(f,m,y,k,null);Vl(f,y)}return null}function N(m,f,g,y){for(var k=null,$=null,z=f,D=f=0,U=null;z!==null&&D<g.length;D++){z.index>D?(U=z,z=null):U=z.sibling;var E=p(m,z,g[D],y);if(E===null){z===null&&(z=U);break}e&&z&&E.alternate===null&&t(m,z),f=i(E,f,D),$===null?k=E:$.sibling=E,$=E,z=U}if(D===g.length)return n(m,z),ie&&xn(m,D),k;if(z===null){for(;D<g.length;D++)z=h(m,g[D],y),z!==null&&(f=i(z,f,D),$===null?k=z:$.sibling=z,$=z);return ie&&xn(m,D),k}for(z=r(m,z);D<g.length;D++)U=b(z,m,D,g[D],y),U!==null&&(e&&U.alternate!==null&&z.delete(U.key===null?D:U.key),f=i(U,f,D),$===null?k=U:$.sibling=U,$=U);return e&&z.forEach(function(q){return t(m,q)}),ie&&xn(m,D),k}function w(m,f,g,y){var k=Tr(g);if(typeof k!="function")throw Error(S(150));if(g=k.call(g),g==null)throw Error(S(151));for(var $=k=null,z=f,D=f=0,U=null,E=g.next();z!==null&&!E.done;D++,E=g.next()){z.index>D?(U=z,z=null):U=z.sibling;var q=p(m,z,E.value,y);if(q===null){z===null&&(z=U);break}e&&z&&q.alternate===null&&t(m,z),f=i(q,f,D),$===null?k=q:$.sibling=q,$=q,z=U}if(E.done)return n(m,z),ie&&xn(m,D),k;if(z===null){for(;!E.done;D++,E=g.next())E=h(m,E.value,y),E!==null&&(f=i(E,f,D),$===null?k=E:$.sibling=E,$=E);return ie&&xn(m,D),k}for(z=r(m,z);!E.done;D++,E=g.next())E=b(z,m,D,E.value,y),E!==null&&(e&&E.alternate!==null&&z.delete(E.key===null?D:E.key),f=i(E,f,D),$===null?k=E:$.sibling=E,$=E);return e&&z.forEach(function(je){return t(m,je)}),ie&&xn(m,D),k}function _(m,f,g,y){if(typeof g=="object"&&g!==null&&g.type===Yn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Tl:e:{for(var k=g.key,$=f;$!==null;){if($.key===k){if(k=g.type,k===Yn){if($.tag===7){n(m,$.sibling),f=s($,g.props.children),f.return=m,m=f;break e}}else if($.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&xu(k)===$.type){n(m,$.sibling),f=s($,g.props),f.ref=zr(m,$,g),f.return=m,m=f;break e}n(m,$);break}else t(m,$);$=$.sibling}g.type===Yn?(f=kn(g.props.children,m.mode,y,g.key),f.return=m,m=f):(y=ss(g.type,g.key,g.props,null,m.mode,y),y.ref=zr(m,f,g),y.return=m,m=y)}return a(m);case qn:e:{for($=g.key;f!==null;){if(f.key===$)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=s(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=qi(g,m.mode,y),f.return=m,m=f}return a(m);case Ht:return $=g._init,_(m,f,$(g._payload),y)}if(Rr(g))return N(m,f,g,y);if(Tr(g))return w(m,f,g,y);Vl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=s(f,g),f.return=m,m=f):(n(m,f),f=Gi(g,m.mode,y),f.return=m,m=f),a(m)):n(m,f)}return _}var gr=X2(!0),J2=X2(!1),Sl={},St=mn(Sl),dl=mn(Sl),ml=mn(Sl);function Nn(e){if(e===Sl)throw Error(S(174));return e}function Oo(e,t){switch(ne(ml,t),ne(dl,e),ne(St,Sl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fa(t,e)}se(St),ne(St,t)}function vr(){se(St),se(dl),se(ml)}function ed(e){Nn(ml.current);var t=Nn(St.current),n=fa(t,e.type);t!==n&&(ne(dl,e),ne(St,n))}function Io(e){dl.current===e&&(se(St),se(dl))}var ae=mn(0);function Cs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vi=[];function Ro(){for(var e=0;e<Vi.length;e++)Vi[e]._workInProgressVersionPrimary=null;Vi.length=0}var es=Vt.ReactCurrentDispatcher,Bi=Vt.ReactCurrentBatchConfig,An=0,oe=null,he=null,be=null,ks=!1,qr=!1,fl=0,Xf=0;function Te(){throw Error(S(321))}function Vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Bo(e,t,n,r,s,i){if(An=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,es.current=e===null||e.memoizedState===null?n3:r3,e=n(r,s),qr){i=0;do{if(qr=!1,fl=0,25<=i)throw Error(S(301));i+=1,be=he=null,t.updateQueue=null,es.current=l3,e=n(r,s)}while(qr)}if(es.current=Ss,t=he!==null&&he.next!==null,An=0,be=he=oe=null,ks=!1,t)throw Error(S(300));return e}function Uo(){var e=fl!==0;return fl=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?oe.memoizedState=be=e:be=be.next=e,be}function ut(){if(he===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=be===null?oe.memoizedState:be.next;if(t!==null)be=t,he=e;else{if(e===null)throw Error(S(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},be===null?oe.memoizedState=be=e:be=be.next=e}return be}function pl(e,t){return typeof t=="function"?t(e):t}function Ui(e){var t=ut(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=he,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var o=a=null,c=null,u=i;do{var x=u.lane;if((An&x)===x)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:x,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=h,a=r):c=c.next=h,oe.lanes|=x,Ln|=x}u=u.next}while(u!==null&&u!==i);c===null?a=r:c.next=o,yt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,oe.lanes|=i,Ln|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hi(e){var t=ut(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=e(i,a.action),a=a.next;while(a!==s);yt(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function td(){}function nd(e,t){var n=oe,r=ut(),s=t(),i=!yt(r.memoizedState,s);if(i&&(r.memoizedState=s,Re=!0),r=r.queue,Ho(sd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,hl(9,ld.bind(null,n,r,s,t),void 0,null),we===null)throw Error(S(349));An&30||rd(n,t,s)}return s}function rd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ld(e,t,n,r){t.value=n,t.getSnapshot=r,id(t)&&ad(e)}function sd(e,t,n){return n(function(){id(t)&&ad(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function ad(e){var t=It(e,1);t!==null&&vt(t,e,1,-1)}function gu(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:e},t.queue=e,e=e.dispatch=t3.bind(null,oe,e),[t.memoizedState,e]}function hl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function od(){return ut().memoizedState}function ts(e,t,n,r){var s=jt();oe.flags|=e,s.memoizedState=hl(1|t,n,void 0,r===void 0?null:r)}function Zs(e,t,n,r){var s=ut();r=r===void 0?null:r;var i=void 0;if(he!==null){var a=he.memoizedState;if(i=a.destroy,r!==null&&Vo(r,a.deps)){s.memoizedState=hl(t,n,i,r);return}}oe.flags|=e,s.memoizedState=hl(1|t,n,i,r)}function vu(e,t){return ts(8390656,8,e,t)}function Ho(e,t){return Zs(2048,8,e,t)}function cd(e,t){return Zs(4,2,e,t)}function ud(e,t){return Zs(4,4,e,t)}function dd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function md(e,t,n){return n=n!=null?n.concat([e]):null,Zs(4,4,dd.bind(null,t,e),n)}function Zo(){}function fd(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pd(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hd(e,t,n){return An&21?(yt(n,t)||(n=v2(),oe.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Jf(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),t()}finally{X=n,Bi.transition=r}}function xd(){return ut().memoizedState}function e3(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gd(e))vd(t,n);else if(n=q2(e,t,n,r),n!==null){var s=ze();vt(n,e,r,s),yd(n,t,r)}}function t3(e,t,n){var r=ln(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gd(e))vd(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,o=i(a,n);if(s.hasEagerState=!0,s.eagerState=o,yt(o,a)){var c=t.interleaved;c===null?(s.next=s,Fo(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=q2(e,t,s,r),n!==null&&(s=ze(),vt(n,e,r,s),yd(n,t,r))}}function gd(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function vd(e,t){qr=ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,No(e,n)}}var Ss={readContext:ct,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},n3={readContext:ct,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:vu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ts(4194308,4,dd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){return ts(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=e3.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:gu,useDebugValue:Zo,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=gu(!1),t=e[0];return e=Jf.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,s=jt();if(ie){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),we===null)throw Error(S(349));An&30||rd(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,vu(sd.bind(null,r,i,e),[e]),r.flags|=2048,hl(9,ld.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=jt(),t=we.identifierPrefix;if(ie){var n=zt,r=Pt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},r3={readContext:ct,useCallback:fd,useContext:ct,useEffect:Ho,useImperativeHandle:md,useInsertionEffect:cd,useLayoutEffect:ud,useMemo:pd,useReducer:Ui,useRef:od,useState:function(){return Ui(pl)},useDebugValue:Zo,useDeferredValue:function(e){var t=ut();return hd(t,he.memoizedState,e)},useTransition:function(){var e=Ui(pl)[0],t=ut().memoizedState;return[e,t]},useMutableSource:td,useSyncExternalStore:nd,useId:xd,unstable_isNewReconciler:!1},l3={readContext:ct,useCallback:fd,useContext:ct,useEffect:Ho,useImperativeHandle:md,useInsertionEffect:cd,useLayoutEffect:ud,useMemo:pd,useReducer:Hi,useRef:od,useState:function(){return Hi(pl)},useDebugValue:Zo,useDeferredValue:function(e){var t=ut();return he===null?t.memoizedState=e:hd(t,he.memoizedState,e)},useTransition:function(){var e=Hi(pl)[0],t=ut().memoizedState;return[e,t]},useMutableSource:td,useSyncExternalStore:nd,useId:xd,unstable_isNewReconciler:!1};function yr(e,t){try{var n="",r=t;do n+=Am(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Zi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var s3=typeof WeakMap=="function"?WeakMap:Map;function bd(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Es||(Es=!0,Wa=r),Fa(e,t)},n}function wd(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Fa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Fa(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new s3;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=y3.bind(null,e,t,n),t.then(e,e))}function bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wu(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e)}var i3=Vt.ReactCurrentOwner,Re=!1;function Pe(e,t,n,r){t.child=e===null?J2(t,null,n,r):gr(t,e.child,n,r)}function Nu(e,t,n,r,s){n=n.render;var i=t.ref;return dr(t,s),r=Bo(e,t,n,r,i,s),n=Uo(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Rt(e,t,s)):(ie&&n&&To(t),t.flags|=1,Pe(e,t,r,s),t.child)}function ju(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!Jo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Nd(e,t,i,r,s)):(e=ss(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(a,r)&&e.ref===t.ref)return Rt(e,t,s)}return t.flags|=1,e=sn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Nd(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(al(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Rt(e,t,s)}return Da(e,t,n,r,s)}function jd(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(sr,Ge),Ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(sr,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(sr,Ge),Ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(sr,Ge),Ge|=r;return Pe(e,t,s,n),t.child}function Cd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Da(e,t,n,r,s){var i=Ue(n)?_n:$e.current;return i=hr(t,i),dr(t,s),n=Bo(e,t,n,r,i,s),r=Uo(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Rt(e,t,s)):(ie&&r&&To(t),t.flags|=1,Pe(e,t,n,s),t.child)}function Cu(e,t,n,r,s){if(Ue(n)){var i=!0;vs(t)}else i=!1;if(dr(t,s),t.stateNode===null)ns(e,t),K2(t,n,r),za(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Ue(n)?_n:$e.current,u=hr(t,u));var x=n.getDerivedStateFromProps,h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||c!==u)&&hu(t,a,r,u),Zt=!1;var p=t.memoizedState;a.state=p,js(t,r,a,s),c=t.memoizedState,o!==r||p!==c||Be.current||Zt?(typeof x=="function"&&(Pa(t,n,x,r),c=t.memoizedState),(o=Zt||pu(t,n,o,r,p,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Y2(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:pt(t.type,o),a.props=u,h=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=ct(c):(c=Ue(n)?_n:$e.current,c=hr(t,c));var b=n.getDerivedStateFromProps;(x=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||p!==c)&&hu(t,a,r,c),Zt=!1,p=t.memoizedState,a.state=p,js(t,r,a,s);var N=t.memoizedState;o!==h||p!==N||Be.current||Zt?(typeof b=="function"&&(Pa(t,n,b,r),N=t.memoizedState),(u=Zt||pu(t,n,u,r,p,N,c)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),a.props=r,a.state=N,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Oa(e,t,n,r,i,s)}function Oa(e,t,n,r,s,i){Cd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&cu(t,n,!1),Rt(e,t,i);r=t.stateNode,i3.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=gr(t,e.child,null,i),t.child=gr(t,null,o,i)):Pe(e,t,o,i),t.memoizedState=r.state,s&&cu(t,n,!0),t.child}function kd(e){var t=e.stateNode;t.pendingContext?ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ou(e,t.context,!1),Oo(e,t.containerInfo)}function ku(e,t,n,r,s){return xr(),Lo(s),t.flags|=256,Pe(e,t,n,r),t.child}var Ia={dehydrated:null,treeContext:null,retryLane:0};function Ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sd(e,t,n){var r=t.pendingProps,s=ae.current,i=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ne(ae,s&1),e===null)return La(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=qs(a,r,0,null),e=kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ra(n),t.memoizedState=Ia,e):Wo(t,a));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return a3(e,t,a,r,o,s,n);if(i){i=r.fallback,a=t.mode,s=e.child,o=s.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=sn(s,c),r.subtreeFlags=s.subtreeFlags&14680064),o!==null?i=sn(o,i):(i=kn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ra(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ia,r}return i=e.child,e=i.sibling,r=sn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wo(e,t){return t=qs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bl(e,t,n,r){return r!==null&&Lo(r),gr(t,e.child,null,n),e=Wo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function a3(e,t,n,r,s,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Zi(Error(S(422))),Bl(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=qs({mode:"visible",children:r.children},s,0,null),i=kn(i,s,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&gr(t,e.child,null,a),t.child.memoizedState=Ra(a),t.memoizedState=Ia,i);if(!(t.mode&1))return Bl(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(S(419)),r=Zi(i,r,void 0),Bl(e,t,a,r)}if(o=(a&e.childLanes)!==0,Re||o){if(r=we,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,It(e,s),vt(r,e,s,-1))}return Xo(),r=Zi(Error(S(421))),Bl(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=b3.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,Ye=tn(s.nextSibling),Xe=t,ie=!0,xt=null,e!==null&&(st[it++]=Pt,st[it++]=zt,st[it++]=Tn,Pt=e.id,zt=e.overflow,Tn=t),t=Wo(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$a(e.return,t,n)}function Wi(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Md(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(Pe(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ae,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Cs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Wi(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Cs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Wi(t,!0,n,null,i);break;case"together":Wi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function o3(e,t,n){switch(t.tag){case 3:kd(t),xr();break;case 5:ed(t);break;case 1:Ue(t.type)&&vs(t);break;case 4:Oo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;ne(ws,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?Sd(e,t,n):(ne(ae,ae.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);ne(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Md(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ne(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,jd(e,t,n)}return Rt(e,t,n)}var Ed,Va,_d,Td;Ed=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Va=function(){};_d=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Nn(St.current);var i=null;switch(n){case"input":s=ca(e,s),r=ca(e,r),i=[];break;case"select":s=ce({},s,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":s=ma(e,s),r=ma(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xs)}pa(n,r);var a;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var o=s[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(el.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(o=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(el.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&re("scroll",e),i||o===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Td=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function c3(e,t,n){var r=t.pendingProps;switch(Ao(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ue(t.type)&&gs(),Ae(t),null;case 3:return r=t.stateNode,vr(),se(Be),se($e),Ro(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Ya(xt),xt=null))),Va(e,t),Ae(t),null;case 5:Io(t);var s=Nn(ml.current);if(n=t.type,e!==null&&t.stateNode!=null)_d(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Ae(t),null}if(e=Nn(St.current),Rl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ct]=t,r[ul]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(s=0;s<Br.length;s++)re(Br[s],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":zc(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":Dc(r,i),re("invalid",r)}pa(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];a==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&Il(r.textContent,o,e),s=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Il(r.textContent,o,e),s=["children",""+o]):el.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&re("scroll",r)}switch(n){case"input":Al(r),Fc(r,i,!0);break;case"textarea":Al(r),Oc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xs)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=r2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ct]=t,e[ul]=r,Ed(e,t,!1,!1),t.stateNode=e;e:{switch(a=ha(n,r),n){case"dialog":re("cancel",e),re("close",e),s=r;break;case"iframe":case"object":case"embed":re("load",e),s=r;break;case"video":case"audio":for(s=0;s<Br.length;s++)re(Br[s],e);s=r;break;case"source":re("error",e),s=r;break;case"img":case"image":case"link":re("error",e),re("load",e),s=r;break;case"details":re("toggle",e),s=r;break;case"input":zc(e,r),s=ca(e,r),re("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":Dc(e,r),s=ma(e,r),re("invalid",e);break;default:s=r}pa(n,s),o=s;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?i2(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&l2(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&tl(e,c):typeof c=="number"&&tl(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(el.hasOwnProperty(i)?c!=null&&i==="onScroll"&&re("scroll",e):c!=null&&xo(e,i,c,a))}switch(n){case"input":Al(e),Fc(e,r,!1);break;case"textarea":Al(e),Oc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ar(e,!!r.multiple,i,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=xs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Td(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Nn(ml.current),Nn(St.current),Rl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(i=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Il(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Ae(t),null;case 13:if(se(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ye!==null&&t.mode&1&&!(t.flags&128))G2(),xr(),t.flags|=98560,i=!1;else if(i=Rl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Ct]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else xt!==null&&(Ya(xt),xt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?xe===0&&(xe=3):Xo())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return vr(),Va(e,t),e===null&&ol(t.stateNode.containerInfo),Ae(t),null;case 10:return zo(t.type._context),Ae(t),null;case 17:return Ue(t.type)&&gs(),Ae(t),null;case 19:if(se(ae),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Fr(i,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Cs(e),a!==null){for(t.flags|=128,Fr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ae,ae.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>br&&(t.flags|=128,r=!0,Fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Cs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ie)return Ae(t),null}else 2*de()-i.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,Fr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,n=ae.current,ne(ae,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Ko(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function u3(e,t){switch(Ao(t),t.tag){case 1:return Ue(t.type)&&gs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),se(Be),se($e),Ro(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Io(t),null;case 13:if(se(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ae),null;case 4:return vr(),null;case 10:return zo(t.type._context),null;case 22:case 23:return Ko(),null;case 24:return null;default:return null}}var Ul=!1,Le=!1,d3=typeof WeakSet=="function"?WeakSet:Set,F=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Ba(e,t,n){try{n()}catch(r){ue(e,t,r)}}var Mu=!1;function m3(e,t){if(ka=fs,e=P2(),_o(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,x=0,h=e,p=null;t:for(;;){for(var b;h!==n||s!==0&&h.nodeType!==3||(o=a+s),h!==i||r!==0&&h.nodeType!==3||(c=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(b=h.firstChild)!==null;)p=h,h=b;for(;;){if(h===e)break t;if(p===n&&++u===s&&(o=a),p===i&&++x===r&&(c=a),(b=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=b}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sa={focusedElem:e,selectionRange:n},fs=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var w=N.memoizedProps,_=N.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:pt(t.type,w),_);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){ue(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return N=Mu,Mu=!1,N}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ba(t,n,i)}s=s.next}while(s!==r)}}function Ws(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[ul],delete t[_a],delete t[qf],delete t[Yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ld(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xs));else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}function Za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Za(e,t,n),e=e.sibling;e!==null;)Za(e,t,n),e=e.sibling}var Se=null,ht=!1;function Ut(e,t,n){for(n=n.child;n!==null;)$d(e,t,n),n=n.sibling}function $d(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Os,n)}catch{}switch(n.tag){case 5:Le||lr(n,t);case 6:var r=Se,s=ht;Se=null,Ut(e,t,n),Se=r,ht=s,Se!==null&&(ht?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ht?(e=Se,n=n.stateNode,e.nodeType===8?Ii(e.parentNode,n):e.nodeType===1&&Ii(e,n),sl(e)):Ii(Se,n.stateNode));break;case 4:r=Se,s=ht,Se=n.stateNode.containerInfo,ht=!0,Ut(e,t,n),Se=r,ht=s;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ba(n,t,a),s=s.next}while(s!==r)}Ut(e,t,n);break;case 1:if(!Le&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){ue(n,t,o)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Ut(e,t,n),Le=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new d3),t.forEach(function(r){var s=w3.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:Se=o.stateNode,ht=!1;break e;case 3:Se=o.stateNode.containerInfo,ht=!0;break e;case 4:Se=o.stateNode.containerInfo,ht=!0;break e}o=o.return}if(Se===null)throw Error(S(160));$d(i,a,s),Se=null,ht=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ue(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),wt(e),r&4){try{Yr(3,e,e.return),Ws(3,e)}catch(w){ue(e,e.return,w)}try{Yr(5,e,e.return)}catch(w){ue(e,e.return,w)}}break;case 1:dt(t,e),wt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(dt(t,e),wt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var s=e.stateNode;try{tl(s,"")}catch(w){ue(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&t2(s,i),ha(o,a);var u=ha(o,i);for(a=0;a<c.length;a+=2){var x=c[a],h=c[a+1];x==="style"?i2(s,h):x==="dangerouslySetInnerHTML"?l2(s,h):x==="children"?tl(s,h):xo(s,x,h,u)}switch(o){case"input":ua(s,i);break;case"textarea":n2(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?ar(s,!!i.multiple,b,!1):p!==!!i.multiple&&(i.defaultValue!=null?ar(s,!!i.multiple,i.defaultValue,!0):ar(s,!!i.multiple,i.multiple?[]:"",!1))}s[ul]=i}catch(w){ue(e,e.return,w)}}break;case 6:if(dt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(S(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(w){ue(e,e.return,w)}}break;case 3:if(dt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(t.containerInfo)}catch(w){ue(e,e.return,w)}break;case 4:dt(t,e),wt(e);break;case 13:dt(t,e),wt(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Yo=de())),r&4&&_u(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(u=Le)||x,dt(t,e),Le=u):dt(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!x&&e.mode&1)for(F=e,x=e.child;x!==null;){for(h=F=x;F!==null;){switch(p=F,b=p.child,p.tag){case 0:case 11:case 14:case 15:Yr(4,p,p.return);break;case 1:lr(p,p.return);var N=p.stateNode;if(typeof N.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(w){ue(r,n,w)}}break;case 5:lr(p,p.return);break;case 22:if(p.memoizedState!==null){Au(h);continue}}b!==null?(b.return=p,F=b):Au(h)}x=x.sibling}e:for(x=null,h=e;;){if(h.tag===5){if(x===null){x=h;try{s=h.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=s2("display",a))}catch(w){ue(e,e.return,w)}}}else if(h.tag===6){if(x===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){ue(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;x===h&&(x=null),h=h.return}x===h&&(x=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:dt(t,e),wt(e),r&4&&_u(e);break;case 21:break;default:dt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ld(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(tl(s,""),r.flags&=-33);var i=Eu(e);Za(e,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Eu(e);Ha(e,o,a);break;default:throw Error(S(161))}}catch(c){ue(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f3(e,t,n){F=e,zd(e)}function zd(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var s=F,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||Ul;if(!a){var o=s.alternate,c=o!==null&&o.memoizedState!==null||Le;o=Ul;var u=Le;if(Ul=a,(Le=c)&&!u)for(F=s;F!==null;)a=F,c=a.child,a.tag===22&&a.memoizedState!==null?Lu(s):c!==null?(c.return=a,F=c):Lu(s);for(;i!==null;)F=i,zd(i),i=i.sibling;F=s,Ul=o,Le=u}Tu(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,F=i):Tu(e)}}function Tu(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Ws(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&fu(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fu(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var x=u.memoizedState;if(x!==null){var h=x.dehydrated;h!==null&&sl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Le||t.flags&512&&Ua(t)}catch(p){ue(t,t.return,p)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Au(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Lu(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ws(4,t)}catch(c){ue(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){ue(t,s,c)}}var i=t.return;try{Ua(t)}catch(c){ue(t,i,c)}break;case 5:var a=t.return;try{Ua(t)}catch(c){ue(t,a,c)}}}catch(c){ue(t,t.return,c)}if(t===e){F=null;break}var o=t.sibling;if(o!==null){o.return=t.return,F=o;break}F=t.return}}var p3=Math.ceil,Ms=Vt.ReactCurrentDispatcher,Go=Vt.ReactCurrentOwner,ot=Vt.ReactCurrentBatchConfig,Q=0,we=null,me=null,Me=0,Ge=0,sr=mn(0),xe=0,xl=null,Ln=0,Gs=0,qo=0,Qr=null,Ie=null,Yo=0,br=1/0,At=null,Es=!1,Wa=null,rn=null,Hl=!1,Qt=null,_s=0,Kr=0,Ga=null,rs=-1,ls=0;function ze(){return Q&6?de():rs!==-1?rs:rs=de()}function ln(e){return e.mode&1?Q&2&&Me!==0?Me&-Me:Kf.transition!==null?(ls===0&&(ls=v2()),ls):(e=X,e!==0||(e=window.event,e=e===void 0?16:k2(e.type)),e):1}function vt(e,t,n,r){if(50<Kr)throw Kr=0,Ga=null,Error(S(185));jl(e,n,r),(!(Q&2)||e!==we)&&(e===we&&(!(Q&2)&&(Gs|=n),xe===4&&qt(e,Me)),He(e,r),n===1&&Q===0&&!(t.mode&1)&&(br=de()+500,Us&&fn()))}function He(e,t){var n=e.callbackNode;Qm(e,t);var r=ms(e,e===we?Me:0);if(r===0)n!==null&&Vc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vc(n),t===1)e.tag===0?Qf($u.bind(null,e)):H2($u.bind(null,e)),Wf(function(){!(Q&6)&&fn()}),n=null;else{switch(y2(r)){case 1:n=wo;break;case 4:n=x2;break;case 16:n=ds;break;case 536870912:n=g2;break;default:n=ds}n=Ud(n,Fd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fd(e,t){if(rs=-1,ls=0,Q&6)throw Error(S(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=ms(e,e===we?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ts(e,r);else{t=r;var s=Q;Q|=2;var i=Od();(we!==e||Me!==t)&&(At=null,br=de()+500,Cn(e,t));do try{g3();break}catch(o){Dd(e,o)}while(1);Po(),Ms.current=i,Q=s,me!==null?t=0:(we=null,Me=0,t=xe)}if(t!==0){if(t===2&&(s=ba(e),s!==0&&(r=s,t=qa(e,s))),t===1)throw n=xl,Cn(e,0),qt(e,r),He(e,de()),n;if(t===6)qt(e,r);else{if(s=e.current.alternate,!(r&30)&&!h3(s)&&(t=Ts(e,r),t===2&&(i=ba(e),i!==0&&(r=i,t=qa(e,i))),t===1))throw n=xl,Cn(e,0),qt(e,r),He(e,de()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:gn(e,Ie,At);break;case 3:if(qt(e,r),(r&130023424)===r&&(t=Yo+500-de(),10<t)){if(ms(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ea(gn.bind(null,e,Ie,At),t);break}gn(e,Ie,At);break;case 4:if(qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-gt(r);i=1<<a,a=t[a],a>s&&(s=a),r&=~i}if(r=s,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*p3(r/1960))-r,10<r){e.timeoutHandle=Ea(gn.bind(null,e,Ie,At),r);break}gn(e,Ie,At);break;case 5:gn(e,Ie,At);break;default:throw Error(S(329))}}}return He(e,de()),e.callbackNode===n?Fd.bind(null,e):null}function qa(e,t){var n=Qr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=Ts(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Ya(t)),e}function Ya(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function h3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!yt(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~qo,t&=~Gs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function $u(e){if(Q&6)throw Error(S(327));mr();var t=ms(e,0);if(!(t&1))return He(e,de()),null;var n=Ts(e,t);if(e.tag!==0&&n===2){var r=ba(e);r!==0&&(t=r,n=qa(e,r))}if(n===1)throw n=xl,Cn(e,0),qt(e,t),He(e,de()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Ie,At),He(e,de()),null}function Qo(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(br=de()+500,Us&&fn())}}function $n(e){Qt!==null&&Qt.tag===0&&!(Q&6)&&mr();var t=Q;Q|=1;var n=ot.transition,r=X;try{if(ot.transition=null,X=1,e)return e()}finally{X=r,ot.transition=n,Q=t,!(Q&6)&&fn()}}function Ko(){Ge=sr.current,se(sr)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zf(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Ao(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gs();break;case 3:vr(),se(Be),se($e),Ro();break;case 5:Io(r);break;case 4:vr();break;case 13:se(ae);break;case 19:se(ae);break;case 10:zo(r.type._context);break;case 22:case 23:Ko()}n=n.return}if(we=e,me=e=sn(e.current,null),Me=Ge=t,xe=0,xl=null,qo=Gs=Ln=0,Ie=Qr=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}wn=null}return e}function Dd(e,t){do{var n=me;try{if(Po(),es.current=Ss,ks){for(var r=oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ks=!1}if(An=0,be=he=oe=null,qr=!1,fl=0,Go.current=null,n===null||n.return===null){xe=1,xl=t,me=null;break}e:{var i=e,a=n.return,o=n,c=t;if(t=Me,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,x=o,h=x.tag;if(!(x.mode&1)&&(h===0||h===11||h===15)){var p=x.alternate;p?(x.updateQueue=p.updateQueue,x.memoizedState=p.memoizedState,x.lanes=p.lanes):(x.updateQueue=null,x.memoizedState=null)}var b=bu(a);if(b!==null){b.flags&=-257,wu(b,a,o,i,t),b.mode&1&&yu(i,u,t),t=b,c=u;var N=t.updateQueue;if(N===null){var w=new Set;w.add(c),t.updateQueue=w}else N.add(c);break e}else{if(!(t&1)){yu(i,u,t),Xo();break e}c=Error(S(426))}}else if(ie&&o.mode&1){var _=bu(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),wu(_,a,o,i,t),Lo(yr(c,o));break e}}i=c=yr(c,o),xe!==4&&(xe=2),Qr===null?Qr=[i]:Qr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=bd(i,c,t);mu(i,m);break e;case 1:o=c;var f=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rn===null||!rn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=wd(i,o,t);mu(i,y);break e}}i=i.return}while(i!==null)}Rd(n)}catch(k){t=k,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function Od(){var e=Ms.current;return Ms.current=Ss,e===null?Ss:e}function Xo(){(xe===0||xe===3||xe===2)&&(xe=4),we===null||!(Ln&268435455)&&!(Gs&268435455)||qt(we,Me)}function Ts(e,t){var n=Q;Q|=2;var r=Od();(we!==e||Me!==t)&&(At=null,Cn(e,t));do try{x3();break}catch(s){Dd(e,s)}while(1);if(Po(),Q=n,Ms.current=r,me!==null)throw Error(S(261));return we=null,Me=0,xe}function x3(){for(;me!==null;)Id(me)}function g3(){for(;me!==null&&!Vm();)Id(me)}function Id(e){var t=Bd(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?Rd(e):me=t,Go.current=null}function Rd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=u3(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,me=null;return}}else if(n=c3(n,t,Ge),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);xe===0&&(xe=5)}function gn(e,t,n){var r=X,s=ot.transition;try{ot.transition=null,X=1,v3(e,t,n,r)}finally{ot.transition=s,X=r}return null}function v3(e,t,n,r){do mr();while(Qt!==null);if(Q&6)throw Error(S(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Km(e,i),e===we&&(me=we=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hl||(Hl=!0,Ud(ds,function(){return mr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var a=X;X=1;var o=Q;Q|=4,Go.current=null,m3(e,n),Pd(n,e),Of(Sa),fs=!!ka,Sa=ka=null,e.current=n,f3(n),Bm(),Q=o,X=a,ot.transition=i}else e.current=n;if(Hl&&(Hl=!1,Qt=e,_s=s),i=e.pendingLanes,i===0&&(rn=null),Zm(n.stateNode),He(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Es)throw Es=!1,e=Wa,Wa=null,e;return _s&1&&e.tag!==0&&mr(),i=e.pendingLanes,i&1?e===Ga?Kr++:(Kr=0,Ga=e):Kr=0,fn(),null}function mr(){if(Qt!==null){var e=y2(_s),t=ot.transition,n=X;try{if(ot.transition=null,X=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,_s=0,Q&6)throw Error(S(331));var s=Q;for(Q|=4,F=e.current;F!==null;){var i=F,a=i.child;if(F.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(F=u;F!==null;){var x=F;switch(x.tag){case 0:case 11:case 15:Yr(8,x,i)}var h=x.child;if(h!==null)h.return=x,F=h;else for(;F!==null;){x=F;var p=x.sibling,b=x.return;if(Ad(x),x===u){F=null;break}if(p!==null){p.return=b,F=p;break}F=b}}}var N=i.alternate;if(N!==null){var w=N.child;if(w!==null){N.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}F=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,F=a;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,F=m;break e}F=i.return}}var f=e.current;for(F=f;F!==null;){a=F;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,F=g;else e:for(a=f;F!==null;){if(o=F,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ws(9,o)}}catch(k){ue(o,o.return,k)}if(o===a){F=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,F=y;break e}F=o.return}}if(Q=s,fn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Os,e)}catch{}r=!0}return r}finally{X=n,ot.transition=t}}return!1}function Pu(e,t,n){t=yr(n,t),t=bd(e,t,1),e=nn(e,t,1),t=ze(),e!==null&&(jl(e,1,t),He(e,t))}function ue(e,t,n){if(e.tag===3)Pu(e,e,n);else for(;t!==null;){if(t.tag===3){Pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=yr(n,e),e=wd(t,e,1),t=nn(t,e,1),e=ze(),t!==null&&(jl(t,1,e),He(t,e));break}}t=t.return}}function y3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Me&n)===n&&(xe===4||xe===3&&(Me&130023424)===Me&&500>de()-Yo?Cn(e,0):qo|=n),He(e,t)}function Vd(e,t){t===0&&(e.mode&1?(t=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):t=1);var n=ze();e=It(e,t),e!==null&&(jl(e,t,n),He(e,n))}function b3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vd(e,n)}function w3(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Vd(e,n)}var Bd;Bd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,o3(e,t,n);Re=!!(e.flags&131072)}else Re=!1,ie&&t.flags&1048576&&Z2(t,bs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ns(e,t),e=t.pendingProps;var s=hr(t,$e.current);dr(t,n),s=Bo(null,t,r,e,s,n);var i=Uo();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,vs(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Do(t),s.updater=Hs,t.stateNode=s,s._reactInternals=t,za(t,r,e,n),t=Oa(null,t,r,!0,i,n)):(t.tag=0,ie&&i&&To(t),Pe(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ns(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=j3(r),e=pt(r,e),s){case 0:t=Da(null,t,r,e,n);break e;case 1:t=Cu(null,t,r,e,n);break e;case 11:t=Nu(null,t,r,e,n);break e;case 14:t=ju(null,t,r,pt(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:pt(r,s),Da(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:pt(r,s),Cu(e,t,r,s,n);case 3:e:{if(kd(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Y2(e,t),js(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=yr(Error(S(423)),t),t=ku(e,t,r,n,s);break e}else if(r!==s){s=yr(Error(S(424)),t),t=ku(e,t,r,n,s);break e}else for(Ye=tn(t.stateNode.containerInfo.firstChild),Xe=t,ie=!0,xt=null,n=J2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===s){t=Rt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return ed(t),e===null&&La(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,a=s.children,Ma(r,s)?a=null:i!==null&&Ma(r,i)&&(t.flags|=32),Cd(e,t),Pe(e,t,a,n),t.child;case 6:return e===null&&La(t),null;case 13:return Sd(e,t,n);case 4:return Oo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gr(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:pt(r,s),Nu(e,t,r,s,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,a=s.value,ne(ws,r._currentValue),r._currentValue=a,i!==null)if(yt(i.value,a)){if(i.children===s.children&&!Be.current){t=Rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){a=i.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ft(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var x=u.pending;x===null?c.next=c:(c.next=x.next,x.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),$a(i.return,n,t),o.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),$a(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Pe(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,dr(t,n),s=ct(s),r=r(s),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,s=pt(r,t.pendingProps),s=pt(r.type,s),ju(e,t,r,s,n);case 15:return Nd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:pt(r,s),ns(e,t),t.tag=1,Ue(r)?(e=!0,vs(t)):e=!1,dr(t,n),K2(t,r,s),za(t,r,s,n),Oa(null,t,r,!0,e,n);case 19:return Md(e,t,n);case 22:return jd(e,t,n)}throw Error(S(156,t.tag))};function Ud(e,t){return h2(e,t)}function N3(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new N3(e,t,n,r)}function Jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function j3(e){if(typeof e=="function")return Jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vo)return 11;if(e===yo)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ss(e,t,n,r,s,i){var a=2;if(r=e,typeof e=="function")Jo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Yn:return kn(n.children,s,i,t);case go:a=8,s|=8;break;case sa:return e=at(12,n,t,s|2),e.elementType=sa,e.lanes=i,e;case ia:return e=at(13,n,t,s),e.elementType=ia,e.lanes=i,e;case aa:return e=at(19,n,t,s),e.elementType=aa,e.lanes=i,e;case X0:return qs(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q0:a=10;break e;case K0:a=9;break e;case vo:a=11;break e;case yo:a=14;break e;case Ht:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=at(a,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function kn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function qs(e,t,n,r){return e=at(22,e,r,t),e.elementType=X0,e.lanes=n,e.stateNode={isHidden:!1},e}function Gi(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function qi(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function C3(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ei(0),this.expirationTimes=Ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ec(e,t,n,r,s,i,a,o,c){return e=new C3(e,t,n,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=at(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(i),e}function k3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hd(e){if(!e)return cn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ue(n))return U2(e,n,t)}return t}function Zd(e,t,n,r,s,i,a,o,c){return e=ec(n,r,!0,e,s,i,a,o,c),e.context=Hd(null),n=e.current,r=ze(),s=ln(n),i=Ft(r,s),i.callback=t??null,nn(n,i,s),e.current.lanes=s,jl(e,s,r),He(e,r),e}function Ys(e,t,n,r){var s=t.current,i=ze(),a=ln(s);return n=Hd(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(s,t,a),e!==null&&(vt(e,s,a,i),Jl(e,s,a)),a}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tc(e,t){zu(e,t),(e=e.alternate)&&zu(e,t)}function S3(){return null}var Wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function nc(e){this._internalRoot=e}Qs.prototype.render=nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ys(e,t,null,null)};Qs.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){Ys(null,e,null,null)}),t[Ot]=null}};function Qs(e){this._internalRoot=e}Qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=N2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gt.length&&t!==0&&t<Gt[n].priority;n++);Gt.splice(n,0,e),n===0&&C2(e)}};function rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fu(){}function M3(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=As(a);i.call(u)}}var a=Zd(t,r,e,0,null,!1,!1,"",Fu);return e._reactRootContainer=a,e[Ot]=a.current,ol(e.nodeType===8?e.parentNode:e),$n(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var o=r;r=function(){var u=As(c);o.call(u)}}var c=ec(e,0,!1,null,null,!1,!1,"",Fu);return e._reactRootContainer=c,e[Ot]=c.current,ol(e.nodeType===8?e.parentNode:e),$n(function(){Ys(t,c,n,r)}),c}function Xs(e,t,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var o=s;s=function(){var c=As(a);o.call(c)}}Ys(t,a,e,s)}else a=M3(n,t,e,s,r);return As(a)}b2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(No(t,n|1),He(t,de()),!(Q&6)&&(br=de()+500,fn()))}break;case 13:$n(function(){var r=It(e,1);if(r!==null){var s=ze();vt(r,e,1,s)}}),tc(e,1)}};jo=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=ze();vt(t,e,134217728,n)}tc(e,134217728)}};w2=function(e){if(e.tag===13){var t=ln(e),n=It(e,t);if(n!==null){var r=ze();vt(n,e,t,r)}tc(e,t)}};N2=function(){return X};j2=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};ga=function(e,t,n){switch(t){case"input":if(ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Bs(r);if(!s)throw Error(S(90));e2(r),ua(r,s)}}}break;case"textarea":n2(e,n);break;case"select":t=n.value,t!=null&&ar(e,!!n.multiple,t,!1)}};c2=Qo;u2=$n;var E3={usingClientEntryPoint:!1,Events:[kl,Jn,Bs,a2,o2,Qo]},Dr={findFiberByHostInstance:bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_3={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=f2(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||S3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Os=Zl.inject(_3),kt=Zl}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E3;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rc(t))throw Error(S(200));return k3(e,t,null,n)};et.createRoot=function(e,t){if(!rc(e))throw Error(S(299));var n=!1,r="",s=Wd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ec(e,1,!1,null,null,n,!1,r,s),e[Ot]=t.current,ol(e.nodeType===8?e.parentNode:e),new nc(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=f2(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return $n(e)};et.hydrate=function(e,t,n){if(!Ks(t))throw Error(S(200));return Xs(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!rc(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=Wd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Zd(t,null,e,1,n??null,s,!1,i,a),e[Ot]=t.current,ol(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Qs(t)};et.render=function(e,t,n){if(!Ks(t))throw Error(S(200));return Xs(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Ks(e))throw Error(S(40));return e._reactRootContainer?($n(function(){Xs(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};et.unstable_batchedUpdates=Qo;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ks(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Xs(e,t,n,!1,r)};et.version="18.2.0-next-9e3b772b8-20220608";function Gd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gd)}catch(e){console.error(e)}}Gd(),Z0.exports=et;var T3=Z0.exports,Du=T3;ra.createRoot=Du.createRoot,ra.hydrateRoot=Du.hydrateRoot;const A3="/assets/react-35ef61ed.svg";var L3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $3=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Oe=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:a,children:o,...c},u)=>j.createElement("svg",{ref:u,...L3,width:s,height:s,stroke:r,strokeWidth:a?Number(i)*24/Number(s):i,className:`lucide lucide-${$3(e)}`,...c},[...t.map(([x,h])=>j.createElement(x,h)),...(Array.isArray(o)?o:[o])||[]]));return n.displayName=`${e}`,n},P3=Oe("ArrowLeft",[["line",{x1:"19",x2:"5",y1:"12",y2:"12",key:"9fu2vq"}],["polyline",{points:"12 19 5 12 12 5",key:"1ksm0z"}]]),Xr=Oe("ArrowRight",[["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["polyline",{points:"12 5 19 12 12 19",key:"sfr3i6"}]]),z3=Oe("ArrowUpRight",[["line",{x1:"7",x2:"17",y1:"17",y2:"7",key:"11kluq"}],["polyline",{points:"7 7 17 7 17 17",key:"blehsp"}]]),Wn=Oe("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]),Nt=Oe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),F3=Oe("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),D3=Oe("ChevronDown",[["polyline",{points:"6 9 12 15 18 9",key:"1do0m2"}]]),O3=Oe("ChevronRight",[["polyline",{points:"9 18 15 12 9 6",key:"1rtp27"}]]),I3=Oe("ChevronUp",[["polyline",{points:"18 15 12 9 6 15",key:"1uugdp"}]]),R3=Oe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),kr=Oe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),V3=Oe("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),B3=Oe("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),U3=Oe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),Sr=Oe("X",[["line",{x1:"18",x2:"6",y1:"6",y2:"18",key:"15jfxm"}],["line",{x1:"6",x2:"18",y1:"6",y2:"18",key:"d1lma3"}]]),qd=j.createContext("");var Yd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ou=Ve.createContext&&Ve.createContext(Yd),an=globalThis&&globalThis.__assign||function(){return an=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},an.apply(this,arguments)},H3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function Qd(e){return e&&e.map(function(t,n){return Ve.createElement(t.tag,an({key:n},t.attr),Qd(t.child))})}function Ze(e){return function(t){return Ve.createElement(Z3,an({attr:an({},e.attr)},t),Qd(e.child))}}function Z3(e){var t=function(n){var r=e.attr,s=e.size,i=e.title,a=H3(e,["attr","size","title"]),o=s||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),Ve.createElement("svg",an({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:c,style:an(an({color:e.color||n.color},n.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),i&&Ve.createElement("title",null,i),e.children)};return Ou!==void 0?Ve.createElement(Ou.Consumer,null,function(n){return t(n)}):t(Yd)}function W3(e){return Ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"}}]})(e)}function G3(e){return Ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(e)}function q3(e){return Ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"}}]})(e)}function fe(e){const[t,n]=j.useState(!1),[r,s]=j.useState(0),{showCodeButton:i}=j.useContext(qd),a=()=>{navigator.clipboard.writeText(e==null?void 0:e.code).then(()=>{console.log("Text copied to clipboard"),s(o=>o+1)}).catch(o=>{console.error("Failed to copy text: ",o)})};return l.jsxs(l.Fragment,{children:[i&&l.jsx("button",{onClick:()=>n(!t),type:"button",className:"rounded-full w-12 h-12 bg-white border-2 border-black px-3 py-2 font-bold text-black shadow-lg hover:text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black fixed top-10 right-10 flex justify-center items-center text-lg",style:{zIndex:1e4},children:"</>"}),t&&l.jsxs("div",{className:"bg-gray-600 mt-10 p-10 text-white relative rounded-lg",children:[l.jsxs("span",{onClick:a,className:"absolute top-2 right-2 cursor-pointer",children:[l.jsx(G3,{className:"hover:scale-110 text-4xl"}),r!==0&&l.jsx("span",{className:"absolute top-0 -left-4 text-xl",children:r})]}),l.jsx("pre",{children:e==null?void 0:e.code})]})]})}function Y3(){return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`<button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Button text
      </button>`}),l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})}/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gl.apply(this,arguments)}var Kt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kt||(Kt={}));const Iu="popstate";function Q3(e){e===void 0&&(e={});function t(r,s){let{pathname:i,search:a,hash:o}=r.location;return Qa("",{pathname:i,search:a,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Kd(s)}return X3(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function K3(){return Math.random().toString(36).substr(2,8)}function Ru(e,t){return{usr:e.state,key:e.key,idx:t}}function Qa(e,t,n,r){return n===void 0&&(n=null),gl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mr(t):t,{state:n,key:t&&t.key||r||K3()})}function Kd(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Mr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function X3(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,o=Kt.Pop,c=null,u=x();u==null&&(u=0,a.replaceState(gl({},a.state,{idx:u}),""));function x(){return(a.state||{idx:null}).idx}function h(){o=Kt.Pop;let _=x(),m=_==null?null:_-u;u=_,c&&c({action:o,location:w.location,delta:m})}function p(_,m){o=Kt.Push;let f=Qa(w.location,_,m);n&&n(f,_),u=x()+1;let g=Ru(f,u),y=w.createHref(f);try{a.pushState(g,"",y)}catch{s.location.assign(y)}i&&c&&c({action:o,location:w.location,delta:1})}function b(_,m){o=Kt.Replace;let f=Qa(w.location,_,m);n&&n(f,_),u=x();let g=Ru(f,u),y=w.createHref(f);a.replaceState(g,"",y),i&&c&&c({action:o,location:w.location,delta:0})}function N(_){let m=s.location.origin!=="null"?s.location.origin:s.location.href,f=typeof _=="string"?_:Kd(_);return ge(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return o},get location(){return e(s,a)},listen(_){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Iu,h),c=_,()=>{s.removeEventListener(Iu,h),c=null}},createHref(_){return t(s,_)},createURL:N,encodeLocation(_){let m=N(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:b,go(_){return a.go(_)}};return w}var Vu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vu||(Vu={}));function J3(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Mr(t):t,s=e1(r.pathname||"/",n);if(s==null)return null;let i=Xd(e);ep(i);let a=null;for(let o=0;a==null&&o<i.length;++o)a=cp(i[o],mp(s));return a}function Xd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,a,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Sn([r,c.relativePath]),x=n.concat(c);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xd(i.children,t,x,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:ap(u,i.index),routesMeta:x})};return e.forEach((i,a)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))s(i,a);else for(let c of Jd(i.path))s(i,a,c)}),t}function Jd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=Jd(r.join("/")),o=[];return o.push(...a.map(c=>c===""?i:[i,c].join("/"))),s&&o.push(...a),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function ep(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:op(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tp=/^:\w+$/,np=3,rp=2,lp=1,sp=10,ip=-2,Bu=e=>e==="*";function ap(e,t){let n=e.split("/"),r=n.length;return n.some(Bu)&&(r+=ip),t&&(r+=rp),n.filter(s=>!Bu(s)).reduce((s,i)=>s+(tp.test(i)?np:i===""?lp:sp),r)}function op(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function cp(e,t){let{routesMeta:n}=e,r={},s="/",i=[];for(let a=0;a<n.length;++a){let o=n[a],c=a===n.length-1,u=s==="/"?t:t.slice(s.length)||"/",x=up({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},u);if(!x)return null;Object.assign(r,x.params);let h=o.route;i.push({params:r,pathname:Sn([s,x.pathname]),pathnameBase:vp(Sn([s,x.pathnameBase])),route:h}),x.pathnameBase!=="/"&&(s=Sn([s,x.pathnameBase]))}return i}function up(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=dp(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:r.reduce((u,x,h)=>{if(x==="*"){let p=o[h]||"";a=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}return u[x]=fp(o[h]||"",x),u},{}),pathname:i,pathnameBase:a,pattern:e}}function dp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,o)=>(r.push(o),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function mp(e){try{return decodeURI(e)}catch(t){return lc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fp(e,t){try{return decodeURIComponent(e)}catch(n){return lc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function e1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function pp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?Mr(e):e;return{pathname:n?n.startsWith("/")?n:hp(n,t):t,search:yp(r),hash:bp(s)}}function hp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Yi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gp(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=Mr(e):(s=gl({},e),ge(!s.pathname||!s.pathname.includes("?"),Yi("?","pathname","search",s)),ge(!s.pathname||!s.pathname.includes("#"),Yi("#","pathname","hash",s)),ge(!s.search||!s.search.includes("#"),Yi("#","search","hash",s)));let i=e===""||s.pathname==="",a=i?"/":s.pathname,o;if(r||a==null)o=n;else{let h=t.length-1;if(a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),h-=1;s.pathname=p.join("/")}o=h>=0?t[h]:"/"}let c=pp(s,o),u=a&&a!=="/"&&a.endsWith("/"),x=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||x)&&(c.pathname+="/"),c}const Sn=e=>e.join("/").replace(/\/\/+/g,"/"),vp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const t1=["post","put","patch","delete"];new Set(t1);const Np=["get",...t1];new Set(Np);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ls(){return Ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ls.apply(this,arguments)}const sc=j.createContext(null),jp=j.createContext(null),Js=j.createContext(null),ei=j.createContext(null),Er=j.createContext({outlet:null,matches:[],isDataRoute:!1}),n1=j.createContext(null);function ti(){return j.useContext(ei)!=null}function ic(){return ti()||ge(!1),j.useContext(ei).location}function r1(e){j.useContext(Js).static||j.useLayoutEffect(e)}function l1(){let{isDataRoute:e}=j.useContext(Er);return e?Fp():Cp()}function Cp(){ti()||ge(!1);let e=j.useContext(sc),{basename:t,navigator:n}=j.useContext(Js),{matches:r}=j.useContext(Er),{pathname:s}=ic(),i=JSON.stringify(xp(r).map(c=>c.pathnameBase)),a=j.useRef(!1);return r1(()=>{a.current=!0}),j.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){n.go(c);return}let x=gp(c,JSON.parse(i),s,u.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:Sn([t,x.pathname])),(u.replace?n.replace:n.push)(x,u.state,u)},[t,n,i,s,e])}function kp(e,t){return Sp(e,t)}function Sp(e,t,n){ti()||ge(!1);let{navigator:r}=j.useContext(Js),{matches:s}=j.useContext(Er),i=s[s.length-1],a=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let c=ic(),u;if(t){var x;let w=typeof t=="string"?Mr(t):t;o==="/"||(x=w.pathname)!=null&&x.startsWith(o)||ge(!1),u=w}else u=c;let h=u.pathname||"/",p=o==="/"?h:h.slice(o.length)||"/",b=J3(e,{pathname:p}),N=Ap(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Sn([o,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?o:Sn([o,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n);return t&&N?j.createElement(ei.Provider,{value:{location:Ls({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Kt.Pop}},N):N}function Mp(){let e=zp(),t=wp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:s},n):null,i)}const Ep=j.createElement(Mp,null);class _p extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?j.createElement(Er.Provider,{value:this.props.routeContext},j.createElement(n1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tp(e){let{routeContext:t,match:n,children:r}=e,s=j.useContext(sc);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Er.Provider,{value:t},r)}function Ap(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let o=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));o>=0||ge(!1),i=i.slice(0,Math.min(i.length,o+1))}return i.reduceRight((o,c,u)=>{let x=c.route.id?a==null?void 0:a[c.route.id]:null,h=null;n&&(h=c.route.errorElement||Ep);let p=t.concat(i.slice(0,u+1)),b=()=>{let N;return x?N=h:c.route.Component?N=j.createElement(c.route.Component,null):c.route.element?N=c.route.element:N=o,j.createElement(Tp,{match:c,routeContext:{outlet:o,matches:p,isDataRoute:n!=null},children:N})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?j.createElement(_p,{location:n.location,revalidation:n.revalidation,component:h,error:x,children:b(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):b()},null)}var Ka;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Ka||(Ka={}));var vl;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(vl||(vl={}));function Lp(e){let t=j.useContext(sc);return t||ge(!1),t}function $p(e){let t=j.useContext(jp);return t||ge(!1),t}function Pp(e){let t=j.useContext(Er);return t||ge(!1),t}function s1(e){let t=Pp(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function zp(){var e;let t=j.useContext(n1),n=$p(vl.UseRouteError),r=s1(vl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Fp(){let{router:e}=Lp(Ka.UseNavigateStable),t=s1(vl.UseNavigateStable),n=j.useRef(!1);return r1(()=>{n.current=!0}),j.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Ls({fromRouteId:t},i)))},[e,t])}function Y(e){ge(!1)}function Dp(e){let{basename:t="/",children:n=null,location:r,navigationType:s=Kt.Pop,navigator:i,static:a=!1}=e;ti()&&ge(!1);let o=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:o,navigator:i,static:a}),[o,i,a]);typeof r=="string"&&(r=Mr(r));let{pathname:u="/",search:x="",hash:h="",state:p=null,key:b="default"}=r,N=j.useMemo(()=>{let w=e1(u,o);return w==null?null:{location:{pathname:w,search:x,hash:h,state:p,key:b},navigationType:s}},[o,u,x,h,p,b,s]);return N==null?null:j.createElement(Js.Provider,{value:c},j.createElement(ei.Provider,{children:n,value:N}))}function i1(e){let{children:t,location:n}=e;return kp(Xa(t),n)}var Uu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Uu||(Uu={}));new Promise(()=>{});function Xa(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,s)=>{if(!j.isValidElement(r))return;let i=[...t,s];if(r.type===j.Fragment){n.push.apply(n,Xa(r.props.children,i));return}r.type!==Y&&ge(!1),!r.props.index||!r.props.children||ge(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Xa(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Op(e){let{basename:t,children:n,window:r}=e,s=j.useRef();s.current==null&&(s.current=Q3({window:r,v5Compat:!0}));let i=s.current,[a,o]=j.useState({action:i.action,location:i.location});return j.useLayoutEffect(()=>i.listen(o),[i]),j.createElement(Dp,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i})}var Hu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Hu||(Hu={}));var Zu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Zu||(Zu={}));function Ip(){return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:` <div className="space-x-6">
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
        </div>`}),l.jsxs("div",{className:"space-x-6",children:[l.jsx("img",{className:"inline-block h-6 w-6 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),l.jsx("img",{className:"inline-block h-8 w-8 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),l.jsx("img",{className:"inline-block h-10 w-10 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),l.jsx("img",{className:"inline-block h-12 w-12 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),l.jsx("img",{className:"inline-block h-14 w-14 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"})]})]})}function Wu(){return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:` <div className="w-[300px] rounded-md border">
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
    </div>`}),l.jsxs("div",{className:"w-[300px] rounded-md border",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",alt:"Laptop",className:"h-[200px] w-full rounded-t-md object-cover"}),l.jsxs("div",{className:"p-4",children:[l.jsxs("h1",{className:"inline-flex items-center text-lg font-semibold",children:["About Macbook ",l.jsx(z3,{className:"ml-2 h-4 w-4"})]}),l.jsx("p",{className:"mt-3 text-sm text-gray-600",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"}),l.jsxs("div",{className:"mt-4",children:[l.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Macbook"}),l.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Apple"}),l.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Laptop"})]}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Read"})]})]})]})}function Rp(){return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`<section>
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
      </section>`}),l.jsx("section",{children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[l.jsxs("div",{className:"relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24",children:[l.jsx("div",{className:"absolute inset-0",children:l.jsx("img",{className:"h-full w-full rounded-md object-cover object-top",src:"https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:""})}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),l.jsx("div",{className:"relative",children:l.jsxs("div",{className:"w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24",children:[l.jsx("h3",{className:"text-4xl font-bold text-white",children:"Now you dont have to rely on your designer to create a new page"}),l.jsxs("ul",{className:"mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2",children:[l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Commercial License "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Unlimited Exports "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" 120+ Coded Blocks "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Design Files Included "})]})]})]})})]}),l.jsx("div",{className:"flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",children:l.jsxs("div",{className:"xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",children:[l.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl",children:"Sign up"}),l.jsxs("p",{className:"mt-2 text-base text-gray-600",children:["Already have an account?"," ",l.jsx("a",{href:"#",title:"",className:"font-medium text-black transition-all duration-200 hover:underline",children:"Sign In"})]}),l.jsx("form",{action:"#",method:"POST",className:"mt-8",children:l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{children:[l.jsxs("label",{htmlFor:"name",className:"text-base font-medium text-gray-900",children:[" ","Full Name"," "]}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Full Name",id:"name"})})]}),l.jsxs("div",{children:[l.jsxs("label",{htmlFor:"email",className:"text-base font-medium text-gray-900",children:[" ","Email address"," "]}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email",id:"email"})})]}),l.jsxs("div",{children:[l.jsx("div",{className:"flex items-center justify-between",children:l.jsxs("label",{htmlFor:"password",className:"text-base font-medium text-gray-900",children:[" ","Password"," "]})}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"password",placeholder:"Password",id:"password"})})]}),l.jsx("div",{children:l.jsxs("button",{type:"button",className:"inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",children:["Create Account ",l.jsx(Xr,{className:"ml-2",size:16})]})})]})}),l.jsxs("div",{className:"mt-3 space-y-3",children:[l.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[l.jsx("span",{className:"mr-2 inline-block",children:l.jsx("svg",{className:"h-6 w-6 text-rose-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"})})}),"Sign up with Google"]}),l.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[l.jsx("span",{className:"mr-2 inline-block",children:l.jsx("svg",{className:"h-6 w-6 text-[#2563EB]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"})})}),"Sign up with Facebook"]})]})]})})]})})]})}function Vp(){return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`<section>
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
      </section>`}),l.jsx("section",{children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[l.jsxs("div",{className:"relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24",children:[l.jsx("div",{className:"absolute inset-0",children:l.jsx("img",{className:"h-full w-full rounded-md object-cover object-top",src:"https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",alt:""})}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),l.jsx("div",{className:"relative",children:l.jsxs("div",{className:"w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24",children:[l.jsx("h3",{className:"text-4xl font-bold text-white",children:"Now you dont have to rely on your designer to create a new page"}),l.jsxs("ul",{className:"mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2",children:[l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Commercial License "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Unlimited Exports "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" 120+ Coded Blocks "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Design Files Included "})]})]})]})})]}),l.jsx("div",{className:"flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",children:l.jsxs("div",{className:"xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",children:[l.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl",children:"Sign in"}),l.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["Don't have an account?"," ",l.jsx("a",{href:"#",title:"",className:"font-semibold text-black transition-all duration-200 hover:underline",children:"Create a free account"})]}),l.jsx("form",{action:"#",method:"POST",className:"mt-8",children:l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{children:[l.jsxs("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Email address"," "]}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"})})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Password"," "]}),l.jsxs("a",{href:"#",title:"",className:"text-sm font-semibold text-black hover:underline",children:[" ","Forgot password?"," "]})]}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"password",placeholder:"Password"})})]}),l.jsx("div",{children:l.jsxs("button",{type:"button",className:"inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",children:["Get started ",l.jsx(Xr,{className:"ml-2",size:16})]})})]})}),l.jsxs("div",{className:"mt-3 space-y-3",children:[l.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[l.jsx("span",{className:"mr-2 inline-block",children:l.jsx("svg",{className:"h-6 w-6 text-rose-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"})})}),"Sign in with Google"]}),l.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[l.jsx("span",{className:"mr-2 inline-block",children:l.jsx("svg",{className:"h-6 w-6 text-[#2563EB]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"})})}),"Sign in with Facebook"]})]})]})})]})})]})}const Gu=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],Bp=[{category:"Design",title:"10 Tips for Crafting the Perfect UX Portfolio",description:"Learn how to showcase your design skills and stand out in a crowded job market.",author:"Emily Lee",date:"3 April 2023",avatar:"https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg",poster:"https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"},{category:"Technology",title:"The Future of Mobile App Development",description:"Discover the latest trends and techniques that will shape the future of mobile app development.",author:"John Smith",date:"1 April 2023",avatar:"https://randomuser.me/api/portraits/men/32.jpg",poster:"https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"},{category:"Business",title:"How to Launch a Successful Startup",description:"Learn the essential steps to launch a successful startup and make your dreams a reality.",author:"Sarah Brown",date:"28 March 2023",avatar:"https://randomuser.me/api/portraits/women/44.jpg",poster:"https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Health",title:"The Benefits of Mindfulness Meditation",description:"Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.",author:"David Kim",date:"25 March 2023",avatar:"https://randomuser.me/api/portraits/men/46.jpg",poster:"https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Education",title:"Why Learning a Second Language is Important",description:"Explore the benefits of learning a second language and how it can improve your cognitive abilities.",author:"Maria Rodriguez",date:"22 March 2023",avatar:"https://randomuser.me/api/portraits/men/97.jpg",poster:"https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Travel",title:"The Best Places to Visit in Europe",description:"Discover the top destinations in Europe and plan your dream vacation.",author:"Alex Johnson",date:"19 March 2023",avatar:"https://randomuser.me/api/portraits/men/99.jpg",poster:"https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Food",title:"How to Make the Perfect Cup of Coffee",description:"Learn the secrets to making the perfect cup of coffee and impress your friends and family.",author:"Thomas Lee",date:"16 March 2023",avatar:"https://randomuser.me/api/portraits/women/63.jpg",poster:"https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80"},{category:"Fashion",title:"The Latest Fashion Trends for Spring 2023",description:"Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.",author:"Jessica Kim",date:"13 March 2023",avatar:"https://randomuser.me/api/portraits/women/47.jpg",poster:"https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Sports",title:"The Benefits of Yoga for Athletes",description:"Learn how practicing yoga can improve your athletic performance and prevent injuries.",author:"Michael Johnson",date:"10 March 2023",avatar:"https://randomuser.me/api/portraits/men/86.jpg",poster:"https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"}];function Up(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`//Source - Dev UI
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
}`}),l.jsxs("div",{children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:Gu.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:Gu.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsxs("div",{className:"mx-auto max-w-7xl px-2",children:[l.jsxs("div",{className:"flex flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[l.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Resources and insights"}),l.jsx("p",{className:"max-w-4xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"}),l.jsxs("div",{className:"mt-6 flex w-full items-center space-x-2 md:w-1/3",children:[l.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Search Topics"}),l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Search"})]})]}),l.jsx("div",{className:"mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row",children:l.jsx("div",{className:"flex w-full items-end border-b border-gray-300",children:["Design","Product","Software Engineering","Customer Success"].map((r,s)=>l.jsx("div",{className:"cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black",children:r},r))})}),l.jsx("div",{className:"grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3",children:Bp.map(r=>l.jsxs("div",{className:"border",children:[l.jsx("img",{src:r.poster,className:"aspect-video w-full rounded-md",alt:""}),l.jsxs("div",{className:"min-h-min p-3",children:[l.jsxs("p",{className:"mt-4 w-full text-xs font-semibold leading-tight text-gray-700",children:["#",r.category]}),l.jsx("p",{className:"mt-4 flex-1 text-base font-semibold text-gray-900",children:r.title}),l.jsx("p",{className:"mt-4 w-full text-sm leading-normal text-gray-600",children:r.description}),l.jsxs("div",{className:"mt-4 flex space-x-3 ",children:[l.jsx("img",{className:"h-full w-10 rounded-lg",src:r.avatar,alt:r.author}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-semibold leading-tight text-gray-900",children:r.author}),l.jsx("p",{className:"text-sm leading-tight text-gray-600",children:r.date})]})]})]})]},r.title))}),l.jsx("div",{className:"w-full border-t border-gray-300",children:l.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[l.jsx("div",{className:"hidden md:block",children:l.jsxs("p",{children:["showing ",l.jsx("strong",{children:"1"})," to ",l.jsx("strong",{children:"10"})," of ",l.jsx("strong",{children:"20"})," results"]})}),l.jsxs("div",{className:"space-x-2",children:[l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"← Previous"}),l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Next →"})]})]})})]}),l.jsx("div",{className:"mx-auto mt-12 max-w-7xl bg-gray-50",children:l.jsxs("footer",{className:"px-4 py-10",children:[l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[l.jsx("span",{children:l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:l.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),l.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"About us"}),l.jsx("li",{children:"Company History"}),l.jsx("li",{children:"Our Team"}),l.jsx("li",{children:"Our Vision"}),l.jsx("li",{children:"Press Release"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Washington"}),l.jsx("li",{children:"New Hampshire"}),l.jsx("li",{children:"Maine"}),l.jsx("li",{children:"Texas"}),l.jsx("li",{children:"Indiana"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"UI / UX Design"}),l.jsx("li",{children:"App Development"}),l.jsx("li",{children:"API reference"}),l.jsx("li",{children:"API status"}),l.jsx("li",{children:"Documentation"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Privacy Policy"}),l.jsx("li",{children:"Terms of Service"}),l.jsx("li",{children:"Cookie Policy"}),l.jsx("li",{children:"Disclaimer"}),l.jsx("li",{children:"Media Policy"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Facebook"}),l.jsx("li",{children:"Twitter"}),l.jsx("li",{children:"Instagram"}),l.jsx("li",{children:"Linkedin"}),l.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}var qu=Array.isArray,Yu=Object.keys,Hp=Object.prototype.hasOwnProperty,Zp=typeof Element<"u";function Ja(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=qu(e),r=qu(t),s,i,a;if(n&&r){if(i=e.length,i!=t.length)return!1;for(s=i;s--!==0;)if(!Ja(e[s],t[s]))return!1;return!0}if(n!=r)return!1;var o=e instanceof Date,c=t instanceof Date;if(o!=c)return!1;if(o&&c)return e.getTime()==t.getTime();var u=e instanceof RegExp,x=t instanceof RegExp;if(u!=x)return!1;if(u&&x)return e.toString()==t.toString();var h=Yu(e);if(i=h.length,i!==Yu(t).length)return!1;for(s=i;s--!==0;)if(!Hp.call(t,h[s]))return!1;if(Zp&&e instanceof Element&&t instanceof Element)return e===t;for(s=i;s--!==0;)if(a=h[s],!(a==="_owner"&&e.$$typeof)&&!Ja(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var Wp=function(t,n){try{return Ja(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const vn=Fs(Wp);var Gp=function(t){return qp(t)&&!Yp(t)};function qp(e){return!!e&&typeof e=="object"}function Yp(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Xp(e)}var Qp=typeof Symbol=="function"&&Symbol.for,Kp=Qp?Symbol.for("react.element"):60103;function Xp(e){return e.$$typeof===Kp}function Jp(e){return Array.isArray(e)?[]:{}}function $s(e,t){return t.clone!==!1&&t.isMergeableObject(e)?yl(Jp(e),e,t):e}function eh(e,t,n){return e.concat(t).map(function(r){return $s(r,n)})}function th(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(s){r[s]=$s(e[s],n)}),Object.keys(t).forEach(function(s){!n.isMergeableObject(t[s])||!e[s]?r[s]=$s(t[s],n):r[s]=yl(e[s],t[s],n)}),r}function yl(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||eh,n.isMergeableObject=n.isMergeableObject||Gp;var r=Array.isArray(t),s=Array.isArray(e),i=r===s;return i?r?n.arrayMerge(e,t,n):th(e,t,n):$s(t,n)}yl.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,s){return yl(r,s,n)},{})};var eo=yl,nh=typeof global=="object"&&global&&global.Object===Object&&global;const a1=nh;var rh=typeof self=="object"&&self&&self.Object===Object&&self,lh=a1||rh||Function("return this")();const Et=lh;var sh=Et.Symbol;const un=sh;var o1=Object.prototype,ih=o1.hasOwnProperty,ah=o1.toString,Or=un?un.toStringTag:void 0;function oh(e){var t=ih.call(e,Or),n=e[Or];try{e[Or]=void 0;var r=!0}catch{}var s=ah.call(e);return r&&(t?e[Or]=n:delete e[Or]),s}var ch=Object.prototype,uh=ch.toString;function dh(e){return uh.call(e)}var mh="[object Null]",fh="[object Undefined]",Qu=un?un.toStringTag:void 0;function Dn(e){return e==null?e===void 0?fh:mh:Qu&&Qu in Object(e)?oh(e):dh(e)}function c1(e,t){return function(n){return e(t(n))}}var ph=c1(Object.getPrototypeOf,Object);const ac=ph;function On(e){return e!=null&&typeof e=="object"}var hh="[object Object]",xh=Function.prototype,gh=Object.prototype,u1=xh.toString,vh=gh.hasOwnProperty,yh=u1.call(Object);function Ku(e){if(!On(e)||Dn(e)!=hh)return!1;var t=ac(e);if(t===null)return!0;var n=vh.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&u1.call(n)==yh}function bh(){this.__data__=[],this.size=0}function d1(e,t){return e===t||e!==e&&t!==t}function ni(e,t){for(var n=e.length;n--;)if(d1(e[n][0],t))return n;return-1}var wh=Array.prototype,Nh=wh.splice;function jh(e){var t=this.__data__,n=ni(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Nh.call(t,n,1),--this.size,!0}function Ch(e){var t=this.__data__,n=ni(t,e);return n<0?void 0:t[n][1]}function kh(e){return ni(this.__data__,e)>-1}function Sh(e,t){var n=this.__data__,r=ni(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Bt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Bt.prototype.clear=bh;Bt.prototype.delete=jh;Bt.prototype.get=Ch;Bt.prototype.has=kh;Bt.prototype.set=Sh;function Mh(){this.__data__=new Bt,this.size=0}function Eh(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function _h(e){return this.__data__.get(e)}function Th(e){return this.__data__.has(e)}function Ml(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ah="[object AsyncFunction]",Lh="[object Function]",$h="[object GeneratorFunction]",Ph="[object Proxy]";function m1(e){if(!Ml(e))return!1;var t=Dn(e);return t==Lh||t==$h||t==Ah||t==Ph}var zh=Et["__core-js_shared__"];const Qi=zh;var Xu=function(){var e=/[^.]+$/.exec(Qi&&Qi.keys&&Qi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Fh(e){return!!Xu&&Xu in e}var Dh=Function.prototype,Oh=Dh.toString;function In(e){if(e!=null){try{return Oh.call(e)}catch{}try{return e+""}catch{}}return""}var Ih=/[\\^$.*+?()[\]{}|]/g,Rh=/^\[object .+?Constructor\]$/,Vh=Function.prototype,Bh=Object.prototype,Uh=Vh.toString,Hh=Bh.hasOwnProperty,Zh=RegExp("^"+Uh.call(Hh).replace(Ih,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Wh(e){if(!Ml(e)||Fh(e))return!1;var t=m1(e)?Zh:Rh;return t.test(In(e))}function Gh(e,t){return e==null?void 0:e[t]}function Rn(e,t){var n=Gh(e,t);return Wh(n)?n:void 0}var qh=Rn(Et,"Map");const bl=qh;var Yh=Rn(Object,"create");const wl=Yh;function Qh(){this.__data__=wl?wl(null):{},this.size=0}function Kh(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Xh="__lodash_hash_undefined__",Jh=Object.prototype,ex=Jh.hasOwnProperty;function tx(e){var t=this.__data__;if(wl){var n=t[e];return n===Xh?void 0:n}return ex.call(t,e)?t[e]:void 0}var nx=Object.prototype,rx=nx.hasOwnProperty;function lx(e){var t=this.__data__;return wl?t[e]!==void 0:rx.call(t,e)}var sx="__lodash_hash_undefined__";function ix(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=wl&&t===void 0?sx:t,this}function Pn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pn.prototype.clear=Qh;Pn.prototype.delete=Kh;Pn.prototype.get=tx;Pn.prototype.has=lx;Pn.prototype.set=ix;function ax(){this.size=0,this.__data__={hash:new Pn,map:new(bl||Bt),string:new Pn}}function ox(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ri(e,t){var n=e.__data__;return ox(t)?n[typeof t=="string"?"string":"hash"]:n.map}function cx(e){var t=ri(this,e).delete(e);return this.size-=t?1:0,t}function ux(e){return ri(this,e).get(e)}function dx(e){return ri(this,e).has(e)}function mx(e,t){var n=ri(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function pn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pn.prototype.clear=ax;pn.prototype.delete=cx;pn.prototype.get=ux;pn.prototype.has=dx;pn.prototype.set=mx;var fx=200;function px(e,t){var n=this.__data__;if(n instanceof Bt){var r=n.__data__;if(!bl||r.length<fx-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new pn(r)}return n.set(e,t),this.size=n.size,this}function _r(e){var t=this.__data__=new Bt(e);this.size=t.size}_r.prototype.clear=Mh;_r.prototype.delete=Eh;_r.prototype.get=_h;_r.prototype.has=Th;_r.prototype.set=px;function hx(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var xx=function(){try{var e=Rn(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Ju=xx;function f1(e,t,n){t=="__proto__"&&Ju?Ju(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var gx=Object.prototype,vx=gx.hasOwnProperty;function p1(e,t,n){var r=e[t];(!(vx.call(e,t)&&d1(r,n))||n===void 0&&!(t in e))&&f1(e,t,n)}function li(e,t,n,r){var s=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var o=t[i],c=r?r(n[o],e[o],o,n,e):void 0;c===void 0&&(c=e[o]),s?f1(n,o,c):p1(n,o,c)}return n}function yx(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var bx="[object Arguments]";function e0(e){return On(e)&&Dn(e)==bx}var h1=Object.prototype,wx=h1.hasOwnProperty,Nx=h1.propertyIsEnumerable,jx=e0(function(){return arguments}())?e0:function(e){return On(e)&&wx.call(e,"callee")&&!Nx.call(e,"callee")};const Cx=jx;var kx=Array.isArray;const El=kx;function Sx(){return!1}var x1=typeof Qe=="object"&&Qe&&!Qe.nodeType&&Qe,t0=x1&&typeof Ke=="object"&&Ke&&!Ke.nodeType&&Ke,Mx=t0&&t0.exports===x1,n0=Mx?Et.Buffer:void 0,Ex=n0?n0.isBuffer:void 0,_x=Ex||Sx;const g1=_x;var Tx=9007199254740991,Ax=/^(?:0|[1-9]\d*)$/;function Lx(e,t){var n=typeof e;return t=t??Tx,!!t&&(n=="number"||n!="symbol"&&Ax.test(e))&&e>-1&&e%1==0&&e<t}var $x=9007199254740991;function v1(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=$x}var Px="[object Arguments]",zx="[object Array]",Fx="[object Boolean]",Dx="[object Date]",Ox="[object Error]",Ix="[object Function]",Rx="[object Map]",Vx="[object Number]",Bx="[object Object]",Ux="[object RegExp]",Hx="[object Set]",Zx="[object String]",Wx="[object WeakMap]",Gx="[object ArrayBuffer]",qx="[object DataView]",Yx="[object Float32Array]",Qx="[object Float64Array]",Kx="[object Int8Array]",Xx="[object Int16Array]",Jx="[object Int32Array]",e4="[object Uint8Array]",t4="[object Uint8ClampedArray]",n4="[object Uint16Array]",r4="[object Uint32Array]",le={};le[Yx]=le[Qx]=le[Kx]=le[Xx]=le[Jx]=le[e4]=le[t4]=le[n4]=le[r4]=!0;le[Px]=le[zx]=le[Gx]=le[Fx]=le[qx]=le[Dx]=le[Ox]=le[Ix]=le[Rx]=le[Vx]=le[Bx]=le[Ux]=le[Hx]=le[Zx]=le[Wx]=!1;function l4(e){return On(e)&&v1(e.length)&&!!le[Dn(e)]}function oc(e){return function(t){return e(t)}}var y1=typeof Qe=="object"&&Qe&&!Qe.nodeType&&Qe,Jr=y1&&typeof Ke=="object"&&Ke&&!Ke.nodeType&&Ke,s4=Jr&&Jr.exports===y1,Ki=s4&&a1.process,i4=function(){try{var e=Jr&&Jr.require&&Jr.require("util").types;return e||Ki&&Ki.binding&&Ki.binding("util")}catch{}}();const wr=i4;var r0=wr&&wr.isTypedArray,a4=r0?oc(r0):l4;const o4=a4;var c4=Object.prototype,u4=c4.hasOwnProperty;function b1(e,t){var n=El(e),r=!n&&Cx(e),s=!n&&!r&&g1(e),i=!n&&!r&&!s&&o4(e),a=n||r||s||i,o=a?yx(e.length,String):[],c=o.length;for(var u in e)(t||u4.call(e,u))&&!(a&&(u=="length"||s&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Lx(u,c)))&&o.push(u);return o}var d4=Object.prototype;function cc(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||d4;return e===n}var m4=c1(Object.keys,Object);const f4=m4;var p4=Object.prototype,h4=p4.hasOwnProperty;function x4(e){if(!cc(e))return f4(e);var t=[];for(var n in Object(e))h4.call(e,n)&&n!="constructor"&&t.push(n);return t}function w1(e){return e!=null&&v1(e.length)&&!m1(e)}function uc(e){return w1(e)?b1(e):x4(e)}function g4(e,t){return e&&li(t,uc(t),e)}function v4(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var y4=Object.prototype,b4=y4.hasOwnProperty;function w4(e){if(!Ml(e))return v4(e);var t=cc(e),n=[];for(var r in e)r=="constructor"&&(t||!b4.call(e,r))||n.push(r);return n}function dc(e){return w1(e)?b1(e,!0):w4(e)}function N4(e,t){return e&&li(t,dc(t),e)}var N1=typeof Qe=="object"&&Qe&&!Qe.nodeType&&Qe,l0=N1&&typeof Ke=="object"&&Ke&&!Ke.nodeType&&Ke,j4=l0&&l0.exports===N1,s0=j4?Et.Buffer:void 0,i0=s0?s0.allocUnsafe:void 0;function C4(e,t){if(t)return e.slice();var n=e.length,r=i0?i0(n):new e.constructor(n);return e.copy(r),r}function j1(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function k4(e,t){for(var n=-1,r=e==null?0:e.length,s=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[s++]=a)}return i}function C1(){return[]}var S4=Object.prototype,M4=S4.propertyIsEnumerable,a0=Object.getOwnPropertySymbols,E4=a0?function(e){return e==null?[]:(e=Object(e),k4(a0(e),function(t){return M4.call(e,t)}))}:C1;const mc=E4;function _4(e,t){return li(e,mc(e),t)}function k1(e,t){for(var n=-1,r=t.length,s=e.length;++n<r;)e[s+n]=t[n];return e}var T4=Object.getOwnPropertySymbols,A4=T4?function(e){for(var t=[];e;)k1(t,mc(e)),e=ac(e);return t}:C1;const S1=A4;function L4(e,t){return li(e,S1(e),t)}function M1(e,t,n){var r=t(e);return El(e)?r:k1(r,n(e))}function $4(e){return M1(e,uc,mc)}function P4(e){return M1(e,dc,S1)}var z4=Rn(Et,"DataView");const to=z4;var F4=Rn(Et,"Promise");const no=F4;var D4=Rn(Et,"Set");const ro=D4;var O4=Rn(Et,"WeakMap");const lo=O4;var o0="[object Map]",I4="[object Object]",c0="[object Promise]",u0="[object Set]",d0="[object WeakMap]",m0="[object DataView]",R4=In(to),V4=In(bl),B4=In(no),U4=In(ro),H4=In(lo),yn=Dn;(to&&yn(new to(new ArrayBuffer(1)))!=m0||bl&&yn(new bl)!=o0||no&&yn(no.resolve())!=c0||ro&&yn(new ro)!=u0||lo&&yn(new lo)!=d0)&&(yn=function(e){var t=Dn(e),n=t==I4?e.constructor:void 0,r=n?In(n):"";if(r)switch(r){case R4:return m0;case V4:return o0;case B4:return c0;case U4:return u0;case H4:return d0}return t});const fc=yn;var Z4=Object.prototype,W4=Z4.hasOwnProperty;function G4(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&W4.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var q4=Et.Uint8Array;const f0=q4;function pc(e){var t=new e.constructor(e.byteLength);return new f0(t).set(new f0(e)),t}function Y4(e,t){var n=t?pc(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Q4=/\w*$/;function K4(e){var t=new e.constructor(e.source,Q4.exec(e));return t.lastIndex=e.lastIndex,t}var p0=un?un.prototype:void 0,h0=p0?p0.valueOf:void 0;function X4(e){return h0?Object(h0.call(e)):{}}function J4(e,t){var n=t?pc(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var e6="[object Boolean]",t6="[object Date]",n6="[object Map]",r6="[object Number]",l6="[object RegExp]",s6="[object Set]",i6="[object String]",a6="[object Symbol]",o6="[object ArrayBuffer]",c6="[object DataView]",u6="[object Float32Array]",d6="[object Float64Array]",m6="[object Int8Array]",f6="[object Int16Array]",p6="[object Int32Array]",h6="[object Uint8Array]",x6="[object Uint8ClampedArray]",g6="[object Uint16Array]",v6="[object Uint32Array]";function y6(e,t,n){var r=e.constructor;switch(t){case o6:return pc(e);case e6:case t6:return new r(+e);case c6:return Y4(e,n);case u6:case d6:case m6:case f6:case p6:case h6:case x6:case g6:case v6:return J4(e,n);case n6:return new r;case r6:case i6:return new r(e);case l6:return K4(e);case s6:return new r;case a6:return X4(e)}}var x0=Object.create,b6=function(){function e(){}return function(t){if(!Ml(t))return{};if(x0)return x0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const w6=b6;function N6(e){return typeof e.constructor=="function"&&!cc(e)?w6(ac(e)):{}}var j6="[object Map]";function C6(e){return On(e)&&fc(e)==j6}var g0=wr&&wr.isMap,k6=g0?oc(g0):C6;const S6=k6;var M6="[object Set]";function E6(e){return On(e)&&fc(e)==M6}var v0=wr&&wr.isSet,_6=v0?oc(v0):E6;const T6=_6;var A6=1,L6=2,$6=4,E1="[object Arguments]",P6="[object Array]",z6="[object Boolean]",F6="[object Date]",D6="[object Error]",_1="[object Function]",O6="[object GeneratorFunction]",I6="[object Map]",R6="[object Number]",T1="[object Object]",V6="[object RegExp]",B6="[object Set]",U6="[object String]",H6="[object Symbol]",Z6="[object WeakMap]",W6="[object ArrayBuffer]",G6="[object DataView]",q6="[object Float32Array]",Y6="[object Float64Array]",Q6="[object Int8Array]",K6="[object Int16Array]",X6="[object Int32Array]",J6="[object Uint8Array]",e5="[object Uint8ClampedArray]",t5="[object Uint16Array]",n5="[object Uint32Array]",te={};te[E1]=te[P6]=te[W6]=te[G6]=te[z6]=te[F6]=te[q6]=te[Y6]=te[Q6]=te[K6]=te[X6]=te[I6]=te[R6]=te[T1]=te[V6]=te[B6]=te[U6]=te[H6]=te[J6]=te[e5]=te[t5]=te[n5]=!0;te[D6]=te[_1]=te[Z6]=!1;function is(e,t,n,r,s,i){var a,o=t&A6,c=t&L6,u=t&$6;if(n&&(a=s?n(e,r,s,i):n(e)),a!==void 0)return a;if(!Ml(e))return e;var x=El(e);if(x){if(a=G4(e),!o)return j1(e,a)}else{var h=fc(e),p=h==_1||h==O6;if(g1(e))return C4(e,o);if(h==T1||h==E1||p&&!s){if(a=c||p?{}:N6(e),!o)return c?L4(e,N4(a,e)):_4(e,g4(a,e))}else{if(!te[h])return s?e:{};a=y6(e,h,o)}}i||(i=new _r);var b=i.get(e);if(b)return b;i.set(e,a),T6(e)?e.forEach(function(_){a.add(is(_,t,n,_,e,i))}):S6(e)&&e.forEach(function(_,m){a.set(m,is(_,t,n,m,e,i))});var N=u?c?P4:$4:c?dc:uc,w=x?void 0:N(e);return hx(w||e,function(_,m){w&&(m=_,_=e[m]),p1(a,m,is(_,t,n,m,e,i))}),a}var r5=4;function y0(e){return is(e,r5)}function A1(e,t){for(var n=-1,r=e==null?0:e.length,s=Array(r);++n<r;)s[n]=t(e[n],n,e);return s}var l5="[object Symbol]";function hc(e){return typeof e=="symbol"||On(e)&&Dn(e)==l5}var s5="Expected a function";function xc(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(s5);var n=function(){var r=arguments,s=t?t.apply(this,r):r[0],i=n.cache;if(i.has(s))return i.get(s);var a=e.apply(this,r);return n.cache=i.set(s,a)||i,a};return n.cache=new(xc.Cache||pn),n}xc.Cache=pn;var i5=500;function a5(e){var t=xc(e,function(r){return n.size===i5&&n.clear(),r}),n=t.cache;return t}var o5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c5=/\\(\\)?/g,u5=a5(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(o5,function(n,r,s,i){t.push(s?i.replace(c5,"$1"):r||n)}),t});const d5=u5;var m5=1/0;function f5(e){if(typeof e=="string"||hc(e))return e;var t=e+"";return t=="0"&&1/e==-m5?"-0":t}var p5=1/0,b0=un?un.prototype:void 0,w0=b0?b0.toString:void 0;function L1(e){if(typeof e=="string")return e;if(El(e))return A1(e,L1)+"";if(hc(e))return w0?w0.call(e):"";var t=e+"";return t=="0"&&1/e==-p5?"-0":t}function h5(e){return e==null?"":L1(e)}function $1(e){return El(e)?A1(e,f5):hc(e)?[e]:j1(d5(h5(e)))}var x5=!0;function g5(e,t){if(!x5){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}var P1={exports:{}},J={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne=typeof Symbol=="function"&&Symbol.for,gc=Ne?Symbol.for("react.element"):60103,vc=Ne?Symbol.for("react.portal"):60106,si=Ne?Symbol.for("react.fragment"):60107,ii=Ne?Symbol.for("react.strict_mode"):60108,ai=Ne?Symbol.for("react.profiler"):60114,oi=Ne?Symbol.for("react.provider"):60109,ci=Ne?Symbol.for("react.context"):60110,yc=Ne?Symbol.for("react.async_mode"):60111,ui=Ne?Symbol.for("react.concurrent_mode"):60111,di=Ne?Symbol.for("react.forward_ref"):60112,mi=Ne?Symbol.for("react.suspense"):60113,v5=Ne?Symbol.for("react.suspense_list"):60120,fi=Ne?Symbol.for("react.memo"):60115,pi=Ne?Symbol.for("react.lazy"):60116,y5=Ne?Symbol.for("react.block"):60121,b5=Ne?Symbol.for("react.fundamental"):60117,w5=Ne?Symbol.for("react.responder"):60118,N5=Ne?Symbol.for("react.scope"):60119;function nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gc:switch(e=e.type,e){case yc:case ui:case si:case ai:case ii:case mi:return e;default:switch(e=e&&e.$$typeof,e){case ci:case di:case pi:case fi:case oi:return e;default:return t}}case vc:return t}}}function z1(e){return nt(e)===ui}J.AsyncMode=yc;J.ConcurrentMode=ui;J.ContextConsumer=ci;J.ContextProvider=oi;J.Element=gc;J.ForwardRef=di;J.Fragment=si;J.Lazy=pi;J.Memo=fi;J.Portal=vc;J.Profiler=ai;J.StrictMode=ii;J.Suspense=mi;J.isAsyncMode=function(e){return z1(e)||nt(e)===yc};J.isConcurrentMode=z1;J.isContextConsumer=function(e){return nt(e)===ci};J.isContextProvider=function(e){return nt(e)===oi};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gc};J.isForwardRef=function(e){return nt(e)===di};J.isFragment=function(e){return nt(e)===si};J.isLazy=function(e){return nt(e)===pi};J.isMemo=function(e){return nt(e)===fi};J.isPortal=function(e){return nt(e)===vc};J.isProfiler=function(e){return nt(e)===ai};J.isStrictMode=function(e){return nt(e)===ii};J.isSuspense=function(e){return nt(e)===mi};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===si||e===ui||e===ai||e===ii||e===mi||e===v5||typeof e=="object"&&e!==null&&(e.$$typeof===pi||e.$$typeof===fi||e.$$typeof===oi||e.$$typeof===ci||e.$$typeof===di||e.$$typeof===b5||e.$$typeof===w5||e.$$typeof===N5||e.$$typeof===y5)};J.typeOf=nt;P1.exports=J;var j5=P1.exports,F1=j5,C5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},k5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},D1={};D1[F1.ForwardRef]=C5;D1[F1.Memo]=k5;function ke(){return ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ke.apply(this,arguments)}function O1(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}var mt=function(t){return typeof t=="function"},hi=function(t){return t!==null&&typeof t=="object"},S5=function(t){return String(Math.floor(Number(t)))===t},Xi=function(t){return Object.prototype.toString.call(t)==="[object String]"},Ji=function(t){return hi(t)&&mt(t.then)};function lt(e,t,n,r){r===void 0&&(r=0);for(var s=$1(t);e&&r<s.length;)e=e[s[r++]];return e===void 0?n:e}function Mn(e,t,n){for(var r=y0(e),s=r,i=0,a=$1(t);i<a.length-1;i++){var o=a[i],c=lt(e,a.slice(0,i+1));if(c&&(hi(c)||Array.isArray(c)))s=s[o]=y0(c);else{var u=a[i+1];s=s[o]=S5(u)&&Number(u)>=0?[]:{}}}return(i===0?e:s)[a[i]]===n?e:(n===void 0?delete s[a[i]]:s[a[i]]=n,i===0&&n===void 0&&delete r[a[i]],r)}function I1(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var s=0,i=Object.keys(e);s<i.length;s++){var a=i[s],o=e[a];hi(o)?n.get(o)||(n.set(o,!0),r[a]=Array.isArray(o)?[]:{},I1(o,t,n,r[a])):r[a]=t}return r}var xi=j.createContext(void 0);xi.displayName="FormikContext";xi.Provider;xi.Consumer;function M5(){var e=j.useContext(xi);return e||g5(!1),e}function E5(e,t){switch(t.type){case"SET_VALUES":return ke({},e,{values:t.payload});case"SET_TOUCHED":return ke({},e,{touched:t.payload});case"SET_ERRORS":return vn(e.errors,t.payload)?e:ke({},e,{errors:t.payload});case"SET_STATUS":return ke({},e,{status:t.payload});case"SET_ISSUBMITTING":return ke({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return ke({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return ke({},e,{values:Mn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return ke({},e,{touched:Mn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return ke({},e,{errors:Mn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return ke({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return ke({},e,{touched:I1(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return ke({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return ke({},e,{isSubmitting:!1});default:return e}}var hn={},Wl={};function R1(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,s=r===void 0?!0:r,i=e.validateOnMount,a=i===void 0?!1:i,o=e.isInitialValid,c=e.enableReinitialize,u=c===void 0?!1:c,x=e.onSubmit,h=O1(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),p=ke({validateOnChange:n,validateOnBlur:s,validateOnMount:a,onSubmit:x},h),b=j.useRef(p.initialValues),N=j.useRef(p.initialErrors||hn),w=j.useRef(p.initialTouched||Wl),_=j.useRef(p.initialStatus),m=j.useRef(!1),f=j.useRef({});j.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var g=j.useReducer(E5,{values:p.initialValues,errors:p.initialErrors||hn,touched:p.initialTouched||Wl,status:p.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),y=g[0],k=g[1],$=j.useCallback(function(v,O){return new Promise(function(I,V){var W=p.validate(v,O);W==null?I(hn):Ji(W)?W.then(function(K){I(K||hn)},function(K){V(K)}):I(W)})},[p.validate]),z=j.useCallback(function(v,O){var I=p.validationSchema,V=mt(I)?I(O):I,W=O&&V.validateAt?V.validateAt(O,v):T5(v,V);return new Promise(function(K,ye){W.then(function(){K(hn)},function(Tt){Tt.name==="ValidationError"?K(_5(Tt)):ye(Tt)})})},[p.validationSchema]),D=j.useCallback(function(v,O){return new Promise(function(I){return I(f.current[v].validate(O))})},[]),U=j.useCallback(function(v){var O=Object.keys(f.current).filter(function(V){return mt(f.current[V].validate)}),I=O.length>0?O.map(function(V){return D(V,lt(v,V))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(I).then(function(V){return V.reduce(function(W,K,ye){return K==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||K&&(W=Mn(W,O[ye],K)),W},{})})},[D]),E=j.useCallback(function(v){return Promise.all([U(v),p.validationSchema?z(v):{},p.validate?$(v):{}]).then(function(O){var I=O[0],V=O[1],W=O[2],K=eo.all([I,V,W],{arrayMerge:A5});return K})},[p.validate,p.validationSchema,U,$,z]),q=rt(function(v){return v===void 0&&(v=y.values),k({type:"SET_ISVALIDATING",payload:!0}),E(v).then(function(O){return m.current&&(k({type:"SET_ISVALIDATING",payload:!1}),k({type:"SET_ERRORS",payload:O})),O})});j.useEffect(function(){a&&m.current===!0&&vn(b.current,p.initialValues)&&q(b.current)},[a,q]);var je=j.useCallback(function(v){var O=v&&v.values?v.values:b.current,I=v&&v.errors?v.errors:N.current?N.current:p.initialErrors||{},V=v&&v.touched?v.touched:w.current?w.current:p.initialTouched||{},W=v&&v.status?v.status:_.current?_.current:p.initialStatus;b.current=O,N.current=I,w.current=V,_.current=W;var K=function(){k({type:"RESET_FORM",payload:{isSubmitting:!!v&&!!v.isSubmitting,errors:I,touched:V,status:W,values:O,isValidating:!!v&&!!v.isValidating,submitCount:v&&v.submitCount&&typeof v.submitCount=="number"?v.submitCount:0}})};if(p.onReset){var ye=p.onReset(y.values,Un);Ji(ye)?ye.then(K):K()}else K()},[p.initialErrors,p.initialStatus,p.initialTouched]);j.useEffect(function(){m.current===!0&&!vn(b.current,p.initialValues)&&(u&&(b.current=p.initialValues,je()),a&&q(b.current))},[u,p.initialValues,je,a,q]),j.useEffect(function(){u&&m.current===!0&&!vn(N.current,p.initialErrors)&&(N.current=p.initialErrors||hn,k({type:"SET_ERRORS",payload:p.initialErrors||hn}))},[u,p.initialErrors]),j.useEffect(function(){u&&m.current===!0&&!vn(w.current,p.initialTouched)&&(w.current=p.initialTouched||Wl,k({type:"SET_TOUCHED",payload:p.initialTouched||Wl}))},[u,p.initialTouched]),j.useEffect(function(){u&&m.current===!0&&!vn(_.current,p.initialStatus)&&(_.current=p.initialStatus,k({type:"SET_STATUS",payload:p.initialStatus}))},[u,p.initialStatus,p.initialTouched]);var R=rt(function(v){if(f.current[v]&&mt(f.current[v].validate)){var O=lt(y.values,v),I=f.current[v].validate(O);return Ji(I)?(k({type:"SET_ISVALIDATING",payload:!0}),I.then(function(V){return V}).then(function(V){k({type:"SET_FIELD_ERROR",payload:{field:v,value:V}}),k({type:"SET_ISVALIDATING",payload:!1})})):(k({type:"SET_FIELD_ERROR",payload:{field:v,value:I}}),Promise.resolve(I))}else if(p.validationSchema)return k({type:"SET_ISVALIDATING",payload:!0}),z(y.values,v).then(function(V){return V}).then(function(V){k({type:"SET_FIELD_ERROR",payload:{field:v,value:V[v]}}),k({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),P=j.useCallback(function(v,O){var I=O.validate;f.current[v]={validate:I}},[]),T=j.useCallback(function(v){delete f.current[v]},[]),B=rt(function(v,O){k({type:"SET_TOUCHED",payload:v});var I=O===void 0?s:O;return I?q(y.values):Promise.resolve()}),L=j.useCallback(function(v){k({type:"SET_ERRORS",payload:v})},[]),C=rt(function(v,O){var I=mt(v)?v(y.values):v;k({type:"SET_VALUES",payload:I});var V=O===void 0?n:O;return V?q(I):Promise.resolve()}),M=j.useCallback(function(v,O){k({type:"SET_FIELD_ERROR",payload:{field:v,value:O}})},[]),A=rt(function(v,O,I){k({type:"SET_FIELD_VALUE",payload:{field:v,value:O}});var V=I===void 0?n:I;return V?q(Mn(y.values,v,O)):Promise.resolve()}),H=j.useCallback(function(v,O){var I=O,V=v,W;if(!Xi(v)){v.persist&&v.persist();var K=v.target?v.target:v.currentTarget,ye=K.type,Tt=K.name,wi=K.id,Ni=K.value,tm=K.checked,wg=K.outerHTML,Ec=K.options,nm=K.multiple;I=O||Tt||wi,V=/number|range/.test(ye)?(W=parseFloat(Ni),isNaN(W)?"":W):/checkbox/.test(ye)?$5(lt(y.values,I),tm,Ni):Ec&&nm?L5(Ec):Ni}I&&A(I,V)},[A,y.values]),Z=rt(function(v){if(Xi(v))return function(O){return H(O,v)};H(v)}),ee=rt(function(v,O,I){O===void 0&&(O=!0),k({type:"SET_FIELD_TOUCHED",payload:{field:v,value:O}});var V=I===void 0?s:I;return V?q(y.values):Promise.resolve()}),pe=j.useCallback(function(v,O){v.persist&&v.persist();var I=v.target,V=I.name,W=I.id,K=I.outerHTML,ye=O||V||W;ee(ye,!0)},[ee]),Ce=rt(function(v){if(Xi(v))return function(O){return pe(O,v)};pe(v)}),_e=j.useCallback(function(v){mt(v)?k({type:"SET_FORMIK_STATE",payload:v}):k({type:"SET_FORMIK_STATE",payload:function(){return v}})},[]),We=j.useCallback(function(v){k({type:"SET_STATUS",payload:v})},[]),_t=j.useCallback(function(v){k({type:"SET_ISSUBMITTING",payload:v})},[]),ve=rt(function(){return k({type:"SUBMIT_ATTEMPT"}),q().then(function(v){var O=v instanceof Error,I=!O&&Object.keys(v).length===0;if(I){var V;try{if(V=Hn(),V===void 0)return}catch(W){throw W}return Promise.resolve(V).then(function(W){return m.current&&k({type:"SUBMIT_SUCCESS"}),W}).catch(function(W){if(m.current)throw k({type:"SUBMIT_FAILURE"}),W})}else if(m.current&&(k({type:"SUBMIT_FAILURE"}),O))throw v})}),bt=rt(function(v){v&&v.preventDefault&&mt(v.preventDefault)&&v.preventDefault(),v&&v.stopPropagation&&mt(v.stopPropagation)&&v.stopPropagation(),ve().catch(function(O){console.warn("Warning: An unhandled error was caught from submitForm()",O)})}),Un={resetForm:je,validateForm:q,validateField:R,setErrors:L,setFieldError:M,setFieldTouched:ee,setFieldValue:A,setStatus:We,setSubmitting:_t,setTouched:B,setValues:C,setFormikState:_e,submitForm:ve},Hn=rt(function(){return x(y.values,Un)}),Y1=rt(function(v){v&&v.preventDefault&&mt(v.preventDefault)&&v.preventDefault(),v&&v.stopPropagation&&mt(v.stopPropagation)&&v.stopPropagation(),je()}),Q1=j.useCallback(function(v){return{value:lt(y.values,v),error:lt(y.errors,v),touched:!!lt(y.touched,v),initialValue:lt(b.current,v),initialTouched:!!lt(w.current,v),initialError:lt(N.current,v)}},[y.errors,y.touched,y.values]),K1=j.useCallback(function(v){return{setValue:function(I,V){return A(v,I,V)},setTouched:function(I,V){return ee(v,I,V)},setError:function(I){return M(v,I)}}},[A,ee,M]),X1=j.useCallback(function(v){var O=hi(v),I=O?v.name:v,V=lt(y.values,I),W={name:I,value:V,onChange:Z,onBlur:Ce};if(O){var K=v.type,ye=v.value,Tt=v.as,wi=v.multiple;K==="checkbox"?ye===void 0?W.checked=!!V:(W.checked=!!(Array.isArray(V)&&~V.indexOf(ye)),W.value=ye):K==="radio"?(W.checked=V===ye,W.value=ye):Tt==="select"&&wi&&(W.value=W.value||[],W.multiple=!0)}return W},[Ce,Z,y.values]),bi=j.useMemo(function(){return!vn(b.current,y.values)},[b.current,y.values]),J1=j.useMemo(function(){return typeof o<"u"?bi?y.errors&&Object.keys(y.errors).length===0:o!==!1&&mt(o)?o(p):o:y.errors&&Object.keys(y.errors).length===0},[o,bi,y.errors,p]),em=ke({},y,{initialValues:b.current,initialErrors:N.current,initialTouched:w.current,initialStatus:_.current,handleBlur:Ce,handleChange:Z,handleReset:Y1,handleSubmit:bt,resetForm:je,setErrors:L,setFormikState:_e,setFieldTouched:ee,setFieldValue:A,setFieldError:M,setStatus:We,setSubmitting:_t,setTouched:B,setValues:C,submitForm:ve,validateForm:q,validateField:R,isValid:J1,dirty:bi,unregisterField:T,registerField:P,getFieldProps:X1,getFieldMeta:Q1,getFieldHelpers:K1,validateOnBlur:s,validateOnChange:n,validateOnMount:a});return em}function _5(e){var t={};if(e.inner){if(e.inner.length===0)return Mn(t,e.path,e.message);for(var s=e.inner,n=Array.isArray(s),r=0,s=n?s:s[Symbol.iterator]();;){var i;if(n){if(r>=s.length)break;i=s[r++]}else{if(r=s.next(),r.done)break;i=r.value}var a=i;lt(t,a.path)||(t=Mn(t,a.path,a.message))}}return t}function T5(e,t,n,r){n===void 0&&(n=!1),r===void 0&&(r={});var s=so(e);return t[n?"validateSync":"validate"](s,{abortEarly:!1,context:r})}function so(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(s){return Array.isArray(s)===!0||Ku(s)?so(s):s!==""?s:void 0}):Ku(e[r])?t[r]=so(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function A5(e,t,n){var r=e.slice();return t.forEach(function(i,a){if(typeof r[a]>"u"){var o=n.clone!==!1,c=o&&n.isMergeableObject(i);r[a]=c?eo(Array.isArray(i)?[]:{},i,n):i}else n.isMergeableObject(i)?r[a]=eo(e[a],i,n):e.indexOf(i)===-1&&r.push(i)}),r}function L5(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function $5(e,t,n){if(typeof e=="boolean")return!!t;var r=[],s=!1,i=-1;if(Array.isArray(e))r=e,i=e.indexOf(n),s=i>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!s?r.concat(n):s?r.slice(0,i).concat(r.slice(i+1)):r}var P5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?j.useLayoutEffect:j.useEffect;function rt(e){var t=j.useRef(e);return P5(function(){t.current=e}),j.useCallback(function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return t.current.apply(void 0,r)},[])}var z5=j.forwardRef(function(e,t){var n=e.action,r=O1(e,["action"]),s=n??"#",i=M5(),a=i.handleReset,o=i.handleSubmit;return j.createElement("form",Object.assign({onSubmit:o,ref:t,onReset:a,action:s},r))});z5.displayName="Form";function Vn(e){this._maxSize=e,this.clear()}Vn.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Vn.prototype.get=function(e){return this._values[e]};Vn.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var F5=/[^.^\]^[]+|(?=\[\]|\.\.)/g,V1=/^\d+$/,D5=/^\d/,O5=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,I5=/^\s*(['"]?)(.*?)(\1)\s*$/,bc=512,N0=new Vn(bc),j0=new Vn(bc),C0=new Vn(bc),En={Cache:Vn,split:io,normalizePath:ea,setter:function(e){var t=ea(e);return j0.get(e)||j0.set(e,function(r,s){for(var i=0,a=t.length,o=r;i<a-1;){var c=t[i];if(c==="__proto__"||c==="constructor"||c==="prototype")return r;o=o[t[i++]]}o[t[i]]=s})},getter:function(e,t){var n=ea(e);return C0.get(e)||C0.set(e,function(s){for(var i=0,a=n.length;i<a;)if(s!=null||!t)s=s[n[i++]];else return;return s})},join:function(e){return e.reduce(function(t,n){return t+(wc(n)||V1.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){R5(Array.isArray(e)?e:io(e),t,n)}};function ea(e){return N0.get(e)||N0.set(e,io(e).map(function(t){return t.replace(I5,"$2")}))}function io(e){return e.match(F5)||[""]}function R5(e,t,n){var r=e.length,s,i,a,o;for(i=0;i<r;i++)s=e[i],s&&(U5(s)&&(s='"'+s+'"'),o=wc(s),a=!o&&/^\d+$/.test(s),t.call(n,s,o,a,i,e))}function wc(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function V5(e){return e.match(D5)&&!e.match(V1)}function B5(e){return O5.test(e)}function U5(e){return!wc(e)&&(V5(e)||B5(e))}const H5=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,gi=e=>e.match(H5)||[],vi=e=>e[0].toUpperCase()+e.slice(1),Nc=(e,t)=>gi(e).join(t).toLowerCase(),B1=e=>gi(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),Z5=e=>vi(B1(e)),W5=e=>Nc(e,"_"),G5=e=>Nc(e,"-"),q5=e=>vi(Nc(e," ")),Y5=e=>gi(e).map(vi).join(" ");var ta={words:gi,upperFirst:vi,camelCase:B1,pascalCase:Z5,snakeCase:W5,kebabCase:G5,sentenceCase:q5,titleCase:Y5},jc={exports:{}};jc.exports=function(e){return U1(Q5(e),e)};jc.exports.array=U1;function U1(e,t){var n=e.length,r=new Array(n),s={},i=n,a=K5(t),o=X5(e);for(t.forEach(function(u){if(!o.has(u[0])||!o.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||c(e[i],i,new Set);return r;function c(u,x,h){if(h.has(u)){var p;try{p=", node was:"+JSON.stringify(u)}catch{p=""}throw new Error("Cyclic dependency"+p)}if(!o.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!s[x]){s[x]=!0;var b=a.get(u)||new Set;if(b=Array.from(b),x=b.length){h.add(u);do{var N=b[--x];c(N,o.get(N),h)}while(x);h.delete(u)}r[--n]=u}}}function Q5(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var s=e[n];t.add(s[0]),t.add(s[1])}return Array.from(t)}function K5(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var s=e[n];t.has(s[0])||t.set(s[0],new Set),t.has(s[1])||t.set(s[1],new Set),t.get(s[0]).add(s[1])}return t}function X5(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var J5=jc.exports;const e9=Fs(J5),t9=Object.prototype.toString,n9=Error.prototype.toString,r9=RegExp.prototype.toString,l9=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",s9=/^Symbol\((.*)\)(.*)$/;function i9(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function k0(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return i9(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return l9.call(e).replace(s9,"Symbol($1)");const r=t9.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+n9.call(e)+"]":r==="RegExp"?r9.call(e):null}function fr(e,t){let n=k0(e,t);return n!==null?n:JSON.stringify(e,function(r,s){let i=k0(this[r],t);return i!==null?i:s},2)}function H1(e){return e==null?[]:[].concat(e)}let a9=/\$\{\s*(\w+)\s*\}/g;class qe extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(a9,(s,i)=>fr(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=s,this.errors=[],this.inner=[],H1(t).forEach(i=>{qe.isError(i)?(this.errors.push(...i.errors),this.inner=this.inner.concat(i.inner.length?i.inner:i)):this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,qe)}}let Lt={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const s=r!=null&&r!==n?` (cast from the value \`${fr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${fr(n,!0)}\``+s:`${e} must match the configured type. The validated value was: \`${fr(n,!0)}\``+s}},ft={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},o9={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},ao={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},c9={isValue:"${path} field must be ${value}"},oo={noUnknown:"${path} field has unspecified keys: ${unknown}"},u9={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:Lt,string:ft,number:o9,date:ao,object:oo,array:u9,boolean:c9});const Cc=e=>e&&e.__isYupSchema__;class Ps{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:s,otherwise:i}=n,a=typeof r=="function"?r:(...o)=>o.every(c=>c===r);return new Ps(t,(o,c)=>{var u;let x=a(...o)?s:i;return(u=x==null?void 0:x(c))!=null?u:c})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),s=this.fn(r,t,n);if(s===void 0||s===t)return t;if(!Cc(s))throw new TypeError("conditions must return a schema object");return s.resolve(n)}}const Gl={context:"$",value:"."};class Bn{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Gl.context,this.isValue=this.key[0]===Gl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Gl.context:this.isValue?Gl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&En.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let s=this.isContext?r:this.isValue?t:n;return this.getter&&(s=this.getter(s||{})),this.map&&(s=this.map(s)),s}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Bn.prototype.__isYupRef=!0;const jn=e=>e==null;function Gn(e){function t({value:n,path:r="",options:s,originalValue:i,schema:a},o,c){const{name:u,test:x,params:h,message:p,skipAbsent:b}=e;let{parent:N,context:w,abortEarly:_=a.spec.abortEarly}=s;function m(E){return Bn.isRef(E)?E.getValue(n,N,w):E}function f(E={}){const q=Object.assign({value:n,originalValue:i,label:a.spec.label,path:E.path||r,spec:a.spec},h,E.params);for(const R of Object.keys(q))q[R]=m(q[R]);const je=new qe(qe.formatError(E.message||p,q),n,q.path,E.type||u);return je.params=q,je}const g=_?o:c;let y={path:r,parent:N,type:u,from:s.from,createError:f,resolve:m,options:s,originalValue:i,schema:a};const k=E=>{qe.isError(E)?g(E):E?c(null):g(f())},$=E=>{qe.isError(E)?g(E):o(E)},z=b&&jn(n);if(!s.sync){try{Promise.resolve(z?!0:x.call(y,n,y)).then(k,$)}catch(E){$(E)}return}let D;try{var U;if(D=z?!0:x.call(y,n,y),typeof((U=D)==null?void 0:U.then)=="function")throw new Error(`Validation test of type: "${y.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(E){$(E);return}k(D)}return t.OPTIONS=e,t}function d9(e,t,n,r=n){let s,i,a;return t?(En.forEach(t,(o,c,u)=>{let x=c?o.slice(1,o.length-1):o;e=e.resolve({context:r,parent:s,value:n});let h=e.type==="tuple",p=u?parseInt(x,10):0;if(e.innerType||h){if(h&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&p>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);s=n,n=n&&n[p],e=h?e.spec.types[p]:e.innerType}if(!u){if(!e.fields||!e.fields[x])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);s=n,n=n&&n[x],e=e.fields[x]}i=x,a=c?"["+o+"]":"."+o}),{schema:e,parent:s,parentPath:i}):{parent:s,parentPath:t,schema:e}}class zs extends Set{describe(){const t=[];for(const n of this.values())t.push(Bn.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new zs(this.values())}merge(t,n){const r=this.clone();return t.forEach(s=>r.add(s)),n.forEach(s=>r.delete(s)),r}}function ir(e,t=new Map){if(Cc(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=ir(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,s]of e.entries())n.set(r,ir(s,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(ir(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,s]of Object.entries(e))n[r]=ir(s,t)}else throw Error(`Unable to clone ${e}`);return n}class Mt{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new zs,this._blacklist=new zs,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Lt.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ir(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const s=Object.assign({},n.spec,r.spec);return r.spec=s,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(a=>{i.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((s,i)=>i.resolve(s,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,s;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(s=t.recursive)!=null?s:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),s=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(s&&jn(i))return i;let a=fr(t),o=fr(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(o!==a?`result of cast: ${o}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((s,i)=>i.call(this,s,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,s){let{path:i,originalValue:a=t,strict:o=this.spec.strict}=n,c=t;o||(c=this._cast(c,Object.assign({assert:!1},n)));let u=[];for(let x of Object.values(this.internalTests))x&&u.push(x);this.runTests({path:i,value:c,originalValue:a,options:n,tests:u},r,x=>{if(x.length)return s(x,c);this.runTests({path:i,value:c,originalValue:a,options:n,tests:this.tests},r,s)})}runTests(t,n,r){let s=!1,{tests:i,value:a,originalValue:o,path:c,options:u}=t,x=w=>{s||(s=!0,n(w,a))},h=w=>{s||(s=!0,r(w,a))},p=i.length,b=[];if(!p)return h([]);let N={value:a,originalValue:o,path:c,options:u,schema:this};for(let w=0;w<i.length;w++){const _=i[w];_(N,x,function(f){f&&(b=b.concat(f)),--p<=0&&h(b)})}}asNestedTest({key:t,index:n,parent:r,parentPath:s,originalParent:i,options:a}){const o=t??n;if(o==null)throw TypeError("Must include `key` or `index` for nested validations");const c=typeof o=="number";let u=r[o];const x=Object.assign({},a,{strict:!0,parent:r,value:u,originalValue:i[o],key:void 0,[c?"index":"key"]:o,path:c||o.includes(".")?`${s||""}[${u?o:`"${o}"`}]`:(s?`${s}.`:"")+t});return(h,p,b)=>this.resolve(x)._validate(u,x,p,b)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((s,i)=>r._validate(t,n,(a,o)=>{qe.isError(a)&&(a.value=o),i(a)},(a,o)=>{a.length?i(new qe(a,o)):s(o)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),s;return r._validate(t,Object.assign({},n,{sync:!0}),(i,a)=>{throw qe.isError(i)&&(i.value=a),i},(i,a)=>{if(i.length)throw new qe(i,t);s=a}),s}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(qe.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(qe.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this):ir(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Gn({message:n,name:"nullable",test(s){return s===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Gn({message:n,name:"optionality",test(s){return s===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Lt.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Lt.notNull){return this.nullability(!1,t)}required(t=Lt.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Lt.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),s=Gn(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(i||a.OPTIONS.test===s.OPTIONS.test))),r.tests.push(s),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),s=H1(t).map(i=>new Bn(i));return s.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new Ps(s,n):Ps.fromOptions(s,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Gn({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Lt.oneOf){let r=this.clone();return t.forEach(s=>{r._whitelist.add(s),r._blacklist.delete(s)}),r.internalTests.whiteList=Gn({message:n,name:"oneOf",skipAbsent:!0,test(s){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(s)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),r}notOneOf(t,n=Lt.notOneOf){let r=this.clone();return t.forEach(s=>{r._blacklist.add(s),r._whitelist.delete(s)}),r.internalTests.blacklist=Gn({message:n,name:"notOneOf",test(s){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(s)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:s,optional:i,nullable:a}=n.spec;return{meta:s,label:r,optional:i,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(c=>({name:c.OPTIONS.name,params:c.OPTIONS.params})).filter((c,u,x)=>x.findIndex(h=>h.name===c.name)===u)}}}Mt.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Mt.prototype[`${e}At`]=function(t,n,r={}){const{parent:s,parentPath:i,schema:a}=d9(this,t,n,r.context);return a[e](s&&s[i],Object.assign({},r,{parent:s,path:t}))};for(const e of["equals","is"])Mt.prototype[e]=Mt.prototype.oneOf;for(const e of["not","nope"])Mt.prototype[e]=Mt.prototype.notOneOf;let m9=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,f9=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,p9=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,h9=e=>jn(e)||e===e.trim(),x9={}.toString();function Wt(){return new Z1}class Z1 extends Mt{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const s=t!=null&&t.toString?t.toString():t;return s===x9?t:s})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Lt.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=ft.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=ft.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=ft.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,s,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:s,name:i}=n:s=n),this.test({name:i||"matches",message:s||ft.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=ft.email){return this.matches(m9,{name:"email",message:t,excludeEmptyString:!0})}url(t=ft.url){return this.matches(f9,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=ft.uuid){return this.matches(p9,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=ft.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:h9})}lowercase(t=ft.lowercase){return this.transform(n=>jn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>jn(n)||n===n.toLowerCase()})}uppercase(t=ft.uppercase){return this.transform(n=>jn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>jn(n)||n===n.toUpperCase()})}}Wt.prototype=Z1.prototype;var g9=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function v9(e){var t=[1,4,5,6,7,10,11],n=0,r,s;if(s=g9.exec(e)){for(var i=0,a;a=t[i];++i)s[a]=+s[a]||0;s[2]=(+s[2]||1)-1,s[3]=+s[3]||1,s[7]=s[7]?String(s[7]).substr(0,3):0,(s[8]===void 0||s[8]==="")&&(s[9]===void 0||s[9]==="")?r=+new Date(s[1],s[2],s[3],s[4],s[5],s[6],s[7]):(s[8]!=="Z"&&s[9]!==void 0&&(n=s[10]*60+s[11],s[9]==="+"&&(n=0-n)),r=Date.UTC(s[1],s[2],s[3],s[4],s[5]+n,s[6],s[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let y9=new Date(""),b9=e=>Object.prototype.toString.call(e)==="[object Date]";class yi extends Mt{constructor(){super({type:"date",check(t){return b9(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=v9(t),isNaN(t)?yi.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Bn.isRef(t))r=t;else{let s=this.cast(t);if(!this._typeCheck(s))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=s}return r}min(t,n=ao.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(s){return s>=this.resolve(r)}})}max(t,n=ao.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(s){return s<=this.resolve(r)}})}}yi.INVALID_DATE=y9;yi.prototype;function w9(e,t=[]){let n=[],r=new Set,s=new Set(t.map(([a,o])=>`${a}-${o}`));function i(a,o){let c=En.split(a)[0];r.add(c),s.has(`${o}-${c}`)||n.push([o,c])}for(const a of Object.keys(e)){let o=e[a];r.add(a),Bn.isRef(o)&&o.isSibling?i(o.path,a):Cc(o)&&"deps"in o&&o.deps.forEach(c=>i(c,a))}return e9.array(Array.from(r),n).reverse()}function S0(e,t){let n=1/0;return e.some((r,s)=>{var i;if((i=t.path)!=null&&i.includes(r))return n=s,!0}),n}function W1(e){return(t,n)=>S0(e,t)-S0(e,n)}const N9=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function as(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=as(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=as(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(as)}):"optional"in e?e.optional():e}const j9=(e,t)=>{const n=[...En.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),s=En.getter(En.join(n),!0)(e);return!!(s&&r in s)};let M0=e=>Object.prototype.toString.call(e)==="[object Object]";function C9(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const k9=W1([]);function kc(e){return new G1(e)}class G1 extends Mt{constructor(t){super({type:"object",check(n){return M0(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=k9,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let s=super._cast(t,n);if(s===void 0)return this.getDefault(n);if(!this._typeCheck(s))return s;let i=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,o=[].concat(this._nodes,Object.keys(s).filter(h=>!this._nodes.includes(h))),c={},u=Object.assign({},n,{parent:c,__validating:n.__validating||!1}),x=!1;for(const h of o){let p=i[h],b=h in s;if(p){let N,w=s[h];u.path=(n.path?`${n.path}.`:"")+h,p=p.resolve({value:w,context:n.context,parent:c});let _=p instanceof Mt?p.spec:void 0,m=_==null?void 0:_.strict;if(_!=null&&_.strip){x=x||h in s;continue}N=!n.__validating||!m?p.cast(s[h],u):s[h],N!==void 0&&(c[h]=N)}else b&&!a&&(c[h]=s[h]);(b!==h in c||c[h]!==s[h])&&(x=!0)}return x?c:s}_validate(t,n={},r,s){let{from:i=[],originalValue:a=t,recursive:o=this.spec.recursive}=n;n.from=[{schema:this,value:a},...i],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(c,u)=>{if(!o||!M0(u)){s(c,u);return}a=a||u;let x=[];for(let h of this._nodes){let p=this.fields[h];!p||Bn.isRef(p)||x.push(p.asNestedTest({options:n,key:h,parent:u,parentPath:n.path,originalParent:a}))}this.runTests({tests:x,value:u,originalValue:a,options:n},r,h=>{s(h.sort(this._sortErrors).concat(c),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[s,i]of Object.entries(this.fields)){const a=r[s];r[s]=a===void 0?i:a}return n.withMutation(s=>s.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var s;const i=this.fields[r];let a=t;(s=a)!=null&&s.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(a):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=w9(t,n),r._sortErrors=W1(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let s=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),s=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),s)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return as(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let s=En.getter(t,!0);return this.transform(i=>{if(!i)return i;let a=i;return j9(i,t)&&(a=Object.assign({},i),r||delete a[t],a[n]=s(i)),a})}json(){return this.transform(N9)}noUnknown(t=!0,n=oo.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(s){if(s==null)return!0;const i=C9(this.schema,s);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=oo.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const s of Object.keys(n))r[t(s)]=n[s];return r})}camelCase(){return this.transformKeys(ta.camelCase)}snakeCase(){return this.transformKeys(ta.snakeCase)}constantCase(){return this.transformKeys(t=>ta.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[s,i]of Object.entries(this.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),n.fields[s]=i.describe(a)}return n}}kc.prototype=G1.prototype;function S9(){let e=kc({mobileNo:Wt().required("Enter khat no.")});const t=R1({initialValues:{mobileNo:""},onSubmit:(s,i)=>{},validationSchema:e}),n=(s,i,a=null)=>s.length>a?i:s===""||/^[0-9\b]+$/.test(s)?s:i,r=s=>{let i=s.target.name,a=s.target.value;i=="mobileNo"&&t.setFieldValue("mobileNo",n(a,t.values.mobileNo,10))};return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`export const returnCapitalize = (currentValue) => {
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

}`}),l.jsx("form",{onSubmit:t.handleSubmit,onChange:r,children:l.jsxs("div",{className:"form-group w-60 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Mobile No.",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("input",{...t.getFieldProps("mobileNo"),type:"text",className:"cypress_mobileNo form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md ",placeholder:"Enter mobile no."}),l.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.mobileNo&&t.errors.mobileNo?t.errors.mobileNo:null})]})}),l.jsx(fe,{code:`// Source - Me
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
            </form>`}),l.jsx("div",{className:"text-xl font-semibold mt-10",children:"# Powerups"})]})}function M9(){return l.jsx("aside",{className:"w-64 bg-gray-200 h-screen",children:l.jsx("nav",{className:"p-10",children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("span",{children:"Home"})}),l.jsx("li",{children:l.jsx("span",{children:"About"})}),l.jsx("li",{children:l.jsx("span",{children:"Details"})}),l.jsx("li",{children:l.jsx("span",{children:"Settings"})})]})})})}function E9(){return l.jsx("header",{className:"bg-gray-200 p-4",children:l.jsx("h1",{className:"text-2xl font-bold text-right",children:"Header"})})}function _9(){return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`import {BrowserRouter, Route, Routes } from 'react-router-dom'
      
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
      </BrowserRouter>`}),l.jsxs("div",{className:"flex",children:[l.jsx(M9,{}),l.jsxs("div",{className:"flex flex-col w-full",children:[l.jsx(E9,{}),l.jsx("main",{className:"p-20",children:l.jsxs(i1,{children:[l.jsx(Y,{exact:!0,path:"/",element:l.jsx("h1",{children:"Dummy direct"})}),l.jsx(Y,{path:"/about",element:l.jsx("h1",{children:"Dummy about"})}),l.jsx(Y,{path:"/contact",element:l.jsx("h1",{children:"Dummy contact"})})]})})]})]})]})}function T9(){return l.jsx("div",{children:"Demo"})}function A9(e){return Ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(e)}function na(e){const t=l1(),n=ic(),r=s=>{if(e==null||e.setshowSidebar(),n.pathname===e.path){window.location.reload();return}t(e.path)};return l.jsx(l.Fragment,{children:e.subMenuStatus?l.jsx("li",{className:"cursor-pointer",style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},children:e.title}):l.jsx("div",{className:"cursor-pointer",onClick:()=>r(e==null?void 0:e.menuId),children:l.jsx("li",{style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},href:e.path,children:e.title})})})}function L9(e){return Ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"}}]}]})(e)}function $9(e){return Ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"}}]}]})(e)}function E0(e){return Ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 5v11h16V5H4zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2V4.007zM1 19h22v2H1v-2z"}}]}]})(e)}function P9(e){const[t,n]=j.useState("h-0"),r=()=>{t=="h-0"?n("h-auto"):n("h-0")};return l.jsx(l.Fragment,{children:l.jsxs("div",{className:"block",children:[e.path!=null&&l.jsxs("li",{className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-indigo-500",style:{width:"250px"},children:[l.jsx("div",{className:"flex-none ",children:l.jsx(E0,{})}),l.jsx("div",{className:"flex-initial w-40",children:l.jsx(na,{setshowSidebar:e==null?void 0:e.setshowSidebar,subMenuStatus:e.subMenuStatus,path:e.path,title:e.title})})]}),e.path==null&&l.jsxs("li",{onClick:r,className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-indigo-500",style:{width:"250px"},children:[l.jsx("div",{className:"flex-none ",children:l.jsx(E0,{})}),l.jsx("div",{className:"flex-initial w-40",children:l.jsx(na,{subMenuStatus:e==null?void 0:e.subMenuStatus,path:e.path,title:e.title})}),(e==null?void 0:e.subMenuStatus)&&l.jsxs("div",{className:"flex-none ",children:[t=="h-0"&&l.jsx(q3,{size:18}),t=="h-auto"&&l.jsx(A9,{size:18})]})]}),e.path==null&&l.jsx("div",{className:`transition-all duration-1000 ${t} overflow-hidden bg-gray-200`,children:e==null?void 0:e.subMenu.map(s=>l.jsx("div",{className:"flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer",style:{width:"250px"},children:l.jsx("div",{className:"flex-initial w-40",children:l.jsx(na,{setshowSidebar:e==null?void 0:e.setshowSidebar,path:s.path,title:s.menuName,menuId:s==null?void 0:s.id})})}))})]})})}function z9(e){return Ze({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#CFD8DC",points:"35,36 39,36 39,22 26,22 26,13 22,13 22,22 9,22 9,36 13,36 13,26 22,26 22,36 26,36 26,26 35,26"}},{tag:"rect",attr:{x:"17",y:"6",fill:"#3F51B5",width:"14",height:"10"}},{tag:"rect",attr:{x:"32",y:"32",fill:"#00BCD4",width:"10",height:"10"}},{tag:"rect",attr:{x:"6",y:"32",fill:"#00BCD4",width:"10",height:"10"}},{tag:"rect",attr:{x:"19",y:"32",fill:"#00BCD4",width:"10",height:"10"}}]})(e)}function F9(){return l.jsxs(l.Fragment,{children:[l.jsx("div",{children:"AxiosInterceptors"}),l.jsx(fe,{code:`import axios from 'axios';

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

`})]})}function D9(){return l.jsxs(l.Fragment,{children:[l.jsx("div",{children:"PowerupFunctions"}),l.jsx(fe,{code:`export const returnCapitalize = (currentValue) => {
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

`})]})}function O9(){const e=[{icon:A3,techName:"React",version:1}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Technologies"}),l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-lg",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Tech"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Version"})]})}),l.jsx("tbody",{children:e==null?void 0:e.map((t,n)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("img",{className:"inline",src:t==null?void 0:t.icon,alt:""}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:t==null?void 0:t.techName})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.version})]}))})]})]})}function Sc(e){return Ze({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(e)}function Mc(e){return l.jsx(l.Fragment,{children:l.jsx("div",{className:"bg-gray-800 shadow-xl text-white absolute top-10 right-10 px-2 rounded-lg",children:e==null?void 0:e.url})})}function I9(){const[e,t]=j.useState(null),n=[{icon:null,techName:"Flaticons",use:"Collection of png icons",version:1,url:"https://www.flaticon.com/"},{icon:null,techName:"Lotte Animations",use:"Pre made animations",version:1,url:"https://lottiefiles.com/"}],r=s=>{window.open(s,"_blank")};return l.jsxs(l.Fragment,{children:[l.jsx(Mc,{url:e}),l.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Resources"}),l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-lg",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Resource"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Url"})]})}),l.jsx("tbody",{children:n==null?void 0:n.map((s,i)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("img",{className:"inline",src:s==null?void 0:s.icon,alt:""}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:s==null?void 0:s.techName})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.use}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l.jsx(Sc,{onMouseEnter:()=>t(s==null?void 0:s.url),onMouseLeave:()=>t(null),onClick:()=>r(s==null?void 0:s.url),className:"inline cursor-pointer text-2xl hover:scale-105 font-semibold"})})]}))})]})]})}function R9(){const[e,t]=j.useState(null),n=[{icon:null,techName:"React Router Dom",use:"To handle page routing",version:1,url:"https://reactrouter.com/en/main"},{icon:null,techName:"Formik",use:"This library is use to handle forms in a very smart way",version:1,url:"https://formik.org/"},{icon:null,techName:"Axios",use:"This library is use to handle API calls",version:1,url:"https://axios-http.com/docs/intro"},{icon:null,techName:"React-Icons",use:"Icon library, Easy to use",version:1,url:"https://react-icons.github.io/react-icons/"},{icon:null,techName:"React-Modal",use:"Popup libary",version:1,url:"https://github.com/reactjs/react-modal"},{icon:null,techName:"React-Toastify",use:"Toast libary",version:1,url:"https://www.npmjs.com/package/react-toastify"},{icon:null,techName:"Yup",use:"Libary for validation schema, best works with formik",version:1,url:"https://www.npmjs.com/package/yup"}],r=s=>{window.open(s,"_blank")};return l.jsxs(l.Fragment,{children:[l.jsx(Mc,{url:e}),l.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Libraries"}),l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-lg",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Doc Url"})]})}),l.jsx("tbody",{children:n==null?void 0:n.map((s,i)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("img",{className:"inline",src:s==null?void 0:s.icon,alt:""}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:s==null?void 0:s.techName})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.use}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l.jsx(Sc,{onMouseEnter:()=>t(s==null?void 0:s.url),onMouseLeave:()=>t(null),onClick:()=>r(s==null?void 0:s.url),className:"inline cursor-pointer text-2xl hover:scale-105 font-semibold"})})]}))})]})]})}function V9(){const[e,t]=j.useState(null),n=[{icon:null,techName:"Login Authentication",use:"This library is use to handle forms in a very smart way"},{icon:null,techName:"Protected Routes",use:"This library is use to handle API calls"},{icon:null,techName:"404 Page",use:"This library is use to handle API calls"},{icon:null,techName:"Secure Localstorage",use:"This library is use to handle API calls"},{icon:null,techName:"Url Encryption",use:"This library is use to handle API calls"}];return l.jsxs(l.Fragment,{children:[l.jsx(Mc,{url:e}),l.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Essentials"}),l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-lg",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"})]})}),l.jsx("tbody",{children:n==null?void 0:n.map((r,s)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("img",{className:"inline",src:r==null?void 0:r.icon,alt:""}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:r==null?void 0:r.techName})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.use})]}))})]})]})}const _0=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],B9=[{title:"Bengaluru office",timings:"Mon-Sat 9am to 5pm.",address:"100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN"},{title:"Head office",timings:"Mon-Sat 9am to 5pm.",address:"12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN"},{title:"Karnataka office",timings:"Mon-Sat 9am to 5pm.",address:"42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN"}],U9=[{name:"Gabrielle Fernandez",image:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",position:"Marketing Lead"},{name:"Victória Silva",image:"https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",position:"Back-end developer"},{name:"Gabrielle Fernandez",image:"https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Sales"},{name:"Sadie Lewis",image:"https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Sales"},{name:"Thilde Olaisen",image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600",position:"Marketing Lead"},{name:"Deepika Ramesh",image:"https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg",position:"Front-end developer"},{name:"Jordi Santiago",image:"https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",position:"Front-end developer"},{name:"Kerim Fahri",image:"https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Back-end developer"}];function H9(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`//Source - Dev UI
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
     `}),l.jsxs("div",{children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:_0.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:_0.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsxs("div",{className:"mx-auto max-w-7xl px-4",children:[l.jsxs("div",{className:"flex flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[l.jsx("div",{className:"max-w-max rounded-full border bg-gray-50 p-1 px-3",children:l.jsx("p",{className:"text-xs font-semibold leading-normal md:text-sm",children:"About the company"})}),l.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Made with love, right here in India"}),l.jsx("p",{className:"max-w-4xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"})]}),l.jsx("div",{className:"w-full space-y-4",children:l.jsx("img",{className:"h-[200px] w-full rounded-xl object-cover md:h-full",src:"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg",alt:""})}),l.jsx("div",{className:"my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around",children:B9.map(r=>l.jsxs("div",{className:"flex flex-col space-y-3 md:w-2/4 lg:w-1/5",children:[l.jsx(R3,{className:"h-5 w-5"}),l.jsx("p",{className:"w-full text-xl font-semibold  text-gray-900",children:r.title}),l.jsx("p",{className:"w-full text-base text-gray-700",children:r.timings}),l.jsx("p",{className:"text-sm font-medium",children:r.address})]},r.title))}),l.jsx("hr",{className:"mt-20"}),l.jsx("div",{className:"mt-16 flex items-center",children:l.jsxs("div",{className:"space-y-6 md:w-3/4",children:[l.jsx("div",{className:"max-w-max rounded-full border bg-gray-50 p-1 px-3",children:l.jsx("p",{className:"text-xs font-semibold leading-normal md:text-sm",children:"Join Us →"})}),l.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-4xl",children:"Meet our team"}),l.jsx("p",{className:"max-w-4xl text-base text-gray-700 md:text-xl",children:"Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."}),l.jsx("div",{})]})}),l.jsx("div",{className:"grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4",children:U9.map(r=>l.jsxs("div",{className:"rounded-md border",children:[l.jsx("img",{src:r.image,alt:r.name,className:"h-[300px] w-full rounded-lg object-cover "}),l.jsx("p",{className:"mt-6 w-full px-2 text-xl  font-semibold text-gray-900",children:r.name}),l.jsx("p",{className:"w-full px-2 pb-6 text-sm font-semibold text-gray-500",children:r.position})]},r.name))}),l.jsxs("div",{className:"flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsx("p",{className:"text-sm font-semibold md:text-base",children:"Join our team →"}),l.jsx("p",{className:"text-3xl font-bold md:text-4xl",children:"We're just getting started"}),l.jsx("p",{className:"text-base text-gray-600 md:text-lg",children:"Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."}),l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Join Now"})]}),l.jsx("div",{className:"md:mt-o mt-10 w-full",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"Getting Started",className:"rounded-lg"})})]})]}),l.jsx("hr",{className:"mt-6"}),l.jsx("div",{className:"mx-auto max-w-7xl",children:l.jsxs("footer",{className:"px-4 py-10",children:[l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[l.jsx("span",{children:l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:l.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),l.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"About us"}),l.jsx("li",{children:"Company History"}),l.jsx("li",{children:"Our Team"}),l.jsx("li",{children:"Our Vision"}),l.jsx("li",{children:"Press Release"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Washington"}),l.jsx("li",{children:"New Hampshire"}),l.jsx("li",{children:"Maine"}),l.jsx("li",{children:"Texas"}),l.jsx("li",{children:"Indiana"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"UI / UX Design"}),l.jsx("li",{children:"App Development"}),l.jsx("li",{children:"API reference"}),l.jsx("li",{children:"API status"}),l.jsx("li",{children:"Documentation"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Privacy Policy"}),l.jsx("li",{children:"Terms of Service"}),l.jsx("li",{children:"Cookie Policy"}),l.jsx("li",{children:"Disclaimer"}),l.jsx("li",{children:"Media Policy"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Facebook"}),l.jsx("li",{children:"Twitter"}),l.jsx("li",{children:"Instagram"}),l.jsx("li",{children:"Linkedin"}),l.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const T0=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}];function Z9(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`'use client'

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
`}),l.jsxs("div",{className:"mx-auto w-full max-w-7xl px-2 md:px-4",children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:T0.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:T0.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsxs("div",{className:"mx-auto my-12 flex max-w-6xl flex-col px-2 md:my-24 lg:my-32 lg:flex-row lg:items-center",children:[l.jsxs("div",{children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-semibold text-black",children:"404 error"}),l.jsx("h1",{className:"mt-3 text-2xl font-semibold text-gray-800 md:text-3xl",children:"We can't find that page"}),l.jsx("p",{className:"mt-4 text-gray-500",children:"Sorry, the page you are looking for doesn't exist or has been moved."}),l.jsxs("div",{className:"mt-6 flex items-center gap-x-3",children:[l.jsxs("button",{type:"button",className:"inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx(P3,{size:16,className:"mr-2"}),"Go back"]}),l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Contact us"})]})]}),l.jsxs("div",{className:"mt-10 space-y-6",children:[l.jsxs("div",{children:[l.jsxs("a",{href:"#",className:"hover:underlin inline-flex items-center gap-x-2 text-sm font-semibold text-black",children:[l.jsx("span",{children:"Documentation"}),l.jsx(Xr,{size:16})]}),l.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Dive in to learn all about our product."})]}),l.jsxs("div",{children:[l.jsxs("a",{href:"#",className:"inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline",children:[l.jsx("span",{children:"Our blog"}),l.jsx(Xr,{size:16})]}),l.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Read the latest posts on our blog."})]}),l.jsxs("div",{children:[l.jsxs("a",{href:"#",className:"inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline",children:[l.jsx("span",{children:"Chat to support"}),l.jsx(Xr,{size:16})]}),l.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Our friendly team is here to help."})]})]})]}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:"404",className:"h-full w-full rounded-md object-cover"})})]}),l.jsx("hr",{className:"mt-6"}),l.jsx("div",{className:"mx-auto max-w-7xl",children:l.jsxs("footer",{className:"px-4 py-10",children:[l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[l.jsx("span",{children:l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:l.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),l.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"About us"}),l.jsx("li",{children:"Company History"}),l.jsx("li",{children:"Our Team"}),l.jsx("li",{children:"Our Vision"}),l.jsx("li",{children:"Press Release"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Washington"}),l.jsx("li",{children:"New Hampshire"}),l.jsx("li",{children:"Maine"}),l.jsx("li",{children:"Texas"}),l.jsx("li",{children:"Indiana"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"UI / UX Design"}),l.jsx("li",{children:"App Development"}),l.jsx("li",{children:"API reference"}),l.jsx("li",{children:"API status"}),l.jsx("li",{children:"Documentation"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Privacy Policy"}),l.jsx("li",{children:"Terms of Service"}),l.jsx("li",{children:"Cookie Policy"}),l.jsx("li",{children:"Disclaimer"}),l.jsx("li",{children:"Media Policy"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Facebook"}),l.jsx("li",{children:"Twitter"}),l.jsx("li",{children:"Instagram"}),l.jsx("li",{children:"Linkedin"}),l.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const A0=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"},{name:"Blogs",href:"#"}];function W9(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`'use client'

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
`}),l.jsxs("div",{className:"w-full",children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:A0.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:A0.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsx("div",{className:"relative w-full bg-white",children:l.jsxs("div",{className:"mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8",children:[l.jsxs("div",{className:"flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6",children:[l.jsxs("div",{className:"mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1",children:[l.jsx("div",{className:"rounded-full bg-white p-1 px-2",children:l.jsx("p",{className:"text-sm font-medium",children:"We' hiring"})}),l.jsx("p",{className:"text-sm font-medium",children:"Join our team →"})]}),l.jsx("h1",{className:"mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl",children:"People who care about your growth"}),l.jsx("p",{className:"mt-8 text-lg text-gray-700",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi blanditiis dolores quasi eaque explicabo!"}),l.jsxs("form",{action:"",className:"mt-8 flex items-start space-x-2",children:[l.jsxs("div",{children:[l.jsx("input",{className:"flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Enter your email",id:"email"}),l.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"We care about your privacy"})]}),l.jsx("div",{children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})})]})]}),l.jsx("div",{className:"relative lg:col-span-5 lg:-mr-8 xl:col-span-6",children:l.jsx("img",{className:"aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]",src:"https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:""})})]})}),l.jsx("div",{className:"mx-auto my-32 max-w-7xl px-2 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4",children:[l.jsxs("div",{children:[l.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100",children:l.jsx("svg",{className:"h-9 w-9 text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})})}),l.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Secured Payments"}),l.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100",children:l.jsx("svg",{className:"h-9 w-9 text-orange-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),l.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Fast & Easy to Load"}),l.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100",children:l.jsx("svg",{className:"h-9 w-9 text-green-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),l.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Light & Dark Version"}),l.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100",children:l.jsx("svg",{className:"h-9 w-9 text-red-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})})}),l.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Filter Blocks"}),l.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]})]})}),l.jsx("section",{className:"mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0",children:l.jsxs("div",{children:[l.jsxs("div",{className:"mx-auto max-w-2xl lg:text-center",children:[l.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl",children:"Frequently Asked Questions"}),l.jsx("p",{className:"mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda"})]}),l.jsxs("div",{className:"mx-auto mt-8 max-w-3xl space-y-4 md:mt-16",children:[l.jsxs("div",{className:"cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200",children:[l.jsxs("button",{type:"button",className:"flex w-full items-center justify-between px-4 py-5 sm:p-6",children:[l.jsx("span",{className:"flex text-lg font-semibold text-black",children:"How do I get started?"}),l.jsx(I3,{className:"h-5 w-5 text-gray-500"})]}),l.jsx("div",{className:"px-4 pb-5 sm:px-6 sm:pb-6",children:l.jsx("p",{className:"text-gray-500",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"})})]}),Array.from({length:2}).map((r,s)=>l.jsx("div",{className:"cursor-pointer rounded-md border border-gray-400 transition-all duration-200",children:l.jsxs("button",{type:"button",className:"flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center",children:[l.jsx("span",{className:"flex text-start text-lg font-semibold text-black",children:"What is the difference between a free and paid account?"}),l.jsx(D3,{className:"hidden h-5 w-5 text-gray-500 md:block"})]})},s))]}),l.jsxs("p",{className:"textbase mt-6 text-center text-gray-600",children:["Can't find what you're looking for?"," ",l.jsx("a",{href:"#",title:"",className:"font-semibold text-black hover:underline",children:"Contact our support"})]})]})}),l.jsx("div",{className:"mx-auto my-12 max-w-7xl md:my-24 lg:my-32",children:l.jsxs("div",{className:"lg:grid lg:grid-cols-12 lg:gap-x-6",children:[l.jsxs("div",{className:"px-4 py-10 lg:col-span-5 lg:px-0",children:[l.jsx("span",{className:"mb-8 inline-block rounded-full border p-1 px-3 text-xs font-semibold",children:"Pricing that fits your budget"}),l.jsx("h1",{className:"text-3xl font-bold md:text-5xl",children:"Lorem ipsum dolor sit amet consectetur."}),l.jsx("p",{className:"mt-8 font-medium",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni, rem sed sint neque doloribus saepe veniam minima quaerat minus."}),l.jsxs("div",{className:"mt-8 flex w-full max-w-sm items-center space-x-2",children:[l.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})]})]}),l.jsxs("div",{className:"flex flex-col items-center justify-center md:flex-row lg:col-span-7",children:[l.jsx("div",{className:"w-full p-5 md:w-1/2",children:l.jsxs("div",{className:"rounded-md border bg-white bg-opacity-90",children:[l.jsx("div",{className:" border-b",children:l.jsxs("div",{className:"px-9 py-7",children:[l.jsx("h3",{className:"mb-3 text-xl font-bold leading-snug text-gray-900",children:"Standard"}),l.jsx("p",{className:"font-medium leading-relaxed text-gray-500",children:"Lorem ipsum dolor sit amet, consect etur adipiscing maror."})]})}),l.jsxs("div",{className:"px-9 pb-9 pt-8",children:[l.jsx("p",{className:"mb-6 font-medium leading-relaxed text-gray-600",children:"Features included:"}),l.jsxs("ul",{className:"mb-11",children:[l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"3 Team Members"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"1200+ UI Blocks"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"10 GB Cloud Storage"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"Individual Email Account"})]}),l.jsxs("li",{className:"flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"Premium Support"})]})]}),l.jsxs("p",{className:"mb-6 text-lg font-semibold leading-normal text-gray-600",children:[l.jsx("span",{children:"Starting from"}),l.jsx("span",{className:"ml-2 text-gray-900",children:"$49/mo"})]}),l.jsx("div",{className:"md:inline-block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Start your free trial"})})]})]})}),l.jsx("div",{className:"w-full p-5 md:w-1/2",children:l.jsxs("div",{className:"rounded-md border bg-white bg-opacity-90",children:[l.jsx("div",{className:" border-b",children:l.jsxs("div",{className:"px-9 py-7",children:[l.jsx("h3",{className:"mb-3 text-xl font-bold leading-snug text-gray-900",children:"Standard"}),l.jsx("p",{className:"font-medium leading-relaxed text-gray-500",children:"Lorem ipsum dolor sit amet, consect etur adipiscing maror."})]})}),l.jsxs("div",{className:"px-9 pb-9 pt-8",children:[l.jsx("p",{className:"mb-6 font-medium leading-relaxed text-gray-600",children:"Features included:"}),l.jsxs("ul",{className:"mb-11",children:[l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"3 Team Members"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"1200+ UI Blocks"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"10 GB Cloud Storage"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"Individual Email Account"})]}),l.jsxs("li",{className:"flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"Premium Support"})]})]}),l.jsxs("p",{className:"mb-6 text-lg font-semibold leading-normal text-gray-600",children:[l.jsx("span",{children:"Starting from"}),l.jsx("span",{className:"ml-2 text-gray-900",children:"$49/mo"})]}),l.jsx("div",{className:"md:inline-block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Start your free trial"})})]})]})})]})]})}),l.jsx("div",{className:"mx-auto max-w-7xl bg-gray-50 px-2 py-10 lg:px-2",children:l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between",children:[l.jsxs("div",{className:"w-full md:w-2/3 lg:w-1/2",children:[l.jsx("h2",{className:"text-3xl font-bold text-black",children:"Sign up for our weekly newsletter"}),l.jsx("p",{className:"mt-4 text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."}),l.jsxs("div",{className:"mt-4",children:[l.jsx("p",{className:"font-semibold text-gray-800",children:"Trusted by over 100,000+ businesses and individuals"}),l.jsxs("div",{className:"mt-2 flex items-center",children:[l.jsx("div",{className:"flex space-x-1",children:Array.from({length:5}).map((r,s)=>l.jsx(U3,{className:"h-5 w-5 text-yellow-400"},s))}),l.jsx("span",{className:"ml-2 inline-block",children:l.jsx("span",{className:"text-sm font-semibold text-gray-800",children:"4.8/5 . 3420 Reviews"})})]})]})]}),l.jsxs("div",{className:"mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2",children:[l.jsx("form",{className:"flex lg:justify-center",children:l.jsxs("div",{className:"flex w-full max-w-md flex-col space-y-4",children:[l.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),l.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})]})}),l.jsx("p",{className:"mt-2 lg:text-center",children:l.jsx("span",{className:"text-sm text-gray-600",children:"By signing up, you agree to our terms of service and privacy policy."})})]})]})}),l.jsx("div",{className:"mx-auto mt-12 max-w-7xl",children:l.jsxs("footer",{className:"px-4 py-10",children:[l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[l.jsx("span",{children:l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:l.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),l.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"About us"}),l.jsx("li",{children:"Company History"}),l.jsx("li",{children:"Our Team"}),l.jsx("li",{children:"Our Vision"}),l.jsx("li",{children:"Press Release"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Washington"}),l.jsx("li",{children:"New Hampshire"}),l.jsx("li",{children:"Maine"}),l.jsx("li",{children:"Texas"}),l.jsx("li",{children:"Indiana"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"UI / UX Design"}),l.jsx("li",{children:"App Development"}),l.jsx("li",{children:"API reference"}),l.jsx("li",{children:"API status"}),l.jsx("li",{children:"Documentation"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Privacy Policy"}),l.jsx("li",{children:"Terms of Service"}),l.jsx("li",{children:"Cookie Policy"}),l.jsx("li",{children:"Disclaimer"}),l.jsx("li",{children:"Media Policy"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Facebook"}),l.jsx("li",{children:"Twitter"}),l.jsx("li",{children:"Instagram"}),l.jsx("li",{children:"Linkedin"}),l.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const L0=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],G9=[{name:"Basic plan",price:"$10/mth",features:["Access to all basic features ","Basic reporting and analytics","Up to 10 individual users","20GB individual data each user","Basic chat and email support"]},{name:"Business plan",price:"$20/mth",features:["200+ integrations","Advanced reporting and analytics","Up to 20 individual users","40GB individual data each user","Priority chat and email support"]},{name:"Enterprise plan",price:"$40/mth",features:["Advanced custom fields","Audit log and data history","Unlimited individual users","Unlimited individual data","Personalized+priority service"]}],q9=[{question:"Is there a free trial available?",answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},{question:"Can I change my plan later?",answer:"Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."},{question:"What is your cancellation policy?",answer:"We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid."},{question:"Can other info be added to an invoice?",answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},{question:"How does billing work?",answer:"Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."},{question:"How do I change my account email?",answer:"You can change the email address associated with your account by going to account from a laptop or desktop."}];function Y9(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`'use client'

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
`}),l.jsxs("div",{className:"mx-auto max-w-7xl px-2 md:px-4",children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden grow px-12 lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:L0.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:L0.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsxs("div",{children:[l.jsxs("div",{className:"mx-auto flex max-w-5xl flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[l.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Simple, transparent pricing"}),l.jsx("p",{className:"max-w-3xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"})]}),l.jsx("div",{className:"mt-8 space-y-4 md:mt-12",children:l.jsx("div",{className:"grid space-y-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:space-x-8",children:G9.map(r=>l.jsxs("div",{className:"rounded-lg border border-gray-200 bg-white",children:[l.jsxs("div",{className:"flex w-full flex-col justify-start space-y-4 px-8 pt-10",children:[l.jsx("p",{className:"text-4xl font-bold leading-10",children:r.price}),l.jsxs("div",{className:"flex w-full flex-col items-start justify-start space-y-1",children:[l.jsx("p",{className:"w-full text-xl font-semibold leading-loose text-gray-900",children:r.name}),l.jsx("p",{className:"w-full text-base leading-normal text-gray-600",children:"Billed annually."})]})]}),l.jsx("div",{className:"flex w-full max-w-sm flex-col px-8 py-8",children:l.jsxs("div",{className:"flex w-full flex-col items-start justify-start space-y-3",children:[l.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Get Started"}),l.jsx("button",{type:"button",className:"w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Contact Us"})]})}),l.jsx("div",{className:"flex w-full flex-col items-start justify-start px-8 pb-8",children:l.jsx("div",{className:"flex w-full flex-col space-y-4",children:r.features.map(s=>l.jsxs("div",{className:"inline-flex w-full space-x-3",children:[l.jsx("div",{className:"flex items-center justify-center rounded-full p-1 lg:bg-gray-100",children:l.jsx(F3,{className:"h-4 w-4"})}),l.jsx("p",{className:"w-full text-base leading-normal text-gray-600",children:s})]},s))})})]},r.name))})}),l.jsx("div",{className:"mt-12 space-y-16 bg-gray-50 py-16",children:l.jsx("div",{className:"mx-auto  flex max-w-7xl items-center justify-center  px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex flex-col items-center space-y-6 md:w-3/4",children:[l.jsxs("div",{className:"space-y-4 justify-self-center",children:[l.jsx("p",{className:"text-center text-3xl font-bold leading-10 text-gray-900",children:"Frequently asked questions"}),l.jsx("p",{className:"text-center text-lg leading-loose text-gray-600",children:"Everything you need to know about the product and billing."})]}),l.jsx("div",{className:"divide-y divide-gray-300",children:q9.map((r,s)=>l.jsxs("div",{className:"flex justify-between space-x-6 py-6",children:[l.jsxs("div",{className:"inline-flex flex-col items-start justify-start space-y-2",children:[l.jsx("p",{className:"text-lg font-medium leading-7 text-gray-900",children:r.question}),s===0?l.jsx("p",{className:"text-base leading-normal text-gray-600",children:r.answer}):null]}),l.jsx("div",{children:s===0?l.jsx(V3,{className:"h-6 w-6 text-gray-600"}):l.jsx(B3,{className:"h-6 w-6 text-gray-600"})})]},r.question))})]})})})]}),l.jsxs("footer",{className:"w-full pb-8 pt-12 md:mt-16",children:[l.jsxs("div",{className:"mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row",children:[l.jsxs("div",{className:"w-full px-4 md:w-1/2 lg:px-0",children:[l.jsx("h1",{className:"max-w-sm text-3xl font-bold",children:"Subscribe to our Newsletter"}),l.jsxs("form",{action:"",className:"mt-4 inline-flex w-full items-center md:w-3/4",children:[l.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),l.jsx("button",{type:"button",className:"ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:l.jsx(O3,{className:"h-4 w-4"})})]})]}),l.jsx("div",{className:"mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3",children:Array.from({length:3}).map((r,s)=>l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700 ",children:"Company"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"About us"}),l.jsx("li",{children:"Company History"}),l.jsx("li",{children:"Our Team"}),l.jsx("li",{children:"Our Vision"}),l.jsx("li",{children:"Press Release"})]})]},s))})]}),l.jsx("hr",{className:"my-8"}),l.jsxs("div",{className:"mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0",children:[l.jsxs("div",{className:"inline-flex items-center",children:[l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})}),l.jsx("span",{className:"ml-4 text-lg font-bold",children:"DevUI"})]}),l.jsx("div",{className:"mt-4 md:mt-0",children:l.jsx("p",{className:"text-sm font-medium text-gray-500",children:"© 2023 DevUI. All rights reserved."})})]})]})]})]})}const $0=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],Q9=[{title:"Bengaluru office",timings:"Mon-Sat 9am to 5pm.",address:"100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN"},{title:"Head office",timings:"Mon-Sat 9am to 5pm.",address:"12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN"},{title:"Karnataka office",timings:"Mon-Sat 9am to 5pm.",address:"42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN"}];function K9(){const[e,t]=Ve.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`'use client'

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
`}),l.jsxs("div",{children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden grow px-12 lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:$0.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:$0.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsx("div",{className:"mx-auto max-w-7xl px-4",children:l.jsx("div",{className:"mx-auto max-w-7xl py-12 md:py-24",children:l.jsxs("div",{className:"grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2",children:[l.jsx("div",{className:"flex items-center justify-center",children:l.jsxs("div",{className:"px-2 md:px-12",children:[l.jsx("p",{className:"text-2xl font-bold text-gray-900 md:text-4xl",children:"Get in touch"}),l.jsx("p",{className:"mt-4 text-lg text-gray-600",children:"Our friendly team would love to hear from you."}),l.jsxs("form",{action:"",className:"mt-8 space-y-4",children:[l.jsxs("div",{className:"grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2",children:[l.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[l.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"first_name",children:"First Name"}),l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"first_name",placeholder:"First Name"})]}),l.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[l.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"last_name",children:"Last Name"}),l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"last_name",placeholder:"Last Name"})]})]}),l.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[l.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"email",children:"Email"}),l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"email",placeholder:"Email"})]}),l.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[l.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"phone_number",children:"Phone number"}),l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"tel",id:"phone_number",placeholder:"Phone number"})]}),l.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[l.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"message",children:"Message"}),l.jsx("textarea",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",id:"message",placeholder:"Leave us a message",cols:3})]}),l.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Send Message"})]})]})}),l.jsx("img",{alt:"Contact us",className:"hidden max-h-full w-full rounded-lg object-cover lg:block",src:"https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"})]})})}),l.jsx("div",{className:"rounded-lg bg-gray-100",children:l.jsx("div",{className:"mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"py-20",children:l.jsxs("div",{className:"grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsx("p",{className:"w-full text-4xl font-bold text-gray-900",children:"Our Offices"}),l.jsx("p",{className:"w-full text-lg text-gray-600",children:"Find us at these locations."})]}),l.jsx("div",{className:"space-y-4 divide-y-2",children:Q9.map(r=>l.jsxs("div",{className:"flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full",children:[l.jsx("p",{className:"w-full text-xl font-semibold  text-gray-900",children:r.title}),l.jsx("p",{className:"w-full text-base  text-gray-600",children:r.timings}),l.jsx("p",{className:"text-sm font-semibold text-gray-600",children:r.address})]},r.title))})]})})})}),l.jsx("hr",{className:"mt-6"}),l.jsx("section",{className:"relative overflow-hidden bg-white py-8",children:l.jsx("div",{className:"container relative z-10 mx-auto px-4",children:l.jsxs("div",{className:"-m-8 flex flex-wrap items-center justify-between",children:[l.jsx("div",{className:"w-auto p-8",children:l.jsx("a",{href:"#",children:l.jsxs("div",{className:"inline-flex items-center",children:[l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})}),l.jsx("span",{className:"ml-4 text-lg font-bold",children:"DevUI"})]})})}),l.jsx("div",{className:"w-auto p-8",children:l.jsxs("ul",{className:"-m-5 flex flex-wrap items-center",children:[l.jsx("li",{className:"p-5",children:l.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Privacy Policy"})}),l.jsx("li",{className:"p-5",children:l.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Terms of Service"})}),l.jsx("li",{className:"p-5",children:l.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Return Policy"})}),l.jsx("li",{className:"p-5",children:l.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Contact Us"})})]})}),l.jsx("div",{className:"w-auto p-8",children:l.jsxs("div",{className:"-m-1.5 flex flex-wrap",children:[l.jsx("div",{className:"w-auto p-1.5",children:l.jsx("a",{href:"#",children:l.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:l.jsx("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z",fill:"#27272A"})})})})}),l.jsx("div",{className:"w-auto p-1.5",children:l.jsx("a",{href:"#",children:l.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:l.jsx("svg",{width:"14",height:"11",viewBox:"0 0 14 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z",fill:"#27272A"})})})})}),l.jsx("div",{className:"w-auto p-1.5",children:l.jsx("a",{href:"#",children:l.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:l.jsx("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z",fill:"#27272A"})})})})})]})})]})})})]})]})}const X9="/assets/tlogo-b011959f.png";function J9(){const e=[{name:"College",desc:"Dummy college",workStatus:"active",filterBy:"College",imgUrl:'src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"'},{name:"School",desc:"Dummy school",workStatus:"disabled",filterBy:"College",imgUrl:'src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"'}],t=r=>{navigate(`/documentation/${r}`)},n=r=>{navigate(`/modules-desc/${r}`)};return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import {FcGallery} from 'react-icons/fc'


export function TableView() {

    const tableRow = [
        { name: 'College', desc: 'Dummy college', workStatus: 'active', filterBy: 'College', icon: <FcGallery className="inline text-xl" /> },
        { name: 'School', desc: 'Dummy school', workStatus: 'disabled', filterBy: 'College', icon: <FcGallery className="inline text-xl" /> },
    ]

    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='font-bold text-lg mb-4 pr-10 flex-1'># College </div>
                <div className={'form-group col-span-12 md:col-span-3 mb-4 md:px-2 flex-1 text-right pr-20'}>
                    <select className={'cypress_transferMode px-4  border rounded-md shadow-xl text-lg cursor-pointer'}>
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
                                    <div className='w-12 h-12 inline-flex rounded-full shadow-xl border p-2 justify-center items-center'>
                                        {data?.icon}
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
        </>
    )
}
`}),l.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center",children:[l.jsx("div",{className:"font-bold text-lg mb-4 pr-10 flex-1",children:"# College "}),l.jsx("div",{className:"form-group col-span-12 md:col-span-3 mb-4 md:px-2 flex-1 text-right pr-20",children:l.jsxs("select",{className:"cypress_transferMode px-4  border rounded-md shadow-xl text-lg cursor-pointer",children:[l.jsx("option",{className:"cursor-pointer",value:"All",children:"All"}),l.jsx("option",{className:"cursor-pointer",value:"1",children:"Phase-1"}),l.jsx("option",{className:"cursor-pointer",value:"2",children:"Phase-2"}),l.jsx("option",{className:"cursor-pointer",value:"3",children:"Phase-3"})]})})]}),l.jsx("div",{className:"h-[80vh] overflow-y-scroll",children:l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-md",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"#"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Description"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Work Status"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Action"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Link"})]})}),l.jsx("tbody",{children:e==null?void 0:e.map((r,s)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s+1}),l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("div",{className:"w-12 h-12 inline-block rounded-full shadow-xl border p-2",children:l.jsx("img",{className:"inline w-10 rounded",src:X9,alt:""})}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:r==null?void 0:r.name})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.desc}),l.jsx("td",{className:`px-2 py-2 text-sm text-left font-semibold 
                            ${(r==null?void 0:r.workStatus)==="disabled"&&"text-red-600"}
                            ${(r==null?void 0:r.workStatus)==="active"&&"text-green-600"}
                            `,children:r==null?void 0:r.workStatus}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l.jsx("button",{onClick:()=>n(r==null?void 0:r.filterBy),type:"button",className:"rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white",children:"View"})}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l.jsx(Sc,{onMouseEnter:()=>settooltipData(r==null?void 0:r.filterBy),onMouseLeave:()=>settooltipData(null),onClick:()=>t(r==null?void 0:r.filterText),className:"inline cursor-pointer text-2xl hover:scale-105 font-semibold"})})]}))})]})})]})}function eg(){return l.jsxs(l.Fragment,{children:[l.jsx("div",{children:"ScrollHandleCss"}),l.jsx(fe,{code:`/*App.css*/
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
`})]})}var q1={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(lm,function(){var n=1e3,r=6e4,s=36e5,i="millisecond",a="second",o="minute",c="hour",u="day",x="week",h="month",p="quarter",b="year",N="date",w="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(R){var P=["th","st","nd","rd"],T=R%100;return"["+R+(P[(T-20)%10]||P[T]||P[0])+"]"}},g=function(R,P,T){var B=String(R);return!B||B.length>=P?R:""+Array(P+1-B.length).join(T)+R},y={s:g,z:function(R){var P=-R.utcOffset(),T=Math.abs(P),B=Math.floor(T/60),L=T%60;return(P<=0?"+":"-")+g(B,2,"0")+":"+g(L,2,"0")},m:function R(P,T){if(P.date()<T.date())return-R(T,P);var B=12*(T.year()-P.year())+(T.month()-P.month()),L=P.clone().add(B,h),C=T-L<0,M=P.clone().add(B+(C?-1:1),h);return+(-(B+(T-L)/(C?L-M:M-L))||0)},a:function(R){return R<0?Math.ceil(R)||0:Math.floor(R)},p:function(R){return{M:h,y:b,w:x,d:u,D:N,h:c,m:o,s:a,ms:i,Q:p}[R]||String(R||"").toLowerCase().replace(/s$/,"")},u:function(R){return R===void 0}},k="en",$={};$[k]=f;var z=function(R){return R instanceof q},D=function R(P,T,B){var L;if(!P)return k;if(typeof P=="string"){var C=P.toLowerCase();$[C]&&(L=C),T&&($[C]=T,L=C);var M=P.split("-");if(!L&&M.length>1)return R(M[0])}else{var A=P.name;$[A]=P,L=A}return!B&&L&&(k=L),L||!B&&k},U=function(R,P){if(z(R))return R.clone();var T=typeof P=="object"?P:{};return T.date=R,T.args=arguments,new q(T)},E=y;E.l=D,E.i=z,E.w=function(R,P){return U(R,{locale:P.$L,utc:P.$u,x:P.$x,$offset:P.$offset})};var q=function(){function R(T){this.$L=D(T.locale,null,!0),this.parse(T)}var P=R.prototype;return P.parse=function(T){this.$d=function(B){var L=B.date,C=B.utc;if(L===null)return new Date(NaN);if(E.u(L))return new Date;if(L instanceof Date)return new Date(L);if(typeof L=="string"&&!/Z$/i.test(L)){var M=L.match(_);if(M){var A=M[2]-1||0,H=(M[7]||"0").substring(0,3);return C?new Date(Date.UTC(M[1],A,M[3]||1,M[4]||0,M[5]||0,M[6]||0,H)):new Date(M[1],A,M[3]||1,M[4]||0,M[5]||0,M[6]||0,H)}}return new Date(L)}(T),this.$x=T.x||{},this.init()},P.init=function(){var T=this.$d;this.$y=T.getFullYear(),this.$M=T.getMonth(),this.$D=T.getDate(),this.$W=T.getDay(),this.$H=T.getHours(),this.$m=T.getMinutes(),this.$s=T.getSeconds(),this.$ms=T.getMilliseconds()},P.$utils=function(){return E},P.isValid=function(){return this.$d.toString()!==w},P.isSame=function(T,B){var L=U(T);return this.startOf(B)<=L&&L<=this.endOf(B)},P.isAfter=function(T,B){return U(T)<this.startOf(B)},P.isBefore=function(T,B){return this.endOf(B)<U(T)},P.$g=function(T,B,L){return E.u(T)?this[B]:this.set(L,T)},P.unix=function(){return Math.floor(this.valueOf()/1e3)},P.valueOf=function(){return this.$d.getTime()},P.startOf=function(T,B){var L=this,C=!!E.u(B)||B,M=E.p(T),A=function(_t,ve){var bt=E.w(L.$u?Date.UTC(L.$y,ve,_t):new Date(L.$y,ve,_t),L);return C?bt:bt.endOf(u)},H=function(_t,ve){return E.w(L.toDate()[_t].apply(L.toDate("s"),(C?[0,0,0,0]:[23,59,59,999]).slice(ve)),L)},Z=this.$W,ee=this.$M,pe=this.$D,Ce="set"+(this.$u?"UTC":"");switch(M){case b:return C?A(1,0):A(31,11);case h:return C?A(1,ee):A(0,ee+1);case x:var _e=this.$locale().weekStart||0,We=(Z<_e?Z+7:Z)-_e;return A(C?pe-We:pe+(6-We),ee);case u:case N:return H(Ce+"Hours",0);case c:return H(Ce+"Minutes",1);case o:return H(Ce+"Seconds",2);case a:return H(Ce+"Milliseconds",3);default:return this.clone()}},P.endOf=function(T){return this.startOf(T,!1)},P.$set=function(T,B){var L,C=E.p(T),M="set"+(this.$u?"UTC":""),A=(L={},L[u]=M+"Date",L[N]=M+"Date",L[h]=M+"Month",L[b]=M+"FullYear",L[c]=M+"Hours",L[o]=M+"Minutes",L[a]=M+"Seconds",L[i]=M+"Milliseconds",L)[C],H=C===u?this.$D+(B-this.$W):B;if(C===h||C===b){var Z=this.clone().set(N,1);Z.$d[A](H),Z.init(),this.$d=Z.set(N,Math.min(this.$D,Z.daysInMonth())).$d}else A&&this.$d[A](H);return this.init(),this},P.set=function(T,B){return this.clone().$set(T,B)},P.get=function(T){return this[E.p(T)]()},P.add=function(T,B){var L,C=this;T=Number(T);var M=E.p(B),A=function(ee){var pe=U(C);return E.w(pe.date(pe.date()+Math.round(ee*T)),C)};if(M===h)return this.set(h,this.$M+T);if(M===b)return this.set(b,this.$y+T);if(M===u)return A(1);if(M===x)return A(7);var H=(L={},L[o]=r,L[c]=s,L[a]=n,L)[M]||1,Z=this.$d.getTime()+T*H;return E.w(Z,this)},P.subtract=function(T,B){return this.add(-1*T,B)},P.format=function(T){var B=this,L=this.$locale();if(!this.isValid())return L.invalidDate||w;var C=T||"YYYY-MM-DDTHH:mm:ssZ",M=E.z(this),A=this.$H,H=this.$m,Z=this.$M,ee=L.weekdays,pe=L.months,Ce=function(ve,bt,Un,Hn){return ve&&(ve[bt]||ve(B,C))||Un[bt].slice(0,Hn)},_e=function(ve){return E.s(A%12||12,ve,"0")},We=L.meridiem||function(ve,bt,Un){var Hn=ve<12?"AM":"PM";return Un?Hn.toLowerCase():Hn},_t={YY:String(this.$y).slice(-2),YYYY:this.$y,M:Z+1,MM:E.s(Z+1,2,"0"),MMM:Ce(L.monthsShort,Z,pe,3),MMMM:Ce(pe,Z),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:Ce(L.weekdaysMin,this.$W,ee,2),ddd:Ce(L.weekdaysShort,this.$W,ee,3),dddd:ee[this.$W],H:String(A),HH:E.s(A,2,"0"),h:_e(1),hh:_e(2),a:We(A,H,!0),A:We(A,H,!1),m:String(H),mm:E.s(H,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:M};return C.replace(m,function(ve,bt){return bt||_t[ve]||M.replace(":","")})},P.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},P.diff=function(T,B,L){var C,M=E.p(B),A=U(T),H=(A.utcOffset()-this.utcOffset())*r,Z=this-A,ee=E.m(this,A);return ee=(C={},C[b]=ee/12,C[h]=ee,C[p]=ee/3,C[x]=(Z-H)/6048e5,C[u]=(Z-H)/864e5,C[c]=Z/s,C[o]=Z/r,C[a]=Z/n,C)[M]||Z,L?ee:E.a(ee)},P.daysInMonth=function(){return this.endOf(h).$D},P.$locale=function(){return $[this.$L]},P.locale=function(T,B){if(!T)return this.$L;var L=this.clone(),C=D(T,B,!0);return C&&(L.$L=C),L},P.clone=function(){return E.w(this.$d,this)},P.toDate=function(){return new Date(this.valueOf())},P.toJSON=function(){return this.isValid()?this.toISOString():null},P.toISOString=function(){return this.$d.toISOString()},P.toString=function(){return this.$d.toUTCString()},R}(),je=q.prototype;return U.prototype=je,[["$ms",i],["$s",a],["$m",o],["$H",c],["$W",u],["$M",h],["$y",b],["$D",N]].forEach(function(R){je[R[1]]=function(P){return this.$g(P,R[0],R[1])}}),U.extend=function(R,P){return R.$i||(R(P,q,U),R.$i=!0),U},U.locale=D,U.isDayjs=z,U.unix=function(R){return U(1e3*R)},U.en=$[k],U.Ls=$,U.p={},U})})(q1);var tg=q1.exports;const P0=Fs(tg);function ng(e){return l.jsxs("div",{className:"flex",children:[l.jsx("div",{className:"flex-1 flex",children:(e==null?void 0:e.index)%2===0&&l.jsxs(l.Fragment,{children:[l.jsx("img",{className:"inline h-10 w-10 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),l.jsxs("div",{className:"inline-block text-sm bg-[#D1D5DB] text-gray-700 p-2 rounded-lg shadow-xl",children:[l.jsx("div",{children:e==null?void 0:e.message}),l.jsx("div",{className:"block text-xs relative top-8 text-gray-600",children:P0(e==null?void 0:e.createdAt).format("DD-MM-YYYY hh:mm:ss A")})]})]})}),l.jsx("div",{className:"flex-1 flex",children:(e==null?void 0:e.index)%2!==0&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"inline-block text-sm bg-green-500 text-white p-2 rounded-lg shadow-xl",children:[l.jsx("div",{children:e==null?void 0:e.message}),l.jsx("div",{className:"block text-xs relative top-8 text-gray-600",children:P0(e==null?void 0:e.createdAt).format("DD-MM-YYYY hh:mm:ss A")})]}),l.jsx("img",{className:"inline h-10 w-10 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"})]})})]})}function rg(){const e=[{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."}];return l.jsxs(l.Fragment,{children:[l.jsx(fe,{code:`import React from 'react'
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

export default Chat`}),l.jsxs("div",{className:" h-auto w-auto fixed bottom-10 right-10",children:[l.jsxs("dialog",{className:"relative h-4/5 w-1/2",id:"d",children:[l.jsxs("div",{className:"sticky top-0",children:[l.jsx("button",{onClick:()=>d.close(),className:"absolute top-2 right-3 text-xl p-2 w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-red-500 font-semibold flex justify-center items-center",children:"x"}),l.jsx("div",{className:"flex",children:l.jsx("div",{className:"font-serif",children:"Message"})})]}),l.jsx("div",{className:"mt-10"}),e==null?void 0:e.map((t,n)=>l.jsxs(l.Fragment,{children:[l.jsx(ng,{message:t==null?void 0:t.message,from:t==null?void 0:t.from,index:n}),l.jsx("div",{className:"mt-10"})]})),l.jsxs("form",{className:"mt-2 sticky bottom-0",children:[l.jsx("input",{className:"flex h-10 w-full rounded-md border bg-[#eff0f1] border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"enter message"}),l.jsx("button",{type:"submit",className:"absolute top-0 right-0 text-gray-500 h-10 flex justify-center items-center px-2 rounded-md cursor-pointer hover:scale-105",children:l.jsx(L9,{className:"inline ml-1 text-2xl hover:scale-105"})})]})]}),l.jsx("div",{onClick:()=>d.showModal(),className:"bg-green-500 fixed bottom-10 right-10 h-16 w-16 rounded-full  flex flex-col justify-center items-center cursor-pointer shadow-2xl text-white font-semibold border-2 border-white",href:"",children:l.jsx($9,{className:"text-4xl"})})]})]})}function lg(){return l.jsxs("div",{children:[l.jsx("nav",{className:"bg-white border-b border-gray-200 fixed z-30 w-full",children:l.jsx("div",{className:"px-3 py-3 lg:px-5 lg:pl-3",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center justify-start",children:[l.jsxs("button",{id:"toggleSidebarMobile","aria-expanded":"true","aria-controls":"sidebar",className:"lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded",children:[l.jsx("svg",{id:"toggleSidebarMobileHamburger",className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})}),l.jsx("svg",{id:"toggleSidebarMobileClose",className:"w-6 h-6 hidden",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),l.jsxs("a",{href:"#",className:"text-xl font-bold flex items-center lg:ml-2.5",children:[l.jsx("img",{src:"https://demo.themesberg.com/windster/images/logo.svg",className:"h-6 mr-2",alt:"Windster Logo"}),l.jsx("span",{className:"self-center whitespace-nowrap",children:"Windster"})]}),l.jsxs("form",{action:"#",method:"GET",className:"hidden lg:block lg:pl-32",children:[l.jsx("label",{htmlFor:"topbar-search",className:"sr-only",children:"Search"}),l.jsxs("div",{className:"mt-1 relative lg:w-64",children:[l.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:l.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})}),l.jsx("input",{type:"text",name:"email",id:"topbar-search",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5",placeholder:"Search"})]})]})]}),l.jsxs("div",{className:"flex items-center",children:[l.jsxs("button",{id:"toggleSidebarMobileSearch",type:"button",className:"lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg",children:[l.jsx("span",{className:"sr-only",children:"Search"}),l.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})]}),l.jsxs("div",{className:"hidden lg:flex items-center",children:[l.jsx("span",{className:"text-base font-normal text-gray-500 mr-5",children:"Open source ❤️"}),l.jsx("div",{className:"-mb-1",children:l.jsx("a",{className:"github-button",href:"#","data-color-scheme":"no-preference: dark; light: light; dark: light;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star themesberg/windster-tailwind-css-dashboard on GitHub",children:"Star"})})]}),l.jsxs("a",{href:"#",className:"hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3",children:[l.jsx("svg",{className:"svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"gem",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:l.jsx("path",{fill:"currentColor",d:"M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"})}),"Upgrade to Pro"]})]})]})})}),l.jsxs("div",{className:"flex overflow-hidden bg-white pt-16",children:[l.jsx("aside",{id:"sidebar",className:"fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75","aria-label":"Sidebar",children:l.jsx("div",{className:"relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0",children:l.jsx("div",{className:"flex-1 flex flex-col pt-5 pb-4 overflow-y-auto",children:l.jsxs("div",{className:"flex-1 px-3 bg-white divide-y space-y-1",children:[l.jsxs("ul",{className:"space-y-2 pb-2",children:[l.jsx("li",{children:l.jsxs("form",{action:"#",method:"GET",className:"lg:hidden",children:[l.jsx("label",{htmlFor:"mobile-search",className:"sr-only",children:"Search"}),l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:l.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})}),l.jsx("input",{type:"text",name:"email",id:"mobile-search",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5",placeholder:"Search"})]})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group",children:[l.jsxs("svg",{className:"w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("path",{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}),l.jsx("path",{d:"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"})]}),l.jsx("span",{className:"ml-3",children:"Dashboard"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",target:"_blank",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Kanban"}),l.jsx("span",{className:"bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full",children:"Pro"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",target:"_blank",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsxs("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("path",{d:"M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"}),l.jsx("path",{d:"M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"})]}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Inbox"}),l.jsx("span",{className:"bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full",children:"Pro"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Users"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",clipRule:"evenodd"})}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Products"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",clipRule:"evenodd"})}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Sign In"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",clipRule:"evenodd"})}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Sign Up"})]})})]}),l.jsxs("div",{className:"space-y-2 pt-2",children:[l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2",children:[l.jsx("svg",{className:"w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"gem",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:l.jsx("path",{fill:"currentColor",d:"M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"})}),l.jsx("span",{className:"ml-4",children:"Upgrade to Pro"})]}),l.jsxs("a",{href:"#",target:"_blank",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2",children:[l.jsxs("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),l.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",clipRule:"evenodd"})]}),l.jsx("span",{className:"ml-3",children:"Documentation"})]}),l.jsxs("a",{href:"#",target:"_blank",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})}),l.jsx("span",{className:"ml-3",children:"Components"})]}),l.jsxs("a",{href:"#",target:"_blank",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",clipRule:"evenodd"})}),l.jsx("span",{className:"ml-3",children:"Help"})]})]})]})})})}),l.jsx("div",{className:"bg-gray-900 opacity-50 hidden fixed inset-0 z-10",id:"sidebarBackdrop"}),l.jsxs("div",{id:"main-content",className:"h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64",children:[l.jsx("main",{children:l.jsxs("div",{className:"pt-6 px-4",children:[l.jsxs("div",{className:"w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4",children:[l.jsxs("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsxs("div",{className:"flex-shrink-0",children:[l.jsx("span",{className:"text-2xl sm:text-3xl leading-none font-bold text-gray-900",children:"$45,385"}),l.jsx("h3",{className:"text-base font-normal text-gray-500",children:"Sales this week"})]}),l.jsxs("div",{className:"flex items-center justify-end flex-1 text-green-500 text-base font-bold",children:["12.5%",l.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]}),l.jsx("div",{id:"main-chart"})]}),l.jsxs("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ",children:[l.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:"Latest Transactions"}),l.jsx("span",{className:"text-base font-normal text-gray-500",children:"This is a list of latest transactions"})]}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("a",{href:"#",className:"text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2",children:"View all"})})]}),l.jsx("div",{className:"flex flex-col mt-8",children:l.jsx("div",{className:"overflow-x-auto rounded-lg",children:l.jsx("div",{className:"align-middle inline-block min-w-full",children:l.jsx("div",{className:"shadow overflow-hidden sm:rounded-lg",children:l.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[l.jsx("thead",{className:"bg-gray-50",children:l.jsxs("tr",{children:[l.jsx("th",{scope:"col",className:"p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Transaction"}),l.jsx("th",{scope:"col",className:"p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date & Time"}),l.jsx("th",{scope:"col",className:"p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Amount"})]})}),l.jsxs("tbody",{className:"bg-white",children:[l.jsxs("tr",{children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900",children:["Payment from ",l.jsx("span",{className:"font-semibold",children:"Bonnie Green"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 23 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$2300"})]}),l.jsxs("tr",{className:"bg-gray-50",children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left",children:["Payment refund to ",l.jsx("span",{className:"font-semibold",children:"#00910"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 23 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"-$670"})]}),l.jsxs("tr",{children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900",children:["Payment failed from ",l.jsx("span",{className:"font-semibold",children:"#087651"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 18 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$234"})]}),l.jsxs("tr",{className:"bg-gray-50",children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left",children:["Payment from ",l.jsx("span",{className:"font-semibold",children:"Lana Byrd"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 15 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$5000"})]}),l.jsxs("tr",{children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900",children:["Payment from ",l.jsx("span",{className:"font-semibold",children:"Jese Leos"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 15 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$2300"})]}),l.jsxs("tr",{className:"bg-gray-50",children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left",children:["Payment from ",l.jsx("span",{className:"font-semibold",children:"THEMESBERG LLC"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 11 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$560"})]}),l.jsxs("tr",{children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900",children:["Payment from ",l.jsx("span",{className:"font-semibold",children:"Lana Lysle"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 6 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$1437"})]})]})]})})})})})]})]}),l.jsxs("div",{className:"mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:[l.jsx("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ",children:l.jsxs("div",{className:"flex items-center",children:[l.jsxs("div",{className:"flex-shrink-0",children:[l.jsx("span",{className:"text-2xl sm:text-3xl leading-none font-bold text-gray-900",children:"2,340"}),l.jsx("h3",{className:"text-base font-normal text-gray-500",children:"New products this week"})]}),l.jsxs("div",{className:"ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold",children:["14.6%",l.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})}),l.jsx("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ",children:l.jsxs("div",{className:"flex items-center",children:[l.jsxs("div",{className:"flex-shrink-0",children:[l.jsx("span",{className:"text-2xl sm:text-3xl leading-none font-bold text-gray-900",children:"5,355"}),l.jsx("h3",{className:"text-base font-normal text-gray-500",children:"Visitors this week"})]}),l.jsxs("div",{className:"ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold",children:["32.9%",l.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})}),l.jsx("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ",children:l.jsxs("div",{className:"flex items-center",children:[l.jsxs("div",{className:"flex-shrink-0",children:[l.jsx("span",{className:"text-2xl sm:text-3xl leading-none font-bold text-gray-900",children:"385"}),l.jsx("h3",{className:"text-base font-normal text-gray-500",children:"User signups this week"})]}),l.jsxs("div",{className:"ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold",children:["-2.7%",l.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z",clipRule:"evenodd"})})]})]})})]}),l.jsxs("div",{className:"grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4",children:[l.jsxs("div",{className:"bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("h3",{className:"text-xl font-bold leading-none text-gray-900",children:"Latest Customers"}),l.jsx("a",{href:"#",className:"text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2",children:"View all"})]}),l.jsx("div",{className:"flow-root",children:l.jsxs("ul",{role:"list",className:"divide-y divide-gray-200",children:[l.jsx("li",{className:"py-3 sm:py-4",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{className:"h-8 w-8 rounded-full",src:"https://demo.themesberg.com/windster/images/users/neil-sims.png",alt:"Neil image"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:"Neil Sims"}),l.jsx("p",{className:"text-sm text-gray-500 truncate",children:l.jsx("a",{href:"/cdn-cgi/l/email-protection",className:"__cf_email__","data-cfemail":"17727a767e7b57607e7973646372653974787a",children:"[email protected]"})})]}),l.jsx("div",{className:"inline-flex items-center text-base font-semibold text-gray-900",children:"$320"})]})}),l.jsx("li",{className:"py-3 sm:py-4",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{className:"h-8 w-8 rounded-full",src:"https://demo.themesberg.com/windster/images/users/bonnie-green.png",alt:"Neil image"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:"Bonnie Green"}),l.jsx("p",{className:"text-sm text-gray-500 truncate",children:l.jsx("a",{href:"/cdn-cgi/l/email-protection",className:"__cf_email__","data-cfemail":"d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9",children:"[email protected]"})})]}),l.jsx("div",{className:"inline-flex items-center text-base font-semibold text-gray-900",children:"$3467"})]})}),l.jsx("li",{className:"py-3 sm:py-4",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{className:"h-8 w-8 rounded-full",src:"https://demo.themesberg.com/windster/images/users/michael-gough.png",alt:"Neil image"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:"Michael Gough"}),l.jsx("p",{className:"text-sm text-gray-500 truncate",children:l.jsx("a",{href:"/cdn-cgi/l/email-protection",className:"__cf_email__","data-cfemail":"57323a363e3b17203e3933242332257934383a",children:"[email protected]"})})]}),l.jsx("div",{className:"inline-flex items-center text-base font-semibold text-gray-900",children:"$67"})]})}),l.jsx("li",{className:"py-3 sm:py-4",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{className:"h-8 w-8 rounded-full",src:"https://demo.themesberg.com/windster/images/users/thomas-lean.png",alt:"Neil image"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:"Thomes Lean"}),l.jsx("p",{className:"text-sm text-gray-500 truncate",children:l.jsx("a",{href:"/cdn-cgi/l/email-protection",className:"__cf_email__","data-cfemail":"284d45494144685f41464c5b5c4d5a064b4745",children:"[email protected]"})})]}),l.jsx("div",{className:"inline-flex items-center text-base font-semibold text-gray-900",children:"$2367"})]})}),l.jsx("li",{className:"pt-3 sm:pt-4 pb-0",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{className:"h-8 w-8 rounded-full",src:"https://demo.themesberg.com/windster/images/users/lana-byrd.png",alt:"Neil image"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:"Lana Byrd"}),l.jsx("p",{className:"text-sm text-gray-500 truncate",children:l.jsx("a",{href:"/cdn-cgi/l/email-protection",className:"__cf_email__","data-cfemail":"a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf",children:"[email protected]"})})]}),l.jsx("div",{className:"inline-flex items-center text-base font-semibold text-gray-900",children:"$367"})]})})]})})]}),l.jsxs("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ",children:[l.jsx("h3",{className:"text-xl leading-none font-bold text-gray-900 mb-10",children:"Acquisition Overview"}),l.jsx("div",{className:"block w-full overflow-x-auto",children:l.jsxs("table",{className:"items-center w-full bg-transparent border-collapse",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{className:"px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap",children:"Top Channels"}),l.jsx("th",{className:"px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap",children:"Users"}),l.jsx("th",{className:"px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"})]})}),l.jsxs("tbody",{className:"divide-y divide-gray-100",children:[l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left",children:"Organic Search"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4",children:"5,649"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"30%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-cyan-600 h-2 rounded-sm",style:{width:"30%"}})})})]})})]}),l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left",children:"Referral"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4",children:"4,025"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"24%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-orange-300 h-2 rounded-sm",style:{width:"24%"}})})})]})})]}),l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left",children:"Direct"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4",children:"3,105"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"18%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-teal-400 h-2 rounded-sm",style:{width:"18%"}})})})]})})]}),l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left",children:"Social"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4",children:"1251"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"12%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-pink-600 h-2 rounded-sm",style:{width:"12%"}})})})]})})]}),l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left",children:"Other"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4",children:"734"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"9%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-indigo-600 h-2 rounded-sm",style:{width:"9%"}})})})]})})]}),l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left",children:"Email"}),l.jsx("td",{className:"border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0",children:"456"}),l.jsx("td",{className:"border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"7%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-purple-500 h-2 rounded-sm",style:{width:"7%"}})})})]})})]})]})]})})]})]})]})}),l.jsxs("footer",{className:"bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4",children:[l.jsxs("ul",{className:"flex items-center flex-wrap mb-6 md:mb-0",children:[l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",children:"Terms and conditions"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",children:"Privacy Policy"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",children:"Licensing"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",children:"Cookie Policy"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-sm font-normal text-gray-500 hover:underline",children:"Contact"})})]}),l.jsxs("div",{className:"flex sm:justify-center space-x-6",children:[l.jsx("a",{href:"#",className:"text-gray-500 hover:text-gray-900",children:l.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})}),l.jsx("a",{href:"#",className:"text-gray-500 hover:text-gray-900",children:l.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})})}),l.jsx("a",{href:"#",className:"text-gray-500 hover:text-gray-900",children:l.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})}),l.jsx("a",{href:"#",className:"text-gray-500 hover:text-gray-900",children:l.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})}),l.jsx("a",{href:"#",className:"text-gray-500 hover:text-gray-900",children:l.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",clipRule:"evenodd"})})})]})]}),l.jsxs("p",{className:"text-center text-sm text-gray-500 my-10",children:["© 2019-2021 ",l.jsx("a",{href:"#",className:"hover:underline",target:"_blank",children:"Themesberg"}),". All rights reserved."]})]})]})]})}function sg(){let e={floorName:"1st Floor",builtUpArea:400,fromData:"2022-01-05"},t={floorName:"2nd Floor",builtUpArea:500,fromData:"2022-01-05"};const n=new Map;return n.set("obj1",e),n.set("obj2",t),console.log("Map printed...",n),l.jsx("div",{children:"Ds"})}function ig(e){return Ze({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"}}]})(e)}function ag(e){return Ze({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M232 840h560V536H232v304zm280-226a48.01 48.01 0 0 1 28 87v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 0 1 28-87z"}},{tag:"path",attr:{d:"M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"}},{tag:"path",attr:{d:"M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304z"}}]})(e)}function og(e){return Ze({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5Zm-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z"}}]})(e)}function cg(e){return Ze({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z"}},{tag:"path",attr:{d:"M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z"}}]})(e)}function ug(e){return Ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Calendar_Date"},child:[{tag:"path",attr:{d:`M18.435,4.955h-1.94v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-7v-1.41
            c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-1.93c-1.38,0-2.5,1.12-2.5,2.5v11c0,1.38,1.12,2.5,2.5,2.5h12.87
            c1.38,0,2.5-1.12,2.5-2.5v-11C20.935,6.075,19.815,4.955,18.435,4.955z M19.935,18.455c0,0.83-0.67,1.5-1.5,1.5H5.565
            c-0.83,0-1.5-0.67-1.5-1.5v-8.42h15.87V18.455z M19.935,9.035H4.065v-1.58c0-0.83,0.67-1.5,1.5-1.5h1.93v0.59
            c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59h7v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59
            h1.94c0.83,0,1.5,0.67,1.5,1.5V9.035z`}},{tag:"path",attr:{d:`M11.492,17.173v-3.46c0-0.059-0.064-0.095-0.114-0.064l-0.638,0.392
            c-0.1,0.061-0.228-0.01-0.228-0.128v-0.651c0-0.105,0.055-0.203,0.146-0.257l0.764-0.457c0.047-0.028,0.1-0.043,0.154-0.043h0.626
            c0.166,0,0.3,0.134,0.3,0.3v4.367c0,0.166-0.134,0.3-0.3,0.3h-0.409C11.626,17.473,11.492,17.339,11.492,17.173z`}}]}]})(e)}function dg(e){var t;return console.log("data at table view..",e==null?void 0:e.data),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center",children:[l.jsx("div",{className:"font-bold text-lg mb-4 pr-10 flex-1",children:"# Form Fields "}),l.jsx("div",{className:"form-group col-span-12 md:col-span-3 mb-4 md:px-2 flex-1 text-right pr-20",children:l.jsx("button",{onClick:e==null?void 0:e.openFirstModal,type:"button",className:"rounded-md border-2 border-black px-20 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white",children:"Add Field"})})]}),l.jsxs("div",{className:"h-[80vh] overflow-y-scroll",children:[l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-md",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"#"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Type"})]})}),l.jsx("tbody",{children:Array.from(e==null?void 0:e.data).map(([n,r],s)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s+1}),l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("div",{className:"w-12 h-12 inline-flex rounded-full shadow-xl border p-2 justify-center items-center",children:"A"}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:r.name})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r.type})]}))})]}),l.jsxs("div",{className:"flex justify-between mt-4",children:[(e==null?void 0:e.codeView)!==null&&l.jsx("button",{onClick:()=>e==null?void 0:e.openThirdModal(),type:"button",className:"rounded-md bg-black px-20 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"View Code"}),((t=Array.from(e==null?void 0:e.data))==null?void 0:t.length)!==0&&l.jsx("button",{onClick:()=>e==null?void 0:e.generateForm(),type:"button",className:"rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Save"})]})]})]})}function mg(e,t,n){return{TEXT:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${n}')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${n} && formik.errors.${n} ? formik.errors.${n} : null}</span>
</div>`,EMAIL:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${n}')} type="email" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${n} && formik.errors.${n} ? formik.errors.${n} : null}</span>
</div>`,DESCRIPTION:`<div className="form-group col-span-12 grid grid-cols-12">
        <div className='col-span-12 md:col-span-6 mb-6 md:px-4'>
            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
            <textarea {...formik.getFieldProps('${n}')} class="h-40 resize form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"></textarea>
            <span className="text-red-600 absolute text-xs">{formik.touched.${n} && formik.errors.${n} ? formik.errors.${n} : null}</span>
        </div>
    </div>`,PASSWORD:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${n}')} type="password" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${n} && formik.errors.${n} ? formik.errors.${n} : null}</span>
</div>`,NUMBER:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${n}')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${n} && formik.errors.${n} ? formik.errors.${n} : null}</span>
</div>`,LIST:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <label className={'form-label inline-block mb-1 text-gray-600 text-sm font-semibold'}>${n}</label>
        <select name="zone" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer'}
        >
            <option value="1" >Option 1</option>
            <option value="2" >Option 2</option>

        </select>
</div>`,DATE:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${n}')} type="date" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${n} && formik.errors.${n} ? formik.errors.${n} : null}</span>
</div>`,MEDIA:` <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">${n}</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
        <span className="text-red-600 absolute text-xs">{formik.touched.${n} && formik.errors.${n} ? formik.errors.${n} : null}</span>
    </div>`,BOOLEAN:` <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <div class="text-sm font-medium text-gray-900 dark:text-gray-300">${n}</div>
        <label class="relative inline-flex items-center cursor-pointer mt-2">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    </div>`,JSON:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${n}')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${n} && formik.errors.${n} ? formik.errors.${n} : null}</span>
</div>`}[e]}function fg(e){console.log("inside form engine.....",e);let t="";e.forEach((i,a)=>{t=`${t}
         ${i.name}: yup.string(),`});let n="";e.forEach((i,a)=>{n=`${n}
        ${i.name}: '',`});let r="";return e.forEach((i,a)=>{let o=mg(i.id,i.type,i.name);r=`${r}
       ${o}
       `}),`
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'


function DynamicForm(props) {

    let validationSchema = yup.object({
        ${t}
    })

    const initialValues = {
      ${n}
    };

    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log('form values', values)
        }
        , validationSchema
    })

    const handleOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value
    };

    return (
        <>
            <div  className="block md:p-4 w-full md:py-6 rounded-lg mx-auto  shadow-xl bg-white px-4 sm:px-0">
                <form onChange={handleOnChange} onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-12  sm:space-x-2">
                ${r}

                <div className=' text-right col-span-12 mt-10'>
                    <button type="submit" className="cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next</button>
                </div>

        </div>
                </form>

            </div>
        </>
    )
}

export default DynamicForm`}function pg(e){return l.jsx("div",{className:"col-span-5 pr-2 pl-2 mt-2",children:l.jsxs("div",{onClick:()=>e==null?void 0:e.openSecondModal(e==null?void 0:e.id,e==null?void 0:e.type),className:"flex border border-gray-300 px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-50",children:[l.jsx("div",{className:"flex-initial flex justify-center items-center",children:e==null?void 0:e.icon}),l.jsxs("div",{className:"inline-block p-2 rounded-lg",children:[l.jsx("div",{className:"font-semibold text-gray-700 text-sm",children:e==null?void 0:e.title}),l.jsx("div",{className:"text-xs text-gray-500",children:e==null?void 0:e.desc})]})]})})}function hg(){const[e,t]=j.useState(new Map),[n,r]=j.useState(null),[s,i]=j.useState(null),[a,o]=j.useState(null),[c,u]=j.useState(null),x=()=>{const m=new Map(e);m.set(n,{id:n,type:s,name:a}),t(m),secondModal.close()};console.log("selected field",e);const h=()=>{d.showModal()},p=(m,f)=>{console.log("open second",m),r(m),i(f),d.close(),secondModal.showModal()},b=()=>{thirdModal.showModal()},N=()=>{let m=fg(e);u(m),console.log("generated form....",m)},w=()=>{navigator.clipboard.writeText(c).then(()=>{console.log("Text copied to clipboard")}).catch(m=>{console.error("Failed to copy text: ",m)})},_=[{type:"text",title:"Text",id:"TEXT",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-green-50 text-green-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-green-300 rounded-md",children:"Ab"})},{type:"email",title:"Email",id:"EMAIL",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-red-50 text-red-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-red-300 rounded-md",children:"@"})},{type:"description",title:"Description",id:"DESCRIPTION",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md",children:l.jsx(og,{className:"inline text-blue-700 font-semibold"})})},{type:"password",title:"Password",id:"PASSWORD",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md",children:l.jsx(ag,{className:" text-blue-700"})})},{type:"number",title:"Number",id:"NUMBER",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-red-50 text-red-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-red-300 rounded-md ",children:"123"})},{type:"list",title:"List",id:"LIST",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-indigo-50 text-indigo-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-indigo-300 rounded-md",children:l.jsx(ig,{className:" text-blue-700 font-semibold"})})},{type:"date",title:"Date",id:"DATE",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-yellow-50 text-indigo-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-yellow-300 rounded-md",children:l.jsx(ug,{className:" text-blue-700 font-semibold"})})},{type:"media",title:"Media",id:"MEDIA",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-indigo-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md",children:l.jsx(W3,{className:"inline font-semibold"})})},{type:"boolean",title:"Boolean",id:"BOOLEAN",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-green-50 text-green-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-green-300 rounded-md",children:l.jsx(cg,{className:"inline font-semibold"})})},{type:"json",title:"Json",id:"JSON",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md",children:"{...}"})}];return l.jsxs(l.Fragment,{children:[l.jsx(dg,{data:e,generateForm:N,openThirdModal:b,codeView:c,openFirstModal:h}),l.jsxs("div",{className:" h-auto w-auto fixed bottom-10 right-10",children:[l.jsxs("dialog",{className:"relative h-4/5 w-1/2 p-0",id:"d",children:[l.jsxs("div",{className:"sticky top-0 w-full flex bg-gray-100 p-4",children:[l.jsxs("div",{className:"flex-1 flex",children:[" ",l.jsx("div",{className:"w-8 h-8 rounded-sm bg-indigo-600 text-white flex justify-center items-center",children:"FM"})," ",l.jsx("span",{className:"font-semibold ml-2",children:"Form Generator"})]}),l.jsxs("div",{className:"flex-1 flex justify-end",children:["  ",l.jsx("button",{onClick:()=>d.close(),className:"text-xl p-2 w-8 h-8 rounded-lg bg-white-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center",children:"x"})]})]}),l.jsx("div",{className:"mt-10"}),l.jsx("div",{className:"grid grid-cols-12",children:_==null?void 0:_.map((m,f)=>l.jsxs(l.Fragment,{children:[l.jsx(pg,{desc:m==null?void 0:m.desc,title:m==null?void 0:m.title,type:m==null?void 0:m.type,id:m==null?void 0:m.id,icon:m==null?void 0:m.icon,index:f,openSecondModal:p,collectInput:x}),l.jsx("div",{className:"mt-10"})]}))})]}),l.jsxs("dialog",{className:"relative h-4/5 w-1/2 p-0",id:"secondModal",children:[l.jsxs("div",{className:"sticky top-0 w-full flex bg-gray-100 p-4",children:[l.jsxs("div",{className:"flex-1 flex",children:[" ",l.jsx("div",{className:"w-8 h-8 rounded-sm bg-indigo-600 text-white flex justify-center items-center",children:"FM"})," ",l.jsx("span",{className:"font-semibold ml-2",children:s})]}),l.jsxs("div",{className:"flex-1 flex justify-end",children:["  ",l.jsx("button",{onClick:()=>secondModal.close(),className:"text-xl p-2 w-8 h-8 rounded-lg bg-white-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center",children:"x"})]})]}),l.jsx("div",{className:"mt-10"}),l.jsx("div",{className:"grid grid-cols-12",children:l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Name",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("input",{value:a,onChange:m=>o(m.target.value),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter name"})]})}),l.jsx("div",{className:"p-4",children:l.jsx("button",{onClick:()=>x(),type:"button",className:"rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Finish"})})]}),l.jsxs("dialog",{className:"relative h-4/5 w-1/2 p-0",id:"thirdModal",children:[l.jsxs("div",{className:"sticky top-0 w-full flex bg-gray-100 p-4",children:[l.jsxs("div",{className:"flex-1 flex",children:[" ",l.jsx("div",{className:"w-8 h-8 rounded-sm bg-indigo-600 text-white flex justify-center items-center",children:"FM"})," ",l.jsx("span",{className:"font-semibold ml-2",children:"Form Code"})]}),l.jsxs("div",{className:"flex-1 flex justify-end",children:[l.jsx("button",{onClick:w,type:"button absolute top-10",className:"rounded-full w-10 flex justify-center items-center h-10  border-2 border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white hover:scale-105 mr-10",children:"</>"}),"  ",l.jsx("button",{onClick:()=>thirdModal.close(),className:"text-xl p-2 w-8 h-8 rounded-lg bg-red-50 border border-red-200 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center",children:"x"})]})]}),l.jsx("div",{className:"bg-gray-100 p-10",children:l.jsxs("pre",{children:[" ",c]})})]})]})]})}function xg(e){let t=kc({name:Wt(),is_armed_force:Wt(),email:Wt(),Postal_address:Wt(),Document:Wt(),mobile:Wt()});const r=R1({initialValues:{name:"",is_armed_force:"",email:"",Postal_address:"",Document:"",mobile:""},enableReinitialize:!0,onSubmit:i=>{console.log("form values",i)},validationSchema:t}),s=i=>{i.target.name,i.target.value};return l.jsx(l.Fragment,{children:l.jsx("div",{className:"block md:p-4 w-full md:py-6 rounded-lg mx-auto  shadow-xl bg-white px-4 sm:px-0",children:l.jsx("form",{onChange:s,onSubmit:r.handleSubmit,children:l.jsxs("div",{className:"grid grid-cols-12  sm:space-x-2",children:[l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["name",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("input",{...r.getFieldProps("name"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.name&&r.errors.name?r.errors.name:null})]}),l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsx("div",{class:"text-sm font-medium text-gray-900 dark:text-gray-300",children:"is_armed_force"}),l.jsxs("label",{class:"relative inline-flex items-center cursor-pointer mt-2",children:[l.jsx("input",{type:"checkbox",value:"",class:"sr-only peer"}),l.jsx("div",{class:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"})]})]}),l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["email",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("input",{...r.getFieldProps("email"),type:"email",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.email&&r.errors.email?r.errors.email:null})]}),l.jsx("div",{className:"form-group col-span-12 grid grid-cols-12",children:l.jsxs("div",{className:"col-span-12 md:col-span-6 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Postal_address",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("textarea",{...r.getFieldProps("Postal_address"),class:"h-40 resize form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.Postal_address&&r.errors.Postal_address?r.errors.Postal_address:null})]})}),l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsx("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",for:"file_input",children:"Document"}),l.jsx("input",{class:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400","aria-describedby":"file_input_help",id:"file_input",type:"file"}),l.jsx("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help",children:"SVG, PNG, JPG or GIF (MAX. 800x400px)."}),l.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.Document&&r.errors.Document?r.errors.Document:null})]}),l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["mobile",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("input",{...r.getFieldProps("mobile"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.mobile&&r.errors.mobile?r.errors.mobile:null})]}),l.jsx("div",{className:" text-right col-span-12 mt-10",children:l.jsx("button",{type:"submit",className:"cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:"Save & Next"})})]})})})})}function gg(){return l.jsxs(l.Fragment,{children:[l.jsx("div",{children:"AbsolutePath"}),l.jsx(fe,{code:`
      // filename - jsconfig.json
      {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    }
  }
`})]})}function vg(){const[e,t]=j.useState(!1);l1();const n=[{icon:l.jsx(Wn,{size:14}),menuName:"Components",path:null,subMenuStatus:!0,subMenu:[{menuName:"Button",path:"/button",subMenu:[]},{menuName:"Avatar",path:"/avatar",subMenu:[]},{menuName:"Card",path:"/card",subMenu:[]},{menuName:"Signup",path:"/signup",subMenu:[]},{menuName:"Signin",path:"/signin",subMenu:[]},{menuName:"Input",path:"/input",subMenu:[]},{menuName:"Chat",path:"/chat",subMenu:[]}]},{icon:l.jsx(Wn,{size:14}),menuName:"Pages",path:null,subMenuStatus:!0,subMenu:[{menuName:"Blog Page",path:"/blog-page",subMenu:[]},{menuName:"AboutUs Page",path:"/aboutus-page",subMenu:[]},{menuName:"404 Page",path:"/error404-page",subMenu:[]},{menuName:"Landing Page",path:"/landing-page",subMenu:[]},{menuName:"Pricing Page",path:"/pricing-page",subMenu:[]},{menuName:"Contact Page",path:"/contact-page",subMenu:[]},{menuName:"Table Page",path:"/table-page",subMenu:[]}]},{icon:l.jsx(Wn,{size:14}),menuName:"Layout",path:null,subMenuStatus:!0,subMenu:[{menuName:"Bare Layout",path:"/bare-layout",subMenu:[]}]},{icon:l.jsx(Wn,{size:14}),menuName:"Functions",path:null,subMenuStatus:!0,subMenu:[{menuName:"Axio Interceptors",path:"/axiosinterceptors",subMenu:[]},{menuName:"PowerUps",path:"/powerups",subMenu:[]},{menuName:"ScrollHandle",path:"/scroll-handle",subMenu:[]},{menuName:"Vite-Config",path:"/vite-config",subMenu:[]}]},{icon:l.jsx(Wn,{size:14}),menuName:"Meta Data",path:null,subMenuStatus:!0,subMenu:[{menuName:"Technologies",path:"/technologies",subMenu:[]},{menuName:"Resources",path:"/resources",subMenu:[]},{menuName:"Libraries",path:"/libraries",subMenu:[]},{menuName:"Essentials",path:"/essentials",subMenu:[]}]},{icon:l.jsx(Wn,{size:14}),menuName:"Delete",path:null,subMenuStatus:!0,subMenu:[{menuName:"Admin Layout",path:"/admin-layout",subMenu:[]},{menuName:"Form Generator",path:"/form-generator",subMenu:[]}]}];return l.jsxs("div",{children:[l.jsxs("div",{className:"md:hidden",children:[!e&&l.jsx("button",{onClick:()=>t(!0),type:"button",className:"inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ",children:l.jsx("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})}),e&&l.jsx("button",{onClick:()=>t(!1),type:"button",className:"inline-flex items-center  mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:l.jsx("span",{className:"px-4 py-2 rounded-lg  font-semibold hover:bg-gray-100",children:"X"})})]}),l.jsx("div",{className:"p-4 sm:ml-64 h-screen overflow-x-hidden overflow-y-auto",children:l.jsxs(i1,{children:[l.jsx(Y,{path:"/test/:id",element:l.jsx(T9,{})}),l.jsx(Y,{path:"/",element:l.jsx(Wu,{})}),l.jsx(Y,{path:"/button",element:l.jsx(Y3,{})}),l.jsx(Y,{path:"/avatar",element:l.jsx(Ip,{})}),l.jsx(Y,{path:"/card",element:l.jsx(Wu,{})}),l.jsx(Y,{path:"/signup",element:l.jsx(Rp,{})}),l.jsx(Y,{path:"/signin",element:l.jsx(Vp,{})}),l.jsx(Y,{path:"/input",element:l.jsx(S9,{})}),l.jsx(Y,{path:"/chat",element:l.jsx(rg,{})}),l.jsx(Y,{path:"/blog-page",element:l.jsx(Up,{})}),l.jsx(Y,{path:"/aboutus-page",element:l.jsx(H9,{})}),l.jsx(Y,{path:"/error404-page",element:l.jsx(Z9,{})}),l.jsx(Y,{path:"/landing-page",element:l.jsx(W9,{})}),l.jsx(Y,{path:"/pricing-page",element:l.jsx(Y9,{})}),l.jsx(Y,{path:"/contact-page",element:l.jsx(K9,{})}),l.jsx(Y,{path:"/table-page",element:l.jsx(J9,{})}),l.jsx(Y,{path:"/bare-layout",element:l.jsx(_9,{})}),l.jsx(Y,{path:"/axiosinterceptors",element:l.jsx(F9,{})}),l.jsx(Y,{path:"/powerups",element:l.jsx(D9,{})}),l.jsx(Y,{path:"/scroll-handle",element:l.jsx(eg,{})}),l.jsx(Y,{path:"/vite-config",element:l.jsx(gg,{})}),l.jsx(Y,{path:"/technologies",element:l.jsx(O9,{})}),l.jsx(Y,{path:"/resources",element:l.jsx(I9,{})}),l.jsx(Y,{path:"/libraries",element:l.jsx(R9,{})}),l.jsx(Y,{path:"/essentials",element:l.jsx(V9,{})}),l.jsx(Y,{path:"/admin-layout",element:l.jsx(lg,{})}),l.jsx(Y,{path:"/ds",element:l.jsx(sg,{})}),l.jsx(Y,{path:"/df",element:l.jsx(xg,{})}),l.jsx(Y,{path:"/form-generator",element:l.jsx(hg,{})})]})}),l.jsxs("aside",{className:`absolute left-0 top-10 transition-all z-2 flex w-screen md:w-64 md:h-screen md:px-5 md:py-8 ${e?"h-[80vh]":"h-0"} flex-col  border-r bg-gray-200 ${e&&"px-5 py-8"} overflow-hidden`,children:[l.jsx("a",{href:"#",children:l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("div",{className:"mt-6 flex flex-1 flex-col justify-between",children:l.jsx("nav",{className:"-mx-3 space-y-6 ",children:l.jsx("div",{className:"space-y-3 ",children:n==null?void 0:n.map((r,s)=>{var i;return l.jsx(P9,{setshowSidebar:t,title:r.menuName,path:r==null?void 0:r.path,subMenu:r==null?void 0:r.subMenu,subMenuStatus:((i=r==null?void 0:r.subMenu)==null?void 0:i.length)!=0,icon:l.jsx(z9,{size:14})},`sidebar_menu${s}`)})})})})]})]})}function yg(){const[e,t]=j.useState(!0),n={showCodeButton:e,setshowCodeButton:t};return l.jsx(l.Fragment,{children:l.jsx(qd.Provider,{value:n,children:l.jsx("div",{onDoubleClick:()=>t(!e),children:l.jsx(Op,{children:l.jsx(vg,{})})})})})}ra.createRoot(document.getElementById("root")).render(l.jsx(Ve.StrictMode,{children:l.jsx(yg,{})}))});export default bg();
