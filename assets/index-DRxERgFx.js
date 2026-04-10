function kS(r,e){for(var i=0;i<e.length;i++){const s=e[i];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in r)){const c=Object.getOwnPropertyDescriptor(s,l);c&&Object.defineProperty(r,l,c.get?c:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function qv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ld={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function XS(){if(C0)return Po;C0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var N0;function WS(){return N0||(N0=1,ld.exports=XS()),ld.exports}var g=WS(),cd={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function qS(){if(D0)return ut;D0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function S(O,K,he){this.props=O,this.context=K,this.refs=C,this.updater=he||E}S.prototype.isReactComponent={},S.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function M(){}M.prototype=S.prototype;function N(O,K,he){this.props=O,this.context=K,this.refs=C,this.updater=he||E}var P=N.prototype=new M;P.constructor=N,T(P,S.prototype),P.isPureReactComponent=!0;var U=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function k(O,K,he,_e,Ue,Ye){return he=Ye.ref,{$$typeof:r,type:O,key:K,ref:he!==void 0?he:null,props:Ye}}function A(O,K){return k(O.type,K,void 0,void 0,void 0,O.props)}function L(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function pe(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(he){return K[he]})}var V=/\/+/g;function te(O,K){return typeof O=="object"&&O!==null&&O.key!=null?pe(""+O.key):K.toString(36)}function se(){}function ue(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(se,se):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Q(O,K,he,_e,Ue){var Ye=typeof O;(Ye==="undefined"||Ye==="boolean")&&(O=null);var ee=!1;if(O===null)ee=!0;else switch(Ye){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(O.$$typeof){case r:case e:ee=!0;break;case x:return ee=O._init,Q(ee(O._payload),K,he,_e,Ue)}}if(ee)return Ue=Ue(O),ee=_e===""?"."+te(O,0):_e,U(Ue)?(he="",ee!=null&&(he=ee.replace(V,"$&/")+"/"),Q(Ue,K,he,"",function(Je){return Je})):Ue!=null&&(L(Ue)&&(Ue=A(Ue,he+(Ue.key==null||O&&O.key===Ue.key?"":(""+Ue.key).replace(V,"$&/")+"/")+ee)),K.push(Ue)),1;ee=0;var Me=_e===""?".":_e+":";if(U(O))for(var Se=0;Se<O.length;Se++)_e=O[Se],Ye=Me+te(_e,Se),ee+=Q(_e,K,he,Ye,Ue);else if(Se=_(O),typeof Se=="function")for(O=Se.call(O),Se=0;!(_e=O.next()).done;)_e=_e.value,Ye=Me+te(_e,Se++),ee+=Q(_e,K,he,Ye,Ue);else if(Ye==="object"){if(typeof O.then=="function")return Q(ue(O),K,he,_e,Ue);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ee}function I(O,K,he){if(O==null)return O;var _e=[],Ue=0;return Q(O,_e,"","",function(Ye){return K.call(he,Ye,Ue++)}),_e}function H(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(he){(O._status===0||O._status===-1)&&(O._status=1,O._result=he)},function(he){(O._status===0||O._status===-1)&&(O._status=2,O._result=he)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var de=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function ge(){}return ut.Children={map:I,forEach:function(O,K,he){I(O,function(){K.apply(this,arguments)},he)},count:function(O){var K=0;return I(O,function(){K++}),K},toArray:function(O){return I(O,function(K){return K})||[]},only:function(O){if(!L(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ut.Component=S,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=N,ut.StrictMode=s,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ut.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},ut.cache=function(O){return function(){return O.apply(null,arguments)}},ut.cloneElement=function(O,K,he){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var _e=T({},O.props),Ue=O.key,Ye=void 0;if(K!=null)for(ee in K.ref!==void 0&&(Ye=void 0),K.key!==void 0&&(Ue=""+K.key),K)!G.call(K,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&K.ref===void 0||(_e[ee]=K[ee]);var ee=arguments.length-2;if(ee===1)_e.children=he;else if(1<ee){for(var Me=Array(ee),Se=0;Se<ee;Se++)Me[Se]=arguments[Se+2];_e.children=Me}return k(O.type,Ue,void 0,void 0,Ye,_e)},ut.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ut.createElement=function(O,K,he){var _e,Ue={},Ye=null;if(K!=null)for(_e in K.key!==void 0&&(Ye=""+K.key),K)G.call(K,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Ue[_e]=K[_e]);var ee=arguments.length-2;if(ee===1)Ue.children=he;else if(1<ee){for(var Me=Array(ee),Se=0;Se<ee;Se++)Me[Se]=arguments[Se+2];Ue.children=Me}if(O&&O.defaultProps)for(_e in ee=O.defaultProps,ee)Ue[_e]===void 0&&(Ue[_e]=ee[_e]);return k(O,Ye,void 0,void 0,null,Ue)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(O){return{$$typeof:p,render:O}},ut.isValidElement=L,ut.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:H}},ut.memo=function(O,K){return{$$typeof:h,type:O,compare:K===void 0?null:K}},ut.startTransition=function(O){var K=B.T,he={};B.T=he;try{var _e=O(),Ue=B.S;Ue!==null&&Ue(he,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(ge,de)}catch(Ye){de(Ye)}finally{B.T=K}},ut.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ut.use=function(O){return B.H.use(O)},ut.useActionState=function(O,K,he){return B.H.useActionState(O,K,he)},ut.useCallback=function(O,K){return B.H.useCallback(O,K)},ut.useContext=function(O){return B.H.useContext(O)},ut.useDebugValue=function(){},ut.useDeferredValue=function(O,K){return B.H.useDeferredValue(O,K)},ut.useEffect=function(O,K,he){var _e=B.H;if(typeof he=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _e.useEffect(O,K)},ut.useId=function(){return B.H.useId()},ut.useImperativeHandle=function(O,K,he){return B.H.useImperativeHandle(O,K,he)},ut.useInsertionEffect=function(O,K){return B.H.useInsertionEffect(O,K)},ut.useLayoutEffect=function(O,K){return B.H.useLayoutEffect(O,K)},ut.useMemo=function(O,K){return B.H.useMemo(O,K)},ut.useOptimistic=function(O,K){return B.H.useOptimistic(O,K)},ut.useReducer=function(O,K,he){return B.H.useReducer(O,K,he)},ut.useRef=function(O){return B.H.useRef(O)},ut.useState=function(O){return B.H.useState(O)},ut.useSyncExternalStore=function(O,K,he){return B.H.useSyncExternalStore(O,K,he)},ut.useTransition=function(){return B.H.useTransition()},ut.version="19.1.0",ut}var U0;function Xh(){return U0||(U0=1,cd.exports=qS()),cd.exports}var Ne=Xh();const Yv=qv(Ne),YS=kS({__proto__:null,default:Yv},[Ne]);var ud={exports:{}},Io={},fd={exports:{}},dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function ZS(){return L0||(L0=1,function(r){function e(I,H){var de=I.length;I.push(H);e:for(;0<de;){var ge=de-1>>>1,O=I[ge];if(0<l(O,H))I[ge]=H,I[de]=O,de=ge;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var H=I[0],de=I.pop();if(de!==H){I[0]=de;e:for(var ge=0,O=I.length,K=O>>>1;ge<K;){var he=2*(ge+1)-1,_e=I[he],Ue=he+1,Ye=I[Ue];if(0>l(_e,de))Ue<O&&0>l(Ye,_e)?(I[ge]=Ye,I[Ue]=de,ge=Ue):(I[ge]=_e,I[he]=de,ge=he);else if(Ue<O&&0>l(Ye,de))I[ge]=Ye,I[Ue]=de,ge=Ue;else break e}}return H}function l(I,H){var de=I.sortIndex-H.sortIndex;return de!==0?de:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],x=1,y=null,_=3,E=!1,T=!1,C=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var H=i(h);H!==null;){if(H.callback===null)s(h);else if(H.startTime<=I)s(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function B(I){if(C=!1,U(I),!T)if(i(m)!==null)T=!0,G||(G=!0,te());else{var H=i(h);H!==null&&Q(B,H.startTime-I)}}var G=!1,k=-1,A=5,L=-1;function pe(){return S?!0:!(r.unstable_now()-L<A)}function V(){if(S=!1,G){var I=r.unstable_now();L=I;var H=!0;try{e:{T=!1,C&&(C=!1,N(k),k=-1),E=!0;var de=_;try{t:{for(U(I),y=i(m);y!==null&&!(y.expirationTime>I&&pe());){var ge=y.callback;if(typeof ge=="function"){y.callback=null,_=y.priorityLevel;var O=ge(y.expirationTime<=I);if(I=r.unstable_now(),typeof O=="function"){y.callback=O,U(I),H=!0;break t}y===i(m)&&s(m),U(I)}else s(m);y=i(m)}if(y!==null)H=!0;else{var K=i(h);K!==null&&Q(B,K.startTime-I),H=!1}}break e}finally{y=null,_=de,E=!1}H=void 0}}finally{H?te():G=!1}}}var te;if(typeof P=="function")te=function(){P(V)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ue=se.port2;se.port1.onmessage=V,te=function(){ue.postMessage(null)}}else te=function(){M(V,0)};function Q(I,H){k=M(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(I){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var de=_;_=H;try{return I()}finally{_=de}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var de=_;_=I;try{return H()}finally{_=de}},r.unstable_scheduleCallback=function(I,H,de){var ge=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?ge+de:ge):de=ge,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=de+O,I={id:x++,callback:H,priorityLevel:I,startTime:de,expirationTime:O,sortIndex:-1},de>ge?(I.sortIndex=de,e(h,I),i(m)===null&&I===i(h)&&(C?(N(k),k=-1):C=!0,Q(B,de-ge))):(I.sortIndex=O,e(m,I),T||E||(T=!0,G||(G=!0,te()))),I},r.unstable_shouldYield=pe,r.unstable_wrapCallback=function(I){var H=_;return function(){var de=_;_=H;try{return I.apply(this,arguments)}finally{_=de}}}}(dd)),dd}var O0;function KS(){return O0||(O0=1,fd.exports=ZS()),fd.exports}var hd={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function QS(){if(P0)return Cn;P0=1;var r=Xh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:h,implementation:x}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,x)},Cn.flushSync=function(m){var h=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=x,s.d.f()}},Cn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,y=p(x,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:_,fetchPriority:E}):x==="script"&&s.d.X(m,{crossOrigin:y,integrity:_,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Cn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Cn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,y=p(x,h.crossOrigin);s.d.L(m,x,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Cn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,h){return m(h)},Cn.useFormState=function(m,h,x){return f.H.useFormState(m,h,x)},Cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var I0;function Zv(){if(I0)return hd.exports;I0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hd.exports=QS(),hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function JS(){if(F0)return Io;F0=1;var r=KS(),e=Xh(),i=Zv();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),t;if(d===o)return p(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var b=!1,w=u.child;w;){if(w===a){b=!0,a=u,o=d;break}if(w===o){b=!0,o=u,a=d;break}w=w.sibling}if(!b){for(w=d.child;w;){if(w===a){b=!0,a=d,o=u;break}if(w===o){b=!0,o=d,a=u;break}w=w.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function h(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=h(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case S:return"Profiler";case C:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case P:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var Q=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},ge=[],O=-1;function K(t){return{current:t}}function he(t){0>O||(t.current=ge[O],ge[O]=null,O--)}function _e(t,n){O++,ge[O]=t.current,t.current=n}var Ue=K(null),Ye=K(null),ee=K(null),Me=K(null);function Se(t,n){switch(_e(ee,n),_e(Ye,t),_e(Ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?i0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=i0(n),t=a0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}he(Ue),_e(Ue,t)}function Je(){he(Ue),he(Ye),he(ee)}function Ke(t){t.memoizedState!==null&&_e(Me,t);var n=Ue.current,a=a0(n,t.type);n!==a&&(_e(Ye,t),_e(Ue,a))}function $e(t){Ye.current===t&&(he(Ue),he(Ye)),Me.current===t&&(he(Me),No._currentValue=de)}var qt=Object.prototype.hasOwnProperty,ht=r.unstable_scheduleCallback,_t=r.unstable_cancelCallback,Ct=r.unstable_shouldYield,rt=r.unstable_requestPaint,yt=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,kt=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,bt=r.unstable_NormalPriority,Ge=r.unstable_LowPriority,D=r.unstable_IdlePriority,v=r.log,F=r.unstable_setDisableYieldValue,Z=null,le=null;function ae(t){if(typeof v=="function"&&F(t),le&&typeof le.setStrictMode=="function")try{le.setStrictMode(Z,t)}catch{}}var we=Math.clz32?Math.clz32:Qe,Re=Math.log,Xe=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Re(t)/Xe|0)|0}var be=256,Te=4194304;function Fe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function He(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=Fe(o):(b&=w,b!==0?u=Fe(b):a||(a=w&~t,a!==0&&(u=Fe(a))))):(w=o&~d,w!==0?u=Fe(w):b!==0?u=Fe(b):a||(a=o&~t,a!==0&&(u=Fe(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ct(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=be;return be<<=1,(be&4194048)===0&&(be=256),t}function Ce(){var t=Te;return Te<<=1,(Te&62914560)===0&&(Te=4194304),t}function Ae(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ie(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ee(t,n,a,o,u,d){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,z=t.expirationTimes,ne=t.hiddenUpdates;for(a=b&~a;0<a;){var ve=31-we(a),ye=1<<ve;w[ve]=0,z[ve]=-1;var re=ne[ve];if(re!==null)for(ne[ve]=null,ve=0;ve<re.length;ve++){var ce=re[ve];ce!==null&&(ce.lane&=-536870913)}a&=~ye}o!==0&&me(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(b&~n))}function me(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-we(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Ve(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-we(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:b0(t.type))}function hi(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var xn=Math.random().toString(36).slice(2),hn="__reactFiber$"+xn,_n="__reactProps$"+xn,ya="__reactContainer$"+xn,Is="__reactEvents$"+xn,sl="__reactListeners$"+xn,Wi="__reactHandles$"+xn,Fs="__reactResources$"+xn,Ma="__reactMarker$"+xn;function Bs(t){delete t[hn],delete t[_n],delete t[Is],delete t[sl],delete t[Wi]}function pi(t){var n=t[hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ya]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=l0(t);t!==null;){if(a=t[hn])return a;t=l0(t)}return n}t=a,a=t.parentNode}return null}function qi(t){if(t=t[hn]||t[ya]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ci(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Yi(t){var n=t[Fs];return n||(n=t[Fs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[Ma]=!0}var rl=new Set,ol={};function Zi(t,n){ba(t,n),ba(t+"Capture",n)}function ba(t,n){for(ol[t]=n,t=0;t<n.length;t++)rl.add(n[t])}var ru=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ll={},R={};function q(t){return qt.call(R,t)?!0:qt.call(ll,t)?!1:ru.test(t)?R[t]=!0:(ll[t]=!0,!1)}function fe(t,n,a){if(q(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function J(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Le,Be;function De(t){if(Le===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Le=n&&n[1]||"",Be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Le+t+Be}var je=!1;function We(t,n){if(!t||je)return"";je=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ce){var re=ce}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(ce){re=ce}t.call(ye.prototype)}}else{try{throw Error()}catch(ce){re=ce}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ce){if(ce&&re&&typeof ce.stack=="string")return[ce.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],w=d[1];if(b&&w){var z=b.split(`
`),ne=w.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===ne.length)for(o=z.length-1,u=ne.length-1;1<=o&&0<=u&&z[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==ne[u]){var ve=`
`+z[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{je=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?De(a):""}function st(t){switch(t.tag){case 26:case 27:case 5:return De(t.type);case 16:return De("Lazy");case 13:return De("Suspense");case 19:return De("SuspenseList");case 0:case 15:return We(t.type,!1);case 11:return We(t.type.render,!1);case 1:return We(t.type,!0);case 31:return De("Activity");default:return""}}function lt(t){try{var n="";do n+=st(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t){var n=Nt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){o=""+b,d.call(this,b)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Vt(t){t._valueTracker||(t._valueTracker=Kt(t))}function Dt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Nt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function nn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qe=/[\n"\\]/g;function Xt(t){return t.replace(qe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xt(t,n,a,o,u,d,b,w){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ze(n)):t.value!==""+ze(n)&&(t.value=""+ze(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?In(t,b,ze(n)):a!=null?In(t,b,ze(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+ze(w):t.removeAttribute("name")}function Pn(t,n,a,o,u,d,b,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+ze(a):"",n=n!=null?""+ze(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b)}function In(t,n,a){n==="number"&&nn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Fn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ki(t,n,a){if(n!=null&&(n=""+ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ze(a):""}function Pt(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Yt(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function mi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&an(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&an(t,d,n[d])}function Di(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ul(t){return jx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ou=null;function lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zs=null,Hs=null;function sp(t){var n=qi(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;e:switch(t=n.stateNode,n.type){case"input":if(xt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[_n]||null;if(!u)throw Error(s(90));xt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Dt(o)}break e;case"textarea":Ki(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Fn(t,!!a.multiple,n,!1)}}}var cu=!1;function rp(t,n,a){if(cu)return t(n,a);cu=!0;try{var o=t(n);return o}finally{if(cu=!1,(zs!==null||Hs!==null)&&(Zl(),zs&&(n=zs,t=Hs,Hs=zs=null,sp(n),t)))for(n=0;n<t.length;n++)sp(t[n])}}function Vr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Qi)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){uu=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{uu=!1}var Ea=null,fu=null,fl=null;function op(){if(fl)return fl;var t,n=fu,a=n.length,o,u="value"in Ea?Ea.value:Ea.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(o=1;o<=b&&n[a-o]===u[d-o];o++);return fl=u.slice(t,1<o?1-o:void 0)}function dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function lp(){return!1}function Bn(t){function n(a,o,u,d,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?hl:lp,this.isPropagationStopped=lp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),n}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Bn(is),kr=x({},is,{view:0,detail:0}),kx=Bn(kr),du,hu,Xr,ml=x({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(du=t.screenX-Xr.screenX,hu=t.screenY-Xr.screenY):hu=du=0,Xr=t),du)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),cp=Bn(ml),Xx=x({},ml,{dataTransfer:0}),Wx=Bn(Xx),qx=x({},kr,{relatedTarget:0}),pu=Bn(qx),Yx=x({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=Bn(Yx),Kx=x({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qx=Bn(Kx),Jx=x({},is,{data:0}),up=Bn(Jx),$x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=t_[t])?!!n[t]:!1}function mu(){return n_}var i_=x({},kr,{key:function(t){if(t.key){var n=$x[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a_=Bn(i_),s_=x({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=Bn(s_),r_=x({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),o_=Bn(r_),l_=x({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),c_=Bn(l_),u_=x({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f_=Bn(u_),d_=x({},is,{newState:0,oldState:0}),h_=Bn(d_),p_=[9,13,27,32],gu=Qi&&"CompositionEvent"in window,Wr=null;Qi&&"documentMode"in document&&(Wr=document.documentMode);var m_=Qi&&"TextEvent"in window&&!Wr,dp=Qi&&(!gu||Wr&&8<Wr&&11>=Wr),hp=" ",pp=!1;function mp(t,n){switch(t){case"keyup":return p_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function g_(t,n){switch(t){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,hp);case"textInput":return t=n.data,t===hp&&pp?null:t;default:return null}}function v_(t,n){if(Gs)return t==="compositionend"||!gu&&mp(t,n)?(t=op(),fl=fu=Ea=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var x_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!x_[t.type]:n==="textarea"}function xp(t,n,a,o){zs?Hs?Hs.push(o):Hs=[o]:zs=o,n=tc(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var qr=null,Yr=null;function __(t){Jg(t,0)}function gl(t){var n=Ci(t);if(Dt(n))return t}function _p(t,n){if(t==="change")return n}var Sp=!1;if(Qi){var vu;if(Qi){var xu="oninput"in document;if(!xu){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),xu=typeof yp.oninput=="function"}vu=xu}else vu=!1;Sp=vu&&(!document.documentMode||9<document.documentMode)}function Mp(){qr&&(qr.detachEvent("onpropertychange",bp),Yr=qr=null)}function bp(t){if(t.propertyName==="value"&&gl(Yr)){var n=[];xp(n,Yr,t,lu(t)),rp(__,n)}}function S_(t,n,a){t==="focusin"?(Mp(),qr=n,Yr=a,qr.attachEvent("onpropertychange",bp)):t==="focusout"&&Mp()}function y_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(Yr)}function M_(t,n){if(t==="click")return gl(n)}function b_(t,n){if(t==="input"||t==="change")return gl(n)}function E_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:E_;function Zr(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qt.call(n,u)||!Xn(t[u],n[u]))return!1}return!0}function Ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tp(t,n){var a=Ep(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ep(a)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nn(t.document)}return n}function _u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var T_=Qi&&"documentMode"in document&&11>=document.documentMode,Vs=null,Su=null,Kr=null,yu=!1;function Rp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Vs==null||Vs!==nn(o)||(o=Vs,"selectionStart"in o&&_u(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Kr&&Zr(Kr,o)||(Kr=o,o=tc(Su,"onSelect"),0<o.length&&(n=new pl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Vs)))}function as(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var js={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},Mu={},Cp={};Qi&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function ss(t){if(Mu[t])return Mu[t];if(!js[t])return t;var n=js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cp)return Mu[t]=n[a];return t}var Np=ss("animationend"),Dp=ss("animationiteration"),Up=ss("animationstart"),A_=ss("transitionrun"),w_=ss("transitionstart"),R_=ss("transitioncancel"),Lp=ss("transitionend"),Op=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function gi(t,n){Op.set(t,n),Zi(n,[t])}var Pp=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=Pp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:lt(n)},Pp.set(t,n),n)}return{value:t,source:n,stack:lt(n)}}var ni=[],ks=0,Eu=0;function vl(){for(var t=ks,n=Eu=ks=0;n<t;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var d=ni[n];if(ni[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}d!==0&&Ip(a,u,d)}}function xl(t,n,a,o){ni[ks++]=t,ni[ks++]=n,ni[ks++]=a,ni[ks++]=o,Eu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Tu(t,n,a,o){return xl(t,n,a,o),_l(t)}function Xs(t,n){return xl(t,null,null,n),_l(t)}function Ip(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-we(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function _l(t){if(50<Mo)throw Mo=0,Uf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ws={};function C_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,o){return new C_(t,n,a,o)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Sl(t,n,a,o,u,d){var b=0;if(o=t,typeof t=="function")Au(t)&&(b=1);else if(typeof t=="string")b=DS(t,a,Ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=Wn(31,a,n,u),t.elementType=L,t.lanes=d,t;case T:return rs(a.children,u,d,n);case C:b=8,u|=24;break;case S:return t=Wn(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case B:return t=Wn(13,a,n,u),t.elementType=B,t.lanes=d,t;case G:return t=Wn(19,a,n,u),t.elementType=G,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M:case P:b=10;break e;case N:b=9;break e;case U:b=11;break e;case k:b=14;break e;case A:b=16,o=null;break e}b=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Wn(b,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function rs(t,n,a,o){return t=Wn(7,t,o,n),t.lanes=a,t}function wu(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Ru(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qs=[],Ys=0,yl=null,Ml=0,ii=[],ai=0,os=null,$i=1,ea="";function ls(t,n){qs[Ys++]=Ml,qs[Ys++]=yl,yl=t,Ml=n}function Bp(t,n,a){ii[ai++]=$i,ii[ai++]=ea,ii[ai++]=os,os=t;var o=$i;t=ea;var u=32-we(o)-1;o&=~(1<<u),a+=1;var d=32-we(n)+u;if(30<d){var b=u-u%5;d=(o&(1<<b)-1).toString(32),o>>=b,u-=b,$i=1<<32-we(n)+u|a<<u|o,ea=d+t}else $i=1<<d|a<<u|o,ea=t}function Cu(t){t.return!==null&&(ls(t,1),Bp(t,1,0))}function Nu(t){for(;t===yl;)yl=qs[--Ys],qs[Ys]=null,Ml=qs[--Ys],qs[Ys]=null;for(;t===os;)os=ii[--ai],ii[ai]=null,ea=ii[--ai],ii[ai]=null,$i=ii[--ai],ii[ai]=null}var Un=null,Jt=null,Ut=!1,cs=null,Ui=!1,Du=Error(s(519));function us(t){var n=Error(s(418,""));throw $r(ti(n,t)),Du}function zp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[hn]=t,n[_n]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)vt(Eo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Vt(n);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),Pt(n,o.value,o.defaultValue,o.children),Vt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||n0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=nc),n=!0):n=!1,n||us(t)}function Hp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Un=Un.return}}function Qr(t){if(t!==Un)return!1;if(!Ut)return Hp(t),Ut=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yf(t.type,t.memoizedProps)),a=!a),a&&Jt&&us(t),Hp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Jt=xi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Jt=null}}else n===27?(n=Jt,Ha(t.type)?(t=Jf,Jf=null,Jt=t):Jt=n):Jt=Un?xi(t.stateNode.nextSibling):null;return!0}function Jr(){Jt=Un=null,Ut=!1}function Gp(){var t=cs;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),cs=null),t}function $r(t){cs===null?cs=[t]:cs.push(t)}var Uu=K(null),fs=null,ta=null;function Ta(t,n,a){_e(Uu,n._currentValue),n._currentValue=a}function na(t){t._currentValue=Uu.current,he(Uu)}function Lu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var b=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var z=0;z<n.length;z++)if(w.context===n[z]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Lu(d.return,a,t),o||(b=null);break e}d=w.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(s(341));b.lanes|=a,d=b.alternate,d!==null&&(d.lanes|=a),Lu(b,a,t),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===t){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function eo(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var w=u.type;Xn(u.pendingProps.value,b.value)||(t!==null?t.push(w):t=[w])}}else if(u===Me.current){if(b=u.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&Ou(n,t,a,o),n.flags|=262144}function bl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ds(t){fs=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Vp(fs,t)}function El(t,n){return fs===null&&ds(t),Vp(t,n)}function Vp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(s(308));ta=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ta=ta.next=n;return a}var N_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},D_=r.unstable_scheduleCallback,U_=r.unstable_NormalPriority,pn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new N_,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&D_(U_,function(){t.controller.abort()})}var no=null,Iu=0,Zs=0,Ks=null;function L_(t,n){if(no===null){var a=no=[];Iu=0,Zs=zf(),Ks={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,n.then(jp,jp),n}function jp(){if(--Iu===0&&no!==null){Ks!==null&&(Ks.status="fulfilled");var t=no;no=null,Zs=0,Ks=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function O_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var kp=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&L_(t,n),kp!==null&&kp(t,n)};var hs=K(null);function Fu(){var t=hs.current;return t!==null?t:Wt.pooledCache}function Tl(t,n){n===null?_e(hs,hs.current):_e(hs,n.pool)}function Xp(){var t=Fu();return t===null?null:{parent:pn._currentValue,pool:t}}var io=Error(s(460)),Wp=Error(s(474)),Al=Error(s(542)),Bu={then:function(){}};function qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wl(){}function Yp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(wl,wl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t;default:if(typeof n.status=="string")n.then(wl,wl);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t}throw ao=n,io}}var ao=null;function Zp(){if(ao===null)throw Error(s(459));var t=ao;return ao=null,t}function Kp(t){if(t===io||t===Al)throw Error(s(483))}var Aa=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ra(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(t),Ip(t,null,a),n}return xl(t,o,n,a),_l(t)}function so(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ve(t,a)}}function Gu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=b:d=d.next=b,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Vu=!1;function ro(){if(Vu){var t=Ks;if(t!==null)throw t}}function oo(t,n,a,o){Vu=!1;var u=t.updateQueue;Aa=!1;var d=u.firstBaseUpdate,b=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var z=w,ne=z.next;z.next=null,b===null?d=ne:b.next=ne,b=z;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==b&&(w===null?ve.firstBaseUpdate=ne:w.next=ne,ve.lastBaseUpdate=z))}if(d!==null){var ye=u.baseState;b=0,ve=ne=z=null,w=d;do{var re=w.lane&-536870913,ce=re!==w.lane;if(ce?(Et&re)===re:(o&re)===re){re!==0&&re===Zs&&(Vu=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var it=t,et=w;re=n;var Gt=a;switch(et.tag){case 1:if(it=et.payload,typeof it=="function"){ye=it.call(Gt,ye,re);break e}ye=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=et.payload,re=typeof it=="function"?it.call(Gt,ye,re):it,re==null)break e;ye=x({},ye,re);break e;case 2:Aa=!0}}re=w.callback,re!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[re]:ce.push(re))}else ce={lane:re,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(ne=ve=ce,z=ye):ve=ve.next=ce,b|=re;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ce=w,w=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);ve===null&&(z=ye),u.baseState=z,u.firstBaseUpdate=ne,u.lastBaseUpdate=ve,d===null&&(u.shared.lanes=0),Ia|=b,t.lanes=b,t.memoizedState=ye}}function Qp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Jp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Qp(a[t],n)}var Qs=K(null),Rl=K(0);function $p(t,n){t=ca,_e(Rl,t),_e(Qs,n),ca=t|n.baseLanes}function ju(){_e(Rl,ca),_e(Qs,Qs.current)}function ku(){ca=Rl.current,he(Qs),he(Rl)}var Ca=0,pt=null,zt=null,ln=null,Cl=!1,Js=!1,ps=!1,Nl=0,lo=0,$s=null,P_=0;function sn(){throw Error(s(321))}function Xu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Wu(t,n,a,o,u,d){return Ca=d,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Im:Fm,ps=!1,d=a(o,u),ps=!1,Js&&(d=tm(n,a,o,u)),em(t),d}function em(t){I.H=Il;var n=zt!==null&&zt.next!==null;if(Ca=0,ln=zt=pt=null,Cl=!1,lo=0,$s=null,n)throw Error(s(300));t===null||Sn||(t=t.dependencies,t!==null&&bl(t)&&(Sn=!0))}function tm(t,n,a,o){pt=t;var u=0;do{if(Js&&($s=null),lo=0,Js=!1,25<=u)throw Error(s(301));if(u+=1,ln=zt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=V_,d=n(a,o)}while(Js);return d}function I_(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(pt.flags|=1024),n}function qu(){var t=Nl!==0;return Nl=0,t}function Yu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Zu(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}Ca=0,ln=zt=pt=null,Js=!1,lo=Nl=0,$s=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?pt.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(zt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var n=ln===null?pt.memoizedState:ln.next;if(n!==null)ln=n,zt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},ln===null?pt.memoizedState=ln=t:ln=ln.next=t}return ln}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,$s===null&&($s=[]),t=Yp($s,t,n),n=pt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Im:Fm),t}function Dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===P)return Rn(t)}throw Error(s(438,String(t)))}function Qu(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ku(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=pe;return n.index++,a}function ia(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=cn();return Ju(n,zt,t)}function Ju(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var b=u.next;u.next=d.next,d.next=b}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=b=null,z=null,ne=n,ve=!1;do{var ye=ne.lane&-536870913;if(ye!==ne.lane?(Et&ye)===ye:(Ca&ye)===ye){var re=ne.revertLane;if(re===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ye===Zs&&(ve=!0);else if((Ca&re)===re){ne=ne.next,re===Zs&&(ve=!0);continue}else ye={lane:0,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(w=z=ye,b=d):z=z.next=ye,pt.lanes|=re,Ia|=re;ye=ne.action,ps&&a(d,ye),d=ne.hasEagerState?ne.eagerState:a(d,ye)}else re={lane:ye,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(w=z=re,b=d):z=z.next=re,pt.lanes|=ye,Ia|=ye;ne=ne.next}while(ne!==null&&ne!==n);if(z===null?b=d:z.next=w,!Xn(d,t.memoizedState)&&(Sn=!0,ve&&(a=Ks,a!==null)))throw a;t.memoizedState=d,t.baseState=b,t.baseQueue=z,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function $u(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do d=t(d,b.action),b=b.next;while(b!==u);Xn(d,n.memoizedState)||(Sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function nm(t,n,a){var o=pt,u=cn(),d=Ut;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var b=!Xn((zt||u).memoizedState,a);b&&(u.memoizedState=a,Sn=!0),u=u.queue;var w=sm.bind(null,o,u,t);if(uo(2048,8,w,[t]),u.getSnapshot!==n||b||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,er(9,Ll(),am.bind(null,o,u,a,n),null),Wt===null)throw Error(s(349));d||(Ca&124)!==0||im(o,n,a)}return a}function im(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=Ku(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function am(t,n,a,o){n.value=a,n.getSnapshot=o,rm(n)&&om(t)}function sm(t,n,a){return a(function(){rm(n)&&om(t)})}function rm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function om(t){var n=Xs(t,2);n!==null&&Qn(n,t,2)}function ef(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),ps){ae(!0);try{a()}finally{ae(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},n}function lm(t,n,a,o){return t.baseState=a,Ju(t,zt,typeof o=="function"?o:ia)}function F_(t,n,a,o,u){if(Pl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,cm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function cm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=I.T,b={};I.T=b;try{var w=a(u,o),z=I.S;z!==null&&z(b,w),um(t,n,w)}catch(ne){tf(t,n,ne)}finally{I.T=d}}else try{d=a(u,o),um(t,n,d)}catch(ne){tf(t,n,ne)}}function um(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){fm(t,n,o)},function(o){return tf(t,n,o)}):fm(t,n,a)}function fm(t,n,a){n.status="fulfilled",n.value=a,dm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,cm(t,a)))}function tf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,dm(n),n=n.next;while(n!==o)}t.action=null}function dm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function hm(t,n){return n}function pm(t,n){if(Ut){var a=Wt.formState;if(a!==null){e:{var o=pt;if(Ut){if(Jt){t:{for(var u=Jt,d=Ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Jt=xi(u.nextSibling),o=u.data==="F!";break e}}us(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:n},a.queue=o,a=Lm.bind(null,pt,o),o.dispatch=a,o=ef(!1),d=of.bind(null,pt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=F_.bind(null,pt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function mm(t){var n=cn();return gm(n,zt,t)}function gm(t,n,a){if(n=Ju(t,n,hm)[0],t=Ul(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(b){throw b===io?Al:b}else o=n;n=cn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,er(9,Ll(),B_.bind(null,u,a),null)),[o,d,t]}function B_(t,n){t.action=n}function vm(t){var n=cn(),a=zt;if(a!==null)return gm(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function er(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Ku(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Ll(){return{destroy:void 0,resource:void 0}}function xm(){return cn().memoizedState}function Ol(t,n,a,o){var u=zn();o=o===void 0?null:o,pt.flags|=t,u.memoizedState=er(1|n,Ll(),a,o)}function uo(t,n,a,o){var u=cn();o=o===void 0?null:o;var d=u.memoizedState.inst;zt!==null&&o!==null&&Xu(o,zt.memoizedState.deps)?u.memoizedState=er(n,d,a,o):(pt.flags|=t,u.memoizedState=er(1|n,d,a,o))}function _m(t,n){Ol(8390656,8,t,n)}function Sm(t,n){uo(2048,8,t,n)}function ym(t,n){return uo(4,2,t,n)}function Mm(t,n){return uo(4,4,t,n)}function bm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Em(t,n,a){a=a!=null?a.concat([t]):null,uo(4,4,bm.bind(null,n,t),a)}function nf(){}function Tm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Xu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Am(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Xu(n,o[1]))return o[0];if(o=t(),ps){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[o,n],o}function af(t,n,a){return a===void 0||(Ca&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Cg(),pt.lanes|=t,Ia|=t,a)}function wm(t,n,a,o){return Xn(a,n)?a:Qs.current!==null?(t=af(t,a,o),Xn(t,n)||(Sn=!0),t):(Ca&42)===0?(Sn=!0,t.memoizedState=a):(t=Cg(),pt.lanes|=t,Ia|=t,n)}function Rm(t,n,a,o,u){var d=H.p;H.p=d!==0&&8>d?d:8;var b=I.T,w={};I.T=w,of(t,!1,n,a);try{var z=u(),ne=I.S;if(ne!==null&&ne(w,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ve=O_(z,o);fo(t,n,ve,Kn(t))}else fo(t,n,o,Kn(t))}catch(ye){fo(t,n,{then:function(){},status:"rejected",reason:ye},Kn())}finally{H.p=d,I.T=b}}function z_(){}function sf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Cm(t).queue;Rm(t,u,n,de,a===null?z_:function(){return Nm(t),a(o)})}function Cm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:de},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Nm(t){var n=Cm(t).next.queue;fo(t,n,{},Kn())}function rf(){return Rn(No)}function Dm(){return cn().memoizedState}function Um(){return cn().memoizedState}function H_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=wa(a);var o=Ra(n,t,a);o!==null&&(Qn(o,n,a),so(o,n,a)),n={cache:Pu()},t.payload=n;return}n=n.return}}function G_(t,n,a){var o=Kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?Om(n,a):(a=Tu(t,n,a,o),a!==null&&(Qn(a,t,o),Pm(a,n,o)))}function Lm(t,n,a){var o=Kn();fo(t,n,a,o)}function fo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))Om(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,w=d(b,a);if(u.hasEagerState=!0,u.eagerState=w,Xn(w,b))return xl(t,n,u,0),Wt===null&&vl(),!1}catch{}finally{}if(a=Tu(t,n,u,o),a!==null)return Qn(a,t,o),Pm(a,n,o),!0}return!1}function of(t,n,a,o){if(o={lane:2,revertLane:zf(),action:o,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(s(479))}else n=Tu(t,a,o,2),n!==null&&Qn(n,t,2)}function Pl(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function Om(t,n){Js=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Pm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ve(t,a)}}var Il={readContext:Rn,use:Dl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},Im={readContext:Rn,use:Dl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:_m,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ol(4194308,4,bm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ol(4194308,4,t,n)},useInsertionEffect:function(t,n){Ol(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(ps){ae(!0);try{t()}finally{ae(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(ps){ae(!0);try{a(n)}finally{ae(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=G_.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=ef(t);var n=t.queue,a=Lm.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(t,n){var a=zn();return af(a,t,n)},useTransition:function(){var t=ef(!1);return t=Rm.bind(null,pt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=zn();if(Ut){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(Et&124)!==0||im(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,_m(sm.bind(null,o,d,t),[t]),o.flags|=2048,er(9,Ll(),am.bind(null,o,d,a,n),null),a},useId:function(){var t=zn(),n=Wt.identifierPrefix;if(Ut){var a=ea,o=$i;a=(o&~(1<<32-we(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=P_++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:rf,useFormState:pm,useActionState:pm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Qu,useCacheRefresh:function(){return zn().memoizedState=H_.bind(null,pt)}},Fm={readContext:Rn,use:Dl,useCallback:Tm,useContext:Rn,useEffect:Sm,useImperativeHandle:Em,useInsertionEffect:ym,useLayoutEffect:Mm,useMemo:Am,useReducer:Ul,useRef:xm,useState:function(){return Ul(ia)},useDebugValue:nf,useDeferredValue:function(t,n){var a=cn();return wm(a,zt.memoizedState,t,n)},useTransition:function(){var t=Ul(ia)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:nm,useId:Dm,useHostTransitionStatus:rf,useFormState:mm,useActionState:mm,useOptimistic:function(t,n){var a=cn();return lm(a,zt,t,n)},useMemoCache:Qu,useCacheRefresh:Um},V_={readContext:Rn,use:Dl,useCallback:Tm,useContext:Rn,useEffect:Sm,useImperativeHandle:Em,useInsertionEffect:ym,useLayoutEffect:Mm,useMemo:Am,useReducer:$u,useRef:xm,useState:function(){return $u(ia)},useDebugValue:nf,useDeferredValue:function(t,n){var a=cn();return zt===null?af(a,t,n):wm(a,zt.memoizedState,t,n)},useTransition:function(){var t=$u(ia)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:nm,useId:Dm,useHostTransitionStatus:rf,useFormState:vm,useActionState:vm,useOptimistic:function(t,n){var a=cn();return zt!==null?lm(a,zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:Um},tr=null,ho=0;function Fl(t){var n=ho;return ho+=1,tr===null&&(tr=[]),Yp(tr,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Bl(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bm(t){var n=t._init;return n(t._payload)}function zm(t){function n(Y,X){if(t){var $=Y.deletions;$===null?(Y.deletions=[X],Y.flags|=16):$.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function o(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=Ji(Y,X),Y.index=0,Y.sibling=null,Y}function d(Y,X,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<X?(Y.flags|=67108866,X):$):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function b(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function w(Y,X,$,xe){return X===null||X.tag!==6?(X=wu($,Y.mode,xe),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function z(Y,X,$,xe){var ke=$.type;return ke===T?ve(Y,X,$.props.children,xe,$.key):X!==null&&(X.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===A&&Bm(ke)===X.type)?(X=u(X,$.props),po(X,$),X.return=Y,X):(X=Sl($.type,$.key,$.props,null,Y.mode,xe),po(X,$),X.return=Y,X)}function ne(Y,X,$,xe){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Ru($,Y.mode,xe),X.return=Y,X):(X=u(X,$.children||[]),X.return=Y,X)}function ve(Y,X,$,xe,ke){return X===null||X.tag!==7?(X=rs($,Y.mode,xe,ke),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function ye(Y,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=wu(""+X,Y.mode,$),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case _:return $=Sl(X.type,X.key,X.props,null,Y.mode,$),po($,X),$.return=Y,$;case E:return X=Ru(X,Y.mode,$),X.return=Y,X;case A:var xe=X._init;return X=xe(X._payload),ye(Y,X,$)}if(Q(X)||te(X))return X=rs(X,Y.mode,$,null),X.return=Y,X;if(typeof X.then=="function")return ye(Y,Fl(X),$);if(X.$$typeof===P)return ye(Y,El(Y,X),$);Bl(Y,X)}return null}function re(Y,X,$,xe){var ke=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ke!==null?null:w(Y,X,""+$,xe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case _:return $.key===ke?z(Y,X,$,xe):null;case E:return $.key===ke?ne(Y,X,$,xe):null;case A:return ke=$._init,$=ke($._payload),re(Y,X,$,xe)}if(Q($)||te($))return ke!==null?null:ve(Y,X,$,xe,null);if(typeof $.then=="function")return re(Y,X,Fl($),xe);if($.$$typeof===P)return re(Y,X,El(Y,$),xe);Bl(Y,$)}return null}function ce(Y,X,$,xe,ke){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Y=Y.get($)||null,w(X,Y,""+xe,ke);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case _:return Y=Y.get(xe.key===null?$:xe.key)||null,z(X,Y,xe,ke);case E:return Y=Y.get(xe.key===null?$:xe.key)||null,ne(X,Y,xe,ke);case A:var mt=xe._init;return xe=mt(xe._payload),ce(Y,X,$,xe,ke)}if(Q(xe)||te(xe))return Y=Y.get($)||null,ve(X,Y,xe,ke,null);if(typeof xe.then=="function")return ce(Y,X,$,Fl(xe),ke);if(xe.$$typeof===P)return ce(Y,X,$,El(X,xe),ke);Bl(X,xe)}return null}function it(Y,X,$,xe){for(var ke=null,mt=null,Ze=X,tt=X=0,Mn=null;Ze!==null&&tt<$.length;tt++){Ze.index>tt?(Mn=Ze,Ze=null):Mn=Ze.sibling;var wt=re(Y,Ze,$[tt],xe);if(wt===null){Ze===null&&(Ze=Mn);break}t&&Ze&&wt.alternate===null&&n(Y,Ze),X=d(wt,X,tt),mt===null?ke=wt:mt.sibling=wt,mt=wt,Ze=Mn}if(tt===$.length)return a(Y,Ze),Ut&&ls(Y,tt),ke;if(Ze===null){for(;tt<$.length;tt++)Ze=ye(Y,$[tt],xe),Ze!==null&&(X=d(Ze,X,tt),mt===null?ke=Ze:mt.sibling=Ze,mt=Ze);return Ut&&ls(Y,tt),ke}for(Ze=o(Ze);tt<$.length;tt++)Mn=ce(Ze,Y,tt,$[tt],xe),Mn!==null&&(t&&Mn.alternate!==null&&Ze.delete(Mn.key===null?tt:Mn.key),X=d(Mn,X,tt),mt===null?ke=Mn:mt.sibling=Mn,mt=Mn);return t&&Ze.forEach(function(Xa){return n(Y,Xa)}),Ut&&ls(Y,tt),ke}function et(Y,X,$,xe){if($==null)throw Error(s(151));for(var ke=null,mt=null,Ze=X,tt=X=0,Mn=null,wt=$.next();Ze!==null&&!wt.done;tt++,wt=$.next()){Ze.index>tt?(Mn=Ze,Ze=null):Mn=Ze.sibling;var Xa=re(Y,Ze,wt.value,xe);if(Xa===null){Ze===null&&(Ze=Mn);break}t&&Ze&&Xa.alternate===null&&n(Y,Ze),X=d(Xa,X,tt),mt===null?ke=Xa:mt.sibling=Xa,mt=Xa,Ze=Mn}if(wt.done)return a(Y,Ze),Ut&&ls(Y,tt),ke;if(Ze===null){for(;!wt.done;tt++,wt=$.next())wt=ye(Y,wt.value,xe),wt!==null&&(X=d(wt,X,tt),mt===null?ke=wt:mt.sibling=wt,mt=wt);return Ut&&ls(Y,tt),ke}for(Ze=o(Ze);!wt.done;tt++,wt=$.next())wt=ce(Ze,Y,tt,wt.value,xe),wt!==null&&(t&&wt.alternate!==null&&Ze.delete(wt.key===null?tt:wt.key),X=d(wt,X,tt),mt===null?ke=wt:mt.sibling=wt,mt=wt);return t&&Ze.forEach(function(jS){return n(Y,jS)}),Ut&&ls(Y,tt),ke}function Gt(Y,X,$,xe){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case _:e:{for(var ke=$.key;X!==null;){if(X.key===ke){if(ke=$.type,ke===T){if(X.tag===7){a(Y,X.sibling),xe=u(X,$.props.children),xe.return=Y,Y=xe;break e}}else if(X.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===A&&Bm(ke)===X.type){a(Y,X.sibling),xe=u(X,$.props),po(xe,$),xe.return=Y,Y=xe;break e}a(Y,X);break}else n(Y,X);X=X.sibling}$.type===T?(xe=rs($.props.children,Y.mode,xe,$.key),xe.return=Y,Y=xe):(xe=Sl($.type,$.key,$.props,null,Y.mode,xe),po(xe,$),xe.return=Y,Y=xe)}return b(Y);case E:e:{for(ke=$.key;X!==null;){if(X.key===ke)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Y,X.sibling),xe=u(X,$.children||[]),xe.return=Y,Y=xe;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}xe=Ru($,Y.mode,xe),xe.return=Y,Y=xe}return b(Y);case A:return ke=$._init,$=ke($._payload),Gt(Y,X,$,xe)}if(Q($))return it(Y,X,$,xe);if(te($)){if(ke=te($),typeof ke!="function")throw Error(s(150));return $=ke.call($),et(Y,X,$,xe)}if(typeof $.then=="function")return Gt(Y,X,Fl($),xe);if($.$$typeof===P)return Gt(Y,X,El(Y,$),xe);Bl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Y,X.sibling),xe=u(X,$),xe.return=Y,Y=xe):(a(Y,X),xe=wu($,Y.mode,xe),xe.return=Y,Y=xe),b(Y)):a(Y,X)}return function(Y,X,$,xe){try{ho=0;var ke=Gt(Y,X,$,xe);return tr=null,ke}catch(Ze){if(Ze===io||Ze===Al)throw Ze;var mt=Wn(29,Ze,null,Y.mode);return mt.lanes=xe,mt.return=Y,mt}finally{}}}var nr=zm(!0),Hm=zm(!1),si=K(null),Li=null;function Na(t){var n=t.alternate;_e(mn,mn.current&1),_e(si,t),Li===null&&(n===null||Qs.current!==null||n.memoizedState!==null)&&(Li=t)}function Gm(t){if(t.tag===22){if(_e(mn,mn.current),_e(si,t),Li===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Li=t)}}else Da()}function Da(){_e(mn,mn.current),_e(si,si.current)}function aa(t){he(si),Li===t&&(Li=null),he(mn)}var mn=K(0);function zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function lf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=wa(o);u.payload=n,a!=null&&(u.callback=a),n=Ra(t,u,o),n!==null&&(Qn(n,t,o),so(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Kn(),u=wa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ra(t,u,o),n!==null&&(Qn(n,t,o),so(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),o=wa(a);o.tag=2,n!=null&&(o.callback=n),n=Ra(t,o,a),n!==null&&(Qn(n,t,a),so(n,t,a))}};function Vm(t,n,a,o,u,d,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!Zr(a,o)||!Zr(u,d):!0}function jm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&cf.enqueueReplaceState(n,n.state,null)}function ms(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function km(t){Hl(t)}function Xm(t){console.error(t)}function Wm(t){Hl(t)}function Gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function qm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(t,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(t,n)},a}function Ym(t){return t=wa(t),t.tag=3,t}function Zm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){qm(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){qm(n,a,o),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function j_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Li===null?Of():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),If(t,o,u)),!1;case 22:return a.flags|=65536,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),If(t,o,u)),!1}throw Error(s(435,a.tag))}return If(t,o,u),Of(),!1}if(Ut)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Du&&(t=Error(s(422),{cause:o}),$r(ti(t,a)))):(o!==Du&&(n=Error(s(423),{cause:o}),$r(ti(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ti(o,a),u=uf(t.stateNode,o,u),Gu(t,u),$t!==4&&($t=2)),!1;var d=Error(s(520),{cause:o});if(d=ti(d,a),yo===null?yo=[d]:yo.push(d),$t!==4&&($t=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=uf(a.stateNode,o,t),Gu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Fa===null||!Fa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ym(u),Zm(u,t,a,o),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var Km=Error(s(461)),Sn=!1;function En(t,n,a,o){n.child=t===null?Hm(n,null,a,o):nr(n,t.child,a,o)}function Qm(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var b={};for(var w in o)w!=="ref"&&(b[w]=o[w])}else b=o;return ds(n),o=Wu(t,n,a,b,d,u),w=qu(),t!==null&&!Sn?(Yu(t,n,u),sa(t,n,u)):(Ut&&w&&Cu(n),n.flags|=1,En(t,n,o,u),n.child)}function Jm(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Au(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,$m(t,n,d,o,u)):(t=Sl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!xf(t,u)){var b=d.memoizedProps;if(a=a.compare,a=a!==null?a:Zr,a(b,o)&&t.ref===n.ref)return sa(t,n,u)}return n.flags|=1,t=Ji(d,o),t.ref=n.ref,t.return=n,n.child=t}function $m(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(Zr(d,o)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=o=d,xf(t,u))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,sa(t,n,u)}return ff(t,n,a,o,u)}function eg(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return tg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Tl(n,d!==null?d.cachePool:null),d!==null?$p(n,d):ju(),Gm(n);else return n.lanes=n.childLanes=536870912,tg(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Tl(n,d.cachePool),$p(n,d),Da(),n.memoizedState=null):(t!==null&&Tl(n,null),ju(),Da());return En(t,n,u,a),n.child}function tg(t,n,a,o){var u=Fu();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Tl(n,null),ju(),Gm(n),t!==null&&eo(t,n,o,!0),null}function Vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ff(t,n,a,o,u){return ds(n),a=Wu(t,n,a,o,void 0,u),o=qu(),t!==null&&!Sn?(Yu(t,n,u),sa(t,n,u)):(Ut&&o&&Cu(n),n.flags|=1,En(t,n,a,u),n.child)}function ng(t,n,a,o,u,d){return ds(n),n.updateQueue=null,a=tm(n,o,a,u),em(t),o=qu(),t!==null&&!Sn?(Yu(t,n,d),sa(t,n,d)):(Ut&&o&&Cu(n),n.flags|=1,En(t,n,a,d),n.child)}function ig(t,n,a,o,u){if(ds(n),n.stateNode===null){var d=Ws,b=a.contextType;typeof b=="object"&&b!==null&&(d=Rn(b)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},zu(n),b=a.contextType,d.context=typeof b=="object"&&b!==null?Rn(b):Ws,d.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(lf(n,a,b,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&cf.enqueueReplaceState(d,d.state,null),oo(n,o,d,u),ro(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,z=ms(a,w);d.props=z;var ne=d.context,ve=a.contextType;b=Ws,typeof ve=="object"&&ve!==null&&(b=Rn(ve));var ye=a.getDerivedStateFromProps;ve=typeof ye=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ve||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||ne!==b)&&jm(n,d,o,b),Aa=!1;var re=n.memoizedState;d.state=re,oo(n,o,d,u),ro(),ne=n.memoizedState,w||re!==ne||Aa?(typeof ye=="function"&&(lf(n,a,ye,o),ne=n.memoizedState),(z=Aa||Vm(n,a,z,o,re,ne,b))?(ve||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=b,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Hu(t,n),b=n.memoizedProps,ve=ms(a,b),d.props=ve,ye=n.pendingProps,re=d.context,ne=a.contextType,z=Ws,typeof ne=="object"&&ne!==null&&(z=Rn(ne)),w=a.getDerivedStateFromProps,(ne=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==ye||re!==z)&&jm(n,d,o,z),Aa=!1,re=n.memoizedState,d.state=re,oo(n,o,d,u),ro();var ce=n.memoizedState;b!==ye||re!==ce||Aa||t!==null&&t.dependencies!==null&&bl(t.dependencies)?(typeof w=="function"&&(lf(n,a,w,o),ce=n.memoizedState),(ve=Aa||Vm(n,a,ve,o,re,ce,z)||t!==null&&t.dependencies!==null&&bl(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=z,o=ve):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Vl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=nr(n,t.child,null,u),n.child=nr(n,null,a,u)):En(t,n,a,u),n.memoizedState=d.state,t=n.child):t=sa(t,n,u),t}function ag(t,n,a,o){return Jr(),n.flags|=256,En(t,n,a,o),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(t){return{baseLanes:t,cachePool:Xp()}}function pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function sg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ut){if(u?Na(n):Da(),Ut){var w=Jt,z;if(z=w){e:{for(z=w,w=Ui;z.nodeType!==8;){if(!w){w=null;break e}if(z=xi(z.nextSibling),z===null){w=null;break e}}w=z}w!==null?(n.memoizedState={dehydrated:w,treeContext:os!==null?{id:$i,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},z=Wn(18,null,null,0),z.stateNode=w,z.return=n,n.child=z,Un=n,Jt=null,z=!0):z=!1}z||us(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Qf(w)?n.lanes=32:n.lanes=536870912,null;aa(n)}return w=o.children,o=o.fallback,u?(Da(),u=n.mode,w=jl({mode:"hidden",children:w},u),o=rs(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,u=n.child,u.memoizedState=hf(a),u.childLanes=pf(t,b,a),n.memoizedState=df,o):(Na(n),mf(n,w))}if(z=t.memoizedState,z!==null&&(w=z.dehydrated,w!==null)){if(d)n.flags&256?(Na(n),n.flags&=-257,n=gf(t,n,a)):n.memoizedState!==null?(Da(),n.child=t.child,n.flags|=128,n=null):(Da(),u=o.fallback,w=n.mode,o=jl({mode:"visible",children:o.children},w),u=rs(u,w,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,nr(n,t.child,null,a),o=n.child,o.memoizedState=hf(a),o.childLanes=pf(t,b,a),n.memoizedState=df,n=u);else if(Na(n),Qf(w)){if(b=w.nextSibling&&w.nextSibling.dataset,b)var ne=b.dgst;b=ne,o=Error(s(419)),o.stack="",o.digest=b,$r({value:o,source:null,stack:null}),n=gf(t,n,a)}else if(Sn||eo(t,n,a,!1),b=(a&t.childLanes)!==0,Sn||b){if(b=Wt,b!==null&&(o=a&-a,o=(o&42)!==0?1:nt(o),o=(o&(b.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Xs(t,o),Qn(b,t,o),Km;w.data==="$?"||Of(),n=gf(t,n,a)}else w.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Jt=xi(w.nextSibling),Un=n,Ut=!0,cs=null,Ui=!1,t!==null&&(ii[ai++]=$i,ii[ai++]=ea,ii[ai++]=os,$i=t.id,ea=t.overflow,os=n),n=mf(n,o.children),n.flags|=4096);return n}return u?(Da(),u=o.fallback,w=n.mode,z=t.child,ne=z.sibling,o=Ji(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,ne!==null?u=Ji(ne,u):(u=rs(u,w,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,w=t.child.memoizedState,w===null?w=hf(a):(z=w.cachePool,z!==null?(ne=pn._currentValue,z=z.parent!==ne?{parent:ne,pool:ne}:z):z=Xp(),w={baseLanes:w.baseLanes|a,cachePool:z}),u.memoizedState=w,u.childLanes=pf(t,b,a),n.memoizedState=df,o):(Na(n),a=t.child,t=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=a,n.memoizedState=null,a)}function mf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function gf(t,n,a){return nr(n,t.child,null,a),t=mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function rg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Lu(t.return,n,a)}function vf(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function og(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(En(t,n,o.children,a),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,a,n);else if(t.tag===19)rg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(_e(mn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&zl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&zl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}vf(n,!0,a,null,d);break;case"together":vf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(eo(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function xf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&bl(t)))}function k_(t,n,a){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),Ta(n,pn,t.memoizedState.cache),Jr();break;case 27:case 5:Ke(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?sg(t,n,a):(Na(n),t=sa(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(eo(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return og(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,eg(t,n,a);case 24:Ta(n,pn,t.memoizedState.cache)}return sa(t,n,a)}function lg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!xf(t,a)&&(n.flags&128)===0)return Sn=!1,k_(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,Ut&&(n.flags&1048576)!==0&&Bp(n,Ml,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Au(o)?(t=ms(o,t),n.tag=1,n=ig(null,n,o,t,a)):(n.tag=0,n=ff(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===U){n.tag=11,n=Qm(null,n,o,t,a);break e}else if(u===k){n.tag=14,n=Jm(null,n,o,t,a);break e}}throw n=ue(o)||o,Error(s(306,n,""))}}return n;case 0:return ff(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ms(o,n.pendingProps),ig(t,n,o,u,a);case 3:e:{if(Se(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Hu(t,n),oo(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Ta(n,pn,o),o!==d.cache&&Ou(n,[pn],a,!0),ro(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=ag(t,n,o,a);break e}else if(o!==u){u=ti(Error(s(424)),n),$r(u),n=ag(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=xi(t.firstChild),Un=n,Ut=!0,cs=null,Ui=!0,a=Hm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Jr(),o===u){n=sa(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return Vl(t,n),t===null?(a=d0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ut||(a=n.type,t=n.pendingProps,o=ic(ee.current).createElement(a),o[hn]=n,o[_n]=t,An(o,a,t),tn(o),n.stateNode=o):n.memoizedState=d0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&Ut&&(o=n.stateNode=c0(n.type,n.pendingProps,ee.current),Un=n,Ui=!0,u=Jt,Ha(n.type)?(Jf=u,Jt=xi(o.firstChild)):Jt=u),En(t,n,n.pendingProps.children,a),Vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ut&&((u=o=Jt)&&(o=xS(o,n.type,n.pendingProps,Ui),o!==null?(n.stateNode=o,Un=n,Jt=xi(o.firstChild),Ui=!1,u=!0):u=!1),u||us(n)),Ke(n),u=n.type,d=n.pendingProps,b=t!==null?t.memoizedProps:null,o=d.children,Yf(u,d)?o=null:b!==null&&Yf(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(t,n,I_,null,null,a),No._currentValue=u),Vl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&Ut&&((t=a=Jt)&&(a=_S(a,n.pendingProps,Ui),a!==null?(n.stateNode=a,Un=n,Jt=null,t=!0):t=!1),t||us(n)),null;case 13:return sg(t,n,a);case 4:return Se(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=nr(n,null,o,a):En(t,n,o,a),n.child;case 11:return Qm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ds(n),u=Rn(u),o=o(u),n.flags|=1,En(t,n,o,a),n.child;case 14:return Jm(t,n,n.type,n.pendingProps,a);case 15:return $m(t,n,n.type,n.pendingProps,a);case 19:return og(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=jl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ji(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return eg(t,n,a);case 24:return ds(n),o=Rn(pn),t===null?(u=Fu(),u===null&&(u=Wt,d=Pu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},zu(n),Ta(n,pn,u)):((t.lanes&a)!==0&&(Hu(t,n),oo(n,null,null,a),ro()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ta(n,pn,o)):(o=d.cache,Ta(n,pn,o),o!==u.cache&&Ou(n,[pn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(t){t.flags|=4}function cg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!v0(n)){if(n=si.current,n!==null&&((Et&4194048)===Et?Li!==null:(Et&62914560)!==Et&&(Et&536870912)===0||n!==Li))throw ao=Bu,Wp;t.flags|=8192}}function kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ce():536870912,t.lanes|=n,rr|=n)}function mo(t,n){if(!Ut)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function X_(t,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(pn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gp())),Qt(n),null;case 26:return a=n.memoizedState,t===null?(ra(n),a!==null?(Qt(n),cg(n,a)):(Qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ra(n),Qt(n),cg(n,a)):(Qt(n),n.flags&=-16777217):(t.memoizedProps!==o&&ra(n),Qt(n),n.flags&=-16777217),null;case 27:$e(n),a=ee.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}t=Ue.current,Qr(n)?zp(n):(t=c0(u,o,a),n.stateNode=t,ra(n))}return Qt(n),null;case 5:if($e(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(t=Ue.current,Qr(n))zp(n);else{switch(u=ic(ee.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[hn]=n,t[_n]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(An(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ra(n)}}return Qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ee.current,Qr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[hn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||n0(t.nodeValue,a)),t||us(n)}else t=ic(t).createTextNode(o),t[hn]=n,n.stateNode=t}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[hn]=n}else Jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Gp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(aa(n),n):(aa(n),null)}if(aa(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),Qt(n),null;case 4:return Je(),t===null&&jf(n.stateNode.containerInfo),Qt(n),null;case 10:return na(n.type),Qt(n),null;case 19:if(he(mn),u=n.memoizedState,u===null)return Qt(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)mo(u,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=zl(t),d!==null){for(n.flags|=128,mo(u,!1),t=d.updateQueue,n.updateQueue=t,kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Fp(a,t),a=a.sibling;return _e(mn,mn.current&1|2),n.child}t=t.sibling}u.tail!==null&&yt()>ql&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304)}else{if(!o)if(t=zl(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,kl(n,t),mo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ut)return Qt(n),null}else 2*yt()-u.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=yt(),n.sibling=null,t=mn.current,_e(mn,o?t&1|2:t&1),n):(Qt(n),null);case 22:case 23:return aa(n),ku(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&he(hs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(pn),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function W_(t,n){switch(Nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return na(pn),Je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 13:if(aa(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Jr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return he(mn),null;case 4:return Je(),null;case 10:return na(n.type),null;case 22:case 23:return aa(n),ku(),t!==null&&he(hs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return na(pn),null;case 25:return null;default:return null}}function ug(t,n){switch(Nu(n),n.tag){case 3:na(pn),Je();break;case 26:case 27:case 5:$e(n);break;case 4:Je();break;case 13:aa(n);break;case 19:he(mn);break;case 10:na(n.type);break;case 22:case 23:aa(n),ku(),t!==null&&he(hs);break;case 24:na(pn)}}function go(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,b=a.inst;o=d(),b.destroy=o}a=a.next}while(a!==u)}}catch(w){jt(n,n.return,w)}}function Ua(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var b=o.inst,w=b.destroy;if(w!==void 0){b.destroy=void 0,u=n;var z=a,ne=w;try{ne()}catch(ve){jt(u,z,ve)}}}o=o.next}while(o!==d)}}catch(ve){jt(n,n.return,ve)}}function fg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Jp(n,a)}catch(o){jt(t,t.return,o)}}}function dg(t,n,a){a.props=ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){jt(t,n,o)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){jt(t,n,u)}}function Oi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){jt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){jt(t,n,u)}else a.current=null}function hg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){jt(t,t.return,u)}}function _f(t,n,a){try{var o=t.stateNode;hS(o,t.type,a,n),o[_n]=n}catch(u){jt(t,t.return,u)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ha(t.type)||t.tag===4}function Sf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=nc));else if(o!==4&&(o===27&&Ha(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(yf(t,n,a),t=t.sibling;t!==null;)yf(t,n,a),t=t.sibling}function Xl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ha(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xl(t,n,a),t=t.sibling;t!==null;)Xl(t,n,a),t=t.sibling}function mg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[hn]=t,n[_n]=a}catch(d){jt(t,t.return,d)}}var oa=!1,rn=!1,Mf=!1,gg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function q_(t,n){if(t=t.containerInfo,Wf=cc,t=wp(t),_u(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var b=0,w=-1,z=-1,ne=0,ve=0,ye=t,re=null;t:for(;;){for(var ce;ye!==a||u!==0&&ye.nodeType!==3||(w=b+u),ye!==d||o!==0&&ye.nodeType!==3||(z=b+o),ye.nodeType===3&&(b+=ye.nodeValue.length),(ce=ye.firstChild)!==null;)re=ye,ye=ce;for(;;){if(ye===t)break t;if(re===a&&++ne===u&&(w=b),re===d&&++ve===o&&(z=b),(ce=ye.nextSibling)!==null)break;ye=re,re=ye.parentNode}ye=ce}a=w===-1||z===-1?null:{start:w,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:t,selectionRange:a},cc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var it=ms(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(it,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){jt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function vg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:La(t,a),o&4&&go(5,a);break;case 1:if(La(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(b){jt(a,a.return,b)}else{var u=ms(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){jt(a,a.return,b)}}o&64&&fg(a),o&512&&vo(a,a.return);break;case 3:if(La(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Jp(t,n)}catch(b){jt(a,a.return,b)}}break;case 27:n===null&&o&4&&mg(a);case 26:case 5:La(t,a),n===null&&o&4&&hg(a),o&512&&vo(a,a.return);break;case 12:La(t,a);break;case 13:La(t,a),o&4&&Sg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=nS.bind(null,a),SS(t,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||rn,u=oa;var d=rn;oa=o,(rn=n)&&!d?Oa(t,a,(a.subtreeFlags&8772)!==0):La(t,a),oa=u,rn=d}break;case 30:break;default:La(t,a)}}function xg(t){var n=t.alternate;n!==null&&(t.alternate=null,xg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Bs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Hn=!1;function la(t,n,a){for(a=a.child;a!==null;)_g(t,n,a),a=a.sibling}function _g(t,n,a){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(Z,a)}catch{}switch(a.tag){case 26:rn||Oi(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Oi(a,n);var o=Zt,u=Hn;Ha(a.type)&&(Zt=a.stateNode,Hn=!1),la(t,n,a),Ao(a.stateNode),Zt=o,Hn=u;break;case 5:rn||Oi(a,n);case 6:if(o=Zt,u=Hn,Zt=null,la(t,n,a),Zt=o,Hn=u,Zt!==null)if(Hn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(d){jt(a,n,d)}else try{Zt.removeChild(a.stateNode)}catch(d){jt(a,n,d)}break;case 18:Zt!==null&&(Hn?(t=Zt,o0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Oo(t)):o0(Zt,a.stateNode));break;case 4:o=Zt,u=Hn,Zt=a.stateNode.containerInfo,Hn=!0,la(t,n,a),Zt=o,Hn=u;break;case 0:case 11:case 14:case 15:rn||Ua(2,a,n),rn||Ua(4,a,n),la(t,n,a);break;case 1:rn||(Oi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&dg(a,n,o)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,la(t,n,a),rn=o;break;default:la(t,n,a)}}function Sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Oo(t)}catch(a){jt(n,n.return,a)}}function Y_(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new gg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new gg),n;default:throw Error(s(435,t.tag))}}function bf(t,n){var a=Y_(t);n.forEach(function(o){var u=iS.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,b=n,w=b;e:for(;w!==null;){switch(w.tag){case 27:if(Ha(w.type)){Zt=w.stateNode,Hn=!1;break e}break;case 5:Zt=w.stateNode,Hn=!1;break e;case 3:case 4:Zt=w.stateNode.containerInfo,Hn=!0;break e}w=w.return}if(Zt===null)throw Error(s(160));_g(d,b,u),Zt=null,Hn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)yg(n,t),n=n.sibling}var vi=null;function yg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),o&4&&(Ua(3,t,t.return),go(3,t),Ua(5,t,t.return));break;case 1:qn(n,t),Yn(t),o&512&&(rn||a===null||Oi(a,a.return)),o&64&&oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(qn(n,t),Yn(t),o&512&&(rn||a===null||Oi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ma]||d[hn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),An(d,o,a),d[hn]=t,tn(d),o=d;break e;case"link":var b=m0("link","href",u).get(o+(a.href||""));if(b){for(var w=0;w<b.length;w++)if(d=b[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(w,1);break t}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;case"meta":if(b=m0("meta","content",u).get(o+(a.content||""))){for(w=0;w<b.length;w++)if(d=b[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(w,1);break t}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[hn]=t,tn(d),o=d}t.stateNode=o}else g0(u,t.type,t.stateNode);else t.stateNode=p0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?g0(u,t.type,t.stateNode):p0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&_f(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),o&512&&(rn||a===null||Oi(a,a.return)),a!==null&&o&4&&_f(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),o&512&&(rn||a===null||Oi(a,a.return)),t.flags&32){u=t.stateNode;try{Yt(u,"")}catch(ce){jt(t,t.return,ce)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,_f(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Mf=!0);break;case 6:if(qn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ce){jt(t,t.return,ce)}}break;case 3:if(rc=null,u=vi,vi=ac(n.containerInfo),qn(n,t),vi=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Oo(n.containerInfo)}catch(ce){jt(t,t.return,ce)}Mf&&(Mf=!1,Mg(t));break;case 4:o=vi,vi=ac(t.stateNode.containerInfo),qn(n,t),Yn(t),vi=o;break;case 12:qn(n,t),Yn(t);break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cf=yt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,bf(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,ne=oa,ve=rn;if(oa=ne||u,rn=ve||z,qn(n,t),rn=ve,oa=ne,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||oa||rn||gs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,u)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{w=z.stateNode;var ye=z.memoizedProps.style,re=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;w.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(ce){jt(z,z.return,ce)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(ce){jt(z,z.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,bf(t,a))));break;case 19:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,bf(t,o)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(pg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Sf(t);Xl(t,d,u);break;case 5:var b=a.stateNode;a.flags&32&&(Yt(b,""),a.flags&=-33);var w=Sf(t);Xl(t,w,b);break;case 3:case 4:var z=a.stateNode.containerInfo,ne=Sf(t);yf(t,ne,z);break;default:throw Error(s(161))}}catch(ve){jt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function La(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vg(t,n.alternate,n),n=n.sibling}function gs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),gs(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&dg(n,n.return,a),gs(n);break;case 27:Ao(n.stateNode);case 26:case 5:Oi(n,n.return),gs(n);break;case 22:n.memoizedState===null&&gs(n);break;case 30:gs(n);break;default:gs(n)}t=t.sibling}}function Oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:Oa(u,d,a),go(4,d);break;case 1:if(Oa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){jt(o,o.return,ne)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Qp(z[u],w)}catch(ne){jt(o,o.return,ne)}}a&&b&64&&fg(d),vo(d,d.return);break;case 27:mg(d);case 26:case 5:Oa(u,d,a),a&&o===null&&b&4&&hg(d),vo(d,d.return);break;case 12:Oa(u,d,a);break;case 13:Oa(u,d,a),a&&b&4&&Sg(u,d);break;case 22:d.memoizedState===null&&Oa(u,d,a),vo(d,d.return);break;case 30:break;default:Oa(u,d,a)}n=n.sibling}}function Ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Pi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bg(t,n,a,o),n=n.sibling}function bg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(t,n,a,o),u&2048&&go(9,n);break;case 1:Pi(t,n,a,o);break;case 3:Pi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){Pi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,b=d.id,w=d.onPostCommit;typeof w=="function"&&w(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){jt(n,n.return,z)}}else Pi(t,n,a,o);break;case 13:Pi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?Pi(t,n,a,o):xo(t,n):d._visibility&2?Pi(t,n,a,o):(d._visibility|=2,ir(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Ef(b,n);break;case 24:Pi(t,n,a,o),u&2048&&Tf(n.alternate,n);break;default:Pi(t,n,a,o)}}function ir(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,b=n,w=a,z=o,ne=b.flags;switch(b.tag){case 0:case 11:case 15:ir(d,b,w,z,u),go(8,b);break;case 23:break;case 22:var ve=b.stateNode;b.memoizedState!==null?ve._visibility&2?ir(d,b,w,z,u):xo(d,b):(ve._visibility|=2,ir(d,b,w,z,u)),u&&ne&2048&&Ef(b.alternate,b);break;case 24:ir(d,b,w,z,u),u&&ne&2048&&Tf(b.alternate,b);break;default:ir(d,b,w,z,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:xo(a,o),u&2048&&Ef(o.alternate,o);break;case 24:xo(a,o),u&2048&&Tf(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var _o=8192;function ar(t){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)Eg(t),t=t.sibling}function Eg(t){switch(t.tag){case 26:ar(t),t.flags&_o&&t.memoizedState!==null&&LS(vi,t.memoizedState,t.memoizedProps);break;case 5:ar(t);break;case 3:case 4:var n=vi;vi=ac(t.stateNode.containerInfo),ar(t),vi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=_o,_o=16777216,ar(t),_o=n):ar(t));break;default:ar(t)}}function Tg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function So(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,wg(o,t)}Tg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ag(t),t=t.sibling}function Ag(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Wl(t)):So(t);break;default:So(t)}}function Wl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,wg(o,t)}Tg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}t=t.sibling}}function wg(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=t;yn!==null;){o=yn;var u=o.sibling,d=o.return;if(xg(o),o===a){yn=null;break e}if(u!==null){u.return=d,yn=u;break e}yn=d}}}var Z_={getCacheForType:function(t){var n=Rn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},K_=typeof WeakMap=="function"?WeakMap:Map,It=0,Wt=null,gt=null,Et=0,Ft=0,Zn=null,Pa=!1,sr=!1,Af=!1,ca=0,$t=0,Ia=0,vs=0,wf=0,ri=0,rr=0,yo=null,Gn=null,Rf=!1,Cf=0,ql=1/0,Yl=null,Fa=null,Tn=0,Ba=null,or=null,lr=0,Nf=0,Df=null,Rg=null,Mo=0,Uf=null;function Kn(){if((It&2)!==0&&Et!==0)return Et&-Et;if(I.T!==null){var t=Zs;return t!==0?t:zf()}return At()}function Cg(){ri===0&&(ri=(Et&536870912)===0||Ut?W():536870912);var t=si.current;return t!==null&&(t.flags|=32),ri}function Qn(t,n,a){(t===Wt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(cr(t,0),za(t,Et,ri,!1)),Ie(t,a),((It&2)===0||t!==Wt)&&(t===Wt&&((It&2)===0&&(vs|=a),$t===4&&za(t,Et,ri,!1)),Ii(t))}function Ng(t,n,a){if((It&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=o?$_(t,n):Pf(t,n,!0),d=o;do{if(u===0){sr&&!o&&za(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Q_(a)){u=Pf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var w=t;u=yo;var z=w.current.memoizedState.isDehydrated;if(z&&(cr(w,b).flags|=256),b=Pf(w,b,!1),b!==2){if(Af&&!z){w.errorRecoveryDisabledLanes|=d,vs|=d,u=4;break e}d=Gn,Gn=u,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}u=b}if(d=!1,u!==2)continue}}if(u===1){cr(t,0),za(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:za(o,n,ri,!Pa);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Cf+300-yt(),10<u)){if(za(o,n,ri,!Pa),He(o,0,!0)!==0)break e;o.timeoutHandle=s0(Dg.bind(null,o,a,Gn,Yl,Rf,n,ri,vs,rr,Pa,d,2,-0,0),u);break e}Dg(o,a,Gn,Yl,Rf,n,ri,vs,rr,Pa,d,0,-0,0)}}break}while(!0);Ii(t)}function Dg(t,n,a,o,u,d,b,w,z,ne,ve,ye,re,ce){if(t.timeoutHandle=-1,ye=n.subtreeFlags,(ye&8192||(ye&16785408)===16785408)&&(Co={stylesheets:null,count:0,unsuspend:US},Eg(n),ye=OS(),ye!==null)){t.cancelPendingCommit=ye(Bg.bind(null,t,n,d,a,o,u,b,w,z,ve,1,re,ce)),za(t,d,b,!ne);return}Bg(t,n,d,a,o,u,b,w,z)}function Q_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Xn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(t,n,a,o){n&=~wf,n&=~vs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-we(u),b=1<<d;o[d]=-1,u&=~b}a!==0&&me(t,a,n)}function Zl(){return(It&6)===0?(bo(0),!1):!0}function Lf(){if(gt!==null){if(Ft===0)var t=gt.return;else t=gt,ta=fs=null,Zu(t),tr=null,ho=0,t=gt;for(;t!==null;)ug(t.alternate,t),t=t.return;gt=null}}function cr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,mS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Lf(),Wt=t,gt=a=Ji(t.current,null),Et=n,Ft=0,Zn=null,Pa=!1,sr=Pe(t,n),Af=!1,rr=ri=wf=vs=Ia=$t=0,Gn=yo=null,Rf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-we(o),d=1<<u;n|=t[u],o&=~d}return ca=n,vl(),a}function Ug(t,n){pt=null,I.H=Il,n===io||n===Al?(n=Zp(),Ft=3):n===Wp?(n=Zp(),Ft=4):Ft=n===Km?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,gt===null&&($t=1,Gl(t,ti(n,t.current)))}function Lg(){var t=I.H;return I.H=Il,t===null?Il:t}function Og(){var t=I.A;return I.A=Z_,t}function Of(){$t=4,Pa||(Et&4194048)!==Et&&si.current!==null||(sr=!0),(Ia&134217727)===0&&(vs&134217727)===0||Wt===null||za(Wt,Et,ri,!1)}function Pf(t,n,a){var o=It;It|=2;var u=Lg(),d=Og();(Wt!==t||Et!==n)&&(Yl=null,cr(t,n)),n=!1;var b=$t;e:do try{if(Ft!==0&&gt!==null){var w=gt,z=Zn;switch(Ft){case 8:Lf(),b=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var ne=Ft;if(Ft=0,Zn=null,ur(t,w,z,ne),a&&sr){b=0;break e}break;default:ne=Ft,Ft=0,Zn=null,ur(t,w,z,ne)}}J_(),b=$t;break}catch(ve){Ug(t,ve)}while(!0);return n&&t.shellSuspendCounter++,ta=fs=null,It=o,I.H=u,I.A=d,gt===null&&(Wt=null,Et=0,vl()),b}function J_(){for(;gt!==null;)Pg(gt)}function $_(t,n){var a=It;It|=2;var o=Lg(),u=Og();Wt!==t||Et!==n?(Yl=null,ql=yt()+500,cr(t,n)):sr=Pe(t,n);e:do try{if(Ft!==0&&gt!==null){n=gt;var d=Zn;t:switch(Ft){case 1:Ft=0,Zn=null,ur(t,n,d,1);break;case 2:case 9:if(qp(d)){Ft=0,Zn=null,Ig(n);break}n=function(){Ft!==2&&Ft!==9||Wt!==t||(Ft=7),Ii(t)},d.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:qp(d)?(Ft=0,Zn=null,Ig(n)):(Ft=0,Zn=null,ur(t,n,d,7));break;case 5:var b=null;switch(gt.tag){case 26:b=gt.memoizedState;case 5:case 27:var w=gt;if(!b||v0(b)){Ft=0,Zn=null;var z=w.sibling;if(z!==null)gt=z;else{var ne=w.return;ne!==null?(gt=ne,Kl(ne)):gt=null}break t}}Ft=0,Zn=null,ur(t,n,d,5);break;case 6:Ft=0,Zn=null,ur(t,n,d,6);break;case 8:Lf(),$t=6;break e;default:throw Error(s(462))}}eS();break}catch(ve){Ug(t,ve)}while(!0);return ta=fs=null,I.H=o,I.A=u,It=a,gt!==null?0:(Wt=null,Et=0,vl(),$t)}function eS(){for(;gt!==null&&!Ct();)Pg(gt)}function Pg(t){var n=lg(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?Kl(t):gt=n}function Ig(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ng(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=ng(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:Zu(n);default:ug(a,n),n=gt=Fp(n,ca),n=lg(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?Kl(t):gt=n}function ur(t,n,a,o){ta=fs=null,Zu(n),tr=null,ho=0;var u=n.return;try{if(j_(t,u,n,a,Et)){$t=1,Gl(t,ti(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;$t=1,Gl(t,ti(a,t.current)),gt=null;return}n.flags&32768?(Ut||o===1?t=!0:sr||(Et&536870912)!==0?t=!1:(Pa=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Fg(n,t)):Kl(n)}function Kl(t){var n=t;do{if((n.flags&32768)!==0){Fg(n,Pa);return}t=n.return;var a=X_(n.alternate,n,ca);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);$t===0&&($t=5)}function Fg(t,n){do{var a=W_(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);$t=6,gt=null}function Bg(t,n,a,o,u,d,b,w,z){t.cancelPendingCommit=null;do Ql();while(Tn!==0);if((It&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Eu,Ee(t,a,d,b,w,z),t===Wt&&(gt=Wt=null,Et=0),or=n,Ba=t,lr=a,Nf=d,Df=u,Rg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,aS(bt,function(){return jg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=H.p,H.p=2,b=It,It|=4;try{q_(t,n,a)}finally{It=b,H.p=u,I.T=o}}Tn=1,zg(),Hg(),Gg()}}function zg(){if(Tn===1){Tn=0;var t=Ba,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=It;It|=4;try{yg(n,t);var d=qf,b=wp(t.containerInfo),w=d.focusedElem,z=d.selectionRange;if(b!==w&&w&&w.ownerDocument&&Ap(w.ownerDocument.documentElement,w)){if(z!==null&&_u(w)){var ne=z.start,ve=z.end;if(ve===void 0&&(ve=ne),"selectionStart"in w)w.selectionStart=ne,w.selectionEnd=Math.min(ve,w.value.length);else{var ye=w.ownerDocument||document,re=ye&&ye.defaultView||window;if(re.getSelection){var ce=re.getSelection(),it=w.textContent.length,et=Math.min(z.start,it),Gt=z.end===void 0?et:Math.min(z.end,it);!ce.extend&&et>Gt&&(b=Gt,Gt=et,et=b);var Y=Tp(w,et),X=Tp(w,Gt);if(Y&&X&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var $=ye.createRange();$.setStart(Y.node,Y.offset),ce.removeAllRanges(),et>Gt?(ce.addRange($),ce.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ce.addRange($))}}}}for(ye=[],ce=w;ce=ce.parentNode;)ce.nodeType===1&&ye.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ye.length;w++){var xe=ye[w];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}cc=!!Wf,qf=Wf=null}finally{It=u,H.p=o,I.T=a}}t.current=n,Tn=2}}function Hg(){if(Tn===2){Tn=0;var t=Ba,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=It;It|=4;try{vg(t,n.alternate,n)}finally{It=u,H.p=o,I.T=a}}Tn=3}}function Gg(){if(Tn===4||Tn===3){Tn=0,rt();var t=Ba,n=or,a=lr,o=Rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,or=Ba=null,Vg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Fa=null),Ot(a),n=n.stateNode,le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(Z,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=H.p,H.p=2,I.T=null;try{for(var d=t.onRecoverableError,b=0;b<o.length;b++){var w=o[b];d(w.value,{componentStack:w.stack})}}finally{I.T=n,H.p=u}}(lr&3)!==0&&Ql(),Ii(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Uf?Mo++:(Mo=0,Uf=t):Mo=0,bo(0)}}function Vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Ql(t){return zg(),Hg(),Gg(),jg()}function jg(){if(Tn!==5)return!1;var t=Ba,n=Nf;Nf=0;var a=Ot(lr),o=I.T,u=H.p;try{H.p=32>a?32:a,I.T=null,a=Df,Df=null;var d=Ba,b=lr;if(Tn=0,or=Ba=null,lr=0,(It&6)!==0)throw Error(s(331));var w=It;if(It|=4,Ag(d.current),bg(d,d.current,b,a),It=w,bo(0,!1),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(Z,d)}catch{}return!0}finally{H.p=u,I.T=o,Vg(t,n)}}function kg(t,n,a){n=ti(a,n),n=uf(t.stateNode,n,2),t=Ra(t,n,2),t!==null&&(Ie(t,2),Ii(t))}function jt(t,n,a){if(t.tag===3)kg(t,t,a);else for(;n!==null;){if(n.tag===3){kg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fa===null||!Fa.has(o))){t=ti(a,t),a=Ym(2),o=Ra(n,a,2),o!==null&&(Zm(a,o,n,t),Ie(o,2),Ii(o));break}}n=n.return}}function If(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new K_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),t=tS.bind(null,t,n,a),n.then(t,t))}function tS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(Et&a)===a&&($t===4||$t===3&&(Et&62914560)===Et&&300>yt()-Cf?(It&2)===0&&cr(t,0):wf|=a,rr===Et&&(rr=0)),Ii(t)}function Xg(t,n){n===0&&(n=Ce()),t=Xs(t,n),t!==null&&(Ie(t,n),Ii(t))}function nS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Xg(t,a)}function iS(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Xg(t,a)}function aS(t,n){return ht(t,n)}var Jl=null,fr=null,Ff=!1,$l=!1,Bf=!1,xs=0;function Ii(t){t!==fr&&t.next===null&&(fr===null?Jl=fr=t:fr=fr.next=t),$l=!0,Ff||(Ff=!0,rS())}function bo(t,n){if(!Bf&&$l){Bf=!0;do for(var a=!1,o=Jl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var b=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-we(42|t)+1)-1,d&=u&~(b&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Zg(o,d))}else d=Et,d=He(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Pe(o,d)||(a=!0,Zg(o,d));o=o.next}while(a);Bf=!1}}function sS(){Wg()}function Wg(){$l=Ff=!1;var t=0;xs!==0&&(pS()&&(t=xs),xs=0);for(var n=yt(),a=null,o=Jl;o!==null;){var u=o.next,d=qg(o,n);d===0?(o.next=null,a===null?Jl=u:a.next=u,u===null&&(fr=a)):(a=o,(t!==0||(d&3)!==0)&&($l=!0)),o=u}bo(t)}function qg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var b=31-we(d),w=1<<b,z=u[b];z===-1?((w&a)===0||(w&o)!==0)&&(u[b]=ct(w,n)):z<=n&&(t.expiredLanes|=w),d&=~w}if(n=Wt,a=Et,a=He(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&_t(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&_t(o),Ot(a)){case 2:case 8:a=Mt;break;case 32:a=bt;break;case 268435456:a=D;break;default:a=bt}return o=Yg.bind(null,t),a=ht(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&_t(o),t.callbackPriority=2,t.callbackNode=null,2}function Yg(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ql()&&t.callbackNode!==a)return null;var o=Et;return o=He(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ng(t,o,n),qg(t,yt()),t.callbackNode!=null&&t.callbackNode===a?Yg.bind(null,t):null)}function Zg(t,n){if(Ql())return null;Ng(t,n,!0)}function rS(){gS(function(){(It&6)!==0?ht(kt,sS):Wg()})}function zf(){return xs===0&&(xs=W()),xs}function Kg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ul(""+t)}function Qg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function oS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Kg((u[_n]||null).action),b=o.submitter;b&&(n=(n=b[_n]||null)?Kg(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var w=new pl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(xs!==0){var z=b?Qg(u,b):new FormData(u);sf(a,{pending:!0,data:z,method:u.method,action:d},null,z)}}else typeof d=="function"&&(w.preventDefault(),z=b?Qg(u,b):new FormData(u),sf(a,{pending:!0,data:z,method:u.method,action:d},d,z))},currentTarget:u}]})}}for(var Hf=0;Hf<bu.length;Hf++){var Gf=bu[Hf],lS=Gf.toLowerCase(),cS=Gf[0].toUpperCase()+Gf.slice(1);gi(lS,"on"+cS)}gi(Np,"onAnimationEnd"),gi(Dp,"onAnimationIteration"),gi(Up,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(A_,"onTransitionRun"),gi(w_,"onTransitionStart"),gi(R_,"onTransitionCancel"),gi(Lp,"onTransitionEnd"),ba("onMouseEnter",["mouseout","mouseover"]),ba("onMouseLeave",["mouseout","mouseover"]),ba("onPointerEnter",["pointerout","pointerover"]),ba("onPointerLeave",["pointerout","pointerover"]),Zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function Jg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var w=o[b],z=w.instance,ne=w.currentTarget;if(w=w.listener,z!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=ne;try{d(u)}catch(ve){Hl(ve)}u.currentTarget=null,d=z}else for(b=0;b<o.length;b++){if(w=o[b],z=w.instance,ne=w.currentTarget,w=w.listener,z!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=ne;try{d(u)}catch(ve){Hl(ve)}u.currentTarget=null,d=z}}}}function vt(t,n){var a=n[Is];a===void 0&&(a=n[Is]=new Set);var o=t+"__bubble";a.has(o)||($g(n,t,2,!1),a.add(o))}function Vf(t,n,a){var o=0;n&&(o|=4),$g(a,t,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function jf(t){if(!t[ec]){t[ec]=!0,rl.forEach(function(a){a!=="selectionchange"&&(uS.has(a)||Vf(a,!1,t),Vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ec]||(n[ec]=!0,Vf("selectionchange",!1,n))}}function $g(t,n,a,o){switch(b0(n)){case 2:var u=FS;break;case 8:u=BS;break;default:u=id}a=u.bind(null,n,a,t),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function kf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var w=o.stateNode.containerInfo;if(w===u)break;if(b===4)for(b=o.return;b!==null;){var z=b.tag;if((z===3||z===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;w!==null;){if(b=pi(w),b===null)return;if(z=b.tag,z===5||z===6||z===26||z===27){o=d=b;continue e}w=w.parentNode}}o=o.return}rp(function(){var ne=d,ve=lu(a),ye=[];e:{var re=Op.get(t);if(re!==void 0){var ce=pl,it=t;switch(t){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":ce=a_;break;case"focusin":it="focus",ce=pu;break;case"focusout":it="blur",ce=pu;break;case"beforeblur":case"afterblur":ce=pu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=o_;break;case Np:case Dp:case Up:ce=Zx;break;case Lp:ce=c_;break;case"scroll":case"scrollend":ce=kx;break;case"wheel":ce=f_;break;case"copy":case"cut":case"paste":ce=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=fp;break;case"toggle":case"beforetoggle":ce=h_}var et=(n&4)!==0,Gt=!et&&(t==="scroll"||t==="scrollend"),Y=et?re!==null?re+"Capture":null:re;et=[];for(var X=ne,$;X!==null;){var xe=X;if($=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||$===null||Y===null||(xe=Vr(X,Y),xe!=null&&et.push(To(X,xe,$))),Gt)break;X=X.return}0<et.length&&(re=new ce(re,it,null,a,ve),ye.push({event:re,listeners:et}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",re&&a!==ou&&(it=a.relatedTarget||a.fromElement)&&(pi(it)||it[ya]))break e;if((ce||re)&&(re=ve.window===ve?ve:(re=ve.ownerDocument)?re.defaultView||re.parentWindow:window,ce?(it=a.relatedTarget||a.toElement,ce=ne,it=it?pi(it):null,it!==null&&(Gt=c(it),et=it.tag,it!==Gt||et!==5&&et!==27&&et!==6)&&(it=null)):(ce=null,it=ne),ce!==it)){if(et=cp,xe="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(et=fp,xe="onPointerLeave",Y="onPointerEnter",X="pointer"),Gt=ce==null?re:Ci(ce),$=it==null?re:Ci(it),re=new et(xe,X+"leave",ce,a,ve),re.target=Gt,re.relatedTarget=$,xe=null,pi(ve)===ne&&(et=new et(Y,X+"enter",it,a,ve),et.target=$,et.relatedTarget=Gt,xe=et),Gt=xe,ce&&it)t:{for(et=ce,Y=it,X=0,$=et;$;$=dr($))X++;for($=0,xe=Y;xe;xe=dr(xe))$++;for(;0<X-$;)et=dr(et),X--;for(;0<$-X;)Y=dr(Y),$--;for(;X--;){if(et===Y||Y!==null&&et===Y.alternate)break t;et=dr(et),Y=dr(Y)}et=null}else et=null;ce!==null&&e0(ye,re,ce,et,!1),it!==null&&Gt!==null&&e0(ye,Gt,it,et,!0)}}e:{if(re=ne?Ci(ne):window,ce=re.nodeName&&re.nodeName.toLowerCase(),ce==="select"||ce==="input"&&re.type==="file")var ke=_p;else if(vp(re))if(Sp)ke=b_;else{ke=y_;var mt=S_}else ce=re.nodeName,!ce||ce.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ne&&Di(ne.elementType)&&(ke=_p):ke=M_;if(ke&&(ke=ke(t,ne))){xp(ye,ke,a,ve);break e}mt&&mt(t,re,ne),t==="focusout"&&ne&&re.type==="number"&&ne.memoizedProps.value!=null&&In(re,"number",re.value)}switch(mt=ne?Ci(ne):window,t){case"focusin":(vp(mt)||mt.contentEditable==="true")&&(Vs=mt,Su=ne,Kr=null);break;case"focusout":Kr=Su=Vs=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Rp(ye,a,ve);break;case"selectionchange":if(T_)break;case"keydown":case"keyup":Rp(ye,a,ve)}var Ze;if(gu)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Gs?mp(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(dp&&a.locale!=="ko"&&(Gs||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Gs&&(Ze=op()):(Ea=ve,fu="value"in Ea?Ea.value:Ea.textContent,Gs=!0)),mt=tc(ne,tt),0<mt.length&&(tt=new up(tt,t,null,a,ve),ye.push({event:tt,listeners:mt}),Ze?tt.data=Ze:(Ze=gp(a),Ze!==null&&(tt.data=Ze)))),(Ze=m_?g_(t,a):v_(t,a))&&(tt=tc(ne,"onBeforeInput"),0<tt.length&&(mt=new up("onBeforeInput","beforeinput",null,a,ve),ye.push({event:mt,listeners:tt}),mt.data=Ze)),oS(ye,t,ne,a,ve)}Jg(ye,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Vr(t,a),u!=null&&o.unshift(To(t,u,d)),u=Vr(t,n),u!=null&&o.push(To(t,u,d))),t.tag===3)return o;t=t.return}return[]}function dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function e0(t,n,a,o,u){for(var d=n._reactName,b=[];a!==null&&a!==o;){var w=a,z=w.alternate,ne=w.stateNode;if(w=w.tag,z!==null&&z===o)break;w!==5&&w!==26&&w!==27||ne===null||(z=ne,u?(ne=Vr(a,d),ne!=null&&b.unshift(To(a,ne,z))):u||(ne=Vr(a,d),ne!=null&&b.push(To(a,ne,z)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var fS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function t0(t){return(typeof t=="string"?t:""+t).replace(fS,`
`).replace(dS,"")}function n0(t,n){return n=t0(n),t0(t)===n}function nc(){}function Ht(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Yt(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Yt(t,""+o);break;case"className":ie(t,"class",o);break;case"tabIndex":ie(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ie(t,a,o);break;case"style":mi(t,o,d);break;case"data":if(n!=="object"){ie(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ul(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ht(t,n,"name",u.name,u,null),Ht(t,n,"formEncType",u.formEncType,u,null),Ht(t,n,"formMethod",u.formMethod,u,null),Ht(t,n,"formTarget",u.formTarget,u,null)):(Ht(t,n,"encType",u.encType,u,null),Ht(t,n,"method",u.method,u,null),Ht(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ul(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=nc);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ul(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),fe(t,"popover",o);break;case"xlinkActuate":J(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":J(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":J(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":J(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":J(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":J(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":J(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":J(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":J(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=cl.get(a)||a,fe(t,a,o))}}function Xf(t,n,a,o,u,d){switch(a){case"style":mi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Yt(t,o):(typeof o=="number"||typeof o=="bigint")&&Yt(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=nc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ol.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[_n]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):fe(t,a,o)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var b=a[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,d,b,a,null)}}u&&Ht(t,n,"srcSet",a.srcSet,a,null),o&&Ht(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var w=d=b=u=null,z=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":b=ve;break;case"checked":z=ve;break;case"defaultChecked":ne=ve;break;case"value":d=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:Ht(t,n,o,ve,a,null)}}Pn(t,d,w,z,ne,b,u,!1),Vt(t);return;case"select":vt("invalid",t),o=b=d=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":b=w;break;case"multiple":o=w;default:Ht(t,n,u,w,a,null)}n=d,a=b,t.multiple=!!o,n!=null?Fn(t,!!o,n,!1):a!=null&&Fn(t,!!o,a,!0);return;case"textarea":vt("invalid",t),d=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(w=a[b],w!=null))switch(b){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Ht(t,n,b,w,a,null)}Pt(t,o,u,d),Vt(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ht(t,n,z,o,a,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Eo.length;o++)vt(Eo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,ne,o,a,null)}return;default:if(Di(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&Xf(t,n,ve,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Ht(t,n,w,o,a,null))}function hS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,b=null,w=null,z=null,ne=null,ve=null;for(ce in a){var ye=a[ce];if(a.hasOwnProperty(ce)&&ye!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":z=ye;default:o.hasOwnProperty(ce)||Ht(t,n,ce,null,o,ye)}}for(var re in o){var ce=o[re];if(ye=a[re],o.hasOwnProperty(re)&&(ce!=null||ye!=null))switch(re){case"type":d=ce;break;case"name":u=ce;break;case"checked":ne=ce;break;case"defaultChecked":ve=ce;break;case"value":b=ce;break;case"defaultValue":w=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==ye&&Ht(t,n,re,ce,o,ye)}}xt(t,b,w,z,ne,ve,d,u);return;case"select":ce=b=w=re=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":ce=z;default:o.hasOwnProperty(d)||Ht(t,n,d,null,o,z)}for(u in o)if(d=o[u],z=a[u],o.hasOwnProperty(u)&&(d!=null||z!=null))switch(u){case"value":re=d;break;case"defaultValue":w=d;break;case"multiple":b=d;default:d!==z&&Ht(t,n,u,d,o,z)}n=w,a=b,o=ce,re!=null?Fn(t,!!a,re,!1):!!o!=!!a&&(n!=null?Fn(t,!!a,n,!0):Fn(t,!!a,a?[]:"",!1));return;case"textarea":ce=re=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ht(t,n,w,null,o,u)}for(b in o)if(u=o[b],d=a[b],o.hasOwnProperty(b)&&(u!=null||d!=null))switch(b){case"value":re=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Ht(t,n,b,u,o,d)}Ki(t,re,ce);return;case"option":for(var it in a)if(re=a[it],a.hasOwnProperty(it)&&re!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:Ht(t,n,it,null,o,re)}for(z in o)if(re=o[z],ce=a[z],o.hasOwnProperty(z)&&re!==ce&&(re!=null||ce!=null))switch(z){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Ht(t,n,z,re,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)re=a[et],a.hasOwnProperty(et)&&re!=null&&!o.hasOwnProperty(et)&&Ht(t,n,et,null,o,re);for(ne in o)if(re=o[ne],ce=a[ne],o.hasOwnProperty(ne)&&re!==ce&&(re!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Ht(t,n,ne,re,o,ce)}return;default:if(Di(n)){for(var Gt in a)re=a[Gt],a.hasOwnProperty(Gt)&&re!==void 0&&!o.hasOwnProperty(Gt)&&Xf(t,n,Gt,void 0,o,re);for(ve in o)re=o[ve],ce=a[ve],!o.hasOwnProperty(ve)||re===ce||re===void 0&&ce===void 0||Xf(t,n,ve,re,o,ce);return}}for(var Y in a)re=a[Y],a.hasOwnProperty(Y)&&re!=null&&!o.hasOwnProperty(Y)&&Ht(t,n,Y,null,o,re);for(ye in o)re=o[ye],ce=a[ye],!o.hasOwnProperty(ye)||re===ce||re==null&&ce==null||Ht(t,n,ye,re,o,ce)}var Wf=null,qf=null;function ic(t){return t.nodeType===9?t:t.ownerDocument}function i0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function pS(){var t=window.event;return t&&t.type==="popstate"?t===Zf?!1:(Zf=t,!0):(Zf=null,!1)}var s0=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,r0=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(t){return r0.resolve(null).then(t).catch(vS)}:s0;function vS(t){setTimeout(function(){throw t})}function Ha(t){return t==="head"}function o0(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var b=t.ownerDocument;if(a&1&&Ao(b.documentElement),a&2&&Ao(b.body),a&4)for(a=b.head,Ao(a),b=a.firstChild;b;){var w=b.nextSibling,z=b.nodeName;b[Ma]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&b.rel.toLowerCase()==="stylesheet"||a.removeChild(b),b=w}}if(u===0){t.removeChild(d),Oo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Oo(n)}function Kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),Bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ma])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function _S(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function Qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function SS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Jf=null;function l0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function c0(t,n,a){switch(n=ic(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ao(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Bs(t)}var oi=new Map,u0=new Set;function ac(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=H.d;H.d={f:yS,r:MS,D:bS,C:ES,L:TS,m:AS,X:RS,S:wS,M:CS};function yS(){var t=ua.f(),n=Zl();return t||n}function MS(t){var n=qi(t);n!==null&&n.tag===5&&n.type==="form"?Nm(n):ua.r(t)}var hr=typeof document>"u"?null:document;function f0(t,n,a){var o=hr;if(o&&typeof n=="string"&&n){var u=Xt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),u0.has(u)||(u0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",t),tn(n),o.head.appendChild(n)))}}function bS(t){ua.D(t),f0("dns-prefetch",t,null)}function ES(t,n){ua.C(t,n),f0("preconnect",t,n)}function TS(t,n,a){ua.L(t,n,a);var o=hr;if(o&&t&&n){var u='link[rel="preload"][as="'+Xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xt(a.imageSizes)+'"]')):u+='[href="'+Xt(t)+'"]';var d=u;switch(n){case"style":d=pr(t);break;case"script":d=mr(t)}oi.has(d)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(wo(d))||n==="script"&&o.querySelector(Ro(d))||(n=o.createElement("link"),An(n,"link",t),tn(n),o.head.appendChild(n)))}}function AS(t,n){ua.m(t,n);var a=hr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xt(o)+'"][href="'+Xt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=mr(t)}if(!oi.has(d)&&(t=x({rel:"modulepreload",href:t},n),oi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(d)))return}o=a.createElement("link"),An(o,"link",t),tn(o),a.head.appendChild(o)}}}function wS(t,n,a){ua.S(t,n,a);var o=hr;if(o&&t){var u=Yi(o).hoistableStyles,d=pr(t);n=n||"default";var b=u.get(d);if(!b){var w={loading:0,preload:null};if(b=o.querySelector(wo(d)))w.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(d))&&$f(t,a);var z=b=o.createElement("link");tn(z),An(z,"link",t),z._p=new Promise(function(ne,ve){z.onload=ne,z.onerror=ve}),z.addEventListener("load",function(){w.loading|=1}),z.addEventListener("error",function(){w.loading|=2}),w.loading|=4,sc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:w},u.set(d,b)}}}function RS(t,n){ua.X(t,n);var a=hr;if(a&&t){var o=Yi(a).hoistableScripts,u=mr(t),d=o.get(u);d||(d=a.querySelector(Ro(u)),d||(t=x({src:t,async:!0},n),(n=oi.get(u))&&ed(t,n),d=a.createElement("script"),tn(d),An(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function CS(t,n){ua.M(t,n);var a=hr;if(a&&t){var o=Yi(a).hoistableScripts,u=mr(t),d=o.get(u);d||(d=a.querySelector(Ro(u)),d||(t=x({src:t,async:!0,type:"module"},n),(n=oi.get(u))&&ed(t,n),d=a.createElement("script"),tn(d),An(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function d0(t,n,a,o){var u=(u=ee.current)?ac(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=Yi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pr(a.href);var d=Yi(u).hoistableStyles,b=d.get(t);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,b),(d=u.querySelector(wo(t)))&&!d._p&&(b.instance=d,b.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),d||NS(u,t,a,b.state))),n&&o===null)throw Error(s(528,""));return b}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=Yi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pr(t){return'href="'+Xt(t)+'"'}function wo(t){return'link[rel="stylesheet"]['+t+"]"}function h0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function NS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),tn(n),t.head.appendChild(n))}function mr(t){return'[src="'+Xt(t)+'"]'}function Ro(t){return"script[async]"+t}function p0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Xt(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),An(o,"style",u),sc(o,a.precedence,t),n.instance=o;case"stylesheet":u=pr(a.href);var d=t.querySelector(wo(u));if(d)return n.state.loading|=4,n.instance=d,tn(d),d;o=h0(a),(u=oi.get(u))&&$f(o,u),d=(t.ownerDocument||t).createElement("link"),tn(d);var b=d;return b._p=new Promise(function(w,z){b.onload=w,b.onerror=z}),An(d,"link",o),n.state.loading|=4,sc(d,a.precedence,t),n.instance=d;case"script":return d=mr(a.src),(u=t.querySelector(Ro(d)))?(n.instance=u,tn(u),u):(o=a,(u=oi.get(d))&&(o=x({},a),ed(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),tn(u),An(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,t));return n.instance}function sc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,b=0;b<o.length;b++){var w=o[b];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var rc=null;function m0(t,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ma]||d[hn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=t+b;var w=o.get(b);w?w.push(d):o.set(b,[d])}}return o}function g0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function DS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function v0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Co=null;function US(){}function LS(t,n,a){if(Co===null)throw Error(s(475));var o=Co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=pr(a.href),d=t.querySelector(wo(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=oc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,tn(d);return}d=t.ownerDocument||t,a=h0(a),(u=oi.get(u))&&$f(a,u),d=d.createElement("link"),tn(d);var b=d;b._p=new Promise(function(w,z){b.onload=w,b.onerror=z}),An(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=oc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function OS(){if(Co===null)throw Error(s(475));var t=Co;return t.stylesheets&&t.count===0&&td(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&td(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function oc(){if(this.count--,this.count===0){if(this.stylesheets)td(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var lc=null;function td(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,lc=new Map,n.forEach(PS,t),lc=null,oc.call(t))}function PS(t,n){if(!(n.state.loading&4)){var a=lc.get(t);if(a)var o=a.get(null);else{a=new Map,lc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var b=u[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),d=a.get(b)||o,d===o&&a.set(null,u),a.set(b,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var No={$$typeof:P,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function IS(t,n,a,o,u,d,b,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function x0(t,n,a,o,u,d,b,w,z,ne,ve,ye){return t=new IS(t,n,a,b,w,z,ne,ye),n=1,d===!0&&(n|=24),d=Wn(3,null,null,n),t.current=d,d.stateNode=t,n=Pu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},zu(d),t}function _0(t){return t?(t=Ws,t):Ws}function S0(t,n,a,o,u,d){u=_0(u),o.context===null?o.context=u:o.pendingContext=u,o=wa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ra(t,o,n),a!==null&&(Qn(a,t,n),so(a,t,n))}function y0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nd(t,n){y0(t,n),(t=t.alternate)&&y0(t,n)}function M0(t){if(t.tag===13){var n=Xs(t,67108864);n!==null&&Qn(n,t,67108864),nd(t,67108864)}}var cc=!0;function FS(t,n,a,o){var u=I.T;I.T=null;var d=H.p;try{H.p=2,id(t,n,a,o)}finally{H.p=d,I.T=u}}function BS(t,n,a,o){var u=I.T;I.T=null;var d=H.p;try{H.p=8,id(t,n,a,o)}finally{H.p=d,I.T=u}}function id(t,n,a,o){if(cc){var u=ad(o);if(u===null)kf(t,n,o,uc,a),E0(t,o);else if(HS(u,t,n,a,o))o.stopPropagation();else if(E0(t,o),n&4&&-1<zS.indexOf(t)){for(;u!==null;){var d=qi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=Fe(d.pendingLanes);if(b!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;b;){var z=1<<31-we(b);w.entanglements[1]|=z,b&=~z}Ii(d),(It&6)===0&&(ql=yt()+500,bo(0))}}break;case 13:w=Xs(d,2),w!==null&&Qn(w,d,2),Zl(),nd(d,2)}if(d=ad(o),d===null&&kf(t,n,o,uc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else kf(t,n,o,null,a)}}function ad(t){return t=lu(t),sd(t)}var uc=null;function sd(t){if(uc=null,t=pi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uc=t,null}function b0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case kt:return 2;case Mt:return 8;case bt:case Ge:return 32;case D:return 268435456;default:return 32}default:return 32}}var rd=!1,Ga=null,Va=null,ja=null,Do=new Map,Uo=new Map,ka=[],zS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E0(t,n){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=qi(n),n!==null&&M0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function HS(t,n,a,o,u){switch(n){case"focusin":return Ga=Lo(Ga,t,n,a,o,u),!0;case"dragenter":return Va=Lo(Va,t,n,a,o,u),!0;case"mouseover":return ja=Lo(ja,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Do.set(d,Lo(Do.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Uo.set(d,Lo(Uo.get(d)||null,t,n,a,o,u)),!0}return!1}function T0(t){var n=pi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,hi(t.priority,function(){if(a.tag===13){var o=Kn();o=nt(o);var u=Xs(a,o);u!==null&&Qn(u,a,o),nd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ad(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);ou=o,a.target.dispatchEvent(o),ou=null}else return n=qi(a),n!==null&&M0(n),t.blockedOn=a,!1;n.shift()}return!0}function A0(t,n,a){fc(t)&&a.delete(n)}function GS(){rd=!1,Ga!==null&&fc(Ga)&&(Ga=null),Va!==null&&fc(Va)&&(Va=null),ja!==null&&fc(ja)&&(ja=null),Do.forEach(A0),Uo.forEach(A0)}function dc(t,n){t.blockedOn===n&&(t.blockedOn=null,rd||(rd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,GS)))}var hc=null;function w0(t){hc!==t&&(hc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hc===t&&(hc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(sd(o||a)===null)continue;break}var d=qi(a);d!==null&&(t.splice(n,3),n-=3,sf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Oo(t){function n(z){return dc(z,t)}Ga!==null&&dc(Ga,t),Va!==null&&dc(Va,t),ja!==null&&dc(ja,t),Do.forEach(n),Uo.forEach(n);for(var a=0;a<ka.length;a++){var o=ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)T0(a),a.blockedOn===null&&ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],b=u[_n]||null;if(typeof d=="function")b||w0(a);else if(b){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,b=d[_n]||null)w=b.formAction;else if(sd(u)!==null)continue}else w=b.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),w0(a)}}}function od(t){this._internalRoot=t}pc.prototype.render=od.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Kn();S0(a,o,t,n,null,null)},pc.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;S0(t.current,2,null,t,null,null),Zl(),n[ya]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,t),a===0&&T0(t)}};var R0=e.version;if(R0!=="19.1.0")throw Error(s(527,R0,"19.1.0"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var VS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{Z=mc.inject(VS),le=mc}catch{}}return Io.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=km,d=Xm,b=Wm,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=x0(t,1,!1,null,null,a,o,u,d,b,w,null),t[ya]=n.current,jf(t),new od(n)},Io.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=km,b=Xm,w=Wm,z=null,ne=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(ne=a.formState)),n=x0(t,1,!0,n,a??null,o,u,d,b,w,z,ne),n.context=_0(null),a=n.current,o=Kn(),o=nt(o),u=wa(o),u.callback=null,Ra(a,u,o),a=o,n.current.lanes=a,Ie(n,a),Ii(n),t[ya]=n.current,jf(t),new pc(n)},Io.version="19.1.0",Io}var B0;function $S(){if(B0)return ud.exports;B0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ud.exports=JS(),ud.exports}var ey=$S();const ty=qv(ey);Zv();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Yo.apply(this,arguments)}var $a;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})($a||($a={}));const z0="popstate";function ny(r){r===void 0&&(r={});function e(l,c){let{pathname:f="/",search:p="",hash:m=""}=Us(l.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Zd("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=l.location.href,h=m.indexOf("#");p=h===-1?m:m.slice(0,h)}return p+"#"+(typeof c=="string"?c:qc(c))}function s(l,c){tu(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(c)+")")}return ay(e,i,s,r)}function dn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function tu(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iy(){return Math.random().toString(36).substr(2,8)}function H0(r,e){return{usr:r.state,key:r.key,idx:e}}function Zd(r,e,i,s){return i===void 0&&(i=null),Yo({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Us(e):e,{state:i,key:e&&e.key||s||iy()})}function qc(r){let{pathname:e="/",search:i="",hash:s=""}=r;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Us(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substr(i),r=r.substr(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function ay(r,e,i,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p=$a.Pop,m=null,h=x();h==null&&(h=0,f.replaceState(Yo({},f.state,{idx:h}),""));function x(){return(f.state||{idx:null}).idx}function y(){p=$a.Pop;let S=x(),M=S==null?null:S-h;h=S,m&&m({action:p,location:C.location,delta:M})}function _(S,M){p=$a.Push;let N=Zd(C.location,S,M);i&&i(N,S),h=x()+1;let P=H0(N,h),U=C.createHref(N);try{f.pushState(P,"",U)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(U)}c&&m&&m({action:p,location:C.location,delta:1})}function E(S,M){p=$a.Replace;let N=Zd(C.location,S,M);i&&i(N,S),h=x();let P=H0(N,h),U=C.createHref(N);f.replaceState(P,"",U),c&&m&&m({action:p,location:C.location,delta:0})}function T(S){let M=l.location.origin!=="null"?l.location.origin:l.location.href,N=typeof S=="string"?S:qc(S);return N=N.replace(/ $/,"%20"),dn(M,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,M)}let C={get action(){return p},get location(){return r(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(z0,y),m=S,()=>{l.removeEventListener(z0,y),m=null}},createHref(S){return e(l,S)},createURL:T,encodeLocation(S){let M=T(S);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:_,replace:E,go(S){return f.go(S)}};return C}var G0;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(G0||(G0={}));function sy(r,e,i){return i===void 0&&(i="/"),ry(r,e,i)}function ry(r,e,i,s){let l=typeof e=="string"?Us(e):e,c=Wh(l.pathname||"/",i);if(c==null)return null;let f=Kv(r);oy(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let h=_y(c);p=gy(f[m],h)}return p}function Kv(r,e,i,s){e===void 0&&(e=[]),i===void 0&&(i=[]),s===void 0&&(s="");let l=(c,f,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(dn(m.relativePath.startsWith(s),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(s.length));let h=ts([s,m.relativePath]),x=i.concat(m);c.children&&c.children.length>0&&(dn(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Kv(c.children,e,x,h)),!(c.path==null&&!c.index)&&e.push({path:h,score:py(h,c.index),routesMeta:x})};return r.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,f);else for(let m of Qv(c.path))l(c,f,m)}),e}function Qv(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Qv(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function oy(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:my(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}const ly=/^:[\w-]+$/,cy=3,uy=2,fy=1,dy=10,hy=-2,V0=r=>r==="*";function py(r,e){let i=r.split("/"),s=i.length;return i.some(V0)&&(s+=hy),e&&(s+=uy),i.filter(l=>!V0(l)).reduce((l,c)=>l+(ly.test(c)?cy:c===""?fy:dy),s)}function my(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function gy(r,e,i){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],h=p===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",y=vy({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},x),_=m.route;if(!y)return null;Object.assign(l,y.params),f.push({params:l,pathname:ts([c,y.pathname]),pathnameBase:Ey(ts([c,y.pathnameBase])),route:_}),y.pathnameBase!=="/"&&(c=ts([c,y.pathnameBase]))}return f}function vy(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=xy(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((h,x,y)=>{let{paramName:_,isOptional:E}=x;if(_==="*"){let C=p[y]||"";f=c.slice(0,c.length-C.length).replace(/(.)\/+$/,"$1")}const T=p[y];return E&&!T?h[_]=void 0:h[_]=(T||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:r}}function xy(r,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),tu(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function _y(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tu(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Wh(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}const Sy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yy=r=>Sy.test(r);function My(r,e){e===void 0&&(e="/");let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Us(r):r,c;if(i)if(yy(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),tu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(f+" -> "+i))}i.startsWith("/")?c=j0(i.substring(1),"/"):c=j0(i,e)}else c=e;return{pathname:c,search:Ty(s),hash:Ay(l)}}function j0(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function pd(r,e,i,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function by(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Jv(r,e){let i=by(r);return e?i.map((s,l)=>l===i.length-1?s.pathname:s.pathnameBase):i.map(s=>s.pathnameBase)}function $v(r,e,i,s){s===void 0&&(s=!1);let l;typeof r=="string"?l=Us(r):(l=Yo({},r),dn(!l.pathname||!l.pathname.includes("?"),pd("?","pathname","search",l)),dn(!l.pathname||!l.pathname.includes("#"),pd("#","pathname","hash",l)),dn(!l.search||!l.search.includes("#"),pd("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let y=e.length-1;if(!s&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),y-=1;l.pathname=_.join("/")}p=y>=0?e[y]:"/"}let m=My(l,p),h=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||x)&&(m.pathname+="/"),m}const ts=r=>r.join("/").replace(/\/\/+/g,"/"),Ey=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Ty=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Ay=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function wy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const ex=["post","put","patch","delete"];new Set(ex);const Ry=["get",...ex];new Set(Ry);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Zo.apply(this,arguments)}const qh=Ne.createContext(null),Cy=Ne.createContext(null),Ls=Ne.createContext(null),$o=Ne.createContext(null),Os=Ne.createContext({outlet:null,matches:[],isDataRoute:!1}),tx=Ne.createContext(null);function Ny(r,e){let{relative:i}=e===void 0?{}:e;el()||dn(!1);let{basename:s,navigator:l}=Ne.useContext(Ls),{hash:c,pathname:f,search:p}=ix(r,{relative:i}),m=f;return s!=="/"&&(m=f==="/"?s:ts([s,f])),l.createHref({pathname:m,search:p,hash:c})}function el(){return Ne.useContext($o)!=null}function Ps(){return el()||dn(!1),Ne.useContext($o).location}function Dy(){return Ne.useContext($o).navigationType}function nx(r){Ne.useContext(Ls).static||Ne.useLayoutEffect(r)}function Uy(){let{isDataRoute:r}=Ne.useContext(Os);return r?Xy():Ly()}function Ly(){el()||dn(!1);let r=Ne.useContext(qh),{basename:e,future:i,navigator:s}=Ne.useContext(Ls),{matches:l}=Ne.useContext(Os),{pathname:c}=Ps(),f=JSON.stringify(Jv(l,i.v7_relativeSplatPath)),p=Ne.useRef(!1);return nx(()=>{p.current=!0}),Ne.useCallback(function(h,x){if(x===void 0&&(x={}),!p.current)return;if(typeof h=="number"){s.go(h);return}let y=$v(h,JSON.parse(f),c,x.relative==="path");r==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:ts([e,y.pathname])),(x.replace?s.replace:s.push)(y,x.state,x)},[e,s,f,c,r])}function ix(r,e){let{relative:i}=e===void 0?{}:e,{future:s}=Ne.useContext(Ls),{matches:l}=Ne.useContext(Os),{pathname:c}=Ps(),f=JSON.stringify(Jv(l,s.v7_relativeSplatPath));return Ne.useMemo(()=>$v(r,JSON.parse(f),c,i==="path"),[r,f,c,i])}function Oy(r,e){return Py(r,e)}function Py(r,e,i,s){el()||dn(!1);let{navigator:l}=Ne.useContext(Ls),{matches:c}=Ne.useContext(Os),f=c[c.length-1],p=f?f.params:{};f&&f.pathname;let m=f?f.pathnameBase:"/";f&&f.route;let h=Ps(),x;if(e){var y;let S=typeof e=="string"?Us(e):e;m==="/"||(y=S.pathname)!=null&&y.startsWith(m)||dn(!1),x=S}else x=h;let _=x.pathname||"/",E=_;if(m!=="/"){let S=m.replace(/^\//,"").split("/");E="/"+_.replace(/^\//,"").split("/").slice(S.length).join("/")}let T=sy(r,{pathname:E}),C=Hy(T&&T.map(S=>Object.assign({},S,{params:Object.assign({},p,S.params),pathname:ts([m,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?m:ts([m,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),c,i,s);return e&&C?Ne.createElement($o.Provider,{value:{location:Zo({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:$a.Pop}},C):C}function Iy(){let r=ky(),e=wy(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Ne.createElement(Ne.Fragment,null,Ne.createElement("h2",null,"Unexpected Application Error!"),Ne.createElement("h3",{style:{fontStyle:"italic"}},e),i?Ne.createElement("pre",{style:l},i):null,null)}const Fy=Ne.createElement(Iy,null);class By extends Ne.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?Ne.createElement(Os.Provider,{value:this.props.routeContext},Ne.createElement(tx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zy(r){let{routeContext:e,match:i,children:s}=r,l=Ne.useContext(qh);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),Ne.createElement(Os.Provider,{value:e},s)}function Hy(r,e,i,s){var l;if(e===void 0&&(e=[]),i===void 0&&(i=null),s===void 0&&(s=null),r==null){var c;if(!i)return null;if(i.errors)r=i.matches;else if((c=s)!=null&&c.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let f=r,p=(l=i)==null?void 0:l.errors;if(p!=null){let x=f.findIndex(y=>y.route.id&&(p==null?void 0:p[y.route.id])!==void 0);x>=0||dn(!1),f=f.slice(0,Math.min(f.length,x+1))}let m=!1,h=-1;if(i&&s&&s.v7_partialHydration)for(let x=0;x<f.length;x++){let y=f[x];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=x),y.route.id){let{loaderData:_,errors:E}=i,T=y.route.loader&&_[y.route.id]===void 0&&(!E||E[y.route.id]===void 0);if(y.route.lazy||T){m=!0,h>=0?f=f.slice(0,h+1):f=[f[0]];break}}}return f.reduceRight((x,y,_)=>{let E,T=!1,C=null,S=null;i&&(E=p&&y.route.id?p[y.route.id]:void 0,C=y.route.errorElement||Fy,m&&(h<0&&_===0?(Wy("route-fallback"),T=!0,S=null):h===_&&(T=!0,S=y.route.hydrateFallbackElement||null)));let M=e.concat(f.slice(0,_+1)),N=()=>{let P;return E?P=C:T?P=S:y.route.Component?P=Ne.createElement(y.route.Component,null):y.route.element?P=y.route.element:P=x,Ne.createElement(zy,{match:y,routeContext:{outlet:x,matches:M,isDataRoute:i!=null},children:P})};return i&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?Ne.createElement(By,{location:i.location,revalidation:i.revalidation,component:C,error:E,children:N(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):N()},null)}var ax=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(ax||{}),sx=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(sx||{});function Gy(r){let e=Ne.useContext(qh);return e||dn(!1),e}function Vy(r){let e=Ne.useContext(Cy);return e||dn(!1),e}function jy(r){let e=Ne.useContext(Os);return e||dn(!1),e}function rx(r){let e=jy(),i=e.matches[e.matches.length-1];return i.route.id||dn(!1),i.route.id}function ky(){var r;let e=Ne.useContext(tx),i=Vy(),s=rx();return e!==void 0?e:(r=i.errors)==null?void 0:r[s]}function Xy(){let{router:r}=Gy(ax.UseNavigateStable),e=rx(sx.UseNavigateStable),i=Ne.useRef(!1);return nx(()=>{i.current=!0}),Ne.useCallback(function(l,c){c===void 0&&(c={}),i.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,Zo({fromRouteId:e},c)))},[r,e])}const k0={};function Wy(r,e,i){k0[r]||(k0[r]=!0)}function qy(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function zi(r){dn(!1)}function Yy(r){let{basename:e="/",children:i=null,location:s,navigationType:l=$a.Pop,navigator:c,static:f=!1,future:p}=r;el()&&dn(!1);let m=e.replace(/^\/*/,"/"),h=Ne.useMemo(()=>({basename:m,navigator:c,static:f,future:Zo({v7_relativeSplatPath:!1},p)}),[m,p,c,f]);typeof s=="string"&&(s=Us(s));let{pathname:x="/",search:y="",hash:_="",state:E=null,key:T="default"}=s,C=Ne.useMemo(()=>{let S=Wh(x,m);return S==null?null:{location:{pathname:S,search:y,hash:_,state:E,key:T},navigationType:l}},[m,x,y,_,E,T,l]);return C==null?null:Ne.createElement(Ls.Provider,{value:h},Ne.createElement($o.Provider,{children:i,value:C}))}function Zy(r){let{children:e,location:i}=r;return Oy(Kd(e),i)}new Promise(()=>{});function Kd(r,e){e===void 0&&(e=[]);let i=[];return Ne.Children.forEach(r,(s,l)=>{if(!Ne.isValidElement(s))return;let c=[...e,l];if(s.type===Ne.Fragment){i.push.apply(i,Kd(s.props.children,c));return}s.type!==zi&&dn(!1),!s.props.index||!s.props.children||dn(!1);let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Kd(s.props.children,c)),i.push(f)}),i}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qd(){return Qd=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Qd.apply(this,arguments)}function Ky(r,e){if(r==null)return{};var i={},s=Object.keys(r),l,c;for(c=0;c<s.length;c++)l=s[c],!(e.indexOf(l)>=0)&&(i[l]=r[l]);return i}function Qy(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Jy(r,e){return r.button===0&&(!e||e==="_self")&&!Qy(r)}const $y=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],eM="6";try{window.__reactRouterVersion=eM}catch{}const tM="startTransition",X0=YS[tM];function nM(r){let{basename:e,children:i,future:s,window:l}=r,c=Ne.useRef();c.current==null&&(c.current=ny({window:l,v5Compat:!0}));let f=c.current,[p,m]=Ne.useState({action:f.action,location:f.location}),{v7_startTransition:h}=s||{},x=Ne.useCallback(y=>{h&&X0?X0(()=>m(y)):m(y)},[m,h]);return Ne.useLayoutEffect(()=>f.listen(x),[f,x]),Ne.useEffect(()=>qy(s),[s]),Ne.createElement(Yy,{basename:e,children:i,location:p.location,navigationType:p.action,navigator:f,future:s})}const iM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dr=Ne.forwardRef(function(e,i){let{onClick:s,relative:l,reloadDocument:c,replace:f,state:p,target:m,to:h,preventScrollReset:x,viewTransition:y}=e,_=Ky(e,$y),{basename:E}=Ne.useContext(Ls),T,C=!1;if(typeof h=="string"&&aM.test(h)&&(T=h,iM))try{let P=new URL(window.location.href),U=h.startsWith("//")?new URL(P.protocol+h):new URL(h),B=Wh(U.pathname,E);U.origin===P.origin&&B!=null?h=B+U.search+U.hash:C=!0}catch{}let S=Ny(h,{relative:l}),M=sM(h,{replace:f,state:p,target:m,preventScrollReset:x,relative:l,viewTransition:y});function N(P){s&&s(P),P.defaultPrevented||M(P)}return Ne.createElement("a",Qd({},_,{href:T||S,onClick:C||c?s:N,ref:i,target:m}))});var W0;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(W0||(W0={}));var q0;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(q0||(q0={}));function sM(r,e){let{target:i,replace:s,state:l,preventScrollReset:c,relative:f,viewTransition:p}=e===void 0?{}:e,m=Uy(),h=Ps(),x=ix(r,{relative:f});return Ne.useCallback(y=>{if(Jy(y,i)){y.preventDefault();let _=s!==void 0?s:qc(h)===qc(x);m(r,{replace:_,state:l,preventScrollReset:c,relative:f,viewTransition:p})}},[h,m,x,s,l,i,r,c,f,p])}function rM(r){const e=Ps(),i=Dy(),s=Ne.useRef({});Ne.useEffect(()=>{const l=r.current;if(!l)return;const c=e.pathname;return requestAnimationFrame(()=>{i==="POP"&&s.current[c]!==void 0?l.scrollTop=s.current[c]:l.scrollTo({top:0})}),()=>{s.current[c]=l.scrollTop}},[e.pathname,i,r])}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="183",oM=0,Y0=1,lM=2,Gc=1,cM=2,Xo=3,ns=0,jn=1,ga=2,va=0,Ur=1,Jd=2,Z0=3,K0=4,uM=5,As=100,fM=101,dM=102,hM=103,pM=104,mM=200,gM=201,vM=202,xM=203,$d=204,eh=205,_M=206,SM=207,yM=208,MM=209,bM=210,EM=211,TM=212,AM=213,wM=214,th=0,nh=1,ih=2,Or=3,ah=4,sh=5,rh=6,oh=7,ox=0,RM=1,CM=2,Vi=0,lx=1,cx=2,ux=3,fx=4,dx=5,hx=6,px=7,mx=300,Ds=301,Pr=302,md=303,gd=304,nu=306,lh=1e3,ei=1001,ch=1002,wn=1003,NM=1004,gc=1005,fn=1006,vd=1007,Rs=1008,ui=1009,gx=1010,vx=1011,Ko=1012,Zh=1013,ji=1014,Ei=1015,ki=1016,Kh=1017,Qh=1018,Qo=1020,xx=35902,_x=35899,Sx=1021,yx=1022,fi=1023,_a=1026,Cs=1027,Mx=1028,Jh=1029,Ir=1030,$h=1031,ep=1033,Vc=33776,jc=33777,kc=33778,Xc=33779,uh=35840,fh=35841,dh=35842,hh=35843,ph=36196,mh=37492,gh=37496,vh=37488,xh=37489,_h=37490,Sh=37491,yh=37808,Mh=37809,bh=37810,Eh=37811,Th=37812,Ah=37813,wh=37814,Rh=37815,Ch=37816,Nh=37817,Dh=37818,Uh=37819,Lh=37820,Oh=37821,Ph=36492,Ih=36494,Fh=36495,Bh=36283,zh=36284,Hh=36285,Gh=36286,DM=3200,UM=0,LM=1,Ja="",ci="srgb",Fr="srgb-linear",Yc="linear",Bt="srgb",gr=7680,Q0=519,OM=512,PM=513,IM=514,tp=515,FM=516,BM=517,np=518,zM=519,J0=35044,$0="300 es",Gi=2e3,Zc=2001;function HM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Kc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function GM(){const r=Kc("canvas");return r.style.display="block",r}const ev={};function tv(...r){const e="THREE."+r.shift();console.log(e,...r)}function bx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function at(...r){r=bx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Rt(...r){r=bx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Qc(...r){const e=r.join(" ");e in ev||(ev[e]=!0,at(...r))}function VM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const jM={[th]:nh,[ih]:rh,[ah]:oh,[Or]:sh,[nh]:th,[rh]:ih,[oh]:ah,[sh]:Or};class zr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xd=Math.PI/180,Vh=180/Math.PI;function tl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function St(r,e,i){return Math.max(e,Math.min(i,r))}function kM(r,e){return(r%e+e)%e}function _d(r,e,i){return(1-i)*r+i*e}function Fo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,i=0){ot.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],x=s[l+2],y=s[l+3],_=c[f+0],E=c[f+1],T=c[f+2],C=c[f+3];if(y!==C||m!==_||h!==E||x!==T){let S=m*_+h*E+x*T+y*C;S<0&&(_=-_,E=-E,T=-T,C=-C,S=-S);let M=1-p;if(S<.9995){const N=Math.acos(S),P=Math.sin(N);M=Math.sin(M*N)/P,p=Math.sin(p*N)/P,m=m*M+_*p,h=h*M+E*p,x=x*M+T*p,y=y*M+C*p}else{m=m*M+_*p,h=h*M+E*p,x=x*M+T*p,y=y*M+C*p;const N=1/Math.sqrt(m*m+h*h+x*x+y*y);m*=N,h*=N,x*=N,y*=N}}e[i]=m,e[i+1]=h,e[i+2]=x,e[i+3]=y}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],x=s[l+3],y=c[f],_=c[f+1],E=c[f+2],T=c[f+3];return e[i]=p*T+x*y+m*E-h*_,e[i+1]=m*T+x*_+h*y-p*E,e[i+2]=h*T+x*E+p*_-m*y,e[i+3]=x*T-p*y-m*_-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),x=p(l/2),y=p(c/2),_=m(s/2),E=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=_*x*y+h*E*T,this._y=h*E*y-_*x*T,this._z=h*x*T+_*E*y,this._w=h*x*y-_*E*T;break;case"YXZ":this._x=_*x*y+h*E*T,this._y=h*E*y-_*x*T,this._z=h*x*T-_*E*y,this._w=h*x*y+_*E*T;break;case"ZXY":this._x=_*x*y-h*E*T,this._y=h*E*y+_*x*T,this._z=h*x*T+_*E*y,this._w=h*x*y-_*E*T;break;case"ZYX":this._x=_*x*y-h*E*T,this._y=h*E*y+_*x*T,this._z=h*x*T-_*E*y,this._w=h*x*y+_*E*T;break;case"YZX":this._x=_*x*y+h*E*T,this._y=h*E*y+_*x*T,this._z=h*x*T-_*E*y,this._w=h*x*y-_*E*T;break;case"XZY":this._x=_*x*y-h*E*T,this._y=h*E*y-_*x*T,this._z=h*x*T+_*E*y,this._w=h*x*y+_*E*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],x=i[6],y=i[10],_=s+p+y;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-h)*E,this._z=(f-l)*E}else if(s>p&&s>y){const E=2*Math.sqrt(1+s-p-y);this._w=(x-m)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+h)/E}else if(p>y){const E=2*Math.sqrt(1+p-s-y);this._w=(c-h)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+y-s-p);this._w=(f-l)/E,this._x=(c+h)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=s*x+f*p+l*h-c*m,this._y=l*x+f*m+c*p-s*h,this._z=c*x+f*h+s*m-l*p,this._w=f*x-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,s=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(nv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(nv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),x=2*(p*i-c*l),y=2*(c*s-f*i);return this.x=i+m*h+f*y-p*x,this.y=s+m*x+p*h-c*y,this.z=l+m*y+c*x-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sd=new oe,nv=new Hr;class ft{constructor(e,i,s,l,c,f,p,m,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=f,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],x=s[4],y=s[7],_=s[2],E=s[5],T=s[8],C=l[0],S=l[3],M=l[6],N=l[1],P=l[4],U=l[7],B=l[2],G=l[5],k=l[8];return c[0]=f*C+p*N+m*B,c[3]=f*S+p*P+m*G,c[6]=f*M+p*U+m*k,c[1]=h*C+x*N+y*B,c[4]=h*S+x*P+y*G,c[7]=h*M+x*U+y*k,c[2]=_*C+E*N+T*B,c[5]=_*S+E*P+T*G,c[8]=_*M+E*U+T*k,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],x=e[8];return i*f*x-i*p*h-s*c*x+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],x=e[8],y=x*f-p*h,_=p*m-x*c,E=h*c-f*m,T=i*y+s*_+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=y*C,e[1]=(l*h-x*s)*C,e[2]=(p*s-l*f)*C,e[3]=_*C,e[4]=(x*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=E*C,e[7]=(s*m-h*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(yd.makeScale(e,i)),this}rotate(e){return this.premultiply(yd.makeRotation(-e)),this}translate(e,i){return this.premultiply(yd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yd=new ft,iv=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),av=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XM(){const r={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Bt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Bt&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Fr]:{primaries:e,whitePoint:s,transfer:Yc,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:Bt,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const Tt=XM();function xa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vr;class WM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{vr===void 0&&(vr=Kc("canvas")),vr.width=e.width,vr.height=e.height;const l=vr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Kc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=xa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qM=0;class ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Md(l[f].image)):c.push(Md(l[f]))}else c=Md(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Md(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?WM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let YM=0;const bd=new oe;class On extends zr{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=ei,l=ei,c=fn,f=Rs,p=fi,m=ui,h=On.DEFAULT_ANISOTROPY,x=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=tl(),this.name="",this.source=new ip(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bd).x}get height(){return this.source.getSize(bd).y}get depth(){return this.source.getSize(bd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=mx;On.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],x=m[4],y=m[8],_=m[1],E=m[5],T=m[9],C=m[2],S=m[6],M=m[10];if(Math.abs(x-_)<.01&&Math.abs(y-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(x+_)<.1&&Math.abs(y+C)<.1&&Math.abs(T+S)<.1&&Math.abs(h+E+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,U=(E+1)/2,B=(M+1)/2,G=(x+_)/4,k=(y+C)/4,A=(T+S)/4;return P>U&&P>B?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=G/s,c=k/s):U>B?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=G/l,c=A/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=k/c,l=A/c),this.set(s,l,c,i),this}let N=Math.sqrt((S-T)*(S-T)+(y-C)*(y-C)+(_-x)*(_-x));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(y-C)/N,this.z=(_-x)/N,this.w=Math.acos((h+E+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZM extends zr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new On(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ip(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends ZM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Ex extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class KM extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(e,i,s,l,c,f,p,m,h,x,y,_,E,T,C,S){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,x,y,_,E,T,C,S)}set(e,i,s,l,c,f,p,m,h,x,y,_,E,T,C,S){const M=this.elements;return M[0]=e,M[4]=i,M[8]=s,M[12]=l,M[1]=c,M[5]=f,M[9]=p,M[13]=m,M[2]=h,M[6]=x,M[10]=y,M[14]=_,M[3]=E,M[7]=T,M[11]=C,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/xr.setFromMatrixColumn(e,0).length(),c=1/xr.setFromMatrixColumn(e,1).length(),f=1/xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const _=f*x,E=f*y,T=p*x,C=p*y;i[0]=m*x,i[4]=-m*y,i[8]=h,i[1]=E+T*h,i[5]=_-C*h,i[9]=-p*m,i[2]=C-_*h,i[6]=T+E*h,i[10]=f*m}else if(e.order==="YXZ"){const _=m*x,E=m*y,T=h*x,C=h*y;i[0]=_+C*p,i[4]=T*p-E,i[8]=f*h,i[1]=f*y,i[5]=f*x,i[9]=-p,i[2]=E*p-T,i[6]=C+_*p,i[10]=f*m}else if(e.order==="ZXY"){const _=m*x,E=m*y,T=h*x,C=h*y;i[0]=_-C*p,i[4]=-f*y,i[8]=T+E*p,i[1]=E+T*p,i[5]=f*x,i[9]=C-_*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const _=f*x,E=f*y,T=p*x,C=p*y;i[0]=m*x,i[4]=T*h-E,i[8]=_*h+C,i[1]=m*y,i[5]=C*h+_,i[9]=E*h-T,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const _=f*m,E=f*h,T=p*m,C=p*h;i[0]=m*x,i[4]=C-_*y,i[8]=T*y+E,i[1]=y,i[5]=f*x,i[9]=-p*x,i[2]=-h*x,i[6]=E*y+T,i[10]=_-C*y}else if(e.order==="XZY"){const _=f*m,E=f*h,T=p*m,C=p*h;i[0]=m*x,i[4]=-y,i[8]=h*x,i[1]=_*y+C,i[5]=f*x,i[9]=E*y-T,i[2]=T*y-E,i[6]=p*x,i[10]=C*y+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QM,e,JM)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Wa.crossVectors(s,Jn),Wa.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Wa.crossVectors(s,Jn)),Wa.normalize(),vc.crossVectors(Jn,Wa),l[0]=Wa.x,l[4]=vc.x,l[8]=Jn.x,l[1]=Wa.y,l[5]=vc.y,l[9]=Jn.y,l[2]=Wa.z,l[6]=vc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],x=s[1],y=s[5],_=s[9],E=s[13],T=s[2],C=s[6],S=s[10],M=s[14],N=s[3],P=s[7],U=s[11],B=s[15],G=l[0],k=l[4],A=l[8],L=l[12],pe=l[1],V=l[5],te=l[9],se=l[13],ue=l[2],Q=l[6],I=l[10],H=l[14],de=l[3],ge=l[7],O=l[11],K=l[15];return c[0]=f*G+p*pe+m*ue+h*de,c[4]=f*k+p*V+m*Q+h*ge,c[8]=f*A+p*te+m*I+h*O,c[12]=f*L+p*se+m*H+h*K,c[1]=x*G+y*pe+_*ue+E*de,c[5]=x*k+y*V+_*Q+E*ge,c[9]=x*A+y*te+_*I+E*O,c[13]=x*L+y*se+_*H+E*K,c[2]=T*G+C*pe+S*ue+M*de,c[6]=T*k+C*V+S*Q+M*ge,c[10]=T*A+C*te+S*I+M*O,c[14]=T*L+C*se+S*H+M*K,c[3]=N*G+P*pe+U*ue+B*de,c[7]=N*k+P*V+U*Q+B*ge,c[11]=N*A+P*te+U*I+B*O,c[15]=N*L+P*se+U*H+B*K,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],x=e[2],y=e[6],_=e[10],E=e[14],T=e[3],C=e[7],S=e[11],M=e[15],N=m*E-h*_,P=p*E-h*y,U=p*_-m*y,B=f*E-h*x,G=f*_-m*x,k=f*y-p*x;return i*(C*N-S*P+M*U)-s*(T*N-S*B+M*G)+l*(T*P-C*B+M*k)-c*(T*U-C*G+S*k)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],x=e[8],y=e[9],_=e[10],E=e[11],T=e[12],C=e[13],S=e[14],M=e[15],N=i*p-s*f,P=i*m-l*f,U=i*h-c*f,B=s*m-l*p,G=s*h-c*p,k=l*h-c*m,A=x*C-y*T,L=x*S-_*T,pe=x*M-E*T,V=y*S-_*C,te=y*M-E*C,se=_*M-E*S,ue=N*se-P*te+U*V+B*pe-G*L+k*A;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/ue;return e[0]=(p*se-m*te+h*V)*Q,e[1]=(l*te-s*se-c*V)*Q,e[2]=(C*k-S*G+M*B)*Q,e[3]=(_*G-y*k-E*B)*Q,e[4]=(m*pe-f*se-h*L)*Q,e[5]=(i*se-l*pe+c*L)*Q,e[6]=(S*U-T*k-M*P)*Q,e[7]=(x*k-_*U+E*P)*Q,e[8]=(f*te-p*pe+h*A)*Q,e[9]=(s*pe-i*te-c*A)*Q,e[10]=(T*G-C*U+M*N)*Q,e[11]=(y*U-x*G-E*N)*Q,e[12]=(p*L-f*V-m*A)*Q,e[13]=(i*V-s*L+l*A)*Q,e[14]=(C*P-T*B-S*N)*Q,e[15]=(x*B-y*P+_*N)*Q,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,x=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+s,x*m-l*f,0,h*m-l*p,x*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,x=f+f,y=p+p,_=c*h,E=c*x,T=c*y,C=f*x,S=f*y,M=p*y,N=m*h,P=m*x,U=m*y,B=s.x,G=s.y,k=s.z;return l[0]=(1-(C+M))*B,l[1]=(E+U)*B,l[2]=(T-P)*B,l[3]=0,l[4]=(E-U)*G,l[5]=(1-(_+M))*G,l[6]=(S+N)*G,l[7]=0,l[8]=(T+P)*k,l[9]=(S-N)*k,l[10]=(1-(_+C))*k,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=xr.set(l[0],l[1],l[2]).length();const p=xr.set(l[4],l[5],l[6]).length(),m=xr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),_i.copy(this);const h=1/f,x=1/p,y=1/m;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=x,_i.elements[5]*=x,_i.elements[6]*=x,_i.elements[8]*=y,_i.elements[9]*=y,_i.elements[10]*=y,i.setFromRotationMatrix(_i),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=Gi,m=!1){const h=this.elements,x=2*c/(i-e),y=2*c/(s-l),_=(i+e)/(i-e),E=(s+l)/(s-l);let T,C;if(m)T=c/(f-c),C=f*c/(f-c);else if(p===Gi)T=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===Zc)T=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=y,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=Gi,m=!1){const h=this.elements,x=2/(i-e),y=2/(s-l),_=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,C;if(m)T=1/(f-c),C=f/(f-c);else if(p===Gi)T=-2/(f-c),C=-(f+c)/(f-c);else if(p===Zc)T=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=y,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const xr=new oe,_i=new on,QM=new oe(0,0,0),JM=new oe(1,1,1),Wa=new oe,vc=new oe,Jn=new oe,sv=new on,rv=new Hr;class Sa{constructor(e=0,i=0,s=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],x=l[9],y=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return sv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return rv.setFromEuler(this),this.setFromQuaternion(rv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class Tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $M=0;const ov=new oe,_r=new Hr,fa=new on,xc=new oe,Bo=new oe,eb=new oe,tb=new Hr,lv=new oe(1,0,0),cv=new oe(0,1,0),uv=new oe(0,0,1),fv={type:"added"},nb={type:"removed"},Sr={type:"childadded",child:null},Ed={type:"childremoved",child:null};class kn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new oe,i=new Sa,s=new Hr,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new ft}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(lv,e)}rotateY(e){return this.rotateOnAxis(cv,e)}rotateZ(e){return this.rotateOnAxis(uv,e)}translateOnAxis(e,i){return ov.copy(e).applyQuaternion(this.quaternion),this.position.add(ov.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(lv,e)}translateY(e){return this.translateOnAxis(cv,e)}translateZ(e){return this.translateOnAxis(uv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?xc.copy(e):xc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Bo,xc,this.up):fa.lookAt(xc,Bo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(fa),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fv),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(nb),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fv),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const y=m[h];c(e.shapes,y)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),x=f(e.images),y=f(e.shapes),_=f(e.skeletons),E=f(e.animations),T=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),y.length>0&&(s.shapes=y),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}kn.DEFAULT_UP=new oe(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _c extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ib={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,s),M=this._getHandJoint(h,C);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}const x=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],_=x.position.distanceTo(y.position),E=.02,T=.005;h.inputState.pinching&&_>E+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=E-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(ib)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new _c;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Ad(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Lt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Tt.workingColorSpace){if(e=kM(e,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Ad(f,c,e+1/3),this.g=Ad(f,c,e),this.b=Ad(f,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const s=Ax[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Tt.workingToColorSpace(Dn.copy(this),e),Math.round(St(Dn.r*255,0,255))*65536+Math.round(St(Dn.g*255,0,255))*256+Math.round(St(Dn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,c=Dn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const x=(p+f)/2;if(p===f)m=0,h=0;else{const y=f-p;switch(h=x<=.5?y/(f+p):y/(2-f-p),f){case s:m=(l-c)/y+(l<c?6:0);break;case l:m=(c-s)/y+2;break;case c:m=(s-l)/y+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=ci){Tt.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,s=Dn.g,l=Dn.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(qa),this.setHSL(qa.h+e,qa.s+i,qa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(qa),e.getHSL(Sc);const s=_d(qa.h,Sc.h,i),l=_d(qa.s,Sc.s,i),c=_d(qa.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Lt;Lt.NAMES=Ax;class dv extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Si=new oe,da=new oe,wd=new oe,ha=new oe,yr=new oe,Mr=new oe,hv=new oe,Rd=new oe,Cd=new oe,Nd=new oe,Dd=new en,Ud=new en,Ld=new en;class bi{constructor(e=new oe,i=new oe,s=new oe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Si.subVectors(e,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Si.subVectors(l,i),da.subVectors(s,i),wd.subVectors(e,i);const f=Si.dot(Si),p=Si.dot(da),m=Si.dot(wd),h=da.dot(da),x=da.dot(wd),y=f*h-p*p;if(y===0)return c.set(0,0,0),null;const _=1/y,E=(h*m-p*x)*_,T=(f*x-p*m)*_;return c.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(f,ha.y),m.addScaledVector(p,ha.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Dd.setScalar(0),Ud.setScalar(0),Ld.setScalar(0),Dd.fromBufferAttribute(e,i),Ud.fromBufferAttribute(e,s),Ld.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Dd,c.x),f.addScaledVector(Ud,c.y),f.addScaledVector(Ld,c.z),f}static isFrontFacing(e,i,s,l){return Si.subVectors(s,i),da.subVectors(e,i),Si.cross(da).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Si.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return bi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;yr.subVectors(l,s),Mr.subVectors(c,s),Rd.subVectors(e,s);const m=yr.dot(Rd),h=Mr.dot(Rd);if(m<=0&&h<=0)return i.copy(s);Cd.subVectors(e,l);const x=yr.dot(Cd),y=Mr.dot(Cd);if(x>=0&&y<=x)return i.copy(l);const _=m*y-x*h;if(_<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(s).addScaledVector(yr,f);Nd.subVectors(e,c);const E=yr.dot(Nd),T=Mr.dot(Nd);if(T>=0&&E<=T)return i.copy(c);const C=E*h-m*T;if(C<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Mr,p);const S=x*T-E*y;if(S<=0&&y-x>=0&&E-T>=0)return hv.subVectors(c,l),p=(y-x)/(y-x+(E-T)),i.copy(l).addScaledVector(hv,p);const M=1/(S+C+_);return f=C*M,p=_*M,i.copy(s).addScaledVector(yr,f).addScaledVector(Mr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class nl{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,yi):yi.fromBufferAttribute(c,f),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),Mc.subVectors(this.max,zo),br.subVectors(e.a,zo),Er.subVectors(e.b,zo),Tr.subVectors(e.c,zo),Ya.subVectors(Er,br),Za.subVectors(Tr,Er),_s.subVectors(br,Tr);let i=[0,-Ya.z,Ya.y,0,-Za.z,Za.y,0,-_s.z,_s.y,Ya.z,0,-Ya.x,Za.z,0,-Za.x,_s.z,0,-_s.x,-Ya.y,Ya.x,0,-Za.y,Za.x,0,-_s.y,_s.x,0];return!Od(i,br,Er,Tr,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Od(i,br,Er,Tr,Mc))?!1:(bc.crossVectors(Ya,Za),i=[bc.x,bc.y,bc.z],Od(i,br,Er,Tr,Mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pa=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],yi=new oe,yc=new nl,br=new oe,Er=new oe,Tr=new oe,Ya=new oe,Za=new oe,_s=new oe,zo=new oe,Mc=new oe,bc=new oe,Ss=new oe;function Od(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ss.fromArray(r,c);const p=l.x*Math.abs(Ss.x)+l.y*Math.abs(Ss.y)+l.z*Math.abs(Ss.z),m=e.dot(Ss),h=i.dot(Ss),x=s.dot(Ss);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const un=new oe,Ec=new ot;let ab=0;class Ai{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ab++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=J0,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(e),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Fo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==J0&&(e.usage=this.usage),e}}class wx extends Ai{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Rx extends Ai{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class wi extends Ai{constructor(e,i,s){super(new Float32Array(e),i,s)}}const sb=new nl,Ho=new oe,Pd=new oe;class iu{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):sb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Pd)),this.expandByPoint(Ho.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rb=0;const li=new on,Id=new kn,Ar=new oe,$n=new nl,Go=new nl,bn=new oe;class Ri extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(HM(e)?Rx:wx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ft().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,s){return li.makeTranslation(e,i,s),this.applyMatrix4(li),this}scale(e,i,s){return li.makeScale(e,i,s),this.applyMatrix4(li),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new wi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];Go.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors($n.min,Go.min),$n.expandByPoint(bn),bn.addVectors($n.max,Go.max),$n.expandByPoint(bn)):($n.expandByPoint(Go.min),$n.expandByPoint(Go.max))}$n.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)bn.fromBufferAttribute(p,h),m&&(Ar.fromBufferAttribute(e,h),bn.add(Ar)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let A=0;A<s.count;A++)p[A]=new oe,m[A]=new oe;const h=new oe,x=new oe,y=new oe,_=new ot,E=new ot,T=new ot,C=new oe,S=new oe;function M(A,L,pe){h.fromBufferAttribute(s,A),x.fromBufferAttribute(s,L),y.fromBufferAttribute(s,pe),_.fromBufferAttribute(c,A),E.fromBufferAttribute(c,L),T.fromBufferAttribute(c,pe),x.sub(h),y.sub(h),E.sub(_),T.sub(_);const V=1/(E.x*T.y-T.x*E.y);isFinite(V)&&(C.copy(x).multiplyScalar(T.y).addScaledVector(y,-E.y).multiplyScalar(V),S.copy(y).multiplyScalar(E.x).addScaledVector(x,-T.x).multiplyScalar(V),p[A].add(C),p[L].add(C),p[pe].add(C),m[A].add(S),m[L].add(S),m[pe].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let A=0,L=N.length;A<L;++A){const pe=N[A],V=pe.start,te=pe.count;for(let se=V,ue=V+te;se<ue;se+=3)M(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const P=new oe,U=new oe,B=new oe,G=new oe;function k(A){B.fromBufferAttribute(l,A),G.copy(B);const L=p[A];P.copy(L),P.sub(B.multiplyScalar(B.dot(L))).normalize(),U.crossVectors(G,L);const V=U.dot(m[A])<0?-1:1;f.setXYZW(A,P.x,P.y,P.z,V)}for(let A=0,L=N.length;A<L;++A){const pe=N[A],V=pe.start,te=pe.count;for(let se=V,ue=V+te;se<ue;se+=3)k(e.getX(se+0)),k(e.getX(se+1)),k(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const l=new oe,c=new oe,f=new oe,p=new oe,m=new oe,h=new oe,x=new oe,y=new oe;if(e)for(let _=0,E=e.count;_<E;_+=3){const T=e.getX(_+0),C=e.getX(_+1),S=e.getX(_+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,S),x.subVectors(f,c),y.subVectors(l,c),x.cross(y),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),h.fromBufferAttribute(s,S),p.add(x),m.add(x),h.add(x),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),x.subVectors(f,c),y.subVectors(l,c),x.cross(y),s.setXYZ(_+0,x.x,x.y,x.z),s.setXYZ(_+1,x.x,x.y,x.z),s.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(p,m){const h=p.array,x=p.itemSize,y=p.normalized,_=new h.constructor(m.length*x);let E=0,T=0;for(let C=0,S=m.length;C<S;C++){p.isInterleavedBufferAttribute?E=m[C]*p.data.stride+p.offset:E=m[C]*x;for(let M=0;M<x;M++)_[T++]=h[E++]}return new Ai(_,x,y)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ri,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,y=h.length;x<y;x++){const _=h[x],E=e(_,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let y=0,_=h.length;y<_;y++){const E=h[y];x.push(E.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=e.morphAttributes;for(const h in c){const x=[],y=c[h];for(let _=0,E=y.length;_<E;_++)x.push(y[_].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,x=f.length;h<x;h++){const y=f[h];this.addGroup(y.start,y.count,y.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ob=0;class il extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=Ur,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=eh,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(s.blending=this.blending),this.side!==ns&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==$d&&(s.blendSrc=this.blendSrc),this.blendDst!==eh&&(s.blendDst=this.blendDst),this.blendEquation!==As&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ma=new oe,Fd=new oe,Tc=new oe,Ka=new oe,Bd=new oe,Ac=new oe,zd=new oe;class Cx{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Fd.copy(e).add(i).multiplyScalar(.5),Tc.copy(i).sub(e).normalize(),Ka.copy(this.origin).sub(Fd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Tc),p=Ka.dot(this.direction),m=-Ka.dot(Tc),h=Ka.lengthSq(),x=Math.abs(1-f*f);let y,_,E,T;if(x>0)if(y=f*m-p,_=f*p-m,T=c*x,y>=0)if(_>=-T)if(_<=T){const C=1/x;y*=C,_*=C,E=y*(y+f*_+2*p)+_*(f*y+_+2*m)+h}else _=c,y=Math.max(0,-(f*_+p)),E=-y*y+_*(_+2*m)+h;else _=-c,y=Math.max(0,-(f*_+p)),E=-y*y+_*(_+2*m)+h;else _<=-T?(y=Math.max(0,-(-f*c+p)),_=y>0?-c:Math.min(Math.max(-c,-m),c),E=-y*y+_*(_+2*m)+h):_<=T?(y=0,_=Math.min(Math.max(-c,-m),c),E=_*(_+2*m)+h):(y=Math.max(0,-(f*c+p)),_=y>0?c:Math.min(Math.max(-c,-m),c),E=-y*y+_*(_+2*m)+h);else _=f>0?-c:c,y=Math.max(0,-(f*_+p)),E=-y*y+_*(_+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Fd).addScaledVector(Tc,_),E}intersectSphere(e,i){ma.subVectors(e.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,_=this.origin;return h>=0?(s=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(s=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),x>=0?(c=(e.min.y-_.y)*x,f=(e.max.y-_.y)*x):(c=(e.max.y-_.y)*x,f=(e.min.y-_.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),y>=0?(p=(e.min.z-_.z)*y,m=(e.max.z-_.z)*y):(p=(e.max.z-_.z)*y,m=(e.min.z-_.z)*y),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ma)!==null}intersectTriangle(e,i,s,l,c){Bd.subVectors(i,e),Ac.subVectors(s,e),zd.crossVectors(Bd,Ac);let f=this.direction.dot(zd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;Ka.subVectors(this.origin,e);const m=p*this.direction.dot(Ac.crossVectors(Ka,Ac));if(m<0)return null;const h=p*this.direction.dot(Bd.cross(Ka));if(h<0||m+h>f)return null;const x=-p*Ka.dot(zd);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nx extends il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pv=new on,ys=new Cx,wc=new iu,mv=new oe,Rc=new oe,Cc=new oe,Nc=new oe,Hd=new oe,Dc=new oe,gv=new oe,Uc=new oe;class di extends kn{constructor(e=new Ri,i=new Nx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Dc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],y=c[m];x!==0&&(Hd.fromBufferAttribute(y,e),f?Dc.addScaledVector(Hd,x):Dc.addScaledVector(Hd.sub(i),x))}i.add(Dc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(c),ys.copy(e.ray).recast(e.near),!(wc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(wc,mv)===null||ys.origin.distanceToSquared(mv)>(e.far-e.near)**2))&&(pv.copy(c).invert(),ys.copy(e.ray).applyMatrix4(pv),!(s.boundingBox!==null&&ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ys)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,y=c.attributes.normal,_=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(f))for(let T=0,C=_.length;T<C;T++){const S=_[T],M=f[S.materialIndex],N=Math.max(S.start,E.start),P=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let U=N,B=P;U<B;U+=3){const G=p.getX(U),k=p.getX(U+1),A=p.getX(U+2);l=Lc(this,M,e,s,h,x,y,G,k,A),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let S=T,M=C;S<M;S+=3){const N=p.getX(S),P=p.getX(S+1),U=p.getX(S+2);l=Lc(this,f,e,s,h,x,y,N,P,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,C=_.length;T<C;T++){const S=_[T],M=f[S.materialIndex],N=Math.max(S.start,E.start),P=Math.min(m.count,Math.min(S.start+S.count,E.start+E.count));for(let U=N,B=P;U<B;U+=3){const G=U,k=U+1,A=U+2;l=Lc(this,M,e,s,h,x,y,G,k,A),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let S=T,M=C;S<M;S+=3){const N=S,P=S+1,U=S+2;l=Lc(this,f,e,s,h,x,y,N,P,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function lb(r,e,i,s,l,c,f,p){let m;if(e.side===jn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===ns,p),m===null)return null;Uc.copy(p),Uc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Uc);return h<i.near||h>i.far?null:{distance:h,point:Uc.clone(),object:r}}function Lc(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Rc),r.getVertexPosition(m,Cc),r.getVertexPosition(h,Nc);const x=lb(r,e,i,s,Rc,Cc,Nc,gv);if(x){const y=new oe;bi.getBarycoord(gv,Rc,Cc,Nc,y),l&&(x.uv=bi.getInterpolatedAttribute(l,p,m,h,y,new ot)),c&&(x.uv1=bi.getInterpolatedAttribute(c,p,m,h,y,new ot)),f&&(x.normal=bi.getInterpolatedAttribute(f,p,m,h,y,new oe),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new oe,materialIndex:0};bi.getNormal(Rc,Cc,Nc,_.normal),x.face=_,x.barycoord=y}return x}class Dx extends On{constructor(e=null,i=1,s=1,l,c,f,p,m,h=wn,x=wn,y,_){super(null,f,p,m,h,x,l,c,y,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gd=new oe,cb=new oe,ub=new ft;class Ts{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Gd.subVectors(s,i).cross(cb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Gd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||ub.getNormalMatrix(e),l=this.coplanarPoint(Gd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new iu,fb=new ot(.5,.5),Oc=new oe;class Ux{constructor(e=new Ts,i=new Ts,s=new Ts,l=new Ts,c=new Ts,f=new Ts){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Gi,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],x=c[4],y=c[5],_=c[6],E=c[7],T=c[8],C=c[9],S=c[10],M=c[11],N=c[12],P=c[13],U=c[14],B=c[15];if(l[0].setComponents(h-f,E-x,M-T,B-N).normalize(),l[1].setComponents(h+f,E+x,M+T,B+N).normalize(),l[2].setComponents(h+p,E+y,M+C,B+P).normalize(),l[3].setComponents(h-p,E-y,M-C,B-P).normalize(),s)l[4].setComponents(m,_,S,U).normalize(),l[5].setComponents(h-m,E-_,M-S,B-U).normalize();else if(l[4].setComponents(h-m,E-_,M-S,B-U).normalize(),i===Gi)l[5].setComponents(h+m,E+_,M+S,B+U).normalize();else if(i===Zc)l[5].setComponents(m,_,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const i=fb.distanceTo(e.center);return Ms.radius=.7071067811865476+i,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?e.max.x:e.min.x,Oc.y=l.normal.y>0?e.max.y:e.min.y,Oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class db extends il{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jc=new oe,$c=new oe,vv=new on,Vo=new Cx,Pc=new iu,Vd=new oe,xv=new oe;class hb extends kn{constructor(e=new Ri,i=new db){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),$c.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Jc.distanceTo($c);e.setAttribute("lineDistance",new wi(s,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,e.ray.intersectsSphere(Pc)===!1)return;vv.copy(l).invert(),Vo.copy(e.ray).applyMatrix4(vv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,x=s.index,_=s.attributes.position;if(x!==null){const E=Math.max(0,f.start),T=Math.min(x.count,f.start+f.count);for(let C=E,S=T-1;C<S;C+=h){const M=x.getX(C),N=x.getX(C+1),P=Ic(this,e,Vo,m,M,N,C);P&&i.push(P)}if(this.isLineLoop){const C=x.getX(T-1),S=x.getX(E),M=Ic(this,e,Vo,m,C,S,T-1);M&&i.push(M)}}else{const E=Math.max(0,f.start),T=Math.min(_.count,f.start+f.count);for(let C=E,S=T-1;C<S;C+=h){const M=Ic(this,e,Vo,m,C,C+1,C);M&&i.push(M)}if(this.isLineLoop){const C=Ic(this,e,Vo,m,T-1,E,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Ic(r,e,i,s,l,c,f){const p=r.geometry.attributes.position;if(Jc.fromBufferAttribute(p,l),$c.fromBufferAttribute(p,c),i.distanceSqToSegment(Jc,$c,Vd,xv)>s)return;Vd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Vd);if(!(h<e.near||h>e.far))return{distance:h,point:xv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const _v=new oe,Sv=new oe;class pb extends hb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)_v.fromBufferAttribute(i,l),Sv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+_v.distanceTo(Sv);e.setAttribute("lineDistance",new wi(s,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lx extends On{constructor(e=[],i=Ds,s,l,c,f,p,m,h,x){super(e,i,s,l,c,f,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jo extends On{constructor(e,i,s=ji,l,c,f,p=wn,m=wn,h,x=_a,y=1){if(x!==_a&&x!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:y};super(_,l,c,f,p,m,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class mb extends Jo{constructor(e,i=ji,s=Ds,l,c,f=wn,p=wn,m,h=_a){const x={width:e,height:e,depth:1},y=[x,x,x,x,x,x];super(e,e,i,s,l,c,f,p,m,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ox extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class al extends Ri{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],x=[],y=[];let _=0,E=0;T("z","y","x",-1,-1,s,i,e,f,c,0),T("z","y","x",1,-1,s,i,-e,f,c,1),T("x","z","y",1,1,e,s,i,l,f,2),T("x","z","y",1,-1,e,s,-i,l,f,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new wi(h,3)),this.setAttribute("normal",new wi(x,3)),this.setAttribute("uv",new wi(y,2));function T(C,S,M,N,P,U,B,G,k,A,L){const pe=U/k,V=B/A,te=U/2,se=B/2,ue=G/2,Q=k+1,I=A+1;let H=0,de=0;const ge=new oe;for(let O=0;O<I;O++){const K=O*V-se;for(let he=0;he<Q;he++){const _e=he*pe-te;ge[C]=_e*N,ge[S]=K*P,ge[M]=ue,h.push(ge.x,ge.y,ge.z),ge[C]=0,ge[S]=0,ge[M]=G>0?1:-1,x.push(ge.x,ge.y,ge.z),y.push(he/k),y.push(1-O/A),H+=1}}for(let O=0;O<A;O++)for(let K=0;K<k;K++){const he=_+K+Q*O,_e=_+K+Q*(O+1),Ue=_+(K+1)+Q*(O+1),Ye=_+(K+1)+Q*O;m.push(he,_e,Ye),m.push(_e,Ue,Ye),de+=6}p.addGroup(E,de,L),E+=de,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ns extends Ri{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,x=m+1,y=e/p,_=i/m,E=[],T=[],C=[],S=[];for(let M=0;M<x;M++){const N=M*_-f;for(let P=0;P<h;P++){const U=P*y-c;T.push(U,-N,0),C.push(0,0,1),S.push(P/p),S.push(1-M/m)}}for(let M=0;M<m;M++)for(let N=0;N<p;N++){const P=N+h*M,U=N+h*(M+1),B=N+1+h*(M+1),G=N+1+h*M;E.push(P,U,G),E.push(U,B,G)}this.setIndex(E),this.setAttribute("position",new wi(T,3)),this.setAttribute("normal",new wi(C,3)),this.setAttribute("uv",new wi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.widthSegments,e.heightSegments)}}function Br(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(r){const e={};for(let i=0;i<r.length;i++){const s=Br(r[i]);for(const l in s)e[l]=s[l]}return e}function gb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Px(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const vb={clone:Br,merge:Ln};var xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Wo extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sb extends il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yb extends il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fc=new oe,Bc=new Hr,Fi=new oe;class eu extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fc,Bc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Bc,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Fc,Bc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Bc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new oe,yv=new ot,Mv=new ot;class Mi extends eu{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(xd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z)}getViewSize(e,i){return this.getViewBounds(e,yv,Mv),i.subVectors(Mv,yv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(xd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ix extends eu{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const wr=-90,Rr=1;class Mb extends kn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(wr,Rr,e,i);l.layers=this.layers,this.add(l);const c=new Mi(wr,Rr,e,i);c.layers=this.layers,this.add(c);const f=new Mi(wr,Rr,e,i);f.layers=this.layers,this.add(f);const p=new Mi(wr,Rr,e,i);p.layers=this.layers,this.add(p);const m=new Mi(wr,Rr,e,i);m.layers=this.layers,this.add(m);const h=new Mi(wr,Rr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,x]=this.children,y=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(y,_,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class bb extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Eb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function bv(r,e,i,s){const l=Tb(s);switch(i){case Sx:return r*e;case Mx:return r*e/l.components*l.byteLength;case Jh:return r*e/l.components*l.byteLength;case Ir:return r*e*2/l.components*l.byteLength;case $h:return r*e*2/l.components*l.byteLength;case yx:return r*e*3/l.components*l.byteLength;case fi:return r*e*4/l.components*l.byteLength;case ep:return r*e*4/l.components*l.byteLength;case Vc:case jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kc:case Xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fh:case hh:return Math.max(r,16)*Math.max(e,8)/4;case uh:case dh:return Math.max(r,8)*Math.max(e,8)/2;case ph:case mh:case vh:case xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gh:case _h:case Sh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case bh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ph:case Ih:case Fh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Bh:case zh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Hh:case Gh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Tb(r){switch(r){case ui:case gx:return{byteLength:1,components:1};case Ko:case vx:case ki:return{byteLength:2,components:1};case Kh:case Qh:return{byteLength:2,components:4};case ji:case Zh:case Ei:return{byteLength:4,components:1};case xx:case _x:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Ab(r){const e=new WeakMap;function i(p,m){const h=p.array,x=p.usage,y=h.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,h,x),p.onUploadCallback();let E;if(h instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=r.SHORT;else if(h instanceof Uint32Array)E=r.UNSIGNED_INT;else if(h instanceof Int32Array)E=r.INT;else if(h instanceof Int8Array)E=r.BYTE;else if(h instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:y}}function s(p,m,h){const x=m.array,y=m.updateRanges;if(r.bindBuffer(h,p),y.length===0)r.bufferSubData(h,0,x);else{y.sort((E,T)=>E.start-T.start);let _=0;for(let E=1;E<y.length;E++){const T=y[_],C=y[E];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++_,y[_]=C)}y.length=_+1;for(let E=0,T=y.length;E<T;E++){const C=y[E];r.bufferSubData(h,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var wb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rb=`#ifdef USE_ALPHAHASH
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
#endif`,Cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ub=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lb=`#ifdef USE_AOMAP
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
#endif`,Ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`#ifdef USE_BATCHING
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
#endif`,Ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hb=`#ifdef USE_IRIDESCENCE
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
#endif`,Gb=`#ifdef USE_BUMPMAP
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
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kb=`#define PI 3.141592653589793
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
} // validated`,Qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jb=`vec3 transformedNormal = objectNormal;
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
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sE=`#ifdef USE_ENVMAP
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
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
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
}`,mE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gE=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xE=`uniform bool receiveShadow;
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
#endif`,_E=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,yE=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
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
#endif`,TE=`uniform sampler2D dfgLUT;
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
}`,AE=`
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IE=`#if defined( USE_POINTS_UV )
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
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HE=`#if defined( USE_MORPHCOLORS )
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
#endif`,VE=`#ifdef USE_MORPHTARGETS
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
#endif`,jE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZE=`#ifdef USE_NORMALMAP
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
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fT=`float getShadowMask() {
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
}`,dT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hT=`#ifdef USE_SKINNING
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
#endif`,pT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mT=`#ifdef USE_SKINNING
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
#endif`,gT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_T=`#ifndef saturate
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
#endif`,yT=`#ifdef USE_TRANSMISSION
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wT=`uniform sampler2D t2D;
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
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`#include <common>
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
}`,LT=`#if DEPTH_PACKING == 3200
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
}`,OT=`#define DISTANCE
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
}`,PT=`#define DISTANCE
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
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`uniform float scale;
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
}`,zT=`uniform vec3 diffuse;
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
}`,HT=`#include <common>
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
}`,VT=`#define LAMBERT
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
}`,jT=`#define LAMBERT
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
}`,kT=`#define MATCAP
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
}`,XT=`#define MATCAP
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
}`,WT=`#define NORMAL
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
}`,qT=`#define NORMAL
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
}`,YT=`#define PHONG
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
}`,ZT=`#define PHONG
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
}`,KT=`#define STANDARD
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
}`,QT=`#define STANDARD
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
}`,JT=`#define TOON
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
}`,$T=`#define TOON
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
}`,e1=`uniform float size;
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 color;
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
}`,a1=`uniform float rotation;
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
}`,s1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:wb,alphahash_pars_fragment:Rb,alphamap_fragment:Cb,alphamap_pars_fragment:Nb,alphatest_fragment:Db,alphatest_pars_fragment:Ub,aomap_fragment:Lb,aomap_pars_fragment:Ob,batching_pars_vertex:Pb,batching_vertex:Ib,begin_vertex:Fb,beginnormal_vertex:Bb,bsdfs:zb,iridescence_fragment:Hb,bumpmap_pars_fragment:Gb,clipping_planes_fragment:Vb,clipping_planes_pars_fragment:jb,clipping_planes_pars_vertex:kb,clipping_planes_vertex:Xb,color_fragment:Wb,color_pars_fragment:qb,color_pars_vertex:Yb,color_vertex:Zb,common:Kb,cube_uv_reflection_fragment:Qb,defaultnormal_vertex:Jb,displacementmap_pars_vertex:$b,displacementmap_vertex:eE,emissivemap_fragment:tE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:aE,envmap_fragment:sE,envmap_common_pars_fragment:rE,envmap_pars_fragment:oE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:_E,envmap_vertex:cE,fog_vertex:uE,fog_pars_vertex:fE,fog_fragment:dE,fog_pars_fragment:hE,gradientmap_pars_fragment:pE,lightmap_pars_fragment:mE,lights_lambert_fragment:gE,lights_lambert_pars_fragment:vE,lights_pars_begin:xE,lights_toon_fragment:SE,lights_toon_pars_fragment:yE,lights_phong_fragment:ME,lights_phong_pars_fragment:bE,lights_physical_fragment:EE,lights_physical_pars_fragment:TE,lights_fragment_begin:AE,lights_fragment_maps:wE,lights_fragment_end:RE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:NE,logdepthbuf_pars_vertex:DE,logdepthbuf_vertex:UE,map_fragment:LE,map_pars_fragment:OE,map_particle_fragment:PE,map_particle_pars_fragment:IE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:BE,morphinstance_vertex:zE,morphcolor_vertex:HE,morphnormal_vertex:GE,morphtarget_pars_vertex:VE,morphtarget_vertex:jE,normal_fragment_begin:kE,normal_fragment_maps:XE,normal_pars_fragment:WE,normal_pars_vertex:qE,normal_vertex:YE,normalmap_pars_fragment:ZE,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:$E,opaque_fragment:eT,packing:tT,premultiplied_alpha_fragment:nT,project_vertex:iT,dithering_fragment:aT,dithering_pars_fragment:sT,roughnessmap_fragment:rT,roughnessmap_pars_fragment:oT,shadowmap_pars_fragment:lT,shadowmap_pars_vertex:cT,shadowmap_vertex:uT,shadowmask_pars_fragment:fT,skinbase_vertex:dT,skinning_pars_vertex:hT,skinning_vertex:pT,skinnormal_vertex:mT,specularmap_fragment:gT,specularmap_pars_fragment:vT,tonemapping_fragment:xT,tonemapping_pars_fragment:_T,transmission_fragment:ST,transmission_pars_fragment:yT,uv_pars_fragment:MT,uv_pars_vertex:bT,uv_vertex:ET,worldpos_vertex:TT,background_vert:AT,background_frag:wT,backgroundCube_vert:RT,backgroundCube_frag:CT,cube_vert:NT,cube_frag:DT,depth_vert:UT,depth_frag:LT,distance_vert:OT,distance_frag:PT,equirect_vert:IT,equirect_frag:FT,linedashed_vert:BT,linedashed_frag:zT,meshbasic_vert:HT,meshbasic_frag:GT,meshlambert_vert:VT,meshlambert_frag:jT,meshmatcap_vert:kT,meshmatcap_frag:XT,meshnormal_vert:WT,meshnormal_frag:qT,meshphong_vert:YT,meshphong_frag:ZT,meshphysical_vert:KT,meshphysical_frag:QT,meshtoon_vert:JT,meshtoon_frag:$T,points_vert:e1,points_frag:t1,shadow_vert:n1,shadow_frag:i1,sprite_vert:a1,sprite_frag:s1},Oe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Hi={basic:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Ln([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Ln([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Ln([Oe.points,Oe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Ln([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Ln([Oe.common,Oe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Ln([Oe.sprite,Oe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Ln([Oe.common,Oe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Ln([Oe.lights,Oe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Hi.physical={uniforms:Ln([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const zc={r:0,b:0,g:0},bs=new Sa,r1=new on;function o1(r,e,i,s,l,c){const f=new Lt(0);let p=l===!0?0:1,m,h,x=null,y=0,_=null;function E(N){let P=N.isScene===!0?N.background:null;if(P&&P.isTexture){const U=N.backgroundBlurriness>0;P=e.get(P,U)}return P}function T(N){let P=!1;const U=E(N);U===null?S(f,p):U&&U.isColor&&(S(U,1),P=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(N,P){const U=E(P);U&&(U.isCubeTexture||U.mapping===nu)?(h===void 0&&(h=new di(new al(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Br(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,G,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bs.copy(P.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(bs)),h.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Bt,(x!==U||y!==U.version||_!==r.toneMapping)&&(h.material.needsUpdate=!0,x=U,y=U.version,_=r.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new di(new Ns(2,2),new Xi({name:"BackgroundMaterial",uniforms:Br(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Bt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(x!==U||y!==U.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,x=U,y=U.version,_=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function S(N,P){N.getRGB(zc,Px(r)),i.buffers.color.setClear(zc.r,zc.g,zc.b,P,c)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,P=1){f.set(N),p=P,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,S(f,p)},render:T,addToRenderList:C,dispose:M}}function l1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function p(V,te,se,ue,Q){let I=!1;const H=y(V,ue,se,te);c!==H&&(c=H,h(c.object)),I=E(V,ue,se,Q),I&&T(V,ue,se,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,U(V,te,se,ue),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return r.createVertexArray()}function h(V){return r.bindVertexArray(V)}function x(V){return r.deleteVertexArray(V)}function y(V,te,se,ue){const Q=ue.wireframe===!0;let I=s[te.id];I===void 0&&(I={},s[te.id]=I);const H=V.isInstancedMesh===!0?V.id:0;let de=I[H];de===void 0&&(de={},I[H]=de);let ge=de[se.id];ge===void 0&&(ge={},de[se.id]=ge);let O=ge[Q];return O===void 0&&(O=_(m()),ge[Q]=O),O}function _(V){const te=[],se=[],ue=[];for(let Q=0;Q<i;Q++)te[Q]=0,se[Q]=0,ue[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:se,attributeDivisors:ue,object:V,attributes:{},index:null}}function E(V,te,se,ue){const Q=c.attributes,I=te.attributes;let H=0;const de=se.getAttributes();for(const ge in de)if(de[ge].location>=0){const K=Q[ge];let he=I[ge];if(he===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(he=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(he=V.instanceColor)),K===void 0||K.attribute!==he||he&&K.data!==he.data)return!0;H++}return c.attributesNum!==H||c.index!==ue}function T(V,te,se,ue){const Q={},I=te.attributes;let H=0;const de=se.getAttributes();for(const ge in de)if(de[ge].location>=0){let K=I[ge];K===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(K=V.instanceColor));const he={};he.attribute=K,K&&K.data&&(he.data=K.data),Q[ge]=he,H++}c.attributes=Q,c.attributesNum=H,c.index=ue}function C(){const V=c.newAttributes;for(let te=0,se=V.length;te<se;te++)V[te]=0}function S(V){M(V,0)}function M(V,te){const se=c.newAttributes,ue=c.enabledAttributes,Q=c.attributeDivisors;se[V]=1,ue[V]===0&&(r.enableVertexAttribArray(V),ue[V]=1),Q[V]!==te&&(r.vertexAttribDivisor(V,te),Q[V]=te)}function N(){const V=c.newAttributes,te=c.enabledAttributes;for(let se=0,ue=te.length;se<ue;se++)te[se]!==V[se]&&(r.disableVertexAttribArray(se),te[se]=0)}function P(V,te,se,ue,Q,I,H){H===!0?r.vertexAttribIPointer(V,te,se,Q,I):r.vertexAttribPointer(V,te,se,ue,Q,I)}function U(V,te,se,ue){C();const Q=ue.attributes,I=se.getAttributes(),H=te.defaultAttributeValues;for(const de in I){const ge=I[de];if(ge.location>=0){let O=Q[de];if(O===void 0&&(de==="instanceMatrix"&&V.instanceMatrix&&(O=V.instanceMatrix),de==="instanceColor"&&V.instanceColor&&(O=V.instanceColor)),O!==void 0){const K=O.normalized,he=O.itemSize,_e=e.get(O);if(_e===void 0)continue;const Ue=_e.buffer,Ye=_e.type,ee=_e.bytesPerElement,Me=Ye===r.INT||Ye===r.UNSIGNED_INT||O.gpuType===Zh;if(O.isInterleavedBufferAttribute){const Se=O.data,Je=Se.stride,Ke=O.offset;if(Se.isInstancedInterleavedBuffer){for(let $e=0;$e<ge.locationSize;$e++)M(ge.location+$e,Se.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let $e=0;$e<ge.locationSize;$e++)S(ge.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let $e=0;$e<ge.locationSize;$e++)P(ge.location+$e,he/ge.locationSize,Ye,K,Je*ee,(Ke+he/ge.locationSize*$e)*ee,Me)}else{if(O.isInstancedBufferAttribute){for(let Se=0;Se<ge.locationSize;Se++)M(ge.location+Se,O.meshPerAttribute);V.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Se=0;Se<ge.locationSize;Se++)S(ge.location+Se);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Se=0;Se<ge.locationSize;Se++)P(ge.location+Se,he/ge.locationSize,Ye,K,he*ee,he/ge.locationSize*Se*ee,Me)}}else if(H!==void 0){const K=H[de];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(ge.location,K);break;case 3:r.vertexAttrib3fv(ge.location,K);break;case 4:r.vertexAttrib4fv(ge.location,K);break;default:r.vertexAttrib1fv(ge.location,K)}}}}N()}function B(){L();for(const V in s){const te=s[V];for(const se in te){const ue=te[se];for(const Q in ue){const I=ue[Q];for(const H in I)x(I[H].object),delete I[H];delete ue[Q]}}delete s[V]}}function G(V){if(s[V.id]===void 0)return;const te=s[V.id];for(const se in te){const ue=te[se];for(const Q in ue){const I=ue[Q];for(const H in I)x(I[H].object),delete I[H];delete ue[Q]}}delete s[V.id]}function k(V){for(const te in s){const se=s[te];for(const ue in se){const Q=se[ue];if(Q[V.id]===void 0)continue;const I=Q[V.id];for(const H in I)x(I[H].object),delete I[H];delete Q[V.id]}}}function A(V){for(const te in s){const se=s[te],ue=V.isInstancedMesh===!0?V.id:0,Q=se[ue];if(Q!==void 0){for(const I in Q){const H=Q[I];for(const de in H)x(H[de].object),delete H[de];delete Q[I]}delete se[ue],Object.keys(se).length===0&&delete s[te]}}}function L(){pe(),f=!0,c!==l&&(c=l,h(c.object))}function pe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:pe,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfObject:A,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:S,disableUnusedAttributes:N}}function c1(r,e,i){let s;function l(h){s=h}function c(h,x){r.drawArrays(s,h,x),i.update(x,s,1)}function f(h,x,y){y!==0&&(r.drawArraysInstanced(s,h,x,y),i.update(x,s,y))}function p(h,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,x,0,y);let E=0;for(let T=0;T<y;T++)E+=x[T];i.update(E,s,1)}function m(h,x,y,_){if(y===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<h.length;T++)f(h[T],x[T],_[T]);else{E.multiDrawArraysInstancedWEBGL(s,h,0,x,0,_,0,y);let T=0;for(let C=0;C<y;C++)T+=x[C]*_[C];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function u1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(k){return!(k!==fi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(k){const A=k===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ui&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Ei&&!A)}function m(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(at("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const y=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),M=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),G=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:U,maxSamples:B,samples:G}}function f1(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Ts,p=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,_){const E=y.length!==0||_||s!==0||l;return l=_,s=y.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,_){i=x(y,_,0)},this.setState=function(y,_,E){const T=y.clippingPlanes,C=y.clipIntersection,S=y.clipShadows,M=r.get(y);if(!l||T===null||T.length===0||c&&!S)c?x(null):h();else{const N=c?0:s,P=N*4;let U=M.clippingState||null;m.value=U,U=x(T,_,P,E);for(let B=0;B!==P;++B)U[B]=i[B];M.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(y,_,E,T){const C=y!==null?y.length:0;let S=null;if(C!==0){if(S=m.value,T!==!0||S===null){const M=E+C*4,N=_.matrixWorldInverse;p.getNormalMatrix(N),(S===null||S.length<M)&&(S=new Float32Array(M));for(let P=0,U=E;P!==C;++P,U+=4)f.copy(y[P]).applyMatrix4(N,p),f.normal.toArray(S,U),S[U+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const es=4,Ev=[.125,.215,.35,.446,.526,.582],ws=20,d1=256,jo=new Ix,Tv=new Lt;let jd=null,kd=0,Xd=0,Wd=!1;const h1=new oe;class Av{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=h1}=c;jd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,kd,Xd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ds||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ki,format:fi,colorSpace:Fr,depthBuffer:!1},l=wv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=p1(c)),this._blurMaterial=g1(c,e,i),this._ggxMaterial=m1(c,e,i)}return l}_compileMaterial(e){const i=new di(new Ri,e);this._renderer.compile(i,jo)}_sceneToCubeUV(e,i,s,l,c){const m=new Mi(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],y=this._renderer,_=y.autoClear,E=y.toneMapping;y.getClearColor(Tv),y.toneMapping=Vi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new al,new Nx({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let M=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,M=!0):(S.color.copy(Tv),M=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[P],c.y,c.z)):U===1?(m.up.set(0,0,h[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[P],c.z)):(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[P]));const B=this._cubeSize;Cr(l,U*B,P>2?B:0,B,B),y.setRenderTarget(l),M&&y.render(C,m),y.render(e,m)}y.toneMapping=E,y.autoClear=_,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ds||e.mapping===Pr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Cr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,jo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),y=Math.sqrt(h*h-x*x),_=0+h*1.25,E=y*_,{_lodMax:T}=this,C=this._sizeLods[s],S=3*C*(s>T-es?s-T+es:0),M=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Cr(c,S,M,3*C,2*C),l.setRenderTarget(c),l.render(p,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Cr(e,S,M,3*C,2*C),l.setRenderTarget(e),l.render(p,jo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const x=3,y=this._lodMeshes[l];y.material=h;const _=h.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*ws-1),C=c/T,S=isFinite(c)?1+Math.floor(x*C):ws;S>ws&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ws}`);const M=[];let N=0;for(let k=0;k<ws;++k){const A=k/C,L=Math.exp(-A*A/2);M.push(L),k===0?N+=L:k<S&&(N+=2*L)}for(let k=0;k<M.length;k++)M[k]=M[k]/N;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=M,_.latitudinal.value=f==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=T,_.mipInt.value=P-s;const U=this._sizeLods[l],B=3*U*(l>P-es?l-P+es:0),G=4*(this._cubeSize-U);Cr(i,B,G,3*U,2*U),m.setRenderTarget(i),m.render(y,jo)}}function p1(r){const e=[],i=[],s=[];let l=r;const c=r-es+1+Ev.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-es?m=Ev[f-r+es-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,y=1+h,_=[x,x,y,x,y,y,x,x,y,y,x,y],E=6,T=6,C=3,S=2,M=1,N=new Float32Array(C*T*E),P=new Float32Array(S*T*E),U=new Float32Array(M*T*E);for(let G=0;G<E;G++){const k=G%3*2/3-1,A=G>2?0:-1,L=[k,A,0,k+2/3,A,0,k+2/3,A+1,0,k,A,0,k+2/3,A+1,0,k,A+1,0];N.set(L,C*T*G),P.set(_,S*T*G);const pe=[G,G,G,G,G,G];U.set(pe,M*T*G)}const B=new Ri;B.setAttribute("position",new Ai(N,C)),B.setAttribute("uv",new Ai(P,S)),B.setAttribute("faceIndex",new Ai(U,M)),s.push(new di(B,null)),l>es&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function wv(r,e,i){const s=new Ti(r,e,i);return s.texture.mapping=nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function m1(r,e,i){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:d1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:au(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function g1(r,e,i){const s=new Float32Array(ws),l=new oe(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:au(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Rv(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Cv(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}class Bx extends Ti{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Lx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new al(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:va});c.uniforms.tEquirect.value=i;const f=new di(l,c),p=i.minFilter;return i.minFilter===Rs&&(i.minFilter=fn),new Mb(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function v1(r){let e=new WeakMap,i=new WeakMap,s=null;function l(_,E=!1){return _==null?null:E?f(_):c(_)}function c(_){if(_&&_.isTexture){const E=_.mapping;if(E===md||E===gd)if(e.has(_)){const T=e.get(_).texture;return p(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const C=new Bx(T.height);return C.fromEquirectangularTexture(r,_),e.set(_,C),_.addEventListener("dispose",h),p(C.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const E=_.mapping,T=E===md||E===gd,C=E===Ds||E===Pr;if(T||C){let S=i.get(_);const M=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return s===null&&(s=new Av(r)),S=T?s.fromEquirectangular(_,S):s.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,i.set(_,S),S.texture;if(S!==void 0)return S.texture;{const N=_.image;return T&&N&&N.height>0||C&&N&&m(N)?(s===null&&(s=new Av(r)),S=T?s.fromEquirectangular(_):s.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,i.set(_,S),_.addEventListener("dispose",x),S.texture):null}}}return _}function p(_,E){return E===md?_.mapping=Ds:E===gd&&(_.mapping=Pr),_}function m(_){let E=0;const T=6;for(let C=0;C<T;C++)_[C]!==void 0&&E++;return E===T}function h(_){const E=_.target;E.removeEventListener("dispose",h);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function x(_){const E=_.target;E.removeEventListener("dispose",x);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function y(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:y}}function x1(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Qc("WebGLRenderer: "+s+" extension not supported."),l}}}function _1(r,e,i,s){const l={},c=new WeakMap;function f(y){const _=y.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",f),delete l[_.id];const E=c.get(_);E&&(e.remove(E),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(y,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(y){const _=y.attributes;for(const E in _)e.update(_[E],r.ARRAY_BUFFER)}function h(y){const _=[],E=y.index,T=y.attributes.position;let C=0;if(T===void 0)return;if(E!==null){const N=E.array;C=E.version;for(let P=0,U=N.length;P<U;P+=3){const B=N[P+0],G=N[P+1],k=N[P+2];_.push(B,G,G,k,k,B)}}else{const N=T.array;C=T.version;for(let P=0,U=N.length/3-1;P<U;P+=3){const B=P+0,G=P+1,k=P+2;_.push(B,G,G,k,k,B)}}const S=new(T.count>=65535?Rx:wx)(_,1);S.version=C;const M=c.get(y);M&&e.remove(M),c.set(y,S)}function x(y){const _=c.get(y);if(_){const E=y.index;E!==null&&_.version<E.version&&h(y)}else h(y);return c.get(y)}return{get:p,update:m,getWireframeAttribute:x}}function S1(r,e,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,E){r.drawElements(s,E,c,_*f),i.update(E,s,1)}function h(_,E,T){T!==0&&(r.drawElementsInstanced(s,E,c,_*f,T),i.update(E,s,T))}function x(_,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,_,0,T);let S=0;for(let M=0;M<T;M++)S+=E[M];i.update(S,s,1)}function y(_,E,T,C){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<_.length;M++)h(_[M]/f,E[M],C[M]);else{S.multiDrawElementsInstancedWEBGL(s,E,0,c,_,0,C,0,T);let M=0;for(let N=0;N<T;N++)M+=E[N]*C[N];i.update(M,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=y}function y1(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Rt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function M1(r,e,i){const s=new WeakMap,l=new en;function c(f,p,m){const h=f.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=x!==void 0?x.length:0;let _=s.get(p);if(_===void 0||_.count!==y){let pe=function(){A.dispose(),s.delete(p),p.removeEventListener("dispose",pe)};var E=pe;_!==void 0&&_.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],N=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let U=0;T===!0&&(U=1),C===!0&&(U=2),S===!0&&(U=3);let B=p.attributes.position.count*U,G=1;B>e.maxTextureSize&&(G=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const k=new Float32Array(B*G*4*y),A=new Ex(k,B,G,y);A.type=Ei,A.needsUpdate=!0;const L=U*4;for(let V=0;V<y;V++){const te=M[V],se=N[V],ue=P[V],Q=B*G*4*V;for(let I=0;I<te.count;I++){const H=I*L;T===!0&&(l.fromBufferAttribute(te,I),k[Q+H+0]=l.x,k[Q+H+1]=l.y,k[Q+H+2]=l.z,k[Q+H+3]=0),C===!0&&(l.fromBufferAttribute(se,I),k[Q+H+4]=l.x,k[Q+H+5]=l.y,k[Q+H+6]=l.z,k[Q+H+7]=0),S===!0&&(l.fromBufferAttribute(ue,I),k[Q+H+8]=l.x,k[Q+H+9]=l.y,k[Q+H+10]=l.z,k[Q+H+11]=ue.itemSize===4?l.w:1)}}_={count:y,texture:A,size:new ot(B,G)},s.set(p,_),p.addEventListener("dispose",pe)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let S=0;S<h.length;S++)T+=h[S];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function b1(r,e,i,s,l){let c=new WeakMap;function f(h){const x=l.render.frame,y=h.geometry,_=e.get(h,y);if(c.get(_)!==x&&(e.update(_),c.set(_,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==x&&(E.update(),c.set(E,x))}return _}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:f,dispose:p}}const E1={[lx]:"LINEAR_TONE_MAPPING",[cx]:"REINHARD_TONE_MAPPING",[ux]:"CINEON_TONE_MAPPING",[fx]:"ACES_FILMIC_TONE_MAPPING",[hx]:"AGX_TONE_MAPPING",[px]:"NEUTRAL_TONE_MAPPING",[dx]:"CUSTOM_TONE_MAPPING"};function T1(r,e,i,s,l){const c=new Ti(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Ti(e,i,{type:ki,depthBuffer:!1,stencilBuffer:!1}),p=new Ri;p.setAttribute("position",new wi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new wi([0,2,0,0,2,0],2));const m=new Wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new di(p,m),x=new Ix(-1,1,1,-1,0,1);let y=null,_=null,E=!1,T,C=null,S=[],M=!1;this.setSize=function(N,P){c.setSize(N,P),f.setSize(N,P);for(let U=0;U<S.length;U++){const B=S[U];B.setSize&&B.setSize(N,P)}},this.setEffects=function(N){S=N,M=S.length>0&&S[0].isRenderPass===!0;const P=c.width,U=c.height;for(let B=0;B<S.length;B++){const G=S[B];G.setSize&&G.setSize(P,U)}},this.begin=function(N,P){if(E||N.toneMapping===Vi&&S.length===0)return!1;if(C=P,P!==null){const U=P.width,B=P.height;(c.width!==U||c.height!==B)&&this.setSize(U,B)}return M===!1&&N.setRenderTarget(c),T=N.toneMapping,N.toneMapping=Vi,!0},this.hasRenderPass=function(){return M},this.end=function(N,P){N.toneMapping=T,E=!0;let U=c,B=f;for(let G=0;G<S.length;G++){const k=S[G];if(k.enabled!==!1&&(k.render(N,B,U,P),k.needsSwap!==!1)){const A=U;U=B,B=A}}if(y!==N.outputColorSpace||_!==N.toneMapping){y=N.outputColorSpace,_=N.toneMapping,m.defines={},Tt.getTransfer(y)===Bt&&(m.defines.SRGB_TRANSFER="");const G=E1[_];G&&(m.defines[G]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,N.setRenderTarget(C),N.render(h,x),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const zx=new On,jh=new Jo(1,1),Hx=new Ex,Gx=new KM,Vx=new Lx,Nv=[],Dv=[],Uv=new Float32Array(16),Lv=new Float32Array(9),Ov=new Float32Array(4);function Gr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Nv[l];if(c===void 0&&(c=new Float32Array(l),Nv[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function gn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function vn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function su(r,e){let i=Dv[e];i===void 0&&(i=new Int32Array(e),Dv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function A1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function w1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2fv(this.addr,e),vn(i,e)}}function R1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;r.uniform3fv(this.addr,e),vn(i,e)}}function C1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4fv(this.addr,e),vn(i,e)}}function N1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;Ov.set(s),r.uniformMatrix2fv(this.addr,!1,Ov),vn(i,s)}}function D1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;Lv.set(s),r.uniformMatrix3fv(this.addr,!1,Lv),vn(i,s)}}function U1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;Uv.set(s),r.uniformMatrix4fv(this.addr,!1,Uv),vn(i,s)}}function L1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function O1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2iv(this.addr,e),vn(i,e)}}function P1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3iv(this.addr,e),vn(i,e)}}function I1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4iv(this.addr,e),vn(i,e)}}function F1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function B1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;r.uniform2uiv(this.addr,e),vn(i,e)}}function z1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;r.uniform3uiv(this.addr,e),vn(i,e)}}function H1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;r.uniform4uiv(this.addr,e),vn(i,e)}}function G1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(jh.compareFunction=i.isReversedDepthBuffer()?np:tp,c=jh):c=zx,i.setTexture2D(e||c,l)}function V1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Gx,l)}function j1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Vx,l)}function k1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Hx,l)}function X1(r){switch(r){case 5126:return A1;case 35664:return w1;case 35665:return R1;case 35666:return C1;case 35674:return N1;case 35675:return D1;case 35676:return U1;case 5124:case 35670:return L1;case 35667:case 35671:return O1;case 35668:case 35672:return P1;case 35669:case 35673:return I1;case 5125:return F1;case 36294:return B1;case 36295:return z1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return k1}}function W1(r,e){r.uniform1fv(this.addr,e)}function q1(r,e){const i=Gr(e,this.size,2);r.uniform2fv(this.addr,i)}function Y1(r,e){const i=Gr(e,this.size,3);r.uniform3fv(this.addr,i)}function Z1(r,e){const i=Gr(e,this.size,4);r.uniform4fv(this.addr,i)}function K1(r,e){const i=Gr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Q1(r,e){const i=Gr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function J1(r,e){const i=Gr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function $1(r,e){r.uniform1iv(this.addr,e)}function eA(r,e){r.uniform2iv(this.addr,e)}function tA(r,e){r.uniform3iv(this.addr,e)}function nA(r,e){r.uniform4iv(this.addr,e)}function iA(r,e){r.uniform1uiv(this.addr,e)}function aA(r,e){r.uniform2uiv(this.addr,e)}function sA(r,e){r.uniform3uiv(this.addr,e)}function rA(r,e){r.uniform4uiv(this.addr,e)}function oA(r,e,i){const s=this.cache,l=e.length,c=su(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=jh:f=zx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function lA(r,e,i){const s=this.cache,l=e.length,c=su(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Gx,c[f])}function cA(r,e,i){const s=this.cache,l=e.length,c=su(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Vx,c[f])}function uA(r,e,i){const s=this.cache,l=e.length,c=su(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Hx,c[f])}function fA(r){switch(r){case 5126:return W1;case 35664:return q1;case 35665:return Y1;case 35666:return Z1;case 35674:return K1;case 35675:return Q1;case 35676:return J1;case 5124:case 35670:return $1;case 35667:case 35671:return eA;case 35668:case 35672:return tA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return aA;case 36295:return sA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return uA}}class dA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=X1(i.type)}}class hA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fA(i.type)}}class pA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function Pv(r,e){r.seq.push(e),r.map[e.id]=e}function mA(r,e,i){const s=r.name,l=s.length;for(qd.lastIndex=0;;){const c=qd.exec(s),f=qd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){Pv(i,h===void 0?new dA(p,r,e):new hA(p,r,e));break}else{let y=i.map[p];y===void 0&&(y=new pA(p),Pv(i,y)),i=y}}}class Wc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);mA(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Iv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const gA=37297;let vA=0;function xA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const Fv=new ft;function _A(r){Tt._getMatrix(Fv,Tt.workingColorSpace,r);const e=`mat3( ${Fv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(r)){case Yc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Bv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+xA(r.getShaderSource(e),p)}else return c}function SA(r,e){const i=_A(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const yA={[lx]:"Linear",[cx]:"Reinhard",[ux]:"Cineon",[fx]:"ACESFilmic",[hx]:"AgX",[px]:"Neutral",[dx]:"Custom"};function MA(r,e){const i=yA[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new oe;function bA(){Tt.getLuminanceCoefficients(Hc);const r=Hc.x.toFixed(4),e=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function TA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function AA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function qo(r){return r!==""}function zv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(r){return r.replace(wA,CA)}const RA=new Map;function CA(r,e){let i=dt[e];if(i===void 0){const s=RA.get(e);if(s!==void 0)i=dt[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return kh(i)}const NA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gv(r){return r.replace(NA,DA)}function DA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Vv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const UA={[Gc]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function LA(r){return UA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const OA={[Ds]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function PA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":OA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const IA={[Pr]:"ENVMAP_MODE_REFRACTION"};function FA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":IA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const BA={[ox]:"ENVMAP_BLENDING_MULTIPLY",[RM]:"ENVMAP_BLENDING_MIX",[CM]:"ENVMAP_BLENDING_ADD"};function zA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":BA[r.combine]||"ENVMAP_BLENDING_NONE"}function HA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function GA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=LA(i),h=PA(i),x=FA(i),y=zA(i),_=HA(i),E=EA(i),T=TA(c),C=l.createProgram();let S,M,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),M.length>0&&(M+=`
`)):(S=[Vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),M=[Vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+y:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Vi?MA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,SA("linearToOutputTexel",i.outputColorSpace),bA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),f=kh(f),f=zv(f,i),f=Hv(f,i),p=kh(p),p=zv(p,i),p=Hv(p,i),f=Gv(f),p=Gv(p),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",i.glslVersion===$0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const P=N+S+f,U=N+M+p,B=Iv(l,l.VERTEX_SHADER,P),G=Iv(l,l.FRAGMENT_SHADER,U);l.attachShader(C,B),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function k(V){if(r.debug.checkShaderErrors){const te=l.getProgramInfoLog(C)||"",se=l.getShaderInfoLog(B)||"",ue=l.getShaderInfoLog(G)||"",Q=te.trim(),I=se.trim(),H=ue.trim();let de=!0,ge=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,B,G);else{const O=Bv(l,B,"vertex"),K=Bv(l,G,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+O+`
`+K)}else Q!==""?at("WebGLProgram: Program Info Log:",Q):(I===""||H==="")&&(ge=!1);ge&&(V.diagnostics={runnable:de,programLog:Q,vertexShader:{log:I,prefix:S},fragmentShader:{log:H,prefix:M}})}l.deleteShader(B),l.deleteShader(G),A=new Wc(l,C),L=AA(l,C)}let A;this.getUniforms=function(){return A===void 0&&k(this),A};let L;this.getAttributes=function(){return L===void 0&&k(this),L};let pe=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return pe===!1&&(pe=l.getProgramParameter(C,gA)),pe},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=G,this}let VA=0;class jA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new kA(e),i.set(e,s)),s}}class kA{constructor(e){this.id=VA++,this.code=e,this.usedTimes=0}}function XA(r,e,i,s,l,c){const f=new Tx,p=new jA,m=new Set,h=[],x=new Map,y=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return m.add(A),A===0?"uv":`uv${A}`}function C(A,L,pe,V,te){const se=V.fog,ue=te.geometry,Q=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,I=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,H=e.get(A.envMap||Q,I),de=H&&H.mapping===nu?H.image.height:null,ge=E[A.type];A.precision!==null&&(_=s.getMaxPrecision(A.precision),_!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const O=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,K=O!==void 0?O.length:0;let he=0;ue.morphAttributes.position!==void 0&&(he=1),ue.morphAttributes.normal!==void 0&&(he=2),ue.morphAttributes.color!==void 0&&(he=3);let _e,Ue,Ye,ee;if(ge){const At=Hi[ge];_e=At.vertexShader,Ue=At.fragmentShader}else _e=A.vertexShader,Ue=A.fragmentShader,p.update(A),Ye=p.getVertexShaderID(A),ee=p.getFragmentShaderID(A);const Me=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Je=te.isInstancedMesh===!0,Ke=te.isBatchedMesh===!0,$e=!!A.map,qt=!!A.matcap,ht=!!H,_t=!!A.aoMap,Ct=!!A.lightMap,rt=!!A.bumpMap,yt=!!A.normalMap,j=!!A.displacementMap,kt=!!A.emissiveMap,Mt=!!A.metalnessMap,bt=!!A.roughnessMap,Ge=A.anisotropy>0,D=A.clearcoat>0,v=A.dispersion>0,F=A.iridescence>0,Z=A.sheen>0,le=A.transmission>0,ae=Ge&&!!A.anisotropyMap,we=D&&!!A.clearcoatMap,Re=D&&!!A.clearcoatNormalMap,Xe=D&&!!A.clearcoatRoughnessMap,Qe=F&&!!A.iridescenceMap,be=F&&!!A.iridescenceThicknessMap,Te=Z&&!!A.sheenColorMap,Fe=Z&&!!A.sheenRoughnessMap,He=!!A.specularMap,Pe=!!A.specularColorMap,ct=!!A.specularIntensityMap,W=le&&!!A.transmissionMap,Ce=le&&!!A.thicknessMap,Ae=!!A.gradientMap,Ie=!!A.alphaMap,Ee=A.alphaTest>0,me=!!A.alphaHash,Ve=!!A.extensions;let nt=Vi;A.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(nt=r.toneMapping);const Ot={shaderID:ge,shaderType:A.type,shaderName:A.name,vertexShader:_e,fragmentShader:Ue,defines:A.defines,customVertexShaderID:Ye,customFragmentShaderID:ee,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Ke,batchingColor:Ke&&te._colorsTexture!==null,instancing:Je,instancingColor:Je&&te.instanceColor!==null,instancingMorph:Je&&te.morphTexture!==null,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Fr,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:qt,envMap:ht,envMapMode:ht&&H.mapping,envMapCubeUVHeight:de,aoMap:_t,lightMap:Ct,bumpMap:rt,normalMap:yt,displacementMap:j,emissiveMap:kt,normalMapObjectSpace:yt&&A.normalMapType===LM,normalMapTangentSpace:yt&&A.normalMapType===UM,metalnessMap:Mt,roughnessMap:bt,anisotropy:Ge,anisotropyMap:ae,clearcoat:D,clearcoatMap:we,clearcoatNormalMap:Re,clearcoatRoughnessMap:Xe,dispersion:v,iridescence:F,iridescenceMap:Qe,iridescenceThicknessMap:be,sheen:Z,sheenColorMap:Te,sheenRoughnessMap:Fe,specularMap:He,specularColorMap:Pe,specularIntensityMap:ct,transmission:le,transmissionMap:W,thicknessMap:Ce,gradientMap:Ae,opaque:A.transparent===!1&&A.blending===Ur&&A.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ee,alphaHash:me,combine:A.combine,mapUv:$e&&T(A.map.channel),aoMapUv:_t&&T(A.aoMap.channel),lightMapUv:Ct&&T(A.lightMap.channel),bumpMapUv:rt&&T(A.bumpMap.channel),normalMapUv:yt&&T(A.normalMap.channel),displacementMapUv:j&&T(A.displacementMap.channel),emissiveMapUv:kt&&T(A.emissiveMap.channel),metalnessMapUv:Mt&&T(A.metalnessMap.channel),roughnessMapUv:bt&&T(A.roughnessMap.channel),anisotropyMapUv:ae&&T(A.anisotropyMap.channel),clearcoatMapUv:we&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Re&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:be&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(A.sheenRoughnessMap.channel),specularMapUv:He&&T(A.specularMap.channel),specularColorMapUv:Pe&&T(A.specularColorMap.channel),specularIntensityMapUv:ct&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:Ce&&T(A.thicknessMap.channel),alphaMapUv:Ie&&T(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(yt||Ge),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ue.attributes.uv&&($e||Ie),fog:!!se,useFog:A.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ue.attributes.normal===void 0&&yt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Se,skinning:te.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:he,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&pe.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===Bt,decodeVideoTextureEmissive:kt&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===Bt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ga,flipSided:A.side===jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ve&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&A.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ot.vertexUv1s=m.has(1),Ot.vertexUv2s=m.has(2),Ot.vertexUv3s=m.has(3),m.clear(),Ot}function S(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const pe in A.defines)L.push(pe),L.push(A.defines[pe]);return A.isRawShaderMaterial===!1&&(M(L,A),N(L,A),L.push(r.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function M(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function N(A,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),A.push(f.mask)}function P(A){const L=E[A.type];let pe;if(L){const V=Hi[L];pe=vb.clone(V.uniforms)}else pe=A.uniforms;return pe}function U(A,L){let pe=x.get(L);return pe!==void 0?++pe.usedTimes:(pe=new GA(r,L,A,l),h.push(pe),x.set(L,pe)),pe}function B(A){if(--A.usedTimes===0){const L=h.indexOf(A);h[L]=h[h.length-1],h.pop(),x.delete(A.cacheKey),A.destroy()}}function G(A){p.remove(A)}function k(){p.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:P,acquireProgram:U,releaseProgram:B,releaseShaderCache:G,programs:h,dispose:k}}function WA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function qA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function jv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function kv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,T,C,S,M){let N=r[e];return N===void 0?(N={id:_.id,object:_,geometry:E,material:T,materialVariant:f(_),groupOrder:C,renderOrder:_.renderOrder,z:S,group:M},r[e]=N):(N.id=_.id,N.object=_,N.geometry=E,N.material=T,N.materialVariant=f(_),N.groupOrder=C,N.renderOrder=_.renderOrder,N.z=S,N.group=M),e++,N}function m(_,E,T,C,S,M){const N=p(_,E,T,C,S,M);T.transmission>0?s.push(N):T.transparent===!0?l.push(N):i.push(N)}function h(_,E,T,C,S,M){const N=p(_,E,T,C,S,M);T.transmission>0?s.unshift(N):T.transparent===!0?l.unshift(N):i.unshift(N)}function x(_,E){i.length>1&&i.sort(_||qA),s.length>1&&s.sort(E||jv),l.length>1&&l.sort(E||jv)}function y(){for(let _=e,E=r.length;_<E;_++){const T=r[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:y,sort:x}}function YA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new kv,r.set(s,[f])):l>=c.length?(f=new kv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function ZA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Lt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[e.id]=i,i}}}function KA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let QA=0;function JA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $A(r){const e=new ZA,i=KA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new oe);const l=new oe,c=new on,f=new on;function p(h){let x=0,y=0,_=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let E=0,T=0,C=0,S=0,M=0,N=0,P=0,U=0,B=0,G=0,k=0;h.sort(JA);for(let L=0,pe=h.length;L<pe;L++){const V=h[L],te=V.color,se=V.intensity,ue=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ir?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)x+=te.r*se,y+=te.g*se,_+=te.b*se;else if(V.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(V.sh.coefficients[I],se);k++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,de=i.get(V);de.shadowIntensity=H.intensity,de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,s.directionalShadow[E]=de,s.directionalShadowMap[E]=Q,s.directionalShadowMatrix[E]=V.shadow.matrix,N++}s.directional[E]=I,E++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(te).multiplyScalar(se),I.distance=ue,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,s.spot[C]=I;const H=V.shadow;if(V.map&&(s.spotLightMap[B]=V.map,B++,H.updateMatrices(V),V.castShadow&&G++),s.spotLightMatrix[C]=H.matrix,V.castShadow){const de=i.get(V);de.shadowIntensity=H.intensity,de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,s.spotShadow[C]=de,s.spotShadowMap[C]=Q,U++}C++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(te).multiplyScalar(se),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=I,S++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const H=V.shadow,de=i.get(V);de.shadowIntensity=H.intensity,de.shadowBias=H.bias,de.shadowNormalBias=H.normalBias,de.shadowRadius=H.radius,de.shadowMapSize=H.mapSize,de.shadowCameraNear=H.camera.near,de.shadowCameraFar=H.camera.far,s.pointShadow[T]=de,s.pointShadowMap[T]=Q,s.pointShadowMatrix[T]=V.shadow.matrix,P++}s.point[T]=I,T++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(se),I.groundColor.copy(V.groundColor).multiplyScalar(se),s.hemi[M]=I,M++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=y,s.ambient[2]=_;const A=s.hash;(A.directionalLength!==E||A.pointLength!==T||A.spotLength!==C||A.rectAreaLength!==S||A.hemiLength!==M||A.numDirectionalShadows!==N||A.numPointShadows!==P||A.numSpotShadows!==U||A.numSpotMaps!==B||A.numLightProbes!==k)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=S,s.point.length=T,s.hemi.length=M,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=U+B-G,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=k,A.directionalLength=E,A.pointLength=T,A.spotLength=C,A.rectAreaLength=S,A.hemiLength=M,A.numDirectionalShadows=N,A.numPointShadows=P,A.numSpotShadows=U,A.numSpotMaps=B,A.numLightProbes=k,s.version=QA++)}function m(h,x){let y=0,_=0,E=0,T=0,C=0;const S=x.matrixWorldInverse;for(let M=0,N=h.length;M<N;M++){const P=h[M];if(P.isDirectionalLight){const U=s.directional[y];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),y++}else if(P.isSpotLight){const U=s.spot[E];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),E++}else if(P.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),f.identity(),c.copy(P.matrixWorld),c.premultiply(S),f.extractRotation(c),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),T++}else if(P.isPointLight){const U=s.point[_];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),_++}else if(P.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(S),C++}}}return{setup:p,setupView:m,state:s}}function Xv(r){const e=new $A(r),i=[],s=[];function l(x){h.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function f(x){s.push(x)}function p(){e.setup(i)}function m(x){e.setupView(i,x)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function e2(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new Xv(r),e.set(l,[p])):c>=f.length?(p=new Xv(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const t2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n2=`uniform sampler2D shadow_pass;
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
}`,i2=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],a2=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],Wv=new on,ko=new oe,Yd=new oe;function s2(r,e,i){let s=new Ux;const l=new ot,c=new ot,f=new en,p=new Sb,m=new yb,h={},x=i.maxTextureSize,y={[ns]:jn,[jn]:ns,[ga]:ga},_=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:t2,fragmentShader:n2}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const T=new Ri;T.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new di(T,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let M=this.type;this.render=function(G,k,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;this.type===cM&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gc);const L=r.getRenderTarget(),pe=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),te=r.state;te.setBlending(va),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const se=M!==this.type;se&&k.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(Q=>Q.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,Q=G.length;ue<Q;ue++){const I=G[ue],H=I.shadow;if(H===void 0){at("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const de=H.getFrameExtents();l.multiply(de),c.copy(H.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/de.x),l.x=c.x*de.x,H.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/de.y),l.y=c.y*de.y,H.mapSize.y=c.y));const ge=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ge,H.map===null||se===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Xo){if(I.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ti(l.x,l.y,{format:Ir,type:ki,minFilter:fn,magFilter:fn,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new Jo(l.x,l.y,Ei),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=_a,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn}else I.isPointLight?(H.map=new Bx(l.x),H.map.depthTexture=new mb(l.x,ji)):(H.map=new Ti(l.x,l.y),H.map.depthTexture=new Jo(l.x,l.y,ji)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=_a,this.type===Gc?(H.map.depthTexture.compareFunction=ge?np:tp,H.map.depthTexture.minFilter=fn,H.map.depthTexture.magFilter=fn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn);H.camera.updateProjectionMatrix()}const O=H.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<O;K++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,K),r.clear();else{K===0&&(r.setRenderTarget(H.map),r.clear());const he=H.getViewport(K);f.set(c.x*he.x,c.y*he.y,c.x*he.z,c.y*he.w),te.viewport(f)}if(I.isPointLight){const he=H.camera,_e=H.matrix,Ue=I.distance||he.far;Ue!==he.far&&(he.far=Ue,he.updateProjectionMatrix()),ko.setFromMatrixPosition(I.matrixWorld),he.position.copy(ko),Yd.copy(he.position),Yd.add(i2[K]),he.up.copy(a2[K]),he.lookAt(Yd),he.updateMatrixWorld(),_e.makeTranslation(-ko.x,-ko.y,-ko.z),Wv.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Wv,he.coordinateSystem,he.reversedDepth)}else H.updateMatrices(I);s=H.getFrustum(),U(k,A,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===Xo&&N(H,A),H.needsUpdate=!1}M=this.type,S.needsUpdate=!1,r.setRenderTarget(L,pe,V)};function N(G,k){const A=e.update(C);_.defines.VSM_SAMPLES!==G.blurSamples&&(_.defines.VSM_SAMPLES=G.blurSamples,E.defines.VSM_SAMPLES=G.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ti(l.x,l.y,{format:Ir,type:ki})),_.uniforms.shadow_pass.value=G.map.depthTexture,_.uniforms.resolution.value=G.mapSize,_.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(k,null,A,_,C,null),E.uniforms.shadow_pass.value=G.mapPass.texture,E.uniforms.resolution.value=G.mapSize,E.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(k,null,A,E,C,null)}function P(G,k,A,L){let pe=null;const V=A.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)pe=V;else if(pe=A.isPointLight===!0?m:p,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const te=pe.uuid,se=k.uuid;let ue=h[te];ue===void 0&&(ue={},h[te]=ue);let Q=ue[se];Q===void 0&&(Q=pe.clone(),ue[se]=Q,k.addEventListener("dispose",B)),pe=Q}if(pe.visible=k.visible,pe.wireframe=k.wireframe,L===Xo?pe.side=k.shadowSide!==null?k.shadowSide:k.side:pe.side=k.shadowSide!==null?k.shadowSide:y[k.side],pe.alphaMap=k.alphaMap,pe.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,pe.map=k.map,pe.clipShadows=k.clipShadows,pe.clippingPlanes=k.clippingPlanes,pe.clipIntersection=k.clipIntersection,pe.displacementMap=k.displacementMap,pe.displacementScale=k.displacementScale,pe.displacementBias=k.displacementBias,pe.wireframeLinewidth=k.wireframeLinewidth,pe.linewidth=k.linewidth,A.isPointLight===!0&&pe.isMeshDistanceMaterial===!0){const te=r.properties.get(pe);te.light=A}return pe}function U(G,k,A,L,pe){if(G.visible===!1)return;if(G.layers.test(k.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&pe===Xo)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,G.matrixWorld);const se=e.update(G),ue=G.material;if(Array.isArray(ue)){const Q=se.groups;for(let I=0,H=Q.length;I<H;I++){const de=Q[I],ge=ue[de.materialIndex];if(ge&&ge.visible){const O=P(G,ge,L,pe);G.onBeforeShadow(r,G,k,A,se,O,de),r.renderBufferDirect(A,null,se,O,G,de),G.onAfterShadow(r,G,k,A,se,O,de)}}}else if(ue.visible){const Q=P(G,ue,L,pe);G.onBeforeShadow(r,G,k,A,se,Q,null),r.renderBufferDirect(A,null,se,Q,G,null),G.onAfterShadow(r,G,k,A,se,Q,null)}}const te=G.children;for(let se=0,ue=te.length;se<ue;se++)U(te[se],k,A,L,pe)}function B(G){G.target.removeEventListener("dispose",B);for(const A in h){const L=h[A],pe=G.target.uuid;pe in L&&(L[pe].dispose(),delete L[pe])}}}function r2(r,e){function i(){let W=!1;const Ce=new en;let Ae=null;const Ie=new en(0,0,0,0);return{setMask:function(Ee){Ae!==Ee&&!W&&(r.colorMask(Ee,Ee,Ee,Ee),Ae=Ee)},setLocked:function(Ee){W=Ee},setClear:function(Ee,me,Ve,nt,Ot){Ot===!0&&(Ee*=nt,me*=nt,Ve*=nt),Ce.set(Ee,me,Ve,nt),Ie.equals(Ce)===!1&&(r.clearColor(Ee,me,Ve,nt),Ie.copy(Ce))},reset:function(){W=!1,Ae=null,Ie.set(-1,0,0,0)}}}function s(){let W=!1,Ce=!1,Ae=null,Ie=null,Ee=null;return{setReversed:function(me){if(Ce!==me){const Ve=e.get("EXT_clip_control");me?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Ce=me;const nt=Ee;Ee=null,this.setClear(nt)}},getReversed:function(){return Ce},setTest:function(me){me?Me(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(me){Ae!==me&&!W&&(r.depthMask(me),Ae=me)},setFunc:function(me){if(Ce&&(me=jM[me]),Ie!==me){switch(me){case th:r.depthFunc(r.NEVER);break;case nh:r.depthFunc(r.ALWAYS);break;case ih:r.depthFunc(r.LESS);break;case Or:r.depthFunc(r.LEQUAL);break;case ah:r.depthFunc(r.EQUAL);break;case sh:r.depthFunc(r.GEQUAL);break;case rh:r.depthFunc(r.GREATER);break;case oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=me}},setLocked:function(me){W=me},setClear:function(me){Ee!==me&&(Ee=me,Ce&&(me=1-me),r.clearDepth(me))},reset:function(){W=!1,Ae=null,Ie=null,Ee=null,Ce=!1}}}function l(){let W=!1,Ce=null,Ae=null,Ie=null,Ee=null,me=null,Ve=null,nt=null,Ot=null;return{setTest:function(At){W||(At?Me(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(At){Ce!==At&&!W&&(r.stencilMask(At),Ce=At)},setFunc:function(At,hi,xn){(Ae!==At||Ie!==hi||Ee!==xn)&&(r.stencilFunc(At,hi,xn),Ae=At,Ie=hi,Ee=xn)},setOp:function(At,hi,xn){(me!==At||Ve!==hi||nt!==xn)&&(r.stencilOp(At,hi,xn),me=At,Ve=hi,nt=xn)},setLocked:function(At){W=At},setClear:function(At){Ot!==At&&(r.clearStencil(At),Ot=At)},reset:function(){W=!1,Ce=null,Ae=null,Ie=null,Ee=null,me=null,Ve=null,nt=null,Ot=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let x={},y={},_=new WeakMap,E=[],T=null,C=!1,S=null,M=null,N=null,P=null,U=null,B=null,G=null,k=new Lt(0,0,0),A=0,L=!1,pe=null,V=null,te=null,se=null,ue=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const de=r.getParameter(r.VERSION);de.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(de)[1]),I=H>=1):de.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),I=H>=2);let ge=null,O={};const K=r.getParameter(r.SCISSOR_BOX),he=r.getParameter(r.VIEWPORT),_e=new en().fromArray(K),Ue=new en().fromArray(he);function Ye(W,Ce,Ae,Ie){const Ee=new Uint8Array(4),me=r.createTexture();r.bindTexture(W,me),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ve=0;Ve<Ae;Ve++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(Ce+Ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return me}const ee={};ee[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Me(r.DEPTH_TEST),f.setFunc(Or),rt(!1),yt(Y0),Me(r.CULL_FACE),_t(va);function Me(W){x[W]!==!0&&(r.enable(W),x[W]=!0)}function Se(W){x[W]!==!1&&(r.disable(W),x[W]=!1)}function Je(W,Ce){return y[W]!==Ce?(r.bindFramebuffer(W,Ce),y[W]=Ce,W===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=Ce),W===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ke(W,Ce){let Ae=E,Ie=!1;if(W){Ae=_.get(Ce),Ae===void 0&&(Ae=[],_.set(Ce,Ae));const Ee=W.textures;if(Ae.length!==Ee.length||Ae[0]!==r.COLOR_ATTACHMENT0){for(let me=0,Ve=Ee.length;me<Ve;me++)Ae[me]=r.COLOR_ATTACHMENT0+me;Ae.length=Ee.length,Ie=!0}}else Ae[0]!==r.BACK&&(Ae[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(Ae)}function $e(W){return T!==W?(r.useProgram(W),T=W,!0):!1}const qt={[As]:r.FUNC_ADD,[fM]:r.FUNC_SUBTRACT,[dM]:r.FUNC_REVERSE_SUBTRACT};qt[hM]=r.MIN,qt[pM]=r.MAX;const ht={[mM]:r.ZERO,[gM]:r.ONE,[vM]:r.SRC_COLOR,[$d]:r.SRC_ALPHA,[bM]:r.SRC_ALPHA_SATURATE,[yM]:r.DST_COLOR,[_M]:r.DST_ALPHA,[xM]:r.ONE_MINUS_SRC_COLOR,[eh]:r.ONE_MINUS_SRC_ALPHA,[MM]:r.ONE_MINUS_DST_COLOR,[SM]:r.ONE_MINUS_DST_ALPHA,[EM]:r.CONSTANT_COLOR,[TM]:r.ONE_MINUS_CONSTANT_COLOR,[AM]:r.CONSTANT_ALPHA,[wM]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Ce,Ae,Ie,Ee,me,Ve,nt,Ot,At){if(W===va){C===!0&&(Se(r.BLEND),C=!1);return}if(C===!1&&(Me(r.BLEND),C=!0),W!==uM){if(W!==S||At!==L){if((M!==As||U!==As)&&(r.blendEquation(r.FUNC_ADD),M=As,U=As),At)switch(W){case Ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jd:r.blendFunc(r.ONE,r.ONE);break;case Z0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case K0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Z0:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K0:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",W);break}N=null,P=null,B=null,G=null,k.set(0,0,0),A=0,S=W,L=At}return}Ee=Ee||Ce,me=me||Ae,Ve=Ve||Ie,(Ce!==M||Ee!==U)&&(r.blendEquationSeparate(qt[Ce],qt[Ee]),M=Ce,U=Ee),(Ae!==N||Ie!==P||me!==B||Ve!==G)&&(r.blendFuncSeparate(ht[Ae],ht[Ie],ht[me],ht[Ve]),N=Ae,P=Ie,B=me,G=Ve),(nt.equals(k)===!1||Ot!==A)&&(r.blendColor(nt.r,nt.g,nt.b,Ot),k.copy(nt),A=Ot),S=W,L=!1}function Ct(W,Ce){W.side===ga?Se(r.CULL_FACE):Me(r.CULL_FACE);let Ae=W.side===jn;Ce&&(Ae=!Ae),rt(Ae),W.blending===Ur&&W.transparent===!1?_t(va):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ie=W.stencilWrite;p.setTest(Ie),Ie&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Me(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(W){pe!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),pe=W)}function yt(W){W!==oM?(Me(r.CULL_FACE),W!==V&&(W===Y0?r.cullFace(r.BACK):W===lM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),V=W}function j(W){W!==te&&(I&&r.lineWidth(W),te=W)}function kt(W,Ce,Ae){W?(Me(r.POLYGON_OFFSET_FILL),(se!==Ce||ue!==Ae)&&(se=Ce,ue=Ae,f.getReversed()&&(Ce=-Ce),r.polygonOffset(Ce,Ae))):Se(r.POLYGON_OFFSET_FILL)}function Mt(W){W?Me(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function bt(W){W===void 0&&(W=r.TEXTURE0+Q-1),ge!==W&&(r.activeTexture(W),ge=W)}function Ge(W,Ce,Ae){Ae===void 0&&(ge===null?Ae=r.TEXTURE0+Q-1:Ae=ge);let Ie=O[Ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},O[Ae]=Ie),(Ie.type!==W||Ie.texture!==Ce)&&(ge!==Ae&&(r.activeTexture(Ae),ge=Ae),r.bindTexture(W,Ce||ee[W]),Ie.type=W,Ie.texture=Ce)}function D(){const W=O[ge];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Z(){try{r.texSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function le(){try{r.texSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function we(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Re(){try{r.texStorage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Xe(){try{r.texStorage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Qe(){try{r.texImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function be(){try{r.texImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Te(W){_e.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),_e.copy(W))}function Fe(W){Ue.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ue.copy(W))}function He(W,Ce){let Ae=h.get(Ce);Ae===void 0&&(Ae=new WeakMap,h.set(Ce,Ae));let Ie=Ae.get(W);Ie===void 0&&(Ie=r.getUniformBlockIndex(Ce,W.name),Ae.set(W,Ie))}function Pe(W,Ce){const Ie=h.get(Ce).get(W);m.get(Ce)!==Ie&&(r.uniformBlockBinding(Ce,Ie,W.__bindingPointIndex),m.set(Ce,Ie))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},ge=null,O={},y={},_=new WeakMap,E=[],T=null,C=!1,S=null,M=null,N=null,P=null,U=null,B=null,G=null,k=new Lt(0,0,0),A=0,L=!1,pe=null,V=null,te=null,se=null,ue=null,_e.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Me,disable:Se,bindFramebuffer:Je,drawBuffers:Ke,useProgram:$e,setBlending:_t,setMaterial:Ct,setFlipSided:rt,setCullFace:yt,setLineWidth:j,setPolygonOffset:kt,setScissorTest:Mt,activeTexture:bt,bindTexture:Ge,unbindTexture:D,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Qe,texImage3D:be,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Re,texStorage3D:Xe,texSubImage2D:Z,texSubImage3D:le,compressedTexSubImage2D:ae,compressedTexSubImage3D:we,scissor:Te,viewport:Fe,reset:ct}}function o2(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ot,x=new WeakMap;let y;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,v){return E?new OffscreenCanvas(D,v):Kc("canvas")}function C(D,v,F){let Z=1;const le=Ge(D);if((le.width>F||le.height>F)&&(Z=F/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ae=Math.floor(Z*le.width),we=Math.floor(Z*le.height);y===void 0&&(y=T(ae,we));const Re=v?T(ae,we):y;return Re.width=ae,Re.height=we,Re.getContext("2d").drawImage(D,0,0,ae,we),at("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ae+"x"+we+")."),Re}else return"data"in D&&at("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),D;return D}function S(D){return D.generateMipmaps}function M(D){r.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,v,F,Z,le=!1){if(D!==null){if(r[D]!==void 0)return r[D];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ae=v;if(v===r.RED&&(F===r.FLOAT&&(ae=r.R32F),F===r.HALF_FLOAT&&(ae=r.R16F),F===r.UNSIGNED_BYTE&&(ae=r.R8)),v===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.R8UI),F===r.UNSIGNED_SHORT&&(ae=r.R16UI),F===r.UNSIGNED_INT&&(ae=r.R32UI),F===r.BYTE&&(ae=r.R8I),F===r.SHORT&&(ae=r.R16I),F===r.INT&&(ae=r.R32I)),v===r.RG&&(F===r.FLOAT&&(ae=r.RG32F),F===r.HALF_FLOAT&&(ae=r.RG16F),F===r.UNSIGNED_BYTE&&(ae=r.RG8)),v===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.RG8UI),F===r.UNSIGNED_SHORT&&(ae=r.RG16UI),F===r.UNSIGNED_INT&&(ae=r.RG32UI),F===r.BYTE&&(ae=r.RG8I),F===r.SHORT&&(ae=r.RG16I),F===r.INT&&(ae=r.RG32I)),v===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),F===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),F===r.UNSIGNED_INT&&(ae=r.RGB32UI),F===r.BYTE&&(ae=r.RGB8I),F===r.SHORT&&(ae=r.RGB16I),F===r.INT&&(ae=r.RGB32I)),v===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),F===r.UNSIGNED_INT&&(ae=r.RGBA32UI),F===r.BYTE&&(ae=r.RGBA8I),F===r.SHORT&&(ae=r.RGBA16I),F===r.INT&&(ae=r.RGBA32I)),v===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(ae=r.R11F_G11F_B10F)),v===r.RGBA){const we=le?Yc:Tt.getTransfer(Z);F===r.FLOAT&&(ae=r.RGBA32F),F===r.HALF_FLOAT&&(ae=r.RGBA16F),F===r.UNSIGNED_BYTE&&(ae=we===Bt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function U(D,v){let F;return D?v===null||v===ji||v===Qo?F=r.DEPTH24_STENCIL8:v===Ei?F=r.DEPTH32F_STENCIL8:v===Ko&&(F=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ji||v===Qo?F=r.DEPTH_COMPONENT24:v===Ei?F=r.DEPTH_COMPONENT32F:v===Ko&&(F=r.DEPTH_COMPONENT16),F}function B(D,v){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?v.mipmaps.length:1}function G(D){const v=D.target;v.removeEventListener("dispose",G),A(v),v.isVideoTexture&&x.delete(v)}function k(D){const v=D.target;v.removeEventListener("dispose",k),pe(v)}function A(D){const v=s.get(D);if(v.__webglInit===void 0)return;const F=D.source,Z=_.get(F);if(Z){const le=Z[v.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(D),Object.keys(Z).length===0&&_.delete(F)}s.remove(D)}function L(D){const v=s.get(D);r.deleteTexture(v.__webglTexture);const F=D.source,Z=_.get(F);delete Z[v.__cacheKey],f.memory.textures--}function pe(D){const v=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let le=0;le<v.__webglFramebuffer[Z].length;le++)r.deleteFramebuffer(v.__webglFramebuffer[Z][le]);else r.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)r.deleteFramebuffer(v.__webglFramebuffer[Z]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=D.textures;for(let Z=0,le=F.length;Z<le;Z++){const ae=s.get(F[Z]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),f.memory.textures--),s.remove(F[Z])}s.remove(D)}let V=0;function te(){V=0}function se(){const D=V;return D>=l.maxTextures&&at("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function ue(D){const v=[];return v.push(D.wrapS),v.push(D.wrapT),v.push(D.wrapR||0),v.push(D.magFilter),v.push(D.minFilter),v.push(D.anisotropy),v.push(D.internalFormat),v.push(D.format),v.push(D.type),v.push(D.generateMipmaps),v.push(D.premultiplyAlpha),v.push(D.flipY),v.push(D.unpackAlignment),v.push(D.colorSpace),v.join()}function Q(D,v){const F=s.get(D);if(D.isVideoTexture&&Mt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&F.__version!==D.version){const Z=D.image;if(Z===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(F,D,v);return}}else D.isExternalTexture&&(F.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+v)}function I(D,v){const F=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&F.__version!==D.version){ee(F,D,v);return}else D.isExternalTexture&&(F.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+v)}function H(D,v){const F=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&F.__version!==D.version){ee(F,D,v);return}i.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+v)}function de(D,v){const F=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&F.__version!==D.version){Me(F,D,v);return}i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+v)}const ge={[lh]:r.REPEAT,[ei]:r.CLAMP_TO_EDGE,[ch]:r.MIRRORED_REPEAT},O={[wn]:r.NEAREST,[NM]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[fn]:r.LINEAR,[vd]:r.LINEAR_MIPMAP_NEAREST,[Rs]:r.LINEAR_MIPMAP_LINEAR},K={[OM]:r.NEVER,[zM]:r.ALWAYS,[PM]:r.LESS,[tp]:r.LEQUAL,[IM]:r.EQUAL,[np]:r.GEQUAL,[FM]:r.GREATER,[BM]:r.NOTEQUAL};function he(D,v){if(v.type===Ei&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===vd||v.magFilter===gc||v.magFilter===Rs||v.minFilter===fn||v.minFilter===vd||v.minFilter===gc||v.minFilter===Rs)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ge[v.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ge[v.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ge[v.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,O[v.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,O[v.minFilter]),v.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,K[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===wn||v.minFilter!==gc&&v.minFilter!==Rs||v.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||s.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,l.getMaxAnisotropy())),s.get(v).__currentAnisotropy=v.anisotropy}}}function _e(D,v){let F=!1;D.__webglInit===void 0&&(D.__webglInit=!0,v.addEventListener("dispose",G));const Z=v.source;let le=_.get(Z);le===void 0&&(le={},_.set(Z,le));const ae=ue(v);if(ae!==D.__cacheKey){le[ae]===void 0&&(le[ae]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,F=!0),le[ae].usedTimes++;const we=le[D.__cacheKey];we!==void 0&&(le[D.__cacheKey].usedTimes--,we.usedTimes===0&&L(v)),D.__cacheKey=ae,D.__webglTexture=le[ae].texture}return F}function Ue(D,v,F){return Math.floor(Math.floor(D/F)/v)}function Ye(D,v,F,Z){const ae=D.updateRanges;if(ae.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,F,Z,v.data);else{ae.sort((be,Te)=>be.start-Te.start);let we=0;for(let be=1;be<ae.length;be++){const Te=ae[we],Fe=ae[be],He=Te.start+Te.count,Pe=Ue(Fe.start,v.width,4),ct=Ue(Te.start,v.width,4);Fe.start<=He+1&&Pe===ct&&Ue(Fe.start+Fe.count-1,v.width,4)===Pe?Te.count=Math.max(Te.count,Fe.start+Fe.count-Te.start):(++we,ae[we]=Fe)}ae.length=we+1;const Re=r.getParameter(r.UNPACK_ROW_LENGTH),Xe=r.getParameter(r.UNPACK_SKIP_PIXELS),Qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let be=0,Te=ae.length;be<Te;be++){const Fe=ae[be],He=Math.floor(Fe.start/4),Pe=Math.ceil(Fe.count/4),ct=He%v.width,W=Math.floor(He/v.width),Ce=Pe,Ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ct,W,Ce,Ae,F,Z,v.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Re),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qe)}}function ee(D,v,F){let Z=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=r.TEXTURE_3D);const le=_e(D,v),ae=v.source;i.bindTexture(Z,D.__webglTexture,r.TEXTURE0+F);const we=s.get(ae);if(ae.version!==we.__version||le===!0){i.activeTexture(r.TEXTURE0+F);const Re=Tt.getPrimaries(Tt.workingColorSpace),Xe=v.colorSpace===Ja?null:Tt.getPrimaries(v.colorSpace),Qe=v.colorSpace===Ja||Re===Xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let be=C(v.image,!1,l.maxTextureSize);be=bt(v,be);const Te=c.convert(v.format,v.colorSpace),Fe=c.convert(v.type);let He=P(v.internalFormat,Te,Fe,v.colorSpace,v.isVideoTexture);he(Z,v);let Pe;const ct=v.mipmaps,W=v.isVideoTexture!==!0,Ce=we.__version===void 0||le===!0,Ae=ae.dataReady,Ie=B(v,be);if(v.isDepthTexture)He=U(v.format===Cs,v.type),Ce&&(W?i.texStorage2D(r.TEXTURE_2D,1,He,be.width,be.height):i.texImage2D(r.TEXTURE_2D,0,He,be.width,be.height,0,Te,Fe,null));else if(v.isDataTexture)if(ct.length>0){W&&Ce&&i.texStorage2D(r.TEXTURE_2D,Ie,He,ct[0].width,ct[0].height);for(let Ee=0,me=ct.length;Ee<me;Ee++)Pe=ct[Ee],W?Ae&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Te,Fe,Pe.data):i.texImage2D(r.TEXTURE_2D,Ee,He,Pe.width,Pe.height,0,Te,Fe,Pe.data);v.generateMipmaps=!1}else W?(Ce&&i.texStorage2D(r.TEXTURE_2D,Ie,He,be.width,be.height),Ae&&Ye(v,be,Te,Fe)):i.texImage2D(r.TEXTURE_2D,0,He,be.width,be.height,0,Te,Fe,be.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){W&&Ce&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,ct[0].width,ct[0].height,be.depth);for(let Ee=0,me=ct.length;Ee<me;Ee++)if(Pe=ct[Ee],v.format!==fi)if(Te!==null)if(W){if(Ae)if(v.layerUpdates.size>0){const Ve=bv(Pe.width,Pe.height,v.format,v.type);for(const nt of v.layerUpdates){const Ot=Pe.data.subarray(nt*Ve/Pe.data.BYTES_PER_ELEMENT,(nt+1)*Ve/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,nt,Pe.width,Pe.height,1,Te,Ot)}v.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Pe.width,Pe.height,be.depth,Te,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,He,Pe.width,Pe.height,be.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ae&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Pe.width,Pe.height,be.depth,Te,Fe,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ee,He,Pe.width,Pe.height,be.depth,0,Te,Fe,Pe.data)}else{W&&Ce&&i.texStorage2D(r.TEXTURE_2D,Ie,He,ct[0].width,ct[0].height);for(let Ee=0,me=ct.length;Ee<me;Ee++)Pe=ct[Ee],v.format!==fi?Te!==null?W?Ae&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Te,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,Ee,He,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ae&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Te,Fe,Pe.data):i.texImage2D(r.TEXTURE_2D,Ee,He,Pe.width,Pe.height,0,Te,Fe,Pe.data)}else if(v.isDataArrayTexture)if(W){if(Ce&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,He,be.width,be.height,be.depth),Ae)if(v.layerUpdates.size>0){const Ee=bv(be.width,be.height,v.format,v.type);for(const me of v.layerUpdates){const Ve=be.data.subarray(me*Ee/be.data.BYTES_PER_ELEMENT,(me+1)*Ee/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,be.width,be.height,1,Te,Fe,Ve)}v.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Te,Fe,be.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,He,be.width,be.height,be.depth,0,Te,Fe,be.data);else if(v.isData3DTexture)W?(Ce&&i.texStorage3D(r.TEXTURE_3D,Ie,He,be.width,be.height,be.depth),Ae&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Te,Fe,be.data)):i.texImage3D(r.TEXTURE_3D,0,He,be.width,be.height,be.depth,0,Te,Fe,be.data);else if(v.isFramebufferTexture){if(Ce)if(W)i.texStorage2D(r.TEXTURE_2D,Ie,He,be.width,be.height);else{let Ee=be.width,me=be.height;for(let Ve=0;Ve<Ie;Ve++)i.texImage2D(r.TEXTURE_2D,Ve,He,Ee,me,0,Te,Fe,null),Ee>>=1,me>>=1}}else if(ct.length>0){if(W&&Ce){const Ee=Ge(ct[0]);i.texStorage2D(r.TEXTURE_2D,Ie,He,Ee.width,Ee.height)}for(let Ee=0,me=ct.length;Ee<me;Ee++)Pe=ct[Ee],W?Ae&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Te,Fe,Pe):i.texImage2D(r.TEXTURE_2D,Ee,He,Te,Fe,Pe);v.generateMipmaps=!1}else if(W){if(Ce){const Ee=Ge(be);i.texStorage2D(r.TEXTURE_2D,Ie,He,Ee.width,Ee.height)}Ae&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,Fe,be)}else i.texImage2D(r.TEXTURE_2D,0,He,Te,Fe,be);S(v)&&M(Z),we.__version=ae.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function Me(D,v,F){if(v.image.length!==6)return;const Z=_e(D,v),le=v.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+F);const ae=s.get(le);if(le.version!==ae.__version||Z===!0){i.activeTexture(r.TEXTURE0+F);const we=Tt.getPrimaries(Tt.workingColorSpace),Re=v.colorSpace===Ja?null:Tt.getPrimaries(v.colorSpace),Xe=v.colorSpace===Ja||we===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Qe=v.isCompressedTexture||v.image[0].isCompressedTexture,be=v.image[0]&&v.image[0].isDataTexture,Te=[];for(let me=0;me<6;me++)!Qe&&!be?Te[me]=C(v.image[me],!0,l.maxCubemapSize):Te[me]=be?v.image[me].image:v.image[me],Te[me]=bt(v,Te[me]);const Fe=Te[0],He=c.convert(v.format,v.colorSpace),Pe=c.convert(v.type),ct=P(v.internalFormat,He,Pe,v.colorSpace),W=v.isVideoTexture!==!0,Ce=ae.__version===void 0||Z===!0,Ae=le.dataReady;let Ie=B(v,Fe);he(r.TEXTURE_CUBE_MAP,v);let Ee;if(Qe){W&&Ce&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,Fe.width,Fe.height);for(let me=0;me<6;me++){Ee=Te[me].mipmaps;for(let Ve=0;Ve<Ee.length;Ve++){const nt=Ee[Ve];v.format!==fi?He!==null?W?Ae&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve,0,0,nt.width,nt.height,He,nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve,ct,nt.width,nt.height,0,nt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve,0,0,nt.width,nt.height,He,Pe,nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve,ct,nt.width,nt.height,0,He,Pe,nt.data)}}}else{if(Ee=v.mipmaps,W&&Ce){Ee.length>0&&Ie++;const me=Ge(Te[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,me.width,me.height)}for(let me=0;me<6;me++)if(be){W?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Te[me].width,Te[me].height,He,Pe,Te[me].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,Te[me].width,Te[me].height,0,He,Pe,Te[me].data);for(let Ve=0;Ve<Ee.length;Ve++){const Ot=Ee[Ve].image[me].image;W?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve+1,0,0,Ot.width,Ot.height,He,Pe,Ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve+1,ct,Ot.width,Ot.height,0,He,Pe,Ot.data)}}else{W?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,He,Pe,Te[me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,He,Pe,Te[me]);for(let Ve=0;Ve<Ee.length;Ve++){const nt=Ee[Ve];W?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve+1,0,0,He,Pe,nt.image[me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ve+1,ct,He,Pe,nt.image[me])}}}S(v)&&M(r.TEXTURE_CUBE_MAP),ae.__version=le.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function Se(D,v,F,Z,le,ae){const we=c.convert(F.format,F.colorSpace),Re=c.convert(F.type),Xe=P(F.internalFormat,we,Re,F.colorSpace),Qe=s.get(v),be=s.get(F);if(be.__renderTarget=v,!Qe.__hasExternalTextures){const Te=Math.max(1,v.width>>ae),Fe=Math.max(1,v.height>>ae);le===r.TEXTURE_3D||le===r.TEXTURE_2D_ARRAY?i.texImage3D(le,ae,Xe,Te,Fe,v.depth,0,we,Re,null):i.texImage2D(le,ae,Xe,Te,Fe,0,we,Re,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),kt(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,le,be.__webglTexture,0,j(v)):(le===r.TEXTURE_2D||le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,le,be.__webglTexture,ae),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(D,v,F){if(r.bindRenderbuffer(r.RENDERBUFFER,D),v.depthBuffer){const Z=v.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,ae=U(v.stencilBuffer,le),we=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;kt(v)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(v),ae,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(v),ae,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ae,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,D)}else{const Z=v.textures;for(let le=0;le<Z.length;le++){const ae=Z[le],we=c.convert(ae.format,ae.colorSpace),Re=c.convert(ae.type),Xe=P(ae.internalFormat,we,Re,ae.colorSpace);kt(v)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(v),Xe,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(v),Xe,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Xe,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ke(D,v,F){const Z=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=s.get(v.depthTexture);if(le.__renderTarget=v,(!le.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(le.__webglInit===void 0&&(le.__webglInit=!0,v.depthTexture.addEventListener("dispose",G)),le.__webglTexture===void 0){le.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),he(r.TEXTURE_CUBE_MAP,v.depthTexture);const Qe=c.convert(v.depthTexture.format),be=c.convert(v.depthTexture.type);let Te;v.depthTexture.format===_a?Te=r.DEPTH_COMPONENT24:v.depthTexture.format===Cs&&(Te=r.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Te,v.width,v.height,0,Qe,be,null)}}else Q(v.depthTexture,0);const ae=le.__webglTexture,we=j(v),Re=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,Xe=v.depthTexture.format===Cs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===_a)kt(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Re,ae,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Re,ae,0);else if(v.depthTexture.format===Cs)kt(v)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xe,Re,ae,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,Xe,Re,ae,0);else throw new Error("Unknown depthTexture format")}function $e(D){const v=s.get(D),F=D.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const le=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),v.__depthDisposeCallback=le}v.__boundDepthTexture=Z}if(D.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)Ke(v.__webglFramebuffer[Z],D,Z);else{const Z=D.texture.mipmaps;Z&&Z.length>0?Ke(v.__webglFramebuffer[0],D,0):Ke(v.__webglFramebuffer,D,0)}else if(F){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=r.createRenderbuffer(),Je(v.__webglDepthbuffer[Z],D,!1);else{const le=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ae)}}else{const Z=D.texture.mipmaps;if(Z&&Z.length>0?i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Je(v.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ae)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(D,v,F){const Z=s.get(D);v!==void 0&&Se(Z.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&$e(D)}function ht(D){const v=D.texture,F=s.get(D),Z=s.get(v);D.addEventListener("dispose",k);const le=D.textures,ae=D.isWebGLCubeRenderTarget===!0,we=le.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=v.version,f.memory.textures++),ae){F.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[Re]=[];for(let Xe=0;Xe<v.mipmaps.length;Xe++)F.__webglFramebuffer[Re][Xe]=r.createFramebuffer()}else F.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let Re=0;Re<v.mipmaps.length;Re++)F.__webglFramebuffer[Re]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(we)for(let Re=0,Xe=le.length;Re<Xe;Re++){const Qe=s.get(le[Re]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&kt(D)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Re=0;Re<le.length;Re++){const Xe=le[Re];F.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[Re]);const Qe=c.convert(Xe.format,Xe.colorSpace),be=c.convert(Xe.type),Te=P(Xe.internalFormat,Qe,be,Xe.colorSpace,D.isXRRenderTarget===!0),Fe=j(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Te,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,F.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(F.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),he(r.TEXTURE_CUBE_MAP,v);for(let Re=0;Re<6;Re++)if(v.mipmaps&&v.mipmaps.length>0)for(let Xe=0;Xe<v.mipmaps.length;Xe++)Se(F.__webglFramebuffer[Re][Xe],D,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe);else Se(F.__webglFramebuffer[Re],D,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(v)&&M(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(we){for(let Re=0,Xe=le.length;Re<Xe;Re++){const Qe=le[Re],be=s.get(Qe);let Te=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Te,be.__webglTexture),he(Te,Qe),Se(F.__webglFramebuffer,D,Qe,r.COLOR_ATTACHMENT0+Re,Te,0),S(Qe)&&M(Te)}i.unbindTexture()}else{let Re=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Re=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Re,Z.__webglTexture),he(Re,v),v.mipmaps&&v.mipmaps.length>0)for(let Xe=0;Xe<v.mipmaps.length;Xe++)Se(F.__webglFramebuffer[Xe],D,v,r.COLOR_ATTACHMENT0,Re,Xe);else Se(F.__webglFramebuffer,D,v,r.COLOR_ATTACHMENT0,Re,0);S(v)&&M(Re),i.unbindTexture()}D.depthBuffer&&$e(D)}function _t(D){const v=D.textures;for(let F=0,Z=v.length;F<Z;F++){const le=v[F];if(S(le)){const ae=N(D),we=s.get(le).__webglTexture;i.bindTexture(ae,we),M(ae),i.unbindTexture()}}}const Ct=[],rt=[];function yt(D){if(D.samples>0){if(kt(D)===!1){const v=D.textures,F=D.width,Z=D.height;let le=r.COLOR_BUFFER_BIT;const ae=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=s.get(D),Re=v.length>1;if(Re)for(let Qe=0;Qe<v.length;Qe++)i.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Xe=D.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Qe=0;Qe<v.length;Qe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(le|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(le|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[Qe]);const be=s.get(v[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,F,Z,0,0,F,Z,le,r.NEAREST),m===!0&&(Ct.length=0,rt.length=0,Ct.push(r.COLOR_ATTACHMENT0+Qe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ct.push(ae),rt.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,rt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let Qe=0;Qe<v.length;Qe++){i.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,we.__webglColorRenderbuffer[Qe]);const be=s.get(v[Qe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const v=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function j(D){return Math.min(l.maxSamples,D.samples)}function kt(D){const v=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Mt(D){const v=f.render.frame;x.get(D)!==v&&(x.set(D,v),D.update())}function bt(D,v){const F=D.colorSpace,Z=D.format,le=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||F!==Fr&&F!==Ja&&(Tt.getTransfer(F)===Bt?(Z!==fi||le!==ui)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",F)),v}function Ge(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=se,this.resetTextureUnits=te,this.setTexture2D=Q,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=de,this.rebindTextures=qt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function l2(r,e){function i(s,l=Ja){let c;const f=Tt.getTransfer(l);if(s===ui)return r.UNSIGNED_BYTE;if(s===Kh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Qh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===xx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===_x)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===gx)return r.BYTE;if(s===vx)return r.SHORT;if(s===Ko)return r.UNSIGNED_SHORT;if(s===Zh)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Ei)return r.FLOAT;if(s===ki)return r.HALF_FLOAT;if(s===Sx)return r.ALPHA;if(s===yx)return r.RGB;if(s===fi)return r.RGBA;if(s===_a)return r.DEPTH_COMPONENT;if(s===Cs)return r.DEPTH_STENCIL;if(s===Mx)return r.RED;if(s===Jh)return r.RED_INTEGER;if(s===Ir)return r.RG;if(s===$h)return r.RG_INTEGER;if(s===ep)return r.RGBA_INTEGER;if(s===Vc||s===jc||s===kc||s===Xc)if(f===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===uh||s===fh||s===dh||s===hh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ph||s===mh||s===gh||s===vh||s===xh||s===_h||s===Sh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ph||s===mh)return f===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===gh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===vh)return c.COMPRESSED_R11_EAC;if(s===xh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===_h)return c.COMPRESSED_RG11_EAC;if(s===Sh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===yh||s===Mh||s===bh||s===Eh||s===Th||s===Ah||s===wh||s===Rh||s===Ch||s===Nh||s===Dh||s===Uh||s===Lh||s===Oh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===yh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Eh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Th)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ah)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ph||s===Ih||s===Fh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ph)return f===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ih)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Bh||s===zh||s===Hh||s===Gh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Bh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===zh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const c2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u2=`
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

}`;class f2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Ox(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Xi({vertexShader:c2,fragmentShader:u2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new Ns(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d2 extends zr{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,x=null,y=null,_=null,E=null,T=null;const C=typeof XRWebGLBinding<"u",S=new f2,M={},N=i.getContextAttributes();let P=null,U=null;const B=[],G=[],k=new ot;let A=null;const L=new Mi;L.viewport=new en;const pe=new Mi;pe.viewport=new en;const V=[L,pe],te=new bb;let se=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Me=B[ee];return Me===void 0&&(Me=new Td,B[ee]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ee){let Me=B[ee];return Me===void 0&&(Me=new Td,B[ee]=Me),Me.getGripSpace()},this.getHand=function(ee){let Me=B[ee];return Me===void 0&&(Me=new Td,B[ee]=Me),Me.getHandSpace()};function Q(ee){const Me=G.indexOf(ee.inputSource);if(Me===-1)return;const Se=B[Me];Se!==void 0&&(Se.update(ee.inputSource,ee.frame,h||f),Se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function I(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let ee=0;ee<B.length;ee++){const Me=G[ee];Me!==null&&(G[ee]=null,B[ee].disconnect(Me))}se=null,ue=null,S.reset();for(const ee in M)delete M[ee];e.setRenderTarget(P),E=null,_=null,y=null,l=null,U=null,Ye.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){p=ee,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),N.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(k),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Je=null,Ke=null;N.depth&&(Ke=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=N.stencil?Cs:_a,Je=N.stencil?Qo:ji);const $e={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:c};y=this.getBinding(),_=y.createProjectionLayer($e),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),U=new Ti(_.textureWidth,_.textureHeight,{format:fi,type:ui,depthTexture:new Jo(_.textureWidth,_.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new Ti(E.framebufferWidth,E.framebufferHeight,{format:fi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Ye.setContext(l),Ye.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(ee){for(let Me=0;Me<ee.removed.length;Me++){const Se=ee.removed[Me],Je=G.indexOf(Se);Je>=0&&(G[Je]=null,B[Je].disconnect(Se))}for(let Me=0;Me<ee.added.length;Me++){const Se=ee.added[Me];let Je=G.indexOf(Se);if(Je===-1){for(let $e=0;$e<B.length;$e++)if($e>=G.length){G.push(Se),Je=$e;break}else if(G[$e]===null){G[$e]=Se,Je=$e;break}if(Je===-1)break}const Ke=B[Je];Ke&&Ke.connect(Se)}}const de=new oe,ge=new oe;function O(ee,Me,Se){de.setFromMatrixPosition(Me.matrixWorld),ge.setFromMatrixPosition(Se.matrixWorld);const Je=de.distanceTo(ge),Ke=Me.projectionMatrix.elements,$e=Se.projectionMatrix.elements,qt=Ke[14]/(Ke[10]-1),ht=Ke[14]/(Ke[10]+1),_t=(Ke[9]+1)/Ke[5],Ct=(Ke[9]-1)/Ke[5],rt=(Ke[8]-1)/Ke[0],yt=($e[8]+1)/$e[0],j=qt*rt,kt=qt*yt,Mt=Je/(-rt+yt),bt=Mt*-rt;if(Me.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(bt),ee.translateZ(Mt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ke[10]===-1)ee.projectionMatrix.copy(Me.projectionMatrix),ee.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const Ge=qt+Mt,D=ht+Mt,v=j-bt,F=kt+(Je-bt),Z=_t*ht/D*Ge,le=Ct*ht/D*Ge;ee.projectionMatrix.makePerspective(v,F,Z,le,Ge,D),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function K(ee,Me){Me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let Me=ee.near,Se=ee.far;S.texture!==null&&(S.depthNear>0&&(Me=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),te.near=pe.near=L.near=Me,te.far=pe.far=L.far=Se,(se!==te.near||ue!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),se=te.near,ue=te.far),te.layers.mask=ee.layers.mask|6,L.layers.mask=te.layers.mask&-5,pe.layers.mask=te.layers.mask&-3;const Je=ee.parent,Ke=te.cameras;K(te,Je);for(let $e=0;$e<Ke.length;$e++)K(Ke[$e],Je);Ke.length===2?O(te,L,pe):te.projectionMatrix.copy(L.projectionMatrix),he(ee,te,Je)};function he(ee,Me,Se){Se===null?ee.matrix.copy(Me.matrixWorld):(ee.matrix.copy(Se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Me.projectionMatrix),ee.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Vh*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(ee){m=ee,_!==null&&(_.fixedFoveation=ee),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(te)},this.getCameraTexture=function(ee){return M[ee]};let _e=null;function Ue(ee,Me){if(x=Me.getViewerPose(h||f),T=Me,x!==null){const Se=x.views;E!==null&&(e.setRenderTargetFramebuffer(U,E.framebuffer),e.setRenderTarget(U));let Je=!1;Se.length!==te.cameras.length&&(te.cameras.length=0,Je=!0);for(let ht=0;ht<Se.length;ht++){const _t=Se[ht];let Ct=null;if(E!==null)Ct=E.getViewport(_t);else{const yt=y.getViewSubImage(_,_t);Ct=yt.viewport,ht===0&&(e.setRenderTargetTextures(U,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(U))}let rt=V[ht];rt===void 0&&(rt=new Mi,rt.layers.enable(ht),rt.viewport=new en,V[ht]=rt),rt.matrix.fromArray(_t.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(_t.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ht===0&&(te.matrix.copy(rt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Je===!0&&te.cameras.push(rt)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){y=s.getBinding();const ht=y.getDepthInformation(Se[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,l.renderState)}if(Ke&&Ke.includes("camera-access")&&C){e.state.unbindTexture(),y=s.getBinding();for(let ht=0;ht<Se.length;ht++){const _t=Se[ht].camera;if(_t){let Ct=M[_t];Ct||(Ct=new Ox,M[_t]=Ct);const rt=y.getCameraImage(_t);Ct.sourceTexture=rt}}}}for(let Se=0;Se<B.length;Se++){const Je=G[Se],Ke=B[Se];Je!==null&&Ke!==void 0&&Ke.update(Je,Me,h||f)}_e&&_e(ee,Me),Me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Me}),T=null}const Ye=new Fx;Ye.setAnimationLoop(Ue),this.setAnimationLoop=function(ee){_e=ee},this.dispose=function(){}}}const Es=new Sa,h2=new on;function p2(r,e){function i(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function s(S,M){M.color.getRGB(S.fogColor.value,Px(r)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function l(S,M,N,P,U){M.isMeshBasicMaterial?c(S,M):M.isMeshLambertMaterial?(c(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(S,M),y(S,M)):M.isMeshPhongMaterial?(c(S,M),x(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(S,M),_(S,M),M.isMeshPhysicalMaterial&&E(S,M,U)):M.isMeshMatcapMaterial?(c(S,M),T(S,M)):M.isMeshDepthMaterial?c(S,M):M.isMeshDistanceMaterial?(c(S,M),C(S,M)):M.isMeshNormalMaterial?c(S,M):M.isLineBasicMaterial?(f(S,M),M.isLineDashedMaterial&&p(S,M)):M.isPointsMaterial?m(S,M,N,P):M.isSpriteMaterial?h(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,i(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,i(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===jn&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,i(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===jn&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,i(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,i(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);const N=e.get(M),P=N.envMap,U=N.envMapRotation;P&&(S.envMap.value=P,Es.copy(U),Es.x*=-1,Es.y*=-1,Es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),S.envMapRotation.value.setFromMatrix4(h2.makeRotationFromEuler(Es)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,S.aoMapTransform))}function f(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,i(M.map,S.mapTransform))}function p(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function m(S,M,N,P){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*N,S.scale.value=P*.5,M.map&&(S.map.value=M.map,i(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function h(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,i(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function x(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function y(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function _(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function E(S,M,N){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===jn&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,M){M.matcap&&(S.matcap.value=M.matcap)}function C(S,M){const N=e.get(M).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function m2(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,P){const U=P.program;s.uniformBlockBinding(N,U)}function h(N,P){let U=l[N.id];U===void 0&&(T(N),U=x(N),l[N.id]=U,N.addEventListener("dispose",S));const B=P.program;s.updateUBOMapping(N,B);const G=e.render.frame;c[N.id]!==G&&(_(N),c[N.id]=G)}function x(N){const P=y();N.__bindingPointIndex=P;const U=r.createBuffer(),B=N.__size,G=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,B,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,U),U}function y(){for(let N=0;N<p;N++)if(f.indexOf(N)===-1)return f.push(N),N;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const P=l[N.id],U=N.uniforms,B=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let G=0,k=U.length;G<k;G++){const A=Array.isArray(U[G])?U[G]:[U[G]];for(let L=0,pe=A.length;L<pe;L++){const V=A[L];if(E(V,G,L,B)===!0){const te=V.__offset,se=Array.isArray(V.value)?V.value:[V.value];let ue=0;for(let Q=0;Q<se.length;Q++){const I=se[Q],H=C(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,te+ue,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,ue),ue+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(N,P,U,B){const G=N.value,k=P+"_"+U;if(B[k]===void 0)return typeof G=="number"||typeof G=="boolean"?B[k]=G:B[k]=G.clone(),!0;{const A=B[k];if(typeof G=="number"||typeof G=="boolean"){if(A!==G)return B[k]=G,!0}else if(A.equals(G)===!1)return A.copy(G),!0}return!1}function T(N){const P=N.uniforms;let U=0;const B=16;for(let k=0,A=P.length;k<A;k++){const L=Array.isArray(P[k])?P[k]:[P[k]];for(let pe=0,V=L.length;pe<V;pe++){const te=L[pe],se=Array.isArray(te.value)?te.value:[te.value];for(let ue=0,Q=se.length;ue<Q;ue++){const I=se[ue],H=C(I),de=U%B,ge=de%H.boundary,O=de+ge;U+=ge,O!==0&&B-O<H.storage&&(U+=B-O),te.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=U,U+=H.storage}}}const G=U%B;return G>0&&(U+=B-G),N.__size=U,N.__cache={},this}function C(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",N),P}function S(N){const P=N.target;P.removeEventListener("dispose",S);const U=f.indexOf(P.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function M(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:h,dispose:M}}const g2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function v2(){return Bi===null&&(Bi=new Dx(g2,16,16,Ir,ki),Bi.name="DFG_LUT",Bi.minFilter=fn,Bi.magFilter=fn,Bi.wrapS=ei,Bi.wrapT=ei,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class x2{constructor(e={}){const{canvas:i=GM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:_=!1,outputBufferType:E=ui}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const C=E,S=new Set([ep,$h,Jh]),M=new Set([ui,ji,Ko,Qo,Kh,Qh]),N=new Uint32Array(4),P=new Int32Array(4);let U=null,B=null;const G=[],k=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let pe=!1;this._outputColorSpace=ci;let V=0,te=0,se=null,ue=-1,Q=null;const I=new en,H=new en;let de=null;const ge=new Lt(0);let O=0,K=i.width,he=i.height,_e=1,Ue=null,Ye=null;const ee=new en(0,0,K,he),Me=new en(0,0,K,he);let Se=!1;const Je=new Ux;let Ke=!1,$e=!1;const qt=new on,ht=new oe,_t=new en,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function yt(){return se===null?_e:1}let j=s;function kt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Yh}`),i.addEventListener("webglcontextlost",Ve,!1),i.addEventListener("webglcontextrestored",nt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),j===null){const q="webgl2";if(j=kt(q,R),j===null)throw kt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Rt("WebGLRenderer: "+R.message),R}let Mt,bt,Ge,D,v,F,Z,le,ae,we,Re,Xe,Qe,be,Te,Fe,He,Pe,ct,W,Ce,Ae,Ie;function Ee(){Mt=new x1(j),Mt.init(),Ce=new l2(j,Mt),bt=new u1(j,Mt,e,Ce),Ge=new r2(j,Mt),bt.reversedDepthBuffer&&_&&Ge.buffers.depth.setReversed(!0),D=new y1(j),v=new WA,F=new o2(j,Mt,Ge,v,bt,Ce,D),Z=new v1(L),le=new Ab(j),Ae=new l1(j,le),ae=new _1(j,le,D,Ae),we=new b1(j,ae,le,Ae,D),Pe=new M1(j,bt,F),Te=new f1(v),Re=new XA(L,Z,Mt,bt,Ae,Te),Xe=new p2(L,v),Qe=new YA,be=new e2(Mt),He=new o1(L,Z,Ge,we,T,m),Fe=new s2(L,we,bt),Ie=new m2(j,D,bt,Ge),ct=new c1(j,Mt,D),W=new S1(j,Mt,D),D.programs=Re.programs,L.capabilities=bt,L.extensions=Mt,L.properties=v,L.renderLists=Qe,L.shadowMap=Fe,L.state=Ge,L.info=D}Ee(),C!==ui&&(A=new T1(C,i.width,i.height,l,c));const me=new d2(L,j);this.xr=me,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=Mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(K,he,!1))},this.getSize=function(R){return R.set(K,he)},this.setSize=function(R,q,fe=!0){if(me.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,he=q,i.width=Math.floor(R*_e),i.height=Math.floor(q*_e),fe===!0&&(i.style.width=R+"px",i.style.height=q+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(K*_e,he*_e).floor()},this.setDrawingBufferSize=function(R,q,fe){K=R,he=q,_e=fe,i.width=Math.floor(R*fe),i.height=Math.floor(q*fe),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(C===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,q,fe,ie){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,q,fe,ie),Ge.viewport(I.copy(ee).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(Me)},this.setScissor=function(R,q,fe,ie){R.isVector4?Me.set(R.x,R.y,R.z,R.w):Me.set(R,q,fe,ie),Ge.scissor(H.copy(Me).multiplyScalar(_e).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){Ge.setScissorTest(Se=R)},this.setOpaqueSort=function(R){Ue=R},this.setTransparentSort=function(R){Ye=R},this.getClearColor=function(R){return R.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,fe=!0){let ie=0;if(R){let J=!1;if(se!==null){const Le=se.texture.format;J=S.has(Le)}if(J){const Le=se.texture.type,Be=M.has(Le),De=He.getClearColor(),je=He.getClearAlpha(),We=De.r,st=De.g,lt=De.b;Be?(N[0]=We,N[1]=st,N[2]=lt,N[3]=je,j.clearBufferuiv(j.COLOR,0,N)):(P[0]=We,P[1]=st,P[2]=lt,P[3]=je,j.clearBufferiv(j.COLOR,0,P))}else ie|=j.COLOR_BUFFER_BIT}q&&(ie|=j.DEPTH_BUFFER_BIT),fe&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ve,!1),i.removeEventListener("webglcontextrestored",nt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),He.dispose(),Qe.dispose(),be.dispose(),v.dispose(),Z.dispose(),we.dispose(),Ae.dispose(),Ie.dispose(),Re.dispose(),me.dispose(),me.removeEventListener("sessionstart",Is),me.removeEventListener("sessionend",sl),Wi.stop()};function Ve(R){R.preventDefault(),tv("WebGLRenderer: Context Lost."),pe=!0}function nt(){tv("WebGLRenderer: Context Restored."),pe=!1;const R=D.autoReset,q=Fe.enabled,fe=Fe.autoUpdate,ie=Fe.needsUpdate,J=Fe.type;Ee(),D.autoReset=R,Fe.enabled=q,Fe.autoUpdate=fe,Fe.needsUpdate=ie,Fe.type=J}function Ot(R){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function At(R){const q=R.target;q.removeEventListener("dispose",At),hi(q)}function hi(R){xn(R),v.remove(R)}function xn(R){const q=v.get(R).programs;q!==void 0&&(q.forEach(function(fe){Re.releaseProgram(fe)}),R.isShaderMaterial&&Re.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,fe,ie,J,Le){q===null&&(q=Ct);const Be=J.isMesh&&J.matrixWorld.determinant()<0,De=rl(R,q,fe,ie,J);Ge.setMaterial(ie,Be);let je=fe.index,We=1;if(ie.wireframe===!0){if(je=ae.getWireframeAttribute(fe),je===void 0)return;We=2}const st=fe.drawRange,lt=fe.attributes.position;let ze=st.start*We,Nt=(st.start+st.count)*We;Le!==null&&(ze=Math.max(ze,Le.start*We),Nt=Math.min(Nt,(Le.start+Le.count)*We)),je!==null?(ze=Math.max(ze,0),Nt=Math.min(Nt,je.count)):lt!=null&&(ze=Math.max(ze,0),Nt=Math.min(Nt,lt.count));const Kt=Nt-ze;if(Kt<0||Kt===1/0)return;Ae.setup(J,ie,De,fe,je);let Vt,Dt=ct;if(je!==null&&(Vt=le.get(je),Dt=W,Dt.setIndex(Vt)),J.isMesh)ie.wireframe===!0?(Ge.setLineWidth(ie.wireframeLinewidth*yt()),Dt.setMode(j.LINES)):Dt.setMode(j.TRIANGLES);else if(J.isLine){let nn=ie.linewidth;nn===void 0&&(nn=1),Ge.setLineWidth(nn*yt()),J.isLineSegments?Dt.setMode(j.LINES):J.isLineLoop?Dt.setMode(j.LINE_LOOP):Dt.setMode(j.LINE_STRIP)}else J.isPoints?Dt.setMode(j.POINTS):J.isSprite&&Dt.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Qc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const nn=J._multiDrawStarts,qe=J._multiDrawCounts,Xt=J._multiDrawCount,xt=je?le.get(je).bytesPerElement:1,Pn=v.get(ie).currentProgram.getUniforms();for(let In=0;In<Xt;In++)Pn.setValue(j,"_gl_DrawID",In),Dt.render(nn[In]/xt,qe[In])}else if(J.isInstancedMesh)Dt.renderInstances(ze,Kt,J.count);else if(fe.isInstancedBufferGeometry){const nn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,qe=Math.min(fe.instanceCount,nn);Dt.renderInstances(ze,Kt,qe)}else Dt.render(ze,Kt)};function hn(R,q,fe){R.transparent===!0&&R.side===ga&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,Ci(R,q,fe),R.side=ns,R.needsUpdate=!0,Ci(R,q,fe),R.side=ga):Ci(R,q,fe)}this.compile=function(R,q,fe=null){fe===null&&(fe=R),B=be.get(fe),B.init(q),k.push(B),fe.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),R!==fe&&R.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),B.setupLights();const ie=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Le=J.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const De=Le[Be];hn(De,fe,J),ie.add(De)}else hn(Le,fe,J),ie.add(Le)}),B=k.pop(),ie},this.compileAsync=function(R,q,fe=null){const ie=this.compile(R,q,fe);return new Promise(J=>{function Le(){if(ie.forEach(function(Be){v.get(Be).currentProgram.isReady()&&ie.delete(Be)}),ie.size===0){J(R);return}setTimeout(Le,10)}Mt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let _n=null;function ya(R){_n&&_n(R)}function Is(){Wi.stop()}function sl(){Wi.start()}const Wi=new Fx;Wi.setAnimationLoop(ya),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(R){_n=R,me.setAnimationLoop(R),R===null?Wi.stop():Wi.start()},me.addEventListener("sessionstart",Is),me.addEventListener("sessionend",sl),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(pe===!0)return;const fe=me.enabled===!0&&me.isPresenting===!0,ie=A!==null&&(se===null||fe)&&A.begin(L,se);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(q),q=me.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,q,se),B=be.get(R,k.length),B.init(q),k.push(B),qt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Je.setFromProjectionMatrix(qt,Gi,q.reversedDepth),$e=this.localClippingEnabled,Ke=Te.init(this.clippingPlanes,$e),U=Qe.get(R,G.length),U.init(),G.push(U),me.enabled===!0&&me.isPresenting===!0){const Be=L.xr.getDepthSensingMesh();Be!==null&&Fs(Be,q,-1/0,L.sortObjects)}Fs(R,q,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(Ue,Ye),rt=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,rt&&He.addToRenderList(U,R),this.info.render.frame++,Ke===!0&&Te.beginShadows();const J=B.state.shadowsArray;if(Fe.render(J,R,q),Ke===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&A.hasRenderPass())===!1){const Be=U.opaque,De=U.transmissive;if(B.setupLights(),q.isArrayCamera){const je=q.cameras;if(De.length>0)for(let We=0,st=je.length;We<st;We++){const lt=je[We];Bs(Be,De,R,lt)}rt&&He.render(R);for(let We=0,st=je.length;We<st;We++){const lt=je[We];Ma(U,R,lt,lt.viewport)}}else De.length>0&&Bs(Be,De,R,q),rt&&He.render(R),Ma(U,R,q)}se!==null&&te===0&&(F.updateMultisampleRenderTarget(se),F.updateRenderTargetMipmap(se)),ie&&A.end(L),R.isScene===!0&&R.onAfterRender(L,R,q),Ae.resetDefaultState(),ue=-1,Q=null,k.pop(),k.length>0?(B=k[k.length-1],Ke===!0&&Te.setGlobalState(L.clippingPlanes,B.state.camera)):B=null,G.pop(),G.length>0?U=G[G.length-1]:U=null};function Fs(R,q,fe,ie){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Je.intersectsSprite(R)){ie&&_t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(qt);const Be=we.update(R),De=R.material;De.visible&&U.push(R,Be,De,fe,_t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Je.intersectsObject(R))){const Be=we.update(R),De=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_t.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),_t.copy(Be.boundingSphere.center)),_t.applyMatrix4(R.matrixWorld).applyMatrix4(qt)),Array.isArray(De)){const je=Be.groups;for(let We=0,st=je.length;We<st;We++){const lt=je[We],ze=De[lt.materialIndex];ze&&ze.visible&&U.push(R,Be,ze,fe,_t.z,lt)}}else De.visible&&U.push(R,Be,De,fe,_t.z,null)}}const Le=R.children;for(let Be=0,De=Le.length;Be<De;Be++)Fs(Le[Be],q,fe,ie)}function Ma(R,q,fe,ie){const{opaque:J,transmissive:Le,transparent:Be}=R;B.setupLightsView(fe),Ke===!0&&Te.setGlobalState(L.clippingPlanes,fe),ie&&Ge.viewport(I.copy(ie)),J.length>0&&pi(J,q,fe),Le.length>0&&pi(Le,q,fe),Be.length>0&&pi(Be,q,fe),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Bs(R,q,fe,ie){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ie.id]===void 0){const ze=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ie.id]=new Ti(1,1,{generateMipmaps:!0,type:ze?ki:ui,minFilter:Rs,samples:bt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Le=B.state.transmissionRenderTarget[ie.id],Be=ie.viewport||I;Le.setSize(Be.z*L.transmissionResolutionScale,Be.w*L.transmissionResolutionScale);const De=L.getRenderTarget(),je=L.getActiveCubeFace(),We=L.getActiveMipmapLevel();L.setRenderTarget(Le),L.getClearColor(ge),O=L.getClearAlpha(),O<1&&L.setClearColor(16777215,.5),L.clear(),rt&&He.render(fe);const st=L.toneMapping;L.toneMapping=Vi;const lt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),B.setupLightsView(ie),Ke===!0&&Te.setGlobalState(L.clippingPlanes,ie),pi(R,fe,ie),F.updateMultisampleRenderTarget(Le),F.updateRenderTargetMipmap(Le),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Nt=0,Kt=q.length;Nt<Kt;Nt++){const Vt=q[Nt],{object:Dt,geometry:nn,material:qe,group:Xt}=Vt;if(qe.side===ga&&Dt.layers.test(ie.layers)){const xt=qe.side;qe.side=jn,qe.needsUpdate=!0,qi(Dt,fe,ie,nn,qe,Xt),qe.side=xt,qe.needsUpdate=!0,ze=!0}}ze===!0&&(F.updateMultisampleRenderTarget(Le),F.updateRenderTargetMipmap(Le))}L.setRenderTarget(De,je,We),L.setClearColor(ge,O),lt!==void 0&&(ie.viewport=lt),L.toneMapping=st}function pi(R,q,fe){const ie=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Le=R.length;J<Le;J++){const Be=R[J],{object:De,geometry:je,group:We}=Be;let st=Be.material;st.allowOverride===!0&&ie!==null&&(st=ie),De.layers.test(fe.layers)&&qi(De,q,fe,je,st,We)}}function qi(R,q,fe,ie,J,Le){R.onBeforeRender(L,q,fe,ie,J,Le),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(L,q,fe,ie,R,Le),J.transparent===!0&&J.side===ga&&J.forceSinglePass===!1?(J.side=jn,J.needsUpdate=!0,L.renderBufferDirect(fe,q,ie,J,R,Le),J.side=ns,J.needsUpdate=!0,L.renderBufferDirect(fe,q,ie,J,R,Le),J.side=ga):L.renderBufferDirect(fe,q,ie,J,R,Le),R.onAfterRender(L,q,fe,ie,J,Le)}function Ci(R,q,fe){q.isScene!==!0&&(q=Ct);const ie=v.get(R),J=B.state.lights,Le=B.state.shadowsArray,Be=J.state.version,De=Re.getParameters(R,J.state,Le,q,fe),je=Re.getProgramCacheKey(De);let We=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const st=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=Z.get(R.envMap||ie.environment,st),ie.envMapRotation=ie.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",At),We=new Map,ie.programs=We);let lt=We.get(je);if(lt!==void 0){if(ie.currentProgram===lt&&ie.lightsStateVersion===Be)return tn(R,De),lt}else De.uniforms=Re.getUniforms(R),R.onBeforeCompile(De,L),lt=Re.acquireProgram(De,je),We.set(je,lt),ie.uniforms=De.uniforms;const ze=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=Te.uniform),tn(R,De),ie.needsLights=Zi(R),ie.lightsStateVersion=Be,ie.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix),ie.currentProgram=lt,ie.uniformsList=null,lt}function Yi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Wc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function tn(R,q){const fe=v.get(R);fe.outputColorSpace=q.outputColorSpace,fe.batching=q.batching,fe.batchingColor=q.batchingColor,fe.instancing=q.instancing,fe.instancingColor=q.instancingColor,fe.instancingMorph=q.instancingMorph,fe.skinning=q.skinning,fe.morphTargets=q.morphTargets,fe.morphNormals=q.morphNormals,fe.morphColors=q.morphColors,fe.morphTargetsCount=q.morphTargetsCount,fe.numClippingPlanes=q.numClippingPlanes,fe.numIntersection=q.numClipIntersection,fe.vertexAlphas=q.vertexAlphas,fe.vertexTangents=q.vertexTangents,fe.toneMapping=q.toneMapping}function rl(R,q,fe,ie,J){q.isScene!==!0&&(q=Ct),F.resetTextureUnits();const Le=q.fog,Be=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,De=se===null?L.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Fr,je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,We=Z.get(ie.envMap||Be,je),st=ie.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,lt=!!fe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ze=!!fe.morphAttributes.position,Nt=!!fe.morphAttributes.normal,Kt=!!fe.morphAttributes.color;let Vt=Vi;ie.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Vt=L.toneMapping);const Dt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,nn=Dt!==void 0?Dt.length:0,qe=v.get(ie),Xt=B.state.lights;if(Ke===!0&&($e===!0||R!==Q)){const an=R===Q&&ie.id===ue;Te.setState(ie,R,an)}let xt=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Xt.state.version||qe.outputColorSpace!==De||J.isBatchedMesh&&qe.batching===!1||!J.isBatchedMesh&&qe.batching===!0||J.isBatchedMesh&&qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&qe.instancing===!1||!J.isInstancedMesh&&qe.instancing===!0||J.isSkinnedMesh&&qe.skinning===!1||!J.isSkinnedMesh&&qe.skinning===!0||J.isInstancedMesh&&qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&qe.instancingMorph===!1&&J.morphTexture!==null||qe.envMap!==We||ie.fog===!0&&qe.fog!==Le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Te.numPlanes||qe.numIntersection!==Te.numIntersection)||qe.vertexAlphas!==st||qe.vertexTangents!==lt||qe.morphTargets!==ze||qe.morphNormals!==Nt||qe.morphColors!==Kt||qe.toneMapping!==Vt||qe.morphTargetsCount!==nn)&&(xt=!0):(xt=!0,qe.__version=ie.version);let Pn=qe.currentProgram;xt===!0&&(Pn=Ci(ie,q,J));let In=!1,Fn=!1,Ki=!1;const Pt=Pn.getUniforms(),Yt=qe.uniforms;if(Ge.useProgram(Pn.program)&&(In=!0,Fn=!0,Ki=!0),ie.id!==ue&&(ue=ie.id,Fn=!0),In||Q!==R){Ge.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pt.setValue(j,"projectionMatrix",R.projectionMatrix),Pt.setValue(j,"viewMatrix",R.matrixWorldInverse);const mi=Pt.map.cameraPosition;mi!==void 0&&mi.setValue(j,ht.setFromMatrixPosition(R.matrixWorld)),bt.logarithmicDepthBuffer&&Pt.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,Fn=!0,Ki=!0)}if(qe.needsLights&&(Xt.state.directionalShadowMap.length>0&&Pt.setValue(j,"directionalShadowMap",Xt.state.directionalShadowMap,F),Xt.state.spotShadowMap.length>0&&Pt.setValue(j,"spotShadowMap",Xt.state.spotShadowMap,F),Xt.state.pointShadowMap.length>0&&Pt.setValue(j,"pointShadowMap",Xt.state.pointShadowMap,F)),J.isSkinnedMesh){Pt.setOptional(j,J,"bindMatrix"),Pt.setOptional(j,J,"bindMatrixInverse");const an=J.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Pt.setValue(j,"boneTexture",an.boneTexture,F))}J.isBatchedMesh&&(Pt.setOptional(j,J,"batchingTexture"),Pt.setValue(j,"batchingTexture",J._matricesTexture,F),Pt.setOptional(j,J,"batchingIdTexture"),Pt.setValue(j,"batchingIdTexture",J._indirectTexture,F),Pt.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&Pt.setValue(j,"batchingColorTexture",J._colorsTexture,F));const Ni=fe.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Pe.update(J,fe,Pn),(Fn||qe.receiveShadow!==J.receiveShadow)&&(qe.receiveShadow=J.receiveShadow,Pt.setValue(j,"receiveShadow",J.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Yt.envMapIntensity.value=q.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=v2()),Fn&&(Pt.setValue(j,"toneMappingExposure",L.toneMappingExposure),qe.needsLights&&ol(Yt,Ki),Le&&ie.fog===!0&&Xe.refreshFogUniforms(Yt,Le),Xe.refreshMaterialUniforms(Yt,ie,_e,he,B.state.transmissionRenderTarget[R.id]),Wc.upload(j,Yi(qe),Yt,F)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Wc.upload(j,Yi(qe),Yt,F),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(j,"center",J.center),Pt.setValue(j,"modelViewMatrix",J.modelViewMatrix),Pt.setValue(j,"normalMatrix",J.normalMatrix),Pt.setValue(j,"modelMatrix",J.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const an=ie.uniformsGroups;for(let mi=0,Di=an.length;mi<Di;mi++){const cl=an[mi];Ie.update(cl,Pn),Ie.bind(cl,Pn)}}return Pn}function ol(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Zi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(R,q,fe){const ie=v.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),v.get(R.texture).__webglTexture=q,v.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:fe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const fe=v.get(R);fe.__webglFramebuffer=q,fe.__useDefaultFramebuffer=q===void 0};const ba=j.createFramebuffer();this.setRenderTarget=function(R,q=0,fe=0){se=R,V=q,te=fe;let ie=null,J=!1,Le=!1;if(R){const De=v.get(R);if(De.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(j.FRAMEBUFFER,De.__webglFramebuffer),I.copy(R.viewport),H.copy(R.scissor),de=R.scissorTest,Ge.viewport(I),Ge.scissor(H),Ge.setScissorTest(de),ue=-1;return}else if(De.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if(De.__hasExternalTextures)F.rebindTextures(R,v.get(R.texture).__webglTexture,v.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const st=R.depthTexture;if(De.__boundDepthTexture!==st){if(st!==null&&v.has(st)&&(R.width!==st.image.width||R.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Le=!0);const We=v.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[q])?ie=We[q][fe]:ie=We[q],J=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?ie=v.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?ie=We[fe]:ie=We,I.copy(R.viewport),H.copy(R.scissor),de=R.scissorTest}else I.copy(ee).multiplyScalar(_e).floor(),H.copy(Me).multiplyScalar(_e).floor(),de=Se;if(fe!==0&&(ie=ba),Ge.bindFramebuffer(j.FRAMEBUFFER,ie)&&Ge.drawBuffers(R,ie),Ge.viewport(I),Ge.scissor(H),Ge.setScissorTest(de),J){const De=v.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,De.__webglTexture,fe)}else if(Le){const De=q;for(let je=0;je<R.textures.length;je++){const We=v.get(R.textures[je]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+je,We.__webglTexture,fe,De)}}else if(R!==null&&fe!==0){const De=v.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,De.__webglTexture,fe)}ue=-1},this.readRenderTargetPixels=function(R,q,fe,ie,J,Le,Be,De=0){if(!(R&&R.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=v.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(je=je[Be]),je){Ge.bindFramebuffer(j.FRAMEBUFFER,je);try{const We=R.textures[De],st=We.format,lt=We.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+De),!bt.textureFormatReadable(st)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(lt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ie&&fe>=0&&fe<=R.height-J&&j.readPixels(q,fe,ie,J,Ce.convert(st),Ce.convert(lt),Le)}finally{const We=se!==null?v.get(se).__webglFramebuffer:null;Ge.bindFramebuffer(j.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,q,fe,ie,J,Le,Be,De=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=v.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(je=je[Be]),je)if(q>=0&&q<=R.width-ie&&fe>=0&&fe<=R.height-J){Ge.bindFramebuffer(j.FRAMEBUFFER,je);const We=R.textures[De],st=We.format,lt=We.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+De),!bt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ze),j.bufferData(j.PIXEL_PACK_BUFFER,Le.byteLength,j.STREAM_READ),j.readPixels(q,fe,ie,J,Ce.convert(st),Ce.convert(lt),0);const Nt=se!==null?v.get(se).__webglFramebuffer:null;Ge.bindFramebuffer(j.FRAMEBUFFER,Nt);const Kt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await VM(j,Kt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ze),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Le),j.deleteBuffer(ze),j.deleteSync(Kt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,fe=0){const ie=Math.pow(2,-fe),J=Math.floor(R.image.width*ie),Le=Math.floor(R.image.height*ie),Be=q!==null?q.x:0,De=q!==null?q.y:0;F.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,Be,De,J,Le),Ge.unbindTexture()};const ru=j.createFramebuffer(),ll=j.createFramebuffer();this.copyTextureToTexture=function(R,q,fe=null,ie=null,J=0,Le=0){let Be,De,je,We,st,lt,ze,Nt,Kt;const Vt=R.isCompressedTexture?R.mipmaps[Le]:R.image;if(fe!==null)Be=fe.max.x-fe.min.x,De=fe.max.y-fe.min.y,je=fe.isBox3?fe.max.z-fe.min.z:1,We=fe.min.x,st=fe.min.y,lt=fe.isBox3?fe.min.z:0;else{const Yt=Math.pow(2,-J);Be=Math.floor(Vt.width*Yt),De=Math.floor(Vt.height*Yt),R.isDataArrayTexture?je=Vt.depth:R.isData3DTexture?je=Math.floor(Vt.depth*Yt):je=1,We=0,st=0,lt=0}ie!==null?(ze=ie.x,Nt=ie.y,Kt=ie.z):(ze=0,Nt=0,Kt=0);const Dt=Ce.convert(q.format),nn=Ce.convert(q.type);let qe;q.isData3DTexture?(F.setTexture3D(q,0),qe=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(F.setTexture2DArray(q,0),qe=j.TEXTURE_2D_ARRAY):(F.setTexture2D(q,0),qe=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Xt=j.getParameter(j.UNPACK_ROW_LENGTH),xt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Pn=j.getParameter(j.UNPACK_SKIP_PIXELS),In=j.getParameter(j.UNPACK_SKIP_ROWS),Fn=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Vt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Vt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,We),j.pixelStorei(j.UNPACK_SKIP_ROWS,st),j.pixelStorei(j.UNPACK_SKIP_IMAGES,lt);const Ki=R.isDataArrayTexture||R.isData3DTexture,Pt=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Yt=v.get(R),Ni=v.get(q),an=v.get(Yt.__renderTarget),mi=v.get(Ni.__renderTarget);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,an.__webglFramebuffer),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Di=0;Di<je;Di++)Ki&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,v.get(R).__webglTexture,J,lt+Di),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,v.get(q).__webglTexture,Le,Kt+Di)),j.blitFramebuffer(We,st,Be,De,ze,Nt,Be,De,j.DEPTH_BUFFER_BIT,j.NEAREST);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||v.has(R)){const Yt=v.get(R),Ni=v.get(q);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,ru),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,ll);for(let an=0;an<je;an++)Ki?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Yt.__webglTexture,J,lt+an):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Yt.__webglTexture,J),Pt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ni.__webglTexture,Le,Kt+an):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ni.__webglTexture,Le),J!==0?j.blitFramebuffer(We,st,Be,De,ze,Nt,Be,De,j.COLOR_BUFFER_BIT,j.NEAREST):Pt?j.copyTexSubImage3D(qe,Le,ze,Nt,Kt+an,We,st,Be,De):j.copyTexSubImage2D(qe,Le,ze,Nt,We,st,Be,De);Ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Pt?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(qe,Le,ze,Nt,Kt,Be,De,je,Dt,nn,Vt.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(qe,Le,ze,Nt,Kt,Be,De,je,Dt,Vt.data):j.texSubImage3D(qe,Le,ze,Nt,Kt,Be,De,je,Dt,nn,Vt):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Le,ze,Nt,Be,De,Dt,nn,Vt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Le,ze,Nt,Vt.width,Vt.height,Dt,Vt.data):j.texSubImage2D(j.TEXTURE_2D,Le,ze,Nt,Be,De,Dt,nn,Vt);j.pixelStorei(j.UNPACK_ROW_LENGTH,Xt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,xt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Pn),j.pixelStorei(j.UNPACK_SKIP_ROWS,In),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Fn),Le===0&&q.generateMipmaps&&j.generateMipmap(qe),Ge.unbindTexture()},this.initRenderTarget=function(R){v.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),Ge.unbindTexture()},this.resetState=function(){V=0,te=0,se=null,Ge.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}function _2({mouseForce:r=20,cursorSize:e=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:f=.014,BFECC:p=!0,resolution:m=.5,isBounce:h=!1,colors:x=["#5227FF","#FF9FFC","#B19EEF"],style:y={},className:_="",autoDemo:E=!0,autoSpeed:T=.5,autoIntensity:C=2.2,takeoverDuration:S=.25,autoResumeDelay:M=1e3,autoRampDuration:N=.6}){const P=Ne.useRef(null),U=Ne.useRef(null),B=Ne.useRef(null),G=Ne.useRef(null),k=Ne.useRef(null),A=Ne.useRef(!0),L=Ne.useRef(null);return Ne.useEffect(()=>{if(!P.current)return;function pe(D){let v;Array.isArray(D)&&D.length>0?D.length===1?v=[D[0],D[0]]:v=D:v=["#ffffff","#ffffff"];const F=v.length,Z=new Uint8Array(F*4);for(let ae=0;ae<F;ae++){const we=new Lt(v[ae]);Z[ae*4+0]=Math.round(we.r*255),Z[ae*4+1]=Math.round(we.g*255),Z[ae*4+2]=Math.round(we.b*255),Z[ae*4+3]=255}const le=new Dx(Z,F,1,fi);return le.magFilter=fn,le.minFilter=fn,le.wrapS=ei,le.wrapT=ei,le.generateMipmaps=!1,le.needsUpdate=!0,le}const V=pe(x),te=new en(0,0,0,0);class se{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(v){this.container=v,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new x2({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Lt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new Eb,this.clock.start()}resize(){if(!this.container)return;const v=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(v.width)),this.height=Math.max(1,Math.floor(v.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ue=new se;class Q{constructor(){this.mouseMoved=!1,this.coords=new ot,this.coords_old=new ot,this.diff=new ot,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ot,this.takeoverTo=new ot,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(v){this.container=v,this.docTarget=v.ownerDocument||null;const F=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);F&&(this.listenerTarget=F,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(v,F){if(!this.container)return!1;const Z=this.container.getBoundingClientRect();return Z.width===0||Z.height===0?!1:v>=Z.left&&v<=Z.right&&F>=Z.top&&F<=Z.bottom}updateHoverState(v,F){return this.isHoverInside=this.isPointInside(v,F),this.isHoverInside}setCoords(v,F){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Z=this.container.getBoundingClientRect();if(Z.width===0||Z.height===0)return;const le=(v-Z.left)/Z.width,ae=(F-Z.top)/Z.height;this.coords.set(le*2-1,-(ae*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(v,F){this.coords.set(v,F),this.mouseMoved=!0}onDocumentMouseMove(v){if(this.updateHoverState(v.clientX,v.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const F=this.container.getBoundingClientRect();if(F.width===0||F.height===0)return;const Z=(v.clientX-F.left)/F.width,le=(v.clientY-F.top)/F.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Z*2-1,-(le*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(v.clientX,v.clientY),this.hasUserControl=!0}}onDocumentTouchStart(v){if(v.touches.length!==1)return;const F=v.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY),this.hasUserControl=!0)}onDocumentTouchMove(v){if(v.touches.length!==1)return;const F=v.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const v=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(v>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const F=v*v*(3-2*v);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,F)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const I=new Q;class H{constructor(v,F,Z){this.mouse=v,this.manager=F,this.enabled=Z.enabled,this.speed=Z.speed,this.resumeDelay=Z.resumeDelay||3e3,this.rampDurationMs=(Z.rampDuration||0)*1e3,this.active=!1,this.current=new ot(0,0),this.target=new ot,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ot,this.pickNewTarget()}pickNewTarget(){const v=Math.random;this.target.set((v()*2-1)*(1-this.margin),(v()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const v=performance.now();if(v-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=v,this.activationTime=v),!this.active)return;this.mouse.isAutoActive=!0;let Z=(v-this.lastTime)/1e3;this.lastTime=v,Z>.2&&(Z=.016);const le=this._tmpDir.subVectors(this.target,this.current),ae=le.length();if(ae<.01){this.pickNewTarget();return}le.normalize();let we=1;if(this.rampDurationMs>0){const Qe=Math.min(1,(v-this.activationTime)/this.rampDurationMs);we=Qe*Qe*(3-2*Qe)}const Re=this.speed*Z*we,Xe=Math.min(Re,ae);this.current.addScaledVector(le,Xe),this.mouse.setNormalized(this.current.x,this.current.y)}}const de=`
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
`,ge=`
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
`,O=`
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
`,he=`
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
`,_e=`
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
`,Me=`
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
`;class Se{constructor(v){var F;this.props=v||{},this.uniforms=(F=this.props.material)==null?void 0:F.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new dv,this.camera=new eu,this.uniforms&&(this.material=new Wo(this.props.material),this.geometry=new Ns(2,2),this.plane=new di(this.geometry,this.material),this.scene.add(this.plane))}update(){ue.renderer.setRenderTarget(this.props.output||null),ue.renderer.render(this.scene,this.camera),ue.renderer.setRenderTarget(null)}}class Je extends Se{constructor(v){super({material:{vertexShader:de,fragmentShader:K,uniforms:{boundarySpace:{value:v.cellScale},px:{value:v.cellScale},fboSize:{value:v.fboSize},velocity:{value:v.src.texture},dt:{value:v.dt},isBFECC:{value:!0}}},output:v.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const v=new Ri,F=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);v.setAttribute("position",new Ai(F,3));const Z=new Wo({vertexShader:ge,fragmentShader:K,uniforms:this.uniforms});this.line=new pb(v,Z),this.scene.add(this.line)}update({dt:v,isBounce:F,BFECC:Z}){this.uniforms.dt.value=v,this.line.visible=F,this.uniforms.isBFECC.value=Z,super.update()}}class Ke extends Se{constructor(v){super({output:v.dst}),this.init(v)}init(v){super.init();const F=new Ns(1,1),Z=new Wo({vertexShader:O,fragmentShader:Ue,blending:Jd,depthWrite:!1,uniforms:{px:{value:v.cellScale},force:{value:new ot(0,0)},center:{value:new ot(0,0)},scale:{value:new ot(v.cursor_size,v.cursor_size)}}});this.mouse=new di(F,Z),this.scene.add(this.mouse)}update(v){const F=I.diff.x/2*v.mouse_force,Z=I.diff.y/2*v.mouse_force,le=v.cursor_size*v.cellScale.x,ae=v.cursor_size*v.cellScale.y,we=Math.min(Math.max(I.coords.x,-1+le+v.cellScale.x*2),1-le-v.cellScale.x*2),Re=Math.min(Math.max(I.coords.y,-1+ae+v.cellScale.y*2),1-ae-v.cellScale.y*2),Xe=this.mouse.material.uniforms;Xe.force.value.set(F,Z),Xe.center.value.set(we,Re),Xe.scale.value.set(v.cursor_size,v.cursor_size),super.update()}}class $e extends Se{constructor(v){super({material:{vertexShader:de,fragmentShader:Me,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},velocity_new:{value:v.dst_.texture},v:{value:v.viscous},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update({viscous:v,iterations:F,dt:Z}){let le,ae;this.uniforms.v.value=v;for(let we=0;we<F;we++)we%2===0?(le=this.props.output0,ae=this.props.output1):(le=this.props.output1,ae=this.props.output0),this.uniforms.velocity_new.value=le.texture,this.props.output=ae,this.uniforms.dt.value=Z,super.update();return ae}}class qt extends Se{constructor(v){super({material:{vertexShader:de,fragmentShader:_e,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update({vel:v}){this.uniforms.velocity.value=v.texture,super.update()}}class ht extends Se{constructor(v){super({material:{vertexShader:de,fragmentShader:Ye,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.dst_.texture},divergence:{value:v.src.texture},px:{value:v.cellScale}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update({iterations:v}){let F,Z;for(let le=0;le<v;le++)le%2===0?(F=this.props.output0,Z=this.props.output1):(F=this.props.output1,Z=this.props.output0),this.uniforms.pressure.value=F.texture,this.props.output=Z,super.update();return Z}}class _t extends Se{constructor(v){super({material:{vertexShader:de,fragmentShader:ee,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.src_p.texture},velocity:{value:v.src_v.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update({vel:v,pressure:F}){this.uniforms.velocity.value=v.texture,this.uniforms.pressure.value=F.texture,super.update()}}class Ct{constructor(v){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...v},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ot,this.cellScale=new ot,this.boundarySpace=new ot,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?ki:Ei}createAllFBO(){const F={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:fn,magFilter:fn,wrapS:ei,wrapT:ei};for(let Z in this.fbos)this.fbos[Z]=new Ti(this.fboSize.x,this.fboSize.y,F)}createShaderPass(){this.advection=new Je({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ke({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new $e({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new qt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new ht({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new _t({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const v=Math.max(1,Math.round(this.options.resolution*ue.width)),F=Math.max(1,Math.round(this.options.resolution*ue.height)),Z=1/v,le=1/F;this.cellScale.set(Z,le),this.fboSize.set(v,F)}resize(){this.calcSize();for(let v in this.fbos)this.fbos[v].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let v=this.fbos.vel_1;this.options.isViscous&&(v=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:v});const F=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:v,pressure:F})}}class rt{constructor(){this.init()}init(){this.simulation=new Ct,this.scene=new dv,this.camera=new eu,this.output=new di(new Ns(2,2),new Wo({vertexShader:de,fragmentShader:he,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ot},palette:{value:V},bgColor:{value:te}}})),this.scene.add(this.output)}addScene(v){this.scene.add(v)}resize(){this.simulation.resize()}render(){ue.renderer.setRenderTarget(null),ue.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class yt{constructor(v){this.props=v,ue.init(v.$wrapper),I.init(v.$wrapper),I.autoIntensity=v.autoIntensity,I.takeoverDuration=v.takeoverDuration,this.lastUserInteraction=performance.now(),I.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new H(I,this,{enabled:v.autoDemo,speed:v.autoSpeed,resumeDelay:v.autoResumeDelay,rampDuration:v.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():A.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ue.renderer.domElement),this.output=new rt}resize(){ue.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),I.update(),ue.update(),this.output.update()}loop(){this.running&&(this.render(),G.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,G.current&&(cancelAnimationFrame(G.current),G.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),I.dispose(),ue.renderer){const v=ue.renderer.domElement;v&&v.parentNode&&v.parentNode.removeChild(v),ue.renderer.dispose()}}catch{}}}const j=P.current;j.style.position=j.style.position||"relative",j.style.overflow=j.style.overflow||"hidden";const kt=new yt({$wrapper:j,autoDemo:E,autoSpeed:T,autoIntensity:C,takeoverDuration:S,autoResumeDelay:M,autoRampDuration:N});U.current=kt,(()=>{var F;if(!U.current)return;const D=(F=U.current.output)==null?void 0:F.simulation;if(!D)return;const v=D.options.resolution;Object.assign(D.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:p,resolution:m,isBounce:h}),m!==v&&D.resize()})(),kt.start();const bt=new IntersectionObserver(D=>{const v=D[0],F=v.isIntersecting&&v.intersectionRatio>0;A.current=F,U.current&&(F&&!document.hidden?U.current.start():U.current.pause())},{threshold:[0,.01,.1]});bt.observe(j),k.current=bt;const Ge=new ResizeObserver(()=>{U.current&&(L.current&&cancelAnimationFrame(L.current),L.current=requestAnimationFrame(()=>{U.current&&U.current.resize()}))});return Ge.observe(j),B.current=Ge,()=>{if(G.current&&cancelAnimationFrame(G.current),B.current)try{B.current.disconnect()}catch{}if(k.current)try{k.current.disconnect()}catch{}U.current&&U.current.dispose(),U.current=null}},[p,e,f,h,i,c,l,r,m,s,x,E,T,C,S,M,N]),Ne.useEffect(()=>{var se;const pe=U.current;if(!pe)return;const V=(se=pe.output)==null?void 0:se.simulation;if(!V)return;const te=V.options.resolution;Object.assign(V.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:p,resolution:m,isBounce:h}),pe.autoDriver&&(pe.autoDriver.enabled=E,pe.autoDriver.speed=T,pe.autoDriver.resumeDelay=M,pe.autoDriver.rampDurationMs=N*1e3,pe.autoDriver.mouse&&(pe.autoDriver.mouse.autoIntensity=C,pe.autoDriver.mouse.takeoverDuration=S)),m!==te&&V.resize()},[r,e,i,s,l,c,f,p,m,h,E,T,C,S,M,N]),g.jsx("div",{ref:P,className:`liquid-ether-container ${_||""}`,style:y})}const Nr=({name:r="",size:e=24,color:i="currentColor",strokeColor:s="",className:l=""})=>g.jsx("svg",{className:l,width:e,height:e,fill:i,stroke:s||"currentColor",children:g.jsx("use",{href:`/portfolio/icon-sprite.svg#${r}`})}),S2=({toggleMenu:r})=>g.jsxs("header",{className:"p-2 bg-stone-800/50 text-white h-14 flex justify-between px-4 w-full","aria-label":"Main navigation",children:[g.jsxs("div",{className:"flex flex-1 items-center align-middle h-full",children:[g.jsx("button",{onClick:r,"aria-label":"Toggle menu",className:"md:hidden",children:g.jsx(Nr,{name:"mobile-menu",size:18,className:" items-center align-middle"})}),g.jsxs(Dr,{to:"/","aria-label":"Go to Home",className:"flex",children:[g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",width:"40",height:"40",className:" aspect-square h-6 my-auto",children:[g.jsx("circle",{cx:"20",cy:"20",r:"18",fill:"#FFFFFF"}),g.jsx("path",{d:"M13 11 L18.5 20.5 V29 H21.5 V20.5 L27 11 H23.5 L20 17 L16.5 11 H13 Z",fill:"#1A1D21"})]}),g.jsx("h4",{className:" text-stone-200/80 text-lg my-auto leading-normal mt-0.5",children:"Product Portfolio"})]})]}),g.jsx("div",{className:"flex  space-x-2 justify-end",children:g.jsx("a",{href:"https://www.linkedin.com/in/yannick-boulanger/",target:"_blank",rel:"noopener noreferrer",className:"p-1 rounded-lg items-center border border-gray-600 justify-center transition-all duration-500  hover:border-blue-400 hover:bg-blue-900",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 72 72",fill:"none",children:g.jsx("path",{d:"M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z",fill:"#fff"})})})})]}),y2=()=>{const r=Ps(),[e,i]=Ne.useState(!1),[s,l]=Ne.useState(!1);Ne.useEffect(()=>{i(r.pathname.startsWith("/Case")),l(r.pathname.startsWith("/Portfolio"))},[r.pathname]);const c="hover:bg-stone-800/50 hover:text-stone-200",f="bg-stone-800/50 text-white",m=`text-md text-stone-400 flex flex-row px-0 py-2 pl-6 pr-4 items-center justify-start transition-all duration-300 ease-out ${c} active:bg-purple-700/50`,h=x=>r.pathname===x?f:"";return g.jsx("div",{className:"grow border-r border-stone-800 pt-4",children:g.jsxs("nav",{"aria-label":"Primary Navigation",children:[g.jsxs("ul",{className:"list-none mt-20  space-y-0",children:[g.jsx("li",{className:"-ml-0.5 mb-1",children:g.jsxs(Dr,{to:"/",className:`${m} ${h("/")}`,children:[g.jsx(Nr,{name:"home",size:20,className:"mr-2 -mt-1 text-white"}),g.jsx("span",{className:"text-xl font-normal",children:"Home"})]})}),g.jsxs("li",{className:"-ml-0.5",children:[g.jsxs("button",{onClick:()=>i(x=>!x),className:`${m} w-full`,children:[g.jsx(Nr,{name:"cases",size:20,className:"mr-2 -mt-1 text-white"}),g.jsx("span",{className:"text-xl font-normal",children:"Cases"}),g.jsx(Nr,{name:"chevron-down",size:20,className:`ml-auto transition-transform duration-300 ${e?"rotate-180":""}`})]}),g.jsx("ul",{className:`ml-6 mt-1 space-y-1 empty:hidden list-none overflow-hidden transition-all duration-300 ease-in-out ${e?"max-h-40 opacity-100":"max-h-0 opacity-0"}`,children:["Case01","Case02","Case03"].map(x=>{const y=`/${x}`;return g.jsx("li",{className:"-ml-0.5",children:g.jsx(Dr,{to:y,className:`${m} ${h(y)} ${e?"translate-y-0 opacity-100":"-translate-y-2 opacity-0"}`,children:g.jsx("span",{className:"ml-6 text-xl font-normal",children:x.replace("Case","Case 0")})})},x)})})]}),g.jsxs("li",{className:"-ml-0.5",children:[g.jsxs("button",{onClick:()=>l(x=>!x),className:`${m} w-full`,children:[g.jsx(Nr,{name:"portfolio",size:20,className:"mr-2 -mt-1 text-white"}),g.jsx("span",{className:"text-xl font-normal",children:"Portfolio"}),g.jsx(Nr,{name:"chevron-down",size:20,className:`ml-auto transition-transform duration-300 ${s?"rotate-180":""}`})]}),g.jsx("ul",{className:`ml-6 mt-1  space-y-1 empty:hidden list-none overflow-hidden transition-all duration-300 ease-in-out ${s?"max-h-40 opacity-100":"max-h-0 opacity-0"}`,children:Array.from({length:3}).map((x,y)=>{const _=y+1,E=`/Portfolio0${_}`;return g.jsx("li",{className:"-ml-0.5",children:g.jsx(Dr,{to:E,className:`${m} ${h(E)} ${s?"translate-y-0 opacity-100":"-translate-y-2 opacity-0"}`,children:g.jsxs("span",{className:"ml-6 text-xl font-normal",children:["Project 00",_]})})},E)})})]})]}),g.jsxs("div",{className:"absolute bottom-12 p-6",children:[g.jsxs("div",{className:"flex items-start space-x-1 mx-auto",children:[g.jsx("i",{className:"-ml-1 mr-1.5",children:g.jsx("svg",{width:"24",height:"24",viewBox:"0 2 24 24",fill:"orange",children:g.jsx("path",{d:"M12 2.5L14.9 8.6L21.5 9.4L16.75 13.9L18.1 20.5L12 17.2L5.9 20.5L7.25 13.9L2.5 9.4L9.1 8.6L12 2.5Z"})})}),g.jsx("p",{className:"text-medium leading-snug",children:"Open to New Opportunities"})]}),g.jsx("a",{href:"https://www.linkedin.com/in/yannick-boulanger/",target:"_blank",rel:"noopener noreferrer",className:"bg-stone-800/50 block text-center w-full p-1.5 pb-2 px-3 rounded-lg border border-gray-600 transition-all duration-500 hover:border-purple-300/80 hover:bg-purple-900 text-white",children:"Get in touch!"})]})]})})},M2="/portfolio/assets/Thumb-Case01-DdFGIIfZ.png",b2="/portfolio/assets/Thumb-Case02-D3YojT8i.png",E2="/portfolio/assets/Thumb-Case03-DGzPN63w.png",T2=[{id:1,tag:"Product Case",title:"Interface Redesign",desc:"Multi-Panel Workspace for Sales Workflows",img:M2,status:"Open",active:!0,path:"Case01"},{id:2,tag:"UX Case",title:"VPN Enrollment Flow",desc:"Self-Service Onboarding & MFA Authentication",img:b2,status:"Open",active:!0,path:"Case02"},{id:3,tag:"Product Case",title:"Dynamic Prioritization",desc:"Flexible Query-Building for Sales Workflows",img:E2,status:"Open",active:!0,path:"Case03"}];function A2(){return g.jsxs("section",{className:"mb-16 max-w-screen-lg mx-auto px-6 xl:px-0",children:[g.jsx("h3",{className:"mb-6",children:"Case Studies"}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:T2.map(r=>g.jsxs("div",{className:"group bg-stone-800/50 rounded-1xl overflow-hidden hover:shadow-xl hover:bg-stone-800/90 transition-all duration-300 border border-stone-800 hover:scale-105",children:[g.jsx("div",{className:"relative aspect-5/4 overflow-hidden bg-stone-600",children:g.jsx("img",{src:r.img,alt:r.title,className:"w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"})}),g.jsxs("div",{className:"p-6",children:[g.jsx("h4",{className:" text-2xl font-semibold",children:r.title}),g.jsx("p",{children:r.desc}),r.active?g.jsx(Dr,{to:`${r.path}`,className:"block w-full text-center p-2 rounded-lg text-cyan-300/90 text-lg font-medium transition-transform duration-1000 bg-stone-950/80 border border-cyan-300/90 group-hover:bg-cyan-500 group-hover:text-black",children:r.status}):g.jsx("button",{disabled:!0,className:"w-full p-2 rounded-lg text-cyan-400 text-lg font-medium bg-stone-800/40 border border-transparent cursor-not-allowed",children:r.status})]})]},r.id))})]})}const w2="/portfolio/assets/Thumb-Port01-se4AUbEI.png",R2="/portfolio/assets/Thumb-Port02-b4ueRP8H.png",C2="/portfolio/assets/Thumb-Port03-BST0Lm-n.png",N2=[{id:1,tag:"Portfolio",title:"Secure & Resilient",desc:"Zero-Touch Provisioning For Multi-tenacy",img:R2,status:"Open",active:!0,path:"Portfolio01"},{id:2,tag:"Portfolio",title:"Hybrid Workforce",desc:"SD-WAN Remote Access for Distributed Teams",img:w2,status:"Open",active:!0,path:"Portfolio02"},{id:3,tag:"Wireframe",title:"Debt Assessment Tool",desc:"Helping Physicians Manage debt smarter",img:C2,status:"Open",active:!0,path:"Portfolio03"}];function D2(){return g.jsxs("section",{className:"mb-16 max-w-screen-lg mx-auto  px-6 xl:px-0",children:[g.jsx("h3",{className:"mb-6",children:"Portfolio"}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:N2.map(r=>g.jsxs("div",{className:"group bg-stone-800/50 rounded-1xl overflow-hidden hover:shadow-xl hover:bg-stone-800/90 transition-all duration-300 border border-stone-800 hover:scale-105",children:[g.jsx("div",{className:"relative aspect-5/4 overflow-hidden bg-stone-600",children:g.jsx("img",{src:r.img,alt:r.title,className:"w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"})}),g.jsxs("div",{className:"p-6",children:[g.jsx("h4",{className:" text-2xl font-semibold",children:r.title}),g.jsx("p",{children:r.desc}),r.active?g.jsx(Dr,{to:`${r.path}`,className:"block w-full text-center p-2 rounded-lg text-cyan-500 text-lg font-medium transition-transform duration-1000 bg-stone-950/80 border border-cyan-600 group-hover:bg-cyan-500 group-hover:text-black",children:r.status}):g.jsx("button",{disabled:!0,className:"w-full p-2 rounded-lg text-cyan-400 text-lg font-medium bg-stone-800/40 border border-transparent cursor-not-allowed",children:r.status})]})]},r.id))})]})}function U2(){return g.jsx(g.Fragment,{children:g.jsxs("div",{className:"w-full  text-stone-100",children:[g.jsxs("div",{id:"Top",className:"mb-16 max-w-screen-lg mx-auto px-6 xl:px-0 ",children:[g.jsx("h2",{className:"text-3xl pb-12 ",children:"Yannick Boulanger"}),g.jsx("h1",{className:"uppercase font-bold",children:"Product Designer"}),g.jsx("h1",{className:"mb-16 font-light uppercase bg-stone-800/50",children:"Solutions for Complex Human Applications"}),g.jsxs("div",{className:"lg:flex flex-wrap gap-12",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("h2",{className:"  text-cyan-300/90 font-normal",children:"Enterprise SaaS Delivery"}),g.jsx("p",{children:"I conceptualize complex SaaS products from discovery through delivery and ground product strategy in user research and real-world workflows."}),g.jsx("h2",{className:"  text-cyan-300/90 font-normal",children:"Cross-Functional Collaboration"}),g.jsx("p",{children:"I collaborate with Product, Engineering, and stakeholders to turn vision into execution, delivering maximum value while making complex systems scalable and user-friendly."})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h2",{className:"  text-cyan-300/90 font-normal",children:"Structured, Usable Systems"}),g.jsx("p",{children:"I prioritize information architecture, consistency, and usability over visual polish, ensuring highly technical environments remain accessible, secure, and reliable."}),g.jsx("h2",{className:"  text-cyan-300/90 font-normal",children:"Evidence-Based Practice"}),g.jsx("p",{children:"I take an iterative, evidence-based approach, guiding design decisions with data and measuring impact through meaningful user and business outcomes."})]})]})]}),g.jsx(A2,{}),g.jsx(D2,{}),g.jsxs("div",{id:"Summary",className:"text-white max-w-screen-lg mx-auto lg:flex flex-wrap gap-6 mb-12 px-6 xl:px-0 ",children:[g.jsx("h3",{children:"Summary"}),g.jsxs("div",{className:"lg:flex gap-6",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("p",{children:"Senior Product Designer with 15+ years of experience leading complex B2B SaaS and enterprise platforms from concept through delivery."}),g.jsx("p",{children:"I combine systems thinking, technical depth, and product strategy to simplify complex environments, from SD-WAN platforms to scalable CRM systems."})]}),g.jsxs("div",{className:"flex-1",children:[g.jsx("p",{children:"I’ve led large-scale UX initiatives that improved revenue performance, increased operational efficiency, and enabled platform scalability."}),g.jsxs("p",{children:["I align business goals, architecture, and user needs to deliver secure, intuitive, and resilient product experiences at scale across complex enterprise ecosystems."," "]})]})]})]}),g.jsx("div",{className:"w-full bg-stone-800/20 mb-12 py-12  border-stone-800",children:g.jsxs("div",{className:"max-w-screen-lg mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1",children:g.jsxs("dl",{children:[g.jsx("dt",{className:" pb-2 text-cyan-300/90 text-3xl",children:"Product"}),g.jsxs("dd",{className:"text-lg text-white",children:["Vision, Strategy ",g.jsx("br",{}),"& Agile Delivery"]})]})}),g.jsx("div",{className:"flex-1",children:g.jsxs("dl",{children:[g.jsx("dt",{className:" pb-2 text-cyan-300/90 text-3xl",children:"UI/UX"}),g.jsx("dd",{className:"text-lg text-white",children:"Visual, Workflow & Interaction Design"})]})}),g.jsx("div",{className:"flex-1",children:g.jsxs("dl",{children:[g.jsx("dt",{className:" pb-2 text-cyan-300/90 text-3xl",children:"SaaS/B2B"}),g.jsx("dd",{className:"text-lg text-white",children:"Scalable Enterprise Platforms"})]})}),g.jsx("div",{className:"flex-1 rounded-br-lg",children:g.jsxs("dl",{children:[g.jsx("dt",{className:" pb-2 text-cyan-300/90 text-3xl",children:"Front-End"}),g.jsx("dd",{className:"text-lg text-white",children:"Implementation & Accessibility"})]})})]})}),g.jsxs("p",{className:" mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})]})})}function ap({images:r}){const[e,i]=Ne.useState(0),s=()=>i((e-1+r.length)%r.length),l=()=>i((e+1)%r.length);return g.jsx("div",{className:"text-gray-200 bg-zinc-900/50 mb-16 px-6",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 relative",children:[g.jsxs("div",{className:"relative group overflow-hidden cursor-pointer rounded-xl",children:[g.jsx("img",{src:r[e].src,className:"border-zinc-700 border shadow-2xl mx-auto transition-transform duration-700",alt:r[e].alt}),g.jsx("button",{onClick:s,className:`absolute left-0 top-0 bottom-0 w-20 flex items-center justify-center bg-black/20 
                       opacity-0 group-hover:opacity-100 
                       -translate-x-full group-hover:translate-x-0
                       transition-all duration-500 ease-out will-change-transform`,"aria-label":"Previous slide",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-white drop-shadow-md",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})})}),g.jsx("button",{onClick:l,className:`absolute right-0 top-0 bottom-0 w-20 flex items-center justify-center bg-black/20 
                       opacity-0 group-hover:opacity-100 
                       translate-x-full group-hover:translate-x-0
                       transition-all duration-500 ease-out will-change-transform`,"aria-label":"Next slide",children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-white drop-shadow-md",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})})]}),g.jsx("div",{className:"flex justify-center mt-8 space-x-4",children:r.map((c,f)=>g.jsx("button",{className:`h-2 transition-all duration-500 rounded-full ${f===e?"w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]":"w-2 bg-zinc-600"}`,onClick:()=>i(f)},f))})]})})}const L2="/portfolio/assets/Case-001-Caller-UI-0ciZWlwv.png",O2="/portfolio/assets/Case-001-User-Journey-CMO36twY.png",P2="/portfolio/assets/Case-001-Diagram-CBmgiNWa.png",I2="/portfolio/assets/Case-001-Screen-01-O8so0Rvv.png",F2="/portfolio/assets/Case-001-Screen-02-DymXWPSn.png",B2="/portfolio/assets/VS-Old-CallerUI-Dw1hW2WW.png";function z2(){const r=[{src:L2,alt:"Final multi-panel workspace integrating CRM, scripts, and communication tools."},{src:O2,alt:"Caller UI workflow illustrating the end-to-end user journey."},{src:P2,alt:"UI panel architecture defining layout, hierarchy, and interactions."},{src:I2,alt:"Multi-panel workspace with integrated SMS communication."},{src:F2,alt:"Multi-panel workspace with heads-up display (HUD) interface."}];return g.jsxs("div",{children:[g.jsx("div",{className:"w-full px-6 xl:px-0",children:g.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto",children:[g.jsx("h2",{className:"text-3xl pb-12 ",children:"Case 001 : VanillaSoft"}),g.jsx("h1",{className:"uppercase font-bold",children:"Interface Redesign"}),g.jsx("h1",{className:"uppercase mb-16 font-light leading-none  bg-stone-800/50",children:"Multi-Panel Workspace for Sales Workflows"}),g.jsxs("div",{className:"lg:flex gap-6",children:[g.jsxs("div",{className:"flex-1/3 mb-6",children:[g.jsx("h2",{className:"text-cyan-300/90",children:"Contributions"}),g.jsxs("ul",{className:"mt-4 space-y-1 text-lg",children:[g.jsx("li",{children:"Contextual & User Research"}),g.jsx("li",{children:"Workflow & Task Analysis"}),g.jsx("li",{children:"Market & Competitor Analysis"}),g.jsx("li",{children:"Information Architecture"}),g.jsx("li",{children:"Interaction Design"}),g.jsx("li",{children:"Product Design & UI/UX"})]})]}),g.jsxs("div",{className:"flex-2/3",children:[g.jsx("h2",{className:"text-cyan-300/90",children:"Assignment"}),g.jsx("p",{children:"The objective of this project was to redesign VanillaSoft’s core Caller UI to improve usability, scalability, and overall user satisfaction while modernizing its visual design and aligning it with contemporary interaction standards."}),g.jsx("p",{children:"The new interface was designed to support both novice and experienced users, streamline complex sales workflows, and accommodate a growing user base without compromising performance."}),g.jsx("p",{children:"The redesign focused on improving task efficiency, reducing cognitive load, and providing a flexible, responsive workspace across different devices and screen sizes."}),g.jsx("p",{children:"I was responsible for research, design, front-end integration, and QA throughout the project lifecycle."})]})]})]})}),g.jsx(ap,{images:r}),g.jsxs("div",{className:"max-w-screen-lg mx-auto px-6 xl:px-0",children:[g.jsxs("div",{className:"lg:flex gap-12 mb-12",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Context"})}),g.jsxs("div",{className:"flex-3/4",children:[g.jsx("p",{children:"VanillaSoft is a cloud-based sales management platform integrating customer relationship management (CRM), lead management, and telemarketing tools to streamline sales team workflows."}),g.jsx("p",{children:"What sets VanillaSoft apart from competitors is its queue-based approach, which routes agents to the next best contact based on available data rather than relying on a traditional list-based system."}),g.jsx("p",{children:"This prevents agents from cherry-picking contacts and promotes efficiency, enabling faster and more effective workflows."})]})]}),g.jsx("hr",{className:"border-stone-800 mb-16"}),g.jsxs("div",{className:"lg:flex gap-12 mb-12",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"m",children:"Observation"})}),g.jsxs("div",{className:"flex-3/4",children:[g.jsx("p",{children:"The Caller UI, a central part of the platform used during live calls, had become visually and technically outdated. As the product evolved, the interface became increasingly difficult to extend and maintain."}),g.jsx("p",{children:"Our research revealed that agents relied heavily on the Caller UI to input data but frequently had to switch between multiple tools to access customer information, scripts, and reference documents."}),g.jsx("p",{children:"This increased cognitive load, slowed workflows, and reduced call quality."}),g.jsx("p",{children:"Additionally, the interface architecture made it difficult to scale the UI as new features were added. The redesign needed to improve workflow efficiency while supporting the platform’s long-term evolution."})]})]}),g.jsx("hr",{className:"border-stone-800 mb-16"}),g.jsxs("div",{className:"lg:flex gap-12 mb-12",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"m",children:"Research"})}),g.jsxs("div",{className:"flex-3/4",children:[g.jsx("p",{children:"During the research phase, we studied telemarketer workflows and analyzed competitors."}),g.jsx("p",{children:"A key insight came from photos collected by our CEO and sales representatives at customer call centers, revealing that most users rely heavily on external resources to complete tasks."}),g.jsx("p",{children:"This creates inefficiencies, context-switching, and increased cognitive load."})]})]}),g.jsx("hr",{className:"border-stone-800 mb-16"}),g.jsxs("div",{className:"mb-20",children:[g.jsx("h3",{className:" mb-12",children:"Hypothesis"}),g.jsx("div",{children:g.jsxs("blockquote",{className:"mt-6 border-l-4 border-teal-300/80 pl-6 italic text-stone-400 text-2xl",children:["If we integrate these external resources directly into the Caller UI, users will experience a more seamless workflow, reduce cognitive load, and complete tasks more efficiently.",g.jsx("br",{}),g.jsx("br",{}),"Consolidating tools such as customer details, compliance documents, and other essential applications will also generate richer data for the platform’s queue-based routing system, improving overall performance and outcomes."]})})]}),g.jsx("hr",{className:"border-stone-800 mb-16"}),g.jsxs("div",{className:"lg:flex gap-12 mb-12",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Solution"})}),g.jsxs("div",{className:"lg:flex flex-3/4 gap-12",children:[g.jsxs("div",{className:"flex-1/2",children:[g.jsx("p",{children:"The redesign introduced a flexible multi-panel layout to optimize space and support dynamic workflows, which was innovative at the time. The interface adapts to user tasks, offering a personalized and responsive experience."}),g.jsxs("p",{children:["The grid layout, implemented using Kendo UI, ensured stability and performance at scale. Additional information for each contact was fetched asynchronously to minimize wait times."," "]})]}),g.jsxs("div",{className:"flex-1/2",children:[g.jsx("p",{children:"Panels could be resized, reorganized, or removed, allowing the workspace to adapt to user workflows. Inline editing including undo functionality was available to most of the content presented with customization options."}),g.jsx("p",{children:"The redesign supported business growth, boosted user retention, and acted as a differentiator in the competitive CRM market, contributing to strong ROI and long-term success."})]})]})]})]}),g.jsx("div",{className:"w-full bg-stone-800/20 my-12 py-20 border-stone-800 px-6 xl:px-0",children:g.jsx("div",{className:"max-w-screen-lg mx-auto",children:g.jsxs("div",{className:"lg:flex gap-12",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Feature"})}),g.jsxs("div",{className:"flex-3/4",children:[g.jsx("h4",{className:"text-cyan-300/90",children:"Modular Multi-Panel Layout"}),g.jsx("p",{children:"A flexible grid allowing users to resize, reorganize, or hide panels based on their specific campaign needs."}),g.jsx("h4",{className:"text-cyan-300/90",children:"Technical Scalability"}),g.jsx("p",{children:"Implemented via Kendo UI for responsive, stable performance with asynchronous loading of contact details to maintain user flow."}),g.jsx("h4",{className:"text-cyan-300/90",children:"Deep Integration"}),g.jsx("p",{children:"Embedded APIs for Email, SMS, and Payment tools directly into the workspace to eliminate the need for external applications."})]})]})})}),g.jsx("div",{className:"max-w-screen-lg mx-auto px-6 xl:px-0",children:g.jsxs("div",{className:" lg:flex gap-12 mb-12",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Outcomes"})}),g.jsxs("div",{className:"lg:flex flex-3/4 gap-12",children:[g.jsxs("div",{className:"flex-1/2",children:[g.jsx("p",{children:"The redesigned Caller UI became a flagship feature of VanillaSoft, improving workflows by consolidating tools and reducing context-switching. An external study showed users experienced a 30%-100% increase in productivity and completed tasks with fewer errors."}),g.jsx("p",{children:"The responsive, customizable interface allowed users to tailor their workspace, increasing satisfaction and reducing cognitive load. User feedback was positive, with VanillaSoft earning 4.7 stars on Capterra and 4.6 stars on G2."})]}),g.jsxs("div",{className:"flex-1/2",children:[g.jsx("p",{children:"To maintain performance during calls, contact information loads first while additional data is retrieved asynchronously in the background."}),g.jsxs("p",{children:["Several integrations—including email, SMS, payment processing, and other communication tools—were embedded directly into the workspace, reducing reliance on external applications."," "]})]})]})]})}),g.jsx("div",{className:"w-full bg-stone-800/20 py-20 border-stone-800 px-6 xl:px-0",children:g.jsxs("div",{className:"max-w-screen-lg mx-auto",children:[g.jsx("h3",{className:"  mb-8 ",children:"Results & Business Impact"}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-5xl mb-2 text-cyan-300/90 font-medium",children:"30–100%"}),g.jsx("p",{className:" text-lg",children:"Increase in agent productivity across various sales workflows."})]}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-5xl mb-2 text-cyan-300/90 font-medium",children:"4.7/5"}),g.jsx("p",{className:" text-lg",children:"Average user rating on Capterra, citing improved ease of use."})]}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-5xl mb-2 text-cyan-300/90",children:"Reduction"}),g.jsx("p",{className:" text-lg",children:"Reduced cognitive load through workspace customization and workflow enhancement."})]})]}),g.jsx("small",{children:"Source: VanillaSoft"})]})}),g.jsx("div",{className:"w-full py-20 opacity-50 hover:opacity-100 transition-opacity",children:g.jsxs("div",{className:"max-w-screen-lg mx-auto px-6",children:[g.jsx("h3",{className:"text-stone-500  text-xl mb-8",children:"Legacy Interface (For Context)"}),g.jsx("img",{src:B2,alt:"Old VanillaSoft UI"})]})}),g.jsxs("p",{className:" mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})]})}const H2="/portfolio/assets/Case-001-Screen-Onboarding-Email-3vOk6BRw.png",G2="/portfolio/assets/Case-001-Journey-Map-Eu5Dqes6.png",V2="/portfolio/assets/Case-001-Flow-Chart-hcLvhB8r.png",j2="/portfolio/assets/Case-001-User-Activation-Pug4pFg-.png";function k2(){const r=[{src:H2,alt:"Onboarding email with account creation link and essential information."},{src:G2,alt:"Journey map illustrating self-service account provisioning."},{src:V2,alt:"Authentication flow diagram showing access and validation steps."},{src:j2,alt:"Account activation and password setup screen."}];return g.jsxs("div",{className:"text-white  ",children:[g.jsx("div",{className:"w-full text-gray-200 px-6 xl:px-0",children:g.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto",children:[g.jsx("h2",{className:"text-3xl pb-12 ",children:"Case 002 : Efficient Account Provisioning"}),g.jsx("h1",{className:"uppercase font-bold",children:"VPN Enrollment Flow"}),g.jsx("h1",{className:"uppercase mb-16 font-light leading-none    bg-stone-800/50",children:"Self-Service Onboarding & MFA Authentication"}),g.jsxs("div",{className:"lg:flex gap-6 ",children:[g.jsxs("div",{className:"flex-1/3 mb-6",children:[g.jsx("h2",{className:"text-cyan-300/90  font-normal",children:"Contributions"}),g.jsxs("ul",{className:"space-y-1",children:[g.jsx("li",{children:"Contextual & User Research"}),g.jsx("li",{children:"Workflow & Task Analysis"}),g.jsx("li",{children:"Identity & Access Management (IAM) Strategy"}),g.jsx("li",{children:"Interaction Design & UI/UX"}),g.jsx("li",{children:"Front-End Integration"})]})]}),g.jsxs("div",{className:"flex-2/3",children:[g.jsx("h2",{className:"text-cyan-300/90  font-normal",children:"Assignment"}),g.jsx("p",{children:"The objective of this project was to streamline the MyConnect VPN user onboarding process for partners and tenants, enabling self-service account creation while enhancing security with Multi-Factor Authentication (MFA)."}),g.jsx("p",{children:"The project aimed to reduce friction, minimize manual IT involvement, and provide a scalable onboarding process. Additionally, it sought to integrate security best practices without compromising usability, creating a flexible experience for both novice and experienced users."}),g.jsx("p",{children:"The role encompassed research, workflow analysis, solution architecture, and the implementation of the enrollment flow using Auth0."})]})]})]})}),g.jsx(ap,{images:r}),g.jsx("div",{children:g.jsxs("div",{className:"max-w-screen-lg mx-auto",children:[g.jsxs("div",{className:"lg:flex gap-12 mb-20  px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Context"})}),g.jsx("div",{className:"flex-3/4",children:g.jsx("p",{children:"Adaptiv Networks is a multi-tenant company providing cloud-managed SD-WAN and secure VPN solutions for businesses. Its VPN service ensures secure connectivity for remote employees as part of a larger self-service portal, allowing businesses to manage network users independently while supporting flexibility, scalability, and security."})})]}),g.jsx("hr",{className:"border-stone-800 mb-20"}),g.jsxs("div",{className:"lg:flex gap-12 mb-20 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Observation"})}),g.jsxs("div",{className:"flex-3/4",children:[g.jsx("p",{children:"The existing MyConnect user creation process was manual, which was sufficient for initial testing but became time-consuming and resource-intensive as adoption grew."}),g.jsx("p",{children:"Partners and tenants were unable to independently onboard users, limiting enthusiasm and adoption. The lack of self-service created bottlenecks for IT teams and hindered operational efficiency."}),g.jsx("p",{children:"Additionally, Multi-Factor Authentication (MFA) was critical for meeting security and compliance standards but was not yet implemented. The current enrollment process risked being perceived as incomplete or insecure by security-conscious customers."})]})]}),g.jsx("hr",{className:"border-stone-800 mb-20"}),g.jsxs("div",{className:"lg:flex gap-12 mb-20 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"m",children:"Research"})}),g.jsxs("div",{className:"flex-3/4",children:[g.jsx("p",{children:"We mapped key user flows, including enrollment, login, password reset, and MFA setup, to identify friction points."}),g.jsx("p",{children:"Auth0 was selected as the Identity and Access Management (IAM) platform. I conducted a deep dive into its documentation to understand its framework, evaluate potential challenges, and identify opportunities to streamline the user experience while supporting secure authentication workflows."})]})]}),g.jsx("hr",{className:"border-stone-800 mb-20"}),g.jsxs("div",{className:"mb-20 px-6 xl:px-0",children:[g.jsx("h3",{className:" mb-12",children:"Hypothesis"}),g.jsxs("div",{children:[g.jsxs("blockquote",{className:"mb-12 border-l-4 border-cyan-200/80 pl-6 italic text-stone-400",children:[g.jsx("strong",{className:"",children:"Streamlined Enrollment with Auth0:"})," ","Leveraging Auth0’s functionality would simplify the enrollment process, reduce friction, and improve user satisfaction."]}),g.jsxs("blockquote",{className:"mb-12 border-l-4 border-cyan-200/80 pl-6 italic text-stone-400",children:[g.jsx("strong",{className:"",children:"Clear Exit Paths and Issue Resolution:"})," ","Anticipating and resolving enrollment issues early would prevent users from getting stuck, ensuring smoother completion."]}),g.jsxs("blockquote",{className:"mb-12 border-l-4 border-cyan-200/80 pl-6 italic text-stone-400",children:[g.jsx("strong",{className:"",children:"Optional MFA Implementation:"})," ","Offering MFA as a configurable feature would meet varying security requirements, providing both flexibility and enhanced protection."]}),g.jsxs("blockquote",{className:"border-l-4 border-cyan-200/80 pl-6 italic text-stone-400",children:[g.jsx("strong",{className:"",children:"Recognized risk:"})," MFA introduces additional steps that may frustrate some users."]})]})]}),g.jsx("hr",{className:"border-stone-800 mb-20 "}),g.jsxs("div",{className:"lg:flex gap-12 mb-20 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Solution"})}),g.jsxs("div",{className:"lg:flex flex-3/4 gap-6",children:[g.jsx("div",{className:"flex-1/2",children:g.jsx("p",{children:"Partners and tenants can create a new MyConnect user by submitting the user’s first name, last name, and email. Once the license is deployed, users receive a one-time password via email—eliminating insecure credential delivery."})}),g.jsx("div",{className:"flex-1/2",children:g.jsx("p",{children:"Users click a link to log into the self-service portal, create a secure password, and, if MFA is enabled, complete the additional authentication steps. MFA options include One-Time Code (app-based), Text (SMS), and Email, offering flexibility and accommodating varying security preferences."})})]})]}),g.jsx("hr",{className:"border-stone-800 mb-20"}),g.jsxs("div",{className:"lg:flex gap-12 mb-20 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Feature"})}),g.jsxs("div",{className:"flex-3/4",children:[g.jsx("h4",{className:"text-cyan-300/90",children:"Simplified Self-Service Enrollment"}),g.jsx("p",{className:"mb-6",children:"Enables partners and tenants to onboard users independently, reducing IT tickets."}),g.jsx("h4",{className:"text-cyan-300/90",children:"Flexible MFA Options"}),g.jsx("p",{className:"mb-6",children:"Offers SMS, Email, and Authenticator App options to balance security and user convenience."}),g.jsx("h4",{className:"text-cyan-300/90",children:"Secure Credential Delivery"}),g.jsx("p",{children:"Automated one-time password (OTP) delivery via email to eliminate insecure manual credential sharing."}),g.jsx("h4",{className:"text-cyan-300/90",children:"Auth0 Integration"}),g.jsx("p",{children:"Streamlined IAM workflows and scalable identity management."})]})]}),g.jsx("hr",{className:"border-stone-800 mb-20"}),g.jsxs("div",{className:"lg:flex gap-12 mb-20 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Outcomes"})}),g.jsxs("div",{className:"lg:flex flex-3/4 gap-6",children:[g.jsxs("div",{className:"flex-1/2",children:[g.jsx("p",{children:"Initial user testing provided valuable insights into the MFA implementation. App-based one-time codes were the most frustrating due to device dependency and QR code setup, occasionally leading to lockouts."}),g.jsx("p",{children:"SMS-based authentication was smooth and intuitive, with minimal complaints, while email verification was convenient and easy to use, though slightly less secure than SMS."})]}),g.jsxs("div",{className:"flex-1/2",children:[g.jsx("p",{children:"These findings highlighted important trade-offs between security and usability."}),g.jsx("p",{children:"Default Auth0 settings did not fully address organizational security requirements, suggesting that future improvements should include penetration testing and a more tailored MFA strategy to optimize both security and user experience."})]})]})]})]})}),g.jsx("div",{className:"w-full bg-stone-800/20 py-20 border-stone-800 ",children:g.jsxs("div",{className:"max-w-screen-lg mx-auto px-6 xl:px-0",children:[g.jsx("h3",{className:"  mb-8 ",children:"Results & Business Impact"}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"text-cyan-300/90",children:"Seamless Onboarding"}),g.jsx("p",{children:"The new self-service enrollment flow reduces reliance on IT teams, removing manual bottlenecks and enabling faster account creation for partners and tenants."})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-cyan-300/90",children:"Flexible & Secure MFA"}),g.jsx("p",{children:"Optional MFA provides flexible security and compliance adherence."})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-cyan-300/90",children:"Scalable Architecture"}),g.jsxs("p",{children:["The Auth0-based solution provides a foundation that can grow with user adoption, supporting additional tenants and partners without major workflow redesigns."," "]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-cyan-300/90",children:"Improved User Confidence"}),g.jsx("p",{children:"By standardizing credential delivery and providing clear, guided enrollment steps, users experience fewer errors and confusion during onboarding."})]})]})]})}),g.jsxs("p",{className:" mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})]})}const X2="/portfolio/assets/Case-001-Main-Bb5-afll.png",W2="/portfolio/assets/Case-001-Wireframe-A-B5WwIc_s.png",q2="/portfolio/assets/Case-001-Wireframe-B-CDqVtw2P.png",Y2="/portfolio/assets/Case-001-Wireframe-C-CGX-9ymp.png",Z2="/portfolio/assets/Case-001-Wireframe-D-CzbuQvZ3.png";function K2(){const r=[{src:X2,alt:"Complex Contact priorization query allowing to filter and triage contact to whom"},{src:W2,alt:"UI Compnenets exploded view"},{src:q2,alt:"Wireframes A"},{src:Y2,alt:"Wireframes B"},{src:Z2,alt:"Wireframes c"}];return g.jsxs("div",{className:"text-white",children:[g.jsx("div",{className:"w-full text-gray-200 lg:flex gap-6",children:g.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto text-white px-6 xl:px-0",children:[g.jsx("h2",{className:"text-3xl pb-12 ",children:"Case 003 : Intellective Routing"}),g.jsx("h1",{className:"uppercase font-bold",children:"Dynamic Prioritization"}),g.jsx("h1",{className:"uppercase mb-16 font-light leading-none   text-white  bg-stone-800/50",children:"Flexible Query-Building for Sales Workflows"}),g.jsxs("div",{className:"lg:flex gap-6",children:[g.jsxs("div",{className:"flex-1/3 mb-6",children:[g.jsx("h2",{className:"text-cyan-300/90 font-normal",children:"Contributions"}),g.jsxs("ul",{className:"mt-4 space-y-1 text-lg text-stone-300",children:[g.jsx("li",{children:"Contextual & User Research"}),g.jsx("li",{children:"Workflow & Task Analysis"}),g.jsx("li",{children:"Technical Research"}),g.jsx("li",{children:"Feasibility Study"}),g.jsx("li",{children:"Feature Architecture & "}),g.jsx("li",{children:"Implementation Guidance"})]})]}),g.jsxs("div",{className:"flex-2/3",children:[g.jsx("h2",{className:"text-cyan-300/90  font-normal",children:"Assignment"}),g.jsx("p",{children:"The objective of this project was to design a flexible contact prioritization system within VanillaSoft that would allow sales teams to focus on the most relevant leads at the optimal time."}),g.jsx("p",{children:"The platform needed to support multiple levels of prioritization, such as P1 and P2, as well as more granular sub-levels like P1a or P1b. In addition to basic prioritization, users required the ability to define custom rules using different data points, including purchase history, engagement levels, and other behavioral indicators."}),g.jsxs("p",{children:[g.jsx("strong",{children:"My role"})," was to research customer needs, evaluate technical constraints, and design an interface capable of managing complex prioritization logic without overwhelming users. The goal was to create a system that remained flexible for advanced use cases while still being approachable for everyday users."]})]})]})]})}),g.jsx(ap,{images:r}),g.jsx("div",{className:"",children:g.jsxs("div",{className:"max-w-screen-lg mx-auto text-white",children:[g.jsxs("div",{className:"lg:flex gap-12 mb-20 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Overview"})}),g.jsxs("div",{className:"flex-3/4",children:[g.jsxs("p",{children:["VanillaSoft is a cloud-based sales management platform that integrates CRM, lead management, and telemarketing tools to support high-volume sales workflows."," "]}),g.jsx("p",{children:"A key differentiator of the platform is its queue-based model, which routes agents to the next best contact using available data points rather than relying on static contact lists. This approach improves operational efficiency by ensuring agents engage with the most relevant leads at the appropriate moment."}),g.jsx("p",{children:"Introducing dynamic prioritization required extending this queue logic so that organizations could better control how leads were ranked and distributed to agents based on their own business strategies."})]})]}),g.jsx("hr",{className:"border-stone-800 mb-20"}),g.jsxs("div",{className:"lg:flex gap-12 mb-20 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"m",children:"Observation"})}),g.jsxs("div",{className:"flex-3/4",children:[g.jsx("p",{children:"Several customers requested the ability to prioritize contacts using multiple levels of importance. Their goal was to focus sales efforts on leads that were more likely to convert while still maintaining visibility over the broader pipeline."}),g.jsx("p",{children:"At the time, the platform lacked the ability to support this type of dynamic prioritization. Contacts were processed through the queue, but users could not define layered rules based on different attributes or conditions."}),g.jsx("p",{children:"The challenge was not only technical but also conceptual. Customers needed the flexibility to combine many different data points and conditions, sometimes creating complex scenarios where contacts should be prioritized under certain circumstances and deprioritized under others. At the same time, the interface needed to remain understandable and manageable for sales teams who were not necessarily technical users."})]})]}),g.jsx("hr",{className:"border-stone-800 mb-20"}),g.jsxs("div",{className:"lg:flex gap-12 mb-20 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"m",children:"Research"})}),g.jsxs("div",{className:"flex-3/4",children:[g.jsx("p",{children:"To understand the scope of the problem, we reviewed customer requests and documented a wide range of prioritization scenarios. These examples revealed that organizations often wanted to combine multiple conditions when determining which leads should be prioritized. In some cases, contacts might need to be prioritized if they met several criteria but deprioritized if another condition was present."}),g.jsx("p",{children:"Because the number of possible combinations was large, we concluded that the safest approach would be to design a framework capable of supporting a wide range of use cases from the start. Restricting the system too early could lead to limitations and future rework as new customer requirements emerged."}),g.jsx("p",{children:"Another important aspect of the research focused on the user interface. The feature needed to present complex rule logic in a way that remained accessible to users while still offering the flexibility required by more advanced workflows."})]})]}),g.jsx("hr",{className:"border-stone-800 mb-20"}),g.jsxs("div",{className:"mb-20 px-6 xl:px-0",children:[g.jsx("h3",{className:"",children:"Hypothesis"}),g.jsxs("div",{children:[g.jsx("blockquote",{className:"mt-12 border-l-4 border-teal-300/80 pl-6 italic text-white text-2xl",children:"1. We hypothesized that introducing a flexible prioritization system would significantly improve how sales teams manage and engage with leads. By allowing users to define multiple priority levels and apply rules based on relevant data points, agents would be guided toward the most promising opportunities at the right time."}),g.jsx("blockquote",{className:"mt-12 border-l-4 border-teal-300/80 pl-6 italic text-white text-2xl",children:"2. This capability was expected to improve operational efficiency and potentially increase conversion rates by enabling more targeted sales strategies. At the same time, we recognized that a feature of this complexity could introduce usability challenges. Ensuring that the interface remained intuitive and navigable was therefore critical to preventing cognitive overload and encouraging adoption."})]})]}),g.jsx("hr",{className:"border-stone-800 mb-20"}),g.jsxs("div",{className:"lg:flex gap-12 mb-20 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Solution"})}),g.jsxs("div",{className:"lg:flex flex-3/4 gap-6",children:[g.jsxs("div",{className:"flex-1/2",children:[g.jsx("p",{children:"To support dynamic prioritization, a query-building framework was introduced that allowed users to define and manage complex prioritization rules using different types of data."}),g.jsx("p",{children:"The system supports multiple prioritization criteria and enables users to combine conditions using logical operators such as AND and OR. This makes it possible to create layered rules that reflect the realities of sales workflows, where decisions are often based on several data points rather than a single attribute."})]}),g.jsxs("div",{className:"flex-1/2",children:[g.jsx("p",{children:"Users can also define priority levels such as P1 or P2 and extend them with sub-levels when additional granularity is required. This allows organizations to structure their lead prioritization in a way that reflects their own business processes."}),g.jsx("p",{children:"A significant focus was placed on keeping the interface approachable despite the flexibility of the system. Visual guidance, tooltips, and a structured workflow help users build prioritization rules step by step, reducing the risk of confusion while still supporting advanced configurations."})]})]})]}),g.jsx("hr",{className:"border-stone-800 mb-20"}),g.jsxs("div",{className:"lg:flex gap-12 mb-20 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Feature"})}),g.jsxs("div",{className:"flex-3/4",children:[g.jsx("h4",{className:"text-cyan-300/90",children:"Multi‑Criteria Prioritization"}),g.jsx("p",{children:"Users can define rules based on numerous data attributes such as engagement, behavior, and historical performance."}),g.jsx("h4",{className:"text-cyan-300/90",children:"Flexible Rule Logic"}),g.jsx("p",{children:"Support for logical operators and layered conditions allows the construction of nuanced prioritization strategies without coding."}),g.jsx("h4",{className:"text-cyan-300/90",children:"Custom Priority Levels"}),g.jsx("p",{children:"Priority groups and sub‑levels give organizations the flexibility to represent their sales logic structurally."}),g.jsx("h4",{className:"text-cyan-300/90",children:"Guided Rule Builder UI"}),g.jsx("p",{children:"Visual cues and structured workflows make rule building understandable and accessible, reducing cognitive overload."})]})]}),g.jsx("hr",{className:"border-stone-800 mb-20"}),g.jsxs("div",{className:"lg:flex gap-12 mb-20 px-6 xl:px-0",children:[g.jsx("div",{className:"flex-1/4",children:g.jsx("h3",{className:"",children:"Outcomes"})}),g.jsxs("div",{className:"lg:flex flex-3/4 gap-12",children:[g.jsx("div",{className:"flex-1/2",children:g.jsx("p",{children:"The prioritization framework introduced a new level of flexibility in how sales teams manage their lead queues. Instead of relying on static prioritization rules, organizations can now adapt their strategies based on the data available in their CRM."})}),g.jsx("div",{className:"flex-1/2",children:g.jsx("p",{children:"Initial feedback indicated that users appreciated the increased visibility into prioritization logic and the ability to refine how leads were distributed to agents. The system also reduced the need for manual lead management, allowing teams to focus more directly on sales activities."})})]})]})]})}),g.jsx("div",{className:"w-full bg-stone-800/20 py-20 border-stone-800",children:g.jsxs("div",{className:"max-w-screen-lg mx-auto px-6 xl:px-0",children:[g.jsx("h3",{className:"  mb-8 ",children:"Results & Business Impact"}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-12",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-6xl mb-2 text-cyan-300/90",children:"+20%"}),g.jsx("p",{children:"Increase in dials"})]}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-6xl mb-2 text-cyan-300/90",children:"+22%"}),g.jsx("p",{children:"Increase in conversions"})]}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-6xl mb-2 text-cyan-300/90",children:"-40%"}),g.jsx("p",{children:"Decrease in negative dispositions"})]}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-6xl mb-2 text-cyan-300/90",children:"+28%"}),g.jsx("p",{children:"Increase in sales"})]})]}),g.jsx("small",{children:"Source: VanillaSoft"})]})}),g.jsxs("p",{className:" mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})]})}const Q2="/portfolio/assets/SDWAN-Dashboard-Bk5a96ak.png",J2="/portfolio/assets/SDWAN-Customer%20Inventory-D2RJIWV8.png",$2="/portfolio/assets/SDWAN-Add%20Site%20and%20Device%20Dialogs-QtfcWiUb.png",ew="/portfolio/assets/SDWAN-Sites%20and%20Devices%20Management-BRuBVUDL.png",tw="/portfolio/assets/SDWAN-Site%20Dashboard-DZDi9BWm.png",nw="/portfolio/assets/SDWAN-LAN%20Configuration-BA02YH_L.png",iw="/portfolio/assets/SDWAN-Add%20SNAT%20and%20DNAT%20Dialogs-tNtNpK4U.png",aw="/portfolio/assets/SDWAN-Site%20Architecture-Uam3CbTc.png";function sw(){return g.jsxs("div",{className:"text-white",children:[g.jsx("div",{className:"w-full text-gray-200",children:g.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto text-white px-6 xl:px-0",children:[g.jsx("h2",{className:"text-3xl pb-12 ",children:"Project 001 : SD-WAN Orchestrator"}),g.jsx("h1",{className:"uppercase leading-none font-bold",children:"Secure & Resilient"}),g.jsx("h1",{className:"uppercase mb-16 leading-none   text-white  bg-stone-800/50",children:"Zero-Touch Provisioning For Multi-tenacy"}),g.jsxs("div",{className:"lg:flex gap-6",children:[g.jsxs("div",{className:"flex-1/3  mb-6",children:[g.jsx("h2",{className:"text-cyan-300/90 font-normal",children:"Contributions"}),g.jsxs("ul",{className:"mt-4 space-y-1 text-lg text-zinc-300",children:[g.jsx("li",{children:"Information Architecture"}),g.jsx("li",{children:"Systems Thinking"}),g.jsx("li",{children:"Product Design"}),g.jsx("li",{children:"Design System"}),g.jsx("li",{children:"Data Visualization"})]})]}),g.jsxs("div",{className:"flex-2/3",children:[g.jsx("h2",{className:"text-cyan-300/90 font-normal",children:"Assignment"}),g.jsx("p",{children:"Design and enhance a multi-tenant SD-WAN Orchestrator to provide secure, scalable, and intuitive network management. Focus on end-to-end workflows including zero-touch provisioning, device onboarding, policy configuration, and monitoring. Ensure the platform supports advanced features like SD-WAN, Zero Trust Network Access (ZTNA), Firewall as a Service (FWaaS), and Secure Web Gateway (SWG), while maintaining usability, system observability, and seamless session continuity for enterprise users."})]})]})]})}),g.jsx("div",{className:"text-gray-200  bg-zinc-900/50",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:Q2,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200 ",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:J2,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200  bg-zinc-900/50",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:$2,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200 ",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:ew,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200  bg-zinc-900/50",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:tw,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200 ",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:nw,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200  bg-zinc-900/50",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:iw,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200 ",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:aw,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsxs("p",{className:" mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})]})}const rw="/portfolio/assets/AN-MyConnect-01-0_0oPeOX.png",ow="/portfolio/assets/AN-MyConnect-02-Eg7xtiMR.png",lw="/portfolio/assets/AN-MyConnect-03-CbEAz5qL.png",cw="/portfolio/assets/AN-MyConnect-04-BDLs-YlV.png";function uw(){return g.jsxs("div",{className:"text-white",children:[g.jsx("div",{className:"w-full text-gray-200",children:g.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto text-white  px-6 xl:px-0",children:[g.jsx("h2",{className:"text-3xl pb-12 ",children:"Project 002 : My Connect - Adaptiv Networks"}),g.jsx("h1",{className:"uppercase   leading-none font-bold",children:"Hybrid Workforce"}),g.jsx("h1",{className:"uppercase mb-16 leading-none   text-white  bg-stone-800/50",children:"SD-WAN Remote Access for Distributed Teams"}),g.jsxs("div",{className:"md:flex gap-6",children:[g.jsxs("div",{className:"flex-1/3  mb-6",children:[g.jsx("h2",{className:"text-cyan-300/90 font-normal",children:"Contributions"}),g.jsxs("ul",{className:"mt-4 space-y-1 text-lg text-zinc-300",children:[g.jsx("li",{children:"Visual Design"}),g.jsx("li",{children:"UI/UX Design"}),g.jsx("li",{children:"Authentication"}),g.jsx("li",{children:"Observability"})]})]}),g.jsxs("div",{className:"flex-2/3",children:[g.jsx("h2",{className:"text-cyan-300/90 font-normal",children:"Assignment"}),g.jsxs("p",{children:["Visual redesign of the My Connect client app to improve usability and clarity while enabling secure remote access for distributed teams. Covered the full access lifecycle, including enrollment, authentication, and session continuity, with integrated observability to track user flows and system performance. The client supported multiple platforms, including mobile and desktop."," "]})]})]})]})}),g.jsx("div",{className:"text-gray-200 border-y border-zinc-800 bg-zinc-900/50",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:rw,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200 border-y border-zinc-800",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:ow,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200 border-y border-zinc-800 bg-zinc-900/50",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:lw,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200 border-y border-zinc-800 ",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:cw,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsxs("p",{className:" mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})]})}const fw="/portfolio/assets/DAT-Step%2001-BJNi5Ocy.png",dw="/portfolio/assets/DAT-Step%2002-Q4RaQXnV.png",hw="/portfolio/assets/DAT-Step%2003-CaI53oNd.png";function pw(){return g.jsxs("div",{children:[g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"mb-16 max-w-screen-lg mx-auto text-white px-6 xl:px-0",children:[g.jsx("h2",{className:"text-3xl pb-12 ",children:"Project 003 : MD Physicians"}),g.jsx("h1",{className:"uppercase  leading-none font-semibold",children:"Debt Assessment Tool"}),g.jsx("h1",{className:"uppercase mb-16 leading-none   text-white  bg-stone-800/50",children:"Helping Physicians Manage debt smarter"}),g.jsxs("div",{className:"md:flex gap-6",children:[g.jsxs("div",{className:"flex-1/3 mb-6",children:[g.jsx("h2",{className:"text-cyan-300/90 font-normal",children:"Contributions"}),g.jsxs("ul",{className:"mt-4 space-y-1 text-lg",children:[g.jsx("li",{children:"Information Architecture"}),g.jsx("li",{children:"UX Strategy"}),g.jsx("li",{children:"Interaction Logic"}),g.jsx("li",{children:"Marketing"}),g.jsx("li",{children:"Lead Generation"})]})]}),g.jsxs("div",{className:"flex-2/3",children:[g.jsx("h2",{className:"text-cyan-300/90 font-normal",children:"Assignment"}),g.jsxs("p",{children:["Designed and implemented a multi-vector financial modeling engine for MD Financial. The tool translates complex user requirements—including diverse income streams, asset portfolios, and debt obligations—into a unified cash flow analysis. This approach enables physicians to simulate multiple financial scenarios and visualize their long-term effects on liquidity and retirement readiness."," "]})," "]})]})]})}),g.jsx("div",{className:"text-gray-200 border-y border-zinc-800 bg-stone-900/50",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:fw,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200 border-y border-zinc-800",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:dw,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsx("div",{className:"text-gray-200 border-y border-zinc-800 bg-stone-900/50",children:g.jsx("div",{className:"w-full",children:g.jsxs("div",{className:"max-w-screen-xl mx-auto py-16 px-6 xl:px-0",children:[g.jsx("img",{src:hw,className:"border-zinc-700 border shadow-2xl",alt:""}),g.jsx("p",{className:"mt-4 italic text-center"})]})})}),g.jsxs("p",{className:" mt-24 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})]})}function mw(){return g.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-top text-stone-100 mt-12 px-6 ",children:[g.jsx("h1",{className:"text-purple-400/80 md:text-6xl mb-4 text-center",children:"Coming Soon — Resume"}),g.jsx("p",{className:"text-center text-stone-200 mb-8",children:"Exciting things are on the way. Stay tuned!"})]})}function gw(){return g.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-top mt-12 px-6 ",children:[g.jsx("h1",{className:"text-5xl md:text-6xl font-bold mb-4 text-center",children:"¯\\_(ツ)_/¯"}),g.jsx("h1",{className:"text-3xl md:text-4xl font-bold mt-4 mb-4 text-center",children:"Sorry, this page will be updated soon"}),g.jsxs("p",{className:"text-stone-200 text-sm mt-8 text-center",children:["© ",new Date().getFullYear()," Yannick Boulanger. All rights reserved."]})]})}function vw(){const[r,e]=Ne.useState(window.innerWidth>=768),[i,s]=Ne.useState(window.innerWidth<768),l=Ne.useRef(null),c=Ps();rM(l);const f=()=>e(p=>!p);return Ne.useEffect(()=>{const p=()=>{const m=window.innerWidth<768;s(m),e(!m)};return window.addEventListener("resize",p),p(),()=>window.removeEventListener("resize",p)},[]),Ne.useEffect(()=>{i&&e(!1)},[c.pathname,i]),g.jsxs(g.Fragment,{children:[g.jsx(_2,{className:"bg-stone-950"}),g.jsxs("div",{className:"flex flex-col h-screen w-screen",children:[g.jsx(S2,{toggleMenu:f}),g.jsxs("div",{className:"flex flex-1 overflow-hidden relative",children:[g.jsx("aside",{className:`w-56 h-full overflow-y-auto flex flex-col transition-all duration-300 
              ${r?"ml-0":"-ml-56"} top-0 left-0 z-40 relative`,children:g.jsx(y2,{})}),r&&i&&g.jsx("div",{onClick:()=>e(!1),className:"fixed inset-0 z-30",style:{backgroundColor:"rgba(0, 0, 0, 0.3)"}}),g.jsx("main",{ref:l,className:"flex-1 overflow-y-auto overscroll-contain ml-0 py-24",children:g.jsxs(Zy,{children:[g.jsx(zi,{path:"/",element:g.jsx(U2,{})}),g.jsx(zi,{path:"/case01",element:g.jsx(z2,{})}),g.jsx(zi,{path:"/case02",element:g.jsx(k2,{})}),g.jsx(zi,{path:"/case03",element:g.jsx(K2,{})}),g.jsx(zi,{path:"/portfolio01",element:g.jsx(sw,{})}),g.jsx(zi,{path:"/portfolio02",element:g.jsx(uw,{})}),g.jsx(zi,{path:"/portfolio03",element:g.jsx(pw,{})}),g.jsx(zi,{path:"/resume",element:g.jsx(mw,{})}),g.jsx(zi,{path:"/contact",element:g.jsx(gw,{})})]})})]})]})]})}ty.createRoot(document.getElementById("root")).render(g.jsx(Yv.StrictMode,{children:g.jsx(nM,{children:g.jsx(vw,{})})}));
