import e,{useState as t}from"react";const a=a=>{var l;const[n,c]=t(0);return e.createElement("div",{className:"confirm-modal"},e.createElement("div",{className:"confirm-modal-wrapper"},a.message+" - count : "+n,e.createElement("button",{className:"create-btn",onClick:()=>{c(n+1),a.confirm}},null!==(l=a.label)&&void 0!==l?l:"OK")))},l=a=>{var l;const[n,c]=t(!1);return e.createElement("div",{className:"dropdown"},a.dataName&&e.createElement("div",null,a.dataName," :"),e.createElement("div",{className:"value"+(n?" dropped":""),onClick:()=>{c(!n)}},null!==(l=a.currentValue)&&void 0!==l?l:"select",n&&e.createElement("ul",{className:"list"},a.items.map(((t,l)=>e.createElement("li",{key:l,onClick:()=>(e=>{var t;a.selectItem(null!==(t=a.dataName)&&void 0!==t?t:"",e.toString()),c(!1)})(t)},t))))))},n=t=>{var a;let l=t.headingNames?Object.values(t.headingNames):null;const n=Object.keys(t.data[0]);if(t.headingNames){const e=t.data.length>0?n:[],a=Object.keys(t.headingNames).filter((t=>!e.includes(t)));a.length>0&&(l=null,console.warn(`Key${a.length>2?"s":""} ${a.join(", ")} ${a.length>2?"are":"is"} missing in the heading names objects given. Data keys will be used instead.`))}const c=l||n;return e.createElement("table",{className:"table"},e.createElement("caption",null,null!==(a=t.title)&&void 0!==a?a:""),e.createElement("tbody",null,e.createElement("tr",null,c.map(((t,a)=>e.createElement("th",{scope:"col",key:"col"+a},t)))),t.data.map(((t,a)=>e.createElement("tr",{key:"row"+a+1},n.map(((l,n)=>e.createElement("th",{scope:"col",key:"row"+a+"col"+n},t[l]))))))))};export{l as Dropdown,a as Modal,n as Table};
//# sourceMappingURL=index.js.map
