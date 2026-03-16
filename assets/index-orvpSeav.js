(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var vd={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function ry(){if(G0)return zo;G0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return zo.Fragment=e,zo.jsx=i,zo.jsxs=i,zo}var V0;function oy(){return V0||(V0=1,vd.exports=ry()),vd.exports}var _=oy(),xd={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function ly(){if(k0)return ut;k0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=S&&P[S]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function M(P,K,pe){this.props=P,this.context=K,this.refs=C,this.updater=pe||b}M.prototype.isReactComponent={},M.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},M.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function y(){}y.prototype=M.prototype;function D(P,K,pe){this.props=P,this.context=K,this.refs=C,this.updater=pe||b}var N=D.prototype=new y;N.constructor=D,T(N,M.prototype),N.isPureReactComponent=!0;var L=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function k(P,K,pe,Se,Ue,Ye){return pe=Ye.ref,{$$typeof:r,type:P,key:K,ref:pe!==void 0?pe:null,props:Ye}}function A(P,K){return k(P.type,K,void 0,void 0,void 0,P.props)}function O(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function he(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(pe){return K[pe]})}var V=/\/+/g;function te(P,K){return typeof P=="object"&&P!==null&&P.key!=null?he(""+P.key):K.toString(36)}function se(){}function ue(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(se,se):(P.status="pending",P.then(function(K){P.status==="pending"&&(P.status="fulfilled",P.value=K)},function(K){P.status==="pending"&&(P.status="rejected",P.reason=K)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function Q(P,K,pe,Se,Ue){var Ye=typeof P;(Ye==="undefined"||Ye==="boolean")&&(P=null);var ee=!1;if(P===null)ee=!0;else switch(Ye){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(P.$$typeof){case r:case e:ee=!0;break;case g:return ee=P._init,Q(ee(P._payload),K,pe,Se,Ue)}}if(ee)return Ue=Ue(P),ee=Se===""?"."+te(P,0):Se,L(Ue)?(pe="",ee!=null&&(pe=ee.replace(V,"$&/")+"/"),Q(Ue,K,pe,"",function(Je){return Je})):Ue!=null&&(O(Ue)&&(Ue=A(Ue,pe+(Ue.key==null||P&&P.key===Ue.key?"":(""+Ue.key).replace(V,"$&/")+"/")+ee)),K.push(Ue)),1;ee=0;var be=Se===""?".":Se+":";if(L(P))for(var ye=0;ye<P.length;ye++)Se=P[ye],Ye=be+te(Se,ye),ee+=Q(Se,K,pe,Ye,Ue);else if(ye=x(P),typeof ye=="function")for(P=ye.call(P),ye=0;!(Se=P.next()).done;)Se=Se.value,Ye=be+te(Se,ye++),ee+=Q(Se,K,pe,Ye,Ue);else if(Ye==="object"){if(typeof P.then=="function")return Q(ue(P),K,pe,Se,Ue);throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ee}function I(P,K,pe){if(P==null)return P;var Se=[],Ue=0;return Q(P,Se,"","",function(Ye){return K.call(pe,Ye,Ue++)}),Se}function H(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(pe){(P._status===0||P._status===-1)&&(P._status=1,P._result=pe)},function(pe){(P._status===0||P._status===-1)&&(P._status=2,P._result=pe)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var de=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function ve(){}return ut.Children={map:I,forEach:function(P,K,pe){I(P,function(){K.apply(this,arguments)},pe)},count:function(P){var K=0;return I(P,function(){K++}),K},toArray:function(P){return I(P,function(K){return K})||[]},only:function(P){if(!O(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},ut.Component=M,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=D,ut.StrictMode=s,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ut.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},ut.cache=function(P){return function(){return P.apply(null,arguments)}},ut.cloneElement=function(P,K,pe){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Se=T({},P.props),Ue=P.key,Ye=void 0;if(K!=null)for(ee in K.ref!==void 0&&(Ye=void 0),K.key!==void 0&&(Ue=""+K.key),K)!G.call(K,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&K.ref===void 0||(Se[ee]=K[ee]);var ee=arguments.length-2;if(ee===1)Se.children=pe;else if(1<ee){for(var be=Array(ee),ye=0;ye<ee;ye++)be[ye]=arguments[ye+2];Se.children=be}return k(P.type,Ue,void 0,void 0,Ye,Se)},ut.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ut.createElement=function(P,K,pe){var Se,Ue={},Ye=null;if(K!=null)for(Se in K.key!==void 0&&(Ye=""+K.key),K)G.call(K,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Ue[Se]=K[Se]);var ee=arguments.length-2;if(ee===1)Ue.children=pe;else if(1<ee){for(var be=Array(ee),ye=0;ye<ee;ye++)be[ye]=arguments[ye+2];Ue.children=be}if(P&&P.defaultProps)for(Se in ee=P.defaultProps,ee)Ue[Se]===void 0&&(Ue[Se]=ee[Se]);return k(P,Ye,void 0,void 0,null,Ue)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(P){return{$$typeof:p,render:P}},ut.isValidElement=O,ut.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:H}},ut.memo=function(P,K){return{$$typeof:h,type:P,compare:K===void 0?null:K}},ut.startTransition=function(P){var K=B.T,pe={};B.T=pe;try{var Se=P(),Ue=B.S;Ue!==null&&Ue(pe,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(ve,de)}catch(Ye){de(Ye)}finally{B.T=K}},ut.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ut.use=function(P){return B.H.use(P)},ut.useActionState=function(P,K,pe){return B.H.useActionState(P,K,pe)},ut.useCallback=function(P,K){return B.H.useCallback(P,K)},ut.useContext=function(P){return B.H.useContext(P)},ut.useDebugValue=function(){},ut.useDeferredValue=function(P,K){return B.H.useDeferredValue(P,K)},ut.useEffect=function(P,K,pe){var Se=B.H;if(typeof pe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Se.useEffect(P,K)},ut.useId=function(){return B.H.useId()},ut.useImperativeHandle=function(P,K,pe){return B.H.useImperativeHandle(P,K,pe)},ut.useInsertionEffect=function(P,K){return B.H.useInsertionEffect(P,K)},ut.useLayoutEffect=function(P,K){return B.H.useLayoutEffect(P,K)},ut.useMemo=function(P,K){return B.H.useMemo(P,K)},ut.useOptimistic=function(P,K){return B.H.useOptimistic(P,K)},ut.useReducer=function(P,K,pe){return B.H.useReducer(P,K,pe)},ut.useRef=function(P){return B.H.useRef(P)},ut.useState=function(P){return B.H.useState(P)},ut.useSyncExternalStore=function(P,K,pe){return B.H.useSyncExternalStore(P,K,pe)},ut.useTransition=function(){return B.H.useTransition()},ut.version="19.1.0",ut}var j0;function tp(){return j0||(j0=1,xd.exports=ly()),xd.exports}var me=tp(),_d={exports:{}},Ho={},Sd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function cy(){return X0||(X0=1,function(r){function e(I,H){var de=I.length;I.push(H);e:for(;0<de;){var ve=de-1>>>1,P=I[ve];if(0<l(P,H))I[ve]=H,I[de]=P,de=ve;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var H=I[0],de=I.pop();if(de!==H){I[0]=de;e:for(var ve=0,P=I.length,K=P>>>1;ve<K;){var pe=2*(ve+1)-1,Se=I[pe],Ue=pe+1,Ye=I[Ue];if(0>l(Se,de))Ue<P&&0>l(Ye,Se)?(I[ve]=Ye,I[Ue]=de,ve=Ue):(I[ve]=Se,I[pe]=de,ve=pe);else if(Ue<P&&0>l(Ye,de))I[ve]=Ye,I[Ue]=de,ve=Ue;else break e}}return H}function l(I,H){var de=I.sortIndex-H.sortIndex;return de!==0?de:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],g=1,S=null,x=3,b=!1,T=!1,C=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var H=i(h);H!==null;){if(H.callback===null)s(h);else if(H.startTime<=I)s(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function B(I){if(C=!1,L(I),!T)if(i(m)!==null)T=!0,G||(G=!0,te());else{var H=i(h);H!==null&&Q(B,H.startTime-I)}}var G=!1,k=-1,A=5,O=-1;function he(){return M?!0:!(r.unstable_now()-O<A)}function V(){if(M=!1,G){var I=r.unstable_now();O=I;var H=!0;try{e:{T=!1,C&&(C=!1,D(k),k=-1),b=!0;var de=x;try{t:{for(L(I),S=i(m);S!==null&&!(S.expirationTime>I&&he());){var ve=S.callback;if(typeof ve=="function"){S.callback=null,x=S.priorityLevel;var P=ve(S.expirationTime<=I);if(I=r.unstable_now(),typeof P=="function"){S.callback=P,L(I),H=!0;break t}S===i(m)&&s(m),L(I)}else s(m);S=i(m)}if(S!==null)H=!0;else{var K=i(h);K!==null&&Q(B,K.startTime-I),H=!1}}break e}finally{S=null,x=de,b=!1}H=void 0}}finally{H?te():G=!1}}}var te;if(typeof N=="function")te=function(){N(V)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ue=se.port2;se.port1.onmessage=V,te=function(){ue.postMessage(null)}}else te=function(){y(V,0)};function Q(I,H){k=y(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var de=x;x=H;try{return I()}finally{x=de}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var de=x;x=I;try{return H()}finally{x=de}},r.unstable_scheduleCallback=function(I,H,de){var ve=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?ve+de:ve):de=ve,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=de+P,I={id:g++,callback:H,priorityLevel:I,startTime:de,expirationTime:P,sortIndex:-1},de>ve?(I.sortIndex=de,e(h,I),i(m)===null&&I===i(h)&&(C?(D(k),k=-1):C=!0,Q(B,de-ve))):(I.sortIndex=P,e(m,I),T||b||(T=!0,G||(G=!0,te()))),I},r.unstable_shouldYield=he,r.unstable_wrapCallback=function(I){var H=x;return function(){var de=x;x=H;try{return I.apply(this,arguments)}finally{x=de}}}}(yd)),yd}var W0;function uy(){return W0||(W0=1,Sd.exports=cy()),Sd.exports}var Md={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function fy(){if(q0)return Cn;q0=1;var r=tp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Cn.flushSync=function(m){var h=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=g,s.d.f()}},Cn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,S=p(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:b}):g==="script"&&s.d.X(m,{crossOrigin:S,integrity:x,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Cn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Cn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,S=p(g,h.crossOrigin);s.d.L(m,g,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Cn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,h){return m(h)},Cn.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},Cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var Y0;function dy(){if(Y0)return Md.exports;Y0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Md.exports=fy(),Md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function hy(){if(Z0)return Ho;Z0=1;var r=uy(),e=tp(),i=dy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),t;if(d===o)return p(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var E=!1,R=u.child;R;){if(R===a){E=!0,a=u,o=d;break}if(R===o){E=!0,o=u,a=d;break}R=R.sibling}if(!E){for(R=d.child;R;){if(R===a){E=!0,a=d,o=u;break}if(R===o){E=!0,o=d,a=u;break}R=R.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return(t.displayName||"Context")+".Provider";case D:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var Q=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},ve=[],P=-1;function K(t){return{current:t}}function pe(t){0>P||(t.current=ve[P],ve[P]=null,P--)}function Se(t,n){P++,ve[P]=t.current,t.current=n}var Ue=K(null),Ye=K(null),ee=K(null),be=K(null);function ye(t,n){switch(Se(ee,n),Se(Ye,t),Se(Ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?m0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=m0(n),t=g0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}pe(Ue),Se(Ue,t)}function Je(){pe(Ue),pe(Ye),pe(ee)}function Ke(t){t.memoizedState!==null&&Se(be,t);var n=Ue.current,a=g0(n,t.type);n!==a&&(Se(Ye,t),Se(Ue,a))}function $e(t){Ye.current===t&&(pe(Ue),pe(Ye)),be.current===t&&(pe(be),Oo._currentValue=de)}var qt=Object.prototype.hasOwnProperty,ht=r.unstable_scheduleCallback,_t=r.unstable_cancelCallback,Ct=r.unstable_shouldYield,rt=r.unstable_requestPaint,yt=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,jt=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,bt=r.unstable_NormalPriority,Ge=r.unstable_LowPriority,U=r.unstable_IdlePriority,v=r.log,F=r.unstable_setDisableYieldValue,Z=null,le=null;function ae(t){if(typeof v=="function"&&F(t),le&&typeof le.setStrictMode=="function")try{le.setStrictMode(Z,t)}catch{}}var we=Math.clz32?Math.clz32:Qe,Ce=Math.log,Xe=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Ce(t)/Xe|0)|0}var Ee=256,Ae=4194304;function Fe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function He(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Fe(o):(E&=R,E!==0?u=Fe(E):a||(a=R&~t,a!==0&&(u=Fe(a))))):(R=o&~d,R!==0?u=Fe(R):E!==0?u=Fe(E):a||(a=o&~t,a!==0&&(u=Fe(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ct(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function De(){var t=Ae;return Ae<<=1,(Ae&62914560)===0&&(Ae=4194304),t}function Re(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ie(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,n,a,o,u,d){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,ne=t.hiddenUpdates;for(a=E&~a;0<a;){var xe=31-we(a),Me=1<<xe;R[xe]=0,z[xe]=-1;var re=ne[xe];if(re!==null)for(ne[xe]=null,xe=0;xe<re.length;xe++){var ce=re[xe];ce!==null&&(ce.lane&=-536870913)}a&=~Me}o!==0&&ge(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~n))}function ge(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-we(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Ve(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-we(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:P0(t.type))}function pi(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var xn=Math.random().toString(36).slice(2),hn="__reactFiber$"+xn,_n="__reactProps$"+xn,Ra="__reactContainer$"+xn,Bs="__reactEvents$"+xn,ul="__reactListeners$"+xn,qi="__reactHandles$"+xn,zs="__reactResources$"+xn,wa="__reactMarker$"+xn;function Hs(t){delete t[hn],delete t[_n],delete t[Bs],delete t[ul],delete t[qi]}function mi(t){var n=t[hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ra]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=S0(t);t!==null;){if(a=t[hn])return a;t=S0(t)}return n}t=a,a=t.parentNode}return null}function Yi(t){if(t=t[hn]||t[Ra]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Di(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Zi(t){var n=t[zs];return n||(n=t[zs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(t){t[wa]=!0}var fl=new Set,dl={};function Ki(t,n){Ca(t,n),Ca(t+"Capture",n)}function Ca(t,n){for(dl[t]=n,t=0;t<n.length;t++)fl.add(n[t])}var mu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hl={},w={};function q(t){return qt.call(w,t)?!0:qt.call(hl,t)?!1:mu.test(t)?w[t]=!0:(hl[t]=!0,!1)}function fe(t,n,a){if(q(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function J(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Le,Be;function Ne(t){if(Le===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Le=n&&n[1]||"",Be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Le+t+Be}var ke=!1;function We(t,n){if(!t||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ce){var re=ce}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(ce){re=ce}t.call(Me.prototype)}}else{try{throw Error()}catch(ce){re=ce}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ce){if(ce&&re&&typeof ce.stack=="string")return[ce.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],R=d[1];if(E&&R){var z=E.split(`
`),ne=R.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===ne.length)for(o=z.length-1,u=ne.length-1;1<=o&&0<=u&&z[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==ne[u]){var xe=`
`+z[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=u);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ne(a):""}function st(t){switch(t.tag){case 26:case 27:case 5:return Ne(t.type);case 16:return Ne("Lazy");case 13:return Ne("Suspense");case 19:return Ne("SuspenseList");case 0:case 15:return We(t.type,!1);case 11:return We(t.type.render,!1);case 1:return We(t.type,!0);case 31:return Ne("Activity");default:return""}}function lt(t){try{var n="";do n+=st(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t){var n=Dt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Vt(t){t._valueTracker||(t._valueTracker=Kt(t))}function Nt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Dt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function an(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qe=/[\n"\\]/g;function Xt(t){return t.replace(qe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xt(t,n,a,o,u,d,E,R){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ze(n)):t.value!==""+ze(n)&&(t.value=""+ze(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?In(t,E,ze(n)):a!=null?In(t,E,ze(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ze(R):t.removeAttribute("name")}function Pn(t,n,a,o,u,d,E,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+ze(a):"",n=n!=null?""+ze(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function In(t,n,a){n==="number"&&an(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Qi(t,n,a){if(n!=null&&(n=""+ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ze(a):""}function Pt(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Yt(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function gi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&sn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&sn(t,d,n[d])}function Ui(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),s_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(t){return s_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var gu=null;function vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gs=null,Vs=null;function vp(t){var n=Yi(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;e:switch(t=n.stateNode,n.type){case"input":if(xt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[_n]||null;if(!u)throw Error(s(90));xt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Nt(o)}break e;case"textarea":Qi(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Fn(t,!!a.multiple,n,!1)}}}var xu=!1;function xp(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(Gs!==null||Vs!==null)&&(ec(),Gs&&(n=Gs,t=Vs,Vs=Gs=null,vp(n),t)))for(n=0;n<t.length;n++)vp(t[n])}}function Wr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(Ji)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){_u=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{_u=!1}var Da=null,Su=null,gl=null;function _p(){if(gl)return gl;var t,n=Su,a=n.length,o,u="value"in Da?Da.value:Da.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var E=a-t;for(o=1;o<=E&&n[a-o]===u[d-o];o++);return gl=u.slice(t,1<o?1-o:void 0)}function vl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function Sp(){return!1}function Bn(t){function n(a,o,u,d,E){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?xl:Sp,this.isPropagationStopped=Sp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),n}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Bn(ls),Yr=g({},ls,{view:0,detail:0}),r_=Bn(Yr),yu,Mu,Zr,Sl=g({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zr&&(Zr&&t.type==="mousemove"?(yu=t.screenX-Zr.screenX,Mu=t.screenY-Zr.screenY):Mu=yu=0,Zr=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),yp=Bn(Sl),o_=g({},Sl,{dataTransfer:0}),l_=Bn(o_),c_=g({},Yr,{relatedTarget:0}),bu=Bn(c_),u_=g({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),f_=Bn(u_),d_=g({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h_=Bn(d_),p_=g({},ls,{data:0}),Mp=Bn(p_),m_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=v_[t])?!!n[t]:!1}function Eu(){return x_}var __=g({},Yr,{key:function(t){if(t.key){var n=m_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S_=Bn(__),y_=g({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=Bn(y_),M_=g({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),b_=Bn(M_),E_=g({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),T_=Bn(E_),A_=g({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R_=Bn(A_),w_=g({},ls,{newState:0,oldState:0}),C_=Bn(w_),D_=[9,13,27,32],Tu=Ji&&"CompositionEvent"in window,Kr=null;Ji&&"documentMode"in document&&(Kr=document.documentMode);var N_=Ji&&"TextEvent"in window&&!Kr,Ep=Ji&&(!Tu||Kr&&8<Kr&&11>=Kr),Tp=" ",Ap=!1;function Rp(t,n){switch(t){case"keyup":return D_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function U_(t,n){switch(t){case"compositionend":return wp(n);case"keypress":return n.which!==32?null:(Ap=!0,Tp);case"textInput":return t=n.data,t===Tp&&Ap?null:t;default:return null}}function L_(t,n){if(ks)return t==="compositionend"||!Tu&&Rp(t,n)?(t=_p(),gl=Su=Da=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ep&&n.locale!=="ko"?null:n.data;default:return null}}var O_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!O_[t.type]:n==="textarea"}function Dp(t,n,a,o){Gs?Vs?Vs.push(o):Vs=[o]:Gs=o,n=rc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Qr=null,Jr=null;function P_(t){u0(t,0)}function yl(t){var n=Di(t);if(Nt(n))return t}function Np(t,n){if(t==="change")return n}var Up=!1;if(Ji){var Au;if(Ji){var Ru="oninput"in document;if(!Ru){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),Ru=typeof Lp.oninput=="function"}Au=Ru}else Au=!1;Up=Au&&(!document.documentMode||9<document.documentMode)}function Op(){Qr&&(Qr.detachEvent("onpropertychange",Pp),Jr=Qr=null)}function Pp(t){if(t.propertyName==="value"&&yl(Jr)){var n=[];Dp(n,Jr,t,vu(t)),xp(P_,n)}}function I_(t,n,a){t==="focusin"?(Op(),Qr=n,Jr=a,Qr.attachEvent("onpropertychange",Pp)):t==="focusout"&&Op()}function F_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(Jr)}function B_(t,n){if(t==="click")return yl(n)}function z_(t,n){if(t==="input"||t==="change")return yl(n)}function H_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:H_;function $r(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qt.call(n,u)||!Xn(t[u],n[u]))return!1}return!0}function Ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,n){var a=Ip(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ip(a)}}function Bp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Bp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=an(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=an(t.document)}return n}function wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var G_=Ji&&"documentMode"in document&&11>=document.documentMode,js=null,Cu=null,eo=null,Du=!1;function Hp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||js==null||js!==an(o)||(o=js,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&$r(eo,o)||(eo=o,o=rc(Cu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=js)))}function cs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xs={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Nu={},Gp={};Ji&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function us(t){if(Nu[t])return Nu[t];if(!Xs[t])return t;var n=Xs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Gp)return Nu[t]=n[a];return t}var Vp=us("animationend"),kp=us("animationiteration"),jp=us("animationstart"),V_=us("transitionrun"),k_=us("transitionstart"),j_=us("transitioncancel"),Xp=us("transitionend"),Wp=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function vi(t,n){Wp.set(t,n),Ki(n,[t])}var qp=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=qp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:lt(n)},qp.set(t,n),n)}return{value:t,source:n,stack:lt(n)}}var ni=[],Ws=0,Lu=0;function Ml(){for(var t=Ws,n=Lu=Ws=0;n<t;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var d=ni[n];if(ni[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}d!==0&&Yp(a,u,d)}}function bl(t,n,a,o){ni[Ws++]=t,ni[Ws++]=n,ni[Ws++]=a,ni[Ws++]=o,Lu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ou(t,n,a,o){return bl(t,n,a,o),El(t)}function qs(t,n){return bl(t,null,null,n),El(t)}function Yp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-we(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function El(t){if(50<Ao)throw Ao=0,Gf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ys={};function X_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,o){return new X_(t,n,a,o)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Zp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Tl(t,n,a,o,u,d){var E=0;if(o=t,typeof t=="function")Pu(t)&&(E=1);else if(typeof t=="string")E=qS(t,a,Ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=Wn(31,a,n,u),t.elementType=O,t.lanes=d,t;case T:return fs(a.children,u,d,n);case C:E=8,u|=24;break;case M:return t=Wn(12,a,n,u|2),t.elementType=M,t.lanes=d,t;case B:return t=Wn(13,a,n,u),t.elementType=B,t.lanes=d,t;case G:return t=Wn(19,a,n,u),t.elementType=G,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case N:E=10;break e;case D:E=9;break e;case L:E=11;break e;case k:E=14;break e;case A:E=16,o=null;break e}E=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Wn(E,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function fs(t,n,a,o){return t=Wn(7,t,o,n),t.lanes=a,t}function Iu(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Fu(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Zs=[],Ks=0,Al=null,Rl=0,ii=[],ai=0,ds=null,ea=1,ta="";function hs(t,n){Zs[Ks++]=Rl,Zs[Ks++]=Al,Al=t,Rl=n}function Kp(t,n,a){ii[ai++]=ea,ii[ai++]=ta,ii[ai++]=ds,ds=t;var o=ea;t=ta;var u=32-we(o)-1;o&=~(1<<u),a+=1;var d=32-we(n)+u;if(30<d){var E=u-u%5;d=(o&(1<<E)-1).toString(32),o>>=E,u-=E,ea=1<<32-we(n)+u|a<<u|o,ta=d+t}else ea=1<<d|a<<u|o,ta=t}function Bu(t){t.return!==null&&(hs(t,1),Kp(t,1,0))}function zu(t){for(;t===Al;)Al=Zs[--Ks],Zs[Ks]=null,Rl=Zs[--Ks],Zs[Ks]=null;for(;t===ds;)ds=ii[--ai],ii[ai]=null,ta=ii[--ai],ii[ai]=null,ea=ii[--ai],ii[ai]=null}var Un=null,$t=null,Ut=!1,ps=null,Li=!1,Hu=Error(s(519));function ms(t){var n=Error(s(418,""));throw io(ti(n,t)),Hu}function Qp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[hn]=t,n[_n]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)vt(wo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Vt(n);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),Pt(n,o.value,o.defaultValue,o.children),Vt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||p0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=oc),n=!0):n=!1,n||ms(t)}function Jp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Un=Un.return}}function to(t){if(t!==Un)return!1;if(!Ut)return Jp(t),Ut=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||id(t.type,t.memoizedProps)),a=!a),a&&$t&&ms(t),Jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){$t=_i(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}$t=null}}else n===27?(n=$t,Wa(t.type)?(t=od,od=null,$t=t):$t=n):$t=Un?_i(t.stateNode.nextSibling):null;return!0}function no(){$t=Un=null,Ut=!1}function $p(){var t=ps;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),ps=null),t}function io(t){ps===null?ps=[t]:ps.push(t)}var Gu=K(null),gs=null,na=null;function Na(t,n,a){Se(Gu,n._currentValue),n._currentValue=a}function ia(t){t._currentValue=Gu.current,pe(Gu)}function Vu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var E=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var z=0;z<n.length;z++)if(R.context===n[z]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Vu(d.return,a,t),o||(E=null);break e}d=R.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Vu(E,a,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function ao(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var R=u.type;Xn(u.pendingProps.value,E.value)||(t!==null?t.push(R):t=[R])}}else if(u===be.current){if(E=u.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}u=u.return}t!==null&&ku(n,t,a,o),n.flags|=262144}function wl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vs(t){gs=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return em(gs,t)}function Cl(t,n){return gs===null&&vs(t),em(t,n)}function em(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(s(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var W_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},q_=r.unstable_scheduleCallback,Y_=r.unstable_NormalPriority,pn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new W_,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&q_(Y_,function(){t.controller.abort()})}var ro=null,Xu=0,Qs=0,Js=null;function Z_(t,n){if(ro===null){var a=ro=[];Xu=0,Qs=Yf(),Js={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,n.then(tm,tm),n}function tm(){if(--Xu===0&&ro!==null){Js!==null&&(Js.status="fulfilled");var t=ro;ro=null,Qs=0,Js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function K_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var nm=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Z_(t,n),nm!==null&&nm(t,n)};var xs=K(null);function Wu(){var t=xs.current;return t!==null?t:Wt.pooledCache}function Dl(t,n){n===null?Se(xs,xs.current):Se(xs,n.pool)}function im(){var t=Wu();return t===null?null:{parent:pn._currentValue,pool:t}}var oo=Error(s(460)),am=Error(s(474)),Nl=Error(s(542)),qu={then:function(){}};function sm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ul(){}function rm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ul,Ul),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lm(t),t;default:if(typeof n.status=="string")n.then(Ul,Ul);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lm(t),t}throw lo=n,oo}}var lo=null;function om(){if(lo===null)throw Error(s(459));var t=lo;return lo=null,t}function lm(t){if(t===oo||t===Nl)throw Error(s(483))}var Ua=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Oa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),Yp(t,null,a),n}return bl(t,o,n,a),El(t)}function co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ve(t,a)}}function Ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Qu=!1;function uo(){if(Qu){var t=Js;if(t!==null)throw t}}function fo(t,n,a,o){Qu=!1;var u=t.updateQueue;Ua=!1;var d=u.firstBaseUpdate,E=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,ne=z.next;z.next=null,E===null?d=ne:E.next=ne,E=z;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,R=xe.lastBaseUpdate,R!==E&&(R===null?xe.firstBaseUpdate=ne:R.next=ne,xe.lastBaseUpdate=z))}if(d!==null){var Me=u.baseState;E=0,xe=ne=z=null,R=d;do{var re=R.lane&-536870913,ce=re!==R.lane;if(ce?(Et&re)===re:(o&re)===re){re!==0&&re===Qs&&(Qu=!0),xe!==null&&(xe=xe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var it=t,et=R;re=n;var Gt=a;switch(et.tag){case 1:if(it=et.payload,typeof it=="function"){Me=it.call(Gt,Me,re);break e}Me=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=et.payload,re=typeof it=="function"?it.call(Gt,Me,re):it,re==null)break e;Me=g({},Me,re);break e;case 2:Ua=!0}}re=R.callback,re!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[re]:ce.push(re))}else ce={lane:re,tag:R.tag,payload:R.payload,callback:R.callback,next:null},xe===null?(ne=xe=ce,z=Me):xe=xe.next=ce,E|=re;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);xe===null&&(z=Me),u.baseState=z,u.firstBaseUpdate=ne,u.lastBaseUpdate=xe,d===null&&(u.shared.lanes=0),Va|=E,t.lanes=E,t.memoizedState=Me}}function cm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function um(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)cm(a[t],n)}var $s=K(null),Ll=K(0);function fm(t,n){t=ua,Se(Ll,t),Se($s,n),ua=t|n.baseLanes}function Ju(){Se(Ll,ua),Se($s,$s.current)}function $u(){ua=Ll.current,pe($s),pe(Ll)}var Pa=0,pt=null,zt=null,cn=null,Ol=!1,er=!1,_s=!1,Pl=0,ho=0,tr=null,Q_=0;function rn(){throw Error(s(321))}function ef(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function tf(t,n,a,o,u,d){return Pa=d,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Ym:Zm,_s=!1,d=a(o,u),_s=!1,er&&(d=hm(n,a,o,u)),dm(t),d}function dm(t){I.H=Gl;var n=zt!==null&&zt.next!==null;if(Pa=0,cn=zt=pt=null,Ol=!1,ho=0,tr=null,n)throw Error(s(300));t===null||Sn||(t=t.dependencies,t!==null&&wl(t)&&(Sn=!0))}function hm(t,n,a,o){pt=t;var u=0;do{if(er&&(tr=null),ho=0,er=!1,25<=u)throw Error(s(301));if(u+=1,cn=zt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=aS,d=n(a,o)}while(er);return d}function J_(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?po(n):n,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(pt.flags|=1024),n}function nf(){var t=Pl!==0;return Pl=0,t}function af(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function sf(t){if(Ol){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ol=!1}Pa=0,cn=zt=pt=null,er=!1,ho=Pl=0,tr=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?pt.memoizedState=cn=t:cn=cn.next=t,cn}function un(){if(zt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var n=cn===null?pt.memoizedState:cn.next;if(n!==null)cn=n,zt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},cn===null?pt.memoizedState=cn=t:cn=cn.next=t}return cn}function rf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(t){var n=ho;return ho+=1,tr===null&&(tr=[]),t=rm(tr,t,n),n=pt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Ym:Zm),t}function Il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return po(t);if(t.$$typeof===N)return wn(t)}throw Error(s(438,String(t)))}function of(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=rf(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=he;return n.index++,a}function aa(t,n){return typeof n=="function"?n(t):n}function Fl(t){var n=un();return lf(n,zt,t)}function lf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var E=u.next;u.next=d.next,d.next=E}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=E=null,z=null,ne=n,xe=!1;do{var Me=ne.lane&-536870913;if(Me!==ne.lane?(Et&Me)===Me:(Pa&Me)===Me){var re=ne.revertLane;if(re===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Me===Qs&&(xe=!0);else if((Pa&re)===re){ne=ne.next,re===Qs&&(xe=!0);continue}else Me={lane:0,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(R=z=Me,E=d):z=z.next=Me,pt.lanes|=re,Va|=re;Me=ne.action,_s&&a(d,Me),d=ne.hasEagerState?ne.eagerState:a(d,Me)}else re={lane:Me,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(R=z=re,E=d):z=z.next=re,pt.lanes|=Me,Va|=Me;ne=ne.next}while(ne!==null&&ne!==n);if(z===null?E=d:z.next=R,!Xn(d,t.memoizedState)&&(Sn=!0,xe&&(a=Js,a!==null)))throw a;t.memoizedState=d,t.baseState=E,t.baseQueue=z,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function cf(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do d=t(d,E.action),E=E.next;while(E!==u);Xn(d,n.memoizedState)||(Sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function pm(t,n,a){var o=pt,u=un(),d=Ut;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var E=!Xn((zt||u).memoizedState,a);E&&(u.memoizedState=a,Sn=!0),u=u.queue;var R=vm.bind(null,o,u,t);if(mo(2048,8,R,[t]),u.getSnapshot!==n||E||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,nr(9,Bl(),gm.bind(null,o,u,a,n),null),Wt===null)throw Error(s(349));d||(Pa&124)!==0||mm(o,n,a)}return a}function mm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=rf(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function gm(t,n,a,o){n.value=a,n.getSnapshot=o,xm(n)&&_m(t)}function vm(t,n,a){return a(function(){xm(n)&&_m(t)})}function xm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function _m(t){var n=qs(t,2);n!==null&&Qn(n,t,2)}function uf(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),_s){ae(!0);try{a()}finally{ae(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},n}function Sm(t,n,a,o){return t.baseState=a,lf(t,zt,typeof o=="function"?o:aa)}function $_(t,n,a,o,u){if(Hl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,ym(n,d)):(d.next=a.next,n.pending=a.next=d)}}function ym(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=I.T,E={};I.T=E;try{var R=a(u,o),z=I.S;z!==null&&z(E,R),Mm(t,n,R)}catch(ne){ff(t,n,ne)}finally{I.T=d}}else try{d=a(u,o),Mm(t,n,d)}catch(ne){ff(t,n,ne)}}function Mm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bm(t,n,o)},function(o){return ff(t,n,o)}):bm(t,n,a)}function bm(t,n,a){n.status="fulfilled",n.value=a,Em(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,ym(t,a)))}function ff(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Em(n),n=n.next;while(n!==o)}t.action=null}function Em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Tm(t,n){return n}function Am(t,n){if(Ut){var a=Wt.formState;if(a!==null){e:{var o=pt;if(Ut){if($t){t:{for(var u=$t,d=Li;u.nodeType!==8;){if(!d){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$t=_i(u.nextSibling),o=u.data==="F!";break e}}ms(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tm,lastRenderedState:n},a.queue=o,a=Xm.bind(null,pt,o),o.dispatch=a,o=uf(!1),d=gf.bind(null,pt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=$_.bind(null,pt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Rm(t){var n=un();return wm(n,zt,t)}function wm(t,n,a){if(n=lf(t,n,Tm)[0],t=Fl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(E){throw E===oo?Nl:E}else o=n;n=un();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,nr(9,Bl(),eS.bind(null,u,a),null)),[o,d,t]}function eS(t,n){t.action=n}function Cm(t){var n=un(),a=zt;if(a!==null)return wm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function nr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=rf(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Bl(){return{destroy:void 0,resource:void 0}}function Dm(){return un().memoizedState}function zl(t,n,a,o){var u=zn();o=o===void 0?null:o,pt.flags|=t,u.memoizedState=nr(1|n,Bl(),a,o)}function mo(t,n,a,o){var u=un();o=o===void 0?null:o;var d=u.memoizedState.inst;zt!==null&&o!==null&&ef(o,zt.memoizedState.deps)?u.memoizedState=nr(n,d,a,o):(pt.flags|=t,u.memoizedState=nr(1|n,d,a,o))}function Nm(t,n){zl(8390656,8,t,n)}function Um(t,n){mo(2048,8,t,n)}function Lm(t,n){return mo(4,2,t,n)}function Om(t,n){return mo(4,4,t,n)}function Pm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Im(t,n,a){a=a!=null?a.concat([t]):null,mo(4,4,Pm.bind(null,n,t),a)}function df(){}function Fm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Bm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=t(),_s){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[o,n],o}function hf(t,n,a){return a===void 0||(Pa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Gg(),pt.lanes|=t,Va|=t,a)}function zm(t,n,a,o){return Xn(a,n)?a:$s.current!==null?(t=hf(t,a,o),Xn(t,n)||(Sn=!0),t):(Pa&42)===0?(Sn=!0,t.memoizedState=a):(t=Gg(),pt.lanes|=t,Va|=t,n)}function Hm(t,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var E=I.T,R={};I.T=R,gf(t,!1,n,a);try{var z=u(),ne=I.S;if(ne!==null&&ne(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var xe=K_(z,o);go(t,n,xe,Kn(t))}else go(t,n,o,Kn(t))}catch(Me){go(t,n,{then:function(){},status:"rejected",reason:Me},Kn())}finally{H.p=d,I.T=E}}function tS(){}function pf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Gm(t).queue;Hm(t,u,n,de,a===null?tS:function(){return Vm(t),a(o)})}function Gm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:de},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Vm(t){var n=Gm(t).next.queue;go(t,n,{},Kn())}function mf(){return wn(Oo)}function km(){return un().memoizedState}function jm(){return un().memoizedState}function nS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=La(a);var o=Oa(n,t,a);o!==null&&(Qn(o,n,a),co(o,n,a)),n={cache:ju()},t.payload=n;return}n=n.return}}function iS(t,n,a){var o=Kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(t)?Wm(n,a):(a=Ou(t,n,a,o),a!==null&&(Qn(a,t,o),qm(a,n,o)))}function Xm(t,n,a){var o=Kn();go(t,n,a,o)}function go(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(t))Wm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var E=n.lastRenderedState,R=d(E,a);if(u.hasEagerState=!0,u.eagerState=R,Xn(R,E))return bl(t,n,u,0),Wt===null&&Ml(),!1}catch{}finally{}if(a=Ou(t,n,u,o),a!==null)return Qn(a,t,o),qm(a,n,o),!0}return!1}function gf(t,n,a,o){if(o={lane:2,revertLane:Yf(),action:o,hasEagerState:!1,eagerState:null,next:null},Hl(t)){if(n)throw Error(s(479))}else n=Ou(t,a,o,2),n!==null&&Qn(n,t,2)}function Hl(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function Wm(t,n){er=Ol=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function qm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ve(t,a)}}var Gl={readContext:wn,use:Il,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},Ym={readContext:wn,use:Il,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Nm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,zl(4194308,4,Pm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return zl(4194308,4,t,n)},useInsertionEffect:function(t,n){zl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(_s){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(_s){ae(!0);try{a(n)}finally{ae(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=iS.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=uf(t);var n=t.queue,a=Xm.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:df,useDeferredValue:function(t,n){var a=zn();return hf(a,t,n)},useTransition:function(){var t=uf(!1);return t=Hm.bind(null,pt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=zn();if(Ut){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(Et&124)!==0||mm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Nm(vm.bind(null,o,d,t),[t]),o.flags|=2048,nr(9,Bl(),gm.bind(null,o,d,a,n),null),a},useId:function(){var t=zn(),n=Wt.identifierPrefix;if(Ut){var a=ta,o=ea;a=(o&~(1<<32-we(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Q_++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:mf,useFormState:Am,useActionState:Am,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:of,useCacheRefresh:function(){return zn().memoizedState=nS.bind(null,pt)}},Zm={readContext:wn,use:Il,useCallback:Fm,useContext:wn,useEffect:Um,useImperativeHandle:Im,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:Bm,useReducer:Fl,useRef:Dm,useState:function(){return Fl(aa)},useDebugValue:df,useDeferredValue:function(t,n){var a=un();return zm(a,zt.memoizedState,t,n)},useTransition:function(){var t=Fl(aa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:mf,useFormState:Rm,useActionState:Rm,useOptimistic:function(t,n){var a=un();return Sm(a,zt,t,n)},useMemoCache:of,useCacheRefresh:jm},aS={readContext:wn,use:Il,useCallback:Fm,useContext:wn,useEffect:Um,useImperativeHandle:Im,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:Bm,useReducer:cf,useRef:Dm,useState:function(){return cf(aa)},useDebugValue:df,useDeferredValue:function(t,n){var a=un();return zt===null?hf(a,t,n):zm(a,zt.memoizedState,t,n)},useTransition:function(){var t=cf(aa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:mf,useFormState:Cm,useActionState:Cm,useOptimistic:function(t,n){var a=un();return zt!==null?Sm(a,zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:jm},ir=null,vo=0;function Vl(t){var n=vo;return vo+=1,ir===null&&(ir=[]),rm(ir,t,n)}function xo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function kl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Km(t){var n=t._init;return n(t._payload)}function Qm(t){function n(Y,X){if(t){var $=Y.deletions;$===null?(Y.deletions=[X],Y.flags|=16):$.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function o(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=$i(Y,X),Y.index=0,Y.sibling=null,Y}function d(Y,X,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<X?(Y.flags|=67108866,X):$):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,X,$,_e){return X===null||X.tag!==6?(X=Iu($,Y.mode,_e),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function z(Y,X,$,_e){var je=$.type;return je===T?xe(Y,X,$.props.children,_e,$.key):X!==null&&(X.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===A&&Km(je)===X.type)?(X=u(X,$.props),xo(X,$),X.return=Y,X):(X=Tl($.type,$.key,$.props,null,Y.mode,_e),xo(X,$),X.return=Y,X)}function ne(Y,X,$,_e){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Fu($,Y.mode,_e),X.return=Y,X):(X=u(X,$.children||[]),X.return=Y,X)}function xe(Y,X,$,_e,je){return X===null||X.tag!==7?(X=fs($,Y.mode,_e,je),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function Me(Y,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Iu(""+X,Y.mode,$),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return $=Tl(X.type,X.key,X.props,null,Y.mode,$),xo($,X),$.return=Y,$;case b:return X=Fu(X,Y.mode,$),X.return=Y,X;case A:var _e=X._init;return X=_e(X._payload),Me(Y,X,$)}if(Q(X)||te(X))return X=fs(X,Y.mode,$,null),X.return=Y,X;if(typeof X.then=="function")return Me(Y,Vl(X),$);if(X.$$typeof===N)return Me(Y,Cl(Y,X),$);kl(Y,X)}return null}function re(Y,X,$,_e){var je=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return je!==null?null:R(Y,X,""+$,_e);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===je?z(Y,X,$,_e):null;case b:return $.key===je?ne(Y,X,$,_e):null;case A:return je=$._init,$=je($._payload),re(Y,X,$,_e)}if(Q($)||te($))return je!==null?null:xe(Y,X,$,_e,null);if(typeof $.then=="function")return re(Y,X,Vl($),_e);if($.$$typeof===N)return re(Y,X,Cl(Y,$),_e);kl(Y,$)}return null}function ce(Y,X,$,_e,je){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Y=Y.get($)||null,R(X,Y,""+_e,je);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case x:return Y=Y.get(_e.key===null?$:_e.key)||null,z(X,Y,_e,je);case b:return Y=Y.get(_e.key===null?$:_e.key)||null,ne(X,Y,_e,je);case A:var mt=_e._init;return _e=mt(_e._payload),ce(Y,X,$,_e,je)}if(Q(_e)||te(_e))return Y=Y.get($)||null,xe(X,Y,_e,je,null);if(typeof _e.then=="function")return ce(Y,X,$,Vl(_e),je);if(_e.$$typeof===N)return ce(Y,X,$,Cl(X,_e),je);kl(X,_e)}return null}function it(Y,X,$,_e){for(var je=null,mt=null,Ze=X,tt=X=0,Mn=null;Ze!==null&&tt<$.length;tt++){Ze.index>tt?(Mn=Ze,Ze=null):Mn=Ze.sibling;var Rt=re(Y,Ze,$[tt],_e);if(Rt===null){Ze===null&&(Ze=Mn);break}t&&Ze&&Rt.alternate===null&&n(Y,Ze),X=d(Rt,X,tt),mt===null?je=Rt:mt.sibling=Rt,mt=Rt,Ze=Mn}if(tt===$.length)return a(Y,Ze),Ut&&hs(Y,tt),je;if(Ze===null){for(;tt<$.length;tt++)Ze=Me(Y,$[tt],_e),Ze!==null&&(X=d(Ze,X,tt),mt===null?je=Ze:mt.sibling=Ze,mt=Ze);return Ut&&hs(Y,tt),je}for(Ze=o(Ze);tt<$.length;tt++)Mn=ce(Ze,Y,tt,$[tt],_e),Mn!==null&&(t&&Mn.alternate!==null&&Ze.delete(Mn.key===null?tt:Mn.key),X=d(Mn,X,tt),mt===null?je=Mn:mt.sibling=Mn,mt=Mn);return t&&Ze.forEach(function(Qa){return n(Y,Qa)}),Ut&&hs(Y,tt),je}function et(Y,X,$,_e){if($==null)throw Error(s(151));for(var je=null,mt=null,Ze=X,tt=X=0,Mn=null,Rt=$.next();Ze!==null&&!Rt.done;tt++,Rt=$.next()){Ze.index>tt?(Mn=Ze,Ze=null):Mn=Ze.sibling;var Qa=re(Y,Ze,Rt.value,_e);if(Qa===null){Ze===null&&(Ze=Mn);break}t&&Ze&&Qa.alternate===null&&n(Y,Ze),X=d(Qa,X,tt),mt===null?je=Qa:mt.sibling=Qa,mt=Qa,Ze=Mn}if(Rt.done)return a(Y,Ze),Ut&&hs(Y,tt),je;if(Ze===null){for(;!Rt.done;tt++,Rt=$.next())Rt=Me(Y,Rt.value,_e),Rt!==null&&(X=d(Rt,X,tt),mt===null?je=Rt:mt.sibling=Rt,mt=Rt);return Ut&&hs(Y,tt),je}for(Ze=o(Ze);!Rt.done;tt++,Rt=$.next())Rt=ce(Ze,Y,tt,Rt.value,_e),Rt!==null&&(t&&Rt.alternate!==null&&Ze.delete(Rt.key===null?tt:Rt.key),X=d(Rt,X,tt),mt===null?je=Rt:mt.sibling=Rt,mt=Rt);return t&&Ze.forEach(function(sy){return n(Y,sy)}),Ut&&hs(Y,tt),je}function Gt(Y,X,$,_e){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:e:{for(var je=$.key;X!==null;){if(X.key===je){if(je=$.type,je===T){if(X.tag===7){a(Y,X.sibling),_e=u(X,$.props.children),_e.return=Y,Y=_e;break e}}else if(X.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===A&&Km(je)===X.type){a(Y,X.sibling),_e=u(X,$.props),xo(_e,$),_e.return=Y,Y=_e;break e}a(Y,X);break}else n(Y,X);X=X.sibling}$.type===T?(_e=fs($.props.children,Y.mode,_e,$.key),_e.return=Y,Y=_e):(_e=Tl($.type,$.key,$.props,null,Y.mode,_e),xo(_e,$),_e.return=Y,Y=_e)}return E(Y);case b:e:{for(je=$.key;X!==null;){if(X.key===je)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Y,X.sibling),_e=u(X,$.children||[]),_e.return=Y,Y=_e;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}_e=Fu($,Y.mode,_e),_e.return=Y,Y=_e}return E(Y);case A:return je=$._init,$=je($._payload),Gt(Y,X,$,_e)}if(Q($))return it(Y,X,$,_e);if(te($)){if(je=te($),typeof je!="function")throw Error(s(150));return $=je.call($),et(Y,X,$,_e)}if(typeof $.then=="function")return Gt(Y,X,Vl($),_e);if($.$$typeof===N)return Gt(Y,X,Cl(Y,$),_e);kl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Y,X.sibling),_e=u(X,$),_e.return=Y,Y=_e):(a(Y,X),_e=Iu($,Y.mode,_e),_e.return=Y,Y=_e),E(Y)):a(Y,X)}return function(Y,X,$,_e){try{vo=0;var je=Gt(Y,X,$,_e);return ir=null,je}catch(Ze){if(Ze===oo||Ze===Nl)throw Ze;var mt=Wn(29,Ze,null,Y.mode);return mt.lanes=_e,mt.return=Y,mt}finally{}}}var ar=Qm(!0),Jm=Qm(!1),si=K(null),Oi=null;function Ia(t){var n=t.alternate;Se(mn,mn.current&1),Se(si,t),Oi===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(Oi=t)}function $m(t){if(t.tag===22){if(Se(mn,mn.current),Se(si,t),Oi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Oi=t)}}else Fa()}function Fa(){Se(mn,mn.current),Se(si,si.current)}function sa(t){pe(si),Oi===t&&(Oi=null),pe(mn)}var mn=K(0);function jl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||rd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function vf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=La(o);u.payload=n,a!=null&&(u.callback=a),n=Oa(t,u,o),n!==null&&(Qn(n,t,o),co(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=La(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Oa(t,u,o),n!==null&&(Qn(n,t,o),co(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),o=La(a);o.tag=2,n!=null&&(o.callback=n),n=Oa(t,o,a),n!==null&&(Qn(n,t,a),co(n,t,a))}};function eg(t,n,a,o,u,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,E):n.prototype&&n.prototype.isPureReactComponent?!$r(a,o)||!$r(u,d):!0}function tg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function Ss(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ng(t){Xl(t)}function ig(t){console.error(t)}function ag(t){Xl(t)}function Wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function sg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(t,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(t,n)},a}function rg(t){return t=La(t),t.tag=3,t}function og(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){sg(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){sg(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function sS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ao(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Oi===null?kf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===qu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xf(t,o,u)),!1;case 22:return a.flags|=65536,o===qu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xf(t,o,u)),!1}throw Error(s(435,a.tag))}return Xf(t,o,u),kf(),!1}if(Ut)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(t=Error(s(422),{cause:o}),io(ti(t,a)))):(o!==Hu&&(n=Error(s(423),{cause:o}),io(ti(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ti(o,a),u=_f(t.stateNode,o,u),Ku(t,u),en!==4&&(en=2)),!1;var d=Error(s(520),{cause:o});if(d=ti(d,a),To===null?To=[d]:To.push(d),en!==4&&(en=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=_f(a.stateNode,o,t),Ku(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ka===null||!ka.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=rg(u),og(u,t,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var lg=Error(s(461)),Sn=!1;function En(t,n,a,o){n.child=t===null?Jm(n,null,a,o):ar(n,t.child,a,o)}function cg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var E={};for(var R in o)R!=="ref"&&(E[R]=o[R])}else E=o;return vs(n),o=tf(t,n,a,E,d,u),R=nf(),t!==null&&!Sn?(af(t,n,u),ra(t,n,u)):(Ut&&R&&Bu(n),n.flags|=1,En(t,n,o,u),n.child)}function ug(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Pu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,fg(t,n,d,o,u)):(t=Tl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Rf(t,u)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:$r,a(E,o)&&t.ref===n.ref)return ra(t,n,u)}return n.flags|=1,t=$i(d,o),t.ref=n.ref,t.return=n,n.child=t}function fg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if($r(d,o)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=o=d,Rf(t,u))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,ra(t,n,u)}return Sf(t,n,a,o,u)}function dg(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return hg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(n,d!==null?d.cachePool:null),d!==null?fm(n,d):Ju(),$m(n);else return n.lanes=n.childLanes=536870912,hg(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Dl(n,d.cachePool),fm(n,d),Fa(),n.memoizedState=null):(t!==null&&Dl(n,null),Ju(),Fa());return En(t,n,u,a),n.child}function hg(t,n,a,o){var u=Wu();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Dl(n,null),Ju(),$m(n),t!==null&&ao(t,n,o,!0),null}function ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Sf(t,n,a,o,u){return vs(n),a=tf(t,n,a,o,void 0,u),o=nf(),t!==null&&!Sn?(af(t,n,u),ra(t,n,u)):(Ut&&o&&Bu(n),n.flags|=1,En(t,n,a,u),n.child)}function pg(t,n,a,o,u,d){return vs(n),n.updateQueue=null,a=hm(n,o,a,u),dm(t),o=nf(),t!==null&&!Sn?(af(t,n,d),ra(t,n,d)):(Ut&&o&&Bu(n),n.flags|=1,En(t,n,a,d),n.child)}function mg(t,n,a,o,u){if(vs(n),n.stateNode===null){var d=Ys,E=a.contextType;typeof E=="object"&&E!==null&&(d=wn(E)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Yu(n),E=a.contextType,d.context=typeof E=="object"&&E!==null?wn(E):Ys,d.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(vf(n,a,E,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&xf.enqueueReplaceState(d,d.state,null),fo(n,o,d,u),uo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,z=Ss(a,R);d.props=z;var ne=d.context,xe=a.contextType;E=Ys,typeof xe=="object"&&xe!==null&&(E=wn(xe));var Me=a.getDerivedStateFromProps;xe=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,xe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ne!==E)&&tg(n,d,o,E),Ua=!1;var re=n.memoizedState;d.state=re,fo(n,o,d,u),uo(),ne=n.memoizedState,R||re!==ne||Ua?(typeof Me=="function"&&(vf(n,a,Me,o),ne=n.memoizedState),(z=Ua||eg(n,a,z,o,re,ne,E))?(xe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=E,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Zu(t,n),E=n.memoizedProps,xe=Ss(a,E),d.props=xe,Me=n.pendingProps,re=d.context,ne=a.contextType,z=Ys,typeof ne=="object"&&ne!==null&&(z=wn(ne)),R=a.getDerivedStateFromProps,(ne=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==Me||re!==z)&&tg(n,d,o,z),Ua=!1,re=n.memoizedState,d.state=re,fo(n,o,d,u),uo();var ce=n.memoizedState;E!==Me||re!==ce||Ua||t!==null&&t.dependencies!==null&&wl(t.dependencies)?(typeof R=="function"&&(vf(n,a,R,o),ce=n.memoizedState),(xe=Ua||eg(n,a,xe,o,re,ce,z)||t!==null&&t.dependencies!==null&&wl(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=z,o=xe):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,ql(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=ar(n,t.child,null,u),n.child=ar(n,null,a,u)):En(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ra(t,n,u),t}function gg(t,n,a,o){return no(),n.flags|=256,En(t,n,a,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(t){return{baseLanes:t,cachePool:im()}}function bf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function vg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ut){if(u?Ia(n):Fa(),Ut){var R=$t,z;if(z=R){e:{for(z=R,R=Li;z.nodeType!==8;){if(!R){R=null;break e}if(z=_i(z.nextSibling),z===null){R=null;break e}}R=z}R!==null?(n.memoizedState={dehydrated:R,treeContext:ds!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},z=Wn(18,null,null,0),z.stateNode=R,z.return=n,n.child=z,Un=n,$t=null,z=!0):z=!1}z||ms(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return rd(R)?n.lanes=32:n.lanes=536870912,null;sa(n)}return R=o.children,o=o.fallback,u?(Fa(),u=n.mode,R=Yl({mode:"hidden",children:R},u),o=fs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=Mf(a),u.childLanes=bf(t,E,a),n.memoizedState=yf,o):(Ia(n),Ef(n,R))}if(z=t.memoizedState,z!==null&&(R=z.dehydrated,R!==null)){if(d)n.flags&256?(Ia(n),n.flags&=-257,n=Tf(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),u=o.fallback,R=n.mode,o=Yl({mode:"visible",children:o.children},R),u=fs(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ar(n,t.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=bf(t,E,a),n.memoizedState=yf,n=u);else if(Ia(n),rd(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var ne=E.dgst;E=ne,o=Error(s(419)),o.stack="",o.digest=E,io({value:o,source:null,stack:null}),n=Tf(t,n,a)}else if(Sn||ao(t,n,a,!1),E=(a&t.childLanes)!==0,Sn||E){if(E=Wt,E!==null&&(o=a&-a,o=(o&42)!==0?1:nt(o),o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,qs(t,o),Qn(E,t,o),lg;R.data==="$?"||kf(),n=Tf(t,n,a)}else R.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,$t=_i(R.nextSibling),Un=n,Ut=!0,ps=null,Li=!1,t!==null&&(ii[ai++]=ea,ii[ai++]=ta,ii[ai++]=ds,ea=t.id,ta=t.overflow,ds=n),n=Ef(n,o.children),n.flags|=4096);return n}return u?(Fa(),u=o.fallback,R=n.mode,z=t.child,ne=z.sibling,o=$i(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,ne!==null?u=$i(ne,u):(u=fs(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=t.child.memoizedState,R===null?R=Mf(a):(z=R.cachePool,z!==null?(ne=pn._currentValue,z=z.parent!==ne?{parent:ne,pool:ne}:z):z=im(),R={baseLanes:R.baseLanes|a,cachePool:z}),u.memoizedState=R,u.childLanes=bf(t,E,a),n.memoizedState=yf,o):(Ia(n),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function Ef(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Tf(t,n,a){return ar(n,t.child,null,a),t=Ef(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function xg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Vu(t.return,n,a)}function Af(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function _g(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(En(t,n,o.children,a),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,a,n);else if(t.tag===19)xg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Se(mn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&jl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&jl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Af(n,!0,a,null,d);break;case"together":Af(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ao(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=$i(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&wl(t)))}function rS(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Na(n,pn,t.memoizedState.cache),no();break;case 27:case 5:Ke(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?vg(t,n,a):(Ia(n),t=ra(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ao(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return _g(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,dg(t,n,a);case 24:Na(n,pn,t.memoizedState.cache)}return ra(t,n,a)}function Sg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Rf(t,a)&&(n.flags&128)===0)return Sn=!1,rS(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,Ut&&(n.flags&1048576)!==0&&Kp(n,Rl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Pu(o)?(t=Ss(o,t),n.tag=1,n=mg(null,n,o,t,a)):(n.tag=0,n=Sf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===L){n.tag=11,n=cg(null,n,o,t,a);break e}else if(u===k){n.tag=14,n=ug(null,n,o,t,a);break e}}throw n=ue(o)||o,Error(s(306,n,""))}}return n;case 0:return Sf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ss(o,n.pendingProps),mg(t,n,o,u,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Zu(t,n),fo(n,o,null,a);var E=n.memoizedState;if(o=E.cache,Na(n,pn,o),o!==d.cache&&ku(n,[pn],a,!0),uo(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=gg(t,n,o,a);break e}else if(o!==u){u=ti(Error(s(424)),n),io(u),n=gg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=_i(t.firstChild),Un=n,Ut=!0,ps=null,Li=!0,a=Jm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(no(),o===u){n=ra(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return ql(t,n),t===null?(a=E0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ut||(a=n.type,t=n.pendingProps,o=lc(ee.current).createElement(a),o[hn]=n,o[_n]=t,An(o,a,t),nn(o),n.stateNode=o):n.memoizedState=E0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Ut&&(o=n.stateNode=y0(n.type,n.pendingProps,ee.current),Un=n,Li=!0,u=$t,Wa(n.type)?(od=u,$t=_i(o.firstChild)):$t=u),En(t,n,n.pendingProps.children,a),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ut&&((u=o=$t)&&(o=OS(o,n.type,n.pendingProps,Li),o!==null?(n.stateNode=o,Un=n,$t=_i(o.firstChild),Li=!1,u=!0):u=!1),u||ms(n)),Ke(n),u=n.type,d=n.pendingProps,E=t!==null?t.memoizedProps:null,o=d.children,id(u,d)?o=null:E!==null&&id(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(t,n,J_,null,null,a),Oo._currentValue=u),ql(t,n),En(t,n,o,a),n.child;case 6:return t===null&&Ut&&((t=a=$t)&&(a=PS(a,n.pendingProps,Li),a!==null?(n.stateNode=a,Un=n,$t=null,t=!0):t=!1),t||ms(n)),null;case 13:return vg(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ar(n,null,o,a):En(t,n,o,a),n.child;case 11:return cg(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vs(n),u=wn(u),o=o(u),n.flags|=1,En(t,n,o,a),n.child;case 14:return ug(t,n,n.type,n.pendingProps,a);case 15:return fg(t,n,n.type,n.pendingProps,a);case 19:return _g(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Yl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=$i(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return dg(t,n,a);case 24:return vs(n),o=wn(pn),t===null?(u=Wu(),u===null&&(u=Wt,d=ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Yu(n),Na(n,pn,u)):((t.lanes&a)!==0&&(Zu(t,n),fo(n,null,null,a),uo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,pn,o)):(o=d.cache,Na(n,pn,o),o!==u.cache&&ku(n,[pn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(t){t.flags|=4}function yg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!C0(n)){if(n=si.current,n!==null&&((Et&4194048)===Et?Oi!==null:(Et&62914560)!==Et&&(Et&536870912)===0||n!==Oi))throw lo=qu,am;t.flags|=8192}}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?De():536870912,t.lanes|=n,lr|=n)}function _o(t,n){if(!Ut)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function oS(t,n,a){var o=n.pendingProps;switch(zu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(pn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(to(n)?oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,$p())),Qt(n),null;case 26:return a=n.memoizedState,t===null?(oa(n),a!==null?(Qt(n),yg(n,a)):(Qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(oa(n),Qt(n),yg(n,a)):(Qt(n),n.flags&=-16777217):(t.memoizedProps!==o&&oa(n),Qt(n),n.flags&=-16777217),null;case 27:$e(n),a=ee.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}t=Ue.current,to(n)?Qp(n):(t=y0(u,o,a),n.stateNode=t,oa(n))}return Qt(n),null;case 5:if($e(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(t=Ue.current,to(n))Qp(n);else{switch(u=lc(ee.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[hn]=n,t[_n]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(An(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&oa(n)}}return Qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ee.current,to(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[hn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||p0(t.nodeValue,a)),t||ms(n)}else t=lc(t).createTextNode(o),t[hn]=n,n.stateNode=t}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=to(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[hn]=n}else no(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=$p(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(sa(n),n):(sa(n),null)}if(sa(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),Qt(n),null;case 4:return Je(),t===null&&Jf(n.stateNode.containerInfo),Qt(n),null;case 10:return ia(n.type),Qt(n),null;case 19:if(pe(mn),u=n.memoizedState,u===null)return Qt(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)_o(u,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=jl(t),d!==null){for(n.flags|=128,_o(u,!1),t=d.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Zp(a,t),a=a.sibling;return Se(mn,mn.current&1|2),n.child}t=t.sibling}u.tail!==null&&yt()>Jl&&(n.flags|=128,o=!0,_o(u,!1),n.lanes=4194304)}else{if(!o)if(t=jl(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),_o(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ut)return Qt(n),null}else 2*yt()-u.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,o=!0,_o(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=yt(),n.sibling=null,t=mn.current,Se(mn,o?t&1|2:t&1),n):(Qt(n),null);case 22:case 23:return sa(n),$u(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&pe(xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(pn),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function lS(t,n){switch(zu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ia(pn),Je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 13:if(sa(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));no()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return pe(mn),null;case 4:return Je(),null;case 10:return ia(n.type),null;case 22:case 23:return sa(n),$u(),t!==null&&pe(xs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ia(pn),null;case 25:return null;default:return null}}function Mg(t,n){switch(zu(n),n.tag){case 3:ia(pn),Je();break;case 26:case 27:case 5:$e(n);break;case 4:Je();break;case 13:sa(n);break;case 19:pe(mn);break;case 10:ia(n.type);break;case 22:case 23:sa(n),$u(),t!==null&&pe(xs);break;case 24:ia(pn)}}function So(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,E=a.inst;o=d(),E.destroy=o}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function Ba(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var E=o.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,u=n;var z=a,ne=R;try{ne()}catch(xe){kt(u,z,xe)}}}o=o.next}while(o!==d)}}catch(xe){kt(n,n.return,xe)}}function bg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{um(n,a)}catch(o){kt(t,t.return,o)}}}function Eg(t,n,a){a.props=Ss(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function Tg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function wf(t,n,a){try{var o=t.stateNode;CS(o,t.type,a,n),o[_n]=n}catch(u){kt(t,t.return,u)}}function Ag(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oc));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Df(t,n,a),t=t.sibling;t!==null;)Df(t,n,a),t=t.sibling}function Kl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Kl(t,n,a),t=t.sibling;t!==null;)Kl(t,n,a),t=t.sibling}function Rg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[hn]=t,n[_n]=a}catch(d){kt(t,t.return,d)}}var la=!1,on=!1,Nf=!1,wg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function cS(t,n){if(t=t.containerInfo,td=pc,t=zp(t),wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,R=-1,z=-1,ne=0,xe=0,Me=t,re=null;t:for(;;){for(var ce;Me!==a||u!==0&&Me.nodeType!==3||(R=E+u),Me!==d||o!==0&&Me.nodeType!==3||(z=E+o),Me.nodeType===3&&(E+=Me.nodeValue.length),(ce=Me.firstChild)!==null;)re=Me,Me=ce;for(;;){if(Me===t)break t;if(re===a&&++ne===u&&(R=E),re===d&&++xe===o&&(z=E),(ce=Me.nextSibling)!==null)break;Me=re,re=Me.parentNode}Me=ce}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(nd={focusedElem:t,selectionRange:a},pc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var it=Ss(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(it,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){kt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)sd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function Cg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:za(t,a),o&4&&So(5,a);break;case 1:if(za(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){kt(a,a.return,E)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){kt(a,a.return,E)}}o&64&&bg(a),o&512&&yo(a,a.return);break;case 3:if(za(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{um(t,n)}catch(E){kt(a,a.return,E)}}break;case 27:n===null&&o&4&&Rg(a);case 26:case 5:za(t,a),n===null&&o&4&&Tg(a),o&512&&yo(a,a.return);break;case 12:za(t,a);break;case 13:za(t,a),o&4&&Ug(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=xS.bind(null,a),IS(t,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||on,u=la;var d=on;la=o,(on=n)&&!d?Ha(t,a,(a.subtreeFlags&8772)!==0):za(t,a),la=u,on=d}break;case 30:break;default:za(t,a)}}function Dg(t){var n=t.alternate;n!==null&&(t.alternate=null,Dg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Hs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Hn=!1;function ca(t,n,a){for(a=a.child;a!==null;)Ng(t,n,a),a=a.sibling}function Ng(t,n,a){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(Z,a)}catch{}switch(a.tag){case 26:on||Pi(a,n),ca(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Pi(a,n);var o=Zt,u=Hn;Wa(a.type)&&(Zt=a.stateNode,Hn=!1),ca(t,n,a),Do(a.stateNode),Zt=o,Hn=u;break;case 5:on||Pi(a,n);case 6:if(o=Zt,u=Hn,Zt=null,ca(t,n,a),Zt=o,Hn=u,Zt!==null)if(Hn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(d){kt(a,n,d)}else try{Zt.removeChild(a.stateNode)}catch(d){kt(a,n,d)}break;case 18:Zt!==null&&(Hn?(t=Zt,_0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Bo(t)):_0(Zt,a.stateNode));break;case 4:o=Zt,u=Hn,Zt=a.stateNode.containerInfo,Hn=!0,ca(t,n,a),Zt=o,Hn=u;break;case 0:case 11:case 14:case 15:on||Ba(2,a,n),on||Ba(4,a,n),ca(t,n,a);break;case 1:on||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Eg(a,n,o)),ca(t,n,a);break;case 21:ca(t,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,ca(t,n,a),on=o;break;default:ca(t,n,a)}}function Ug(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bo(t)}catch(a){kt(n,n.return,a)}}function uS(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new wg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new wg),n;default:throw Error(s(435,t.tag))}}function Uf(t,n){var a=uS(t);n.forEach(function(o){var u=_S.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,E=n,R=E;e:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){Zt=R.stateNode,Hn=!1;break e}break;case 5:Zt=R.stateNode,Hn=!1;break e;case 3:case 4:Zt=R.stateNode.containerInfo,Hn=!0;break e}R=R.return}if(Zt===null)throw Error(s(160));Ng(d,E,u),Zt=null,Hn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Lg(n,t),n=n.sibling}var xi=null;function Lg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),o&4&&(Ba(3,t,t.return),So(3,t),Ba(5,t,t.return));break;case 1:qn(n,t),Yn(t),o&512&&(on||a===null||Pi(a,a.return)),o&64&&la&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=xi;if(qn(n,t),Yn(t),o&512&&(on||a===null||Pi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[wa]||d[hn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),An(d,o,a),d[hn]=t,nn(d),o=d;break e;case"link":var E=R0("link","href",u).get(o+(a.href||""));if(E){for(var R=0;R<E.length;R++)if(d=E[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(R,1);break t}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;case"meta":if(E=R0("meta","content",u).get(o+(a.content||""))){for(R=0;R<E.length;R++)if(d=E[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(R,1);break t}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[hn]=t,nn(d),o=d}t.stateNode=o}else w0(u,t.type,t.stateNode);else t.stateNode=A0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?w0(u,t.type,t.stateNode):A0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&wf(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),o&512&&(on||a===null||Pi(a,a.return)),a!==null&&o&4&&wf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),o&512&&(on||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{Yt(u,"")}catch(ce){kt(t,t.return,ce)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,wf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Nf=!0);break;case 6:if(qn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ce){kt(t,t.return,ce)}}break;case 3:if(fc=null,u=xi,xi=cc(n.containerInfo),qn(n,t),xi=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Bo(n.containerInfo)}catch(ce){kt(t,t.return,ce)}Nf&&(Nf=!1,Og(t));break;case 4:o=xi,xi=cc(t.stateNode.containerInfo),qn(n,t),Yn(t),xi=o;break;case 12:qn(n,t),Yn(t);break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bf=yt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Uf(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,ne=la,xe=on;if(la=ne||u,on=xe||z,qn(n,t),on=xe,la=ne,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||la||on||ys(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,u)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=z.stateNode;var Me=z.memoizedProps.style,re=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(ce){kt(z,z.return,ce)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(ce){kt(z,z.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Uf(t,a))));break;case 19:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Uf(t,o)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Ag(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Cf(t);Kl(t,d,u);break;case 5:var E=a.stateNode;a.flags&32&&(Yt(E,""),a.flags&=-33);var R=Cf(t);Kl(t,R,E);break;case 3:case 4:var z=a.stateNode.containerInfo,ne=Cf(t);Df(t,ne,z);break;default:throw Error(s(161))}}catch(xe){kt(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Og(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Og(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function za(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cg(t,n.alternate,n),n=n.sibling}function ys(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),ys(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Eg(n,n.return,a),ys(n);break;case 27:Do(n.stateNode);case 26:case 5:Pi(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}t=t.sibling}}function Ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:Ha(u,d,a),So(4,d);break;case 1:if(Ha(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){kt(o,o.return,ne)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)cm(z[u],R)}catch(ne){kt(o,o.return,ne)}}a&&E&64&&bg(d),yo(d,d.return);break;case 27:Rg(d);case 26:case 5:Ha(u,d,a),a&&o===null&&E&4&&Tg(d),yo(d,d.return);break;case 12:Ha(u,d,a);break;case 13:Ha(u,d,a),a&&E&4&&Ug(u,d);break;case 22:d.memoizedState===null&&Ha(u,d,a),yo(d,d.return);break;case 30:break;default:Ha(u,d,a)}n=n.sibling}}function Lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function Of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function Ii(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pg(t,n,a,o),n=n.sibling}function Pg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ii(t,n,a,o),u&2048&&So(9,n);break;case 1:Ii(t,n,a,o);break;case 3:Ii(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){Ii(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,E=d.id,R=d.onPostCommit;typeof R=="function"&&R(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){kt(n,n.return,z)}}else Ii(t,n,a,o);break;case 13:Ii(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,E=n.alternate,n.memoizedState!==null?d._visibility&2?Ii(t,n,a,o):Mo(t,n):d._visibility&2?Ii(t,n,a,o):(d._visibility|=2,sr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Lf(E,n);break;case 24:Ii(t,n,a,o),u&2048&&Of(n.alternate,n);break;default:Ii(t,n,a,o)}}function sr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,E=n,R=a,z=o,ne=E.flags;switch(E.tag){case 0:case 11:case 15:sr(d,E,R,z,u),So(8,E);break;case 23:break;case 22:var xe=E.stateNode;E.memoizedState!==null?xe._visibility&2?sr(d,E,R,z,u):Mo(d,E):(xe._visibility|=2,sr(d,E,R,z,u)),u&&ne&2048&&Lf(E.alternate,E);break;case 24:sr(d,E,R,z,u),u&&ne&2048&&Of(E.alternate,E);break;default:sr(d,E,R,z,u)}n=n.sibling}}function Mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&Lf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&Of(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var bo=8192;function rr(t){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)Ig(t),t=t.sibling}function Ig(t){switch(t.tag){case 26:rr(t),t.flags&bo&&t.memoizedState!==null&&ZS(xi,t.memoizedState,t.memoizedProps);break;case 5:rr(t);break;case 3:case 4:var n=xi;xi=cc(t.stateNode.containerInfo),rr(t),xi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=bo,bo=16777216,rr(t),bo=n):rr(t));break;default:rr(t)}}function Fg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,zg(o,t)}Fg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bg(t),t=t.sibling}function Bg(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ql(t)):Eo(t);break;default:Eo(t)}}function Ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,zg(o,t)}Fg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}t=t.sibling}}function zg(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=t;yn!==null;){o=yn;var u=o.sibling,d=o.return;if(Dg(o),o===a){yn=null;break e}if(u!==null){u.return=d,yn=u;break e}yn=d}}}var fS={getCacheForType:function(t){var n=wn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},dS=typeof WeakMap=="function"?WeakMap:Map,It=0,Wt=null,gt=null,Et=0,Ft=0,Zn=null,Ga=!1,or=!1,Pf=!1,ua=0,en=0,Va=0,Ms=0,If=0,ri=0,lr=0,To=null,Gn=null,Ff=!1,Bf=0,Jl=1/0,$l=null,ka=null,Tn=0,ja=null,cr=null,ur=0,zf=0,Hf=null,Hg=null,Ao=0,Gf=null;function Kn(){if((It&2)!==0&&Et!==0)return Et&-Et;if(I.T!==null){var t=Qs;return t!==0?t:Yf()}return At()}function Gg(){ri===0&&(ri=(Et&536870912)===0||Ut?W():536870912);var t=si.current;return t!==null&&(t.flags|=32),ri}function Qn(t,n,a){(t===Wt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(fr(t,0),Xa(t,Et,ri,!1)),Ie(t,a),((It&2)===0||t!==Wt)&&(t===Wt&&((It&2)===0&&(Ms|=a),en===4&&Xa(t,Et,ri,!1)),Fi(t))}function Vg(t,n,a){if((It&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=o?mS(t,n):jf(t,n,!0),d=o;do{if(u===0){or&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!hS(a)){u=jf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var R=t;u=To;var z=R.current.memoizedState.isDehydrated;if(z&&(fr(R,E).flags|=256),E=jf(R,E,!1),E!==2){if(Pf&&!z){R.errorRecoveryDisabledLanes|=d,Ms|=d,u=4;break e}d=Gn,Gn=u,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}u=E}if(d=!1,u!==2)continue}}if(u===1){fr(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ri,!Ga);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Bf+300-yt(),10<u)){if(Xa(o,n,ri,!Ga),He(o,0,!0)!==0)break e;o.timeoutHandle=v0(kg.bind(null,o,a,Gn,$l,Ff,n,ri,Ms,lr,Ga,d,2,-0,0),u);break e}kg(o,a,Gn,$l,Ff,n,ri,Ms,lr,Ga,d,0,-0,0)}}break}while(!0);Fi(t)}function kg(t,n,a,o,u,d,E,R,z,ne,xe,Me,re,ce){if(t.timeoutHandle=-1,Me=n.subtreeFlags,(Me&8192||(Me&16785408)===16785408)&&(Lo={stylesheets:null,count:0,unsuspend:YS},Ig(n),Me=KS(),Me!==null)){t.cancelPendingCommit=Me(Kg.bind(null,t,n,d,a,o,u,E,R,z,xe,1,re,ce)),Xa(t,d,E,!ne);return}Kg(t,n,d,a,o,u,E,R,z)}function hS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Xn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~If,n&=~Ms,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-we(u),E=1<<d;o[d]=-1,u&=~E}a!==0&&ge(t,a,n)}function ec(){return(It&6)===0?(Ro(0),!1):!0}function Vf(){if(gt!==null){if(Ft===0)var t=gt.return;else t=gt,na=gs=null,sf(t),ir=null,vo=0,t=gt;for(;t!==null;)Mg(t.alternate,t),t=t.return;gt=null}}function fr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,NS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Vf(),Wt=t,gt=a=$i(t.current,null),Et=n,Ft=0,Zn=null,Ga=!1,or=Pe(t,n),Pf=!1,lr=ri=If=Ms=Va=en=0,Gn=To=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-we(o),d=1<<u;n|=t[u],o&=~d}return ua=n,Ml(),a}function jg(t,n){pt=null,I.H=Gl,n===oo||n===Nl?(n=om(),Ft=3):n===am?(n=om(),Ft=4):Ft=n===lg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,gt===null&&(en=1,Wl(t,ti(n,t.current)))}function Xg(){var t=I.H;return I.H=Gl,t===null?Gl:t}function Wg(){var t=I.A;return I.A=fS,t}function kf(){en=4,Ga||(Et&4194048)!==Et&&si.current!==null||(or=!0),(Va&134217727)===0&&(Ms&134217727)===0||Wt===null||Xa(Wt,Et,ri,!1)}function jf(t,n,a){var o=It;It|=2;var u=Xg(),d=Wg();(Wt!==t||Et!==n)&&($l=null,fr(t,n)),n=!1;var E=en;e:do try{if(Ft!==0&&gt!==null){var R=gt,z=Zn;switch(Ft){case 8:Vf(),E=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var ne=Ft;if(Ft=0,Zn=null,dr(t,R,z,ne),a&&or){E=0;break e}break;default:ne=Ft,Ft=0,Zn=null,dr(t,R,z,ne)}}pS(),E=en;break}catch(xe){jg(t,xe)}while(!0);return n&&t.shellSuspendCounter++,na=gs=null,It=o,I.H=u,I.A=d,gt===null&&(Wt=null,Et=0,Ml()),E}function pS(){for(;gt!==null;)qg(gt)}function mS(t,n){var a=It;It|=2;var o=Xg(),u=Wg();Wt!==t||Et!==n?($l=null,Jl=yt()+500,fr(t,n)):or=Pe(t,n);e:do try{if(Ft!==0&&gt!==null){n=gt;var d=Zn;t:switch(Ft){case 1:Ft=0,Zn=null,dr(t,n,d,1);break;case 2:case 9:if(sm(d)){Ft=0,Zn=null,Yg(n);break}n=function(){Ft!==2&&Ft!==9||Wt!==t||(Ft=7),Fi(t)},d.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:sm(d)?(Ft=0,Zn=null,Yg(n)):(Ft=0,Zn=null,dr(t,n,d,7));break;case 5:var E=null;switch(gt.tag){case 26:E=gt.memoizedState;case 5:case 27:var R=gt;if(!E||C0(E)){Ft=0,Zn=null;var z=R.sibling;if(z!==null)gt=z;else{var ne=R.return;ne!==null?(gt=ne,tc(ne)):gt=null}break t}}Ft=0,Zn=null,dr(t,n,d,5);break;case 6:Ft=0,Zn=null,dr(t,n,d,6);break;case 8:Vf(),en=6;break e;default:throw Error(s(462))}}gS();break}catch(xe){jg(t,xe)}while(!0);return na=gs=null,I.H=o,I.A=u,It=a,gt!==null?0:(Wt=null,Et=0,Ml(),en)}function gS(){for(;gt!==null&&!Ct();)qg(gt)}function qg(t){var n=Sg(t.alternate,t,ua);t.memoizedProps=t.pendingProps,n===null?tc(t):gt=n}function Yg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=pg(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=pg(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:sf(n);default:Mg(a,n),n=gt=Zp(n,ua),n=Sg(a,n,ua)}t.memoizedProps=t.pendingProps,n===null?tc(t):gt=n}function dr(t,n,a,o){na=gs=null,sf(n),ir=null,vo=0;var u=n.return;try{if(sS(t,u,n,a,Et)){en=1,Wl(t,ti(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;en=1,Wl(t,ti(a,t.current)),gt=null;return}n.flags&32768?(Ut||o===1?t=!0:or||(Et&536870912)!==0?t=!1:(Ga=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Zg(n,t)):tc(n)}function tc(t){var n=t;do{if((n.flags&32768)!==0){Zg(n,Ga);return}t=n.return;var a=oS(n.alternate,n,ua);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);en===0&&(en=5)}function Zg(t,n){do{var a=lS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);en=6,gt=null}function Kg(t,n,a,o,u,d,E,R,z){t.cancelPendingCommit=null;do nc();while(Tn!==0);if((It&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Lu,Te(t,a,d,E,R,z),t===Wt&&(gt=Wt=null,Et=0),cr=n,ja=t,ur=a,zf=d,Hf=u,Hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,SS(bt,function(){return t0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=H.p,H.p=2,E=It,It|=4;try{cS(t,n,a)}finally{It=E,H.p=u,I.T=o}}Tn=1,Qg(),Jg(),$g()}}function Qg(){if(Tn===1){Tn=0;var t=ja,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=It;It|=4;try{Lg(n,t);var d=nd,E=zp(t.containerInfo),R=d.focusedElem,z=d.selectionRange;if(E!==R&&R&&R.ownerDocument&&Bp(R.ownerDocument.documentElement,R)){if(z!==null&&wu(R)){var ne=z.start,xe=z.end;if(xe===void 0&&(xe=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(xe,R.value.length);else{var Me=R.ownerDocument||document,re=Me&&Me.defaultView||window;if(re.getSelection){var ce=re.getSelection(),it=R.textContent.length,et=Math.min(z.start,it),Gt=z.end===void 0?et:Math.min(z.end,it);!ce.extend&&et>Gt&&(E=Gt,Gt=et,et=E);var Y=Fp(R,et),X=Fp(R,Gt);if(Y&&X&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var $=Me.createRange();$.setStart(Y.node,Y.offset),ce.removeAllRanges(),et>Gt?(ce.addRange($),ce.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ce.addRange($))}}}}for(Me=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Me.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var _e=Me[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}pc=!!td,nd=td=null}finally{It=u,H.p=o,I.T=a}}t.current=n,Tn=2}}function Jg(){if(Tn===2){Tn=0;var t=ja,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=It;It|=4;try{Cg(t,n.alternate,n)}finally{It=u,H.p=o,I.T=a}}Tn=3}}function $g(){if(Tn===4||Tn===3){Tn=0,rt();var t=ja,n=cr,a=ur,o=Hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,cr=ja=null,e0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ka=null),Ot(a),n=n.stateNode,le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(Z,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=H.p,H.p=2,I.T=null;try{for(var d=t.onRecoverableError,E=0;E<o.length;E++){var R=o[E];d(R.value,{componentStack:R.stack})}}finally{I.T=n,H.p=u}}(ur&3)!==0&&nc(),Fi(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Gf?Ao++:(Ao=0,Gf=t):Ao=0,Ro(0)}}function e0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function nc(t){return Qg(),Jg(),$g(),t0()}function t0(){if(Tn!==5)return!1;var t=ja,n=zf;zf=0;var a=Ot(ur),o=I.T,u=H.p;try{H.p=32>a?32:a,I.T=null,a=Hf,Hf=null;var d=ja,E=ur;if(Tn=0,cr=ja=null,ur=0,(It&6)!==0)throw Error(s(331));var R=It;if(It|=4,Bg(d.current),Pg(d,d.current,E,a),It=R,Ro(0,!1),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(Z,d)}catch{}return!0}finally{H.p=u,I.T=o,e0(t,n)}}function n0(t,n,a){n=ti(a,n),n=_f(t.stateNode,n,2),t=Oa(t,n,2),t!==null&&(Ie(t,2),Fi(t))}function kt(t,n,a){if(t.tag===3)n0(t,t,a);else for(;n!==null;){if(n.tag===3){n0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){t=ti(a,t),a=rg(2),o=Oa(n,a,2),o!==null&&(og(a,o,n,t),Ie(o,2),Fi(o));break}}n=n.return}}function Xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new dS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),t=vS.bind(null,t,n,a),n.then(t,t))}function vS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(Et&a)===a&&(en===4||en===3&&(Et&62914560)===Et&&300>yt()-Bf?(It&2)===0&&fr(t,0):If|=a,lr===Et&&(lr=0)),Fi(t)}function i0(t,n){n===0&&(n=De()),t=qs(t,n),t!==null&&(Ie(t,n),Fi(t))}function xS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),i0(t,a)}function _S(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),i0(t,a)}function SS(t,n){return ht(t,n)}var ic=null,hr=null,Wf=!1,ac=!1,qf=!1,bs=0;function Fi(t){t!==hr&&t.next===null&&(hr===null?ic=hr=t:hr=hr.next=t),ac=!0,Wf||(Wf=!0,MS())}function Ro(t,n){if(!qf&&ac){qf=!0;do for(var a=!1,o=ic;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var E=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-we(42|t)+1)-1,d&=u&~(E&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,o0(o,d))}else d=Et,d=He(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Pe(o,d)||(a=!0,o0(o,d));o=o.next}while(a);qf=!1}}function yS(){a0()}function a0(){ac=Wf=!1;var t=0;bs!==0&&(DS()&&(t=bs),bs=0);for(var n=yt(),a=null,o=ic;o!==null;){var u=o.next,d=s0(o,n);d===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(hr=a)):(a=o,(t!==0||(d&3)!==0)&&(ac=!0)),o=u}Ro(t)}function s0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-we(d),R=1<<E,z=u[E];z===-1?((R&a)===0||(R&o)!==0)&&(u[E]=ct(R,n)):z<=n&&(t.expiredLanes|=R),d&=~R}if(n=Wt,a=Et,a=He(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&_t(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&_t(o),Ot(a)){case 2:case 8:a=Mt;break;case 32:a=bt;break;case 268435456:a=U;break;default:a=bt}return o=r0.bind(null,t),a=ht(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&_t(o),t.callbackPriority=2,t.callbackNode=null,2}function r0(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(nc()&&t.callbackNode!==a)return null;var o=Et;return o=He(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Vg(t,o,n),s0(t,yt()),t.callbackNode!=null&&t.callbackNode===a?r0.bind(null,t):null)}function o0(t,n){if(nc())return null;Vg(t,n,!0)}function MS(){US(function(){(It&6)!==0?ht(jt,yS):a0()})}function Yf(){return bs===0&&(bs=W()),bs}function l0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ml(""+t)}function c0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function bS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=l0((u[_n]||null).action),E=o.submitter;E&&(n=(n=E[_n]||null)?l0(n.formAction):E.getAttribute("formAction"),n!==null&&(d=n,E=null));var R=new _l("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(bs!==0){var z=E?c0(u,E):new FormData(u);pf(a,{pending:!0,data:z,method:u.method,action:d},null,z)}}else typeof d=="function"&&(R.preventDefault(),z=E?c0(u,E):new FormData(u),pf(a,{pending:!0,data:z,method:u.method,action:d},d,z))},currentTarget:u}]})}}for(var Zf=0;Zf<Uu.length;Zf++){var Kf=Uu[Zf],ES=Kf.toLowerCase(),TS=Kf[0].toUpperCase()+Kf.slice(1);vi(ES,"on"+TS)}vi(Vp,"onAnimationEnd"),vi(kp,"onAnimationIteration"),vi(jp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(V_,"onTransitionRun"),vi(k_,"onTransitionStart"),vi(j_,"onTransitionCancel"),vi(Xp,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function u0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var E=o.length-1;0<=E;E--){var R=o[E],z=R.instance,ne=R.currentTarget;if(R=R.listener,z!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ne;try{d(u)}catch(xe){Xl(xe)}u.currentTarget=null,d=z}else for(E=0;E<o.length;E++){if(R=o[E],z=R.instance,ne=R.currentTarget,R=R.listener,z!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=ne;try{d(u)}catch(xe){Xl(xe)}u.currentTarget=null,d=z}}}}function vt(t,n){var a=n[Bs];a===void 0&&(a=n[Bs]=new Set);var o=t+"__bubble";a.has(o)||(f0(n,t,2,!1),a.add(o))}function Qf(t,n,a){var o=0;n&&(o|=4),f0(a,t,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Jf(t){if(!t[sc]){t[sc]=!0,fl.forEach(function(a){a!=="selectionchange"&&(AS.has(a)||Qf(a,!1,t),Qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sc]||(n[sc]=!0,Qf("selectionchange",!1,n))}}function f0(t,n,a,o){switch(P0(n)){case 2:var u=$S;break;case 8:u=ey;break;default:u=dd}a=u.bind(null,n,a,t),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function $f(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var R=o.stateNode.containerInfo;if(R===u)break;if(E===4)for(E=o.return;E!==null;){var z=E.tag;if((z===3||z===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;R!==null;){if(E=mi(R),E===null)return;if(z=E.tag,z===5||z===6||z===26||z===27){o=d=E;continue e}R=R.parentNode}}o=o.return}xp(function(){var ne=d,xe=vu(a),Me=[];e:{var re=Wp.get(t);if(re!==void 0){var ce=_l,it=t;switch(t){case"keypress":if(vl(a)===0)break e;case"keydown":case"keyup":ce=S_;break;case"focusin":it="focus",ce=bu;break;case"focusout":it="blur",ce=bu;break;case"beforeblur":case"afterblur":ce=bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=l_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=b_;break;case Vp:case kp:case jp:ce=f_;break;case Xp:ce=T_;break;case"scroll":case"scrollend":ce=r_;break;case"wheel":ce=R_;break;case"copy":case"cut":case"paste":ce=h_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=bp;break;case"toggle":case"beforetoggle":ce=C_}var et=(n&4)!==0,Gt=!et&&(t==="scroll"||t==="scrollend"),Y=et?re!==null?re+"Capture":null:re;et=[];for(var X=ne,$;X!==null;){var _e=X;if($=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||$===null||Y===null||(_e=Wr(X,Y),_e!=null&&et.push(Co(X,_e,$))),Gt)break;X=X.return}0<et.length&&(re=new ce(re,it,null,a,xe),Me.push({event:re,listeners:et}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",re&&a!==gu&&(it=a.relatedTarget||a.fromElement)&&(mi(it)||it[Ra]))break e;if((ce||re)&&(re=xe.window===xe?xe:(re=xe.ownerDocument)?re.defaultView||re.parentWindow:window,ce?(it=a.relatedTarget||a.toElement,ce=ne,it=it?mi(it):null,it!==null&&(Gt=c(it),et=it.tag,it!==Gt||et!==5&&et!==27&&et!==6)&&(it=null)):(ce=null,it=ne),ce!==it)){if(et=yp,_e="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(et=bp,_e="onPointerLeave",Y="onPointerEnter",X="pointer"),Gt=ce==null?re:Di(ce),$=it==null?re:Di(it),re=new et(_e,X+"leave",ce,a,xe),re.target=Gt,re.relatedTarget=$,_e=null,mi(xe)===ne&&(et=new et(Y,X+"enter",it,a,xe),et.target=$,et.relatedTarget=Gt,_e=et),Gt=_e,ce&&it)t:{for(et=ce,Y=it,X=0,$=et;$;$=pr($))X++;for($=0,_e=Y;_e;_e=pr(_e))$++;for(;0<X-$;)et=pr(et),X--;for(;0<$-X;)Y=pr(Y),$--;for(;X--;){if(et===Y||Y!==null&&et===Y.alternate)break t;et=pr(et),Y=pr(Y)}et=null}else et=null;ce!==null&&d0(Me,re,ce,et,!1),it!==null&&Gt!==null&&d0(Me,Gt,it,et,!0)}}e:{if(re=ne?Di(ne):window,ce=re.nodeName&&re.nodeName.toLowerCase(),ce==="select"||ce==="input"&&re.type==="file")var je=Np;else if(Cp(re))if(Up)je=z_;else{je=F_;var mt=I_}else ce=re.nodeName,!ce||ce.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ne&&Ui(ne.elementType)&&(je=Np):je=B_;if(je&&(je=je(t,ne))){Dp(Me,je,a,xe);break e}mt&&mt(t,re,ne),t==="focusout"&&ne&&re.type==="number"&&ne.memoizedProps.value!=null&&In(re,"number",re.value)}switch(mt=ne?Di(ne):window,t){case"focusin":(Cp(mt)||mt.contentEditable==="true")&&(js=mt,Cu=ne,eo=null);break;case"focusout":eo=Cu=js=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Hp(Me,a,xe);break;case"selectionchange":if(G_)break;case"keydown":case"keyup":Hp(Me,a,xe)}var Ze;if(Tu)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ks?Rp(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(Ep&&a.locale!=="ko"&&(ks||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ks&&(Ze=_p()):(Da=xe,Su="value"in Da?Da.value:Da.textContent,ks=!0)),mt=rc(ne,tt),0<mt.length&&(tt=new Mp(tt,t,null,a,xe),Me.push({event:tt,listeners:mt}),Ze?tt.data=Ze:(Ze=wp(a),Ze!==null&&(tt.data=Ze)))),(Ze=N_?U_(t,a):L_(t,a))&&(tt=rc(ne,"onBeforeInput"),0<tt.length&&(mt=new Mp("onBeforeInput","beforeinput",null,a,xe),Me.push({event:mt,listeners:tt}),mt.data=Ze)),bS(Me,t,ne,a,xe)}u0(Me,n)})}function Co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function rc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Wr(t,a),u!=null&&o.unshift(Co(t,u,d)),u=Wr(t,n),u!=null&&o.push(Co(t,u,d))),t.tag===3)return o;t=t.return}return[]}function pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function d0(t,n,a,o,u){for(var d=n._reactName,E=[];a!==null&&a!==o;){var R=a,z=R.alternate,ne=R.stateNode;if(R=R.tag,z!==null&&z===o)break;R!==5&&R!==26&&R!==27||ne===null||(z=ne,u?(ne=Wr(a,d),ne!=null&&E.unshift(Co(a,ne,z))):u||(ne=Wr(a,d),ne!=null&&E.push(Co(a,ne,z)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var RS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function h0(t){return(typeof t=="string"?t:""+t).replace(RS,`
`).replace(wS,"")}function p0(t,n){return n=h0(n),h0(t)===n}function oc(){}function Ht(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Yt(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Yt(t,""+o);break;case"className":ie(t,"class",o);break;case"tabIndex":ie(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ie(t,a,o);break;case"style":gi(t,o,d);break;case"data":if(n!=="object"){ie(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ml(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ht(t,n,"name",u.name,u,null),Ht(t,n,"formEncType",u.formEncType,u,null),Ht(t,n,"formMethod",u.formMethod,u,null),Ht(t,n,"formTarget",u.formTarget,u,null)):(Ht(t,n,"encType",u.encType,u,null),Ht(t,n,"method",u.method,u,null),Ht(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ml(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=oc);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ml(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),fe(t,"popover",o);break;case"xlinkActuate":J(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":J(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":J(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":J(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":J(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":J(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":J(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":J(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":J(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pl.get(a)||a,fe(t,a,o))}}function ed(t,n,a,o,u,d){switch(a){case"style":gi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Yt(t,o):(typeof o=="number"||typeof o=="bigint")&&Yt(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=oc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[_n]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):fe(t,a,o)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,d,E,a,null)}}u&&Ht(t,n,"srcSet",a.srcSet,a,null),o&&Ht(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var R=d=E=u=null,z=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var xe=a[o];if(xe!=null)switch(o){case"name":u=xe;break;case"type":E=xe;break;case"checked":z=xe;break;case"defaultChecked":ne=xe;break;case"value":d=xe;break;case"defaultValue":R=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,n));break;default:Ht(t,n,o,xe,a,null)}}Pn(t,d,R,z,ne,E,u,!1),Vt(t);return;case"select":vt("invalid",t),o=E=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":E=R;break;case"multiple":o=R;default:Ht(t,n,u,R,a,null)}n=d,a=E,t.multiple=!!o,n!=null?Fn(t,!!o,n,!1):a!=null&&Fn(t,!!o,a,!0);return;case"textarea":vt("invalid",t),d=u=o=null;for(E in a)if(a.hasOwnProperty(E)&&(R=a[E],R!=null))switch(E){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ht(t,n,E,R,a,null)}Pt(t,o,u,d),Vt(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ht(t,n,z,o,a,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<wo.length;o++)vt(wo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,ne,o,a,null)}return;default:if(Ui(n)){for(xe in a)a.hasOwnProperty(xe)&&(o=a[xe],o!==void 0&&ed(t,n,xe,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ht(t,n,R,o,a,null))}function CS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,E=null,R=null,z=null,ne=null,xe=null;for(ce in a){var Me=a[ce];if(a.hasOwnProperty(ce)&&Me!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":z=Me;default:o.hasOwnProperty(ce)||Ht(t,n,ce,null,o,Me)}}for(var re in o){var ce=o[re];if(Me=a[re],o.hasOwnProperty(re)&&(ce!=null||Me!=null))switch(re){case"type":d=ce;break;case"name":u=ce;break;case"checked":ne=ce;break;case"defaultChecked":xe=ce;break;case"value":E=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==Me&&Ht(t,n,re,ce,o,Me)}}xt(t,E,R,z,ne,xe,d,u);return;case"select":ce=E=R=re=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":ce=z;default:o.hasOwnProperty(d)||Ht(t,n,d,null,o,z)}for(u in o)if(d=o[u],z=a[u],o.hasOwnProperty(u)&&(d!=null||z!=null))switch(u){case"value":re=d;break;case"defaultValue":R=d;break;case"multiple":E=d;default:d!==z&&Ht(t,n,u,d,o,z)}n=R,a=E,o=ce,re!=null?Fn(t,!!a,re,!1):!!o!=!!a&&(n!=null?Fn(t,!!a,n,!0):Fn(t,!!a,a?[]:"",!1));return;case"textarea":ce=re=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ht(t,n,R,null,o,u)}for(E in o)if(u=o[E],d=a[E],o.hasOwnProperty(E)&&(u!=null||d!=null))switch(E){case"value":re=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Ht(t,n,E,u,o,d)}Qi(t,re,ce);return;case"option":for(var it in a)if(re=a[it],a.hasOwnProperty(it)&&re!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:Ht(t,n,it,null,o,re)}for(z in o)if(re=o[z],ce=a[z],o.hasOwnProperty(z)&&re!==ce&&(re!=null||ce!=null))switch(z){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Ht(t,n,z,re,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)re=a[et],a.hasOwnProperty(et)&&re!=null&&!o.hasOwnProperty(et)&&Ht(t,n,et,null,o,re);for(ne in o)if(re=o[ne],ce=a[ne],o.hasOwnProperty(ne)&&re!==ce&&(re!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Ht(t,n,ne,re,o,ce)}return;default:if(Ui(n)){for(var Gt in a)re=a[Gt],a.hasOwnProperty(Gt)&&re!==void 0&&!o.hasOwnProperty(Gt)&&ed(t,n,Gt,void 0,o,re);for(xe in o)re=o[xe],ce=a[xe],!o.hasOwnProperty(xe)||re===ce||re===void 0&&ce===void 0||ed(t,n,xe,re,o,ce);return}}for(var Y in a)re=a[Y],a.hasOwnProperty(Y)&&re!=null&&!o.hasOwnProperty(Y)&&Ht(t,n,Y,null,o,re);for(Me in o)re=o[Me],ce=a[Me],!o.hasOwnProperty(Me)||re===ce||re==null&&ce==null||Ht(t,n,Me,re,o,ce)}var td=null,nd=null;function lc(t){return t.nodeType===9?t:t.ownerDocument}function m0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function id(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function DS(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var v0=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(t){return x0.resolve(null).then(t).catch(LS)}:v0;function LS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function _0(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var E=t.ownerDocument;if(a&1&&Do(E.documentElement),a&2&&Do(E.body),a&4)for(a=E.head,Do(a),E=a.firstChild;E;){var R=E.nextSibling,z=E.nodeName;E[wa]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=R}}if(u===0){t.removeChild(d),Bo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Bo(n)}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),Hs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function OS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[wa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function PS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function IS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var od=null;function S0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function y0(t,n,a){switch(n=lc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Hs(t)}var oi=new Map,M0=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=H.d;H.d={f:FS,r:BS,D:zS,C:HS,L:GS,m:VS,X:jS,S:kS,M:XS};function FS(){var t=fa.f(),n=ec();return t||n}function BS(t){var n=Yi(t);n!==null&&n.tag===5&&n.type==="form"?Vm(n):fa.r(t)}var mr=typeof document>"u"?null:document;function b0(t,n,a){var o=mr;if(o&&typeof n=="string"&&n){var u=Xt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),M0.has(u)||(M0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",t),nn(n),o.head.appendChild(n)))}}function zS(t){fa.D(t),b0("dns-prefetch",t,null)}function HS(t,n){fa.C(t,n),b0("preconnect",t,n)}function GS(t,n,a){fa.L(t,n,a);var o=mr;if(o&&t&&n){var u='link[rel="preload"][as="'+Xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xt(a.imageSizes)+'"]')):u+='[href="'+Xt(t)+'"]';var d=u;switch(n){case"style":d=gr(t);break;case"script":d=vr(t)}oi.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(d))||n==="script"&&o.querySelector(Uo(d))||(n=o.createElement("link"),An(n,"link",t),nn(n),o.head.appendChild(n)))}}function VS(t,n){fa.m(t,n);var a=mr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xt(o)+'"][href="'+Xt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=vr(t)}if(!oi.has(d)&&(t=g({rel:"modulepreload",href:t},n),oi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(d)))return}o=a.createElement("link"),An(o,"link",t),nn(o),a.head.appendChild(o)}}}function kS(t,n,a){fa.S(t,n,a);var o=mr;if(o&&t){var u=Zi(o).hoistableStyles,d=gr(t);n=n||"default";var E=u.get(d);if(!E){var R={loading:0,preload:null};if(E=o.querySelector(No(d)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(d))&&ld(t,a);var z=E=o.createElement("link");nn(z),An(z,"link",t),z._p=new Promise(function(ne,xe){z.onload=ne,z.onerror=xe}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,uc(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:R},u.set(d,E)}}}function jS(t,n){fa.X(t,n);var a=mr;if(a&&t){var o=Zi(a).hoistableScripts,u=vr(t),d=o.get(u);d||(d=a.querySelector(Uo(u)),d||(t=g({src:t,async:!0},n),(n=oi.get(u))&&cd(t,n),d=a.createElement("script"),nn(d),An(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function XS(t,n){fa.M(t,n);var a=mr;if(a&&t){var o=Zi(a).hoistableScripts,u=vr(t),d=o.get(u);d||(d=a.querySelector(Uo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=oi.get(u))&&cd(t,n),d=a.createElement("script"),nn(d),An(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function E0(t,n,a,o){var u=(u=ee.current)?cc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gr(a.href),a=Zi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=gr(a.href);var d=Zi(u).hoistableStyles,E=d.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=u.querySelector(No(t)))&&!d._p&&(E.instance=d,E.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),d||WS(u,t,a,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=Zi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function gr(t){return'href="'+Xt(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function T0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function WS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),nn(n),t.head.appendChild(n))}function vr(t){return'[src="'+Xt(t)+'"]'}function Uo(t){return"script[async]"+t}function A0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Xt(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),nn(o),An(o,"style",u),uc(o,a.precedence,t),n.instance=o;case"stylesheet":u=gr(a.href);var d=t.querySelector(No(u));if(d)return n.state.loading|=4,n.instance=d,nn(d),d;o=T0(a),(u=oi.get(u))&&ld(o,u),d=(t.ownerDocument||t).createElement("link"),nn(d);var E=d;return E._p=new Promise(function(R,z){E.onload=R,E.onerror=z}),An(d,"link",o),n.state.loading|=4,uc(d,a.precedence,t),n.instance=d;case"script":return d=vr(a.src),(u=t.querySelector(Uo(d)))?(n.instance=u,nn(u),u):(o=a,(u=oi.get(d))&&(o=g({},a),cd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),nn(u),An(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,t));return n.instance}function uc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,E=0;E<o.length;E++){var R=o[E];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function R0(t,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[wa]||d[hn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(n)||"";E=t+E;var R=o.get(E);R?R.push(d):o.set(E,[d])}}return o}function w0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function qS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function C0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Lo=null;function YS(){}function ZS(t,n,a){if(Lo===null)throw Error(s(475));var o=Lo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=gr(a.href),d=t.querySelector(No(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=dc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,nn(d);return}d=t.ownerDocument||t,a=T0(a),(u=oi.get(u))&&ld(a,u),d=d.createElement("link"),nn(d);var E=d;E._p=new Promise(function(R,z){E.onload=R,E.onerror=z}),An(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=dc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function KS(){if(Lo===null)throw Error(s(475));var t=Lo;return t.stylesheets&&t.count===0&&ud(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&ud(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function dc(){if(this.count--,this.count===0){if(this.stylesheets)ud(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hc=null;function ud(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hc=new Map,n.forEach(QS,t),hc=null,dc.call(t))}function QS(t,n){if(!(n.state.loading&4)){var a=hc.get(t);if(a)var o=a.get(null);else{a=new Map,hc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var E=u[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),d=a.get(E)||o,d===o&&a.set(null,u),a.set(E,u),this.count++,o=dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Oo={$$typeof:N,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function JS(t,n,a,o,u,d,E,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function D0(t,n,a,o,u,d,E,R,z,ne,xe,Me){return t=new JS(t,n,a,E,R,z,ne,Me),n=1,d===!0&&(n|=24),d=Wn(3,null,null,n),t.current=d,d.stateNode=t,n=ju(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Yu(d),t}function N0(t){return t?(t=Ys,t):Ys}function U0(t,n,a,o,u,d){u=N0(u),o.context===null?o.context=u:o.pendingContext=u,o=La(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Oa(t,o,n),a!==null&&(Qn(a,t,n),co(a,t,n))}function L0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function fd(t,n){L0(t,n),(t=t.alternate)&&L0(t,n)}function O0(t){if(t.tag===13){var n=qs(t,67108864);n!==null&&Qn(n,t,67108864),fd(t,67108864)}}var pc=!0;function $S(t,n,a,o){var u=I.T;I.T=null;var d=H.p;try{H.p=2,dd(t,n,a,o)}finally{H.p=d,I.T=u}}function ey(t,n,a,o){var u=I.T;I.T=null;var d=H.p;try{H.p=8,dd(t,n,a,o)}finally{H.p=d,I.T=u}}function dd(t,n,a,o){if(pc){var u=hd(o);if(u===null)$f(t,n,o,mc,a),I0(t,o);else if(ny(u,t,n,a,o))o.stopPropagation();else if(I0(t,o),n&4&&-1<ty.indexOf(t)){for(;u!==null;){var d=Yi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Fe(d.pendingLanes);if(E!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var z=1<<31-we(E);R.entanglements[1]|=z,E&=~z}Fi(d),(It&6)===0&&(Jl=yt()+500,Ro(0))}}break;case 13:R=qs(d,2),R!==null&&Qn(R,d,2),ec(),fd(d,2)}if(d=hd(o),d===null&&$f(t,n,o,mc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else $f(t,n,o,null,a)}}function hd(t){return t=vu(t),pd(t)}var mc=null;function pd(t){if(mc=null,t=mi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return mc=t,null}function P0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case jt:return 2;case Mt:return 8;case bt:case Ge:return 32;case U:return 268435456;default:return 32}default:return 32}}var md=!1,qa=null,Ya=null,Za=null,Po=new Map,Io=new Map,Ka=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I0(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function Fo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Yi(n),n!==null&&O0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ny(t,n,a,o,u){switch(n){case"focusin":return qa=Fo(qa,t,n,a,o,u),!0;case"dragenter":return Ya=Fo(Ya,t,n,a,o,u),!0;case"mouseover":return Za=Fo(Za,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Po.set(d,Fo(Po.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Io.set(d,Fo(Io.get(d)||null,t,n,a,o,u)),!0}return!1}function F0(t){var n=mi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,pi(t.priority,function(){if(a.tag===13){var o=Kn();o=nt(o);var u=qs(a,o);u!==null&&Qn(u,a,o),fd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=hd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=Yi(a),n!==null&&O0(n),t.blockedOn=a,!1;n.shift()}return!0}function B0(t,n,a){gc(t)&&a.delete(n)}function iy(){md=!1,qa!==null&&gc(qa)&&(qa=null),Ya!==null&&gc(Ya)&&(Ya=null),Za!==null&&gc(Za)&&(Za=null),Po.forEach(B0),Io.forEach(B0)}function vc(t,n){t.blockedOn===n&&(t.blockedOn=null,md||(md=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,iy)))}var xc=null;function z0(t){xc!==t&&(xc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(pd(o||a)===null)continue;break}var d=Yi(a);d!==null&&(t.splice(n,3),n-=3,pf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Bo(t){function n(z){return vc(z,t)}qa!==null&&vc(qa,t),Ya!==null&&vc(Ya,t),Za!==null&&vc(Za,t),Po.forEach(n),Io.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)F0(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],E=u[_n]||null;if(typeof d=="function")E||z0(a);else if(E){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,E=d[_n]||null)R=E.formAction;else if(pd(u)!==null)continue}else R=E.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),z0(a)}}}function gd(t){this._internalRoot=t}_c.prototype.render=gd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Kn();U0(a,o,t,n,null,null)},_c.prototype.unmount=gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;U0(t.current,2,null,t,null,null),ec(),n[Ra]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&F0(t)}};var H0=e.version;if(H0!=="19.1.0")throw Error(s(527,H0,"19.1.0"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var ay={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{Z=Sc.inject(ay),le=Sc}catch{}}return Ho.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=ng,d=ig,E=ag,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=D0(t,1,!1,null,null,a,o,u,d,E,R,null),t[Ra]=n.current,Jf(t),new gd(n)},Ho.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=ng,E=ig,R=ag,z=null,ne=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(ne=a.formState)),n=D0(t,1,!0,n,a??null,o,u,d,E,R,z,ne),n.context=N0(null),a=n.current,o=Kn(),o=nt(o),u=La(o),u.callback=null,Oa(a,u,o),a=o,n.current.lanes=a,Ie(n,a),Fi(n),t[Ra]=n.current,Jf(t),new _c(n)},Ho.version="19.1.0",Ho}var K0;function py(){if(K0)return _d.exports;K0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),_d.exports=hy(),_d.exports}var my=py();/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Q0="popstate";function gy(r={}){function e(s,l){let{pathname:c,search:f,hash:p}=s.location;return rh("",{pathname:c,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:$o(l)}return xy(e,i,null,r)}function Jt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ki(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vy(){return Math.random().toString(36).substring(2,10)}function J0(r,e){return{usr:r.state,key:r.key,idx:e}}function rh(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Gr(e):e,state:i,key:e&&e.key||s||vy()}}function $o({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Gr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function xy(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",m=null,h=g();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function g(){return(f.state||{idx:null}).idx}function S(){p="POP";let M=g(),y=M==null?null:M-h;h=M,m&&m({action:p,location:C.location,delta:y})}function x(M,y){p="PUSH";let D=rh(C.location,M,y);h=g()+1;let N=J0(D,h),L=C.createHref(D);try{f.pushState(N,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(L)}c&&m&&m({action:p,location:C.location,delta:1})}function b(M,y){p="REPLACE";let D=rh(C.location,M,y);h=g();let N=J0(D,h),L=C.createHref(D);f.replaceState(N,"",L),c&&m&&m({action:p,location:C.location,delta:0})}function T(M){return _y(M)}let C={get action(){return p},get location(){return r(l,f)},listen(M){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Q0,S),m=M,()=>{l.removeEventListener(Q0,S),m=null}},createHref(M){return e(l,M)},createURL:T,encodeLocation(M){let y=T(M);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:x,replace:b,go(M){return f.go(M)}};return C}function _y(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:$o(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function ax(r,e,i="/"){return Sy(r,e,i,!1)}function Sy(r,e,i,s){let l=typeof e=="string"?Gr(e):e,c=Ma(l.pathname||"/",i);if(c==null)return null;let f=sx(r);yy(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let h=Uy(c);p=Dy(f[m],h,s)}return p}function sx(r,e=[],i=[],s="",l=!1){let c=(f,p,m=l,h)=>{let g={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&m)return;Jt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let S=_a([s,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(Jt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),sx(f.children,e,x,S,m)),!(f.path==null&&!f.index)&&e.push({path:S,score:wy(S,f.index),routesMeta:x})};return r.forEach((f,p)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))c(f,p);else for(let h of rx(f.path))c(f,p,!0,h)}),e}function rx(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=rx(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function yy(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:Cy(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var My=/^:[\w-]+$/,by=3,Ey=2,Ty=1,Ay=10,Ry=-2,$0=r=>r==="*";function wy(r,e){let i=r.split("/"),s=i.length;return i.some($0)&&(s+=Ry),e&&(s+=Ey),i.filter(l=>!$0(l)).reduce((l,c)=>l+(My.test(c)?by:c===""?Ty:Ay),s)}function Cy(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function Dy(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],h=p===s.length-1,g=c==="/"?e:e.slice(c.length)||"/",S=tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},g),x=m.route;if(!S&&h&&i&&!s[s.length-1].route.index&&(S=tu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!S)return null;Object.assign(l,S.params),f.push({params:l,pathname:_a([c,S.pathname]),pathnameBase:Iy(_a([c,S.pathnameBase])),route:x}),S.pathnameBase!=="/"&&(c=_a([c,S.pathnameBase]))}return f}function tu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=Ny(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((h,{paramName:g,isOptional:S},x)=>{if(g==="*"){let T=p[x]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const b=p[x];return S&&!b?h[g]=void 0:h[g]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:r}}function Ny(r,e=!1,i=!0){ki(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function Uy(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ki(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ma(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var Ly=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Oy(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Gr(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=ev(i.substring(1),"/"):c=ev(i,e)):c=e,{pathname:c,search:Fy(s),hash:By(l)}}function ev(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function bd(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Py(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function ox(r){let e=Py(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function lx(r,e,i,s=!1){let l;typeof r=="string"?l=Gr(r):(l={...r},Jt(!l.pathname||!l.pathname.includes("?"),bd("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),bd("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),bd("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let S=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),S-=1;l.pathname=x.join("/")}p=S>=0?e[S]:"/"}let m=Oy(l,p),h=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||g)&&(m.pathname+="/"),m}var _a=r=>r.join("/").replace(/\/\/+/g,"/"),Iy=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Fy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,By=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,zy=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Hy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Gy(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var cx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ux(r,e){let i=r;if(typeof i!="string"||!Ly.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(cx)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=Ma(f.pathname,e);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{ki(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fx=["POST","PUT","PATCH","DELETE"];new Set(fx);var Vy=["GET",...fx];new Set(Vy);var Vr=me.createContext(null);Vr.displayName="DataRouter";var cu=me.createContext(null);cu.displayName="DataRouterState";var ky=me.createContext(!1),dx=me.createContext({isTransitioning:!1});dx.displayName="ViewTransition";var jy=me.createContext(new Map);jy.displayName="Fetchers";var Xy=me.createContext(null);Xy.displayName="Await";var hi=me.createContext(null);hi.displayName="Navigation";var il=me.createContext(null);il.displayName="Location";var Ta=me.createContext({outlet:null,matches:[],isDataRoute:!1});Ta.displayName="Route";var np=me.createContext(null);np.displayName="RouteError";var hx="REACT_ROUTER_ERROR",Wy="REDIRECT",qy="ROUTE_ERROR_RESPONSE";function Yy(r){if(r.startsWith(`${hx}:${Wy}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Zy(r){if(r.startsWith(`${hx}:${qy}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new zy(e.status,e.statusText,e.data)}catch{}}function Ky(r,{relative:e}={}){Jt(al(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=me.useContext(hi),{hash:l,pathname:c,search:f}=sl(r,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:_a([i,c])),s.createHref({pathname:p,search:f,hash:l})}function al(){return me.useContext(il)!=null}function Aa(){return Jt(al(),"useLocation() may be used only in the context of a <Router> component."),me.useContext(il).location}var px="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mx(r){me.useContext(hi).static||me.useLayoutEffect(r)}function Qy(){let{isDataRoute:r}=me.useContext(Ta);return r?uM():Jy()}function Jy(){Jt(al(),"useNavigate() may be used only in the context of a <Router> component.");let r=me.useContext(Vr),{basename:e,navigator:i}=me.useContext(hi),{matches:s}=me.useContext(Ta),{pathname:l}=Aa(),c=JSON.stringify(ox(s)),f=me.useRef(!1);return mx(()=>{f.current=!0}),me.useCallback((m,h={})=>{if(ki(f.current,px),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=lx(m,JSON.parse(c),l,h.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:_a([e,g.pathname])),(h.replace?i.replace:i.push)(g,h.state,h)},[e,i,c,l,r])}me.createContext(null);function sl(r,{relative:e}={}){let{matches:i}=me.useContext(Ta),{pathname:s}=Aa(),l=JSON.stringify(ox(i));return me.useMemo(()=>lx(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function $y(r,e){return gx(r,e)}function gx(r,e,i,s,l){var D;Jt(al(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=me.useContext(hi),{matches:f}=me.useContext(Ta),p=f[f.length-1],m=p?p.params:{},h=p?p.pathname:"/",g=p?p.pathnameBase:"/",S=p&&p.route;{let N=S&&S.path||"";xx(h,!S||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let x=Aa(),b;if(e){let N=typeof e=="string"?Gr(e):e;Jt(g==="/"||((D=N.pathname)==null?void 0:D.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${N.pathname}" was given in the \`location\` prop.`),b=N}else b=x;let T=b.pathname||"/",C=T;if(g!=="/"){let N=g.replace(/^\//,"").split("/");C="/"+T.replace(/^\//,"").split("/").slice(N.length).join("/")}let M=ax(r,{pathname:C});ki(S||M!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),ki(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=aM(M&&M.map(N=>Object.assign({},N,{params:Object.assign({},m,N.params),pathname:_a([g,c.encodeLocation?c.encodeLocation(N.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?g:_a([g,c.encodeLocation?c.encodeLocation(N.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),f,i,s,l);return e&&y?me.createElement(il.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},y):y}function eM(){let r=cM(),e=Hy(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=me.createElement(me.Fragment,null,me.createElement("p",null,"💿 Hey developer 👋"),me.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",me.createElement("code",{style:c},"ErrorBoundary")," or"," ",me.createElement("code",{style:c},"errorElement")," prop on your route.")),me.createElement(me.Fragment,null,me.createElement("h2",null,"Unexpected Application Error!"),me.createElement("h3",{style:{fontStyle:"italic"}},e),i?me.createElement("pre",{style:l},i):null,f)}var tM=me.createElement(eM,null),vx=class extends me.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=Zy(r.digest);i&&(r=i)}let e=r!==void 0?me.createElement(Ta.Provider,{value:this.props.routeContext},me.createElement(np.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?me.createElement(nM,{error:r},e):e}};vx.contextType=ky;var Ed=new WeakMap;function nM({children:r,error:e}){let{basename:i}=me.useContext(hi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Yy(e.digest);if(s){let l=Ed.get(e);if(l)throw l;let c=ux(s.location,i);if(cx&&!Ed.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Ed.set(e,f),f}return me.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function iM({routeContext:r,match:e,children:i}){let s=me.useContext(Vr);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),me.createElement(Ta.Provider,{value:r},i)}function aM(r,e=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i==null?void 0:i.errors;if(f!=null){let g=c.findIndex(S=>S.route.id&&(f==null?void 0:f[S.route.id])!==void 0);Jt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let S=c[g];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(m=g),S.route.id){let{loaderData:x,errors:b}=i,T=S.route.loader&&!x.hasOwnProperty(S.route.id)&&(!b||b[S.route.id]===void 0);if(S.route.lazy||T){p=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let h=i&&s?(g,S)=>{var x,b;s(g,{location:i.location,params:((b=(x=i.matches)==null?void 0:x[0])==null?void 0:b.params)??{},unstable_pattern:Gy(i.matches),errorInfo:S})}:void 0;return c.reduceRight((g,S,x)=>{let b,T=!1,C=null,M=null;i&&(b=f&&S.route.id?f[S.route.id]:void 0,C=S.route.errorElement||tM,p&&(m<0&&x===0?(xx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,M=null):m===x&&(T=!0,M=S.route.hydrateFallbackElement||null)));let y=e.concat(c.slice(0,x+1)),D=()=>{let N;return b?N=C:T?N=M:S.route.Component?N=me.createElement(S.route.Component,null):S.route.element?N=S.route.element:N=g,me.createElement(iM,{match:S,routeContext:{outlet:g,matches:y,isDataRoute:i!=null},children:N})};return i&&(S.route.ErrorBoundary||S.route.errorElement||x===0)?me.createElement(vx,{location:i.location,revalidation:i.revalidation,component:C,error:b,children:D(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:h}):D()},null)}function ip(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sM(r){let e=me.useContext(Vr);return Jt(e,ip(r)),e}function rM(r){let e=me.useContext(cu);return Jt(e,ip(r)),e}function oM(r){let e=me.useContext(Ta);return Jt(e,ip(r)),e}function ap(r){let e=oM(r),i=e.matches[e.matches.length-1];return Jt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function lM(){return ap("useRouteId")}function cM(){var s;let r=me.useContext(np),e=rM("useRouteError"),i=ap("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[i]}function uM(){let{router:r}=sM("useNavigate"),e=ap("useNavigate"),i=me.useRef(!1);return mx(()=>{i.current=!0}),me.useCallback(async(l,c={})=>{ki(i.current,px),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var tv={};function xx(r,e,i){!e&&!tv[r]&&(tv[r]=!0,ki(!1,i))}me.memo(fM);function fM({routes:r,future:e,state:i,onError:s}){return gx(r,void 0,i,s,e)}function as(r){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Jt(!al(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),m=me.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Gr(i));let{pathname:h="/",search:g="",hash:S="",state:x=null,key:b="default"}=i,T=me.useMemo(()=>{let C=Ma(h,p);return C==null?null:{location:{pathname:C,search:g,hash:S,state:x,key:b},navigationType:s}},[p,h,g,S,x,b,s]);return ki(T!=null,`<Router basename="${p}"> is not able to match the URL "${h}${g}${S}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:me.createElement(hi.Provider,{value:m},me.createElement(il.Provider,{children:e,value:T}))}function hM({children:r,location:e}){return $y(oh(r),e)}function oh(r,e=[]){let i=[];return me.Children.forEach(r,(s,l)=>{if(!me.isValidElement(s))return;let c=[...e,l];if(s.type===me.Fragment){i.push.apply(i,oh(s.props.children,c));return}Jt(s.type===as,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=oh(s.props.children,c)),i.push(f)}),i}var qc="get",Yc="application/x-www-form-urlencoded";function uu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function pM(r){return uu(r)&&r.tagName.toLowerCase()==="button"}function mM(r){return uu(r)&&r.tagName.toLowerCase()==="form"}function gM(r){return uu(r)&&r.tagName.toLowerCase()==="input"}function vM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function xM(r,e){return r.button===0&&(!e||e==="_self")&&!vM(r)}var yc=null;function _M(){if(yc===null)try{new FormData(document.createElement("form"),0),yc=!1}catch{yc=!0}return yc}var SM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Td(r){return r!=null&&!SM.has(r)?(ki(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yc}"`),null):r}function yM(r,e){let i,s,l,c,f;if(mM(r)){let p=r.getAttribute("action");s=p?Ma(p,e):null,i=r.getAttribute("method")||qc,l=Td(r.getAttribute("enctype"))||Yc,c=new FormData(r)}else if(pM(r)||gM(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Ma(m,e):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||qc,l=Td(r.getAttribute("formenctype"))||Td(p.getAttribute("enctype"))||Yc,c=new FormData(p,r),!_M()){let{name:h,type:g,value:S}=r;if(g==="image"){let x=h?`${h}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else h&&c.append(h,S)}}else{if(uu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=qc,s=null,l=Yc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function sp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function MM(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Ma(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function bM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function EM(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function TM(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await bM(c,i);return f.links?f.links():[]}return[]}));return CM(s.flat(1).filter(EM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function nv(r,e,i,s,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>{var g;return i[h].pathname!==m.pathname||((g=i[h].route.path)==null?void 0:g.endsWith("*"))&&i[h].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{var S;let g=s.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((S=i[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function AM(r,e,{includeHydrateFallback:i}={}){return RM(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function RM(r){return[...new Set(r)]}function wM(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function CM(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(wM(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function _x(){let r=me.useContext(Vr);return sp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function DM(){let r=me.useContext(cu);return sp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var rp=me.createContext(void 0);rp.displayName="FrameworkContext";function Sx(){let r=me.useContext(rp);return sp(r,"You must render this element inside a <HydratedRouter> element"),r}function NM(r,e){let i=me.useContext(rp),[s,l]=me.useState(!1),[c,f]=me.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:g,onTouchStart:S}=e,x=me.useRef(null);me.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let C=y=>{y.forEach(D=>{f(D.isIntersecting)})},M=new IntersectionObserver(C,{threshold:.5});return x.current&&M.observe(x.current),()=>{M.disconnect()}}},[r]),me.useEffect(()=>{if(s){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[s]);let b=()=>{l(!0)},T=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,x,{}]:[c,x,{onFocus:Go(p,b),onBlur:Go(m,T),onMouseEnter:Go(h,b),onMouseLeave:Go(g,T),onTouchStart:Go(S,b)}]:[!1,x,{}]}function Go(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function UM({page:r,...e}){let{router:i}=_x(),s=me.useMemo(()=>ax(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?me.createElement(OM,{page:r,matches:s,...e}):null}function LM(r){let{manifest:e,routeModules:i}=Sx(),[s,l]=me.useState([]);return me.useEffect(()=>{let c=!1;return TM(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function OM({page:r,matches:e,...i}){let s=Aa(),{future:l,manifest:c,routeModules:f}=Sx(),{basename:p}=_x(),{loaderData:m,matches:h}=DM(),g=me.useMemo(()=>nv(r,e,h,c,s,"data"),[r,e,h,c,s]),S=me.useMemo(()=>nv(r,e,h,c,s,"assets"),[r,e,h,c,s]),x=me.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let C=new Set,M=!1;if(e.forEach(D=>{var L;let N=c.routes[D.route.id];!N||!N.hasLoader||(!g.some(B=>B.route.id===D.route.id)&&D.route.id in m&&((L=f[D.route.id])!=null&&L.shouldRevalidate)||N.hasClientLoader?M=!0:C.add(D.route.id))}),C.size===0)return[];let y=MM(r,p,l.unstable_trailingSlashAwareDataRequests,"data");return M&&C.size>0&&y.searchParams.set("_routes",e.filter(D=>C.has(D.route.id)).map(D=>D.route.id).join(",")),[y.pathname+y.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,s,c,g,e,r,f]),b=me.useMemo(()=>AM(S,c),[S,c]),T=LM(S);return me.createElement(me.Fragment,null,x.map(C=>me.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),b.map(C=>me.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),T.map(({key:C,link:M})=>me.createElement("link",{key:C,nonce:i.nonce,...M,crossOrigin:M.crossOrigin??i.crossOrigin})))}function PM(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var IM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{IM&&(window.__reactRouterVersion="7.13.0")}catch{}function FM({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=me.useRef();l.current==null&&(l.current=gy({window:s,v5Compat:!0}));let c=l.current,[f,p]=me.useState({action:c.action,location:c.location}),m=me.useCallback(h=>{i===!1?p(h):me.startTransition(()=>p(h))},[i]);return me.useLayoutEffect(()=>c.listen(m),[c,m]),me.createElement(dM,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var yx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lr=me.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:h,preventScrollReset:g,viewTransition:S,unstable_defaultShouldRevalidate:x,...b},T){let{basename:C,unstable_useTransitions:M}=me.useContext(hi),y=typeof h=="string"&&yx.test(h),D=ux(h,C);h=D.to;let N=Ky(h,{relative:l}),[L,B,G]=NM(s,b),k=GM(h,{replace:f,state:p,target:m,preventScrollReset:g,relative:l,viewTransition:S,unstable_defaultShouldRevalidate:x,unstable_useTransitions:M});function A(he){e&&e(he),he.defaultPrevented||k(he)}let O=me.createElement("a",{...b,...G,href:D.absoluteURL||N,onClick:D.isExternal||c?e:A,ref:PM(T,B),target:m,"data-discover":!y&&i==="render"?"true":void 0});return L&&!y?me.createElement(me.Fragment,null,O,me.createElement(UM,{page:N})):O});Lr.displayName="Link";var BM=me.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},g){let S=sl(f,{relative:h.relative}),x=Aa(),b=me.useContext(cu),{navigator:T,basename:C}=me.useContext(hi),M=b!=null&&WM(S)&&p===!0,y=T.encodeLocation?T.encodeLocation(S).pathname:S.pathname,D=x.pathname,N=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(D=D.toLowerCase(),N=N?N.toLowerCase():null,y=y.toLowerCase()),N&&C&&(N=Ma(N,C)||N);const L=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let B=D===y||!l&&D.startsWith(y)&&D.charAt(L)==="/",G=N!=null&&(N===y||!l&&N.startsWith(y)&&N.charAt(y.length)==="/"),k={isActive:B,isPending:G,isTransitioning:M},A=B?e:void 0,O;typeof s=="function"?O=s(k):O=[s,B?"active":null,G?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let he=typeof c=="function"?c(k):c;return me.createElement(Lr,{...h,"aria-current":A,className:O,ref:g,style:he,to:f,viewTransition:p},typeof m=="function"?m(k):m)});BM.displayName="NavLink";var zM=me.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=qc,action:p,onSubmit:m,relative:h,preventScrollReset:g,viewTransition:S,unstable_defaultShouldRevalidate:x,...b},T)=>{let{unstable_useTransitions:C}=me.useContext(hi),M=jM(),y=XM(p,{relative:h}),D=f.toLowerCase()==="get"?"get":"post",N=typeof p=="string"&&yx.test(p),L=B=>{if(m&&m(B),B.defaultPrevented)return;B.preventDefault();let G=B.nativeEvent.submitter,k=(G==null?void 0:G.getAttribute("formmethod"))||f,A=()=>M(G||B.currentTarget,{fetcherKey:e,method:k,navigate:i,replace:l,state:c,relative:h,preventScrollReset:g,viewTransition:S,unstable_defaultShouldRevalidate:x});C&&i!==!1?me.startTransition(()=>A()):A()};return me.createElement("form",{ref:T,method:D,action:y,onSubmit:s?m:L,...b,"data-discover":!N&&r==="render"?"true":void 0})});zM.displayName="Form";function HM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mx(r){let e=me.useContext(Vr);return Jt(e,HM(r)),e}function GM(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let h=Qy(),g=Aa(),S=sl(r,{relative:c});return me.useCallback(x=>{if(xM(x,e)){x.preventDefault();let b=i!==void 0?i:$o(g)===$o(S),T=()=>h(r,{replace:b,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p});m?me.startTransition(()=>T()):T()}},[g,h,S,i,s,e,r,l,c,f,p,m])}var VM=0,kM=()=>`__${String(++VM)}__`;function jM(){let{router:r}=Mx("useSubmit"),{basename:e}=me.useContext(hi),i=lM(),s=r.fetch,l=r.navigate;return me.useCallback(async(c,f={})=>{let{action:p,method:m,encType:h,formData:g,body:S}=yM(c,e);if(f.navigate===!1){let x=f.fetcherKey||kM();await s(x,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:S,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:S,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function XM(r,{relative:e}={}){let{basename:i}=me.useContext(hi),s=me.useContext(Ta);Jt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...sl(r||".",{relative:e})},f=Aa();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(g=>g==="")){p.delete("index"),m.filter(S=>S).forEach(S=>p.append("index",S));let g=p.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:_a([i,c.pathname])),$o(c)}function WM(r,{relative:e}={}){let i=me.useContext(dx);Jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Mx("useViewTransitionState"),l=sl(r,{relative:e});if(!i.isTransitioning)return!1;let c=Ma(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Ma(i.nextLocation.pathname,s)||i.nextLocation.pathname;return tu(l.pathname,f)!=null||tu(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="183",qM=0,iv=1,YM=2,Zc=1,ZM=2,Ko=3,os=0,kn=1,xa=2,Sa=0,Or=1,lh=2,av=3,sv=4,KM=5,Us=100,QM=101,JM=102,$M=103,eb=104,tb=200,nb=201,ib=202,ab=203,ch=204,uh=205,sb=206,rb=207,ob=208,lb=209,cb=210,ub=211,fb=212,db=213,hb=214,fh=0,dh=1,hh=2,Ir=3,ph=4,mh=5,gh=6,vh=7,bx=0,pb=1,mb=2,Vi=0,Ex=1,Tx=2,Ax=3,Rx=4,wx=5,Cx=6,Dx=7,Nx=300,Fs=301,Fr=302,Ad=303,Rd=304,fu=306,xh=1e3,ei=1001,_h=1002,Rn=1003,gb=1004,Mc=1005,dn=1006,wd=1007,Os=1008,ui=1009,Ux=1010,Lx=1011,el=1012,lp=1013,ji=1014,Ti=1015,Xi=1016,cp=1017,up=1018,tl=1020,Ox=35902,Px=35899,Ix=1021,Fx=1022,fi=1023,ba=1026,Ps=1027,Bx=1028,fp=1029,Br=1030,dp=1031,hp=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,Sh=35840,yh=35841,Mh=35842,bh=35843,Eh=36196,Th=37492,Ah=37496,Rh=37488,wh=37489,Ch=37490,Dh=37491,Nh=37808,Uh=37809,Lh=37810,Oh=37811,Ph=37812,Ih=37813,Fh=37814,Bh=37815,zh=37816,Hh=37817,Gh=37818,Vh=37819,kh=37820,jh=37821,Xh=36492,Wh=36494,qh=36495,Yh=36283,Zh=36284,Kh=36285,Qh=36286,vb=3200,xb=0,_b=1,ss="",ci="srgb",zr="srgb-linear",nu="linear",Bt="srgb",xr=7680,rv=519,Sb=512,yb=513,Mb=514,pp=515,bb=516,Eb=517,mp=518,Tb=519,ov=35044,lv="300 es",Gi=2e3,iu=2001;function Ab(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function au(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rb(){const r=au("canvas");return r.style.display="block",r}const cv={};function uv(...r){const e="THREE."+r.shift();console.log(e,...r)}function zx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function at(...r){r=zx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function wt(...r){r=zx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function su(...r){const e=r.join(" ");e in cv||(cv[e]=!0,at(...r))}function wb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Cb={[fh]:dh,[hh]:gh,[ph]:vh,[Ir]:mh,[dh]:fh,[gh]:hh,[vh]:ph,[mh]:Ir};class kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=Math.PI/180,Jh=180/Math.PI;function rl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function St(r,e,i){return Math.max(e,Math.min(i,r))}function Db(r,e){return(r%e+e)%e}function Dd(r,e,i){return(1-i)*r+i*e}function Vo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,i=0){ot.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],g=s[l+2],S=s[l+3],x=c[f+0],b=c[f+1],T=c[f+2],C=c[f+3];if(S!==C||m!==x||h!==b||g!==T){let M=m*x+h*b+g*T+S*C;M<0&&(x=-x,b=-b,T=-T,C=-C,M=-M);let y=1-p;if(M<.9995){const D=Math.acos(M),N=Math.sin(D);y=Math.sin(y*D)/N,p=Math.sin(p*D)/N,m=m*y+x*p,h=h*y+b*p,g=g*y+T*p,S=S*y+C*p}else{m=m*y+x*p,h=h*y+b*p,g=g*y+T*p,S=S*y+C*p;const D=1/Math.sqrt(m*m+h*h+g*g+S*S);m*=D,h*=D,g*=D,S*=D}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],g=s[l+3],S=c[f],x=c[f+1],b=c[f+2],T=c[f+3];return e[i]=p*T+g*S+m*b-h*x,e[i+1]=m*T+g*x+h*S-p*b,e[i+2]=h*T+g*b+p*x-m*S,e[i+3]=g*T-p*S-m*x-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),g=p(l/2),S=p(c/2),x=m(s/2),b=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=x*g*S+h*b*T,this._y=h*b*S-x*g*T,this._z=h*g*T+x*b*S,this._w=h*g*S-x*b*T;break;case"YXZ":this._x=x*g*S+h*b*T,this._y=h*b*S-x*g*T,this._z=h*g*T-x*b*S,this._w=h*g*S+x*b*T;break;case"ZXY":this._x=x*g*S-h*b*T,this._y=h*b*S+x*g*T,this._z=h*g*T+x*b*S,this._w=h*g*S-x*b*T;break;case"ZYX":this._x=x*g*S-h*b*T,this._y=h*b*S+x*g*T,this._z=h*g*T-x*b*S,this._w=h*g*S+x*b*T;break;case"YZX":this._x=x*g*S+h*b*T,this._y=h*b*S+x*g*T,this._z=h*g*T-x*b*S,this._w=h*g*S-x*b*T;break;case"XZY":this._x=x*g*S-h*b*T,this._y=h*b*S-x*g*T,this._z=h*g*T+x*b*S,this._w=h*g*S+x*b*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],g=i[6],S=i[10],x=s+p+S;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(g-m)*b,this._y=(c-h)*b,this._z=(f-l)*b}else if(s>p&&s>S){const b=2*Math.sqrt(1+s-p-S);this._w=(g-m)/b,this._x=.25*b,this._y=(l+f)/b,this._z=(c+h)/b}else if(p>S){const b=2*Math.sqrt(1+p-s-S);this._w=(c-h)/b,this._x=(l+f)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+S-s-p);this._w=(f-l)/b,this._x=(c+h)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,g=i._w;return this._x=s*g+f*p+l*h-c*m,this._y=l*g+f*m+c*p-s*h,this._z=c*g+f*h+s*m-l*p,this._w=f*g-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,s=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(fv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(fv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),g=2*(p*i-c*l),S=2*(c*s-f*i);return this.x=i+m*h+f*S-p*g,this.y=s+m*g+p*h-c*S,this.z=l+m*S+c*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new oe,fv=new jr;class ft{constructor(e,i,s,l,c,f,p,m,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],g=s[4],S=s[7],x=s[2],b=s[5],T=s[8],C=l[0],M=l[3],y=l[6],D=l[1],N=l[4],L=l[7],B=l[2],G=l[5],k=l[8];return c[0]=f*C+p*D+m*B,c[3]=f*M+p*N+m*G,c[6]=f*y+p*L+m*k,c[1]=h*C+g*D+S*B,c[4]=h*M+g*N+S*G,c[7]=h*y+g*L+S*k,c[2]=x*C+b*D+T*B,c[5]=x*M+b*N+T*G,c[8]=x*y+b*L+T*k,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8];return i*f*g-i*p*h-s*c*g+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],S=g*f-p*h,x=p*m-g*c,b=h*c-f*m,T=i*S+s*x+l*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=S*C,e[1]=(l*h-g*s)*C,e[2]=(p*s-l*f)*C,e[3]=x*C,e[4]=(g*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=b*C,e[7]=(s*m-h*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Ud.makeScale(e,i)),this}rotate(e){return this.premultiply(Ud.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ud.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ud=new ft,dv=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hv=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nb(){const r={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Bt&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Bt&&(l.r=Pr(l.r),l.g=Pr(l.g),l.b=Pr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?nu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return su("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return su("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[zr]:{primaries:e,whitePoint:s,transfer:nu,toXYZ:dv,fromXYZ:hv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:Bt,toXYZ:dv,fromXYZ:hv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const Tt=Nb();function ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let _r;class Ub{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{_r===void 0&&(_r=au("canvas")),_r.width=e.width,_r.height=e.height;const l=_r.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=_r}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=au("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ya(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ya(i[s]/255)*255):i[s]=ya(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lb=0;class gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Ld(l[f].image)):c.push(Ld(l[f]))}else c=Ld(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Ld(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ub.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Ob=0;const Od=new oe;class On extends kr{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=ei,l=ei,c=dn,f=Os,p=fi,m=ui,h=On.DEFAULT_ANISOTROPY,g=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=rl(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Od).x}get height(){return this.source.getSize(Od).y}get depth(){return this.source.getSize(Od).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xh:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xh:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Nx;On.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],g=m[4],S=m[8],x=m[1],b=m[5],T=m[9],C=m[2],M=m[6],y=m[10];if(Math.abs(g-x)<.01&&Math.abs(S-C)<.01&&Math.abs(T-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(S+C)<.1&&Math.abs(T+M)<.1&&Math.abs(h+b+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(h+1)/2,L=(b+1)/2,B=(y+1)/2,G=(g+x)/4,k=(S+C)/4,A=(T+M)/4;return N>L&&N>B?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=G/s,c=k/s):L>B?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=G/l,c=A/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=k/c,l=A/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-T)*(M-T)+(S-C)*(S-C)+(x-g)*(x-g));return Math.abs(D)<.001&&(D=1),this.x=(M-T)/D,this.y=(S-C)/D,this.z=(x-g)/D,this.w=Math.acos((h+b+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pb extends kr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new On(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new gp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Pb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Hx extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ib extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(e,i,s,l,c,f,p,m,h,g,S,x,b,T,C,M){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,g,S,x,b,T,C,M)}set(e,i,s,l,c,f,p,m,h,g,S,x,b,T,C,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=p,y[13]=m,y[2]=h,y[6]=g,y[10]=S,y[14]=x,y[3]=b,y[7]=T,y[11]=C,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Sr.setFromMatrixColumn(e,0).length(),c=1/Sr.setFromMatrixColumn(e,1).length(),f=1/Sr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const x=f*g,b=f*S,T=p*g,C=p*S;i[0]=m*g,i[4]=-m*S,i[8]=h,i[1]=b+T*h,i[5]=x-C*h,i[9]=-p*m,i[2]=C-x*h,i[6]=T+b*h,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,b=m*S,T=h*g,C=h*S;i[0]=x+C*p,i[4]=T*p-b,i[8]=f*h,i[1]=f*S,i[5]=f*g,i[9]=-p,i[2]=b*p-T,i[6]=C+x*p,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,b=m*S,T=h*g,C=h*S;i[0]=x-C*p,i[4]=-f*S,i[8]=T+b*p,i[1]=b+T*p,i[5]=f*g,i[9]=C-x*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,b=f*S,T=p*g,C=p*S;i[0]=m*g,i[4]=T*h-b,i[8]=x*h+C,i[1]=m*S,i[5]=C*h+x,i[9]=b*h-T,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,b=f*h,T=p*m,C=p*h;i[0]=m*g,i[4]=C-x*S,i[8]=T*S+b,i[1]=S,i[5]=f*g,i[9]=-p*g,i[2]=-h*g,i[6]=b*S+T,i[10]=x-C*S}else if(e.order==="XZY"){const x=f*m,b=f*h,T=p*m,C=p*h;i[0]=m*g,i[4]=-S,i[8]=h*g,i[1]=x*S+C,i[5]=f*g,i[9]=b*S-T,i[2]=T*S-b,i[6]=p*g,i[10]=C*S+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fb,e,Bb)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ja.crossVectors(s,Jn),Ja.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ja.crossVectors(s,Jn)),Ja.normalize(),bc.crossVectors(Jn,Ja),l[0]=Ja.x,l[4]=bc.x,l[8]=Jn.x,l[1]=Ja.y,l[5]=bc.y,l[9]=Jn.y,l[2]=Ja.z,l[6]=bc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],g=s[1],S=s[5],x=s[9],b=s[13],T=s[2],C=s[6],M=s[10],y=s[14],D=s[3],N=s[7],L=s[11],B=s[15],G=l[0],k=l[4],A=l[8],O=l[12],he=l[1],V=l[5],te=l[9],se=l[13],ue=l[2],Q=l[6],I=l[10],H=l[14],de=l[3],ve=l[7],P=l[11],K=l[15];return c[0]=f*G+p*he+m*ue+h*de,c[4]=f*k+p*V+m*Q+h*ve,c[8]=f*A+p*te+m*I+h*P,c[12]=f*O+p*se+m*H+h*K,c[1]=g*G+S*he+x*ue+b*de,c[5]=g*k+S*V+x*Q+b*ve,c[9]=g*A+S*te+x*I+b*P,c[13]=g*O+S*se+x*H+b*K,c[2]=T*G+C*he+M*ue+y*de,c[6]=T*k+C*V+M*Q+y*ve,c[10]=T*A+C*te+M*I+y*P,c[14]=T*O+C*se+M*H+y*K,c[3]=D*G+N*he+L*ue+B*de,c[7]=D*k+N*V+L*Q+B*ve,c[11]=D*A+N*te+L*I+B*P,c[15]=D*O+N*se+L*H+B*K,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],g=e[2],S=e[6],x=e[10],b=e[14],T=e[3],C=e[7],M=e[11],y=e[15],D=m*b-h*x,N=p*b-h*S,L=p*x-m*S,B=f*b-h*g,G=f*x-m*g,k=f*S-p*g;return i*(C*D-M*N+y*L)-s*(T*D-M*B+y*G)+l*(T*N-C*B+y*k)-c*(T*L-C*G+M*k)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],S=e[9],x=e[10],b=e[11],T=e[12],C=e[13],M=e[14],y=e[15],D=i*p-s*f,N=i*m-l*f,L=i*h-c*f,B=s*m-l*p,G=s*h-c*p,k=l*h-c*m,A=g*C-S*T,O=g*M-x*T,he=g*y-b*T,V=S*M-x*C,te=S*y-b*C,se=x*y-b*M,ue=D*se-N*te+L*V+B*he-G*O+k*A;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/ue;return e[0]=(p*se-m*te+h*V)*Q,e[1]=(l*te-s*se-c*V)*Q,e[2]=(C*k-M*G+y*B)*Q,e[3]=(x*G-S*k-b*B)*Q,e[4]=(m*he-f*se-h*O)*Q,e[5]=(i*se-l*he+c*O)*Q,e[6]=(M*L-T*k-y*N)*Q,e[7]=(g*k-x*L+b*N)*Q,e[8]=(f*te-p*he+h*A)*Q,e[9]=(s*he-i*te-c*A)*Q,e[10]=(T*G-C*L+y*D)*Q,e[11]=(S*L-g*G-b*D)*Q,e[12]=(p*O-f*V-m*A)*Q,e[13]=(i*V-s*O+l*A)*Q,e[14]=(C*N-T*B-M*D)*Q,e[15]=(g*B-S*N+x*D)*Q,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,g=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,g*p+s,g*m-l*f,0,h*m-l*p,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,g=f+f,S=p+p,x=c*h,b=c*g,T=c*S,C=f*g,M=f*S,y=p*S,D=m*h,N=m*g,L=m*S,B=s.x,G=s.y,k=s.z;return l[0]=(1-(C+y))*B,l[1]=(b+L)*B,l[2]=(T-N)*B,l[3]=0,l[4]=(b-L)*G,l[5]=(1-(x+y))*G,l[6]=(M+D)*G,l[7]=0,l[8]=(T+N)*k,l[9]=(M-D)*k,l[10]=(1-(x+C))*k,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Sr.set(l[0],l[1],l[2]).length();const p=Sr.set(l[4],l[5],l[6]).length(),m=Sr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Si.copy(this);const h=1/f,g=1/p,S=1/m;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=S,Si.elements[9]*=S,Si.elements[10]*=S,i.setFromRotationMatrix(Si),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=Gi,m=!1){const h=this.elements,g=2*c/(i-e),S=2*c/(s-l),x=(i+e)/(i-e),b=(s+l)/(s-l);let T,C;if(m)T=c/(f-c),C=f*c/(f-c);else if(p===Gi)T=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===iu)T=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=S,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=Gi,m=!1){const h=this.elements,g=2/(i-e),S=2/(s-l),x=-(i+e)/(i-e),b=-(s+l)/(s-l);let T,C;if(m)T=1/(f-c),C=f/(f-c);else if(p===Gi)T=-2/(f-c),C=-(f+c)/(f-c);else if(p===iu)T=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=S,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Sr=new oe,Si=new ln,Fb=new oe(0,0,0),Bb=new oe(1,1,1),Ja=new oe,bc=new oe,Jn=new oe,pv=new ln,mv=new jr;class Ea{constructor(e=0,i=0,s=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],g=l[9],S=l[2],x=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return pv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return mv.setFromEuler(this),this.setFromQuaternion(mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class Gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zb=0;const gv=new oe,yr=new jr,da=new ln,Ec=new oe,ko=new oe,Hb=new oe,Gb=new jr,vv=new oe(1,0,0),xv=new oe(0,1,0),_v=new oe(0,0,1),Sv={type:"added"},Vb={type:"removed"},Mr={type:"childadded",child:null},Pd={type:"childremoved",child:null};class jn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new oe,i=new Ea,s=new jr,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new ft}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(vv,e)}rotateY(e){return this.rotateOnAxis(xv,e)}rotateZ(e){return this.rotateOnAxis(_v,e)}translateOnAxis(e,i){return gv.copy(e).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(vv,e)}translateY(e){return this.translateOnAxis(xv,e)}translateZ(e){return this.translateOnAxis(_v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ec.copy(e):Ec.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(ko,Ec,this.up):da.lookAt(Ec,ko,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(da),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sv),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Vb),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sv),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,Hb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,Gb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const S=m[h];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),g=f(e.images),S=f(e.shapes),x=f(e.skeletons),b=f(e.animations),T=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),g.length>0&&(s.images=g),S.length>0&&(s.shapes=S),x.length>0&&(s.skeletons=x),b.length>0&&(s.animations=b),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(p){const m=[];for(const h in p){const g=p[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}jn.DEFAULT_UP=new oe(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tc extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kb={type:"move"};class Id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),y=this._getHandJoint(h,C);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],x=g.position.distanceTo(S.position),b=.02,T=.005;h.inputState.pinching&&x>b+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=b-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(kb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Tc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Fd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Lt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Tt.workingColorSpace){if(e=Db(e,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Fd(f,c,e+1/3),this.g=Fd(f,c,e),this.b=Fd(f,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const s=Vx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Tt.workingToColorSpace(Nn.copy(this),e),Math.round(St(Nn.r*255,0,255))*65536+Math.round(St(Nn.g*255,0,255))*256+Math.round(St(Nn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const g=(p+f)/2;if(p===f)m=0,h=0;else{const S=f-p;switch(h=g<=.5?S/(f+p):S/(2-f-p),f){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=ci){Tt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,s=Nn.g,l=Nn.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL($a),this.setHSL($a.h+e,$a.s+i,$a.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL($a),e.getHSL(Ac);const s=Dd($a.h,Ac.h,i),l=Dd($a.s,Ac.s,i),c=Dd($a.l,Ac.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Lt;Lt.NAMES=Vx;class yv extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yi=new oe,ha=new oe,Bd=new oe,pa=new oe,br=new oe,Er=new oe,Mv=new oe,zd=new oe,Hd=new oe,Gd=new oe,Vd=new tn,kd=new tn,jd=new tn;class Ei{constructor(e=new oe,i=new oe,s=new oe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),yi.subVectors(e,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){yi.subVectors(l,i),ha.subVectors(s,i),Bd.subVectors(e,i);const f=yi.dot(yi),p=yi.dot(ha),m=yi.dot(Bd),h=ha.dot(ha),g=ha.dot(Bd),S=f*h-p*p;if(S===0)return c.set(0,0,0),null;const x=1/S,b=(h*m-p*g)*x,T=(f*g-p*m)*x;return c.set(1-b-T,T,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(f,pa.y),m.addScaledVector(p,pa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Vd.setScalar(0),kd.setScalar(0),jd.setScalar(0),Vd.fromBufferAttribute(e,i),kd.fromBufferAttribute(e,s),jd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Vd,c.x),f.addScaledVector(kd,c.y),f.addScaledVector(jd,c.z),f}static isFrontFacing(e,i,s,l){return yi.subVectors(s,i),ha.subVectors(e,i),yi.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),yi.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ei.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;br.subVectors(l,s),Er.subVectors(c,s),zd.subVectors(e,s);const m=br.dot(zd),h=Er.dot(zd);if(m<=0&&h<=0)return i.copy(s);Hd.subVectors(e,l);const g=br.dot(Hd),S=Er.dot(Hd);if(g>=0&&S<=g)return i.copy(l);const x=m*S-g*h;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(br,f);Gd.subVectors(e,c);const b=br.dot(Gd),T=Er.dot(Gd);if(T>=0&&b<=T)return i.copy(c);const C=b*h-m*T;if(C<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Er,p);const M=g*T-b*S;if(M<=0&&S-g>=0&&b-T>=0)return Mv.subVectors(c,l),p=(S-g)/(S-g+(b-T)),i.copy(l).addScaledVector(Mv,p);const y=1/(M+C+x);return f=C*y,p=x*y,i.copy(s).addScaledVector(br,f).addScaledVector(Er,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ol{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Mi):Mi.fromBufferAttribute(c,f),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rc.copy(s.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),wc.subVectors(this.max,jo),Tr.subVectors(e.a,jo),Ar.subVectors(e.b,jo),Rr.subVectors(e.c,jo),es.subVectors(Ar,Tr),ts.subVectors(Rr,Ar),Es.subVectors(Tr,Rr);let i=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Es.z,Es.y,es.z,0,-es.x,ts.z,0,-ts.x,Es.z,0,-Es.x,-es.y,es.x,0,-ts.y,ts.x,0,-Es.y,Es.x,0];return!Xd(i,Tr,Ar,Rr,wc)||(i=[1,0,0,0,1,0,0,0,1],!Xd(i,Tr,Ar,Rr,wc))?!1:(Cc.crossVectors(es,ts),i=[Cc.x,Cc.y,Cc.z],Xd(i,Tr,Ar,Rr,wc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Mi=new oe,Rc=new ol,Tr=new oe,Ar=new oe,Rr=new oe,es=new oe,ts=new oe,Es=new oe,jo=new oe,wc=new oe,Cc=new oe,Ts=new oe;function Xd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ts.fromArray(r,c);const p=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),m=e.dot(Ts),h=i.dot(Ts),g=s.dot(Ts);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>p)return!1}return!0}const fn=new oe,Dc=new ot;let jb=0;class Ri{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=ov,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(e),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Vo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ov&&(e.usage=this.usage),e}}class kx extends Ri{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class jx extends Ri{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class wi extends Ri{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Xb=new ol,Xo=new oe,Wd=new oe;class du{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Xb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Wd)),this.expandByPoint(Xo.copy(e.center).sub(Wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Wb=0;const li=new ln,qd=new jn,wr=new oe,$n=new ol,Wo=new ol,bn=new oe;class Ci extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ab(e)?jx:kx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ft().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,s){return li.makeTranslation(e,i,s),this.applyMatrix4(li),this}scale(e,i,s){return li.makeScale(e,i,s),this.applyMatrix4(li),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new wi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];Wo.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors($n.min,Wo.min),$n.expandByPoint(bn),bn.addVectors($n.max,Wo.max),$n.expandByPoint(bn)):($n.expandByPoint(Wo.min),$n.expandByPoint(Wo.max))}$n.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,g=p.count;h<g;h++)bn.fromBufferAttribute(p,h),m&&(wr.fromBufferAttribute(e,h),bn.add(wr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let A=0;A<s.count;A++)p[A]=new oe,m[A]=new oe;const h=new oe,g=new oe,S=new oe,x=new ot,b=new ot,T=new ot,C=new oe,M=new oe;function y(A,O,he){h.fromBufferAttribute(s,A),g.fromBufferAttribute(s,O),S.fromBufferAttribute(s,he),x.fromBufferAttribute(c,A),b.fromBufferAttribute(c,O),T.fromBufferAttribute(c,he),g.sub(h),S.sub(h),b.sub(x),T.sub(x);const V=1/(b.x*T.y-T.x*b.y);isFinite(V)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(S,-b.y).multiplyScalar(V),M.copy(S).multiplyScalar(b.x).addScaledVector(g,-T.x).multiplyScalar(V),p[A].add(C),p[O].add(C),p[he].add(C),m[A].add(M),m[O].add(M),m[he].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let A=0,O=D.length;A<O;++A){const he=D[A],V=he.start,te=he.count;for(let se=V,ue=V+te;se<ue;se+=3)y(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const N=new oe,L=new oe,B=new oe,G=new oe;function k(A){B.fromBufferAttribute(l,A),G.copy(B);const O=p[A];N.copy(O),N.sub(B.multiplyScalar(B.dot(O))).normalize(),L.crossVectors(G,O);const V=L.dot(m[A])<0?-1:1;f.setXYZW(A,N.x,N.y,N.z,V)}for(let A=0,O=D.length;A<O;++A){const he=D[A],V=he.start,te=he.count;for(let se=V,ue=V+te;se<ue;se+=3)k(e.getX(se+0)),k(e.getX(se+1)),k(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,b=s.count;x<b;x++)s.setXYZ(x,0,0,0);const l=new oe,c=new oe,f=new oe,p=new oe,m=new oe,h=new oe,g=new oe,S=new oe;if(e)for(let x=0,b=e.count;x<b;x+=3){const T=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,M),g.subVectors(f,c),S.subVectors(l,c),g.cross(S),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),h.fromBufferAttribute(s,M),p.add(g),m.add(g),h.add(g),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let x=0,b=i.count;x<b;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),S.subVectors(l,c),g.cross(S),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(p,m){const h=p.array,g=p.itemSize,S=p.normalized,x=new h.constructor(m.length*g);let b=0,T=0;for(let C=0,M=m.length;C<M;C++){p.isInterleavedBufferAttribute?b=m[C]*p.data.stride+p.offset:b=m[C]*g;for(let y=0;y<g;y++)x[T++]=h[b++]}return new Ri(x,g,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let g=0,S=h.length;g<S;g++){const x=h[g],b=e(x,s);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let S=0,x=h.length;S<x;S++){const b=h[S];g.push(b.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],S=c[h];for(let x=0,b=S.length;x<b;x++)g.push(S[x].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const S=f[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let qb=0;class ll extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Or,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=uh,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ch&&(s.blendSrc=this.blendSrc),this.blendDst!==uh&&(s.blendDst=this.blendDst),this.blendEquation!==Us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ga=new oe,Yd=new oe,Nc=new oe,ns=new oe,Zd=new oe,Uc=new oe,Kd=new oe;class Xx{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ga.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Yd.copy(e).add(i).multiplyScalar(.5),Nc.copy(i).sub(e).normalize(),ns.copy(this.origin).sub(Yd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Nc),p=ns.dot(this.direction),m=-ns.dot(Nc),h=ns.lengthSq(),g=Math.abs(1-f*f);let S,x,b,T;if(g>0)if(S=f*m-p,x=f*p-m,T=c*g,S>=0)if(x>=-T)if(x<=T){const C=1/g;S*=C,x*=C,b=S*(S+f*x+2*p)+x*(f*S+x+2*m)+h}else x=c,S=Math.max(0,-(f*x+p)),b=-S*S+x*(x+2*m)+h;else x=-c,S=Math.max(0,-(f*x+p)),b=-S*S+x*(x+2*m)+h;else x<=-T?(S=Math.max(0,-(-f*c+p)),x=S>0?-c:Math.min(Math.max(-c,-m),c),b=-S*S+x*(x+2*m)+h):x<=T?(S=0,x=Math.min(Math.max(-c,-m),c),b=x*(x+2*m)+h):(S=Math.max(0,-(f*c+p)),x=S>0?c:Math.min(Math.max(-c,-m),c),b=-S*S+x*(x+2*m)+h);else x=f>0?-c:c,S=Math.max(0,-(f*x+p)),b=-S*S+x*(x+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Yd).addScaledVector(Nc,x),b}intersectSphere(e,i){ga.subVectors(e.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,x=this.origin;return h>=0?(s=(e.min.x-x.x)*h,l=(e.max.x-x.x)*h):(s=(e.max.x-x.x)*h,l=(e.min.x-x.x)*h),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),S>=0?(p=(e.min.z-x.z)*S,m=(e.max.z-x.z)*S):(p=(e.max.z-x.z)*S,m=(e.min.z-x.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,i,s,l,c){Zd.subVectors(i,e),Uc.subVectors(s,e),Kd.crossVectors(Zd,Uc);let f=this.direction.dot(Kd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ns.subVectors(this.origin,e);const m=p*this.direction.dot(Uc.crossVectors(ns,Uc));if(m<0)return null;const h=p*this.direction.dot(Zd.cross(ns));if(h<0||m+h>f)return null;const g=-p*ns.dot(Kd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wx extends ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bv=new ln,As=new Xx,Lc=new du,Ev=new oe,Oc=new oe,Pc=new oe,Ic=new oe,Qd=new oe,Fc=new oe,Tv=new oe,Bc=new oe;class di extends jn{constructor(e=new Ci,i=new Wx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Fc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=p[m],S=c[m];g!==0&&(Qd.fromBufferAttribute(S,e),f?Fc.addScaledVector(Qd,g):Fc.addScaledVector(Qd.sub(i),g))}i.add(Fc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(c),As.copy(e.ray).recast(e.near),!(Lc.containsPoint(As.origin)===!1&&(As.intersectSphere(Lc,Ev)===null||As.origin.distanceToSquared(Ev)>(e.far-e.near)**2))&&(bv.copy(c).invert(),As.copy(e.ray).applyMatrix4(bv),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,As)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,S=c.attributes.normal,x=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(f))for(let T=0,C=x.length;T<C;T++){const M=x[T],y=f[M.materialIndex],D=Math.max(M.start,b.start),N=Math.min(p.count,Math.min(M.start+M.count,b.start+b.count));for(let L=D,B=N;L<B;L+=3){const G=p.getX(L),k=p.getX(L+1),A=p.getX(L+2);l=zc(this,y,e,s,h,g,S,G,k,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),C=Math.min(p.count,b.start+b.count);for(let M=T,y=C;M<y;M+=3){const D=p.getX(M),N=p.getX(M+1),L=p.getX(M+2);l=zc(this,f,e,s,h,g,S,D,N,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,C=x.length;T<C;T++){const M=x[T],y=f[M.materialIndex],D=Math.max(M.start,b.start),N=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let L=D,B=N;L<B;L+=3){const G=L,k=L+1,A=L+2;l=zc(this,y,e,s,h,g,S,G,k,A),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let M=T,y=C;M<y;M+=3){const D=M,N=M+1,L=M+2;l=zc(this,f,e,s,h,g,S,D,N,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Yb(r,e,i,s,l,c,f,p){let m;if(e.side===kn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===os,p),m===null)return null;Bc.copy(p),Bc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Bc);return h<i.near||h>i.far?null:{distance:h,point:Bc.clone(),object:r}}function zc(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Oc),r.getVertexPosition(m,Pc),r.getVertexPosition(h,Ic);const g=Yb(r,e,i,s,Oc,Pc,Ic,Tv);if(g){const S=new oe;Ei.getBarycoord(Tv,Oc,Pc,Ic,S),l&&(g.uv=Ei.getInterpolatedAttribute(l,p,m,h,S,new ot)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,p,m,h,S,new ot)),f&&(g.normal=Ei.getInterpolatedAttribute(f,p,m,h,S,new oe),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:p,b:m,c:h,normal:new oe,materialIndex:0};Ei.getNormal(Oc,Pc,Ic,x.normal),g.face=x,g.barycoord=S}return g}class qx extends On{constructor(e=null,i=1,s=1,l,c,f,p,m,h=Rn,g=Rn,S,x){super(null,f,p,m,h,g,l,c,S,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jd=new oe,Zb=new oe,Kb=new ft;class Ns{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Jd.subVectors(s,i).cross(Zb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Jd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Kb.getNormalMatrix(e),l=this.coplanarPoint(Jd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new du,Qb=new ot(.5,.5),Hc=new oe;class Yx{constructor(e=new Ns,i=new Ns,s=new Ns,l=new Ns,c=new Ns,f=new Ns){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Gi,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],g=c[4],S=c[5],x=c[6],b=c[7],T=c[8],C=c[9],M=c[10],y=c[11],D=c[12],N=c[13],L=c[14],B=c[15];if(l[0].setComponents(h-f,b-g,y-T,B-D).normalize(),l[1].setComponents(h+f,b+g,y+T,B+D).normalize(),l[2].setComponents(h+p,b+S,y+C,B+N).normalize(),l[3].setComponents(h-p,b-S,y-C,B-N).normalize(),s)l[4].setComponents(m,x,M,L).normalize(),l[5].setComponents(h-m,b-x,y-M,B-L).normalize();else if(l[4].setComponents(h-m,b-x,y-M,B-L).normalize(),i===Gi)l[5].setComponents(h+m,b+x,y+M,B+L).normalize();else if(i===iu)l[5].setComponents(m,x,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);const i=Qb.distanceTo(e.center);return Rs.radius=.7071067811865476+i,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Hc.x=l.normal.x>0?e.max.x:e.min.x,Hc.y=l.normal.y>0?e.max.y:e.min.y,Hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jb extends ll{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ru=new oe,ou=new oe,Av=new ln,qo=new Xx,Gc=new du,$d=new oe,Rv=new oe;class $b extends jn{constructor(e=new Ci,i=new Jb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ru.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ru.distanceTo(ou);e.setAttribute("lineDistance",new wi(s,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,e.ray.intersectsSphere(Gc)===!1)return;Av.copy(l).invert(),qo.copy(e.ray).applyMatrix4(Av);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const b=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let C=b,M=T-1;C<M;C+=h){const y=g.getX(C),D=g.getX(C+1),N=Vc(this,e,qo,m,y,D,C);N&&i.push(N)}if(this.isLineLoop){const C=g.getX(T-1),M=g.getX(b),y=Vc(this,e,qo,m,C,M,T-1);y&&i.push(y)}}else{const b=Math.max(0,f.start),T=Math.min(x.count,f.start+f.count);for(let C=b,M=T-1;C<M;C+=h){const y=Vc(this,e,qo,m,C,C+1,C);y&&i.push(y)}if(this.isLineLoop){const C=Vc(this,e,qo,m,T-1,b,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Vc(r,e,i,s,l,c,f){const p=r.geometry.attributes.position;if(ru.fromBufferAttribute(p,l),ou.fromBufferAttribute(p,c),i.distanceSqToSegment(ru,ou,$d,Rv)>s)return;$d.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo($d);if(!(h<e.near||h>e.far))return{distance:h,point:Rv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const wv=new oe,Cv=new oe;class eE extends $b{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)wv.fromBufferAttribute(i,l),Cv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+wv.distanceTo(Cv);e.setAttribute("lineDistance",new wi(s,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zx extends On{constructor(e=[],i=Fs,s,l,c,f,p,m,h,g){super(e,i,s,l,c,f,p,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nl extends On{constructor(e,i,s=ji,l,c,f,p=Rn,m=Rn,h,g=ba,S=1){if(g!==ba&&g!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:S};super(x,l,c,f,p,m,g,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tE extends nl{constructor(e,i=ji,s=Fs,l,c,f=Rn,p=Rn,m,h=ba){const g={width:e,height:e,depth:1},S=[g,g,g,g,g,g];super(e,e,i,s,l,c,f,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kx extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cl extends Ci{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],g=[],S=[];let x=0,b=0;T("z","y","x",-1,-1,s,i,e,f,c,0),T("z","y","x",1,-1,s,i,-e,f,c,1),T("x","z","y",1,1,e,s,i,l,f,2),T("x","z","y",1,-1,e,s,-i,l,f,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new wi(h,3)),this.setAttribute("normal",new wi(g,3)),this.setAttribute("uv",new wi(S,2));function T(C,M,y,D,N,L,B,G,k,A,O){const he=L/k,V=B/A,te=L/2,se=B/2,ue=G/2,Q=k+1,I=A+1;let H=0,de=0;const ve=new oe;for(let P=0;P<I;P++){const K=P*V-se;for(let pe=0;pe<Q;pe++){const Se=pe*he-te;ve[C]=Se*D,ve[M]=K*N,ve[y]=ue,h.push(ve.x,ve.y,ve.z),ve[C]=0,ve[M]=0,ve[y]=G>0?1:-1,g.push(ve.x,ve.y,ve.z),S.push(pe/k),S.push(1-P/A),H+=1}}for(let P=0;P<A;P++)for(let K=0;K<k;K++){const pe=x+K+Q*P,Se=x+K+Q*(P+1),Ue=x+(K+1)+Q*(P+1),Ye=x+(K+1)+Q*P;m.push(pe,Se,Ye),m.push(Se,Ue,Ye),de+=6}p.addGroup(b,de,O),b+=de,x+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Is extends Ci{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,g=m+1,S=e/p,x=i/m,b=[],T=[],C=[],M=[];for(let y=0;y<g;y++){const D=y*x-f;for(let N=0;N<h;N++){const L=N*S-c;T.push(L,-D,0),C.push(0,0,1),M.push(N/p),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let D=0;D<p;D++){const N=D+h*y,L=D+h*(y+1),B=D+1+h*(y+1),G=D+1+h*y;b.push(N,L,G),b.push(L,B,G)}this.setIndex(b),this.setAttribute("position",new wi(T,3)),this.setAttribute("normal",new wi(C,3)),this.setAttribute("uv",new wi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}function Hr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(r){const e={};for(let i=0;i<r.length;i++){const s=Hr(r[i]);for(const l in s)e[l]=s[l]}return e}function nE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Qx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const iE={clone:Hr,merge:Ln};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=nE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Qo extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rE extends ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oE extends ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kc=new oe,jc=new jr,Bi=new oe;class lu extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,jc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,jc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(kc,jc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,jc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new oe,Dv=new ot,Nv=new ot;class bi extends lu{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Jh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jh*2*Math.atan(Math.tan(Cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,i){return this.getViewBounds(e,Dv,Nv),i.subVectors(Nv,Dv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Cd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Jx extends lu{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Cr=-90,Dr=1;class lE extends jn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(Cr,Dr,e,i);l.layers=this.layers,this.add(l);const c=new bi(Cr,Dr,e,i);c.layers=this.layers,this.add(c);const f=new bi(Cr,Dr,e,i);f.layers=this.layers,this.add(f);const p=new bi(Cr,Dr,e,i);p.layers=this.layers,this.add(p);const m=new bi(Cr,Dr,e,i);m.layers=this.layers,this.add(m);const h=new bi(Cr,Dr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===iu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,g]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(S,x,b),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class cE extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Uv(r,e,i,s){const l=fE(s);switch(i){case Ix:return r*e;case Bx:return r*e/l.components*l.byteLength;case fp:return r*e/l.components*l.byteLength;case Br:return r*e*2/l.components*l.byteLength;case dp:return r*e*2/l.components*l.byteLength;case Fx:return r*e*3/l.components*l.byteLength;case fi:return r*e*4/l.components*l.byteLength;case hp:return r*e*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yh:case bh:return Math.max(r,16)*Math.max(e,8)/4;case Sh:case Mh:return Math.max(r,8)*Math.max(e,8)/2;case Eh:case Th:case Rh:case wh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ah:case Ch:case Dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case kh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Xh:case Wh:case qh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Yh:case Zh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Kh:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fE(r){switch(r){case ui:case Ux:return{byteLength:1,components:1};case el:case Lx:case Xi:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case ji:case lp:case Ti:return{byteLength:4,components:1};case Ox:case Px:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $x(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function dE(r){const e=new WeakMap;function i(p,m){const h=p.array,g=p.usage,S=h.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,h,g),p.onUploadCallback();let b;if(h instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=r.SHORT;else if(h instanceof Uint32Array)b=r.UNSIGNED_INT;else if(h instanceof Int32Array)b=r.INT;else if(h instanceof Int8Array)b=r.BYTE;else if(h instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,h){const g=m.array,S=m.updateRanges;if(r.bindBuffer(h,p),S.length===0)r.bufferSubData(h,0,g);else{S.sort((b,T)=>b.start-T.start);let x=0;for(let b=1;b<S.length;b++){const T=S[x],C=S[b];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,S[x]=C)}S.length=x+1;for(let b=0,T=S.length;b<T;b++){const C=S[b];r.bufferSubData(h,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var hE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pE=`#ifdef USE_ALPHAHASH
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
#endif`,mE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_E=`#ifdef USE_AOMAP
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
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yE=`#ifdef USE_BATCHING
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
#endif`,ME=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AE=`#ifdef USE_IRIDESCENCE
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
#endif`,RE=`#ifdef USE_BUMPMAP
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
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,IE=`#define PI 3.141592653589793
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
} // validated`,FE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BE=`vec3 transformedNormal = objectNormal;
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
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kE="gl_FragColor = linearToOutputTexel( gl_FragColor );",jE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XE=`#ifdef USE_ENVMAP
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
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$E=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eT=`#ifdef USE_GRADIENTMAP
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
}`,tT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aT=`uniform bool receiveShadow;
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
#endif`,sT=`#ifdef USE_ENVMAP
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
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uT=`PhysicalMaterial material;
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
#endif`,fT=`uniform sampler2D dfgLUT;
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
}`,dT=`
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
#endif`,hT=`#if defined( RE_IndirectDiffuse )
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
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ST=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MT=`#if defined( USE_POINTS_UV )
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
#endif`,bT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ET=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`#ifdef USE_MORPHTARGETS
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
#endif`,CT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PT=`#ifdef USE_NORMALMAP
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
#endif`,IT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QT=`float getShadowMask() {
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
}`,JT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,e1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#ifdef USE_TRANSMISSION
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`#include <common>
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
}`,_1=`#if DEPTH_PACKING == 3200
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
}`,S1=`#define DISTANCE
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
}`,y1=`#define DISTANCE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`uniform float scale;
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
}`,T1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,R1=`uniform vec3 diffuse;
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
}`,w1=`#define LAMBERT
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
}`,C1=`#define LAMBERT
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
}`,D1=`#define MATCAP
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
}`,N1=`#define MATCAP
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
}`,U1=`#define NORMAL
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
}`,L1=`#define NORMAL
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
}`,O1=`#define PHONG
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
}`,P1=`#define PHONG
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
}`,I1=`#define STANDARD
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
}`,F1=`#define STANDARD
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
}`,B1=`#define TOON
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
}`,z1=`#define TOON
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
}`,H1=`uniform float size;
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,k1=`uniform vec3 color;
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
}`,j1=`uniform float rotation;
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
}`,X1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:hE,alphahash_pars_fragment:pE,alphamap_fragment:mE,alphamap_pars_fragment:gE,alphatest_fragment:vE,alphatest_pars_fragment:xE,aomap_fragment:_E,aomap_pars_fragment:SE,batching_pars_vertex:yE,batching_vertex:ME,begin_vertex:bE,beginnormal_vertex:EE,bsdfs:TE,iridescence_fragment:AE,bumpmap_pars_fragment:RE,clipping_planes_fragment:wE,clipping_planes_pars_fragment:CE,clipping_planes_pars_vertex:DE,clipping_planes_vertex:NE,color_fragment:UE,color_pars_fragment:LE,color_pars_vertex:OE,color_vertex:PE,common:IE,cube_uv_reflection_fragment:FE,defaultnormal_vertex:BE,displacementmap_pars_vertex:zE,displacementmap_vertex:HE,emissivemap_fragment:GE,emissivemap_pars_fragment:VE,colorspace_fragment:kE,colorspace_pars_fragment:jE,envmap_fragment:XE,envmap_common_pars_fragment:WE,envmap_pars_fragment:qE,envmap_pars_vertex:YE,envmap_physical_pars_fragment:sT,envmap_vertex:ZE,fog_vertex:KE,fog_pars_vertex:QE,fog_fragment:JE,fog_pars_fragment:$E,gradientmap_pars_fragment:eT,lightmap_pars_fragment:tT,lights_lambert_fragment:nT,lights_lambert_pars_fragment:iT,lights_pars_begin:aT,lights_toon_fragment:rT,lights_toon_pars_fragment:oT,lights_phong_fragment:lT,lights_phong_pars_fragment:cT,lights_physical_fragment:uT,lights_physical_pars_fragment:fT,lights_fragment_begin:dT,lights_fragment_maps:hT,lights_fragment_end:pT,logdepthbuf_fragment:mT,logdepthbuf_pars_fragment:gT,logdepthbuf_pars_vertex:vT,logdepthbuf_vertex:xT,map_fragment:_T,map_pars_fragment:ST,map_particle_fragment:yT,map_particle_pars_fragment:MT,metalnessmap_fragment:bT,metalnessmap_pars_fragment:ET,morphinstance_vertex:TT,morphcolor_vertex:AT,morphnormal_vertex:RT,morphtarget_pars_vertex:wT,morphtarget_vertex:CT,normal_fragment_begin:DT,normal_fragment_maps:NT,normal_pars_fragment:UT,normal_pars_vertex:LT,normal_vertex:OT,normalmap_pars_fragment:PT,clearcoat_normal_fragment_begin:IT,clearcoat_normal_fragment_maps:FT,clearcoat_pars_fragment:BT,iridescence_pars_fragment:zT,opaque_fragment:HT,packing:GT,premultiplied_alpha_fragment:VT,project_vertex:kT,dithering_fragment:jT,dithering_pars_fragment:XT,roughnessmap_fragment:WT,roughnessmap_pars_fragment:qT,shadowmap_pars_fragment:YT,shadowmap_pars_vertex:ZT,shadowmap_vertex:KT,shadowmask_pars_fragment:QT,skinbase_vertex:JT,skinning_pars_vertex:$T,skinning_vertex:e1,skinnormal_vertex:t1,specularmap_fragment:n1,specularmap_pars_fragment:i1,tonemapping_fragment:a1,tonemapping_pars_fragment:s1,transmission_fragment:r1,transmission_pars_fragment:o1,uv_pars_fragment:l1,uv_pars_vertex:c1,uv_vertex:u1,worldpos_vertex:f1,background_vert:d1,background_frag:h1,backgroundCube_vert:p1,backgroundCube_frag:m1,cube_vert:g1,cube_frag:v1,depth_vert:x1,depth_frag:_1,distance_vert:S1,distance_frag:y1,equirect_vert:M1,equirect_frag:b1,linedashed_vert:E1,linedashed_frag:T1,meshbasic_vert:A1,meshbasic_frag:R1,meshlambert_vert:w1,meshlambert_frag:C1,meshmatcap_vert:D1,meshmatcap_frag:N1,meshnormal_vert:U1,meshnormal_frag:L1,meshphong_vert:O1,meshphong_frag:P1,meshphysical_vert:I1,meshphysical_frag:F1,meshtoon_vert:B1,meshtoon_frag:z1,points_vert:H1,points_frag:G1,shadow_vert:V1,shadow_frag:k1,sprite_vert:j1,sprite_frag:X1},Oe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Hi={basic:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Ln([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Ln([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Ln([Oe.points,Oe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Ln([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Ln([Oe.common,Oe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Ln([Oe.sprite,Oe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Ln([Oe.common,Oe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Ln([Oe.lights,Oe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Hi.physical={uniforms:Ln([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Xc={r:0,b:0,g:0},ws=new Ea,W1=new ln;function q1(r,e,i,s,l,c){const f=new Lt(0);let p=l===!0?0:1,m,h,g=null,S=0,x=null;function b(D){let N=D.isScene===!0?D.background:null;if(N&&N.isTexture){const L=D.backgroundBlurriness>0;N=e.get(N,L)}return N}function T(D){let N=!1;const L=b(D);L===null?M(f,p):L&&L.isColor&&(M(L,1),N=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(D,N){const L=b(N);L&&(L.isCubeTexture||L.mapping===fu)?(h===void 0&&(h=new di(new cl(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Hr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,G,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ws.copy(N.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(W1.makeRotationFromEuler(ws)),h.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Bt,(g!==L||S!==L.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,g=L,S=L.version,x=r.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new di(new Is(2,2),new Wi({name:"BackgroundMaterial",uniforms:Hr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||S!==L.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=L,S=L.version,x=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,N){D.getRGB(Xc,Qx(r)),i.buffers.color.setClear(Xc.r,Xc.g,Xc.b,N,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,N=1){f.set(D),p=N,M(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,M(f,p)},render:T,addToRenderList:C,dispose:y}}function Y1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function p(V,te,se,ue,Q){let I=!1;const H=S(V,ue,se,te);c!==H&&(c=H,h(c.object)),I=b(V,ue,se,Q),I&&T(V,ue,se,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,L(V,te,se,ue),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return r.createVertexArray()}function h(V){return r.bindVertexArray(V)}function g(V){return r.deleteVertexArray(V)}function S(V,te,se,ue){const Q=ue.wireframe===!0;let I=s[te.id];I===void 0&&(I={},s[te.id]=I);const H=V.isInstancedMesh===!0?V.id:0;let de=I[H];de===void 0&&(de={},I[H]=de);let ve=de[se.id];ve===void 0&&(ve={},de[se.id]=ve);let P=ve[Q];return P===void 0&&(P=x(m()),ve[Q]=P),P}function x(V){const te=[],se=[],ue=[];for(let Q=0;Q<i;Q++)te[Q]=0,se[Q]=0,ue[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:se,attributeDivisors:ue,object:V,attributes:{},index:null}}function b(V,te,se,ue){const Q=c.attributes,I=te.attributes;let H=0;const de=se.getAttributes();for(const ve in de)if(de[ve].location>=0){const K=Q[ve];let pe=I[ve];if(pe===void 0&&(ve==="instanceMatrix"&&V.instanceMatrix&&(pe=V.instanceMatrix),ve==="instanceColor"&&V.instanceColor&&(pe=V.instanceColor)),K===void 0||K.attribute!==pe||pe&&K.data!==pe.data)return!0;H++}return c.attributesNum!==H||c.index!==ue}function T(V,te,se,ue){const Q={},I=te.attributes;let H=0;const de=se.getAttributes();for(const ve in de)if(de[ve].location>=0){let K=I[ve];K===void 0&&(ve==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),ve==="instanceColor"&&V.instanceColor&&(K=V.instanceColor));const pe={};pe.attribute=K,K&&K.data&&(pe.data=K.data),Q[ve]=pe,H++}c.attributes=Q,c.attributesNum=H,c.index=ue}function C(){const V=c.newAttributes;for(let te=0,se=V.length;te<se;te++)V[te]=0}function M(V){y(V,0)}function y(V,te){const se=c.newAttributes,ue=c.enabledAttributes,Q=c.attributeDivisors;se[V]=1,ue[V]===0&&(r.enableVertexAttribArray(V),ue[V]=1),Q[V]!==te&&(r.vertexAttribDivisor(V,te),Q[V]=te)}function D(){const V=c.newAttributes,te=c.enabledAttributes;for(let se=0,ue=te.length;se<ue;se++)te[se]!==V[se]&&(r.disableVertexAttribArray(se),te[se]=0)}function N(V,te,se,ue,Q,I,H){H===!0?r.vertexAttribIPointer(V,te,se,Q,I):r.vertexAttribPointer(V,te,se,ue,Q,I)}function L(V,te,se,ue){C();const Q=ue.attributes,I=se.getAttributes(),H=te.defaultAttributeValues;for(const de in I){const ve=I[de];if(ve.location>=0){let P=Q[de];if(P===void 0&&(de==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),de==="instanceColor"&&V.instanceColor&&(P=V.instanceColor)),P!==void 0){const K=P.normalized,pe=P.itemSize,Se=e.get(P);if(Se===void 0)continue;const Ue=Se.buffer,Ye=Se.type,ee=Se.bytesPerElement,be=Ye===r.INT||Ye===r.UNSIGNED_INT||P.gpuType===lp;if(P.isInterleavedBufferAttribute){const ye=P.data,Je=ye.stride,Ke=P.offset;if(ye.isInstancedInterleavedBuffer){for(let $e=0;$e<ve.locationSize;$e++)y(ve.location+$e,ye.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let $e=0;$e<ve.locationSize;$e++)M(ve.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let $e=0;$e<ve.locationSize;$e++)N(ve.location+$e,pe/ve.locationSize,Ye,K,Je*ee,(Ke+pe/ve.locationSize*$e)*ee,be)}else{if(P.isInstancedBufferAttribute){for(let ye=0;ye<ve.locationSize;ye++)y(ve.location+ye,P.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ye=0;ye<ve.locationSize;ye++)M(ve.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let ye=0;ye<ve.locationSize;ye++)N(ve.location+ye,pe/ve.locationSize,Ye,K,pe*ee,pe/ve.locationSize*ye*ee,be)}}else if(H!==void 0){const K=H[de];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(ve.location,K);break;case 3:r.vertexAttrib3fv(ve.location,K);break;case 4:r.vertexAttrib4fv(ve.location,K);break;default:r.vertexAttrib1fv(ve.location,K)}}}}D()}function B(){O();for(const V in s){const te=s[V];for(const se in te){const ue=te[se];for(const Q in ue){const I=ue[Q];for(const H in I)g(I[H].object),delete I[H];delete ue[Q]}}delete s[V]}}function G(V){if(s[V.id]===void 0)return;const te=s[V.id];for(const se in te){const ue=te[se];for(const Q in ue){const I=ue[Q];for(const H in I)g(I[H].object),delete I[H];delete ue[Q]}}delete s[V.id]}function k(V){for(const te in s){const se=s[te];for(const ue in se){const Q=se[ue];if(Q[V.id]===void 0)continue;const I=Q[V.id];for(const H in I)g(I[H].object),delete I[H];delete Q[V.id]}}}function A(V){for(const te in s){const se=s[te],ue=V.isInstancedMesh===!0?V.id:0,Q=se[ue];if(Q!==void 0){for(const I in Q){const H=Q[I];for(const de in H)g(H[de].object),delete H[de];delete Q[I]}delete se[ue],Object.keys(se).length===0&&delete s[te]}}}function O(){he(),f=!0,c!==l&&(c=l,h(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:he,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfObject:A,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:M,disableUnusedAttributes:D}}function Z1(r,e,i){let s;function l(h){s=h}function c(h,g){r.drawArrays(s,h,g),i.update(g,s,1)}function f(h,g,S){S!==0&&(r.drawArraysInstanced(s,h,g,S),i.update(g,s,S))}function p(h,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,g,0,S);let b=0;for(let T=0;T<S;T++)b+=g[T];i.update(b,s,1)}function m(h,g,S,x){if(S===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let T=0;T<h.length;T++)f(h[T],g[T],x[T]);else{b.multiDrawArraysInstancedWEBGL(s,h,0,g,0,x,0,S);let T=0;for(let C=0;C<S;C++)T+=g[C]*x[C];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function K1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(k){return!(k!==fi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(k){const A=k===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ui&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ti&&!A)}function m(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(at("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const S=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),G=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:b,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:L,maxSamples:B,samples:G}}function Q1(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Ns,p=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const b=S.length!==0||x||s!==0||l;return l=x,s=S.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,x){i=g(S,x,0)},this.setState=function(S,x,b){const T=S.clippingPlanes,C=S.clipIntersection,M=S.clipShadows,y=r.get(S);if(!l||T===null||T.length===0||c&&!M)c?g(null):h();else{const D=c?0:s,N=D*4;let L=y.clippingState||null;m.value=L,L=g(T,x,N,b);for(let B=0;B!==N;++B)L[B]=i[B];y.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(S,x,b,T){const C=S!==null?S.length:0;let M=null;if(C!==0){if(M=m.value,T!==!0||M===null){const y=b+C*4,D=x.matrixWorldInverse;p.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let N=0,L=b;N!==C;++N,L+=4)f.copy(S[N]).applyMatrix4(D,p),f.normal.toArray(M,L),M[L+3]=f.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const rs=4,Lv=[.125,.215,.35,.446,.526,.582],Ls=20,J1=256,Yo=new Jx,Ov=new Lt;let eh=null,th=0,nh=0,ih=!1;const $1=new oe;class Pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=$1}=c;eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Fs||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Xi,format:fi,colorSpace:zr,depthBuffer:!1},l=Iv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eA(c)),this._blurMaterial=nA(c,e,i),this._ggxMaterial=tA(c,e,i)}return l}_compileMaterial(e){const i=new di(new Ci,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,s,l,c){const m=new bi(90,1,i,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,b=S.toneMapping;S.getClearColor(Ov),S.toneMapping=Vi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new cl,new Wx({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let y=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,y=!0):(M.color.copy(Ov),y=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):L===1?(m.up.set(0,0,h[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const B=this._cubeSize;Nr(l,L*B,N>2?B:0,B,B),S.setRenderTarget(l),y&&S.render(C,m),S.render(e,m)}S.toneMapping=b,S.autoClear=x,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Fs||e.mapping===Fr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Nr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Yo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-g*g),x=0+h*1.25,b=S*x,{_lodMax:T}=this,C=this._sizeLods[s],M=3*C*(s>T-rs?s-T+rs:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=T-i,Nr(c,M,y,3*C,2*C),l.setRenderTarget(c),l.render(p,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Nr(e,M,y,3*C,2*C),l.setRenderTarget(e),l.render(p,Yo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const g=3,S=this._lodMeshes[l];S.material=h;const x=h.uniforms,b=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Ls-1),C=c/T,M=isFinite(c)?1+Math.floor(g*C):Ls;M>Ls&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ls}`);const y=[];let D=0;for(let k=0;k<Ls;++k){const A=k/C,O=Math.exp(-A*A/2);y.push(O),k===0?D+=O:k<M&&(D+=2*O)}for(let k=0;k<y.length;k++)y[k]=y[k]/D;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=y,x.latitudinal.value=f==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:N}=this;x.dTheta.value=T,x.mipInt.value=N-s;const L=this._sizeLods[l],B=3*L*(l>N-rs?l-N+rs:0),G=4*(this._cubeSize-L);Nr(i,B,G,3*L,2*L),m.setRenderTarget(i),m.render(S,Yo)}}function eA(r){const e=[],i=[],s=[];let l=r;const c=r-rs+1+Lv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-rs?m=Lv[f-r+rs-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),g=-h,S=1+h,x=[g,g,S,g,S,S,g,g,S,S,g,S],b=6,T=6,C=3,M=2,y=1,D=new Float32Array(C*T*b),N=new Float32Array(M*T*b),L=new Float32Array(y*T*b);for(let G=0;G<b;G++){const k=G%3*2/3-1,A=G>2?0:-1,O=[k,A,0,k+2/3,A,0,k+2/3,A+1,0,k,A,0,k+2/3,A+1,0,k,A+1,0];D.set(O,C*T*G),N.set(x,M*T*G);const he=[G,G,G,G,G,G];L.set(he,y*T*G)}const B=new Ci;B.setAttribute("position",new Ri(D,C)),B.setAttribute("uv",new Ri(N,M)),B.setAttribute("faceIndex",new Ri(L,y)),s.push(new di(B,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Iv(r,e,i){const s=new Ai(r,e,i);return s.texture.mapping=fu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function tA(r,e,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function nA(r,e,i){const s=new Float32Array(Ls),l=new oe(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Fv(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Bv(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}class e_ extends Ai{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Zx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Hr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Sa});c.uniforms.tEquirect.value=i;const f=new di(l,c),p=i.minFilter;return i.minFilter===Os&&(i.minFilter=dn),new lE(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function iA(r){let e=new WeakMap,i=new WeakMap,s=null;function l(x,b=!1){return x==null?null:b?f(x):c(x)}function c(x){if(x&&x.isTexture){const b=x.mapping;if(b===Ad||b===Rd)if(e.has(x)){const T=e.get(x).texture;return p(T,x.mapping)}else{const T=x.image;if(T&&T.height>0){const C=new e_(T.height);return C.fromEquirectangularTexture(r,x),e.set(x,C),x.addEventListener("dispose",h),p(C.texture,x.mapping)}else return null}}return x}function f(x){if(x&&x.isTexture){const b=x.mapping,T=b===Ad||b===Rd,C=b===Fs||b===Fr;if(T||C){let M=i.get(x);const y=M!==void 0?M.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return s===null&&(s=new Pv(r)),M=T?s.fromEquirectangular(x,M):s.fromCubemap(x,M),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),M.texture;if(M!==void 0)return M.texture;{const D=x.image;return T&&D&&D.height>0||C&&D&&m(D)?(s===null&&(s=new Pv(r)),M=T?s.fromEquirectangular(x):s.fromCubemap(x),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),x.addEventListener("dispose",g),M.texture):null}}}return x}function p(x,b){return b===Ad?x.mapping=Fs:b===Rd&&(x.mapping=Fr),x}function m(x){let b=0;const T=6;for(let C=0;C<T;C++)x[C]!==void 0&&b++;return b===T}function h(x){const b=x.target;b.removeEventListener("dispose",h);const T=e.get(b);T!==void 0&&(e.delete(b),T.dispose())}function g(x){const b=x.target;b.removeEventListener("dispose",g);const T=i.get(b);T!==void 0&&(i.delete(b),T.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function aA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&su("WebGLRenderer: "+s+" extension not supported."),l}}}function sA(r,e,i,s){const l={},c=new WeakMap;function f(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete l[x.id];const b=c.get(x);b&&(e.remove(b),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(S,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(S){const x=S.attributes;for(const b in x)e.update(x[b],r.ARRAY_BUFFER)}function h(S){const x=[],b=S.index,T=S.attributes.position;let C=0;if(T===void 0)return;if(b!==null){const D=b.array;C=b.version;for(let N=0,L=D.length;N<L;N+=3){const B=D[N+0],G=D[N+1],k=D[N+2];x.push(B,G,G,k,k,B)}}else{const D=T.array;C=T.version;for(let N=0,L=D.length/3-1;N<L;N+=3){const B=N+0,G=N+1,k=N+2;x.push(B,G,G,k,k,B)}}const M=new(T.count>=65535?jx:kx)(x,1);M.version=C;const y=c.get(S);y&&e.remove(y),c.set(S,M)}function g(S){const x=c.get(S);if(x){const b=S.index;b!==null&&x.version<b.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:g}}function rA(r,e,i){let s;function l(x){s=x}let c,f;function p(x){c=x.type,f=x.bytesPerElement}function m(x,b){r.drawElements(s,b,c,x*f),i.update(b,s,1)}function h(x,b,T){T!==0&&(r.drawElementsInstanced(s,b,c,x*f,T),i.update(b,s,T))}function g(x,b,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,c,x,0,T);let M=0;for(let y=0;y<T;y++)M+=b[y];i.update(M,s,1)}function S(x,b,T,C){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<x.length;y++)h(x[y]/f,b[y],C[y]);else{M.multiDrawElementsInstancedWEBGL(s,b,0,c,x,0,C,0,T);let y=0;for(let D=0;D<T;D++)y+=b[D]*C[D];i.update(y,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=S}function oA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function lA(r,e,i){const s=new WeakMap,l=new tn;function c(f,p,m){const h=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=g!==void 0?g.length:0;let x=s.get(p);if(x===void 0||x.count!==S){let he=function(){A.dispose(),s.delete(p),p.removeEventListener("dispose",he)};var b=he;x!==void 0&&x.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let L=0;T===!0&&(L=1),C===!0&&(L=2),M===!0&&(L=3);let B=p.attributes.position.count*L,G=1;B>e.maxTextureSize&&(G=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const k=new Float32Array(B*G*4*S),A=new Hx(k,B,G,S);A.type=Ti,A.needsUpdate=!0;const O=L*4;for(let V=0;V<S;V++){const te=y[V],se=D[V],ue=N[V],Q=B*G*4*V;for(let I=0;I<te.count;I++){const H=I*O;T===!0&&(l.fromBufferAttribute(te,I),k[Q+H+0]=l.x,k[Q+H+1]=l.y,k[Q+H+2]=l.z,k[Q+H+3]=0),C===!0&&(l.fromBufferAttribute(se,I),k[Q+H+4]=l.x,k[Q+H+5]=l.y,k[Q+H+6]=l.z,k[Q+H+7]=0),M===!0&&(l.fromBufferAttribute(ue,I),k[Q+H+8]=l.x,k[Q+H+9]=l.y,k[Q+H+10]=l.z,k[Q+H+11]=ue.itemSize===4?l.w:1)}}x={count:S,texture:A,size:new ot(B,G)},s.set(p,x),p.addEventListener("dispose",he)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let M=0;M<h.length;M++)T+=h[M];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function cA(r,e,i,s,l){let c=new WeakMap;function f(h){const g=l.render.frame,S=h.geometry,x=e.get(h,S);if(c.get(x)!==g&&(e.update(x),c.set(x,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==g&&(b.update(),c.set(b,g))}return x}function p(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const uA={[Ex]:"LINEAR_TONE_MAPPING",[Tx]:"REINHARD_TONE_MAPPING",[Ax]:"CINEON_TONE_MAPPING",[Rx]:"ACES_FILMIC_TONE_MAPPING",[Cx]:"AGX_TONE_MAPPING",[Dx]:"NEUTRAL_TONE_MAPPING",[wx]:"CUSTOM_TONE_MAPPING"};function fA(r,e,i,s,l){const c=new Ai(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Ai(e,i,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),p=new Ci;p.setAttribute("position",new wi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new wi([0,2,0,0,2,0],2));const m=new Qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new di(p,m),g=new Jx(-1,1,1,-1,0,1);let S=null,x=null,b=!1,T,C=null,M=[],y=!1;this.setSize=function(D,N){c.setSize(D,N),f.setSize(D,N);for(let L=0;L<M.length;L++){const B=M[L];B.setSize&&B.setSize(D,N)}},this.setEffects=function(D){M=D,y=M.length>0&&M[0].isRenderPass===!0;const N=c.width,L=c.height;for(let B=0;B<M.length;B++){const G=M[B];G.setSize&&G.setSize(N,L)}},this.begin=function(D,N){if(b||D.toneMapping===Vi&&M.length===0)return!1;if(C=N,N!==null){const L=N.width,B=N.height;(c.width!==L||c.height!==B)&&this.setSize(L,B)}return y===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Vi,!0},this.hasRenderPass=function(){return y},this.end=function(D,N){D.toneMapping=T,b=!0;let L=c,B=f;for(let G=0;G<M.length;G++){const k=M[G];if(k.enabled!==!1&&(k.render(D,B,L,N),k.needsSwap!==!1)){const A=L;L=B,B=A}}if(S!==D.outputColorSpace||x!==D.toneMapping){S=D.outputColorSpace,x=D.toneMapping,m.defines={},Tt.getTransfer(S)===Bt&&(m.defines.SRGB_TRANSFER="");const G=uA[x];G&&(m.defines[G]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(C),D.render(h,g),C=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const t_=new On,$h=new nl(1,1),n_=new Hx,i_=new Ib,a_=new Zx,zv=[],Hv=[],Gv=new Float32Array(16),Vv=new Float32Array(9),kv=new Float32Array(4);function Xr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=zv[l];if(c===void 0&&(c=new Float32Array(l),zv[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function gn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function vn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function pu(r,e){let i=Hv[e];i===void 0&&(i=new Int32Array(e),Hv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function dA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function hA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2fv(this.addr,e),vn(i,e)}}function pA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;r.uniform3fv(this.addr,e),vn(i,e)}}function mA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4fv(this.addr,e),vn(i,e)}}function gA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;kv.set(s),r.uniformMatrix2fv(this.addr,!1,kv),vn(i,s)}}function vA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;Vv.set(s),r.uniformMatrix3fv(this.addr,!1,Vv),vn(i,s)}}function xA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;Gv.set(s),r.uniformMatrix4fv(this.addr,!1,Gv),vn(i,s)}}function _A(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function SA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2iv(this.addr,e),vn(i,e)}}function yA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3iv(this.addr,e),vn(i,e)}}function MA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4iv(this.addr,e),vn(i,e)}}function bA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function EA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2uiv(this.addr,e),vn(i,e)}}function TA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3uiv(this.addr,e),vn(i,e)}}function AA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4uiv(this.addr,e),vn(i,e)}}function RA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?($h.compareFunction=i.isReversedDepthBuffer()?mp:pp,c=$h):c=t_,i.setTexture2D(e||c,l)}function wA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||i_,l)}function CA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||a_,l)}function DA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||n_,l)}function NA(r){switch(r){case 5126:return dA;case 35664:return hA;case 35665:return pA;case 35666:return mA;case 35674:return gA;case 35675:return vA;case 35676:return xA;case 5124:case 35670:return _A;case 35667:case 35671:return SA;case 35668:case 35672:return yA;case 35669:case 35673:return MA;case 5125:return bA;case 36294:return EA;case 36295:return TA;case 36296:return AA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return DA}}function UA(r,e){r.uniform1fv(this.addr,e)}function LA(r,e){const i=Xr(e,this.size,2);r.uniform2fv(this.addr,i)}function OA(r,e){const i=Xr(e,this.size,3);r.uniform3fv(this.addr,i)}function PA(r,e){const i=Xr(e,this.size,4);r.uniform4fv(this.addr,i)}function IA(r,e){const i=Xr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function FA(r,e){const i=Xr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function BA(r,e){const i=Xr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function zA(r,e){r.uniform1iv(this.addr,e)}function HA(r,e){r.uniform2iv(this.addr,e)}function GA(r,e){r.uniform3iv(this.addr,e)}function VA(r,e){r.uniform4iv(this.addr,e)}function kA(r,e){r.uniform1uiv(this.addr,e)}function jA(r,e){r.uniform2uiv(this.addr,e)}function XA(r,e){r.uniform3uiv(this.addr,e)}function WA(r,e){r.uniform4uiv(this.addr,e)}function qA(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=$h:f=t_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function YA(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||i_,c[f])}function ZA(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||a_,c[f])}function KA(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||n_,c[f])}function QA(r){switch(r){case 5126:return UA;case 35664:return LA;case 35665:return OA;case 35666:return PA;case 35674:return IA;case 35675:return FA;case 35676:return BA;case 5124:case 35670:return zA;case 35667:case 35671:return HA;case 35668:case 35672:return GA;case 35669:case 35673:return VA;case 5125:return kA;case 36294:return jA;case 36295:return XA;case 36296:return WA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return YA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return KA}}class JA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=NA(i.type)}}class $A{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=QA(i.type)}}class eR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function jv(r,e){r.seq.push(e),r.map[e.id]=e}function tR(r,e,i){const s=r.name,l=s.length;for(ah.lastIndex=0;;){const c=ah.exec(s),f=ah.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){jv(i,h===void 0?new JA(p,r,e):new $A(p,r,e));break}else{let S=i.map[p];S===void 0&&(S=new eR(p),jv(i,S)),i=S}}}class eu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);tR(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Xv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const nR=37297;let iR=0;function aR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const Wv=new ft;function sR(r){Tt._getMatrix(Wv,Tt.workingColorSpace,r);const e=`mat3( ${Wv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(r)){case nu:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function qv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+aR(r.getShaderSource(e),p)}else return c}function rR(r,e){const i=sR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const oR={[Ex]:"Linear",[Tx]:"Reinhard",[Ax]:"Cineon",[Rx]:"ACESFilmic",[Cx]:"AgX",[Dx]:"Neutral",[wx]:"Custom"};function lR(r,e){const i=oR[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new oe;function cR(){Tt.getLuminanceCoefficients(Wc);const r=Wc.x.toFixed(4),e=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function fR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function dR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function Jo(r){return r!==""}function Yv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(r){return r.replace(hR,mR)}const pR=new Map;function mR(r,e){let i=dt[e];if(i===void 0){const s=pR.get(e);if(s!==void 0)i=dt[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ep(i)}const gR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kv(r){return r.replace(gR,vR)}function vR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Qv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const xR={[Zc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function _R(r){return xR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SR={[Fs]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function yR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":SR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const MR={[Fr]:"ENVMAP_MODE_REFRACTION"};function bR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":MR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ER={[bx]:"ENVMAP_BLENDING_MULTIPLY",[pb]:"ENVMAP_BLENDING_MIX",[mb]:"ENVMAP_BLENDING_ADD"};function TR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ER[r.combine]||"ENVMAP_BLENDING_NONE"}function AR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function RR(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=_R(i),h=yR(i),g=bR(i),S=TR(i),x=AR(i),b=uR(i),T=fR(c),C=l.createProgram();let M,y,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jo).join(`
`),y.length>0&&(y+=`
`)):(M=[Qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),y=[Qv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Vi?lR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,rR("linearToOutputTexel",i.outputColorSpace),cR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),f=ep(f),f=Yv(f,i),f=Zv(f,i),p=ep(p),p=Yv(p,i),p=Zv(p,i),f=Kv(f),p=Kv(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=D+M+f,L=D+y+p,B=Xv(l,l.VERTEX_SHADER,N),G=Xv(l,l.FRAGMENT_SHADER,L);l.attachShader(C,B),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function k(V){if(r.debug.checkShaderErrors){const te=l.getProgramInfoLog(C)||"",se=l.getShaderInfoLog(B)||"",ue=l.getShaderInfoLog(G)||"",Q=te.trim(),I=se.trim(),H=ue.trim();let de=!0,ve=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,B,G);else{const P=qv(l,B,"vertex"),K=qv(l,G,"fragment");wt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+P+`
`+K)}else Q!==""?at("WebGLProgram: Program Info Log:",Q):(I===""||H==="")&&(ve=!1);ve&&(V.diagnostics={runnable:de,programLog:Q,vertexShader:{log:I,prefix:M},fragmentShader:{log:H,prefix:y}})}l.deleteShader(B),l.deleteShader(G),A=new eu(l,C),O=dR(l,C)}let A;this.getUniforms=function(){return A===void 0&&k(this),A};let O;this.getAttributes=function(){return O===void 0&&k(this),O};let he=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return he===!1&&(he=l.getProgramParameter(C,nR)),he},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=iR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=G,this}let wR=0;class CR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new DR(e),i.set(e,s)),s}}class DR{constructor(e){this.id=wR++,this.code=e,this.usedTimes=0}}function NR(r,e,i,s,l,c){const f=new Gx,p=new CR,m=new Set,h=[],g=new Map,S=s.logarithmicDepthBuffer;let x=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return m.add(A),A===0?"uv":`uv${A}`}function C(A,O,he,V,te){const se=V.fog,ue=te.geometry,Q=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,I=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,H=e.get(A.envMap||Q,I),de=H&&H.mapping===fu?H.image.height:null,ve=b[A.type];A.precision!==null&&(x=s.getMaxPrecision(A.precision),x!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const P=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,K=P!==void 0?P.length:0;let pe=0;ue.morphAttributes.position!==void 0&&(pe=1),ue.morphAttributes.normal!==void 0&&(pe=2),ue.morphAttributes.color!==void 0&&(pe=3);let Se,Ue,Ye,ee;if(ve){const At=Hi[ve];Se=At.vertexShader,Ue=At.fragmentShader}else Se=A.vertexShader,Ue=A.fragmentShader,p.update(A),Ye=p.getVertexShaderID(A),ee=p.getFragmentShaderID(A);const be=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),Je=te.isInstancedMesh===!0,Ke=te.isBatchedMesh===!0,$e=!!A.map,qt=!!A.matcap,ht=!!H,_t=!!A.aoMap,Ct=!!A.lightMap,rt=!!A.bumpMap,yt=!!A.normalMap,j=!!A.displacementMap,jt=!!A.emissiveMap,Mt=!!A.metalnessMap,bt=!!A.roughnessMap,Ge=A.anisotropy>0,U=A.clearcoat>0,v=A.dispersion>0,F=A.iridescence>0,Z=A.sheen>0,le=A.transmission>0,ae=Ge&&!!A.anisotropyMap,we=U&&!!A.clearcoatMap,Ce=U&&!!A.clearcoatNormalMap,Xe=U&&!!A.clearcoatRoughnessMap,Qe=F&&!!A.iridescenceMap,Ee=F&&!!A.iridescenceThicknessMap,Ae=Z&&!!A.sheenColorMap,Fe=Z&&!!A.sheenRoughnessMap,He=!!A.specularMap,Pe=!!A.specularColorMap,ct=!!A.specularIntensityMap,W=le&&!!A.transmissionMap,De=le&&!!A.thicknessMap,Re=!!A.gradientMap,Ie=!!A.alphaMap,Te=A.alphaTest>0,ge=!!A.alphaHash,Ve=!!A.extensions;let nt=Vi;A.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(nt=r.toneMapping);const Ot={shaderID:ve,shaderType:A.type,shaderName:A.name,vertexShader:Se,fragmentShader:Ue,defines:A.defines,customVertexShaderID:Ye,customFragmentShaderID:ee,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,batching:Ke,batchingColor:Ke&&te._colorsTexture!==null,instancing:Je,instancingColor:Je&&te.instanceColor!==null,instancingMorph:Je&&te.morphTexture!==null,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:zr,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:qt,envMap:ht,envMapMode:ht&&H.mapping,envMapCubeUVHeight:de,aoMap:_t,lightMap:Ct,bumpMap:rt,normalMap:yt,displacementMap:j,emissiveMap:jt,normalMapObjectSpace:yt&&A.normalMapType===_b,normalMapTangentSpace:yt&&A.normalMapType===xb,metalnessMap:Mt,roughnessMap:bt,anisotropy:Ge,anisotropyMap:ae,clearcoat:U,clearcoatMap:we,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Xe,dispersion:v,iridescence:F,iridescenceMap:Qe,iridescenceThicknessMap:Ee,sheen:Z,sheenColorMap:Ae,sheenRoughnessMap:Fe,specularMap:He,specularColorMap:Pe,specularIntensityMap:ct,transmission:le,transmissionMap:W,thicknessMap:De,gradientMap:Re,opaque:A.transparent===!1&&A.blending===Or&&A.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Te,alphaHash:ge,combine:A.combine,mapUv:$e&&T(A.map.channel),aoMapUv:_t&&T(A.aoMap.channel),lightMapUv:Ct&&T(A.lightMap.channel),bumpMapUv:rt&&T(A.bumpMap.channel),normalMapUv:yt&&T(A.normalMap.channel),displacementMapUv:j&&T(A.displacementMap.channel),emissiveMapUv:jt&&T(A.emissiveMap.channel),metalnessMapUv:Mt&&T(A.metalnessMap.channel),roughnessMapUv:bt&&T(A.roughnessMap.channel),anisotropyMapUv:ae&&T(A.anisotropyMap.channel),clearcoatMapUv:we&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(A.sheenRoughnessMap.channel),specularMapUv:He&&T(A.specularMap.channel),specularColorMapUv:Pe&&T(A.specularColorMap.channel),specularIntensityMapUv:ct&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:De&&T(A.thicknessMap.channel),alphaMapUv:Ie&&T(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(yt||Ge),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ue.attributes.uv&&($e||Ie),fog:!!se,useFog:A.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ue.attributes.normal===void 0&&yt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ye,skinning:te.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:pe,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&he.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===Bt,decodeVideoTextureEmissive:jt&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===Bt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===xa,flipSided:A.side===kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ve&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&A.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ot.vertexUv1s=m.has(1),Ot.vertexUv2s=m.has(2),Ot.vertexUv3s=m.has(3),m.clear(),Ot}function M(A){const O=[];if(A.shaderID?O.push(A.shaderID):(O.push(A.customVertexShaderID),O.push(A.customFragmentShaderID)),A.defines!==void 0)for(const he in A.defines)O.push(he),O.push(A.defines[he]);return A.isRawShaderMaterial===!1&&(y(O,A),D(O,A),O.push(r.outputColorSpace)),O.push(A.customProgramCacheKey),O.join()}function y(A,O){A.push(O.precision),A.push(O.outputColorSpace),A.push(O.envMapMode),A.push(O.envMapCubeUVHeight),A.push(O.mapUv),A.push(O.alphaMapUv),A.push(O.lightMapUv),A.push(O.aoMapUv),A.push(O.bumpMapUv),A.push(O.normalMapUv),A.push(O.displacementMapUv),A.push(O.emissiveMapUv),A.push(O.metalnessMapUv),A.push(O.roughnessMapUv),A.push(O.anisotropyMapUv),A.push(O.clearcoatMapUv),A.push(O.clearcoatNormalMapUv),A.push(O.clearcoatRoughnessMapUv),A.push(O.iridescenceMapUv),A.push(O.iridescenceThicknessMapUv),A.push(O.sheenColorMapUv),A.push(O.sheenRoughnessMapUv),A.push(O.specularMapUv),A.push(O.specularColorMapUv),A.push(O.specularIntensityMapUv),A.push(O.transmissionMapUv),A.push(O.thicknessMapUv),A.push(O.combine),A.push(O.fogExp2),A.push(O.sizeAttenuation),A.push(O.morphTargetsCount),A.push(O.morphAttributeCount),A.push(O.numDirLights),A.push(O.numPointLights),A.push(O.numSpotLights),A.push(O.numSpotLightMaps),A.push(O.numHemiLights),A.push(O.numRectAreaLights),A.push(O.numDirLightShadows),A.push(O.numPointLightShadows),A.push(O.numSpotLightShadows),A.push(O.numSpotLightShadowsWithMaps),A.push(O.numLightProbes),A.push(O.shadowMapType),A.push(O.toneMapping),A.push(O.numClippingPlanes),A.push(O.numClipIntersection),A.push(O.depthPacking)}function D(A,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),A.push(f.mask)}function N(A){const O=b[A.type];let he;if(O){const V=Hi[O];he=iE.clone(V.uniforms)}else he=A.uniforms;return he}function L(A,O){let he=g.get(O);return he!==void 0?++he.usedTimes:(he=new RR(r,O,A,l),h.push(he),g.set(O,he)),he}function B(A){if(--A.usedTimes===0){const O=h.indexOf(A);h[O]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function G(A){p.remove(A)}function k(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:N,acquireProgram:L,releaseProgram:B,releaseShaderCache:G,programs:h,dispose:k}}function UR(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function LR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Jv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $v(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(x){let b=0;return x.isInstancedMesh&&(b+=2),x.isSkinnedMesh&&(b+=1),b}function p(x,b,T,C,M,y){let D=r[e];return D===void 0?(D={id:x.id,object:x,geometry:b,material:T,materialVariant:f(x),groupOrder:C,renderOrder:x.renderOrder,z:M,group:y},r[e]=D):(D.id=x.id,D.object=x,D.geometry=b,D.material=T,D.materialVariant=f(x),D.groupOrder=C,D.renderOrder=x.renderOrder,D.z=M,D.group=y),e++,D}function m(x,b,T,C,M,y){const D=p(x,b,T,C,M,y);T.transmission>0?s.push(D):T.transparent===!0?l.push(D):i.push(D)}function h(x,b,T,C,M,y){const D=p(x,b,T,C,M,y);T.transmission>0?s.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function g(x,b){i.length>1&&i.sort(x||LR),s.length>1&&s.sort(b||Jv),l.length>1&&l.sort(b||Jv)}function S(){for(let x=e,b=r.length;x<b;x++){const T=r[x];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:S,sort:g}}function OR(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new $v,r.set(s,[f])):l>=c.length?(f=new $v,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function PR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Lt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[e.id]=i,i}}}function IR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let FR=0;function BR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function zR(r){const e=new PR,i=IR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new oe);const l=new oe,c=new ln,f=new ln;function p(h){let g=0,S=0,x=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let b=0,T=0,C=0,M=0,y=0,D=0,N=0,L=0,B=0,G=0,k=0;h.sort(BR);for(let O=0,he=h.length;O<he;O++){const V=h[O],te=V.color,se=V.intensity,ue=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Br?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=te.r*se,S+=te.g*se,x+=te.b*se;else if(V.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(V.sh.coefficients[I],se);k++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,de=i.get(V);de.shadowIntensity=H.intensity,de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,s.directionalShadow[b]=de,s.directionalShadowMap[b]=Q,s.directionalShadowMatrix[b]=V.shadow.matrix,D++}s.directional[b]=I,b++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(te).multiplyScalar(se),I.distance=ue,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,s.spot[C]=I;const H=V.shadow;if(V.map&&(s.spotLightMap[B]=V.map,B++,H.updateMatrices(V),V.castShadow&&G++),s.spotLightMatrix[C]=H.matrix,V.castShadow){const de=i.get(V);de.shadowIntensity=H.intensity,de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,s.spotShadow[C]=de,s.spotShadowMap[C]=Q,L++}C++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(te).multiplyScalar(se),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=I,M++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const H=V.shadow,de=i.get(V);de.shadowIntensity=H.intensity,de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,de.shadowCameraNear=H.camera.near,de.shadowCameraFar=H.camera.far,s.pointShadow[T]=de,s.pointShadowMap[T]=Q,s.pointShadowMatrix[T]=V.shadow.matrix,N++}s.point[T]=I,T++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(se),I.groundColor.copy(V.groundColor).multiplyScalar(se),s.hemi[y]=I,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=S,s.ambient[2]=x;const A=s.hash;(A.directionalLength!==b||A.pointLength!==T||A.spotLength!==C||A.rectAreaLength!==M||A.hemiLength!==y||A.numDirectionalShadows!==D||A.numPointShadows!==N||A.numSpotShadows!==L||A.numSpotMaps!==B||A.numLightProbes!==k)&&(s.directional.length=b,s.spot.length=C,s.rectArea.length=M,s.point.length=T,s.hemi.length=y,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=L+B-G,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=k,A.directionalLength=b,A.pointLength=T,A.spotLength=C,A.rectAreaLength=M,A.hemiLength=y,A.numDirectionalShadows=D,A.numPointShadows=N,A.numSpotShadows=L,A.numSpotMaps=B,A.numLightProbes=k,s.version=FR++)}function m(h,g){let S=0,x=0,b=0,T=0,C=0;const M=g.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const N=h[y];if(N.isDirectionalLight){const L=s.directional[S];L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),S++}else if(N.isSpotLight){const L=s.spot[b];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),b++}else if(N.isRectAreaLight){const L=s.rectArea[T];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),f.identity(),c.copy(N.matrixWorld),c.premultiply(M),f.extractRotation(c),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),T++}else if(N.isPointLight){const L=s.point[x];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(M),C++}}}return{setup:p,setupView:m,state:s}}function ex(r){const e=new zR(r),i=[],s=[];function l(g){h.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function p(){e.setup(i)}function m(g){e.setupView(i,g)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function HR(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new ex(r),e.set(l,[p])):c>=f.length?(p=new ex(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const GR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VR=`uniform sampler2D shadow_pass;
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
}`,kR=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],jR=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],tx=new ln,Zo=new oe,sh=new oe;function XR(r,e,i){let s=new Yx;const l=new ot,c=new ot,f=new tn,p=new rE,m=new oE,h={},g=i.maxTextureSize,S={[os]:kn,[kn]:os,[xa]:xa},x=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:GR,fragmentShader:VR}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const T=new Ci;T.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new di(T,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let y=this.type;this.render=function(G,k,A){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;this.type===ZM&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zc);const O=r.getRenderTarget(),he=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),te=r.state;te.setBlending(Sa),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const se=y!==this.type;se&&k.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(Q=>Q.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,Q=G.length;ue<Q;ue++){const I=G[ue],H=I.shadow;if(H===void 0){at("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const de=H.getFrameExtents();l.multiply(de),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/de.x),l.x=c.x*de.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/de.y),l.y=c.y*de.y,H.mapSize.y=c.y));const ve=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ve,H.map===null||se===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ko){if(I.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ai(l.x,l.y,{format:Br,type:Xi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new nl(l.x,l.y,Ti),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=ba,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn}else I.isPointLight?(H.map=new e_(l.x),H.map.depthTexture=new tE(l.x,ji)):(H.map=new Ai(l.x,l.y),H.map.depthTexture=new nl(l.x,l.y,ji)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=ba,this.type===Zc?(H.map.depthTexture.compareFunction=ve?mp:pp,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn);H.camera.updateProjectionMatrix()}const P=H.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<P;K++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,K),r.clear();else{K===0&&(r.setRenderTarget(H.map),r.clear());const pe=H.getViewport(K);f.set(c.x*pe.x,c.y*pe.y,c.x*pe.z,c.y*pe.w),te.viewport(f)}if(I.isPointLight){const pe=H.camera,Se=H.matrix,Ue=I.distance||pe.far;Ue!==pe.far&&(pe.far=Ue,pe.updateProjectionMatrix()),Zo.setFromMatrixPosition(I.matrixWorld),pe.position.copy(Zo),sh.copy(pe.position),sh.add(kR[K]),pe.up.copy(jR[K]),pe.lookAt(sh),pe.updateMatrixWorld(),Se.makeTranslation(-Zo.x,-Zo.y,-Zo.z),tx.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(tx,pe.coordinateSystem,pe.reversedDepth)}else H.updateMatrices(I);s=H.getFrustum(),L(k,A,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===Ko&&D(H,A),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(O,he,V)};function D(G,k){const A=e.update(C);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,b.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ai(l.x,l.y,{format:Br,type:Xi})),x.uniforms.shadow_pass.value=G.map.depthTexture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(k,null,A,x,C,null),b.uniforms.shadow_pass.value=G.mapPass.texture,b.uniforms.resolution.value=G.mapSize,b.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(k,null,A,b,C,null)}function N(G,k,A,O){let he=null;const V=A.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)he=V;else if(he=A.isPointLight===!0?m:p,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const te=he.uuid,se=k.uuid;let ue=h[te];ue===void 0&&(ue={},h[te]=ue);let Q=ue[se];Q===void 0&&(Q=he.clone(),ue[se]=Q,k.addEventListener("dispose",B)),he=Q}if(he.visible=k.visible,he.wireframe=k.wireframe,O===Ko?he.side=k.shadowSide!==null?k.shadowSide:k.side:he.side=k.shadowSide!==null?k.shadowSide:S[k.side],he.alphaMap=k.alphaMap,he.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,he.map=k.map,he.clipShadows=k.clipShadows,he.clippingPlanes=k.clippingPlanes,he.clipIntersection=k.clipIntersection,he.displacementMap=k.displacementMap,he.displacementScale=k.displacementScale,he.displacementBias=k.displacementBias,he.wireframeLinewidth=k.wireframeLinewidth,he.linewidth=k.linewidth,A.isPointLight===!0&&he.isMeshDistanceMaterial===!0){const te=r.properties.get(he);te.light=A}return he}function L(G,k,A,O,he){if(G.visible===!1)return;if(G.layers.test(k.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&he===Ko)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,G.matrixWorld);const se=e.update(G),ue=G.material;if(Array.isArray(ue)){const Q=se.groups;for(let I=0,H=Q.length;I<H;I++){const de=Q[I],ve=ue[de.materialIndex];if(ve&&ve.visible){const P=N(G,ve,O,he);G.onBeforeShadow(r,G,k,A,se,P,de),r.renderBufferDirect(A,null,se,P,G,de),G.onAfterShadow(r,G,k,A,se,P,de)}}}else if(ue.visible){const Q=N(G,ue,O,he);G.onBeforeShadow(r,G,k,A,se,Q,null),r.renderBufferDirect(A,null,se,Q,G,null),G.onAfterShadow(r,G,k,A,se,Q,null)}}const te=G.children;for(let se=0,ue=te.length;se<ue;se++)L(te[se],k,A,O,he)}function B(G){G.target.removeEventListener("dispose",B);for(const A in h){const O=h[A],he=G.target.uuid;he in O&&(O[he].dispose(),delete O[he])}}}function WR(r,e){function i(){let W=!1;const De=new tn;let Re=null;const Ie=new tn(0,0,0,0);return{setMask:function(Te){Re!==Te&&!W&&(r.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){W=Te},setClear:function(Te,ge,Ve,nt,Ot){Ot===!0&&(Te*=nt,ge*=nt,Ve*=nt),De.set(Te,ge,Ve,nt),Ie.equals(De)===!1&&(r.clearColor(Te,ge,Ve,nt),Ie.copy(De))},reset:function(){W=!1,Re=null,Ie.set(-1,0,0,0)}}}function s(){let W=!1,De=!1,Re=null,Ie=null,Te=null;return{setReversed:function(ge){if(De!==ge){const Ve=e.get("EXT_clip_control");ge?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),De=ge;const nt=Te;Te=null,this.setClear(nt)}},getReversed:function(){return De},setTest:function(ge){ge?be(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(ge){Re!==ge&&!W&&(r.depthMask(ge),Re=ge)},setFunc:function(ge){if(De&&(ge=Cb[ge]),Ie!==ge){switch(ge){case fh:r.depthFunc(r.NEVER);break;case dh:r.depthFunc(r.ALWAYS);break;case hh:r.depthFunc(r.LESS);break;case Ir:r.depthFunc(r.LEQUAL);break;case ph:r.depthFunc(r.EQUAL);break;case mh:r.depthFunc(r.GEQUAL);break;case gh:r.depthFunc(r.GREATER);break;case vh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=ge}},setLocked:function(ge){W=ge},setClear:function(ge){Te!==ge&&(Te=ge,De&&(ge=1-ge),r.clearDepth(ge))},reset:function(){W=!1,Re=null,Ie=null,Te=null,De=!1}}}function l(){let W=!1,De=null,Re=null,Ie=null,Te=null,ge=null,Ve=null,nt=null,Ot=null;return{setTest:function(At){W||(At?be(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(At){De!==At&&!W&&(r.stencilMask(At),De=At)},setFunc:function(At,pi,xn){(Re!==At||Ie!==pi||Te!==xn)&&(r.stencilFunc(At,pi,xn),Re=At,Ie=pi,Te=xn)},setOp:function(At,pi,xn){(ge!==At||Ve!==pi||nt!==xn)&&(r.stencilOp(At,pi,xn),ge=At,Ve=pi,nt=xn)},setLocked:function(At){W=At},setClear:function(At){Ot!==At&&(r.clearStencil(At),Ot=At)},reset:function(){W=!1,De=null,Re=null,Ie=null,Te=null,ge=null,Ve=null,nt=null,Ot=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let g={},S={},x=new WeakMap,b=[],T=null,C=!1,M=null,y=null,D=null,N=null,L=null,B=null,G=null,k=new Lt(0,0,0),A=0,O=!1,he=null,V=null,te=null,se=null,ue=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const de=r.getParameter(r.VERSION);de.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(de)[1]),I=H>=1):de.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),I=H>=2);let ve=null,P={};const K=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),Se=new tn().fromArray(K),Ue=new tn().fromArray(pe);function Ye(W,De,Re,Ie){const Te=new Uint8Array(4),ge=r.createTexture();r.bindTexture(W,ge),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ve=0;Ve<Re;Ve++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(De+Ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return ge}const ee={};ee[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),be(r.DEPTH_TEST),f.setFunc(Ir),rt(!1),yt(iv),be(r.CULL_FACE),_t(Sa);function be(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function ye(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Je(W,De){return S[W]!==De?(r.bindFramebuffer(W,De),S[W]=De,W===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=De),W===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=De),!0):!1}function Ke(W,De){let Re=b,Ie=!1;if(W){Re=x.get(De),Re===void 0&&(Re=[],x.set(De,Re));const Te=W.textures;if(Re.length!==Te.length||Re[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,Ve=Te.length;ge<Ve;ge++)Re[ge]=r.COLOR_ATTACHMENT0+ge;Re.length=Te.length,Ie=!0}}else Re[0]!==r.BACK&&(Re[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(Re)}function $e(W){return T!==W?(r.useProgram(W),T=W,!0):!1}const qt={[Us]:r.FUNC_ADD,[QM]:r.FUNC_SUBTRACT,[JM]:r.FUNC_REVERSE_SUBTRACT};qt[$M]=r.MIN,qt[eb]=r.MAX;const ht={[tb]:r.ZERO,[nb]:r.ONE,[ib]:r.SRC_COLOR,[ch]:r.SRC_ALPHA,[cb]:r.SRC_ALPHA_SATURATE,[ob]:r.DST_COLOR,[sb]:r.DST_ALPHA,[ab]:r.ONE_MINUS_SRC_COLOR,[uh]:r.ONE_MINUS_SRC_ALPHA,[lb]:r.ONE_MINUS_DST_COLOR,[rb]:r.ONE_MINUS_DST_ALPHA,[ub]:r.CONSTANT_COLOR,[fb]:r.ONE_MINUS_CONSTANT_COLOR,[db]:r.CONSTANT_ALPHA,[hb]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(W,De,Re,Ie,Te,ge,Ve,nt,Ot,At){if(W===Sa){C===!0&&(ye(r.BLEND),C=!1);return}if(C===!1&&(be(r.BLEND),C=!0),W!==KM){if(W!==M||At!==O){if((y!==Us||L!==Us)&&(r.blendEquation(r.FUNC_ADD),y=Us,L=Us),At)switch(W){case Or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lh:r.blendFunc(r.ONE,r.ONE);break;case av:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",W);break}else switch(W){case Or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case av:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sv:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",W);break}D=null,N=null,B=null,G=null,k.set(0,0,0),A=0,M=W,O=At}return}Te=Te||De,ge=ge||Re,Ve=Ve||Ie,(De!==y||Te!==L)&&(r.blendEquationSeparate(qt[De],qt[Te]),y=De,L=Te),(Re!==D||Ie!==N||ge!==B||Ve!==G)&&(r.blendFuncSeparate(ht[Re],ht[Ie],ht[ge],ht[Ve]),D=Re,N=Ie,B=ge,G=Ve),(nt.equals(k)===!1||Ot!==A)&&(r.blendColor(nt.r,nt.g,nt.b,Ot),k.copy(nt),A=Ot),M=W,O=!1}function Ct(W,De){W.side===xa?ye(r.CULL_FACE):be(r.CULL_FACE);let Re=W.side===kn;De&&(Re=!Re),rt(Re),W.blending===Or&&W.transparent===!1?_t(Sa):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ie=W.stencilWrite;p.setTest(Ie),Ie&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),jt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(W){he!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),he=W)}function yt(W){W!==qM?(be(r.CULL_FACE),W!==V&&(W===iv?r.cullFace(r.BACK):W===YM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),V=W}function j(W){W!==te&&(I&&r.lineWidth(W),te=W)}function jt(W,De,Re){W?(be(r.POLYGON_OFFSET_FILL),(se!==De||ue!==Re)&&(se=De,ue=Re,f.getReversed()&&(De=-De),r.polygonOffset(De,Re))):ye(r.POLYGON_OFFSET_FILL)}function Mt(W){W?be(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function bt(W){W===void 0&&(W=r.TEXTURE0+Q-1),ve!==W&&(r.activeTexture(W),ve=W)}function Ge(W,De,Re){Re===void 0&&(ve===null?Re=r.TEXTURE0+Q-1:Re=ve);let Ie=P[Re];Ie===void 0&&(Ie={type:void 0,texture:void 0},P[Re]=Ie),(Ie.type!==W||Ie.texture!==De)&&(ve!==Re&&(r.activeTexture(Re),ve=Re),r.bindTexture(W,De||ee[W]),Ie.type=W,Ie.texture=De)}function U(){const W=P[ve];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Z(){try{r.texSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function le(){try{r.texSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function we(){try{r.compressedTexSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ce(){try{r.texStorage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Xe(){try{r.texStorage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Qe(){try{r.texImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ee(){try{r.texImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ae(W){Se.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Se.copy(W))}function Fe(W){Ue.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ue.copy(W))}function He(W,De){let Re=h.get(De);Re===void 0&&(Re=new WeakMap,h.set(De,Re));let Ie=Re.get(W);Ie===void 0&&(Ie=r.getUniformBlockIndex(De,W.name),Re.set(W,Ie))}function Pe(W,De){const Ie=h.get(De).get(W);m.get(De)!==Ie&&(r.uniformBlockBinding(De,Ie,W.__bindingPointIndex),m.set(De,Ie))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ve=null,P={},S={},x=new WeakMap,b=[],T=null,C=!1,M=null,y=null,D=null,N=null,L=null,B=null,G=null,k=new Lt(0,0,0),A=0,O=!1,he=null,V=null,te=null,se=null,ue=null,Se.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:be,disable:ye,bindFramebuffer:Je,drawBuffers:Ke,useProgram:$e,setBlending:_t,setMaterial:Ct,setFlipSided:rt,setCullFace:yt,setLineWidth:j,setPolygonOffset:jt,setScissorTest:Mt,activeTexture:bt,bindTexture:Ge,unbindTexture:U,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Qe,texImage3D:Ee,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Ce,texStorage3D:Xe,texSubImage2D:Z,texSubImage3D:le,compressedTexSubImage2D:ae,compressedTexSubImage3D:we,scissor:Ae,viewport:Fe,reset:ct}}function qR(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ot,g=new WeakMap;let S;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,v){return b?new OffscreenCanvas(U,v):au("canvas")}function C(U,v,F){let Z=1;const le=Ge(U);if((le.width>F||le.height>F)&&(Z=F/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ae=Math.floor(Z*le.width),we=Math.floor(Z*le.height);S===void 0&&(S=T(ae,we));const Ce=v?T(ae,we):S;return Ce.width=ae,Ce.height=we,Ce.getContext("2d").drawImage(U,0,0,ae,we),at("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ae+"x"+we+")."),Ce}else return"data"in U&&at("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),U;return U}function M(U){return U.generateMipmaps}function y(U){r.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(U,v,F,Z,le=!1){if(U!==null){if(r[U]!==void 0)return r[U];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ae=v;if(v===r.RED&&(F===r.FLOAT&&(ae=r.R32F),F===r.HALF_FLOAT&&(ae=r.R16F),F===r.UNSIGNED_BYTE&&(ae=r.R8)),v===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.R8UI),F===r.UNSIGNED_SHORT&&(ae=r.R16UI),F===r.UNSIGNED_INT&&(ae=r.R32UI),F===r.BYTE&&(ae=r.R8I),F===r.SHORT&&(ae=r.R16I),F===r.INT&&(ae=r.R32I)),v===r.RG&&(F===r.FLOAT&&(ae=r.RG32F),F===r.HALF_FLOAT&&(ae=r.RG16F),F===r.UNSIGNED_BYTE&&(ae=r.RG8)),v===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.RG8UI),F===r.UNSIGNED_SHORT&&(ae=r.RG16UI),F===r.UNSIGNED_INT&&(ae=r.RG32UI),F===r.BYTE&&(ae=r.RG8I),F===r.SHORT&&(ae=r.RG16I),F===r.INT&&(ae=r.RG32I)),v===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),F===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),F===r.UNSIGNED_INT&&(ae=r.RGB32UI),F===r.BYTE&&(ae=r.RGB8I),F===r.SHORT&&(ae=r.RGB16I),F===r.INT&&(ae=r.RGB32I)),v===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),F===r.UNSIGNED_INT&&(ae=r.RGBA32UI),F===r.BYTE&&(ae=r.RGBA8I),F===r.SHORT&&(ae=r.RGBA16I),F===r.INT&&(ae=r.RGBA32I)),v===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(ae=r.R11F_G11F_B10F)),v===r.RGBA){const we=le?nu:Tt.getTransfer(Z);F===r.FLOAT&&(ae=r.RGBA32F),F===r.HALF_FLOAT&&(ae=r.RGBA16F),F===r.UNSIGNED_BYTE&&(ae=we===Bt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function L(U,v){let F;return U?v===null||v===ji||v===tl?F=r.DEPTH24_STENCIL8:v===Ti?F=r.DEPTH32F_STENCIL8:v===el&&(F=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ji||v===tl?F=r.DEPTH_COMPONENT24:v===Ti?F=r.DEPTH_COMPONENT32F:v===el&&(F=r.DEPTH_COMPONENT16),F}function B(U,v){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Rn&&U.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?v.mipmaps.length:1}function G(U){const v=U.target;v.removeEventListener("dispose",G),A(v),v.isVideoTexture&&g.delete(v)}function k(U){const v=U.target;v.removeEventListener("dispose",k),he(v)}function A(U){const v=s.get(U);if(v.__webglInit===void 0)return;const F=U.source,Z=x.get(F);if(Z){const le=Z[v.__cacheKey];le.usedTimes--,le.usedTimes===0&&O(U),Object.keys(Z).length===0&&x.delete(F)}s.remove(U)}function O(U){const v=s.get(U);r.deleteTexture(v.__webglTexture);const F=U.source,Z=x.get(F);delete Z[v.__cacheKey],f.memory.textures--}function he(U){const v=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let le=0;le<v.__webglFramebuffer[Z].length;le++)r.deleteFramebuffer(v.__webglFramebuffer[Z][le]);else r.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)r.deleteFramebuffer(v.__webglFramebuffer[Z]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=U.textures;for(let Z=0,le=F.length;Z<le;Z++){const ae=s.get(F[Z]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),f.memory.textures--),s.remove(F[Z])}s.remove(U)}let V=0;function te(){V=0}function se(){const U=V;return U>=l.maxTextures&&at("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function ue(U){const v=[];return v.push(U.wrapS),v.push(U.wrapT),v.push(U.wrapR||0),v.push(U.magFilter),v.push(U.minFilter),v.push(U.anisotropy),v.push(U.internalFormat),v.push(U.format),v.push(U.type),v.push(U.generateMipmaps),v.push(U.premultiplyAlpha),v.push(U.flipY),v.push(U.unpackAlignment),v.push(U.colorSpace),v.join()}function Q(U,v){const F=s.get(U);if(U.isVideoTexture&&Mt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&F.__version!==U.version){const Z=U.image;if(Z===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(F,U,v);return}}else U.isExternalTexture&&(F.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+v)}function I(U,v){const F=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&F.__version!==U.version){ee(F,U,v);return}else U.isExternalTexture&&(F.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+v)}function H(U,v){const F=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&F.__version!==U.version){ee(F,U,v);return}i.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+v)}function de(U,v){const F=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&F.__version!==U.version){be(F,U,v);return}i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+v)}const ve={[xh]:r.REPEAT,[ei]:r.CLAMP_TO_EDGE,[_h]:r.MIRRORED_REPEAT},P={[Rn]:r.NEAREST,[gb]:r.NEAREST_MIPMAP_NEAREST,[Mc]:r.NEAREST_MIPMAP_LINEAR,[dn]:r.LINEAR,[wd]:r.LINEAR_MIPMAP_NEAREST,[Os]:r.LINEAR_MIPMAP_LINEAR},K={[Sb]:r.NEVER,[Tb]:r.ALWAYS,[yb]:r.LESS,[pp]:r.LEQUAL,[Mb]:r.EQUAL,[mp]:r.GEQUAL,[bb]:r.GREATER,[Eb]:r.NOTEQUAL};function pe(U,v){if(v.type===Ti&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===wd||v.magFilter===Mc||v.magFilter===Os||v.minFilter===dn||v.minFilter===wd||v.minFilter===Mc||v.minFilter===Os)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,ve[v.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,ve[v.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,ve[v.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,P[v.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,P[v.minFilter]),v.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,K[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Rn||v.minFilter!==Mc&&v.minFilter!==Os||v.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||s.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,l.getMaxAnisotropy())),s.get(v).__currentAnisotropy=v.anisotropy}}}function Se(U,v){let F=!1;U.__webglInit===void 0&&(U.__webglInit=!0,v.addEventListener("dispose",G));const Z=v.source;let le=x.get(Z);le===void 0&&(le={},x.set(Z,le));const ae=ue(v);if(ae!==U.__cacheKey){le[ae]===void 0&&(le[ae]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,F=!0),le[ae].usedTimes++;const we=le[U.__cacheKey];we!==void 0&&(le[U.__cacheKey].usedTimes--,we.usedTimes===0&&O(v)),U.__cacheKey=ae,U.__webglTexture=le[ae].texture}return F}function Ue(U,v,F){return Math.floor(Math.floor(U/F)/v)}function Ye(U,v,F,Z){const ae=U.updateRanges;if(ae.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,F,Z,v.data);else{ae.sort((Ee,Ae)=>Ee.start-Ae.start);let we=0;for(let Ee=1;Ee<ae.length;Ee++){const Ae=ae[we],Fe=ae[Ee],He=Ae.start+Ae.count,Pe=Ue(Fe.start,v.width,4),ct=Ue(Ae.start,v.width,4);Fe.start<=He+1&&Pe===ct&&Ue(Fe.start+Fe.count-1,v.width,4)===Pe?Ae.count=Math.max(Ae.count,Fe.start+Fe.count-Ae.start):(++we,ae[we]=Fe)}ae.length=we+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),Xe=r.getParameter(r.UNPACK_SKIP_PIXELS),Qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ee=0,Ae=ae.length;Ee<Ae;Ee++){const Fe=ae[Ee],He=Math.floor(Fe.start/4),Pe=Math.ceil(Fe.count/4),ct=He%v.width,W=Math.floor(He/v.width),De=Pe,Re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ct,W,De,Re,F,Z,v.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qe)}}function ee(U,v,F){let Z=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=r.TEXTURE_3D);const le=Se(U,v),ae=v.source;i.bindTexture(Z,U.__webglTexture,r.TEXTURE0+F);const we=s.get(ae);if(ae.version!==we.__version||le===!0){i.activeTexture(r.TEXTURE0+F);const Ce=Tt.getPrimaries(Tt.workingColorSpace),Xe=v.colorSpace===ss?null:Tt.getPrimaries(v.colorSpace),Qe=v.colorSpace===ss||Ce===Xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Ee=C(v.image,!1,l.maxTextureSize);Ee=bt(v,Ee);const Ae=c.convert(v.format,v.colorSpace),Fe=c.convert(v.type);let He=N(v.internalFormat,Ae,Fe,v.colorSpace,v.isVideoTexture);pe(Z,v);let Pe;const ct=v.mipmaps,W=v.isVideoTexture!==!0,De=we.__version===void 0||le===!0,Re=ae.dataReady,Ie=B(v,Ee);if(v.isDepthTexture)He=L(v.format===Ps,v.type),De&&(W?i.texStorage2D(r.TEXTURE_2D,1,He,Ee.width,Ee.height):i.texImage2D(r.TEXTURE_2D,0,He,Ee.width,Ee.height,0,Ae,Fe,null));else if(v.isDataTexture)if(ct.length>0){W&&De&&i.texStorage2D(r.TEXTURE_2D,Ie,He,ct[0].width,ct[0].height);for(let Te=0,ge=ct.length;Te<ge;Te++)Pe=ct[Te],W?Re&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):i.texImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Fe,Pe.data);v.generateMipmaps=!1}else W?(De&&i.texStorage2D(r.TEXTURE_2D,Ie,He,Ee.width,Ee.height),Re&&Ye(v,Ee,Ae,Fe)):i.texImage2D(r.TEXTURE_2D,0,He,Ee.width,Ee.height,0,Ae,Fe,Ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){W&&De&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,ct[0].width,ct[0].height,Ee.depth);for(let Te=0,ge=ct.length;Te<ge;Te++)if(Pe=ct[Te],v.format!==fi)if(Ae!==null)if(W){if(Re)if(v.layerUpdates.size>0){const Ve=Uv(Pe.width,Pe.height,v.format,v.type);for(const nt of v.layerUpdates){const Ot=Pe.data.subarray(nt*Ve/Pe.data.BYTES_PER_ELEMENT,(nt+1)*Ve/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,nt,Pe.width,Pe.height,1,Ae,Ot)}v.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ee.depth,Ae,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Ee.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ee.depth,Ae,Fe,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Ee.depth,0,Ae,Fe,Pe.data)}else{W&&De&&i.texStorage2D(r.TEXTURE_2D,Ie,He,ct[0].width,ct[0].height);for(let Te=0,ge=ct.length;Te<ge;Te++)Pe=ct[Te],v.format!==fi?Ae!==null?W?Re&&i.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ae,Fe,Pe.data):i.texImage2D(r.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Ae,Fe,Pe.data)}else if(v.isDataArrayTexture)if(W){if(De&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,Ee.width,Ee.height,Ee.depth),Re)if(v.layerUpdates.size>0){const Te=Uv(Ee.width,Ee.height,v.format,v.type);for(const ge of v.layerUpdates){const Ve=Ee.data.subarray(ge*Te/Ee.data.BYTES_PER_ELEMENT,(ge+1)*Te/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Ee.width,Ee.height,1,Ae,Fe,Ve)}v.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Fe,Ee.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,He,Ee.width,Ee.height,Ee.depth,0,Ae,Fe,Ee.data);else if(v.isData3DTexture)W?(De&&i.texStorage3D(r.TEXTURE_3D,Ie,He,Ee.width,Ee.height,Ee.depth),Re&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Fe,Ee.data)):i.texImage3D(r.TEXTURE_3D,0,He,Ee.width,Ee.height,Ee.depth,0,Ae,Fe,Ee.data);else if(v.isFramebufferTexture){if(De)if(W)i.texStorage2D(r.TEXTURE_2D,Ie,He,Ee.width,Ee.height);else{let Te=Ee.width,ge=Ee.height;for(let Ve=0;Ve<Ie;Ve++)i.texImage2D(r.TEXTURE_2D,Ve,He,Te,ge,0,Ae,Fe,null),Te>>=1,ge>>=1}}else if(ct.length>0){if(W&&De){const Te=Ge(ct[0]);i.texStorage2D(r.TEXTURE_2D,Ie,He,Te.width,Te.height)}for(let Te=0,ge=ct.length;Te<ge;Te++)Pe=ct[Te],W?Re&&i.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ae,Fe,Pe):i.texImage2D(r.TEXTURE_2D,Te,He,Ae,Fe,Pe);v.generateMipmaps=!1}else if(W){if(De){const Te=Ge(Ee);i.texStorage2D(r.TEXTURE_2D,Ie,He,Te.width,Te.height)}Re&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Fe,Ee)}else i.texImage2D(r.TEXTURE_2D,0,He,Ae,Fe,Ee);M(v)&&y(Z),we.__version=ae.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function be(U,v,F){if(v.image.length!==6)return;const Z=Se(U,v),le=v.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+F);const ae=s.get(le);if(le.version!==ae.__version||Z===!0){i.activeTexture(r.TEXTURE0+F);const we=Tt.getPrimaries(Tt.workingColorSpace),Ce=v.colorSpace===ss?null:Tt.getPrimaries(v.colorSpace),Xe=v.colorSpace===ss||we===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Qe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ee=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let ge=0;ge<6;ge++)!Qe&&!Ee?Ae[ge]=C(v.image[ge],!0,l.maxCubemapSize):Ae[ge]=Ee?v.image[ge].image:v.image[ge],Ae[ge]=bt(v,Ae[ge]);const Fe=Ae[0],He=c.convert(v.format,v.colorSpace),Pe=c.convert(v.type),ct=N(v.internalFormat,He,Pe,v.colorSpace),W=v.isVideoTexture!==!0,De=ae.__version===void 0||Z===!0,Re=le.dataReady;let Ie=B(v,Fe);pe(r.TEXTURE_CUBE_MAP,v);let Te;if(Qe){W&&De&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,Fe.width,Fe.height);for(let ge=0;ge<6;ge++){Te=Ae[ge].mipmaps;for(let Ve=0;Ve<Te.length;Ve++){const nt=Te[Ve];v.format!==fi?He!==null?W?Re&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve,0,0,nt.width,nt.height,He,nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve,ct,nt.width,nt.height,0,nt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve,0,0,nt.width,nt.height,He,Pe,nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve,ct,nt.width,nt.height,0,He,Pe,nt.data)}}}else{if(Te=v.mipmaps,W&&De){Te.length>0&&Ie++;const ge=Ge(Ae[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ee){W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ae[ge].width,Ae[ge].height,He,Pe,Ae[ge].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ct,Ae[ge].width,Ae[ge].height,0,He,Pe,Ae[ge].data);for(let Ve=0;Ve<Te.length;Ve++){const Ot=Te[Ve].image[ge].image;W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve+1,0,0,Ot.width,Ot.height,He,Pe,Ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve+1,ct,Ot.width,Ot.height,0,He,Pe,Ot.data)}}else{W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,He,Pe,Ae[ge]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ct,He,Pe,Ae[ge]);for(let Ve=0;Ve<Te.length;Ve++){const nt=Te[Ve];W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve+1,0,0,He,Pe,nt.image[ge]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve+1,ct,He,Pe,nt.image[ge])}}}M(v)&&y(r.TEXTURE_CUBE_MAP),ae.__version=le.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function ye(U,v,F,Z,le,ae){const we=c.convert(F.format,F.colorSpace),Ce=c.convert(F.type),Xe=N(F.internalFormat,we,Ce,F.colorSpace),Qe=s.get(v),Ee=s.get(F);if(Ee.__renderTarget=v,!Qe.__hasExternalTextures){const Ae=Math.max(1,v.width>>ae),Fe=Math.max(1,v.height>>ae);le===r.TEXTURE_3D||le===r.TEXTURE_2D_ARRAY?i.texImage3D(le,ae,Xe,Ae,Fe,v.depth,0,we,Ce,null):i.texImage2D(le,ae,Xe,Ae,Fe,0,we,Ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),jt(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,le,Ee.__webglTexture,0,j(v)):(le===r.TEXTURE_2D||le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,le,Ee.__webglTexture,ae),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(U,v,F){if(r.bindRenderbuffer(r.RENDERBUFFER,U),v.depthBuffer){const Z=v.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,ae=L(v.stencilBuffer,le),we=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;jt(v)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(v),ae,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(v),ae,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ae,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,U)}else{const Z=v.textures;for(let le=0;le<Z.length;le++){const ae=Z[le],we=c.convert(ae.format,ae.colorSpace),Ce=c.convert(ae.type),Xe=N(ae.internalFormat,we,Ce,ae.colorSpace);jt(v)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(v),Xe,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(v),Xe,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Xe,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ke(U,v,F){const Z=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=s.get(v.depthTexture);if(le.__renderTarget=v,(!le.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(le.__webglInit===void 0&&(le.__webglInit=!0,v.depthTexture.addEventListener("dispose",G)),le.__webglTexture===void 0){le.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),pe(r.TEXTURE_CUBE_MAP,v.depthTexture);const Qe=c.convert(v.depthTexture.format),Ee=c.convert(v.depthTexture.type);let Ae;v.depthTexture.format===ba?Ae=r.DEPTH_COMPONENT24:v.depthTexture.format===Ps&&(Ae=r.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ae,v.width,v.height,0,Qe,Ee,null)}}else Q(v.depthTexture,0);const ae=le.__webglTexture,we=j(v),Ce=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,Xe=v.depthTexture.format===Ps?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===ba)jt(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Ce,ae,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Ce,ae,0);else if(v.depthTexture.format===Ps)jt(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Ce,ae,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Ce,ae,0);else throw new Error("Unknown depthTexture format")}function $e(U){const v=s.get(U),F=U.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==U.depthTexture){const Z=U.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const le=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),v.__depthDisposeCallback=le}v.__boundDepthTexture=Z}if(U.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)Ke(v.__webglFramebuffer[Z],U,Z);else{const Z=U.texture.mipmaps;Z&&Z.length>0?Ke(v.__webglFramebuffer[0],U,0):Ke(v.__webglFramebuffer,U,0)}else if(F){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=r.createRenderbuffer(),Je(v.__webglDepthbuffer[Z],U,!1);else{const le=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ae)}}else{const Z=U.texture.mipmaps;if(Z&&Z.length>0?i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Je(v.__webglDepthbuffer,U,!1);else{const le=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ae)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(U,v,F){const Z=s.get(U);v!==void 0&&ye(Z.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&$e(U)}function ht(U){const v=U.texture,F=s.get(U),Z=s.get(v);U.addEventListener("dispose",k);const le=U.textures,ae=U.isWebGLCubeRenderTarget===!0,we=le.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=v.version,f.memory.textures++),ae){F.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[Ce]=[];for(let Xe=0;Xe<v.mipmaps.length;Xe++)F.__webglFramebuffer[Ce][Xe]=r.createFramebuffer()}else F.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)F.__webglFramebuffer[Ce]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(we)for(let Ce=0,Xe=le.length;Ce<Xe;Ce++){const Qe=s.get(le[Ce]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),f.memory.textures++)}if(U.samples>0&&jt(U)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Ce=0;Ce<le.length;Ce++){const Xe=le[Ce];F.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[Ce]);const Qe=c.convert(Xe.format,Xe.colorSpace),Ee=c.convert(Xe.type),Ae=N(Xe.internalFormat,Qe,Ee,Xe.colorSpace,U.isXRRenderTarget===!0),Fe=j(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Ae,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,F.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(F.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),pe(r.TEXTURE_CUBE_MAP,v);for(let Ce=0;Ce<6;Ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let Xe=0;Xe<v.mipmaps.length;Xe++)ye(F.__webglFramebuffer[Ce][Xe],U,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe);else ye(F.__webglFramebuffer[Ce],U,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);M(v)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(we){for(let Ce=0,Xe=le.length;Ce<Xe;Ce++){const Qe=le[Ce],Ee=s.get(Qe);let Ae=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Ee.__webglTexture),pe(Ae,Qe),ye(F.__webglFramebuffer,U,Qe,r.COLOR_ATTACHMENT0+Ce,Ae,0),M(Qe)&&y(Ae)}i.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ce,Z.__webglTexture),pe(Ce,v),v.mipmaps&&v.mipmaps.length>0)for(let Xe=0;Xe<v.mipmaps.length;Xe++)ye(F.__webglFramebuffer[Xe],U,v,r.COLOR_ATTACHMENT0,Ce,Xe);else ye(F.__webglFramebuffer,U,v,r.COLOR_ATTACHMENT0,Ce,0);M(v)&&y(Ce),i.unbindTexture()}U.depthBuffer&&$e(U)}function _t(U){const v=U.textures;for(let F=0,Z=v.length;F<Z;F++){const le=v[F];if(M(le)){const ae=D(U),we=s.get(le).__webglTexture;i.bindTexture(ae,we),y(ae),i.unbindTexture()}}}const Ct=[],rt=[];function yt(U){if(U.samples>0){if(jt(U)===!1){const v=U.textures,F=U.width,Z=U.height;let le=r.COLOR_BUFFER_BIT;const ae=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=s.get(U),Ce=v.length>1;if(Ce)for(let Qe=0;Qe<v.length;Qe++)i.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Xe=U.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Qe=0;Qe<v.length;Qe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(le|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(le|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[Qe]);const Ee=s.get(v[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,F,Z,0,0,F,Z,le,r.NEAREST),m===!0&&(Ct.length=0,rt.length=0,Ct.push(r.COLOR_ATTACHMENT0+Qe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ct.push(ae),rt.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,rt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Qe=0;Qe<v.length;Qe++){i.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,we.__webglColorRenderbuffer[Qe]);const Ee=s.get(v[Qe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,Ee,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const v=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function j(U){return Math.min(l.maxSamples,U.samples)}function jt(U){const v=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Mt(U){const v=f.render.frame;g.get(U)!==v&&(g.set(U,v),U.update())}function bt(U,v){const F=U.colorSpace,Z=U.format,le=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||F!==zr&&F!==ss&&(Tt.getTransfer(F)===Bt?(Z!==fi||le!==ui)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",F)),v}function Ge(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=se,this.resetTextureUnits=te,this.setTexture2D=Q,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=de,this.rebindTextures=qt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function YR(r,e){function i(s,l=ss){let c;const f=Tt.getTransfer(l);if(s===ui)return r.UNSIGNED_BYTE;if(s===cp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===up)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ox)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Px)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ux)return r.BYTE;if(s===Lx)return r.SHORT;if(s===el)return r.UNSIGNED_SHORT;if(s===lp)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Ti)return r.FLOAT;if(s===Xi)return r.HALF_FLOAT;if(s===Ix)return r.ALPHA;if(s===Fx)return r.RGB;if(s===fi)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===Ps)return r.DEPTH_STENCIL;if(s===Bx)return r.RED;if(s===fp)return r.RED_INTEGER;if(s===Br)return r.RG;if(s===dp)return r.RG_INTEGER;if(s===hp)return r.RGBA_INTEGER;if(s===Kc||s===Qc||s===Jc||s===$c)if(f===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sh||s===yh||s===Mh||s===bh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Sh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eh||s===Th||s===Ah||s===Rh||s===wh||s===Ch||s===Dh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Eh||s===Th)return f===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ah)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Rh)return c.COMPRESSED_R11_EAC;if(s===wh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ch)return c.COMPRESSED_RG11_EAC;if(s===Dh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Nh||s===Uh||s===Lh||s===Oh||s===Ph||s===Ih||s===Fh||s===Bh||s===zh||s===Hh||s===Gh||s===Vh||s===kh||s===jh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Nh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Oh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ph)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ih)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===jh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xh||s===Wh||s===qh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Xh)return f===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yh||s===Zh||s===Kh||s===Qh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Yh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Zh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===tl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const ZR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KR=`
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

}`;class QR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Kx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Wi({vertexShader:ZR,fragmentShader:KR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new Is(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JR extends kr{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,g=null,S=null,x=null,b=null,T=null;const C=typeof XRWebGLBinding<"u",M=new QR,y={},D=i.getContextAttributes();let N=null,L=null;const B=[],G=[],k=new ot;let A=null;const O=new bi;O.viewport=new tn;const he=new bi;he.viewport=new tn;const V=[O,he],te=new cE;let se=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let be=B[ee];return be===void 0&&(be=new Id,B[ee]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ee){let be=B[ee];return be===void 0&&(be=new Id,B[ee]=be),be.getGripSpace()},this.getHand=function(ee){let be=B[ee];return be===void 0&&(be=new Id,B[ee]=be),be.getHandSpace()};function Q(ee){const be=G.indexOf(ee.inputSource);if(be===-1)return;const ye=B[be];ye!==void 0&&(ye.update(ee.inputSource,ee.frame,h||f),ye.dispatchEvent({type:ee.type,data:ee.inputSource}))}function I(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let ee=0;ee<B.length;ee++){const be=G[ee];be!==null&&(G[ee]=null,B[ee].disconnect(be))}se=null,ue=null,M.reset();for(const ee in y)delete y[ee];e.setRenderTarget(N),b=null,x=null,S=null,l=null,L=null,Ye.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){p=ee,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(k),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Je=null,Ke=null;D.depth&&(Ke=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=D.stencil?Ps:ba,Je=D.stencil?tl:ji);const $e={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:c};S=this.getBinding(),x=S.createProjectionLayer($e),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Ai(x.textureWidth,x.textureHeight,{format:fi,type:ui,depthTexture:new nl(x.textureWidth,x.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),L=new Ai(b.framebufferWidth,b.framebufferHeight,{format:fi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Ye.setContext(l),Ye.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ee){for(let be=0;be<ee.removed.length;be++){const ye=ee.removed[be],Je=G.indexOf(ye);Je>=0&&(G[Je]=null,B[Je].disconnect(ye))}for(let be=0;be<ee.added.length;be++){const ye=ee.added[be];let Je=G.indexOf(ye);if(Je===-1){for(let $e=0;$e<B.length;$e++)if($e>=G.length){G.push(ye),Je=$e;break}else if(G[$e]===null){G[$e]=ye,Je=$e;break}if(Je===-1)break}const Ke=B[Je];Ke&&Ke.connect(ye)}}const de=new oe,ve=new oe;function P(ee,be,ye){de.setFromMatrixPosition(be.matrixWorld),ve.setFromMatrixPosition(ye.matrixWorld);const Je=de.distanceTo(ve),Ke=be.projectionMatrix.elements,$e=ye.projectionMatrix.elements,qt=Ke[14]/(Ke[10]-1),ht=Ke[14]/(Ke[10]+1),_t=(Ke[9]+1)/Ke[5],Ct=(Ke[9]-1)/Ke[5],rt=(Ke[8]-1)/Ke[0],yt=($e[8]+1)/$e[0],j=qt*rt,jt=qt*yt,Mt=Je/(-rt+yt),bt=Mt*-rt;if(be.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(bt),ee.translateZ(Mt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ke[10]===-1)ee.projectionMatrix.copy(be.projectionMatrix),ee.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const Ge=qt+Mt,U=ht+Mt,v=j-bt,F=jt+(Je-bt),Z=_t*ht/U*Ge,le=Ct*ht/U*Ge;ee.projectionMatrix.makePerspective(v,F,Z,le,Ge,U),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function K(ee,be){be===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(be.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let be=ee.near,ye=ee.far;M.texture!==null&&(M.depthNear>0&&(be=M.depthNear),M.depthFar>0&&(ye=M.depthFar)),te.near=he.near=O.near=be,te.far=he.far=O.far=ye,(se!==te.near||ue!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),se=te.near,ue=te.far),te.layers.mask=ee.layers.mask|6,O.layers.mask=te.layers.mask&-5,he.layers.mask=te.layers.mask&-3;const Je=ee.parent,Ke=te.cameras;K(te,Je);for(let $e=0;$e<Ke.length;$e++)K(Ke[$e],Je);Ke.length===2?P(te,O,he):te.projectionMatrix.copy(O.projectionMatrix),pe(ee,te,Je)};function pe(ee,be,ye){ye===null?ee.matrix.copy(be.matrixWorld):(ee.matrix.copy(ye.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(be.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(be.projectionMatrix),ee.projectionMatrixInverse.copy(be.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Jh*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(x===null&&b===null))return m},this.setFoveation=function(ee){m=ee,x!==null&&(x.fixedFoveation=ee),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(te)},this.getCameraTexture=function(ee){return y[ee]};let Se=null;function Ue(ee,be){if(g=be.getViewerPose(h||f),T=be,g!==null){const ye=g.views;b!==null&&(e.setRenderTargetFramebuffer(L,b.framebuffer),e.setRenderTarget(L));let Je=!1;ye.length!==te.cameras.length&&(te.cameras.length=0,Je=!0);for(let ht=0;ht<ye.length;ht++){const _t=ye[ht];let Ct=null;if(b!==null)Ct=b.getViewport(_t);else{const yt=S.getViewSubImage(x,_t);Ct=yt.viewport,ht===0&&(e.setRenderTargetTextures(L,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(L))}let rt=V[ht];rt===void 0&&(rt=new bi,rt.layers.enable(ht),rt.viewport=new tn,V[ht]=rt),rt.matrix.fromArray(_t.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(_t.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ht===0&&(te.matrix.copy(rt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Je===!0&&te.cameras.push(rt)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const ht=S.getDepthInformation(ye[0]);ht&&ht.isValid&&ht.texture&&M.init(ht,l.renderState)}if(Ke&&Ke.includes("camera-access")&&C){e.state.unbindTexture(),S=s.getBinding();for(let ht=0;ht<ye.length;ht++){const _t=ye[ht].camera;if(_t){let Ct=y[_t];Ct||(Ct=new Kx,y[_t]=Ct);const rt=S.getCameraImage(_t);Ct.sourceTexture=rt}}}}for(let ye=0;ye<B.length;ye++){const Je=G[ye],Ke=B[ye];Je!==null&&Ke!==void 0&&Ke.update(Je,be,h||f)}Se&&Se(ee,be),be.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:be}),T=null}const Ye=new $x;Ye.setAnimationLoop(Ue),this.setAnimationLoop=function(ee){Se=ee},this.dispose=function(){}}}const Cs=new Ea,$R=new ln;function ew(r,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,Qx(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,D,N,L){y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),S(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),x(M,y),y.isMeshPhysicalMaterial&&b(M,y,L)):y.isMeshMatcapMaterial?(c(M,y),T(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),C(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&p(M,y)):y.isPointsMaterial?m(M,y,D,N):y.isSpriteMaterial?h(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===kn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===kn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=e.get(y),N=D.envMap,L=D.envMapRotation;N&&(M.envMap.value=N,Cs.copy(L),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),M.envMapRotation.value.setFromMatrix4($R.makeRotationFromEuler(Cs)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function p(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,D,N){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=N*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function S(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function x(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function b(M,y,D){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===kn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function C(M,y){const D=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function tw(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,N){const L=N.program;s.uniformBlockBinding(D,L)}function h(D,N){let L=l[D.id];L===void 0&&(T(D),L=g(D),l[D.id]=L,D.addEventListener("dispose",M));const B=N.program;s.updateUBOMapping(D,B);const G=e.render.frame;c[D.id]!==G&&(x(D),c[D.id]=G)}function g(D){const N=S();D.__bindingPointIndex=N;const L=r.createBuffer(),B=D.__size,G=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,B,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,L),L}function S(){for(let D=0;D<p;D++)if(f.indexOf(D)===-1)return f.push(D),D;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const N=l[D.id],L=D.uniforms,B=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let G=0,k=L.length;G<k;G++){const A=Array.isArray(L[G])?L[G]:[L[G]];for(let O=0,he=A.length;O<he;O++){const V=A[O];if(b(V,G,O,B)===!0){const te=V.__offset,se=Array.isArray(V.value)?V.value:[V.value];let ue=0;for(let Q=0;Q<se.length;Q++){const I=se[Q],H=C(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,te+ue,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,ue),ue+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(D,N,L,B){const G=D.value,k=N+"_"+L;if(B[k]===void 0)return typeof G=="number"||typeof G=="boolean"?B[k]=G:B[k]=G.clone(),!0;{const A=B[k];if(typeof G=="number"||typeof G=="boolean"){if(A!==G)return B[k]=G,!0}else if(A.equals(G)===!1)return A.copy(G),!0}return!1}function T(D){const N=D.uniforms;let L=0;const B=16;for(let k=0,A=N.length;k<A;k++){const O=Array.isArray(N[k])?N[k]:[N[k]];for(let he=0,V=O.length;he<V;he++){const te=O[he],se=Array.isArray(te.value)?te.value:[te.value];for(let ue=0,Q=se.length;ue<Q;ue++){const I=se[ue],H=C(I),de=L%B,ve=de%H.boundary,P=de+ve;L+=ve,P!==0&&B-P<H.storage&&(L+=B-P),te.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=L,L+=H.storage}}}const G=L%B;return G>0&&(L+=B-G),D.__size=L,D.__cache={},this}function C(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",D),N}function M(D){const N=D.target;N.removeEventListener("dispose",M);const L=f.indexOf(N.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function y(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:h,dispose:y}}const nw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function iw(){return zi===null&&(zi=new qx(nw,16,16,Br,Xi),zi.name="DFG_LUT",zi.minFilter=dn,zi.magFilter=dn,zi.wrapS=ei,zi.wrapT=ei,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class aw{constructor(e={}){const{canvas:i=Rb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:b=ui}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const C=b,M=new Set([hp,dp,fp]),y=new Set([ui,ji,el,tl,cp,up]),D=new Uint32Array(4),N=new Int32Array(4);let L=null,B=null;const G=[],k=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let he=!1;this._outputColorSpace=ci;let V=0,te=0,se=null,ue=-1,Q=null;const I=new tn,H=new tn;let de=null;const ve=new Lt(0);let P=0,K=i.width,pe=i.height,Se=1,Ue=null,Ye=null;const ee=new tn(0,0,K,pe),be=new tn(0,0,K,pe);let ye=!1;const Je=new Yx;let Ke=!1,$e=!1;const qt=new ln,ht=new oe,_t=new tn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function yt(){return se===null?Se:1}let j=s;function jt(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${op}`),i.addEventListener("webglcontextlost",Ve,!1),i.addEventListener("webglcontextrestored",nt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),j===null){const q="webgl2";if(j=jt(q,w),j===null)throw jt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw wt("WebGLRenderer: "+w.message),w}let Mt,bt,Ge,U,v,F,Z,le,ae,we,Ce,Xe,Qe,Ee,Ae,Fe,He,Pe,ct,W,De,Re,Ie;function Te(){Mt=new aA(j),Mt.init(),De=new YR(j,Mt),bt=new K1(j,Mt,e,De),Ge=new WR(j,Mt),bt.reversedDepthBuffer&&x&&Ge.buffers.depth.setReversed(!0),U=new oA(j),v=new UR,F=new qR(j,Mt,Ge,v,bt,De,U),Z=new iA(O),le=new dE(j),Re=new Y1(j,le),ae=new sA(j,le,U,Re),we=new cA(j,ae,le,Re,U),Pe=new lA(j,bt,F),Ae=new Q1(v),Ce=new NR(O,Z,Mt,bt,Re,Ae),Xe=new ew(O,v),Qe=new OR,Ee=new HR(Mt),He=new q1(O,Z,Ge,we,T,m),Fe=new XR(O,we,bt),Ie=new tw(j,U,bt,Ge),ct=new Z1(j,Mt,U),W=new rA(j,Mt,U),U.programs=Ce.programs,O.capabilities=bt,O.extensions=Mt,O.properties=v,O.renderLists=Qe,O.shadowMap=Fe,O.state=Ge,O.info=U}Te(),C!==ui&&(A=new fA(C,i.width,i.height,l,c));const ge=new JR(O,j);this.xr=ge,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=Mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(w){w!==void 0&&(Se=w,this.setSize(K,pe,!1))},this.getSize=function(w){return w.set(K,pe)},this.setSize=function(w,q,fe=!0){if(ge.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,pe=q,i.width=Math.floor(w*Se),i.height=Math.floor(q*Se),fe===!0&&(i.style.width=w+"px",i.style.height=q+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(K*Se,pe*Se).floor()},this.setDrawingBufferSize=function(w,q,fe){K=w,pe=q,Se=fe,i.width=Math.floor(w*fe),i.height=Math.floor(q*fe),this.setViewport(0,0,w,q)},this.setEffects=function(w){if(C===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let q=0;q<w.length;q++)if(w[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(ee)},this.setViewport=function(w,q,fe,ie){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,q,fe,ie),Ge.viewport(I.copy(ee).multiplyScalar(Se).round())},this.getScissor=function(w){return w.copy(be)},this.setScissor=function(w,q,fe,ie){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,q,fe,ie),Ge.scissor(H.copy(be).multiplyScalar(Se).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){Ge.setScissorTest(ye=w)},this.setOpaqueSort=function(w){Ue=w},this.setTransparentSort=function(w){Ye=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,fe=!0){let ie=0;if(w){let J=!1;if(se!==null){const Le=se.texture.format;J=M.has(Le)}if(J){const Le=se.texture.type,Be=y.has(Le),Ne=He.getClearColor(),ke=He.getClearAlpha(),We=Ne.r,st=Ne.g,lt=Ne.b;Be?(D[0]=We,D[1]=st,D[2]=lt,D[3]=ke,j.clearBufferuiv(j.COLOR,0,D)):(N[0]=We,N[1]=st,N[2]=lt,N[3]=ke,j.clearBufferiv(j.COLOR,0,N))}else ie|=j.COLOR_BUFFER_BIT}q&&(ie|=j.DEPTH_BUFFER_BIT),fe&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ve,!1),i.removeEventListener("webglcontextrestored",nt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),He.dispose(),Qe.dispose(),Ee.dispose(),v.dispose(),Z.dispose(),we.dispose(),Re.dispose(),Ie.dispose(),Ce.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Bs),ge.removeEventListener("sessionend",ul),qi.stop()};function Ve(w){w.preventDefault(),uv("WebGLRenderer: Context Lost."),he=!0}function nt(){uv("WebGLRenderer: Context Restored."),he=!1;const w=U.autoReset,q=Fe.enabled,fe=Fe.autoUpdate,ie=Fe.needsUpdate,J=Fe.type;Te(),U.autoReset=w,Fe.enabled=q,Fe.autoUpdate=fe,Fe.needsUpdate=ie,Fe.type=J}function Ot(w){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function At(w){const q=w.target;q.removeEventListener("dispose",At),pi(q)}function pi(w){xn(w),v.remove(w)}function xn(w){const q=v.get(w).programs;q!==void 0&&(q.forEach(function(fe){Ce.releaseProgram(fe)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,fe,ie,J,Le){q===null&&(q=Ct);const Be=J.isMesh&&J.matrixWorld.determinant()<0,Ne=fl(w,q,fe,ie,J);Ge.setMaterial(ie,Be);let ke=fe.index,We=1;if(ie.wireframe===!0){if(ke=ae.getWireframeAttribute(fe),ke===void 0)return;We=2}const st=fe.drawRange,lt=fe.attributes.position;let ze=st.start*We,Dt=(st.start+st.count)*We;Le!==null&&(ze=Math.max(ze,Le.start*We),Dt=Math.min(Dt,(Le.start+Le.count)*We)),ke!==null?(ze=Math.max(ze,0),Dt=Math.min(Dt,ke.count)):lt!=null&&(ze=Math.max(ze,0),Dt=Math.min(Dt,lt.count));const Kt=Dt-ze;if(Kt<0||Kt===1/0)return;Re.setup(J,ie,Ne,fe,ke);let Vt,Nt=ct;if(ke!==null&&(Vt=le.get(ke),Nt=W,Nt.setIndex(Vt)),J.isMesh)ie.wireframe===!0?(Ge.setLineWidth(ie.wireframeLinewidth*yt()),Nt.setMode(j.LINES)):Nt.setMode(j.TRIANGLES);else if(J.isLine){let an=ie.linewidth;an===void 0&&(an=1),Ge.setLineWidth(an*yt()),J.isLineSegments?Nt.setMode(j.LINES):J.isLineLoop?Nt.setMode(j.LINE_LOOP):Nt.setMode(j.LINE_STRIP)}else J.isPoints?Nt.setMode(j.POINTS):J.isSprite&&Nt.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)su("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const an=J._multiDrawStarts,qe=J._multiDrawCounts,Xt=J._multiDrawCount,xt=ke?le.get(ke).bytesPerElement:1,Pn=v.get(ie).currentProgram.getUniforms();for(let In=0;In<Xt;In++)Pn.setValue(j,"_gl_DrawID",In),Nt.render(an[In]/xt,qe[In])}else if(J.isInstancedMesh)Nt.renderInstances(ze,Kt,J.count);else if(fe.isInstancedBufferGeometry){const an=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,qe=Math.min(fe.instanceCount,an);Nt.renderInstances(ze,Kt,qe)}else Nt.render(ze,Kt)};function hn(w,q,fe){w.transparent===!0&&w.side===xa&&w.forceSinglePass===!1?(w.side=kn,w.needsUpdate=!0,Di(w,q,fe),w.side=os,w.needsUpdate=!0,Di(w,q,fe),w.side=xa):Di(w,q,fe)}this.compile=function(w,q,fe=null){fe===null&&(fe=w),B=Ee.get(fe),B.init(q),k.push(B),fe.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),w!==fe&&w.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),B.setupLights();const ie=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Le=J.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const Ne=Le[Be];hn(Ne,fe,J),ie.add(Ne)}else hn(Le,fe,J),ie.add(Le)}),B=k.pop(),ie},this.compileAsync=function(w,q,fe=null){const ie=this.compile(w,q,fe);return new Promise(J=>{function Le(){if(ie.forEach(function(Be){v.get(Be).currentProgram.isReady()&&ie.delete(Be)}),ie.size===0){J(w);return}setTimeout(Le,10)}Mt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let _n=null;function Ra(w){_n&&_n(w)}function Bs(){qi.stop()}function ul(){qi.start()}const qi=new $x;qi.setAnimationLoop(Ra),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(w){_n=w,ge.setAnimationLoop(w),w===null?qi.stop():qi.start()},ge.addEventListener("sessionstart",Bs),ge.addEventListener("sessionend",ul),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(he===!0)return;const fe=ge.enabled===!0&&ge.isPresenting===!0,ie=A!==null&&(se===null||fe)&&A.begin(O,se);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(q),q=ge.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,q,se),B=Ee.get(w,k.length),B.init(q),k.push(B),qt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Je.setFromProjectionMatrix(qt,Gi,q.reversedDepth),$e=this.localClippingEnabled,Ke=Ae.init(this.clippingPlanes,$e),L=Qe.get(w,G.length),L.init(),G.push(L),ge.enabled===!0&&ge.isPresenting===!0){const Be=O.xr.getDepthSensingMesh();Be!==null&&zs(Be,q,-1/0,O.sortObjects)}zs(w,q,0,O.sortObjects),L.finish(),O.sortObjects===!0&&L.sort(Ue,Ye),rt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,rt&&He.addToRenderList(L,w),this.info.render.frame++,Ke===!0&&Ae.beginShadows();const J=B.state.shadowsArray;if(Fe.render(J,w,q),Ke===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&A.hasRenderPass())===!1){const Be=L.opaque,Ne=L.transmissive;if(B.setupLights(),q.isArrayCamera){const ke=q.cameras;if(Ne.length>0)for(let We=0,st=ke.length;We<st;We++){const lt=ke[We];Hs(Be,Ne,w,lt)}rt&&He.render(w);for(let We=0,st=ke.length;We<st;We++){const lt=ke[We];wa(L,w,lt,lt.viewport)}}else Ne.length>0&&Hs(Be,Ne,w,q),rt&&He.render(w),wa(L,w,q)}se!==null&&te===0&&(F.updateMultisampleRenderTarget(se),F.updateRenderTargetMipmap(se)),ie&&A.end(O),w.isScene===!0&&w.onAfterRender(O,w,q),Re.resetDefaultState(),ue=-1,Q=null,k.pop(),k.length>0?(B=k[k.length-1],Ke===!0&&Ae.setGlobalState(O.clippingPlanes,B.state.camera)):B=null,G.pop(),G.length>0?L=G[G.length-1]:L=null};function zs(w,q,fe,ie){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)fe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)B.pushLight(w),w.castShadow&&B.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){ie&&_t.setFromMatrixPosition(w.matrixWorld).applyMatrix4(qt);const Be=we.update(w),Ne=w.material;Ne.visible&&L.push(w,Be,Ne,fe,_t.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const Be=we.update(w),Ne=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_t.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),_t.copy(Be.boundingSphere.center)),_t.applyMatrix4(w.matrixWorld).applyMatrix4(qt)),Array.isArray(Ne)){const ke=Be.groups;for(let We=0,st=ke.length;We<st;We++){const lt=ke[We],ze=Ne[lt.materialIndex];ze&&ze.visible&&L.push(w,Be,ze,fe,_t.z,lt)}}else Ne.visible&&L.push(w,Be,Ne,fe,_t.z,null)}}const Le=w.children;for(let Be=0,Ne=Le.length;Be<Ne;Be++)zs(Le[Be],q,fe,ie)}function wa(w,q,fe,ie){const{opaque:J,transmissive:Le,transparent:Be}=w;B.setupLightsView(fe),Ke===!0&&Ae.setGlobalState(O.clippingPlanes,fe),ie&&Ge.viewport(I.copy(ie)),J.length>0&&mi(J,q,fe),Le.length>0&&mi(Le,q,fe),Be.length>0&&mi(Be,q,fe),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Hs(w,q,fe,ie){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ie.id]===void 0){const ze=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ie.id]=new Ai(1,1,{generateMipmaps:!0,type:ze?Xi:ui,minFilter:Os,samples:bt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Le=B.state.transmissionRenderTarget[ie.id],Be=ie.viewport||I;Le.setSize(Be.z*O.transmissionResolutionScale,Be.w*O.transmissionResolutionScale);const Ne=O.getRenderTarget(),ke=O.getActiveCubeFace(),We=O.getActiveMipmapLevel();O.setRenderTarget(Le),O.getClearColor(ve),P=O.getClearAlpha(),P<1&&O.setClearColor(16777215,.5),O.clear(),rt&&He.render(fe);const st=O.toneMapping;O.toneMapping=Vi;const lt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),B.setupLightsView(ie),Ke===!0&&Ae.setGlobalState(O.clippingPlanes,ie),mi(w,fe,ie),F.updateMultisampleRenderTarget(Le),F.updateRenderTargetMipmap(Le),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Dt=0,Kt=q.length;Dt<Kt;Dt++){const Vt=q[Dt],{object:Nt,geometry:an,material:qe,group:Xt}=Vt;if(qe.side===xa&&Nt.layers.test(ie.layers)){const xt=qe.side;qe.side=kn,qe.needsUpdate=!0,Yi(Nt,fe,ie,an,qe,Xt),qe.side=xt,qe.needsUpdate=!0,ze=!0}}ze===!0&&(F.updateMultisampleRenderTarget(Le),F.updateRenderTargetMipmap(Le))}O.setRenderTarget(Ne,ke,We),O.setClearColor(ve,P),lt!==void 0&&(ie.viewport=lt),O.toneMapping=st}function mi(w,q,fe){const ie=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Le=w.length;J<Le;J++){const Be=w[J],{object:Ne,geometry:ke,group:We}=Be;let st=Be.material;st.allowOverride===!0&&ie!==null&&(st=ie),Ne.layers.test(fe.layers)&&Yi(Ne,q,fe,ke,st,We)}}function Yi(w,q,fe,ie,J,Le){w.onBeforeRender(O,q,fe,ie,J,Le),w.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(O,q,fe,ie,w,Le),J.transparent===!0&&J.side===xa&&J.forceSinglePass===!1?(J.side=kn,J.needsUpdate=!0,O.renderBufferDirect(fe,q,ie,J,w,Le),J.side=os,J.needsUpdate=!0,O.renderBufferDirect(fe,q,ie,J,w,Le),J.side=xa):O.renderBufferDirect(fe,q,ie,J,w,Le),w.onAfterRender(O,q,fe,ie,J,Le)}function Di(w,q,fe){q.isScene!==!0&&(q=Ct);const ie=v.get(w),J=B.state.lights,Le=B.state.shadowsArray,Be=J.state.version,Ne=Ce.getParameters(w,J.state,Le,q,fe),ke=Ce.getProgramCacheKey(Ne);let We=ie.programs;ie.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const st=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ie.envMap=Z.get(w.envMap||ie.environment,st),ie.envMapRotation=ie.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",At),We=new Map,ie.programs=We);let lt=We.get(ke);if(lt!==void 0){if(ie.currentProgram===lt&&ie.lightsStateVersion===Be)return nn(w,Ne),lt}else Ne.uniforms=Ce.getUniforms(w),w.onBeforeCompile(Ne,O),lt=Ce.acquireProgram(Ne,ke),We.set(ke,lt),ie.uniforms=Ne.uniforms;const ze=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=Ae.uniform),nn(w,Ne),ie.needsLights=Ki(w),ie.lightsStateVersion=Be,ie.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix),ie.currentProgram=lt,ie.uniformsList=null,lt}function Zi(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=eu.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function nn(w,q){const fe=v.get(w);fe.outputColorSpace=q.outputColorSpace,fe.batching=q.batching,fe.batchingColor=q.batchingColor,fe.instancing=q.instancing,fe.instancingColor=q.instancingColor,fe.instancingMorph=q.instancingMorph,fe.skinning=q.skinning,fe.morphTargets=q.morphTargets,fe.morphNormals=q.morphNormals,fe.morphColors=q.morphColors,fe.morphTargetsCount=q.morphTargetsCount,fe.numClippingPlanes=q.numClippingPlanes,fe.numIntersection=q.numClipIntersection,fe.vertexAlphas=q.vertexAlphas,fe.vertexTangents=q.vertexTangents,fe.toneMapping=q.toneMapping}function fl(w,q,fe,ie,J){q.isScene!==!0&&(q=Ct),F.resetTextureUnits();const Le=q.fog,Be=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,Ne=se===null?O.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:zr,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,We=Z.get(ie.envMap||Be,ke),st=ie.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,lt=!!fe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ze=!!fe.morphAttributes.position,Dt=!!fe.morphAttributes.normal,Kt=!!fe.morphAttributes.color;let Vt=Vi;ie.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Vt=O.toneMapping);const Nt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,an=Nt!==void 0?Nt.length:0,qe=v.get(ie),Xt=B.state.lights;if(Ke===!0&&($e===!0||w!==Q)){const sn=w===Q&&ie.id===ue;Ae.setState(ie,w,sn)}let xt=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Xt.state.version||qe.outputColorSpace!==Ne||J.isBatchedMesh&&qe.batching===!1||!J.isBatchedMesh&&qe.batching===!0||J.isBatchedMesh&&qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&qe.instancing===!1||!J.isInstancedMesh&&qe.instancing===!0||J.isSkinnedMesh&&qe.skinning===!1||!J.isSkinnedMesh&&qe.skinning===!0||J.isInstancedMesh&&qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&qe.instancingMorph===!1&&J.morphTexture!==null||qe.envMap!==We||ie.fog===!0&&qe.fog!==Le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ae.numPlanes||qe.numIntersection!==Ae.numIntersection)||qe.vertexAlphas!==st||qe.vertexTangents!==lt||qe.morphTargets!==ze||qe.morphNormals!==Dt||qe.morphColors!==Kt||qe.toneMapping!==Vt||qe.morphTargetsCount!==an)&&(xt=!0):(xt=!0,qe.__version=ie.version);let Pn=qe.currentProgram;xt===!0&&(Pn=Di(ie,q,J));let In=!1,Fn=!1,Qi=!1;const Pt=Pn.getUniforms(),Yt=qe.uniforms;if(Ge.useProgram(Pn.program)&&(In=!0,Fn=!0,Qi=!0),ie.id!==ue&&(ue=ie.id,Fn=!0),In||Q!==w){Ge.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pt.setValue(j,"projectionMatrix",w.projectionMatrix),Pt.setValue(j,"viewMatrix",w.matrixWorldInverse);const gi=Pt.map.cameraPosition;gi!==void 0&&gi.setValue(j,ht.setFromMatrixPosition(w.matrixWorld)),bt.logarithmicDepthBuffer&&Pt.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,Fn=!0,Qi=!0)}if(qe.needsLights&&(Xt.state.directionalShadowMap.length>0&&Pt.setValue(j,"directionalShadowMap",Xt.state.directionalShadowMap,F),Xt.state.spotShadowMap.length>0&&Pt.setValue(j,"spotShadowMap",Xt.state.spotShadowMap,F),Xt.state.pointShadowMap.length>0&&Pt.setValue(j,"pointShadowMap",Xt.state.pointShadowMap,F)),J.isSkinnedMesh){Pt.setOptional(j,J,"bindMatrix"),Pt.setOptional(j,J,"bindMatrixInverse");const sn=J.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Pt.setValue(j,"boneTexture",sn.boneTexture,F))}J.isBatchedMesh&&(Pt.setOptional(j,J,"batchingTexture"),Pt.setValue(j,"batchingTexture",J._matricesTexture,F),Pt.setOptional(j,J,"batchingIdTexture"),Pt.setValue(j,"batchingIdTexture",J._indirectTexture,F),Pt.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&Pt.setValue(j,"batchingColorTexture",J._colorsTexture,F));const Ni=fe.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Pe.update(J,fe,Pn),(Fn||qe.receiveShadow!==J.receiveShadow)&&(qe.receiveShadow=J.receiveShadow,Pt.setValue(j,"receiveShadow",J.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Yt.envMapIntensity.value=q.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=iw()),Fn&&(Pt.setValue(j,"toneMappingExposure",O.toneMappingExposure),qe.needsLights&&dl(Yt,Qi),Le&&ie.fog===!0&&Xe.refreshFogUniforms(Yt,Le),Xe.refreshMaterialUniforms(Yt,ie,Se,pe,B.state.transmissionRenderTarget[w.id]),eu.upload(j,Zi(qe),Yt,F)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(eu.upload(j,Zi(qe),Yt,F),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(j,"center",J.center),Pt.setValue(j,"modelViewMatrix",J.modelViewMatrix),Pt.setValue(j,"normalMatrix",J.normalMatrix),Pt.setValue(j,"modelMatrix",J.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const sn=ie.uniformsGroups;for(let gi=0,Ui=sn.length;gi<Ui;gi++){const pl=sn[gi];Ie.update(pl,Pn),Ie.bind(pl,Pn)}}return Pn}function dl(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function Ki(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(w,q,fe){const ie=v.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),v.get(w.texture).__webglTexture=q,v.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:fe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const fe=v.get(w);fe.__webglFramebuffer=q,fe.__useDefaultFramebuffer=q===void 0};const Ca=j.createFramebuffer();this.setRenderTarget=function(w,q=0,fe=0){se=w,V=q,te=fe;let ie=null,J=!1,Le=!1;if(w){const Ne=v.get(w);if(Ne.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(j.FRAMEBUFFER,Ne.__webglFramebuffer),I.copy(w.viewport),H.copy(w.scissor),de=w.scissorTest,Ge.viewport(I),Ge.scissor(H),Ge.setScissorTest(de),ue=-1;return}else if(Ne.__webglFramebuffer===void 0)F.setupRenderTarget(w);else if(Ne.__hasExternalTextures)F.rebindTextures(w,v.get(w.texture).__webglTexture,v.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const st=w.depthTexture;if(Ne.__boundDepthTexture!==st){if(st!==null&&v.has(st)&&(w.width!==st.image.width||w.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Le=!0);const We=v.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[q])?ie=We[q][fe]:ie=We[q],J=!0):w.samples>0&&F.useMultisampledRTT(w)===!1?ie=v.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?ie=We[fe]:ie=We,I.copy(w.viewport),H.copy(w.scissor),de=w.scissorTest}else I.copy(ee).multiplyScalar(Se).floor(),H.copy(be).multiplyScalar(Se).floor(),de=ye;if(fe!==0&&(ie=Ca),Ge.bindFramebuffer(j.FRAMEBUFFER,ie)&&Ge.drawBuffers(w,ie),Ge.viewport(I),Ge.scissor(H),Ge.setScissorTest(de),J){const Ne=v.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,fe)}else if(Le){const Ne=q;for(let ke=0;ke<w.textures.length;ke++){const We=v.get(w.textures[ke]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+ke,We.__webglTexture,fe,Ne)}}else if(w!==null&&fe!==0){const Ne=v.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ne.__webglTexture,fe)}ue=-1},this.readRenderTargetPixels=function(w,q,fe,ie,J,Le,Be,Ne=0){if(!(w&&w.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=v.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke){Ge.bindFramebuffer(j.FRAMEBUFFER,ke);try{const We=w.textures[Ne],st=We.format,lt=We.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ne),!bt.textureFormatReadable(st)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(lt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-ie&&fe>=0&&fe<=w.height-J&&j.readPixels(q,fe,ie,J,De.convert(st),De.convert(lt),Le)}finally{const We=se!==null?v.get(se).__webglFramebuffer:null;Ge.bindFramebuffer(j.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,q,fe,ie,J,Le,Be,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=v.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke)if(q>=0&&q<=w.width-ie&&fe>=0&&fe<=w.height-J){Ge.bindFramebuffer(j.FRAMEBUFFER,ke);const We=w.textures[Ne],st=We.format,lt=We.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ne),!bt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ze),j.bufferData(j.PIXEL_PACK_BUFFER,Le.byteLength,j.STREAM_READ),j.readPixels(q,fe,ie,J,De.convert(st),De.convert(lt),0);const Dt=se!==null?v.get(se).__webglFramebuffer:null;Ge.bindFramebuffer(j.FRAMEBUFFER,Dt);const Kt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await wb(j,Kt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ze),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Le),j.deleteBuffer(ze),j.deleteSync(Kt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,fe=0){const ie=Math.pow(2,-fe),J=Math.floor(w.image.width*ie),Le=Math.floor(w.image.height*ie),Be=q!==null?q.x:0,Ne=q!==null?q.y:0;F.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,Be,Ne,J,Le),Ge.unbindTexture()};const mu=j.createFramebuffer(),hl=j.createFramebuffer();this.copyTextureToTexture=function(w,q,fe=null,ie=null,J=0,Le=0){let Be,Ne,ke,We,st,lt,ze,Dt,Kt;const Vt=w.isCompressedTexture?w.mipmaps[Le]:w.image;if(fe!==null)Be=fe.max.x-fe.min.x,Ne=fe.max.y-fe.min.y,ke=fe.isBox3?fe.max.z-fe.min.z:1,We=fe.min.x,st=fe.min.y,lt=fe.isBox3?fe.min.z:0;else{const Yt=Math.pow(2,-J);Be=Math.floor(Vt.width*Yt),Ne=Math.floor(Vt.height*Yt),w.isDataArrayTexture?ke=Vt.depth:w.isData3DTexture?ke=Math.floor(Vt.depth*Yt):ke=1,We=0,st=0,lt=0}ie!==null?(ze=ie.x,Dt=ie.y,Kt=ie.z):(ze=0,Dt=0,Kt=0);const Nt=De.convert(q.format),an=De.convert(q.type);let qe;q.isData3DTexture?(F.setTexture3D(q,0),qe=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(F.setTexture2DArray(q,0),qe=j.TEXTURE_2D_ARRAY):(F.setTexture2D(q,0),qe=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Xt=j.getParameter(j.UNPACK_ROW_LENGTH),xt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Pn=j.getParameter(j.UNPACK_SKIP_PIXELS),In=j.getParameter(j.UNPACK_SKIP_ROWS),Fn=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Vt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Vt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,We),j.pixelStorei(j.UNPACK_SKIP_ROWS,st),j.pixelStorei(j.UNPACK_SKIP_IMAGES,lt);const Qi=w.isDataArrayTexture||w.isData3DTexture,Pt=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const Yt=v.get(w),Ni=v.get(q),sn=v.get(Yt.__renderTarget),gi=v.get(Ni.__renderTarget);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,sn.__webglFramebuffer),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Ui=0;Ui<ke;Ui++)Qi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,v.get(w).__webglTexture,J,lt+Ui),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,v.get(q).__webglTexture,Le,Kt+Ui)),j.blitFramebuffer(We,st,Be,Ne,ze,Dt,Be,Ne,j.DEPTH_BUFFER_BIT,j.NEAREST);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||v.has(w)){const Yt=v.get(w),Ni=v.get(q);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,mu),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,hl);for(let sn=0;sn<ke;sn++)Qi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Yt.__webglTexture,J,lt+sn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Yt.__webglTexture,J),Pt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ni.__webglTexture,Le,Kt+sn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ni.__webglTexture,Le),J!==0?j.blitFramebuffer(We,st,Be,Ne,ze,Dt,Be,Ne,j.COLOR_BUFFER_BIT,j.NEAREST):Pt?j.copyTexSubImage3D(qe,Le,ze,Dt,Kt+sn,We,st,Be,Ne):j.copyTexSubImage2D(qe,Le,ze,Dt,We,st,Be,Ne);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Pt?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(qe,Le,ze,Dt,Kt,Be,Ne,ke,Nt,an,Vt.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(qe,Le,ze,Dt,Kt,Be,Ne,ke,Nt,Vt.data):j.texSubImage3D(qe,Le,ze,Dt,Kt,Be,Ne,ke,Nt,an,Vt):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Le,ze,Dt,Be,Ne,Nt,an,Vt.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Le,ze,Dt,Vt.width,Vt.height,Nt,Vt.data):j.texSubImage2D(j.TEXTURE_2D,Le,ze,Dt,Be,Ne,Nt,an,Vt);j.pixelStorei(j.UNPACK_ROW_LENGTH,Xt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,xt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Pn),j.pixelStorei(j.UNPACK_SKIP_ROWS,In),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Fn),Le===0&&q.generateMipmaps&&j.generateMipmap(qe),Ge.unbindTexture()},this.initRenderTarget=function(w){v.get(w).__webglFramebuffer===void 0&&F.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?F.setTextureCube(w,0):w.isData3DTexture?F.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?F.setTexture2DArray(w,0):F.setTexture2D(w,0),Ge.unbindTexture()},this.resetState=function(){V=0,te=0,se=null,Ge.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}function sw({mouseForce:r=20,cursorSize:e=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:f=.014,BFECC:p=!0,resolution:m=.5,isBounce:h=!1,colors:g=["#5227FF","#FF9FFC","#B19EEF"],style:S={},className:x="",autoDemo:b=!0,autoSpeed:T=.5,autoIntensity:C=2.2,takeoverDuration:M=.25,autoResumeDelay:y=1e3,autoRampDuration:D=.6}){const N=me.useRef(null),L=me.useRef(null),B=me.useRef(null),G=me.useRef(null),k=me.useRef(null),A=me.useRef(!0),O=me.useRef(null);return me.useEffect(()=>{if(!N.current)return;function he(U){let v;Array.isArray(U)&&U.length>0?U.length===1?v=[U[0],U[0]]:v=U:v=["#ffffff","#ffffff"];const F=v.length,Z=new Uint8Array(F*4);for(let ae=0;ae<F;ae++){const we=new Lt(v[ae]);Z[ae*4+0]=Math.round(we.r*255),Z[ae*4+1]=Math.round(we.g*255),Z[ae*4+2]=Math.round(we.b*255),Z[ae*4+3]=255}const le=new qx(Z,F,1,fi);return le.magFilter=dn,le.minFilter=dn,le.wrapS=ei,le.wrapT=ei,le.generateMipmaps=!1,le.needsUpdate=!0,le}const V=he(g),te=new tn(0,0,0,0);class se{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(v){this.container=v,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new aw({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Lt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new uE,this.clock.start()}resize(){if(!this.container)return;const v=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(v.width)),this.height=Math.max(1,Math.floor(v.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ue=new se;class Q{constructor(){this.mouseMoved=!1,this.coords=new ot,this.coords_old=new ot,this.diff=new ot,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ot,this.takeoverTo=new ot,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(v){this.container=v,this.docTarget=v.ownerDocument||null;const F=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);F&&(this.listenerTarget=F,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(v,F){if(!this.container)return!1;const Z=this.container.getBoundingClientRect();return Z.width===0||Z.height===0?!1:v>=Z.left&&v<=Z.right&&F>=Z.top&&F<=Z.bottom}updateHoverState(v,F){return this.isHoverInside=this.isPointInside(v,F),this.isHoverInside}setCoords(v,F){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Z=this.container.getBoundingClientRect();if(Z.width===0||Z.height===0)return;const le=(v-Z.left)/Z.width,ae=(F-Z.top)/Z.height;this.coords.set(le*2-1,-(ae*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(v,F){this.coords.set(v,F),this.mouseMoved=!0}onDocumentMouseMove(v){if(this.updateHoverState(v.clientX,v.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const F=this.container.getBoundingClientRect();if(F.width===0||F.height===0)return;const Z=(v.clientX-F.left)/F.width,le=(v.clientY-F.top)/F.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Z*2-1,-(le*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(v.clientX,v.clientY),this.hasUserControl=!0}}onDocumentTouchStart(v){if(v.touches.length!==1)return;const F=v.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY),this.hasUserControl=!0)}onDocumentTouchMove(v){if(v.touches.length!==1)return;const F=v.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const v=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(v>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const F=v*v*(3-2*v);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,F)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const I=new Q;class H{constructor(v,F,Z){this.mouse=v,this.manager=F,this.enabled=Z.enabled,this.speed=Z.speed,this.resumeDelay=Z.resumeDelay||3e3,this.rampDurationMs=(Z.rampDuration||0)*1e3,this.active=!1,this.current=new ot(0,0),this.target=new ot,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ot,this.pickNewTarget()}pickNewTarget(){const v=Math.random;this.target.set((v()*2-1)*(1-this.margin),(v()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const v=performance.now();if(v-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=v,this.activationTime=v),!this.active)return;this.mouse.isAutoActive=!0;let Z=(v-this.lastTime)/1e3;this.lastTime=v,Z>.2&&(Z=.016);const le=this._tmpDir.subVectors(this.target,this.current),ae=le.length();if(ae<.01){this.pickNewTarget();return}le.normalize();let we=1;if(this.rampDurationMs>0){const Qe=Math.min(1,(v-this.activationTime)/this.rampDurationMs);we=Qe*Qe*(3-2*Qe)}const Ce=this.speed*Z*we,Xe=Math.min(Ce,ae);this.current.addScaledVector(le,Xe),this.mouse.setNormalized(this.current.x,this.current.y)}}const de=`
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
`,Ue=`
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
`;class ye{constructor(v){var F;this.props=v||{},this.uniforms=(F=this.props.material)==null?void 0:F.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new yv,this.camera=new lu,this.uniforms&&(this.material=new Qo(this.props.material),this.geometry=new Is(2,2),this.plane=new di(this.geometry,this.material),this.scene.add(this.plane))}update(){ue.renderer.setRenderTarget(this.props.output||null),ue.renderer.render(this.scene,this.camera),ue.renderer.setRenderTarget(null)}}class Je extends ye{constructor(v){super({material:{vertexShader:de,fragmentShader:K,uniforms:{boundarySpace:{value:v.cellScale},px:{value:v.cellScale},fboSize:{value:v.fboSize},velocity:{value:v.src.texture},dt:{value:v.dt},isBFECC:{value:!0}}},output:v.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const v=new Ci,F=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);v.setAttribute("position",new Ri(F,3));const Z=new Qo({vertexShader:ve,fragmentShader:K,uniforms:this.uniforms});this.line=new eE(v,Z),this.scene.add(this.line)}update({dt:v,isBounce:F,BFECC:Z}){this.uniforms.dt.value=v,this.line.visible=F,this.uniforms.isBFECC.value=Z,super.update()}}class Ke extends ye{constructor(v){super({output:v.dst}),this.init(v)}init(v){super.init();const F=new Is(1,1),Z=new Qo({vertexShader:P,fragmentShader:Ue,blending:lh,depthWrite:!1,uniforms:{px:{value:v.cellScale},force:{value:new ot(0,0)},center:{value:new ot(0,0)},scale:{value:new ot(v.cursor_size,v.cursor_size)}}});this.mouse=new di(F,Z),this.scene.add(this.mouse)}update(v){const F=I.diff.x/2*v.mouse_force,Z=I.diff.y/2*v.mouse_force,le=v.cursor_size*v.cellScale.x,ae=v.cursor_size*v.cellScale.y,we=Math.min(Math.max(I.coords.x,-1+le+v.cellScale.x*2),1-le-v.cellScale.x*2),Ce=Math.min(Math.max(I.coords.y,-1+ae+v.cellScale.y*2),1-ae-v.cellScale.y*2),Xe=this.mouse.material.uniforms;Xe.force.value.set(F,Z),Xe.center.value.set(we,Ce),Xe.scale.value.set(v.cursor_size,v.cursor_size),super.update()}}class $e extends ye{constructor(v){super({material:{vertexShader:de,fragmentShader:be,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},velocity_new:{value:v.dst_.texture},v:{value:v.viscous},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update({viscous:v,iterations:F,dt:Z}){let le,ae;this.uniforms.v.value=v;for(let we=0;we<F;we++)we%2===0?(le=this.props.output0,ae=this.props.output1):(le=this.props.output1,ae=this.props.output0),this.uniforms.velocity_new.value=le.texture,this.props.output=ae,this.uniforms.dt.value=Z,super.update();return ae}}class qt extends ye{constructor(v){super({material:{vertexShader:de,fragmentShader:Se,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update({vel:v}){this.uniforms.velocity.value=v.texture,super.update()}}class ht extends ye{constructor(v){super({material:{vertexShader:de,fragmentShader:Ye,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.dst_.texture},divergence:{value:v.src.texture},px:{value:v.cellScale}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update({iterations:v}){let F,Z;for(let le=0;le<v;le++)le%2===0?(F=this.props.output0,Z=this.props.output1):(F=this.props.output1,Z=this.props.output0),this.uniforms.pressure.value=F.texture,this.props.output=Z,super.update();return Z}}class _t extends ye{constructor(v){super({material:{vertexShader:de,fragmentShader:ee,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.src_p.texture},velocity:{value:v.src_v.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update({vel:v,pressure:F}){this.uniforms.velocity.value=v.texture,this.uniforms.pressure.value=F.texture,super.update()}}class Ct{constructor(v){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...v},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ot,this.cellScale=new ot,this.boundarySpace=new ot,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Xi:Ti}createAllFBO(){const F={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:dn,magFilter:dn,wrapS:ei,wrapT:ei};for(let Z in this.fbos)this.fbos[Z]=new Ai(this.fboSize.x,this.fboSize.y,F)}createShaderPass(){this.advection=new Je({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ke({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new $e({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new qt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new ht({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new _t({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const v=Math.max(1,Math.round(this.options.resolution*ue.width)),F=Math.max(1,Math.round(this.options.resolution*ue.height)),Z=1/v,le=1/F;this.cellScale.set(Z,le),this.fboSize.set(v,F)}resize(){this.calcSize();for(let v in this.fbos)this.fbos[v].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let v=this.fbos.vel_1;this.options.isViscous&&(v=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:v});const F=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:v,pressure:F})}}class rt{constructor(){this.init()}init(){this.simulation=new Ct,this.scene=new yv,this.camera=new lu,this.output=new di(new Is(2,2),new Qo({vertexShader:de,fragmentShader:pe,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ot},palette:{value:V},bgColor:{value:te}}})),this.scene.add(this.output)}addScene(v){this.scene.add(v)}resize(){this.simulation.resize()}render(){ue.renderer.setRenderTarget(null),ue.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class yt{constructor(v){this.props=v,ue.init(v.$wrapper),I.init(v.$wrapper),I.autoIntensity=v.autoIntensity,I.takeoverDuration=v.takeoverDuration,this.lastUserInteraction=performance.now(),I.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new H(I,this,{enabled:v.autoDemo,speed:v.autoSpeed,resumeDelay:v.autoResumeDelay,rampDuration:v.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():A.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ue.renderer.domElement),this.output=new rt}resize(){ue.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),I.update(),ue.update(),this.output.update()}loop(){this.running&&(this.render(),G.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,G.current&&(cancelAnimationFrame(G.current),G.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),I.dispose(),ue.renderer){const v=ue.renderer.domElement;v&&v.parentNode&&v.parentNode.removeChild(v),ue.renderer.dispose()}}catch{}}}const j=N.current;j.style.position=j.style.position||"relative",j.style.overflow=j.style.overflow||"hidden";const jt=new yt({$wrapper:j,autoDemo:b,autoSpeed:T,autoIntensity:C,takeoverDuration:M,autoResumeDelay:y,autoRampDuration:D});L.current=jt,(()=>{var F;if(!L.current)return;const U=(F=L.current.output)==null?void 0:F.simulation;if(!U)return;const v=U.options.resolution;Object.assign(U.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:p,resolution:m,isBounce:h}),m!==v&&U.resize()})(),jt.start();const bt=new IntersectionObserver(U=>{const v=U[0],F=v.isIntersecting&&v.intersectionRatio>0;A.current=F,L.current&&(F&&!document.hidden?L.current.start():L.current.pause())},{threshold:[0,.01,.1]});bt.observe(j),k.current=bt;const Ge=new ResizeObserver(()=>{L.current&&(O.current&&cancelAnimationFrame(O.current),O.current=requestAnimationFrame(()=>{L.current&&L.current.resize()}))});return Ge.observe(j),B.current=Ge,()=>{if(G.current&&cancelAnimationFrame(G.current),B.current)try{B.current.disconnect()}catch{}if(k.current)try{k.current.disconnect()}catch{}L.current&&L.current.dispose(),L.current=null}},[p,e,f,h,i,c,l,r,m,s,g,b,T,C,M,y,D]),me.useEffect(()=>{var se;const he=L.current;if(!he)return;const V=(se=he.output)==null?void 0:se.simulation;if(!V)return;const te=V.options.resolution;Object.assign(V.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:p,resolution:m,isBounce:h}),he.autoDriver&&(he.autoDriver.enabled=b,he.autoDriver.speed=T,he.autoDriver.resumeDelay=y,he.autoDriver.rampDurationMs=D*1e3,he.autoDriver.mouse&&(he.autoDriver.mouse.autoIntensity=C,he.autoDriver.mouse.takeoverDuration=M)),m!==te&&V.resize()},[r,e,i,s,l,c,f,p,m,h,b,T,C,M,y,D]),_.jsx("div",{ref:N,className:`liquid-ether-container ${x||""}`,style:S})}const Ur=({name:r="",size:e=24,color:i="currentColor",strokeColor:s="",className:l=""})=>_.jsx("svg",{className:l,width:e,height:e,fill:i,stroke:s||"currentColor",children:_.jsx("use",{href:`/portfolio/icon-sprite.svg#${r}`})}),rw=({toggleMenu:r})=>_.jsxs("header",{className:"p-2 border-b border-zinc-800 text-white h-14 flex justify-between px-4 w-full","aria-label":"Main navigation",children:[_.jsx("div",{className:"flex flex-1 items-center",children:_.jsxs("div",{className:"flex items-center space-x-2",children:[_.jsx("button",{onClick:r,"aria-label":"Toggle menu",className:"md:hidden",children:_.jsx(Ur,{name:"mobile-menu",size:16,className:"stroke-gray-600"})}),_.jsx("h5",{children:"Yannick Boulanger"})]})}),_.jsx("div",{className:"flex flex-1",children:_.jsxs("div",{className:"flex items-center space-x-2 mx-auto",children:[_.jsx("i",{className:"",children:_.jsx("svg",{width:"24",height:"24",viewBox:"0 2 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"orange",children:_.jsx("path",{d:"M12 2.5L14.9 8.6L21.5 9.4L16.75 13.9L18.1 20.5L12 17.2L5.9 20.5L7.25 13.9L2.5 9.4L9.1 8.6L12 2.5Z"})})}),_.jsx("p",{children:"Open to New Opportunities"}),_.jsx("button",{className:" p-1.5 pb-1 px-3 ml-3 rounded-lg border border-gray-600 transition-all duration-500 hover:border-purple-400 hover:bg-purple-900 hover:text-white",children:"Get in touch!"})]})}),_.jsx("div",{className:"flex flex-1 space-x-2 justify-end",children:_.jsx("a",{href:"javascript:;",className:"p-1 rounded-lg items-center border border-gray-600 justify-center transition-all duration-500  hover:border-blue-400 hover:bg-blue-900",children:_.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 72 72",fill:"none",children:_.jsx("path",{d:"M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z",fill:"#fff"})})})})]}),ow=()=>{const r=Aa(),[e,i]=me.useState(!1),[s,l]=me.useState(!1);me.useEffect(()=>{i(r.pathname.startsWith("/Case")),l(r.pathname.startsWith("/Portfolio"))},[r.pathname]);const c="text-md text-stone-400 active:text-stone-200 flex flex-row px-0 py-2 pl-6 pr-4 hover:bg-stone-800/50 active:bg-purple-700/50 items-center justify-center justify-start",f=p=>r.pathname===p?"is-active":"";return _.jsx("div",{className:"grow border-r border-zinc-800 pt-4 ",children:_.jsx("nav",{"aria-label":"Primary Navigation",children:_.jsxs("ul",{className:"list-none mt-20",children:[_.jsx("li",{children:_.jsxs(Lr,{to:"/","aria-label":"Go to Home",className:`${c} ${f("/")}`,children:[_.jsx(Ur,{name:"home",size:20,className:"mr-2 stroke-gray-600"}),_.jsx("span",{className:"text-xl font-normal",children:"Hero"})]})}),_.jsxs("li",{children:[_.jsxs("button",{onClick:()=>i(p=>!p),"aria-expanded":e,"aria-controls":"cases-menu",type:"button",className:`${c} font-medium group w-full`,children:[_.jsx(Ur,{name:"cases",size:20,className:"mr-2 stroke-gray-600"}),_.jsx("span",{className:"text-xl font-normal",children:"Product Cases"}),_.jsx(Ur,{name:"chevron-down",size:20,className:`ml-auto stroke-gray-600 transform transition-transform duration-300 ${e?"rotate-180":""}`})]}),e&&_.jsx("ul",{id:"cases-menu",className:"ml-4 mt-1 space-y-1 list-none",children:["Case01","Case02","Case03"].map(p=>_.jsx("li",{children:_.jsx(Lr,{to:`/${p}`,className:`${c} ${f(`/${p}`)}`,"aria-label":`Go to ${p}`,children:_.jsx("span",{className:"text-xl font-normal active:text-stone-200",children:p.replace("Case","Case 0")})})},p))})]}),_.jsx("li",{children:_.jsxs(Lr,{to:"/Resume",className:`${c} ${f("/Resume")}`,"aria-label":"Go to Resume",children:[_.jsx(Ur,{name:"resume",size:20,className:"mr-2 stroke-gray-600"}),_.jsx("span",{className:"text-xl font-normal",children:"Summary"})]})}),_.jsx("li",{children:_.jsxs(Lr,{to:"/Certification",className:`${c} ${f("/Certification")}`,"aria-label":"Go to Certifications",children:[_.jsx(Ur,{name:"certification",size:20,className:"mr-2 stroke-gray-600"}),_.jsx("span",{className:"text-xl font-normal",children:"Certification"})]})})]})})})};function lw(){return _.jsx(_.Fragment,{children:_.jsxs("div",{className:"w-full",children:[_.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto text-white",children:[_.jsx("h2",{className:"text-3xl pb-8 text-stone-400",children:"Yannick Boulanger"}),_.jsx("h1",{className:"uppercase font-medium text-7xl leading-none",children:"Product Designer"}),_.jsx("h1",{className:"mb-12 font-light text-7xl leading-none uppercase",children:"Building for Complex Human Application"}),_.jsxs("div",{className:"flex flex-wrap gap-12",children:[_.jsxs("div",{className:"flex-1",children:[_.jsx("h3",{children:"Enterprise SaaS Delivery"}),_.jsx("p",{className:"mt-4 text-xl  max-w-5xl leading-snug",children:"I conceptualize complex SaaS products from discovery through delivery and ground product strategy in user research and real-world workflows."}),_.jsx("h3",{className:"mt-6",children:"Cross-Functional Collaboration"}),_.jsx("p",{className:"mt-4 text-xl  max-w-5xl  leading-snug",children:"I collaborate with Product, Engineering, and stakeholders to turn vision into execution, delivering maximum value while making complex systems scalable and user-friendly."})]}),_.jsxs("div",{className:"flex-1",children:[_.jsx("h3",{children:"Structured, Usable Systems"}),_.jsx("p",{className:"mt-4 text-xl  max-w-5xl leading-snug",children:"I prioritize information architecture, consistency, and usability over visual polish, ensuring highly technical environments remain accessible, secure, and reliable."}),_.jsx("h3",{className:"mt-6",children:"Evidence-Based Practice"}),_.jsx("p",{className:"mt-4 text-xl  max-w-5xl leading-snug",children:"I take an iterative, evidence-based approach, guiding design decisions with data and measuring impact through meaningful user and business outcomes."})]})]})]}),_.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto",children:[_.jsx("h3",{className:"text-white text-3xl font-medium mb-6",children:"Case Studies"}),_.jsxs("div",{className:"flex flex-wrap gap-6",children:[_.jsxs("div",{className:"bg-zinc-900 flex-1 min-w-[220px] rounded-lg shadow hover:shadow-lg transition overflow-hidden",children:[_.jsx("div",{className:"w-full aspect-square bg-zinc-800 flex items-center justify-center text-stone-400 text-sm",children:"Image"}),_.jsxs("div",{className:"p-6 bg-teal-800",children:[_.jsx("h4",{className:"text-white pb-2",children:"SD-WAN Orchestrator"}),_.jsx("p",{className:"text-gray-300 text-xl leading-snug",children:"Streamlining multi-tenant workflows for an SD-WAN platform"})]})]}),_.jsxs("div",{className:"bg-zinc-900 flex-1 min-w-[220px] rounded-lg shadow hover:shadow-lg transition overflow-hidden",children:[_.jsx("div",{className:"w-full aspect-square bg-zinc-800 flex items-center justify-center text-stone-400 text-sm",children:"Image"}),_.jsxs("div",{className:"p-6 bg-teal-800",children:[_.jsx("h4",{className:"text-white pb-2",children:"CRM Caller UI"}),_.jsx("p",{className:"text-gray-300 text-xl leading-snug",children:"Redesigned CRM caller UI → boosted efficiency & 30% YoY growth"})]})]}),_.jsxs("div",{className:"bg-zinc-900 flex-1 min-w-[220px] rounded-lg shadow hover:shadow-lg transition overflow-hidden",children:[_.jsx("div",{className:"w-full aspect-square bg-zinc-800 flex items-center justify-center text-stone-400 text-sm",children:"Image"}),_.jsxs("div",{className:"p-6 bg-teal-800",children:[_.jsx("h4",{className:"text-white pb-2",children:"SaaS Design System"}),_.jsx("p",{className:"text-gray-300 text-xl leading-snug",children:"Built a scalable design system powering SaaS product sustainable growth"})]})]})]})]}),_.jsxs("div",{className:"text-white max-w-screen-lg mx-auto flex flex-wrap gap-6 mb-16",children:[_.jsx("h3",{className:"text-white text-3xl font-medium ",children:"Summary"}),_.jsxs("div",{className:"flex gap-12",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-xl max-w-5xl mb-6",children:"Senior Product Designer with 15+ years of experience leading complex B2B SaaS and enterprise platforms from concept to delivery. "}),_.jsx("p",{className:"text-xl max-w-5xl",children:"I combine strategic thinking, technical depth, and creative problem-solving to simplify complex systems, including cloud-native SD-WAN and scalable sales engagement CRM platforms."})]}),_.jsxs("div",{children:[_.jsx("p",{className:"text-xl  max-w-5xl  mb-6",children:"I’ve led large-scale UX redesigns that drive measurable revenue growth, operational efficiency, and platform scalability."}),_.jsx("p",{className:"text-xl  max-w-5xl",children:"I align business vision, system architecture, and human-centred design to deliver secure, intuitive, and resilient product experiences."})]})]})]}),_.jsx("div",{className:"w-full bg-stone-800/20 mb-12 py-12  border-stone-800",children:_.jsxs("div",{className:"max-w-screen-lg mx-auto flex",children:[_.jsx("div",{className:"flex-1",children:_.jsxs("dl",{children:[_.jsx("dt",{className:"text-xl pb-2 text-stone-400",children:"Product Design"}),_.jsx("dd",{className:"text-lg text-white",children:"Strategy, Vision & Agile Delivery"})]})}),_.jsx("div",{className:"flex-1",children:_.jsxs("dl",{children:[_.jsx("dt",{className:"text-2xl pb-2 text-stone-400",children:"UI/UX"}),_.jsx("dd",{className:"text-lg text-white",children:"Workflow & Interaction Architecture"})]})}),_.jsx("div",{className:"flex-1",children:_.jsxs("dl",{children:[_.jsx("dt",{className:"text-2xl pb-2 text-stone-400",children:"SaaS/B2B"}),_.jsx("dd",{className:"text-lg text-white",children:"Scalable Enterprise Platforms"})]})}),_.jsx("div",{className:"flex-1 rounded-br-lg",children:_.jsxs("dl",{children:[_.jsx("dt",{className:"text-2xl pb-2 text-stone-400",children:"Front-End"}),_.jsx("dd",{className:"text-lg text-white",children:"Implementation, Code & Accessibility"})]})})]})}),_.jsxs("div",{className:"text-white max-w-screen-lg mx-auto flex flex-wrap gap-6 mb-24 text-xl",children:[_.jsxs("div",{className:"flex-1 min-w-[250px rounded-lg shadow",children:[_.jsx("h3",{className:"text-white text-3xl font-medium mb-6",children:"Experience"}),_.jsxs("ul",{className:"list-none mb-12 text-stone-400 text-lg",children:[_.jsxs("li",{className:"mb-2",children:[_.jsx("span",{className:"w-33 h-10 float-left font-medium text-stone-100",children:"2021 - 2025"})," Adaptiv Networks",_.jsx("br",{})," Senior Product Designer"]}),_.jsxs("li",{className:"mb-2",children:[_.jsx("span",{className:"w-33 h-10 float-left font-medium text-stone-100",children:"2013 - 2021"})," VanillaSoft",_.jsx("br",{})," Product Designer"]}),_.jsxs("li",{className:"mb-2",children:[_.jsx("span",{className:"w-33 h-10 float-left font-medium text-stone-100",children:"2010 - 2012"})," MD Financial Management",_.jsx("br",{}),"UX Designer"]})]}),_.jsx("h3",{className:"text-white text-3xl font-medium mb-6",children:"Language"}),_.jsx("ul",{className:"list-none mt-4 text-lg",children:_.jsxs("li",{className:"mb-2",children:["English ",_.jsx("em",{children:"(Fluent) / "}),"French ",_.jsx("em",{children:"(Fluent)"})]})})]}),_.jsxs("div",{className:"flex-1 min-w-[250px] rounded-lg shadow",children:[_.jsx("h3",{className:"text-white text-3xl font-medium mb-6",children:"Certification"}),_.jsxs("ul",{className:"list-none mt-4  text-stone-400 text-lg",children:[_.jsxs("li",{className:"mb-2",children:[_.jsx("span",{className:"w-16 float-left font-medium  text-stone-100",children:"2010"})," User-Centred Design"]}),_.jsxs("li",{className:"mb-2",children:[_.jsx("span",{className:"w-16 float-left font-medium  text-stone-100",children:"2019"})," Professional Scrum Master I (PSM I)"]}),_.jsxs("li",{className:"mb-2",children:[_.jsx("span",{className:"w-16 float-left font-medium  text-stone-100",children:"2021"})," Professional Scrum Master with UX (PSU)"]}),_.jsxs("li",{className:"mb-2",children:[_.jsx("span",{className:"w-16 float-left font-medium  text-stone-100",children:"2025"})," Enterprise Design Thinking Co-Creator, IBM"]}),_.jsxs("li",{className:"mb-2",children:[_.jsx("span",{className:"w-16 float-left font-medium  text-stone-100",children:"2025"})," Enterprise Design Thinking Practitioner, IBM"]}),_.jsxs("li",{className:"mb-2",children:[_.jsx("span",{className:"w-16 float-left font-medium  text-stone-100",children:"2025"})," Artificial Intelligence Fundamentals, IBM"]})]})]})]})]})})}function cw(){return _.jsx("h1",{className:"text-3xl font-bold",children:"About"})}const uw="/portfolio/assets/VS-Old-CallerUI-Dw1hW2WW.png",fw="/portfolio/assets/VS-CallerUI-001-B8ad10j0.png";function dw(){return _.jsxs("div",{className:"text-white",children:[_.jsx("div",{className:"w-full text-gray-200",children:_.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto text-white",children:[_.jsx("h2",{className:"text-3xl pb-8 text-stone-400",children:"Case 001 : VanillaSoft"}),_.jsx("h1",{className:"uppercase  font-light text-7xl leading-none",children:"Interface Redesign"}),_.jsx("h1",{className:"mb-16 font-medium text-7xl leading-none uppercase text-zinc-400",children:"Multi-Panel Workspace for Sales Workflows"}),_.jsxs("div",{className:"flex gap-6",children:[_.jsxs("div",{className:"flex-1/3",children:[_.jsx("h3",{className:"text-3xl font-medium",children:"Contributions"}),_.jsxs("ul",{className:"mt-4 space-y-1 text-lg text-zinc-300",children:[_.jsx("li",{children:"Contextual & User Research"}),_.jsx("li",{children:"Workflow & Task Analysis"}),_.jsx("li",{children:"Market & Competitor Analysis"}),_.jsx("li",{children:"Information Architecture"}),_.jsx("li",{children:"Interaction Design"}),_.jsx("li",{children:"Product Design & UI/UX"}),_.jsx("li",{children:"Development & QA"})]})]}),_.jsxs("div",{className:"flex-2/3",children:[_.jsx("h3",{className:"text-3xl font-medium",children:"Assignment"}),_.jsx("p",{className:"mt-4 text-lg",children:"The objective of this project was to redesign VanillaSoft’s core Caller UI to improve usability, scalability, and overall user satisfaction while modernizing its visual design and aligning it with contemporary interaction standards."}),_.jsx("p",{className:"mt-4 text-lg",children:"The new interface was designed to support both novice and experienced users, streamline complex sales workflows, and accommodate a growing user base without compromising performance."}),_.jsx("p",{className:"mt-4 text-lg",children:"The redesign focused on improving task efficiency, reducing cognitive load, and providing a flexible, responsive workspace across different devices and screen sizes."}),_.jsx("p",{className:"mt-4 text-lg",children:"I was responsible for research, design, front-end integration, and QA throughout the project lifecycle."})]})]})]})}),_.jsx("div",{className:"text-gray-200 border-y border-zinc-800 bg-zinc-900/50",children:_.jsx("div",{className:"w-full",children:_.jsxs("div",{className:"max-w-screen-lg mx-auto px-0 py-16",children:[_.jsx("img",{src:fw,className:"border-zinc-700 border shadow-2xl",alt:"VanillaSoft Caller UI overview"}),_.jsx("p",{className:"mt-4 text-zinc-500 italic text-center",children:"The final Multi-Panel Workspace: Consolidating CRM, Scripts, and Communication tools."})]})})}),_.jsx("hr",{className:"border-zinc-800 mb-20"}),_.jsx("div",{className:"",children:_.jsxs("div",{className:"max-w-screen-lg mx-auto text-white",children:[_.jsxs("div",{className:"flex gap-12 mb-20",children:[_.jsx("div",{className:"flex-2/5",children:_.jsxs("h3",{className:"uppercase text-3xl",children:["00",_.jsx("br",{}),"Context"]})}),_.jsxs("div",{className:"flex-3/5",children:[_.jsx("p",{className:"text-xl leading-snug",children:"VanillaSoft is a cloud-based sales management platform integrating customer relationship management (CRM), lead management, and telemarketing tools to streamline sales team workflows."}),_.jsx("p",{className:"mt-4 text-xl leading-snug",children:"What sets VanillaSoft apart from competitors is its queue-based approach, which routes agents to the next best contact based on available data rather than relying on a traditional list-based system."}),_.jsx("p",{className:"mt-4 text-xl leading-snug",children:"This prevents agents from cherry-picking contacts and promotes efficiency, enabling faster and more effective workflows."})]})]}),_.jsx("hr",{className:"border-zinc-800 mb-20"}),_.jsxs("div",{className:"flex gap-12 mb-20",children:[_.jsx("div",{className:"flex-2/5",children:_.jsxs("h3",{className:"uppercase text-3xlm",children:["01",_.jsx("br",{}),"Observation"]})}),_.jsxs("div",{className:"flex-3/5",children:[_.jsx("p",{className:"text-xl leading-snug",children:"The Caller UI, a central part of the platform used during live calls, had become visually and technically outdated. As the product evolved, the interface became increasingly difficult to extend and maintain."}),_.jsx("p",{className:"mt-4 text-xl leading-snug",children:"Our research revealed that agents relied heavily on the Caller UI to input data but frequently had to switch between multiple tools to access customer information, scripts, and reference documents."}),_.jsx("p",{className:"text-xl leading-snug",children:"This increased cognitive load, slowed workflows, and reduced call quality."}),_.jsx("p",{className:"mt-4 text-xl leading-snug",children:"Additionally, the interface architecture made it difficult to scale the UI as new features were added. The redesign needed to improve workflow efficiency while supporting the platform’s long-term evolution."})]})]}),_.jsx("hr",{className:"border-zinc-800 mb-20"}),_.jsxs("div",{className:"flex gap-12 mb-20",children:[_.jsx("div",{className:"flex-2/5",children:_.jsxs("h3",{className:"uppercase text-3xlm",children:["02",_.jsx("br",{}),"Research"]})}),_.jsxs("div",{className:"flex-3/5",children:[_.jsx("p",{className:"text-xl leading-snug",children:"During the research phase, we studied telemarketer workflows and analyzed competitors."}),_.jsx("p",{className:"mt-4 text-xl leading-snug",children:"A key insight came from photos collected by our CEO and sales representatives at customer call centers, revealing that most users rely heavily on external resources to complete tasks."}),_.jsx("p",{className:"text-xl leading-snug",children:"This creates inefficiencies, context-switching, and increased cognitive load."})]})]}),_.jsx("hr",{className:"border-zinc-800 mb-20"}),_.jsxs("div",{className:"mb-20",children:[_.jsxs("h3",{className:"uppercase text-3xl font-medium",children:["03",_.jsx("br",{}),"Hypothesis"]}),_.jsx("div",{children:_.jsx("blockquote",{className:"mt-6 border-l-4 border-stone-200 pl-6 italic text-zinc-400 text-2xl",children:"If we integrate these external resources directly into the Caller UI, users will experience a more seamless workflow, reduce cognitive load, and complete tasks more efficiently. Consolidating tools such as customer details, compliance documents, and other essential applications will also generate richer data for the platform’s queue-based routing system, improving overall performance and outcomes."})})]}),_.jsx("hr",{className:"border-zinc-800 mb-20"}),_.jsxs("div",{className:"flex gap-12 mb-20",children:[_.jsx("div",{className:"flex-1/5",children:_.jsxs("h3",{className:"uppercase text-3xl",children:["04",_.jsx("br",{}),"Solution"]})}),_.jsxs("div",{className:"flex-2/5",children:[_.jsx("p",{className:"text-xl leading-snug",children:"The redesign introduced a flexible multi-panel layout to optimize space and support dynamic workflows, which was innovative a t the time. The interface adapts to user tasks, offering a personalized and responsive experience."}),_.jsx("p",{className:"mt-4 text-xl leading-snug",children:"The grid layout, implemented using Kendo UI, ensured stability and performance at scale. Additional information for each contact was fetched asynchronously to minimize wait times. "})]}),_.jsxs("div",{className:"flex-2/5",children:[_.jsx("p",{className:"text-xl leading-snug",children:"Panels could be resized, reorganized, or removed, allowing the workspace to adapt to user workflows. Inline editing including undo functionality was available to most of the content presented with customization options."}),_.jsx("p",{className:"mt-4 text-xl leading-snug",children:"The redesign supported business growth, boosted user retention, and acted as a differentiator in the competitive CRM market, contributing to strong ROI and long-term success."})]})]}),_.jsx("hr",{className:"border-zinc-800 mb-20"}),_.jsxs("div",{className:"flex gap-12 mb-20",children:[_.jsx("div",{className:"flex-1/4",children:_.jsx("h3",{className:"uppercase text-3xl",children:"Feature"})}),_.jsxs("div",{className:"flex-3/4",children:[_.jsx("h4",{className:"text-white text-3xl mb-3",children:"Modular Multi-Panel Layout"}),_.jsx("p",{className:"text-zinc-400 text-xl mb-6",children:"A flexible grid allowing users to resize, reorganize, or hide panels based on their specific campaign needs."}),_.jsx("h4",{className:"text-white text-3xl  mb-3",children:"Technical Scalability"}),_.jsx("p",{className:"text-zinc-400 text-xl mb-6",children:"Implemented via Kendo UI for responsive, stable performance with asynchronous loading of contact details to maintain user flow."}),_.jsx("h4",{className:"text-white text-3xl mb-3",children:"Deep Integration"}),_.jsx("p",{className:"text-zinc-400 text-xl",children:"Embedded APIs for Email, SMS, and Payment tools directly into the workspace to eliminate the need for external applications."})]})]}),_.jsx("hr",{className:"border-zinc-800 mb-20"}),_.jsxs("div",{className:"flex gap-12 mb-20",children:[_.jsx("div",{className:"flex-1/5",children:_.jsxs("h3",{className:"uppercase text-3xl",children:["05",_.jsx("br",{}),"Outcomes"]})}),_.jsxs("div",{className:"flex-2/5",children:[_.jsx("p",{className:"text-xl leading-snug",children:"The redesigned Caller UI became a flagship feature of VanillaSoft, improving workflows by consolidating tools and reducing context-switching. An external study showed users experienced a 30%-100% increase in productivity and completed tasks with fewer errors."}),_.jsx("p",{className:"mt-4 text-xl leading-snug",children:"The responsive, customizable interface allowed users to tailor their workspace, increasing satisfaction and reducing cognitive load. User feedback was positive, with VanillaSoft earning 4.7 stars on Capterra and 4.6 stars on G2."})]}),_.jsxs("div",{className:"flex-2/5",children:[_.jsx("p",{className:"text-xl leading-snug",children:"To maintain performance during calls, contact information loads first while additional data is retrieved asynchronously in the background."}),_.jsx("p",{className:"mt-4 text-xl leading-snug ",children:"Several integrations—including email, SMS, payment processing, and other communication tools—were embedded directly into the workspace, reducing reliance on external applications.              "})]})]})]})}),_.jsx("div",{className:"w-full bg-stone-800/20 py-20 border-stone-800",children:_.jsxs("div",{className:"max-w-screen-lg mx-auto",children:[_.jsx("h3",{className:" uppercase text-3xl mb-8  font-medium",children:"Results & Business Impact"}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12",children:[_.jsxs("div",{children:[_.jsx("div",{className:"text-5xl mb-2 text-zinc-500",children:"30–100%"}),_.jsx("p",{className:"text-zinc-300 text-lg",children:"Increase in agent productivity across various sales workflows."})]}),_.jsxs("div",{children:[_.jsx("div",{className:"text-5xl mb-2 text-zinc-500",children:"4.7/5"}),_.jsx("p",{className:"text-zinc-300 text-lg",children:"Average user rating on Capterra, citing improved ease of use."})]}),_.jsxs("div",{children:[_.jsx("div",{className:"text-5xl mb-2 text-zinc-500",children:"Reduced"}),_.jsx("p",{className:"text-zinc-300 text-lg",children:"Cognitive load through workspace customization and tool consolidation."})]})]})]})}),_.jsx("div",{className:"w-full py-20 opacity-50 hover:opacity-100 transition-opacity",children:_.jsxs("div",{className:"max-w-screen-lg mx-auto px-6",children:[_.jsx("h3",{className:"text-zinc-500 uppercase text-xl mb-8",children:"Legacy Interface (For Context)"}),_.jsx("img",{src:uw,className:"grayscale",alt:"Old VanillaSoft UI"})]})})]})}const Ds=({title:r,children:e})=>_.jsx("div",{className:"w-full",children:_.jsxs("div",{className:"max-w-screen-lg mx-auto px-6",children:[_.jsx("div",{children:_.jsx("h2",{className:" mb-4",children:r})}),_.jsx("div",{className:"pt-4 pb-9",children:e})]})}),nx=[{stage:"1. Enrollment Invitation Sent",tenantAdminAction:"Admin enters user’s name & email in Orchestrator",endUserAction:"—",systemResponse:"System sends enrollment email with secure one-time link",tenantAdminThoughts:"“Great, one less account I have to create manually.”",endUserThoughts:"—",painPoints:"Email may go to spam; unrecognized sender",opportunities:"Use brand visuals, friendly sender name"},{stage:"2. User Clicks Enrollment Link",tenantAdminAction:"—",endUserAction:"Clicks secure link in email",systemResponse:"Auto-login to self-service portal",tenantAdminThoughts:"—",endUserThoughts:"“Nice, no need to type credentials yet.”",painPoints:"Expired link frustrates users",opportunities:"Display expiry in email, allow resend"},{stage:"3. Create Secure Password",tenantAdminAction:"—",endUserAction:"Chooses & confirms strong password",systemResponse:"Password saved",tenantAdminThoughts:"—",endUserThoughts:"“That was easy — I feel secure.”",painPoints:"Overly strict rules may cause errors",opportunities:"Real-time password strength feedback"},{stage:"4. MFA Setup Prompt",tenantAdminAction:"—",endUserAction:"Asked to set up MFA if required",systemResponse:"MFA options: App Code, SMS, Email",tenantAdminThoughts:"—",endUserThoughts:"“Hmm, which one’s best for me?”",painPoints:"Confusion, app setup friction",opportunities:"Quick comparison of options"},{stage:"5. MFA Enrollment",tenantAdminAction:"—",endUserAction:"Completes MFA verification",systemResponse:"MFA setup confirmed",tenantAdminThoughts:"—",endUserThoughts:"“I’m ready to use VPN now.”",painPoints:"App download feels technical",opportunities:"Alternate MFA path + help"},{stage:"6. Access Confirmation",tenantAdminAction:"—",endUserAction:"—",systemResponse:"Redirect to dashboard with VPN client instructions",tenantAdminThoughts:"—",endUserThoughts:"“I know my next step.”",painPoints:"No instructions causes stalls",opportunities:"Quick start tips + visual guide"},{stage:"Loop for Additional Users",tenantAdminAction:"Admin repeats steps for each user",endUserAction:"—",systemResponse:"—",tenantAdminThoughts:"“This is tedious for large batches.”",endUserThoughts:"—",painPoints:"Bulk onboarding fatigue",opportunities:"Add CSV import feature"}];function hw(){return _.jsxs("div",{className:"text-white",children:[_.jsx("div",{className:"w-full text-gray-200",children:_.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto text-white",children:[_.jsx("h2",{className:"text-3xl pb-8 text-stone-400",children:"Case 002 : Adaptiv Networks"}),_.jsx("h1",{className:"uppercase font-medium text-7xl leading-none",children:"VPN Enrollment Flow"}),_.jsx("h1",{className:"mb-16 font-light text-7xl leading-none uppercase text-zinc-400",children:"Self-Service Onboarding & MFA Authentication"}),_.jsxs("div",{className:"flex gap-6",children:[_.jsxs("div",{className:"flex-1/3",children:[_.jsx("h3",{className:"text-3xl font-medium",children:"Role"}),_.jsxs("ul",{className:"mt-4 space-y-1 text-lg text-zinc-300",children:[_.jsx("li",{children:"Senior Product Designer"}),_.jsx("li",{children:"UX Research & Workflow Analysis"}),_.jsx("li",{children:"Interface & Interaction Design"}),_.jsx("li",{children:"Design System Integration"})]})]}),_.jsxs("div",{className:"flex-2/3",children:[_.jsx("h3",{className:"text-3xl font-medium",children:"Overview"}),_.jsx("p",{className:"mt-4 text-lg",children:"Adaptiv Networks is a multi-tenant provider of cloud-managed networking solutions, specializing in Software-Defined Wide Area Network (SD-WAN) technology. Their platform enables businesses to optimize network performance, reliability, and security while simplifying management and reducing operational costs."}),_.jsx("p",{className:"mt-4 text-lg",children:"To support hybrid and remote workforces, Adaptiv Networks offers MyConnect VPN, a secure remote access solution that integrates with their SD-WAN infrastructure. Efficient onboarding and authentication for remote employees, partners, and tenants is critical to ensure seamless connectivity, protect sensitive data, and maintain enterprise-grade security."})]})]})]})}),_.jsx("hr",{className:"border-zinc-800 mb-20"}),_.jsx("div",{className:"w-full text-gray-200",children:_.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto text-white",children:[_.jsxs("div",{className:"flex gap-12 mb-20",children:[_.jsx("div",{className:"flex-1/5",children:_.jsx("h3",{className:"uppercase text-3xlm",children:"Goal"})}),_.jsx("div",{className:"flex-2/4",children:_.jsx("p",{className:"text-xl leading-snug",children:"The objective was to redesign the Caller interface to support more efficient call workflows and provide a more flexible foundation for future product development."})}),_.jsxs("div",{className:"flex-2/4",children:[_.jsx("p",{className:"text-xl leading-snug",children:"The redesign focused on:"}),_.jsxs("ul",{className:"mt-4 text-xl leading-snug",children:[_.jsx("li",{children:"reducing context-switching between tools"}),_.jsx("li",{children:"improving access to critical call information"}),_.jsx("li",{children:"supporting scalable UI expansion as the platform evolved"})]})]})]}),_.jsx("hr",{className:"border-zinc-800 mb-20"}),_.jsxs("div",{className:"flex gap-12 mb-20",children:[_.jsx("div",{className:"flex-1/4",children:_.jsx("h3",{className:"uppercase text-3xl",children:"Problems"})}),_.jsxs("div",{className:"flex-3/4",children:[_.jsx("h4",{className:"text-white text-3xl mb-3",children:"Manual onboarding is resource-intensive and does not scale:"}),_.jsx("p",{className:"text-zinc-400 text-xl mb-6",children:"IT teams must create accounts individually, slowing adoption for partners, tenants, and new employees."}),_.jsx("h4",{className:"text-white text-3xl  mb-3",children:"Limited self-service capabilities restrict user independence:"}),_.jsx("p",{className:"text-zinc-400 text-xl mb-6",children:"Customers cannot independently onboard or manage users, increasing operational overhead."}),_.jsx("h4",{className:"text-white text-3xl  mb-3",children:"Security and compliance are paramount:"}),_.jsx("p",{className:"text-zinc-400 text-xl mb-6",children:"Multi-Factor Authentication (MFA) is required to meet industry standards, but default workflows can be confusing or inconsistent for end users."}),_.jsx("h4",{className:"text-white text-3xl mb-3",children:"High reliance on IT support reduces efficiency:"}),_.jsx("p",{className:"text-zinc-400 text-xl",children:"Without an intuitive self-service experience, organizations face higher support costs and slower user adoption."})]})]})]})}),_.jsx(Ds,{title:"Business Problem",children:_.jsxs("ul",{className:"list-disc list-outside space-y-1 pl-4",children:[_.jsxs("li",{children:[_.jsx("strong",{children:"Manual onboarding is resource-intensive and does not scale:"}),_.jsx("p",{children:"IT teams must create accounts individually, slowing adoption for partners, tenants, and new employees."})]}),_.jsxs("li",{children:[_.jsx("strong",{children:"Limited self-service capabilities restrict user independence:"}),_.jsx("p",{children:"Customers cannot independently onboard or manage users, increasing operational overhead."})]}),_.jsxs("li",{children:[_.jsx("strong",{children:"Security and compliance are paramount:"}),_.jsx("p",{children:"Multi-Factor Authentication (MFA) is required to meet industry standards, but default workflows can be confusing or inconsistent for end users."})]}),_.jsxs("li",{children:[_.jsx("strong",{children:"High reliance on IT support reduces efficiency:"}),_.jsx("p",{children:"Without an intuitive self-service experience, organizations face higher support costs and slower user adoption."})]})]})}),_.jsx(Ds,{title:"Business Goal",children:_.jsxs("ul",{className:"list-disc list-outside space-y-1 pl-4",children:[_.jsxs("li",{children:[_.jsx("strong",{children:"Streamline Onboarding & Self-Management:"}),"Deliver an automated, user-friendly enrollment flow that reduces IT dependency and accelerates adoption."]}),_.jsxs("li",{children:[_.jsx("strong",{children:"Enhance Security & Compliance:"}),"Implement flexible MFA options to protect sensitive data and meet enterprise security requirements."]}),_.jsxs("li",{children:[_.jsx("strong",{children:"Enable Scalable Operations:"}),"Provide a multi-tenant, self-service solution that supports partners and tenants independently, with potential premium features for recurring revenue."]})]})}),_.jsx(Ds,{title:"Research",children:_.jsx("p",{className:"pb-4",children:"Mapped user flows: enrollment, login, password reset, and MFA. Identified pain points to ensure a smooth user journey. Auth0 was selected as the IAM vendor; documentation was reviewed to understand framework capabilities and optimize experience."})}),_.jsx("div",{className:"w-full  py-6 mb-12 border-y-1 border-zinc-800 text-sm",children:_.jsxs("div",{className:"max-w-screen-xl mx-auto",children:[_.jsx("h3",{className:"text-indigo-800 text-2xl pb-8",children:"User Journey: Caller UI Workflow"}),_.jsxs("div",{className:"hidden md:grid grid-cols-1 md:grid-cols-6 gap-4 border-b border-gray-700 pb-4 font-semibold text-zinc-800",children:[_.jsx("div",{children:"Stage"}),_.jsx("div",{children:"Tenant/Admin Action"}),_.jsx("div",{children:"End-User Action"}),_.jsx("div",{children:"System Response"}),_.jsx("div",{children:"Tenant/Admin Thoughts"}),_.jsx("div",{children:"End-User Thoughts"}),_.jsx("div",{children:"Pain Points / Risks"}),_.jsx("div",{children:"Opportunities / Improvement"})]}),_.jsx("div",{className:"hidden md:block",children:nx.map((r,e)=>_.jsxs("div",{className:`grid grid-cols-1 md:grid-cols-6 gap-4 py-2 border-b border-gray-400 ${e%2===0?"bg-zinc-200":"bg-zinc-300"}`,children:[_.jsx("div",{className:"px-2 py-1",children:r.stage}),_.jsx("div",{className:"px-2 py-1",children:r.tenantAdminAction}),_.jsx("div",{className:"px-2 py-1",children:r.endUserAction}),_.jsx("div",{className:"px-2 py-1",children:r.systemResponse}),_.jsx("div",{className:"px-2 py-1",children:r.tenantAdminThoughts}),_.jsx("div",{className:"px-2 py-1",children:r.endUserThoughts}),_.jsx("div",{className:"px-2 py-1",children:r.painPoints}),_.jsx("div",{className:"px-2 py-1",children:r.opportunities})]},e))}),_.jsx("div",{className:"md:hidden space-y-4",children:nx.map((r,e)=>_.jsxs("details",{className:"bg-zinc-800 rounded-lg p-4",children:[_.jsx("summary",{className:"font-semibold text-white cursor-pointer",children:r.stage}),_.jsxs("div",{className:"mt-2 space-y-2 text-gray-200",children:[_.jsxs("p",{children:[_.jsx("strong",{children:"Tenant/Admin Action:"})," ",r.tenantAdminAction]}),_.jsxs("p",{children:[_.jsx("strong",{children:"End-User Action:"})," ",r.endUserAction]}),_.jsxs("p",{children:[_.jsx("strong",{children:"System Response:"})," ",r.systemResponse]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Tenant/Admin Thoughts:"})," ",r.tenantAdminThoughts]}),_.jsxs("p",{children:[_.jsx("strong",{children:"End-User Thoughts:"})," ",r.endUserThoughts]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Pain Points / Risks:"})," ",r.painPoints]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Opportunities / Improvement:"})," ",r.opportunities]})]})]},e))})]})}),_.jsxs(Ds,{title:"Hypothesis",children:[_.jsx("p",{className:"italic pb-4",children:"By designing a self-service VPN enrollment flow with integrated MFA guidance, users will:"}),_.jsxs("ul",{className:"list-disc list-outside space-y-2 ml-4 pb-4",children:[_.jsxs("li",{children:[_.jsx("strong",{children:"Onboard faster"})," without relying on IT support"]}),_.jsxs("li",{children:[_.jsx("strong",{children:"Complete security steps confidently"})," with clear MFA instructions and options"]}),_.jsxs("li",{children:[_.jsx("strong",{children:"Manage multiple accounts efficiently"})," in a multi-tenant environment"]})]}),_.jsxs("p",{children:["This approach transforms VPN onboarding from a technical, error-prone process into a ",_.jsx("strong",{children:"streamlined, user-friendly experience"})," that balances security, usability, and scalability."]})]}),_.jsx(Ds,{title:"Solution",children:_.jsx("p",{className:"pb-4",children:"Partners/Tenants submit first name, last name, and email. Users receive a one-time password via email. Clicking the link auto-logs the user into the self-service portal. Users set a secure password, then complete MFA if purchased, adding a layer of security."})}),_.jsx(Ds,{title:"User Outcomes",children:_.jsxs("ul",{className:"list-disc list-outside space-y-1 pl-4",children:[_.jsxs("li",{children:[_.jsx("strong",{children:"One-Time Code (App-based):"})," Most frustrating; app download, QR code scan, backup code required."]}),_.jsxs("li",{children:[_.jsx("strong",{children:"Text (SMS):"})," Minimal complaints; quick and familiar for users."]}),_.jsxs("li",{children:[_.jsx("strong",{children:"Email:"})," Convenient; longer code lifespan; easy to copy/paste, though slightly less secure than SMS."]})]})}),_.jsx(Ds,{title:"Observations",children:_.jsx("p",{className:"pb-4",children:"MFA implementation highlighted weaknesses in default Auth0 options and a lack of tailored security guidance. Users/developers may assume full protection without understanding trade-offs. Clear guidance and penetration testing are recommended to select MFA strategies that align with organizational security needs."})})]})}const va=({title:r,children:e})=>_.jsx("div",{className:"w-full",children:_.jsxs("div",{className:"max-w-screen-lg mx-auto px-6",children:[_.jsx("div",{children:_.jsx("h2",{className:"mb-4",children:r})}),_.jsx("div",{className:"pt-4 pb-9",children:e})]})}),ix=[{stage:"Login / Start Shift",tenantAdminAction:"Set up rules and priority levels (P1, P2, subgroups).",endUserAction:"Logs into VanillaSoft dashboard; sees queued leads based on priority and last result codes.",systemResponse:"Displays leads in queue order automatically based on rules and last result codes.",tenantAdminThoughts:"I hope the queue reflects our rules correctly.",endUserThoughts:"System already knows my top leads.",painPoints:"Initial skepticism about automated priorities.",opportunities:"Show a summary or visual cue explaining lead prioritization."},{stage:"Review Automated Queue",tenantAdminAction:"Monitor queue performance and adjust if needed.",endUserAction:"Reviews queued leads to decide which to contact first.",systemResponse:"Highlights high-priority leads visually (color coding, icons).",tenantAdminThoughts:"Are top leads really correct based on our rules?",endUserThoughts:"I can start with the highest-priority leads.",painPoints:"Complexity of priority rules may be unclear.",opportunities:"Visual indicators to explain priority and scheduling logic."},{stage:"Examine Lead Details",tenantAdminAction:"Ensure all necessary data points are available for agents.",endUserAction:"Opens lead profiles for context before outreach.",systemResponse:"Displays last result code, engagement score, and subgroup info.",tenantAdminThoughts:"Do agents have enough context?",endUserThoughts:"I have context on each lead’s last activity and priority.",painPoints:"Incomplete data can confuse agent decisions.",opportunities:"Inline summary of key metrics affecting prioritization."},{stage:"Outreach / Contact",tenantAdminAction:"Monitor engagement and follow-up metrics.",endUserAction:"Contacts lead via preferred channel (call, email, SMS).",systemResponse:"Automatically updates lead status and reschedules based on outcome.",tenantAdminThoughts:"Are agents contacting leads efficiently?",endUserThoughts:"I’m engaging the right leads at the right time.",painPoints:"Risk of missing leads if rules misunderstood.",opportunities:"Tooltip indicating why this lead was queued now."},{stage:"Record Outcome / Update Result Code",tenantAdminAction:"Adjust rules if patterns emerge.",endUserAction:"Logs call result or engagement outcome.",systemResponse:"Re-queues leads dynamically based on new result codes.",tenantAdminThoughts:"Rules need to adapt automatically.",endUserThoughts:"System adapts automatically; no manual sorting required.",painPoints:"High volume can be overwhelming without cues.",opportunities:"Dynamic preview of next lead to reduce uncertainty."},{stage:"Continuous Monitoring",tenantAdminAction:"Review metrics: call volume, conversions, engagement.",endUserAction:"Observes progress toward daily goals.",systemResponse:"Provides dashboard visualizations and insights.",tenantAdminThoughts:"Are rules achieving desired results?",endUserThoughts:"I can see how effective the queue is.",painPoints:"Interpreting raw data can be challenging.",opportunities:"Dashboards with clear KPIs and visual insights."},{stage:"Iteration / Optimization",tenantAdminAction:"Refine rules or subgroups (P1a, P1b) for better outcomes.",endUserAction:"—",systemResponse:"System applies new rules dynamically.",tenantAdminThoughts:"Optimization improves efficiency over time.",endUserThoughts:"—",painPoints:"Frequent changes can confuse agents.",opportunities:"Communicate updates clearly with notifications."}];function pw(){return _.jsxs("div",{className:"text-white",children:[_.jsx("div",{className:"w-full text-gray-200",children:_.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto text-white",children:[_.jsx("h2",{className:"text-3xl pb-8 text-stone-400",children:"Case 003 : VanillaSoft Feature"}),_.jsx("h1",{className:"uppercase font-medium text-7xl leading-none",children:"Intellective Routing"}),_.jsx("h1",{className:"mb-16 font-light text-7xl leading-none uppercase text-zinc-400",children:"Contact Prioritization for Sales Efficiency"}),_.jsxs("div",{className:"flex gap-6",children:[_.jsxs("div",{className:"flex-1/3",children:[_.jsx("h3",{className:"text-3xl font-medium",children:"Role"}),_.jsxs("ul",{className:"mt-4 space-y-1 text-lg text-zinc-300",children:[_.jsx("li",{children:"Senior Product Designer"}),_.jsx("li",{children:"UX Research & Workflow Analysis"}),_.jsx("li",{children:"Interface & Interaction Design"}),_.jsx("li",{children:"Design System Integration"})]})]}),_.jsxs("div",{className:"flex-2/3",children:[_.jsx("h3",{className:"text-3xl font-medium",children:"Overview"}),_.jsx("p",{className:"mt-4 text-lg",children:"Adaptiv Networks is a multi-tenant provider of cloud-managed networking solutions, specializing in Software-Defined Wide Area Network (SD-WAN) technology. Their platform enables businesses to optimize network performance, reliability, and security while simplifying management and reducing operational costs."}),_.jsx("p",{className:"mt-4 text-lg",children:"To support hybrid and remote workforces, Adaptiv Networks offers MyConnect VPN, a secure remote access solution that integrates with their SD-WAN infrastructure. Efficient onboarding and authentication for remote employees, partners, and tenants is critical to ensure seamless connectivity, protect sensitive data, and maintain enterprise-grade security."})]})]})]})}),_.jsx("div",{className:"bg-zinc-950 w-full text-white",children:_.jsx("div",{className:"max-w-screen-lg mx-auto flex flex-nowrap space-x-1 px-6 pt-20 pb-12 mb-12 ",children:_.jsxs("div",{className:"basis-6/8",children:[_.jsx("h4",{className:"",children:"Dynamic, Multi-Level Contact Prioritization for Sales Efficiency"}),_.jsx("h1",{className:"",children:"UX Case 03: Intellective Routing"}),_.jsx("h4",{className:"basis-1/3 pt-6",children:"Designed a multi-level contact prioritization framework for VanillaSoft that lets sales teams create custom rules to focus on high-value leads. The solution improved workflow efficiency, boosted conversion rates, and enhanced user satisfaction by balancing powerful features with a simple, intuitive design."})]})})}),_.jsx(va,{title:"Role & Contribution",children:_.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[_.jsx("li",{children:"Led end-to-end feature design: research, user flows, wireframes, high-fidelity UI design."}),_.jsx("li",{children:"Defined functional requirements and collaborated with developers during implementation."}),_.jsx("li",{children:"Conducted usability testing and iterated designs based on agent feedback."}),_.jsx("li",{children:"Designed a visual query-building interface to simplify complex prioritization logic."}),_.jsx("li",{children:"Customers also needed flexibility to use any data type and create subgroups (e.g., P1a, P1b), increasing complexity."})]})}),_.jsx(va,{title:"Context",children:_.jsx("p",{className:"pb-4",children:"VanillaSoft is a cloud-based sales management platform integrating CRM, lead management, and telemarketing tools. It uses a queue-based approach to guide agents to the next best contact, based on data points such as renewal dates, rather than static lists. This ensures sales teams focus on the most relevant leads at the optimal time."})}),_.jsx(va,{title:"Business Problem",children:_.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[_.jsx("li",{children:"Customers requested the ability to implement multiple levels of prioritization (P1, P2, etc.) to better target high-value leads."}),_.jsx("li",{children:"Current platform lacked dynamic prioritization, limiting workflow efficiency."}),_.jsx("li",{children:"Customers also needed flexibility to use any data type and create subgroups (e.g., P1a, P1b), increasing complexity."})]})}),_.jsx(va,{title:"Business Goal",children:_.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[_.jsx("li",{children:"Improve sales team efficiency and conversion rates by directing agents to the most promising leads."}),_.jsx("li",{children:"Provide flexibility to define rules across diverse data types and multiple levels of prioritization."}),_.jsx("li",{children:"Ensure the system remains intuitive and accessible to prevent cognitive overload."})]})}),_.jsxs(va,{title:"Research and Insights",children:[_.jsxs("p",{className:"pb-4",children:[_.jsx("strong",{children:"Methods:"})," Customer feedback analysis, scenario mapping, edge case exploration."]}),_.jsx("p",{className:"pb-4",children:_.jsx("strong",{children:"Findings:"})}),_.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[_.jsx("li",{children:"Customers required complex inclusion/exclusion rules (e.g., prioritize A, C, F unless B = X)."}),_.jsx("li",{children:"Early limitations risked extensive rework later. Supporting broad flexibility from the start was safer."}),_.jsx("li",{children:"Designing for both power users and non-technical users was essential."})]})]}),_.jsxs("div",{className:"w-full  text-sm",children:[_.jsx("div",{className:"max-w-screen-xl mx-auto",children:_.jsx("h3",{className:" text-2xl pb-8",children:"User Journey"})}),_.jsx("div",{className:"w-full bg-zinc-900  pt-6 mb-18",children:_.jsxs("div",{className:"max-w-screen-xl mx-auto px-4",children:[_.jsxs("div",{className:"hidden md:grid grid-cols-8 gap-4 border-b border-gray-700 pb-4 font-semibold text-white",children:[_.jsx("div",{children:"Stage"}),_.jsx("div",{children:"Tenant/Admin Action"}),_.jsx("div",{children:"End-User Action"}),_.jsx("div",{children:"System Response"}),_.jsx("div",{children:"Tenant/Admin Thoughts"}),_.jsx("div",{children:"End-User Thoughts"}),_.jsx("div",{children:"Pain Points / Risks"}),_.jsx("div",{children:"Opportunities / Improvement"})]}),_.jsx("div",{className:"hidden md:block",children:ix.map((r,e)=>_.jsxs("div",{className:`grid grid-cols-8 gap-4 py-4 border-b border-gray-800 ${e%2===0?"bg-zinc-900":"bg-zinc-800"}`,children:[_.jsx("div",{className:"px-2 py-1",children:r.stage}),_.jsx("div",{className:"px-2 py-1",children:r.tenantAdminAction}),_.jsx("div",{className:"px-2 py-1",children:r.endUserAction}),_.jsx("div",{className:"px-2 py-1",children:r.systemResponse}),_.jsx("div",{className:"px-2 py-1",children:r.tenantAdminThoughts}),_.jsx("div",{className:"px-2 py-1",children:r.endUserThoughts}),_.jsx("div",{className:"px-2 py-1",children:r.painPoints}),_.jsx("div",{className:"px-2 py-1",children:r.opportunities})]},e))}),_.jsx("div",{className:"md:hidden space-y-4",children:ix.map((r,e)=>_.jsxs("details",{className:"bg-zinc-800 rounded-lg p-4",children:[_.jsx("summary",{className:"font-semibold text-white cursor-pointer",children:r.stage}),_.jsxs("div",{className:"mt-2 space-y-2 ",children:[_.jsxs("p",{children:[_.jsx("strong",{children:"Tenant/Admin Action:"})," ",r.tenantAdminAction]}),_.jsxs("p",{children:[_.jsx("strong",{children:"End-User Action:"})," ",r.endUserAction]}),_.jsxs("p",{children:[_.jsx("strong",{children:"System Response:"})," ",r.systemResponse]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Tenant/Admin Thoughts:"})," ",r.tenantAdminThoughts]}),_.jsxs("p",{children:[_.jsx("strong",{children:"End-User Thoughts:"})," ",r.endUserThoughts]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Pain Points / Risks:"})," ",r.painPoints]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Opportunities / Improvement:"})," ",r.opportunities]})]})]},e))})]})})]}),_.jsxs(va,{title:"Hypothesis",children:[_.jsx("p",{className:"pb-4",children:"By implementing a customizable prioritization framework, users will:"}),_.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[_.jsx("li",{children:"Focus on the most relevant leads at the right time."}),_.jsx("li",{children:"Improve efficiency and shorten sales cycles."}),_.jsx("li",{children:"Adapt workflows without vendor or IT support."})]}),_.jsx("p",{className:"pt-4",children:"However, without a clear and intuitive UI, the complexity could overwhelm users. Simplicity in interaction design would be critical to adoption."})]}),_.jsxs(va,{title:"Design Solution",children:[_.jsx("p",{className:"pb-4",children:"Query-Building Framework for Prioritization"}),_.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[_.jsx("li",{children:"Enhanced Lead Prioritization: Implemented real-time, customizable routing filters that dynamically rank leads based on various criteria, ensuring agents always engage with the most relevant prospects."}),_.jsx("li",{children:"Streamlined Workflow: Introduced a queue-based routing system that automates lead assignment, reducing decision fatigue and allowing agents to focus on high-value interactions."}),_.jsx("li",{children:"Continuous Optimization: Developed an intuitive interface for administrators to adjust routing filters and criteria in real-time, enabling ongoing refinement of lead prioritization strategies without disrupting agent productivity."})]})]}),_.jsx(va,{title:"Challenges & Lessons Learned",children:_.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[_.jsx("li",{children:"Balancing flexibility with simplicity in the user interface."}),_.jsx("li",{children:"Designing a rules builder that communicates complex conditions clearly."}),_.jsx("li",{children:"Ensuring adaptability to future scenarios without costly rework."})]})}),_.jsx(va,{title:"Results / Impact",children:_.jsxs("ul",{children:[_.jsx("li",{children:"Achieved a 500% increase in call volume without additional operational overhead, as reported by One of a Kind Sales."}),_.jsx("li",{children:"Streamlined lead management processes, reducing manual intervention and administrative overhead, as experienced by SalesRoads."}),_.jsx("li",{children:"Enhanced lead prioritization and routing, leading to improved sales efficiency and conversion rates."})]})})]})}function mw(){return _.jsx("h1",{className:"text-3xl font-bold",children:"Resume"})}function gw(){return _.jsx("h1",{className:"text-3xl font-bold",children:"Certification"})}function vw(){const[r,e]=me.useState(window.innerWidth>=768),[i,s]=me.useState(window.innerWidth<768),l=Aa(),c=()=>{e(f=>!f)};return me.useEffect(()=>{const f=()=>{const p=window.innerWidth<768;s(p),e(!p)};return window.addEventListener("resize",f),f(),()=>window.removeEventListener("resize",f)},[]),me.useEffect(()=>{i&&e(!1)},[l,i]),_.jsxs(_.Fragment,{children:[_.jsx(sw,{className:"bg-zinc-950"}),_.jsxs("div",{className:"flex flex-col h-screen w-screen",children:[_.jsx(rw,{toggleMenu:c}),_.jsxs("div",{className:"flex flex-1 overflow-hidden relative",children:[_.jsx("aside",{className:`w-56 h-full overflow-y-auto flex flex-col transition-all duration-300 
              ${r?"ml-0":"-ml-56"} top-0 left-0 z-40 relative`,children:_.jsx(ow,{})}),r&&i&&_.jsx("div",{onClick:()=>e(!1),className:"fixed inset-0 z-30",style:{backgroundColor:"rgba(0, 0, 0, 0.3)"}}),_.jsx("main",{className:"flex-1 overflow-y-auto overscroll-contain ml-0 py-24",children:_.jsxs(hM,{children:[_.jsx(as,{path:"/",element:_.jsx(lw,{})}),_.jsx(as,{path:"/about",element:_.jsx(cw,{})}),_.jsx(as,{path:"/case01",element:_.jsx(dw,{})}),_.jsx(as,{path:"/case02",element:_.jsx(hw,{})}),_.jsx(as,{path:"/case03",element:_.jsx(pw,{})}),_.jsx(as,{path:"/resume",element:_.jsx(mw,{})}),_.jsx(as,{path:"/certification",element:_.jsx(gw,{})})]})})]})]})]})}my.createRoot(document.getElementById("root")).render(_.jsx(me.StrictMode,{children:_.jsx(FM,{basename:"/portfolio",children:_.jsx(vw,{})})}));
