import g from"./CJVSJBae.js";import v from"./BHt-8alU.js";import A from"./Cejh8aUn.js";import{d as h,W as B,G as C,K as r,c as n,e as i,f as o,i as l,F as L,X as N,g as e,w as d,q as V,Y as I,V as S,k as b}from"./4P8sSSN4.js";import{u as q}from"./-02DGGJI.js";import"./BcWussCh.js";const F={key:0,class:"articles-list"},K={class:"featured"},P={class:"layout"},T={key:1,class:"tour"},Y=h({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(m){let s,c;const p=m,{data:f}=([s,c]=B(async()=>q(p.path,async()=>await V(I(p.path)).sort({date:-1}).find(),"$QKZ6BwmNRx")),s=await s,c(),s),a=C(()=>f.value||[]);return(D,t)=>{var _;const u=g,y=v,x=A;return(_=r(a))!=null&&_.length?(n(),i("div",F,[o("div",K,[l(u,{article:r(a)[0],featured:!0},null,8,["article"])]),o("div",P,[(n(!0),i(L,null,N(r(a).slice(1),(k,w)=>(n(),S(u,{key:w,article:k},null,8,["article"]))),128))])])):(n(),i("div",T,[t[5]||(t[5]=o("p",null,"Seems like there are no articles yet.",-1)),o("p",null,[t[2]||(t[2]=e(" You can start by ")),l(y,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>t[0]||(t[0]=[e("creating")])),_:1}),t[3]||(t[3]=e(" one in the ")),l(x,null,{default:d(()=>t[1]||(t[1]=[e("articles")])),_:1}),t[4]||(t[4]=e(" folder. "))])]))}}}),Z=b(Y,[["__scopeId","data-v-eba26087"]]);export{Z as default};
