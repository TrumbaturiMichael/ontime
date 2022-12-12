import{b as U,a as Le,f as Me,u as Te,o as Ae,j as x,r,g as Be,R as he,m as me,ab as J,n as Y,ac as Fe,A as _e}from"./index.884ef809.js";import{d as Ke}from"./index.esm.e0c4a303.js";import{m as ee,I as Re}from"./index.esm.36fc65dd.js";import{r as Ne}from"./index.641207f5.js";import{a as Oe,s as ne}from"./utils.71c85371.js";import{T as He}from"./ontimeConfig.8353ce02.js";var oe={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},Ue=U("span",{baseStyle:oe});Ue.displayName="VisuallyHidden";var Ve=U("input",{baseStyle:oe});Ve.displayName="VisuallyHiddenInput";var de=!1,Q=null,H=!1,te=new Set,je=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function We(e){return!(e.metaKey||!je&&e.altKey||e.ctrlKey)}function ae(e,o){te.forEach(t=>t(e,o))}function fe(e){H=!0,We(e)&&(Q="keyboard",ae("keyboard",e))}function O(e){Q="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(H=!0,ae("pointer",e))}function qe(e){e.target===window||e.target===document||(H||(Q="keyboard",ae("keyboard",e)),H=!1)}function Ge(){H=!1}function pe(){return Q!=="pointer"}function ze(){if(typeof window>"u"||de)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...t){H=!0,e.apply(this,t)},document.addEventListener("keydown",fe,!0),document.addEventListener("keyup",fe,!0),window.addEventListener("focus",qe,!0),window.addEventListener("blur",Ge,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",O,!0),document.addEventListener("pointermove",O,!0),document.addEventListener("pointerup",O,!0)):(document.addEventListener("mousedown",O,!0),document.addEventListener("mousemove",O,!0),document.addEventListener("mouseup",O,!0)),de=!0}function Xe(e){ze(),e(pe());const o=()=>e(pe());return te.add(o),()=>{te.delete(o)}}var[wt,Qe]=Le({name:"CheckboxGroupContext",strict:!1}),$e=(...e)=>e.filter(Boolean).join(" "),p=e=>e?"":void 0;function y(...e){return function(t){e.some(a=>(a==null||a(t),t==null?void 0:t.defaultPrevented))}}function Je(...e){return function(t){e.forEach(a=>{a==null||a(t)})}}function Ye(e){const o=me;return"custom"in o&&typeof o.custom=="function"?o.custom(e):o(e)}var ke=Ye(U.svg);function Ze(e){return x(ke,{width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:x("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function et(e){return x(ke,{width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4},...e,children:x("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function tt({open:e,children:o}){return x(_e,{initial:!1,children:e&&he.createElement(me.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},o)})}function nt(e){const{isIndeterminate:o,isChecked:t,...a}=e;return x(tt,{open:t||o,children:x(o?et:Ze,{...a})})}function ot(e,o=[]){const t=Object.assign({},e);for(const a of o)a in t&&delete t[a];return t}function at(e={}){const o=Ke(e),{isDisabled:t,isReadOnly:a,isRequired:c,isInvalid:i,id:l,onBlur:d,onFocus:M,"aria-describedby":C}=o,{defaultChecked:g,isChecked:I,isFocusable:D,onChange:S,isIndeterminate:k,name:u,value:F,tabIndex:E=void 0,"aria-label":m,"aria-labelledby":b,"aria-invalid":h,...V}=e,w=ot(V,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),P=J(S),L=J(d),_=J(M),[K,j]=r.exports.useState(!1),[T,R]=r.exports.useState(!1),[W,q]=r.exports.useState(!1),[N,n]=r.exports.useState(!1);r.exports.useEffect(()=>Xe(j),[]);const f=r.exports.useRef(null),[G,re]=r.exports.useState(!0),[we,z]=r.exports.useState(!!g),$=I!==void 0,v=$?I:we,ie=r.exports.useCallback(s=>{if(a||t){s.preventDefault();return}$||z(v?s.target.checked:k?!0:s.target.checked),P==null||P(s)},[a,t,v,$,k,P]);Y(()=>{f.current&&(f.current.indeterminate=Boolean(k))},[k]),Fe(()=>{t&&R(!1)},[t,R]),Y(()=>{const s=f.current;!(s!=null&&s.form)||(s.form.onreset=()=>{z(!!g)})},[]);const ce=t&&!D,le=r.exports.useCallback(s=>{s.key===" "&&n(!0)},[n]),ue=r.exports.useCallback(s=>{s.key===" "&&n(!1)},[n]);Y(()=>{if(!f.current)return;f.current.checked!==v&&z(f.current.checked)},[f.current]);const Ie=r.exports.useCallback((s={},A=null)=>{const B=X=>{T&&X.preventDefault(),n(!0)};return{...s,ref:A,"data-active":p(N),"data-hover":p(W),"data-checked":p(v),"data-focus":p(T),"data-focus-visible":p(T&&K),"data-indeterminate":p(k),"data-disabled":p(t),"data-invalid":p(i),"data-readonly":p(a),"aria-hidden":!0,onMouseDown:y(s.onMouseDown,B),onMouseUp:y(s.onMouseUp,()=>n(!1)),onMouseEnter:y(s.onMouseEnter,()=>q(!0)),onMouseLeave:y(s.onMouseLeave,()=>q(!1))}},[N,v,t,T,K,W,k,i,a]),De=r.exports.useCallback((s={},A=null)=>({...w,...s,ref:ee(A,B=>{!B||re(B.tagName==="LABEL")}),onClick:y(s.onClick,()=>{var B;G||((B=f.current)==null||B.click(),requestAnimationFrame(()=>{var X;(X=f.current)==null||X.focus()}))}),"data-disabled":p(t),"data-checked":p(v),"data-invalid":p(i)}),[w,t,v,i,G]),Se=r.exports.useCallback((s={},A=null)=>({...s,ref:ee(f,A),type:"checkbox",name:u,value:F,id:l,tabIndex:E,onChange:y(s.onChange,ie),onBlur:y(s.onBlur,L,()=>R(!1)),onFocus:y(s.onFocus,_,()=>R(!0)),onKeyDown:y(s.onKeyDown,le),onKeyUp:y(s.onKeyUp,ue),required:c,checked:v,disabled:ce,readOnly:a,"aria-label":m,"aria-labelledby":b,"aria-invalid":h?Boolean(h):i,"aria-describedby":C,"aria-disabled":t,style:oe}),[u,F,l,ie,L,_,le,ue,c,v,ce,a,m,b,h,i,C,t,E]),Pe=r.exports.useCallback((s={},A=null)=>({...s,ref:A,onMouseDown:y(s.onMouseDown,be),onTouchStart:y(s.onTouchStart,be),"data-disabled":p(t),"data-checked":p(v),"data-invalid":p(i)}),[v,t,i]);return{state:{isInvalid:i,isFocused:T,isChecked:v,isActive:N,isHovered:W,isIndeterminate:k,isDisabled:t,isReadOnly:a,isRequired:c},getRootProps:De,getCheckboxProps:Ie,getInputProps:Se,getLabelProps:Pe,htmlProps:w}}function be(e){e.preventDefault(),e.stopPropagation()}var st=U("span",{baseStyle:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0}}),rt=U("label",{baseStyle:{cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"}}),it=Me(function(o,t){const a=Qe(),c={...a,...o},i=Te("Checkbox",c),l=Ae(o),{spacing:d="0.5rem",className:M,children:C,iconColor:g,iconSize:I,icon:D=x(nt,{}),isChecked:S,isDisabled:k=a==null?void 0:a.isDisabled,onChange:u,inputProps:F,...E}=l;let m=S;(a==null?void 0:a.value)&&l.value&&(m=a.value.includes(l.value));let b=u;(a==null?void 0:a.onChange)&&l.value&&(b=Je(a.onChange,u));const{state:h,getInputProps:V,getCheckboxProps:w,getLabelProps:P,getRootProps:L}=at({...E,isDisabled:k,isChecked:m,onChange:b}),_=r.exports.useMemo(()=>({opacity:h.isChecked||h.isIndeterminate?1:0,transform:h.isChecked||h.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:I,color:g,...i.icon}),[g,I,h.isChecked,h.isIndeterminate,i.icon]),K=r.exports.cloneElement(D,{__css:_,isIndeterminate:h.isIndeterminate,isChecked:h.isChecked});return Be(rt,{__css:i.container,className:$e("chakra-checkbox",M),...L(),children:[x("input",{className:"chakra-checkbox__input",...V(F,t)}),x(st,{__css:i.control,className:"chakra-checkbox__control",...w(),children:K}),C&&he.createElement(U.span,{className:"chakra-checkbox__label",...P(),__css:{marginStart:d,...i.label}},C)]})});it.displayName="Checkbox";var ct=e=>e?"":void 0;function lt(){const e=r.exports.useRef(new Map),o=e.current,t=r.exports.useCallback((c,i,l,d)=>{e.current.set(l,{type:i,el:c,options:d}),c.addEventListener(i,l,d)},[]),a=r.exports.useCallback((c,i,l,d)=>{c.removeEventListener(i,l,d),e.current.delete(l)},[]);return r.exports.useEffect(()=>()=>{o.forEach((c,i)=>{a(c.el,c.type,i,c.options)})},[a,o]),{add:t,remove:a}}function Z(e){const o=e.target,{tagName:t,isContentEditable:a}=o;return t!=="INPUT"&&t!=="TEXTAREA"&&a!==!0}function It(e={}){const{ref:o,isDisabled:t,isFocusable:a,clickOnEnter:c=!0,clickOnSpace:i=!0,onMouseDown:l,onMouseUp:d,onClick:M,onKeyDown:C,onKeyUp:g,tabIndex:I,onMouseOver:D,onMouseLeave:S,...k}=e,[u,F]=r.exports.useState(!0),[E,m]=r.exports.useState(!1),b=lt(),h=n=>{!n||n.tagName!=="BUTTON"&&F(!1)},V=u?I:I||0,w=t&&!a,P=r.exports.useCallback(n=>{if(t){n.stopPropagation(),n.preventDefault();return}n.currentTarget.focus(),M==null||M(n)},[t,M]),L=r.exports.useCallback(n=>{E&&Z(n)&&(n.preventDefault(),n.stopPropagation(),m(!1),b.remove(document,"keyup",L,!1))},[E,b]),_=r.exports.useCallback(n=>{if(C==null||C(n),t||n.defaultPrevented||n.metaKey||!Z(n.nativeEvent)||u)return;const f=c&&n.key==="Enter";i&&n.key===" "&&(n.preventDefault(),m(!0)),f&&(n.preventDefault(),n.currentTarget.click()),b.add(document,"keyup",L,!1)},[t,u,C,c,i,b,L]),K=r.exports.useCallback(n=>{if(g==null||g(n),t||n.defaultPrevented||n.metaKey||!Z(n.nativeEvent)||u)return;i&&n.key===" "&&(n.preventDefault(),m(!1),n.currentTarget.click())},[i,u,t,g]),j=r.exports.useCallback(n=>{n.button===0&&(m(!1),b.remove(document,"mouseup",j,!1))},[b]),T=r.exports.useCallback(n=>{if(n.button!==0)return;if(t){n.stopPropagation(),n.preventDefault();return}u||m(!0),n.currentTarget.focus({preventScroll:!0}),b.add(document,"mouseup",j,!1),l==null||l(n)},[t,u,l,b,j]),R=r.exports.useCallback(n=>{n.button===0&&(u||m(!1),d==null||d(n))},[d,u]),W=r.exports.useCallback(n=>{if(t){n.preventDefault();return}D==null||D(n)},[t,D]),q=r.exports.useCallback(n=>{E&&(n.preventDefault(),m(!1)),S==null||S(n)},[E,S]),N=ee(o,h);return u?{...k,ref:N,type:"button","aria-disabled":w?void 0:t,disabled:w,onClick:P,onMouseDown:l,onMouseUp:d,onKeyUp:g,onKeyDown:C,onMouseOver:D,onMouseLeave:S}:{...k,ref:N,role:"button","data-active":ct(E),"aria-disabled":t?"true":void 0,tabIndex:w?void 0:V,onClick:P,onMouseDown:T,onMouseUp:R,onKeyUp:K,onKeyDown:_,onMouseOver:W,onMouseLeave:q}}function ve(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function ye(e){var t;if(!ve(e))return!1;const o=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof o.HTMLElement}function Dt(e){var t;var o;return(t=(o=xe(e))==null?void 0:o.defaultView)!=null?t:window}function xe(e){return ve(e)?e.ownerDocument:document}function St(e){return xe(e).activeElement}var Ce=e=>e.hasAttribute("tabindex"),ut=e=>Ce(e)&&e.tabIndex===-1;function dt(e){return Boolean(e.getAttribute("disabled"))===!0||Boolean(e.getAttribute("aria-disabled"))===!0}function ge(e){return e.parentElement&&ge(e.parentElement)?!0:e.hidden}function ft(e){const o=e.getAttribute("contenteditable");return o!=="false"&&o!=null}function Ee(e){if(!ye(e)||ge(e)||dt(e))return!1;const{localName:o}=e;if(["input","select","textarea","button"].indexOf(o)>=0)return!0;const a={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return o in a?a[o]():ft(e)?!0:Ce(e)}function Pt(e){return e?ye(e)&&Ee(e)&&!ut(e):!1}var pt=["input:not([disabled])","select:not([disabled])","textarea:not([disabled])","embed","iframe","object","a[href]","area[href]","button:not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],bt=pt.join(),ht=e=>e.offsetWidth>0&&e.offsetHeight>0;function Lt(e){const o=Array.from(e.querySelectorAll(bt));return o.unshift(e),o.filter(t=>Ee(t)&&ht(t))}function Mt(e){const{wasSelected:o,enabled:t,isSelected:a,mode:c="unmount"}=e;return!!(!t||a||c==="keepMounted"&&o)}var mt=Ne.GenIcon,Tt=function(o){return mt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M400 256H112"}}]})(o)};const se=Oe("ontime-eventSettings",{showQuickEntry:!1,startTimeIsLastEnd:!1,defaultPublic:!1}),At=ne(se,e=>e.showQuickEntry),Bt=ne(se,e=>e.startTimeIsLastEnd),Ft=ne(se,e=>e.defaultPublic);function _t(e){const{clickHandler:o,icon:t,size:a="xs",tooltip:c,openDelay:i=0,className:l,...d}=e;return x(He,{label:c,openDelay:i,children:x(Re,{...d,"aria-label":c,size:a,icon:t,onClick:o,className:l})})}export{it as C,Tt as I,_t as T,St as a,Dt as b,At as c,Ft as d,se as e,Lt as g,Pt as i,Mt as l,Bt as s,It as u};
