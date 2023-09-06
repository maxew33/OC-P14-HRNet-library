import e,{useState as r,useEffect as n,Fragment as t}from"react";function l(e,r){void 0===r&&(r={});var n=r.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&t.firstChild?t.insertBefore(l,t.firstChild):t.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var o="Modal-module_overlay__dd9h1",a="Modal-module_modal__aD7aP",d="Modal-module_messagesContainer__ljny5",i="Modal-module_message__td87i",s="Modal-module_closeBtn__Z9CX3",c="Modal-module_confirmBtn__arzuJ";l(".Modal-module_overlay__dd9h1 {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(217, 217, 217, 0.2509803922);\r\n  -webkit-backdrop-filter: blur(5px);\r\n  backdrop-filter: blur(5px);\r\n  display: grid;\r\n  place-content: center;\r\n  z-index: 9999;\r\n}\r\n\r\n.Modal-module_modal__aD7aP {\r\n  position: relative;\r\n  background: #f0f0f0;\r\n  padding: 1.5rem 1rem;\r\n  width: 100%;\r\n  gap: 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  border: 1px solid;\r\n  border-color: black;\r\n}\r\n\r\n.Modal-module_messagesContainer__ljny5 {\r\n  text-align: left;\r\n}\r\n\r\n.Modal-module_message__td87i {\r\n  margin: 3px 0;\r\n}\r\n\r\n.Modal-module_closeBtn__Z9CX3 {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n  border: none;\r\n  background: transparent;\r\n  font-weight: bold;\r\n  margin: 0.25rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.Modal-module_confirmBtn__arzuJ {\r\n  cursor: pointer;\r\n  border-style: 1px solid;\r\n}");const m=n=>{var t,l;const[m,u]=r(!1),{message:b,label:_,confirm:g,close:p,overlay:f,fFam:h,fSize:y,fCol:k,bg:w,pad:x,width:v,bordW:E,bordC:C,bordR:T,bfSize:N,bfFam:S,bfCol:z,bbg:D,bpad:M,bwidth:B,bbordW:W,bbordC:j,bbordR:F,hoverBg:O,hoverCol:R}=n,I={background:w,padding:x,width:v,borderWidth:E,borderColor:C,borderRadius:T},A={background:m?null!==(t=null!=O?O:D)&&void 0!==t?t:w:null!=D?D:w,fontFamily:null!=S?S:h,fontSize:null!=N?N:y,color:m?null!==(l=null!=R?R:z)&&void 0!==l?l:k:null!=z?z:k,padding:null!=M?M:x,borderWidth:null!=W?W:E,borderColor:null!=j?j:C,borderRadius:null!=F?F:T,width:B};return e.createElement("div",{className:f?o:"",style:{fontFamily:h,fontSize:y,color:k}},e.createElement("div",{className:a,style:I},p&&e.createElement("button",{className:s,onClick:p,style:{color:k}},"✕"),b&&e.createElement("div",{className:d},b.map(((r,n)=>e.createElement("div",{key:"mess"+n,className:i},r)))),g&&e.createElement("button",{className:c,onClick:g,style:A,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1)},null!=_?_:"OK")))};var u="Dropdown-module_dropdown__gG-Sw",b="Dropdown-module_value__LAs-C",_="Dropdown-module_dropped__YrdWI",g="Dropdown-module_list__gEdI2";l('@charset "UTF-8";\r\n.Dropdown-module_dropdown__gG-Sw {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n  font-size: 1rem;\r\n  margin: 0;\r\n  padding: 0;\r\n  border-bottom: 2px solid black;\r\n  height: 1rem;\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.Dropdown-module_value__LAs-C {\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: black;\r\n}\r\n\r\n.Dropdown-module_value__LAs-C::after {\r\n  content: "▼";\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%);\r\n  transition: transform 0.2s linear;\r\n}\r\n\r\n.Dropdown-module_dropped__YrdWI::after {\r\n  transform: translateY(-50%) rotate(180deg);\r\n  transform-origin: center;\r\n}\r\n\r\n.Dropdown-module_list__gEdI2 {\r\n  position: absolute;\r\n  width: 100%;\r\n  max-height: 7.5rem;\r\n  border: 2px solid black;\r\n  background: white;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  list-style: none;\r\n  z-index: 99;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.Dropdown-module_list__gEdI2 li {\r\n  cursor: pointer;\r\n  padding: 0.5rem 0.25rem;\r\n}');const p=n=>{const{selectItem:t,items:l,currentValue:o,dataName:a,dataLabel:d,width:i,height:s,fFam:c,fSize:m,fCol:p,textAlign:f,underline:h,lBg:y,lWidth:k,lHeight:w,lBordW:x,lBordC:v,lBordR:E,greyLine:C,itemPad:T}=n,N={fontFamily:c,fontSize:m,color:p,width:i,height:s,borderBottom:(null!=h?h:"true")?`${null!=x?x:"2px"} solid ${null!=v?v:"black"}`:"none"},S={background:y,width:k,hegiht:w,borderWidth:x,borderColor:v,borderRadius:E,color:p},z={textAlign:f,color:p},D={padding:T},M=null==C||C,[B,W]=r(!1);return e.createElement("div",{className:u,style:N},d&&e.createElement("div",null,d," :"),e.createElement("div",{className:b+" "+(B?_:""),onClick:()=>{W(!B)},style:z},null!=o?o:"select",B&&e.createElement("ul",{className:g,style:S},l.map(((r,n)=>e.createElement("li",{key:"li"+n,onClick:()=>(e=>{t(null!=a?a:"",e.toString()),W(!1)})(r),style:Object.assign(Object.assign({},D),M&&n%2==0?{background:"#d9d9d9bb"}:{})},r))))))};var f="Table-module_section__ogogQ",h="Table-module_entriesDisplayed__KR7ph",y="Table-module_tableNavigation__nmdxT",k="Table-module_dropdown__ygWk4",w="Table-module_form__eH-Bx",x="Table-module_table__Dkosn",v="Table-module_heading__KY3bF",E="Table-module_grayed__qwgVm",C="Table-module_pageSelection__tlSWS",T="Table-module_currentPage__OMrGa",N="Table-module_otherPage__3icCq",S="Table-module_disabled__V3UIS";l(".Table-module_section__ogogQ {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.Table-module_entriesDisplayed__KR7ph, .Table-module_tableNavigation__nmdxT {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.Table-module_dropdown__ygWk4 {\r\n  display: flex;\r\n  gap: 2px;\r\n}\r\n\r\n.Table-module_form__eH-Bx {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.Table-module_table__Dkosn {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  border: 1px solid black;\r\n  width: 100%;\r\n  margin: 1rem 0;\r\n  background: white;\r\n}\r\n\r\n.Table-module_heading__KY3bF {\r\n  position: relative;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  -webkit-backdrop-filter: contrast(0.6);\r\n          backdrop-filter: contrast(0.6);\r\n}\r\n\r\n.Table-module_table__Dkosn th,\r\n.Table-module_table__Dkosn td {\r\n  border: 1px solid gray;\r\n  padding: 3px;\r\n}\r\n\r\n.Table-module_grayed__qwgVm:nth-child(odd) {\r\n  -webkit-backdrop-filter: contrast(0.8);\r\n          backdrop-filter: contrast(0.8);\r\n}\r\n\r\n.Table-module_pageSelection__tlSWS button {\r\n  cursor: pointer;\r\n}\r\n\r\n.Table-module_currentPage__OMrGa, .Table-module_otherPage__3icCq {\r\n  min-width: 2rem;\r\n  margin: 0 2px;\r\n}\r\n\r\n.Table-module_currentPage__OMrGa {\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.Table-module_disabled__V3UIS {\r\n  position: relative;\r\n  pointer-events: none;\r\n  color: grey;\r\n}");const z=l=>{const{title:o,headingNames:a,data:d,closeUp:i,background:s,tBordW:c,tBordC:u,tBordR:b,width:_,fFam:g,fSize:z,fCol:D,tableFCol:M,greyLine:B,prevTxt:W,nextTxt:j,buttonEllipsis:F}=l;let O=a?Object.values(a):null;const R=Object.keys(d[0]),I={};if(a){const e=d.length>0?R:[],r=Object.keys(a).filter((r=>!e.includes(r)));r.length>0&&(O=null,console.warn(`Key${r.length>2?"s":""} ${r.join(", ")} ${r.length>2?"are":"is"} missing in the heading names objects given. Data keys will be used instead.`))}const A=O||R;R.forEach(((e,r)=>{I[e]=A[r]}));const[L,P]=r(d),[K,V]=r(L),[Y,G]=r({key:"",asc:!1});n((()=>{const e=[...L].sort(((e,r)=>e[Y.key]>r[Y.key]?Y.asc?1:-1:e[Y.key]<r[Y.key]?Y.asc?-1:1:0));V(e)}),[Y,L]);const[$,q]=r(10),[U,H]=r(1),[J,Q]=r(0);n((()=>{Q(Math.ceil(L.length/$)),console.log(J)}),[$,L,J]);const X=e=>{let r=U;r+=e,r>0&&r<=J&&H(r)},Z=null!=F?F:"true",[ee,re]=r("");n((()=>{ne(ee.toString())}),[ee]);const ne=e=>{const r=e.toLowerCase(),n=[];l.data.forEach((e=>{const t=Object.keys(e);let l=!1;t.forEach((t=>{if(!l){e[t].toString().toLowerCase().match(r)&&(n.push(e),l=!0)}}))})),P(n)},[te,le]=r([""]),[oe,ae]=r(!1),de=null==i||i,ie=()=>{ae(!oe)},se=null!=B?B:"true",ce={fontFamily:g,color:D,fontSize:z},me={width:_,borderWidth:c,borderColor:u,borderRadius:b,background:s,color:M},ue={cursor:de?"pointer":"default"},be={color:M,fontSize:z,background:s};return e.createElement("section",{className:f,style:ce},e.createElement("div",{className:h},e.createElement("span",{className:k},"Show",e.createElement(p,{items:[10,25,50,100],selectItem:(e,r)=>{q(r),H(1)},currentValue:$.toString(),width:"75px",textAlign:"center",fCol:D,fSize:z,fFam:g}),"entries"),e.createElement("form",{className:w},"search",e.createElement("input",{type:"text",name:"",id:"",value:ee,onInput:e=>{const r=e.target;H(1),re(r.value)}}))),e.createElement("table",{className:x},e.createElement("caption",null,null!=o?o:""),e.createElement("tbody",{style:me},e.createElement("tr",null,Object.keys(I).map(((r,n)=>e.createElement("th",{scope:"col",key:"col"+n,onClick:()=>{return e=r,H(1),void(Y.key===e?G((e=>Object.assign(Object.assign({},e),{asc:!e.asc}))):G({key:e,asc:!1}));var e},className:v},I[r]," ",r===Y.key&&(Y.asc?"▲":"▼"))))),K.map(((r,n)=>n>=(U-1)*$&&n<U*$&&e.createElement("tr",{key:"row"+n+1,onClick:()=>de&&(e=>{const r=[];R.map((n=>r.push(n+": "+e[n]))),le(r),ie()})(r),className:se?E:"",style:ue},R.map(((t,l)=>e.createElement("td",{scope:"col",key:"row"+n+"col"+l},r[t])))))))),e.createElement("div",{className:y},e.createElement("span",null,"Showing ",(U-1)*$+1," to"," ",U===J?L.length:U*$," ","of ",L.length," entries"),e.createElement("div",{className:C},e.createElement("button",{className:1===U?S:"",onClick:()=>X(-1),style:be},null!=W?W:"prev"),Array.from(Array(J)).map(((r,n)=>e.createElement(t,{key:"pageNavigation"+n},!Z||J<7||Math.abs(U-n-1)<3||U<=2&&n<=4||U>=J-2&&n>J-6||0===n||n===J-1?U===n+1?e.createElement("span",{className:T},n+1):e.createElement("button",{onClick:()=>(e=>{H(e)})(n+1),className:N,key:"pageBtn"+n,style:be},n+1):(U-3===n+1||U+3===n+1||U<=2&&5===n||U>=J-2&&n>J-7)&&e.createElement("span",{className:T},"...")))),e.createElement("button",{className:U===J?S:"",onClick:()=>X(1),style:be},null!=j?j:"next"))),oe&&e.createElement(m,{overlay:!0,close:ie,confirm:ie,message:te,fSize:z,fFam:g,fCol:M,bordC:u,bordR:b,bordW:c,bg:s}))};export{p as Dropdown,m as Modal,z as Table};
//# sourceMappingURL=index.js.map
