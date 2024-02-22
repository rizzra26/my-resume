import W from"./Icon.80fc5aa0.js";import{f as Q,q as r,s as R,i as n,v as X,x as k,J as g,o as s,c as d,a as Y,F as S,z as N,G as Z,A as v,C as O,K as B,t as w,b as j}from"./entry.66808c07.js";import{u as G}from"./useFormGroup.8a63fcfc.js";import{_}from"./_plugin-vue_export-helper.c27b6911.js";import{o as x}from"./omit.2383c4bc.js";import{g as A}from"./get.55859130.js";import"./index.c111b088.js";import"./_Uint8Array.6f9c1fd4.js";const ee=Q({components:{UIcon:W},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>r.ui.input.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>r.ui.select.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},size:{type:String,default:()=>r.ui.select.default.size,validator(e){return Object.keys(r.ui.select.size).includes(e)}},color:{type:String,default:()=>r.ui.select.default.color,validator(e){return[...r.ui.colors,...Object.keys(r.ui.select.color)].includes(e)}},variant:{type:String,default:()=>r.ui.select.default.variant,validator(e){return[...Object.keys(r.ui.select.variant),...Object.values(r.ui.select.color).flatMap(o=>Object.keys(o))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},selectClass:{type:String,default:null},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:o,attrs:I,slots:C}){const m=R(),l=n(()=>X({},e.ui,m.ui.select)),{emitFormChange:b,formGroup:t}=G(),u=n(()=>{var a;return(a=t==null?void 0:t.error)!=null&&a.value?"red":e.color}),i=n(()=>{var a;return((a=t==null?void 0:t.size)==null?void 0:a.value)??e.size}),z=a=>{o("update:modelValue",a.target.value)},q=a=>{b(),o("change",a)},F=a=>A(a,e.valueAttribute,A(a,e.optionAttribute)),M=a=>A(a,e.optionAttribute,A(a,e.valueAttribute)),h=a=>["string","number","boolean"].includes(typeof a)?{[e.valueAttribute]:a,[e.optionAttribute]:a}:{...a,[e.valueAttribute]:F(a),[e.optionAttribute]:M(a)},$=n(()=>e.options.map(a=>h(a))),V=n(()=>e.placeholder?[{[e.valueAttribute]:"",[e.optionAttribute]:e.placeholder,disabled:!0},...$.value]:$.value),T=n(()=>{const a=h(e.modelValue),c=V.value.find(y=>y[e.valueAttribute]===a[e.valueAttribute]);return c?c[e.valueAttribute]:""}),L=n(()=>k(l.value.wrapper,I.class)),P=n(()=>{var c,y;const a=((y=(c=l.value.color)==null?void 0:c[u.value])==null?void 0:y[e.variant])||l.value.variant[e.variant];return k(g(l.value.base,l.value.rounded,l.value.size[i.value],e.padded?l.value.padding[i.value]:"p-0",a==null?void 0:a.replaceAll("{color}",u.value),(f.value||C.leading)&&l.value.leading.padding[i.value],(p.value||C.trailing)&&l.value.trailing.padding[i.value]),e.selectClass)}),f=n(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),p=n(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),J=n(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),U=n(()=>e.loading&&!f.value?e.loadingIcon:e.trailingIcon||e.icon),D=n(()=>g(l.value.icon.leading.wrapper,l.value.icon.leading.pointer,l.value.icon.leading.padding[i.value])),E=n(()=>g(l.value.icon.base,m.ui.colors.includes(u.value)&&l.value.icon.color.replaceAll("{color}",u.value),l.value.icon.size[i.value],e.loading&&"animate-spin")),K=n(()=>g(l.value.icon.trailing.wrapper,l.value.icon.trailing.pointer,l.value.icon.trailing.padding[i.value])),H=n(()=>g(l.value.icon.base,m.ui.colors.includes(u.value)&&l.value.icon.color.replaceAll("{color}",u.value),l.value.icon.size[i.value],e.loading&&!f.value&&"animate-spin"));return{attrs:x(I,["class"]),ui:l,normalizedOptionsWithPlaceholder:V,normalizedValue:T,isLeading:f,isTrailing:p,wrapperClass:L,selectClass:P,leadingIconName:J,leadingIconClass:E,leadingWrapperIconClass:D,trailingIconName:U,trailingIconClass:H,trailingWrapperIconClass:K,onInput:z,onChange:q}}}),ae=["name","value","required","disabled"],le=["value","label"],te=["value","selected","disabled","textContent"],ne=["value","selected","disabled","textContent"];function ie(e,o,I,C,m,l){const b=W;return s(),d("div",{class:v(e.wrapperClass)},[Y("select",Z({name:e.name,value:e.modelValue,required:e.required,disabled:e.disabled||e.loading,class:["form-select",e.selectClass]},e.attrs,{onInput:o[0]||(o[0]=(...t)=>e.onInput&&e.onInput(...t)),onChange:o[1]||(o[1]=(...t)=>e.onChange&&e.onChange(...t))}),[(s(!0),d(S,null,N(e.normalizedOptionsWithPlaceholder,(t,u)=>(s(),d(S,null,[t.children?(s(),d("optgroup",{key:`${t[e.valueAttribute]}-optgroup-${u}`,value:t[e.valueAttribute],label:t[e.optionAttribute]},[(s(!0),d(S,null,N(t.children,(i,z)=>(s(),d("option",{key:`${i[e.valueAttribute]}-${u}-${z}`,value:i[e.valueAttribute],selected:i[e.valueAttribute]===e.normalizedValue,disabled:i.disabled,textContent:w(i[e.optionAttribute])},null,8,te))),128))],8,le)):(s(),d("option",{key:`${t[e.valueAttribute]}-${u}`,value:t[e.valueAttribute],selected:t[e.valueAttribute]===e.normalizedValue,disabled:t.disabled,textContent:w(t[e.optionAttribute])},null,8,ne))],64))),256))],16,ae),e.isLeading&&e.leadingIconName||e.$slots.leading?(s(),d("span",{key:0,class:v(e.leadingWrapperIconClass)},[O(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[j(b,{name:e.leadingIconName,class:v(e.leadingIconClass)},null,8,["name","class"])])],2)):B("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(s(),d("span",{key:1,class:v(e.trailingWrapperIconClass)},[O(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[j(b,{name:e.trailingIconName,class:v(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):B("",!0)],2)}const me=_(ee,[["render",ie]]);export{me as default};
