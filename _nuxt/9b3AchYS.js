import P from"./DeYhHyp1.js";import k from"./D6wV_6dg.js";import L from"./Dh4QMLax.js";import{u as b,d,D as R,P as g,s as x,E as C,G as S,r as B,a as E,H as m,I as N,J as T,K as u,L as p,T as j,M as H,N as O,S as A,O as D,Q as w,p as $,R as q,U as I,c as f,e as M,i as y,w as _,V as v}from"./4P8sSSN4.js";import"./CXuhWvGF.js";import"./2ETV-d1z.js";const V=d({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,n){const e=await m[t.name]().then(o=>o.default||o);return()=>p(e,t.layoutProps,n.slots)}}),F=d({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,n){const e=b(),o=R(g),s=o===x()?C():o,r=S(()=>{let a=u(t.name)??s.meta.layout??"default";return a&&!(a in m)&&t.fallback&&(a=u(t.fallback)),a}),i=B();n.expose({layoutRef:i});const l=e.deferHydration();if(e.isHydrating){const a=e.hooks.hookOnce("app:error",l);E().beforeEach(a)}return()=>{const a=r.value&&r.value in m,c=s.meta.layoutTransition??N;return T(j,a&&c,{default:()=>p(A,{suspensible:!0,onResolve:()=>{O(l)}},{default:()=>p(G,{layoutProps:H(n.attrs,{ref:i}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!c},n.slots)})}).default()}}}),G=d({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,n){const e=t.name;return t.shouldProvide&&D(w,{isCurrent:o=>e===(o.meta.layout??"default")}),()=>{var o,s;return!e||typeof e=="string"&&!(e in m)?(s=(o=n.slots).default)==null?void 0:s.call(o):p(V,{key:e,layoutProps:t.layoutProps,name:e},n.slots)}}}),J={class:"document-driven-page"},Y=d({__name:"document-driven",setup(t){const{contentHead:n}=$().public.content,{page:e,layout:o}=q();return e.value,n&&I(e),(s,r)=>{const i=P,l=k,a=L,c=F;return f(),M("div",J,[y(c,{name:u(o)||"default"},{default:_(()=>[u(e)?(f(),v(l,{key:u(e)._id,value:u(e)},{empty:_(({value:h})=>[y(i,{value:h},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{Y as default};
