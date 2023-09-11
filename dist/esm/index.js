import e,{useState as r,useEffect as n,Fragment as t}from"react";function l(e,r){void 0===r&&(r={});var n=r.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&t.firstChild?t.insertBefore(l,t.firstChild):t.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var o="Modal-module_overlay__dd9h1",a="Modal-module_modal__aD7aP",d="Modal-module_messagesContainer__ljny5",i="Modal-module_message__td87i",s="Modal-module_closeBtn__Z9CX3",c="Modal-module_confirmBtn__arzuJ";l(".Modal-module_overlay__dd9h1 {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(217, 217, 217, 0.2509803922);\r\n  -webkit-backdrop-filter: blur(5px);\r\n  backdrop-filter: blur(5px);\r\n  display: grid;\r\n  place-content: center;\r\n  z-index: 9999;\r\n}\r\n\r\n.Modal-module_modal__aD7aP {\r\n  font-size: inherit;\r\n  position: relative;\r\n  background: #f0f0f0;\r\n  padding: 1.5rem 1rem;\r\n  width: 100%;\r\n  gap: 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  border: 1px solid;\r\n  border-color: black;\r\n}\r\n\r\n.Modal-module_messagesContainer__ljny5 {\r\n  text-align: left;\r\n}\r\n\r\n.Modal-module_message__td87i {\r\n  margin: 3px 0;\r\n}\r\n\r\n.Modal-module_closeBtn__Z9CX3 {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n  border: none;\r\n  background: transparent;\r\n  font-weight: bold;\r\n  margin: 0.25rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.Modal-module_confirmBtn__arzuJ {\r\n  cursor: pointer;\r\n  border-style: solid;\r\n}");const m=n=>{var t,l;const[m,u]=r(!1),{message:b,label:_,confirm:p,close:g,overlay:h,fFam:f,fSize:y,fCol:k,bg:v,pad:w,width:x,bordW:E,bordC:C,bordR:T,lineHeight:N,bfSize:S,bfFam:z,bfCol:B,bbg:M,bpad:D,bwidth:W,bbordW:F,bbordC:j,bbordR:O,hoverBg:R,hoverCol:I}=n,A={background:v,padding:w,width:x,borderWidth:E,borderColor:C,borderRadius:T},H={lineHeight:N},L={background:m?null!==(t=null!=R?R:M)&&void 0!==t?t:v:null!=M?M:v,fontFamily:null!=z?z:f,fontSize:null!=S?S:y,color:m?null!==(l=null!=I?I:B)&&void 0!==l?l:k:null!=B?B:k,padding:null!=D?D:w,borderWidth:null!=F?F:E,borderColor:null!=j?j:C,borderRadius:null!=O?O:T,width:W};return e.createElement("div",{className:h?o:"",style:{fontFamily:f,fontSize:y,color:k}},e.createElement("div",{className:a,style:A},g&&e.createElement("button",{className:s,onClick:g,style:{color:k}},"✕"),b&&e.createElement("div",{className:d,style:H},b.map(((r,n)=>e.createElement("div",{key:"mess"+n,className:i},r)))),p&&e.createElement("button",{className:c,onClick:p,style:L,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1)},null!=_?_:"OK")))};var u="Dropdown-module_dropdown__gG-Sw",b="Dropdown-module_value__LAs-C",_="Dropdown-module_dropped__YrdWI",p="Dropdown-module_list__gEdI2";l('@charset "UTF-8";\r\n.Dropdown-module_dropdown__gG-Sw {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n  font-size: 1rem;\r\n  margin: 0;\r\n  padding: 0;\r\n  border-bottom: 2px solid black;\r\n  height: 1rem;\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.Dropdown-module_value__LAs-C {\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: black;\r\n}\r\n\r\n.Dropdown-module_value__LAs-C::after {\r\n  content: "▼";\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%);\r\n  transition: transform 0.2s linear;\r\n}\r\n\r\n.Dropdown-module_dropped__YrdWI::after {\r\n  transform: translateY(-50%) rotate(180deg);\r\n  transform-origin: center;\r\n}\r\n\r\n.Dropdown-module_list__gEdI2 {\r\n  position: absolute;\r\n  width: 100%;\r\n  max-height: 7.5rem;\r\n  border: 2px solid black;\r\n  background: white;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  list-style: none;\r\n  z-index: 99;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.Dropdown-module_list__gEdI2 li {\r\n  cursor: pointer;\r\n  padding: 0.5rem 0.25rem;\r\n}');const g=n=>{const{selectItem:t,items:l,currentValue:o,dataName:a,dataLabel:d,width:i,height:s,fFam:c,fSize:m,fCol:g,textAlign:h,underline:f,lBg:y,lWidth:k,lHeight:v,lBordW:w,lBordC:x,lBordR:E,greyLine:C,itemPad:T}=n,N={fontFamily:c,fontSize:m,color:g,width:i,height:s,borderBottom:(null!=f?f:"true")?`${null!=w?w:"2px"} solid ${null!=x?x:"black"}`:"none"},S={background:y,width:k,hegiht:v,borderWidth:w,borderColor:x,borderRadius:E,color:g},z={textAlign:h,color:g},B={padding:T},M=null==C||C,[D,W]=r(!1);return e.createElement("div",{className:u,style:N},d&&e.createElement("div",null,d," :"),e.createElement("div",{className:b+" "+(D?_:""),onClick:()=>{W(!D)},style:z},null!=o?o:"select",D&&e.createElement("ul",{className:p,style:S},l.map(((r,n)=>e.createElement("li",{key:"li"+n,onClick:()=>(e=>{t(null!=a?a:"",e.toString()),W(!1)})(r),style:Object.assign(Object.assign({},B),M&&n%2==0?{background:"#d9d9d9bb"}:{})},r))))))};var h="Table-module_section__ogogQ",f="Table-module_entriesDisplayed__KR7ph",y="Table-module_tableNavigation__nmdxT",k="Table-module_dropdown__ygWk4",v="Table-module_form__eH-Bx",w="Table-module_table__Dkosn",x="Table-module_heading__KY3bF",E="Table-module_grayed__qwgVm",C="Table-module_pageSelection__tlSWS",T="Table-module_currentPage__OMrGa",N="Table-module_otherPage__3icCq",S="Table-module_disabled__V3UIS";l(".Table-module_section__ogogQ {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.Table-module_entriesDisplayed__KR7ph, .Table-module_tableNavigation__nmdxT {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.Table-module_dropdown__ygWk4 {\r\n  display: flex;\r\n  gap: 2px;\r\n}\r\n\r\n.Table-module_form__eH-Bx {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.Table-module_table__Dkosn {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  border: 1px solid black;\r\n  width: 100%;\r\n  margin: 1rem 0;\r\n  background: white;\r\n}\r\n\r\n.Table-module_heading__KY3bF {\r\n  position: relative;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  -webkit-backdrop-filter: contrast(0.6);\r\n          backdrop-filter: contrast(0.6);\r\n}\r\n\r\n.Table-module_table__Dkosn th,\r\n.Table-module_table__Dkosn td {\r\n  border: 1px solid gray;\r\n  padding: 3px;\r\n}\r\n\r\n.Table-module_grayed__qwgVm:nth-child(odd) {\r\n  -webkit-backdrop-filter: contrast(0.8);\r\n          backdrop-filter: contrast(0.8);\r\n}\r\n\r\n.Table-module_pageSelection__tlSWS button {\r\n  cursor: pointer;\r\n}\r\n\r\n.Table-module_currentPage__OMrGa, .Table-module_otherPage__3icCq {\r\n  min-width: 2rem;\r\n  margin: 0 2px;\r\n}\r\n\r\n.Table-module_currentPage__OMrGa {\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.Table-module_disabled__V3UIS {\r\n  position: relative;\r\n  pointer-events: none;\r\n  color: grey;\r\n}");const z=l=>{const{title:o,headingNames:a,data:d,closeUp:i,background:s,tBordW:c,tBordC:u,tBordR:b,width:_,fFam:p,fSize:z,fCol:B,tableFCol:M,greyLine:D,prevTxt:W,nextTxt:F,buttonEllipsis:j}=l,O={};a?Object.keys(a).forEach((e=>{O[e]=a[e]})):Object.keys(d[0]).forEach((e=>{O[e]=e}));const[R,I]=r(d),[A,H]=r(R),[L,P]=r({key:"",asc:!1});n((()=>{const e=[...R].sort(((e,r)=>e[L.key]>r[L.key]?L.asc?1:-1:e[L.key]<r[L.key]?L.asc?-1:1:0));H(e)}),[L,R]);const[V,Y]=r(10),[G,K]=r(1),[q,U]=r(0);n((()=>{U(Math.ceil(R.length/V))}),[V,R,q]);const J=e=>{let r=G;r+=e,r>0&&r<=q&&K(r)},Q=null!=j?j:"true",[X,Z]=r("");n((()=>{$(X.toString())}),[X]);const $=e=>{const r=e.toLowerCase(),n=[];l.data.forEach((e=>{const t=Object.keys(e);let l=!1;t.forEach((t=>{var o;const a=null!==(o=e[t])&&void 0!==o?o:"";if(!l){a.toString().toLowerCase().match(r)&&(n.push(e),l=!0)}}))})),I(n)},[ee,re]=r([""]),[ne,te]=r(!1),le=null==i||i,oe=()=>{te(!ne)},ae=null!=D?D:"true",de={fontFamily:p,color:B,fontSize:z},ie={width:_,borderWidth:c,borderColor:u,borderRadius:b,background:s,color:M},se={cursor:le?"pointer":"default"},ce={color:M,fontSize:z,background:s};return e.createElement("section",{className:h,style:de},e.createElement("div",{className:f},e.createElement("span",{className:k},"Show",e.createElement(g,{items:[10,25,50,100],selectItem:(e,r)=>{Y(r),K(1)},currentValue:V.toString(),width:"75px",textAlign:"center",fCol:B,fSize:z,fFam:p,lBordW:null!=c?c:"2px"}),"entries"),e.createElement("form",{className:v},e.createElement("label",{htmlFor:"HRNet-Table-search"},"search"),e.createElement("input",{type:"text",name:"HRNet-Table-search",id:"HRNet-Table-search",value:X,onInput:e=>{const r=e.target;K(1),Z(r.value)}}))),e.createElement("table",{className:w},e.createElement("caption",null,null!=o?o:""),e.createElement("tbody",{style:ie},e.createElement("tr",null,Object.keys(O).map(((r,n)=>e.createElement("th",{scope:"col",key:"col"+n,onClick:()=>{return e=r,K(1),void(L.key===e?P((e=>Object.assign(Object.assign({},e),{asc:!e.asc}))):P({key:e,asc:!1}));var e},className:x},O[r]," ",r===L.key&&(L.asc?"▲":"▼"))))),A.map(((r,n)=>n>=(G-1)*V&&n<G*V&&e.createElement("tr",{key:"row"+n+1,onClick:()=>le&&(e=>{const r=[];Object.keys(O).map((n=>{var t;const l=null!==(t=e[n])&&void 0!==t?t:"---";r.push(O[n]+": "+l)})),re(r),oe()})(r),className:ae?E:"",style:se},Object.keys(O).map(((t,l)=>e.createElement("td",{scope:"col",key:"row"+n+"col"+l},r[t])))))))),e.createElement("div",{className:y},e.createElement("span",null,"Showing ",(G-1)*V+1," to"," ",G===q?R.length:G*V," ","of ",R.length," entries"),e.createElement("div",{className:C},e.createElement("button",{className:1===G?S:"",onClick:()=>J(-1),style:ce},null!=W?W:"prev"),Array.from(Array(q)).map(((r,n)=>e.createElement(t,{key:"pageNavigation"+n},!Q||q<7||Math.abs(G-n-1)<3||G<=2&&n<=4||G>=q-2&&n>q-6||0===n||n===q-1?G===n+1?e.createElement("span",{className:T},n+1):e.createElement("button",{onClick:()=>(e=>{K(e)})(n+1),className:N,key:"pageBtn"+n,style:ce},n+1):(G-3===n+1||G+3===n+1||G<=2&&5===n||G>=q-2&&n>q-7)&&e.createElement("span",{className:T},"...")))),e.createElement("button",{className:G===q?S:"",onClick:()=>J(1),style:ce},null!=F?F:"next"))),ne&&e.createElement(m,{overlay:!0,close:oe,confirm:oe,message:ee,fSize:z,fFam:p,fCol:M,bordC:u,bordR:b,bordW:c,bg:s,lineHeight:"1,5"}))};export{g as Dropdown,m as Modal,z as Table};
//# sourceMappingURL=index.js.map
