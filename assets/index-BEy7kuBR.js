(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var _d={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function ly(){if(V0)return Ho;V0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=e,Ho.jsx=i,Ho.jsxs=i,Ho}var k0;function cy(){return k0||(k0=1,_d.exports=ly()),_d.exports}var M=cy(),xd={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function uy(){if(j0)return ut;j0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function _(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function y(P,K,pe){this.props=P,this.context=K,this.refs=C,this.updater=pe||b}y.prototype.isReactComponent={},y.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function S(){}S.prototype=y.prototype;function D(P,K,pe){this.props=P,this.context=K,this.refs=C,this.updater=pe||b}var U=D.prototype=new S;U.constructor=D,T(U,y.prototype),U.isPureReactComponent=!0;var L=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function k(P,K,pe,Se,Ne,Ye){return pe=Ye.ref,{$$typeof:r,type:P,key:K,ref:pe!==void 0?pe:null,props:Ye}}function A(P,K){return k(P.type,K,void 0,void 0,void 0,P.props)}function O(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function he(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(pe){return K[pe]})}var V=/\/+/g;function te(P,K){return typeof P=="object"&&P!==null&&P.key!=null?he(""+P.key):K.toString(36)}function se(){}function ue(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(se,se):(P.status="pending",P.then(function(K){P.status==="pending"&&(P.status="fulfilled",P.value=K)},function(K){P.status==="pending"&&(P.status="rejected",P.reason=K)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function Q(P,K,pe,Se,Ne){var Ye=typeof P;(Ye==="undefined"||Ye==="boolean")&&(P=null);var ee=!1;if(P===null)ee=!0;else switch(Ye){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(P.$$typeof){case r:case e:ee=!0;break;case g:return ee=P._init,Q(ee(P._payload),K,pe,Se,Ne)}}if(ee)return Ne=Ne(P),ee=Se===""?"."+te(P,0):Se,L(Ne)?(pe="",ee!=null&&(pe=ee.replace(V,"$&/")+"/"),Q(Ne,K,pe,"",function(Je){return Je})):Ne!=null&&(O(Ne)&&(Ne=A(Ne,pe+(Ne.key==null||P&&P.key===Ne.key?"":(""+Ne.key).replace(V,"$&/")+"/")+ee)),K.push(Ne)),1;ee=0;var be=Se===""?".":Se+":";if(L(P))for(var ye=0;ye<P.length;ye++)Se=P[ye],Ye=be+te(Se,ye),ee+=Q(Se,K,pe,Ye,Ne);else if(ye=_(P),typeof ye=="function")for(P=ye.call(P),ye=0;!(Se=P.next()).done;)Se=Se.value,Ye=be+te(Se,ye++),ee+=Q(Se,K,pe,Ye,Ne);else if(Ye==="object"){if(typeof P.then=="function")return Q(ue(P),K,pe,Se,Ne);throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ee}function I(P,K,pe){if(P==null)return P;var Se=[],Ne=0;return Q(P,Se,"","",function(Ye){return K.call(pe,Ye,Ne++)}),Se}function H(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(pe){(P._status===0||P._status===-1)&&(P._status=1,P._result=pe)},function(pe){(P._status===0||P._status===-1)&&(P._status=2,P._result=pe)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var de=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function ve(){}return ut.Children={map:I,forEach:function(P,K,pe){I(P,function(){K.apply(this,arguments)},pe)},count:function(P){var K=0;return I(P,function(){K++}),K},toArray:function(P){return I(P,function(K){return K})||[]},only:function(P){if(!O(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},ut.Component=y,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=D,ut.StrictMode=s,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ut.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},ut.cache=function(P){return function(){return P.apply(null,arguments)}},ut.cloneElement=function(P,K,pe){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Se=T({},P.props),Ne=P.key,Ye=void 0;if(K!=null)for(ee in K.ref!==void 0&&(Ye=void 0),K.key!==void 0&&(Ne=""+K.key),K)!G.call(K,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&K.ref===void 0||(Se[ee]=K[ee]);var ee=arguments.length-2;if(ee===1)Se.children=pe;else if(1<ee){for(var be=Array(ee),ye=0;ye<ee;ye++)be[ye]=arguments[ye+2];Se.children=be}return k(P.type,Ne,void 0,void 0,Ye,Se)},ut.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ut.createElement=function(P,K,pe){var Se,Ne={},Ye=null;if(K!=null)for(Se in K.key!==void 0&&(Ye=""+K.key),K)G.call(K,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Ne[Se]=K[Se]);var ee=arguments.length-2;if(ee===1)Ne.children=pe;else if(1<ee){for(var be=Array(ee),ye=0;ye<ee;ye++)be[ye]=arguments[ye+2];Ne.children=be}if(P&&P.defaultProps)for(Se in ee=P.defaultProps,ee)Ne[Se]===void 0&&(Ne[Se]=ee[Se]);return k(P,Ye,void 0,void 0,null,Ne)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(P){return{$$typeof:p,render:P}},ut.isValidElement=O,ut.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:H}},ut.memo=function(P,K){return{$$typeof:h,type:P,compare:K===void 0?null:K}},ut.startTransition=function(P){var K=B.T,pe={};B.T=pe;try{var Se=P(),Ne=B.S;Ne!==null&&Ne(pe,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(ve,de)}catch(Ye){de(Ye)}finally{B.T=K}},ut.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ut.use=function(P){return B.H.use(P)},ut.useActionState=function(P,K,pe){return B.H.useActionState(P,K,pe)},ut.useCallback=function(P,K){return B.H.useCallback(P,K)},ut.useContext=function(P){return B.H.useContext(P)},ut.useDebugValue=function(){},ut.useDeferredValue=function(P,K){return B.H.useDeferredValue(P,K)},ut.useEffect=function(P,K,pe){var Se=B.H;if(typeof pe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Se.useEffect(P,K)},ut.useId=function(){return B.H.useId()},ut.useImperativeHandle=function(P,K,pe){return B.H.useImperativeHandle(P,K,pe)},ut.useInsertionEffect=function(P,K){return B.H.useInsertionEffect(P,K)},ut.useLayoutEffect=function(P,K){return B.H.useLayoutEffect(P,K)},ut.useMemo=function(P,K){return B.H.useMemo(P,K)},ut.useOptimistic=function(P,K){return B.H.useOptimistic(P,K)},ut.useReducer=function(P,K,pe){return B.H.useReducer(P,K,pe)},ut.useRef=function(P){return B.H.useRef(P)},ut.useState=function(P){return B.H.useState(P)},ut.useSyncExternalStore=function(P,K,pe){return B.H.useSyncExternalStore(P,K,pe)},ut.useTransition=function(){return B.H.useTransition()},ut.version="19.1.0",ut}var X0;function np(){return X0||(X0=1,xd.exports=uy()),xd.exports}var me=np(),Sd={exports:{}},Go={},yd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function fy(){return W0||(W0=1,function(r){function e(I,H){var de=I.length;I.push(H);e:for(;0<de;){var ve=de-1>>>1,P=I[ve];if(0<l(P,H))I[ve]=H,I[de]=P,de=ve;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var H=I[0],de=I.pop();if(de!==H){I[0]=de;e:for(var ve=0,P=I.length,K=P>>>1;ve<K;){var pe=2*(ve+1)-1,Se=I[pe],Ne=pe+1,Ye=I[Ne];if(0>l(Se,de))Ne<P&&0>l(Ye,Se)?(I[ve]=Ye,I[Ne]=de,ve=Ne):(I[ve]=Se,I[pe]=de,ve=pe);else if(Ne<P&&0>l(Ye,de))I[ve]=Ye,I[Ne]=de,ve=Ne;else break e}}return H}function l(I,H){var de=I.sortIndex-H.sortIndex;return de!==0?de:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],g=1,x=null,_=3,b=!1,T=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var H=i(h);H!==null;){if(H.callback===null)s(h);else if(H.startTime<=I)s(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function B(I){if(C=!1,L(I),!T)if(i(m)!==null)T=!0,G||(G=!0,te());else{var H=i(h);H!==null&&Q(B,H.startTime-I)}}var G=!1,k=-1,A=5,O=-1;function he(){return y?!0:!(r.unstable_now()-O<A)}function V(){if(y=!1,G){var I=r.unstable_now();O=I;var H=!0;try{e:{T=!1,C&&(C=!1,D(k),k=-1),b=!0;var de=_;try{t:{for(L(I),x=i(m);x!==null&&!(x.expirationTime>I&&he());){var ve=x.callback;if(typeof ve=="function"){x.callback=null,_=x.priorityLevel;var P=ve(x.expirationTime<=I);if(I=r.unstable_now(),typeof P=="function"){x.callback=P,L(I),H=!0;break t}x===i(m)&&s(m),L(I)}else s(m);x=i(m)}if(x!==null)H=!0;else{var K=i(h);K!==null&&Q(B,K.startTime-I),H=!1}}break e}finally{x=null,_=de,b=!1}H=void 0}}finally{H?te():G=!1}}}var te;if(typeof U=="function")te=function(){U(V)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ue=se.port2;se.port1.onmessage=V,te=function(){ue.postMessage(null)}}else te=function(){S(V,0)};function Q(I,H){k=S(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(I){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var de=_;_=H;try{return I()}finally{_=de}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var de=_;_=I;try{return H()}finally{_=de}},r.unstable_scheduleCallback=function(I,H,de){var ve=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?ve+de:ve):de=ve,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=de+P,I={id:g++,callback:H,priorityLevel:I,startTime:de,expirationTime:P,sortIndex:-1},de>ve?(I.sortIndex=de,e(h,I),i(m)===null&&I===i(h)&&(C?(D(k),k=-1):C=!0,Q(B,de-ve))):(I.sortIndex=P,e(m,I),T||b||(T=!0,G||(G=!0,te()))),I},r.unstable_shouldYield=he,r.unstable_wrapCallback=function(I){var H=_;return function(){var de=_;_=H;try{return I.apply(this,arguments)}finally{_=de}}}}(Md)),Md}var q0;function dy(){return q0||(q0=1,yd.exports=fy()),yd.exports}var bd={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function hy(){if(Y0)return Cn;Y0=1;var r=np();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Cn.flushSync=function(m){var h=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=g,s.d.f()}},Cn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,x=p(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:b}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Cn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Cn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,x=p(g,h.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Cn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,h){return m(h)},Cn.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},Cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var Z0;function py(){if(Z0)return bd.exports;Z0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),bd.exports=hy(),bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function my(){if(K0)return Go;K0=1;var r=dy(),e=np(),i=py();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),t;if(d===o)return p(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var E=!1,R=u.child;R;){if(R===a){E=!0,a=u,o=d;break}if(R===o){E=!0,o=u,a=d;break}R=R.sibling}if(!E){for(R=d.child;R;){if(R===a){E=!0,a=d,o=u;break}if(R===o){E=!0,o=d,a=u;break}R=R.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case y:return"Profiler";case C:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return(t.displayName||"Context")+".Provider";case D:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var Q=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},ve=[],P=-1;function K(t){return{current:t}}function pe(t){0>P||(t.current=ve[P],ve[P]=null,P--)}function Se(t,n){P++,ve[P]=t.current,t.current=n}var Ne=K(null),Ye=K(null),ee=K(null),be=K(null);function ye(t,n){switch(Se(ee,n),Se(Ye,t),Se(Ne,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?g0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=g0(n),t=v0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}pe(Ne),Se(Ne,t)}function Je(){pe(Ne),pe(Ye),pe(ee)}function Ke(t){t.memoizedState!==null&&Se(be,t);var n=Ne.current,a=v0(n,t.type);n!==a&&(Se(Ye,t),Se(Ne,a))}function $e(t){Ye.current===t&&(pe(Ne),pe(Ye)),be.current===t&&(pe(be),Po._currentValue=de)}var qt=Object.prototype.hasOwnProperty,ht=r.unstable_scheduleCallback,xt=r.unstable_cancelCallback,Ct=r.unstable_shouldYield,rt=r.unstable_requestPaint,yt=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,jt=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,bt=r.unstable_NormalPriority,Ge=r.unstable_LowPriority,N=r.unstable_IdlePriority,v=r.log,F=r.unstable_setDisableYieldValue,Z=null,le=null;function ae(t){if(typeof v=="function"&&F(t),le&&typeof le.setStrictMode=="function")try{le.setStrictMode(Z,t)}catch{}}var we=Math.clz32?Math.clz32:Qe,Ce=Math.log,Xe=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Ce(t)/Xe|0)|0}var Ee=256,Ae=4194304;function Fe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function He(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Fe(o):(E&=R,E!==0?u=Fe(E):a||(a=R&~t,a!==0&&(u=Fe(a))))):(R=o&~d,R!==0?u=Fe(R):E!==0?u=Fe(E):a||(a=o&~t,a!==0&&(u=Fe(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ct(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function De(){var t=Ae;return Ae<<=1,(Ae&62914560)===0&&(Ae=4194304),t}function Re(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ie(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,n,a,o,u,d){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,ne=t.hiddenUpdates;for(a=E&~a;0<a;){var _e=31-we(a),Me=1<<_e;R[_e]=0,z[_e]=-1;var re=ne[_e];if(re!==null)for(ne[_e]=null,_e=0;_e<re.length;_e++){var ce=re[_e];ce!==null&&(ce.lane&=-536870913)}a&=~Me}o!==0&&ge(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~n))}function ge(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-we(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Ve(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-we(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:I0(t.type))}function pi(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var _n=Math.random().toString(36).slice(2),hn="__reactFiber$"+_n,xn="__reactProps$"+_n,wa="__reactContainer$"+_n,zs="__reactEvents$"+_n,fl="__reactListeners$"+_n,qi="__reactHandles$"+_n,Hs="__reactResources$"+_n,Ca="__reactMarker$"+_n;function Gs(t){delete t[hn],delete t[xn],delete t[zs],delete t[fl],delete t[qi]}function mi(t){var n=t[hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[wa]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=y0(t);t!==null;){if(a=t[hn])return a;t=y0(t)}return n}t=a,a=t.parentNode}return null}function Yi(t){if(t=t[hn]||t[wa]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Di(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Zi(t){var n=t[Hs];return n||(n=t[Hs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(t){t[Ca]=!0}var dl=new Set,hl={};function Ki(t,n){Da(t,n),Da(t+"Capture",n)}function Da(t,n){for(hl[t]=n,t=0;t<n.length;t++)dl.add(n[t])}var gu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pl={},w={};function q(t){return qt.call(w,t)?!0:qt.call(pl,t)?!1:gu.test(t)?w[t]=!0:(pl[t]=!0,!1)}function fe(t,n,a){if(q(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function J(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Le,Be;function Ue(t){if(Le===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Le=n&&n[1]||"",Be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Le+t+Be}var ke=!1;function We(t,n){if(!t||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ce){var re=ce}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(ce){re=ce}t.call(Me.prototype)}}else{try{throw Error()}catch(ce){re=ce}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ce){if(ce&&re&&typeof ce.stack=="string")return[ce.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],R=d[1];if(E&&R){var z=E.split(`
`),ne=R.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===ne.length)for(o=z.length-1,u=ne.length-1;1<=o&&0<=u&&z[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==ne[u]){var _e=`
`+z[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ue(a):""}function st(t){switch(t.tag){case 26:case 27:case 5:return Ue(t.type);case 16:return Ue("Lazy");case 13:return Ue("Suspense");case 19:return Ue("SuspenseList");case 0:case 15:return We(t.type,!1);case 11:return We(t.type.render,!1);case 1:return We(t.type,!0);case 31:return Ue("Activity");default:return""}}function lt(t){try{var n="";do n+=st(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t){var n=Dt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Vt(t){t._valueTracker||(t._valueTracker=Kt(t))}function Ut(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Dt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function an(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qe=/[\n"\\]/g;function Xt(t){return t.replace(qe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _t(t,n,a,o,u,d,E,R){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ze(n)):t.value!==""+ze(n)&&(t.value=""+ze(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?In(t,E,ze(n)):a!=null?In(t,E,ze(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ze(R):t.removeAttribute("name")}function Pn(t,n,a,o,u,d,E,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+ze(a):"",n=n!=null?""+ze(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function In(t,n,a){n==="number"&&an(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Qi(t,n,a){if(n!=null&&(n=""+ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ze(a):""}function Pt(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Yt(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ui=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ui.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function gi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&sn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&sn(t,d,n[d])}function Ni(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ml=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ox=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(t){return ox.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var vu=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vs=null,ks=null;function _p(t){var n=Yi(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(_t(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(s(90));_t(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ut(o)}break e;case"textarea":Qi(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Fn(t,!!a.multiple,n,!1)}}}var xu=!1;function xp(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(Vs!==null||ks!==null)&&(tc(),Vs&&(n=Vs,t=ks,ks=Vs=null,_p(n),t)))for(n=0;n<t.length;n++)_p(t[n])}}function qr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Ji)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Su=!1}var Ua=null,yu=null,vl=null;function Sp(){if(vl)return vl;var t,n=yu,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var E=a-t;for(o=1;o<=E&&n[a-o]===u[d-o];o++);return vl=u.slice(t,1<o?1-o:void 0)}function _l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function yp(){return!1}function Bn(t){function n(a,o,u,d,E){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?xl:yp,this.isPropagationStopped=yp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),n}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Bn(us),Zr=g({},us,{view:0,detail:0}),lx=Bn(Zr),Mu,bu,Kr,yl=g({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kr&&(Kr&&t.type==="mousemove"?(Mu=t.screenX-Kr.screenX,bu=t.screenY-Kr.screenY):bu=Mu=0,Kr=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),Mp=Bn(yl),cx=g({},yl,{dataTransfer:0}),ux=Bn(cx),fx=g({},Zr,{relatedTarget:0}),Eu=Bn(fx),dx=g({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=Bn(dx),px=g({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mx=Bn(px),gx=g({},us,{data:0}),bp=Bn(gx),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=xx[t])?!!n[t]:!1}function Tu(){return Sx}var yx=g({},Zr,{key:function(t){if(t.key){var n=vx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mx=Bn(yx),bx=g({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=Bn(bx),Ex=g({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Tx=Bn(Ex),Ax=g({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rx=Bn(Ax),wx=g({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=Bn(wx),Dx=g({},us,{newState:0,oldState:0}),Ux=Bn(Dx),Nx=[9,13,27,32],Au=Ji&&"CompositionEvent"in window,Qr=null;Ji&&"documentMode"in document&&(Qr=document.documentMode);var Lx=Ji&&"TextEvent"in window&&!Qr,Tp=Ji&&(!Au||Qr&&8<Qr&&11>=Qr),Ap=" ",Rp=!1;function wp(t,n){switch(t){case"keyup":return Nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function Ox(t,n){switch(t){case"compositionend":return Cp(n);case"keypress":return n.which!==32?null:(Rp=!0,Ap);case"textInput":return t=n.data,t===Ap&&Rp?null:t;default:return null}}function Px(t,n){if(js)return t==="compositionend"||!Au&&wp(t,n)?(t=Sp(),vl=yu=Ua=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Tp&&n.locale!=="ko"?null:n.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ix[t.type]:n==="textarea"}function Up(t,n,a,o){Vs?ks?ks.push(o):ks=[o]:Vs=o,n=oc(n,"onChange"),0<n.length&&(a=new Sl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Jr=null,$r=null;function Fx(t){f0(t,0)}function Ml(t){var n=Di(t);if(Ut(n))return t}function Np(t,n){if(t==="change")return n}var Lp=!1;if(Ji){var Ru;if(Ji){var wu="oninput"in document;if(!wu){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),wu=typeof Op.oninput=="function"}Ru=wu}else Ru=!1;Lp=Ru&&(!document.documentMode||9<document.documentMode)}function Pp(){Jr&&(Jr.detachEvent("onpropertychange",Ip),$r=Jr=null)}function Ip(t){if(t.propertyName==="value"&&Ml($r)){var n=[];Up(n,$r,t,_u(t)),xp(Fx,n)}}function Bx(t,n,a){t==="focusin"?(Pp(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",Ip)):t==="focusout"&&Pp()}function zx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml($r)}function Hx(t,n){if(t==="click")return Ml(n)}function Gx(t,n){if(t==="input"||t==="change")return Ml(n)}function Vx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:Vx;function eo(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qt.call(n,u)||!Xn(t[u],n[u]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bp(t,n){var a=Fp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fp(a)}}function zp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?zp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Hp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=an(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=an(t.document)}return n}function Cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var kx=Ji&&"documentMode"in document&&11>=document.documentMode,Xs=null,Du=null,to=null,Uu=!1;function Gp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||Xs==null||Xs!==an(o)||(o=Xs,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),to&&eo(to,o)||(to=o,o=oc(Du,"onSelect"),0<o.length&&(n=new Sl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Xs)))}function fs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ws={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Nu={},Vp={};Ji&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function ds(t){if(Nu[t])return Nu[t];if(!Ws[t])return t;var n=Ws[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vp)return Nu[t]=n[a];return t}var kp=ds("animationend"),jp=ds("animationiteration"),Xp=ds("animationstart"),jx=ds("transitionrun"),Xx=ds("transitionstart"),Wx=ds("transitioncancel"),Wp=ds("transitionend"),qp=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function vi(t,n){qp.set(t,n),Ki(n,[t])}var Yp=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=Yp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:lt(n)},Yp.set(t,n),n)}return{value:t,source:n,stack:lt(n)}}var ni=[],qs=0,Ou=0;function bl(){for(var t=qs,n=Ou=qs=0;n<t;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var d=ni[n];if(ni[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}d!==0&&Zp(a,u,d)}}function El(t,n,a,o){ni[qs++]=t,ni[qs++]=n,ni[qs++]=a,ni[qs++]=o,Ou|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Pu(t,n,a,o){return El(t,n,a,o),Tl(t)}function Ys(t,n){return El(t,null,null,n),Tl(t)}function Zp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-we(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Tl(t){if(50<Ro)throw Ro=0,Vf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zs={};function qx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,o){return new qx(t,n,a,o)}function Iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Kp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,o,u,d){var E=0;if(o=t,typeof t=="function")Iu(t)&&(E=1);else if(typeof t=="string")E=ZS(t,a,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=Wn(31,a,n,u),t.elementType=O,t.lanes=d,t;case T:return hs(a.children,u,d,n);case C:E=8,u|=24;break;case y:return t=Wn(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case B:return t=Wn(13,a,n,u),t.elementType=B,t.lanes=d,t;case G:return t=Wn(19,a,n,u),t.elementType=G,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S:case U:E=10;break e;case D:E=9;break e;case L:E=11;break e;case k:E=14;break e;case A:E=16,o=null;break e}E=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Wn(E,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function hs(t,n,a,o){return t=Wn(7,t,o,n),t.lanes=a,t}function Fu(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Bu(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ks=[],Qs=0,Rl=null,wl=0,ii=[],ai=0,ps=null,ea=1,ta="";function ms(t,n){Ks[Qs++]=wl,Ks[Qs++]=Rl,Rl=t,wl=n}function Qp(t,n,a){ii[ai++]=ea,ii[ai++]=ta,ii[ai++]=ps,ps=t;var o=ea;t=ta;var u=32-we(o)-1;o&=~(1<<u),a+=1;var d=32-we(n)+u;if(30<d){var E=u-u%5;d=(o&(1<<E)-1).toString(32),o>>=E,u-=E,ea=1<<32-we(n)+u|a<<u|o,ta=d+t}else ea=1<<d|a<<u|o,ta=t}function zu(t){t.return!==null&&(ms(t,1),Qp(t,1,0))}function Hu(t){for(;t===Rl;)Rl=Ks[--Qs],Ks[Qs]=null,wl=Ks[--Qs],Ks[Qs]=null;for(;t===ps;)ps=ii[--ai],ii[ai]=null,ta=ii[--ai],ii[ai]=null,ea=ii[--ai],ii[ai]=null}var Nn=null,$t=null,Nt=!1,gs=null,Li=!1,Gu=Error(s(519));function vs(t){var n=Error(s(418,""));throw ao(ti(n,t)),Gu}function Jp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[hn]=t,n[xn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)vt(Co[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Vt(n);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),Pt(n,o.value,o.defaultValue,o.children),Vt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||m0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=lc),n=!0):n=!1,n||vs(t)}function $p(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Nn=Nn.return}}function no(t){if(t!==Nn)return!1;if(!Nt)return $p(t),Nt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ad(t.type,t.memoizedProps)),a=!a),a&&$t&&vs(t),$p(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){$t=xi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}$t=null}}else n===27?(n=$t,qa(t.type)?(t=ld,ld=null,$t=t):$t=n):$t=Nn?xi(t.stateNode.nextSibling):null;return!0}function io(){$t=Nn=null,Nt=!1}function em(){var t=gs;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),gs=null),t}function ao(t){gs===null?gs=[t]:gs.push(t)}var Vu=K(null),_s=null,na=null;function Na(t,n,a){Se(Vu,n._currentValue),n._currentValue=a}function ia(t){t._currentValue=Vu.current,pe(Vu)}function ku(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ju(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var E=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var z=0;z<n.length;z++)if(R.context===n[z]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),ku(d.return,a,t),o||(E=null);break e}d=R.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),ku(E,a,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function so(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var R=u.type;Xn(u.pendingProps.value,E.value)||(t!==null?t.push(R):t=[R])}}else if(u===be.current){if(E=u.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Po):t=[Po])}u=u.return}t!==null&&ju(n,t,a,o),n.flags|=262144}function Cl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xs(t){_s=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return tm(_s,t)}function Dl(t,n){return _s===null&&xs(t),tm(t,n)}function tm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(s(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var Yx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Zx=r.unstable_scheduleCallback,Kx=r.unstable_NormalPriority,pn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new Yx,data:new Map,refCount:0}}function ro(t){t.refCount--,t.refCount===0&&Zx(Kx,function(){t.controller.abort()})}var oo=null,Wu=0,Js=0,$s=null;function Qx(t,n){if(oo===null){var a=oo=[];Wu=0,Js=Zf(),$s={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(nm,nm),n}function nm(){if(--Wu===0&&oo!==null){$s!==null&&($s.status="fulfilled");var t=oo;oo=null,Js=0,$s=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Jx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var im=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qx(t,n),im!==null&&im(t,n)};var Ss=K(null);function qu(){var t=Ss.current;return t!==null?t:Wt.pooledCache}function Ul(t,n){n===null?Se(Ss,Ss.current):Se(Ss,n.pool)}function am(){var t=qu();return t===null?null:{parent:pn._currentValue,pool:t}}var lo=Error(s(460)),sm=Error(s(474)),Nl=Error(s(542)),Yu={then:function(){}};function rm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ll(){}function om(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ll,Ll),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cm(t),t;default:if(typeof n.status=="string")n.then(Ll,Ll);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cm(t),t}throw co=n,lo}}var co=null;function lm(){if(co===null)throw Error(s(459));var t=co;return co=null,t}function cm(t){if(t===lo||t===Nl)throw Error(s(483))}var La=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(t),Zp(t,null,a),n}return El(t,o,n,a),Tl(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ve(t,a)}}function Qu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ju=!1;function fo(){if(Ju){var t=$s;if(t!==null)throw t}}function ho(t,n,a,o){Ju=!1;var u=t.updateQueue;La=!1;var d=u.firstBaseUpdate,E=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,ne=z.next;z.next=null,E===null?d=ne:E.next=ne,E=z;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==E&&(R===null?_e.firstBaseUpdate=ne:R.next=ne,_e.lastBaseUpdate=z))}if(d!==null){var Me=u.baseState;E=0,_e=ne=z=null,R=d;do{var re=R.lane&-536870913,ce=re!==R.lane;if(ce?(Et&re)===re:(o&re)===re){re!==0&&re===Js&&(Ju=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var it=t,et=R;re=n;var Gt=a;switch(et.tag){case 1:if(it=et.payload,typeof it=="function"){Me=it.call(Gt,Me,re);break e}Me=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=et.payload,re=typeof it=="function"?it.call(Gt,Me,re):it,re==null)break e;Me=g({},Me,re);break e;case 2:La=!0}}re=R.callback,re!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[re]:ce.push(re))}else ce={lane:re,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(ne=_e=ce,z=Me):_e=_e.next=ce,E|=re;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);_e===null&&(z=Me),u.baseState=z,u.firstBaseUpdate=ne,u.lastBaseUpdate=_e,d===null&&(u.shared.lanes=0),ka|=E,t.lanes=E,t.memoizedState=Me}}function um(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function fm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)um(a[t],n)}var er=K(null),Ol=K(0);function dm(t,n){t=ua,Se(Ol,t),Se(er,n),ua=t|n.baseLanes}function $u(){Se(Ol,ua),Se(er,er.current)}function ef(){ua=Ol.current,pe(er),pe(Ol)}var Ia=0,pt=null,zt=null,cn=null,Pl=!1,tr=!1,ys=!1,Il=0,po=0,nr=null,$x=0;function rn(){throw Error(s(321))}function tf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function nf(t,n,a,o,u,d){return Ia=d,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Zm:Km,ys=!1,d=a(o,u),ys=!1,tr&&(d=pm(n,a,o,u)),hm(t),d}function hm(t){I.H=Vl;var n=zt!==null&&zt.next!==null;if(Ia=0,cn=zt=pt=null,Pl=!1,po=0,nr=null,n)throw Error(s(300));t===null||Sn||(t=t.dependencies,t!==null&&Cl(t)&&(Sn=!0))}function pm(t,n,a,o){pt=t;var u=0;do{if(tr&&(nr=null),po=0,tr=!1,25<=u)throw Error(s(301));if(u+=1,cn=zt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=rS,d=n(a,o)}while(tr);return d}function eS(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?mo(n):n,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(pt.flags|=1024),n}function af(){var t=Il!==0;return Il=0,t}function sf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function rf(t){if(Pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pl=!1}Ia=0,cn=zt=pt=null,tr=!1,po=Il=0,nr=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?pt.memoizedState=cn=t:cn=cn.next=t,cn}function un(){if(zt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var n=cn===null?pt.memoizedState:cn.next;if(n!==null)cn=n,zt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},cn===null?pt.memoizedState=cn=t:cn=cn.next=t}return cn}function of(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(t){var n=po;return po+=1,nr===null&&(nr=[]),t=om(nr,t,n),n=pt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Zm:Km),t}function Fl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mo(t);if(t.$$typeof===U)return wn(t)}throw Error(s(438,String(t)))}function lf(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=of(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=he;return n.index++,a}function aa(t,n){return typeof n=="function"?n(t):n}function Bl(t){var n=un();return cf(n,zt,t)}function cf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var E=u.next;u.next=d.next,d.next=E}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=E=null,z=null,ne=n,_e=!1;do{var Me=ne.lane&-536870913;if(Me!==ne.lane?(Et&Me)===Me:(Ia&Me)===Me){var re=ne.revertLane;if(re===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Me===Js&&(_e=!0);else if((Ia&re)===re){ne=ne.next,re===Js&&(_e=!0);continue}else Me={lane:0,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(R=z=Me,E=d):z=z.next=Me,pt.lanes|=re,ka|=re;Me=ne.action,ys&&a(d,Me),d=ne.hasEagerState?ne.eagerState:a(d,Me)}else re={lane:Me,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(R=z=re,E=d):z=z.next=re,pt.lanes|=Me,ka|=Me;ne=ne.next}while(ne!==null&&ne!==n);if(z===null?E=d:z.next=R,!Xn(d,t.memoizedState)&&(Sn=!0,_e&&(a=$s,a!==null)))throw a;t.memoizedState=d,t.baseState=E,t.baseQueue=z,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function uf(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do d=t(d,E.action),E=E.next;while(E!==u);Xn(d,n.memoizedState)||(Sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function mm(t,n,a){var o=pt,u=un(),d=Nt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var E=!Xn((zt||u).memoizedState,a);E&&(u.memoizedState=a,Sn=!0),u=u.queue;var R=_m.bind(null,o,u,t);if(go(2048,8,R,[t]),u.getSnapshot!==n||E||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,ir(9,zl(),vm.bind(null,o,u,a,n),null),Wt===null)throw Error(s(349));d||(Ia&124)!==0||gm(o,n,a)}return a}function gm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=of(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function vm(t,n,a,o){n.value=a,n.getSnapshot=o,xm(n)&&Sm(t)}function _m(t,n,a){return a(function(){xm(n)&&Sm(t)})}function xm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Sm(t){var n=Ys(t,2);n!==null&&Qn(n,t,2)}function ff(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),ys){ae(!0);try{a()}finally{ae(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},n}function ym(t,n,a,o){return t.baseState=a,cf(t,zt,typeof o=="function"?o:aa)}function tS(t,n,a,o,u){if(Gl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Mm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Mm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=I.T,E={};I.T=E;try{var R=a(u,o),z=I.S;z!==null&&z(E,R),bm(t,n,R)}catch(ne){df(t,n,ne)}finally{I.T=d}}else try{d=a(u,o),bm(t,n,d)}catch(ne){df(t,n,ne)}}function bm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Em(t,n,o)},function(o){return df(t,n,o)}):Em(t,n,a)}function Em(t,n,a){n.status="fulfilled",n.value=a,Tm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Mm(t,a)))}function df(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Tm(n),n=n.next;while(n!==o)}t.action=null}function Tm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Am(t,n){return n}function Rm(t,n){if(Nt){var a=Wt.formState;if(a!==null){e:{var o=pt;if(Nt){if($t){t:{for(var u=$t,d=Li;u.nodeType!==8;){if(!d){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$t=xi(u.nextSibling),o=u.data==="F!";break e}}vs(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Am,lastRenderedState:n},a.queue=o,a=Wm.bind(null,pt,o),o.dispatch=a,o=ff(!1),d=vf.bind(null,pt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=tS.bind(null,pt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function wm(t){var n=un();return Cm(n,zt,t)}function Cm(t,n,a){if(n=cf(t,n,Am)[0],t=Bl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(E){throw E===lo?Nl:E}else o=n;n=un();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,ir(9,zl(),nS.bind(null,u,a),null)),[o,d,t]}function nS(t,n){t.action=n}function Dm(t){var n=un(),a=zt;if(a!==null)return Cm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ir(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=of(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function zl(){return{destroy:void 0,resource:void 0}}function Um(){return un().memoizedState}function Hl(t,n,a,o){var u=zn();o=o===void 0?null:o,pt.flags|=t,u.memoizedState=ir(1|n,zl(),a,o)}function go(t,n,a,o){var u=un();o=o===void 0?null:o;var d=u.memoizedState.inst;zt!==null&&o!==null&&tf(o,zt.memoizedState.deps)?u.memoizedState=ir(n,d,a,o):(pt.flags|=t,u.memoizedState=ir(1|n,d,a,o))}function Nm(t,n){Hl(8390656,8,t,n)}function Lm(t,n){go(2048,8,t,n)}function Om(t,n){return go(4,2,t,n)}function Pm(t,n){return go(4,4,t,n)}function Im(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Fm(t,n,a){a=a!=null?a.concat([t]):null,go(4,4,Im.bind(null,n,t),a)}function hf(){}function Bm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function zm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=t(),ys){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[o,n],o}function pf(t,n,a){return a===void 0||(Ia&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Vg(),pt.lanes|=t,ka|=t,a)}function Hm(t,n,a,o){return Xn(a,n)?a:er.current!==null?(t=pf(t,a,o),Xn(t,n)||(Sn=!0),t):(Ia&42)===0?(Sn=!0,t.memoizedState=a):(t=Vg(),pt.lanes|=t,ka|=t,n)}function Gm(t,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var E=I.T,R={};I.T=R,vf(t,!1,n,a);try{var z=u(),ne=I.S;if(ne!==null&&ne(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var _e=Jx(z,o);vo(t,n,_e,Kn(t))}else vo(t,n,o,Kn(t))}catch(Me){vo(t,n,{then:function(){},status:"rejected",reason:Me},Kn())}finally{H.p=d,I.T=E}}function iS(){}function mf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Vm(t).queue;Gm(t,u,n,de,a===null?iS:function(){return km(t),a(o)})}function Vm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:de},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function km(t){var n=Vm(t).next.queue;vo(t,n,{},Kn())}function gf(){return wn(Po)}function jm(){return un().memoizedState}function Xm(){return un().memoizedState}function aS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=Oa(a);var o=Pa(n,t,a);o!==null&&(Qn(o,n,a),uo(o,n,a)),n={cache:Xu()},t.payload=n;return}n=n.return}}function sS(t,n,a){var o=Kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(t)?qm(n,a):(a=Pu(t,n,a,o),a!==null&&(Qn(a,t,o),Ym(a,n,o)))}function Wm(t,n,a){var o=Kn();vo(t,n,a,o)}function vo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(t))qm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var E=n.lastRenderedState,R=d(E,a);if(u.hasEagerState=!0,u.eagerState=R,Xn(R,E))return El(t,n,u,0),Wt===null&&bl(),!1}catch{}finally{}if(a=Pu(t,n,u,o),a!==null)return Qn(a,t,o),Ym(a,n,o),!0}return!1}function vf(t,n,a,o){if(o={lane:2,revertLane:Zf(),action:o,hasEagerState:!1,eagerState:null,next:null},Gl(t)){if(n)throw Error(s(479))}else n=Pu(t,a,o,2),n!==null&&Qn(n,t,2)}function Gl(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function qm(t,n){tr=Pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ym(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ve(t,a)}}var Vl={readContext:wn,use:Fl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},Zm={readContext:wn,use:Fl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Nm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,Im.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(ys){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(ys){ae(!0);try{a(n)}finally{ae(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=sS.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=ff(t);var n=t.queue,a=Wm.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(t,n){var a=zn();return pf(a,t,n)},useTransition:function(){var t=ff(!1);return t=Gm.bind(null,pt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=zn();if(Nt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(Et&124)!==0||gm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Nm(_m.bind(null,o,d,t),[t]),o.flags|=2048,ir(9,zl(),vm.bind(null,o,d,a,n),null),a},useId:function(){var t=zn(),n=Wt.identifierPrefix;if(Nt){var a=ta,o=ea;a=(o&~(1<<32-we(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=$x++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:gf,useFormState:Rm,useActionState:Rm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:lf,useCacheRefresh:function(){return zn().memoizedState=aS.bind(null,pt)}},Km={readContext:wn,use:Fl,useCallback:Bm,useContext:wn,useEffect:Lm,useImperativeHandle:Fm,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:zm,useReducer:Bl,useRef:Um,useState:function(){return Bl(aa)},useDebugValue:hf,useDeferredValue:function(t,n){var a=un();return Hm(a,zt.memoizedState,t,n)},useTransition:function(){var t=Bl(aa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:mm,useId:jm,useHostTransitionStatus:gf,useFormState:wm,useActionState:wm,useOptimistic:function(t,n){var a=un();return ym(a,zt,t,n)},useMemoCache:lf,useCacheRefresh:Xm},rS={readContext:wn,use:Fl,useCallback:Bm,useContext:wn,useEffect:Lm,useImperativeHandle:Fm,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:zm,useReducer:uf,useRef:Um,useState:function(){return uf(aa)},useDebugValue:hf,useDeferredValue:function(t,n){var a=un();return zt===null?pf(a,t,n):Hm(a,zt.memoizedState,t,n)},useTransition:function(){var t=uf(aa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:mm,useId:jm,useHostTransitionStatus:gf,useFormState:Dm,useActionState:Dm,useOptimistic:function(t,n){var a=un();return zt!==null?ym(a,zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:Xm},ar=null,_o=0;function kl(t){var n=_o;return _o+=1,ar===null&&(ar=[]),om(ar,t,n)}function xo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function jl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qm(t){var n=t._init;return n(t._payload)}function Jm(t){function n(Y,X){if(t){var $=Y.deletions;$===null?(Y.deletions=[X],Y.flags|=16):$.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function o(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=$i(Y,X),Y.index=0,Y.sibling=null,Y}function d(Y,X,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<X?(Y.flags|=67108866,X):$):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,X,$,xe){return X===null||X.tag!==6?(X=Fu($,Y.mode,xe),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function z(Y,X,$,xe){var je=$.type;return je===T?_e(Y,X,$.props.children,xe,$.key):X!==null&&(X.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===A&&Qm(je)===X.type)?(X=u(X,$.props),xo(X,$),X.return=Y,X):(X=Al($.type,$.key,$.props,null,Y.mode,xe),xo(X,$),X.return=Y,X)}function ne(Y,X,$,xe){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Bu($,Y.mode,xe),X.return=Y,X):(X=u(X,$.children||[]),X.return=Y,X)}function _e(Y,X,$,xe,je){return X===null||X.tag!==7?(X=hs($,Y.mode,xe,je),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function Me(Y,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Fu(""+X,Y.mode,$),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return $=Al(X.type,X.key,X.props,null,Y.mode,$),xo($,X),$.return=Y,$;case b:return X=Bu(X,Y.mode,$),X.return=Y,X;case A:var xe=X._init;return X=xe(X._payload),Me(Y,X,$)}if(Q(X)||te(X))return X=hs(X,Y.mode,$,null),X.return=Y,X;if(typeof X.then=="function")return Me(Y,kl(X),$);if(X.$$typeof===U)return Me(Y,Dl(Y,X),$);jl(Y,X)}return null}function re(Y,X,$,xe){var je=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return je!==null?null:R(Y,X,""+$,xe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case _:return $.key===je?z(Y,X,$,xe):null;case b:return $.key===je?ne(Y,X,$,xe):null;case A:return je=$._init,$=je($._payload),re(Y,X,$,xe)}if(Q($)||te($))return je!==null?null:_e(Y,X,$,xe,null);if(typeof $.then=="function")return re(Y,X,kl($),xe);if($.$$typeof===U)return re(Y,X,Dl(Y,$),xe);jl(Y,$)}return null}function ce(Y,X,$,xe,je){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Y=Y.get($)||null,R(X,Y,""+xe,je);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case _:return Y=Y.get(xe.key===null?$:xe.key)||null,z(X,Y,xe,je);case b:return Y=Y.get(xe.key===null?$:xe.key)||null,ne(X,Y,xe,je);case A:var mt=xe._init;return xe=mt(xe._payload),ce(Y,X,$,xe,je)}if(Q(xe)||te(xe))return Y=Y.get($)||null,_e(X,Y,xe,je,null);if(typeof xe.then=="function")return ce(Y,X,$,kl(xe),je);if(xe.$$typeof===U)return ce(Y,X,$,Dl(X,xe),je);jl(X,xe)}return null}function it(Y,X,$,xe){for(var je=null,mt=null,Ze=X,tt=X=0,Mn=null;Ze!==null&&tt<$.length;tt++){Ze.index>tt?(Mn=Ze,Ze=null):Mn=Ze.sibling;var Rt=re(Y,Ze,$[tt],xe);if(Rt===null){Ze===null&&(Ze=Mn);break}t&&Ze&&Rt.alternate===null&&n(Y,Ze),X=d(Rt,X,tt),mt===null?je=Rt:mt.sibling=Rt,mt=Rt,Ze=Mn}if(tt===$.length)return a(Y,Ze),Nt&&ms(Y,tt),je;if(Ze===null){for(;tt<$.length;tt++)Ze=Me(Y,$[tt],xe),Ze!==null&&(X=d(Ze,X,tt),mt===null?je=Ze:mt.sibling=Ze,mt=Ze);return Nt&&ms(Y,tt),je}for(Ze=o(Ze);tt<$.length;tt++)Mn=ce(Ze,Y,tt,$[tt],xe),Mn!==null&&(t&&Mn.alternate!==null&&Ze.delete(Mn.key===null?tt:Mn.key),X=d(Mn,X,tt),mt===null?je=Mn:mt.sibling=Mn,mt=Mn);return t&&Ze.forEach(function(Ja){return n(Y,Ja)}),Nt&&ms(Y,tt),je}function et(Y,X,$,xe){if($==null)throw Error(s(151));for(var je=null,mt=null,Ze=X,tt=X=0,Mn=null,Rt=$.next();Ze!==null&&!Rt.done;tt++,Rt=$.next()){Ze.index>tt?(Mn=Ze,Ze=null):Mn=Ze.sibling;var Ja=re(Y,Ze,Rt.value,xe);if(Ja===null){Ze===null&&(Ze=Mn);break}t&&Ze&&Ja.alternate===null&&n(Y,Ze),X=d(Ja,X,tt),mt===null?je=Ja:mt.sibling=Ja,mt=Ja,Ze=Mn}if(Rt.done)return a(Y,Ze),Nt&&ms(Y,tt),je;if(Ze===null){for(;!Rt.done;tt++,Rt=$.next())Rt=Me(Y,Rt.value,xe),Rt!==null&&(X=d(Rt,X,tt),mt===null?je=Rt:mt.sibling=Rt,mt=Rt);return Nt&&ms(Y,tt),je}for(Ze=o(Ze);!Rt.done;tt++,Rt=$.next())Rt=ce(Ze,Y,tt,Rt.value,xe),Rt!==null&&(t&&Rt.alternate!==null&&Ze.delete(Rt.key===null?tt:Rt.key),X=d(Rt,X,tt),mt===null?je=Rt:mt.sibling=Rt,mt=Rt);return t&&Ze.forEach(function(oy){return n(Y,oy)}),Nt&&ms(Y,tt),je}function Gt(Y,X,$,xe){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case _:e:{for(var je=$.key;X!==null;){if(X.key===je){if(je=$.type,je===T){if(X.tag===7){a(Y,X.sibling),xe=u(X,$.props.children),xe.return=Y,Y=xe;break e}}else if(X.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===A&&Qm(je)===X.type){a(Y,X.sibling),xe=u(X,$.props),xo(xe,$),xe.return=Y,Y=xe;break e}a(Y,X);break}else n(Y,X);X=X.sibling}$.type===T?(xe=hs($.props.children,Y.mode,xe,$.key),xe.return=Y,Y=xe):(xe=Al($.type,$.key,$.props,null,Y.mode,xe),xo(xe,$),xe.return=Y,Y=xe)}return E(Y);case b:e:{for(je=$.key;X!==null;){if(X.key===je)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Y,X.sibling),xe=u(X,$.children||[]),xe.return=Y,Y=xe;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}xe=Bu($,Y.mode,xe),xe.return=Y,Y=xe}return E(Y);case A:return je=$._init,$=je($._payload),Gt(Y,X,$,xe)}if(Q($))return it(Y,X,$,xe);if(te($)){if(je=te($),typeof je!="function")throw Error(s(150));return $=je.call($),et(Y,X,$,xe)}if(typeof $.then=="function")return Gt(Y,X,kl($),xe);if($.$$typeof===U)return Gt(Y,X,Dl(Y,$),xe);jl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Y,X.sibling),xe=u(X,$),xe.return=Y,Y=xe):(a(Y,X),xe=Fu($,Y.mode,xe),xe.return=Y,Y=xe),E(Y)):a(Y,X)}return function(Y,X,$,xe){try{_o=0;var je=Gt(Y,X,$,xe);return ar=null,je}catch(Ze){if(Ze===lo||Ze===Nl)throw Ze;var mt=Wn(29,Ze,null,Y.mode);return mt.lanes=xe,mt.return=Y,mt}finally{}}}var sr=Jm(!0),$m=Jm(!1),si=K(null),Oi=null;function Fa(t){var n=t.alternate;Se(mn,mn.current&1),Se(si,t),Oi===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(Oi=t)}function eg(t){if(t.tag===22){if(Se(mn,mn.current),Se(si,t),Oi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Oi=t)}}else Ba()}function Ba(){Se(mn,mn.current),Se(si,si.current)}function sa(t){pe(si),Oi===t&&(Oi=null),pe(mn)}var mn=K(0);function Xl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||od(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function _f(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Qn(n,t,o),uo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Qn(n,t,o),uo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,a),n!==null&&(Qn(n,t,a),uo(n,t,a))}};function tg(t,n,a,o,u,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,E):n.prototype&&n.prototype.isPureReactComponent?!eo(a,o)||!eo(u,d):!0}function ng(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function Ms(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ig(t){Wl(t)}function ag(t){console.error(t)}function sg(t){Wl(t)}function ql(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function rg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(t,n)},a}function og(t){return t=Oa(t),t.tag=3,t}function lg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){rg(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){rg(n,a,o),typeof u!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function oS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&so(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Oi===null?jf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Yu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(t,o,u)),!1;case 22:return a.flags|=65536,o===Yu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(t,o,u)),!1}throw Error(s(435,a.tag))}return Wf(t,o,u),jf(),!1}if(Nt)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Gu&&(t=Error(s(422),{cause:o}),ao(ti(t,a)))):(o!==Gu&&(n=Error(s(423),{cause:o}),ao(ti(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ti(o,a),u=Sf(t.stateNode,o,u),Qu(t,u),en!==4&&(en=2)),!1;var d=Error(s(520),{cause:o});if(d=ti(d,a),Ao===null?Ao=[d]:Ao.push(d),en!==4&&(en=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Sf(a.stateNode,o,t),Qu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ja===null||!ja.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=og(u),lg(u,t,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var cg=Error(s(461)),Sn=!1;function En(t,n,a,o){n.child=t===null?$m(n,null,a,o):sr(n,t.child,a,o)}function ug(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var E={};for(var R in o)R!=="ref"&&(E[R]=o[R])}else E=o;return xs(n),o=nf(t,n,a,E,d,u),R=af(),t!==null&&!Sn?(sf(t,n,u),ra(t,n,u)):(Nt&&R&&zu(n),n.flags|=1,En(t,n,o,u),n.child)}function fg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Iu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,dg(t,n,d,o,u)):(t=Al(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!wf(t,u)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(E,o)&&t.ref===n.ref)return ra(t,n,u)}return n.flags|=1,t=$i(d,o),t.ref=n.ref,t.return=n,n.child=t}function dg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(eo(d,o)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=o=d,wf(t,u))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,ra(t,n,u)}return yf(t,n,a,o,u)}function hg(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return pg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ul(n,d!==null?d.cachePool:null),d!==null?dm(n,d):$u(),eg(n);else return n.lanes=n.childLanes=536870912,pg(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Ul(n,d.cachePool),dm(n,d),Ba(),n.memoizedState=null):(t!==null&&Ul(n,null),$u(),Ba());return En(t,n,u,a),n.child}function pg(t,n,a,o){var u=qu();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Ul(n,null),$u(),eg(n),t!==null&&so(t,n,o,!0),null}function Yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function yf(t,n,a,o,u){return xs(n),a=nf(t,n,a,o,void 0,u),o=af(),t!==null&&!Sn?(sf(t,n,u),ra(t,n,u)):(Nt&&o&&zu(n),n.flags|=1,En(t,n,a,u),n.child)}function mg(t,n,a,o,u,d){return xs(n),n.updateQueue=null,a=pm(n,o,a,u),hm(t),o=af(),t!==null&&!Sn?(sf(t,n,d),ra(t,n,d)):(Nt&&o&&zu(n),n.flags|=1,En(t,n,a,d),n.child)}function gg(t,n,a,o,u){if(xs(n),n.stateNode===null){var d=Zs,E=a.contextType;typeof E=="object"&&E!==null&&(d=wn(E)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Zu(n),E=a.contextType,d.context=typeof E=="object"&&E!==null?wn(E):Zs,d.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(_f(n,a,E,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&xf.enqueueReplaceState(d,d.state,null),ho(n,o,d,u),fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,z=Ms(a,R);d.props=z;var ne=d.context,_e=a.contextType;E=Zs,typeof _e=="object"&&_e!==null&&(E=wn(_e));var Me=a.getDerivedStateFromProps;_e=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ne!==E)&&ng(n,d,o,E),La=!1;var re=n.memoizedState;d.state=re,ho(n,o,d,u),fo(),ne=n.memoizedState,R||re!==ne||La?(typeof Me=="function"&&(_f(n,a,Me,o),ne=n.memoizedState),(z=La||tg(n,a,z,o,re,ne,E))?(_e||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=E,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ku(t,n),E=n.memoizedProps,_e=Ms(a,E),d.props=_e,Me=n.pendingProps,re=d.context,ne=a.contextType,z=Zs,typeof ne=="object"&&ne!==null&&(z=wn(ne)),R=a.getDerivedStateFromProps,(ne=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==Me||re!==z)&&ng(n,d,o,z),La=!1,re=n.memoizedState,d.state=re,ho(n,o,d,u),fo();var ce=n.memoizedState;E!==Me||re!==ce||La||t!==null&&t.dependencies!==null&&Cl(t.dependencies)?(typeof R=="function"&&(_f(n,a,R,o),ce=n.memoizedState),(_e=La||tg(n,a,_e,o,re,ce,z)||t!==null&&t.dependencies!==null&&Cl(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=z,o=_e):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Yl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=sr(n,t.child,null,u),n.child=sr(n,null,a,u)):En(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ra(t,n,u),t}function vg(t,n,a,o){return io(),n.flags|=256,En(t,n,a,o),n.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(t){return{baseLanes:t,cachePool:am()}}function Ef(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function _g(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Nt){if(u?Fa(n):Ba(),Nt){var R=$t,z;if(z=R){e:{for(z=R,R=Li;z.nodeType!==8;){if(!R){R=null;break e}if(z=xi(z.nextSibling),z===null){R=null;break e}}R=z}R!==null?(n.memoizedState={dehydrated:R,treeContext:ps!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},z=Wn(18,null,null,0),z.stateNode=R,z.return=n,n.child=z,Nn=n,$t=null,z=!0):z=!1}z||vs(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return od(R)?n.lanes=32:n.lanes=536870912,null;sa(n)}return R=o.children,o=o.fallback,u?(Ba(),u=n.mode,R=Zl({mode:"hidden",children:R},u),o=hs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=bf(a),u.childLanes=Ef(t,E,a),n.memoizedState=Mf,o):(Fa(n),Tf(n,R))}if(z=t.memoizedState,z!==null&&(R=z.dehydrated,R!==null)){if(d)n.flags&256?(Fa(n),n.flags&=-257,n=Af(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),u=o.fallback,R=n.mode,o=Zl({mode:"visible",children:o.children},R),u=hs(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,sr(n,t.child,null,a),o=n.child,o.memoizedState=bf(a),o.childLanes=Ef(t,E,a),n.memoizedState=Mf,n=u);else if(Fa(n),od(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var ne=E.dgst;E=ne,o=Error(s(419)),o.stack="",o.digest=E,ao({value:o,source:null,stack:null}),n=Af(t,n,a)}else if(Sn||so(t,n,a,!1),E=(a&t.childLanes)!==0,Sn||E){if(E=Wt,E!==null&&(o=a&-a,o=(o&42)!==0?1:nt(o),o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Ys(t,o),Qn(E,t,o),cg;R.data==="$?"||jf(),n=Af(t,n,a)}else R.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,$t=xi(R.nextSibling),Nn=n,Nt=!0,gs=null,Li=!1,t!==null&&(ii[ai++]=ea,ii[ai++]=ta,ii[ai++]=ps,ea=t.id,ta=t.overflow,ps=n),n=Tf(n,o.children),n.flags|=4096);return n}return u?(Ba(),u=o.fallback,R=n.mode,z=t.child,ne=z.sibling,o=$i(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,ne!==null?u=$i(ne,u):(u=hs(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=t.child.memoizedState,R===null?R=bf(a):(z=R.cachePool,z!==null?(ne=pn._currentValue,z=z.parent!==ne?{parent:ne,pool:ne}:z):z=am(),R={baseLanes:R.baseLanes|a,cachePool:z}),u.memoizedState=R,u.childLanes=Ef(t,E,a),n.memoizedState=Mf,o):(Fa(n),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function Tf(t,n){return n=Zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Zl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Af(t,n,a){return sr(n,t.child,null,a),t=Tf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function xg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ku(t.return,n,a)}function Rf(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function Sg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(En(t,n,o.children,a),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,a,n);else if(t.tag===19)xg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Se(mn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Xl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Rf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Xl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Rf(n,!0,a,null,d);break;case"together":Rf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(so(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=$i(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Cl(t)))}function lS(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Na(n,pn,t.memoizedState.cache),io();break;case 27:case 5:Ke(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?_g(t,n,a):(Fa(n),t=ra(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(so(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Sg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,hg(t,n,a);case 24:Na(n,pn,t.memoizedState.cache)}return ra(t,n,a)}function yg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!wf(t,a)&&(n.flags&128)===0)return Sn=!1,lS(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,Nt&&(n.flags&1048576)!==0&&Qp(n,wl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Iu(o)?(t=Ms(o,t),n.tag=1,n=gg(null,n,o,t,a)):(n.tag=0,n=yf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===L){n.tag=11,n=ug(null,n,o,t,a);break e}else if(u===k){n.tag=14,n=fg(null,n,o,t,a);break e}}throw n=ue(o)||o,Error(s(306,n,""))}}return n;case 0:return yf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ms(o,n.pendingProps),gg(t,n,o,u,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Ku(t,n),ho(n,o,null,a);var E=n.memoizedState;if(o=E.cache,Na(n,pn,o),o!==d.cache&&ju(n,[pn],a,!0),fo(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=vg(t,n,o,a);break e}else if(o!==u){u=ti(Error(s(424)),n),ao(u),n=vg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=xi(t.firstChild),Nn=n,Nt=!0,gs=null,Li=!0,a=$m(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(io(),o===u){n=ra(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return Yl(t,n),t===null?(a=T0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Nt||(a=n.type,t=n.pendingProps,o=cc(ee.current).createElement(a),o[hn]=n,o[xn]=t,An(o,a,t),nn(o),n.stateNode=o):n.memoizedState=T0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Nt&&(o=n.stateNode=M0(n.type,n.pendingProps,ee.current),Nn=n,Li=!0,u=$t,qa(n.type)?(ld=u,$t=xi(o.firstChild)):$t=u),En(t,n,n.pendingProps.children,a),Yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Nt&&((u=o=$t)&&(o=IS(o,n.type,n.pendingProps,Li),o!==null?(n.stateNode=o,Nn=n,$t=xi(o.firstChild),Li=!1,u=!0):u=!1),u||vs(n)),Ke(n),u=n.type,d=n.pendingProps,E=t!==null?t.memoizedProps:null,o=d.children,ad(u,d)?o=null:E!==null&&ad(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=nf(t,n,eS,null,null,a),Po._currentValue=u),Yl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&Nt&&((t=a=$t)&&(a=FS(a,n.pendingProps,Li),a!==null?(n.stateNode=a,Nn=n,$t=null,t=!0):t=!1),t||vs(n)),null;case 13:return _g(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=sr(n,null,o,a):En(t,n,o,a),n.child;case 11:return ug(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xs(n),u=wn(u),o=o(u),n.flags|=1,En(t,n,o,a),n.child;case 14:return fg(t,n,n.type,n.pendingProps,a);case 15:return dg(t,n,n.type,n.pendingProps,a);case 19:return Sg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Zl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=$i(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return hg(t,n,a);case 24:return xs(n),o=wn(pn),t===null?(u=qu(),u===null&&(u=Wt,d=Xu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Zu(n),Na(n,pn,u)):((t.lanes&a)!==0&&(Ku(t,n),ho(n,null,null,a),fo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,pn,o)):(o=d.cache,Na(n,pn,o),o!==u.cache&&ju(n,[pn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(t){t.flags|=4}function Mg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!D0(n)){if(n=si.current,n!==null&&((Et&4194048)===Et?Oi!==null:(Et&62914560)!==Et&&(Et&536870912)===0||n!==Oi))throw co=Yu,sm;t.flags|=8192}}function Kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?De():536870912,t.lanes|=n,cr|=n)}function So(t,n){if(!Nt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function cS(t,n,a){var o=n.pendingProps;switch(Hu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(pn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(no(n)?oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,em())),Qt(n),null;case 26:return a=n.memoizedState,t===null?(oa(n),a!==null?(Qt(n),Mg(n,a)):(Qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(oa(n),Qt(n),Mg(n,a)):(Qt(n),n.flags&=-16777217):(t.memoizedProps!==o&&oa(n),Qt(n),n.flags&=-16777217),null;case 27:$e(n),a=ee.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}t=Ne.current,no(n)?Jp(n):(t=M0(u,o,a),n.stateNode=t,oa(n))}return Qt(n),null;case 5:if($e(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(t=Ne.current,no(n))Jp(n);else{switch(u=cc(ee.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[hn]=n,t[xn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(An(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&oa(n)}}return Qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ee.current,no(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[hn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||m0(t.nodeValue,a)),t||vs(n)}else t=cc(t).createTextNode(o),t[hn]=n,n.stateNode=t}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=no(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[hn]=n}else io(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=em(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(sa(n),n):(sa(n),null)}if(sa(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),Qt(n),null;case 4:return Je(),t===null&&$f(n.stateNode.containerInfo),Qt(n),null;case 10:return ia(n.type),Qt(n),null;case 19:if(pe(mn),u=n.memoizedState,u===null)return Qt(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)So(u,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Xl(t),d!==null){for(n.flags|=128,So(u,!1),t=d.updateQueue,n.updateQueue=t,Kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Kp(a,t),a=a.sibling;return Se(mn,mn.current&1|2),n.child}t=t.sibling}u.tail!==null&&yt()>$l&&(n.flags|=128,o=!0,So(u,!1),n.lanes=4194304)}else{if(!o)if(t=Xl(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Kl(n,t),So(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Nt)return Qt(n),null}else 2*yt()-u.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,o=!0,So(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=yt(),n.sibling=null,t=mn.current,Se(mn,o?t&1|2:t&1),n):(Qt(n),null);case 22:case 23:return sa(n),ef(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&pe(Ss),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(pn),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function uS(t,n){switch(Hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ia(pn),Je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 13:if(sa(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));io()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return pe(mn),null;case 4:return Je(),null;case 10:return ia(n.type),null;case 22:case 23:return sa(n),ef(),t!==null&&pe(Ss),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ia(pn),null;case 25:return null;default:return null}}function bg(t,n){switch(Hu(n),n.tag){case 3:ia(pn),Je();break;case 26:case 27:case 5:$e(n);break;case 4:Je();break;case 13:sa(n);break;case 19:pe(mn);break;case 10:ia(n.type);break;case 22:case 23:sa(n),ef(),t!==null&&pe(Ss);break;case 24:ia(pn)}}function yo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,E=a.inst;o=d(),E.destroy=o}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var E=o.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,u=n;var z=a,ne=R;try{ne()}catch(_e){kt(u,z,_e)}}}o=o.next}while(o!==d)}}catch(_e){kt(n,n.return,_e)}}function Eg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{fm(n,a)}catch(o){kt(t,t.return,o)}}}function Tg(t,n,a){a.props=Ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function Mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function Ag(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function Cf(t,n,a){try{var o=t.stateNode;US(o,t.type,a,n),o[xn]=n}catch(u){kt(t,t.return,u)}}function Rg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=lc));else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Uf(t,n,a),t=t.sibling;t!==null;)Uf(t,n,a),t=t.sibling}function Ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ql(t,n,a),t=t.sibling;t!==null;)Ql(t,n,a),t=t.sibling}function wg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[hn]=t,n[xn]=a}catch(d){kt(t,t.return,d)}}var la=!1,on=!1,Nf=!1,Cg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function fS(t,n){if(t=t.containerInfo,nd=mc,t=Hp(t),Cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,R=-1,z=-1,ne=0,_e=0,Me=t,re=null;t:for(;;){for(var ce;Me!==a||u!==0&&Me.nodeType!==3||(R=E+u),Me!==d||o!==0&&Me.nodeType!==3||(z=E+o),Me.nodeType===3&&(E+=Me.nodeValue.length),(ce=Me.firstChild)!==null;)re=Me,Me=ce;for(;;){if(Me===t)break t;if(re===a&&++ne===u&&(R=E),re===d&&++_e===o&&(z=E),(ce=Me.nextSibling)!==null)break;Me=re,re=Me.parentNode}Me=ce}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(id={focusedElem:t,selectionRange:a},mc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var it=Ms(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(it,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){kt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function Dg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ha(t,a),o&4&&yo(5,a);break;case 1:if(Ha(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){kt(a,a.return,E)}else{var u=Ms(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){kt(a,a.return,E)}}o&64&&Eg(a),o&512&&Mo(a,a.return);break;case 3:if(Ha(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fm(t,n)}catch(E){kt(a,a.return,E)}}break;case 27:n===null&&o&4&&wg(a);case 26:case 5:Ha(t,a),n===null&&o&4&&Ag(a),o&512&&Mo(a,a.return);break;case 12:Ha(t,a);break;case 13:Ha(t,a),o&4&&Lg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=SS.bind(null,a),BS(t,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||on,u=la;var d=on;la=o,(on=n)&&!d?Ga(t,a,(a.subtreeFlags&8772)!==0):Ha(t,a),la=u,on=d}break;case 30:break;default:Ha(t,a)}}function Ug(t){var n=t.alternate;n!==null&&(t.alternate=null,Ug(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Gs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Hn=!1;function ca(t,n,a){for(a=a.child;a!==null;)Ng(t,n,a),a=a.sibling}function Ng(t,n,a){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(Z,a)}catch{}switch(a.tag){case 26:on||Pi(a,n),ca(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Pi(a,n);var o=Zt,u=Hn;qa(a.type)&&(Zt=a.stateNode,Hn=!1),ca(t,n,a),Uo(a.stateNode),Zt=o,Hn=u;break;case 5:on||Pi(a,n);case 6:if(o=Zt,u=Hn,Zt=null,ca(t,n,a),Zt=o,Hn=u,Zt!==null)if(Hn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(d){kt(a,n,d)}else try{Zt.removeChild(a.stateNode)}catch(d){kt(a,n,d)}break;case 18:Zt!==null&&(Hn?(t=Zt,S0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),zo(t)):S0(Zt,a.stateNode));break;case 4:o=Zt,u=Hn,Zt=a.stateNode.containerInfo,Hn=!0,ca(t,n,a),Zt=o,Hn=u;break;case 0:case 11:case 14:case 15:on||za(2,a,n),on||za(4,a,n),ca(t,n,a);break;case 1:on||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Tg(a,n,o)),ca(t,n,a);break;case 21:ca(t,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,ca(t,n,a),on=o;break;default:ca(t,n,a)}}function Lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zo(t)}catch(a){kt(n,n.return,a)}}function dS(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Cg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Cg),n;default:throw Error(s(435,t.tag))}}function Lf(t,n){var a=dS(t);n.forEach(function(o){var u=yS.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,E=n,R=E;e:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){Zt=R.stateNode,Hn=!1;break e}break;case 5:Zt=R.stateNode,Hn=!1;break e;case 3:case 4:Zt=R.stateNode.containerInfo,Hn=!0;break e}R=R.return}if(Zt===null)throw Error(s(160));Ng(d,E,u),Zt=null,Hn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Og(n,t),n=n.sibling}var _i=null;function Og(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),o&4&&(za(3,t,t.return),yo(3,t),za(5,t,t.return));break;case 1:qn(n,t),Yn(t),o&512&&(on||a===null||Pi(a,a.return)),o&64&&la&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=_i;if(qn(n,t),Yn(t),o&512&&(on||a===null||Pi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ca]||d[hn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),An(d,o,a),d[hn]=t,nn(d),o=d;break e;case"link":var E=w0("link","href",u).get(o+(a.href||""));if(E){for(var R=0;R<E.length;R++)if(d=E[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(R,1);break t}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;case"meta":if(E=w0("meta","content",u).get(o+(a.content||""))){for(R=0;R<E.length;R++)if(d=E[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(R,1);break t}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[hn]=t,nn(d),o=d}t.stateNode=o}else C0(u,t.type,t.stateNode);else t.stateNode=R0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?C0(u,t.type,t.stateNode):R0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),o&512&&(on||a===null||Pi(a,a.return)),a!==null&&o&4&&Cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),o&512&&(on||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{Yt(u,"")}catch(ce){kt(t,t.return,ce)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Cf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Nf=!0);break;case 6:if(qn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ce){kt(t,t.return,ce)}}break;case 3:if(dc=null,u=_i,_i=uc(n.containerInfo),qn(n,t),_i=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{zo(n.containerInfo)}catch(ce){kt(t,t.return,ce)}Nf&&(Nf=!1,Pg(t));break;case 4:o=_i,_i=uc(t.stateNode.containerInfo),qn(n,t),Yn(t),_i=o;break;case 12:qn(n,t),Yn(t);break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zf=yt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Lf(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,ne=la,_e=on;if(la=ne||u,on=_e||z,qn(n,t),on=_e,la=ne,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||la||on||bs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,u)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=z.stateNode;var Me=z.memoizedProps.style,re=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(ce){kt(z,z.return,ce)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(ce){kt(z,z.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Lf(t,a))));break;case 19:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Lf(t,o)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Rg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Df(t);Ql(t,d,u);break;case 5:var E=a.stateNode;a.flags&32&&(Yt(E,""),a.flags&=-33);var R=Df(t);Ql(t,R,E);break;case 3:case 4:var z=a.stateNode.containerInfo,ne=Df(t);Uf(t,ne,z);break;default:throw Error(s(161))}}catch(_e){kt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Pg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Pg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Dg(t,n.alternate,n),n=n.sibling}function bs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),bs(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Tg(n,n.return,a),bs(n);break;case 27:Uo(n.stateNode);case 26:case 5:Pi(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}t=t.sibling}}function Ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:Ga(u,d,a),yo(4,d);break;case 1:if(Ga(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){kt(o,o.return,ne)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)um(z[u],R)}catch(ne){kt(o,o.return,ne)}}a&&E&64&&Eg(d),Mo(d,d.return);break;case 27:wg(d);case 26:case 5:Ga(u,d,a),a&&o===null&&E&4&&Ag(d),Mo(d,d.return);break;case 12:Ga(u,d,a);break;case 13:Ga(u,d,a),a&&E&4&&Lg(u,d);break;case 22:d.memoizedState===null&&Ga(u,d,a),Mo(d,d.return);break;case 30:break;default:Ga(u,d,a)}n=n.sibling}}function Of(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ro(a))}function Pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t))}function Ii(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ig(t,n,a,o),n=n.sibling}function Ig(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ii(t,n,a,o),u&2048&&yo(9,n);break;case 1:Ii(t,n,a,o);break;case 3:Ii(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t)));break;case 12:if(u&2048){Ii(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,E=d.id,R=d.onPostCommit;typeof R=="function"&&R(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){kt(n,n.return,z)}}else Ii(t,n,a,o);break;case 13:Ii(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,E=n.alternate,n.memoizedState!==null?d._visibility&2?Ii(t,n,a,o):bo(t,n):d._visibility&2?Ii(t,n,a,o):(d._visibility|=2,rr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Of(E,n);break;case 24:Ii(t,n,a,o),u&2048&&Pf(n.alternate,n);break;default:Ii(t,n,a,o)}}function rr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,E=n,R=a,z=o,ne=E.flags;switch(E.tag){case 0:case 11:case 15:rr(d,E,R,z,u),yo(8,E);break;case 23:break;case 22:var _e=E.stateNode;E.memoizedState!==null?_e._visibility&2?rr(d,E,R,z,u):bo(d,E):(_e._visibility|=2,rr(d,E,R,z,u)),u&&ne&2048&&Of(E.alternate,E);break;case 24:rr(d,E,R,z,u),u&&ne&2048&&Pf(E.alternate,E);break;default:rr(d,E,R,z,u)}n=n.sibling}}function bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:bo(a,o),u&2048&&Of(o.alternate,o);break;case 24:bo(a,o),u&2048&&Pf(o.alternate,o);break;default:bo(a,o)}n=n.sibling}}var Eo=8192;function or(t){if(t.subtreeFlags&Eo)for(t=t.child;t!==null;)Fg(t),t=t.sibling}function Fg(t){switch(t.tag){case 26:or(t),t.flags&Eo&&t.memoizedState!==null&&QS(_i,t.memoizedState,t.memoizedProps);break;case 5:or(t);break;case 3:case 4:var n=_i;_i=uc(t.stateNode.containerInfo),or(t),_i=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Eo,Eo=16777216,or(t),Eo=n):or(t));break;default:or(t)}}function Bg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function To(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Hg(o,t)}Bg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zg(t),t=t.sibling}function zg(t){switch(t.tag){case 0:case 11:case 15:To(t),t.flags&2048&&za(9,t,t.return);break;case 3:To(t);break;case 12:To(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):To(t);break;default:To(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Hg(o,t)}Bg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function Hg(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=t;yn!==null;){o=yn;var u=o.sibling,d=o.return;if(Ug(o),o===a){yn=null;break e}if(u!==null){u.return=d,yn=u;break e}yn=d}}}var hS={getCacheForType:function(t){var n=wn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},pS=typeof WeakMap=="function"?WeakMap:Map,It=0,Wt=null,gt=null,Et=0,Ft=0,Zn=null,Va=!1,lr=!1,If=!1,ua=0,en=0,ka=0,Es=0,Ff=0,ri=0,cr=0,Ao=null,Gn=null,Bf=!1,zf=0,$l=1/0,ec=null,ja=null,Tn=0,Xa=null,ur=null,fr=0,Hf=0,Gf=null,Gg=null,Ro=0,Vf=null;function Kn(){if((It&2)!==0&&Et!==0)return Et&-Et;if(I.T!==null){var t=Js;return t!==0?t:Zf()}return At()}function Vg(){ri===0&&(ri=(Et&536870912)===0||Nt?W():536870912);var t=si.current;return t!==null&&(t.flags|=32),ri}function Qn(t,n,a){(t===Wt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(dr(t,0),Wa(t,Et,ri,!1)),Ie(t,a),((It&2)===0||t!==Wt)&&(t===Wt&&((It&2)===0&&(Es|=a),en===4&&Wa(t,Et,ri,!1)),Fi(t))}function kg(t,n,a){if((It&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=o?vS(t,n):Xf(t,n,!0),d=o;do{if(u===0){lr&&!o&&Wa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!mS(a)){u=Xf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var R=t;u=Ao;var z=R.current.memoizedState.isDehydrated;if(z&&(dr(R,E).flags|=256),E=Xf(R,E,!1),E!==2){if(If&&!z){R.errorRecoveryDisabledLanes|=d,Es|=d,u=4;break e}d=Gn,Gn=u,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}u=E}if(d=!1,u!==2)continue}}if(u===1){dr(t,0),Wa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,ri,!Va);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=zf+300-yt(),10<u)){if(Wa(o,n,ri,!Va),He(o,0,!0)!==0)break e;o.timeoutHandle=_0(jg.bind(null,o,a,Gn,ec,Bf,n,ri,Es,cr,Va,d,2,-0,0),u);break e}jg(o,a,Gn,ec,Bf,n,ri,Es,cr,Va,d,0,-0,0)}}break}while(!0);Fi(t)}function jg(t,n,a,o,u,d,E,R,z,ne,_e,Me,re,ce){if(t.timeoutHandle=-1,Me=n.subtreeFlags,(Me&8192||(Me&16785408)===16785408)&&(Oo={stylesheets:null,count:0,unsuspend:KS},Fg(n),Me=JS(),Me!==null)){t.cancelPendingCommit=Me(Qg.bind(null,t,n,d,a,o,u,E,R,z,_e,1,re,ce)),Wa(t,d,E,!ne);return}Qg(t,n,d,a,o,u,E,R,z)}function mS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Xn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,a,o){n&=~Ff,n&=~Es,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-we(u),E=1<<d;o[d]=-1,u&=~E}a!==0&&ge(t,a,n)}function tc(){return(It&6)===0?(wo(0),!1):!0}function kf(){if(gt!==null){if(Ft===0)var t=gt.return;else t=gt,na=_s=null,rf(t),ar=null,_o=0,t=gt;for(;t!==null;)bg(t.alternate,t),t=t.return;gt=null}}function dr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,LS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),kf(),Wt=t,gt=a=$i(t.current,null),Et=n,Ft=0,Zn=null,Va=!1,lr=Pe(t,n),If=!1,cr=ri=Ff=Es=ka=en=0,Gn=Ao=null,Bf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-we(o),d=1<<u;n|=t[u],o&=~d}return ua=n,bl(),a}function Xg(t,n){pt=null,I.H=Vl,n===lo||n===Nl?(n=lm(),Ft=3):n===sm?(n=lm(),Ft=4):Ft=n===cg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,gt===null&&(en=1,ql(t,ti(n,t.current)))}function Wg(){var t=I.H;return I.H=Vl,t===null?Vl:t}function qg(){var t=I.A;return I.A=hS,t}function jf(){en=4,Va||(Et&4194048)!==Et&&si.current!==null||(lr=!0),(ka&134217727)===0&&(Es&134217727)===0||Wt===null||Wa(Wt,Et,ri,!1)}function Xf(t,n,a){var o=It;It|=2;var u=Wg(),d=qg();(Wt!==t||Et!==n)&&(ec=null,dr(t,n)),n=!1;var E=en;e:do try{if(Ft!==0&&gt!==null){var R=gt,z=Zn;switch(Ft){case 8:kf(),E=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var ne=Ft;if(Ft=0,Zn=null,hr(t,R,z,ne),a&&lr){E=0;break e}break;default:ne=Ft,Ft=0,Zn=null,hr(t,R,z,ne)}}gS(),E=en;break}catch(_e){Xg(t,_e)}while(!0);return n&&t.shellSuspendCounter++,na=_s=null,It=o,I.H=u,I.A=d,gt===null&&(Wt=null,Et=0,bl()),E}function gS(){for(;gt!==null;)Yg(gt)}function vS(t,n){var a=It;It|=2;var o=Wg(),u=qg();Wt!==t||Et!==n?(ec=null,$l=yt()+500,dr(t,n)):lr=Pe(t,n);e:do try{if(Ft!==0&&gt!==null){n=gt;var d=Zn;t:switch(Ft){case 1:Ft=0,Zn=null,hr(t,n,d,1);break;case 2:case 9:if(rm(d)){Ft=0,Zn=null,Zg(n);break}n=function(){Ft!==2&&Ft!==9||Wt!==t||(Ft=7),Fi(t)},d.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:rm(d)?(Ft=0,Zn=null,Zg(n)):(Ft=0,Zn=null,hr(t,n,d,7));break;case 5:var E=null;switch(gt.tag){case 26:E=gt.memoizedState;case 5:case 27:var R=gt;if(!E||D0(E)){Ft=0,Zn=null;var z=R.sibling;if(z!==null)gt=z;else{var ne=R.return;ne!==null?(gt=ne,nc(ne)):gt=null}break t}}Ft=0,Zn=null,hr(t,n,d,5);break;case 6:Ft=0,Zn=null,hr(t,n,d,6);break;case 8:kf(),en=6;break e;default:throw Error(s(462))}}_S();break}catch(_e){Xg(t,_e)}while(!0);return na=_s=null,I.H=o,I.A=u,It=a,gt!==null?0:(Wt=null,Et=0,bl(),en)}function _S(){for(;gt!==null&&!Ct();)Yg(gt)}function Yg(t){var n=yg(t.alternate,t,ua);t.memoizedProps=t.pendingProps,n===null?nc(t):gt=n}function Zg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=mg(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=mg(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:rf(n);default:bg(a,n),n=gt=Kp(n,ua),n=yg(a,n,ua)}t.memoizedProps=t.pendingProps,n===null?nc(t):gt=n}function hr(t,n,a,o){na=_s=null,rf(n),ar=null,_o=0;var u=n.return;try{if(oS(t,u,n,a,Et)){en=1,ql(t,ti(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;en=1,ql(t,ti(a,t.current)),gt=null;return}n.flags&32768?(Nt||o===1?t=!0:lr||(Et&536870912)!==0?t=!1:(Va=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Kg(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){Kg(n,Va);return}t=n.return;var a=cS(n.alternate,n,ua);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);en===0&&(en=5)}function Kg(t,n){do{var a=uS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);en=6,gt=null}function Qg(t,n,a,o,u,d,E,R,z){t.cancelPendingCommit=null;do ic();while(Tn!==0);if((It&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Ou,Te(t,a,d,E,R,z),t===Wt&&(gt=Wt=null,Et=0),ur=n,Xa=t,fr=a,Hf=d,Gf=u,Gg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,MS(bt,function(){return n0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=H.p,H.p=2,E=It,It|=4;try{fS(t,n,a)}finally{It=E,H.p=u,I.T=o}}Tn=1,Jg(),$g(),e0()}}function Jg(){if(Tn===1){Tn=0;var t=Xa,n=ur,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=It;It|=4;try{Og(n,t);var d=id,E=Hp(t.containerInfo),R=d.focusedElem,z=d.selectionRange;if(E!==R&&R&&R.ownerDocument&&zp(R.ownerDocument.documentElement,R)){if(z!==null&&Cu(R)){var ne=z.start,_e=z.end;if(_e===void 0&&(_e=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(_e,R.value.length);else{var Me=R.ownerDocument||document,re=Me&&Me.defaultView||window;if(re.getSelection){var ce=re.getSelection(),it=R.textContent.length,et=Math.min(z.start,it),Gt=z.end===void 0?et:Math.min(z.end,it);!ce.extend&&et>Gt&&(E=Gt,Gt=et,et=E);var Y=Bp(R,et),X=Bp(R,Gt);if(Y&&X&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var $=Me.createRange();$.setStart(Y.node,Y.offset),ce.removeAllRanges(),et>Gt?(ce.addRange($),ce.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ce.addRange($))}}}}for(Me=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Me.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var xe=Me[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}mc=!!nd,id=nd=null}finally{It=u,H.p=o,I.T=a}}t.current=n,Tn=2}}function $g(){if(Tn===2){Tn=0;var t=Xa,n=ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=It;It|=4;try{Dg(t,n.alternate,n)}finally{It=u,H.p=o,I.T=a}}Tn=3}}function e0(){if(Tn===4||Tn===3){Tn=0,rt();var t=Xa,n=ur,a=fr,o=Gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,ur=Xa=null,t0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ja=null),Ot(a),n=n.stateNode,le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(Z,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=H.p,H.p=2,I.T=null;try{for(var d=t.onRecoverableError,E=0;E<o.length;E++){var R=o[E];d(R.value,{componentStack:R.stack})}}finally{I.T=n,H.p=u}}(fr&3)!==0&&ic(),Fi(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Vf?Ro++:(Ro=0,Vf=t):Ro=0,wo(0)}}function t0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ro(n)))}function ic(t){return Jg(),$g(),e0(),n0()}function n0(){if(Tn!==5)return!1;var t=Xa,n=Hf;Hf=0;var a=Ot(fr),o=I.T,u=H.p;try{H.p=32>a?32:a,I.T=null,a=Gf,Gf=null;var d=Xa,E=fr;if(Tn=0,ur=Xa=null,fr=0,(It&6)!==0)throw Error(s(331));var R=It;if(It|=4,zg(d.current),Ig(d,d.current,E,a),It=R,wo(0,!1),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(Z,d)}catch{}return!0}finally{H.p=u,I.T=o,t0(t,n)}}function i0(t,n,a){n=ti(a,n),n=Sf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Ie(t,2),Fi(t))}function kt(t,n,a){if(t.tag===3)i0(t,t,a);else for(;n!==null;){if(n.tag===3){i0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ja===null||!ja.has(o))){t=ti(a,t),a=og(2),o=Pa(n,a,2),o!==null&&(lg(a,o,n,t),Ie(o,2),Fi(o));break}}n=n.return}}function Wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new pS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(If=!0,u.add(a),t=xS.bind(null,t,n,a),n.then(t,t))}function xS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(Et&a)===a&&(en===4||en===3&&(Et&62914560)===Et&&300>yt()-zf?(It&2)===0&&dr(t,0):Ff|=a,cr===Et&&(cr=0)),Fi(t)}function a0(t,n){n===0&&(n=De()),t=Ys(t,n),t!==null&&(Ie(t,n),Fi(t))}function SS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),a0(t,a)}function yS(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),a0(t,a)}function MS(t,n){return ht(t,n)}var ac=null,pr=null,qf=!1,sc=!1,Yf=!1,Ts=0;function Fi(t){t!==pr&&t.next===null&&(pr===null?ac=pr=t:pr=pr.next=t),sc=!0,qf||(qf=!0,ES())}function wo(t,n){if(!Yf&&sc){Yf=!0;do for(var a=!1,o=ac;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var E=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-we(42|t)+1)-1,d&=u&~(E&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,l0(o,d))}else d=Et,d=He(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Pe(o,d)||(a=!0,l0(o,d));o=o.next}while(a);Yf=!1}}function bS(){s0()}function s0(){sc=qf=!1;var t=0;Ts!==0&&(NS()&&(t=Ts),Ts=0);for(var n=yt(),a=null,o=ac;o!==null;){var u=o.next,d=r0(o,n);d===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(pr=a)):(a=o,(t!==0||(d&3)!==0)&&(sc=!0)),o=u}wo(t)}function r0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-we(d),R=1<<E,z=u[E];z===-1?((R&a)===0||(R&o)!==0)&&(u[E]=ct(R,n)):z<=n&&(t.expiredLanes|=R),d&=~R}if(n=Wt,a=Et,a=He(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&xt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&xt(o),Ot(a)){case 2:case 8:a=Mt;break;case 32:a=bt;break;case 268435456:a=N;break;default:a=bt}return o=o0.bind(null,t),a=ht(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&xt(o),t.callbackPriority=2,t.callbackNode=null,2}function o0(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ic()&&t.callbackNode!==a)return null;var o=Et;return o=He(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(kg(t,o,n),r0(t,yt()),t.callbackNode!=null&&t.callbackNode===a?o0.bind(null,t):null)}function l0(t,n){if(ic())return null;kg(t,n,!0)}function ES(){OS(function(){(It&6)!==0?ht(jt,bS):s0()})}function Zf(){return Ts===0&&(Ts=W()),Ts}function c0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gl(""+t)}function u0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function TS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=c0((u[xn]||null).action),E=o.submitter;E&&(n=(n=E[xn]||null)?c0(n.formAction):E.getAttribute("formAction"),n!==null&&(d=n,E=null));var R=new Sl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ts!==0){var z=E?u0(u,E):new FormData(u);mf(a,{pending:!0,data:z,method:u.method,action:d},null,z)}}else typeof d=="function"&&(R.preventDefault(),z=E?u0(u,E):new FormData(u),mf(a,{pending:!0,data:z,method:u.method,action:d},d,z))},currentTarget:u}]})}}for(var Kf=0;Kf<Lu.length;Kf++){var Qf=Lu[Kf],AS=Qf.toLowerCase(),RS=Qf[0].toUpperCase()+Qf.slice(1);vi(AS,"on"+RS)}vi(kp,"onAnimationEnd"),vi(jp,"onAnimationIteration"),vi(Xp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(jx,"onTransitionRun"),vi(Xx,"onTransitionStart"),vi(Wx,"onTransitionCancel"),vi(Wp,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function f0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var E=o.length-1;0<=E;E--){var R=o[E],z=R.instance,ne=R.currentTarget;if(R=R.listener,z!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ne;try{d(u)}catch(_e){Wl(_e)}u.currentTarget=null,d=z}else for(E=0;E<o.length;E++){if(R=o[E],z=R.instance,ne=R.currentTarget,R=R.listener,z!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ne;try{d(u)}catch(_e){Wl(_e)}u.currentTarget=null,d=z}}}}function vt(t,n){var a=n[zs];a===void 0&&(a=n[zs]=new Set);var o=t+"__bubble";a.has(o)||(d0(n,t,2,!1),a.add(o))}function Jf(t,n,a){var o=0;n&&(o|=4),d0(a,t,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function $f(t){if(!t[rc]){t[rc]=!0,dl.forEach(function(a){a!=="selectionchange"&&(wS.has(a)||Jf(a,!1,t),Jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[rc]||(n[rc]=!0,Jf("selectionchange",!1,n))}}function d0(t,n,a,o){switch(I0(n)){case 2:var u=ty;break;case 8:u=ny;break;default:u=hd}a=u.bind(null,n,a,t),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ed(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var R=o.stateNode.containerInfo;if(R===u)break;if(E===4)for(E=o.return;E!==null;){var z=E.tag;if((z===3||z===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;R!==null;){if(E=mi(R),E===null)return;if(z=E.tag,z===5||z===6||z===26||z===27){o=d=E;continue e}R=R.parentNode}}o=o.return}xp(function(){var ne=d,_e=_u(a),Me=[];e:{var re=qp.get(t);if(re!==void 0){var ce=Sl,it=t;switch(t){case"keypress":if(_l(a)===0)break e;case"keydown":case"keyup":ce=Mx;break;case"focusin":it="focus",ce=Eu;break;case"focusout":it="blur",ce=Eu;break;case"beforeblur":case"afterblur":ce=Eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Tx;break;case kp:case jp:case Xp:ce=hx;break;case Wp:ce=Rx;break;case"scroll":case"scrollend":ce=lx;break;case"wheel":ce=Cx;break;case"copy":case"cut":case"paste":ce=mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Ep;break;case"toggle":case"beforetoggle":ce=Ux}var et=(n&4)!==0,Gt=!et&&(t==="scroll"||t==="scrollend"),Y=et?re!==null?re+"Capture":null:re;et=[];for(var X=ne,$;X!==null;){var xe=X;if($=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||$===null||Y===null||(xe=qr(X,Y),xe!=null&&et.push(Do(X,xe,$))),Gt)break;X=X.return}0<et.length&&(re=new ce(re,it,null,a,_e),Me.push({event:re,listeners:et}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",re&&a!==vu&&(it=a.relatedTarget||a.fromElement)&&(mi(it)||it[wa]))break e;if((ce||re)&&(re=_e.window===_e?_e:(re=_e.ownerDocument)?re.defaultView||re.parentWindow:window,ce?(it=a.relatedTarget||a.toElement,ce=ne,it=it?mi(it):null,it!==null&&(Gt=c(it),et=it.tag,it!==Gt||et!==5&&et!==27&&et!==6)&&(it=null)):(ce=null,it=ne),ce!==it)){if(et=Mp,xe="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(et=Ep,xe="onPointerLeave",Y="onPointerEnter",X="pointer"),Gt=ce==null?re:Di(ce),$=it==null?re:Di(it),re=new et(xe,X+"leave",ce,a,_e),re.target=Gt,re.relatedTarget=$,xe=null,mi(_e)===ne&&(et=new et(Y,X+"enter",it,a,_e),et.target=$,et.relatedTarget=Gt,xe=et),Gt=xe,ce&&it)t:{for(et=ce,Y=it,X=0,$=et;$;$=mr($))X++;for($=0,xe=Y;xe;xe=mr(xe))$++;for(;0<X-$;)et=mr(et),X--;for(;0<$-X;)Y=mr(Y),$--;for(;X--;){if(et===Y||Y!==null&&et===Y.alternate)break t;et=mr(et),Y=mr(Y)}et=null}else et=null;ce!==null&&h0(Me,re,ce,et,!1),it!==null&&Gt!==null&&h0(Me,Gt,it,et,!0)}}e:{if(re=ne?Di(ne):window,ce=re.nodeName&&re.nodeName.toLowerCase(),ce==="select"||ce==="input"&&re.type==="file")var je=Np;else if(Dp(re))if(Lp)je=Gx;else{je=zx;var mt=Bx}else ce=re.nodeName,!ce||ce.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ne&&Ni(ne.elementType)&&(je=Np):je=Hx;if(je&&(je=je(t,ne))){Up(Me,je,a,_e);break e}mt&&mt(t,re,ne),t==="focusout"&&ne&&re.type==="number"&&ne.memoizedProps.value!=null&&In(re,"number",re.value)}switch(mt=ne?Di(ne):window,t){case"focusin":(Dp(mt)||mt.contentEditable==="true")&&(Xs=mt,Du=ne,to=null);break;case"focusout":to=Du=Xs=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Gp(Me,a,_e);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":Gp(Me,a,_e)}var Ze;if(Au)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else js?wp(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(Tp&&a.locale!=="ko"&&(js||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&js&&(Ze=Sp()):(Ua=_e,yu="value"in Ua?Ua.value:Ua.textContent,js=!0)),mt=oc(ne,tt),0<mt.length&&(tt=new bp(tt,t,null,a,_e),Me.push({event:tt,listeners:mt}),Ze?tt.data=Ze:(Ze=Cp(a),Ze!==null&&(tt.data=Ze)))),(Ze=Lx?Ox(t,a):Px(t,a))&&(tt=oc(ne,"onBeforeInput"),0<tt.length&&(mt=new bp("onBeforeInput","beforeinput",null,a,_e),Me.push({event:mt,listeners:tt}),mt.data=Ze)),TS(Me,t,ne,a,_e)}f0(Me,n)})}function Do(t,n,a){return{instance:t,listener:n,currentTarget:a}}function oc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=qr(t,a),u!=null&&o.unshift(Do(t,u,d)),u=qr(t,n),u!=null&&o.push(Do(t,u,d))),t.tag===3)return o;t=t.return}return[]}function mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function h0(t,n,a,o,u){for(var d=n._reactName,E=[];a!==null&&a!==o;){var R=a,z=R.alternate,ne=R.stateNode;if(R=R.tag,z!==null&&z===o)break;R!==5&&R!==26&&R!==27||ne===null||(z=ne,u?(ne=qr(a,d),ne!=null&&E.unshift(Do(a,ne,z))):u||(ne=qr(a,d),ne!=null&&E.push(Do(a,ne,z)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var CS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function p0(t){return(typeof t=="string"?t:""+t).replace(CS,`
`).replace(DS,"")}function m0(t,n){return n=p0(n),p0(t)===n}function lc(){}function Ht(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Yt(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Yt(t,""+o);break;case"className":ie(t,"class",o);break;case"tabIndex":ie(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ie(t,a,o);break;case"style":gi(t,o,d);break;case"data":if(n!=="object"){ie(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ht(t,n,"name",u.name,u,null),Ht(t,n,"formEncType",u.formEncType,u,null),Ht(t,n,"formMethod",u.formMethod,u,null),Ht(t,n,"formTarget",u.formTarget,u,null)):(Ht(t,n,"encType",u.encType,u,null),Ht(t,n,"method",u.method,u,null),Ht(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=lc);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=gl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),fe(t,"popover",o);break;case"xlinkActuate":J(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":J(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":J(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":J(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":J(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":J(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":J(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":J(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":J(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ml.get(a)||a,fe(t,a,o))}}function td(t,n,a,o,u,d){switch(a){case"style":gi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Yt(t,o):(typeof o=="number"||typeof o=="bigint")&&Yt(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=lc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[xn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):fe(t,a,o)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,d,E,a,null)}}u&&Ht(t,n,"srcSet",a.srcSet,a,null),o&&Ht(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var R=d=E=u=null,z=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":E=_e;break;case"checked":z=_e;break;case"defaultChecked":ne=_e;break;case"value":d=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(s(137,n));break;default:Ht(t,n,o,_e,a,null)}}Pn(t,d,R,z,ne,E,u,!1),Vt(t);return;case"select":vt("invalid",t),o=E=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":E=R;break;case"multiple":o=R;default:Ht(t,n,u,R,a,null)}n=d,a=E,t.multiple=!!o,n!=null?Fn(t,!!o,n,!1):a!=null&&Fn(t,!!o,a,!0);return;case"textarea":vt("invalid",t),d=u=o=null;for(E in a)if(a.hasOwnProperty(E)&&(R=a[E],R!=null))switch(E){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ht(t,n,E,R,a,null)}Pt(t,o,u,d),Vt(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ht(t,n,z,o,a,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Co.length;o++)vt(Co[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,ne,o,a,null)}return;default:if(Ni(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&td(t,n,_e,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ht(t,n,R,o,a,null))}function US(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,E=null,R=null,z=null,ne=null,_e=null;for(ce in a){var Me=a[ce];if(a.hasOwnProperty(ce)&&Me!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":z=Me;default:o.hasOwnProperty(ce)||Ht(t,n,ce,null,o,Me)}}for(var re in o){var ce=o[re];if(Me=a[re],o.hasOwnProperty(re)&&(ce!=null||Me!=null))switch(re){case"type":d=ce;break;case"name":u=ce;break;case"checked":ne=ce;break;case"defaultChecked":_e=ce;break;case"value":E=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==Me&&Ht(t,n,re,ce,o,Me)}}_t(t,E,R,z,ne,_e,d,u);return;case"select":ce=E=R=re=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":ce=z;default:o.hasOwnProperty(d)||Ht(t,n,d,null,o,z)}for(u in o)if(d=o[u],z=a[u],o.hasOwnProperty(u)&&(d!=null||z!=null))switch(u){case"value":re=d;break;case"defaultValue":R=d;break;case"multiple":E=d;default:d!==z&&Ht(t,n,u,d,o,z)}n=R,a=E,o=ce,re!=null?Fn(t,!!a,re,!1):!!o!=!!a&&(n!=null?Fn(t,!!a,n,!0):Fn(t,!!a,a?[]:"",!1));return;case"textarea":ce=re=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ht(t,n,R,null,o,u)}for(E in o)if(u=o[E],d=a[E],o.hasOwnProperty(E)&&(u!=null||d!=null))switch(E){case"value":re=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Ht(t,n,E,u,o,d)}Qi(t,re,ce);return;case"option":for(var it in a)if(re=a[it],a.hasOwnProperty(it)&&re!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:Ht(t,n,it,null,o,re)}for(z in o)if(re=o[z],ce=a[z],o.hasOwnProperty(z)&&re!==ce&&(re!=null||ce!=null))switch(z){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Ht(t,n,z,re,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)re=a[et],a.hasOwnProperty(et)&&re!=null&&!o.hasOwnProperty(et)&&Ht(t,n,et,null,o,re);for(ne in o)if(re=o[ne],ce=a[ne],o.hasOwnProperty(ne)&&re!==ce&&(re!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Ht(t,n,ne,re,o,ce)}return;default:if(Ni(n)){for(var Gt in a)re=a[Gt],a.hasOwnProperty(Gt)&&re!==void 0&&!o.hasOwnProperty(Gt)&&td(t,n,Gt,void 0,o,re);for(_e in o)re=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||re===ce||re===void 0&&ce===void 0||td(t,n,_e,re,o,ce);return}}for(var Y in a)re=a[Y],a.hasOwnProperty(Y)&&re!=null&&!o.hasOwnProperty(Y)&&Ht(t,n,Y,null,o,re);for(Me in o)re=o[Me],ce=a[Me],!o.hasOwnProperty(Me)||re===ce||re==null&&ce==null||Ht(t,n,Me,re,o,ce)}var nd=null,id=null;function cc(t){return t.nodeType===9?t:t.ownerDocument}function g0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sd=null;function NS(){var t=window.event;return t&&t.type==="popstate"?t===sd?!1:(sd=t,!0):(sd=null,!1)}var _0=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(t){return x0.resolve(null).then(t).catch(PS)}:_0;function PS(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function S0(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var E=t.ownerDocument;if(a&1&&Uo(E.documentElement),a&2&&Uo(E.body),a&4)for(a=E.head,Uo(a),E=a.firstChild;E;){var R=E.nextSibling,z=E.nodeName;E[Ca]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=R}}if(u===0){t.removeChild(d),zo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);zo(n)}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),Gs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function IS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ca])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function FS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function BS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var ld=null;function y0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function M0(t,n,a){switch(n=cc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Gs(t)}var oi=new Map,b0=new Set;function uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=H.d;H.d={f:zS,r:HS,D:GS,C:VS,L:kS,m:jS,X:WS,S:XS,M:qS};function zS(){var t=fa.f(),n=tc();return t||n}function HS(t){var n=Yi(t);n!==null&&n.tag===5&&n.type==="form"?km(n):fa.r(t)}var gr=typeof document>"u"?null:document;function E0(t,n,a){var o=gr;if(o&&typeof n=="string"&&n){var u=Xt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),b0.has(u)||(b0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",t),nn(n),o.head.appendChild(n)))}}function GS(t){fa.D(t),E0("dns-prefetch",t,null)}function VS(t,n){fa.C(t,n),E0("preconnect",t,n)}function kS(t,n,a){fa.L(t,n,a);var o=gr;if(o&&t&&n){var u='link[rel="preload"][as="'+Xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xt(a.imageSizes)+'"]')):u+='[href="'+Xt(t)+'"]';var d=u;switch(n){case"style":d=vr(t);break;case"script":d=_r(t)}oi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(d))||n==="script"&&o.querySelector(Lo(d))||(n=o.createElement("link"),An(n,"link",t),nn(n),o.head.appendChild(n)))}}function jS(t,n){fa.m(t,n);var a=gr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xt(o)+'"][href="'+Xt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=_r(t)}if(!oi.has(d)&&(t=g({rel:"modulepreload",href:t},n),oi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(d)))return}o=a.createElement("link"),An(o,"link",t),nn(o),a.head.appendChild(o)}}}function XS(t,n,a){fa.S(t,n,a);var o=gr;if(o&&t){var u=Zi(o).hoistableStyles,d=vr(t);n=n||"default";var E=u.get(d);if(!E){var R={loading:0,preload:null};if(E=o.querySelector(No(d)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(d))&&cd(t,a);var z=E=o.createElement("link");nn(z),An(z,"link",t),z._p=new Promise(function(ne,_e){z.onload=ne,z.onerror=_e}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,fc(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:R},u.set(d,E)}}}function WS(t,n){fa.X(t,n);var a=gr;if(a&&t){var o=Zi(a).hoistableScripts,u=_r(t),d=o.get(u);d||(d=a.querySelector(Lo(u)),d||(t=g({src:t,async:!0},n),(n=oi.get(u))&&ud(t,n),d=a.createElement("script"),nn(d),An(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function qS(t,n){fa.M(t,n);var a=gr;if(a&&t){var o=Zi(a).hoistableScripts,u=_r(t),d=o.get(u);d||(d=a.querySelector(Lo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=oi.get(u))&&ud(t,n),d=a.createElement("script"),nn(d),An(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function T0(t,n,a,o){var u=(u=ee.current)?uc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vr(a.href),a=Zi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=vr(a.href);var d=Zi(u).hoistableStyles,E=d.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=u.querySelector(No(t)))&&!d._p&&(E.instance=d,E.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),d||YS(u,t,a,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_r(a),a=Zi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function vr(t){return'href="'+Xt(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function A0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function YS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),nn(n),t.head.appendChild(n))}function _r(t){return'[src="'+Xt(t)+'"]'}function Lo(t){return"script[async]"+t}function R0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Xt(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),nn(o),An(o,"style",u),fc(o,a.precedence,t),n.instance=o;case"stylesheet":u=vr(a.href);var d=t.querySelector(No(u));if(d)return n.state.loading|=4,n.instance=d,nn(d),d;o=A0(a),(u=oi.get(u))&&cd(o,u),d=(t.ownerDocument||t).createElement("link"),nn(d);var E=d;return E._p=new Promise(function(R,z){E.onload=R,E.onerror=z}),An(d,"link",o),n.state.loading|=4,fc(d,a.precedence,t),n.instance=d;case"script":return d=_r(a.src),(u=t.querySelector(Lo(d)))?(n.instance=u,nn(u),u):(o=a,(u=oi.get(d))&&(o=g({},a),ud(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),nn(u),An(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,t));return n.instance}function fc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,E=0;E<o.length;E++){var R=o[E];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var dc=null;function w0(t,n,a){if(dc===null){var o=new Map,u=dc=new Map;u.set(a,o)}else u=dc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ca]||d[hn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(n)||"";E=t+E;var R=o.get(E);R?R.push(d):o.set(E,[d])}}return o}function C0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ZS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function D0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Oo=null;function KS(){}function QS(t,n,a){if(Oo===null)throw Error(s(475));var o=Oo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=vr(a.href),d=t.querySelector(No(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=hc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,nn(d);return}d=t.ownerDocument||t,a=A0(a),(u=oi.get(u))&&cd(a,u),d=d.createElement("link"),nn(d);var E=d;E._p=new Promise(function(R,z){E.onload=R,E.onerror=z}),An(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=hc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function JS(){if(Oo===null)throw Error(s(475));var t=Oo;return t.stylesheets&&t.count===0&&fd(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&fd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function hc(){if(this.count--,this.count===0){if(this.stylesheets)fd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pc=null;function fd(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pc=new Map,n.forEach($S,t),pc=null,hc.call(t))}function $S(t,n){if(!(n.state.loading&4)){var a=pc.get(t);if(a)var o=a.get(null);else{a=new Map,pc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var E=u[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),d=a.get(E)||o,d===o&&a.set(null,u),a.set(E,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Po={$$typeof:U,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function ey(t,n,a,o,u,d,E,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function U0(t,n,a,o,u,d,E,R,z,ne,_e,Me){return t=new ey(t,n,a,E,R,z,ne,Me),n=1,d===!0&&(n|=24),d=Wn(3,null,null,n),t.current=d,d.stateNode=t,n=Xu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Zu(d),t}function N0(t){return t?(t=Zs,t):Zs}function L0(t,n,a,o,u,d){u=N0(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Pa(t,o,n),a!==null&&(Qn(a,t,n),uo(a,t,n))}function O0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dd(t,n){O0(t,n),(t=t.alternate)&&O0(t,n)}function P0(t){if(t.tag===13){var n=Ys(t,67108864);n!==null&&Qn(n,t,67108864),dd(t,67108864)}}var mc=!0;function ty(t,n,a,o){var u=I.T;I.T=null;var d=H.p;try{H.p=2,hd(t,n,a,o)}finally{H.p=d,I.T=u}}function ny(t,n,a,o){var u=I.T;I.T=null;var d=H.p;try{H.p=8,hd(t,n,a,o)}finally{H.p=d,I.T=u}}function hd(t,n,a,o){if(mc){var u=pd(o);if(u===null)ed(t,n,o,gc,a),F0(t,o);else if(ay(u,t,n,a,o))o.stopPropagation();else if(F0(t,o),n&4&&-1<iy.indexOf(t)){for(;u!==null;){var d=Yi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Fe(d.pendingLanes);if(E!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var z=1<<31-we(E);R.entanglements[1]|=z,E&=~z}Fi(d),(It&6)===0&&($l=yt()+500,wo(0))}}break;case 13:R=Ys(d,2),R!==null&&Qn(R,d,2),tc(),dd(d,2)}if(d=pd(o),d===null&&ed(t,n,o,gc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ed(t,n,o,null,a)}}function pd(t){return t=_u(t),md(t)}var gc=null;function md(t){if(gc=null,t=mi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gc=t,null}function I0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case jt:return 2;case Mt:return 8;case bt:case Ge:return 32;case N:return 268435456;default:return 32}default:return 32}}var gd=!1,Ya=null,Za=null,Ka=null,Io=new Map,Fo=new Map,Qa=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F0(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Bo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Yi(n),n!==null&&P0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ay(t,n,a,o,u){switch(n){case"focusin":return Ya=Bo(Ya,t,n,a,o,u),!0;case"dragenter":return Za=Bo(Za,t,n,a,o,u),!0;case"mouseover":return Ka=Bo(Ka,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Io.set(d,Bo(Io.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Fo.set(d,Bo(Fo.get(d)||null,t,n,a,o,u)),!0}return!1}function B0(t){var n=mi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,pi(t.priority,function(){if(a.tag===13){var o=Kn();o=nt(o);var u=Ys(a,o);u!==null&&Qn(u,a,o),dd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=pd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return n=Yi(a),n!==null&&P0(n),t.blockedOn=a,!1;n.shift()}return!0}function z0(t,n,a){vc(t)&&a.delete(n)}function sy(){gd=!1,Ya!==null&&vc(Ya)&&(Ya=null),Za!==null&&vc(Za)&&(Za=null),Ka!==null&&vc(Ka)&&(Ka=null),Io.forEach(z0),Fo.forEach(z0)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,gd||(gd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,sy)))}var xc=null;function H0(t){xc!==t&&(xc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(md(o||a)===null)continue;break}var d=Yi(a);d!==null&&(t.splice(n,3),n-=3,mf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function zo(t){function n(z){return _c(z,t)}Ya!==null&&_c(Ya,t),Za!==null&&_c(Za,t),Ka!==null&&_c(Ka,t),Io.forEach(n),Fo.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)B0(a),a.blockedOn===null&&Qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],E=u[xn]||null;if(typeof d=="function")E||H0(a);else if(E){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,E=d[xn]||null)R=E.formAction;else if(md(u)!==null)continue}else R=E.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),H0(a)}}}function vd(t){this._internalRoot=t}Sc.prototype.render=vd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Kn();L0(a,o,t,n,null,null)},Sc.prototype.unmount=vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;L0(t.current,2,null,t,null,null),tc(),n[wa]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,t),a===0&&B0(t)}};var G0=e.version;if(G0!=="19.1.0")throw Error(s(527,G0,"19.1.0"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var ry={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{Z=yc.inject(ry),le=yc}catch{}}return Go.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=ig,d=ag,E=sg,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=U0(t,1,!1,null,null,a,o,u,d,E,R,null),t[wa]=n.current,$f(t),new vd(n)},Go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=ig,E=ag,R=sg,z=null,ne=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(ne=a.formState)),n=U0(t,1,!0,n,a??null,o,u,d,E,R,z,ne),n.context=N0(null),a=n.current,o=Kn(),o=nt(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,Ie(n,a),Fi(n),t[wa]=n.current,$f(t),new Sc(n)},Go.version="19.1.0",Go}var Q0;function gy(){if(Q0)return Sd.exports;Q0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Sd.exports=my(),Sd.exports}var vy=gy();/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var J0="popstate";function _y(r={}){function e(s,l){let{pathname:c,search:f,hash:p}=s.location;return oh("",{pathname:c,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:el(l)}return Sy(e,i,null,r)}function Jt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ki(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xy(){return Math.random().toString(36).substring(2,10)}function $0(r,e){return{usr:r.state,key:r.key,idx:e}}function oh(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Vr(e):e,state:i,key:e&&e.key||s||xy()}}function el({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Vr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function Sy(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",m=null,h=g();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function g(){return(f.state||{idx:null}).idx}function x(){p="POP";let y=g(),S=y==null?null:y-h;h=y,m&&m({action:p,location:C.location,delta:S})}function _(y,S){p="PUSH";let D=oh(C.location,y,S);h=g()+1;let U=$0(D,h),L=C.createHref(D);try{f.pushState(U,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(L)}c&&m&&m({action:p,location:C.location,delta:1})}function b(y,S){p="REPLACE";let D=oh(C.location,y,S);h=g();let U=$0(D,h),L=C.createHref(D);f.replaceState(U,"",L),c&&m&&m({action:p,location:C.location,delta:0})}function T(y){return yy(y)}let C={get action(){return p},get location(){return r(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(J0,x),m=y,()=>{l.removeEventListener(J0,x),m=null}},createHref(y){return e(l,y)},createURL:T,encodeLocation(y){let S=T(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:_,replace:b,go(y){return f.go(y)}};return C}function yy(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:el(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function r_(r,e,i="/"){return My(r,e,i,!1)}function My(r,e,i,s){let l=typeof e=="string"?Vr(e):e,c=ba(l.pathname||"/",i);if(c==null)return null;let f=o_(r);by(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let h=Oy(c);p=Ny(f[m],h,s)}return p}function o_(r,e=[],i=[],s="",l=!1){let c=(f,p,m=l,h)=>{let g={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&m)return;Jt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let x=Sa([s,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(Jt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),o_(f.children,e,_,x,m)),!(f.path==null&&!f.index)&&e.push({path:x,score:Dy(x,f.index),routesMeta:_})};return r.forEach((f,p)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))c(f,p);else for(let h of l_(f.path))c(f,p,!0,h)}),e}function l_(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=l_(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function by(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:Uy(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var Ey=/^:[\w-]+$/,Ty=3,Ay=2,Ry=1,wy=10,Cy=-2,ev=r=>r==="*";function Dy(r,e){let i=r.split("/"),s=i.length;return i.some(ev)&&(s+=Cy),e&&(s+=Ay),i.filter(l=>!ev(l)).reduce((l,c)=>l+(Ey.test(c)?Ty:c===""?Ry:wy),s)}function Uy(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function Ny(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],h=p===s.length-1,g=c==="/"?e:e.slice(c.length)||"/",x=nu({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},g),_=m.route;if(!x&&h&&i&&!s[s.length-1].route.index&&(x=nu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:Sa([c,x.pathname]),pathnameBase:By(Sa([c,x.pathnameBase])),route:_}),x.pathnameBase!=="/"&&(c=Sa([c,x.pathnameBase]))}return f}function nu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=Ly(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((h,{paramName:g,isOptional:x},_)=>{if(g==="*"){let T=p[_]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const b=p[_];return x&&!b?h[g]=void 0:h[g]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:r}}function Ly(r,e=!1,i=!0){ki(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function Oy(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ki(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ba(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var Py=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Iy(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Vr(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=tv(i.substring(1),"/"):c=tv(i,e)):c=e,{pathname:c,search:zy(s),hash:Hy(l)}}function tv(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ed(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Fy(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function c_(r){let e=Fy(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function u_(r,e,i,s=!1){let l;typeof r=="string"?l=Vr(r):(l={...r},Jt(!l.pathname||!l.pathname.includes("?"),Ed("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),Ed("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),Ed("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let x=e.length-1;if(!s&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),x-=1;l.pathname=_.join("/")}p=x>=0?e[x]:"/"}let m=Iy(l,p),h=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||g)&&(m.pathname+="/"),m}var Sa=r=>r.join("/").replace(/\/\/+/g,"/"),By=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),zy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Hy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Gy=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Vy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function ky(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var f_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function d_(r,e){let i=r;if(typeof i!="string"||!Py.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(f_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=ba(f.pathname,e);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{ki(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var h_=["POST","PUT","PATCH","DELETE"];new Set(h_);var jy=["GET",...h_];new Set(jy);var kr=me.createContext(null);kr.displayName="DataRouter";var uu=me.createContext(null);uu.displayName="DataRouterState";var Xy=me.createContext(!1),p_=me.createContext({isTransitioning:!1});p_.displayName="ViewTransition";var Wy=me.createContext(new Map);Wy.displayName="Fetchers";var qy=me.createContext(null);qy.displayName="Await";var hi=me.createContext(null);hi.displayName="Navigation";var al=me.createContext(null);al.displayName="Location";var Aa=me.createContext({outlet:null,matches:[],isDataRoute:!1});Aa.displayName="Route";var ip=me.createContext(null);ip.displayName="RouteError";var m_="REACT_ROUTER_ERROR",Yy="REDIRECT",Zy="ROUTE_ERROR_RESPONSE";function Ky(r){if(r.startsWith(`${m_}:${Yy}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Qy(r){if(r.startsWith(`${m_}:${Zy}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Gy(e.status,e.statusText,e.data)}catch{}}function Jy(r,{relative:e}={}){Jt(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=me.useContext(hi),{hash:l,pathname:c,search:f}=rl(r,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:Sa([i,c])),s.createHref({pathname:p,search:f,hash:l})}function sl(){return me.useContext(al)!=null}function Ra(){return Jt(sl(),"useLocation() may be used only in the context of a <Router> component."),me.useContext(al).location}var g_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function v_(r){me.useContext(hi).static||me.useLayoutEffect(r)}function $y(){let{isDataRoute:r}=me.useContext(Aa);return r?dM():eM()}function eM(){Jt(sl(),"useNavigate() may be used only in the context of a <Router> component.");let r=me.useContext(kr),{basename:e,navigator:i}=me.useContext(hi),{matches:s}=me.useContext(Aa),{pathname:l}=Ra(),c=JSON.stringify(c_(s)),f=me.useRef(!1);return v_(()=>{f.current=!0}),me.useCallback((m,h={})=>{if(ki(f.current,g_),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=u_(m,JSON.parse(c),l,h.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Sa([e,g.pathname])),(h.replace?i.replace:i.push)(g,h.state,h)},[e,i,c,l,r])}me.createContext(null);function rl(r,{relative:e}={}){let{matches:i}=me.useContext(Aa),{pathname:s}=Ra(),l=JSON.stringify(c_(i));return me.useMemo(()=>u_(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function tM(r,e){return __(r,e)}function __(r,e,i,s,l){var D;Jt(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=me.useContext(hi),{matches:f}=me.useContext(Aa),p=f[f.length-1],m=p?p.params:{},h=p?p.pathname:"/",g=p?p.pathnameBase:"/",x=p&&p.route;{let U=x&&x.path||"";S_(h,!x||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let _=Ra(),b;if(e){let U=typeof e=="string"?Vr(e):e;Jt(g==="/"||((D=U.pathname)==null?void 0:D.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),b=U}else b=_;let T=b.pathname||"/",C=T;if(g!=="/"){let U=g.replace(/^\//,"").split("/");C="/"+T.replace(/^\//,"").split("/").slice(U.length).join("/")}let y=r_(r,{pathname:C});ki(x||y!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),ki(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=rM(y&&y.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:Sa([g,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:Sa([g,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),f,i,s,l);return e&&S?me.createElement(al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},S):S}function nM(){let r=fM(),e=Vy(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=me.createElement(me.Fragment,null,me.createElement("p",null,"💿 Hey developer 👋"),me.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",me.createElement("code",{style:c},"ErrorBoundary")," or"," ",me.createElement("code",{style:c},"errorElement")," prop on your route.")),me.createElement(me.Fragment,null,me.createElement("h2",null,"Unexpected Application Error!"),me.createElement("h3",{style:{fontStyle:"italic"}},e),i?me.createElement("pre",{style:l},i):null,f)}var iM=me.createElement(nM,null),x_=class extends me.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=Qy(r.digest);i&&(r=i)}let e=r!==void 0?me.createElement(Aa.Provider,{value:this.props.routeContext},me.createElement(ip.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?me.createElement(aM,{error:r},e):e}};x_.contextType=Xy;var Td=new WeakMap;function aM({children:r,error:e}){let{basename:i}=me.useContext(hi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Ky(e.digest);if(s){let l=Td.get(e);if(l)throw l;let c=d_(s.location,i);if(f_&&!Td.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Td.set(e,f),f}return me.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function sM({routeContext:r,match:e,children:i}){let s=me.useContext(kr);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),me.createElement(Aa.Provider,{value:r},i)}function rM(r,e=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i==null?void 0:i.errors;if(f!=null){let g=c.findIndex(x=>x.route.id&&(f==null?void 0:f[x.route.id])!==void 0);Jt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let x=c[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=g),x.route.id){let{loaderData:_,errors:b}=i,T=x.route.loader&&!_.hasOwnProperty(x.route.id)&&(!b||b[x.route.id]===void 0);if(x.route.lazy||T){p=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let h=i&&s?(g,x)=>{var _,b;s(g,{location:i.location,params:((b=(_=i.matches)==null?void 0:_[0])==null?void 0:b.params)??{},unstable_pattern:ky(i.matches),errorInfo:x})}:void 0;return c.reduceRight((g,x,_)=>{let b,T=!1,C=null,y=null;i&&(b=f&&x.route.id?f[x.route.id]:void 0,C=x.route.errorElement||iM,p&&(m<0&&_===0?(S_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,y=null):m===_&&(T=!0,y=x.route.hydrateFallbackElement||null)));let S=e.concat(c.slice(0,_+1)),D=()=>{let U;return b?U=C:T?U=y:x.route.Component?U=me.createElement(x.route.Component,null):x.route.element?U=x.route.element:U=g,me.createElement(sM,{match:x,routeContext:{outlet:g,matches:S,isDataRoute:i!=null},children:U})};return i&&(x.route.ErrorBoundary||x.route.errorElement||_===0)?me.createElement(x_,{location:i.location,revalidation:i.revalidation,component:C,error:b,children:D(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:h}):D()},null)}function ap(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function oM(r){let e=me.useContext(kr);return Jt(e,ap(r)),e}function lM(r){let e=me.useContext(uu);return Jt(e,ap(r)),e}function cM(r){let e=me.useContext(Aa);return Jt(e,ap(r)),e}function sp(r){let e=cM(r),i=e.matches[e.matches.length-1];return Jt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function uM(){return sp("useRouteId")}function fM(){var s;let r=me.useContext(ip),e=lM("useRouteError"),i=sp("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[i]}function dM(){let{router:r}=oM("useNavigate"),e=sp("useNavigate"),i=me.useRef(!1);return v_(()=>{i.current=!0}),me.useCallback(async(l,c={})=>{ki(i.current,g_),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var nv={};function S_(r,e,i){!e&&!nv[r]&&(nv[r]=!0,ki(!1,i))}me.memo(hM);function hM({routes:r,future:e,state:i,onError:s}){return __(r,void 0,i,s,e)}function rs(r){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Jt(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),m=me.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Vr(i));let{pathname:h="/",search:g="",hash:x="",state:_=null,key:b="default"}=i,T=me.useMemo(()=>{let C=ba(h,p);return C==null?null:{location:{pathname:C,search:g,hash:x,state:_,key:b},navigationType:s}},[p,h,g,x,_,b,s]);return ki(T!=null,`<Router basename="${p}"> is not able to match the URL "${h}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:me.createElement(hi.Provider,{value:m},me.createElement(al.Provider,{children:e,value:T}))}function mM({children:r,location:e}){return tM(lh(r),e)}function lh(r,e=[]){let i=[];return me.Children.forEach(r,(s,l)=>{if(!me.isValidElement(s))return;let c=[...e,l];if(s.type===me.Fragment){i.push.apply(i,lh(s.props.children,c));return}Jt(s.type===rs,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=lh(s.props.children,c)),i.push(f)}),i}var Yc="get",Zc="application/x-www-form-urlencoded";function fu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function gM(r){return fu(r)&&r.tagName.toLowerCase()==="button"}function vM(r){return fu(r)&&r.tagName.toLowerCase()==="form"}function _M(r){return fu(r)&&r.tagName.toLowerCase()==="input"}function xM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function SM(r,e){return r.button===0&&(!e||e==="_self")&&!xM(r)}var Mc=null;function yM(){if(Mc===null)try{new FormData(document.createElement("form"),0),Mc=!1}catch{Mc=!0}return Mc}var MM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ad(r){return r!=null&&!MM.has(r)?(ki(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zc}"`),null):r}function bM(r,e){let i,s,l,c,f;if(vM(r)){let p=r.getAttribute("action");s=p?ba(p,e):null,i=r.getAttribute("method")||Yc,l=Ad(r.getAttribute("enctype"))||Zc,c=new FormData(r)}else if(gM(r)||_M(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?ba(m,e):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||Yc,l=Ad(r.getAttribute("formenctype"))||Ad(p.getAttribute("enctype"))||Zc,c=new FormData(p,r),!yM()){let{name:h,type:g,value:x}=r;if(g==="image"){let _=h?`${h}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else h&&c.append(h,x)}}else{if(fu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Yc,s=null,l=Zc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function rp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function EM(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&ba(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function TM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function AM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function RM(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await TM(c,i);return f.links?f.links():[]}return[]}));return UM(s.flat(1).filter(AM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function iv(r,e,i,s,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>{var g;return i[h].pathname!==m.pathname||((g=i[h].route.path)==null?void 0:g.endsWith("*"))&&i[h].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{var x;let g=s.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function wM(r,e,{includeHydrateFallback:i}={}){return CM(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function CM(r){return[...new Set(r)]}function DM(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function UM(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(DM(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function y_(){let r=me.useContext(kr);return rp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function NM(){let r=me.useContext(uu);return rp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var op=me.createContext(void 0);op.displayName="FrameworkContext";function M_(){let r=me.useContext(op);return rp(r,"You must render this element inside a <HydratedRouter> element"),r}function LM(r,e){let i=me.useContext(op),[s,l]=me.useState(!1),[c,f]=me.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:g,onTouchStart:x}=e,_=me.useRef(null);me.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let C=S=>{S.forEach(D=>{f(D.isIntersecting)})},y=new IntersectionObserver(C,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[r]),me.useEffect(()=>{if(s){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[s]);let b=()=>{l(!0)},T=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,_,{}]:[c,_,{onFocus:Vo(p,b),onBlur:Vo(m,T),onMouseEnter:Vo(h,b),onMouseLeave:Vo(g,T),onTouchStart:Vo(x,b)}]:[!1,_,{}]}function Vo(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function OM({page:r,...e}){let{router:i}=y_(),s=me.useMemo(()=>r_(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?me.createElement(IM,{page:r,matches:s,...e}):null}function PM(r){let{manifest:e,routeModules:i}=M_(),[s,l]=me.useState([]);return me.useEffect(()=>{let c=!1;return RM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function IM({page:r,matches:e,...i}){let s=Ra(),{future:l,manifest:c,routeModules:f}=M_(),{basename:p}=y_(),{loaderData:m,matches:h}=NM(),g=me.useMemo(()=>iv(r,e,h,c,s,"data"),[r,e,h,c,s]),x=me.useMemo(()=>iv(r,e,h,c,s,"assets"),[r,e,h,c,s]),_=me.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let C=new Set,y=!1;if(e.forEach(D=>{var L;let U=c.routes[D.route.id];!U||!U.hasLoader||(!g.some(B=>B.route.id===D.route.id)&&D.route.id in m&&((L=f[D.route.id])!=null&&L.shouldRevalidate)||U.hasClientLoader?y=!0:C.add(D.route.id))}),C.size===0)return[];let S=EM(r,p,l.unstable_trailingSlashAwareDataRequests,"data");return y&&C.size>0&&S.searchParams.set("_routes",e.filter(D=>C.has(D.route.id)).map(D=>D.route.id).join(",")),[S.pathname+S.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,s,c,g,e,r,f]),b=me.useMemo(()=>wM(x,c),[x,c]),T=PM(x);return me.createElement(me.Fragment,null,_.map(C=>me.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),b.map(C=>me.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),T.map(({key:C,link:y})=>me.createElement("link",{key:C,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function FM(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var BM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{BM&&(window.__reactRouterVersion="7.13.0")}catch{}function zM({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=me.useRef();l.current==null&&(l.current=_y({window:s,v5Compat:!0}));let c=l.current,[f,p]=me.useState({action:c.action,location:c.location}),m=me.useCallback(h=>{i===!1?p(h):me.startTransition(()=>p(h))},[i]);return me.useLayoutEffect(()=>c.listen(m),[c,m]),me.createElement(pM,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var b_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Or=me.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:h,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:_,...b},T){let{basename:C,unstable_useTransitions:y}=me.useContext(hi),S=typeof h=="string"&&b_.test(h),D=d_(h,C);h=D.to;let U=Jy(h,{relative:l}),[L,B,G]=LM(s,b),k=kM(h,{replace:f,state:p,target:m,preventScrollReset:g,relative:l,viewTransition:x,unstable_defaultShouldRevalidate:_,unstable_useTransitions:y});function A(he){e&&e(he),he.defaultPrevented||k(he)}let O=me.createElement("a",{...b,...G,href:D.absoluteURL||U,onClick:D.isExternal||c?e:A,ref:FM(T,B),target:m,"data-discover":!S&&i==="render"?"true":void 0});return L&&!S?me.createElement(me.Fragment,null,O,me.createElement(OM,{page:U})):O});Or.displayName="Link";var HM=me.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},g){let x=rl(f,{relative:h.relative}),_=Ra(),b=me.useContext(uu),{navigator:T,basename:C}=me.useContext(hi),y=b!=null&&YM(x)&&p===!0,S=T.encodeLocation?T.encodeLocation(x).pathname:x.pathname,D=_.pathname,U=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(D=D.toLowerCase(),U=U?U.toLowerCase():null,S=S.toLowerCase()),U&&C&&(U=ba(U,C)||U);const L=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let B=D===S||!l&&D.startsWith(S)&&D.charAt(L)==="/",G=U!=null&&(U===S||!l&&U.startsWith(S)&&U.charAt(S.length)==="/"),k={isActive:B,isPending:G,isTransitioning:y},A=B?e:void 0,O;typeof s=="function"?O=s(k):O=[s,B?"active":null,G?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let he=typeof c=="function"?c(k):c;return me.createElement(Or,{...h,"aria-current":A,className:O,ref:g,style:he,to:f,viewTransition:p},typeof m=="function"?m(k):m)});HM.displayName="NavLink";var GM=me.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=Yc,action:p,onSubmit:m,relative:h,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:_,...b},T)=>{let{unstable_useTransitions:C}=me.useContext(hi),y=WM(),S=qM(p,{relative:h}),D=f.toLowerCase()==="get"?"get":"post",U=typeof p=="string"&&b_.test(p),L=B=>{if(m&&m(B),B.defaultPrevented)return;B.preventDefault();let G=B.nativeEvent.submitter,k=(G==null?void 0:G.getAttribute("formmethod"))||f,A=()=>y(G||B.currentTarget,{fetcherKey:e,method:k,navigate:i,replace:l,state:c,relative:h,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:_});C&&i!==!1?me.startTransition(()=>A()):A()};return me.createElement("form",{ref:T,method:D,action:S,onSubmit:s?m:L,...b,"data-discover":!U&&r==="render"?"true":void 0})});GM.displayName="Form";function VM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function E_(r){let e=me.useContext(kr);return Jt(e,VM(r)),e}function kM(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let h=$y(),g=Ra(),x=rl(r,{relative:c});return me.useCallback(_=>{if(SM(_,e)){_.preventDefault();let b=i!==void 0?i:el(g)===el(x),T=()=>h(r,{replace:b,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p});m?me.startTransition(()=>T()):T()}},[g,h,x,i,s,e,r,l,c,f,p,m])}var jM=0,XM=()=>`__${String(++jM)}__`;function WM(){let{router:r}=E_("useSubmit"),{basename:e}=me.useContext(hi),i=uM(),s=r.fetch,l=r.navigate;return me.useCallback(async(c,f={})=>{let{action:p,method:m,encType:h,formData:g,body:x}=bM(c,e);if(f.navigate===!1){let _=f.fetcherKey||XM();await s(_,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:x,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:x,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function qM(r,{relative:e}={}){let{basename:i}=me.useContext(hi),s=me.useContext(Aa);Jt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...rl(r||".",{relative:e})},f=Ra();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(g=>g==="")){p.delete("index"),m.filter(x=>x).forEach(x=>p.append("index",x));let g=p.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Sa([i,c.pathname])),el(c)}function YM(r,{relative:e}={}){let i=me.useContext(p_);Jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=E_("useViewTransitionState"),l=rl(r,{relative:e});if(!i.isTransitioning)return!1;let c=ba(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=ba(i.nextLocation.pathname,s)||i.nextLocation.pathname;return nu(l.pathname,f)!=null||nu(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="183",ZM=0,av=1,KM=2,Kc=1,QM=2,Qo=3,cs=0,kn=1,xa=2,ya=0,Pr=1,ch=2,sv=3,rv=4,JM=5,Ls=100,$M=101,eb=102,tb=103,nb=104,ib=200,ab=201,sb=202,rb=203,uh=204,fh=205,ob=206,lb=207,cb=208,ub=209,fb=210,db=211,hb=212,pb=213,mb=214,dh=0,hh=1,ph=2,Fr=3,mh=4,gh=5,vh=6,_h=7,T_=0,gb=1,vb=2,Vi=0,A_=1,R_=2,w_=3,C_=4,D_=5,U_=6,N_=7,L_=300,Bs=301,Br=302,Rd=303,wd=304,du=306,xh=1e3,ei=1001,Sh=1002,Rn=1003,_b=1004,bc=1005,dn=1006,Cd=1007,Ps=1008,ui=1009,O_=1010,P_=1011,tl=1012,cp=1013,ji=1014,Ti=1015,Xi=1016,up=1017,fp=1018,nl=1020,I_=35902,F_=35899,B_=1021,z_=1022,fi=1023,Ea=1026,Is=1027,H_=1028,dp=1029,zr=1030,hp=1031,pp=1033,Qc=33776,Jc=33777,$c=33778,eu=33779,yh=35840,Mh=35841,bh=35842,Eh=35843,Th=36196,Ah=37492,Rh=37496,wh=37488,Ch=37489,Dh=37490,Uh=37491,Nh=37808,Lh=37809,Oh=37810,Ph=37811,Ih=37812,Fh=37813,Bh=37814,zh=37815,Hh=37816,Gh=37817,Vh=37818,kh=37819,jh=37820,Xh=37821,Wh=36492,qh=36494,Yh=36495,Zh=36283,Kh=36284,Qh=36285,Jh=36286,xb=3200,Sb=0,yb=1,os="",ci="srgb",Hr="srgb-linear",iu="linear",Bt="srgb",xr=7680,ov=519,Mb=512,bb=513,Eb=514,mp=515,Tb=516,Ab=517,gp=518,Rb=519,lv=35044,cv="300 es",Gi=2e3,au=2001;function wb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cb(){const r=su("canvas");return r.style.display="block",r}const uv={};function fv(...r){const e="THREE."+r.shift();console.log(e,...r)}function G_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function at(...r){r=G_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function wt(...r){r=G_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function ru(...r){const e=r.join(" ");e in uv||(uv[e]=!0,at(...r))}function Db(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Ub={[dh]:hh,[ph]:vh,[mh]:_h,[Fr]:gh,[hh]:dh,[vh]:ph,[_h]:mh,[gh]:Fr};class jr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dd=Math.PI/180,$h=180/Math.PI;function ol(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function St(r,e,i){return Math.max(e,Math.min(i,r))}function Nb(r,e){return(r%e+e)%e}function Ud(r,e,i){return(1-i)*r+i*e}function ko(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,i=0){ot.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],g=s[l+2],x=s[l+3],_=c[f+0],b=c[f+1],T=c[f+2],C=c[f+3];if(x!==C||m!==_||h!==b||g!==T){let y=m*_+h*b+g*T+x*C;y<0&&(_=-_,b=-b,T=-T,C=-C,y=-y);let S=1-p;if(y<.9995){const D=Math.acos(y),U=Math.sin(D);S=Math.sin(S*D)/U,p=Math.sin(p*D)/U,m=m*S+_*p,h=h*S+b*p,g=g*S+T*p,x=x*S+C*p}else{m=m*S+_*p,h=h*S+b*p,g=g*S+T*p,x=x*S+C*p;const D=1/Math.sqrt(m*m+h*h+g*g+x*x);m*=D,h*=D,g*=D,x*=D}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],g=s[l+3],x=c[f],_=c[f+1],b=c[f+2],T=c[f+3];return e[i]=p*T+g*x+m*b-h*_,e[i+1]=m*T+g*_+h*x-p*b,e[i+2]=h*T+g*b+p*_-m*x,e[i+3]=g*T-p*x-m*_-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),g=p(l/2),x=p(c/2),_=m(s/2),b=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=_*g*x+h*b*T,this._y=h*b*x-_*g*T,this._z=h*g*T+_*b*x,this._w=h*g*x-_*b*T;break;case"YXZ":this._x=_*g*x+h*b*T,this._y=h*b*x-_*g*T,this._z=h*g*T-_*b*x,this._w=h*g*x+_*b*T;break;case"ZXY":this._x=_*g*x-h*b*T,this._y=h*b*x+_*g*T,this._z=h*g*T+_*b*x,this._w=h*g*x-_*b*T;break;case"ZYX":this._x=_*g*x-h*b*T,this._y=h*b*x+_*g*T,this._z=h*g*T-_*b*x,this._w=h*g*x+_*b*T;break;case"YZX":this._x=_*g*x+h*b*T,this._y=h*b*x+_*g*T,this._z=h*g*T-_*b*x,this._w=h*g*x-_*b*T;break;case"XZY":this._x=_*g*x-h*b*T,this._y=h*b*x-_*g*T,this._z=h*g*T+_*b*x,this._w=h*g*x+_*b*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],g=i[6],x=i[10],_=s+p+x;if(_>0){const b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(g-m)*b,this._y=(c-h)*b,this._z=(f-l)*b}else if(s>p&&s>x){const b=2*Math.sqrt(1+s-p-x);this._w=(g-m)/b,this._x=.25*b,this._y=(l+f)/b,this._z=(c+h)/b}else if(p>x){const b=2*Math.sqrt(1+p-s-x);this._w=(c-h)/b,this._x=(l+f)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+x-s-p);this._w=(f-l)/b,this._x=(c+h)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,g=i._w;return this._x=s*g+f*p+l*h-c*m,this._y=l*g+f*m+c*p-s*h,this._z=c*g+f*h+s*m-l*p,this._w=f*g-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,s=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(dv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(dv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),g=2*(p*i-c*l),x=2*(c*s-f*i);return this.x=i+m*h+f*x-p*g,this.y=s+m*g+p*h-c*x,this.z=l+m*x+c*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new oe,dv=new Xr;class ft{constructor(e,i,s,l,c,f,p,m,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],g=s[4],x=s[7],_=s[2],b=s[5],T=s[8],C=l[0],y=l[3],S=l[6],D=l[1],U=l[4],L=l[7],B=l[2],G=l[5],k=l[8];return c[0]=f*C+p*D+m*B,c[3]=f*y+p*U+m*G,c[6]=f*S+p*L+m*k,c[1]=h*C+g*D+x*B,c[4]=h*y+g*U+x*G,c[7]=h*S+g*L+x*k,c[2]=_*C+b*D+T*B,c[5]=_*y+b*U+T*G,c[8]=_*S+b*L+T*k,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8];return i*f*g-i*p*h-s*c*g+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],x=g*f-p*h,_=p*m-g*c,b=h*c-f*m,T=i*x+s*_+l*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(l*h-g*s)*C,e[2]=(p*s-l*f)*C,e[3]=_*C,e[4]=(g*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=b*C,e[7]=(s*m-h*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Ld.makeScale(e,i)),this}rotate(e){return this.premultiply(Ld.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ld.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ld=new ft,hv=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pv=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){const r={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Bt&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Bt&&(l.r=Ir(l.r),l.g=Ir(l.g),l.b=Ir(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===os?iu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ru("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ru("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Hr]:{primaries:e,whitePoint:s,transfer:iu,toXYZ:hv,fromXYZ:pv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:Bt,toXYZ:hv,fromXYZ:pv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const Tt=Lb();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Sr;class Ob{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Sr===void 0&&(Sr=su("canvas")),Sr.width=e.width,Sr.height=e.height;const l=Sr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Sr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=su("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ma(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pb=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Od(l[f].image)):c.push(Od(l[f]))}else c=Od(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Od(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ob.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Ib=0;const Pd=new oe;class On extends jr{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=ei,l=ei,c=dn,f=Ps,p=fi,m=ui,h=On.DEFAULT_ANISOTROPY,g=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=ol(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pd).x}get height(){return this.source.getSize(Pd).y}get depth(){return this.source.getSize(Pd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xh:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xh:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=L_;On.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],g=m[4],x=m[8],_=m[1],b=m[5],T=m[9],C=m[2],y=m[6],S=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+C)<.1&&Math.abs(T+y)<.1&&Math.abs(h+b+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(h+1)/2,L=(b+1)/2,B=(S+1)/2,G=(g+_)/4,k=(x+C)/4,A=(T+y)/4;return U>L&&U>B?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=G/s,c=k/s):L>B?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=G/l,c=A/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=k/c,l=A/c),this.set(s,l,c,i),this}let D=Math.sqrt((y-T)*(y-T)+(x-C)*(x-C)+(_-g)*(_-g));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(x-C)/D,this.z=(_-g)/D,this.w=Math.acos((h+b+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fb extends jr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new On(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Fb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class V_ extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bb extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(e,i,s,l,c,f,p,m,h,g,x,_,b,T,C,y){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,g,x,_,b,T,C,y)}set(e,i,s,l,c,f,p,m,h,g,x,_,b,T,C,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=p,S[13]=m,S[2]=h,S[6]=g,S[10]=x,S[14]=_,S[3]=b,S[7]=T,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/yr.setFromMatrixColumn(e,0).length(),c=1/yr.setFromMatrixColumn(e,1).length(),f=1/yr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const _=f*g,b=f*x,T=p*g,C=p*x;i[0]=m*g,i[4]=-m*x,i[8]=h,i[1]=b+T*h,i[5]=_-C*h,i[9]=-p*m,i[2]=C-_*h,i[6]=T+b*h,i[10]=f*m}else if(e.order==="YXZ"){const _=m*g,b=m*x,T=h*g,C=h*x;i[0]=_+C*p,i[4]=T*p-b,i[8]=f*h,i[1]=f*x,i[5]=f*g,i[9]=-p,i[2]=b*p-T,i[6]=C+_*p,i[10]=f*m}else if(e.order==="ZXY"){const _=m*g,b=m*x,T=h*g,C=h*x;i[0]=_-C*p,i[4]=-f*x,i[8]=T+b*p,i[1]=b+T*p,i[5]=f*g,i[9]=C-_*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const _=f*g,b=f*x,T=p*g,C=p*x;i[0]=m*g,i[4]=T*h-b,i[8]=_*h+C,i[1]=m*x,i[5]=C*h+_,i[9]=b*h-T,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const _=f*m,b=f*h,T=p*m,C=p*h;i[0]=m*g,i[4]=C-_*x,i[8]=T*x+b,i[1]=x,i[5]=f*g,i[9]=-p*g,i[2]=-h*g,i[6]=b*x+T,i[10]=_-C*x}else if(e.order==="XZY"){const _=f*m,b=f*h,T=p*m,C=p*h;i[0]=m*g,i[4]=-x,i[8]=h*g,i[1]=_*x+C,i[5]=f*g,i[9]=b*x-T,i[2]=T*x-b,i[6]=p*g,i[10]=C*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zb,e,Hb)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),$a.crossVectors(s,Jn),$a.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),$a.crossVectors(s,Jn)),$a.normalize(),Ec.crossVectors(Jn,$a),l[0]=$a.x,l[4]=Ec.x,l[8]=Jn.x,l[1]=$a.y,l[5]=Ec.y,l[9]=Jn.y,l[2]=$a.z,l[6]=Ec.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],g=s[1],x=s[5],_=s[9],b=s[13],T=s[2],C=s[6],y=s[10],S=s[14],D=s[3],U=s[7],L=s[11],B=s[15],G=l[0],k=l[4],A=l[8],O=l[12],he=l[1],V=l[5],te=l[9],se=l[13],ue=l[2],Q=l[6],I=l[10],H=l[14],de=l[3],ve=l[7],P=l[11],K=l[15];return c[0]=f*G+p*he+m*ue+h*de,c[4]=f*k+p*V+m*Q+h*ve,c[8]=f*A+p*te+m*I+h*P,c[12]=f*O+p*se+m*H+h*K,c[1]=g*G+x*he+_*ue+b*de,c[5]=g*k+x*V+_*Q+b*ve,c[9]=g*A+x*te+_*I+b*P,c[13]=g*O+x*se+_*H+b*K,c[2]=T*G+C*he+y*ue+S*de,c[6]=T*k+C*V+y*Q+S*ve,c[10]=T*A+C*te+y*I+S*P,c[14]=T*O+C*se+y*H+S*K,c[3]=D*G+U*he+L*ue+B*de,c[7]=D*k+U*V+L*Q+B*ve,c[11]=D*A+U*te+L*I+B*P,c[15]=D*O+U*se+L*H+B*K,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],g=e[2],x=e[6],_=e[10],b=e[14],T=e[3],C=e[7],y=e[11],S=e[15],D=m*b-h*_,U=p*b-h*x,L=p*_-m*x,B=f*b-h*g,G=f*_-m*g,k=f*x-p*g;return i*(C*D-y*U+S*L)-s*(T*D-y*B+S*G)+l*(T*U-C*B+S*k)-c*(T*L-C*G+y*k)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],x=e[9],_=e[10],b=e[11],T=e[12],C=e[13],y=e[14],S=e[15],D=i*p-s*f,U=i*m-l*f,L=i*h-c*f,B=s*m-l*p,G=s*h-c*p,k=l*h-c*m,A=g*C-x*T,O=g*y-_*T,he=g*S-b*T,V=x*y-_*C,te=x*S-b*C,se=_*S-b*y,ue=D*se-U*te+L*V+B*he-G*O+k*A;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/ue;return e[0]=(p*se-m*te+h*V)*Q,e[1]=(l*te-s*se-c*V)*Q,e[2]=(C*k-y*G+S*B)*Q,e[3]=(_*G-x*k-b*B)*Q,e[4]=(m*he-f*se-h*O)*Q,e[5]=(i*se-l*he+c*O)*Q,e[6]=(y*L-T*k-S*U)*Q,e[7]=(g*k-_*L+b*U)*Q,e[8]=(f*te-p*he+h*A)*Q,e[9]=(s*he-i*te-c*A)*Q,e[10]=(T*G-C*L+S*D)*Q,e[11]=(x*L-g*G-b*D)*Q,e[12]=(p*O-f*V-m*A)*Q,e[13]=(i*V-s*O+l*A)*Q,e[14]=(C*U-T*B-y*D)*Q,e[15]=(g*B-x*U+_*D)*Q,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,g=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,g*p+s,g*m-l*f,0,h*m-l*p,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,g=f+f,x=p+p,_=c*h,b=c*g,T=c*x,C=f*g,y=f*x,S=p*x,D=m*h,U=m*g,L=m*x,B=s.x,G=s.y,k=s.z;return l[0]=(1-(C+S))*B,l[1]=(b+L)*B,l[2]=(T-U)*B,l[3]=0,l[4]=(b-L)*G,l[5]=(1-(_+S))*G,l[6]=(y+D)*G,l[7]=0,l[8]=(T+U)*k,l[9]=(y-D)*k,l[10]=(1-(_+C))*k,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=yr.set(l[0],l[1],l[2]).length();const p=yr.set(l[4],l[5],l[6]).length(),m=yr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Si.copy(this);const h=1/f,g=1/p,x=1/m;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=x,Si.elements[9]*=x,Si.elements[10]*=x,i.setFromRotationMatrix(Si),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=Gi,m=!1){const h=this.elements,g=2*c/(i-e),x=2*c/(s-l),_=(i+e)/(i-e),b=(s+l)/(s-l);let T,C;if(m)T=c/(f-c),C=f*c/(f-c);else if(p===Gi)T=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===au)T=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=x,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=Gi,m=!1){const h=this.elements,g=2/(i-e),x=2/(s-l),_=-(i+e)/(i-e),b=-(s+l)/(s-l);let T,C;if(m)T=1/(f-c),C=f/(f-c);else if(p===Gi)T=-2/(f-c),C=-(f+c)/(f-c);else if(p===au)T=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=x,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const yr=new oe,Si=new ln,zb=new oe(0,0,0),Hb=new oe(1,1,1),$a=new oe,Ec=new oe,Jn=new oe,mv=new ln,gv=new Xr;class Ta{constructor(e=0,i=0,s=0,l=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],g=l[9],x=l[2],_=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return gv.setFromEuler(this),this.setFromQuaternion(gv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class k_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gb=0;const vv=new oe,Mr=new Xr,da=new ln,Tc=new oe,jo=new oe,Vb=new oe,kb=new Xr,_v=new oe(1,0,0),xv=new oe(0,1,0),Sv=new oe(0,0,1),yv={type:"added"},jb={type:"removed"},br={type:"childadded",child:null},Id={type:"childremoved",child:null};class jn extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new oe,i=new Ta,s=new Xr,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new ft}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Mr.setFromAxisAngle(e,i),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,i){return Mr.setFromAxisAngle(e,i),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(_v,e)}rotateY(e){return this.rotateOnAxis(xv,e)}rotateZ(e){return this.rotateOnAxis(Sv,e)}translateOnAxis(e,i){return vv.copy(e).applyQuaternion(this.quaternion),this.position.add(vv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(_v,e)}translateY(e){return this.translateOnAxis(xv,e)}translateZ(e){return this.translateOnAxis(Sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Tc.copy(e):Tc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(jo,Tc,this.up):da.lookAt(Tc,jo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Mr.setFromRotationMatrix(da),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yv),br.child=e,this.dispatchEvent(br),br.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(jb),Id.child=e,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yv),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,Vb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,kb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const x=m[h];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),g=f(e.images),x=f(e.shapes),_=f(e.skeletons),b=f(e.animations),T=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),b.length>0&&(s.animations=b),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(p){const m=[];for(const h in p){const g=p[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}jn.DEFAULT_UP=new oe(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ac extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xb={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),S=this._getHandJoint(h,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],_=g.position.distanceTo(x.position),b=.02,T=.005;h.inputState.pinching&&_>b+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=b-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ac;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const j_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Bd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Lt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Tt.workingColorSpace){if(e=Nb(e,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Bd(f,c,e+1/3),this.g=Bd(f,c,e),this.b=Bd(f,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const s=j_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Tt.workingToColorSpace(Un.copy(this),e),Math.round(St(Un.r*255,0,255))*65536+Math.round(St(Un.g*255,0,255))*256+Math.round(St(Un.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const g=(p+f)/2;if(p===f)m=0,h=0;else{const x=f-p;switch(h=g<=.5?x/(f+p):x/(2-f-p),f){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=ci){Tt.workingToColorSpace(Un.copy(this),e);const i=Un.r,s=Un.g,l=Un.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(es),this.setHSL(es.h+e,es.s+i,es.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(es),e.getHSL(Rc);const s=Ud(es.h,Rc.h,i),l=Ud(es.s,Rc.s,i),c=Ud(es.l,Rc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Lt;Lt.NAMES=j_;class Mv extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yi=new oe,ha=new oe,zd=new oe,pa=new oe,Er=new oe,Tr=new oe,bv=new oe,Hd=new oe,Gd=new oe,Vd=new oe,kd=new tn,jd=new tn,Xd=new tn;class Ei{constructor(e=new oe,i=new oe,s=new oe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),yi.subVectors(e,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){yi.subVectors(l,i),ha.subVectors(s,i),zd.subVectors(e,i);const f=yi.dot(yi),p=yi.dot(ha),m=yi.dot(zd),h=ha.dot(ha),g=ha.dot(zd),x=f*h-p*p;if(x===0)return c.set(0,0,0),null;const _=1/x,b=(h*m-p*g)*_,T=(f*g-p*m)*_;return c.set(1-b-T,T,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(f,pa.y),m.addScaledVector(p,pa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return kd.setScalar(0),jd.setScalar(0),Xd.setScalar(0),kd.fromBufferAttribute(e,i),jd.fromBufferAttribute(e,s),Xd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(kd,c.x),f.addScaledVector(jd,c.y),f.addScaledVector(Xd,c.z),f}static isFrontFacing(e,i,s,l){return yi.subVectors(s,i),ha.subVectors(e,i),yi.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),yi.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ei.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Er.subVectors(l,s),Tr.subVectors(c,s),Hd.subVectors(e,s);const m=Er.dot(Hd),h=Tr.dot(Hd);if(m<=0&&h<=0)return i.copy(s);Gd.subVectors(e,l);const g=Er.dot(Gd),x=Tr.dot(Gd);if(g>=0&&x<=g)return i.copy(l);const _=m*x-g*h;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Er,f);Vd.subVectors(e,c);const b=Er.dot(Vd),T=Tr.dot(Vd);if(T>=0&&b<=T)return i.copy(c);const C=b*h-m*T;if(C<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Tr,p);const y=g*T-b*x;if(y<=0&&x-g>=0&&b-T>=0)return bv.subVectors(c,l),p=(x-g)/(x-g+(b-T)),i.copy(l).addScaledVector(bv,p);const S=1/(y+C+_);return f=C*S,p=_*S,i.copy(s).addScaledVector(Er,f).addScaledVector(Tr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ll{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Mi):Mi.fromBufferAttribute(c,f),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Cc.subVectors(this.max,Xo),Ar.subVectors(e.a,Xo),Rr.subVectors(e.b,Xo),wr.subVectors(e.c,Xo),ts.subVectors(Rr,Ar),ns.subVectors(wr,Rr),As.subVectors(Ar,wr);let i=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-As.z,As.y,ts.z,0,-ts.x,ns.z,0,-ns.x,As.z,0,-As.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-As.y,As.x,0];return!Wd(i,Ar,Rr,wr,Cc)||(i=[1,0,0,0,1,0,0,0,1],!Wd(i,Ar,Rr,wr,Cc))?!1:(Dc.crossVectors(ts,ns),i=[Dc.x,Dc.y,Dc.z],Wd(i,Ar,Rr,wr,Cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Mi=new oe,wc=new ll,Ar=new oe,Rr=new oe,wr=new oe,ts=new oe,ns=new oe,As=new oe,Xo=new oe,Cc=new oe,Dc=new oe,Rs=new oe;function Wd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Rs.fromArray(r,c);const p=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),m=e.dot(Rs),h=i.dot(Rs),g=s.dot(Rs);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>p)return!1}return!0}const fn=new oe,Uc=new ot;let Wb=0;class Ri{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=lv,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(e),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ko(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lv&&(e.usage=this.usage),e}}class X_ extends Ri{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class W_ extends Ri{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class wi extends Ri{constructor(e,i,s){super(new Float32Array(e),i,s)}}const qb=new ll,Wo=new oe,qd=new oe;class hu{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):qb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(qd)),this.expandByPoint(Wo.copy(e.center).sub(qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Yb=0;const li=new ln,Yd=new jn,Cr=new oe,$n=new ll,qo=new ll,bn=new oe;class Ci extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wb(e)?W_:X_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ft().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,s){return li.makeTranslation(e,i,s),this.applyMatrix4(li),this}scale(e,i,s){return li.makeScale(e,i,s),this.applyMatrix4(li),this}lookAt(e){return Yd.lookAt(e),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new wi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];qo.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors($n.min,qo.min),$n.expandByPoint(bn),bn.addVectors($n.max,qo.max),$n.expandByPoint(bn)):($n.expandByPoint(qo.min),$n.expandByPoint(qo.max))}$n.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,g=p.count;h<g;h++)bn.fromBufferAttribute(p,h),m&&(Cr.fromBufferAttribute(e,h),bn.add(Cr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let A=0;A<s.count;A++)p[A]=new oe,m[A]=new oe;const h=new oe,g=new oe,x=new oe,_=new ot,b=new ot,T=new ot,C=new oe,y=new oe;function S(A,O,he){h.fromBufferAttribute(s,A),g.fromBufferAttribute(s,O),x.fromBufferAttribute(s,he),_.fromBufferAttribute(c,A),b.fromBufferAttribute(c,O),T.fromBufferAttribute(c,he),g.sub(h),x.sub(h),b.sub(_),T.sub(_);const V=1/(b.x*T.y-T.x*b.y);isFinite(V)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(x,-b.y).multiplyScalar(V),y.copy(x).multiplyScalar(b.x).addScaledVector(g,-T.x).multiplyScalar(V),p[A].add(C),p[O].add(C),p[he].add(C),m[A].add(y),m[O].add(y),m[he].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let A=0,O=D.length;A<O;++A){const he=D[A],V=he.start,te=he.count;for(let se=V,ue=V+te;se<ue;se+=3)S(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const U=new oe,L=new oe,B=new oe,G=new oe;function k(A){B.fromBufferAttribute(l,A),G.copy(B);const O=p[A];U.copy(O),U.sub(B.multiplyScalar(B.dot(O))).normalize(),L.crossVectors(G,O);const V=L.dot(m[A])<0?-1:1;f.setXYZW(A,U.x,U.y,U.z,V)}for(let A=0,O=D.length;A<O;++A){const he=D[A],V=he.start,te=he.count;for(let se=V,ue=V+te;se<ue;se+=3)k(e.getX(se+0)),k(e.getX(se+1)),k(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,b=s.count;_<b;_++)s.setXYZ(_,0,0,0);const l=new oe,c=new oe,f=new oe,p=new oe,m=new oe,h=new oe,g=new oe,x=new oe;if(e)for(let _=0,b=e.count;_<b;_+=3){const T=e.getX(_+0),C=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),h.fromBufferAttribute(s,y),p.add(g),m.add(g),h.add(g),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,b=i.count;_<b;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(p,m){const h=p.array,g=p.itemSize,x=p.normalized,_=new h.constructor(m.length*g);let b=0,T=0;for(let C=0,y=m.length;C<y;C++){p.isInterleavedBufferAttribute?b=m[C]*p.data.stride+p.offset:b=m[C]*g;for(let S=0;S<g;S++)_[T++]=h[b++]}return new Ri(_,g,x)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let g=0,x=h.length;g<x;g++){const _=h[g],b=e(_,s);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let x=0,_=h.length;x<_;x++){const b=h[x];g.push(b.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],x=c[h];for(let _=0,b=x.length;_<b;_++)g.push(x[_].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const x=f[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Zb=0;class cl extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Pr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(s.blending=this.blending),this.side!==cs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==uh&&(s.blendSrc=this.blendSrc),this.blendDst!==fh&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ov&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ga=new oe,Zd=new oe,Nc=new oe,is=new oe,Kd=new oe,Lc=new oe,Qd=new oe;class q_{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ga.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Zd.copy(e).add(i).multiplyScalar(.5),Nc.copy(i).sub(e).normalize(),is.copy(this.origin).sub(Zd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Nc),p=is.dot(this.direction),m=-is.dot(Nc),h=is.lengthSq(),g=Math.abs(1-f*f);let x,_,b,T;if(g>0)if(x=f*m-p,_=f*p-m,T=c*g,x>=0)if(_>=-T)if(_<=T){const C=1/g;x*=C,_*=C,b=x*(x+f*_+2*p)+_*(f*x+_+2*m)+h}else _=c,x=Math.max(0,-(f*_+p)),b=-x*x+_*(_+2*m)+h;else _=-c,x=Math.max(0,-(f*_+p)),b=-x*x+_*(_+2*m)+h;else _<=-T?(x=Math.max(0,-(-f*c+p)),_=x>0?-c:Math.min(Math.max(-c,-m),c),b=-x*x+_*(_+2*m)+h):_<=T?(x=0,_=Math.min(Math.max(-c,-m),c),b=_*(_+2*m)+h):(x=Math.max(0,-(f*c+p)),_=x>0?c:Math.min(Math.max(-c,-m),c),b=-x*x+_*(_+2*m)+h);else _=f>0?-c:c,x=Math.max(0,-(f*_+p)),b=-x*x+_*(_+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Zd).addScaledVector(Nc,_),b}intersectSphere(e,i){ga.subVectors(e.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return h>=0?(s=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(s=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),g>=0?(c=(e.min.y-_.y)*g,f=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,f=(e.min.y-_.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(p=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(p=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,i,s,l,c){Kd.subVectors(i,e),Lc.subVectors(s,e),Qd.crossVectors(Kd,Lc);let f=this.direction.dot(Qd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;is.subVectors(this.origin,e);const m=p*this.direction.dot(Lc.crossVectors(is,Lc));if(m<0)return null;const h=p*this.direction.dot(Kd.cross(is));if(h<0||m+h>f)return null;const g=-p*is.dot(Qd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Y_ extends cl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=T_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ev=new ln,ws=new q_,Oc=new hu,Tv=new oe,Pc=new oe,Ic=new oe,Fc=new oe,Jd=new oe,Bc=new oe,Av=new oe,zc=new oe;class di extends jn{constructor(e=new Ci,i=new Y_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Bc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=p[m],x=c[m];g!==0&&(Jd.fromBufferAttribute(x,e),f?Bc.addScaledVector(Jd,g):Bc.addScaledVector(Jd.sub(i),g))}i.add(Bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(c),ws.copy(e.ray).recast(e.near),!(Oc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Oc,Tv)===null||ws.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(Ev.copy(c).invert(),ws.copy(e.ray).applyMatrix4(Ev),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ws)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(f))for(let T=0,C=_.length;T<C;T++){const y=_[T],S=f[y.materialIndex],D=Math.max(y.start,b.start),U=Math.min(p.count,Math.min(y.start+y.count,b.start+b.count));for(let L=D,B=U;L<B;L+=3){const G=p.getX(L),k=p.getX(L+1),A=p.getX(L+2);l=Hc(this,S,e,s,h,g,x,G,k,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),C=Math.min(p.count,b.start+b.count);for(let y=T,S=C;y<S;y+=3){const D=p.getX(y),U=p.getX(y+1),L=p.getX(y+2);l=Hc(this,f,e,s,h,g,x,D,U,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,C=_.length;T<C;T++){const y=_[T],S=f[y.materialIndex],D=Math.max(y.start,b.start),U=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let L=D,B=U;L<B;L+=3){const G=L,k=L+1,A=L+2;l=Hc(this,S,e,s,h,g,x,G,k,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let y=T,S=C;y<S;y+=3){const D=y,U=y+1,L=y+2;l=Hc(this,f,e,s,h,g,x,D,U,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Kb(r,e,i,s,l,c,f,p){let m;if(e.side===kn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===cs,p),m===null)return null;zc.copy(p),zc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(zc);return h<i.near||h>i.far?null:{distance:h,point:zc.clone(),object:r}}function Hc(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Pc),r.getVertexPosition(m,Ic),r.getVertexPosition(h,Fc);const g=Kb(r,e,i,s,Pc,Ic,Fc,Av);if(g){const x=new oe;Ei.getBarycoord(Av,Pc,Ic,Fc,x),l&&(g.uv=Ei.getInterpolatedAttribute(l,p,m,h,x,new ot)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,p,m,h,x,new ot)),f&&(g.normal=Ei.getInterpolatedAttribute(f,p,m,h,x,new oe),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new oe,materialIndex:0};Ei.getNormal(Pc,Ic,Fc,_.normal),g.face=_,g.barycoord=x}return g}class Z_ extends On{constructor(e=null,i=1,s=1,l,c,f,p,m,h=Rn,g=Rn,x,_){super(null,f,p,m,h,g,l,c,x,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $d=new oe,Qb=new oe,Jb=new ft;class Ns{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=$d.subVectors(s,i).cross(Qb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta($d),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Jb.getNormalMatrix(e),l=this.coplanarPoint($d).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new hu,$b=new ot(.5,.5),Gc=new oe;class K_{constructor(e=new Ns,i=new Ns,s=new Ns,l=new Ns,c=new Ns,f=new Ns){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Gi,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],g=c[4],x=c[5],_=c[6],b=c[7],T=c[8],C=c[9],y=c[10],S=c[11],D=c[12],U=c[13],L=c[14],B=c[15];if(l[0].setComponents(h-f,b-g,S-T,B-D).normalize(),l[1].setComponents(h+f,b+g,S+T,B+D).normalize(),l[2].setComponents(h+p,b+x,S+C,B+U).normalize(),l[3].setComponents(h-p,b-x,S-C,B-U).normalize(),s)l[4].setComponents(m,_,y,L).normalize(),l[5].setComponents(h-m,b-_,S-y,B-L).normalize();else if(l[4].setComponents(h-m,b-_,S-y,B-L).normalize(),i===Gi)l[5].setComponents(h+m,b+_,S+y,B+L).normalize();else if(i===au)l[5].setComponents(m,_,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);const i=$b.distanceTo(e.center);return Cs.radius=.7071067811865476+i,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Gc.x=l.normal.x>0?e.max.x:e.min.x,Gc.y=l.normal.y>0?e.max.y:e.min.y,Gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eE extends cl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new oe,lu=new oe,Rv=new ln,Yo=new q_,Vc=new hu,eh=new oe,wv=new oe;class tE extends jn{constructor(e=new Ci,i=new eE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ou.fromBufferAttribute(i,l-1),lu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);e.setAttribute("lineDistance",new wi(s,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Vc.copy(s.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,e.ray.intersectsSphere(Vc)===!1)return;Rv.copy(l).invert(),Yo.copy(e.ray).applyMatrix4(Rv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){const b=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let C=b,y=T-1;C<y;C+=h){const S=g.getX(C),D=g.getX(C+1),U=kc(this,e,Yo,m,S,D,C);U&&i.push(U)}if(this.isLineLoop){const C=g.getX(T-1),y=g.getX(b),S=kc(this,e,Yo,m,C,y,T-1);S&&i.push(S)}}else{const b=Math.max(0,f.start),T=Math.min(_.count,f.start+f.count);for(let C=b,y=T-1;C<y;C+=h){const S=kc(this,e,Yo,m,C,C+1,C);S&&i.push(S)}if(this.isLineLoop){const C=kc(this,e,Yo,m,T-1,b,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function kc(r,e,i,s,l,c,f){const p=r.geometry.attributes.position;if(ou.fromBufferAttribute(p,l),lu.fromBufferAttribute(p,c),i.distanceSqToSegment(ou,lu,eh,wv)>s)return;eh.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(eh);if(!(h<e.near||h>e.far))return{distance:h,point:wv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Cv=new oe,Dv=new oe;class nE extends tE{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Cv.fromBufferAttribute(i,l),Dv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Cv.distanceTo(Dv);e.setAttribute("lineDistance",new wi(s,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Q_ extends On{constructor(e=[],i=Bs,s,l,c,f,p,m,h,g){super(e,i,s,l,c,f,p,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class il extends On{constructor(e,i,s=ji,l,c,f,p=Rn,m=Rn,h,g=Ea,x=1){if(g!==Ea&&g!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:x};super(_,l,c,f,p,m,g,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class iE extends il{constructor(e,i=ji,s=Bs,l,c,f=Rn,p=Rn,m,h=Ea){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,i,s,l,c,f,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J_ extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ul extends Ci{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],g=[],x=[];let _=0,b=0;T("z","y","x",-1,-1,s,i,e,f,c,0),T("z","y","x",1,-1,s,i,-e,f,c,1),T("x","z","y",1,1,e,s,i,l,f,2),T("x","z","y",1,-1,e,s,-i,l,f,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new wi(h,3)),this.setAttribute("normal",new wi(g,3)),this.setAttribute("uv",new wi(x,2));function T(C,y,S,D,U,L,B,G,k,A,O){const he=L/k,V=B/A,te=L/2,se=B/2,ue=G/2,Q=k+1,I=A+1;let H=0,de=0;const ve=new oe;for(let P=0;P<I;P++){const K=P*V-se;for(let pe=0;pe<Q;pe++){const Se=pe*he-te;ve[C]=Se*D,ve[y]=K*U,ve[S]=ue,h.push(ve.x,ve.y,ve.z),ve[C]=0,ve[y]=0,ve[S]=G>0?1:-1,g.push(ve.x,ve.y,ve.z),x.push(pe/k),x.push(1-P/A),H+=1}}for(let P=0;P<A;P++)for(let K=0;K<k;K++){const pe=_+K+Q*P,Se=_+K+Q*(P+1),Ne=_+(K+1)+Q*(P+1),Ye=_+(K+1)+Q*P;m.push(pe,Se,Ye),m.push(Se,Ne,Ye),de+=6}p.addGroup(b,de,O),b+=de,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fs extends Ci{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,g=m+1,x=e/p,_=i/m,b=[],T=[],C=[],y=[];for(let S=0;S<g;S++){const D=S*_-f;for(let U=0;U<h;U++){const L=U*x-c;T.push(L,-D,0),C.push(0,0,1),y.push(U/p),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let D=0;D<p;D++){const U=D+h*S,L=D+h*(S+1),B=D+1+h*(S+1),G=D+1+h*S;b.push(U,L,G),b.push(L,B,G)}this.setIndex(b),this.setAttribute("position",new wi(T,3)),this.setAttribute("normal",new wi(C,3)),this.setAttribute("uv",new wi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Gr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(r){const e={};for(let i=0;i<r.length;i++){const s=Gr(r[i]);for(const l in s)e[l]=s[l]}return e}function aE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function $_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const sE={clone:Gr,merge:Ln};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends cl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=oE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=aE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Jo extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lE extends cl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cE extends cl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jc=new oe,Xc=new Xr,Bi=new oe;class cu extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jc,Xc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Xc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(jc,Xc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Xc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const as=new oe,Uv=new ot,Nv=new ot;class bi extends cu{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=$h*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $h*2*Math.atan(Math.tan(Dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,i){return this.getViewBounds(e,Uv,Nv),i.subVectors(Nv,Uv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Dd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ex extends cu{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Dr=-90,Ur=1;class uE extends jn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(Dr,Ur,e,i);l.layers=this.layers,this.add(l);const c=new bi(Dr,Ur,e,i);c.layers=this.layers,this.add(c);const f=new bi(Dr,Ur,e,i);f.layers=this.layers,this.add(f);const p=new bi(Dr,Ur,e,i);p.layers=this.layers,this.add(p);const m=new bi(Dr,Ur,e,i);m.layers=this.layers,this.add(m);const h=new bi(Dr,Ur,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===au)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(x,_,b),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class fE extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class dE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Lv(r,e,i,s){const l=hE(s);switch(i){case B_:return r*e;case H_:return r*e/l.components*l.byteLength;case dp:return r*e/l.components*l.byteLength;case zr:return r*e*2/l.components*l.byteLength;case hp:return r*e*2/l.components*l.byteLength;case z_:return r*e*3/l.components*l.byteLength;case fi:return r*e*4/l.components*l.byteLength;case pp:return r*e*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $c:case eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:case Eh:return Math.max(r,16)*Math.max(e,8)/4;case yh:case bh:return Math.max(r,8)*Math.max(e,8)/2;case Th:case Ah:case wh:case Ch:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Rh:case Dh:case Uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wh:case qh:case Yh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Zh:case Kh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qh:case Jh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hE(r){switch(r){case ui:case O_:return{byteLength:1,components:1};case tl:case P_:case Xi:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case ji:case cp:case Ti:return{byteLength:4,components:1};case I_:case F_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function pE(r){const e=new WeakMap;function i(p,m){const h=p.array,g=p.usage,x=h.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,h,g),p.onUploadCallback();let b;if(h instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=r.SHORT;else if(h instanceof Uint32Array)b=r.UNSIGNED_INT;else if(h instanceof Int32Array)b=r.INT;else if(h instanceof Int8Array)b=r.BYTE;else if(h instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,h){const g=m.array,x=m.updateRanges;if(r.bindBuffer(h,p),x.length===0)r.bufferSubData(h,0,g);else{x.sort((b,T)=>b.start-T.start);let _=0;for(let b=1;b<x.length;b++){const T=x[_],C=x[b];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++_,x[_]=C)}x.length=_+1;for(let b=0,T=x.length;b<T;b++){const C=x[b];r.bufferSubData(h,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var mE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gE=`#ifdef USE_ALPHAHASH
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
#endif`,vE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yE=`#ifdef USE_AOMAP
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
#endif`,ME=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bE=`#ifdef USE_BATCHING
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
#endif`,EE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wE=`#ifdef USE_IRIDESCENCE
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
#endif`,CE=`#ifdef USE_BUMPMAP
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
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,PE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,BE=`#define PI 3.141592653589793
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
} // validated`,zE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HE=`vec3 transformedNormal = objectNormal;
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
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XE="gl_FragColor = linearToOutputTexel( gl_FragColor );",WE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nT=`#ifdef USE_GRADIENTMAP
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
}`,iT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rT=`uniform bool receiveShadow;
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
#endif`,oT=`#ifdef USE_ENVMAP
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
#endif`,lT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dT=`PhysicalMaterial material;
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
#endif`,hT=`uniform sampler2D dfgLUT;
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
}`,pT=`
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
#endif`,mT=`#if defined( RE_IndirectDiffuse )
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
#endif`,gT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ST=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ET=`#if defined( USE_POINTS_UV )
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
#endif`,TT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DT=`#ifdef USE_MORPHTARGETS
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
#endif`,UT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FT=`#ifdef USE_NORMALMAP
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
#endif`,BT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$T=`float getShadowMask() {
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
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,a1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l1=`#ifdef USE_TRANSMISSION
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
#endif`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m1=`uniform sampler2D t2D;
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
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
}`,y1=`#if DEPTH_PACKING == 3200
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
}`,M1=`#define DISTANCE
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
}`,b1=`#define DISTANCE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`uniform float scale;
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
}`,R1=`uniform vec3 diffuse;
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
}`,w1=`#include <common>
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
}`,C1=`uniform vec3 diffuse;
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
}`,D1=`#define LAMBERT
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
}`,U1=`#define LAMBERT
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
}`,N1=`#define MATCAP
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
}`,L1=`#define MATCAP
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
}`,O1=`#define NORMAL
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
}`,P1=`#define NORMAL
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
}`,I1=`#define PHONG
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
}`,F1=`#define PHONG
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
}`,B1=`#define STANDARD
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
}`,z1=`#define STANDARD
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
}`,H1=`#define TOON
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
}`,G1=`#define TOON
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
}`,V1=`uniform float size;
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
}`,k1=`uniform vec3 diffuse;
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
}`,j1=`#include <common>
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
}`,X1=`uniform vec3 color;
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
}`,W1=`uniform float rotation;
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
}`,q1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:mE,alphahash_pars_fragment:gE,alphamap_fragment:vE,alphamap_pars_fragment:_E,alphatest_fragment:xE,alphatest_pars_fragment:SE,aomap_fragment:yE,aomap_pars_fragment:ME,batching_pars_vertex:bE,batching_vertex:EE,begin_vertex:TE,beginnormal_vertex:AE,bsdfs:RE,iridescence_fragment:wE,bumpmap_pars_fragment:CE,clipping_planes_fragment:DE,clipping_planes_pars_fragment:UE,clipping_planes_pars_vertex:NE,clipping_planes_vertex:LE,color_fragment:OE,color_pars_fragment:PE,color_pars_vertex:IE,color_vertex:FE,common:BE,cube_uv_reflection_fragment:zE,defaultnormal_vertex:HE,displacementmap_pars_vertex:GE,displacementmap_vertex:VE,emissivemap_fragment:kE,emissivemap_pars_fragment:jE,colorspace_fragment:XE,colorspace_pars_fragment:WE,envmap_fragment:qE,envmap_common_pars_fragment:YE,envmap_pars_fragment:ZE,envmap_pars_vertex:KE,envmap_physical_pars_fragment:oT,envmap_vertex:QE,fog_vertex:JE,fog_pars_vertex:$E,fog_fragment:eT,fog_pars_fragment:tT,gradientmap_pars_fragment:nT,lightmap_pars_fragment:iT,lights_lambert_fragment:aT,lights_lambert_pars_fragment:sT,lights_pars_begin:rT,lights_toon_fragment:lT,lights_toon_pars_fragment:cT,lights_phong_fragment:uT,lights_phong_pars_fragment:fT,lights_physical_fragment:dT,lights_physical_pars_fragment:hT,lights_fragment_begin:pT,lights_fragment_maps:mT,lights_fragment_end:gT,logdepthbuf_fragment:vT,logdepthbuf_pars_fragment:_T,logdepthbuf_pars_vertex:xT,logdepthbuf_vertex:ST,map_fragment:yT,map_pars_fragment:MT,map_particle_fragment:bT,map_particle_pars_fragment:ET,metalnessmap_fragment:TT,metalnessmap_pars_fragment:AT,morphinstance_vertex:RT,morphcolor_vertex:wT,morphnormal_vertex:CT,morphtarget_pars_vertex:DT,morphtarget_vertex:UT,normal_fragment_begin:NT,normal_fragment_maps:LT,normal_pars_fragment:OT,normal_pars_vertex:PT,normal_vertex:IT,normalmap_pars_fragment:FT,clearcoat_normal_fragment_begin:BT,clearcoat_normal_fragment_maps:zT,clearcoat_pars_fragment:HT,iridescence_pars_fragment:GT,opaque_fragment:VT,packing:kT,premultiplied_alpha_fragment:jT,project_vertex:XT,dithering_fragment:WT,dithering_pars_fragment:qT,roughnessmap_fragment:YT,roughnessmap_pars_fragment:ZT,shadowmap_pars_fragment:KT,shadowmap_pars_vertex:QT,shadowmap_vertex:JT,shadowmask_pars_fragment:$T,skinbase_vertex:e1,skinning_pars_vertex:t1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:a1,specularmap_pars_fragment:s1,tonemapping_fragment:r1,tonemapping_pars_fragment:o1,transmission_fragment:l1,transmission_pars_fragment:c1,uv_pars_fragment:u1,uv_pars_vertex:f1,uv_vertex:d1,worldpos_vertex:h1,background_vert:p1,background_frag:m1,backgroundCube_vert:g1,backgroundCube_frag:v1,cube_vert:_1,cube_frag:x1,depth_vert:S1,depth_frag:y1,distance_vert:M1,distance_frag:b1,equirect_vert:E1,equirect_frag:T1,linedashed_vert:A1,linedashed_frag:R1,meshbasic_vert:w1,meshbasic_frag:C1,meshlambert_vert:D1,meshlambert_frag:U1,meshmatcap_vert:N1,meshmatcap_frag:L1,meshnormal_vert:O1,meshnormal_frag:P1,meshphong_vert:I1,meshphong_frag:F1,meshphysical_vert:B1,meshphysical_frag:z1,meshtoon_vert:H1,meshtoon_frag:G1,points_vert:V1,points_frag:k1,shadow_vert:j1,shadow_frag:X1,sprite_vert:W1,sprite_frag:q1},Oe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Hi={basic:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Ln([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Ln([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Ln([Oe.points,Oe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Ln([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Ln([Oe.common,Oe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Ln([Oe.sprite,Oe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Ln([Oe.common,Oe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Ln([Oe.lights,Oe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Hi.physical={uniforms:Ln([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Wc={r:0,b:0,g:0},Ds=new Ta,Y1=new ln;function Z1(r,e,i,s,l,c){const f=new Lt(0);let p=l===!0?0:1,m,h,g=null,x=0,_=null;function b(D){let U=D.isScene===!0?D.background:null;if(U&&U.isTexture){const L=D.backgroundBlurriness>0;U=e.get(U,L)}return U}function T(D){let U=!1;const L=b(D);L===null?y(f,p):L&&L.isColor&&(y(L,1),U=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(D,U){const L=b(U);L&&(L.isCubeTexture||L.mapping===du)?(h===void 0&&(h=new di(new ul(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Gr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,G,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ds.copy(U.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(Ds)),h.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Bt,(g!==L||x!==L.version||_!==r.toneMapping)&&(h.material.needsUpdate=!0,g=L,x=L.version,_=r.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new di(new Fs(2,2),new Wi({name:"BackgroundMaterial",uniforms:Gr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||x!==L.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,g=L,x=L.version,_=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function y(D,U){D.getRGB(Wc,$_(r)),i.buffers.color.setClear(Wc.r,Wc.g,Wc.b,U,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,U=1){f.set(D),p=U,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,y(f,p)},render:T,addToRenderList:C,dispose:S}}function K1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function p(V,te,se,ue,Q){let I=!1;const H=x(V,ue,se,te);c!==H&&(c=H,h(c.object)),I=b(V,ue,se,Q),I&&T(V,ue,se,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,L(V,te,se,ue),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return r.createVertexArray()}function h(V){return r.bindVertexArray(V)}function g(V){return r.deleteVertexArray(V)}function x(V,te,se,ue){const Q=ue.wireframe===!0;let I=s[te.id];I===void 0&&(I={},s[te.id]=I);const H=V.isInstancedMesh===!0?V.id:0;let de=I[H];de===void 0&&(de={},I[H]=de);let ve=de[se.id];ve===void 0&&(ve={},de[se.id]=ve);let P=ve[Q];return P===void 0&&(P=_(m()),ve[Q]=P),P}function _(V){const te=[],se=[],ue=[];for(let Q=0;Q<i;Q++)te[Q]=0,se[Q]=0,ue[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:se,attributeDivisors:ue,object:V,attributes:{},index:null}}function b(V,te,se,ue){const Q=c.attributes,I=te.attributes;let H=0;const de=se.getAttributes();for(const ve in de)if(de[ve].location>=0){const K=Q[ve];let pe=I[ve];if(pe===void 0&&(ve==="instanceMatrix"&&V.instanceMatrix&&(pe=V.instanceMatrix),ve==="instanceColor"&&V.instanceColor&&(pe=V.instanceColor)),K===void 0||K.attribute!==pe||pe&&K.data!==pe.data)return!0;H++}return c.attributesNum!==H||c.index!==ue}function T(V,te,se,ue){const Q={},I=te.attributes;let H=0;const de=se.getAttributes();for(const ve in de)if(de[ve].location>=0){let K=I[ve];K===void 0&&(ve==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),ve==="instanceColor"&&V.instanceColor&&(K=V.instanceColor));const pe={};pe.attribute=K,K&&K.data&&(pe.data=K.data),Q[ve]=pe,H++}c.attributes=Q,c.attributesNum=H,c.index=ue}function C(){const V=c.newAttributes;for(let te=0,se=V.length;te<se;te++)V[te]=0}function y(V){S(V,0)}function S(V,te){const se=c.newAttributes,ue=c.enabledAttributes,Q=c.attributeDivisors;se[V]=1,ue[V]===0&&(r.enableVertexAttribArray(V),ue[V]=1),Q[V]!==te&&(r.vertexAttribDivisor(V,te),Q[V]=te)}function D(){const V=c.newAttributes,te=c.enabledAttributes;for(let se=0,ue=te.length;se<ue;se++)te[se]!==V[se]&&(r.disableVertexAttribArray(se),te[se]=0)}function U(V,te,se,ue,Q,I,H){H===!0?r.vertexAttribIPointer(V,te,se,Q,I):r.vertexAttribPointer(V,te,se,ue,Q,I)}function L(V,te,se,ue){C();const Q=ue.attributes,I=se.getAttributes(),H=te.defaultAttributeValues;for(const de in I){const ve=I[de];if(ve.location>=0){let P=Q[de];if(P===void 0&&(de==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),de==="instanceColor"&&V.instanceColor&&(P=V.instanceColor)),P!==void 0){const K=P.normalized,pe=P.itemSize,Se=e.get(P);if(Se===void 0)continue;const Ne=Se.buffer,Ye=Se.type,ee=Se.bytesPerElement,be=Ye===r.INT||Ye===r.UNSIGNED_INT||P.gpuType===cp;if(P.isInterleavedBufferAttribute){const ye=P.data,Je=ye.stride,Ke=P.offset;if(ye.isInstancedInterleavedBuffer){for(let $e=0;$e<ve.locationSize;$e++)S(ve.location+$e,ye.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let $e=0;$e<ve.locationSize;$e++)y(ve.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let $e=0;$e<ve.locationSize;$e++)U(ve.location+$e,pe/ve.locationSize,Ye,K,Je*ee,(Ke+pe/ve.locationSize*$e)*ee,be)}else{if(P.isInstancedBufferAttribute){for(let ye=0;ye<ve.locationSize;ye++)S(ve.location+ye,P.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ye=0;ye<ve.locationSize;ye++)y(ve.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let ye=0;ye<ve.locationSize;ye++)U(ve.location+ye,pe/ve.locationSize,Ye,K,pe*ee,pe/ve.locationSize*ye*ee,be)}}else if(H!==void 0){const K=H[de];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(ve.location,K);break;case 3:r.vertexAttrib3fv(ve.location,K);break;case 4:r.vertexAttrib4fv(ve.location,K);break;default:r.vertexAttrib1fv(ve.location,K)}}}}D()}function B(){O();for(const V in s){const te=s[V];for(const se in te){const ue=te[se];for(const Q in ue){const I=ue[Q];for(const H in I)g(I[H].object),delete I[H];delete ue[Q]}}delete s[V]}}function G(V){if(s[V.id]===void 0)return;const te=s[V.id];for(const se in te){const ue=te[se];for(const Q in ue){const I=ue[Q];for(const H in I)g(I[H].object),delete I[H];delete ue[Q]}}delete s[V.id]}function k(V){for(const te in s){const se=s[te];for(const ue in se){const Q=se[ue];if(Q[V.id]===void 0)continue;const I=Q[V.id];for(const H in I)g(I[H].object),delete I[H];delete Q[V.id]}}}function A(V){for(const te in s){const se=s[te],ue=V.isInstancedMesh===!0?V.id:0,Q=se[ue];if(Q!==void 0){for(const I in Q){const H=Q[I];for(const de in H)g(H[de].object),delete H[de];delete Q[I]}delete se[ue],Object.keys(se).length===0&&delete s[te]}}}function O(){he(),f=!0,c!==l&&(c=l,h(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:he,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfObject:A,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:y,disableUnusedAttributes:D}}function Q1(r,e,i){let s;function l(h){s=h}function c(h,g){r.drawArrays(s,h,g),i.update(g,s,1)}function f(h,g,x){x!==0&&(r.drawArraysInstanced(s,h,g,x),i.update(g,s,x))}function p(h,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,g,0,x);let b=0;for(let T=0;T<x;T++)b+=g[T];i.update(b,s,1)}function m(h,g,x,_){if(x===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let T=0;T<h.length;T++)f(h[T],g[T],_[T]);else{b.multiDrawArraysInstancedWEBGL(s,h,0,g,0,_,0,x);let T=0;for(let C=0;C<x;C++)T+=g[C]*_[C];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function J1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(k){return!(k!==fi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(k){const A=k===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ui&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ti&&!A)}function m(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(at("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),G=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:L,maxSamples:B,samples:G}}function $1(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Ns,p=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const b=x.length!==0||_||s!==0||l;return l=_,s=x.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,b){const T=x.clippingPlanes,C=x.clipIntersection,y=x.clipShadows,S=r.get(x);if(!l||T===null||T.length===0||c&&!y)c?g(null):h();else{const D=c?0:s,U=D*4;let L=S.clippingState||null;m.value=L,L=g(T,_,U,b);for(let B=0;B!==U;++B)L[B]=i[B];S.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,_,b,T){const C=x!==null?x.length:0;let y=null;if(C!==0){if(y=m.value,T!==!0||y===null){const S=b+C*4,D=_.matrixWorldInverse;p.getNormalMatrix(D),(y===null||y.length<S)&&(y=new Float32Array(S));for(let U=0,L=b;U!==C;++U,L+=4)f.copy(x[U]).applyMatrix4(D,p),f.normal.toArray(y,L),y[L+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const ls=4,Ov=[.125,.215,.35,.446,.526,.582],Os=20,eA=256,Zo=new ex,Pv=new Lt;let th=null,nh=0,ih=0,ah=!1;const tA=new oe;class Iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=tA}=c;th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(th,nh,ih),this._renderer.xr.enabled=ah,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Bs||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Xi,format:fi,colorSpace:Hr,depthBuffer:!1},l=Fv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nA(c)),this._blurMaterial=aA(c,e,i),this._ggxMaterial=iA(c,e,i)}return l}_compileMaterial(e){const i=new di(new Ci,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,s,l,c){const m=new bi(90,1,i,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,b=x.toneMapping;x.getClearColor(Pv),x.toneMapping=Vi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new ul,new Y_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,S=!0):(y.color.copy(Pv),S=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):L===1?(m.up.set(0,0,h[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const B=this._cubeSize;Nr(l,L*B,U>2?B:0,B,B),x.setRenderTarget(l),S&&x.render(C,m),x.render(e,m)}x.toneMapping=b,x.autoClear=_,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Bs||e.mapping===Br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Nr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Zo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-g*g),_=0+h*1.25,b=x*_,{_lodMax:T}=this,C=this._sizeLods[s],y=3*C*(s>T-ls?s-T+ls:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=T-i,Nr(c,y,S,3*C,2*C),l.setRenderTarget(c),l.render(p,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Nr(e,y,S,3*C,2*C),l.setRenderTarget(e),l.render(p,Zo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=h;const _=h.uniforms,b=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Os-1),C=c/T,y=isFinite(c)?1+Math.floor(g*C):Os;y>Os&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Os}`);const S=[];let D=0;for(let k=0;k<Os;++k){const A=k/C,O=Math.exp(-A*A/2);S.push(O),k===0?D+=O:k<y&&(D+=2*O)}for(let k=0;k<S.length;k++)S[k]=S[k]/D;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=S,_.latitudinal.value=f==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:U}=this;_.dTheta.value=T,_.mipInt.value=U-s;const L=this._sizeLods[l],B=3*L*(l>U-ls?l-U+ls:0),G=4*(this._cubeSize-L);Nr(i,B,G,3*L,2*L),m.setRenderTarget(i),m.render(x,Zo)}}function nA(r){const e=[],i=[],s=[];let l=r;const c=r-ls+1+Ov.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-ls?m=Ov[f-r+ls-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),g=-h,x=1+h,_=[g,g,x,g,x,x,g,g,x,x,g,x],b=6,T=6,C=3,y=2,S=1,D=new Float32Array(C*T*b),U=new Float32Array(y*T*b),L=new Float32Array(S*T*b);for(let G=0;G<b;G++){const k=G%3*2/3-1,A=G>2?0:-1,O=[k,A,0,k+2/3,A,0,k+2/3,A+1,0,k,A,0,k+2/3,A+1,0,k,A+1,0];D.set(O,C*T*G),U.set(_,y*T*G);const he=[G,G,G,G,G,G];L.set(he,S*T*G)}const B=new Ci;B.setAttribute("position",new Ri(D,C)),B.setAttribute("uv",new Ri(U,y)),B.setAttribute("faceIndex",new Ri(L,S)),s.push(new di(B,null)),l>ls&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Fv(r,e,i){const s=new Ai(r,e,i);return s.texture.mapping=du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function iA(r,e,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function aA(r,e,i){const s=new Float32Array(Os),l=new oe(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Bv(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function zv(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}class nx extends Ai{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Q_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ul(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Gr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:ya});c.uniforms.tEquirect.value=i;const f=new di(l,c),p=i.minFilter;return i.minFilter===Ps&&(i.minFilter=dn),new uE(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function sA(r){let e=new WeakMap,i=new WeakMap,s=null;function l(_,b=!1){return _==null?null:b?f(_):c(_)}function c(_){if(_&&_.isTexture){const b=_.mapping;if(b===Rd||b===wd)if(e.has(_)){const T=e.get(_).texture;return p(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const C=new nx(T.height);return C.fromEquirectangularTexture(r,_),e.set(_,C),_.addEventListener("dispose",h),p(C.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const b=_.mapping,T=b===Rd||b===wd,C=b===Bs||b===Br;if(T||C){let y=i.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return s===null&&(s=new Iv(r)),y=T?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const D=_.image;return T&&D&&D.height>0||C&&D&&m(D)?(s===null&&(s=new Iv(r)),y=T?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function p(_,b){return b===Rd?_.mapping=Bs:b===wd&&(_.mapping=Br),_}function m(_){let b=0;const T=6;for(let C=0;C<T;C++)_[C]!==void 0&&b++;return b===T}function h(_){const b=_.target;b.removeEventListener("dispose",h);const T=e.get(b);T!==void 0&&(e.delete(b),T.dispose())}function g(_){const b=_.target;b.removeEventListener("dispose",g);const T=i.get(b);T!==void 0&&(i.delete(b),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function rA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ru("WebGLRenderer: "+s+" extension not supported."),l}}}function oA(r,e,i,s){const l={},c=new WeakMap;function f(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",f),delete l[_.id];const b=c.get(_);b&&(e.remove(b),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(x,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const b in _)e.update(_[b],r.ARRAY_BUFFER)}function h(x){const _=[],b=x.index,T=x.attributes.position;let C=0;if(T===void 0)return;if(b!==null){const D=b.array;C=b.version;for(let U=0,L=D.length;U<L;U+=3){const B=D[U+0],G=D[U+1],k=D[U+2];_.push(B,G,G,k,k,B)}}else{const D=T.array;C=T.version;for(let U=0,L=D.length/3-1;U<L;U+=3){const B=U+0,G=U+1,k=U+2;_.push(B,G,G,k,k,B)}}const y=new(T.count>=65535?W_:X_)(_,1);y.version=C;const S=c.get(x);S&&e.remove(S),c.set(x,y)}function g(x){const _=c.get(x);if(_){const b=x.index;b!==null&&_.version<b.version&&h(x)}else h(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:g}}function lA(r,e,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,b){r.drawElements(s,b,c,_*f),i.update(b,s,1)}function h(_,b,T){T!==0&&(r.drawElementsInstanced(s,b,c,_*f,T),i.update(b,s,T))}function g(_,b,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,c,_,0,T);let y=0;for(let S=0;S<T;S++)y+=b[S];i.update(y,s,1)}function x(_,b,T,C){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<_.length;S++)h(_[S]/f,b[S],C[S]);else{y.multiDrawElementsInstancedWEBGL(s,b,0,c,_,0,C,0,T);let S=0;for(let D=0;D<T;D++)S+=b[D]*C[D];i.update(S,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function cA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function uA(r,e,i){const s=new WeakMap,l=new tn;function c(f,p,m){const h=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=g!==void 0?g.length:0;let _=s.get(p);if(_===void 0||_.count!==x){let he=function(){A.dispose(),s.delete(p),p.removeEventListener("dispose",he)};var b=he;_!==void 0&&_.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let L=0;T===!0&&(L=1),C===!0&&(L=2),y===!0&&(L=3);let B=p.attributes.position.count*L,G=1;B>e.maxTextureSize&&(G=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const k=new Float32Array(B*G*4*x),A=new V_(k,B,G,x);A.type=Ti,A.needsUpdate=!0;const O=L*4;for(let V=0;V<x;V++){const te=S[V],se=D[V],ue=U[V],Q=B*G*4*V;for(let I=0;I<te.count;I++){const H=I*O;T===!0&&(l.fromBufferAttribute(te,I),k[Q+H+0]=l.x,k[Q+H+1]=l.y,k[Q+H+2]=l.z,k[Q+H+3]=0),C===!0&&(l.fromBufferAttribute(se,I),k[Q+H+4]=l.x,k[Q+H+5]=l.y,k[Q+H+6]=l.z,k[Q+H+7]=0),y===!0&&(l.fromBufferAttribute(ue,I),k[Q+H+8]=l.x,k[Q+H+9]=l.y,k[Q+H+10]=l.z,k[Q+H+11]=ue.itemSize===4?l.w:1)}}_={count:x,texture:A,size:new ot(B,G)},s.set(p,_),p.addEventListener("dispose",he)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let y=0;y<h.length;y++)T+=h[y];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function fA(r,e,i,s,l){let c=new WeakMap;function f(h){const g=l.render.frame,x=h.geometry,_=e.get(h,x);if(c.get(_)!==g&&(e.update(_),c.set(_,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==g&&(b.update(),c.set(b,g))}return _}function p(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const dA={[A_]:"LINEAR_TONE_MAPPING",[R_]:"REINHARD_TONE_MAPPING",[w_]:"CINEON_TONE_MAPPING",[C_]:"ACES_FILMIC_TONE_MAPPING",[U_]:"AGX_TONE_MAPPING",[N_]:"NEUTRAL_TONE_MAPPING",[D_]:"CUSTOM_TONE_MAPPING"};function hA(r,e,i,s,l){const c=new Ai(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Ai(e,i,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),p=new Ci;p.setAttribute("position",new wi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new wi([0,2,0,0,2,0],2));const m=new Jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new di(p,m),g=new ex(-1,1,1,-1,0,1);let x=null,_=null,b=!1,T,C=null,y=[],S=!1;this.setSize=function(D,U){c.setSize(D,U),f.setSize(D,U);for(let L=0;L<y.length;L++){const B=y[L];B.setSize&&B.setSize(D,U)}},this.setEffects=function(D){y=D,S=y.length>0&&y[0].isRenderPass===!0;const U=c.width,L=c.height;for(let B=0;B<y.length;B++){const G=y[B];G.setSize&&G.setSize(U,L)}},this.begin=function(D,U){if(b||D.toneMapping===Vi&&y.length===0)return!1;if(C=U,U!==null){const L=U.width,B=U.height;(c.width!==L||c.height!==B)&&this.setSize(L,B)}return S===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Vi,!0},this.hasRenderPass=function(){return S},this.end=function(D,U){D.toneMapping=T,b=!0;let L=c,B=f;for(let G=0;G<y.length;G++){const k=y[G];if(k.enabled!==!1&&(k.render(D,B,L,U),k.needsSwap!==!1)){const A=L;L=B,B=A}}if(x!==D.outputColorSpace||_!==D.toneMapping){x=D.outputColorSpace,_=D.toneMapping,m.defines={},Tt.getTransfer(x)===Bt&&(m.defines.SRGB_TRANSFER="");const G=dA[_];G&&(m.defines[G]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(C),D.render(h,g),C=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const ix=new On,ep=new il(1,1),ax=new V_,sx=new Bb,rx=new Q_,Hv=[],Gv=[],Vv=new Float32Array(16),kv=new Float32Array(9),jv=new Float32Array(4);function Wr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Hv[l];if(c===void 0&&(c=new Float32Array(l),Hv[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function gn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function vn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function mu(r,e){let i=Gv[e];i===void 0&&(i=new Int32Array(e),Gv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function pA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function mA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2fv(this.addr,e),vn(i,e)}}function gA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;r.uniform3fv(this.addr,e),vn(i,e)}}function vA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4fv(this.addr,e),vn(i,e)}}function _A(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;jv.set(s),r.uniformMatrix2fv(this.addr,!1,jv),vn(i,s)}}function xA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;kv.set(s),r.uniformMatrix3fv(this.addr,!1,kv),vn(i,s)}}function SA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;Vv.set(s),r.uniformMatrix4fv(this.addr,!1,Vv),vn(i,s)}}function yA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function MA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2iv(this.addr,e),vn(i,e)}}function bA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3iv(this.addr,e),vn(i,e)}}function EA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4iv(this.addr,e),vn(i,e)}}function TA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function AA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2uiv(this.addr,e),vn(i,e)}}function RA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3uiv(this.addr,e),vn(i,e)}}function wA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4uiv(this.addr,e),vn(i,e)}}function CA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ep.compareFunction=i.isReversedDepthBuffer()?gp:mp,c=ep):c=ix,i.setTexture2D(e||c,l)}function DA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||sx,l)}function UA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||rx,l)}function NA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||ax,l)}function LA(r){switch(r){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return vA;case 35674:return _A;case 35675:return xA;case 35676:return SA;case 5124:case 35670:return yA;case 35667:case 35671:return MA;case 35668:case 35672:return bA;case 35669:case 35673:return EA;case 5125:return TA;case 36294:return AA;case 36295:return RA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return NA}}function OA(r,e){r.uniform1fv(this.addr,e)}function PA(r,e){const i=Wr(e,this.size,2);r.uniform2fv(this.addr,i)}function IA(r,e){const i=Wr(e,this.size,3);r.uniform3fv(this.addr,i)}function FA(r,e){const i=Wr(e,this.size,4);r.uniform4fv(this.addr,i)}function BA(r,e){const i=Wr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function zA(r,e){const i=Wr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function HA(r,e){const i=Wr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function GA(r,e){r.uniform1iv(this.addr,e)}function VA(r,e){r.uniform2iv(this.addr,e)}function kA(r,e){r.uniform3iv(this.addr,e)}function jA(r,e){r.uniform4iv(this.addr,e)}function XA(r,e){r.uniform1uiv(this.addr,e)}function WA(r,e){r.uniform2uiv(this.addr,e)}function qA(r,e){r.uniform3uiv(this.addr,e)}function YA(r,e){r.uniform4uiv(this.addr,e)}function ZA(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=ep:f=ix;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function KA(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||sx,c[f])}function QA(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||rx,c[f])}function JA(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||ax,c[f])}function $A(r){switch(r){case 5126:return OA;case 35664:return PA;case 35665:return IA;case 35666:return FA;case 35674:return BA;case 35675:return zA;case 35676:return HA;case 5124:case 35670:return GA;case 35667:case 35671:return VA;case 35668:case 35672:return kA;case 35669:case 35673:return jA;case 5125:return XA;case 36294:return WA;case 36295:return qA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return JA}}class eR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=LA(i.type)}}class tR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$A(i.type)}}class nR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function Xv(r,e){r.seq.push(e),r.map[e.id]=e}function iR(r,e,i){const s=r.name,l=s.length;for(sh.lastIndex=0;;){const c=sh.exec(s),f=sh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){Xv(i,h===void 0?new eR(p,r,e):new tR(p,r,e));break}else{let x=i.map[p];x===void 0&&(x=new nR(p),Xv(i,x)),i=x}}}class tu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);iR(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Wv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const aR=37297;let sR=0;function rR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const qv=new ft;function oR(r){Tt._getMatrix(qv,Tt.workingColorSpace,r);const e=`mat3( ${qv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(r)){case iu:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Yv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+rR(r.getShaderSource(e),p)}else return c}function lR(r,e){const i=oR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const cR={[A_]:"Linear",[R_]:"Reinhard",[w_]:"Cineon",[C_]:"ACESFilmic",[U_]:"AgX",[N_]:"Neutral",[D_]:"Custom"};function uR(r,e){const i=cR[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new oe;function fR(){Tt.getLuminanceCoefficients(qc);const r=qc.x.toFixed(4),e=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function hR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function pR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function $o(r){return r!==""}function Zv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mR=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(r){return r.replace(mR,vR)}const gR=new Map;function vR(r,e){let i=dt[e];if(i===void 0){const s=gR.get(e);if(s!==void 0)i=dt[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return tp(i)}const _R=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qv(r){return r.replace(_R,xR)}function xR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Jv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const SR={[Kc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function yR(r){return SR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MR={[Bs]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function bR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":MR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const ER={[Br]:"ENVMAP_MODE_REFRACTION"};function TR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ER[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const AR={[T_]:"ENVMAP_BLENDING_MULTIPLY",[gb]:"ENVMAP_BLENDING_MIX",[vb]:"ENVMAP_BLENDING_ADD"};function RR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":AR[r.combine]||"ENVMAP_BLENDING_NONE"}function wR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function CR(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=yR(i),h=bR(i),g=TR(i),x=RR(i),_=wR(i),b=dR(i),T=hR(c),C=l.createProgram();let y,S,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter($o).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter($o).join(`
`),S.length>0&&(S+=`
`)):(y=[Jv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),S=[Jv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Vi?uR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,lR("linearToOutputTexel",i.outputColorSpace),fR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=tp(f),f=Zv(f,i),f=Kv(f,i),p=tp(p),p=Zv(p,i),p=Kv(p,i),f=Qv(f),p=Qv(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const U=D+y+f,L=D+S+p,B=Wv(l,l.VERTEX_SHADER,U),G=Wv(l,l.FRAGMENT_SHADER,L);l.attachShader(C,B),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function k(V){if(r.debug.checkShaderErrors){const te=l.getProgramInfoLog(C)||"",se=l.getShaderInfoLog(B)||"",ue=l.getShaderInfoLog(G)||"",Q=te.trim(),I=se.trim(),H=ue.trim();let de=!0,ve=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,B,G);else{const P=Yv(l,B,"vertex"),K=Yv(l,G,"fragment");wt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+P+`
`+K)}else Q!==""?at("WebGLProgram: Program Info Log:",Q):(I===""||H==="")&&(ve=!1);ve&&(V.diagnostics={runnable:de,programLog:Q,vertexShader:{log:I,prefix:y},fragmentShader:{log:H,prefix:S}})}l.deleteShader(B),l.deleteShader(G),A=new tu(l,C),O=pR(l,C)}let A;this.getUniforms=function(){return A===void 0&&k(this),A};let O;this.getAttributes=function(){return O===void 0&&k(this),O};let he=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return he===!1&&(he=l.getProgramParameter(C,aR)),he},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=sR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=G,this}let DR=0;class UR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new NR(e),i.set(e,s)),s}}class NR{constructor(e){this.id=DR++,this.code=e,this.usedTimes=0}}function LR(r,e,i,s,l,c){const f=new k_,p=new UR,m=new Set,h=[],g=new Map,x=s.logarithmicDepthBuffer;let _=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return m.add(A),A===0?"uv":`uv${A}`}function C(A,O,he,V,te){const se=V.fog,ue=te.geometry,Q=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,I=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,H=e.get(A.envMap||Q,I),de=H&&H.mapping===du?H.image.height:null,ve=b[A.type];A.precision!==null&&(_=s.getMaxPrecision(A.precision),_!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const P=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,K=P!==void 0?P.length:0;let pe=0;ue.morphAttributes.position!==void 0&&(pe=1),ue.morphAttributes.normal!==void 0&&(pe=2),ue.morphAttributes.color!==void 0&&(pe=3);let Se,Ne,Ye,ee;if(ve){const At=Hi[ve];Se=At.vertexShader,Ne=At.fragmentShader}else Se=A.vertexShader,Ne=A.fragmentShader,p.update(A),Ye=p.getVertexShaderID(A),ee=p.getFragmentShaderID(A);const be=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),Je=te.isInstancedMesh===!0,Ke=te.isBatchedMesh===!0,$e=!!A.map,qt=!!A.matcap,ht=!!H,xt=!!A.aoMap,Ct=!!A.lightMap,rt=!!A.bumpMap,yt=!!A.normalMap,j=!!A.displacementMap,jt=!!A.emissiveMap,Mt=!!A.metalnessMap,bt=!!A.roughnessMap,Ge=A.anisotropy>0,N=A.clearcoat>0,v=A.dispersion>0,F=A.iridescence>0,Z=A.sheen>0,le=A.transmission>0,ae=Ge&&!!A.anisotropyMap,we=N&&!!A.clearcoatMap,Ce=N&&!!A.clearcoatNormalMap,Xe=N&&!!A.clearcoatRoughnessMap,Qe=F&&!!A.iridescenceMap,Ee=F&&!!A.iridescenceThicknessMap,Ae=Z&&!!A.sheenColorMap,Fe=Z&&!!A.sheenRoughnessMap,He=!!A.specularMap,Pe=!!A.specularColorMap,ct=!!A.specularIntensityMap,W=le&&!!A.transmissionMap,De=le&&!!A.thicknessMap,Re=!!A.gradientMap,Ie=!!A.alphaMap,Te=A.alphaTest>0,ge=!!A.alphaHash,Ve=!!A.extensions;let nt=Vi;A.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(nt=r.toneMapping);const Ot={shaderID:ve,shaderType:A.type,shaderName:A.name,vertexShader:Se,fragmentShader:Ne,defines:A.defines,customVertexShaderID:Ye,customFragmentShaderID:ee,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Ke,batchingColor:Ke&&te._colorsTexture!==null,instancing:Je,instancingColor:Je&&te.instanceColor!==null,instancingMorph:Je&&te.morphTexture!==null,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Hr,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:qt,envMap:ht,envMapMode:ht&&H.mapping,envMapCubeUVHeight:de,aoMap:xt,lightMap:Ct,bumpMap:rt,normalMap:yt,displacementMap:j,emissiveMap:jt,normalMapObjectSpace:yt&&A.normalMapType===yb,normalMapTangentSpace:yt&&A.normalMapType===Sb,metalnessMap:Mt,roughnessMap:bt,anisotropy:Ge,anisotropyMap:ae,clearcoat:N,clearcoatMap:we,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Xe,dispersion:v,iridescence:F,iridescenceMap:Qe,iridescenceThicknessMap:Ee,sheen:Z,sheenColorMap:Ae,sheenRoughnessMap:Fe,specularMap:He,specularColorMap:Pe,specularIntensityMap:ct,transmission:le,transmissionMap:W,thicknessMap:De,gradientMap:Re,opaque:A.transparent===!1&&A.blending===Pr&&A.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Te,alphaHash:ge,combine:A.combine,mapUv:$e&&T(A.map.channel),aoMapUv:xt&&T(A.aoMap.channel),lightMapUv:Ct&&T(A.lightMap.channel),bumpMapUv:rt&&T(A.bumpMap.channel),normalMapUv:yt&&T(A.normalMap.channel),displacementMapUv:j&&T(A.displacementMap.channel),emissiveMapUv:jt&&T(A.emissiveMap.channel),metalnessMapUv:Mt&&T(A.metalnessMap.channel),roughnessMapUv:bt&&T(A.roughnessMap.channel),anisotropyMapUv:ae&&T(A.anisotropyMap.channel),clearcoatMapUv:we&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(A.sheenRoughnessMap.channel),specularMapUv:He&&T(A.specularMap.channel),specularColorMapUv:Pe&&T(A.specularColorMap.channel),specularIntensityMapUv:ct&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:De&&T(A.thicknessMap.channel),alphaMapUv:Ie&&T(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(yt||Ge),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ue.attributes.uv&&($e||Ie),fog:!!se,useFog:A.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ue.attributes.normal===void 0&&yt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ye,skinning:te.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:pe,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&he.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===Bt,decodeVideoTextureEmissive:jt&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===Bt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===xa,flipSided:A.side===kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ve&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&A.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ot.vertexUv1s=m.has(1),Ot.vertexUv2s=m.has(2),Ot.vertexUv3s=m.has(3),m.clear(),Ot}function y(A){const O=[];if(A.shaderID?O.push(A.shaderID):(O.push(A.customVertexShaderID),O.push(A.customFragmentShaderID)),A.defines!==void 0)for(const he in A.defines)O.push(he),O.push(A.defines[he]);return A.isRawShaderMaterial===!1&&(S(O,A),D(O,A),O.push(r.outputColorSpace)),O.push(A.customProgramCacheKey),O.join()}function S(A,O){A.push(O.precision),A.push(O.outputColorSpace),A.push(O.envMapMode),A.push(O.envMapCubeUVHeight),A.push(O.mapUv),A.push(O.alphaMapUv),A.push(O.lightMapUv),A.push(O.aoMapUv),A.push(O.bumpMapUv),A.push(O.normalMapUv),A.push(O.displacementMapUv),A.push(O.emissiveMapUv),A.push(O.metalnessMapUv),A.push(O.roughnessMapUv),A.push(O.anisotropyMapUv),A.push(O.clearcoatMapUv),A.push(O.clearcoatNormalMapUv),A.push(O.clearcoatRoughnessMapUv),A.push(O.iridescenceMapUv),A.push(O.iridescenceThicknessMapUv),A.push(O.sheenColorMapUv),A.push(O.sheenRoughnessMapUv),A.push(O.specularMapUv),A.push(O.specularColorMapUv),A.push(O.specularIntensityMapUv),A.push(O.transmissionMapUv),A.push(O.thicknessMapUv),A.push(O.combine),A.push(O.fogExp2),A.push(O.sizeAttenuation),A.push(O.morphTargetsCount),A.push(O.morphAttributeCount),A.push(O.numDirLights),A.push(O.numPointLights),A.push(O.numSpotLights),A.push(O.numSpotLightMaps),A.push(O.numHemiLights),A.push(O.numRectAreaLights),A.push(O.numDirLightShadows),A.push(O.numPointLightShadows),A.push(O.numSpotLightShadows),A.push(O.numSpotLightShadowsWithMaps),A.push(O.numLightProbes),A.push(O.shadowMapType),A.push(O.toneMapping),A.push(O.numClippingPlanes),A.push(O.numClipIntersection),A.push(O.depthPacking)}function D(A,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),A.push(f.mask)}function U(A){const O=b[A.type];let he;if(O){const V=Hi[O];he=sE.clone(V.uniforms)}else he=A.uniforms;return he}function L(A,O){let he=g.get(O);return he!==void 0?++he.usedTimes:(he=new CR(r,O,A,l),h.push(he),g.set(O,he)),he}function B(A){if(--A.usedTimes===0){const O=h.indexOf(A);h[O]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function G(A){p.remove(A)}function k(){p.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:U,acquireProgram:L,releaseProgram:B,releaseShaderCache:G,programs:h,dispose:k}}function OR(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function PR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function $v(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function e_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(_){let b=0;return _.isInstancedMesh&&(b+=2),_.isSkinnedMesh&&(b+=1),b}function p(_,b,T,C,y,S){let D=r[e];return D===void 0?(D={id:_.id,object:_,geometry:b,material:T,materialVariant:f(_),groupOrder:C,renderOrder:_.renderOrder,z:y,group:S},r[e]=D):(D.id=_.id,D.object=_,D.geometry=b,D.material=T,D.materialVariant=f(_),D.groupOrder=C,D.renderOrder=_.renderOrder,D.z=y,D.group=S),e++,D}function m(_,b,T,C,y,S){const D=p(_,b,T,C,y,S);T.transmission>0?s.push(D):T.transparent===!0?l.push(D):i.push(D)}function h(_,b,T,C,y,S){const D=p(_,b,T,C,y,S);T.transmission>0?s.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function g(_,b){i.length>1&&i.sort(_||PR),s.length>1&&s.sort(b||$v),l.length>1&&l.sort(b||$v)}function x(){for(let _=e,b=r.length;_<b;_++){const T=r[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:x,sort:g}}function IR(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new e_,r.set(s,[f])):l>=c.length?(f=new e_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function FR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Lt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[e.id]=i,i}}}function BR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let zR=0;function HR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function GR(r){const e=new FR,i=BR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new oe);const l=new oe,c=new ln,f=new ln;function p(h){let g=0,x=0,_=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let b=0,T=0,C=0,y=0,S=0,D=0,U=0,L=0,B=0,G=0,k=0;h.sort(HR);for(let O=0,he=h.length;O<he;O++){const V=h[O],te=V.color,se=V.intensity,ue=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===zr?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=te.r*se,x+=te.g*se,_+=te.b*se;else if(V.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(V.sh.coefficients[I],se);k++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,de=i.get(V);de.shadowIntensity=H.intensity,de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,s.directionalShadow[b]=de,s.directionalShadowMap[b]=Q,s.directionalShadowMatrix[b]=V.shadow.matrix,D++}s.directional[b]=I,b++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(te).multiplyScalar(se),I.distance=ue,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,s.spot[C]=I;const H=V.shadow;if(V.map&&(s.spotLightMap[B]=V.map,B++,H.updateMatrices(V),V.castShadow&&G++),s.spotLightMatrix[C]=H.matrix,V.castShadow){const de=i.get(V);de.shadowIntensity=H.intensity,de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,s.spotShadow[C]=de,s.spotShadowMap[C]=Q,L++}C++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(te).multiplyScalar(se),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=I,y++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const H=V.shadow,de=i.get(V);de.shadowIntensity=H.intensity,de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,de.shadowCameraNear=H.camera.near,de.shadowCameraFar=H.camera.far,s.pointShadow[T]=de,s.pointShadowMap[T]=Q,s.pointShadowMatrix[T]=V.shadow.matrix,U++}s.point[T]=I,T++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(se),I.groundColor.copy(V.groundColor).multiplyScalar(se),s.hemi[S]=I,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=_;const A=s.hash;(A.directionalLength!==b||A.pointLength!==T||A.spotLength!==C||A.rectAreaLength!==y||A.hemiLength!==S||A.numDirectionalShadows!==D||A.numPointShadows!==U||A.numSpotShadows!==L||A.numSpotMaps!==B||A.numLightProbes!==k)&&(s.directional.length=b,s.spot.length=C,s.rectArea.length=y,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=L+B-G,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=k,A.directionalLength=b,A.pointLength=T,A.spotLength=C,A.rectAreaLength=y,A.hemiLength=S,A.numDirectionalShadows=D,A.numPointShadows=U,A.numSpotShadows=L,A.numSpotMaps=B,A.numLightProbes=k,s.version=zR++)}function m(h,g){let x=0,_=0,b=0,T=0,C=0;const y=g.matrixWorldInverse;for(let S=0,D=h.length;S<D;S++){const U=h[S];if(U.isDirectionalLight){const L=s.directional[x];L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),x++}else if(U.isSpotLight){const L=s.spot[b];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),b++}else if(U.isRectAreaLight){const L=s.rectArea[T];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(y),f.identity(),c.copy(U.matrixWorld),c.premultiply(y),f.extractRotation(c),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),T++}else if(U.isPointLight){const L=s.point[_];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(y),_++}else if(U.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(y),C++}}}return{setup:p,setupView:m,state:s}}function t_(r){const e=new GR(r),i=[],s=[];function l(g){h.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function p(){e.setup(i)}function m(g){e.setupView(i,g)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function VR(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new t_(r),e.set(l,[p])):c>=f.length?(p=new t_(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const kR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jR=`uniform sampler2D shadow_pass;
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
}`,XR=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],WR=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],n_=new ln,Ko=new oe,rh=new oe;function qR(r,e,i){let s=new K_;const l=new ot,c=new ot,f=new tn,p=new lE,m=new cE,h={},g=i.maxTextureSize,x={[cs]:kn,[kn]:cs,[xa]:xa},_=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:kR,fragmentShader:jR}),b=_.clone();b.defines.HORIZONTAL_PASS=1;const T=new Ci;T.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new di(T,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let S=this.type;this.render=function(G,k,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;this.type===QM&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kc);const O=r.getRenderTarget(),he=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),te=r.state;te.setBlending(ya),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const se=S!==this.type;se&&k.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(Q=>Q.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,Q=G.length;ue<Q;ue++){const I=G[ue],H=I.shadow;if(H===void 0){at("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const de=H.getFrameExtents();l.multiply(de),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/de.x),l.x=c.x*de.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/de.y),l.y=c.y*de.y,H.mapSize.y=c.y));const ve=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ve,H.map===null||se===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qo){if(I.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ai(l.x,l.y,{format:zr,type:Xi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new il(l.x,l.y,Ti),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=Ea,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn}else I.isPointLight?(H.map=new nx(l.x),H.map.depthTexture=new iE(l.x,ji)):(H.map=new Ai(l.x,l.y),H.map.depthTexture=new il(l.x,l.y,ji)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=Ea,this.type===Kc?(H.map.depthTexture.compareFunction=ve?gp:mp,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn);H.camera.updateProjectionMatrix()}const P=H.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<P;K++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,K),r.clear();else{K===0&&(r.setRenderTarget(H.map),r.clear());const pe=H.getViewport(K);f.set(c.x*pe.x,c.y*pe.y,c.x*pe.z,c.y*pe.w),te.viewport(f)}if(I.isPointLight){const pe=H.camera,Se=H.matrix,Ne=I.distance||pe.far;Ne!==pe.far&&(pe.far=Ne,pe.updateProjectionMatrix()),Ko.setFromMatrixPosition(I.matrixWorld),pe.position.copy(Ko),rh.copy(pe.position),rh.add(XR[K]),pe.up.copy(WR[K]),pe.lookAt(rh),pe.updateMatrixWorld(),Se.makeTranslation(-Ko.x,-Ko.y,-Ko.z),n_.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(n_,pe.coordinateSystem,pe.reversedDepth)}else H.updateMatrices(I);s=H.getFrustum(),L(k,A,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===Qo&&D(H,A),H.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(O,he,V)};function D(G,k){const A=e.update(C);_.defines.VSM_SAMPLES!==G.blurSamples&&(_.defines.VSM_SAMPLES=G.blurSamples,b.defines.VSM_SAMPLES=G.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ai(l.x,l.y,{format:zr,type:Xi})),_.uniforms.shadow_pass.value=G.map.depthTexture,_.uniforms.resolution.value=G.mapSize,_.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(k,null,A,_,C,null),b.uniforms.shadow_pass.value=G.mapPass.texture,b.uniforms.resolution.value=G.mapSize,b.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(k,null,A,b,C,null)}function U(G,k,A,O){let he=null;const V=A.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)he=V;else if(he=A.isPointLight===!0?m:p,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const te=he.uuid,se=k.uuid;let ue=h[te];ue===void 0&&(ue={},h[te]=ue);let Q=ue[se];Q===void 0&&(Q=he.clone(),ue[se]=Q,k.addEventListener("dispose",B)),he=Q}if(he.visible=k.visible,he.wireframe=k.wireframe,O===Qo?he.side=k.shadowSide!==null?k.shadowSide:k.side:he.side=k.shadowSide!==null?k.shadowSide:x[k.side],he.alphaMap=k.alphaMap,he.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,he.map=k.map,he.clipShadows=k.clipShadows,he.clippingPlanes=k.clippingPlanes,he.clipIntersection=k.clipIntersection,he.displacementMap=k.displacementMap,he.displacementScale=k.displacementScale,he.displacementBias=k.displacementBias,he.wireframeLinewidth=k.wireframeLinewidth,he.linewidth=k.linewidth,A.isPointLight===!0&&he.isMeshDistanceMaterial===!0){const te=r.properties.get(he);te.light=A}return he}function L(G,k,A,O,he){if(G.visible===!1)return;if(G.layers.test(k.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&he===Qo)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,G.matrixWorld);const se=e.update(G),ue=G.material;if(Array.isArray(ue)){const Q=se.groups;for(let I=0,H=Q.length;I<H;I++){const de=Q[I],ve=ue[de.materialIndex];if(ve&&ve.visible){const P=U(G,ve,O,he);G.onBeforeShadow(r,G,k,A,se,P,de),r.renderBufferDirect(A,null,se,P,G,de),G.onAfterShadow(r,G,k,A,se,P,de)}}}else if(ue.visible){const Q=U(G,ue,O,he);G.onBeforeShadow(r,G,k,A,se,Q,null),r.renderBufferDirect(A,null,se,Q,G,null),G.onAfterShadow(r,G,k,A,se,Q,null)}}const te=G.children;for(let se=0,ue=te.length;se<ue;se++)L(te[se],k,A,O,he)}function B(G){G.target.removeEventListener("dispose",B);for(const A in h){const O=h[A],he=G.target.uuid;he in O&&(O[he].dispose(),delete O[he])}}}function YR(r,e){function i(){let W=!1;const De=new tn;let Re=null;const Ie=new tn(0,0,0,0);return{setMask:function(Te){Re!==Te&&!W&&(r.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){W=Te},setClear:function(Te,ge,Ve,nt,Ot){Ot===!0&&(Te*=nt,ge*=nt,Ve*=nt),De.set(Te,ge,Ve,nt),Ie.equals(De)===!1&&(r.clearColor(Te,ge,Ve,nt),Ie.copy(De))},reset:function(){W=!1,Re=null,Ie.set(-1,0,0,0)}}}function s(){let W=!1,De=!1,Re=null,Ie=null,Te=null;return{setReversed:function(ge){if(De!==ge){const Ve=e.get("EXT_clip_control");ge?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),De=ge;const nt=Te;Te=null,this.setClear(nt)}},getReversed:function(){return De},setTest:function(ge){ge?be(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(ge){Re!==ge&&!W&&(r.depthMask(ge),Re=ge)},setFunc:function(ge){if(De&&(ge=Ub[ge]),Ie!==ge){switch(ge){case dh:r.depthFunc(r.NEVER);break;case hh:r.depthFunc(r.ALWAYS);break;case ph:r.depthFunc(r.LESS);break;case Fr:r.depthFunc(r.LEQUAL);break;case mh:r.depthFunc(r.EQUAL);break;case gh:r.depthFunc(r.GEQUAL);break;case vh:r.depthFunc(r.GREATER);break;case _h:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=ge}},setLocked:function(ge){W=ge},setClear:function(ge){Te!==ge&&(Te=ge,De&&(ge=1-ge),r.clearDepth(ge))},reset:function(){W=!1,Re=null,Ie=null,Te=null,De=!1}}}function l(){let W=!1,De=null,Re=null,Ie=null,Te=null,ge=null,Ve=null,nt=null,Ot=null;return{setTest:function(At){W||(At?be(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(At){De!==At&&!W&&(r.stencilMask(At),De=At)},setFunc:function(At,pi,_n){(Re!==At||Ie!==pi||Te!==_n)&&(r.stencilFunc(At,pi,_n),Re=At,Ie=pi,Te=_n)},setOp:function(At,pi,_n){(ge!==At||Ve!==pi||nt!==_n)&&(r.stencilOp(At,pi,_n),ge=At,Ve=pi,nt=_n)},setLocked:function(At){W=At},setClear:function(At){Ot!==At&&(r.clearStencil(At),Ot=At)},reset:function(){W=!1,De=null,Re=null,Ie=null,Te=null,ge=null,Ve=null,nt=null,Ot=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let g={},x={},_=new WeakMap,b=[],T=null,C=!1,y=null,S=null,D=null,U=null,L=null,B=null,G=null,k=new Lt(0,0,0),A=0,O=!1,he=null,V=null,te=null,se=null,ue=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const de=r.getParameter(r.VERSION);de.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(de)[1]),I=H>=1):de.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),I=H>=2);let ve=null,P={};const K=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),Se=new tn().fromArray(K),Ne=new tn().fromArray(pe);function Ye(W,De,Re,Ie){const Te=new Uint8Array(4),ge=r.createTexture();r.bindTexture(W,ge),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ve=0;Ve<Re;Ve++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(De+Ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return ge}const ee={};ee[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),be(r.DEPTH_TEST),f.setFunc(Fr),rt(!1),yt(av),be(r.CULL_FACE),xt(ya);function be(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function ye(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Je(W,De){return x[W]!==De?(r.bindFramebuffer(W,De),x[W]=De,W===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=De),W===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=De),!0):!1}function Ke(W,De){let Re=b,Ie=!1;if(W){Re=_.get(De),Re===void 0&&(Re=[],_.set(De,Re));const Te=W.textures;if(Re.length!==Te.length||Re[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,Ve=Te.length;ge<Ve;ge++)Re[ge]=r.COLOR_ATTACHMENT0+ge;Re.length=Te.length,Ie=!0}}else Re[0]!==r.BACK&&(Re[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(Re)}function $e(W){return T!==W?(r.useProgram(W),T=W,!0):!1}const qt={[Ls]:r.FUNC_ADD,[$M]:r.FUNC_SUBTRACT,[eb]:r.FUNC_REVERSE_SUBTRACT};qt[tb]=r.MIN,qt[nb]=r.MAX;const ht={[ib]:r.ZERO,[ab]:r.ONE,[sb]:r.SRC_COLOR,[uh]:r.SRC_ALPHA,[fb]:r.SRC_ALPHA_SATURATE,[cb]:r.DST_COLOR,[ob]:r.DST_ALPHA,[rb]:r.ONE_MINUS_SRC_COLOR,[fh]:r.ONE_MINUS_SRC_ALPHA,[ub]:r.ONE_MINUS_DST_COLOR,[lb]:r.ONE_MINUS_DST_ALPHA,[db]:r.CONSTANT_COLOR,[hb]:r.ONE_MINUS_CONSTANT_COLOR,[pb]:r.CONSTANT_ALPHA,[mb]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(W,De,Re,Ie,Te,ge,Ve,nt,Ot,At){if(W===ya){C===!0&&(ye(r.BLEND),C=!1);return}if(C===!1&&(be(r.BLEND),C=!0),W!==JM){if(W!==y||At!==O){if((S!==Ls||L!==Ls)&&(r.blendEquation(r.FUNC_ADD),S=Ls,L=Ls),At)switch(W){case Pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ch:r.blendFunc(r.ONE,r.ONE);break;case sv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",W);break}else switch(W){case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ch:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case sv:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rv:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",W);break}D=null,U=null,B=null,G=null,k.set(0,0,0),A=0,y=W,O=At}return}Te=Te||De,ge=ge||Re,Ve=Ve||Ie,(De!==S||Te!==L)&&(r.blendEquationSeparate(qt[De],qt[Te]),S=De,L=Te),(Re!==D||Ie!==U||ge!==B||Ve!==G)&&(r.blendFuncSeparate(ht[Re],ht[Ie],ht[ge],ht[Ve]),D=Re,U=Ie,B=ge,G=Ve),(nt.equals(k)===!1||Ot!==A)&&(r.blendColor(nt.r,nt.g,nt.b,Ot),k.copy(nt),A=Ot),y=W,O=!1}function Ct(W,De){W.side===xa?ye(r.CULL_FACE):be(r.CULL_FACE);let Re=W.side===kn;De&&(Re=!Re),rt(Re),W.blending===Pr&&W.transparent===!1?xt(ya):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ie=W.stencilWrite;p.setTest(Ie),Ie&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),jt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(W){he!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),he=W)}function yt(W){W!==ZM?(be(r.CULL_FACE),W!==V&&(W===av?r.cullFace(r.BACK):W===KM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),V=W}function j(W){W!==te&&(I&&r.lineWidth(W),te=W)}function jt(W,De,Re){W?(be(r.POLYGON_OFFSET_FILL),(se!==De||ue!==Re)&&(se=De,ue=Re,f.getReversed()&&(De=-De),r.polygonOffset(De,Re))):ye(r.POLYGON_OFFSET_FILL)}function Mt(W){W?be(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function bt(W){W===void 0&&(W=r.TEXTURE0+Q-1),ve!==W&&(r.activeTexture(W),ve=W)}function Ge(W,De,Re){Re===void 0&&(ve===null?Re=r.TEXTURE0+Q-1:Re=ve);let Ie=P[Re];Ie===void 0&&(Ie={type:void 0,texture:void 0},P[Re]=Ie),(Ie.type!==W||Ie.texture!==De)&&(ve!==Re&&(r.activeTexture(Re),ve=Re),r.bindTexture(W,De||ee[W]),Ie.type=W,Ie.texture=De)}function N(){const W=P[ve];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Z(){try{r.texSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function le(){try{r.texSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function we(){try{r.compressedTexSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ce(){try{r.texStorage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Xe(){try{r.texStorage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Qe(){try{r.texImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ee(){try{r.texImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ae(W){Se.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Se.copy(W))}function Fe(W){Ne.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ne.copy(W))}function He(W,De){let Re=h.get(De);Re===void 0&&(Re=new WeakMap,h.set(De,Re));let Ie=Re.get(W);Ie===void 0&&(Ie=r.getUniformBlockIndex(De,W.name),Re.set(W,Ie))}function Pe(W,De){const Ie=h.get(De).get(W);m.get(De)!==Ie&&(r.uniformBlockBinding(De,Ie,W.__bindingPointIndex),m.set(De,Ie))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ve=null,P={},x={},_=new WeakMap,b=[],T=null,C=!1,y=null,S=null,D=null,U=null,L=null,B=null,G=null,k=new Lt(0,0,0),A=0,O=!1,he=null,V=null,te=null,se=null,ue=null,Se.set(0,0,r.canvas.width,r.canvas.height),Ne.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:be,disable:ye,bindFramebuffer:Je,drawBuffers:Ke,useProgram:$e,setBlending:xt,setMaterial:Ct,setFlipSided:rt,setCullFace:yt,setLineWidth:j,setPolygonOffset:jt,setScissorTest:Mt,activeTexture:bt,bindTexture:Ge,unbindTexture:N,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Qe,texImage3D:Ee,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Ce,texStorage3D:Xe,texSubImage2D:Z,texSubImage3D:le,compressedTexSubImage2D:ae,compressedTexSubImage3D:we,scissor:Ae,viewport:Fe,reset:ct}}function ZR(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ot,g=new WeakMap;let x;const _=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,v){return b?new OffscreenCanvas(N,v):su("canvas")}function C(N,v,F){let Z=1;const le=Ge(N);if((le.width>F||le.height>F)&&(Z=F/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ae=Math.floor(Z*le.width),we=Math.floor(Z*le.height);x===void 0&&(x=T(ae,we));const Ce=v?T(ae,we):x;return Ce.width=ae,Ce.height=we,Ce.getContext("2d").drawImage(N,0,0,ae,we),at("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ae+"x"+we+")."),Ce}else return"data"in N&&at("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),N;return N}function y(N){return N.generateMipmaps}function S(N){r.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,v,F,Z,le=!1){if(N!==null){if(r[N]!==void 0)return r[N];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ae=v;if(v===r.RED&&(F===r.FLOAT&&(ae=r.R32F),F===r.HALF_FLOAT&&(ae=r.R16F),F===r.UNSIGNED_BYTE&&(ae=r.R8)),v===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.R8UI),F===r.UNSIGNED_SHORT&&(ae=r.R16UI),F===r.UNSIGNED_INT&&(ae=r.R32UI),F===r.BYTE&&(ae=r.R8I),F===r.SHORT&&(ae=r.R16I),F===r.INT&&(ae=r.R32I)),v===r.RG&&(F===r.FLOAT&&(ae=r.RG32F),F===r.HALF_FLOAT&&(ae=r.RG16F),F===r.UNSIGNED_BYTE&&(ae=r.RG8)),v===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.RG8UI),F===r.UNSIGNED_SHORT&&(ae=r.RG16UI),F===r.UNSIGNED_INT&&(ae=r.RG32UI),F===r.BYTE&&(ae=r.RG8I),F===r.SHORT&&(ae=r.RG16I),F===r.INT&&(ae=r.RG32I)),v===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),F===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),F===r.UNSIGNED_INT&&(ae=r.RGB32UI),F===r.BYTE&&(ae=r.RGB8I),F===r.SHORT&&(ae=r.RGB16I),F===r.INT&&(ae=r.RGB32I)),v===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),F===r.UNSIGNED_INT&&(ae=r.RGBA32UI),F===r.BYTE&&(ae=r.RGBA8I),F===r.SHORT&&(ae=r.RGBA16I),F===r.INT&&(ae=r.RGBA32I)),v===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(ae=r.R11F_G11F_B10F)),v===r.RGBA){const we=le?iu:Tt.getTransfer(Z);F===r.FLOAT&&(ae=r.RGBA32F),F===r.HALF_FLOAT&&(ae=r.RGBA16F),F===r.UNSIGNED_BYTE&&(ae=we===Bt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function L(N,v){let F;return N?v===null||v===ji||v===nl?F=r.DEPTH24_STENCIL8:v===Ti?F=r.DEPTH32F_STENCIL8:v===tl&&(F=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ji||v===nl?F=r.DEPTH_COMPONENT24:v===Ti?F=r.DEPTH_COMPONENT32F:v===tl&&(F=r.DEPTH_COMPONENT16),F}function B(N,v){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Rn&&N.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?v.mipmaps.length:1}function G(N){const v=N.target;v.removeEventListener("dispose",G),A(v),v.isVideoTexture&&g.delete(v)}function k(N){const v=N.target;v.removeEventListener("dispose",k),he(v)}function A(N){const v=s.get(N);if(v.__webglInit===void 0)return;const F=N.source,Z=_.get(F);if(Z){const le=Z[v.__cacheKey];le.usedTimes--,le.usedTimes===0&&O(N),Object.keys(Z).length===0&&_.delete(F)}s.remove(N)}function O(N){const v=s.get(N);r.deleteTexture(v.__webglTexture);const F=N.source,Z=_.get(F);delete Z[v.__cacheKey],f.memory.textures--}function he(N){const v=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let le=0;le<v.__webglFramebuffer[Z].length;le++)r.deleteFramebuffer(v.__webglFramebuffer[Z][le]);else r.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)r.deleteFramebuffer(v.__webglFramebuffer[Z]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=N.textures;for(let Z=0,le=F.length;Z<le;Z++){const ae=s.get(F[Z]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),f.memory.textures--),s.remove(F[Z])}s.remove(N)}let V=0;function te(){V=0}function se(){const N=V;return N>=l.maxTextures&&at("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function ue(N){const v=[];return v.push(N.wrapS),v.push(N.wrapT),v.push(N.wrapR||0),v.push(N.magFilter),v.push(N.minFilter),v.push(N.anisotropy),v.push(N.internalFormat),v.push(N.format),v.push(N.type),v.push(N.generateMipmaps),v.push(N.premultiplyAlpha),v.push(N.flipY),v.push(N.unpackAlignment),v.push(N.colorSpace),v.join()}function Q(N,v){const F=s.get(N);if(N.isVideoTexture&&Mt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&F.__version!==N.version){const Z=N.image;if(Z===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(F,N,v);return}}else N.isExternalTexture&&(F.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+v)}function I(N,v){const F=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&F.__version!==N.version){ee(F,N,v);return}else N.isExternalTexture&&(F.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+v)}function H(N,v){const F=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&F.__version!==N.version){ee(F,N,v);return}i.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+v)}function de(N,v){const F=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&F.__version!==N.version){be(F,N,v);return}i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+v)}const ve={[xh]:r.REPEAT,[ei]:r.CLAMP_TO_EDGE,[Sh]:r.MIRRORED_REPEAT},P={[Rn]:r.NEAREST,[_b]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[dn]:r.LINEAR,[Cd]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},K={[Mb]:r.NEVER,[Rb]:r.ALWAYS,[bb]:r.LESS,[mp]:r.LEQUAL,[Eb]:r.EQUAL,[gp]:r.GEQUAL,[Tb]:r.GREATER,[Ab]:r.NOTEQUAL};function pe(N,v){if(v.type===Ti&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===Cd||v.magFilter===bc||v.magFilter===Ps||v.minFilter===dn||v.minFilter===Cd||v.minFilter===bc||v.minFilter===Ps)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,ve[v.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,ve[v.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,ve[v.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,P[v.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,P[v.minFilter]),v.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,K[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Rn||v.minFilter!==bc&&v.minFilter!==Ps||v.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||s.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,l.getMaxAnisotropy())),s.get(v).__currentAnisotropy=v.anisotropy}}}function Se(N,v){let F=!1;N.__webglInit===void 0&&(N.__webglInit=!0,v.addEventListener("dispose",G));const Z=v.source;let le=_.get(Z);le===void 0&&(le={},_.set(Z,le));const ae=ue(v);if(ae!==N.__cacheKey){le[ae]===void 0&&(le[ae]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,F=!0),le[ae].usedTimes++;const we=le[N.__cacheKey];we!==void 0&&(le[N.__cacheKey].usedTimes--,we.usedTimes===0&&O(v)),N.__cacheKey=ae,N.__webglTexture=le[ae].texture}return F}function Ne(N,v,F){return Math.floor(Math.floor(N/F)/v)}function Ye(N,v,F,Z){const ae=N.updateRanges;if(ae.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,F,Z,v.data);else{ae.sort((Ee,Ae)=>Ee.start-Ae.start);let we=0;for(let Ee=1;Ee<ae.length;Ee++){const Ae=ae[we],Fe=ae[Ee],He=Ae.start+Ae.count,Pe=Ne(Fe.start,v.width,4),ct=Ne(Ae.start,v.width,4);Fe.start<=He+1&&Pe===ct&&Ne(Fe.start+Fe.count-1,v.width,4)===Pe?Ae.count=Math.max(Ae.count,Fe.start+Fe.count-Ae.start):(++we,ae[we]=Fe)}ae.length=we+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),Xe=r.getParameter(r.UNPACK_SKIP_PIXELS),Qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ee=0,Ae=ae.length;Ee<Ae;Ee++){const Fe=ae[Ee],He=Math.floor(Fe.start/4),Pe=Math.ceil(Fe.count/4),ct=He%v.width,W=Math.floor(He/v.width),De=Pe,Re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ct,W,De,Re,F,Z,v.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qe)}}function ee(N,v,F){let Z=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=r.TEXTURE_3D);const le=Se(N,v),ae=v.source;i.bindTexture(Z,N.__webglTexture,r.TEXTURE0+F);const we=s.get(ae);if(ae.version!==we.__version||le===!0){i.activeTexture(r.TEXTURE0+F);const Ce=Tt.getPrimaries(Tt.workingColorSpace),Xe=v.colorSpace===os?null:Tt.getPrimaries(v.colorSpace),Qe=v.colorSpace===os||Ce===Xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Ee=C(v.image,!1,l.maxTextureSize);Ee=bt(v,Ee);const Ae=c.convert(v.format,v.colorSpace),Fe=c.convert(v.type);let He=U(v.internalFormat,Ae,Fe,v.colorSpace,v.isVideoTexture);pe(Z,v);let Pe;const ct=v.mipmaps,W=v.isVideoTexture!==!0,De=we.__version===void 0||le===!0,Re=ae.dataReady,Ie=B(v,Ee);if(v.isDepthTexture)He=L(v.format===Is,v.type),De&&(W?i.texStorage2D(r.TEXTURE_2D,1,He,Ee.width,Ee.height):i.texImage2D(r.TEXTURE_2D,0,He,Ee.width,Ee.height,0,Ae,Fe,null));else if(v.isDataTexture)if(ct.length>0){W&&De&&i.texStorage2D(r.TEXTURE_2D,Ie,He,ct[0].width,ct[0].height);for(let Te=0,ge=ct.length;Te<ge;Te++)Pe=ct[Te],W?Re&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):i.texImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Fe,Pe.data);v.generateMipmaps=!1}else W?(De&&i.texStorage2D(r.TEXTURE_2D,Ie,He,Ee.width,Ee.height),Re&&Ye(v,Ee,Ae,Fe)):i.texImage2D(r.TEXTURE_2D,0,He,Ee.width,Ee.height,0,Ae,Fe,Ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){W&&De&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,ct[0].width,ct[0].height,Ee.depth);for(let Te=0,ge=ct.length;Te<ge;Te++)if(Pe=ct[Te],v.format!==fi)if(Ae!==null)if(W){if(Re)if(v.layerUpdates.size>0){const Ve=Lv(Pe.width,Pe.height,v.format,v.type);for(const nt of v.layerUpdates){const Ot=Pe.data.subarray(nt*Ve/Pe.data.BYTES_PER_ELEMENT,(nt+1)*Ve/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,nt,Pe.width,Pe.height,1,Ae,Ot)}v.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ee.depth,Ae,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Ee.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ee.depth,Ae,Fe,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Ee.depth,0,Ae,Fe,Pe.data)}else{W&&De&&i.texStorage2D(r.TEXTURE_2D,Ie,He,ct[0].width,ct[0].height);for(let Te=0,ge=ct.length;Te<ge;Te++)Pe=ct[Te],v.format!==fi?Ae!==null?W?Re&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):i.texImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Fe,Pe.data)}else if(v.isDataArrayTexture)if(W){if(De&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,Ee.width,Ee.height,Ee.depth),Re)if(v.layerUpdates.size>0){const Te=Lv(Ee.width,Ee.height,v.format,v.type);for(const ge of v.layerUpdates){const Ve=Ee.data.subarray(ge*Te/Ee.data.BYTES_PER_ELEMENT,(ge+1)*Te/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Ee.width,Ee.height,1,Ae,Fe,Ve)}v.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Fe,Ee.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,He,Ee.width,Ee.height,Ee.depth,0,Ae,Fe,Ee.data);else if(v.isData3DTexture)W?(De&&i.texStorage3D(r.TEXTURE_3D,Ie,He,Ee.width,Ee.height,Ee.depth),Re&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Fe,Ee.data)):i.texImage3D(r.TEXTURE_3D,0,He,Ee.width,Ee.height,Ee.depth,0,Ae,Fe,Ee.data);else if(v.isFramebufferTexture){if(De)if(W)i.texStorage2D(r.TEXTURE_2D,Ie,He,Ee.width,Ee.height);else{let Te=Ee.width,ge=Ee.height;for(let Ve=0;Ve<Ie;Ve++)i.texImage2D(r.TEXTURE_2D,Ve,He,Te,ge,0,Ae,Fe,null),Te>>=1,ge>>=1}}else if(ct.length>0){if(W&&De){const Te=Ge(ct[0]);i.texStorage2D(r.TEXTURE_2D,Ie,He,Te.width,Te.height)}for(let Te=0,ge=ct.length;Te<ge;Te++)Pe=ct[Te],W?Re&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ae,Fe,Pe):i.texImage2D(r.TEXTURE_2D,Te,He,Ae,Fe,Pe);v.generateMipmaps=!1}else if(W){if(De){const Te=Ge(Ee);i.texStorage2D(r.TEXTURE_2D,Ie,He,Te.width,Te.height)}Re&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Fe,Ee)}else i.texImage2D(r.TEXTURE_2D,0,He,Ae,Fe,Ee);y(v)&&S(Z),we.__version=ae.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function be(N,v,F){if(v.image.length!==6)return;const Z=Se(N,v),le=v.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+F);const ae=s.get(le);if(le.version!==ae.__version||Z===!0){i.activeTexture(r.TEXTURE0+F);const we=Tt.getPrimaries(Tt.workingColorSpace),Ce=v.colorSpace===os?null:Tt.getPrimaries(v.colorSpace),Xe=v.colorSpace===os||we===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Qe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ee=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let ge=0;ge<6;ge++)!Qe&&!Ee?Ae[ge]=C(v.image[ge],!0,l.maxCubemapSize):Ae[ge]=Ee?v.image[ge].image:v.image[ge],Ae[ge]=bt(v,Ae[ge]);const Fe=Ae[0],He=c.convert(v.format,v.colorSpace),Pe=c.convert(v.type),ct=U(v.internalFormat,He,Pe,v.colorSpace),W=v.isVideoTexture!==!0,De=ae.__version===void 0||Z===!0,Re=le.dataReady;let Ie=B(v,Fe);pe(r.TEXTURE_CUBE_MAP,v);let Te;if(Qe){W&&De&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,Fe.width,Fe.height);for(let ge=0;ge<6;ge++){Te=Ae[ge].mipmaps;for(let Ve=0;Ve<Te.length;Ve++){const nt=Te[Ve];v.format!==fi?He!==null?W?Re&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve,0,0,nt.width,nt.height,He,nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve,ct,nt.width,nt.height,0,nt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve,0,0,nt.width,nt.height,He,Pe,nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve,ct,nt.width,nt.height,0,He,Pe,nt.data)}}}else{if(Te=v.mipmaps,W&&De){Te.length>0&&Ie++;const ge=Ge(Ae[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ee){W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ae[ge].width,Ae[ge].height,He,Pe,Ae[ge].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ct,Ae[ge].width,Ae[ge].height,0,He,Pe,Ae[ge].data);for(let Ve=0;Ve<Te.length;Ve++){const Ot=Te[Ve].image[ge].image;W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve+1,0,0,Ot.width,Ot.height,He,Pe,Ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve+1,ct,Ot.width,Ot.height,0,He,Pe,Ot.data)}}else{W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,He,Pe,Ae[ge]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ct,He,Pe,Ae[ge]);for(let Ve=0;Ve<Te.length;Ve++){const nt=Te[Ve];W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve+1,0,0,He,Pe,nt.image[ge]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve+1,ct,He,Pe,nt.image[ge])}}}y(v)&&S(r.TEXTURE_CUBE_MAP),ae.__version=le.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function ye(N,v,F,Z,le,ae){const we=c.convert(F.format,F.colorSpace),Ce=c.convert(F.type),Xe=U(F.internalFormat,we,Ce,F.colorSpace),Qe=s.get(v),Ee=s.get(F);if(Ee.__renderTarget=v,!Qe.__hasExternalTextures){const Ae=Math.max(1,v.width>>ae),Fe=Math.max(1,v.height>>ae);le===r.TEXTURE_3D||le===r.TEXTURE_2D_ARRAY?i.texImage3D(le,ae,Xe,Ae,Fe,v.depth,0,we,Ce,null):i.texImage2D(le,ae,Xe,Ae,Fe,0,we,Ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),jt(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,le,Ee.__webglTexture,0,j(v)):(le===r.TEXTURE_2D||le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,le,Ee.__webglTexture,ae),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(N,v,F){if(r.bindRenderbuffer(r.RENDERBUFFER,N),v.depthBuffer){const Z=v.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,ae=L(v.stencilBuffer,le),we=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;jt(v)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(v),ae,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(v),ae,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ae,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,N)}else{const Z=v.textures;for(let le=0;le<Z.length;le++){const ae=Z[le],we=c.convert(ae.format,ae.colorSpace),Ce=c.convert(ae.type),Xe=U(ae.internalFormat,we,Ce,ae.colorSpace);jt(v)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(v),Xe,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(v),Xe,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Xe,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ke(N,v,F){const Z=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=s.get(v.depthTexture);if(le.__renderTarget=v,(!le.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(le.__webglInit===void 0&&(le.__webglInit=!0,v.depthTexture.addEventListener("dispose",G)),le.__webglTexture===void 0){le.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),pe(r.TEXTURE_CUBE_MAP,v.depthTexture);const Qe=c.convert(v.depthTexture.format),Ee=c.convert(v.depthTexture.type);let Ae;v.depthTexture.format===Ea?Ae=r.DEPTH_COMPONENT24:v.depthTexture.format===Is&&(Ae=r.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ae,v.width,v.height,0,Qe,Ee,null)}}else Q(v.depthTexture,0);const ae=le.__webglTexture,we=j(v),Ce=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,Xe=v.depthTexture.format===Is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ea)jt(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Ce,ae,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Ce,ae,0);else if(v.depthTexture.format===Is)jt(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Ce,ae,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Ce,ae,0);else throw new Error("Unknown depthTexture format")}function $e(N){const v=s.get(N),F=N.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==N.depthTexture){const Z=N.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const le=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),v.__depthDisposeCallback=le}v.__boundDepthTexture=Z}if(N.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)Ke(v.__webglFramebuffer[Z],N,Z);else{const Z=N.texture.mipmaps;Z&&Z.length>0?Ke(v.__webglFramebuffer[0],N,0):Ke(v.__webglFramebuffer,N,0)}else if(F){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=r.createRenderbuffer(),Je(v.__webglDepthbuffer[Z],N,!1);else{const le=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ae)}}else{const Z=N.texture.mipmaps;if(Z&&Z.length>0?i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Je(v.__webglDepthbuffer,N,!1);else{const le=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ae)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(N,v,F){const Z=s.get(N);v!==void 0&&ye(Z.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&$e(N)}function ht(N){const v=N.texture,F=s.get(N),Z=s.get(v);N.addEventListener("dispose",k);const le=N.textures,ae=N.isWebGLCubeRenderTarget===!0,we=le.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=v.version,f.memory.textures++),ae){F.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[Ce]=[];for(let Xe=0;Xe<v.mipmaps.length;Xe++)F.__webglFramebuffer[Ce][Xe]=r.createFramebuffer()}else F.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)F.__webglFramebuffer[Ce]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(we)for(let Ce=0,Xe=le.length;Ce<Xe;Ce++){const Qe=s.get(le[Ce]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&jt(N)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Ce=0;Ce<le.length;Ce++){const Xe=le[Ce];F.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[Ce]);const Qe=c.convert(Xe.format,Xe.colorSpace),Ee=c.convert(Xe.type),Ae=U(Xe.internalFormat,Qe,Ee,Xe.colorSpace,N.isXRRenderTarget===!0),Fe=j(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Ae,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,F.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(F.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),pe(r.TEXTURE_CUBE_MAP,v);for(let Ce=0;Ce<6;Ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let Xe=0;Xe<v.mipmaps.length;Xe++)ye(F.__webglFramebuffer[Ce][Xe],N,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe);else ye(F.__webglFramebuffer[Ce],N,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(v)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(we){for(let Ce=0,Xe=le.length;Ce<Xe;Ce++){const Qe=le[Ce],Ee=s.get(Qe);let Ae=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Ee.__webglTexture),pe(Ae,Qe),ye(F.__webglFramebuffer,N,Qe,r.COLOR_ATTACHMENT0+Ce,Ae,0),y(Qe)&&S(Ae)}i.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ce,Z.__webglTexture),pe(Ce,v),v.mipmaps&&v.mipmaps.length>0)for(let Xe=0;Xe<v.mipmaps.length;Xe++)ye(F.__webglFramebuffer[Xe],N,v,r.COLOR_ATTACHMENT0,Ce,Xe);else ye(F.__webglFramebuffer,N,v,r.COLOR_ATTACHMENT0,Ce,0);y(v)&&S(Ce),i.unbindTexture()}N.depthBuffer&&$e(N)}function xt(N){const v=N.textures;for(let F=0,Z=v.length;F<Z;F++){const le=v[F];if(y(le)){const ae=D(N),we=s.get(le).__webglTexture;i.bindTexture(ae,we),S(ae),i.unbindTexture()}}}const Ct=[],rt=[];function yt(N){if(N.samples>0){if(jt(N)===!1){const v=N.textures,F=N.width,Z=N.height;let le=r.COLOR_BUFFER_BIT;const ae=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=s.get(N),Ce=v.length>1;if(Ce)for(let Qe=0;Qe<v.length;Qe++)i.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Xe=N.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Qe=0;Qe<v.length;Qe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(le|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(le|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[Qe]);const Ee=s.get(v[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,F,Z,0,0,F,Z,le,r.NEAREST),m===!0&&(Ct.length=0,rt.length=0,Ct.push(r.COLOR_ATTACHMENT0+Qe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ct.push(ae),rt.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,rt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Qe=0;Qe<v.length;Qe++){i.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,we.__webglColorRenderbuffer[Qe]);const Ee=s.get(v[Qe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,Ee,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const v=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function j(N){return Math.min(l.maxSamples,N.samples)}function jt(N){const v=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Mt(N){const v=f.render.frame;g.get(N)!==v&&(g.set(N,v),N.update())}function bt(N,v){const F=N.colorSpace,Z=N.format,le=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||F!==Hr&&F!==os&&(Tt.getTransfer(F)===Bt?(Z!==fi||le!==ui)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",F)),v}function Ge(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=se,this.resetTextureUnits=te,this.setTexture2D=Q,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=de,this.rebindTextures=qt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function KR(r,e){function i(s,l=os){let c;const f=Tt.getTransfer(l);if(s===ui)return r.UNSIGNED_BYTE;if(s===up)return r.UNSIGNED_SHORT_4_4_4_4;if(s===fp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===I_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===F_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===O_)return r.BYTE;if(s===P_)return r.SHORT;if(s===tl)return r.UNSIGNED_SHORT;if(s===cp)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Ti)return r.FLOAT;if(s===Xi)return r.HALF_FLOAT;if(s===B_)return r.ALPHA;if(s===z_)return r.RGB;if(s===fi)return r.RGBA;if(s===Ea)return r.DEPTH_COMPONENT;if(s===Is)return r.DEPTH_STENCIL;if(s===H_)return r.RED;if(s===dp)return r.RED_INTEGER;if(s===zr)return r.RG;if(s===hp)return r.RG_INTEGER;if(s===pp)return r.RGBA_INTEGER;if(s===Qc||s===Jc||s===$c||s===eu)if(f===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yh||s===Mh||s===bh||s===Eh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===yh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Eh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Th||s===Ah||s===Rh||s===wh||s===Ch||s===Dh||s===Uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Th||s===Ah)return f===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Rh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===wh)return c.COMPRESSED_R11_EAC;if(s===Ch)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Dh)return c.COMPRESSED_RG11_EAC;if(s===Uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Nh||s===Lh||s===Oh||s===Ph||s===Ih||s===Fh||s===Bh||s===zh||s===Hh||s===Gh||s===Vh||s===kh||s===jh||s===Xh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Nh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ph)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ih)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===jh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wh||s===qh||s===Yh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Wh)return f===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Zh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const QR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JR=`
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

}`;class $R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new J_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Wi({vertexShader:QR,fragmentShader:JR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new Fs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ew extends jr{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,g=null,x=null,_=null,b=null,T=null;const C=typeof XRWebGLBinding<"u",y=new $R,S={},D=i.getContextAttributes();let U=null,L=null;const B=[],G=[],k=new ot;let A=null;const O=new bi;O.viewport=new tn;const he=new bi;he.viewport=new tn;const V=[O,he],te=new fE;let se=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let be=B[ee];return be===void 0&&(be=new Fd,B[ee]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ee){let be=B[ee];return be===void 0&&(be=new Fd,B[ee]=be),be.getGripSpace()},this.getHand=function(ee){let be=B[ee];return be===void 0&&(be=new Fd,B[ee]=be),be.getHandSpace()};function Q(ee){const be=G.indexOf(ee.inputSource);if(be===-1)return;const ye=B[be];ye!==void 0&&(ye.update(ee.inputSource,ee.frame,h||f),ye.dispatchEvent({type:ee.type,data:ee.inputSource}))}function I(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let ee=0;ee<B.length;ee++){const be=G[ee];be!==null&&(G[ee]=null,B[ee].disconnect(be))}se=null,ue=null,y.reset();for(const ee in S)delete S[ee];e.setRenderTarget(U),b=null,_=null,x=null,l=null,L=null,Ye.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){p=ee,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(k),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Je=null,Ke=null;D.depth&&(Ke=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=D.stencil?Is:Ea,Je=D.stencil?nl:ji);const $e={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer($e),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Ai(_.textureWidth,_.textureHeight,{format:fi,type:ui,depthTexture:new il(_.textureWidth,_.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ye={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),L=new Ai(b.framebufferWidth,b.framebufferHeight,{format:fi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Ye.setContext(l),Ye.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ee){for(let be=0;be<ee.removed.length;be++){const ye=ee.removed[be],Je=G.indexOf(ye);Je>=0&&(G[Je]=null,B[Je].disconnect(ye))}for(let be=0;be<ee.added.length;be++){const ye=ee.added[be];let Je=G.indexOf(ye);if(Je===-1){for(let $e=0;$e<B.length;$e++)if($e>=G.length){G.push(ye),Je=$e;break}else if(G[$e]===null){G[$e]=ye,Je=$e;break}if(Je===-1)break}const Ke=B[Je];Ke&&Ke.connect(ye)}}const de=new oe,ve=new oe;function P(ee,be,ye){de.setFromMatrixPosition(be.matrixWorld),ve.setFromMatrixPosition(ye.matrixWorld);const Je=de.distanceTo(ve),Ke=be.projectionMatrix.elements,$e=ye.projectionMatrix.elements,qt=Ke[14]/(Ke[10]-1),ht=Ke[14]/(Ke[10]+1),xt=(Ke[9]+1)/Ke[5],Ct=(Ke[9]-1)/Ke[5],rt=(Ke[8]-1)/Ke[0],yt=($e[8]+1)/$e[0],j=qt*rt,jt=qt*yt,Mt=Je/(-rt+yt),bt=Mt*-rt;if(be.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(bt),ee.translateZ(Mt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ke[10]===-1)ee.projectionMatrix.copy(be.projectionMatrix),ee.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const Ge=qt+Mt,N=ht+Mt,v=j-bt,F=jt+(Je-bt),Z=xt*ht/N*Ge,le=Ct*ht/N*Ge;ee.projectionMatrix.makePerspective(v,F,Z,le,Ge,N),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function K(ee,be){be===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(be.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let be=ee.near,ye=ee.far;y.texture!==null&&(y.depthNear>0&&(be=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),te.near=he.near=O.near=be,te.far=he.far=O.far=ye,(se!==te.near||ue!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),se=te.near,ue=te.far),te.layers.mask=ee.layers.mask|6,O.layers.mask=te.layers.mask&-5,he.layers.mask=te.layers.mask&-3;const Je=ee.parent,Ke=te.cameras;K(te,Je);for(let $e=0;$e<Ke.length;$e++)K(Ke[$e],Je);Ke.length===2?P(te,O,he):te.projectionMatrix.copy(O.projectionMatrix),pe(ee,te,Je)};function pe(ee,be,ye){ye===null?ee.matrix.copy(be.matrixWorld):(ee.matrix.copy(ye.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(be.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(be.projectionMatrix),ee.projectionMatrixInverse.copy(be.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=$h*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(_===null&&b===null))return m},this.setFoveation=function(ee){m=ee,_!==null&&(_.fixedFoveation=ee),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(ee){return S[ee]};let Se=null;function Ne(ee,be){if(g=be.getViewerPose(h||f),T=be,g!==null){const ye=g.views;b!==null&&(e.setRenderTargetFramebuffer(L,b.framebuffer),e.setRenderTarget(L));let Je=!1;ye.length!==te.cameras.length&&(te.cameras.length=0,Je=!0);for(let ht=0;ht<ye.length;ht++){const xt=ye[ht];let Ct=null;if(b!==null)Ct=b.getViewport(xt);else{const yt=x.getViewSubImage(_,xt);Ct=yt.viewport,ht===0&&(e.setRenderTargetTextures(L,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(L))}let rt=V[ht];rt===void 0&&(rt=new bi,rt.layers.enable(ht),rt.viewport=new tn,V[ht]=rt),rt.matrix.fromArray(xt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(xt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ht===0&&(te.matrix.copy(rt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Je===!0&&te.cameras.push(rt)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const ht=x.getDepthInformation(ye[0]);ht&&ht.isValid&&ht.texture&&y.init(ht,l.renderState)}if(Ke&&Ke.includes("camera-access")&&C){e.state.unbindTexture(),x=s.getBinding();for(let ht=0;ht<ye.length;ht++){const xt=ye[ht].camera;if(xt){let Ct=S[xt];Ct||(Ct=new J_,S[xt]=Ct);const rt=x.getCameraImage(xt);Ct.sourceTexture=rt}}}}for(let ye=0;ye<B.length;ye++){const Je=G[ye],Ke=B[ye];Je!==null&&Ke!==void 0&&Ke.update(Je,be,h||f)}Se&&Se(ee,be),be.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:be}),T=null}const Ye=new tx;Ye.setAnimationLoop(Ne),this.setAnimationLoop=function(ee){Se=ee},this.dispose=function(){}}}const Us=new Ta,tw=new ln;function nw(r,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,$_(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,D,U,L){S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),x(y,S)):S.isMeshPhongMaterial?(c(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),_(y,S),S.isMeshPhysicalMaterial&&b(y,S,L)):S.isMeshMatcapMaterial?(c(y,S),T(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),C(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(f(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?m(y,S,D,U):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const D=e.get(S),U=D.envMap,L=D.envMapRotation;U&&(y.envMap.value=U,Us.copy(L),Us.x*=-1,Us.y*=-1,Us.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),y.envMapRotation.value.setFromMatrix4(tw.makeRotationFromEuler(Us)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,D,U){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*D,y.scale.value=U*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function b(y,S,D){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const D=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function iw(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const L=U.program;s.uniformBlockBinding(D,L)}function h(D,U){let L=l[D.id];L===void 0&&(T(D),L=g(D),l[D.id]=L,D.addEventListener("dispose",y));const B=U.program;s.updateUBOMapping(D,B);const G=e.render.frame;c[D.id]!==G&&(_(D),c[D.id]=G)}function g(D){const U=x();D.__bindingPointIndex=U;const L=r.createBuffer(),B=D.__size,G=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,B,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,L),L}function x(){for(let D=0;D<p;D++)if(f.indexOf(D)===-1)return f.push(D),D;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const U=l[D.id],L=D.uniforms,B=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let G=0,k=L.length;G<k;G++){const A=Array.isArray(L[G])?L[G]:[L[G]];for(let O=0,he=A.length;O<he;O++){const V=A[O];if(b(V,G,O,B)===!0){const te=V.__offset,se=Array.isArray(V.value)?V.value:[V.value];let ue=0;for(let Q=0;Q<se.length;Q++){const I=se[Q],H=C(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,te+ue,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,ue),ue+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(D,U,L,B){const G=D.value,k=U+"_"+L;if(B[k]===void 0)return typeof G=="number"||typeof G=="boolean"?B[k]=G:B[k]=G.clone(),!0;{const A=B[k];if(typeof G=="number"||typeof G=="boolean"){if(A!==G)return B[k]=G,!0}else if(A.equals(G)===!1)return A.copy(G),!0}return!1}function T(D){const U=D.uniforms;let L=0;const B=16;for(let k=0,A=U.length;k<A;k++){const O=Array.isArray(U[k])?U[k]:[U[k]];for(let he=0,V=O.length;he<V;he++){const te=O[he],se=Array.isArray(te.value)?te.value:[te.value];for(let ue=0,Q=se.length;ue<Q;ue++){const I=se[ue],H=C(I),de=L%B,ve=de%H.boundary,P=de+ve;L+=ve,P!==0&&B-P<H.storage&&(L+=B-P),te.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=L,L+=H.storage}}}const G=L%B;return G>0&&(L+=B-G),D.__size=L,D.__cache={},this}function C(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",D),U}function y(D){const U=D.target;U.removeEventListener("dispose",y);const L=f.indexOf(U.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function S(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:h,dispose:S}}const aw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function sw(){return zi===null&&(zi=new Z_(aw,16,16,zr,Xi),zi.name="DFG_LUT",zi.minFilter=dn,zi.magFilter=dn,zi.wrapS=ei,zi.wrapT=ei,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class rw{constructor(e={}){const{canvas:i=Cb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:b=ui}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const C=b,y=new Set([pp,hp,dp]),S=new Set([ui,ji,tl,nl,up,fp]),D=new Uint32Array(4),U=new Int32Array(4);let L=null,B=null;const G=[],k=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let he=!1;this._outputColorSpace=ci;let V=0,te=0,se=null,ue=-1,Q=null;const I=new tn,H=new tn;let de=null;const ve=new Lt(0);let P=0,K=i.width,pe=i.height,Se=1,Ne=null,Ye=null;const ee=new tn(0,0,K,pe),be=new tn(0,0,K,pe);let ye=!1;const Je=new K_;let Ke=!1,$e=!1;const qt=new ln,ht=new oe,xt=new tn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function yt(){return se===null?Se:1}let j=s;function jt(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lp}`),i.addEventListener("webglcontextlost",Ve,!1),i.addEventListener("webglcontextrestored",nt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),j===null){const q="webgl2";if(j=jt(q,w),j===null)throw jt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw wt("WebGLRenderer: "+w.message),w}let Mt,bt,Ge,N,v,F,Z,le,ae,we,Ce,Xe,Qe,Ee,Ae,Fe,He,Pe,ct,W,De,Re,Ie;function Te(){Mt=new rA(j),Mt.init(),De=new KR(j,Mt),bt=new J1(j,Mt,e,De),Ge=new YR(j,Mt),bt.reversedDepthBuffer&&_&&Ge.buffers.depth.setReversed(!0),N=new cA(j),v=new OR,F=new ZR(j,Mt,Ge,v,bt,De,N),Z=new sA(O),le=new pE(j),Re=new K1(j,le),ae=new oA(j,le,N,Re),we=new fA(j,ae,le,Re,N),Pe=new uA(j,bt,F),Ae=new $1(v),Ce=new LR(O,Z,Mt,bt,Re,Ae),Xe=new nw(O,v),Qe=new IR,Ee=new VR(Mt),He=new Z1(O,Z,Ge,we,T,m),Fe=new qR(O,we,bt),Ie=new iw(j,N,bt,Ge),ct=new Q1(j,Mt,N),W=new lA(j,Mt,N),N.programs=Ce.programs,O.capabilities=bt,O.extensions=Mt,O.properties=v,O.renderLists=Qe,O.shadowMap=Fe,O.state=Ge,O.info=N}Te(),C!==ui&&(A=new hA(C,i.width,i.height,l,c));const ge=new ew(O,j);this.xr=ge,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=Mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(w){w!==void 0&&(Se=w,this.setSize(K,pe,!1))},this.getSize=function(w){return w.set(K,pe)},this.setSize=function(w,q,fe=!0){if(ge.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,pe=q,i.width=Math.floor(w*Se),i.height=Math.floor(q*Se),fe===!0&&(i.style.width=w+"px",i.style.height=q+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(K*Se,pe*Se).floor()},this.setDrawingBufferSize=function(w,q,fe){K=w,pe=q,Se=fe,i.width=Math.floor(w*fe),i.height=Math.floor(q*fe),this.setViewport(0,0,w,q)},this.setEffects=function(w){if(C===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let q=0;q<w.length;q++)if(w[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(ee)},this.setViewport=function(w,q,fe,ie){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,q,fe,ie),Ge.viewport(I.copy(ee).multiplyScalar(Se).round())},this.getScissor=function(w){return w.copy(be)},this.setScissor=function(w,q,fe,ie){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,q,fe,ie),Ge.scissor(H.copy(be).multiplyScalar(Se).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){Ge.setScissorTest(ye=w)},this.setOpaqueSort=function(w){Ne=w},this.setTransparentSort=function(w){Ye=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,fe=!0){let ie=0;if(w){let J=!1;if(se!==null){const Le=se.texture.format;J=y.has(Le)}if(J){const Le=se.texture.type,Be=S.has(Le),Ue=He.getClearColor(),ke=He.getClearAlpha(),We=Ue.r,st=Ue.g,lt=Ue.b;Be?(D[0]=We,D[1]=st,D[2]=lt,D[3]=ke,j.clearBufferuiv(j.COLOR,0,D)):(U[0]=We,U[1]=st,U[2]=lt,U[3]=ke,j.clearBufferiv(j.COLOR,0,U))}else ie|=j.COLOR_BUFFER_BIT}q&&(ie|=j.DEPTH_BUFFER_BIT),fe&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ve,!1),i.removeEventListener("webglcontextrestored",nt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),He.dispose(),Qe.dispose(),Ee.dispose(),v.dispose(),Z.dispose(),we.dispose(),Re.dispose(),Ie.dispose(),Ce.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",zs),ge.removeEventListener("sessionend",fl),qi.stop()};function Ve(w){w.preventDefault(),fv("WebGLRenderer: Context Lost."),he=!0}function nt(){fv("WebGLRenderer: Context Restored."),he=!1;const w=N.autoReset,q=Fe.enabled,fe=Fe.autoUpdate,ie=Fe.needsUpdate,J=Fe.type;Te(),N.autoReset=w,Fe.enabled=q,Fe.autoUpdate=fe,Fe.needsUpdate=ie,Fe.type=J}function Ot(w){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function At(w){const q=w.target;q.removeEventListener("dispose",At),pi(q)}function pi(w){_n(w),v.remove(w)}function _n(w){const q=v.get(w).programs;q!==void 0&&(q.forEach(function(fe){Ce.releaseProgram(fe)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,fe,ie,J,Le){q===null&&(q=Ct);const Be=J.isMesh&&J.matrixWorld.determinant()<0,Ue=dl(w,q,fe,ie,J);Ge.setMaterial(ie,Be);let ke=fe.index,We=1;if(ie.wireframe===!0){if(ke=ae.getWireframeAttribute(fe),ke===void 0)return;We=2}const st=fe.drawRange,lt=fe.attributes.position;let ze=st.start*We,Dt=(st.start+st.count)*We;Le!==null&&(ze=Math.max(ze,Le.start*We),Dt=Math.min(Dt,(Le.start+Le.count)*We)),ke!==null?(ze=Math.max(ze,0),Dt=Math.min(Dt,ke.count)):lt!=null&&(ze=Math.max(ze,0),Dt=Math.min(Dt,lt.count));const Kt=Dt-ze;if(Kt<0||Kt===1/0)return;Re.setup(J,ie,Ue,fe,ke);let Vt,Ut=ct;if(ke!==null&&(Vt=le.get(ke),Ut=W,Ut.setIndex(Vt)),J.isMesh)ie.wireframe===!0?(Ge.setLineWidth(ie.wireframeLinewidth*yt()),Ut.setMode(j.LINES)):Ut.setMode(j.TRIANGLES);else if(J.isLine){let an=ie.linewidth;an===void 0&&(an=1),Ge.setLineWidth(an*yt()),J.isLineSegments?Ut.setMode(j.LINES):J.isLineLoop?Ut.setMode(j.LINE_LOOP):Ut.setMode(j.LINE_STRIP)}else J.isPoints?Ut.setMode(j.POINTS):J.isSprite&&Ut.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ru("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const an=J._multiDrawStarts,qe=J._multiDrawCounts,Xt=J._multiDrawCount,_t=ke?le.get(ke).bytesPerElement:1,Pn=v.get(ie).currentProgram.getUniforms();for(let In=0;In<Xt;In++)Pn.setValue(j,"_gl_DrawID",In),Ut.render(an[In]/_t,qe[In])}else if(J.isInstancedMesh)Ut.renderInstances(ze,Kt,J.count);else if(fe.isInstancedBufferGeometry){const an=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,qe=Math.min(fe.instanceCount,an);Ut.renderInstances(ze,Kt,qe)}else Ut.render(ze,Kt)};function hn(w,q,fe){w.transparent===!0&&w.side===xa&&w.forceSinglePass===!1?(w.side=kn,w.needsUpdate=!0,Di(w,q,fe),w.side=cs,w.needsUpdate=!0,Di(w,q,fe),w.side=xa):Di(w,q,fe)}this.compile=function(w,q,fe=null){fe===null&&(fe=w),B=Ee.get(fe),B.init(q),k.push(B),fe.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),w!==fe&&w.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),B.setupLights();const ie=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Le=J.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const Ue=Le[Be];hn(Ue,fe,J),ie.add(Ue)}else hn(Le,fe,J),ie.add(Le)}),B=k.pop(),ie},this.compileAsync=function(w,q,fe=null){const ie=this.compile(w,q,fe);return new Promise(J=>{function Le(){if(ie.forEach(function(Be){v.get(Be).currentProgram.isReady()&&ie.delete(Be)}),ie.size===0){J(w);return}setTimeout(Le,10)}Mt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let xn=null;function wa(w){xn&&xn(w)}function zs(){qi.stop()}function fl(){qi.start()}const qi=new tx;qi.setAnimationLoop(wa),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(w){xn=w,ge.setAnimationLoop(w),w===null?qi.stop():qi.start()},ge.addEventListener("sessionstart",zs),ge.addEventListener("sessionend",fl),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(he===!0)return;const fe=ge.enabled===!0&&ge.isPresenting===!0,ie=A!==null&&(se===null||fe)&&A.begin(O,se);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(q),q=ge.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,q,se),B=Ee.get(w,k.length),B.init(q),k.push(B),qt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Je.setFromProjectionMatrix(qt,Gi,q.reversedDepth),$e=this.localClippingEnabled,Ke=Ae.init(this.clippingPlanes,$e),L=Qe.get(w,G.length),L.init(),G.push(L),ge.enabled===!0&&ge.isPresenting===!0){const Be=O.xr.getDepthSensingMesh();Be!==null&&Hs(Be,q,-1/0,O.sortObjects)}Hs(w,q,0,O.sortObjects),L.finish(),O.sortObjects===!0&&L.sort(Ne,Ye),rt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,rt&&He.addToRenderList(L,w),this.info.render.frame++,Ke===!0&&Ae.beginShadows();const J=B.state.shadowsArray;if(Fe.render(J,w,q),Ke===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&A.hasRenderPass())===!1){const Be=L.opaque,Ue=L.transmissive;if(B.setupLights(),q.isArrayCamera){const ke=q.cameras;if(Ue.length>0)for(let We=0,st=ke.length;We<st;We++){const lt=ke[We];Gs(Be,Ue,w,lt)}rt&&He.render(w);for(let We=0,st=ke.length;We<st;We++){const lt=ke[We];Ca(L,w,lt,lt.viewport)}}else Ue.length>0&&Gs(Be,Ue,w,q),rt&&He.render(w),Ca(L,w,q)}se!==null&&te===0&&(F.updateMultisampleRenderTarget(se),F.updateRenderTargetMipmap(se)),ie&&A.end(O),w.isScene===!0&&w.onAfterRender(O,w,q),Re.resetDefaultState(),ue=-1,Q=null,k.pop(),k.length>0?(B=k[k.length-1],Ke===!0&&Ae.setGlobalState(O.clippingPlanes,B.state.camera)):B=null,G.pop(),G.length>0?L=G[G.length-1]:L=null};function Hs(w,q,fe,ie){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)fe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)B.pushLight(w),w.castShadow&&B.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){ie&&xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(qt);const Be=we.update(w),Ue=w.material;Ue.visible&&L.push(w,Be,Ue,fe,xt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const Be=we.update(w),Ue=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xt.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),xt.copy(Be.boundingSphere.center)),xt.applyMatrix4(w.matrixWorld).applyMatrix4(qt)),Array.isArray(Ue)){const ke=Be.groups;for(let We=0,st=ke.length;We<st;We++){const lt=ke[We],ze=Ue[lt.materialIndex];ze&&ze.visible&&L.push(w,Be,ze,fe,xt.z,lt)}}else Ue.visible&&L.push(w,Be,Ue,fe,xt.z,null)}}const Le=w.children;for(let Be=0,Ue=Le.length;Be<Ue;Be++)Hs(Le[Be],q,fe,ie)}function Ca(w,q,fe,ie){const{opaque:J,transmissive:Le,transparent:Be}=w;B.setupLightsView(fe),Ke===!0&&Ae.setGlobalState(O.clippingPlanes,fe),ie&&Ge.viewport(I.copy(ie)),J.length>0&&mi(J,q,fe),Le.length>0&&mi(Le,q,fe),Be.length>0&&mi(Be,q,fe),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Gs(w,q,fe,ie){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ie.id]===void 0){const ze=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ie.id]=new Ai(1,1,{generateMipmaps:!0,type:ze?Xi:ui,minFilter:Ps,samples:bt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Le=B.state.transmissionRenderTarget[ie.id],Be=ie.viewport||I;Le.setSize(Be.z*O.transmissionResolutionScale,Be.w*O.transmissionResolutionScale);const Ue=O.getRenderTarget(),ke=O.getActiveCubeFace(),We=O.getActiveMipmapLevel();O.setRenderTarget(Le),O.getClearColor(ve),P=O.getClearAlpha(),P<1&&O.setClearColor(16777215,.5),O.clear(),rt&&He.render(fe);const st=O.toneMapping;O.toneMapping=Vi;const lt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),B.setupLightsView(ie),Ke===!0&&Ae.setGlobalState(O.clippingPlanes,ie),mi(w,fe,ie),F.updateMultisampleRenderTarget(Le),F.updateRenderTargetMipmap(Le),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Dt=0,Kt=q.length;Dt<Kt;Dt++){const Vt=q[Dt],{object:Ut,geometry:an,material:qe,group:Xt}=Vt;if(qe.side===xa&&Ut.layers.test(ie.layers)){const _t=qe.side;qe.side=kn,qe.needsUpdate=!0,Yi(Ut,fe,ie,an,qe,Xt),qe.side=_t,qe.needsUpdate=!0,ze=!0}}ze===!0&&(F.updateMultisampleRenderTarget(Le),F.updateRenderTargetMipmap(Le))}O.setRenderTarget(Ue,ke,We),O.setClearColor(ve,P),lt!==void 0&&(ie.viewport=lt),O.toneMapping=st}function mi(w,q,fe){const ie=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Le=w.length;J<Le;J++){const Be=w[J],{object:Ue,geometry:ke,group:We}=Be;let st=Be.material;st.allowOverride===!0&&ie!==null&&(st=ie),Ue.layers.test(fe.layers)&&Yi(Ue,q,fe,ke,st,We)}}function Yi(w,q,fe,ie,J,Le){w.onBeforeRender(O,q,fe,ie,J,Le),w.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(O,q,fe,ie,w,Le),J.transparent===!0&&J.side===xa&&J.forceSinglePass===!1?(J.side=kn,J.needsUpdate=!0,O.renderBufferDirect(fe,q,ie,J,w,Le),J.side=cs,J.needsUpdate=!0,O.renderBufferDirect(fe,q,ie,J,w,Le),J.side=xa):O.renderBufferDirect(fe,q,ie,J,w,Le),w.onAfterRender(O,q,fe,ie,J,Le)}function Di(w,q,fe){q.isScene!==!0&&(q=Ct);const ie=v.get(w),J=B.state.lights,Le=B.state.shadowsArray,Be=J.state.version,Ue=Ce.getParameters(w,J.state,Le,q,fe),ke=Ce.getProgramCacheKey(Ue);let We=ie.programs;ie.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const st=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ie.envMap=Z.get(w.envMap||ie.environment,st),ie.envMapRotation=ie.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",At),We=new Map,ie.programs=We);let lt=We.get(ke);if(lt!==void 0){if(ie.currentProgram===lt&&ie.lightsStateVersion===Be)return nn(w,Ue),lt}else Ue.uniforms=Ce.getUniforms(w),w.onBeforeCompile(Ue,O),lt=Ce.acquireProgram(Ue,ke),We.set(ke,lt),ie.uniforms=Ue.uniforms;const ze=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=Ae.uniform),nn(w,Ue),ie.needsLights=Ki(w),ie.lightsStateVersion=Be,ie.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix),ie.currentProgram=lt,ie.uniformsList=null,lt}function Zi(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=tu.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function nn(w,q){const fe=v.get(w);fe.outputColorSpace=q.outputColorSpace,fe.batching=q.batching,fe.batchingColor=q.batchingColor,fe.instancing=q.instancing,fe.instancingColor=q.instancingColor,fe.instancingMorph=q.instancingMorph,fe.skinning=q.skinning,fe.morphTargets=q.morphTargets,fe.morphNormals=q.morphNormals,fe.morphColors=q.morphColors,fe.morphTargetsCount=q.morphTargetsCount,fe.numClippingPlanes=q.numClippingPlanes,fe.numIntersection=q.numClipIntersection,fe.vertexAlphas=q.vertexAlphas,fe.vertexTangents=q.vertexTangents,fe.toneMapping=q.toneMapping}function dl(w,q,fe,ie,J){q.isScene!==!0&&(q=Ct),F.resetTextureUnits();const Le=q.fog,Be=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,Ue=se===null?O.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Hr,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,We=Z.get(ie.envMap||Be,ke),st=ie.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,lt=!!fe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ze=!!fe.morphAttributes.position,Dt=!!fe.morphAttributes.normal,Kt=!!fe.morphAttributes.color;let Vt=Vi;ie.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Vt=O.toneMapping);const Ut=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,an=Ut!==void 0?Ut.length:0,qe=v.get(ie),Xt=B.state.lights;if(Ke===!0&&($e===!0||w!==Q)){const sn=w===Q&&ie.id===ue;Ae.setState(ie,w,sn)}let _t=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Xt.state.version||qe.outputColorSpace!==Ue||J.isBatchedMesh&&qe.batching===!1||!J.isBatchedMesh&&qe.batching===!0||J.isBatchedMesh&&qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&qe.instancing===!1||!J.isInstancedMesh&&qe.instancing===!0||J.isSkinnedMesh&&qe.skinning===!1||!J.isSkinnedMesh&&qe.skinning===!0||J.isInstancedMesh&&qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&qe.instancingMorph===!1&&J.morphTexture!==null||qe.envMap!==We||ie.fog===!0&&qe.fog!==Le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ae.numPlanes||qe.numIntersection!==Ae.numIntersection)||qe.vertexAlphas!==st||qe.vertexTangents!==lt||qe.morphTargets!==ze||qe.morphNormals!==Dt||qe.morphColors!==Kt||qe.toneMapping!==Vt||qe.morphTargetsCount!==an)&&(_t=!0):(_t=!0,qe.__version=ie.version);let Pn=qe.currentProgram;_t===!0&&(Pn=Di(ie,q,J));let In=!1,Fn=!1,Qi=!1;const Pt=Pn.getUniforms(),Yt=qe.uniforms;if(Ge.useProgram(Pn.program)&&(In=!0,Fn=!0,Qi=!0),ie.id!==ue&&(ue=ie.id,Fn=!0),In||Q!==w){Ge.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pt.setValue(j,"projectionMatrix",w.projectionMatrix),Pt.setValue(j,"viewMatrix",w.matrixWorldInverse);const gi=Pt.map.cameraPosition;gi!==void 0&&gi.setValue(j,ht.setFromMatrixPosition(w.matrixWorld)),bt.logarithmicDepthBuffer&&Pt.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,Fn=!0,Qi=!0)}if(qe.needsLights&&(Xt.state.directionalShadowMap.length>0&&Pt.setValue(j,"directionalShadowMap",Xt.state.directionalShadowMap,F),Xt.state.spotShadowMap.length>0&&Pt.setValue(j,"spotShadowMap",Xt.state.spotShadowMap,F),Xt.state.pointShadowMap.length>0&&Pt.setValue(j,"pointShadowMap",Xt.state.pointShadowMap,F)),J.isSkinnedMesh){Pt.setOptional(j,J,"bindMatrix"),Pt.setOptional(j,J,"bindMatrixInverse");const sn=J.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Pt.setValue(j,"boneTexture",sn.boneTexture,F))}J.isBatchedMesh&&(Pt.setOptional(j,J,"batchingTexture"),Pt.setValue(j,"batchingTexture",J._matricesTexture,F),Pt.setOptional(j,J,"batchingIdTexture"),Pt.setValue(j,"batchingIdTexture",J._indirectTexture,F),Pt.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&Pt.setValue(j,"batchingColorTexture",J._colorsTexture,F));const Ui=fe.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&Pe.update(J,fe,Pn),(Fn||qe.receiveShadow!==J.receiveShadow)&&(qe.receiveShadow=J.receiveShadow,Pt.setValue(j,"receiveShadow",J.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Yt.envMapIntensity.value=q.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=sw()),Fn&&(Pt.setValue(j,"toneMappingExposure",O.toneMappingExposure),qe.needsLights&&hl(Yt,Qi),Le&&ie.fog===!0&&Xe.refreshFogUniforms(Yt,Le),Xe.refreshMaterialUniforms(Yt,ie,Se,pe,B.state.transmissionRenderTarget[w.id]),tu.upload(j,Zi(qe),Yt,F)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(tu.upload(j,Zi(qe),Yt,F),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(j,"center",J.center),Pt.setValue(j,"modelViewMatrix",J.modelViewMatrix),Pt.setValue(j,"normalMatrix",J.normalMatrix),Pt.setValue(j,"modelMatrix",J.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const sn=ie.uniformsGroups;for(let gi=0,Ni=sn.length;gi<Ni;gi++){const ml=sn[gi];Ie.update(ml,Pn),Ie.bind(ml,Pn)}}return Pn}function hl(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function Ki(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(w,q,fe){const ie=v.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),v.get(w.texture).__webglTexture=q,v.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:fe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const fe=v.get(w);fe.__webglFramebuffer=q,fe.__useDefaultFramebuffer=q===void 0};const Da=j.createFramebuffer();this.setRenderTarget=function(w,q=0,fe=0){se=w,V=q,te=fe;let ie=null,J=!1,Le=!1;if(w){const Ue=v.get(w);if(Ue.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(j.FRAMEBUFFER,Ue.__webglFramebuffer),I.copy(w.viewport),H.copy(w.scissor),de=w.scissorTest,Ge.viewport(I),Ge.scissor(H),Ge.setScissorTest(de),ue=-1;return}else if(Ue.__webglFramebuffer===void 0)F.setupRenderTarget(w);else if(Ue.__hasExternalTextures)F.rebindTextures(w,v.get(w.texture).__webglTexture,v.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const st=w.depthTexture;if(Ue.__boundDepthTexture!==st){if(st!==null&&v.has(st)&&(w.width!==st.image.width||w.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Le=!0);const We=v.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[q])?ie=We[q][fe]:ie=We[q],J=!0):w.samples>0&&F.useMultisampledRTT(w)===!1?ie=v.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?ie=We[fe]:ie=We,I.copy(w.viewport),H.copy(w.scissor),de=w.scissorTest}else I.copy(ee).multiplyScalar(Se).floor(),H.copy(be).multiplyScalar(Se).floor(),de=ye;if(fe!==0&&(ie=Da),Ge.bindFramebuffer(j.FRAMEBUFFER,ie)&&Ge.drawBuffers(w,ie),Ge.viewport(I),Ge.scissor(H),Ge.setScissorTest(de),J){const Ue=v.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ue.__webglTexture,fe)}else if(Le){const Ue=q;for(let ke=0;ke<w.textures.length;ke++){const We=v.get(w.textures[ke]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+ke,We.__webglTexture,fe,Ue)}}else if(w!==null&&fe!==0){const Ue=v.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ue.__webglTexture,fe)}ue=-1},this.readRenderTargetPixels=function(w,q,fe,ie,J,Le,Be,Ue=0){if(!(w&&w.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=v.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke){Ge.bindFramebuffer(j.FRAMEBUFFER,ke);try{const We=w.textures[Ue],st=We.format,lt=We.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ue),!bt.textureFormatReadable(st)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(lt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-ie&&fe>=0&&fe<=w.height-J&&j.readPixels(q,fe,ie,J,De.convert(st),De.convert(lt),Le)}finally{const We=se!==null?v.get(se).__webglFramebuffer:null;Ge.bindFramebuffer(j.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,q,fe,ie,J,Le,Be,Ue=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=v.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke)if(q>=0&&q<=w.width-ie&&fe>=0&&fe<=w.height-J){Ge.bindFramebuffer(j.FRAMEBUFFER,ke);const We=w.textures[Ue],st=We.format,lt=We.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ue),!bt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ze),j.bufferData(j.PIXEL_PACK_BUFFER,Le.byteLength,j.STREAM_READ),j.readPixels(q,fe,ie,J,De.convert(st),De.convert(lt),0);const Dt=se!==null?v.get(se).__webglFramebuffer:null;Ge.bindFramebuffer(j.FRAMEBUFFER,Dt);const Kt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Db(j,Kt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ze),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Le),j.deleteBuffer(ze),j.deleteSync(Kt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,fe=0){const ie=Math.pow(2,-fe),J=Math.floor(w.image.width*ie),Le=Math.floor(w.image.height*ie),Be=q!==null?q.x:0,Ue=q!==null?q.y:0;F.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,Be,Ue,J,Le),Ge.unbindTexture()};const gu=j.createFramebuffer(),pl=j.createFramebuffer();this.copyTextureToTexture=function(w,q,fe=null,ie=null,J=0,Le=0){let Be,Ue,ke,We,st,lt,ze,Dt,Kt;const Vt=w.isCompressedTexture?w.mipmaps[Le]:w.image;if(fe!==null)Be=fe.max.x-fe.min.x,Ue=fe.max.y-fe.min.y,ke=fe.isBox3?fe.max.z-fe.min.z:1,We=fe.min.x,st=fe.min.y,lt=fe.isBox3?fe.min.z:0;else{const Yt=Math.pow(2,-J);Be=Math.floor(Vt.width*Yt),Ue=Math.floor(Vt.height*Yt),w.isDataArrayTexture?ke=Vt.depth:w.isData3DTexture?ke=Math.floor(Vt.depth*Yt):ke=1,We=0,st=0,lt=0}ie!==null?(ze=ie.x,Dt=ie.y,Kt=ie.z):(ze=0,Dt=0,Kt=0);const Ut=De.convert(q.format),an=De.convert(q.type);let qe;q.isData3DTexture?(F.setTexture3D(q,0),qe=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(F.setTexture2DArray(q,0),qe=j.TEXTURE_2D_ARRAY):(F.setTexture2D(q,0),qe=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Xt=j.getParameter(j.UNPACK_ROW_LENGTH),_t=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Pn=j.getParameter(j.UNPACK_SKIP_PIXELS),In=j.getParameter(j.UNPACK_SKIP_ROWS),Fn=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Vt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Vt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,We),j.pixelStorei(j.UNPACK_SKIP_ROWS,st),j.pixelStorei(j.UNPACK_SKIP_IMAGES,lt);const Qi=w.isDataArrayTexture||w.isData3DTexture,Pt=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const Yt=v.get(w),Ui=v.get(q),sn=v.get(Yt.__renderTarget),gi=v.get(Ui.__renderTarget);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,sn.__webglFramebuffer),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Ni=0;Ni<ke;Ni++)Qi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,v.get(w).__webglTexture,J,lt+Ni),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,v.get(q).__webglTexture,Le,Kt+Ni)),j.blitFramebuffer(We,st,Be,Ue,ze,Dt,Be,Ue,j.DEPTH_BUFFER_BIT,j.NEAREST);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||v.has(w)){const Yt=v.get(w),Ui=v.get(q);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,gu),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,pl);for(let sn=0;sn<ke;sn++)Qi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Yt.__webglTexture,J,lt+sn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Yt.__webglTexture,J),Pt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ui.__webglTexture,Le,Kt+sn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ui.__webglTexture,Le),J!==0?j.blitFramebuffer(We,st,Be,Ue,ze,Dt,Be,Ue,j.COLOR_BUFFER_BIT,j.NEAREST):Pt?j.copyTexSubImage3D(qe,Le,ze,Dt,Kt+sn,We,st,Be,Ue):j.copyTexSubImage2D(qe,Le,ze,Dt,We,st,Be,Ue);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Pt?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(qe,Le,ze,Dt,Kt,Be,Ue,ke,Ut,an,Vt.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(qe,Le,ze,Dt,Kt,Be,Ue,ke,Ut,Vt.data):j.texSubImage3D(qe,Le,ze,Dt,Kt,Be,Ue,ke,Ut,an,Vt):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Le,ze,Dt,Be,Ue,Ut,an,Vt.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Le,ze,Dt,Vt.width,Vt.height,Ut,Vt.data):j.texSubImage2D(j.TEXTURE_2D,Le,ze,Dt,Be,Ue,Ut,an,Vt);j.pixelStorei(j.UNPACK_ROW_LENGTH,Xt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,_t),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Pn),j.pixelStorei(j.UNPACK_SKIP_ROWS,In),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Fn),Le===0&&q.generateMipmaps&&j.generateMipmap(qe),Ge.unbindTexture()},this.initRenderTarget=function(w){v.get(w).__webglFramebuffer===void 0&&F.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?F.setTextureCube(w,0):w.isData3DTexture?F.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?F.setTexture2DArray(w,0):F.setTexture2D(w,0),Ge.unbindTexture()},this.resetState=function(){V=0,te=0,se=null,Ge.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}function ow({mouseForce:r=20,cursorSize:e=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:f=.014,BFECC:p=!0,resolution:m=.5,isBounce:h=!1,colors:g=["#5227FF","#FF9FFC","#B19EEF"],style:x={},className:_="",autoDemo:b=!0,autoSpeed:T=.5,autoIntensity:C=2.2,takeoverDuration:y=.25,autoResumeDelay:S=1e3,autoRampDuration:D=.6}){const U=me.useRef(null),L=me.useRef(null),B=me.useRef(null),G=me.useRef(null),k=me.useRef(null),A=me.useRef(!0),O=me.useRef(null);return me.useEffect(()=>{if(!U.current)return;function he(N){let v;Array.isArray(N)&&N.length>0?N.length===1?v=[N[0],N[0]]:v=N:v=["#ffffff","#ffffff"];const F=v.length,Z=new Uint8Array(F*4);for(let ae=0;ae<F;ae++){const we=new Lt(v[ae]);Z[ae*4+0]=Math.round(we.r*255),Z[ae*4+1]=Math.round(we.g*255),Z[ae*4+2]=Math.round(we.b*255),Z[ae*4+3]=255}const le=new Z_(Z,F,1,fi);return le.magFilter=dn,le.minFilter=dn,le.wrapS=ei,le.wrapT=ei,le.generateMipmaps=!1,le.needsUpdate=!0,le}const V=he(g),te=new tn(0,0,0,0);class se{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(v){this.container=v,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new rw({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Lt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new dE,this.clock.start()}resize(){if(!this.container)return;const v=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(v.width)),this.height=Math.max(1,Math.floor(v.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ue=new se;class Q{constructor(){this.mouseMoved=!1,this.coords=new ot,this.coords_old=new ot,this.diff=new ot,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ot,this.takeoverTo=new ot,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(v){this.container=v,this.docTarget=v.ownerDocument||null;const F=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);F&&(this.listenerTarget=F,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(v,F){if(!this.container)return!1;const Z=this.container.getBoundingClientRect();return Z.width===0||Z.height===0?!1:v>=Z.left&&v<=Z.right&&F>=Z.top&&F<=Z.bottom}updateHoverState(v,F){return this.isHoverInside=this.isPointInside(v,F),this.isHoverInside}setCoords(v,F){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Z=this.container.getBoundingClientRect();if(Z.width===0||Z.height===0)return;const le=(v-Z.left)/Z.width,ae=(F-Z.top)/Z.height;this.coords.set(le*2-1,-(ae*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(v,F){this.coords.set(v,F),this.mouseMoved=!0}onDocumentMouseMove(v){if(this.updateHoverState(v.clientX,v.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const F=this.container.getBoundingClientRect();if(F.width===0||F.height===0)return;const Z=(v.clientX-F.left)/F.width,le=(v.clientY-F.top)/F.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Z*2-1,-(le*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(v.clientX,v.clientY),this.hasUserControl=!0}}onDocumentTouchStart(v){if(v.touches.length!==1)return;const F=v.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY),this.hasUserControl=!0)}onDocumentTouchMove(v){if(v.touches.length!==1)return;const F=v.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const v=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(v>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const F=v*v*(3-2*v);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,F)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const I=new Q;class H{constructor(v,F,Z){this.mouse=v,this.manager=F,this.enabled=Z.enabled,this.speed=Z.speed,this.resumeDelay=Z.resumeDelay||3e3,this.rampDurationMs=(Z.rampDuration||0)*1e3,this.active=!1,this.current=new ot(0,0),this.target=new ot,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ot,this.pickNewTarget()}pickNewTarget(){const v=Math.random;this.target.set((v()*2-1)*(1-this.margin),(v()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const v=performance.now();if(v-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=v,this.activationTime=v),!this.active)return;this.mouse.isAutoActive=!0;let Z=(v-this.lastTime)/1e3;this.lastTime=v,Z>.2&&(Z=.016);const le=this._tmpDir.subVectors(this.target,this.current),ae=le.length();if(ae<.01){this.pickNewTarget();return}le.normalize();let we=1;if(this.rampDurationMs>0){const Qe=Math.min(1,(v-this.activationTime)/this.rampDurationMs);we=Qe*Qe*(3-2*Qe)}const Ce=this.speed*Z*we,Xe=Math.min(Ce,ae);this.current.addScaledVector(le,Xe),this.mouse.setNormalized(this.current.x,this.current.y)}}const de=`
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
`,ve=`
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
`,P=`
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
`,K=`
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
`,pe=`
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
`,Se=`
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
`,Ne=`
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
`,Ye=`
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
`,ee=`
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
`,be=`
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
`;class ye{constructor(v){var F;this.props=v||{},this.uniforms=(F=this.props.material)==null?void 0:F.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Mv,this.camera=new cu,this.uniforms&&(this.material=new Jo(this.props.material),this.geometry=new Fs(2,2),this.plane=new di(this.geometry,this.material),this.scene.add(this.plane))}update(){ue.renderer.setRenderTarget(this.props.output||null),ue.renderer.render(this.scene,this.camera),ue.renderer.setRenderTarget(null)}}class Je extends ye{constructor(v){super({material:{vertexShader:de,fragmentShader:K,uniforms:{boundarySpace:{value:v.cellScale},px:{value:v.cellScale},fboSize:{value:v.fboSize},velocity:{value:v.src.texture},dt:{value:v.dt},isBFECC:{value:!0}}},output:v.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const v=new Ci,F=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);v.setAttribute("position",new Ri(F,3));const Z=new Jo({vertexShader:ve,fragmentShader:K,uniforms:this.uniforms});this.line=new nE(v,Z),this.scene.add(this.line)}update({dt:v,isBounce:F,BFECC:Z}){this.uniforms.dt.value=v,this.line.visible=F,this.uniforms.isBFECC.value=Z,super.update()}}class Ke extends ye{constructor(v){super({output:v.dst}),this.init(v)}init(v){super.init();const F=new Fs(1,1),Z=new Jo({vertexShader:P,fragmentShader:Ne,blending:ch,depthWrite:!1,uniforms:{px:{value:v.cellScale},force:{value:new ot(0,0)},center:{value:new ot(0,0)},scale:{value:new ot(v.cursor_size,v.cursor_size)}}});this.mouse=new di(F,Z),this.scene.add(this.mouse)}update(v){const F=I.diff.x/2*v.mouse_force,Z=I.diff.y/2*v.mouse_force,le=v.cursor_size*v.cellScale.x,ae=v.cursor_size*v.cellScale.y,we=Math.min(Math.max(I.coords.x,-1+le+v.cellScale.x*2),1-le-v.cellScale.x*2),Ce=Math.min(Math.max(I.coords.y,-1+ae+v.cellScale.y*2),1-ae-v.cellScale.y*2),Xe=this.mouse.material.uniforms;Xe.force.value.set(F,Z),Xe.center.value.set(we,Ce),Xe.scale.value.set(v.cursor_size,v.cursor_size),super.update()}}class $e extends ye{constructor(v){super({material:{vertexShader:de,fragmentShader:be,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},velocity_new:{value:v.dst_.texture},v:{value:v.viscous},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update({viscous:v,iterations:F,dt:Z}){let le,ae;this.uniforms.v.value=v;for(let we=0;we<F;we++)we%2===0?(le=this.props.output0,ae=this.props.output1):(le=this.props.output1,ae=this.props.output0),this.uniforms.velocity_new.value=le.texture,this.props.output=ae,this.uniforms.dt.value=Z,super.update();return ae}}class qt extends ye{constructor(v){super({material:{vertexShader:de,fragmentShader:Se,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update({vel:v}){this.uniforms.velocity.value=v.texture,super.update()}}class ht extends ye{constructor(v){super({material:{vertexShader:de,fragmentShader:Ye,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.dst_.texture},divergence:{value:v.src.texture},px:{value:v.cellScale}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update({iterations:v}){let F,Z;for(let le=0;le<v;le++)le%2===0?(F=this.props.output0,Z=this.props.output1):(F=this.props.output1,Z=this.props.output0),this.uniforms.pressure.value=F.texture,this.props.output=Z,super.update();return Z}}class xt extends ye{constructor(v){super({material:{vertexShader:de,fragmentShader:ee,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.src_p.texture},velocity:{value:v.src_v.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update({vel:v,pressure:F}){this.uniforms.velocity.value=v.texture,this.uniforms.pressure.value=F.texture,super.update()}}class Ct{constructor(v){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...v},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ot,this.cellScale=new ot,this.boundarySpace=new ot,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Xi:Ti}createAllFBO(){const F={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:dn,magFilter:dn,wrapS:ei,wrapT:ei};for(let Z in this.fbos)this.fbos[Z]=new Ai(this.fboSize.x,this.fboSize.y,F)}createShaderPass(){this.advection=new Je({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ke({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new $e({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new qt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new ht({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new xt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const v=Math.max(1,Math.round(this.options.resolution*ue.width)),F=Math.max(1,Math.round(this.options.resolution*ue.height)),Z=1/v,le=1/F;this.cellScale.set(Z,le),this.fboSize.set(v,F)}resize(){this.calcSize();for(let v in this.fbos)this.fbos[v].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let v=this.fbos.vel_1;this.options.isViscous&&(v=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:v});const F=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:v,pressure:F})}}class rt{constructor(){this.init()}init(){this.simulation=new Ct,this.scene=new Mv,this.camera=new cu,this.output=new di(new Fs(2,2),new Jo({vertexShader:de,fragmentShader:pe,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ot},palette:{value:V},bgColor:{value:te}}})),this.scene.add(this.output)}addScene(v){this.scene.add(v)}resize(){this.simulation.resize()}render(){ue.renderer.setRenderTarget(null),ue.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class yt{constructor(v){this.props=v,ue.init(v.$wrapper),I.init(v.$wrapper),I.autoIntensity=v.autoIntensity,I.takeoverDuration=v.takeoverDuration,this.lastUserInteraction=performance.now(),I.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new H(I,this,{enabled:v.autoDemo,speed:v.autoSpeed,resumeDelay:v.autoResumeDelay,rampDuration:v.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():A.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ue.renderer.domElement),this.output=new rt}resize(){ue.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),I.update(),ue.update(),this.output.update()}loop(){this.running&&(this.render(),G.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,G.current&&(cancelAnimationFrame(G.current),G.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),I.dispose(),ue.renderer){const v=ue.renderer.domElement;v&&v.parentNode&&v.parentNode.removeChild(v),ue.renderer.dispose()}}catch{}}}const j=U.current;j.style.position=j.style.position||"relative",j.style.overflow=j.style.overflow||"hidden";const jt=new yt({$wrapper:j,autoDemo:b,autoSpeed:T,autoIntensity:C,takeoverDuration:y,autoResumeDelay:S,autoRampDuration:D});L.current=jt,(()=>{var F;if(!L.current)return;const N=(F=L.current.output)==null?void 0:F.simulation;if(!N)return;const v=N.options.resolution;Object.assign(N.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:p,resolution:m,isBounce:h}),m!==v&&N.resize()})(),jt.start();const bt=new IntersectionObserver(N=>{const v=N[0],F=v.isIntersecting&&v.intersectionRatio>0;A.current=F,L.current&&(F&&!document.hidden?L.current.start():L.current.pause())},{threshold:[0,.01,.1]});bt.observe(j),k.current=bt;const Ge=new ResizeObserver(()=>{L.current&&(O.current&&cancelAnimationFrame(O.current),O.current=requestAnimationFrame(()=>{L.current&&L.current.resize()}))});return Ge.observe(j),B.current=Ge,()=>{if(G.current&&cancelAnimationFrame(G.current),B.current)try{B.current.disconnect()}catch{}if(k.current)try{k.current.disconnect()}catch{}L.current&&L.current.dispose(),L.current=null}},[p,e,f,h,i,c,l,r,m,s,g,b,T,C,y,S,D]),me.useEffect(()=>{var se;const he=L.current;if(!he)return;const V=(se=he.output)==null?void 0:se.simulation;if(!V)return;const te=V.options.resolution;Object.assign(V.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:p,resolution:m,isBounce:h}),he.autoDriver&&(he.autoDriver.enabled=b,he.autoDriver.speed=T,he.autoDriver.resumeDelay=S,he.autoDriver.rampDurationMs=D*1e3,he.autoDriver.mouse&&(he.autoDriver.mouse.autoIntensity=C,he.autoDriver.mouse.takeoverDuration=y)),m!==te&&V.resize()},[r,e,i,s,l,c,f,p,m,h,b,T,C,y,S,D]),M.jsx("div",{ref:U,className:`liquid-ether-container ${_||""}`,style:x})}const Lr=({name:r="",size:e=24,color:i="currentColor",strokeColor:s="",className:l=""})=>M.jsx("svg",{className:l,width:e,height:e,fill:i,stroke:s||"currentColor",children:M.jsx("use",{href:`/portfolio/icon-sprite.svg#${r}`})}),lw=({toggleMenu:r})=>M.jsxs("header",{className:"p-2 border-b border-zinc-800 text-white h-14 flex justify-between px-4 w-full","aria-label":"Main navigation",children:[M.jsx("div",{className:"flex flex-1 items-center",children:M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx("button",{onClick:r,"aria-label":"Toggle menu",className:"md:hidden",children:M.jsx(Lr,{name:"mobile-menu",size:16,className:"stroke-gray-600"})}),M.jsx("h5",{children:"Yannick Boulanger"})]})}),M.jsx("div",{className:"flex flex-1",children:M.jsxs("div",{className:"flex items-center space-x-2 mx-auto",children:[M.jsx("i",{className:"",children:M.jsx("svg",{width:"24",height:"24",viewBox:"0 2 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"orange",children:M.jsx("path",{d:"M12 2.5L14.9 8.6L21.5 9.4L16.75 13.9L18.1 20.5L12 17.2L5.9 20.5L7.25 13.9L2.5 9.4L9.1 8.6L12 2.5Z"})})}),M.jsx("p",{children:"Open to New Opportunities"}),M.jsx("button",{className:" p-1.5 pb-1 px-3 ml-3 rounded-lg border border-gray-600 transition-all duration-500 hover:border-purple-400 hover:bg-purple-900 hover:text-white",children:"Get in touch!"})]})}),M.jsx("div",{className:"flex flex-1 space-x-2 justify-end",children:M.jsx("a",{href:"javascript:;",className:"p-1 rounded-lg items-center border border-gray-600 justify-center transition-all duration-500  hover:border-blue-400 hover:bg-blue-900",children:M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 72 72",fill:"none",children:M.jsx("path",{d:"M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z",fill:"#fff"})})})})]}),cw=()=>{const r=Ra(),[e,i]=me.useState(!1),[s,l]=me.useState(!1);me.useEffect(()=>{i(r.pathname.startsWith("/Case")),l(r.pathname.startsWith("/Portfolio"))},[r.pathname]);const c="text-md text-stone-100 flex flex-row px-0 py-2 pl-6 pr-4  hover:bg-stone-800 active:bg-sky-700 items-center justify-center justify-start",f=p=>r.pathname===p?"is-active":"";return M.jsx("div",{className:"grow border-r border-zinc-800 pt-4 ",children:M.jsx("nav",{"aria-label":"Primary Navigation",children:M.jsxs("ul",{className:"list-none mt-48",children:[M.jsx("li",{children:M.jsxs(Or,{to:"/","aria-label":"Go to Home",className:`${c} ${f("/")}`,children:[M.jsx(Lr,{name:"home",size:20,className:"mr-2 stroke-gray-600"}),M.jsx("span",{className:"text-xl font-normal",children:"Hero"})]})}),M.jsxs("li",{children:[M.jsxs("button",{onClick:()=>i(p=>!p),"aria-expanded":e,"aria-controls":"cases-menu",type:"button",className:`${c} font-medium group w-full`,children:[M.jsx(Lr,{name:"cases",size:20,className:"mr-2 stroke-gray-600"}),M.jsx("span",{className:"text-xl font-normal",children:"Cases"}),M.jsx(Lr,{name:"chevron-down",size:20,className:`ml-auto stroke-gray-600 transform transition-transform duration-300 ${e?"rotate-180":""}`})]}),e&&M.jsx("ul",{id:"cases-menu",className:"ml-4 mt-1 space-y-1 list-none",children:["Case01","Case02","Case03"].map(p=>M.jsx("li",{children:M.jsx(Or,{to:`/${p}`,className:`${c} ${f(`/${p}`)}`,"aria-label":`Go to ${p}`,children:M.jsx("span",{className:"text-xl font-normal",children:p.replace("Case","Case ")})})},p))})]}),M.jsx("li",{children:M.jsxs(Or,{to:"/Resume",className:`${c} ${f("/Resume")}`,"aria-label":"Go to Resume",children:[M.jsx(Lr,{name:"resume",size:20,className:"mr-2 stroke-gray-600"}),M.jsx("span",{className:"text-xl font-normal",children:"Summary"})]})}),M.jsx("li",{children:M.jsxs(Or,{to:"/Certification",className:`${c} ${f("/Certification")}`,"aria-label":"Go to Certifications",children:[M.jsx(Lr,{name:"certification",size:20,className:"mr-2 stroke-gray-600"}),M.jsx("span",{className:"text-xl font-normal",children:"Certification"})]})})]})})})};function uw(){return M.jsx(M.Fragment,{children:M.jsxs("div",{className:"w-full py-12",children:[M.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto text-white",children:[M.jsx("h2",{className:"mt-12 text-4xl text-teal-200 pb-16",children:"Yannick Boulanger"}),M.jsx("h1",{className:"uppercase font-bold text-7xl leading-none",children:"Product Designer"}),M.jsx("h1",{className:"mb-12 font-light text-7xl leading-none uppercase",children:"Building for Complex Human Application"}),M.jsxs("div",{className:"flex flex-wrap gap-12",children:[M.jsxs("div",{className:"flex-1",children:[M.jsx("h3",{className:"",children:"Enterprise SaaS Delivery"}),M.jsx("p",{className:"mt-4 text-xl text-gray-400 max-w-5xl leading-snug",children:"I conceptualize complex SaaS products from discovery through delivery and ground product strategy in user research and real-world workflows."}),M.jsx("h3",{className:"mt-6",children:"Cross-Functional Collaboration"}),M.jsx("p",{className:"mt-4 text-xl text-gray-400 max-w-5xl  leading-snug",children:"I collaborate with Product, Engineering, and stakeholders to turn vision into execution, delivering maximum value while making complex systems scalable and user-friendly."})]}),M.jsxs("div",{className:"flex-1",children:[M.jsx("h3",{className:"",children:"Structured, Usable Systems"}),M.jsx("p",{className:"mt-4 text-xl text-gray-400 max-w-5xl leading-snug",children:"I prioritize information architecture, consistency, and usability over visual polish, ensuring highly technical environments remain accessible, secure, and reliable."}),M.jsx("h3",{className:"mt-6",children:"Evidence-Based Practice"}),M.jsx("p",{className:"mt-4 text-xl text-gray-400 max-w-5xl leading-snug",children:"I take an iterative, evidence-based approach, guiding design decisions with data and measuring impact through meaningful user and business outcomes."})]})]})]}),M.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto",children:[M.jsx("h3",{className:"text-white text-3xl font-light mb-6",children:"UX Case Studies"}),M.jsxs("div",{className:"flex flex-wrap gap-6",children:[M.jsxs("div",{className:"bg-zinc-900 flex-1 min-w-[220px] rounded-lg shadow hover:shadow-lg transition overflow-hidden",children:[M.jsx("div",{className:"w-full aspect-square bg-zinc-800 flex items-center justify-center text-gray-500 text-sm",children:"Image"}),M.jsxs("div",{className:"p-6 bg-teal-800",children:[M.jsx("h4",{className:"text-white pb-2",children:"SD-WAN Orchestrator"}),M.jsx("p",{className:"text-gray-300 text-sm",children:"Streamlining multi-tenant workflows for an SD-WAN platform"})]})]}),M.jsxs("div",{className:"bg-zinc-900 flex-1 min-w-[220px] rounded-lg shadow hover:shadow-lg transition overflow-hidden",children:[M.jsx("div",{className:"bg-[url('/src/assets/VS-CallerUI-001.png')] bg-cover bg-center w-full aspect-square bg-zinc-800 flex items-center justify-center text-gray-500 text-sm",children:"Image"}),M.jsxs("div",{className:"p-6 bg-indigo-800",children:[M.jsx("h4",{className:"text-white pb-2",children:"CRM Caller UI"}),M.jsx("p",{className:"text-gray-300 text-sm",children:"Redesigned CRM caller UI → boosted efficiency & 30% YoY growth"})]})]}),M.jsxs("div",{className:"bg-zinc-900 flex-1 min-w-[220px] rounded-lg shadow hover:shadow-lg transition overflow-hidden",children:[M.jsx("div",{className:"w-full aspect-square bg-zinc-800 flex items-center justify-center text-gray-500 text-sm",children:"Image"}),M.jsxs("div",{className:"p-6 bg-rose-800",children:[M.jsx("h4",{className:"text-white pb-2",children:"SaaS Design System"}),M.jsx("p",{className:"text-gray-300 text-sm",children:"Built a scalable design system powering SaaS product growth"})]})]})]})]}),M.jsxs("div",{className:"text-white max-w-screen-lg mx-auto flex flex-wrap gap-6 mb-16",children:[M.jsx("h3",{className:"text-white text-3xl font-light",children:"Summary"}),M.jsx("p",{className:"text-xl text-gray-400 max-w-5xl",children:"Senior Product Designer with 15+ years of experience leading complex B2B SaaS and enterprise platforms from concept to delivery. I combine strategic thinking, technical depth, and creative problem-solving to simplify complex systems, including cloud-native SD-WAN and scalable sales engagement CRM platforms."}),M.jsx("p",{className:"text-xl text-gray-400 max-w-5xl mb-2",children:"I’ve led large-scale UX redesigns that drive measurable revenue growth, operational efficiency, and platform scalability. I align business vision, system architecture, and human-centred design to deliver secure, intuitive, and resilient product experiences."}),M.jsxs("div",{className:"flex flex-wrap space-x-0.5 max-w-screen-lg mx-auto text-white w-full",children:[M.jsx("div",{className:"flex-1 p-6 bg-zinc-900  rounded-bl-lg rounded-tl-xl",children:M.jsxs("dl",{children:[M.jsx("dt",{className:"text-2xl pb-2",children:"Product Design"}),M.jsx("dd",{children:"Strategy, Vision & Agile Delivery"})]})}),M.jsx("div",{className:"flex-1 p-6 bg-zinc-900",children:M.jsxs("dl",{children:[M.jsx("dt",{className:"text-2xl pb-2",children:"UI/UX"}),M.jsx("dd",{children:"Workflow & Interaction Architecture"})]})}),M.jsx("div",{className:"flex-1 p-6 bg-zinc-900",children:M.jsxs("dl",{children:[M.jsx("dt",{className:"text-2xl pb-2",children:"SaaS/B2B"}),M.jsx("dd",{children:"Scalable Enterprise Platforms"})]})}),M.jsx("div",{className:"flex-1 p-6 bg-zinc-900 rounded-br-lg rounded-tr-xl",children:M.jsxs("dl",{children:[M.jsx("dt",{className:"text-2xl pb-2",children:"Front-End"}),M.jsx("dd",{children:"Implementation, Code & Accessibility"})]})})]})]}),M.jsxs("div",{className:"text-white max-w-screen-lg mx-auto flex flex-wrap gap-6 mb-24",children:[M.jsxs("div",{className:"flex-1 min-w-[250px rounded-lg shadow",children:[M.jsx("h3",{className:"text-white mb-6",children:"Experience"}),M.jsxs("ul",{className:"list-none mb-6 text-gray-400",children:[M.jsxs("li",{className:"mb-2",children:[M.jsx("em",{className:"w-27 h-10 float-left font-bold text-gray-500",children:"2021 - 2025"})," Adaptiv Networks",M.jsx("br",{})," Senior Product Designer"]}),M.jsxs("li",{className:"mb-2",children:[M.jsx("em",{className:"w-27 h-10 float-left font-bold text-gray-500",children:"2013 - 2021"})," VanillaSoft",M.jsx("br",{})," Product Designer"]}),M.jsxs("li",{className:"mb-2",children:[M.jsx("em",{className:"w-27 h-10 float-left font-bold text-gray-500",children:"2010 - 2012"})," MD Financial Management",M.jsx("br",{}),"UX Designer"]})]}),M.jsx("h3",{className:"text-white mt-16",children:"Language"}),M.jsxs("ul",{className:"list-none mt-4 text-gray-400",children:[M.jsxs("li",{className:"mb-2",children:["English ",M.jsx("em",{children:"(Fluent)"})]}),M.jsxs("li",{className:"mb-2",children:["French ",M.jsx("em",{children:"(Fluent)"})]})]})]}),M.jsxs("div",{className:"flex-1 min-w-[250px] rounded-lg shadow",children:[M.jsx("h3",{className:"text-white",children:"Certification"}),M.jsxs("ul",{className:"list-none mt-4  text-gray-400",children:[M.jsxs("li",{className:"mb-2",children:[M.jsx("em",{className:"w-14 float-left font-bold  text-gray-500",children:"2010"})," User-Centred Design"]}),M.jsxs("li",{className:"mb-2",children:[M.jsx("em",{className:"w-14 float-left font-bold  text-gray-500",children:"2019"})," Professional Scrum Master I (PSM I)"]}),M.jsxs("li",{className:"mb-2",children:[M.jsx("em",{className:"w-14 float-left font-bold  text-gray-500",children:"2021"})," Professional Scrum Master with UX (PSU)"]}),M.jsxs("li",{className:"mb-2",children:[M.jsx("em",{className:"w-14 float-left font-bold  text-gray-500",children:"2025"})," Enterprise Design Thinking Co-Creator, IBM"]}),M.jsxs("li",{className:"mb-2",children:[M.jsx("em",{className:"w-14 float-left font-bold  text-gray-500",children:"2025"})," Enterprise Design Thinking Practitioner, IBM"]}),M.jsxs("li",{className:"mb-2",children:[M.jsx("em",{className:"w-14 float-left font-bold  text-gray-500",children:"2025"})," Artificial Intelligence Fundamentals, IBM"]})]})]})]})]})})}function fw(){return M.jsx("h1",{className:"text-3xl font-bold",children:"About"})}const dw="/portfolio/assets/VS-Old-CallerUI-Dw1hW2WW.png",hw="/portfolio/assets/VS-CallerUI-001-B8ad10j0.png",va=({title:r,children:e})=>M.jsx("div",{className:"w-full",children:M.jsxs("div",{className:"max-w-screen-lg mx-auto px-6",children:[M.jsx("div",{children:M.jsx("h2",{className:"mb-4",children:r})}),M.jsx("div",{className:"pt-4 pb-9",children:e})]})}),i_=[{stage:"1. Start of Shift / Log In",goals:"Access Caller UI and start calling quickly",actions:"Open VanillaSoft in browser, log in",painPoints:"Slow setup; extra windows for tools",opportunities:"Single login with integrated tools; persist user layout preferences"},{stage:"2. Reviewing Next Contact",goals:"Understand contact details before call",actions:"View queue-based contact info, check external tools",painPoints:"Switching windows increases cognitive load",opportunities:"Consolidate all customer details into one panel-based interface"},{stage:"3. During the Call",goals:"Communicate, update CRM, manage compliance",actions:"Take notes, access scripts, process payments, send SMS/email",painPoints:"Switching tabs causes delays",opportunities:"Multi-panel workspace with resizable panels for scripts, compliance docs, payment tools"},{stage:"4. Post-Call Actions",goals:"Complete follow-up efficiently",actions:"Update CRM, send confirmation, schedule follow-up",painPoints:"Slow navigation, prone to errors",opportunities:"Integrate post-call actions in Caller UI; fetch follow-up tools asynchronously"},{stage:"5. Loop: Route Next Contact",goals:"Continue calling efficiently",actions:"Automatic routing based on queue",painPoints:"Manual switching causes delays",opportunities:"Automate routing and update UI dynamically"},{stage:"6. End of Shift",goals:"Log off and review performance",actions:"Review call metrics, finalize tasks",painPoints:"Data spread across systems; no quick overview",opportunities:"Centralized dashboard summarizing calls, tasks, outcomes"}];function pw(){return M.jsxs("div",{className:"text-white",children:[M.jsx("div",{className:"bg-zinc-950 w-full text-gray-200",children:M.jsx("div",{className:"max-w-screen-lg mx-auto flex flex-nowrap space-x-1 px-6 pt-20 pb-12 mb-12 ",children:M.jsxs("div",{className:"basis-6/8",children:[M.jsx("h4",{className:" pb-4",children:"Product case 01: Scalable, Multi-Panel Workspace for High-Volume Sales Workflows"}),M.jsx("h1",{className:"text-white",children:"VanillaSoft Caller UI Redesign"}),M.jsx("h4",{className:"pt-4",children:"Redesigned the Caller UI of VanillaSoft’s sales platform to modernize its look, improve usability, and solve scalability challenges for a growing user base."})]})})}),M.jsx(va,{title:"Role & Contribution",children:M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Led end-to-end redesign: UX research, user flows, wireframes, high-fidelity design"}),M.jsx("li",{children:"Wrote functional requirements and collaborated with developers during implementation"}),M.jsx("li",{children:"Conducted usability testing, gathered feedback, iterated designs"}),M.jsx("li",{children:"Contributed to front-end development and QA/regression testing"})]})}),M.jsxs(va,{title:"Context",children:[M.jsx("p",{className:"pb-4",children:"VanillaSoft is a cloud-based sales management platform integrating CRM, lead management, and telemarketing tools. Its queue-based approach routes agents to the next best contact, preventing cherry-picking and promoting efficiency."}),M.jsx("p",{className:"pb-2 font-semibold",children:"Problem:"}),M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Outdated UI reduced engagement and adoption"}),M.jsx("li",{children:"Agents needed multiple browser windows for external tools, increasing cognitive load"}),M.jsx("li",{children:"Scalability, responsiveness, and accessibility were limited"})]})]}),M.jsx("div",{className:" text-gray-200 mb-9 border-y-1 border-zinc-400",children:M.jsx("div",{className:"w-full",children:M.jsx("div",{className:"max-w-screen-lg mx-auto flex flex-nowrap py-6 ",children:M.jsx("img",{className:"mx-6 border-zinc-600 border-1",src:dw,alt:"VanillaSoft UI overview"})})})}),M.jsx(va,{title:"Business Goal",children:M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Modernize UI for usability and visual appeal"}),M.jsx("li",{children:"Consolidate tools into a unified interface to reduce cognitive load"}),M.jsx("li",{children:"Build a scalable, flexible UI supporting future growth"}),M.jsx("li",{children:"Ensure WCAG 2.0 accessibility compliance"}),M.jsx("li",{children:"Enable smooth integration with backend systems"})]})}),M.jsxs(va,{title:"Research & Insights",children:[M.jsx("p",{className:"pb-2 font-semibold",children:"Methods:"}),M.jsx("p",{className:"pb-4",children:"Proto-personas, market analysis, workstation photos, colleague feedback"}),M.jsx("p",{className:"pb-2 font-semibold",children:"Key Findings:"}),M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Agents used multiple windows for VanillaSoft + external tools"}),M.jsx("li",{children:"Context-switching slowed workflows and increased errors"})]}),M.jsx("p",{className:"pt-4 font-semibold",children:"Opportunity:"}),M.jsx("p",{children:"Consolidate critical tools and information into a single workspace"})]}),M.jsxs("div",{className:"w-full text-gray-800 py-6 mb-12 border-y-1 border-zinc-800 text-sm",children:[M.jsx("div",{className:"max-w-screen-xl mx-auto",children:M.jsx("h3",{className:"text-indigo-800 text-2xl pb-4",children:"User Journey: Caller UI Workflow"})}),M.jsxs("div",{className:"max-w-screen-xl mx-auto border-zinc-600 border-1",children:[M.jsxs("div",{className:"hidden md:grid grid-cols-1 md:grid-cols-6 gap-4 border-b border-gray-700 py-4 font-semibold text-zinc-800",children:[M.jsx("div",{className:"pl-4",children:"Stage"}),M.jsx("div",{children:"User Goals"}),M.jsx("div",{children:"Actions"}),M.jsx("div",{children:"Pain Points"}),M.jsx("div",{className:"col-span-2",children:"Opportunities / Solutions"})]}),M.jsx("div",{className:"hidden md:block",children:i_.map((r,e)=>M.jsxs("div",{className:`grid grid-cols-1 md:grid-cols-6 gap-4 py-2 border-b border-gray-400 ${e%2===0?"bg-zinc-100":"bg-zinc-200"}`,children:[M.jsx("div",{className:"pl-4 py-2",children:r.stage}),M.jsx("div",{className:" py-2",children:r.goals}),M.jsx("div",{className:" py-2",children:r.actions}),M.jsx("div",{className:" py-2",children:r.painPoints}),M.jsx("div",{className:"col-span-2 py-2",children:r.opportunities})]},e))}),M.jsx("div",{className:"md:hidden space-y-4",children:i_.map((r,e)=>M.jsxs("details",{className:"bg-zinc-800 rounded-lg p-4",children:[M.jsx("summary",{className:"font-semibold text-white cursor-pointer",children:r.stage}),M.jsxs("div",{className:"mt-2 space-y-2 text-gray-200",children:[M.jsxs("p",{children:[M.jsx("strong",{children:"User Goals:"})," ",r.goals]}),M.jsxs("p",{children:[M.jsx("strong",{children:"Actions:"})," ",r.actions]}),M.jsxs("p",{children:[M.jsx("strong",{children:"Pain Points:"})," ",r.painPoints]}),M.jsxs("p",{children:[M.jsx("strong",{children:"Opportunities / Solutions:"})," ",r.opportunities]})]})]},e))})]})]}),M.jsxs(va,{title:"Hypothesis",children:[M.jsx("p",{className:"italic pb-4",children:"By creating a unified, flexible interface that brings together key tools—CRM, compliance, payments, and SMS/email—users will:"}),M.jsxs("ul",{className:"list-disc list-inside space-y-2 pb-4",children:[M.jsxs("li",{children:[M.jsx("strong",{children:"Work faster"})," with fewer interruptions"]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Make fewer errors"})," thanks to streamlined workflows"]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Experience less cognitive load"}),", staying focused on high-value tasks"]})]}),M.jsxs("p",{children:["This approach transforms the Caller UI from a fragmented set of windows into a"," ",M.jsx("strong",{children:"centralized, efficient workspace"})," that supports users’ natural workflow and enhances overall productivity."]})]}),M.jsx(va,{title:"Design Solution",children:M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Flexible Multi-Panel Layout: Resizable, rearrangeable panels adapting to workflows"}),M.jsx("li",{children:"Asynchronous Data Loading: Fetch contact info in the background to reduce wait times"}),M.jsx("li",{children:"Integrated Tools: APIs for SMS, payment, and email embedded, eliminating context-switching"}),M.jsx("li",{children:"Accessibility & Responsiveness: WCAG 2.0 compliance, keyboard navigation, high-contrast design"}),M.jsx("li",{children:"Grid Layout Implementation: Kendo UI for stability, responsiveness, and performance"})]})}),M.jsx(va,{title:"Design System Contributions",children:M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Consolidated legacy UI elements into modular, reusable components"}),M.jsx("li",{children:"Improved information architecture, microcopy, and inline editing components"}),M.jsx("li",{children:"Documented layout specifications and interaction patterns for smooth developer handoff"}),M.jsx("li",{children:"Collaborated with frontend team on .NET framework integration"})]})}),M.jsx(va,{title:"Challenges & Lessons Learned",children:M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Balancing simplicity with feature richness"}),M.jsx("li",{children:"Migrating legacy UI without disrupting workflows"}),M.jsx("li",{children:"Coordinating cross-functional teams (design, development, QA)"}),M.jsx("li",{children:"Embedding accessibility from the start"}),M.jsx("li",{children:"Continuous user feedback ensures effective design"})]})}),M.jsx(va,{title:"Results / Impact",children:M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsxs("li",{children:["Productivity increase: ",M.jsx("strong",{children:"30%–100%"})," reported by users"]}),M.jsx("li",{children:"Cognitive load reduction: Consolidated multiple tools into one interface"}),M.jsxs("li",{children:["User satisfaction: ",M.jsx("strong",{children:"4.7-star"})," rating on Capterra, ",M.jsx("strong",{children:"4.6"})," on G2"]}),M.jsx("li",{children:"Scalability: Design system supports future growth"}),M.jsx("li",{children:"Accessibility: WCAG 2.0 compliance achieved"})]})}),M.jsx("div",{className:" text-gray-200 border-y-1 border-zinc-800",children:M.jsx("div",{className:"w-full",children:M.jsx("div",{className:"max-w-screen-xl mx-auto   px-12 py-6  flex flex-nowrap",children:M.jsx("img",{src:hw,className:"border-zinc-600 border-1",alt:"VanillaSoft Caller UI overview"})})})})]})}const ss=({title:r,children:e})=>M.jsx("div",{className:"w-full",children:M.jsxs("div",{className:"max-w-screen-lg mx-auto px-6",children:[M.jsx("div",{children:M.jsx("h2",{className:" mb-4",children:r})}),M.jsx("div",{className:"pt-4 pb-9",children:e})]})}),a_=[{stage:"1. Enrollment Invitation Sent",tenantAdminAction:"Admin enters user’s name & email in Orchestrator",endUserAction:"—",systemResponse:"System sends enrollment email with secure one-time link",tenantAdminThoughts:"“Great, one less account I have to create manually.”",endUserThoughts:"—",painPoints:"Email may go to spam; unrecognized sender",opportunities:"Use brand visuals, friendly sender name"},{stage:"2. User Clicks Enrollment Link",tenantAdminAction:"—",endUserAction:"Clicks secure link in email",systemResponse:"Auto-login to self-service portal",tenantAdminThoughts:"—",endUserThoughts:"“Nice, no need to type credentials yet.”",painPoints:"Expired link frustrates users",opportunities:"Display expiry in email, allow resend"},{stage:"3. Create Secure Password",tenantAdminAction:"—",endUserAction:"Chooses & confirms strong password",systemResponse:"Password saved",tenantAdminThoughts:"—",endUserThoughts:"“That was easy — I feel secure.”",painPoints:"Overly strict rules may cause errors",opportunities:"Real-time password strength feedback"},{stage:"4. MFA Setup Prompt",tenantAdminAction:"—",endUserAction:"Asked to set up MFA if required",systemResponse:"MFA options: App Code, SMS, Email",tenantAdminThoughts:"—",endUserThoughts:"“Hmm, which one’s best for me?”",painPoints:"Confusion, app setup friction",opportunities:"Quick comparison of options"},{stage:"5. MFA Enrollment",tenantAdminAction:"—",endUserAction:"Completes MFA verification",systemResponse:"MFA setup confirmed",tenantAdminThoughts:"—",endUserThoughts:"“I’m ready to use VPN now.”",painPoints:"App download feels technical",opportunities:"Alternate MFA path + help"},{stage:"6. Access Confirmation",tenantAdminAction:"—",endUserAction:"—",systemResponse:"Redirect to dashboard with VPN client instructions",tenantAdminThoughts:"—",endUserThoughts:"“I know my next step.”",painPoints:"No instructions causes stalls",opportunities:"Quick start tips + visual guide"},{stage:"Loop for Additional Users",tenantAdminAction:"Admin repeats steps for each user",endUserAction:"—",systemResponse:"—",tenantAdminThoughts:"“This is tedious for large batches.”",endUserThoughts:"—",painPoints:"Bulk onboarding fatigue",opportunities:"Add CSV import feature"}];function mw(){return M.jsxs("div",{className:"text-white",children:[M.jsx("div",{className:"bg-zinc-950 w-full",children:M.jsx("div",{className:"max-w-screen-lg mx-auto flex flex-nowrap space-x-1 px-6 pt-20 pb-12 mb-12 ",children:M.jsxs("div",{className:"basis-6/8",children:[M.jsx("h4",{className:"text-indigo-400 pb-4",children:"UX Case 02: Adaptiv Networks MyConnect VPN Enrollment Flow"}),M.jsx("h1",{className:"text-white",children:"Self-Service Onboarding & Multi-Factor Authentication"}),M.jsx("h4",{className:"pt-4",children:"Designed the self-service enrollment and authentication for Adaptiv Networks’ MyConnect VPN, enabling independent onboarding, secure credential setup, and MFA. Delivered a scalable, intuitive solution that balances usability with enterprise security and reduces IT support reliance for hybrid workforce management."})]})})}),M.jsxs(ss,{title:"Context",children:[M.jsx("p",{className:"pb-4",children:"Adaptiv Networks is a multi-tenant provider of cloud-managed networking solutions, specializing in Software-Defined Wide Area Network (SD-WAN) technology. Their platform enables businesses to optimize network performance, reliability, and security while simplifying management and reducing operational costs."}),M.jsx("p",{className:"pb-4",children:"To support hybrid and remote workforces, Adaptiv Networks offers MyConnect VPN, a secure remote access solution that integrates with their SD-WAN infrastructure. Efficient onboarding and authentication for remote employees, partners, and tenants is critical to ensure seamless connectivity, protect sensitive data, and maintain enterprise-grade security."})]}),M.jsx(ss,{title:"Business Problem",children:M.jsxs("ul",{className:"list-disc list-outside space-y-1 pl-4",children:[M.jsxs("li",{children:[M.jsx("strong",{children:"Manual onboarding is resource-intensive and does not scale:"}),M.jsx("p",{children:"IT teams must create accounts individually, slowing adoption for partners, tenants, and new employees."})]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Limited self-service capabilities restrict user independence:"}),M.jsx("p",{children:"Customers cannot independently onboard or manage users, increasing operational overhead."})]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Security and compliance are paramount:"}),M.jsx("p",{children:"Multi-Factor Authentication (MFA) is required to meet industry standards, but default workflows can be confusing or inconsistent for end users."})]}),M.jsxs("li",{children:[M.jsx("strong",{children:"High reliance on IT support reduces efficiency:"}),M.jsx("p",{children:"Without an intuitive self-service experience, organizations face higher support costs and slower user adoption."})]})]})}),M.jsx(ss,{title:"Business Goal",children:M.jsxs("ul",{className:"list-disc list-outside space-y-1 pl-4",children:[M.jsxs("li",{children:[M.jsx("strong",{children:"Streamline Onboarding & Self-Management:"}),"Deliver an automated, user-friendly enrollment flow that reduces IT dependency and accelerates adoption."]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Enhance Security & Compliance:"}),"Implement flexible MFA options to protect sensitive data and meet enterprise security requirements."]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Enable Scalable Operations:"}),"Provide a multi-tenant, self-service solution that supports partners and tenants independently, with potential premium features for recurring revenue."]})]})}),M.jsx(ss,{title:"Research",children:M.jsx("p",{className:"pb-4",children:"Mapped user flows: enrollment, login, password reset, and MFA. Identified pain points to ensure a smooth user journey. Auth0 was selected as the IAM vendor; documentation was reviewed to understand framework capabilities and optimize experience."})}),M.jsx("div",{className:"w-full  py-6 mb-12 border-y-1 border-zinc-800 text-sm",children:M.jsxs("div",{className:"max-w-screen-xl mx-auto",children:[M.jsx("h3",{className:"text-indigo-800 text-2xl pb-8",children:"User Journey: Caller UI Workflow"}),M.jsxs("div",{className:"hidden md:grid grid-cols-1 md:grid-cols-6 gap-4 border-b border-gray-700 pb-4 font-semibold text-zinc-800",children:[M.jsx("div",{children:"Stage"}),M.jsx("div",{children:"Tenant/Admin Action"}),M.jsx("div",{children:"End-User Action"}),M.jsx("div",{children:"System Response"}),M.jsx("div",{children:"Tenant/Admin Thoughts"}),M.jsx("div",{children:"End-User Thoughts"}),M.jsx("div",{children:"Pain Points / Risks"}),M.jsx("div",{children:"Opportunities / Improvement"})]}),M.jsx("div",{className:"hidden md:block",children:a_.map((r,e)=>M.jsxs("div",{className:`grid grid-cols-1 md:grid-cols-6 gap-4 py-2 border-b border-gray-400 ${e%2===0?"bg-zinc-200":"bg-zinc-300"}`,children:[M.jsx("div",{className:"px-2 py-1",children:r.stage}),M.jsx("div",{className:"px-2 py-1",children:r.tenantAdminAction}),M.jsx("div",{className:"px-2 py-1",children:r.endUserAction}),M.jsx("div",{className:"px-2 py-1",children:r.systemResponse}),M.jsx("div",{className:"px-2 py-1",children:r.tenantAdminThoughts}),M.jsx("div",{className:"px-2 py-1",children:r.endUserThoughts}),M.jsx("div",{className:"px-2 py-1",children:r.painPoints}),M.jsx("div",{className:"px-2 py-1",children:r.opportunities})]},e))}),M.jsx("div",{className:"md:hidden space-y-4",children:a_.map((r,e)=>M.jsxs("details",{className:"bg-zinc-800 rounded-lg p-4",children:[M.jsx("summary",{className:"font-semibold text-white cursor-pointer",children:r.stage}),M.jsxs("div",{className:"mt-2 space-y-2 text-gray-200",children:[M.jsxs("p",{children:[M.jsx("strong",{children:"Tenant/Admin Action:"})," ",r.tenantAdminAction]}),M.jsxs("p",{children:[M.jsx("strong",{children:"End-User Action:"})," ",r.endUserAction]}),M.jsxs("p",{children:[M.jsx("strong",{children:"System Response:"})," ",r.systemResponse]}),M.jsxs("p",{children:[M.jsx("strong",{children:"Tenant/Admin Thoughts:"})," ",r.tenantAdminThoughts]}),M.jsxs("p",{children:[M.jsx("strong",{children:"End-User Thoughts:"})," ",r.endUserThoughts]}),M.jsxs("p",{children:[M.jsx("strong",{children:"Pain Points / Risks:"})," ",r.painPoints]}),M.jsxs("p",{children:[M.jsx("strong",{children:"Opportunities / Improvement:"})," ",r.opportunities]})]})]},e))})]})}),M.jsxs(ss,{title:"Hypothesis",children:[M.jsx("p",{className:"italic pb-4",children:"By designing a self-service VPN enrollment flow with integrated MFA guidance, users will:"}),M.jsxs("ul",{className:"list-disc list-outside space-y-2 ml-4 pb-4",children:[M.jsxs("li",{children:[M.jsx("strong",{children:"Onboard faster"})," without relying on IT support"]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Complete security steps confidently"})," with clear MFA instructions and options"]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Manage multiple accounts efficiently"})," in a multi-tenant environment"]})]}),M.jsxs("p",{children:["This approach transforms VPN onboarding from a technical, error-prone process into a ",M.jsx("strong",{children:"streamlined, user-friendly experience"})," that balances security, usability, and scalability."]})]}),M.jsx(ss,{title:"Solution",children:M.jsx("p",{className:"pb-4",children:"Partners/Tenants submit first name, last name, and email. Users receive a one-time password via email. Clicking the link auto-logs the user into the self-service portal. Users set a secure password, then complete MFA if purchased, adding a layer of security."})}),M.jsx(ss,{title:"User Outcomes",children:M.jsxs("ul",{className:"list-disc list-outside space-y-1 pl-4",children:[M.jsxs("li",{children:[M.jsx("strong",{children:"One-Time Code (App-based):"})," Most frustrating; app download, QR code scan, backup code required."]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Text (SMS):"})," Minimal complaints; quick and familiar for users."]}),M.jsxs("li",{children:[M.jsx("strong",{children:"Email:"})," Convenient; longer code lifespan; easy to copy/paste, though slightly less secure than SMS."]})]})}),M.jsx(ss,{title:"Observations",children:M.jsx("p",{className:"pb-4",children:"MFA implementation highlighted weaknesses in default Auth0 options and a lack of tailored security guidance. Users/developers may assume full protection without understanding trade-offs. Clear guidance and penetration testing are recommended to select MFA strategies that align with organizational security needs."})})]})}const _a=({title:r,children:e})=>M.jsx("div",{className:"w-full",children:M.jsxs("div",{className:"max-w-screen-lg mx-auto px-6",children:[M.jsx("div",{children:M.jsx("h2",{className:"mb-4",children:r})}),M.jsx("div",{className:"pt-4 pb-9",children:e})]})}),s_=[{stage:"Login / Start Shift",tenantAdminAction:"Set up rules and priority levels (P1, P2, subgroups).",endUserAction:"Logs into VanillaSoft dashboard; sees queued leads based on priority and last result codes.",systemResponse:"Displays leads in queue order automatically based on rules and last result codes.",tenantAdminThoughts:"I hope the queue reflects our rules correctly.",endUserThoughts:"System already knows my top leads.",painPoints:"Initial skepticism about automated priorities.",opportunities:"Show a summary or visual cue explaining lead prioritization."},{stage:"Review Automated Queue",tenantAdminAction:"Monitor queue performance and adjust if needed.",endUserAction:"Reviews queued leads to decide which to contact first.",systemResponse:"Highlights high-priority leads visually (color coding, icons).",tenantAdminThoughts:"Are top leads really correct based on our rules?",endUserThoughts:"I can start with the highest-priority leads.",painPoints:"Complexity of priority rules may be unclear.",opportunities:"Visual indicators to explain priority and scheduling logic."},{stage:"Examine Lead Details",tenantAdminAction:"Ensure all necessary data points are available for agents.",endUserAction:"Opens lead profiles for context before outreach.",systemResponse:"Displays last result code, engagement score, and subgroup info.",tenantAdminThoughts:"Do agents have enough context?",endUserThoughts:"I have context on each lead’s last activity and priority.",painPoints:"Incomplete data can confuse agent decisions.",opportunities:"Inline summary of key metrics affecting prioritization."},{stage:"Outreach / Contact",tenantAdminAction:"Monitor engagement and follow-up metrics.",endUserAction:"Contacts lead via preferred channel (call, email, SMS).",systemResponse:"Automatically updates lead status and reschedules based on outcome.",tenantAdminThoughts:"Are agents contacting leads efficiently?",endUserThoughts:"I’m engaging the right leads at the right time.",painPoints:"Risk of missing leads if rules misunderstood.",opportunities:"Tooltip indicating why this lead was queued now."},{stage:"Record Outcome / Update Result Code",tenantAdminAction:"Adjust rules if patterns emerge.",endUserAction:"Logs call result or engagement outcome.",systemResponse:"Re-queues leads dynamically based on new result codes.",tenantAdminThoughts:"Rules need to adapt automatically.",endUserThoughts:"System adapts automatically; no manual sorting required.",painPoints:"High volume can be overwhelming without cues.",opportunities:"Dynamic preview of next lead to reduce uncertainty."},{stage:"Continuous Monitoring",tenantAdminAction:"Review metrics: call volume, conversions, engagement.",endUserAction:"Observes progress toward daily goals.",systemResponse:"Provides dashboard visualizations and insights.",tenantAdminThoughts:"Are rules achieving desired results?",endUserThoughts:"I can see how effective the queue is.",painPoints:"Interpreting raw data can be challenging.",opportunities:"Dashboards with clear KPIs and visual insights."},{stage:"Iteration / Optimization",tenantAdminAction:"Refine rules or subgroups (P1a, P1b) for better outcomes.",endUserAction:"—",systemResponse:"System applies new rules dynamically.",tenantAdminThoughts:"Optimization improves efficiency over time.",endUserThoughts:"—",painPoints:"Frequent changes can confuse agents.",opportunities:"Communicate updates clearly with notifications."}];function gw(){return M.jsxs("div",{className:"text-white",children:[M.jsx("div",{className:"bg-zinc-950 w-full text-white",children:M.jsx("div",{className:"max-w-screen-lg mx-auto flex flex-nowrap space-x-1 px-6 pt-20 pb-12 mb-12 ",children:M.jsxs("div",{className:"basis-6/8",children:[M.jsx("h4",{className:"",children:"Dynamic, Multi-Level Contact Prioritization for Sales Efficiency"}),M.jsx("h1",{className:"",children:"UX Case 03: Intellective Routing"}),M.jsx("h4",{className:"basis-1/3 pt-6",children:"Designed a multi-level contact prioritization framework for VanillaSoft that lets sales teams create custom rules to focus on high-value leads. The solution improved workflow efficiency, boosted conversion rates, and enhanced user satisfaction by balancing powerful features with a simple, intuitive design."})]})})}),M.jsx(_a,{title:"Role & Contribution",children:M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Led end-to-end feature design: research, user flows, wireframes, high-fidelity UI design."}),M.jsx("li",{children:"Defined functional requirements and collaborated with developers during implementation."}),M.jsx("li",{children:"Conducted usability testing and iterated designs based on agent feedback."}),M.jsx("li",{children:"Designed a visual query-building interface to simplify complex prioritization logic."}),M.jsx("li",{children:"Customers also needed flexibility to use any data type and create subgroups (e.g., P1a, P1b), increasing complexity."})]})}),M.jsx(_a,{title:"Context",children:M.jsx("p",{className:"pb-4",children:"VanillaSoft is a cloud-based sales management platform integrating CRM, lead management, and telemarketing tools. It uses a queue-based approach to guide agents to the next best contact, based on data points such as renewal dates, rather than static lists. This ensures sales teams focus on the most relevant leads at the optimal time."})}),M.jsx(_a,{title:"Business Problem",children:M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Customers requested the ability to implement multiple levels of prioritization (P1, P2, etc.) to better target high-value leads."}),M.jsx("li",{children:"Current platform lacked dynamic prioritization, limiting workflow efficiency."}),M.jsx("li",{children:"Customers also needed flexibility to use any data type and create subgroups (e.g., P1a, P1b), increasing complexity."})]})}),M.jsx(_a,{title:"Business Goal",children:M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Improve sales team efficiency and conversion rates by directing agents to the most promising leads."}),M.jsx("li",{children:"Provide flexibility to define rules across diverse data types and multiple levels of prioritization."}),M.jsx("li",{children:"Ensure the system remains intuitive and accessible to prevent cognitive overload."})]})}),M.jsxs(_a,{title:"Research and Insights",children:[M.jsxs("p",{className:"pb-4",children:[M.jsx("strong",{children:"Methods:"})," Customer feedback analysis, scenario mapping, edge case exploration."]}),M.jsx("p",{className:"pb-4",children:M.jsx("strong",{children:"Findings:"})}),M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Customers required complex inclusion/exclusion rules (e.g., prioritize A, C, F unless B = X)."}),M.jsx("li",{children:"Early limitations risked extensive rework later. Supporting broad flexibility from the start was safer."}),M.jsx("li",{children:"Designing for both power users and non-technical users was essential."})]})]}),M.jsxs("div",{className:"w-full  text-sm",children:[M.jsx("div",{className:"max-w-screen-xl mx-auto",children:M.jsx("h3",{className:" text-2xl pb-8",children:"User Journey"})}),M.jsx("div",{className:"w-full bg-zinc-900  pt-6 mb-18",children:M.jsxs("div",{className:"max-w-screen-xl mx-auto px-4",children:[M.jsxs("div",{className:"hidden md:grid grid-cols-8 gap-4 border-b border-gray-700 pb-4 font-semibold text-white",children:[M.jsx("div",{children:"Stage"}),M.jsx("div",{children:"Tenant/Admin Action"}),M.jsx("div",{children:"End-User Action"}),M.jsx("div",{children:"System Response"}),M.jsx("div",{children:"Tenant/Admin Thoughts"}),M.jsx("div",{children:"End-User Thoughts"}),M.jsx("div",{children:"Pain Points / Risks"}),M.jsx("div",{children:"Opportunities / Improvement"})]}),M.jsx("div",{className:"hidden md:block",children:s_.map((r,e)=>M.jsxs("div",{className:`grid grid-cols-8 gap-4 py-4 border-b border-gray-800 ${e%2===0?"bg-zinc-900":"bg-zinc-800"}`,children:[M.jsx("div",{className:"px-2 py-1",children:r.stage}),M.jsx("div",{className:"px-2 py-1",children:r.tenantAdminAction}),M.jsx("div",{className:"px-2 py-1",children:r.endUserAction}),M.jsx("div",{className:"px-2 py-1",children:r.systemResponse}),M.jsx("div",{className:"px-2 py-1",children:r.tenantAdminThoughts}),M.jsx("div",{className:"px-2 py-1",children:r.endUserThoughts}),M.jsx("div",{className:"px-2 py-1",children:r.painPoints}),M.jsx("div",{className:"px-2 py-1",children:r.opportunities})]},e))}),M.jsx("div",{className:"md:hidden space-y-4",children:s_.map((r,e)=>M.jsxs("details",{className:"bg-zinc-800 rounded-lg p-4",children:[M.jsx("summary",{className:"font-semibold text-white cursor-pointer",children:r.stage}),M.jsxs("div",{className:"mt-2 space-y-2 ",children:[M.jsxs("p",{children:[M.jsx("strong",{children:"Tenant/Admin Action:"})," ",r.tenantAdminAction]}),M.jsxs("p",{children:[M.jsx("strong",{children:"End-User Action:"})," ",r.endUserAction]}),M.jsxs("p",{children:[M.jsx("strong",{children:"System Response:"})," ",r.systemResponse]}),M.jsxs("p",{children:[M.jsx("strong",{children:"Tenant/Admin Thoughts:"})," ",r.tenantAdminThoughts]}),M.jsxs("p",{children:[M.jsx("strong",{children:"End-User Thoughts:"})," ",r.endUserThoughts]}),M.jsxs("p",{children:[M.jsx("strong",{children:"Pain Points / Risks:"})," ",r.painPoints]}),M.jsxs("p",{children:[M.jsx("strong",{children:"Opportunities / Improvement:"})," ",r.opportunities]})]})]},e))})]})})]}),M.jsxs(_a,{title:"Hypothesis",children:[M.jsx("p",{className:"pb-4",children:"By implementing a customizable prioritization framework, users will:"}),M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Focus on the most relevant leads at the right time."}),M.jsx("li",{children:"Improve efficiency and shorten sales cycles."}),M.jsx("li",{children:"Adapt workflows without vendor or IT support."})]}),M.jsx("p",{className:"pt-4",children:"However, without a clear and intuitive UI, the complexity could overwhelm users. Simplicity in interaction design would be critical to adoption."})]}),M.jsxs(_a,{title:"Design Solution",children:[M.jsx("p",{className:"pb-4",children:"Query-Building Framework for Prioritization"}),M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Enhanced Lead Prioritization: Implemented real-time, customizable routing filters that dynamically rank leads based on various criteria, ensuring agents always engage with the most relevant prospects."}),M.jsx("li",{children:"Streamlined Workflow: Introduced a queue-based routing system that automates lead assignment, reducing decision fatigue and allowing agents to focus on high-value interactions."}),M.jsx("li",{children:"Continuous Optimization: Developed an intuitive interface for administrators to adjust routing filters and criteria in real-time, enabling ongoing refinement of lead prioritization strategies without disrupting agent productivity."})]})]}),M.jsx(_a,{title:"Challenges & Lessons Learned",children:M.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[M.jsx("li",{children:"Balancing flexibility with simplicity in the user interface."}),M.jsx("li",{children:"Designing a rules builder that communicates complex conditions clearly."}),M.jsx("li",{children:"Ensuring adaptability to future scenarios without costly rework."})]})}),M.jsx(_a,{title:"Results / Impact",children:M.jsxs("ul",{children:[M.jsx("li",{children:"Achieved a 500% increase in call volume without additional operational overhead, as reported by One of a Kind Sales."}),M.jsx("li",{children:"Streamlined lead management processes, reducing manual intervention and administrative overhead, as experienced by SalesRoads."}),M.jsx("li",{children:"Enhanced lead prioritization and routing, leading to improved sales efficiency and conversion rates."})]})})]})}function vw(){return M.jsx("h1",{className:"text-3xl font-bold",children:"Resume"})}function _w(){return M.jsx("h1",{className:"text-3xl font-bold",children:"Certification"})}function xw(){const[r,e]=me.useState(window.innerWidth>=768),[i,s]=me.useState(window.innerWidth<768),l=Ra(),c=()=>{e(f=>!f)};return me.useEffect(()=>{const f=()=>{const p=window.innerWidth<768;s(p),e(!p)};return window.addEventListener("resize",f),f(),()=>window.removeEventListener("resize",f)},[]),me.useEffect(()=>{i&&e(!1)},[l,i]),M.jsxs(M.Fragment,{children:[M.jsx(ow,{className:"bg-zinc-950"}),M.jsxs("div",{className:"flex flex-col h-screen w-screen",children:[M.jsx(lw,{toggleMenu:c}),M.jsxs("div",{className:"flex flex-1 overflow-hidden relative",children:[M.jsx("aside",{className:`w-56 h-full overflow-y-auto flex flex-col transition-all duration-300 
              ${r?"ml-0":"-ml-56"} top-0 left-0 z-40 relative`,children:M.jsx(cw,{})}),r&&i&&M.jsx("div",{onClick:()=>e(!1),className:"fixed inset-0 z-30",style:{backgroundColor:"rgba(0, 0, 0, 0.3)"}}),M.jsx("main",{className:"flex-1 overflow-y-auto overscroll-contain ml-0",children:M.jsxs(mM,{children:[M.jsx(rs,{path:"/",element:M.jsx(uw,{})}),M.jsx(rs,{path:"/about",element:M.jsx(fw,{})}),M.jsx(rs,{path:"/case01",element:M.jsx(pw,{})}),M.jsx(rs,{path:"/case02",element:M.jsx(mw,{})}),M.jsx(rs,{path:"/case03",element:M.jsx(gw,{})}),M.jsx(rs,{path:"/resume",element:M.jsx(vw,{})}),M.jsx(rs,{path:"/certification",element:M.jsx(_w,{})})]})})]})]})]})}vy.createRoot(document.getElementById("root")).render(M.jsx(me.StrictMode,{children:M.jsx(zM,{basename:"/portfolio",children:M.jsx(xw,{})})}));
