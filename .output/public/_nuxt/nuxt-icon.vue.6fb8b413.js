import{f as m,r as p,a9 as d,l as f,o as v,c as h,A as E,aa as l,ab as e}from"./entry.66808c07.js";const I=["innerHTML"],x=m({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(u){let o,a;const i=u,r=p("");let _=!1;async function c(){try{const n=await Object.assign({"/assets/icons/at.svg":()=>e(()=>import("./at.5e4b780b.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/dot.svg":()=>e(()=>import("./dot.21c4db98.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/github.svg":()=>e(()=>import("./github.b965b4e0.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/linkedin.svg":()=>e(()=>import("./linkedin.0d1ad9d9.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/printer.svg":()=>e(()=>import("./printer.0ead45e5.js"),[],import.meta.url).then(t=>t.default)})[`/assets/icons/${i.name}.svg`]();n.includes("stroke")&&(_=!0),r.value=n}catch{console.error(`[nuxt-icons] Icon '${i.name}' doesn't exist in 'assets/icons'`)}}return[o,a]=d(()=>c()),await o,a(),f(c),(s,n)=>(v(),h("span",{class:E(["nuxt-icon",{"nuxt-icon--fill":!s.filled,"nuxt-icon--stroke":l(_)&&!s.filled}]),innerHTML:l(r)},null,10,I))}});export{x as _};
