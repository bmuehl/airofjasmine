function b(){}const V=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function Y(){return Object.create(null)}function N(t){t.forEach(X)}function G(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function gt(t){return Object.keys(t).length===0}function Jt(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],c=Math.max(e.dirty.length,s.length);for(let l=0;l<c;l+=1)a[l]=e.dirty[l]|s[l];return a}return e.dirty|s}return e.dirty}function Qt(t,e,n,i,s,a){if(s){const c=Z(e,n,i,a);t.p(c,s)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Wt(t){return t&&G(t.destroy)?t.destroy:b}const tt=typeof window!="undefined";let xt=tt?()=>window.performance.now():()=>Date.now(),I=tt?t=>requestAnimationFrame(t):b;const E=new Set;function et(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&I(et)}function wt(t){let e;return E.size===0&&I(et),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let H=!1;function bt(){H=!0}function $t(){H=!1}function kt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&r.push(f)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const o=e[r].claim_order,f=(s>0&&e[n[s]].claim_order<=o?s+1:kt(1,s,d=>e[n[d]].claim_order,o))-1;i[r]=n[f]+1;const u=f+1;n[u]=r,s=Math.max(u,s)}const a=[],c=[];let l=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(a.push(e[r-1]);l>=r;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);a.reverse(),c.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<c.length;r++){for(;o<a.length&&c[r].claim_order>=a[o].claim_order;)o++;const f=o<a.length?a[o]:null;t.insertBefore(c[r],f)}}function vt(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=J("style");return Nt(nt(t),e),e.sheet}function Nt(t,e){vt(t.head||t,e)}function St(t,e){if(H){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){t.insertBefore(e,n||null)}function Ct(t,e,n){H&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function R(t){t.parentNode.removeChild(t)}function J(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function Vt(){return K(" ")}function Xt(){return K("")}function Yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,i,s=!1){it(t);const a=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const r=n(l);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const r=n(l);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function jt(t,e,n,i){return st(t,s=>s.nodeName===e,s=>{const a=[];for(let c=0;c<s.attributes.length;c++){const l=s.attributes[c];n[l.name]||a.push(l.name)}a.forEach(c=>s.removeAttribute(c))},()=>i(e))}function Zt(t,e,n){return jt(t,e,n,J)}function Ht(t,e){return st(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function te(t){return Ht(t," ")}function rt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ee(t){const e=rt(t,"HTML_TAG_START",0),n=rt(t,"HTML_TAG_END",e);if(e===n)return new ot;it(t);const i=t.splice(e,n-e+1);R(i[0]),R(i[i.length-1]);const s=i.slice(1,i.length-1);for(const a of s)a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ot(s)}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ct(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}class Rt{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=J(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(R)}}class ot extends Rt{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ct(this.t,this.n[n],e)}}const D=new Map;let z=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zt(t,e){const n={stylesheet:At(e),rules:{}};return D.set(t,n),n}function Ot(t,e,n,i,s,a,c,l=0){const r=16.666/i;let o=`{
`;for(let p=0;p<=1;p+=r){const w=e+(n-e)*a(p);o+=p*100+`%{${c(w,1-w)}}
`}const f=o+`100% {${c(n,1-n)}}
}`,u=`__svelte_${Dt(f)}_${l}`,d=nt(t),{stylesheet:m,rules:_}=D.get(d)||zt(d,t);_[u]||(_[u]=!0,m.insertRule(`@keyframes ${u} ${f}`,m.cssRules.length));const x=t.style.animation||"";return t.style.animation=`${x?`${x}, `:""}${u} ${i}ms linear ${s}ms 1 both`,z+=1,u}function lt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||qt())}function qt(){I(()=>{z||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}let S;function T(t){S=t}function O(){if(!S)throw new Error("Function called outside component initialization");return S}function ie(t){O().$$.on_mount.push(t)}function se(t){O().$$.after_update.push(t)}function re(){const t=O();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=ct(e,n);i.slice().forEach(a=>{a.call(t,s)})}}}function ce(t,e){O().$$.context.set(t,e)}const C=[],at=[],q=[],ut=[],ft=Promise.resolve();let Q=!1;function dt(){Q||(Q=!0,ft.then(_t))}function oe(){return dt(),ft}function B(t){q.push(t)}const U=new Set;let L=0;function _t(){const t=S;do{for(;L<C.length;){const e=C[L];L++,T(e),Bt(e.$$)}for(T(null),C.length=0,L=0;at.length;)at.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];U.has(n)||(U.add(n),n())}q.length=0}while(C.length);for(;ut.length;)ut.pop()();Q=!1,U.clear(),T(t)}function Bt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}let M;function Lt(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function ht(t,e,n){t.dispatchEvent(ct(`${e?"intro":"outro"}${n}`))}const P=new Set;let k;function le(){k={r:0,c:[],p:k}}function ae(){k.r||N(k.c),k=k.p}function mt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function ue(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),k.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Pt={duration:0};function fe(t,e,n){let i=e(t,n),s=!1,a,c,l=0;function r(){a&&lt(t,a)}function o(){const{delay:u=0,duration:d=300,easing:m=V,tick:_=b,css:x}=i||Pt;x&&(a=Ot(t,0,1,d,u,m,x,l++)),_(0,1);const p=xt()+u,w=p+d;c&&c.abort(),s=!0,B(()=>ht(t,!0,"start")),c=wt($=>{if(s){if($>=w)return _(1,0),ht(t,!0,"end"),r(),s=!1;if($>=p){const A=m(($-p)/d);_(A,1-A)}}return s})}let f=!1;return{start(){f||(f=!0,lt(t),G(i)?(i=i(),Lt().then(o)):o())},invalidate(){f=!1},end(){s&&(r(),s=!1)}}}function de(t,e){t.d(1),e.delete(t.key)}function _e(t,e,n,i,s,a,c,l,r,o,f,u){let d=t.length,m=a.length,_=d;const x={};for(;_--;)x[t[_].key]=_;const p=[],w=new Map,$=new Map;for(_=m;_--;){const h=u(s,a,_),y=n(h);let g=c.get(y);g?i&&g.p(h,e):(g=o(y,h),g.c()),w.set(y,p[_]=g),y in x&&$.set(y,Math.abs(_-x[y]))}const A=new Set,W=new Set;function F(h){mt(h,1),h.m(l,f),c.set(h.key,h),f=h.first,m--}for(;d&&m;){const h=p[m-1],y=t[d-1],g=h.key,j=y.key;h===y?(f=h.first,d--,m--):w.has(j)?!c.has(g)||A.has(g)?F(h):W.has(j)?d--:$.get(g)>$.get(j)?(W.add(g),F(h)):(A.add(j),d--):(r(y,c),d--)}for(;d--;){const h=t[d];w.has(h.key)||r(h,c)}for(;m;)F(p[m-1]);return p}function he(t,e){const n={},i={},s={$$scope:1};let a=t.length;for(;a--;){const c=t[a],l=e[a];if(l){for(const r in c)r in l||(i[r]=1);for(const r in l)s[r]||(n[r]=l[r],s[r]=1);t[a]=l}else for(const r in c)s[r]=1}for(const c in i)c in n||(n[c]=void 0);return n}function me(t){return typeof t=="object"&&t!==null?t:{}}function pe(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:s,on_mount:a,on_destroy:c,after_update:l}=t.$$;s&&s.m(e,n),i||B(()=>{const r=a.map(X).filter(G);c?c.push(...r):N(r),t.$$.on_mount=[]}),l.forEach(B)}function Gt(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(C.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,s,a,c,l=[-1]){const r=S;T(t);const o=t.$$={fragment:null,ctx:null,props:a,update:b,not_equal:s,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:Y(),dirty:l,skip_bound:!1,root:e.target||r.$$.root};c&&c(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(u,d,...m)=>{const _=m.length?m[0]:d;return o.ctx&&s(o.ctx[u],o.ctx[u]=_)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](_),f&&It(t,u)),d}):[],o.update(),f=!0,N(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){bt();const u=Mt(e.target);o.fragment&&o.fragment.l(u),u.forEach(R)}else o.fragment&&o.fragment.c();e.intro&&mt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),$t(),_t()}T(r)}class xe{$destroy(){Gt(this,1),this.$destroy=b}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!gt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const v=[];function we(t,e=b){let n;const i=new Set;function s(l){if(yt(t,l)&&(t=l,n)){const r=!v.length;for(const o of i)o[1](),v.push(o,t);if(r){for(let o=0;o<v.length;o+=2)v[o][0](v[o+1]);v.length=0}}}function a(l){s(l(t))}function c(l,r=b){const o=[l,r];return i.add(o),i.size===1&&(n=e(s)||b),l(t),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:s,update:a,subscribe:c}}function be(t,{delay:e=0,duration:n=400,easing:i=V}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:a=>`opacity: ${a*s}`}}export{Gt as A,pt as B,we as C,oe as D,Jt as E,Qt as F,Ut as G,Kt as H,St as I,b as J,ot as K,ee as L,Wt as M,G as N,_e as O,re as P,de as Q,B as R,xe as S,fe as T,be as U,Mt as a,Yt as b,Zt as c,R as d,J as e,Ct as f,Ht as g,ne as h,ge as i,Vt as j,Xt as k,te as l,le as m,ue as n,ae as o,mt as p,ce as q,se as r,yt as s,K as t,ie as u,pe as v,ye as w,Ft as x,he as y,me as z};
