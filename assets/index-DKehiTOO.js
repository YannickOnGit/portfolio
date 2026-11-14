function qy(r,e){for(var i=0;i<e.length;i++){const s=e[i];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in r)){const c=Object.getOwnPropertyDescriptor(s,l);c&&Object.defineProperty(r,l,c.get?c:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Yx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ld={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function Yy(){if(C0)return Oo;C0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var N0;function Zy(){return N0||(N0=1,ld.exports=Yy()),ld.exports}var d=Zy(),cd={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function Ky(){if(D0)return ft;D0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function _(O,K,de){this.props=O,this.context=K,this.refs=C,this.updater=de||M}_.prototype.isReactComponent={},_.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=_.prototype;function N(O,K,de){this.props=O,this.context=K,this.refs=C,this.updater=de||M}var P=N.prototype=new y;P.constructor=N,E(P,_.prototype),P.isPureReactComponent=!0;var D=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function k(O,K,de,ye,Oe,Ze){return de=Ze.ref,{$$typeof:r,type:O,key:K,ref:de!==void 0?de:null,props:Ze}}function A(O,K){return k(O.type,K,void 0,void 0,void 0,O.props)}function L(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function xe(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(de){return K[de]})}var G=/\/+/g;function ee(O,K){return typeof O=="object"&&O!==null&&O.key!=null?xe(""+O.key):K.toString(36)}function re(){}function pe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(re,re):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Q(O,K,de,ye,Oe){var Ze=typeof O;(Ze==="undefined"||Ze==="boolean")&&(O=null);var te=!1;if(O===null)te=!0;else switch(Ze){case"bigint":case"string":case"number":te=!0;break;case"object":switch(O.$$typeof){case r:case e:te=!0;break;case x:return te=O._init,Q(te(O._payload),K,de,ye,Oe)}}if(te)return Oe=Oe(O),te=ye===""?"."+ee(O,0):ye,D(Oe)?(de="",te!=null&&(de=te.replace(G,"$&/")+"/"),Q(Oe,K,de,"",function(Je){return Je})):Oe!=null&&(L(Oe)&&(Oe=A(Oe,de+(Oe.key==null||O&&O.key===Oe.key?"":(""+Oe.key).replace(G,"$&/")+"/")+te)),K.push(Oe)),1;te=0;var we=ye===""?".":ye+":";if(D(O))for(var Ee=0;Ee<O.length;Ee++)ye=O[Ee],Ze=we+ee(ye,Ee),te+=Q(ye,K,de,Ze,Oe);else if(Ee=v(O),typeof Ee=="function")for(O=Ee.call(O),Ee=0;!(ye=O.next()).done;)ye=ye.value,Ze=we+ee(ye,Ee++),te+=Q(ye,K,de,Ze,Oe);else if(Ze==="object"){if(typeof O.then=="function")return Q(pe(O),K,de,ye,Oe);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return te}function I(O,K,de){if(O==null)return O;var ye=[],Oe=0;return Q(O,ye,"","",function(Ze){return K.call(de,Ze,Oe++)}),ye}function z(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(de){(O._status===0||O._status===-1)&&(O._status=1,O._result=de)},function(de){(O._status===0||O._status===-1)&&(O._status=2,O._result=de)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var fe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function he(){}return ft.Children={map:I,forEach:function(O,K,de){I(O,function(){K.apply(this,arguments)},de)},count:function(O){var K=0;return I(O,function(){K++}),K},toArray:function(O){return I(O,function(K){return K})||[]},only:function(O){if(!L(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ft.Component=_,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=N,ft.StrictMode=s,ft.Suspense=g,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ft.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},ft.cache=function(O){return function(){return O.apply(null,arguments)}},ft.cloneElement=function(O,K,de){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ye=E({},O.props),Oe=O.key,Ze=void 0;if(K!=null)for(te in K.ref!==void 0&&(Ze=void 0),K.key!==void 0&&(Oe=""+K.key),K)!V.call(K,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&K.ref===void 0||(ye[te]=K[te]);var te=arguments.length-2;if(te===1)ye.children=de;else if(1<te){for(var we=Array(te),Ee=0;Ee<te;Ee++)we[Ee]=arguments[Ee+2];ye.children=we}return k(O.type,Oe,void 0,void 0,Ze,ye)},ft.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ft.createElement=function(O,K,de){var ye,Oe={},Ze=null;if(K!=null)for(ye in K.key!==void 0&&(Ze=""+K.key),K)V.call(K,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Oe[ye]=K[ye]);var te=arguments.length-2;if(te===1)Oe.children=de;else if(1<te){for(var we=Array(te),Ee=0;Ee<te;Ee++)we[Ee]=arguments[Ee+2];Oe.children=we}if(O&&O.defaultProps)for(ye in te=O.defaultProps,te)Oe[ye]===void 0&&(Oe[ye]=te[ye]);return k(O,Ze,void 0,void 0,null,Oe)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(O){return{$$typeof:m,render:O}},ft.isValidElement=L,ft.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:z}},ft.memo=function(O,K){return{$$typeof:p,type:O,compare:K===void 0?null:K}},ft.startTransition=function(O){var K=B.T,de={};B.T=de;try{var ye=O(),Oe=B.S;Oe!==null&&Oe(de,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(he,fe)}catch(Ze){fe(Ze)}finally{B.T=K}},ft.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ft.use=function(O){return B.H.use(O)},ft.useActionState=function(O,K,de){return B.H.useActionState(O,K,de)},ft.useCallback=function(O,K){return B.H.useCallback(O,K)},ft.useContext=function(O){return B.H.useContext(O)},ft.useDebugValue=function(){},ft.useDeferredValue=function(O,K){return B.H.useDeferredValue(O,K)},ft.useEffect=function(O,K,de){var ye=B.H;if(typeof de=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(O,K)},ft.useId=function(){return B.H.useId()},ft.useImperativeHandle=function(O,K,de){return B.H.useImperativeHandle(O,K,de)},ft.useInsertionEffect=function(O,K){return B.H.useInsertionEffect(O,K)},ft.useLayoutEffect=function(O,K){return B.H.useLayoutEffect(O,K)},ft.useMemo=function(O,K){return B.H.useMemo(O,K)},ft.useOptimistic=function(O,K){return B.H.useOptimistic(O,K)},ft.useReducer=function(O,K,de){return B.H.useReducer(O,K,de)},ft.useRef=function(O){return B.H.useRef(O)},ft.useState=function(O){return B.H.useState(O)},ft.useSyncExternalStore=function(O,K,de){return B.H.useSyncExternalStore(O,K,de)},ft.useTransition=function(){return B.H.useTransition()},ft.version="19.1.0",ft}var U0;function Xh(){return U0||(U0=1,cd.exports=Ky()),cd.exports}var De=Xh();const Zx=Yx(De),Qy=qy({__proto__:null,default:Zx},[De]);var ud={exports:{}},Po={},fd={exports:{}},dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function Jy(){return L0||(L0=1,function(r){function e(I,z){var fe=I.length;I.push(z);e:for(;0<fe;){var he=fe-1>>>1,O=I[he];if(0<l(O,z))I[he]=z,I[fe]=O,fe=he;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var z=I[0],fe=I.pop();if(fe!==z){I[0]=fe;e:for(var he=0,O=I.length,K=O>>>1;he<K;){var de=2*(he+1)-1,ye=I[de],Oe=de+1,Ze=I[Oe];if(0>l(ye,fe))Oe<O&&0>l(Ze,ye)?(I[he]=Ze,I[Oe]=fe,he=Oe):(I[he]=ye,I[de]=fe,he=de);else if(Oe<O&&0>l(Ze,fe))I[he]=Ze,I[Oe]=fe,he=Oe;else break e}}return z}function l(I,z){var fe=I.sortIndex-z.sortIndex;return fe!==0?fe:I.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],p=[],x=1,S=null,v=3,M=!1,E=!1,C=!1,_=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var z=i(p);z!==null;){if(z.callback===null)s(p);else if(z.startTime<=I)s(p),z.sortIndex=z.expirationTime,e(g,z);else break;z=i(p)}}function B(I){if(C=!1,D(I),!E)if(i(g)!==null)E=!0,V||(V=!0,ee());else{var z=i(p);z!==null&&Q(B,z.startTime-I)}}var V=!1,k=-1,A=5,L=-1;function xe(){return _?!0:!(r.unstable_now()-L<A)}function G(){if(_=!1,V){var I=r.unstable_now();L=I;var z=!0;try{e:{E=!1,C&&(C=!1,N(k),k=-1),M=!0;var fe=v;try{t:{for(D(I),S=i(g);S!==null&&!(S.expirationTime>I&&xe());){var he=S.callback;if(typeof he=="function"){S.callback=null,v=S.priorityLevel;var O=he(S.expirationTime<=I);if(I=r.unstable_now(),typeof O=="function"){S.callback=O,D(I),z=!0;break t}S===i(g)&&s(g),D(I)}else s(g);S=i(g)}if(S!==null)z=!0;else{var K=i(p);K!==null&&Q(B,K.startTime-I),z=!1}}break e}finally{S=null,v=fe,M=!1}z=void 0}}finally{z?ee():V=!1}}}var ee;if(typeof P=="function")ee=function(){P(G)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,pe=re.port2;re.port1.onmessage=G,ee=function(){pe.postMessage(null)}}else ee=function(){y(G,0)};function Q(I,z){k=y(function(){I(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(I){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var fe=v;v=z;try{return I()}finally{v=fe}},r.unstable_requestPaint=function(){_=!0},r.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var fe=v;v=I;try{return z()}finally{v=fe}},r.unstable_scheduleCallback=function(I,z,fe){var he=r.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?he+fe:he):fe=he,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=fe+O,I={id:x++,callback:z,priorityLevel:I,startTime:fe,expirationTime:O,sortIndex:-1},fe>he?(I.sortIndex=fe,e(p,I),i(g)===null&&I===i(p)&&(C?(N(k),k=-1):C=!0,Q(B,fe-he))):(I.sortIndex=O,e(g,I),E||M||(E=!0,V||(V=!0,ee()))),I},r.unstable_shouldYield=xe,r.unstable_wrapCallback=function(I){var z=v;return function(){var fe=v;v=z;try{return I.apply(this,arguments)}finally{v=fe}}}}(dd)),dd}var O0;function $y(){return O0||(O0=1,fd.exports=Jy()),fd.exports}var hd={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function eS(){if(P0)return Cn;P0=1;var r=Xh();function e(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,p,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:g,containerInfo:p,implementation:x}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(g,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(g,p,null,x)},Cn.flushSync=function(g){var p=f.T,x=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=p,s.p=x,s.d.f()}},Cn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},Cn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Cn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var x=p.as,S=m(x,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:v,fetchPriority:M}):x==="script"&&s.d.X(g,{crossOrigin:S,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=m(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},Cn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,S=m(x,p.crossOrigin);s.d.L(g,x,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(g,p){if(typeof g=="string")if(p){var x=m(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},Cn.requestFormReset=function(g){s.d.r(g)},Cn.unstable_batchedUpdates=function(g,p){return g(p)},Cn.useFormState=function(g,p,x){return f.H.useFormState(g,p,x)},Cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var I0;function Kx(){if(I0)return hd.exports;I0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hd.exports=eS(),hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function tS(){if(F0)return Po;F0=1;var r=$y(),e=Xh(),i=Kx();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var b=!1,w=u.child;w;){if(w===a){b=!0,a=u,o=h;break}if(w===o){b=!0,o=u,a=h;break}w=w.sibling}if(!b){for(w=h.child;w;){if(w===a){b=!0,a=h,o=u;break}if(w===o){b=!0,o=h,a=u;break}w=w.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),P=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),xe=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case _:return"Profiler";case C:return"StrictMode";case B:return"Suspense";case V:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case P:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var Q=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},he=[],O=-1;function K(t){return{current:t}}function de(t){0>O||(t.current=he[O],he[O]=null,O--)}function ye(t,n){O++,he[O]=t.current,t.current=n}var Oe=K(null),Ze=K(null),te=K(null),we=K(null);function Ee(t,n){switch(ye(te,n),ye(Ze,t),ye(Oe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?i0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=i0(n),t=a0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}de(Oe),ye(Oe,t)}function Je(){de(Oe),de(Ze),de(te)}function Qe(t){t.memoizedState!==null&&ye(we,t);var n=Oe.current,a=a0(n,t.type);n!==a&&(ye(Ze,t),ye(Oe,a))}function $e(t){Ze.current===t&&(de(Oe),de(Ze)),we.current===t&&(de(we),Co._currentValue=fe)}var qt=Object.prototype.hasOwnProperty,st=r.unstable_scheduleCallback,_t=r.unstable_cancelCallback,Ct=r.unstable_shouldYield,ot=r.unstable_requestPaint,bt=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,Wt=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,Et=r.unstable_NormalPriority,We=r.unstable_LowPriority,U=r.unstable_IdlePriority,T=r.log,q=r.unstable_setDisableYieldValue,ge=null,ve=null;function ne(t){if(typeof T=="function"&&q(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(ge,t)}catch{}}var F=Math.clz32?Math.clz32:Le,se=Math.log,Te=Math.LN2;function Le(t){return t>>>=0,t===0?32:31-(se(t)/Te|0)|0}var Se=256,Ae=4194304;function Be(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ze(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?u=Be(o):(b&=w,b!==0?u=Be(b):a||(a=w&~t,a!==0&&(u=Be(a))))):(w=o&~h,w!==0?u=Be(w):b!==0?u=Be(b):a||(a=o&~t,a!==0&&(u=Be(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ut(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Se;return Se<<=1,(Se&4194048)===0&&(Se=256),t}function Ne(){var t=Ae;return Ae<<=1,(Ae&62914560)===0&&(Ae=4194304),t}function Ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function He(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Re(t,n,a,o,u,h){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(a=b&~a;0<a;){var _e=31-F(a),Me=1<<_e;w[_e]=0,H[_e]=-1;var oe=ie[_e];if(oe!==null)for(ie[_e]=null,_e=0;_e<oe.length;_e++){var ce=oe[_e];ce!==null&&(ce.lane&=-536870913)}a&=~Me}o!==0&&me(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~n))}function me(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-F(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function je(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-F(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:M0(t.type))}function hi(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var vn=Math.random().toString(36).slice(2),hn="__reactFiber$"+vn,_n="__reactProps$"+vn,Sa="__reactContainer$"+vn,Fs="__reactEvents$"+vn,sl="__reactListeners$"+vn,Wi="__reactHandles$"+vn,Bs="__reactResources$"+vn,ba="__reactMarker$"+vn;function zs(t){delete t[hn],delete t[_n],delete t[Fs],delete t[sl],delete t[Wi]}function pi(t){var n=t[hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Sa]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=l0(t);t!==null;){if(a=t[hn])return a;t=l0(t)}return n}t=a,a=t.parentNode}return null}function qi(t){if(t=t[hn]||t[Sa]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ci(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Yi(t){var n=t[Bs];return n||(n=t[Bs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[ba]=!0}var rl=new Set,ol={};function Zi(t,n){Ma(t,n),Ma(t+"Capture",n)}function Ma(t,n){for(ol[t]=n,t=0;t<n.length;t++)rl.add(n[t])}var ru=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ll={},R={};function Y(t){return qt.call(R,t)?!0:qt.call(ll,t)?!1:ru.test(t)?R[t]=!0:(ll[t]=!0,!1)}function ue(t,n,a){if(Y(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function J(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Ie,Ve;function Ue(t){if(Ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||"",Ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+t+Ve}var ke=!1;function qe(t,n){if(!t||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ce){var oe=ce}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(ce){oe=ce}t.call(Me.prototype)}}else{try{throw Error()}catch(ce){oe=ce}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ce){if(ce&&oe&&typeof ce.stack=="string")return[ce.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),b=h[0],w=h[1];if(b&&w){var H=b.split(`
`),ie=w.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ie.length)for(o=H.length-1,u=ie.length-1;1<=o&&0<=u&&H[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ie[u]){var _e=`
`+H[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ue(a):""}function rt(t){switch(t.tag){case 26:case 27:case 5:return Ue(t.type);case 16:return Ue("Lazy");case 13:return Ue("Suspense");case 19:return Ue("SuspenseList");case 0:case 15:return qe(t.type,!1);case 11:return qe(t.type.render,!1);case 1:return qe(t.type,!0);case 31:return Ue("Activity");default:return""}}function ct(t){try{var n="";do n+=rt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t){var n=Nt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){o=""+b,h.call(this,b)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Gt(t){t._valueTracker||(t._valueTracker=Kt(t))}function Dt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Nt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function nn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ye=/[\n"\\]/g;function kt(t){return t.replace(Ye,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vt(t,n,a,o,u,h,b,w){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ge(n)):t.value!==""+Ge(n)&&(t.value=""+Ge(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?In(t,b,Ge(n)):a!=null?In(t,b,Ge(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Ge(w):t.removeAttribute("name")}function Pn(t,n,a,o,u,h,b,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+Ge(a):"",n=n!=null?""+Ge(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b)}function In(t,n,a){n==="number"&&nn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ge(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ki(t,n,a){if(n!=null&&(n=""+Ge(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ge(a):""}function Pt(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ge(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Yt(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function mi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&an(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&an(t,h,n[h])}function Di(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ul(t){return Wv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ou=null;function lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Vs=null;function sp(t){var n=qi(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;e:switch(t=n.stateNode,n.type){case"input":if(vt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[_n]||null;if(!u)throw Error(s(90));vt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Dt(o)}break e;case"textarea":Ki(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Fn(t,!!a.multiple,n,!1)}}}var cu=!1;function rp(t,n,a){if(cu)return t(n,a);cu=!0;try{var o=t(n);return o}finally{if(cu=!1,(Hs!==null||Vs!==null)&&(Zl(),Hs&&(n=Hs,t=Vs,Vs=Hs=null,sp(n),t)))for(n=0;n<t.length;n++)sp(t[n])}}function Vr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Qi)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{uu=!1}var Ea=null,fu=null,fl=null;function op(){if(fl)return fl;var t,n=fu,a=n.length,o,u="value"in Ea?Ea.value:Ea.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(o=1;o<=b&&n[a-o]===u[h-o];o++);return fl=u.slice(t,1<o?1-o:void 0)}function dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function lp(){return!1}function Bn(t){function n(a,o,u,h,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?hl:lp,this.isPropagationStopped=lp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),n}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Bn(is),jr=x({},is,{view:0,detail:0}),qv=Bn(jr),du,hu,kr,ml=x({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==kr&&(kr&&t.type==="mousemove"?(du=t.screenX-kr.screenX,hu=t.screenY-kr.screenY):hu=du=0,kr=t),du)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),cp=Bn(ml),Yv=x({},ml,{dataTransfer:0}),Zv=Bn(Yv),Kv=x({},jr,{relatedTarget:0}),pu=Bn(Kv),Qv=x({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=Bn(Qv),$v=x({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e_=Bn($v),t_=x({},is,{data:0}),up=Bn(t_),n_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=a_[t])?!!n[t]:!1}function mu(){return s_}var r_=x({},jr,{key:function(t){if(t.key){var n=n_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),o_=Bn(r_),l_=x({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=Bn(l_),c_=x({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),u_=Bn(c_),f_=x({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),d_=Bn(f_),h_=x({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p_=Bn(h_),m_=x({},is,{newState:0,oldState:0}),g_=Bn(m_),x_=[9,13,27,32],gu=Qi&&"CompositionEvent"in window,Xr=null;Qi&&"documentMode"in document&&(Xr=document.documentMode);var v_=Qi&&"TextEvent"in window&&!Xr,dp=Qi&&(!gu||Xr&&8<Xr&&11>=Xr),hp=" ",pp=!1;function mp(t,n){switch(t){case"keyup":return x_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function __(t,n){switch(t){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,hp);case"textInput":return t=n.data,t===hp&&pp?null:t;default:return null}}function y_(t,n){if(Gs)return t==="compositionend"||!gu&&mp(t,n)?(t=op(),fl=fu=Ea=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var S_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!S_[t.type]:n==="textarea"}function vp(t,n,a,o){Hs?Vs?Vs.push(o):Vs=[o]:Hs=o,n=tc(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Wr=null,qr=null;function b_(t){Jg(t,0)}function gl(t){var n=Ci(t);if(Dt(n))return t}function _p(t,n){if(t==="change")return n}var yp=!1;if(Qi){var xu;if(Qi){var vu="oninput"in document;if(!vu){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),vu=typeof Sp.oninput=="function"}xu=vu}else xu=!1;yp=xu&&(!document.documentMode||9<document.documentMode)}function bp(){Wr&&(Wr.detachEvent("onpropertychange",Mp),qr=Wr=null)}function Mp(t){if(t.propertyName==="value"&&gl(qr)){var n=[];vp(n,qr,t,lu(t)),rp(b_,n)}}function M_(t,n,a){t==="focusin"?(bp(),Wr=n,qr=a,Wr.attachEvent("onpropertychange",Mp)):t==="focusout"&&bp()}function E_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(qr)}function T_(t,n){if(t==="click")return gl(n)}function A_(t,n){if(t==="input"||t==="change")return gl(n)}function w_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:w_;function Yr(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qt.call(n,u)||!Xn(t[u],n[u]))return!1}return!0}function Ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tp(t,n){var a=Ep(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ep(a)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nn(t.document)}return n}function _u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var R_=Qi&&"documentMode"in document&&11>=document.documentMode,js=null,yu=null,Zr=null,Su=!1;function Rp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||js==null||js!==nn(o)||(o=js,"selectionStart"in o&&_u(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zr&&Yr(Zr,o)||(Zr=o,o=tc(yu,"onSelect"),0<o.length&&(n=new pl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=js)))}function as(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ks={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},bu={},Cp={};Qi&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function ss(t){if(bu[t])return bu[t];if(!ks[t])return t;var n=ks[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cp)return bu[t]=n[a];return t}var Np=ss("animationend"),Dp=ss("animationiteration"),Up=ss("animationstart"),C_=ss("transitionrun"),N_=ss("transitionstart"),D_=ss("transitioncancel"),Lp=ss("transitionend"),Op=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function gi(t,n){Op.set(t,n),Zi(n,[t])}var Pp=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=Pp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ct(n)},Pp.set(t,n),n)}return{value:t,source:n,stack:ct(n)}}var ni=[],Xs=0,Eu=0;function xl(){for(var t=Xs,n=Eu=Xs=0;n<t;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var h=ni[n];if(ni[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}h!==0&&Ip(a,u,h)}}function vl(t,n,a,o){ni[Xs++]=t,ni[Xs++]=n,ni[Xs++]=a,ni[Xs++]=o,Eu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Tu(t,n,a,o){return vl(t,n,a,o),_l(t)}function Ws(t,n){return vl(t,null,null,n),_l(t)}function Ip(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-F(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function _l(t){if(50<So)throw So=0,Uf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qs={};function U_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,o){return new U_(t,n,a,o)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,o,u,h){var b=0;if(o=t,typeof t=="function")Au(t)&&(b=1);else if(typeof t=="string")b=Oy(t,a,Oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=Wn(31,a,n,u),t.elementType=L,t.lanes=h,t;case E:return rs(a.children,u,h,n);case C:b=8,u|=24;break;case _:return t=Wn(12,a,n,u|2),t.elementType=_,t.lanes=h,t;case B:return t=Wn(13,a,n,u),t.elementType=B,t.lanes=h,t;case V:return t=Wn(19,a,n,u),t.elementType=V,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case P:b=10;break e;case N:b=9;break e;case D:b=11;break e;case k:b=14;break e;case A:b=16,o=null;break e}b=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Wn(b,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function rs(t,n,a,o){return t=Wn(7,t,o,n),t.lanes=a,t}function wu(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Ru(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ys=[],Zs=0,Sl=null,bl=0,ii=[],ai=0,os=null,$i=1,ea="";function ls(t,n){Ys[Zs++]=bl,Ys[Zs++]=Sl,Sl=t,bl=n}function Bp(t,n,a){ii[ai++]=$i,ii[ai++]=ea,ii[ai++]=os,os=t;var o=$i;t=ea;var u=32-F(o)-1;o&=~(1<<u),a+=1;var h=32-F(n)+u;if(30<h){var b=u-u%5;h=(o&(1<<b)-1).toString(32),o>>=b,u-=b,$i=1<<32-F(n)+u|a<<u|o,ea=h+t}else $i=1<<h|a<<u|o,ea=t}function Cu(t){t.return!==null&&(ls(t,1),Bp(t,1,0))}function Nu(t){for(;t===Sl;)Sl=Ys[--Zs],Ys[Zs]=null,bl=Ys[--Zs],Ys[Zs]=null;for(;t===os;)os=ii[--ai],ii[ai]=null,ea=ii[--ai],ii[ai]=null,$i=ii[--ai],ii[ai]=null}var Un=null,Jt=null,Ut=!1,cs=null,Ui=!1,Du=Error(s(519));function us(t){var n=Error(s(418,""));throw Jr(ti(n,t)),Du}function zp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[hn]=t,n[_n]=o,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)xt(Mo[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Gt(n);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),Pt(n,o.value,o.defaultValue,o.children),Gt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||n0(n.textContent,a)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=nc),n=!0):n=!1,n||us(t)}function Hp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Un=Un.return}}function Kr(t){if(t!==Un)return!1;if(!Ut)return Hp(t),Ut=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yf(t.type,t.memoizedProps)),a=!a),a&&Jt&&us(t),Hp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Jt=vi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Jt=null}}else n===27?(n=Jt,Ha(t.type)?(t=Jf,Jf=null,Jt=t):Jt=n):Jt=Un?vi(t.stateNode.nextSibling):null;return!0}function Qr(){Jt=Un=null,Ut=!1}function Vp(){var t=cs;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),cs=null),t}function Jr(t){cs===null?cs=[t]:cs.push(t)}var Uu=K(null),fs=null,ta=null;function Ta(t,n,a){ye(Uu,n._currentValue),n._currentValue=a}function na(t){t._currentValue=Uu.current,de(Uu)}function Lu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var b=u.child;h=h.firstContext;e:for(;h!==null;){var w=h;h=u;for(var H=0;H<n.length;H++)if(w.context===n[H]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),Lu(h.return,a,t),o||(b=null);break e}h=w.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(s(341));b.lanes|=a,h=b.alternate,h!==null&&(h.lanes|=a),Lu(b,a,t),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===t){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function $r(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var w=u.type;Xn(u.pendingProps.value,b.value)||(t!==null?t.push(w):t=[w])}}else if(u===we.current){if(b=u.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}u=u.return}t!==null&&Ou(n,t,a,o),n.flags|=262144}function Ml(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ds(t){fs=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Gp(fs,t)}function El(t,n){return fs===null&&ds(t),Gp(t,n)}function Gp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(s(308));ta=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ta=ta.next=n;return a}var L_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},O_=r.unstable_scheduleCallback,P_=r.unstable_NormalPriority,pn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new L_,data:new Map,refCount:0}}function eo(t){t.refCount--,t.refCount===0&&O_(P_,function(){t.controller.abort()})}var to=null,Iu=0,Ks=0,Qs=null;function I_(t,n){if(to===null){var a=to=[];Iu=0,Ks=zf(),Qs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,n.then(jp,jp),n}function jp(){if(--Iu===0&&to!==null){Qs!==null&&(Qs.status="fulfilled");var t=to;to=null,Ks=0,Qs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function F_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var kp=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&I_(t,n),kp!==null&&kp(t,n)};var hs=K(null);function Fu(){var t=hs.current;return t!==null?t:Xt.pooledCache}function Tl(t,n){n===null?ye(hs,hs.current):ye(hs,n.pool)}function Xp(){var t=Fu();return t===null?null:{parent:pn._currentValue,pool:t}}var no=Error(s(460)),Wp=Error(s(474)),Al=Error(s(542)),Bu={then:function(){}};function qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wl(){}function Yp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(wl,wl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t;default:if(typeof n.status=="string")n.then(wl,wl);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t}throw io=n,no}}var io=null;function Zp(){if(io===null)throw Error(s(459));var t=io;return io=null,t}function Kp(t){if(t===no||t===Al)throw Error(s(483))}var Aa=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ra(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(t),Ip(t,null,a),n}return vl(t,o,n,a),_l(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,je(t,a)}}function Vu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=b:h=h.next=b,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Gu=!1;function so(){if(Gu){var t=Qs;if(t!==null)throw t}}function ro(t,n,a,o){Gu=!1;var u=t.updateQueue;Aa=!1;var h=u.firstBaseUpdate,b=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var H=w,ie=H.next;H.next=null,b===null?h=ie:b.next=ie,b=H;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,w=_e.lastBaseUpdate,w!==b&&(w===null?_e.firstBaseUpdate=ie:w.next=ie,_e.lastBaseUpdate=H))}if(h!==null){var Me=u.baseState;b=0,_e=ie=H=null,w=h;do{var oe=w.lane&-536870913,ce=oe!==w.lane;if(ce?(Mt&oe)===oe:(o&oe)===oe){oe!==0&&oe===Ks&&(Gu=!0),_e!==null&&(_e=_e.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var it=t,et=w;oe=n;var Vt=a;switch(et.tag){case 1:if(it=et.payload,typeof it=="function"){Me=it.call(Vt,Me,oe);break e}Me=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=et.payload,oe=typeof it=="function"?it.call(Vt,Me,oe):it,oe==null)break e;Me=x({},Me,oe);break e;case 2:Aa=!0}}oe=w.callback,oe!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[oe]:ce.push(oe))}else ce={lane:oe,tag:w.tag,payload:w.payload,callback:w.callback,next:null},_e===null?(ie=_e=ce,H=Me):_e=_e.next=ce,b|=oe;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ce=w,w=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);_e===null&&(H=Me),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=_e,h===null&&(u.shared.lanes=0),Ia|=b,t.lanes=b,t.memoizedState=Me}}function Qp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Jp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Qp(a[t],n)}var Js=K(null),Rl=K(0);function $p(t,n){t=ca,ye(Rl,t),ye(Js,n),ca=t|n.baseLanes}function ju(){ye(Rl,ca),ye(Js,Js.current)}function ku(){ca=Rl.current,de(Js),de(Rl)}var Ca=0,pt=null,zt=null,ln=null,Cl=!1,$s=!1,ps=!1,Nl=0,oo=0,er=null,B_=0;function sn(){throw Error(s(321))}function Xu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Wu(t,n,a,o,u,h){return Ca=h,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Im:Fm,ps=!1,h=a(o,u),ps=!1,$s&&(h=tm(n,a,o,u)),em(t),h}function em(t){I.H=Il;var n=zt!==null&&zt.next!==null;if(Ca=0,ln=zt=pt=null,Cl=!1,oo=0,er=null,n)throw Error(s(300));t===null||yn||(t=t.dependencies,t!==null&&Ml(t)&&(yn=!0))}function tm(t,n,a,o){pt=t;var u=0;do{if($s&&(er=null),oo=0,$s=!1,25<=u)throw Error(s(301));if(u+=1,ln=zt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=X_,h=n(a,o)}while($s);return h}function z_(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?lo(n):n,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(pt.flags|=1024),n}function qu(){var t=Nl!==0;return Nl=0,t}function Yu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Zu(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}Ca=0,ln=zt=pt=null,$s=!1,oo=Nl=0,er=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?pt.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(zt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var n=ln===null?pt.memoizedState:ln.next;if(n!==null)ln=n,zt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},ln===null?pt.memoizedState=ln=t:ln=ln.next=t}return ln}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(t){var n=oo;return oo+=1,er===null&&(er=[]),t=Yp(er,t,n),n=pt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Im:Fm),t}function Dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lo(t);if(t.$$typeof===P)return Rn(t)}throw Error(s(438,String(t)))}function Qu(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ku(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=xe;return n.index++,a}function ia(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=cn();return Ju(n,zt,t)}function Ju(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var b=u.next;u.next=h.next,h.next=b}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var w=b=null,H=null,ie=n,_e=!1;do{var Me=ie.lane&-536870913;if(Me!==ie.lane?(Mt&Me)===Me:(Ca&Me)===Me){var oe=ie.revertLane;if(oe===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Me===Ks&&(_e=!0);else if((Ca&oe)===oe){ie=ie.next,oe===Ks&&(_e=!0);continue}else Me={lane:0,revertLane:ie.revertLane,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(w=H=Me,b=h):H=H.next=Me,pt.lanes|=oe,Ia|=oe;Me=ie.action,ps&&a(h,Me),h=ie.hasEagerState?ie.eagerState:a(h,Me)}else oe={lane:Me,revertLane:ie.revertLane,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(w=H=oe,b=h):H=H.next=oe,pt.lanes|=Me,Ia|=Me;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?b=h:H.next=w,!Xn(h,t.memoizedState)&&(yn=!0,_e&&(a=Qs,a!==null)))throw a;t.memoizedState=h,t.baseState=b,t.baseQueue=H,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function $u(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do h=t(h,b.action),b=b.next;while(b!==u);Xn(h,n.memoizedState)||(yn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function nm(t,n,a){var o=pt,u=cn(),h=Ut;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var b=!Xn((zt||u).memoizedState,a);b&&(u.memoizedState=a,yn=!0),u=u.queue;var w=sm.bind(null,o,u,t);if(co(2048,8,w,[t]),u.getSnapshot!==n||b||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,tr(9,Ll(),am.bind(null,o,u,a,n),null),Xt===null)throw Error(s(349));h||(Ca&124)!==0||im(o,n,a)}return a}function im(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=Ku(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function am(t,n,a,o){n.value=a,n.getSnapshot=o,rm(n)&&om(t)}function sm(t,n,a){return a(function(){rm(n)&&om(t)})}function rm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function om(t){var n=Ws(t,2);n!==null&&Qn(n,t,2)}function ef(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),ps){ne(!0);try{a()}finally{ne(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},n}function lm(t,n,a,o){return t.baseState=a,Ju(t,zt,typeof o=="function"?o:ia)}function H_(t,n,a,o,u){if(Pl(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,cm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function cm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=I.T,b={};I.T=b;try{var w=a(u,o),H=I.S;H!==null&&H(b,w),um(t,n,w)}catch(ie){tf(t,n,ie)}finally{I.T=h}}else try{h=a(u,o),um(t,n,h)}catch(ie){tf(t,n,ie)}}function um(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){fm(t,n,o)},function(o){return tf(t,n,o)}):fm(t,n,a)}function fm(t,n,a){n.status="fulfilled",n.value=a,dm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,cm(t,a)))}function tf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,dm(n),n=n.next;while(n!==o)}t.action=null}function dm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function hm(t,n){return n}function pm(t,n){if(Ut){var a=Xt.formState;if(a!==null){e:{var o=pt;if(Ut){if(Jt){t:{for(var u=Jt,h=Ui;u.nodeType!==8;){if(!h){u=null;break t}if(u=vi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Jt=vi(u.nextSibling),o=u.data==="F!";break e}}us(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:n},a.queue=o,a=Lm.bind(null,pt,o),o.dispatch=a,o=ef(!1),h=of.bind(null,pt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=H_.bind(null,pt,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function mm(t){var n=cn();return gm(n,zt,t)}function gm(t,n,a){if(n=Ju(t,n,hm)[0],t=Ul(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=lo(n)}catch(b){throw b===no?Al:b}else o=n;n=cn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,tr(9,Ll(),V_.bind(null,u,a),null)),[o,h,t]}function V_(t,n){t.action=n}function xm(t){var n=cn(),a=zt;if(a!==null)return gm(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function tr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Ku(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Ll(){return{destroy:void 0,resource:void 0}}function vm(){return cn().memoizedState}function Ol(t,n,a,o){var u=zn();o=o===void 0?null:o,pt.flags|=t,u.memoizedState=tr(1|n,Ll(),a,o)}function co(t,n,a,o){var u=cn();o=o===void 0?null:o;var h=u.memoizedState.inst;zt!==null&&o!==null&&Xu(o,zt.memoizedState.deps)?u.memoizedState=tr(n,h,a,o):(pt.flags|=t,u.memoizedState=tr(1|n,h,a,o))}function _m(t,n){Ol(8390656,8,t,n)}function ym(t,n){co(2048,8,t,n)}function Sm(t,n){return co(4,2,t,n)}function bm(t,n){return co(4,4,t,n)}function Mm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Em(t,n,a){a=a!=null?a.concat([t]):null,co(4,4,Mm.bind(null,n,t),a)}function nf(){}function Tm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Xu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Am(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Xu(n,o[1]))return o[0];if(o=t(),ps){ne(!0);try{t()}finally{ne(!1)}}return a.memoizedState=[o,n],o}function af(t,n,a){return a===void 0||(Ca&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Cg(),pt.lanes|=t,Ia|=t,a)}function wm(t,n,a,o){return Xn(a,n)?a:Js.current!==null?(t=af(t,a,o),Xn(t,n)||(yn=!0),t):(Ca&42)===0?(yn=!0,t.memoizedState=a):(t=Cg(),pt.lanes|=t,Ia|=t,n)}function Rm(t,n,a,o,u){var h=z.p;z.p=h!==0&&8>h?h:8;var b=I.T,w={};I.T=w,of(t,!1,n,a);try{var H=u(),ie=I.S;if(ie!==null&&ie(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var _e=F_(H,o);uo(t,n,_e,Kn(t))}else uo(t,n,o,Kn(t))}catch(Me){uo(t,n,{then:function(){},status:"rejected",reason:Me},Kn())}finally{z.p=h,I.T=b}}function G_(){}function sf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Cm(t).queue;Rm(t,u,n,fe,a===null?G_:function(){return Nm(t),a(o)})}function Cm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:fe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Nm(t){var n=Cm(t).next.queue;uo(t,n,{},Kn())}function rf(){return Rn(Co)}function Dm(){return cn().memoizedState}function Um(){return cn().memoizedState}function j_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=wa(a);var o=Ra(n,t,a);o!==null&&(Qn(o,n,a),ao(o,n,a)),n={cache:Pu()},t.payload=n;return}n=n.return}}function k_(t,n,a){var o=Kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?Om(n,a):(a=Tu(t,n,a,o),a!==null&&(Qn(a,t,o),Pm(a,n,o)))}function Lm(t,n,a){var o=Kn();uo(t,n,a,o)}function uo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))Om(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var b=n.lastRenderedState,w=h(b,a);if(u.hasEagerState=!0,u.eagerState=w,Xn(w,b))return vl(t,n,u,0),Xt===null&&xl(),!1}catch{}finally{}if(a=Tu(t,n,u,o),a!==null)return Qn(a,t,o),Pm(a,n,o),!0}return!1}function of(t,n,a,o){if(o={lane:2,revertLane:zf(),action:o,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(s(479))}else n=Tu(t,a,o,2),n!==null&&Qn(n,t,2)}function Pl(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function Om(t,n){$s=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Pm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,je(t,a)}}var Il={readContext:Rn,use:Dl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},Im={readContext:Rn,use:Dl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:_m,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ol(4194308,4,Mm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ol(4194308,4,t,n)},useInsertionEffect:function(t,n){Ol(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(ps){ne(!0);try{t()}finally{ne(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(ps){ne(!0);try{a(n)}finally{ne(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=k_.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=ef(t);var n=t.queue,a=Lm.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(t,n){var a=zn();return af(a,t,n)},useTransition:function(){var t=ef(!1);return t=Rm.bind(null,pt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=zn();if(Ut){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(Mt&124)!==0||im(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,_m(sm.bind(null,o,h,t),[t]),o.flags|=2048,tr(9,Ll(),am.bind(null,o,h,a,n),null),a},useId:function(){var t=zn(),n=Xt.identifierPrefix;if(Ut){var a=ea,o=$i;a=(o&~(1<<32-F(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=B_++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:rf,useFormState:pm,useActionState:pm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Qu,useCacheRefresh:function(){return zn().memoizedState=j_.bind(null,pt)}},Fm={readContext:Rn,use:Dl,useCallback:Tm,useContext:Rn,useEffect:ym,useImperativeHandle:Em,useInsertionEffect:Sm,useLayoutEffect:bm,useMemo:Am,useReducer:Ul,useRef:vm,useState:function(){return Ul(ia)},useDebugValue:nf,useDeferredValue:function(t,n){var a=cn();return wm(a,zt.memoizedState,t,n)},useTransition:function(){var t=Ul(ia)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:nm,useId:Dm,useHostTransitionStatus:rf,useFormState:mm,useActionState:mm,useOptimistic:function(t,n){var a=cn();return lm(a,zt,t,n)},useMemoCache:Qu,useCacheRefresh:Um},X_={readContext:Rn,use:Dl,useCallback:Tm,useContext:Rn,useEffect:ym,useImperativeHandle:Em,useInsertionEffect:Sm,useLayoutEffect:bm,useMemo:Am,useReducer:$u,useRef:vm,useState:function(){return $u(ia)},useDebugValue:nf,useDeferredValue:function(t,n){var a=cn();return zt===null?af(a,t,n):wm(a,zt.memoizedState,t,n)},useTransition:function(){var t=$u(ia)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:nm,useId:Dm,useHostTransitionStatus:rf,useFormState:xm,useActionState:xm,useOptimistic:function(t,n){var a=cn();return zt!==null?lm(a,zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:Um},nr=null,fo=0;function Fl(t){var n=fo;return fo+=1,nr===null&&(nr=[]),Yp(nr,t,n)}function ho(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Bl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bm(t){var n=t._init;return n(t._payload)}function zm(t){function n(Z,X){if(t){var $=Z.deletions;$===null?(Z.deletions=[X],Z.flags|=16):$.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=Ji(Z,X),Z.index=0,Z.sibling=null,Z}function h(Z,X,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<X?(Z.flags|=67108866,X):$):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function b(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function w(Z,X,$,be){return X===null||X.tag!==6?(X=wu($,Z.mode,be),X.return=Z,X):(X=u(X,$),X.return=Z,X)}function H(Z,X,$,be){var Xe=$.type;return Xe===E?_e(Z,X,$.props.children,be,$.key):X!==null&&(X.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===A&&Bm(Xe)===X.type)?(X=u(X,$.props),ho(X,$),X.return=Z,X):(X=yl($.type,$.key,$.props,null,Z.mode,be),ho(X,$),X.return=Z,X)}function ie(Z,X,$,be){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Ru($,Z.mode,be),X.return=Z,X):(X=u(X,$.children||[]),X.return=Z,X)}function _e(Z,X,$,be,Xe){return X===null||X.tag!==7?(X=rs($,Z.mode,be,Xe),X.return=Z,X):(X=u(X,$),X.return=Z,X)}function Me(Z,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=wu(""+X,Z.mode,$),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case v:return $=yl(X.type,X.key,X.props,null,Z.mode,$),ho($,X),$.return=Z,$;case M:return X=Ru(X,Z.mode,$),X.return=Z,X;case A:var be=X._init;return X=be(X._payload),Me(Z,X,$)}if(Q(X)||ee(X))return X=rs(X,Z.mode,$,null),X.return=Z,X;if(typeof X.then=="function")return Me(Z,Fl(X),$);if(X.$$typeof===P)return Me(Z,El(Z,X),$);Bl(Z,X)}return null}function oe(Z,X,$,be){var Xe=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Xe!==null?null:w(Z,X,""+$,be);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return $.key===Xe?H(Z,X,$,be):null;case M:return $.key===Xe?ie(Z,X,$,be):null;case A:return Xe=$._init,$=Xe($._payload),oe(Z,X,$,be)}if(Q($)||ee($))return Xe!==null?null:_e(Z,X,$,be,null);if(typeof $.then=="function")return oe(Z,X,Fl($),be);if($.$$typeof===P)return oe(Z,X,El(Z,$),be);Bl(Z,$)}return null}function ce(Z,X,$,be,Xe){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return Z=Z.get($)||null,w(X,Z,""+be,Xe);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case v:return Z=Z.get(be.key===null?$:be.key)||null,H(X,Z,be,Xe);case M:return Z=Z.get(be.key===null?$:be.key)||null,ie(X,Z,be,Xe);case A:var mt=be._init;return be=mt(be._payload),ce(Z,X,$,be,Xe)}if(Q(be)||ee(be))return Z=Z.get($)||null,_e(X,Z,be,Xe,null);if(typeof be.then=="function")return ce(Z,X,$,Fl(be),Xe);if(be.$$typeof===P)return ce(Z,X,$,El(X,be),Xe);Bl(X,be)}return null}function it(Z,X,$,be){for(var Xe=null,mt=null,Ke=X,tt=X=0,bn=null;Ke!==null&&tt<$.length;tt++){Ke.index>tt?(bn=Ke,Ke=null):bn=Ke.sibling;var wt=oe(Z,Ke,$[tt],be);if(wt===null){Ke===null&&(Ke=bn);break}t&&Ke&&wt.alternate===null&&n(Z,Ke),X=h(wt,X,tt),mt===null?Xe=wt:mt.sibling=wt,mt=wt,Ke=bn}if(tt===$.length)return a(Z,Ke),Ut&&ls(Z,tt),Xe;if(Ke===null){for(;tt<$.length;tt++)Ke=Me(Z,$[tt],be),Ke!==null&&(X=h(Ke,X,tt),mt===null?Xe=Ke:mt.sibling=Ke,mt=Ke);return Ut&&ls(Z,tt),Xe}for(Ke=o(Ke);tt<$.length;tt++)bn=ce(Ke,Z,tt,$[tt],be),bn!==null&&(t&&bn.alternate!==null&&Ke.delete(bn.key===null?tt:bn.key),X=h(bn,X,tt),mt===null?Xe=bn:mt.sibling=bn,mt=bn);return t&&Ke.forEach(function(Xa){return n(Z,Xa)}),Ut&&ls(Z,tt),Xe}function et(Z,X,$,be){if($==null)throw Error(s(151));for(var Xe=null,mt=null,Ke=X,tt=X=0,bn=null,wt=$.next();Ke!==null&&!wt.done;tt++,wt=$.next()){Ke.index>tt?(bn=Ke,Ke=null):bn=Ke.sibling;var Xa=oe(Z,Ke,wt.value,be);if(Xa===null){Ke===null&&(Ke=bn);break}t&&Ke&&Xa.alternate===null&&n(Z,Ke),X=h(Xa,X,tt),mt===null?Xe=Xa:mt.sibling=Xa,mt=Xa,Ke=bn}if(wt.done)return a(Z,Ke),Ut&&ls(Z,tt),Xe;if(Ke===null){for(;!wt.done;tt++,wt=$.next())wt=Me(Z,wt.value,be),wt!==null&&(X=h(wt,X,tt),mt===null?Xe=wt:mt.sibling=wt,mt=wt);return Ut&&ls(Z,tt),Xe}for(Ke=o(Ke);!wt.done;tt++,wt=$.next())wt=ce(Ke,Z,tt,wt.value,be),wt!==null&&(t&&wt.alternate!==null&&Ke.delete(wt.key===null?tt:wt.key),X=h(wt,X,tt),mt===null?Xe=wt:mt.sibling=wt,mt=wt);return t&&Ke.forEach(function(Wy){return n(Z,Wy)}),Ut&&ls(Z,tt),Xe}function Vt(Z,X,$,be){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case v:e:{for(var Xe=$.key;X!==null;){if(X.key===Xe){if(Xe=$.type,Xe===E){if(X.tag===7){a(Z,X.sibling),be=u(X,$.props.children),be.return=Z,Z=be;break e}}else if(X.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===A&&Bm(Xe)===X.type){a(Z,X.sibling),be=u(X,$.props),ho(be,$),be.return=Z,Z=be;break e}a(Z,X);break}else n(Z,X);X=X.sibling}$.type===E?(be=rs($.props.children,Z.mode,be,$.key),be.return=Z,Z=be):(be=yl($.type,$.key,$.props,null,Z.mode,be),ho(be,$),be.return=Z,Z=be)}return b(Z);case M:e:{for(Xe=$.key;X!==null;){if(X.key===Xe)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Z,X.sibling),be=u(X,$.children||[]),be.return=Z,Z=be;break e}else{a(Z,X);break}else n(Z,X);X=X.sibling}be=Ru($,Z.mode,be),be.return=Z,Z=be}return b(Z);case A:return Xe=$._init,$=Xe($._payload),Vt(Z,X,$,be)}if(Q($))return it(Z,X,$,be);if(ee($)){if(Xe=ee($),typeof Xe!="function")throw Error(s(150));return $=Xe.call($),et(Z,X,$,be)}if(typeof $.then=="function")return Vt(Z,X,Fl($),be);if($.$$typeof===P)return Vt(Z,X,El(Z,$),be);Bl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Z,X.sibling),be=u(X,$),be.return=Z,Z=be):(a(Z,X),be=wu($,Z.mode,be),be.return=Z,Z=be),b(Z)):a(Z,X)}return function(Z,X,$,be){try{fo=0;var Xe=Vt(Z,X,$,be);return nr=null,Xe}catch(Ke){if(Ke===no||Ke===Al)throw Ke;var mt=Wn(29,Ke,null,Z.mode);return mt.lanes=be,mt.return=Z,mt}finally{}}}var ir=zm(!0),Hm=zm(!1),si=K(null),Li=null;function Na(t){var n=t.alternate;ye(mn,mn.current&1),ye(si,t),Li===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(Li=t)}function Vm(t){if(t.tag===22){if(ye(mn,mn.current),ye(si,t),Li===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Li=t)}}else Da()}function Da(){ye(mn,mn.current),ye(si,si.current)}function aa(t){de(si),Li===t&&(Li=null),de(mn)}var mn=K(0);function zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function lf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=wa(o);u.payload=n,a!=null&&(u.callback=a),n=Ra(t,u,o),n!==null&&(Qn(n,t,o),ao(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=wa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ra(t,u,o),n!==null&&(Qn(n,t,o),ao(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),o=wa(a);o.tag=2,n!=null&&(o.callback=n),n=Ra(t,o,a),n!==null&&(Qn(n,t,a),ao(n,t,a))}};function Gm(t,n,a,o,u,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,b):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,o)||!Yr(u,h):!0}function jm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&cf.enqueueReplaceState(n,n.state,null)}function ms(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function km(t){Hl(t)}function Xm(t){console.error(t)}function Wm(t){Hl(t)}function Vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function qm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(t,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(t,n)},a}function Ym(t){return t=wa(t),t.tag=3,t}function Zm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){qm(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){qm(n,a,o),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function W_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Li===null?Of():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),If(t,o,u)),!1;case 22:return a.flags|=65536,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),If(t,o,u)),!1}throw Error(s(435,a.tag))}return If(t,o,u),Of(),!1}if(Ut)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Du&&(t=Error(s(422),{cause:o}),Jr(ti(t,a)))):(o!==Du&&(n=Error(s(423),{cause:o}),Jr(ti(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ti(o,a),u=uf(t.stateNode,o,u),Vu(t,u),$t!==4&&($t=2)),!1;var h=Error(s(520),{cause:o});if(h=ti(h,a),yo===null?yo=[h]:yo.push(h),$t!==4&&($t=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=uf(a.stateNode,o,t),Vu(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Fa===null||!Fa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ym(u),Zm(u,t,a,o),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var Km=Error(s(461)),yn=!1;function En(t,n,a,o){n.child=t===null?Hm(n,null,a,o):ir(n,t.child,a,o)}function Qm(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var b={};for(var w in o)w!=="ref"&&(b[w]=o[w])}else b=o;return ds(n),o=Wu(t,n,a,b,h,u),w=qu(),t!==null&&!yn?(Yu(t,n,u),sa(t,n,u)):(Ut&&w&&Cu(n),n.flags|=1,En(t,n,o,u),n.child)}function Jm(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!Au(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,$m(t,n,h,o,u)):(t=yl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!vf(t,u)){var b=h.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(b,o)&&t.ref===n.ref)return sa(t,n,u)}return n.flags|=1,t=Ji(h,o),t.ref=n.ref,t.return=n,n.child=t}function $m(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(Yr(h,o)&&t.ref===n.ref)if(yn=!1,n.pendingProps=o=h,vf(t,u))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,sa(t,n,u)}return ff(t,n,a,o,u)}function eg(t,n,a){var o=n.pendingProps,u=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,t!==null){for(u=n.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return tg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Tl(n,h!==null?h.cachePool:null),h!==null?$p(n,h):ju(),Vm(n);else return n.lanes=n.childLanes=536870912,tg(t,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Tl(n,h.cachePool),$p(n,h),Da(),n.memoizedState=null):(t!==null&&Tl(n,null),ju(),Da());return En(t,n,u,a),n.child}function tg(t,n,a,o){var u=Fu();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Tl(n,null),ju(),Vm(n),t!==null&&$r(t,n,o,!0),null}function Gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ff(t,n,a,o,u){return ds(n),a=Wu(t,n,a,o,void 0,u),o=qu(),t!==null&&!yn?(Yu(t,n,u),sa(t,n,u)):(Ut&&o&&Cu(n),n.flags|=1,En(t,n,a,u),n.child)}function ng(t,n,a,o,u,h){return ds(n),n.updateQueue=null,a=tm(n,o,a,u),em(t),o=qu(),t!==null&&!yn?(Yu(t,n,h),sa(t,n,h)):(Ut&&o&&Cu(n),n.flags|=1,En(t,n,a,h),n.child)}function ig(t,n,a,o,u){if(ds(n),n.stateNode===null){var h=qs,b=a.contextType;typeof b=="object"&&b!==null&&(h=Rn(b)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=cf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},zu(n),b=a.contextType,h.context=typeof b=="object"&&b!==null?Rn(b):qs,h.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(lf(n,a,b,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&cf.enqueueReplaceState(h,h.state,null),ro(n,o,h,u),so(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var w=n.memoizedProps,H=ms(a,w);h.props=H;var ie=h.context,_e=a.contextType;b=qs,typeof _e=="object"&&_e!==null&&(b=Rn(_e));var Me=a.getDerivedStateFromProps;_e=typeof Me=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,_e||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||ie!==b)&&jm(n,h,o,b),Aa=!1;var oe=n.memoizedState;h.state=oe,ro(n,o,h,u),so(),ie=n.memoizedState,w||oe!==ie||Aa?(typeof Me=="function"&&(lf(n,a,Me,o),ie=n.memoizedState),(H=Aa||Gm(n,a,H,o,oe,ie,b))?(_e||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),h.props=o,h.state=ie,h.context=b,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Hu(t,n),b=n.memoizedProps,_e=ms(a,b),h.props=_e,Me=n.pendingProps,oe=h.context,ie=a.contextType,H=qs,typeof ie=="object"&&ie!==null&&(H=Rn(ie)),w=a.getDerivedStateFromProps,(ie=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==Me||oe!==H)&&jm(n,h,o,H),Aa=!1,oe=n.memoizedState,h.state=oe,ro(n,o,h,u),so();var ce=n.memoizedState;b!==Me||oe!==ce||Aa||t!==null&&t.dependencies!==null&&Ml(t.dependencies)?(typeof w=="function"&&(lf(n,a,w,o),ce=n.memoizedState),(_e=Aa||Gm(n,a,_e,o,oe,ce,H)||t!==null&&t.dependencies!==null&&Ml(t.dependencies))?(ie||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ce,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ce,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),h.props=o,h.state=ce,h.context=H,o=_e):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Gl(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=ir(n,t.child,null,u),n.child=ir(n,null,a,u)):En(t,n,a,u),n.memoizedState=h.state,t=n.child):t=sa(t,n,u),t}function ag(t,n,a,o){return Qr(),n.flags|=256,En(t,n,a,o),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(t){return{baseLanes:t,cachePool:Xp()}}function pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function sg(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ut){if(u?Na(n):Da(),Ut){var w=Jt,H;if(H=w){e:{for(H=w,w=Ui;H.nodeType!==8;){if(!w){w=null;break e}if(H=vi(H.nextSibling),H===null){w=null;break e}}w=H}w!==null?(n.memoizedState={dehydrated:w,treeContext:os!==null?{id:$i,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},H=Wn(18,null,null,0),H.stateNode=w,H.return=n,n.child=H,Un=n,Jt=null,H=!0):H=!1}H||us(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Qf(w)?n.lanes=32:n.lanes=536870912,null;aa(n)}return w=o.children,o=o.fallback,u?(Da(),u=n.mode,w=jl({mode:"hidden",children:w},u),o=rs(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,u=n.child,u.memoizedState=hf(a),u.childLanes=pf(t,b,a),n.memoizedState=df,o):(Na(n),mf(n,w))}if(H=t.memoizedState,H!==null&&(w=H.dehydrated,w!==null)){if(h)n.flags&256?(Na(n),n.flags&=-257,n=gf(t,n,a)):n.memoizedState!==null?(Da(),n.child=t.child,n.flags|=128,n=null):(Da(),u=o.fallback,w=n.mode,o=jl({mode:"visible",children:o.children},w),u=rs(u,w,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ir(n,t.child,null,a),o=n.child,o.memoizedState=hf(a),o.childLanes=pf(t,b,a),n.memoizedState=df,n=u);else if(Na(n),Qf(w)){if(b=w.nextSibling&&w.nextSibling.dataset,b)var ie=b.dgst;b=ie,o=Error(s(419)),o.stack="",o.digest=b,Jr({value:o,source:null,stack:null}),n=gf(t,n,a)}else if(yn||$r(t,n,a,!1),b=(a&t.childLanes)!==0,yn||b){if(b=Xt,b!==null&&(o=a&-a,o=(o&42)!==0?1:nt(o),o=(o&(b.suspendedLanes|a))!==0?0:o,o!==0&&o!==H.retryLane))throw H.retryLane=o,Ws(t,o),Qn(b,t,o),Km;w.data==="$?"||Of(),n=gf(t,n,a)}else w.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Jt=vi(w.nextSibling),Un=n,Ut=!0,cs=null,Ui=!1,t!==null&&(ii[ai++]=$i,ii[ai++]=ea,ii[ai++]=os,$i=t.id,ea=t.overflow,os=n),n=mf(n,o.children),n.flags|=4096);return n}return u?(Da(),u=o.fallback,w=n.mode,H=t.child,ie=H.sibling,o=Ji(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?u=Ji(ie,u):(u=rs(u,w,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,w=t.child.memoizedState,w===null?w=hf(a):(H=w.cachePool,H!==null?(ie=pn._currentValue,H=H.parent!==ie?{parent:ie,pool:ie}:H):H=Xp(),w={baseLanes:w.baseLanes|a,cachePool:H}),u.memoizedState=w,u.childLanes=pf(t,b,a),n.memoizedState=df,o):(Na(n),a=t.child,t=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=a,n.memoizedState=null,a)}function mf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function gf(t,n,a){return ir(n,t.child,null,a),t=mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function rg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Lu(t.return,n,a)}function xf(t,n,a,o,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function og(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(En(t,n,o.children,a),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,a,n);else if(t.tag===19)rg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ye(mn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&zl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),xf(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&zl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}xf(n,!0,a,null,h);break;case"together":xf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ml(t)))}function q_(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Ta(n,pn,t.memoizedState.cache),Qr();break;case 27:case 5:Qe(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?sg(t,n,a):(Na(n),t=sa(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return og(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ye(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,eg(t,n,a);case 24:Ta(n,pn,t.memoizedState.cache)}return sa(t,n,a)}function lg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!vf(t,a)&&(n.flags&128)===0)return yn=!1,q_(t,n,a);yn=(t.flags&131072)!==0}else yn=!1,Ut&&(n.flags&1048576)!==0&&Bp(n,bl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Au(o)?(t=ms(o,t),n.tag=1,n=ig(null,n,o,t,a)):(n.tag=0,n=ff(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=Qm(null,n,o,t,a);break e}else if(u===k){n.tag=14,n=Jm(null,n,o,t,a);break e}}throw n=pe(o)||o,Error(s(306,n,""))}}return n;case 0:return ff(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ms(o,n.pendingProps),ig(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Hu(t,n),ro(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Ta(n,pn,o),o!==h.cache&&Ou(n,[pn],a,!0),so(),o=b.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=ag(t,n,o,a);break e}else if(o!==u){u=ti(Error(s(424)),n),Jr(u),n=ag(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=vi(t.firstChild),Un=n,Ut=!0,cs=null,Ui=!0,a=Hm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qr(),o===u){n=sa(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return Gl(t,n),t===null?(a=d0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ut||(a=n.type,t=n.pendingProps,o=ic(te.current).createElement(a),o[hn]=n,o[_n]=t,An(o,a,t),tn(o),n.stateNode=o):n.memoizedState=d0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qe(n),t===null&&Ut&&(o=n.stateNode=c0(n.type,n.pendingProps,te.current),Un=n,Ui=!0,u=Jt,Ha(n.type)?(Jf=u,Jt=vi(o.firstChild)):Jt=u),En(t,n,n.pendingProps.children,a),Gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ut&&((u=o=Jt)&&(o=Sy(o,n.type,n.pendingProps,Ui),o!==null?(n.stateNode=o,Un=n,Jt=vi(o.firstChild),Ui=!1,u=!0):u=!1),u||us(n)),Qe(n),u=n.type,h=n.pendingProps,b=t!==null?t.memoizedProps:null,o=h.children,Yf(u,h)?o=null:b!==null&&Yf(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(t,n,z_,null,null,a),Co._currentValue=u),Gl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&Ut&&((t=a=Jt)&&(a=by(a,n.pendingProps,Ui),a!==null?(n.stateNode=a,Un=n,Jt=null,t=!0):t=!1),t||us(n)),null;case 13:return sg(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ir(n,null,o,a):En(t,n,o,a),n.child;case 11:return Qm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ds(n),u=Rn(u),o=o(u),n.flags|=1,En(t,n,o,a),n.child;case 14:return Jm(t,n,n.type,n.pendingProps,a);case 15:return $m(t,n,n.type,n.pendingProps,a);case 19:return og(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=jl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ji(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return eg(t,n,a);case 24:return ds(n),o=Rn(pn),t===null?(u=Fu(),u===null&&(u=Xt,h=Pu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},zu(n),Ta(n,pn,u)):((t.lanes&a)!==0&&(Hu(t,n),ro(n,null,null,a),so()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ta(n,pn,o)):(o=h.cache,Ta(n,pn,o),o!==u.cache&&Ou(n,[pn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(t){t.flags|=4}function cg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!x0(n)){if(n=si.current,n!==null&&((Mt&4194048)===Mt?Li!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||n!==Li))throw io=Bu,Wp;t.flags|=8192}}function kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,or|=n)}function po(t,n){if(!Ut)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Y_(t,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(pn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Kr(n)?ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vp())),Qt(n),null;case 26:return a=n.memoizedState,t===null?(ra(n),a!==null?(Qt(n),cg(n,a)):(Qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ra(n),Qt(n),cg(n,a)):(Qt(n),n.flags&=-16777217):(t.memoizedProps!==o&&ra(n),Qt(n),n.flags&=-16777217),null;case 27:$e(n),a=te.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}t=Oe.current,Kr(n)?zp(n):(t=c0(u,o,a),n.stateNode=t,ra(n))}return Qt(n),null;case 5:if($e(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(t=Oe.current,Kr(n))zp(n);else{switch(u=ic(te.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[hn]=n,t[_n]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(An(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ra(n)}}return Qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=te.current,Kr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[hn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||n0(t.nodeValue,a)),t||us(n)}else t=ic(t).createTextNode(o),t[hn]=n,n.stateNode=t}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Kr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[hn]=n}else Qr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Vp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(aa(n),n):(aa(n),null)}if(aa(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),Qt(n),null;case 4:return Je(),t===null&&jf(n.stateNode.containerInfo),Qt(n),null;case 10:return na(n.type),Qt(n),null;case 19:if(de(mn),u=n.memoizedState,u===null)return Qt(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)po(u,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=zl(t),h!==null){for(n.flags|=128,po(u,!1),t=h.updateQueue,n.updateQueue=t,kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Fp(a,t),a=a.sibling;return ye(mn,mn.current&1|2),n.child}t=t.sibling}u.tail!==null&&bt()>ql&&(n.flags|=128,o=!0,po(u,!1),n.lanes=4194304)}else{if(!o)if(t=zl(h),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,kl(n,t),po(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Ut)return Qt(n),null}else 2*bt()-u.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,o=!0,po(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(t=u.last,t!==null?t.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=bt(),n.sibling=null,t=mn.current,ye(mn,o?t&1|2:t&1),n):(Qt(n),null);case 22:case 23:return aa(n),ku(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&de(hs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(pn),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Z_(t,n){switch(Nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return na(pn),Je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 13:if(aa(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Qr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return de(mn),null;case 4:return Je(),null;case 10:return na(n.type),null;case 22:case 23:return aa(n),ku(),t!==null&&de(hs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return na(pn),null;case 25:return null;default:return null}}function ug(t,n){switch(Nu(n),n.tag){case 3:na(pn),Je();break;case 26:case 27:case 5:$e(n);break;case 4:Je();break;case 13:aa(n);break;case 19:de(mn);break;case 10:na(n.type);break;case 22:case 23:aa(n),ku(),t!==null&&de(hs);break;case 24:na(pn)}}function mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,b=a.inst;o=h(),b.destroy=o}a=a.next}while(a!==u)}}catch(w){jt(n,n.return,w)}}function Ua(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var b=o.inst,w=b.destroy;if(w!==void 0){b.destroy=void 0,u=n;var H=a,ie=w;try{ie()}catch(_e){jt(u,H,_e)}}}o=o.next}while(o!==h)}}catch(_e){jt(n,n.return,_e)}}function fg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Jp(n,a)}catch(o){jt(t,t.return,o)}}}function dg(t,n,a){a.props=ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){jt(t,n,o)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){jt(t,n,u)}}function Oi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){jt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){jt(t,n,u)}else a.current=null}function hg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){jt(t,t.return,u)}}function _f(t,n,a){try{var o=t.stateNode;gy(o,t.type,a,n),o[_n]=n}catch(u){jt(t,t.return,u)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ha(t.type)||t.tag===4}function yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=nc));else if(o!==4&&(o===27&&Ha(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Sf(t,n,a),t=t.sibling;t!==null;)Sf(t,n,a),t=t.sibling}function Xl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ha(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xl(t,n,a),t=t.sibling;t!==null;)Xl(t,n,a),t=t.sibling}function mg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[hn]=t,n[_n]=a}catch(h){jt(t,t.return,h)}}var oa=!1,rn=!1,bf=!1,gg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function K_(t,n){if(t=t.containerInfo,Wf=cc,t=wp(t),_u(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var b=0,w=-1,H=-1,ie=0,_e=0,Me=t,oe=null;t:for(;;){for(var ce;Me!==a||u!==0&&Me.nodeType!==3||(w=b+u),Me!==h||o!==0&&Me.nodeType!==3||(H=b+o),Me.nodeType===3&&(b+=Me.nodeValue.length),(ce=Me.firstChild)!==null;)oe=Me,Me=ce;for(;;){if(Me===t)break t;if(oe===a&&++ie===u&&(w=b),oe===h&&++_e===o&&(H=b),(ce=Me.nextSibling)!==null)break;Me=oe,oe=Me.parentNode}Me=ce}a=w===-1||H===-1?null:{start:w,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:t,selectionRange:a},cc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var it=ms(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(it,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){jt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function xg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:La(t,a),o&4&&mo(5,a);break;case 1:if(La(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(b){jt(a,a.return,b)}else{var u=ms(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){jt(a,a.return,b)}}o&64&&fg(a),o&512&&go(a,a.return);break;case 3:if(La(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Jp(t,n)}catch(b){jt(a,a.return,b)}}break;case 27:n===null&&o&4&&mg(a);case 26:case 5:La(t,a),n===null&&o&4&&hg(a),o&512&&go(a,a.return);break;case 12:La(t,a);break;case 13:La(t,a),o&4&&yg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sy.bind(null,a),My(t,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||rn,u=oa;var h=rn;oa=o,(rn=n)&&!h?Oa(t,a,(a.subtreeFlags&8772)!==0):La(t,a),oa=u,rn=h}break;case 30:break;default:La(t,a)}}function vg(t){var n=t.alternate;n!==null&&(t.alternate=null,vg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Hn=!1;function la(t,n,a){for(a=a.child;a!==null;)_g(t,n,a),a=a.sibling}function _g(t,n,a){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(ge,a)}catch{}switch(a.tag){case 26:rn||Oi(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Oi(a,n);var o=Zt,u=Hn;Ha(a.type)&&(Zt=a.stateNode,Hn=!1),la(t,n,a),To(a.stateNode),Zt=o,Hn=u;break;case 5:rn||Oi(a,n);case 6:if(o=Zt,u=Hn,Zt=null,la(t,n,a),Zt=o,Hn=u,Zt!==null)if(Hn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(h){jt(a,n,h)}else try{Zt.removeChild(a.stateNode)}catch(h){jt(a,n,h)}break;case 18:Zt!==null&&(Hn?(t=Zt,o0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Lo(t)):o0(Zt,a.stateNode));break;case 4:o=Zt,u=Hn,Zt=a.stateNode.containerInfo,Hn=!0,la(t,n,a),Zt=o,Hn=u;break;case 0:case 11:case 14:case 15:rn||Ua(2,a,n),rn||Ua(4,a,n),la(t,n,a);break;case 1:rn||(Oi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&dg(a,n,o)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,la(t,n,a),rn=o;break;default:la(t,n,a)}}function yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Lo(t)}catch(a){jt(n,n.return,a)}}function Q_(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new gg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new gg),n;default:throw Error(s(435,t.tag))}}function Mf(t,n){var a=Q_(t);n.forEach(function(o){var u=ry.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,b=n,w=b;e:for(;w!==null;){switch(w.tag){case 27:if(Ha(w.type)){Zt=w.stateNode,Hn=!1;break e}break;case 5:Zt=w.stateNode,Hn=!1;break e;case 3:case 4:Zt=w.stateNode.containerInfo,Hn=!0;break e}w=w.return}if(Zt===null)throw Error(s(160));_g(h,b,u),Zt=null,Hn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Sg(n,t),n=n.sibling}var xi=null;function Sg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),o&4&&(Ua(3,t,t.return),mo(3,t),Ua(5,t,t.return));break;case 1:qn(n,t),Yn(t),o&512&&(rn||a===null||Oi(a,a.return)),o&64&&oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=xi;if(qn(n,t),Yn(t),o&512&&(rn||a===null||Oi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ba]||h[hn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),An(h,o,a),h[hn]=t,tn(h),o=h;break e;case"link":var b=m0("link","href",u).get(o+(a.href||""));if(b){for(var w=0;w<b.length;w++)if(h=b[w],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(w,1);break t}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;case"meta":if(b=m0("meta","content",u).get(o+(a.content||""))){for(w=0;w<b.length;w++)if(h=b[w],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(w,1);break t}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[hn]=t,tn(h),o=h}t.stateNode=o}else g0(u,t.type,t.stateNode);else t.stateNode=p0(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?g0(u,t.type,t.stateNode):p0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&_f(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),o&512&&(rn||a===null||Oi(a,a.return)),a!==null&&o&4&&_f(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),o&512&&(rn||a===null||Oi(a,a.return)),t.flags&32){u=t.stateNode;try{Yt(u,"")}catch(ce){jt(t,t.return,ce)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,_f(t,u,a!==null?a.memoizedProps:u)),o&1024&&(bf=!0);break;case 6:if(qn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ce){jt(t,t.return,ce)}}break;case 3:if(rc=null,u=xi,xi=ac(n.containerInfo),qn(n,t),xi=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(ce){jt(t,t.return,ce)}bf&&(bf=!1,bg(t));break;case 4:o=xi,xi=ac(t.stateNode.containerInfo),qn(n,t),Yn(t),xi=o;break;case 12:qn(n,t),Yn(t);break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cf=bt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Mf(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ie=oa,_e=rn;if(oa=ie||u,rn=_e||H,qn(n,t),rn=_e,oa=ie,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||oa||rn||gs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,u)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{w=H.stateNode;var Me=H.memoizedProps.style,oe=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;w.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(ce){jt(H,H.return,ce)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(ce){jt(H,H.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Mf(t,a))));break;case 19:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Mf(t,o)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(pg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=yf(t);Xl(t,h,u);break;case 5:var b=a.stateNode;a.flags&32&&(Yt(b,""),a.flags&=-33);var w=yf(t);Xl(t,w,b);break;case 3:case 4:var H=a.stateNode.containerInfo,ie=yf(t);Sf(t,ie,H);break;default:throw Error(s(161))}}catch(_e){jt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function La(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xg(t,n.alternate,n),n=n.sibling}function gs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),gs(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&dg(n,n.return,a),gs(n);break;case 27:To(n.stateNode);case 26:case 5:Oi(n,n.return),gs(n);break;case 22:n.memoizedState===null&&gs(n);break;case 30:gs(n);break;default:gs(n)}t=t.sibling}}function Oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,b=h.flags;switch(h.tag){case 0:case 11:case 15:Oa(u,h,a),mo(4,h);break;case 1:if(Oa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){jt(o,o.return,ie)}if(o=h,u=o.updateQueue,u!==null){var w=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Qp(H[u],w)}catch(ie){jt(o,o.return,ie)}}a&&b&64&&fg(h),go(h,h.return);break;case 27:mg(h);case 26:case 5:Oa(u,h,a),a&&o===null&&b&4&&hg(h),go(h,h.return);break;case 12:Oa(u,h,a);break;case 13:Oa(u,h,a),a&&b&4&&yg(u,h);break;case 22:h.memoizedState===null&&Oa(u,h,a),go(h,h.return);break;case 30:break;default:Oa(u,h,a)}n=n.sibling}}function Ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&eo(a))}function Tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t))}function Pi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mg(t,n,a,o),n=n.sibling}function Mg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(t,n,a,o),u&2048&&mo(9,n);break;case 1:Pi(t,n,a,o);break;case 3:Pi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t)));break;case 12:if(u&2048){Pi(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,b=h.id,w=h.onPostCommit;typeof w=="function"&&w(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){jt(n,n.return,H)}}else Pi(t,n,a,o);break;case 13:Pi(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,b=n.alternate,n.memoizedState!==null?h._visibility&2?Pi(t,n,a,o):xo(t,n):h._visibility&2?Pi(t,n,a,o):(h._visibility|=2,ar(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Ef(b,n);break;case 24:Pi(t,n,a,o),u&2048&&Tf(n.alternate,n);break;default:Pi(t,n,a,o)}}function ar(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,b=n,w=a,H=o,ie=b.flags;switch(b.tag){case 0:case 11:case 15:ar(h,b,w,H,u),mo(8,b);break;case 23:break;case 22:var _e=b.stateNode;b.memoizedState!==null?_e._visibility&2?ar(h,b,w,H,u):xo(h,b):(_e._visibility|=2,ar(h,b,w,H,u)),u&&ie&2048&&Ef(b.alternate,b);break;case 24:ar(h,b,w,H,u),u&&ie&2048&&Tf(b.alternate,b);break;default:ar(h,b,w,H,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:xo(a,o),u&2048&&Ef(o.alternate,o);break;case 24:xo(a,o),u&2048&&Tf(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var vo=8192;function sr(t){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)Eg(t),t=t.sibling}function Eg(t){switch(t.tag){case 26:sr(t),t.flags&vo&&t.memoizedState!==null&&Iy(xi,t.memoizedState,t.memoizedProps);break;case 5:sr(t);break;case 3:case 4:var n=xi;xi=ac(t.stateNode.containerInfo),sr(t),xi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=vo,vo=16777216,sr(t),vo=n):sr(t));break;default:sr(t)}}function Tg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,wg(o,t)}Tg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ag(t),t=t.sibling}function Ag(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Wl(t)):_o(t);break;default:_o(t)}}function Wl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,wg(o,t)}Tg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}t=t.sibling}}function wg(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var u=o.sibling,h=o.return;if(vg(o),o===a){Sn=null;break e}if(u!==null){u.return=h,Sn=u;break e}Sn=h}}}var J_={getCacheForType:function(t){var n=Rn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},$_=typeof WeakMap=="function"?WeakMap:Map,It=0,Xt=null,gt=null,Mt=0,Ft=0,Zn=null,Pa=!1,rr=!1,Af=!1,ca=0,$t=0,Ia=0,xs=0,wf=0,ri=0,or=0,yo=null,Vn=null,Rf=!1,Cf=0,ql=1/0,Yl=null,Fa=null,Tn=0,Ba=null,lr=null,cr=0,Nf=0,Df=null,Rg=null,So=0,Uf=null;function Kn(){if((It&2)!==0&&Mt!==0)return Mt&-Mt;if(I.T!==null){var t=Ks;return t!==0?t:zf()}return At()}function Cg(){ri===0&&(ri=(Mt&536870912)===0||Ut?W():536870912);var t=si.current;return t!==null&&(t.flags|=32),ri}function Qn(t,n,a){(t===Xt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(ur(t,0),za(t,Mt,ri,!1)),He(t,a),((It&2)===0||t!==Xt)&&(t===Xt&&((It&2)===0&&(xs|=a),$t===4&&za(t,Mt,ri,!1)),Ii(t))}function Ng(t,n,a){if((It&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=o?ny(t,n):Pf(t,n,!0),h=o;do{if(u===0){rr&&!o&&za(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!ey(a)){u=Pf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var w=t;u=yo;var H=w.current.memoizedState.isDehydrated;if(H&&(ur(w,b).flags|=256),b=Pf(w,b,!1),b!==2){if(Af&&!H){w.errorRecoveryDisabledLanes|=h,xs|=h,u=4;break e}h=Vn,Vn=u,h!==null&&(Vn===null?Vn=h:Vn.push.apply(Vn,h))}u=b}if(h=!1,u!==2)continue}}if(u===1){ur(t,0),za(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:za(o,n,ri,!Pa);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Cf+300-bt(),10<u)){if(za(o,n,ri,!Pa),ze(o,0,!0)!==0)break e;o.timeoutHandle=s0(Dg.bind(null,o,a,Vn,Yl,Rf,n,ri,xs,or,Pa,h,2,-0,0),u);break e}Dg(o,a,Vn,Yl,Rf,n,ri,xs,or,Pa,h,0,-0,0)}}break}while(!0);Ii(t)}function Dg(t,n,a,o,u,h,b,w,H,ie,_e,Me,oe,ce){if(t.timeoutHandle=-1,Me=n.subtreeFlags,(Me&8192||(Me&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:Py},Eg(n),Me=Fy(),Me!==null)){t.cancelPendingCommit=Me(Bg.bind(null,t,n,h,a,o,u,b,w,H,_e,1,oe,ce)),za(t,h,b,!ie);return}Bg(t,n,h,a,o,u,b,w,H)}function ey(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Xn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(t,n,a,o){n&=~wf,n&=~xs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-F(u),b=1<<h;o[h]=-1,u&=~b}a!==0&&me(t,a,n)}function Zl(){return(It&6)===0?(bo(0),!1):!0}function Lf(){if(gt!==null){if(Ft===0)var t=gt.return;else t=gt,ta=fs=null,Zu(t),nr=null,fo=0,t=gt;for(;t!==null;)ug(t.alternate,t),t=t.return;gt=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,vy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Lf(),Xt=t,gt=a=Ji(t.current,null),Mt=n,Ft=0,Zn=null,Pa=!1,rr=Pe(t,n),Af=!1,or=ri=wf=xs=Ia=$t=0,Vn=yo=null,Rf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-F(o),h=1<<u;n|=t[u],o&=~h}return ca=n,xl(),a}function Ug(t,n){pt=null,I.H=Il,n===no||n===Al?(n=Zp(),Ft=3):n===Wp?(n=Zp(),Ft=4):Ft=n===Km?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,gt===null&&($t=1,Vl(t,ti(n,t.current)))}function Lg(){var t=I.H;return I.H=Il,t===null?Il:t}function Og(){var t=I.A;return I.A=J_,t}function Of(){$t=4,Pa||(Mt&4194048)!==Mt&&si.current!==null||(rr=!0),(Ia&134217727)===0&&(xs&134217727)===0||Xt===null||za(Xt,Mt,ri,!1)}function Pf(t,n,a){var o=It;It|=2;var u=Lg(),h=Og();(Xt!==t||Mt!==n)&&(Yl=null,ur(t,n)),n=!1;var b=$t;e:do try{if(Ft!==0&&gt!==null){var w=gt,H=Zn;switch(Ft){case 8:Lf(),b=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var ie=Ft;if(Ft=0,Zn=null,fr(t,w,H,ie),a&&rr){b=0;break e}break;default:ie=Ft,Ft=0,Zn=null,fr(t,w,H,ie)}}ty(),b=$t;break}catch(_e){Ug(t,_e)}while(!0);return n&&t.shellSuspendCounter++,ta=fs=null,It=o,I.H=u,I.A=h,gt===null&&(Xt=null,Mt=0,xl()),b}function ty(){for(;gt!==null;)Pg(gt)}function ny(t,n){var a=It;It|=2;var o=Lg(),u=Og();Xt!==t||Mt!==n?(Yl=null,ql=bt()+500,ur(t,n)):rr=Pe(t,n);e:do try{if(Ft!==0&&gt!==null){n=gt;var h=Zn;t:switch(Ft){case 1:Ft=0,Zn=null,fr(t,n,h,1);break;case 2:case 9:if(qp(h)){Ft=0,Zn=null,Ig(n);break}n=function(){Ft!==2&&Ft!==9||Xt!==t||(Ft=7),Ii(t)},h.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:qp(h)?(Ft=0,Zn=null,Ig(n)):(Ft=0,Zn=null,fr(t,n,h,7));break;case 5:var b=null;switch(gt.tag){case 26:b=gt.memoizedState;case 5:case 27:var w=gt;if(!b||x0(b)){Ft=0,Zn=null;var H=w.sibling;if(H!==null)gt=H;else{var ie=w.return;ie!==null?(gt=ie,Kl(ie)):gt=null}break t}}Ft=0,Zn=null,fr(t,n,h,5);break;case 6:Ft=0,Zn=null,fr(t,n,h,6);break;case 8:Lf(),$t=6;break e;default:throw Error(s(462))}}iy();break}catch(_e){Ug(t,_e)}while(!0);return ta=fs=null,I.H=o,I.A=u,It=a,gt!==null?0:(Xt=null,Mt=0,xl(),$t)}function iy(){for(;gt!==null&&!Ct();)Pg(gt)}function Pg(t){var n=lg(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?Kl(t):gt=n}function Ig(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ng(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=ng(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:Zu(n);default:ug(a,n),n=gt=Fp(n,ca),n=lg(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?Kl(t):gt=n}function fr(t,n,a,o){ta=fs=null,Zu(n),nr=null,fo=0;var u=n.return;try{if(W_(t,u,n,a,Mt)){$t=1,Vl(t,ti(a,t.current)),gt=null;return}}catch(h){if(u!==null)throw gt=u,h;$t=1,Vl(t,ti(a,t.current)),gt=null;return}n.flags&32768?(Ut||o===1?t=!0:rr||(Mt&536870912)!==0?t=!1:(Pa=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Fg(n,t)):Kl(n)}function Kl(t){var n=t;do{if((n.flags&32768)!==0){Fg(n,Pa);return}t=n.return;var a=Y_(n.alternate,n,ca);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);$t===0&&($t=5)}function Fg(t,n){do{var a=Z_(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);$t=6,gt=null}function Bg(t,n,a,o,u,h,b,w,H){t.cancelPendingCommit=null;do Ql();while(Tn!==0);if((It&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Eu,Re(t,a,h,b,w,H),t===Xt&&(gt=Xt=null,Mt=0),lr=n,Ba=t,cr=a,Nf=h,Df=u,Rg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,oy(Et,function(){return jg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=z.p,z.p=2,b=It,It|=4;try{K_(t,n,a)}finally{It=b,z.p=u,I.T=o}}Tn=1,zg(),Hg(),Vg()}}function zg(){if(Tn===1){Tn=0;var t=Ba,n=lr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=z.p;z.p=2;var u=It;It|=4;try{Sg(n,t);var h=qf,b=wp(t.containerInfo),w=h.focusedElem,H=h.selectionRange;if(b!==w&&w&&w.ownerDocument&&Ap(w.ownerDocument.documentElement,w)){if(H!==null&&_u(w)){var ie=H.start,_e=H.end;if(_e===void 0&&(_e=ie),"selectionStart"in w)w.selectionStart=ie,w.selectionEnd=Math.min(_e,w.value.length);else{var Me=w.ownerDocument||document,oe=Me&&Me.defaultView||window;if(oe.getSelection){var ce=oe.getSelection(),it=w.textContent.length,et=Math.min(H.start,it),Vt=H.end===void 0?et:Math.min(H.end,it);!ce.extend&&et>Vt&&(b=Vt,Vt=et,et=b);var Z=Tp(w,et),X=Tp(w,Vt);if(Z&&X&&(ce.rangeCount!==1||ce.anchorNode!==Z.node||ce.anchorOffset!==Z.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var $=Me.createRange();$.setStart(Z.node,Z.offset),ce.removeAllRanges(),et>Vt?(ce.addRange($),ce.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ce.addRange($))}}}}for(Me=[],ce=w;ce=ce.parentNode;)ce.nodeType===1&&Me.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Me.length;w++){var be=Me[w];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}cc=!!Wf,qf=Wf=null}finally{It=u,z.p=o,I.T=a}}t.current=n,Tn=2}}function Hg(){if(Tn===2){Tn=0;var t=Ba,n=lr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=z.p;z.p=2;var u=It;It|=4;try{xg(t,n.alternate,n)}finally{It=u,z.p=o,I.T=a}}Tn=3}}function Vg(){if(Tn===4||Tn===3){Tn=0,ot();var t=Ba,n=lr,a=cr,o=Rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,lr=Ba=null,Gg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Fa=null),Ot(a),n=n.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(ge,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=z.p,z.p=2,I.T=null;try{for(var h=t.onRecoverableError,b=0;b<o.length;b++){var w=o[b];h(w.value,{componentStack:w.stack})}}finally{I.T=n,z.p=u}}(cr&3)!==0&&Ql(),Ii(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Uf?So++:(So=0,Uf=t):So=0,bo(0)}}function Gg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,eo(n)))}function Ql(t){return zg(),Hg(),Vg(),jg()}function jg(){if(Tn!==5)return!1;var t=Ba,n=Nf;Nf=0;var a=Ot(cr),o=I.T,u=z.p;try{z.p=32>a?32:a,I.T=null,a=Df,Df=null;var h=Ba,b=cr;if(Tn=0,lr=Ba=null,cr=0,(It&6)!==0)throw Error(s(331));var w=It;if(It|=4,Ag(h.current),Mg(h,h.current,b,a),It=w,bo(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(ge,h)}catch{}return!0}finally{z.p=u,I.T=o,Gg(t,n)}}function kg(t,n,a){n=ti(a,n),n=uf(t.stateNode,n,2),t=Ra(t,n,2),t!==null&&(He(t,2),Ii(t))}function jt(t,n,a){if(t.tag===3)kg(t,t,a);else for(;n!==null;){if(n.tag===3){kg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fa===null||!Fa.has(o))){t=ti(a,t),a=Ym(2),o=Ra(n,a,2),o!==null&&(Zm(a,o,n,t),He(o,2),Ii(o));break}}n=n.return}}function If(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new $_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),t=ay.bind(null,t,n,a),n.then(t,t))}function ay(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(Mt&a)===a&&($t===4||$t===3&&(Mt&62914560)===Mt&&300>bt()-Cf?(It&2)===0&&ur(t,0):wf|=a,or===Mt&&(or=0)),Ii(t)}function Xg(t,n){n===0&&(n=Ne()),t=Ws(t,n),t!==null&&(He(t,n),Ii(t))}function sy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Xg(t,a)}function ry(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Xg(t,a)}function oy(t,n){return st(t,n)}var Jl=null,dr=null,Ff=!1,$l=!1,Bf=!1,vs=0;function Ii(t){t!==dr&&t.next===null&&(dr===null?Jl=dr=t:dr=dr.next=t),$l=!0,Ff||(Ff=!0,cy())}function bo(t,n){if(!Bf&&$l){Bf=!0;do for(var a=!1,o=Jl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var b=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-F(42|t)+1)-1,h&=u&~(b&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Zg(o,h))}else h=Mt,h=ze(o,o===Xt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Pe(o,h)||(a=!0,Zg(o,h));o=o.next}while(a);Bf=!1}}function ly(){Wg()}function Wg(){$l=Ff=!1;var t=0;vs!==0&&(xy()&&(t=vs),vs=0);for(var n=bt(),a=null,o=Jl;o!==null;){var u=o.next,h=qg(o,n);h===0?(o.next=null,a===null?Jl=u:a.next=u,u===null&&(dr=a)):(a=o,(t!==0||(h&3)!==0)&&($l=!0)),o=u}bo(t)}function qg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-F(h),w=1<<b,H=u[b];H===-1?((w&a)===0||(w&o)!==0)&&(u[b]=ut(w,n)):H<=n&&(t.expiredLanes|=w),h&=~w}if(n=Xt,a=Mt,a=ze(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&_t(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&_t(o),Ot(a)){case 2:case 8:a=yt;break;case 32:a=Et;break;case 268435456:a=U;break;default:a=Et}return o=Yg.bind(null,t),a=st(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&_t(o),t.callbackPriority=2,t.callbackNode=null,2}function Yg(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ql()&&t.callbackNode!==a)return null;var o=Mt;return o=ze(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ng(t,o,n),qg(t,bt()),t.callbackNode!=null&&t.callbackNode===a?Yg.bind(null,t):null)}function Zg(t,n){if(Ql())return null;Ng(t,n,!0)}function cy(){_y(function(){(It&6)!==0?st(Wt,ly):Wg()})}function zf(){return vs===0&&(vs=W()),vs}function Kg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ul(""+t)}function Qg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function uy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Kg((u[_n]||null).action),b=o.submitter;b&&(n=(n=b[_n]||null)?Kg(n.formAction):b.getAttribute("formAction"),n!==null&&(h=n,b=null));var w=new pl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(vs!==0){var H=b?Qg(u,b):new FormData(u);sf(a,{pending:!0,data:H,method:u.method,action:h},null,H)}}else typeof h=="function"&&(w.preventDefault(),H=b?Qg(u,b):new FormData(u),sf(a,{pending:!0,data:H,method:u.method,action:h},h,H))},currentTarget:u}]})}}for(var Hf=0;Hf<Mu.length;Hf++){var Vf=Mu[Hf],fy=Vf.toLowerCase(),dy=Vf[0].toUpperCase()+Vf.slice(1);gi(fy,"on"+dy)}gi(Np,"onAnimationEnd"),gi(Dp,"onAnimationIteration"),gi(Up,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(C_,"onTransitionRun"),gi(N_,"onTransitionStart"),gi(D_,"onTransitionCancel"),gi(Lp,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),Zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Jg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var b=o.length-1;0<=b;b--){var w=o[b],H=w.instance,ie=w.currentTarget;if(w=w.listener,H!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ie;try{h(u)}catch(_e){Hl(_e)}u.currentTarget=null,h=H}else for(b=0;b<o.length;b++){if(w=o[b],H=w.instance,ie=w.currentTarget,w=w.listener,H!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ie;try{h(u)}catch(_e){Hl(_e)}u.currentTarget=null,h=H}}}}function xt(t,n){var a=n[Fs];a===void 0&&(a=n[Fs]=new Set);var o=t+"__bubble";a.has(o)||($g(n,t,2,!1),a.add(o))}function Gf(t,n,a){var o=0;n&&(o|=4),$g(a,t,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function jf(t){if(!t[ec]){t[ec]=!0,rl.forEach(function(a){a!=="selectionchange"&&(hy.has(a)||Gf(a,!1,t),Gf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ec]||(n[ec]=!0,Gf("selectionchange",!1,n))}}function $g(t,n,a,o){switch(M0(n)){case 2:var u=Hy;break;case 8:u=Vy;break;default:u=id}a=u.bind(null,n,a,t),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function kf(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var w=o.stateNode.containerInfo;if(w===u)break;if(b===4)for(b=o.return;b!==null;){var H=b.tag;if((H===3||H===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;w!==null;){if(b=pi(w),b===null)return;if(H=b.tag,H===5||H===6||H===26||H===27){o=h=b;continue e}w=w.parentNode}}o=o.return}rp(function(){var ie=h,_e=lu(a),Me=[];e:{var oe=Op.get(t);if(oe!==void 0){var ce=pl,it=t;switch(t){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":ce=o_;break;case"focusin":it="focus",ce=pu;break;case"focusout":it="blur",ce=pu;break;case"beforeblur":case"afterblur":ce=pu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=u_;break;case Np:case Dp:case Up:ce=Jv;break;case Lp:ce=d_;break;case"scroll":case"scrollend":ce=qv;break;case"wheel":ce=p_;break;case"copy":case"cut":case"paste":ce=e_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=fp;break;case"toggle":case"beforetoggle":ce=g_}var et=(n&4)!==0,Vt=!et&&(t==="scroll"||t==="scrollend"),Z=et?oe!==null?oe+"Capture":null:oe;et=[];for(var X=ie,$;X!==null;){var be=X;if($=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||$===null||Z===null||(be=Vr(X,Z),be!=null&&et.push(Eo(X,be,$))),Vt)break;X=X.return}0<et.length&&(oe=new ce(oe,it,null,a,_e),Me.push({event:oe,listeners:et}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",oe&&a!==ou&&(it=a.relatedTarget||a.fromElement)&&(pi(it)||it[Sa]))break e;if((ce||oe)&&(oe=_e.window===_e?_e:(oe=_e.ownerDocument)?oe.defaultView||oe.parentWindow:window,ce?(it=a.relatedTarget||a.toElement,ce=ie,it=it?pi(it):null,it!==null&&(Vt=c(it),et=it.tag,it!==Vt||et!==5&&et!==27&&et!==6)&&(it=null)):(ce=null,it=ie),ce!==it)){if(et=cp,be="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(et=fp,be="onPointerLeave",Z="onPointerEnter",X="pointer"),Vt=ce==null?oe:Ci(ce),$=it==null?oe:Ci(it),oe=new et(be,X+"leave",ce,a,_e),oe.target=Vt,oe.relatedTarget=$,be=null,pi(_e)===ie&&(et=new et(Z,X+"enter",it,a,_e),et.target=$,et.relatedTarget=Vt,be=et),Vt=be,ce&&it)t:{for(et=ce,Z=it,X=0,$=et;$;$=hr($))X++;for($=0,be=Z;be;be=hr(be))$++;for(;0<X-$;)et=hr(et),X--;for(;0<$-X;)Z=hr(Z),$--;for(;X--;){if(et===Z||Z!==null&&et===Z.alternate)break t;et=hr(et),Z=hr(Z)}et=null}else et=null;ce!==null&&e0(Me,oe,ce,et,!1),it!==null&&Vt!==null&&e0(Me,Vt,it,et,!0)}}e:{if(oe=ie?Ci(ie):window,ce=oe.nodeName&&oe.nodeName.toLowerCase(),ce==="select"||ce==="input"&&oe.type==="file")var Xe=_p;else if(xp(oe))if(yp)Xe=A_;else{Xe=E_;var mt=M_}else ce=oe.nodeName,!ce||ce.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ie&&Di(ie.elementType)&&(Xe=_p):Xe=T_;if(Xe&&(Xe=Xe(t,ie))){vp(Me,Xe,a,_e);break e}mt&&mt(t,oe,ie),t==="focusout"&&ie&&oe.type==="number"&&ie.memoizedProps.value!=null&&In(oe,"number",oe.value)}switch(mt=ie?Ci(ie):window,t){case"focusin":(xp(mt)||mt.contentEditable==="true")&&(js=mt,yu=ie,Zr=null);break;case"focusout":Zr=yu=js=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Rp(Me,a,_e);break;case"selectionchange":if(R_)break;case"keydown":case"keyup":Rp(Me,a,_e)}var Ke;if(gu)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Gs?mp(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(dp&&a.locale!=="ko"&&(Gs||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Gs&&(Ke=op()):(Ea=_e,fu="value"in Ea?Ea.value:Ea.textContent,Gs=!0)),mt=tc(ie,tt),0<mt.length&&(tt=new up(tt,t,null,a,_e),Me.push({event:tt,listeners:mt}),Ke?tt.data=Ke:(Ke=gp(a),Ke!==null&&(tt.data=Ke)))),(Ke=v_?__(t,a):y_(t,a))&&(tt=tc(ie,"onBeforeInput"),0<tt.length&&(mt=new up("onBeforeInput","beforeinput",null,a,_e),Me.push({event:mt,listeners:tt}),mt.data=Ke)),uy(Me,t,ie,a,_e)}Jg(Me,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Vr(t,a),u!=null&&o.unshift(Eo(t,u,h)),u=Vr(t,n),u!=null&&o.push(Eo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function e0(t,n,a,o,u){for(var h=n._reactName,b=[];a!==null&&a!==o;){var w=a,H=w.alternate,ie=w.stateNode;if(w=w.tag,H!==null&&H===o)break;w!==5&&w!==26&&w!==27||ie===null||(H=ie,u?(ie=Vr(a,h),ie!=null&&b.unshift(Eo(a,ie,H))):u||(ie=Vr(a,h),ie!=null&&b.push(Eo(a,ie,H)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var py=/\r\n?/g,my=/\u0000|\uFFFD/g;function t0(t){return(typeof t=="string"?t:""+t).replace(py,`
`).replace(my,"")}function n0(t,n){return n=t0(n),t0(t)===n}function nc(){}function Ht(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Yt(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Yt(t,""+o);break;case"className":ae(t,"class",o);break;case"tabIndex":ae(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(t,a,o);break;case"style":mi(t,o,h);break;case"data":if(n!=="object"){ae(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ul(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ht(t,n,"name",u.name,u,null),Ht(t,n,"formEncType",u.formEncType,u,null),Ht(t,n,"formMethod",u.formMethod,u,null),Ht(t,n,"formTarget",u.formTarget,u,null)):(Ht(t,n,"encType",u.encType,u,null),Ht(t,n,"method",u.method,u,null),Ht(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ul(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=nc);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ul(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),ue(t,"popover",o);break;case"xlinkActuate":J(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":J(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":J(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":J(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":J(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":J(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":J(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":J(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":J(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ue(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=cl.get(a)||a,ue(t,a,o))}}function Xf(t,n,a,o,u,h){switch(a){case"style":mi(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Yt(t,o):(typeof o=="number"||typeof o=="bigint")&&Yt(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=nc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ol.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[_n]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ue(t,a,o)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var b=a[h];if(b!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,h,b,a,null)}}u&&Ht(t,n,"srcSet",a.srcSet,a,null),o&&Ht(t,n,"src",a.src,a,null);return;case"input":xt("invalid",t);var w=h=b=u=null,H=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":b=_e;break;case"checked":H=_e;break;case"defaultChecked":ie=_e;break;case"value":h=_e;break;case"defaultValue":w=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(s(137,n));break;default:Ht(t,n,o,_e,a,null)}}Pn(t,h,w,H,ie,b,u,!1),Gt(t);return;case"select":xt("invalid",t),o=b=h=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":b=w;break;case"multiple":o=w;default:Ht(t,n,u,w,a,null)}n=h,a=b,t.multiple=!!o,n!=null?Fn(t,!!o,n,!1):a!=null&&Fn(t,!!o,a,!0);return;case"textarea":xt("invalid",t),h=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(w=a[b],w!=null))switch(b){case"value":o=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Ht(t,n,b,w,a,null)}Pt(t,o,u,h),Gt(t);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ht(t,n,H,o,a,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<Mo.length;o++)xt(Mo[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,ie,o,a,null)}return;default:if(Di(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&Xf(t,n,_e,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Ht(t,n,w,o,a,null))}function gy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,b=null,w=null,H=null,ie=null,_e=null;for(ce in a){var Me=a[ce];if(a.hasOwnProperty(ce)&&Me!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=Me;default:o.hasOwnProperty(ce)||Ht(t,n,ce,null,o,Me)}}for(var oe in o){var ce=o[oe];if(Me=a[oe],o.hasOwnProperty(oe)&&(ce!=null||Me!=null))switch(oe){case"type":h=ce;break;case"name":u=ce;break;case"checked":ie=ce;break;case"defaultChecked":_e=ce;break;case"value":b=ce;break;case"defaultValue":w=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==Me&&Ht(t,n,oe,ce,o,Me)}}vt(t,b,w,H,ie,_e,h,u);return;case"select":ce=b=w=oe=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ce=H;default:o.hasOwnProperty(h)||Ht(t,n,h,null,o,H)}for(u in o)if(h=o[u],H=a[u],o.hasOwnProperty(u)&&(h!=null||H!=null))switch(u){case"value":oe=h;break;case"defaultValue":w=h;break;case"multiple":b=h;default:h!==H&&Ht(t,n,u,h,o,H)}n=w,a=b,o=ce,oe!=null?Fn(t,!!a,oe,!1):!!o!=!!a&&(n!=null?Fn(t,!!a,n,!0):Fn(t,!!a,a?[]:"",!1));return;case"textarea":ce=oe=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ht(t,n,w,null,o,u)}for(b in o)if(u=o[b],h=a[b],o.hasOwnProperty(b)&&(u!=null||h!=null))switch(b){case"value":oe=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ht(t,n,b,u,o,h)}Ki(t,oe,ce);return;case"option":for(var it in a)if(oe=a[it],a.hasOwnProperty(it)&&oe!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:Ht(t,n,it,null,o,oe)}for(H in o)if(oe=o[H],ce=a[H],o.hasOwnProperty(H)&&oe!==ce&&(oe!=null||ce!=null))switch(H){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Ht(t,n,H,oe,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)oe=a[et],a.hasOwnProperty(et)&&oe!=null&&!o.hasOwnProperty(et)&&Ht(t,n,et,null,o,oe);for(ie in o)if(oe=o[ie],ce=a[ie],o.hasOwnProperty(ie)&&oe!==ce&&(oe!=null||ce!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:Ht(t,n,ie,oe,o,ce)}return;default:if(Di(n)){for(var Vt in a)oe=a[Vt],a.hasOwnProperty(Vt)&&oe!==void 0&&!o.hasOwnProperty(Vt)&&Xf(t,n,Vt,void 0,o,oe);for(_e in o)oe=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||oe===ce||oe===void 0&&ce===void 0||Xf(t,n,_e,oe,o,ce);return}}for(var Z in a)oe=a[Z],a.hasOwnProperty(Z)&&oe!=null&&!o.hasOwnProperty(Z)&&Ht(t,n,Z,null,o,oe);for(Me in o)oe=o[Me],ce=a[Me],!o.hasOwnProperty(Me)||oe===ce||oe==null&&ce==null||Ht(t,n,Me,oe,o,ce)}var Wf=null,qf=null;function ic(t){return t.nodeType===9?t:t.ownerDocument}function i0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function xy(){var t=window.event;return t&&t.type==="popstate"?t===Zf?!1:(Zf=t,!0):(Zf=null,!1)}var s0=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,r0=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(t){return r0.resolve(null).then(t).catch(yy)}:s0;function yy(t){setTimeout(function(){throw t})}function Ha(t){return t==="head"}function o0(t,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var b=t.ownerDocument;if(a&1&&To(b.documentElement),a&2&&To(b.body),a&4)for(a=b.head,To(a),b=a.firstChild;b;){var w=b.nextSibling,H=b.nodeName;b[ba]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&b.rel.toLowerCase()==="stylesheet"||a.removeChild(b),b=w}}if(u===0){t.removeChild(h),Lo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Lo(n)}function Kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Sy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function by(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function Qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function My(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Jf=null;function l0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function c0(t,n,a){switch(n=ic(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zs(t)}var oi=new Map,u0=new Set;function ac(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=z.d;z.d={f:Ey,r:Ty,D:Ay,C:wy,L:Ry,m:Cy,X:Dy,S:Ny,M:Uy};function Ey(){var t=ua.f(),n=Zl();return t||n}function Ty(t){var n=qi(t);n!==null&&n.tag===5&&n.type==="form"?Nm(n):ua.r(t)}var pr=typeof document>"u"?null:document;function f0(t,n,a){var o=pr;if(o&&typeof n=="string"&&n){var u=kt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),u0.has(u)||(u0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",t),tn(n),o.head.appendChild(n)))}}function Ay(t){ua.D(t),f0("dns-prefetch",t,null)}function wy(t,n){ua.C(t,n),f0("preconnect",t,n)}function Ry(t,n,a){ua.L(t,n,a);var o=pr;if(o&&t&&n){var u='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+kt(a.imageSizes)+'"]')):u+='[href="'+kt(t)+'"]';var h=u;switch(n){case"style":h=mr(t);break;case"script":h=gr(t)}oi.has(h)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(h))||n==="script"&&o.querySelector(wo(h))||(n=o.createElement("link"),An(n,"link",t),tn(n),o.head.appendChild(n)))}}function Cy(t,n){ua.m(t,n);var a=pr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+kt(o)+'"][href="'+kt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=gr(t)}if(!oi.has(h)&&(t=x({rel:"modulepreload",href:t},n),oi.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(h)))return}o=a.createElement("link"),An(o,"link",t),tn(o),a.head.appendChild(o)}}}function Ny(t,n,a){ua.S(t,n,a);var o=pr;if(o&&t){var u=Yi(o).hoistableStyles,h=mr(t);n=n||"default";var b=u.get(h);if(!b){var w={loading:0,preload:null};if(b=o.querySelector(Ao(h)))w.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(h))&&$f(t,a);var H=b=o.createElement("link");tn(H),An(H,"link",t),H._p=new Promise(function(ie,_e){H.onload=ie,H.onerror=_e}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,sc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:w},u.set(h,b)}}}function Dy(t,n){ua.X(t,n);var a=pr;if(a&&t){var o=Yi(a).hoistableScripts,u=gr(t),h=o.get(u);h||(h=a.querySelector(wo(u)),h||(t=x({src:t,async:!0},n),(n=oi.get(u))&&ed(t,n),h=a.createElement("script"),tn(h),An(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Uy(t,n){ua.M(t,n);var a=pr;if(a&&t){var o=Yi(a).hoistableScripts,u=gr(t),h=o.get(u);h||(h=a.querySelector(wo(u)),h||(t=x({src:t,async:!0,type:"module"},n),(n=oi.get(u))&&ed(t,n),h=a.createElement("script"),tn(h),An(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function d0(t,n,a,o){var u=(u=te.current)?ac(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Yi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=mr(a.href);var h=Yi(u).hoistableStyles,b=h.get(t);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=u.querySelector(Ao(t)))&&!h._p&&(b.instance=h,b.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),h||Ly(u,t,a,b.state))),n&&o===null)throw Error(s(528,""));return b}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Yi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function mr(t){return'href="'+kt(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function h0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Ly(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),tn(n),t.head.appendChild(n))}function gr(t){return'[src="'+kt(t)+'"]'}function wo(t){return"script[async]"+t}function p0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+kt(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),An(o,"style",u),sc(o,a.precedence,t),n.instance=o;case"stylesheet":u=mr(a.href);var h=t.querySelector(Ao(u));if(h)return n.state.loading|=4,n.instance=h,tn(h),h;o=h0(a),(u=oi.get(u))&&$f(o,u),h=(t.ownerDocument||t).createElement("link"),tn(h);var b=h;return b._p=new Promise(function(w,H){b.onload=w,b.onerror=H}),An(h,"link",o),n.state.loading|=4,sc(h,a.precedence,t),n.instance=h;case"script":return h=gr(a.src),(u=t.querySelector(wo(h)))?(n.instance=u,tn(u),u):(o=a,(u=oi.get(h))&&(o=x({},a),ed(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),tn(u),An(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,t));return n.instance}function sc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,b=0;b<o.length;b++){var w=o[b];if(w.dataset.precedence===n)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var rc=null;function m0(t,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[ba]||h[hn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(n)||"";b=t+b;var w=o.get(b);w?w.push(h):o.set(b,[h])}}return o}function g0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Oy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function x0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ro=null;function Py(){}function Iy(t,n,a){if(Ro===null)throw Error(s(475));var o=Ro;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=mr(a.href),h=t.querySelector(Ao(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=oc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=h,tn(h);return}h=t.ownerDocument||t,a=h0(a),(u=oi.get(u))&&$f(a,u),h=h.createElement("link"),tn(h);var b=h;b._p=new Promise(function(w,H){b.onload=w,b.onerror=H}),An(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=oc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Fy(){if(Ro===null)throw Error(s(475));var t=Ro;return t.stylesheets&&t.count===0&&td(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&td(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function oc(){if(this.count--,this.count===0){if(this.stylesheets)td(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var lc=null;function td(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,lc=new Map,n.forEach(By,t),lc=null,oc.call(t))}function By(t,n){if(!(n.state.loading&4)){var a=lc.get(t);if(a)var o=a.get(null);else{a=new Map,lc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var b=u[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),h=a.get(b)||o,h===o&&a.set(null,u),a.set(b,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:P,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function zy(t,n,a,o,u,h,b,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function v0(t,n,a,o,u,h,b,w,H,ie,_e,Me){return t=new zy(t,n,a,b,w,H,ie,Me),n=1,h===!0&&(n|=24),h=Wn(3,null,null,n),t.current=h,h.stateNode=t,n=Pu(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},zu(h),t}function _0(t){return t?(t=qs,t):qs}function y0(t,n,a,o,u,h){u=_0(u),o.context===null?o.context=u:o.pendingContext=u,o=wa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ra(t,o,n),a!==null&&(Qn(a,t,n),ao(a,t,n))}function S0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nd(t,n){S0(t,n),(t=t.alternate)&&S0(t,n)}function b0(t){if(t.tag===13){var n=Ws(t,67108864);n!==null&&Qn(n,t,67108864),nd(t,67108864)}}var cc=!0;function Hy(t,n,a,o){var u=I.T;I.T=null;var h=z.p;try{z.p=2,id(t,n,a,o)}finally{z.p=h,I.T=u}}function Vy(t,n,a,o){var u=I.T;I.T=null;var h=z.p;try{z.p=8,id(t,n,a,o)}finally{z.p=h,I.T=u}}function id(t,n,a,o){if(cc){var u=ad(o);if(u===null)kf(t,n,o,uc,a),E0(t,o);else if(jy(u,t,n,a,o))o.stopPropagation();else if(E0(t,o),n&4&&-1<Gy.indexOf(t)){for(;u!==null;){var h=qi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Be(h.pendingLanes);if(b!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;b;){var H=1<<31-F(b);w.entanglements[1]|=H,b&=~H}Ii(h),(It&6)===0&&(ql=bt()+500,bo(0))}}break;case 13:w=Ws(h,2),w!==null&&Qn(w,h,2),Zl(),nd(h,2)}if(h=ad(o),h===null&&kf(t,n,o,uc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else kf(t,n,o,null,a)}}function ad(t){return t=lu(t),sd(t)}var uc=null;function sd(t){if(uc=null,t=pi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uc=t,null}function M0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case Wt:return 2;case yt:return 8;case Et:case We:return 32;case U:return 268435456;default:return 32}default:return 32}}var rd=!1,Va=null,Ga=null,ja=null,No=new Map,Do=new Map,ka=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E0(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=qi(n),n!==null&&b0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function jy(t,n,a,o,u){switch(n){case"focusin":return Va=Uo(Va,t,n,a,o,u),!0;case"dragenter":return Ga=Uo(Ga,t,n,a,o,u),!0;case"mouseover":return ja=Uo(ja,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return No.set(h,Uo(No.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Do.set(h,Uo(Do.get(h)||null,t,n,a,o,u)),!0}return!1}function T0(t){var n=pi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,hi(t.priority,function(){if(a.tag===13){var o=Kn();o=nt(o);var u=Ws(a,o);u!==null&&Qn(u,a,o),nd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ad(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);ou=o,a.target.dispatchEvent(o),ou=null}else return n=qi(a),n!==null&&b0(n),t.blockedOn=a,!1;n.shift()}return!0}function A0(t,n,a){fc(t)&&a.delete(n)}function ky(){rd=!1,Va!==null&&fc(Va)&&(Va=null),Ga!==null&&fc(Ga)&&(Ga=null),ja!==null&&fc(ja)&&(ja=null),No.forEach(A0),Do.forEach(A0)}function dc(t,n){t.blockedOn===n&&(t.blockedOn=null,rd||(rd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ky)))}var hc=null;function w0(t){hc!==t&&(hc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hc===t&&(hc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(sd(o||a)===null)continue;break}var h=qi(a);h!==null&&(t.splice(n,3),n-=3,sf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Lo(t){function n(H){return dc(H,t)}Va!==null&&dc(Va,t),Ga!==null&&dc(Ga,t),ja!==null&&dc(ja,t),No.forEach(n),Do.forEach(n);for(var a=0;a<ka.length;a++){var o=ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)T0(a),a.blockedOn===null&&ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],b=u[_n]||null;if(typeof h=="function")b||w0(a);else if(b){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,b=h[_n]||null)w=b.formAction;else if(sd(u)!==null)continue}else w=b.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),w0(a)}}}function od(t){this._internalRoot=t}pc.prototype.render=od.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Kn();y0(a,o,t,n,null,null)},pc.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;y0(t.current,2,null,t,null,null),Zl(),n[Sa]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,t),a===0&&T0(t)}};var R0=e.version;if(R0!=="19.1.0")throw Error(s(527,R0,"19.1.0"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Xy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{ge=mc.inject(Xy),ve=mc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=km,h=Xm,b=Wm,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=v0(t,1,!1,null,null,a,o,u,h,b,w,null),t[Sa]=n.current,jf(t),new od(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",h=km,b=Xm,w=Wm,H=null,ie=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(H=a.unstable_transitionCallbacks),a.formState!==void 0&&(ie=a.formState)),n=v0(t,1,!0,n,a??null,o,u,h,b,w,H,ie),n.context=_0(null),a=n.current,o=Kn(),o=nt(o),u=wa(o),u.callback=null,Ra(a,u,o),a=o,n.current.lanes=a,He(n,a),Ii(n),t[Sa]=n.current,jf(t),new pc(n)},Po.version="19.1.0",Po}var B0;function nS(){if(B0)return ud.exports;B0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ud.exports=tS(),ud.exports}var iS=nS();const aS=Yx(iS);Kx();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)({}).hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},qo.apply(null,arguments)}var $a;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})($a||($a={}));const z0="popstate";function sS(r){r===void 0&&(r={});function e(l,c){let{pathname:f="/",search:m="",hash:g=""}=Ls(l.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Zd("",{pathname:f,search:m,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let g=l.location.href,p=g.indexOf("#");m=p===-1?g:g.slice(0,p)}return m+"#"+(typeof c=="string"?c:Yc(c))}function s(l,c){Wh(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(c)+")")}return oS(e,i,s,r)}function dn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Wh(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rS(){return Math.random().toString(36).substr(2,8)}function H0(r,e){return{usr:r.state,key:r.key,idx:e}}function Zd(r,e,i,s){return i===void 0&&(i=null),qo({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Ls(e):e,{state:i,key:e&&e.key||s||rS()})}function Yc(r){let{pathname:e="/",search:i="",hash:s=""}=r;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Ls(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substr(i),r=r.substr(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function oS(r,e,i,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,m=$a.Pop,g=null,p=x();p==null&&(p=0,f.replaceState(qo({},f.state,{idx:p}),""));function x(){return(f.state||{idx:null}).idx}function S(){m=$a.Pop;let _=x(),y=_==null?null:_-p;p=_,g&&g({action:m,location:C.location,delta:y})}function v(_,y){m=$a.Push;let N=Zd(C.location,_,y);i&&i(N,_),p=x()+1;let P=H0(N,p),D=C.createHref(N);try{f.pushState(P,"",D)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(D)}c&&g&&g({action:m,location:C.location,delta:1})}function M(_,y){m=$a.Replace;let N=Zd(C.location,_,y);i&&i(N,_),p=x();let P=H0(N,p),D=C.createHref(N);f.replaceState(P,"",D),c&&g&&g({action:m,location:C.location,delta:0})}function E(_){let y=l.location.origin!=="null"?l.location.origin:l.location.href,N=typeof _=="string"?_:Yc(_);return N=N.replace(/ $/,"%20"),dn(y,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,y)}let C={get action(){return m},get location(){return r(l,f)},listen(_){if(g)throw new Error("A history only accepts one active listener");return l.addEventListener(z0,S),g=_,()=>{l.removeEventListener(z0,S),g=null}},createHref(_){return e(l,_)},createURL:E,encodeLocation(_){let y=E(_);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:v,replace:M,go(_){return f.go(_)}};return C}var V0;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(V0||(V0={}));function lS(r,e,i){return i===void 0&&(i="/"),cS(r,e,i)}function cS(r,e,i,s){let l=typeof e=="string"?Ls(e):e,c=qh(l.pathname||"/",i);if(c==null)return null;let f=Qx(r);uS(f);let m=null,g=bS(c);for(let p=0;m==null&&p<f.length;++p)m=_S(f[p],g);return m}function Qx(r,e,i,s){e===void 0&&(e=[]),i===void 0&&(i=[]),s===void 0&&(s="");let l=(c,f,m)=>{let g={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};g.relativePath.startsWith("/")&&(dn(g.relativePath.startsWith(s),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(s.length));let p=ts([s,g.relativePath]),x=i.concat(g);c.children&&c.children.length>0&&(dn(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Qx(c.children,e,x,p)),!(c.path==null&&!c.index)&&e.push({path:p,score:xS(p,c.index),routesMeta:x})};return r.forEach((c,f)=>{var m;if(c.path===""||!((m=c.path)!=null&&m.includes("?")))l(c,f);else for(let g of Jx(c.path))l(c,f,g)}),e}function Jx(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Jx(s.join("/")),m=[];return m.push(...f.map(g=>g===""?c:[c,g].join("/"))),l&&m.push(...f),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function uS(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:vS(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}const fS=/^:[\w-]+$/,dS=3,hS=2,pS=1,mS=10,gS=-2,G0=r=>r==="*";function xS(r,e){let i=r.split("/"),s=i.length;return i.some(G0)&&(s+=gS),e&&(s+=hS),i.filter(l=>!G0(l)).reduce((l,c)=>l+(fS.test(c)?dS:c===""?pS:mS),s)}function vS(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function _S(r,e,i){let{routesMeta:s}=r,l={},c="/",f=[];for(let m=0;m<s.length;++m){let g=s[m],p=m===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",S=yS({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},x),v=g.route;if(!S)return null;Object.assign(l,S.params),f.push({params:l,pathname:ts([c,S.pathname]),pathnameBase:TS(ts([c,S.pathnameBase])),route:v}),S.pathnameBase!=="/"&&(c=ts([c,S.pathnameBase]))}return f}function yS(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=SS(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:s.reduce((p,x,S)=>{let{paramName:v,isOptional:M}=x;if(v==="*"){let C=m[S]||"";f=c.slice(0,c.length-C.length).replace(/(.)\/+$/,"$1")}const E=m[S];return M&&!E?p[v]=void 0:p[v]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function SS(r,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),Wh(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,g)=>(s.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function bS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wh(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function qh(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function MS(r,e){e===void 0&&(e="/");let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Ls(r):r,c;return i?(i=tv(i),i.startsWith("/")?c=j0(i.substring(1),"/"):c=j0(i,e)):c=e,{pathname:c,search:AS(s),hash:wS(l)}}function j0(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function pd(r,e,i,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ES(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function $x(r,e){let i=ES(r);return e?i.map((s,l)=>l===i.length-1?s.pathname:s.pathnameBase):i.map(s=>s.pathnameBase)}function ev(r,e,i,s){s===void 0&&(s=!1);let l;typeof r=="string"?l=Ls(r):(l=qo({},r),dn(!l.pathname||!l.pathname.includes("?"),pd("?","pathname","search",l)),dn(!l.pathname||!l.pathname.includes("#"),pd("#","pathname","hash",l)),dn(!l.search||!l.search.includes("#"),pd("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,m;if(f==null)m=i;else{let S=e.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),S-=1;l.pathname=v.join("/")}m=S>=0?e[S]:"/"}let g=MS(l,m),p=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!g.pathname.endsWith("/")&&(p||x)&&(g.pathname+="/"),g}const tv=r=>r.replace(/\/\/+/g,"/"),ts=r=>tv(r.join("/")),TS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),AS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,wS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function RS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const nv=["post","put","patch","delete"];new Set(nv);const CS=["get",...nv];new Set(CS);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)({}).hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Yo.apply(null,arguments)}const Yh=De.createContext(null),NS=De.createContext(null),Os=De.createContext(null),$o=De.createContext(null),Ps=De.createContext({outlet:null,matches:[],isDataRoute:!1}),iv=De.createContext(null);function DS(r,e){let{relative:i}=e===void 0?{}:e;el()||dn(!1);let{basename:s,navigator:l}=De.useContext(Os),{hash:c,pathname:f,search:m}=sv(r,{relative:i}),g=f;return s!=="/"&&(g=f==="/"?s:ts([s,f])),l.createHref({pathname:g,search:m,hash:c})}function el(){return De.useContext($o)!=null}function Is(){return el()||dn(!1),De.useContext($o).location}function US(){return De.useContext($o).navigationType}function av(r){De.useContext(Os).static||De.useLayoutEffect(r)}function LS(){let{isDataRoute:r}=De.useContext(Ps);return r?WS():OS()}function OS(){el()||dn(!1);let r=De.useContext(Yh),{basename:e,future:i,navigator:s}=De.useContext(Os),{matches:l}=De.useContext(Ps),{pathname:c}=Is(),f=JSON.stringify($x(l,i.v7_relativeSplatPath)),m=De.useRef(!1);return av(()=>{m.current=!0}),De.useCallback(function(p,x){if(x===void 0&&(x={}),!m.current)return;if(typeof p=="number"){s.go(p);return}let S=ev(p,JSON.parse(f),c,x.relative==="path");r==null&&e!=="/"&&(S.pathname=S.pathname==="/"?e:ts([e,S.pathname])),(x.replace?s.replace:s.push)(S,x.state,x)},[e,s,f,c,r])}function sv(r,e){let{relative:i}=e===void 0?{}:e,{future:s}=De.useContext(Os),{matches:l}=De.useContext(Ps),{pathname:c}=Is(),f=JSON.stringify($x(l,s.v7_relativeSplatPath));return De.useMemo(()=>ev(r,JSON.parse(f),c,i==="path"),[r,f,c,i])}function PS(r,e){return IS(r,e)}function IS(r,e,i,s){el()||dn(!1);let{navigator:l}=De.useContext(Os),{matches:c}=De.useContext(Ps),f=c[c.length-1],m=f?f.params:{};f&&f.pathname;let g=f?f.pathnameBase:"/";f&&f.route;let p=Is(),x;if(e){var S;let _=typeof e=="string"?Ls(e):e;g==="/"||(S=_.pathname)!=null&&S.startsWith(g)||dn(!1),x=_}else x=p;let v=x.pathname||"/",M=v;if(g!=="/"){let _=g.replace(/^\//,"").split("/");M="/"+v.replace(/^\//,"").split("/").slice(_.length).join("/")}let E=lS(r,{pathname:M}),C=VS(E&&E.map(_=>Object.assign({},_,{params:Object.assign({},m,_.params),pathname:ts([g,l.encodeLocation?l.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?g:ts([g,l.encodeLocation?l.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),c,i,s);return e&&C?De.createElement($o.Provider,{value:{location:Yo({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:$a.Pop}},C):C}function FS(){let r=XS(),e=RS(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return De.createElement(De.Fragment,null,De.createElement("h2",null,"Unexpected Application Error!"),De.createElement("h3",{style:{fontStyle:"italic"}},e),i?De.createElement("pre",{style:l},i):null,null)}const BS=De.createElement(FS,null);class zS extends De.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?De.createElement(Ps.Provider,{value:this.props.routeContext},De.createElement(iv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HS(r){let{routeContext:e,match:i,children:s}=r,l=De.useContext(Yh);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),De.createElement(Ps.Provider,{value:e},s)}function VS(r,e,i,s){var l;if(e===void 0&&(e=[]),i===void 0&&(i=null),s===void 0&&(s=null),r==null){var c;if(!i)return null;if(i.errors)r=i.matches;else if((c=s)!=null&&c.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let f=r,m=(l=i)==null?void 0:l.errors;if(m!=null){let x=f.findIndex(S=>S.route.id&&(m==null?void 0:m[S.route.id])!==void 0);x>=0||dn(!1),f=f.slice(0,Math.min(f.length,x+1))}let g=!1,p=-1;if(i&&s&&s.v7_partialHydration)for(let x=0;x<f.length;x++){let S=f[x];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(p=x),S.route.id){let{loaderData:v,errors:M}=i,E=S.route.loader&&v[S.route.id]===void 0&&(!M||M[S.route.id]===void 0);if(S.route.lazy||E){g=!0,p>=0?f=f.slice(0,p+1):f=[f[0]];break}}}return f.reduceRight((x,S,v)=>{let M,E=!1,C=null,_=null;i&&(M=m&&S.route.id?m[S.route.id]:void 0,C=S.route.errorElement||BS,g&&(p<0&&v===0?(qS("route-fallback"),E=!0,_=null):p===v&&(E=!0,_=S.route.hydrateFallbackElement||null)));let y=e.concat(f.slice(0,v+1)),N=()=>{let P;return M?P=C:E?P=_:S.route.Component?P=De.createElement(S.route.Component,null):S.route.element?P=S.route.element:P=x,De.createElement(HS,{match:S,routeContext:{outlet:x,matches:y,isDataRoute:i!=null},children:P})};return i&&(S.route.ErrorBoundary||S.route.errorElement||v===0)?De.createElement(zS,{location:i.location,revalidation:i.revalidation,component:C,error:M,children:N(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):N()},null)}var rv=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(rv||{}),ov=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(ov||{});function GS(r){let e=De.useContext(Yh);return e||dn(!1),e}function jS(r){let e=De.useContext(NS);return e||dn(!1),e}function kS(r){let e=De.useContext(Ps);return e||dn(!1),e}function lv(r){let e=kS(),i=e.matches[e.matches.length-1];return i.route.id||dn(!1),i.route.id}function XS(){var r;let e=De.useContext(iv),i=jS(),s=lv();return e!==void 0?e:(r=i.errors)==null?void 0:r[s]}function WS(){let{router:r}=GS(rv.UseNavigateStable),e=lv(ov.UseNavigateStable),i=De.useRef(!1);return av(()=>{i.current=!0}),De.useCallback(function(l,c){c===void 0&&(c={}),i.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,Yo({fromRouteId:e},c)))},[r,e])}const k0={};function qS(r,e,i){k0[r]||(k0[r]=!0)}function YS(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function zi(r){dn(!1)}function ZS(r){let{basename:e="/",children:i=null,location:s,navigationType:l=$a.Pop,navigator:c,static:f=!1,future:m}=r;el()&&dn(!1);let g=e.replace(/^\/*/,"/"),p=De.useMemo(()=>({basename:g,navigator:c,static:f,future:Yo({v7_relativeSplatPath:!1},m)}),[g,m,c,f]);typeof s=="string"&&(s=Ls(s));let{pathname:x="/",search:S="",hash:v="",state:M=null,key:E="default"}=s,C=De.useMemo(()=>{let _=qh(x,g);return _==null?null:{location:{pathname:_,search:S,hash:v,state:M,key:E},navigationType:l}},[g,x,S,v,M,E,l]);return C==null?null:De.createElement(Os.Provider,{value:p},De.createElement($o.Provider,{children:i,value:C}))}function KS(r){let{children:e,location:i}=r;return PS(Kd(e),i)}new Promise(()=>{});function Kd(r,e){e===void 0&&(e=[]);let i=[];return De.Children.forEach(r,(s,l)=>{if(!De.isValidElement(s))return;let c=[...e,l];if(s.type===De.Fragment){i.push.apply(i,Kd(s.props.children,c));return}s.type!==zi&&dn(!1),!s.props.index||!s.props.children||dn(!1);let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Kd(s.props.children,c)),i.push(f)}),i}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qd(){return Qd=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)({}).hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Qd.apply(null,arguments)}function QS(r,e){if(r==null)return{};var i={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(e.indexOf(s)!==-1)continue;i[s]=r[s]}return i}function JS(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function $S(r,e){return r.button===0&&(!e||e==="_self")&&!JS(r)}const eb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],tb="6";try{window.__reactRouterVersion=tb}catch{}const nb="startTransition",X0=Qy[nb];function ib(r){let{basename:e,children:i,future:s,window:l}=r,c=De.useRef();c.current==null&&(c.current=sS({window:l,v5Compat:!0}));let f=c.current,[m,g]=De.useState({action:f.action,location:f.location}),{v7_startTransition:p}=s||{},x=De.useCallback(S=>{p&&X0?X0(()=>g(S)):g(S)},[g,p]);return De.useLayoutEffect(()=>f.listen(x),[f,x]),De.useEffect(()=>YS(s),[s]),De.createElement(ZS,{basename:e,children:i,location:m.location,navigationType:m.action,navigator:f,future:s})}const ab=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zo=De.forwardRef(function(e,i){let{onClick:s,relative:l,reloadDocument:c,replace:f,state:m,target:g,to:p,preventScrollReset:x,viewTransition:S}=e,v=QS(e,eb),{basename:M}=De.useContext(Os),E,C=!1;if(typeof p=="string"&&sb.test(p)&&(E=p,ab))try{let P=new URL(window.location.href),D=p.startsWith("//")?new URL(P.protocol+p):new URL(p),B=qh(D.pathname,M);D.origin===P.origin&&B!=null?p=B+D.search+D.hash:C=!0}catch{}let _=DS(p,{relative:l}),y=rb(p,{replace:f,state:m,target:g,preventScrollReset:x,relative:l,viewTransition:S});function N(P){s&&s(P),P.defaultPrevented||y(P)}return De.createElement("a",Qd({},v,{href:E||_,onClick:C||c?s:N,ref:i,target:g}))});var W0;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(W0||(W0={}));var q0;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(q0||(q0={}));function rb(r,e){let{target:i,replace:s,state:l,preventScrollReset:c,relative:f,viewTransition:m}=e===void 0?{}:e,g=LS(),p=Is(),x=sv(r,{relative:f});return De.useCallback(S=>{if($S(S,i)){S.preventDefault();let v=s!==void 0?s:Yc(p)===Yc(x);g(r,{replace:v,state:l,preventScrollReset:c,relative:f,viewTransition:m})}},[p,g,x,s,l,i,r,c,f,m])}function ob(r){const e=Is(),i=US(),s=De.useRef({});De.useEffect(()=>{const l=r.current;if(!l)return;const c=e.pathname;return requestAnimationFrame(()=>{i==="POP"&&s.current[c]!==void 0?l.scrollTop=s.current[c]:l.scrollTo({top:0})}),()=>{s.current[c]=l.scrollTop}},[e.pathname,i,r])}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zh="183",lb=0,Y0=1,cb=2,Vc=1,ub=2,ko=3,ns=0,jn=1,ga=2,xa=0,Dr=1,Jd=2,Z0=3,K0=4,fb=5,ws=100,db=101,hb=102,pb=103,mb=104,gb=200,xb=201,vb=202,_b=203,$d=204,eh=205,yb=206,Sb=207,bb=208,Mb=209,Eb=210,Tb=211,Ab=212,wb=213,Rb=214,th=0,nh=1,ih=2,Lr=3,ah=4,sh=5,rh=6,oh=7,cv=0,Cb=1,Nb=2,Gi=0,uv=1,fv=2,dv=3,hv=4,pv=5,mv=6,gv=7,xv=300,Us=301,Or=302,md=303,gd=304,nu=306,lh=1e3,ei=1001,ch=1002,wn=1003,Db=1004,gc=1005,fn=1006,xd=1007,Cs=1008,ui=1009,vv=1010,_v=1011,Ko=1012,Kh=1013,ji=1014,Ei=1015,ki=1016,Qh=1017,Jh=1018,Qo=1020,yv=35902,Sv=35899,bv=1021,Mv=1022,fi=1023,_a=1026,Ns=1027,Ev=1028,$h=1029,Pr=1030,ep=1031,tp=1033,Gc=33776,jc=33777,kc=33778,Xc=33779,uh=35840,fh=35841,dh=35842,hh=35843,ph=36196,mh=37492,gh=37496,xh=37488,vh=37489,_h=37490,yh=37491,Sh=37808,bh=37809,Mh=37810,Eh=37811,Th=37812,Ah=37813,wh=37814,Rh=37815,Ch=37816,Nh=37817,Dh=37818,Uh=37819,Lh=37820,Oh=37821,Ph=36492,Ih=36494,Fh=36495,Bh=36283,zh=36284,Hh=36285,Vh=36286,Ub=3200,Lb=0,Ob=1,Ja="",ci="srgb",Ir="srgb-linear",Zc="linear",Bt="srgb",xr=7680,Q0=519,Pb=512,Ib=513,Fb=514,np=515,Bb=516,zb=517,ip=518,Hb=519,J0=35044,$0="300 es",Vi=2e3,Kc=2001;function Vb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gb(){const r=Qc("canvas");return r.style.display="block",r}const ex={};function tx(...r){const e="THREE."+r.shift();console.log(e,...r)}function Tv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function at(...r){r=Tv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Rt(...r){r=Tv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Jc(...r){const e=r.join(" ");e in ex||(ex[e]=!0,at(...r))}function jb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const kb={[th]:nh,[ih]:rh,[ah]:oh,[Lr]:sh,[nh]:th,[rh]:ih,[oh]:ah,[sh]:Lr};class Br{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,Gh=180/Math.PI;function tl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function St(r,e,i){return Math.max(e,Math.min(i,r))}function Xb(r,e){return(r%e+e)%e}function _d(r,e,i){return(1-i)*r+i*e}function Io(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,i=0){lt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,m){let g=s[l+0],p=s[l+1],x=s[l+2],S=s[l+3],v=c[f+0],M=c[f+1],E=c[f+2],C=c[f+3];if(S!==C||g!==v||p!==M||x!==E){let _=g*v+p*M+x*E+S*C;_<0&&(v=-v,M=-M,E=-E,C=-C,_=-_);let y=1-m;if(_<.9995){const N=Math.acos(_),P=Math.sin(N);y=Math.sin(y*N)/P,m=Math.sin(m*N)/P,g=g*y+v*m,p=p*y+M*m,x=x*y+E*m,S=S*y+C*m}else{g=g*y+v*m,p=p*y+M*m,x=x*y+E*m,S=S*y+C*m;const N=1/Math.sqrt(g*g+p*p+x*x+S*S);g*=N,p*=N,x*=N,S*=N}}e[i]=g,e[i+1]=p,e[i+2]=x,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,f){const m=s[l],g=s[l+1],p=s[l+2],x=s[l+3],S=c[f],v=c[f+1],M=c[f+2],E=c[f+3];return e[i]=m*E+x*S+g*M-p*v,e[i+1]=g*E+x*v+p*S-m*M,e[i+2]=p*E+x*M+m*v-g*S,e[i+3]=x*E-m*S-g*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,m=Math.cos,g=Math.sin,p=m(s/2),x=m(l/2),S=m(c/2),v=g(s/2),M=g(l/2),E=g(c/2);switch(f){case"XYZ":this._x=v*x*S+p*M*E,this._y=p*M*S-v*x*E,this._z=p*x*E+v*M*S,this._w=p*x*S-v*M*E;break;case"YXZ":this._x=v*x*S+p*M*E,this._y=p*M*S-v*x*E,this._z=p*x*E-v*M*S,this._w=p*x*S+v*M*E;break;case"ZXY":this._x=v*x*S-p*M*E,this._y=p*M*S+v*x*E,this._z=p*x*E+v*M*S,this._w=p*x*S-v*M*E;break;case"ZYX":this._x=v*x*S-p*M*E,this._y=p*M*S+v*x*E,this._z=p*x*E-v*M*S,this._w=p*x*S+v*M*E;break;case"YZX":this._x=v*x*S+p*M*E,this._y=p*M*S+v*x*E,this._z=p*x*E-v*M*S,this._w=p*x*S-v*M*E;break;case"XZY":this._x=v*x*S-p*M*E,this._y=p*M*S-v*x*E,this._z=p*x*E+v*M*S,this._w=p*x*S+v*M*E;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],m=i[5],g=i[9],p=i[2],x=i[6],S=i[10],v=s+m+S;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(x-g)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>m&&s>S){const M=2*Math.sqrt(1+s-m-S);this._w=(x-g)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(m>S){const M=2*Math.sqrt(1+m-s-S);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(g+x)/M}else{const M=2*Math.sqrt(1+S-s-m);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(g+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,m=i._x,g=i._y,p=i._z,x=i._w;return this._x=s*x+f*m+l*p-c*g,this._y=l*x+f*g+c*m-s*p,this._z=c*x+f*p+s*g-l*m,this._w=f*x-s*m-l*g-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,m=this.dot(e);m<0&&(s=-s,l=-l,c=-c,f=-f,m=-m);let g=1-i;if(m<.9995){const p=Math.acos(m),x=Math.sin(p);g=Math.sin(g*p)/x,i=Math.sin(i*p)/x,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+f*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,s=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(nx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(nx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,m=e.z,g=e.w,p=2*(f*l-m*s),x=2*(m*i-c*l),S=2*(c*s-f*i);return this.x=i+g*p+f*S-m*x,this.y=s+g*x+m*p-c*S,this.z=l+g*S+c*x-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,m=i.y,g=i.z;return this.x=l*g-c*m,this.y=c*f-s*g,this.z=s*m-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new le,nx=new zr;class dt{constructor(e,i,s,l,c,f,m,g,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,m,g,p)}set(e,i,s,l,c,f,m,g,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=m,x[3]=i,x[4]=c,x[5]=g,x[6]=s,x[7]=f,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],m=s[3],g=s[6],p=s[1],x=s[4],S=s[7],v=s[2],M=s[5],E=s[8],C=l[0],_=l[3],y=l[6],N=l[1],P=l[4],D=l[7],B=l[2],V=l[5],k=l[8];return c[0]=f*C+m*N+g*B,c[3]=f*_+m*P+g*V,c[6]=f*y+m*D+g*k,c[1]=p*C+x*N+S*B,c[4]=p*_+x*P+S*V,c[7]=p*y+x*D+S*k,c[2]=v*C+M*N+E*B,c[5]=v*_+M*P+E*V,c[8]=v*y+M*D+E*k,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],m=e[5],g=e[6],p=e[7],x=e[8];return i*f*x-i*m*p-s*c*x+s*m*g+l*c*p-l*f*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],m=e[5],g=e[6],p=e[7],x=e[8],S=x*f-m*p,v=m*g-x*c,M=p*c-f*g,E=i*S+s*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=S*C,e[1]=(l*p-x*s)*C,e[2]=(m*s-l*f)*C,e[3]=v*C,e[4]=(x*i-l*g)*C,e[5]=(l*c-m*i)*C,e[6]=M*C,e[7]=(s*g-p*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,m){const g=Math.cos(c),p=Math.sin(c);return this.set(s*g,s*p,-s*(g*f+p*m)+f+e,-l*p,l*g,-l*(-p*f+g*m)+m+i,0,0,1),this}scale(e,i){return this.premultiply(Sd.makeScale(e,i)),this}rotate(e){return this.premultiply(Sd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Sd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sd=new dt,ix=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ax=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wb(){const r={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Bt&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Bt&&(l.r=Ur(l.r),l.g=Ur(l.g),l.b=Ur(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Jc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Jc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ir]:{primaries:e,whitePoint:s,transfer:Zc,toXYZ:ix,fromXYZ:ax,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:Bt,toXYZ:ix,fromXYZ:ax,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const Tt=Wb();function va(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ur(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vr;class qb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{vr===void 0&&(vr=Qc("canvas")),vr.width=e.width,vr.height=e.height;const l=vr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=va(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(va(i[s]/255)*255):i[s]=va(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yb=0;class ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,m=l.length;f<m;f++)l[f].isDataTexture?c.push(bd(l[f].image)):c.push(bd(l[f]))}else c=bd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function bd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Zb=0;const Md=new le;class On extends Br{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=ei,l=ei,c=fn,f=Cs,m=fi,g=ui,p=On.DEFAULT_ANISOTROPY,x=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=tl(),this.name="",this.source=new ap(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=m,this.internalFormat=null,this.type=g,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=xv;On.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const g=e.elements,p=g[0],x=g[4],S=g[8],v=g[1],M=g[5],E=g[9],C=g[2],_=g[6],y=g[10];if(Math.abs(x-v)<.01&&Math.abs(S-C)<.01&&Math.abs(E-_)<.01){if(Math.abs(x+v)<.1&&Math.abs(S+C)<.1&&Math.abs(E+_)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,D=(M+1)/2,B=(y+1)/2,V=(x+v)/4,k=(S+C)/4,A=(E+_)/4;return P>D&&P>B?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=V/s,c=k/s):D>B?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=V/l,c=A/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=k/c,l=A/c),this.set(s,l,c,i),this}let N=Math.sqrt((_-E)*(_-E)+(S-C)*(S-C)+(v-x)*(v-x));return Math.abs(N)<.001&&(N=1),this.x=(_-E)/N,this.y=(S-C)/N,this.z=(v-x)/N,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kb extends Br{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new On(l),f=s.count;for(let m=0;m<f;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ap(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Kb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Av extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qb extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(e,i,s,l,c,f,m,g,p,x,S,v,M,E,C,_){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,m,g,p,x,S,v,M,E,C,_)}set(e,i,s,l,c,f,m,g,p,x,S,v,M,E,C,_){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=m,y[13]=g,y[2]=p,y[6]=x,y[10]=S,y[14]=v,y[3]=M,y[7]=E,y[11]=C,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/_r.setFromMatrixColumn(e,0).length(),c=1/_r.setFromMatrixColumn(e,1).length(),f=1/_r.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),m=Math.sin(s),g=Math.cos(l),p=Math.sin(l),x=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const v=f*x,M=f*S,E=m*x,C=m*S;i[0]=g*x,i[4]=-g*S,i[8]=p,i[1]=M+E*p,i[5]=v-C*p,i[9]=-m*g,i[2]=C-v*p,i[6]=E+M*p,i[10]=f*g}else if(e.order==="YXZ"){const v=g*x,M=g*S,E=p*x,C=p*S;i[0]=v+C*m,i[4]=E*m-M,i[8]=f*p,i[1]=f*S,i[5]=f*x,i[9]=-m,i[2]=M*m-E,i[6]=C+v*m,i[10]=f*g}else if(e.order==="ZXY"){const v=g*x,M=g*S,E=p*x,C=p*S;i[0]=v-C*m,i[4]=-f*S,i[8]=E+M*m,i[1]=M+E*m,i[5]=f*x,i[9]=C-v*m,i[2]=-f*p,i[6]=m,i[10]=f*g}else if(e.order==="ZYX"){const v=f*x,M=f*S,E=m*x,C=m*S;i[0]=g*x,i[4]=E*p-M,i[8]=v*p+C,i[1]=g*S,i[5]=C*p+v,i[9]=M*p-E,i[2]=-p,i[6]=m*g,i[10]=f*g}else if(e.order==="YZX"){const v=f*g,M=f*p,E=m*g,C=m*p;i[0]=g*x,i[4]=C-v*S,i[8]=E*S+M,i[1]=S,i[5]=f*x,i[9]=-m*x,i[2]=-p*x,i[6]=M*S+E,i[10]=v-C*S}else if(e.order==="XZY"){const v=f*g,M=f*p,E=m*g,C=m*p;i[0]=g*x,i[4]=-S,i[8]=p*x,i[1]=v*S+C,i[5]=f*x,i[9]=M*S-E,i[2]=E*S-M,i[6]=m*x,i[10]=C*S+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jb,e,$b)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Wa.crossVectors(s,Jn),Wa.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Wa.crossVectors(s,Jn)),Wa.normalize(),xc.crossVectors(Jn,Wa),l[0]=Wa.x,l[4]=xc.x,l[8]=Jn.x,l[1]=Wa.y,l[5]=xc.y,l[9]=Jn.y,l[2]=Wa.z,l[6]=xc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],m=s[4],g=s[8],p=s[12],x=s[1],S=s[5],v=s[9],M=s[13],E=s[2],C=s[6],_=s[10],y=s[14],N=s[3],P=s[7],D=s[11],B=s[15],V=l[0],k=l[4],A=l[8],L=l[12],xe=l[1],G=l[5],ee=l[9],re=l[13],pe=l[2],Q=l[6],I=l[10],z=l[14],fe=l[3],he=l[7],O=l[11],K=l[15];return c[0]=f*V+m*xe+g*pe+p*fe,c[4]=f*k+m*G+g*Q+p*he,c[8]=f*A+m*ee+g*I+p*O,c[12]=f*L+m*re+g*z+p*K,c[1]=x*V+S*xe+v*pe+M*fe,c[5]=x*k+S*G+v*Q+M*he,c[9]=x*A+S*ee+v*I+M*O,c[13]=x*L+S*re+v*z+M*K,c[2]=E*V+C*xe+_*pe+y*fe,c[6]=E*k+C*G+_*Q+y*he,c[10]=E*A+C*ee+_*I+y*O,c[14]=E*L+C*re+_*z+y*K,c[3]=N*V+P*xe+D*pe+B*fe,c[7]=N*k+P*G+D*Q+B*he,c[11]=N*A+P*ee+D*I+B*O,c[15]=N*L+P*re+D*z+B*K,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],m=e[5],g=e[9],p=e[13],x=e[2],S=e[6],v=e[10],M=e[14],E=e[3],C=e[7],_=e[11],y=e[15],N=g*M-p*v,P=m*M-p*S,D=m*v-g*S,B=f*M-p*x,V=f*v-g*x,k=f*S-m*x;return i*(C*N-_*P+y*D)-s*(E*N-_*B+y*V)+l*(E*P-C*B+y*k)-c*(E*D-C*V+_*k)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],m=e[5],g=e[6],p=e[7],x=e[8],S=e[9],v=e[10],M=e[11],E=e[12],C=e[13],_=e[14],y=e[15],N=i*m-s*f,P=i*g-l*f,D=i*p-c*f,B=s*g-l*m,V=s*p-c*m,k=l*p-c*g,A=x*C-S*E,L=x*_-v*E,xe=x*y-M*E,G=S*_-v*C,ee=S*y-M*C,re=v*y-M*_,pe=N*re-P*ee+D*G+B*xe-V*L+k*A;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/pe;return e[0]=(m*re-g*ee+p*G)*Q,e[1]=(l*ee-s*re-c*G)*Q,e[2]=(C*k-_*V+y*B)*Q,e[3]=(v*V-S*k-M*B)*Q,e[4]=(g*xe-f*re-p*L)*Q,e[5]=(i*re-l*xe+c*L)*Q,e[6]=(_*D-E*k-y*P)*Q,e[7]=(x*k-v*D+M*P)*Q,e[8]=(f*ee-m*xe+p*A)*Q,e[9]=(s*xe-i*ee-c*A)*Q,e[10]=(E*V-C*D+y*N)*Q,e[11]=(S*D-x*V-M*N)*Q,e[12]=(m*L-f*G-g*A)*Q,e[13]=(i*G-s*L+l*A)*Q,e[14]=(C*P-E*B-_*N)*Q,e[15]=(x*B-S*P+v*N)*Q,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,m=e.y,g=e.z,p=c*f,x=c*m;return this.set(p*f+s,p*m-l*g,p*g+l*m,0,p*m+l*g,x*m+s,x*g-l*f,0,p*g-l*m,x*g+l*f,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,m=i._z,g=i._w,p=c+c,x=f+f,S=m+m,v=c*p,M=c*x,E=c*S,C=f*x,_=f*S,y=m*S,N=g*p,P=g*x,D=g*S,B=s.x,V=s.y,k=s.z;return l[0]=(1-(C+y))*B,l[1]=(M+D)*B,l[2]=(E-P)*B,l[3]=0,l[4]=(M-D)*V,l[5]=(1-(v+y))*V,l[6]=(_+N)*V,l[7]=0,l[8]=(E+P)*k,l[9]=(_-N)*k,l[10]=(1-(v+C))*k,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=_r.set(l[0],l[1],l[2]).length();const m=_r.set(l[4],l[5],l[6]).length(),g=_r.set(l[8],l[9],l[10]).length();c<0&&(f=-f),_i.copy(this);const p=1/f,x=1/m,S=1/g;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=x,_i.elements[5]*=x,_i.elements[6]*=x,_i.elements[8]*=S,_i.elements[9]*=S,_i.elements[10]*=S,i.setFromRotationMatrix(_i),s.x=f,s.y=m,s.z=g,this}makePerspective(e,i,s,l,c,f,m=Vi,g=!1){const p=this.elements,x=2*c/(i-e),S=2*c/(s-l),v=(i+e)/(i-e),M=(s+l)/(s-l);let E,C;if(g)E=c/(f-c),C=f*c/(f-c);else if(m===Vi)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(m===Kc)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,m=Vi,g=!1){const p=this.elements,x=2/(i-e),S=2/(s-l),v=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,C;if(g)E=1/(f-c),C=f/(f-c);else if(m===Vi)E=-2/(f-c),C=-(f+c)/(f-c);else if(m===Kc)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const _r=new le,_i=new on,Jb=new le(0,0,0),$b=new le(1,1,1),Wa=new le,xc=new le,Jn=new le,sx=new on,rx=new zr;class ya{constructor(e=0,i=0,s=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],m=l[8],g=l[1],p=l[5],x=l[9],S=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(m,M),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-St(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(m,M));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return sx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return rx.setFromEuler(this),this.setFromQuaternion(rx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class wv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eM=0;const ox=new le,yr=new zr,fa=new on,vc=new le,Fo=new le,tM=new le,nM=new zr,lx=new le(1,0,0),cx=new le(0,1,0),ux=new le(0,0,1),fx={type:"added"},iM={type:"removed"},Sr={type:"childadded",child:null},Ed={type:"childremoved",child:null};class kn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new le,i=new ya,s=new zr,l=new le(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new dt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(lx,e)}rotateY(e){return this.rotateOnAxis(cx,e)}rotateZ(e){return this.rotateOnAxis(ux,e)}translateOnAxis(e,i){return ox.copy(e).applyQuaternion(this.quaternion),this.position.add(ox.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(lx,e)}translateY(e){return this.translateOnAxis(cx,e)}translateZ(e){return this.translateOnAxis(ux,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?vc.copy(e):vc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Fo,vc,this.up):fa.lookAt(vc,Fo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(fa),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fx),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(iM),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fx),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,tM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,nM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let p=0,x=g.length;p<x;p++){const S=g[p];c(e.shapes,S)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,p=this.material.length;g<p;g++)m.push(c(e.materials,this.material[g]));l.material=m}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];l.animations.push(c(e.animations,g))}}if(i){const m=f(e.geometries),g=f(e.materials),p=f(e.textures),x=f(e.images),S=f(e.shapes),v=f(e.skeletons),M=f(e.animations),E=f(e.nodes);m.length>0&&(s.geometries=m),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),S.length>0&&(s.shapes=S),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(m){const g=[];for(const p in m){const x=m[p];delete x.metadata,g.push(x)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}kn.DEFAULT_UP=new le(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _c extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aM={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const m=this._targetRay,g=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const C of e.hand.values()){const _=i.getJointPose(C,s),y=this._getHandJoint(p,C);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const x=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],v=x.position.distanceTo(S.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));m!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(aM)))}return m!==null&&(m.visible=l!==null),g!==null&&(g.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new _c;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},yc={h:0,s:0,l:0};function Ad(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Lt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Tt.workingColorSpace){if(e=Xb(e,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Ad(f,c,e+1/3),this.g=Ad(f,c,e),this.b=Ad(f,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],m=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const s=Rv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Tt.workingToColorSpace(Dn.copy(this),e),Math.round(St(Dn.r*255,0,255))*65536+Math.round(St(Dn.g*255,0,255))*256+Math.round(St(Dn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,c=Dn.b,f=Math.max(s,l,c),m=Math.min(s,l,c);let g,p;const x=(m+f)/2;if(m===f)g=0,p=0;else{const S=f-m;switch(p=x<=.5?S/(f+m):S/(2-f-m),f){case s:g=(l-c)/S+(l<c?6:0);break;case l:g=(c-s)/S+2;break;case c:g=(s-l)/S+4;break}g/=6}return e.h=g,e.s=p,e.l=x,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=ci){Tt.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,s=Dn.g,l=Dn.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(qa),this.setHSL(qa.h+e,qa.s+i,qa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(qa),e.getHSL(yc);const s=_d(qa.h,yc.h,i),l=_d(qa.s,yc.s,i),c=_d(qa.l,yc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Lt;Lt.NAMES=Rv;class dx extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yi=new le,da=new le,wd=new le,ha=new le,br=new le,Mr=new le,hx=new le,Rd=new le,Cd=new le,Nd=new le,Dd=new en,Ud=new en,Ld=new en;class Mi{constructor(e=new le,i=new le,s=new le){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),yi.subVectors(e,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){yi.subVectors(l,i),da.subVectors(s,i),wd.subVectors(e,i);const f=yi.dot(yi),m=yi.dot(da),g=yi.dot(wd),p=da.dot(da),x=da.dot(wd),S=f*p-m*m;if(S===0)return c.set(0,0,0),null;const v=1/S,M=(p*g-m*x)*v,E=(f*x-m*g)*v;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,s,l,c,f,m,g){return this.getBarycoord(e,i,s,l,ha)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,ha.x),g.addScaledVector(f,ha.y),g.addScaledVector(m,ha.z),g)}static getInterpolatedAttribute(e,i,s,l,c,f){return Dd.setScalar(0),Ud.setScalar(0),Ld.setScalar(0),Dd.fromBufferAttribute(e,i),Ud.fromBufferAttribute(e,s),Ld.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Dd,c.x),f.addScaledVector(Ud,c.y),f.addScaledVector(Ld,c.z),f}static isFrontFacing(e,i,s,l){return yi.subVectors(s,i),da.subVectors(e,i),yi.cross(da).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),da.subVectors(this.a,this.b),yi.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Mi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,m;br.subVectors(l,s),Mr.subVectors(c,s),Rd.subVectors(e,s);const g=br.dot(Rd),p=Mr.dot(Rd);if(g<=0&&p<=0)return i.copy(s);Cd.subVectors(e,l);const x=br.dot(Cd),S=Mr.dot(Cd);if(x>=0&&S<=x)return i.copy(l);const v=g*S-x*p;if(v<=0&&g>=0&&x<=0)return f=g/(g-x),i.copy(s).addScaledVector(br,f);Nd.subVectors(e,c);const M=br.dot(Nd),E=Mr.dot(Nd);if(E>=0&&M<=E)return i.copy(c);const C=M*p-g*E;if(C<=0&&p>=0&&E<=0)return m=p/(p-E),i.copy(s).addScaledVector(Mr,m);const _=x*E-M*S;if(_<=0&&S-x>=0&&M-E>=0)return hx.subVectors(c,l),m=(S-x)/(S-x+(M-E)),i.copy(l).addScaledVector(hx,m);const y=1/(_+C+v);return f=C*y,m=v*y,i.copy(s).addScaledVector(br,f).addScaledVector(Mr,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class nl{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Si.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Si.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Si.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,m=c.count;f<m;f++)e.isMesh===!0?e.getVertexPosition(f,Si):Si.fromBufferAttribute(c,f),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Sc.copy(s.boundingBox)),Sc.applyMatrix4(e.matrixWorld),this.union(Sc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),bc.subVectors(this.max,Bo),Er.subVectors(e.a,Bo),Tr.subVectors(e.b,Bo),Ar.subVectors(e.c,Bo),Ya.subVectors(Tr,Er),Za.subVectors(Ar,Tr),_s.subVectors(Er,Ar);let i=[0,-Ya.z,Ya.y,0,-Za.z,Za.y,0,-_s.z,_s.y,Ya.z,0,-Ya.x,Za.z,0,-Za.x,_s.z,0,-_s.x,-Ya.y,Ya.x,0,-Za.y,Za.x,0,-_s.y,_s.x,0];return!Od(i,Er,Tr,Ar,bc)||(i=[1,0,0,0,1,0,0,0,1],!Od(i,Er,Tr,Ar,bc))?!1:(Mc.crossVectors(Ya,Za),i=[Mc.x,Mc.y,Mc.z],Od(i,Er,Tr,Ar,bc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pa=[new le,new le,new le,new le,new le,new le,new le,new le],Si=new le,Sc=new nl,Er=new le,Tr=new le,Ar=new le,Ya=new le,Za=new le,_s=new le,Bo=new le,bc=new le,Mc=new le,ys=new le;function Od(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){ys.fromArray(r,c);const m=l.x*Math.abs(ys.x)+l.y*Math.abs(ys.y)+l.z*Math.abs(ys.z),g=e.dot(ys),p=i.dot(ys),x=s.dot(ys);if(Math.max(-Math.max(g,p,x),Math.min(g,p,x))>m)return!1}return!0}const un=new le,Ec=new lt;let sM=0;class Ai{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=J0,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(e),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Io(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==J0&&(e.usage=this.usage),e}}class Cv extends Ai{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Nv extends Ai{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class wi extends Ai{constructor(e,i,s){super(new Float32Array(e),i,s)}}const rM=new nl,zo=new le,Pd=new le;class iu{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):rM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Pd)),this.expandByPoint(zo.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let oM=0;const li=new on,Id=new kn,wr=new le,$n=new nl,Ho=new nl,Mn=new le;class Ri extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vb(e)?Nv:Cv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,s){return li.makeTranslation(e,i,s),this.applyMatrix4(li),this}scale(e,i,s){return li.makeScale(e,i,s),this.applyMatrix4(li),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new wi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const m=i[c];Ho.setFromBufferAttribute(m),this.morphTargetsRelative?(Mn.addVectors($n.min,Ho.min),$n.expandByPoint(Mn),Mn.addVectors($n.max,Ho.max),$n.expandByPoint(Mn)):($n.expandByPoint(Ho.min),$n.expandByPoint(Ho.max))}$n.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const m=i[c],g=this.morphTargetsRelative;for(let p=0,x=m.count;p<x;p++)Mn.fromBufferAttribute(m,p),g&&(wr.fromBufferAttribute(e,p),Mn.add(wr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),m=[],g=[];for(let A=0;A<s.count;A++)m[A]=new le,g[A]=new le;const p=new le,x=new le,S=new le,v=new lt,M=new lt,E=new lt,C=new le,_=new le;function y(A,L,xe){p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,L),S.fromBufferAttribute(s,xe),v.fromBufferAttribute(c,A),M.fromBufferAttribute(c,L),E.fromBufferAttribute(c,xe),x.sub(p),S.sub(p),M.sub(v),E.sub(v);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(C.copy(x).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(G),_.copy(S).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(G),m[A].add(C),m[L].add(C),m[xe].add(C),g[A].add(_),g[L].add(_),g[xe].add(_))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let A=0,L=N.length;A<L;++A){const xe=N[A],G=xe.start,ee=xe.count;for(let re=G,pe=G+ee;re<pe;re+=3)y(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const P=new le,D=new le,B=new le,V=new le;function k(A){B.fromBufferAttribute(l,A),V.copy(B);const L=m[A];P.copy(L),P.sub(B.multiplyScalar(B.dot(L))).normalize(),D.crossVectors(V,L);const G=D.dot(g[A])<0?-1:1;f.setXYZW(A,P.x,P.y,P.z,G)}for(let A=0,L=N.length;A<L;++A){const xe=N[A],G=xe.start,ee=xe.count;for(let re=G,pe=G+ee;re<pe;re+=3)k(e.getX(re+0)),k(e.getX(re+1)),k(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new le,c=new le,f=new le,m=new le,g=new le,p=new le,x=new le,S=new le;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),C=e.getX(v+1),_=e.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,_),x.subVectors(f,c),S.subVectors(l,c),x.cross(S),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,C),p.fromBufferAttribute(s,_),m.add(x),g.add(x),p.add(x),s.setXYZ(E,m.x,m.y,m.z),s.setXYZ(C,g.x,g.y,g.z),s.setXYZ(_,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),x.subVectors(f,c),S.subVectors(l,c),x.cross(S),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(m,g){const p=m.array,x=m.itemSize,S=m.normalized,v=new p.constructor(g.length*x);let M=0,E=0;for(let C=0,_=g.length;C<_;C++){m.isInterleavedBufferAttribute?M=g[C]*m.data.stride+m.offset:M=g[C]*x;for(let y=0;y<x;y++)v[E++]=p[M++]}return new Ai(v,x,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ri,s=this.index.array,l=this.attributes;for(const m in l){const g=l[m],p=e(g,s);i.setAttribute(m,p)}const c=this.morphAttributes;for(const m in c){const g=[],p=c[m];for(let x=0,S=p.length;x<S;x++){const v=p[x],M=e(v,s);g.push(M)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let m=0,g=f.length;m<g;m++){const p=f[m];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];e.data.attributes[g]=p.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],x=[];for(let S=0,v=p.length;S<v;S++){const M=p[S];x.push(M.toJSON(e.data))}x.length>0&&(l[g]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],S=c[p];for(let v=0,M=S.length;v<M;v++)x.push(S[v].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,x=f.length;p<x;p++){const S=f[p];this.addGroup(S.start,S.count,S.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let lM=0;class il extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=Dr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=eh,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(s.blending=this.blending),this.side!==ns&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==$d&&(s.blendSrc=this.blendSrc),this.blendDst!==eh&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const m in c){const g=c[m];delete g.metadata,f.push(g)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ma=new le,Fd=new le,Tc=new le,Ka=new le,Bd=new le,Ac=new le,zd=new le;class Dv{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Fd.copy(e).add(i).multiplyScalar(.5),Tc.copy(i).sub(e).normalize(),Ka.copy(this.origin).sub(Fd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Tc),m=Ka.dot(this.direction),g=-Ka.dot(Tc),p=Ka.lengthSq(),x=Math.abs(1-f*f);let S,v,M,E;if(x>0)if(S=f*g-m,v=f*m-g,E=c*x,S>=0)if(v>=-E)if(v<=E){const C=1/x;S*=C,v*=C,M=S*(S+f*v+2*m)+v*(f*S+v+2*g)+p}else v=c,S=Math.max(0,-(f*v+m)),M=-S*S+v*(v+2*g)+p;else v=-c,S=Math.max(0,-(f*v+m)),M=-S*S+v*(v+2*g)+p;else v<=-E?(S=Math.max(0,-(-f*c+m)),v=S>0?-c:Math.min(Math.max(-c,-g),c),M=-S*S+v*(v+2*g)+p):v<=E?(S=0,v=Math.min(Math.max(-c,-g),c),M=v*(v+2*g)+p):(S=Math.max(0,-(f*c+m)),v=S>0?c:Math.min(Math.max(-c,-g),c),M=-S*S+v*(v+2*g)+p);else v=f>0?-c:c,S=Math.max(0,-(f*v+m)),M=-S*S+v*(v+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Fd).addScaledVector(Tc,v),M}intersectSphere(e,i){ma.subVectors(e.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),m=s-f,g=s+f;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,m,g;const p=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),x>=0?(c=(e.min.y-v.y)*x,f=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,f=(e.min.y-v.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),S>=0?(m=(e.min.z-v.z)*S,g=(e.max.z-v.z)*S):(m=(e.max.z-v.z)*S,g=(e.min.z-v.z)*S),s>g||m>l)||((m>s||s!==s)&&(s=m),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ma)!==null}intersectTriangle(e,i,s,l,c){Bd.subVectors(i,e),Ac.subVectors(s,e),zd.crossVectors(Bd,Ac);let f=this.direction.dot(zd),m;if(f>0){if(l)return null;m=1}else if(f<0)m=-1,f=-f;else return null;Ka.subVectors(this.origin,e);const g=m*this.direction.dot(Ac.crossVectors(Ka,Ac));if(g<0)return null;const p=m*this.direction.dot(Bd.cross(Ka));if(p<0||g+p>f)return null;const x=-m*Ka.dot(zd);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Uv extends il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const px=new on,Ss=new Dv,wc=new iu,mx=new le,Rc=new le,Cc=new le,Nc=new le,Hd=new le,Dc=new le,gx=new le,Uc=new le;class di extends kn{constructor(e=new Ri,i=new Uv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(c&&m){Dc.set(0,0,0);for(let g=0,p=c.length;g<p;g++){const x=m[g],S=c[g];x!==0&&(Hd.fromBufferAttribute(S,e),f?Dc.addScaledVector(Hd,x):Dc.addScaledVector(Hd.sub(i),x))}i.add(Dc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(c),Ss.copy(e.ray).recast(e.near),!(wc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(wc,mx)===null||Ss.origin.distanceToSquared(mx)>(e.far-e.near)**2))&&(px.copy(c).invert(),Ss.copy(e.ray).applyMatrix4(px),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ss)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,m=c.index,g=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,S=c.attributes.normal,v=c.groups,M=c.drawRange;if(m!==null)if(Array.isArray(f))for(let E=0,C=v.length;E<C;E++){const _=v[E],y=f[_.materialIndex],N=Math.max(_.start,M.start),P=Math.min(m.count,Math.min(_.start+_.count,M.start+M.count));for(let D=N,B=P;D<B;D+=3){const V=m.getX(D),k=m.getX(D+1),A=m.getX(D+2);l=Lc(this,y,e,s,p,x,S,V,k,A),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let _=E,y=C;_<y;_+=3){const N=m.getX(_),P=m.getX(_+1),D=m.getX(_+2);l=Lc(this,f,e,s,p,x,S,N,P,D),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(f))for(let E=0,C=v.length;E<C;E++){const _=v[E],y=f[_.materialIndex],N=Math.max(_.start,M.start),P=Math.min(g.count,Math.min(_.start+_.count,M.start+M.count));for(let D=N,B=P;D<B;D+=3){const V=D,k=D+1,A=D+2;l=Lc(this,y,e,s,p,x,S,V,k,A),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(g.count,M.start+M.count);for(let _=E,y=C;_<y;_+=3){const N=_,P=_+1,D=_+2;l=Lc(this,f,e,s,p,x,S,N,P,D),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}}}function cM(r,e,i,s,l,c,f,m){let g;if(e.side===jn?g=s.intersectTriangle(f,c,l,!0,m):g=s.intersectTriangle(l,c,f,e.side===ns,m),g===null)return null;Uc.copy(m),Uc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Uc);return p<i.near||p>i.far?null:{distance:p,point:Uc.clone(),object:r}}function Lc(r,e,i,s,l,c,f,m,g,p){r.getVertexPosition(m,Rc),r.getVertexPosition(g,Cc),r.getVertexPosition(p,Nc);const x=cM(r,e,i,s,Rc,Cc,Nc,gx);if(x){const S=new le;Mi.getBarycoord(gx,Rc,Cc,Nc,S),l&&(x.uv=Mi.getInterpolatedAttribute(l,m,g,p,S,new lt)),c&&(x.uv1=Mi.getInterpolatedAttribute(c,m,g,p,S,new lt)),f&&(x.normal=Mi.getInterpolatedAttribute(f,m,g,p,S,new le),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:m,b:g,c:p,normal:new le,materialIndex:0};Mi.getNormal(Rc,Cc,Nc,v.normal),x.face=v,x.barycoord=S}return x}class Lv extends On{constructor(e=null,i=1,s=1,l,c,f,m,g,p=wn,x=wn,S,v){super(null,f,m,g,p,x,l,c,S,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=new le,uM=new le,fM=new dt;class As{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Vd.subVectors(s,i).cross(uM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Vd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||fM.getNormalMatrix(e),l=this.coplanarPoint(Vd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new iu,dM=new lt(.5,.5),Oc=new le;class Ov{constructor(e=new As,i=new As,s=new As,l=new As,c=new As,f=new As){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(s),m[3].copy(l),m[4].copy(c),m[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Vi,s=!1){const l=this.planes,c=e.elements,f=c[0],m=c[1],g=c[2],p=c[3],x=c[4],S=c[5],v=c[6],M=c[7],E=c[8],C=c[9],_=c[10],y=c[11],N=c[12],P=c[13],D=c[14],B=c[15];if(l[0].setComponents(p-f,M-x,y-E,B-N).normalize(),l[1].setComponents(p+f,M+x,y+E,B+N).normalize(),l[2].setComponents(p+m,M+S,y+C,B+P).normalize(),l[3].setComponents(p-m,M-S,y-C,B-P).normalize(),s)l[4].setComponents(g,v,_,D).normalize(),l[5].setComponents(p-g,M-v,y-_,B-D).normalize();else if(l[4].setComponents(p-g,M-v,y-_,B-D).normalize(),i===Vi)l[5].setComponents(p+g,M+v,y+_,B+D).normalize();else if(i===Kc)l[5].setComponents(g,v,_,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);const i=dM.distanceTo(e.center);return bs.radius=.7071067811865476+i,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?e.max.x:e.min.x,Oc.y=l.normal.y>0?e.max.y:e.min.y,Oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hM extends il{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new le,eu=new le,xx=new on,Vo=new Dv,Pc=new iu,Gd=new le,vx=new le;class pM extends kn{constructor(e=new Ri,i=new hM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)$c.fromBufferAttribute(i,l-1),eu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=$c.distanceTo(eu);e.setAttribute("lineDistance",new wi(s,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,e.ray.intersectsSphere(Pc)===!1)return;xx.copy(l).invert(),Vo.copy(e.ray).applyMatrix4(xx);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=m*m,p=this.isLineSegments?2:1,x=s.index,v=s.attributes.position;if(x!==null){const M=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let C=M,_=E-1;C<_;C+=p){const y=x.getX(C),N=x.getX(C+1),P=Ic(this,e,Vo,g,y,N,C);P&&i.push(P)}if(this.isLineLoop){const C=x.getX(E-1),_=x.getX(M),y=Ic(this,e,Vo,g,C,_,E-1);y&&i.push(y)}}else{const M=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let C=M,_=E-1;C<_;C+=p){const y=Ic(this,e,Vo,g,C,C+1,C);y&&i.push(y)}if(this.isLineLoop){const C=Ic(this,e,Vo,g,E-1,M,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Ic(r,e,i,s,l,c,f){const m=r.geometry.attributes.position;if($c.fromBufferAttribute(m,l),eu.fromBufferAttribute(m,c),i.distanceSqToSegment($c,eu,Gd,vx)>s)return;Gd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Gd);if(!(p<e.near||p>e.far))return{distance:p,point:vx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const _x=new le,yx=new le;class mM extends pM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)_x.fromBufferAttribute(i,l),yx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+_x.distanceTo(yx);e.setAttribute("lineDistance",new wi(s,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pv extends On{constructor(e=[],i=Us,s,l,c,f,m,g,p,x){super(e,i,s,l,c,f,m,g,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jo extends On{constructor(e,i,s=ji,l,c,f,m=wn,g=wn,p,x=_a,S=1){if(x!==_a&&x!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:S};super(v,l,c,f,m,g,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ap(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gM extends Jo{constructor(e,i=ji,s=Us,l,c,f=wn,m=wn,g,p=_a){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,i,s,l,c,f,m,g,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Iv extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class al extends Ri{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const m=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const g=[],p=[],x=[],S=[];let v=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new wi(p,3)),this.setAttribute("normal",new wi(x,3)),this.setAttribute("uv",new wi(S,2));function E(C,_,y,N,P,D,B,V,k,A,L){const xe=D/k,G=B/A,ee=D/2,re=B/2,pe=V/2,Q=k+1,I=A+1;let z=0,fe=0;const he=new le;for(let O=0;O<I;O++){const K=O*G-re;for(let de=0;de<Q;de++){const ye=de*xe-ee;he[C]=ye*N,he[_]=K*P,he[y]=pe,p.push(he.x,he.y,he.z),he[C]=0,he[_]=0,he[y]=V>0?1:-1,x.push(he.x,he.y,he.z),S.push(de/k),S.push(1-O/A),z+=1}}for(let O=0;O<A;O++)for(let K=0;K<k;K++){const de=v+K+Q*O,ye=v+K+Q*(O+1),Oe=v+(K+1)+Q*(O+1),Ze=v+(K+1)+Q*O;g.push(de,ye,Ze),g.push(ye,Oe,Ze),fe+=6}m.addGroup(M,fe,L),M+=fe,v+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ds extends Ri{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,m=Math.floor(s),g=Math.floor(l),p=m+1,x=g+1,S=e/m,v=i/g,M=[],E=[],C=[],_=[];for(let y=0;y<x;y++){const N=y*v-f;for(let P=0;P<p;P++){const D=P*S-c;E.push(D,-N,0),C.push(0,0,1),_.push(P/m),_.push(1-y/g)}}for(let y=0;y<g;y++)for(let N=0;N<m;N++){const P=N+p*y,D=N+p*(y+1),B=N+1+p*(y+1),V=N+1+p*y;M.push(P,D,V),M.push(D,B,V)}this.setIndex(M),this.setAttribute("position",new wi(E,3)),this.setAttribute("normal",new wi(C,3)),this.setAttribute("uv",new wi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}function Fr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(r){const e={};for(let i=0;i<r.length;i++){const s=Fr(r[i]);for(const l in s)e[l]=s[l]}return e}function xM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Fv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const vM={clone:Fr,merge:Ln};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=yM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=xM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Xo extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class SM extends il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bM extends il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fc=new le,Bc=new zr,Fi=new le;class tu extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fc,Bc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Bc,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Fc,Bc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Bc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new le,Sx=new lt,bx=new lt;class bi extends tu{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Gh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gh*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z)}getViewSize(e,i){return this.getViewBounds(e,Sx,bx),i.subVectors(bx,Sx)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(vd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const g=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/g,i-=f.offsetY*s/p,l*=f.width/g,s*=f.height/p}const m=this.filmOffset;m!==0&&(c+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Bv extends tu{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,m=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,m-=x*this.view.offsetY,g=m-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Rr=-90,Cr=1;class MM extends kn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(Rr,Cr,e,i);l.layers=this.layers,this.add(l);const c=new bi(Rr,Cr,e,i);c.layers=this.layers,this.add(c);const f=new bi(Rr,Cr,e,i);f.layers=this.layers,this.add(f);const m=new bi(Rr,Cr,e,i);m.layers=this.layers,this.add(m);const g=new bi(Rr,Cr,e,i);g.layers=this.layers,this.add(g);const p=new bi(Rr,Cr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,m,g]=i;for(const p of i)this.remove(p);if(e===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,m,g,p,x]=this.children,S=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,3,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(S,v,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class EM extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class TM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Mx(r,e,i,s){const l=AM(s);switch(i){case bv:return r*e;case Ev:return r*e/l.components*l.byteLength;case $h:return r*e/l.components*l.byteLength;case Pr:return r*e*2/l.components*l.byteLength;case ep:return r*e*2/l.components*l.byteLength;case Mv:return r*e*3/l.components*l.byteLength;case fi:return r*e*4/l.components*l.byteLength;case tp:return r*e*4/l.components*l.byteLength;case Gc:case jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kc:case Xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fh:case hh:return Math.max(r,16)*Math.max(e,8)/4;case uh:case dh:return Math.max(r,8)*Math.max(e,8)/2;case ph:case mh:case xh:case vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gh:case _h:case yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ph:case Ih:case Fh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Bh:case zh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Hh:case Vh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AM(r){switch(r){case ui:case vv:return{byteLength:1,components:1};case Ko:case _v:case ki:return{byteLength:2,components:1};case Qh:case Jh:return{byteLength:2,components:4};case ji:case Kh:case Ei:return{byteLength:4,components:1};case yv:case Sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zh}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zv(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function wM(r){const e=new WeakMap;function i(m,g){const p=m.array,x=m.usage,S=p.byteLength,v=r.createBuffer();r.bindBuffer(g,v),r.bufferData(g,p,x),m.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)m.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:m.version,size:S}}function s(m,g,p){const x=g.array,S=g.updateRanges;if(r.bindBuffer(p,m),S.length===0)r.bufferSubData(p,0,x);else{S.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<S.length;M++){const E=S[v],C=S[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++v,S[v]=C)}S.length=v+1;for(let M=0,E=S.length;M<E;M++){const C=S[M];r.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=e.get(m);g&&(r.deleteBuffer(g.buffer),e.delete(m))}function f(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const x=e.get(m);(!x||x.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const p=e.get(m);if(p===void 0)e.set(m,i(m,g));else if(p.version<m.version){if(p.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,m,g),p.version=m.version}}return{get:l,remove:c,update:f}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,PM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,YM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,KM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,QM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$M=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aE="gl_FragColor = linearToOutputTexel( gl_FragColor );",sE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_E=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,CE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,iT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ST=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:RM,alphahash_pars_fragment:CM,alphamap_fragment:NM,alphamap_pars_fragment:DM,alphatest_fragment:UM,alphatest_pars_fragment:LM,aomap_fragment:OM,aomap_pars_fragment:PM,batching_pars_vertex:IM,batching_vertex:FM,begin_vertex:BM,beginnormal_vertex:zM,bsdfs:HM,iridescence_fragment:VM,bumpmap_pars_fragment:GM,clipping_planes_fragment:jM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:WM,color_fragment:qM,color_pars_fragment:YM,color_pars_vertex:ZM,color_vertex:KM,common:QM,cube_uv_reflection_fragment:JM,defaultnormal_vertex:$M,displacementmap_pars_vertex:eE,displacementmap_vertex:tE,emissivemap_fragment:nE,emissivemap_pars_fragment:iE,colorspace_fragment:aE,colorspace_pars_fragment:sE,envmap_fragment:rE,envmap_common_pars_fragment:oE,envmap_pars_fragment:lE,envmap_pars_vertex:cE,envmap_physical_pars_fragment:yE,envmap_vertex:uE,fog_vertex:fE,fog_pars_vertex:dE,fog_fragment:hE,fog_pars_fragment:pE,gradientmap_pars_fragment:mE,lightmap_pars_fragment:gE,lights_lambert_fragment:xE,lights_lambert_pars_fragment:vE,lights_pars_begin:_E,lights_toon_fragment:SE,lights_toon_pars_fragment:bE,lights_phong_fragment:ME,lights_phong_pars_fragment:EE,lights_physical_fragment:TE,lights_physical_pars_fragment:AE,lights_fragment_begin:wE,lights_fragment_maps:RE,lights_fragment_end:CE,logdepthbuf_fragment:NE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:LE,map_fragment:OE,map_pars_fragment:PE,map_particle_fragment:IE,map_particle_pars_fragment:FE,metalnessmap_fragment:BE,metalnessmap_pars_fragment:zE,morphinstance_vertex:HE,morphcolor_vertex:VE,morphnormal_vertex:GE,morphtarget_pars_vertex:jE,morphtarget_vertex:kE,normal_fragment_begin:XE,normal_fragment_maps:WE,normal_pars_fragment:qE,normal_pars_vertex:YE,normal_vertex:ZE,normalmap_pars_fragment:KE,clearcoat_normal_fragment_begin:QE,clearcoat_normal_fragment_maps:JE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:eT,opaque_fragment:tT,packing:nT,premultiplied_alpha_fragment:iT,project_vertex:aT,dithering_fragment:sT,dithering_pars_fragment:rT,roughnessmap_fragment:oT,roughnessmap_pars_fragment:lT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:uT,shadowmap_vertex:fT,shadowmask_pars_fragment:dT,skinbase_vertex:hT,skinning_pars_vertex:pT,skinning_vertex:mT,skinnormal_vertex:gT,specularmap_fragment:xT,specularmap_pars_fragment:vT,tonemapping_fragment:_T,tonemapping_pars_fragment:yT,transmission_fragment:ST,transmission_pars_fragment:bT,uv_pars_fragment:MT,uv_pars_vertex:ET,uv_vertex:TT,worldpos_vertex:AT,background_vert:wT,background_frag:RT,backgroundCube_vert:CT,backgroundCube_frag:NT,cube_vert:DT,cube_frag:UT,depth_vert:LT,depth_frag:OT,distance_vert:PT,distance_frag:IT,equirect_vert:FT,equirect_frag:BT,linedashed_vert:zT,linedashed_frag:HT,meshbasic_vert:VT,meshbasic_frag:GT,meshlambert_vert:jT,meshlambert_frag:kT,meshmatcap_vert:XT,meshmatcap_frag:WT,meshnormal_vert:qT,meshnormal_frag:YT,meshphong_vert:ZT,meshphong_frag:KT,meshphysical_vert:QT,meshphysical_frag:JT,meshtoon_vert:$T,meshtoon_frag:e1,points_vert:t1,points_frag:n1,shadow_vert:i1,shadow_frag:a1,sprite_vert:s1,sprite_frag:r1},Fe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Hi={basic:{uniforms:Ln([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Ln([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Ln([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Ln([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Ln([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Ln([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Ln([Fe.points,Fe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Ln([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Ln([Fe.common,Fe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Ln([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Ln([Fe.sprite,Fe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Ln([Fe.common,Fe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Ln([Fe.lights,Fe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Hi.physical={uniforms:Ln([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const zc={r:0,b:0,g:0},Ms=new ya,o1=new on;function l1(r,e,i,s,l,c){const f=new Lt(0);let m=l===!0?0:1,g,p,x=null,S=0,v=null;function M(N){let P=N.isScene===!0?N.background:null;if(P&&P.isTexture){const D=N.backgroundBlurriness>0;P=e.get(P,D)}return P}function E(N){let P=!1;const D=M(N);D===null?_(f,m):D&&D.isColor&&(_(D,1),P=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(N,P){const D=M(P);D&&(D.isCubeTexture||D.mapping===nu)?(p===void 0&&(p=new di(new al(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Fr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,V,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ms.copy(P.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(o1.makeRotationFromEuler(Ms)),p.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Bt,(x!==D||S!==D.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,x=D,S=D.version,v=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(g===void 0&&(g=new di(new Ds(2,2),new Xi({name:"BackgroundMaterial",uniforms:Fr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=D,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Bt,D.matrixAutoUpdate===!0&&D.updateMatrix(),g.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||S!==D.version||v!==r.toneMapping)&&(g.material.needsUpdate=!0,x=D,S=D.version,v=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function _(N,P){N.getRGB(zc,Fv(r)),i.buffers.color.setClear(zc.r,zc.g,zc.b,P,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,P=1){f.set(N),m=P,_(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(f,m)},render:E,addToRenderList:C,dispose:y}}function c1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function m(G,ee,re,pe,Q){let I=!1;const z=S(G,pe,re,ee);c!==z&&(c=z,p(c.object)),I=M(G,pe,re,Q),I&&E(G,pe,re,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,D(G,ee,re,pe),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function g(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function x(G){return r.deleteVertexArray(G)}function S(G,ee,re,pe){const Q=pe.wireframe===!0;let I=s[ee.id];I===void 0&&(I={},s[ee.id]=I);const z=G.isInstancedMesh===!0?G.id:0;let fe=I[z];fe===void 0&&(fe={},I[z]=fe);let he=fe[re.id];he===void 0&&(he={},fe[re.id]=he);let O=he[Q];return O===void 0&&(O=v(g()),he[Q]=O),O}function v(G){const ee=[],re=[],pe=[];for(let Q=0;Q<i;Q++)ee[Q]=0,re[Q]=0,pe[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:re,attributeDivisors:pe,object:G,attributes:{},index:null}}function M(G,ee,re,pe){const Q=c.attributes,I=ee.attributes;let z=0;const fe=re.getAttributes();for(const he in fe)if(fe[he].location>=0){const K=Q[he];let de=I[he];if(de===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(de=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(de=G.instanceColor)),K===void 0||K.attribute!==de||de&&K.data!==de.data)return!0;z++}return c.attributesNum!==z||c.index!==pe}function E(G,ee,re,pe){const Q={},I=ee.attributes;let z=0;const fe=re.getAttributes();for(const he in fe)if(fe[he].location>=0){let K=I[he];K===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(K=G.instanceColor));const de={};de.attribute=K,K&&K.data&&(de.data=K.data),Q[he]=de,z++}c.attributes=Q,c.attributesNum=z,c.index=pe}function C(){const G=c.newAttributes;for(let ee=0,re=G.length;ee<re;ee++)G[ee]=0}function _(G){y(G,0)}function y(G,ee){const re=c.newAttributes,pe=c.enabledAttributes,Q=c.attributeDivisors;re[G]=1,pe[G]===0&&(r.enableVertexAttribArray(G),pe[G]=1),Q[G]!==ee&&(r.vertexAttribDivisor(G,ee),Q[G]=ee)}function N(){const G=c.newAttributes,ee=c.enabledAttributes;for(let re=0,pe=ee.length;re<pe;re++)ee[re]!==G[re]&&(r.disableVertexAttribArray(re),ee[re]=0)}function P(G,ee,re,pe,Q,I,z){z===!0?r.vertexAttribIPointer(G,ee,re,Q,I):r.vertexAttribPointer(G,ee,re,pe,Q,I)}function D(G,ee,re,pe){C();const Q=pe.attributes,I=re.getAttributes(),z=ee.defaultAttributeValues;for(const fe in I){const he=I[fe];if(he.location>=0){let O=Q[fe];if(O===void 0&&(fe==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),fe==="instanceColor"&&G.instanceColor&&(O=G.instanceColor)),O!==void 0){const K=O.normalized,de=O.itemSize,ye=e.get(O);if(ye===void 0)continue;const Oe=ye.buffer,Ze=ye.type,te=ye.bytesPerElement,we=Ze===r.INT||Ze===r.UNSIGNED_INT||O.gpuType===Kh;if(O.isInterleavedBufferAttribute){const Ee=O.data,Je=Ee.stride,Qe=O.offset;if(Ee.isInstancedInterleavedBuffer){for(let $e=0;$e<he.locationSize;$e++)y(he.location+$e,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let $e=0;$e<he.locationSize;$e++)_(he.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let $e=0;$e<he.locationSize;$e++)P(he.location+$e,de/he.locationSize,Ze,K,Je*te,(Qe+de/he.locationSize*$e)*te,we)}else{if(O.isInstancedBufferAttribute){for(let Ee=0;Ee<he.locationSize;Ee++)y(he.location+Ee,O.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Ee=0;Ee<he.locationSize;Ee++)_(he.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Ee=0;Ee<he.locationSize;Ee++)P(he.location+Ee,de/he.locationSize,Ze,K,de*te,de/he.locationSize*Ee*te,we)}}else if(z!==void 0){const K=z[fe];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(he.location,K);break;case 3:r.vertexAttrib3fv(he.location,K);break;case 4:r.vertexAttrib4fv(he.location,K);break;default:r.vertexAttrib1fv(he.location,K)}}}}N()}function B(){L();for(const G in s){const ee=s[G];for(const re in ee){const pe=ee[re];for(const Q in pe){const I=pe[Q];for(const z in I)x(I[z].object),delete I[z];delete pe[Q]}}delete s[G]}}function V(G){if(s[G.id]===void 0)return;const ee=s[G.id];for(const re in ee){const pe=ee[re];for(const Q in pe){const I=pe[Q];for(const z in I)x(I[z].object),delete I[z];delete pe[Q]}}delete s[G.id]}function k(G){for(const ee in s){const re=s[ee];for(const pe in re){const Q=re[pe];if(Q[G.id]===void 0)continue;const I=Q[G.id];for(const z in I)x(I[z].object),delete I[z];delete Q[G.id]}}}function A(G){for(const ee in s){const re=s[ee],pe=G.isInstancedMesh===!0?G.id:0,Q=re[pe];if(Q!==void 0){for(const I in Q){const z=Q[I];for(const fe in z)x(z[fe].object),delete z[fe];delete Q[I]}delete re[pe],Object.keys(re).length===0&&delete s[ee]}}}function L(){xe(),f=!0,c!==l&&(c=l,p(c.object))}function xe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:L,resetDefaultState:xe,dispose:B,releaseStatesOfGeometry:V,releaseStatesOfObject:A,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:_,disableUnusedAttributes:N}}function u1(r,e,i){let s;function l(p){s=p}function c(p,x){r.drawArrays(s,p,x),i.update(x,s,1)}function f(p,x,S){S!==0&&(r.drawArraysInstanced(s,p,x,S),i.update(x,s,S))}function m(p,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,S);let M=0;for(let E=0;E<S;E++)M+=x[E];i.update(M,s,1)}function g(p,x,S,v){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],x[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,x,0,v,0,S);let E=0;for(let C=0;C<S;C++)E+=x[C]*v[C];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function f1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(k){return!(k!==fi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(k){const A=k===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ui&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ei&&!A)}function g(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=g(p);x!==p&&(at("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const S=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),V=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:f,textureTypeReadable:m,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:D,maxSamples:B,samples:V}}function d1(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new As,m=new dt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(S,v){const M=S.length!==0||v||s!==0||l;return l=v,s=S.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,v){i=x(S,v,0)},this.setState=function(S,v,M){const E=S.clippingPlanes,C=S.clipIntersection,_=S.clipShadows,y=r.get(S);if(!l||E===null||E.length===0||c&&!_)c?x(null):p();else{const N=c?0:s,P=N*4;let D=y.clippingState||null;g.value=D,D=x(E,v,P,M);for(let B=0;B!==P;++B)D[B]=i[B];y.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(S,v,M,E){const C=S!==null?S.length:0;let _=null;if(C!==0){if(_=g.value,E!==!0||_===null){const y=M+C*4,N=v.matrixWorldInverse;m.getNormalMatrix(N),(_===null||_.length<y)&&(_=new Float32Array(y));for(let P=0,D=M;P!==C;++P,D+=4)f.copy(S[P]).applyMatrix4(N,m),f.normal.toArray(_,D),_[D+3]=f.constant}g.value=_,g.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const es=4,Ex=[.125,.215,.35,.446,.526,.582],Rs=20,h1=256,Go=new Bv,Tx=new Lt;let jd=null,kd=0,Xd=0,Wd=!1;const p1=new le;class Ax{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:m=p1}=c;jd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,m),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,kd,Xd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ki,format:fi,colorSpace:Ir,depthBuffer:!1},l=wx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wx(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=m1(c)),this._blurMaterial=x1(c,e,i),this._ggxMaterial=g1(c,e,i)}return l}_compileMaterial(e){const i=new di(new Ri,e);this._renderer.compile(i,Go)}_sceneToCubeUV(e,i,s,l,c){const g=new bi(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,v=S.autoClear,M=S.toneMapping;S.getClearColor(Tx),S.toneMapping=Gi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new al,new Uv({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let y=!1;const N=e.background;N?N.isColor&&(_.color.copy(N),e.background=null,y=!0):(_.color.copy(Tx),y=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(g.up.set(0,p[P],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+x[P],c.y,c.z)):D===1?(g.up.set(0,0,p[P]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+x[P],c.z)):(g.up.set(0,p[P],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+x[P]));const B=this._cubeSize;Nr(l,D*B,P>2?B:0,B,B),S.setRenderTarget(l),y&&S.render(C,g),S.render(e,g)}S.toneMapping=M,S.autoClear=v,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Us||e.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const m=c.uniforms;m.envMap.value=e;const g=this._cubeSize;Nr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(f,Go)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,m=this._lodMeshes[s];m.material=f;const g=f.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(p*p-x*x),v=0+p*1.25,M=S*v,{_lodMax:E}=this,C=this._sizeLods[s],_=3*C*(s>E-es?s-E+es:0),y=4*(this._cubeSize-C);g.envMap.value=e.texture,g.roughness.value=M,g.mipInt.value=E-i,Nr(c,_,y,3*C,2*C),l.setRenderTarget(c),l.render(m,Go),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=E-s,Nr(e,_,y,3*C,2*C),l.setRenderTarget(e),l.render(m,Go)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,m){const g=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[l];S.material=p;const v=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Rs-1),C=c/E,_=isFinite(c)?1+Math.floor(x*C):Rs;_>Rs&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Rs}`);const y=[];let N=0;for(let k=0;k<Rs;++k){const A=k/C,L=Math.exp(-A*A/2);y.push(L),k===0?N+=L:k<_&&(N+=2*L)}for(let k=0;k<y.length;k++)y[k]=y[k]/N;v.envMap.value=e.texture,v.samples.value=_,v.weights.value=y,v.latitudinal.value=f==="latitudinal",m&&(v.poleAxis.value=m);const{_lodMax:P}=this;v.dTheta.value=E,v.mipInt.value=P-s;const D=this._sizeLods[l],B=3*D*(l>P-es?l-P+es:0),V=4*(this._cubeSize-D);Nr(i,B,V,3*D,2*D),g.setRenderTarget(i),g.render(S,Go)}}function m1(r){const e=[],i=[],s=[];let l=r;const c=r-es+1+Ex.length;for(let f=0;f<c;f++){const m=Math.pow(2,l);e.push(m);let g=1/m;f>r-es?g=Ex[f-r+es-1]:f===0&&(g=0),i.push(g);const p=1/(m-2),x=-p,S=1+p,v=[x,x,S,x,S,S,x,x,S,S,x,S],M=6,E=6,C=3,_=2,y=1,N=new Float32Array(C*E*M),P=new Float32Array(_*E*M),D=new Float32Array(y*E*M);for(let V=0;V<M;V++){const k=V%3*2/3-1,A=V>2?0:-1,L=[k,A,0,k+2/3,A,0,k+2/3,A+1,0,k,A,0,k+2/3,A+1,0,k,A+1,0];N.set(L,C*E*V),P.set(v,_*E*V);const xe=[V,V,V,V,V,V];D.set(xe,y*E*V)}const B=new Ri;B.setAttribute("position",new Ai(N,C)),B.setAttribute("uv",new Ai(P,_)),B.setAttribute("faceIndex",new Ai(D,y)),s.push(new di(B,null)),l>es&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function wx(r,e,i){const s=new Ti(r,e,i);return s.texture.mapping=nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function g1(r,e,i){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:au(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function x1(r,e,i){const s=new Float32Array(Rs),l=new le(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Rx(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Cx(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Hv extends Ti{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Pv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new al(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:Fr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:xa});c.uniforms.tEquirect.value=i;const f=new di(l,c),m=i.minFilter;return i.minFilter===Cs&&(i.minFilter=fn),new MM(1,10,this).update(e,f),i.minFilter=m,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function v1(r){let e=new WeakMap,i=new WeakMap,s=null;function l(v,M=!1){return v==null?null:M?f(v):c(v)}function c(v){if(v&&v.isTexture){const M=v.mapping;if(M===md||M===gd)if(e.has(v)){const E=e.get(v).texture;return m(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const C=new Hv(E.height);return C.fromEquirectangularTexture(r,v),e.set(v,C),v.addEventListener("dispose",p),m(C.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const M=v.mapping,E=M===md||M===gd,C=M===Us||M===Or;if(E||C){let _=i.get(v);const y=_!==void 0?_.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return s===null&&(s=new Ax(r)),_=E?s.fromEquirectangular(v,_):s.fromCubemap(v,_),_.texture.pmremVersion=v.pmremVersion,i.set(v,_),_.texture;if(_!==void 0)return _.texture;{const N=v.image;return E&&N&&N.height>0||C&&N&&g(N)?(s===null&&(s=new Ax(r)),_=E?s.fromEquirectangular(v):s.fromCubemap(v),_.texture.pmremVersion=v.pmremVersion,i.set(v,_),v.addEventListener("dispose",x),_.texture):null}}}return v}function m(v,M){return M===md?v.mapping=Us:M===gd&&(v.mapping=Or),v}function g(v){let M=0;const E=6;for(let C=0;C<E;C++)v[C]!==void 0&&M++;return M===E}function p(v){const M=v.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function x(v){const M=v.target;M.removeEventListener("dispose",x);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function _1(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Jc("WebGLRenderer: "+s+" extension not supported."),l}}}function y1(r,e,i,s){const l={},c=new WeakMap;function f(S){const v=S.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const M=c.get(v);M&&(e.remove(M),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function m(S,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function g(S){const v=S.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER)}function p(S){const v=[],M=S.index,E=S.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const N=M.array;C=M.version;for(let P=0,D=N.length;P<D;P+=3){const B=N[P+0],V=N[P+1],k=N[P+2];v.push(B,V,V,k,k,B)}}else{const N=E.array;C=E.version;for(let P=0,D=N.length/3-1;P<D;P+=3){const B=P+0,V=P+1,k=P+2;v.push(B,V,V,k,k,B)}}const _=new(E.count>=65535?Nv:Cv)(v,1);_.version=C;const y=c.get(S);y&&e.remove(y),c.set(S,_)}function x(S){const v=c.get(S);if(v){const M=S.index;M!==null&&v.version<M.version&&p(S)}else p(S);return c.get(S)}return{get:m,update:g,getWireframeAttribute:x}}function S1(r,e,i){let s;function l(v){s=v}let c,f;function m(v){c=v.type,f=v.bytesPerElement}function g(v,M){r.drawElements(s,M,c,v*f),i.update(M,s,1)}function p(v,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,v*f,E),i.update(M,s,E))}function x(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,v,0,E);let _=0;for(let y=0;y<E;y++)_+=M[y];i.update(_,s,1)}function S(v,M,E,C){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<v.length;y++)p(v[y]/f,M[y],C[y]);else{_.multiDrawElementsInstancedWEBGL(s,M,0,c,v,0,C,0,E);let y=0;for(let N=0;N<E;N++)y+=M[N]*C[N];i.update(y,s,1)}}this.setMode=l,this.setIndex=m,this.render=g,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function b1(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,m){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=m*(c/3);break;case r.LINES:i.lines+=m*(c/2);break;case r.LINE_STRIP:i.lines+=m*(c-1);break;case r.LINE_LOOP:i.lines+=m*c;break;case r.POINTS:i.points+=m*c;break;default:Rt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function M1(r,e,i){const s=new WeakMap,l=new en;function c(f,m,g){const p=f.morphTargetInfluences,x=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,S=x!==void 0?x.length:0;let v=s.get(m);if(v===void 0||v.count!==S){let xe=function(){A.dispose(),s.delete(m),m.removeEventListener("dispose",xe)};var M=xe;v!==void 0&&v.texture.dispose();const E=m.morphAttributes.position!==void 0,C=m.morphAttributes.normal!==void 0,_=m.morphAttributes.color!==void 0,y=m.morphAttributes.position||[],N=m.morphAttributes.normal||[],P=m.morphAttributes.color||[];let D=0;E===!0&&(D=1),C===!0&&(D=2),_===!0&&(D=3);let B=m.attributes.position.count*D,V=1;B>e.maxTextureSize&&(V=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const k=new Float32Array(B*V*4*S),A=new Av(k,B,V,S);A.type=Ei,A.needsUpdate=!0;const L=D*4;for(let G=0;G<S;G++){const ee=y[G],re=N[G],pe=P[G],Q=B*V*4*G;for(let I=0;I<ee.count;I++){const z=I*L;E===!0&&(l.fromBufferAttribute(ee,I),k[Q+z+0]=l.x,k[Q+z+1]=l.y,k[Q+z+2]=l.z,k[Q+z+3]=0),C===!0&&(l.fromBufferAttribute(re,I),k[Q+z+4]=l.x,k[Q+z+5]=l.y,k[Q+z+6]=l.z,k[Q+z+7]=0),_===!0&&(l.fromBufferAttribute(pe,I),k[Q+z+8]=l.x,k[Q+z+9]=l.y,k[Q+z+10]=l.z,k[Q+z+11]=pe.itemSize===4?l.w:1)}}v={count:S,texture:A,size:new lt(B,V)},s.set(m,v),m.addEventListener("dispose",xe)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let _=0;_<p.length;_++)E+=p[_];const C=m.morphTargetsRelative?1:1-E;g.getUniforms().setValue(r,"morphTargetBaseInfluence",C),g.getUniforms().setValue(r,"morphTargetInfluences",p)}g.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function E1(r,e,i,s,l){let c=new WeakMap;function f(p){const x=l.render.frame,S=p.geometry,v=e.get(p,S);if(c.get(v)!==x&&(e.update(v),c.set(v,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),c.get(p)!==x&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,x))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==x&&(M.update(),c.set(M,x))}return v}function m(){c=new WeakMap}function g(p){const x=p.target;x.removeEventListener("dispose",g),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:f,dispose:m}}const T1={[uv]:"LINEAR_TONE_MAPPING",[fv]:"REINHARD_TONE_MAPPING",[dv]:"CINEON_TONE_MAPPING",[hv]:"ACES_FILMIC_TONE_MAPPING",[mv]:"AGX_TONE_MAPPING",[gv]:"NEUTRAL_TONE_MAPPING",[pv]:"CUSTOM_TONE_MAPPING"};function A1(r,e,i,s,l){const c=new Ti(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Ti(e,i,{type:ki,depthBuffer:!1,stencilBuffer:!1}),m=new Ri;m.setAttribute("position",new wi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new wi([0,2,0,0,2,0],2));const g=new Xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new di(m,g),x=new Bv(-1,1,1,-1,0,1);let S=null,v=null,M=!1,E,C=null,_=[],y=!1;this.setSize=function(N,P){c.setSize(N,P),f.setSize(N,P);for(let D=0;D<_.length;D++){const B=_[D];B.setSize&&B.setSize(N,P)}},this.setEffects=function(N){_=N,y=_.length>0&&_[0].isRenderPass===!0;const P=c.width,D=c.height;for(let B=0;B<_.length;B++){const V=_[B];V.setSize&&V.setSize(P,D)}},this.begin=function(N,P){if(M||N.toneMapping===Gi&&_.length===0)return!1;if(C=P,P!==null){const D=P.width,B=P.height;(c.width!==D||c.height!==B)&&this.setSize(D,B)}return y===!1&&N.setRenderTarget(c),E=N.toneMapping,N.toneMapping=Gi,!0},this.hasRenderPass=function(){return y},this.end=function(N,P){N.toneMapping=E,M=!0;let D=c,B=f;for(let V=0;V<_.length;V++){const k=_[V];if(k.enabled!==!1&&(k.render(N,B,D,P),k.needsSwap!==!1)){const A=D;D=B,B=A}}if(S!==N.outputColorSpace||v!==N.toneMapping){S=N.outputColorSpace,v=N.toneMapping,g.defines={},Tt.getTransfer(S)===Bt&&(g.defines.SRGB_TRANSFER="");const V=T1[v];V&&(g.defines[V]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,N.setRenderTarget(C),N.render(p,x),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),m.dispose(),g.dispose()}}const Vv=new On,jh=new Jo(1,1),Gv=new Av,jv=new Qb,kv=new Pv,Nx=[],Dx=[],Ux=new Float32Array(16),Lx=new Float32Array(9),Ox=new Float32Array(4);function Hr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Nx[l];if(c===void 0&&(c=new Float32Array(l),Nx[l]=c),e!==0){s.toArray(c,0);for(let f=1,m=0;f!==e;++f)m+=i,r[f].toArray(c,m)}return c}function gn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function xn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function su(r,e){let i=Dx[e];i===void 0&&(i=new Int32Array(e),Dx[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function w1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function R1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2fv(this.addr,e),xn(i,e)}}function C1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;r.uniform3fv(this.addr,e),xn(i,e)}}function N1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4fv(this.addr,e),xn(i,e)}}function D1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(gn(i,s))return;Ox.set(s),r.uniformMatrix2fv(this.addr,!1,Ox),xn(i,s)}}function U1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(gn(i,s))return;Lx.set(s),r.uniformMatrix3fv(this.addr,!1,Lx),xn(i,s)}}function L1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(gn(i,s))return;Ux.set(s),r.uniformMatrix4fv(this.addr,!1,Ux),xn(i,s)}}function O1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function P1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2iv(this.addr,e),xn(i,e)}}function I1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3iv(this.addr,e),xn(i,e)}}function F1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4iv(this.addr,e),xn(i,e)}}function B1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function z1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2uiv(this.addr,e),xn(i,e)}}function H1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3uiv(this.addr,e),xn(i,e)}}function V1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4uiv(this.addr,e),xn(i,e)}}function G1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(jh.compareFunction=i.isReversedDepthBuffer()?ip:np,c=jh):c=Vv,i.setTexture2D(e||c,l)}function j1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||jv,l)}function k1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||kv,l)}function X1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Gv,l)}function W1(r){switch(r){case 5126:return w1;case 35664:return R1;case 35665:return C1;case 35666:return N1;case 35674:return D1;case 35675:return U1;case 35676:return L1;case 5124:case 35670:return O1;case 35667:case 35671:return P1;case 35668:case 35672:return I1;case 35669:case 35673:return F1;case 5125:return B1;case 36294:return z1;case 36295:return H1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return X1}}function q1(r,e){r.uniform1fv(this.addr,e)}function Y1(r,e){const i=Hr(e,this.size,2);r.uniform2fv(this.addr,i)}function Z1(r,e){const i=Hr(e,this.size,3);r.uniform3fv(this.addr,i)}function K1(r,e){const i=Hr(e,this.size,4);r.uniform4fv(this.addr,i)}function Q1(r,e){const i=Hr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function J1(r,e){const i=Hr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function $1(r,e){const i=Hr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function eA(r,e){r.uniform1iv(this.addr,e)}function tA(r,e){r.uniform2iv(this.addr,e)}function nA(r,e){r.uniform3iv(this.addr,e)}function iA(r,e){r.uniform4iv(this.addr,e)}function aA(r,e){r.uniform1uiv(this.addr,e)}function sA(r,e){r.uniform2uiv(this.addr,e)}function rA(r,e){r.uniform3uiv(this.addr,e)}function oA(r,e){r.uniform4uiv(this.addr,e)}function lA(r,e,i){const s=this.cache,l=e.length,c=su(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=jh:f=Vv;for(let m=0;m!==l;++m)i.setTexture2D(e[m]||f,c[m])}function cA(r,e,i){const s=this.cache,l=e.length,c=su(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||jv,c[f])}function uA(r,e,i){const s=this.cache,l=e.length,c=su(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||kv,c[f])}function fA(r,e,i){const s=this.cache,l=e.length,c=su(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Gv,c[f])}function dA(r){switch(r){case 5126:return q1;case 35664:return Y1;case 35665:return Z1;case 35666:return K1;case 35674:return Q1;case 35675:return J1;case 35676:return $1;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return aA;case 36294:return sA;case 36295:return rA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return fA}}class hA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=W1(i.type)}}class pA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=dA(i.type)}}class mA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const m=l[c];m.setValue(e,i[m.id],s)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function Px(r,e){r.seq.push(e),r.map[e.id]=e}function gA(r,e,i){const s=r.name,l=s.length;for(qd.lastIndex=0;;){const c=qd.exec(s),f=qd.lastIndex;let m=c[1];const g=c[2]==="]",p=c[3];if(g&&(m=m|0),p===void 0||p==="["&&f+2===l){Px(i,p===void 0?new hA(m,r,e):new pA(m,r,e));break}else{let S=i.map[m];S===void 0&&(S=new mA(m),Px(i,S)),i=S}}}class Wc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const m=e.getActiveUniform(i,f),g=e.getUniformLocation(i,m.name);gA(m,g,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const m=i[c],g=s[m.id];g.needsUpdate!==!1&&m.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Ix(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const xA=37297;let vA=0;function _A(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const m=f+1;s.push(`${m===e?">":" "} ${m}: ${i[f]}`)}return s.join(`
`)}const Fx=new dt;function yA(r){Tt._getMatrix(Fx,Tt.workingColorSpace,r);const e=`mat3( ${Fx.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(r)){case Zc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Bx(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const m=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+_A(r.getShaderSource(e),m)}else return c}function SA(r,e){const i=yA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const bA={[uv]:"Linear",[fv]:"Reinhard",[dv]:"Cineon",[hv]:"ACESFilmic",[mv]:"AgX",[gv]:"Neutral",[pv]:"Custom"};function MA(r,e){const i=bA[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new le;function EA(){Tt.getLuminanceCoefficients(Hc);const r=Hc.x.toFixed(4),e=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function AA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function wA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let m=1;c.type===r.FLOAT_MAT2&&(m=2),c.type===r.FLOAT_MAT3&&(m=3),c.type===r.FLOAT_MAT4&&(m=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:m}}return i}function Wo(r){return r!==""}function zx(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RA=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(r){return r.replace(RA,NA)}const CA=new Map;function NA(r,e){let i=ht[e];if(i===void 0){const s=CA.get(e);if(s!==void 0)i=ht[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return kh(i)}const DA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vx(r){return r.replace(DA,UA)}function UA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Gx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const LA={[Vc]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function OA(r){return LA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PA={[Us]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function IA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":PA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const FA={[Or]:"ENVMAP_MODE_REFRACTION"};function BA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":FA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zA={[cv]:"ENVMAP_BLENDING_MULTIPLY",[Cb]:"ENVMAP_BLENDING_MIX",[Nb]:"ENVMAP_BLENDING_ADD"};function HA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":zA[r.combine]||"ENVMAP_BLENDING_NONE"}function VA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function GA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,m=i.fragmentShader;const g=OA(i),p=IA(i),x=BA(i),S=HA(i),v=VA(i),M=TA(i),E=AA(c),C=l.createProgram();let _,y,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),y.length>0&&(y+=`
`)):(_=[Gx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),y=[Gx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?ht.tonemapping_pars_fragment:"",i.toneMapping!==Gi?MA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,SA("linearToOutputTexel",i.outputColorSpace),EA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),f=kh(f),f=zx(f,i),f=Hx(f,i),m=kh(m),m=zx(m,i),m=Hx(m,i),f=Vx(f),m=Vx(m),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",i.glslVersion===$0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=N+_+f,D=N+y+m,B=Ix(l,l.VERTEX_SHADER,P),V=Ix(l,l.FRAGMENT_SHADER,D);l.attachShader(C,B),l.attachShader(C,V),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function k(G){if(r.debug.checkShaderErrors){const ee=l.getProgramInfoLog(C)||"",re=l.getShaderInfoLog(B)||"",pe=l.getShaderInfoLog(V)||"",Q=ee.trim(),I=re.trim(),z=pe.trim();let fe=!0,he=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(fe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,B,V);else{const O=Bx(l,B,"vertex"),K=Bx(l,V,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+O+`
`+K)}else Q!==""?at("WebGLProgram: Program Info Log:",Q):(I===""||z==="")&&(he=!1);he&&(G.diagnostics={runnable:fe,programLog:Q,vertexShader:{log:I,prefix:_},fragmentShader:{log:z,prefix:y}})}l.deleteShader(B),l.deleteShader(V),A=new Wc(l,C),L=wA(l,C)}let A;this.getUniforms=function(){return A===void 0&&k(this),A};let L;this.getAttributes=function(){return L===void 0&&k(this),L};let xe=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return xe===!1&&(xe=l.getProgramParameter(C,xA)),xe},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=V,this}let jA=0;class kA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new XA(e),i.set(e,s)),s}}class XA{constructor(e){this.id=jA++,this.code=e,this.usedTimes=0}}function WA(r,e,i,s,l,c){const f=new wv,m=new kA,g=new Set,p=[],x=new Map,S=s.logarithmicDepthBuffer;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return g.add(A),A===0?"uv":`uv${A}`}function C(A,L,xe,G,ee){const re=G.fog,pe=ee.geometry,Q=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,I=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,z=e.get(A.envMap||Q,I),fe=z&&z.mapping===nu?z.image.height:null,he=M[A.type];A.precision!==null&&(v=s.getMaxPrecision(A.precision),v!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const O=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,K=O!==void 0?O.length:0;let de=0;pe.morphAttributes.position!==void 0&&(de=1),pe.morphAttributes.normal!==void 0&&(de=2),pe.morphAttributes.color!==void 0&&(de=3);let ye,Oe,Ze,te;if(he){const At=Hi[he];ye=At.vertexShader,Oe=At.fragmentShader}else ye=A.vertexShader,Oe=A.fragmentShader,m.update(A),Ze=m.getVertexShaderID(A),te=m.getFragmentShaderID(A);const we=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Je=ee.isInstancedMesh===!0,Qe=ee.isBatchedMesh===!0,$e=!!A.map,qt=!!A.matcap,st=!!z,_t=!!A.aoMap,Ct=!!A.lightMap,ot=!!A.bumpMap,bt=!!A.normalMap,j=!!A.displacementMap,Wt=!!A.emissiveMap,yt=!!A.metalnessMap,Et=!!A.roughnessMap,We=A.anisotropy>0,U=A.clearcoat>0,T=A.dispersion>0,q=A.iridescence>0,ge=A.sheen>0,ve=A.transmission>0,ne=We&&!!A.anisotropyMap,F=U&&!!A.clearcoatMap,se=U&&!!A.clearcoatNormalMap,Te=U&&!!A.clearcoatRoughnessMap,Le=q&&!!A.iridescenceMap,Se=q&&!!A.iridescenceThicknessMap,Ae=ge&&!!A.sheenColorMap,Be=ge&&!!A.sheenRoughnessMap,ze=!!A.specularMap,Pe=!!A.specularColorMap,ut=!!A.specularIntensityMap,W=ve&&!!A.transmissionMap,Ne=ve&&!!A.thicknessMap,Ce=!!A.gradientMap,He=!!A.alphaMap,Re=A.alphaTest>0,me=!!A.alphaHash,je=!!A.extensions;let nt=Gi;A.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(nt=r.toneMapping);const Ot={shaderID:he,shaderType:A.type,shaderName:A.name,vertexShader:ye,fragmentShader:Oe,defines:A.defines,customVertexShaderID:Ze,customFragmentShaderID:te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Qe,batchingColor:Qe&&ee._colorsTexture!==null,instancing:Je,instancingColor:Je&&ee.instanceColor!==null,instancingMorph:Je&&ee.morphTexture!==null,outputColorSpace:we===null?r.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ir,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:qt,envMap:st,envMapMode:st&&z.mapping,envMapCubeUVHeight:fe,aoMap:_t,lightMap:Ct,bumpMap:ot,normalMap:bt,displacementMap:j,emissiveMap:Wt,normalMapObjectSpace:bt&&A.normalMapType===Ob,normalMapTangentSpace:bt&&A.normalMapType===Lb,metalnessMap:yt,roughnessMap:Et,anisotropy:We,anisotropyMap:ne,clearcoat:U,clearcoatMap:F,clearcoatNormalMap:se,clearcoatRoughnessMap:Te,dispersion:T,iridescence:q,iridescenceMap:Le,iridescenceThicknessMap:Se,sheen:ge,sheenColorMap:Ae,sheenRoughnessMap:Be,specularMap:ze,specularColorMap:Pe,specularIntensityMap:ut,transmission:ve,transmissionMap:W,thicknessMap:Ne,gradientMap:Ce,opaque:A.transparent===!1&&A.blending===Dr&&A.alphaToCoverage===!1,alphaMap:He,alphaTest:Re,alphaHash:me,combine:A.combine,mapUv:$e&&E(A.map.channel),aoMapUv:_t&&E(A.aoMap.channel),lightMapUv:Ct&&E(A.lightMap.channel),bumpMapUv:ot&&E(A.bumpMap.channel),normalMapUv:bt&&E(A.normalMap.channel),displacementMapUv:j&&E(A.displacementMap.channel),emissiveMapUv:Wt&&E(A.emissiveMap.channel),metalnessMapUv:yt&&E(A.metalnessMap.channel),roughnessMapUv:Et&&E(A.roughnessMap.channel),anisotropyMapUv:ne&&E(A.anisotropyMap.channel),clearcoatMapUv:F&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:se&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(A.sheenRoughnessMap.channel),specularMapUv:ze&&E(A.specularMap.channel),specularColorMapUv:Pe&&E(A.specularColorMap.channel),specularIntensityMapUv:ut&&E(A.specularIntensityMap.channel),transmissionMapUv:W&&E(A.transmissionMap.channel),thicknessMapUv:Ne&&E(A.thicknessMap.channel),alphaMapUv:He&&E(A.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(bt||We),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!pe.attributes.uv&&($e||He),fog:!!re,useFog:A.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||pe.attributes.normal===void 0&&bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ee,skinning:ee.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:de,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&xe.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===Bt,decodeVideoTextureEmissive:Wt&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===Bt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ga,flipSided:A.side===jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:je&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&A.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ot.vertexUv1s=g.has(1),Ot.vertexUv2s=g.has(2),Ot.vertexUv3s=g.has(3),g.clear(),Ot}function _(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const xe in A.defines)L.push(xe),L.push(A.defines[xe]);return A.isRawShaderMaterial===!1&&(y(L,A),N(L,A),L.push(r.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function y(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function N(A,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),A.push(f.mask)}function P(A){const L=M[A.type];let xe;if(L){const G=Hi[L];xe=vM.clone(G.uniforms)}else xe=A.uniforms;return xe}function D(A,L){let xe=x.get(L);return xe!==void 0?++xe.usedTimes:(xe=new GA(r,L,A,l),p.push(xe),x.set(L,xe)),xe}function B(A){if(--A.usedTimes===0){const L=p.indexOf(A);p[L]=p[p.length-1],p.pop(),x.delete(A.cacheKey),A.destroy()}}function V(A){m.remove(A)}function k(){m.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:P,acquireProgram:D,releaseProgram:B,releaseShaderCache:V,programs:p,dispose:k}}function qA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let m=r.get(f);return m===void 0&&(m={},r.set(f,m)),m}function s(f){r.delete(f)}function l(f,m,g){r.get(f)[m]=g}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function YA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function jx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function kx(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function m(v,M,E,C,_,y){let N=r[e];return N===void 0?(N={id:v.id,object:v,geometry:M,material:E,materialVariant:f(v),groupOrder:C,renderOrder:v.renderOrder,z:_,group:y},r[e]=N):(N.id=v.id,N.object=v,N.geometry=M,N.material=E,N.materialVariant=f(v),N.groupOrder=C,N.renderOrder=v.renderOrder,N.z=_,N.group=y),e++,N}function g(v,M,E,C,_,y){const N=m(v,M,E,C,_,y);E.transmission>0?s.push(N):E.transparent===!0?l.push(N):i.push(N)}function p(v,M,E,C,_,y){const N=m(v,M,E,C,_,y);E.transmission>0?s.unshift(N):E.transparent===!0?l.unshift(N):i.unshift(N)}function x(v,M){i.length>1&&i.sort(v||YA),s.length>1&&s.sort(M||jx),l.length>1&&l.sort(M||jx)}function S(){for(let v=e,M=r.length;v<M;v++){const E=r[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:p,finish:S,sort:x}}function ZA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new kx,r.set(s,[f])):l>=c.length?(f=new kx,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function KA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Lt};break;case"SpotLight":i={position:new le,direction:new le,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=i,i}}}function QA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let JA=0;function $A(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function e2(r){const e=new KA,i=QA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new le);const l=new le,c=new on,f=new on;function m(p){let x=0,S=0,v=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,E=0,C=0,_=0,y=0,N=0,P=0,D=0,B=0,V=0,k=0;p.sort($A);for(let L=0,xe=p.length;L<xe;L++){const G=p[L],ee=G.color,re=G.intensity,pe=G.distance;let Q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Pr?Q=G.shadow.map.texture:Q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=ee.r*re,S+=ee.g*re,v+=ee.b*re;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],re);k++}else if(G.isDirectionalLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,fe=i.get(G);fe.shadowIntensity=z.intensity,fe.shadowBias=z.bias,fe.shadowNormalBias=z.normalBias,fe.shadowRadius=z.radius,fe.shadowMapSize=z.mapSize,s.directionalShadow[M]=fe,s.directionalShadowMap[M]=Q,s.directionalShadowMatrix[M]=G.shadow.matrix,N++}s.directional[M]=I,M++}else if(G.isSpotLight){const I=e.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(ee).multiplyScalar(re),I.distance=pe,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[C]=I;const z=G.shadow;if(G.map&&(s.spotLightMap[B]=G.map,B++,z.updateMatrices(G),G.castShadow&&V++),s.spotLightMatrix[C]=z.matrix,G.castShadow){const fe=i.get(G);fe.shadowIntensity=z.intensity,fe.shadowBias=z.bias,fe.shadowNormalBias=z.normalBias,fe.shadowRadius=z.radius,fe.shadowMapSize=z.mapSize,s.spotShadow[C]=fe,s.spotShadowMap[C]=Q,D++}C++}else if(G.isRectAreaLight){const I=e.get(G);I.color.copy(ee).multiplyScalar(re),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[_]=I,_++}else if(G.isPointLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const z=G.shadow,fe=i.get(G);fe.shadowIntensity=z.intensity,fe.shadowBias=z.bias,fe.shadowNormalBias=z.normalBias,fe.shadowRadius=z.radius,fe.shadowMapSize=z.mapSize,fe.shadowCameraNear=z.camera.near,fe.shadowCameraFar=z.camera.far,s.pointShadow[E]=fe,s.pointShadowMap[E]=Q,s.pointShadowMatrix[E]=G.shadow.matrix,P++}s.point[E]=I,E++}else if(G.isHemisphereLight){const I=e.get(G);I.skyColor.copy(G.color).multiplyScalar(re),I.groundColor.copy(G.groundColor).multiplyScalar(re),s.hemi[y]=I,y++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=S,s.ambient[2]=v;const A=s.hash;(A.directionalLength!==M||A.pointLength!==E||A.spotLength!==C||A.rectAreaLength!==_||A.hemiLength!==y||A.numDirectionalShadows!==N||A.numPointShadows!==P||A.numSpotShadows!==D||A.numSpotMaps!==B||A.numLightProbes!==k)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=_,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=D+B-V,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=k,A.directionalLength=M,A.pointLength=E,A.spotLength=C,A.rectAreaLength=_,A.hemiLength=y,A.numDirectionalShadows=N,A.numPointShadows=P,A.numSpotShadows=D,A.numSpotMaps=B,A.numLightProbes=k,s.version=JA++)}function g(p,x){let S=0,v=0,M=0,E=0,C=0;const _=x.matrixWorldInverse;for(let y=0,N=p.length;y<N;y++){const P=p[y];if(P.isDirectionalLight){const D=s.directional[S];D.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(_),S++}else if(P.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(_),M++}else if(P.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(_),f.identity(),c.copy(P.matrixWorld),c.premultiply(_),f.extractRotation(c),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(P.isPointLight){const D=s.point[v];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(_),v++}else if(P.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(_),C++}}}return{setup:m,setupView:g,state:s}}function Xx(r){const e=new e2(r),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function f(x){s.push(x)}function m(){e.setup(i)}function g(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:m,setupLightsView:g,pushLight:c,pushShadow:f}}function t2(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let m;return f===void 0?(m=new Xx(r),e.set(l,[m])):c>=f.length?(m=new Xx(r),f.push(m)):m=f[c],m}function s(){e=new WeakMap}return{get:i,dispose:s}}const n2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,a2=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],s2=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],Wx=new on,jo=new le,Yd=new le;function r2(r,e,i){let s=new Ov;const l=new lt,c=new lt,f=new en,m=new SM,g=new bM,p={},x=i.maxTextureSize,S={[ns]:jn,[jn]:ns,[ga]:ga},v=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:n2,fragmentShader:i2}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ri;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new di(E,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let y=this.type;this.render=function(V,k,A){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||V.length===0)return;this.type===ub&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vc);const L=r.getRenderTarget(),xe=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),ee=r.state;ee.setBlending(xa),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const re=y!==this.type;re&&k.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(Q=>Q.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,Q=V.length;pe<Q;pe++){const I=V[pe],z=I.shadow;if(z===void 0){at("WebGLShadowMap:",I,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const fe=z.getFrameExtents();l.multiply(fe),c.copy(z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/fe.x),l.x=c.x*fe.x,z.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/fe.y),l.y=c.y*fe.y,z.mapSize.y=c.y));const he=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=he,z.map===null||re===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ko){if(I.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ti(l.x,l.y,{format:Pr,type:ki,minFilter:fn,magFilter:fn,generateMipmaps:!1}),z.map.texture.name=I.name+".shadowMap",z.map.depthTexture=new Jo(l.x,l.y,Ei),z.map.depthTexture.name=I.name+".shadowMapDepth",z.map.depthTexture.format=_a,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn}else I.isPointLight?(z.map=new Hv(l.x),z.map.depthTexture=new gM(l.x,ji)):(z.map=new Ti(l.x,l.y),z.map.depthTexture=new Jo(l.x,l.y,ji)),z.map.depthTexture.name=I.name+".shadowMap",z.map.depthTexture.format=_a,this.type===Vc?(z.map.depthTexture.compareFunction=he?ip:np,z.map.depthTexture.minFilter=fn,z.map.depthTexture.magFilter=fn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn);z.camera.updateProjectionMatrix()}const O=z.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<O;K++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,K),r.clear();else{K===0&&(r.setRenderTarget(z.map),r.clear());const de=z.getViewport(K);f.set(c.x*de.x,c.y*de.y,c.x*de.z,c.y*de.w),ee.viewport(f)}if(I.isPointLight){const de=z.camera,ye=z.matrix,Oe=I.distance||de.far;Oe!==de.far&&(de.far=Oe,de.updateProjectionMatrix()),jo.setFromMatrixPosition(I.matrixWorld),de.position.copy(jo),Yd.copy(de.position),Yd.add(a2[K]),de.up.copy(s2[K]),de.lookAt(Yd),de.updateMatrixWorld(),ye.makeTranslation(-jo.x,-jo.y,-jo.z),Wx.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Wx,de.coordinateSystem,de.reversedDepth)}else z.updateMatrices(I);s=z.getFrustum(),D(k,A,z.camera,I,this.type)}z.isPointLightShadow!==!0&&this.type===ko&&N(z,A),z.needsUpdate=!1}y=this.type,_.needsUpdate=!1,r.setRenderTarget(L,xe,G)};function N(V,k){const A=e.update(C);v.defines.VSM_SAMPLES!==V.blurSamples&&(v.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ti(l.x,l.y,{format:Pr,type:ki})),v.uniforms.shadow_pass.value=V.map.depthTexture,v.uniforms.resolution.value=V.mapSize,v.uniforms.radius.value=V.radius,r.setRenderTarget(V.mapPass),r.clear(),r.renderBufferDirect(k,null,A,v,C,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,r.setRenderTarget(V.map),r.clear(),r.renderBufferDirect(k,null,A,M,C,null)}function P(V,k,A,L){let xe=null;const G=A.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(G!==void 0)xe=G;else if(xe=A.isPointLight===!0?g:m,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const ee=xe.uuid,re=k.uuid;let pe=p[ee];pe===void 0&&(pe={},p[ee]=pe);let Q=pe[re];Q===void 0&&(Q=xe.clone(),pe[re]=Q,k.addEventListener("dispose",B)),xe=Q}if(xe.visible=k.visible,xe.wireframe=k.wireframe,L===ko?xe.side=k.shadowSide!==null?k.shadowSide:k.side:xe.side=k.shadowSide!==null?k.shadowSide:S[k.side],xe.alphaMap=k.alphaMap,xe.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,xe.map=k.map,xe.clipShadows=k.clipShadows,xe.clippingPlanes=k.clippingPlanes,xe.clipIntersection=k.clipIntersection,xe.displacementMap=k.displacementMap,xe.displacementScale=k.displacementScale,xe.displacementBias=k.displacementBias,xe.wireframeLinewidth=k.wireframeLinewidth,xe.linewidth=k.linewidth,A.isPointLight===!0&&xe.isMeshDistanceMaterial===!0){const ee=r.properties.get(xe);ee.light=A}return xe}function D(V,k,A,L,xe){if(V.visible===!1)return;if(V.layers.test(k.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&xe===ko)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,V.matrixWorld);const re=e.update(V),pe=V.material;if(Array.isArray(pe)){const Q=re.groups;for(let I=0,z=Q.length;I<z;I++){const fe=Q[I],he=pe[fe.materialIndex];if(he&&he.visible){const O=P(V,he,L,xe);V.onBeforeShadow(r,V,k,A,re,O,fe),r.renderBufferDirect(A,null,re,O,V,fe),V.onAfterShadow(r,V,k,A,re,O,fe)}}}else if(pe.visible){const Q=P(V,pe,L,xe);V.onBeforeShadow(r,V,k,A,re,Q,null),r.renderBufferDirect(A,null,re,Q,V,null),V.onAfterShadow(r,V,k,A,re,Q,null)}}const ee=V.children;for(let re=0,pe=ee.length;re<pe;re++)D(ee[re],k,A,L,xe)}function B(V){V.target.removeEventListener("dispose",B);for(const A in p){const L=p[A],xe=V.target.uuid;xe in L&&(L[xe].dispose(),delete L[xe])}}}function o2(r,e){function i(){let W=!1;const Ne=new en;let Ce=null;const He=new en(0,0,0,0);return{setMask:function(Re){Ce!==Re&&!W&&(r.colorMask(Re,Re,Re,Re),Ce=Re)},setLocked:function(Re){W=Re},setClear:function(Re,me,je,nt,Ot){Ot===!0&&(Re*=nt,me*=nt,je*=nt),Ne.set(Re,me,je,nt),He.equals(Ne)===!1&&(r.clearColor(Re,me,je,nt),He.copy(Ne))},reset:function(){W=!1,Ce=null,He.set(-1,0,0,0)}}}function s(){let W=!1,Ne=!1,Ce=null,He=null,Re=null;return{setReversed:function(me){if(Ne!==me){const je=e.get("EXT_clip_control");me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ne=me;const nt=Re;Re=null,this.setClear(nt)}},getReversed:function(){return Ne},setTest:function(me){me?we(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(me){Ce!==me&&!W&&(r.depthMask(me),Ce=me)},setFunc:function(me){if(Ne&&(me=kb[me]),He!==me){switch(me){case th:r.depthFunc(r.NEVER);break;case nh:r.depthFunc(r.ALWAYS);break;case ih:r.depthFunc(r.LESS);break;case Lr:r.depthFunc(r.LEQUAL);break;case ah:r.depthFunc(r.EQUAL);break;case sh:r.depthFunc(r.GEQUAL);break;case rh:r.depthFunc(r.GREATER);break;case oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}He=me}},setLocked:function(me){W=me},setClear:function(me){Re!==me&&(Re=me,Ne&&(me=1-me),r.clearDepth(me))},reset:function(){W=!1,Ce=null,He=null,Re=null,Ne=!1}}}function l(){let W=!1,Ne=null,Ce=null,He=null,Re=null,me=null,je=null,nt=null,Ot=null;return{setTest:function(At){W||(At?we(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(At){Ne!==At&&!W&&(r.stencilMask(At),Ne=At)},setFunc:function(At,hi,vn){(Ce!==At||He!==hi||Re!==vn)&&(r.stencilFunc(At,hi,vn),Ce=At,He=hi,Re=vn)},setOp:function(At,hi,vn){(me!==At||je!==hi||nt!==vn)&&(r.stencilOp(At,hi,vn),me=At,je=hi,nt=vn)},setLocked:function(At){W=At},setClear:function(At){Ot!==At&&(r.clearStencil(At),Ot=At)},reset:function(){W=!1,Ne=null,Ce=null,He=null,Re=null,me=null,je=null,nt=null,Ot=null}}}const c=new i,f=new s,m=new l,g=new WeakMap,p=new WeakMap;let x={},S={},v=new WeakMap,M=[],E=null,C=!1,_=null,y=null,N=null,P=null,D=null,B=null,V=null,k=new Lt(0,0,0),A=0,L=!1,xe=null,G=null,ee=null,re=null,pe=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(fe)[1]),I=z>=1):fe.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),I=z>=2);let he=null,O={};const K=r.getParameter(r.SCISSOR_BOX),de=r.getParameter(r.VIEWPORT),ye=new en().fromArray(K),Oe=new en().fromArray(de);function Ze(W,Ne,Ce,He){const Re=new Uint8Array(4),me=r.createTexture();r.bindTexture(W,me),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<Ce;je++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,He,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(Ne+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return me}const te={};te[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),m.setClear(0),we(r.DEPTH_TEST),f.setFunc(Lr),ot(!1),bt(Y0),we(r.CULL_FACE),_t(xa);function we(W){x[W]!==!0&&(r.enable(W),x[W]=!0)}function Ee(W){x[W]!==!1&&(r.disable(W),x[W]=!1)}function Je(W,Ne){return S[W]!==Ne?(r.bindFramebuffer(W,Ne),S[W]=Ne,W===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=Ne),W===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Qe(W,Ne){let Ce=M,He=!1;if(W){Ce=v.get(Ne),Ce===void 0&&(Ce=[],v.set(Ne,Ce));const Re=W.textures;if(Ce.length!==Re.length||Ce[0]!==r.COLOR_ATTACHMENT0){for(let me=0,je=Re.length;me<je;me++)Ce[me]=r.COLOR_ATTACHMENT0+me;Ce.length=Re.length,He=!0}}else Ce[0]!==r.BACK&&(Ce[0]=r.BACK,He=!0);He&&r.drawBuffers(Ce)}function $e(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const qt={[ws]:r.FUNC_ADD,[db]:r.FUNC_SUBTRACT,[hb]:r.FUNC_REVERSE_SUBTRACT};qt[pb]=r.MIN,qt[mb]=r.MAX;const st={[gb]:r.ZERO,[xb]:r.ONE,[vb]:r.SRC_COLOR,[$d]:r.SRC_ALPHA,[Eb]:r.SRC_ALPHA_SATURATE,[bb]:r.DST_COLOR,[yb]:r.DST_ALPHA,[_b]:r.ONE_MINUS_SRC_COLOR,[eh]:r.ONE_MINUS_SRC_ALPHA,[Mb]:r.ONE_MINUS_DST_COLOR,[Sb]:r.ONE_MINUS_DST_ALPHA,[Tb]:r.CONSTANT_COLOR,[Ab]:r.ONE_MINUS_CONSTANT_COLOR,[wb]:r.CONSTANT_ALPHA,[Rb]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Ne,Ce,He,Re,me,je,nt,Ot,At){if(W===xa){C===!0&&(Ee(r.BLEND),C=!1);return}if(C===!1&&(we(r.BLEND),C=!0),W!==fb){if(W!==_||At!==L){if((y!==ws||D!==ws)&&(r.blendEquation(r.FUNC_ADD),y=ws,D=ws),At)switch(W){case Dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jd:r.blendFunc(r.ONE,r.ONE);break;case Z0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case K0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Z0:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K0:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",W);break}N=null,P=null,B=null,V=null,k.set(0,0,0),A=0,_=W,L=At}return}Re=Re||Ne,me=me||Ce,je=je||He,(Ne!==y||Re!==D)&&(r.blendEquationSeparate(qt[Ne],qt[Re]),y=Ne,D=Re),(Ce!==N||He!==P||me!==B||je!==V)&&(r.blendFuncSeparate(st[Ce],st[He],st[me],st[je]),N=Ce,P=He,B=me,V=je),(nt.equals(k)===!1||Ot!==A)&&(r.blendColor(nt.r,nt.g,nt.b,Ot),k.copy(nt),A=Ot),_=W,L=!1}function Ct(W,Ne){W.side===ga?Ee(r.CULL_FACE):we(r.CULL_FACE);let Ce=W.side===jn;Ne&&(Ce=!Ce),ot(Ce),W.blending===Dr&&W.transparent===!1?_t(xa):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const He=W.stencilWrite;m.setTest(He),He&&(m.setMask(W.stencilWriteMask),m.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),m.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Wt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?we(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function ot(W){xe!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),xe=W)}function bt(W){W!==lb?(we(r.CULL_FACE),W!==G&&(W===Y0?r.cullFace(r.BACK):W===cb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),G=W}function j(W){W!==ee&&(I&&r.lineWidth(W),ee=W)}function Wt(W,Ne,Ce){W?(we(r.POLYGON_OFFSET_FILL),(re!==Ne||pe!==Ce)&&(re=Ne,pe=Ce,f.getReversed()&&(Ne=-Ne),r.polygonOffset(Ne,Ce))):Ee(r.POLYGON_OFFSET_FILL)}function yt(W){W?we(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function Et(W){W===void 0&&(W=r.TEXTURE0+Q-1),he!==W&&(r.activeTexture(W),he=W)}function We(W,Ne,Ce){Ce===void 0&&(he===null?Ce=r.TEXTURE0+Q-1:Ce=he);let He=O[Ce];He===void 0&&(He={type:void 0,texture:void 0},O[Ce]=He),(He.type!==W||He.texture!==Ne)&&(he!==Ce&&(r.activeTexture(Ce),he=Ce),r.bindTexture(W,Ne||te[W]),He.type=W,He.texture=Ne)}function U(){const W=O[he];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ge(){try{r.texSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ve(){try{r.texSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ne(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function F(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function se(){try{r.texStorage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Te(){try{r.texStorage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Le(){try{r.texImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Se(){try{r.texImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ae(W){ye.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ye.copy(W))}function Be(W){Oe.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Oe.copy(W))}function ze(W,Ne){let Ce=p.get(Ne);Ce===void 0&&(Ce=new WeakMap,p.set(Ne,Ce));let He=Ce.get(W);He===void 0&&(He=r.getUniformBlockIndex(Ne,W.name),Ce.set(W,He))}function Pe(W,Ne){const He=p.get(Ne).get(W);g.get(Ne)!==He&&(r.uniformBlockBinding(Ne,He,W.__bindingPointIndex),g.set(Ne,He))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},he=null,O={},S={},v=new WeakMap,M=[],E=null,C=!1,_=null,y=null,N=null,P=null,D=null,B=null,V=null,k=new Lt(0,0,0),A=0,L=!1,xe=null,G=null,ee=null,re=null,pe=null,ye.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),m.reset()}return{buffers:{color:c,depth:f,stencil:m},enable:we,disable:Ee,bindFramebuffer:Je,drawBuffers:Qe,useProgram:$e,setBlending:_t,setMaterial:Ct,setFlipSided:ot,setCullFace:bt,setLineWidth:j,setPolygonOffset:Wt,setScissorTest:yt,activeTexture:Et,bindTexture:We,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:Le,texImage3D:Se,updateUBOMapping:ze,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:Te,texSubImage2D:ge,texSubImage3D:ve,compressedTexSubImage2D:ne,compressedTexSubImage3D:F,scissor:Ae,viewport:Be,reset:ut}}function l2(r,e,i,s,l,c,f){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new lt,x=new WeakMap;let S;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return M?new OffscreenCanvas(U,T):Qc("canvas")}function C(U,T,q){let ge=1;const ve=We(U);if((ve.width>q||ve.height>q)&&(ge=q/Math.max(ve.width,ve.height)),ge<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ne=Math.floor(ge*ve.width),F=Math.floor(ge*ve.height);S===void 0&&(S=E(ne,F));const se=T?E(ne,F):S;return se.width=ne,se.height=F,se.getContext("2d").drawImage(U,0,0,ne,F),at("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ne+"x"+F+")."),se}else return"data"in U&&at("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),U;return U}function _(U){return U.generateMipmaps}function y(U){r.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(U,T,q,ge,ve=!1){if(U!==null){if(r[U]!==void 0)return r[U];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ne=T;if(T===r.RED&&(q===r.FLOAT&&(ne=r.R32F),q===r.HALF_FLOAT&&(ne=r.R16F),q===r.UNSIGNED_BYTE&&(ne=r.R8)),T===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ne=r.R8UI),q===r.UNSIGNED_SHORT&&(ne=r.R16UI),q===r.UNSIGNED_INT&&(ne=r.R32UI),q===r.BYTE&&(ne=r.R8I),q===r.SHORT&&(ne=r.R16I),q===r.INT&&(ne=r.R32I)),T===r.RG&&(q===r.FLOAT&&(ne=r.RG32F),q===r.HALF_FLOAT&&(ne=r.RG16F),q===r.UNSIGNED_BYTE&&(ne=r.RG8)),T===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ne=r.RG8UI),q===r.UNSIGNED_SHORT&&(ne=r.RG16UI),q===r.UNSIGNED_INT&&(ne=r.RG32UI),q===r.BYTE&&(ne=r.RG8I),q===r.SHORT&&(ne=r.RG16I),q===r.INT&&(ne=r.RG32I)),T===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ne=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ne=r.RGB16UI),q===r.UNSIGNED_INT&&(ne=r.RGB32UI),q===r.BYTE&&(ne=r.RGB8I),q===r.SHORT&&(ne=r.RGB16I),q===r.INT&&(ne=r.RGB32I)),T===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ne=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ne=r.RGBA16UI),q===r.UNSIGNED_INT&&(ne=r.RGBA32UI),q===r.BYTE&&(ne=r.RGBA8I),q===r.SHORT&&(ne=r.RGBA16I),q===r.INT&&(ne=r.RGBA32I)),T===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ne=r.R11F_G11F_B10F)),T===r.RGBA){const F=ve?Zc:Tt.getTransfer(ge);q===r.FLOAT&&(ne=r.RGBA32F),q===r.HALF_FLOAT&&(ne=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ne=F===Bt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function D(U,T){let q;return U?T===null||T===ji||T===Qo?q=r.DEPTH24_STENCIL8:T===Ei?q=r.DEPTH32F_STENCIL8:T===Ko&&(q=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ji||T===Qo?q=r.DEPTH_COMPONENT24:T===Ei?q=r.DEPTH_COMPONENT32F:T===Ko&&(q=r.DEPTH_COMPONENT16),q}function B(U,T){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==wn&&U.minFilter!==fn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function V(U){const T=U.target;T.removeEventListener("dispose",V),A(T),T.isVideoTexture&&x.delete(T)}function k(U){const T=U.target;T.removeEventListener("dispose",k),xe(T)}function A(U){const T=s.get(U);if(T.__webglInit===void 0)return;const q=U.source,ge=v.get(q);if(ge){const ve=ge[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&L(U),Object.keys(ge).length===0&&v.delete(q)}s.remove(U)}function L(U){const T=s.get(U);r.deleteTexture(T.__webglTexture);const q=U.source,ge=v.get(q);delete ge[T.__cacheKey],f.memory.textures--}function xe(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let ve=0;ve<T.__webglFramebuffer[ge].length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[ge][ve]);else r.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)r.deleteFramebuffer(T.__webglFramebuffer[ge]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=U.textures;for(let ge=0,ve=q.length;ge<ve;ge++){const ne=s.get(q[ge]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),f.memory.textures--),s.remove(q[ge])}s.remove(U)}let G=0;function ee(){G=0}function re(){const U=G;return U>=l.maxTextures&&at("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function pe(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function Q(U,T){const q=s.get(U);if(U.isVideoTexture&&yt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const ge=U.image;if(ge===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{te(q,U,T);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+T)}function I(U,T){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){te(q,U,T);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+T)}function z(U,T){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){te(q,U,T);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+T)}function fe(U,T){const q=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){we(q,U,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+T)}const he={[lh]:r.REPEAT,[ei]:r.CLAMP_TO_EDGE,[ch]:r.MIRRORED_REPEAT},O={[wn]:r.NEAREST,[Db]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[fn]:r.LINEAR,[xd]:r.LINEAR_MIPMAP_NEAREST,[Cs]:r.LINEAR_MIPMAP_LINEAR},K={[Pb]:r.NEVER,[Hb]:r.ALWAYS,[Ib]:r.LESS,[np]:r.LEQUAL,[Fb]:r.EQUAL,[ip]:r.GEQUAL,[Bb]:r.GREATER,[zb]:r.NOTEQUAL};function de(U,T){if(T.type===Ei&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===fn||T.magFilter===xd||T.magFilter===gc||T.magFilter===Cs||T.minFilter===fn||T.minFilter===xd||T.minFilter===gc||T.minFilter===Cs)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,he[T.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,he[T.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,he[T.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,O[T.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,O[T.minFilter]),T.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wn||T.minFilter!==gc&&T.minFilter!==Cs||T.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ye(U,T){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",V));const ge=T.source;let ve=v.get(ge);ve===void 0&&(ve={},v.set(ge,ve));const ne=pe(T);if(ne!==U.__cacheKey){ve[ne]===void 0&&(ve[ne]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,q=!0),ve[ne].usedTimes++;const F=ve[U.__cacheKey];F!==void 0&&(ve[U.__cacheKey].usedTimes--,F.usedTimes===0&&L(T)),U.__cacheKey=ne,U.__webglTexture=ve[ne].texture}return q}function Oe(U,T,q){return Math.floor(Math.floor(U/q)/T)}function Ze(U,T,q,ge){const ne=U.updateRanges;if(ne.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,q,ge,T.data);else{ne.sort((Se,Ae)=>Se.start-Ae.start);let F=0;for(let Se=1;Se<ne.length;Se++){const Ae=ne[F],Be=ne[Se],ze=Ae.start+Ae.count,Pe=Oe(Be.start,T.width,4),ut=Oe(Ae.start,T.width,4);Be.start<=ze+1&&Pe===ut&&Oe(Be.start+Be.count-1,T.width,4)===Pe?Ae.count=Math.max(Ae.count,Be.start+Be.count-Ae.start):(++F,ne[F]=Be)}ne.length=F+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),Te=r.getParameter(r.UNPACK_SKIP_PIXELS),Le=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Se=0,Ae=ne.length;Se<Ae;Se++){const Be=ne[Se],ze=Math.floor(Be.start/4),Pe=Math.ceil(Be.count/4),ut=ze%T.width,W=Math.floor(ze/T.width),Ne=Pe,Ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ut,W,Ne,Ce,q,ge,T.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Te),r.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function te(U,T,q){let ge=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=r.TEXTURE_3D);const ve=ye(U,T),ne=T.source;i.bindTexture(ge,U.__webglTexture,r.TEXTURE0+q);const F=s.get(ne);if(ne.version!==F.__version||ve===!0){i.activeTexture(r.TEXTURE0+q);const se=Tt.getPrimaries(Tt.workingColorSpace),Te=T.colorSpace===Ja?null:Tt.getPrimaries(T.colorSpace),Le=T.colorSpace===Ja||se===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Se=C(T.image,!1,l.maxTextureSize);Se=Et(T,Se);const Ae=c.convert(T.format,T.colorSpace),Be=c.convert(T.type);let ze=P(T.internalFormat,Ae,Be,T.colorSpace,T.isVideoTexture);de(ge,T);let Pe;const ut=T.mipmaps,W=T.isVideoTexture!==!0,Ne=F.__version===void 0||ve===!0,Ce=ne.dataReady,He=B(T,Se);if(T.isDepthTexture)ze=D(T.format===Ns,T.type),Ne&&(W?i.texStorage2D(r.TEXTURE_2D,1,ze,Se.width,Se.height):i.texImage2D(r.TEXTURE_2D,0,ze,Se.width,Se.height,0,Ae,Be,null));else if(T.isDataTexture)if(ut.length>0){W&&Ne&&i.texStorage2D(r.TEXTURE_2D,He,ze,ut[0].width,ut[0].height);for(let Re=0,me=ut.length;Re<me;Re++)Pe=ut[Re],W?Ce&&i.texSubImage2D(r.TEXTURE_2D,Re,0,0,Pe.width,Pe.height,Ae,Be,Pe.data):i.texImage2D(r.TEXTURE_2D,Re,ze,Pe.width,Pe.height,0,Ae,Be,Pe.data);T.generateMipmaps=!1}else W?(Ne&&i.texStorage2D(r.TEXTURE_2D,He,ze,Se.width,Se.height),Ce&&Ze(T,Se,Ae,Be)):i.texImage2D(r.TEXTURE_2D,0,ze,Se.width,Se.height,0,Ae,Be,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,He,ze,ut[0].width,ut[0].height,Se.depth);for(let Re=0,me=ut.length;Re<me;Re++)if(Pe=ut[Re],T.format!==fi)if(Ae!==null)if(W){if(Ce)if(T.layerUpdates.size>0){const je=Mx(Pe.width,Pe.height,T.format,T.type);for(const nt of T.layerUpdates){const Ot=Pe.data.subarray(nt*je/Pe.data.BYTES_PER_ELEMENT,(nt+1)*je/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,nt,Pe.width,Pe.height,1,Ae,Ot)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,Pe.width,Pe.height,Se.depth,Ae,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Re,ze,Pe.width,Pe.height,Se.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ce&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,Pe.width,Pe.height,Se.depth,Ae,Be,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Re,ze,Pe.width,Pe.height,Se.depth,0,Ae,Be,Pe.data)}else{W&&Ne&&i.texStorage2D(r.TEXTURE_2D,He,ze,ut[0].width,ut[0].height);for(let Re=0,me=ut.length;Re<me;Re++)Pe=ut[Re],T.format!==fi?Ae!==null?W?Ce&&i.compressedTexSubImage2D(r.TEXTURE_2D,Re,0,0,Pe.width,Pe.height,Ae,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,Re,ze,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ce&&i.texSubImage2D(r.TEXTURE_2D,Re,0,0,Pe.width,Pe.height,Ae,Be,Pe.data):i.texImage2D(r.TEXTURE_2D,Re,ze,Pe.width,Pe.height,0,Ae,Be,Pe.data)}else if(T.isDataArrayTexture)if(W){if(Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,He,ze,Se.width,Se.height,Se.depth),Ce)if(T.layerUpdates.size>0){const Re=Mx(Se.width,Se.height,T.format,T.type);for(const me of T.layerUpdates){const je=Se.data.subarray(me*Re/Se.data.BYTES_PER_ELEMENT,(me+1)*Re/Se.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Se.width,Se.height,1,Ae,Be,je)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ae,Be,Se.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,Se.width,Se.height,Se.depth,0,Ae,Be,Se.data);else if(T.isData3DTexture)W?(Ne&&i.texStorage3D(r.TEXTURE_3D,He,ze,Se.width,Se.height,Se.depth),Ce&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ae,Be,Se.data)):i.texImage3D(r.TEXTURE_3D,0,ze,Se.width,Se.height,Se.depth,0,Ae,Be,Se.data);else if(T.isFramebufferTexture){if(Ne)if(W)i.texStorage2D(r.TEXTURE_2D,He,ze,Se.width,Se.height);else{let Re=Se.width,me=Se.height;for(let je=0;je<He;je++)i.texImage2D(r.TEXTURE_2D,je,ze,Re,me,0,Ae,Be,null),Re>>=1,me>>=1}}else if(ut.length>0){if(W&&Ne){const Re=We(ut[0]);i.texStorage2D(r.TEXTURE_2D,He,ze,Re.width,Re.height)}for(let Re=0,me=ut.length;Re<me;Re++)Pe=ut[Re],W?Ce&&i.texSubImage2D(r.TEXTURE_2D,Re,0,0,Ae,Be,Pe):i.texImage2D(r.TEXTURE_2D,Re,ze,Ae,Be,Pe);T.generateMipmaps=!1}else if(W){if(Ne){const Re=We(Se);i.texStorage2D(r.TEXTURE_2D,He,ze,Re.width,Re.height)}Ce&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Be,Se)}else i.texImage2D(r.TEXTURE_2D,0,ze,Ae,Be,Se);_(T)&&y(ge),F.__version=ne.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function we(U,T,q){if(T.image.length!==6)return;const ge=ye(U,T),ve=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+q);const ne=s.get(ve);if(ve.version!==ne.__version||ge===!0){i.activeTexture(r.TEXTURE0+q);const F=Tt.getPrimaries(Tt.workingColorSpace),se=T.colorSpace===Ja?null:Tt.getPrimaries(T.colorSpace),Te=T.colorSpace===Ja||F===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let me=0;me<6;me++)!Le&&!Se?Ae[me]=C(T.image[me],!0,l.maxCubemapSize):Ae[me]=Se?T.image[me].image:T.image[me],Ae[me]=Et(T,Ae[me]);const Be=Ae[0],ze=c.convert(T.format,T.colorSpace),Pe=c.convert(T.type),ut=P(T.internalFormat,ze,Pe,T.colorSpace),W=T.isVideoTexture!==!0,Ne=ne.__version===void 0||ge===!0,Ce=ve.dataReady;let He=B(T,Be);de(r.TEXTURE_CUBE_MAP,T);let Re;if(Le){W&&Ne&&i.texStorage2D(r.TEXTURE_CUBE_MAP,He,ut,Be.width,Be.height);for(let me=0;me<6;me++){Re=Ae[me].mipmaps;for(let je=0;je<Re.length;je++){const nt=Re[je];T.format!==fi?ze!==null?W?Ce&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,nt.width,nt.height,ze,nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ut,nt.width,nt.height,0,nt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,nt.width,nt.height,ze,Pe,nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ut,nt.width,nt.height,0,ze,Pe,nt.data)}}}else{if(Re=T.mipmaps,W&&Ne){Re.length>0&&He++;const me=We(Ae[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,He,ut,me.width,me.height)}for(let me=0;me<6;me++)if(Se){W?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ae[me].width,Ae[me].height,ze,Pe,Ae[me].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Ae[me].width,Ae[me].height,0,ze,Pe,Ae[me].data);for(let je=0;je<Re.length;je++){const Ot=Re[je].image[me].image;W?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,Ot.width,Ot.height,ze,Pe,Ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ut,Ot.width,Ot.height,0,ze,Pe,Ot.data)}}else{W?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ze,Pe,Ae[me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,ze,Pe,Ae[me]);for(let je=0;je<Re.length;je++){const nt=Re[je];W?Ce&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,ze,Pe,nt.image[me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ut,ze,Pe,nt.image[me])}}}_(T)&&y(r.TEXTURE_CUBE_MAP),ne.__version=ve.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Ee(U,T,q,ge,ve,ne){const F=c.convert(q.format,q.colorSpace),se=c.convert(q.type),Te=P(q.internalFormat,F,se,q.colorSpace),Le=s.get(T),Se=s.get(q);if(Se.__renderTarget=T,!Le.__hasExternalTextures){const Ae=Math.max(1,T.width>>ne),Be=Math.max(1,T.height>>ne);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?i.texImage3D(ve,ne,Te,Ae,Be,T.depth,0,F,se,null):i.texImage2D(ve,ne,Te,Ae,Be,0,F,se,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Wt(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,ve,Se.__webglTexture,0,j(T)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,ve,Se.__webglTexture,ne),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(U,T,q){if(r.bindRenderbuffer(r.RENDERBUFFER,U),T.depthBuffer){const ge=T.depthTexture,ve=ge&&ge.isDepthTexture?ge.type:null,ne=D(T.stencilBuffer,ve),F=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Wt(T)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),ne,T.width,T.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),ne,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ne,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,F,r.RENDERBUFFER,U)}else{const ge=T.textures;for(let ve=0;ve<ge.length;ve++){const ne=ge[ve],F=c.convert(ne.format,ne.colorSpace),se=c.convert(ne.type),Te=P(ne.internalFormat,F,se,ne.colorSpace);Wt(T)?m.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),Te,T.width,T.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),Te,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Te,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qe(U,T,q){const ge=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=s.get(T.depthTexture);if(ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ge){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,T.depthTexture.addEventListener("dispose",V)),ve.__webglTexture===void 0){ve.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),de(r.TEXTURE_CUBE_MAP,T.depthTexture);const Le=c.convert(T.depthTexture.format),Se=c.convert(T.depthTexture.type);let Ae;T.depthTexture.format===_a?Ae=r.DEPTH_COMPONENT24:T.depthTexture.format===Ns&&(Ae=r.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Ae,T.width,T.height,0,Le,Se,null)}}else Q(T.depthTexture,0);const ne=ve.__webglTexture,F=j(T),se=ge?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Te=T.depthTexture.format===Ns?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===_a)Wt(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Te,se,ne,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,Te,se,ne,0);else if(T.depthTexture.format===Ns)Wt(T)?m.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Te,se,ne,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,Te,se,ne,0);else throw new Error("Unknown depthTexture format")}function $e(U){const T=s.get(U),q=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ge=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",ve)};ge.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=ge}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let ge=0;ge<6;ge++)Qe(T.__webglFramebuffer[ge],U,ge);else{const ge=U.texture.mipmaps;ge&&ge.length>0?Qe(T.__webglFramebuffer[0],U,0):Qe(T.__webglFramebuffer,U,0)}else if(q){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=r.createRenderbuffer(),Je(T.__webglDepthbuffer[ge],U,!1);else{const ve=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=T.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ne)}}else{const ge=U.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Je(T.__webglDepthbuffer,U,!1);else{const ve=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ne)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(U,T,q){const ge=s.get(U);T!==void 0&&Ee(ge.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&$e(U)}function st(U){const T=U.texture,q=s.get(U),ge=s.get(T);U.addEventListener("dispose",k);const ve=U.textures,ne=U.isWebGLCubeRenderTarget===!0,F=ve.length>1;if(F||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=T.version,f.memory.textures++),ne){q.__webglFramebuffer=[];for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[se]=[];for(let Te=0;Te<T.mipmaps.length;Te++)q.__webglFramebuffer[se][Te]=r.createFramebuffer()}else q.__webglFramebuffer[se]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)q.__webglFramebuffer[se]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(F)for(let se=0,Te=ve.length;se<Te;se++){const Le=s.get(ve[se]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),f.memory.textures++)}if(U.samples>0&&Wt(U)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let se=0;se<ve.length;se++){const Te=ve[se];q.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[se]);const Le=c.convert(Te.format,Te.colorSpace),Se=c.convert(Te.type),Ae=P(Te.internalFormat,Le,Se,Te.colorSpace,U.isXRRenderTarget===!0),Be=j(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Ae,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,q.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),de(r.TEXTURE_CUBE_MAP,T);for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0)for(let Te=0;Te<T.mipmaps.length;Te++)Ee(q.__webglFramebuffer[se][Te],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te);else Ee(q.__webglFramebuffer[se],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);_(T)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(F){for(let se=0,Te=ve.length;se<Te;se++){const Le=ve[se],Se=s.get(Le);let Ae=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Se.__webglTexture),de(Ae,Le),Ee(q.__webglFramebuffer,U,Le,r.COLOR_ATTACHMENT0+se,Ae,0),_(Le)&&y(Ae)}i.unbindTexture()}else{let se=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(se=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(se,ge.__webglTexture),de(se,T),T.mipmaps&&T.mipmaps.length>0)for(let Te=0;Te<T.mipmaps.length;Te++)Ee(q.__webglFramebuffer[Te],U,T,r.COLOR_ATTACHMENT0,se,Te);else Ee(q.__webglFramebuffer,U,T,r.COLOR_ATTACHMENT0,se,0);_(T)&&y(se),i.unbindTexture()}U.depthBuffer&&$e(U)}function _t(U){const T=U.textures;for(let q=0,ge=T.length;q<ge;q++){const ve=T[q];if(_(ve)){const ne=N(U),F=s.get(ve).__webglTexture;i.bindTexture(ne,F),y(ne),i.unbindTexture()}}}const Ct=[],ot=[];function bt(U){if(U.samples>0){if(Wt(U)===!1){const T=U.textures,q=U.width,ge=U.height;let ve=r.COLOR_BUFFER_BIT;const ne=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=s.get(U),se=T.length>1;if(se)for(let Le=0;Le<T.length;Le++)i.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer);const Te=U.texture.mipmaps;Te&&Te.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,F.__webglColorRenderbuffer[Le]);const Se=s.get(T[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,q,ge,0,0,q,ge,ve,r.NEAREST),g===!0&&(Ct.length=0,ot.length=0,Ct.push(r.COLOR_ATTACHMENT0+Le),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ct.push(ne),ot.push(ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let Le=0;Le<T.length;Le++){i.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,F.__webglColorRenderbuffer[Le]);const Se=s.get(T[Le]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,Se,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&g){const T=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function j(U){return Math.min(l.maxSamples,U.samples)}function Wt(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(U){const T=f.render.frame;x.get(U)!==T&&(x.set(U,T),U.update())}function Et(U,T){const q=U.colorSpace,ge=U.format,ve=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Ir&&q!==Ja&&(Tt.getTransfer(q)===Bt?(ge!==fi||ve!==ui)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",q)),T}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=ee,this.setTexture2D=Q,this.setTexture2DArray=I,this.setTexture3D=z,this.setTextureCube=fe,this.rebindTextures=qt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function c2(r,e){function i(s,l=Ja){let c;const f=Tt.getTransfer(l);if(s===ui)return r.UNSIGNED_BYTE;if(s===Qh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Jh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===yv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Sv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===vv)return r.BYTE;if(s===_v)return r.SHORT;if(s===Ko)return r.UNSIGNED_SHORT;if(s===Kh)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Ei)return r.FLOAT;if(s===ki)return r.HALF_FLOAT;if(s===bv)return r.ALPHA;if(s===Mv)return r.RGB;if(s===fi)return r.RGBA;if(s===_a)return r.DEPTH_COMPONENT;if(s===Ns)return r.DEPTH_STENCIL;if(s===Ev)return r.RED;if(s===$h)return r.RED_INTEGER;if(s===Pr)return r.RG;if(s===ep)return r.RG_INTEGER;if(s===tp)return r.RGBA_INTEGER;if(s===Gc||s===jc||s===kc||s===Xc)if(f===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===uh||s===fh||s===dh||s===hh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ph||s===mh||s===gh||s===xh||s===vh||s===_h||s===yh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ph||s===mh)return f===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===gh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===xh)return c.COMPRESSED_R11_EAC;if(s===vh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===_h)return c.COMPRESSED_RG11_EAC;if(s===yh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Sh||s===bh||s===Mh||s===Eh||s===Th||s===Ah||s===wh||s===Rh||s===Ch||s===Nh||s===Dh||s===Uh||s===Lh||s===Oh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Sh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Eh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Th)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ah)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ph||s===Ih||s===Fh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ph)return f===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ih)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Bh||s===zh||s===Hh||s===Vh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Bh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===zh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const u2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Iv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Xi({vertexShader:u2,fragmentShader:f2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new Ds(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h2 extends Br{constructor(e,i){super();const s=this;let l=null,c=1,f=null,m="local-floor",g=1,p=null,x=null,S=null,v=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",_=new d2,y={},N=i.getContextAttributes();let P=null,D=null;const B=[],V=[],k=new lt;let A=null;const L=new bi;L.viewport=new en;const xe=new bi;xe.viewport=new en;const G=[L,xe],ee=new EM;let re=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let we=B[te];return we===void 0&&(we=new Td,B[te]=we),we.getTargetRaySpace()},this.getControllerGrip=function(te){let we=B[te];return we===void 0&&(we=new Td,B[te]=we),we.getGripSpace()},this.getHand=function(te){let we=B[te];return we===void 0&&(we=new Td,B[te]=we),we.getHandSpace()};function Q(te){const we=V.indexOf(te.inputSource);if(we===-1)return;const Ee=B[we];Ee!==void 0&&(Ee.update(te.inputSource,te.frame,p||f),Ee.dispatchEvent({type:te.type,data:te.inputSource}))}function I(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",z);for(let te=0;te<B.length;te++){const we=V[te];we!==null&&(V[te]=null,B[te].disconnect(we))}re=null,pe=null,_.reset();for(const te in y)delete y[te];e.setRenderTarget(P),M=null,v=null,S=null,l=null,D=null,Ze.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){m=te,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",I),l.addEventListener("inputsourceschange",z),N.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(k),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Je=null,Qe=null;N.depth&&(Qe=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=N.stencil?Ns:_a,Je=N.stencil?Qo:ji);const $e={colorFormat:i.RGBA8,depthFormat:Qe,scaleFactor:c};S=this.getBinding(),v=S.createProjectionLayer($e),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Ti(v.textureWidth,v.textureHeight,{format:fi,type:ui,depthTexture:new Jo(v.textureWidth,v.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Ti(M.framebufferWidth,M.framebufferHeight,{format:fi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(g),p=null,f=await l.requestReferenceSpace(m),Ze.setContext(l),Ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(te){for(let we=0;we<te.removed.length;we++){const Ee=te.removed[we],Je=V.indexOf(Ee);Je>=0&&(V[Je]=null,B[Je].disconnect(Ee))}for(let we=0;we<te.added.length;we++){const Ee=te.added[we];let Je=V.indexOf(Ee);if(Je===-1){for(let $e=0;$e<B.length;$e++)if($e>=V.length){V.push(Ee),Je=$e;break}else if(V[$e]===null){V[$e]=Ee,Je=$e;break}if(Je===-1)break}const Qe=B[Je];Qe&&Qe.connect(Ee)}}const fe=new le,he=new le;function O(te,we,Ee){fe.setFromMatrixPosition(we.matrixWorld),he.setFromMatrixPosition(Ee.matrixWorld);const Je=fe.distanceTo(he),Qe=we.projectionMatrix.elements,$e=Ee.projectionMatrix.elements,qt=Qe[14]/(Qe[10]-1),st=Qe[14]/(Qe[10]+1),_t=(Qe[9]+1)/Qe[5],Ct=(Qe[9]-1)/Qe[5],ot=(Qe[8]-1)/Qe[0],bt=($e[8]+1)/$e[0],j=qt*ot,Wt=qt*bt,yt=Je/(-ot+bt),Et=yt*-ot;if(we.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Et),te.translateZ(yt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Qe[10]===-1)te.projectionMatrix.copy(we.projectionMatrix),te.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const We=qt+yt,U=st+yt,T=j-Et,q=Wt+(Je-Et),ge=_t*st/U*We,ve=Ct*st/U*We;te.projectionMatrix.makePerspective(T,q,ge,ve,We,U),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function K(te,we){we===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(we.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let we=te.near,Ee=te.far;_.texture!==null&&(_.depthNear>0&&(we=_.depthNear),_.depthFar>0&&(Ee=_.depthFar)),ee.near=xe.near=L.near=we,ee.far=xe.far=L.far=Ee,(re!==ee.near||pe!==ee.far)&&(l.updateRenderState({depthNear:ee.near,depthFar:ee.far}),re=ee.near,pe=ee.far),ee.layers.mask=te.layers.mask|6,L.layers.mask=ee.layers.mask&-5,xe.layers.mask=ee.layers.mask&-3;const Je=te.parent,Qe=ee.cameras;K(ee,Je);for(let $e=0;$e<Qe.length;$e++)K(Qe[$e],Je);Qe.length===2?O(ee,L,xe):ee.projectionMatrix.copy(L.projectionMatrix),de(te,ee,Je)};function de(te,we,Ee){Ee===null?te.matrix.copy(we.matrixWorld):(te.matrix.copy(Ee.matrixWorld),te.matrix.invert(),te.matrix.multiply(we.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(we.projectionMatrix),te.projectionMatrixInverse.copy(we.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Gh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(v===null&&M===null))return g},this.setFoveation=function(te){g=te,v!==null&&(v.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(ee)},this.getCameraTexture=function(te){return y[te]};let ye=null;function Oe(te,we){if(x=we.getViewerPose(p||f),E=we,x!==null){const Ee=x.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Je=!1;Ee.length!==ee.cameras.length&&(ee.cameras.length=0,Je=!0);for(let st=0;st<Ee.length;st++){const _t=Ee[st];let Ct=null;if(M!==null)Ct=M.getViewport(_t);else{const bt=S.getViewSubImage(v,_t);Ct=bt.viewport,st===0&&(e.setRenderTargetTextures(D,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(D))}let ot=G[st];ot===void 0&&(ot=new bi,ot.layers.enable(st),ot.viewport=new en,G[st]=ot),ot.matrix.fromArray(_t.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(_t.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),st===0&&(ee.matrix.copy(ot.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Je===!0&&ee.cameras.push(ot)}const Qe=l.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const st=S.getDepthInformation(Ee[0]);st&&st.isValid&&st.texture&&_.init(st,l.renderState)}if(Qe&&Qe.includes("camera-access")&&C){e.state.unbindTexture(),S=s.getBinding();for(let st=0;st<Ee.length;st++){const _t=Ee[st].camera;if(_t){let Ct=y[_t];Ct||(Ct=new Iv,y[_t]=Ct);const ot=S.getCameraImage(_t);Ct.sourceTexture=ot}}}}for(let Ee=0;Ee<B.length;Ee++){const Je=V[Ee],Qe=B[Ee];Je!==null&&Qe!==void 0&&Qe.update(Je,we,p||f)}ye&&ye(te,we),we.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:we}),E=null}const Ze=new zv;Ze.setAnimationLoop(Oe),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const Es=new ya,p2=new on;function m2(r,e){function i(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function s(_,y){y.color.getRGB(_.fogColor.value,Fv(r)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function l(_,y,N,P,D){y.isMeshBasicMaterial?c(_,y):y.isMeshLambertMaterial?(c(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(_,y),S(_,y)):y.isMeshPhongMaterial?(c(_,y),x(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(_,y),v(_,y),y.isMeshPhysicalMaterial&&M(_,y,D)):y.isMeshMatcapMaterial?(c(_,y),E(_,y)):y.isMeshDepthMaterial?c(_,y):y.isMeshDistanceMaterial?(c(_,y),C(_,y)):y.isMeshNormalMaterial?c(_,y):y.isLineBasicMaterial?(f(_,y),y.isLineDashedMaterial&&m(_,y)):y.isPointsMaterial?g(_,y,N,P):y.isSpriteMaterial?p(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,i(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,i(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,i(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===jn&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,i(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===jn&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,i(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,i(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const N=e.get(y),P=N.envMap,D=N.envMapRotation;P&&(_.envMap.value=P,Es.copy(D),Es.x*=-1,Es.y*=-1,Es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),_.envMapRotation.value.setFromMatrix4(p2.makeRotationFromEuler(Es)),_.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,_.aoMapTransform))}function f(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,i(y.map,_.mapTransform))}function m(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function g(_,y,N,P){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*N,_.scale.value=P*.5,y.map&&(_.map.value=y.map,i(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,i(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function p(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,i(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,i(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function x(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function S(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function v(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function M(_,y,N){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===jn&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=N.texture,_.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,y){y.matcap&&(_.matcap.value=y.matcap)}function C(_,y){const N=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(N.matrixWorld),_.nearDistance.value=N.shadow.camera.near,_.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function g2(r,e,i,s){let l={},c={},f=[];const m=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(N,P){const D=P.program;s.uniformBlockBinding(N,D)}function p(N,P){let D=l[N.id];D===void 0&&(E(N),D=x(N),l[N.id]=D,N.addEventListener("dispose",_));const B=P.program;s.updateUBOMapping(N,B);const V=e.render.frame;c[N.id]!==V&&(v(N),c[N.id]=V)}function x(N){const P=S();N.__bindingPointIndex=P;const D=r.createBuffer(),B=N.__size,V=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,V),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,D),D}function S(){for(let N=0;N<m;N++)if(f.indexOf(N)===-1)return f.push(N),N;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const P=l[N.id],D=N.uniforms,B=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let V=0,k=D.length;V<k;V++){const A=Array.isArray(D[V])?D[V]:[D[V]];for(let L=0,xe=A.length;L<xe;L++){const G=A[L];if(M(G,V,L,B)===!0){const ee=G.__offset,re=Array.isArray(G.value)?G.value:[G.value];let pe=0;for(let Q=0;Q<re.length;Q++){const I=re[Q],z=C(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,ee+pe,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,pe),pe+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ee,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(N,P,D,B){const V=N.value,k=P+"_"+D;if(B[k]===void 0)return typeof V=="number"||typeof V=="boolean"?B[k]=V:B[k]=V.clone(),!0;{const A=B[k];if(typeof V=="number"||typeof V=="boolean"){if(A!==V)return B[k]=V,!0}else if(A.equals(V)===!1)return A.copy(V),!0}return!1}function E(N){const P=N.uniforms;let D=0;const B=16;for(let k=0,A=P.length;k<A;k++){const L=Array.isArray(P[k])?P[k]:[P[k]];for(let xe=0,G=L.length;xe<G;xe++){const ee=L[xe],re=Array.isArray(ee.value)?ee.value:[ee.value];for(let pe=0,Q=re.length;pe<Q;pe++){const I=re[pe],z=C(I),fe=D%B,he=fe%z.boundary,O=fe+he;D+=he,O!==0&&B-O<z.storage&&(D+=B-O),ee.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=D,D+=z.storage}}}const V=D%B;return V>0&&(D+=B-V),N.__size=D,N.__cache={},this}function C(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",N),P}function _(N){const P=N.target;P.removeEventListener("dispose",_);const D=f.indexOf(P.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function y(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:g,update:p,dispose:y}}const x2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function v2(){return Bi===null&&(Bi=new Lv(x2,16,16,Pr,ki),Bi.name="DFG_LUT",Bi.minFilter=fn,Bi.magFilter=fn,Bi.wrapS=ei,Bi.wrapT=ei,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class _2{constructor(e={}){const{canvas:i=Gb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:v=!1,outputBufferType:M=ui}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const C=M,_=new Set([tp,ep,$h]),y=new Set([ui,ji,Ko,Qo,Qh,Jh]),N=new Uint32Array(4),P=new Int32Array(4);let D=null,B=null;const V=[],k=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let xe=!1;this._outputColorSpace=ci;let G=0,ee=0,re=null,pe=-1,Q=null;const I=new en,z=new en;let fe=null;const he=new Lt(0);let O=0,K=i.width,de=i.height,ye=1,Oe=null,Ze=null;const te=new en(0,0,K,de),we=new en(0,0,K,de);let Ee=!1;const Je=new Ov;let Qe=!1,$e=!1;const qt=new on,st=new le,_t=new en,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function bt(){return re===null?ye:1}let j=s;function Wt(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zh}`),i.addEventListener("webglcontextlost",je,!1),i.addEventListener("webglcontextrestored",nt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),j===null){const Y="webgl2";if(j=Wt(Y,R),j===null)throw Wt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Rt("WebGLRenderer: "+R.message),R}let yt,Et,We,U,T,q,ge,ve,ne,F,se,Te,Le,Se,Ae,Be,ze,Pe,ut,W,Ne,Ce,He;function Re(){yt=new _1(j),yt.init(),Ne=new c2(j,yt),Et=new f1(j,yt,e,Ne),We=new o2(j,yt),Et.reversedDepthBuffer&&v&&We.buffers.depth.setReversed(!0),U=new b1(j),T=new qA,q=new l2(j,yt,We,T,Et,Ne,U),ge=new v1(L),ve=new wM(j),Ce=new c1(j,ve),ne=new y1(j,ve,U,Ce),F=new E1(j,ne,ve,Ce,U),Pe=new M1(j,Et,q),Ae=new d1(T),se=new WA(L,ge,yt,Et,Ce,Ae),Te=new m2(L,T),Le=new ZA,Se=new t2(yt),ze=new l1(L,ge,We,F,E,g),Be=new r2(L,F,Et),He=new g2(j,U,Et,We),ut=new u1(j,yt,U),W=new S1(j,yt,U),U.programs=se.programs,L.capabilities=Et,L.extensions=yt,L.properties=T,L.renderLists=Le,L.shadowMap=Be,L.state=We,L.info=U}Re(),C!==ui&&(A=new A1(C,i.width,i.height,l,c));const me=new h2(L,j);this.xr=me,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=yt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=yt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(R){R!==void 0&&(ye=R,this.setSize(K,de,!1))},this.getSize=function(R){return R.set(K,de)},this.setSize=function(R,Y,ue=!0){if(me.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,de=Y,i.width=Math.floor(R*ye),i.height=Math.floor(Y*ye),ue===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(K*ye,de*ye).floor()},this.setDrawingBufferSize=function(R,Y,ue){K=R,de=Y,ye=ue,i.width=Math.floor(R*ue),i.height=Math.floor(Y*ue),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(C===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,Y,ue,ae){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,Y,ue,ae),We.viewport(I.copy(te).multiplyScalar(ye).round())},this.getScissor=function(R){return R.copy(we)},this.setScissor=function(R,Y,ue,ae){R.isVector4?we.set(R.x,R.y,R.z,R.w):we.set(R,Y,ue,ae),We.scissor(z.copy(we).multiplyScalar(ye).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){We.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){Oe=R},this.setTransparentSort=function(R){Ze=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ue=!0){let ae=0;if(R){let J=!1;if(re!==null){const Ie=re.texture.format;J=_.has(Ie)}if(J){const Ie=re.texture.type,Ve=y.has(Ie),Ue=ze.getClearColor(),ke=ze.getClearAlpha(),qe=Ue.r,rt=Ue.g,ct=Ue.b;Ve?(N[0]=qe,N[1]=rt,N[2]=ct,N[3]=ke,j.clearBufferuiv(j.COLOR,0,N)):(P[0]=qe,P[1]=rt,P[2]=ct,P[3]=ke,j.clearBufferiv(j.COLOR,0,P))}else ae|=j.COLOR_BUFFER_BIT}Y&&(ae|=j.DEPTH_BUFFER_BIT),ue&&(ae|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&j.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",je,!1),i.removeEventListener("webglcontextrestored",nt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),ze.dispose(),Le.dispose(),Se.dispose(),T.dispose(),ge.dispose(),F.dispose(),Ce.dispose(),He.dispose(),se.dispose(),me.dispose(),me.removeEventListener("sessionstart",Fs),me.removeEventListener("sessionend",sl),Wi.stop()};function je(R){R.preventDefault(),tx("WebGLRenderer: Context Lost."),xe=!0}function nt(){tx("WebGLRenderer: Context Restored."),xe=!1;const R=U.autoReset,Y=Be.enabled,ue=Be.autoUpdate,ae=Be.needsUpdate,J=Be.type;Re(),U.autoReset=R,Be.enabled=Y,Be.autoUpdate=ue,Be.needsUpdate=ae,Be.type=J}function Ot(R){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function At(R){const Y=R.target;Y.removeEventListener("dispose",At),hi(Y)}function hi(R){vn(R),T.remove(R)}function vn(R){const Y=T.get(R).programs;Y!==void 0&&(Y.forEach(function(ue){se.releaseProgram(ue)}),R.isShaderMaterial&&se.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ue,ae,J,Ie){Y===null&&(Y=Ct);const Ve=J.isMesh&&J.matrixWorld.determinant()<0,Ue=rl(R,Y,ue,ae,J);We.setMaterial(ae,Ve);let ke=ue.index,qe=1;if(ae.wireframe===!0){if(ke=ne.getWireframeAttribute(ue),ke===void 0)return;qe=2}const rt=ue.drawRange,ct=ue.attributes.position;let Ge=rt.start*qe,Nt=(rt.start+rt.count)*qe;Ie!==null&&(Ge=Math.max(Ge,Ie.start*qe),Nt=Math.min(Nt,(Ie.start+Ie.count)*qe)),ke!==null?(Ge=Math.max(Ge,0),Nt=Math.min(Nt,ke.count)):ct!=null&&(Ge=Math.max(Ge,0),Nt=Math.min(Nt,ct.count));const Kt=Nt-Ge;if(Kt<0||Kt===1/0)return;Ce.setup(J,ae,Ue,ue,ke);let Gt,Dt=ut;if(ke!==null&&(Gt=ve.get(ke),Dt=W,Dt.setIndex(Gt)),J.isMesh)ae.wireframe===!0?(We.setLineWidth(ae.wireframeLinewidth*bt()),Dt.setMode(j.LINES)):Dt.setMode(j.TRIANGLES);else if(J.isLine){let nn=ae.linewidth;nn===void 0&&(nn=1),We.setLineWidth(nn*bt()),J.isLineSegments?Dt.setMode(j.LINES):J.isLineLoop?Dt.setMode(j.LINE_LOOP):Dt.setMode(j.LINE_STRIP)}else J.isPoints?Dt.setMode(j.POINTS):J.isSprite&&Dt.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Jc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const nn=J._multiDrawStarts,Ye=J._multiDrawCounts,kt=J._multiDrawCount,vt=ke?ve.get(ke).bytesPerElement:1,Pn=T.get(ae).currentProgram.getUniforms();for(let In=0;In<kt;In++)Pn.setValue(j,"_gl_DrawID",In),Dt.render(nn[In]/vt,Ye[In])}else if(J.isInstancedMesh)Dt.renderInstances(Ge,Kt,J.count);else if(ue.isInstancedBufferGeometry){const nn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ye=Math.min(ue.instanceCount,nn);Dt.renderInstances(Ge,Kt,Ye)}else Dt.render(Ge,Kt)};function hn(R,Y,ue){R.transparent===!0&&R.side===ga&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,Ci(R,Y,ue),R.side=ns,R.needsUpdate=!0,Ci(R,Y,ue),R.side=ga):Ci(R,Y,ue)}this.compile=function(R,Y,ue=null){ue===null&&(ue=R),B=Se.get(ue),B.init(Y),k.push(B),ue.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),R!==ue&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),B.setupLights();const ae=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){const Ue=Ie[Ve];hn(Ue,ue,J),ae.add(Ue)}else hn(Ie,ue,J),ae.add(Ie)}),B=k.pop(),ae},this.compileAsync=function(R,Y,ue=null){const ae=this.compile(R,Y,ue);return new Promise(J=>{function Ie(){if(ae.forEach(function(Ve){T.get(Ve).currentProgram.isReady()&&ae.delete(Ve)}),ae.size===0){J(R);return}setTimeout(Ie,10)}yt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let _n=null;function Sa(R){_n&&_n(R)}function Fs(){Wi.stop()}function sl(){Wi.start()}const Wi=new zv;Wi.setAnimationLoop(Sa),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(R){_n=R,me.setAnimationLoop(R),R===null?Wi.stop():Wi.start()},me.addEventListener("sessionstart",Fs),me.addEventListener("sessionend",sl),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(xe===!0)return;const ue=me.enabled===!0&&me.isPresenting===!0,ae=A!==null&&(re===null||ue)&&A.begin(L,re);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(Y),Y=me.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,Y,re),B=Se.get(R,k.length),B.init(Y),k.push(B),qt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Je.setFromProjectionMatrix(qt,Vi,Y.reversedDepth),$e=this.localClippingEnabled,Qe=Ae.init(this.clippingPlanes,$e),D=Le.get(R,V.length),D.init(),V.push(D),me.enabled===!0&&me.isPresenting===!0){const Ve=L.xr.getDepthSensingMesh();Ve!==null&&Bs(Ve,Y,-1/0,L.sortObjects)}Bs(R,Y,0,L.sortObjects),D.finish(),L.sortObjects===!0&&D.sort(Oe,Ze),ot=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,ot&&ze.addToRenderList(D,R),this.info.render.frame++,Qe===!0&&Ae.beginShadows();const J=B.state.shadowsArray;if(Be.render(J,R,Y),Qe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&A.hasRenderPass())===!1){const Ve=D.opaque,Ue=D.transmissive;if(B.setupLights(),Y.isArrayCamera){const ke=Y.cameras;if(Ue.length>0)for(let qe=0,rt=ke.length;qe<rt;qe++){const ct=ke[qe];zs(Ve,Ue,R,ct)}ot&&ze.render(R);for(let qe=0,rt=ke.length;qe<rt;qe++){const ct=ke[qe];ba(D,R,ct,ct.viewport)}}else Ue.length>0&&zs(Ve,Ue,R,Y),ot&&ze.render(R),ba(D,R,Y)}re!==null&&ee===0&&(q.updateMultisampleRenderTarget(re),q.updateRenderTargetMipmap(re)),ae&&A.end(L),R.isScene===!0&&R.onAfterRender(L,R,Y),Ce.resetDefaultState(),pe=-1,Q=null,k.pop(),k.length>0?(B=k[k.length-1],Qe===!0&&Ae.setGlobalState(L.clippingPlanes,B.state.camera)):B=null,V.pop(),V.length>0?D=V[V.length-1]:D=null};function Bs(R,Y,ue,ae){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Je.intersectsSprite(R)){ae&&_t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(qt);const Ve=F.update(R),Ue=R.material;Ue.visible&&D.push(R,Ve,Ue,ue,_t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Je.intersectsObject(R))){const Ve=F.update(R),Ue=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_t.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),_t.copy(Ve.boundingSphere.center)),_t.applyMatrix4(R.matrixWorld).applyMatrix4(qt)),Array.isArray(Ue)){const ke=Ve.groups;for(let qe=0,rt=ke.length;qe<rt;qe++){const ct=ke[qe],Ge=Ue[ct.materialIndex];Ge&&Ge.visible&&D.push(R,Ve,Ge,ue,_t.z,ct)}}else Ue.visible&&D.push(R,Ve,Ue,ue,_t.z,null)}}const Ie=R.children;for(let Ve=0,Ue=Ie.length;Ve<Ue;Ve++)Bs(Ie[Ve],Y,ue,ae)}function ba(R,Y,ue,ae){const{opaque:J,transmissive:Ie,transparent:Ve}=R;B.setupLightsView(ue),Qe===!0&&Ae.setGlobalState(L.clippingPlanes,ue),ae&&We.viewport(I.copy(ae)),J.length>0&&pi(J,Y,ue),Ie.length>0&&pi(Ie,Y,ue),Ve.length>0&&pi(Ve,Y,ue),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function zs(R,Y,ue,ae){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ae.id]===void 0){const Ge=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ae.id]=new Ti(1,1,{generateMipmaps:!0,type:Ge?ki:ui,minFilter:Cs,samples:Et.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ie=B.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||I;Ie.setSize(Ve.z*L.transmissionResolutionScale,Ve.w*L.transmissionResolutionScale);const Ue=L.getRenderTarget(),ke=L.getActiveCubeFace(),qe=L.getActiveMipmapLevel();L.setRenderTarget(Ie),L.getClearColor(he),O=L.getClearAlpha(),O<1&&L.setClearColor(16777215,.5),L.clear(),ot&&ze.render(ue);const rt=L.toneMapping;L.toneMapping=Gi;const ct=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),B.setupLightsView(ae),Qe===!0&&Ae.setGlobalState(L.clippingPlanes,ae),pi(R,ue,ae),q.updateMultisampleRenderTarget(Ie),q.updateRenderTargetMipmap(Ie),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Nt=0,Kt=Y.length;Nt<Kt;Nt++){const Gt=Y[Nt],{object:Dt,geometry:nn,material:Ye,group:kt}=Gt;if(Ye.side===ga&&Dt.layers.test(ae.layers)){const vt=Ye.side;Ye.side=jn,Ye.needsUpdate=!0,qi(Dt,ue,ae,nn,Ye,kt),Ye.side=vt,Ye.needsUpdate=!0,Ge=!0}}Ge===!0&&(q.updateMultisampleRenderTarget(Ie),q.updateRenderTargetMipmap(Ie))}L.setRenderTarget(Ue,ke,qe),L.setClearColor(he,O),ct!==void 0&&(ae.viewport=ct),L.toneMapping=rt}function pi(R,Y,ue){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Ie=R.length;J<Ie;J++){const Ve=R[J],{object:Ue,geometry:ke,group:qe}=Ve;let rt=Ve.material;rt.allowOverride===!0&&ae!==null&&(rt=ae),Ue.layers.test(ue.layers)&&qi(Ue,Y,ue,ke,rt,qe)}}function qi(R,Y,ue,ae,J,Ie){R.onBeforeRender(L,Y,ue,ae,J,Ie),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(L,Y,ue,ae,R,Ie),J.transparent===!0&&J.side===ga&&J.forceSinglePass===!1?(J.side=jn,J.needsUpdate=!0,L.renderBufferDirect(ue,Y,ae,J,R,Ie),J.side=ns,J.needsUpdate=!0,L.renderBufferDirect(ue,Y,ae,J,R,Ie),J.side=ga):L.renderBufferDirect(ue,Y,ae,J,R,Ie),R.onAfterRender(L,Y,ue,ae,J,Ie)}function Ci(R,Y,ue){Y.isScene!==!0&&(Y=Ct);const ae=T.get(R),J=B.state.lights,Ie=B.state.shadowsArray,Ve=J.state.version,Ue=se.getParameters(R,J.state,Ie,Y,ue),ke=se.getProgramCacheKey(Ue);let qe=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ae.fog=Y.fog;const rt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=ge.get(R.envMap||ae.environment,rt),ae.envMapRotation=ae.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",At),qe=new Map,ae.programs=qe);let ct=qe.get(ke);if(ct!==void 0){if(ae.currentProgram===ct&&ae.lightsStateVersion===Ve)return tn(R,Ue),ct}else Ue.uniforms=se.getUniforms(R),R.onBeforeCompile(Ue,L),ct=se.acquireProgram(Ue,ke),qe.set(ke,ct),ae.uniforms=Ue.uniforms;const Ge=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=Ae.uniform),tn(R,Ue),ae.needsLights=Zi(R),ae.lightsStateVersion=Ve,ae.needsLights&&(Ge.ambientLightColor.value=J.state.ambient,Ge.lightProbe.value=J.state.probe,Ge.directionalLights.value=J.state.directional,Ge.directionalLightShadows.value=J.state.directionalShadow,Ge.spotLights.value=J.state.spot,Ge.spotLightShadows.value=J.state.spotShadow,Ge.rectAreaLights.value=J.state.rectArea,Ge.ltc_1.value=J.state.rectAreaLTC1,Ge.ltc_2.value=J.state.rectAreaLTC2,Ge.pointLights.value=J.state.point,Ge.pointLightShadows.value=J.state.pointShadow,Ge.hemisphereLights.value=J.state.hemi,Ge.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ge.spotLightMatrix.value=J.state.spotLightMatrix,Ge.spotLightMap.value=J.state.spotLightMap,Ge.pointShadowMatrix.value=J.state.pointShadowMatrix),ae.currentProgram=ct,ae.uniformsList=null,ct}function Yi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Wc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function tn(R,Y){const ue=T.get(R);ue.outputColorSpace=Y.outputColorSpace,ue.batching=Y.batching,ue.batchingColor=Y.batchingColor,ue.instancing=Y.instancing,ue.instancingColor=Y.instancingColor,ue.instancingMorph=Y.instancingMorph,ue.skinning=Y.skinning,ue.morphTargets=Y.morphTargets,ue.morphNormals=Y.morphNormals,ue.morphColors=Y.morphColors,ue.morphTargetsCount=Y.morphTargetsCount,ue.numClippingPlanes=Y.numClippingPlanes,ue.numIntersection=Y.numClipIntersection,ue.vertexAlphas=Y.vertexAlphas,ue.vertexTangents=Y.vertexTangents,ue.toneMapping=Y.toneMapping}function rl(R,Y,ue,ae,J){Y.isScene!==!0&&(Y=Ct),q.resetTextureUnits();const Ie=Y.fog,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Y.environment:null,Ue=re===null?L.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ir,ke=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,qe=ge.get(ae.envMap||Ve,ke),rt=ae.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ct=!!ue.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ge=!!ue.morphAttributes.position,Nt=!!ue.morphAttributes.normal,Kt=!!ue.morphAttributes.color;let Gt=Gi;ae.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Gt=L.toneMapping);const Dt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,nn=Dt!==void 0?Dt.length:0,Ye=T.get(ae),kt=B.state.lights;if(Qe===!0&&($e===!0||R!==Q)){const an=R===Q&&ae.id===pe;Ae.setState(ae,R,an)}let vt=!1;ae.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==kt.state.version||Ye.outputColorSpace!==Ue||J.isBatchedMesh&&Ye.batching===!1||!J.isBatchedMesh&&Ye.batching===!0||J.isBatchedMesh&&Ye.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ye.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ye.instancing===!1||!J.isInstancedMesh&&Ye.instancing===!0||J.isSkinnedMesh&&Ye.skinning===!1||!J.isSkinnedMesh&&Ye.skinning===!0||J.isInstancedMesh&&Ye.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ye.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ye.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ye.instancingMorph===!1&&J.morphTexture!==null||Ye.envMap!==qe||ae.fog===!0&&Ye.fog!==Ie||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ae.numPlanes||Ye.numIntersection!==Ae.numIntersection)||Ye.vertexAlphas!==rt||Ye.vertexTangents!==ct||Ye.morphTargets!==Ge||Ye.morphNormals!==Nt||Ye.morphColors!==Kt||Ye.toneMapping!==Gt||Ye.morphTargetsCount!==nn)&&(vt=!0):(vt=!0,Ye.__version=ae.version);let Pn=Ye.currentProgram;vt===!0&&(Pn=Ci(ae,Y,J));let In=!1,Fn=!1,Ki=!1;const Pt=Pn.getUniforms(),Yt=Ye.uniforms;if(We.useProgram(Pn.program)&&(In=!0,Fn=!0,Ki=!0),ae.id!==pe&&(pe=ae.id,Fn=!0),In||Q!==R){We.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pt.setValue(j,"projectionMatrix",R.projectionMatrix),Pt.setValue(j,"viewMatrix",R.matrixWorldInverse);const mi=Pt.map.cameraPosition;mi!==void 0&&mi.setValue(j,st.setFromMatrixPosition(R.matrixWorld)),Et.logarithmicDepthBuffer&&Pt.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Pt.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,Fn=!0,Ki=!0)}if(Ye.needsLights&&(kt.state.directionalShadowMap.length>0&&Pt.setValue(j,"directionalShadowMap",kt.state.directionalShadowMap,q),kt.state.spotShadowMap.length>0&&Pt.setValue(j,"spotShadowMap",kt.state.spotShadowMap,q),kt.state.pointShadowMap.length>0&&Pt.setValue(j,"pointShadowMap",kt.state.pointShadowMap,q)),J.isSkinnedMesh){Pt.setOptional(j,J,"bindMatrix"),Pt.setOptional(j,J,"bindMatrixInverse");const an=J.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Pt.setValue(j,"boneTexture",an.boneTexture,q))}J.isBatchedMesh&&(Pt.setOptional(j,J,"batchingTexture"),Pt.setValue(j,"batchingTexture",J._matricesTexture,q),Pt.setOptional(j,J,"batchingIdTexture"),Pt.setValue(j,"batchingIdTexture",J._indirectTexture,q),Pt.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&Pt.setValue(j,"batchingColorTexture",J._colorsTexture,q));const Ni=ue.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Pe.update(J,ue,Pn),(Fn||Ye.receiveShadow!==J.receiveShadow)&&(Ye.receiveShadow=J.receiveShadow,Pt.setValue(j,"receiveShadow",J.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Y.environment!==null&&(Yt.envMapIntensity.value=Y.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=v2()),Fn&&(Pt.setValue(j,"toneMappingExposure",L.toneMappingExposure),Ye.needsLights&&ol(Yt,Ki),Ie&&ae.fog===!0&&Te.refreshFogUniforms(Yt,Ie),Te.refreshMaterialUniforms(Yt,ae,ye,de,B.state.transmissionRenderTarget[R.id]),Wc.upload(j,Yi(Ye),Yt,q)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Wc.upload(j,Yi(Ye),Yt,q),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Pt.setValue(j,"center",J.center),Pt.setValue(j,"modelViewMatrix",J.modelViewMatrix),Pt.setValue(j,"normalMatrix",J.normalMatrix),Pt.setValue(j,"modelMatrix",J.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const an=ae.uniformsGroups;for(let mi=0,Di=an.length;mi<Di;mi++){const cl=an[mi];He.update(cl,Pn),He.bind(cl,Pn)}}return Pn}function ol(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Zi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(R,Y,ue){const ae=T.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),T.get(R.texture).__webglTexture=Y,T.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ue,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ue=T.get(R);ue.__webglFramebuffer=Y,ue.__useDefaultFramebuffer=Y===void 0};const Ma=j.createFramebuffer();this.setRenderTarget=function(R,Y=0,ue=0){re=R,G=Y,ee=ue;let ae=null,J=!1,Ie=!1;if(R){const Ue=T.get(R);if(Ue.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(j.FRAMEBUFFER,Ue.__webglFramebuffer),I.copy(R.viewport),z.copy(R.scissor),fe=R.scissorTest,We.viewport(I),We.scissor(z),We.setScissorTest(fe),pe=-1;return}else if(Ue.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Ue.__hasExternalTextures)q.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const rt=R.depthTexture;if(Ue.__boundDepthTexture!==rt){if(rt!==null&&T.has(rt)&&(R.width!==rt.image.width||R.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ie=!0);const qe=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?ae=qe[Y][ue]:ae=qe[Y],J=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?ae=T.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?ae=qe[ue]:ae=qe,I.copy(R.viewport),z.copy(R.scissor),fe=R.scissorTest}else I.copy(te).multiplyScalar(ye).floor(),z.copy(we).multiplyScalar(ye).floor(),fe=Ee;if(ue!==0&&(ae=Ma),We.bindFramebuffer(j.FRAMEBUFFER,ae)&&We.drawBuffers(R,ae),We.viewport(I),We.scissor(z),We.setScissorTest(fe),J){const Ue=T.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ue.__webglTexture,ue)}else if(Ie){const Ue=Y;for(let ke=0;ke<R.textures.length;ke++){const qe=T.get(R.textures[ke]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+ke,qe.__webglTexture,ue,Ue)}}else if(R!==null&&ue!==0){const Ue=T.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ue.__webglTexture,ue)}pe=-1},this.readRenderTargetPixels=function(R,Y,ue,ae,J,Ie,Ve,Ue=0){if(!(R&&R.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke){We.bindFramebuffer(j.FRAMEBUFFER,ke);try{const qe=R.textures[Ue],rt=qe.format,ct=qe.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ue),!Et.textureFormatReadable(rt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(ct)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ae&&ue>=0&&ue<=R.height-J&&j.readPixels(Y,ue,ae,J,Ne.convert(rt),Ne.convert(ct),Ie)}finally{const qe=re!==null?T.get(re).__webglFramebuffer:null;We.bindFramebuffer(j.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ue,ae,J,Ie,Ve,Ue=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke)if(Y>=0&&Y<=R.width-ae&&ue>=0&&ue<=R.height-J){We.bindFramebuffer(j.FRAMEBUFFER,ke);const qe=R.textures[Ue],rt=qe.format,ct=qe.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ue),!Et.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Ge),j.bufferData(j.PIXEL_PACK_BUFFER,Ie.byteLength,j.STREAM_READ),j.readPixels(Y,ue,ae,J,Ne.convert(rt),Ne.convert(ct),0);const Nt=re!==null?T.get(re).__webglFramebuffer:null;We.bindFramebuffer(j.FRAMEBUFFER,Nt);const Kt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await jb(j,Kt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Ge),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ie),j.deleteBuffer(Ge),j.deleteSync(Kt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ue=0){const ae=Math.pow(2,-ue),J=Math.floor(R.image.width*ae),Ie=Math.floor(R.image.height*ae),Ve=Y!==null?Y.x:0,Ue=Y!==null?Y.y:0;q.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,ue,0,0,Ve,Ue,J,Ie),We.unbindTexture()};const ru=j.createFramebuffer(),ll=j.createFramebuffer();this.copyTextureToTexture=function(R,Y,ue=null,ae=null,J=0,Ie=0){let Ve,Ue,ke,qe,rt,ct,Ge,Nt,Kt;const Gt=R.isCompressedTexture?R.mipmaps[Ie]:R.image;if(ue!==null)Ve=ue.max.x-ue.min.x,Ue=ue.max.y-ue.min.y,ke=ue.isBox3?ue.max.z-ue.min.z:1,qe=ue.min.x,rt=ue.min.y,ct=ue.isBox3?ue.min.z:0;else{const Yt=Math.pow(2,-J);Ve=Math.floor(Gt.width*Yt),Ue=Math.floor(Gt.height*Yt),R.isDataArrayTexture?ke=Gt.depth:R.isData3DTexture?ke=Math.floor(Gt.depth*Yt):ke=1,qe=0,rt=0,ct=0}ae!==null?(Ge=ae.x,Nt=ae.y,Kt=ae.z):(Ge=0,Nt=0,Kt=0);const Dt=Ne.convert(Y.format),nn=Ne.convert(Y.type);let Ye;Y.isData3DTexture?(q.setTexture3D(Y,0),Ye=j.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Ye=j.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Ye=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Y.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Y.unpackAlignment);const kt=j.getParameter(j.UNPACK_ROW_LENGTH),vt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Pn=j.getParameter(j.UNPACK_SKIP_PIXELS),In=j.getParameter(j.UNPACK_SKIP_ROWS),Fn=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Gt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Gt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,qe),j.pixelStorei(j.UNPACK_SKIP_ROWS,rt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ct);const Ki=R.isDataArrayTexture||R.isData3DTexture,Pt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Yt=T.get(R),Ni=T.get(Y),an=T.get(Yt.__renderTarget),mi=T.get(Ni.__renderTarget);We.bindFramebuffer(j.READ_FRAMEBUFFER,an.__webglFramebuffer),We.bindFramebuffer(j.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Di=0;Di<ke;Di++)Ki&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(R).__webglTexture,J,ct+Di),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(Y).__webglTexture,Ie,Kt+Di)),j.blitFramebuffer(qe,rt,Ve,Ue,Ge,Nt,Ve,Ue,j.DEPTH_BUFFER_BIT,j.NEAREST);We.bindFramebuffer(j.READ_FRAMEBUFFER,null),We.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||T.has(R)){const Yt=T.get(R),Ni=T.get(Y);We.bindFramebuffer(j.READ_FRAMEBUFFER,ru),We.bindFramebuffer(j.DRAW_FRAMEBUFFER,ll);for(let an=0;an<ke;an++)Ki?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Yt.__webglTexture,J,ct+an):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Yt.__webglTexture,J),Pt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ni.__webglTexture,Ie,Kt+an):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ni.__webglTexture,Ie),J!==0?j.blitFramebuffer(qe,rt,Ve,Ue,Ge,Nt,Ve,Ue,j.COLOR_BUFFER_BIT,j.NEAREST):Pt?j.copyTexSubImage3D(Ye,Ie,Ge,Nt,Kt+an,qe,rt,Ve,Ue):j.copyTexSubImage2D(Ye,Ie,Ge,Nt,qe,rt,Ve,Ue);We.bindFramebuffer(j.READ_FRAMEBUFFER,null),We.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Pt?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(Ye,Ie,Ge,Nt,Kt,Ve,Ue,ke,Dt,nn,Gt.data):Y.isCompressedArrayTexture?j.compressedTexSubImage3D(Ye,Ie,Ge,Nt,Kt,Ve,Ue,ke,Dt,Gt.data):j.texSubImage3D(Ye,Ie,Ge,Nt,Kt,Ve,Ue,ke,Dt,nn,Gt):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ie,Ge,Nt,Ve,Ue,Dt,nn,Gt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ie,Ge,Nt,Gt.width,Gt.height,Dt,Gt.data):j.texSubImage2D(j.TEXTURE_2D,Ie,Ge,Nt,Ve,Ue,Dt,nn,Gt);j.pixelStorei(j.UNPACK_ROW_LENGTH,kt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,vt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Pn),j.pixelStorei(j.UNPACK_SKIP_ROWS,In),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Fn),Ie===0&&Y.generateMipmaps&&j.generateMipmap(Ye),We.unbindTexture()},this.initRenderTarget=function(R){T.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){G=0,ee=0,re=null,We.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}function y2({mouseForce:r=18,cursorSize:e=90,isViscous:i=!1,viscous:s=24,iterationsViscous:l=16,iterationsPoisson:c=16,dt:f=.014,BFECC:m=!0,resolution:g=.3,isBounce:p=!1,colors:x=["#5227FF","#FF9FFC","#B19EEF"],style:S={},className:v="",autoDemo:M=!0,autoSpeed:E=.42,autoIntensity:C=1.9,takeoverDuration:_=.2,autoResumeDelay:y=1200,autoRampDuration:N=.5}){const P=De.useRef(null),D=De.useRef(null),B=De.useRef(null),V=De.useRef(null),k=De.useRef(null),A=De.useRef(!0),L=De.useRef(null),xe=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,G=M&&!xe,ee=xe?.2:g,re=xe?10:c,pe=xe?8:l;return De.useEffect(()=>{if(!P.current)return;function Q(ne){let F;Array.isArray(ne)&&ne.length>0?ne.length===1?F=[ne[0],ne[0]]:F=ne:F=["#ffffff","#ffffff"];const se=F.length,Te=new Uint8Array(se*4);for(let Se=0;Se<se;Se++){const Ae=new Lt(F[Se]);Te[Se*4+0]=Math.round(Ae.r*255),Te[Se*4+1]=Math.round(Ae.g*255),Te[Se*4+2]=Math.round(Ae.b*255),Te[Se*4+3]=255}const Le=new Lv(Te,se,1,fi);return Le.magFilter=fn,Le.minFilter=fn,Le.wrapS=ei,Le.wrapT=ei,Le.generateMipmaps=!1,Le.needsUpdate=!0,Le}const I=Q(x),z=new en(0,0,0,0);class fe{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(F){this.container=F,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new _2({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Lt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new TM,this.clock.start()}resize(){if(!this.container)return;const F=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(F.width)),this.height=Math.max(1,Math.floor(F.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const he=new fe;class O{constructor(){this.mouseMoved=!1,this.coords=new lt,this.coords_old=new lt,this.diff=new lt,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new lt,this.takeoverTo=new lt,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(F){this.container=F,this.docTarget=F.ownerDocument||null;const se=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);se&&(this.listenerTarget=se,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(F,se){if(!this.container)return!1;const Te=this.container.getBoundingClientRect();return Te.width===0||Te.height===0?!1:F>=Te.left&&F<=Te.right&&se>=Te.top&&se<=Te.bottom}updateHoverState(F,se){return this.isHoverInside=this.isPointInside(F,se),this.isHoverInside}setCoords(F,se){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Te=this.container.getBoundingClientRect();if(Te.width===0||Te.height===0)return;const Le=(F-Te.left)/Te.width,Se=(se-Te.top)/Te.height;this.coords.set(Le*2-1,-(Se*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(F,se){this.coords.set(F,se),this.mouseMoved=!0}onDocumentMouseMove(F){if(this.updateHoverState(F.clientX,F.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const se=this.container.getBoundingClientRect();if(se.width===0||se.height===0)return;const Te=(F.clientX-se.left)/se.width,Le=(F.clientY-se.top)/se.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Te*2-1,-(Le*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(F.clientX,F.clientY),this.hasUserControl=!0}}onDocumentTouchStart(F){if(F.touches.length!==1)return;const se=F.touches[0];this.updateHoverState(se.clientX,se.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(se.clientX,se.clientY),this.hasUserControl=!0)}onDocumentTouchMove(F){if(F.touches.length!==1)return;const se=F.touches[0];this.updateHoverState(se.clientX,se.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(se.clientX,se.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const F=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(F>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const se=F*F*(3-2*F);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,se)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const K=new O;class de{constructor(F,se,Te){this.mouse=F,this.manager=se,this.enabled=Te.enabled,this.speed=Te.speed,this.resumeDelay=Te.resumeDelay||3e3,this.rampDurationMs=(Te.rampDuration||0)*1e3,this.active=!1,this.current=new lt(0,0),this.target=new lt,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new lt,this.pickNewTarget()}pickNewTarget(){const F=Math.random;this.target.set((F()*2-1)*(1-this.margin),(F()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const F=performance.now();if(F-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=F,this.activationTime=F),!this.active)return;this.mouse.isAutoActive=!0;let Te=(F-this.lastTime)/1e3;this.lastTime=F,Te>.2&&(Te=.016);const Le=this._tmpDir.subVectors(this.target,this.current),Se=Le.length();if(Se<.01){this.pickNewTarget();return}Le.normalize();let Ae=1;if(this.rampDurationMs>0){const Pe=Math.min(1,(F-this.activationTime)/this.rampDurationMs);Ae=Pe*Pe*(3-2*Pe)}const Be=this.speed*Te*Ae,ze=Math.min(Be,Se);this.current.addScaledVector(Le,ze),this.mouse.setNormalized(this.current.x,this.current.y)}}const ye=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,Oe=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Ze=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,te=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,we=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Ee=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Je=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Qe=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,$e=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,qt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class st{constructor(F){var se;this.props=F||{},this.uniforms=(se=this.props.material)==null?void 0:se.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new dx,this.camera=new tu,this.uniforms&&(this.material=new Xo(this.props.material),this.geometry=new Ds(2,2),this.plane=new di(this.geometry,this.material),this.scene.add(this.plane))}update(){he.renderer.setRenderTarget(this.props.output||null),he.renderer.render(this.scene,this.camera),he.renderer.setRenderTarget(null)}}class _t extends st{constructor(F){super({material:{vertexShader:ye,fragmentShader:te,uniforms:{boundarySpace:{value:F.cellScale},px:{value:F.cellScale},fboSize:{value:F.fboSize},velocity:{value:F.src.texture},dt:{value:F.dt},isBFECC:{value:!0}}},output:F.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const F=new Ri,se=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);F.setAttribute("position",new Ai(se,3));const Te=new Xo({vertexShader:Oe,fragmentShader:te,uniforms:this.uniforms});this.line=new mM(F,Te),this.scene.add(this.line)}update({dt:F,isBounce:se,BFECC:Te}){this.uniforms.dt.value=F,this.line.visible=se,this.uniforms.isBFECC.value=Te,super.update()}}class Ct extends st{constructor(F){super({output:F.dst}),this.init(F)}init(F){super.init();const se=new Ds(1,1),Te=new Xo({vertexShader:Ze,fragmentShader:Je,blending:Jd,depthWrite:!1,uniforms:{px:{value:F.cellScale},force:{value:new lt(0,0)},center:{value:new lt(0,0)},scale:{value:new lt(F.cursor_size,F.cursor_size)}}});this.mouse=new di(se,Te),this.scene.add(this.mouse)}update(F){const se=K.diff.x/2*F.mouse_force,Te=K.diff.y/2*F.mouse_force,Le=F.cursor_size*F.cellScale.x,Se=F.cursor_size*F.cellScale.y,Ae=Math.min(Math.max(K.coords.x,-1+Le+F.cellScale.x*2),1-Le-F.cellScale.x*2),Be=Math.min(Math.max(K.coords.y,-1+Se+F.cellScale.y*2),1-Se-F.cellScale.y*2),ze=this.mouse.material.uniforms;ze.force.value.set(se,Te),ze.center.value.set(Ae,Be),ze.scale.value.set(F.cursor_size,F.cursor_size),super.update()}}class ot extends st{constructor(F){super({material:{vertexShader:ye,fragmentShader:qt,uniforms:{boundarySpace:{value:F.boundarySpace},velocity:{value:F.src.texture},velocity_new:{value:F.dst_.texture},v:{value:F.viscous},px:{value:F.cellScale},dt:{value:F.dt}}},output:F.dst,output0:F.dst_,output1:F.dst}),this.init()}update({viscous:F,iterations:se,dt:Te}){let Le,Se;this.uniforms.v.value=F;for(let Ae=0;Ae<se;Ae++)Ae%2===0?(Le=this.props.output0,Se=this.props.output1):(Le=this.props.output1,Se=this.props.output0),this.uniforms.velocity_new.value=Le.texture,this.props.output=Se,this.uniforms.dt.value=Te,super.update();return Se}}class bt extends st{constructor(F){super({material:{vertexShader:ye,fragmentShader:Ee,uniforms:{boundarySpace:{value:F.boundarySpace},velocity:{value:F.src.texture},px:{value:F.cellScale},dt:{value:F.dt}}},output:F.dst}),this.init()}update({vel:F}){this.uniforms.velocity.value=F.texture,super.update()}}class j extends st{constructor(F){super({material:{vertexShader:ye,fragmentShader:Qe,uniforms:{boundarySpace:{value:F.boundarySpace},pressure:{value:F.dst_.texture},divergence:{value:F.src.texture},px:{value:F.cellScale}}},output:F.dst,output0:F.dst_,output1:F.dst}),this.init()}update({iterations:F}){let se,Te;for(let Le=0;Le<F;Le++)Le%2===0?(se=this.props.output0,Te=this.props.output1):(se=this.props.output1,Te=this.props.output0),this.uniforms.pressure.value=se.texture,this.props.output=Te,super.update();return Te}}class Wt extends st{constructor(F){super({material:{vertexShader:ye,fragmentShader:$e,uniforms:{boundarySpace:{value:F.boundarySpace},pressure:{value:F.src_p.texture},velocity:{value:F.src_v.texture},px:{value:F.cellScale},dt:{value:F.dt}}},output:F.dst}),this.init()}update({vel:F,pressure:se}){this.uniforms.velocity.value=F.texture,this.uniforms.pressure.value=se.texture,super.update()}}class yt{constructor(F){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...F},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new lt,this.cellScale=new lt,this.boundarySpace=new lt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?ki:Ei}createAllFBO(){const se={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:fn,magFilter:fn,wrapS:ei,wrapT:ei};for(let Te in this.fbos)this.fbos[Te]=new Ti(this.fboSize.x,this.fboSize.y,se)}createShaderPass(){this.advection=new _t({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ct({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ot({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new bt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new j({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Wt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const F=Math.max(1,Math.round(this.options.resolution*he.width)),se=Math.max(1,Math.round(this.options.resolution*he.height)),Te=1/F,Le=1/se;this.cellScale.set(Te,Le),this.fboSize.set(F,se)}resize(){this.calcSize();for(let F in this.fbos)this.fbos[F].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let F=this.fbos.vel_1;this.options.isViscous&&(F=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:F});const se=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:F,pressure:se})}}class Et{constructor(){this.init()}init(){this.simulation=new yt,this.scene=new dx,this.camera=new tu,this.output=new di(new Ds(2,2),new Xo({vertexShader:ye,fragmentShader:we,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new lt},palette:{value:I},bgColor:{value:z}}})),this.scene.add(this.output)}addScene(F){this.scene.add(F)}resize(){this.simulation.resize()}render(){he.renderer.setRenderTarget(null),he.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class We{constructor(F){this.props=F,he.init(F.$wrapper),K.init(F.$wrapper),K.autoIntensity=F.autoIntensity,K.takeoverDuration=F.takeoverDuration,this.lastUserInteraction=performance.now(),K.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new de(K,this,{enabled:F.autoDemo,speed:F.autoSpeed,resumeDelay:F.autoResumeDelay,rampDuration:F.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():A.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(he.renderer.domElement),this.output=new Et}resize(){he.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),K.update(),he.update(),this.output.update()}loop(){this.running&&(this.render(),V.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,V.current&&(cancelAnimationFrame(V.current),V.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),K.dispose(),he.renderer){const F=he.renderer.domElement;F&&F.parentNode&&F.parentNode.removeChild(F),he.renderer.dispose()}}catch{}}}const U=P.current;U.style.position=U.style.position||"relative",U.style.overflow=U.style.overflow||"hidden";const T=new We({$wrapper:U,autoDemo:G,autoSpeed:E,autoIntensity:C,takeoverDuration:_,autoResumeDelay:y,autoRampDuration:N});D.current=T,(()=>{var se;if(!D.current)return;const ne=(se=D.current.output)==null?void 0:se.simulation;if(!ne)return;const F=ne.options.resolution;Object.assign(ne.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:pe,iterations_poisson:re,dt:f,BFECC:m,resolution:ee,isBounce:p}),ee!==F&&ne.resize()})(),T.start();const ge=new IntersectionObserver(ne=>{const F=ne[0],se=F.isIntersecting&&F.intersectionRatio>0;A.current=se,D.current&&(se&&!document.hidden?D.current.start():D.current.pause())},{threshold:[0,.01,.1]});ge.observe(U),k.current=ge;const ve=new ResizeObserver(()=>{D.current&&(L.current&&cancelAnimationFrame(L.current),L.current=requestAnimationFrame(()=>{D.current&&D.current.resize()}))});return ve.observe(U),B.current=ve,()=>{if(V.current&&cancelAnimationFrame(V.current),B.current)try{B.current.disconnect()}catch{}if(k.current)try{k.current.disconnect()}catch{}D.current&&D.current.dispose(),D.current=null}},[m,e,f,p,i,c,l,r,g,s,x,M,E,C,_,y,N]),De.useEffect(()=>{var fe;const Q=D.current;if(!Q)return;const I=(fe=Q.output)==null?void 0:fe.simulation;if(!I)return;const z=I.options.resolution;Object.assign(I.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:pe,iterations_poisson:re,dt:f,BFECC:m,resolution:ee,isBounce:p}),Q.autoDriver&&(Q.autoDriver.enabled=G,Q.autoDriver.speed=E,Q.autoDriver.resumeDelay=y,Q.autoDriver.rampDurationMs=N*1e3,Q.autoDriver.mouse&&(Q.autoDriver.mouse.autoIntensity=C,Q.autoDriver.mouse.takeoverDuration=_)),ee!==z&&I.resize()},[r,e,i,s,l,c,f,m,g,p,M,E,C,_,y,N,G,ee,re,pe]),d.jsx("div",{ref:P,className:`liquid-ether-container ${v||""}`,style:S})}const qc=({name:r="",size:e=24,color:i="currentColor",strokeColor:s="",className:l=""})=>d.jsx("svg",{className:l,width:e,height:e,fill:i,stroke:s||"currentColor",children:d.jsx("use",{href:`/portfolio/icon-sprite.svg#${r}`})}),S2=({toggleMenu:r,menuOpen:e})=>d.jsxs("header",{className:"relative z-50 p-2 bg-stone-800/50 text-white h-14 flex justify-between px-4 w-full",children:[d.jsxs("div",{className:"flex flex-1 items-center align-middle h-full",children:[d.jsx("button",{type:"button",onClick:r,"aria-label":e?"Close menu":"Open menu","aria-expanded":e,"aria-controls":"primary-navigation",className:"inline-flex h-10 w-10 items-center justify-center rounded-lg border border-transparent transition-colors duration-200 hover:bg-stone-700/70 focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-2 md:hidden",children:d.jsx(qc,{name:"mobile-menu",size:18,className:"align-middle"})}),d.jsxs(Zo,{to:"/","aria-label":"Go to homepage",className:"flex rounded-lg",children:[d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",width:"40",height:"40",className:" aspect-square h-10 my-auto p-2",children:[d.jsx("circle",{cx:"20",cy:"20",r:"18",fill:"#FFFFFF"}),d.jsx("path",{d:"M13 11 L18.5 20.5 V29 H21.5 V20.5 L27 11 H23.5 L20 17 L16.5 11 H13 Z",fill:"#1A1D21"})]}),d.jsx("span",{className:"text-stone-200/80 text-lg my-auto leading-normal centered pt-0.5 pr-2",children:"Product Portfolio"})]})]}),d.jsx("div",{className:"flex space-x-2 justify-end",children:d.jsx("a",{href:"https://www.linkedin.com/in/yannick-boulanger/",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Yannick Boulanger on LinkedIn",className:"p-1 rounded-lg items-center border border-gray-600 justify-center transition-all duration-500 hover:border-blue-400 hover:bg-blue-900",children:d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 72 72",fill:"none",children:d.jsx("path",{d:"M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z",fill:"#fff"})})})})]}),qx=[{key:"cases",label:"Cases",icon:"cases",id:"cases-menu",items:[{label:"CS01 : Orchestrator",path:"/case01"},{label:"CS02 : Caller Interface",path:"/case02"},{label:"CS03 : Enrollment Flow",path:"/case03"}]},{key:"portfolio",label:"Portfolio",icon:"portfolio",id:"portfolio-menu",items:[{label:"PF01 : Query-Building",path:"/portfolio01"},{label:"PF02 : Hybrid Workforce",path:"/portfolio02"},{label:"PF03 : Debt Assessment",path:"/portfolio03"}]}],b2=()=>{var M;const r=Is(),e=((M=qx.find(E=>E.items.some(C=>C.path.toLowerCase()===r.pathname.toLowerCase())))==null?void 0:M.key)??null,[i,s]=De.useState(null),[l,c]=De.useState(null);De.useEffect(()=>{s(e),c(null)},[e,r.pathname]);const f="hover:bg-stone-800/50 hover:text-stone-200",m="bg-stone-800/50 text-white",p=`text-md text-stone-400 flex flex-row px-0 py-2 pl-6 pr-4 items-center justify-start transition-all duration-300 ease-out ${f} active:bg-purple-700/50`,x=E=>r.pathname.toLowerCase()===E.toLowerCase(),S=E=>x(E)?m:"",v=(E,C)=>{const _=C.relatedTarget;_&&(C.currentTarget.contains(_)||_ instanceof Element&&_.hasAttribute("data-menu-group-toggle"))||e!==E&&s(y=>y===E?null:y)};return d.jsx("div",{className:"w-full min-w-0 grow border-r-2 border-stone-800 background-red-500/50",children:d.jsx("nav",{id:"primary-navigation","aria-label":"Primary navigation",className:"w-full h-full min-w-0",children:d.jsxs("div",{className:"flex flex-col h-full",children:[d.jsx("div",{className:"grow-0",children:d.jsxs("ul",{className:"list-none mt-16 space-y-0",children:[d.jsx("li",{className:" mb-1",children:d.jsxs(Zo,{to:"/","aria-current":x("/")?"page":void 0,className:`${p} ${S("/")}`,children:[d.jsx(qc,{name:"home",size:18,className:"mr-2 -mt-1 text-white"}),d.jsx("span",{className:"text-lg font-normal",children:"Home"})]})}),qx.map(E=>{const C=e===E.key,_=C&&l!==E.key||i===E.key;return d.jsxs("li",{className:"",onBlur:y=>v(E.key,y),children:[d.jsxs("button",{type:"button","data-menu-group-toggle":!0,onClick:()=>{if(C){c(y=>y===E.key?null:E.key);return}s(y=>y===E.key?null:E.key)},"aria-expanded":_,"aria-controls":E.id,className:`${p} w-full`,children:[d.jsx(qc,{name:E.icon,size:18,className:"mr-2 -mt-1 text-white"}),d.jsx("span",{className:"text-lg font-normal",children:E.label}),d.jsx(qc,{name:"chevron-down",size:18,className:`ml-auto transition-transform duration-300 ${_?"rotate-180":""}`})]}),d.jsx("ul",{id:E.id,inert:!_,className:`ml-0 mt-1 pl-0 space-y-1 empty:hidden list-none overflow-hidden transition-all duration-300 ease-in-out ${_?"max-h-40 opacity-100":"max-h-0 opacity-0"}`,children:E.items.map(y=>d.jsx("li",{children:d.jsx(Zo,{to:y.path,"aria-current":x(y.path)?"page":void 0,className:`${p} ${S(y.path)} ${_?"translate-y-0 opacity-100":"-translate-y-2 opacity-0"}`,children:d.jsx("span",{className:"pl-10 text-lg font-normal",children:y.label})})},y.path))})]},E.key)})]})}),d.jsxs("div",{className:"mb-6 p-6 grow content-end",children:[d.jsxs("div",{className:"flex items-start space-x-1 mx-auto",children:[d.jsx("i",{className:"mr-1",children:d.jsx("svg",{width:"24",height:"24",viewBox:"0 2 24 24",fill:"orange",children:d.jsx("path",{d:"M12 2.5L14.9 8.6L21.5 9.4L16.75 13.9L18.1 20.5L12 17.2L5.9 20.5L7.25 13.9L2.5 9.4L9.1 8.6L12 2.5Z"})})}),d.jsx("p",{className:"leading-snug",children:"Open to New Opportunities"})]}),d.jsx("a",{href:"https://www.linkedin.com/in/yannick-boulanger/",target:"_blank",rel:"noopener noreferrer",className:"bg-stone-800/50 block text-center w-full p-1.5 pb-2 px-3 rounded-lg border border-gray-600 transition-all duration-500 hover:border-purple-300/80 hover:bg-purple-900 text-white",children:"Connect on LinkedIn"})]})]})})})},M2="/portfolio/assets/Thumb-Case01-DdFGIIfZ.png",E2="/portfolio/assets/Thumb-Case02-D3YojT8i.png",T2="/portfolio/assets/Thumb-Port02-b4ueRP8H.png",A2=[{id:1,tag:"Product Case",title:"SD-WAN Orchestrator",desc:"Zero-Touch Provisioning for Multi-Tenancy",img:T2,status:"Open",active:!0,path:"/case01"},{id:2,tag:"Product Case",title:"Caller UI Redesign",desc:"Multi-Panel Workspace for Sales Workflows",img:M2,status:"Open",active:!0,path:"/case02"},{id:3,tag:"UX Case",title:"VPN Enrollment Flow",desc:"Self-Service Onboarding & MFA Authentication",img:E2,status:"Open",active:!0,path:"/case03"}];function w2(){return d.jsxs("section",{className:"mb-16 max-w-screen-lg mx-auto px-6 xl:px-0",children:[d.jsx("h3",{className:"text-4xl font-normal",children:"Case Studies"}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:A2.map(r=>d.jsxs("div",{className:"group bg-stone-800/50 overflow-hidden hover:shadow-xl hover:bg-stone-800/60  transition-all duration-500 hover:scale-104",children:[d.jsx("div",{className:"relative aspect-6/4 overflow-hidden bg-stone-600",children:d.jsx("img",{src:r.img,alt:r.title,className:"w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-107"})}),d.jsxs("div",{className:"p-6",children:[d.jsx("h4",{className:"text-2xl font-semibold mb-2",children:r.title}),d.jsx("p",{children:r.desc}),r.active?d.jsx(Zo,{to:`${r.path}`,className:"block w-full  text-center p-2 rounded-lg text-lg font-medium transition-all duration-500 bg-stone-950/80 border border-cyan-600 group-hover:bg-cyan-500 group-hover:text-black",children:r.status}):d.jsx("button",{disabled:!0,className:"w-full p-2 rounded-lg text-lg font-medium bg-stone-800/40 border border-transparent cursor-not-allowed",children:r.status})]})]},r.id))})]})}const R2="/portfolio/assets/Thumb-Case03-DGzPN63w.png",C2="/portfolio/assets/Thumb-Port01-se4AUbEI.png",N2="/portfolio/assets/Thumb-Port03-BST0Lm-n.png",D2=[{id:1,tag:"Portfolio",title:"Dynamic Prioritization",desc:"Flexible Query-Building for Sales Workflows",img:R2,status:"Open",active:!0,path:"/portfolio01"},{id:2,tag:"Portfolio",title:"Hybrid Workforce",desc:"SD-WAN Remote Access for Distributed Teams",img:C2,status:"Open",active:!0,path:"/portfolio02"},{id:3,tag:"Wireframe",title:"Debt Assessment Tool",desc:"Helping Physicians Manage Debt Smarter",img:N2,status:"Open",active:!0,path:"/portfolio03"}];function U2(){return d.jsxs("section",{className:"mb-16 max-w-screen-lg mx-auto  px-6 xl:px-0",children:[d.jsx("h3",{className:"text-4xl font-normal",children:"Portfolio"}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:D2.map(r=>d.jsxs("div",{className:"group bg-stone-800/50 rounded-1xl overflow-hidden hover:shadow-xl hover:bg-stone-800/60 transition-all duration-500 hover:scale-104",children:[d.jsx("div",{className:"relative aspect-6/4 overflow-hidden bg-stone-600",children:d.jsx("img",{src:r.img,alt:r.title,className:"w-full h-full object-cover object-top  transition-all duration-500 group-hover:scale-107"})}),d.jsxs("div",{className:"p-6",children:[d.jsx("h4",{className:" text-2xl font-semibold mb-1",children:r.title}),d.jsx("p",{children:r.desc}),r.active?d.jsx(Zo,{to:`${r.path}`,className:"block w-full  text-center p-2 rounded-lg text-lg font-medium transition-all duration-500 bg-stone-950/80 border border-cyan-600 group-hover:bg-cyan-500 group-hover:text-black",children:r.status}):d.jsx("button",{disabled:!0,className:"w-full p-2 rounded-lg text-lg font-medium bg-stone-800/40 border border-transparent cursor-not-allowed",children:r.status})]})]},r.id))})]})}function L2(){return d.jsxs("div",{className:"w-full text-white",children:[d.jsxs("section",{id:"top","aria-labelledby":"home-heading",className:"mb-16 max-w-screen-lg mx-auto px-6 xl:px-0",children:[d.jsx("h1",{className:"pb-8",children:"Yannick Boulanger"}),d.jsxs("h2",{className:"uppercase font-light bg-stone-800/50",children:[d.jsx("span",{className:"uppercase font-bold",children:"Product Designer "}),"Solutions for Complex Human Applications"]}),d.jsxs("div",{className:"lg:flex flex-wrap gap-12 mt-24",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("h3",{className:"text-4xl text-cyan-300/90",children:"Product Workflows"}),d.jsx("p",{className:"text-xl",children:"Design SaaS products around real-world tasks, workflows, and user needs."}),d.jsx("h3",{className:"text-4xl text-cyan-300/90",children:"Evidence-Based Design"}),d.jsx("p",{className:"text-xl",children:"Apply research, workflow analysis, and cross-functional collaboration to inform design decisions"})]}),d.jsxs("div",{className:"flex-1",children:[d.jsx("h3",{className:"text-4xl text-cyan-300/90",children:"Scalable Architecture"}),d.jsx("p",{className:"text-xl",children:"Structure information, interactions, and workflows to support platforms and evolving product needs"}),d.jsx("h3",{className:"text-4xl text-cyan-300/90",children:"Strategy Through Delivery"}),d.jsx("p",{className:"text-xl",children:"Bring concepts into implementation through interaction design, engineering collaboration, and iteration."})]})]})]}),d.jsx(w2,{}),d.jsx(U2,{}),d.jsx("section",{id:"summary","aria-labelledby":"summary-heading",className:"w-full border-stone-800 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsx("div",{className:"border-l border-cyan-300/50 pl-4",children:d.jsx("h2",{id:"summary-heading",className:"text-4xl leading-snug",children:"Professional Summary"})})}),d.jsx("div",{className:"flex-3/4 gap-6 lg:grid ",children:d.jsxs("div",{children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-3xl font-light",children:"Senior Product Designer with 15+ years of experience shaping B2B SaaS, enterprise platforms, and customer-facing digital products."}),d.jsx("h3",{className:"text-4xl text-cyan-300/90",children:"Cross-Functional Collaboration & Evidence-Based Design"})]}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsxs("div",{className:"flex-1/2",children:[d.jsx("p",{className:"text-lg",children:"I work alongside engineering, product, and business teams from discovery through delivery, using research and workflow analysis to ground design decisions.                    "}),d.jsx("p",{className:"text-lg",children:"My experience spans SD-WAN orchestration, VPN enrollment, hybrid workforce access, sales CRM workflows, and financial tools.                    "})]}),d.jsxs("div",{className:"flex-1/2",children:[d.jsx("p",{className:"text-lg",children:"I bring structure to ambiguity by investigating unfamiliar problems and understanding how people, information, and systems interact."}),d.jsx("p",{className:"text-lg",children:"I translate that understanding into clear information architecture, intuitive workflows, and interfaces that balance user needs with technical and business requirements.                    "})]})]})]})})]})})}),d.jsx("section",{"aria-labelledby":"capabilities-heading",className:"w-full bg-stone-800/20 mb-12 py-12 border-stone-800",children:d.jsxs("div",{className:"max-w-screen-lg mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 xl:px-0",children:[d.jsx("h2",{id:"capabilities-heading",className:"sr-only",children:"Core capabilities"}),d.jsx("div",{className:"flex-1",children:d.jsxs("dl",{children:[d.jsx("dt",{className:"pb-2 text-cyan-300/90 text-3xl",children:"Product"}),d.jsx("dd",{className:"text-lg text-white",children:"Strategy, Discovery & Agile Delivery"})]})}),d.jsx("div",{className:"flex-1",children:d.jsxs("dl",{children:[d.jsx("dt",{className:"pb-2 text-cyan-300/90 text-3xl",children:"Human"}),d.jsx("dd",{className:"text-lg text-white",children:"Human-Computer Interaction, UX & Research"})]})}),d.jsx("div",{className:"flex-1",children:d.jsxs("dl",{children:[d.jsx("dt",{className:"pb-2 text-cyan-300/90 text-3xl",children:"Application"}),d.jsx("dd",{className:"text-lg text-white",children:"Enterprise SaaS & Workflow Platforms"})]})}),d.jsx("div",{className:"flex-1 rounded-br-lg",children:d.jsxs("dl",{children:[d.jsx("dt",{className:"pb-2 text-cyan-300/90 text-3xl",children:"Code"}),d.jsx("dd",{className:"text-lg text-white",children:"Front-End Integration & Prototyping"})]})})]})}),d.jsxs("p",{className:"mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})]})}const O2="/portfolio/assets/SDWAN-Dashboard-Bk5a96ak.png",P2="/portfolio/assets/SDWAN-Customer%20Inventory-D2RJIWV8.png",I2="/portfolio/assets/SDWAN-Add%20Site%20and%20Device%20Dialogs-QtfcWiUb.png",F2="/portfolio/assets/SDWAN-Sites%20and%20Devices%20Management-BRuBVUDL.png",B2="/portfolio/assets/SDWAN-Site%20Dashboard-DZDi9BWm.png",z2="/portfolio/assets/SDWAN-LAN%20Configuration-BA02YH_L.png",H2="/portfolio/assets/SDWAN-Add%20SNAT%20and%20DNAT%20Dialogs-tNtNpK4U.png",V2="/portfolio/assets/SDWAN-Site%20Architecture-Uam3CbTc.png",G2=[{src:O2,alt:"SD-WAN orchestrator dashboard"}],j2=[{src:P2,alt:"Customer inventory in the SD-WAN orchestrator"},{src:I2,alt:"Dialogs for adding a site and network device"},{src:F2,alt:"Site and device management interface"},{src:B2,alt:"Dashboard for an individual customer site"},{src:z2,alt:"LAN configuration interface"},{src:H2,alt:"Dialogs for configuring SNAT and DNAT"},{src:V2,alt:"Architecture diagram for a customer site"}];function k2(){const r=[{title:"Network-level management",description:"Organized the experience around customer networks rather than individual devices."},{title:"End-to-end provisioning",description:"Connected provisioning activities across the customer deployment lifecycle through Zero-Touch Provisioning."},{title:"Asynchronous operations",description:"Enabled users to continue managing their networks while deployment and configuration operations progressed, with status visibility."},{title:"Automated configuration",description:"Automated VPN user onboarding, Multi-Factor Authentication (MFA) setup, and network policy provisioning."},{title:"Accessible network management",description:"Simplified routine network administration and troubleshooting through clearer workflows and improved operational visibility."}];return d.jsxs("article",{className:"text-white",children:[d.jsx("header",{className:"w-full text-gray-200",children:d.jsxs("div",{className:"mx-auto mb-12 max-w-screen-lg px-6 text-white xl:px-0",children:[d.jsx("h1",{className:"pb-8",children:"CS01 : SD-WAN Orchestrator"}),d.jsxs("p",{className:"mb-16 bg-stone-800/50 text-5xl leading-none font-light text-stone-100 uppercase sm:text-7xl",children:[d.jsx("span",{className:"block w-full font-bold",children:"Rethinking Secure Provisioning"}),"for Multi-Tenancy"]}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"mb-6 min-w-0 lg:flex-1/4",children:d.jsxs("dl",{className:"grid grid-cols-2 gap-4 lg:grid-cols-1",children:[d.jsxs("div",{className:"mb-4",children:[d.jsx("dt",{className:"mb-2 block pb-2 text-xs font-semibold tracking-[0.2em] text-stone-300",children:"Industry"}),d.jsx("dd",{children:d.jsxs("ul",{className:"flex list-none flex-col items-start gap-2 p-0",children:[d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:d.jsx("span",{className:"inline-block whitespace-nowrap",children:"Networking"})}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Retail"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Hospitality"})]})})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("dt",{className:"mb-2 block pb-2 text-xs font-semibold tracking-[0.2em] text-stone-300",children:"Contributions"}),d.jsx("dd",{children:d.jsxs("ul",{className:"flex list-none flex-col items-start gap-2 p-0",children:[d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Design Leadership"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Research & Discovery"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Product Ownership"})]})})]})]})}),d.jsxs("div",{className:"flex-3/4",children:[d.jsx("p",{className:"text-3xl font-light",children:"As network complexity and hybrid workforces grew, Adaptiv Networks needed its SD-WAN orchestrator to support secure, scalable provisioning across tenants."}),d.jsxs("div",{className:"",children:[d.jsx("h2",{id:"challenge-heading",className:"text-4xl leading-snug text-cyan-300/90",children:"Product Context"}),d.jsxs("div",{className:"flex flex-col-2 gap-6 md:flex-row",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("p",{children:"The existing platform combined network resilience and security capabilities, including SD-WAN, Zero Trust Network Access (ZTNA), Firewall as a Service (FWaaS), and Secure Web Gateway (SWG)."}),d.jsx("p",{children:"However, its orchestration model remained focused on individual device configuration, requiring specialized technical expertise to manage customer networks."})]}),d.jsx("div",{className:"flex-1",children:d.jsx("p",{children:"Tenants needed a more cohesive way to provision, manage, and troubleshoot customer networks throughout the deployment lifecycle. Greater autonomy was a design goal, intended to reduce reliance on the provider's technical staff, support faster deployments, and help tenants respond to their own customers' needs."})})]})]})]})]})]})}),d.jsx("section",{"aria-label":"Project interface screenshots",children:G2.map((e,i)=>d.jsx("div",{className:`text-gray-200 ${i%2===0?"bg-zinc-900/50":""}`,children:d.jsx("figure",{className:"mx-auto max-w-screen-xl px-6  xl:px-0",children:d.jsx("img",{src:e.src,className:"border border-zinc-700 shadow-2xl",alt:e.alt})})},e.src))}),d.jsx("section",{"aria-labelledby":"research-heading",className:"w-full border-stone-800 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"pt-6 mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"01"}),d.jsx("h2",{id:"research-heading",className:"text-4xl leading-snug",children:"Investigation"})]})}),d.jsxs("div",{className:"flex-3/4 gap-6 pt-5",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-2xl font-light",children:"Workflow reviews and user feedback revealed needs across provisioning, ongoing operations, and network troubleshooting."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Understanding the Problem"})]}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsxs("div",{className:"flex-1/2",children:[d.jsx("p",{children:"I examined existing workflows, gathered user feedback, and collaborated with stakeholders to understand operational needs and product constraints.                  "}),d.jsx("p",{children:"The investigation revealed a gap between how the orchestrator was structured and how tenants needed to manage their customers' networks. While the platform focused primarily on individual device configuration, users needed to oversee the entire provisioning lifecycle, from device ordering and delivery to configuration, security policies, and deployment.                  "})]}),d.jsxs("div",{className:"flex-1/2",children:[d.jsx("p",{children:"Workflow analysis also highlighted two additional needs: asynchronous deployment operations that allowed users to continue working while configurations were being applied, and simpler management and troubleshooting workflows for users with varying levels of networking expertise.                  "}),d.jsx("p",{children:"These findings pointed toward a more cohesive, network-centric approach to orchestration."})]})]})]})]})})}),d.jsx("section",{"aria-labelledby":"experience-heading",className:"w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"pt-6 mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"02"}),d.jsx("h2",{id:"experience-heading",className:"text-4xl leading-snug",children:"Design Approach"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"I translated these findings into a network-centric information architecture and provisioning workflows that support ongoing operations."}),d.jsxs("div",{className:"mt-8 mb-12 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2",children:[d.jsxs("div",{className:"border-l border-stone-700 pl-5",children:[d.jsx("h3",{className:"mb-1 text-2xl text-cyan-300/90",children:"Network-Centric Information Architecture"}),d.jsx("p",{children:"Restructuring the information architecture around customer networks established a foundation for organizing devices, services, and network-level operations."}),d.jsx("p",{children:"This shifted the experience from managing isolated components to managing complete customer networks, improving visibility and establishing a more scalable organizational model."})]}),d.jsxs("div",{className:"border-l border-stone-700 pl-5",children:[d.jsx("h3",{className:"mb-1 text-2xl text-cyan-300/90",children:"End-to-End Provisioning with ZTP"}),d.jsx("p",{children:"Tenants needed greater control over customer deployments, from device ordering and delivery to bringing networks online."}),d.jsx("p",{children:"The provisioning experience was restructured around this lifecycle, using Zero-Touch Provisioning (ZTP) to connect device configuration, security policies, and deployment into a more streamlined workflow with minimal manual intervention.                  "})]}),d.jsxs("div",{className:"border-l border-stone-700 pl-5",children:[d.jsx("h3",{className:"mb-1 text-2xl text-cyan-300/90",children:"Asynchronous Deployment"}),d.jsx("p",{children:"Network deployment and configuration did not need to prevent users from continuing other tasks.                  "}),d.jsx("p",{children:"Asynchronous operations and status updates allowed users to monitor deployment progress, manage their networks, and investigate issues without waiting for each operation to complete.                  "})]}),d.jsxs("div",{className:"border-l border-stone-700 pl-5",children:[d.jsx("h3",{className:"mb-1 text-2xl text-cyan-300/90",children:"Accessible Network Operations"}),d.jsx("p",{children:"Users had varying levels of networking expertise but shared the need to manage and troubleshoot customer networks.                  "}),d.jsx("p",{children:"The design emphasized clearer workflows and better operational visibility to make routine network administration more approachable.                  "})]}),d.jsxs("div",{className:"border-l border-stone-700 pl-5",children:[d.jsx("h3",{className:"mb-1 text-2xl text-cyan-300/90",children:"Automated VPN User Onboarding"}),d.jsx("p",{children:"Managing multiple VPN users involved repetitive configuration and access management tasks."}),d.jsx("p",{children:"Automating user provisioning and Multi-Factor Authentication (MFA) simplified onboarding, enabling new users to gain secure network access with less manual effort.                  "})]})]})]})]})})}),d.jsx("section",{"aria-labelledby":"redesign-established-heading",className:"w-full border-stone-800 px-6 py-12 xl:px-0",children:d.jsxs("div",{className:"mx-auto max-w-screen-lg gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"pt-6 mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"03"}),d.jsx("h2",{id:"redesign-established-heading",className:"text-4xl leading-snug",children:"Solution"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"The redesign brought together capabilities spanning information architecture, deployment, configuration, and ongoing management."}),d.jsx("div",{className:"mt-8 mb-12 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2",children:r.map(e=>d.jsxs("div",{className:"border-l border-stone-700 pl-5",children:[d.jsx("div",{className:"mb-1 flex items-baseline gap-3",children:d.jsx("h3",{className:"mb-0 text-2xl text-cyan-300/90",children:e.title})}),d.jsx("p",{className:"mb-0 text-lg",children:e.description})]},e.title))}),d.jsx("p",{children:"Together, these capabilities provided a foundation for more autonomous, efficient, and scalable network management. Quantitative improvements in provisioning time, configuration errors, or support effort were not available to measure the extent of the impact."})]})]})}),d.jsx("section",{"aria-labelledby":"reflection-heading",className:"w-full px-6 py-16 xl:px-0",children:d.jsxs("div",{className:"mx-auto max-w-screen-lg gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"pt-6 mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"04"}),d.jsx("h2",{id:"reflection-heading",className:"text-4xl leading-snug",children:"Reflection"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"mb-6 text-2xl font-light",children:"The most important shift was moving from a device-centered interface to an experience organized around customer networks and their provisioning lifecycle."}),d.jsx("p",{className:"mb-0 text-2xl font-light",children:"Designing for asynchronous operations and users with different levels of networking expertise reinforced that effective orchestration must support both network-wide visibility and uninterrupted day-to-day work."})]})]})}),d.jsx("section",{"aria-label":"Project interface screenshots",children:j2.map((e,i)=>d.jsx("div",{className:`text-gray-200 ${i%2===0?"bg-zinc-900/50":""}`,children:d.jsx("figure",{className:"mx-auto max-w-screen-xl px-6 my-16 xl:px-0",children:d.jsx("img",{src:e.src,className:"border border-zinc-700 shadow-2xl",alt:e.alt})})},e.src))}),d.jsx("footer",{children:d.jsxs("p",{className:"mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})})]})}function Xv({images:r}){const[e,i]=De.useState(0),s=()=>i((e-1+r.length)%r.length),l=()=>i((e+1)%r.length);return d.jsx("div",{className:"text-gray-200 bg-zinc-900/50 px-6",children:d.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 relative",children:[d.jsxs("div",{className:"relative group overflow-hidden cursor-pointer rounded-xl",children:[d.jsx("img",{src:r[e].src,className:"border-zinc-700 border shadow-2xl mx-auto transition-transform duration-700",alt:r[e].alt}),d.jsx("button",{onClick:s,className:`absolute left-0 top-0 bottom-0 w-20 flex items-center justify-center bg-black/20 
                       opacity-0 group-hover:opacity-100 
                       -translate-x-full group-hover:translate-x-0
                       transition-all duration-500 ease-out will-change-transform`,"aria-label":"Previous slide",children:d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-white drop-shadow-md",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})})}),d.jsx("button",{onClick:l,className:`absolute right-0 top-0 bottom-0 w-20 flex items-center justify-center bg-black/20 
                       opacity-0 group-hover:opacity-100 
                       translate-x-full group-hover:translate-x-0
                       transition-all duration-500 ease-out will-change-transform`,"aria-label":"Next slide",children:d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-white drop-shadow-md",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})})]}),d.jsx("div",{className:"flex justify-center mt-8 space-x-4",children:r.map((c,f)=>d.jsx("button",{className:`h-2 transition-all duration-500 rounded-full ${f===e?"w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]":"w-2 bg-zinc-600"}`,onClick:()=>i(f)},f))})]})})}const X2="/portfolio/assets/Case-001-Caller-UI-0ciZWlwv.png",W2="/portfolio/assets/Case-001-Screen-01-O8so0Rvv.png",q2="/portfolio/assets/Case-001-Screen-02-DymXWPSn.png",Y2="/portfolio/assets/VS-Old-CallerUI-Dw1hW2WW.png";function Z2(){const r=[{src:X2,alt:"Final multi-panel workspace integrating CRM, scripts, and communication tools."},{src:W2,alt:"Multi-panel workspace with integrated SMS communication."},{src:q2,alt:"Multi-panel workspace with heads-up display (HUD) interface."}];return d.jsxs("article",{className:"text-white",children:[d.jsx("header",{className:"w-full text-gray-200",children:d.jsxs("div",{className:"mx-auto mb-12 max-w-screen-lg px-6 text-white xl:px-0",children:[d.jsx("h1",{className:"pb-8",children:"CS02 : VanillaSoft"}),d.jsxs("p",{className:"mb-16 bg-stone-800/50 text-5xl leading-none font-light text-stone-100 uppercase sm:text-7xl",children:[d.jsx("span",{className:"block w-full font-bold",children:"Interface Redesign :"}),"a Multi-Panel Workspace for Sales Workflows"]}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"mb-6 min-w-0 lg:flex-1/4",children:d.jsxs("dl",{className:"grid grid-cols-2 gap-4 lg:grid-cols-1",children:[d.jsxs("div",{className:"mb-4",children:[d.jsx("dt",{className:"mb-2 block pb-2 text-xs font-semibold tracking-[0.2em] text-stone-300",children:"Industry"}),d.jsx("dd",{children:d.jsxs("ul",{className:"flex list-none flex-wrap gap-2 p-0",children:[d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"CRM"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Sales Enablement"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Call Center"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Telemarketing"})]})})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("dt",{className:"mb-2 block pb-2 text-xs font-semibold tracking-[0.2em] text-stone-300",children:"Contributions"}),d.jsx("dd",{children:d.jsxs("ul",{className:"flex list-none flex-wrap gap-2 p-0",children:[d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Contextual & User Research"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Workflow & Task Analysis"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Market & Competitor Analysis"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Information Architecture"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Interaction Design"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Product Design & UI/UX"})]})})]})]})}),d.jsxs("div",{className:"flex-3/4",children:[d.jsx("p",{className:"text-3xl font-light",children:"As sales workflows grew more complex, VanillaSoft needed to rethink its core Caller interface, bringing essential tools and customer information into one unified workspace."}),d.jsx("h2",{className:"text-4xl leading-snug text-cyan-300/90",children:"Assignment"}),d.jsxs("div",{className:"flex flex-col-2 gap-6 md:flex-row",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("p",{children:"The project focused on redesigning VanillaSoft's core Caller UI to improve usability, scalability, and overall user satisfaction while modernizing its visual design and interaction patterns."}),d.jsx("p",{children:"The new interface was designed to support both novice and experienced users, streamline complex sales workflows, and accommodate a growing user base without compromising performance."})]}),d.jsx("div",{className:"flex-1",children:d.jsx("p",{children:"The redesign focused on improving task efficiency, reducing cognitive load, and providing a flexible, responsive workspace across different devices and screen sizes. I was responsible for research, design, front-end integration, and QA throughout the project lifecycle."})})]})]})]})]})}),d.jsx(Xv,{images:r}),d.jsx("section",{"aria-labelledby":"context-heading",className:"w-full px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"01"}),d.jsx("h2",{id:"context-heading",className:"text-4xl leading-snug",children:"Context"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"VanillaSoft organizes sales outreach around a queue of prioritized contacts."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"A Queue-Based Sales Platform"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsx("div",{children:d.jsx("p",{children:"VanillaSoft is a cloud-based sales management platform that integrates CRM, lead management, and telemarketing tools to streamline sales team workflows. It helps organizations manage outreach and customer relationships in a more structured and efficient way."})}),d.jsx("div",{children:d.jsx("p",{children:"What sets VanillaSoft apart from competitors is its queue-based approach, which routes agents to the next best contact based on available data instead of a traditional list-based system. This prevents agents from cherry-picking contacts and promotes efficiency, enabling faster and more effective workflows."})})]})]})]})})}),d.jsx("section",{"aria-labelledby":"observation-heading",className:"w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"02"}),d.jsx("h2",{id:"observation-heading",className:"text-4xl leading-snug",children:"Observation"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"Agents relied on multiple external tools during live calls, while the interface was difficult to extend."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"A Fragmented, Hard-to-Scale Caller UI"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("p",{className:" ",children:"The Caller UI, a central part of the platform used during live calls, had become visually and technically outdated. As the product evolved, the interface became increasingly difficult to extend and maintain."}),d.jsx("p",{className:"mt-6  ",children:"Our research revealed that agents relied heavily on the Caller UI to input data but frequently had to switch between multiple tools to access customer information, scripts, and reference documents. This increased cognitive load, slowed workflows, and reduced call quality."})]}),d.jsx("p",{className:" ",children:"Additionally, the interface architecture made it difficult to scale the UI as new features were added. The redesign needed to improve workflow efficiency while supporting the platform’s long-term evolution."})]})]})]})})}),d.jsx("section",{"aria-labelledby":"research-heading",className:"w-full px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"03"}),d.jsx("h2",{id:"research-heading",className:"text-4xl leading-snug",children:"Research"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"Research examined agent workflows and the resources used during customer interactions."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Workflow and Competitor Research"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("p",{children:"During the research phase, we studied telemarketer workflows and analyzed competitors."}),d.jsx("p",{children:"A key insight came from photos collected by our CEO and sales representatives at customer call centers, which showed that most users rely heavily on external resources to complete their tasks."})]}),d.jsx("div",{children:d.jsx("p",{children:"This reliance creates inefficiencies through constant context switching and increases cognitive load, ultimately slowing down workflows and reducing overall focus during customer interactions."})})]})]})]})})}),d.jsx("section",{"aria-labelledby":"hypothesis-heading",className:"w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"04"}),d.jsx("h2",{id:"hypothesis-heading",className:"text-4xl leading-snug",children:"Hypothesis"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"A unified Caller UI could connect call resources with queue-based lead routing."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"One Workspace for Call Tasks"}),d.jsxs("div",{className:"flex flex-col-2 gap-6 md:flex-row",children:[d.jsx("div",{className:"flex-1",children:d.jsx("p",{children:"Bringing customer details, scripts, reference documents, compliance materials, and communication tools directly into the Caller UI would give agents a more complete working environment, reducing the need to switch between external applications and helping them stay focused throughout customer interactions."})}),d.jsx("div",{className:"flex-1",children:d.jsx("p",{children:"A unified workspace could reduce context switching, help agents maintain focus, and create a more seamless experience throughout the calling workflow."})})]})]})]})})}),d.jsx("section",{"aria-labelledby":"solution-heading",className:"w-full px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"05"}),d.jsx("h2",{id:"solution-heading",className:"text-4xl leading-snug",children:"Solution"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"The redesign introduced a flexible, customizable workspace with asynchronously loaded contact details."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"A Flexible Multi-Panel Workspace"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("p",{children:"The redesign introduced a flexible multi-panel layout to optimize space and support dynamic workflows. The interface adapts to user tasks, offering a personalized and responsive experience."}),d.jsx("p",{children:"The grid layout, implemented using Kendo UI, ensured stability and performance at scale. Additional information for each contact was fetched asynchronously to minimize wait times."})]}),d.jsxs("div",{children:[d.jsx("p",{children:"Panels could be resized, reorganized, or removed, allowing the workspace to adapt to user workflows. Inline editing including undo functionality was available to most of the content presented with customization options."}),d.jsx("p",{children:"The redesign supported business growth, boosted user retention, and acted as a differentiator in the competitive CRM market, contributing to strong ROI and long-term success."})]})]})]})]})})}),d.jsx("section",{"aria-labelledby":"features-heading",className:"w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"06"}),d.jsx("h2",{id:"features-heading",className:"text-4xl leading-snug",children:"Features"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"The feature set combines layout customization, scalable performance, and integrated services."}),d.jsxs("div",{className:"grid grid-cols-1 gap-x-6 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Modular Multi-Panel Layout"}),d.jsx("p",{children:"A flexible grid allowing users to resize, reorganize, or hide panels based on their specific campaign needs. This lets agents arrange the workspace around each campaign and the information they need during a call."}),d.jsx("p",{children:"Inline editing with undo functionality also supports updating content without leaving the workspace."})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Technical Scalability"}),d.jsx("p",{children:"Implemented via Kendo UI for responsive, stable performance as the interface grows. Contact information loads first, while additional details are retrieved asynchronously in the background. This helps agents continue their workflow without waiting for every piece of data to load."})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Deep Integration"}),d.jsx("p",{children:"Embedded APIs for Email, SMS, and Payment tools directly into the workspace to eliminate the need for external applications. Agents can access communication and payment capabilities alongside customer information, reducing context switching during live calls and keeping key tasks within the Caller UI."})]})]})]})]})})}),d.jsx("section",{"aria-labelledby":"outcomes-heading",className:"w-full px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"07"}),d.jsx("h2",{id:"outcomes-heading",className:"text-4xl leading-snug",children:"Outcomes"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"Reported outcomes include productivity gains, positive user ratings, and reduced cognitive load."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Productivity and User Feedback"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("p",{children:"The redesigned Caller UI became a flagship feature of VanillaSoft, improving workflows by consolidating tools and reducing context-switching. An external study showed users experienced a 30%-100% increase in productivity and completed tasks with fewer errors."}),d.jsx("p",{children:"The responsive, customizable interface allowed users to tailor their workspace, increasing satisfaction and reducing cognitive load. User feedback was positive, with VanillaSoft earning 4.7 stars on Capterra and 4.6 stars on G2."})]}),d.jsxs("div",{children:[d.jsx("p",{children:"To maintain performance during calls, contact information loads first while additional data is retrieved asynchronously in the background."}),d.jsx("p",{children:"Several integrations—including email, SMS, payment processing, and other communication tools—were embedded directly into the workspace, reducing reliance on external applications."})]})]})]})]})})}),d.jsx("section",{className:"w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0",children:d.jsxs("div",{className:"mx-auto max-w-screen-lg",children:[d.jsx("h3",{className:"mb-8",children:"Results & Business Impact"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"mb-2 text-5xl font-medium text-cyan-300/90",children:"30–100%"}),d.jsx("p",{className:"text-lg",children:"Increase in agent productivity across various sales workflows."})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-2 text-5xl font-medium text-cyan-300/90",children:"4.7/5"}),d.jsx("p",{className:"text-lg",children:"Average user rating on Capterra, citing improved ease of use."})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-2 text-5xl text-cyan-300/90",children:"Reduction"}),d.jsx("p",{className:"text-lg",children:"Reduced cognitive load through workspace customization and workflow enhancement."})]})]}),d.jsx("small",{children:"Source: VanillaSoft"})]})}),d.jsx("section",{"aria-label":"Legacy interface comparison",children:d.jsx("figure",{className:"bg-zinc-900/50",children:d.jsxs("div",{className:"mx-auto max-w-screen-xl px-6 py-16 xl:px-0",children:[d.jsx("figcaption",{className:"mb-4 text-xl text-stone-500",children:"Legacy Interface (For Context)"}),d.jsx("img",{src:Y2,alt:"Old VanillaSoft UI"})]})})}),d.jsx("footer",{children:d.jsxs("p",{className:"mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})})]})}const K2="/portfolio/assets/Case-001-Screen-Onboarding-Email-3vOk6BRw.png",Q2="/portfolio/assets/Case-001-Journey-Map-Eu5Dqes6.png",J2="/portfolio/assets/Case-001-Flow-Chart-hcLvhB8r.png",$2="/portfolio/assets/Case-001-User-Activation-Pug4pFg-.png";function ew(){const r=[{src:K2,alt:"Onboarding email with account creation link and essential information."},{src:Q2,alt:"Journey map illustrating self-service account provisioning."},{src:J2,alt:"Authentication flow diagram showing access and validation steps."},{src:$2,alt:"Account activation and password setup screen."}];return d.jsxs("article",{className:"text-white",children:[d.jsx("header",{className:"w-full text-gray-200",children:d.jsxs("div",{className:"mx-auto mb-12 max-w-screen-lg px-6 text-white xl:px-0",children:[d.jsx("h1",{className:"pb-8",children:"CS03: Account Provisioning Automation"}),d.jsxs("p",{className:"mb-16 bg-stone-800/50 text-5xl leading-none font-light text-stone-100 uppercase sm:text-7xl",children:[d.jsx("span",{className:"block w-full font-bold",children:"VPN Enrollment Flow"}),"Self-Service Onboarding & MFA Authentication"]}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"mb-6 min-w-0 lg:flex-1/4",children:d.jsx("dl",{children:d.jsxs("div",{className:"mb-4",children:[d.jsx("dt",{className:"mb-2 block pb-2 text-xs font-semibold tracking-[0.2em] text-stone-300",children:"Contributions"}),d.jsx("dd",{children:d.jsxs("ul",{className:"flex list-none flex-col items-start gap-2 p-0",children:[d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Contextual & User Research"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Workflow & Task Analysis"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"IAM Strategy"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Interaction Design & UI/UX"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Front-End Integration"})]})})]})})}),d.jsxs("div",{className:"flex-3/4",children:[d.jsx("p",{className:"text-3xl font-light",children:"Self-Service VPN Onboarding: Simplifying Partner and Tenant Access Through Streamlined Account Creation and Identity Verification."}),d.jsx("h2",{className:"text-4xl leading-snug text-cyan-300/90",children:"Assignment"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("p",{children:"The objective of this project was to streamline the MyConnect VPN user onboarding process for partners and tenants, enabling self-service account creation while enhancing security with Multi-Factor Authentication (MFA)."}),d.jsx("p",{children:"The project aimed to reduce friction, minimize manual IT involvement, and provide a scalable onboarding process. Additionally, it sought to integrate security best practices without compromising usability, creating a flexible experience for both novice and experienced users."})]}),d.jsx("div",{children:d.jsx("p",{children:"The role encompassed research, workflow analysis, solution architecture, and the implementation of the enrollment flow using Auth0."})})]})]})]})]})}),d.jsx(Xv,{images:r}),d.jsx("section",{"aria-labelledby":"context-heading",className:"w-full px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"01"}),d.jsx("h2",{id:"context-heading",className:"text-4xl leading-snug",children:"Context"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"Simplifying secure remote access through a multi-tenant VPN service that gives businesses greater control over employee connectivity and user management."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Multi-Tenant VPN Service"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsx("p",{children:"Adaptiv Networks is a multi-tenant company providing cloud-managed SD-WAN and secure VPN solutions for businesses."}),d.jsx("p",{children:"Its VPN service ensures secure connectivity for remote employees as part of a larger self-service portal, allowing businesses to manage network users independently while supporting flexibility, scalability, and security."})]})]})]})})}),d.jsx("section",{"aria-labelledby":"observation-heading",className:"w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"02"}),d.jsx("h2",{id:"observation-heading",className:"text-4xl leading-snug",children:"Observation"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"The manual account creation process was time-consuming and resource-intensive, limiting partner autonomy, increasing IT workload, and creating bottlenecks in VPN user onboarding."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Manual Account Creation"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("p",{children:"The existing MyConnect user creation process was manual, which was sufficient for initial testing but became time-consuming and resource-intensive as adoption grew."}),d.jsx("p",{children:"Partners and tenants were unable to independently onboard users, limiting enthusiasm and adoption. The lack of self-service created bottlenecks for IT teams and hindered operational efficiency."})]}),d.jsx("p",{children:"Additionally, Multi-Factor Authentication (MFA) was critical for meeting security and compliance standards but was not yet implemented. The current enrollment process risked being perceived as incomplete or insecure by security-conscious customers."})]})]})]})})}),d.jsx("section",{"aria-labelledby":"research-heading",className:"w-full px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"03"}),d.jsx("h2",{id:"research-heading",className:"text-4xl leading-snug",children:"Research"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"The research focused on understanding the enrollment journey, evaluating authentication requirements, and identifying opportunities to simplify account creation without compromising security."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Secure Enrollment Workflow"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsx("p",{children:"We mapped key user flows, including enrollment, login, password reset, and MFA setup, to identify friction points. Auth0 was selected as the Identity and Access Management (IAM) platform."}),d.jsx("p",{children:"I conducted a deep dive into its documentation to understand its framework, evaluate potential challenges, and identify opportunities to streamline the user experience while supporting secure authentication workflows."})]})]})]})})}),d.jsx("section",{"aria-labelledby":"hypothesis-heading",className:"w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"04"}),d.jsx("h2",{id:"hypothesis-heading",className:"text-4xl leading-snug",children:"Hypothesis"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"A self-service enrollment experience built around Auth0 could reduce manual onboarding effort while providing a more consistent and secure authentication process. "}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Self-Service Authentication"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsxs("p",{className:"",children:[d.jsx("strong",{children:"Streamlined Enrollment with Auth0:"})," ","Leveraging Auth0’s functionality would simplify the enrollment process, reduce friction, and improve user satisfaction."]}),d.jsxs("p",{className:"",children:[d.jsx("strong",{children:"Clear Exit Paths and Issue Resolution:"})," ","Anticipating and resolving enrollment issues early would prevent users from getting stuck, ensuring smoother completion."]}),d.jsxs("p",{className:"",children:[d.jsx("strong",{children:"Optional MFA Implementation:"})," Offering MFA as a configurable feature would meet varying security requirements, providing both flexibility and enhanced protection."]}),d.jsxs("p",{className:"",children:[d.jsx("strong",{children:"Recognized risk:"})," MFA introduces additional steps that may frustrate some users."]})]})]})]})})}),d.jsx("section",{"aria-labelledby":"solution-heading",className:"w-full px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"05"}),d.jsx("h2",{id:"solution-heading",className:"text-4xl leading-snug",children:"Solution"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"The solution introduced a self-service enrollment flow integrated with Auth0, connecting account creation, credential delivery, password setup, and MFA enrollment into a guided experience."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Self-Service Account Creation"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsx("p",{children:"Partners and tenants can create a new MyConnect user by submitting the user’s first name, last name, and email. Once the license is deployed, users receive a one-time password via email—eliminating insecure credential delivery."}),d.jsx("p",{children:"Users click a link to log into the self-service portal, create a secure password, and, if MFA is enabled, complete the additional authentication steps. MFA options include One-Time Code (app-based), Text (SMS), and Email, offering flexibility and accommodating varying security preferences."})]})]})]})})}),d.jsx("section",{"aria-labelledby":"features-heading",className:"w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"06"}),d.jsx("h2",{id:"features-heading",className:"text-4xl leading-snug",children:"Features"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"The implementation brought together account provisioning, automated credential delivery, and configurable authentication options to support a more autonomous and scalable onboarding experience."}),d.jsxs("div",{className:"grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Simplified Self-Service Enrollment"}),d.jsx("p",{children:"Enables partners and tenants to onboard users independently, reducing IT tickets."})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Flexible MFA Options"}),d.jsx("p",{children:"Offers SMS, Email, and Authenticator App options to balance security and user convenience."})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Secure Credential Delivery"}),d.jsx("p",{children:"Automated one-time password (OTP) delivery via email to eliminate insecure manual credential sharing."})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Auth0 Integration"}),d.jsx("p",{children:"Streamlined IAM workflows and scalable identity management."})]})]})]})]})})}),d.jsx("section",{"aria-labelledby":"outcomes-heading",className:"w-full px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:"07"}),d.jsx("h2",{id:"outcomes-heading",className:"text-4xl leading-snug",children:"Outcomes"})]})}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"Initial implementation and user testing provided insight into the usability of different authentication methods, the effectiveness of the enrollment experience, and opportunities to further refine the balance between security and convenience."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"MFA Usability and Security"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsx("p",{children:"Initial user testing provided valuable insights into the MFA implementation. App-based one-time codes were the most frustrating due to device dependency and QR code setup, occasionally leading to lockouts."}),d.jsx("p",{children:"SMS-based authentication was smooth and intuitive, with minimal complaints, while email verification was convenient and easy to use, though slightly less secure than SMS."})]}),d.jsxs("div",{children:[d.jsx("p",{children:"These findings highlighted important trade-offs between security and usability."}),d.jsx("p",{children:"Default Auth0 settings did not fully address organizational security requirements, suggesting that future improvements should include penetration testing and a more tailored MFA strategy to optimize both security and user experience."})]})]})]})]})})}),d.jsx("div",{className:"w-full px-6 xl:px-0 py-16 bg-stone-800/20 border-stone-800",children:d.jsxs("div",{className:"max-w-screen-lg mx-auto",children:[d.jsx("h3",{className:"mb-8",children:"Results & Business Impact"}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{children:[d.jsx("h4",{className:"text-cyan-300/90",children:"Seamless Onboarding"}),d.jsx("p",{children:"The new self-service enrollment flow reduces reliance on IT teams, removing manual bottlenecks and enabling faster account creation for partners and tenants."})]}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-cyan-300/90",children:"Flexible & Secure MFA"}),d.jsx("p",{children:"Optional MFA provides flexible security and compliance adherence."})]}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-cyan-300/90",children:"Scalable Architecture"}),d.jsxs("p",{children:["The Auth0-based solution provides a foundation that can grow with user adoption, supporting additional tenants and partners without major workflow redesigns."," "]})]}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-cyan-300/90",children:"Improved User Confidence"}),d.jsx("p",{children:"By standardizing credential delivery and providing clear, guided enrollment steps, users experience fewer errors and confusion during onboarding."})]})]})]})}),d.jsxs("p",{className:" mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})]})}const tw="/portfolio/assets/Case-001-Main-Bb5-afll.png",nw="/portfolio/assets/Case-001-Wireframe-A-B5WwIc_s.png",iw="/portfolio/assets/Case-001-Wireframe-B-CDqVtw2P.png",aw="/portfolio/assets/Case-001-Wireframe-C-CGX-9ymp.png",sw="/portfolio/assets/Case-001-Wireframe-D-CzbuQvZ3.png",rw=[{src:tw,alt:"Dynamic prioritization query for filtering and triaging contacts"}],ow=[{src:nw,alt:"Exploded view of the query builder components"},{src:iw,alt:"Dynamic prioritization wireframe A"},{src:aw,alt:"Dynamic prioritization wireframe B"},{src:sw,alt:"Dynamic prioritization wireframe C"}];function Ts({id:r,number:e,title:i}){return d.jsx("div",{className:"flex-1/4",children:d.jsxs("div",{className:"border-l border-cyan-300/50 pl-4",children:[d.jsx("span",{className:"pt-6 mb-2 block text-xs font-semibold tracking-[0.2em] text-stone-300",children:e}),d.jsx("h2",{id:r,className:"text-4xl leading-snug",children:i})]})})}function lw(){return d.jsxs("article",{className:"text-white",children:[d.jsx("header",{className:"w-full text-gray-200",children:d.jsxs("div",{className:"mx-auto mb-12 max-w-screen-lg px-6 text-white xl:px-0",children:[d.jsx("h1",{className:"pb-8",children:"PF01 : Intellective Routing"}),d.jsxs("p",{className:"mb-16 bg-stone-800/50 text-5xl leading-none font-light text-stone-100 uppercase sm:text-7xl",children:[d.jsx("span",{className:"block w-full font-bold",children:"Dynamic Prioritization"}),"Flexible Query-Building for Sales Workflows"]}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"mb-6 min-w-0 lg:flex-1/4",children:d.jsx("dl",{className:"grid grid-cols-2 gap-4 lg:grid-cols-1",children:d.jsxs("div",{className:"mb-4",children:[d.jsx("dt",{className:"mb-2 block pb-2 text-xs font-semibold tracking-[0.2em] text-stone-300",children:"Contributions"}),d.jsx("dd",{children:d.jsxs("ul",{className:"flex list-none flex-col items-start gap-2 p-0",children:[d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Contextual & User Research"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Workflow & Task Analysis"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Technical Research"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Feasibility Study"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Feature Architecture"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Implementation Guidance"})]})})]})})}),d.jsxs("div",{className:"flex-3/4",children:[d.jsx("p",{className:"text-3xl font-light",children:"The objective of this project was to design a flexible contact prioritization system within VanillaSoft that would allow sales teams to focus on the most relevant leads at the optimal time."}),d.jsx("h2",{className:"text-4xl leading-snug text-cyan-300/90",children:"Assignment"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsx("p",{children:"The platform needed to support multiple levels of prioritization, such as P1 and P2, as well as more granular sub-levels like P1a or P1b. In addition to basic prioritization, users required the ability to define custom rules using different data points, including purchase history, engagement levels, and other behavioral indicators."}),d.jsxs("p",{children:[d.jsx("strong",{children:"My role"})," was to research customer needs, evaluate technical constraints, and design an interface capable of managing complex prioritization logic without overwhelming users. The goal was to create a system that remained flexible for advanced use cases while still being approachable for everyday users."]})]})]})]})]})}),d.jsx("section",{"aria-label":"Project interface screenshots",children:rw.map((r,e)=>d.jsx("div",{className:`text-gray-200 ${e%2===0?"bg-zinc-900/50":""}`,children:d.jsx("figure",{className:"mx-auto max-w-screen-xl px-6 xl:px-0",children:d.jsx("img",{src:r.src,className:"border border-zinc-700 shadow-2xl",alt:r.alt})})},r.src))}),d.jsx("section",{"aria-labelledby":"overview-heading",className:"w-full border-stone-800 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx(Ts,{id:"overview-heading",number:"01",title:"Overview"}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"VanillaSoft is a cloud-based sales management platform that integrates CRM, lead management, and telemarketing tools to support high-volume sales workflows."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"A Queue-Based Sales Platform"}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/2",children:d.jsx("p",{children:"A key differentiator of the platform is its queue-based model, which routes agents to the next best contact using available data points rather than relying on static contact lists. This approach improves operational efficiency by ensuring agents engage with the most relevant leads at the appropriate moment."})}),d.jsx("div",{className:"flex-1/2",children:d.jsx("p",{children:"Introducing dynamic prioritization required extending this queue logic so that organizations could better control how leads were ranked and distributed to agents based on their own business strategies."})})]})]})]})})}),d.jsx("section",{"aria-labelledby":"observation-heading",className:"w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx(Ts,{id:"observation-heading",number:"02",title:"Observation"}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"Several customers requested the ability to prioritize contacts using multiple levels of importance. Their goal was to focus sales efforts on leads that were more likely to convert while still maintaining visibility over the broader pipeline."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"The Prioritization Challenge"}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"flex-1/2",children:d.jsx("p",{children:"At the time, the platform lacked the ability to support this type of dynamic prioritization. Contacts were processed through the queue, but users could not define layered rules based on different attributes or conditions."})}),d.jsx("div",{className:"flex-1/2",children:d.jsx("p",{children:"The challenge was not only technical but also conceptual. Customers needed the flexibility to combine many different data points and conditions, sometimes creating complex scenarios where contacts should be prioritized under certain circumstances and deprioritized under others. At the same time, the interface needed to remain understandable and manageable for sales teams who were not necessarily technical users."})})]})]})]})})}),d.jsx("section",{"aria-labelledby":"research-heading",className:"w-full border-stone-800 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx(Ts,{id:"research-heading",number:"03",title:"Research"}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"To understand the scope of the problem, we reviewed customer requests and documented a wide range of prioritization scenarios."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Designing for Flexible Rules"}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsxs("div",{className:"flex-1/2",children:[d.jsx("p",{children:"These examples revealed that organizations often wanted to combine multiple conditions when determining which leads should be prioritized. In some cases, contacts might need to be prioritized if they met several criteria but deprioritized if another condition was present."}),d.jsx("p",{children:"Because the number of possible combinations was large, we concluded that the safest approach would be to design a framework capable of supporting a wide range of use cases from the start. Restricting the system too early could lead to limitations and future rework as new customer requirements emerged."})]}),d.jsx("div",{className:"flex-1/2",children:d.jsx("p",{children:"Another important aspect of the research focused on the user interface. The feature needed to present complex rule logic in a way that remained accessible to users while still offering the flexibility required by more advanced workflows."})})]})]})]})})}),d.jsx("section",{"aria-labelledby":"hypothesis-heading",className:"w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx(Ts,{id:"hypothesis-heading",number:"04",title:"Hypothesis"}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"We hypothesized that introducing a flexible prioritization system would significantly improve how sales teams manage and engage with leads. By allowing users to define multiple priority levels and apply rules based on relevant data points, agents would be guided toward the most promising opportunities at the right time."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"A More Focused Sales Workflow"}),d.jsx("p",{children:"This capability was expected to improve operational efficiency and potentially increase conversion rates by enabling more targeted sales strategies. At the same time, we recognized that a feature of this complexity could introduce usability challenges. Ensuring that the interface remained intuitive and navigable was therefore critical to preventing cognitive overload and encouraging adoption."})]})]})})}),d.jsx("section",{"aria-labelledby":"solution-heading",className:"w-full border-stone-800 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx(Ts,{id:"solution-heading",number:"05",title:"Solution"}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"To support dynamic prioritization, a query-building framework was introduced that allowed users to define and manage complex prioritization rules using different types of data."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"Flexible Rule Configuration"}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsxs("div",{className:"flex-1/2",children:[d.jsx("p",{children:"The system supports multiple prioritization criteria and enables users to combine conditions using logical operators such as AND and OR. This makes it possible to create layered rules that reflect the realities of sales workflows, where decisions are often based on several data points rather than a single attribute."}),d.jsx("p",{children:"Users can also define priority levels such as P1 or P2 and extend them with sub-levels when additional granularity is required. This allows organizations to structure their lead prioritization in a way that reflects their own business processes."})]}),d.jsx("div",{className:"flex-1/2",children:d.jsx("p",{children:"A significant focus was placed on keeping the interface approachable despite the flexibility of the system. Visual guidance, tooltips, and a structured workflow help users build prioritization rules step by step, reducing the risk of confusion while still supporting advanced configurations."})})]})]})]})})}),d.jsx("section",{"aria-labelledby":"features-heading",className:"w-full border-stone-800 bg-stone-800/20 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx(Ts,{id:"features-heading",number:"06",title:"Features"}),d.jsx("div",{className:"flex-3/4 pt-5.5",children:d.jsxs("div",{className:"grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2",children:[d.jsxs("div",{className:"border-l border-stone-700 pl-5",children:[d.jsx("h3",{className:"mb-1 text-2xl text-cyan-300/90",children:"Multi-Criteria Prioritization"}),d.jsx("p",{children:"Users can define rules based on numerous data attributes such as engagement, behavior, and historical performance."})]}),d.jsxs("div",{className:"border-l border-stone-700 pl-5",children:[d.jsx("h3",{className:"mb-1 text-2xl text-cyan-300/90",children:"Flexible Rule Logic"}),d.jsx("p",{children:"Support for logical operators and layered conditions allows the construction of nuanced prioritization strategies without coding."})]}),d.jsxs("div",{className:"border-l border-stone-700 pl-5",children:[d.jsx("h3",{className:"mb-1 text-2xl text-cyan-300/90",children:"Custom Priority Levels"}),d.jsx("p",{children:"Priority groups and sub-levels give organizations the flexibility to represent their sales logic structurally."})]}),d.jsxs("div",{className:"border-l border-stone-700 pl-5",children:[d.jsx("h3",{className:"mb-1 text-2xl text-cyan-300/90",children:"Guided Rule Builder UI"}),d.jsx("p",{children:"Visual cues and structured workflows make rule building understandable and accessible, reducing cognitive overload."})]})]})})]})})}),d.jsx("section",{"aria-labelledby":"outcomes-heading",className:"w-full border-stone-800 px-6 py-12 xl:px-0",children:d.jsx("div",{className:"mx-auto max-w-screen-lg",children:d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx(Ts,{id:"outcomes-heading",number:"07",title:"Outcomes"}),d.jsxs("div",{className:"flex-3/4 pt-5.5",children:[d.jsx("p",{className:"text-2xl font-light",children:"The prioritization framework introduced a new level of flexibility in how sales teams manage their lead queues. Instead of relying on static prioritization rules, organizations can now adapt their strategies based on the data available in their CRM."}),d.jsx("h3",{className:"text-2xl text-cyan-300/90",children:"More Flexible Lead Management"}),d.jsx("p",{children:"Initial feedback indicated that users appreciated the increased visibility into prioritization logic and the ability to refine how leads were distributed to agents. The system also reduced the need for manual lead management, allowing teams to focus more directly on sales activities."})]})]})})}),d.jsx("section",{"aria-labelledby":"results-heading",className:"w-full bg-stone-800/20 py-20 border-stone-800",children:d.jsxs("div",{className:"mx-auto max-w-screen-lg px-6 xl:px-0",children:[d.jsx("h3",{id:"results-heading",className:"mb-8",children:"Results & Business Impact"}),d.jsxs("div",{className:"grid grid-cols-1 gap-12 md:grid-cols-4",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"mb-2 text-6xl text-cyan-300/90",children:"+20%"}),d.jsx("p",{children:"Increase in dials"})]}),d.jsxs("div",{children:[d.jsx("h2",{className:"mb-2 text-6xl text-cyan-300/90",children:"+22%"}),d.jsx("p",{children:"Increase in conversions"})]}),d.jsxs("div",{children:[d.jsx("h2",{className:"mb-2 text-6xl text-cyan-300/90",children:"-40%"}),d.jsx("p",{children:"Decrease in negative dispositions"})]}),d.jsxs("div",{children:[d.jsx("h2",{className:"mb-2 text-6xl text-cyan-300/90",children:"+28%"}),d.jsx("p",{children:"Increase in sales"})]})]}),d.jsx("small",{children:"Source: VanillaSoft"})]})}),d.jsx("section",{"aria-label":"Project interface screenshots",children:ow.map((r,e)=>d.jsx("div",{className:`text-gray-200 ${e%2===0?"bg-zinc-900/50":""}`,children:d.jsx("figure",{className:"mx-auto my-16 max-w-screen-xl px-6 xl:px-0",children:d.jsx("img",{src:r.src,className:"border border-zinc-700 shadow-2xl",alt:r.alt})})},r.src))}),d.jsx("footer",{children:d.jsxs("p",{className:"mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})})]})}const cw="/portfolio/assets/AN-MyConnect-01-0_0oPeOX.png",uw="/portfolio/assets/AN-MyConnect-02-Eg7xtiMR.png",fw="/portfolio/assets/AN-MyConnect-03-CbEAz5qL.png",dw="/portfolio/assets/AN-MyConnect-04-BDLs-YlV.png",hw=[{src:cw,alt:"My Connect client interface"}],pw=[{src:uw,alt:"My Connect interface"},{src:fw,alt:"My Connect interface"},{src:dw,alt:"My Connect interface"}];function mw(){return d.jsxs("article",{className:"text-white",children:[d.jsx("header",{className:"w-full text-gray-200",children:d.jsxs("div",{className:"mx-auto mb-12 max-w-screen-lg px-6 text-white xl:px-0",children:[d.jsx("h1",{className:"pb-8",children:"PF02 : My Connect - Adaptiv Networks"}),d.jsxs("p",{className:"mb-16 bg-stone-800/50 text-5xl leading-none font-light text-stone-100 uppercase sm:text-7xl",children:[d.jsx("span",{className:"block w-full font-bold",children:"Hybrid Workforce"}),"SD-WAN Remote Access for Distributed Teams"]}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"mb-6 min-w-0 lg:flex-1/4",children:d.jsx("dl",{className:"grid grid-cols-2 gap-4 lg:grid-cols-1",children:d.jsxs("div",{className:"mb-4",children:[d.jsx("dt",{className:"mb-2 block pb-2 text-xs font-semibold tracking-[0.2em] text-stone-300",children:"Contributions"}),d.jsx("dd",{children:d.jsxs("ul",{className:"flex list-none flex-col items-start gap-2 p-0",children:[d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Visual Design"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"UI/UX Design"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Authentication"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Observability"})]})})]})})}),d.jsxs("div",{className:"flex-3/4",children:[d.jsx("p",{className:"text-3xl font-light",children:"Visual redesign of the My Connect VPN client for Adaptiv Networks, giving distributed teams secure SD-WAN remote access on mobile and desktop, with passwordless sign-in and live connection visibility."}),d.jsx("h2",{className:"text-4xl leading-snug text-cyan-300/90",children:"Assignment"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsx("p",{children:"The client was redesigned to make secure remote access clearer and easier to use across mobile and desktop. Users sign in with a work email and a one-time passcode, then land on a home screen showing connection status, live upload and download traffic against their licensed bandwidth, and their known networks (LTE, home, work, public Wi-Fi)."}),d.jsx("p",{children:"Each network can be enabled and flagged as a backup, so traffic can fail over when a connection degrades. A connection log gives users and support a readable record of sessions, authentication attempts, and failovers."})]})]})]})]})}),d.jsxs("section",{"aria-label":"Project interface screenshots",children:[hw.map((r,e)=>d.jsx("div",{className:`text-gray-200 ${e%2===0?"bg-zinc-900/50":""}`,children:d.jsx("figure",{className:"mx-auto max-w-screen-xl px-6 xl:px-0",children:d.jsx("img",{src:r.src,className:"border border-zinc-700 shadow-2xl",alt:r.alt})})},r.src)),pw.map((r,e)=>d.jsx("div",{className:`text-gray-200 ${e%2===0?"bg-zinc-900/50":""}`,children:d.jsx("figure",{className:"mx-auto my-16 max-w-screen-xl px-6 xl:px-0",children:d.jsx("img",{src:r.src,className:"border border-zinc-700 shadow-2xl",alt:r.alt})})},r.src))]}),d.jsx("footer",{children:d.jsxs("p",{className:"mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})})]})}const gw="/portfolio/assets/DAT-Step%2001-BJNi5Ocy.png",xw="/portfolio/assets/DAT-Step%2002-Q4RaQXnV.png",vw="/portfolio/assets/DAT-Step%2003-CaI53oNd.png",_w=[{src:gw,alt:"Debt Assessment Tool, step 1"}],yw=[{src:xw,alt:"Debt Assessment Tool, step 2"},{src:vw,alt:"Debt Assessment Tool, step 3"}];function Sw(){return d.jsxs("article",{className:"text-white",children:[d.jsx("header",{className:"w-full text-gray-200",children:d.jsxs("div",{className:"mx-auto mb-12 max-w-screen-lg px-6 text-white xl:px-0",children:[d.jsx("h1",{className:"pb-8",children:"PF03 : MD Physicians"}),d.jsxs("p",{className:"mb-16 bg-stone-800/50 text-5xl leading-none font-light text-stone-100 uppercase sm:text-7xl",children:[d.jsx("span",{className:"block w-full font-bold",children:"Debt Assessment Tool"}),"Financial Planning for Medical Students"]}),d.jsxs("div",{className:"gap-6 lg:flex",children:[d.jsx("div",{className:"mb-6 min-w-0 lg:flex-1/4",children:d.jsx("dl",{className:"grid grid-cols-2 gap-4 lg:grid-cols-1",children:d.jsxs("div",{className:"mb-4",children:[d.jsx("dt",{className:"mb-2 block pb-2 text-xs font-semibold tracking-[0.2em] text-stone-300",children:"Contributions"}),d.jsx("dd",{children:d.jsxs("ul",{className:"flex list-none flex-col items-start gap-2 p-0",children:[d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Visual Design"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"UX Strategy"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Interaction Logic"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Marketing"}),d.jsx("li",{className:"rounded-md bg-purple-900 px-2 py-0.5 text-sm font-semibold text-stone-100",children:"Lead Generation"})]})})]})})}),d.jsxs("div",{className:"flex-3/4",children:[d.jsx("p",{className:"text-3xl font-light",children:"Design and front-end development of the Debt Assessment Tool for MD Physician Services, a three-step online calculator that gives medical students and residents a snapshot of their finances."}),d.jsx("h2",{className:"text-4xl leading-snug text-cyan-300/90",children:"Assignment"}),d.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[d.jsx("p",{children:"Assets, liabilities, income sources, and expenses are entered in simple line-item forms with running totals, and the results build into a single debt projection. Users can then share it with an MD advisor or save a copy, giving them a starting point for financial planning through medical school, residency, and into practice."}),d.jsx("p",{children:"I built the interface and tested it end to end, including the calculations that link monthly and annual fields and the running totals across each step."})]})]})]})]})}),d.jsxs("section",{"aria-label":"Project interface screenshots",children:[_w.map((r,e)=>d.jsx("div",{className:`text-gray-200 ${e%2===0?"bg-zinc-900/50":""}`,children:d.jsx("figure",{className:"mx-auto max-w-screen-xl px-6 xl:px-0",children:d.jsx("img",{src:r.src,className:"border border-zinc-700 shadow-2xl",alt:r.alt})})},r.src)),yw.map((r,e)=>d.jsx("div",{className:`text-gray-200 ${e%2===0?"bg-zinc-900/50":""}`,children:d.jsx("figure",{className:"mx-auto my-16 max-w-screen-xl px-6 xl:px-0",children:d.jsx("img",{src:r.src,className:"border border-zinc-700 shadow-2xl",alt:r.alt})})},r.src))]}),d.jsx("footer",{children:d.jsxs("p",{className:"mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})})]})}function bw(){return d.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-top text-stone-100 mt-12 px-6 ",children:[d.jsx("h1",{className:"text-purple-400/80 md:text-6xl mb-4 text-center",children:"Coming Soon — Resume"}),d.jsx("p",{className:"text-center text-stone-200 mb-8",children:"Exciting things are on the way. Stay tuned!"})]})}function Mw(){return d.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-top mt-12 px-6 ",children:[d.jsx("h1",{className:"text-5xl md:text-6xl font-bold mb-4 text-center",children:"¯\\_(ツ)_/¯"}),d.jsx("h1",{className:"text-3xl md:text-4xl font-bold mt-4 mb-4 text-center",children:"Sorry, this page will be updated soon"}),d.jsxs("p",{className:"text-stone-200 text-sm mt-8 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})]})}function Ew(){const[r,e]=De.useState(window.innerWidth>=768),[i,s]=De.useState(window.innerWidth<768),l=De.useRef(null),c=Is();ob(l);const f=()=>e(m=>!m);return De.useEffect(()=>{const m=()=>{const g=window.innerWidth<768;s(g),e(!g)};return window.addEventListener("resize",m),m(),()=>window.removeEventListener("resize",m)},[]),De.useEffect(()=>{i&&e(!1)},[c.pathname,i]),d.jsxs(d.Fragment,{children:[d.jsx(y2,{className:"bg-stone-950"}),d.jsxs("div",{className:"flex flex-col h-screen w-screen",children:[d.jsx("a",{href:"#main-content",onClick:m=>{m.preventDefault();const g=l.current;g==null||g.focus({preventScroll:!0}),g==null||g.scrollTo(0,0)},className:"fixed left-4 top-0 z-[100] -translate-y-full rounded-b-lg bg-cyan-300 px-4 py-2 font-semibold text-stone-950 transition-transform focus:translate-y-0",children:"Skip to main content"}),d.jsx(S2,{toggleMenu:f,menuOpen:r}),d.jsxs("div",{className:"flex flex-1 overflow-hidden relative",children:[d.jsx("aside",{"aria-hidden":i&&!r,inert:i&&!r,className:`w-78 shrink-0 h-full overflow-x-auto overflow-y-auto flex flex-col transition-[transform,background-color] duration-300 ease-in-out
              ${i?"absolute":"relative"} top-0 left-0 z-40 ${i&&!r?"-translate-x-full":"translate-x-0"} ${i&&r?"bg-stone-950/90":""}`,children:d.jsx(b2,{})}),d.jsx("div",{"aria-hidden":!i||!r,inert:!i||!r,onClick:()=>e(!1),className:`fixed inset-0 z-30 w-full transition-[opacity,backdrop-filter] duration-300 ease-in-out ${i&&r?"opacity-100 backdrop-blur-xs":"pointer-events-none opacity-0 backdrop-blur-none"}`,style:{backgroundColor:"rgba(0, 0, 0, 0.6)"}}),d.jsx("main",{ref:l,id:"main-content",tabIndex:-1,className:"flex-1 overflow-y-auto overscroll-contain ml-0 py-16",children:d.jsxs(KS,{children:[d.jsx(zi,{path:"/",element:d.jsx(L2,{})}),d.jsx(zi,{path:"/case01",element:d.jsx(k2,{})}),d.jsx(zi,{path:"/case02",element:d.jsx(Z2,{})}),d.jsx(zi,{path:"/case03",element:d.jsx(ew,{})}),d.jsx(zi,{path:"/portfolio01",element:d.jsx(lw,{})}),d.jsx(zi,{path:"/portfolio02",element:d.jsx(mw,{})}),d.jsx(zi,{path:"/portfolio03",element:d.jsx(Sw,{})}),d.jsx(zi,{path:"/resume",element:d.jsx(bw,{})}),d.jsx(zi,{path:"/contact",element:d.jsx(Mw,{})})]})})]})]})]})}aS.createRoot(document.getElementById("root")).render(d.jsx(Zx.StrictMode,{children:d.jsx(ib,{children:d.jsx(Ew,{})})}));
