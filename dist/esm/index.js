import e,{useState as t,useEffect as n}from"react";var l="Modal-module_test__339o6";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&l.firstChild?l.insertBefore(a,l.firstChild):l.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".Modal-module_test__339o6{\r\n    color: red;\r\n}");const a=t=>{var n;return e.createElement("div",{className:l},e.createElement("div",{className:"confirm-modal-wrapper"},t.message,e.createElement("button",{className:"create-btn",onClick:t.confirm},null!==(n=t.label)&&void 0!==n?n:"OK")))},c=n=>{var l;const[a,c]=t(!1);return e.createElement("div",{className:"dropdown"},n.dataName&&e.createElement("div",null,n.dataName," :"),e.createElement("div",{className:"value"+(a?" dropped":""),onClick:()=>{c(!a)}},null!==(l=n.currentValue)&&void 0!==l?l:"select",a&&e.createElement("ul",{className:"list"},n.items.map(((t,l)=>e.createElement("li",{key:l,onClick:()=>(e=>{var t;n.selectItem(null!==(t=n.dataName)&&void 0!==t?t:"",e.toString()),c(!1)})(t)},t))))))},r=l=>{const{title:a,headingNames:r,data:o}=l;let s=r?Object.values(r):null;const m=Object.keys(o[0]),i={};if(r){const e=o.length>0?m:[],t=Object.keys(r).filter((t=>!e.includes(t)));t.length>0&&(s=null,console.warn(`Key${t.length>2?"s":""} ${t.join(", ")} ${t.length>2?"are":"is"} missing in the heading names objects given. Data keys will be used instead.`))}const d=s||m;m.forEach(((e,t)=>{i[e]=d[t]}));const[u,E]=t(o),[p,y]=t(u),[h,g]=t({key:"",asc:!1});n((()=>{const e=[...u].sort(((e,t)=>e[h.key]>t[h.key]?h.asc?1:-1:e[h.key]<t[h.key]?h.asc?-1:1:0));y(e)}),[h,u]);const[v,k]=t(10),[f,b]=t(1),[N,C]=t(0);n((()=>{C(Math.ceil(u.length/v)),console.log(N)}),[v,u,N]);const w=e=>{let t=f;t+=e,t>0&&t<=N&&b(t)},[j,O]=t("");n((()=>{S(j.toString())}),[j]);const S=e=>{const t=e.toLowerCase(),n=[];l.data.forEach((e=>{const l=Object.keys(e);let a=!1;l.forEach((l=>{if(!a){e[l].toString().toLowerCase().match(t)&&(n.push(e),a=!0)}}))})),E(n)};return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement("span",null,"Show",e.createElement(c,{items:[10,25,50,100],selectItem:(e,t)=>{k(t)},currentValue:v.toString()}),"entries"),e.createElement("form",null,"search",e.createElement("input",{type:"text",name:"",id:"",value:j,onInput:e=>{const t=e.target;b(1),O(t.value)}}))),e.createElement("table",null,e.createElement("caption",null,null!=a?a:""),e.createElement("tbody",null,e.createElement("tr",null,Object.keys(i).map(((t,n)=>e.createElement("th",{scope:"col",key:"col"+n,onClick:()=>{return e=t,b(1),void(h.key===e?g((e=>Object.assign(Object.assign({},e),{asc:!e.asc}))):g({key:e,asc:!1}));var e}},i[t]," ",t===h.key&&(h.asc?"▲":"▼"))))),p.map(((t,n)=>n>=(f-1)*v&&n<f*v&&e.createElement("tr",{key:"row"+n+1},m.map(((l,a)=>e.createElement("th",{scope:"col",key:"row"+n+"col"+a},t[l])))))))),e.createElement("div",{className:""},e.createElement("span",null,"Showing ",(f-1)*v+1," to"," ",f===N?u.length:f*v," ","of ",u.length," entries"),e.createElement("div",null,e.createElement("button",{onClick:()=>w(-1)},"prev"),Array.from(Array(N)).map(((t,n)=>e.createElement("span",{key:"pageNavigation"+n},f===n+1?e.createElement("span",null,n+1):e.createElement("button",{onClick:()=>(e=>{b(e)})(n+1),key:"pageBtn"+n},n+1)))),e.createElement("button",{onClick:()=>w(1)},"next"))))};export{c as Dropdown,a as Modal,r as Table};
//# sourceMappingURL=index.js.map
