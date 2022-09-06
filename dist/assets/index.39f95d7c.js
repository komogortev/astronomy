var Hu=Object.defineProperty;var Wu=(i,e,t)=>e in i?Hu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var at=(i,e,t)=>(Wu(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ko(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Xu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$u=ko(Xu);function dc(i){return!!i||i===""}function Go(i){if(Re(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=ot(n)?Yu(n):Go(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ot(i))return i;if(pt(i))return i}}const qu=/;(?![^(]*\))/g,ju=/:(.+)/;function Yu(i){const e={};return i.split(qu).forEach(t=>{if(t){const n=t.split(ju);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Ho(i){let e="";if(ot(i))e=i;else if(Re(i))for(let t=0;t<i.length;t++){const n=Ho(i[t]);n&&(e+=n+" ")}else if(pt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const $e={},Oi=[],Xt=()=>{},Zu=()=>!1,Ku=/^on[^a-z]/,as=i=>Ku.test(i),Wo=i=>i.startsWith("onUpdate:"),ut=Object.assign,Xo=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Ju=Object.prototype.hasOwnProperty,ze=(i,e)=>Ju.call(i,e),Re=Array.isArray,rr=i=>ls(i)==="[object Map]",Qu=i=>ls(i)==="[object Set]",De=i=>typeof i=="function",ot=i=>typeof i=="string",$o=i=>typeof i=="symbol",pt=i=>i!==null&&typeof i=="object",pc=i=>pt(i)&&De(i.then)&&De(i.catch),eh=Object.prototype.toString,ls=i=>eh.call(i),th=i=>ls(i).slice(8,-1),nh=i=>ls(i)==="[object Object]",qo=i=>ot(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Zr=ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cs=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},ih=/-(\w)/g,nn=cs(i=>i.replace(ih,(e,t)=>t?t.toUpperCase():"")),rh=/\B([A-Z])/g,$i=cs(i=>i.replace(rh,"-$1").toLowerCase()),us=cs(i=>i.charAt(0).toUpperCase()+i.slice(1)),ws=cs(i=>i?`on${us(i)}`:""),ts=(i,e)=>!Object.is(i,e),Es=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},ns=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},sh=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let va;const oh=()=>va||(va=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let jt;class ah{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&jt&&(this.parent=jt,this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function lh(i,e=jt){e&&e.active&&e.effects.push(i)}const jo=i=>{const e=new Set(i);return e.w=0,e.n=0,e},mc=i=>(i.w&Nn)>0,gc=i=>(i.n&Nn)>0,ch=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Nn},uh=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];mc(r)&&!gc(r)?r.delete(i):e[t++]=r,r.w&=~Nn,r.n&=~Nn}e.length=t}},mo=new WeakMap;let er=0,Nn=1;const go=30;let kt;const ei=Symbol(""),_o=Symbol("");class Yo{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,lh(this,n)}run(){if(!this.active)return this.fn();let e=kt,t=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,Dn=!0,Nn=1<<++er,er<=go?ch(this):ba(this),this.fn()}finally{er<=go&&uh(this),Nn=1<<--er,kt=this.parent,Dn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(ba(this),this.onStop&&this.onStop(),this.active=!1)}}function ba(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Dn=!0;const _c=[];function qi(){_c.push(Dn),Dn=!1}function ji(){const i=_c.pop();Dn=i===void 0?!0:i}function At(i,e,t){if(Dn&&kt){let n=mo.get(i);n||mo.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=jo()),xc(r)}}function xc(i,e){let t=!1;er<=go?gc(i)||(i.n|=Nn,t=!mc(i)):t=!i.has(kt),t&&(i.add(kt),kt.deps.push(i))}function gn(i,e,t,n,r,s){const a=mo.get(i);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Re(i))a.forEach((l,c)=>{(c==="length"||c>=n)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Re(i)?qo(t)&&o.push(a.get("length")):(o.push(a.get(ei)),rr(i)&&o.push(a.get(_o)));break;case"delete":Re(i)||(o.push(a.get(ei)),rr(i)&&o.push(a.get(_o)));break;case"set":rr(i)&&o.push(a.get(ei));break}if(o.length===1)o[0]&&xo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);xo(jo(l))}}function xo(i,e){const t=Re(i)?i:[...i];for(const n of t)n.computed&&Ma(n);for(const n of t)n.computed||Ma(n)}function Ma(i,e){(i!==kt||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const hh=ko("__proto__,__v_isRef,__isVue"),vc=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter($o)),fh=Zo(),dh=Zo(!1,!0),ph=Zo(!0),ya=mh();function mh(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Xe(this);for(let s=0,a=this.length;s<a;s++)At(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Xe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){qi();const n=Xe(this)[e].apply(this,t);return ji(),n}}),i}function Zo(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Dh:wc:e?Sc:yc).get(n))return n;const a=Re(n);if(!i&&a&&ze(ya,r))return Reflect.get(ya,r,s);const o=Reflect.get(n,r,s);return($o(r)?vc.has(r):hh(r))||(i||At(n,"get",r),e)?o:dt(o)?a&&qo(r)?o:o.value:pt(o)?i?Ec(o):Qo(o):o}}const gh=bc(),_h=bc(!0);function bc(i=!1){return function(t,n,r,s){let a=t[n];if(cr(a)&&dt(a)&&!dt(r))return!1;if(!i&&!cr(r)&&(vo(r)||(r=Xe(r),a=Xe(a)),!Re(t)&&dt(a)&&!dt(r)))return a.value=r,!0;const o=Re(t)&&qo(n)?Number(n)<t.length:ze(t,n),l=Reflect.set(t,n,r,s);return t===Xe(s)&&(o?ts(r,a)&&gn(t,"set",n,r):gn(t,"add",n,r)),l}}function xh(i,e){const t=ze(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&gn(i,"delete",e,void 0),n}function vh(i,e){const t=Reflect.has(i,e);return(!$o(e)||!vc.has(e))&&At(i,"has",e),t}function bh(i){return At(i,"iterate",Re(i)?"length":ei),Reflect.ownKeys(i)}const Mc={get:fh,set:gh,deleteProperty:xh,has:vh,ownKeys:bh},Mh={get:ph,set(i,e){return!0},deleteProperty(i,e){return!0}},yh=ut({},Mc,{get:dh,set:_h}),Ko=i=>i,hs=i=>Reflect.getPrototypeOf(i);function yr(i,e,t=!1,n=!1){i=i.__v_raw;const r=Xe(i),s=Xe(e);t||(e!==s&&At(r,"get",e),At(r,"get",s));const{has:a}=hs(r),o=n?Ko:t?na:ta;if(a.call(r,e))return o(i.get(e));if(a.call(r,s))return o(i.get(s));i!==r&&i.get(e)}function Sr(i,e=!1){const t=this.__v_raw,n=Xe(t),r=Xe(i);return e||(i!==r&&At(n,"has",i),At(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function wr(i,e=!1){return i=i.__v_raw,!e&&At(Xe(i),"iterate",ei),Reflect.get(i,"size",i)}function Sa(i){i=Xe(i);const e=Xe(this);return hs(e).has.call(e,i)||(e.add(i),gn(e,"add",i,i)),this}function wa(i,e){e=Xe(e);const t=Xe(this),{has:n,get:r}=hs(t);let s=n.call(t,i);s||(i=Xe(i),s=n.call(t,i));const a=r.call(t,i);return t.set(i,e),s?ts(e,a)&&gn(t,"set",i,e):gn(t,"add",i,e),this}function Ea(i){const e=Xe(this),{has:t,get:n}=hs(e);let r=t.call(e,i);r||(i=Xe(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&gn(e,"delete",i,void 0),s}function Aa(){const i=Xe(this),e=i.size!==0,t=i.clear();return e&&gn(i,"clear",void 0,void 0),t}function Er(i,e){return function(n,r){const s=this,a=s.__v_raw,o=Xe(a),l=e?Ko:i?na:ta;return!i&&At(o,"iterate",ei),a.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Ar(i,e,t){return function(...n){const r=this.__v_raw,s=Xe(r),a=rr(s),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=r[i](...n),u=t?Ko:e?na:ta;return!e&&At(s,"iterate",l?_o:ei),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function bn(i){return function(...e){return i==="delete"?!1:this}}function Sh(){const i={get(s){return yr(this,s)},get size(){return wr(this)},has:Sr,add:Sa,set:wa,delete:Ea,clear:Aa,forEach:Er(!1,!1)},e={get(s){return yr(this,s,!1,!0)},get size(){return wr(this)},has:Sr,add:Sa,set:wa,delete:Ea,clear:Aa,forEach:Er(!1,!0)},t={get(s){return yr(this,s,!0)},get size(){return wr(this,!0)},has(s){return Sr.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Er(!0,!1)},n={get(s){return yr(this,s,!0,!0)},get size(){return wr(this,!0)},has(s){return Sr.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Ar(s,!1,!1),t[s]=Ar(s,!0,!1),e[s]=Ar(s,!1,!0),n[s]=Ar(s,!0,!0)}),[i,t,e,n]}const[wh,Eh,Ah,Th]=Sh();function Jo(i,e){const t=e?i?Th:Ah:i?Eh:wh;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(ze(t,r)&&r in n?t:n,r,s)}const Ch={get:Jo(!1,!1)},Lh={get:Jo(!1,!0)},Ph={get:Jo(!0,!1)},yc=new WeakMap,Sc=new WeakMap,wc=new WeakMap,Dh=new WeakMap;function Rh(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ih(i){return i.__v_skip||!Object.isExtensible(i)?0:Rh(th(i))}function Qo(i){return cr(i)?i:ea(i,!1,Mc,Ch,yc)}function Fh(i){return ea(i,!1,yh,Lh,Sc)}function Ec(i){return ea(i,!0,Mh,Ph,wc)}function ea(i,e,t,n,r){if(!pt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const a=Ih(i);if(a===0)return i;const o=new Proxy(i,a===2?n:t);return r.set(i,o),o}function Ui(i){return cr(i)?Ui(i.__v_raw):!!(i&&i.__v_isReactive)}function cr(i){return!!(i&&i.__v_isReadonly)}function vo(i){return!!(i&&i.__v_isShallow)}function Ac(i){return Ui(i)||cr(i)}function Xe(i){const e=i&&i.__v_raw;return e?Xe(e):i}function Tc(i){return ns(i,"__v_skip",!0),i}const ta=i=>pt(i)?Qo(i):i,na=i=>pt(i)?Ec(i):i;function Nh(i){Dn&&kt&&(i=Xe(i),xc(i.dep||(i.dep=jo())))}function Oh(i,e){i=Xe(i),i.dep&&xo(i.dep)}function dt(i){return!!(i&&i.__v_isRef===!0)}function Uh(i){return dt(i)?i.value:i}const zh={get:(i,e,t)=>Uh(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return dt(r)&&!dt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function Cc(i){return Ui(i)?i:new Proxy(i,zh)}class Bh{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Yo(e,()=>{this._dirty||(this._dirty=!0,Oh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=Xe(this);return Nh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Vh(i,e,t=!1){let n,r;const s=De(i);return s?(n=i,r=Xt):(n=i.get,r=i.set),new Bh(n,r,s||!r,t)}function Rn(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){fs(s,e,t)}return r}function Ft(i,e,t,n){if(De(i)){const s=Rn(i,e,t,n);return s&&pc(s)&&s.catch(a=>{fs(a,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Ft(i[s],e,t,n));return r}function fs(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Rn(l,null,10,[i,a,o]);return}}kh(i,t,r,n)}function kh(i,e,t,n=!0){console.error(i)}let is=!1,bo=!1;const wt=[];let hn=0;const sr=[];let tr=null,Di=0;const or=[];let Cn=null,Ri=0;const Lc=Promise.resolve();let ia=null,Mo=null;function Gh(i){const e=ia||Lc;return i?e.then(this?i.bind(this):i):e}function Hh(i){let e=hn+1,t=wt.length;for(;e<t;){const n=e+t>>>1;ur(wt[n])<i?e=n+1:t=n}return e}function Pc(i){(!wt.length||!wt.includes(i,is&&i.allowRecurse?hn+1:hn))&&i!==Mo&&(i.id==null?wt.push(i):wt.splice(Hh(i.id),0,i),Dc())}function Dc(){!is&&!bo&&(bo=!0,ia=Lc.then(Fc))}function Wh(i){const e=wt.indexOf(i);e>hn&&wt.splice(e,1)}function Rc(i,e,t,n){Re(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),Dc()}function Xh(i){Rc(i,tr,sr,Di)}function $h(i){Rc(i,Cn,or,Ri)}function ds(i,e=null){if(sr.length){for(Mo=e,tr=[...new Set(sr)],sr.length=0,Di=0;Di<tr.length;Di++)tr[Di]();tr=null,Di=0,Mo=null,ds(i,e)}}function Ic(i){if(ds(),or.length){const e=[...new Set(or)];if(or.length=0,Cn){Cn.push(...e);return}for(Cn=e,Cn.sort((t,n)=>ur(t)-ur(n)),Ri=0;Ri<Cn.length;Ri++)Cn[Ri]();Cn=null,Ri=0}}const ur=i=>i.id==null?1/0:i.id;function Fc(i){bo=!1,is=!0,ds(i),wt.sort((t,n)=>ur(t)-ur(n));const e=Xt;try{for(hn=0;hn<wt.length;hn++){const t=wt[hn];t&&t.active!==!1&&Rn(t,null,14)}}finally{hn=0,wt.length=0,Ic(),is=!1,ia=null,(wt.length||sr.length||or.length)&&Fc(i)}}function qh(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||$e;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:f}=n[u]||$e;f&&(r=t.map(m=>m.trim())),h&&(r=t.map(sh))}let o,l=n[o=ws(e)]||n[o=ws(nn(e))];!l&&s&&(l=n[o=ws($i(e))]),l&&Ft(l,i,6,r);const c=n[o+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,Ft(c,i,6,r)}}function Nc(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let a={},o=!1;if(!De(i)){const l=c=>{const u=Nc(c,e,!0);u&&(o=!0,ut(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!o?(n.set(i,null),null):(Re(s)?s.forEach(l=>a[l]=null):ut(a,s),n.set(i,a),a)}function ps(i,e){return!i||!as(e)?!1:(e=e.slice(2).replace(/Once$/,""),ze(i,e[0].toLowerCase()+e.slice(1))||ze(i,$i(e))||ze(i,e))}let Ht=null,Oc=null;function rs(i){const e=Ht;return Ht=i,Oc=i&&i.type.__scopeId||null,e}function ra(i,e=Ht,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Ua(-1);const s=rs(e),a=i(...r);return rs(s),n._d&&Ua(1),a};return n._n=!0,n._c=!0,n._d=!0,n}function As(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:m,ctx:v,inheritAttrs:p}=i;let d,g;const S=rs(i);try{if(t.shapeFlag&4){const A=r||n;d=Zt(u.call(A,A,h,s,m,f,v)),g=l}else{const A=e;d=Zt(A.length>1?A(s,{attrs:l,slots:o,emit:c}):A(s,null)),g=e.props?l:jh(l)}}catch(A){ar.length=0,fs(A,i,1),d=In(pn)}let T=d;if(g&&p!==!1){const A=Object.keys(g),{shapeFlag:y}=T;A.length&&y&7&&(a&&A.some(Wo)&&(g=Yh(g,a)),T=On(T,g))}return t.dirs&&(T=On(T),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&(T.transition=t.transition),d=T,rs(S),d}const jh=i=>{let e;for(const t in i)(t==="class"||t==="style"||as(t))&&((e||(e={}))[t]=i[t]);return e},Yh=(i,e)=>{const t={};for(const n in i)(!Wo(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Zh(i,e,t){const{props:n,children:r,component:s}=i,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Ta(n,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(a[f]!==n[f]&&!ps(c,f))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Ta(n,a,c):!0:!!a;return!1}function Ta(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!ps(t,s))return!0}return!1}function Kh({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Jh=i=>i.__isSuspense;function Qh(i,e){e&&e.pendingBranch?Re(i)?e.effects.push(...i):e.effects.push(i):$h(i)}function ef(i,e){if(it){let t=it.provides;const n=it.parent&&it.parent.provides;n===t&&(t=it.provides=Object.create(n)),t[i]=e}}function Ts(i,e,t=!1){const n=it||Ht;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&De(e)?e.call(n.proxy):e}}const Ca={};function Cs(i,e,t){return Uc(i,e,t)}function Uc(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:a}=$e){const o=it;let l,c=!1,u=!1;if(dt(i)?(l=()=>i.value,c=vo(i)):Ui(i)?(l=()=>i,n=!0):Re(i)?(u=!0,c=i.some(g=>Ui(g)||vo(g)),l=()=>i.map(g=>{if(dt(g))return g.value;if(Ui(g))return Fi(g);if(De(g))return Rn(g,o,2)})):De(i)?e?l=()=>Rn(i,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),Ft(i,o,3,[f])}:l=Xt,e&&n){const g=l;l=()=>Fi(g())}let h,f=g=>{h=d.onStop=()=>{Rn(g,o,4)}};if(fr)return f=Xt,e?t&&Ft(e,o,3,[l(),u?[]:void 0,f]):l(),Xt;let m=u?[]:Ca;const v=()=>{if(!!d.active)if(e){const g=d.run();(n||c||(u?g.some((S,T)=>ts(S,m[T])):ts(g,m)))&&(h&&h(),Ft(e,o,3,[g,m===Ca?void 0:m,f]),m=g)}else d.run()};v.allowRecurse=!!e;let p;r==="sync"?p=v:r==="post"?p=()=>_t(v,o&&o.suspense):p=()=>Xh(v);const d=new Yo(l,p);return e?t?v():m=d.run():r==="post"?_t(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&Xo(o.scope.effects,d)}}function tf(i,e,t){const n=this.proxy,r=ot(i)?i.includes(".")?zc(n,i):()=>n[i]:i.bind(n,n);let s;De(e)?s=e:(s=e.handler,t=e);const a=it;Vi(this);const o=Uc(r,s.bind(n),t);return a?Vi(a):ti(),o}function zc(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Fi(i,e){if(!pt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),dt(i))Fi(i.value,e);else if(Re(i))for(let t=0;t<i.length;t++)Fi(i[t],e);else if(Qu(i)||rr(i))i.forEach(t=>{Fi(t,e)});else if(nh(i))for(const t in i)Fi(i[t],e);return i}function nf(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sa(()=>{i.isMounted=!0}),Hc(()=>{i.isUnmounting=!0}),i}const Lt=[Function,Array],rf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},setup(i,{slots:e}){const t=Wf(),n=nf();let r;return()=>{const s=e.default&&Vc(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==pn){a=p;break}}const o=Xe(i),{mode:l}=o;if(n.isLeaving)return Ls(a);const c=La(a);if(!c)return Ls(a);const u=yo(c,o,n,t);So(c,u);const h=t.subTree,f=h&&La(h);let m=!1;const{getTransitionKey:v}=c.type;if(v){const p=v();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(f&&f.type!==pn&&(!jn(c,f)||m)){const p=yo(f,o,n,t);if(So(f,p),l==="out-in")return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,t.update()},Ls(a);l==="in-out"&&c.type!==pn&&(p.delayLeave=(d,g,S)=>{const T=Bc(n,f);T[String(f.key)]=f,d._leaveCb=()=>{g(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return a}}},sf=rf;function Bc(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function yo(i,e,t,n){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:p,onAppear:d,onAfterAppear:g,onAppearCancelled:S}=e,T=String(i.key),A=Bc(t,i),y=(b,C)=>{b&&Ft(b,n,9,C)},D=(b,C)=>{const I=C[1];y(b,C),Re(b)?b.every(te=>te.length<=1)&&I():b.length<=1&&I()},z={mode:s,persisted:a,beforeEnter(b){let C=o;if(!t.isMounted)if(r)C=p||o;else return;b._leaveCb&&b._leaveCb(!0);const I=A[T];I&&jn(i,I)&&I.el._leaveCb&&I.el._leaveCb(),y(C,[b])},enter(b){let C=l,I=c,te=u;if(!t.isMounted)if(r)C=d||l,I=g||c,te=S||u;else return;let fe=!1;const H=b._enterCb=O=>{fe||(fe=!0,O?y(te,[b]):y(I,[b]),z.delayedLeave&&z.delayedLeave(),b._enterCb=void 0)};C?D(C,[b,H]):H()},leave(b,C){const I=String(i.key);if(b._enterCb&&b._enterCb(!0),t.isUnmounting)return C();y(h,[b]);let te=!1;const fe=b._leaveCb=H=>{te||(te=!0,C(),H?y(v,[b]):y(m,[b]),b._leaveCb=void 0,A[I]===i&&delete A[I])};A[I]=i,f?D(f,[b,fe]):fe()},clone(b){return yo(b,e,t,n)}};return z}function Ls(i){if(ms(i))return i=On(i),i.children=null,i}function La(i){return ms(i)?i.children?i.children[0]:void 0:i}function So(i,e){i.shapeFlag&6&&i.component?So(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Vc(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let a=i[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Yt?(a.patchFlag&128&&r++,n=n.concat(Vc(a.children,e,o))):(e||a.type!==pn)&&n.push(o!=null?On(a,{key:o}):a)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function kc(i){return De(i)?{setup:i,name:i.name}:i}const Kr=i=>!!i.type.__asyncLoader,ms=i=>i.type.__isKeepAlive;function of(i,e){Gc(i,"a",e)}function af(i,e){Gc(i,"da",e)}function Gc(i,e,t=it){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(gs(e,n,t),t){let r=t.parent;for(;r&&r.parent;)ms(r.parent.vnode)&&lf(n,e,t,r),r=r.parent}}function lf(i,e,t,n){const r=gs(e,i,n,!0);Wc(()=>{Xo(n[e],r)},t)}function gs(i,e,t=it,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;qi(),Vi(t);const o=Ft(e,t,i,a);return ti(),ji(),o});return n?r.unshift(s):r.push(s),s}}const _n=i=>(e,t=it)=>(!fr||i==="sp")&&gs(i,e,t),cf=_n("bm"),sa=_n("m"),uf=_n("bu"),hf=_n("u"),Hc=_n("bum"),Wc=_n("um"),ff=_n("sp"),df=_n("rtg"),pf=_n("rtc");function mf(i,e=it){gs("ec",i,e)}function Vn(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(qi(),Ft(l,t,8,[i.el,o,i,e]),ji())}}const Xc="components",$c=Symbol();function gf(i){return ot(i)?_f(Xc,i,!1)||i:i||$c}function _f(i,e,t=!0,n=!1){const r=Ht||it;if(r){const s=r.type;if(i===Xc){const o=Yf(s,!1);if(o&&(o===e||o===nn(e)||o===us(nn(e))))return s}const a=Pa(r[i]||s[i],e)||Pa(r.appContext[i],e);return!a&&n?s:a}}function Pa(i,e){return i&&(i[e]||i[nn(e)]||i[us(nn(e))])}const wo=i=>i?au(i)?ca(i)||i.proxy:wo(i.parent):null,ss=ut(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>wo(i.parent),$root:i=>wo(i.root),$emit:i=>i.emit,$options:i=>jc(i),$forceUpdate:i=>i.f||(i.f=()=>Pc(i.update)),$nextTick:i=>i.n||(i.n=Gh.bind(i.proxy)),$watch:i=>tf.bind(i)}),xf={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:a,type:o,appContext:l}=i;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==$e&&ze(n,e))return a[e]=1,n[e];if(r!==$e&&ze(r,e))return a[e]=2,r[e];if((c=i.propsOptions[0])&&ze(c,e))return a[e]=3,s[e];if(t!==$e&&ze(t,e))return a[e]=4,t[e];Eo&&(a[e]=0)}}const u=ss[e];let h,f;if(u)return e==="$attrs"&&At(i,"get",e),u(i);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==$e&&ze(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,ze(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==$e&&ze(r,e)?(r[e]=t,!0):n!==$e&&ze(n,e)?(n[e]=t,!0):ze(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},a){let o;return!!t[a]||i!==$e&&ze(i,a)||e!==$e&&ze(e,a)||(o=s[0])&&ze(o,a)||ze(n,a)||ze(ss,a)||ze(r.config.globalProperties,a)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:ze(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let Eo=!0;function vf(i){const e=jc(i),t=i.proxy,n=i.ctx;Eo=!1,e.beforeCreate&&Da(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:v,activated:p,deactivated:d,beforeDestroy:g,beforeUnmount:S,destroyed:T,unmounted:A,render:y,renderTracked:D,renderTriggered:z,errorCaptured:b,serverPrefetch:C,expose:I,inheritAttrs:te,components:fe,directives:H,filters:O}=e;if(c&&bf(c,n,null,i.appContext.config.unwrapInjectedRef),a)for(const Q in a){const G=a[Q];De(G)&&(n[Q]=G.bind(t))}if(r){const Q=r.call(t,t);pt(Q)&&(i.data=Qo(Q))}if(Eo=!0,s)for(const Q in s){const G=s[Q],F=De(G)?G.bind(t,t):De(G.get)?G.get.bind(t,t):Xt,W=!De(G)&&De(G.set)?G.set.bind(t):Xt,he=Kf({get:F,set:W});Object.defineProperty(n,Q,{enumerable:!0,configurable:!0,get:()=>he.value,set:le=>he.value=le})}if(o)for(const Q in o)qc(o[Q],n,t,Q);if(l){const Q=De(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(G=>{ef(G,Q[G])})}u&&Da(u,i,"c");function ne(Q,G){Re(G)?G.forEach(F=>Q(F.bind(t))):G&&Q(G.bind(t))}if(ne(cf,h),ne(sa,f),ne(uf,m),ne(hf,v),ne(of,p),ne(af,d),ne(mf,b),ne(pf,D),ne(df,z),ne(Hc,S),ne(Wc,A),ne(ff,C),Re(I))if(I.length){const Q=i.exposed||(i.exposed={});I.forEach(G=>{Object.defineProperty(Q,G,{get:()=>t[G],set:F=>t[G]=F})})}else i.exposed||(i.exposed={});y&&i.render===Xt&&(i.render=y),te!=null&&(i.inheritAttrs=te),fe&&(i.components=fe),H&&(i.directives=H)}function bf(i,e,t=Xt,n=!1){Re(i)&&(i=Ao(i));for(const r in i){const s=i[r];let a;pt(s)?"default"in s?a=Ts(s.from||r,s.default,!0):a=Ts(s.from||r):a=Ts(s),dt(a)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function Da(i,e,t){Ft(Re(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function qc(i,e,t,n){const r=n.includes(".")?zc(t,n):()=>t[n];if(ot(i)){const s=e[i];De(s)&&Cs(r,s)}else if(De(i))Cs(r,i.bind(t));else if(pt(i))if(Re(i))i.forEach(s=>qc(s,e,t,n));else{const s=De(i.handler)?i.handler.bind(t):e[i.handler];De(s)&&Cs(r,s,i)}}function jc(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=i.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>os(l,c,a,!0)),os(l,e,a)),s.set(e,l),l}function os(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&os(i,s,t,!0),r&&r.forEach(a=>os(i,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=Mf[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const Mf={data:Ra,props:Xn,emits:Xn,methods:Xn,computed:Xn,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Xn,directives:Xn,watch:Sf,provide:Ra,inject:yf};function Ra(i,e){return e?i?function(){return ut(De(i)?i.call(this,this):i,De(e)?e.call(this,this):e)}:e:i}function yf(i,e){return Xn(Ao(i),Ao(e))}function Ao(i){if(Re(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function ft(i,e){return i?[...new Set([].concat(i,e))]:e}function Xn(i,e){return i?ut(ut(Object.create(null),i),e):e}function Sf(i,e){if(!i)return e;if(!e)return i;const t=ut(Object.create(null),i);for(const n in e)t[n]=ft(i[n],e[n]);return t}function wf(i,e,t,n=!1){const r={},s={};ns(s,_s,1),i.propsDefaults=Object.create(null),Yc(i,e,r,s);for(const a in i.propsOptions[0])a in r||(r[a]=void 0);t?i.props=n?r:Fh(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Ef(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:a}}=i,o=Xe(r),[l]=i.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ps(i.emitsOptions,f))continue;const m=e[f];if(l)if(ze(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const v=nn(f);r[v]=To(l,o,v,m,i,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{Yc(i,e,r,s)&&(c=!0);let u;for(const h in o)(!e||!ze(e,h)&&((u=$i(h))===h||!ze(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=To(l,o,h,void 0,i,!0)):delete r[h]);if(s!==o)for(const h in s)(!e||!ze(e,h)&&!0)&&(delete s[h],c=!0)}c&&gn(i,"set","$attrs")}function Yc(i,e,t,n){const[r,s]=i.propsOptions;let a=!1,o;if(e)for(let l in e){if(Zr(l))continue;const c=e[l];let u;r&&ze(r,u=nn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ps(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(s){const l=Xe(t),c=o||$e;for(let u=0;u<s.length;u++){const h=s[u];t[h]=To(r,l,h,c[h],i,!ze(c,h))}}return a}function To(i,e,t,n,r,s){const a=i[t];if(a!=null){const o=ze(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&De(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Vi(r),n=c[t]=l.call(null,e),ti())}else n=l}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===$i(t))&&(n=!0))}return n}function Zc(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,a={},o=[];let l=!1;if(!De(i)){const u=h=>{l=!0;const[f,m]=Zc(h,e,!0);ut(a,f),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return n.set(i,Oi),Oi;if(Re(s))for(let u=0;u<s.length;u++){const h=nn(s[u]);Ia(h)&&(a[h]=$e)}else if(s)for(const u in s){const h=nn(u);if(Ia(h)){const f=s[u],m=a[h]=Re(f)||De(f)?{type:f}:f;if(m){const v=Oa(Boolean,m.type),p=Oa(String,m.type);m[0]=v>-1,m[1]=p<0||v<p,(v>-1||ze(m,"default"))&&o.push(h)}}}const c=[a,o];return n.set(i,c),c}function Ia(i){return i[0]!=="$"}function Fa(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Na(i,e){return Fa(i)===Fa(e)}function Oa(i,e){return Re(e)?e.findIndex(t=>Na(t,i)):De(e)&&Na(e,i)?0:-1}const Kc=i=>i[0]==="_"||i==="$stable",oa=i=>Re(i)?i.map(Zt):[Zt(i)],Af=(i,e,t)=>{if(e._n)return e;const n=ra((...r)=>oa(e(...r)),t);return n._c=!1,n},Jc=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Kc(r))continue;const s=i[r];if(De(s))e[r]=Af(r,s,n);else if(s!=null){const a=oa(s);e[r]=()=>a}}},Qc=(i,e)=>{const t=oa(e);i.slots.default=()=>t},Tf=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Xe(e),ns(e,"_",t)):Jc(e,i.slots={})}else i.slots={},e&&Qc(i,e);ns(i.slots,_s,1)},Cf=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,a=$e;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(ut(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Jc(e,r)),a=e}else e&&(Qc(i,e),a={default:1});if(s)for(const o in r)!Kc(o)&&!(o in a)&&delete r[o]};function eu(){return{app:null,config:{isNativeTag:Zu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lf=0;function Pf(i,e){return function(n,r=null){De(n)||(n=Object.assign({},n)),r!=null&&!pt(r)&&(r=null);const s=eu(),a=new Set;let o=!1;const l=s.app={_uid:Lf++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Jf,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&De(c.install)?(a.add(c),c.install(l,...u)):De(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!o){const f=In(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),o=!0,l._container=c,c.__vue_app__=l,ca(f.component)||f.component.proxy}},unmount(){o&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Co(i,e,t,n,r=!1){if(Re(i)){i.forEach((f,m)=>Co(f,e&&(Re(e)?e[m]:e),t,n,r));return}if(Kr(n)&&!r)return;const s=n.shapeFlag&4?ca(n.component)||n.component.proxy:n.el,a=r?null:s,{i:o,r:l}=i,c=e&&e.r,u=o.refs===$e?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(ot(c)?(u[c]=null,ze(h,c)&&(h[c]=null)):dt(c)&&(c.value=null)),De(l))Rn(l,o,12,[a,u]);else{const f=ot(l),m=dt(l);if(f||m){const v=()=>{if(i.f){const p=f?u[l]:l.value;r?Re(p)&&Xo(p,s):Re(p)?p.includes(s)||p.push(s):f?(u[l]=[s],ze(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=a,ze(h,l)&&(h[l]=a)):m&&(l.value=a,i.k&&(u[i.k]=a))};a?(v.id=-1,_t(v,t)):v()}}}const _t=Qh;function Df(i){return Rf(i)}function Rf(i,e){const t=oh();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Xt,cloneNode:v,insertStaticContent:p}=i,d=(w,L,k,j=null,Z=null,re=null,se=!1,ae=null,ue=!!L.dynamicChildren)=>{if(w===L)return;w&&!jn(w,L)&&(j=Se(w),oe(w,Z,re,!0),w=null),L.patchFlag===-2&&(ue=!1,L.dynamicChildren=null);const{type:x,ref:_,shapeFlag:R}=L;switch(x){case aa:g(w,L,k,j);break;case pn:S(w,L,k,j);break;case Ps:w==null&&T(L,k,j,se);break;case Yt:H(w,L,k,j,Z,re,se,ae,ue);break;default:R&1?D(w,L,k,j,Z,re,se,ae,ue):R&6?O(w,L,k,j,Z,re,se,ae,ue):(R&64||R&128)&&x.process(w,L,k,j,Z,re,se,ae,ue,xe)}_!=null&&Z&&Co(_,w&&w.ref,re,L||w,!L)},g=(w,L,k,j)=>{if(w==null)n(L.el=o(L.children),k,j);else{const Z=L.el=w.el;L.children!==w.children&&c(Z,L.children)}},S=(w,L,k,j)=>{w==null?n(L.el=l(L.children||""),k,j):L.el=w.el},T=(w,L,k,j)=>{[w.el,w.anchor]=p(w.children,L,k,j,w.el,w.anchor)},A=({el:w,anchor:L},k,j)=>{let Z;for(;w&&w!==L;)Z=f(w),n(w,k,j),w=Z;n(L,k,j)},y=({el:w,anchor:L})=>{let k;for(;w&&w!==L;)k=f(w),r(w),w=k;r(L)},D=(w,L,k,j,Z,re,se,ae,ue)=>{se=se||L.type==="svg",w==null?z(L,k,j,Z,re,se,ae,ue):I(w,L,Z,re,se,ae,ue)},z=(w,L,k,j,Z,re,se,ae)=>{let ue,x;const{type:_,props:R,shapeFlag:V,transition:$,patchFlag:ie,dirs:_e}=w;if(w.el&&v!==void 0&&ie===-1)ue=w.el=v(w.el);else{if(ue=w.el=a(w.type,re,R&&R.is,R),V&8?u(ue,w.children):V&16&&C(w.children,ue,null,j,Z,re&&_!=="foreignObject",se,ae),_e&&Vn(w,null,j,"created"),R){for(const X in R)X!=="value"&&!Zr(X)&&s(ue,X,null,R[X],re,w.children,j,Z,Pe);"value"in R&&s(ue,"value",null,R.value),(x=R.onVnodeBeforeMount)&&qt(x,j,w)}b(ue,w,w.scopeId,se,j)}_e&&Vn(w,null,j,"beforeMount");const M=(!Z||Z&&!Z.pendingBranch)&&$&&!$.persisted;M&&$.beforeEnter(ue),n(ue,L,k),((x=R&&R.onVnodeMounted)||M||_e)&&_t(()=>{x&&qt(x,j,w),M&&$.enter(ue),_e&&Vn(w,null,j,"mounted")},Z)},b=(w,L,k,j,Z)=>{if(k&&m(w,k),j)for(let re=0;re<j.length;re++)m(w,j[re]);if(Z){let re=Z.subTree;if(L===re){const se=Z.vnode;b(w,se,se.scopeId,se.slotScopeIds,Z.parent)}}},C=(w,L,k,j,Z,re,se,ae,ue=0)=>{for(let x=ue;x<w.length;x++){const _=w[x]=ae?Ln(w[x]):Zt(w[x]);d(null,_,L,k,j,Z,re,se,ae)}},I=(w,L,k,j,Z,re,se)=>{const ae=L.el=w.el;let{patchFlag:ue,dynamicChildren:x,dirs:_}=L;ue|=w.patchFlag&16;const R=w.props||$e,V=L.props||$e;let $;k&&kn(k,!1),($=V.onVnodeBeforeUpdate)&&qt($,k,L,w),_&&Vn(L,w,k,"beforeUpdate"),k&&kn(k,!0);const ie=Z&&L.type!=="foreignObject";if(x?te(w.dynamicChildren,x,ae,k,j,ie,re):se||F(w,L,ae,null,k,j,ie,re,!1),ue>0){if(ue&16)fe(ae,L,R,V,k,j,Z);else if(ue&2&&R.class!==V.class&&s(ae,"class",null,V.class,Z),ue&4&&s(ae,"style",R.style,V.style,Z),ue&8){const _e=L.dynamicProps;for(let M=0;M<_e.length;M++){const X=_e[M],ce=R[X],pe=V[X];(pe!==ce||X==="value")&&s(ae,X,ce,pe,Z,w.children,k,j,Pe)}}ue&1&&w.children!==L.children&&u(ae,L.children)}else!se&&x==null&&fe(ae,L,R,V,k,j,Z);(($=V.onVnodeUpdated)||_)&&_t(()=>{$&&qt($,k,L,w),_&&Vn(L,w,k,"updated")},j)},te=(w,L,k,j,Z,re,se)=>{for(let ae=0;ae<L.length;ae++){const ue=w[ae],x=L[ae],_=ue.el&&(ue.type===Yt||!jn(ue,x)||ue.shapeFlag&70)?h(ue.el):k;d(ue,x,_,null,j,Z,re,se,!0)}},fe=(w,L,k,j,Z,re,se)=>{if(k!==j){for(const ae in j){if(Zr(ae))continue;const ue=j[ae],x=k[ae];ue!==x&&ae!=="value"&&s(w,ae,x,ue,se,L.children,Z,re,Pe)}if(k!==$e)for(const ae in k)!Zr(ae)&&!(ae in j)&&s(w,ae,k[ae],null,se,L.children,Z,re,Pe);"value"in j&&s(w,"value",k.value,j.value)}},H=(w,L,k,j,Z,re,se,ae,ue)=>{const x=L.el=w?w.el:o(""),_=L.anchor=w?w.anchor:o("");let{patchFlag:R,dynamicChildren:V,slotScopeIds:$}=L;$&&(ae=ae?ae.concat($):$),w==null?(n(x,k,j),n(_,k,j),C(L.children,k,_,Z,re,se,ae,ue)):R>0&&R&64&&V&&w.dynamicChildren?(te(w.dynamicChildren,V,k,Z,re,se,ae),(L.key!=null||Z&&L===Z.subTree)&&tu(w,L,!0)):F(w,L,k,_,Z,re,se,ae,ue)},O=(w,L,k,j,Z,re,se,ae,ue)=>{L.slotScopeIds=ae,w==null?L.shapeFlag&512?Z.ctx.activate(L,k,j,se,ue):ee(L,k,j,Z,re,se,ue):ne(w,L,ue)},ee=(w,L,k,j,Z,re,se)=>{const ae=w.component=Hf(w,j,Z);if(ms(w)&&(ae.ctx.renderer=xe),Xf(ae),ae.asyncDep){if(Z&&Z.registerDep(ae,Q),!w.el){const ue=ae.subTree=In(pn);S(null,ue,L,k)}return}Q(ae,w,L,k,Z,re,se)},ne=(w,L,k)=>{const j=L.component=w.component;if(Zh(w,L,k))if(j.asyncDep&&!j.asyncResolved){G(j,L,k);return}else j.next=L,Wh(j.update),j.update();else L.el=w.el,j.vnode=L},Q=(w,L,k,j,Z,re,se)=>{const ae=()=>{if(w.isMounted){let{next:_,bu:R,u:V,parent:$,vnode:ie}=w,_e=_,M;kn(w,!1),_?(_.el=ie.el,G(w,_,se)):_=ie,R&&Es(R),(M=_.props&&_.props.onVnodeBeforeUpdate)&&qt(M,$,_,ie),kn(w,!0);const X=As(w),ce=w.subTree;w.subTree=X,d(ce,X,h(ce.el),Se(ce),w,Z,re),_.el=X.el,_e===null&&Kh(w,X.el),V&&_t(V,Z),(M=_.props&&_.props.onVnodeUpdated)&&_t(()=>qt(M,$,_,ie),Z)}else{let _;const{el:R,props:V}=L,{bm:$,m:ie,parent:_e}=w,M=Kr(L);if(kn(w,!1),$&&Es($),!M&&(_=V&&V.onVnodeBeforeMount)&&qt(_,_e,L),kn(w,!0),R&&Te){const X=()=>{w.subTree=As(w),Te(R,w.subTree,w,Z,null)};M?L.type.__asyncLoader().then(()=>!w.isUnmounted&&X()):X()}else{const X=w.subTree=As(w);d(null,X,k,j,w,Z,re),L.el=X.el}if(ie&&_t(ie,Z),!M&&(_=V&&V.onVnodeMounted)){const X=L;_t(()=>qt(_,_e,X),Z)}(L.shapeFlag&256||_e&&Kr(_e.vnode)&&_e.vnode.shapeFlag&256)&&w.a&&_t(w.a,Z),w.isMounted=!0,L=k=j=null}},ue=w.effect=new Yo(ae,()=>Pc(x),w.scope),x=w.update=()=>ue.run();x.id=w.uid,kn(w,!0),x()},G=(w,L,k)=>{L.component=w;const j=w.vnode.props;w.vnode=L,w.next=null,Ef(w,L.props,j,k),Cf(w,L.children,k),qi(),ds(void 0,w.update),ji()},F=(w,L,k,j,Z,re,se,ae,ue=!1)=>{const x=w&&w.children,_=w?w.shapeFlag:0,R=L.children,{patchFlag:V,shapeFlag:$}=L;if(V>0){if(V&128){he(x,R,k,j,Z,re,se,ae,ue);return}else if(V&256){W(x,R,k,j,Z,re,se,ae,ue);return}}$&8?(_&16&&Pe(x,Z,re),R!==x&&u(k,R)):_&16?$&16?he(x,R,k,j,Z,re,se,ae,ue):Pe(x,Z,re,!0):(_&8&&u(k,""),$&16&&C(R,k,j,Z,re,se,ae,ue))},W=(w,L,k,j,Z,re,se,ae,ue)=>{w=w||Oi,L=L||Oi;const x=w.length,_=L.length,R=Math.min(x,_);let V;for(V=0;V<R;V++){const $=L[V]=ue?Ln(L[V]):Zt(L[V]);d(w[V],$,k,null,Z,re,se,ae,ue)}x>_?Pe(w,Z,re,!0,!1,R):C(L,k,j,Z,re,se,ae,ue,R)},he=(w,L,k,j,Z,re,se,ae,ue)=>{let x=0;const _=L.length;let R=w.length-1,V=_-1;for(;x<=R&&x<=V;){const $=w[x],ie=L[x]=ue?Ln(L[x]):Zt(L[x]);if(jn($,ie))d($,ie,k,null,Z,re,se,ae,ue);else break;x++}for(;x<=R&&x<=V;){const $=w[R],ie=L[V]=ue?Ln(L[V]):Zt(L[V]);if(jn($,ie))d($,ie,k,null,Z,re,se,ae,ue);else break;R--,V--}if(x>R){if(x<=V){const $=V+1,ie=$<_?L[$].el:j;for(;x<=V;)d(null,L[x]=ue?Ln(L[x]):Zt(L[x]),k,ie,Z,re,se,ae,ue),x++}}else if(x>V)for(;x<=R;)oe(w[x],Z,re,!0),x++;else{const $=x,ie=x,_e=new Map;for(x=ie;x<=V;x++){const Fe=L[x]=ue?Ln(L[x]):Zt(L[x]);Fe.key!=null&&_e.set(Fe.key,x)}let M,X=0;const ce=V-ie+1;let pe=!1,ge=0;const ye=new Array(ce);for(x=0;x<ce;x++)ye[x]=0;for(x=$;x<=R;x++){const Fe=w[x];if(X>=ce){oe(Fe,Z,re,!0);continue}let P;if(Fe.key!=null)P=_e.get(Fe.key);else for(M=ie;M<=V;M++)if(ye[M-ie]===0&&jn(Fe,L[M])){P=M;break}P===void 0?oe(Fe,Z,re,!0):(ye[P-ie]=x+1,P>=ge?ge=P:pe=!0,d(Fe,L[P],k,null,Z,re,se,ae,ue),X++)}const Ie=pe?If(ye):Oi;for(M=Ie.length-1,x=ce-1;x>=0;x--){const Fe=ie+x,P=L[Fe],de=Fe+1<_?L[Fe+1].el:j;ye[x]===0?d(null,P,k,de,Z,re,se,ae,ue):pe&&(M<0||x!==Ie[M]?le(P,k,de,2):M--)}}},le=(w,L,k,j,Z=null)=>{const{el:re,type:se,transition:ae,children:ue,shapeFlag:x}=w;if(x&6){le(w.component.subTree,L,k,j);return}if(x&128){w.suspense.move(L,k,j);return}if(x&64){se.move(w,L,k,xe);return}if(se===Yt){n(re,L,k);for(let R=0;R<ue.length;R++)le(ue[R],L,k,j);n(w.anchor,L,k);return}if(se===Ps){A(w,L,k);return}if(j!==2&&x&1&&ae)if(j===0)ae.beforeEnter(re),n(re,L,k),_t(()=>ae.enter(re),Z);else{const{leave:R,delayLeave:V,afterLeave:$}=ae,ie=()=>n(re,L,k),_e=()=>{R(re,()=>{ie(),$&&$()})};V?V(re,ie,_e):_e()}else n(re,L,k)},oe=(w,L,k,j=!1,Z=!1)=>{const{type:re,props:se,ref:ae,children:ue,dynamicChildren:x,shapeFlag:_,patchFlag:R,dirs:V}=w;if(ae!=null&&Co(ae,null,k,w,!0),_&256){L.ctx.deactivate(w);return}const $=_&1&&V,ie=!Kr(w);let _e;if(ie&&(_e=se&&se.onVnodeBeforeUnmount)&&qt(_e,L,w),_&6)J(w.component,k,j);else{if(_&128){w.suspense.unmount(k,j);return}$&&Vn(w,null,L,"beforeUnmount"),_&64?w.type.remove(w,L,k,Z,xe,j):x&&(re!==Yt||R>0&&R&64)?Pe(x,L,k,!1,!0):(re===Yt&&R&384||!Z&&_&16)&&Pe(ue,L,k),j&&Me(w)}(ie&&(_e=se&&se.onVnodeUnmounted)||$)&&_t(()=>{_e&&qt(_e,L,w),$&&Vn(w,null,L,"unmounted")},k)},Me=w=>{const{type:L,el:k,anchor:j,transition:Z}=w;if(L===Yt){Ae(k,j);return}if(L===Ps){y(w);return}const re=()=>{r(k),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(w.shapeFlag&1&&Z&&!Z.persisted){const{leave:se,delayLeave:ae}=Z,ue=()=>se(k,re);ae?ae(w.el,re,ue):ue()}else re()},Ae=(w,L)=>{let k;for(;w!==L;)k=f(w),r(w),w=k;r(L)},J=(w,L,k)=>{const{bum:j,scope:Z,update:re,subTree:se,um:ae}=w;j&&Es(j),Z.stop(),re&&(re.active=!1,oe(se,w,L,k)),ae&&_t(ae,L),_t(()=>{w.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Pe=(w,L,k,j=!1,Z=!1,re=0)=>{for(let se=re;se<w.length;se++)oe(w[se],L,k,j,Z)},Se=w=>w.shapeFlag&6?Se(w.component.subTree):w.shapeFlag&128?w.suspense.next():f(w.anchor||w.el),Ee=(w,L,k)=>{w==null?L._vnode&&oe(L._vnode,null,null,!0):d(L._vnode||null,w,L,null,null,null,k),Ic(),L._vnode=w},xe={p:d,um:oe,m:le,r:Me,mt:ee,mc:C,pc:F,pbc:te,n:Se,o:i};let Be,Te;return e&&([Be,Te]=e(xe)),{render:Ee,hydrate:Be,createApp:Pf(Ee,Be)}}function kn({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function tu(i,e,t=!1){const n=i.children,r=e.children;if(Re(n)&&Re(r))for(let s=0;s<n.length;s++){const a=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ln(r[s]),o.el=a.el),t||tu(a,o))}}function If(i){const e=i.slice(),t=[0];let n,r,s,a,o;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,i[t[o]]<c?s=o+1:a=o;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Ff=i=>i.__isTeleport,Yt=Symbol(void 0),aa=Symbol(void 0),pn=Symbol(void 0),Ps=Symbol(void 0),ar=[];let Wt=null;function nu(i=!1){ar.push(Wt=i?null:[])}function Nf(){ar.pop(),Wt=ar[ar.length-1]||null}let hr=1;function Ua(i){hr+=i}function Of(i){return i.dynamicChildren=hr>0?Wt||Oi:null,Nf(),hr>0&&Wt&&Wt.push(i),i}function iu(i,e,t,n,r){return Of(In(i,e,t,n,r,!0))}function Uf(i){return i?i.__v_isVNode===!0:!1}function jn(i,e){return i.type===e.type&&i.key===e.key}const _s="__vInternal",ru=({key:i})=>i!=null?i:null,Jr=({ref:i,ref_key:e,ref_for:t})=>i!=null?ot(i)||dt(i)||De(i)?{i:Ht,r:i,k:e,f:!!t}:i:null;function su(i,e=null,t=null,n=0,r=null,s=i===Yt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&ru(e),ref:e&&Jr(e),scopeId:Oc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(la(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=ot(t)?8:16),hr>0&&!a&&Wt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Wt.push(l),l}const In=zf;function zf(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===$c)&&(i=pn),Uf(i)){const o=On(i,e,!0);return t&&la(o,t),hr>0&&!s&&Wt&&(o.shapeFlag&6?Wt[Wt.indexOf(i)]=o:Wt.push(o)),o.patchFlag|=-2,o}if(Zf(i)&&(i=i.__vccOpts),e){e=Bf(e);let{class:o,style:l}=e;o&&!ot(o)&&(e.class=Ho(o)),pt(l)&&(Ac(l)&&!Re(l)&&(l=ut({},l)),e.style=Go(l))}const a=ot(i)?1:Jh(i)?128:Ff(i)?64:pt(i)?4:De(i)?2:0;return su(i,e,t,n,r,a,s,!0)}function Bf(i){return i?Ac(i)||_s in i?ut({},i):i:null}function On(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:a}=i,o=e?Vf(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:o,key:o&&ru(o),ref:e&&e.ref?t&&r?Re(r)?r.concat(Jr(e)):[r,Jr(e)]:Jr(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Yt?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&On(i.ssContent),ssFallback:i.ssFallback&&On(i.ssFallback),el:i.el,anchor:i.anchor}}function ou(i=" ",e=0){return In(aa,null,i,e)}function Zt(i){return i==null||typeof i=="boolean"?In(pn):Re(i)?In(Yt,null,i.slice()):typeof i=="object"?Ln(i):In(aa,null,String(i))}function Ln(i){return i.el===null||i.memo?i:On(i)}function la(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Re(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),la(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(_s in e)?e._ctx=Ht:r===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else De(e)?(e={default:e,_ctx:Ht},t=32):(e=String(e),n&64?(t=16,e=[ou(e)]):t=8);i.children=e,i.shapeFlag|=t}function Vf(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Ho([e.class,n.class]));else if(r==="style")e.style=Go([e.style,n.style]);else if(as(r)){const s=e[r],a=n[r];a&&s!==a&&!(Re(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=n[r])}return e}function qt(i,e,t,n=null){Ft(i,e,7,[t,n])}const kf=eu();let Gf=0;function Hf(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||kf,s={uid:Gf++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ah(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zc(n,r),emitsOptions:Nc(n,r),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:n.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=qh.bind(null,s),i.ce&&i.ce(s),s}let it=null;const Wf=()=>it||Ht,Vi=i=>{it=i,i.scope.on()},ti=()=>{it&&it.scope.off(),it=null};function au(i){return i.vnode.shapeFlag&4}let fr=!1;function Xf(i,e=!1){fr=e;const{props:t,children:n}=i.vnode,r=au(i);wf(i,t,r,e),Tf(i,n);const s=r?$f(i,e):void 0;return fr=!1,s}function $f(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Tc(new Proxy(i.ctx,xf));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?jf(i):null;Vi(i),qi();const s=Rn(n,i,0,[i.props,r]);if(ji(),ti(),pc(s)){if(s.then(ti,ti),e)return s.then(a=>{za(i,a,e)}).catch(a=>{fs(a,i,0)});i.asyncDep=s}else za(i,s,e)}else lu(i,e)}function za(i,e,t){De(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:pt(e)&&(i.setupState=Cc(e)),lu(i,t)}let Ba;function lu(i,e,t){const n=i.type;if(!i.render){if(!e&&Ba&&!n.render){const r=n.template;if(r){const{isCustomElement:s,compilerOptions:a}=i.appContext.config,{delimiters:o,compilerOptions:l}=n,c=ut(ut({isCustomElement:s,delimiters:o},a),l);n.render=Ba(r,c)}}i.render=n.render||Xt}Vi(i),qi(),vf(i),ji(),ti()}function qf(i){return new Proxy(i.attrs,{get(e,t){return At(i,"get","$attrs"),e[t]}})}function jf(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=qf(i))},slots:i.slots,emit:i.emit,expose:e}}function ca(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Cc(Tc(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in ss)return ss[t](i)}}))}function Yf(i,e=!0){return De(i)?i.displayName||i.name:i.name||e&&i.__name}function Zf(i){return De(i)&&"__vccOpts"in i}const Kf=(i,e)=>Vh(i,e,fr),Jf="3.2.37",Qf="http://www.w3.org/2000/svg",Yn=typeof document<"u"?document:null,Va=Yn&&Yn.createElement("template"),ed={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Yn.createElementNS(Qf,i):Yn.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Yn.createTextNode(i),createComment:i=>Yn.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Yn.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Va.innerHTML=n?`<svg>${i}</svg>`:i;const o=Va.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function td(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function nd(i,e,t){const n=i.style,r=ot(t);if(t&&!r){for(const s in t)Lo(n,s,t[s]);if(e&&!ot(e))for(const s in e)t[s]==null&&Lo(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const ka=/\s*!important$/;function Lo(i,e,t){if(Re(t))t.forEach(n=>Lo(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=id(i,e);ka.test(t)?i.setProperty($i(n),t.replace(ka,""),"important"):i[n]=t}}const Ga=["Webkit","Moz","ms"],Ds={};function id(i,e){const t=Ds[e];if(t)return t;let n=nn(e);if(n!=="filter"&&n in i)return Ds[e]=n;n=us(n);for(let r=0;r<Ga.length;r++){const s=Ga[r]+n;if(s in i)return Ds[e]=s}return e}const Ha="http://www.w3.org/1999/xlink";function rd(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Ha,e.slice(6,e.length)):i.setAttributeNS(Ha,e,t);else{const s=$u(e);t==null||s&&!dc(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function sd(i,e,t,n,r,s,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=dc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(e)}const[cu,od]=(()=>{let i=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let Po=0;const ad=Promise.resolve(),ld=()=>{Po=0},cd=()=>Po||(ad.then(ld),Po=cu());function ud(i,e,t,n){i.addEventListener(e,t,n)}function hd(i,e,t,n){i.removeEventListener(e,t,n)}function fd(i,e,t,n,r=null){const s=i._vei||(i._vei={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=dd(e);if(n){const c=s[e]=pd(n,r);ud(i,o,c,l)}else a&&(hd(i,o,a,l),s[e]=void 0)}}const Wa=/(?:Once|Passive|Capture)$/;function dd(i){let e;if(Wa.test(i)){e={};let t;for(;t=i.match(Wa);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[$i(i.slice(2)),e]}function pd(i,e){const t=n=>{const r=n.timeStamp||cu();(od||r>=t.attached-1)&&Ft(md(n,t.value),e,5,[n])};return t.value=i,t.attached=cd(),t}function md(i,e){if(Re(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Xa=/^on[a-z]/,gd=(i,e,t,n,r=!1,s,a,o,l)=>{e==="class"?td(i,n,r):e==="style"?nd(i,t,n):as(e)?Wo(e)||fd(i,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_d(i,e,n,r))?sd(i,e,n,s,a,o,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),rd(i,e,n,r))};function _d(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Xa.test(e)&&De(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Xa.test(e)&&ot(t)?!1:e in i}const xd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};sf.props;const vd=ut({patchProp:gd},ed);let $a;function bd(){return $a||($a=Df(vd))}const Md=(...i)=>{const e=bd().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=yd(n);if(!r)return;const s=e._component;!De(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function yd(i){return ot(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ua="144",di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sd=0,qa=1,wd=2,uu=1,hu=2,nr=3,ki=0,Nt=1,Pn=2,Fn=0,zi=1,ja=2,Ya=3,Za=4,Ed=5,Ii=100,Ad=101,Td=102,Ka=103,Ja=104,Cd=200,Ld=201,Pd=202,Dd=203,fu=204,du=205,Rd=206,Id=207,Fd=208,Nd=209,Od=210,Ud=0,zd=1,Bd=2,Do=3,Vd=4,kd=5,Gd=6,Hd=7,pu=0,Wd=1,Xd=2,mn=0,$d=1,qd=2,jd=3,Yd=4,Zd=5,mu=300,Gi=301,Hi=302,Ro=303,Io=304,xs=306,Fo=1e3,Gt=1001,No=1002,xt=1003,Qa=1004,el=1005,Dt=1006,Kd=1007,vs=1008,ri=1009,Jd=1010,Qd=1011,gu=1012,ep=1013,Kn=1014,Jn=1015,dr=1016,tp=1017,np=1018,Bi=1020,ip=1021,rp=1022,Jt=1023,sp=1024,op=1025,ni=1026,Wi=1027,ap=1028,lp=1029,cp=1030,up=1031,hp=1033,Rs=33776,Is=33777,Fs=33778,Ns=33779,tl=35840,nl=35841,il=35842,rl=35843,fp=36196,sl=37492,ol=37496,al=37808,ll=37809,cl=37810,ul=37811,hl=37812,fl=37813,dl=37814,pl=37815,ml=37816,gl=37817,_l=37818,xl=37819,vl=37820,bl=37821,Ml=36492,si=3e3,Ze=3001,dp=3200,pp=3201,_u=0,mp=1,un="srgb",Qn="srgb-linear",Os=7680,gp=519,yl=35044,Sl="300 es",Oo=1035;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Us=Math.PI/180,wl=180/Math.PI;function gr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(lt[i&255]+lt[i>>8&255]+lt[i>>16&255]+lt[i>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[n&255]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function _p(i,e){return(i%e+e)%e}function zs(i,e,t){return(1-t)*i+t*e}function El(i){return(i&i-1)===0&&i!==0}function Uo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],v=n[8],p=r[0],d=r[3],g=r[6],S=r[1],T=r[4],A=r[7],y=r[2],D=r[5],z=r[8];return s[0]=a*p+o*S+l*y,s[3]=a*d+o*T+l*D,s[6]=a*g+o*A+l*z,s[1]=c*p+u*S+h*y,s[4]=c*d+u*T+h*D,s[7]=c*g+u*A+h*z,s[2]=f*p+m*S+v*y,s[5]=f*d+m*T+v*D,s[8]=f*g+m*A+v*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,v=t*h+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=h*p,e[1]=(r*c-u*n)*p,e[2]=(o*n-r*a)*p,e[3]=f*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*a+n*c,r[6]=t*o+n*u,r[1]=-n*s+t*l,r[4]=-n*a+t*c,r[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function xu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Bs={[un]:{[Qn]:ii},[Qn]:{[un]:Qr}},Ut={legacyMode:!0,get workingColorSpace(){return Qn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Bs[e]&&Bs[e][t]!==void 0){const n=Bs[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={r:0,g:0,b:0},zt={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Vs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Lr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Qn){return this.r=e,this.g=t,this.b=n,Ut.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Qn){if(e=_p(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vs(a,s,e+1/3),this.g=Vs(a,s,e),this.b=Vs(a,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,t=un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ut.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ut.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ut.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=un){const n=vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Ut.fromWorkingColorSpace(Lr(this,et),e),vt(et.r*255,0,255)<<16^vt(et.g*255,0,255)<<8^vt(et.b*255,0,255)<<0}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qn){Ut.fromWorkingColorSpace(Lr(this,et),t);const n=et.r,r=et.g,s=et.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qn){return Ut.fromWorkingColorSpace(Lr(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e=un){return Ut.fromWorkingColorSpace(Lr(this,et),e),e!==un?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${et.r*255|0},${et.g*255|0},${et.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=n,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(Cr);const n=zs(zt.h,Cr.h,t),r=zs(zt.s,Cr.s,t),s=zs(zt.l,Cr.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qe.NAMES=vu;let mi;class bu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=pr("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ii(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Mu{constructor(e=null){this.isSource=!0,this.uuid=gr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ks(r[a].image)):s.push(ks(r[a]))}else s=ks(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ks(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xp=0;class Ot extends ci{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Gt,r=Gt,s=Dt,a=vs,o=Jt,l=ri,c=1,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=gr(),this.name="",this.source=new Mu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fo:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fo:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=mu;class rt{constructor(e=0,t=0,n=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],v=l[9],p=l[2],d=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(v+d)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,A=(m+1)/2,y=(g+1)/2,D=(u+f)/4,z=(h+p)/4,b=(v+d)/4;return T>A&&T>y?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=D/n,s=z/n):A>y?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=D/r,s=b/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=z/s,r=b/s),this.set(n,r,s,t),this}let S=Math.sqrt((d-v)*(d-v)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(d-v)/S,this.y=(h-p)/S,this.z=(f-u)/S,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oi extends ci{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yu extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vp extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],m=s[a+1],v=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(h!==p||l!==f||c!==m||u!==v){let d=1-o;const g=l*f+c*m+u*v+h*p,S=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const y=Math.sqrt(T),D=Math.atan2(y,g*S);d=Math.sin(d*D)/y,o=Math.sin(o*D)/y}const A=o*S;if(l=l*d+f*A,c=c*d+m*A,u=u*d+v*A,h=h*d+p*A,d===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*h+l*m-c*f,e[t+1]=l*v+u*f+c*h-o*m,e[t+2]=c*v+u*m+o*f-l*h,e[t+3]=u*v-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h-f*m*v;break;case"YXZ":this._x=f*u*h+c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h+f*m*v;break;case"ZXY":this._x=f*u*h-c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h-f*m*v;break;case"ZYX":this._x=f*u*h-c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h+f*m*v;break;case"YZX":this._x=f*u*h+c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h-f*m*v;break;case"XZY":this._x=f*u*h-c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,h=l*r+s*n-a*t,f=-s*t-a*n-o*r;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new U,Al=new ai;class _r{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Gn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Gn)}else n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox),Hs.applyMatrix4(e.matrixWorld),this.union(Hs);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Pr.subVectors(this.max,Ki),gi.subVectors(e.a,Ki),_i.subVectors(e.b,Ki),xi.subVectors(e.c,Ki),Mn.subVectors(_i,gi),yn.subVectors(xi,_i),Hn.subVectors(gi,xi);let t=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-Hn.z,Hn.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,Hn.z,0,-Hn.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-Hn.y,Hn.x,0];return!Ws(t,gi,_i,xi,Pr)||(t=[1,0,0,0,1,0,0,0,1],!Ws(t,gi,_i,xi,Pr))?!1:(Dr.crossVectors(Mn,yn),t=[Dr.x,Dr.y,Dr.z],Ws(t,gi,_i,xi,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new U,new U,new U,new U,new U,new U,new U,new U],Gn=new U,Hs=new _r,gi=new U,_i=new U,xi=new U,Mn=new U,yn=new U,Hn=new U,Ki=new U,Pr=new U,Dr=new U,Wn=new U;function Ws(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Wn.fromArray(i,s);const o=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),u=n.dot(Wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const bp=new _r,Tl=new U,Rr=new U,Xs=new U;class ha{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(Xs.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Rr.set(0,0,1).multiplyScalar(e.radius):Rr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Tl.copy(e.center).add(Rr)),this.expandByPoint(Tl.copy(e.center).sub(Rr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new U,$s=new U,Ir=new U,Sn=new U,qs=new U,Fr=new U,js=new U;class Su{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.direction).multiplyScalar(t).add(this.origin),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$s.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub($s);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Sn.dot(this.direction),l=-Sn.dot(Ir),c=Sn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,v;if(u>0)if(h=a*l-o,f=a*o-l,v=s*u,h>=0)if(f>=-v)if(f<=v){const p=1/u;h*=p,f*=p,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Ir).multiplyScalar(f).add($s),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),r=on.dot(on)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||n!==n)&&(n=s),(a<r||r!==r)&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,r,s){qs.subVectors(t,e),Fr.subVectors(n,e),js.crossVectors(qs,Fr);let a=this.direction.dot(js),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const l=o*this.direction.dot(Fr.crossVectors(Sn,Fr));if(l<0)return null;const c=o*this.direction.dot(qs.cross(Sn));if(c<0||l+c>a)return null;const u=-o*Sn.dot(js);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,l,c,u,h,f,m,v,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=m,g[7]=v,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vi.setFromMatrixColumn(e,0).length(),s=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,v=o*u,p=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+v*c,t[5]=f-p*c,t[9]=-o*l,t[2]=p-f*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,v=c*u,p=c*h;t[0]=f+p*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=p+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,v=c*u,p=c*h;t[0]=f-p*o,t[4]=-a*h,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=p-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,v=o*u,p=o*h;t[0]=l*u,t[4]=v*c-m,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,p=o*c;t[0]=l*u,t[4]=p-f*h,t[8]=v*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+v,t[10]=f-p*h}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,p=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=a*u,t[9]=m*h-v,t[2]=v*h-m,t[6]=o*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mp,e,yp)}lookAt(e,t,n){const r=this.elements;return yt.subVectors(e,t),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),wn.crossVectors(n,yt),wn.lengthSq()===0&&(Math.abs(n.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),wn.crossVectors(n,yt)),wn.normalize(),Nr.crossVectors(yt,wn),r[0]=wn.x,r[4]=Nr.x,r[8]=yt.x,r[1]=wn.y,r[5]=Nr.y,r[9]=yt.y,r[2]=wn.z,r[6]=Nr.z,r[10]=yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],v=n[2],p=n[6],d=n[10],g=n[14],S=n[3],T=n[7],A=n[11],y=n[15],D=r[0],z=r[4],b=r[8],C=r[12],I=r[1],te=r[5],fe=r[9],H=r[13],O=r[2],ee=r[6],ne=r[10],Q=r[14],G=r[3],F=r[7],W=r[11],he=r[15];return s[0]=a*D+o*I+l*O+c*G,s[4]=a*z+o*te+l*ee+c*F,s[8]=a*b+o*fe+l*ne+c*W,s[12]=a*C+o*H+l*Q+c*he,s[1]=u*D+h*I+f*O+m*G,s[5]=u*z+h*te+f*ee+m*F,s[9]=u*b+h*fe+f*ne+m*W,s[13]=u*C+h*H+f*Q+m*he,s[2]=v*D+p*I+d*O+g*G,s[6]=v*z+p*te+d*ee+g*F,s[10]=v*b+p*fe+d*ne+g*W,s[14]=v*C+p*H+d*Q+g*he,s[3]=S*D+T*I+A*O+y*G,s[7]=S*z+T*te+A*ee+y*F,s[11]=S*b+T*fe+A*ne+y*W,s[15]=S*C+T*H+A*Q+y*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],v=e[3],p=e[7],d=e[11],g=e[15];return v*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*m-n*l*m)+p*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+d*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+g*(-r*o*u-t*l*h+t*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],v=e[12],p=e[13],d=e[14],g=e[15],S=h*d*c-p*f*c+p*l*m-o*d*m-h*l*g+o*f*g,T=v*f*c-u*d*c-v*l*m+a*d*m+u*l*g-a*f*g,A=u*p*c-v*h*c+v*o*m-a*p*m-u*o*g+a*h*g,y=v*h*l-u*p*l-v*o*f+a*p*f+u*o*d-a*h*d,D=t*S+n*T+r*A+s*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=S*z,e[1]=(p*f*s-h*d*s-p*r*m+n*d*m+h*r*g-n*f*g)*z,e[2]=(o*d*s-p*l*s+p*r*c-n*d*c-o*r*g+n*l*g)*z,e[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*m-n*l*m)*z,e[4]=T*z,e[5]=(u*d*s-v*f*s+v*r*m-t*d*m-u*r*g+t*f*g)*z,e[6]=(v*l*s-a*d*s-v*r*c+t*d*c+a*r*g-t*l*g)*z,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*m+t*l*m)*z,e[8]=A*z,e[9]=(v*h*s-u*p*s-v*n*m+t*p*m+u*n*g-t*h*g)*z,e[10]=(a*p*s-v*o*s+v*n*c-t*p*c-a*n*g+t*o*g)*z,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*z,e[12]=y*z,e[13]=(u*p*r-v*h*r+v*n*f-t*p*f-u*n*d+t*h*d)*z,e[14]=(v*o*r-a*p*r-v*n*l+t*p*l+a*n*d-t*o*d)*z,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*f+t*o*f)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,v=s*h,p=a*u,d=a*h,g=o*h,S=l*c,T=l*u,A=l*h,y=n.x,D=n.y,z=n.z;return r[0]=(1-(p+g))*y,r[1]=(m+A)*y,r[2]=(v-T)*y,r[3]=0,r[4]=(m-A)*D,r[5]=(1-(f+g))*D,r[6]=(d+S)*D,r[7]=0,r[8]=(v+T)*z,r[9]=(d-S)*z,r[10]=(1-(f+p))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=vi.set(r[0],r[1],r[2]).length();const a=vi.set(r[4],r[5],r[6]).length(),o=vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bt.copy(this);const c=1/s,u=1/a,h=1/o;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=u,Bt.elements[5]*=u,Bt.elements[6]*=u,Bt.elements[8]*=h,Bt.elements[9]*=h,Bt.elements[10]*=h,t.setFromRotationMatrix(Bt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,l=1/(t-e),c=1/(n-r),u=1/(a-s),h=(t+e)*l,f=(n+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new U,Bt=new st,Mp=new U(0,0,0),yp=new U(1,1,1),wn=new U,Nr=new U,yt=new U,Cl=new st,Ll=new ai;class xr{constructor(e=0,t=0,n=0,r=xr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}xr.DefaultOrder="XYZ";xr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class fa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sp=0;const Pl=new U,bi=new ai,an=new st,Or=new U,Ji=new U,wp=new U,Ep=new ai,Dl=new U(1,0,0),Rl=new U(0,1,0),Il=new U(0,0,1),Ap={type:"added"},Fl={type:"removed"};class Et extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DefaultUp.clone();const e=new U,t=new xr,n=new ai,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new It}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Et.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DefaultMatrixWorldAutoUpdate,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(Dl,e)}rotateY(e){return this.rotateOnAxis(Rl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dl,e)}translateY(e){return this.translateOnAxis(Rl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Or.copy(e):Or.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ji,Or,this.up):an.lookAt(Or,Ji,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(an),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ap)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Fl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Et.DefaultUp=new U(0,1,0);Et.DefaultMatrixAutoUpdate=!0;Et.DefaultMatrixWorldAutoUpdate=!0;const Vt=new U,ln=new U,Ys=new U,cn=new U,Mi=new U,yi=new U,Nl=new U,Zs=new U,Ks=new U,Js=new U;class fn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vt.subVectors(r,t),ln.subVectors(n,t),Ys.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(ln),l=Vt.dot(Ys),c=ln.dot(ln),u=ln.dot(Ys),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,v=(a*u-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,cn),l.set(0,0),l.addScaledVector(s,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),ln.subVectors(e,t),Vt.cross(ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Vt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return fn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Mi.subVectors(r,n),yi.subVectors(s,n),Zs.subVectors(e,n);const l=Mi.dot(Zs),c=yi.dot(Zs);if(l<=0&&c<=0)return t.copy(n);Ks.subVectors(e,r);const u=Mi.dot(Ks),h=yi.dot(Ks);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Mi,a);Js.subVectors(e,s);const m=Mi.dot(Js),v=yi.dot(Js);if(v>=0&&m<=v)return t.copy(s);const p=m*c-l*v;if(p<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(yi,o);const d=u*v-m*h;if(d<=0&&h-u>=0&&m-v>=0)return Nl.subVectors(s,r),o=(h-u)/(h-u+(m-v)),t.copy(r).addScaledVector(Nl,o);const g=1/(d+p+f);return a=p*g,o=f*g,t.copy(n).addScaledVector(Mi,a).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Tp=0;class vr extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=zi,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fu,this.blendDst=du,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wu extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new U,Ur=new Ue;class Qt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=yl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Eu extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Au extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cp=0;const Pt=new st,Qs=new Et,Si=new U,St=new _r,Qi=new _r,nt=new U;class Un extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xu(e)?Au:Eu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return Qs.lookAt(e),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new en(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];St.setFromBufferAttribute(s),this.morphTargetsRelative?(nt.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(nt),nt.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(nt)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(nt.addVectors(St.min,Qi.min),St.expandByPoint(nt),nt.addVectors(St.max,Qi.max),St.expandByPoint(nt)):(St.expandByPoint(Qi.min),St.expandByPoint(Qi.max))}St.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nt.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),nt.add(Si)),r=Math.max(r,n.distanceToSquared(nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new U,u[I]=new U;const h=new U,f=new U,m=new U,v=new Ue,p=new Ue,d=new Ue,g=new U,S=new U;function T(I,te,fe){h.fromArray(r,I*3),f.fromArray(r,te*3),m.fromArray(r,fe*3),v.fromArray(a,I*2),p.fromArray(a,te*2),d.fromArray(a,fe*2),f.sub(h),m.sub(h),p.sub(v),d.sub(v);const H=1/(p.x*d.y-d.x*p.y);!isFinite(H)||(g.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(H),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(H),c[I].add(g),c[te].add(g),c[fe].add(g),u[I].add(S),u[te].add(S),u[fe].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let I=0,te=A.length;I<te;++I){const fe=A[I],H=fe.start,O=fe.count;for(let ee=H,ne=H+O;ee<ne;ee+=3)T(n[ee+0],n[ee+1],n[ee+2])}const y=new U,D=new U,z=new U,b=new U;function C(I){z.fromArray(s,I*3),b.copy(z);const te=c[I];y.copy(te),y.sub(z.multiplyScalar(z.dot(te))).normalize(),D.crossVectors(b,te);const H=D.dot(u[I])<0?-1:1;l[I*4]=y.x,l[I*4+1]=y.y,l[I*4+2]=y.z,l[I*4+3]=H}for(let I=0,te=A.length;I<te;++I){const fe=A[I],H=fe.start,O=fe.count;for(let ee=H,ne=H+O;ee<ne;ee+=3)C(n[ee+0]),C(n[ee+1]),C(n[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nt.fromBufferAttribute(e,t),nt.normalize(),e.setXYZ(t,nt.x,nt.y,nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,v=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let g=0;g<u;g++)f[v++]=c[m++]}return new Qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new st,wi=new Su,eo=new ha,En=new U,An=new U,Tn=new U,to=new U,no=new U,io=new U,zr=new U,Br=new U,Vr=new U,kr=new Ue,Gr=new Ue,Hr=new Ue,ro=new U,Wr=new U;class dn extends Et{constructor(e=new Un,t=new wu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),e.ray.intersectsSphere(eo)===!1)||(Ol.copy(s).invert(),wi.copy(e.ray).applyMatrix4(Ol),n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,v=n.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const g=m[p],S=r[g.materialIndex],T=Math.max(g.start,v.start),A=Math.min(o.count,Math.min(g.start+g.count,v.start+v.count));for(let y=T,D=A;y<D;y+=3){const z=o.getX(y),b=o.getX(y+1),C=o.getX(y+2);a=Xr(this,S,e,wi,l,c,u,h,f,z,b,C),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,v.start),d=Math.min(o.count,v.start+v.count);for(let g=p,S=d;g<S;g+=3){const T=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);a=Xr(this,r,e,wi,l,c,u,h,f,T,A,y),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const g=m[p],S=r[g.materialIndex],T=Math.max(g.start,v.start),A=Math.min(l.count,Math.min(g.start+g.count,v.start+v.count));for(let y=T,D=A;y<D;y+=3){const z=y,b=y+1,C=y+2;a=Xr(this,S,e,wi,l,c,u,h,f,z,b,C),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,v.start),d=Math.min(l.count,v.start+v.count);for(let g=p,S=d;g<S;g+=3){const T=g,A=g+1,y=g+2;a=Xr(this,r,e,wi,l,c,u,h,f,T,A,y),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function Lp(i,e,t,n,r,s,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side!==Pn,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:i}}function Xr(i,e,t,n,r,s,a,o,l,c,u,h){En.fromBufferAttribute(r,c),An.fromBufferAttribute(r,u),Tn.fromBufferAttribute(r,h);const f=i.morphTargetInfluences;if(s&&f){zr.set(0,0,0),Br.set(0,0,0),Vr.set(0,0,0);for(let v=0,p=s.length;v<p;v++){const d=f[v],g=s[v];d!==0&&(to.fromBufferAttribute(g,c),no.fromBufferAttribute(g,u),io.fromBufferAttribute(g,h),a?(zr.addScaledVector(to,d),Br.addScaledVector(no,d),Vr.addScaledVector(io,d)):(zr.addScaledVector(to.sub(En),d),Br.addScaledVector(no.sub(An),d),Vr.addScaledVector(io.sub(Tn),d)))}En.add(zr),An.add(Br),Tn.add(Vr)}i.isSkinnedMesh&&(i.boneTransform(c,En),i.boneTransform(u,An),i.boneTransform(h,Tn));const m=Lp(i,e,t,n,En,An,Tn,ro);if(m){o&&(kr.fromBufferAttribute(o,c),Gr.fromBufferAttribute(o,u),Hr.fromBufferAttribute(o,h),m.uv=fn.getUV(ro,En,An,Tn,kr,Gr,Hr,new Ue)),l&&(kr.fromBufferAttribute(l,c),Gr.fromBufferAttribute(l,u),Hr.fromBufferAttribute(l,h),m.uv2=fn.getUV(ro,En,An,Tn,kr,Gr,Hr,new Ue));const v={a:c,b:u,c:h,normal:new U,materialIndex:0};fn.getNormal(En,An,Tn,v.normal),m.face=v}return m}class br extends Un{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(h,2));function v(p,d,g,S,T,A,y,D,z,b,C){const I=A/z,te=y/b,fe=A/2,H=y/2,O=D/2,ee=z+1,ne=b+1;let Q=0,G=0;const F=new U;for(let W=0;W<ne;W++){const he=W*te-H;for(let le=0;le<ee;le++){const oe=le*I-fe;F[p]=oe*S,F[d]=he*T,F[g]=O,c.push(F.x,F.y,F.z),F[p]=0,F[d]=0,F[g]=D>0?1:-1,u.push(F.x,F.y,F.z),h.push(le/z),h.push(1-W/b),Q+=1}}for(let W=0;W<b;W++)for(let he=0;he<z;he++){const le=f+he+ee*W,oe=f+he+ee*(W+1),Me=f+(he+1)+ee*(W+1),Ae=f+(he+1)+ee*W;l.push(le,oe,Ae),l.push(oe,Me,Ae),G+=6}o.addGroup(m,G,C),m+=G,f+=Q}}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ct(i){const e={};for(let t=0;t<i.length;t++){const n=Xi(i[t]);for(const r in n)e[r]=n[r]}return e}function Pp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const Dp={clone:Xi,merge:ct};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=Pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tu extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends Tu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=90,Ai=1;class Fp extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Rt(Ei,Ai,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new U(1,0,0)),this.add(r);const s=new Rt(Ei,Ai,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new U(-1,0,0)),this.add(s);const a=new Rt(Ei,Ai,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new U(0,1,0)),this.add(a);const o=new Rt(Ei,Ai,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new U(0,-1,0)),this.add(o);const l=new Rt(Ei,Ai,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new U(0,0,1)),this.add(l);const c=new Rt(Ei,Ai,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new U(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=mn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Cu extends Ot{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gi,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lu extends oi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new br(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Fn});s.uniforms.tEquirect.value=t;const a=new dn(r,s),o=t.minFilter;return t.minFilter===vs&&(t.minFilter=Dt),new Fp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const so=new U,Np=new U,Op=new It;class $n{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=so.subVectors(n,t).cross(Np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(so),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Op.getNormalMatrix(e),r=this.coplanarPoint(so).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new ha,$r=new U;class Pu{constructor(e=new $n,t=new $n,n=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],v=n[10],p=n[11],d=n[12],g=n[13],S=n[14],T=n[15];return t[0].setComponents(o-r,h-l,p-f,T-d).normalize(),t[1].setComponents(o+r,h+l,p+f,T+d).normalize(),t[2].setComponents(o+s,h+c,p+m,T+g).normalize(),t[3].setComponents(o-s,h-c,p-m,T-g).normalize(),t[4].setComponents(o-a,h-u,p-v,T-S).normalize(),t[5].setComponents(o+a,h+u,p+v,T+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($r.x=r.normal.x>0?e.max.x:e.min.x,$r.y=r.normal.y>0?e.max.y:e.min.y,$r.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Du(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Up(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(h instanceof Int16Array)v=5122;else if(h instanceof Uint32Array)v=5125;else if(h instanceof Int32Array)v=5124;else if(h instanceof Int8Array)v=5120;else if(h instanceof Uint8Array)v=5121;else if(h instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class da extends Un{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,m=[],v=[],p=[],d=[];for(let g=0;g<u;g++){const S=g*f-a;for(let T=0;T<c;T++){const A=T*h-s;v.push(A,-S,0),p.push(0,0,1),d.push(T/o),d.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const T=S+c*g,A=S+c*(g+1),y=S+1+c*(g+1),D=S+1+c*g;m.push(T,A,D),m.push(A,y,D)}this.setIndex(m),this.setAttribute("position",new en(v,3)),this.setAttribute("normal",new en(p,3)),this.setAttribute("uv",new en(d,2))}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}var zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp="vec3 transformed = vec3( position );",Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,qp=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,jp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,im=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,um="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
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
}`,ym=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Am=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Tm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Jm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_g=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,Sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ag=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Cg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Lg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Pg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Dg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Rg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ig=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Hg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$g=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Kg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Qg=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,i_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,s_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,a_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,f_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:zp,alphamap_pars_fragment:Bp,alphatest_fragment:Vp,alphatest_pars_fragment:kp,aomap_fragment:Gp,aomap_pars_fragment:Hp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:$p,iridescence_fragment:qp,bumpmap_pars_fragment:jp,clipping_planes_fragment:Yp,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:Jp,color_fragment:Qp,color_pars_fragment:em,color_pars_vertex:tm,color_vertex:nm,common:im,cube_uv_reflection_fragment:rm,defaultnormal_vertex:sm,displacementmap_pars_vertex:om,displacementmap_vertex:am,emissivemap_fragment:lm,emissivemap_pars_fragment:cm,encodings_fragment:um,encodings_pars_fragment:hm,envmap_fragment:fm,envmap_common_pars_fragment:dm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Tm,envmap_vertex:gm,fog_vertex:_m,fog_pars_vertex:xm,fog_fragment:vm,fog_pars_fragment:bm,gradientmap_pars_fragment:Mm,lightmap_fragment:ym,lightmap_pars_fragment:Sm,lights_lambert_fragment:wm,lights_lambert_pars_fragment:Em,lights_pars_begin:Am,lights_toon_fragment:Cm,lights_toon_pars_fragment:Lm,lights_phong_fragment:Pm,lights_phong_pars_fragment:Dm,lights_physical_fragment:Rm,lights_physical_pars_fragment:Im,lights_fragment_begin:Fm,lights_fragment_maps:Nm,lights_fragment_end:Om,logdepthbuf_fragment:Um,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:Vm,map_fragment:km,map_pars_fragment:Gm,map_particle_fragment:Hm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:$m,morphcolor_vertex:qm,morphnormal_vertex:jm,morphtarget_pars_vertex:Ym,morphtarget_vertex:Zm,normal_fragment_begin:Km,normal_fragment_maps:Jm,normal_pars_fragment:Qm,normal_pars_vertex:eg,normal_vertex:tg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:sg,iridescence_pars_fragment:og,output_fragment:ag,packing:lg,premultiplied_alpha_fragment:cg,project_vertex:ug,dithering_fragment:hg,dithering_pars_fragment:fg,roughnessmap_fragment:dg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:_g,shadowmask_pars_fragment:xg,skinbase_vertex:vg,skinning_pars_vertex:bg,skinning_vertex:Mg,skinnormal_vertex:yg,specularmap_fragment:Sg,specularmap_pars_fragment:wg,tonemapping_fragment:Eg,tonemapping_pars_fragment:Ag,transmission_fragment:Tg,transmission_pars_fragment:Cg,uv_pars_fragment:Lg,uv_pars_vertex:Pg,uv_vertex:Dg,uv2_pars_fragment:Rg,uv2_pars_vertex:Ig,uv2_vertex:Fg,worldpos_vertex:Ng,background_vert:Og,background_frag:Ug,cube_vert:zg,cube_frag:Bg,depth_vert:Vg,depth_frag:kg,distanceRGBA_vert:Gg,distanceRGBA_frag:Hg,equirect_vert:Wg,equirect_frag:Xg,linedashed_vert:$g,linedashed_frag:qg,meshbasic_vert:jg,meshbasic_frag:Yg,meshlambert_vert:Zg,meshlambert_frag:Kg,meshmatcap_vert:Jg,meshmatcap_frag:Qg,meshnormal_vert:e_,meshnormal_frag:t_,meshphong_vert:n_,meshphong_frag:i_,meshphysical_vert:r_,meshphysical_frag:s_,meshtoon_vert:o_,meshtoon_frag:a_,points_vert:l_,points_frag:c_,shadow_vert:u_,shadow_frag:h_,sprite_vert:f_,sprite_frag:d_},me={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new It},uv2Transform:{value:new It},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}}},Kt={basic:{uniforms:ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:ct([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:ct([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:ct([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:ct([me.points,me.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:ct([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:ct([me.common,me.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:ct([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:ct([me.sprite,me.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},cube:{uniforms:ct([me.envmap,{opacity:{value:1}}]),vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:ct([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:ct([me.lights,me.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Kt.physical={uniforms:ct([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};function p_(i,e,t,n,r,s){const a=new qe(0);let o=r===!0?0:1,l,c,u=null,h=0,f=null;function m(p,d){let g=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=e.get(S));const T=i.xr,A=T.getSession&&T.getSession();A&&A.environmentBlendMode==="additive"&&(S=null),S===null?v(a,o):S&&S.isColor&&(v(S,1),g=!0),(i.autoClear||g)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===xs)?(c===void 0&&(c=new dn(new br(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Xi(Kt.cube.uniforms),vertexShader:Kt.cube.vertexShader,fragmentShader:Kt.cube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(u!==S||h!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new dn(new da(2,2),new li({name:"BackgroundMaterial",uniforms:Xi(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,v(a,o)},render:m}}function m_(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function h(O,ee,ne,Q,G){let F=!1;if(a){const W=p(Q,ne,ee);c!==W&&(c=W,m(c.object)),F=g(O,Q,ne,G),F&&S(O,Q,ne,G)}else{const W=ee.wireframe===!0;(c.geometry!==Q.id||c.program!==ne.id||c.wireframe!==W)&&(c.geometry=Q.id,c.program=ne.id,c.wireframe=W,F=!0)}G!==null&&t.update(G,34963),(F||u)&&(u=!1,b(O,ee,ne,Q),G!==null&&i.bindBuffer(34963,t.get(G).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(O){return n.isWebGL2?i.bindVertexArray(O):s.bindVertexArrayOES(O)}function v(O){return n.isWebGL2?i.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,ee,ne){const Q=ne.wireframe===!0;let G=o[O.id];G===void 0&&(G={},o[O.id]=G);let F=G[ee.id];F===void 0&&(F={},G[ee.id]=F);let W=F[Q];return W===void 0&&(W=d(f()),F[Q]=W),W}function d(O){const ee=[],ne=[],Q=[];for(let G=0;G<r;G++)ee[G]=0,ne[G]=0,Q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:ne,attributeDivisors:Q,object:O,attributes:{},index:null}}function g(O,ee,ne,Q){const G=c.attributes,F=ee.attributes;let W=0;const he=ne.getAttributes();for(const le in he)if(he[le].location>=0){const Me=G[le];let Ae=F[le];if(Ae===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(Ae=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(Ae=O.instanceColor)),Me===void 0||Me.attribute!==Ae||Ae&&Me.data!==Ae.data)return!0;W++}return c.attributesNum!==W||c.index!==Q}function S(O,ee,ne,Q){const G={},F=ee.attributes;let W=0;const he=ne.getAttributes();for(const le in he)if(he[le].location>=0){let Me=F[le];Me===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(Me=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(Me=O.instanceColor));const Ae={};Ae.attribute=Me,Me&&Me.data&&(Ae.data=Me.data),G[le]=Ae,W++}c.attributes=G,c.attributesNum=W,c.index=Q}function T(){const O=c.newAttributes;for(let ee=0,ne=O.length;ee<ne;ee++)O[ee]=0}function A(O){y(O,0)}function y(O,ee){const ne=c.newAttributes,Q=c.enabledAttributes,G=c.attributeDivisors;ne[O]=1,Q[O]===0&&(i.enableVertexAttribArray(O),Q[O]=1),G[O]!==ee&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,ee),G[O]=ee)}function D(){const O=c.newAttributes,ee=c.enabledAttributes;for(let ne=0,Q=ee.length;ne<Q;ne++)ee[ne]!==O[ne]&&(i.disableVertexAttribArray(ne),ee[ne]=0)}function z(O,ee,ne,Q,G,F){n.isWebGL2===!0&&(ne===5124||ne===5125)?i.vertexAttribIPointer(O,ee,ne,G,F):i.vertexAttribPointer(O,ee,ne,Q,G,F)}function b(O,ee,ne,Q){if(n.isWebGL2===!1&&(O.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const G=Q.attributes,F=ne.getAttributes(),W=ee.defaultAttributeValues;for(const he in F){const le=F[he];if(le.location>=0){let oe=G[he];if(oe===void 0&&(he==="instanceMatrix"&&O.instanceMatrix&&(oe=O.instanceMatrix),he==="instanceColor"&&O.instanceColor&&(oe=O.instanceColor)),oe!==void 0){const Me=oe.normalized,Ae=oe.itemSize,J=t.get(oe);if(J===void 0)continue;const Pe=J.buffer,Se=J.type,Ee=J.bytesPerElement;if(oe.isInterleavedBufferAttribute){const xe=oe.data,Be=xe.stride,Te=oe.offset;if(xe.isInstancedInterleavedBuffer){for(let w=0;w<le.locationSize;w++)y(le.location+w,xe.meshPerAttribute);O.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let w=0;w<le.locationSize;w++)A(le.location+w);i.bindBuffer(34962,Pe);for(let w=0;w<le.locationSize;w++)z(le.location+w,Ae/le.locationSize,Se,Me,Be*Ee,(Te+Ae/le.locationSize*w)*Ee)}else{if(oe.isInstancedBufferAttribute){for(let xe=0;xe<le.locationSize;xe++)y(le.location+xe,oe.meshPerAttribute);O.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let xe=0;xe<le.locationSize;xe++)A(le.location+xe);i.bindBuffer(34962,Pe);for(let xe=0;xe<le.locationSize;xe++)z(le.location+xe,Ae/le.locationSize,Se,Me,Ae*Ee,Ae/le.locationSize*xe*Ee)}}else if(W!==void 0){const Me=W[he];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(le.location,Me);break;case 3:i.vertexAttrib3fv(le.location,Me);break;case 4:i.vertexAttrib4fv(le.location,Me);break;default:i.vertexAttrib1fv(le.location,Me)}}}}D()}function C(){fe();for(const O in o){const ee=o[O];for(const ne in ee){const Q=ee[ne];for(const G in Q)v(Q[G].object),delete Q[G];delete ee[ne]}delete o[O]}}function I(O){if(o[O.id]===void 0)return;const ee=o[O.id];for(const ne in ee){const Q=ee[ne];for(const G in Q)v(Q[G].object),delete Q[G];delete ee[ne]}delete o[O.id]}function te(O){for(const ee in o){const ne=o[ee];if(ne[O.id]===void 0)continue;const Q=ne[O.id];for(const G in Q)v(Q[G].object),delete Q[G];delete ne[O.id]}}function fe(){H(),u=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:fe,resetDefaultState:H,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:te,initAttributes:T,enableAttribute:A,disableUnusedAttributes:D}}function g_(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(r)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function __(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(z){if(z==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),m=i.getParameter(3379),v=i.getParameter(34076),p=i.getParameter(34921),d=i.getParameter(36347),g=i.getParameter(36348),S=i.getParameter(36349),T=f>0,A=a||e.has("OES_texture_float"),y=T&&A,D=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:T,floatFragmentTextures:A,floatVertexTextures:y,maxSamples:D}}function x_(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new $n,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const v=h.length!==0||f||n!==0||r;return r=f,t=u(h,m,0),n=h.length,v},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,m){const v=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,g=i.get(h);if(!r||v===null||v.length===0||s&&!d)s?u(null):c();else{const S=s?0:n,T=S*4;let A=g.clippingState||null;l.value=A,A=u(v,f,T,m);for(let y=0;y!==T;++y)A[y]=t[y];g.clippingState=A,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,v){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=l.value,v!==!0||d===null){const g=m+p*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<g)&&(d=new Float32Array(g));for(let T=0,A=m;T!==p;++T,A+=4)a.copy(h[T]).applyMatrix4(S,o),a.normal.toArray(d,A),d[A+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function v_(i){let e=new WeakMap;function t(a,o){return o===Ro?a.mapping=Gi:o===Io&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ro||o===Io)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lu(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class b_ extends Tu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,Ul=[.125,.215,.35,.446,.526,.582],Zn=20,oo=new b_,zl=new qe;let ao=null;const qn=(1+Math.sqrt(5))/2,Ci=1/qn,Bl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,qn,Ci),new U(0,qn,-Ci),new U(Ci,0,qn),new U(-Ci,0,qn),new U(qn,Ci,0),new U(-qn,Ci,0)];class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ao=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao),e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:dr,format:Jt,encoding:si,depthBuffer:!1},r=kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M_(s)),this._blurMaterial=y_(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,n,r){const o=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(zl),u.toneMapping=mn,u.autoClear=!1;const m=new wu({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),v=new dn(new br,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(zl),p=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const T=this._cubeSize;qr(r,S*T,g>2?T:0,T,T),u.setRenderTarget(r),p&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gi||e.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new dn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bl[(r-1)%Bl.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),p=s/v,d=isFinite(s)?1+Math.floor(u*p):Zn;d>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Zn}`);const g=[];let S=0;for(let z=0;z<Zn;++z){const b=z/p,C=Math.exp(-b*b/2);g.push(C),z===0?S+=C:z<d&&(S+=2*C)}for(let z=0;z<g.length;z++)g[z]=g[z]/S;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-n;const A=this._sizeLods[r],y=3*A*(r>T-Ni?r-T+Ni:0),D=4*(this._cubeSize-A);qr(t,y,D,3*A,2*A),l.setRenderTarget(t),l.render(h,oo)}}function M_(i){const e=[],t=[],n=[];let r=i;const s=i-Ni+1+Ul.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Ni?l=Ul[a-i+Ni-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,p=3,d=2,g=1,S=new Float32Array(p*v*m),T=new Float32Array(d*v*m),A=new Float32Array(g*v*m);for(let D=0;D<m;D++){const z=D%3*2/3-1,b=D>2?0:-1,C=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];S.set(C,p*v*D),T.set(f,d*v*D);const I=[D,D,D,D,D,D];A.set(I,g*v*D)}const y=new Un;y.setAttribute("position",new Qt(S,p)),y.setAttribute("uv",new Qt(T,d)),y.setAttribute("faceIndex",new Qt(A,g)),e.push(y),r>Ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kl(i,e,t){const n=new oi(i,e,t);return n.texture.mapping=xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function y_(i,e,t){const n=new Float32Array(Zn),r=new U(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Gl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Hl(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function pa(){return`

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
	`}function S_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ro||l===Io,u=l===Gi||l===Hi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Vl(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Vl(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function w_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function E_(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],34962);const m=h.morphAttributes;for(const v in m){const p=m[v];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function c(h){const f=[],m=h.index,v=h.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let T=0,A=S.length;T<A;T+=3){const y=S[T+0],D=S[T+1],z=S[T+2];f.push(y,D,D,z,z,y)}}else{const S=v.array;p=v.version;for(let T=0,A=S.length/3-1;T<A;T+=3){const y=T+0,D=T+1,z=T+2;f.push(y,D,D,z,z,y)}}const d=new(xu(f)?Au:Eu)(f,1);d.version=p;const g=s.get(h);g&&e.remove(g),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function A_(i,e,t,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){i.drawElements(s,m,o,f*l),t.update(m,s,1)}function h(f,m,v){if(v===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,f*l,v),t.update(m,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function T_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function C_(i,e){return i[0]-e[0]}function L_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function P_(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==d){let ne=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",ne)};var v=ne;g!==void 0&&g.texture.dispose();const A=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,z=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let I=0;A===!0&&(I=1),y===!0&&(I=2),D===!0&&(I=3);let te=u.attributes.position.count*I,fe=1;te>e.maxTextureSize&&(fe=Math.ceil(te/e.maxTextureSize),te=e.maxTextureSize);const H=new Float32Array(te*fe*4*d),O=new yu(H,te,fe,d);O.type=Jn,O.needsUpdate=!0;const ee=I*4;for(let Q=0;Q<d;Q++){const G=z[Q],F=b[Q],W=C[Q],he=te*fe*4*Q;for(let le=0;le<G.count;le++){const oe=le*ee;A===!0&&(a.fromBufferAttribute(G,le),H[he+oe+0]=a.x,H[he+oe+1]=a.y,H[he+oe+2]=a.z,H[he+oe+3]=0),y===!0&&(a.fromBufferAttribute(F,le),H[he+oe+4]=a.x,H[he+oe+5]=a.y,H[he+oe+6]=a.z,H[he+oe+7]=0),D===!0&&(a.fromBufferAttribute(W,le),H[he+oe+8]=a.x,H[he+oe+9]=a.y,H[he+oe+10]=a.z,H[he+oe+11]=W.itemSize===4?a.w:1)}}g={count:d,texture:O,size:new Ue(te,fe)},s.set(u,g),u.addEventListener("dispose",ne)}let S=0;for(let A=0;A<m.length;A++)S+=m[A];const T=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",m),f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let y=0;y<p;y++)d[y]=[y,0];n[u.id]=d}for(let y=0;y<p;y++){const D=d[y];D[0]=y,D[1]=m[y]}d.sort(L_);for(let y=0;y<8;y++)y<p&&d[y][1]?(o[y][0]=d[y][0],o[y][1]=d[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(C_);const g=u.morphAttributes.position,S=u.morphAttributes.normal;let T=0;for(let y=0;y<8;y++){const D=o[y],z=D[0],b=D[1];z!==Number.MAX_SAFE_INTEGER&&b?(g&&u.getAttribute("morphTarget"+y)!==g[z]&&u.setAttribute("morphTarget"+y,g[z]),S&&u.getAttribute("morphNormal"+y)!==S[z]&&u.setAttribute("morphNormal"+y,S[z]),r[y]=b,T+=b):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),S&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const A=u.morphTargetsRelative?1:1-T;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function D_(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ru=new Ot,Iu=new yu,Fu=new vp,Nu=new Cu,Wl=[],Xl=[],$l=new Float32Array(16),ql=new Float32Array(9),jl=new Float32Array(4);function Yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Wl[r];if(s===void 0&&(s=new Float32Array(r),Wl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bs(i,e){let t=Xl[e];t===void 0&&(t=new Int32Array(e),Xl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function R_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function I_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function F_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function N_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function O_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),gt(t,n)}}function U_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;ql.set(n),i.uniformMatrix3fv(this.addr,!1,ql),gt(t,n)}}function z_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;$l.set(n),i.uniformMatrix4fv(this.addr,!1,$l),gt(t,n)}}function B_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function V_(i,e){const t=this.cache;mt(t,e)||(i.uniform2iv(this.addr,e),gt(t,e))}function k_(i,e){const t=this.cache;mt(t,e)||(i.uniform3iv(this.addr,e),gt(t,e))}function G_(i,e){const t=this.cache;mt(t,e)||(i.uniform4iv(this.addr,e),gt(t,e))}function H_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function W_(i,e){const t=this.cache;mt(t,e)||(i.uniform2uiv(this.addr,e),gt(t,e))}function X_(i,e){const t=this.cache;mt(t,e)||(i.uniform3uiv(this.addr,e),gt(t,e))}function $_(i,e){const t=this.cache;mt(t,e)||(i.uniform4uiv(this.addr,e),gt(t,e))}function q_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ru,r)}function j_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Fu,r)}function Y_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Nu,r)}function Z_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Iu,r)}function K_(i){switch(i){case 5126:return R_;case 35664:return I_;case 35665:return F_;case 35666:return N_;case 35674:return O_;case 35675:return U_;case 35676:return z_;case 5124:case 35670:return B_;case 35667:case 35671:return V_;case 35668:case 35672:return k_;case 35669:case 35673:return G_;case 5125:return H_;case 36294:return W_;case 36295:return X_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}function J_(i,e){i.uniform1fv(this.addr,e)}function Q_(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function ex(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function tx(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function nx(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ix(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rx(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sx(i,e){i.uniform1iv(this.addr,e)}function ox(i,e){i.uniform2iv(this.addr,e)}function ax(i,e){i.uniform3iv(this.addr,e)}function lx(i,e){i.uniform4iv(this.addr,e)}function cx(i,e){i.uniform1uiv(this.addr,e)}function ux(i,e){i.uniform2uiv(this.addr,e)}function hx(i,e){i.uniform3uiv(this.addr,e)}function fx(i,e){i.uniform4uiv(this.addr,e)}function dx(i,e,t){const n=e.length,r=bs(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Ru,r[s])}function px(i,e,t){const n=e.length,r=bs(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Fu,r[s])}function mx(i,e,t){const n=e.length,r=bs(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Nu,r[s])}function gx(i,e,t){const n=e.length,r=bs(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Iu,r[s])}function _x(i){switch(i){case 5126:return J_;case 35664:return Q_;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return rx;case 5124:case 35670:return sx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return ux;case 36295:return hx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}class xx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=K_(t.type)}}class vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=_x(t.type)}}class bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function Yl(i,e){i.seq.push(e),i.map[e.id]=e}function Mx(i,e,t){const n=i.name,r=n.length;for(lo.lastIndex=0;;){const s=lo.exec(n),a=lo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yl(t,c===void 0?new xx(o,i,e):new vx(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new bx(o),Yl(t,h)),t=h}}}class es{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Mx(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Zl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let yx=0;function Sx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function wx(i){switch(i){case si:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Kl(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Sx(i.getShaderSource(e),a)}else return r}function Ex(i,e){const t=wx(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ax(i,e){let t;switch(e){case $d:t="Linear";break;case qd:t="Reinhard";break;case jd:t="OptimizedCineon";break;case Yd:t="ACESFilmic";break;case Zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tx(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ir).join(`
`)}function Cx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lx(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ir(i){return i!==""}function Jl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ql(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Px=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(i){return i.replace(Px,Dx)}function Dx(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return zo(t)}const Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(i){return i.replace(Rx,Ix)}function Ix(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function Nx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Hi:e="ENVMAP_TYPE_CUBE";break;case xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ox(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function Ux(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pu:e="ENVMAP_BLENDING_MULTIPLY";break;case Wd:e="ENVMAP_BLENDING_MIX";break;case Xd:e="ENVMAP_BLENDING_ADD";break}return e}function zx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bx(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Fx(t),c=Nx(t),u=Ox(t),h=Ux(t),f=zx(t),m=t.isWebGL2?"":Tx(t),v=Cx(s),p=r.createProgram();let d,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[v].filter(ir).join(`
`),d.length>0&&(d+=`
`),g=[m,v].filter(ir).join(`
`),g.length>0&&(g+=`
`)):(d=[tc(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),g=[m,tc(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==mn?Ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Ex("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=zo(a),a=Jl(a,t),a=Ql(a,t),o=zo(o),o=Jl(o,t),o=Ql(o,t),a=ec(a),o=ec(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=S+d+a,A=S+g+o,y=Zl(r,35633,T),D=Zl(r,35632,A);if(r.attachShader(p,y),r.attachShader(p,D),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),i.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(y).trim(),te=r.getShaderInfoLog(D).trim();let fe=!0,H=!0;if(r.getProgramParameter(p,35714)===!1){fe=!1;const O=Kl(r,y,"vertex"),ee=Kl(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+O+`
`+ee)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||te==="")&&(H=!1);H&&(this.diagnostics={runnable:fe,programLog:C,vertexShader:{log:I,prefix:d},fragmentShader:{log:te,prefix:g}})}r.deleteShader(y),r.deleteShader(D);let z;this.getUniforms=function(){return z===void 0&&(z=new es(r,p)),z};let b;return this.getAttributes=function(){return b===void 0&&(b=Lx(r,p)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=yx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=D,this}let Vx=0;class kx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gx(e),t.set(e,n)),n}}class Gx{constructor(e){this.id=Vx++,this.code=e,this.usedTimes=0}}function Hx(i,e,t,n,r,s,a){const o=new fa,l=new kx,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,C,I,te,fe){const H=te.fog,O=fe.geometry,ee=b.isMeshStandardMaterial?te.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||ee),Q=!!ne&&ne.mapping===xs?ne.image.height:null,G=v[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const F=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,W=F!==void 0?F.length:0;let he=0;O.morphAttributes.position!==void 0&&(he=1),O.morphAttributes.normal!==void 0&&(he=2),O.morphAttributes.color!==void 0&&(he=3);let le,oe,Me,Ae;if(G){const Be=Kt[G];le=Be.vertexShader,oe=Be.fragmentShader}else le=b.vertexShader,oe=b.fragmentShader,l.update(b),Me=l.getVertexShaderID(b),Ae=l.getFragmentShaderID(b);const J=i.getRenderTarget(),Pe=b.alphaTest>0,Se=b.clearcoat>0,Ee=b.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:b.type,vertexShader:le,fragmentShader:oe,defines:b.defines,customVertexShaderID:Me,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:fe.isInstancedMesh===!0,instancingColor:fe.isInstancedMesh===!0&&fe.instanceColor!==null,supportsVertexTextures:f,outputEncoding:J===null?i.outputEncoding:J.isXRRenderTarget===!0?J.texture.encoding:si,map:!!b.map,matcap:!!b.matcap,envMap:!!ne,envMapMode:ne&&ne.mapping,envMapCubeUVHeight:Q,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===mp,tangentSpaceNormalMap:b.normalMapType===_u,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Ze,clearcoat:Se,clearcoatMap:Se&&!!b.clearcoatMap,clearcoatRoughnessMap:Se&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!b.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!b.iridescenceMap,iridescenceThicknessMap:Ee&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===zi,alphaMap:!!b.alphaMap,alphaTest:Pe,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!O.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!H,useFog:b.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:fe.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:he,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:mn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pn,flipSided:b.side===Nt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)C.push(I),C.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(g(C,b),S(C,b),C.push(i.outputEncoding)),C.push(b.customProgramCacheKey),C.join()}function g(b,C){b.push(C.precision),b.push(C.outputEncoding),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.combine),b.push(C.vertexUvs),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function S(b,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),b.push(o.mask)}function T(b){const C=v[b.type];let I;if(C){const te=Kt[C];I=Dp.clone(te.uniforms)}else I=b.uniforms;return I}function A(b,C){let I;for(let te=0,fe=c.length;te<fe;te++){const H=c[te];if(H.cacheKey===C){I=H,++I.usedTimes;break}}return I===void 0&&(I=new Bx(i,C,b,s),c.push(I)),I}function y(b){if(--b.usedTimes===0){const C=c.indexOf(b);c[C]=c[c.length-1],c.pop(),b.destroy()}}function D(b){l.remove(b)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:T,acquireProgram:A,releaseProgram:y,releaseShaderCache:D,programs:c,dispose:z}}function Wx(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ic(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,m,v,p,d){let g=i[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:p,group:d},i[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=v,g.renderOrder=h.renderOrder,g.z=p,g.group=d),e++,g}function o(h,f,m,v,p,d){const g=a(h,f,m,v,p,d);m.transmission>0?n.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(h,f,m,v,p,d){const g=a(h,f,m,v,p,d);m.transmission>0?n.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function c(h,f){t.length>1&&t.sort(h||Xx),n.length>1&&n.sort(f||nc),r.length>1&&r.sort(f||nc)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function $x(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ic,i.set(n,[a])):r>=s.length?(a=new ic,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function qx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new qe};break;case"SpotLight":t={position:new U,direction:new U,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function jx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Yx=0;function Zx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kx(i,e){const t=new qx,n=jx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,a=new st,o=new st;function l(u,h){let f=0,m=0,v=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let p=0,d=0,g=0,S=0,T=0,A=0,y=0,D=0,z=0,b=0;u.sort(Zx);const C=h!==!0?Math.PI:1;for(let te=0,fe=u.length;te<fe;te++){const H=u[te],O=H.color,ee=H.intensity,ne=H.distance,Q=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=O.r*ee*C,m+=O.g*ee*C,v+=O.b*ee*C;else if(H.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(H.sh.coefficients[G],ee);else if(H.isDirectionalLight){const G=t.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity*C),H.castShadow){const F=H.shadow,W=n.get(H);W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,r.directionalShadow[p]=W,r.directionalShadowMap[p]=Q,r.directionalShadowMatrix[p]=H.shadow.matrix,A++}r.directional[p]=G,p++}else if(H.isSpotLight){const G=t.get(H);G.position.setFromMatrixPosition(H.matrixWorld),G.color.copy(O).multiplyScalar(ee*C),G.distance=ne,G.coneCos=Math.cos(H.angle),G.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),G.decay=H.decay,r.spot[g]=G;const F=H.shadow;if(H.map&&(r.spotLightMap[z]=H.map,z++,F.updateMatrices(H),H.castShadow&&b++),r.spotLightMatrix[g]=F.matrix,H.castShadow){const W=n.get(H);W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,r.spotShadow[g]=W,r.spotShadowMap[g]=Q,D++}g++}else if(H.isRectAreaLight){const G=t.get(H);G.color.copy(O).multiplyScalar(ee),G.halfWidth.set(H.width*.5,0,0),G.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=G,S++}else if(H.isPointLight){const G=t.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity*C),G.distance=H.distance,G.decay=H.decay,H.castShadow){const F=H.shadow,W=n.get(H);W.shadowBias=F.bias,W.shadowNormalBias=F.normalBias,W.shadowRadius=F.radius,W.shadowMapSize=F.mapSize,W.shadowCameraNear=F.camera.near,W.shadowCameraFar=F.camera.far,r.pointShadow[d]=W,r.pointShadowMap[d]=Q,r.pointShadowMatrix[d]=H.shadow.matrix,y++}r.point[d]=G,d++}else if(H.isHemisphereLight){const G=t.get(H);G.skyColor.copy(H.color).multiplyScalar(ee*C),G.groundColor.copy(H.groundColor).multiplyScalar(ee*C),r.hemi[T]=G,T++}}S>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=v;const I=r.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==g||I.rectAreaLength!==S||I.hemiLength!==T||I.numDirectionalShadows!==A||I.numPointShadows!==y||I.numSpotShadows!==D||I.numSpotMaps!==z)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=S,r.point.length=d,r.hemi.length=T,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=D+z-b,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=b,I.directionalLength=p,I.pointLength=d,I.spotLength=g,I.rectAreaLength=S,I.hemiLength=T,I.numDirectionalShadows=A,I.numPointShadows=y,I.numSpotShadows=D,I.numSpotMaps=z,r.version=Yx++)}function c(u,h){let f=0,m=0,v=0,p=0,d=0;const g=h.matrixWorldInverse;for(let S=0,T=u.length;S<T;S++){const A=u[S];if(A.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(A.isSpotLight){const y=r.spot[v];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),v++}else if(A.isRectAreaLight){const y=r.rectArea[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),o.identity(),a.copy(A.matrixWorld),a.premultiply(g),o.extractRotation(a),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(A.isPointLight){const y=r.point[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),m++}else if(A.isHemisphereLight){const y=r.hemi[d];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(g),d++}}}return{setup:l,setupView:c,state:r}}function rc(i,e){const t=new Kx(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jx(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new rc(i,e),t.set(s,[l])):a>=o.length?(l=new rc(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Qx extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e0 extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i0(i,e,t){let n=new Pu;const r=new Ue,s=new Ue,a=new rt,o=new Qx({depthPacking:pp}),l=new e0,c={},u=t.maxTextureSize,h={0:Nt,1:ki,2:Pn},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:t0,fragmentShader:n0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Un;v.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new dn(v,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu,this.render=function(A,y,D){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const z=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Fn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let te=0,fe=A.length;te<fe;te++){const H=A[te],O=H.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const ee=O.getFrameExtents();if(r.multiply(ee),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,O.mapSize.y=s.y)),O.map===null){const Q=this.type!==nr?{minFilter:xt,magFilter:xt}:{};O.map=new oi(r.x,r.y,Q),O.map.texture.name=H.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const ne=O.getViewportCount();for(let Q=0;Q<ne;Q++){const G=O.getViewport(Q);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),I.viewport(a),O.updateMatrices(H,Q),n=O.getFrustum(),T(y,D,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===nr&&g(O,D),O.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(z,b,C)};function g(A,y){const D=e.update(p);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new oi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(y,null,D,f,p,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(y,null,D,m,p,null)}function S(A,y,D,z,b,C){let I=null;const te=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(te!==void 0?I=te:I=D.isPointLight===!0?l:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const fe=I.uuid,H=y.uuid;let O=c[fe];O===void 0&&(O={},c[fe]=O);let ee=O[H];ee===void 0&&(ee=I.clone(),O[H]=ee),I=ee}return I.visible=y.visible,I.wireframe=y.wireframe,C===nr?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:h[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaTest,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,D.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(D.matrixWorld),I.nearDistance=z,I.farDistance=b),I}function T(A,y,D,z,b){if(A.visible===!1)return;if(A.layers.test(y.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===nr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const te=e.update(A),fe=A.material;if(Array.isArray(fe)){const H=te.groups;for(let O=0,ee=H.length;O<ee;O++){const ne=H[O],Q=fe[ne.materialIndex];if(Q&&Q.visible){const G=S(A,Q,z,D.near,D.far,b);i.renderBufferDirect(D,null,te,G,A,ne)}}}else if(fe.visible){const H=S(A,fe,z,D.near,D.far,b);i.renderBufferDirect(D,null,te,H,A,null)}}const I=A.children;for(let te=0,fe=I.length;te<fe;te++)T(I[te],y,D,z,b)}}function r0(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const de=new rt;let q=null;const be=new rt(0,0,0,0);return{setMask:function(ve){q!==ve&&!P&&(i.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){P=ve},setClear:function(ve,Ge,tt,Ke,xn){xn===!0&&(ve*=Ke,Ge*=Ke,tt*=Ke),de.set(ve,Ge,tt,Ke),be.equals(de)===!1&&(i.clearColor(ve,Ge,tt,Ke),be.copy(de))},reset:function(){P=!1,q=null,be.set(-1,0,0,0)}}}function s(){let P=!1,de=null,q=null,be=null;return{setTest:function(ve){ve?Pe(2929):Se(2929)},setMask:function(ve){de!==ve&&!P&&(i.depthMask(ve),de=ve)},setFunc:function(ve){if(q!==ve){if(ve)switch(ve){case Ud:i.depthFunc(512);break;case zd:i.depthFunc(519);break;case Bd:i.depthFunc(513);break;case Do:i.depthFunc(515);break;case Vd:i.depthFunc(514);break;case kd:i.depthFunc(518);break;case Gd:i.depthFunc(516);break;case Hd:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);q=ve}},setLocked:function(ve){P=ve},setClear:function(ve){be!==ve&&(i.clearDepth(ve),be=ve)},reset:function(){P=!1,de=null,q=null,be=null}}}function a(){let P=!1,de=null,q=null,be=null,ve=null,Ge=null,tt=null,Ke=null,xn=null;return{setTest:function(je){P||(je?Pe(2960):Se(2960))},setMask:function(je){de!==je&&!P&&(i.stencilMask(je),de=je)},setFunc:function(je,rn,Tt){(q!==je||be!==rn||ve!==Tt)&&(i.stencilFunc(je,rn,Tt),q=je,be=rn,ve=Tt)},setOp:function(je,rn,Tt){(Ge!==je||tt!==rn||Ke!==Tt)&&(i.stencilOp(je,rn,Tt),Ge=je,tt=rn,Ke=Tt)},setLocked:function(je){P=je},setClear:function(je){xn!==je&&(i.clearStencil(je),xn=je)},reset:function(){P=!1,de=null,q=null,be=null,ve=null,Ge=null,tt=null,Ke=null,xn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},v=new WeakMap,p=[],d=null,g=!1,S=null,T=null,A=null,y=null,D=null,z=null,b=null,C=!1,I=null,te=null,fe=null,H=null,O=null;const ee=i.getParameter(35661);let ne=!1,Q=0;const G=i.getParameter(7938);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),ne=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ne=Q>=2);let F=null,W={};const he=i.getParameter(3088),le=i.getParameter(2978),oe=new rt().fromArray(he),Me=new rt().fromArray(le);function Ae(P,de,q){const be=new Uint8Array(4),ve=i.createTexture();i.bindTexture(P,ve),i.texParameteri(P,10241,9728),i.texParameteri(P,10240,9728);for(let Ge=0;Ge<q;Ge++)i.texImage2D(de+Ge,0,6408,1,1,0,6408,5121,be);return ve}const J={};J[3553]=Ae(3553,3553,1),J[34067]=Ae(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(2929),l.setFunc(Do),j(!1),Z(qa),Pe(2884),L(Fn);function Pe(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function Se(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function Ee(P,de){return m[P]!==de?(i.bindFramebuffer(P,de),m[P]=de,n&&(P===36009&&(m[36160]=de),P===36160&&(m[36009]=de)),!0):!1}function xe(P,de){let q=p,be=!1;if(P)if(q=v.get(de),q===void 0&&(q=[],v.set(de,q)),P.isWebGLMultipleRenderTargets){const ve=P.texture;if(q.length!==ve.length||q[0]!==36064){for(let Ge=0,tt=ve.length;Ge<tt;Ge++)q[Ge]=36064+Ge;q.length=ve.length,be=!0}}else q[0]!==36064&&(q[0]=36064,be=!0);else q[0]!==1029&&(q[0]=1029,be=!0);be&&(t.isWebGL2?i.drawBuffers(q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function Be(P){return d!==P?(i.useProgram(P),d=P,!0):!1}const Te={[Ii]:32774,[Ad]:32778,[Td]:32779};if(n)Te[Ka]=32775,Te[Ja]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Te[Ka]=P.MIN_EXT,Te[Ja]=P.MAX_EXT)}const w={[Cd]:0,[Ld]:1,[Pd]:768,[fu]:770,[Od]:776,[Fd]:774,[Rd]:772,[Dd]:769,[du]:771,[Nd]:775,[Id]:773};function L(P,de,q,be,ve,Ge,tt,Ke){if(P===Fn){g===!0&&(Se(3042),g=!1);return}if(g===!1&&(Pe(3042),g=!0),P!==Ed){if(P!==S||Ke!==C){if((T!==Ii||D!==Ii)&&(i.blendEquation(32774),T=Ii,D=Ii),Ke)switch(P){case zi:i.blendFuncSeparate(1,771,1,771);break;case ja:i.blendFunc(1,1);break;case Ya:i.blendFuncSeparate(0,769,0,1);break;case Za:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case zi:i.blendFuncSeparate(770,771,1,771);break;case ja:i.blendFunc(770,1);break;case Ya:i.blendFuncSeparate(0,769,0,1);break;case Za:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,y=null,z=null,b=null,S=P,C=Ke}return}ve=ve||de,Ge=Ge||q,tt=tt||be,(de!==T||ve!==D)&&(i.blendEquationSeparate(Te[de],Te[ve]),T=de,D=ve),(q!==A||be!==y||Ge!==z||tt!==b)&&(i.blendFuncSeparate(w[q],w[be],w[Ge],w[tt]),A=q,y=be,z=Ge,b=tt),S=P,C=null}function k(P,de){P.side===Pn?Se(2884):Pe(2884);let q=P.side===Nt;de&&(q=!q),j(q),P.blending===zi&&P.transparent===!1?L(Fn):L(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const be=P.stencilWrite;c.setTest(be),be&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),se(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pe(32926):Se(32926)}function j(P){I!==P&&(P?i.frontFace(2304):i.frontFace(2305),I=P)}function Z(P){P!==Sd?(Pe(2884),P!==te&&(P===qa?i.cullFace(1029):P===wd?i.cullFace(1028):i.cullFace(1032))):Se(2884),te=P}function re(P){P!==fe&&(ne&&i.lineWidth(P),fe=P)}function se(P,de,q){P?(Pe(32823),(H!==de||O!==q)&&(i.polygonOffset(de,q),H=de,O=q)):Se(32823)}function ae(P){P?Pe(3089):Se(3089)}function ue(P){P===void 0&&(P=33984+ee-1),F!==P&&(i.activeTexture(P),F=P)}function x(P,de){F===null&&ue();let q=W[F];q===void 0&&(q={type:void 0,texture:void 0},W[F]=q),(q.type!==P||q.texture!==de)&&(i.bindTexture(P,de||J[P]),q.type=P,q.texture=de)}function _(){const P=W[F];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function R(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function M(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(P){oe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),oe.copy(P))}function ge(P){Me.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Me.copy(P))}function ye(P,de){let q=h.get(de);q===void 0&&(q=new WeakMap,h.set(de,q));let be=q.get(P);be===void 0&&(be=i.getUniformBlockIndex(de,P.name),q.set(P,be))}function Ie(P,de){const be=h.get(de).get(P);u.get(P)!==be&&(i.uniformBlockBinding(de,be,P.__bindingPointIndex),u.set(P,be))}function Fe(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},F=null,W={},m={},v=new WeakMap,p=[],d=null,g=!1,S=null,T=null,A=null,y=null,D=null,z=null,b=null,C=!1,I=null,te=null,fe=null,H=null,O=null,oe.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:Se,bindFramebuffer:Ee,drawBuffers:xe,useProgram:Be,setBlending:L,setMaterial:k,setFlipSided:j,setCullFace:Z,setLineWidth:re,setPolygonOffset:se,setScissorTest:ae,activeTexture:ue,bindTexture:x,unbindTexture:_,compressedTexImage2D:R,texImage2D:X,texImage3D:ce,updateUBOMapping:ye,uniformBlockBinding:Ie,texStorage2D:_e,texStorage3D:M,texSubImage2D:V,texSubImage3D:$,compressedTexSubImage2D:ie,scissor:pe,viewport:ge,reset:Fe}}function s0(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(x,_){return g?new OffscreenCanvas(x,_):pr("canvas")}function T(x,_,R,V){let $=1;if((x.width>V||x.height>V)&&($=V/Math.max(x.width,x.height)),$<1||_===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const ie=_?Uo:Math.floor,_e=ie($*x.width),M=ie($*x.height);p===void 0&&(p=S(_e,M));const X=R?S(_e,M):p;return X.width=_e,X.height=M,X.getContext("2d").drawImage(x,0,0,_e,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+_e+"x"+M+")."),X}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function A(x){return El(x.width)&&El(x.height)}function y(x){return o?!1:x.wrapS!==Gt||x.wrapT!==Gt||x.minFilter!==xt&&x.minFilter!==Dt}function D(x,_){return x.generateMipmaps&&_&&x.minFilter!==xt&&x.minFilter!==Dt}function z(x){i.generateMipmap(x)}function b(x,_,R,V,$=!1){if(o===!1)return _;if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let ie=_;return _===6403&&(R===5126&&(ie=33326),R===5131&&(ie=33325),R===5121&&(ie=33321)),_===33319&&(R===5126&&(ie=33328),R===5131&&(ie=33327),R===5121&&(ie=33323)),_===6408&&(R===5126&&(ie=34836),R===5131&&(ie=34842),R===5121&&(ie=V===Ze&&$===!1?35907:32856),R===32819&&(ie=32854),R===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function C(x,_,R){return D(x,R)===!0||x.isFramebufferTexture&&x.minFilter!==xt&&x.minFilter!==Dt?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function I(x){return x===xt||x===Qa||x===el?9728:9729}function te(x){const _=x.target;_.removeEventListener("dispose",te),H(_),_.isVideoTexture&&v.delete(_)}function fe(x){const _=x.target;_.removeEventListener("dispose",fe),ee(_)}function H(x){const _=n.get(x);if(_.__webglInit===void 0)return;const R=x.source,V=d.get(R);if(V){const $=V[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&O(x),Object.keys(V).length===0&&d.delete(R)}n.remove(x)}function O(x){const _=n.get(x);i.deleteTexture(_.__webglTexture);const R=x.source,V=d.get(R);delete V[_.__cacheKey],a.memory.textures--}function ee(x){const _=x.texture,R=n.get(x),V=n.get(_);if(V.__webglTexture!==void 0&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let $=0;$<6;$++)i.deleteFramebuffer(R.__webglFramebuffer[$]),R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[$]);else{if(i.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let $=0;$<R.__webglColorRenderbuffer.length;$++)R.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[$]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let $=0,ie=_.length;$<ie;$++){const _e=n.get(_[$]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(_[$])}n.remove(_),n.remove(x)}let ne=0;function Q(){ne=0}function G(){const x=ne;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),ne+=1,x}function F(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.encoding),_.join()}function W(x,_){const R=n.get(x);if(x.isVideoTexture&&ae(x),x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version){const V=x.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(R,x,_);return}}t.activeTexture(33984+_),t.bindTexture(3553,R.__webglTexture)}function he(x,_){const R=n.get(x);if(x.version>0&&R.__version!==x.version){Se(R,x,_);return}t.activeTexture(33984+_),t.bindTexture(35866,R.__webglTexture)}function le(x,_){const R=n.get(x);if(x.version>0&&R.__version!==x.version){Se(R,x,_);return}t.activeTexture(33984+_),t.bindTexture(32879,R.__webglTexture)}function oe(x,_){const R=n.get(x);if(x.version>0&&R.__version!==x.version){Ee(R,x,_);return}t.activeTexture(33984+_),t.bindTexture(34067,R.__webglTexture)}const Me={[Fo]:10497,[Gt]:33071,[No]:33648},Ae={[xt]:9728,[Qa]:9984,[el]:9986,[Dt]:9729,[Kd]:9985,[vs]:9987};function J(x,_,R){if(R?(i.texParameteri(x,10242,Me[_.wrapS]),i.texParameteri(x,10243,Me[_.wrapT]),(x===32879||x===35866)&&i.texParameteri(x,32882,Me[_.wrapR]),i.texParameteri(x,10240,Ae[_.magFilter]),i.texParameteri(x,10241,Ae[_.minFilter])):(i.texParameteri(x,10242,33071),i.texParameteri(x,10243,33071),(x===32879||x===35866)&&i.texParameteri(x,32882,33071),(_.wrapS!==Gt||_.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(x,10240,I(_.magFilter)),i.texParameteri(x,10241,I(_.minFilter)),_.minFilter!==xt&&_.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");if(_.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===dr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(x,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Pe(x,_){let R=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",te));const V=_.source;let $=d.get(V);$===void 0&&($={},d.set(V,$));const ie=F(_);if(ie!==x.__cacheKey){$[ie]===void 0&&($[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,R=!0),$[ie].usedTimes++;const _e=$[x.__cacheKey];_e!==void 0&&($[x.__cacheKey].usedTimes--,_e.usedTimes===0&&O(_)),x.__cacheKey=ie,x.__webglTexture=$[ie].texture}return R}function Se(x,_,R){let V=3553;_.isDataArrayTexture&&(V=35866),_.isData3DTexture&&(V=32879);const $=Pe(x,_),ie=_.source;if(t.activeTexture(33984+R),t.bindTexture(V,x.__webglTexture),ie.version!==ie.__currentVersion||$===!0){i.pixelStorei(37440,_.flipY),i.pixelStorei(37441,_.premultiplyAlpha),i.pixelStorei(3317,_.unpackAlignment),i.pixelStorei(37443,0);const _e=y(_)&&A(_.image)===!1;let M=T(_.image,_e,!1,u);M=ue(_,M);const X=A(M)||o,ce=s.convert(_.format,_.encoding);let pe=s.convert(_.type),ge=b(_.internalFormat,ce,pe,_.encoding,_.isVideoTexture);J(V,_,X);let ye;const Ie=_.mipmaps,Fe=o&&_.isVideoTexture!==!0,P=ie.__currentVersion===void 0||$===!0,de=C(_,M,X);if(_.isDepthTexture)ge=6402,o?_.type===Jn?ge=36012:_.type===Kn?ge=33190:_.type===Bi?ge=35056:ge=33189:_.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ni&&ge===6402&&_.type!==gu&&_.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Kn,pe=s.convert(_.type)),_.format===Wi&&ge===6402&&(ge=34041,_.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Bi,pe=s.convert(_.type))),P&&(Fe?t.texStorage2D(3553,1,ge,M.width,M.height):t.texImage2D(3553,0,ge,M.width,M.height,0,ce,pe,null));else if(_.isDataTexture)if(Ie.length>0&&X){Fe&&P&&t.texStorage2D(3553,de,ge,Ie[0].width,Ie[0].height);for(let q=0,be=Ie.length;q<be;q++)ye=Ie[q],Fe?t.texSubImage2D(3553,q,0,0,ye.width,ye.height,ce,pe,ye.data):t.texImage2D(3553,q,ge,ye.width,ye.height,0,ce,pe,ye.data);_.generateMipmaps=!1}else Fe?(P&&t.texStorage2D(3553,de,ge,M.width,M.height),t.texSubImage2D(3553,0,0,0,M.width,M.height,ce,pe,M.data)):t.texImage2D(3553,0,ge,M.width,M.height,0,ce,pe,M.data);else if(_.isCompressedTexture){Fe&&P&&t.texStorage2D(3553,de,ge,Ie[0].width,Ie[0].height);for(let q=0,be=Ie.length;q<be;q++)ye=Ie[q],_.format!==Jt?ce!==null?Fe?t.compressedTexSubImage2D(3553,q,0,0,ye.width,ye.height,ce,ye.data):t.compressedTexImage2D(3553,q,ge,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,q,0,0,ye.width,ye.height,ce,pe,ye.data):t.texImage2D(3553,q,ge,ye.width,ye.height,0,ce,pe,ye.data)}else if(_.isDataArrayTexture)Fe?(P&&t.texStorage3D(35866,de,ge,M.width,M.height,M.depth),t.texSubImage3D(35866,0,0,0,0,M.width,M.height,M.depth,ce,pe,M.data)):t.texImage3D(35866,0,ge,M.width,M.height,M.depth,0,ce,pe,M.data);else if(_.isData3DTexture)Fe?(P&&t.texStorage3D(32879,de,ge,M.width,M.height,M.depth),t.texSubImage3D(32879,0,0,0,0,M.width,M.height,M.depth,ce,pe,M.data)):t.texImage3D(32879,0,ge,M.width,M.height,M.depth,0,ce,pe,M.data);else if(_.isFramebufferTexture){if(P)if(Fe)t.texStorage2D(3553,de,ge,M.width,M.height);else{let q=M.width,be=M.height;for(let ve=0;ve<de;ve++)t.texImage2D(3553,ve,ge,q,be,0,ce,pe,null),q>>=1,be>>=1}}else if(Ie.length>0&&X){Fe&&P&&t.texStorage2D(3553,de,ge,Ie[0].width,Ie[0].height);for(let q=0,be=Ie.length;q<be;q++)ye=Ie[q],Fe?t.texSubImage2D(3553,q,0,0,ce,pe,ye):t.texImage2D(3553,q,ge,ce,pe,ye);_.generateMipmaps=!1}else Fe?(P&&t.texStorage2D(3553,de,ge,M.width,M.height),t.texSubImage2D(3553,0,0,0,ce,pe,M)):t.texImage2D(3553,0,ge,ce,pe,M);D(_,X)&&z(V),ie.__currentVersion=ie.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Ee(x,_,R){if(_.image.length!==6)return;const V=Pe(x,_),$=_.source;if(t.activeTexture(33984+R),t.bindTexture(34067,x.__webglTexture),$.version!==$.__currentVersion||V===!0){i.pixelStorei(37440,_.flipY),i.pixelStorei(37441,_.premultiplyAlpha),i.pixelStorei(3317,_.unpackAlignment),i.pixelStorei(37443,0);const ie=_.isCompressedTexture||_.image[0].isCompressedTexture,_e=_.image[0]&&_.image[0].isDataTexture,M=[];for(let q=0;q<6;q++)!ie&&!_e?M[q]=T(_.image[q],!1,!0,c):M[q]=_e?_.image[q].image:_.image[q],M[q]=ue(_,M[q]);const X=M[0],ce=A(X)||o,pe=s.convert(_.format,_.encoding),ge=s.convert(_.type),ye=b(_.internalFormat,pe,ge,_.encoding),Ie=o&&_.isVideoTexture!==!0,Fe=$.__currentVersion===void 0||V===!0;let P=C(_,X,ce);J(34067,_,ce);let de;if(ie){Ie&&Fe&&t.texStorage2D(34067,P,ye,X.width,X.height);for(let q=0;q<6;q++){de=M[q].mipmaps;for(let be=0;be<de.length;be++){const ve=de[be];_.format!==Jt?pe!==null?Ie?t.compressedTexSubImage2D(34069+q,be,0,0,ve.width,ve.height,pe,ve.data):t.compressedTexImage2D(34069+q,be,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+q,be,0,0,ve.width,ve.height,pe,ge,ve.data):t.texImage2D(34069+q,be,ye,ve.width,ve.height,0,pe,ge,ve.data)}}}else{de=_.mipmaps,Ie&&Fe&&(de.length>0&&P++,t.texStorage2D(34067,P,ye,M[0].width,M[0].height));for(let q=0;q<6;q++)if(_e){Ie?t.texSubImage2D(34069+q,0,0,0,M[q].width,M[q].height,pe,ge,M[q].data):t.texImage2D(34069+q,0,ye,M[q].width,M[q].height,0,pe,ge,M[q].data);for(let be=0;be<de.length;be++){const Ge=de[be].image[q].image;Ie?t.texSubImage2D(34069+q,be+1,0,0,Ge.width,Ge.height,pe,ge,Ge.data):t.texImage2D(34069+q,be+1,ye,Ge.width,Ge.height,0,pe,ge,Ge.data)}}else{Ie?t.texSubImage2D(34069+q,0,0,0,pe,ge,M[q]):t.texImage2D(34069+q,0,ye,pe,ge,M[q]);for(let be=0;be<de.length;be++){const ve=de[be];Ie?t.texSubImage2D(34069+q,be+1,0,0,pe,ge,ve.image[q]):t.texImage2D(34069+q,be+1,ye,pe,ge,ve.image[q])}}}D(_,ce)&&z(34067),$.__currentVersion=$.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function xe(x,_,R,V,$){const ie=s.convert(R.format,R.encoding),_e=s.convert(R.type),M=b(R.internalFormat,ie,_e,R.encoding);n.get(_).__hasExternalTextures||($===32879||$===35866?t.texImage3D($,0,M,_.width,_.height,_.depth,0,ie,_e,null):t.texImage2D($,0,M,_.width,_.height,0,ie,_e,null)),t.bindFramebuffer(36160,x),se(_)?f.framebufferTexture2DMultisampleEXT(36160,V,$,n.get(R).__webglTexture,0,re(_)):i.framebufferTexture2D(36160,V,$,n.get(R).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(x,_,R){if(i.bindRenderbuffer(36161,x),_.depthBuffer&&!_.stencilBuffer){let V=33189;if(R||se(_)){const $=_.depthTexture;$&&$.isDepthTexture&&($.type===Jn?V=36012:$.type===Kn&&(V=33190));const ie=re(_);se(_)?f.renderbufferStorageMultisampleEXT(36161,ie,V,_.width,_.height):i.renderbufferStorageMultisample(36161,ie,V,_.width,_.height)}else i.renderbufferStorage(36161,V,_.width,_.height);i.framebufferRenderbuffer(36160,36096,36161,x)}else if(_.depthBuffer&&_.stencilBuffer){const V=re(_);R&&se(_)===!1?i.renderbufferStorageMultisample(36161,V,35056,_.width,_.height):se(_)?f.renderbufferStorageMultisampleEXT(36161,V,35056,_.width,_.height):i.renderbufferStorage(36161,34041,_.width,_.height),i.framebufferRenderbuffer(36160,33306,36161,x)}else{const V=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let $=0;$<V.length;$++){const ie=V[$],_e=s.convert(ie.format,ie.encoding),M=s.convert(ie.type),X=b(ie.internalFormat,_e,M,ie.encoding),ce=re(_);R&&se(_)===!1?i.renderbufferStorageMultisample(36161,ce,X,_.width,_.height):se(_)?f.renderbufferStorageMultisampleEXT(36161,ce,X,_.width,_.height):i.renderbufferStorage(36161,X,_.width,_.height)}}i.bindRenderbuffer(36161,null)}function Te(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const V=n.get(_.depthTexture).__webglTexture,$=re(_);if(_.depthTexture.format===ni)se(_)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,V,0,$):i.framebufferTexture2D(36160,36096,3553,V,0);else if(_.depthTexture.format===Wi)se(_)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,V,0,$):i.framebufferTexture2D(36160,33306,3553,V,0);else throw new Error("Unknown depthTexture format")}function w(x){const _=n.get(x),R=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Te(_.__webglFramebuffer,x)}else if(R){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(36160,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]=i.createRenderbuffer(),Be(_.__webglDepthbuffer[V],x,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Be(_.__webglDepthbuffer,x,!1);t.bindFramebuffer(36160,null)}function L(x,_,R){const V=n.get(x);_!==void 0&&xe(V.__webglFramebuffer,x,x.texture,36064,3553),R!==void 0&&w(x)}function k(x){const _=x.texture,R=n.get(x),V=n.get(_);x.addEventListener("dispose",fe),x.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,a.memory.textures++);const $=x.isWebGLCubeRenderTarget===!0,ie=x.isWebGLMultipleRenderTargets===!0,_e=A(x)||o;if($){R.__webglFramebuffer=[];for(let M=0;M<6;M++)R.__webglFramebuffer[M]=i.createFramebuffer()}else{if(R.__webglFramebuffer=i.createFramebuffer(),ie)if(r.drawBuffers){const M=x.texture;for(let X=0,ce=M.length;X<ce;X++){const pe=n.get(M[X]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&se(x)===!1){const M=ie?_:[_];R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer);for(let X=0;X<M.length;X++){const ce=M[X];R.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(36161,R.__webglColorRenderbuffer[X]);const pe=s.convert(ce.format,ce.encoding),ge=s.convert(ce.type),ye=b(ce.internalFormat,pe,ge,ce.encoding),Ie=re(x);i.renderbufferStorageMultisample(36161,Ie,ye,x.width,x.height),i.framebufferRenderbuffer(36160,36064+X,36161,R.__webglColorRenderbuffer[X])}i.bindRenderbuffer(36161,null),x.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(R.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(36160,null)}}if($){t.bindTexture(34067,V.__webglTexture),J(34067,_,_e);for(let M=0;M<6;M++)xe(R.__webglFramebuffer[M],x,_,36064,34069+M);D(_,_e)&&z(34067),t.unbindTexture()}else if(ie){const M=x.texture;for(let X=0,ce=M.length;X<ce;X++){const pe=M[X],ge=n.get(pe);t.bindTexture(3553,ge.__webglTexture),J(3553,pe,_e),xe(R.__webglFramebuffer,x,pe,36064+X,3553),D(pe,_e)&&z(3553)}t.unbindTexture()}else{let M=3553;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?M=x.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(M,V.__webglTexture),J(M,_,_e),xe(R.__webglFramebuffer,x,_,36064,M),D(_,_e)&&z(M),t.unbindTexture()}x.depthBuffer&&w(x)}function j(x){const _=A(x)||o,R=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let V=0,$=R.length;V<$;V++){const ie=R[V];if(D(ie,_)){const _e=x.isWebGLCubeRenderTarget?34067:3553,M=n.get(ie).__webglTexture;t.bindTexture(_e,M),z(_e),t.unbindTexture()}}}function Z(x){if(o&&x.samples>0&&se(x)===!1){const _=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],R=x.width,V=x.height;let $=16384;const ie=[],_e=x.stencilBuffer?33306:36096,M=n.get(x),X=x.isWebGLMultipleRenderTargets===!0;if(X)for(let ce=0;ce<_.length;ce++)t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,M.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,M.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,M.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){ie.push(36064+ce),x.depthBuffer&&ie.push(_e);const pe=M.__ignoreDepthValues!==void 0?M.__ignoreDepthValues:!1;if(pe===!1&&(x.depthBuffer&&($|=256),x.stencilBuffer&&($|=1024)),X&&i.framebufferRenderbuffer(36008,36064,36161,M.__webglColorRenderbuffer[ce]),pe===!0&&(i.invalidateFramebuffer(36008,[_e]),i.invalidateFramebuffer(36009,[_e])),X){const ge=n.get(_[ce]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,ge,0)}i.blitFramebuffer(0,0,R,V,0,0,R,V,$,9728),m&&i.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let ce=0;ce<_.length;ce++){t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,M.__webglColorRenderbuffer[ce]);const pe=n.get(_[ce]).__webglTexture;t.bindFramebuffer(36160,M.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,pe,0)}t.bindFramebuffer(36009,M.__webglMultisampledFramebuffer)}}function re(x){return Math.min(h,x.samples)}function se(x){const _=n.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ae(x){const _=a.render.frame;v.get(x)!==_&&(v.set(x,_),x.update())}function ue(x,_){const R=x.encoding,V=x.format,$=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Oo||R!==si&&(R===Ze?o===!1?e.has("EXT_sRGB")===!0&&V===Jt?(x.format=Oo,x.minFilter=Dt,x.generateMipmaps=!1):_=bu.sRGBToLinear(_):(V!==Jt||$!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",R)),_}this.allocateTextureUnit=G,this.resetTextureUnits=Q,this.setTexture2D=W,this.setTexture2DArray=he,this.setTexture3D=le,this.setTextureCube=oe,this.rebindTextures=L,this.setupRenderTarget=k,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=se}function o0(i,e,t){const n=t.isWebGL2;function r(s,a=null){let o;if(s===ri)return 5121;if(s===tp)return 32819;if(s===np)return 32820;if(s===Jd)return 5120;if(s===Qd)return 5122;if(s===gu)return 5123;if(s===ep)return 5124;if(s===Kn)return 5125;if(s===Jn)return 5126;if(s===dr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ip)return 6406;if(s===Jt)return 6408;if(s===sp)return 6409;if(s===op)return 6410;if(s===ni)return 6402;if(s===Wi)return 34041;if(s===ap)return 6403;if(s===rp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Oo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===lp)return 36244;if(s===cp)return 33319;if(s===up)return 33320;if(s===hp)return 36249;if(s===Rs||s===Is||s===Fs||s===Ns)if(a===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Rs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Rs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Is)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ns)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tl||s===nl||s===il||s===rl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===tl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===il)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sl||s===ol)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===sl)return a===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ol)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===al||s===ll||s===cl||s===ul||s===hl||s===fl||s===dl||s===pl||s===ml||s===gl||s===_l||s===xl||s===vl||s===bl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===al)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ll)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ul)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ml)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_l)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ml)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ml)return a===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Bi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class a0 extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jr extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l0={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const S=new jr;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[p.jointName]=S,c.add(S)}const g=c.joints[p.jointName];d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class c0 extends Ot{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:ni,u!==ni&&u!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ni&&(n=Kn),n===void 0&&u===Wi&&(n=Bi),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1}}class u0 extends ci{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const v=t.getContextAttributes();let p=null,d=null;const g=[],S=[],T=new Rt;T.layers.enable(1),T.viewport=new rt;const A=new Rt;A.layers.enable(2),A.viewport=new rt;const y=[T,A],D=new a0;D.layers.enable(1),D.layers.enable(2);let z=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let W=g[F];return W===void 0&&(W=new co,g[F]=W),W.getTargetRaySpace()},this.getControllerGrip=function(F){let W=g[F];return W===void 0&&(W=new co,g[F]=W),W.getGripSpace()},this.getHand=function(F){let W=g[F];return W===void 0&&(W=new co,g[F]=W),W.getHandSpace()};function C(F){const W=S.indexOf(F.inputSource);if(W===-1)return;const he=g[W];he!==void 0&&he.dispatchEvent({type:F.type,data:F.inputSource})}function I(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",te);for(let F=0;F<g.length;F++){const W=S[F];W!==null&&(S[F]=null,g[F].disconnect(W))}z=null,b=null,e.setRenderTarget(p),f=null,h=null,u=null,r=null,d=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",I),r.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:f}),d=new oi(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:ri,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let W=null,he=null,le=null;v.depth&&(le=v.stencil?35056:33190,W=v.stencil?Wi:ni,he=v.stencil?Bi:Kn);const oe={colorFormat:32856,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(oe),r.updateRenderState({layers:[h]}),d=new oi(h.textureWidth,h.textureHeight,{format:Jt,type:ri,depthTexture:new c0(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const Me=e.properties.get(d);Me.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),G.setContext(r),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function te(F){for(let W=0;W<F.removed.length;W++){const he=F.removed[W],le=S.indexOf(he);le>=0&&(S[le]=null,g[le].dispatchEvent({type:"disconnected",data:he}))}for(let W=0;W<F.added.length;W++){const he=F.added[W];let le=S.indexOf(he);if(le===-1){for(let Me=0;Me<g.length;Me++)if(Me>=S.length){S.push(he),le=Me;break}else if(S[Me]===null){S[Me]=he,le=Me;break}if(le===-1)break}const oe=g[le];oe&&oe.dispatchEvent({type:"connected",data:he})}}const fe=new U,H=new U;function O(F,W,he){fe.setFromMatrixPosition(W.matrixWorld),H.setFromMatrixPosition(he.matrixWorld);const le=fe.distanceTo(H),oe=W.projectionMatrix.elements,Me=he.projectionMatrix.elements,Ae=oe[14]/(oe[10]-1),J=oe[14]/(oe[10]+1),Pe=(oe[9]+1)/oe[5],Se=(oe[9]-1)/oe[5],Ee=(oe[8]-1)/oe[0],xe=(Me[8]+1)/Me[0],Be=Ae*Ee,Te=Ae*xe,w=le/(-Ee+xe),L=w*-Ee;W.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(L),F.translateZ(w),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const k=Ae+w,j=J+w,Z=Be-L,re=Te+(le-L),se=Pe*J/j*k,ae=Se*J/j*k;F.projectionMatrix.makePerspective(Z,re,se,ae,k,j)}function ee(F,W){W===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(W.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;D.near=A.near=T.near=F.near,D.far=A.far=T.far=F.far,(z!==D.near||b!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),z=D.near,b=D.far);const W=F.parent,he=D.cameras;ee(D,W);for(let oe=0;oe<he.length;oe++)ee(he[oe],W);D.matrixWorld.decompose(D.position,D.quaternion,D.scale),F.matrix.copy(D.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const le=F.children;for(let oe=0,Me=le.length;oe<Me;oe++)le[oe].updateMatrixWorld(!0);he.length===2?O(D,T,A):D.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return D},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(F){h!==null&&(h.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)};let ne=null;function Q(F,W){if(c=W.getViewerPose(l||a),m=W,c!==null){const he=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let le=!1;he.length!==D.cameras.length&&(D.cameras.length=0,le=!0);for(let oe=0;oe<he.length;oe++){const Me=he[oe];let Ae=null;if(f!==null)Ae=f.getViewport(Me);else{const Pe=u.getViewSubImage(h,Me);Ae=Pe.viewport,oe===0&&(e.setRenderTargetTextures(d,Pe.colorTexture,h.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(d))}let J=y[oe];J===void 0&&(J=new Rt,J.layers.enable(oe),J.viewport=new rt,y[oe]=J),J.matrix.fromArray(Me.transform.matrix),J.projectionMatrix.fromArray(Me.projectionMatrix),J.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),oe===0&&D.matrix.copy(J.matrix),le===!0&&D.cameras.push(J)}}for(let he=0;he<g.length;he++){const le=S[he],oe=g[he];le!==null&&oe!==void 0&&oe.update(le,W,l||a)}ne&&ne(F,W),m=null}const G=new Du;G.setAnimationLoop(Q),this.setAnimationLoop=function(F){ne=F},this.dispose=function(){}}}function h0(i,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,g,S,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,T)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,g,S):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Nt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Nt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const A=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*A}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let T;d.aoMap?T=d.aoMap:d.lightMap&&(T=d.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uv2Transform.value.copy(T.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,g,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let T;d.map?T=d.map:d.alphaMap&&(T=d.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Nt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function f0(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(S,T){const A=T.program;n.uniformBlockBinding(S,A)}function c(S,T){let A=r[S.id];A===void 0&&(v(S),A=u(S),r[S.id]=A,S.addEventListener("dispose",d));const y=T.program;n.updateUBOMapping(S,y);const D=e.render.frame;s[S.id]!==D&&(f(S),s[S.id]=D)}function u(S){const T=h();S.__bindingPointIndex=T;const A=i.createBuffer(),y=S.__size,D=S.usage;return i.bindBuffer(35345,A),i.bufferData(35345,y,D),i.bindBuffer(35345,null),i.bindBufferBase(35345,T,A),A}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const T=r[S.id],A=S.uniforms,y=S.__cache;i.bindBuffer(35345,T);for(let D=0,z=A.length;D<z;D++){const b=A[D];if(m(b,D,y)===!0){const C=b.value,I=b.__offset;typeof C=="number"?(b.__data[0]=C,i.bufferSubData(35345,I,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):C.toArray(b.__data),i.bufferSubData(35345,I,b.__data))}}i.bindBuffer(35345,null)}function m(S,T,A){const y=S.value;if(A[T]===void 0)return typeof y=="number"?A[T]=y:A[T]=y.clone(),!0;if(typeof y=="number"){if(A[T]!==y)return A[T]=y,!0}else{const D=A[T];if(D.equals(y)===!1)return D.copy(y),!0}return!1}function v(S){const T=S.uniforms;let A=0;const y=16;let D=0;for(let z=0,b=T.length;z<b;z++){const C=T[z],I=p(C);if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=A,z>0){D=A%y;const te=y-D;D!==0&&te-I.boundary<0&&(A+=y-D,C.__offset=A)}A+=I.storage}return D=A%y,D>0&&(A+=y-D),S.__size=A,S.__cache={},this}function p(S){const T=S.value,A={boundary:0,storage:0};return typeof T=="number"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function d(S){const T=S.target;T.removeEventListener("dispose",d);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function g(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}function d0(){const i=pr("canvas");return i.style.display="block",i}function Ou(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:d0(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=si,this.physicallyCorrectLights=!1,this.toneMapping=mn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,g=0,S=0,T=null,A=-1,y=null;const D=new rt,z=new rt;let b=null,C=e.width,I=e.height,te=1,fe=null,H=null;const O=new rt(0,0,C,I),ee=new rt(0,0,C,I);let ne=!1;const Q=new Pu;let G=!1,F=!1,W=null;const he=new st,le=new Ue,oe=new U,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return T===null?te:1}let J=t;function Pe(E,B){for(let Y=0;Y<E.length;Y++){const N=E[Y],K=e.getContext(N,B);if(K!==null)return K}return null}try{const E={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ua}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",Ie,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),J===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),J=Pe(B,E),J===null)throw Pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Se,Ee,xe,Be,Te,w,L,k,j,Z,re,se,ae,ue,x,_,R,V,$,ie,_e,M,X,ce;function pe(){Se=new w_(J),Ee=new __(J,Se,i),Se.init(Ee),M=new o0(J,Se,Ee),xe=new r0(J,Se,Ee),Be=new T_,Te=new Wx,w=new s0(J,Se,xe,Te,Ee,M,Be),L=new v_(p),k=new S_(p),j=new Up(J,Ee),X=new m_(J,Se,j,Ee),Z=new E_(J,j,Be,X),re=new D_(J,Z,j,Be),$=new P_(J,Ee,w),_=new x_(Te),se=new Hx(p,L,k,Se,Ee,X,_),ae=new h0(p,Te),ue=new $x,x=new Jx(Se,Ee),V=new p_(p,L,xe,re,u,a),R=new i0(p,re,Ee),ce=new f0(J,Be,Ee,xe),ie=new g_(J,Se,Be,Ee),_e=new A_(J,Se,Be,Ee),Be.programs=se.programs,p.capabilities=Ee,p.extensions=Se,p.properties=Te,p.renderLists=ue,p.shadowMap=R,p.state=xe,p.info=Be}pe();const ge=new u0(p,J);this.xr=ge,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(C,I,!1))},this.getSize=function(E){return E.set(C,I)},this.setSize=function(E,B,Y){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,I=B,e.width=Math.floor(E*te),e.height=Math.floor(B*te),Y!==!1&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(C*te,I*te).floor()},this.setDrawingBufferSize=function(E,B,Y){C=E,I=B,te=Y,e.width=Math.floor(E*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,B,Y,N){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,B,Y,N),xe.viewport(D.copy(O).multiplyScalar(te).floor())},this.getScissor=function(E){return E.copy(ee)},this.setScissor=function(E,B,Y,N){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,B,Y,N),xe.scissor(z.copy(ee).multiplyScalar(te).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){xe.setScissorTest(ne=E)},this.setOpaqueSort=function(E){fe=E},this.setTransparentSort=function(E){H=E},this.getClearColor=function(E){return E.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(E=!0,B=!0,Y=!0){let N=0;E&&(N|=16384),B&&(N|=256),Y&&(N|=1024),J.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",Ie,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),ue.dispose(),x.dispose(),Te.dispose(),L.dispose(),k.dispose(),re.dispose(),X.dispose(),ce.dispose(),se.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Ge),ge.removeEventListener("sessionend",tt),W&&(W.dispose(),W=null),Ke.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=Be.autoReset,B=R.enabled,Y=R.autoUpdate,N=R.needsUpdate,K=R.type;pe(),Be.autoReset=E,R.enabled=B,R.autoUpdate=Y,R.needsUpdate=N,R.type=K}function Fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function P(E){const B=E.target;B.removeEventListener("dispose",P),de(B)}function de(E){q(E),Te.remove(E)}function q(E){const B=Te.get(E).programs;B!==void 0&&(B.forEach(function(Y){se.releaseProgram(Y)}),E.isShaderMaterial&&se.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Y,N,K,we){B===null&&(B=Me);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,Ne=Bu(E,B,Y,N,K);xe.setMaterial(N,Ce);let Le=Y.index;const We=Y.attributes.position;if(Le===null){if(We===void 0||We.count===0)return}else if(Le.count===0)return;let Ve=1;N.wireframe===!0&&(Le=Z.getWireframeAttribute(Y),Ve=2),X.setup(K,N,Ne,Y,Le);let ke,Ye=ie;Le!==null&&(ke=j.get(Le),Ye=_e,Ye.setIndex(ke));const zn=Le!==null?Le.count:We.count,ui=Y.drawRange.start*Ve,hi=Y.drawRange.count*Ve,$t=we!==null?we.start*Ve:0,He=we!==null?we.count*Ve:1/0,fi=Math.max(ui,$t),Je=Math.min(zn,ui+hi,$t+He)-1,Ct=Math.max(0,Je-fi+1);if(Ct!==0){if(K.isMesh)N.wireframe===!0?(xe.setLineWidth(N.wireframeLinewidth*Ae()),Ye.setMode(1)):Ye.setMode(4);else if(K.isLine){let vn=N.linewidth;vn===void 0&&(vn=1),xe.setLineWidth(vn*Ae()),K.isLineSegments?Ye.setMode(1):K.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else K.isPoints?Ye.setMode(0):K.isSprite&&Ye.setMode(4);if(K.isInstancedMesh)Ye.renderInstances(fi,Ct,K.count);else if(Y.isInstancedBufferGeometry){const vn=Math.min(Y.instanceCount,Y._maxInstanceCount);Ye.renderInstances(fi,Ct,vn)}else Ye.render(fi,Ct)}},this.compile=function(E,B){function Y(N,K,we){N.transparent===!0&&N.side===Pn?(N.side=Nt,N.needsUpdate=!0,Mr(N,K,we),N.side=ki,N.needsUpdate=!0,Mr(N,K,we),N.side=Pn):Mr(N,K,we)}f=x.get(E),f.init(),v.push(f),E.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(p.physicallyCorrectLights),E.traverse(function(N){const K=N.material;if(K)if(Array.isArray(K))for(let we=0;we<K.length;we++){const Ce=K[we];Y(Ce,E,N)}else Y(K,E,N)}),v.pop(),f=null};let be=null;function ve(E){be&&be(E)}function Ge(){Ke.stop()}function tt(){Ke.start()}const Ke=new Du;Ke.setAnimationLoop(ve),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(E){be=E,ge.setAnimationLoop(E),E===null?Ke.stop():Ke.start()},ge.addEventListener("sessionstart",Ge),ge.addEventListener("sessionend",tt),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(B),B=ge.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,B,T),f=x.get(E,v.length),f.init(),v.push(f),he.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(he),F=this.localClippingEnabled,G=_.init(this.clippingPlanes,F,B),h=ue.get(E,m.length),h.init(),m.push(h),xn(E,B,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(fe,H),G===!0&&_.beginShadows();const Y=f.state.shadowsArray;if(R.render(Y,E,B),G===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(h,E),f.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const N=B.cameras;for(let K=0,we=N.length;K<we;K++){const Ce=N[K];je(h,E,Ce,Ce.viewport)}}else je(h,E,B);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(p,E,B),X.resetDefaultState(),A=-1,y=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function xn(E,B,Y,N){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){N&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);const Ce=re.update(E),Ne=E.material;Ne.visible&&h.push(E,Ce,Ne,Y,oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Be.render.frame&&(E.skeleton.update(),E.skeleton.frame=Be.render.frame),!E.frustumCulled||Q.intersectsObject(E))){N&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);const Ce=re.update(E),Ne=E.material;if(Array.isArray(Ne)){const Le=Ce.groups;for(let We=0,Ve=Le.length;We<Ve;We++){const ke=Le[We],Ye=Ne[ke.materialIndex];Ye&&Ye.visible&&h.push(E,Ce,Ye,Y,oe.z,ke)}}else Ne.visible&&h.push(E,Ce,Ne,Y,oe.z,null)}}const we=E.children;for(let Ce=0,Ne=we.length;Ce<Ne;Ce++)xn(we[Ce],B,Y,N)}function je(E,B,Y,N){const K=E.opaque,we=E.transmissive,Ce=E.transparent;f.setupLightsView(Y),we.length>0&&rn(K,B,Y),N&&xe.viewport(D.copy(N)),K.length>0&&Tt(K,B,Y),we.length>0&&Tt(we,B,Y),Ce.length>0&&Tt(Ce,B,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function rn(E,B,Y){const N=Ee.isWebGL2;W===null&&(W=new oi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?dr:ri,minFilter:vs,samples:N&&s===!0?4:0})),p.getDrawingBufferSize(le),N?W.setSize(le.x,le.y):W.setSize(Uo(le.x),Uo(le.y));const K=p.getRenderTarget();p.setRenderTarget(W),p.clear();const we=p.toneMapping;p.toneMapping=mn,Tt(E,B,Y),p.toneMapping=we,w.updateMultisampleRenderTarget(W),w.updateRenderTargetMipmap(W),p.setRenderTarget(K)}function Tt(E,B,Y){const N=B.isScene===!0?B.overrideMaterial:null;for(let K=0,we=E.length;K<we;K++){const Ce=E[K],Ne=Ce.object,Le=Ce.geometry,We=N===null?Ce.material:N,Ve=Ce.group;Ne.layers.test(Y.layers)&&zu(Ne,B,Y,Le,We,Ve)}}function zu(E,B,Y,N,K,we){E.onBeforeRender(p,B,Y,N,K,we),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(p,B,Y,N,E,we),K.transparent===!0&&K.side===Pn?(K.side=Nt,K.needsUpdate=!0,p.renderBufferDirect(Y,B,N,K,E,we),K.side=ki,K.needsUpdate=!0,p.renderBufferDirect(Y,B,N,K,E,we),K.side=Pn):p.renderBufferDirect(Y,B,N,K,E,we),E.onAfterRender(p,B,Y,N,K,we)}function Mr(E,B,Y){B.isScene!==!0&&(B=Me);const N=Te.get(E),K=f.state.lights,we=f.state.shadowsArray,Ce=K.state.version,Ne=se.getParameters(E,K.state,we,B,Y),Le=se.getProgramCacheKey(Ne);let We=N.programs;N.environment=E.isMeshStandardMaterial?B.environment:null,N.fog=B.fog,N.envMap=(E.isMeshStandardMaterial?k:L).get(E.envMap||N.environment),We===void 0&&(E.addEventListener("dispose",P),We=new Map,N.programs=We);let Ve=We.get(Le);if(Ve!==void 0){if(N.currentProgram===Ve&&N.lightsStateVersion===Ce)return _a(E,Ne),Ve}else Ne.uniforms=se.getUniforms(E),E.onBuild(Y,Ne,p),E.onBeforeCompile(Ne,p),Ve=se.acquireProgram(Ne,Le),We.set(Le,Ve),N.uniforms=Ne.uniforms;const ke=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=_.uniform),_a(E,Ne),N.needsLights=ku(E),N.lightsStateVersion=Ce,N.needsLights&&(ke.ambientLightColor.value=K.state.ambient,ke.lightProbe.value=K.state.probe,ke.directionalLights.value=K.state.directional,ke.directionalLightShadows.value=K.state.directionalShadow,ke.spotLights.value=K.state.spot,ke.spotLightShadows.value=K.state.spotShadow,ke.rectAreaLights.value=K.state.rectArea,ke.ltc_1.value=K.state.rectAreaLTC1,ke.ltc_2.value=K.state.rectAreaLTC2,ke.pointLights.value=K.state.point,ke.pointLightShadows.value=K.state.pointShadow,ke.hemisphereLights.value=K.state.hemi,ke.directionalShadowMap.value=K.state.directionalShadowMap,ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ke.spotShadowMap.value=K.state.spotShadowMap,ke.spotLightMatrix.value=K.state.spotLightMatrix,ke.spotLightMap.value=K.state.spotLightMap,ke.pointShadowMap.value=K.state.pointShadowMap,ke.pointShadowMatrix.value=K.state.pointShadowMatrix);const Ye=Ve.getUniforms(),zn=es.seqWithValue(Ye.seq,ke);return N.currentProgram=Ve,N.uniformsList=zn,Ve}function _a(E,B){const Y=Te.get(E);Y.outputEncoding=B.outputEncoding,Y.instancing=B.instancing,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Bu(E,B,Y,N,K){B.isScene!==!0&&(B=Me),w.resetTextureUnits();const we=B.fog,Ce=N.isMeshStandardMaterial?B.environment:null,Ne=T===null?p.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:si,Le=(N.isMeshStandardMaterial?k:L).get(N.envMap||Ce),We=N.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!N.normalMap&&!!Y.attributes.tangent,ke=!!Y.morphAttributes.position,Ye=!!Y.morphAttributes.normal,zn=!!Y.morphAttributes.color,ui=N.toneMapped?p.toneMapping:mn,hi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,$t=hi!==void 0?hi.length:0,He=Te.get(N),fi=f.state.lights;if(G===!0&&(F===!0||E!==y)){const bt=E===y&&N.id===A;_.setState(N,E,bt)}let Je=!1;N.version===He.__version?(He.needsLights&&He.lightsStateVersion!==fi.state.version||He.outputEncoding!==Ne||K.isInstancedMesh&&He.instancing===!1||!K.isInstancedMesh&&He.instancing===!0||K.isSkinnedMesh&&He.skinning===!1||!K.isSkinnedMesh&&He.skinning===!0||He.envMap!==Le||N.fog===!0&&He.fog!==we||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==_.numPlanes||He.numIntersection!==_.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Ve||He.morphTargets!==ke||He.morphNormals!==Ye||He.morphColors!==zn||He.toneMapping!==ui||Ee.isWebGL2===!0&&He.morphTargetsCount!==$t)&&(Je=!0):(Je=!0,He.__version=N.version);let Ct=He.currentProgram;Je===!0&&(Ct=Mr(N,B,K));let vn=!1,Zi=!1,Ms=!1;const ht=Ct.getUniforms(),Bn=He.uniforms;if(xe.useProgram(Ct.program)&&(vn=!0,Zi=!0,Ms=!0),N.id!==A&&(A=N.id,Zi=!0),vn||y!==E){if(ht.setValue(J,"projectionMatrix",E.projectionMatrix),Ee.logarithmicDepthBuffer&&ht.setValue(J,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),y!==E&&(y=E,Zi=!0,Ms=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const bt=ht.map.cameraPosition;bt!==void 0&&bt.setValue(J,oe.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ht.setValue(J,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||K.isSkinnedMesh)&&ht.setValue(J,"viewMatrix",E.matrixWorldInverse)}if(K.isSkinnedMesh){ht.setOptional(J,K,"bindMatrix"),ht.setOptional(J,K,"bindMatrixInverse");const bt=K.skeleton;bt&&(Ee.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),ht.setValue(J,"boneTexture",bt.boneTexture,w),ht.setValue(J,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ys=Y.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0&&Ee.isWebGL2===!0)&&$.update(K,Y,N,Ct),(Zi||He.receiveShadow!==K.receiveShadow)&&(He.receiveShadow=K.receiveShadow,ht.setValue(J,"receiveShadow",K.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Bn.envMap.value=Le,Bn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Zi&&(ht.setValue(J,"toneMappingExposure",p.toneMappingExposure),He.needsLights&&Vu(Bn,Ms),we&&N.fog===!0&&ae.refreshFogUniforms(Bn,we),ae.refreshMaterialUniforms(Bn,N,te,I,W),es.upload(J,He.uniformsList,Bn,w)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(es.upload(J,He.uniformsList,Bn,w),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ht.setValue(J,"center",K.center),ht.setValue(J,"modelViewMatrix",K.modelViewMatrix),ht.setValue(J,"normalMatrix",K.normalMatrix),ht.setValue(J,"modelMatrix",K.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const bt=N.uniformsGroups;for(let Ss=0,Gu=bt.length;Ss<Gu;Ss++)if(Ee.isWebGL2){const xa=bt[Ss];ce.update(xa,Ct),ce.bind(xa,Ct)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ct}function Vu(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function ku(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,B,Y){Te.get(E.texture).__webglTexture=B,Te.get(E.depthTexture).__webglTexture=Y;const N=Te.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=Y===void 0,N.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const Y=Te.get(E);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Y=0){T=E,g=B,S=Y;let N=!0;if(E){const Le=Te.get(E);Le.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),N=!1):Le.__webglFramebuffer===void 0?w.setupRenderTarget(E):Le.__hasExternalTextures&&w.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture)}let K=null,we=!1,Ce=!1;if(E){const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture)&&(Ce=!0);const We=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=We[B],we=!0):Ee.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?K=Te.get(E).__webglMultisampledFramebuffer:K=We,D.copy(E.viewport),z.copy(E.scissor),b=E.scissorTest}else D.copy(O).multiplyScalar(te).floor(),z.copy(ee).multiplyScalar(te).floor(),b=ne;if(xe.bindFramebuffer(36160,K)&&Ee.drawBuffers&&N&&xe.drawBuffers(E,K),xe.viewport(D),xe.scissor(z),xe.setScissorTest(b),we){const Le=Te.get(E.texture);J.framebufferTexture2D(36160,36064,34069+B,Le.__webglTexture,Y)}else if(Ce){const Le=Te.get(E.texture),We=B||0;J.framebufferTextureLayer(36160,36064,Le.__webglTexture,Y||0,We)}A=-1},this.readRenderTargetPixels=function(E,B,Y,N,K,we,Ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){xe.bindFramebuffer(36160,Ne);try{const Le=E.texture,We=Le.format,Ve=Le.type;if(We!==Jt&&M.convert(We)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ve===dr&&(Se.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ve!==ri&&M.convert(Ve)!==J.getParameter(35738)&&!(Ve===Jn&&(Ee.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-N&&Y>=0&&Y<=E.height-K&&J.readPixels(B,Y,N,K,M.convert(We),M.convert(Ve),we)}finally{const Le=T!==null?Te.get(T).__webglFramebuffer:null;xe.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(E,B,Y=0){const N=Math.pow(2,-Y),K=Math.floor(B.image.width*N),we=Math.floor(B.image.height*N);w.setTexture2D(B,0),J.copyTexSubImage2D(3553,Y,0,0,E.x,E.y,K,we),xe.unbindTexture()},this.copyTextureToTexture=function(E,B,Y,N=0){const K=B.image.width,we=B.image.height,Ce=M.convert(Y.format),Ne=M.convert(Y.type);w.setTexture2D(Y,0),J.pixelStorei(37440,Y.flipY),J.pixelStorei(37441,Y.premultiplyAlpha),J.pixelStorei(3317,Y.unpackAlignment),B.isDataTexture?J.texSubImage2D(3553,N,E.x,E.y,K,we,Ce,Ne,B.image.data):B.isCompressedTexture?J.compressedTexSubImage2D(3553,N,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Ce,B.mipmaps[0].data):J.texSubImage2D(3553,N,E.x,E.y,Ce,Ne,B.image),N===0&&Y.generateMipmaps&&J.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(E,B,Y,N,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=E.max.x-E.min.x+1,Ce=E.max.y-E.min.y+1,Ne=E.max.z-E.min.z+1,Le=M.convert(N.format),We=M.convert(N.type);let Ve;if(N.isData3DTexture)w.setTexture3D(N,0),Ve=32879;else if(N.isDataArrayTexture)w.setTexture2DArray(N,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,N.flipY),J.pixelStorei(37441,N.premultiplyAlpha),J.pixelStorei(3317,N.unpackAlignment);const ke=J.getParameter(3314),Ye=J.getParameter(32878),zn=J.getParameter(3316),ui=J.getParameter(3315),hi=J.getParameter(32877),$t=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;J.pixelStorei(3314,$t.width),J.pixelStorei(32878,$t.height),J.pixelStorei(3316,E.min.x),J.pixelStorei(3315,E.min.y),J.pixelStorei(32877,E.min.z),Y.isDataTexture||Y.isData3DTexture?J.texSubImage3D(Ve,K,B.x,B.y,B.z,we,Ce,Ne,Le,We,$t.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Ve,K,B.x,B.y,B.z,we,Ce,Ne,Le,$t.data)):J.texSubImage3D(Ve,K,B.x,B.y,B.z,we,Ce,Ne,Le,We,$t),J.pixelStorei(3314,ke),J.pixelStorei(32878,Ye),J.pixelStorei(3316,zn),J.pixelStorei(3315,ui),J.pixelStorei(32877,hi),K===0&&N.generateMipmaps&&J.generateMipmap(Ve),xe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){g=0,S=0,T=null,xe.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class p0 extends Ou{}p0.prototype.isWebGL1Renderer=!0;class m0 extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ma extends Un{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new U,f=new U,m=[],v=[],p=[],d=[];for(let g=0;g<=n;g++){const S=[],T=g/n;let A=0;g==0&&a==0?A=.5/t:g==n&&l==Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){const D=y/t;h.x=-e*Math.cos(r+D*s)*Math.sin(a+T*o),h.y=e*Math.cos(a+T*o),h.z=e*Math.sin(r+D*s)*Math.sin(a+T*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),d.push(D+A,1-T),S.push(c++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const T=u[g][S+1],A=u[g][S],y=u[g+1][S],D=u[g+1][S+1];(g!==0||a>0)&&m.push(T,A,D),(g!==n-1||l<Math.PI)&&m.push(A,y,D)}this.setIndex(m),this.setAttribute("position",new en(v,3)),this.setAttribute("normal",new en(p,3)),this.setAttribute("uv",new en(d,2))}static fromJSON(e){return new ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class g0 extends vr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const sc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class _0{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],v=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const x0=new _0;class Uu{constructor(e){this.manager=e!==void 0?e:x0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class v0 extends Uu{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=sc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=pr("img");function l(){u(),sc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class b0 extends Uu{constructor(e){super(e)}load(e,t,n,r){const s=new Ot,a=new v0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class M0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=oc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function oc(){return(typeof performance>"u"?Date:performance).now()}class y0{constructor(e,t,n=0,r=1/0){this.ray=new Su(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Bo(e,this,n,t),n.sort(ac),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Bo(e[r],this,n,t);return n.sort(ac),n}}function ac(i,e){return i.distance-e.distance}function Bo(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)Bo(r[s],e,t,!0)}}class lc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);const cc={type:"change"},uo={type:"start"},uc={type:"end"};class S0 extends ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",ue),this._domElementKeyEvents=M},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(cc),n.update(),s=r.NONE},this.update=function(){const M=new U,X=new ai().setFromUnitVectors(e.up,new U(0,1,0)),ce=X.clone().invert(),pe=new U,ge=new ai,ye=2*Math.PI;return function(){const Fe=n.object.position;M.copy(Fe).sub(n.target),M.applyQuaternion(X),o.setFromVector3(M),n.autoRotate&&s===r.NONE&&C(z()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let P=n.minAzimuthAngle,de=n.maxAzimuthAngle;return isFinite(P)&&isFinite(de)&&(P<-Math.PI?P+=ye:P>Math.PI&&(P-=ye),de<-Math.PI?de+=ye:de>Math.PI&&(de-=ye),P<=de?o.theta=Math.max(P,Math.min(de,o.theta)):o.theta=o.theta>(P+de)/2?Math.max(P,o.theta):Math.min(de,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),M.setFromSpherical(o),M.applyQuaternion(ce),Fe.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||pe.distanceToSquared(n.object.position)>a||8*(1-ge.dot(n.object.quaternion))>a?(n.dispatchEvent(cc),pe.copy(n.object.position),ge.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",R),n.domElement.removeEventListener("pointerdown",L),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",j),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ue)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new lc,l=new lc;let c=1;const u=new U;let h=!1;const f=new Ue,m=new Ue,v=new Ue,p=new Ue,d=new Ue,g=new Ue,S=new Ue,T=new Ue,A=new Ue,y=[],D={};function z(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function C(M){l.theta-=M}function I(M){l.phi-=M}const te=function(){const M=new U;return function(ce,pe){M.setFromMatrixColumn(pe,0),M.multiplyScalar(-ce),u.add(M)}}(),fe=function(){const M=new U;return function(ce,pe){n.screenSpacePanning===!0?M.setFromMatrixColumn(pe,1):(M.setFromMatrixColumn(pe,0),M.crossVectors(n.object.up,M)),M.multiplyScalar(ce),u.add(M)}}(),H=function(){const M=new U;return function(ce,pe){const ge=n.domElement;if(n.object.isPerspectiveCamera){const ye=n.object.position;M.copy(ye).sub(n.target);let Ie=M.length();Ie*=Math.tan(n.object.fov/2*Math.PI/180),te(2*ce*Ie/ge.clientHeight,n.object.matrix),fe(2*pe*Ie/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(te(ce*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),fe(pe*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(M){n.object.isPerspectiveCamera?c/=M:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*M)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(M){n.object.isPerspectiveCamera?c*=M:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/M)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(M){f.set(M.clientX,M.clientY)}function Q(M){S.set(M.clientX,M.clientY)}function G(M){p.set(M.clientX,M.clientY)}function F(M){m.set(M.clientX,M.clientY),v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const X=n.domElement;C(2*Math.PI*v.x/X.clientHeight),I(2*Math.PI*v.y/X.clientHeight),f.copy(m),n.update()}function W(M){T.set(M.clientX,M.clientY),A.subVectors(T,S),A.y>0?O(b()):A.y<0&&ee(b()),S.copy(T),n.update()}function he(M){d.set(M.clientX,M.clientY),g.subVectors(d,p).multiplyScalar(n.panSpeed),H(g.x,g.y),p.copy(d),n.update()}function le(M){M.deltaY<0?ee(b()):M.deltaY>0&&O(b()),n.update()}function oe(M){let X=!1;switch(M.code){case n.keys.UP:H(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:H(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:H(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:H(-n.keyPanSpeed,0),X=!0;break}X&&(M.preventDefault(),n.update())}function Me(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const M=.5*(y[0].pageX+y[1].pageX),X=.5*(y[0].pageY+y[1].pageY);f.set(M,X)}}function Ae(){if(y.length===1)p.set(y[0].pageX,y[0].pageY);else{const M=.5*(y[0].pageX+y[1].pageX),X=.5*(y[0].pageY+y[1].pageY);p.set(M,X)}}function J(){const M=y[0].pageX-y[1].pageX,X=y[0].pageY-y[1].pageY,ce=Math.sqrt(M*M+X*X);S.set(0,ce)}function Pe(){n.enableZoom&&J(),n.enablePan&&Ae()}function Se(){n.enableZoom&&J(),n.enableRotate&&Me()}function Ee(M){if(y.length==1)m.set(M.pageX,M.pageY);else{const ce=_e(M),pe=.5*(M.pageX+ce.x),ge=.5*(M.pageY+ce.y);m.set(pe,ge)}v.subVectors(m,f).multiplyScalar(n.rotateSpeed);const X=n.domElement;C(2*Math.PI*v.x/X.clientHeight),I(2*Math.PI*v.y/X.clientHeight),f.copy(m)}function xe(M){if(y.length===1)d.set(M.pageX,M.pageY);else{const X=_e(M),ce=.5*(M.pageX+X.x),pe=.5*(M.pageY+X.y);d.set(ce,pe)}g.subVectors(d,p).multiplyScalar(n.panSpeed),H(g.x,g.y),p.copy(d)}function Be(M){const X=_e(M),ce=M.pageX-X.x,pe=M.pageY-X.y,ge=Math.sqrt(ce*ce+pe*pe);T.set(0,ge),A.set(0,Math.pow(T.y/S.y,n.zoomSpeed)),O(A.y),S.copy(T)}function Te(M){n.enableZoom&&Be(M),n.enablePan&&xe(M)}function w(M){n.enableZoom&&Be(M),n.enableRotate&&Ee(M)}function L(M){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",k),n.domElement.addEventListener("pointerup",j)),V(M),M.pointerType==="touch"?x(M):re(M))}function k(M){n.enabled!==!1&&(M.pointerType==="touch"?_(M):se(M))}function j(M){$(M),y.length===0&&(n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",k),n.domElement.removeEventListener("pointerup",j)),n.dispatchEvent(uc),s=r.NONE}function Z(M){$(M)}function re(M){let X;switch(M.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case di.DOLLY:if(n.enableZoom===!1)return;Q(M),s=r.DOLLY;break;case di.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;G(M),s=r.PAN}else{if(n.enableRotate===!1)return;ne(M),s=r.ROTATE}break;case di.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;ne(M),s=r.ROTATE}else{if(n.enablePan===!1)return;G(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(uo)}function se(M){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;F(M);break;case r.DOLLY:if(n.enableZoom===!1)return;W(M);break;case r.PAN:if(n.enablePan===!1)return;he(M);break}}function ae(M){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(M.preventDefault(),n.dispatchEvent(uo),le(M),n.dispatchEvent(uc))}function ue(M){n.enabled===!1||n.enablePan===!1||oe(M)}function x(M){switch(ie(M),y.length){case 1:switch(n.touches.ONE){case pi.ROTATE:if(n.enableRotate===!1)return;Me(),s=r.TOUCH_ROTATE;break;case pi.PAN:if(n.enablePan===!1)return;Ae(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case pi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(),s=r.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(uo)}function _(M){switch(ie(M),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(M),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;xe(M),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(M),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;w(M),n.update();break;default:s=r.NONE}}function R(M){n.enabled!==!1&&M.preventDefault()}function V(M){y.push(M)}function $(M){delete D[M.pointerId];for(let X=0;X<y.length;X++)if(y[X].pointerId==M.pointerId){y.splice(X,1);return}}function ie(M){let X=D[M.pointerId];X===void 0&&(X=new Ue,D[M.pointerId]=X),X.set(M.pageX,M.pageY)}function _e(M){const X=M.pointerId===y[0].pointerId?y[1]:y[0];return D[X.pointerId]}n.domElement.addEventListener("contextmenu",R),n.domElement.addEventListener("pointerdown",L),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}var lr=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++i%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";i=u}var r=(performance||Date).now(),s=r,a=0,o=t(new lr.Panel("FPS","#0ff","#002")),l=t(new lr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new lr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){a++;var u=(performance||Date).now();if(l.update(u-r,200),u>=s+1e3&&(o.update(a*1e3/(u-s),100),s=u,a=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:n}};lr.Panel=function(i,e,t){var n=1/0,r=0,s=Math.round,a=s(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,u=2*a,h=3*a,f=15*a,m=74*a,v=30*a,p=document.createElement("canvas");p.width=o,p.height=l,p.style.cssText="width:80px;height:48px";var d=p.getContext("2d");return d.font="bold "+9*a+"px Helvetica,Arial,sans-serif",d.textBaseline="top",d.fillStyle=t,d.fillRect(0,0,o,l),d.fillStyle=e,d.fillText(i,c,u),d.fillRect(h,f,m,v),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(h,f,m,v),{dom:p,update:function(g,S){n=Math.min(n,g),r=Math.max(r,g),d.fillStyle=t,d.globalAlpha=1,d.fillRect(0,0,o,f),d.fillStyle=e,d.fillText(s(g)+" "+i+" ("+s(n)+"-"+s(r)+")",c,u),d.drawImage(p,h+a,f,m-a,v,h,f,m-a,v),d.fillRect(h+m-a,f,a,v),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(h+m-a,f,a,s((1-g/S)*v))}}};const w0=lr;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class tn{constructor(e,t,n,r,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),tn.nextNameID=tn.nextNameID||0,this.$name.id=`lil-gui-name-${++tn.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class E0 extends tn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Vo(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const A0={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Vo,toHexString:Vo},mr={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},T0={isPrimitive:!1,match:Array.isArray,fromHexString(i,e,t=1){const n=mr.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return mr.toHexString(r)}},C0={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=mr.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return mr.toHexString(r)}},L0=[A0,mr,T0,C0];function P0(i){return L0.find(e=>e.match(i))}class D0 extends tn{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=P0(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Vo(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ho extends tn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class R0 extends tn{constructor(e,t,n,r,s,a){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},t=g=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+g),this.$input.value=this.getValue())},n=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g)*-1))},r=g=>{this._inputFocused&&(g.preventDefault(),t(this._step*this._normalizeMouseWheel(g)))};let s=!1,a,o,l,c,u;const h=5,f=g=>{a=g.clientX,o=l=g.clientY,s=!0,c=this.getValue(),u=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",v)},m=g=>{if(s){const S=g.clientX-a,T=g.clientY-o;Math.abs(T)>h?(g.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>h&&v()}s||(u-=(g.clientY-l)*this._step*this._arrowKeyMultiplier(g),c+u>this._max?u=this._max-c:c+u<this._min&&(u=this._min-c),this._snapClampSetValue(c+u)),l=g.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",v)},p=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(g,S,T,A,y)=>(g-S)/(T-S)*(y-A)+A,t=g=>{const S=this.$slider.getBoundingClientRect();let T=e(g,S.left,S.right,this._min,this._max);this._snapClampSetValue(T)},n=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=g=>{t(g.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),a=!1},u=g=>{g.touches.length>1||(this._hasScrollBar?(o=g.touches[0].clientX,l=g.touches[0].clientY,a=!0):c(g),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=g=>{if(a){const S=g.touches[0].clientX-o,T=g.touches[0].clientY-l;Math.abs(S)>Math.abs(T)?c(g):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else g.preventDefault(),t(g.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),v=400;let p;const d=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const T=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+T),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(m,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",d,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class I0 extends tn{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const a=document.createElement("option");a.innerHTML=s,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class F0 extends tn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const N0=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function O0(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let hc=!1;class ga{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:s="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!hc&&a&&(O0(N0),hc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,r,s){if(Object(n)===n)return new I0(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new R0(this,e,t,n,r,s);case"boolean":return new E0(this,e,t);case"string":return new F0(this,e,t);case"function":return new ho(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new D0(this,e,t,n)}addFolder(e){return new ga({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ho||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ho)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const U0="/astronomy/assets/8k_stars_milky_way.1fd005dd.jpg";function z0(i){const e=new m0,n=new b0().load(U0,()=>{const r=new Lu(n.image.height);r.fromEquirectangularTexture(i,n),e.background=r.texture});return e}function B0(i=75,e=window.innerWidth/window.innerHeight,t=.05,n=1e3,r="Perspective Camera"){const s=new Rt(i,e,t,n),a=1;return s.layers.set(a),s.name=r,s}function V0(){const i=new Ou({antialias:!0});return i.setSize(window.innerWidth,window.innerHeight),i.shadowMap.enabled=!0,i.shadowMap.type=hu,i.physicallyCorrectLights=!0,i}const fc=(i,e,t)=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio)};class k0{constructor(e,t,n){fc(e,t,n),window.addEventListener("resize",()=>{fc(e,t,n),this.onResize()})}onResize(){}}const G0=new M0;class H0{constructor(e,t,n){at(this,"camera");at(this,"scene");at(this,"renderer");at(this,"updatables");this.camera=e,this.scene=t,this.renderer=n,this.updatables=[]}start(){this.renderer.setAnimationLoop(()=>{this.tick(),this.renderer.render(this.scene,this.camera)})}stop(){this.renderer.setAnimationLoop(null)}tick(){const e=G0.getDelta();for(const t of this.updatables)t.tick&&t.tick(e,this.updatables)}}new y0;class W0{constructor(){at(this,"radius");at(this,"widthSegments");at(this,"heightSegments");at(this,"golemGeometry");at(this,"golemMaterial");at(this,"golemMesh");this.radius=.05,this.widthSegments=6,this.heightSegments=6,this.golemGeometry=new ma(this.radius,this.widthSegments,this.heightSegments),this.golemMaterial=new g0({wireframe:!0}),this.golemMesh=new dn(this.golemGeometry,this.golemMaterial),this.golemMesh.name="Golem Mesh",this.golemMesh.position.set(0,0,0)}get mesh(){return this.golemMesh}tick(e){this.golemMesh.rotation.x+=.001}}let Li,fo,Pi,po,Yr;class X0{constructor(e){at(this,"container");at(this,"stats");at(this,"lilGui");at(this,"timeSpeedSetting");at(this,"controls");this.container=e,this.stats=w0(),this.lilGui=new ga,this.timeSpeedSetting={speed:1},Li=V0(),fo=z0(Li),this.container.appendChild(Li.domElement),Pi=B0(),Pi.position.set(0,0,15),Pi.lookAt(0,0,0),new k0(this.container,Pi,Li),Yr=new H0(Pi,fo,Li),this.initialize_(),this.controls=new S0(Pi,Li.domElement),po=new W0,fo.add(po.mesh),Yr.updatables.push(po)}async initialize_(){this.container.appendChild(this.stats.dom),this.lilGui.add(this.timeSpeedSetting,"speed",-100,100,1).name("Time speed").onChange(e=>{console.log(e)})}start(){Yr.start(),console.log("World Scene started!")}stop(){Yr.stop()}tick(e){this.stats.update(e)}}const $0=su("section",{id:"scene-container"},null,-1),q0=kc({__name:"world-scene",props:{element:null,ariaLabel:null,isDisabled:{type:Boolean}},setup(i){async function e(){const t=document.querySelector("#scene-container");new X0(t).start()}return sa(()=>{e().catch(t=>console.error("onMounted Error",t))}),(t,n)=>(nu(),iu(gf(i.element),{"aria-label":i.ariaLabel,disabled:i.isDisabled},{default:ra(()=>[$0]),_:1},8,["aria-label","disabled"]))}}),j0=ou(" Hitchiker Simulator "),Y0=kc({__name:"App",setup(i){return(e,t)=>(nu(),iu(q0,{element:"div"},{default:ra(()=>[j0]),_:1}))}}),Z0=Md(Y0);Z0.mount("#app");
