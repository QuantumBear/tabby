"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5966],{8914:function(e,t,r){let n;r.d(t,{M:function(){return f}});var l=r(65122),u=r(3546),a=r(79869),i=r(72205),o=r(17957);let c="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},f=(0,u.forwardRef)((e,t)=>{let{loop:r=!1,trapped:n=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...E}=e,[b,y]=(0,u.useState)(null),w=(0,o.W)(f),k=(0,o.W)(g),S=(0,u.useRef)(null),C=(0,a.e)(t,e=>y(e)),I=(0,u.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,u.useEffect)(()=>{if(n){function e(e){if(I.paused||!b)return;let t=e.target;b.contains(t)?S.current=t:p(S.current,{select:!0})}function t(e){if(I.paused||!b)return;let t=e.relatedTarget;null===t||b.contains(t)||p(S.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let r=new MutationObserver(function(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&p(b)});return b&&r.observe(b,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),r.disconnect()}}},[n,b,I.paused]),(0,u.useEffect)(()=>{if(b){h.add(I);let e=document.activeElement,t=b.contains(e);if(!t){let t=new CustomEvent(c,s);b.addEventListener(c,w),b.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let r=document.activeElement;for(let n of e)if(p(n,{select:t}),document.activeElement!==r)return}(v(b).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(b))}return()=>{b.removeEventListener(c,w),setTimeout(()=>{let t=new CustomEvent(d,s);b.addEventListener(d,k),b.dispatchEvent(t),t.defaultPrevented||p(null!=e?e:document.body,{select:!0}),b.removeEventListener(d,k),h.remove(I)},0)}}},[b,w,k,I]);let x=(0,u.useCallback)(e=>{if(!r&&!n||I.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,l=document.activeElement;if(t&&l){let t=e.currentTarget,[n,u]=function(e){let t=v(e),r=m(t,e),n=m(t.reverse(),e);return[r,n]}(t),a=n&&u;a?e.shiftKey||l!==u?e.shiftKey&&l===n&&(e.preventDefault(),r&&p(u,{select:!0})):(e.preventDefault(),r&&p(n,{select:!0})):l===t&&e.preventDefault()}},[r,n,I.paused]);return(0,u.createElement)(i.WV.div,(0,l.Z)({tabIndex:-1},E,{ref:C,onKeyDown:x}))});function v(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function m(e,t){for(let r of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(r,{upTo:t}))return r}function p(e,{select:t=!1}={}){if(e&&e.focus){var r;let n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&(r=e)instanceof HTMLInputElement&&"select"in r&&t&&e.select()}}let h=(n=[],{add(e){let t=n[0];e!==t&&(null==t||t.pause()),(n=g(n,e)).unshift(e)},remove(e){var t;null===(t=(n=g(n,e))[0])||void 0===t||t.resume()}});function g(e,t){let r=[...e],n=r.indexOf(t);return -1!==n&&r.splice(n,1),r}},53241:function(e,t,r){r.d(t,{mY:function(){return L}});var n=/[\\\/_+.#"@\[\(\{&]/,l=/[\\\/_+.#"@\[\(\{&]/g,u=/[\s-]/,a=/[\s-]/g;function i(e){return e.toLowerCase().replace(a," ")}var o=r(4318),c=r(3546),d=r(72205),s='[cmdk-group=""]',f='[cmdk-group-items=""]',v='[cmdk-item=""]',m=`${v}:not([aria-disabled="true"])`,p="cmdk-item-select",h="data-value",g=(e,t,r)=>{var o;return o=e,function e(t,r,i,o,c,d,s){if(d===r.length)return c===t.length?1:.99;var f=`${c},${d}`;if(void 0!==s[f])return s[f];for(var v,m,p,h,g=o.charAt(d),E=i.indexOf(g,c),b=0;E>=0;)(v=e(t,r,i,o,E+1,d+1,s))>b&&(E===c?v*=1:n.test(t.charAt(E-1))?(v*=.8,(p=t.slice(c,E-1).match(l))&&c>0&&(v*=Math.pow(.999,p.length))):u.test(t.charAt(E-1))?(v*=.9,(h=t.slice(c,E-1).match(a))&&c>0&&(v*=Math.pow(.999,h.length))):(v*=.17,c>0&&(v*=Math.pow(.999,E-c))),t.charAt(E)!==r.charAt(d)&&(v*=.9999)),(v<.1&&i.charAt(E-1)===o.charAt(d+1)||o.charAt(d+1)===o.charAt(d)&&i.charAt(E-1)!==o.charAt(d))&&.1*(m=e(t,r,i,o,E+1,d+2,s))>v&&(v=.1*m),v>b&&(b=v),E=i.indexOf(g,E+1);return s[f]=b,b}(o=r&&r.length>0?`${o+" "+r.join(" ")}`:o,t,i(o),i(t),0,0,{})},E=c.createContext(void 0),b=()=>c.useContext(E),y=c.createContext(void 0),w=()=>c.useContext(y),k=c.createContext(void 0),S=c.forwardRef((e,t)=>{let r=N(()=>{var t,r;return{search:"",value:null!=(r=null!=(t=e.value)?t:e.defaultValue)?r:"",filtered:{count:0,items:new Map,groups:new Set}}}),n=N(()=>new Set),l=N(()=>new Map),u=N(()=>new Map),a=N(()=>new Set),i=T(e),{label:o,children:b,value:w,onValueChange:k,filter:S,shouldFilter:C,loop:I,disablePointerSelection:x=!1,vimBindings:R=!0,...A}=e,M=c.useId(),L=c.useId(),V=c.useId(),K=c.useRef(null),W=P();F(()=>{if(void 0!==w){let e=w.trim();r.current.value=e,O.emit()}},[w]),F(()=>{W(6,H)},[]);let O=c.useMemo(()=>({subscribe:e=>(a.current.add(e),()=>a.current.delete(e)),snapshot:()=>r.current,setState:(e,t,n)=>{var l,u,a;if(!Object.is(r.current[e],t)){if(r.current[e]=t,"search"===e)j(),U(),W(1,Z);else if("value"===e&&(n||W(5,H),(null==(l=i.current)?void 0:l.value)!==void 0)){let e=null!=t?t:"";null==(a=(u=i.current).onValueChange)||a.call(u,e);return}O.emit()}},emit:()=>{a.current.forEach(e=>e())}}),[]),_=c.useMemo(()=>({value:(e,t,n)=>{var l;t!==(null==(l=u.current.get(e))?void 0:l.value)&&(u.current.set(e,{value:t,keywords:n}),r.current.filtered.items.set(e,q(t,n)),W(2,()=>{U(),O.emit()}))},item:(e,t)=>(n.current.add(e),t&&(l.current.has(t)?l.current.get(t).add(e):l.current.set(t,new Set([e]))),W(3,()=>{j(),U(),r.current.value||Z(),O.emit()}),()=>{u.current.delete(e),n.current.delete(e),r.current.filtered.items.delete(e);let t=z();W(4,()=>{j(),(null==t?void 0:t.getAttribute("id"))===e&&Z(),O.emit()})}),group:e=>(l.current.has(e)||l.current.set(e,new Set),()=>{u.current.delete(e),l.current.delete(e)}),filter:()=>i.current.shouldFilter,label:o||e["aria-label"],disablePointerSelection:x,listId:M,inputId:V,labelId:L,listInnerRef:K}),[]);function q(e,t){var n,l;let u=null!=(l=null==(n=i.current)?void 0:n.filter)?l:g;return e?u(e,r.current.search,t):0}function U(){if(!r.current.search||!1===i.current.shouldFilter)return;let e=r.current.filtered.items,t=[];r.current.filtered.groups.forEach(r=>{let n=l.current.get(r),u=0;n.forEach(t=>{u=Math.max(e.get(t),u)}),t.push([r,u])});let n=K.current;Y().sort((t,r)=>{var n,l;let u=t.getAttribute("id"),a=r.getAttribute("id");return(null!=(n=e.get(a))?n:0)-(null!=(l=e.get(u))?l:0)}).forEach(e=>{let t=e.closest(f);t?t.appendChild(e.parentElement===t?e:e.closest(`${f} > *`)):n.appendChild(e.parentElement===n?e:e.closest(`${f} > *`))}),t.sort((e,t)=>t[1]-e[1]).forEach(e=>{let t=K.current.querySelector(`${s}[${h}="${encodeURIComponent(e[0])}"]`);null==t||t.parentElement.appendChild(t)})}function Z(){let e=Y().find(e=>"true"!==e.getAttribute("aria-disabled")),t=null==e?void 0:e.getAttribute(h);O.setState("value",t||void 0)}function j(){var e,t,a,o;if(!r.current.search||!1===i.current.shouldFilter){r.current.filtered.count=n.current.size;return}r.current.filtered.groups=new Set;let c=0;for(let l of n.current){let n=q(null!=(t=null==(e=u.current.get(l))?void 0:e.value)?t:"",null!=(o=null==(a=u.current.get(l))?void 0:a.keywords)?o:[]);r.current.filtered.items.set(l,n),n>0&&c++}for(let[e,t]of l.current)for(let n of t)if(r.current.filtered.items.get(n)>0){r.current.filtered.groups.add(e);break}r.current.filtered.count=c}function H(){var e,t,r;let n=z();n&&((null==(e=n.parentElement)?void 0:e.firstChild)===n&&(null==(r=null==(t=n.closest(s))?void 0:t.querySelector('[cmdk-group-heading=""]'))||r.scrollIntoView({block:"nearest"})),n.scrollIntoView({block:"nearest"}))}function z(){var e;return null==(e=K.current)?void 0:e.querySelector(`${v}[aria-selected="true"]`)}function Y(){var e;return Array.from(null==(e=K.current)?void 0:e.querySelectorAll(m))}function B(e){let t=Y()[e];t&&O.setState("value",t.getAttribute(h))}function G(e){var t;let r=z(),n=Y(),l=n.findIndex(e=>e===r),u=n[l+e];null!=(t=i.current)&&t.loop&&(u=l+e<0?n[n.length-1]:l+e===n.length?n[0]:n[l+e]),u&&O.setState("value",u.getAttribute(h))}function J(e){let t=z(),r=null==t?void 0:t.closest(s),n;for(;r&&!n;)n=null==(r=e>0?function(e,t){let r=e.nextElementSibling;for(;r;){if(r.matches(t))return r;r=r.nextElementSibling}}(r,s):function(e,t){let r=e.previousElementSibling;for(;r;){if(r.matches(t))return r;r=r.previousElementSibling}}(r,s))?void 0:r.querySelector(m);n?O.setState("value",n.getAttribute(h)):G(e)}let Q=()=>B(Y().length-1),X=e=>{e.preventDefault(),e.metaKey?Q():e.altKey?J(1):G(1)},ee=e=>{e.preventDefault(),e.metaKey?B(0):e.altKey?J(-1):G(-1)};return c.createElement(d.WV.div,{ref:t,tabIndex:-1,...A,"cmdk-root":"",onKeyDown:e=>{var t;if(null==(t=A.onKeyDown)||t.call(A,e),!e.defaultPrevented)switch(e.key){case"n":case"j":R&&e.ctrlKey&&X(e);break;case"ArrowDown":X(e);break;case"p":case"k":R&&e.ctrlKey&&ee(e);break;case"ArrowUp":ee(e);break;case"Home":e.preventDefault(),B(0);break;case"End":e.preventDefault(),Q();break;case"Enter":if(!e.nativeEvent.isComposing&&229!==e.keyCode){e.preventDefault();let t=z();if(t){let e=new Event(p);t.dispatchEvent(e)}}}}},c.createElement("label",{"cmdk-label":"",htmlFor:_.inputId,id:_.labelId,style:$},o),D(e,e=>c.createElement(y.Provider,{value:O},c.createElement(E.Provider,{value:_},e))))}),C=c.forwardRef((e,t)=>{var r,n;let l=c.useId(),u=c.useRef(null),a=c.useContext(k),i=b(),o=T(e),s=null!=(n=null==(r=o.current)?void 0:r.forceMount)?n:null==a?void 0:a.forceMount;F(()=>{if(!s)return i.item(l,null==a?void 0:a.id)},[s]);let f=W(l,u,[e.value,e.children,u],e.keywords),v=w(),m=K(e=>e.value&&e.value===f.current),h=K(e=>!!s||!1===i.filter()||!e.search||e.filtered.items.get(l)>0);function g(){var e,t;E(),null==(t=(e=o.current).onSelect)||t.call(e,f.current)}function E(){v.setState("value",f.current,!0)}if(c.useEffect(()=>{let t=u.current;if(!(!t||e.disabled))return t.addEventListener(p,g),()=>t.removeEventListener(p,g)},[h,e.onSelect,e.disabled]),!h)return null;let{disabled:y,value:S,onSelect:C,forceMount:I,keywords:x,...R}=e;return c.createElement(d.WV.div,{ref:V([u,t]),...R,id:l,"cmdk-item":"",role:"option","aria-disabled":!!y,"aria-selected":!!m,"data-disabled":!!y,"data-selected":!!m,onPointerMove:y||i.disablePointerSelection?void 0:E,onClick:y?void 0:g},e.children)}),I=c.forwardRef((e,t)=>{let{heading:r,children:n,forceMount:l,...u}=e,a=c.useId(),i=c.useRef(null),o=c.useRef(null),s=c.useId(),f=b(),v=K(e=>!!l||!1===f.filter()||!e.search||e.filtered.groups.has(a));F(()=>f.group(a),[]),W(a,i,[e.value,e.heading,o]);let m=c.useMemo(()=>({id:a,forceMount:l}),[l]);return c.createElement(d.WV.div,{ref:V([i,t]),...u,"cmdk-group":"",role:"presentation",hidden:!v||void 0},r&&c.createElement("div",{ref:o,"cmdk-group-heading":"","aria-hidden":!0,id:s},r),D(e,e=>c.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?s:void 0},c.createElement(k.Provider,{value:m},e))))}),x=c.forwardRef((e,t)=>{let{alwaysRender:r,...n}=e,l=c.useRef(null),u=K(e=>!e.search);return r||u?c.createElement(d.WV.div,{ref:V([l,t]),...n,"cmdk-separator":"",role:"separator"}):null}),R=c.forwardRef((e,t)=>{let{onValueChange:r,...n}=e,l=null!=e.value,u=w(),a=K(e=>e.search),i=K(e=>e.value),o=b(),s=c.useMemo(()=>{var e;let t=null==(e=o.listInnerRef.current)?void 0:e.querySelector(`${v}[${h}="${encodeURIComponent(i)}"]`);return null==t?void 0:t.getAttribute("id")},[]);return c.useEffect(()=>{null!=e.value&&u.setState("search",e.value)},[e.value]),c.createElement(d.WV.input,{ref:t,...n,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":o.listId,"aria-labelledby":o.labelId,"aria-activedescendant":s,id:o.inputId,type:"text",value:l?e.value:a,onChange:e=>{l||u.setState("search",e.target.value),null==r||r(e.target.value)}})}),A=c.forwardRef((e,t)=>{let{children:r,label:n="Suggestions",...l}=e,u=c.useRef(null),a=c.useRef(null),i=b();return c.useEffect(()=>{if(a.current&&u.current){let e=a.current,t=u.current,r,n=new ResizeObserver(()=>{r=requestAnimationFrame(()=>{let r=e.offsetHeight;t.style.setProperty("--cmdk-list-height",r.toFixed(1)+"px")})});return n.observe(e),()=>{cancelAnimationFrame(r),n.unobserve(e)}}},[]),c.createElement(d.WV.div,{ref:V([u,t]),...l,"cmdk-list":"",role:"listbox","aria-label":n,id:i.listId},D(e,e=>c.createElement("div",{ref:V([a,i.listInnerRef]),"cmdk-list-sizer":""},e)))}),M=c.forwardRef((e,t)=>{let{open:r,onOpenChange:n,overlayClassName:l,contentClassName:u,container:a,...i}=e;return c.createElement(o.fC,{open:r,onOpenChange:n},c.createElement(o.h_,{container:a},c.createElement(o.aV,{"cmdk-overlay":"",className:l}),c.createElement(o.VY,{"aria-label":e.label,"cmdk-dialog":"",className:u},c.createElement(S,{ref:t,...i}))))}),L=Object.assign(S,{List:A,Item:C,Input:R,Group:I,Separator:x,Dialog:M,Empty:c.forwardRef((e,t)=>K(e=>0===e.filtered.count)?c.createElement(d.WV.div,{ref:t,...e,"cmdk-empty":"",role:"presentation"}):null),Loading:c.forwardRef((e,t)=>{let{progress:r,children:n,label:l="Loading...",...u}=e;return c.createElement(d.WV.div,{ref:t,...u,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":l},D(e,e=>c.createElement("div",{"aria-hidden":!0},e)))})});function T(e){let t=c.useRef(e);return F(()=>{t.current=e}),t}var F="undefined"==typeof window?c.useEffect:c.useLayoutEffect;function N(e){let t=c.useRef();return void 0===t.current&&(t.current=e()),t}function V(e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}function K(e){let t=w(),r=()=>e(t.snapshot());return c.useSyncExternalStore(t.subscribe,r,r)}function W(e,t,r,n=[]){let l=c.useRef(),u=b();return F(()=>{var a;let i=(()=>{var e;for(let t of r){if("string"==typeof t)return t.trim();if("object"==typeof t&&"current"in t)return t.current?null==(e=t.current.textContent)?void 0:e.trim():l.current}})(),o=n.map(e=>e.trim());u.value(e,i,o),null==(a=t.current)||a.setAttribute(h,i),l.current=i}),l}var P=()=>{let[e,t]=c.useState(),r=N(()=>new Map);return F(()=>{r.current.forEach(e=>e()),r.current=new Map},[e]),(e,n)=>{r.current.set(e,n),t({})}};function D({asChild:e,children:t},r){let n;return e&&c.isValidElement(t)?c.cloneElement("function"==typeof(n=t.type)?n(t.props):"render"in n?n.render(t.props):t,{ref:t.ref},r(t.props.children)):r(t)}var $={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"}},45391:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(84639),l=r(48717),u=function(){return l.Z.Date.now()},a=r(59348),i=Math.max,o=Math.min,c=function(e,t,r){var l,c,d,s,f,v,m=0,p=!1,h=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function E(t){var r=l,n=c;return l=c=void 0,m=t,s=e.apply(n,r)}function b(e){var r=e-v,n=e-m;return void 0===v||r>=t||r<0||h&&n>=d}function y(){var e,r,n,l=u();if(b(l))return w(l);f=setTimeout(y,(e=l-v,r=l-m,n=t-e,h?o(n,d-r):n))}function w(e){return(f=void 0,g&&l)?E(e):(l=c=void 0,s)}function k(){var e,r=u(),n=b(r);if(l=arguments,c=this,v=r,n){if(void 0===f)return m=e=v,f=setTimeout(y,t),p?E(e):s;if(h)return clearTimeout(f),f=setTimeout(y,t),E(v)}return void 0===f&&(f=setTimeout(y,t)),s}return t=(0,a.Z)(t)||0,(0,n.Z)(r)&&(p=!!r.leading,d=(h="maxWait"in r)?i((0,a.Z)(r.maxWait)||0,t):d,g="trailing"in r?!!r.trailing:g),k.cancel=function(){void 0!==f&&clearTimeout(f),m=0,l=v=c=f=void 0},k.flush=function(){return void 0===f?s:w(u())},k}}}]);