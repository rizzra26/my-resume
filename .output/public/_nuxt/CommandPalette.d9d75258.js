import ge from"./Icon.80fc5aa0.js";import ye from"./Button.6a6c66ab.js";import{r as B,n as q,i as C,f as Le,q as D,s as Oe,v as $e,j as ae,Q as xe,x as Ne,J as Re,y as W,o as x,B as T,w as Y,H as Pe,a as J,A as N,K as z,b as Fe,G as ce,I as Te,c as Be,F as je,z as le,Y as He,C as ue,D as Ve,E as De,t as Ke}from"./entry.66808c07.js";import{t as O,u as We}from"./index.c111b088.js";import ze from"./CommandPaletteGroup.04c83074.js";import{_ as Ue}from"./_plugin-vue_export-helper.c27b6911.js";import{a as Ge,e as Qe,o as Ye}from"./omit.2383c4bc.js";import{b as be}from"./_baseIteratee.e4fcdbf8.js";import{a as Je,b as Xe}from"./_baseMap.4757b82a.js";import{i as Me}from"./_Uint8Array.6f9c1fd4.js";import{J as qe,Q as Ze,X as et}from"./combobox.ba16db3b.js";import"./Link.d12fb4d4.js";import"./nuxt-link.e9352679.js";import"./_baseIsEqual.edd4b790.js";import"./Avatar.435434ed.js";import"./Kbd.44adb2ee.js";import"./get.55859130.js";import"./dom.fe5c7340.js";import"./use-tracked-pointer.6cc53776.js";import"./focus-management.72b6de4c.js";import"./open-closed.5468058a.js";import"./use-resolve-button-type.f3369464.js";import"./use-outside-click.cbd3df0e.js";import"./hidden.7bbe89e6.js";import"./use-controllable.b4046a6e.js";import"./disposables.57da4964.js";import"./micro-task.89dcd6af.js";function tt(e,t,s,n){for(var r=-1,i=e==null?0:e.length;++r<i;){var o=e[r];t(n,o,s(o),e)}return n}function st(e,t,s,n){return Je(e,function(r,i,o){t(n,r,s(r),o)}),n}function nt(e,t){return function(s,n){var r=Me(s)?tt:st,i=t?t():{};return r(s,e,be(n),i)}}function rt(e,t){var s=Me(e)?Ge:Xe;return s(e,be(t))}var ot=Object.prototype,it=ot.hasOwnProperty,at=nt(function(e,t,s){it.call(e,s)?e[s].push(t):Qe(e,s,[t])});const ct=at;function _(e){return Array.isArray?Array.isArray(e):Ie(e)==="[object Array]"}const lt=1/0;function ut(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-lt?"-0":t}function ht(e){return e==null?"":ut(e)}function E(e){return typeof e=="string"}function Se(e){return typeof e=="number"}function dt(e){return e===!0||e===!1||ft(e)&&Ie(e)=="[object Boolean]"}function ve(e){return typeof e=="object"}function ft(e){return ve(e)&&e!==null}function S(e){return e!=null}function X(e){return!e.trim().length}function Ie(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const pt="Incorrect 'index' type",mt=e=>`Invalid value for key ${e}`,gt=e=>`Pattern length exceeds max of ${e}.`,yt=e=>`Missing ${e} property in key`,bt=e=>`Property 'weight' in key '${e}' must be a positive integer`,he=Object.prototype.hasOwnProperty;class Mt{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(n=>{let r=Ee(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ee(e){let t=null,s=null,n=null,r=1,i=null;if(E(e)||_(e))n=e,t=de(e),s=Z(e);else{if(!he.call(e,"name"))throw new Error(yt("name"));const o=e.name;if(n=o,he.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(bt(o));t=de(o),s=Z(o),i=e.getFn}return{path:t,id:s,weight:r,src:n,getFn:i}}function de(e){return _(e)?e:e.split(".")}function Z(e){return _(e)?e.join("."):e}function St(e,t){let s=[],n=!1;const r=(i,o,a)=>{if(S(i))if(!o[a])s.push(i);else{let c=o[a];const l=i[c];if(!S(l))return;if(a===o.length-1&&(E(l)||Se(l)||dt(l)))s.push(ht(l));else if(_(l)){n=!0;for(let u=0,f=l.length;u<f;u+=1)r(l[u],o,a+1)}else o.length&&r(l,o,a+1)}};return r(e,E(t)?t.split("."):t,0),n?s:s[0]}const vt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},It={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Et={location:0,threshold:.6,distance:100},At={useExtendedSearch:!1,getFn:St,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var h={...It,...vt,...Et,...At};const wt=/[^ ]+/g;function Ct(e=1,t=3){const s=new Map,n=Math.pow(10,t);return{get(r){const i=r.match(wt).length;if(s.has(i))return s.get(i);const o=1/Math.pow(i,.5*e),a=parseFloat(Math.round(o*n)/n);return s.set(i,a),a},clear(){s.clear()}}}class oe{constructor({getFn:t=h.getFn,fieldNormWeight:s=h.fieldNormWeight}={}){this.norm=Ct(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,E(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();E(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!S(t)||X(t))return;let n={v:t,i:s,n:this.norm.get(t)};this.records.push(n)}_addObject(t,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let o=r.getFn?r.getFn(t):this.getFn(t,r.path);if(S(o)){if(_(o)){let a=[];const c=[{nestedArrIndex:-1,value:o}];for(;c.length;){const{nestedArrIndex:l,value:u}=c.pop();if(S(u))if(E(u)&&!X(u)){let f={v:u,i:l,n:this.norm.get(u)};a.push(f)}else _(u)&&u.forEach((f,p)=>{c.push({nestedArrIndex:p,value:f})})}n.$[i]=a}else if(E(o)&&!X(o)){let a={v:o,n:this.norm.get(o)};n.$[i]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function Ae(e,t,{getFn:s=h.getFn,fieldNormWeight:n=h.fieldNormWeight}={}){const r=new oe({getFn:s,fieldNormWeight:n});return r.setKeys(e.map(Ee)),r.setSources(t),r.create(),r}function _t(e,{getFn:t=h.getFn,fieldNormWeight:s=h.fieldNormWeight}={}){const{keys:n,records:r}=e,i=new oe({getFn:t,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function U(e,{errors:t=0,currentLocation:s=0,expectedLocation:n=0,distance:r=h.distance,ignoreLocation:i=h.ignoreLocation}={}){const o=t/e.length;if(i)return o;const a=Math.abs(n-s);return r?o+a/r:a?1:o}function kt(e=[],t=h.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let o=e.length;i<o;i+=1){let a=e[i];a&&n===-1?n=i:!a&&n!==-1&&(r=i-1,r-n+1>=t&&s.push([n,r]),n=-1)}return e[i-1]&&i-n>=t&&s.push([n,i-1]),s}const R=32;function Lt(e,t,s,{location:n=h.location,distance:r=h.distance,threshold:i=h.threshold,findAllMatches:o=h.findAllMatches,minMatchCharLength:a=h.minMatchCharLength,includeMatches:c=h.includeMatches,ignoreLocation:l=h.ignoreLocation}={}){if(t.length>R)throw new Error(gt(R));const u=t.length,f=e.length,p=Math.max(0,Math.min(n,f));let m=i,g=p;const b=a>1||c,A=b?Array(f):[];let v;for(;(v=e.indexOf(t,g))>-1;){let d=U(t,{currentLocation:v,expectedLocation:p,distance:r,ignoreLocation:l});if(m=Math.min(d,m),g=v+u,b){let y=0;for(;y<u;)A[v+y]=1,y+=1}}g=-1;let k=[],w=1,P=u+f;const Q=1<<u-1;for(let d=0;d<u;d+=1){let y=0,M=P;for(;y<M;)U(t,{errors:d,currentLocation:p+M,expectedLocation:p,distance:r,ignoreLocation:l})<=m?y=M:P=M,M=Math.floor((P-y)/2+y);P=M;let F=Math.max(1,p-M+1),V=o?f:Math.min(p+M,f)+u,L=Array(V+2);L[V+1]=(1<<d)-1;for(let I=V;I>=F;I-=1){let K=I-1,ie=s[e.charAt(K)];if(b&&(A[K]=+!!ie),L[I]=(L[I+1]<<1|1)&ie,d&&(L[I]|=(k[I+1]|k[I])<<1|1|k[I+1]),L[I]&Q&&(w=U(t,{errors:d,currentLocation:K,expectedLocation:p,distance:r,ignoreLocation:l}),w<=m)){if(m=w,g=K,g<=p)break;F=Math.max(1,2*p-g)}}if(U(t,{errors:d+1,currentLocation:p,expectedLocation:p,distance:r,ignoreLocation:l})>m)break;k=L}const H={isMatch:g>=0,score:Math.max(.001,w)};if(b){const d=kt(A,a);d.length?c&&(H.indices=d):H.isMatch=!1}return H}function Ot(e){let t={};for(let s=0,n=e.length;s<n;s+=1){const r=e.charAt(s);t[r]=(t[r]||0)|1<<n-s-1}return t}class we{constructor(t,{location:s=h.location,threshold:n=h.threshold,distance:r=h.distance,includeMatches:i=h.includeMatches,findAllMatches:o=h.findAllMatches,minMatchCharLength:a=h.minMatchCharLength,isCaseSensitive:c=h.isCaseSensitive,ignoreLocation:l=h.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:l},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(p,m)=>{this.chunks.push({pattern:p,alphabet:Ot(p),startIndex:m})},f=this.pattern.length;if(f>R){let p=0;const m=f%R,g=f-m;for(;p<g;)u(this.pattern.substr(p,R),p),p+=R;if(m){const b=f-R;u(this.pattern.substr(b),b)}}else u(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let g={isMatch:!0,score:0};return n&&(g.indices=[[0,t.length-1]]),g}const{location:r,distance:i,threshold:o,findAllMatches:a,minMatchCharLength:c,ignoreLocation:l}=this.options;let u=[],f=0,p=!1;this.chunks.forEach(({pattern:g,alphabet:b,startIndex:A})=>{const{isMatch:v,score:k,indices:w}=Lt(t,g,b,{location:r+A,distance:i,threshold:o,findAllMatches:a,minMatchCharLength:c,includeMatches:n,ignoreLocation:l});v&&(p=!0),f+=k,v&&w&&(u=[...u,...w])});let m={isMatch:p,score:p?f/this.chunks.length:1};return p&&n&&(m.indices=u),m}}class ${constructor(t){this.pattern=t}static isMultiMatch(t){return fe(t,this.multiRegex)}static isSingleMatch(t){return fe(t,this.singleRegex)}search(){}}function fe(e,t){const s=e.match(t);return s?s[1]:null}class $t extends ${constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class xt extends ${constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Nt extends ${constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Rt extends ${constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Pt extends ${constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Ft extends ${constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Ce extends ${constructor(t,{location:s=h.location,threshold:n=h.threshold,distance:r=h.distance,includeMatches:i=h.includeMatches,findAllMatches:o=h.findAllMatches,minMatchCharLength:a=h.minMatchCharLength,isCaseSensitive:c=h.isCaseSensitive,ignoreLocation:l=h.ignoreLocation}={}){super(t),this._bitapSearch=new we(t,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class _e extends ${constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,n;const r=[],i=this.pattern.length;for(;(n=t.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const ee=[$t,_e,Nt,Rt,Ft,Pt,xt,Ce],pe=ee.length,Tt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Bt="|";function jt(e,t={}){return e.split(Bt).map(s=>{let n=s.trim().split(Tt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=n.length;i<o;i+=1){const a=n[i];let c=!1,l=-1;for(;!c&&++l<pe;){const u=ee[l];let f=u.isMultiMatch(a);f&&(r.push(new u(f,t)),c=!0)}if(!c)for(l=-1;++l<pe;){const u=ee[l];let f=u.isSingleMatch(a);if(f){r.push(new u(f,t));break}}}return r})}const Ht=new Set([Ce.type,_e.type]);class Vt{constructor(t,{isCaseSensitive:s=h.isCaseSensitive,includeMatches:n=h.includeMatches,minMatchCharLength:r=h.minMatchCharLength,ignoreLocation:i=h.ignoreLocation,findAllMatches:o=h.findAllMatches,location:a=h.location,threshold:c=h.threshold,distance:l=h.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:a,threshold:c,distance:l},this.pattern=s?t:t.toLowerCase(),this.query=jt(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let i=0,o=[],a=0;for(let c=0,l=s.length;c<l;c+=1){const u=s[c];o.length=0,i=0;for(let f=0,p=u.length;f<p;f+=1){const m=u[f],{isMatch:g,indices:b,score:A}=m.search(t);if(g){if(i+=1,a+=A,n){const v=m.constructor.type;Ht.has(v)?o=[...o,...b]:o.push(b)}}else{a=0,i=0,o.length=0;break}}if(i){let f={isMatch:!0,score:a/i};return n&&(f.indices=o),f}}return{isMatch:!1,score:1}}}const te=[];function Dt(...e){te.push(...e)}function se(e,t){for(let s=0,n=te.length;s<n;s+=1){let r=te[s];if(r.condition(e,t))return new r(e,t)}return new we(e,t)}const G={AND:"$and",OR:"$or"},ne={PATH:"$path",PATTERN:"$val"},re=e=>!!(e[G.AND]||e[G.OR]),Kt=e=>!!e[ne.PATH],Wt=e=>!_(e)&&ve(e)&&!re(e),me=e=>({[G.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function ke(e,t,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const o=Kt(r);if(!o&&i.length>1&&!re(r))return n(me(r));if(Wt(r)){const c=o?r[ne.PATH]:i[0],l=o?r[ne.PATTERN]:r[c];if(!E(l))throw new Error(mt(c));const u={keyId:Z(c),pattern:l};return s&&(u.searcher=se(l,t)),u}let a={children:[],operator:i[0]};return i.forEach(c=>{const l=r[c];_(l)&&l.forEach(u=>{a.children.push(n(u))})}),a};return re(e)||(e=me(e)),n(e)}function zt(e,{ignoreFieldNorm:t=h.ignoreFieldNorm}){e.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:o})=>{const a=r?r.weight:null;n*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:i))}),s.score=n})}function Ut(e,t){const s=e.matches;t.matches=[],S(s)&&s.forEach(n=>{if(!S(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let o={indices:r,value:i};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),t.matches.push(o)})}function Gt(e,t){t.score=e.score}function Qt(e,t,{includeMatches:s=h.includeMatches,includeScore:n=h.includeScore}={}){const r=[];return s&&r.push(Ut),n&&r.push(Gt),e.map(i=>{const{idx:o}=i,a={item:t[o],refIndex:o};return r.length&&r.forEach(c=>{c(i,a)}),a})}class j{constructor(t,s={},n){this.options={...h,...s},this.options.useExtendedSearch,this._keyStore=new Mt(this.options.keys),this.setCollection(t,n)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof oe))throw new Error(pt);this._myIndex=s||Ae(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){S(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];t(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:a}=this.options;let c=E(t)?E(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return zt(c,{ignoreFieldNorm:a}),i&&c.sort(o),Se(s)&&s>-1&&(c=c.slice(0,s)),Qt(c,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(t){const s=se(t,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:o,n:a})=>{if(!S(i))return;const{isMatch:c,score:l,indices:u}=s.searchIn(i);c&&r.push({item:i,idx:o,matches:[{score:l,value:i,norm:a,indices:u}]})}),r}_searchLogical(t){const s=ke(t,this.options),n=(a,c,l)=>{if(!a.children){const{keyId:f,searcher:p}=a,m=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:p});return m&&m.length?[{idx:l,item:c,matches:m}]:[]}const u=[];for(let f=0,p=a.children.length;f<p;f+=1){const m=a.children[f],g=n(m,c,l);if(g.length)u.push(...g);else if(a.operator===G.AND)return[]}return u},r=this._myIndex.records,i={},o=[];return r.forEach(({$:a,i:c})=>{if(S(a)){let l=n(s,a,c);l.length&&(i[c]||(i[c]={idx:c,item:a,matches:[]},o.push(i[c])),l.forEach(({matches:u})=>{i[c].matches.push(...u)}))}}),o}_searchObjectList(t){const s=se(t,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:a})=>{if(!S(o))return;let c=[];n.forEach((l,u)=>{c.push(...this._findMatches({key:l,value:o[u],searcher:s}))}),c.length&&i.push({idx:a,item:o,matches:c})}),i}_findMatches({key:t,value:s,searcher:n}){if(!S(s))return[];let r=[];if(_(s))s.forEach(({v:i,i:o,n:a})=>{if(!S(i))return;const{isMatch:c,score:l,indices:u}=n.searchIn(i);c&&r.push({score:l,key:t,value:i,idx:o,norm:a,indices:u})});else{const{v:i,n:o}=s,{isMatch:a,score:c,indices:l}=n.searchIn(i);a&&r.push({score:c,key:t,value:i,norm:o,indices:l})}return r}}j.version="6.6.2";j.createIndex=Ae;j.parseIndex=_t;j.config=h;j.parseQuery=ke;Dt(Vt);function Yt(e,t,s){const n=()=>{var o,a;return new j((o=O(t))!=null?o:[],(a=O(s))==null?void 0:a.fuseOptions)},r=B(n());q(()=>{var o;return(o=O(s))==null?void 0:o.fuseOptions},()=>{r.value=n()},{deep:!0}),q(()=>O(t),o=>{r.value.setCollection(o)},{deep:!0});const i=C(()=>{const o=O(s);if(o!=null&&o.matchAllWhenSearchEmpty&&!O(e))return O(t).map((c,l)=>({item:c,refIndex:l}));const a=o==null?void 0:o.resultLimit;return r.value.search(O(e),a?{limit:a}:void 0)});return{fuse:r,results:i}}const Jt=Le({components:{HCombobox:qe,HComboboxInput:Ze,HComboboxOptions:et,UIcon:ge,UButton:ye,CommandPaletteGroup:ze},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:null},by:{type:String,default:"id"},multiple:{type:Boolean,default:!1},nullable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},groups:{type:Array,default:()=>[]},icon:{type:String,default:()=>D.ui.commandPalette.default.icon},loadingIcon:{type:String,default:()=>D.ui.commandPalette.default.loadingIcon},selectedIcon:{type:String,default:()=>D.ui.commandPalette.default.selectedIcon},closeButton:{type:Object,default:()=>D.ui.commandPalette.default.closeButton},emptyState:{type:Object,default:()=>D.ui.commandPalette.default.emptyState},placeholder:{type:String,default:"Search..."},groupAttribute:{type:String,default:"label"},commandAttribute:{type:String,default:"label"},autoselect:{type:Boolean,default:!0},autoclear:{type:Boolean,default:!0},debounce:{type:Number,default:200},fuse:{type:Object,default:()=>({})},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close"],setup(e,{emit:t,attrs:s,expose:n}){const r=Oe(),i=C(()=>$e({},e.ui,r.ui.commandPalette)),o=B(""),a=B(),c=B(null),l=B(!1);ae(()=>{e.autoselect&&P()}),ae(()=>{setTimeout(()=>{var M;const d=(M=a.value)==null?void 0:M.$.provides;if(!d)return;const y=Object.getOwnPropertySymbols(d);c.value=y.length&&d[y[0]]},200)});const u=C(()=>xe({},e.fuse,{fuseOptions:{keys:[e.commandAttribute]},resultLimit:12,matchAllWhenSearchEmpty:!0})),f=C(()=>e.groups.filter(d=>!d.search).reduce((d,y)=>d.concat(y.commands.map(M=>({...M,group:y.key}))),[])),p=B({}),{results:m}=Yt(o,f,u),g=C(()=>[...rt(ct(m.value,d=>d.item.group),(d,y)=>{const M=d.map(F=>{const{item:V,...L}=F;return{...V,...L}});return{...e.groups.find(F=>F.key===y),commands:M.slice(0,u.value.resultLimit)}}),...e.groups.filter(d=>!!d.search).map(d=>({...d,commands:(p.value[d.key]||[]).slice(0,u.value.resultLimit)})).filter(d=>d.commands.length)]),b=We(async()=>{const d=e.groups.filter(y=>!!y.search);d.length&&(l.value=!0,await Promise.all(d.map(async y=>{p.value[y.key]=await y.search(o.value)})),l.value=!1)},e.debounce);q(o,()=>{b(),setTimeout(()=>{var d;(d=a.value)==null||d.$el.dispatchEvent(new KeyboardEvent("keydown",{key:"PageUp"}))},0)});const A=C(()=>Ne(i.value.wrapper,s.class)),v=C(()=>(e.loading||l.value)&&e.loadingIcon?e.loadingIcon:e.icon),k=C(()=>Re(i.value.input.icon.base,i.value.input.icon.size,(e.loading||l.value)&&e.loadingIcon&&"animate-spin")),w=C(()=>({...i.value.default.emptyState,...e.emptyState}));function P(){setTimeout(()=>{var d;(d=a.value)==null||d.$el.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowDown"}))},0)}function Q(d){t("update:modelValue",d,{query:o.value}),e.autoclear&&setTimeout(()=>{o.value=""},0)}function H(){o.value?o.value="":t("close")}return n({query:o,updateQuery:d=>{o.value=d},comboboxApi:c,results:m}),{attrs:Ye(s,["class"]),ui:i,groups:g,comboboxInput:a,query:o,wrapperClass:A,iconName:v,iconClass:k,emptyState:w,onSelect:Q,onClear:H}}});function Xt(e,t,s,n,r,i){const o=ge,a=W("HComboboxInput"),c=ye,l=W("CommandPaletteGroup"),u=W("HComboboxOptions"),f=W("HCombobox");return x(),T(f,ce({by:e.by,"model-value":e.modelValue,multiple:e.multiple,nullable:e.nullable,class:e.wrapperClass},e.attrs,{as:"div","onUpdate:modelValue":e.onSelect}),{default:Y(()=>[Pe(J("div",{class:N(e.ui.input.wrapper)},[e.iconName?(x(),T(o,{key:0,name:e.iconName,class:N(e.iconClass),"aria-hidden":"true"},null,8,["name","class"])):z("",!0),Fe(a,{ref:"comboboxInput",value:e.query,class:N([e.ui.input.base,e.ui.input.size,e.ui.input.height,e.ui.input.padding,e.icon&&e.ui.input.icon.padding]),placeholder:e.placeholder,autocomplete:"off",onChange:t[0]||(t[0]=p=>e.query=p.target.value)},null,8,["value","class","placeholder"]),e.closeButton?(x(),T(c,ce({key:1},{...e.ui.default.closeButton,...e.closeButton},{class:e.ui.input.closeButton,"aria-label":"Close",onClick:e.onClear}),null,16,["class","onClick"])):z("",!0)],2),[[Te,e.searchable]]),e.groups.length?(x(),T(u,{key:0,static:"",hold:"",as:"div","aria-label":"Commands",class:N(e.ui.container)},{default:Y(()=>[(x(!0),Be(je,null,le(e.groups,p=>(x(),T(l,{key:p.key,query:e.query,group:p,"group-attribute":e.groupAttribute,"command-attribute":e.commandAttribute,"selected-icon":e.selectedIcon,ui:e.ui},He({_:2},[le(e.$slots,(m,g)=>({name:g,fn:Y(b=>[ue(e.$slots,g,Ve(De(b)))])}))]),1032,["query","group","group-attribute","command-attribute","selected-icon","ui"]))),128))]),_:3},8,["class"])):e.emptyState?ue(e.$slots,"empty-state",{key:1},()=>[J("div",{class:N(e.ui.emptyState.wrapper)},[e.emptyState.icon?(x(),T(o,{key:0,name:e.emptyState.icon,class:N(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):z("",!0),J("p",{class:N(e.query?e.ui.emptyState.queryLabel:e.ui.emptyState.label)},Ke(e.query?e.emptyState.queryLabel:e.emptyState.label),3)],2)]):z("",!0)]),_:3},16,["by","model-value","multiple","nullable","class","onUpdate:modelValue"])}const Cs=Ue(Jt,[["render",Xt]]);export{Cs as default};