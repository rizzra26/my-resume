import de from"./Icon.80fc5aa0.js";import pe from"./Avatar.435434ed.js";import{f as X,r as V,i as u,h as ge,j as le,n as te,O as ie,F as ve,k as ye,l as he,P as E,m as Oe,V as H,q as T,s as Se,v as ue,Q as Me,x as se,J as Q,y as Ie,o as y,B as q,w as F,c as P,K as D,W as J,C as $,a as U,G as ae,A as h,b as G,t as W,T as ke,z as Ce,R as we,d as Le}from"./entry.66808c07.js";import{c as Re}from"./index.7b010e4a.js";import{u as Ae}from"./usePopper.27b27bd8.js";import{u as Ve}from"./useFormGroup.8a63fcfc.js";import{_ as Be}from"./_plugin-vue_export-helper.c27b6911.js";import{J as Te,G as Pe,X as He,Y as ze,Q as qe}from"./combobox.ba16db3b.js";import{u as N,o as L,K as De,H as x,T as Ne,t as ne,N as re,a as I}from"./dom.fe5c7340.js";import{x as je,a as R,u as $e}from"./use-tracked-pointer.6cc53776.js";import{c as Ue,l as Z,p as Ee}from"./open-closed.5468058a.js";import{b as Fe}from"./use-resolve-button-type.f3369464.js";import{w as We,h as Ke,O as Qe}from"./focus-management.72b6de4c.js";import{y as Je}from"./use-outside-click.cbd3df0e.js";import{f as Xe,a as Ye}from"./hidden.7bbe89e6.js";import{d as Ge,e as Ze}from"./use-controllable.b4046a6e.js";import{p as xe}from"./use-text-value.bc0b80fc.js";import{o as _e}from"./omit.2383c4bc.js";import{u as ea}from"./index.c111b088.js";import"./_baseIteratee.e4fcdbf8.js";import"./_Uint8Array.6f9c1fd4.js";import"./_baseIsEqual.edd4b790.js";import"./get.55859130.js";import"./disposables.57da4964.js";import"./micro-task.89dcd6af.js";function aa(e,p){return e===p}var la=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(la||{}),ta=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(ta||{}),na=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(na||{});function oa(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let ce=Symbol("ListboxContext");function _(e){let p=Oe(ce,null);if(p===null){let w=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(w,_),w}return p}let ia=X({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>aa},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:p,attrs:w,emit:B}){let a=V(1),o=V(null),b=V(null),O=V(null),m=V([]),t=V(""),l=V(null),S=V(1);function v(n=i=>i){let i=l.value!==null?m.value[l.value]:null,s=Qe(n(m.value.slice()),C=>L(C.dataRef.domRef)),d=i?s.indexOf(i):null;return d===-1&&(d=null),{options:s,activeOptionIndex:d}}let c=u(()=>e.multiple?1:0),[f,M]=Ge(u(()=>e.modelValue),n=>B("update:modelValue",n),u(()=>e.defaultValue)),A=u(()=>f.value===void 0?N(c.value,{1:[],0:void 0}):f.value),r={listboxState:a,value:A,mode:c,compare(n,i){if(typeof e.by=="string"){let s=e.by;return(n==null?void 0:n[s])===(i==null?void 0:i[s])}return e.by(n,i)},orientation:u(()=>e.horizontal?"horizontal":"vertical"),labelRef:o,buttonRef:b,optionsRef:O,disabled:u(()=>e.disabled),options:m,searchQuery:t,activeOptionIndex:l,activationTrigger:S,closeListbox(){e.disabled||a.value!==1&&(a.value=1,l.value=null)},openListbox(){e.disabled||a.value!==0&&(a.value=0)},goToOption(n,i,s){if(e.disabled||a.value===1)return;let d=v(),C=je(n===R.Specific?{focus:R.Specific,id:i}:{focus:n},{resolveItems:()=>d.options,resolveActiveIndex:()=>d.activeOptionIndex,resolveId:j=>j.id,resolveDisabled:j=>j.dataRef.disabled});t.value="",l.value=C,S.value=s??1,m.value=d.options},search(n){if(e.disabled||a.value===1)return;let i=t.value!==""?0:1;t.value+=n.toLowerCase();let s=(l.value!==null?m.value.slice(l.value+i).concat(m.value.slice(0,l.value+i)):m.value).find(C=>C.dataRef.textValue.startsWith(t.value)&&!C.dataRef.disabled),d=s?m.value.indexOf(s):-1;d===-1||d===l.value||(l.value=d,S.value=1)},clearSearch(){e.disabled||a.value!==1&&t.value!==""&&(t.value="")},registerOption(n,i){let s=v(d=>[...d,{id:n,dataRef:i}]);m.value=s.options,l.value=s.activeOptionIndex},unregisterOption(n){let i=v(s=>{let d=s.findIndex(C=>C.id===n);return d!==-1&&s.splice(d,1),s});m.value=i.options,l.value=i.activeOptionIndex,S.value=1},theirOnChange(n){e.disabled||M(n)},select(n){e.disabled||M(N(c.value,{0:()=>n,1:()=>{let i=H(r.value.value).slice(),s=H(n),d=i.findIndex(C=>r.compare(s,H(C)));return d===-1?i.push(s):i.splice(d,1),i}}))}};Je([b,O],(n,i)=>{var s;r.closeListbox(),We(i,Ke.Loose)||(n.preventDefault(),(s=L(b))==null||s.focus())},u(()=>a.value===0)),ge(ce,r),Ue(u(()=>N(a.value,{0:Z.Open,1:Z.Closed})));let k=u(()=>{var n;return(n=L(b))==null?void 0:n.closest("form")});return le(()=>{te([k],()=>{if(!k.value||e.defaultValue===void 0)return;function n(){r.theirOnChange(e.defaultValue)}return k.value.addEventListener("reset",n),()=>{var i;(i=k.value)==null||i.removeEventListener("reset",n)}},{immediate:!0})}),()=>{let{name:n,modelValue:i,disabled:s,form:d,...C}=e,j={open:a.value===0,disabled:s,value:A.value};return ie(ve,[...n!=null&&A.value!=null?Ze({[n]:A.value}).map(([Y,ee])=>ie(Xe,De({features:Ye.Hidden,key:Y,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:d,name:Y,value:ee}))):[],x({ourProps:{},theirProps:{...w,...Ne(C,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:j,slots:p,attrs:w,name:"Listbox"})])}}}),ua=X({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${ne()}`}},setup(e,{attrs:p,slots:w,expose:B}){let a=_("ListboxButton");B({el:a.buttonRef,$el:a.buttonRef});function o(t){switch(t.key){case I.Space:case I.Enter:case I.ArrowDown:t.preventDefault(),a.openListbox(),E(()=>{var l;(l=L(a.optionsRef))==null||l.focus({preventScroll:!0}),a.value.value||a.goToOption(R.First)});break;case I.ArrowUp:t.preventDefault(),a.openListbox(),E(()=>{var l;(l=L(a.optionsRef))==null||l.focus({preventScroll:!0}),a.value.value||a.goToOption(R.Last)});break}}function b(t){switch(t.key){case I.Space:t.preventDefault();break}}function O(t){a.disabled.value||(a.listboxState.value===0?(a.closeListbox(),E(()=>{var l;return(l=L(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(t.preventDefault(),a.openListbox(),oa(()=>{var l;return(l=L(a.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let m=Fe(u(()=>({as:e.as,type:p.type})),a.buttonRef);return()=>{var t,l;let S={open:a.listboxState.value===0,disabled:a.disabled.value,value:a.value.value},{id:v,...c}=e,f={ref:a.buttonRef,id:v,type:m.value,"aria-haspopup":"listbox","aria-controls":(t=L(a.optionsRef))==null?void 0:t.id,"aria-expanded":a.listboxState.value===0,"aria-labelledby":a.labelRef.value?[(l=L(a.labelRef))==null?void 0:l.id,v].join(" "):void 0,disabled:a.disabled.value===!0?!0:void 0,onKeydown:o,onKeyup:b,onClick:O};return x({ourProps:f,theirProps:c,slot:S,attrs:p,slots:w,name:"ListboxButton"})}}}),sa=X({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${ne()}`}},setup(e,{attrs:p,slots:w,expose:B}){let a=_("ListboxOptions"),o=V(null);B({el:a.optionsRef,$el:a.optionsRef});function b(t){switch(o.value&&clearTimeout(o.value),t.key){case I.Space:if(a.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),a.search(t.key);case I.Enter:if(t.preventDefault(),t.stopPropagation(),a.activeOptionIndex.value!==null){let l=a.options.value[a.activeOptionIndex.value];a.select(l.dataRef.value)}a.mode.value===0&&(a.closeListbox(),E(()=>{var l;return(l=L(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case N(a.orientation.value,{vertical:I.ArrowDown,horizontal:I.ArrowRight}):return t.preventDefault(),t.stopPropagation(),a.goToOption(R.Next);case N(a.orientation.value,{vertical:I.ArrowUp,horizontal:I.ArrowLeft}):return t.preventDefault(),t.stopPropagation(),a.goToOption(R.Previous);case I.Home:case I.PageUp:return t.preventDefault(),t.stopPropagation(),a.goToOption(R.First);case I.End:case I.PageDown:return t.preventDefault(),t.stopPropagation(),a.goToOption(R.Last);case I.Escape:t.preventDefault(),t.stopPropagation(),a.closeListbox(),E(()=>{var l;return(l=L(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case I.Tab:t.preventDefault(),t.stopPropagation();break;default:t.key.length===1&&(a.search(t.key),o.value=setTimeout(()=>a.clearSearch(),350));break}}let O=Ee(),m=u(()=>O!==null?(O.value&Z.Open)===Z.Open:a.listboxState.value===0);return()=>{var t,l,S,v;let c={open:a.listboxState.value===0},{id:f,...M}=e,A={"aria-activedescendant":a.activeOptionIndex.value===null||(t=a.options.value[a.activeOptionIndex.value])==null?void 0:t.id,"aria-multiselectable":a.mode.value===1?!0:void 0,"aria-labelledby":(v=(l=L(a.labelRef))==null?void 0:l.id)!=null?v:(S=L(a.buttonRef))==null?void 0:S.id,"aria-orientation":a.orientation.value,id:f,onKeydown:b,role:"listbox",tabIndex:0,ref:a.optionsRef};return x({ourProps:A,theirProps:M,slot:c,attrs:p,slots:w,features:re.RenderStrategy|re.Static,visible:m.value,name:"ListboxOptions"})}}}),ra=X({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${ne()}`}},setup(e,{slots:p,attrs:w,expose:B}){let a=_("ListboxOption"),o=V(null);B({el:o,$el:o});let b=u(()=>a.activeOptionIndex.value!==null?a.options.value[a.activeOptionIndex.value].id===e.id:!1),O=u(()=>N(a.mode.value,{0:()=>a.compare(H(a.value.value),H(e.value)),1:()=>H(a.value.value).some(r=>a.compare(H(r),H(e.value)))})),m=u(()=>N(a.mode.value,{1:()=>{var r;let k=H(a.value.value);return((r=a.options.value.find(n=>k.some(i=>a.compare(H(i),H(n.dataRef.value)))))==null?void 0:r.id)===e.id},0:()=>O.value})),t=xe(o),l=u(()=>({disabled:e.disabled,value:e.value,get textValue(){return t()},domRef:o}));le(()=>a.registerOption(e.id,l)),ye(()=>a.unregisterOption(e.id)),le(()=>{te([a.listboxState,O],()=>{a.listboxState.value===0&&O.value&&N(a.mode.value,{1:()=>{m.value&&a.goToOption(R.Specific,e.id)},0:()=>{a.goToOption(R.Specific,e.id)}})},{immediate:!0})}),he(()=>{a.listboxState.value===0&&b.value&&a.activationTrigger.value!==0&&E(()=>{var r,k;return(k=(r=L(o))==null?void 0:r.scrollIntoView)==null?void 0:k.call(r,{block:"nearest"})})});function S(r){if(e.disabled)return r.preventDefault();a.select(e.value),a.mode.value===0&&(a.closeListbox(),E(()=>{var k;return(k=L(a.buttonRef))==null?void 0:k.focus({preventScroll:!0})}))}function v(){if(e.disabled)return a.goToOption(R.Nothing);a.goToOption(R.Specific,e.id)}let c=$e();function f(r){c.update(r)}function M(r){c.wasMoved(r)&&(e.disabled||b.value||a.goToOption(R.Specific,e.id,0))}function A(r){c.wasMoved(r)&&(e.disabled||b.value&&a.goToOption(R.Nothing))}return()=>{let{disabled:r}=e,k={active:b.value,selected:O.value,disabled:r},{id:n,value:i,disabled:s,...d}=e,C={id:n,ref:o,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":O.value,disabled:void 0,onClick:S,onFocus:v,onPointerenter:f,onMouseenter:f,onPointermove:M,onMousemove:M,onPointerleave:A,onMouseleave:A};return x({ourProps:C,theirProps:d,slot:k,attrs:w,slots:p,name:"ListboxOption"})}}});const da=X({components:{HCombobox:Te,HComboboxButton:Pe,HComboboxOptions:He,HComboboxOption:ze,HComboboxInput:qe,HListbox:ia,HListboxButton:ua,HListboxOptions:sa,HListboxOption:ra,UIcon:de,UAvatar:pe},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>T.ui.input.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>T.ui.select.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>T.ui.selectMenu.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:()=>T.ui.select.default.size,validator(e){return Object.keys(T.ui.select.size).includes(e)}},color:{type:String,default:()=>T.ui.select.default.color,validator(e){return[...T.ui.colors,...Object.keys(T.ui.select.color)].includes(e)}},variant:{type:String,default:()=>T.ui.select.default.variant,validator(e){return[...Object.keys(T.ui.select.variant),...Object.values(T.ui.select.color).flatMap(p=>Object.keys(p))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","open","close","change"],setup(e,{emit:p,attrs:w,slots:B}){const a=Se(),o=u(()=>ue({},e.ui,a.ui.select)),b=u(()=>ue({},e.uiMenu,a.ui.selectMenu)),O=u(()=>Me({},e.popper,b.value.popper)),[m,t]=Ae(O.value),{emitFormBlur:l,emitFormChange:S,formGroup:v}=Ve(),c=u(()=>{var g;return(g=v==null?void 0:v.error)!=null&&g.value?"red":e.color}),f=u(()=>{var g;return((g=v==null?void 0:v.size)==null?void 0:g.value)??e.size}),M=V(""),A=V(),r=u(()=>se(o.value.wrapper,w.class)),k=u(()=>{var z,K;const g=((K=(z=o.value.color)==null?void 0:z[c.value])==null?void 0:K[e.variant])||o.value.variant[e.variant];return se(Q(o.value.base,o.value.rounded,"text-left cursor-default",o.value.size[f.value],o.value.gap[f.value],e.padded?o.value.padding[f.value]:"p-0",g==null?void 0:g.replaceAll("{color}",c.value),(n.value||B.leading)&&o.value.leading.padding[f.value],(i.value||B.trailing)&&o.value.trailing.padding[f.value],"inline-flex items-center"),e.selectClass)}),n=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),i=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),s=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),d=u(()=>e.loading&&!n.value?e.loadingIcon:e.trailingIcon||e.icon),C=u(()=>Q(o.value.icon.leading.wrapper,o.value.icon.leading.pointer,o.value.icon.leading.padding[f.value])),j=u(()=>Q(o.value.icon.base,a.ui.colors.includes(c.value)&&o.value.icon.color.replaceAll("{color}",c.value),o.value.icon.size[f.value],e.loading&&"animate-spin")),Y=u(()=>Q(o.value.icon.trailing.wrapper,o.value.icon.trailing.pointer,o.value.icon.trailing.padding[f.value])),ee=u(()=>Q(o.value.icon.base,a.ui.colors.includes(c.value)&&o.value.icon.color.replaceAll("{color}",c.value),o.value.icon.size[f.value],e.loading&&!n.value&&"animate-spin")),oe=typeof e.searchable=="function"?ea(e.searchable,e.debounce):void 0,be=Re(async()=>e.searchable&&oe?await oe(M.value):M.value===""?e.options:e.options.filter(g=>{var z;return((z=e.searchAttributes)!=null&&z.length?e.searchAttributes:[e.optionAttribute]).some(K=>typeof g=="string"?g.search(new RegExp(M.value,"i"))!==-1:g[K]&&g[K].search(new RegExp(M.value,"i"))!==-1)})),fe=u(()=>M.value===""?null:{[e.optionAttribute]:M.value});te(t,g=>{g?p("open"):(p("close"),l())});function me(g){var z;M.value&&((z=A.value)!=null&&z.$el)&&(M.value="",A.value.$el.value=""),p("update:modelValue",g),p("change",g),S()}return{attrs:_e(w,["class"]),uiMenu:b,trigger:m,container:t,isLeading:n,isTrailing:i,wrapperClass:r,selectClass:k,leadingIconName:s,leadingIconClass:j,leadingWrapperIconClass:C,trailingIconName:d,trailingIconClass:ee,trailingWrapperIconClass:Y,filteredOptions:be,queryOption:fe,query:M,onUpdate:me}}}),pa=["value","required"],va=["disabled"],ca={key:0,class:"block truncate"},ba={key:1,class:"block truncate"},fa={class:"truncate"},ma={class:"block truncate"};function ga(e,p,w,B,a,o){const b=de,O=Ie("HComboboxInput"),m=pe;return y(),q(J(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.modelValue,multiple:e.multiple,disabled:e.disabled||e.loading,as:"div",class:h(e.wrapperClass),"onUpdate:modelValue":e.onUpdate},{default:F(({open:t})=>[e.required?(y(),P("input",{key:0,value:e.modelValue,required:e.required,class:"absolute inset-0 w-px opacity-0 cursor-default",tabindex:"-1","aria-hidden":"true"},null,8,pa)):D("",!0),(y(),q(J(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:"inline-flex w-full"},{default:F(()=>[$(e.$slots,"default",{open:t,disabled:e.disabled,loading:e.loading},()=>[U("button",ae({class:e.selectClass,disabled:e.disabled||e.loading,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(y(),P("span",{key:0,class:h(e.leadingWrapperIconClass)},[$(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[G(b,{name:e.leadingIconName,class:h(e.leadingIconClass)},null,8,["name","class"])])],2)):D("",!0),$(e.$slots,"label",{},()=>[e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length?(y(),P("span",ca,W(e.modelValue.length)+" selected",1)):!e.multiple&&e.modelValue?(y(),P("span",ba,W(typeof e.modelValue=="string"?e.modelValue:e.modelValue[e.optionAttribute]),1)):(y(),P("span",{key:2,class:h(["block truncate",e.uiMenu.placeholder])},W(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(y(),P("span",{key:1,class:h(e.trailingWrapperIconClass)},[$(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[G(b,{name:e.trailingIconName,class:h(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):D("",!0)],16,va)])]),_:2},1536)),t?(y(),P("div",{key:1,ref:"container",class:h([e.uiMenu.container,e.uiMenu.width])},[G(ke,ae({appear:""},e.uiMenu.transition),{default:F(()=>[(y(),q(J(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:h([e.uiMenu.base,e.uiMenu.divide,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:F(()=>[e.searchable?(y(),q(O,{key:0,ref:"searchInput","display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:h(e.uiMenu.input),onChange:p[0]||(p[0]=l=>e.query=l.target.value)},null,8,["display-value","placeholder","class"])):D("",!0),(y(!0),P(ve,null,Ce(e.filteredOptions,(l,S)=>(y(),q(J(e.searchable?"HComboboxOption":"HListboxOption"),{key:S,as:"template",value:e.valueAttribute?l[e.valueAttribute]:l,disabled:l.disabled},{default:F(({active:v,selected:c,disabled:f})=>[U("li",{class:h([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,v?e.uiMenu.option.active:e.uiMenu.option.inactive,c&&e.uiMenu.option.selected,f&&e.uiMenu.option.disabled])},[U("div",{class:h(e.uiMenu.option.container)},[$(e.$slots,"option",{option:l,active:v,selected:c},()=>[l.icon?(y(),q(b,{key:0,name:l.icon,class:h([e.uiMenu.option.icon.base,v?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,l.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):l.avatar?(y(),q(m,ae({key:1},{size:e.uiMenu.option.avatar.size,...l.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):l.chip?(y(),P("span",{key:2,class:h(e.uiMenu.option.chip.base),style:we({background:`#${l.chip}`})},null,6)):D("",!0),U("span",fa,W(typeof l=="string"?l:l[e.optionAttribute]),1)])],2),c?(y(),P("span",{key:0,class:h([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[G(b,{name:e.selectedIcon,class:h(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):D("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.queryOption&&!e.filteredOptions.length?(y(),q(J(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.queryOption,as:"template"},{default:F(({active:l,selected:S})=>[U("li",{class:h([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,l?e.uiMenu.option.active:e.uiMenu.option.inactive])},[U("div",{class:h(e.uiMenu.option.container)},[$(e.$slots,"option-create",{option:e.queryOption,active:l,selected:S},()=>[U("span",ma,'Create "'+W(e.queryOption[e.optionAttribute])+'"',1)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!e.filteredOptions.length?(y(),P("p",{key:2,class:h(e.uiMenu.option.empty)},[$(e.$slots,"option-empty",{query:e.query},()=>[Le(' No results for "'+W(e.query)+'". ',1)])],2)):D("",!0)]),_:3},8,["class"]))]),_:3},16)],2)):D("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const Fa=Be(da,[["render",ga]]);export{Fa as default};