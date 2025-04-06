(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ur(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ne={},Zt=[],Je=()=>{},sl=()=>!1,Ps=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fr=t=>t.startsWith("onUpdate:"),pe=Object.assign,$r=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rl=Object.prototype.hasOwnProperty,J=(t,e)=>rl.call(t,e),H=Array.isArray,en=t=>Os(t)==="[object Map]",Ho=t=>Os(t)==="[object Set]",V=t=>typeof t=="function",oe=t=>typeof t=="string",Ot=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",jo=t=>(ie(t)||V(t))&&V(t.then)&&V(t.catch),Vo=Object.prototype.toString,Os=t=>Vo.call(t),il=t=>Os(t).slice(8,-1),Wo=t=>Os(t)==="[object Object]",Br=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,En=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ks=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ol=/-(\w)/g,De=ks(t=>t.replace(ol,(e,n)=>n?n.toUpperCase():"")),al=/\B([A-Z])/g,zt=ks(t=>t.replace(al,"-$1").toLowerCase()),Ns=ks(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gs=ks(t=>t?`on${Ns(t)}`:""),Rt=(t,e)=>!Object.is(t,e),qs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},zo=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},cl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _i;const Ds=()=>_i||(_i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xs(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=oe(s)?dl(s):xs(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(oe(t)||ie(t))return t}const ll=/;(?![^(]*\))/g,ul=/:([^]+)/,fl=/\/\*[^]*?\*\//g;function dl(t){const e={};return t.replace(fl,"").split(ll).forEach(n=>{if(n){const s=n.split(ul);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ms(t){let e="";if(oe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Ms(t[n]);s&&(e+=s+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pl=Ur(hl);function Ko(t){return!!t||t===""}const Go=t=>!!(t&&t.__v_isRef===!0),Nn=t=>oe(t)?t:t==null?"":H(t)||ie(t)&&(t.toString===Vo||!V(t.toString))?Go(t)?Nn(t.value):JSON.stringify(t,qo,2):String(t),qo=(t,e)=>Go(e)?qo(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Js(s,i)+" =>"]=r,n),{})}:Ho(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Js(n))}:Ot(e)?Js(e):ie(e)&&!H(e)&&!Wo(e)?String(e):e,Js=(t,e="")=>{var n;return Ot(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class gl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!e&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Se;try{return Se=this,e()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ml(){return Se}let te;const Ys=new WeakSet;class Jo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ys.has(this)&&(Ys.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vi(this),Qo(this);const e=te,n=Fe;te=this,Fe=!0;try{return this.fn()}finally{Zo(this),te=e,Fe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vr(e);this.deps=this.depsTail=void 0,vi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ys.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gr(this)&&this.run()}get dirty(){return gr(this)}}let Yo=0,Tn,Sn;function Xo(t,e=!1){if(t.flags|=8,e){t.next=Sn,Sn=t;return}t.next=Tn,Tn=t}function Hr(){Yo++}function jr(){if(--Yo>0)return;if(Sn){let e=Sn;for(Sn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Tn;){let e=Tn;for(Tn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Qo(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zo(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Vr(s),_l(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function gr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ea(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ea(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Dn))return;t.globalVersion=Dn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!gr(t)){t.flags&=-3;return}const n=te,s=Fe;te=t,Fe=!0;try{Qo(t);const r=t.fn(t._value);(e.version===0||Rt(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{te=n,Fe=s,Zo(t),t.flags&=-3}}function Vr(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vr(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _l(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Fe=!0;const ta=[];function kt(){ta.push(Fe),Fe=!1}function Nt(){const t=ta.pop();Fe=t===void 0?!0:t}function vi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=te;te=void 0;try{e()}finally{te=n}}}let Dn=0;class vl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!te||!Fe||te===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==te)n=this.activeLink=new vl(te,this),te.deps?(n.prevDep=te.depsTail,te.depsTail.nextDep=n,te.depsTail=n):te.deps=te.depsTail=n,na(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=te.depsTail,n.nextDep=void 0,te.depsTail.nextDep=n,te.depsTail=n,te.deps===n&&(te.deps=s)}return n}trigger(e){this.version++,Dn++,this.notify(e)}notify(e){Hr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{jr()}}}function na(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)na(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const mr=new WeakMap,$t=Symbol(""),_r=Symbol(""),xn=Symbol("");function ue(t,e,n){if(Fe&&te){let s=mr.get(t);s||mr.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Wr),r.map=s,r.key=n),r.track()}}function ot(t,e,n,s,r,i){const o=mr.get(t);if(!o){Dn++;return}const c=a=>{a&&a.trigger()};if(Hr(),e==="clear")o.forEach(c);else{const a=H(t),l=a&&Br(n);if(a&&n==="length"){const u=Number(s);o.forEach((d,p)=>{(p==="length"||p===xn||!Ot(p)&&p>=u)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),l&&c(o.get(xn)),e){case"add":a?l&&c(o.get("length")):(c(o.get($t)),en(t)&&c(o.get(_r)));break;case"delete":a||(c(o.get($t)),en(t)&&c(o.get(_r)));break;case"set":en(t)&&c(o.get($t));break}}jr()}function Yt(t){const e=q(t);return e===t?e:(ue(e,"iterate",xn),Ne(t)?e:e.map(fe))}function Ls(t){return ue(t=q(t),"iterate",xn),t}const yl={__proto__:null,[Symbol.iterator](){return Xs(this,Symbol.iterator,fe)},concat(...t){return Yt(this).concat(...t.map(e=>H(e)?Yt(e):e))},entries(){return Xs(this,"entries",t=>(t[1]=fe(t[1]),t))},every(t,e){return st(this,"every",t,e,void 0,arguments)},filter(t,e){return st(this,"filter",t,e,n=>n.map(fe),arguments)},find(t,e){return st(this,"find",t,e,fe,arguments)},findIndex(t,e){return st(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return st(this,"findLast",t,e,fe,arguments)},findLastIndex(t,e){return st(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return st(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qs(this,"includes",t)},indexOf(...t){return Qs(this,"indexOf",t)},join(t){return Yt(this).join(t)},lastIndexOf(...t){return Qs(this,"lastIndexOf",t)},map(t,e){return st(this,"map",t,e,void 0,arguments)},pop(){return yn(this,"pop")},push(...t){return yn(this,"push",t)},reduce(t,...e){return yi(this,"reduce",t,e)},reduceRight(t,...e){return yi(this,"reduceRight",t,e)},shift(){return yn(this,"shift")},some(t,e){return st(this,"some",t,e,void 0,arguments)},splice(...t){return yn(this,"splice",t)},toReversed(){return Yt(this).toReversed()},toSorted(t){return Yt(this).toSorted(t)},toSpliced(...t){return Yt(this).toSpliced(...t)},unshift(...t){return yn(this,"unshift",t)},values(){return Xs(this,"values",fe)}};function Xs(t,e,n){const s=Ls(t),r=s[e]();return s!==t&&!Ne(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const bl=Array.prototype;function st(t,e,n,s,r,i){const o=Ls(t),c=o!==t&&!Ne(t),a=o[e];if(a!==bl[e]){const d=a.apply(t,i);return c?fe(d):d}let l=n;o!==t&&(c?l=function(d,p){return n.call(this,fe(d),p,t)}:n.length>2&&(l=function(d,p){return n.call(this,d,p,t)}));const u=a.call(o,l,s);return c&&r?r(u):u}function yi(t,e,n,s){const r=Ls(t);let i=n;return r!==t&&(Ne(t)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,t)}):i=function(o,c,a){return n.call(this,o,fe(c),a,t)}),r[e](i,...s)}function Qs(t,e,n){const s=q(t);ue(s,"iterate",xn);const r=s[e](...n);return(r===-1||r===!1)&&Gr(n[0])?(n[0]=q(n[0]),s[e](...n)):r}function yn(t,e,n=[]){kt(),Hr();const s=q(t)[e].apply(t,n);return jr(),Nt(),s}const wl=Ur("__proto__,__v_isRef,__isVue"),sa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ot));function Il(t){Ot(t)||(t=String(t));const e=q(this);return ue(e,"has",t),e.hasOwnProperty(t)}class ra{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Nl:ca:i?aa:oa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!r){let a;if(o&&(a=yl[n]))return a;if(n==="hasOwnProperty")return Il}const c=Reflect.get(e,n,he(e)?e:s);return(Ot(n)?sa.has(n):wl(n))||(r||ue(e,"get",n),i)?c:he(c)?o&&Br(n)?c:c.value:ie(c)?r?ua(c):Us(c):c}}class ia extends ra{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const a=Ht(i);if(!Ne(s)&&!Ht(s)&&(i=q(i),s=q(s)),!H(e)&&he(i)&&!he(s))return a?!1:(i.value=s,!0)}const o=H(e)&&Br(n)?Number(n)<e.length:J(e,n),c=Reflect.set(e,n,s,he(e)?e:r);return e===q(r)&&(o?Rt(s,i)&&ot(e,"set",n,s):ot(e,"add",n,s)),c}deleteProperty(e,n){const s=J(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&ot(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ot(n)||!sa.has(n))&&ue(e,"has",n),s}ownKeys(e){return ue(e,"iterate",H(e)?"length":$t),Reflect.ownKeys(e)}}class El extends ra{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Tl=new ia,Sl=new El,Rl=new ia(!0);const vr=t=>t,Zn=t=>Reflect.getPrototypeOf(t);function Al(t,e,n){return function(...s){const r=this.__v_raw,i=q(r),o=en(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=r[t](...s),u=n?vr:e?yr:fe;return!e&&ue(i,"iterate",a?_r:$t),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:c?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function es(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cl(t,e){const n={get(r){const i=this.__v_raw,o=q(i),c=q(r);t||(Rt(r,c)&&ue(o,"get",r),ue(o,"get",c));const{has:a}=Zn(o),l=e?vr:t?yr:fe;if(a.call(o,r))return l(i.get(r));if(a.call(o,c))return l(i.get(c));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&ue(q(r),"iterate",$t),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=q(i),c=q(r);return t||(Rt(r,c)&&ue(o,"has",r),ue(o,"has",c)),r===c?i.has(r):i.has(r)||i.has(c)},forEach(r,i){const o=this,c=o.__v_raw,a=q(c),l=e?vr:t?yr:fe;return!t&&ue(a,"iterate",$t),c.forEach((u,d)=>r.call(i,l(u),l(d),o))}};return pe(n,t?{add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear")}:{add(r){!e&&!Ne(r)&&!Ht(r)&&(r=q(r));const i=q(this);return Zn(i).has.call(i,r)||(i.add(r),ot(i,"add",r,r)),this},set(r,i){!e&&!Ne(i)&&!Ht(i)&&(i=q(i));const o=q(this),{has:c,get:a}=Zn(o);let l=c.call(o,r);l||(r=q(r),l=c.call(o,r));const u=a.call(o,r);return o.set(r,i),l?Rt(i,u)&&ot(o,"set",r,i):ot(o,"add",r,i),this},delete(r){const i=q(this),{has:o,get:c}=Zn(i);let a=o.call(i,r);a||(r=q(r),a=o.call(i,r)),c&&c.call(i,r);const l=i.delete(r);return a&&ot(i,"delete",r,void 0),l},clear(){const r=q(this),i=r.size!==0,o=r.clear();return i&&ot(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Al(r,t,e)}),n}function zr(t,e){const n=Cl(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(J(n,r)&&r in s?n:s,r,i)}const Pl={get:zr(!1,!1)},Ol={get:zr(!1,!0)},kl={get:zr(!0,!1)};const oa=new WeakMap,aa=new WeakMap,ca=new WeakMap,Nl=new WeakMap;function Dl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xl(t){return t.__v_skip||!Object.isExtensible(t)?0:Dl(il(t))}function Us(t){return Ht(t)?t:Kr(t,!1,Tl,Pl,oa)}function la(t){return Kr(t,!1,Rl,Ol,aa)}function ua(t){return Kr(t,!0,Sl,kl,ca)}function Kr(t,e,n,s,r){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=xl(t);if(o===0)return t;const c=new Proxy(t,o===2?s:n);return r.set(t,c),c}function tn(t){return Ht(t)?tn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ht(t){return!!(t&&t.__v_isReadonly)}function Ne(t){return!!(t&&t.__v_isShallow)}function Gr(t){return t?!!t.__v_raw:!1}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function Ml(t){return!J(t,"__v_skip")&&Object.isExtensible(t)&&zo(t,"__v_skip",!0),t}const fe=t=>ie(t)?Us(t):t,yr=t=>ie(t)?ua(t):t;function he(t){return t?t.__v_isRef===!0:!1}function ae(t){return fa(t,!1)}function Ll(t){return fa(t,!0)}function fa(t,e){return he(t)?t:new Ul(t,e)}class Ul{constructor(e,n){this.dep=new Wr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:q(e),this._value=n?e:fe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ne(e)||Ht(e);e=s?e:q(e),Rt(e,n)&&(this._rawValue=e,this._value=s?e:fe(e),this.dep.trigger())}}function nn(t){return he(t)?t.value:t}const Fl={get:(t,e,n)=>e==="__v_raw"?t:nn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return he(r)&&!he(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function da(t){return tn(t)?t:new Proxy(t,Fl)}class $l{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Wr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&te!==this)return Xo(this,!0),!0}get value(){const e=this.dep.track();return ea(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bl(t,e,n=!1){let s,r;return V(t)?s=t:(s=t.get,r=t.set),new $l(s,r,n)}const ts={},ds=new WeakMap;let Lt;function Hl(t,e=!1,n=Lt){if(n){let s=ds.get(n);s||ds.set(n,s=[]),s.push(t)}}function jl(t,e,n=ne){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:c,call:a}=n,l=R=>r?R:Ne(R)||r===!1||r===0?It(R,1):It(R);let u,d,p,m,I=!1,S=!1;if(he(t)?(d=()=>t.value,I=Ne(t)):tn(t)?(d=()=>l(t),I=!0):H(t)?(S=!0,I=t.some(R=>tn(R)||Ne(R)),d=()=>t.map(R=>{if(he(R))return R.value;if(tn(R))return l(R);if(V(R))return a?a(R,2):R()})):V(t)?e?d=a?()=>a(t,2):t:d=()=>{if(p){kt();try{p()}finally{Nt()}}const R=Lt;Lt=u;try{return a?a(t,3,[m]):t(m)}finally{Lt=R}}:d=Je,e&&r){const R=d,U=r===!0?1/0:r;d=()=>It(R(),U)}const x=ml(),D=()=>{u.stop(),x&&x.active&&$r(x.effects,u)};if(i&&e){const R=e;e=(...U)=>{R(...U),D()}}let k=S?new Array(t.length).fill(ts):ts;const N=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(e){const U=u.run();if(r||I||(S?U.some((j,W)=>Rt(j,k[W])):Rt(U,k))){p&&p();const j=Lt;Lt=u;try{const W=[U,k===ts?void 0:S&&k[0]===ts?[]:k,m];a?a(e,3,W):e(...W),k=U}finally{Lt=j}}}else u.run()};return c&&c(N),u=new Jo(d),u.scheduler=o?()=>o(N,!1):N,m=R=>Hl(R,!1,u),p=u.onStop=()=>{const R=ds.get(u);if(R){if(a)a(R,4);else for(const U of R)U();ds.delete(u)}},e?s?N(!0):k=u.run():o?o(N.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function It(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,he(t))It(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)It(t[s],e,n);else if(Ho(t)||en(t))t.forEach(s=>{It(s,e,n)});else if(Wo(t)){for(const s in t)It(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&It(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vn(t,e,n,s){try{return s?t(...s):t()}catch(r){Fs(r,e,n)}}function Qe(t,e,n,s){if(V(t)){const r=Vn(t,e,n,s);return r&&jo(r)&&r.catch(i=>{Fs(i,e,n)}),r}if(H(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Qe(t[i],e,n,s));return r}}function Fs(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ne;if(e){let c=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,a,l)===!1)return}c=c.parent}if(i){kt(),Vn(i,null,10,[t,a,l]),Nt();return}}Vl(t,n,r,s,o)}function Vl(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const me=[];let Ge=-1;const sn=[];let yt=null,Xt=0;const ha=Promise.resolve();let hs=null;function pa(t){const e=hs||ha;return t?e.then(this?t.bind(this):t):e}function Wl(t){let e=Ge+1,n=me.length;for(;e<n;){const s=e+n>>>1,r=me[s],i=Mn(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function qr(t){if(!(t.flags&1)){const e=Mn(t),n=me[me.length-1];!n||!(t.flags&2)&&e>=Mn(n)?me.push(t):me.splice(Wl(e),0,t),t.flags|=1,ga()}}function ga(){hs||(hs=ha.then(_a))}function zl(t){H(t)?sn.push(...t):yt&&t.id===-1?yt.splice(Xt+1,0,t):t.flags&1||(sn.push(t),t.flags|=1),ga()}function bi(t,e,n=Ge+1){for(;n<me.length;n++){const s=me[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ma(t){if(sn.length){const e=[...new Set(sn)].sort((n,s)=>Mn(n)-Mn(s));if(sn.length=0,yt){yt.push(...e);return}for(yt=e,Xt=0;Xt<yt.length;Xt++){const n=yt[Xt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yt=null,Xt=0}}const Mn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _a(t){try{for(Ge=0;Ge<me.length;Ge++){const e=me[Ge];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ge<me.length;Ge++){const e=me[Ge];e&&(e.flags&=-2)}Ge=-1,me.length=0,ma(),hs=null,(me.length||sn.length)&&_a()}}let Le=null,va=null;function ps(t){const e=Le;return Le=t,va=t&&t.type.__scopeId||null,e}function Kl(t,e=Le,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Oi(-1);const i=ps(e);let o;try{o=t(...r)}finally{ps(i),s._d&&Oi(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const c=r[o];i&&(c.oldValue=i[o].value);let a=c.dir[s];a&&(kt(),Qe(a,n,8,[t.el,c,t,e]),Nt())}}const Gl=Symbol("_vte"),ql=t=>t.__isTeleport;function Jr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Jr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ya(t,e){return V(t)?pe({name:t.name},e,{setup:t}):t}function ba(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function gs(t,e,n,s,r=!1){if(H(t)){t.forEach((I,S)=>gs(I,e&&(H(e)?e[S]:e),n,s,r));return}if(Rn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&gs(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Qr(s.component):s.el,o=r?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===ne?c.refs={}:c.refs,d=c.setupState,p=q(d),m=d===ne?()=>!1:I=>J(p,I);if(l!=null&&l!==a&&(oe(l)?(u[l]=null,m(l)&&(d[l]=null)):he(l)&&(l.value=null)),V(a))Vn(a,c,12,[o,u]);else{const I=oe(a),S=he(a);if(I||S){const x=()=>{if(t.f){const D=I?m(a)?d[a]:u[a]:a.value;r?H(D)&&$r(D,i):H(D)?D.includes(i)||D.push(i):I?(u[a]=[i],m(a)&&(d[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else I?(u[a]=o,m(a)&&(d[a]=o)):S&&(a.value=o,t.k&&(u[t.k]=o))};o?(x.id=-1,Te(x,n)):x()}}}Ds().requestIdleCallback;Ds().cancelIdleCallback;const Rn=t=>!!t.type.__asyncLoader,wa=t=>t.type.__isKeepAlive;function Jl(t,e){Ia(t,"a",e)}function Yl(t,e){Ia(t,"da",e)}function Ia(t,e,n=de){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($s(e,s,n),n){let r=n.parent;for(;r&&r.parent;)wa(r.parent.vnode)&&Xl(s,e,n,r),r=r.parent}}function Xl(t,e,n,s){const r=$s(e,t,s,!0);Ea(()=>{$r(s[e],r)},n)}function $s(t,e,n=de,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{kt();const c=zn(n),a=Qe(e,n,t,o);return c(),Nt(),a});return s?r.unshift(i):r.push(i),i}}const ht=t=>(e,n=de)=>{(!Fn||t==="sp")&&$s(t,(...s)=>e(...s),n)},Ql=ht("bm"),Wn=ht("m"),Zl=ht("bu"),eu=ht("u"),tu=ht("bum"),Ea=ht("um"),nu=ht("sp"),su=ht("rtg"),ru=ht("rtc");function iu(t,e=de){$s("ec",t,e)}const ou="components";function au(t,e){return lu(ou,t,!0,e)||t}const cu=Symbol.for("v-ndc");function lu(t,e,n=!0,s=!1){const r=Le||de;if(r){const i=r.type;{const c=Ju(i,!1);if(c&&(c===e||c===De(e)||c===Ns(De(e))))return i}const o=wi(r[t]||i[t],e)||wi(r.appContext[t],e);return!o&&s?i:o}}function wi(t,e){return t&&(t[e]||t[De(e)]||t[Ns(De(e))])}function Ta(t,e,n,s){let r;const i=n,o=H(t);if(o||oe(t)){const c=o&&tn(t);let a=!1;c&&(a=!Ne(t),t=Ls(t)),r=new Array(t.length);for(let l=0,u=t.length;l<u;l++)r[l]=e(a?fe(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let c=0;c<t;c++)r[c]=e(c+1,c,void 0,i)}else if(ie(t))if(t[Symbol.iterator])r=Array.from(t,(c,a)=>e(c,a,void 0,i));else{const c=Object.keys(t);r=new Array(c.length);for(let a=0,l=c.length;a<l;a++){const u=c[a];r[a]=e(t[u],u,a,i)}}else r=[];return r}const br=t=>t?Ka(t)?Qr(t):br(t.parent):null,An=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>br(t.parent),$root:t=>br(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ra(t),$forceUpdate:t=>t.f||(t.f=()=>{qr(t.update)}),$nextTick:t=>t.n||(t.n=pa.bind(t.proxy)),$watch:t=>Ou.bind(t)}),Zs=(t,e)=>t!==ne&&!t.__isScriptSetup&&J(t,e),uu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Zs(s,e))return o[e]=1,s[e];if(r!==ne&&J(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,i[e];if(n!==ne&&J(n,e))return o[e]=4,n[e];wr&&(o[e]=0)}}const u=An[e];let d,p;if(u)return e==="$attrs"&&ue(t.attrs,"get",""),u(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==ne&&J(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,J(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Zs(r,e)?(r[e]=n,!0):s!==ne&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let c;return!!n[o]||t!==ne&&J(t,o)||Zs(e,o)||(c=i[0])&&J(c,o)||J(s,o)||J(An,o)||J(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ii(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wr=!0;function fu(t){const e=Ra(t),n=t.proxy,s=t.ctx;wr=!1,e.beforeCreate&&Ei(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:I,activated:S,deactivated:x,beforeDestroy:D,beforeUnmount:k,destroyed:N,unmounted:R,render:U,renderTracked:j,renderTriggered:W,errorCaptured:re,serverPrefetch:we,expose:Ce,inheritAttrs:gt,components:Dt,directives:He,filters:_n}=e;if(l&&du(l,s,null),o)for(const X in o){const K=o[X];V(K)&&(s[X]=K.bind(n))}if(r){const X=r.call(n,n);ie(X)&&(t.data=Us(X))}if(wr=!0,i)for(const X in i){const K=i[X],nt=V(K)?K.bind(n,n):V(K.get)?K.get.bind(n,n):Je,mt=!V(K)&&V(K.set)?K.set.bind(n):Je,je=Oe({get:nt,set:mt});Object.defineProperty(s,X,{enumerable:!0,configurable:!0,get:()=>je.value,set:ve=>je.value=ve})}if(c)for(const X in c)Sa(c[X],s,n,X);if(a){const X=V(a)?a.call(n):a;Reflect.ownKeys(X).forEach(K=>{rs(K,X[K])})}u&&Ei(u,t,"c");function ce(X,K){H(K)?K.forEach(nt=>X(nt.bind(n))):K&&X(K.bind(n))}if(ce(Ql,d),ce(Wn,p),ce(Zl,m),ce(eu,I),ce(Jl,S),ce(Yl,x),ce(iu,re),ce(ru,j),ce(su,W),ce(tu,k),ce(Ea,R),ce(nu,we),H(Ce))if(Ce.length){const X=t.exposed||(t.exposed={});Ce.forEach(K=>{Object.defineProperty(X,K,{get:()=>n[K],set:nt=>n[K]=nt})})}else t.exposed||(t.exposed={});U&&t.render===Je&&(t.render=U),gt!=null&&(t.inheritAttrs=gt),Dt&&(t.components=Dt),He&&(t.directives=He),we&&ba(t)}function du(t,e,n=Je){H(t)&&(t=Ir(t));for(const s in t){const r=t[s];let i;ie(r)?"default"in r?i=Ye(r.from||s,r.default,!0):i=Ye(r.from||s):i=Ye(r),he(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Ei(t,e,n){Qe(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sa(t,e,n,s){let r=s.includes(".")?Ba(n,s):()=>n[s];if(oe(t)){const i=e[t];V(i)&&is(r,i)}else if(V(t))is(r,t.bind(n));else if(ie(t))if(H(t))t.forEach(i=>Sa(i,e,n,s));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&is(r,i,t)}}function Ra(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!r.length&&!n&&!s?a=e:(a={},r.length&&r.forEach(l=>ms(a,l,o,!0)),ms(a,e,o)),ie(e)&&i.set(e,a),a}function ms(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ms(t,i,n,!0),r&&r.forEach(o=>ms(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const c=hu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const hu={data:Ti,props:Si,emits:Si,methods:In,computed:In,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:In,directives:In,watch:gu,provide:Ti,inject:pu};function Ti(t,e){return e?t?function(){return pe(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function pu(t,e){return In(Ir(t),Ir(e))}function Ir(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function In(t,e){return t?pe(Object.create(null),t,e):e}function Si(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:pe(Object.create(null),Ii(t),Ii(e??{})):e}function gu(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const s in e)n[s]=ge(t[s],e[s]);return n}function Aa(){return{app:null,config:{isNativeTag:sl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mu=0;function _u(t,e){return function(s,r=null){V(s)||(s=pe({},s)),r!=null&&!ie(r)&&(r=null);const i=Aa(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:mu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Xu,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(l,...d)):V(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!a){const m=l._ceVNode||Ae(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(m,u,p),a=!0,l._container=u,u.__vue_app__=l,Qr(m.component)}},onUnmount(u){c.push(u)},unmount(){a&&(Qe(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=rn;rn=l;try{return u()}finally{rn=d}}};return l}}let rn=null;function rs(t,e){if(de){let n=de.provides;const s=de.parent&&de.parent.provides;s===n&&(n=de.provides=Object.create(s)),n[t]=e}}function Ye(t,e,n=!1){const s=de||Le;if(s||rn){const r=rn?rn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}const Ca={},Pa=()=>Object.create(Ca),Oa=t=>Object.getPrototypeOf(t)===Ca;function vu(t,e,n,s=!1){const r={},i=Pa();t.propsDefaults=Object.create(null),ka(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:la(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function yu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,c=q(r),[a]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Bs(t.emitsOptions,p))continue;const m=e[p];if(a)if(J(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const I=De(p);r[I]=Er(a,c,I,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{ka(t,e,r,i)&&(l=!0);let u;for(const d in c)(!e||!J(e,d)&&((u=zt(d))===d||!J(e,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Er(a,c,d,void 0,t,!0)):delete r[d]);if(i!==c)for(const d in i)(!e||!J(e,d))&&(delete i[d],l=!0)}l&&ot(t.attrs,"set","")}function ka(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(En(a))continue;const l=e[a];let u;r&&J(r,u=De(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:Bs(t.emitsOptions,a)||(!(a in s)||l!==s[a])&&(s[a]=l,o=!0)}if(i){const a=q(n),l=c||ne;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Er(r,a,d,l[d],t,!J(l,d))}}return o}function Er(t,e,n,s,r,i){const o=t[n];if(o!=null){const c=J(o,"default");if(c&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=zn(r);s=l[n]=a.call(null,e),u()}}else s=a;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!c?s=!1:o[1]&&(s===""||s===zt(n))&&(s=!0))}return s}const bu=new WeakMap;function Na(t,e,n=!1){const s=n?bu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},c=[];let a=!1;if(!V(t)){const u=d=>{a=!0;const[p,m]=Na(d,e,!0);pe(o,p),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return ie(t)&&s.set(t,Zt),Zt;if(H(i))for(let u=0;u<i.length;u++){const d=De(i[u]);Ri(d)&&(o[d]=ne)}else if(i)for(const u in i){const d=De(u);if(Ri(d)){const p=i[u],m=o[d]=H(p)||V(p)?{type:p}:pe({},p),I=m.type;let S=!1,x=!0;if(H(I))for(let D=0;D<I.length;++D){const k=I[D],N=V(k)&&k.name;if(N==="Boolean"){S=!0;break}else N==="String"&&(x=!1)}else S=V(I)&&I.name==="Boolean";m[0]=S,m[1]=x,(S||J(m,"default"))&&c.push(d)}}const l=[o,c];return ie(t)&&s.set(t,l),l}function Ri(t){return t[0]!=="$"&&!En(t)}const Da=t=>t[0]==="_"||t==="$stable",Yr=t=>H(t)?t.map(qe):[qe(t)],wu=(t,e,n)=>{if(e._n)return e;const s=Kl((...r)=>Yr(e(...r)),n);return s._c=!1,s},xa=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Da(r))continue;const i=t[r];if(V(i))e[r]=wu(r,i,s);else if(i!=null){const o=Yr(i);e[r]=()=>o}}},Ma=(t,e)=>{const n=Yr(e);t.slots.default=()=>n},La=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Iu=(t,e,n)=>{const s=t.slots=Pa();if(t.vnode.shapeFlag&32){const r=e._;r?(La(s,e,n),n&&zo(s,"_",r,!0)):xa(e,s)}else e&&Ma(t,e)},Eu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ne;if(s.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:La(r,e,n):(i=!e.$stable,xa(e,r)),o=e}else e&&(Ma(t,e),o={default:1});if(i)for(const c in r)!Da(c)&&o[c]==null&&delete r[c]},Te=Uu;function Tu(t){return Su(t)}function Su(t,e){const n=Ds();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=Je,insertStaticContent:I}=t,S=(f,h,g,_=null,b=null,y=null,A=void 0,T=null,E=!!h.dynamicChildren)=>{if(f===h)return;f&&!bn(f,h)&&(_=v(f),ve(f,b,y,!0),f=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:w,ref:F,shapeFlag:P}=h;switch(w){case Hs:x(f,h,g,_);break;case jt:D(f,h,g,_);break;case tr:f==null&&k(h,g,_,A);break;case xe:Dt(f,h,g,_,b,y,A,T,E);break;default:P&1?U(f,h,g,_,b,y,A,T,E):P&6?He(f,h,g,_,b,y,A,T,E):(P&64||P&128)&&w.process(f,h,g,_,b,y,A,T,E,M)}F!=null&&b&&gs(F,f&&f.ref,y,h||f,!h)},x=(f,h,g,_)=>{if(f==null)s(h.el=c(h.children),g,_);else{const b=h.el=f.el;h.children!==f.children&&l(b,h.children)}},D=(f,h,g,_)=>{f==null?s(h.el=a(h.children||""),g,_):h.el=f.el},k=(f,h,g,_)=>{[f.el,f.anchor]=I(f.children,h,g,_,f.el,f.anchor)},N=({el:f,anchor:h},g,_)=>{let b;for(;f&&f!==h;)b=p(f),s(f,g,_),f=b;s(h,g,_)},R=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),r(f),f=g;r(h)},U=(f,h,g,_,b,y,A,T,E)=>{h.type==="svg"?A="svg":h.type==="math"&&(A="mathml"),f==null?j(h,g,_,b,y,A,T,E):we(f,h,b,y,A,T,E)},j=(f,h,g,_,b,y,A,T)=>{let E,w;const{props:F,shapeFlag:P,transition:L,dirs:B}=f;if(E=f.el=o(f.type,y,F&&F.is,F),P&8?u(E,f.children):P&16&&re(f.children,E,null,_,b,er(f,y),A,T),B&&xt(f,null,_,"created"),W(E,f,f.scopeId,A,_),F){for(const ee in F)ee!=="value"&&!En(ee)&&i(E,ee,null,F[ee],y,_);"value"in F&&i(E,"value",null,F.value,y),(w=F.onVnodeBeforeMount)&&Ke(w,_,f)}B&&xt(f,null,_,"beforeMount");const z=Ru(b,L);z&&L.beforeEnter(E),s(E,h,g),((w=F&&F.onVnodeMounted)||z||B)&&Te(()=>{w&&Ke(w,_,f),z&&L.enter(E),B&&xt(f,null,_,"mounted")},b)},W=(f,h,g,_,b)=>{if(g&&m(f,g),_)for(let y=0;y<_.length;y++)m(f,_[y]);if(b){let y=b.subTree;if(h===y||ja(y.type)&&(y.ssContent===h||y.ssFallback===h)){const A=b.vnode;W(f,A,A.scopeId,A.slotScopeIds,b.parent)}}},re=(f,h,g,_,b,y,A,T,E=0)=>{for(let w=E;w<f.length;w++){const F=f[w]=T?bt(f[w]):qe(f[w]);S(null,F,h,g,_,b,y,A,T)}},we=(f,h,g,_,b,y,A)=>{const T=h.el=f.el;let{patchFlag:E,dynamicChildren:w,dirs:F}=h;E|=f.patchFlag&16;const P=f.props||ne,L=h.props||ne;let B;if(g&&Mt(g,!1),(B=L.onVnodeBeforeUpdate)&&Ke(B,g,h,f),F&&xt(h,f,g,"beforeUpdate"),g&&Mt(g,!0),(P.innerHTML&&L.innerHTML==null||P.textContent&&L.textContent==null)&&u(T,""),w?Ce(f.dynamicChildren,w,T,g,_,er(h,b),y):A||K(f,h,T,null,g,_,er(h,b),y,!1),E>0){if(E&16)gt(T,P,L,g,b);else if(E&2&&P.class!==L.class&&i(T,"class",null,L.class,b),E&4&&i(T,"style",P.style,L.style,b),E&8){const z=h.dynamicProps;for(let ee=0;ee<z.length;ee++){const Y=z[ee],Ie=P[Y],ye=L[Y];(ye!==Ie||Y==="value")&&i(T,Y,Ie,ye,b,g)}}E&1&&f.children!==h.children&&u(T,h.children)}else!A&&w==null&&gt(T,P,L,g,b);((B=L.onVnodeUpdated)||F)&&Te(()=>{B&&Ke(B,g,h,f),F&&xt(h,f,g,"updated")},_)},Ce=(f,h,g,_,b,y,A)=>{for(let T=0;T<h.length;T++){const E=f[T],w=h[T],F=E.el&&(E.type===xe||!bn(E,w)||E.shapeFlag&70)?d(E.el):g;S(E,w,F,null,_,b,y,A,!0)}},gt=(f,h,g,_,b)=>{if(h!==g){if(h!==ne)for(const y in h)!En(y)&&!(y in g)&&i(f,y,h[y],null,b,_);for(const y in g){if(En(y))continue;const A=g[y],T=h[y];A!==T&&y!=="value"&&i(f,y,T,A,b,_)}"value"in g&&i(f,"value",h.value,g.value,b)}},Dt=(f,h,g,_,b,y,A,T,E)=>{const w=h.el=f?f.el:c(""),F=h.anchor=f?f.anchor:c("");let{patchFlag:P,dynamicChildren:L,slotScopeIds:B}=h;B&&(T=T?T.concat(B):B),f==null?(s(w,g,_),s(F,g,_),re(h.children||[],g,F,b,y,A,T,E)):P>0&&P&64&&L&&f.dynamicChildren?(Ce(f.dynamicChildren,L,g,b,y,A,T),(h.key!=null||b&&h===b.subTree)&&Ua(f,h,!0)):K(f,h,g,F,b,y,A,T,E)},He=(f,h,g,_,b,y,A,T,E)=>{h.slotScopeIds=T,f==null?h.shapeFlag&512?b.ctx.activate(h,g,_,A,E):_n(h,g,_,b,y,A,E):Gt(f,h,E)},_n=(f,h,g,_,b,y,A)=>{const T=f.component=Wu(f,_,b);if(wa(f)&&(T.ctx.renderer=M),zu(T,!1,A),T.asyncDep){if(b&&b.registerDep(T,ce,A),!f.el){const E=T.subTree=Ae(jt);D(null,E,h,g)}}else ce(T,f,h,g,b,y,A)},Gt=(f,h,g)=>{const _=h.component=f.component;if(Mu(f,h,g))if(_.asyncDep&&!_.asyncResolved){X(_,h,g);return}else _.next=h,_.update();else h.el=f.el,_.vnode=h},ce=(f,h,g,_,b,y,A)=>{const T=()=>{if(f.isMounted){let{next:P,bu:L,u:B,parent:z,vnode:ee}=f;{const We=Fa(f);if(We){P&&(P.el=ee.el,X(f,P,A)),We.asyncDep.then(()=>{f.isUnmounted||T()});return}}let Y=P,Ie;Mt(f,!1),P?(P.el=ee.el,X(f,P,A)):P=ee,L&&qs(L),(Ie=P.props&&P.props.onVnodeBeforeUpdate)&&Ke(Ie,z,P,ee),Mt(f,!0);const ye=Ci(f),Ve=f.subTree;f.subTree=ye,S(Ve,ye,d(Ve.el),v(Ve),f,b,y),P.el=ye.el,Y===null&&Lu(f,ye.el),B&&Te(B,b),(Ie=P.props&&P.props.onVnodeUpdated)&&Te(()=>Ke(Ie,z,P,ee),b)}else{let P;const{el:L,props:B}=h,{bm:z,m:ee,parent:Y,root:Ie,type:ye}=f,Ve=Rn(h);Mt(f,!1),z&&qs(z),!Ve&&(P=B&&B.onVnodeBeforeMount)&&Ke(P,Y,h),Mt(f,!0);{Ie.ce&&Ie.ce._injectChildStyle(ye);const We=f.subTree=Ci(f);S(null,We,g,_,f,b,y),h.el=We.el}if(ee&&Te(ee,b),!Ve&&(P=B&&B.onVnodeMounted)){const We=h;Te(()=>Ke(P,Y,We),b)}(h.shapeFlag&256||Y&&Rn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&Te(f.a,b),f.isMounted=!0,h=g=_=null}};f.scope.on();const E=f.effect=new Jo(T);f.scope.off();const w=f.update=E.run.bind(E),F=f.job=E.runIfDirty.bind(E);F.i=f,F.id=f.uid,E.scheduler=()=>qr(F),Mt(f,!0),w()},X=(f,h,g)=>{h.component=f;const _=f.vnode.props;f.vnode=h,f.next=null,yu(f,h.props,_,g),Eu(f,h.children,g),kt(),bi(f),Nt()},K=(f,h,g,_,b,y,A,T,E=!1)=>{const w=f&&f.children,F=f?f.shapeFlag:0,P=h.children,{patchFlag:L,shapeFlag:B}=h;if(L>0){if(L&128){mt(w,P,g,_,b,y,A,T,E);return}else if(L&256){nt(w,P,g,_,b,y,A,T,E);return}}B&8?(F&16&&Pe(w,b,y),P!==w&&u(g,P)):F&16?B&16?mt(w,P,g,_,b,y,A,T,E):Pe(w,b,y,!0):(F&8&&u(g,""),B&16&&re(P,g,_,b,y,A,T,E))},nt=(f,h,g,_,b,y,A,T,E)=>{f=f||Zt,h=h||Zt;const w=f.length,F=h.length,P=Math.min(w,F);let L;for(L=0;L<P;L++){const B=h[L]=E?bt(h[L]):qe(h[L]);S(f[L],B,g,null,b,y,A,T,E)}w>F?Pe(f,b,y,!0,!1,P):re(h,g,_,b,y,A,T,E,P)},mt=(f,h,g,_,b,y,A,T,E)=>{let w=0;const F=h.length;let P=f.length-1,L=F-1;for(;w<=P&&w<=L;){const B=f[w],z=h[w]=E?bt(h[w]):qe(h[w]);if(bn(B,z))S(B,z,g,null,b,y,A,T,E);else break;w++}for(;w<=P&&w<=L;){const B=f[P],z=h[L]=E?bt(h[L]):qe(h[L]);if(bn(B,z))S(B,z,g,null,b,y,A,T,E);else break;P--,L--}if(w>P){if(w<=L){const B=L+1,z=B<F?h[B].el:_;for(;w<=L;)S(null,h[w]=E?bt(h[w]):qe(h[w]),g,z,b,y,A,T,E),w++}}else if(w>L)for(;w<=P;)ve(f[w],b,y,!0),w++;else{const B=w,z=w,ee=new Map;for(w=z;w<=L;w++){const Ee=h[w]=E?bt(h[w]):qe(h[w]);Ee.key!=null&&ee.set(Ee.key,w)}let Y,Ie=0;const ye=L-z+1;let Ve=!1,We=0;const vn=new Array(ye);for(w=0;w<ye;w++)vn[w]=0;for(w=B;w<=P;w++){const Ee=f[w];if(Ie>=ye){ve(Ee,b,y,!0);continue}let ze;if(Ee.key!=null)ze=ee.get(Ee.key);else for(Y=z;Y<=L;Y++)if(vn[Y-z]===0&&bn(Ee,h[Y])){ze=Y;break}ze===void 0?ve(Ee,b,y,!0):(vn[ze-z]=w+1,ze>=We?We=ze:Ve=!0,S(Ee,h[ze],g,null,b,y,A,T,E),Ie++)}const gi=Ve?Au(vn):Zt;for(Y=gi.length-1,w=ye-1;w>=0;w--){const Ee=z+w,ze=h[Ee],mi=Ee+1<F?h[Ee+1].el:_;vn[w]===0?S(null,ze,g,mi,b,y,A,T,E):Ve&&(Y<0||w!==gi[Y]?je(ze,g,mi,2):Y--)}}},je=(f,h,g,_,b=null)=>{const{el:y,type:A,transition:T,children:E,shapeFlag:w}=f;if(w&6){je(f.component.subTree,h,g,_);return}if(w&128){f.suspense.move(h,g,_);return}if(w&64){A.move(f,h,g,M);return}if(A===xe){s(y,h,g);for(let P=0;P<E.length;P++)je(E[P],h,g,_);s(f.anchor,h,g);return}if(A===tr){N(f,h,g);return}if(_!==2&&w&1&&T)if(_===0)T.beforeEnter(y),s(y,h,g),Te(()=>T.enter(y),b);else{const{leave:P,delayLeave:L,afterLeave:B}=T,z=()=>s(y,h,g),ee=()=>{P(y,()=>{z(),B&&B()})};L?L(y,z,ee):ee()}else s(y,h,g)},ve=(f,h,g,_=!1,b=!1)=>{const{type:y,props:A,ref:T,children:E,dynamicChildren:w,shapeFlag:F,patchFlag:P,dirs:L,cacheIndex:B}=f;if(P===-2&&(b=!1),T!=null&&gs(T,null,g,f,!0),B!=null&&(h.renderCache[B]=void 0),F&256){h.ctx.deactivate(f);return}const z=F&1&&L,ee=!Rn(f);let Y;if(ee&&(Y=A&&A.onVnodeBeforeUnmount)&&Ke(Y,h,f),F&6)Qn(f.component,g,_);else{if(F&128){f.suspense.unmount(g,_);return}z&&xt(f,null,h,"beforeUnmount"),F&64?f.type.remove(f,h,g,M,_):w&&!w.hasOnce&&(y!==xe||P>0&&P&64)?Pe(w,h,g,!1,!0):(y===xe&&P&384||!b&&F&16)&&Pe(E,h,g),_&&qt(f)}(ee&&(Y=A&&A.onVnodeUnmounted)||z)&&Te(()=>{Y&&Ke(Y,h,f),z&&xt(f,null,h,"unmounted")},g)},qt=f=>{const{type:h,el:g,anchor:_,transition:b}=f;if(h===xe){Jt(g,_);return}if(h===tr){R(f);return}const y=()=>{r(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:T}=b,E=()=>A(g,y);T?T(f.el,y,E):E()}else y()},Jt=(f,h)=>{let g;for(;f!==h;)g=p(f),r(f),f=g;r(h)},Qn=(f,h,g)=>{const{bum:_,scope:b,job:y,subTree:A,um:T,m:E,a:w}=f;Ai(E),Ai(w),_&&qs(_),b.stop(),y&&(y.flags|=8,ve(A,f,h,g)),T&&Te(T,h),Te(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Pe=(f,h,g,_=!1,b=!1,y=0)=>{for(let A=y;A<f.length;A++)ve(f[A],h,g,_,b)},v=f=>{if(f.shapeFlag&6)return v(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),g=h&&h[Gl];return g?p(g):h};let O=!1;const C=(f,h,g)=>{f==null?h._vnode&&ve(h._vnode,null,null,!0):S(h._vnode||null,f,h,null,null,null,g),h._vnode=f,O||(O=!0,bi(),ma(),O=!1)},M={p:S,um:ve,m:je,r:qt,mt:_n,mc:re,pc:K,pbc:Ce,n:v,o:t};return{render:C,hydrate:void 0,createApp:_u(C)}}function er({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ru(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ua(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let c=r[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[i]=bt(r[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Ua(o,c)),c.type===Hs&&(c.el=o.el)}}function Au(t){const e=t.slice(),n=[0];let s,r,i,o,c;const a=t.length;for(s=0;s<a;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Fa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fa(e)}function Ai(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Cu=Symbol.for("v-scx"),Pu=()=>Ye(Cu);function is(t,e,n){return $a(t,e,n)}function $a(t,e,n=ne){const{immediate:s,deep:r,flush:i,once:o}=n,c=pe({},n),a=e&&s||!e&&i!=="post";let l;if(Fn){if(i==="sync"){const m=Pu();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!a){const m=()=>{};return m.stop=Je,m.resume=Je,m.pause=Je,m}}const u=de;c.call=(m,I,S)=>Qe(m,u,I,S);let d=!1;i==="post"?c.scheduler=m=>{Te(m,u&&u.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(m,I)=>{I?m():qr(m)}),c.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=jl(t,e,c);return Fn&&(l?l.push(p):a&&p()),p}function Ou(t,e,n){const s=this.proxy,r=oe(t)?t.includes(".")?Ba(s,t):()=>s[t]:t.bind(s,s);let i;V(e)?i=e:(i=e.handler,n=e);const o=zn(this),c=$a(r,i.bind(s),n);return o(),c}function Ba(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const ku=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${De(e)}Modifiers`]||t[`${zt(e)}Modifiers`];function Nu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ne;let r=n;const i=e.startsWith("update:"),o=i&&ku(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>oe(u)?u.trim():u)),o.number&&(r=n.map(cl)));let c,a=s[c=Gs(e)]||s[c=Gs(De(e))];!a&&i&&(a=s[c=Gs(zt(e))]),a&&Qe(a,t,6,r);const l=s[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Qe(l,t,6,r)}}function Ha(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},c=!1;if(!V(t)){const a=l=>{const u=Ha(l,e,!0);u&&(c=!0,pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ie(t)&&s.set(t,null),null):(H(i)?i.forEach(a=>o[a]=null):pe(o,i),ie(t)&&s.set(t,o),o)}function Bs(t,e){return!t||!Ps(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,zt(e))||J(t,e))}function Ci(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:u,props:d,data:p,setupState:m,ctx:I,inheritAttrs:S}=t,x=ps(t);let D,k;try{if(n.shapeFlag&4){const R=r||s,U=R;D=qe(l.call(U,R,u,d,m,p,I)),k=c}else{const R=e;D=qe(R.length>1?R(d,{attrs:c,slots:o,emit:a}):R(d,null)),k=e.props?c:Du(c)}}catch(R){Cn.length=0,Fs(R,t,1),D=Ae(jt)}let N=D;if(k&&S!==!1){const R=Object.keys(k),{shapeFlag:U}=N;R.length&&U&7&&(i&&R.some(Fr)&&(k=xu(k,i)),N=ln(N,k,!1,!0))}return n.dirs&&(N=ln(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&Jr(N,n.transition),D=N,ps(x),D}const Du=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ps(n))&&((e||(e={}))[n]=t[n]);return e},xu=(t,e)=>{const n={};for(const s in t)(!Fr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Mu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Pi(s,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==s[p]&&!Bs(l,p))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?Pi(s,o,l):!0:!!o;return!1}function Pi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Bs(n,i))return!0}return!1}function Lu({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const ja=t=>t.__isSuspense;function Uu(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):zl(t)}const xe=Symbol.for("v-fgt"),Hs=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),tr=Symbol.for("v-stc"),Cn=[];let Re=null;function le(t=!1){Cn.push(Re=t?null:[])}function Fu(){Cn.pop(),Re=Cn[Cn.length-1]||null}let Ln=1;function Oi(t,e=!1){Ln+=t,t<0&&Re&&e&&(Re.hasOnce=!0)}function Va(t){return t.dynamicChildren=Ln>0?Re||Zt:null,Fu(),Ln>0&&Re&&Re.push(t),t}function be(t,e,n,s,r,i){return Va(se(t,e,n,s,r,i,!0))}function Wa(t,e,n,s,r){return Va(Ae(t,e,n,s,r,!0))}function _s(t){return t?t.__v_isVNode===!0:!1}function bn(t,e){return t.type===e.type&&t.key===e.key}const za=({key:t})=>t??null,os=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||he(t)||V(t)?{i:Le,r:t,k:e,f:!!n}:t:null);function se(t,e=null,n=null,s=0,r=null,i=t===xe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&za(e),ref:e&&os(e),scopeId:va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Le};return c?(Xr(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),Ln>0&&!o&&Re&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Re.push(a),a}const Ae=$u;function $u(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===cu)&&(t=jt),_s(t)){const c=ln(t,e,!0);return n&&Xr(c,n),Ln>0&&!i&&Re&&(c.shapeFlag&6?Re[Re.indexOf(t)]=c:Re.push(c)),c.patchFlag=-2,c}if(Yu(t)&&(t=t.__vccOpts),e){e=Bu(e);let{class:c,style:a}=e;c&&!oe(c)&&(e.class=Ms(c)),ie(a)&&(Gr(a)&&!H(a)&&(a=pe({},a)),e.style=xs(a))}const o=oe(t)?1:ja(t)?128:ql(t)?64:ie(t)?4:V(t)?2:0;return se(t,e,n,s,r,o,i,!0)}function Bu(t){return t?Gr(t)||Oa(t)?pe({},t):t:null}function ln(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?Hu(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&za(l),ref:e&&e.ref?n&&i?H(i)?i.concat(os(e)):[i,os(e)]:os(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Jr(u,a.clone(u)),u}function vs(t=" ",e=0){return Ae(Hs,null,t,e)}function Un(t="",e=!1){return e?(le(),Wa(jt,null,t)):Ae(jt,null,t)}function qe(t){return t==null||typeof t=="boolean"?Ae(jt):H(t)?Ae(xe,null,t.slice()):_s(t)?bt(t):Ae(Hs,null,String(t))}function bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ln(t)}function Xr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Xr(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Oa(e)?e._ctx=Le:r===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),s&64?(n=16,e=[vs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ms([e.class,s.class]));else if(r==="style")e.style=xs([e.style,s.style]);else if(Ps(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ke(t,e,n,s=null){Qe(t,e,7,[n,s])}const ju=Aa();let Vu=0;function Wu(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||ju,i={uid:Vu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Na(s,r),emitsOptions:Ha(s,r),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:s.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Nu.bind(null,i),t.ce&&t.ce(i),i}let de=null,ys,Tr;{const t=Ds(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ys=e("__VUE_INSTANCE_SETTERS__",n=>de=n),Tr=e("__VUE_SSR_SETTERS__",n=>Fn=n)}const zn=t=>{const e=de;return ys(t),t.scope.on(),()=>{t.scope.off(),ys(e)}},ki=()=>{de&&de.scope.off(),ys(null)};function Ka(t){return t.vnode.shapeFlag&4}let Fn=!1;function zu(t,e=!1,n=!1){e&&Tr(e);const{props:s,children:r}=t.vnode,i=Ka(t);vu(t,s,i,e),Iu(t,r,n);const o=i?Ku(t,e):void 0;return e&&Tr(!1),o}function Ku(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,uu);const{setup:s}=n;if(s){kt();const r=t.setupContext=s.length>1?qu(t):null,i=zn(t),o=Vn(s,t,0,[t.props,r]),c=jo(o);if(Nt(),i(),(c||t.sp)&&!Rn(t)&&ba(t),c){if(o.then(ki,ki),e)return o.then(a=>{Ni(t,a)}).catch(a=>{Fs(a,t,0)});t.asyncDep=o}else Ni(t,o)}else Ga(t)}function Ni(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=da(e)),Ga(t)}function Ga(t,e,n){const s=t.type;t.render||(t.render=s.render||Je);{const r=zn(t);kt();try{fu(t)}finally{Nt(),r()}}}const Gu={get(t,e){return ue(t,"get",""),t[e]}};function qu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Gu),slots:t.slots,emit:t.emit,expose:e}}function Qr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(da(Ml(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in An)return An[n](t)},has(e,n){return n in e||n in An}})):t.proxy}function Ju(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Yu(t){return V(t)&&"__vccOpts"in t}const Oe=(t,e)=>Bl(t,e,Fn);function qa(t,e,n){const s=arguments.length;return s===2?ie(e)&&!H(e)?_s(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_s(n)&&(n=[n]),Ae(t,e,n))}const Xu="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sr;const Di=typeof window<"u"&&window.trustedTypes;if(Di)try{Sr=Di.createPolicy("vue",{createHTML:t=>t})}catch{}const Ja=Sr?t=>Sr.createHTML(t):t=>t,Qu="http://www.w3.org/2000/svg",Zu="http://www.w3.org/1998/Math/MathML",it=typeof document<"u"?document:null,xi=it&&it.createElement("template"),ef={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?it.createElementNS(Qu,t):e==="mathml"?it.createElementNS(Zu,t):n?it.createElement(t,{is:n}):it.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>it.createTextNode(t),createComment:t=>it.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>it.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{xi.innerHTML=Ja(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=xi.content;if(s==="svg"||s==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tf=Symbol("_vtc");function nf(t,e,n){const s=t[tf];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Mi=Symbol("_vod"),sf=Symbol("_vsh"),rf=Symbol(""),of=/(^|;)\s*display\s*:/;function af(t,e,n){const s=t.style,r=oe(n);let i=!1;if(n&&!r){if(e)if(oe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&as(s,c,"")}else for(const o in e)n[o]==null&&as(s,o,"");for(const o in n)o==="display"&&(i=!0),as(s,o,n[o])}else if(r){if(e!==n){const o=s[rf];o&&(n+=";"+o),s.cssText=n,i=of.test(n)}}else e&&t.removeAttribute("style");Mi in t&&(t[Mi]=i?s.display:"",t[sf]&&(s.display="none"))}const Li=/\s*!important$/;function as(t,e,n){if(H(n))n.forEach(s=>as(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=cf(t,e);Li.test(n)?t.setProperty(zt(s),n.replace(Li,""),"important"):t[s]=n}}const Ui=["Webkit","Moz","ms"],nr={};function cf(t,e){const n=nr[e];if(n)return n;let s=De(e);if(s!=="filter"&&s in t)return nr[e]=s;s=Ns(s);for(let r=0;r<Ui.length;r++){const i=Ui[r]+s;if(i in t)return nr[e]=i}return e}const Fi="http://www.w3.org/1999/xlink";function $i(t,e,n,s,r,i=pl(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Fi,e.slice(6,e.length)):t.setAttributeNS(Fi,e,n):n==null||i&&!Ko(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ot(n)?String(n):n)}function Bi(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ja(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ko(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function lf(t,e,n,s){t.addEventListener(e,n,s)}function uf(t,e,n,s){t.removeEventListener(e,n,s)}const Hi=Symbol("_vei");function ff(t,e,n,s,r=null){const i=t[Hi]||(t[Hi]={}),o=i[e];if(s&&o)o.value=s;else{const[c,a]=df(e);if(s){const l=i[e]=gf(s,r);lf(t,c,l,a)}else o&&(uf(t,c,o,a),i[e]=void 0)}}const ji=/(?:Once|Passive|Capture)$/;function df(t){let e;if(ji.test(t)){e={};let s;for(;s=t.match(ji);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zt(t.slice(2)),e]}let sr=0;const hf=Promise.resolve(),pf=()=>sr||(hf.then(()=>sr=0),sr=Date.now());function gf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qe(mf(s,n.value),e,5,[s])};return n.value=t,n.attached=pf(),n}function mf(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Vi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_f=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?nf(t,s,o):e==="style"?af(t,n,s):Ps(e)?Fr(e)||ff(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vf(t,e,s,o))?(Bi(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$i(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!oe(s))?Bi(t,De(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),$i(t,e,s,o))};function vf(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vi(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Vi(e)&&oe(n)?!1:e in t}const yf=pe({patchProp:_f},ef);let Wi;function bf(){return Wi||(Wi=Tu(yf))}const wf=(...t)=>{const e=bf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Ef(s);if(!r)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,If(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function If(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ef(t){return oe(t)?document.querySelector(t):t}const Kn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Tf={};function Sf(t,e){const n=au("router-view");return le(),Wa(n)}const Rf=Kn(Tf,[["render",Sf]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qt=typeof document<"u";function Ya(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Af(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ya(t.default)}const G=Object.assign;function rr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Be(r)?r.map(t):t(r)}return n}const Pn=()=>{},Be=Array.isArray,Xa=/#/g,Cf=/&/g,Pf=/\//g,Of=/=/g,kf=/\?/g,Qa=/\+/g,Nf=/%5B/g,Df=/%5D/g,Za=/%5E/g,xf=/%60/g,ec=/%7B/g,Mf=/%7C/g,tc=/%7D/g,Lf=/%20/g;function Zr(t){return encodeURI(""+t).replace(Mf,"|").replace(Nf,"[").replace(Df,"]")}function Uf(t){return Zr(t).replace(ec,"{").replace(tc,"}").replace(Za,"^")}function Rr(t){return Zr(t).replace(Qa,"%2B").replace(Lf,"+").replace(Xa,"%23").replace(Cf,"%26").replace(xf,"`").replace(ec,"{").replace(tc,"}").replace(Za,"^")}function Ff(t){return Rr(t).replace(Of,"%3D")}function $f(t){return Zr(t).replace(Xa,"%23").replace(kf,"%3F")}function Bf(t){return t==null?"":$f(t).replace(Pf,"%2F")}function $n(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Hf=/\/$/,jf=t=>t.replace(Hf,"");function ir(t,e,n="/"){let s,r={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=Kf(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:$n(o)}}function Vf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Wf(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&un(e.matched[s],n.matched[r])&&nc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function un(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zf(t[n],e[n]))return!1;return!0}function zf(t,e){return Be(t)?Ki(t,e):Be(e)?Ki(e,t):t===e}function Ki(t,e){return Be(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Kf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,c;for(o=0;o<s.length;o++)if(c=s[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bn;(function(t){t.pop="pop",t.push="push"})(Bn||(Bn={}));var On;(function(t){t.back="back",t.forward="forward",t.unknown=""})(On||(On={}));function Gf(t){if(!t)if(Qt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jf(t)}const qf=/^[^#]+#/;function Jf(t,e){return t.replace(qf,"#")+e}function Yf(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const js=()=>({left:window.scrollX,top:window.scrollY});function Xf(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Yf(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Gi(t,e){return(history.state?history.state.position-e:-1)+t}const Ar=new Map;function Qf(t,e){Ar.set(t,e)}function Zf(t){const e=Ar.get(t);return Ar.delete(t),e}let ed=()=>location.protocol+"//"+location.host;function sc(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let c=r.includes(t.slice(i))?t.slice(i).length:1,a=r.slice(c);return a[0]!=="/"&&(a="/"+a),zi(a,"")}return zi(n,t)+s+r}function td(t,e,n,s){let r=[],i=[],o=null;const c=({state:p})=>{const m=sc(t,location),I=n.value,S=e.value;let x=0;if(p){if(n.value=m,e.value=p,o&&o===I){o=null;return}x=S?p.position-S.position:0}else s(m);r.forEach(D=>{D(n.value,I,{delta:x,type:Bn.pop,direction:x?x>0?On.forward:On.back:On.unknown})})};function a(){o=n.value}function l(p){r.push(p);const m=()=>{const I=r.indexOf(p);I>-1&&r.splice(I,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:js()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:d}}function qi(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?js():null}}function nd(t){const{history:e,location:n}=window,s={value:sc(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:ed()+t+a;try{e[u?"replaceState":"pushState"](l,"",p),r.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(a,l){const u=G({},e.state,qi(r.value.back,a,r.value.forward,!0),l,{position:r.value.position});i(a,u,!0),s.value=a}function c(a,l){const u=G({},r.value,e.state,{forward:a,scroll:js()});i(u.current,u,!0);const d=G({},qi(s.value,a,null),{position:u.position+1},l);i(a,d,!1),s.value=a}return{location:s,state:r,push:c,replace:o}}function sd(t){t=Gf(t);const e=nd(t),n=td(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=G({location:"",base:t,go:s,createHref:Jf.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function rd(t){return typeof t=="string"||t&&typeof t=="object"}function rc(t){return typeof t=="string"||typeof t=="symbol"}const ic=Symbol("");var Ji;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ji||(Ji={}));function fn(t,e){return G(new Error,{type:t,[ic]:!0},e)}function rt(t,e){return t instanceof Error&&ic in t&&(e==null||!!(t.type&e))}const Yi="[^/]+?",id={sensitive:!1,strict:!1,start:!0,end:!0},od=/[.+*?^${}()[\]/\\]/g;function ad(t,e){const n=G({},id,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(od,"\\$&"),m+=40;else if(p.type===1){const{value:I,repeatable:S,optional:x,regexp:D}=p;i.push({name:I,repeatable:S,optional:x});const k=D||Yi;if(k!==Yi){m+=10;try{new RegExp(`(${k})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${I}" (${k}): `+R.message)}}let N=S?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(N=x&&l.length<2?`(?:/${N})`:"/"+N),x&&(N+="?"),r+=N,m+=20,x&&(m+=-8),S&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function c(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",I=i[p-1];d[I.name]=m&&I.repeatable?m.split("/"):m}return d}function a(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:S,optional:x}=m,D=I in l?l[I]:"";if(Be(D)&&!S)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const k=Be(D)?D.join("/"):D;if(!k)if(x)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);u+=k}}return u||"/"}return{re:o,score:s,keys:i,parse:c,stringify:a}}function cd(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function oc(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=cd(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Xi(s))return 1;if(Xi(r))return-1}return r.length-s.length}function Xi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ld={type:0,value:""},ud=/[a-zA-Z0-9_]/;function fd(t){if(!t)return[[]];if(t==="/")return[[ld]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let c=0,a,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(l&&d(),o()):a===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:a==="("?n=2:ud.test(a)?p():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),r}function dd(t,e,n){const s=ad(fd(t.path),n),r=G(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function hd(t,e){const n=[],s=new Map;e=to({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,p,m){const I=!m,S=Zi(d);S.aliasOf=m&&m.record;const x=to(e,d),D=[S];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of R)D.push(Zi(G({},S,{components:m?m.record.components:S.components,path:U,aliasOf:m?m.record:S})))}let k,N;for(const R of D){const{path:U}=R;if(p&&U[0]!=="/"){const j=p.record.path,W=j[j.length-1]==="/"?"":"/";R.path=p.record.path+(U&&W+U)}if(k=dd(R,p,x),m?m.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),I&&d.name&&!eo(k)&&o(d.name)),ac(k)&&a(k),S.children){const j=S.children;for(let W=0;W<j.length;W++)i(j[W],k,m&&m.children[W])}m=m||k}return N?()=>{o(N)}:Pn}function o(d){if(rc(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function a(d){const p=md(d,n);n.splice(p,0,d),d.record.name&&!eo(d)&&s.set(d.record.name,d)}function l(d,p){let m,I={},S,x;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw fn(1,{location:d});x=m.record.name,I=G(Qi(p.params,m.keys.filter(N=>!N.optional).concat(m.parent?m.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&Qi(d.params,m.keys.map(N=>N.name))),S=m.stringify(I)}else if(d.path!=null)S=d.path,m=n.find(N=>N.re.test(S)),m&&(I=m.parse(S),x=m.record.name);else{if(m=p.name?s.get(p.name):n.find(N=>N.re.test(p.path)),!m)throw fn(1,{location:d,currentLocation:p});x=m.record.name,I=G({},p.params,d.params),S=m.stringify(I)}const D=[];let k=m;for(;k;)D.unshift(k.record),k=k.parent;return{name:x,path:S,params:I,matched:D,meta:gd(D)}}t.forEach(d=>i(d));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:c,getRecordMatcher:r}}function Qi(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Zi(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:pd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function pd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function eo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gd(t){return t.reduce((e,n)=>G(e,n.meta),{})}function to(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function md(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;oc(t,e[i])<0?s=i:n=i+1}const r=_d(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function _d(t){let e=t;for(;e=e.parent;)if(ac(e)&&oc(t,e)===0)return e}function ac({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function vd(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Qa," "),o=i.indexOf("="),c=$n(o<0?i:i.slice(0,o)),a=o<0?null:$n(i.slice(o+1));if(c in e){let l=e[c];Be(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function no(t){let e="";for(let n in t){const s=t[n];if(n=Ff(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Be(s)?s.map(i=>i&&Rr(i)):[s&&Rr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function yd(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Be(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const bd=Symbol(""),so=Symbol(""),Vs=Symbol(""),cc=Symbol(""),Cr=Symbol("");function wn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wt(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(fn(4,{from:n,to:e})):p instanceof Error?a(p):rd(p)?a(fn(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),c())},u=i(()=>t.call(s&&s.instances[r],e,n,l));let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(p=>a(p))})}function or(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Ya(a)){const u=(a.__vccOpts||a)[e];u&&i.push(wt(u,n,s,o,c,r))}else{let l=a();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=Af(u)?u.default:u;o.mods[c]=u,o.components[c]=d;const m=(d.__vccOpts||d)[e];return m&&wt(m,n,s,o,c,r)()}))}}return i}function ro(t){const e=Ye(Vs),n=Ye(cc),s=Oe(()=>{const a=nn(t.to);return e.resolve(a)}),r=Oe(()=>{const{matched:a}=s.value,{length:l}=a,u=a[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(un.bind(null,u));if(p>-1)return p;const m=io(a[l-2]);return l>1&&io(u)===m&&d[d.length-1].path!==m?d.findIndex(un.bind(null,a[l-2])):p}),i=Oe(()=>r.value>-1&&Sd(n.params,s.value.params)),o=Oe(()=>r.value>-1&&r.value===n.matched.length-1&&nc(n.params,s.value.params));function c(a={}){if(Td(a)){const l=e[nn(t.replace)?"replace":"push"](nn(t.to)).catch(Pn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:s,href:Oe(()=>s.value.href),isActive:i,isExactActive:o,navigate:c}}function wd(t){return t.length===1?t[0]:t}const Id=ya({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ro,setup(t,{slots:e}){const n=Us(ro(t)),{options:s}=Ye(Vs),r=Oe(()=>({[oo(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[oo(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&wd(e.default(n));return t.custom?i:qa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Ed=Id;function Td(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Sd(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Be(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function io(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oo=(t,e,n)=>t??e??n,Rd=ya({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ye(Cr),r=Oe(()=>t.route||s.value),i=Ye(so,0),o=Oe(()=>{let l=nn(i);const{matched:u}=r.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),c=Oe(()=>r.value.matched[o.value]);rs(so,Oe(()=>o.value+1)),rs(bd,c),rs(Cr,r);const a=ae();return is(()=>[a.value,c.value,t.name],([l,u,d],[p,m,I])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!un(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,d=c.value,p=d&&d.components[u];if(!p)return ao(n.default,{Component:p,route:l});const m=d.props[u],I=m?m===!0?l.params:typeof m=="function"?m(l):m:null,x=qa(p,G({},I,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return ao(n.default,{Component:x,route:l})||x}}});function ao(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ad=Rd;function Cd(t){const e=hd(t.routes,t),n=t.parseQuery||vd,s=t.stringifyQuery||no,r=t.history,i=wn(),o=wn(),c=wn(),a=Ll(_t);let l=_t;Qt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rr.bind(null,v=>""+v),d=rr.bind(null,Bf),p=rr.bind(null,$n);function m(v,O){let C,M;return rc(v)?(C=e.getRecordMatcher(v),M=O):M=v,e.addRoute(M,C)}function I(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function S(){return e.getRoutes().map(v=>v.record)}function x(v){return!!e.getRecordMatcher(v)}function D(v,O){if(O=G({},O||a.value),typeof v=="string"){const g=ir(n,v,O.path),_=e.resolve({path:g.path},O),b=r.createHref(g.fullPath);return G(g,_,{params:p(_.params),hash:$n(g.hash),redirectedFrom:void 0,href:b})}let C;if(v.path!=null)C=G({},v,{path:ir(n,v.path,O.path).path});else{const g=G({},v.params);for(const _ in g)g[_]==null&&delete g[_];C=G({},v,{params:d(g)}),O.params=d(O.params)}const M=e.resolve(C,O),Q=v.hash||"";M.params=u(p(M.params));const f=Vf(s,G({},v,{hash:Uf(Q),path:M.path})),h=r.createHref(f);return G({fullPath:f,hash:Q,query:s===no?yd(v.query):v.query||{}},M,{redirectedFrom:void 0,href:h})}function k(v){return typeof v=="string"?ir(n,v,a.value.path):G({},v)}function N(v,O){if(l!==v)return fn(8,{from:O,to:v})}function R(v){return W(v)}function U(v){return R(G(k(v),{replace:!0}))}function j(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:C}=O;let M=typeof C=="function"?C(v):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=k(M):{path:M},M.params={}),G({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function W(v,O){const C=l=D(v),M=a.value,Q=v.state,f=v.force,h=v.replace===!0,g=j(C);if(g)return W(G(k(g),{state:typeof g=="object"?G({},Q,g.state):Q,force:f,replace:h}),O||C);const _=C;_.redirectedFrom=O;let b;return!f&&Wf(s,M,C)&&(b=fn(16,{to:_,from:M}),je(M,M,!0,!1)),(b?Promise.resolve(b):Ce(_,M)).catch(y=>rt(y)?rt(y,2)?y:mt(y):K(y,_,M)).then(y=>{if(y){if(rt(y,2))return W(G({replace:h},k(y.to),{state:typeof y.to=="object"?G({},Q,y.to.state):Q,force:f}),O||_)}else y=Dt(_,M,!0,h,Q);return gt(_,M,y),y})}function re(v,O){const C=N(v,O);return C?Promise.reject(C):Promise.resolve()}function we(v){const O=Jt.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function Ce(v,O){let C;const[M,Q,f]=Pd(v,O);C=or(M.reverse(),"beforeRouteLeave",v,O);for(const g of M)g.leaveGuards.forEach(_=>{C.push(wt(_,v,O))});const h=re.bind(null,v,O);return C.push(h),Pe(C).then(()=>{C=[];for(const g of i.list())C.push(wt(g,v,O));return C.push(h),Pe(C)}).then(()=>{C=or(Q,"beforeRouteUpdate",v,O);for(const g of Q)g.updateGuards.forEach(_=>{C.push(wt(_,v,O))});return C.push(h),Pe(C)}).then(()=>{C=[];for(const g of f)if(g.beforeEnter)if(Be(g.beforeEnter))for(const _ of g.beforeEnter)C.push(wt(_,v,O));else C.push(wt(g.beforeEnter,v,O));return C.push(h),Pe(C)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),C=or(f,"beforeRouteEnter",v,O,we),C.push(h),Pe(C))).then(()=>{C=[];for(const g of o.list())C.push(wt(g,v,O));return C.push(h),Pe(C)}).catch(g=>rt(g,8)?g:Promise.reject(g))}function gt(v,O,C){c.list().forEach(M=>we(()=>M(v,O,C)))}function Dt(v,O,C,M,Q){const f=N(v,O);if(f)return f;const h=O===_t,g=Qt?history.state:{};C&&(M||h?r.replace(v.fullPath,G({scroll:h&&g&&g.scroll},Q)):r.push(v.fullPath,Q)),a.value=v,je(v,O,C,h),mt()}let He;function _n(){He||(He=r.listen((v,O,C)=>{if(!Qn.listening)return;const M=D(v),Q=j(M);if(Q){W(G(Q,{replace:!0,force:!0}),M).catch(Pn);return}l=M;const f=a.value;Qt&&Qf(Gi(f.fullPath,C.delta),js()),Ce(M,f).catch(h=>rt(h,12)?h:rt(h,2)?(W(G(k(h.to),{force:!0}),M).then(g=>{rt(g,20)&&!C.delta&&C.type===Bn.pop&&r.go(-1,!1)}).catch(Pn),Promise.reject()):(C.delta&&r.go(-C.delta,!1),K(h,M,f))).then(h=>{h=h||Dt(M,f,!1),h&&(C.delta&&!rt(h,8)?r.go(-C.delta,!1):C.type===Bn.pop&&rt(h,20)&&r.go(-1,!1)),gt(M,f,h)}).catch(Pn)}))}let Gt=wn(),ce=wn(),X;function K(v,O,C){mt(v);const M=ce.list();return M.length?M.forEach(Q=>Q(v,O,C)):console.error(v),Promise.reject(v)}function nt(){return X&&a.value!==_t?Promise.resolve():new Promise((v,O)=>{Gt.add([v,O])})}function mt(v){return X||(X=!v,_n(),Gt.list().forEach(([O,C])=>v?C(v):O()),Gt.reset()),v}function je(v,O,C,M){const{scrollBehavior:Q}=t;if(!Qt||!Q)return Promise.resolve();const f=!C&&Zf(Gi(v.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return pa().then(()=>Q(v,O,f)).then(h=>h&&Xf(h)).catch(h=>K(h,v,O))}const ve=v=>r.go(v);let qt;const Jt=new Set,Qn={currentRoute:a,listening:!0,addRoute:m,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:S,resolve:D,options:t,push:R,replace:U,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ce.add,isReady:nt,install(v){const O=this;v.component("RouterLink",Ed),v.component("RouterView",Ad),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>nn(a)}),Qt&&!qt&&a.value===_t&&(qt=!0,R(r.location).catch(Q=>{}));const C={};for(const Q in _t)Object.defineProperty(C,Q,{get:()=>a.value[Q],enumerable:!0});v.provide(Vs,O),v.provide(cc,la(C)),v.provide(Cr,a);const M=v.unmount;Jt.add(v),v.unmount=function(){Jt.delete(v),Jt.size<1&&(l=_t,He&&He(),He=null,a.value=_t,qt=!1,X=!1),M()}}};function Pe(v){return v.reduce((O,C)=>O.then(()=>we(C)),Promise.resolve())}return Qn}function Pd(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>un(l,c))?s.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>un(l,a))||r.push(a))}return[n,s,r]}function ei(){return Ye(Vs)}const Od=()=>{};var co={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},kd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],c=t[n++],a=((r&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,c=o?t[r+1]:0,a=r+2<t.length,l=a?t[r+2]:0,u=i>>2,d=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,m=l&63;a||(m=64,o||(p=64)),s.push(n[u],n[d],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||l==null||d==null)throw new Nd;const p=i<<2|c>>4;if(s.push(p),l!==64){const m=c<<4&240|l>>2;if(s.push(m),d!==64){const I=l<<6&192|d;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dd=function(t){const e=lc(t);return uc.encodeByteArray(e,!0)},bs=function(t){return Dd(t).replace(/\./g,"")},fc=function(t){try{return uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=()=>xd().__FIREBASE_DEFAULTS__,Ld=()=>{if(typeof process>"u"||typeof co>"u")return;const t=co.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ud=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fc(t[1]);return e&&JSON.parse(e)},ti=()=>{try{return Od()||Md()||Ld()||Ud()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dc=t=>{var e,n;return(n=(e=ti())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fd=t=>{const e=dc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},hc=()=>{var t;return(t=ti())===null||t===void 0?void 0:t.config},pc=t=>{var e;return(e=ti())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bs(JSON.stringify(n)),bs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function jd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zd(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kd(){try{return typeof indexedDB=="object"}catch{return!1}}function Gd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="FirebaseError";class pt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qd,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Jd(i,s):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new pt(r,c,s)}}function Jd(t,e){return t.replace(Yd,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Yd=/\{\$([^}]+)}/g;function Xd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(lo(i)&&lo(o)){if(!dn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function lo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Qd(t,e){const n=new Zd(t,e);return n.subscribe.bind(n)}class Zd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");eh(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ar),r.error===void 0&&(r.error=ar),r.complete===void 0&&(r.complete=ar);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ar(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new $d;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sh(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nh(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nh(t){return t===Ut?void 0:t}function sh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new th(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const ih={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},oh=Z.INFO,ah={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},ch=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ah[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=oh,this._logHandler=ch,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ih[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const lh=(t,e)=>e.some(n=>t instanceof n);let uo,fo;function uh(){return uo||(uo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fh(){return fo||(fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mc=new WeakMap,Pr=new WeakMap,_c=new WeakMap,cr=new WeakMap,ni=new WeakMap;function dh(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(At(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mc.set(n,t)}).catch(()=>{}),ni.set(e,t),e}function hh(t){if(Pr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pr.set(t,e)}let Or={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_c.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ph(t){Or=t(Or)}function gh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(lr(this),e,...n);return _c.set(s,e.sort?e.sort():[e]),At(s)}:fh().includes(t)?function(...e){return t.apply(lr(this),e),At(mc.get(this))}:function(...e){return At(t.apply(lr(this),e))}}function mh(t){return typeof t=="function"?gh(t):(t instanceof IDBTransaction&&hh(t),lh(t,uh())?new Proxy(t,Or):t)}function At(t){if(t instanceof IDBRequest)return dh(t);if(cr.has(t))return cr.get(t);const e=mh(t);return e!==t&&(cr.set(t,e),ni.set(e,t)),e}const lr=t=>ni.get(t);function _h(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),c=At(o);return s&&o.addEventListener("upgradeneeded",a=>{s(At(o.result),a.oldVersion,a.newVersion,At(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),r&&a.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const vh=["get","getKey","getAll","getAllKeys","count"],yh=["put","add","delete","clear"],ur=new Map;function ho(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ur.get(e))return ur.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=yh.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||vh.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,r?"readwrite":"readonly");let l=a.store;return s&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),r&&a.done]))[0]};return ur.set(e,i),i}ph(t=>({...t,get:(e,n,s)=>ho(e,n)||t.get(e,n,s),has:(e,n)=>!!ho(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function wh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kr="@firebase/app",po="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new gc("@firebase/app"),Ih="@firebase/app-compat",Eh="@firebase/analytics-compat",Th="@firebase/analytics",Sh="@firebase/app-check-compat",Rh="@firebase/app-check",Ah="@firebase/auth",Ch="@firebase/auth-compat",Ph="@firebase/database",Oh="@firebase/data-connect",kh="@firebase/database-compat",Nh="@firebase/functions",Dh="@firebase/functions-compat",xh="@firebase/installations",Mh="@firebase/installations-compat",Lh="@firebase/messaging",Uh="@firebase/messaging-compat",Fh="@firebase/performance",$h="@firebase/performance-compat",Bh="@firebase/remote-config",Hh="@firebase/remote-config-compat",jh="@firebase/storage",Vh="@firebase/storage-compat",Wh="@firebase/firestore",zh="@firebase/vertexai",Kh="@firebase/firestore-compat",Gh="firebase",qh="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="[DEFAULT]",Jh={[kr]:"fire-core",[Ih]:"fire-core-compat",[Th]:"fire-analytics",[Eh]:"fire-analytics-compat",[Rh]:"fire-app-check",[Sh]:"fire-app-check-compat",[Ah]:"fire-auth",[Ch]:"fire-auth-compat",[Ph]:"fire-rtdb",[Oh]:"fire-data-connect",[kh]:"fire-rtdb-compat",[Nh]:"fire-fn",[Dh]:"fire-fn-compat",[xh]:"fire-iid",[Mh]:"fire-iid-compat",[Lh]:"fire-fcm",[Uh]:"fire-fcm-compat",[Fh]:"fire-perf",[$h]:"fire-perf-compat",[Bh]:"fire-rc",[Hh]:"fire-rc-compat",[jh]:"fire-gcs",[Vh]:"fire-gcs-compat",[Wh]:"fire-fst",[Kh]:"fire-fst-compat",[zh]:"fire-vertex","fire-js":"fire-js",[Gh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Map,Yh=new Map,Dr=new Map;function go(t,e){try{t.container.addComponent(e)}catch(n){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hn(t){const e=t.name;if(Dr.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;Dr.set(e,t);for(const n of ws.values())go(n,t);for(const n of Yh.values())go(n,t);return!0}function si(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Me(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new Gn("app","Firebase",Xh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=qh;function vc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Nr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});if(n||(n=hc()),!n)throw Ct.create("no-options");const i=ws.get(r);if(i){if(dn(n,i.options)&&dn(s,i.config))return i;throw Ct.create("duplicate-app",{appName:r})}const o=new rh(r);for(const a of Dr.values())o.addComponent(a);const c=new Qh(n,s,o);return ws.set(r,c),c}function yc(t=Nr){const e=ws.get(t);if(!e&&t===Nr&&hc())return vc();if(!e)throw Ct.create("no-app",{appName:t});return e}function Pt(t,e,n){var s;let r=(s=Jh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(c.join(" "));return}hn(new Vt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="firebase-heartbeat-database",ep=1,Hn="firebase-heartbeat-store";let fr=null;function bc(){return fr||(fr=_h(Zh,ep,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})})),fr}async function tp(t){try{const n=(await bc()).transaction(Hn),s=await n.objectStore(Hn).get(wc(t));return await n.done,s}catch(e){if(e instanceof pt)ft.warn(e.message);else{const n=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(n.message)}}}async function mo(t,e){try{const s=(await bc()).transaction(Hn,"readwrite");await s.objectStore(Hn).put(e,wc(t)),await s.done}catch(n){if(n instanceof pt)ft.warn(n.message);else{const s=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ft.warn(s.message)}}}function wc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=1024,sp=30;class rp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new op(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_o();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>sp){const o=ap(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ft.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_o(),{heartbeatsToSend:s,unsentEntries:r}=ip(this._heartbeatsCache.heartbeats),i=bs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ft.warn(n),""}}}function _o(){return new Date().toISOString().substring(0,10)}function ip(t,e=np){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),vo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class op{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kd()?Gd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vo(t){return bs(JSON.stringify({version:2,heartbeats:t})).length}function ap(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t){hn(new Vt("platform-logger",e=>new bh(e),"PRIVATE")),hn(new Vt("heartbeat",e=>new rp(e),"PRIVATE")),Pt(kr,po,t),Pt(kr,po,"esm2017"),Pt("fire-js","")}cp("");function ri(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ic(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lp=Ic,Ec=new Gn("auth","Firebase",Ic());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new gc("@firebase/auth");function up(t,...e){Is.logLevel<=Z.WARN&&Is.warn(`Auth (${gn}): ${t}`,...e)}function cs(t,...e){Is.logLevel<=Z.ERROR&&Is.error(`Auth (${gn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t,...e){throw oi(t,...e)}function $e(t,...e){return oi(t,...e)}function ii(t,e,n){const s=Object.assign(Object.assign({},lp()),{[e]:n});return new Gn("auth","Firebase",s).create(e,{appName:t.name})}function Bt(t){return ii(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fp(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ze(t,"argument-error"),ii(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ec.create(t,...e)}function $(t,e,...n){if(!t)throw oi(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cs(e),new Error(e)}function dt(t,e){t||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dp(){return yo()==="http:"||yo()==="https:"}function yo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dp()||Vd()||"connection"in navigator)?navigator.onLine:!0}function pp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=Hd()||Wd()}get(){return hp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new Jn(3e4,6e4);function ci(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mn(t,e,n,s,r={}){return Sc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const c=qn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:a},i);return jd()||(l.referrerPolicy="no-referrer"),Tc.fetch()(Rc(t,t.config.apiHost,n,c),l)})}async function Sc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},gp),e);try{const r=new vp(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ns(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ns(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ns(t,"user-disabled",o);const u=s[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ii(t,u,l);Ze(t,u)}}catch(r){if(r instanceof pt)throw r;Ze(t,"network-request-failed",{message:String(r)})}}async function _p(t,e,n,s,r={}){const i=await mn(t,e,n,s,r);return"mfaPendingCredential"in i&&Ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rc(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ai(t.config,r):`${t.config.apiScheme}://${r}`}class vp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s($e(this.auth,"network-request-failed")),mp.get())})}}function ns(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=$e(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yp(t,e){return mn(t,"POST","/v1/accounts:delete",e)}async function Ac(t,e){return mn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bp(t,e=!1){const n=Kt(t),s=await n.getIdToken(e),r=li(s);$(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:kn(dr(r.auth_time)),issuedAtTime:kn(dr(r.iat)),expirationTime:kn(dr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dr(t){return Number(t)*1e3}function li(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const r=fc(n);return r?JSON.parse(r):(cs("Failed to decode base64 JWT payload"),null)}catch(r){return cs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function bo(t){const e=li(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pt&&wp(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function wp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kn(this.lastLoginAt),this.creationTime=kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t){var e;const n=t.auth,s=await t.getIdToken(),r=await jn(t,Ac(n,{idToken:s}));$(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cc(i.providerUserInfo):[],c=Tp(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Mr(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Ep(t){const e=Kt(t);await Es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tp(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Cc(t){return t.map(e=>{var{providerId:n}=e,s=ri(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(t,e){const n=await Sc(t,{},async()=>{const s=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Rc(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Tc.fetch()(o,{method:"POST",headers:c,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rp(t,e){return mn(t,"POST","/v2/accounts:revokeToken",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=bo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Sp(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new on;return s&&($(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new on,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ri(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ip(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bp(this,e)}reload(){return Ep(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Es(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(Bt(this.auth));const e=await this.getIdToken();return await jn(this,yp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,c,a,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(c=n.tenantId)!==null&&c!==void 0?c:void 0,x=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:R,isAnonymous:U,providerData:j,stsTokenManager:W}=n;$(N&&W,e,"internal-error");const re=on.fromJSON(this.name,W);$(typeof N=="string",e,"internal-error"),vt(d,e.name),vt(p,e.name),$(typeof R=="boolean",e,"internal-error"),$(typeof U=="boolean",e,"internal-error"),vt(m,e.name),vt(I,e.name),vt(S,e.name),vt(x,e.name),vt(D,e.name),vt(k,e.name);const we=new lt({uid:N,auth:e,email:p,emailVerified:R,displayName:d,isAnonymous:U,photoURL:I,phoneNumber:m,tenantId:S,stsTokenManager:re,createdAt:D,lastLoginAt:k});return j&&Array.isArray(j)&&(we.providerData=j.map(Ce=>Object.assign({},Ce))),x&&(we._redirectEventId=x),we}static async _fromIdTokenResponse(e,n,s=!1){const r=new on;r.updateFromServerResponse(n);const i=new lt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Es(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];$(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Cc(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new on;c.updateFromIdToken(s);const a=new lt({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Mr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new Map;function ut(t){dt(t instanceof Function,"Expected a class definition");let e=wo.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pc.type="NONE";const Io=Pc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t,e,n){return`firebase:${t}:${e}:${n}`}class an{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ls(this.userKey,r.apiKey,i),this.fullPersistenceKey=ls("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new an(ut(Io),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ut(Io);const o=ls(s,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const d=lt._fromJSON(e,u);l!==i&&(c=d),i=l;break}}catch{}const a=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new an(i,e,s):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new an(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Oc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mc(e))return"Blackberry";if(Lc(e))return"Webos";if(kc(e))return"Safari";if((e.includes("chrome/")||Nc(e))&&!e.includes("edge/"))return"Chrome";if(xc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Oc(t=_e()){return/firefox\//i.test(t)}function kc(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nc(t=_e()){return/crios\//i.test(t)}function Dc(t=_e()){return/iemobile/i.test(t)}function xc(t=_e()){return/android/i.test(t)}function Mc(t=_e()){return/blackberry/i.test(t)}function Lc(t=_e()){return/webos/i.test(t)}function ui(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ap(t=_e()){var e;return ui(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cp(){return zd()&&document.documentMode===10}function Uc(t=_e()){return ui(t)||xc(t)||Lc(t)||Mc(t)||/windows phone/i.test(t)||Dc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t,e=[]){let n;switch(t){case"Browser":n=Eo(_e());break;case"Worker":n=`${Eo(_e())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(t,e={}){return mn(t,"GET","/v2/passwordPolicy",ci(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=6;class Np{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(s=a.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsLowercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new To(this),this.idTokenSubscription=new To(this),this.beforeStateQueue=new Pp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ec,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await an.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ac(this,{idToken:e}),s=await lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Es(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(Bt(this));const n=e?Kt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(Bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(Bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Op(this),n=new Np(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Rp(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if($(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,s,r);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&up(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ws(t){return Kt(t)}class To{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qd(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xp(t){fi=t}function Mp(t){return fi.loadJS(t)}function Lp(){return fi.gapiScript}function Up(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t,e){const n=si(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(dn(i,e??{}))return r;Ze(r,"already-initialized")}return n.initialize({options:e})}function $p(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Bp(t,e,n){const s=Ws(t);$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=$c(e),{host:o,port:c}=Hp(e),a=c===null?"":`:${c}`,l={url:`${i}//${o}${a}/`},u=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){$(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),$(dn(l,s.config.emulator)&&dn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,jp()}function $c(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hp(t){const e=$c(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:So(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:So(o)}}}function So(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e){return _p(t,"POST","/v1/accounts:signInWithIdp",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="http://localhost";class Wt extends Bc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ri(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Wt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,cn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cn(e,n)}buildRequest(){const e={requestUri:Vp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends di{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Yn{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Yn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return at.credential(n,s)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Yn{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Yn{constructor(){super("twitter.com")}static credential(e,n){return Wt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return St.credential(n,s)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await lt._fromIdTokenResponse(e,s,r),o=Ro(s);return new pn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ro(s);return new pn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ro(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends pt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ts.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ts(e,n,s,r)}}function Hc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ts._fromErrorAndOperation(t,i,e,s):i})}async function Wp(t,e,n=!1){const s=await jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(t,e,n=!1){const{auth:s}=t;if(Me(s.app))return Promise.reject(Bt(s));const r="reauthenticate";try{const i=await jn(t,Hc(s,r,e,t),n);$(i.idToken,s,"internal-error");const o=li(i.idToken);$(o,s,"internal-error");const{sub:c}=o;return $(t.uid===c,s,"user-mismatch"),pn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ze(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(t,e,n=!1){if(Me(t.app))return Promise.reject(Bt(t));const s="signIn",r=await Hc(t,s,e),i=await pn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Gp(t,e,n,s){return Kt(t).onIdTokenChanged(e,n,s)}function qp(t,e,n){return Kt(t).beforeAuthStateChanged(e,n)}const Ss="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ss,"1"),this.storage.removeItem(Ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=1e3,Yp=10;class Vc extends jc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Cp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Yp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Jp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vc.type="LOCAL";const Xp=Vc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends jc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wc.type="SESSION";const zc=Wc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new zs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Qp(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=hi("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function eg(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function tg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ng(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sg(){return Kc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="firebaseLocalStorageDb",rg=1,Rs="firebaseLocalStorage",qc="fbase_key";class Xn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ks(t,e){return t.transaction([Rs],e?"readwrite":"readonly").objectStore(Rs)}function ig(){const t=indexedDB.deleteDatabase(Gc);return new Xn(t).toPromise()}function Lr(){const t=indexedDB.open(Gc,rg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Rs,{keyPath:qc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Rs)?e(s):(s.close(),await ig(),e(await Lr()))})})}async function Ao(t,e,n){const s=Ks(t,!0).put({[qc]:e,value:n});return new Xn(s).toPromise()}async function og(t,e){const n=Ks(t,!1).get(e),s=await new Xn(n).toPromise();return s===void 0?null:s.value}function Co(t,e){const n=Ks(t,!0).delete(e);return new Xn(n).toPromise()}const ag=800,cg=3;class Jc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>cg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zs._getInstance(sg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tg(),!this.activeServiceWorker)return;this.sender=new Zp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ng()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lr();return await Ao(e,Ss,"1"),await Co(e,Ss),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ao(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>og(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Co(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ks(r,!1).getAll();return new Xn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ag)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jc.type="LOCAL";const lg=Jc;new Jn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t,e){return e?ut(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Bc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ug(t){return Kp(t.auth,new pi(t),t.bypassAuthState)}function fg(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),zp(n,new pi(t),t.bypassAuthState)}async function dg(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Wp(n,new pi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ug;case"linkViaPopup":case"linkViaRedirect":return dg;case"reauthViaPopup":case"reauthViaRedirect":return fg;default:Ze(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Jn(2e3,1e4);async function pg(t,e,n){if(Me(t.app))return Promise.reject($e(t,"operation-not-supported-in-this-environment"));const s=Ws(t);fp(t,e,di);const r=Yc(s,n);return new Ft(s,"signInViaPopup",e,r).executeNotNull()}class Ft extends Xc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=hi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hg.get())};e()}}Ft.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="pendingRedirect",us=new Map;class mg extends Xc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=us.get(this.auth._key());if(!e){try{const s=await _g(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}us.set(this.auth._key(),e)}return this.bypassAuthState||us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _g(t,e){const n=bg(e),s=yg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function vg(t,e){us.set(t._key(),e)}function yg(t){return ut(t._redirectPersistence)}function bg(t){return ls(gg,t.config.apiKey,t.name)}async function wg(t,e,n=!1){if(Me(t.app))return Promise.reject(Bt(t));const s=Ws(t),r=Yc(s,e),o=await new mg(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=10*60*1e3;class Eg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Qc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError($e(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ig&&this.cachedEventUids.clear(),this.cachedEventUids.has(Po(e))}saveEventToCache(e){this.cachedEventUids.add(Po(e)),this.lastProcessedEventTime=Date.now()}}function Po(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(t,e={}){return mn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ag=/^https?/;async function Cg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sg(t);for(const n of e)try{if(Pg(n))return}catch{}Ze(t,"unauthorized-domain")}function Pg(t){const e=xr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Ag.test(n))return!1;if(Rg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Jn(3e4,6e4);function Oo(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kg(t){return new Promise((e,n)=>{var s,r,i;function o(){Oo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oo(),n($e(t,"network-request-failed"))},timeout:Og.get()})}if(!((r=(s=Xe().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Xe().gapi)===null||i===void 0)&&i.load)o();else{const c=Up("iframefcb");return Xe()[c]=()=>{gapi.load?o():n($e(t,"network-request-failed"))},Mp(`${Lp()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw fs=null,e})}let fs=null;function Ng(t){return fs=fs||kg(t),fs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=new Jn(5e3,15e3),xg="__/auth/iframe",Mg="emulator/auth/iframe",Lg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ug=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fg(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ai(e,Mg):`https://${t.config.authDomain}/${xg}`,s={apiKey:e.apiKey,appName:t.name,v:gn},r=Ug.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${qn(s).slice(1)}`}async function $g(t){const e=await Ng(t),n=Xe().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:Fg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=$e(t,"network-request-failed"),c=Xe().setTimeout(()=>{i(o)},Dg.get());function a(){Xe().clearTimeout(c),r(s)}s.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hg=500,jg=600,Vg="_blank",Wg="http://localhost";class ko{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zg(t,e,n,s=Hg,r=jg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Bg),{width:s.toString(),height:r.toString(),top:i,left:o}),l=_e().toLowerCase();n&&(c=Nc(l)?Vg:n),Oc(l)&&(e=e||Wg,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[m,I])=>`${p}${m}=${I},`,"");if(Ap(l)&&c!=="_self")return Kg(e||"",c),new ko(null);const d=window.open(e||"",c,u);$(d,t,"popup-blocked");try{d.focus()}catch{}return new ko(d)}function Kg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="__/auth/handler",qg="emulator/auth/handler",Jg=encodeURIComponent("fac");async function No(t,e,n,s,r,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:gn,eventId:r};if(e instanceof di){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Yn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${Jg}=${encodeURIComponent(a)}`:"";return`${Yg(t)}?${qn(c).slice(1)}${l}`}function Yg({config:t}){return t.emulator?ai(t,qg):`https://${t.authDomain}/${Gg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="webStorageSupport";class Xg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zc,this._completeRedirectFn=wg,this._overrideRedirectResult=vg}async _openPopup(e,n,s,r){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await No(e,n,s,xr(),r);return zg(e,o,hi())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await No(e,n,s,xr(),r);return eg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(dt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $g(e),s=new Eg(e);return n.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hr,{type:hr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[hr];o!==void 0&&n(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uc()||kc()||ui()}}const Qg=Xg;var Do="@firebase/auth",xo="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tm(t){hn(new Vt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fc(t)},l=new Dp(s,r,i,a);return $p(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),hn(new Vt("auth-internal",e=>{const n=Ws(e.getProvider("auth").getImmediate());return(s=>new Zg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(Do,xo,em(t)),Pt(Do,xo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=5*60,sm=pc("authIdTokenMaxAge")||nm;let Mo=null;const rm=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>sm)return;const r=n==null?void 0:n.token;Mo!==r&&(Mo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function im(t=yc()){const e=si(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Fp(t,{popupRedirectResolver:Qg,persistence:[lg,Xp,zc]}),s=pc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=rm(i.toString());qp(n,o,()=>o(n.currentUser)),Gp(n,c=>o(c))}}const r=dc("auth");return r&&Bp(n,`http://${r}`),n}function om(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xp({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=$e("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",om().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tm("Browser");var am="firebase",cm="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(am,cm,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="firebasestorage.googleapis.com",lm="storageBucket",um=2*60*1e3,fm=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends pt{constructor(e,n,s=0){super(pr(e),`Firebase Storage: ${n} (${pr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function pr(t){return"storage/"+t}function dm(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function hm(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pm(){return new tt(et.CANCELED,"User canceled the upload/download.")}function gm(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function mm(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Lo(t){return new tt(et.INVALID_ARGUMENT,t)}function el(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function _m(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ue.makeFromUrl(e,n)}catch{return new Ue(e,"")}if(s.path==="")return s;throw mm(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function l(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${u}/b/${r}/o${p}`,"i"),I={bucket:1,path:3},S=n===Zc?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",D=new RegExp(`^https?://${S}/${r}/${x}`,"i"),N=[{regex:c,indices:a,postModify:i},{regex:m,indices:I,postModify:l},{regex:D,indices:{bucket:1,path:2},postModify:l}];for(let R=0;R<N.length;R++){const U=N[R],j=U.regex.exec(e);if(j){const W=j[U.indices.bucket];let re=j[U.indices.path];re||(re=""),s=new Ue(W,re),U.postModify(s);break}}if(s==null)throw gm(e);return s}}class vm{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t,e,n){let s=1,r=null,i=null,o=!1,c=0;function a(){return c===2}let l=!1;function u(...x){l||(l=!0,e.apply(null,x))}function d(x){r=setTimeout(()=>{r=null,t(m,a())},x)}function p(){i&&clearTimeout(i)}function m(x,...D){if(l){p();return}if(x){p(),u.call(null,x,...D);return}if(a()||o){p(),u.call(null,x,...D);return}s<64&&(s*=2);let N;c===1?(c=2,N=0):N=(s+Math.random())*1e3,d(N)}let I=!1;function S(x){I||(I=!0,p(),!l&&(r!==null?(x||(c=2),clearTimeout(r),d(0)):x||(c=1)))}return d(0),i=setTimeout(()=>{o=!0,S(!0)},n),S}function bm(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){return t!==void 0}function Uo(t,e,n,s){if(s<e)throw Lo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Lo(`Invalid value for '${t}'. Expected ${n} or less.`)}function Im(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var As;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(As||(As={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,s,r,i,o,c,a,l,u,d,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,I)=>{this.resolve_=m,this.reject_=I,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ss(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const a=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===As.NO_ERROR,a=i.getStatus();if(!c||Em(a,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===As.ABORT;s(!1,new ss(!1,null,u));return}const l=this.successCodes_.indexOf(a)!==-1;s(!0,new ss(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());wm(a)?i(a):i()}catch(a){o(a)}else if(c!==null){const a=dm();a.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,a)):o(a)}else if(r.canceled){const a=this.appDelete_?el():pm();o(a)}else{const a=hm();o(a)}};this.canceled_?n(!1,new ss(!1,null,!0)):this.backoffId_=ym(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ss{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Sm(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Rm(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Am(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Cm(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Pm(t,e,n,s,r,i,o=!0){const c=Im(t.urlParams),a=t.url+c,l=Object.assign({},t.headers);return Am(l,e),Sm(l,n),Rm(l,i),Cm(l,s),new Tm(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function km(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this._service=e,n instanceof Ue?this._location=n:this._location=Ue.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Cs(e,n)}get root(){const e=new Ue(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return km(this._location.path)}get storage(){return this._service}get parent(){const e=Om(this._location.path);if(e===null)return null;const n=new Ue(this._location.bucket,e);return new Cs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _m(e)}}function Fo(t,e){const n=e==null?void 0:e[lm];return n==null?null:Ue.makeFromBucketSpec(n,t)}function Nm(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Bd(r,t.app.options.projectId))}class Dm{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Zc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=um,this._maxUploadRetryTime=fm,this._requests=new Set,r!=null?this._bucket=Ue.makeFromBucketSpec(r,this._host):this._bucket=Fo(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ue.makeFromBucketSpec(this._url,e):this._bucket=Fo(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Uo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Uo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cs(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new vm(el());{const o=Pm(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const $o="@firebase/storage",Bo="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="storage";function xm(t=yc(),e){t=Kt(t);const s=si(t,tl).getImmediate({identifier:e}),r=Fd("storage");return r&&Mm(s,...r),s}function Mm(t,e,n,s={}){Nm(t,e,n,s)}function Lm(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Dm(n,s,r,e,gn)}function Um(){hn(new Vt(tl,Lm,"PUBLIC").setMultipleInstances(!0)),Pt($o,Bo,""),Pt($o,Bo,"esm2017")}Um();const Fm={apiKey:"AIzaSyDWAP8xGaT4_acYQ2Yt-gl3sZV4ag_RzP4",authDomain:"lampoon-portfolio.firebaseapp.com",projectId:"lampoon-portfolio",storageBucket:"lampoon-portfolio.firebasestorage.app",messagingSenderId:"1017074343552",appId:"1:1017074343552:web:30c840e1621e97175e5065",measurementId:"G-KGE1DFEX2J"},nl=vc(Fm),$m=im(nl),Bm=new at;xm(nl);const ke={set(t,e){sessionStorage.setItem(t,JSON.stringify(e))},get(t){const e=sessionStorage.getItem(t);try{return JSON.parse(e)}catch{return e}},clear(){sessionStorage.clear()}},Hm={id:"app",class:"wrapper"},jm={__name:"SignInPage",setup(t){const e=ae(null),n=ae(!1),s=ei(),r=async()=>{try{const o=(await pg($m,Bm)).user;console.log("NAME:",o.displayName),ke.set("userName",o.displayName),s.push("/scan")}catch(i){console.error("Sign-in error:",i)}};return Wn(()=>{const i=e.value,o=i.getContext("2d"),c=()=>{i.width=window.innerWidth,i.height=window.innerHeight};c(),window.addEventListener("resize",c);const a="アァイィウエオカキクケコサシスABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),l=16;let u=Math.floor(window.innerWidth/l),d=Array(u).fill(1);setInterval(()=>{o.fillStyle="rgba(13, 17, 23, 0.1)",o.fillRect(0,0,i.width,i.height),o.fillStyle="#00FF00",o.font=`${l}px monospace`,d.forEach((m,I)=>{const S=a[Math.floor(Math.random()*a.length)];o.fillText(S,I*l,m*l),m*l>i.height&&Math.random()>.975&&(d[I]=0),d[I]++})},33)}),(i,o)=>(le(),be("div",Hm,[n.value?Un("",!0):(le(),be("canvas",{key:0,ref_key:"matrixCanvas",ref:e,class:"matrix-canvas"},null,512)),se("div",{class:"button-container"},[se("button",{onClick:r,class:"hacker-button"}," Sign in with Google ")])]))}},Vm=Kn(jm,[["__scopeId","data-v-22cd1db7"]]),Wm={class:"scan-wrapper"},zm={key:0,class:"identity-popup"},Km=["src"],Gm={__name:"ScanPage",setup(t){const e=ke.get("userName"),n=ei(),s=ae(!1),r=ae(!1),i=ae(null);return Wn(async()=>{const o=Date.now(),a=await(await fetch("/api/gpt-intro",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:e})})).json();ke.set("roastText",a.message),ke.set("roastIdentity",a.identity);const u=await(await fetch("/api/image-lookup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:e,character:a.identity})})).json();ke.set("userImage",u.userImage),ke.set("characterImage",u.characterImage),i.value=u.userImage;const d=Date.now()-o;d<1500&&await new Promise(p=>setTimeout(p,3e3-d)),s.value=!0,setTimeout(()=>{r.value=!0},500),setTimeout(()=>{n.push("/roast")},3e3)}),(o,c)=>(le(),be("div",Wm,[c[0]||(c[0]=se("h1",{class:"scan-text-glitch"},[vs(" SCANNING FACE "),se("br"),se("span",{class:"username-text"},"FOR DOXING INFORMATION")],-1)),c[1]||(c[1]=se("div",{class:"scan-line"},null,-1)),s.value?(le(),be("div",zm,"IDENTITY FOUND")):Un("",!0),r.value?(le(),be("img",{key:1,src:i.value,alt:"User",class:"user-image"},null,8,Km)):Un("",!0)]))}},qm=Kn(Gm,[["__scopeId","data-v-2fe00051"]]),Jm={class:"app-container"},Ym={class:"roast-wrapper"},Xm={class:"roast-text"},Qm={key:0,class:"identity-glitch"},Zm={class:"identity-name"},e_={key:0,class:"deepfake-wall"},t_=["onClick"],n_=["src"],s_={key:1,class:"project-tile"},r_={__name:"RoastPage",setup(t){const e=ei(),n=ke.get("roastText"),s=ke.get("roastIdentity"),r=ae(null),i=ae(""),o=ae(!1),c=ae(!1),a=ae(!1),l=ae(!1),u=Oe(()=>s.replace(/_/g," ")),d=ae(0),p=ae(0),m=ae([]),I=ae(null),S=ae(0);function x(){m.value=Array.from({length:d.value},()=>({flipped:!1})),setTimeout(()=>{const U=S.value*2+1;I.value=U,console.log("Glowing tile:",U)},d.value*80+1e3)}function D(U){U===I.value&&(m.value[U].flipped=!0,setTimeout(()=>{e.push("/packet")},2e3))}function k(){const U=window.innerWidth<768?80:250,j=Math.floor(window.innerWidth/U),W=Math.ceil(window.innerHeight/U);p.value=Math.floor(window.innerWidth/j),d.value=j*W,S.value=j}function N(U){let j=0;const W=setInterval(()=>{j<U.length?(i.value+=U[j],j++):(clearInterval(W),a.value=!0,R())},35)}Wn(async()=>{k(),window.addEventListener("resize",k),N(n);const U=ke.get("userImage"),j=ke.get("characterImage"),re=await(await fetch("/api/face-swap",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({characterImage:j,userImage:U})})).json();console.log("SWAP!!!",re),r.value=re.deepfakedImage||U,ke.set("deepfakeImage",r.value),l.value=!0,R()});function R(){a.value&&l.value&&(x(),o.value=!0,setTimeout(()=>{c.value=!0},2e3))}return(U,j)=>(le(),be("div",Jm,[se("div",Ym,[se("pre",Xm,Nn(i.value),1),o.value?(le(),be("p",Qm,[j[0]||(j[0]=vs(" Anyone ever tell you that you remind them of ")),se("span",Zm,Nn(u.value),1),j[1]||(j[1]=vs("? "))])):Un("",!0)]),r.value&&c.value?(le(),be("div",e_,[(le(!0),be(xe,null,Ta(m.value,(W,re)=>(le(),be("div",{key:re,class:Ms(["deepfake-tile-wrapper",{glow:re===I.value,flipped:W.flipped}]),style:xs(`width: ${p.value}px; height: ${p.value}px; --delay: ${re*80}ms`),onClick:we=>D(re)},[W.flipped?(le(),be("div",s_,j[2]||(j[2]=[se("p",{class:"tile-text"},"okay.... packet time. try to contain your excitement!",-1)]))):(le(),be("img",{key:0,src:r.value,class:"deepfake-tile"},null,8,n_))],14,t_))),128))])):Un("",!0)]))}},i_=Kn(r_,[["__scopeId","data-v-2d886a36"]]),o_={class:"packet-page"},a_={class:"deepfake-panel"},c_=["src"],l_={class:"project-panel"},u_={class:"carousel-container"},f_=["href"],d_={__name:"Projects",setup(t){const e=ae(null),n=ae(null),s=[{name:"HarvyMarket.com",link:"https://harvymarket.com",description:"Polymarket spoof; To enable your betting addiction"},{name:"Crimson Ads Takeover",link:"#",description:"Plastered TheCrimson.com with Lampoon ads"},{name:"FinalClubTies.com",link:"https://finalclubties.com",description:"Got cut from the Spee? I have an easy fix "},{name:"LampoonWhenItWasFunny.com",link:"https://lampoonwhenitwasfunny.com",description:"Self explanatory"},{name:"Lampoon site optimizations",link:"#",description:"Made your site better. You're welcome "}];Wn(()=>{e.value=ke.get("deepfakeImage")||"/fallback.jpg"});function r(){n.value.scrollBy({left:-window.innerWidth,behavior:"smooth"})}function i(){n.value.scrollBy({left:window.innerWidth,behavior:"smooth"})}return(o,c)=>(le(),be("div",o_,[se("div",a_,[se("img",{src:e.value,class:"deepfake-image"},null,8,c_)]),se("div",l_,[c[1]||(c[1]=se("h1",{class:"packet-header"},"MY PROJECTS...FINALLY",-1)),c[2]||(c[2]=se("p",{class:"subtitle"},"(all mobile compatible obvi!)",-1)),se("div",u_,[se("button",{class:"carousel-btn left",onClick:r},"‹"),se("div",{class:"carousel-track",ref_key:"carouselRef",ref:n},[(le(),be(xe,null,Ta(s,a=>se("a",{class:"project-card",key:a.name,href:a.link,target:"_blank"},[se("h3",null,Nn(a.name),1),se("p",null,Nn(a.description),1),c[0]||(c[0]=se("span",{class:"view-link"},"View →",-1))],8,f_)),64))],512),se("button",{class:"carousel-btn right",onClick:i},"›")])])]))}},h_=Kn(d_,[["__scopeId","data-v-4582b09d"]]),p_=[{path:"/",redirect:"/sign-in"},{path:"/sign-in",component:Vm},{path:"/scan",component:qm},{path:"/roast",component:i_},{path:"/packet",component:h_}],g_=Cd({history:sd(),routes:p_});wf(Rf).use(g_).mount("#app");
