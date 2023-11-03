var rm=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var jg=rm((Ke,Qe)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var z0={exports:{}},Os={},O0={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),sm=Symbol.for("react.portal"),im=Symbol.for("react.fragment"),am=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),cm=Symbol.for("react.provider"),um=Symbol.for("react.context"),dm=Symbol.for("react.forward_ref"),mm=Symbol.for("react.suspense"),fm=Symbol.for("react.memo"),pm=Symbol.for("react.lazy"),_c=Symbol.iterator;function hm(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var I0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D0=Object.assign,R0={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=R0,this.updater=n||I0}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function V0(){}V0.prototype=Nr.prototype;function co(e,t,n){this.props=e,this.context=t,this.refs=R0,this.updater=n||I0}var uo=co.prototype=new V0;uo.constructor=co;D0(uo,Nr.prototype);uo.isPureReactComponent=!0;var Ac=Array.isArray,B0=Object.prototype.hasOwnProperty,mo={current:null},U0={key:!0,ref:!0,__self:!0,__source:!0};function H0(e,t,n){var r,s={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)B0.call(t,r)&&!U0.hasOwnProperty(r)&&(s[r]=t[r]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)s[r]===void 0&&(s[r]=o[r]);return{$$typeof:Nl,type:e,key:i,ref:a,props:s,_owner:mo.current}}function xm(e,t){return{$$typeof:Nl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nl}function gm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lc=/\/+/g;function ji(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gm(""+e.key):t.toString(36)}function Gl(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Nl:case sm:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+ji(a,0):r,Ac(s)?(n="",e!=null&&(n=e.replace(Lc,"$&/")+"/"),Gl(s,t,n,"",function(u){return u})):s!=null&&(fo(s)&&(s=xm(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Lc,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",Ac(e))for(var o=0;o<e.length;o++){i=e[o];var c=r+ji(i,o);a+=Gl(i,t,n,c,s)}else if(c=hm(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=r+ji(i,o++),a+=Gl(i,t,n,c,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Tl(e,t,n){if(e==null)return e;var r=[],s=0;return Gl(e,r,"","",function(i){return t.call(n,i,s++)}),r}function vm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Yl={transition:null},ym={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:mo};G.Children={map:Tl,forEach:function(e,t,n){Tl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tl(e,function(){t++}),t},toArray:function(e){return Tl(e,function(t){return t})||[]},only:function(e){if(!fo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Nr;G.Fragment=im;G.Profiler=om;G.PureComponent=co;G.StrictMode=am;G.Suspense=mm;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ym;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=D0({},e.props),s=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=mo.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)B0.call(t,c)&&!U0.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:Nl,type:e.type,key:s,ref:i,props:r,_owner:a}};G.createContext=function(e){return e={$$typeof:um,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cm,_context:e},e.Consumer=e};G.createElement=H0;G.createFactory=function(e){var t=H0.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:dm,render:e}};G.isValidElement=fo;G.lazy=function(e){return{$$typeof:pm,_payload:{_status:-1,_result:e},_init:vm}};G.memo=function(e,t){return{$$typeof:fm,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Yl.transition;Yl.transition={};try{e()}finally{Yl.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return ze.current.useCallback(e,t)};G.useContext=function(e){return ze.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};G.useEffect=function(e,t){return ze.current.useEffect(e,t)};G.useId=function(){return ze.current.useId()};G.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return ze.current.useMemo(e,t)};G.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};G.useRef=function(e){return ze.current.useRef(e)};G.useState=function(e){return ze.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return ze.current.useTransition()};G.version="18.2.0";O0.exports=G;var j=O0.exports;const Be=zs(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=j,wm=Symbol.for("react.element"),Nm=Symbol.for("react.fragment"),jm=Object.prototype.hasOwnProperty,Cm=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,km={key:!0,ref:!0,__self:!0,__source:!0};function Z0(e,t,n){var r,s={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)jm.call(t,r)&&!km.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:wm,type:e,key:i,ref:a,props:s,_owner:Cm.current}}Os.Fragment=Nm;Os.jsx=Z0;Os.jsxs=Z0;z0.exports=Os;var l=z0.exports,ra={},W0={exports:{}},et={},q0={exports:{}},G0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,E){var $=C.length;C.push(E);e:for(;0<$;){var H=$-1>>>1,Z=C[H];if(0<s(Z,E))C[H]=E,C[$]=Z,$=H;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var E=C[0],$=C.pop();if($!==E){C[0]=$;e:for(var H=0,Z=C.length,ee=Z>>>1;H<ee;){var pe=2*(H+1)-1,Ce=C[pe],Te=pe+1,We=C[Te];if(0>s(Ce,$))Te<Z&&0>s(We,Ce)?(C[H]=We,C[Te]=$,H=Te):(C[H]=Ce,C[pe]=$,H=pe);else if(Te<Z&&0>s(We,$))C[H]=We,C[Te]=$,H=Te;else break e}}return E}function s(C,E){var $=C.sortIndex-E.sortIndex;return $!==0?$:C.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var c=[],u=[],h=1,x=null,f=3,b=!1,w=!1,N=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var E=n(u);E!==null;){if(E.callback===null)r(u);else if(E.startTime<=C)r(u),E.sortIndex=E.expirationTime,t(c,E);else break;E=n(u)}}function v(C){if(N=!1,g(C),!w)if(n(c)!==null)w=!0,U(k);else{var E=n(u);E!==null&&P(v,E.startTime-C)}}function k(C,E){w=!1,N&&(N=!1,p(O),O=-1),b=!0;var $=f;try{for(g(E),x=n(c);x!==null&&(!(x.expirationTime>E)||C&&!W());){var H=x.callback;if(typeof H=="function"){x.callback=null,f=x.priorityLevel;var Z=H(x.expirationTime<=E);E=e.unstable_now(),typeof Z=="function"?x.callback=Z:x===n(c)&&r(c),g(E)}else r(c);x=n(c)}if(x!==null)var ee=!0;else{var pe=n(u);pe!==null&&P(v,pe.startTime-E),ee=!1}return ee}finally{x=null,f=$,b=!1}}var A=!1,F=null,O=-1,T=5,S=-1;function W(){return!(e.unstable_now()-S<T)}function ve(){if(F!==null){var C=e.unstable_now();S=C;var E=!0;try{E=F(!0,C)}finally{E?V():(A=!1,F=null)}}else A=!1}var V;if(typeof m=="function")V=function(){m(ve)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,L=z.port2;z.port1.onmessage=ve,V=function(){L.postMessage(null)}}else V=function(){_(ve,0)};function U(C){F=C,A||(A=!0,V())}function P(C,E){O=_(function(){C(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||b||(w=!0,U(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var E=3;break;default:E=f}var $=f;f=E;try{return C()}finally{f=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,E){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var $=f;f=C;try{return E()}finally{f=$}},e.unstable_scheduleCallback=function(C,E,$){var H=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?H+$:H):$=H,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=$+Z,C={id:h++,callback:E,priorityLevel:C,startTime:$,expirationTime:Z,sortIndex:-1},$>H?(C.sortIndex=$,t(u,C),n(c)===null&&C===n(u)&&(N?(p(O),O=-1):N=!0,P(v,$-H))):(C.sortIndex=Z,t(c,C),w||b||(w=!0,U(k))),C},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(C){var E=f;return function(){var $=f;f=E;try{return C.apply(this,arguments)}finally{f=$}}}})(G0);q0.exports=G0;var Sm=q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0=j,Je=Sm;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K0=new Set,el={};function Pn(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(el[e]=t,e=0;e<t.length;e++)K0.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,Mm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$c={},Pc={};function Em(e){return la.call(Pc,e)?!0:la.call($c,e)?!1:Mm.test(e)?Pc[e]=!0:($c[e]=!0,!1)}function Tm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _m(e,t,n,r){if(t===null||typeof t>"u"||Tm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,s,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var po=/[\-:]([a-z])/g;function ho(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(po,ho);Ee[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(po,ho);Ee[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(po,ho);Ee[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function xo(e,t,n,r){var s=Ee.hasOwnProperty(t)?Ee[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_m(t,n,s,r)&&(n=null),r||s===null?Em(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=Y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),go=Symbol.for("react.strict_mode"),sa=Symbol.for("react.profiler"),Q0=Symbol.for("react.provider"),X0=Symbol.for("react.context"),vo=Symbol.for("react.forward_ref"),ia=Symbol.for("react.suspense"),aa=Symbol.for("react.suspense_list"),yo=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),J0=Symbol.for("react.offscreen"),Fc=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=Fc&&e[Fc]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Ci;function Dr(e){if(Ci===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ci=t&&t[1]||""}return`
`+Ci+e}var ki=!1;function Si(e,t){if(!e||ki)return"";ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,o=i.length-1;1<=a&&0<=o&&s[a]!==i[o];)o--;for(;1<=a&&0<=o;a--,o--)if(s[a]!==i[o]){if(a!==1||o!==1)do if(a--,o--,0>o||s[a]!==i[o]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=o);break}}}finally{ki=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function Am(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case qn:return"Portal";case sa:return"Profiler";case go:return"StrictMode";case ia:return"Suspense";case aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case X0:return(e.displayName||"Context")+".Consumer";case Q0:return(e._context.displayName||"Context")+".Provider";case vo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yo:return t=e.displayName||null,t!==null?t:oa(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return oa(e(t))}catch{}}return null}function Lm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oa(t);case 8:return t===go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function e2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $m(e){var t=e2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Al(e){e._valueTracker||(e._valueTracker=$m(e))}function t2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=e2(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function n2(e,t){t=t.checked,t!=null&&xo(e,"checked",t,!1)}function ua(e,t){n2(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?da(e,t.type,n):t.hasOwnProperty("defaultValue")&&da(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function da(e,t,n){(t!=="number"||os(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rr=Array.isArray;function ar(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ma(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ic(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Rr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function r2(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function l2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?l2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ll,s2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ll=Ll||document.createElement("div"),Ll.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ll.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pm=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){Pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function i2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function a2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=i2(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Fm=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,t){if(t){if(Fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,or=null,cr=null;function Rc(e){if(e=kl(e)){if(typeof ga!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Bs(t),ga(e.stateNode,e.type,t))}}function o2(e){or?cr?cr.push(e):cr=[e]:or=e}function c2(){if(or){var e=or,t=cr;if(cr=or=null,Rc(e),t)for(e=0;e<t.length;e++)Rc(t[e])}}function u2(e,t){return e(t)}function d2(){}var Mi=!1;function m2(e,t,n){if(Mi)return e(t,n);Mi=!0;try{return u2(e,t,n)}finally{Mi=!1,(or!==null||cr!==null)&&(d2(),c2())}}function nl(e,t){var n=e.stateNode;if(n===null)return null;var r=Bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var va=!1;if(Ot)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){va=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{va=!1}function zm(e,t,n,r,s,i,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Hr=!1,cs=null,us=!1,ya=null,Om={onError:function(e){Hr=!0,cs=e}};function Im(e,t,n,r,s,i,a,o,c){Hr=!1,cs=null,zm.apply(Om,arguments)}function Dm(e,t,n,r,s,i,a,o,c){if(Im.apply(this,arguments),Hr){if(Hr){var u=cs;Hr=!1,cs=null}else throw Error(M(198));us||(us=!0,ya=u)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vc(e){if(Fn(e)!==e)throw Error(M(188))}function Rm(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Vc(s),e;if(i===r)return Vc(s),t;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a){for(o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function p2(e){return e=Rm(e),e!==null?h2(e):null}function h2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=h2(e);if(t!==null)return t;e=e.sibling}return null}var x2=Je.unstable_scheduleCallback,Bc=Je.unstable_cancelCallback,Vm=Je.unstable_shouldYield,Bm=Je.unstable_requestPaint,de=Je.unstable_now,Um=Je.unstable_getCurrentPriorityLevel,wo=Je.unstable_ImmediatePriority,g2=Je.unstable_UserBlockingPriority,ds=Je.unstable_NormalPriority,Hm=Je.unstable_LowPriority,v2=Je.unstable_IdlePriority,Is=null,kt=null;function Zm(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Is,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Gm,Wm=Math.log,qm=Math.LN2;function Gm(e){return e>>>=0,e===0?32:31-(Wm(e)/qm|0)|0}var $l=64,Pl=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ms(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~s;o!==0?r=Vr(o):(i&=a,i!==0&&(r=Vr(i)))}else a=n&~s,a!==0?r=Vr(a):i!==0&&(r=Vr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),s=1<<n,r|=e[n],t&=~s;return r}function Ym(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Km(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-gt(i),o=1<<a,c=s[a];c===-1?(!(o&n)||o&r)&&(s[a]=Ym(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}}function ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function y2(){var e=$l;return $l<<=1,!($l&4194240)&&($l=64),e}function Ei(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Qm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-gt(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function No(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var X=0;function b2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var w2,jo,N2,j2,C2,wa=!1,Fl=[],Qt=null,Xt=null,Jt=null,rl=new Map,ll=new Map,Wt=[],Xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uc(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":rl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(t.pointerId)}}function Ar(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=kl(t),t!==null&&jo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Jm(e,t,n,r,s){switch(t){case"focusin":return Qt=Ar(Qt,e,t,n,r,s),!0;case"dragenter":return Xt=Ar(Xt,e,t,n,r,s),!0;case"mouseover":return Jt=Ar(Jt,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return rl.set(i,Ar(rl.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ll.set(i,Ar(ll.get(i)||null,e,t,n,r,s)),!0}return!1}function k2(e){var t=yn(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=f2(n),t!==null){e.blockedOn=t,C2(e.priority,function(){N2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xa=r,n.target.dispatchEvent(r),xa=null}else return t=kl(n),t!==null&&jo(t),e.blockedOn=n,!1;t.shift()}return!0}function Hc(e,t,n){Kl(e)&&n.delete(t)}function ef(){wa=!1,Qt!==null&&Kl(Qt)&&(Qt=null),Xt!==null&&Kl(Xt)&&(Xt=null),Jt!==null&&Kl(Jt)&&(Jt=null),rl.forEach(Hc),ll.forEach(Hc)}function Lr(e,t){e.blockedOn===t&&(e.blockedOn=null,wa||(wa=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,ef)))}function sl(e){function t(s){return Lr(s,e)}if(0<Fl.length){Lr(Fl[0],e);for(var n=1;n<Fl.length;n++){var r=Fl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Lr(Qt,e),Xt!==null&&Lr(Xt,e),Jt!==null&&Lr(Jt,e),rl.forEach(t),ll.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)k2(n),n.blockedOn===null&&Wt.shift()}var ur=Vt.ReactCurrentBatchConfig,fs=!0;function tf(e,t,n,r){var s=X,i=ur.transition;ur.transition=null;try{X=1,Co(e,t,n,r)}finally{X=s,ur.transition=i}}function nf(e,t,n,r){var s=X,i=ur.transition;ur.transition=null;try{X=4,Co(e,t,n,r)}finally{X=s,ur.transition=i}}function Co(e,t,n,r){if(fs){var s=Na(e,t,n,r);if(s===null)Ii(e,t,r,ps,n),Uc(e,r);else if(Jm(s,e,t,n,r))r.stopPropagation();else if(Uc(e,r),t&4&&-1<Xm.indexOf(e)){for(;s!==null;){var i=kl(s);if(i!==null&&w2(i),i=Na(e,t,n,r),i===null&&Ii(e,t,r,ps,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ii(e,t,r,null,n)}}var ps=null;function Na(e,t,n,r){if(ps=null,e=bo(r),e=yn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=f2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ps=e,null}function S2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Um()){case wo:return 1;case g2:return 4;case ds:case Hm:return 16;case v2:return 536870912;default:return 16}default:return 16}}var Gt=null,ko=null,Ql=null;function M2(){if(Ql)return Ql;var e,t=ko,n=t.length,r,s="value"in Gt?Gt.value:Gt.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[i-r];r++);return Ql=s.slice(e,1<r?1-r:void 0)}function Xl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zl(){return!0}function Zc(){return!1}function tt(e){function t(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zl:Zc,this.isPropagationStopped=Zc,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=tt(jr),Cl=ce({},jr,{view:0,detail:0}),rf=tt(Cl),Ti,_i,$r,Ds=ce({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(Ti=e.screenX-$r.screenX,_i=e.screenY-$r.screenY):_i=Ti=0,$r=e),Ti)},movementY:function(e){return"movementY"in e?e.movementY:_i}}),Wc=tt(Ds),lf=ce({},Ds,{dataTransfer:0}),sf=tt(lf),af=ce({},Cl,{relatedTarget:0}),Ai=tt(af),of=ce({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),cf=tt(of),uf=ce({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=tt(uf),mf=ce({},jr,{data:0}),qc=tt(mf),ff={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hf[e])?!!t[e]:!1}function Mo(){return xf}var gf=ce({},Cl,{key:function(e){if(e.key){var t=ff[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mo,charCode:function(e){return e.type==="keypress"?Xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=tt(gf),yf=ce({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=tt(yf),bf=ce({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mo}),wf=tt(bf),Nf=ce({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jf=tt(Nf),Cf=ce({},Ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kf=tt(Cf),Sf=[9,13,27,32],Eo=Ot&&"CompositionEvent"in window,Zr=null;Ot&&"documentMode"in document&&(Zr=document.documentMode);var Mf=Ot&&"TextEvent"in window&&!Zr,E2=Ot&&(!Eo||Zr&&8<Zr&&11>=Zr),Yc=String.fromCharCode(32),Kc=!1;function T2(e,t){switch(e){case"keyup":return Sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Ef(e,t){switch(e){case"compositionend":return _2(t);case"keypress":return t.which!==32?null:(Kc=!0,Yc);case"textInput":return e=t.data,e===Yc&&Kc?null:e;default:return null}}function Tf(e,t){if(Yn)return e==="compositionend"||!Eo&&T2(e,t)?(e=M2(),Ql=ko=Gt=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return E2&&t.locale!=="ko"?null:t.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_f[e.type]:t==="textarea"}function A2(e,t,n,r){o2(r),t=hs(t,"onChange"),0<t.length&&(n=new So("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wr=null,il=null;function Af(e){B2(e,0)}function Rs(e){var t=Xn(e);if(t2(t))return e}function Lf(e,t){if(e==="change")return t}var L2=!1;if(Ot){var Li;if(Ot){var $i="oninput"in document;if(!$i){var Xc=document.createElement("div");Xc.setAttribute("oninput","return;"),$i=typeof Xc.oninput=="function"}Li=$i}else Li=!1;L2=Li&&(!document.documentMode||9<document.documentMode)}function Jc(){Wr&&(Wr.detachEvent("onpropertychange",$2),il=Wr=null)}function $2(e){if(e.propertyName==="value"&&Rs(il)){var t=[];A2(t,il,e,bo(e)),m2(Af,t)}}function $f(e,t,n){e==="focusin"?(Jc(),Wr=t,il=n,Wr.attachEvent("onpropertychange",$2)):e==="focusout"&&Jc()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rs(il)}function Ff(e,t){if(e==="click")return Rs(t)}function zf(e,t){if(e==="input"||e==="change")return Rs(t)}function Of(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Of;function al(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!la.call(t,s)||!yt(e[s],t[s]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,t){var n=eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eu(n)}}function P2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?P2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function F2(){for(var e=window,t=os();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=os(e.document)}return t}function To(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function If(e){var t=F2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&P2(n.ownerDocument.documentElement,n)){if(r!==null&&To(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=tu(n,i);var a=tu(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Df=Ot&&"documentMode"in document&&11>=document.documentMode,Kn=null,ja=null,qr=null,Ca=!1;function nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ca||Kn==null||Kn!==os(r)||(r=Kn,"selectionStart"in r&&To(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&al(qr,r)||(qr=r,r=hs(ja,"onSelect"),0<r.length&&(t=new So("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kn)))}function Ol(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},Pi={},z2={};Ot&&(z2=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Vs(e){if(Pi[e])return Pi[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in z2)return Pi[e]=t[n];return e}var O2=Vs("animationend"),I2=Vs("animationiteration"),D2=Vs("animationstart"),R2=Vs("transitionend"),V2=new Map,ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){V2.set(e,t),Pn(t,[e])}for(var Fi=0;Fi<ru.length;Fi++){var zi=ru[Fi],Rf=zi.toLowerCase(),Vf=zi[0].toUpperCase()+zi.slice(1);un(Rf,"on"+Vf)}un(O2,"onAnimationEnd");un(I2,"onAnimationIteration");un(D2,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(R2,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dm(r,t,void 0,e),e.currentTarget=null}function B2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==i&&s.isPropagationStopped())break e;lu(s,o,u),i=c}else for(a=0;a<r.length;a++){if(o=r[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==i&&s.isPropagationStopped())break e;lu(s,o,u),i=c}}}if(us)throw e=ya,us=!1,ya=null,e}function re(e,t){var n=t[Ta];n===void 0&&(n=t[Ta]=new Set);var r=e+"__bubble";n.has(r)||(U2(t,e,2,!1),n.add(r))}function Oi(e,t,n){var r=0;t&&(r|=4),U2(n,e,r,t)}var Il="_reactListening"+Math.random().toString(36).slice(2);function ol(e){if(!e[Il]){e[Il]=!0,K0.forEach(function(n){n!=="selectionchange"&&(Bf.has(n)||Oi(n,!1,e),Oi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Il]||(t[Il]=!0,Oi("selectionchange",!1,t))}}function U2(e,t,n,r){switch(S2(t)){case 1:var s=tf;break;case 4:s=nf;break;default:s=Co}n=s.bind(null,t,n,e),s=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ii(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;o!==null;){if(a=yn(o),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}o=o.parentNode}}r=r.return}m2(function(){var u=i,h=bo(n),x=[];e:{var f=V2.get(e);if(f!==void 0){var b=So,w=e;switch(e){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":b=vf;break;case"focusin":w="focus",b=Ai;break;case"focusout":w="blur",b=Ai;break;case"beforeblur":case"afterblur":b=Ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=wf;break;case O2:case I2:case D2:b=cf;break;case R2:b=jf;break;case"scroll":b=rf;break;case"wheel":b=kf;break;case"copy":case"cut":case"paste":b=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Gc}var N=(t&4)!==0,_=!N&&e==="scroll",p=N?f!==null?f+"Capture":null:f;N=[];for(var m=u,g;m!==null;){g=m;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=nl(m,p),v!=null&&N.push(cl(m,v,g)))),_)break;m=m.return}0<N.length&&(f=new b(f,w,null,n,h),x.push({event:f,listeners:N}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==xa&&(w=n.relatedTarget||n.fromElement)&&(yn(w)||w[It]))break e;if((b||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,b?(w=n.relatedTarget||n.toElement,b=u,w=w?yn(w):null,w!==null&&(_=Fn(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(b=null,w=u),b!==w)){if(N=Wc,v="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(N=Gc,v="onPointerLeave",p="onPointerEnter",m="pointer"),_=b==null?f:Xn(b),g=w==null?f:Xn(w),f=new N(v,m+"leave",b,n,h),f.target=_,f.relatedTarget=g,v=null,yn(h)===u&&(N=new N(p,m+"enter",w,n,h),N.target=g,N.relatedTarget=_,v=N),_=v,b&&w)t:{for(N=b,p=w,m=0,g=N;g;g=Zn(g))m++;for(g=0,v=p;v;v=Zn(v))g++;for(;0<m-g;)N=Zn(N),m--;for(;0<g-m;)p=Zn(p),g--;for(;m--;){if(N===p||p!==null&&N===p.alternate)break t;N=Zn(N),p=Zn(p)}N=null}else N=null;b!==null&&su(x,f,b,N,!1),w!==null&&_!==null&&su(x,_,w,N,!0)}}e:{if(f=u?Xn(u):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var k=Lf;else if(Qc(f))if(L2)k=zf;else{k=Pf;var A=$f}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Ff);if(k&&(k=k(e,u))){A2(x,k,n,h);break e}A&&A(e,f,u),e==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&da(f,"number",f.value)}switch(A=u?Xn(u):window,e){case"focusin":(Qc(A)||A.contentEditable==="true")&&(Kn=A,ja=u,qr=null);break;case"focusout":qr=ja=Kn=null;break;case"mousedown":Ca=!0;break;case"contextmenu":case"mouseup":case"dragend":Ca=!1,nu(x,n,h);break;case"selectionchange":if(Df)break;case"keydown":case"keyup":nu(x,n,h)}var F;if(Eo)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Yn?T2(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(E2&&n.locale!=="ko"&&(Yn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Yn&&(F=M2()):(Gt=h,ko="value"in Gt?Gt.value:Gt.textContent,Yn=!0)),A=hs(u,O),0<A.length&&(O=new qc(O,e,null,n,h),x.push({event:O,listeners:A}),F?O.data=F:(F=_2(n),F!==null&&(O.data=F)))),(F=Mf?Ef(e,n):Tf(e,n))&&(u=hs(u,"onBeforeInput"),0<u.length&&(h=new qc("onBeforeInput","beforeinput",null,n,h),x.push({event:h,listeners:u}),h.data=F))}B2(x,t)})}function cl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hs(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=nl(e,n),i!=null&&r.unshift(cl(e,i,s)),i=nl(e,t),i!=null&&r.push(cl(e,i,s))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function su(e,t,n,r,s){for(var i=t._reactName,a=[];n!==null&&n!==r;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&u!==null&&(o=u,s?(c=nl(n,i),c!=null&&a.unshift(cl(n,c,o))):s||(c=nl(n,i),c!=null&&a.push(cl(n,c,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Uf=/\r\n?/g,Hf=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace(Uf,`
`).replace(Hf,"")}function Dl(e,t,n){if(t=iu(t),iu(e)!==t&&n)throw Error(M(425))}function xs(){}var ka=null,Sa=null;function Ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ea=typeof setTimeout=="function"?setTimeout:void 0,Zf=typeof clearTimeout=="function"?clearTimeout:void 0,au=typeof Promise=="function"?Promise:void 0,Wf=typeof queueMicrotask=="function"?queueMicrotask:typeof au<"u"?function(e){return au.resolve(null).then(e).catch(qf)}:Ea;function qf(e){setTimeout(function(){throw e})}function Di(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),sl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);sl(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ou(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Cr,ul="__reactProps$"+Cr,It="__reactContainer$"+Cr,Ta="__reactEvents$"+Cr,Gf="__reactListeners$"+Cr,Yf="__reactHandles$"+Cr;function yn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ou(e);e!==null;){if(n=e[Ct])return n;e=ou(e)}return t}e=n,n=e.parentNode}return null}function kl(e){return e=e[Ct]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Bs(e){return e[ul]||null}var _a=[],Jn=-1;function dn(e){return{current:e}}function se(e){0>Jn||(e.current=_a[Jn],_a[Jn]=null,Jn--)}function ne(e,t){Jn++,_a[Jn]=e.current,e.current=t}var on={},$e=dn(on),Ue=dn(!1),En=on;function hr(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function He(e){return e=e.childContextTypes,e!=null}function gs(){se(Ue),se($e)}function cu(e,t,n){if($e.current!==on)throw Error(M(168));ne($e,t),ne(Ue,n)}function H2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(M(108,Lm(e)||"Unknown",s));return ce({},n,r)}function vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,En=$e.current,ne($e,e),ne(Ue,Ue.current),!0}function uu(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=H2(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,se(Ue),se($e),ne($e,e)):se(Ue),ne(Ue,n)}var $t=null,Us=!1,Ri=!1;function Z2(e){$t===null?$t=[e]:$t.push(e)}function Kf(e){Us=!0,Z2(e)}function mn(){if(!Ri&&$t!==null){Ri=!0;var e=0,t=X;try{var n=$t;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$t=null,Us=!1}catch(s){throw $t!==null&&($t=$t.slice(e+1)),x2(wo,mn),s}finally{X=t,Ri=!1}}return null}var er=[],tr=0,ys=null,bs=0,st=[],it=0,Tn=null,Pt=1,Ft="";function hn(e,t){er[tr++]=bs,er[tr++]=ys,ys=e,bs=t}function W2(e,t,n){st[it++]=Pt,st[it++]=Ft,st[it++]=Tn,Tn=e;var r=Pt;e=Ft;var s=32-gt(r)-1;r&=~(1<<s),n+=1;var i=32-gt(t)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Pt=1<<32-gt(t)+s|n<<s|r,Ft=i+e}else Pt=1<<i|n<<s|r,Ft=e}function _o(e){e.return!==null&&(hn(e,1),W2(e,1,0))}function Ao(e){for(;e===ys;)ys=er[--tr],er[tr]=null,bs=er[--tr],er[tr]=null;for(;e===Tn;)Tn=st[--it],st[it]=null,Ft=st[--it],st[it]=null,Pt=st[--it],st[it]=null}var Xe=null,Ye=null,ie=!1,xt=null;function q2(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Pt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ye=null,!0):!1;default:return!1}}function Aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function La(e){if(ie){var t=Ye;if(t){var n=t;if(!du(e,t)){if(Aa(e))throw Error(M(418));t=en(n.nextSibling);var r=Xe;t&&du(e,t)?q2(r,n):(e.flags=e.flags&-4097|2,ie=!1,Xe=e)}}else{if(Aa(e))throw Error(M(418));e.flags=e.flags&-4097|2,ie=!1,Xe=e}}}function mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Rl(e){if(e!==Xe)return!1;if(!ie)return mu(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ma(e.type,e.memoizedProps)),t&&(t=Ye)){if(Aa(e))throw G2(),Error(M(418));for(;t;)q2(e,t),t=en(t.nextSibling)}if(mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Xe?en(e.stateNode.nextSibling):null;return!0}function G2(){for(var e=Ye;e;)e=en(e.nextSibling)}function xr(){Ye=Xe=null,ie=!1}function Lo(e){xt===null?xt=[e]:xt.push(e)}var Qf=Vt.ReactCurrentBatchConfig;function pt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ws=dn(null),Ns=null,nr=null,$o=null;function Po(){$o=nr=Ns=null}function Fo(e){var t=ws.current;se(ws),e._currentValue=t}function $a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){Ns=e,$o=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if($o!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Ns===null)throw Error(M(308));nr=e,Ns.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var bn=null;function zo(e){bn===null?bn=[e]:bn.push(e)}function Y2(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,zo(t)):(n.next=s.next,s.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function Oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Dt(e,n)}return s=r.interleaved,s===null?(t.next=t,zo(r)):(t.next=s.next,s.next=t),r.interleaved=t,Dt(e,n)}function Jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,No(e,n)}}function fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function js(e,t,n,r){var s=e.updateQueue;Zt=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(i!==null){var x=s.baseState;a=0,h=u=c=null,o=i;do{var f=o.lane,b=o.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,N=o;switch(f=t,b=n,N.tag){case 1:if(w=N.payload,typeof w=="function"){x=w.call(b,x,f);break e}x=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=N.payload,f=typeof w=="function"?w.call(b,x,f):w,f==null)break e;x=ce({},x,f);break e;case 2:Zt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[o]:f.push(o))}else b={eventTime:b,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=b,c=x):h=h.next=b,a|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;f=o,o=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(1);if(h===null&&(c=x),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);An|=a,e.lanes=a,e.memoizedState=x}}function pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(M(191,s));s.call(r)}}}var Q2=new Y0.Component().refs;function Pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),s=rn(e),i=zt(r,s);i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,s),t!==null&&(vt(t,e,s,r),Jl(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),s=rn(e),i=zt(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,s),t!==null&&(vt(t,e,s,r),Jl(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=rn(e),s=zt(n,r);s.tag=2,t!=null&&(s.callback=t),t=tn(e,s,r),t!==null&&(vt(t,e,r,n),Jl(t,e,r))}};function hu(e,t,n,r,s,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!al(n,r)||!al(s,i):!0}function X2(e,t,n){var r=!1,s=on,i=t.contextType;return typeof i=="object"&&i!==null?i=ct(i):(s=He(t)?En:$e.current,r=t.contextTypes,i=(r=r!=null)?hr(e,s):on),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Fa(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=Q2,Oo(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=ct(i):(i=He(t)?En:$e.current,s.context=hr(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Pa(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Hs.enqueueReplaceState(s,s.state,null),js(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var o=s.refs;o===Q2&&(o=s.refs={}),a===null?delete o[i]:o[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Vl(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gu(e){var t=e._init;return t(e._payload)}function J2(e){function t(p,m){if(e){var g=p.deletions;g===null?(p.deletions=[m],p.flags|=16):g.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function s(p,m){return p=ln(p,m),p.index=0,p.sibling=null,p}function i(p,m,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<m?(p.flags|=2,m):g):(p.flags|=2,m)):(p.flags|=1048576,m)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,m,g,v){return m===null||m.tag!==6?(m=qi(g,p.mode,v),m.return=p,m):(m=s(m,g),m.return=p,m)}function c(p,m,g,v){var k=g.type;return k===Gn?h(p,m,g.props.children,v,g.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&gu(k)===m.type)?(v=s(m,g.props),v.ref=Pr(p,m,g),v.return=p,v):(v=ss(g.type,g.key,g.props,null,p.mode,v),v.ref=Pr(p,m,g),v.return=p,v)}function u(p,m,g,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Gi(g,p.mode,v),m.return=p,m):(m=s(m,g.children||[]),m.return=p,m)}function h(p,m,g,v,k){return m===null||m.tag!==7?(m=Cn(g,p.mode,v,k),m.return=p,m):(m=s(m,g),m.return=p,m)}function x(p,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=qi(""+m,p.mode,g),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _l:return g=ss(m.type,m.key,m.props,null,p.mode,g),g.ref=Pr(p,null,m),g.return=p,g;case qn:return m=Gi(m,p.mode,g),m.return=p,m;case Ht:var v=m._init;return x(p,v(m._payload),g)}if(Rr(m)||Tr(m))return m=Cn(m,p.mode,g,null),m.return=p,m;Vl(p,m)}return null}function f(p,m,g,v){var k=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:o(p,m,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _l:return g.key===k?c(p,m,g,v):null;case qn:return g.key===k?u(p,m,g,v):null;case Ht:return k=g._init,f(p,m,k(g._payload),v)}if(Rr(g)||Tr(g))return k!==null?null:h(p,m,g,v,null);Vl(p,g)}return null}function b(p,m,g,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,o(m,p,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:return p=p.get(v.key===null?g:v.key)||null,c(m,p,v,k);case qn:return p=p.get(v.key===null?g:v.key)||null,u(m,p,v,k);case Ht:var A=v._init;return b(p,m,g,A(v._payload),k)}if(Rr(v)||Tr(v))return p=p.get(g)||null,h(m,p,v,k,null);Vl(m,v)}return null}function w(p,m,g,v){for(var k=null,A=null,F=m,O=m=0,T=null;F!==null&&O<g.length;O++){F.index>O?(T=F,F=null):T=F.sibling;var S=f(p,F,g[O],v);if(S===null){F===null&&(F=T);break}e&&F&&S.alternate===null&&t(p,F),m=i(S,m,O),A===null?k=S:A.sibling=S,A=S,F=T}if(O===g.length)return n(p,F),ie&&hn(p,O),k;if(F===null){for(;O<g.length;O++)F=x(p,g[O],v),F!==null&&(m=i(F,m,O),A===null?k=F:A.sibling=F,A=F);return ie&&hn(p,O),k}for(F=r(p,F);O<g.length;O++)T=b(F,p,O,g[O],v),T!==null&&(e&&T.alternate!==null&&F.delete(T.key===null?O:T.key),m=i(T,m,O),A===null?k=T:A.sibling=T,A=T);return e&&F.forEach(function(W){return t(p,W)}),ie&&hn(p,O),k}function N(p,m,g,v){var k=Tr(g);if(typeof k!="function")throw Error(M(150));if(g=k.call(g),g==null)throw Error(M(151));for(var A=k=null,F=m,O=m=0,T=null,S=g.next();F!==null&&!S.done;O++,S=g.next()){F.index>O?(T=F,F=null):T=F.sibling;var W=f(p,F,S.value,v);if(W===null){F===null&&(F=T);break}e&&F&&W.alternate===null&&t(p,F),m=i(W,m,O),A===null?k=W:A.sibling=W,A=W,F=T}if(S.done)return n(p,F),ie&&hn(p,O),k;if(F===null){for(;!S.done;O++,S=g.next())S=x(p,S.value,v),S!==null&&(m=i(S,m,O),A===null?k=S:A.sibling=S,A=S);return ie&&hn(p,O),k}for(F=r(p,F);!S.done;O++,S=g.next())S=b(F,p,O,S.value,v),S!==null&&(e&&S.alternate!==null&&F.delete(S.key===null?O:S.key),m=i(S,m,O),A===null?k=S:A.sibling=S,A=S);return e&&F.forEach(function(ve){return t(p,ve)}),ie&&hn(p,O),k}function _(p,m,g,v){if(typeof g=="object"&&g!==null&&g.type===Gn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case _l:e:{for(var k=g.key,A=m;A!==null;){if(A.key===k){if(k=g.type,k===Gn){if(A.tag===7){n(p,A.sibling),m=s(A,g.props.children),m.return=p,p=m;break e}}else if(A.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&gu(k)===A.type){n(p,A.sibling),m=s(A,g.props),m.ref=Pr(p,A,g),m.return=p,p=m;break e}n(p,A);break}else t(p,A);A=A.sibling}g.type===Gn?(m=Cn(g.props.children,p.mode,v,g.key),m.return=p,p=m):(v=ss(g.type,g.key,g.props,null,p.mode,v),v.ref=Pr(p,m,g),v.return=p,p=v)}return a(p);case qn:e:{for(A=g.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(p,m.sibling),m=s(m,g.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Gi(g,p.mode,v),m.return=p,p=m}return a(p);case Ht:return A=g._init,_(p,m,A(g._payload),v)}if(Rr(g))return w(p,m,g,v);if(Tr(g))return N(p,m,g,v);Vl(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(p,m.sibling),m=s(m,g),m.return=p,p=m):(n(p,m),m=qi(g,p.mode,v),m.return=p,p=m),a(p)):n(p,m)}return _}var gr=J2(!0),ed=J2(!1),Sl={},St=dn(Sl),dl=dn(Sl),ml=dn(Sl);function wn(e){if(e===Sl)throw Error(M(174));return e}function Io(e,t){switch(ne(ml,t),ne(dl,e),ne(St,Sl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fa(t,e)}se(St),ne(St,t)}function vr(){se(St),se(dl),se(ml)}function td(e){wn(ml.current);var t=wn(St.current),n=fa(t,e.type);t!==n&&(ne(dl,e),ne(St,n))}function Do(e){dl.current===e&&(se(St),se(dl))}var ae=dn(0);function Cs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vi=[];function Ro(){for(var e=0;e<Vi.length;e++)Vi[e]._workInProgressVersionPrimary=null;Vi.length=0}var es=Vt.ReactCurrentDispatcher,Bi=Vt.ReactCurrentBatchConfig,_n=0,oe=null,he=null,we=null,ks=!1,Gr=!1,fl=0,Xf=0;function _e(){throw Error(M(321))}function Vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Bo(e,t,n,r,s,i){if(_n=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,es.current=e===null||e.memoizedState===null?n3:r3,e=n(r,s),Gr){i=0;do{if(Gr=!1,fl=0,25<=i)throw Error(M(301));i+=1,we=he=null,t.updateQueue=null,es.current=l3,e=n(r,s)}while(Gr)}if(es.current=Ss,t=he!==null&&he.next!==null,_n=0,we=he=oe=null,ks=!1,t)throw Error(M(300));return e}function Uo(){var e=fl!==0;return fl=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?oe.memoizedState=we=e:we=we.next=e,we}function ut(){if(he===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=we===null?oe.memoizedState:we.next;if(t!==null)we=t,he=e;else{if(e===null)throw Error(M(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},we===null?oe.memoizedState=we=e:we=we.next=e}return we}function pl(e,t){return typeof t=="function"?t(e):t}function Ui(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=he,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var o=a=null,c=null,u=i;do{var h=u.lane;if((_n&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var x={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=x,a=r):c=c.next=x,oe.lanes|=h,An|=h}u=u.next}while(u!==null&&u!==i);c===null?a=r:c.next=o,yt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,oe.lanes|=i,An|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hi(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=e(i,a.action),a=a.next;while(a!==s);yt(i,t.memoizedState)||(Ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function nd(){}function rd(e,t){var n=oe,r=ut(),s=t(),i=!yt(r.memoizedState,s);if(i&&(r.memoizedState=s,Ve=!0),r=r.queue,Ho(id.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,hl(9,sd.bind(null,n,r,s,t),void 0,null),Ne===null)throw Error(M(349));_n&30||ld(n,t,s)}return s}function ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sd(e,t,n,r){t.value=n,t.getSnapshot=r,ad(t)&&od(e)}function id(e,t,n){return n(function(){ad(t)&&od(e)})}function ad(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function od(e){var t=Dt(e,1);t!==null&&vt(t,e,1,-1)}function vu(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:e},t.queue=e,e=e.dispatch=t3.bind(null,oe,e),[t.memoizedState,e]}function hl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cd(){return ut().memoizedState}function ts(e,t,n,r){var s=jt();oe.flags|=e,s.memoizedState=hl(1|t,n,void 0,r===void 0?null:r)}function Zs(e,t,n,r){var s=ut();r=r===void 0?null:r;var i=void 0;if(he!==null){var a=he.memoizedState;if(i=a.destroy,r!==null&&Vo(r,a.deps)){s.memoizedState=hl(t,n,i,r);return}}oe.flags|=e,s.memoizedState=hl(1|t,n,i,r)}function yu(e,t){return ts(8390656,8,e,t)}function Ho(e,t){return Zs(2048,8,e,t)}function ud(e,t){return Zs(4,2,e,t)}function dd(e,t){return Zs(4,4,e,t)}function md(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fd(e,t,n){return n=n!=null?n.concat([e]):null,Zs(4,4,md.bind(null,t,e),n)}function Zo(){}function pd(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hd(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xd(e,t,n){return _n&21?(yt(n,t)||(n=y2(),oe.lanes|=n,An|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function Jf(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),t()}finally{X=n,Bi.transition=r}}function gd(){return ut().memoizedState}function e3(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vd(e))yd(t,n);else if(n=Y2(e,t,n,r),n!==null){var s=Fe();vt(n,e,r,s),bd(n,t,r)}}function t3(e,t,n){var r=rn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vd(e))yd(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,o=i(a,n);if(s.hasEagerState=!0,s.eagerState=o,yt(o,a)){var c=t.interleaved;c===null?(s.next=s,zo(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=Y2(e,t,s,r),n!==null&&(s=Fe(),vt(n,e,r,s),bd(n,t,r))}}function vd(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function yd(e,t){Gr=ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,No(e,n)}}var Ss={readContext:ct,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},n3={readContext:ct,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:yu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ts(4194308,4,md.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){return ts(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=e3.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:vu,useDebugValue:Zo,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=vu(!1),t=e[0];return e=Jf.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,s=jt();if(ie){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Ne===null)throw Error(M(349));_n&30||ld(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,yu(id.bind(null,r,i,e),[e]),r.flags|=2048,hl(9,sd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=jt(),t=Ne.identifierPrefix;if(ie){var n=Ft,r=Pt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},r3={readContext:ct,useCallback:pd,useContext:ct,useEffect:Ho,useImperativeHandle:fd,useInsertionEffect:ud,useLayoutEffect:dd,useMemo:hd,useReducer:Ui,useRef:cd,useState:function(){return Ui(pl)},useDebugValue:Zo,useDeferredValue:function(e){var t=ut();return xd(t,he.memoizedState,e)},useTransition:function(){var e=Ui(pl)[0],t=ut().memoizedState;return[e,t]},useMutableSource:nd,useSyncExternalStore:rd,useId:gd,unstable_isNewReconciler:!1},l3={readContext:ct,useCallback:pd,useContext:ct,useEffect:Ho,useImperativeHandle:fd,useInsertionEffect:ud,useLayoutEffect:dd,useMemo:hd,useReducer:Hi,useRef:cd,useState:function(){return Hi(pl)},useDebugValue:Zo,useDeferredValue:function(e){var t=ut();return he===null?t.memoizedState=e:xd(t,he.memoizedState,e)},useTransition:function(){var e=Hi(pl)[0],t=ut().memoizedState;return[e,t]},useMutableSource:nd,useSyncExternalStore:rd,useId:gd,unstable_isNewReconciler:!1};function yr(e,t){try{var n="",r=t;do n+=Am(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Zi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var s3=typeof WeakMap=="function"?WeakMap:Map;function wd(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Es||(Es=!0,Wa=r),za(e,t)},n}function Nd(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){za(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){za(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new s3;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=y3.bind(null,e,t,n),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nu(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var i3=Vt.ReactCurrentOwner,Ve=!1;function Pe(e,t,n,r){t.child=e===null?ed(t,null,n,r):gr(t,e.child,n,r)}function ju(e,t,n,r,s){n=n.render;var i=t.ref;return dr(t,s),r=Bo(e,t,n,r,i,s),n=Uo(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Rt(e,t,s)):(ie&&n&&_o(t),t.flags|=1,Pe(e,t,r,s),t.child)}function Cu(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!Jo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,jd(e,t,i,r,s)):(e=ss(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(a,r)&&e.ref===t.ref)return Rt(e,t,s)}return t.flags|=1,e=ln(i,r),e.ref=t.ref,e.return=t,t.child=e}function jd(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(al(i,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Rt(e,t,s)}return Oa(e,t,n,r,s)}function Cd(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(lr,qe),qe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(lr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(lr,qe),qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(lr,qe),qe|=r;return Pe(e,t,s,n),t.child}function kd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oa(e,t,n,r,s){var i=He(n)?En:$e.current;return i=hr(t,i),dr(t,s),n=Bo(e,t,n,r,i,s),r=Uo(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Rt(e,t,s)):(ie&&r&&_o(t),t.flags|=1,Pe(e,t,n,s),t.child)}function ku(e,t,n,r,s){if(He(n)){var i=!0;vs(t)}else i=!1;if(dr(t,s),t.stateNode===null)ns(e,t),X2(t,n,r),Fa(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=He(n)?En:$e.current,u=hr(t,u));var h=n.getDerivedStateFromProps,x=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";x||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||c!==u)&&xu(t,a,r,u),Zt=!1;var f=t.memoizedState;a.state=f,js(t,r,a,s),c=t.memoizedState,o!==r||f!==c||Ue.current||Zt?(typeof h=="function"&&(Pa(t,n,h,r),c=t.memoizedState),(o=Zt||hu(t,n,o,r,f,c,u))?(x||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,K2(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:pt(t.type,o),a.props=u,x=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=ct(c):(c=He(n)?En:$e.current,c=hr(t,c));var b=n.getDerivedStateFromProps;(h=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==x||f!==c)&&xu(t,a,r,c),Zt=!1,f=t.memoizedState,a.state=f,js(t,r,a,s);var w=t.memoizedState;o!==x||f!==w||Ue.current||Zt?(typeof b=="function"&&(Pa(t,n,b,r),w=t.memoizedState),(u=Zt||hu(t,n,u,r,f,w,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ia(e,t,n,r,i,s)}function Ia(e,t,n,r,s,i){kd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&uu(t,n,!1),Rt(e,t,i);r=t.stateNode,i3.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=gr(t,e.child,null,i),t.child=gr(t,null,o,i)):Pe(e,t,o,i),t.memoizedState=r.state,s&&uu(t,n,!0),t.child}function Sd(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),Io(e,t.containerInfo)}function Su(e,t,n,r,s){return xr(),Lo(s),t.flags|=256,Pe(e,t,n,r),t.child}var Da={dehydrated:null,treeContext:null,retryLane:0};function Ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Md(e,t,n){var r=t.pendingProps,s=ae.current,i=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ne(ae,s&1),e===null)return La(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Gs(a,r,0,null),e=Cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ra(n),t.memoizedState=Da,e):Wo(t,a));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return a3(e,t,a,r,o,s,n);if(i){i=r.fallback,a=t.mode,s=e.child,o=s.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ln(s,c),r.subtreeFlags=s.subtreeFlags&14680064),o!==null?i=ln(o,i):(i=Cn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ra(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Da,r}return i=e.child,e=i.sibling,r=ln(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wo(e,t){return t=Gs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bl(e,t,n,r){return r!==null&&Lo(r),gr(t,e.child,null,n),e=Wo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function a3(e,t,n,r,s,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Zi(Error(M(422))),Bl(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=Gs({mode:"visible",children:r.children},s,0,null),i=Cn(i,s,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&gr(t,e.child,null,a),t.child.memoizedState=Ra(a),t.memoizedState=Da,i);if(!(t.mode&1))return Bl(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(M(419)),r=Zi(i,r,void 0),Bl(e,t,a,r)}if(o=(a&e.childLanes)!==0,Ve||o){if(r=Ne,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Dt(e,s),vt(r,e,s,-1))}return Xo(),r=Zi(Error(M(421))),Bl(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=b3.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,Ye=en(s.nextSibling),Xe=t,ie=!0,xt=null,e!==null&&(st[it++]=Pt,st[it++]=Ft,st[it++]=Tn,Pt=e.id,Ft=e.overflow,Tn=t),t=Wo(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$a(e.return,t,n)}function Wi(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Ed(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(Pe(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ae,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Cs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Wi(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Cs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Wi(t,!0,n,null,i);break;case"together":Wi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function o3(e,t,n){switch(t.tag){case 3:Sd(t),xr();break;case 5:td(t);break;case 1:He(t.type)&&vs(t);break;case 4:Io(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;ne(ws,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?Md(e,t,n):(ne(ae,ae.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);ne(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ed(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ne(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Cd(e,t,n)}return Rt(e,t,n)}var Td,Va,_d,Ad;Td=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Va=function(){};_d=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,wn(St.current);var i=null;switch(n){case"input":s=ca(e,s),r=ca(e,r),i=[];break;case"select":s=ce({},s,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":s=ma(e,s),r=ma(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xs)}pa(n,r);var a;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var o=s[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(el.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(o=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(el.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&re("scroll",e),i||o===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Ad=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function c3(e,t,n){var r=t.pendingProps;switch(Ao(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return He(t.type)&&gs(),Ae(t),null;case 3:return r=t.stateNode,vr(),se(Ue),se($e),Ro(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Ya(xt),xt=null))),Va(e,t),Ae(t),null;case 5:Do(t);var s=wn(ml.current);if(n=t.type,e!==null&&t.stateNode!=null)_d(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ae(t),null}if(e=wn(St.current),Rl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ct]=t,r[ul]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(s=0;s<Br.length;s++)re(Br[s],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":zc(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":Ic(r,i),re("invalid",r)}pa(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];a==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&Dl(r.textContent,o,e),s=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Dl(r.textContent,o,e),s=["children",""+o]):el.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&re("scroll",r)}switch(n){case"input":Al(r),Oc(r,i,!0);break;case"textarea":Al(r),Dc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xs)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=l2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ct]=t,e[ul]=r,Td(e,t,!1,!1),t.stateNode=e;e:{switch(a=ha(n,r),n){case"dialog":re("cancel",e),re("close",e),s=r;break;case"iframe":case"object":case"embed":re("load",e),s=r;break;case"video":case"audio":for(s=0;s<Br.length;s++)re(Br[s],e);s=r;break;case"source":re("error",e),s=r;break;case"img":case"image":case"link":re("error",e),re("load",e),s=r;break;case"details":re("toggle",e),s=r;break;case"input":zc(e,r),s=ca(e,r),re("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":Ic(e,r),s=ma(e,r),re("invalid",e);break;default:s=r}pa(n,s),o=s;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?a2(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&s2(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&tl(e,c):typeof c=="number"&&tl(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(el.hasOwnProperty(i)?c!=null&&i==="onScroll"&&re("scroll",e):c!=null&&xo(e,i,c,a))}switch(n){case"input":Al(e),Oc(e,r,!1);break;case"textarea":Al(e),Dc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ar(e,!!r.multiple,i,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=xs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Ad(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=wn(ml.current),wn(St.current),Rl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(i=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Dl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Ae(t),null;case 13:if(se(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ye!==null&&t.mode&1&&!(t.flags&128))G2(),xr(),t.flags|=98560,i=!1;else if(i=Rl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[Ct]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else xt!==null&&(Ya(xt),xt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?xe===0&&(xe=3):Xo())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return vr(),Va(e,t),e===null&&ol(t.stateNode.containerInfo),Ae(t),null;case 10:return Fo(t.type._context),Ae(t),null;case 17:return He(t.type)&&gs(),Ae(t),null;case 19:if(se(ae),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Fr(i,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Cs(e),a!==null){for(t.flags|=128,Fr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ae,ae.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>br&&(t.flags|=128,r=!0,Fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Cs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ie)return Ae(t),null}else 2*de()-i.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,Fr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,n=ae.current,ne(ae,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Qo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function u3(e,t){switch(Ao(t),t.tag){case 1:return He(t.type)&&gs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),se(Ue),se($e),Ro(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Do(t),null;case 13:if(se(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ae),null;case 4:return vr(),null;case 10:return Fo(t.type._context),null;case 22:case 23:return Qo(),null;case 24:return null;default:return null}}var Ul=!1,Le=!1,d3=typeof WeakSet=="function"?WeakSet:Set,I=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Ba(e,t,n){try{n()}catch(r){ue(e,t,r)}}var Eu=!1;function m3(e,t){if(ka=fs,e=F2(),To(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,h=0,x=e,f=null;t:for(;;){for(var b;x!==n||s!==0&&x.nodeType!==3||(o=a+s),x!==i||r!==0&&x.nodeType!==3||(c=a+r),x.nodeType===3&&(a+=x.nodeValue.length),(b=x.firstChild)!==null;)f=x,x=b;for(;;){if(x===e)break t;if(f===n&&++u===s&&(o=a),f===i&&++h===r&&(c=a),(b=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=b}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sa={focusedElem:e,selectionRange:n},fs=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var N=w.memoizedProps,_=w.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?N:pt(t.type,N),_);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(v){ue(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return w=Eu,Eu=!1,w}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ba(t,n,i)}s=s.next}while(s!==r)}}function Ws(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ld(e){var t=e.alternate;t!==null&&(e.alternate=null,Ld(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[ul],delete t[Ta],delete t[Gf],delete t[Yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $d(e){return e.tag===5||e.tag===3||e.tag===4}function Tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xs));else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}function Za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Za(e,t,n),e=e.sibling;e!==null;)Za(e,t,n),e=e.sibling}var Se=null,ht=!1;function Ut(e,t,n){for(n=n.child;n!==null;)Pd(e,t,n),n=n.sibling}function Pd(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Is,n)}catch{}switch(n.tag){case 5:Le||rr(n,t);case 6:var r=Se,s=ht;Se=null,Ut(e,t,n),Se=r,ht=s,Se!==null&&(ht?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ht?(e=Se,n=n.stateNode,e.nodeType===8?Di(e.parentNode,n):e.nodeType===1&&Di(e,n),sl(e)):Di(Se,n.stateNode));break;case 4:r=Se,s=ht,Se=n.stateNode.containerInfo,ht=!0,Ut(e,t,n),Se=r,ht=s;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ba(n,t,a),s=s.next}while(s!==r)}Ut(e,t,n);break;case 1:if(!Le&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){ue(n,t,o)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Ut(e,t,n),Le=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new d3),t.forEach(function(r){var s=w3.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:Se=o.stateNode,ht=!1;break e;case 3:Se=o.stateNode.containerInfo,ht=!0;break e;case 4:Se=o.stateNode.containerInfo,ht=!0;break e}o=o.return}if(Se===null)throw Error(M(160));Pd(i,a,s),Se=null,ht=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ue(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fd(t,e),t=t.sibling}function Fd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),wt(e),r&4){try{Yr(3,e,e.return),Ws(3,e)}catch(N){ue(e,e.return,N)}try{Yr(5,e,e.return)}catch(N){ue(e,e.return,N)}}break;case 1:dt(t,e),wt(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(dt(t,e),wt(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var s=e.stateNode;try{tl(s,"")}catch(N){ue(e,e.return,N)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&n2(s,i),ha(o,a);var u=ha(o,i);for(a=0;a<c.length;a+=2){var h=c[a],x=c[a+1];h==="style"?a2(s,x):h==="dangerouslySetInnerHTML"?s2(s,x):h==="children"?tl(s,x):xo(s,h,x,u)}switch(o){case"input":ua(s,i);break;case"textarea":r2(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?ar(s,!!i.multiple,b,!1):f!==!!i.multiple&&(i.defaultValue!=null?ar(s,!!i.multiple,i.defaultValue,!0):ar(s,!!i.multiple,i.multiple?[]:"",!1))}s[ul]=i}catch(N){ue(e,e.return,N)}}break;case 6:if(dt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(M(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(N){ue(e,e.return,N)}}break;case 3:if(dt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(t.containerInfo)}catch(N){ue(e,e.return,N)}break;case 4:dt(t,e),wt(e);break;case 13:dt(t,e),wt(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Yo=de())),r&4&&_u(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(u=Le)||h,dt(t,e),Le=u):dt(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(I=e,h=e.child;h!==null;){for(x=I=h;I!==null;){switch(f=I,b=f.child,f.tag){case 0:case 11:case 14:case 15:Yr(4,f,f.return);break;case 1:rr(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(N){ue(r,n,N)}}break;case 5:rr(f,f.return);break;case 22:if(f.memoizedState!==null){Lu(x);continue}}b!==null?(b.return=f,I=b):Lu(x)}h=h.sibling}e:for(h=null,x=e;;){if(x.tag===5){if(h===null){h=x;try{s=x.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=x.stateNode,c=x.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=i2("display",a))}catch(N){ue(e,e.return,N)}}}else if(x.tag===6){if(h===null)try{x.stateNode.nodeValue=u?"":x.memoizedProps}catch(N){ue(e,e.return,N)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;h===x&&(h=null),x=x.return}h===x&&(h=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:dt(t,e),wt(e),r&4&&_u(e);break;case 21:break;default:dt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($d(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(tl(s,""),r.flags&=-33);var i=Tu(e);Za(e,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Tu(e);Ha(e,o,a);break;default:throw Error(M(161))}}catch(c){ue(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f3(e,t,n){I=e,zd(e)}function zd(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var s=I,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||Ul;if(!a){var o=s.alternate,c=o!==null&&o.memoizedState!==null||Le;o=Ul;var u=Le;if(Ul=a,(Le=c)&&!u)for(I=s;I!==null;)a=I,c=a.child,a.tag===22&&a.memoizedState!==null?$u(s):c!==null?(c.return=a,I=c):$u(s);for(;i!==null;)I=i,zd(i),i=i.sibling;I=s,Ul=o,Le=u}Au(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,I=i):Au(e)}}function Au(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Ws(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&pu(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pu(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var x=h.dehydrated;x!==null&&sl(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Le||t.flags&512&&Ua(t)}catch(f){ue(t,t.return,f)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Lu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function $u(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ws(4,t)}catch(c){ue(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){ue(t,s,c)}}var i=t.return;try{Ua(t)}catch(c){ue(t,i,c)}break;case 5:var a=t.return;try{Ua(t)}catch(c){ue(t,a,c)}}}catch(c){ue(t,t.return,c)}if(t===e){I=null;break}var o=t.sibling;if(o!==null){o.return=t.return,I=o;break}I=t.return}}var p3=Math.ceil,Ms=Vt.ReactCurrentDispatcher,qo=Vt.ReactCurrentOwner,ot=Vt.ReactCurrentBatchConfig,K=0,Ne=null,fe=null,Me=0,qe=0,lr=dn(0),xe=0,xl=null,An=0,qs=0,Go=0,Kr=null,Re=null,Yo=0,br=1/0,At=null,Es=!1,Wa=null,nn=null,Hl=!1,Yt=null,Ts=0,Qr=0,qa=null,rs=-1,ls=0;function Fe(){return K&6?de():rs!==-1?rs:rs=de()}function rn(e){return e.mode&1?K&2&&Me!==0?Me&-Me:Qf.transition!==null?(ls===0&&(ls=y2()),ls):(e=X,e!==0||(e=window.event,e=e===void 0?16:S2(e.type)),e):1}function vt(e,t,n,r){if(50<Qr)throw Qr=0,qa=null,Error(M(185));jl(e,n,r),(!(K&2)||e!==Ne)&&(e===Ne&&(!(K&2)&&(qs|=n),xe===4&&qt(e,Me)),Ze(e,r),n===1&&K===0&&!(t.mode&1)&&(br=de()+500,Us&&mn()))}function Ze(e,t){var n=e.callbackNode;Km(e,t);var r=ms(e,e===Ne?Me:0);if(r===0)n!==null&&Bc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bc(n),t===1)e.tag===0?Kf(Pu.bind(null,e)):Z2(Pu.bind(null,e)),Wf(function(){!(K&6)&&mn()}),n=null;else{switch(b2(r)){case 1:n=wo;break;case 4:n=g2;break;case 16:n=ds;break;case 536870912:n=v2;break;default:n=ds}n=Hd(n,Od.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Od(e,t){if(rs=-1,ls=0,K&6)throw Error(M(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=ms(e,e===Ne?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_s(e,r);else{t=r;var s=K;K|=2;var i=Dd();(Ne!==e||Me!==t)&&(At=null,br=de()+500,jn(e,t));do try{g3();break}catch(o){Id(e,o)}while(1);Po(),Ms.current=i,K=s,fe!==null?t=0:(Ne=null,Me=0,t=xe)}if(t!==0){if(t===2&&(s=ba(e),s!==0&&(r=s,t=Ga(e,s))),t===1)throw n=xl,jn(e,0),qt(e,r),Ze(e,de()),n;if(t===6)qt(e,r);else{if(s=e.current.alternate,!(r&30)&&!h3(s)&&(t=_s(e,r),t===2&&(i=ba(e),i!==0&&(r=i,t=Ga(e,i))),t===1))throw n=xl,jn(e,0),qt(e,r),Ze(e,de()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:xn(e,Re,At);break;case 3:if(qt(e,r),(r&130023424)===r&&(t=Yo+500-de(),10<t)){if(ms(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ea(xn.bind(null,e,Re,At),t);break}xn(e,Re,At);break;case 4:if(qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-gt(r);i=1<<a,a=t[a],a>s&&(s=a),r&=~i}if(r=s,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*p3(r/1960))-r,10<r){e.timeoutHandle=Ea(xn.bind(null,e,Re,At),r);break}xn(e,Re,At);break;case 5:xn(e,Re,At);break;default:throw Error(M(329))}}}return Ze(e,de()),e.callbackNode===n?Od.bind(null,e):null}function Ga(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=_s(e,t),e!==2&&(t=Re,Re=n,t!==null&&Ya(t)),e}function Ya(e){Re===null?Re=e:Re.push.apply(Re,e)}function h3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!yt(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~Go,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Pu(e){if(K&6)throw Error(M(327));mr();var t=ms(e,0);if(!(t&1))return Ze(e,de()),null;var n=_s(e,t);if(e.tag!==0&&n===2){var r=ba(e);r!==0&&(t=r,n=Ga(e,r))}if(n===1)throw n=xl,jn(e,0),qt(e,t),Ze(e,de()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,Re,At),Ze(e,de()),null}function Ko(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(br=de()+500,Us&&mn())}}function Ln(e){Yt!==null&&Yt.tag===0&&!(K&6)&&mr();var t=K;K|=1;var n=ot.transition,r=X;try{if(ot.transition=null,X=1,e)return e()}finally{X=r,ot.transition=n,K=t,!(K&6)&&mn()}}function Qo(){qe=lr.current,se(lr)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zf(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Ao(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gs();break;case 3:vr(),se(Ue),se($e),Ro();break;case 5:Do(r);break;case 4:vr();break;case 13:se(ae);break;case 19:se(ae);break;case 10:Fo(r.type._context);break;case 22:case 23:Qo()}n=n.return}if(Ne=e,fe=e=ln(e.current,null),Me=qe=t,xe=0,xl=null,Go=qs=An=0,Re=Kr=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}bn=null}return e}function Id(e,t){do{var n=fe;try{if(Po(),es.current=Ss,ks){for(var r=oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ks=!1}if(_n=0,we=he=oe=null,Gr=!1,fl=0,qo.current=null,n===null||n.return===null){xe=1,xl=t,fe=null;break}e:{var i=e,a=n.return,o=n,c=t;if(t=Me,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,x=h.tag;if(!(h.mode&1)&&(x===0||x===11||x===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=wu(a);if(b!==null){b.flags&=-257,Nu(b,a,o,i,t),b.mode&1&&bu(i,u,t),t=b,c=u;var w=t.updateQueue;if(w===null){var N=new Set;N.add(c),t.updateQueue=N}else w.add(c);break e}else{if(!(t&1)){bu(i,u,t),Xo();break e}c=Error(M(426))}}else if(ie&&o.mode&1){var _=wu(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Nu(_,a,o,i,t),Lo(yr(c,o));break e}}i=c=yr(c,o),xe!==4&&(xe=2),Kr===null?Kr=[i]:Kr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=wd(i,c,t);fu(i,p);break e;case 1:o=c;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nn===null||!nn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Nd(i,o,t);fu(i,v);break e}}i=i.return}while(i!==null)}Vd(n)}catch(k){t=k,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function Dd(){var e=Ms.current;return Ms.current=Ss,e===null?Ss:e}function Xo(){(xe===0||xe===3||xe===2)&&(xe=4),Ne===null||!(An&268435455)&&!(qs&268435455)||qt(Ne,Me)}function _s(e,t){var n=K;K|=2;var r=Dd();(Ne!==e||Me!==t)&&(At=null,jn(e,t));do try{x3();break}catch(s){Id(e,s)}while(1);if(Po(),K=n,Ms.current=r,fe!==null)throw Error(M(261));return Ne=null,Me=0,xe}function x3(){for(;fe!==null;)Rd(fe)}function g3(){for(;fe!==null&&!Vm();)Rd(fe)}function Rd(e){var t=Ud(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Vd(e):fe=t,qo.current=null}function Vd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=u3(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,fe=null;return}}else if(n=c3(n,t,qe),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);xe===0&&(xe=5)}function xn(e,t,n){var r=X,s=ot.transition;try{ot.transition=null,X=1,v3(e,t,n,r)}finally{ot.transition=s,X=r}return null}function v3(e,t,n,r){do mr();while(Yt!==null);if(K&6)throw Error(M(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qm(e,i),e===Ne&&(fe=Ne=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hl||(Hl=!0,Hd(ds,function(){return mr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var a=X;X=1;var o=K;K|=4,qo.current=null,m3(e,n),Fd(n,e),If(Sa),fs=!!ka,Sa=ka=null,e.current=n,f3(n),Bm(),K=o,X=a,ot.transition=i}else e.current=n;if(Hl&&(Hl=!1,Yt=e,Ts=s),i=e.pendingLanes,i===0&&(nn=null),Zm(n.stateNode),Ze(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Es)throw Es=!1,e=Wa,Wa=null,e;return Ts&1&&e.tag!==0&&mr(),i=e.pendingLanes,i&1?e===qa?Qr++:(Qr=0,qa=e):Qr=0,mn(),null}function mr(){if(Yt!==null){var e=b2(Ts),t=ot.transition,n=X;try{if(ot.transition=null,X=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,Ts=0,K&6)throw Error(M(331));var s=K;for(K|=4,I=e.current;I!==null;){var i=I,a=i.child;if(I.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(I=u;I!==null;){var h=I;switch(h.tag){case 0:case 11:case 15:Yr(8,h,i)}var x=h.child;if(x!==null)x.return=h,I=x;else for(;I!==null;){h=I;var f=h.sibling,b=h.return;if(Ld(h),h===u){I=null;break}if(f!==null){f.return=b,I=f;break}I=b}}}var w=i.alternate;if(w!==null){var N=w.child;if(N!==null){w.child=null;do{var _=N.sibling;N.sibling=null,N=_}while(N!==null)}}I=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,I=a;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,I=p;break e}I=i.return}}var m=e.current;for(I=m;I!==null;){a=I;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,I=g;else e:for(a=m;I!==null;){if(o=I,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ws(9,o)}}catch(k){ue(o,o.return,k)}if(o===a){I=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,I=v;break e}I=o.return}}if(K=s,mn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Is,e)}catch{}r=!0}return r}finally{X=n,ot.transition=t}}return!1}function Fu(e,t,n){t=yr(n,t),t=wd(e,t,1),e=tn(e,t,1),t=Fe(),e!==null&&(jl(e,1,t),Ze(e,t))}function ue(e,t,n){if(e.tag===3)Fu(e,e,n);else for(;t!==null;){if(t.tag===3){Fu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=yr(n,e),e=Nd(t,e,1),t=tn(t,e,1),e=Fe(),t!==null&&(jl(t,1,e),Ze(t,e));break}}t=t.return}}function y3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Me&n)===n&&(xe===4||xe===3&&(Me&130023424)===Me&&500>de()-Yo?jn(e,0):Go|=n),Ze(e,t)}function Bd(e,t){t===0&&(e.mode&1?(t=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):t=1);var n=Fe();e=Dt(e,t),e!==null&&(jl(e,t,n),Ze(e,n))}function b3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bd(e,n)}function w3(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Bd(e,n)}var Ud;Ud=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,o3(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ie&&t.flags&1048576&&W2(t,bs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ns(e,t),e=t.pendingProps;var s=hr(t,$e.current);dr(t,n),s=Bo(null,t,r,e,s,n);var i=Uo();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(i=!0,vs(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Oo(t),s.updater=Hs,t.stateNode=s,s._reactInternals=t,Fa(t,r,e,n),t=Ia(null,t,r,!0,i,n)):(t.tag=0,ie&&i&&_o(t),Pe(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ns(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=j3(r),e=pt(r,e),s){case 0:t=Oa(null,t,r,e,n);break e;case 1:t=ku(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=Cu(null,t,r,pt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:pt(r,s),Oa(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:pt(r,s),ku(e,t,r,s,n);case 3:e:{if(Sd(t),e===null)throw Error(M(387));r=t.pendingProps,i=t.memoizedState,s=i.element,K2(e,t),js(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=yr(Error(M(423)),t),t=Su(e,t,r,n,s);break e}else if(r!==s){s=yr(Error(M(424)),t),t=Su(e,t,r,n,s);break e}else for(Ye=en(t.stateNode.containerInfo.firstChild),Xe=t,ie=!0,xt=null,n=ed(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===s){t=Rt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return td(t),e===null&&La(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,a=s.children,Ma(r,s)?a=null:i!==null&&Ma(r,i)&&(t.flags|=32),kd(e,t),Pe(e,t,a,n),t.child;case 6:return e===null&&La(t),null;case 13:return Md(e,t,n);case 4:return Io(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gr(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:pt(r,s),ju(e,t,r,s,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,a=s.value,ne(ws,r._currentValue),r._currentValue=a,i!==null)if(yt(i.value,a)){if(i.children===s.children&&!Ue.current){t=Rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){a=i.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=zt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),$a(i.return,n,t),o.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(M(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),$a(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Pe(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,dr(t,n),s=ct(s),r=r(s),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,s=pt(r,t.pendingProps),s=pt(r.type,s),Cu(e,t,r,s,n);case 15:return jd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:pt(r,s),ns(e,t),t.tag=1,He(r)?(e=!0,vs(t)):e=!1,dr(t,n),X2(t,r,s),Fa(t,r,s,n),Ia(null,t,r,!0,e,n);case 19:return Ed(e,t,n);case 22:return Cd(e,t,n)}throw Error(M(156,t.tag))};function Hd(e,t){return x2(e,t)}function N3(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new N3(e,t,n,r)}function Jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function j3(e){if(typeof e=="function")return Jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vo)return 11;if(e===yo)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ss(e,t,n,r,s,i){var a=2;if(r=e,typeof e=="function")Jo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Gn:return Cn(n.children,s,i,t);case go:a=8,s|=8;break;case sa:return e=at(12,n,t,s|2),e.elementType=sa,e.lanes=i,e;case ia:return e=at(13,n,t,s),e.elementType=ia,e.lanes=i,e;case aa:return e=at(19,n,t,s),e.elementType=aa,e.lanes=i,e;case J0:return Gs(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q0:a=10;break e;case X0:a=9;break e;case vo:a=11;break e;case yo:a=14;break e;case Ht:a=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=at(a,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function Cn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Gs(e,t,n,r){return e=at(22,e,r,t),e.elementType=J0,e.lanes=n,e.stateNode={isHidden:!1},e}function qi(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Gi(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function C3(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ei(0),this.expirationTimes=Ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ec(e,t,n,r,s,i,a,o,c){return e=new C3(e,t,n,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=at(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oo(i),e}function k3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zd(e){if(!e)return on;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(He(n))return H2(e,n,t)}return t}function Wd(e,t,n,r,s,i,a,o,c){return e=ec(n,r,!0,e,s,i,a,o,c),e.context=Zd(null),n=e.current,r=Fe(),s=rn(n),i=zt(r,s),i.callback=t??null,tn(n,i,s),e.current.lanes=s,jl(e,s,r),Ze(e,r),e}function Ys(e,t,n,r){var s=t.current,i=Fe(),a=rn(s);return n=Zd(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(s,t,a),e!==null&&(vt(e,s,a,i),Jl(e,s,a)),a}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tc(e,t){zu(e,t),(e=e.alternate)&&zu(e,t)}function S3(){return null}var qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function nc(e){this._internalRoot=e}Ks.prototype.render=nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ys(e,t,null,null)};Ks.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Ys(null,e,null,null)}),t[It]=null}};function Ks(e){this._internalRoot=e}Ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=j2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&k2(e)}};function rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ou(){}function M3(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=As(a);i.call(u)}}var a=Wd(t,r,e,0,null,!1,!1,"",Ou);return e._reactRootContainer=a,e[It]=a.current,ol(e.nodeType===8?e.parentNode:e),Ln(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var o=r;r=function(){var u=As(c);o.call(u)}}var c=ec(e,0,!1,null,null,!1,!1,"",Ou);return e._reactRootContainer=c,e[It]=c.current,ol(e.nodeType===8?e.parentNode:e),Ln(function(){Ys(t,c,n,r)}),c}function Xs(e,t,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var o=s;s=function(){var c=As(a);o.call(c)}}Ys(t,a,e,s)}else a=M3(n,t,e,s,r);return As(a)}w2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(No(t,n|1),Ze(t,de()),!(K&6)&&(br=de()+500,mn()))}break;case 13:Ln(function(){var r=Dt(e,1);if(r!==null){var s=Fe();vt(r,e,1,s)}}),tc(e,1)}};jo=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Fe();vt(t,e,134217728,n)}tc(e,134217728)}};N2=function(e){if(e.tag===13){var t=rn(e),n=Dt(e,t);if(n!==null){var r=Fe();vt(n,e,t,r)}tc(e,t)}};j2=function(){return X};C2=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};ga=function(e,t,n){switch(t){case"input":if(ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Bs(r);if(!s)throw Error(M(90));t2(r),ua(r,s)}}}break;case"textarea":r2(e,n);break;case"select":t=n.value,t!=null&&ar(e,!!n.multiple,t,!1)}};u2=Ko;d2=Ln;var E3={usingClientEntryPoint:!1,Events:[kl,Xn,Bs,o2,c2,Ko]},zr={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},T3={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=p2(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||S3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Is=Zl.inject(T3),kt=Zl}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E3;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rc(t))throw Error(M(200));return k3(e,t,null,n)};et.createRoot=function(e,t){if(!rc(e))throw Error(M(299));var n=!1,r="",s=qd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ec(e,1,!1,null,null,n,!1,r,s),e[It]=t.current,ol(e.nodeType===8?e.parentNode:e),new nc(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=p2(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Ln(e)};et.hydrate=function(e,t,n){if(!Qs(t))throw Error(M(200));return Xs(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!rc(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=qd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Wd(t,null,e,1,n??null,s,!1,i,a),e[It]=t.current,ol(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Ks(t)};et.render=function(e,t,n){if(!Qs(t))throw Error(M(200));return Xs(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Qs(e))throw Error(M(40));return e._reactRootContainer?(Ln(function(){Xs(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};et.unstable_batchedUpdates=Ko;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qs(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Xs(e,t,n,!1,r)};et.version="18.2.0-next-9e3b772b8-20220608";function Gd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gd)}catch(e){console.error(e)}}Gd(),W0.exports=et;var _3=W0.exports,Iu=_3;ra.createRoot=Iu.createRoot,ra.hydrateRoot=Iu.hydrateRoot;const A3="/assets/react-35ef61ed.svg";var L3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $3=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ie=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:a,children:o,...c},u)=>j.createElement("svg",{ref:u,...L3,width:s,height:s,stroke:r,strokeWidth:a?Number(i)*24/Number(s):i,className:`lucide lucide-${$3(e)}`,...c},[...t.map(([h,x])=>j.createElement(h,x)),...(Array.isArray(o)?o:[o])||[]]));return n.displayName=`${e}`,n},P3=Ie("ArrowLeft",[["line",{x1:"19",x2:"5",y1:"12",y2:"12",key:"9fu2vq"}],["polyline",{points:"12 19 5 12 12 5",key:"1ksm0z"}]]),Xr=Ie("ArrowRight",[["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["polyline",{points:"12 5 19 12 12 19",key:"sfr3i6"}]]),F3=Ie("ArrowUpRight",[["line",{x1:"7",x2:"17",y1:"17",y2:"7",key:"11kluq"}],["polyline",{points:"7 7 17 7 17 17",key:"blehsp"}]]),Or=Ie("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]),Nt=Ie("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),z3=Ie("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),O3=Ie("ChevronDown",[["polyline",{points:"6 9 12 15 18 9",key:"1do0m2"}]]),I3=Ie("ChevronRight",[["polyline",{points:"9 18 15 12 9 6",key:"1rtp27"}]]),D3=Ie("ChevronUp",[["polyline",{points:"18 15 12 9 6 15",key:"1uugdp"}]]),R3=Ie("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),kr=Ie("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),V3=Ie("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),B3=Ie("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),U3=Ie("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),Sr=Ie("X",[["line",{x1:"18",x2:"6",y1:"6",y2:"18",key:"15jfxm"}],["line",{x1:"6",x2:"18",y1:"6",y2:"18",key:"d1lma3"}]]),Yd=j.createContext("");var Kd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Du=Be.createContext&&Be.createContext(Kd),sn=globalThis&&globalThis.__assign||function(){return sn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},sn.apply(this,arguments)},H3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function Qd(e){return e&&e.map(function(t,n){return Be.createElement(t.tag,sn({key:n},t.attr),Qd(t.child))})}function De(e){return function(t){return Be.createElement(Z3,sn({attr:sn({},e.attr)},t),Qd(e.child))}}function Z3(e){var t=function(n){var r=e.attr,s=e.size,i=e.title,a=H3(e,["attr","size","title"]),o=s||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),Be.createElement("svg",sn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:c,style:sn(sn({color:e.color||n.color},n.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),i&&Be.createElement("title",null,i),e.children)};return Du!==void 0?Be.createElement(Du.Consumer,null,function(n){return t(n)}):t(Kd)}function W3(e){return De({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"}}]})(e)}function q3(e){return De({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(e)}function G3(e){return De({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"}}]})(e)}function me(e){const[t,n]=j.useState(!1),[r,s]=j.useState(0),{showCodeButton:i}=j.useContext(Yd),a=()=>{navigator.clipboard.writeText(e==null?void 0:e.code).then(()=>{console.log("Text copied to clipboard"),s(o=>o+1)}).catch(o=>{console.error("Failed to copy text: ",o)})};return l.jsxs(l.Fragment,{children:[i&&l.jsx("button",{onClick:()=>n(!t),type:"button",className:"rounded-full w-12 h-12 bg-white border-2 border-black px-3 py-2 font-bold text-black shadow-lg hover:text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black fixed top-10 right-10 flex justify-center items-center text-lg",style:{zIndex:1e4},children:"</>"}),t&&l.jsxs("div",{className:"bg-gray-600 mt-10 p-10 text-white relative rounded-lg",children:[l.jsxs("span",{onClick:a,className:"absolute top-2 right-2 cursor-pointer",children:[l.jsx(q3,{className:"hover:scale-110 text-4xl"}),r!==0&&l.jsx("span",{className:"absolute top-0 -left-4 text-xl",children:r})]}),l.jsx("pre",{children:e==null?void 0:e.code})]})]})}function Y3(){return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`<button
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
 */function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gl.apply(this,arguments)}var Kt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kt||(Kt={}));const Ru="popstate";function K3(e){e===void 0&&(e={});function t(r,s){let{pathname:i,search:a,hash:o}=r.location;return Ka("",{pathname:i,search:a,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Xd(s)}return X3(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Q3(){return Math.random().toString(36).substr(2,8)}function Vu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ka(e,t,n,r){return n===void 0&&(n=null),gl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mr(t):t,{state:n,key:t&&t.key||r||Q3()})}function Xd(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Mr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function X3(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,o=Kt.Pop,c=null,u=h();u==null&&(u=0,a.replaceState(gl({},a.state,{idx:u}),""));function h(){return(a.state||{idx:null}).idx}function x(){o=Kt.Pop;let _=h(),p=_==null?null:_-u;u=_,c&&c({action:o,location:N.location,delta:p})}function f(_,p){o=Kt.Push;let m=Ka(N.location,_,p);n&&n(m,_),u=h()+1;let g=Vu(m,u),v=N.createHref(m);try{a.pushState(g,"",v)}catch{s.location.assign(v)}i&&c&&c({action:o,location:N.location,delta:1})}function b(_,p){o=Kt.Replace;let m=Ka(N.location,_,p);n&&n(m,_),u=h();let g=Vu(m,u),v=N.createHref(m);a.replaceState(g,"",v),i&&c&&c({action:o,location:N.location,delta:0})}function w(_){let p=s.location.origin!=="null"?s.location.origin:s.location.href,m=typeof _=="string"?_:Xd(_);return ge(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let N={get action(){return o},get location(){return e(s,a)},listen(_){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Ru,x),c=_,()=>{s.removeEventListener(Ru,x),c=null}},createHref(_){return t(s,_)},createURL:w,encodeLocation(_){let p=w(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:b,go(_){return a.go(_)}};return N}var Bu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bu||(Bu={}));function J3(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Mr(t):t,s=t1(r.pathname||"/",n);if(s==null)return null;let i=Jd(e);ep(i);let a=null;for(let o=0;a==null&&o<i.length;++o)a=cp(i[o],mp(s));return a}function Jd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,a,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=kn([r,c.relativePath]),h=n.concat(c);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jd(i.children,t,h,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:ap(u,i.index),routesMeta:h})};return e.forEach((i,a)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))s(i,a);else for(let c of e1(i.path))s(i,a,c)}),t}function e1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=e1(r.join("/")),o=[];return o.push(...a.map(c=>c===""?i:[i,c].join("/"))),s&&o.push(...a),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function ep(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:op(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tp=/^:\w+$/,np=3,rp=2,lp=1,sp=10,ip=-2,Uu=e=>e==="*";function ap(e,t){let n=e.split("/"),r=n.length;return n.some(Uu)&&(r+=ip),t&&(r+=rp),n.filter(s=>!Uu(s)).reduce((s,i)=>s+(tp.test(i)?np:i===""?lp:sp),r)}function op(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function cp(e,t){let{routesMeta:n}=e,r={},s="/",i=[];for(let a=0;a<n.length;++a){let o=n[a],c=a===n.length-1,u=s==="/"?t:t.slice(s.length)||"/",h=up({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},u);if(!h)return null;Object.assign(r,h.params);let x=o.route;i.push({params:r,pathname:kn([s,h.pathname]),pathnameBase:vp(kn([s,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(s=kn([s,h.pathnameBase]))}return i}function up(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=dp(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:r.reduce((u,h,x)=>{if(h==="*"){let f=o[x]||"";a=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}return u[h]=fp(o[x]||"",h),u},{}),pathname:i,pathnameBase:a,pattern:e}}function dp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,o)=>(r.push(o),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function mp(e){try{return decodeURI(e)}catch(t){return lc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fp(e,t){try{return decodeURIComponent(e)}catch(n){return lc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function t1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function pp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?Mr(e):e;return{pathname:n?n.startsWith("/")?n:hp(n,t):t,search:yp(r),hash:bp(s)}}function hp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Yi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gp(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=Mr(e):(s=gl({},e),ge(!s.pathname||!s.pathname.includes("?"),Yi("?","pathname","search",s)),ge(!s.pathname||!s.pathname.includes("#"),Yi("#","pathname","hash",s)),ge(!s.search||!s.search.includes("#"),Yi("#","search","hash",s)));let i=e===""||s.pathname==="",a=i?"/":s.pathname,o;if(r||a==null)o=n;else{let x=t.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),x-=1;s.pathname=f.join("/")}o=x>=0?t[x]:"/"}let c=pp(s,o),u=a&&a!=="/"&&a.endsWith("/"),h=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const kn=e=>e.join("/").replace(/\/\/+/g,"/"),vp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const n1=["post","put","patch","delete"];new Set(n1);const Np=["get",...n1];new Set(Np);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ls(){return Ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ls.apply(this,arguments)}const sc=j.createContext(null),jp=j.createContext(null),Js=j.createContext(null),ei=j.createContext(null),zn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),r1=j.createContext(null);function ti(){return j.useContext(ei)!=null}function ic(){return ti()||ge(!1),j.useContext(ei).location}function l1(e){j.useContext(Js).static||j.useLayoutEffect(e)}function ac(){let{isDataRoute:e}=j.useContext(zn);return e?Op():Cp()}function Cp(){ti()||ge(!1);let e=j.useContext(sc),{basename:t,navigator:n}=j.useContext(Js),{matches:r}=j.useContext(zn),{pathname:s}=ic(),i=JSON.stringify(xp(r).map(c=>c.pathnameBase)),a=j.useRef(!1);return l1(()=>{a.current=!0}),j.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){n.go(c);return}let h=gp(c,JSON.parse(i),s,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:kn([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,i,s,e])}function kp(){let{matches:e}=j.useContext(zn),t=e[e.length-1];return t?t.params:{}}function Sp(e,t){return Mp(e,t)}function Mp(e,t,n){ti()||ge(!1);let{navigator:r}=j.useContext(Js),{matches:s}=j.useContext(zn),i=s[s.length-1],a=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let c=ic(),u;if(t){var h;let N=typeof t=="string"?Mr(t):t;o==="/"||(h=N.pathname)!=null&&h.startsWith(o)||ge(!1),u=N}else u=c;let x=u.pathname||"/",f=o==="/"?x:x.slice(o.length)||"/",b=J3(e,{pathname:f}),w=Lp(b&&b.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:kn([o,r.encodeLocation?r.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?o:kn([o,r.encodeLocation?r.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n);return t&&w?j.createElement(ei.Provider,{value:{location:Ls({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Kt.Pop}},w):w}function Ep(){let e=zp(),t=wp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:s},n):null,i)}const Tp=j.createElement(Ep,null);class _p extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?j.createElement(zn.Provider,{value:this.props.routeContext},j.createElement(r1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ap(e){let{routeContext:t,match:n,children:r}=e,s=j.useContext(sc);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(zn.Provider,{value:t},r)}function Lp(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let o=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));o>=0||ge(!1),i=i.slice(0,Math.min(i.length,o+1))}return i.reduceRight((o,c,u)=>{let h=c.route.id?a==null?void 0:a[c.route.id]:null,x=null;n&&(x=c.route.errorElement||Tp);let f=t.concat(i.slice(0,u+1)),b=()=>{let w;return h?w=x:c.route.Component?w=j.createElement(c.route.Component,null):c.route.element?w=c.route.element:w=o,j.createElement(Ap,{match:c,routeContext:{outlet:o,matches:f,isDataRoute:n!=null},children:w})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?j.createElement(_p,{location:n.location,revalidation:n.revalidation,component:x,error:h,children:b(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):b()},null)}var Qa;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Qa||(Qa={}));var vl;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(vl||(vl={}));function $p(e){let t=j.useContext(sc);return t||ge(!1),t}function Pp(e){let t=j.useContext(jp);return t||ge(!1),t}function Fp(e){let t=j.useContext(zn);return t||ge(!1),t}function s1(e){let t=Fp(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function zp(){var e;let t=j.useContext(r1),n=Pp(vl.UseRouteError),r=s1(vl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Op(){let{router:e}=$p(Qa.UseNavigateStable),t=s1(vl.UseNavigateStable),n=j.useRef(!1);return l1(()=>{n.current=!0}),j.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Ls({fromRouteId:t},i)))},[e,t])}function Y(e){ge(!1)}function Ip(e){let{basename:t="/",children:n=null,location:r,navigationType:s=Kt.Pop,navigator:i,static:a=!1}=e;ti()&&ge(!1);let o=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:o,navigator:i,static:a}),[o,i,a]);typeof r=="string"&&(r=Mr(r));let{pathname:u="/",search:h="",hash:x="",state:f=null,key:b="default"}=r,w=j.useMemo(()=>{let N=t1(u,o);return N==null?null:{location:{pathname:N,search:h,hash:x,state:f,key:b},navigationType:s}},[o,u,h,x,f,b,s]);return w==null?null:j.createElement(Js.Provider,{value:c},j.createElement(ei.Provider,{children:n,value:w}))}function i1(e){let{children:t,location:n}=e;return Sp(Xa(t),n)}var Hu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Hu||(Hu={}));new Promise(()=>{});function Xa(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,s)=>{if(!j.isValidElement(r))return;let i=[...t,s];if(r.type===j.Fragment){n.push.apply(n,Xa(r.props.children,i));return}r.type!==Y&&ge(!1),!r.props.index||!r.props.children||ge(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Xa(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dp(e){let{basename:t,children:n,window:r}=e,s=j.useRef();s.current==null&&(s.current=K3({window:r,v5Compat:!0}));let i=s.current,[a,o]=j.useState({action:i.action,location:i.location});return j.useLayoutEffect(()=>i.listen(o),[i]),j.createElement(Ip,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i})}var Zu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Zu||(Zu={}));var Wu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wu||(Wu={}));function Rp(){return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:` <div className="space-x-6">
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
        </div>`}),l.jsxs("div",{className:"space-x-6",children:[l.jsx("img",{className:"inline-block h-6 w-6 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),l.jsx("img",{className:"inline-block h-8 w-8 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),l.jsx("img",{className:"inline-block h-10 w-10 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),l.jsx("img",{className:"inline-block h-12 w-12 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),l.jsx("img",{className:"inline-block h-14 w-14 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"})]})]})}function qu(){return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:` <div className="w-[300px] rounded-md border">
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
    </div>`}),l.jsxs("div",{className:"w-[300px] rounded-md border",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",alt:"Laptop",className:"h-[200px] w-full rounded-t-md object-cover"}),l.jsxs("div",{className:"p-4",children:[l.jsxs("h1",{className:"inline-flex items-center text-lg font-semibold",children:["About Macbook ",l.jsx(F3,{className:"ml-2 h-4 w-4"})]}),l.jsx("p",{className:"mt-3 text-sm text-gray-600",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"}),l.jsxs("div",{className:"mt-4",children:[l.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Macbook"}),l.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Apple"}),l.jsx("span",{className:"mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900",children:"#Laptop"})]}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Read"})]})]})]})}function Vp(){return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`<section>
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
      </section>`}),l.jsx("section",{children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[l.jsxs("div",{className:"relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24",children:[l.jsx("div",{className:"absolute inset-0",children:l.jsx("img",{className:"h-full w-full rounded-md object-cover object-top",src:"https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:""})}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),l.jsx("div",{className:"relative",children:l.jsxs("div",{className:"w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24",children:[l.jsx("h3",{className:"text-4xl font-bold text-white",children:"Now you dont have to rely on your designer to create a new page"}),l.jsxs("ul",{className:"mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2",children:[l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Commercial License "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Unlimited Exports "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" 120+ Coded Blocks "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Design Files Included "})]})]})]})})]}),l.jsx("div",{className:"flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",children:l.jsxs("div",{className:"xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",children:[l.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl",children:"Sign up"}),l.jsxs("p",{className:"mt-2 text-base text-gray-600",children:["Already have an account?"," ",l.jsx("a",{href:"#",title:"",className:"font-medium text-black transition-all duration-200 hover:underline",children:"Sign In"})]}),l.jsx("form",{action:"#",method:"POST",className:"mt-8",children:l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{children:[l.jsxs("label",{htmlFor:"name",className:"text-base font-medium text-gray-900",children:[" ","Full Name"," "]}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Full Name",id:"name"})})]}),l.jsxs("div",{children:[l.jsxs("label",{htmlFor:"email",className:"text-base font-medium text-gray-900",children:[" ","Email address"," "]}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email",id:"email"})})]}),l.jsxs("div",{children:[l.jsx("div",{className:"flex items-center justify-between",children:l.jsxs("label",{htmlFor:"password",className:"text-base font-medium text-gray-900",children:[" ","Password"," "]})}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"password",placeholder:"Password",id:"password"})})]}),l.jsx("div",{children:l.jsxs("button",{type:"button",className:"inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",children:["Create Account ",l.jsx(Xr,{className:"ml-2",size:16})]})})]})}),l.jsxs("div",{className:"mt-3 space-y-3",children:[l.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[l.jsx("span",{className:"mr-2 inline-block",children:l.jsx("svg",{className:"h-6 w-6 text-rose-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"})})}),"Sign up with Google"]}),l.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[l.jsx("span",{className:"mr-2 inline-block",children:l.jsx("svg",{className:"h-6 w-6 text-[#2563EB]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"})})}),"Sign up with Facebook"]})]})]})})]})})]})}function Bp(){return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`<section>
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
      </section>`}),l.jsx("section",{children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[l.jsxs("div",{className:"relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24",children:[l.jsx("div",{className:"absolute inset-0",children:l.jsx("img",{className:"h-full w-full rounded-md object-cover object-top",src:"https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",alt:""})}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),l.jsx("div",{className:"relative",children:l.jsxs("div",{className:"w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24",children:[l.jsx("h3",{className:"text-4xl font-bold text-white",children:"Now you dont have to rely on your designer to create a new page"}),l.jsxs("ul",{className:"mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2",children:[l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Commercial License "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Unlimited Exports "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" 120+ Coded Blocks "})]}),l.jsxs("li",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500",children:l.jsx("svg",{className:"h-3.5 w-3.5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),l.jsx("span",{className:"text-lg font-medium text-white",children:" Design Files Included "})]})]})]})})]}),l.jsx("div",{className:"flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",children:l.jsxs("div",{className:"xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",children:[l.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl",children:"Sign in"}),l.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["Don't have an account?"," ",l.jsx("a",{href:"#",title:"",className:"font-semibold text-black transition-all duration-200 hover:underline",children:"Create a free account"})]}),l.jsx("form",{action:"#",method:"POST",className:"mt-8",children:l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{children:[l.jsxs("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Email address"," "]}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"})})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Password"," "]}),l.jsxs("a",{href:"#",title:"",className:"text-sm font-semibold text-black hover:underline",children:[" ","Forgot password?"," "]})]}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"password",placeholder:"Password"})})]}),l.jsx("div",{children:l.jsxs("button",{type:"button",className:"inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",children:["Get started ",l.jsx(Xr,{className:"ml-2",size:16})]})})]})}),l.jsxs("div",{className:"mt-3 space-y-3",children:[l.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[l.jsx("span",{className:"mr-2 inline-block",children:l.jsx("svg",{className:"h-6 w-6 text-rose-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"})})}),"Sign in with Google"]}),l.jsxs("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",children:[l.jsx("span",{className:"mr-2 inline-block",children:l.jsx("svg",{className:"h-6 w-6 text-[#2563EB]",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"})})}),"Sign in with Facebook"]})]})]})})]})})]})}const Gu=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],Up=[{category:"Design",title:"10 Tips for Crafting the Perfect UX Portfolio",description:"Learn how to showcase your design skills and stand out in a crowded job market.",author:"Emily Lee",date:"3 April 2023",avatar:"https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg",poster:"https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"},{category:"Technology",title:"The Future of Mobile App Development",description:"Discover the latest trends and techniques that will shape the future of mobile app development.",author:"John Smith",date:"1 April 2023",avatar:"https://randomuser.me/api/portraits/men/32.jpg",poster:"https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"},{category:"Business",title:"How to Launch a Successful Startup",description:"Learn the essential steps to launch a successful startup and make your dreams a reality.",author:"Sarah Brown",date:"28 March 2023",avatar:"https://randomuser.me/api/portraits/women/44.jpg",poster:"https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Health",title:"The Benefits of Mindfulness Meditation",description:"Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.",author:"David Kim",date:"25 March 2023",avatar:"https://randomuser.me/api/portraits/men/46.jpg",poster:"https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Education",title:"Why Learning a Second Language is Important",description:"Explore the benefits of learning a second language and how it can improve your cognitive abilities.",author:"Maria Rodriguez",date:"22 March 2023",avatar:"https://randomuser.me/api/portraits/men/97.jpg",poster:"https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Travel",title:"The Best Places to Visit in Europe",description:"Discover the top destinations in Europe and plan your dream vacation.",author:"Alex Johnson",date:"19 March 2023",avatar:"https://randomuser.me/api/portraits/men/99.jpg",poster:"https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Food",title:"How to Make the Perfect Cup of Coffee",description:"Learn the secrets to making the perfect cup of coffee and impress your friends and family.",author:"Thomas Lee",date:"16 March 2023",avatar:"https://randomuser.me/api/portraits/women/63.jpg",poster:"https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80"},{category:"Fashion",title:"The Latest Fashion Trends for Spring 2023",description:"Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.",author:"Jessica Kim",date:"13 March 2023",avatar:"https://randomuser.me/api/portraits/women/47.jpg",poster:"https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"},{category:"Sports",title:"The Benefits of Yoga for Athletes",description:"Learn how practicing yoga can improve your athletic performance and prevent injuries.",author:"Michael Johnson",date:"10 March 2023",avatar:"https://randomuser.me/api/portraits/men/86.jpg",poster:"https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"}];function Hp(){const[e,t]=Be.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`//Source - Dev UI
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
}`}),l.jsxs("div",{children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:Gu.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:Gu.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsxs("div",{className:"mx-auto max-w-7xl px-2",children:[l.jsxs("div",{className:"flex flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[l.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Resources and insights"}),l.jsx("p",{className:"max-w-4xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"}),l.jsxs("div",{className:"mt-6 flex w-full items-center space-x-2 md:w-1/3",children:[l.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Search Topics"}),l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Search"})]})]}),l.jsx("div",{className:"mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row",children:l.jsx("div",{className:"flex w-full items-end border-b border-gray-300",children:["Design","Product","Software Engineering","Customer Success"].map((r,s)=>l.jsx("div",{className:"cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black",children:r},r))})}),l.jsx("div",{className:"grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3",children:Up.map(r=>l.jsxs("div",{className:"border",children:[l.jsx("img",{src:r.poster,className:"aspect-video w-full rounded-md",alt:""}),l.jsxs("div",{className:"min-h-min p-3",children:[l.jsxs("p",{className:"mt-4 w-full text-xs font-semibold leading-tight text-gray-700",children:["#",r.category]}),l.jsx("p",{className:"mt-4 flex-1 text-base font-semibold text-gray-900",children:r.title}),l.jsx("p",{className:"mt-4 w-full text-sm leading-normal text-gray-600",children:r.description}),l.jsxs("div",{className:"mt-4 flex space-x-3 ",children:[l.jsx("img",{className:"h-full w-10 rounded-lg",src:r.avatar,alt:r.author}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-semibold leading-tight text-gray-900",children:r.author}),l.jsx("p",{className:"text-sm leading-tight text-gray-600",children:r.date})]})]})]})]},r.title))}),l.jsx("div",{className:"w-full border-t border-gray-300",children:l.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[l.jsx("div",{className:"hidden md:block",children:l.jsxs("p",{children:["showing ",l.jsx("strong",{children:"1"})," to ",l.jsx("strong",{children:"10"})," of ",l.jsx("strong",{children:"20"})," results"]})}),l.jsxs("div",{className:"space-x-2",children:[l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"← Previous"}),l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Next →"})]})]})})]}),l.jsx("div",{className:"mx-auto mt-12 max-w-7xl bg-gray-50",children:l.jsxs("footer",{className:"px-4 py-10",children:[l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[l.jsx("span",{children:l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:l.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),l.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"About us"}),l.jsx("li",{children:"Company History"}),l.jsx("li",{children:"Our Team"}),l.jsx("li",{children:"Our Vision"}),l.jsx("li",{children:"Press Release"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Washington"}),l.jsx("li",{children:"New Hampshire"}),l.jsx("li",{children:"Maine"}),l.jsx("li",{children:"Texas"}),l.jsx("li",{children:"Indiana"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"UI / UX Design"}),l.jsx("li",{children:"App Development"}),l.jsx("li",{children:"API reference"}),l.jsx("li",{children:"API status"}),l.jsx("li",{children:"Documentation"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Privacy Policy"}),l.jsx("li",{children:"Terms of Service"}),l.jsx("li",{children:"Cookie Policy"}),l.jsx("li",{children:"Disclaimer"}),l.jsx("li",{children:"Media Policy"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Facebook"}),l.jsx("li",{children:"Twitter"}),l.jsx("li",{children:"Instagram"}),l.jsx("li",{children:"Linkedin"}),l.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}var Yu=Array.isArray,Ku=Object.keys,Zp=Object.prototype.hasOwnProperty,Wp=typeof Element<"u";function Ja(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Yu(e),r=Yu(t),s,i,a;if(n&&r){if(i=e.length,i!=t.length)return!1;for(s=i;s--!==0;)if(!Ja(e[s],t[s]))return!1;return!0}if(n!=r)return!1;var o=e instanceof Date,c=t instanceof Date;if(o!=c)return!1;if(o&&c)return e.getTime()==t.getTime();var u=e instanceof RegExp,h=t instanceof RegExp;if(u!=h)return!1;if(u&&h)return e.toString()==t.toString();var x=Ku(e);if(i=x.length,i!==Ku(t).length)return!1;for(s=i;s--!==0;)if(!Zp.call(t,x[s]))return!1;if(Wp&&e instanceof Element&&t instanceof Element)return e===t;for(s=i;s--!==0;)if(a=x[s],!(a==="_owner"&&e.$$typeof)&&!Ja(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var qp=function(t,n){try{return Ja(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const gn=zs(qp);var Gp=function(t){return Yp(t)&&!Kp(t)};function Yp(e){return!!e&&typeof e=="object"}function Kp(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Jp(e)}var Qp=typeof Symbol=="function"&&Symbol.for,Xp=Qp?Symbol.for("react.element"):60103;function Jp(e){return e.$$typeof===Xp}function eh(e){return Array.isArray(e)?[]:{}}function $s(e,t){return t.clone!==!1&&t.isMergeableObject(e)?yl(eh(e),e,t):e}function th(e,t,n){return e.concat(t).map(function(r){return $s(r,n)})}function nh(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(s){r[s]=$s(e[s],n)}),Object.keys(t).forEach(function(s){!n.isMergeableObject(t[s])||!e[s]?r[s]=$s(t[s],n):r[s]=yl(e[s],t[s],n)}),r}function yl(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||th,n.isMergeableObject=n.isMergeableObject||Gp;var r=Array.isArray(t),s=Array.isArray(e),i=r===s;return i?r?n.arrayMerge(e,t,n):nh(e,t,n):$s(t,n)}yl.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,s){return yl(r,s,n)},{})};var eo=yl,rh=typeof global=="object"&&global&&global.Object===Object&&global;const a1=rh;var lh=typeof self=="object"&&self&&self.Object===Object&&self,sh=a1||lh||Function("return this")();const Et=sh;var ih=Et.Symbol;const cn=ih;var o1=Object.prototype,ah=o1.hasOwnProperty,oh=o1.toString,Ir=cn?cn.toStringTag:void 0;function ch(e){var t=ah.call(e,Ir),n=e[Ir];try{e[Ir]=void 0;var r=!0}catch{}var s=oh.call(e);return r&&(t?e[Ir]=n:delete e[Ir]),s}var uh=Object.prototype,dh=uh.toString;function mh(e){return dh.call(e)}var fh="[object Null]",ph="[object Undefined]",Qu=cn?cn.toStringTag:void 0;function On(e){return e==null?e===void 0?ph:fh:Qu&&Qu in Object(e)?ch(e):mh(e)}function c1(e,t){return function(n){return e(t(n))}}var hh=c1(Object.getPrototypeOf,Object);const oc=hh;function In(e){return e!=null&&typeof e=="object"}var xh="[object Object]",gh=Function.prototype,vh=Object.prototype,u1=gh.toString,yh=vh.hasOwnProperty,bh=u1.call(Object);function Xu(e){if(!In(e)||On(e)!=xh)return!1;var t=oc(e);if(t===null)return!0;var n=yh.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&u1.call(n)==bh}function wh(){this.__data__=[],this.size=0}function d1(e,t){return e===t||e!==e&&t!==t}function ni(e,t){for(var n=e.length;n--;)if(d1(e[n][0],t))return n;return-1}var Nh=Array.prototype,jh=Nh.splice;function Ch(e){var t=this.__data__,n=ni(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():jh.call(t,n,1),--this.size,!0}function kh(e){var t=this.__data__,n=ni(t,e);return n<0?void 0:t[n][1]}function Sh(e){return ni(this.__data__,e)>-1}function Mh(e,t){var n=this.__data__,r=ni(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Bt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Bt.prototype.clear=wh;Bt.prototype.delete=Ch;Bt.prototype.get=kh;Bt.prototype.has=Sh;Bt.prototype.set=Mh;function Eh(){this.__data__=new Bt,this.size=0}function Th(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function _h(e){return this.__data__.get(e)}function Ah(e){return this.__data__.has(e)}function Ml(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Lh="[object AsyncFunction]",$h="[object Function]",Ph="[object GeneratorFunction]",Fh="[object Proxy]";function m1(e){if(!Ml(e))return!1;var t=On(e);return t==$h||t==Ph||t==Lh||t==Fh}var zh=Et["__core-js_shared__"];const Ki=zh;var Ju=function(){var e=/[^.]+$/.exec(Ki&&Ki.keys&&Ki.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Oh(e){return!!Ju&&Ju in e}var Ih=Function.prototype,Dh=Ih.toString;function Dn(e){if(e!=null){try{return Dh.call(e)}catch{}try{return e+""}catch{}}return""}var Rh=/[\\^$.*+?()[\]{}|]/g,Vh=/^\[object .+?Constructor\]$/,Bh=Function.prototype,Uh=Object.prototype,Hh=Bh.toString,Zh=Uh.hasOwnProperty,Wh=RegExp("^"+Hh.call(Zh).replace(Rh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function qh(e){if(!Ml(e)||Oh(e))return!1;var t=m1(e)?Wh:Vh;return t.test(Dn(e))}function Gh(e,t){return e==null?void 0:e[t]}function Rn(e,t){var n=Gh(e,t);return qh(n)?n:void 0}var Yh=Rn(Et,"Map");const bl=Yh;var Kh=Rn(Object,"create");const wl=Kh;function Qh(){this.__data__=wl?wl(null):{},this.size=0}function Xh(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Jh="__lodash_hash_undefined__",ex=Object.prototype,tx=ex.hasOwnProperty;function nx(e){var t=this.__data__;if(wl){var n=t[e];return n===Jh?void 0:n}return tx.call(t,e)?t[e]:void 0}var rx=Object.prototype,lx=rx.hasOwnProperty;function sx(e){var t=this.__data__;return wl?t[e]!==void 0:lx.call(t,e)}var ix="__lodash_hash_undefined__";function ax(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=wl&&t===void 0?ix:t,this}function $n(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$n.prototype.clear=Qh;$n.prototype.delete=Xh;$n.prototype.get=nx;$n.prototype.has=sx;$n.prototype.set=ax;function ox(){this.size=0,this.__data__={hash:new $n,map:new(bl||Bt),string:new $n}}function cx(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ri(e,t){var n=e.__data__;return cx(t)?n[typeof t=="string"?"string":"hash"]:n.map}function ux(e){var t=ri(this,e).delete(e);return this.size-=t?1:0,t}function dx(e){return ri(this,e).get(e)}function mx(e){return ri(this,e).has(e)}function fx(e,t){var n=ri(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function fn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}fn.prototype.clear=ox;fn.prototype.delete=ux;fn.prototype.get=dx;fn.prototype.has=mx;fn.prototype.set=fx;var px=200;function hx(e,t){var n=this.__data__;if(n instanceof Bt){var r=n.__data__;if(!bl||r.length<px-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new fn(r)}return n.set(e,t),this.size=n.size,this}function Er(e){var t=this.__data__=new Bt(e);this.size=t.size}Er.prototype.clear=Eh;Er.prototype.delete=Th;Er.prototype.get=_h;Er.prototype.has=Ah;Er.prototype.set=hx;function xx(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var gx=function(){try{var e=Rn(Object,"defineProperty");return e({},"",{}),e}catch{}}();const e0=gx;function f1(e,t,n){t=="__proto__"&&e0?e0(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var vx=Object.prototype,yx=vx.hasOwnProperty;function p1(e,t,n){var r=e[t];(!(yx.call(e,t)&&d1(r,n))||n===void 0&&!(t in e))&&f1(e,t,n)}function li(e,t,n,r){var s=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var o=t[i],c=r?r(n[o],e[o],o,n,e):void 0;c===void 0&&(c=e[o]),s?f1(n,o,c):p1(n,o,c)}return n}function bx(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var wx="[object Arguments]";function t0(e){return In(e)&&On(e)==wx}var h1=Object.prototype,Nx=h1.hasOwnProperty,jx=h1.propertyIsEnumerable,Cx=t0(function(){return arguments}())?t0:function(e){return In(e)&&Nx.call(e,"callee")&&!jx.call(e,"callee")};const kx=Cx;var Sx=Array.isArray;const El=Sx;function Mx(){return!1}var x1=typeof Ke=="object"&&Ke&&!Ke.nodeType&&Ke,n0=x1&&typeof Qe=="object"&&Qe&&!Qe.nodeType&&Qe,Ex=n0&&n0.exports===x1,r0=Ex?Et.Buffer:void 0,Tx=r0?r0.isBuffer:void 0,_x=Tx||Mx;const g1=_x;var Ax=9007199254740991,Lx=/^(?:0|[1-9]\d*)$/;function $x(e,t){var n=typeof e;return t=t??Ax,!!t&&(n=="number"||n!="symbol"&&Lx.test(e))&&e>-1&&e%1==0&&e<t}var Px=9007199254740991;function v1(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Px}var Fx="[object Arguments]",zx="[object Array]",Ox="[object Boolean]",Ix="[object Date]",Dx="[object Error]",Rx="[object Function]",Vx="[object Map]",Bx="[object Number]",Ux="[object Object]",Hx="[object RegExp]",Zx="[object Set]",Wx="[object String]",qx="[object WeakMap]",Gx="[object ArrayBuffer]",Yx="[object DataView]",Kx="[object Float32Array]",Qx="[object Float64Array]",Xx="[object Int8Array]",Jx="[object Int16Array]",e4="[object Int32Array]",t4="[object Uint8Array]",n4="[object Uint8ClampedArray]",r4="[object Uint16Array]",l4="[object Uint32Array]",le={};le[Kx]=le[Qx]=le[Xx]=le[Jx]=le[e4]=le[t4]=le[n4]=le[r4]=le[l4]=!0;le[Fx]=le[zx]=le[Gx]=le[Ox]=le[Yx]=le[Ix]=le[Dx]=le[Rx]=le[Vx]=le[Bx]=le[Ux]=le[Hx]=le[Zx]=le[Wx]=le[qx]=!1;function s4(e){return In(e)&&v1(e.length)&&!!le[On(e)]}function cc(e){return function(t){return e(t)}}var y1=typeof Ke=="object"&&Ke&&!Ke.nodeType&&Ke,Jr=y1&&typeof Qe=="object"&&Qe&&!Qe.nodeType&&Qe,i4=Jr&&Jr.exports===y1,Qi=i4&&a1.process,a4=function(){try{var e=Jr&&Jr.require&&Jr.require("util").types;return e||Qi&&Qi.binding&&Qi.binding("util")}catch{}}();const wr=a4;var l0=wr&&wr.isTypedArray,o4=l0?cc(l0):s4;const c4=o4;var u4=Object.prototype,d4=u4.hasOwnProperty;function b1(e,t){var n=El(e),r=!n&&kx(e),s=!n&&!r&&g1(e),i=!n&&!r&&!s&&c4(e),a=n||r||s||i,o=a?bx(e.length,String):[],c=o.length;for(var u in e)(t||d4.call(e,u))&&!(a&&(u=="length"||s&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||$x(u,c)))&&o.push(u);return o}var m4=Object.prototype;function uc(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||m4;return e===n}var f4=c1(Object.keys,Object);const p4=f4;var h4=Object.prototype,x4=h4.hasOwnProperty;function g4(e){if(!uc(e))return p4(e);var t=[];for(var n in Object(e))x4.call(e,n)&&n!="constructor"&&t.push(n);return t}function w1(e){return e!=null&&v1(e.length)&&!m1(e)}function dc(e){return w1(e)?b1(e):g4(e)}function v4(e,t){return e&&li(t,dc(t),e)}function y4(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var b4=Object.prototype,w4=b4.hasOwnProperty;function N4(e){if(!Ml(e))return y4(e);var t=uc(e),n=[];for(var r in e)r=="constructor"&&(t||!w4.call(e,r))||n.push(r);return n}function mc(e){return w1(e)?b1(e,!0):N4(e)}function j4(e,t){return e&&li(t,mc(t),e)}var N1=typeof Ke=="object"&&Ke&&!Ke.nodeType&&Ke,s0=N1&&typeof Qe=="object"&&Qe&&!Qe.nodeType&&Qe,C4=s0&&s0.exports===N1,i0=C4?Et.Buffer:void 0,a0=i0?i0.allocUnsafe:void 0;function k4(e,t){if(t)return e.slice();var n=e.length,r=a0?a0(n):new e.constructor(n);return e.copy(r),r}function j1(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function S4(e,t){for(var n=-1,r=e==null?0:e.length,s=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[s++]=a)}return i}function C1(){return[]}var M4=Object.prototype,E4=M4.propertyIsEnumerable,o0=Object.getOwnPropertySymbols,T4=o0?function(e){return e==null?[]:(e=Object(e),S4(o0(e),function(t){return E4.call(e,t)}))}:C1;const fc=T4;function _4(e,t){return li(e,fc(e),t)}function k1(e,t){for(var n=-1,r=t.length,s=e.length;++n<r;)e[s+n]=t[n];return e}var A4=Object.getOwnPropertySymbols,L4=A4?function(e){for(var t=[];e;)k1(t,fc(e)),e=oc(e);return t}:C1;const S1=L4;function $4(e,t){return li(e,S1(e),t)}function M1(e,t,n){var r=t(e);return El(e)?r:k1(r,n(e))}function P4(e){return M1(e,dc,fc)}function F4(e){return M1(e,mc,S1)}var z4=Rn(Et,"DataView");const to=z4;var O4=Rn(Et,"Promise");const no=O4;var I4=Rn(Et,"Set");const ro=I4;var D4=Rn(Et,"WeakMap");const lo=D4;var c0="[object Map]",R4="[object Object]",u0="[object Promise]",d0="[object Set]",m0="[object WeakMap]",f0="[object DataView]",V4=Dn(to),B4=Dn(bl),U4=Dn(no),H4=Dn(ro),Z4=Dn(lo),vn=On;(to&&vn(new to(new ArrayBuffer(1)))!=f0||bl&&vn(new bl)!=c0||no&&vn(no.resolve())!=u0||ro&&vn(new ro)!=d0||lo&&vn(new lo)!=m0)&&(vn=function(e){var t=On(e),n=t==R4?e.constructor:void 0,r=n?Dn(n):"";if(r)switch(r){case V4:return f0;case B4:return c0;case U4:return u0;case H4:return d0;case Z4:return m0}return t});const pc=vn;var W4=Object.prototype,q4=W4.hasOwnProperty;function G4(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&q4.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var Y4=Et.Uint8Array;const p0=Y4;function hc(e){var t=new e.constructor(e.byteLength);return new p0(t).set(new p0(e)),t}function K4(e,t){var n=t?hc(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Q4=/\w*$/;function X4(e){var t=new e.constructor(e.source,Q4.exec(e));return t.lastIndex=e.lastIndex,t}var h0=cn?cn.prototype:void 0,x0=h0?h0.valueOf:void 0;function J4(e){return x0?Object(x0.call(e)):{}}function e6(e,t){var n=t?hc(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var t6="[object Boolean]",n6="[object Date]",r6="[object Map]",l6="[object Number]",s6="[object RegExp]",i6="[object Set]",a6="[object String]",o6="[object Symbol]",c6="[object ArrayBuffer]",u6="[object DataView]",d6="[object Float32Array]",m6="[object Float64Array]",f6="[object Int8Array]",p6="[object Int16Array]",h6="[object Int32Array]",x6="[object Uint8Array]",g6="[object Uint8ClampedArray]",v6="[object Uint16Array]",y6="[object Uint32Array]";function b6(e,t,n){var r=e.constructor;switch(t){case c6:return hc(e);case t6:case n6:return new r(+e);case u6:return K4(e,n);case d6:case m6:case f6:case p6:case h6:case x6:case g6:case v6:case y6:return e6(e,n);case r6:return new r;case l6:case a6:return new r(e);case s6:return X4(e);case i6:return new r;case o6:return J4(e)}}var g0=Object.create,w6=function(){function e(){}return function(t){if(!Ml(t))return{};if(g0)return g0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const N6=w6;function j6(e){return typeof e.constructor=="function"&&!uc(e)?N6(oc(e)):{}}var C6="[object Map]";function k6(e){return In(e)&&pc(e)==C6}var v0=wr&&wr.isMap,S6=v0?cc(v0):k6;const M6=S6;var E6="[object Set]";function T6(e){return In(e)&&pc(e)==E6}var y0=wr&&wr.isSet,_6=y0?cc(y0):T6;const A6=_6;var L6=1,$6=2,P6=4,E1="[object Arguments]",F6="[object Array]",z6="[object Boolean]",O6="[object Date]",I6="[object Error]",T1="[object Function]",D6="[object GeneratorFunction]",R6="[object Map]",V6="[object Number]",_1="[object Object]",B6="[object RegExp]",U6="[object Set]",H6="[object String]",Z6="[object Symbol]",W6="[object WeakMap]",q6="[object ArrayBuffer]",G6="[object DataView]",Y6="[object Float32Array]",K6="[object Float64Array]",Q6="[object Int8Array]",X6="[object Int16Array]",J6="[object Int32Array]",e5="[object Uint8Array]",t5="[object Uint8ClampedArray]",n5="[object Uint16Array]",r5="[object Uint32Array]",te={};te[E1]=te[F6]=te[q6]=te[G6]=te[z6]=te[O6]=te[Y6]=te[K6]=te[Q6]=te[X6]=te[J6]=te[R6]=te[V6]=te[_1]=te[B6]=te[U6]=te[H6]=te[Z6]=te[e5]=te[t5]=te[n5]=te[r5]=!0;te[I6]=te[T1]=te[W6]=!1;function is(e,t,n,r,s,i){var a,o=t&L6,c=t&$6,u=t&P6;if(n&&(a=s?n(e,r,s,i):n(e)),a!==void 0)return a;if(!Ml(e))return e;var h=El(e);if(h){if(a=G4(e),!o)return j1(e,a)}else{var x=pc(e),f=x==T1||x==D6;if(g1(e))return k4(e,o);if(x==_1||x==E1||f&&!s){if(a=c||f?{}:j6(e),!o)return c?$4(e,j4(a,e)):_4(e,v4(a,e))}else{if(!te[x])return s?e:{};a=b6(e,x,o)}}i||(i=new Er);var b=i.get(e);if(b)return b;i.set(e,a),A6(e)?e.forEach(function(_){a.add(is(_,t,n,_,e,i))}):M6(e)&&e.forEach(function(_,p){a.set(p,is(_,t,n,p,e,i))});var w=u?c?F4:P4:c?mc:dc,N=h?void 0:w(e);return xx(N||e,function(_,p){N&&(p=_,_=e[p]),p1(a,p,is(_,t,n,p,e,i))}),a}var l5=4;function b0(e){return is(e,l5)}function A1(e,t){for(var n=-1,r=e==null?0:e.length,s=Array(r);++n<r;)s[n]=t(e[n],n,e);return s}var s5="[object Symbol]";function xc(e){return typeof e=="symbol"||In(e)&&On(e)==s5}var i5="Expected a function";function gc(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(i5);var n=function(){var r=arguments,s=t?t.apply(this,r):r[0],i=n.cache;if(i.has(s))return i.get(s);var a=e.apply(this,r);return n.cache=i.set(s,a)||i,a};return n.cache=new(gc.Cache||fn),n}gc.Cache=fn;var a5=500;function o5(e){var t=gc(e,function(r){return n.size===a5&&n.clear(),r}),n=t.cache;return t}var c5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u5=/\\(\\)?/g,d5=o5(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(c5,function(n,r,s,i){t.push(s?i.replace(u5,"$1"):r||n)}),t});const m5=d5;var f5=1/0;function p5(e){if(typeof e=="string"||xc(e))return e;var t=e+"";return t=="0"&&1/e==-f5?"-0":t}var h5=1/0,w0=cn?cn.prototype:void 0,N0=w0?w0.toString:void 0;function L1(e){if(typeof e=="string")return e;if(El(e))return A1(e,L1)+"";if(xc(e))return N0?N0.call(e):"";var t=e+"";return t=="0"&&1/e==-h5?"-0":t}function x5(e){return e==null?"":L1(e)}function $1(e){return El(e)?A1(e,p5):xc(e)?[e]:j1(m5(x5(e)))}var g5=!0;function v5(e,t){if(!g5){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}var P1={exports:{}},J={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,vc=je?Symbol.for("react.element"):60103,yc=je?Symbol.for("react.portal"):60106,si=je?Symbol.for("react.fragment"):60107,ii=je?Symbol.for("react.strict_mode"):60108,ai=je?Symbol.for("react.profiler"):60114,oi=je?Symbol.for("react.provider"):60109,ci=je?Symbol.for("react.context"):60110,bc=je?Symbol.for("react.async_mode"):60111,ui=je?Symbol.for("react.concurrent_mode"):60111,di=je?Symbol.for("react.forward_ref"):60112,mi=je?Symbol.for("react.suspense"):60113,y5=je?Symbol.for("react.suspense_list"):60120,fi=je?Symbol.for("react.memo"):60115,pi=je?Symbol.for("react.lazy"):60116,b5=je?Symbol.for("react.block"):60121,w5=je?Symbol.for("react.fundamental"):60117,N5=je?Symbol.for("react.responder"):60118,j5=je?Symbol.for("react.scope"):60119;function nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case vc:switch(e=e.type,e){case bc:case ui:case si:case ai:case ii:case mi:return e;default:switch(e=e&&e.$$typeof,e){case ci:case di:case pi:case fi:case oi:return e;default:return t}}case yc:return t}}}function F1(e){return nt(e)===ui}J.AsyncMode=bc;J.ConcurrentMode=ui;J.ContextConsumer=ci;J.ContextProvider=oi;J.Element=vc;J.ForwardRef=di;J.Fragment=si;J.Lazy=pi;J.Memo=fi;J.Portal=yc;J.Profiler=ai;J.StrictMode=ii;J.Suspense=mi;J.isAsyncMode=function(e){return F1(e)||nt(e)===bc};J.isConcurrentMode=F1;J.isContextConsumer=function(e){return nt(e)===ci};J.isContextProvider=function(e){return nt(e)===oi};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===vc};J.isForwardRef=function(e){return nt(e)===di};J.isFragment=function(e){return nt(e)===si};J.isLazy=function(e){return nt(e)===pi};J.isMemo=function(e){return nt(e)===fi};J.isPortal=function(e){return nt(e)===yc};J.isProfiler=function(e){return nt(e)===ai};J.isStrictMode=function(e){return nt(e)===ii};J.isSuspense=function(e){return nt(e)===mi};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===si||e===ui||e===ai||e===ii||e===mi||e===y5||typeof e=="object"&&e!==null&&(e.$$typeof===pi||e.$$typeof===fi||e.$$typeof===oi||e.$$typeof===ci||e.$$typeof===di||e.$$typeof===w5||e.$$typeof===N5||e.$$typeof===j5||e.$$typeof===b5)};J.typeOf=nt;P1.exports=J;var C5=P1.exports,z1=C5,k5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},S5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},O1={};O1[z1.ForwardRef]=k5;O1[z1.Memo]=S5;function ke(){return ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ke.apply(this,arguments)}function I1(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}var mt=function(t){return typeof t=="function"},hi=function(t){return t!==null&&typeof t=="object"},M5=function(t){return String(Math.floor(Number(t)))===t},Xi=function(t){return Object.prototype.toString.call(t)==="[object String]"},Ji=function(t){return hi(t)&&mt(t.then)};function lt(e,t,n,r){r===void 0&&(r=0);for(var s=$1(t);e&&r<s.length;)e=e[s[r++]];return e===void 0?n:e}function Sn(e,t,n){for(var r=b0(e),s=r,i=0,a=$1(t);i<a.length-1;i++){var o=a[i],c=lt(e,a.slice(0,i+1));if(c&&(hi(c)||Array.isArray(c)))s=s[o]=b0(c);else{var u=a[i+1];s=s[o]=M5(u)&&Number(u)>=0?[]:{}}}return(i===0?e:s)[a[i]]===n?e:(n===void 0?delete s[a[i]]:s[a[i]]=n,i===0&&n===void 0&&delete r[a[i]],r)}function D1(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var s=0,i=Object.keys(e);s<i.length;s++){var a=i[s],o=e[a];hi(o)?n.get(o)||(n.set(o,!0),r[a]=Array.isArray(o)?[]:{},D1(o,t,n,r[a])):r[a]=t}return r}var xi=j.createContext(void 0);xi.displayName="FormikContext";xi.Provider;xi.Consumer;function E5(){var e=j.useContext(xi);return e||v5(!1),e}function T5(e,t){switch(t.type){case"SET_VALUES":return ke({},e,{values:t.payload});case"SET_TOUCHED":return ke({},e,{touched:t.payload});case"SET_ERRORS":return gn(e.errors,t.payload)?e:ke({},e,{errors:t.payload});case"SET_STATUS":return ke({},e,{status:t.payload});case"SET_ISSUBMITTING":return ke({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return ke({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return ke({},e,{values:Sn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return ke({},e,{touched:Sn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return ke({},e,{errors:Sn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return ke({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return ke({},e,{touched:D1(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return ke({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return ke({},e,{isSubmitting:!1});default:return e}}var pn={},Wl={};function R1(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,s=r===void 0?!0:r,i=e.validateOnMount,a=i===void 0?!1:i,o=e.isInitialValid,c=e.enableReinitialize,u=c===void 0?!1:c,h=e.onSubmit,x=I1(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=ke({validateOnChange:n,validateOnBlur:s,validateOnMount:a,onSubmit:h},x),b=j.useRef(f.initialValues),w=j.useRef(f.initialErrors||pn),N=j.useRef(f.initialTouched||Wl),_=j.useRef(f.initialStatus),p=j.useRef(!1),m=j.useRef({});j.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var g=j.useReducer(T5,{values:f.initialValues,errors:f.initialErrors||pn,touched:f.initialTouched||Wl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),v=g[0],k=g[1],A=j.useCallback(function(y,D){return new Promise(function(R,B){var q=f.validate(y,D);q==null?R(pn):Ji(q)?q.then(function(Q){R(Q||pn)},function(Q){B(Q)}):R(q)})},[f.validate]),F=j.useCallback(function(y,D){var R=f.validationSchema,B=mt(R)?R(D):R,q=D&&B.validateAt?B.validateAt(D,y):A5(y,B);return new Promise(function(Q,be){q.then(function(){Q(pn)},function(_t){_t.name==="ValidationError"?Q(_5(_t)):be(_t)})})},[f.validationSchema]),O=j.useCallback(function(y,D){return new Promise(function(R){return R(m.current[y].validate(D))})},[]),T=j.useCallback(function(y){var D=Object.keys(m.current).filter(function(B){return mt(m.current[B].validate)}),R=D.length>0?D.map(function(B){return O(B,lt(y,B))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(R).then(function(B){return B.reduce(function(q,Q,be){return Q==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||Q&&(q=Sn(q,D[be],Q)),q},{})})},[O]),S=j.useCallback(function(y){return Promise.all([T(y),f.validationSchema?F(y):{},f.validate?A(y):{}]).then(function(D){var R=D[0],B=D[1],q=D[2],Q=eo.all([R,B,q],{arrayMerge:L5});return Q})},[f.validate,f.validationSchema,T,A,F]),W=rt(function(y){return y===void 0&&(y=v.values),k({type:"SET_ISVALIDATING",payload:!0}),S(y).then(function(D){return p.current&&(k({type:"SET_ISVALIDATING",payload:!1}),k({type:"SET_ERRORS",payload:D})),D})});j.useEffect(function(){a&&p.current===!0&&gn(b.current,f.initialValues)&&W(b.current)},[a,W]);var ve=j.useCallback(function(y){var D=y&&y.values?y.values:b.current,R=y&&y.errors?y.errors:w.current?w.current:f.initialErrors||{},B=y&&y.touched?y.touched:N.current?N.current:f.initialTouched||{},q=y&&y.status?y.status:_.current?_.current:f.initialStatus;b.current=D,w.current=R,N.current=B,_.current=q;var Q=function(){k({type:"RESET_FORM",payload:{isSubmitting:!!y&&!!y.isSubmitting,errors:R,touched:B,status:q,values:D,isValidating:!!y&&!!y.isValidating,submitCount:y&&y.submitCount&&typeof y.submitCount=="number"?y.submitCount:0}})};if(f.onReset){var be=f.onReset(v.values,Un);Ji(be)?be.then(Q):Q()}else Q()},[f.initialErrors,f.initialStatus,f.initialTouched]);j.useEffect(function(){p.current===!0&&!gn(b.current,f.initialValues)&&(u&&(b.current=f.initialValues,ve()),a&&W(b.current))},[u,f.initialValues,ve,a,W]),j.useEffect(function(){u&&p.current===!0&&!gn(w.current,f.initialErrors)&&(w.current=f.initialErrors||pn,k({type:"SET_ERRORS",payload:f.initialErrors||pn}))},[u,f.initialErrors]),j.useEffect(function(){u&&p.current===!0&&!gn(N.current,f.initialTouched)&&(N.current=f.initialTouched||Wl,k({type:"SET_TOUCHED",payload:f.initialTouched||Wl}))},[u,f.initialTouched]),j.useEffect(function(){u&&p.current===!0&&!gn(_.current,f.initialStatus)&&(_.current=f.initialStatus,k({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var V=rt(function(y){if(m.current[y]&&mt(m.current[y].validate)){var D=lt(v.values,y),R=m.current[y].validate(D);return Ji(R)?(k({type:"SET_ISVALIDATING",payload:!0}),R.then(function(B){return B}).then(function(B){k({type:"SET_FIELD_ERROR",payload:{field:y,value:B}}),k({type:"SET_ISVALIDATING",payload:!1})})):(k({type:"SET_FIELD_ERROR",payload:{field:y,value:R}}),Promise.resolve(R))}else if(f.validationSchema)return k({type:"SET_ISVALIDATING",payload:!0}),F(v.values,y).then(function(B){return B}).then(function(B){k({type:"SET_FIELD_ERROR",payload:{field:y,value:B[y]}}),k({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),z=j.useCallback(function(y,D){var R=D.validate;m.current[y]={validate:R}},[]),L=j.useCallback(function(y){delete m.current[y]},[]),U=rt(function(y,D){k({type:"SET_TOUCHED",payload:y});var R=D===void 0?s:D;return R?W(v.values):Promise.resolve()}),P=j.useCallback(function(y){k({type:"SET_ERRORS",payload:y})},[]),C=rt(function(y,D){var R=mt(y)?y(v.values):y;k({type:"SET_VALUES",payload:R});var B=D===void 0?n:D;return B?W(R):Promise.resolve()}),E=j.useCallback(function(y,D){k({type:"SET_FIELD_ERROR",payload:{field:y,value:D}})},[]),$=rt(function(y,D,R){k({type:"SET_FIELD_VALUE",payload:{field:y,value:D}});var B=R===void 0?n:R;return B?W(Sn(v.values,y,D)):Promise.resolve()}),H=j.useCallback(function(y,D){var R=D,B=y,q;if(!Xi(y)){y.persist&&y.persist();var Q=y.target?y.target:y.currentTarget,be=Q.type,_t=Q.name,wi=Q.id,Ni=Q.value,tm=Q.checked,Cg=Q.outerHTML,Tc=Q.options,nm=Q.multiple;R=D||_t||wi,B=/number|range/.test(be)?(q=parseFloat(Ni),isNaN(q)?"":q):/checkbox/.test(be)?P5(lt(v.values,R),tm,Ni):Tc&&nm?$5(Tc):Ni}R&&$(R,B)},[$,v.values]),Z=rt(function(y){if(Xi(y))return function(D){return H(D,y)};H(y)}),ee=rt(function(y,D,R){D===void 0&&(D=!0),k({type:"SET_FIELD_TOUCHED",payload:{field:y,value:D}});var B=R===void 0?s:R;return B?W(v.values):Promise.resolve()}),pe=j.useCallback(function(y,D){y.persist&&y.persist();var R=y.target,B=R.name,q=R.id,Q=R.outerHTML,be=D||B||q;ee(be,!0)},[ee]),Ce=rt(function(y){if(Xi(y))return function(D){return pe(D,y)};pe(y)}),Te=j.useCallback(function(y){mt(y)?k({type:"SET_FORMIK_STATE",payload:y}):k({type:"SET_FORMIK_STATE",payload:function(){return y}})},[]),We=j.useCallback(function(y){k({type:"SET_STATUS",payload:y})},[]),Tt=j.useCallback(function(y){k({type:"SET_ISSUBMITTING",payload:y})},[]),ye=rt(function(){return k({type:"SUBMIT_ATTEMPT"}),W().then(function(y){var D=y instanceof Error,R=!D&&Object.keys(y).length===0;if(R){var B;try{if(B=Hn(),B===void 0)return}catch(q){throw q}return Promise.resolve(B).then(function(q){return p.current&&k({type:"SUBMIT_SUCCESS"}),q}).catch(function(q){if(p.current)throw k({type:"SUBMIT_FAILURE"}),q})}else if(p.current&&(k({type:"SUBMIT_FAILURE"}),D))throw y})}),bt=rt(function(y){y&&y.preventDefault&&mt(y.preventDefault)&&y.preventDefault(),y&&y.stopPropagation&&mt(y.stopPropagation)&&y.stopPropagation(),ye().catch(function(D){console.warn("Warning: An unhandled error was caught from submitForm()",D)})}),Un={resetForm:ve,validateForm:W,validateField:V,setErrors:P,setFieldError:E,setFieldTouched:ee,setFieldValue:$,setStatus:We,setSubmitting:Tt,setTouched:U,setValues:C,setFormikState:Te,submitForm:ye},Hn=rt(function(){return h(v.values,Un)}),Y1=rt(function(y){y&&y.preventDefault&&mt(y.preventDefault)&&y.preventDefault(),y&&y.stopPropagation&&mt(y.stopPropagation)&&y.stopPropagation(),ve()}),K1=j.useCallback(function(y){return{value:lt(v.values,y),error:lt(v.errors,y),touched:!!lt(v.touched,y),initialValue:lt(b.current,y),initialTouched:!!lt(N.current,y),initialError:lt(w.current,y)}},[v.errors,v.touched,v.values]),Q1=j.useCallback(function(y){return{setValue:function(R,B){return $(y,R,B)},setTouched:function(R,B){return ee(y,R,B)},setError:function(R){return E(y,R)}}},[$,ee,E]),X1=j.useCallback(function(y){var D=hi(y),R=D?y.name:y,B=lt(v.values,R),q={name:R,value:B,onChange:Z,onBlur:Ce};if(D){var Q=y.type,be=y.value,_t=y.as,wi=y.multiple;Q==="checkbox"?be===void 0?q.checked=!!B:(q.checked=!!(Array.isArray(B)&&~B.indexOf(be)),q.value=be):Q==="radio"?(q.checked=B===be,q.value=be):_t==="select"&&wi&&(q.value=q.value||[],q.multiple=!0)}return q},[Ce,Z,v.values]),bi=j.useMemo(function(){return!gn(b.current,v.values)},[b.current,v.values]),J1=j.useMemo(function(){return typeof o<"u"?bi?v.errors&&Object.keys(v.errors).length===0:o!==!1&&mt(o)?o(f):o:v.errors&&Object.keys(v.errors).length===0},[o,bi,v.errors,f]),em=ke({},v,{initialValues:b.current,initialErrors:w.current,initialTouched:N.current,initialStatus:_.current,handleBlur:Ce,handleChange:Z,handleReset:Y1,handleSubmit:bt,resetForm:ve,setErrors:P,setFormikState:Te,setFieldTouched:ee,setFieldValue:$,setFieldError:E,setStatus:We,setSubmitting:Tt,setTouched:U,setValues:C,submitForm:ye,validateForm:W,validateField:V,isValid:J1,dirty:bi,unregisterField:L,registerField:z,getFieldProps:X1,getFieldMeta:K1,getFieldHelpers:Q1,validateOnBlur:s,validateOnChange:n,validateOnMount:a});return em}function _5(e){var t={};if(e.inner){if(e.inner.length===0)return Sn(t,e.path,e.message);for(var s=e.inner,n=Array.isArray(s),r=0,s=n?s:s[Symbol.iterator]();;){var i;if(n){if(r>=s.length)break;i=s[r++]}else{if(r=s.next(),r.done)break;i=r.value}var a=i;lt(t,a.path)||(t=Sn(t,a.path,a.message))}}return t}function A5(e,t,n,r){n===void 0&&(n=!1),r===void 0&&(r={});var s=so(e);return t[n?"validateSync":"validate"](s,{abortEarly:!1,context:r})}function so(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(s){return Array.isArray(s)===!0||Xu(s)?so(s):s!==""?s:void 0}):Xu(e[r])?t[r]=so(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function L5(e,t,n){var r=e.slice();return t.forEach(function(i,a){if(typeof r[a]>"u"){var o=n.clone!==!1,c=o&&n.isMergeableObject(i);r[a]=c?eo(Array.isArray(i)?[]:{},i,n):i}else n.isMergeableObject(i)?r[a]=eo(e[a],i,n):e.indexOf(i)===-1&&r.push(i)}),r}function $5(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function P5(e,t,n){if(typeof e=="boolean")return!!t;var r=[],s=!1,i=-1;if(Array.isArray(e))r=e,i=e.indexOf(n),s=i>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!s?r.concat(n):s?r.slice(0,i).concat(r.slice(i+1)):r}var F5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?j.useLayoutEffect:j.useEffect;function rt(e){var t=j.useRef(e);return F5(function(){t.current=e}),j.useCallback(function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return t.current.apply(void 0,r)},[])}var z5=j.forwardRef(function(e,t){var n=e.action,r=I1(e,["action"]),s=n??"#",i=E5(),a=i.handleReset,o=i.handleSubmit;return j.createElement("form",Object.assign({onSubmit:o,ref:t,onReset:a,action:s},r))});z5.displayName="Form";function Vn(e){this._maxSize=e,this.clear()}Vn.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Vn.prototype.get=function(e){return this._values[e]};Vn.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var O5=/[^.^\]^[]+|(?=\[\]|\.\.)/g,V1=/^\d+$/,I5=/^\d/,D5=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,R5=/^\s*(['"]?)(.*?)(\1)\s*$/,wc=512,j0=new Vn(wc),C0=new Vn(wc),k0=new Vn(wc),Mn={Cache:Vn,split:io,normalizePath:ea,setter:function(e){var t=ea(e);return C0.get(e)||C0.set(e,function(r,s){for(var i=0,a=t.length,o=r;i<a-1;){var c=t[i];if(c==="__proto__"||c==="constructor"||c==="prototype")return r;o=o[t[i++]]}o[t[i]]=s})},getter:function(e,t){var n=ea(e);return k0.get(e)||k0.set(e,function(s){for(var i=0,a=n.length;i<a;)if(s!=null||!t)s=s[n[i++]];else return;return s})},join:function(e){return e.reduce(function(t,n){return t+(Nc(n)||V1.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){V5(Array.isArray(e)?e:io(e),t,n)}};function ea(e){return j0.get(e)||j0.set(e,io(e).map(function(t){return t.replace(R5,"$2")}))}function io(e){return e.match(O5)||[""]}function V5(e,t,n){var r=e.length,s,i,a,o;for(i=0;i<r;i++)s=e[i],s&&(H5(s)&&(s='"'+s+'"'),o=Nc(s),a=!o&&/^\d+$/.test(s),t.call(n,s,o,a,i,e))}function Nc(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function B5(e){return e.match(I5)&&!e.match(V1)}function U5(e){return D5.test(e)}function H5(e){return!Nc(e)&&(B5(e)||U5(e))}const Z5=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,gi=e=>e.match(Z5)||[],vi=e=>e[0].toUpperCase()+e.slice(1),jc=(e,t)=>gi(e).join(t).toLowerCase(),B1=e=>gi(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),W5=e=>vi(B1(e)),q5=e=>jc(e,"_"),G5=e=>jc(e,"-"),Y5=e=>vi(jc(e," ")),K5=e=>gi(e).map(vi).join(" ");var ta={words:gi,upperFirst:vi,camelCase:B1,pascalCase:W5,snakeCase:q5,kebabCase:G5,sentenceCase:Y5,titleCase:K5},Cc={exports:{}};Cc.exports=function(e){return U1(Q5(e),e)};Cc.exports.array=U1;function U1(e,t){var n=e.length,r=new Array(n),s={},i=n,a=X5(t),o=J5(e);for(t.forEach(function(u){if(!o.has(u[0])||!o.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||c(e[i],i,new Set);return r;function c(u,h,x){if(x.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!o.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!s[h]){s[h]=!0;var b=a.get(u)||new Set;if(b=Array.from(b),h=b.length){x.add(u);do{var w=b[--h];c(w,o.get(w),x)}while(h);x.delete(u)}r[--n]=u}}}function Q5(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var s=e[n];t.add(s[0]),t.add(s[1])}return Array.from(t)}function X5(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var s=e[n];t.has(s[0])||t.set(s[0],new Set),t.has(s[1])||t.set(s[1],new Set),t.get(s[0]).add(s[1])}return t}function J5(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var e9=Cc.exports;const t9=zs(e9),n9=Object.prototype.toString,r9=Error.prototype.toString,l9=RegExp.prototype.toString,s9=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",i9=/^Symbol\((.*)\)(.*)$/;function a9(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function S0(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return a9(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return s9.call(e).replace(i9,"Symbol($1)");const r=n9.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+r9.call(e)+"]":r==="RegExp"?l9.call(e):null}function fr(e,t){let n=S0(e,t);return n!==null?n:JSON.stringify(e,function(r,s){let i=S0(this[r],t);return i!==null?i:s},2)}function H1(e){return e==null?[]:[].concat(e)}let o9=/\$\{\s*(\w+)\s*\}/g;class Ge extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(o9,(s,i)=>fr(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=s,this.errors=[],this.inner=[],H1(t).forEach(i=>{Ge.isError(i)?(this.errors.push(...i.errors),this.inner=this.inner.concat(i.inner.length?i.inner:i)):this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,Ge)}}let Lt={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const s=r!=null&&r!==n?` (cast from the value \`${fr(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${fr(n,!0)}\``+s:`${e} must match the configured type. The validated value was: \`${fr(n,!0)}\``+s}},ft={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},c9={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},ao={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},u9={isValue:"${path} field must be ${value}"},oo={noUnknown:"${path} field has unspecified keys: ${unknown}"},d9={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:Lt,string:ft,number:c9,date:ao,object:oo,array:d9,boolean:u9});const kc=e=>e&&e.__isYupSchema__;class Ps{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:s,otherwise:i}=n,a=typeof r=="function"?r:(...o)=>o.every(c=>c===r);return new Ps(t,(o,c)=>{var u;let h=a(...o)?s:i;return(u=h==null?void 0:h(c))!=null?u:c})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),s=this.fn(r,t,n);if(s===void 0||s===t)return t;if(!kc(s))throw new TypeError("conditions must return a schema object");return s.resolve(n)}}const ql={context:"$",value:"."};class Bn{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===ql.context,this.isValue=this.key[0]===ql.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?ql.context:this.isValue?ql.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Mn.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let s=this.isContext?r:this.isValue?t:n;return this.getter&&(s=this.getter(s||{})),this.map&&(s=this.map(s)),s}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Bn.prototype.__isYupRef=!0;const Nn=e=>e==null;function Wn(e){function t({value:n,path:r="",options:s,originalValue:i,schema:a},o,c){const{name:u,test:h,params:x,message:f,skipAbsent:b}=e;let{parent:w,context:N,abortEarly:_=a.spec.abortEarly}=s;function p(S){return Bn.isRef(S)?S.getValue(n,w,N):S}function m(S={}){const W=Object.assign({value:n,originalValue:i,label:a.spec.label,path:S.path||r,spec:a.spec},x,S.params);for(const V of Object.keys(W))W[V]=p(W[V]);const ve=new Ge(Ge.formatError(S.message||f,W),n,W.path,S.type||u);return ve.params=W,ve}const g=_?o:c;let v={path:r,parent:w,type:u,from:s.from,createError:m,resolve:p,options:s,originalValue:i,schema:a};const k=S=>{Ge.isError(S)?g(S):S?c(null):g(m())},A=S=>{Ge.isError(S)?g(S):o(S)},F=b&&Nn(n);if(!s.sync){try{Promise.resolve(F?!0:h.call(v,n,v)).then(k,A)}catch(S){A(S)}return}let O;try{var T;if(O=F?!0:h.call(v,n,v),typeof((T=O)==null?void 0:T.then)=="function")throw new Error(`Validation test of type: "${v.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(S){A(S);return}k(O)}return t.OPTIONS=e,t}function m9(e,t,n,r=n){let s,i,a;return t?(Mn.forEach(t,(o,c,u)=>{let h=c?o.slice(1,o.length-1):o;e=e.resolve({context:r,parent:s,value:n});let x=e.type==="tuple",f=u?parseInt(h,10):0;if(e.innerType||x){if(x&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);s=n,n=n&&n[f],e=x?e.spec.types[f]:e.innerType}if(!u){if(!e.fields||!e.fields[h])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);s=n,n=n&&n[h],e=e.fields[h]}i=h,a=c?"["+o+"]":"."+o}),{schema:e,parent:s,parentPath:i}):{parent:s,parentPath:t,schema:e}}class Fs extends Set{describe(){const t=[];for(const n of this.values())t.push(Bn.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Fs(this.values())}merge(t,n){const r=this.clone();return t.forEach(s=>r.add(s)),n.forEach(s=>r.delete(s)),r}}function sr(e,t=new Map){if(kc(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=sr(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,s]of e.entries())n.set(r,sr(s,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(sr(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,s]of Object.entries(e))n[r]=sr(s,t)}else throw Error(`Unable to clone ${e}`);return n}class Mt{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Fs,this._blacklist=new Fs,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Lt.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=sr(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const s=Object.assign({},n.spec,r.spec);return r.spec=s,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(a=>{i.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((s,i)=>i.resolve(s,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,s;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(s=t.recursive)!=null?s:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),s=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(s&&Nn(i))return i;let a=fr(t),o=fr(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(o!==a?`result of cast: ${o}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((s,i)=>i.call(this,s,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,s){let{path:i,originalValue:a=t,strict:o=this.spec.strict}=n,c=t;o||(c=this._cast(c,Object.assign({assert:!1},n)));let u=[];for(let h of Object.values(this.internalTests))h&&u.push(h);this.runTests({path:i,value:c,originalValue:a,options:n,tests:u},r,h=>{if(h.length)return s(h,c);this.runTests({path:i,value:c,originalValue:a,options:n,tests:this.tests},r,s)})}runTests(t,n,r){let s=!1,{tests:i,value:a,originalValue:o,path:c,options:u}=t,h=N=>{s||(s=!0,n(N,a))},x=N=>{s||(s=!0,r(N,a))},f=i.length,b=[];if(!f)return x([]);let w={value:a,originalValue:o,path:c,options:u,schema:this};for(let N=0;N<i.length;N++){const _=i[N];_(w,h,function(m){m&&(b=b.concat(m)),--f<=0&&x(b)})}}asNestedTest({key:t,index:n,parent:r,parentPath:s,originalParent:i,options:a}){const o=t??n;if(o==null)throw TypeError("Must include `key` or `index` for nested validations");const c=typeof o=="number";let u=r[o];const h=Object.assign({},a,{strict:!0,parent:r,value:u,originalValue:i[o],key:void 0,[c?"index":"key"]:o,path:c||o.includes(".")?`${s||""}[${u?o:`"${o}"`}]`:(s?`${s}.`:"")+t});return(x,f,b)=>this.resolve(h)._validate(u,h,f,b)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((s,i)=>r._validate(t,n,(a,o)=>{Ge.isError(a)&&(a.value=o),i(a)},(a,o)=>{a.length?i(new Ge(a,o)):s(o)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),s;return r._validate(t,Object.assign({},n,{sync:!0}),(i,a)=>{throw Ge.isError(i)&&(i.value=a),i},(i,a)=>{if(i.length)throw new Ge(i,t);s=a}),s}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Ge.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Ge.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this):sr(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Wn({message:n,name:"nullable",test(s){return s===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Wn({message:n,name:"optionality",test(s){return s===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Lt.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Lt.notNull){return this.nullability(!1,t)}required(t=Lt.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Lt.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),s=Wn(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(i||a.OPTIONS.test===s.OPTIONS.test))),r.tests.push(s),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),s=H1(t).map(i=>new Bn(i));return s.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new Ps(s,n):Ps.fromOptions(s,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Wn({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Lt.oneOf){let r=this.clone();return t.forEach(s=>{r._whitelist.add(s),r._blacklist.delete(s)}),r.internalTests.whiteList=Wn({message:n,name:"oneOf",skipAbsent:!0,test(s){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(s)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),r}notOneOf(t,n=Lt.notOneOf){let r=this.clone();return t.forEach(s=>{r._blacklist.add(s),r._whitelist.delete(s)}),r.internalTests.blacklist=Wn({message:n,name:"notOneOf",test(s){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(s)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:s,optional:i,nullable:a}=n.spec;return{meta:s,label:r,optional:i,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(c=>({name:c.OPTIONS.name,params:c.OPTIONS.params})).filter((c,u,h)=>h.findIndex(x=>x.name===c.name)===u)}}}Mt.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Mt.prototype[`${e}At`]=function(t,n,r={}){const{parent:s,parentPath:i,schema:a}=m9(this,t,n,r.context);return a[e](s&&s[i],Object.assign({},r,{parent:s,path:t}))};for(const e of["equals","is"])Mt.prototype[e]=Mt.prototype.oneOf;for(const e of["not","nope"])Mt.prototype[e]=Mt.prototype.notOneOf;let f9=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,p9=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,h9=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,x9=e=>Nn(e)||e===e.trim(),g9={}.toString();function ir(){return new Z1}class Z1 extends Mt{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const s=t!=null&&t.toString?t.toString():t;return s===g9?t:s})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Lt.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=ft.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=ft.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=ft.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,s,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:s,name:i}=n:s=n),this.test({name:i||"matches",message:s||ft.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=ft.email){return this.matches(f9,{name:"email",message:t,excludeEmptyString:!0})}url(t=ft.url){return this.matches(p9,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=ft.uuid){return this.matches(h9,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=ft.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:x9})}lowercase(t=ft.lowercase){return this.transform(n=>Nn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Nn(n)||n===n.toLowerCase()})}uppercase(t=ft.uppercase){return this.transform(n=>Nn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Nn(n)||n===n.toUpperCase()})}}ir.prototype=Z1.prototype;var v9=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function y9(e){var t=[1,4,5,6,7,10,11],n=0,r,s;if(s=v9.exec(e)){for(var i=0,a;a=t[i];++i)s[a]=+s[a]||0;s[2]=(+s[2]||1)-1,s[3]=+s[3]||1,s[7]=s[7]?String(s[7]).substr(0,3):0,(s[8]===void 0||s[8]==="")&&(s[9]===void 0||s[9]==="")?r=+new Date(s[1],s[2],s[3],s[4],s[5],s[6],s[7]):(s[8]!=="Z"&&s[9]!==void 0&&(n=s[10]*60+s[11],s[9]==="+"&&(n=0-n)),r=Date.UTC(s[1],s[2],s[3],s[4],s[5]+n,s[6],s[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let b9=new Date(""),w9=e=>Object.prototype.toString.call(e)==="[object Date]";class yi extends Mt{constructor(){super({type:"date",check(t){return w9(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=y9(t),isNaN(t)?yi.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Bn.isRef(t))r=t;else{let s=this.cast(t);if(!this._typeCheck(s))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=s}return r}min(t,n=ao.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(s){return s>=this.resolve(r)}})}max(t,n=ao.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(s){return s<=this.resolve(r)}})}}yi.INVALID_DATE=b9;yi.prototype;function N9(e,t=[]){let n=[],r=new Set,s=new Set(t.map(([a,o])=>`${a}-${o}`));function i(a,o){let c=Mn.split(a)[0];r.add(c),s.has(`${o}-${c}`)||n.push([o,c])}for(const a of Object.keys(e)){let o=e[a];r.add(a),Bn.isRef(o)&&o.isSibling?i(o.path,a):kc(o)&&"deps"in o&&o.deps.forEach(c=>i(c,a))}return t9.array(Array.from(r),n).reverse()}function M0(e,t){let n=1/0;return e.some((r,s)=>{var i;if((i=t.path)!=null&&i.includes(r))return n=s,!0}),n}function W1(e){return(t,n)=>M0(e,t)-M0(e,n)}const j9=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function as(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=as(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=as(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(as)}):"optional"in e?e.optional():e}const C9=(e,t)=>{const n=[...Mn.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),s=Mn.getter(Mn.join(n),!0)(e);return!!(s&&r in s)};let E0=e=>Object.prototype.toString.call(e)==="[object Object]";function k9(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const S9=W1([]);function Sc(e){return new q1(e)}class q1 extends Mt{constructor(t){super({type:"object",check(n){return E0(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=S9,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let s=super._cast(t,n);if(s===void 0)return this.getDefault(n);if(!this._typeCheck(s))return s;let i=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,o=[].concat(this._nodes,Object.keys(s).filter(x=>!this._nodes.includes(x))),c={},u=Object.assign({},n,{parent:c,__validating:n.__validating||!1}),h=!1;for(const x of o){let f=i[x],b=x in s;if(f){let w,N=s[x];u.path=(n.path?`${n.path}.`:"")+x,f=f.resolve({value:N,context:n.context,parent:c});let _=f instanceof Mt?f.spec:void 0,p=_==null?void 0:_.strict;if(_!=null&&_.strip){h=h||x in s;continue}w=!n.__validating||!p?f.cast(s[x],u):s[x],w!==void 0&&(c[x]=w)}else b&&!a&&(c[x]=s[x]);(b!==x in c||c[x]!==s[x])&&(h=!0)}return h?c:s}_validate(t,n={},r,s){let{from:i=[],originalValue:a=t,recursive:o=this.spec.recursive}=n;n.from=[{schema:this,value:a},...i],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(c,u)=>{if(!o||!E0(u)){s(c,u);return}a=a||u;let h=[];for(let x of this._nodes){let f=this.fields[x];!f||Bn.isRef(f)||h.push(f.asNestedTest({options:n,key:x,parent:u,parentPath:n.path,originalParent:a}))}this.runTests({tests:h,value:u,originalValue:a,options:n},r,x=>{s(x.sort(this._sortErrors).concat(c),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[s,i]of Object.entries(this.fields)){const a=r[s];r[s]=a===void 0?i:a}return n.withMutation(s=>s.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var s;const i=this.fields[r];let a=t;(s=a)!=null&&s.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(a):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=N9(t,n),r._sortErrors=W1(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let s=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),s=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),s)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return as(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let s=Mn.getter(t,!0);return this.transform(i=>{if(!i)return i;let a=i;return C9(i,t)&&(a=Object.assign({},i),r||delete a[t],a[n]=s(i)),a})}json(){return this.transform(j9)}noUnknown(t=!0,n=oo.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(s){if(s==null)return!0;const i=k9(this.schema,s);return!t||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=oo.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const s of Object.keys(n))r[t(s)]=n[s];return r})}camelCase(){return this.transformKeys(ta.camelCase)}snakeCase(){return this.transformKeys(ta.snakeCase)}constantCase(){return this.transformKeys(t=>ta.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[s,i]of Object.entries(this.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),n.fields[s]=i.describe(a)}return n}}Sc.prototype=q1.prototype;function M9(){let e=Sc({mobileNo:ir().required("Enter khat no.")});const t=R1({initialValues:{mobileNo:""},onSubmit:(s,i)=>{},validationSchema:e}),n=(s,i,a=null)=>s.length>a?i:s===""||/^[0-9\b]+$/.test(s)?s:i,r=s=>{let i=s.target.name,a=s.target.value;i=="mobileNo"&&t.setFieldValue("mobileNo",n(a,t.values.mobileNo,10))};return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`export const returnCapitalize = (currentValue) => {
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

}`}),l.jsx("form",{onSubmit:t.handleSubmit,onChange:r,children:l.jsxs("div",{className:"form-group w-60 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Mobile No.",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("input",{...t.getFieldProps("mobileNo"),type:"text",className:"cypress_mobileNo form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md ",placeholder:"Enter mobile no."}),l.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.mobileNo&&t.errors.mobileNo?t.errors.mobileNo:null})]})}),l.jsx(me,{code:`// Source - Me
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
            </form>`}),l.jsx("div",{className:"text-xl font-semibold mt-10",children:"# Powerups"})]})}function E9(){return l.jsx("aside",{className:"w-64 bg-gray-200 h-screen",children:l.jsx("nav",{className:"p-10",children:l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("span",{children:"Home"})}),l.jsx("li",{children:l.jsx("span",{children:"About"})}),l.jsx("li",{children:l.jsx("span",{children:"Details"})}),l.jsx("li",{children:l.jsx("span",{children:"Settings"})})]})})})}function T9(){return l.jsx("header",{className:"bg-gray-200 p-4",children:l.jsx("h1",{className:"text-2xl font-bold text-right",children:"Header"})})}function _9(){return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`import {BrowserRouter, Route, Routes } from 'react-router-dom'
      
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
      </BrowserRouter>`}),l.jsxs("div",{className:"flex",children:[l.jsx(E9,{}),l.jsxs("div",{className:"flex flex-col w-full",children:[l.jsx(T9,{}),l.jsx("main",{className:"p-20",children:l.jsxs(i1,{children:[l.jsx(Y,{exact:!0,path:"/",element:l.jsx("h1",{children:"Dummy direct"})}),l.jsx(Y,{path:"/about",element:l.jsx("h1",{children:"Dummy about"})}),l.jsx(Y,{path:"/contact",element:l.jsx("h1",{children:"Dummy contact"})})]})})]})]})]})}function A9(){return l.jsx("div",{children:"Demo"})}function L9(e){return De({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(e)}function na(e){const t=ac(),n=ic(),r=s=>{if(e==null||e.setshowSidebar(),n.pathname===e.path){window.location.reload();return}t(e.path)};return l.jsx(l.Fragment,{children:e.subMenuStatus?l.jsx("li",{className:"cursor-pointer",style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},children:e.title}):l.jsx("div",{className:"cursor-pointer",onClick:()=>r(e==null?void 0:e.menuId),children:l.jsx("li",{style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},href:e.path,children:e.title})})})}function $9(e){return De({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"}}]}]})(e)}function P9(e){return De({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"}}]}]})(e)}function T0(e){return De({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 5v11h16V5H4zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2V4.007zM1 19h22v2H1v-2z"}}]}]})(e)}function F9(e){return De({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zm.535 2l-4.666 7 4.666 7H20V5H7.07zM13 10.586l2.828-2.829 1.415 1.415L14.414 12l2.829 2.828-1.415 1.415L13 13.414l-2.828 2.829-1.415-1.415L11.586 12 8.757 9.172l1.415-1.415L13 10.586z"}}]}]})(e)}function z9(e){const[t,n]=j.useState("h-0"),r=()=>{t=="h-0"?n("h-auto"):n("h-0")};return l.jsx(l.Fragment,{children:l.jsxs("div",{className:"block",children:[e.path!=null&&l.jsxs("li",{className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-indigo-500",style:{width:"250px"},children:[l.jsx("div",{className:"flex-none ",children:l.jsx(T0,{})}),l.jsx("div",{className:"flex-initial w-40",children:l.jsx(na,{setshowSidebar:e==null?void 0:e.setshowSidebar,subMenuStatus:e.subMenuStatus,path:e.path,title:e.title})})]}),e.path==null&&l.jsxs("li",{onClick:r,className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-indigo-500",style:{width:"250px"},children:[l.jsx("div",{className:"flex-none ",children:l.jsx(T0,{})}),l.jsx("div",{className:"flex-initial w-40",children:l.jsx(na,{subMenuStatus:e==null?void 0:e.subMenuStatus,path:e.path,title:e.title})}),(e==null?void 0:e.subMenuStatus)&&l.jsxs("div",{className:"flex-none ",children:[t=="h-0"&&l.jsx(G3,{size:18}),t=="h-auto"&&l.jsx(L9,{size:18})]})]}),e.path==null&&l.jsx("div",{className:`transition-all duration-1000 ${t} overflow-hidden bg-gray-200`,children:e==null?void 0:e.subMenu.map(s=>l.jsx("div",{className:"flex items-center pl-8 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer",style:{width:"250px"},children:l.jsx("div",{className:"flex-initial w-40",children:l.jsx(na,{setshowSidebar:e==null?void 0:e.setshowSidebar,path:s.path,title:s.menuName,menuId:s==null?void 0:s.id})})}))})]})})}function O9(e){return De({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#CFD8DC",points:"35,36 39,36 39,22 26,22 26,13 22,13 22,22 9,22 9,36 13,36 13,26 22,26 22,36 26,36 26,26 35,26"}},{tag:"rect",attr:{x:"17",y:"6",fill:"#3F51B5",width:"14",height:"10"}},{tag:"rect",attr:{x:"32",y:"32",fill:"#00BCD4",width:"10",height:"10"}},{tag:"rect",attr:{x:"6",y:"32",fill:"#00BCD4",width:"10",height:"10"}},{tag:"rect",attr:{x:"19",y:"32",fill:"#00BCD4",width:"10",height:"10"}}]})(e)}function I9(){return l.jsxs(l.Fragment,{children:[l.jsx("div",{children:"AxiosInterceptors"}),l.jsx(me,{code:`import axios from 'axios';

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

`})]})}function D9(){return l.jsxs(l.Fragment,{children:[l.jsx("div",{children:"PowerupFunctions"}),l.jsx(me,{code:`export const returnCapitalize = (currentValue) => {
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

`})]})}function R9(){const e=[{icon:A3,techName:"React",version:1}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Technologies"}),l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-lg",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Tech"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Version"})]})}),l.jsx("tbody",{children:e==null?void 0:e.map((t,n)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("img",{className:"inline",src:t==null?void 0:t.icon,alt:""}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:t==null?void 0:t.techName})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t==null?void 0:t.version})]}))})]})]})}function Mc(e){return De({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(e)}function Ec(e){return l.jsx(l.Fragment,{children:l.jsx("div",{className:"bg-gray-800 shadow-xl text-white absolute top-10 right-10 px-2 rounded-lg",children:e==null?void 0:e.url})})}function V9(){const[e,t]=j.useState(null),n=[{icon:null,techName:"Flaticons",use:"Collection of png icons",version:1,url:"https://www.flaticon.com/"},{icon:null,techName:"Lotte Animations",use:"Pre made animations",version:1,url:"https://lottiefiles.com/"}],r=s=>{window.open(s,"_blank")};return l.jsxs(l.Fragment,{children:[l.jsx(Ec,{url:e}),l.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Resources"}),l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-lg",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Resource"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Url"})]})}),l.jsx("tbody",{children:n==null?void 0:n.map((s,i)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("img",{className:"inline",src:s==null?void 0:s.icon,alt:""}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:s==null?void 0:s.techName})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.use}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l.jsx(Mc,{onMouseEnter:()=>t(s==null?void 0:s.url),onMouseLeave:()=>t(null),onClick:()=>r(s==null?void 0:s.url),className:"inline cursor-pointer text-2xl hover:scale-105 font-semibold"})})]}))})]})]})}function B9(){const[e,t]=j.useState(null),n=[{icon:null,techName:"React Router Dom",use:"To handle page routing",version:1,url:"https://reactrouter.com/en/main"},{icon:null,techName:"Formik",use:"This library is use to handle forms in a very smart way",version:1,url:"https://formik.org/"},{icon:null,techName:"Axios",use:"This library is use to handle API calls",version:1,url:"https://axios-http.com/docs/intro"},{icon:null,techName:"React-Icons",use:"Icon library, Easy to use",version:1,url:"https://react-icons.github.io/react-icons/"},{icon:null,techName:"React-Modal",use:"Popup libary",version:1,url:"https://github.com/reactjs/react-modal"},{icon:null,techName:"React-Toastify",use:"Toast libary",version:1,url:"https://www.npmjs.com/package/react-toastify"},{icon:null,techName:"Yup",use:"Libary for validation schema, best works with formik",version:1,url:"https://www.npmjs.com/package/yup"}],r=s=>{window.open(s,"_blank")};return l.jsxs(l.Fragment,{children:[l.jsx(Ec,{url:e}),l.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Libraries"}),l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-lg",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Doc Url"})]})}),l.jsx("tbody",{children:n==null?void 0:n.map((s,i)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("img",{className:"inline",src:s==null?void 0:s.icon,alt:""}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:s==null?void 0:s.techName})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.use}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l.jsx(Mc,{onMouseEnter:()=>t(s==null?void 0:s.url),onMouseLeave:()=>t(null),onClick:()=>r(s==null?void 0:s.url),className:"inline cursor-pointer text-2xl hover:scale-105 font-semibold"})})]}))})]})]})}function U9(){const[e,t]=j.useState(null),n=[{icon:null,techName:"Login Authentication",use:"This library is use to handle forms in a very smart way"},{icon:null,techName:"Protected Routes",use:"This library is use to handle API calls"},{icon:null,techName:"404 Page",use:"This library is use to handle API calls"},{icon:null,techName:"Secure Localstorage",use:"This library is use to handle API calls"},{icon:null,techName:"Url Encryption",use:"This library is use to handle API calls"}];return l.jsxs(l.Fragment,{children:[l.jsx(Ec,{url:e}),l.jsx("div",{className:"font-semibold text-lg mb-4",children:"# Essentials"}),l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-lg",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Uses"})]})}),l.jsx("tbody",{children:n==null?void 0:n.map((r,s)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("img",{className:"inline",src:r==null?void 0:r.icon,alt:""}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:r==null?void 0:r.techName})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.use})]}))})]})]})}const _0=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],H9=[{title:"Bengaluru office",timings:"Mon-Sat 9am to 5pm.",address:"100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN"},{title:"Head office",timings:"Mon-Sat 9am to 5pm.",address:"12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN"},{title:"Karnataka office",timings:"Mon-Sat 9am to 5pm.",address:"42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN"}],Z9=[{name:"Gabrielle Fernandez",image:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",position:"Marketing Lead"},{name:"Victória Silva",image:"https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",position:"Back-end developer"},{name:"Gabrielle Fernandez",image:"https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Sales"},{name:"Sadie Lewis",image:"https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Sales"},{name:"Thilde Olaisen",image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600",position:"Marketing Lead"},{name:"Deepika Ramesh",image:"https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg",position:"Front-end developer"},{name:"Jordi Santiago",image:"https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",position:"Front-end developer"},{name:"Kerim Fahri",image:"https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",position:"Back-end developer"}];function W9(){const[e,t]=Be.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`//Source - Dev UI
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
     `}),l.jsxs("div",{children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:_0.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:_0.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsxs("div",{className:"mx-auto max-w-7xl px-4",children:[l.jsxs("div",{className:"flex flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[l.jsx("div",{className:"max-w-max rounded-full border bg-gray-50 p-1 px-3",children:l.jsx("p",{className:"text-xs font-semibold leading-normal md:text-sm",children:"About the company"})}),l.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Made with love, right here in India"}),l.jsx("p",{className:"max-w-4xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"})]}),l.jsx("div",{className:"w-full space-y-4",children:l.jsx("img",{className:"h-[200px] w-full rounded-xl object-cover md:h-full",src:"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg",alt:""})}),l.jsx("div",{className:"my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around",children:H9.map(r=>l.jsxs("div",{className:"flex flex-col space-y-3 md:w-2/4 lg:w-1/5",children:[l.jsx(R3,{className:"h-5 w-5"}),l.jsx("p",{className:"w-full text-xl font-semibold  text-gray-900",children:r.title}),l.jsx("p",{className:"w-full text-base text-gray-700",children:r.timings}),l.jsx("p",{className:"text-sm font-medium",children:r.address})]},r.title))}),l.jsx("hr",{className:"mt-20"}),l.jsx("div",{className:"mt-16 flex items-center",children:l.jsxs("div",{className:"space-y-6 md:w-3/4",children:[l.jsx("div",{className:"max-w-max rounded-full border bg-gray-50 p-1 px-3",children:l.jsx("p",{className:"text-xs font-semibold leading-normal md:text-sm",children:"Join Us →"})}),l.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-4xl",children:"Meet our team"}),l.jsx("p",{className:"max-w-4xl text-base text-gray-700 md:text-xl",children:"Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."}),l.jsx("div",{})]})}),l.jsx("div",{className:"grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4",children:Z9.map(r=>l.jsxs("div",{className:"rounded-md border",children:[l.jsx("img",{src:r.image,alt:r.name,className:"h-[300px] w-full rounded-lg object-cover "}),l.jsx("p",{className:"mt-6 w-full px-2 text-xl  font-semibold text-gray-900",children:r.name}),l.jsx("p",{className:"w-full px-2 pb-6 text-sm font-semibold text-gray-500",children:r.position})]},r.name))}),l.jsxs("div",{className:"flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsx("p",{className:"text-sm font-semibold md:text-base",children:"Join our team →"}),l.jsx("p",{className:"text-3xl font-bold md:text-4xl",children:"We're just getting started"}),l.jsx("p",{className:"text-base text-gray-600 md:text-lg",children:"Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."}),l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Join Now"})]}),l.jsx("div",{className:"md:mt-o mt-10 w-full",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"Getting Started",className:"rounded-lg"})})]})]}),l.jsx("hr",{className:"mt-6"}),l.jsx("div",{className:"mx-auto max-w-7xl",children:l.jsxs("footer",{className:"px-4 py-10",children:[l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[l.jsx("span",{children:l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:l.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),l.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"About us"}),l.jsx("li",{children:"Company History"}),l.jsx("li",{children:"Our Team"}),l.jsx("li",{children:"Our Vision"}),l.jsx("li",{children:"Press Release"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Washington"}),l.jsx("li",{children:"New Hampshire"}),l.jsx("li",{children:"Maine"}),l.jsx("li",{children:"Texas"}),l.jsx("li",{children:"Indiana"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"UI / UX Design"}),l.jsx("li",{children:"App Development"}),l.jsx("li",{children:"API reference"}),l.jsx("li",{children:"API status"}),l.jsx("li",{children:"Documentation"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Privacy Policy"}),l.jsx("li",{children:"Terms of Service"}),l.jsx("li",{children:"Cookie Policy"}),l.jsx("li",{children:"Disclaimer"}),l.jsx("li",{children:"Media Policy"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Facebook"}),l.jsx("li",{children:"Twitter"}),l.jsx("li",{children:"Instagram"}),l.jsx("li",{children:"Linkedin"}),l.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const A0=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}];function q9(){const[e,t]=Be.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`'use client'

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
`}),l.jsxs("div",{className:"mx-auto w-full max-w-7xl px-2 md:px-4",children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:A0.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:A0.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsxs("div",{className:"mx-auto my-12 flex max-w-6xl flex-col px-2 md:my-24 lg:my-32 lg:flex-row lg:items-center",children:[l.jsxs("div",{children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-semibold text-black",children:"404 error"}),l.jsx("h1",{className:"mt-3 text-2xl font-semibold text-gray-800 md:text-3xl",children:"We can't find that page"}),l.jsx("p",{className:"mt-4 text-gray-500",children:"Sorry, the page you are looking for doesn't exist or has been moved."}),l.jsxs("div",{className:"mt-6 flex items-center gap-x-3",children:[l.jsxs("button",{type:"button",className:"inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx(P3,{size:16,className:"mr-2"}),"Go back"]}),l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Contact us"})]})]}),l.jsxs("div",{className:"mt-10 space-y-6",children:[l.jsxs("div",{children:[l.jsxs("a",{href:"#",className:"hover:underlin inline-flex items-center gap-x-2 text-sm font-semibold text-black",children:[l.jsx("span",{children:"Documentation"}),l.jsx(Xr,{size:16})]}),l.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Dive in to learn all about our product."})]}),l.jsxs("div",{children:[l.jsxs("a",{href:"#",className:"inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline",children:[l.jsx("span",{children:"Our blog"}),l.jsx(Xr,{size:16})]}),l.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Read the latest posts on our blog."})]}),l.jsxs("div",{children:[l.jsxs("a",{href:"#",className:"inline-flex items-center gap-x-2 text-sm font-semibold text-black hover:underline",children:[l.jsx("span",{children:"Chat to support"}),l.jsx(Xr,{size:16})]}),l.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Our friendly team is here to help."})]})]})]}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:"404",className:"h-full w-full rounded-md object-cover"})})]}),l.jsx("hr",{className:"mt-6"}),l.jsx("div",{className:"mx-auto max-w-7xl",children:l.jsxs("footer",{className:"px-4 py-10",children:[l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[l.jsx("span",{children:l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:l.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),l.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"About us"}),l.jsx("li",{children:"Company History"}),l.jsx("li",{children:"Our Team"}),l.jsx("li",{children:"Our Vision"}),l.jsx("li",{children:"Press Release"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Washington"}),l.jsx("li",{children:"New Hampshire"}),l.jsx("li",{children:"Maine"}),l.jsx("li",{children:"Texas"}),l.jsx("li",{children:"Indiana"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"UI / UX Design"}),l.jsx("li",{children:"App Development"}),l.jsx("li",{children:"API reference"}),l.jsx("li",{children:"API status"}),l.jsx("li",{children:"Documentation"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Privacy Policy"}),l.jsx("li",{children:"Terms of Service"}),l.jsx("li",{children:"Cookie Policy"}),l.jsx("li",{children:"Disclaimer"}),l.jsx("li",{children:"Media Policy"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Facebook"}),l.jsx("li",{children:"Twitter"}),l.jsx("li",{children:"Instagram"}),l.jsx("li",{children:"Linkedin"}),l.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const L0=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"},{name:"Blogs",href:"#"}];function G9(){const[e,t]=Be.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`'use client'

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
`}),l.jsxs("div",{className:"w-full",children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:L0.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:L0.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsx("div",{className:"relative w-full bg-white",children:l.jsxs("div",{className:"mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8",children:[l.jsxs("div",{className:"flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6",children:[l.jsxs("div",{className:"mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1",children:[l.jsx("div",{className:"rounded-full bg-white p-1 px-2",children:l.jsx("p",{className:"text-sm font-medium",children:"We' hiring"})}),l.jsx("p",{className:"text-sm font-medium",children:"Join our team →"})]}),l.jsx("h1",{className:"mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl",children:"People who care about your growth"}),l.jsx("p",{className:"mt-8 text-lg text-gray-700",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi blanditiis dolores quasi eaque explicabo!"}),l.jsxs("form",{action:"",className:"mt-8 flex items-start space-x-2",children:[l.jsxs("div",{children:[l.jsx("input",{className:"flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Enter your email",id:"email"}),l.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"We care about your privacy"})]}),l.jsx("div",{children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})})]})]}),l.jsx("div",{className:"relative lg:col-span-5 lg:-mr-8 xl:col-span-6",children:l.jsx("img",{className:"aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]",src:"https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:""})})]})}),l.jsx("div",{className:"mx-auto my-32 max-w-7xl px-2 lg:px-8",children:l.jsxs("div",{className:"grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4",children:[l.jsxs("div",{children:[l.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100",children:l.jsx("svg",{className:"h-9 w-9 text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})})}),l.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Secured Payments"}),l.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100",children:l.jsx("svg",{className:"h-9 w-9 text-orange-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),l.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Fast & Easy to Load"}),l.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100",children:l.jsx("svg",{className:"h-9 w-9 text-green-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),l.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Light & Dark Version"}),l.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100",children:l.jsx("svg",{className:"h-9 w-9 text-red-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})})}),l.jsx("h3",{className:"mt-8 text-lg font-semibold text-black",children:"Filter Blocks"}),l.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]})]})}),l.jsx("section",{className:"mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0",children:l.jsxs("div",{children:[l.jsxs("div",{className:"mx-auto max-w-2xl lg:text-center",children:[l.jsx("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl",children:"Frequently Asked Questions"}),l.jsx("p",{className:"mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda"})]}),l.jsxs("div",{className:"mx-auto mt-8 max-w-3xl space-y-4 md:mt-16",children:[l.jsxs("div",{className:"cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200",children:[l.jsxs("button",{type:"button",className:"flex w-full items-center justify-between px-4 py-5 sm:p-6",children:[l.jsx("span",{className:"flex text-lg font-semibold text-black",children:"How do I get started?"}),l.jsx(D3,{className:"h-5 w-5 text-gray-500"})]}),l.jsx("div",{className:"px-4 pb-5 sm:px-6 sm:pb-6",children:l.jsx("p",{className:"text-gray-500",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"})})]}),Array.from({length:2}).map((r,s)=>l.jsx("div",{className:"cursor-pointer rounded-md border border-gray-400 transition-all duration-200",children:l.jsxs("button",{type:"button",className:"flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center",children:[l.jsx("span",{className:"flex text-start text-lg font-semibold text-black",children:"What is the difference between a free and paid account?"}),l.jsx(O3,{className:"hidden h-5 w-5 text-gray-500 md:block"})]})},s))]}),l.jsxs("p",{className:"textbase mt-6 text-center text-gray-600",children:["Can't find what you're looking for?"," ",l.jsx("a",{href:"#",title:"",className:"font-semibold text-black hover:underline",children:"Contact our support"})]})]})}),l.jsx("div",{className:"mx-auto my-12 max-w-7xl md:my-24 lg:my-32",children:l.jsxs("div",{className:"lg:grid lg:grid-cols-12 lg:gap-x-6",children:[l.jsxs("div",{className:"px-4 py-10 lg:col-span-5 lg:px-0",children:[l.jsx("span",{className:"mb-8 inline-block rounded-full border p-1 px-3 text-xs font-semibold",children:"Pricing that fits your budget"}),l.jsx("h1",{className:"text-3xl font-bold md:text-5xl",children:"Lorem ipsum dolor sit amet consectetur."}),l.jsx("p",{className:"mt-8 font-medium",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni, rem sed sint neque doloribus saepe veniam minima quaerat minus."}),l.jsxs("div",{className:"mt-8 flex w-full max-w-sm items-center space-x-2",children:[l.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})]})]}),l.jsxs("div",{className:"flex flex-col items-center justify-center md:flex-row lg:col-span-7",children:[l.jsx("div",{className:"w-full p-5 md:w-1/2",children:l.jsxs("div",{className:"rounded-md border bg-white bg-opacity-90",children:[l.jsx("div",{className:" border-b",children:l.jsxs("div",{className:"px-9 py-7",children:[l.jsx("h3",{className:"mb-3 text-xl font-bold leading-snug text-gray-900",children:"Standard"}),l.jsx("p",{className:"font-medium leading-relaxed text-gray-500",children:"Lorem ipsum dolor sit amet, consect etur adipiscing maror."})]})}),l.jsxs("div",{className:"px-9 pb-9 pt-8",children:[l.jsx("p",{className:"mb-6 font-medium leading-relaxed text-gray-600",children:"Features included:"}),l.jsxs("ul",{className:"mb-11",children:[l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"3 Team Members"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"1200+ UI Blocks"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"10 GB Cloud Storage"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"Individual Email Account"})]}),l.jsxs("li",{className:"flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"Premium Support"})]})]}),l.jsxs("p",{className:"mb-6 text-lg font-semibold leading-normal text-gray-600",children:[l.jsx("span",{children:"Starting from"}),l.jsx("span",{className:"ml-2 text-gray-900",children:"$49/mo"})]}),l.jsx("div",{className:"md:inline-block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Start your free trial"})})]})]})}),l.jsx("div",{className:"w-full p-5 md:w-1/2",children:l.jsxs("div",{className:"rounded-md border bg-white bg-opacity-90",children:[l.jsx("div",{className:" border-b",children:l.jsxs("div",{className:"px-9 py-7",children:[l.jsx("h3",{className:"mb-3 text-xl font-bold leading-snug text-gray-900",children:"Standard"}),l.jsx("p",{className:"font-medium leading-relaxed text-gray-500",children:"Lorem ipsum dolor sit amet, consect etur adipiscing maror."})]})}),l.jsxs("div",{className:"px-9 pb-9 pt-8",children:[l.jsx("p",{className:"mb-6 font-medium leading-relaxed text-gray-600",children:"Features included:"}),l.jsxs("ul",{className:"mb-11",children:[l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"3 Team Members"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"1200+ UI Blocks"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"10 GB Cloud Storage"})]}),l.jsxs("li",{className:"mb-4 flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"Individual Email Account"})]}),l.jsxs("li",{className:"flex items-center",children:[l.jsx(Nt,{className:"mr-2",size:16}),l.jsx("p",{className:"font-semibold leading-normal",children:"Premium Support"})]})]}),l.jsxs("p",{className:"mb-6 text-lg font-semibold leading-normal text-gray-600",children:[l.jsx("span",{children:"Starting from"}),l.jsx("span",{className:"ml-2 text-gray-900",children:"$49/mo"})]}),l.jsx("div",{className:"md:inline-block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Start your free trial"})})]})]})})]})]})}),l.jsx("div",{className:"mx-auto max-w-7xl bg-gray-50 px-2 py-10 lg:px-2",children:l.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between",children:[l.jsxs("div",{className:"w-full md:w-2/3 lg:w-1/2",children:[l.jsx("h2",{className:"text-3xl font-bold text-black",children:"Sign up for our weekly newsletter"}),l.jsx("p",{className:"mt-4 text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula."}),l.jsxs("div",{className:"mt-4",children:[l.jsx("p",{className:"font-semibold text-gray-800",children:"Trusted by over 100,000+ businesses and individuals"}),l.jsxs("div",{className:"mt-2 flex items-center",children:[l.jsx("div",{className:"flex space-x-1",children:Array.from({length:5}).map((r,s)=>l.jsx(U3,{className:"h-5 w-5 text-yellow-400"},s))}),l.jsx("span",{className:"ml-2 inline-block",children:l.jsx("span",{className:"text-sm font-semibold text-gray-800",children:"4.8/5 . 3420 Reviews"})})]})]})]}),l.jsxs("div",{className:"mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2",children:[l.jsx("form",{className:"flex lg:justify-center",children:l.jsxs("div",{className:"flex w-full max-w-md flex-col space-y-4",children:[l.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),l.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Subscribe"})]})}),l.jsx("p",{className:"mt-2 lg:text-center",children:l.jsx("span",{className:"text-sm text-gray-600",children:"By signing up, you agree to our terms of service and privacy policy."})})]})]})}),l.jsx("div",{className:"mx-auto mt-12 max-w-7xl",children:l.jsxs("footer",{className:"px-4 py-10",children:[l.jsxs("div",{className:"flex flex-col md:flex-row md:items-center",children:[l.jsx("span",{children:l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("div",{className:"mt-4 grow md:ml-12 md:mt-0",children:l.jsx("p",{className:"text-base font-semibold text-gray-700",children:"© 2023 DevUI Component Library"})})]}),l.jsxs("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:[l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Company"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"About us"}),l.jsx("li",{children:"Company History"}),l.jsx("li",{children:"Our Team"}),l.jsx("li",{children:"Our Vision"}),l.jsx("li",{children:"Press Release"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Our Stores"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Washington"}),l.jsx("li",{children:"New Hampshire"}),l.jsx("li",{children:"Maine"}),l.jsx("li",{children:"Texas"}),l.jsx("li",{children:"Indiana"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Services"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"UI / UX Design"}),l.jsx("li",{children:"App Development"}),l.jsx("li",{children:"API reference"}),l.jsx("li",{children:"API status"}),l.jsx("li",{children:"Documentation"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Legal"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Privacy Policy"}),l.jsx("li",{children:"Terms of Service"}),l.jsx("li",{children:"Cookie Policy"}),l.jsx("li",{children:"Disclaimer"}),l.jsx("li",{children:"Media Policy"})]})]}),l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700",children:"Social Links"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"Facebook"}),l.jsx("li",{children:"Twitter"}),l.jsx("li",{children:"Instagram"}),l.jsx("li",{children:"Linkedin"}),l.jsx("li",{children:"YouTube"})]})]})]})]})})]})]})}const $0=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],Y9=[{name:"Basic plan",price:"$10/mth",features:["Access to all basic features ","Basic reporting and analytics","Up to 10 individual users","20GB individual data each user","Basic chat and email support"]},{name:"Business plan",price:"$20/mth",features:["200+ integrations","Advanced reporting and analytics","Up to 20 individual users","40GB individual data each user","Priority chat and email support"]},{name:"Enterprise plan",price:"$40/mth",features:["Advanced custom fields","Audit log and data history","Unlimited individual users","Unlimited individual data","Personalized+priority service"]}],K9=[{question:"Is there a free trial available?",answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},{question:"Can I change my plan later?",answer:"Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."},{question:"What is your cancellation policy?",answer:"We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid."},{question:"Can other info be added to an invoice?",answer:"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."},{question:"How does billing work?",answer:"Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."},{question:"How do I change my account email?",answer:"You can change the email address associated with your account by going to account from a laptop or desktop."}];function Q9(){const[e,t]=Be.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`'use client'

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
`}),l.jsxs("div",{className:"mx-auto max-w-7xl px-2 md:px-4",children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden grow px-12 lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:$0.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:$0.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsxs("div",{children:[l.jsxs("div",{className:"mx-auto flex max-w-5xl flex-col space-y-8 pb-10 pt-12 md:pt-24",children:[l.jsx("p",{className:"text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",children:"Simple, transparent pricing"}),l.jsx("p",{className:"max-w-3xl text-base text-gray-600 md:text-xl",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?"})]}),l.jsx("div",{className:"mt-8 space-y-4 md:mt-12",children:l.jsx("div",{className:"grid space-y-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:space-x-8",children:Y9.map(r=>l.jsxs("div",{className:"rounded-lg border border-gray-200 bg-white",children:[l.jsxs("div",{className:"flex w-full flex-col justify-start space-y-4 px-8 pt-10",children:[l.jsx("p",{className:"text-4xl font-bold leading-10",children:r.price}),l.jsxs("div",{className:"flex w-full flex-col items-start justify-start space-y-1",children:[l.jsx("p",{className:"w-full text-xl font-semibold leading-loose text-gray-900",children:r.name}),l.jsx("p",{className:"w-full text-base leading-normal text-gray-600",children:"Billed annually."})]})]}),l.jsx("div",{className:"flex w-full max-w-sm flex-col px-8 py-8",children:l.jsxs("div",{className:"flex w-full flex-col items-start justify-start space-y-3",children:[l.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Get Started"}),l.jsx("button",{type:"button",className:"w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Contact Us"})]})}),l.jsx("div",{className:"flex w-full flex-col items-start justify-start px-8 pb-8",children:l.jsx("div",{className:"flex w-full flex-col space-y-4",children:r.features.map(s=>l.jsxs("div",{className:"inline-flex w-full space-x-3",children:[l.jsx("div",{className:"flex items-center justify-center rounded-full p-1 lg:bg-gray-100",children:l.jsx(z3,{className:"h-4 w-4"})}),l.jsx("p",{className:"w-full text-base leading-normal text-gray-600",children:s})]},s))})})]},r.name))})}),l.jsx("div",{className:"mt-12 space-y-16 bg-gray-50 py-16",children:l.jsx("div",{className:"mx-auto  flex max-w-7xl items-center justify-center  px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex flex-col items-center space-y-6 md:w-3/4",children:[l.jsxs("div",{className:"space-y-4 justify-self-center",children:[l.jsx("p",{className:"text-center text-3xl font-bold leading-10 text-gray-900",children:"Frequently asked questions"}),l.jsx("p",{className:"text-center text-lg leading-loose text-gray-600",children:"Everything you need to know about the product and billing."})]}),l.jsx("div",{className:"divide-y divide-gray-300",children:K9.map((r,s)=>l.jsxs("div",{className:"flex justify-between space-x-6 py-6",children:[l.jsxs("div",{className:"inline-flex flex-col items-start justify-start space-y-2",children:[l.jsx("p",{className:"text-lg font-medium leading-7 text-gray-900",children:r.question}),s===0?l.jsx("p",{className:"text-base leading-normal text-gray-600",children:r.answer}):null]}),l.jsx("div",{children:s===0?l.jsx(V3,{className:"h-6 w-6 text-gray-600"}):l.jsx(B3,{className:"h-6 w-6 text-gray-600"})})]},r.question))})]})})})]}),l.jsxs("footer",{className:"w-full pb-8 pt-12 md:mt-16",children:[l.jsxs("div",{className:"mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row",children:[l.jsxs("div",{className:"w-full px-4 md:w-1/2 lg:px-0",children:[l.jsx("h1",{className:"max-w-sm text-3xl font-bold",children:"Subscribe to our Newsletter"}),l.jsxs("form",{action:"",className:"mt-4 inline-flex w-full items-center md:w-3/4",children:[l.jsx("input",{className:"flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email"}),l.jsx("button",{type:"button",className:"ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:l.jsx(I3,{className:"h-4 w-4"})})]})]}),l.jsx("div",{className:"mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3",children:Array.from({length:3}).map((r,s)=>l.jsxs("div",{className:"mb-8 lg:mb-0",children:[l.jsx("p",{className:"mb-6 text-lg font-semibold text-gray-700 ",children:"Company"}),l.jsxs("ul",{className:"flex flex-col space-y-4 text-[14px] font-medium text-gray-500",children:[l.jsx("li",{children:"About us"}),l.jsx("li",{children:"Company History"}),l.jsx("li",{children:"Our Team"}),l.jsx("li",{children:"Our Vision"}),l.jsx("li",{children:"Press Release"})]})]},s))})]}),l.jsx("hr",{className:"my-8"}),l.jsxs("div",{className:"mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0",children:[l.jsxs("div",{className:"inline-flex items-center",children:[l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})}),l.jsx("span",{className:"ml-4 text-lg font-bold",children:"DevUI"})]}),l.jsx("div",{className:"mt-4 md:mt-0",children:l.jsx("p",{className:"text-sm font-medium text-gray-500",children:"© 2023 DevUI. All rights reserved."})})]})]})]})]})}const P0=[{name:"Home",href:"#"},{name:"About",href:"#"},{name:"Contact",href:"#"}],X9=[{title:"Bengaluru office",timings:"Mon-Sat 9am to 5pm.",address:"100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN"},{title:"Head office",timings:"Mon-Sat 9am to 5pm.",address:"12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN"},{title:"Karnataka office",timings:"Mon-Sat 9am to 5pm.",address:"42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN"}];function J9(){const[e,t]=Be.useState(!1),n=()=>{t(!e)};return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`'use client'

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
`}),l.jsxs("div",{children:[l.jsx("header",{className:"relative w-full border-b bg-white pb-4",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"hidden grow px-12 lg:block",children:l.jsx("ul",{className:"inline-flex space-x-8",children:P0.map(r=>l.jsx("li",{children:l.jsx("a",{href:r.href,className:"text-sm font-semibold text-gray-800 hover:text-gray-900",children:r.name})},r.name))})}),l.jsx("div",{className:"hidden lg:block",children:l.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})}),l.jsx("div",{className:"lg:hidden",children:l.jsx(kr,{onClick:n,className:"h-6 w-6 cursor-pointer"})}),e&&l.jsx("div",{className:"absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",children:l.jsx("div",{className:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",children:l.jsxs("div",{className:"px-5 pb-6 pt-5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"inline-flex items-center space-x-2",children:[l.jsx("span",{children:l.jsx("svg",{width:"30",height:"30",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("span",{className:"font-bold",children:"DevUI"})]}),l.jsx("div",{className:"-mr-2",children:l.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:[l.jsx("span",{className:"sr-only",children:"Close menu"}),l.jsx(Sr,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),l.jsx("div",{className:"mt-6",children:l.jsx("nav",{className:"grid gap-y-4",children:P0.map(r=>l.jsx("a",{href:r.href,className:"-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",children:l.jsx("span",{className:"ml-3 text-base font-medium text-gray-900",children:r.name})},r.name))})}),l.jsx("button",{type:"button",className:"mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Button text"})]})})})]})}),l.jsx("div",{className:"mx-auto max-w-7xl px-4",children:l.jsx("div",{className:"mx-auto max-w-7xl py-12 md:py-24",children:l.jsxs("div",{className:"grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2",children:[l.jsx("div",{className:"flex items-center justify-center",children:l.jsxs("div",{className:"px-2 md:px-12",children:[l.jsx("p",{className:"text-2xl font-bold text-gray-900 md:text-4xl",children:"Get in touch"}),l.jsx("p",{className:"mt-4 text-lg text-gray-600",children:"Our friendly team would love to hear from you."}),l.jsxs("form",{action:"",className:"mt-8 space-y-4",children:[l.jsxs("div",{className:"grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2",children:[l.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[l.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"first_name",children:"First Name"}),l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"first_name",placeholder:"First Name"})]}),l.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[l.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"last_name",children:"Last Name"}),l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"last_name",placeholder:"Last Name"})]})]}),l.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[l.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"email",children:"Email"}),l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"text",id:"email",placeholder:"Email"})]}),l.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[l.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"phone_number",children:"Phone number"}),l.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",type:"tel",id:"phone_number",placeholder:"Phone number"})]}),l.jsxs("div",{className:"grid w-full  items-center gap-1.5",children:[l.jsx("label",{className:"text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"message",children:"Message"}),l.jsx("textarea",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",id:"message",placeholder:"Leave us a message",cols:3})]}),l.jsx("button",{type:"button",className:"w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Send Message"})]})]})}),l.jsx("img",{alt:"Contact us",className:"hidden max-h-full w-full rounded-lg object-cover lg:block",src:"https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"})]})})}),l.jsx("div",{className:"rounded-lg bg-gray-100",children:l.jsx("div",{className:"mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",children:l.jsx("div",{className:"py-20",children:l.jsxs("div",{className:"grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsx("p",{className:"w-full text-4xl font-bold text-gray-900",children:"Our Offices"}),l.jsx("p",{className:"w-full text-lg text-gray-600",children:"Find us at these locations."})]}),l.jsx("div",{className:"space-y-4 divide-y-2",children:X9.map(r=>l.jsxs("div",{className:"flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full",children:[l.jsx("p",{className:"w-full text-xl font-semibold  text-gray-900",children:r.title}),l.jsx("p",{className:"w-full text-base  text-gray-600",children:r.timings}),l.jsx("p",{className:"text-sm font-semibold text-gray-600",children:r.address})]},r.title))})]})})})}),l.jsx("hr",{className:"mt-6"}),l.jsx("section",{className:"relative overflow-hidden bg-white py-8",children:l.jsx("div",{className:"container relative z-10 mx-auto px-4",children:l.jsxs("div",{className:"-m-8 flex flex-wrap items-center justify-between",children:[l.jsx("div",{className:"w-auto p-8",children:l.jsx("a",{href:"#",children:l.jsxs("div",{className:"inline-flex items-center",children:[l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})}),l.jsx("span",{className:"ml-4 text-lg font-bold",children:"DevUI"})]})})}),l.jsx("div",{className:"w-auto p-8",children:l.jsxs("ul",{className:"-m-5 flex flex-wrap items-center",children:[l.jsx("li",{className:"p-5",children:l.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Privacy Policy"})}),l.jsx("li",{className:"p-5",children:l.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Terms of Service"})}),l.jsx("li",{className:"p-5",children:l.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Return Policy"})}),l.jsx("li",{className:"p-5",children:l.jsx("a",{className:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Contact Us"})})]})}),l.jsx("div",{className:"w-auto p-8",children:l.jsxs("div",{className:"-m-1.5 flex flex-wrap",children:[l.jsx("div",{className:"w-auto p-1.5",children:l.jsx("a",{href:"#",children:l.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:l.jsx("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z",fill:"#27272A"})})})})}),l.jsx("div",{className:"w-auto p-1.5",children:l.jsx("a",{href:"#",children:l.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:l.jsx("svg",{width:"14",height:"11",viewBox:"0 0 14 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z",fill:"#27272A"})})})})}),l.jsx("div",{className:"w-auto p-1.5",children:l.jsx("a",{href:"#",children:l.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:l.jsx("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z",fill:"#27272A"})})})})})]})})]})})})]})]})}const eg="/assets/tlogo-b011959f.png";function tg(){const e=[{name:"College",desc:"Dummy college",workStatus:"active",filterBy:"College",imgUrl:'src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"'},{name:"School",desc:"Dummy school",workStatus:"disabled",filterBy:"College",imgUrl:'src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"'}],t=r=>{navigate(`/documentation/${r}`)},n=r=>{navigate(`/modules-desc/${r}`)};return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`import React from 'react'
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
`}),l.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center",children:[l.jsx("div",{className:"font-bold text-lg mb-4 pr-10 flex-1",children:"# College "}),l.jsx("div",{className:"form-group col-span-12 md:col-span-3 mb-4 md:px-2 flex-1 text-right pr-20",children:l.jsxs("select",{className:"cypress_transferMode px-4  border rounded-md shadow-xl text-lg cursor-pointer",children:[l.jsx("option",{className:"cursor-pointer",value:"All",children:"All"}),l.jsx("option",{className:"cursor-pointer",value:"1",children:"Phase-1"}),l.jsx("option",{className:"cursor-pointer",value:"2",children:"Phase-2"}),l.jsx("option",{className:"cursor-pointer",value:"3",children:"Phase-3"})]})})]}),l.jsx("div",{className:"h-[80vh] overflow-y-scroll",children:l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-md",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"#"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Description"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Work Status"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Action"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Link"})]})}),l.jsx("tbody",{children:e==null?void 0:e.map((r,s)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s+1}),l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("div",{className:"w-12 h-12 inline-block rounded-full shadow-xl border p-2",children:l.jsx("img",{className:"inline w-10 rounded",src:eg,alt:""})}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:r==null?void 0:r.name})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r==null?void 0:r.desc}),l.jsx("td",{className:`px-2 py-2 text-sm text-left font-semibold 
                            ${(r==null?void 0:r.workStatus)==="disabled"&&"text-red-600"}
                            ${(r==null?void 0:r.workStatus)==="active"&&"text-green-600"}
                            `,children:r==null?void 0:r.workStatus}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l.jsx("button",{onClick:()=>n(r==null?void 0:r.filterBy),type:"button",className:"rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white",children:"View"})}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l.jsx(Mc,{onMouseEnter:()=>settooltipData(r==null?void 0:r.filterBy),onMouseLeave:()=>settooltipData(null),onClick:()=>t(r==null?void 0:r.filterText),className:"inline cursor-pointer text-2xl hover:scale-105 font-semibold"})})]}))})]})})]})}function ng(){return l.jsxs(l.Fragment,{children:[l.jsx("div",{children:"ScrollHandleCss"}),l.jsx(me,{code:`/*App.css*/
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
`})]})}var G1={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(lm,function(){var n=1e3,r=6e4,s=36e5,i="millisecond",a="second",o="minute",c="hour",u="day",h="week",x="month",f="quarter",b="year",w="date",N="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(V){var z=["th","st","nd","rd"],L=V%100;return"["+V+(z[(L-20)%10]||z[L]||z[0])+"]"}},g=function(V,z,L){var U=String(V);return!U||U.length>=z?V:""+Array(z+1-U.length).join(L)+V},v={s:g,z:function(V){var z=-V.utcOffset(),L=Math.abs(z),U=Math.floor(L/60),P=L%60;return(z<=0?"+":"-")+g(U,2,"0")+":"+g(P,2,"0")},m:function V(z,L){if(z.date()<L.date())return-V(L,z);var U=12*(L.year()-z.year())+(L.month()-z.month()),P=z.clone().add(U,x),C=L-P<0,E=z.clone().add(U+(C?-1:1),x);return+(-(U+(L-P)/(C?P-E:E-P))||0)},a:function(V){return V<0?Math.ceil(V)||0:Math.floor(V)},p:function(V){return{M:x,y:b,w:h,d:u,D:w,h:c,m:o,s:a,ms:i,Q:f}[V]||String(V||"").toLowerCase().replace(/s$/,"")},u:function(V){return V===void 0}},k="en",A={};A[k]=m;var F=function(V){return V instanceof W},O=function V(z,L,U){var P;if(!z)return k;if(typeof z=="string"){var C=z.toLowerCase();A[C]&&(P=C),L&&(A[C]=L,P=C);var E=z.split("-");if(!P&&E.length>1)return V(E[0])}else{var $=z.name;A[$]=z,P=$}return!U&&P&&(k=P),P||!U&&k},T=function(V,z){if(F(V))return V.clone();var L=typeof z=="object"?z:{};return L.date=V,L.args=arguments,new W(L)},S=v;S.l=O,S.i=F,S.w=function(V,z){return T(V,{locale:z.$L,utc:z.$u,x:z.$x,$offset:z.$offset})};var W=function(){function V(L){this.$L=O(L.locale,null,!0),this.parse(L)}var z=V.prototype;return z.parse=function(L){this.$d=function(U){var P=U.date,C=U.utc;if(P===null)return new Date(NaN);if(S.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var E=P.match(_);if(E){var $=E[2]-1||0,H=(E[7]||"0").substring(0,3);return C?new Date(Date.UTC(E[1],$,E[3]||1,E[4]||0,E[5]||0,E[6]||0,H)):new Date(E[1],$,E[3]||1,E[4]||0,E[5]||0,E[6]||0,H)}}return new Date(P)}(L),this.$x=L.x||{},this.init()},z.init=function(){var L=this.$d;this.$y=L.getFullYear(),this.$M=L.getMonth(),this.$D=L.getDate(),this.$W=L.getDay(),this.$H=L.getHours(),this.$m=L.getMinutes(),this.$s=L.getSeconds(),this.$ms=L.getMilliseconds()},z.$utils=function(){return S},z.isValid=function(){return this.$d.toString()!==N},z.isSame=function(L,U){var P=T(L);return this.startOf(U)<=P&&P<=this.endOf(U)},z.isAfter=function(L,U){return T(L)<this.startOf(U)},z.isBefore=function(L,U){return this.endOf(U)<T(L)},z.$g=function(L,U,P){return S.u(L)?this[U]:this.set(P,L)},z.unix=function(){return Math.floor(this.valueOf()/1e3)},z.valueOf=function(){return this.$d.getTime()},z.startOf=function(L,U){var P=this,C=!!S.u(U)||U,E=S.p(L),$=function(Tt,ye){var bt=S.w(P.$u?Date.UTC(P.$y,ye,Tt):new Date(P.$y,ye,Tt),P);return C?bt:bt.endOf(u)},H=function(Tt,ye){return S.w(P.toDate()[Tt].apply(P.toDate("s"),(C?[0,0,0,0]:[23,59,59,999]).slice(ye)),P)},Z=this.$W,ee=this.$M,pe=this.$D,Ce="set"+(this.$u?"UTC":"");switch(E){case b:return C?$(1,0):$(31,11);case x:return C?$(1,ee):$(0,ee+1);case h:var Te=this.$locale().weekStart||0,We=(Z<Te?Z+7:Z)-Te;return $(C?pe-We:pe+(6-We),ee);case u:case w:return H(Ce+"Hours",0);case c:return H(Ce+"Minutes",1);case o:return H(Ce+"Seconds",2);case a:return H(Ce+"Milliseconds",3);default:return this.clone()}},z.endOf=function(L){return this.startOf(L,!1)},z.$set=function(L,U){var P,C=S.p(L),E="set"+(this.$u?"UTC":""),$=(P={},P[u]=E+"Date",P[w]=E+"Date",P[x]=E+"Month",P[b]=E+"FullYear",P[c]=E+"Hours",P[o]=E+"Minutes",P[a]=E+"Seconds",P[i]=E+"Milliseconds",P)[C],H=C===u?this.$D+(U-this.$W):U;if(C===x||C===b){var Z=this.clone().set(w,1);Z.$d[$](H),Z.init(),this.$d=Z.set(w,Math.min(this.$D,Z.daysInMonth())).$d}else $&&this.$d[$](H);return this.init(),this},z.set=function(L,U){return this.clone().$set(L,U)},z.get=function(L){return this[S.p(L)]()},z.add=function(L,U){var P,C=this;L=Number(L);var E=S.p(U),$=function(ee){var pe=T(C);return S.w(pe.date(pe.date()+Math.round(ee*L)),C)};if(E===x)return this.set(x,this.$M+L);if(E===b)return this.set(b,this.$y+L);if(E===u)return $(1);if(E===h)return $(7);var H=(P={},P[o]=r,P[c]=s,P[a]=n,P)[E]||1,Z=this.$d.getTime()+L*H;return S.w(Z,this)},z.subtract=function(L,U){return this.add(-1*L,U)},z.format=function(L){var U=this,P=this.$locale();if(!this.isValid())return P.invalidDate||N;var C=L||"YYYY-MM-DDTHH:mm:ssZ",E=S.z(this),$=this.$H,H=this.$m,Z=this.$M,ee=P.weekdays,pe=P.months,Ce=function(ye,bt,Un,Hn){return ye&&(ye[bt]||ye(U,C))||Un[bt].slice(0,Hn)},Te=function(ye){return S.s($%12||12,ye,"0")},We=P.meridiem||function(ye,bt,Un){var Hn=ye<12?"AM":"PM";return Un?Hn.toLowerCase():Hn},Tt={YY:String(this.$y).slice(-2),YYYY:this.$y,M:Z+1,MM:S.s(Z+1,2,"0"),MMM:Ce(P.monthsShort,Z,pe,3),MMMM:Ce(pe,Z),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:Ce(P.weekdaysMin,this.$W,ee,2),ddd:Ce(P.weekdaysShort,this.$W,ee,3),dddd:ee[this.$W],H:String($),HH:S.s($,2,"0"),h:Te(1),hh:Te(2),a:We($,H,!0),A:We($,H,!1),m:String(H),mm:S.s(H,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:E};return C.replace(p,function(ye,bt){return bt||Tt[ye]||E.replace(":","")})},z.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},z.diff=function(L,U,P){var C,E=S.p(U),$=T(L),H=($.utcOffset()-this.utcOffset())*r,Z=this-$,ee=S.m(this,$);return ee=(C={},C[b]=ee/12,C[x]=ee,C[f]=ee/3,C[h]=(Z-H)/6048e5,C[u]=(Z-H)/864e5,C[c]=Z/s,C[o]=Z/r,C[a]=Z/n,C)[E]||Z,P?ee:S.a(ee)},z.daysInMonth=function(){return this.endOf(x).$D},z.$locale=function(){return A[this.$L]},z.locale=function(L,U){if(!L)return this.$L;var P=this.clone(),C=O(L,U,!0);return C&&(P.$L=C),P},z.clone=function(){return S.w(this.$d,this)},z.toDate=function(){return new Date(this.valueOf())},z.toJSON=function(){return this.isValid()?this.toISOString():null},z.toISOString=function(){return this.$d.toISOString()},z.toString=function(){return this.$d.toUTCString()},V}(),ve=W.prototype;return T.prototype=ve,[["$ms",i],["$s",a],["$m",o],["$H",c],["$W",u],["$M",x],["$y",b],["$D",w]].forEach(function(V){ve[V[1]]=function(z){return this.$g(z,V[0],V[1])}}),T.extend=function(V,z){return V.$i||(V(z,W,T),V.$i=!0),T},T.locale=O,T.isDayjs=F,T.unix=function(V){return T(1e3*V)},T.en=A[k],T.Ls=A,T.p={},T})})(G1);var rg=G1.exports;const F0=zs(rg);function lg(e){return l.jsxs("div",{className:"flex",children:[l.jsx("div",{className:"flex-1 flex",children:(e==null?void 0:e.index)%2===0&&l.jsxs(l.Fragment,{children:[l.jsx("img",{className:"inline h-10 w-10 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"}),l.jsxs("div",{className:"inline-block text-sm bg-[#D1D5DB] text-gray-700 p-2 rounded-lg shadow-xl",children:[l.jsx("div",{children:e==null?void 0:e.message}),l.jsx("div",{className:"block text-xs relative top-8 text-gray-600",children:F0(e==null?void 0:e.createdAt).format("DD-MM-YYYY hh:mm:ss A")})]})]})}),l.jsx("div",{className:"flex-1 flex",children:(e==null?void 0:e.index)%2!==0&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"inline-block text-sm bg-green-500 text-white p-2 rounded-lg shadow-xl",children:[l.jsx("div",{children:e==null?void 0:e.message}),l.jsx("div",{className:"block text-xs relative top-8 text-gray-600",children:F0(e==null?void 0:e.createdAt).format("DD-MM-YYYY hh:mm:ss A")})]}),l.jsx("img",{className:"inline h-10 w-10 rounded-full",src:"https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",alt:"Dan_Abromov"})]})})]})}function sg(){const e=[{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."},{createdAt:"10-02-2022",message:"This is a simple dummy message to show the default behaviour of the message."}];return l.jsxs(l.Fragment,{children:[l.jsx(me,{code:`import React from 'react'
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

export default Chat`}),l.jsxs("div",{className:" h-auto w-auto fixed bottom-10 right-10",children:[l.jsxs("dialog",{className:"relative h-4/5 w-1/2",id:"d",children:[l.jsxs("div",{className:"sticky top-0",children:[l.jsx("button",{onClick:()=>d.close(),className:"absolute top-2 right-3 text-xl p-2 w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-red-500 font-semibold flex justify-center items-center",children:"x"}),l.jsx("div",{className:"flex",children:l.jsx("div",{className:"font-serif",children:"Message"})})]}),l.jsx("div",{className:"mt-10"}),e==null?void 0:e.map((t,n)=>l.jsxs(l.Fragment,{children:[l.jsx(lg,{message:t==null?void 0:t.message,from:t==null?void 0:t.from,index:n}),l.jsx("div",{className:"mt-10"})]})),l.jsxs("form",{className:"mt-2 sticky bottom-0",children:[l.jsx("input",{className:"flex h-10 w-full rounded-md border bg-[#eff0f1] border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"enter message"}),l.jsx("button",{type:"submit",className:"absolute top-0 right-0 text-gray-500 h-10 flex justify-center items-center px-2 rounded-md cursor-pointer hover:scale-105",children:l.jsx($9,{className:"inline ml-1 text-2xl hover:scale-105"})})]})]}),l.jsx("div",{onClick:()=>d.showModal(),className:"bg-green-500 fixed bottom-10 right-10 h-16 w-16 rounded-full  flex flex-col justify-center items-center cursor-pointer shadow-2xl text-white font-semibold border-2 border-white",href:"",children:l.jsx(P9,{className:"text-4xl"})})]})]})}function ig(){return l.jsxs("div",{children:[l.jsx("nav",{className:"bg-white border-b border-gray-200 fixed z-30 w-full",children:l.jsx("div",{className:"px-3 py-3 lg:px-5 lg:pl-3",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center justify-start",children:[l.jsxs("button",{id:"toggleSidebarMobile","aria-expanded":"true","aria-controls":"sidebar",className:"lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded",children:[l.jsx("svg",{id:"toggleSidebarMobileHamburger",className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})}),l.jsx("svg",{id:"toggleSidebarMobileClose",className:"w-6 h-6 hidden",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),l.jsxs("a",{href:"#",className:"text-xl font-bold flex items-center lg:ml-2.5",children:[l.jsx("img",{src:"https://demo.themesberg.com/windster/images/logo.svg",className:"h-6 mr-2",alt:"Windster Logo"}),l.jsx("span",{className:"self-center whitespace-nowrap",children:"Windster"})]}),l.jsxs("form",{action:"#",method:"GET",className:"hidden lg:block lg:pl-32",children:[l.jsx("label",{htmlFor:"topbar-search",className:"sr-only",children:"Search"}),l.jsxs("div",{className:"mt-1 relative lg:w-64",children:[l.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:l.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})}),l.jsx("input",{type:"text",name:"email",id:"topbar-search",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5",placeholder:"Search"})]})]})]}),l.jsxs("div",{className:"flex items-center",children:[l.jsxs("button",{id:"toggleSidebarMobileSearch",type:"button",className:"lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg",children:[l.jsx("span",{className:"sr-only",children:"Search"}),l.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})]}),l.jsxs("div",{className:"hidden lg:flex items-center",children:[l.jsx("span",{className:"text-base font-normal text-gray-500 mr-5",children:"Open source ❤️"}),l.jsx("div",{className:"-mb-1",children:l.jsx("a",{className:"github-button",href:"#","data-color-scheme":"no-preference: dark; light: light; dark: light;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star themesberg/windster-tailwind-css-dashboard on GitHub",children:"Star"})})]}),l.jsxs("a",{href:"#",className:"hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3",children:[l.jsx("svg",{className:"svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"gem",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:l.jsx("path",{fill:"currentColor",d:"M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"})}),"Upgrade to Pro"]})]})]})})}),l.jsxs("div",{className:"flex overflow-hidden bg-white pt-16",children:[l.jsx("aside",{id:"sidebar",className:"fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75","aria-label":"Sidebar",children:l.jsx("div",{className:"relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0",children:l.jsx("div",{className:"flex-1 flex flex-col pt-5 pb-4 overflow-y-auto",children:l.jsxs("div",{className:"flex-1 px-3 bg-white divide-y space-y-1",children:[l.jsxs("ul",{className:"space-y-2 pb-2",children:[l.jsx("li",{children:l.jsxs("form",{action:"#",method:"GET",className:"lg:hidden",children:[l.jsx("label",{htmlFor:"mobile-search",className:"sr-only",children:"Search"}),l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:l.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})}),l.jsx("input",{type:"text",name:"email",id:"mobile-search",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5",placeholder:"Search"})]})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group",children:[l.jsxs("svg",{className:"w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("path",{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}),l.jsx("path",{d:"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"})]}),l.jsx("span",{className:"ml-3",children:"Dashboard"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",target:"_blank",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Kanban"}),l.jsx("span",{className:"bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full",children:"Pro"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",target:"_blank",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsxs("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("path",{d:"M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"}),l.jsx("path",{d:"M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"})]}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Inbox"}),l.jsx("span",{className:"bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full",children:"Pro"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Users"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",clipRule:"evenodd"})}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Products"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",clipRule:"evenodd"})}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Sign In"})]})}),l.jsx("li",{children:l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",clipRule:"evenodd"})}),l.jsx("span",{className:"ml-3 flex-1 whitespace-nowrap",children:"Sign Up"})]})})]}),l.jsxs("div",{className:"space-y-2 pt-2",children:[l.jsxs("a",{href:"#",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2",children:[l.jsx("svg",{className:"w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"gem",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:l.jsx("path",{fill:"currentColor",d:"M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"})}),l.jsx("span",{className:"ml-4",children:"Upgrade to Pro"})]}),l.jsxs("a",{href:"#",target:"_blank",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2",children:[l.jsxs("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),l.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",clipRule:"evenodd"})]}),l.jsx("span",{className:"ml-3",children:"Documentation"})]}),l.jsxs("a",{href:"#",target:"_blank",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})}),l.jsx("span",{className:"ml-3",children:"Components"})]}),l.jsxs("a",{href:"#",target:"_blank",className:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2",children:[l.jsx("svg",{className:"w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",clipRule:"evenodd"})}),l.jsx("span",{className:"ml-3",children:"Help"})]})]})]})})})}),l.jsx("div",{className:"bg-gray-900 opacity-50 hidden fixed inset-0 z-10",id:"sidebarBackdrop"}),l.jsxs("div",{id:"main-content",className:"h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64",children:[l.jsx("main",{children:l.jsxs("div",{className:"pt-6 px-4",children:[l.jsxs("div",{className:"w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4",children:[l.jsxs("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsxs("div",{className:"flex-shrink-0",children:[l.jsx("span",{className:"text-2xl sm:text-3xl leading-none font-bold text-gray-900",children:"$45,385"}),l.jsx("h3",{className:"text-base font-normal text-gray-500",children:"Sales this week"})]}),l.jsxs("div",{className:"flex items-center justify-end flex-1 text-green-500 text-base font-bold",children:["12.5%",l.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]}),l.jsx("div",{id:"main-chart"})]}),l.jsxs("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ",children:[l.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:"Latest Transactions"}),l.jsx("span",{className:"text-base font-normal text-gray-500",children:"This is a list of latest transactions"})]}),l.jsx("div",{className:"flex-shrink-0",children:l.jsx("a",{href:"#",className:"text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2",children:"View all"})})]}),l.jsx("div",{className:"flex flex-col mt-8",children:l.jsx("div",{className:"overflow-x-auto rounded-lg",children:l.jsx("div",{className:"align-middle inline-block min-w-full",children:l.jsx("div",{className:"shadow overflow-hidden sm:rounded-lg",children:l.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[l.jsx("thead",{className:"bg-gray-50",children:l.jsxs("tr",{children:[l.jsx("th",{scope:"col",className:"p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Transaction"}),l.jsx("th",{scope:"col",className:"p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date & Time"}),l.jsx("th",{scope:"col",className:"p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Amount"})]})}),l.jsxs("tbody",{className:"bg-white",children:[l.jsxs("tr",{children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900",children:["Payment from ",l.jsx("span",{className:"font-semibold",children:"Bonnie Green"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 23 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$2300"})]}),l.jsxs("tr",{className:"bg-gray-50",children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left",children:["Payment refund to ",l.jsx("span",{className:"font-semibold",children:"#00910"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 23 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"-$670"})]}),l.jsxs("tr",{children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900",children:["Payment failed from ",l.jsx("span",{className:"font-semibold",children:"#087651"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 18 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$234"})]}),l.jsxs("tr",{className:"bg-gray-50",children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left",children:["Payment from ",l.jsx("span",{className:"font-semibold",children:"Lana Byrd"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 15 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$5000"})]}),l.jsxs("tr",{children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900",children:["Payment from ",l.jsx("span",{className:"font-semibold",children:"Jese Leos"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 15 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$2300"})]}),l.jsxs("tr",{className:"bg-gray-50",children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left",children:["Payment from ",l.jsx("span",{className:"font-semibold",children:"THEMESBERG LLC"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 11 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$560"})]}),l.jsxs("tr",{children:[l.jsxs("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-900",children:["Payment from ",l.jsx("span",{className:"font-semibold",children:"Lana Lysle"})]}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-normal text-gray-500",children:"Apr 6 ,2021"}),l.jsx("td",{className:"p-4 whitespace-nowrap text-sm font-semibold text-gray-900",children:"$1437"})]})]})]})})})})})]})]}),l.jsxs("div",{className:"mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:[l.jsx("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ",children:l.jsxs("div",{className:"flex items-center",children:[l.jsxs("div",{className:"flex-shrink-0",children:[l.jsx("span",{className:"text-2xl sm:text-3xl leading-none font-bold text-gray-900",children:"2,340"}),l.jsx("h3",{className:"text-base font-normal text-gray-500",children:"New products this week"})]}),l.jsxs("div",{className:"ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold",children:["14.6%",l.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})}),l.jsx("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ",children:l.jsxs("div",{className:"flex items-center",children:[l.jsxs("div",{className:"flex-shrink-0",children:[l.jsx("span",{className:"text-2xl sm:text-3xl leading-none font-bold text-gray-900",children:"5,355"}),l.jsx("h3",{className:"text-base font-normal text-gray-500",children:"Visitors this week"})]}),l.jsxs("div",{className:"ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold",children:["32.9%",l.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})}),l.jsx("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ",children:l.jsxs("div",{className:"flex items-center",children:[l.jsxs("div",{className:"flex-shrink-0",children:[l.jsx("span",{className:"text-2xl sm:text-3xl leading-none font-bold text-gray-900",children:"385"}),l.jsx("h3",{className:"text-base font-normal text-gray-500",children:"User signups this week"})]}),l.jsxs("div",{className:"ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold",children:["-2.7%",l.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{fillRule:"evenodd",d:"M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z",clipRule:"evenodd"})})]})]})})]}),l.jsxs("div",{className:"grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4",children:[l.jsxs("div",{className:"bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("h3",{className:"text-xl font-bold leading-none text-gray-900",children:"Latest Customers"}),l.jsx("a",{href:"#",className:"text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2",children:"View all"})]}),l.jsx("div",{className:"flow-root",children:l.jsxs("ul",{role:"list",className:"divide-y divide-gray-200",children:[l.jsx("li",{className:"py-3 sm:py-4",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{className:"h-8 w-8 rounded-full",src:"https://demo.themesberg.com/windster/images/users/neil-sims.png",alt:"Neil image"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:"Neil Sims"}),l.jsx("p",{className:"text-sm text-gray-500 truncate",children:l.jsx("a",{href:"/cdn-cgi/l/email-protection",className:"__cf_email__","data-cfemail":"17727a767e7b57607e7973646372653974787a",children:"[email protected]"})})]}),l.jsx("div",{className:"inline-flex items-center text-base font-semibold text-gray-900",children:"$320"})]})}),l.jsx("li",{className:"py-3 sm:py-4",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{className:"h-8 w-8 rounded-full",src:"https://demo.themesberg.com/windster/images/users/bonnie-green.png",alt:"Neil image"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:"Bonnie Green"}),l.jsx("p",{className:"text-sm text-gray-500 truncate",children:l.jsx("a",{href:"/cdn-cgi/l/email-protection",className:"__cf_email__","data-cfemail":"d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9",children:"[email protected]"})})]}),l.jsx("div",{className:"inline-flex items-center text-base font-semibold text-gray-900",children:"$3467"})]})}),l.jsx("li",{className:"py-3 sm:py-4",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{className:"h-8 w-8 rounded-full",src:"https://demo.themesberg.com/windster/images/users/michael-gough.png",alt:"Neil image"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:"Michael Gough"}),l.jsx("p",{className:"text-sm text-gray-500 truncate",children:l.jsx("a",{href:"/cdn-cgi/l/email-protection",className:"__cf_email__","data-cfemail":"57323a363e3b17203e3933242332257934383a",children:"[email protected]"})})]}),l.jsx("div",{className:"inline-flex items-center text-base font-semibold text-gray-900",children:"$67"})]})}),l.jsx("li",{className:"py-3 sm:py-4",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{className:"h-8 w-8 rounded-full",src:"https://demo.themesberg.com/windster/images/users/thomas-lean.png",alt:"Neil image"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:"Thomes Lean"}),l.jsx("p",{className:"text-sm text-gray-500 truncate",children:l.jsx("a",{href:"/cdn-cgi/l/email-protection",className:"__cf_email__","data-cfemail":"284d45494144685f41464c5b5c4d5a064b4745",children:"[email protected]"})})]}),l.jsx("div",{className:"inline-flex items-center text-base font-semibold text-gray-900",children:"$2367"})]})}),l.jsx("li",{className:"pt-3 sm:pt-4 pb-0",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{className:"h-8 w-8 rounded-full",src:"https://demo.themesberg.com/windster/images/users/lana-byrd.png",alt:"Neil image"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:"Lana Byrd"}),l.jsx("p",{className:"text-sm text-gray-500 truncate",children:l.jsx("a",{href:"/cdn-cgi/l/email-protection",className:"__cf_email__","data-cfemail":"a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf",children:"[email protected]"})})]}),l.jsx("div",{className:"inline-flex items-center text-base font-semibold text-gray-900",children:"$367"})]})})]})})]}),l.jsxs("div",{className:"bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ",children:[l.jsx("h3",{className:"text-xl leading-none font-bold text-gray-900 mb-10",children:"Acquisition Overview"}),l.jsx("div",{className:"block w-full overflow-x-auto",children:l.jsxs("table",{className:"items-center w-full bg-transparent border-collapse",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{className:"px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap",children:"Top Channels"}),l.jsx("th",{className:"px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap",children:"Users"}),l.jsx("th",{className:"px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"})]})}),l.jsxs("tbody",{className:"divide-y divide-gray-100",children:[l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left",children:"Organic Search"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4",children:"5,649"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"30%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-cyan-600 h-2 rounded-sm",style:{width:"30%"}})})})]})})]}),l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left",children:"Referral"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4",children:"4,025"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"24%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-orange-300 h-2 rounded-sm",style:{width:"24%"}})})})]})})]}),l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left",children:"Direct"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4",children:"3,105"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"18%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-teal-400 h-2 rounded-sm",style:{width:"18%"}})})})]})})]}),l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left",children:"Social"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4",children:"1251"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"12%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-pink-600 h-2 rounded-sm",style:{width:"12%"}})})})]})})]}),l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left",children:"Other"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4",children:"734"}),l.jsx("td",{className:"border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"9%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-indigo-600 h-2 rounded-sm",style:{width:"9%"}})})})]})})]}),l.jsxs("tr",{className:"text-gray-500",children:[l.jsx("th",{className:"border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left",children:"Email"}),l.jsx("td",{className:"border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0",children:"456"}),l.jsx("td",{className:"border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0",children:l.jsxs("div",{className:"flex items-center",children:[l.jsx("span",{className:"mr-2 text-xs font-medium",children:"7%"}),l.jsx("div",{className:"relative w-full",children:l.jsx("div",{className:"w-full bg-gray-200 rounded-sm h-2",children:l.jsx("div",{className:"bg-purple-500 h-2 rounded-sm",style:{width:"7%"}})})})]})})]})]})]})})]})]})]})}),l.jsxs("footer",{className:"bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4",children:[l.jsxs("ul",{className:"flex items-center flex-wrap mb-6 md:mb-0",children:[l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",children:"Terms and conditions"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",children:"Privacy Policy"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",children:"Licensing"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6",children:"Cookie Policy"})}),l.jsx("li",{children:l.jsx("a",{href:"#",className:"text-sm font-normal text-gray-500 hover:underline",children:"Contact"})})]}),l.jsxs("div",{className:"flex sm:justify-center space-x-6",children:[l.jsx("a",{href:"#",className:"text-gray-500 hover:text-gray-900",children:l.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})}),l.jsx("a",{href:"#",className:"text-gray-500 hover:text-gray-900",children:l.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})})}),l.jsx("a",{href:"#",className:"text-gray-500 hover:text-gray-900",children:l.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})}),l.jsx("a",{href:"#",className:"text-gray-500 hover:text-gray-900",children:l.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})}),l.jsx("a",{href:"#",className:"text-gray-500 hover:text-gray-900",children:l.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",clipRule:"evenodd"})})})]})]}),l.jsxs("p",{className:"text-center text-sm text-gray-500 my-10",children:["© 2019-2021 ",l.jsx("a",{href:"#",className:"hover:underline",target:"_blank",children:"Themesberg"}),". All rights reserved."]})]})]})]})}function ag(){let e={floorName:"1st Floor",builtUpArea:400,fromData:"2022-01-05"},t={floorName:"2nd Floor",builtUpArea:500,fromData:"2022-01-05"};const n=new Map;return n.set("obj1",e),n.set("obj2",t),console.log("Map printed...",n),l.jsx("div",{children:"Ds"})}function og(e){return De({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"}}]})(e)}function cg(e){return De({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M232 840h560V536H232v304zm280-226a48.01 48.01 0 0 1 28 87v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 0 1 28-87z"}},{tag:"path",attr:{d:"M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"}},{tag:"path",attr:{d:"M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304z"}}]})(e)}function ug(e){return De({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5Zm-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z"}}]})(e)}function dg(e){return De({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z"}},{tag:"path",attr:{d:"M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z"}}]})(e)}function mg(e){return De({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Calendar_Date"},child:[{tag:"path",attr:{d:`M18.435,4.955h-1.94v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-7v-1.41
            c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-1.93c-1.38,0-2.5,1.12-2.5,2.5v11c0,1.38,1.12,2.5,2.5,2.5h12.87
            c1.38,0,2.5-1.12,2.5-2.5v-11C20.935,6.075,19.815,4.955,18.435,4.955z M19.935,18.455c0,0.83-0.67,1.5-1.5,1.5H5.565
            c-0.83,0-1.5-0.67-1.5-1.5v-8.42h15.87V18.455z M19.935,9.035H4.065v-1.58c0-0.83,0.67-1.5,1.5-1.5h1.93v0.59
            c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59h7v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59
            h1.94c0.83,0,1.5,0.67,1.5,1.5V9.035z`}},{tag:"path",attr:{d:`M11.492,17.173v-3.46c0-0.059-0.064-0.095-0.114-0.064l-0.638,0.392
            c-0.1,0.061-0.228-0.01-0.228-0.128v-0.651c0-0.105,0.055-0.203,0.146-0.257l0.764-0.457c0.047-0.028,0.1-0.043,0.154-0.043h0.626
            c0.166,0,0.3,0.134,0.3,0.3v4.367c0,0.166-0.134,0.3-0.3,0.3h-0.409C11.626,17.473,11.492,17.339,11.492,17.173z`}}]}]})(e)}function fg(e){var t;return console.log("data at table view..",e==null?void 0:e.data),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center",children:[l.jsx("div",{className:"font-bold text-lg mb-4 pr-10 flex-1",children:"# Form Fields "}),l.jsx("div",{className:"form-group col-span-12 md:col-span-3 mb-4 md:px-2 flex-1 text-right pr-20",children:l.jsx("button",{onClick:e==null?void 0:e.openFirstModal,type:"button",className:"rounded-md border-2 border-black px-20 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white",children:"Add Field"})})]}),l.jsxs("div",{className:"h-[80vh] overflow-y-scroll",children:[l.jsxs("table",{class:"min-w-full leading-normal",children:[l.jsx("thead",{className:"font-bold text-left text-sm bg-gray-50",children:l.jsxs("tr",{className:"text-md",children:[l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"#"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Name"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Type"}),l.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left capitalize",children:"Action"})]})}),l.jsx("tbody",{children:Array.from(e==null?void 0:e.data).map(([n,r],s)=>l.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s+1}),l.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l.jsx("div",{className:"w-12 h-12 inline-flex rounded-full shadow-xl border p-2 justify-center items-center",children:"A"}),l.jsx("span",{className:"pl-2 inline font-semibold text-md text-gray-700",children:r.name})]}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r.type}),l.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l.jsx(F9,{onClick:()=>e==null?void 0:e.removeField(r.key),className:"inline ml-2 text-red-400 font-semibold text-lg cursor-pointer hover:text-red-700 relative hover:scale-150"})})]}))})]}),l.jsxs("div",{className:"flex justify-between mt-4",children:[(e==null?void 0:e.codeView)!==null&&l.jsx("button",{onClick:()=>e==null?void 0:e.openThirdModal(),type:"button",className:"rounded-md bg-black px-20 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"View Code"}),((t=Array.from(e==null?void 0:e.data))==null?void 0:t.length)!==0&&l.jsx("button",{onClick:()=>e==null?void 0:e.generateForm(),type:"button",className:"rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Save"})]})]})]})}function pg(e,t,n){return{TEXT:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${t}')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${t} && formik.errors.${t} ? formik.errors.${t} : null}</span>
</div>`,EMAIL:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${t}')} type="email" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${t} && formik.errors.${t} ? formik.errors.${t} : null}</span>
</div>`,DESCRIPTION:`<div className="form-group col-span-12 grid grid-cols-12">
        <div className='col-span-12 md:col-span-6 mb-6 md:px-4'>
            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
            <textarea {...formik.getFieldProps('${t}')} class="h-40 resize form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"></textarea>
            <span className="text-red-600 absolute text-xs">{formik.touched.${t} && formik.errors.${t} ? formik.errors.${t} : null}</span>
        </div>
    </div>`,PASSWORD:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${t}')} type="password" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${t} && formik.errors.${t} ? formik.errors.${t} : null}</span>
</div>`,NUMBER:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${t}')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${t} && formik.errors.${t} ? formik.errors.${t} : null}</span>
</div>`,LIST:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <label className={'form-label inline-block mb-1 text-gray-600 text-sm font-semibold'}>${n}</label>
        <select name="zone" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer'}
        >
            <option value="1" >Option 1</option>
            <option value="2" >Option 2</option>

        </select>
</div>`,DATE:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${t}')} type="date" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${t} && formik.errors.${t} ? formik.errors.${t} : null}</span>
</div>`,MEDIA:` <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">${n}</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
        <span className="text-red-600 absolute text-xs">{formik.touched.${t} && formik.errors.${t} ? formik.errors.${t} : null}</span>
    </div>`,BOOLEAN:` <div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
        <div class="text-sm font-medium text-gray-900 dark:text-gray-300">${n}</div>
        <label class="relative inline-flex items-center cursor-pointer mt-2">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    </div>`,JSON:`<div className="form-group col-span-12 md:col-span-2 mb-6 md:px-4">
    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">${n}<small className="mt-1 text-sm font-semibold text-red-600 inline ">*</small></label>
    <input {...formik.getFieldProps('${t}')} type="text" className={'form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md'}
         />
    <span className="text-red-600 absolute text-xs">{formik.touched.${t} && formik.errors.${t} ? formik.errors.${t} : null}</span>
</div>`}[e]}function hg(e,t){console.log("inside form engine.....",e);let n="";e.forEach((c,u)=>{n=`${n}
         ${c.key}: yup.string(),`});let r="";e.forEach((c,u)=>{r=`${r}
        ${c.key}: '',`});let s="";e.forEach((c,u)=>{let h=pg(c.id,c.key,c.name);s=`${s}
       ${h}
       `});let i="";e.forEach((c,u)=>{i=`${i}
        ${c.key}: values?.${c.key},`});let a="";return e.forEach((c,u)=>{a=`${a}
        formik.setFieldValue('${c.key}', data?.${c.key})`}),`
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'


function ${t}(props) {
    
    const { id } = useParams()
    const navigate = useNavigate()
    const [isLoading, setisLoading] = useState(false)

    let validationSchema = yup.object({
        ${n}
    })

    const initialValues = {
      ${r}
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

    /*// FUNCTION TO POST OR EDIT DATA
    const saveMasterForm = (values) => {
        setisLoading(true)
        let url
        let requestBody
        let requestBodyBase = {
            ${i}
        }
        if (id !== undefined) {
            url = 'apiEdit'
            requestBody = requestBodyBase
            requestBody.id = id
        } else {
            url = 'apiPost'
            requestBody = requestBodyBase
        }
    
        AxiosInterceptors.post(url, requestBody, ApiHeader())
            .then(function (response) {
                console.log('view fee master..', response?.data?.data)
                if (response?.data?.status) {
                } else {
                }
                setisLoading(false)
            })
            .catch(function (error) {
                console.log('==2 error list...', error)
                setisLoading(false)
            })
    }
    
    // FUNCTION TO FECTH DATA TO EDIT
    const fetchEditData = () => {
        setisLoading(true)
        seterroState(false)
        let requestBody = {
            id: id
        }
        AxiosInterceptors.post('apiFetch', requestBody, ApiHeader())
            .then(function (response) {
                console.log('fetch edit data response..', response?.data?.data)
                if (response?.data?.status) {
                    feedEditData(response?.data?.data)
                } else {
                    activateBottomErrorCard(true, 'Error occured in submitting deactivation application. Please try again later.')
                }
                setisLoading(false)
    
            })
            .catch(function (error) {
                console.log('= edit data error...', error)
                seterroState(true)
                setisLoading(false)
            })
    }
    
    // FUNCTION TO FEED EDIT DATA
    const feedEditData = (data) => {
        console.log('existing property details in prop address...', data)
       ${a}
    }
    
    // CALLING API TO FETCH DATA IN EDIT CASE
    useEffect(() => {
        if (id !== undefined) {
            fetchEditData()
        }
    }, [])
    */


    return (
        <>
            <div  className="block md:p-4 w-full md:py-6 rounded-lg mx-auto  shadow-xl bg-white px-4 sm:px-0">
                <form onChange={handleOnChange} onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-12  sm:space-x-2">
                ${s}

                <div className=' text-right col-span-12 mt-10'>
                    <button type="submit" className="cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next</button>
                </div>

        </div>
                </form>

            </div>
        </>
    )
}

export default ${t}`}function xg(e){return l.jsx("div",{className:"col-span-5 pr-2 pl-2 mt-2",children:l.jsxs("div",{onClick:()=>e==null?void 0:e.openSecondModal(e==null?void 0:e.id,e==null?void 0:e.type),className:"flex border border-gray-300 px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-50",children:[l.jsx("div",{className:"flex-initial flex justify-center items-center",children:e==null?void 0:e.icon}),l.jsxs("div",{className:"inline-block p-2 rounded-lg",children:[l.jsx("div",{className:"font-semibold text-gray-700 text-sm",children:e==null?void 0:e.title}),l.jsx("div",{className:"text-xs text-gray-500",children:e==null?void 0:e.desc})]})]})})}function gg(){const[e,t]=j.useState(new Map),[n,r]=j.useState(null),[s,i]=j.useState(null),[a,o]=j.useState(null),[c,u]=j.useState(""),[h,x]=j.useState("Form1"),[f,b]=j.useState(null),w=()=>{if(a===""||a===null||c===""||c===null){fourthModal.showModal();return}const T=new Map(e);T.set(c,{id:n,type:s,name:a,key:c}),t(T),secondModal.close()},N=()=>{d.showModal()},_=(T,S)=>{u(""),r(T),i(S),d.close(),secondModal.showModal()},p=()=>{thirdModal.showModal()},m=()=>{let T=hg(e,h);b(T),console.log("generated form....",T)},g=()=>{navigator.clipboard.writeText(f).then(()=>{console.log("Text copied to clipboard")}).catch(T=>{console.error("Failed to copy text: ",T)})},v=T=>{const S=new Map(e);S.delete(T),t(S)},k=[{type:"text",title:"Text",id:"TEXT",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-green-50 text-green-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-green-300 rounded-md",children:"Ab"})},{type:"email",title:"Email",id:"EMAIL",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-red-50 text-red-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-red-300 rounded-md",children:"@"})},{type:"description",title:"Description",id:"DESCRIPTION",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md",children:l.jsx(ug,{className:"inline text-blue-700 font-semibold"})})},{type:"password",title:"Password",id:"PASSWORD",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md",children:l.jsx(cg,{className:" text-blue-700"})})},{type:"number",title:"Number",id:"NUMBER",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-red-50 text-red-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-red-300 rounded-md ",children:"123"})},{type:"list",title:"List",id:"LIST",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-indigo-50 text-indigo-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-indigo-300 rounded-md",children:l.jsx(og,{className:" text-blue-700 font-semibold"})})},{type:"date",title:"Date",id:"DATE",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-yellow-50 text-indigo-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-yellow-300 rounded-md",children:l.jsx(mg,{className:" text-blue-700 font-semibold"})})},{type:"media",title:"Media",id:"MEDIA",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-indigo-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md",children:l.jsx(W3,{className:"inline font-semibold"})})},{type:"boolean",title:"Boolean",id:"BOOLEAN",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-green-50 text-green-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-green-300 rounded-md",children:l.jsx(dg,{className:"inline font-semibold"})})},{type:"json",title:"Json",id:"JSON",desc:"Small or long text like title or description",icon:l.jsx("div",{className:"bg-blue-50 text-blue-700 text-xs font-semibold w-7 h-6 flex justify-center items-center border border-blue-300 rounded-md",children:"{...}"})}],A=(T,S,W=null)=>T.length>W?S:T===""||/^[\a-zA-Z0-9!]*$/.test(T)?T:S,F=T=>{let S=T.target.value,W=A(S,h,100);x(W)},O=T=>{let S=T.target.value,W=A(S,c,100);u(W)};return l.jsxs(l.Fragment,{children:[l.jsx(fg,{data:e,generateForm:m,openThirdModal:p,codeView:f,openFirstModal:N,removeField:v}),l.jsxs("div",{className:" h-auto w-auto fixed bottom-10 right-10",children:[l.jsxs("dialog",{className:"relative h-4/5 w-1/2 p-0",id:"d",children:[l.jsxs("div",{className:"sticky top-0 w-full flex bg-gray-100 p-4",children:[l.jsxs("div",{className:"flex-1 flex",children:[" ",l.jsx("div",{className:"w-8 h-8 rounded-sm bg-indigo-600 text-white flex justify-center items-center",children:"FM"})," ",l.jsx("span",{className:"font-semibold ml-2",children:"Form Generator"})]}),l.jsxs("div",{className:"flex-1 flex justify-end",children:[l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Form Name",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("input",{value:h,onChange:F,type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),l.jsx("button",{onClick:()=>d.close(),className:"text-xl p-2 w-8 h-8 rounded-lg bg-white-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center",children:"x"})]})]}),l.jsx("div",{className:"mt-10"}),l.jsx("div",{className:"grid grid-cols-12",children:k==null?void 0:k.map((T,S)=>l.jsxs(l.Fragment,{children:[l.jsx(xg,{desc:T==null?void 0:T.desc,title:T==null?void 0:T.title,type:T==null?void 0:T.type,id:T==null?void 0:T.id,icon:T==null?void 0:T.icon,index:S,openSecondModal:_,collectInput:w}),l.jsx("div",{className:"mt-10"})]}))})]}),l.jsxs("dialog",{className:"relative h-4/5 w-1/2 p-0",id:"secondModal",children:[l.jsxs("div",{className:"sticky top-0 w-full flex bg-gray-100 p-4",children:[l.jsxs("div",{className:"flex-1 flex",children:[" ",l.jsx("div",{className:"w-8 h-8 rounded-sm bg-indigo-600 text-white flex justify-center items-center",children:"FM"})," ",l.jsx("span",{className:"font-semibold ml-2",children:s})]}),l.jsx("div",{className:"flex-1 flex justify-end",children:l.jsx("button",{onClick:()=>secondModal.close(),className:"text-xl p-2 w-8 h-8 rounded-lg bg-white-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center",children:"x"})})]}),l.jsx("div",{className:"mt-10"}),l.jsxs("div",{className:"grid grid-cols-12",children:[l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Name",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("input",{value:a,onChange:T=>o(T.target.value),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Key",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("input",{value:c,onChange:O,type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]})]}),l.jsx("div",{className:"p-4",children:l.jsx("button",{onClick:()=>w(),type:"button",className:"rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Finish"})})]}),l.jsxs("dialog",{className:"relative h-4/5 w-1/2 p-0",id:"thirdModal",children:[l.jsxs("div",{className:"sticky top-0 w-full flex bg-gray-100 p-4",children:[l.jsxs("div",{className:"flex-1 flex",children:[" ",l.jsx("div",{className:"w-8 h-8 rounded-sm bg-indigo-600 text-white flex justify-center items-center",children:"FM"})," ",l.jsx("span",{className:"font-semibold ml-2",children:"Form Code"})]}),l.jsxs("div",{className:"flex-1 flex justify-end",children:[l.jsx("button",{onClick:g,type:"button absolute top-10",className:"rounded-full w-10 flex justify-center items-center h-10  border-2 border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white hover:scale-105 mr-10",children:"</>"}),"  ",l.jsx("button",{onClick:()=>thirdModal.close(),className:"text-xl p-2 w-8 h-8 rounded-lg bg-red-50 border border-red-200 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center",children:"x"})]})]}),l.jsx("div",{className:"bg-gray-100 p-10",children:l.jsxs("pre",{children:[" ",f]})})]}),l.jsxs("dialog",{className:"relative py-3 w-1/4 p-0 bg-red-100 border border-red-600",id:"fourthModal",children:[l.jsx("div",{className:"font-semibold text-lg w-full text-center",children:"Fields cannot be empty"}),l.jsx("button",{onClick:()=>fourthModal.close(),className:" absolute top-0 right-0 text-xl p-2 w-8 h-8 rounded-lg bg-white-50 hover:bg-red-100 hover:text-red-500 font-semibold flex justify-center items-center",children:"x"})]})]})]})}function vg(){return l.jsxs(l.Fragment,{children:[l.jsx("div",{children:"AbsolutePath"}),l.jsx(me,{code:`
      // filename - jsconfig.json
      {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    }
  }
`})]})}function yg(e){kp(),ac(),j.useState(!1);let t=Sc({fadf:ir(),fasdf:ir(),fsadf:ir(),bol:ir()});const r=R1({initialValues:{fadf:"",fasdf:"",fsadf:"",bol:""},enableReinitialize:!0,onSubmit:i=>{console.log("form values",i)},validationSchema:t}),s=i=>{i.target.name,i.target.value};return l.jsx(l.Fragment,{children:l.jsx("div",{className:"block md:p-4 w-full md:py-6 rounded-lg mx-auto  shadow-xl bg-white px-4 sm:px-0",children:l.jsx("form",{onChange:s,onSubmit:r.handleSubmit,children:l.jsxs("div",{className:"grid grid-cols-12  sm:space-x-2",children:[l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["fasdf",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("input",{...r.getFieldProps("fadf"),type:"text",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.fadf&&r.errors.fadf?r.errors.fadf:null})]}),l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"fasdf"}),l.jsxs("select",{name:"zone",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[l.jsx("option",{value:"1",children:"Option 1"}),l.jsx("option",{value:"2",children:"Option 2"})]})]}),l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["fasdff",l.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),l.jsx("input",{...r.getFieldProps("fsadf"),type:"date",className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.fsadf&&r.errors.fsadf?r.errors.fsadf:null})]}),l.jsxs("div",{className:"form-group col-span-12 md:col-span-2 mb-6 md:px-4",children:[l.jsx("div",{class:"text-sm font-medium text-gray-900 dark:text-gray-300",children:"bool"}),l.jsxs("label",{class:"relative inline-flex items-center cursor-pointer mt-2",children:[l.jsx("input",{type:"checkbox",value:"",class:"sr-only peer"}),l.jsx("div",{class:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"})]})]}),l.jsx("div",{className:" text-right col-span-12 mt-10",children:l.jsx("button",{type:"submit",className:"cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:"Save & Next"})})]})})})})}function bg(){return l.jsxs(l.Fragment,{children:[l.jsx("div",{children:"ApiPattern"}),l.jsx(me,{code:`import ApiHeader from "./Api/ApiHeader"
import { RotatingLines } from "react-loader-spinner";


//1 approve FUNCTION TO DELETE ITEM FROM LIST
const approve = (approveId) => {
    setisLoading(true)
    let requestBody = {
        id: approveId
    }

    AxiosInterceptors.post('', requestBody, ApiHeader())
        .then(function (response) {
            console.log('delete response..', response?.data)
            if (response?.data?.status) {
                fetchMasterList()
            } else {
                activateBottomErrorCard(true, 'Error occured in deletion.')
            }
        })
        .catch(function (error) {
            activateBottomErrorCard(true, 'Error occured in deletion.')
        }).finally(() => {
            setisLoading(false)
        })
}
//2 delete FUNCTION TO DELETE ITEM FROM LIST
const deleteItem = (deleteId) => {
    setisLoading(true)

    let requestBody = {
        id: deleteId
    }

    AxiosInterceptors.post('', requestBody, ApiHeader())
        .then(function (response) {
            console.log('delete response..', response?.data?.data)
            if (response?.data?.status) {
                fetchMasterList()
            } else {
                activateBottomErrorCard(true, 'Error occured in deletion.')
            }
        })
        .catch(function (error) {
            activateBottomErrorCard(true, 'Error occured in deletion.')
        }).finally(() => {
            setisLoading(false)
        })
}


//3 Fetch list FUNCTION TO FETCH LIST DATA
const fetchMasterList = () => {
    setisLoading(true)
    AxiosInterceptors.post('', {}, ApiHeader())
        .then(function (response) {
            console.log('student list...', response)
            if (response?.data?.status === true) {
                setdataList(response?.data?.data)
            } else {
                activateBottomErrorCard(true, 'Error occured while fetching data.')
            }
        })
        .catch(function (error) {
            console.log('==2 error list...', error)
            activateBottomErrorCard(true, 'Error occured while fetching data.')
        }).finally(() => {
            setisLoading(false)
        })
}

//4 by id FUNCTION TO FECTH DATA TO EDIT
const fetchDataById = (passedId) => {
    setisLoading(true)
    let requestBody = {
        id: passedId
    }
    AxiosInterceptors.post('', requestBody, ApiHeader())
        .then(function (response) {
            console.log('fetch view data response..', response?.data?.data)
            if (response?.data?.status) {
                setdataToView(response?.data?.data)
            } else {
                activateBottomErrorCard(true, 'Error occured in submitting deactivation application. Please try again later.')
            }
        })
        .catch(function (error) {
            activateBottomErrorCard(true, 'Error occured in submitting deactivation application. Please try again later.')
        }).finally(() => {
            setisLoading(false)
        })
}

//5 post form
const postForm = (data) => {
    setisLoading(true)
    let requestBody = {
        email: data?.email,
        password: data?.password
    }

    console.log('before login...', requestBody)
    axios.post('', requestBody, ApiHeader())
        .then((response) => {
            console.log("--2-- After Login data", response)
            if (response?.data?.status) {
                console.log('success')
            } else {
                activateBottomErrorCard(true, 'Error occured in submitting deactivation application. Please try again later.')
            }
        })
        .catch((err) => {
            activateBottomErrorCard(true, 'Error occured in submitting deactivation application. Please try again later.')
        }).finally(() => {
            setisLoading(false)
        })

}

const [isLoading, setisLoading] = useState(false);
const [erroState, seterroState] = useState(false);
const [erroMessage, seterroMessage] = useState(null);

useEffect(() => {
    fetchMasterList()
}, [])


// FUNCTION FOR CUSTOM ERROR MESSAGE CARD
const activateBottomErrorCard = (state, msg) => {
    seterroMessage(msg)
    seterroState(state)
}

{ erroState && <BottomErrorCard activateBottomErrorCard={activateBottomErrorCard} errorTitle={erroMessage} /> }
{ isLoading && <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="25" visible={true} /> }
`})]})}function wg(){const[e,t]=j.useState(!1);ac();const n=[{icon:l.jsx(Or,{size:14}),menuName:"Components",path:null,subMenuStatus:!0,subMenu:[{menuName:"Button",path:"/button",subMenu:[]},{menuName:"Avatar",path:"/avatar",subMenu:[]},{menuName:"Card",path:"/card",subMenu:[]},{menuName:"Signup",path:"/signup",subMenu:[]},{menuName:"Signin",path:"/signin",subMenu:[]},{menuName:"Input",path:"/input",subMenu:[]},{menuName:"Chat",path:"/chat",subMenu:[]}]},{icon:l.jsx(Or,{size:14}),menuName:"Pages",path:null,subMenuStatus:!0,subMenu:[{menuName:"Blog Page",path:"/blog-page",subMenu:[]},{menuName:"AboutUs Page",path:"/aboutus-page",subMenu:[]},{menuName:"404 Page",path:"/error404-page",subMenu:[]},{menuName:"Landing Page",path:"/landing-page",subMenu:[]},{menuName:"Pricing Page",path:"/pricing-page",subMenu:[]},{menuName:"Contact Page",path:"/contact-page",subMenu:[]},{menuName:"Table Page",path:"/table-page",subMenu:[]}]},{icon:l.jsx(Or,{size:14}),menuName:"Layouts",path:null,subMenuStatus:!0,subMenu:[{menuName:"Bare Layout",path:"/bare-layout",subMenu:[]}]},{icon:l.jsx(Or,{size:14}),menuName:"Functions",path:null,subMenuStatus:!0,subMenu:[{menuName:"Axio Interceptors",path:"/axiosinterceptors",subMenu:[]},{menuName:"PowerUps",path:"/powerups",subMenu:[]},{menuName:"ScrollHandle",path:"/scroll-handle",subMenu:[]},{menuName:"Vite-Config",path:"/vite-config",subMenu:[]},{menuName:"Api-Pattern",path:"/api-pattern",subMenu:[]}]},{icon:l.jsx(Or,{size:14}),menuName:"Tools",path:null,subMenuStatus:!0,subMenu:[{menuName:"Form Generator",path:"/form-generator",subMenu:[]}]}];return l.jsxs("div",{children:[l.jsxs("div",{className:"md:hidden",children:[!e&&l.jsx("button",{onClick:()=>t(!0),type:"button",className:"inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ",children:l.jsx("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})}),e&&l.jsx("button",{onClick:()=>t(!1),type:"button",className:"inline-flex items-center  mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:l.jsx("span",{className:"px-4 py-2 rounded-lg  font-semibold hover:bg-gray-100",children:"X"})})]}),l.jsx("div",{className:"p-4 sm:ml-64 h-screen overflow-x-hidden overflow-y-auto",children:l.jsxs(i1,{children:[l.jsx(Y,{path:"/test/:id",element:l.jsx(A9,{})}),l.jsx(Y,{path:"/",element:l.jsx(qu,{})}),l.jsx(Y,{path:"/button",element:l.jsx(Y3,{})}),l.jsx(Y,{path:"/avatar",element:l.jsx(Rp,{})}),l.jsx(Y,{path:"/card",element:l.jsx(qu,{})}),l.jsx(Y,{path:"/signup",element:l.jsx(Vp,{})}),l.jsx(Y,{path:"/signin",element:l.jsx(Bp,{})}),l.jsx(Y,{path:"/input",element:l.jsx(M9,{})}),l.jsx(Y,{path:"/chat",element:l.jsx(sg,{})}),l.jsx(Y,{path:"/blog-page",element:l.jsx(Hp,{})}),l.jsx(Y,{path:"/aboutus-page",element:l.jsx(W9,{})}),l.jsx(Y,{path:"/error404-page",element:l.jsx(q9,{})}),l.jsx(Y,{path:"/landing-page",element:l.jsx(G9,{})}),l.jsx(Y,{path:"/pricing-page",element:l.jsx(Q9,{})}),l.jsx(Y,{path:"/contact-page",element:l.jsx(J9,{})}),l.jsx(Y,{path:"/table-page",element:l.jsx(tg,{})}),l.jsx(Y,{path:"/bare-layout",element:l.jsx(_9,{})}),l.jsx(Y,{path:"/axiosinterceptors",element:l.jsx(I9,{})}),l.jsx(Y,{path:"/powerups",element:l.jsx(D9,{})}),l.jsx(Y,{path:"/scroll-handle",element:l.jsx(ng,{})}),l.jsx(Y,{path:"/vite-config",element:l.jsx(vg,{})}),l.jsx(Y,{path:"/api-pattern",element:l.jsx(bg,{})}),l.jsx(Y,{path:"/technologies",element:l.jsx(R9,{})}),l.jsx(Y,{path:"/resources",element:l.jsx(V9,{})}),l.jsx(Y,{path:"/libraries",element:l.jsx(B9,{})}),l.jsx(Y,{path:"/essentials",element:l.jsx(U9,{})}),l.jsx(Y,{path:"/admin-layout",element:l.jsx(ig,{})}),l.jsx(Y,{path:"/ds",element:l.jsx(ag,{})}),l.jsx(Y,{path:"/df",element:l.jsx(yg,{})}),l.jsx(Y,{path:"/form-generator",element:l.jsx(gg,{})})]})}),l.jsxs("aside",{className:`absolute left-0 top-10 transition-all z-2 flex w-screen md:w-64 md:h-screen md:px-5 md:py-8 ${e?"h-[80vh]":"h-0"} flex-col  border-r bg-gray-200 ${e&&"px-5 py-8"} overflow-hidden`,children:[l.jsx("a",{href:"#",children:l.jsx("svg",{width:"40",height:"46",viewBox:"0 0 50 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",fill:"black"})})}),l.jsx("div",{className:"mt-6 flex flex-1 flex-col justify-between",children:l.jsx("nav",{className:"-mx-3 space-y-6 ",children:l.jsx("div",{className:"space-y-3 ",children:n==null?void 0:n.map((r,s)=>{var i;return l.jsx(z9,{setshowSidebar:t,title:r.menuName,path:r==null?void 0:r.path,subMenu:r==null?void 0:r.subMenu,subMenuStatus:((i=r==null?void 0:r.subMenu)==null?void 0:i.length)!=0,icon:l.jsx(O9,{size:14})},`sidebar_menu${s}`)})})})})]})]})}function Ng(){const[e,t]=j.useState(!0),n={showCodeButton:e,setshowCodeButton:t};return l.jsx(l.Fragment,{children:l.jsx(Yd.Provider,{value:n,children:l.jsx("div",{onDoubleClick:()=>t(!e),children:l.jsx(Dp,{children:l.jsx(wg,{})})})})})}ra.createRoot(document.getElementById("root")).render(l.jsx(Be.StrictMode,{children:l.jsx(Ng,{})}))});export default jg();
