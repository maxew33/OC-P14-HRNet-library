"use strict";var e=require("react");function n(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===r&&t.firstChild?t.insertBefore(l,t.firstChild):t.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var r="Modal-module_overlay__dd9h1",t="Modal-module_modal__aD7aP",l="Modal-module_btn__Zf2hl";n(".Modal-module_overlay__dd9h1 {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(217, 217, 217, 0.2509803922);\r\n    -webkit-backdrop-filter: blur(5px);\r\n            backdrop-filter: blur(5px);\r\n    display: grid;\r\n    place-content: center;\r\n  }\r\n  \r\n  .Modal-module_modal__aD7aP {\r\n    background: #f0f0f0;\r\n    padding: 0.5rem 1rem;\r\n    width: 100%;\r\n    gap: 1.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    line-height: 1.5;\r\n    border: 1px solid;\r\n    border-color: black;\r\n  }\r\n  \r\n  .Modal-module_btn__Zf2hl {\r\n    cursor: pointer;\r\n  }");var o="Dropdown-module_dropdown__gG-Sw",a="Dropdown-module_value__LAs-C",d="Dropdown-module_dropped__YrdWI",i="Dropdown-module_list__gEdI2";n('@charset "UTF-8";\r\n\r\n.Dropdown-module_dropdown__gG-Sw {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    font-size: 1rem;\r\n    margin: 0;\r\n    padding: 0;\r\n    border-bottom: 2px solid black;\r\n  }\r\n  \r\n  .Dropdown-module_value__LAs-C {\r\n    cursor: pointer;\r\n    position: relative;\r\n    color: black;\r\n    text-align: center;\r\n  }\r\n\r\n  .Dropdown-module_value__LAs-C::after {\r\n    content: "▼";\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0;\r\n    transform: translateY(-50%);\r\n    transition: transform 0.2s linear;\r\n  }\r\n  \r\n  .Dropdown-module_dropped__YrdWI::after {\r\n    transform: translateY(-50%) rotate(180deg);\r\n    transform-origin: center;\r\n  }\r\n  \r\n  .Dropdown-module_list__gEdI2 {\r\n    position: absolute;\r\n    width: 100%;\r\n    max-height: 7.5rem;\r\n    border: 2px solid black;\r\n    background: white;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    list-style: none;\r\n    z-index: 99;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .Dropdown-module_list__gEdI2 li {\r\n    cursor: pointer;\r\n    padding: 0.5rem 0.25rem;\r\n  }');const s=n=>{const{selectItem:r,items:t,currentValue:l,dataName:s,width:c,fFam:u,fSize:m,fCol:b,textAlign:p,underline:g,lBg:_,lWidth:h,lHeight:f,lBordW:y,lBordC:k,lBordR:w,greyLine:v,itemPad:E}=n,x={fontFamily:u,fontSize:m,color:b,width:c,borderBottom:g?`${y} solid ${k}`:""},C={background:_,width:h,hegiht:f,borderWidth:y,borderColor:k,borderRadius:w},S={padding:E},D=null==v||v,[T,N]=e.useState(!1);return e.createElement("div",{className:o,style:x},s&&e.createElement("div",null,s," :"),e.createElement("div",{className:a+" "+(T?d:""),onClick:()=>{N(!T)},style:{textAlign:p}},null!=l?l:"select",T&&e.createElement("ul",{className:i,style:C},t.map(((n,t)=>e.createElement("li",{key:"li"+t,onClick:()=>(e=>{r(null!=s?s:"",e.toString()),N(!1)})(n),style:Object.assign(Object.assign({},S),D&&t%2==0?{background:"#d9d9d9bb"}:{})},n))))))};var c={entriesDisplayed:"Table-module_entriesDisplayed__KR7ph",navigation:"Table-module_navigation__4p095",dropdown:"Table-module_dropdown__ygWk4",table:"Table-module_table__Dkosn"};n(".Table-module_entriesDisplayed__KR7ph, .Table-module_navigation__4p095 {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.Table-module_dropdown__ygWk4{\r\n    display: flex;\r\n    gap:2px;\r\n}\r\n\r\n.Table-module_table__Dkosn {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    border: 1px solid black;\r\n    width: 100%;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.Table-module_table__Dkosn th {\r\n    background: gainsboro;\r\n    font-weight: bold;\r\n}\r\n\r\n.Table-module_table__Dkosn th,\r\n.Table-module_table__Dkosn td {\r\n    border: 1px solid gray;\r\n    padding: 3px;\r\n}\r\n\r\n.Table-module_table__Dkosn tr:nth-child(odd) {\r\n    background: whitesmoke;\r\n}\r\n");exports.Dropdown=s,exports.Modal=n=>{var o,a;const[d,i]=e.useState(!1),{message:s,label:c,confirm:u,overlay:m,fFam:b,fSize:p,fCol:g,bg:_,pad:h,width:f,bordW:y,bordC:k,bordR:w,bfSize:v,bfFam:E,bfCol:x,bbg:C,bpad:S,bwidth:D,bbordW:T,bbordC:N,bbordR:j,hoverBg:W,hoverCol:M}=n,O={background:_,padding:h,width:f,borderWidth:y,borderColor:k,borderRadius:w},z={background:d?null!==(o=null!=W?W:C)&&void 0!==o?o:_:null!=C?C:_,fontFamily:null!=E?E:b,fontSize:null!=v?v:p,color:d?null!==(a=null!=M?M:x)&&void 0!==a?a:g:null!=x?x:g,padding:null!=S?S:h,borderWidth:null!=T?T:y,borderColor:null!=N?N:k,borderRadius:null!=j?j:w,width:D};return e.createElement("div",{className:m?r:"",style:{fontFamily:b,fontSize:p,color:g}},e.createElement("div",{className:t,style:O},s,u&&e.createElement("button",{className:l,onClick:u,style:z,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},null!=c?c:"OK")))},exports.Table=n=>{const{title:r,headingNames:t,data:l}=n;let o=t?Object.values(t):null;const a=Object.keys(l[0]),d={};if(t){const e=l.length>0?a:[],n=Object.keys(t).filter((n=>!e.includes(n)));n.length>0&&(o=null,console.warn(`Key${n.length>2?"s":""} ${n.join(", ")} ${n.length>2?"are":"is"} missing in the heading names objects given. Data keys will be used instead.`))}const i=o||a;a.forEach(((e,n)=>{d[e]=i[n]}));const[u,m]=e.useState(l),[b,p]=e.useState(u),[g,_]=e.useState({key:"",asc:!1});e.useEffect((()=>{const e=[...u].sort(((e,n)=>e[g.key]>n[g.key]?g.asc?1:-1:e[g.key]<n[g.key]?g.asc?-1:1:0));p(e)}),[g,u]);const[h,f]=e.useState(10),[y,k]=e.useState(1),[w,v]=e.useState(0);e.useEffect((()=>{v(Math.ceil(u.length/h)),console.log(w)}),[h,u,w]);const E=e=>{let n=y;n+=e,n>0&&n<=w&&k(n)},[x,C]=e.useState("");e.useEffect((()=>{S(x.toString())}),[x]);const S=e=>{const r=e.toLowerCase(),t=[];n.data.forEach((e=>{const n=Object.keys(e);let l=!1;n.forEach((n=>{if(!l){e[n].toString().toLowerCase().match(r)&&(t.push(e),l=!0)}}))})),m(t)};return e.createElement(e.Fragment,null,e.createElement("div",{className:c.entriesDisplayed},e.createElement("span",null,"Show test",e.createElement(s,{items:[10,25,50,100],selectItem:(e,n)=>{f(n),k(1)},currentValue:h.toString()}),"entries"),e.createElement("form",null,"search",e.createElement("input",{type:"text",name:"",id:"",value:x,onInput:e=>{const n=e.target;k(1),C(n.value)}}))),e.createElement("table",{className:c.table},e.createElement("caption",null,null!=r?r:""),e.createElement("tbody",null,e.createElement("tr",null,Object.keys(d).map(((n,r)=>e.createElement("th",{scope:"col",key:"col"+r,onClick:()=>{return e=n,k(1),void(g.key===e?_((e=>Object.assign(Object.assign({},e),{asc:!e.asc}))):_({key:e,asc:!1}));var e}},d[n]," ",n===g.key&&(g.asc?"▲":"▼"))))),b.map(((n,r)=>r>=(y-1)*h&&r<y*h&&e.createElement("tr",{key:"row"+r+1},a.map(((t,l)=>e.createElement("th",{scope:"col",key:"row"+r+"col"+l},n[t])))))))),e.createElement("div",{className:c.tableNavigation},e.createElement("span",null,"Showing ",(y-1)*h+1," to"," ",y===w?u.length:y*h," ","of ",u.length," entries"),e.createElement("div",null,e.createElement("button",{onClick:()=>E(-1)},"prev"),Array.from(Array(w)).map(((n,r)=>e.createElement("span",{key:"pageNavigation"+r},y===r+1?e.createElement("span",null,r+1):e.createElement("button",{onClick:()=>(e=>{k(e)})(r+1),key:"pageBtn"+r},r+1)))),e.createElement("button",{onClick:()=>E(1)},"next"))))};
//# sourceMappingURL=index.js.map
