"use strict";var e=require("react");const t=t=>{var a;const[n,l]=e.useState(!1);return e.createElement("div",{className:"dropdown"},t.dataName&&e.createElement("div",null,t.dataName," :"),e.createElement("div",{className:"value"+(n?" dropped":""),onClick:()=>{l(!n)}},null!==(a=t.currentValue)&&void 0!==a?a:"select",n&&e.createElement("ul",{className:"list"},t.items.map(((a,n)=>e.createElement("li",{key:n,onClick:()=>(e=>{var a;t.selectItem(null!==(a=t.dataName)&&void 0!==a?a:"",e.toString()),l(!1)})(a)},a))))))};exports.Dropdown=t,exports.Modal=t=>{var a;return e.createElement("div",{className:"confirm-modal"},e.createElement("div",{className:"confirm-modal-wrapper"},t.message,e.createElement("button",{className:"create-btn",onClick:t.confirm},null!==(a=t.label)&&void 0!==a?a:"OK")))},exports.Table=a=>{const{title:n,headingNames:l,data:c}=a;let s=l?Object.values(l):null;const r=Object.keys(c[0]),o={};if(l){const e=c.length>0?r:[],t=Object.keys(l).filter((t=>!e.includes(t)));t.length>0&&(s=null,console.warn(`Key${t.length>2?"s":""} ${t.join(", ")} ${t.length>2?"are":"is"} missing in the heading names objects given. Data keys will be used instead.`))}const m=s||r;r.forEach(((e,t)=>{o[e]=m[t]}));const[i,u]=e.useState(c),[E,d]=e.useState(i),[p,k]=e.useState({key:"",asc:!1});e.useEffect((()=>{const e=[...i].sort(((e,t)=>e[p.key]>t[p.key]?p.asc?1:-1:e[p.key]<t[p.key]?p.asc?-1:1:0));d(e)}),[p,i]);const[g,v]=e.useState(10),[y,h]=e.useState(1),[b,f]=e.useState(0);e.useEffect((()=>{f(Math.ceil(i.length/g)),console.log(b)}),[g,i,b]);const S=e=>{let t=y;t+=e,t>0&&t<=b&&h(t)},[N,w]=e.useState("");e.useEffect((()=>{j(N.toString())}),[N]);const j=e=>{const t=e.toLowerCase(),n=[];a.data.forEach((e=>{const a=Object.keys(e);let l=!1;a.forEach((a=>{if(!l){e[a].toString().toLowerCase().match(t)&&(n.push(e),l=!0)}}))})),u(n)};return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement("span",null,"Show",e.createElement(t,{items:[10,25,50,100],selectItem:(e,t)=>{v(t)},currentValue:g.toString()}),"entries"),e.createElement("form",null,"search",e.createElement("input",{type:"text",name:"",id:"",value:N,onInput:e=>{const t=e.target;h(1),w(t.value)}}))),e.createElement("table",null,e.createElement("caption",null,null!=n?n:""),e.createElement("tbody",null,e.createElement("tr",null,Object.keys(o).map(((t,a)=>e.createElement("th",{scope:"col",key:"col"+a,onClick:()=>{return e=t,h(1),void(p.key===e?k((e=>Object.assign(Object.assign({},e),{asc:!e.asc}))):k({key:e,asc:!1}));var e}},o[t]," ",t===p.key&&(p.asc?"▲":"▼"))))),E.map(((t,a)=>a>=(y-1)*g&&a<y*g&&e.createElement("tr",{key:"row"+a+1},r.map(((n,l)=>e.createElement("th",{scope:"col",key:"row"+a+"col"+l},t[n])))))))),e.createElement("div",{className:""},e.createElement("span",null,"Showing ",(y-1)*g+1," to"," ",y===b?i.length:y*g," ","of ",i.length," entries"),e.createElement("div",null,e.createElement("button",{onClick:()=>S(-1)},"prev"),Array.from(Array(b)).map(((t,a)=>e.createElement("span",{key:"pageNavigation"+a},y===a+1?e.createElement("span",null,a+1):e.createElement("button",{onClick:()=>(e=>{h(e)})(a+1),key:"pageBtn"+a},a+1)))),e.createElement("button",{onClick:()=>S(1)},"next"))))};
//# sourceMappingURL=index.js.map
