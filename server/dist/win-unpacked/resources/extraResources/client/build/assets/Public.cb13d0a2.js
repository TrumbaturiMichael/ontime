import{aq as S,r as n,aj as T,g as s,j as e,A as d,m}from"./index.884ef809.js";import{P as k,_ as A}from"./Paginator.19594edc.js";import{u as I,m as _,N as L}from"./useRuntimeStylesheet.cce38e2c.js";import{t as p,T as u}from"./animation.0a5ecaf4.js";import{u as R}from"./utils.71c85371.js";import{p as i}from"./index.a719180e.js";import"./Empty.a3aa49f7.js";import"./index.esm.36fc65dd.js";import"./useFullscreen.e5cbfcf7.js";import"./index.641207f5.js";const q={showSeconds:!0,format:"hh:mm:ss a"};function V(b){const{publ:l,publicTitle:t,time:v,events:N,publicSelectedId:h,general:a,viewSettings:r}=b,{shouldRender:x}=I((r==null?void 0:r.overrideStyles)&&S),[o,f]=n.exports.useState(0),[w,g]=n.exports.useState(0),[y]=R(_);if(n.exports.useEffect(()=>{document.title="ontime - Public Screen"},[]),!x)return null;const P=l.text!==""&&l.visible,j=T(v.clock,q);return s("div",{className:`public-screen ${y?"mirror":""}`,children:[e(L,{}),e("div",{className:"event-title",children:a.title}),e(d,{children:t.showNow&&e(m.div,{className:"event now",variants:p,initial:"hidden",animate:"visible",exit:"exit",children:e(u,{label:"Now",type:"now",title:t.titleNow,subtitle:t.subtitleNow,presenter:t.presenterNow})},"now")}),e(d,{children:t.showNext&&e(m.div,{className:"event next",variants:p,initial:"hidden",animate:"visible",exit:"exit",children:e(u,{label:"Next",type:"next",title:t.titleNext,subtitle:t.subtitleNext,presenter:t.presenterNext})},"next")}),s("div",{className:"today-container",children:[s("div",{className:"today-header-block",children:[e("div",{className:"label",children:"Today"}),e("div",{className:"nav",children:o>1&&[...Array(o).keys()].map(c=>e("div",{className:c===w?"nav-item nav-item--selected":"nav-item"},c))})]}),e(k,{selectedId:h,events:N,isBackstage:!0,setCurrentPage:g,setPageNumber:f})]}),s("div",{className:P?"public-container":"public-container public-container--hidden",children:[e("div",{className:"label",children:"Public message"}),e("div",{className:"message",children:l.text})]}),s("div",{className:"clock-container",children:[e("div",{className:"label",children:"Time Now"}),e("div",{className:"clock",children:j})]}),s("div",{className:"info",children:[e("div",{className:"label",children:"Info"}),e("div",{className:"info__message",children:a.publicInfo}),e("div",{className:"qr",children:a.url!=null&&a.url!==""&&e(A,{value:a.url,size:window.innerWidth/12,level:"L"})})]})]})}V.propTypes={publ:i.exports.object,publicTitle:i.exports.object,time:i.exports.object,events:i.exports.object,publicSelectedId:i.exports.string,general:i.exports.object,viewSettings:i.exports.object};export{V as default};