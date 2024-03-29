import W from"./Icon.80fc5aa0.js";import Y from"./Avatar.435434ed.js";import Z from"./Kbd.44adb2ee.js";import X from"./Link.d12fb4d4.js";import{f as O,r as k,i as y,h as oe,j as ee,k as ue,l as le,P as w,m as se,s as re,v as ie,Q as de,x as pe,y as C,o as S,B as P,w as R,b as $,C as z,a as Q,c as T,A as D,R as ce,T as me,G as A,F as H,z as F,K as L,t as q,d as ve}from"./entry.66808c07.js";import{u as fe}from"./usePopper.27b27bd8.js";import{_ as be}from"./_plugin-vue_export-helper.c27b6911.js";import{o as M,u as ge,H as N,t as U,N as x,a as g}from"./dom.fe5c7340.js";import{p as Me,u as Ie,x as ye,a as h}from"./use-tracked-pointer.6cc53776.js";import{c as he,l as B,p as Se}from"./open-closed.5468058a.js";import{b as ke}from"./use-resolve-button-type.f3369464.js";import{w as Re,h as Te,v as we,N as G,_ as te,O as Pe}from"./focus-management.72b6de4c.js";import{y as De}from"./use-outside-click.cbd3df0e.js";import{p as Oe}from"./use-text-value.bc0b80fc.js";import{o as J}from"./omit.2383c4bc.js";import"./nuxt-link.e9352679.js";import"./_baseIsEqual.edd4b790.js";import"./_Uint8Array.6f9c1fd4.js";import"./index.7b010e4a.js";import"./index.c111b088.js";import"./_baseIteratee.e4fcdbf8.js";import"./get.55859130.js";var Ce=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ce||{}),$e=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))($e||{});function Ae(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let ae=Symbol("MenuContext");function E(e){let b=se(ae,null);if(b===null){let I=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(I,E),I}return b}let Be=O({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:b,attrs:I}){let f=k(1),t=k(null),c=k(null),d=k([]),i=k(""),s=k(null),u=k(1);function a(l=r=>r){let r=s.value!==null?d.value[s.value]:null,o=Pe(l(d.value.slice()),p=>M(p.dataRef.domRef)),n=r?o.indexOf(r):null;return n===-1&&(n=null),{items:o,activeItemIndex:n}}let m={menuState:f,buttonRef:t,itemsRef:c,items:d,searchQuery:i,activeItemIndex:s,activationTrigger:u,closeMenu:()=>{f.value=1,s.value=null},openMenu:()=>f.value=0,goToItem(l,r,o){let n=a(),p=ye(l===h.Specific?{focus:h.Specific,id:r}:{focus:l},{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:v=>v.id,resolveDisabled:v=>v.dataRef.disabled});i.value="",s.value=p,u.value=o??1,d.value=n.items},search(l){let r=i.value!==""?0:1;i.value+=l.toLowerCase();let o=(s.value!==null?d.value.slice(s.value+r).concat(d.value.slice(0,s.value+r)):d.value).find(p=>p.dataRef.textValue.startsWith(i.value)&&!p.dataRef.disabled),n=o?d.value.indexOf(o):-1;n===-1||n===s.value||(s.value=n,u.value=1)},clearSearch(){i.value=""},registerItem(l,r){let o=a(n=>[...n,{id:l,dataRef:r}]);d.value=o.items,s.value=o.activeItemIndex,u.value=1},unregisterItem(l){let r=a(o=>{let n=o.findIndex(p=>p.id===l);return n!==-1&&o.splice(n,1),o});d.value=r.items,s.value=r.activeItemIndex,u.value=1}};return De([t,c],(l,r)=>{var o;m.closeMenu(),Re(r,Te.Loose)||(l.preventDefault(),(o=M(t))==null||o.focus())},y(()=>f.value===0)),oe(ae,m),he(y(()=>ge(f.value,{0:B.Open,1:B.Closed}))),()=>{let l={open:f.value===0,close:m.closeMenu};return N({ourProps:{},theirProps:e,slot:l,slots:b,attrs:I,name:"Menu"})}}}),Ne=O({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${U()}`}},setup(e,{attrs:b,slots:I,expose:f}){let t=E("MenuButton");f({el:t.buttonRef,$el:t.buttonRef});function c(u){switch(u.key){case g.Space:case g.Enter:case g.ArrowDown:u.preventDefault(),u.stopPropagation(),t.openMenu(),w(()=>{var a;(a=M(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(h.First)});break;case g.ArrowUp:u.preventDefault(),u.stopPropagation(),t.openMenu(),w(()=>{var a;(a=M(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(h.Last)});break}}function d(u){switch(u.key){case g.Space:u.preventDefault();break}}function i(u){e.disabled||(t.menuState.value===0?(t.closeMenu(),w(()=>{var a;return(a=M(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(u.preventDefault(),t.openMenu(),Ae(()=>{var a;return(a=M(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let s=ke(y(()=>({as:e.as,type:b.type})),t.buttonRef);return()=>{var u;let a={open:t.menuState.value===0},{id:m,...l}=e,r={ref:t.buttonRef,id:m,type:s.value,"aria-haspopup":"menu","aria-controls":(u=M(t.itemsRef))==null?void 0:u.id,"aria-expanded":t.menuState.value===0,onKeydown:c,onKeyup:d,onClick:i};return N({ourProps:r,theirProps:l,slot:a,attrs:b,slots:I,name:"MenuButton"})}}}),Ee=O({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${U()}`}},setup(e,{attrs:b,slots:I,expose:f}){let t=E("MenuItems"),c=k(null);f({el:t.itemsRef,$el:t.itemsRef}),Me({container:y(()=>M(t.itemsRef)),enabled:y(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function d(a){var m;switch(c.value&&clearTimeout(c.value),a.key){case g.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case g.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let l=t.items.value[t.activeItemIndex.value];(m=M(l.dataRef.domRef))==null||m.click()}t.closeMenu(),te(M(t.buttonRef));break;case g.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.Next);case g.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.Previous);case g.Home:case g.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.First);case g.End:case g.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.Last);case g.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),w(()=>{var l;return(l=M(t.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case g.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),w(()=>we(M(t.buttonRef),a.shiftKey?G.Previous:G.Next));break;default:a.key.length===1&&(t.search(a.key),c.value=setTimeout(()=>t.clearSearch(),350));break}}function i(a){switch(a.key){case g.Space:a.preventDefault();break}}let s=Se(),u=y(()=>s!==null?(s.value&B.Open)===B.Open:t.menuState.value===0);return()=>{var a,m;let l={open:t.menuState.value===0},{id:r,...o}=e,n={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(m=M(t.buttonRef))==null?void 0:m.id,id:r,onKeydown:d,onKeyup:i,role:"menu",tabIndex:0,ref:t.itemsRef};return N({ourProps:n,theirProps:o,slot:l,attrs:b,slots:I,features:x.RenderStrategy|x.Static,visible:u.value,name:"MenuItems"})}}}),_e=O({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${U()}`}},setup(e,{slots:b,attrs:I,expose:f}){let t=E("MenuItem"),c=k(null);f({el:c,$el:c});let d=y(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),i=Oe(c),s=y(()=>({disabled:e.disabled,get textValue(){return i()},domRef:c}));ee(()=>t.registerItem(e.id,s)),ue(()=>t.unregisterItem(e.id)),le(()=>{t.menuState.value===0&&d.value&&t.activationTrigger.value!==0&&w(()=>{var n,p;return(p=(n=M(c))==null?void 0:n.scrollIntoView)==null?void 0:p.call(n,{block:"nearest"})})});function u(n){if(e.disabled)return n.preventDefault();t.closeMenu(),te(M(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(h.Nothing);t.goToItem(h.Specific,e.id)}let m=Ie();function l(n){m.update(n)}function r(n){m.wasMoved(n)&&(e.disabled||d.value||t.goToItem(h.Specific,e.id,0))}function o(n){m.wasMoved(n)&&(e.disabled||d.value&&t.goToItem(h.Nothing))}return()=>{let{disabled:n}=e,p={active:d.value,disabled:n,close:t.closeMenu},{id:v,..._}=e;return N({ourProps:{id:v,ref:c,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:u,onFocus:a,onPointerenter:l,onMouseenter:l,onPointermove:r,onMousemove:r,onPointerleave:o,onMouseleave:o},theirProps:{...I,..._},slot:p,attrs:I,slots:b,name:"MenuItem"})}}});const He=O({components:{HMenu:Be,HMenuButton:Ne,HMenuItems:Ee,HMenuItem:_e,UIcon:W,UAvatar:Y,UKbd:Z,ULink:X},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},ui:{type:Object,default:()=>({})}},setup(e,{attrs:b}){const I=re(),f=y(()=>ie({},e.ui,I.ui.dropdown)),t=y(()=>de(e.mode==="hover"?{offsetDistance:0}:{},e.popper,f.value.popper)),[c,d]=fe(t.value),i=k(null);let s=null,u=null;ee(()=>{setTimeout(()=>{var p;const o=(p=c.value)==null?void 0:p.$.provides;if(!o)return;const n=Object.getOwnPropertySymbols(o);i.value=n.length&&o[n[0]]},200)});const a=y(()=>{var n,p;const o=((n=e.popper)==null?void 0:n.offsetDistance)||((p=f.value.popper)==null?void 0:p.offsetDistance)||8;return e.mode==="hover"?{paddingTop:`${o}px`,paddingBottom:`${o}px`}:{}}),m=y(()=>pe(f.value.wrapper,b.class));function l(){e.mode!=="hover"||!i.value||(u&&(clearTimeout(u),u=null),i.value.menuState!==0&&(s=s||setTimeout(()=>{i.value.openMenu&&i.value.openMenu(),s=null},e.openDelay)))}function r(){e.mode!=="hover"||!i.value||(s&&(clearTimeout(s),s=null),i.value.menuState!==1&&(u=u||setTimeout(()=>{i.value.closeMenu&&i.value.closeMenu(),u=null},e.closeDelay)))}return{attrs:J(b,["class"]),ui:f,trigger:c,container:d,containerStyle:a,wrapperClass:m,onMouseOver:l,onMouseLeave:r,omit:J}}}),Fe=["disabled"],Le={class:"truncate"};function Ue(e,b,I,f,t,c){const d=C("HMenuButton"),i=W,s=Y,u=Z,a=X,m=C("HMenuItem"),l=C("HMenuItems"),r=C("HMenu");return S(),P(r,A({as:"div",class:e.wrapperClass},e.attrs,{onMouseleave:e.onMouseLeave}),{default:R(({open:o})=>[$(d,{ref:"trigger",as:"div",disabled:e.disabled,class:"inline-flex w-full",role:"button",onMouseover:e.onMouseOver},{default:R(()=>[z(e.$slots,"default",{open:o,disabled:e.disabled},()=>[Q("button",{disabled:e.disabled}," Open ",8,Fe)])]),_:2},1032,["disabled","onMouseover"]),o&&e.items.length?(S(),T("div",{key:0,ref:"container",class:D([e.ui.container,e.ui.width]),style:ce(e.containerStyle),onMouseover:b[0]||(b[0]=(...n)=>e.onMouseOver&&e.onMouseOver(...n))},[$(me,A({appear:""},e.ui.transition),{default:R(()=>[$(l,{class:D([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:R(()=>[(S(!0),T(H,null,F(e.items,(n,p)=>(S(),T("div",{key:p,class:D(e.ui.padding)},[(S(!0),T(H,null,F(n,(v,_)=>(S(),P(m,{key:_,disabled:v.disabled},{default:R(({active:j,disabled:ne})=>[$(a,A(e.omit(v,["label","slot","icon","iconClass","avatar","shortcuts","disabled","click"]),{class:[e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,j?e.ui.item.active:e.ui.item.inactive,ne&&e.ui.item.disabled],onClick:v.click}),{default:R(()=>[z(e.$slots,v.slot||"item",{item:v},()=>{var K;return[v.icon?(S(),P(i,{key:0,name:v.icon,class:D([e.ui.item.icon.base,j?e.ui.item.icon.active:e.ui.item.icon.inactive,v.iconClass])},null,8,["name","class"])):v.avatar?(S(),P(s,A({key:1},{size:e.ui.item.avatar.size,...v.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):L("",!0),Q("span",Le,q(v.label),1),(K=v.shortcuts)!=null&&K.length?(S(),T("span",{key:2,class:D(e.ui.item.shortcuts)},[(S(!0),T(H,null,F(v.shortcuts,V=>(S(),P(u,{key:V},{default:R(()=>[ve(q(V),1)]),_:2},1024))),128))],2)):L("",!0)]})]),_:2},1040,["class","onClick"])]),_:2},1032,["disabled"]))),128))],2))),128))]),_:3},8,["class"])]),_:3},16)],38)):L("",!0)]),_:3},16,["class","onMouseleave"])}const it=be(He,[["render",Ue]]);export{it as default};
