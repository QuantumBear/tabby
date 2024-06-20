(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1102],{14375:function(e,t,n){"use strict";n.d(t,{j:function(){return s}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.flat(1/0).filter(Boolean).join(" ")},s=(e,t)=>n=>{var s;if((null==t?void 0:t.variants)==null)return l(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:o}=t,a=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],l=null==o?void 0:o[e];if(null===t)return null;let s=r(t)||r(l);return i[e][s]}),u=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),c=null==t?void 0:null===(s=t.compoundVariants)||void 0===s?void 0:s.reduce((e,t)=>{let{class:n,className:r,...l}=t;return Object.entries(l).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...o,...u}[t]):({...o,...u})[t]===n})?[...e,n,r]:e},[]);return l(e,a,c,null==n?void 0:n.class,null==n?void 0:n.className)}},10881:function(e,t,n){Promise.resolve().then(n.bind(n,4841))},14522:function(e,t,n){"use strict";n.d(t,{C:function(){return l}});var r=n(43240);let l=(0,r.BX)("\n  mutation triggerJobRun($command: String!) {\n    triggerJobRun(command: $command)\n  }\n")},4841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(36164),l=n(70652),s=n.n(l),i=n(31458),o=n(3546),a=n(2578),u=n(40055),c=n(21808),d=n(43240),f=n(24449),v=n(11634),m=n(70410),x=n(81565),h=n(49506),g=n(99047),b=n(29),j=n(6230),p=n(14522);let N=(0,d.BX)("\n  mutation DeleteWebCrawlerUrl($id: ID!) {\n    deleteWebCrawlerUrl(id: $id)\n  }\n"),y=c.L8;function w(){var e,t;let[n,l]=o.useState(),[{data:s,fetching:c},d]=(0,u.aM)({query:m.XP,variables:{last:y,before:n}}),[w,C]=o.useState(1),O=o.useMemo(()=>{var e,t;return null==s?void 0:null===(t=s.webCrawlerUrls)||void 0===t?void 0:null===(e=t.edges)||void 0===e?void 0:e.slice().reverse()},[null==s?void 0:null===(e=s.webCrawlerUrls)||void 0===e?void 0:e.edges]),R=null==s?void 0:null===(t=s.webCrawlerUrls)||void 0===t?void 0:t.pageInfo,S=Math.ceil(((null==O?void 0:O.length)||0)/y),_=o.useMemo(()=>{var e;return null==O?void 0:null===(e=O.slice)||void 0===e?void 0:e.call(O,(w-1)*y,w*y)},[w,O]),k=(null==R?void 0:R.hasPreviousPage)||w<S,P=w>1,Z=!!(null==_?void 0:_.length)&&(k||P),T=e=>{var t,n;return null==O?void 0:null===(n=O.slice(0,(e-1)*y))||void 0===n?void 0:null===(t=n.pop())||void 0===t?void 0:t.cursor},I=e=>{l(T(e))},z=(0,f.S)(d,3e3),A=(0,v.D)(p.C),E=e=>A({command:e}).then(e=>{var t,n;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.triggerJobRun)?(a.A.success("The job has been triggered successfully, it may take a few minutes to process."),z.run()):a.A.error((null==e?void 0:null===(n=e.error)||void 0===n?void 0:n.message)||"Failed to trigger job")}),M=(0,v.D)(N),U=(e,t)=>{M({id:e}).then(e=>{var n,r;(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.deleteWebCrawlerUrl)?I(t?w-1:w):a.A.error((null==e?void 0:null===(r=e.error)||void 0===r?void 0:r.message)||"Failed to delete")})};return o.useEffect(()=>{!c&&S<w&&w>1&&C(S)},[S,w]),o.useEffect(()=>()=>{z.cancel()},[w]),(0,r.jsxs)(j.Z,{loading:c,children:[(0,r.jsxs)(g.iA,{className:"table-fixed border-b",children:[(0,r.jsx)(g.xD,{children:(0,r.jsxs)(g.SC,{children:[(0,r.jsx)(g.ss,{className:"w-[70%]",children:"URL"}),(0,r.jsx)(g.ss,{children:"Job"}),(0,r.jsx)(g.ss,{className:"w-[100px]"})]})}),(0,r.jsx)(g.RM,{children:(null==_?void 0:_.length)||1!==w?(0,r.jsx)(r.Fragment,{children:null==_?void 0:_.map(e=>(0,r.jsxs)(g.SC,{children:[(0,r.jsx)(g.pj,{className:"truncate",children:e.node.url}),(0,r.jsx)(g.pj,{children:(0,r.jsxs)(b.u,{children:[(0,r.jsx)(b.aJ,{asChild:!0,children:(0,r.jsx)(i.z,{size:"icon",variant:"ghost",onClick:t=>{var n;return E(null===(n=e.node.jobInfo)||void 0===n?void 0:n.command)},children:(0,r.jsx)(x.IconCirclePlay,{})})}),(0,r.jsx)(b._v,{children:(0,r.jsx)("p",{children:"Run"})})]})}),(0,r.jsx)(g.pj,{className:"flex justify-end",children:(0,r.jsx)("div",{className:"flex gap-1",children:(0,r.jsx)(i.z,{size:"icon",variant:"hover-destructive",onClick:()=>U(e.node.id,1===_.length),children:(0,r.jsx)(x.IconTrash,{})})})})]},e.node.id))}):(0,r.jsx)(g.SC,{children:(0,r.jsx)(g.pj,{colSpan:4,className:"h-[100px] text-center",children:"No Data"})})})]}),Z&&(0,r.jsx)(h.tl,{className:"my-4",children:(0,r.jsxs)(h.ng,{children:[(0,r.jsx)(h.nt,{children:(0,r.jsx)(h.dN,{disabled:!P,onClick:()=>{if(w<=1||c)return;let e=w-1;I(e),C(e)}})}),(0,r.jsx)(h.nt,{children:(0,r.jsx)(h.$0,{disabled:!k,onClick:()=>{if(!k||c)return;let e=w+1;I(e),C(e)}})})]})})]})}function C(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{}),(0,r.jsx)("div",{className:"mt-4 flex justify-end",children:(0,r.jsx)(s(),{href:"./web/new",className:(0,i.d)(),children:"Create"})})]})}},6230:function(e,t,n){"use strict";var r=n(36164),l=n(3546),s=n(24449),i=n(90379);t.Z=e=>{let{loading:t,fallback:n,delay:o,children:a}=e,[u,c]=l.useState(!t),[d]=(0,s.n)(u,null!=o?o:200);return(l.useEffect(()=>{t||u||c(!0)},[t]),d)?a:n||(0,r.jsx)(i.cg,{})}},90379:function(e,t,n){"use strict";n.d(t,{PF:function(){return a},cg:function(){return i},tB:function(){return o}});var r=n(36164),l=n(74248),s=n(3448);let i=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,l.cn)("space-y-3",t),...n,children:[(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-full"})]})},o=e=>{let{className:t,...n}=e;return(0,r.jsx)(s.O,{className:(0,l.cn)("h-4 w-full",t),...n})},a=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,l.cn)("flex flex-col gap-3",t),...n,children:[(0,r.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(s.O,{className:"h-4 w-full"})]})}},31458:function(e,t,n){"use strict";n.d(t,{d:function(){return a},z:function(){return u}});var r=n(36164),l=n(3546),s=n(74047),i=n(14375),o=n(74248);let a=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),u=l.forwardRef((e,t)=>{let{className:n,variant:l,size:i,asChild:u=!1,...c}=e,d=u?s.g7:"button";return(0,r.jsx)(d,{className:(0,o.cn)(a({variant:l,size:i,className:n})),ref:t,...c})});u.displayName="Button"},49506:function(e,t,n){"use strict";n.d(t,{$0:function(){return v},dN:function(){return f},ng:function(){return u},nt:function(){return c},tl:function(){return a}});var r=n(36164),l=n(3546),s=n(74248),i=n(31458),o=n(81565);let a=e=>{let{className:t,...n}=e;return(0,r.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,s.cn)("mx-auto flex w-full justify-center",t),...n})};a.displayName="Pagination";let u=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("ul",{ref:t,className:(0,s.cn)("flex flex-row items-center gap-1",n),...l})});u.displayName="PaginationContent";let c=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("li",{ref:t,className:(0,s.cn)("",n),...l})});c.displayName="PaginationItem";let d=e=>{let{className:t,isActive:n,size:l="icon",...o}=e;return(0,r.jsx)("a",{"aria-current":n?"page":void 0,className:(0,s.cn)((0,i.d)({variant:n?"outline":"ghost",size:l}),t),...o})};d.displayName="PaginationLink";let f=e=>{let{className:t,disabled:n,...l}=e;return(0,r.jsxs)(d,{"aria-label":"Go to previous page",size:"default",className:(0,s.cn)("cursor-pointer gap-1 pl-2.5",n&&"cursor-not-allowed text-muted-foreground",t),...l,children:[(0,r.jsx)(o.IconChevronLeft,{className:"h-4 w-4"}),(0,r.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let v=e=>{let{className:t,disabled:n,...l}=e;return(0,r.jsxs)(d,{"aria-label":"Go to next page",size:"default",className:(0,s.cn)("cursor-pointer gap-1 pr-2.5",n&&"cursor-not-allowed text-muted-foreground",t),...l,children:[(0,r.jsx)("span",{children:"Next"}),(0,r.jsx)(o.IconChevronRight,{className:"h-4 w-4"})]})};v.displayName="PaginationNext"},3448:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});var r=n(36164),l=n(74248);function s(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,l.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},99047:function(e,t,n){"use strict";n.d(t,{RM:function(){return a},SC:function(){return c},iA:function(){return i},pj:function(){return f},ss:function(){return d},xD:function(){return o}});var r=n(36164),l=n(3546),s=n(74248);let i=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("table",{ref:t,className:(0,s.cn)("w-full caption-bottom text-sm",n),...l})});i.displayName="Table";let o=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("thead",{ref:t,className:(0,s.cn)("[&_tr]:border-b",n),...l})});o.displayName="TableHeader";let a=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,s.cn)("[&_tr:last-child]:border-0",n),...l})});a.displayName="TableBody";let u=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",n),...l})});u.displayName="TableFooter";let c=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("tr",{ref:t,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",n),...l})});c.displayName="TableRow";let d=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("th",{ref:t,className:(0,s.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",n),...l})});d.displayName="TableHead";let f=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("td",{ref:t,className:(0,s.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",n),...l})});f.displayName="TableCell";let v=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("caption",{ref:t,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",n),...l})});v.displayName="TableCaption"},29:function(e,t,n){"use strict";n.d(t,{_v:function(){return c},aJ:function(){return u},pn:function(){return o},u:function(){return a}});var r=n(36164),l=n(3546),s=n(44421),i=n(74248);let o=s.zt,a=s.fC,u=s.xz,c=l.forwardRef((e,t)=>{let{className:n,sideOffset:l=4,...o}=e;return(0,r.jsx)(s.VY,{ref:t,sideOffset:l,className:(0,i.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...o})});c.displayName=s.VY.displayName},21808:function(e,t,n){"use strict";n.d(t,{$6:function(){return s},L8:function(){return l},o0:function(){return r}});let r="name@yourcompany.com",l=20,s={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg"}},24449:function(e,t,n){"use strict";n.d(t,{S:function(){return o},n:function(){return a}});var r=n(3546),l=n(45391),s=n(16784);let i=e=>{let t=(0,s.d)(e);r.useEffect(()=>()=>{t.current()},[])};function o(e,t,n){let o=(0,s.d)(e),a=r.useMemo(()=>(0,l.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.current(...t)},t,n),[]);return i(()=>a.cancel()),{run:a,cancel:a.cancel,flush:a.flush}}function a(e,t,n){let[l,s]=r.useState(e),{run:i}=o(()=>{s(e)},t,n);return r.useEffect(()=>{i()},[e]),[l,s]}},16784:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var r=n(3546);function l(e){let t=r.useRef(e);return t.current=e,t}},70652:function(e,t,n){e.exports=n(54007)},29434:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r,l=n(3546),s=n(65292);let i=(r||(r=n.t(l,2)))["useId".toString()]||(()=>void 0),o=0;function a(e){let[t,n]=l.useState(i());return(0,s.b)(()=>{e||n(e=>null!=e?e:String(o++))},[e]),e||(t?`radix-${t}`:"")}},7600:function(e,t,n){"use strict";var r=n(48717).Z.Symbol;t.Z=r},17996:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7600),l=Object.prototype,s=l.hasOwnProperty,i=l.toString,o=r.Z?r.Z.toStringTag:void 0,a=function(e){var t=s.call(e,o),n=e[o];try{e[o]=void 0;var r=!0}catch(e){}var l=i.call(e);return r&&(t?e[o]=n:delete e[o]),l},u=Object.prototype.toString,c=r.Z?r.Z.toStringTag:void 0,d=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?a(e):u.call(e)}},64380:function(e,t){"use strict";var n="object"==typeof global&&global&&global.Object===Object&&global;t.Z=n},48717:function(e,t,n){"use strict";var r=n(64380),l="object"==typeof self&&self&&self.Object===Object&&self,s=r.Z||l||Function("return this")();t.Z=s},84639:function(e,t){"use strict";t.Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},96786:function(e,t){"use strict";t.Z=function(e){return null!=e&&"object"==typeof e}}},function(e){e.O(0,[7998,5498,6312,4007,2134,6201,3449,2578,2672,7444,1565,1624,3396,3375,5289,1744],function(){return e(e.s=10881)}),_N_E=e.O()}]);