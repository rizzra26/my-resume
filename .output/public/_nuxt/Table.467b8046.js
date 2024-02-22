import q from"./Checkbox.d7b1b35a.js";import G from"./Button.6a6c66ab.js";import P from"./Icon.80fc5aa0.js";import{f as ne,q as h,s as ae,i as y,v as oe,x as re,r as ue,Q as D,o as c,c as p,a as g,A as m,b as E,K as v,F as B,z as R,C as A,G as L,V as w,B as M,t as $,L as ie,d as se}from"./entry.66808c07.js";import{_ as le}from"./_plugin-vue_export-helper.c27b6911.js";import{b as de,t as W,i as H,a as U,c as ce,d as fe,o as J}from"./omit.2383c4bc.js";import{b as me}from"./_baseIteratee.e4fcdbf8.js";import{b as pe}from"./_baseMap.4757b82a.js";import{i as O,b as ge}from"./_Uint8Array.6f9c1fd4.js";import{g as be}from"./get.55859130.js";import"./useFormGroup.8a63fcfc.js";import"./index.c111b088.js";import"./Link.d12fb4d4.js";import"./nuxt-link.e9352679.js";import"./_baseIsEqual.edd4b790.js";function ye(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:de(e,t,n)}var Se="\\ud800-\\udfff",ke="\\u0300-\\u036f",he="\\ufe20-\\ufe2f",Ce="\\u20d0-\\u20ff",ve=ke+he+Ce,Ae="\\ufe0e\\ufe0f",we="\\u200d",$e=RegExp("["+we+Se+ve+Ae+"]");function Z(e){return $e.test(e)}function Ve(e){return e.split("")}var z="\\ud800-\\udfff",Be="\\u0300-\\u036f",Re="\\ufe20-\\ufe2f",Me="\\u20d0-\\u20ff",Ue=Be+Re+Me,Oe="\\ufe0e\\ufe0f",je="["+z+"]",j="["+Ue+"]",F="\\ud83c[\\udffb-\\udfff]",Fe="(?:"+j+"|"+F+")",K="[^"+z+"]",N="(?:\\ud83c[\\udde6-\\uddff]){2}",Q="[\\ud800-\\udbff][\\udc00-\\udfff]",Te="\\u200d",X=Fe+"?",Y="["+Oe+"]?",De="(?:"+Te+"(?:"+[K,N,Q].join("|")+")"+Y+X+")*",Ee=Y+X+De,Le="(?:"+[K+j+"?",j,N,Q,je].join("|")+")",He=RegExp(F+"(?="+F+")|"+Le+Ee,"g");function Je(e){return e.match(He)||[]}function qe(e){return Z(e)?Je(e):Ve(e)}function Ge(e){return function(t){t=W(t);var n=Z(t)?qe(t):void 0,r=n?n[0]:t.charAt(0),s=n?ye(n,1).join(""):t.slice(1);return r[e]()+s}}var Pe=Ge("toUpperCase");const We=Pe;function Ze(e){return We(W(e).toLowerCase())}function ze(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function Ke(e,t){if(e!==t){var n=e!==void 0,r=e===null,s=e===e,u=H(e),l=t!==void 0,i=t===null,d=t===t,a=H(t);if(!i&&!a&&!u&&e>t||u&&l&&d&&!i&&!a||r&&l&&d||!n&&d||!s)return 1;if(!r&&!u&&!a&&e<t||a&&n&&s&&!r&&!u||i&&n&&s||!l&&s||!d)return-1}return 0}function Ne(e,t,n){for(var r=-1,s=e.criteria,u=t.criteria,l=s.length,i=n.length;++r<l;){var d=Ke(s[r],u[r]);if(d){if(r>=i)return d;var a=n[r];return d*(a=="desc"?-1:1)}}return e.index-t.index}function Qe(e,t,n){t.length?t=U(t,function(u){return O(u)?function(l){return ce(l,u.length===1?u[0]:u)}:u}):t=[fe];var r=-1;t=U(t,ge(me));var s=pe(e,function(u,l,i){var d=U(t,function(a){return a(u)});return{criteria:d,index:++r,value:u}});return ze(s,function(u,l){return Ne(u,l,n)})}function Xe(e,t,n,r){return e==null?[]:(O(t)||(t=t==null?[]:[t]),n=r?void 0:n,O(n)||(n=n==null?[]:[n]),Qe(e,t,n))}function Ye(e,t){return e===t}const Ie=ne({components:{UButton:G,UIcon:P,UCheckbox:q},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>Ye},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortButton:{type:Object,default:()=>h.ui.table.default.sortButton},sortAscIcon:{type:String,default:()=>h.ui.table.default.sortAscIcon},sortDescIcon:{type:String,default:()=>h.ui.table.default.sortDescIcon},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>h.ui.table.default.loadingState},emptyState:{type:Object,default:()=>h.ui.table.default.emptyState},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:t,attrs:n}){const r=ae(),s=y(()=>oe({},e.ui,r.ui.table)),u=y(()=>re(s.value.wrapper,n.class)),l=y(()=>e.columns??Object.keys(J(e.rows[0]??{},["click"])).map(o=>({key:o,label:Ze(o),sortable:!1}))),i=ue(D({},e.sort,{column:null,direction:"asc"})),d=y(()=>{var S;if(!((S=i.value)!=null&&S.column))return e.rows;const{column:o,direction:f}=i.value;return Xe(e.rows,o,f)}),a=y({get(){return e.modelValue},set(o){t("update:modelValue",o)}}),k=y(()=>a.value&&a.value.length>0&&a.value.length<e.rows.length),b=y(()=>e.emptyState===null?null:{...s.value.default.emptyState,...e.emptyState}),V=y(()=>e.loadingState===null?null:{...s.value.default.loadingState,...e.loadingState});function C(o,f){if(typeof e.by=="string"){const S=e.by;return(o==null?void 0:o[S])===(f==null?void 0:f[S])}return e.by(o,f)}function I(o){return e.modelValue?a.value.some(f=>C(w(f),w(o))):!1}function _(o){if(i.value.column===o.key){const f=!o.direction||o.direction==="asc"?"desc":"asc";i.value.direction===f?i.value=D({},e.sort,{column:null,direction:"asc"}):i.value.direction=i.value.direction==="asc"?"desc":"asc"}else i.value={column:o.key,direction:o.direction||"asc"}}function T(o){n.onSelect&&n.onSelect(o)}function x(){e.rows.forEach(o=>{a.value.some(f=>C(w(f),w(o)))||T(o)})}function ee(o){o.target.checked?x():a.value=[]}function te(o,f,S="Failed to get cell value"){return be(o,f,S)}return{attrs:J(n,["class"]),ui:s,wrapperClass:u,sort:i,columns:l,rows:d,selected:a,indeterminate:k,emptyState:b,loadingState:V,isSelected:I,onSort:_,onSelect:T,onChange:ee,getRowData:te}}}),_e={key:0,scope:"col",class:"ps-4"},xe={key:1},et={key:0},tt=["colspan"],nt={key:1},at=["colspan"],ot=["onClick"],rt={key:0,class:"ps-4"};function ut(e,t,n,r,s,u){const l=q,i=G,d=P;return c(),p("div",L({class:e.wrapperClass},e.attrs),[g("table",{class:m([e.ui.base,e.ui.divide])},[g("thead",{class:m(e.ui.thead)},[g("tr",{class:m(e.ui.tr.base)},[e.modelValue?(c(),p("th",_e,[E(l,{checked:e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate,onChange:e.onChange},null,8,["checked","indeterminate","onChange"])])):v("",!0),(c(!0),p(B,null,R(e.columns,(a,k)=>(c(),p("th",{key:k,scope:"col",class:m([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.class])},[A(e.$slots,`${a.key}-header`,{column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(c(),M(i,L({key:0},{...e.ui.default.sortButton,...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:b=>e.onSort(a)}),null,16,["icon","label","onClick"])):(c(),p("span",xe,$(a[e.columnAttribute]),1))])],2))),128))],2)],2),g("tbody",{class:m(e.ui.tbody)},[e.loadingState&&e.loading?(c(),p("tr",et,[g("td",{colspan:e.columns.length+(e.modelValue?1:0)},[A(e.$slots,"loading-state",{},()=>[g("div",{class:m(e.ui.loadingState.wrapper)},[e.loadingState.icon?(c(),M(d,{key:0,name:e.loadingState.icon,class:m(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):v("",!0),g("p",{class:m(e.ui.loadingState.label)},$(e.loadingState.label),3)],2)])],8,tt)])):e.emptyState&&!e.rows.length?(c(),p("tr",nt,[g("td",{colspan:e.columns.length+(e.modelValue?1:0)},[A(e.$slots,"empty-state",{},()=>[g("div",{class:m(e.ui.emptyState.wrapper)},[e.emptyState.icon?(c(),M(d,{key:0,name:e.emptyState.icon,class:m(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):v("",!0),g("p",{class:m(e.ui.emptyState.label)},$(e.emptyState.label),3)],2)])],8,at)])):(c(!0),p(B,{key:2},R(e.rows,(a,k)=>(c(),p("tr",{key:k,class:m([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active]),onClick:()=>e.onSelect(a)},[e.modelValue?(c(),p("td",rt,[E(l,{modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=b=>e.selected=b),value:a,onClick:t[1]||(t[1]=ie(()=>{},["stop"]))},null,8,["modelValue","value"])])):v("",!0),(c(!0),p(B,null,R(e.columns,(b,V)=>(c(),p("td",{key:V,class:m([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size])},[A(e.$slots,`${b.key}-data`,{column:b,row:a,index:k,getRowData:C=>e.getRowData(a,b.key,C)},()=>[se($(e.getRowData(a,b.key)),1)])],2))),128))],10,ot))),128))],2)],2)],16)}const vt=le(Ie,[["render",ut]]);export{vt as default};