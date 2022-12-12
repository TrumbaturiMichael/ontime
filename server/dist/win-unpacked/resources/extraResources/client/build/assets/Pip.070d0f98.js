import{aq as j,r,aj as E,g as i,j as e,A as I,m as T}from"./index.884ef809.js";import{P as w,_ as A}from"./Paginator.19594edc.js";import{S as R}from"./Empty.a3aa49f7.js";import{u as _,m as L,N as $}from"./useRuntimeStylesheet.cce38e2c.js";import{f as q}from"./dateConfig.7f97a25b.js";import{p as l}from"./index.a719180e.js";import{u as M}from"./utils.71c85371.js";import"./index.esm.36fc65dd.js";import"./useFullscreen.e5cbfcf7.js";import"./index.641207f5.js";const z={showSeconds:!0,format:"hh:mm:ss a"};function B(f){const{time:n,backstageEvents:c,selectedId:u,general:s,viewSettings:m}=f,{shouldRender:v}=_((m==null?void 0:m.overrideStyles)&&j),h=r.exports.useRef(null),[N,g]=r.exports.useState(null),[p,y]=r.exports.useState(0),[b,x]=r.exports.useState(0),[k]=M(L);if(r.exports.useEffect(()=>{document.title="ontime - Pip"},[]),r.exports.useEffect(()=>{if(c==null)return;const o=[...c];let a=0;for(const t of o)t.type==="block"?a=0:t.type==="delay"?a=a+t.duration:t.type==="event"&&a>0&&(t.timeStart+=a,t.timeEnd+=a);g(o.filter(t=>t.type==="event"))},[c]),!v)return null;const S=s.backstageInfo!==""&&s.backstageInfo!=null;let d=q(Math.abs(n.running),!0);n.isNegative&&(d=`-${d}`);const P=E(n.clock,z);return i("div",{className:`pip ${k?"mirror":""}`,children:[e($,{}),e("div",{className:"event-title",children:s.title}),i("div",{className:"today-container",children:[i("div",{className:"today-header-block",children:[e("div",{className:"label",children:"Today"}),e("div",{className:"nav",children:p>1&&[...Array(p).keys()].map(o=>e("div",{className:o===b?"nav-item nav-item--selected":"nav-item"},o))})]}),e(w,{selectedId:u,events:N,isBackstage:!0,limit:14,time:20,setCurrentPage:x,setPageNumber:y})]}),e("div",{className:"pip-placeholder",ref:h,children:e(R,{className:"pip-placeholder__empty"})}),e(I,{children:S&&i(T.div,{className:"info-container",children:[e("div",{className:"label",children:"Info"}),e("div",{className:"info-message",children:s.backstageInfo}),e("div",{className:"qr",children:s.url!=null&&s.url!==""&&e(A,{value:s.url,size:window.innerWidth/12,level:"L"})})]})}),i("div",{className:"clock-container",children:[e("div",{className:"label",children:"Time Now"}),e("div",{className:"clock",children:P})]}),i("div",{className:"timer-container",children:[e("div",{className:"label",children:"Stage Timer"}),e("div",{className:"timer",children:d})]})]})}B.propTypes={time:l.exports.object,backstageEvents:l.exports.object,selectedId:l.exports.string,general:l.exports.object,viewSettings:l.exports.object};export{B as default};