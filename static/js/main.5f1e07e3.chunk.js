(this.webpackJsonpcomet_hurricane_conversion_v2=this.webpackJsonpcomet_hurricane_conversion_v2||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),c=a.n(i),l=(a(11),function(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)}),o=function(e){var t=e.children,a=e.classes;return r.a.createElement("div",{className:"sub-container ".concat(a)},t)},s=a(3),d=a(4),u=a(1),m=function(e){var t=e.type,a=e.handleClick,n=e.text,i=e.data;return r.a.createElement("button",{className:"btn",type:t,onClick:function(e){return a(e)},disabled:"reset"===t?!(i.low||i.high||i.hurricane):!(i.low&&i.high&&i.hurricane)},n)},g=function(e){var t=e.activeTargets,a=e.isToggled,i=e.isSubmitted,c=e.children,l=Object(n.useState)(""),o=Object(u.a)(l,2),s=o[0],d=o[1],m=Object(n.useState)(""),g=Object(u.a)(m,2),h=g[0],b=g[1];return Object(n.useEffect)((function(){d("".concat(t.low,"_").concat(t.high)),b("".concat(t.low,"_").concat(t.high,"_").concat(t.hurricane))}),[t,i]),r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{src:"./graphics/movncane_base.jpg",alt:"",className:"img-background"}),r.a.createElement("div",{className:"img-overlay-container"},r.a.createElement("img",{src:"./graphics/".concat(s,".png"),alt:"",className:"img-overlay",style:s&&a&&t.hurricane?{visibility:"visible",opacity:"50%"}:{visibility:"hidden"}})),h&&i?r.a.createElement("div",{className:"animated-gif"},r.a.createElement("img",{src:"./graphics/".concat(h,".gif"),alt:""})):null,c)},h=function(e){var t=e.isShowing,a=e.hide,n=e.modalData;return t?c.a.createPortal(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-overlay"}),r.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h3",null,n.heading)),r.a.createElement("p",null,n.text),r.a.createElement("button",{type:"button",className:"btn modal-close-button","data-dismiss":"modal","aria-label":"Close",data:"close",onClick:a},r.a.createElement("span",{"aria-hidden":"true",data:"close",onClick:a},"Close"))))),document.body):null},b=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),c=Object(u.a)(i,2),l=c[0],o=c[1];return{isShowing:a,toggle:function(e){var t=e.target.getAttribute("data");"directions"===t?(o({heading:"How to Aim a Hurricane",text:"Click and drag the red low (L) onto a low target over the United States, the blue high (H) onto a high target over the Atlantic Ocean, and the animated hurricane onto either starting location target over the Atlantic Ocean. When all three are positioned, the Start button will turn blue. Click it to see the storm track for that combination. Click on the Reset button to return the draggable items back to the starting bin."}),r(!a)):"credits"===t?(o({heading:"Credits",text:'The "Aim a Hurricane" simulator was built using the research and data of Dr. Mark DeMaria, NOAA/NESDIS/ORA.'}),r(!a)):"close"===t&&(o(""),r(!a))},modalData:l}},v=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useRef)(),l=Object(n.useRef)(),v=Object(n.useState)([{title:"dnd-draggables-container",items:[["L","low"],["H","high"],["hurricane","hurricane"]],accepts:"All",dataTarget:""},{title:"dnd-target dnd-target-low-1",items:[],accepts:"low",dataTarget:"low-1"},{title:"dnd-target dnd-target-low-2",items:[],accepts:"low",dataTarget:"low-2"},{title:"dnd-target dnd-target-low-3",items:[],accepts:"low",dataTarget:"low-3"},{title:"dnd-target dnd-target-low-4",items:[],accepts:"low",dataTarget:"low-4"},{title:"dnd-target dnd-target-high-1",items:[],accepts:"high",dataTarget:"high-1"},{title:"dnd-target dnd-target-high-2",items:[],accepts:"high",dataTarget:"high-2"},{title:"dnd-target dnd-target-high-3",items:[],accepts:"high",dataTarget:"high-3"},{title:"dnd-target dnd-target-high-4",items:[],accepts:"high",dataTarget:"high-4"},{title:"dnd-target dnd-target-hurricane-1",items:[],accepts:"hurricane",dataTarget:"hurricane-1"},{title:"dnd-target dnd-target-hurricane-2",items:[],accepts:"hurricane",dataTarget:"hurricane-2"}]),p=Object(u.a)(v,2),f=p[0],E=p[1],w=Object(n.useState)([]),O=Object(u.a)(w,2),y=O[0],S=O[1],j=Object(n.useState)({low:"",high:"",hurricane:""}),N=Object(u.a)(j,2),k=N[0],A=N[1],I=Object(n.useState)([]),T=Object(u.a)(I,2),C=T[0],_=T[1],x=Object(n.useState)(!0),D=Object(u.a)(x,2),L=D[0],H=D[1],q=Object(n.useState)(!1),R=Object(u.a)(q,2),J=R[0],W=R[1],B=b(),M=B.isShowing,F=B.toggle,P=B.modalData;Object(n.useEffect)((function(){S(f),_(k)}),[]);var U=function(e){var t=c.current;return t.grpI===e.grpI&&t.itemI===e.itemI?"active-item dnd-item":"dnd-item"},$=function(e,t){var a=c.current;e.target.getAttribute("data-value")!==l.current.getAttribute("data")&&"All"!==e.target.getAttribute("data-value")||(E((function(e){var n=JSON.parse(JSON.stringify(e));return n[t.grpI].items.splice(t.itemI,0,n[a.grpI].items.splice(a.itemI,1)[0]),c.current=t,n})),A(Object(d.a)(Object(d.a)({},k),{},Object(s.a)({},e.target.getAttribute("data-value"),e.target.getAttribute("data-target")))),i(!1))},z=function e(){document.querySelectorAll(".active").forEach((function(e){return e.classList.remove("active")})),l.current.removeEventListener("dragend",e),c.current=null,l.current=null};return r.a.createElement("div",{className:"dnd-wrapper"},r.a.createElement("h1",null,"Aim a Hurricane"),r.a.createElement(o,{classes:"dnd-inner-wrapper"},r.a.createElement(g,{activeTargets:k,isToggled:L,isSubmitted:J},r.a.createElement("div",{className:"drag-n-drop"},f.map((function(e,t){return r.a.createElement("div",{className:"dnd-group ".concat(e.title),key:e.title,"data-value":e.accepts,"data-target":e.dataTarget,onDragEnter:a&&!e.items.length?function(e){$(e,{grpI:t,itemI:0})}:null},e.items.map((function(e,n){return r.a.createElement("div",{draggable:!0,id:"dnd-item-".concat(e[1]),className:a?U({grpI:t,itemI:n}):"dnd-item",key:n,data:e[1],onDragStart:function(e){!function(e,t){c.current=t,l.current=e.target,l.current.addEventListener("dragend",z),setTimeout((function(){i(!0)}),0),document.querySelectorAll(".active").forEach((function(e){return e.classList.remove("active")})),function(e){e.forEach((function(e){e.classList.add("active")}))}(document.querySelectorAll(".dnd-target[data-value=".concat(l.current.getAttribute("data"),"]")))}(e,{grpI:t,itemI:n})},onDragEnter:a?function(e){$(e,{grpI:t,itemI:n})}:null},r.a.createElement("div",null,r.a.createElement("p",{className:e[1],data:e[1],style:"hurricane"===e[0]?{backgroundImage:"url(./graphics/hurricane_sprite_ani.gif)"}:null},"hurricane"===e[0]?null:e[0])))})))})),r.a.createElement("div",{className:"button-box"},r.a.createElement("div",{style:k.low&&k.high&&k.hurricane?{visibility:"visible"}:{visibility:"hidden"},className:"switch"},r.a.createElement("label",{className:"switch-label",htmlFor:"switch-input"},r.a.createElement("input",{type:"checkbox",id:"switch-input",className:"switch-input",checked:L,onChange:function(e){return H(!L)}}),"Wind Overlay")),r.a.createElement(m,{type:"submit",handleClick:function(e){document.getElementById("dnd-item-hurricane").style.display="none",document.querySelectorAll(".dnd-target").forEach((function(e){return e.classList.add("is-animating")})),W(!J)},text:"Submit",data:k}),r.a.createElement(m,{type:"reset",handleClick:function(e){e.preventDefault(),document.querySelectorAll(".dnd-target").forEach((function(e){return e.classList.remove("is-animating")})),E(y),A(C),W(!1),H(!0)},text:"Reset",data:k})))),r.a.createElement(o,null,r.a.createElement("div",{className:"info-box"},r.a.createElement("button",{className:"button-default directions-button",onClick:function(e){return F(e)},data:"directions"},"How to Aim a Hurricane"),r.a.createElement("button",{className:"button-default credit-button",onClick:function(e){return F(e)},data:"credits"},"Credits"),r.a.createElement(h,{isShowing:M,hide:function(e){return F(e)},modalData:P})))))};a(12);var p=function(){return r.a.createElement(l,null,r.a.createElement(o,null,r.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.5f1e07e3.chunk.js.map