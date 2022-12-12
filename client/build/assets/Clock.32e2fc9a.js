import{aq as C,ar as v,r as b,aj as $,g as j,j as g}from"./index.884ef809.js";import{u as z}from"./utils.71c85371.js";import{u as S,m as w,N as B}from"./useRuntimeStylesheet.cce38e2c.js";import"./index.esm.36fc65dd.js";import"./useFullscreen.e5cbfcf7.js";import"./index.641207f5.js";import"./index.a719180e.js";const I={showSeconds:!0,format:"hh:mm:ss a"};function E(p){const{time:x,viewSettings:r}=p,{shouldRender:N}=S((r==null?void 0:r.overrideStyles)&&C),[e]=v(),[k]=z(w);if(b.exports.useEffect(()=>{document.title="ontime - Clock"},[]),!N)return null;const t={size:1},a=e.get("key");a&&(t.keyColour=`#${a}`);const c=e.get("text");c&&(t.textColour=`#${c}`);const l=e.get("textbg");l&&(t.textBackground=`#${l}`);const f=e.get("font");f&&(t.font=f);const n=e.get("size");n!==null&&typeof n<"u"&&(Number.isNaN(Number(n))||(t.size=Number(n)));const o=e.get("alignx");o&&(o==="start"||o==="center"||o==="end")&&(t.justifyContent=o);const s=e.get("aligny");s&&(s==="start"||s==="center"||s==="end")&&(t.alignItems=s);const m=e.get("offsetx");if(m){const i=Number(m);isNaN(i)||(t.left=`${i}px`)}const u=e.get("offsety");if(u){const i=Number(u);isNaN(i)||(t.top=`${i}px`)}const y=e.get("hidenav");t.hideNav=Boolean(y);const d=$(x.clock,I),h=d.replace("/:/g","");return j("div",{className:`clock-view ${k?"mirror":""}`,style:{backgroundColor:t.keyColour,color:t.textColour,justifyContent:t.justifyContent,alignItems:t.alignItems},"data-testid":"clock-view",children:[!(t!=null&&t.hideNav)&&g(B,{}),g("div",{className:"clock",style:{fontSize:`${89/(h.length-1)*(t.size||1)}vw`,fontFamily:t.font,top:t.top,left:t.left,backgroundColor:t.textBackground},children:d})]})}export{E as default};